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
        <h2>{children}</h2>
        <span><b>{startText} - {endText}</b></span>
    </div>;
}

const Historia = () => {
    return (
        <Layout
            title="Historia"
            description="Historian Karanteenin alusta sen uusimpiin päiviin"
        >
            <Heading heading="Karanteenin historia" lead="Historia alusta loppuun" />
            <ChapterHeading startDate={new Date(2014, 4, 28)} endDate={new Date(2016, 8, 27)}>Perusohjeet kirjotuksee</ChapterHeading>
            <p>
                Täl taval kirjottamal saat tehtyy kappaleita, käytännössä yks kappale on aina &lt;p&gt; tagien välissä.
                HTML ei välitä rivivaihdoista vaan vaihtaa ne kaikki välilyönteihin, ja jos välilyöntejä on useampi
                ne on kaikki tiivistetty yhteen (kaikki whitespace -&gt; 1 space).
            </p>
            <p>
                Kappaleit voi olla useempi peräkkäi, se on sama asia ku docsis painais vaa enter.
            </p>
            <p>
                Vähänniiku täl taval, voi kattoo milt tää näyttää tol nettisivul
                <img src="./images/history/example.jpg" className="history-img" alt="Kukkia pellolla, näin laitetaan kuva ja alt teksti jos se ei lataudu tai joku käyttää TTS" />
                (poista tää pic sit tuolt /images/history/ kansiost)
            </p>
            <ChapterHeading startDate={"alkupvm"} endDate={"loppupvm"}>Kappaleelle saa lisättyä titlen &lt;ChapterHeading&gt; tagilla</ChapterHeading>
            <p>
                Lisäsin support myös siihen että pvm sijaan voi käyttää myös tekstei startDate ja endDate kohissa
                chapterissa. Jos haluaa tänhetkisen päivän ni jättää endDate pois niiku seuraavas chapteris.
                Käytä mieluummin aina iha tuota new Date() juttuu mitä muissa käytetty ku se formatoi pvm
                samal taval jokasee. ei tarvi olla samaa tyyppiä molempie (start voi olla date ja end string esim)
            </p>
            <ChapterHeading startDate={new Date(2016, 8, 28)}>Linkkien lisäys</ChapterHeading>
            <p>
                Kappale jolla on yllä oleva title uwu. Muista että jos haluaa linkkejä niin ne saa
                lisättyä <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">tällä tavalla</a>
                Samate jos haluu boldaa tekstii ni se onnistuu <b>täl taval</b> ja italics <i>täl taval</i>
            </p>
            <p>
                Jos tulee tarvetta ylimääräselle muotoilulle tai pöydille ni nakkaa masalle viestii
                ni masa auttaa sit sen verra mitä pystyy. en usko tosin et näit formatointei enempää tulee todnäk
                tarttee tosin &gt;w&lt;
            </p>

            <ul className='history-list'>
                <li><span className='list-item'>Rakentaja</span>: PreGauris, Lewe</li>
                <li><span className='list-item'>Pippeli</span>: masa</li>
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
        </Layout>
    )
}

export default Historia
