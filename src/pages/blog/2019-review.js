import { useRouter } from "next/router";
import Head from "next/head";

import { H1 } from "../../components/H1";
import Container from "../../components/container";
import { DarkModeToggle } from "../../components/buttons/dark-mode-toggle";
import { Stack, Text } from "@chakra-ui/core";

export default () => {
  const router = useRouter();
  setTimeout(() => {
    if (typeof window !== "undefined") {
      window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
  }, 5000);
  return (
    <>
      <Head>
        <title>2019 In Review</title>
      </Head>
      <DarkModeToggle></DarkModeToggle>
      <Container height="100vh">
        <Stack
          spacing="8"
          maxWidth="24rem"
          width="calc(100% - 1rem)"
          mt="8rem"
          alignItems="center"
        >
          <H1 alignSelf="flex-start">2019 In Review</H1>
          <Text alignSelf="flex-start">Loading post...</Text>
        </Stack>
      </Container>
    </>
  );
};
