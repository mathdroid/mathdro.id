import React from "react";
import styled from "react-emotion";
import { SiteData } from "react-static";

const FooterStyles = styled.footer`
  background: #16161d;
  color: white;
  width: calc(100% - 2rem);
  padding: 4rem 1rem;
  @media (max-width: 768px) {
    padding-bottom: 6rem;
  }
  p {
    margin-top: 0.5rem;
  }
  input {
    background: transparent;
    border: none;
    border-radius: none;
    font: inherit;
    color: inherit;
  }
`;

const Footer = () => (
  <SiteData
    render={({ lastBuild }) => (
      <FooterStyles>
        <p>> Powered by React Static and Netlify.</p>
        <p>> Latest build: {lastBuild}.</p>
        <p>> License: The MIT License &copy; 2018 Muhammad Mustadi.</p>
        <label>
          > Feedback: <input />
        </label>
      </FooterStyles>
    )}
  />
);

export default Footer;
