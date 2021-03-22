import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'

const CommonQuestions = (props) => {
    return (
        <>
            <UkkHeading id="yleinen">Yleinen</UkkHeading>
            <Card>
                <Question id="yle1" target="ylecol1">
                    Koska palvelin saa päivityksen?
                </Question>
                <Answer id="yle1" target="ylecol1">
                    Wise chinese man once said: 我不知道
                </Answer>
            </Card>

            <Card>
                <Question id="yle2" target="ylecol2">
                    Tahtoisin ylläpitäjäksi. Kuinka voin saavuttaa sen?
                </Question>
                <Answer id="yle2" target="ylecol2">
                    Käy lukemassa ohjeet <a href="/yphaku">täältä</a> ja lähetä hakemus käyttäen annettua lomaketta.
                </Answer>
            </Card>

            <Card>
                <Question id="yle3" target="ylecol3">
                    Apua! Ei ole oikeuksia komentoon, vaikka pitäisi olla.
                </Question>
                <Answer id="yle3" target="ylecol3">
                    Koita poistua palvelimelta ja liittyä uudelleen. Mikäli ongelma ei korjaantunut, nykäise ylläpitäjää hihasta.
                    Vaihtoehtoisesti mikäli ylläpitäjiä ei ole palvelimella, tee tiketti Discordiin ja katsotaan kuinka asian voi hoitaa.
                    Voit myös luoda uuden asian{' '}
                    <a href="https://bugs.karanteeni.net" target="_blank">
                        Karanteenin ongelmanhallinnassa
                    </a>
                    .
                </Answer>
            </Card>

            <Card>
                <Question id="yle4" target="ylecol4">
                    Kuinka pääsen korkeammalle tasolle?
                </Question>
                <Answer id="yle4" target="ylecol4">
                    Pelaamalla. Rankeista löydät lisätietoa <a href="/rankit">täältä</a>.
                </Answer>
            </Card>

            <Card>
                <Question id="yle5" target="ylecol5">
                    Löysin palvelimelta peliä rikkovan vian. Mitä teen?
                </Question>
                <Answer id="yle5" target="ylecol5">
                    Ota yhteyttä ylläpitäjään joko palvelimella tai liity Karanteenin Discordiin ja valitse sieltä kanava "Bugit ja
                    parannusehdotukset". Voit myös luoda uuden asian{' '}
                    <a href="https://bugs.karanteeni.net" target="_blank">
                        Karanteenin ongelmanhallinnassa
                    </a>
                    <strong>Mikäli bugia voi hyväksikäyttää, pidä se omana tietonasi, äläkä kerro muille pelaajille.</strong>
                    Bugin hyväksikäyttö on <strong>ankarasti kiellettyä</strong>. Mikäli jäät siitä kiinni, saat siitä automaattisesti
                    tuntuvan porttikiellon. Hyväksikäytettävän / peliärikkovan bugin ilmiantamisesta saa yleensä korvauksen.
                </Answer>
            </Card>

            <Card>
                <Question id="yle6" target="ylecol6">
                    Voinko käyttää kahta tiliä palvelimella?
                </Question>
                <Answer id="yle6" target="ylecol6">
                    Voit, mutta tilit eivät saa hyötyä toisistaan. Tähän lukeutuu mm. tavarapakkausten ja äänestysrahojen siirtäminen
                    toiselle tilille. Pelitilit eivät saa olla yhtä aikaa palvelimella.
                </Answer>
            </Card>

            <Card>
                <Question id="yle7" target="ylecol7">
                    Kuinka usein maailma nollataan?
                </Question>
                <Answer id="yle7" target="ylecol7">
                    Maailma nollataan yleensä noin puolen vuoden välein, mutta ei tapahdu automaationa. Yleensä maailman nollaus myös
                    tähdätään seuraavan Minecraftin suuren versiopäivityksen kohdille. Netheriä ei nollata ja End nollataan kerran kolmessa
                    kuukaudessa.
                </Answer>
            </Card>

            <Card>
                <Question id="yle8" target="ylecol8">
                    Mikä säilyy maailman nollauksen yhteydessä?
                </Question>
                <Answer id="yle8" target="ylecol8">
                    Maailman nollauksessa eli "mapresetissa" kaikki aloittavat samalta viivalta. Tämä tarkoittaa sitä, että pelaajien rahat,
                    inventory ja koko kartta nollataan maisemanvaihdon vuoksi, jolloin kaikki joutuvat aloittamaan alusta. Peliaika on ainut
                    asia, joka säilyy.
                </Answer>
            </Card>

            <Card>
                <Question id="yle9" target="ylecol9">
                    Kuinka voin lahjoittaa palvelimelle?
                </Question>
                <Answer id="yle9" target="ylecol9">
                    Koska Karanteenissa ei ole käytössä vippejä, vaan kaikki perustuu peliaikaan, voit tehdä vapaamuotoisen lahjoituksen mm.
                    PayPalilla. Tarkemmat ohjeet löydät{' '}
                    <a href="/lahjoitus" target="blank">
                        täältä
                    </a>
                    .
                </Answer>
            </Card>

            <Card>
                <Question id="yle10" target="ylecol10">
                    Mitä teen jos tarvitsen ylläpidon apua, mutta he eivät ole juuri nyt paikalla?
                </Question>
                <Answer id="yle10" target="ylecol10">
                    Voit liittyä Karanteenin <a href="https://discord.gg/dxCtuY7">Discord</a> -palvelimelle ja pyytää apua luomalla tiketin
                    #apua kanavalta.
                </Answer>
            </Card>
        </>
    )
}

