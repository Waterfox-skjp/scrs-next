import Image from 'next/image'
import LayoutPr from 'components/layout_pr'

export default function Niconishiki() {
  return (
    <>
      <div className='img-wrap'>
        <Image src='/assets/images/pr/pr-niconishiki.jpg' width={900} height={675} alt='ニコ錦 さんしてぃ酒造' quality={85} />
      </div>
    </>
  )
}

Niconishiki.getLayout = function getLayout(page) {
  return (
    <LayoutPr title='ニコ錦 さんしてぃ酒造'>
      {page}
    </LayoutPr>
  )
}
