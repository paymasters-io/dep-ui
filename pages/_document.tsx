import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    const pageProps = this.props.__NEXT_DATA__?.props?.pageProps;
    console.log({ pageProps });

    return (
      <Html className={`${pageProps?.isDark ? "dark" : ""}`}>
        <Head>
          <meta
            name="description"
            content="Paymaster is a possile new approach 
        to handling paymasters for wallets implementing Account Abstraction."
          />
          <meta
            name="og:description"
            content="Paymaster enables users to choose any paymaster 
         they are eligible to use without handling complex interactions. "
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
