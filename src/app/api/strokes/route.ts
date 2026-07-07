import {
  addStroke,
  clearStrokes,
  getStrokes,
  strokeCount,
  today,
  type Stroke,
} from "@/lib/db";
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

// ponytail: in-memory per-ip sliding window, resets on restart; single instance
const hits: Map<string, number[]> = ((globalThis as any).__strokeHits ??=
  new Map());

function rateLimited(ip: string) {
  if (hits.size > 10_000) hits.clear();
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 20;
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!valid(body)) return new Response("bad stroke", { status: 400 });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "?";
  if (rateLimited(ip)) return new Response("slow down", { status: 429 });

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

// admin wipe: curl -X DELETE -H "Authorization: Bearer $ADMIN_TOKEN" https://mathdro.id/api/strokes
export async function DELETE(req: Request) {
  const token = process.env.ADMIN_TOKEN;
  if (!token || req.headers.get("authorization") !== `Bearer ${token}`)
    return new Response("nope", { status: 401 });
  clearStrokes(today());
  publish({ type: "clear" });
  return Response.json({ ok: true });
}
