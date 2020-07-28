import React from "react";
import App from "next/app";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
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
              padding-bottom: 8rem;
            }
            *::selection {
              text-shadow: none;
              color: black;
              background: white;
            }
          `}
        />
        <Component />
      </ThemeProvider>
    );
  }
}

export default MyApp;
