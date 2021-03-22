import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer>
            <div className="footer-links">
                <div>
                    <h4>Yhteisö</h4>
                    <ul>
                        <li>
                            <a href="https://discord.gg/fZqqysM" target="_blank">
                                Discord
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/Karanteeni" target="_blank">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/c/Karanteeni" target="_blank">
                                YouTube
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>Pikalinkit</h4>
                    <ul>
                        <li>
                            -{' '}
                            <a href="/ukk" rel="noopener noreferrer">
                                Usein kysytyt kysymykset
                            </a>
                        </li>
                        <li>
                            -{' '}
                            <a href="/hoks" rel="noopener noreferrer">
                                Hyvä tietää
                            </a>
                        </li>
                        <li>
                            -{' '}
                            <a href="/yllapito" rel="noopener noreferrer">
                                Ylläpito
                            </a>
                        </li>
                        <li>
                            -{' '}
                            <a href="http://map.karanteeni.net/" target="_blank" rel="noopener noreferrer">
                                Dynmap
                            </a>
                        </li>
                        <li>
                            -{' '}
                            <a href="/unban" target="_blank" rel="noopener noreferrer">
                                Unban-hakemus
                            </a>
                        </li>
                    </ul>
                    <div id="switcher"></div>
                </div>
            </div>
            <div className="footer-end">
                <div>
                    <p>
                        <small>&copy; Karanteeni {year}</small>
                    </p>
                </div>
                <div>
                    <a href="https://github.com/Pennane/karanteeni-next" target="_bank" title="github">
                        Github
                        <FontAwesomeIcon className="icon" icon={faGithub} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
