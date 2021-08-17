(()=>{"use strict";var e,t={1539:(e,t,n)=>{var r=n(7294),a=n(3935),o=n(9226),l=n(3727),c=n(5977),s=n(7407),i=n(9620),u=(0,s.PH)("api/callBegan"),m=(0,s.PH)("api/callSuccess"),d=(0,s.PH)("api/callFailed"),p=((0,s.PH)("book/bookFiltered"),(0,s.oM)({name:"books",initialState:{loading:!1,list:{}},reducers:{booksRequested:function(e){e.loading=!0},booksReceived:function(e,t){e.list=t.payload,e.loading=!1},booksRequestFailed:function(e){e.loading=!1}}})),f=p.actions,h=f.booksReceived,v=f.booksRequested,g=f.booksRequestFailed;const b=p.reducer;var y="book/changeFilter";const E=(0,i.UY)({books:b,filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"All",t=arguments.length>1?arguments[1]:void 0;return t.type===y?t.payload:e}}),k=(0,i.UY)({entities:E});var Z=n(9669),j=n.n(Z);const S=function(e){var t=e.dispatch;return function(e){return function(n){if(n.type!==u.type)return e(n);var r=n.payload,a=(r.url,r.method,r.data,r.onStart),o=r.onSuccess,l=r.onError;a&&t({type:a}),e(n),j().get("http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion.json").then((function(e){t(m(e.data.data)),o&&t({type:o,payload:e.data.data})})).catch((function(e){t(d(e.message)),l&&t({type:l,payload:e.message})}))}}};var A=n(3379),N=n.n(A),w=n(7795),O=n.n(w),R=n(569),_=n.n(R),x=n(3565),P=n.n(x),T=n(9216),I=n.n(T),C=n(4589),F=n.n(C),H=n(8528),U={};U.styleTagTransform=F(),U.setAttributes=P(),U.insert=_().bind(null,"head"),U.domAPI=O(),U.insertStyleElement=I(),N()(H.Z,U),H.Z&&H.Z.locals&&H.Z.locals;const M=function(){return r.createElement("div",{className:"home border-0 rounded-0"},r.createElement("div",{className:"card-home"},r.createElement("h5",{className:"card-title"},"Hello my name is",r.createElement("a",{className:"card__link",href:"https://github.com/Wusinho",target:"_blank",rel:"noreferrer"}," Heber Lazo")),r.createElement("p",{className:"card-title"},"It is game catalogue using React and Redux, It has a home page with information, and on the navbar it is possible see all the champion in the game League of Legends, it is possible to see a specific champion with a small description."),r.createElement("h3",null,"Built with"),r.createElement("ul",null,r.createElement("li",null,"JavaScript"),r.createElement("li",null,"Html"),r.createElement("li",null,"Scss"),r.createElement("li",null,"React"),r.createElement("li",null,"Redux"),r.createElement("li",null,"Bootstrap"),r.createElement("li",null,"Package.json")),r.createElement("a",{className:"card-title link",href:"https://github.com/Wusinho/React-Redux-Catalogue",target:"_blank",rel:"noreferrer"},"Link to Repo")))};n(7327),n(1249),n(9720),n(8309);var W=n(5697),L=n.n(W),q=n(3720),B={};B.styleTagTransform=F(),B.setAttributes=P(),B.insert=_().bind(null,"head"),B.domAPI=O(),B.insertStyleElement=I(),N()(q.Z,B),q.Z&&q.Z.locals&&q.Z.locals;var z=function(e){var t=e.books;return Object.entries(t).map((function(e){return e[1]})).map((function(e){return r.createElement("div",{className:"card m-2 rounded-3 link__card",key:e.key,style:{minWidth:"300px",backgroundImage:(t=e.id,'url("https:ddragon.leagueoflegends.com/cdn/img/champion/loading/'.concat(t,'_0.jpg")')),backgroundColor:"black"}},r.createElement(l.rU,{to:"/shop/".concat(e.id),key:e.id},r.createElement("div",{className:"card-body"},r.createElement("h5",{className:"card-title"},e.title),r.createElement("h2",{className:"card-title"},e.name))));var t}))};const V=z;z.defaultProps={book:{id:"",name:"",status:"",species:""}},z.propTypes={book:L().objectOf(Object)};const Y=function(){return r.createElement("div",null,r.createElement("h1",null,"Loading..."))},J=[{cat:"Mage",id:1},{cat:"Assassin",id:2},{cat:"Tank",id:3},{cat:"Fighter",id:4},{cat:"Marksman",id:5},{cat:"Support",id:6}],K=function(){var e=(0,o.I0)();return r.createElement("form",null,r.createElement("select",{className:"form-control",onChange:function(t){return function(t){var n;e((n=t.target.value,{type:y,payload:n}))}(t)}},r.createElement("option",{defaultValue:!0,disabled:!0},"Choose a Category"),r.createElement("option",{key:"0"}," All "),J.map((function(e){return r.createElement("option",{key:e.id,value:e.cat},e.cat)}))))},$=function(){var e=(0,o.v9)((function(e){return e.entities.books.list})),t=(0,o.v9)((function(e){return e.entities.books.loading})),n=(0,o.v9)((function(e){return e.entities.filter}));return r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement(K,null)),r.createElement("div",{className:"card-group"},t?r.createElement(Y,null):function(t){if("All"===t)return r.createElement(V,{books:e});var n=Object.entries(e).map((function(e){return e[1]})).filter((function(e){return e.tags[0]===t||e.tags[1]===t}));return r.createElement(V,{books:n})}(n)))};var D=n(3603),G={};G.styleTagTransform=F(),G.setAttributes=P(),G.insert=_().bind(null,"head"),G.domAPI=O(),G.insertStyleElement=I(),N()(D.Z,G),D.Z&&D.Z.locals&&D.Z.locals;const Q=function(){return r.createElement("nav",{className:"sticky-top navbar"},r.createElement("ul",{className:"nav-links"},r.createElement(l.rU,{to:"/"},r.createElement("li",null,"Home")),r.createElement(l.rU,{to:"/shop"},r.createElement("li",null,"Champs"))))};n(5666),n(4916),n(4723),n(241),n(8674),n(9753),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948),n(7042),n(1038);var X=n(4676),ee={};function te(e){var t=e.champ,n=e.img;return Object.entries(t).map((function(e){return e[1]})).map((function(e){return r.createElement("div",{key:e.key,style:{backgroundImage:'url("'.concat(n,'")')},className:"champ__card border-0 rounded-0"},r.createElement("div",{className:"champ__body",key:e.key},r.createElement("h5",{className:"card-title"},e.title),r.createElement("h2",{className:"card-title"},e.name),r.createElement("p",{className:"card-title"},e.lore),r.createElement("div",{className:"champ__tips"},r.createElement("div",{className:"card-title"},e.allytips),r.createElement("div",{className:"card-title"},e.enemytips))))}))}ee.styleTagTransform=F(),ee.setAttributes=P(),ee.insert=_().bind(null,"head"),ee.domAPI=O(),ee.insertStyleElement=I(),N()(X.Z,ee),X.Z&&X.Z.locals&&X.Z.locals;const ne=te;function re(e,t,n,r,a,o,l){try{var c=e[o](l),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function ae(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function l(e){re(o,r,a,l,c,"next",e)}function c(e){re(o,r,a,l,c,"throw",e)}l(void 0)}))}}function oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return le(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?le(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}te.defaultProps={champ:"hello"},te.propTypes={champ:L().objectOf(Object)};var ce=function(e){var t=e.match,n=oe((0,r.useState)({}),2),a=n[0],o=n[1],l=oe((0,r.useState)({}),2),c=l[0],s=l[1],i=function(){var e=ae(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion/".concat(t.params.id,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,o(r.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=ae(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/".concat(t.params.id,"_0.jpg"));case 2:n=e.sent,s(n.url);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){i(),u()}),[]),r.createElement("div",{className:"champ__container"},a&&c?r.createElement(ne,{champ:a,img:c}):r.createElement(Y,null))};const se=ce;ce.defaultProps={match:""},ce.propTypes={match:L().objectOf(Object)};var ie=n(7672),ue={};ue.styleTagTransform=F(),ue.setAttributes=P(),ue.insert=_().bind(null,"head"),ue.domAPI=O(),ue.insertStyleElement=I(),N()(ie.Z,ue),ie.Z&&ie.Z.locals&&ie.Z.locals;var me=(0,s.xC)({reducer:k,middleware:[S]});me.dispatch(u({url:"/books",onStart:v.type,onSuccess:h.type,onError:g.type}));const de=function(){return r.createElement(o.zt,{store:me},r.createElement(l.VK,null,r.createElement("div",null,r.createElement(Q,null),r.createElement(c.rs,null,r.createElement(c.AW,{path:"/",exact:!0,component:M}),r.createElement(c.AW,{path:"/shop",exact:!0,component:$}),r.createElement(c.AW,{path:"/shop/:id",exact:!0,component:se})))))};n(7984),a.render(r.createElement(r.StrictMode,null,r.createElement(de,null)),document.getElementById("root"))},7672:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(4015),a=n.n(r),o=n(3645),l=n.n(o)()(a());l.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const c=l},3720:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(4015),a=n.n(r),o=n(3645),l=n.n(o)()(a());l.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const c=l},4676:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(4015),a=n.n(r),o=n(3645),l=n.n(o)()(a());l.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const c=l},8528:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(4015),a=n.n(r),o=n(3645),l=n.n(o)()(a());l.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const c=l},3603:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(4015),a=n.n(r),o=n(3645),l=n.n(o)()(a());l.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const c=l}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={id:e,exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,a,o)=>{if(!n){var l=1/0;for(u=0;u<e.length;u++){for(var[n,a,o]=e[u],c=!0,s=0;s<n.length;s++)(!1&o||l>=o)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(c=!1,o<l&&(l=o));if(c){e.splice(u--,1);var i=a();void 0!==i&&(t=i)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,a,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[l,c,s]=n,i=0;for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(s)var u=s(r);for(t&&t(n);i<l.length;i++)o=l[i],r.o(e,o)&&e[o]&&e[o][0](),e[l[i]]=0;return r.O(u)},n=self.webpackChunkcapstone=self.webpackChunkcapstone||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[272],(()=>r(1539)));a=r.O(a)})();
//# sourceMappingURL=main.936f01de7da6e1131477.js.map