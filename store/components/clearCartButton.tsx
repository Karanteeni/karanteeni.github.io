import { useContext } from 'react'
import { AppContext } from '../context'
import { clearCartAction } from '../reducer'

import style from '../store.module.css'
import { toast } from 'react-toastify'

const ClearCartButton = () => {
    const { dispatch } = useContext(AppContext)

    function onClick() {
        dispatch(clearCartAction())
        toast('Ostoskori tyhjennetty', { type: 'success', })
    }
    return (
        <div className={style['clear-cart-button']}>
            <button onClick={onClick}>Tyhjennä ostoskori</button>
        </div>
    )
}

export default ClearCartButton
