
export default function Redirect({
    text,
    url
}) {
    return (
        <div className="redirect-card">
            <a href={url} target="_blank">{text}</a>
        </div>
    )
}
