import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'

const Unban = () => {
    return (
        <Layout title="Unban-hakemus" description="Tällä sivulla voit anoa unbanneja palvelimelle, tai discordiin.">
            <Heading
                heading="Unban-hakemus"
                lead="Onko iskenyt katumapäälle, taiko sattunut hirveä väärinkäsitys? Lue sivu läpi niin ehkä asiaan voidaan vaikuttaa."
            />

            <p>
                Voit anoa unbanneja Karanteenin minecraft palvelimelle tai Discordiin. Kaikki hakemukset jaetaan ylläpidolle, mutta ei
                muille pelaajille.
            </p>
            <h4>Lähestyttäessä unban-hakemuksen lähettämistä</h4>
            <p>Ennen hakemuksen lähettämistä huomioi seuraavat asiat:</p>
            <ul>
                <li>Hakemusta lähettäessä pyri keräämään kaikki banneja koskeva tarpeellinen tieto etukäteen.</li>

                <li>
                    Pyri toimimaan neutraalisti. Vihapäisesti tai vähättelevästi kirjoitetut hakemukset eivät ole vakuuttavia. Tarkastele
                    tilannetta järkevästi.
                </li>
                <li>Tarkastele hakemusta ajatuksella. Väärin tai epäselvästi täytetyt hakemukset vaikeuttavat hakemuksen käsittelyä.</li>
                <li>Jos banneja on jäljellä alle viikko, unban hakemusta ei tulla käsittelemään.</li>
            </ul>

            <h4>Lähetä hakemus</h4>
            <p>
                Pääset kirjoittamaan unbanhakemuksen <a href="https://forms.gle/3Mpcbxx1Axxxh1R6A">täällä</a>. Hakemuksesi käsitellään
                mahdollisimman pian.
            </p>
        </Layout>
    )
}

export default Unban