const ProtectionQuestions = (props) => {
    return (
        <>
            <UkkHeading id="suojaus">Suojaus</UkkHeading>
            <Card>
                <Question id="prot1" target="protcol1">
                    Miten voin suojata alueeni?
                </Question>
                <Answer id="prot1" target="protcol1">
                    Ylläpito suojaa alueen ja suojaukseen vaaditaan talon alku. Huomaathan, että talosi täytyy olla vähintään sadan (100)
                    blockin päässä lähimmästä talosta. Mikäli aiot luoda kylän, voit päättää alueelle nimen. Warpin kylälle saa vasta, kun
                    kylällä on 15 asukasta. Endiin ei pääsääntöisesti suojata alueita.
                </Answer>
            </Card>

            <Card>
                <Question id="prot2" target="protcol2">
                    Apua! Taloani on grieffattu!
                </Question>
                <Answer id="prot2" target="protcol2">
                    Ei hätää. Pääset Karanteenin Discordiin <code>/discord</code> komennolla, tai voit nykäistä jo paikalla olevaa
                    ylläpitäjää hihasta. Joka tapauksessa saat grieffatun talosi kuntoon, sekä tavarat takaisin. Grieffaaja sitä vastoin saa
                    porttikiellon palvelimelle.
                </Answer>
            </Card>

            <Card>
                <Question id="prot3" target="protcol3">
                    Kuinka annan kaverilleni oikeudet alueeseen?
                </Question>
                <Answer id="prot3" target="protcol3">
                    Oikeudet alueeseen voit antaa komennolla <code>/trust &lt;suojauksen_nimi&gt; &lt;pelaajan_nimi&gt;</code> seisten
                    suojauksen sisällä. Suojauksen nimen saat selville komennolla <code>/alue</code> kun seisot sen päällä.
                </Answer>
            </Card>

            <Card>
                <Question id="prot4" target="protcol4">
                    Kuinka annan kaverilleni oikeudet chesteihin ja uuneihin?
                </Question>
                <Answer id="prot4" target="protcol4">
                    Voit antaa oikeudet kyseisiin blockeihin katsomalla blockia ja kirjoittamalla komennon{' '}
                    <code>/+oikeudet &lt;pelaajan_nimi&gt;</code>. Tämän jälkeen kaverillasi on oikeudet avata kyseinen arkku. Komento
                    toimii myös muihin container blockeihin.
                </Answer>
            </Card>

            <Card>
                <Question id="prot5" target="protcol5">
                    Löysin suojaamattoman arkun. Voinko ottaa sieltä tavaraa?
                </Question>
                <Answer id="prot5" target="protcol5">
                    Et. Vaikka löytäisit arkun tai kokonaan suojaamattoman arkun, et saa ottaa sieltä tavaroita tai rikkoa paikkaa.
                    Grieffaaminen johtaa usein porttikieltoon.
                </Answer>
            </Card>
        </>
    )
}

