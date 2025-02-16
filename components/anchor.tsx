type AnchorHeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  id: string
  children: React.ReactNode
  className?: string
}

export default function AnchorHeading({
  level,
  id,
  children,
  className
}: AnchorHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <button className="anchor-heading">

      <Tag className={className} id={id}>{children}</Tag>

      <a href={`#${id}`} className="anchor-heading__link">
        <span className="anchor-heading__indicator">#</span>
      </a>
    </button>
  )
}
