import Link from 'next/link'
import Layout from 'components/layout'

export default function Themasong() {
  return (
    <>
      <div className='page-ttl'>
        <h1>テーマソング<span>Theme Song</span></h1>
      </div>
      <ul className='page-path'>
        <li><Link href='/'><a>TOP</a></Link></li>
        <li><Link href='/about/'><a>概要</a></Link></li>
        <li>テーマソング</li>
      </ul>
      <section>
        <h2>Sun City Radio Station</h2>
        <div className='song-wrap'>
          <div className='video-area'>
            <iframe width='560' height='315' src='https://www.youtube.com/embed/HwdKSSpOIvQ' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          </div>
          <div className='text-area'>
            <table>
              <tbody>
                <tr>
                  <th>作曲</th>
                  <td>k1</td>
                </tr>
                <tr>
                  <th>歌</th>
                  <td>千葉由美</td>
                </tr>
              </tbody>
            </table>
            <p id='js-btn-lyrics' className='btn-lyrics'>歌詞を表示する</p>
            <p id='js-box-lyrics' className='box-lyrics' style={{display: 'none'}}>朝焼けの大空　朝日を浴びて<br/>新しい希望を　掴みに行こう<br/>僕たちはみんな　ひとりじゃない<br/>胸に秘めた翼　解き放て<br/>挫けそうな時でも　諦めたい時でも<br/>たくさんの　仲間がいる<br/><br/>さあ手を繋ごう　光の速さで<br/>夢へ続く道　駆け抜けよう<br/>みんなで目指そう　果てしない未来<br/>果てしないこの思い　SunCityRadioStation<br/><br/>春風に吹かれて　桜舞い散る<br/>広い海　夏の　日差し浴びて<br/>夕暮れの秋空　夕鶴が飛び<br/>雪が降り積もれば　また春が来る<br/>めぐり廻った時を超え　みんなと出会って来た<br/>揺るぎない　奇跡の証<br/><br/>さあ手を繋ごう　離さないように<br/>夢へ続く道　はるか彼方<br/>みんなで行こう　輝く未来<br/>煌く(きらめく)この思い　SunCityRadioStation<br/><br/>さあ手を繋ごう　望みの速さで<br/>夢へ続く道　駆け抜けよう<br/>みんなで目指そう　果てしない未来<br/>果てしないこの思い　SunCityRadioStation<br/></p>
          </div>
        </div>
      </section>
      <section>
        <h2>S-S-Express</h2>
        <div className='song-wrap'>
          <div className='video-area'>
            <iframe width='560' height='315' src='https://www.youtube.com/embed/u654u_mUg2M' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          </div>
          <div className='text-area'>
            <table>
              <tbody>
                <tr>
                  <th>作曲</th>
                  <td>k1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <h2>お散歩の歌</h2>
        <div className='song-wrap'>
          <div className='video-area'>
            <iframe width='560' height='315' src='https://www.youtube.com/embed/HLYawm2sY2g' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          </div>
          <div className='text-area'>
            <table>
              <tbody>
                <tr>
                  <th>作曲</th>
                  <td>k1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <h2>水色シグナル</h2>
        <div className='song-wrap'>
          <div className='video-area'>
            <iframe width='560' height='315' src='https://www.youtube.com/embed/5x5DjuuZY-4' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          </div>
          <div className='text-area'>
            <table>
              <tbody>
                <tr>
                  <th>作詞</th>
                  <td>枝吉 一大</td>
                </tr>
                <tr>
                  <th>作曲</th>
                  <td>赤星 勇二郎</td>
                </tr>
                <tr>
                  <th>歌</th>
                  <td>由香</td>
                </tr>
                <tr>
                  <th>映像サポート</th>
                  <td>SAKURA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

Themasong.getLayout = function getLayout(page) {
  return (
    <Layout title='テーマソング'>
      {page}
    </Layout>
  )
}
