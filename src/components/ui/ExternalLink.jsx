function ExternalLink({ href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="external-link">
      <i className="bx bx-link"></i>
    </a>
  )
}

export default ExternalLink
