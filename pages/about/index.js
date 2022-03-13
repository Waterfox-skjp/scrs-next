import Image from 'next/image'
import Link from 'next/link'
import Layout from 'components/layout'

export default function About() {
  const clickSelect = (e) => {
    e.target.select()
  }
  return (
    <>
      <div className="page-ttl">
        <h1>概要<span>About</span></h1>
      </div>
      <ul className="page-path">
        <li><Link href='/'><a>TOP</a></Link></li>
        <li>概要</li>
      </ul>
      <section>
        <h2>概要　About</h2>
        <table className="about-table">
          <tbody>
            <tr>
              <th>コミュニティ名</th>
              <td>SunCityRadioStation　サンシティラジオステーション</td>
            </tr>
            <tr>
              <th>放送ビットレート</th>
              <td>128ｋbps 44.1khz 2chステレオ　ストリーミング配信</td>
            </tr>
            <tr>
              <th>ニコニコ生放送</th>
              <td>ニコニコ生放送内で配信（映像の有・無）</td>
            </tr>
            <tr>
              <th>コールサイン</th>
              <td>SCRS- AFM</td>
            </tr>
            <tr>
              <th>代表</th>
              <td>ばん<br/>
                こた＠技術部</td>
            </tr>
            <tr>
              <th>創設日</th>
              <td>2005年08月01日</td>
            </tr>
            <tr>
              <th>放送開始日</th>
              <td>2005年08月01日</td>
            </tr>
            <tr>
              <th>放送区域</th>
              <td>全世界</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2>テーマソング　ThemeSong</h2>
        <dl className="song-list">
          <dt>Sun City Radio Station</dt>
          <dd>作曲：k1、歌：千葉由美</dd>
          <dt>S-S-Express</dt>
          <dd>作曲：k1</dd>
          <dt>お散歩の歌</dt>
          <dd>作曲：k1</dd>
          <dt>水色シグナル</dt>
          <dd>作詞：枝吉 一大、作曲：赤星 勇二郎、歌：由香</dd>
        </dl>
        <p className="btn-default center"><Link href='/about/themasong'><a>視聴ページはこちら</a></Link></p>
      </section>
      <section>
        <h2>公式バナー　OfficialBanner</h2>
        <p>国際基準を元にバナーをご用意しております。ご自由にお使いください。<br/>※スマートフォンでご覧の場合は一部縮小して表示されます。ご注意ください。</p>
        <div className="official-bnr">
          <h3 className="border-headline">横幅468px 高さ60pxサイズ</h3>
          <ul>
            <li>
              <Image src='/assets/images/bnr/scrs-bnr468.png' width={468} height={60} alt='バナー 468px' />
              <input type="text" name="バナー468" onClick={(e) => clickSelect(e)} value='<a href="http://scrs802.webcrow.jp/"><img src="http://scrs802.webcrow.jp/images/bnr/scrs-bnr468.png" alt="Sun City Radio Station"></a>' readOnly/>
            </li>
            <li>
              <Image src='/assets/images/bnr/scrs-bnr468-color.png' width={468} height={60} alt='バナー 468px カラー' />
              <input type="text" name="バナー468カラー" onClick={(e) => clickSelect(e)} value='<a href="http://scrs802.webcrow.jp/"><img src="http://scrs802.webcrow.jp/images/bnr/scrs-bnr468-color.png" alt="Sun City Radio Station"></a>' readOnly/>
            </li>
          </ul>
          <h3 className="border-headline">横幅200px 高さ40pxサイズ</h3>
          <ul>
            <li>
              <Image src='/assets/images/bnr/scrs-bnr200.png' width={200} height={40} alt='バナー 200px' />
              <input type="text" name="バナー200" onClick={(e) => clickSelect(e)} value='<a href="http://scrs802.webcrow.jp/"><img src="http://scrs802.webcrow.jp/images/bnr/scrs-bnr200.png" alt="Sun City Radio Station"></a>' readOnly/>
            </li>
            <li>
              <Image src='/assets/images/bnr/scrs-bnr200-color.png' width={200} height={40} alt='バナー 200px カラー' />
              <input type="text" name="バナー200カラー" onClick={(e) => clickSelect(e)} value='<a href="http://scrs802.webcrow.jp/"><img src="http://scrs802.webcrow.jp/images/bnr/scrs-bnr200-color.png" alt="Sun City Radio Station"></a>' readOnly/>
            </li>
          </ul>
          <h3 className="border-headline">横幅120px 高さ60pxサイズ</h3>
          <ul>
            <li>
              <Image src='/assets/images/bnr/scrs-bnr120.png' width={120} height={60} alt='バナー 120px' />
              <input type="text" name="バナー120" onClick={(e) => clickSelect(e)} value='<a href="http://scrs802.webcrow.jp/"><img src="http://scrs802.webcrow.jp/images/bnr/scrs-bnr120.png" alt="Sun City Radio Station"></a>' readOnly/>
            </li>
            <li>
              <Image src='/assets/images/bnr/scrs-bnr120-color.png' width={120} height={60} alt='バナー 120px カラー' />
              <input type="text" name="バナー120カラー" onClick={(e) => clickSelect(e)} value='<a href="http://scrs802.webcrow.jp/"><img src="http://scrs802.webcrow.jp/images/bnr/scrs-bnr120-color.png" alt="Sun City Radio Station"></a>' readOnly/>
            </li>
          </ul>
          <h3 className="border-headline">横幅88px 高さ31pxサイズ</h3>
          <ul>
            <li>
              <Image src='/assets/images/bnr/scrs-bnr88.png' width={88} height={31} alt='バナー 88px' />
              <input type="text" name="バナー88" onClick={(e) => clickSelect(e)} value='<a href="http://scrs802.webcrow.jp/"><img src="http://scrs802.webcrow.jp/images/bnr/scrs-bnr88.png" alt="Sun City Radio Station"></a>' readOnly/>
            </li>
            <li>
              <Image src='/assets/images/bnr/scrs-bnr88-color.png' width={88} height={31} alt='バナー 88px カラー' />
              <input type="text" name="バナー88カラー" onClick={(e) => clickSelect(e)} value='<a href="http://scrs802.webcrow.jp/"><img src="http://scrs802.webcrow.jp/images/bnr/scrs-bnr88-color.png" alt="Sun City Radio Station"></a>' readOnly/>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}


About.getLayout = function getLayout(page) {
  return (
    <Layout title='概要'>
      {page}
    </Layout>
  )
}
