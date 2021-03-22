import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'
import ReactTooltip from 'react-tooltip'

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Rank = (props) => {
    return (
        <div className="rank card">
            <div className={'rank-card-body ' + props.color}>
                <h2 className={'card-title'}>
                    <span className={props.bgColor + ' rank-name-text'}>{props.name}</span> <span className="time">({props.time})</span>
                </h2>
                {props.children}
            </div>
        </div>
    )
}

const Body = ({ children }) => {
    return (
        <table className="table table-striped table-dark">
            <tbody>{children}</tbody>
        </table>
    )
}

const CommandRow = (props) => {
    return <tr>{props.children}</tr>
}

const Command = (props) => {
    const info = props.info

    if (info) {
        return (
            <td>
                {props.command}{' '}
                <span className="rank-tooltip" data-tip={props.title} data-toggle="tooltip" data-placement="right" title={props.title}>
                    <FontAwesomeIcon className="icon" icon={faInfoCircle} />
                </span>
                <ReactTooltip />
            </td>
        )
    }
    return <td>{props.command}</td>
}

const SetHome = (props) => {
    return <Command info title={props.count + ' kpl'} command="/sethome" />
}

const Others = (props) => {
    return (
        <p>
            {props.text} &nbsp;
            {props.tip && (
                <>
                    <span data-tip={props.tip} data-toggle="tooltip" data-placement="right" title={props.tip}>
                        <FontAwesomeIcon className="icon" icon={faInfoCircle} />
                    </span>
                    <ReactTooltip />
                </>
            )}
        </p>
    )
}

const ElotonRaihnas = (props) => {
    return (
        <div className="rank-grid">
            <Rank name="Eloton" time="0h" color="c-eloton ">
                <Body>
                    <CommandRow>
                        <SetHome count="1" />
                        <Command info={false} />
                    </CommandRow>
                </Body>
                <div className="rank-others">
                    <h3>Muuta:</h3>
                    <p>
                        Kaikilla pelaajilla olevat komennot ja toiminnot löytyvät <a href="ominaisuudet">ominaisuudet</a> sivulta.
                    </p>
                </div>
            </Rank>
            <Rank name="Raihnas" time="5h" color="c-raihnas ">
                <Body>
                    <CommandRow>
                        <SetHome count="2" />
                        <Command info={false} command="/workbench" />
                    </CommandRow>
                    <CommandRow>
                        <Command info={false} command="/hat" />
                        <Command info={false} command="/calculate" />
                    </CommandRow>
                </Body>
            </Rank>
        </div>
    )
}

const SisukasParantuva = (props) => {
    return (
        <div className="rank-grid">
            <Rank name="Sisukas" time="1d" color="c-sisukas ">
                <Body>
                    <CommandRow>
                        <SetHome count="6" />
                        <Command info={false} command="/near" />
                    </CommandRow>
                    <CommandRow>
                        <Command
                            info
                            title="Taikamatto, 5x5 kokoinen lasimatto allasi, jolla voit leijua ilmassa, sekä lentää."
                            command="/mc"
                        />
                        <Command info title="Suunnittele oma taikamattosi!" command="/mc design" />
                    </CommandRow>
                    <CommandRow>
                        <Command info={false} command="/enderchest" />
                        <Command info={false} />
                    </CommandRow>
                </Body>
                <div className="rank-others">
                    <h3>Muuta:</h3>
                    <p>
                        Kyky käyttää ja craftata <a href="/recipes#builderswand">Builders Wand</a>.
                    </p>
                    <Others text="Kaksi uutta väriä taikamattoon (mc)" tip="Vaalean harmaa (oletus) ja läpinäkyvä" />
                </div>
            </Rank>
            <Rank name="Parantuva" time="5d" color="c-parantuva ">
                <Body>
                    <CommandRow>
                        <SetHome count="8" />
                        <Command info={false} command="/feed" />
                    </CommandRow>
                    <CommandRow>
                        <Command
                            info
                            title="Nimen täytyy olla samankaltainen Minecraft nimesi kanssa tunnistautumisen vuoksi."
                            command="/nick"
                        />
                        <Command info title="Voit teleportata koordinaatteihin." command="/tp <x> <y> <z>" />
                    </CommandRow>
                </Body>
                <div className="rank-others">
                    <h3>Muuta:</h3>
                    <Others text="Neljä uutta väriä taikamattoon (mc)" tip="Valkoinen, harmaa, vaalean harmaa ja sininen" />
                    <Others text="Kyky hakata spawnereita ilman Silk Touchia" tip="Tarvitset silti hakun kerätäksesi sen!" />
                </div>
            </Rank>
        </div>
    )
}

