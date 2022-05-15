import React from 'react'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'

const Historia = () => {
    return (
        <Layout
            title="Karanteenin historia"
            description="Historian Karanteenin alusta sen uusimpiin päiviin"
        >
            <Heading heading="Karanteenin historia" lead="Historia alusta loppuun" />
            <p>
                Täl taval kirjottamal saat tehtyy kappaleita, käytännössä yks kappale on aina &lt;p&gt; tagien välissä.
                HTML ei välitä rivivaihdoista vaan vaihtaa ne kaikki välilyönteihin, ja jos välilyöntejä on useampi
                ne on kaikki tiivistetty yhteen (kaikki whitespace -&gt; 1 space)
                <img src="./images/history/example.jpg" alt="Kukkia pellolla, näin laitetaan kuva ja alt teksti jos se ei lataudu tai joku käyttää TTS" />
                (poista tää pic sit tuolt /images/history/ kansiost)
            </p>
            <h2>Kappaleelle saa lisättyä titlen &lt;h2&gt; tagilla</h2>
            <p>
                Kappale jolla on yllä oleva title uwu. Muista että jos haluaa linkkejä niin ne saa
                lisättyä <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">tällä tavalla</a>
            </p>
        </Layout>
    )
}

export default Historia
