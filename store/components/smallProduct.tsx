import { Product } from '../types'
import { centsToEur } from '../util'

import style from '../store.module.css'
import Link from 'next/link'
import ProductImage from './productImage'

const SmallProduct = ({ product }: { product: Product }) => {
    return (
        <div className={style['small-product']}>
            <Link href={'/kauppa/tuotteet/' + product.type + '/' + product.id}>
                <h3>{product.name}</h3>
            </Link>
            <ProductImage product={product} height={100} width={200} />

            <p className={style['product-description']}>{product.description}</p>
            {product.sale && (
                <div>
                    <p className={style['price']}>{centsToEur(product.price)}</p>
                    <div className={style['sale']}>
                        {product.originalPrice && (
                            <p className={style['old-price']}>{centsToEur(product.originalPrice)}</p>
                        )}
                    </div>
                </div>
            )}
            {!product.sale && <p className={style['price']}>{centsToEur(product.price)}</p>}
        </div>
    )
}

export default SmallProduct
