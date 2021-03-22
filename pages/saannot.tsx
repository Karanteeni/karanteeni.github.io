import React from 'react'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'

import { faTimes, faExclamation, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Tooltip = (props) => {
    const workstations =
        'Bed, Lectern, Composter, Grindstone, Blast Furnace, Smoker, Fletching Table, Cartography Table, Brewing Stand, Smithing Table, ' +
        'Barrel, Loom, Stonecutter'

    const work = props.work

    if (work) {
        return (
            <span data-toggle="tooltip" data-placement="top" title={workstations}>
                {props.children}
            </span>
        )
    }
}

const RuleContainer = (props) => {
    return <div className="rule-container">{props.children}</div>
}

const Rule = (props) => {
    return <div className="rule">{props.children}</div>
}

const RuleHeading = (props) => {
    return (
        <div className="rule-head">
            <h3 className="rule-heading">{props.children}</h3>
        </div>
    )
}

const Content = (props) => {
    return <div className="rule-content">{props.children}</div>
}

const Description = (props) => {
    return (
        <div className="rule-specify">
            <p className="rule-specifier">{props.children}</p>
        </div>
    )
}

const Icon = (props) => {
    switch (props.icon) {
        case 'denied': {
            return (
                <div className="rule-icon-parent">
                    <div className="rule-icon denied">
                        <FontAwesomeIcon className="icon" icon={faTimes} />
                    </div>
                </div>
            )
        }
        case 'notice': {
            return (
                <div className="rule-icon-parent">
                    <div className="rule-icon notice">
                        <FontAwesomeIcon className="icon" icon={faExclamation} />
                    </div>
                </div>
            )
        }
        case 'allowed': {
            return (
                <div className="rule-icon-parent">
                    <div className="rule-icon accepted">
                        <FontAwesomeIcon className="icon" icon={faCheck} />
                    </div>
                </div>
            )
        }
        case 'important': {
            return (
                <div className="rule-icon-parent">
                    <div className="rule-icon keep-in-mind">
                        <FontAwesomeIcon className="icon" icon={faExclamation} />
                    </div>
                </div>
            )
        }
        default: {
            throw new Error('did not receive icon type')
        }
    }
}

const CommonRules = (props) => {
    return (
        <React.Fragment>
            <RuleContainer>
                <Rule>
                    <Icon icon="denied" />
                    <Content>
                        <RuleHeading>Hack-clientit ovat kiellettyjä</RuleHeading>
                        <Description>Huijausohjelmien (esim. Xray) käyttäminen on kiellettyä.</Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="denied" />
                    <Content>
                        <RuleHeading>Bugien hyväksikäyttö on kiellettyä</RuleHeading>
                        <Description>
                            Bugien tai palvelinvirheiden hyväksikäyttö on ankarasti kiellettyä. Mikäli löydät peliä rikkovan bugin tai
                            virheen, voidaan sinua palkita peliajalla.
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="denied" />
                    <Content>
                        <RuleHeading>Modit ovat kiellettyjä</RuleHeading>
                        <Description>Pelin etenemistä edistävien modien käyttäminen (esim. schematica) on kiellettyä.</Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="notice" />
                    <Content>
                        <RuleHeading>TNT-monistajat ovat osittain sallittuja</RuleHeading>
                        <Description>
                            TNT-duplikaattoreita voi käyttää hyödyksi farmaamisessa. Kuitenkin muu käyttö on yhä toistaiseksi kielletty.
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="allowed" />
                    <Content>
                        <RuleHeading>OptiFine &amp; Sodium</RuleHeading>
                        <Description>OptiFinen ja Sodiumin kaltaiset suoritustehoa parantavat modit ovat sallittuja.</Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="denied" />
                    <Content>
                        <RuleHeading>Asiattoman skinin tai käyttäjänimen käyttäminen on kiellettyä</RuleHeading>
                        <Description>
                            Jos nimesi tai skinisi on rasistinen, alatyylinen, loukkaava, tai muuten asiaton, sinua pyydetään vaihtamaan se.
                            Muuten käyttäjäsi bannitaan skinin tai nimen vaihdon ajaksi.
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="denied" />
                    <Content>
                        <RuleHeading>Alt-accounttien hyväksikäyttäminen kielletty</RuleHeading>
                        <Description>
                            Et saa käyttää alt-accountteja pääkäyttäjän edun hyväksi (esimerkiksi rahan siirtämistä, tai rankkien
                            ominaisuuksien jakamista).
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="denied" />
                    <Content>
                        <RuleHeading>Afkaaminen kielletty</RuleHeading>
                        <Description>
                            Palvelimella afkaaminen on kielletty. Afkikoneiden rakentaminen tästä syystä myös ankarasti kielletty.
                            Mobifarmeilla afkaaminen keräten mobeja on myös kiellettyä. Kuitenkin automaattiset mobifarmit on sallittuja,
                            kunhan entiteettejä ei keräänny liikaa aiheuttaakseen lagia.
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="denied" />
                    <Content>
                        <RuleHeading>Palvelimen lagittaminen kielletty</RuleHeading>
                        <Description>
                            Palvelinta rasittavien ja lagittavien redstonerakennelmien teko on kielletty (esim. loputtomiin käyvät kellot,
                            0-tick farmit). Lisää rakennelmaan sulkemisvipu ja pidä laite suljettuna, jos se ei ole käytössä. Palvelimen
                            lagittamiseen kuuluu myös entiteetit (hostile mobit, lemmikit, kyläläiset).
                            <strong>
                                &nbsp;Ylläpidolla on oikeus tappaa suojauksestasi eläimiä, mikäli ne kuormittavat palvelinta.
                            </strong>{' '}
                            Tämän lisäksi teleporttailu matrixin ulkopuolelle (esimerkiksi koordinaatit yli Endin ja Netherin
                            generointirajan, sekä mapin ulkopuolelle jonka rajat ovat +-10k) on kiellettyä. Palvelimen tahallisesta
                            lagittamisesta seuraa aina ikuinen porttikielto.
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="denied" />
                    <Content>
                        <RuleHeading>Ansaitun rankin hyväksikäyttäminen kielletty</RuleHeading>
                        <Description>
                            Sinua alempirankkiset pelaajat eivät saa hyötyä rankkisi ominaisuuksista. Et saa esimerkiksi muuntaa spawnerin
                            tyyppiä toisten puolesta, tai myydä spawnereita, joihin pelaajalla ei ole vielä oikeutta.
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="notice" />
                    <Content>
                        <RuleHeading>Olet velvoitettu ilmoittamaan rikkeestä</RuleHeading>
                        <Description>
                            Jos havaitset sääntöjen rikkomista, välitä tieto välittömästi ylläpidolle. Pyri hankkimaan todisteita, kuten
                            screenshotteja tai videoita.
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>
        </React.Fragment>
    )
}

const ChatRules = (props) => {
    return (
        <React.Fragment>
            <RuleContainer>
                <Rule>
                    <Icon icon="important" />
                    <Content>
                        <RuleHeading>Pidetään keskustelut asiallisena</RuleHeading>
                        <Description>
                            Muista, että keskustelet oikeiden ihmisten kanssa. Pyritään olemaan mahdollisimman ystävällisiä toisillemme.
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="important" />
                    <Content>
                        <RuleHeading>Pidetään kieli kurissa</RuleHeading>
                        <Description>
                            Turha kiroilu ja toisten pelaajien härnäminen tai kiusaaminen ei ole asianmukaista. Ollaanhan ihmisiksi.
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="important" />
                    <Content>
                        <RuleHeading>Pidetään chatti siistinä</RuleHeading>
                        <Description>Turha spammaaminen, floodaaminen, ja CAPSILLA KIRJOITTAMINEN on kiellettyä.</Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="denied" />
                    <Content>
                        <RuleHeading>Mainostaminen on kiellettyä</RuleHeading>
                        <Description>
                            Älä mainosta (varsinkaan toisia palvelimia). Tämä ei kuitenkaan tarkoita sitä ettetkö saisi kertoa minkä
                            merkkinen hiiri tai auto sinulla on, mutta siinä se raja sitten kulkeekin.
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>
        </React.Fragment>
    )
}

const AdditionalRules = (props) => {
    return (
        <React.Fragment>
            <RuleContainer>
                <Rule>
                    <Icon icon="denied" />
                    <Content>
                        <RuleHeading>Grieffaaminen on kielletty</RuleHeading>
                        <Description>
                            Toisten pelaajien rakennelmien tuhoaminen ja omaisuuden varastaminen on kielletty. Mikäli tielläsi on rakennus,
                            pyydä ylläpitoa rikkomaan tai siirtämään sitä.
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="denied" />
                    <Content>
                        <RuleHeading>Pelaajien vedättäminen, skämmääminen on kiellettyä</RuleHeading>
                        <Description>Et saa esimerkiksi huijata toiselta tavaraa.</Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="denied" />
                    <Content>
                        <RuleHeading>Maisemagrieffaaminen kielletty</RuleHeading>
                        <Description>
                            Maaston ja maiseman turmeleminen on kiellettyä. Puut on kasvatettava takaisin, hiekan hakkuu ei saa jättää rumia
                            jälkiä ympäristöön, turhien epäesteettisten rakennelmien rakentaminen on kielletty (esim. 1x1 dirt tornit).
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="notice" />
                    <Content>
                        <RuleHeading>Villager kylät ovat rauhoitettuja</RuleHeading>
                        <Description>
                            Villager kyliä ei saa grieffata. Kylistä ei saa viedä sänkyjä tai{' '}
                            <Tooltip work>
                                <strong>workstationeja.</strong>
                            </Tooltip>{' '}
                            Kylien peltoja saa käyttää, kunhan ne muistaa täyttää takaisin. Kylien heinäpaalut, sekä kellot saa ottaa
                            itselleen. Kylän voi ottaa kodikseen, jolloin kyliä koskevat säännöt eivät enää päde.
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="denied" />
                    <Content>
                        <RuleHeading>Pelaajien tappaminen ja pelaaja-ansojen rakentaminen kielletty</RuleHeading>
                        <Description>
                            Et saa aiheuttaa vahinkoa toisiin pelaajiin. Rakennelmat, jotka voivat tappaa pelaajan, ovat ankarasti
                            kiellettyjä.
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="notice" />
                    <Content>
                        <RuleHeading>Karanteeni on poliittisesti neutraali palvelin</RuleHeading>
                        <Description>
                            Tämä tarkoittaa sitä, että chatissa ja palvelimella pyritään välttämään poliittisia aatteita, symboleita tai
                            ideologioita. Myös yleistä keskustelua politiikasta pyritään välttämään, koska se yleensä aiheuttaa väittelyitä
                            ja eripuraa.
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>
        </React.Fragment>
    )
}

const PlayerTownRules = (props) => {
    return (
        <React.Fragment>
            <RuleContainer>
                <Rule>
                    <Icon icon="notice" />
                    <Content>
                        <RuleHeading>Kylän mainostaminen julkisesti</RuleHeading>
                        <Description>
                            Kylien mainostus on sallittua, mutta jos pelaajat antavat siitä palautetta, täytyy siinä hommassa rauhoittua.
                            Pyynnön ohittamisesta seuraa varoitus. Pyyntöä ei kuitenkaan saa tehdä syyttä, kaikilla on oltava mahdollisuus
                            saada pelaajia kyläänsä.
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="denied" />
                    <Content>
                        <RuleHeading>Kylän mainostaminen yksityisesti</RuleHeading>
                        <Description>
                            Kylien mainostus yksityisviestillä on kiellettyä. Tällä vältämme sen, että joku kokee mainostuksen hyökkäävänä.
                            Kyliä saa mainostaa julkisesti pitäen sen rajoissa. (Kts. yllä)
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="denied" />
                    <Content>
                        <RuleHeading>Copy &amp; Paste viestit ovat kiellettyjä</RuleHeading>
                        <Description>
                            Copy Paste eli niin sanottu massapostaus on kiellettyä. Kukaan ei jaksa nähdä joka viides minuutti täysin samaa
                            viestiä kylästäsi ja siitä mitä palveluita siellä on. Kokeile sen sijaan mainostaa kylääsi ystävällisesti ja
                            henkilökohtaisesti. Jos joku tarvitsee xp-farmia ja kylässäsi on sellainen, mainitse se ihmeessä.
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="important" />
                    <Content>
                        <RuleHeading>Mainosta kylääsi spawnilla!</RuleHeading>
                        <Description>
                            Jomelle voi yksityisviestillä laittaa 256x128 resoluutioisen kuvan, jossa mainostat omaa kylääsi. Se laitetaan
                            spawnille. Kylällä <u>on oltava warp</u>, jotta mainoksesi laitetaan näkyviin!
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="allowed" />
                    <Content>
                        <RuleHeading>Xp-farmit ja /spawner</RuleHeading>
                        <Description>
                            Kyliin on mahdollista muuttaa spesifi spawner, mutta spawner täytyy palauttaa tai myydä alkuperäisessä mobissa
                            takaisin.
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="notice" />
                    <Content>
                        <RuleHeading>Kylästä häätäminen</RuleHeading>
                        <Description>
                            Kylän omistaja(t) voi(vat) häätää pelaajan sääntörikkomuksen seurauksena. Mikäli kylästä häädetään henkilö,
                            tulee hänen tavaransa palauttaa. Mikäli henkilö poistetaan kylästä ilman, että tavaroita palautetaan
                            asianmukaisessa ajassa, on häätäjä rikkonut serverin sääntöjä (varastaminen).
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="important" />
                    <Content>
                        <RuleHeading>Rakennusten purkaminen</RuleHeading>
                        <Description>
                            Kylän omistajilla on oikeus purkaa rakennuksia{' '}
                            <u>
                                <strong>kylänsä alueelta</strong>
                            </u>
                            , antaen asukkaille asianmukaisessa ajassa ennen sitä ilmoituksen rakennusten purkamisesta (n. viikko). Mikäli
                            puretaan serverillä pelaamisen lopettaneen pelaajan talo, tulee hänen tavaransa siirtää talteen nimettyihin
                            arkkuihin, jotta ne voidaan palauttaa hänelle hänen palatessa servulle. Mikäli talo on pelaajan rakentama, tulee
                            myös taloon käytetyt materiaalit palauttaa.
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="important" />
                    <Content>
                        <RuleHeading>Maksut / verotus</RuleHeading>
                        <Description>
                            Kylät voivat vaatia maksua pelaajilta, uhkauksena kylästä häätö. Pelaajilla ei ole kuitenkaan pakotetta maksaa
                            maksuja, eikä heiltä oleteta sitä. Mikäli maksun saanut henkilö ei ole kylän asukas saadessaan maksun, ei
                            hänellä ole velvoitetta maksaa sitä. Kuitenkin kylän omistaja(t) voi(vat) evätä häneltä kylään pääsyn jatkossa.
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>

            <RuleContainer>
                <Rule>
                    <Icon icon="denied" />
                    <Content>
                        <RuleHeading>Asumattomien asukkaiden lisääminen on kiellettyä</RuleHeading>
                        <Description>
                            Asukkaiden lisääminen, jotka eivät tule asumaan kylässä on ankarasti kiellettyä. Tätä perustellaan sillä, että
                            kylät eivät näytä isommilta, eivätkä pienet kylät saa warppia huijaamalla.
                        </Description>
                    </Content>
                </Rule>
            </RuleContainer>
        </React.Fragment>
    )
}

const Saannot = () => {
    return (
        <Layout title="Säännöt" description="Karanteenin säännöt. Lue nämä ennen pelaamisen aloittamista.">
            <Heading heading="Karanteenin Säännöt" lead="Lue nämä huolella. Tietämättömyys ei ole syy hölmöilyyn!" />
            <div className="rules-introduction">
                <p className="rules-common-p">
                    Karanteenissa pääsee pitkälle jo pelkällä maalaisjärjellä, mutta palvelimelle on kuitenkin asetettu säännöt, joiden
                    puitteissa toimitaan.
                </p>
                <p className="rules-common-p">
                    Huomioi, että vaikka säännöissä ei välttämättä suoraan kiellettäisi jotain skenaariota, voi se silti olla rangaistavaa.{' '}
                </p>
                <p className="rules-common-p">Jos olet epävarma jostakin, pyydä ylläpitoa selventämään.</p>
            </div>
            <h2>Palvelimen laajuiset säännöt</h2>
            <CommonRules />
            <h2>Yleiset käytössäännöt</h2>
            <ChatRules />
            <h2>Survivalin lisäsäännöt</h2>
            <AdditionalRules />
            <h2>Pelaajakylien täsmennyssäännöt</h2>
            <PlayerTownRules />

            <div className="rules-epilogue">
                <p className="rules-common-p">
                    Sääntöjen rikkomisesta tulee aina seuraamuksia. Rikkeen vakavuuden mukaan voidaan pelaajalle antaa varoituksia,
                    väliaikaiset bannit tai ikuiset bannit.
                </p>
                <p className="rules-common-p">Kolmesta varoituksesta pelaaja saa automaattiset kahden viikon bannit.</p>
                <p className="rules-common-p">Varoitus säilyy pelaajalla 180 päivää, jonka jälkeen se vanhenee.</p>
                <p className="rules-common-p">
                    Huomioi, että vaikka säännöissä ei välttämättä suoraan kiellettäisi jotain skenaariota, voi se silti olla rangaistavaa.{' '}
                </p>
            </div>
        </Layout>
    )
}

export default Saannot
