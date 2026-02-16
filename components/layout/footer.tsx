import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import style from '../../styles/footer.module.css'

const Footer = ({ home }: { home?: boolean }) => {
    const year = new Date().getFullYear()
    return (
        <footer>
            <div className="footer-links">
                <div>
                    <h4>Yhteisö</h4>
                    <ul>
                        <li>
                            <a href="https://discord.gg/fZqqysM" target="_blank" rel="noreferrer">
                                Discord
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/Karanteeni" target="_blank" rel="noreferrer">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/c/Karanteeni" target="_blank" rel="noreferrer">
                                YouTube
                            </a>
                        </li>
                        <li>
                            <a href="mailto:mckaranteeni@gmail.com">
                                Contact us at mckaranteeni@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>Pikalinkit</h4>
                    <ul>
                        <li>
                            - <Link href="/ukk">Usein kysytyt kysymykset</Link>
                        </li>
                        <li>
                            - <Link href="/hoks">Hyvä tietää</Link>
                        </li>
                        <li>
                            - <Link href="/yllapito">Ylläpito</Link>
                        </li>
                        <li>
                            {'- '}
                            <a href="http://map.karanteeni.net/" target="_blank" rel="noopener noreferrer">
                                Dynmap
                            </a>
                        </li>
                        <li>
                            - <Link href="/unban">Unban-hakemus</Link>
                        </li>
                    </ul>
                </div>
                <div className={`${style['legal']}`}>
                    <h4>Tiedot / Affiliations</h4>
                    <ul>
                        <li>- <b>NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT</b></li>
                        <li>- <b>EI OLE VIRALLINEN MINECRAFT-TUOTE. EI OLE MOJANGIN TAI MICROSOFTIN HYVÄKSYMÄ EIKÄ MOJANGIIN TAI MICROSOFTIIN LIITOKSISSA</b></li>
                        <li>
                            - <Link href="/yllapito">Up-to-date staff and owners</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-end">
                <div>
                    <p>&copy; Karanteeni {year}</p>
                </div>
                {false && (
                    <div>
                        <p>Kiitos taustakuvasta juhkulariteetille!</p>
                    </div>
                )}
                <div>
                    <a
                        href="https://github.com/Karanteeni/karanteeni.github.io"
                        rel="noreferrer noopener"
                        target="_bank"
                        title="github"
                    >
                        Github
                        <FontAwesomeIcon className="icon" icon={faGithub} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
