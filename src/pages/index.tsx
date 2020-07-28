import React from "react";
import Head from "next/head";
import { Stack, Link, } from "@chakra-ui/core";
import { NextSeo } from 'next-seo';

import { Headline, H1, Paragraph } from "../components/Typography";
import { SiteButton } from "../components/SiteButton";

const MainCard = (props) => (
  <Stack
    spacing="1.5rem"
    mx="2rem"
    width="100%"
    maxWidth="48rem"
    {...props}
  />
);

const MainStack = (props) => (
  <Stack spacing="2rem" direction="column" my="8rem" mx="2rem" alignItems="center" {...props} />
);

const Index = () => {
  return (
    <>
      <Head>
        <title>Mathdroid</title>
      </Head>
      <NextSeo
        title="Mathdroid"
        description="A full stack software developer, crafting with Typescript, React, and Node.js
      at the moment. Into hackathons, strategy games, and building useful
      products."
      />
      <MainStack>
        <MainCard
          py="4rem"
          px="2rem"
          borderRadius="8px"
          background="linear-gradient(#161616, #111 90%)">
          <Headline>@mathdroid • Odi</Headline>
          <H1>Muhammad Mustadi</H1>
          <Paragraph>
            A full stack software developer, crafting with Typescript, React, and Node.js
            at the moment. Into hackathons, strategy games, and building useful
            products.
          </Paragraph>
          <Paragraph>Currently available as a contractor/consultant.</Paragraph>
          <SiteButton onClick={() => {
            alert('Site is still under construction so here is the email: muhammad.mustadi@gmail.com')
          }}>
            Contact mathdroid
            </SiteButton>        </MainCard>
        <MainCard>
          <Headline alignSelf="start">Links</Headline>
          <Stack spacing="1rem">

            <SiteButton
              _hover={{
                bg: "#1da1f2",
              }}
              as={Link}>Twitter</SiteButton>
            <Link href="https://github.com/mathdroid"><SiteButton
              _hover={{
                color: "black",
                bg: "white",
              }}>Github</SiteButton></Link>

          </Stack>
        </MainCard>
      </MainStack>
    </>
  );
};

export default Index;
