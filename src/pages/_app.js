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
            body {
              background-color: #f7fafc;
            }

            body.dark-mode {
              background-color: #171923;
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
