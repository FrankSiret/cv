import SectionTitle from './ui/SectionTitle'
import ExternalLink from './ui/ExternalLink'
import { certificates } from '../data/certificates'

function CertificateItem({ title, company, date, href }) {
  const Tag = href ? 'a' : 'div'
  const props = href
    ? { href, target: '_blank', rel: 'noreferrer', className: 'certificate__content bd-grid certificate__content--link' }
    : { className: 'certificate__content bd-grid' }

  return (
    <Tag {...props}>
      <h3 className="certificate__title">{title}</h3>
      <span className="certificate__company">
        {date} | {company}
        {href && <ExternalLink href={href} />}
      </span>
    </Tag>
  )
}

function Certificates() {
  return (
    <section className="certificate section" id="certificates">
      <SectionTitle>Certificates</SectionTitle>
      <div className="certificate__container bd-grid bd-grid-2">
        {certificates.map(cert => (
          <CertificateItem key={cert.title} {...cert} />
        ))}
      </div>
    </section>
  )
}

export default Certificates
