import React, { useEffect } from "react";
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
  Button,
  useColorMode,
} from "@chakra-ui/core";

import Hero from "../components/hero";
import Container from "../components/container";

const PrimaryButton = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";

  useEffect(() => {
    if (isDark) {
      toggleColorMode();
    }
  }, []);

  return (
    <Button
      width="100%"
      variant="solid"
      bg={isDark ? "white" : "black"}
      color={isDark ? "black" : "white"}
      _hover={{ bg: isDark ? "gray.200" : "gray.700" }}
      {...props}
    />
  );
};

const Main = (props) => (
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="48rem"
    mt="-10vw"
    py="8rem"
    px="2rem"
    {...props}
    borderRadius="8px"
    boxShadow="-8px -8px 16px rgba(255,255,255,0.5), 8px 8px 16px rgba(167, 157, 157, 0.5)"
  />
);

const Footer = (props) => <Flex as="footer" py="8rem" {...props} />;

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Mathdroid</title>
      </Head>
      <Container>
        <Hero />
        <Main>
          <Text fontWeight="800" fontSize="2rem" fontFamily="default">
            Muhammad Mustadi. (Odi)
          </Text>
          <Text fontWeight="800" fontSize="2rem" fontFamily="default">
            Software. Product. Design.
          </Text>
          <Text fontWeight="800" fontSize="2rem" fontFamily="default">
            Jakarta, Indonesia.
          </Text>

          <Text fontWeight="800" fontSize="2rem" mt={8}>
            <Link href="/live">
              <ChakraLink href="/live">
                Stream <Icon name="link" mx="2px" />
              </ChakraLink>
            </Link>
            {". "}
            <Link href="/support">
              <ChakraLink href="/support">
                Support <Icon name="link" mx="2px" />
              </ChakraLink>
            </Link>
          </Text>

          <Text fontWeight="800" fontSize="2rem" mt={8}>
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
            .
          </Text>
        </Main>

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
        <Container
          flexDirection="row"
          position="fixed"
          bottom="0"
          width="100%"
          maxWidth="48rem"
          py={2}
        >
          <Link href="/support">
            <ChakraLink href="/support" flexGrow={1} mx={2}>
              <Button width="100%" variant="outline" variantColor="black">
                Support
              </Button>
            </ChakraLink>
          </Link>
          <Link href="mailto:hello@mathdro.id">
            <ChakraLink
              isExternal
              href="mailto:hello@mathdro.id"
              flexGrow={3}
              mx={2}
            >
              <PrimaryButton rightIcon="email">Send Email</PrimaryButton>
            </ChakraLink>
          </Link>
        </Container>
      </Container>
    </>
  );
};

export default withTheme(Index);
