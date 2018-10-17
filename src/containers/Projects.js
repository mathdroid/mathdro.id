import React from "react";
import { withSiteData } from "react-static";

import Hero from "../components/hero";
import Content from "../components/content";
import { H2, H3 } from "../components/typography";

export default withSiteData(() => (
  <Hero>
    <Content>
      <H2>Projects</H2>
      <H3>Adding my featured projects here really soon!</H3>
    </Content>
  </Hero>
));
