import React from "react";
import { Button } from "@chakra-ui/core";

const FloatingCTA = ({ theme, ...props }) => (
  <Button
    variant="solid"
    variantColor="green"
    position="fixed"
    bottom="3"
    width="calc(100% - 32px)"
    maxWidth="48rem"
    {...props}
  />
);

export default FloatingCTA;
