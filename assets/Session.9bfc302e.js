import{_ as ee,D as T,S as te}from"./QuestionBox.8acda0a9.js";import{i as g,u as f,p as re,l as L,q as ne,s as se,x as Y,j as q,o as v,b as _,a as oe,d as ae,e as m,f as J,w as ie,F as x,y as M,t as R,z as le,A as ue,h as z,B as V,n as ce}from"./index.f3b3d667.js";var B;const A=typeof window!="undefined",fe=e=>typeof e=="string",W=()=>{};A&&((B=window==null?void 0:window.navigator)==null?void 0:B.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function de(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const Q=e=>e();function pe(e=Q){const t=g(!0);function r(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:r,resume:n,eventFilter:(...o)=>{t.value&&e(...o)}}}function C(e){return ne()?(se(e),!0):!1}function ve(e,t=1e3,r={}){const{immediate:n=!0,immediateCallback:a=!1}=r;let o=null;const l=g(!1);function c(){o&&(clearInterval(o),o=null)}function d(){l.value=!1,c()}function s(){f(t)<=0||(l.value=!0,a&&e(),c(),o=setInterval(e,f(t)))}if(n&&A&&s(),re(t)){const u=L(t,()=>{l.value&&A&&s()});C(u)}return C(d),{isActive:l,pause:d,resume:s}}var G=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,me=(e,t)=>{var r={};for(var n in e)_e.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&G)for(var n of G(e))t.indexOf(n)<0&&he.call(e,n)&&(r[n]=e[n]);return r};function we(e,t,r={}){const n=r,{eventFilter:a=Q}=n,o=me(n,["eventFilter"]);return L(e,de(a,t),o)}var ge=Object.defineProperty,ye=Object.defineProperties,be=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,H=(e,t,r)=>t in e?ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Oe=(e,t)=>{for(var r in t||(t={}))X.call(t,r)&&H(e,r,t[r]);if(E)for(var r of E(t))Z.call(t,r)&&H(e,r,t[r]);return e},Se=(e,t)=>ye(e,be(t)),xe=(e,t)=>{var r={};for(var n in e)X.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&E)for(var n of E(e))t.indexOf(n)<0&&Z.call(e,n)&&(r[n]=e[n]);return r};function Ne(e,t,r={}){const n=r,{eventFilter:a}=n,o=xe(n,["eventFilter"]),{eventFilter:l,pause:c,resume:d,isActive:s}=pe(a);return{stop:we(e,t,Se(Oe({},o),{eventFilter:l})),pause:c,resume:d,isActive:s}}function Ae(e){var t;const r=f(e);return(t=r==null?void 0:r.$el)!=null?t:r}const I=A?window:void 0;function Ee(...e){let t,r,n,a;if(fe(e[0])?([r,n,a]=e,t=I):[t,r,n,a]=e,!t)return W;let o=W;const l=L(()=>Ae(t),d=>{o(),d&&(d.addEventListener(r,n,a),o=()=>{d.removeEventListener(r,n,a),o=W})},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return C(c),c}const k=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},D="__vueuse_ssr_handlers__";k[D]=k[D]||{};const Pe=k[D];function $e(e,t){return Pe[e]||t}function je(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const Fe={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Te(e,t,r,n={}){var a;const{flush:o="pre",deep:l=!0,listenToStorageChanges:c=!0,writeDefaults:d=!0,shallow:s,window:u=I,eventFilter:b,onError:w=i=>{console.error(i)}}=n,p=(s?Y:g)(t);if(!r)try{r=$e("getDefaultStorage",()=>{var i;return(i=I)==null?void 0:i.localStorage})()}catch(i){w(i)}if(!r)return p;const y=f(t),O=je(y),S=(a=n.serializer)!=null?a:Fe[O],{pause:P,resume:$}=Ne(p,()=>j(p.value),{flush:o,deep:l,eventFilter:b});return u&&c&&Ee(u,"storage",F),F(),p;function j(i){try{i==null?r.removeItem(e):r.setItem(e,S.write(i))}catch(h){w(h)}}function N(i){if(!(i&&i.key!==e)){P();try{const h=i?i.newValue:r.getItem(e);return h==null?(d&&y!==null&&r.setItem(e,S.write(y)),y):typeof h!="string"?h:S.read(h)}catch(h){w(h)}finally{$()}}}function F(i){i&&i.key!==e||(p.value=N(i))}}var K;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(K||(K={}));function Re(e){return Math.max(10+e.errors-e.shown,1)}function We(e,t){const r=Object.keys(t).reduce((s,u)=>(s[u]={shown:0,errors:0},s),{}),n=Te(e,r);Object.entries(r).forEach(([s,u])=>{n.value.hasOwnProperty(s)||(n.value[s]=u)});function a(){const s=[];return Object.entries(n.value).forEach(([b,w])=>{const p=Re(w);s.push(...Array(p).fill(b))}),s[Math.floor(Math.random()*s.length)]}const o=Y(a());function l(){let s=a();for(;s===f(o);)s=a();o.value=s,n.value[s].shown++}function c(){n.value[f(o)].errors++}const d=q(()=>Object.entries(n.value).map(([s,u])=>({key:s,accuracy:u.shown===0?0:(u.shown-u.errors)/u.shown,...u})));return{current:o,next:l,addError:c,results:d}}const U=10;function Ce(e,t){const r=g(e),{pause:n,resume:a,isActive:o}=ve(()=>{r.value-=U,r.value<=0&&(r.value=0,n(),t&&t())},U);function l(){r.value=e,a()}return{timeLeft:r,isActive:o,restart:l,pause:n,resume:a}}var Ie=(e,t)=>{const r=e.__vccOpts||e;for(const[n,a]of t)r[n]=a;return r};const ke={},De={class:"px-3 py-2 flex border-2 border-purple-600 rounded-md bg-purple-700 text-purple-50 hover:bg-purple-800"};function Le(e,t){return v(),_("button",De,[oe(e.$slots,"default")])}var ze=Ie(ke,[["render",Le]]);const Je={class:"flex gap-3"},Me=z("Stop Session"),Ve=z("Start Session"),Be={class:"h-3 bg-purple-200 w-60 rounded-lg overflow-hidden mb-3"},Ge={key:0,class:"text-center mt-6 text-5xl text-slate-700"},He=z(" Say: "),Ke={class:"font-medium"},Ue={key:1,class:"grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"},Ye={class:"text-xl text-center font-medium text-slate-800"},qe={class:"text-sm text-center mb-2 text-slate-400"},Qe={class:"w-40 bg-slate-200"},et=ae({__name:"Session",setup(e){const t=g(),{current:r,next:n,addError:a,results:o}=We(te,T),l=g(!1),c=g(!1),d=q(()=>T[f(r)]);async function s(){n(),P(),await V(),f(t).reset()}let u;async function b(){clearInterval(u),O(),await new Promise(N=>setTimeout(N,1e3)),c.value=!1,s()}function w(){a(),c.value=!0,u=setTimeout(()=>{c.value=!1,s()},3e3)}const p=5e3,{isActive:y,pause:O,resume:S,restart:P,timeLeft:$}=Ce(p,w);async function j(){l.value=!f(l),f(y)?O():(n(),S()),await V(),f(t).reset()}return O(),(N,F)=>(v(),_(x,null,[m("div",Je,[J(ze,{onClick:j},{default:ie(()=>[l.value?(v(),_(x,{key:0},[Me],64)):(v(),_(x,{key:1},[Ve],64))]),_:1})]),l.value?(v(),_(x,{key:0},[J(ee,{ref_key:"boxRef",ref:t,character:f(r),onCorrectAnswer:b,disabled:!l.value},null,8,["character","disabled"]),m("div",Be,[m("div",{class:"h-3 bg-purple-800 origin-right",style:M({transform:`scaleX(${f($)/p})`})},null,4)]),c.value?(v(),_("aside",Ge,[He,m("span",Ke,'"'+R(f(d))+'"',1)])):le("",!0)],64)):(v(),_("div",Ue,[(v(!0),_(x,null,ue(f(o),i=>(v(),_("div",{key:i.key,class:"p-3 rounded-md shadow-xl bg-white"},[m("div",Ye,R(i.key),1),m("div",qe,R(f(T)[i.key]),1),m("div",Qe,[m("div",{class:ce(["h-4",i.accuracy>.8?"bg-green-600":"bg-yellow-600"]),style:M({width:`${i.accuracy*100}%`})},null,6)])]))),128))]))],64))}});export{et as default};