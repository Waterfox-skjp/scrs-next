import { useRouter } from 'next/router'
import { useEffect } from 'react'
import '../styles/style.scss'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const handleRouteChange = (url) => {
    window.gtag('config', 'UA-61336529-1', {
      page_path: url,
    })
  }
  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events])
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
