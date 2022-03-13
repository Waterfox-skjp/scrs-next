import Image from 'next/image'
import Link from 'next/link'
import Layout from 'components/layout'

export default function Personality() {
  return (
    <>
      <div className='page-ttl'>
        <h1>パーソナリティ<span>Personality</span></h1>
      </div>
      <ul className='page-path'>
        <li><Link href='/'><a>TOP</a></Link></li>
        <li>パーソナリティ</li>
      </ul>
      <section>
        <h2>パーソナリティ　Personality</h2>
        <ul className='personality-list'>
          <li>
            <div className='visual mic'>
              <div className='icon'><Image src='/assets/images/personality/icon-ban.png' width={80} height={80} alt='ばん' /></div>
            </div>
            <div className='text-area'>
              <h3>ばん</h3>
              <p>担当</p>
              <ul>
                <li>ニコニコばんばん！</li>
                <li>Radio BURST</li>
              </ul>
            </div>
            <ul className='link-list'>
              <li className='twitter'><a className='inner' href="https://twitter.com/Motorman3038" target="_blank" rel="noreferrer">Twitter</a></li>
              <li className='niconico'><a className='inner' href="https://www.nicovideo.jp/user/8323537" target="_blank" rel="noreferrer">niconico</a></li>
              <li className='link'><a className='inner' href="http://twpf.jp/Motorman3038" target="_blank" rel="noreferrer">link</a></li>
            </ul>
          </li>
          <li>
            <div className='visual mic'>
              <div className='icon'><Image src='/assets/images/personality/icon-kota.png' width={80} height={80} alt='コタ' /></div>
            </div>
            <div className='text-area'>
              <h3>コタ</h3>
              <p>担当</p>
              <ul>
                <li>コタの噛み神coming</li>
              </ul>
            </div>
            <ul className='link-list'>
              <li className='twitter'><a className='inner' href="https://twitter.com/ponzulla" target="_blank" rel="noreferrer">Twitter</a></li>
              <li className='niconico'><a className='inner' href="http://www.nicovideo.jp/user/4819749" target="_blank" rel="noreferrer">niconico</a></li>
              <li className='link'><span className='inner'>link</span></li>
            </ul>
          </li>
          <li>
            <div className='visual mic'>
              <div className='icon'><Image src='/assets/images/personality/icon-dai.png' width={80} height={80} alt='daichan.' /></div>
            </div>
            <div className='text-area'>
              <h3>daichan.</h3>
              <p>担当</p>
              <ul>
                <li>daichan.のFresh!Night</li>
              </ul>
            </div>
            <ul className='link-list'>
              <li className='twitter'><a className='inner' href="https://twitter.com/daichan1217" target="_blank" rel="noreferrer">Twitter</a></li>
              <li className='niconico'><a className='inner' href="http://www.nicovideo.jp/user/14926495" target="_blank" rel="noreferrer">niconico</a></li>
              <li className='link'><span className='inner'>link</span></li>
            </ul>
          </li>
          <li>
            <div className='visual mic'>
              <div className='icon'><Image src='/assets/images/personality/icon-michael.png' width={80} height={80} alt='マイケル' /></div>
            </div>
            <div className='text-area'>
              <h3>マイケル</h3>
              <p>担当</p>
              <ul>
                <li>RADIO Michael</li>
              </ul>
            </div>
            <ul className='link-list'>
              <li className='twitter'><a className='inner' href="https://twitter.com/michael_peach21" target="_blank" rel="noreferrer">Twitter</a></li>
              <li className='niconico'><a className='inner' href="http://www.nicovideo.jp/user/2986184" target="_blank" rel="noreferrer">niconico</a></li>
              <li className='link'><span className='inner'>link</span></li>
            </ul>
          </li>
          <li>
            <div className='visual mic'>
              <div className='icon'><Image src='/assets/images/personality/icon-human.png' width={80} height={80} alt='OCHIKO' /></div>
            </div>
            <div className='text-area'>
              <h3>OCHIKO</h3>
              <p>担当</p>
              <ul>
                <li>Music Lounge！(MUSIC DRIVE!!)</li>
              </ul>
            </div>
            <ul className='link-list'>
              <li className='twitter'><a className='inner' href="https://twitter.com/ochiko5457" target="_blank" rel="noreferrer">Twitter</a></li>
              <li className='niconico'><a className='inner' href="http://www.nicovideo.jp/user/4345130" target="_blank" rel="noreferrer">niconico</a></li>
              <li className='link'><span className='inner'>link</span></li>
            </ul>
          </li>
          <li>
            <div className='visual mic'>
              <div className='icon'><Image src='/assets/images/personality/icon-hori.png' width={80} height={80} alt='ホリちゃん' /></div>
            </div>
            <div className='text-area'>
              <h3>ホリちゃん</h3>
              <p>担当</p>
              <ul>
                <li>トンちゃんとホリちゃんのHitMe！！</li>
              </ul>
            </div>
            <ul className='link-list'>
              <li className='twitter'><a className='inner' href="https://twitter.com/holy_chang" target="_blank" rel="noreferrer">Twitter</a></li>
              <li className='niconico'><a className='inner' href="http://www.nicovideo.jp/user/1432066" target="_blank" rel="noreferrer">niconico</a></li>
              <li className='link'><span className='inner'>link</span></li>
            </ul>
          </li>
          <li>
            <div className='visual mic'>
              <div className='icon'><Image src='/assets/images/personality/icon-human.png' width={80} height={80} alt='りぇこ' /></div>
            </div>
            <div className='text-area'>
              <h3>りぇこ</h3>
            </div>
            <ul className='link-list'>
              <li className='twitter'><a className='inner' href="https://twitter.com/white322rabbit" target="_blank" rel="noreferrer">Twitter</a></li>
              <li className='niconico'><span className='inner'>niconico</span></li>
              <li className='link'><span className='inner'>link</span></li>
            </ul>
          </li>
          <li>
            <div className='visual mic'>
              <div className='icon'><Image src='/assets/images/personality/icon-human.png' width={80} height={80} alt='トンちゃん' /></div>
            </div>
            <div className='text-area'>
              <h3>トンちゃん</h3>
              <p>担当</p>
              <ul>
                <li>トンちゃんとホリちゃんのHitMe！！</li>
              </ul>
            </div>
            <ul className='link-list'>
              <li className='twitter'><span className='inner'>Twitter</span></li>
              <li className='niconico'><span className='inner'>niconico</span></li>
              <li className='link'><span className='inner'>link</span></li>
            </ul>
          </li>
          <li>
            <div className='visual mic'>
              <div className='icon'><Image src='/assets/images/personality/icon-group.png' width={80} height={80} alt='cisuMusic familiar' /></div>
            </div>
            <div className='text-area'>
              <h3>cisuMusic<br/>familiar</h3>
              <p>担当</p>
              <ul>
                <li>あなたの引き出しぶちまけてｯｻ</li>
              </ul>
            </div>
            <ul className='link-list'>
              <li className='twitter'><a className='inner' href="https://twitter.com/cisuMusic_f" target="_blank" rel="noreferrer">Twitter</a></li>
              <li className='niconico'><a className='inner' href="http://www.nicovideo.jp/user/60214661" target="_blank" rel="noreferrer">niconico</a></li>
              <li className='link'><a className='inner' href="http://cisumusicfamiliar.com/" target="_blank" rel="noreferrer">link</a></li>
            </ul>
          </li>
          <li>
            <div className='visual mic'>
              <div className='icon'><Image src='/assets/images/personality/icon-kureko.png' width={80} height={80} alt='呑田くれこ' /></div>
            </div>
            <div className='text-area'>
              <h3>呑田くれこ</h3>
              <p>担当</p>
              <ul>
                <li>きんぎょ日和</li>
              </ul>
            </div>
            <ul className='link-list'>
              <li className='twitter'><a className='inner' href="https://twitter.com/nonnda_905" target="_blank" rel="noreferrer">Twitter</a></li>
              <li className='niconico'><a className='inner' href="http://www.nicovideo.jp/user/55631150" target="_blank" rel="noreferrer">niconico</a></li>
              <li className='link'><span className='inner'>link</span></li>
            </ul>
          </li>
          <li>
            <div className='visual mic'>
              <div className='icon'><Image src='/assets/images/personality/icon-human.png' width={80} height={80} alt='佐藤明子' /></div>
            </div>
            <div className='text-area'>
              <h3>佐藤明子</h3>
              <p>担当</p>
              <ul>
                <li>佐藤明子のぐだふたぬ～んフィーバー</li>
              </ul>
            </div>
            <ul className='link-list'>
              <li className='twitter'><a className='inner' href="https://twitter.com/sad_aki" target="_blank" rel="noreferrer">Twitter</a></li>
              <li className='niconico'><a className='inner' href="http://www.nicovideo.jp/user/53629928" target="_blank" rel="noreferrer">niconico</a></li>
              <li className='link'><span className='inner'>link</span></li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <h2>スタッフ　Staff</h2>
        <ul className='personality-list'>
          <li>
            <div className='visual gear'>
              <div className='icon'><Image src='/assets/images/personality/icon-akibajin.png' width={80} height={80} alt='AKIBAJIN' /></div>
            </div>
            <div className='text-area'>
              <h3>AKIBAJIN</h3>
              <p>担当</p>
              <ul>
                <li>ソフトウェア開発</li>
                <li>カフボックス開発</li>
              </ul>
            </div>
            <ul className='link-list'>
              <li className='twitter'><a className='inner' href="https://twitter.com/AKIBAJIN" target="_blank" rel="noreferrer">Twitter</a></li>
              <li className='niconico'><a className='inner' href="http://www.nicovideo.jp/user/789439" target="_blank" rel="noreferrer">niconico</a></li>
              <li className='link'><a className='inner' href="http://kandabuhin.web.fc2.com/" target="_blank" rel="noreferrer">link</a></li>
            </ul>
          </li>
          <li>
            <div className='visual paint'>
              <div className='icon'><Image src='/assets/images/personality/icon-human.png' width={80} height={80} alt='アーロン' /></div>
            </div>
            <div className='text-area'>
              <h3>アーロン</h3>
              <p>担当</p>
              <ul>
                <li>イラストデザイン</li>
                <li>ウェブサイトデザイン</li>
              </ul>
            </div>
            <ul className='link-list'>
              <li className='twitter'><span className='inner'>Twitter</span></li>
              <li className='niconico'><span className='inner'>niconico</span></li>
              <li className='link'><span className='inner'>link</span></li>
            </ul>
          </li>
          <li>
            <div className='visual music'>
              <div className='icon'><Image src='/assets/images/personality/icon-human.png' width={80} height={80} alt='K1' /></div>
            </div>
            <div className='text-area'>
              <h3>K1</h3>
              <p>担当</p>
              <ul>
                <li>ステーションソング</li>
                <li>BGM作曲</li>
              </ul>
            </div>
            <ul className='link-list'>
              <li className='twitter'><span className='inner'>Twitter</span></li>
              <li className='niconico'><span className='inner'>niconico</span></li>
              <li className='link'><span className='inner'>link</span></li>
            </ul>
          </li>
          <li>
            <div className='visual code'>
              <div className='icon'><Image src='/assets/images/personality/icon-suiko.png' width={80} height={80} alt='水狐' /></div>
            </div>
            <div className='text-area'>
              <h3>水狐</h3>
              <p>担当</p>
              <ul>
                <li>ウェブサイト管理</li>
                <li>アーカイブ管理</li>
              </ul>
            </div>
            <ul className='link-list'>
              <li className='twitter'><a className='inner' href="https://twitter.com/Waterfox_skjp" target="_blank" rel="noreferrer">Twitter</a></li>
              <li className='niconico'><a className='inner' href="http://www.nicovideo.jp/user/8719254" target="_blank" rel="noreferrer">niconico</a></li>
              <li className='link'><span className='inner'>link</span></li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  )
}

Personality.getLayout = function getLayout(page) {
  return (
    <Layout title='パーソナリティ'>
      {page}
    </Layout>
  )
}
