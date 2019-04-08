import React from "react";
import { css } from "@emotion/core";
import { withTheme } from "emotion-theming";

import Button from "./button";

const FloatingCTA = ({ theme, ...props }) => (
  <Button
    css={css`
      display: flex;
      align-items: center;
      justify-content: stretch;
      position: fixed;
      bottom: 1rem;
      max-width: 48rem;
      width: calc(100% - 32px);
      transition: background 0.4s ease-in-out;
      box-shadow: 0 4px 4px ${theme.dark ? "none" : "rgba(0, 0, 0, 0.5)"};
      color: ${theme.dark ? theme.colors.black : theme.colors.white};
      background: ${theme.dark ? theme.colors.white : theme.colors.black};

      &:active {
        bottom: 0.75rem;
      }

      & a {
        text-decoration: inherit;
        width: 100%;
      }
    `}
    {...props}
  />
);

export default withTheme(FloatingCTA);
