import React from 'react'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'

const Hoks = () => {
    return (
        <Layout
            title="Hyvä tietää"
            description="Karanteeni on vuodesta 2016 asti toiminut Minecraft-palvelin, jonka on perustanut Emmazki, Jomeee ja Nuubles. Palvelimella
        pyörii keskimäärin 15-20 pelaajaa joka päivä. Tällä hetkellä palvelimella pyörii vain Survival maailma, mutta Creative on
        palaamassa ajan mittaan."
        >
            <Heading heading="Hyvä tietää!" />
            <h3>Pieni palvelintiivistelmä</h3>
            <p>
                Karanteeni on vuodesta 2016 asti toiminut Minecraft-palvelin, jonka on perustanut Emmazki, Jomeee ja Nuubles. Palvelimella
                pyörii keskimäärin 15-20 pelaajaa joka päivä. Tällä hetkellä palvelimella pyörii vain Survival maailma, mutta Creative on
                palaamassa ajan mittaan.
            </p>
            <p>
                Palvelimen toimintaidea on se, että mitä pidempään pelaat serverillä, sitä parempia ominaisuuksia saat käyttöösi. Peliajalla
                kerättävistä ominaisuuksista voi lukea lisää <a href="/rankit">täällä</a>.
            </p>
            <p>
                Muita Karanteenille ominaisia ominaisuuksia voit ihmetellä <a href="ominaisuudet">ominaisuudet</a> sivulla.
            </p>
            <p>
                Palvelin on täysin omakustanteinen. Halutessasi voit kuitenkin tukea toimintaa lahjoittamalla. Lahjoittajat kuitenkin saavat
                itselleen pieniä kivoja ominaisuuksia. Lahjoittamisesta voi lukea lisää <a href="/lahjoitus">täällä</a>.
            </p>

            <h3>Pointteja joilla parantaa pelikokemusta!</h3>
            <ul>
                <li>Karanteenissa voit tällä hetkellä pelata Survivalia, Creative on palaamassa ajan myötä.</li>
                <li>
                    Rahavaluuttana toimii pennit (❂). Voit ansaita rahaa käymällä kauppaa toisten pelaajien kanssa, tai äänestämällä
                    Karanteenia <code>/vote</code>.
                </li>
                <li>Karanteenissa ylläpito suojaa alueesi. Pyydä suojaustak niin alueesi suojataan.</li>
            </ul>
        </Layout>
    )
}

export default Hoks
