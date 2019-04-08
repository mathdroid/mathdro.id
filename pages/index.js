import React from "react";
import Head from "next/head";
import { css } from "@emotion/core";
import { withTheme } from "emotion-theming";

import Hero from "../components/hero";
import Container from "../components/container";
import Toggle from "../components/buttons/light-dark-toggle";
import FloatingCTA from "../components/buttons/floating-cta-button";

const Main = props => (
  <main
    css={css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      max-width: 48rem;
      margin-top: -50vh;
      padding-top: 8rem;
    `}
    {...props}
  />
);

const Footer = props => (
  <footer
    css={css`
      padding: 4rem 0 8rem 0;
    `}
    {...props}
  />
);

const Index = props => {
  const {
    theme: { dark },
    setDark
  } = props;
  return (
    <>
      <Head>
        <title>Mathdroid</title>
      </Head>
      <Container>
        <Hero fill="pink" {...{ dark }} />
        <Main>
          <h1>Muhammad Mustadi. (Odi)</h1>
          <h1>Software. Product. Design.</h1>
          <h1>Jakarta, Indonesia.</h1>

          <h1>
            <a href="https://github.com/mathdroid">Github</a>.{" "}
            <a href="https://twitter.com/mathdroid">Twitter</a>.{" "}
            <a href="https://instagram.com/mathdroid">Instagram</a>.
          </h1>
        </Main>

        <Toggle {...{ dark, setDark }} />
        <Footer>
          &copy; 2019 mathdroid.{" "}
          <a href="https://github.com/mathdroid/mathdro.id">Repository</a>.
        </Footer>
        <FloatingCTA>
          <a href="mailto:muhammad.mustadi@gmail.com">Contact</a>
        </FloatingCTA>
      </Container>
    </>
  );
};

export default withTheme(Index);
