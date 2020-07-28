import React from "react";
import { Flex, useColorMode } from "@chakra-ui/core";

const Container = props => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.100", dark: "gray.900" };

  const color = { light: "black", dark: "white" };
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      fontFamily="default"
      {...props}
      bg="#EFE0E0"
    />
  );
};

// bg={bgColor[colorMode]}
// color={color[colorMode]}
export default Container;
