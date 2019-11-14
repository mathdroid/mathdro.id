import Head from "next/head";
import NextLink from "next/link";
import { Button, Heading, Text, Stack, Link } from "@chakra-ui/core";
import { FaYoutube, FaTwitch } from "react-icons/fa";

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
        <Heading alignSelf="flex-start">Livestreams</Heading>
        <Text alignSelf="flex-start">
          I do code live streams every day @ 1900 (UTC+7)
        </Text>
        <Link isExternal href="https://www.youtube.com/watch?v=rVgsWQepuLk">
          <Button
            width="16rem"
            leftIcon={FaYoutube}
            variant="solid"
            variantColor="red"
          >
            YouTube
          </Button>
        </Link>
        <Link isExternal href="https://www.twitch.tv/mathdroid">
          <Button
            width="16rem"
            leftIcon={FaTwitch}
            variant="solid"
            variantColor="purple"
          >
            Twitch
          </Button>
        </Link>
        <NextLink href="/">
          <Link textDecoration="underline">Back to main page</Link>
        </NextLink>
      </Stack>
    </Container>
  </>
);
