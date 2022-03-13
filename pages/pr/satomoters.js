import Image from 'next/image'
import LayoutPr from 'components/layout_pr'

export default function Satomoters() {
  return (
    <>
      <div className="img-wrap">
        <Image src='/assets/images/pr/pr-satomoters.jpg' width={900} height={675} alt='佐藤自動車' quality={85} />
      </div>
    </>
  )
}

Satomoters.getLayout = function getLayout(page) {
  return (
    <LayoutPr title='佐藤自動車'>
      {page}
    </LayoutPr>
  )
}
