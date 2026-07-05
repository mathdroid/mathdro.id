import Canvas from "./canvas";

export default function Page() {
  return (
    <main
      style={{
        position: "relative",
        width: "min(94vw, calc(94dvh / 1.414))",
        aspectRatio: "1000 / 1414",
        background: "#fbf9f4",
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08)",
        display: "grid",
        placeItems: "center",
      }}
    >
      <p
        style={{
          fontSize: "1.25rem",
          letterSpacing: "0.02em",
          textAlign: "center",
          userSelect: "none",
        }}
      >
        This page is intentionally left blank.
      </p>
      <Canvas />
    </main>
  );
}
