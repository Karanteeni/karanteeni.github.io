import React from 'react'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'

const Video = ({ source }: { source: string }) => {
    return (
        <div className="video">
            <video autoPlay={true} loop={true} muted={true} playsInline={true}>
                <source src={source} type="video/mp4" />
            </video>
        </div>
    )
}

const Feature = ({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) => {
    return (
        <div className="feature" id={id || ''}>
            <h4>{title}</h4>
            {children}
        </div>
    )
}

const Ominaisuudet = () => {
    return (
        <Layout title="Ominaisuudet" description="Karanteenin omat ominaisuudet listattuna.">
            <Heading heading="Karanteenin Ominaisuudet" lead="Lue nämä huolella. Avaat itsellesi mielenkiintoisia pelimahdollisuuksia!" />

            <h2>Survivalin lisäominaisuudet</h2>
            <p>Suuri osa erityisistä toiminnoista, komennoista ja muista jutuista, jotka toimivat Karanteenin survivalissa</p>
            <Feature title="Emeraldhissi">
                <Video source="/feature/emeraldvator.mp4" />
                <p>Voit rakentaa toimivan hissin emerald palikoilla. Hissit kytketään päälle redstonevirralla. </p>
            </Feature>

            <Feature title="Taikamatto">
                <Video source="/feature/magiccarpet.mp4" />
                <p>Sisukas rankista ylöspäin pelaajat voivat aktivoida taikamaton, jolla pystyy lentämään kuin Aladdin konsanaan!</p>
                <p>
                    Matto aktivoituu komennolla <code>/mc</code>, ja sen ulkonäköä voi muokata komennolla
                    <code>/mc design</code>.
                </p>
                <p>
                    Rankit avaavat maton muokkaukseen lisää blockkeja. Katso aukeavat blockit <a href="rankit">rankit sivulta</a>.
                </p>
            </Feature>

            <Feature title="Puun kaataminen">
                <Video source="/feature/woodchop.mp4" />
                <p>Puu kaatuu alhaalta ylös kokonaan, kunhan sen hakkaa kirveellä!</p>
            </Feature>
            <Feature title="Rakentajan taikasauva">
                <Video source="/feature/builderswand.mp4" />
                <p>
                    Sisukas rankista ylöspäin pelaajat voivat craftata <a href="/recipes#builderswand">Builders Wandin</a>. Tämä työkalu
                    edesauttaa suurien rakennusten rakennuksessa!
                </p>
                <p>
                    Taikasauva toimii kun laitat sen pelaajan vasempaan käteen, ja rakennuspalikat oikeaan, tai päinvastoin, jos hahmosi on
                    vasenkätinen.
                </p>
                <p>
                    Taikasauvassa on neljä eri rakentamismuotoa. Muotojen välillä voi vaihdella lyömällä kyykyssä ilmaa taikasauvan ollessa
                    kakkoskädessä.
                </p>
                <p>Rakentamismuodot ovat:</p>
                <ul>
                    <li>
                        Wand of extend
                        <ul>
                            <li>Jatkaa valmista muotoa taso kerrallaan</li>
                        </ul>
                    </li>
                    <li>
                        Wand of levitation
                        <ul>
                            <li>Mahdollistaa palikoiden asettamisen ilmaan</li>
                        </ul>
                    </li>
                    <li>
                        Wand of tower
                        <ul>
                            <li>Rakentaa 1x1 torneja</li>
                        </ul>
                    </li>
                    <li>
                        Wand of nothingness
                        <ul>
                            <li>Rakentaa normaalisti. Toisin sanoen tämä muoto poistaa taikasauvan käytöstä.</li>
                        </ul>
                    </li>
                </ul>
            </Feature>
            <Feature title="Armorstand kustomointi">
                <Video source="/feature/armorstand.mp4" />
                <p>
                    Karanteenissa voi kustomoida armostandien asentoa. Asentojen välillä voi vaihdella klikkaamalla armostandia kyykyssä
                    oikealla klikillä.
                </p>
                <p>Saatavilla olvat asennot:</p>
                <ul>
                    <li>Tavallinen (minen oma)</li>
                    <li>Tavallinen, mutta lisätty kädet ja poistettu laatta</li>
                    <li>T-pose</li>
                    <li>Tavaran pito kädessä (näyttää ihan kivalta vaikkapa miekan kanssa)</li>
                    <li>Kävely/juoksu</li>
                    <li>Zombi</li>
                    <li>Dab</li>
                    <li>Facepalm</li>
                </ul>
            </Feature>
            <Feature title="Arkkukaupat">
                <Video source="/feature/chestshop.mp4" />
                <p>
                    Pelaajien väliseen kauppaan työkaluna on arkkukaupat! Lyö arkkua tavaralla, jota haluat myydä, kirjoita chattiin tavaran
                    hinta, ja kauppa on valmis!
                </p>
            </Feature>

            <Feature title="Yön ohittaminen">
                <p>
                    Yöt voi ohittaa Karanteenissa uudella tavalla. Mitä useampi pelaaja on nukkumassa yön aikana, sitä nopeammin yö kuluu ja
                    aamu koittaa!
                </p>
            </Feature>

            <Feature title="Enderdragonin munien kerääminen">
                <p>
                    Karanteenissa jokainen uudelleenkin spawnattu Ender dragon pudottaa Ender dragonin munan. Tästä syystä Ender dragon on
                    myös hankalampi spawnata uudelleen.
                </p>
                <p>
                    End crystalleilla on Karanteenissa vaikeampi craftrecipe. Sen näet <a href="recipes#endcrystal">täältä</a>
                </p>
            </Feature>

            <Feature title="Spawnerien kerääminen">
                <p>
                    Karanteenissa pystyy hakkaamaan mobspawnerit itselleen, kunhan käyttää hakkua jossa on Silk Touch (silkkinen kosketus)
                    enchantti.
                </p>
                <p>Parantuva rankista ylöspäin pelkkä hakku riittää!</p>
            </Feature>

            <Feature title="Arkkujen lukittuminen">
                <p>Laittaessasi arkun maahan menee se automaattisesti lukkoon.</p>
                <ul>
                    <li>
                        Halutessasi poistaa arkun lukituksen, katso sitä ja tee komento <code>/avaa</code>.
                    </li>
                    <li>
                        Halutessasi antaa arkkuun jollekkin oikeudet, katso arkkua ja tee komento
                        <code>/+oikeudet &lt;pelaajan_nimi&gt;</code>
                    </li>
                    <li>
                        Halutessasi poistaa arkusta jonkin oikeudet, katso arkkua ja tee komento
                        <code>/-oikeudet &lt;pelaajan_nimi&gt;</code>
                    </li>
                </ul>
            </Feature>

            <Feature title="Alueen suojaaminen">
                <p>
                    Ylläpito suojaa alueesi pyydettäessä. Kun alue on suojattu, alueen tiedot voi tarkastaa
                    <code>/alue</code>
                    -komennolla.
                </p>
                <p>
                    Voit lisätä alueeseesi jäseniä komennolla{' '}
                    <code>
                        /trust {'{'}alueen_nimi{'}'} {'{'}pelaajan_nimi{'}'}
                    </code>{' '}
                    ja poistaa jäseniä{' '}
                    <code>
                        /untrust {'{'}alueen_nimi{'}'} {'{'}pelaajan_nimi{'}'}
                    </code>
                </p>
                <p>
                    Jos kylässäsi on vähintään 15 asukasta, voit pyytää sille warppia <code>/warps</code> listaan.
                </p>
            </Feature>

            <Feature title="Yleiset komennot" id="komennot">
                <p>Survivalissa toimii isoläjä komentoja jotka ovat pelaajilla auki Eloton rankista asti!</p>
                <p>
                    Rankkikohtaiset komennot ja ominaisuudet löytyvät <a href="rankit">täältä</a>.
                </p>
                <ul className="wrappedlist">
                    <li>
                        <code>/discord</code>
                    </li>
                    <li>
                        <code>/säännöt</code>
                    </li>
                    <li>
                        <code>/rankit</code>
                    </li>
                    <li>
                        <code>/warns (tarkistathan varoitustilanteesi!)</code>
                    </li>
                    <li>
                        <code>/vote</code>
                    </li>

                    <li>
                        <code>/dynmap hide (piilottaa pelaajan dynmapista)</code>{' '}
                    </li>
                    <li>
                        <code>/dynmap show (palauttaa pelaajan takaisin dynmappiin)</code>{' '}
                    </li>

                    <li>
                        <code>/kieli fi-Fi</code>
                    </li>
                    <li>
                        <code>/kieli en-US </code>
                    </li>

                    <li>
                        <code>/spawn</code>
                    </li>
                    <li>
                        <code>/warp(s)</code>
                    </li>
                    <li>
                        <code>/tpa</code>
                    </li>
                    <li>
                        <code>/tpahere</code>
                    </li>
                    <li>
                        <code>/tpyes (/tpaccept)</code>
                    </li>
                    <li>
                        <code>/tpno (/tpdeny)</code>
                    </li>
                    <li>
                        <code>/rtp (random tp)</code>
                    </li>

                    <li>
                        <code>
                            /sethome {'{'}kodin_nimi{'}'}
                        </code>
                    </li>
                    <li>
                        <code>
                            /delhome {'{'}kodin_nimi{'}'}
                        </code>
                    </li>
                    <li>
                        <code>
                            /home {'{'}kodin_nimi{'}'}
                        </code>
                    </li>
                    <li>
                        <code>/back</code>
                    </li>

                    <li>
                        <code>/mail read [&lt;sivu&gt;]</code>
                    </li>
                    <li>
                        <code>/mail clear [&lt;määrä&gt;]</code>
                    </li>
                    <li>
                        <code>/mail send &lt;nimi&gt; &lt;viesti&gt;</code>
                    </li>

                    <li>
                        <code>/msg (/m, /message)</code>
                    </li>
                    <li>
                        <code>/reply (/r)</code>
                    </li>
                    <li>
                        <code>
                            /ignore {'{'}add/remove{'}'} {'{'}pelaajan_nimi{'}'}
                        </code>
                    </li>
                    <li>
                        <code>
                            /ignore {'{'}list{'}'}
                        </code>
                    </li>

                    <li>
                        <code>/quickshop (kauppa-arkkuopas)</code>
                    </li>
                    <li>
                        <code>/bal</code>
                    </li>
                    <li>
                        <code>/baltop</code>
                    </li>
                    <li>
                        <code>
                            /pay {'{'}pelaaja{'}'} {'{'}määrä{'}'}
                        </code>
                    </li>
                    <li>
                        <code>/peliaika (/pa, /playtime)</code>
                    </li>

                    <li>
                        <code>
                            /trust {'{'}alueen_nimi{'}'} {'{'}pelaajan_nimi{'}'}
                        </code>
                    </li>
                    <li>
                        <code>/alue (näyttää tietoja alueesta)</code>
                    </li>
                    <li>
                        <code>
                            /+oikeudet {'{'}pelaajan_nimi{'}'}{' '}
                        </code>
                    </li>
                    <li>
                        <code>
                            /-oikeudet {'{'}pelaajan_nimi{'}'}
                        </code>
                    </li>
                    <li>
                        <code>/avaa</code>
                    </li>

                    <li>
                        <code>/kms</code>
                    </li>
                    <li>
                        <code>/sit</code>
                    </li>

                    <li>
                        <code>/lemmikki (lemmikkiopas)</code>
                    </li>
                    <li>
                        <code>/music</code>
                    </li>
                    <li>
                        <code>/radio</code>
                    </li>

                    <li>
                        <code>/tk</code>
                    </li>
                    <li>
                        <code>/unoreverse</code>
                    </li>
                    <li>
                        <code>/skiaddleskidoodle</code>
                    </li>
                    <li>
                        <code>/nubbe</code>
                    </li>
                    <li>
                        <code>/iita</code>
                    </li>
                    <li>
                        <code>/jöms</code>
                    </li>
                    <li>
                        <code>/ash</code>
                    </li>
                    <li>
                        <code>/retu</code>
                    </li>
                    <li>
                        <code>/manu</code>
                    </li>
                    <li>
                        <code>/viher</code>
                    </li>
                    <li>
                        <code>/susse</code>
                    </li>
                </ul>
            </Feature>
            <Feature title="Chatkoodit">
                <p>Karanteenissa on käytössä tiettyjä chatkoodeja, jotka chattiin kirjoittaessa muuttuvat automaattisesti emojeiksi.</p>
                <ul>
                    <li>
                        <code>*penni</code> =&gt; ❂
                    </li>
                    <li>
                        <code>&lt;3</code> =&gt; ♥
                    </li>
                    <li>
                        <code>*biovaara</code> =&gt; ☣{' '}
                    </li>
                    <li>
                        <code>*karanteeni</code> =&gt; ☣
                    </li>
                    <li>
                        <code>*check</code> =&gt; ✔{' '}
                    </li>
                    <li>
                        <code>*shrug</code> =&gt; ¯\_(ツ)_/¯
                    </li>
                    <li>
                        <code>*magic*</code> =&gt; *magic* (värjättynä)
                    </li>
                    <li>
                        <code>owo</code> =&gt; OωO
                    </li>
                    <li>
                        <code>*miekka / *sword</code> =&gt; 🗡
                    </li>
                    <li>
                        <code>*jousipyssy / *bowi</code> =&gt; 🏹
                    </li>
                    <li>
                        <code>*kirves / *axe</code> =&gt; 🪓
                    </li>
                    <li>
                        <code>*atrain / *trident</code> =&gt; 🔱
                    </li>
                    <li>
                        <code>*onki</code> =&gt; 🎣
                    </li>
                    <li>
                        <code>*pottu / *potion / *taikajuoma</code> =&gt; 🧪
                    </li>
                    <li>
                        <code>*kilpi / *shield</code> =&gt; 🛡
                    </li>
                </ul>
            </Feature>
        </Layout>
    )
}
export default Ominaisuudet
