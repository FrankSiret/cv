// Shared timeline row used by Education and Experience sections.
// prefix: 'education' | 'experience'
function TimelineItem({ prefix, children }) {
  return (
    <div className={`${prefix}__content`}>
      <div className={`${prefix}__time`}>
        <span className={`${prefix}__rounder`}></span>
        <span className={`${prefix}__line`}></span>
      </div>
      <div className={`${prefix}__data bd-grid`}>
        {children}
      </div>
    </div>
  )
}

export default TimelineItem
