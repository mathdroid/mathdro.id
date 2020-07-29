import React from "react";
import Head from "next/head";
import { Stack, SimpleGrid } from "@chakra-ui/core";
import { NextSeo } from "next-seo";

import { Headline, H1, Paragraph } from "../components/Typography";
import { SiteButton } from "../components/SiteButton";
import { MainLayout } from "../components/layout/MainLayout";
import { ButtonLink } from "../components/SiteLink";

const SectionStack = (props) => (
  <Stack spacing="2rem" width="100%" {...props} />
);

const GradientCard = (props) => (
  <SectionStack
    py="2rem"
    px="1rem"
    borderRadius="8px"
    background="linear-gradient(#1a1a1a, #111 90%)"
    {...props}
  />
);

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
      <GradientCard>
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
      </GradientCard>

      <SectionStack>
        <Headline>Projects</Headline>
        <GradientCard>
          <Headline>Featured project</Headline>
          <H1 as="h2">Coming Soon</H1>
          <Paragraph>Some description here</Paragraph>
        </GradientCard>
        <SimpleGrid columns={2} spacing={10}>
          <GradientCard>
            <H1 as="h2">Coming Soon</H1>
            <Paragraph>Some description here</Paragraph>
          </GradientCard>
          <GradientCard>
            <H1 as="h2">Coming Soon</H1>
            <Paragraph>Some description here</Paragraph>
          </GradientCard>
        </SimpleGrid>
        <SiteButton>View all projects</SiteButton>
      </SectionStack>

      <SectionStack>
        <Headline>Blog</Headline>
        <GradientCard>
          <Headline>Featured post</Headline>
          <H1 as="h2">Coming Soon</H1>
        </GradientCard>
      </SectionStack>

      <SectionStack>
        <Headline alignSelf="start">On the web</Headline>
        <Stack spacing="1rem">
          <ButtonLink href="https://twitter.com/mathdroid">Twitter</ButtonLink>
          <ButtonLink href="https://github.com/mathdroid">Github</ButtonLink>
        </Stack>
      </SectionStack>
    </MainLayout>
  );
};

export default Index;
