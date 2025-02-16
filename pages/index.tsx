import React from 'react'

import Link from 'next/link'
import { GetStaticProps } from 'next'

import { getPostData, getSortedPostsData } from '../lib/posts'

import Date from '../components/date'
import Layout from '../components/layout/layout'
import ServerStatus from '../components/home/serverstatus'
import VoteButtons from '../components/home/votebuttons'
import Post from '../components/post'

export default function Home({
    visiblePost,
    olderPosts
}: {
    visiblePost: {
        date: string
        title: string
        id: string
        contentHtml: string
    }
    olderPosts: {
        date: string
        title: string
        id: string
    }[]
}) {
    return (
        <Layout home description="Karanteeni on suomalainen minecraft palvelin.">
            <div className="home-grid">
                <div>
                    <section>
                        <ServerStatus />
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
                                <li className="list-item" key={id}>
                                    <Link href={`/julkaisut/${id}`}>
                                        {title}
                                    </Link>

                                    <small className="secondary-color">
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

    return {
        props: {
            visiblePost,
            olderPosts
        }
    }
}