const EconomyQuestions = (props) => {
    return (
        <>
            <UkkHeading id="ekonomia">Ekonomia</UkkHeading>
            <Card>
                <Question id="eco1" target="ecocol1">
                    Kuinka voin luoda arkkukaupan?
                </Question>
                <Answer id="eco1" target="ecocol1">
                    Voit luoda arkkukaupan lyömällä arkkua kyykyssä tavara kädessä. Tämän jälkeen chat kysyy sinulta hinnan tavaralle.
                    Kirjoita hinta ja näin arkkukauppasi on valmis.
                </Answer>
            </Card>

            <Card>
                <Question id="eco2" target="ecocol2">
                    Kuinka voin poistaa arkkukaupan?
                </Question>
                <Answer id="eco2" target="ecocol2">
                    Voit poistaa arkkukaupan hajottamalla kyseisen arkun tai katsomalla arkkukauppaa kohti ja suorittamalla{' '}
                    <code>/qs remove</code>. Muita arkkukaupan komentoja ovat mm. <code>/qs price &lt;hinta&gt;</code>
                </Answer>
            </Card>

            <Card>
                <Question id="eco3" target="ecocol3">
                    Mitä valuuttaa palvelin käyttää ja kuinka saan sitä?
                </Question>
                <Answer id="eco3" target="ecocol3">
                    Palvelimella on rahavaluuttana pennit. Pennejä saat hankkimalla uutta peliaikaa, sekä palvelinta äänestämällä{' '}
                    <code>/vote</code>. Jokainen äänestykerta on 50 pennin arvoinen. Voit myös myydä sekä ostaa tavaraa käyttämällä
                    arkkukauppoja. Spawnilla on kauppa (<code>/warp kauppa</code>), jonne voit myydä oreista tehtyjä blockeja.
                </Answer>
            </Card>
        </>
    )
}

const HomeQuestions = (props) => {
    return (
        <>
            <UkkHeading id="kodit">Kodit</UkkHeading>
            <Card>
                <Question id="home1" target="homecol1">
                    Hukkasin kotini. Kuinka saan sen takaisin?
                </Question>
                <Answer id="home1" target="homecol1">
                    Nykäise ylläpitäjää hihasta ja kerro hänelle mitä teit viimeksi kotisi lähettyviltä ja miltä se näytti. Näin saamme
                    palautettua sinut oikeaan paikkaan.
                </Answer>
            </Card>

            <Card>
                <Question id="home2" target="homecol2">
                    En pysty teleporttaamaan, poistamaan tai asettamaan koteja. Internal error, wat do?
                </Question>
                <Answer id="home2" target="homecol2">
                    Sano lähimmälle ylläpitäjälle asiasta. Todennäköisesti joku tai jotkin kodeistasi ovat korruptoituneet ja joudumme
                    poistamaan ne manuaalisesti. Mikäli ylläpitoa ei ole paikalla, liity Karanteenin Discord palvelimelle ja kerro siellä
                    ongelmastasi ylläpidolle.
                </Answer>
            </Card>

            <Card>
                <Question id="home3" target="homecol3">
                    Saanko asettaa kodin Netheriin tai Endiin?
                </Question>
                <Answer id="home3" target="homecol3">
                    Saat, mutta Endiin emme suosittele. End resetoidaan n. puolessa välissä karttaa, mikä voi aiheuttaa kodin
                    korruptoitumista ja sinun kuoleman. Tämä tarkoittaa siis sitä, että saatat kuolla jos käytät kotia resetoinnin jälkeen.
                    Ylläpito ei ole velvollinen palauttamaan tavaroitasi.
                </Answer>
            </Card>

            <Card>
                <Question id="home4" target="homecol4">
                    Saanko asettaa kodin toisen pelaajan taloon?
                </Question>
                <Answer id="home4" target="homecol4">
                    Mikäli toiselta pelaajalta on lupa asettaa taloon koti, on tämä sallittua. Kodin asettaminen muussa tapauksessa luetaan
                    häirinnäksi ja on varoituksen arvoinen. Toistuvissa tapauksissa rangaistuksia tiukennetaan.
                </Answer>
            </Card>
        </>
    )
}

