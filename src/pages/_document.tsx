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
              `,
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
