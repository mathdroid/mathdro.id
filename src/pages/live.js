import Head from "next/head";
import NextLink from "next/link";
import { Button, Heading, Text, Stack, Link, Icon } from "@chakra-ui/core";
import { FaYoutube, FaTwitch } from "react-icons/fa";

import Container from "../components/container";
import { DarkModeToggle } from "../components/buttons/dark-mode-toggle";
import { H1 } from "../components/H1";
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
        <H1 alignSelf="flex-start">Livestreams</H1>
        <Text alignSelf="flex-start">
          I do code live streams every day @ 2100 (UTC+7)
        </Text>
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

        <Text alignSelf="flex-start" mt={8}>
          Recap is available on YouTube (after editing is done)
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
