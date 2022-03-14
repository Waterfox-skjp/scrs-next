import Script from 'next/script'
import '../styles/style.scss'

function MyApp({ Component, pageProps, router }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <>
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=UA-61336529-1'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-61336529-1');
          `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
