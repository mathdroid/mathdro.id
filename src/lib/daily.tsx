import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import {
  getStrokes,
  isPosted,
  markPosted,
  RENDER_LIMIT,
  yesterday,
  type Stroke,
} from "./db";

const PAGE = { w: 1000, h: 1414 };

function pathD(points: [number, number][]) {
  return points
    .map(
      ([x, y], i) =>
        `${i === 0 ? "M" : "L"}${Math.round(x * PAGE.w)} ${Math.round(y * PAGE.h)}`,
    )
    .join(" ");
}

export async function renderDay(day: string, strokes: Stroke[]) {
  const font = await readFile(join(process.cwd(), "src/app/eb-garamond.ttf"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fbf9f4",
          color: "#222",
          fontFamily: "EB Garamond",
          position: "relative",
        }}
      >
        <svg
          width={PAGE.w}
          height={PAGE.h}
          viewBox={`0 0 ${PAGE.w} ${PAGE.h}`}
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {strokes.map((s, i) => (
            <path
              key={i}
              d={pathD(s.points)}
              stroke={s.color}
              strokeWidth={3}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </svg>
        {/* after the svg so drawings never cover the text, matching the live page */}
        <div style={{ fontSize: 26, letterSpacing: 0.5 }}>
          This page is intentionally left blank.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 36,
            fontSize: 22,
            color: "#888",
          }}
        >
          {day}
        </div>
      </div>
    ),
    {
      width: PAGE.w,
      height: PAGE.h,
      fonts: [{ name: "EB Garamond", data: font, style: "normal" }],
    },
  );
}

// ponytail: only ever posts yesterday; a day missed while the container was down stays unposted
async function postDrawingOfTheDay() {
  const url = process.env.DISCORD_WEBHOOK_URL;
  if (!url) return;

  const day = yesterday();
  if (isPosted(day)) return;
  const strokes = getStrokes(day, RENDER_LIMIT);
  if (strokes.length === 0) {
    markPosted(day); // nothing drawn, nothing to post
    return;
  }

  const png = await (await renderDay(day, strokes)).arrayBuffer();
  const form = new FormData();
  form.append(
    "payload_json",
    JSON.stringify({ content: `Drawing of the day, ${day}` }),
  );
  form.append("files[0]", new Blob([png], { type: "image/png" }), `${day}.png`);

  const res = await fetch(url, { method: "POST", body: form });
  if (res.ok) markPosted(day);
  else console.error("discord post failed:", res.status, await res.text());
}

export function start() {
  // ponytail: in-process poor man's cron; fine while this is one long-running container
  const g = globalThis as any;
  if (g.__dailyTimer) return;
  g.__dailyTimer = setInterval(
    () => postDrawingOfTheDay().catch(console.error),
    60_000,
  );
  postDrawingOfTheDay().catch(console.error);
}
