import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const router = useRouter()

  const [navFlag, setNavFlag] = useState(false)
  const navToggle = () => {
    setNavFlag(!navFlag)
  }
  return (
    <header>
      <div className='inner'>
        <h1 className='logo'>
          <Link href='/'><a><Image src='/assets/images/common/logo.png' width={200} height={79} alt='Sun City Radio Station' /></a></Link>
        </h1>
        <button id='js-sp-nav' className={`btn-sp-nav ${navFlag ? 'active' : ''}`} onClick={navToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav className={navFlag ? 'open' : ''}>
        <ul>
          <li className={router.pathname == '/' ? 'current' : ''}><Link href='/'><a>TOP</a></Link></li>
          <li className={router.pathname.startsWith('/timetable') ? 'current' : ''}><Link href='/timetable/'><a>放送番組</a></Link></li>
          <li className={router.pathname.startsWith('/personality') ? 'current' : ''}><Link href='/personality/'><a>パーソナリティ</a></Link></li>
          <li className={router.pathname.startsWith('/goods') ? 'current' : ''}><Link href='/goods/'><a>グッズ</a></Link></li>
          <li className={router.pathname.startsWith('/request') ? 'current' : ''}><Link href='/request/'><a>リクエスト</a></Link></li>
          <li className={router.pathname.startsWith('/about') ? 'current' : ''}><Link href='/about/'><a>概　要</a></Link></li>
          <li className={router.pathname.startsWith('/contact') ? 'current' : ''}><Link href='/contact/'><a>お問い合わせ</a></Link></li>
        </ul>
      </nav>
    </header>
  )
}
