import style from '../styles/admincard.module.css'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'

const AdminStrength = ({ children }: any) => {
    return (
        <p>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className={`${style['strength-bullet']}`} />
            {children}
        </p>
    )
}

const AdminCard = ({
    rank,
    uuid,
    name,
    description,
    strengths,
    active
}: {
    rank: string
    uuid: string
    name: string
    description?: string
    strengths?: string[],
    active: boolean
}) => {
    const ref = useRef(null)
    const [showBackside, setShowBackside] = useState(false)

    return (
        <div className={`${style['admin-card-holder']} ${!active ? style['inactive'] : ''}`} onClick={() => setShowBackside(() => !showBackside)}>
            <div
                ref={ref}
                style={
                    showBackside
                        ? {
                              transform: ` rotateY(${180}deg)`
                          }
                        : {}
                }
                className={`${style['card-container']} ${style[rank]}`}
            >
                <div className={`${style['card-front']} ${style[rank]}`}>
                    <div className={`${style['background']} ${style[rank]}`}>
                        <div className={`${style['avatar']} ${style[rank]}`}>
                            <img src={`https://visage.surgeplay.com/full/${uuid}`} />
                        </div>
                    </div>
                    <div className={`${style['content']} ${style[rank]}`}>
                        <div className={`${style['type']} ${style[rank]}`}>{rank}</div>
                        <div className={`${style['name']} ${style[rank]}`}>{name}</div>
                        <div className={`${style['strength']} ${style[rank]}`}>
                            {strengths &&
                                strengths.map((strength, i) => <AdminStrength key={i}>{strength}</AdminStrength>)}
                        </div>
                    </div>
                    <div className={`${style['footer']}`}>{description && <p>{description}</p>}</div>
                </div>
                <div className={`${style['card-back']}`}>
                    <span className={`${style['card-back-header']}`}>Karanteeni</span>
                    <img className={`${style['card-back-image']}`} src="images/cardback.png"></img>
                    <span className={`${style['card-back-header']} ${style['below']}`}>Karanteeni</span>
                </div>
            </div>
        </div>
    )
}

export default AdminCard
