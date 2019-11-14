import React from "react";
import Head from "next/head";
import Link from "next/link";
import { css } from "@emotion/core";
import { withTheme } from "emotion-theming";
import Toggle from "react-moon-toggle";
import {
  useColorMode,
  Heading,
  Link as ChakraLink,
  Text,
  Icon
} from "@chakra-ui/core";

import Hero from "../components/hero";
import Container from "../components/container";
import { buttonResetCSS } from "../components/buttons/button";
import FloatingCTA from "../components/buttons/floating-cta-button";

const DarkModeToggle = () => {
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
        <Hero />
        <Main>
          <Heading as="h2" fontFamily="default">
            Muhammad Mustadi. (Odi)
          </Heading>
          <Heading as="h2" fontFamily="default">
            Software. Product. Design.
          </Heading>
          <Heading as="h2" fontFamily="default">
            Jakarta, Indonesia.
          </Heading>

          <Text as="nav" fontSize="1.875rem" fontWeight="bold">
            <Link href="https://github.com/mathdroid">
              <ChakraLink href="https://github.com/mathdroid" isExternal>
                Github <Icon name="external-link" mx="2px" />
              </ChakraLink>
            </Link>
            .{" "}
            <Link href="https://twitter.com/mathdroid">
              <ChakraLink href="https://twitter.com/mathdroid" isExternal>
                Twitter <Icon name="external-link" mx="2px" />
              </ChakraLink>
            </Link>
            .{" "}
            <Link href="https://instagram.com/mathdroid">
              <ChakraLink href="https://instagram.com/mathdroid" isExternal>
                Instagram <Icon name="external-link" mx="2px" />
              </ChakraLink>
            </Link>
            .{" "}
            <Link href="/live">
              <ChakraLink href="/live">
                Stream <Icon name="external-link" mx="2px" />
              </ChakraLink>
            </Link>
            .
          </Text>
        </Main>

        <DarkModeToggle />
        <Footer>
          &copy; 2019 mathdroid.{" "}
          <a href="https://github.com/mathdroid/mathdro.id">Repository</a>.
        </Footer>
        <FloatingCTA>
          <a href="mailto:hello@mathdro.id">Contact</a>
        </FloatingCTA>
      </Container>
    </>
  );
};

export default withTheme(Index);
