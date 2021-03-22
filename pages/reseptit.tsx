import React from 'react'
// import Image from 'next/image'
import Layout from '../components/layout/layout'
import Heading from '../components/layout/heading'

const Recipe = ({ caption, image, tag }: { caption: string; image: string; tag?: string }) => {
    let id = tag || 'customrecipe'

    return (
        <figure id={id} className="recipe">
            <img src={image} alt="" height="250" width="400" />
            <figcaption>{caption}</figcaption>
        </figure>
    )
}

const Recipes = () => {
    return (
        <div>
            <Recipe
                caption="End Crystal. Karanteenissa Ender dragon pudottaa joka spawnaus kerran jälkeen lohikäärmeen munan. Siksi end crystalleille on asetettu uusi vaikeampi resepti."
                image="/images/recipes/endcrystal.png"
                tag="endcrystal"
            />
            <Recipe caption="Onnenkeksi" image="/images/recipes/fortunecookie.png" tag="fortunecookie" />
            <Recipe caption="Nametag" image="/images/recipes/nametag.png" tag="nametag" />
            <Recipe
                caption="Rakentajan essentiaalinen työkalu. Käytössä sisukkaasta ylöspäin."
                image="/images/recipes/builders_wand.png"
                tag="builderswand"
            />
            <Recipe caption="Kaikki lasipaneelityypit voi muuttaa takaisin palikoiksi." image="/images/recipes/glasspane.png" />
            <Recipe caption="Värjättyä lasia voi sulattaa takaisin värjäämättömäksi." image="/images/recipes/smelt_tempered_glass.png" />
            <Recipe caption="Blast furnacella hiiliblockista voi sulattaa mustan väriaineen." image="/images/recipes/black_dye.png" />
            <Recipe caption="Nyt myös eri prismarine tyyppejä voi muuntaa täys blockeiksi." image="/images/recipes/prismarine_block.png" />
            <Recipe
                caption="Chainmail Armorit rakennetaan iron bareista samalla tavalla kuin normaalit armorit. Tarvittava raaka-aine on iron bar."
                image="/images/recipes/chainmail_armor.png"
            />
            <Recipe caption="Coral faneja voi muuttaa Coraleiksi." image="/images/recipes/fire_coral.png" />
            <Recipe
                caption="Laittamalla kaksi slabia päällekkäin mistä tahansa puumateriaalista tekee siitä kokonaisen plankin."
                image="/images/recipes/plank.png"
            />
            <Recipe
                caption="Voit tehdä pelaajan pään. :) Raaka-aineina Bone block, Emerald, Diamond, Golden Apple ja Rotten flesh."
                image="/images/recipes/player_head.png"
            />
            <Recipe
                caption="Ja Zombien pään. Raaka-aineina Golden Apple, Bone block ja Rotten flesh. :o"
                image="/images/recipes/zombie_head.png"
            />
            <Recipe
                caption="Voit tehdä myös Skeletonin pään. Raaka-aineina Golden Apple, Bone ja Bone block."
                image="/images/recipes/skeleton_head.png"
            />
            <Recipe caption="Voit sulattaa smooth stonea hiekaksi." image="/images/recipes/sand_smooth_stone.png" />
            <Recipe caption="Enchanted Bottle on myös mahdollista koota. ;)" image="/images/recipes/xp_bottle.png" />
            <Recipe caption="Meemi." image="/images/recipes/dirt.png" />
        </div>
    )
}

const Reseptit = () => {
    return (
        <Layout title="Custom Reseptit" description="Karanteenin survivalissa käytettävät custom reseptit">
            <Heading heading="Custom reseptit" lead="Karanteenissa on omia reseptejä, wohoo." />
            <Recipes />
        </Layout>
    )
}

export default Reseptit
