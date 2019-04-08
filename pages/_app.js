import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider } from "emotion-theming";
import { Global, css } from "@emotion/core";

import theme from "../components/theme";

class MyApp extends App {
  state = {
    dark: false
  };

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  setDark = dark => this.setState({ dark });

  render() {
    const { Component, pageProps } = this.props;
    const { dark } = this.state;
    return (
      <Container>
        <ThemeProvider theme={{ ...theme, dark }}>
          <Global
            styles={css`
              body {
                margin: 0;
                background: ${dark ? "black" : "white"};
                color: ${dark ? "white" : "black"};
              }
              h1 {
                margin-top: 0;
                margin-bottom: 0.5rem;
              }
              a {
                color: inherit;
              }
            `}
          />
          <Component {...pageProps} setDark={this.setDark} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
