import React from 'react'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Heading from '../components/layout/heading';
import Layout from '../components/layout/layout';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ChapterHeading = ({ children, startDate, endDate }: { children: React.ReactNode; startDate: Date | string; endDate?: Date | string }) => {
    let options: Intl.DateTimeFormatOptions = { weekday: "short", year: "numeric", month: "numeric", day: "numeric" };
    
    let startText: string = "";
    if(typeof startDate === "string") {
        startText = startDate;
    } else {
        startText = startDate.toLocaleDateString("fi-fi", options);
        if(!endDate) {
            endDate = new Date();
        }
    }

    let endText: string = "";
    if(typeof endDate === "string") {
        endText = endDate;
    } else {
        endText = endDate.toLocaleDateString("fi-fi", options);
    }

    return <div className="history-heading">
        <h3>{children}</h3>
        <span><b>{startText} - {endText}</b></span>
    </div>;
}

const Historia = () => {
    return (
        <Layout
            title="Historia"
            description="Historian Karanteenin alusta sen uusimpiin päiviin"
        >
            <Heading heading="Karanteenin historia" lead="Pikakelaus palvelimen historiasta"/>
			<h2>Pohjustusta</h2>
            <p>
                Nämä asiat, jotka lukee muutamassa seuraavassa kappaleessa tulee olemaan osalle jo tuttuja. Etenkin palvelimen kuvaus
				löytyy lähes identtisenä <a href="https://www.karanteeni.net/hoks" target="_blank">hyvä tietää</a>
				&nbsp;-sivulta.
            </p>
			<p>
				Karanteeni on vuodesta 2016 asti pyörinyt suomalainen Minecraft-palvelin. Palvelimen toimintaidea on se, että
				mistään ominaisuuksista ei tarvitse maksaa senttiäkään. Kaikki ominaisuudet hatuista lentoon olisi saavutettavissa pelkästään pelaamalla.
				Karanteenin pääpelimuotona on aina toiminut pelin uusimmalla versiolla pelattava survival. Aivan tavalliseen survivaliin 
				emme kuitenkaan halunneet tyytyä ja siksi olemmekin lisänneet vuosien mittaan palvelimelle kaikkea vanillapelin ulkopuolelle jääneitä 
				asioita, kuten <a href="https://www.karanteeni.net/reseptit" target="_blank">custom reseptejä</a> tai&nbsp; 
				<a href="https://www.karanteeni.net/ominaisuudet" target="_blank">hissejä</a>. Palvelimen kehitys alkoi 10.6.2016 ja se avattiin
				16 päivää myöhemmin 26.6.2016. Palvelimen historia ulottuu kuitenkin jo lähes pari vuotta kauemmaksi.
			</p>
            <ChapterHeading startDate={"2014-15"} endDate={new Date(2016, 5, 26)}>Karanteenin juuret</ChapterHeading>
            <p>
                Karanteenin tarina alkaa itseasiassa vuodesta 2014 tai 2015. Jome hankkiutui ylläpitoon eräälle palvelimelle ja tapasi siellä
				Nuublesin, joka oli ollut mukana kyseissä ylläpitoporukassa jo aikaisemmin. Jonkin aikaa ylläpitohommia tällä kyseisellä palvelimella
				tehtiinkin, kunnes kyseisellä palvelimella olo ei ollut enää mukavaa. Osa ylläpidosta joutui häirinnän kohteeksi ja Nuubles lopettikin
				ylläpitohommat muiden joukossa kyseisellä palvelimella.
            </p>
            <p>
                Jomekin sai piakkoin tarpeekseen ylläpitohommista kyseisellä palvelimella ja päätyikin perustamaan Purolaakson nettikaverinsa JupsuTupsuHD:n kanssa. Myös Nuubles 
                eksyi mukaan Purolaakson ylläptioon. Aikaisemmalta palvelimelta mukaan tuli myös rakentaja PreGauris ja LeweXD. 
				Purolaakso ei kuitenkaan kestänyt kovin pitkään ja sen lopussa Jome päätyikin laittamaan Karanteenin entiselle omistajalle Emmazkille
				viestiä siitä, että olisiko hän kiinnostunut uuden palvelimen perustamisesta.
            </p>
			<p>
				Karanteenin palvelin ostettiinkin 10.6.2016. Emmazkin oli suunnitellut palvelimen pääidean jo etukäteen. Tämä tarkoitti sitä, että heti avaamispäivästä
				alkaen palvelimella alettiinkin keräämään peliaikaa. Aluksi Nuubles ei ollut tulossa mukaan Karanteenin ylläpitoon, mutta pian palvelimen avaamisen jälkeen hän kuitenkin 
                päätti kokeilla ylläpitohommia myös tällä uudella palvelimella. Karanteeni sai nimensä siitä ajatuksesta, että palvelimen kuuluisi ns. vangita pelaajat. Tästä
				tuleekin palvelimen kuvaus "Serveri, joka vangitsee sinut".				
			</p>
            <p>
                Pikkuhiljaa Karanteeniin alkoikin ilmestymään vakituisia pelaajia, joiden ansiosta palvelinta pystyttiin kehittämään eteenpäin. Nykyään palvelimella
				pelaa useita aktiivisia pelaajia ja pystymmekin kehittämään palvelinta itsevarmasti eteenpäin. Seuraava etappi kehityksessä onkin Bungeecord.
			</p>
			<p>
				Seuraavaksi käydään läpi palvelimen historian aikana olleet kartat.
			</p>
			<h2>Karttoja</h2>
            <ChapterHeading startDate={new Date(2016, 5, 26)} endDate={"joulukuu 2016"}>1. Kartta</ChapterHeading>
			<p>
				Karanteenin ensimmäinen kartta avattiin kesäkuussa 2016. Spawnista ei valitettavasti ole kovin montaa kuvaa tallessa. 
				Nuubles kuvasi spawnia Dark Souls -tyyliseksi linnakkeeksi. Spawnin päärakennuksen katolla komeili suuri lohikäärme. Ensimmäinen kartta aukesi
                Minecraftin versioon 1.10.
            </p>
            <p>
                <img src="./images/history/Spawn1-1.jpg" alt="Kuva ensimmäisestä spawnista" className="history-img"/>
            </p>
            <ul className='history-list'>
                <li><span className='list-item'>Ideointi</span>: PreGauris</li>
                <li><span className='list-item'>Rakentaja</span>: PreGauris, LeweXD</li>
            </ul>
            <ChapterHeading startDate={"tammikuun alku 2017"} endDate={"kesä 2017"}>2. Kartta</ChapterHeading>
            <p>
                Palvelimen toinen kartta aukesi tammikuun 2017 alussa versioon 1.11. Tarkempaa päivämäärää ei ole enää tiedossa ja luotettavin lähde aloituspäivämäärän arviointiin onkin
                Karanteenin Twitteriin uudenvuodenaattona <a href="https://twitter.com/Karanteeni/status/815134722653298688" target="_blank">laitettu tviitti</a>.
                Spawnia tehdessä inspiraationa on toiminut hyvin todennäköisesti Minecraftin viidakkotemppeli. 
            </p>
            <p>
            <img src="./images/history/Spawn2-1.png" alt="Kuva toisesta spawnista" className="history-img"/>
            </p>
            <ul className='history-list'>
                <li><span className='list-item'>Ideointi</span>: nikkedoy98</li>
                <li><span className='list-item'>Rakentaja</span>: nikkedoy98</li>
            </ul>
            <ChapterHeading startDate={"kesä 2017"} endDate={"joulukuun alku 2017"}>3. Kartta</ChapterHeading>
            <p>
                Survivalin kolmas kartta aukesi edeltävän kartan tavoin versioon 1.11 kesällä 2017. Tuohon aikaan pelanneet todennäköisesti muistaakin
                spawnin sen suurista puista, jotka olivat lähde monien heikkojen koneiden FPS-ongelmiin.
            </p>
            <p>
            <img src="./images/history/Spawn2-1.png" alt="Kuva toisesta spawnista" className="history-img"/>
            </p>
            <ul className='history-list'>
                <li><span className='list-item'>Ideointi</span>: nikkedoy98</li>
                <li><span className='list-item'>Rakentaja</span>: nikkedoy98, PreGauris</li>
            </ul>
            <Swiper
                pagination={{
                    clickable: true
                }}
                navigation={true}
                loop={true}
                modules={[Pagination, Navigation]}
                autoplay={true}
                rewind={true}
                className="history-swiper"
            >
                <SwiperSlide><img src="./images/history/example.jpg" alt="Kukkia pellolla, näin laitetaan kuva ja alt teksti jos se ei lataudu tai joku käyttää TTS" /></SwiperSlide>
                <SwiperSlide><img src="./images/history/example.jpg" alt="Kukkia pellolla, näin laitetaan kuva ja alt teksti jos se ei lataudu tai joku käyttää TTS" /></SwiperSlide>
                <SwiperSlide><img src="./images/history/example.jpg" alt="Kukkia pellolla, näin laitetaan kuva ja alt teksti jos se ei lataudu tai joku käyttää TTS" /></SwiperSlide>
                <SwiperSlide><img src="./images/history/example.jpg" alt="Kukkia pellolla, näin laitetaan kuva ja alt teksti jos se ei lataudu tai joku käyttää TTS" /></SwiperSlide>
            </Swiper>
			<p>
            <br/><br/>
			Ilman seuraavia henkilöitä tätä sivua ei olisi saatu kasaan:
            </p>
            <ul>
                <li>Nuubles</li>
                <li>Koire</li>
                <li>Iita</li>
                <li>PreGauris</li>
            </ul>
        </Layout>
    )
}

export default Historia
