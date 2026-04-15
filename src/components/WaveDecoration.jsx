export default function WaveDecoration() {
  return (
    <div className="wave-footer" aria-hidden="true">
      <svg
        className="wave-svg wave-svg--back"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,90 L0,90 Z" />
      </svg>
      <svg
        className="wave-svg wave-svg--front"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,55 C360,10 720,90 1080,45 C1260,22 1380,60 1440,55 L1440,90 L0,90 Z" />
      </svg>
    </div>
  )
}
