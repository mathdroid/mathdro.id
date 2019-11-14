import React from "react";
import Head from "next/head";
import Link from "next/link";
import { withTheme } from "emotion-theming";
import {
  Heading,
  Link as ChakraLink,
  Text,
  Icon,
  Stack,
  Flex,
  Box
} from "@chakra-ui/core";

import Hero from "../components/hero";
import Container from "../components/container";
import FloatingCTA from "../components/buttons/floating-cta-button";
import { DarkModeToggle } from "../components/buttons/dark-mode-toggle";

const Main = props => (
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="48rem"
    mt="-40vh"
    pt="8rem"
    px="1rem"
    {...props}
  />
);

const Footer = props => <Flex as="footer" py="8rem" {...props} />;

const Index = props => {
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

          <Text as="nav" fontSize={["1.875rem", "2.25rem"]} fontWeight="bold">
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
              <ChakraLink href="/live">Stream</ChakraLink>
            </Link>
          </Text>
        </Main>

        <DarkModeToggle />
        <Footer>
          <Text>
            &copy; 2019 mathdroid.{" "}
            <ChakraLink
              isExternal
              href="https://github.com/mathdroid/mathdro.id"
            >
              Repository <Icon name="external-link" mx="2px" />
            </ChakraLink>
            .
          </Text>
        </Footer>
        <FloatingCTA>Contact</FloatingCTA>
      </Container>
    </>
  );
};

export default withTheme(Index);
