import { DatabaseSync } from "node:sqlite";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";

const file = process.env.DB_PATH ?? "data/drawing.db";
mkdirSync(dirname(file), { recursive: true });

const db = new DatabaseSync(file);
db.exec(`
  CREATE TABLE IF NOT EXISTS strokes (
    id INTEGER PRIMARY KEY,
    day TEXT NOT NULL,
    color TEXT NOT NULL,
    points TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  CREATE INDEX IF NOT EXISTS strokes_day ON strokes(day);
  CREATE TABLE IF NOT EXISTS posted (day TEXT PRIMARY KEY);
`);

export type Stroke = { color: string; points: [number, number][] };

// ponytail: day boundary hardcoded to Asia/Jakarta, make it an env var if anyone abroad complains
export const today = () =>
  new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Jakarta" });

export const yesterday = () =>
  new Date(Date.now() - 86_400_000).toLocaleDateString("en-CA", {
    timeZone: "Asia/Jakarta",
  });

export function addStroke(day: string, stroke: Stroke) {
  db.prepare("INSERT INTO strokes (day, color, points) VALUES (?, ?, ?)").run(
    day,
    stroke.color,
    JSON.stringify(stroke.points),
  );
}

// with a limit, returns the most recent `limit` strokes in draw order (oldest first)
export function getStrokes(day: string, limit?: number): Stroke[] {
  const rows = limit
    ? db
        .prepare(
          "SELECT color, points FROM strokes WHERE day = ? ORDER BY id DESC LIMIT ?",
        )
        .all(day, limit)
        .reverse()
    : db
        .prepare("SELECT color, points FROM strokes WHERE day = ? ORDER BY id")
        .all(day);
  return rows.map((r: any) => ({ color: r.color, points: JSON.parse(r.points) }));
}

export const RENDER_LIMIT = 10_000;

export function strokeCount(day: string): number {
  return (
    db.prepare("SELECT COUNT(*) AS n FROM strokes WHERE day = ?").get(day) as any
  ).n;
}

export function clearStrokes(day: string) {
  db.prepare("DELETE FROM strokes WHERE day = ?").run(day);
}

export const isPosted = (day: string) =>
  !!db.prepare("SELECT 1 FROM posted WHERE day = ?").get(day);

export const markPosted = (day: string) =>
  db.prepare("INSERT OR IGNORE INTO posted (day) VALUES (?)").run(day);
