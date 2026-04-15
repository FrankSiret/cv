import SectionTitle from './ui/SectionTitle'
import TimelineItem from './ui/TimelineItem'
import ExternalLink from './ui/ExternalLink'
import { experience } from '../data/experience'

function BulletItem({ html }) {
  return (
    <li className="experience__description">
      <span className="experience__circle"></span>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </li>
  )
}

function TechList({ technologies }) {
  if (!technologies?.length) return null
  return (
    <div className="experience__technologies">
      <span>Technologies used</span>
      <ul className="experience__technologies-list">
        {technologies.map(tech => (
          <li key={tech} className="experience__technologies-item">{tech}</li>
        ))}
      </ul>
    </div>
  )
}

function ExperienceEntry({ entry }) {
  return (
    <TimelineItem prefix="experience">
      <h3 className="experience__title">{entry.title}</h3>
      <span className="experience__company">
        {entry.period} | {entry.company}
        {entry.companyHref && <ExternalLink href={entry.companyHref} />}
      </span>
      <ul className="experience__list">
        {entry.bullets.map((bullet, i) => (
          <BulletItem key={i} html={bullet} />
        ))}
      </ul>
      <TechList technologies={entry.technologies} />
    </TimelineItem>
  )
}

function Experience() {
  return (
    <section className="experience section" id="experience">
      <SectionTitle>Experience</SectionTitle>
      <div className="experience__container bd-grid">
        {experience.map((entry, i) => (
          <ExperienceEntry key={i} entry={entry} />
        ))}
      </div>
    </section>
  )
}

export default Experience
