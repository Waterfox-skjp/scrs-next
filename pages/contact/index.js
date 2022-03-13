import Layout from 'components/layout'

export default function Contact() {
  return (
    <>
      <div className='page-ttl'>
        <h1>お問い合わせ<span>contact</span></h1>
      </div>
      <ul className='page-path'>
        <li><a href='/'>TOP</a></li>
        <li>お問い合わせ</li>
      </ul>
      <section>
        <h2>メールフォーム　Mailform</h2>
        <div className='contact-form'>
          <p>メンテナンス中です</p>
          {/* <iframe src='https://ws.formzu.net/dist/S87501080/' onload='if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/) !== null && formzuInitialLoad == true) this.scrollIntoView(true)'></iframe> */}
        </div>
        <div className='annotation-box'>
          <p>いつもSan City Radio Stationをご聴衆いただき、ありがとうございます。<br/><br/>・お問い合わせについては出来るだけお答えしますが、内容によてはお答えできない場合があります。<br/>・回答をご希望される場合は、ハンドルネーム、メールアドレスを正確にお書きください。<br/>・お寄せ頂いたご意見、要望につきましては、拝読させて頂き、今後の運営の参考とさせていただきます。<br/><br/>今後ともSun City Radio Stationをよろしくお願いします。</p>
        </div>
      </section>
    </>
  )
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout title='お問い合わせ'>
      {page}
    </Layout>
  )
}
