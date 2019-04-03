import React from "react";

const SvgTextRaw01 = props => (
  <>
    <svg data-name="Layer 1" {...props}>
      <text
        fontSize={128}
        fontFamily="Inter"
        fontWeight={700}
        fontStyle="italic"
      >
        {"ma"}
        <tspan x={159.64} y={0} letterSpacing={1}>
          {"t"}
        </tspan>
        <tspan x={202.41} y={0}>
          {"hd"}
        </tspan>
        <tspan x={337.2} y={0} letterSpacing={-2}>
          {"r"}
        </tspan>
        <tspan x={380.32} y={0}>
          {"oid"}
        </tspan>
      </text>
    </svg>
    <style jsx>
      {`
        svg {
          margin: 0 2rem;
        }
        svg,
        text {
          width: 100%;
          max-width: 48rem;
        }
      `}
    </style>
  </>
);

export default SvgTextRaw01;
