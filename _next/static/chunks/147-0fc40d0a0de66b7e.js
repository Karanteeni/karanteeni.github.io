"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[147],{2147:function(e,n,t){t.d(n,{Z:function(){return w},y:function(){return b}});var i=t(5893),s=t(9008),l=t(7294),r=t(1664),a=t(1163),c=t(1436),o=t(2814),d=function(e){var n=e.icon;return(0,i.jsx)(o.G,{className:"icon",icon:n})},u=function(e){var n=e.close,t=e.url,s=e.icon,l=e.title,c=(0,a.useRouter)();return(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(r.default,{href:t,children:(0,i.jsxs)("a",{className:"nav-link",onClick:function(){c.pathname===t&&n()},children:[(0,i.jsx)(d,{icon:s}),l]})})})},h=function(e){var n=e.selected,t=e.setSelected,s=e.itemIndex,l=e.icon,r=e.title,a=e.children,c=e.left,o=n===s,u=(o?"dropdown-menu collapse show":"dropdown-menu collapse")+(c?" left":"");return(0,i.jsxs)("li",{className:"nav-item dropdown",children:[(0,i.jsxs)("div",{className:"nav-link dropdown-toggle",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":o,onClick:function(){return t(o?null:s)},children:[(0,i.jsx)(d,{icon:l}),r]}),(0,i.jsxs)("div",{className:u,"aria-labelledby":"navbarDropdown",children:[(0,i.jsx)("h4",{className:"dropdown-header",children:r}),a]})]})},x=function(e){var n=e.close,t=e.url,s=e.icon,c=e.title,o=(0,a.useRouter)(),u=(0,l.useState)(!1),h=u[0],x=u[1];return(0,l.useEffect)((function(){x(t.startsWith("/")||t.startsWith("#")||new URL(t).origin==window.origin)}),[t]),(0,i.jsx)(r.default,{href:t,children:(0,i.jsxs)("a",{className:"dropdown-item",onClick:function(){o.pathname===t&&n()},target:h?"_self":"_blank",children:[(0,i.jsx)(d,{icon:s}),c]})})},j=function(e){var n=e.children,t=e.show,s=e.setShow,r=(0,l.useState)(null),a=r[0],c=r[1];(0,l.useEffect)((function(){c(window.innerWidth)}),[]),(0,l.useEffect)((function(){var e=function(){c(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var o=a<=1100;return(0,i.jsxs)("nav",{className:"navbar "+(o?"mobile":"")+(t?" show":""),children:[(0,i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-expanded":t,"aria-label":"Toggle navigation",onClick:function(){return s(!t)},children:(0,i.jsx)("div",{className:"navbar-toggler-icon burger burger-rotate",children:(0,i.jsx)("div",{className:"burger-lines"})})}),(0,i.jsx)("ul",{className:"nav",children:n})]})},m=function(){var e=(0,l.useState)(null),n=e[0],t=e[1],s=(0,l.useState)(!1),r=s[0],a=s[1],o=function(){t(null),a(!1)};return(0,i.jsxs)(j,{show:r,setShow:a,children:[(0,i.jsx)(u,{close:o,icon:c.J9Y,url:"/",title:"Etusivu"}),(0,i.jsxs)(h,{selected:n,setSelected:t,title:"Yleistietoa",icon:c.YHc,itemIndex:1,children:[(0,i.jsx)(x,{close:o,icon:c.u8Q,url:"/hoks",title:"Hyv\xe4 tiet\xe4\xe4!"}),(0,i.jsx)(x,{close:o,icon:c.NxF,url:"/ominaisuudet",title:"Ominaisuudet"}),(0,i.jsx)(x,{close:o,icon:c.neB,url:"/reseptit",title:"Custom reseptit"}),(0,i.jsx)(x,{close:o,icon:c.sph,url:"/ukk",title:"UKK"}),(0,i.jsx)(x,{close:o,icon:c.FU$,url:"/julkaisut",title:"Julkaisut"})]}),(0,i.jsx)(u,{close:o,icon:c.WV2,url:"/saannot",title:"S\xe4\xe4nn\xf6t"}),(0,i.jsx)(u,{close:o,icon:c._su,url:"/rankit",title:"Rankit"}),(0,i.jsxs)(h,{selected:n,setSelected:t,title:"Yll\xe4pito",icon:c.FVb,itemIndex:2,children:[(0,i.jsx)(x,{close:o,icon:c.caW,url:"/yllapito",title:"Yll\xe4pito"}),(0,i.jsx)(x,{close:o,icon:c.cwv,url:"/yphaku",title:"Hae yll\xe4pitoon!"})]}),(0,i.jsxs)(h,{selected:n,setSelected:t,title:"Kiitokset",icon:c.Cly,itemIndex:3,children:[(0,i.jsx)(x,{close:o,icon:c.Cly,url:"/lahjoitus",title:"Lahjoitukset"}),(0,i.jsx)(x,{close:o,icon:c.nmd,url:"/kkpelaaja",title:"Kuukauden pelaajat"})]}),(0,i.jsxs)(h,{selected:n,setSelected:t,title:"Hakemukset",icon:c.tx1,itemIndex:4,children:[(0,i.jsx)(x,{close:o,icon:c.cwv,url:"/yphaku",title:"Hae yll\xe4pitoon!"}),(0,i.jsx)(x,{close:o,icon:c.cwv,url:"/unban",title:"Unban-hakemus"})]}),(0,i.jsxs)(h,{selected:n,setSelected:t,title:"Muut",icon:c.CpV,itemIndex:5,left:!0,children:[(0,i.jsx)(x,{close:o,icon:c.cwv,url:"/nick",title:"Nimigeneraattori"}),(0,i.jsx)(x,{close:o,icon:c.JHj,url:"http://bans.karanteeni.net/",title:"Porttikiellot"}),(0,i.jsx)(x,{close:o,icon:c.Wx7,url:"http://map.karanteeni.net/",title:"Kartta"})]})]})},f=t(1417),p=function(e){e.home;var n=(new Date).getFullYear();return(0,i.jsxs)("footer",{children:[(0,i.jsxs)("div",{className:"footer-links",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{children:"Yhteis\xf6"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://discord.gg/fZqqysM",target:"_blank",rel:"noreferrer",children:"Discord"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://twitter.com/Karanteeni",target:"_blank",rel:"noreferrer",children:"Twitter"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.youtube.com/c/Karanteeni",target:"_blank",rel:"noreferrer",children:"YouTube"})})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{children:"Pikalinkit"}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:["- ",(0,i.jsx)(r.default,{href:"/ukk",children:"Usein kysytyt kysymykset"})]}),(0,i.jsxs)("li",{children:["- ",(0,i.jsx)(r.default,{href:"/hoks",children:"Hyv\xe4 tiet\xe4\xe4"})]}),(0,i.jsxs)("li",{children:["- ",(0,i.jsx)(r.default,{href:"/yllapito",children:"Yll\xe4pito"})]}),(0,i.jsxs)("li",{children:["- ",(0,i.jsx)("a",{href:"http://map.karanteeni.net/",target:"_blank",rel:"noopener noreferrer",children:"Dynmap"})]}),(0,i.jsxs)("li",{children:["- ",(0,i.jsx)(r.default,{href:"/unban",children:"Unban-hakemus"})]})]})]})]}),(0,i.jsxs)("div",{className:"footer-end",children:[(0,i.jsx)("div",{children:(0,i.jsxs)("p",{children:["\xa9 Karanteeni ",n]})}),!1,(0,i.jsx)("div",{children:(0,i.jsxs)("a",{href:"https://github.com/Karanteeni/karanteeni.github.io",rel:"noreferrer noopener",target:"_bank",title:"github",children:["Github",(0,i.jsx)(o.G,{className:"icon",icon:f.zhw})]})})]})]})},k=(0,t(5152).default)((function(){return t.e(587).then(t.bind(t,1587))}),{loadableGenerated:{webpack:function(){return[1587]}},ssr:!1}),v=function(){return(0,i.jsxs)("div",{className:"home-hero",children:[(0,i.jsxs)("div",{className:"home-hero-main",children:[(0,i.jsx)("h1",{children:"Karanteeni"}),(0,i.jsx)("p",{className:"lead",children:" Serveri, joka vangitsee sinut!"}),(0,i.jsx)(r.default,{href:"/muutokset",children:(0,i.jsx)("div",{className:"button changelog",children:"Muutosloki"})})]}),(0,i.jsx)("div",{children:(0,i.jsx)(k,{})})]})},b="Karanteeni";function w(e){var n=e.children,t=e.home,l=e.className,r=e.title,a=e.description,c=e.contained,o=void 0===c||c;return(0,i.jsxs)("div",{children:[(0,i.jsxs)(s.default,{children:[(0,i.jsx)("meta",{name:"theme-color",content:"#ffdd00"}),(0,i.jsx)("meta",{name:"apple-mobile-web-app-status-bar",content:"#ffdd00"}),(0,i.jsx)("meta",{name:"og:title",content:r?"".concat(r," | ").concat(b):b}),(0,i.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,i.jsx)("link",{rel:"apple-touch-icon",href:"/icons/apple-touch-icon.png"}),(0,i.jsx)("title",{children:r?"".concat(r," | ").concat(b):b}),a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"og:description",content:a}),(0,i.jsx)("meta",{name:"description",content:a})]})]}),t&&(0,i.jsx)(v,{}),(0,i.jsx)(m,{}),o?(0,i.jsxs)("div",{className:"main-container",children:[(0,i.jsx)("main",{className:"".concat(t?"home ":"").concat(l?l+" ":""),children:n})," "]}):(0,i.jsx)("div",{className:"full-size",children:n}),(0,i.jsx)(p,{home:t})]})}}}]);