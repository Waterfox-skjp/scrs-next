import Image from 'next/image'
import LayoutPr from 'components/layout_pr'

export default function Onsenmanjyu() {
  return (
    <>
      <div className='img-wrap'>
        <Image src='/assets/images/pr/pr-onsenmanjyu.jpg' width={900} height={675} alt='温泉饅頭本舗' quality={85} />
      </div>
    </>
  )
}

Onsenmanjyu.getLayout = function getLayout(page) {
  return (
    <LayoutPr title='温泉饅頭本舗'>
      {page}
    </LayoutPr>
  )
}
