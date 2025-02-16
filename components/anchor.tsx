type AnchorHeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  id: string
  children: React.ReactNode
  className?: string
  hideIndicator?: boolean
}

export default function AnchorHeading({
  level,
  id,
  children,
  className,
  hideIndicator
}: AnchorHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <button className="anchor-heading">
      {!hideIndicator && <span className="anchor-heading__indicator">#</span>}
      <a href={`#${id}`} className="anchor-heading__link">
        <Tag className={className} id={id}>{children}</Tag>
      </a>
    </button>
  )
}
