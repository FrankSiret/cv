const PDF_URL = `${import.meta.env.BASE_URL}assets/pdf/Frank Rodríguez Siret — CV.pdf`
const IMG_URL = `${import.meta.env.BASE_URL}assets/img/perfil.jpg`

function Home({ darkTheme, onThemeToggle }) {
  return (
    <section className="home" id="home">
      <div className="home__container section bd-grid">
        <div className="home__data bd-grid">
          <img src={IMG_URL} alt="Frank Siret" className="home__img" />
          <h1 className="home__title">RODRÍGUEZ SIRET <b>FRANK</b></h1>
          <h3 className="home__profession">Java Developer</h3>
          <div>
            <a download href={PDF_URL} target="_blank" className="home__button-movil">
              Download
            </a>
          </div>
        </div>

        <div className="home__address bd-grid">
          <span className="home__information">
            <i className="bx bx-map home__icon"></i> Barcelona, Spain
          </span>
          <a href="mailto:frank.siret@gmail.com" target="_blank" rel="noreferrer" className="home__information">
            <i className="bx bx-envelope home__icon"></i> frank.siret@gmail.com
          </a>
        </div>
      </div>

      <i
        className={`bx ${darkTheme ? 'bx-sun' : 'bx-moon'} change-theme`}
        title="Theme"
        onClick={onThemeToggle}
      ></i>

      <a title="Download PDF" className="bx bx-download generate-pdf" download href={PDF_URL} target="_blank"></a>
    </section>
  )
}

export default Home
