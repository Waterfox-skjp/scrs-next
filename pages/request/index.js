import Link from 'next/link'
import Layout from 'components/layout'

export default function Request() {
  const onloadIframe = () => {
    if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/) !== null && formzuInitialLoad == true) this.scrollIntoView(true)
  }
  return (
    <>
      <div className="page-ttl">
        <h1>リクエスト<span>Request</span></h1>
      </div>
      <ul className="page-path">
        <li><Link href='/'><a>TOP</a></Link></li>
        <li>リクエスト</li>
      </ul>
      <section>
        <h2>リクエストフォーム　Requestform</h2>
        <div className="request-form">
          <iframe src="https://ws.formzu.net/dist/S62895556/" onLoad={onloadIframe}></iframe>
        </div>
      </section>
    </>
  )
}

Request.getLayout = function getLayout(page) {
  return (
    <Layout title='リクエスト'>
      {page}
    </Layout>
  )
}
