import Image from 'next/image'
import Layout from 'components/layout'

export default function PastProgram() {
  return (
    <>
      <div className="page-ttl">
        <h1>過去の番組<span>Past Program</span></h1>
      </div>
      <ul className="page-path">
        <li><a href="/">TOP</a></li>
        <li><a href="/timetable/">放送番組</a></li>
        <li>過去の番組</li>
      </ul>
      <section>
        <h2>過去の番組　PastProgram</h2>
        <ul className="timetable-detail">
          <li>
            <div className="logo-area">
              <div className='img'><Image src='/assets/images/timetable/logo-coming.png' width={239} height={129} alt='コタの噛み神coming' /></div>
              <h3>コタの噛み神coming</h3>
            </div>
            <div className="text-area">
              <h4 className="borderbox-headline">パーソナリティ</h4>
              <div className="icon-wrap">
                <Image src='/assets/images/personality/icon-kota.png' width={50} height={50} alt='コタ' />
                <p>コタ</p>
              </div>
              <h4 className="borderbox-headline">放送時間</h4>
              <p>不定期</p>
              <h4 className="borderbox-headline">放送内容</h4>
              <p>ふつおた</p>
            </div>
          </li>
          <li>
            <div className="logo-area">
              <div className='img'><Image src='/assets/images/timetable/logo-freshnight.png' width={239} height={61} alt='daichan.のFrash!Night' /></div>
              <h3>daichan.のFrash!Night</h3>
            </div>
            <div className="text-area">
              <h4 className="borderbox-headline">パーソナリティ</h4>
              <div className="icon-wrap">
                <Image src='/assets/images/personality/icon-dai.png' width={50} height={50} alt='daichan.' />
                <p>daichan.</p>
              </div>
              <h4 className="borderbox-headline">放送時間</h4>
              <p>毎週日曜日 22:00～23:00</p>
              <h4 className="borderbox-headline">放送内容</h4>
              <p>1枠目　「ふれないクイズ!」<br/>5問クイズを出します。それに応えてもらって見事正解すると、ご希望の方にサイン色紙プレゼント。</p>
              <p>2枠目　「ちょっとこのニュース！！！！」<br/>一週間の中にありふれたニュースの中から、あなたが「これどうよ？」と思うニュースを送ってきてください!。<br/>浦田大風に鋭く(?)優しく(?)切り込みます!!</p>
            </div>
          </li>
          <li>
            <div className="logo-area">
              <div className='img'><Image src='/assets/images/timetable/logo-drive.png' width={239} height={31} alt='Music DrIVe!!' /></div>
              <h3>Music DrIVe!!（Music Lounge）</h3>
            </div>
            <div className="text-area">
              <h4 className="borderbox-headline">パーソナリティ</h4>
              <div className="icon-wrap">
                <Image src='/assets/images/personality/icon-human.png' width={50} height={50} alt='OCHIKO' />
                  <p>OCHIKO</p>
              </div>
              <h4 className="borderbox-headline">放送時間</h4>
              <p>毎週木曜日 23:00～24:00</p>
              <h4 className="borderbox-headline">放送内容</h4>
              <p>Ochikoと一緒に、ラウンジのようにゆったりと過ごしませんか？</p>
            </div>
          </li>
          <li>
            <div className="logo-area">
              <div className='img'><Image src='/assets/images/timetable/logo-michael.png' width={239} height={31} alt='RADIO Michael' /></div>
              <h3>RADIO Michael</h3>
            </div>
            <div className="text-area">
              <h4 className="borderbox-headline">パーソナリティ</h4>
              <div className="icon-wrap">
                <Image src='/assets/images/personality/icon-michael.png' width={50} height={50} alt='マイケル☆彡' />
                  <p>マイケル☆彡</p>
              </div>
              <h4 className="borderbox-headline">放送時間</h4>
              <p>毎週火曜日 23:00～24:00</p>
              <h4 className="borderbox-headline">放送内容</h4>
              <p>時にゆるーく、時に鋭く、マイコーが語るトーク番組。</p>
            </div>
          </li>
          <li>
            <div className="logo-area">
              <div className='img'><Image src='/assets/images/timetable/logo-fever.png' width={239} height={37} alt='佐藤明子のぐだふたぬ～んフィーバー' /></div>
              <h3>佐藤明子のぐだふたぬ～んフィーバー</h3>
            </div>
            <div className="text-area">
              <h4 className="borderbox-headline">パーソナリティ</h4>
              <div className="icon-wrap">
                <Image src='/assets/images/personality/icon-human.png' width={50} height={50} alt='佐藤明子' />
                  <p>佐藤明子</p>
              </div>
              <h4 className="borderbox-headline">放送時間</h4>
              <p>毎週金曜日 16:00～17:00</p>
              <h4 className="borderbox-headline">放送内容</h4>
              <p>【コーナー】<br/>①おたよりメール<br/>②◯◯近況報告<br/>③言ってみよう！</p>
                <p>面白い番組を目指し、みこが、ありとあらゆる物事に挑戦をしていくバラエティーラジオ。</p>
            </div>
          </li>
          <li>
            <div className="logo-area">
              <div className='img'><Image src='/assets/images/timetable/logo-ahb.png' width={239} height={96} alt='cisuMusic familiarのあなたの引き出しぶちまけてｯｻ' /></div>
              <h3>cisuMusic familiarの<br/>あなたの引き出しぶちまけてｯｻ</h3>
            </div>
            <div className="text-area">
              <h4 className="borderbox-headline">パーソナリティ</h4>
              <div className="icon-wrap">
                <Image src='/assets/images/personality/icon-group.png' width={50} height={50} alt='cisuMusic familiar' />
                  <p>cisuMusic familiar</p>
              </div>
              <h4 className="borderbox-headline">放送時間</h4>
              <p>毎月第2水曜日 22:30～23:30</p>
              <h4 className="borderbox-headline">放送内容</h4>
              <p>・男性の、〇〇なところがわからない！<br/>
                ・〇〇な男性って、ありえない！<br/>
                  などなど男性に対するストレスを抱えた女性のはけ口になる番組！<br/>
                    生放送でお送り致しますので、ニコニコ動画のアカウントをご準備頂きお待ちください！事前投稿と生放送中投稿がありますので、ドシドシ投稿してね！<br/>
                      普段は聞けない女性の本音を男性の皆様も楽しみにしていてください！</p>
            </div>
          </li>
        </ul>
        <p className="btn-default center"><a href="/timetable/">現在放送中の番組を見る</a></p>
      </section>
      <section>
        <h2>アーカイブ　Archive</h2>
        <p>一部の過去の番組は以下のページからダウンロード・視聴することができます。</p>
        <p className="btn-default center"><a href="/archive/">アーカイブページはこちら</a></p>
      </section>
    </>
  )
}

PastProgram.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
