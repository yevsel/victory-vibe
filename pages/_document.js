import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:ital,wght@0,900;1,900&family=Poppins:wght@300&display=swap" rel="stylesheet"></link> */}
        <link rel="icon" type="shortcut icon" href="../assets/favicon.png"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:ital,wght@0,900;1,900&family=Poppins:wght@300&family=Source+Sans+Pro&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
