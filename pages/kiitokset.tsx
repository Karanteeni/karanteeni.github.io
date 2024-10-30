import Head from 'next/head'
import React from 'react'
import Heading from '../components/layout/heading'
import Layout, { siteTitle } from '../components/layout/layout'
import thanks from '../data/thanks.json'
import useMediaQuery from '../lib/useMediaquery'

interface Thanked {
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

const TableRow = ({ thanked, width }: { thanked: Thanked; width: number }) => {
    let dateParts = getDateParts(thanked.date)
    let dateString = dateParts.join('.')

    return (
        <tr>
            <th>{dateString}</th>
            <td>{thanked.name}</td>
            <td>{thanked.amount}</td>
            <td>{thanked.heart}</td>
        </tr>
    )
}

export default function Kiitos() {
    const [width] = useMediaQuery()

    return (
        <Layout
            className="kiitos"
            title="Kiitokset"
            description="Karanteenia tukeneiden henkilöiden lista. Isot kiitokset <3"
        >
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="kiitosdokumentti">
                <Heading
                    heading="Kiitokset"
                    lead="Tälle sivulle on kerätty kaikki palvelinta tukeneet henkilöt. Kiitos tuesta ja uskollisuudestanne! ♥ Lahjoituksia ei oteta vastaan"
                />
                <div className="kiitostablewrapper">
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
                            {thanks &&
                                thanks.map((thanked: Thanked, i) => (
                                    <TableRow key={i} thanked={thanked} width={width} />
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}
