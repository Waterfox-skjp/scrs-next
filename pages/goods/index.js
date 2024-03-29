import Image from 'next/image'
import Link from 'next/link'
import Layout from 'components/layout'

export default function Goods() {
  return (
    <>
      <div className='page-ttl'>
        <h1>グッズ<span>Goods</span></h1>
      </div>
      <ul className='page-path'>
        <li><Link href='/'><a>TOP</a></Link></li>
        <li>グッズ</li>
      </ul>
      <section>
        <h2>キャンペーン　Campaign</h2>
        <div className='poster-wrap'>
          <a href='/assets/images/goods/goods2017.png'>
            <Image src='/assets/images/goods/goods2017-min.png' width={640} height={819} alt='特製グッズ プレゼントキャンペーン' />
          </a>
        </div>
      </section>
    </>
  )
}

Goods.getLayout = function getLayout(page) {
  return (
    <Layout title='グッズ'>
      {page}
    </Layout>
  )
}
