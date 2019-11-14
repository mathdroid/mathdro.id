import React from "react";
import { Button, Link } from "@chakra-ui/core";

const FloatingCTA = ({ theme, ...props }) => (
  <Link
    position="fixed"
    bottom="3"
    width="calc(100% - 32px)"
    maxWidth="48rem"
    isExternal
    href="mailto:hello@mathdro.id"
  >
    <Button width="100%" variant="solid" variantColor="green" {...props} />
  </Link>
);

export default FloatingCTA;
