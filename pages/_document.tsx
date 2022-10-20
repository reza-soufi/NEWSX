import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/news.png" />
            </Head>
            <body>
            <Main />
            <NextScript />
            <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js"></script>
            </body>
        </Html>
    )
}
