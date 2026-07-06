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

export function getStrokes(day: string): Stroke[] {
  return db
    .prepare("SELECT color, points FROM strokes WHERE day = ? ORDER BY id")
    .all(day)
    .map((r: any) => ({ color: r.color, points: JSON.parse(r.points) }));
}

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
