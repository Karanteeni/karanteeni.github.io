# Karanteeni

React sivut (next.js)

Minecraft yhteisö Karanteenin verkkosivut.

## Kehitysvaatimukset

-   Node.js >= 15
-   Perusosaaminen verkkokehittämisestä
-   Perusosaaminen Reactista

## Kehitysympäristön asentaminen

```bash
npm install
npm run dev
```

## Tuotantoversion rakentaminen

```bash
npm run build
```

## Rakenne

```
karanteeni.github.io/
├── posts/
│   └── Sisältää sivuston dynaamiset markdown julkaisut
├── pages/
│   └── Sisältää sivuston 'staattiset' sivut
├── components/
|   └── Erilliset React komponentit
├── lib/
|   └── Satunaiset sivuston taustatoiminnot
├── data/
|   └── JSON datan koti, tiedot lahjoittajista etc
├── components/
|   └── Erilliset React komponentit
├── styles/
|   └── CSS tyylitiedostot
└── public/
    └── Muut sivuston assetit
```
