(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[181],{207:function(a,i,e){"use strict";var n=e(5893);i.Z=function(a){var i=a.heading,e=a.lead,t=a.children;return(0,n.jsxs)("div",{className:"main-heading",children:[(0,n.jsx)("h1",{children:i}),(0,n.jsx)("p",{className:"lead",children:e}),t]})}},4773:function(a,i,e){"use strict";e.d(i,{Z:function(){return g},y:function(){return f}});var n=e(5893),t=e(9008),s=e(7294),l=e(1664),o=e(1163),r=e(1436),u=e(7625),c=function(a){var i=a.icon;return(0,n.jsx)(u.G,{className:"icon",icon:i})},d=function(a){var i=a.close,e=a.url,t=a.icon,s=a.title,r=(0,o.useRouter)();return(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(l.default,{href:e,children:(0,n.jsxs)("a",{className:"nav-link",onClick:function(){r.pathname===e&&i()},children:[(0,n.jsx)(c,{icon:t}),s]})})})},k=function(a){var i=a.selected,e=a.setSelected,t=a.itemIndex,s=a.icon,l=a.title,o=a.children,r=i===t,u=r?"dropdown-menu collapse show":"dropdown-menu collapse";return(0,n.jsxs)("li",{className:"nav-item dropdown",children:[(0,n.jsxs)("div",{className:"nav-link dropdown-toggle",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":r,onClick:function(){return e(r?null:t)},children:[(0,n.jsx)(c,{icon:s}),l]}),(0,n.jsxs)("div",{className:u,"aria-labelledby":"navbarDropdown",children:[(0,n.jsx)("h4",{className:"dropdown-header",children:l}),o]})]})},h=function(a){var i=a.close,e=a.url,t=a.icon,s=a.title,r=(0,o.useRouter)();return(0,n.jsx)(l.default,{href:e,children:(0,n.jsxs)("a",{className:"dropdown-item",onClick:function(){r.pathname===e&&i()},children:[(0,n.jsx)(c,{icon:t}),s]})})},j=function(a){var i=a.children,e=a.show,t=a.setShow,l=(0,s.useState)(null),o=l[0],r=l[1];(0,s.useEffect)((function(){r(window.innerWidth)}),[]),(0,s.useEffect)((function(){function a(){r(window.innerWidth)}return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}),[]);var u=o<=1100;return(0,n.jsxs)("nav",{className:"navbar "+(u?"mobile":"")+(e?" show":""),children:[(0,n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-expanded":e,"aria-label":"Toggle navigation",onClick:function(){return t(!e)},children:(0,n.jsx)("div",{className:"navbar-toggler-icon burger burger-rotate",children:(0,n.jsx)("div",{className:"burger-lines"})})}),(0,n.jsx)("ul",{className:"nav",children:i})]})},m=function(){var a=(0,s.useState)(null),i=a[0],e=a[1],t=(0,s.useState)(!1),l=t[0],o=t[1],u=function(){e(null),o(!1)};return(0,n.jsxs)(j,{show:l,setShow:o,children:[(0,n.jsx)(d,{close:u,icon:r.J9Y,url:"/",title:"Etusivu"}),(0,n.jsxs)(k,{selected:i,setSelected:e,title:"Yleistietoa",icon:r.YHc,itemIndex:1,children:[(0,n.jsx)(h,{close:u,icon:r.u8Q,url:"/hoks",title:"Hyv\xe4 tiet\xe4\xe4!"}),(0,n.jsx)(h,{close:u,icon:r.NxF,url:"/ominaisuudet",title:"Ominaisuudet"}),(0,n.jsx)(h,{close:u,icon:r.neB,url:"/reseptit",title:"Custom reseptit"}),(0,n.jsx)(h,{close:u,icon:r.sph,url:"/ukk",title:"UKK"}),(0,n.jsx)(h,{close:u,icon:r.FU$,url:"/julkaisut",title:"Julkaisut"})]}),(0,n.jsx)(d,{close:u,icon:r.WV2,url:"/saannot",title:"S\xe4\xe4nn\xf6t"}),(0,n.jsx)(d,{close:u,icon:r._su,url:"/rankit",title:"Rankit"}),(0,n.jsxs)(k,{selected:i,setSelected:e,title:"Yll\xe4pito",icon:r.FVb,itemIndex:2,children:[(0,n.jsx)(h,{close:u,icon:r.caW,url:"/yllapito",title:"Yll\xe4pito"}),(0,n.jsx)(h,{close:u,icon:r.cwv,url:"/yphaku",title:"Hae yll\xe4pitoon!"})]}),(0,n.jsx)(d,{close:u,icon:r.Cly,url:"/lahjoitus",title:"Lahjoitukset"}),(0,n.jsxs)(k,{selected:i,setSelected:e,title:"Hakemukset",icon:r.tx1,itemIndex:3,children:[(0,n.jsx)(h,{close:u,icon:r.cwv,url:"/yphaku",title:"Hae yll\xe4pitoon!"}),(0,n.jsx)(h,{close:u,icon:r.cwv,url:"/unban",title:"Unban-hakemus"})]})]})},x=e(1417),v=function(a){a.home;var i=(new Date).getFullYear();return(0,n.jsxs)("footer",{children:[(0,n.jsxs)("div",{className:"footer-links",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{children:"Yhteis\xf6"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://discord.gg/fZqqysM",target:"_blank",rel:"noreferrer",children:"Discord"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://twitter.com/Karanteeni",target:"_blank",rel:"noreferrer",children:"Twitter"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://www.youtube.com/c/Karanteeni",target:"_blank",rel:"noreferrer",children:"YouTube"})})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{children:"Pikalinkit"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["- ",(0,n.jsx)(l.default,{href:"/ukk",children:"Usein kysytyt kysymykset"})]}),(0,n.jsxs)("li",{children:["- ",(0,n.jsx)(l.default,{href:"/hoks",children:"Hyv\xe4 tiet\xe4\xe4"})]}),(0,n.jsxs)("li",{children:["- ",(0,n.jsx)(l.default,{href:"/yllapito",children:"Yll\xe4pito"})]}),(0,n.jsxs)("li",{children:["- ",(0,n.jsx)("a",{href:"http://map.karanteeni.net/",target:"_blank",rel:"noopener noreferrer",children:"Dynmap"})]}),(0,n.jsxs)("li",{children:["- ",(0,n.jsx)(l.default,{href:"/unban",children:"Unban-hakemus"})]})]})]})]}),(0,n.jsxs)("div",{className:"footer-end",children:[(0,n.jsx)("div",{children:(0,n.jsxs)("p",{children:["\xa9 Karanteeni ",i]})}),!1,(0,n.jsx)("div",{children:(0,n.jsxs)("a",{href:"https://github.com/Karanteeni/karanteeni.github.io",rel:"noreferrer noopener",target:"_bank",title:"github",children:["Github",(0,n.jsx)(u.G,{className:"icon",icon:x.zhw})]})})]})]})},p=(0,e(5152).default)((function(){return e.e(678).then(e.bind(e,6678))}),{ssr:!1,loadableGenerated:{webpack:function(){return[6678]},modules:["../components/home/homehero.tsx -> ./minecraftcitation"]}}),y=function(){return(0,n.jsxs)("div",{className:"home-hero",children:[(0,n.jsxs)("div",{className:"home-hero-main",children:[(0,n.jsx)("h1",{children:"Karanteeni"}),(0,n.jsx)("p",{className:"lead",children:" Serveri, joka vangitsee sinut!"}),(0,n.jsx)(l.default,{href:"/muutokset",children:(0,n.jsx)("div",{className:"button changelog",children:"Muutosloki"})})]}),(0,n.jsx)("div",{children:(0,n.jsx)(p,{})})]})},f="Karanteeni";function g(a){var i=a.children,e=a.home,s=a.className,l=a.title,o=a.description;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(t.default,{children:[(0,n.jsx)("meta",{name:"theme-color",content:"#ffdd00"}),(0,n.jsx)("meta",{name:"apple-mobile-web-app-status-bar",content:"#ffdd00"}),(0,n.jsx)("meta",{name:"og:title",content:l?"".concat(l," | ").concat(f):f}),(0,n.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("link",{rel:"apple-touch-icon",href:"/icons/apple-touch-icon.png"}),(0,n.jsx)("title",{children:l?"".concat(l," | ").concat(f):f}),o&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"og:description",content:o}),(0,n.jsx)("meta",{name:"description",content:o})]})]}),e&&(0,n.jsx)(y,{}),(0,n.jsx)(m,{}),(0,n.jsxs)("div",{className:"main-container",children:[(0,n.jsx)("main",{className:"".concat(e?"home ":"").concat(s?s+" ":""),children:i})," "]}),(0,n.jsx)(v,{home:e})]})}},9032:function(a,i,e){"use strict";e.r(i);var n=e(5893),t=e(1664),s=e(207),l=e(4773),o=function(a){return(0,n.jsx)("h2",{children:a.children})},r=function(a){return(0,n.jsx)("p",{children:a.children})},u=function(a){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Tahtoisin yll\xe4pit\xe4j\xe4ksi. Kuinka voin saavuttaa sen?"}),(0,n.jsxs)(r,{children:["K\xe4y lukemassa ohjeet ",(0,n.jsx)(t.default,{href:"/yphaku",children:"t\xe4\xe4lt\xe4"})," ja l\xe4het\xe4 hakemus k\xe4ytt\xe4en annettua lomaketta."]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Apua! Ei ole oikeuksia komentoon, vaikka pit\xe4isi olla."}),(0,n.jsx)(r,{children:"Koita poistua palvelimelta ja liitty\xe4 uudelleen. Mik\xe4li ongelma ei korjaantunut, nyk\xe4ise yll\xe4pit\xe4j\xe4\xe4 hihasta. Vaihtoehtoisesti mik\xe4li yll\xe4pit\xe4ji\xe4 ei ole palvelimella, tee tiketti Discordiin ja katsotaan kuinka asian voi hoitaa."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Kuinka p\xe4\xe4sen korkeammalle tasolle?"}),(0,n.jsxs)(r,{children:["Pelaamalla. Rankeista l\xf6yd\xe4t lis\xe4tietoa ",(0,n.jsx)(t.default,{href:"/rankit",children:"t\xe4\xe4lt\xe4"}),"."]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"L\xf6ysin palvelimelta peli\xe4 rikkovan vian. Mit\xe4 teen?"}),(0,n.jsxs)(r,{children:['Ota yhteytt\xe4 yll\xe4pit\xe4j\xe4\xe4n joko palvelimella tai liity Karanteenin Discordiin ja valitse sielt\xe4 kanava "Bugit ja parannusehdotukset".',(0,n.jsx)("strong",{children:"Mik\xe4li bugia voi hyv\xe4ksik\xe4ytt\xe4\xe4, pid\xe4 se omana tietonasi, \xe4l\xe4k\xe4 kerro muille pelaajille."}),"Bugin hyv\xe4ksik\xe4ytt\xf6 on ",(0,n.jsx)("strong",{children:"ankarasti kielletty\xe4"}),". Mik\xe4li j\xe4\xe4t siit\xe4 kiinni, saat siit\xe4 automaattisesti tuntuvan porttikiellon. Hyv\xe4ksik\xe4ytett\xe4v\xe4n / peli\xe4rikkovan bugin ilmiantamisesta saa yleens\xe4 korvauksen."]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Voinko k\xe4ytt\xe4\xe4 kahta tili\xe4 palvelimella?"}),(0,n.jsx)(r,{children:"Voit, mutta tilit eiv\xe4t saa hy\xf6ty\xe4 toisistaan. T\xe4h\xe4n lukeutuu mm. tavarapakkausten ja \xe4\xe4nestysrahojen siirt\xe4minen toiselle tilille. Pelitilit eiv\xe4t saa olla yht\xe4 aikaa palvelimella."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Kuinka usein maailma nollataan?"}),(0,n.jsx)(r,{children:"Maailma nollataan yleens\xe4 noin puolen vuoden v\xe4lein, mutta ei tapahdu automaationa. Yleens\xe4 maailman nollaus my\xf6s t\xe4hd\xe4t\xe4\xe4n seuraavan Minecraftin suuren versiop\xe4ivityksen kohdille. Netheri\xe4 ei nollata ja End nollataan kerran kolmessa kuukaudessa."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Mik\xe4 s\xe4ilyy maailman nollauksen yhteydess\xe4?"}),(0,n.jsx)(r,{children:'Maailman nollauksessa eli "mapresetissa" kaikki aloittavat samalta viivalta. T\xe4m\xe4 tarkoittaa sit\xe4, ett\xe4 pelaajien rahat, inventory ja koko kartta nollataan maisemanvaihdon vuoksi, jolloin kaikki joutuvat aloittamaan alusta. Peliaika on ainut asia, joka s\xe4ilyy.'})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Kuinka voin lahjoittaa palvelimelle?"}),(0,n.jsxs)(r,{children:["Koska Karanteenissa ei ole k\xe4yt\xf6ss\xe4 vippej\xe4, vaan kaikki perustuu peliaikaan, voit tehd\xe4 vapaamuotoisen lahjoituksen mm. PayPalilla. Tarkemmat ohjeet l\xf6yd\xe4t"," ",(0,n.jsx)(t.default,{href:"/lahjoitus",children:"t\xe4\xe4lt\xe4"}),"."]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Mit\xe4 teen jos tarvitsen yll\xe4pidon apua, mutta he eiv\xe4t ole juuri nyt paikalla?"}),(0,n.jsxs)(r,{children:["Voit liitty\xe4 Karanteenin"," ",(0,n.jsx)("a",{href:"https://discord.gg/dxCtuY7",rel:"noreferrer",children:"Discord"})," ","-palvelimelle ja pyyt\xe4\xe4 apua luomalla tiketin #apua kanavalta."]})]})]})},c=function(a){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Miten voin suojata alueeni?"}),(0,n.jsx)(r,{children:"Yll\xe4pito suojaa alueen ja suojaukseen vaaditaan talon alku. Huomaathan, ett\xe4 talosi t\xe4ytyy olla v\xe4hint\xe4\xe4n sadan (100) blockin p\xe4\xe4ss\xe4 l\xe4himm\xe4st\xe4 talosta. Mik\xe4li aiot luoda kyl\xe4n, voit p\xe4\xe4tt\xe4\xe4 alueelle nimen. Warpin kyl\xe4lle saa vasta, kun kyl\xe4ll\xe4 on 15 asukasta. Endiin ei p\xe4\xe4s\xe4\xe4nt\xf6isesti suojata alueita."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Apua! Taloani on grieffattu!"}),(0,n.jsxs)(r,{children:["Ei h\xe4t\xe4\xe4. P\xe4\xe4set Karanteenin Discordiin ",(0,n.jsx)("code",{children:"/discord"})," komennolla, tai voit nyk\xe4ist\xe4 jo paikalla olevaa yll\xe4pit\xe4j\xe4\xe4 hihasta. Joka tapauksessa saat grieffatun talosi kuntoon, sek\xe4 tavarat takaisin. Grieffaaja sit\xe4 vastoin saa porttikiellon palvelimelle."]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Kuinka annan kaverilleni oikeudet alueeseen?"}),(0,n.jsxs)(r,{children:["Oikeudet alueeseen voit antaa komennolla"," ",(0,n.jsx)("code",{children:"/trust <suojauksen_nimi> <pelaajan_nimi>"})," seisten suojauksen sis\xe4ll\xe4. Suojauksen nimen saat selville komennolla ",(0,n.jsx)("code",{children:"/alue"})," kun seisot sen p\xe4\xe4ll\xe4."]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Kuinka annan kaverilleni oikeudet chesteihin ja uuneihin?"}),(0,n.jsxs)(r,{children:["Voit antaa oikeudet kyseisiin blockeihin katsomalla blockia ja kirjoittamalla komennon"," ",(0,n.jsx)("code",{children:"/+oikeudet <pelaajan_nimi>"}),". T\xe4m\xe4n j\xe4lkeen kaverillasi on oikeudet avata kyseinen arkku. Komento toimii my\xf6s muihin container blockeihin."]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"L\xf6ysin suojaamattoman arkun. Voinko ottaa sielt\xe4 tavaraa?"}),(0,n.jsx)(r,{children:"Et. Vaikka l\xf6yt\xe4isit arkun tai kokonaan suojaamattoman arkun, et saa ottaa sielt\xe4 tavaroita tai rikkoa paikkaa. Grieffaaminen johtaa usein porttikieltoon."})]})]})},d=function(a){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Kuinka voin luoda arkkukaupan?"}),(0,n.jsx)(r,{children:"Voit luoda arkkukaupan ly\xf6m\xe4ll\xe4 arkkua kyykyss\xe4 tavara k\xe4dess\xe4. T\xe4m\xe4n j\xe4lkeen chat kysyy sinulta hinnan tavaralle. Kirjoita hinta ja n\xe4in arkkukauppasi on valmis."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Kuinka voin poistaa arkkukaupan?"}),(0,n.jsxs)(r,{children:["Voit poistaa arkkukaupan hajottamalla kyseisen arkun tai katsomalla arkkukauppaa kohti ja suorittamalla ",(0,n.jsx)("code",{children:"/qs remove"}),". Muita arkkukaupan komentoja ovat mm."," ",(0,n.jsx)("code",{children:"/qs price <hinta>"})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Mit\xe4 valuuttaa palvelin k\xe4ytt\xe4\xe4 ja kuinka saan sit\xe4?"}),(0,n.jsxs)(r,{children:["Palvelimella on rahavaluuttana pennit. Pennej\xe4 saat hankkimalla uutta peliaikaa, sek\xe4 palvelinta \xe4\xe4nest\xe4m\xe4ll\xe4 ",(0,n.jsx)("code",{children:"/vote"}),". Jokainen \xe4\xe4nestykerta on 50 pennin arvoinen. Voit my\xf6s myyd\xe4 sek\xe4 ostaa tavaraa k\xe4ytt\xe4m\xe4ll\xe4 arkkukauppoja. Spawnilla on kauppa (",(0,n.jsx)("code",{children:"/warp kauppa"}),"), jonne voit myyd\xe4 oreista tehtyj\xe4 blockeja."]})]})]})},k=function(a){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Hukkasin kotini. Kuinka saan sen takaisin?"}),(0,n.jsx)(r,{children:"Nyk\xe4ise yll\xe4pit\xe4j\xe4\xe4 hihasta ja kerro h\xe4nelle mit\xe4 teit viimeksi kotisi l\xe4hettyvilt\xe4 ja milt\xe4 se n\xe4ytti. N\xe4in saamme palautettua sinut oikeaan paikkaan."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"En pysty teleporttaamaan, poistamaan tai asettamaan koteja. Internal error, wat do?"}),(0,n.jsx)(r,{children:"Sano l\xe4himm\xe4lle yll\xe4pit\xe4j\xe4lle asiasta. Todenn\xe4k\xf6isesti joku tai jotkin kodeistasi ovat korruptoituneet ja joudumme poistamaan ne manuaalisesti. Mik\xe4li yll\xe4pitoa ei ole paikalla, liity Karanteenin Discord palvelimelle ja kerro siell\xe4 ongelmastasi yll\xe4pidolle."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Saanko asettaa kodin Netheriin tai Endiin?"}),(0,n.jsx)(r,{children:"Saat, mutta Endiin emme suosittele. End resetoidaan n. puolessa v\xe4liss\xe4 karttaa, mik\xe4 voi aiheuttaa kodin korruptoitumista ja sinun kuoleman. T\xe4m\xe4 tarkoittaa siis sit\xe4, ett\xe4 saatat kuolla jos k\xe4yt\xe4t kotia resetoinnin j\xe4lkeen. Yll\xe4pito ei ole velvollinen palauttamaan tavaroitasi."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Saanko asettaa kodin toisen pelaajan taloon?"}),(0,n.jsx)(r,{children:"Mik\xe4li toiselta pelaajalta on lupa asettaa taloon koti, on t\xe4m\xe4 sallittua. Kodin asettaminen muussa tapauksessa luetaan h\xe4irinn\xe4ksi ja on varoituksen arvoinen. Toistuvissa tapauksissa rangaistuksia tiukennetaan."})]})]})},h=function(a){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Montako rangaistusta voin saada?"}),(0,n.jsx)(r,{children:"Riippuu k\xe4ytt\xe4ytymisest\xe4si servulla. Toistaiseksi annamme korkeintaan kaksi porttikieltoa, joista j\xe4lkimm\xe4inen on aina ikuinen, jos ensimm\xe4inen on ollut yli viiden (5) p\xe4iv\xe4n mittainen."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Mit\xe4 rankaisumenetelmi\xe4 teill\xe4 on olemassa?"}),(0,n.jsx)(r,{children:"Hiljennykset, varoitukset, sek\xe4 porttikiellot. Kolme varoitusta on aina kahden viikon porttikielto."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Sain rangaistuksen turhasta!"}),(0,n.jsx)(r,{children:"Liity Karanteenin Discordiin ja kerro asiasi #apua -kanavalla. Muista, ett\xe4 vaikka jokin ei olisi kielletty\xe4 s\xe4\xe4nn\xf6iss\xe4, siit\xe4 voidaan silti rangaista. Yll\xe4pit\xe4jien n\xe4kemykset voivat my\xf6s erota toisistaan, jonka vuoksi keskustele rangaistuksesta rangaistuksen antajan kanssa."})]})]})},j=function(a){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{children:"Mitk\xe4 modit ovat sallittuja Karanteenissa?"}),(0,n.jsx)(r,{children:"P\xe4\xe4s\xe4\xe4nt\xf6isesti kaikki pelaajia hy\xf6dytt\xe4v\xe4t modit ovat kiellettyj\xe4, siin\xe4 miss\xe4 grafiikkamodit kuten OptiFine ovat sallittuja. Nyk\xe4ise yll\xe4pit\xe4j\xe4\xe4 hihasta mik\xe4li et ole varma."})]})})};i.default=function(){return(0,n.jsxs)(l.Z,{title:"Usein kysytyt kysymykset",description:"Karanteenissa usein kysytyt kysymykset, ja niihin vastaukset.",children:[(0,n.jsx)(s.Z,{heading:"Usein kysytyt kysymykset",lead:'Milloin on mapresetin tuhoamisenchantin yhteensopiva plugarin home ei teleporttaa?" "On."'}),(0,n.jsxs)("div",{children:[(0,n.jsx)(u,{}),(0,n.jsx)(c,{}),(0,n.jsx)(d,{}),(0,n.jsx)(k,{}),(0,n.jsx)(h,{}),(0,n.jsx)(j,{})]})]})}},9710:function(a,i,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ukk",function(){return e(9032)}])}},function(a){a.O(0,[774,523,112,224,888,179],(function(){return i=9710,a(a.s=i);var i}));var i=a.O();_N_E=i}]);