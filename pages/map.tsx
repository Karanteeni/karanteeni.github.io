import React from 'react'
import Layout from '../components/layout/layout'
import Redirect from '../components/redirect'

const Dynmap = () => {
    return (
        <Layout title="Kartta" contained={false} description="Karanteeni palvelimen dynmap verkossa">
            <iframe width="100%" height="100%" className='borderless' src="http://map.karanteeni.net" title="Karanteeni dynmap"></iframe>
            <Redirect text="Avaa omalla sivullaan" url="http://map.karanteeni.net/" />
        </Layout>
    )
}

export default Dynmap
