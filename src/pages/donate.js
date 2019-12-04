import Head from "next/head";
import NextLink from "next/link";
import { Button, Heading, Text, Stack, Link, Icon } from "@chakra-ui/core";

import Container from "../components/container";
import { DarkModeToggle } from "../components/buttons/dark-mode-toggle";
export default () => (
  <>
    <Head>
      <title>Mathdroid's Livestreams</title>
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
        <Heading alignSelf="flex-start">Donate</Heading>
        <Text alignSelf="flex-start">
          Support me with donations through these platforms!
        </Text>
        <Link isExternal href="https://karyakarsa.com/mathdroid">
          <Button
            width="16rem"
            variant="solid"
            variantColor="green"
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
        <NextLink href="/">
          <Link textDecoration="underline">
            <Icon name="arrow-back" />
            Back to home
          </Link>
        </NextLink>
      </Stack>
    </Container>
  </>
);
