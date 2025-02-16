import React, { PropsWithChildren } from 'react'
import Heading from '../components/layout/heading'
import Layout from '../components/layout/layout'
import rules from '../data/rules.json'

import { faTimes, faExclamation, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnchorHeading from '../components/anchor'

const RuleContainer = ({ children }) => {
    return <div className="rule-container">{children}</div>
}

const Rule = ({ children }) => {
    return <div className="rule">{children}</div>
}

const RuleHeading = ({ children, id }: PropsWithChildren<{ id: string }>) => {
    return (
        <div className="rule-head">
            <AnchorHeading level={3} id={id} className="rule-heading">{children}</AnchorHeading>
        </div>
    )
}

const Content = ({ children }) => {
    return <div className="rule-content">{children}</div>
}

const Description = ({ children }) => {
    return (
        <div className="rule-specify">
            <p className="rule-specifier">{children}</p>
        </div>
    )
}

const Icon = ({ icon }) => {
    switch (icon) {
        case 'denied': {
            return (
                <div className="rule-icon-parent">
                    <div className="rule-icon denied">
                        <FontAwesomeIcon className="icon" icon={faTimes} />
                    </div>
                </div>
            )
        }
        case 'notice': {
            return (
                <div className="rule-icon-parent">
                    <div className="rule-icon notice">
                        <FontAwesomeIcon className="icon" icon={faExclamation} />
                    </div>
                </div>
            )
        }
        case 'allowed': {
            return (
                <div className="rule-icon-parent">
                    <div className="rule-icon accepted">
                        <FontAwesomeIcon className="icon" icon={faCheck} />
                    </div>
                </div>
            )
        }
        case 'important': {
            return (
                <div className="rule-icon-parent">
                    <div className="rule-icon keep-in-mind">
                        <FontAwesomeIcon className="icon" icon={faExclamation} />
                    </div>
                </div>
            )
        }
        default: {
            throw new Error('did not receive icon type')
        }
    }
}

const Saannot = () => {
    return (
        <Layout title="Säännöt" description="Karanteenin säännöt. Lue nämä ennen pelaamisen aloittamista.">
            <Heading heading="Karanteenin Säännöt" lead="Lue nämä huolella. Tietämättömyys ei ole syy hölmöilyyn!" />
            <div className="rules-introduction">
                <p className="rules-common-p">
                    Karanteenissa pääsee pitkälle jo pelkällä maalaisjärjellä, mutta palvelimelle on kuitenkin asetettu
                    säännöt, joiden puitteissa toimitaan.
                </p>
                <p className="rules-common-p">
                    Huomioi, että vaikka säännöissä ei välttämättä suoraan kiellettäisi jotain skenaariota, voi se silti
                    olla rangaistavaa.{' '}
                </p>
                <p className="rules-common-p">Jos olet epävarma jostakin, pyydä ylläpitoa selventämään.</p>
            </div>

            {rules &&
                rules.map((category) => {
                    const id = category.heading.toLowerCase().split(" ").join("_")
                    return (
                        <div>
                            <AnchorHeading level={2} id={id}>{category.heading}</AnchorHeading>
                            {category.ruleset.map((rule, i) => (
                                <RuleContainer>
                                    <Rule>
                                        <Icon icon={rule.icon} />
                                        <Content>
                                            <RuleHeading id={id.concat(`_${i}`)}>{rule.short}</RuleHeading>
                                            <Description>{rule.long}</Description>
                                        </Content>
                                    </Rule>
                                </RuleContainer>
                            ))}
                        </div>
                    )
                })}

            <div className="rules-epilogue">
                <p className="rules-common-p">
                    Sääntöjen rikkomisesta tulee aina seuraamuksia. Rikkeen vakavuuden mukaan voidaan pelaajalle antaa
                    varoituksia, väliaikaiset bannit tai ikuiset bannit.
                </p>
                <p className="rules-common-p">Kolmesta varoituksesta pelaaja saa automaattiset kahden viikon bannit ja kuudesta ikuiset.</p>
                <p className="rules-common-p">Varoitus säilyy pelaajalla 180 päivää, jonka jälkeen se vanhenee.</p>
                <p className="rules-common-p">
                    Huomioi, että vaikka säännöissä ei välttämättä suoraan kiellettäisi jotain skenaariota, voi se silti
                    olla rangaistavaa.{' '}
                </p>
            </div>
        </Layout>
    )
}

export default Saannot
