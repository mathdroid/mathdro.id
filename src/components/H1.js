import { Heading, useColorMode } from "@chakra-ui/core";

export const H1 = props => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Heading
      as="h1"
      fontStyle="italic"
      fontWeight="900"
      textShadow={
        isDark
          ? "-0.1ch 0 hsla(0,75%,60%,1), 0.1ch 0 hsla(180,75%,60%,1)"
          : "-0.1ch 0 hsla(0,75%,60%,0.75), 0.1ch 0 hsla(180,75%,60%,0.75)"
      }
      {...props}
    />
  );
};
