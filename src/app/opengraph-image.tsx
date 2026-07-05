import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "This page is intentionally left blank.";

export default async function OpengraphImage() {
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
        }}
      >
        <div style={{ fontSize: 52, letterSpacing: 1 }}>
          This page is intentionally left blank.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "EB Garamond", data: font, style: "normal" }],
    },
  );
}
