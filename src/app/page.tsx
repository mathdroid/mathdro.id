import Canvas from "./canvas";

export default function Page() {
  return (
    <main
      style={{
        position: "fixed",
        inset: 0,
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
