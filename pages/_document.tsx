import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <title>DariCare</title>
        <link rel="icon" type="image/png" href="logo-white.png" />
        <link rel="shortcut icon" type="image/png" href="/logo-white.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
