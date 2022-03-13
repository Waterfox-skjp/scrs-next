import Layout from 'components/layout'

export default function Archive() {
  return (
    <>
      <div className='page-ttl'>
        <h1>アーカイブ<span>Archive</span></h1>
      </div>
      <ul className='page-path'>
        <li><a href='/'>TOP</a></li>
        <li>アーカイブ</li>
      </ul>
      <section>
        <h2>注意事項　Notes</h2>
        <p>ご利用前にお読みください。</p>
        <h3 className='border-headline'>1.使用条件</h3>
        <ul className='normal-list'>
          <li>他のメディアへの一切の転載を行わない。</li>
          <li>本データを商行為に使用しない。(レンタル、疑似レンタル行為や第3者へ販売しない。)</li>
          <li>本データを改変しない。</li>
        </ul>
        <h3 className='border-headline'>2.著作権</h3>
        <ul className='normal-list'>
          <li>本データの著作権は、SunCityRadioStationに帰属します。</li>
        </ul>
        <h3 className='border-headline'>3.免責</h3>
        <ul className='normal-list'>
          <li>当局は、いかなる場合においても本データの使用又は使用不能から生ずるいかなる損害に関して一切責任を負いません。</li>
        </ul>
      </section>
      <section>
        <h2>ファイルリスト　Filelist</h2>
        <div className='archive-info'>
          <p>現在、アーカイブの配信を停止しております。</p>
        </div>
      </section>
    </>
  )
}

Archive.getLayout = function getLayout(page) {
  return (
    <Layout title='アーカイブ'>
      {page}
    </Layout>
  )
}
