import React, { useState } from 'react'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'

const Month = (props) => {
    const showing = props.month === props.showingMonth
    return (
        <div className="card bg-transparent border-gold">
            <div className="card-header" id={props.month + '_1'}>
                <h4>
                    <button
                        type="button"
                        data-toggle="collapse"
                        data-target={'#' + props.month}
                        aria-expanded="false"
                        aria-controls={props.month}
                        onClick={(e) => props.updateShowing(showing ? 'null' : props.month)}
                    >
                        {props.btntext}
                    </button>
                </h4>
            </div>
            <div
                id={props.month}
                className={'collapse ' + (showing ? 'show' : '')}
                aria-labelledby={props.month + '_1'}
                data-parent="#muutokset"
            >
                <div className="card-body">{props.children}</div>
            </div>
        </div>
    )
}

const Change = (props) => {
    return <li>{props.children}</li>
}

const Changelog = (props) => {
    const [showingMonth, setShowingMonth] = useState('tammikuu2021')
    const updateShowing = (val) => {
        setShowingMonth(val)
    }
    return (
        <div>
            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="tammikuu2021" btntext="Tammikuu 2021">
                <p>21.1.2021</p>
                <ul>
                    <Change>Lisätty mail komennot</Change>
                </ul>
                <p>13.1.2021</p>
                <ul>
                    <Change>
                        Lisätty{' '}
                        <a href="http://map.karanteeni.net" target="_blank">
                            dynmap
                        </a>{' '}
                    </Change>
                </ul>
                <p>8.1.2021</p>
                <ul>
                    <Change>
                        Uusi <a href="/ominaisuudet">ominaisuudet</a> sivu
                    </Change>
                </ul>
                <p>1.1.2021</p>
                <ul>
                    <Change>Unbanneja voi nyt hakea nettisivuilta! https://karanteeni.net/unban</Change>
                </ul>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="joulukuu2020" btntext="Joulukuu 2020">
                <p>31.12.2020</p>
                <ul>
                    <Change>Lisätty hidden groupit. Mahdollistavat lisärankit muuttamatta pelaajan päärankkia.</Change>
                    <Change>Lisätty lahjoittajille tabiin oranssit [] merkit.</Change>
                </ul>
                <p>27.12.2020</p>
                <ul>
                    <Change>Palvelin osaa tulkita kirjoitetut komennot, jotka on alkavat / sijasta 7 merkillä.</Change>
                </ul>
                <p>19.12.2020</p>
                <ul>
                    <Change>Lisätty resepti nametagille</Change>
                </ul>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="marraskuu2020" btntext="Marraskuu 2020">
                <p>27.11.2020</p>
                <ul>
                    <Change>Vähennetty mobien määrää per pelaaja 28 -&gt; 24.</Change>
                </ul>
                <p>25.11.2020</p>
                <ul>
                    <Change>Lisätty respawniin tuki respawn anchoreille, ei joudu enää spawnille kun respawnaa.</Change>
                </ul>
                <p>22.11.2020</p>
                <ul>
                    <Change>Lisätty kaksi (2) automaattista uudelleenkäynnistystä.</Change>
                </ul>
                <p>17.11.2020</p>
                <ul>
                    <Change>Lisätty vinkkeihin lyhyt ohje mitä tehdä, jos joku häiriköi</Change>
                </ul>
                <p>14.11.2020</p>
                <ul>
                    <Change>
                        Poistettu <code>/lakanakana</code>.
                    </Change>
                    <Change>
                        Lisätty <code>/iita</code>.
                    </Change>
                    <Change>
                        <code>/tptoggle</code> toimii oletettavasti. Ylempirankkiset eivät enää yliaja, vaan heitä kohdellaan
                        tasavertaisesti.
                    </Change>
                    <Change>Potentiaalinen palvelinvirhe korjattu.</Change>
                </ul>
                <p>9.11.2020</p>
                <ul>
                    <Change>Mobien spawnratea on pienennetty.</Change>
                </ul>
                <p>8.11.2020</p>
                <ul>
                    <Change>
                        Palautettu discordin minecraft-chattiin <code>/list</code>
                    </Change>
                </ul>
                <p>7.11.2020</p>
                <ul>
                    <Change>Armorstandin asentoja voi muuttaa oikeaklikkaamalla kyykyssä!</Change>
                </ul>
                <p>4.11.2020</p>
                <ul>
                    <Change>Palvelin päivitetty 1.16.4!</Change>
                    <Change>Palvelimella voi nyt craftaa onnenkeksejä.</Change>
                </ul>
                <p>1.11.2020</p>
                <ul>
                    <Change>Tab on palautettu Halloween ulkoasusta.</Change>
                    <Change>Lisätty etukäteen tilapäinen onnentoivotus uuteen mappiin.</Change>
                    <Change>Aikaisemmin hidastelleet votet pitäisi nyt toimia.</Change>
                </ul>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="lokakuu2020" btntext="Lokakuu 2020">
                <p>10.10.2020</p>
                <ul>
                    <Change>Halloween teemainen tabi.</Change>
                    <Change>Spawn on nyt halloween teemainen.</Change>
                    <Change>Aikaisemmin hidastelleet votet pitäisi nyt toimia.</Change>
                </ul>
                <p>9.10.2020</p>
                <ul>
                    <Change>Discord bot näyttää nyt roolit Minecraftin chatissa.</Change>
                </ul>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="syyskuu2020" btntext="Syyskuu 2020">
                <p>19.9.2020</p>
                <ul>
                    <Change>Päivitetty tabista palvelimen alkukirjain isoksi.</Change>
                </ul>
                <p>14.9.2020</p>
                <ul>
                    <Change>Sisukas-rankkisten (ja alempien) virheellinen viesti-ilmoitus oikeuksista on nyt korjattu.</Change>
                    <Change>Paranneltu turvallista teleporttia (onnistuu teleporttaamaan slabien päälle)</Change>
                </ul>
                <p>12.9.2020</p>
                <ul>
                    <Change>Added Russian language (thanks Inferdy &#x2764;).</Change>
                    <Change>Muutettu arvojen värit tukemaan RGB.</Change>
                </ul>
                <p>3.9.2020</p>
                <ul>
                    <Change>Päivitetty Jesari</Change>
                </ul>
                <p>1.9.2020</p>
                <ul>
                    <Change>Lisätty oikeus Nekromantikosta ylöspäin + lahjoittajille käyttää RGB-värejä pelinimessä.</Change>
                    <Change>Korjattu kääntäjässä bugi, joka rikkoi kääntäjän pelaajalla ollessa ei-tuettu kieli tietokannassa.</Change>
                    <Change>Lisätty tapa tehdä lätäköitä.</Change>
                </ul>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="elokuu2020" btntext="Elokuu 2020">
                <p>31.8.2020</p>
                <ul>
                    <Change>Chat-värit on tullut takaisin rgb tuella.</Change>
                    <Change>Parempi käyttäjien maininta chatissa.</Change>
                    <Change>Fixattu bugi, jossa pelaajalla oli ei-tuettu kieli ja hajotti kääntäjän.</Change>
                </ul>
                <p>30.8.2020</p>
                <ul>
                    <Change>Builders wand on nyt palvelimella</Change>
                </ul>
                <p>29.8.2020</p>
                <ul>
                    <Change>Lisätty ylösalaisin oleva kieli.</Change>
                    <Change>Päivitetty palvelin versioon 1.16.2!</Change>
                    <Change>Nether ja End resetattu.</Change>
                    <Change>Fixattu bugi, jossa kodin koordinaatti on negatiivinen ja jaollinen 16 =&gt; nakkaa virheen.</Change>
                    <Change>Rankkien välimuisti päivittyy -&gt; jos rankup ja relog, niin rankki pysyy samana.</Change>
                    <Change>Nettisivut päivitetty.</Change>
                    <Change>Uusi tabin gradient.</Change>
                    <Change>
                        <code>/music</code> on lisätty uudet Netherin musiikit.
                    </Change>
                    <Change>
                        <code>/music</code> kuuluvuutta on parannettu.
                    </Change>
                    <Change>Lisätty vanhat "koodit" takaisin palvelimelle.</Change>
                    <Change>Lisätty ääniviestejä palvelimelle.</Change>
                    <Change>Iron Golem pakottaa sinut pudottamaan housusi, kun lyö sinua.</Change>
                    <Change>Kuolinviestit jakautuu nyt maailmojen välillä.</Change>
                </ul>
                <p>15.8.2020</p>
                <ul>
                    <Change>Lisätty 1.16.2 tuki</Change>
                </ul>
                <p>13.8.2020</p>
                <ul>
                    <Change>Korjattu vinkki Netherin ja Endin resettaamisesta</Change>
                </ul>
                <p>7.8.2020</p>
                <ul>
                    <Change>Fixattu bugi yp-chatissa.</Change>
                    <Change>
                        Lisätty ilmoitus muistuttamaan pelaajia liittymisen yhteydessä <code>/warns</code> -komennosta.
                    </Change>
                </ul>
                <p>5.8.2020</p>
                <ul>
                    <Change>Palvelimen render distance nostettu 10 chunkkiin (+2 chunkkia edellisestä).</Change>
                </ul>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="heinäkuu2020" btntext="Heinäkuu 2020">
                <p>22.7.2020</p>
                <ul>
                    <Change>
                        Spawnille avattu parkour! <code>/warp parkour</code>
                    </Change>
                </ul>
                <p>5.7.2020</p>
                <ul>
                    <Change>
                        <code>/alue</code> näyttää nyt jäsenten ja omistajien määrän suojauksessa.
                    </Change>
                    <Change>
                        <code>/alue</code> näyttää molemmat XY pisteet suojauksen koosta.
                    </Change>
                    <Change>
                        Lisätty <code>/manu</code>
                    </Change>
                    <Change>
                        Poistettu <code>/tank</code>
                    </Change>
                </ul>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="kesäkuu2020" btntext="Kesäkuu 2020">
                <p>25.6.2020</p>
                <ul>
                    <Change>Lisätty 1.16.1 tuki servulle!</Change>
                    <Change>Toisen pelaajan pelaaja-arvon klikkaaminen chatissa näyttää nyt kyseisen pelaajan peliajan oman sijaan.</Change>
                </ul>
                <p>18.6.2020</p>
                <ul>
                    <Change>Karanteenissa toimii VR</Change>
                    <Change>
                        Palvelimella voi nyt antaa lemmikkejä ja vapauttaa niitä komennoilla <code>/lemmikki anna &lt;pelaaja&gt;</code> ja
                        <code>/lemmikki vapauta</code>.
                    </Change>
                    <Change>
                        Palvelimella voi nyt tägätä ihmisiä chatissa käyttäen <code>@pelaajanimi</code>.
                    </Change>
                    <Change>
                        Lisätty <code>/säännöt</code> komento.
                    </Change>
                </ul>
                <p>3.6.2020</p>
                <ul>
                    <Change>Entity Activation Range nostettu.</Change>
                    <Change>Villagerin tradet pitäisi nyt restockaa nopeammin.</Change>
                    <Change>Fixattu ongelma, jossa pelaajat satunnaisesti jäivät jumiin chunkille.</Change>
                </ul>
                <p>1.6.2020</p>
                <ul>
                    <Change>Mobien tracking range on default.</Change>
                    <Change>Nether-portaalista voi nyt kuljettaa mobeja.</Change>
                    <Change>Lumouspöytä ehdottaa nyt oikeat lumoukset.</Change>
                    <Change>Spam fishing problem solved.</Change>
                    <Change>Villagereiden töiden resettaus fixed.</Change>
                    <Change>Netherin katolle on taas mahdollista päästä.</Change>
                </ul>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="toukokuu2020" btntext="Toukokuu 2020">
                <p>31.5.2020</p>
                <ul>
                    <Change>Lisätty info voteen, että siitä saa rahaa.</Change>
                </ul>
                <p>15.5.2020</p>
                <ul>
                    <Change>Yö kelautuu nopeammin. Mitä useampi nukkuu, sitä nopeampi yö.</Change>
                </ul>
                <p>14.5.2020</p>
                <ul>
                    <Change>
                        Lisätty komento <code>/votestreak [nimi]</code>. Ilman nimeä näkee oman voteputken.
                    </Change>
                </ul>
                <p>11.5.2020</p>
                <ul>
                    <Change>
                        <code>/discord</code> komento korjattu
                    </Change>
                    <Change>Voten määrä pienennetty 75 -&gt; 50 ja lisäksi tehty voteputket</Change>
                </ul>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="maaliskuu2020" btntext="Maaliskuu 2020">
                <p>27.3.2020</p>
                <ul>
                    <Change>
                        Lisätty seuraavat komennot: <code>/jöms /retu /tank /ash</code>
                    </Change>
                </ul>
                <p>22.3.2020</p>
                <ul>
                    <Change>Spawnereita voi taas muuttaa creeper- ja squid-spawnereiksi</Change>
                    <Change>
                        <code>/vote</code> ei avaa enää valikkoa. Chattiin tulee molemmat linkit.
                    </Change>
                </ul>
                <p>18.3.2020</p>
                <ul>
                    <Change>
                        lisätty uusia shortcutkomentoja <code>/nax /nubbe /skidaddleskidoodle [/nou /reverse /unoreverse]</code>
                    </Change>
                </ul>
                <p>12.3.2020</p>
                <ul>
                    <Change>Granite, diorite, andesite, cobble, stone voi nyt sulattaa blast furnacessa graveliksi</Change>
                </ul>
                <p>9.3.2020</p>
                <ul>
                    <Change>
                        Uusi komento <code>/alue</code>. Näyttää alueen nimen.
                    </Change>
                </ul>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="helmikuu2020" btntext="Helmikuu 2020">
                <p>24.2.2020</p>
                <ul>
                    <Change>
                        <code>/radio</code> toimii taas
                    </Change>
                    <Change>
                        Uusi komento <code>/music</code>
                    </Change>
                    <Change>Sillanrakennus poistettu käytöstä monistusglitchin takia</Change>
                </ul>
                <p>16.2.2020</p>
                <ul>
                    <Change>Map reset</Change>
                </ul>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="tammikuu2020" btntext="Tammikuu 2020">
                <p>16.1.2020</p>
                <ul>
                    <Change>
                        <code>/tk</code> tuotu takaisin
                    </Change>
                </ul>
                <p>13.1.2020</p>
                <ul>
                    <Change>Vote korjattu</Change>
                </ul>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="joulukuu2019" btntext="Joulukuu 2019">
                <p>13.12.2019</p>
                <ul>
                    <Change>
                        Lisätty <code>/ignore</code> (<code>/ignore add &lt;nimi&gt;</code>, <code>/ignore list</code>,{' '}
                        <code>/ignore remove &lt;nimi&gt;</code>)
                    </Change>
                </ul>
                <p>11.12.2019</p>
                <ul>
                    <Change>Lisätty Bedrock versiosta tuttu sillanrakennusominaisuus</Change>
                    <Change>Lisätty uusi resepti: 6 lasipaneelia -&gt; glass block </Change>
                    <Change>Lisätty uusi resepti uuniin: stainded glass -&gt; glass block</Change>
                </ul>
                <p>10.12.2019</p>
                <ul>
                    <Change>Rankkikohtaiset kotien määrät korjattu</Change>
                    <Change>Spawnerien otto silktouchilla ja ilman silktouchia korjattu</Change>
                </ul>
                <p>7.12.2019</p>
                <ul>
                    <Change>Tabin servervärejä paranneltu</Change>
                    <Change>Taikamaton kanssa ei enää ota fall damagea</Change>
                    <Change>Entiteetit eivät ota damagea taikamaton sivuista</Change>
                    <Change>Permiplugin osaa käsitellä offline pelaajia, ja pystyy asettamaan oikeuksia ilman relogia</Change>
                    <Change>Korjattu coreplugarin komennonsuorittajasta komponenttibugi</Change>
                </ul>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="marraskuu2019" btntext="Marraskuu 2019">
                <p>30.11.2019</p>
                <ul>
                    <Change>Korjattu prismarine slabien muunaminen täys blockeiksi</Change>
                    <Change>Lisätty mahdollisuus muuntaa Blast Furnacella hiilipalikoista mustaa väriainetta</Change>
                </ul>
                <p>22.11.2019</p>
                <ul>
                    <Change>Discord chatin värit korjattu</Change>
                </ul>
                <p>16.11.2019</p>
                <ul>
                    <Change>Tuomas veturi päivitetty</Change>
                    <Change>Looppaus + random toimii nyt</Change>
                    <Change>Voikukat korjattu</Change>
                </ul>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="lokakuu2019" btntext="Lokakuu 2019">
                <p>31.10.2019</p>
                <ul>
                    <Change>
                        <code>/sit</code> tuotu takaisin
                    </Change>
                </ul>
                <p>26.10.2019</p>
                <ul>
                    <Change>
                        <code>/vote</code> toimii taas
                    </Change>
                    <Change>(Realistinen) eläintenkanto takaisin servulla</Change>
                </ul>
                <p>25.10.2019</p>
                <ul>
                    <Change>
                        <code>/nimeä</code> komento lisätty palvelimelle
                    </Change>
                    <Change>
                        Lisätty ylläpidolle <code>/setsign</code>
                    </Change>
                    <Change>
                        Korjattu viestibugi <code>/nick player nick</code> -komennossa (koskien ylläpitoa)
                    </Change>
                    <Change>
                        <code>/baltop</code> korjattu
                    </Change>
                </ul>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="syyskuu2019" btntext="Syyskuu 2019">
                <p>25.09.2019</p>
                <ul>
                    <Change>
                        Tpa:n <code>/back</code> fixattu oikeiden pelaajien sijaintiin
                    </Change>
                    <Change>mobGriefing asetettu takaisin päälle</Change>
                </ul>
                <p>24.09.2019</p>
                <ul>
                    <Change>
                        Tp:n ja <code>/spawn</code> komennon <code>/back</code> tallentaa nyt sijainnin
                    </Change>
                </ul>
                <p>21.09.2019</p>
                <ul>
                    <Change>
                        <code>/kms</code> ja <code>/kys</code> lisätty
                    </Change>
                    <Change>Spawnerit putoaa taas Silk Touch -enchantilla</Change>
                </ul>
            </Month>

            <Month showingMonth={showingMonth} updateShowing={updateShowing} month="elokuu2019" btntext="Elokuu 2019">
                <p>19.08.2019</p>
                <ul>
                    <Change>Coreprotect osaa nyt tallentaa lentävät blockit</Change>
                    <Change>Tnt ja tnt_minecart ei enää lennätä niin paljon blockei -&gt; parempia raivaukseen</Change>
                    <Change>Lisätty custom recipet servulle</Change>
                </ul>
                <p>17.08.2019</p>
                <ul>
                    <Change>Paranneltu databasen käyttöö: StatManager, Karanteenials, KaranteeniPerms, Chatar</Change>
                    <Change>
                        Mahdollisesti vähennetty joinauksesta seuraavaa lagia: KaranteeniPerms, Karanteenials, KaranteeniCore, StatManager,
                        Chatar (vaihdettu db sync -&gt; async. jos ongelmia ilmenee niin ilmoittakaa)
                    </Change>
                    <Change>
                        Lisätty automaattinen restart (yp käyttäkää komentoa <code>/restarter:restart</code>)
                    </Change>
                    <Change>Poistettu virheellisiä blockeja taikamatosta</Change>
                    <Change>
                        Löydetty ISO bugi timereista joka johti siihen että kaikki timerit ajettiin joka tickillä. Nyt fixattu, hyvällä
                        tuurilla isoja vaikutuksia tehokkuuteen
                    </Change>
                    <Change>
                        Operaattorista ylöspäin oikat <code>/player kill &lt;nimi&gt;</code>
                    </Change>
                </ul>
                <p>16.08.2019</p>
                <ul>
                    <Change>
                        <code>/rtp</code> toimii, aiempaa nopeampi ja ei mene veden alle
                    </Change>
                </ul>
                <p>13.08.2019</p>
                <ul>
                    <Change>Fixattu "epäturvallinen sijainti" teleportatessa</Change>
                    <Change>Fixattu puuttunut ääni kotiin teleportatessa</Change>
                    <Change>
                        <code>/rtp</code> tehostettu
                    </Change>
                    <Change>Fixattu rtp veden alle vienti</Change>
                </ul>
                <p>11.08.2019</p>
                <ul>
                    <Change>Uusi versio ja uudet kujeet. 1.14 on saapunut.</Change>
                </ul>
            </Month>
        </div>
    )
}

const Muutokset = () => {
    return (
        <Layout title="Changelog" description="Karanteenin muutosloki aikajärjestyksessä.">
            <Heading heading="Changelog" lead="Tämä sivu kattaa Karanteenin muutoslokit aikajärjestyksessä." />
            <Changelog />
        </Layout>
    )
}
export default Muutokset
