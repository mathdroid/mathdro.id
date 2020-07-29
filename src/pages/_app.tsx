import React from "react";
import App from "next/app";
import {
  ThemeProvider,
  CSSReset,
  DarkMode,
  ColorModeProvider,
} from "@chakra-ui/core";
import { Global, css } from "@emotion/core";

import theme from "../theme";

class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Global
          styles={css`
            body {
              background: #111;
              min-height: 100vh;
            }
            *::selection {
              text-shadow: none;
              color: black;
              background: white;
            }
          `}
        />
        <DarkMode>
          <Component />
        </DarkMode>
      </ThemeProvider>
    );
  }
}

export default MyApp;
