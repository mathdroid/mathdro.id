import React from "react";
import Head from "next/head";
import Link from "next/link";
import { css } from "@emotion/core";
import { withTheme } from "emotion-theming";
import {
  Heading,
  Link as ChakraLink,
  Text,
  Icon,
  Stack,
  Flex
} from "@chakra-ui/core";

import Hero from "../components/hero";
import Container from "../components/container";
import FloatingCTA from "../components/buttons/floating-cta-button";
import { DarkModeToggle } from "../components/buttons/dark-mode-toggle";

const Main = props => (
  <Stack
    spacing="2rem"
    css={css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      max-width: 48rem;
      margin-top: -40vh;
      padding-top: 8rem;
    `}
    {...props}
  />
);

const Footer = props => <Flex as="footer" p="8rem" {...props} />;

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
          <ChakraLink isExternal href="https://github.com/mathdroid/mathdro.id">
            Repository
          </ChakraLink>
          .
        </Footer>
        <FloatingCTA>
          <a href="mailto:hello@mathdro.id">Contact</a>
        </FloatingCTA>
      </Container>
    </>
  );
};

export default withTheme(Index);
