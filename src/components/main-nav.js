import React from "react";
import { SiteData, Link } from "react-static";
import styled, { keyframes } from "react-emotion";

import { H1 } from "./typography";
import Button from "./button";

const glitch = keyframes`
    0% {
      text-shadow: 0px 2px 1px rgba(255,0,255,0.5), 0px -2px 1px rgba(0,255,255,0.5);
      }
    25% {
      text-shadow:  4px 0 1px rgba(255,0,255,0.5),  -1px 0 1px rgba(0,255,255,0.5);
      }
    50% {
      text-shadow:  1px 1px 1px rgba(255,0,255,0.5),  -4px -1px 1px rgba(0,255,255,0.5);
    }
    75% {
      text-shadow:  1px 0 1px rgba(255,0,255,0.5),  -3px 0 1px rgba(0,255,255,0.5);
    }
    100% {
      text-shadow: 0 3px 1px rgba(255,0,255,0.5), 0 -4px 1px rgba(0,255,255,0.5);
    }
`;

const Header = styled.nav`
  position: absolute;
  top: 0;
  align-items: center;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  margin-top: 2rem;
  width: 100%;
  max-width: 48rem;
  height: 2rem;
  user-select: none;

  h1 {
    margin-top: 0;
    margin-bottom: 0;
  }
  .header-left {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
  .site-logo {
    width: 1.5rem;
    height: 1rem;
    margin-right: 1rem;
  }
  .site-logo .left {
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 1rem 0 0 1rem;
    border-color: transparent transparent transparent rgba(128, 128, 256, 0.75);
    line-height: 0px;
  }
  .site-logo .right {
    position: absolute;
    margin-left: 0.25rem;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 1rem 1rem 0 0;
    border-color: transparent rgba(256, 128, 128, 0.75) transparent transparent;
    line-height: 0px;
  }
  ul {
    align-items: center;
  }
  a:hover {
    animation: ${glitch} 0.5s ease infinite;
  }
  a.active {
    &:hover {
      animation: none;
      h1 {
        animation: none;
      }
    }
    text-decoration: none;
    color: inherit;
    button {
      box-shadow: 0 0 0 rgba(0, 0, 0, 0);
      background: rgba(0, 0, 0, 0);
      color: inherit;
    }
  }
  @media (max-width: 768px) {
    .header-left {
      justify-content: center;
    }
  }
`;

const Nav = styled.ul`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;

  li {
    text-align: right;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = () => (
  <div className="site-logo">
    <div className="left" />
    <div className="right" />
  </div>
);

const Title = styled(H1)`
  &:hover {
    animation: ${glitch} 0.5s ease infinite;
  }
`;

const MainNav = () => (
  <Header>
    <Link exact to="/" className="header-left">
      <Logo />
      <SiteData render={({ title }) => <Title>{title}</Title>} />
    </Link>
    <Nav>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <Button>Contact</Button>
        </Link>
      </li>
    </Nav>
  </Header>
);

export default MainNav;
