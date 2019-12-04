import React from "react";
import App from "next/app";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
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
            html,
            body {
              background-image: url("/static/dot-grid.png");
            }
          `}
        />
        <ColorModeProvider>
          <Component />
        </ColorModeProvider>
      </ThemeProvider>
    );
  }
}

export default MyApp;
