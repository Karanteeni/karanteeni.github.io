import Link from 'next/link'
import React from 'react'
import AdminCard from '../components/admincard'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'
import operaattoris from '../data/operators.json'

const rankToMissingText = (rank) => {
    switch (rank) {
        case 'omistaja':
            return 'Sellout'
        case 'admin':
            return 'Olisikohan jostakin operaattorista tähän hommaan?'
        case 'operaattori':
            return 'Operaattoreita ei näkyvillä'
        case 'moderaattori':
            return 'Hmm.. moderaattoreistahan on pulaa! Haku ylläpitoon on aina auki!'
        case 'arkkitehti':
            return 'Damn, on taitu arkkitehty'
        case 'rakentaja':
            return 'Ei rakentajia? Kuka nyt rakentaa servun spawnit?'
    }
}

const Rank = ({ data, rank, active }) => {
    return (
        <div>
            <h3 className={`tag ${rank} minecraft`}>{rank}</h3>
            <div className="admin-card-wrapper">
                {data.length === 0 && <p>{rankToMissingText(rank)}</p>}
                <Card data={data} active={active} rank={rank} />
            </div>
        </div>
    )
}

const Card = ({ data, rank, active }) => {
    if (data.length >= 0) {
        return data.map((item, key) => <AdminCard {...item} rank={rank} key={key} active={active} />)
    }
    return;
}

const ActiveAdmininstration = () => {
    let [adminstrationData, _setAdminstrationData] = React.useState(operaattoris)
    let [adminstrationRanksArray, _setAdminstrationRanksArray] = React.useState(Object.keys(operaattoris))

    if (!adminstrationData || !adminstrationRanksArray) return null

    return (
        <div>
            {adminstrationRanksArray.map((rank) => (
                <Rank key={rank} rank={rank} active={true} data={adminstrationData[rank].filter((item) => item.active)} />
            ))}
        </div>
    )
}

const InActiveAdmininstration = () => {
    let [adminstrationData, _setAdminstrationData] = React.useState(operaattoris)
    let [adminstrationRanksArray, _setAdminstrationRanksArray] = React.useState(Object.keys(operaattoris))

    if (!adminstrationData || !adminstrationRanksArray) return null

    return (
        <div>
            <div className="admin-card-wrapper inactive">
                {adminstrationRanksArray.filter((rank) => adminstrationData[rank].some((item) => !item.active)).map((rank) => {
                    return (<Card key={rank} rank={rank} active={false} data={adminstrationData[rank].filter((item) => !item.active)} />)
                })}
            </div>
        </div>
    )
}

