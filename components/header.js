import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const router = useRouter()
  const [navFlag, setNavFlag] = useState(false)
  const [fixedFlag, setFixedFlag] = useState(false)
  const navList = [
    {
      id: 'top',
      text: 'TOP',
      link: '/'
    },
    {
      id: 'timetable',
      text: '放送番組',
      link: '/timetable'
    },
    {
      id: 'personality',
      text: 'パーソナリティ',
      link: '/personality'
    },
    {
      id: 'goods',
      text: 'グッズ',
      link: '/goods'
    },
    {
      id: 'request',
      text: 'リクエスト',
      link: '/request'
    },
    {
      id: 'about',
      text: '概　要',
      link: '/about'
    },
    {
      id: 'contact',
      text: 'お問い合わせ',
      link: '/contact'
    },
  ]
  const navToggle = () => {
    setNavFlag(!navFlag)
  }
  const navClose = () => {
    setNavFlag(false)
  }
  const watchFixedHeader = () => {
    let val = window.scrollY
    if (0 < val) {
      setFixedFlag(true)
    }else{
      setFixedFlag(false)
    }
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', watchFixedHeader);
    }
    return () => window.removeEventListener('scroll', watchFixedHeader);
  }, [])

  return (
    <header className={`l-header ${fixedFlag ? 'is-fixed' : ''}`}>
      <div className='l-header__visual'>
        <h1 className='l-header__logo'>
          <Link href='/'>
            <a className='l-header__logo-link' onClick={navClose}>
              <Image src='/assets/images/common/logo.png' width={200} height={79} alt='Sun City Radio Station' layout='responsive' />
            </a>
          </Link>
        </h1>
        <button className={`l-header__hamburger ${navFlag ? 'is-active' : ''}`} onClick={navToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav className={`l-header__nav ${ navFlag ? 'is-open': '' }`}>
        <ul className='l-header__nav-list'>
          {navList.map((item) => {
            if (item.id == 'top') {
              return (
                <li className={`l-header__nav-item ${router.pathname == item.link ? 'is-current' : ''}`} key={item.id}>
                  <Link href={item.link}><a className='l-header__nav-link' onClick={navClose}>{item.text}</a></Link>
                </li>
              )
            }else{
              return (
                <li className={`l-header__nav-item ${router.pathname.startsWith(item.link) ? 'is-current' : ''}`} key={item.id}>
                  <Link href={item.link}><a className='l-header__nav-link' onClick={navClose}>{item.text}</a></Link>
                </li>
              )
            }
          })}
        </ul>
      </nav>
    </header>
  )
}
