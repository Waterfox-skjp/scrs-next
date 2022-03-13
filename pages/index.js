import Image from 'next/image'
import Link from 'next/link'
import Layout from 'components/layout'
import { Timeline } from 'react-twitter-widgets'
import Iframe from 'react-iframe'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function TOP() {
  const formOpen = function () {
    window.open('http://ws.formzu.net/fgen/S62895556/', '', 'width=1000,height=700,scrollbars');
  };
  return (
    <>
      <div className='contents'>
        <div className='slider-wrap'>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            navigation
            pagination={{
              el: '.swiper-pagination',
              clickable: true
            }}
            autoplay={{ delay: 4000 }}
            loop={true}
            speed={800}
          >
            <SwiperSlide><Image src='/assets/images/top/slider/slide_persoinfo.jpg' width={530} height={180} alt='番組パーソナリティ募集中' quality={85} /></SwiperSlide>
            <SwiperSlide><Image src='/assets/images/top/slider/slide_nicobangx2.png' width={530} height={180} alt='ニコニコばんばん！' quality={85} /></SwiperSlide>
            <SwiperSlide><Image src='/assets/images/top/slider/slide_kingyo.png' width={530} height={180} alt='きんぎょ日和' quality={85} /></SwiperSlide>
            <SwiperSlide><Image src='/assets/images/top/slider/slide_hitme.png' width={530} height={180} alt='トンちゃんとホリちゃんのHit Me！' quality={85} /></SwiperSlide>
            <div className='swiper-pagination'></div>
          </Swiper>
        </div>
        <section>
          <h2 className='no-margin'>トピックス　Topix</h2>
          <ul className='topix-list'>
            <li><p className='date'>2019/06/02</p><p className='text'>アーカイブの配信を停止しました&nbsp;&nbsp;<a href="https://twitter.com/SCRS802/status/1135154166064590848" target="_self">詳細はこちら</a></p></li>
            <li><p className='date'>2017/04/28</p><p className='text'>佐藤明子のぐだふたぬ～んフィーバー 放送開始</p></li>
            <li><p className='date'>2017/03/05</p><p className='text'>昭和歌謡のしらべ produced by 直也&nbsp;&nbsp;<a href="https://ssl.form-mailer.jp/fms/de9e17f5455891" target="_blank">詳細はこちら</a></p></li>
            <li><p className='date'>2017/01/21</p><p className='text'>きんぎょ日和 放送開始</p></li>
            <li><p className='date'>2016/10/23</p><p className='text'>ライブ at 池袋BigBanBox&nbsp;&nbsp;<a href="https://ssl.form-mailer.jp/fms/de9e17f5455891" target="_blank">詳細はこちら</a></p></li>
            <li><p className='date'>2016/09/28</p><p className='text'>トンちゃんとホリちゃんのHitMe！ 放送開始</p></li>
            <li><p className='date'>2016/07/21</p><p className='text'>ライブ with cisuMusic familiar&nbsp;&nbsp;<a href="https://ws.formzu.net/fgen/S19672653/" target="_blank">詳細はこちら</a></p></li>
            <li><p className='date'>2016/07/09</p><p className='text'>夏の公開生放送2016の開催を発表&nbsp;&nbsp;<a href="/event/2016-summer.html" target="_self">詳細はこちら</a></p></li>
            <li><p className='date'>2015/12/01</p><p className='text'>サーバーを移転しました</p></li>
            <li><p className='date'>2015/07/15</p><p className='text'>夏の大イベント2015の開催を発表&nbsp;&nbsp;<a href="/event/2015-summer.html" target="_self">詳細はこちら</a></p></li>
            <li><p className='date'>2014/09/20</p><p className='text'>ばんとこたが語る機材の歴史公開</p></li>
            <li><p className='date'>2014/08/24</p><p className='text'>ニコニコばんばん！第200回突入</p></li>
            <li><p className='date'>2014/06/29</p><p className='text'>WEBサイトリニューアル</p></li>
            <li><p className='date'>2014/06/22</p><p className='text'>夏の大イベント2014の開催を発表&nbsp;&nbsp;<a href="/event/2014-summer.html" target="_self">詳細はこちら</a></p></li>
            <li><p className='date'>2013/06/03</p><p className='text'>ニコニコばんばん150回記念放送について</p></li>
            <li><p className='date'>2013/05/12</p><p className='text'>STAFF募集のお知らせ</p></li>
            <li><p className='date'>2010/09/17</p><p className='text'>Podcast更新</p></li>
            <li><p className='date'>2005/08/01</p><p className='text'>SunCityRadioStation開局</p></li>
          </ul>
        </section>
        <section className='bg-color'>
          <h2>お知らせ　Information</h2>
          <ul className='info-list horizontal'>
            <li>
              <div className='img-area'>
                <a href="/archive/"><Image src='/assets/images/top/bnr-archives.png' width={250} height={70} alt='アーカイブ配信中！' quality={85} /></a>
              </div>
              <div className='text-area'>
                <h3>放送アーカイブ配信中！</h3>
                <p>「放送を聞き逃してしまった！」そんなあなたにSCRSでは過去の放送をアーカイブとして保存しているので、いつでも過去の放送を振り返ることができます。是非ご活用ください！</p>
              </div>
            </li>
            <li>
              <div className='img-area'>
                <a href="http://kandabuhin.web.fc2.com/" target="_blank"><Image src='/assets/images/top/bnr-ntk.png' width={250} height={70} alt='ニコ生TimeKeeper現在開発中！' quality={85} /></a>
              </div>
              <div className='text-area'>
                <h3>ニコ生TimeKeeper現在開発中！</h3>
                <p>ラジオ配信向けフリーソフトウェア『ニコ生TimeKeeper』を現在「神田部品」が開発中です。皆さんの寄付もお待ちしております！詳細はお問い合わせからどうぞ。</p>
              </div>
            </li>
          </ul>
          <ul className='info-list vertical'>
            <li>
              <div className='img-area'>
                <Image src='/assets/images/top/icon-scrs.png' width={70} height={70} alt='SCRSアイコン' quality={85} />
              </div>
              <div className='text-area'>
                <h3>SunCityRadioStationに貢献したい！</h3>
                <p>ニコニコ生放送でのコメントやメッセージはもちろん、パーソナリティとして、CMの声として、技術部としてなどいろんな形で放送に参加することができます。皆さんでSunCityRadioStationを作っていきませんか？気になる詳細はお問い合わせにてお待ちしております。</p>
              </div>
            </li>
            <li>
              <div className='img-area'>
                <Image src='/assets/images/top/icon-scrs.png' width={70} height={70} alt='SCRSアイコン' quality={85} />
              </div>
              <div className='text-area'>
                <h3>生放送観覧者もお待ちしております！</h3>
                <p>誰がどのように放送しているのか知りたい見たいという方、一度スタジオに来てみませんか？SCRSでは生放送の観覧もお待ちしております。詳しくはお問い合わせまで。<br/>※人数によっては観覧できない場合があります。ご了承ください。</p>
              </div>
            </li>
          </ul>
        </section>
        <section>
          <h2>ポッドキャスト　Podcast</h2>
          <ul className='podcast-list'>
            <li>
              <a href="https://drive.google.com/open?id=10kVcmUplPHUnPp7dCP-zFTc4iml5EK3j" download="2010-07.mp3" target="_blank">
                <div className='img-area'><Image src='/assets/images/top/icon-info.png' width={65} height={65} alt='インフォメーションアイコン' quality={85} /></div>
                <div className='text-area'>
                  <p className='title'>第4回Podcast</p>
                  <p className='date'>2010.9.17</p>
                </div>
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/open?id=1zy6mtZrKSdfyntChRTnNdFwiHa0KnHJY" download="2010-05.mp3" target="_blank">
                <div className='img-area'><Image src='/assets/images/top/icon-info.png' width={65} height={65} alt='インフォメーションアイコン' quality={85} /></div>
                <div className='text-area'>
                  <p className='title'>第3回Podcast</p>
                  <p className='date'>2010.5.30</p>
                </div>
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/open?id=1mzP8jNxORTu3GELaI9jQzpbXrpTxRKnz" download="natureworld01.mp3" target="_blank">
                <div className='img-area'><Image src='/assets/images/top/icon-info.png' width={65} height={65} alt='インフォメーションアイコン' quality={85} /></div>
                <div className='text-area'>
                  <p className='title'>第1回YOKO Visage<br/>NATURE WORLD</p>
                  <p className='date'>2010.4.11</p>
                </div>
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/open?id=1Uaa9zFCJQe-7BHQ4ffkmjJTx2KiYKK6n" download="2010-04.mp3" target="_blank">
                <div className='img-area'><Image src='/assets/images/top/icon-info.png' width={65} height={65} alt='インフォメーションアイコン' quality={85} /></div>
                <div className='text-area'>
                  <p className='title'>第2回Podcast</p>
                  <p className='date'>2010.4.11</p>
                </div>
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/open?id=1GeFBgkSfoj5dRFQfwRf0R5E78t6qmIxq" download="2010-03.mp3" target="_blank">
                <div className='img-area'><Image src='/assets/images/top/icon-info.png' width={65} height={65} alt='インフォメーションアイコン' quality={85} /></div>
                <div className='text-area'>
                  <p className='title'>第1回Podcast</p>
                  <p className='date'>2010.3.12</p>
                </div>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className='sidebar'>
        <section className='sp-hidden'>
          <h2 className='no-margin'>レギュラー番組</h2>
          <ul className='regular-ch'>
            <li>
              <div className='icon'><Image src='/assets/images/personality/icon-ban.png' width={80} height={80} alt='ばんアイコン' quality={85} /></div>
              <p className='title'>ニコニコばんばん！</p>
              <div className='btn-message' onClick={formOpen}>メッセージを送る</div>
              <p className='text'>本格派ラジオのSunCityRadioStationニコ生支局からお送りする、ニコ生オリジナル番組です！</p>
            </li>
          </ul>
          <ul id="js-regular-hidden" className='regular-ch hidden'>
            <li style={{listStyle: 'none'}}>
              <div className='icon'><Image src='/assets/images/personality/icon-kureko.png' width={80} height={80} alt='呑田くれこアイコン' quality={85} /></div>\
              <p className='title'>きんぎょ日和</p>
              <div className='btn-message' onClick={formOpen}>メッセージを送る</div>
              <p className='text'>1週間の出来事をのんびりとお伝えするラジオ番組。朝の一時をご一緒しませんか？</p>
            </li>
            <li style={{ listStyle: 'none' }}>
              <div className='icon'><Image src='/assets/images/personality/icon-hori.png' width={80} height={80} alt='ホリちゃんアイコン' quality={85}/></div>
              <p className='title'>トンちゃんとホリちゃんのHit Me！</p>
              <div className='btn-message' onClick={formOpen}>メッセージを送る</div>
              <p className='text'>鉄道の話題に特化したラジオ番組。超マニアックな鉄オタが盛り上げる1時間！</p>
            </li>
          </ul>
          <div id="js-regular-ch" className='btn-regular-ch'></div>
        </section>
        <section className='bg-color'>
          <h2>スポンサー</h2>
          <ul className='bnr-list'>
            <li>
              <a href="http://com.nicovideo.jp/community/co347665" target="_blank">
                <Image src='/assets/images/top/bnr/bnr-niconama.png' width={200} height={50} alt='ニコニコ生放送' quality={85} />
              </a>
            </li>
            <li>
              <a href="http://twitcasting.tv/scrs802" target="_blank">
                <Image src='/assets/images/top/bnr/bnr-twicas.png' width={200} height={50} alt='TwitCasting' quality={85} />
              </a>
            </li>
            <li>
              <a href="http://kandabuhin.web.fc2.com/" target="_blank">
                <Image src='/assets/images/top/bnr/bnr-kanda.png' width={200} height={50} alt='神田部品' quality={85} />
              </a>
            </li>
            <li>
              <a href="http://sylph.lib.net/trainsim/" target="_blank">
                <Image src='/assets/images/top/bnr/bnr-1heisoku.png' width={200} height={50} alt='第一閉塞進行！' quality={85} />
              </a>
            </li>
            <li>
              <a href="http://cisumusicfamiliar.com/" target="_blank">
                <Image src='/assets/images/top/bnr/bnr-cisuMf.png' width={200} height={50} alt='cisuMusic familiar' quality={85} />
              </a>
            </li>
            <li>
              <a href="http://www.train-tito.net/" target="_blank">
                <Image src='/assets/images/top/bnr/bnr-tdats.png' width={200} height={50} alt='Train Drive ATS' quality={85} />
              </a>
            </li>
            <li>
              <a href="http://progloria2015.jimdo.com/" target="_blank">
                <Image src='/assets/images/top/bnr/bnr-gloria.png' width={200} height={50} alt='Production GLORIA' quality={85} />
              </a>
            </li>
          </ul>
        </section>
        <section className='sp-hidden'>
          <h2>関連リンク</h2>
          <ul className='bnr-list'>
            <li>
              <Link href='/pr/kabanbrella/'>
                <a target="_blank">
                  <Image src='/assets/images/top/bnr/bnr-bolsa.jpg' width={200} height={50} alt='ボルサ工業' quality={85} />
                </a>
              </Link>
            </li>
            <li>
              <Link href='/pr/gcupsuncity/'>
                <a target="_blank">
                  <Image src='/assets/images/top/bnr/bnr-gcupsuncity.jpg' width={200} height={50} alt='"G-cup SUN CITY' quality={85} />
                </a>
              </Link>
            </li>
            <li>
              <Link href='/pr/hotelsuncity/'>
                <a target="_blank">
                  <Image src='/assets/images/top/bnr/bnr-hotelsuncity.jpg' width={200} height={50} alt='HOTEL Sun City' quality={85} />
                </a>
              </Link>
            </li>
            <li>
              <Link href='/pr/ochiba/'>
                <a target="_blank">
                  <Image src='/assets/images/top/bnr/bnr-ochiba.jpg' width={200} height={50} alt='落葉証券' quality={85} />
                </a>
              </Link>
            </li>
            <li>
              <Link href='/pr/onsenmanjyu/'>
                <a target="_blank">
                  <Image src='/assets/images/top/bnr/bnr-onsenmanjyu.jpg' width={200} height={50} alt='温泉饅頭本舗' quality={85} />
                </a>
              </Link>
            </li>
            <li>
              <Link href='/pr/satomoters/'>
                <a target="_blank">
                  <Image src='/assets/images/top/bnr/bnr-satomoters.jpg' width={200} height={50} alt='SATO MOTERS' quality={85} />
                </a>
              </Link>
            </li>
            <li>
              <Link href='/pr/niconishiki/'>
                <a target="_blank">
                  <Image src='/assets/images/top/bnr/bnr-suncitysyuzou.jpg' width={200} height={50} alt='さんしてぃ酒造' quality={85} />
                </a>
              </Link>
            </li>
            <li>
              <Link href='/pr/weekly-shakuya/'>
                <a target="_blank">
                  <Image src='/assets/images/top/bnr/bnr-weeklyshakuya.jpg' width={200} height={50} alt='週間SHAKUYA' quality={85} />
                </a>
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h2>シェア</h2>
          <ul className='share-list'>
            <li>
              <a href="http://twitter.com/share?url=http://scrs802.webcrow.jp/&text=Sun%20City%20Radio%20Station%20%E3%82%B5%E3%83%B3%E3%82%B7%E3%83%86%E3%82%A3%E3%83%BC%E3%83%A9%E3%82%B8%E3%82%AA%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3&via=SCRS802&related=SCRS802&hashtags=SCRS">
                <Image src='/assets/images/common/icon_twitter.svg' width={40} height={40} alt='Twitter' quality={85} />
              </a>
            </li>
            <li>
              <a href="http://www.facebook.com/share.php?u=http://scrs802.webcrow.jp/">
                <Image src='/assets/images/common/icon_facebook.svg' width={40} height={40} alt='Facebook' quality={85} />
              </a>
            </li>
            <li>
              <a href="http://line.me/R/msg/text/?Sun%20City%20Radio%20Station%20%E3%82%B5%E3%83%B3%E3%82%B7%E3%83%86%E3%82%A3%E3%83%BC%E3%83%A9%E3%82%B8%E3%82%AA%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%20http%3A%2F%2Fscrs802.webcrow.jp%2F">
                <Image src='/assets/images/common/icon_line.svg' width={40} height={40} alt='LINE' quality={85} />
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className='widget'>
        <div className='twitter-wrap'>
          <Timeline
            dataSource={{ sourceType: "profile", screenName: "SCRS802" }}
            options={{ lang: "ja", theme: "dark", width: "230", height: "600" }}
          />
        </div>
        <div className='niconico-wrap'>
          <Iframe width="220" height="250" src="http://ext.nicovideo.jp/thumb_community/co347665" scrolling="no" style={{ border: 'solid 1px #CCC' }} frameBorder="0"><a href="http://com.nicovideo.jp/community/co347665">【ニコニコ動画】★☆Sun City Radio Station ニコ生支局☆★</a></Iframe>
        </div>
      </div>
    </>
  )
}

TOP.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
