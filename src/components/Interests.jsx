import SectionTitle from './ui/SectionTitle'

const interests = [
  { icon: 'bx-headphone',     name: 'Music' },
  { icon: 'bx-coffee',        name: 'Coffee' },
  { icon: 'bxs-plane-alt',    name: 'Travel' },
  { icon: 'bx-book',          name: 'Read' },
  { icon: 'bx-pyramid',       name: 'Puzzle solver' },
]

function Interests() {
  return (
    <section className="interests section">
      <SectionTitle>Interests</SectionTitle>
      <div className="interests__container bd-grid">
        {interests.map(item => (
          <div key={item.name} className="interests__content">
            <i className={`bx ${item.icon} interests__icon`}></i>
            <span className="interests__name">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Interests
