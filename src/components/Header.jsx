import { useState, useEffect } from 'react'

const navItems = [
  { id: 'home',         icon: 'bx-home',           label: 'Home' },
  { id: 'profile',      icon: 'bx-user',            label: 'Profile' },
  { id: 'education',    icon: 'bx-book',            label: 'Education' },
  { id: 'skills',       icon: 'bx-receipt',         label: 'Skills' },
  { id: 'experience',   icon: 'bx-briefcase-alt',   label: 'Experience' },
  { id: 'certificates', icon: 'bx-award',           label: 'Certificates' },
]

function Header() {
  const [menuOpen, setMenuOpen]       = useState(false)
  const [activeSection, setActive]    = useState('')

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.pageYOffset
      document.querySelectorAll('section[id]').forEach(section => {
        const top    = section.offsetTop - 50
        const height = section.offsetHeight
        if (scrollY > top && scrollY <= top + height) {
          setActive(section.getAttribute('id'))
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="#" className="nav__logo">Frank</a>

        <div className={`nav__menu${menuOpen ? ' show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            {navItems.map(item => (
              <li key={item.id} className="nav__item">
                <a
                  href={`#${item.id}`}
                  className={`nav__link${activeSection === item.id ? ' active-link' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <i className={`bx ${item.icon} nav__icon`}></i>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={() => setMenuOpen(m => !m)}>
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
