import Image from 'next/image'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

export default function RegularChannel(props) {
  const formOpen = function () {
    window.open('http://ws.formzu.net/fgen/S62895556/', '', 'width=1000,height=700,scrollbars');
  }
  const modalContents =
    <ul id='js-regular-hidden' className='regular-ch'>
      <li style={{ listStyle: 'none' }}>
        <div className='icon'><Image src='/assets/images/personality/icon-kureko.png' width={80} height={80} alt='呑田くれこアイコン' quality={85} /></div>
        <p className='title'>きんぎょ日和</p>
        <div className='btn-message' onClick={formOpen}>メッセージを送る</div>
        <p className='text'>1週間の出来事をのんびりとお伝えするラジオ番組。朝の一時をご一緒しませんか？</p>
      </li>
      <li style={{ listStyle: 'none' }}>
        <div className='icon'><Image src='/assets/images/personality/icon-hori.png' width={80} height={80} alt='ホリちゃんアイコン' quality={85} /></div>
        <p className='title'>トンちゃんとホリちゃんのHit Me！</p>
        <div className='btn-message' onClick={formOpen}>メッセージを送る</div>
        <p className='text'>鉄道の話題に特化したラジオ番組。超マニアックな鉄オタが盛り上げる1時間！</p>
      </li>
    </ul>

  return (
    <SlideDown>
      {props.open ? modalContents : null}
    </SlideDown>
  )
}
