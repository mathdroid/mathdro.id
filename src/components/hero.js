import styled from "react-emotion";

const Hero = styled.header`
  padding-top: 6rem;
  height: calc(72vh - 6rem);
  background: ${props => props.background || "#fafafa"};
  ${props =>
    props.backgroundImage
      ? `background-image: url(${props.backgroundImage});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;`
      : ""};
`;

export default Hero;
