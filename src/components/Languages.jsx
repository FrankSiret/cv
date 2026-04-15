import SectionTitle from './ui/SectionTitle'

const languages = [
  { name: 'Spanish', level: 'C2 (Native proficiency)' },
  { name: 'English', level: 'B2 (Professional working proficiency)' },
]

function Languages() {
  return (
    <section className="languages section">
      <SectionTitle>Languages</SectionTitle>
      <div className="languages__container">
        <ul className="languages__content bd-grid">
          {languages.map(lang => (
            <li key={lang.name} className="languages__name">
              <span className="languages__circle"></span> {lang.name} - {lang.level}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Languages
