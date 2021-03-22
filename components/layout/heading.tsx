const Heading = ({ heading, lead, children }: { heading: string; lead?: string; children?: React.ReactNode }) => {
    return (
        <div className="main-heading">
            <h1>{heading}</h1>
            <p className="lead">{lead}</p>
            {children}
        </div>
    )
}

export default Heading
