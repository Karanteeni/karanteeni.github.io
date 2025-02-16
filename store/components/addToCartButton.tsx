import { useContext } from 'react'
import { AppContext } from '../context'
import { addProductAction, incrementProductAmount, decrementProductAmount } from '../reducer'
import { Product } from '../types'
import IncrementDecrement from './incrementDecrement'

import style from '../../store/store.module.css'
import { toast } from 'react-toastify'

const AddToCartButton = ({ product }: { product: Product }) => {
    const { state, dispatch } = useContext(AppContext)

    const cartProduct = state.cart.find((c) => c.product.id === product.id)
    const someInCart = cartProduct && cartProduct.amount > 0

    function onAddClick() {
        dispatch(addProductAction(product.id))
        toast(product.name + ' lisätty ostoskoriin', {
            type: 'success',
        })
    }

    function onIncrementClick() {
        dispatch(incrementProductAmount(product.id))
        toast(product.name + ' lisätty ostoskoriin', {
            type: 'success',
        })
    }

    function onDecrementClick() {
        dispatch(decrementProductAmount(product.id))
        toast(product.name + ' poistettu ostoskorista', {
            type: 'success',
        })
    }

    return (
        <div>
            {!someInCart && (
                <button className={style['add-to-cart']} onClick={onAddClick}>
                    Lisää ostoskoriin
                </button>
            )}
            {someInCart && (
                <div>
                    <span className={style['light']}>{cartProduct.amount} ostoskorissa</span>
                    <IncrementDecrement onIncrement={onIncrementClick} onDecrement={onDecrementClick} />
                </div>
            )}
        </div>
    )
}

export default AddToCartButton
