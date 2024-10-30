# Karanteeni

React sivut (next.js)

Minecraft yhteisö Karanteenin verkkosivut.

## Kehitysvaatimukset

-   Node.js >= 17
-   Perusosaaminen verkkokehittämisestä
-   Perusosaaminen Reactista ja TypeScriptistä (Javasript osaaminen tod.näk. riittää)

## Kehitysympäristön asentaminen

```bash
npm install
npm run dev
```

## Tuotantoversion rakentaminen

```bash
npm run build
```
(.github/workflows kansiossa scripti, jolla github automaattisesti rakentaa sivun tuotantoon)

## Rakenne

```
karanteeni.github.io/
├── posts/
│   ├── Sisältää sivuston dynaamiset markdown julkaisut
│   └── Todella helppo luoda ja päivittää. [Perus markdown ohjeet](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
├── pages/
│   └── Sisältää sivuston [Next.js](https://nextjs.org/) sivut
├── data/
|   ├── Päivitettävän datan koti, tiedot kiitoksista etc
|   └── Perus JSON tiedostoja. Muokkaaminen ei vaadi juuri mitään aiempaa osaamista.
├── styles/
|   ├── CSS tyylitiedostot
|   └── Suosittelen kokeilemaan tyylien muokkaamista.
├── components/
|   └── Erilliset React komponentit. (Vaatii jo keskitason React ymmärrystä)
├── lib/
|   └── Satunnaiset sivuston taustatoiminnot. (Vaatii hieman syvempää perehtymistä)
└── public/
    └── Muut sivuston tarvitsevat tiedostot. Kuvat, fontit etc.
```

### Muuta

#### Teeman vaihtaminen
[`/pages/_app.tsx`](https://github.com/Karanteeni/karanteeni.github.io/blob/master/pages/_app.tsx) tiedostossa voi valita sivustolla käytettävän teeman muuttamalla pois-kommentoituja css-tiedostoja.

#### Etusivun palvelimen version korjaaminen
[`/components/home/serverstatus.tsx`](https://github.com/Karanteeni/karanteeni.github.io/blob/master/components/home/serverstatus.tsx) tiedostossa suunnilleen `rivillä 38` voi vaihtaa näytettävää versiota

#### Ylläpitäjien päivittäminen
[itseselitteinen](https://github.com/Karanteeni/karanteeni.github.io/blob/master/data/operators.json)

#### Etusivun mietelauseiden päivittäminen
[itseselitteinen](https://github.com/Karanteeni/karanteeni.github.io/blob/master/data/citations.json)

#### Kiitosten päivittäminen
[itseselitteinen](https://github.com/Karanteeni/karanteeni.github.io/blob/master/data/donators.json)

#### Reseptisivun reseptien päivittäminen
[sijainti itseselitteinen](https://github.com/Karanteeni/karanteeni.github.io/blob/master/data/recipes.json)
Huomioitavaa, että reseptikuvat kuuluu laittaa `/public/images/recipes`, jotta sivu osaa käyttää niitä.

#### Sääntöjen päivittäminen
[itseselitteinen](https://github.com/Karanteeni/karanteeni.github.io/blob/master/data/rules.json)


#### Rankkien ominaisuuksien yksinkertainen päivittäminen
[ymmärrettävissä, jos hieman tarkastelee json tiedostoa](https://github.com/Karanteeni/karanteeni.github.io/blob/master/data/ranks.json)


#### Changelogin päivittäminen
[itseselitteinen](https://github.com/Karanteeni/karanteeni.github.io/blob/master/data/changes.json)

#### Muut json data kansion json tiedostot
muut json tiedostot data kansiossa eivät ole varsinaisesti käytössä, mutta tallella varmuuden vuoksi.
