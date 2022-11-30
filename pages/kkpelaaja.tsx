import Head from 'next/head'
import React from 'react'
import Heading from '../components/layout/heading'
import Layout, { siteTitle } from '../components/layout/layout'
import Modal from '../components/modal'
import donators from '../data/moplayers.json'
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
            <td>{donator.heart}</td>
        </tr>
    )
}

export default function Lahjoitus() {
    const [width] = useMediaQuery()

    return (
        <Layout
            className="lahjoitus"
            title=""
            description=""
        >
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="lahjoitusdokumentti">
                <Heading
                    heading="Kuukauden pelaajat"
                    lead="Tälle sivulle on kerätty kuukauden pelaajat.<br>Kiitos tuesta ja uskollisuudestanne! ♥<br>Voit saada kuukauden pelaajan olemalla aktiivinen, auttamalla ihmisiä, sekä yleisesti olemalla positiivinen. Kuukauden pelaajan on oltava tasoltaan vähintään Sisukas.<br>Emme välttämättä valitse kuukauden pelaajaa joka kuukausi. Tämän tason mukana tulee myös joitain muitakin palkintoja"
                />
                <div className="lahjoitustablewrapper">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Kuukausi</th>
                                <th scope="col">Nimi</th>
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
