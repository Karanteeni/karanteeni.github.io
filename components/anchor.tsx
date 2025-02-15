type AnchorHeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  id: string
  children: React.ReactNode
}

export default function AnchorHeading({
  level,
  id,
  children
}: AnchorHeadingProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}${window.location.pathname}#${id}`
    )
  }

  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <button className="anchor-heading" onClick={copyToClipboard}>
      <a href={`#${id}`} className="anchor-heading__link">
        <span className="anchor-heading__indicator">#</span>
        <Tag id={id}>{children}</Tag>
      </a>
    </button>
  )
}
