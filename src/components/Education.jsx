import { useState } from 'react'
import SectionTitle from './ui/SectionTitle'
import TimelineItem from './ui/TimelineItem'
import ExternalLink from './ui/ExternalLink'
import { education, icpcAwards } from '../data/education'

function IcpcAwardItem({ award }) {
  return (
    <li className="icpc__award-item">
      <div className="icpc__time">
        <span className="icpc__rounder"></span>
        <span className="icpc__line"></span>
      </div>
      <div className="icpc__data bd-grid">
        <p className="icpc__award-title">
          {award.title}
          {award.titleHref && (
            <> <a target="_blank" rel="noreferrer" href={award.titleHref}>{award.titleLinkText}</a></>
          )}
        </p>
        <span className="icpc__award-date" title={award.locationTitle}>
          {award.date} - {award.location}
        </span>
        <div className="icpc__award-data">
          {award.placeHref ? (
            <a target="_blank" rel="noreferrer" href={award.placeHref} className="icpc__award-place">
              {award.place}
            </a>
          ) : (
            <span className={`icpc__award-place${award.gold ? ' color-gold' : ''}`}>
              {award.place}
            </span>
          )}
          <span className="icpc__award-team">{award.team}</span>
        </div>
      </div>
    </li>
  )
}

function EducationEntry({ entry }) {
  const [icpcOpen, setIcpcOpen] = useState(false)

  return (
    <TimelineItem prefix="education">
      <h3 className="education__title">{entry.title}</h3>
      <span className="education__studies">
        {entry.institution}
        {entry.institutionHref && <ExternalLink href={entry.institutionHref} />}
      </span>
      <span className="education__year">{entry.years}</span>

      {entry.bullets && (
        <ul className="education__list">
          {entry.bullets.map((bullet, i) => {
            if (bullet === null && entry.hasIcpc) {
              return (
                <li key={i} className="education__description">
                  <span className="education__circle"></span>
                  <div>
                    Successfully competed for 5 years in the ICPC Competitive Programming,
                    representing the university in the Caribbean Finals.{' '}
                    <a
                      href="#"
                      className="icpc__award-button"
                      onClick={e => { e.preventDefault(); setIcpcOpen(o => !o) }}
                    >
                      {icpcOpen ? 'See Less' : 'See More'}
                    </a>
                    <ul className={`icpc__award${icpcOpen ? ' show' : ''}`}>
                      {icpcAwards.map((award, j) => (
                        <IcpcAwardItem key={j} award={award} />
                      ))}
                    </ul>
                  </div>
                </li>
              )
            }
            return (
              <li key={i} className="education__description">
                <span className="education__circle"></span>
                <div>{bullet}</div>
              </li>
            )
          })}
        </ul>
      )}
    </TimelineItem>
  )
}

function Education() {
  return (
    <section className="education section" id="education">
      <SectionTitle>Education</SectionTitle>
      <div className="education__container bd-grid">
        {education.map((entry, i) => (
          <EducationEntry key={i} entry={entry} />
        ))}
      </div>
    </section>
  )
}

export default Education
