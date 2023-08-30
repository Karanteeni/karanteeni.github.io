import { useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'

const ServerStatus = () => {
    const { addToast } = useToasts()
    let [status, setStatus] = useState<any>(null)

    let textIp = 'mc.karanteeni.net'
    useEffect(() => {
        fetch(`https://api.mcsrvstat.us/2/${textIp}`)
            .then((response) => response.json())
            .then((data) => setStatus(data))
    }, [])

    const copyIpToClipboard = () => {
        navigator.clipboard.writeText(textIp)
        addToast('IP tallennettu leikepöydälle', { appearance: 'success', autoDismiss: true })
    }

    return (
        <div className="server-status">
            <h3>Palvelin</h3>
            {!status && (
                <div className="loading-spinner-container">
                    <div className="loading-spinner"></div>
                </div>
            )}
            {status && (
                <>
                    <span className={'server-state' + status.online ? ' online' : ' offline'}>
                        {status.online ? 'Päällä' : 'Pois päältä'}
                    </span>
                    <span className="server-version-wrapper">
                        Versio:
                        <span className="server-version">
                            {' '}
                            {status.version === '1.7.x-1.18.x' ? '1.18.2' : status.protocol_name}
                        </span>
                    </span>

                    <span className="ip-wrapper">
                        ip: <span className="server-address">mc.karanteeni.net</span>
                    </span>

                    <span className="server-player-count">Pelaajia paikalla: {status?.players?.online || 0}</span>
                </>
            )}
            <button className="ip-to-clipboard button" onClick={copyIpToClipboard}>
                Kopioi IP leikepöydälle
            </button>
        </div>
    )
}

export default ServerStatus
