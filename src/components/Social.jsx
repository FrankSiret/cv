import SectionTitle from './ui/SectionTitle'
import { socialLinks } from '../data/social'

function SocialCard({ href, icon, platform, label }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="social-card">
      <span className="social-card__icon-wrap">
        <i className={`bx ${icon} social-card__icon`}></i>
      </span>
      <span className="social-card__body">
        <span className="social-card__platform">{platform}</span>
        <span className="social-card__handle">@{label}</span>
      </span>
      <i className="bx bx-chevron-right social-card__arrow"></i>
    </a>
  )
}

function Social() {
  return (
    <section className="social section">
      <SectionTitle>SOCIAL</SectionTitle>
      <div className="social-grid">
        {socialLinks.map(link => (
          <SocialCard key={link.href} {...link} />
        ))}
      </div>
    </section>
  )
}

export default Social
