import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Custom Document Component
 * Customizes the HTML document structure
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
