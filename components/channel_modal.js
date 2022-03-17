import Image from 'next/image'
import { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#__next')

/**
 * 番組モーダル
 * @param {*}
 * @returns
 */
export default function ChannelModal({id}) {
  const [modalIsOpen, setIsOpen] = useState(false) // モーダルの状態
  const channelList = [
    {
      id: 'nicoban',
      title: 'ニコニコばんばん！',
      logo: {
        src: '/assets/images/timetable/logo-nicoban.png',
        width: 238,
        height: 103
      },
      personality: [
        {
          id: 'ban',
          icon: '/assets/images/personality/icon-ban.png',
          name: 'ばん'
        }
      ],
      time: '毎週土曜日<br />22:30～24:30',
      contents: '【コーナー】<br />・テーマメール<br />・リスナー通信<br />・懐メロアワーズ'
    },
    {
      id: 'kingyo',
      title: 'きんぎょ日和',
      logo: {
        src: '/assets/images/timetable/logo-kingyo.png',
        width: 238,
        height: 124
      },
      personality: [
        {
          id: 'kureko',
          icon: '/assets/images/personality/icon-kureko.png',
          name: '呑田くれこ'
        }
      ],
      time: '毎週土曜日<br />9:30～10:30',
      contents: '今週の出来事、休日にしてみたいこと等をのんびり話してます。放送は毎週(土)朝9:30を予定しています。 お便りはDMからも受け付けております。<br/ ><a href="https://twitter.com/kinngyo_hiyori" target="_blank">@kinngyo_hiyori</a>'
    },
    {
      id: 'hitme',
      title: 'トンちゃんとホリちゃんのHitMe！！',
      logo: {
        src: '/assets/images/timetable/logo-hitme.png',
        width: 238,
        height: 76
      },
      personality: [
        {
          id: 'ton',
          icon: '/assets/images/personality/icon-human.png',
          name: 'トンちゃん'
        },
        {
          id: 'hori',
          icon: '/assets/images/personality/icon-hori.png',
          name: 'ホリちゃん'
        },
      ],
      time: '毎月第3水曜日<br />21:30～23:00',
      contents: 'フリー素材を廃業した103系CGでお馴染みのトンちゃんと鉄道穴リストのホリちゃんが、鉄道ひとり＋α旅テイストで送るグダグダラジオ！！'
    },
    {
      id: 'burst',
      title: 'Radio BURST',
      logo: {
        src: '/assets/images/timetable/logo-burst.png',
        width: 238,
        height: 67
      },
      personality: [
        {
          id: 'ban',
          icon: '/assets/images/personality/icon-ban.png',
          name: 'ばん'
        }
      ],
      time: '不定期',
      contents: '・リクエスト<br />突発放送なので何でもあり！'
    }
  ]
  const channel = channelList.find((data) => data.id === id)

  return (
    <li>
      <div onClick={() => setIsOpen(true)}>
        <Image src={channel.logo.src} width={channel.logo.width} height={channel.logo.height} alt={channel.title} />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        overlayClassName={{
          base: 'c-overlay',
          afterOpen: 'is-after',
          beforeClose: 'is-before'
        }}
        className={{
          base: 'c-modal',
          afterOpen: 'is-after',
          beforeClose: 'is-before'
        }}
        closeTimeoutMS={400}
      >
        <div className='c-modal__logo'>
          <div className='c-modal__logo-img'><Image src={channel.logo.src} width={channel.logo.width} height={channel.logo.height} alt={channel.title} layout='responsive' /></div>
          <h3 className='c-modal__logo-text'>{channel.title}</h3>
        </div>
        <div className='c-modal__content'>
          <h4 className='c-modal__heading'>パーソナリティ</h4>
          <ul className='c-modal__personality'>
            {channel.personality.map((item) => {
              return (
                <li className='c-modal__personality-item' key={item.id}>
                  <div className='c-modal__personality-icon'><Image src={item.icon} width={50} height={50} alt={item.name} layout='responsive' /></div>
                  <p className='c-modal__personality-name'>{item.name}</p>
                </li>
              );
            })}
          </ul>
          <h4 className='c-modal__heading'>放送時間</h4>
          <p className='c-modal__text' dangerouslySetInnerHTML={{ __html: channel.time }} />
          <h4 className='c-modal__heading'>放送内容</h4>
          <p className='c-modal__text' dangerouslySetInnerHTML={{ __html: channel.contents }} />
          <button className='c-modal__close' onClick={() => setIsOpen(false)}><Image src='/assets/images/common/btn-close.svg' width={30} height={30} alt='Close' layout='responsive' /></button>
        </div>
      </Modal>
    </li>
  )
}
