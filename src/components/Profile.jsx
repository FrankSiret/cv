import SectionTitle from './ui/SectionTitle'

function Profile() {
  return (
    <section className="profile section" id="profile">
      <SectionTitle>Profile</SectionTitle>

      <p className="profile__description">
        As a highly motivated developer, I am constantly seeking to expand my knowledge and skills in
        new and emerging technologies. With 5 years of experience in <strong>Competitive Programming</strong>, I have
        demonstrated my ability to excel in challenging and dynamic environments. My background in
        mathematics and algorithmics has also equipped me with strong <strong>problem-solving</strong> skills that I
        bring to my work as a developer.
      </p>
      <br />
      <p className="profile__description">
        In terms of technical skills, I am proficient in several programming languages including <strong>C++</strong>,{' '}
        <strong>Java</strong>, and <strong>JavaScript</strong>. My experience in these languages has enabled me to develop a deep
        understanding of their nuances and capabilities, allowing me to deliver <strong>high-quality</strong> code that
        meets project requirements. Also, I possess a solid grasp of <strong>Object-Oriented Programming</strong>{' '}
        and <strong>Design Patterns</strong>, allowing me to create efficient and maintainable code.{' '}
        This expertise enables me to contribute effectively to projects, ensuring robust solutions.
      </p>
      <br />
      <p className="profile__description">
        I am a contributor as a developer of the <strong>Matcom Online Grader</strong> site (<strong>MOG</strong>) for the{' '}
        Faculty of Mathematics and Computer Science of University of Havana, Cuba.
      </p>
      <br />
      <p className="profile__description">
        Lastly I am currently pursuing a <strong>Master&apos;s Degree</strong> in Computer Science at <strong>Harbour.Space</strong> University.
      </p>
    </section>
  )
}

export default Profile
