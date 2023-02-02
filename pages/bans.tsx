import React from 'react'
import Layout from '../components/layout/layout'
import Redirect from '../components/redirect'

const Bans = () => {
    return (
        <Layout
            title="Hyvä tietää"
            description="Karanteeni on vuodesta 2016 asti toiminut suomalainen Minecraft palvelin. Karanteenin alkuperäiset perustajat ovat Emmazki, Jomeee ja
            Nuubles, joista Jomeee ja Nuubles ovat vielä aktiivisina pyörimässä. Palvelimella keskeisin pelimuoto on omilla ominaisuuksilla paranneltu Survival.
            Palvelimelle on palaamassa Creative ja erinäköiset minipelit."
            contained={false}
        >
            <iframe className='borderless' width="100%" height="100%" src='http://bans.karanteeni.net/' title='Karanteeni bannit sivusto upotettuna'></iframe>
            <Redirect text="Avaa omalla sivullaan" url="http://bans.karanteeni.net/" />
        </Layout>
    )
}

export default Bans
