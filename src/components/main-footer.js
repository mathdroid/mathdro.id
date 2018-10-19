import React from "react";
import styled from "react-emotion";
import { SiteData } from "react-static";
import { formatRelative } from "date-fns";

import Content from "../components/content";

const FooterStyles = styled.footer`
  background-image: linear-gradient(to bottom right, #2d2d2d 0%, #16161d 100%);
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
        <Content>
          {" "}
          <p>> Powered by React Static and Netlify.</p>
          <p>
            > Latest build:{" "}
            <time title={lastBuild}>
              {formatRelative(lastBuild, new Date())}
            </time>
            .
          </p>
          <p>> License: The MIT License &copy; 2018 Muhammad Mustadi.</p>
          <label>
            > Feedback: <input />
          </label>
        </Content>
      </FooterStyles>
    )}
  />
);

export default Footer;