const ImmuuniParantaja = (props) => {
    return (
        <div className="rank-grid">
            <Rank name="Immuuni" time="10d" color="c-immuuni ">
                <Body>
                    <CommandRow>
                        <SetHome count="12" />
                        <Command info title="Estää pelaajien teleporttipyynnöt ja teleporttaukset" command="/tptoggle" />
                    </CommandRow>
                    <CommandRow>
                        <Command info={false} command="/fly" />
                        <Command info title="Nimeää kädessäsi olevan esineen!" command="/nimeä" />
                    </CommandRow>
                    <CommandRow>
                        <Command info title="Vaihtaa spawnerin tyyppiä. Ota spawner käteen kun suoritat komentoa." command="/spawner" />
                        <Command info={false} command="/tp <pelaaja>" />
                    </CommandRow>
                </Body>
                <div className="rank-others">
                    <h3>Muuta:</h3>
                    <Others text="Kaksi uutta väriä taikamattoon (mc)" tip="Keltainen ja ruskea" />
                </div>
            </Rank>
            <Rank name="Parantaja" time="30d" color="c-parantaja ">
                <Body>
                    <CommandRow>
                        <SetHome count="16" />
                        <Command info={false} />
                    </CommandRow>
                </Body>
                <div className="rank-others">
                    <h3>Muuta:</h3>
                    <Others
                        text="Uusia tapoja nimetä tavaroita /nimeä komennolla"
                        tip="Lihavointi, kursivointi, randomisointi ja alleviivaus"
                    />
                    <Others text="Kaksi uutta väriä taikamattoon (mc)" tip="Lime ja musta" />
                </div>
            </Rank>
        </div>
    )
}

const NekroKuolematon = (props) => {
    return (
        <div className="rank-grid">
            <Rank name="Nekromantikko" time="60d" color="c-nekromantikko ">
                <Body>
                    <CommandRow>
                        <SetHome count="18" />
                        <Command info title="Kyky tarkastella blockeja" command="/co i" />
                    </CommandRow>
                </Body>
                <div className="rank-others">
                    <h3>Muuta:</h3>
                    <Others text="Kyky asettaa täys RGB värillinen nick." tip="Syntaksilla &amp;#rrggbb" />
                    <Others text="Nekromatikkoja ei voi hiljentää /ignore komennolla." />
                    <Others text="Kaksi uutta väriä taikamattoon (mc)" tip="Magenta ja punainen" />
                    <Others text="Lisäpalikoita taikamattoon (mc)" tip="jääblock" />
                </div>
            </Rank>
            <Rank name="Kuolematon" time="100d" color="c-kuolematon ">
                <Body>
                    <CommandRow>
                        <SetHome count="18" />
                        <Command info={false} />
                    </CommandRow>
                </Body>
                <div className="rank-others">
                    <h3>Muuta:</h3>
                    <Others text="Kuusi uutta väriä taikamattoon (mc)" tip="Pinkki, syaani, purppura, oranssi, vihreä ja vaalean sininen" />
                    <Others text="Lisäpalikka taikamattoon" tip="Barrier block" />
                </div>
            </Rank>
        </div>
    )
}

const RankTables = (props) => {
    return (
        <div>
            <ElotonRaihnas />
            <SisukasParantuva />
            <ImmuuniParantaja />
            <NekroKuolematon />
        </div>
    )
}

const Rankit = () => {
    return (
        <Layout title="Rankit" description="Karanteenin pelaaja-arvot">
            <Heading heading="Rankit" lead="Tiedot Karanteenin rankeista" />

            <p className="text-left text-lg-justify">
                Karanteenissa on kahdeksan peliaikaan perustuvaa rankkia, jotka tuovat <b>lisäominaisuuksia</b> ajan kuluessa. Rankki nousee
                automaattisesti, kun vaadittu peliaika on saavutettu. Peliaika ei keräänny afkatessa. Peliajan näkee komennolla{' '}
                <code>/peliaika</code>, ja toisten pelaajien <code>/peliaika pelaajan_nimi</code>.
            </p>
            <p className="text-left text-lg-justify">
                Karanteenissa kaikilla pelaajilla on rankkiominaisuuksien lisäksi käytössään muita komentoja ja toimintoja. Niistä voit
                lukea <a href="ominaisuudet">täällä</a>.
            </p>
            <p className="text-left text-lg-justify">
                Alla nähtävissä kunkin rankin peliaikavaatimus sekä avautuvat oikeudet. Jos joku komento askarruttaa, niin kysy rohkeasti
                ylläpidolta!
            </p>
            <RankTables />
        </Layout>
    )
}

export default Rankit
