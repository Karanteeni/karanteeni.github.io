import React from 'react'

import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import utilStyles from '../styles/utils.module.css'
import { getPostData, getSortedPostsData } from '../lib/posts'

import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout/layout'
import ServerStatus from '../components/home/serverstatus'
import VoteButtons from '../components/home/votebuttons'
import Post from '../components/post'

import serverEvents from '../data/serverevents.json'

export default function Home({ visiblePost, olderPosts, serverStatus }) {
    return (
        <Layout home description="Karanteeni on suomalainen minecraft palvelin.">
            <div className="home-grid">
                <div>
                    <section>
                        <ServerStatus status={serverStatus} />
                    </section>
                    <section>
                        <VoteButtons />
                    </section>
                </div>
                <div className="home-grid-main">
                    <section>
                        <Post postData={visiblePost} />
                    </section>
                </div>
                <div>
                    <section>
                        <h3>Vanhempia julkaisuja</h3>
                        <ul className="posts">
                            {olderPosts.map(({ id, date, title }) => (
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
                        <Link href="/julkaisut">Kaikki julkaisut</Link>
                    </section>
                </div>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()

    const visiblePost = await getPostData(allPostsData[0].id)
    const olderPosts = allPostsData.slice(1, 6)

    const res = await fetch(`https://api.mcsrvstat.us/2/95.217.120.173`)
    const data = await res.json()

    return {
        props: {
            visiblePost,
            olderPosts,
            serverStatus: data
        }
    }
}