const PunishmentQuestions = (props) => {
    return (
        <>
            <UkkHeading id="rangaistukset">Rangaistukset</UkkHeading>
            <Card>
                <Question id="pun1" target="puncol1">
                    Montako rangaistusta voin saada?
                </Question>
                <Answer id="pun1" target="puncol1">
                    Riippuu käyttäytymisestäsi servulla. Toistaiseksi annamme korkeintaan kaksi porttikieltoa, joista jälkimmäinen on aina
                    ikuinen, jos ensimmäinen on ollut yli viiden (5) päivän mittainen.
                </Answer>
            </Card>

            <Card>
                <Question id="pun2" target="puncol2">
                    Mitä rankaisumenetelmiä teillä on olemassa?
                </Question>
                <Answer id="pun2" target="puncol2">
                    Hiljennykset, varoitukset, sekä porttikiellot. Kolme varoitusta on aina kahden viikon porttikielto.
                </Answer>
            </Card>

            <Card>
                <Question id="pun3" target="puncol3">
                    Sain rangaistuksen turhasta!
                </Question>
                <Answer id="pun3" target="puncol3">
                    Liity Karanteenin Discordiin ja kerro asiasi #apua -kanavalla. Muista, että vaikka jokin ei olisi kiellettyä säännöissä,
                    siitä voidaan silti rangaista. Ylläpitäjien näkemykset voivat myös erota toisistaan, jonka vuoksi keskustele
                    rangaistuksesta rangaistuksen antajan kanssa.
                </Answer>
            </Card>
        </>
    )
}

const ModQuestions = (props) => {
    return (
        <>
            <UkkHeading id="modit">Modit</UkkHeading>
            <Card>
                <Question id="mod1" target="modcol1">
                    Mitkä modit ovat sallittuja Karanteenissa?
                </Question>
                <Answer id="mod1" target="modcol1">
                    Pääsääntöisesti kaikki pelaajia hyödyttävät modit ovat kiellettyjä, siinä missä grafiikkamodit kuten OptiFine ovat
                    sallittuja. Nykäise ylläpitäjää hihasta mikäli et ole varma.
                </Answer>
            </Card>
        </>
    )
}

const Card = (props) => {
    return <div className="card bg-transparent">{props.children}</div>
}

const Question = (props) => {
    return <h2>{props.children}</h2>
}

const Answer = (props) => {
    return <p>{props.children}</p>
}

const UkkHeading = (props) => {
    return (
        <h4 id={props.id} className="text-left mt-3">
            {props.children}
        </h4>
    )
}

const Ukk = () => {
    return (
        <Layout title="Usein kysytyt kysymykset" description="Karanteenissa usein kysytyt kysymykset, ja niihin vastaukset.">
            <Heading
                heading="Usein kysytyt kysymykset"
                lead='Milloin on mapresetin tuhoamisenchantin yhteensopiva plugarin home ei teleporttaa?" "On."'
            />

            <div>
                <CommonQuestions />
                <ProtectionQuestions />
                <EconomyQuestions />
                <HomeQuestions />
                <PunishmentQuestions />
                <ModQuestions />
            </div>
        </Layout>
    )
}

export default Ukk
