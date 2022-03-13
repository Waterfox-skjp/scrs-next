import Head from 'next/head'

export default function LayoutPr({ children, title, description }) {
  const pageDescription = description || '「より本物に!」をコンセプトにインターネットラジオ局、Sun City Radio Stationが2005年にスタート。おかげさまで14年目に突入。Sun City Radio Stationでは皆様からのメッセージを随時お待ちしております。'
  let pageTitle = 'Sun City Radio Station サンシティラジオステーション'
  if (title) {
    pageTitle = title + ' | ' + pageTitle
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0" />
        <meta name="theme-color" content="#FF9F00" />
        <meta name="format-detection" content="email=no,telephone=no,address=no" />
        <meta name="robots” content=”noindex,nofollow" />
      </Head>
      <div className='l-container is-pr'>
        <main>{children}</main>
      </div>
    </>
  )
}
