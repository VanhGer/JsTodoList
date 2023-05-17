(()=>{"use strict";var n={163:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(81),i=e.n(r),o=e(645),a=e.n(o)()(i());a.push([n.id,".popUp {\r\n    position: fixed;\r\n    background-color: rgba(53, 48, 48, 0.151);\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.projectForm {\r\n    display:flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    background-color: rgb(205, 231, 200);\r\n    border-radius: 10px;\r\n    border:rgba(0, 0, 0, 0.6) solid;\r\n    height: 120px;\r\n    width: 20%;\r\n    box-shadow: var(rgba(0, 0, 0, 0.16) 0px 1px 4px);\r\n}\r\n\r\n.form-title {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: 18;\r\n    font-weight: bold;\r\n}\r\n.projectBtn {\r\n    border: none;\r\n    font-size: 18px;\r\n    font-weight: bolder;\r\n    border-radius: 10px;\r\n    background-color:inherit;\r\n    padding: 3px;\r\n    text-align: center;\r\n    color: black;\r\n    width: 70%;\r\n    transform: scale(1);\r\n}\r\n\r\n.projectBtn:hover {\r\n    filter: brightness(80%);\r\n    cursor: pointer;\r\n    background-color: var(--btn-container);\r\n    transition: var(--default-transition);\r\n    transform: scale(1.1);\r\n}\r\n\r\n.projectTitle {\r\n    font-size: 17px;\r\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n\r\n.dynamic {\r\n    display: flex;\r\n    border: black solid;\r\n    font-size: 18px;\r\n    border-radius: 3px;\r\n    background-color:inherit;\r\n    padding: 2px;\r\n    margin-bottom: 4px;\r\n    color: black;\r\n    width: 75%;\r\n    transform: scale(1);\r\n}\r\n\r\n.dynamic:hover {\r\n    filter: brightness(80%);\r\n    cursor: pointer;\r\n    background-color: var(--btn-container);\r\n    transition: var(--default-transition);\r\n    transform: scale(1.1);\r\n}\r\n\r\n.closeBtn {\r\n    flex-grow: 0.2;\r\n    color:black;\r\n}\r\n\r\n.closeBtn:hover {\r\n    color: red;\r\n}\r\n\r\ninput {\r\n    width: 80%;\r\n    height: 20px;\r\n    font-size: 16px;\r\n    border: solid 2px black;\r\n    border-radius: 5px;\r\n    margin-top: 2px;\r\n}\r\n\r\n",""]);const s=a},426:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(81),i=e.n(r),o=e(645),a=e.n(o)()(i());a.push([n.id,":root {\r\n    --h1-color: white;\r\n    --header-color: rgba(29, 34, 25, 0.596);\r\n    --bgr-color: rgba(233, 243, 205, 0.685);\r\n    --btn-container: rgba(250, 176, 115, 0.596);\r\n    --default-transition: all 0.2s ease-in-out;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    top: 0;\r\n    min-height: 100vh;\r\n    line-height: 1.6;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    align-items: center;\r\n    background-color: var(--header-color);\r\n    max-height: 20vh;\r\n}\r\n\r\nh1 {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: 40px;\r\n    color: white;\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    align-items: center;\r\n    background-color: black;\r\n}\r\n\r\nh3 {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: 20;\r\n    color: white;\r\n}\r\n\r\n.mainContent {\r\n    display: flex;\r\n    background-color: var(--bgr-color);\r\n    flex-wrap: nowrap;\r\n    height: 100%;\r\n    flex-grow: 1;\r\n}\r\n\r\n\r\n\r\n.btnContainer {\r\n    display: flex;\r\n    background-color: var(--btn-container);\r\n    flex-wrap: nowrap;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 230px;\r\n}\r\n\r\n.staticBtns {\r\n    display:flex;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n\r\n.dynamicBtns {\r\n    display:flex;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    flex-grow: 25;\r\n    flex-direction: column;\r\n    top: 0;\r\n    width: 100%;\r\n}\r\n\r\n.dyHeading {\r\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    font-size: 25px;\r\n    margin-top: 2px;\r\n}\r\n\r\n.staHeading {\r\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    font-size: 25px;\r\n    margin-bottom: 2px;\r\n    margin-top: 1px;\r\n}\r\n\r\n.inactive {\r\n    display: none;\r\n}\r\n\r\n.addBtn {\r\n    border: none;\r\n    font-size: 14px;\r\n    border-radius: 10px;\r\n    background-color: initial;\r\n    padding: 6px;\r\n    color: black;\r\n    width: 70%;\r\n    transform: scale(1);\r\n    margin-top: -13%;\r\n    margin-bottom: 4px;\r\n\r\n}\r\n\r\n.addBtn:hover {\r\n    filter: brightness(80%);\r\n    cursor: pointer;\r\n    background-color: var(--btn-container);\r\n    transition: var(--default-transition);\r\n    transform: scale(1.1);\r\n}\r\n\r\n.static {\r\n    border: black solid;\r\n    font-size: 18px;\r\n    border-radius: 3px;\r\n    background-color:inherit;\r\n    padding: 4px;\r\n    margin-top: 4px;\r\n    color: black;\r\n    width: 80%;\r\n    transform: scale(1);\r\n}\r\n\r\n.static:hover {\r\n    filter: brightness(80%);\r\n    cursor: pointer;\r\n    background-color: var(--btn-container);\r\n    transition: var(--default-transition);\r\n    transform: scale(1.1);\r\n}",""]);const s=a},73:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(81),i=e.n(r),o=e(645),a=e.n(o)()(i());a.push([n.id,"\r\n.newTab {\r\n    display:none;\r\n}\r\n\r\n.active {\r\n    display: flex;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    justify-items: center;\r\n}\r\n\r\n.contentHeading {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    \r\n}\r\n\r\nh2 {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    color: white;\r\n}",""]);const s=a},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var o={},a=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=e(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=i(m,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function i(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=e(o[a]);t[s].references--}for(var c=r(n,i),d=0;d<o.length;d++){var l=e(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,i&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return n[r](o,o.exports,e),o.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{var n=e(379),t=e.n(n),r=e(795),i=e.n(r),o=e(569),a=e.n(o),s=e(565),c=e.n(s),d=e(216),l=e.n(d),p=e(589),u=e.n(p),m=e(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=e(73),v={};v.styleTagTransform=u(),v.setAttributes=c(),v.insert=a().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=l(),t()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;var b=e(163),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=a().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=l(),t()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals;function x(n,t){const e=document.getElementById("staticBtns"),r=document.createElement("button");return r.classList.add(t),r.textContent=n,e.appendChild(r),r}function y(n){const t=document.createElement("div");return t.classList.add("newTab"),t.classList.add(n),t}function C(n,t){n.addEventListener("click",function(n){return function(){n.classList.contains("active")||(document.querySelectorAll(".newTab").forEach((n=>n.classList.remove("active"))),n.classList.add("active"))}}(t))}class w{constructor(n){this.tasks=[],this.title=n}addTask(n){this.isAlreadyIn(n)?alert("This task is already in your project."):this.tasks.push(n)}removeTask(n){this.tasks=this.tasks.filter((t=>t.title!==n))}getTask(n){return this.tasks.filter((t=>t.title===n))}isAlreadyIn(n){return this.tasks.some((t=>t.title===n.title))}indexOf(n){if(this.isAlreadyIn(n))return this.tasks.indexOf(n)}copy(n){this.tasks=n.tasks}}const L=new class{constructor(){this.list=[]}addProject(n){this.isAlreadyIn(n)?alert("This project is already in your list."):this.list.push(n)}removeProject(n){this.list=this.list.filter((t=>t.title!==n))}getProject(n){return this.list.filter((t=>t.title===n))}isAlreadyIn(n){return this.list.some((t=>t.title===n.title))}indexOf(n){if(this.isAlreadyIn(n))return this.list.indexOf(n)}copy(n){this.list=n.list}sz(){return this.list.length}};function E(){const n=document.getElementById("dynamicBtns");n.innerHTML="";for(let t of L.list)k(t,n)}function k(n,t){const e=document.createElement("div");e.classList.add("dynamic");const r=document.createElement("div");r.textContent="☒",r.classList.add("closeBtn"),e.appendChild(r),r.addEventListener("click",(()=>{L.list.splice(L.indexOf(n),1),E()}));const i=document.createElement("div");i.textContent=n.title,i.classList.add("projectTitle"),e.appendChild(i),t.appendChild(e);const o=y(n.title);o.classList.add("dynamicTab"),C(e,o)}!function(){const n=document.createElement("header"),t=document.createElement("h1");t.textContent="Todo List",n.appendChild(t);const e=document.createElement("div");e.classList.add("mainContent");const r=document.createElement("div");r.classList.add("btnContainer"),r.setAttribute("id","btnContainer");const i=document.createElement("div");i.classList.add("staticBtns"),i.setAttribute("id","staticBtns");const o=document.createElement("p");o.textContent="Home",o.classList.add("staHeading"),i.appendChild(o),r.appendChild(i);const a=document.createElement("div");a.classList.add("dynamicBtns"),a.setAttribute("id","dynamicBtns");const s=document.createElement("p");s.textContent="Projects",s.classList.add("dyHeading"),r.appendChild(s);const c=document.createElement("button");c.textContent="＋ Add project",c.classList.add("addBtn"),c.setAttribute("id","addBtn"),r.appendChild(c),r.appendChild(a),e.appendChild(r);const d=document.createElement("div");d.classList.add("content"),d.setAttribute("id","content"),e.appendChild(d);const l=document.createElement("footer"),p=document.createElement("h3");p.textContent="Made by Vanhger",l.appendChild(p),document.body.appendChild(n),document.body.appendChild(e),document.body.appendChild(l)}();const A=document.getElementById("content"),T=x("Today","static"),j=x("This week","static"),B=x("All","static"),I=function(n){n.classList.add("active");const t=document.createElement("div");t.classList.add("todayContent");const e=document.createElement("p");return e.textContent="Today",e.classList.add("contentHeading"),n.appendChild(e),n.appendChild(t),n}(y("today")),Z=function(n){const t=document.createElement("div");t.classList.add("weekContent");const e=document.createElement("p");return e.textContent="This week",e.classList.add("contentHeading"),n.appendChild(e),n.appendChild(t),n}(y("week")),M=function(n){const t=document.createElement("div");t.classList.add("allContent");const e=document.createElement("p");return e.textContent="All",e.classList.add("contentHeading"),n.appendChild(e),n.appendChild(t),n}(y("all"));C(T,I),C(j,Z),C(B,M),A.appendChild(I),A.appendChild(Z),A.appendChild(M),function(){const n=document.getElementById("addBtn"),t=document.createElement("div");t.classList.add("popUp"),t.setAttribute("id","popUp"),t.classList.add("inactive");const e=document.createElement("form");e.classList.add("projectForm"),e.classList.add("inactive"),e.setAttribute("id","projectForm");const r=document.createElement("div");r.textContent="Add a project",r.classList.add("form-title"),e.appendChild(r);const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("placeholder","Title"),i.setAttribute("maxlength","15"),i.id="title-input",e.appendChild(i);const o=document.createElement("div");o.classList.add("form-btn-container"),e.appendChild(o);const a=document.createElement("button");var s,c;a.classList.add("form-confirm-btn"),a.setAttribute("type","button"),a.addEventListener("click",(s=t,c=e,function(){c.classList.remove("active"),s.classList.remove("active");const n=document.getElementById("title-input").value,t=new w(n);L.addProject(t),c.reset(),E()})),a.textContent="Confirm",o.appendChild(a);const d=document.createElement("button");d.classList.add("form-cancel-btn"),d.setAttribute("type","button"),d.addEventListener("click",function(n,t){return function(){t.classList.remove("active"),n.classList.remove("active"),t.reset(),showProject()}}(t,e)),d.textContent="Cancel",o.appendChild(d),t.appendChild(e),document.body.appendChild(t),n.addEventListener("click",function(n,t){return function(){n.classList.contains("active")&&t.classList.contains("active")||(t.classList.contains("active")||t.classList.add("active"),n.classList.contains("active")||n.classList.add("active"),console.log(n.classList),console.log(t.classList))}}(t,e))}()})()})();