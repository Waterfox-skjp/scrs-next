import Link from 'next/link'
import Layout from 'components/layout'
import Iframe from 'react-iframe'

export default function Request() {
  return (
    <>
      <div className='page-ttl'>
        <h1>リクエスト<span>Request</span></h1>
      </div>
      <ul className='page-path'>
        <li><Link href='/'><a>TOP</a></Link></li>
        <li>リクエスト</li>
      </ul>
      <section>
        <h2>リクエストフォーム　Requestform</h2>
        <div className='request-form'>
          <Iframe src='https://ws.formzu.net/dist/S62895556/'></Iframe>
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
