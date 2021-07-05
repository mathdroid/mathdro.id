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
    border="#1a1a1a 1px solid"
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
        <Headline alignSelf="start">COVID-19 Resources</Headline>
        <Stack spacing="1rem">
          <ButtonLink href="https://jakarta-vax-availability.vercel.app/">
            [Web] JKT Vax Info
          </ButtonLink>
          <ButtonLink href="https://jakarta-rs-availability.vercel.app/">
            [Web] JKT Hospital Info
          </ButtonLink>
          <ButtonLink href="https://oksigen.carrd.co/">
            [Web] Informasi Tabung Oksigen
          </ButtonLink>
          <ButtonLink href="https://covid19.mathdro.id">
            COVID-19 API
          </ButtonLink>
          <ButtonLink href="https://github.com/mathdroid/covid-19-api">
            COVID-19 API Repository
          </ButtonLink>
          <ButtonLink href="ttps://gist.github.com/mathdroid/41e95d3ca9886d295bfb5bb16fbd6673">
            [GIST] Jakarta Vaccination Data
          </ButtonLink>
          <ButtonLink href="https://vaksin-jakarta.yggdrasil.id/">
            [API] Jakarta Vaccination Data
          </ButtonLink>
          <ButtonLink href="https://jkt-vax-quota.vercel.app/">
            [API] Jakarta Vaccination Quota
          </ButtonLink>
        </Stack>
      </SectionStack>
    </MainLayout>
  );
};

export default Index;
