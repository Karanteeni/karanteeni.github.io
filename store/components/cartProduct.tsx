import { TCartProduct } from '../types'
import { centsToEur } from '../util'
import CartProductButton from './cartProductButton'

import style from '../store.module.css'
import Link from 'next/link'

const CartProduct = ({ cartProduct }: { cartProduct: TCartProduct }) => {
    return (
        <div className={style['cart-product']}>
            <Link href={'/kauppa/tuotteet/' + cartProduct.product.type + '/' + cartProduct.product.id}>
                <h3>{cartProduct.product.name}</h3>
            </Link>
            <p>
                {centsToEur(cartProduct.product.price * cartProduct.amount)}{' '}
                <span className={style['light']}>
                    ({cartProduct.amount}*{centsToEur(cartProduct.product.price)})
                </span>
            </p>
            <CartProductButton id={cartProduct.product.id} />
        </div>
    )
}

export default CartProduct
