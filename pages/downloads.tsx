import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'
import downloads from '../data/downloads.json'

const Downloads = () => {

    return (
        <Layout
            title="Ladattavat tiedostot"
            description="Täältä voit ladata Karanteenin resursseja, kuten esimerkiksi Karanteenin vanhoja karttoja"
        >
            <Heading
                heading="Ladattavat tiedostot"
                lead='Täältä voit ladata Karanteenin resursseja, kuten esimerkiksi Karanteenin vanhoja karttoja'
            />
            { downloads && downloads.map(section => (<section>
                <h2>{section.heading}</h2>
                <div>
                    {section.targets.map(target => (
                        <a className="download-link" href={target.url} target='_blank'>
                            {target.image && <img src={target.image}></img>}
                            {target.text}
                        </a>
                    ))}
                </div>
            </section>))}
        </Layout>
    )
}

export default Downloads
