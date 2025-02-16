import Link from 'next/link'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'

export default function Custom404() {
    return (
        <Layout className="not-found">
            <Heading heading="Ooferippington" lead="-Nuubles" />
            <div className="not-found-back">
                <Link href="/">
                    Takaisin alkuun
                </Link>
            </div>

            <img src="/images/profile.png" />
        </Layout>
    )
}
