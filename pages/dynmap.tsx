import React from 'react'
import Layout from '../components/layout/layout'

const Dynmap = () => {
    return (
        <Layout title="Dynmap" description="Karanteeni palvelimen dynmap verkossa">
            <div className="dynmap">
                <iframe src="http://map.karanteeni.net" title="Karanteeni dynmap"></iframe>
                <a href="http://map.karanteeni.net" target="_blank">
                    Avaa Dynmap kokoruudun tilassa
                </a>
            </div>
        </Layout>
    )
}

export default Dynmap