const Yllapito = () => {
    return (
        <Layout title="Ylläpito" className="yllapito" description="Karanteenin ylläpito summattuna">
            <Heading heading="Ylläpito" lead="Keitä ylläpitäjät ovat ja mitä he tekevät?" />
            <div className="yp-page-info">
                <p>
                    Käytännössä ylläpitäjät pitävät vapaaehtoisesti palvelinta pystyssä eri tavoin. Serverin ylläpitoa
                    varten meiltä löytyy kasa ylläpitoarvoja, jotta voimme jakaa työtehtäviä kokemuksen ja osaamisen,
                    sekä myöskin ajan mukaan. Ylentyminen on mahdollista, tosin Rakentajalla vain ensin
                    moderaattoriksi siirtymisen kautta. Listataan arvoja hieman ja kerrotaan mitä kukakin tekee!
                </p>

                <div>
                    <p>
                        <span className="tag moderaattori">Rakentaja</span>, meidän visuaalisten ja luovien ihmisten
                        arvo, johon voi päästä <Link href="/yphaku">hakemalla</Link>! Heidän tehtävä on rakentaa
                        palvelimen
                        <span data-toggle="tooltip" data-placement="top" title="Spawnit, hubit, erilaiset huoneet">
                            <b> päärakennukset</b>
                        </span>
                        . He ovat samalla viivalla moderaattoreiden kanssa ja toimivat valvontatehtävissä vain, mikäli palvelimella ei
                        ole muita ylläpitäjiä paikalla. Rakentajien tehtäviin <b>EI KUULU</b> nahisteluiden
                        selvittäminen!
                    </p>
                </div>
                <div>
                    <p>
                        <span className="tag rakentaja">Moderaattori</span> on arvo, johon voi päästä{' '}
                        <Link href="/yphaku">hakemalla</Link>. Heidän tehtävänsä on pitää chat siistinä, suojata alueita,
                        tarkistaa grieffit ja viedä ne eteenpäin, sekä purkaa nahisteluita pelaajien välillä.
                    </p>
                </div>
                <div>
                    <p>
                        <span className="tag operaattori">Operaattori</span> on moderaattorista seuraava ylläpitoarvo.
                        Tähän arvoon pääsee vain, mikäli muu ylläpito on vakuuttunut moderaattorin osaamisesta,
                        aktiivisuudesta ja motivaatiosta. Operaattorit siirtyvät vastuullisempiin hommiin (mm. grief,
                        varastus, kotien palautus, tapahtumasuunnittelu) kerätyn luottamuksen ansiosta. He eivät kiinnitä huomiota niin paljon
                        nahisteluun chatissa, vaikka tarpeen tullen voivat ottaa ohjat ja antaa vinkkejä modeille. :)
                    </p>
                </div>
                <div>
                    <p>
                        <span className="tag arkkitehti">Arkkitehti</span> on rakentajasta seuraava ylläpitoarvo, johon
                        voi päästä ainoastaan jos muu ylläpito on vakuuttanut rakentajan osaamisesta, aktiivisuudesta,
                        ja motivaatiosta. Arkkitehdin vastuualue on kuin rakentajan ja adminin välissä, tarkoittaen uusia
                        oikeuksia maailmojen hallintaan. Toisin kuin adminilla, arkkitehdin vastuulla ei kuitenkaan ole
                        niinkään paljon auttaa pelaajia, vaikka voivatkin sitä tehdä mikäli muuta ylläpitoa ei ole paikalla.
                    </p>
                </div>
                <div>
                    <p>
                        <span className="tag admin">Admin</span> on seuraavaksi korkein ylläpitoarvo, jolla on oikeudet
                        tehdä käytännössä kaikkea, usein päätöksiin vaikuttaa muun ylläpidon mielipide. Tähän porukkaan
                        kuuluu sekalaista väkeä osaamisen kannalta. On kehittäjiä, on entisiä rakentajia, on tavallisia
                        rivimiehiä. Adminit tekevät eniten taustalla hommaa (mm. tapahtumien, pluginien, mapresettien
                        yms. kanssa), mutta myös vaativimmat tapaukset hoidetaan heidän kautta tarpeen mukaan.
                    </p>
                </div>
                <div>
                    <p>
                        <span className="tag omistaja">Omistaja</span> rankin omaavat käytännössä pitävät palvelinta
                        pystyssä rahallisesti, sen lisäksi, että keksivät uusia ominaisuuksia ja tekevät viimeiset
                        päätökset asioista muuta ylläpitoa kuunnellen, myös siitä kuka ylläpitoon astuu ja kuka ylentyy.
                        Tähän arvoon ei ole mahdollista ylentyä.
                    </p>
                </div>
            </div>
            <p className="lead">
                <em>Saanen esitellä: palvelimen henkilökunta</em>
            </p>
            <ActiveAdmininstration />
            {
                (Object.values(operaattoris).some((rank) => rank.some((item) => !item.active))) ?
                    (<div>
                        <h3 className="lead extra-margin text-centered">
                            <em>Tällä hetkellä epäaktiiviset ylläpitäjät</em>
                        </h3>
                    </div>) : null
            }
            <InActiveAdmininstration />
        </Layout>
    )
}

export default Yllapito
