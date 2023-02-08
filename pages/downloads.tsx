import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'
import downloads from '../data/downloads.json'

const DownloadLink = ({url, image, text}) => {
    if(url) {
    return <a className="download-link" href={url} target='_blank'>
            {image && <img src={image}></img>}
            {text}
        </a>
    } else {
        return <span className="download-link missing">
            {image && <img src={image}></img>}
            {text}
        </span>;
    }
}

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
                <div className="download-link-container">
                    {section.targets.map(target =>
                        <DownloadLink url={target.url} image={target.image} text={target.text}/>
                    )}
                </div>
            </section>))}
        </Layout>
    )
}

export default Downloads
