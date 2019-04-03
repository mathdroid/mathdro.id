import React from "react";
import Head from "next/head";

import Hero from "../components/hero";
import Container from "../components/container";
import Toggle from "../components/light-dark-toggle";

const Index = props => {
  const [dark, setDark] = React.useState(false);
  const toggle = () => {
    setDark(!dark);
    console.log(dark);
  };
  return (
    <>
      <Head>
        <title>Mathdroid</title>
      </Head>
      <Container>
        <Hero fill="pink" {...{ dark }} />
        <div>
          <h1>Muhammad Mustadi.</h1>
          <h1>Software. Product. Design.</h1>
          <h1>Jakarta, Indonesia.</h1>

          <h1>
            <a href="https://github.com/mathdroid">Github</a>.{" "}
            <a href="https://twitter.com/mathdroid">Twitter</a>.{" "}
            <a href="https://instagram.com/mathdroid">Instagram</a>.
          </h1>
        </div>

        <Toggle onChange={toggle} />
      </Container>
      <style jsx global>
        {`
          body {
            background: ${dark ? "black" : "white"};
            color: ${dark ? "white" : "dark"};
          }
          h1 {
            margin-top: 0;
            margin-bottom: 0.5rem;
          }
        `}
      </style>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          width: 100%;
          max-width: 48rem;
          position: relative;
          top: -50vh;
          margin: 8rem 0;
        }
        a {
          color: inherit;
        }
      `}</style>
    </>
  );
};

export default Index;
