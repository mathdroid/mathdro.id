import styled from "react-emotion";
import { Shadow } from "./styles";

const Outer = styled.div`
  display: flex;
  transition: box-shadow 0.25s;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  border-radius: 0.5rem;
  background: white;
  box-shadow: ${Shadow.mid} rgba(0, 0, 0, 0.2);
  line-height: 1.5;
  width: 100%;
  max-width: 100vw;
  margin-bottom: 2rem;
  ${"" /* min-height: 4rem; */} & > * {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .react-markdown {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  & img {
    display: block;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
    width: 100%;
    height: auto;
  }

  ${"" /* &:hover {
    box-shadow: 0 2rem 8rem rgba(0, 0, 0, 0.3);
  } */};
`;

export default Outer;
