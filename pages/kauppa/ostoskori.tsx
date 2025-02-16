import Heading from '../../components/layout/heading'
import Layout from '../../components/layout/layout'
import style from '../../store/store.module.css'
import { useContext, useState } from 'react'
import { AppContext } from '../../store/context'
import ClearCartButton from '../../store/components/clearCartButton'
import StoreNavigation from '../../store/components/storeNavigation'
import { centsToEur } from '../../store/util'
import { ProductType } from '../../store/types'
import RickRoll from '../../store/components/rickRoll'
import { toast } from 'react-toastify'
import CartProduct from '../../store/components/cartProduct'

const Ostoskori = () => {
    let [applyCode, setApplyCode] = useState(false)
    let [inputCode, setInputCode] = useState('')
    let [rickRoll, setRickRoll] = useState(false)
    const { state } = useContext(AppContext)
    const productsInCart = state.cart.reduce((total, current) => total + current.amount, 0)
    const moreThanOne = state.cart.filter((c) => c.amount > 1)
    const buyingPlaytime = state.cart.some((c) => c.amount > 0 && c.product.type === ProductType.PLAYTIME)
    const needUsername = state.cart.some(
        (c) => c.amount > 0 && (c.product.type === ProductType.PLAYTIME || c.product.type === ProductType.ITEM)
    )
    const totalPlayTimeMs =
        buyingPlaytime &&
        state.cart.reduce(
            (total, current) => (current.product.playtime ? total + current.product.playtime * current.amount : total),
            0
        )
    const totalPlayTimeHs = totalPlayTimeMs && totalPlayTimeMs / 1000 / 60 / 60

    function test() {
        if (inputCode.toLowerCase() === 'kara22') {
            toast("20% etukoodi 'kara22' on nyt käytössä", { type: 'success', })
            setApplyCode(true)
            setInputCode('')
        } else {
            toast('Virheellinen etukoodi', { type: 'error', })
        }
    }

    return (
        <Layout title="Ostoskori" description="Karanteenin verkkokaupan ostoskori" className={style[`store-page`]}>
            <link
                rel="preload"
                href="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0"
                as="document"
            ></link>
            <StoreNavigation />
            <Heading heading="Ostoskori" />

            {productsInCart <= 0 && <p>Ei tuotteita ostoskorissa. Käy shoppailemassa jotakin.</p>}
            {productsInCart > 0 && (
                <div>
                    <h2>Tuotteet</h2>
                    <div className={style['cart-products-list']}>
                        {productsInCart > 0 &&
                            state.cart
                                .filter((c) => c.amount > 0)
                                .map((c) => <CartProduct cartProduct={c} key={c.product.id} />)}
                    </div>
                    <ClearCartButton />
                    <section className={style['emphasize']}>
                        <fieldset>
                            <label>
                                <span>Lunasta etukoodi</span>
                                <input
                                    name="playername"
                                    value={inputCode}
                                    onChange={(e) => setInputCode(e.target.value)}
                                />
                            </label>
                        </fieldset>
                        <button className={style['redeem']} onClick={() => test()}>
                            Lunasta
                        </button>
                    </section>
                    <h3>Yhteensä</h3>
                    <div>
                        <span className={style['price']}>
                            {centsToEur(
                                state.cart.reduce((total, current) => total + current.amount * current.product.price, 0)
                            )}
                        </span>{' '}
                        (sis alv 24%)
                        {applyCode && (
                            <>
                                <p>Alennusten jälkeen</p>
                                <span className={style['price']}>
                                    {centsToEur(
                                        state.cart.reduce(
                                            (total, current) => total + current.amount * current.product.price,
                                            0
                                        ) * 0.8
                                    )}
                                </span>
                                <p className={style['light']}>Käytössä 20% alennuskoodi 'kara22'</p>
                            </>
                        )}
                    </div>
                    {moreThanOne.length > 0 && (
                        <section className={style['emphasize']}>
                            <p>Huomasithan, että sinulla on seuraavia tuotteita useampi kappale ostoskorissa</p>
                            <ul>
                                {moreThanOne.map((c) => (
                                    <li style={{ color: 'black' }} key={c.product.id}>
                                        {c.product.name} ({c.amount} kpl)
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                    {needUsername && (
                        <section className={style['emphasize']}>
                            <p>
                                Olet ostamassa pelin sisäisiä tuotteita. Tarvitsemme minecraft käyttäjänimesi, jotta
                                saamme annettua tuotteet käyttäjällesi.
                            </p>
                            {buyingPlaytime && (
                                <p>
                                    Olet ostamassa yhteensä{' '}
                                    {totalPlayTimeHs > 24
                                        ? ((totalPlayTimeHs as number) / 24).toFixed(2) + ' päivää'
                                        : String(totalPlayTimeHs) + ' tuntia'}{' '}
                                    peliaikaa.
                                </p>
                            )}
                            <fieldset>
                                <label className="required">
                                    <span>Minecraft käyttäjänimi</span>
                                    <input name="playername" />
                                </label>
                            </fieldset>
                        </section>
                    )}
                    <section className={style['emphasize']}>
                        <p>
                            Seuraavalla sivulla pääset valitsemaan maksutavan sekä täyttämään yhteystiedot, sekä
                            valitsemaan tuotteiden toimitustavan.
                        </p>
                    </section>

                    <button className={style['pay-button']} onClick={() => setRickRoll(true)}>
                        Siirry maksamaan
                    </button>
                    {rickRoll && <RickRoll />}
                </div>
            )}
        </Layout>
    )
}

export default Ostoskori
