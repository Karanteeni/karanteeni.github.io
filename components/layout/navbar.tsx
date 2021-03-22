import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
    faThumbsUp,
    faPuzzlePiece,
    faHammer,
    faQuestionCircle,
    faEnvelope,
    faInfo,
    faExclamation,
    faMedal,
    faUsers,
    faScroll,
    faGift,
    faFileAlt,
    faHome
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = (props) => {
    return <FontAwesomeIcon className="icon" icon={props.icon} />
}

const NavLink = (props) => {
    return (
        <li className="nav-item">
            <Link href={props.url}>
                <a className="nav-link">
                    <Icon icon={props.icon} />
                    {props.title}
                </a>
            </Link>
        </li>
    )
}

const DropDownCollapseMenu = ({ selected, setSelected, itemIndex, icon, title, children }) => {
    let show = selected === itemIndex
    let className = show ? 'dropdown-menu collapse show' : 'dropdown-menu collapse'
    return (
        <li className="nav-item dropdown">
            <div
                className="nav-link dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={show}
                onClick={() => setSelected(show ? null : itemIndex)}
            >
                <Icon icon={icon} />
                {title}
            </div>
            <div className={className} aria-labelledby="navbarDropdown">
                <h4 className="dropdown-header">{title}</h4>
                {children}
            </div>
        </li>
    )
}

const DropDownItem = (props) => {
    return (
        <Link href={props.url}>
            <a className="dropdown-item">
                <Icon icon={props.icon} />
                {props.title}
            </a>
        </Link>
    )
}

const Nav = (props) => {
    const [windowDimension, setWindowDimension] = useState(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        setWindowDimension(window.innerWidth)
    }, [])

    useEffect(() => {
        function handleResize() {
            setWindowDimension(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const isMobile = windowDimension <= 1000

    return (
        <nav className={'navbar ' + (isMobile ? 'mobile' : '') + (show ? ' show' : '')}>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-expanded={show}
                aria-label="Toggle navigation"
                onClick={() => setShow(!show)}
            >
                <div className="navbar-toggler-icon burger burger-rotate">
                    <div className="burger-lines"></div>
                </div>
            </button>
            <ul className="nav">{props.children}</ul>
        </nav>
    )
}

const Navbar = () => {
    const [selectedDropdown, setSelectedDropdown] = useState(null)
    return (
        <Nav>
            <NavLink icon={faHome} url="/" title="Etusivu" />

            <DropDownCollapseMenu
                selected={selectedDropdown}
                setSelected={setSelectedDropdown}
                title="Yleistietoa"
                icon={faInfo}
                itemIndex={1}
            >
                <DropDownItem icon={faThumbsUp} url="/hoks" title="Hyvä tietää!" />
                <DropDownItem icon={faPuzzlePiece} url="/ominaisuudet" title="Ominaisuudet" />
                <DropDownItem icon={faHammer} url="/reseptit" title="Custom reseptit" />
                <DropDownItem icon={faQuestionCircle} url="/ukk" title="UKK" />
                <DropDownItem icon={faEnvelope} url="/julkaisut" title="Julkaisut" />
            </DropDownCollapseMenu>

            <NavLink icon={faExclamation} url="/saannot" title="Säännöt" />

            <NavLink icon={faMedal} url="/rankit" title="Rankit" />

            <DropDownCollapseMenu
                selected={selectedDropdown}
                setSelected={setSelectedDropdown}
                title="Ylläpito"
                icon={faUsers}
                itemIndex={2}
            >
                <DropDownItem icon={faFileAlt} url="/yllapito" title="Ylläpito" />
                <DropDownItem icon={faFileAlt} url="/yphaku" title="Hae ylläpitoon!" />
            </DropDownCollapseMenu>

            <NavLink icon={faGift} url="/lahjoitus" title="Lahjoitukset" />

            <DropDownCollapseMenu
                selected={selectedDropdown}
                setSelected={setSelectedDropdown}
                title="Hakemukset"
                icon={faScroll}
                itemIndex={3}
            >
                <DropDownItem icon={faFileAlt} url="/yphaku" title="Hae ylläpitoon!" />
                <DropDownItem icon={faFileAlt} url="/unban" title="Unban-hakemus" />
            </DropDownCollapseMenu>
        </Nav>
    )
}

export default Navbar
