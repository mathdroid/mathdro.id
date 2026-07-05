import { addStroke, getStrokes, strokeCount, today, type Stroke } from "@/lib/db";
import { publish } from "@/lib/bus";
import { COLORS } from "@/lib/colors";

export const dynamic = "force-dynamic";

export async function GET() {
  const day = today();
  return Response.json({ day, strokes: getStrokes(day) });
}

function valid(body: any): body is Stroke & { client: string } {
  return (
    body &&
    COLORS.includes(body.color) &&
    typeof body.client === "string" &&
    body.client.length <= 32 &&
    Array.isArray(body.points) &&
    body.points.length >= 2 &&
    body.points.length <= 500 &&
    body.points.every(
      (p: any) =>
        Array.isArray(p) &&
        p.length === 2 &&
        p.every((n: any) => typeof n === "number" && n >= 0 && n <= 1),
    )
  );
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!valid(body)) return new Response("bad stroke", { status: 400 });

  const day = today();
  // ponytail: crude flood cap instead of per-IP rate limiting; add real limiting if it gets griefed
  if (strokeCount(day) >= 20_000)
    return new Response("page is full", { status: 429 });

  const stroke = {
    color: body.color,
    points: body.points.map(([x, y]) => [
      Math.round(x * 1e4) / 1e4,
      Math.round(y * 1e4) / 1e4,
    ]) as [number, number][],
  };
  addStroke(day, stroke);
  publish({ ...stroke, client: body.client });
  return Response.json({ ok: true });
}
