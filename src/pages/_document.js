import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='ar'>
            <Head>

                <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/css/lineicons.css" />
                <link rel="stylesheet" href="/assets/css/animate.css" />
                <link rel="stylesheet" href="/assets/css/main.css" />
                <link rel="shortcut icon" href="/image/logo.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}