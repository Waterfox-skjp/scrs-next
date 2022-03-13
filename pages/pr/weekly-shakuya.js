import Image from 'next/image'
import LayoutPr from 'components/layout_pr'

export default function Shakuya() {
  return (
    <>
      <div className="img-wrap">
        <Image src='/assets/images/pr/pr-weekly-shakuya.jpg' width={900} height={675} alt='週刊SHAKUYA' quality={85} />
      </div>
    </>
  )
}

Shakuya.getLayout = function getLayout(page) {
  return (
    <LayoutPr title='週刊SHAKUYA'>
      {page}
    </LayoutPr>
  )
}
