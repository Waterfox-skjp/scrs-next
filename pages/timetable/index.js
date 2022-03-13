import Image from 'next/image'
import Layout from 'components/layout'
import Link from 'next/link'

export default function Timetable() {
  return (
    <>
      <div className='page-ttl'>
        <h1>放送番組<span>Timetable</span></h1>
      </div>
      <ul className='page-path'>
        <li><Link href='/'><a>TOP</a></Link></li>
        <li>放送番組</li>
      </ul>
      <section>
        <h2>放送中の番組　NowOnAir</h2>
        <div id="app"></div>
      </section>
      <section>
        <h2>放送番組一覧　Timetable</h2>
        <p>ロゴをクリックするとポップアップウィンドウが開きます。</p>
        <div className='timetable-list week'>
          <ul>
            <li>
              <h3>月曜日<span>Monday</span></h3>
            </li>
            <li>
              <h3>火曜日<span>Tuesday</span></h3>
            </li>
            <li>
              <h3>水曜日<span>Wednesday</span></h3>
              <ul>
                <li data-mfp="/timetable/hitme.html" data-effect="mfp-zoom-in" className='ajax-popup-link'>
                  <Image src='/assets/images/timetable/logo-hitme.png' width={159} height={51} alt='トンちゃんとホリちゃんのHitMe！！' />
                </li>
              </ul>
            </li>
            <li>
              <h3>木曜日<span>Thursday</span></h3>
            </li>
            <li>
              <h3>金曜日<span>Friday</span></h3>
            </li>
            <li>
              <h3>土曜日<span>Saturday</span></h3>
              <ul>
                <li data-mfp="/timetable/kingyo.html" data-effect="mfp-zoom-in" className='ajax-popup-link'>
                  <Image src='/assets/images/timetable/logo-kingyo.png' width={159} height={83} alt='きんぎょ日和' />
                </li>
                <li data-mfp="/timetable/nicoban.html" data-effect="mfp-zoom-in" className='ajax-popup-link'>
                  <Image src='/assets/images/timetable/logo-nicoban.png' width={159} height={69} alt='ニコニコばんばん！' />
                </li>
              </ul>
            </li>
            <li>
              <h3>日曜日<span>Sunday</span></h3>
            </li>
          </ul>
        </div>
        <div className='timetable-list other'>
          <ul>
            <li>
              <h3>不定期<span>Occasionally</span></h3>
              <ul>
                <li data-mfp="/timetable/burst.html" data-effect="mfp-zoom-in" className='ajax-popup-link'>
                  <Image src='/assets/images/timetable/logo-burst.png' width={160} height={45} alt='Radio BURST' />
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <p className='btn-default center'><Link href='/timetable/past-program/'><a>過去の番組を見る</a></Link></p>
      </section>
      <section>
        <h2>アーカイブ　Archive</h2>
        <p>放送を聴き逃した方は以下のページから過去の放送をダウンロード・視聴することができます。</p>
        <p className='btn-default center'><Link href='/archive/'><a>アーカイブページはこちら</a></Link></p>
      </section>
    </>
  )
}

Timetable.getLayout = function getLayout(page) {
  return (
    <Layout title='放送番組'>
      {page}
    </Layout>
  )
}
