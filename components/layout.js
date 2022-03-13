import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Layout({ children, title, description }) {
  const router = useRouter()
  const pageDescription = description || '「より本物に!」をコンセプトにインターネットラジオ局、Sun City Radio Stationが2005年にスタート。おかげさまで14年目に突入。Sun City Radio Stationでは皆様からのメッセージを随時お待ちしております。'
  let layoutType = 'is-detail'
  let pageTitle = 'Sun City Radio Station サンシティラジオステーション'
  if (router.pathname == '/' ) {
    layoutType = 'is-top'
  }
  if (title) {
    pageTitle = title + ' | ' + pageTitle
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0"/>
        <meta name="theme-color" content="#FF9F00"/>
        <meta name="format-detection" content="email=no,telephone=no,address=no"/>
      </Head>
      <div className={'l-container ' + layoutType}>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  )
}
