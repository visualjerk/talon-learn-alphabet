import{_ as ee,D as F,S as te}from"./QuestionBox.4a91d448.js";import{i as g,u as f,p as re,l as V,q as ne,s as se,x as Y,j as Z,o as p,b as _,a as oe,d as ae,e as h,f as D,w as ie,F as S,y as z,t as T,z as le,A as ue,h as k,B,n as ce}from"./index.38f2b682.js";var H;const N=typeof window!="undefined",fe=e=>typeof e=="string",R=()=>{};N&&((H=window==null?void 0:window.navigator)==null?void 0:H.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function de(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const q=e=>e();function pe(e=q){const t=g(!0);function r(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:r,resume:n,eventFilter:(...o)=>{t.value&&e(...o)}}}function W(e){return ne()?(se(e),!0):!1}function _e(e,t=1e3,r={}){const{immediate:n=!0,immediateCallback:a=!1}=r;let o=null;const l=g(!1);function c(){o&&(clearInterval(o),o=null)}function d(){l.value=!1,c()}function s(){f(t)<=0||(l.value=!0,a&&e(),c(),o=setInterval(e,f(t)))}if(n&&N&&s(),re(t)){const u=V(t,()=>{l.value&&N&&s()});W(u)}return W(d),{isActive:l,pause:d,resume:s}}var J=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,me=(e,t)=>{var r={};for(var n in e)ve.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&J)for(var n of J(e))t.indexOf(n)<0&&he.call(e,n)&&(r[n]=e[n]);return r};function we(e,t,r={}){const n=r,{eventFilter:a=q}=n,o=me(n,["eventFilter"]);return V(e,de(a,t),o)}var ge=Object.defineProperty,ye=Object.defineProperties,be=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,G=(e,t,r)=>t in e?ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Oe=(e,t)=>{for(var r in t||(t={}))Q.call(t,r)&&G(e,r,t[r]);if(E)for(var r of E(t))X.call(t,r)&&G(e,r,t[r]);return e},xe=(e,t)=>ye(e,be(t)),Se=(e,t)=>{var r={};for(var n in e)Q.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&E)for(var n of E(e))t.indexOf(n)<0&&X.call(e,n)&&(r[n]=e[n]);return r};function Ae(e,t,r={}){const n=r,{eventFilter:a}=n,o=Se(n,["eventFilter"]),{eventFilter:l,pause:c,resume:d,isActive:s}=pe(a);return{stop:we(e,t,xe(Oe({},o),{eventFilter:l})),pause:c,resume:d,isActive:s}}function Ne(e){var t;const r=f(e);return(t=r==null?void 0:r.$el)!=null?t:r}const M=N?window:void 0;function Ee(...e){let t,r,n,a;if(fe(e[0])?([r,n,a]=e,t=M):[t,r,n,a]=e,!t)return R;let o=R;const l=V(()=>Ne(t),d=>{o(),d&&(d.addEventListener(r,n,a),o=()=>{d.removeEventListener(r,n,a),o=R})},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return W(c),c}const I=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},L="__vueuse_ssr_handlers__";I[L]=I[L]||{};const Pe=I[L];function $e(e,t){return Pe[e]||t}function Ce(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const je={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Fe(e,t,r,n={}){var a;const{flush:o="pre",deep:l=!0,listenToStorageChanges:c=!0,writeDefaults:d=!0,shallow:s,window:u=M,eventFilter:b,onError:w=i=>{console.error(i)}}=n,v=(s?Y:g)(t);if(!r)try{r=$e("getDefaultStorage",()=>{var i;return(i=M)==null?void 0:i.localStorage})()}catch(i){w(i)}if(!r)return v;const y=f(t),O=Ce(y),x=(a=n.serializer)!=null?a:je[O],{pause:P,resume:$}=Ae(v,()=>C(v.value),{flush:o,deep:l,eventFilter:b});return u&&c&&Ee(u,"storage",j),j(),v;function C(i){try{i==null?r.removeItem(e):r.setItem(e,x.write(i))}catch(m){w(m)}}function A(i){if(!(i&&i.key!==e)){P();try{const m=i?i.newValue:r.getItem(e);return m==null?(d&&y!==null&&r.setItem(e,x.write(y)),y):typeof m!="string"?m:x.read(m)}catch(m){w(m)}finally{$()}}}function j(i){i&&i.key!==e||(v.value=A(i))}}var K;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(K||(K={}));function Te(e){return Math.max(10+e.errors-e.shown,1)}function Re(e,t){const r=Object.keys(t).reduce((s,u)=>(s[u]={shown:0,errors:0},s),{}),n=Fe(e,r);Object.entries(r).forEach(([s,u])=>{n.value.hasOwnProperty(s)||(n.value[s]=u)});function a(){const s=[];return Object.entries(n.value).forEach(([b,w])=>{const v=Te(w);s.push(...Array(v).fill(b))}),s[Math.floor(Math.random()*s.length)]}const o=Y(a());function l(){let s=a();for(;s===f(o);)s=a();o.value=s,n.value[s].shown++}function c(){n.value[f(o)].errors++}const d=Z(()=>Object.entries(n.value).map(([s,u])=>({key:s,accuracy:u.shown===0?0:(u.shown-u.errors)/u.shown,...u})));return{current:o,next:l,addError:c,results:d}}const U=10;function We(e,t){const r=g(e),{pause:n,resume:a,isActive:o}=_e(()=>{r.value-=U,r.value<=0&&(r.value=0,n(),t&&t())},U);function l(){r.value=e,a()}return{timeLeft:r,isActive:o,restart:l,pause:n,resume:a}}var Me=(e,t)=>{const r=e.__vccOpts||e;for(const[n,a]of t)r[n]=a;return r};const Ie={},Le={class:"px-3 py-2 flex border-2 font-medium border-purple-600 rounded-md bg-purple-700 text-purple-50 hover:bg-purple-800"};function Ve(e,t){return p(),_("button",Le,[oe(e.$slots,"default")])}var ke=Me(Ie,[["render",Ve]]);const De={class:"flex gap-3"},ze={style:{width:"24px",height:"24px"},viewBox:"0 0 24 24",class:"mr-2"},Be=h("path",{fill:"currentColor",d:"M13,16V8H15V16H13M9,16V8H11V16H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"},null,-1),He=[Be],Je=k(" Stop Session "),Ge={style:{width:"24px",height:"24px"},viewBox:"0 0 24 24",class:"mr-2"},Ke=h("path",{fill:"currentColor",d:"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z"},null,-1),Ue=[Ke],Ye=k(" Start Session "),Ze={class:"h-3 bg-purple-200 w-60 rounded-lg overflow-hidden mb-3"},qe={key:0,class:"text-center mt-6 text-5xl text-slate-700"},Qe=k(" Say: "),Xe={class:"font-medium"},et={key:1,class:"grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"},tt={class:"text-xl text-center font-medium text-slate-800"},rt={class:"text-sm text-center mb-4 text-slate-400"},nt={class:"w-40 bg-slate-200 rounded-md overflow-hidden"},at=ae({__name:"Session",setup(e){const t=g(),{current:r,next:n,addError:a,results:o}=Re(te,F),l=g(!1),c=g(!1),d=Z(()=>F[f(r)]);async function s(){n(),P(),await B(),f(t).reset()}let u;async function b(){clearInterval(u),O(),await new Promise(A=>setTimeout(A,1e3)),c.value=!1,s()}function w(){a(),c.value=!0,u=setTimeout(()=>{c.value=!1,s()},3e3)}const v=5e3,{isActive:y,pause:O,resume:x,restart:P,timeLeft:$}=We(v,w);async function C(){l.value=!f(l),f(y)?O():(n(),x()),await B(),f(t).reset()}return O(),(A,j)=>(p(),_(S,null,[h("div",De,[D(ke,{onClick:C},{default:ie(()=>[l.value?(p(),_(S,{key:0},[(p(),_("svg",ze,He)),Je],64)):(p(),_(S,{key:1},[(p(),_("svg",Ge,Ue)),Ye],64))]),_:1})]),l.value?(p(),_(S,{key:0},[D(ee,{ref_key:"boxRef",ref:t,character:f(r),onCorrectAnswer:b,disabled:!l.value},null,8,["character","disabled"]),h("div",Ze,[h("div",{class:"h-3 bg-purple-800 origin-right",style:z({transform:`scaleX(${f($)/v})`})},null,4)]),c.value?(p(),_("aside",qe,[Qe,h("span",Xe,'"'+T(f(d))+'"',1)])):le("",!0)],64)):(p(),_("div",et,[(p(!0),_(S,null,ue(f(o),i=>(p(),_("div",{key:i.key,class:"p-4 rounded-md shadow-xs bg-white border border-slate-100"},[h("div",tt,T(i.key),1),h("div",rt,T(f(F)[i.key]),1),h("div",nt,[h("div",{class:ce(["h-2",i.accuracy>.8?"bg-green-600":"bg-yellow-600"]),style:z({width:`${i.accuracy*100}%`})},null,6)])]))),128))]))],64))}});export{at as default};