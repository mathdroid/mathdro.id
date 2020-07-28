import React from "react";
import Head from "next/head";
import { Stack, Link } from "@chakra-ui/core";
import { NextSeo } from "next-seo";

import { Headline, H1, Paragraph } from "../components/Typography";
import { SiteButton } from "../components/SiteButton";
import { MainLayout } from "../components/layout/MainLayout";
import { ButtonLink } from "../components/Link";

const MainCard = (props) => <Stack spacing="1.5rem" width="100%" {...props} />;

const Index = () => {
  return (
    <MainLayout>
      <Head>
        <title>Mathdroid</title>
      </Head>
      <NextSeo
        title="Mathdroid"
        description="A full stack software developer, crafting with Typescript, React, and Node.js
      at the moment. Into hackathons, strategy games, and building useful
      products."
      />
      <MainCard
        py="2rem"
        px="1rem"
        borderRadius="8px"
        background="linear-gradient(#161616, #111 90%)"
      >
        <H1>Muhammad Mustadi</H1>
        <Paragraph>
          A full stack software developer, crafting with Typescript, React, and
          Node.js at the moment. Into hackathons, strategy games, and building
          useful products.
        </Paragraph>
        <Paragraph>Currently available as a contractor/consultant.</Paragraph>
        <SiteButton
          onClick={() => {
            alert(
              "Site is still under construction so here is the email: muhammad.mustadi@gmail.com"
            );
          }}
        >
          Contact mathdroid
        </SiteButton>
      </MainCard>

      <MainCard>
        <Headline alignSelf="start">On the web</Headline>
        <Stack spacing="1rem">
          <ButtonLink href="https://twitter.com/mathdroid">Twitter</ButtonLink>
          <Link href="https://github.com/mathdroid">
            <SiteButton
              _hover={{
                color: "black",
                bg: "white",
              }}
            >
              Github
            </SiteButton>
          </Link>
        </Stack>
      </MainCard>
    </MainLayout>
  );
};

export default Index;
