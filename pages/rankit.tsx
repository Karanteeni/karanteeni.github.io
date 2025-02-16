import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'
import { Tooltip } from 'react-tooltip'

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import style from '../styles/ranks.module.css'

import RanksData from '../data/ranks.json'

type TCommand = {
    command: string
    hover?: string
}

type TOthers = {
    content: string
    hover?: string
    link?: string
}

type TRank = {
    name: string
    time: string
    color: string
    commands: TCommand[]
    other?: TOthers[]
}

const RANKS_DATA: Record<string, TRank> = RanksData

const Other = ({ other, i, j }: { other: TOthers, i: number, j: number }) => {
    const id = `other${i}-${j}`
    if (other.link) {
        return (
            <div className={style['other']}>
                <Link href={other.link}>
                    {other.content}
                    {other.hover && (
                        <>
                            <span
                                data-tip={other.hover}
                                data-toggle="tooltip"
                                data-placement="right"
                                data-tooltip-content={other.hover}
                                data-tooltip-id={id}
                            >
                                <FontAwesomeIcon className="icon" icon={faInfoCircle} />
                            </span>
                            <Tooltip variant="dark" id={id} />
                        </>
                    )}
                </Link>
            </div>
        )
    }

    return (
        <div className={style['other']}>
            {other.content}
            {other.hover && (
                <>
                    <span data-tooltip-id={id} data-tip={other.hover} data-toggle="tooltip" data-placement="right" data-tooltip-content={other.hover}>
                        <FontAwesomeIcon className={style['icon']} icon={faInfoCircle} />
                    </span>
                    <Tooltip variant="dark" id={id} />
                </>
            )}
        </div>
    )
}

const Others = ({ others, i }: { others: TOthers[], i: number }) => {
    return (
        <div className={style['others']}>
            <h3>Muuta:</h3>
            {others && others.map((other, j) => <Other other={other} key={j} i={i} j={j} />)}
        </div>
    )
}

const Command = ({ command, i, j }: { command: TCommand, i: number, j: number }) => {
    const id = `command${i}-${j}`
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
                        data-tooltip-id={id}
                        data-tooltip-content={command.hover}
                    >
                        <FontAwesomeIcon className={style['icon']} icon={faInfoCircle} />
                    </span>
                    <Tooltip variant="dark" id={id} />
                </>
            )}
        </div>
    )
}

const Commands = ({ commands, i }: { commands: TCommand[], i: number }) => {
    return (
        <div className={style['commands']}>
            {commands && commands.map((command, j) => <Command command={command} key={j} i={i} j={j} />)}
        </div>
    )
}

const Rank = ({ rank, i }: { rank: TRank, i: number }) => {
    return (
        <div className={style['rank']}>
            <div className={style['body'] + ' ' + rank.color}>
                <h2 className={style['title']}>
                    <span className={style['rank-name']}>{rank.name}</span>{' '}
                    <span className={style['time']}>({rank.time})</span>
                </h2>
                {rank.commands && <Commands commands={rank.commands} i={i} />}
                {rank.other && <Others others={rank.other} i={i} />}
            </div>
        </div>
    )
}

const RanksContainer = ({ ranks }: { ranks: typeof RANKS_DATA }) => {
    return (
        <div className={style['ranks']}>
            {ranks && Object.values(ranks).map((rank, i) => <Rank rank={rank} key={i} i={i} />)}
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
                    <Link href="/kiitos">kiitokset-sivu</Link>. <i>Tätä tasoa ei ole tällä hetkellä mahdollista enää saada</i>)
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
            <RanksContainer ranks={RANKS_DATA} />
        </Layout>
    )
}

export default Rankit
