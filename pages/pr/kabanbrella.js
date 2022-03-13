import Image from 'next/image'
import LayoutPr from 'components/layout_pr'

export default function Kabanbrella() {
  return (
    <>
      <div className="img-wrap">
        <Image src='/assets/images/pr/pr-kabanbrella.jpg' width={900} height={675} alt='鞄ブレラ ボルサ工業' quality={85} />
      </div>
    </>
  )
}

Kabanbrella.getLayout = function getLayout(page) {
  return (
    <LayoutPr title='鞄ブレラ ボルサ工業'>
      {page}
    </LayoutPr>
  )
}
