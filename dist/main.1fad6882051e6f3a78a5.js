(()=>{"use strict";var e,t={5089:(e,t,n)=>{var a=n(7294),r=n(3935),c=n(9226),l=n(3727),o=n(5977),s=n(6403),i=n(5427),u=(n(1249),n(9720),n(2222)),m=(0,s.PH)("api/callBegan"),d=(0,s.PH)("api/callSuccess"),p=(0,s.PH)("api/callFailed"),h=(0,s.PH)("champs/callBegan"),f=(0,s.PH)("champs/callSuccess"),g=(0,s.PH)("champs/callFailed"),y=(0,s.oM)({name:"champs",initialState:{loading:!1,list:{},champSelection:null,category:"All",selected:{}},reducers:{champsRequested:function(e){e.loading=!0},champsReceived:function(e,t){e.list=t.payload,e.loading=!1},champsRequestFailed:function(e){e.loading=!1},champSelection:function(e,t){e.champSelection=t.payload},champCategory:function(e,t){e.category=t.payload},selectedRequested:function(e){e.loading=!0},selectedReceived:function(e,t){e.selected=t.payload,e.loading=!1},slectedRequestFailed:function(e){e.loading=!1}}}),v=y.actions,E=v.champsReceived,b=v.champsRequested,O=v.champsRequestFailed,S=(v.champSelection,v.champCategory),j=v.selectedRequested,k=v.selectedReceived,w=v.slectedRequestFailed;const P=y.reducer;var R="/champs",A=(0,u.P1)((function(e){return e.entities.champs.list}),(function(e){return Object.entries(e).map((function(e){return e[1]}))}));const Z=(0,i.UY)({champs:P}),N=(0,i.UY)({entities:Z});var _=n(9669),I=n.n(_);const T=(0,s.xC)({reducer:N,middleware:[function(e){var t=e.dispatch;return function(e){return function(n){if(n.type!==m.type)return e(n);var a=n.payload,r=a.onStart,c=a.onSuccess,l=a.onError;r&&t({type:r}),e(n),I().get("https://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion.json").then((function(e){t(d(e.data.data)),c&&t({type:c,payload:e.data.data})})).catch((function(e){t(p(e.message)),l&&t({type:l,payload:e.message})}))}}},function(e){var t=e.dispatch;return function(e){return function(n){if(n.type!==h.type)return e(n);var a=n.payload,r=a.ID,c=a.onStart,l=a.onSuccess,o=a.onError;c&&t({type:c}),e(n),I().get("https://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion/".concat(r,".json")).then((function(e){t(f(e.data.data)),l&&t({type:l,payload:e.data.data})})).catch((function(e){t(g(e.message)),o&&t({type:o,payload:e.message})}))}}}]});var C=n(3379),x=n.n(C),q=n(7795),H=n.n(q),F=n(569),U=n.n(F),D=n(3565),W=n.n(D),M=n(9216),B=n.n(M),L=n(4589),z=n.n(L),V=n(8528),Y={};Y.styleTagTransform=z(),Y.setAttributes=W(),Y.insert=U().bind(null,"head"),Y.domAPI=H(),Y.insertStyleElement=B(),x()(V.Z,Y),V.Z&&V.Z.locals&&V.Z.locals;const J=function(){return a.createElement("div",{className:"home border-0 rounded-0"},a.createElement("div",{className:"card-home"},a.createElement("h5",{className:"card-title"},"Hello my name is",a.createElement("a",{className:"card__link",href:"https://github.com/Wusinho",target:"_blank",rel:"noreferrer"}," Heber Lazo")),a.createElement("p",{className:"card-title"},"It is game catalogue using React and Redux, It has a home page with information, and on the navbar it is possible see all the champion in the game League of Legends, it is possible to see a specific champion with a small description."),a.createElement("h3",null,"Built with"),a.createElement("ul",null,a.createElement("li",null,"JavaScript"),a.createElement("li",null,"Html"),a.createElement("li",null,"Scss"),a.createElement("li",null,"React"),a.createElement("li",null,"Redux"),a.createElement("li",null,"Bootstrap"),a.createElement("li",null,"Package.json")),a.createElement("a",{className:"card-title link",href:"https://github.com/Wusinho/React-Redux-Catalogue",target:"_blank",rel:"noreferrer"},"Link to Repo")))};n(7327),n(8309);var K=n(5697),$=n.n(K),G=n(3720),Q={};Q.styleTagTransform=z(),Q.setAttributes=W(),Q.insert=U().bind(null,"head"),Q.domAPI=H(),Q.insertStyleElement=B(),x()(G.Z,Q),G.Z&&G.Z.locals&&G.Z.locals;var X=function(e){var t=e.champs;return Object.entries(t).map((function(e){return e[1]})).map((function(e){return a.createElement("div",{key:e.key,className:"card m-2 rounded-3 link__card",style:{minWidth:"300px",backgroundImage:(t=e.id,'url("http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'.concat(t,'_0.jpg")')),backgroundColor:"black"}},a.createElement(l.rU,{to:"/champs/".concat(e.id),key:e.key},a.createElement("div",{className:"card-body"},a.createElement("h5",{className:"card-title"},e.title),a.createElement("h2",{className:"card-title"},e.name))));var t}))};const ee=X;X.defaultProps={book:{id:"",name:"",title:""}},X.propTypes={book:$().objectOf(Object)};const te=function(){return a.createElement("div",null,a.createElement("h1",null,"Loading..."))},ne=[{cat:"Mage",id:1},{cat:"Assassin",id:2},{cat:"Tank",id:3},{cat:"Fighter",id:4},{cat:"Marksman",id:5},{cat:"Support",id:6}],ae=function(){var e=(0,c.I0)();return a.createElement("form",null,a.createElement("select",{className:"form-control",onChange:function(t){return function(t){e(S(t.target.value))}(t)}},a.createElement("option",{defaultValue:!0,disabled:!0},"Choose a Category"),a.createElement("option",{key:"0"}," All "),ne.map((function(e){return a.createElement("option",{key:e.id,value:e.cat},e.cat)}))))},re=function(){var e=(0,c.v9)((function(e){return e.entities.champs.loading})),t=(0,c.v9)(A),n=(0,c.v9)((function(e){return e.entities.champs.category}));return a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement(ae,null)),a.createElement("div",{className:"card-group"},e?a.createElement(te,null):function(e){if("All"===e)return a.createElement(ee,{champs:t});var n=t.filter((function(t){return t.tags[0]===e||t.tags[1]===e}));return a.createElement(ee,{champs:n})}(n)))};var ce=n(3603),le={};le.styleTagTransform=z(),le.setAttributes=W(),le.insert=U().bind(null,"head"),le.domAPI=H(),le.insertStyleElement=B(),x()(ce.Z,le),ce.Z&&ce.Z.locals&&ce.Z.locals;const oe=function(){return a.createElement("nav",{className:"sticky-top navbar"},a.createElement("ul",{className:"nav-links"},a.createElement(l.rU,{to:"/"},a.createElement("li",null,"Home")),a.createElement(l.rU,{to:"/champs"},a.createElement("li",null,"Champs")),a.createElement(l.rU,{to:"/registration"},a.createElement("li",null,"Registration"))))};n(4916),n(4723);var se=n(4676),ie={};function ue(e){var t=e.champ;return Object.entries(t).map((function(e){return e[1]})).map((function(e){return a.createElement("div",{key:e.key,style:{backgroundImage:(t=e.id,'url("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/'.concat(t,'_0.jpg")'))},className:"champ__card border-0 rounded-0"},a.createElement("div",{className:"champ__body",key:e.key},a.createElement("h5",{className:"card-title"},e.title),a.createElement("h2",{className:"card-title"},e.name),a.createElement("p",{className:"card-title"},e.lore),a.createElement("div",{className:"champ__tips"},a.createElement("div",{className:"card-title"},e.allytips),a.createElement("div",{className:"card-title"},e.enemytips))));var t}))}ie.styleTagTransform=z(),ie.setAttributes=W(),ie.insert=U().bind(null,"head"),ie.domAPI=H(),ie.insertStyleElement=B(),x()(se.Z,ie),se.Z&&se.Z.locals&&se.Z.locals;const me=ue;ue.defaultProps={champ:{key:"",title:"",name:"",lore:"",allytips:"",enemytips:""}},ue.propTypes={champ:$().objectOf(Object)};var de=function(e){var t=e.match.params.id,n=(0,c.v9)((function(e){return e.entities.champs.selected})),r=(0,c.I0)();return(0,a.useEffect)((function(){r(function(e){return h({url:R,ID:e,onStart:j.type,onSuccess:k.type,onError:w.type})}(t))}),[]),a.createElement("div",{className:"champ__container"},n?a.createElement(me,{champ:n}):a.createElement(te,null))};const pe=de;function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){ge(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ye(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,c=[],l=!0,o=!1;try{for(n=n.call(e);!(l=(a=n.next()).done)&&(c.push(a.value),!t||c.length!==t);l=!0);}catch(e){o=!0,r=e}finally{try{l||null==n.return||n.return()}finally{if(o)throw r}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ve(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ve(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ve(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}de.defaultProps={match:""},de.propTypes={match:$().objectOf(Object)},n(9753),n(2526),n(1817),n(1539),n(2165),n(6992),n(8783),n(3948),n(7042),n(1038),n(9070),n(7941),n(5003),n(9554),n(4747),n(9337),n(3321);const Ee=function(){var e=ye((0,a.useState)({username:"",password:"",password_confirmation:""}),2),t=e[0],n=e[1],r=ye((0,a.useState)({}),2),c=r[0],l=r[1],o=function(e){n(fe(fe({},t),{},ge({},e.target.name,e.target.value)))};return console.log(c),a.createElement("form",{onSubmit:function(e){I().post("https://lit-ridge-70863.herokuapp.com/users",t,{headers:{"Access-Control-Allow-Origin":"*"}},{mode:"cors"}).then((function(e){l(e.data)})).catch((function(e){l(e.message)})),e.preventDefault()}},a.createElement("h2",null,"Registration"),a.createElement("input",{type:"username",name:"username",placeholder:"username",onChange:o,required:!0}),a.createElement("input",{type:"password",name:"password",placeholder:"Password",onChange:o,required:!0}),a.createElement("input",{type:"password",name:"password_confirmation",placeholder:"Password confirmation",onChange:o,required:!0}),a.createElement("button",{type:"submit"},"Register"))};var be=n(7672),Oe={};Oe.styleTagTransform=z(),Oe.setAttributes=W(),Oe.insert=U().bind(null,"head"),Oe.domAPI=H(),Oe.insertStyleElement=B(),x()(be.Z,Oe),be.Z&&be.Z.locals&&be.Z.locals,T.dispatch(m({url:R,onStart:b.type,onSuccess:E.type,onError:O.type}));const Se=function(){return a.createElement(c.zt,{store:T},a.createElement(l.VK,null,a.createElement("div",null,a.createElement(oe,null),a.createElement(o.rs,null,a.createElement(o.AW,{path:"/",exact:!0,component:J}),a.createElement(o.AW,{path:"/champs",exact:!0,component:re}),a.createElement(o.AW,{path:"/champs/:id",exact:!0,component:pe}),a.createElement(o.AW,{exact:!0,path:"/registration",component:Ee})))))};n(7984),r.render(a.createElement(a.StrictMode,null,a.createElement(Se,null)),document.getElementById("root"))},7672:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(4015),r=n.n(a),c=n(3645),l=n.n(c)()(r());l.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const o=l},3720:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(4015),r=n.n(a),c=n(3645),l=n.n(c)()(r());l.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const o=l},4676:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(4015),r=n.n(a),c=n(3645),l=n.n(c)()(r());l.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const o=l},8528:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(4015),r=n.n(a),c=n(3645),l=n.n(c)()(r());l.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const o=l},3603:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(4015),r=n.n(a),c=n(3645),l=n.n(c)()(r());l.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const o=l}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var c=n[e]={id:e,exports:{}};return t[e](c,c.exports,a),c.exports}a.m=t,e=[],a.O=(t,n,r,c)=>{if(!n){var l=1/0;for(u=0;u<e.length;u++){for(var[n,r,c]=e[u],o=!0,s=0;s<n.length;s++)(!1&c||l>=c)&&Object.keys(a.O).every((e=>a.O[e](n[s])))?n.splice(s--,1):(o=!1,c<l&&(l=c));if(o){e.splice(u--,1);var i=r();void 0!==i&&(t=i)}}return t}c=c||0;for(var u=e.length;u>0&&e[u-1][2]>c;u--)e[u]=e[u-1];e[u]=[n,r,c]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,c,[l,o,s]=n,i=0;for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(s)var u=s(a);for(t&&t(n);i<l.length;i++)c=l[i],a.o(e,c)&&e[c]&&e[c][0](),e[l[i]]=0;return a.O(u)},n=self.webpackChunkcapstone=self.webpackChunkcapstone||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=a.O(void 0,[655],(()=>a(5089)));r=a.O(r)})();
//# sourceMappingURL=main.1fad6882051e6f3a78a5.js.map