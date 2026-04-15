import { useState } from 'react'
import SectionTitle from './ui/SectionTitle'
import { primarySkills, extraSkills } from '../data/skills'

function SkillItem({ skill }) {
  return (
    <div
      title={skill.title || skill.name}
      className={`skills__name${skill.featured ? ' skills__name--featured' : ''}`}
    >
      <span className="skills__circle"></span>
      <span className="skills__name-text">{skill.name}</span>
      <div className="skills__time-stars" title={`${skill.stars} Stars`}>
        <span className="skills__time">{skill.years}</span>
        <span className="skills__stars">
          <i className="bx bxs-star star__icon"></i>{skill.stars}
        </span>
      </div>
    </div>
  )
}

function Skills() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="skills section" id="skills">
      <SectionTitle>Skills</SectionTitle>

      <div className="skills__content bd-grid">
        {primarySkills.map(skill => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>

      <div className={`skills__extra-wrap${expanded ? ' expanded' : ''}`}>
        <div className="skills__content bd-grid">
          {extraSkills.map(skill => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      </div>

      <a
        href="#"
        className="skills-button"
        onClick={e => { e.preventDefault(); setExpanded(x => !x) }}
      >
        {expanded ? 'See Less' : 'See More'}
      </a>
    </section>
  )
}

export default Skills
