import styled, { css } from "react-emotion";

const H6_SIZE = 1.1;
const H5_SIZE = H6_SIZE * 1.1;
const H4_SIZE = H5_SIZE * 1.1;
const H3_SIZE = H4_SIZE * 1.1;
const H2_SIZE = H3_SIZE * 1.1;
const H1_SIZE = H2_SIZE * 1.1;

const H = css`
  margin-top: 2rem;
  margin-bottom: 1rem;
  ${"" /* font-weight: bold; */} letter-spacing: 0.125rem;
`;

export const H1 = styled.h1`
  ${H}
  font-size: ${H1_SIZE}em;
`;
export const H2 = styled.h2`
  ${H}
  font-size: ${H2_SIZE}em;
  margin-bottom: 2rem;
`;
export const H3 = styled.h3`
  ${H}
  font-size: ${H3_SIZE}em;
`;
export const H4 = styled.h4`
  ${H}
  font-size: ${H4_SIZE}em;
`;
export const H5 = styled.h5`
  ${H}
  font-size: ${H5_SIZE}em;
`;
export const H6 = styled.h6`
  ${H}
  font-size: ${H6_SIZE}em;
`;
