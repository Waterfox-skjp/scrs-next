import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li><Link href='/'><a>TOP</a></Link></li>
          <li><Link href='/timetable/'><a>放送番組</a></Link></li>
          <li><Link href='/personality/'><a>パーソナリティ</a></Link></li>
          <li><Link href='/goods/'><a>グッズ</a></Link></li>
          <li><Link href='/request/'><a>リクエスト</a></Link></li>
          <li><Link href='/about/'><a>概要</a></Link></li>
          <li><Link href='/contact/'><a>お問い合わせ</a></Link></li>
        </ul>
      </nav>
      <p>Copyright (C) 2005-2019 SunCityRadioStation All Rights Reserved. <br/>design by SCRS Staff</p>
    </footer>
  )
}
