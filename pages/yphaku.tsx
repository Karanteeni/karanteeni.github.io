import Link from 'next/link'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'

const Yphaku = () => {
    return (
        <Layout title="Ylläpitohaku" description="Hae ylläpitäjäksi Karanteeniin. Otamme hakemuksia aina vastaan!">
            <Heading
                heading="Hae ylläpitoon!"
                lead="Haemme aktiivisia pelaajia ylläpitoon auttamaan palvelimen kehittämisessä!"
            >
                <p style={{ marginTop: '1rem' }} className="lead pt-2">
                    Luethan ensin mihin arvoihin olet hakemassa ja mitä vaatimuksia niihin vaaditaan!
                </p>
            </Heading>

            <h3>Moderaattori</h3>
            <p>
                Moderaattoriksi pyrkiessä <b>pelikokemus ja aktiivisuus</b> palvelimella on tärkeää. Siksi{' '}
                <b>minimivaatimukseksi</b> on asetettu, että pelaajalla on viisi päivää peliaikaa, eli arvoltaan
                vähintään parantuva. Tällä edesautamme sitä, että ylläpitoon hakeva pelaaja on perillä palvelimen
                toimintatavoista, sekä tullut myös muille pelaajille tutuksi. Parantuvan arvo ei kuitenkaan itsessään
                riitä ainoaksi kriteeriksi ylläpitoon, ja kaikki hakemukset arvioidaan hakemuksen ja aiemman saadun
                kuvan perusteella. Ikäsuositukseksi on asetettu 15 vuotta (suositus: voidaan poiketa joissain
                tapauksissa).
            </p>
            <p>
                Rikkeet palvelimella <em>eivät välttämättä</em> pilaa mahdollisuuksiasi päästä ylläpitoon. Kuitenkin
                rikkeet merkkaavat ja kertovat pelaajasta jonkin verran. Rangaistushistoriassa eniten painavat
                aktiiviset varoitukset ja viimeisimmät porttikiellot (erityisesti käyttäytymisen kohdalla).
            </p>
            <p>
                Aiempaa kokemusta ei vaadita (sen sijaan kuitenkin motivaatio oppimiseen ja ylläpitämiseen täytyy olla
                kohdillaan), eikä erikoisominaisuuksia niinkään haeta. Plussaa silti saa molemmista, mikäli niitä omaa..
            </p>
            <p>
                Pääsääntöisesti Moderaattorin tehtäviin kuuluu chatin valvominen, alueiden suojaaminen ja yleinen
                pelaajien auttaminen. Omalla käytökselläsi ja vastuuntunnolla pääset helposti pitkälle.
            </p>
            <h3>Rakentaja</h3>
            <p>
                Rakentajalta vaaditaan lähes samoja asioita kuin Moderaattorilla, vaikka chatin valvominen ei heidän
                ensisijaisiin tarpeisiin kuulukaan. Tämä johtuu siitä, että Rakentajilla on mahdollisuus poistaa
                häiriköijät palvelimelta, mikäli muuta ylläpitoa ei ole paikalla. Rakentajien pääsääntöinen mittari on
                rakennustaidot ja mielikuvitus.
                <b> Minimivaatimuksina peliaika Parantuva (5d)</b>, ikäsuositus 15, sekä yleinen aktiivisuus
                palvelimella.
            </p>
            <p>
                Rakentajien hakemuksessa kysytään kuvia rakennuksistasi. Kuvat tahdotaan
                <em>
                    <b> ilman shadereita ja käyttäen default-resurssipakettia</b>
                </em>
                .
            </p>
            <p>
                Rakentajan tehtäviin kuuluu ympäristön luonti, joko rakentamalla rakennuksia tai muokkaamalla maastoa.
                Rakentajat vastaavat juhlapaikkojen sekä uusien spawnien rakentamisesta.
            </p>
            <h2>Ylläpitoon hakeminen</h2>
            <p>
                Pelaajan täytyy täyttää ylläolevat vaatimukset ollakseen valmis hakemaan ylläpitoon, joko
                <b> moderaattoriksi</b> tai <b>rakentajaksi</b>. Hakemus on Google Formsilla tehty kyselylomake.
                Hakemuksessa kysytään seuraavat asiat:
            </p>
            <ul>
                <li>Pelinimi</li>
                <li>Peliaika + rankki palvelimella</li>
                <li>Mahdollinen aiempi ylläpitokokemus tai muut liittyvät luottamustehtävät, jos on</li>
                <li>Mahdolliset aiemmat rangaistukset palvelimella tai Discordissa (jos on ollut)</li>
                <li>Ikäsi</li>
                <li>Discord (vaadittu)</li>
                <li>Arvo johon haet (Moderaattori / Rakentaja)</li>
                <li>Ja tietysti hyviä syitä miksi juuri sinä haluaisit olla, ja olisit sopiva ylläpitäjä :3</li>
            </ul>
            <p>
                Hakemuksen viimeinen osio on olla tekstilaatikko, johon tahdomme sinun kertovan hieman <b>itsestäsi.</b>
            </p>
            <p>
                Mikäli osoitat olevasi ylläpitoarvon sekä <Link href="yllapito">ylläpitokortin</Link> arvoinen, olet
                tervetullut joukkoomme. Ylläpidossa on rento meininki, eikä kaikkea tarvitse ottaa vakavasti, vaikka
                kuria pitää ollakin. Nauraa saa, itkeäkin korkeintaan silloin kun servu kaatuu. :D
            </p>
            <p>
                Kerro itsestäsi selvästi ja luettavasti! Vaikka peliaika ja pelaaja-arvo voidaankin tarkistaa
                rangaistusten kanssa jälkeenpäin, annat hakemuksessa meille itsestäsi paremman mielikuvan pelaajana.
                Aktiivisuutesi sen sijaan palauttaa taas mahdollisia muistikuvia sinusta palvelimella.
            </p>
            <h2>Arviointiprosessi</h2>
            <p>
                Hakemuksia arvioidaan <b>noin viikon verran</b>, rakentajien tapauksessa myös rakennuksia ja
                rakennustaitoja. <b>Kun hakemuksesi hyväksytään, siitä ilmoitetaan Discordin kautta. Mikäli ilmoitusta ei
                tule, on hakemuksesi luultavasti hylätty</b>. Voit halutessasi kysyä ylläpidolta hakemuksen tilannetta jos
                mietityttää. Mikäli hakija ei täytä "vaatimuksia", voidaan se hylätä <b>automaattisesti</b>.
            </p>
            <h2>Lopputeksti</h2>
            <p>
                Mikäli koet olevasi sopiva henkilö, voit aloittaa hakemisen{' '}
                <a rel="noreferrer" target="_blank" href="https://forms.gle/GD2oDHwzkzeW6LHo9">
                    tästä
                </a>
                . Kiitämme etukäteen kaikista lähetetyistä hakemuksista ja toivotamme onnea matkaan. :)
            </p>
        </Layout>
    )
}

export default Yphaku
