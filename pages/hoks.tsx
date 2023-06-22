import Link from 'next/link'
import React from 'react'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'

const Hoks = () => {
    return (
        <Layout
            title="Hyvä tietää"
            description="Karanteeni on vuodesta 2016 asti toiminut suomalainen Minecraft palvelin. Karanteenin alkuperäiset perustajat ovat Emmazki, Jomeee ja
            Nuubles, joista Jomeee ja Nuubles ovat vielä aktiivisina pyörimässä. Palvelimella keskeisin pelimuoto on omilla ominaisuuksilla paranneltu Survival.
            Palvelimelle on palaamassa Creative ja erinäköiset minipelit."
        >
            <Heading heading="Hyvä tietää!" lead="Karanteeni tiivistettynä" />
            <p>
                Karanteeni on vuodesta 2016 asti toiminut suomalainen Minecraft-palvelin. Karanteenin alkuperäiset
                perustajat ovat Emmazki, Jomeee ja Nuubles, joista Jomeee ja Nuubles ovat vielä aktiivisina pyörimässä.
                Palvelimella keskeisin pelimuoto on omilla ominaisuuksilla paranneltu Survival, mutta monelle tuttu
                Creative on myös pelattavissa. Tulevaisuudessa myös erilaiset minipelit tekevät paluun serverille.
            </p>
            <p>
                Palvelimen toimintaidea on se, että mitä pidempään pelaat serverillä, sitä parempia ominaisuuksia avaat
                käyttöösi. Peliajalla kerättävistä ominaisuuksista voi lukea lisää{' '}
                <Link href="/rankit">rankit-sivulta</Link>. Muista Karanteenin ominaisuuksista voi lukea{' '}
                <Link href="ominaisuudet">ominaisuudet sivulla</Link>.
            </p>
            <p>
                Palvelimella järjestetään vuosittain erilaisia tapahtumia (esim. joulujuhlat, synttäribileet ja pääsiäisjuhlat).
                Vakituisten juhlien lisäksi pyöritämme satunnaisesti UHC-pelejä, joiden voittamisesta saa harvinaisen partikkelin.
                Survival resetoidaan noin puolen vuoden välein, jota ennen aina pelaajien annetaan räjäyttää
                vanha mappi uuden tieltä.
            </p>
            <p>
                Palvelin on täysin omakustanteinen, eli lahjoitusten ja ylläpitäjien varassa. Lahjoitukset käytetään
                täysin palvelimen ylläpitoon.
            </p>

            <h3>Muita pointteja</h3>
            <ul>
                <li>
                    Karanteenissa valuuttana toimii pennit (❂). Pennejä voi ansaita äänestämällä Karanteenia{' '}
                    <code>/vote</code> ja käymällä kauppaa toisten pelaajien kanssa.
                </li>
                <li>
                    Karanteenissa ylläpito suojaa alueesi. Pyydäthän ylläpitoa suojausta, niin vältytään turhilta grief-tapauksilta.
                </li>
                <li>
                    Kaikki viestit ja komennot joita laitetaan palvelimella, ovat ylläpidon nähtävissä turvallisuussyistä.
                </li>
            </ul>
        </Layout>
    )
}

export default Hoks
