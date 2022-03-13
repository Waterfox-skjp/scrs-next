import Image from 'next/image'
import LayoutPr from 'components/layout_pr'

export default function Gcupsuncity() {
  return (
    <>
      <div className="img-wrap">
        <Image src='/assets/images/pr/pr-gcupsuncity.jpg' width={900} height={675} alt='G-CUP SUN CITY' quality={85} />
      </div>
    </>
  )
}

Gcupsuncity.getLayout = function getLayout(page) {
  return (
    <LayoutPr title='G-CUP SUN CITY'>
      {page}
    </LayoutPr>
  )
}
