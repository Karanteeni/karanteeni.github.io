import { GetStaticProps } from 'next'
import React from 'react'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'

import Layout from '../components/layout/layout'
import Date from '../components/date'
import Link from 'next/link'
import Heading from '../components/layout/heading'

const Julkaisut = ({ allPostsData }) => {
    return (
        <Layout title="Julkaisut" description="Karanteenin 'blogi'julkaisut">
            <Heading heading="Julkaisut" />
            <ul>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/julkaisut/${id}`}>
                            <a>{title}</a>
                        </Link>

                        <small className={utilStyles.lightText}>
                            <Date dateString={date} />
                        </small>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}
export default Julkaisut

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()

    return {
        props: {
            allPostsData
        }
    }
}
