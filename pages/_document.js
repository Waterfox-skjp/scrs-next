import { Html, Head, Main, NextScript } from 'next/document'
import Analytics from '../components/analytics'

export default function Document() {
  return (
    <Html lang='ja' itemScope='itemscope' itemType='http://schema.org/WebPage'>
      <Head>
        <Analytics />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
