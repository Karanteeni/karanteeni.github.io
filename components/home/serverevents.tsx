const ServerEvent = ({ serverEvent }: { serverEvent: any }) => {
    return <div></div>
}

const ServerEvents = ({ events }) => {
    return (
        <div className="server-events">
            <h3>Tapahtumat</h3>
            {events &&
                events.filter().map((serverEvent, i) => {
                    ;<ServerEvent serverEvent={serverEvent} />
                })}
        </div>
    )
}

export default ServerEvents
