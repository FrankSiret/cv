import { useState, useEffect } from 'react'

function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY >= 200)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a href="#" className={`scrolltop${visible ? ' show-scroll' : ''}`} id="scroll-top">
      <i className="bx bx-up-arrow-alt scrolltop__icon"></i>
    </a>
  )
}

export default ScrollTop
