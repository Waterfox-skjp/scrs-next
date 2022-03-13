import Image from 'next/image'
import LayoutPr from 'components/layout_pr'

export default function Hotelsuncity() {
  return (
    <>
      <div className="img-wrap">
        <Image src='/assets/images/pr/pr-hotelsuncity.jpg' width={900} height={675} alt='HOTEL SunCity' quality={85} />
      </div>
    </>
  )
}

Hotelsuncity.getLayout = function getLayout(page) {
  return (
    <LayoutPr title='HOTEL SunCity'>
      {page}
    </LayoutPr>
  )
}
