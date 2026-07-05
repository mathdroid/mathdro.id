import type { Metadata } from "next";
import localFont from "next/font/local";

const garamond = localFont({ src: "./eb-garamond.ttf" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mathdro.id"),
  title: "mathdro.id - This page is intentionally left blank.",
  description:
    "This page is intentionally left blank. No content is provided, none is forthcoming, and nothing has been omitted in error. Try: ssh mathdro.id",
  openGraph: {
    siteName: "mathdro.id",
    title: "mathdro.id",
    description: "This page is intentionally left blank.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={garamond.className}>
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          display: "grid",
          placeItems: "center",
          background: "#fbf9f4",
          color: "#222",
        }}
      >
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log("%cssh mathdro.id", "font-family:ui-monospace,monospace");`,
          }}
        />
      </body>
    </html>
  );
}
