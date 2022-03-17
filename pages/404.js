import Layout from 'components/layout'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <div className='page-ttl'>
        <h1>404 Not found</h1>
      </div>
      <ul className='page-path'>
        <li><Link href='/'><a>TOP</a></Link></li>
        <li>404 Not found</li>
      </ul>
      <section>
        <p className='large-font'>お探しのページは見つかりませんでした。</p>
        <p>Sun City Radio Stationのサイトへお越しいただき、ありがとうございます。<br/>申し訳ございませんが、お探しのページは見つかりませんでした。URLが間違っているか、移動または削除された可能性があります。<br/>下記のリンクからご覧になりたいページをお探しください。</p>
        <dl className='sitemap-list'>
          <dt>TOP</dt>
          <dd><Link href='/'><a>https://scrs802.vercel.app/</a></Link></dd>
          <dt>放送番組</dt>
          <dd><Link href='/timetable/'><a>https://scrs802.vercel.app/timetable/</a></Link></dd>
          <dt>過去の放送</dt>
          <dd><Link href='/timetable/past-program/'><a>https://scrs802.vercel.app/timetable/past-program/</a></Link></dd>
          <dt>アーカイブ</dt>
          <dd><Link href='/archive/'><a>https://scrs802.vercel.app/archive/</a></Link></dd>
          <dt>パーソナリティー</dt>
          <dd><Link href='/personality/'><a>https://scrs802.vercel.app/personality/</a></Link></dd>
          <dt>グッズ</dt>
          <dd><Link href='/goods/'><a>https://scrs802.vercel.app/goods/</a></Link></dd>
          <dt>リクエスト</dt>
          <dd><Link href='/request/'><a>https://scrs802.vercel.app/request/</a></Link></dd>
          <dt>概要</dt>
          <dd><Link href='/about/'><a>https://scrs802.vercel.app/about/</a></Link></dd>
          <dt>テーマソング</dt>
          <dd><Link href='/about/themasong/'><a>https://scrs802.vercel.app/about/themasong/</a></Link></dd>
          <dt>お問い合わせ</dt>
          <dd><Link href='/contact/'><a>https://scrs802.vercel.app/contact/</a></Link></dd>
        </dl>
      </section>
    </>
  )
}

NotFound.getLayout = function getLayout(page) {
  return (
    <Layout title='404 Not found'>
      {page}
    </Layout>
  )
}
