import Head from "next/head";
import NextLink from "next/link";
import { Button, Heading, Text, Stack, Link, Icon } from "@chakra-ui/core";

import Container from "../components/container";
import { DarkModeToggle } from "../components/buttons/dark-mode-toggle";
import { H1 } from "../components/H1";

export default () => (
  <>
    <Head>
      <title>Support Mathdroid</title>
    </Head>
    <DarkModeToggle />
    <Container height="100vh">
      <Stack
        spacing="8"
        maxWidth="24rem"
        width="calc(100% - 1rem)"
        mt="8rem"
        alignItems="center"
      >
        <H1 alignSelf="flex-start">Support</H1>
        <Text alignSelf="flex-start">
          Support me with donations through these platforms!
        </Text>
        <Heading>Global</Heading>
        <Link isExternal href="https://ko-fi.com/mathdroid">
          <Button
            width="16rem"
            variant="solid"
            variantColor="blue"
            rightIcon="external-link"
          >
            Ko-fi
          </Button>
        </Link>

        <Heading>Indonesia</Heading>
        <Link isExternal href="https://karyakarsa.com/mathdroid">
          <Button
            width="16rem"
            variant="solid"
            variantColor="black"
            bg="black"
            _hover={{ bg: "gray.800" }}
            color="white"
            leftIcon="karyakarsa"
            rightIcon="external-link"
          >
            KaryaKarsa
          </Button>
        </Link>
        <Link isExternal href="https://saweria.co/donate/mathdroid">
          <Button
            width="16rem"
            variant="solid"
            variantColor="green"
            rightIcon="external-link"
          >
            Saweria
          </Button>
        </Link>

        <Text>
          <NextLink href="/">
            <Link textDecoration="underline">
              <Icon name="arrow-back" />
              Back to home
            </Link>
          </NextLink>
        </Text>
      </Stack>
    </Container>
  </>
);
