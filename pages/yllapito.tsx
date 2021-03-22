import React from 'react'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'
import operators from '../data/operators.json'
import adminStyles from '../styles/yllapito.module.css'

import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const rankToMissingText = (rank) => {
    switch (rank) {
        case 'omistajat':
            return 'Sellout'
        case 'adminit':
            return 'Olisikohan jostakin operaattorista tähän hommaan?'
        case 'operaattorit':
            return 'Operaattoreita ei näkyvillä'
        case 'moderaattorit':
            return 'Hmm.. moderaattoreistahan on pulaa! Haku ylläpitoon on aina auki!'
        case 'rakentajat':
            return 'Ei rakentajia? Kuka nyt rakentaa Gauriksen spawnit?'
    }
}

const YpCard = (props) => {
    return (
        <div className={adminStyles['admin-card-container'] + ' ' + adminStyles[props.rank]}>
            <div className={adminStyles['admin-card'] + ' ' + adminStyles[props.rank]}>
                <div className={adminStyles['background'] + ' ' + adminStyles[props.rank]}>
                    <div className={adminStyles['avatar'] + ' ' + adminStyles[props.rank]}>
                        <img src={'https://visage.surgeplay.com/full/' + props.uuid} />
                    </div>
                </div>
                <div className={adminStyles['admin-content'] + ' ' + adminStyles[props.rank]}>
                    <div className={adminStyles['admin-type'] + ' ' + adminStyles[props.rank]}>{props.rank}</div>
                    <div className={adminStyles['admin-name'] + ' ' + adminStyles[props.rank]}>{props.name}</div>
                    <div className={adminStyles['admin-strength'] + ' ' + adminStyles[props.rank]}>{props.children}</div>
                </div>
                <div className={adminStyles['admin-footer']}>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

const Strength = (props) => {
    return (
        <p>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className={adminStyles['admin-strength-bullet']} />
            {props.children}
        </p>
    )
}

const Rank = ({ data, rank }) => {
    return (
        <div>
            <h3 className={`tag ${adminStyles[rank]} ${adminStyles['yp-header']}`}>{rank}</h3>
            <div className={adminStyles['yp-wrapper']}>
                {data.length === 0 && <p>{rankToMissingText(rank)}</p>}
                {data.length >= 0 &&
                    data.map((item, key) => (
                        <YpCard key={key} rank={rank} uuid={item.uuid} name={item.name} desc={item.description}>
                            {item.strengths.map((str, index) => (
                                <Strength key={index}>{str}</Strength>
                            ))}
                        </YpCard>
                    ))}
            </div>
        </div>
    )
}

const Admininstration = () => {
    let [adminData, setAdminData] = React.useState(operators)
    let [adminRanksArray, setAdminRanksArray] = React.useState(Object.keys(operators))

    return (
        <div className={adminStyles['yp']}>
            {adminData && adminRanksArray && adminRanksArray.map((rank) => <Rank key={rank} rank={rank} data={adminData[rank]} />)}
        </div>
    )
}

const Yllapito = () => {
    return (
        <Layout title="Ylläpito" className="yllapito" description="Karanteenin ylläpito summattuna">
            <Heading heading="Ylläpito" lead="Keitä ylläpitäjät ovat ja mitä he tekevät?" />
            <p>
                Käytännössä ylläpitäjät pitävät vapaaehtoisesti palvelinta pystyssä eri tavoin. Meillä on niitä varten kasa ylläpitoarvoja,
                jotta voimme jakaa työtehtäviä kokemuksen ja osaamisen, sekä myöskin ajan mukaan. Ylentyminen on mahdollista, tosin
                Rakentajalla vain, mikäli siirtynee Moderaattoriksi ennen sitä. Listataan arvoja hieman ja kerrotaan mitä kukakin tekee!
                <ul>
                    <li>
                        <p>
                            <span className={'tag ' + adminStyles['buildmod']}>Rakentaja</span>, meidän visuaalisten ja luovien ihmisten
                            arvo, johon voi päästä{' '}
                            <a href="yphaku" target="_blank">
                                hakemalla
                            </a>
                            ! Heidän tehtävä on rakentaa palvelimen
                            <span data-toggle="tooltip" data-placement="top" title="Spawnit, hubit, erilaiset huoneet">
                                <b> päärakennukset</b>
                            </span>
                            . Jos yhtään katselette ympärille, tajuatte, että se on heidän käsialaa kokonaisuudessaan. He ovat samalla
                            viivalla moderaattoreiden kanssa ja toimivat varalla vain, mikäli palvelimella ei ole moderaattoria tai ylempää
                            paikalla. Rakentajien tehtäviin <b>EI KUULU</b> nahisteluiden selvittäminen!
                        </p>
                    </li>
                    <li>
                        <p>
                            <span className={'tag ' + adminStyles['buildmod']}>Moderator</span> on arvo, johon pääset{' '}
                            <a href="yphaku" target="_blank">
                                hakemalla
                            </a>
                            . Heidän tehtävänä on pitää chat siistinä, suojata alueita, tarkistaa grieffit ja viedä ne eteenpäin, sekä
                            purkaa nahisteluita pelaajien välillä.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span className={'tag ' + adminStyles['operator']}>Operator</span> on moderaattorista seuraava ylläpitoarvo.
                            Tähän arvoon pääsee vain, mikäli muu ylläpito on vakuuttunut moderaattorin osaamisesta, aktiivisuudesta ja
                            motivaatiosta. Operaattorit siirtyvät vastuullisempiin hommiin (mm. grief, varastus, kotien palautus) kerätyn
                            luottamuksen ansiosta. He eivät kiinnitä huomiota niin paljon nahisteluun chatissa, vaikka tarpeen tullen voivat
                            ottaa ohjat ja antaa vinkkejä modeille. :)
                        </p>
                    </li>
                    <li>
                        <p>
                            <span className={'tag ' + adminStyles['admin']}>Admin</span> on seuraavaksi korkein ylläpitoarvo, jolla on
                            oikeudet tehdä käytännössä kaikkea, usein päätöksiin vaikuttaa muun ylläpidon mielipide. Tähän porukkaan kuuluu
                            sekalaista väkeä osaamisen kannalta. On kehittäjiä, on entisiä rakentajia, on tavallisia rivimiehiä. Adminit
                            tekevät eniten taustalla hommaa (mm. tapahtumien, pluginien, mapresettien yms. kanssa), mutta myös vaativimmat
                            tapaukset hoidetaan heidän kautta tarpeen mukaan.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span className={'tag ' + adminStyles['omistaja']}>Omistaja</span> rankin omaavat käytännössä pitävät palvelinta
                            pystyssä rahallisesti, sen lisäksi, että keksivät uusia ominaisuuksia ja tekevät viimeiset päätökset asioista
                            muuta ylläpitoa kuunnellen, myös siitä kuka ylläpitoon astuu ja kuka ylentyy. Tähän arvoon ei ole mahdollista
                            ylentyä.
                        </p>
                    </li>
                </ul>
            </p>
            <p className="lead">
                <em>Hyvät naiset ja herrat, palvelimen henkilökunta</em>
            </p>
            <Admininstration />
        </Layout>
    )
}

export default Yllapito
