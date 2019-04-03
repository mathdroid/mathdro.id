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
        <Hero fill="pink" {...props} />
        <h1>Muhammad Mustadi</h1>
        <Toggle onChange={toggle} />
      </Container>
      <style jsx global>
        {`
          body {
            background: ${dark ? "black" : "white"};
            color: ${dark ? "white" : "dark"};
          }
        `}
      </style>
    </>
  );
};

export default Index;
