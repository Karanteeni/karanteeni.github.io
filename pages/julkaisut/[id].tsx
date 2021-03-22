import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout/layout'
import Post from '../../components/post'
import Date from '../../components/date'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts'

import utilStyles from '../../styles/utils.module.css'

export default function SeparatedPost({
    postData,
    otherPosts
}: {
    postData: { title: string; date: string; contentHtml: string }
    otherPosts: { title: string; date: string; id: string }[]
}) {
    return (
        <Layout title={postData.title} className="post">
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div>
                <section>
                    <Post postData={postData} />
                </section>
                <section>
                    {/* <ServerEvents events={serverEvents} /> */}
                    <h3>Uusimmat julkaisut</h3>
                    {otherPosts.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/julkaisut/${id}`}>
                                <a>{title}</a>
                            </Link>

                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                    <Link href="/julkaisut">Kaikki julkaisut</Link>
                </section>
            </div>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const allPostsData = getSortedPostsData()
    const newestPosts = allPostsData.slice(0, 6)

    const postData = await getPostData(params.id as string)
    return {
        props: {
            postData,
            otherPosts: newestPosts
        }
    }
}
