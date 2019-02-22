import styled, { css } from "react-emotion";
import { Shadow, Transition } from "./styles";

const ButtonStyle = props => css`
font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
      monospace;
font-weight: lighter;
display: flex;
flex: none;
align-self: center;
align-items: center;
justify-content: center;
border-radius: 0.25rem;
border: none;
white-space: nowrap;
word-break: keep-all;
line-height: 1;
position: relative;
text-align: center;
text-decoration: none;
background-image: linear-gradient(to bottom right, #8888ff 0%,#ff8888 100%);
color: #fff;
${props.full ? "width: 100%;" : ""}
cursor: ${props.disabled && !props.loading ? "not-allowed" : "pointer"};
font-size: ${props.large ? "1.5em" : "1em"};
height: 2em;
padding: ${
  props.icon
    ? props.large
      ? "1em 2em"
      : "0.5em 1em"
    : props.large
      ? "0em 0.5em"
      : "0em 0.5em"
};
opacity: ${props.disabled ? "0.5" : "1"};
box-shadow: ${Shadow.down} rgba(128, 128, 128, 0.4);
transition-duration: 0.25s;
transition-timing-function: ease-out;
transition-property: box-shadow, background-position, transform;
background-size: 200% auto;
background-position: left center;
&:hover {
  transition-timing-function: ease-in;
  transform: translateY(-1px);
  background-position: right center;

box-shadow: ${Shadow.low} rgba(128, 128, 128, 0.4);
}
/* if an icon and label are both present, add space around the label*/
div + span {
  margin: 0 8px;
}
`;

const Button = styled.button`
  ${ButtonStyle};
`;

export default Button;
