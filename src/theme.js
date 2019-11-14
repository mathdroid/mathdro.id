import { theme as chakraTheme } from "@chakra-ui/core";

const colors = chakraTheme.colors;

const fonts = {
  default: `'Inter', sans-serif`,
  vsr: `'Inter var', sans-serif`
};

const breakpoints = ["40em", "52em", "64em"];

const theme = {
  ...chakraTheme,
  colors,
  fonts,
  breakpoints
};

export default theme;
