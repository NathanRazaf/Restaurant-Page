(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>j});var a=t(81),o=t.n(a),r=t(645),i=t.n(r),c=t(667),d=t.n(c),s=new URL(t(154),t.b),p=new URL(t(350),t.b),l=new URL(t(275),t.b),u=new URL(t(954),t.b),m=new URL(t(1),t.b),f=new URL(t(453),t.b),h=new URL(t(794),t.b),g=new URL(t(615),t.b),x=i()(o()),b=d()(s),v=d()(p),y=d()(l),w=d()(u),C=d()(m),E=d()(f),k=d()(h),T=d()(g);x.push([n.id,`@font-face {\n    font-family: VT323;\n    src: url(${b}) format("truetype");\n    font-weight: 600;\n    font-style: normal;\n}\n\nhtml, body {\n    height: fit-content;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-size: 1.5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#content {\n    font-family: VT323, monospace;\n    display: flex;\n    height: 100%;\n    width: 100%;\n    flex-direction: column;\n    background: url(${v}) repeat center center;\n    color: #fff;\n    transition: opacity 0.3s ease;\n}\n\n.header {\n    padding-bottom: 20px;\n    background-color: rgba(0,0, 0, 0.6);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 0 10px black;\n}\n\n.options {\n    display: flex;\n    gap: 60px;\n}\n\n.options button {\n    font-family: VT323, monospace;\n    font-size: 2rem;\n    background-color: rgba(0,0, 0, 0.6);\n    padding: 20px 30px;\n    letter-spacing: 1px;\n    border: none;\n    cursor: pointer;\n    transition: all 0.3s ease-in-out;\n\n}\n\n.options button:hover {\n    transform: translateY(-5px) translateX(-5px);\n    padding: 50px 40px;\n    box-shadow: 10px 10px 0 black;\n    font-size: 3rem;\n}\n\n#menuBtn {\n    background: url(${y}) no-repeat center center;\n    color: #4a044e;\n    text-shadow: 2px 2px 0 white;\n    background-size: cover;\n}\n#menuBtn:hover {\n    background: url(${w}) no-repeat center center;\n    background-size: cover;\n}\n\n#homeBtn {\n    background: url(${C}) no-repeat center center;\n    background-size: cover;\n    color: black;\n    text-shadow: 2px 2px 0 white;\n}\n\n#homeBtn:hover {\n    background: url(${E}) no-repeat center center;\n    background-size: cover;\n}\n\n#aboutBtn {\n    background: url(${k}) no-repeat center center;\n    background-size: cover;\n    color: white;\n    text-shadow: 2px 2px 0 #4a044e;\n}\n\n#aboutBtn:hover {\n    background: url(${T}) no-repeat center center;\n    background-size: cover;\n}\n\n.header h1 {\n    animation: swing 4s ease-in-out infinite;\n    font-size: 5rem;\n    padding: 0;\n    margin: 15px;\n    text-shadow: 5px 5px 0 black;\n}\n\n#container {\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    height: fit-content;\n    padding: 20px;\n    margin: 50px;\n    justify-self: center;\n    align-self: center;\n    background-color: rgba(0,0, 0, 0.6);\n    animation: fadeIn 1.5s;\n}\n\n#homeTitle {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    text-shadow: 3px 3px 0 #701a75;\n}\n\n#homeTitle img {\n    width: 60px;\n    height: 60px;\n    border-radius: 10px;\n}\n\n#homeDescription {\n    width: 80%;\n    text-align: center;\n    align-self: center;\n}\n\n.review {\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n    margin: 20px;\n    padding: 20px;\n    border: 2px solid #c084fc;\n    border-radius: 10px;\n    animation: balance 2s ease-in-out infinite;\n}\n\n.review p {\n    margin: 5px;\n    text-align: end;\n}\n\n.author {\n    display: flex;\n    align-items: center;\n    justify-self: flex-start;\n    width: fit-content;\n    transition: all 0.3s ease;\n    margin: 5px;\n    padding: 5px;\n\n}\n\n.author h3 {\n    color: #c084fc;\n    text-shadow: 2px 2px 0 black;\n    margin: 0;\n}\n\n.author img {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    margin-right: 10px;\n    box-shadow: 3px 3px 2px black;\n\n}\n\n.author:hover {\n    transform: translateY(-3px);\n}\n\n.footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background-color: rgba(0,0, 0, 0.6);\n}\n\n.footer img {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    border: none;\n    margin: 10px;\n    box-shadow: 3px 3px 2px black;\n    background-color: white;\n    transition: all 0.3s ease;\n}\n\n.footer img:hover {\n    background-color: #a5a5a5;\n}\n\n#menuTitle {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    text-shadow: 3px 3px 0 #047857;\n\n}\n\n#menuTitle img {\n    width: 60px;\n    height: 60px;\n    border-radius: 10px;\n}\n\n#menuTitle img:hover {\n}\n\n.menuItem {\n    width: 50%;\n    padding: 20px;\n    margin: 20px;\n    border: 2px solid #16db93;\n    border-radius: 10px;\n    transition: all 0.3s ease;\n    display: flex;\n    flex-direction: column;\n    animation: balance 2s ease-in-out infinite;\n}\n\n.menuItem img {\n    width: 150px;\n    height: 150px;\n    box-shadow: 3px 3px 2px black;\n    transition: all 0.3s ease;\n}\n\n.menuItem img:hover {\n    transform: scale(1.1);\n}\n\n.itemTitle {\n    display: flex;\n    justify-content: space-between;\n    color: #047857;\n    text-shadow: black 2px 2px 0;\n}\n\n.itemBottom {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#aboutTitle {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    text-shadow: 3px 3px 0 #a21caf;\n}\n\n#aboutTitle img {\n    width: 60px;\n    height: 60px;\n    border-radius: 10px;\n}\n\n.contactDiv {\n    margin-left: 50px;\n    margin-top: 20px;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    width: fit-content;\n    height: fit-content;\n    transition: all 0.3s ease;\n    padding-bottom: 5px;\n}\n\n.contactDiv p {\n    margin: 0;\n    padding: 0;\n}\n\n.contactDiv img {\n    width: 25px;\n    height: 25px;\n    background-color: red;\n}\n\n.contactDiv:hover {\n    transform: translateY(-5px);\n    border-bottom: 2px solid white;\n}\n\n#map {\n    align-self: center;\n    width: 90%;\n    margin: 30px;\n}\n\n@keyframes swing {\n    0% {\n        transform: rotateZ(0deg);\n    }\n    25% {\n        transform: rotateZ(1deg) scale(1.1);\n    }\n    50% {\n        transform: rotateZ(-1deg) scale(1);\n    }\n    75% {\n        transform: rotateZ(1deg) scale(1.1);\n    }\n    100% {\n        transform: rotateZ(0deg) scale(1);\n    }\n}\n\n@keyframes balance {\n    0% {\n        transform: translateY(0px);\n    }\n    50% {\n        transform: translateY(-5px);\n    }\n    100% {\n        transform: translateY(0px);\n    }\n}\n\n@keyframes fadeIn {\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\n\n`,""]);const j=x},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);a&&i[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var r={},i=[],c=0;c<n.length;c++){var d=n[c],s=a.base?d[0]+a.base:d[0],p=r[s]||0,l="".concat(s," ").concat(p);r[s]=p+1;var u=t(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,a);a.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=a(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var c=t(r[i]);e[c].references--}for(var d=a(n,o),s=0;s<r.length;s++){var p=t(r[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}r=d}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},350:(n,e,t)=>{n.exports=t.p+"183b981a16df57565e03.jpg"},154:(n,e,t)=>{n.exports=t.p+"2bc43ad8eb2f60b39f27.ttf"},453:(n,e,t)=>{n.exports=t.p+"23b891de0e0747e0db99.jpg"},615:(n,e,t)=>{n.exports=t.p+"ff730e588c8853f56f4f.jpg"},1:(n,e,t)=>{n.exports=t.p+"c06f84528bea1a7f336d.jpg"},794:(n,e,t)=>{n.exports=t.p+"c6db4f921f8894df1a6d.jpg"},954:(n,e,t)=>{n.exports=t.p+"70d0544bd3fa0e2ed961.jpg"},275:(n,e,t)=>{n.exports=t.p+"78e608aefd55c1f79d19.jpg"}},e={};function t(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={id:a,exports:{}};return n[a](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!n;)n=a[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),a=t(795),o=t.n(a),r=t(569),i=t.n(r),c=t(565),d=t.n(c),s=t(216),p=t.n(s),l=t(589),u=t.n(l),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"c53ae83bf7a3016cb9e4.gif",g=t.p+"26d4226dfb1c459f4d46.jpg",x=t.p+"4f4881f83882fb4d467a.jpg",b=t.p+"c6db4f921f8894df1a6d.jpg",v=t.p+"3069a24979bb70ac269c.jpg";function y(n,e,t,a){const o=document.createElement("div");o.classList.add("review");const r=document.createElement("div");r.classList.add("author");const i=new Image;i.src=e;const c=document.createElement("h3");c.textContent=n,r.appendChild(i),r.appendChild(c),o.appendChild(r);const d=document.createElement("p");d.classList.add("reviewContent"),d.textContent=t,o.appendChild(d);const s="★".repeat(a),p="☆".repeat(5-a),l=document.createElement("p");return l.textContent=s+p,o.appendChild(l),o}function w(){const n=document.getElementById("container");n.innerHTML="",n.appendChild(function(){const n=document.createElement("div");n.id="homeTitle";const e=document.createElement("img");e.src=h,e.alt="asuca-zuto-mayo",n.appendChild(e);const t=document.createElement("h1");t.textContent="Welcome to ZUTOMAYO FoodCourt !",n.appendChild(t);const a=e.cloneNode(!0);return n.appendChild(a),n}());const e=document.createElement("p");e.id="homeDescription",e.textContent="This is a fan-made website for ZUTOMAYO fans to buy custom ZUTOMAYO foods. Which, when you think about it really hard, just sounds like a 19yo teenager's dream. Yes, my dream.",n.appendChild(e);const t=y("Kanade",g,"I love the food here, it's so good !",5),a=y("Tanaka",x,"The purple burger looked strange but was amazing !",4),o=y("Sakura",b,"I'm just here for the background music, it rocks !",4),r=y("Kazuki",v,"Very kind staff and delicious food !",5);n.appendChild(t),n.appendChild(a),a.style.alignSelf="flex-end",n.appendChild(o),n.appendChild(r),r.style.alignSelf="flex-end"}const C=t.p+"a0f56003fb77cf735086.gif",E=t.p+"4d2d60190917eaa9ddfe.jpg",k=t.p+"c331de71309402c6730e.jpeg",T=t.p+"1843cb71db0aaa8e295a.png",j=t.p+"cdfa114412c8486908f7.png";function L(n,e,t,a,o){const r=document.createElement("div");r.classList.add("menuItem");const i=document.createElement("div");i.classList.add("itemTitle");const c=new Image;c.src=n;const d=document.createElement("h2");d.textContent=e,i.appendChild(d),i.appendChild(c),r.appendChild(i);const s=document.createElement("p");s.classList.add("description"),s.textContent=a,r.appendChild(s);const p=document.createElement("div");p.classList.add("itemBottom");const l=document.createElement("p");l.classList.add("itemPrice"),l.textContent="$"+t,p.appendChild(l);const u="★".repeat(o),m="☆".repeat(5-o),f=document.createElement("p");return f.classList.add("itemRating"),f.textContent=u+m,p.appendChild(f),r.appendChild(p),r}const I=t.p+"cc50359b52cc36d27fd4.gif",M=t.p+"0b454d6aeda1578fa2ba.svg",U=t.p+"ddcb5a47564e6888e047.svg",B=t.p+"ffe5adb98a0fefc21e46.svg",A=t.p+"8ed820373498e050ba48.svg",O=t.p+"7d6651e6867bce37447c.png";function Z(n,e){const t=document.createElement("div");t.classList.add("contactDiv");const a=new Image;a.src=n;const o=document.createElement("p");return o.textContent=e,t.appendChild(a),t.appendChild(o),t}const z=t.p+"550985caaa8859d4b95f.svg";window.onload;{const n=document.getElementById("content");n.classList.add("content-transition"),n.appendChild(function(){const n=document.createElement("div");n.classList.add("header");const e=document.createElement("h1");return e.textContent="ZUTOMAYO FoodCourt",n.appendChild(e),n.appendChild(function(){const n=document.createElement("div");n.classList.add("options");const e=document.createElement("button");e.id="homeBtn",e.textContent="Home";const t=document.createElement("button");t.id="menuBtn",t.textContent="Menu";const a=document.createElement("button");return a.id="aboutBtn",a.textContent="About Us",n.appendChild(e),n.appendChild(t),n.appendChild(a),n}()),n}());const e=document.createElement("div");e.id="container",n.appendChild(e),n.appendChild(function(){const n=document.createElement("div");n.classList.add("footer");const e=document.createElement("p");e.textContent="Copyright © 2021 NathanRazaf";const t=document.createElement("a");t.href="https://github.com/NathanRazaf";const a=new Image;return a.src=z,a.alt="github",t.appendChild(a),n.appendChild(e),n.appendChild(t),n}()),w()}document.getElementById("homeBtn").addEventListener("click",w),document.getElementById("menuBtn").addEventListener("click",(function(){const n=document.getElementById("container");n.innerHTML="",n.appendChild(function(){const n=document.createElement("div");n.id="menuTitle";const e=document.createElement("img");e.src=C,e.alt="ztmy-gif";const t=document.createElement("h1");return t.textContent="Menu",n.appendChild(e),n.appendChild(t),n.appendChild(e.cloneNode(!0)),n}());const e=L(E,"Nira's favourite ramen brand",10,"This delicious (premade) ramen was inspired by ZUTOMAYO's featuring withMori Calliope, in their collab song 'Kira Killer'. The favourite dish of every fan.",5),t=L(k,"Nira's (other) favourite ramen brand",12,"As you can see, Nira is really a fan of ramen. This one comes directly from ZUTOMAYO'smusic video for 'Mabushii DNA Dake'.",5),a=L(T,"Unigiri's famous hotdog",8,"This hotdog is the favourite food of Unigiri, the mascot of ZUTOMAYO.It's a... hotdog. Yea, Unigiri has simple tastes.",4),o=L(j,"A random bowl of rice with a fried egg",9,"I kinda ran out of ideas with this one. ZUTOMAYO doesn't display a lot of food in their MVs.",3);n.appendChild(e),n.appendChild(t),t.style.alignSelf="flex-end",n.appendChild(a),n.appendChild(o),o.style.alignSelf="flex-end"})),document.getElementById("aboutBtn").addEventListener("click",(function(){const n=document.getElementById("container");n.innerHTML="";const e=document.createElement("div");e.id="aboutTitle";const t=document.createElement("img");t.src=I,t.alt="ztmy-gif";const a=document.createElement("h1");a.textContent="About Us (me, actually)",e.appendChild(t),e.appendChild(a),e.appendChild(t.cloneNode(!0)),n.appendChild(e),n.appendChild(Z(M,"123-456-7890")),n.appendChild(Z(U,"rick.roll@example.com")),n.appendChild(Z(B,"Everyday : 9:00 AM - 5:00 PM")),n.appendChild(Z(A,"1234 Rick Roll St"));const o=new Image;o.src=O,o.id="map",n.appendChild(o)}))})()})();