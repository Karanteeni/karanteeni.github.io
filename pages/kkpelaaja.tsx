import Head from 'next/head'
import React from 'react'
import Heading from '../components/layout/heading'
import Layout, { siteTitle } from '../components/layout/layout'
import Modal from '../components/modal'
import monthplayers from '../data/moplayers.json'
import useMediaQuery from '../lib/useMediaquery'

interface MonthPlayer {
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

const TableRow = ({ monthplayer, width }: { monthplayer: MonthPlayer; width: number }) => {
    let dateParts = getDateParts(monthplayer.date)
    let dateString = dateParts.join('.')

    return (
        <tr>
            <th>{dateString}</th>
            <td>{monthplayer.name}</td>
            <td>{monthplayer.heart}</td>
        </tr>
    )
}

export default function Kiitos() {
    const [width] = useMediaQuery()

    return (
        <Layout
            className=""
            title=""
            description=""
        >
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="">
                <Heading
                    heading="Kuukauden pelaajat"
                    lead="Tälle sivulle on kerätty kuukauden pelaajat. Kiitos tuesta ja uskollisuudestanne! ♥"
                />
                <div className="kk-page-info">
                    <p>
                        Kuukauden pelaaja on yksi Karanteenin alitasoista, jonka voi kukin pelaaja saada vain kerran.
                        Kuukauden pelaajan voi saada:
                    </p>
                    <ul>
                        <li>
                            Olemalla aktiivinen palvelimella.
                        </li>
                        <li>
                            Auttamalla toisia pelaajia.
                        </li>
                        <li>
                            Luomalla positiivista ilmapiiriä.
                        </li>
                        <li>
                            Olemalla tasoltaan vähintään Sisukas.
                        </li>
                    </ul>
                    <p>
                        Emme välttämättä valikoi uutta kuukauden pelaajaa joka kuukausi.
                    </p>
                </div>
                <div className="kiitostablewrapper kiitosdokumentti">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Kuukausi</th>
                                <th scope="col">Nimi</th>
                                <th scope="col">♥</th>
                            </tr>
                        </thead>
                        <tbody>
                            {monthplayers &&
                                monthplayers.map((monthplayer: MonthPlayer, i) => (
                                    <TableRow key={i} monthplayer={monthplayer} width={width} />
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}
