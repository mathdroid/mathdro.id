import styled from "react-emotion";

const Hero = styled.header`
  padding-top: 6rem;
  height: calc(50vh - 6rem);
  background: ${props => props.background || "#fafafa"};
  ${props =>
    props.backgroundImage
      ? `background-image: url(${props.backgroundImage});`
      : ""};
`;

export default Hero;
