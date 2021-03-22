const ServerStatus = ({ status }) => {
    return (
        <div className="server-status">
            <h3>Palvelin</h3>
            <span className={'server-state' + status.online ? ' online' : ' offline'}>{status.online ? 'Päällä' : 'Pois päältä'}</span>
            <span className="server-version">Versio: {status.version}</span>
            <span className="server-address">mc.karanteeni.net</span>
            <span className="server-ip">{status.ip}</span>
            <span className="server-player-count">Pelaajia paikalla: {status?.players?.online || 0}</span>
        </div>
    )
}

export default ServerStatus
