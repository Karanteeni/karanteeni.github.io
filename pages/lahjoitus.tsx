import Head from 'next/head'
import React from 'react'
import Heading from '../components/layout/heading'
import Layout, { siteTitle } from '../components/layout/layout'
import Modal from '../components/modal'
import donators from '../data/donators.json'

interface Donator {
    date: string
    name: string
    amount: string
    heart: string
}

export default function Lahjoitus() {
    return (
        <Layout
            title="Lahjoittaminen"
            description="Tue karanteenia lahjoittamalla! Palvelin maksetaan täysin omilla rahoilla, pienetkin lahjoitukset ovat erittäin tervetulleita."
        >
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Modal title="Lahjoitukset">
                <p>Koska serveri maksetaan täysin omilla rahoilla, pienetkin lahjoitukset ovat erittäin tervetulleita.</p>
                <p>
                    Jos haluaisit lahjoittaa, voit lahjoittaa sen suoraan{' '}
                    <b>
                        <a href="https://www.paypal.me/karanteeni">Karanteenin PayPaliin</a>
                    </b>{' '}
                    tai ota yhteyttä Discordissa Jome#7320, niin katsotaan kuinka voit lahjoituksen tehdä. Parhaat tavat ovat Paysafecard ja
                    PayPal. (<b>HUOM!</b> Lahjoittaessasi muista kertoa discord/minecraft nimesi)
                </p>
                <p>
                    Lahjoittajat saavat Discordiin lahjoittajaroolin, sekä palvelimelle kyvyn asettaa nimeen{' '}
                    <span className="rgb">
                        <span className="offset1">R</span>
                        <span className="offset2">G</span>
                        <span className="offset3">B</span>
                    </span>{' '}
                    värejä, kyltteihin värejä värikoodeilla, sekä tabiin näkyvyyttä (värikkäät hakasulkeet).
                </p>
            </Modal>
            <div className="lahjoitusdokumentti">
                <Heading heading="Lahjoittajat" lead="Tälle sivulle on kerätty lahjoittajat. Kiitos tuesta ja uskollisuudestanne! ♥" />
                <div className="lahjoitustablewrapper">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Pvm</th>
                                <th scope="col">Nimi</th>
                                <th scope="col">Summa</th>
                                <th scope="col">♥</th>
                            </tr>
                        </thead>
                        <tbody>
                            {donators &&
                                donators.map((donator: Donator, i) => (
                                    <tr key={i}>
                                        <th>{donator.date}</th>
                                        <td>{donator.name}</td>
                                        <td>{donator.amount}</td>
                                        <td>{donator.heart}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}
