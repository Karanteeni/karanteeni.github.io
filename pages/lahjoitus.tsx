import Head from 'next/head'
import React from 'react'
import Heading from '../components/layout/heading'
import Layout, { siteTitle } from '../components/layout/layout'
import Modal from '../components/modal'
import donators from '../data/donators.json'
import useMediaQuery from '../lib/useMediaquery'

interface Donator {
    date: string
    name: string
    amount: string
    heart: string
}

// Forces zeroes before single number date parts
const getDateParts = (d: string): string[] => {
    let dateParts = d.split('.')
    return dateParts.map((part) => part.padStart(2, '0'))
}

const TableRow = ({ donator, width }: { donator: Donator; width: number }) => {
    let dateParts = getDateParts(donator.date)
    let dateString = dateParts.join('.')

    return (
        <tr>
            <th>{dateString}</th>
            <td>{donator.name}</td>
            <td>{donator.amount}</td>
            <td>{donator.heart}</td>
        </tr>
    )
}

export default function Lahjoitus() {
    const [width] = useMediaQuery()

    return (
        <Layout
            className="lahjoitus"
            title="Lahjoittaminen"
            description="Tue karanteenia lahjoittamalla! Palvelin maksetaan täysin omilla rahoilla, pienetkin lahjoitukset ovat erittäin tervetulleita."
        >
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Modal title="Lahjoitukset">
                <p>
                    Koska serveri maksetaan täysin omilla rahoilla, pienetkin lahjoitukset ovat erittäin tervetulleita.
                </p>
                <p>
                    Jos haluaisit lahjoittaa, voit lahjoittaa suoraan{' '}
                    <b>
                        <a href="https://www.paypal.me/karanteeni" target="_blank" rel="noreferrer">
                            Karanteenin PayPaliin
                        </a>
                    </b>
                    . Voit myös ottaa Discordissa yhteyttä Jomeen, niin voimme katsoa kuinka voit tehdä mahdollisen
                    lahjoituksen. Helpoimmat tavat on Hostille maksu ja PayPal.{' '}
                    <b>Muistathan kertoa lahjoittaessasi discord/minecraft nimesi.</b>
                </p>
                <p>
                    Kaikki vähintään 10 € lahjoittavat saavat Discordiin sekä palvelimelle lahjoittaja roolin. Roolilla
                    aukeaa kyky asettaa nimeen{' '}
                    <span className="rgb">
                        <span className="offset1">R</span>
                        <span className="offset2">G</span>
                        <span className="offset3">B</span>
                    </span>{' '}
                    värejä, kyltteihin värejä värikoodeilla, taikamattoon uusi partikkeli, sekä tabiin näkyvyyttä
                    (värikkäät hakasulkeet). Ominaisuuksia tulee ajan kanssa lisää, ja ne aukeavat automaattisesti myös
                    kaikille vanhoille lahjoittajille.
                </p>
            </Modal>
            <div className="lahjoitusdokumentti">
                <Heading
                    heading="Lahjoittajat"
                    lead="Tälle sivulle on kerätty lahjoittajat. Kiitos tuesta ja uskollisuudestanne! ♥"
                />
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
                                    <TableRow key={i} donator={donator} width={width} />
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}
