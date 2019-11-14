import NextLink from "next/link";
import { Button, Heading, Text, Stack, Link } from "@chakra-ui/core";
import { FaYoutube, FaTwitch } from "react-icons/fa";

import Container from "../components/container";
import { DarkModeToggle } from "../components/buttons/dark-mode-toggle";
export default () => (
  <>
    <DarkModeToggle />
    <Container height="100vh">
      <Stack
        spacing="8"
        maxWidth="48rem"
        width="calc(100% -32px)"
        mt="8rem"
        alignItems="center"
      >
        <Heading alignSelf="flex-start">Livestreams</Heading>
        <Text alignSelf="flex-start">
          I do code live streams every day @ 1900 (UTC+7)
        </Text>
        <Button
          width="24rem"
          leftIcon={FaYoutube}
          variant="solid"
          variantColor="red"
        >
          <NextLink href="https://www.youtube.com/watch?v=rVgsWQepuLk">
            Youtube
          </NextLink>
        </Button>
        <Button
          width="24rem"
          leftIcon={FaTwitch}
          variant="solid"
          variantColor="purple"
        >
          <NextLink href=" https://www.twitch.tv/mathdroid">Twitch</NextLink>
        </Button>
        <NextLink href="/">
          <Link textDecoration="underline">Back to main page</Link>
        </NextLink>
      </Stack>
    </Container>
  </>
);
