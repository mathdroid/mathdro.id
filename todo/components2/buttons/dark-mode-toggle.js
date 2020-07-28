
import Toggle from "react-moon-toggle";

import { css } from "@emotion/core";


import {
    useColorMode,
  } from "@chakra-ui/core";

  
import { buttonResetCSS } from "./button";
export const DarkModeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return (
      <Toggle
        dark={isDark}
        setDark={() => {
          toggleColorMode();
        }}
        css={css`
          ${buttonResetCSS}
          &:focus {
            outline: none;
          }
          color: ${isDark ? "white" : "black"};
          position: fixed;
          top: 1rem;
          right: 1rem;
          font-weight: 200;
          transition: color 0.5s ease-in-out;
        `}
      />
    );
  };