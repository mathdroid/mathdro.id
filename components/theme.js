const space = [0, 4, 8, 16, 32, 64];
space.small = space[1];
space.medium = space[2];
space.large = space[3];

const fontSizes = [12, 14, 16, 20, 24, 32];
fontSizes.body = fontSizes[3];
fontSizes.display = fontSizes[5];

const colors = {
  white: "#fff",
  black: "#000",
  green: "#3aafb9",
  greens: [
    "#b7e1e5",
    "#81ccd2",
    "#5dbdc5",
    "#3aafb9",
    "#309098",
    "#257076",
    "#1b5055"
  ]
};

const fonts = {
  default: `'Inter', sans-serif`,
  vsr: `'Inter var', sans-serif`
};

const breakpoints = ["40em", "52em", "64em"];

const mediaQueries = {
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`
};

const theme = {
  space,
  fontSizes,
  colors,
  fonts,
  breakpoints,
  mediaQueries
};

export default theme;
