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
    description,
    contained = true
}: {
    children: React.ReactNode
    home?: boolean
    className?: string
    title?: string
    description?: string
    contained?: boolean
}) {
    return (
        <div>
            <Head>
                <meta name="theme-color" content="#ffdd00" />
                <meta name="apple-mobile-web-app-status-bar" content="#ffdd00" />
                <meta name="og:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />

                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

                <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>

                {description && (
                    <>
                        <meta name="og:description" content={description} />
                        <meta name="description" content={description} />
                    </>
                )}
            </Head>
            {home && <HomeHero />}
            <Navbar />

            {contained ?
                <div className="main-container">
                    <main className={`${home ? 'home ' : ''}${className ? className + ' ' : ''}`}>{children}</main>{' '}
                </div>
            :
                <div className='full-size'>{children}</div>
            }

            <Footer home={home} />
        </div>
    )
}
