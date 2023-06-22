import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'
import ReactTooltip from 'react-tooltip'

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import style from '../styles/ranks.module.css'

import RanksData from '../data/ranks.json'

interface CommandInterface {
    command: string
    hover?: string
}

interface OtherInterface {
    content: string
    hover?: string
    link?: string
}

interface RankInterface {
    name: string
    time: string
    color: string
    commands: CommandInterface[]
    other?: OtherInterface[]
}

const ranksData: { [rankName: string]: RankInterface } = RanksData

const Other = ({ other }: { other: OtherInterface }) => {
    if (other.link) {
        return (
            <div className={style['other']}>
                <Link href={other.link}>
                    <a>
                        {other.content}
                        {other.hover && (
                            <>
                                <span
                                    data-tip={other.hover}
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title={other.hover}
                                >
                                    <FontAwesomeIcon className="icon" icon={faInfoCircle} />
                                </span>
                                <ReactTooltip />
                            </>
                        )}
                    </a>
                </Link>
            </div>
        )
    }

    return (
        <div className={style['other']}>
            {other.content}
            {other.hover && (
                <>
                    <span data-tip={other.hover} data-toggle="tooltip" data-placement="right" title={other.hover}>
                        <FontAwesomeIcon className={style['icon']} icon={faInfoCircle} />
                    </span>
                    <ReactTooltip />
                </>
            )}
        </div>
    )
}

const Others = ({ others }: { others: OtherInterface[] }) => {
    return (
        <div className={style['others']}>
            <h3>Muuta:</h3>
            {others && others.map((other, i) => <Other other={other} key={i} />)}
        </div>
    )
}

const Command = ({ command }: { command: CommandInterface }) => {
    return (
        <div className={style['command']}>
            /{command.command}
            {command.hover && (
                <>
                    <span
                        className={style['tooltip']}
                        data-tip={command.hover}
                        data-toggle="tooltip"
                        data-placement="right"
                        title={command.hover}
                    >
                        <FontAwesomeIcon className={style['icon']} icon={faInfoCircle} />
                    </span>
                    <ReactTooltip />
                </>
            )}
        </div>
    )
}

const Commands = ({ commands }: { commands: CommandInterface[] }) => {
    return (
        <div className={style['commands']}>
            {commands && commands.map((command, i) => <Command command={command} key={i} />)}
        </div>
    )
}

const Rank = ({ rank }: { rank: RankInterface }) => {
    return (
        <div className={style['rank']}>
            <div className={style['body'] + ' ' + rank.color}>
                <h2 className={style['title']}>
                    <span className={style['rank-name']}>{rank.name}</span>{' '}
                    <span className={style['time']}>({rank.time})</span>
                </h2>
                {rank.commands && <Commands commands={rank.commands} />}
                {rank.other && <Others others={rank.other} />}
            </div>
        </div>
    )
}

const RanksContainer = ({ ranks }: { ranks: typeof ranksData }) => {
    return (
        <div className={style['ranks']}>
            {ranks && Object.values(ranks).map((rank, i) => <Rank rank={rank} key={i} />)}
        </div>
    )
}

const Rankit = () => {
    return (
        <Layout title="Rankit" description="Karanteenin pelaaja-arvot">
            <Heading heading="Rankit" lead="Tiedot Karanteenin rankeista" />

            <p>
                Karanteenissa on kahdeksan peliaikaan perustuvaa rankkia, jotka tuovat <b>lisäominaisuuksia</b> ajan
                kuluessa. Rankki nousee automaattisesti, kun vaadittu peliaika on saavutettu. Peliajan näkee komennolla <code>/peliaika</code>, ja toisten pelaajien{' '}
                <code>/peliaika pelaajan_nimi</code>.
            </p>
            <p>Peliaikaan perustuvien rankkien lisäksi, Karanteenissa on myös muutama muu eritysrankki.</p>
            <ul>
                <li>
                    Lahjoittaja (kaikille, jotka lahjoittavat vähintään 10€ palvelimelle ks.{' '}
                    <Link href="/lahjoitus">lahjoitus-sivu</Link>)
                </li>
                <li>
                    Rikkoja (sellaisille pelaajille, jotka auttavat ylläpitoa löytämään palvelimelta sitä hajottavia
                    asioita)
                </li>
                <li>
                    Kuukauden pelaaja (vaikuttavat positiivisesti palvelimen ilmapiiriin. Lisää näet <Link href="/kkpelaaja">täältä</Link>)
                </li>
                <li>
                    Tiimiläinen (on tai on ollut ylläpidossa Karanteenin yhteistyöpalvelimilla)
                </li>
            </ul>
            <p>
                Karanteenissa kaikilla pelaajilla on rankkiominaisuuksien lisäksi käytössään muita komentoja ja
                toimintoja. Niistä voit lukea <Link href="/ominaisuudet">täällä</Link>.
            </p>
            <p>Alla on nähtävissä jokaisen rankin peliaikavaatimus sekä avautuvat ominaisuudet.</p>
            <RanksContainer ranks={ranksData} />
        </Layout>
    )
}

export default Rankit
