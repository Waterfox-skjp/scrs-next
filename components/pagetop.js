import { useState, useEffect } from 'react'

export default function PageTop() {
  const [pagetopFlag, setPagetopFlag] = useState(false)
  const watchPagetop = () => {
    let val = window.scrollY
    if (140 <= val) {
      setPagetopFlag(true)
    } else {
      setPagetopFlag(false)
    }
  }
  const pageTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', watchPagetop);
    }
    return () => window.removeEventListener('scroll', watchPagetop);
  }, [])

  return (
    <div className={`c-pagetop ${pagetopFlag ? 'is-active' : ''}`} onClick={pageTop}>
      <i className='fas fa-chevron-up'></i>
    </div>
  )
}
