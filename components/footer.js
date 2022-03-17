import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='l-footer'>
      <nav className='l-footer__nav'>
        <ul className='l-footer__nav-list'>
          <li className='l-footer__nav-item'><Link href='/'><a className='l-footer__nav-link'>TOP</a></Link></li>
          <li className='l-footer__nav-item'><Link href='/timetable/'><a className='l-footer__nav-link'>放送番組</a></Link></li>
          <li className='l-footer__nav-item'><Link href='/personality/'><a className='l-footer__nav-link'>パーソナリティ</a></Link></li>
          <li className='l-footer__nav-item'><Link href='/goods/'><a className='l-footer__nav-link'>グッズ</a></Link></li>
          <li className='l-footer__nav-item'><Link href='/request/'><a className='l-footer__nav-link'>リクエスト</a></Link></li>
          <li className='l-footer__nav-item'><Link href='/about/'><a className='l-footer__nav-link'>概要</a></Link></li>
          <li className='l-footer__nav-item'><Link href='/contact/'><a className='l-footer__nav-link'>お問い合わせ</a></Link></li>
        </ul>
      </nav>
      <p className='l-footer__copyright'>Copyright (C) 2005-2022 SunCityRadioStation All Rights Reserved. <br/>design by SCRS Staff</p>
    </footer>
  )
}
