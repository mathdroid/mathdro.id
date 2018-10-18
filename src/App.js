import React from "react";
import { Router, Link } from "react-static";
import { hot } from "react-hot-loader";
import styled from "react-emotion";
import Routes from "react-static-routes";

import Nav from "./components/main-nav";
import Footer from "./components/main-footer";

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
`;

const MobileNav = styled.nav`
  display: none;
  @media (max-width: 768px) {
    background: linear-gradient(to right, #8888ff 0%, #ff8888 100%);
    min-height: 4rem;
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    ${"" /* border-top: 1px solid #f5f3f7; */};
    a.active {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

const App = () => (
  <Router>
    <React.Fragment>
      <Nav />
      <Main>
        <Routes />
      </Main>
      <Footer />
      <MobileNav>
        <Link to="/" exact>
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </MobileNav>
    </React.Fragment>
  </Router>
);

export default hot(module)(App);
