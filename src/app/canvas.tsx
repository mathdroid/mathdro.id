"use client";

import { useEffect, useRef, useState } from "react";
import { COLORS } from "@/lib/colors";

type Point = [number, number];
type Stroke = { color: string; points: Point[] };

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const strokes = useRef<Stroke[]>([]);
  const current = useRef<Point[] | null>(null);
  const clientId = useRef(Math.random().toString(36).slice(2, 10));
  const [color, setColor] = useState(COLORS[0]);
  const [hidden, setHidden] = useState(false);
  const [reported, setReported] = useState(false);
  const colorRef = useRef(color);
  colorRef.current = color;

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    // ponytail: strokes are normalized per-axis to the viewport, so they
    // stretch a bit between screen shapes; fine for doodles
    const drawStroke = (s: Stroke) => {
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      const w = canvas.width / devicePixelRatio;
      const h = canvas.height / devicePixelRatio;
      ctx.lineWidth = 2.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = s.color;
      ctx.beginPath();
      s.points.forEach(([x, y], i) => {
        i === 0 ? ctx.moveTo(x * w, y * h) : ctx.lineTo(x * w, y * h);
      });
      ctx.stroke();
    };

    const redraw = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      strokes.current.forEach(drawStroke);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;
      redraw();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    fetch("/api/strokes")
      .then((r) => r.json())
      .then((d) => {
        strokes.current = d.strokes;
        redraw();
      });

    const es = new EventSource("/api/strokes/stream");
    es.onmessage = (e) => {
      const s = JSON.parse(e.data);
      if (s.type === "clear") {
        strokes.current = [];
        redraw();
        return;
      }
      if (s.client === clientId.current) return;
      strokes.current.push(s);
      drawStroke(s);
    };

    const toPoint = (e: PointerEvent): Point => {
      const rect = canvas.getBoundingClientRect();
      return [
        Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width)),
        Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height)),
      ];
    };

    const down = (e: PointerEvent) => {
      e.preventDefault();
      canvas.setPointerCapture(e.pointerId);
      current.current = [toPoint(e)];
    };
    const move = (e: PointerEvent) => {
      const pts = current.current;
      if (!pts || pts.length >= 500) return;
      const p = toPoint(e);
      const [lx, ly] = pts[pts.length - 1];
      if (Math.hypot(p[0] - lx, p[1] - ly) < 0.003) return;
      pts.push(p);
      drawStroke({ color: colorRef.current, points: [pts[pts.length - 2], p] });
    };
    const up = () => {
      const pts = current.current;
      current.current = null;
      if (!pts || pts.length < 2) return;
      const stroke = { color: colorRef.current, points: pts };
      strokes.current.push(stroke);
      fetch("/api/strokes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...stroke, client: clientId.current }),
      });
    };

    canvas.addEventListener("pointerdown", down);
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerup", up);
    canvas.addEventListener("pointercancel", up);

    return () => {
      ro.disconnect();
      es.close();
      canvas.removeEventListener("pointerdown", down);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerup", up);
      canvas.removeEventListener("pointercancel", up);
    };
  }, []);

  const report = () => {
    setReported(true);
    // 429 = someone else already reported this hour; same outcome for the visitor
    fetch("/api/report", { method: "POST" }).catch(() => {});
  };

  const textBtn = {
    fontSize: "0.75rem",
    background: "none",
    border: "none",
    padding: 0,
    color: "#999",
    cursor: "pointer",
    textDecoration: "underline",
  } as const;

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          touchAction: "none",
          cursor: "crosshair",
          visibility: hidden ? "hidden" : "visible",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0.75rem",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        {!hidden &&
          COLORS.map((c) => (
            <button
              key={c}
              aria-label={`draw in ${c}`}
              onClick={() => setColor(c)}
              style={{
                width: "1.1rem",
                height: "1.1rem",
                borderRadius: "50%",
                border: c === color ? "2px solid #888" : "2px solid transparent",
                background: c,
                padding: 0,
                cursor: "pointer",
              }}
            />
          ))}
        <button onClick={() => setHidden(!hidden)} style={textBtn}>
          {hidden ? "show drawings" : "hide"}
        </button>
        {!hidden && (
          <button onClick={report} disabled={reported} style={textBtn}>
            {reported ? "reported" : "report"}
          </button>
        )}
      </div>
    </>
  );
}
