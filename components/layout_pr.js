import Head from 'next/head'
import { useRouter } from 'next/router'

export default function LayoutPr({ children, title, description }) {
  description = '「より本物に!」をコンセプトにインターネットラジオ局、Sun City Radio Stationが2005年にスタート。おかげさまで14年目に突入。Sun City Radio Stationでは皆様からのメッセージを随時お待ちしております。'
  const router = useRouter()
  let titleFull = 'Sun City Radio Station サンシティラジオステーション'
  let url = 'https://scrs802.vercel.app' + router.pathname
  if (title) {
    titleFull = title + ' | ' + titleFull
  }

  return (
    <>
      <Head>
        <title>{titleFull}</title>
        <meta name='description' content={description} />
        <meta property='og:site_name' content={titleFull} />
        <meta property='og:title' content={titleFull} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={url} />
        <meta property='og:image' content='https://scrs802.vercel.app/assets/images/common/ogp.png' />
        <meta property='og:type' content='article' />
        <meta property='og:locale' content='ja_JP' />
        <meta itemProp='name' content={titleFull} />
        <meta itemProp='url' content={url} />
        <meta name='twitter:title' content={titleFull} />
        <meta name='twitter:url' content={url} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:description' content={description} />
        <meta name='viewport' content='width=device-width,initial-scale=1.0,minimum-scale=1.0' />
        <meta name='theme-color' content='#FF9F00' />
        <meta name='format-detection' content='email=no,telephone=no,address=no' />
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <div className='l-container is-pr'>
        <main className='l-main'>{children}</main>
      </div>
    </>
  )
}
