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
            content="https://mathdro.id/static/m-01.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png?v=yyQGoMmB44"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png?v=yyQGoMmB44"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png?v=yyQGoMmB44"
          />
          <link rel="manifest" href="/site.webmanifest?v=yyQGoMmB44" />
          <link
            rel="mask-icon"
            href="/safari-pinned-tab.svg?v=yyQGoMmB44"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/favicon.ico?v=yyQGoMmB44" />
          <meta name="apple-mobile-web-app-title" content="mathdroid" />
          <meta name="application-name" content="mathdroid" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="theme-color" content="#ffffff" />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @import url('https://rsms.me/inter/inter.css');
                html { 
                  font-family: 'Inter', sans-serif;
                }
                @supports (font-variation-settings: normal) {
                  html {
                    font-family: 'Inter var', sans-serif;
                  }
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
