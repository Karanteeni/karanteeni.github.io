import Head from 'next/head'

import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import HomeHero from '../home/homehero'

export const siteTitle = 'Karanteeni'
export default function Layout({
    children,
    home,
    className,
    title,
    description
}: {
    children: React.ReactNode
    home?: boolean
    className?: string
    title?: string
    description?: string
}) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                {description && (
                    <>
                        <meta name="og:description" content={description} />
                        <meta name="description" content={description} />
                    </>
                )}

                <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
                <meta name="og:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
            </Head>
            {home && <HomeHero />}
            <Navbar />
            <div className="main-container">
                <main className={`${home ? 'home ' : ''}${className ? className + ' ' : ''}`}>{children}</main>{' '}
            </div>

            <Footer />
        </div>
    )
}
