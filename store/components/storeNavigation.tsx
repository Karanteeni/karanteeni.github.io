import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import style from '../store.module.css'
import CartInfo from './cartInfo'
import SearchBar from './searchBar'

export default function StoreNavigation() {
    const router = useRouter()

    const notCartButtonRoutes = ['/kauppa/ostoskori', '/kauppa/kassa']

    const crumbs = router.asPath
        .slice(1)
        .split('/')
        .map((_, index, array) => '/'.concat(array.slice(0, index + 1).join('/')))
        .slice(0, -1)

    const showCartButton = !notCartButtonRoutes.includes(router.route)

    return (
        <div className={style['navigation-container']}>
            <SearchBar />
            <div className={style['navigation'] + ' ' + style['breadcrumbs']}>
                {crumbs &&
                    crumbs.map((crumb, i) => (
                        <>
                            <Link href={crumb} key={i} legacyBehavior>
                                <a className={style['crumb']}>{crumb.split('/')[crumb.split('/').length - 1]}</a>
                            </Link>
                            <span className={style['crumb-arrow']}>→</span>
                        </>
                    ))}

                <div className={style['right'] + ' ' + style['crumb'] + ' ' + style['last']}>
                    {showCartButton && (
                        <>
                            <Link href="/kauppa/ostoskori">
                                Ostoskoriin
                            </Link>
                            <CartInfo />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
