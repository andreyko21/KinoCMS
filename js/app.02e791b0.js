(function(){"use strict";var e={3185:function(e,n,t){var o={};t.r(o);var r=t(9242),i=t(3396);const a={class:"wrapper"};function u(e,n,t,o,r,u){const c=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(c)])}t(5140);var c=t(2685),d={mounted(){(0,c.UN)(document.body,{})}},f=t(89);const s=(0,f.Z)(d,[["render",u]]);var l=s,p=t(2483),m=t(1609);function h({to:e,next:n}){const t=(0,m.v0)(o["default"]);let r=!1;t.onAuthStateChanged((t=>{t||"/Login"===e.path||r?r||(r=!0,n()):(r=!0,n("/Login"))}))}const b=[{path:"/",meta:{middleware:[h]},component:()=>Promise.all([t.e(335),t.e(321)]).then(t.bind(t,6321)),children:[{path:"",component:()=>t.e(910).then(t.bind(t,3910))},{path:"Banners&Sliders",component:()=>Promise.all([t.e(985),t.e(247)]).then(t.bind(t,6563))},{path:"Films",component:()=>Promise.all([t.e(985),t.e(335),t.e(70)]).then(t.bind(t,6769))},{path:"Cinemas",children:[{path:"",component:()=>Promise.all([t.e(985),t.e(398)]).then(t.bind(t,7171))},{path:":cinemaId",children:[{path:"",component:()=>Promise.all([t.e(985),t.e(723),t.e(702),t.e(558)]).then(t.bind(t,2344))},{path:":hallId",component:()=>Promise.all([t.e(985),t.e(723),t.e(702),t.e(476)]).then(t.bind(t,3600))}]}]},{path:"News",component:()=>t.e(858).then(t.bind(t,858))},{path:"Promotions",component:()=>t.e(253).then(t.bind(t,9253))},{path:"AllPages",component:()=>t.e(258).then(t.bind(t,5258))},{path:"Users",component:()=>t.e(694).then(t.bind(t,3694))},{path:"Mailings",component:()=>t.e(235).then(t.bind(t,3235))},{path:"Profile",component:()=>t.e(940).then(t.bind(t,7940))},{path:"Films/:id",component:()=>Promise.all([t.e(985),t.e(723),t.e(702),t.e(137)]).then(t.bind(t,8784))}]},{path:"/Login",name:"login",component:()=>Promise.all([t.e(723),t.e(307)]).then(t.bind(t,4307))}],v=(0,p.p7)({history:(0,p.PO)("/KinoCMS/"),routes:b});v.beforeEach(((e,n,t)=>{if(!e.meta.middleware)return t();const o=e.meta.middleware,r={to:e,from:n,next:t};return o[0](r,t)}));var g=v,y=t(65),w=(0,y.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),k=(t(2005),t(6112)),P=t(1509);t(5363);const C=(0,r.ri)(l);P.Z.initializeApp({apiKey:"AIzaSyCaEi1HjUdnkg7txAc4MJvt6LZAYcFhPaM",authDomain:"kinocms-4ad3a.firebaseapp.com",databaseURL:"https://kinocms-4ad3a-default-rtdb.europe-west1.firebasedatabase.app",projectId:"kinocms-4ad3a",storageBucket:"kinocms-4ad3a.appspot.com",messagingSenderId:"529405933858",appId:"1:529405933858:web:da80fcd81d3ab9e24c4d7b",measurementId:"G-4MW3M9QGKP"}),C.use(k.Z,{preLoad:1.3,error:t(6637),loading:t(6637),attempt:1,lazyComponent:!0}).use(w).use(g).mount("#app")},6637:function(e,n,t){e.exports=t.p+"img/default.a1666931.svg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){t.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],i=e[f][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(f--,1);var d=r();void 0!==d&&(n=d)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{70:"080a1a1b",137:"2a4410e0",235:"14722d17",247:"6b4a1ca7",253:"df87de82",258:"205f186d",307:"58965182",321:"4fc672f2",335:"d640aab5",398:"acfa937e",476:"2eb3ef1f",558:"b5db0da3",694:"cc6b6fc2",702:"3d9fd3b2",723:"ee2de2e6",858:"a63ea0cf",910:"20992f5e",940:"66af9861",985:"4cef41a2"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{70:"748a107b",137:"06f3d3fb",247:"999684b7",307:"801343f1",321:"86a5420c",398:"7a21977f",476:"06f3d3fb",558:"06f3d3fb"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="kinocms:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,c;if(void 0!==i)for(var d=document.getElementsByTagName("script"),f=0;f<d.length;f++){var s=d[f];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==n+i){u=s;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=o),e[o]=[r];var l=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=l.bind(null,u.onerror),u.onload=l.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/KinoCMS/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)o();else{var a=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode&&i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===n))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===n)return r}},o=function(o){return new Promise((function(r,i){var a=t.miniCssF(o),u=t.p+a;if(n(a,u))return r();e(o,u,null,r,i)}))},r={143:0};t.f.miniCss=function(e,n){var t={70:1,137:1,247:1,307:1,321:1,398:1,476:1,558:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),u=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],u=o[1],c=o[2],d=0;if(a.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(c)var f=c(t)}for(n&&n(o);d<a.length;d++)i=a[d],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(f)},o=self["webpackChunkkinocms"]=self["webpackChunkkinocms"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(3185)}));o=t.O(o)})();
//# sourceMappingURL=app.02e791b0.js.map