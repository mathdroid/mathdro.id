import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta property="og:url" content="https://mathdro.id" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@mathdroid" />
          <meta name="twitter:creator" content="@mathdroid" />
          <meta name="twitter:title" content="Hi, my name is Odi!" />
          <meta name="twitter:description" content="This is my website." />
          <meta
            name="twitter:image"
            content="https://mathdro.id/static/card.jpg"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
          @import url('https://rsms.me/inter/inter.css');
html { font-family: 'Inter', sans-serif; }
@supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
}
          `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
