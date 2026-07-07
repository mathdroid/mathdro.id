import { getStrokes, RENDER_LIMIT, today } from "@/lib/db";
import { renderDay } from "@/lib/daily";

export const dynamic = "force-dynamic";

// ponytail: global 1/h in-memory rate limit, resets on restart; single instance so fine
const g = globalThis as unknown as { __lastReport?: number };

export async function POST() {
  const url = process.env.DISCORD_WEBHOOK_URL;
  const bot = process.env.DISCORD_BOT_TOKEN;
  const channel = process.env.DISCORD_CHANNEL_ID;
  if (!url && !(bot && channel))
    return new Response("not configured", { status: 503 });

  if (Date.now() - (g.__lastReport ?? 0) < 3_600_000)
    return new Response("already reported recently", { status: 429 });
  g.__lastReport = Date.now();

  const day = today();
  const png = await (
    await renderDay(day, getStrokes(day, RENDER_LIMIT))
  ).arrayBuffer();

  // A working "Wipe" button needs an app-owned message, so it only appears when
  // the bot is configured; the plain webhook falls back to the curl command.
  const useBot = Boolean(bot && channel);
  const payload = useBot
    ? {
        content: `A visitor reported the drawing on ${day}.`,
        components: [
          {
            type: 1,
            components: [
              { type: 2, style: 4, label: "Wipe drawings", custom_id: "wipe" },
            ],
          },
        ],
      }
    : {
        content: `A visitor reported the drawing on ${day}. Wipe it with:\n\`curl -X DELETE -H "Authorization: Bearer $ADMIN_TOKEN" https://mathdro.id/api/strokes\``,
      };

  const form = new FormData();
  form.append("payload_json", JSON.stringify(payload));
  form.append(
    "files[0]",
    new Blob([png], { type: "image/png" }),
    `report-${day}.png`,
  );

  const res = useBot
    ? await fetch(`https://discord.com/api/v10/channels/${channel}/messages`, {
        method: "POST",
        headers: { Authorization: `Bot ${bot}` },
        body: form,
      })
    : await fetch(url!, { method: "POST", body: form });
  if (!res.ok) {
    g.__lastReport = 0; // let someone retry if discord failed
    return new Response("report failed", { status: 502 });
  }
  return Response.json({ ok: true });
}
