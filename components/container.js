import React from "react";
import { css } from "@emotion/core";

const Container = props => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      animation: fadein 2s;
      color: inherit;
      background: inherit;
      padding: 0 1rem;
    `}
    {...props}
  />
);

export default Container;
