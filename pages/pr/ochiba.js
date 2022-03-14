import Image from 'next/image'
import LayoutPr from 'components/layout_pr'

export default function Ochiba() {
  return (
    <>
      <div className='img-wrap'>
        <Image src='/assets/images/pr/pr-ochiba.jpg' width={900} height={675} alt='落葉証券' quality={85} />
      </div>
    </>
  )
}

Ochiba.getLayout = function getLayout(page) {
  return (
    <LayoutPr title='落葉証券'>
      {page}
    </LayoutPr>
  )
}
