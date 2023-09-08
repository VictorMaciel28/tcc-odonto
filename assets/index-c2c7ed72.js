(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function _d(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function wd(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Je(r)?TT(r):wd(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Je(t))return t;if(Pe(t))return t}}const bT=/;(?![^(]*\))/g,IT=/:([^]+)/,ET=/\/\*.*?\*\//gs;function TT(t){const e={};return t.replace(ET,"").split(bT).forEach(n=>{if(n){const r=n.split(IT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function bd(t){let e="";if(Je(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const r=bd(t[n]);r&&(e+=r+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ST="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",AT=_d(ST);function Gy(t){return!!t||t===""}const On=t=>Je(t)?t:t==null?"":ne(t)||Pe(t)&&(t.toString===Yy||!ie(t.toString))?JSON.stringify(t,Wy,2):String(t),Wy=(t,e)=>e&&e.__v_isRef?Wy(t,e.value):ci(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:zy(e)?{[`Set(${e.size})`]:[...e.values()]}:Pe(e)&&!ne(e)&&!Jy(e)?String(e):e,ke={},ai=[],fn=()=>{},CT=()=>!1,kT=/^on[^a-z]/,du=t=>kT.test(t),Id=t=>t.startsWith("onUpdate:"),Et=Object.assign,Ed=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},RT=Object.prototype.hasOwnProperty,fe=(t,e)=>RT.call(t,e),ne=Array.isArray,ci=t=>fu(t)==="[object Map]",zy=t=>fu(t)==="[object Set]",ie=t=>typeof t=="function",Je=t=>typeof t=="string",Td=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",Qy=t=>Pe(t)&&ie(t.then)&&ie(t.catch),Yy=Object.prototype.toString,fu=t=>Yy.call(t),xT=t=>fu(t).slice(8,-1),Jy=t=>fu(t)==="[object Object]",Sd=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,mc=_d(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pu=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},NT=/-(\w)/g,vi=pu(t=>t.replace(NT,(e,n)=>n?n.toUpperCase():"")),DT=/\B([A-Z])/g,Bi=pu(t=>t.replace(DT,"-$1").toLowerCase()),Xy=pu(t=>t.charAt(0).toUpperCase()+t.slice(1)),Rl=pu(t=>t?`on${Xy(t)}`:""),Wo=(t,e)=>!Object.is(t,e),gc=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},xc=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Nc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Yp;const OT=()=>Yp||(Yp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let bn;class Zy{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=bn,!e&&bn&&(this.index=(bn.scopes||(bn.scopes=[])).push(this)-1)}run(e){if(this.active){const n=bn;try{return bn=this,e()}finally{bn=n}}}on(){bn=this}off(){bn=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function PT(t){return new Zy(t)}function MT(t,e=bn){e&&e.active&&e.effects.push(t)}const Ad=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ev=t=>(t.w&Sr)>0,tv=t=>(t.n&Sr)>0,LT=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Sr},FT=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];ev(s)&&!tv(s)?s.delete(t):e[n++]=s,s.w&=~Sr,s.n&=~Sr}e.length=n}},uh=new WeakMap;let To=0,Sr=1;const lh=30;let cn;const ms=Symbol(""),hh=Symbol("");class Cd{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,MT(this,r)}run(){if(!this.active)return this.fn();let e=cn,n=br;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=cn,cn=this,br=!0,Sr=1<<++To,To<=lh?LT(this):Jp(this),this.fn()}finally{To<=lh&&FT(this),Sr=1<<--To,cn=this.parent,br=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){cn===this?this.deferStop=!0:this.active&&(Jp(this),this.onStop&&this.onStop(),this.active=!1)}}function Jp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let br=!0;const nv=[];function qi(){nv.push(br),br=!1}function ji(){const t=nv.pop();br=t===void 0?!0:t}function Wt(t,e,n){if(br&&cn){let r=uh.get(t);r||uh.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ad()),rv(s)}}function rv(t,e){let n=!1;To<=lh?tv(t)||(t.n|=Sr,n=!ev(t)):n=!t.has(cn),n&&(t.add(cn),cn.deps.push(t))}function Jn(t,e,n,r,s,i){const o=uh.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ne(t)){const c=Nc(r);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ne(t)?Sd(n)&&a.push(o.get("length")):(a.push(o.get(ms)),ci(t)&&a.push(o.get(hh)));break;case"delete":ne(t)||(a.push(o.get(ms)),ci(t)&&a.push(o.get(hh)));break;case"set":ci(t)&&a.push(o.get(ms));break}if(a.length===1)a[0]&&dh(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);dh(Ad(c))}}function dh(t,e){const n=ne(t)?t:[...t];for(const r of n)r.computed&&Xp(r);for(const r of n)r.computed||Xp(r)}function Xp(t,e){(t!==cn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const UT=_d("__proto__,__v_isRef,__isVue"),sv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Td)),VT=kd(),$T=kd(!1,!0),BT=kd(!0),Zp=qT();function qT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ge(this);for(let i=0,o=this.length;i<o;i++)Wt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ge)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qi();const r=ge(this)[e].apply(this,n);return ji(),r}}),t}function kd(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?s0:uv:e?cv:av).get(r))return r;const o=ne(r);if(!t&&o&&fe(Zp,s))return Reflect.get(Zp,s,i);const a=Reflect.get(r,s,i);return(Td(s)?sv.has(s):UT(s))||(t||Wt(r,"get",s),e)?a:_t(a)?o&&Sd(s)?a:a.value:Pe(a)?t?lv(a):Ur(a):a}}const jT=iv(),KT=iv(!0);function iv(t=!1){return function(n,r,s,i){let o=n[r];if(_i(o)&&_t(o)&&!_t(s))return!1;if(!t&&(!Dc(s)&&!_i(s)&&(o=ge(o),s=ge(s)),!ne(n)&&_t(o)&&!_t(s)))return o.value=s,!0;const a=ne(n)&&Sd(r)?Number(r)<n.length:fe(n,r),c=Reflect.set(n,r,s,i);return n===ge(i)&&(a?Wo(s,o)&&Jn(n,"set",r,s):Jn(n,"add",r,s)),c}}function HT(t,e){const n=fe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Jn(t,"delete",e,void 0),r}function GT(t,e){const n=Reflect.has(t,e);return(!Td(e)||!sv.has(e))&&Wt(t,"has",e),n}function WT(t){return Wt(t,"iterate",ne(t)?"length":ms),Reflect.ownKeys(t)}const ov={get:VT,set:jT,deleteProperty:HT,has:GT,ownKeys:WT},zT={get:BT,set(t,e){return!0},deleteProperty(t,e){return!0}},QT=Et({},ov,{get:$T,set:KT}),Rd=t=>t,mu=t=>Reflect.getPrototypeOf(t);function Ja(t,e,n=!1,r=!1){t=t.__v_raw;const s=ge(t),i=ge(e);n||(e!==i&&Wt(s,"get",e),Wt(s,"get",i));const{has:o}=mu(s),a=r?Rd:n?Dd:zo;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Xa(t,e=!1){const n=this.__v_raw,r=ge(n),s=ge(t);return e||(t!==s&&Wt(r,"has",t),Wt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Za(t,e=!1){return t=t.__v_raw,!e&&Wt(ge(t),"iterate",ms),Reflect.get(t,"size",t)}function em(t){t=ge(t);const e=ge(this);return mu(e).has.call(e,t)||(e.add(t),Jn(e,"add",t,t)),this}function tm(t,e){e=ge(e);const n=ge(this),{has:r,get:s}=mu(n);let i=r.call(n,t);i||(t=ge(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Wo(e,o)&&Jn(n,"set",t,e):Jn(n,"add",t,e),this}function nm(t){const e=ge(this),{has:n,get:r}=mu(e);let s=n.call(e,t);s||(t=ge(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Jn(e,"delete",t,void 0),i}function rm(){const t=ge(this),e=t.size!==0,n=t.clear();return e&&Jn(t,"clear",void 0,void 0),n}function ec(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ge(o),c=e?Rd:t?Dd:zo;return!t&&Wt(a,"iterate",ms),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function tc(t,e,n){return function(...r){const s=this.__v_raw,i=ge(s),o=ci(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?Rd:e?Dd:zo;return!e&&Wt(i,"iterate",c?hh:ms),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function ur(t){return function(...e){return t==="delete"?!1:this}}function YT(){const t={get(i){return Ja(this,i)},get size(){return Za(this)},has:Xa,add:em,set:tm,delete:nm,clear:rm,forEach:ec(!1,!1)},e={get(i){return Ja(this,i,!1,!0)},get size(){return Za(this)},has:Xa,add:em,set:tm,delete:nm,clear:rm,forEach:ec(!1,!0)},n={get(i){return Ja(this,i,!0)},get size(){return Za(this,!0)},has(i){return Xa.call(this,i,!0)},add:ur("add"),set:ur("set"),delete:ur("delete"),clear:ur("clear"),forEach:ec(!0,!1)},r={get(i){return Ja(this,i,!0,!0)},get size(){return Za(this,!0)},has(i){return Xa.call(this,i,!0)},add:ur("add"),set:ur("set"),delete:ur("delete"),clear:ur("clear"),forEach:ec(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=tc(i,!1,!1),n[i]=tc(i,!0,!1),e[i]=tc(i,!1,!0),r[i]=tc(i,!0,!0)}),[t,n,e,r]}const[JT,XT,ZT,e0]=YT();function xd(t,e){const n=e?t?e0:ZT:t?XT:JT;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(fe(n,s)&&s in r?n:r,s,i)}const t0={get:xd(!1,!1)},n0={get:xd(!1,!0)},r0={get:xd(!0,!1)},av=new WeakMap,cv=new WeakMap,uv=new WeakMap,s0=new WeakMap;function i0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function o0(t){return t.__v_skip||!Object.isExtensible(t)?0:i0(xT(t))}function Ur(t){return _i(t)?t:Nd(t,!1,ov,t0,av)}function a0(t){return Nd(t,!1,QT,n0,cv)}function lv(t){return Nd(t,!0,zT,r0,uv)}function Nd(t,e,n,r,s){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=o0(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function ui(t){return _i(t)?ui(t.__v_raw):!!(t&&t.__v_isReactive)}function _i(t){return!!(t&&t.__v_isReadonly)}function Dc(t){return!!(t&&t.__v_isShallow)}function hv(t){return ui(t)||_i(t)}function ge(t){const e=t&&t.__v_raw;return e?ge(e):t}function dv(t){return xc(t,"__v_skip",!0),t}const zo=t=>Pe(t)?Ur(t):t,Dd=t=>Pe(t)?lv(t):t;function fv(t){br&&cn&&(t=ge(t),rv(t.dep||(t.dep=Ad())))}function pv(t,e){t=ge(t),t.dep&&dh(t.dep)}function _t(t){return!!(t&&t.__v_isRef===!0)}function gs(t){return mv(t,!1)}function c0(t){return mv(t,!0)}function mv(t,e){return _t(t)?t:new u0(t,e)}class u0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ge(e),this._value=n?e:zo(e)}get value(){return fv(this),this._value}set value(e){const n=this.__v_isShallow||Dc(e)||_i(e);e=n?e:ge(e),Wo(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:zo(e),pv(this))}}function ye(t){return _t(t)?t.value:t}const l0={get:(t,e,n)=>ye(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return _t(s)&&!_t(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function gv(t){return ui(t)?t:new Proxy(t,l0)}var yv;class h0{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[yv]=!1,this._dirty=!0,this.effect=new Cd(e,()=>{this._dirty||(this._dirty=!0,pv(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ge(this);return fv(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}yv="__v_isReadonly";function d0(t,e,n=!1){let r,s;const i=ie(t);return i?(r=t,s=fn):(r=t.get,s=t.set),new h0(r,s,i||!s,n)}function Ir(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){gu(i,e,n)}return s}function en(t,e,n,r){if(ie(t)){const i=Ir(t,e,n,r);return i&&Qy(i)&&i.catch(o=>{gu(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(en(t[i],e,n,r));return s}function gu(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ir(c,null,10,[t,o,a]);return}}f0(t,n,s,r)}function f0(t,e,n,r=!0){console.error(t)}let Qo=!1,fh=!1;const vt=[];let En=0;const li=[];let qn=null,ts=0;const vv=Promise.resolve();let Od=null;function _v(t){const e=Od||vv;return t?e.then(this?t.bind(this):t):e}function p0(t){let e=En+1,n=vt.length;for(;e<n;){const r=e+n>>>1;Yo(vt[r])<t?e=r+1:n=r}return e}function Pd(t){(!vt.length||!vt.includes(t,Qo&&t.allowRecurse?En+1:En))&&(t.id==null?vt.push(t):vt.splice(p0(t.id),0,t),wv())}function wv(){!Qo&&!fh&&(fh=!0,Od=vv.then(Iv))}function m0(t){const e=vt.indexOf(t);e>En&&vt.splice(e,1)}function g0(t){ne(t)?li.push(...t):(!qn||!qn.includes(t,t.allowRecurse?ts+1:ts))&&li.push(t),wv()}function sm(t,e=Qo?En+1:0){for(;e<vt.length;e++){const n=vt[e];n&&n.pre&&(vt.splice(e,1),e--,n())}}function bv(t){if(li.length){const e=[...new Set(li)];if(li.length=0,qn){qn.push(...e);return}for(qn=e,qn.sort((n,r)=>Yo(n)-Yo(r)),ts=0;ts<qn.length;ts++)qn[ts]();qn=null,ts=0}}const Yo=t=>t.id==null?1/0:t.id,y0=(t,e)=>{const n=Yo(t)-Yo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Iv(t){fh=!1,Qo=!0,vt.sort(y0);const e=fn;try{for(En=0;En<vt.length;En++){const n=vt[En];n&&n.active!==!1&&Ir(n,null,14)}}finally{En=0,vt.length=0,bv(),Qo=!1,Od=null,(vt.length||li.length)&&Iv()}}function v0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ke;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||ke;d&&(s=n.map(p=>Je(p)?p.trim():p)),h&&(s=n.map(Nc))}let a,c=r[a=Rl(e)]||r[a=Rl(vi(e))];!c&&i&&(c=r[a=Rl(Bi(e))]),c&&en(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,en(u,t,6,s)}}function Ev(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ie(t)){const c=u=>{const l=Ev(u,e,!0);l&&(a=!0,Et(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Pe(t)&&r.set(t,null),null):(ne(i)?i.forEach(c=>o[c]=null):Et(o,i),Pe(t)&&r.set(t,o),o)}function yu(t,e){return!t||!du(e)?!1:(e=e.slice(2).replace(/Once$/,""),fe(t,e[0].toLowerCase()+e.slice(1))||fe(t,Bi(e))||fe(t,e))}let Xt=null,vu=null;function Oc(t){const e=Xt;return Xt=t,vu=t&&t.type.__scopeId||null,e}function Md(t){vu=t}function Ld(){vu=null}function un(t,e=Xt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&fm(-1);const i=Oc(e);let o;try{o=t(...s)}finally{Oc(i),r._d&&fm(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function xl(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:y}=t;let I,S;const x=Oc(t);try{if(n.shapeFlag&4){const D=s||r;I=In(l.call(D,D,h,i,p,d,g)),S=c}else{const D=e;I=In(D.length>1?D(i,{attrs:c,slots:a,emit:u}):D(i,null)),S=e.props?c:_0(c)}}catch(D){Oo.length=0,gu(D,t,1),I=Ae(pn)}let b=I;if(S&&y!==!1){const D=Object.keys(S),{shapeFlag:G}=b;D.length&&G&7&&(o&&D.some(Id)&&(S=w0(S,o)),b=Ar(b,S))}return n.dirs&&(b=Ar(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),I=b,Oc(x),I}const _0=t=>{let e;for(const n in t)(n==="class"||n==="style"||du(n))&&((e||(e={}))[n]=t[n]);return e},w0=(t,e)=>{const n={};for(const r in t)(!Id(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function b0(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?im(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!yu(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?im(r,o,u):!0:!!o;return!1}function im(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!yu(n,i))return!0}return!1}function I0({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const E0=t=>t.__isSuspense;function T0(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):g0(t)}function yc(t,e){if(lt){let n=lt.provides;const r=lt.parent&&lt.parent.provides;r===n&&(n=lt.provides=Object.create(r)),n[t]=e}}function tn(t,e,n=!1){const r=lt||Xt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ie(e)?e.call(r.proxy):e}}const nc={};function hi(t,e,n){return Tv(t,e,n)}function Tv(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ke){const a=lt;let c,u=!1,l=!1;if(_t(t)?(c=()=>t.value,u=Dc(t)):ui(t)?(c=()=>t,r=!0):ne(t)?(l=!0,u=t.some(b=>ui(b)||Dc(b)),c=()=>t.map(b=>{if(_t(b))return b.value;if(ui(b))return us(b);if(ie(b))return Ir(b,a,2)})):ie(t)?e?c=()=>Ir(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),en(t,a,3,[d])}:c=fn,e&&r){const b=c;c=()=>us(b())}let h,d=b=>{h=S.onStop=()=>{Ir(b,a,4)}},p;if(Zo)if(d=fn,e?n&&en(e,a,3,[c(),l?[]:void 0,d]):c(),s==="sync"){const b=vS();p=b.__watcherHandles||(b.__watcherHandles=[])}else return fn;let g=l?new Array(t.length).fill(nc):nc;const y=()=>{if(S.active)if(e){const b=S.run();(r||u||(l?b.some((D,G)=>Wo(D,g[G])):Wo(b,g)))&&(h&&h(),en(e,a,3,[b,g===nc?void 0:l&&g[0]===nc?[]:g,d]),g=b)}else S.run()};y.allowRecurse=!!e;let I;s==="sync"?I=y:s==="post"?I=()=>Dt(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),I=()=>Pd(y));const S=new Cd(c,I);e?n?y():g=S.run():s==="post"?Dt(S.run.bind(S),a&&a.suspense):S.run();const x=()=>{S.stop(),a&&a.scope&&Ed(a.scope.effects,S)};return p&&p.push(x),x}function S0(t,e,n){const r=this.proxy,s=Je(t)?t.includes(".")?Sv(r,t):()=>r[t]:t.bind(r,r);let i;ie(e)?i=e:(i=e.handler,n=e);const o=lt;wi(this);const a=Tv(s,i.bind(r),n);return o?wi(o):ys(),a}function Sv(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function us(t,e){if(!Pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),_t(t))us(t.value,e);else if(ne(t))for(let n=0;n<t.length;n++)us(t[n],e);else if(zy(t)||ci(t))t.forEach(n=>{us(n,e)});else if(Jy(t))for(const n in t)us(t[n],e);return t}function A0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ki(()=>{t.isMounted=!0}),xv(()=>{t.isUnmounting=!0}),t}const Yt=[Function,Array],C0={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Yt,onEnter:Yt,onAfterEnter:Yt,onEnterCancelled:Yt,onBeforeLeave:Yt,onLeave:Yt,onAfterLeave:Yt,onLeaveCancelled:Yt,onBeforeAppear:Yt,onAppear:Yt,onAfterAppear:Yt,onAppearCancelled:Yt},setup(t,{slots:e}){const n=hS(),r=A0();let s;return()=>{const i=e.default&&Cv(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==pn){o=y;break}}const a=ge(t),{mode:c}=a;if(r.isLeaving)return Nl(o);const u=om(o);if(!u)return Nl(o);const l=ph(u,a,r,n);mh(u,l);const h=n.subTree,d=h&&om(h);let p=!1;const{getTransitionKey:g}=u.type;if(g){const y=g();s===void 0?s=y:y!==s&&(s=y,p=!0)}if(d&&d.type!==pn&&(!ns(u,d)||p)){const y=ph(d,a,r,n);if(mh(d,y),c==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Nl(o);c==="in-out"&&u.type!==pn&&(y.delayLeave=(I,S,x)=>{const b=Av(r,d);b[String(d.key)]=d,I._leaveCb=()=>{S(),I._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=x})}return o}}},k0=C0;function Av(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ph(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:y,onAppear:I,onAfterAppear:S,onAppearCancelled:x}=e,b=String(t.key),D=Av(n,t),G=(Z,Ce)=>{Z&&en(Z,r,9,Ce)},Q=(Z,Ce)=>{const Ee=Ce[1];G(Z,Ce),ne(Z)?Z.every(gt=>gt.length<=1)&&Ee():Z.length<=1&&Ee()},ue={mode:i,persisted:o,beforeEnter(Z){let Ce=a;if(!n.isMounted)if(s)Ce=y||a;else return;Z._leaveCb&&Z._leaveCb(!0);const Ee=D[b];Ee&&ns(t,Ee)&&Ee.el._leaveCb&&Ee.el._leaveCb(),G(Ce,[Z])},enter(Z){let Ce=c,Ee=u,gt=l;if(!n.isMounted)if(s)Ce=I||c,Ee=S||u,gt=x||l;else return;let yt=!1;const rn=Z._enterCb=$n=>{yt||(yt=!0,$n?G(gt,[Z]):G(Ee,[Z]),ue.delayedLeave&&ue.delayedLeave(),Z._enterCb=void 0)};Ce?Q(Ce,[Z,rn]):rn()},leave(Z,Ce){const Ee=String(t.key);if(Z._enterCb&&Z._enterCb(!0),n.isUnmounting)return Ce();G(h,[Z]);let gt=!1;const yt=Z._leaveCb=rn=>{gt||(gt=!0,Ce(),rn?G(g,[Z]):G(p,[Z]),Z._leaveCb=void 0,D[Ee]===t&&delete D[Ee])};D[Ee]=t,d?Q(d,[Z,yt]):yt()},clone(Z){return ph(Z,e,n,r)}};return ue}function Nl(t){if(_u(t))return t=Ar(t),t.children=null,t}function om(t){return _u(t)?t.children?t.children[0]:void 0:t}function mh(t,e){t.shapeFlag&6&&t.component?mh(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Cv(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===kt?(o.patchFlag&128&&s++,r=r.concat(Cv(o.children,e,a))):(e||o.type!==pn)&&r.push(a!=null?Ar(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function kv(t){return ie(t)?{setup:t,name:t.name}:t}const vc=t=>!!t.type.__asyncLoader,_u=t=>t.type.__isKeepAlive;function R0(t,e){Rv(t,"a",e)}function x0(t,e){Rv(t,"da",e)}function Rv(t,e,n=lt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(wu(e,r,n),n){let s=n.parent;for(;s&&s.parent;)_u(s.parent.vnode)&&N0(r,e,n,s),s=s.parent}}function N0(t,e,n,r){const s=wu(e,t,r,!0);Nv(()=>{Ed(r[e],s)},n)}function wu(t,e,n=lt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;qi(),wi(n);const a=en(e,n,t,o);return ys(),ji(),a});return r?s.unshift(i):s.push(i),i}}const rr=t=>(e,n=lt)=>(!Zo||t==="sp")&&wu(t,(...r)=>e(...r),n),D0=rr("bm"),Ki=rr("m"),O0=rr("bu"),P0=rr("u"),xv=rr("bum"),Nv=rr("um"),M0=rr("sp"),L0=rr("rtg"),F0=rr("rtc");function U0(t,e=lt){wu("ec",t,e)}function jn(t,e){const n=Xt;if(n===null)return t;const r=Eu(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=ke]=e[i];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&us(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Qr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(qi(),en(c,n,8,[t.el,a,t,e]),ji())}}const V0=Symbol();function Jo(t,e,n,r){let s;const i=n&&n[r];if(ne(t)||Je(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Pe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const gh=t=>t?jv(t)?Eu(t)||t.proxy:gh(t.parent):null,Do=Et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gh(t.parent),$root:t=>gh(t.root),$emit:t=>t.emit,$options:t=>Fd(t),$forceUpdate:t=>t.f||(t.f=()=>Pd(t.update)),$nextTick:t=>t.n||(t.n=_v.bind(t.proxy)),$watch:t=>S0.bind(t)}),Dl=(t,e)=>t!==ke&&!t.__isScriptSetup&&fe(t,e),$0={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Dl(r,e))return o[e]=1,r[e];if(s!==ke&&fe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&fe(u,e))return o[e]=3,i[e];if(n!==ke&&fe(n,e))return o[e]=4,n[e];yh&&(o[e]=0)}}const l=Do[e];let h,d;if(l)return e==="$attrs"&&Wt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ke&&fe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,fe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Dl(s,e)?(s[e]=n,!0):r!==ke&&fe(r,e)?(r[e]=n,!0):fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ke&&fe(t,o)||Dl(e,o)||(a=i[0])&&fe(a,o)||fe(r,o)||fe(Do,o)||fe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let yh=!0;function B0(t){const e=Fd(t),n=t.proxy,r=t.ctx;yh=!1,e.beforeCreate&&am(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:y,deactivated:I,beforeDestroy:S,beforeUnmount:x,destroyed:b,unmounted:D,render:G,renderTracked:Q,renderTriggered:ue,errorCaptured:Z,serverPrefetch:Ce,expose:Ee,inheritAttrs:gt,components:yt,directives:rn,filters:$n}=e;if(u&&q0(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Te in o){const we=o[Te];ie(we)&&(r[Te]=we.bind(n))}if(s){const Te=s.call(n,n);Pe(Te)&&(t.data=Ur(Te))}if(yh=!0,i)for(const Te in i){const we=i[Te],sn=ie(we)?we.bind(n,n):ie(we.get)?we.get.bind(n,n):fn,zr=!ie(we)&&ie(we.set)?we.set.bind(n):fn,on=qt({get:sn,set:zr});Object.defineProperty(r,Te,{enumerable:!0,configurable:!0,get:()=>on.value,set:Nt=>on.value=Nt})}if(a)for(const Te in a)Dv(a[Te],r,n,Te);if(c){const Te=ie(c)?c.call(n):c;Reflect.ownKeys(Te).forEach(we=>{yc(we,Te[we])})}l&&am(l,t,"c");function We(Te,we){ne(we)?we.forEach(sn=>Te(sn.bind(n))):we&&Te(we.bind(n))}if(We(D0,h),We(Ki,d),We(O0,p),We(P0,g),We(R0,y),We(x0,I),We(U0,Z),We(F0,Q),We(L0,ue),We(xv,x),We(Nv,D),We(M0,Ce),ne(Ee))if(Ee.length){const Te=t.exposed||(t.exposed={});Ee.forEach(we=>{Object.defineProperty(Te,we,{get:()=>n[we],set:sn=>n[we]=sn})})}else t.exposed||(t.exposed={});G&&t.render===fn&&(t.render=G),gt!=null&&(t.inheritAttrs=gt),yt&&(t.components=yt),rn&&(t.directives=rn)}function q0(t,e,n=fn,r=!1){ne(t)&&(t=vh(t));for(const s in t){const i=t[s];let o;Pe(i)?"default"in i?o=tn(i.from||s,i.default,!0):o=tn(i.from||s):o=tn(i),_t(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function am(t,e,n){en(ne(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Dv(t,e,n,r){const s=r.includes(".")?Sv(n,r):()=>n[r];if(Je(t)){const i=e[t];ie(i)&&hi(s,i)}else if(ie(t))hi(s,t.bind(n));else if(Pe(t))if(ne(t))t.forEach(i=>Dv(i,e,n,r));else{const i=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(i)&&hi(s,i,t)}}function Fd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Pc(c,u,o,!0)),Pc(c,e,o)),Pe(e)&&i.set(e,c),c}function Pc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Pc(t,i,n,!0),s&&s.forEach(o=>Pc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=j0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const j0={data:cm,props:Xr,emits:Xr,methods:Xr,computed:Xr,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:Xr,directives:Xr,watch:H0,provide:cm,inject:K0};function cm(t,e){return e?t?function(){return Et(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function K0(t,e){return Xr(vh(t),vh(e))}function vh(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function St(t,e){return t?[...new Set([].concat(t,e))]:e}function Xr(t,e){return t?Et(Et(Object.create(null),t),e):e}function H0(t,e){if(!t)return e;if(!e)return t;const n=Et(Object.create(null),t);for(const r in e)n[r]=St(t[r],e[r]);return n}function G0(t,e,n,r=!1){const s={},i={};xc(i,Iu,1),t.propsDefaults=Object.create(null),Ov(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:a0(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function W0(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ge(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(yu(t.emitsOptions,d))continue;const p=e[d];if(c)if(fe(i,d))p!==i[d]&&(i[d]=p,u=!0);else{const g=vi(d);s[g]=_h(c,a,g,p,t,!1)}else p!==i[d]&&(i[d]=p,u=!0)}}}else{Ov(t,e,s,i)&&(u=!0);let l;for(const h in a)(!e||!fe(e,h)&&((l=Bi(h))===h||!fe(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(s[h]=_h(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!fe(e,h))&&(delete i[h],u=!0)}u&&Jn(t,"set","$attrs")}function Ov(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(mc(c))continue;const u=e[c];let l;s&&fe(s,l=vi(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:yu(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=ge(n),u=a||ke;for(let l=0;l<i.length;l++){const h=i[l];n[h]=_h(s,c,h,u[h],t,!fe(u,h))}}return o}function _h(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=fe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&ie(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(wi(s),r=u[n]=c.call(null,e),ys())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Bi(n))&&(r=!0))}return r}function Pv(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ie(t)){const l=h=>{c=!0;const[d,p]=Pv(h,e,!0);Et(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return Pe(t)&&r.set(t,ai),ai;if(ne(i))for(let l=0;l<i.length;l++){const h=vi(i[l]);um(h)&&(o[h]=ke)}else if(i)for(const l in i){const h=vi(l);if(um(h)){const d=i[l],p=o[h]=ne(d)||ie(d)?{type:d}:Object.assign({},d);if(p){const g=dm(Boolean,p.type),y=dm(String,p.type);p[0]=g>-1,p[1]=y<0||g<y,(g>-1||fe(p,"default"))&&a.push(h)}}}const u=[o,a];return Pe(t)&&r.set(t,u),u}function um(t){return t[0]!=="$"}function lm(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function hm(t,e){return lm(t)===lm(e)}function dm(t,e){return ne(e)?e.findIndex(n=>hm(n,t)):ie(e)&&hm(e,t)?0:-1}const Mv=t=>t[0]==="_"||t==="$stable",Ud=t=>ne(t)?t.map(In):[In(t)],z0=(t,e,n)=>{if(e._n)return e;const r=un((...s)=>Ud(e(...s)),n);return r._c=!1,r},Lv=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Mv(s))continue;const i=t[s];if(ie(i))e[s]=z0(s,i,r);else if(i!=null){const o=Ud(i);e[s]=()=>o}}},Fv=(t,e)=>{const n=Ud(e);t.slots.default=()=>n},Q0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ge(e),xc(e,"_",n)):Lv(e,t.slots={})}else t.slots={},e&&Fv(t,e);xc(t.slots,Iu,1)},Y0=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ke;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Et(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Lv(e,s)),o=e}else e&&(Fv(t,e),o={default:1});if(i)for(const a in s)!Mv(a)&&!(a in o)&&delete s[a]};function Uv(){return{app:null,config:{isNativeTag:CT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let J0=0;function X0(t,e){return function(r,s=null){ie(r)||(r=Object.assign({},r)),s!=null&&!Pe(s)&&(s=null);const i=Uv(),o=new Set;let a=!1;const c=i.app={_uid:J0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:_S,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&ie(u.install)?(o.add(u),u.install(c,...l)):ie(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=Ae(r,s);return d.appContext=i,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,Eu(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function wh(t,e,n,r,s=!1){if(ne(t)){t.forEach((d,p)=>wh(d,e&&(ne(e)?e[p]:e),n,r,s));return}if(vc(r)&&!s)return;const i=r.shapeFlag&4?Eu(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===ke?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Je(u)?(l[u]=null,fe(h,u)&&(h[u]=null)):_t(u)&&(u.value=null)),ie(c))Ir(c,a,12,[o,l]);else{const d=Je(c),p=_t(c);if(d||p){const g=()=>{if(t.f){const y=d?fe(h,c)?h[c]:l[c]:c.value;s?ne(y)&&Ed(y,i):ne(y)?y.includes(i)||y.push(i):d?(l[c]=[i],fe(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,fe(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(l[t.k]=o))};o?(g.id=-1,Dt(g,n)):g()}}}const Dt=T0;function Z0(t){return eS(t)}function eS(t,e){const n=OT();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:p=fn,insertStaticContent:g}=t,y=(f,m,w,E=null,k=null,M=null,$=!1,P=null,F=!!m.dynamicChildren)=>{if(f===m)return;f&&!ns(f,m)&&(E=V(f),Nt(f,k,M,!0),f=null),m.patchFlag===-2&&(F=!1,m.dynamicChildren=null);const{type:N,ref:J,shapeFlag:K}=m;switch(N){case bu:I(f,m,w,E);break;case pn:S(f,m,w,E);break;case _c:f==null&&x(m,w,E,$);break;case kt:yt(f,m,w,E,k,M,$,P,F);break;default:K&1?G(f,m,w,E,k,M,$,P,F):K&6?rn(f,m,w,E,k,M,$,P,F):(K&64||K&128)&&N.process(f,m,w,E,k,M,$,P,F,de)}J!=null&&k&&wh(J,f&&f.ref,M,m||f,!m)},I=(f,m,w,E)=>{if(f==null)r(m.el=a(m.children),w,E);else{const k=m.el=f.el;m.children!==f.children&&u(k,m.children)}},S=(f,m,w,E)=>{f==null?r(m.el=c(m.children||""),w,E):m.el=f.el},x=(f,m,w,E)=>{[f.el,f.anchor]=g(f.children,m,w,E,f.el,f.anchor)},b=({el:f,anchor:m},w,E)=>{let k;for(;f&&f!==m;)k=d(f),r(f,w,E),f=k;r(m,w,E)},D=({el:f,anchor:m})=>{let w;for(;f&&f!==m;)w=d(f),s(f),f=w;s(m)},G=(f,m,w,E,k,M,$,P,F)=>{$=$||m.type==="svg",f==null?Q(m,w,E,k,M,$,P,F):Ce(f,m,k,M,$,P,F)},Q=(f,m,w,E,k,M,$,P)=>{let F,N;const{type:J,props:K,shapeFlag:X,transition:te,dirs:ae}=f;if(F=f.el=o(f.type,M,K&&K.is,K),X&8?l(F,f.children):X&16&&Z(f.children,F,null,E,k,M&&J!=="foreignObject",$,P),ae&&Qr(f,null,E,"created"),K){for(const be in K)be!=="value"&&!mc(be)&&i(F,be,null,K[be],M,f.children,E,k,q);"value"in K&&i(F,"value",null,K.value),(N=K.onVnodeBeforeMount)&&wn(N,E,f)}ue(F,f,f.scopeId,$,E),ae&&Qr(f,null,E,"beforeMount");const Se=(!k||k&&!k.pendingBranch)&&te&&!te.persisted;Se&&te.beforeEnter(F),r(F,m,w),((N=K&&K.onVnodeMounted)||Se||ae)&&Dt(()=>{N&&wn(N,E,f),Se&&te.enter(F),ae&&Qr(f,null,E,"mounted")},k)},ue=(f,m,w,E,k)=>{if(w&&p(f,w),E)for(let M=0;M<E.length;M++)p(f,E[M]);if(k){let M=k.subTree;if(m===M){const $=k.vnode;ue(f,$,$.scopeId,$.slotScopeIds,k.parent)}}},Z=(f,m,w,E,k,M,$,P,F=0)=>{for(let N=F;N<f.length;N++){const J=f[N]=P?pr(f[N]):In(f[N]);y(null,J,m,w,E,k,M,$,P)}},Ce=(f,m,w,E,k,M,$)=>{const P=m.el=f.el;let{patchFlag:F,dynamicChildren:N,dirs:J}=m;F|=f.patchFlag&16;const K=f.props||ke,X=m.props||ke;let te;w&&Yr(w,!1),(te=X.onVnodeBeforeUpdate)&&wn(te,w,m,f),J&&Qr(m,f,w,"beforeUpdate"),w&&Yr(w,!0);const ae=k&&m.type!=="foreignObject";if(N?Ee(f.dynamicChildren,N,P,w,E,ae,M):$||we(f,m,P,null,w,E,ae,M,!1),F>0){if(F&16)gt(P,m,K,X,w,E,k);else if(F&2&&K.class!==X.class&&i(P,"class",null,X.class,k),F&4&&i(P,"style",K.style,X.style,k),F&8){const Se=m.dynamicProps;for(let be=0;be<Se.length;be++){const ze=Se[be],an=K[ze],Ws=X[ze];(Ws!==an||ze==="value")&&i(P,ze,an,Ws,k,f.children,w,E,q)}}F&1&&f.children!==m.children&&l(P,m.children)}else!$&&N==null&&gt(P,m,K,X,w,E,k);((te=X.onVnodeUpdated)||J)&&Dt(()=>{te&&wn(te,w,m,f),J&&Qr(m,f,w,"updated")},E)},Ee=(f,m,w,E,k,M,$)=>{for(let P=0;P<m.length;P++){const F=f[P],N=m[P],J=F.el&&(F.type===kt||!ns(F,N)||F.shapeFlag&70)?h(F.el):w;y(F,N,J,null,E,k,M,$,!0)}},gt=(f,m,w,E,k,M,$)=>{if(w!==E){if(w!==ke)for(const P in w)!mc(P)&&!(P in E)&&i(f,P,w[P],null,$,m.children,k,M,q);for(const P in E){if(mc(P))continue;const F=E[P],N=w[P];F!==N&&P!=="value"&&i(f,P,N,F,$,m.children,k,M,q)}"value"in E&&i(f,"value",w.value,E.value)}},yt=(f,m,w,E,k,M,$,P,F)=>{const N=m.el=f?f.el:a(""),J=m.anchor=f?f.anchor:a("");let{patchFlag:K,dynamicChildren:X,slotScopeIds:te}=m;te&&(P=P?P.concat(te):te),f==null?(r(N,w,E),r(J,w,E),Z(m.children,w,J,k,M,$,P,F)):K>0&&K&64&&X&&f.dynamicChildren?(Ee(f.dynamicChildren,X,w,k,M,$,P),(m.key!=null||k&&m===k.subTree)&&Vv(f,m,!0)):we(f,m,w,J,k,M,$,P,F)},rn=(f,m,w,E,k,M,$,P,F)=>{m.slotScopeIds=P,f==null?m.shapeFlag&512?k.ctx.activate(m,w,E,$,F):$n(m,w,E,k,M,$,F):uo(f,m,F)},$n=(f,m,w,E,k,M,$)=>{const P=f.component=lS(f,E,k);if(_u(f)&&(P.ctx.renderer=de),dS(P),P.asyncDep){if(k&&k.registerDep(P,We),!f.el){const F=P.subTree=Ae(pn);S(null,F,m,w)}return}We(P,f,m,w,k,M,$)},uo=(f,m,w)=>{const E=m.component=f.component;if(b0(f,m,w))if(E.asyncDep&&!E.asyncResolved){Te(E,m,w);return}else E.next=m,m0(E.update),E.update();else m.el=f.el,E.vnode=m},We=(f,m,w,E,k,M,$)=>{const P=()=>{if(f.isMounted){let{next:J,bu:K,u:X,parent:te,vnode:ae}=f,Se=J,be;Yr(f,!1),J?(J.el=ae.el,Te(f,J,$)):J=ae,K&&gc(K),(be=J.props&&J.props.onVnodeBeforeUpdate)&&wn(be,te,J,ae),Yr(f,!0);const ze=xl(f),an=f.subTree;f.subTree=ze,y(an,ze,h(an.el),V(an),f,k,M),J.el=ze.el,Se===null&&I0(f,ze.el),X&&Dt(X,k),(be=J.props&&J.props.onVnodeUpdated)&&Dt(()=>wn(be,te,J,ae),k)}else{let J;const{el:K,props:X}=m,{bm:te,m:ae,parent:Se}=f,be=vc(m);if(Yr(f,!1),te&&gc(te),!be&&(J=X&&X.onVnodeBeforeMount)&&wn(J,Se,m),Yr(f,!0),K&&oe){const ze=()=>{f.subTree=xl(f),oe(K,f.subTree,f,k,null)};be?m.type.__asyncLoader().then(()=>!f.isUnmounted&&ze()):ze()}else{const ze=f.subTree=xl(f);y(null,ze,w,E,f,k,M),m.el=ze.el}if(ae&&Dt(ae,k),!be&&(J=X&&X.onVnodeMounted)){const ze=m;Dt(()=>wn(J,Se,ze),k)}(m.shapeFlag&256||Se&&vc(Se.vnode)&&Se.vnode.shapeFlag&256)&&f.a&&Dt(f.a,k),f.isMounted=!0,m=w=E=null}},F=f.effect=new Cd(P,()=>Pd(N),f.scope),N=f.update=()=>F.run();N.id=f.uid,Yr(f,!0),N()},Te=(f,m,w)=>{m.component=f;const E=f.vnode.props;f.vnode=m,f.next=null,W0(f,m.props,E,w),Y0(f,m.children,w),qi(),sm(),ji()},we=(f,m,w,E,k,M,$,P,F=!1)=>{const N=f&&f.children,J=f?f.shapeFlag:0,K=m.children,{patchFlag:X,shapeFlag:te}=m;if(X>0){if(X&128){zr(N,K,w,E,k,M,$,P,F);return}else if(X&256){sn(N,K,w,E,k,M,$,P,F);return}}te&8?(J&16&&q(N,k,M),K!==N&&l(w,K)):J&16?te&16?zr(N,K,w,E,k,M,$,P,F):q(N,k,M,!0):(J&8&&l(w,""),te&16&&Z(K,w,E,k,M,$,P,F))},sn=(f,m,w,E,k,M,$,P,F)=>{f=f||ai,m=m||ai;const N=f.length,J=m.length,K=Math.min(N,J);let X;for(X=0;X<K;X++){const te=m[X]=F?pr(m[X]):In(m[X]);y(f[X],te,w,null,k,M,$,P,F)}N>J?q(f,k,M,!0,!1,K):Z(m,w,E,k,M,$,P,F,K)},zr=(f,m,w,E,k,M,$,P,F)=>{let N=0;const J=m.length;let K=f.length-1,X=J-1;for(;N<=K&&N<=X;){const te=f[N],ae=m[N]=F?pr(m[N]):In(m[N]);if(ns(te,ae))y(te,ae,w,null,k,M,$,P,F);else break;N++}for(;N<=K&&N<=X;){const te=f[K],ae=m[X]=F?pr(m[X]):In(m[X]);if(ns(te,ae))y(te,ae,w,null,k,M,$,P,F);else break;K--,X--}if(N>K){if(N<=X){const te=X+1,ae=te<J?m[te].el:E;for(;N<=X;)y(null,m[N]=F?pr(m[N]):In(m[N]),w,ae,k,M,$,P,F),N++}}else if(N>X)for(;N<=K;)Nt(f[N],k,M,!0),N++;else{const te=N,ae=N,Se=new Map;for(N=ae;N<=X;N++){const Vt=m[N]=F?pr(m[N]):In(m[N]);Vt.key!=null&&Se.set(Vt.key,N)}let be,ze=0;const an=X-ae+1;let Ws=!1,Wp=0;const lo=new Array(an);for(N=0;N<an;N++)lo[N]=0;for(N=te;N<=K;N++){const Vt=f[N];if(ze>=an){Nt(Vt,k,M,!0);continue}let _n;if(Vt.key!=null)_n=Se.get(Vt.key);else for(be=ae;be<=X;be++)if(lo[be-ae]===0&&ns(Vt,m[be])){_n=be;break}_n===void 0?Nt(Vt,k,M,!0):(lo[_n-ae]=N+1,_n>=Wp?Wp=_n:Ws=!0,y(Vt,m[_n],w,null,k,M,$,P,F),ze++)}const zp=Ws?tS(lo):ai;for(be=zp.length-1,N=an-1;N>=0;N--){const Vt=ae+N,_n=m[Vt],Qp=Vt+1<J?m[Vt+1].el:E;lo[N]===0?y(null,_n,w,Qp,k,M,$,P,F):Ws&&(be<0||N!==zp[be]?on(_n,w,Qp,2):be--)}}},on=(f,m,w,E,k=null)=>{const{el:M,type:$,transition:P,children:F,shapeFlag:N}=f;if(N&6){on(f.component.subTree,m,w,E);return}if(N&128){f.suspense.move(m,w,E);return}if(N&64){$.move(f,m,w,de);return}if($===kt){r(M,m,w);for(let K=0;K<F.length;K++)on(F[K],m,w,E);r(f.anchor,m,w);return}if($===_c){b(f,m,w);return}if(E!==2&&N&1&&P)if(E===0)P.beforeEnter(M),r(M,m,w),Dt(()=>P.enter(M),k);else{const{leave:K,delayLeave:X,afterLeave:te}=P,ae=()=>r(M,m,w),Se=()=>{K(M,()=>{ae(),te&&te()})};X?X(M,ae,Se):Se()}else r(M,m,w)},Nt=(f,m,w,E=!1,k=!1)=>{const{type:M,props:$,ref:P,children:F,dynamicChildren:N,shapeFlag:J,patchFlag:K,dirs:X}=f;if(P!=null&&wh(P,null,w,f,!0),J&256){m.ctx.deactivate(f);return}const te=J&1&&X,ae=!vc(f);let Se;if(ae&&(Se=$&&$.onVnodeBeforeUnmount)&&wn(Se,m,f),J&6)A(f.component,w,E);else{if(J&128){f.suspense.unmount(w,E);return}te&&Qr(f,null,m,"beforeUnmount"),J&64?f.type.remove(f,m,w,k,de,E):N&&(M!==kt||K>0&&K&64)?q(N,m,w,!1,!0):(M===kt&&K&384||!k&&J&16)&&q(F,m,w),E&&Gs(f)}(ae&&(Se=$&&$.onVnodeUnmounted)||te)&&Dt(()=>{Se&&wn(Se,m,f),te&&Qr(f,null,m,"unmounted")},w)},Gs=f=>{const{type:m,el:w,anchor:E,transition:k}=f;if(m===kt){Ya(w,E);return}if(m===_c){D(f);return}const M=()=>{s(w),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(f.shapeFlag&1&&k&&!k.persisted){const{leave:$,delayLeave:P}=k,F=()=>$(w,M);P?P(f.el,M,F):F()}else M()},Ya=(f,m)=>{let w;for(;f!==m;)w=d(f),s(f),f=w;s(m)},A=(f,m,w)=>{const{bum:E,scope:k,update:M,subTree:$,um:P}=f;E&&gc(E),k.stop(),M&&(M.active=!1,Nt($,f,m,w)),P&&Dt(P,m),Dt(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},q=(f,m,w,E=!1,k=!1,M=0)=>{for(let $=M;$<f.length;$++)Nt(f[$],m,w,E,k)},V=f=>f.shapeFlag&6?V(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),Y=(f,m,w)=>{f==null?m._vnode&&Nt(m._vnode,null,null,!0):y(m._vnode||null,f,m,null,null,null,w),sm(),bv(),m._vnode=f},de={p:y,um:Nt,m:on,r:Gs,mt:$n,mc:Z,pc:we,pbc:Ee,n:V,o:t};let Me,oe;return e&&([Me,oe]=e(de)),{render:Y,hydrate:Me,createApp:X0(Y,Me)}}function Yr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Vv(t,e,n=!1){const r=t.children,s=e.children;if(ne(r)&&ne(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=pr(s[i]),a.el=o.el),n||Vv(o,a)),a.type===bu&&(a.el=o.el)}}function tS(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const nS=t=>t.__isTeleport,kt=Symbol(void 0),bu=Symbol(void 0),pn=Symbol(void 0),_c=Symbol(void 0),Oo=[];let hn=null;function Le(t=!1){Oo.push(hn=t?null:[])}function rS(){Oo.pop(),hn=Oo[Oo.length-1]||null}let Xo=1;function fm(t){Xo+=t}function $v(t){return t.dynamicChildren=Xo>0?hn||ai:null,rS(),Xo>0&&hn&&hn.push(t),t}function je(t,e,n,r,s,i){return $v(T(t,e,n,r,s,i,!0))}function Bv(t,e,n,r,s){return $v(Ae(t,e,n,r,s,!0))}function bh(t){return t?t.__v_isVNode===!0:!1}function ns(t,e){return t.type===e.type&&t.key===e.key}const Iu="__vInternal",qv=({key:t})=>t??null,wc=({ref:t,ref_key:e,ref_for:n})=>t!=null?Je(t)||_t(t)||ie(t)?{i:Xt,r:t,k:e,f:!!n}:t:null;function T(t,e=null,n=null,r=0,s=null,i=t===kt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qv(e),ref:e&&wc(e),scopeId:vu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Xt};return a?(Vd(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Je(n)?8:16),Xo>0&&!o&&hn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&hn.push(c),c}const Ae=sS;function sS(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===V0)&&(t=pn),bh(t)){const a=Ar(t,e,!0);return n&&Vd(a,n),Xo>0&&!i&&hn&&(a.shapeFlag&6?hn[hn.indexOf(t)]=a:hn.push(a)),a.patchFlag|=-2,a}if(gS(t)&&(t=t.__vccOpts),e){e=iS(e);let{class:a,style:c}=e;a&&!Je(a)&&(e.class=bd(a)),Pe(c)&&(hv(c)&&!ne(c)&&(c=Et({},c)),e.style=wd(c))}const o=Je(t)?1:E0(t)?128:nS(t)?64:Pe(t)?4:ie(t)?2:0;return T(t,e,n,r,s,o,i,!0)}function iS(t){return t?hv(t)||Iu in t?Et({},t):t:null}function Ar(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?aS(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&qv(a),ref:e&&e.ref?n&&s?ne(s)?s.concat(wc(e)):[s,wc(e)]:wc(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==kt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ar(t.ssContent),ssFallback:t.ssFallback&&Ar(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Bt(t=" ",e=0){return Ae(bu,null,t,e)}function oS(t,e){const n=Ae(_c,null,t);return n.staticCount=e,n}function Ih(t="",e=!1){return e?(Le(),Bv(pn,null,t)):Ae(pn,null,t)}function In(t){return t==null||typeof t=="boolean"?Ae(pn):ne(t)?Ae(kt,null,t.slice()):typeof t=="object"?pr(t):Ae(bu,null,String(t))}function pr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ar(t)}function Vd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Vd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Iu in e)?e._ctx=Xt:s===3&&Xt&&(Xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:Xt},n=32):(e=String(e),r&64?(n=16,e=[Bt(e)]):n=8);t.children=e,t.shapeFlag|=n}function aS(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=bd([e.class,r.class]));else if(s==="style")e.style=wd([e.style,r.style]);else if(du(s)){const i=e[s],o=r[s];o&&i!==o&&!(ne(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function wn(t,e,n,r=null){en(t,e,7,[n,r])}const cS=Uv();let uS=0;function lS(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||cS,i={uid:uS++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pv(r,s),emitsOptions:Ev(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=v0.bind(null,i),t.ce&&t.ce(i),i}let lt=null;const hS=()=>lt||Xt,wi=t=>{lt=t,t.scope.on()},ys=()=>{lt&&lt.scope.off(),lt=null};function jv(t){return t.vnode.shapeFlag&4}let Zo=!1;function dS(t,e=!1){Zo=e;const{props:n,children:r}=t.vnode,s=jv(t);G0(t,n,s,e),Q0(t,r);const i=s?fS(t,e):void 0;return Zo=!1,i}function fS(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=dv(new Proxy(t.ctx,$0));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?mS(t):null;wi(t),qi();const i=Ir(r,t,0,[t.props,s]);if(ji(),ys(),Qy(i)){if(i.then(ys,ys),e)return i.then(o=>{pm(t,o,e)}).catch(o=>{gu(o,t,0)});t.asyncDep=i}else pm(t,i,e)}else Kv(t,e)}function pm(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=gv(e)),Kv(t,n)}let mm;function Kv(t,e,n){const r=t.type;if(!t.render){if(!e&&mm&&!r.render){const s=r.template||Fd(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=Et(Et({isCustomElement:i,delimiters:a},o),c);r.render=mm(s,u)}}t.render=r.render||fn}wi(t),qi(),B0(t),ji(),ys()}function pS(t){return new Proxy(t.attrs,{get(e,n){return Wt(t,"get","$attrs"),e[n]}})}function mS(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=pS(t))},slots:t.slots,emit:t.emit,expose:e}}function Eu(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(gv(dv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Do)return Do[n](t)},has(e,n){return n in e||n in Do}}))}function gS(t){return ie(t)&&"__vccOpts"in t}const qt=(t,e)=>d0(t,e,Zo);function Hv(t,e,n){const r=arguments.length;return r===2?Pe(e)&&!ne(e)?bh(e)?Ae(t,null,[e]):Ae(t,e):Ae(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&bh(n)&&(n=[n]),Ae(t,e,n))}const yS=Symbol(""),vS=()=>tn(yS),_S="3.2.45",wS="http://www.w3.org/2000/svg",rs=typeof document<"u"?document:null,gm=rs&&rs.createElement("template"),bS={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?rs.createElementNS(wS,t):rs.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>rs.createTextNode(t),createComment:t=>rs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{gm.innerHTML=r?`<svg>${t}</svg>`:t;const a=gm.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function IS(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ES(t,e,n){const r=t.style,s=Je(n);if(n&&!s){for(const i in n)Eh(r,i,n[i]);if(e&&!Je(e))for(const i in e)n[i]==null&&Eh(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const ym=/\s*!important$/;function Eh(t,e,n){if(ne(n))n.forEach(r=>Eh(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=TS(t,e);ym.test(n)?t.setProperty(Bi(r),n.replace(ym,""),"important"):t[r]=n}}const vm=["Webkit","Moz","ms"],Ol={};function TS(t,e){const n=Ol[e];if(n)return n;let r=vi(e);if(r!=="filter"&&r in t)return Ol[e]=r;r=Xy(r);for(let s=0;s<vm.length;s++){const i=vm[s]+r;if(i in t)return Ol[e]=i}return e}const _m="http://www.w3.org/1999/xlink";function SS(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(_m,e.slice(6,e.length)):t.setAttributeNS(_m,e,n);else{const i=AT(e);n==null||i&&!Gy(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function AS(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Gy(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ei(t,e,n,r){t.addEventListener(e,n,r)}function CS(t,e,n,r){t.removeEventListener(e,n,r)}function kS(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=RS(e);if(r){const u=i[e]=DS(r,s);ei(t,a,u,c)}else o&&(CS(t,a,o,c),i[e]=void 0)}}const wm=/(?:Once|Passive|Capture)$/;function RS(t){let e;if(wm.test(t)){e={};let r;for(;r=t.match(wm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Bi(t.slice(2)),e]}let Pl=0;const xS=Promise.resolve(),NS=()=>Pl||(xS.then(()=>Pl=0),Pl=Date.now());function DS(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;en(OS(r,n.value),e,5,[r])};return n.value=t,n.attached=NS(),n}function OS(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const bm=/^on[a-z]/,PS=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?IS(t,r,s):e==="style"?ES(t,n,r):du(e)?Id(e)||kS(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):MS(t,e,r,s))?AS(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),SS(t,e,r,s))};function MS(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&bm.test(e)&&ie(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||bm.test(e)&&Je(n)?!1:e in t}const LS={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};k0.props;const Im=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>gc(e,n):e};function FS(t){t.target.composing=!0}function Em(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Kn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Im(s);const i=r||s.props&&s.props.type==="number";ei(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Nc(a)),t._assign(a)}),n&&ei(t,"change",()=>{t.value=t.value.trim()}),e||(ei(t,"compositionstart",FS),ei(t,"compositionend",Em),ei(t,"change",Em))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Im(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Nc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},US=["ctrl","shift","alt","meta"],VS={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>US.some(n=>t[`${n}Key`]&&!e.includes(n))},Gv=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=VS[e[s]];if(i&&i(n,e))return}return t(n,...r)},$S=Et({patchProp:PS},bS);let Tm;function BS(){return Tm||(Tm=Z0($S))}const qS=(...t)=>{const e=BS().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=jS(r);if(!s)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function jS(t){return Je(t)?document.querySelector(t):t}function KS(){return Wv().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Wv(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const HS=typeof Proxy=="function",GS="devtools-plugin:setup",WS="plugin:settings:set";let zs,Th;function zS(){var t;return zs!==void 0||(typeof window<"u"&&window.performance?(zs=!0,Th=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(zs=!0,Th=global.perf_hooks.performance):zs=!1),zs}function QS(){return zS()?Th.now():Date.now()}class YS{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return QS()}},n&&n.on(WS,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:a,args:c,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function JS(t,e){const n=t,r=Wv(),s=KS(),i=HS&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(GS,t,e);else{const o=i?new YS(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ti=typeof window<"u";function XS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ve=Object.assign;function Ml(t,e){const n={};for(const r in e){const s=e[r];n[r]=mn(s)?s.map(t):t(s)}return n}const Po=()=>{},mn=Array.isArray,ZS=/\/$/,eA=t=>t.replace(ZS,"");function Ll(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=sA(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function tA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Sm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function nA(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&bi(e.matched[r],n.matched[s])&&zv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!rA(t[n],e[n]))return!1;return!0}function rA(t,e){return mn(t)?Am(t,e):mn(e)?Am(e,t):t===e}function Am(t,e){return mn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function sA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var ea;(function(t){t.pop="pop",t.push="push"})(ea||(ea={}));var Mo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Mo||(Mo={}));function iA(t){if(!t)if(ti){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),eA(t)}const oA=/^[^#]+#/;function aA(t,e){return t.replace(oA,"#")+e}function cA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Tu=()=>({left:window.pageXOffset,top:window.pageYOffset});function uA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=cA(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Cm(t,e){return(history.state?history.state.position-e:-1)+t}const Sh=new Map;function lA(t,e){Sh.set(t,e)}function hA(t){const e=Sh.get(t);return Sh.delete(t),e}let dA=()=>location.protocol+"//"+location.host;function Qv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Sm(c,"")}return Sm(n,t)+r+s}function fA(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=Qv(t,location),g=n.value,y=e.value;let I=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}I=y?d.position-y.position:0}else r(p);s.forEach(S=>{S(n.value,g,{delta:I,type:ea.pop,direction:I?I>0?Mo.forward:Mo.back:Mo.unknown})})};function c(){o=n.value}function u(d){s.push(d);const p=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return i.push(p),p}function l(){const{history:d}=window;d.state&&d.replaceState(ve({},d.state,{scroll:Tu()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function km(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Tu():null}}function pA(t){const{history:e,location:n}=window,r={value:Qv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:dA()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),s.value=u}catch(p){console.error(p),n[l?"replace":"assign"](d)}}function o(c,u){const l=ve({},e.state,km(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=ve({},s.value,e.state,{forward:c,scroll:Tu()});i(l.current,l,!0);const h=ve({},km(r.value,c,null),{position:l.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function mA(t){t=iA(t);const e=pA(t),n=fA(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ve({location:"",base:t,go:r,createHref:aA.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function gA(t){return typeof t=="string"||t&&typeof t=="object"}function Yv(t){return typeof t=="string"||typeof t=="symbol"}const lr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Jv=Symbol("");var Rm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Rm||(Rm={}));function Ii(t,e){return ve(new Error,{type:t,[Jv]:!0},e)}function Bn(t,e){return t instanceof Error&&Jv in t&&(e==null||!!(t.type&e))}const xm="[^/]+?",yA={sensitive:!1,strict:!1,start:!0,end:!0},vA=/[.+*?^${}()[\]/\\]/g;function _A(t,e){const n=ve({},yA,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const d=u[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(vA,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:y,optional:I,regexp:S}=d;i.push({name:g,repeatable:y,optional:I});const x=S||xm;if(x!==xm){p+=10;try{new RegExp(`(${x})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+D.message)}}let b=y?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(b=I&&u.length<2?`(?:/${b})`:"/"+b),I&&(b+="?"),s+=b,p+=20,I&&(p+=-8),y&&(p+=-20),x===".*"&&(p+=-50)}l.push(p)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const p=l[d]||"",g=i[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const p of d)if(p.type===0)l+=p.value;else if(p.type===1){const{value:g,repeatable:y,optional:I}=p,S=g in u?u[g]:"";if(mn(S)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=mn(S)?S.join("/"):S;if(!x)if(I)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);l+=x}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function wA(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function bA(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=wA(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Nm(r))return 1;if(Nm(s))return-1}return s.length-r.length}function Nm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const IA={type:0,value:""},EA=/[a-zA-Z0-9_]/;function TA(t){if(!t)return[[]];if(t==="/")return[[IA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:EA.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function SA(t,e,n){const r=_A(TA(t.path),n),s=ve(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function AA(t,e){const n=[],r=new Map;e=Pm({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,h,d){const p=!d,g=CA(l);g.aliasOf=d&&d.record;const y=Pm(e,l),I=[g];if("alias"in l){const b=typeof l.alias=="string"?[l.alias]:l.alias;for(const D of b)I.push(ve({},g,{components:d?d.record.components:g.components,path:D,aliasOf:d?d.record:g}))}let S,x;for(const b of I){const{path:D}=b;if(h&&D[0]!=="/"){const G=h.record.path,Q=G[G.length-1]==="/"?"":"/";b.path=h.record.path+(D&&Q+D)}if(S=SA(b,h,y),d?d.alias.push(S):(x=x||S,x!==S&&x.alias.push(S),p&&l.name&&!Om(S)&&o(l.name)),g.children){const G=g.children;for(let Q=0;Q<G.length;Q++)i(G[Q],S,d&&d.children[Q])}d=d||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&c(S)}return x?()=>{o(x)}:Po}function o(l){if(Yv(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&bA(l,n[h])>=0&&(l.record.path!==n[h].record.path||!Xv(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Om(l)&&r.set(l.record.name,l)}function u(l,h){let d,p={},g,y;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw Ii(1,{location:l});y=d.record.name,p=ve(Dm(h.params,d.keys.filter(x=>!x.optional).map(x=>x.name)),l.params&&Dm(l.params,d.keys.map(x=>x.name))),g=d.stringify(p)}else if("path"in l)g=l.path,d=n.find(x=>x.re.test(g)),d&&(p=d.parse(g),y=d.record.name);else{if(d=h.name?r.get(h.name):n.find(x=>x.re.test(h.path)),!d)throw Ii(1,{location:l,currentLocation:h});y=d.record.name,p=ve({},h.params,l.params),g=d.stringify(p)}const I=[];let S=d;for(;S;)I.unshift(S.record),S=S.parent;return{name:y,path:g,params:p,matched:I,meta:RA(I)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Dm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function CA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:kA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function kA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Om(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function RA(t){return t.reduce((e,n)=>ve(e,n.meta),{})}function Pm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Xv(t,e){return e.children.some(n=>n===t||Xv(t,n))}const Zv=/#/g,xA=/&/g,NA=/\//g,DA=/=/g,OA=/\?/g,e_=/\+/g,PA=/%5B/g,MA=/%5D/g,t_=/%5E/g,LA=/%60/g,n_=/%7B/g,FA=/%7C/g,r_=/%7D/g,UA=/%20/g;function $d(t){return encodeURI(""+t).replace(FA,"|").replace(PA,"[").replace(MA,"]")}function VA(t){return $d(t).replace(n_,"{").replace(r_,"}").replace(t_,"^")}function Ah(t){return $d(t).replace(e_,"%2B").replace(UA,"+").replace(Zv,"%23").replace(xA,"%26").replace(LA,"`").replace(n_,"{").replace(r_,"}").replace(t_,"^")}function $A(t){return Ah(t).replace(DA,"%3D")}function BA(t){return $d(t).replace(Zv,"%23").replace(OA,"%3F")}function qA(t){return t==null?"":BA(t).replace(NA,"%2F")}function Mc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function jA(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(e_," "),o=i.indexOf("="),a=Mc(o<0?i:i.slice(0,o)),c=o<0?null:Mc(i.slice(o+1));if(a in e){let u=e[a];mn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Mm(t){let e="";for(let n in t){const r=t[n];if(n=$A(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(mn(r)?r.map(i=>i&&Ah(i)):[r&&Ah(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function KA(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=mn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const HA=Symbol(""),Lm=Symbol(""),Su=Symbol(""),Bd=Symbol(""),Ch=Symbol("");function ho(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function mr(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ii(4,{from:n,to:e})):h instanceof Error?a(h):gA(h)?a(Ii(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Fl(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(GA(a)){const u=(a.__vccOpts||a)[e];u&&s.push(mr(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=XS(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&mr(d,n,r,i,o)()}))}}return s}function GA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Fm(t){const e=tn(Su),n=tn(Bd),r=qt(()=>e.resolve(ye(t.to))),s=qt(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(bi.bind(null,l));if(d>-1)return d;const p=Um(c[u-2]);return u>1&&Um(l)===p&&h[h.length-1].path!==p?h.findIndex(bi.bind(null,c[u-2])):d}),i=qt(()=>s.value>-1&&QA(n.params,r.value.params)),o=qt(()=>s.value>-1&&s.value===n.matched.length-1&&zv(n.params,r.value.params));function a(c={}){return zA(c)?e[ye(t.replace)?"replace":"push"](ye(t.to)).catch(Po):Promise.resolve()}return{route:r,href:qt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const WA=kv({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fm,setup(t,{slots:e}){const n=Ur(Fm(t)),{options:r}=tn(Su),s=qt(()=>({[Vm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Vm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Hv("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ln=WA;function zA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function QA(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!mn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Um(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Vm=(t,e,n)=>t??e??n,YA=kv({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=tn(Ch),s=qt(()=>t.route||r.value),i=tn(Lm,0),o=qt(()=>{let u=ye(i);const{matched:l}=s.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=qt(()=>s.value.matched[o.value]);yc(Lm,qt(()=>o.value+1)),yc(HA,a),yc(Ch,s);const c=gs();return hi(()=>[c.value,a.value,t.name],([u,l,h],[d,p,g])=>{l&&(l.instances[h]=u,p&&p!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),u&&l&&(!p||!bi(l,p)||!d)&&(l.enterCallbacks[h]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=s.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return $m(n.default,{Component:d,route:u});const p=h.props[l],g=p?p===!0?u.params:typeof p=="function"?p(u):p:null,I=Hv(d,ve({},g,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return $m(n.default,{Component:I,route:u})||I}}});function $m(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const s_=YA;function JA(t){const e=AA(t.routes,t),n=t.parseQuery||jA,r=t.stringifyQuery||Mm,s=t.history,i=ho(),o=ho(),a=ho(),c=c0(lr);let u=lr;ti&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Ml.bind(null,A=>""+A),h=Ml.bind(null,qA),d=Ml.bind(null,Mc);function p(A,q){let V,Y;return Yv(A)?(V=e.getRecordMatcher(A),Y=q):Y=A,e.addRoute(Y,V)}function g(A){const q=e.getRecordMatcher(A);q&&e.removeRoute(q)}function y(){return e.getRoutes().map(A=>A.record)}function I(A){return!!e.getRecordMatcher(A)}function S(A,q){if(q=ve({},q||c.value),typeof A=="string"){const f=Ll(n,A,q.path),m=e.resolve({path:f.path},q),w=s.createHref(f.fullPath);return ve(f,m,{params:d(m.params),hash:Mc(f.hash),redirectedFrom:void 0,href:w})}let V;if("path"in A)V=ve({},A,{path:Ll(n,A.path,q.path).path});else{const f=ve({},A.params);for(const m in f)f[m]==null&&delete f[m];V=ve({},A,{params:h(A.params)}),q.params=h(q.params)}const Y=e.resolve(V,q),de=A.hash||"";Y.params=l(d(Y.params));const Me=tA(r,ve({},A,{hash:VA(de),path:Y.path})),oe=s.createHref(Me);return ve({fullPath:Me,hash:de,query:r===Mm?KA(A.query):A.query||{}},Y,{redirectedFrom:void 0,href:oe})}function x(A){return typeof A=="string"?Ll(n,A,c.value.path):ve({},A)}function b(A,q){if(u!==A)return Ii(8,{from:q,to:A})}function D(A){return ue(A)}function G(A){return D(ve(x(A),{replace:!0}))}function Q(A){const q=A.matched[A.matched.length-1];if(q&&q.redirect){const{redirect:V}=q;let Y=typeof V=="function"?V(A):V;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=x(Y):{path:Y},Y.params={}),ve({query:A.query,hash:A.hash,params:"path"in Y?{}:A.params},Y)}}function ue(A,q){const V=u=S(A),Y=c.value,de=A.state,Me=A.force,oe=A.replace===!0,f=Q(V);if(f)return ue(ve(x(f),{state:typeof f=="object"?ve({},de,f.state):de,force:Me,replace:oe}),q||V);const m=V;m.redirectedFrom=q;let w;return!Me&&nA(r,Y,V)&&(w=Ii(16,{to:m,from:Y}),zr(Y,Y,!0,!1)),(w?Promise.resolve(w):Ce(m,Y)).catch(E=>Bn(E)?Bn(E,2)?E:sn(E):Te(E,m,Y)).then(E=>{if(E){if(Bn(E,2))return ue(ve({replace:oe},x(E.to),{state:typeof E.to=="object"?ve({},de,E.to.state):de,force:Me}),q||m)}else E=gt(m,Y,!0,oe,de);return Ee(m,Y,E),E})}function Z(A,q){const V=b(A,q);return V?Promise.reject(V):Promise.resolve()}function Ce(A,q){let V;const[Y,de,Me]=XA(A,q);V=Fl(Y.reverse(),"beforeRouteLeave",A,q);for(const f of Y)f.leaveGuards.forEach(m=>{V.push(mr(m,A,q))});const oe=Z.bind(null,A,q);return V.push(oe),Qs(V).then(()=>{V=[];for(const f of i.list())V.push(mr(f,A,q));return V.push(oe),Qs(V)}).then(()=>{V=Fl(de,"beforeRouteUpdate",A,q);for(const f of de)f.updateGuards.forEach(m=>{V.push(mr(m,A,q))});return V.push(oe),Qs(V)}).then(()=>{V=[];for(const f of A.matched)if(f.beforeEnter&&!q.matched.includes(f))if(mn(f.beforeEnter))for(const m of f.beforeEnter)V.push(mr(m,A,q));else V.push(mr(f.beforeEnter,A,q));return V.push(oe),Qs(V)}).then(()=>(A.matched.forEach(f=>f.enterCallbacks={}),V=Fl(Me,"beforeRouteEnter",A,q),V.push(oe),Qs(V))).then(()=>{V=[];for(const f of o.list())V.push(mr(f,A,q));return V.push(oe),Qs(V)}).catch(f=>Bn(f,8)?f:Promise.reject(f))}function Ee(A,q,V){for(const Y of a.list())Y(A,q,V)}function gt(A,q,V,Y,de){const Me=b(A,q);if(Me)return Me;const oe=q===lr,f=ti?history.state:{};V&&(Y||oe?s.replace(A.fullPath,ve({scroll:oe&&f&&f.scroll},de)):s.push(A.fullPath,de)),c.value=A,zr(A,q,V,oe),sn()}let yt;function rn(){yt||(yt=s.listen((A,q,V)=>{if(!Ya.listening)return;const Y=S(A),de=Q(Y);if(de){ue(ve(de,{replace:!0}),Y).catch(Po);return}u=Y;const Me=c.value;ti&&lA(Cm(Me.fullPath,V.delta),Tu()),Ce(Y,Me).catch(oe=>Bn(oe,12)?oe:Bn(oe,2)?(ue(oe.to,Y).then(f=>{Bn(f,20)&&!V.delta&&V.type===ea.pop&&s.go(-1,!1)}).catch(Po),Promise.reject()):(V.delta&&s.go(-V.delta,!1),Te(oe,Y,Me))).then(oe=>{oe=oe||gt(Y,Me,!1),oe&&(V.delta&&!Bn(oe,8)?s.go(-V.delta,!1):V.type===ea.pop&&Bn(oe,20)&&s.go(-1,!1)),Ee(Y,Me,oe)}).catch(Po)}))}let $n=ho(),uo=ho(),We;function Te(A,q,V){sn(A);const Y=uo.list();return Y.length?Y.forEach(de=>de(A,q,V)):console.error(A),Promise.reject(A)}function we(){return We&&c.value!==lr?Promise.resolve():new Promise((A,q)=>{$n.add([A,q])})}function sn(A){return We||(We=!A,rn(),$n.list().forEach(([q,V])=>A?V(A):q()),$n.reset()),A}function zr(A,q,V,Y){const{scrollBehavior:de}=t;if(!ti||!de)return Promise.resolve();const Me=!V&&hA(Cm(A.fullPath,0))||(Y||!V)&&history.state&&history.state.scroll||null;return _v().then(()=>de(A,q,Me)).then(oe=>oe&&uA(oe)).catch(oe=>Te(oe,A,q))}const on=A=>s.go(A);let Nt;const Gs=new Set,Ya={currentRoute:c,listening:!0,addRoute:p,removeRoute:g,hasRoute:I,getRoutes:y,resolve:S,options:t,push:D,replace:G,go:on,back:()=>on(-1),forward:()=>on(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:uo.add,isReady:we,install(A){const q=this;A.component("RouterLink",ln),A.component("RouterView",s_),A.config.globalProperties.$router=q,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>ye(c)}),ti&&!Nt&&c.value===lr&&(Nt=!0,D(s.location).catch(de=>{}));const V={};for(const de in lr)V[de]=qt(()=>c.value[de]);A.provide(Su,q),A.provide(Bd,Ur(V)),A.provide(Ch,c);const Y=A.unmount;Gs.add(A),A.unmount=function(){Gs.delete(A),Gs.size<1&&(u=lr,yt&&yt(),yt=null,c.value=lr,Nt=!1,We=!1),Y()}}};return Ya}function Qs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function XA(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>bi(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>bi(u,c))||s.push(c))}return[n,r,s]}function qd(){return tn(Su)}function ZA(){return tn(Bd)}const eC="/tcc-odonto/assets/rural_logo_branco-aada3225.png",tC="/tcc-odonto/assets/uerj_logo_branco-491f8456.png",nC="/tcc-odonto/assets/ufrj_logo_branco-bdd6a818.png";const Au=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},rC={},sC={class:"footer"},iC=oS('<div class="container" data-v-6991e901><div class="columns" data-v-6991e901><div class="column" data-v-6991e901><h2 class="title has-text-centered is-size-3" data-v-6991e901>Equipe: </h2><div class="equipe" data-v-6991e901><ul data-v-6991e901><li data-v-6991e901><a href="https://www.linkedin.com/in/maxsantos97/" target="_blank" data-v-6991e901>Max Santos - Desenvolvedor</a></li><li data-v-6991e901><a href="http://lattes.cnpq.br/9941773528712076" target="_blank" data-v-6991e901>Tiago França - Orientador</a></li><li data-v-6991e901><a href="http://lattes.cnpq.br/8813744643679880" target="_blank" data-v-6991e901>Adilis França - Doutora</a></li><li data-v-6991e901><a href="http://lattes.cnpq.br/8258110098411280" target="_blank" data-v-6991e901>Laura Primo - Doutora</a></li><li data-v-6991e901><a href="http://lattes.cnpq.br/8945163050246047" target="_blank" data-v-6991e901>Mariana Sancas - Doutoranda</a></li><li data-v-6991e901><a href="http://lattes.cnpq.br/5436324394362565" target="_blank" data-v-6991e901>Maysa Duarte - Doutora</a></li></ul></div></div><div class="column" data-v-6991e901><h2 class="title has-text-centered is-size-3" data-v-6991e901>Realização: </h2><div class="faculdades" data-v-6991e901><figure class="image is-128x128" data-v-6991e901><a href="https://portal.ufrrj.br/" target="_blank" data-v-6991e901><img title="UFRRJ | Universidade Federal Rural do Rio de Janeiro" src="'+eC+'" data-v-6991e901></a></figure><figure class="image is-128x128" data-v-6991e901><a href="https://www.uerj.br/" target="_blank" data-v-6991e901><img title="UERJ | Universidade do Estado do Rio de Janeiro" src="'+tC+'" data-v-6991e901></a></figure><figure class="image is-128x128" data-v-6991e901><a href="https://ufrj.br/" target="_blank" data-v-6991e901><img title="UFRJ | Universidade Federal do Rio de Janeiro" src="'+nC+'" data-v-6991e901></a></figure></div></div></div><div data-v-6991e901><p class="has-text-centered" data-v-6991e901><strong data-v-6991e901>Odonto App</strong> desenvolvido por <a href="https://www.linkedin.com/in/maxsantos97" data-v-6991e901>Max Santos</a></p></div></div>',1),oC=[iC];function aC(t,e){return Le(),je("footer",sC,oC)}const cC=Au(rC,[["render",aC],["__scopeId","data-v-6991e901"]]);const uC={},lC=t=>(Md("data-v-c7615c59"),t=t(),Ld(),t),hC=lC(()=>T("div",{class:"container"},[T("h1",{class:"title has-text-centered is-1 my-4"},"Odonto App")],-1)),dC=[hC];function fC(t,e){return Le(),je("header",null,dC)}const pC=Au(uC,[["render",fC],["__scopeId","data-v-c7615c59"]]);const mC={class:"conteudo"},gC={__name:"App",setup(t){return(e,n)=>(Le(),je("div",mC,[Ae(pC),Ae(ye(s_)),Ae(cC)]))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},o_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),r.push(n[l],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},vC=function(t){const e=i_(t);return o_.encodeByteArray(e,!0)},Lc=function(t){return vC(t).replace(/\./g,"")},a_=function(t){try{return o_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Fc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!_C(n)||(t[n]=Fc(t[n],e[n]));return t}function _C(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function Cu(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bC(){return typeof self=="object"&&self.self===self}function c_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function u_(){const t=Fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function IC(){return!Cu()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ta(){try{return typeof indexedDB=="object"}catch{return!1}}function EC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function TC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC=()=>TC().__FIREBASE_DEFAULTS__,AC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&a_(t[1]);return e&&JSON.parse(e)},Kd=()=>{try{return SC()||AC()||CC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},l_=t=>{var e,n;return(n=(e=Kd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},h_=t=>{const e=l_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},kC=()=>{var t;return(t=Kd())===null||t===void 0?void 0:t.config},d_=t=>{var e;return(e=Kd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Lc(JSON.stringify(n)),Lc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC="FirebaseError";class wt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xC,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fs.prototype.create)}}class Fs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?NC(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new wt(s,a,r)}}function NC(t,e){return t.replace(DC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const DC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function OC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Uc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(qm(i)&&qm(o)){if(!Uc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function qm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ii(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function So(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function p_(t,e){const n=new PC(t,e);return n.subscribe.bind(n)}class PC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");MC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ul),s.error===void 0&&(s.error=Ul),s.complete===void 0&&(s.complete=Ul);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ul(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new RC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UC(e))try{this.getOrInitializeService({instanceIdentifier:Zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zr){return this.instances.has(e)}getOptions(e=Zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:FC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zr){return this.component?this.component.multipleInstances?e:Zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FC(t){return t===Zr?void 0:t}function UC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new LC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=[];var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const m_={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},$C=pe.INFO,BC={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},qC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=BC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ku{constructor(e){this.name=e,this._logLevel=$C,this._logHandler=qC,this._userLogHandler=null,Hd.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?m_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}function jC(t){Hd.forEach(e=>{e.setLogLevel(t)})}function KC(t,e){for(const n of Hd){let r=null;e&&e.level&&(r=m_[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(s,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(r??s.logLevel)&&t({level:pe[i].toLowerCase(),message:a,args:o,type:s.name})}}}const HC=(t,e)=>e.some(n=>t instanceof n);let jm,Km;function GC(){return jm||(jm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WC(){return Km||(Km=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const g_=new WeakMap,kh=new WeakMap,y_=new WeakMap,Vl=new WeakMap,Gd=new WeakMap;function zC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Er(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&g_.set(n,t)}).catch(()=>{}),Gd.set(e,t),e}function QC(t){if(kh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});kh.set(t,e)}let Rh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||y_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YC(t){Rh=t(Rh)}function JC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($l(this),e,...n);return y_.set(r,e.sort?e.sort():[e]),Er(r)}:WC().includes(t)?function(...e){return t.apply($l(this),e),Er(g_.get(this))}:function(...e){return Er(t.apply($l(this),e))}}function XC(t){return typeof t=="function"?JC(t):(t instanceof IDBTransaction&&QC(t),HC(t,GC())?new Proxy(t,Rh):t)}function Er(t){if(t instanceof IDBRequest)return zC(t);if(Vl.has(t))return Vl.get(t);const e=XC(t);return e!==t&&(Vl.set(t,e),Gd.set(e,t)),e}const $l=t=>Gd.get(t);function ZC(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Er(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Er(o.result),c.oldVersion,c.newVersion,Er(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const ek=["get","getKey","getAll","getAllKeys","count"],tk=["put","add","delete","clear"],Bl=new Map;function Hm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bl.get(e))return Bl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=tk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ek.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Bl.set(e,i),i}YC(t=>({...t,get:(e,n,r)=>Hm(e,n)||t.get(e,n,r),has:(e,n)=>!!Hm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xh="@firebase/app",Gm="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new ku("@firebase/app"),sk="@firebase/app-compat",ik="@firebase/analytics-compat",ok="@firebase/analytics",ak="@firebase/app-check-compat",ck="@firebase/app-check",uk="@firebase/auth",lk="@firebase/auth-compat",hk="@firebase/database",dk="@firebase/database-compat",fk="@firebase/functions",pk="@firebase/functions-compat",mk="@firebase/installations",gk="@firebase/installations-compat",yk="@firebase/messaging",vk="@firebase/messaging-compat",_k="@firebase/performance",wk="@firebase/performance-compat",bk="@firebase/remote-config",Ik="@firebase/remote-config-compat",Ek="@firebase/storage",Tk="@firebase/storage-compat",Sk="@firebase/firestore",Ak="@firebase/firestore-compat",Ck="firebase",kk="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="[DEFAULT]",Rk={[xh]:"fire-core",[sk]:"fire-core-compat",[ok]:"fire-analytics",[ik]:"fire-analytics-compat",[ck]:"fire-app-check",[ak]:"fire-app-check-compat",[uk]:"fire-auth",[lk]:"fire-auth-compat",[hk]:"fire-rtdb",[dk]:"fire-rtdb-compat",[fk]:"fire-fn",[pk]:"fire-fn-compat",[mk]:"fire-iid",[gk]:"fire-iid-compat",[yk]:"fire-fcm",[vk]:"fire-fcm-compat",[_k]:"fire-perf",[wk]:"fire-perf-compat",[bk]:"fire-rc",[Ik]:"fire-rc-compat",[Ek]:"fire-gcs",[Tk]:"fire-gcs-compat",[Sk]:"fire-fst",[Ak]:"fire-fst-compat","fire-js":"fire-js",[Ck]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new Map,na=new Map;function Vc(t,e){try{t.container.addComponent(e)}catch(n){Ts.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function v_(t,e){t.container.addOrOverwriteComponent(e)}function Xn(t){const e=t.name;if(na.has(e))return Ts.debug(`There were multiple attempts to register component ${e}.`),!1;na.set(e,t);for(const n of kr.values())Vc(n,t);return!0}function Gi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xk(t,e,n=Cr){Gi(t,e).clearInstance(n)}function Nk(){na.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zn=new Fs("app","Firebase",Dk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ok=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=kk;function Ru(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cr,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw zn.create("bad-app-name",{appName:String(s)});if(n||(n=kC()),!n)throw zn.create("no-options");const i=kr.get(s);if(i){if(Uc(n,i.options)&&Uc(r,i.config))return i;throw zn.create("duplicate-app",{appName:s})}const o=new VC(s);for(const c of na.values())o.addComponent(c);const a=new Ok(n,r,o);return kr.set(s,a),a}function xu(t=Cr){const e=kr.get(t);if(!e&&t===Cr)return Ru();if(!e)throw zn.create("no-app",{appName:t});return e}function Pk(){return Array.from(kr.values())}async function __(t){const e=t.name;kr.has(e)&&(kr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Ht(t,e,n){var r;let s=(r=Rk[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ts.warn(a.join(" "));return}Xn(new gn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function w_(t,e){if(t!==null&&typeof t!="function")throw zn.create("invalid-log-argument");KC(t,e)}function b_(t){jC(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk="firebase-heartbeat-database",Lk=1,ra="firebase-heartbeat-store";let ql=null;function I_(){return ql||(ql=ZC(Mk,Lk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ra)}}}).catch(t=>{throw zn.create("idb-open",{originalErrorMessage:t.message})})),ql}async function Fk(t){try{return(await I_()).transaction(ra).objectStore(ra).get(E_(t))}catch(e){if(e instanceof wt)Ts.warn(e.message);else{const n=zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ts.warn(n.message)}}}async function Wm(t,e){try{const r=(await I_()).transaction(ra,"readwrite");return await r.objectStore(ra).put(e,E_(t)),r.done}catch(n){if(n instanceof wt)Ts.warn(n.message);else{const r=zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ts.warn(r.message)}}}function E_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=1024,Vk=30*24*60*60*1e3;class $k{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=zm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Vk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zm(),{heartbeatsToSend:n,unsentEntries:r}=Bk(this._heartbeatsCache.heartbeats),s=Lc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function zm(){return new Date().toISOString().substring(0,10)}function Bk(t,e=Uk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Qm(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ta()?EC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Fk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qm(t){return Lc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(t){Xn(new gn("platform-logger",e=>new nk(e),"PRIVATE")),Xn(new gn("heartbeat",e=>new $k(e),"PRIVATE")),Ht(xh,Gm,t),Ht(xh,Gm,"esm2017"),Ht("fire-js","")}jk("");const Kk=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Vr,_DEFAULT_ENTRY_NAME:Cr,_addComponent:Vc,_addOrOverwriteComponent:v_,_apps:kr,_clearComponents:Nk,_components:na,_getProvider:Gi,_registerComponent:Xn,_removeServiceInstance:xk,deleteApp:__,getApp:xu,getApps:Pk,initializeApp:Ru,onLog:w_,registerVersion:Ht,setLogLevel:b_,FirebaseError:wt},Symbol.toStringTag,{value:"Module"}));function Wd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}const fo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ys={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function T_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gk=Hk,Wk=T_,S_=new Fs("auth","Firebase",T_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=new ku("@firebase/auth");function bc(t,...e){Ym.logLevel<=pe.ERROR&&Ym.error(`Auth (${Vr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,...e){throw zd(t,...e)}function dt(t,...e){return zd(t,...e)}function A_(t,e,n){const r=Object.assign(Object.assign({},Wk()),{[e]:n});return new Fs("auth","Firebase",r).create(e,{appName:t.name})}function Wi(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&rt(t,"argument-error"),A_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return S_.create(t,...e)}function O(t,e,...n){if(!t)throw zd(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bc(e),new Error(e)}function yn(t,e){t||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=new Map;function jt(t){yn(t instanceof Function,"Expected a class definition");let e=Jm.get(t);return e?(yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jm.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(t,e){const n=Gi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Uc(i,e??{}))return s;rt(s,"already-initialized")}return n.initialize({options:e})}function Qk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Qd(){return Xm()==="http:"||Xm()==="https:"}function Xm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qd()||c_()||"connection"in navigator)?navigator.onLine:!0}function Jk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){this.shortDelay=e,this.longDelay=n,yn(n>e,"Short delay should be less than long delay!"),this.isMobile=wC()||jd()}get(){return Yk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t,e){yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=new Sa(3e4,6e4);function Ze(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ot(t,e,n,r,s={}){return k_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Hi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),C_.fetch()(R_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function k_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Xk),e);try{const s=new eR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ao(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ao(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ao(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ao(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw A_(t,l,u);rt(t,l)}}catch(s){if(s instanceof wt)throw s;rt(t,"network-request-failed")}}async function sr(t,e,n,r,s={}){const i=await ot(t,e,n,r,s);return"mfaPendingCredential"in i&&rt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function R_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Yd(t.config,s):`${t.config.apiScheme}://${s}`}class eR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dt(this.auth,"network-request-failed")),Zk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ao(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=dt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR(t,e){return ot(t,"POST","/v1/accounts:delete",e)}async function nR(t,e){return ot(t,"POST","/v1/accounts:update",e)}async function rR(t,e){return ot(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sR(t,e=!1){const n=j(t),r=await n.getIdToken(e),s=Nu(r);O(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Lo(jl(s.auth_time)),issuedAtTime:Lo(jl(s.iat)),expirationTime:Lo(jl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function jl(t){return Number(t)*1e3}function Nu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bc("JWT malformed, contained fewer than 3 sections"),null;try{const s=a_(n);return s?JSON.parse(s):(bc("Failed to decode base64 JWT payload"),null)}catch(s){return bc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function iR(t){const e=Nu(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wt&&oR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lo(this.lastLoginAt),this.creationTime=Lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ia(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Zn(t,rR(n,{idToken:r}));O(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?lR(i.providerUserInfo):[],a=uR(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new x_(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function cR(t){const e=j(t);await ia(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function lR(t){return t.map(e=>{var{providerId:n}=e,r=Wd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hR(t,e){const n=await k_(t,{},async()=>{const r=Hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=R_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",C_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await hR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new oa;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(O(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(O(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oa,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vs{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Wd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new x_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Zn(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sR(this,e)}reload(){return cR(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new vs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ia(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zn(this,tR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(u=n.createdAt)!==null&&u!==void 0?u:void 0,x=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:b,emailVerified:D,isAnonymous:G,providerData:Q,stsTokenManager:ue}=n;O(b&&ue,e,"internal-error");const Z=oa.fromJSON(this.name,ue);O(typeof b=="string",e,"internal-error"),hr(h,e.name),hr(d,e.name),O(typeof D=="boolean",e,"internal-error"),O(typeof G=="boolean",e,"internal-error"),hr(p,e.name),hr(g,e.name),hr(y,e.name),hr(I,e.name),hr(S,e.name),hr(x,e.name);const Ce=new vs({uid:b,auth:e,email:d,emailVerified:D,displayName:h,isAnonymous:G,photoURL:g,phoneNumber:p,tenantId:y,stsTokenManager:Z,createdAt:S,lastLoginAt:x});return Q&&Array.isArray(Q)&&(Ce.providerData=Q.map(Ee=>Object.assign({},Ee))),I&&(Ce._redirectEventId=I),Ce}static async _fromIdTokenResponse(e,n,r=!1){const s=new oa;s.updateFromServerResponse(n);const i=new vs({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ia(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}N_.type="NONE";const Ei=N_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t,e,n){return`firebase:${t}:${e}:${n}`}class di{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=_s(this.userKey,s.apiKey,i),this.fullPersistenceKey=_s("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new di(jt(Ei),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||jt(Ei);const o=_s(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=vs._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new di(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new di(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(P_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(D_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(M_(e))return"Blackberry";if(L_(e))return"Webos";if(Jd(e))return"Safari";if((e.includes("chrome/")||O_(e))&&!e.includes("edge/"))return"Chrome";if(Aa(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function D_(t=Fe()){return/firefox\//i.test(t)}function Jd(t=Fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function O_(t=Fe()){return/crios\//i.test(t)}function P_(t=Fe()){return/iemobile/i.test(t)}function Aa(t=Fe()){return/android/i.test(t)}function M_(t=Fe()){return/blackberry/i.test(t)}function L_(t=Fe()){return/webos/i.test(t)}function zi(t=Fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dR(t=Fe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function fR(t=Fe()){var e;return zi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pR(){return u_()&&document.documentMode===10}function F_(t=Fe()){return zi(t)||Aa(t)||L_(t)||M_(t)||/windows phone/i.test(t)||P_(t)}function mR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(t,e=[]){let n;switch(t){case"Browser":n=Zm(Fe());break;case"Worker":n=`${Zm(Fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eg(this),this.idTokenSubscription=new eg(this),this.beforeStateQueue=new gR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=S_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await di.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ia(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?j(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(jt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await di.create(this,[jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=U_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function st(t){return j(t)}class eg{constructor(e){this.auth=e,this.observer=null,this.addObserver=p_(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function V_(t,e,n){const r=st(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=$_(e),{host:o,port:a}=vR(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||_R()}function $_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vR(t){const e=$_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:tg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:tg(o)}}}function tg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _R(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B_(t,e){return ot(t,"POST","/v1/accounts:resetPassword",Ze(t,e))}async function q_(t,e){return ot(t,"POST","/v1/accounts:update",e)}async function wR(t,e){return ot(t,"POST","/v1/accounts:update",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bR(t,e){return sr(t,"POST","/v1/accounts:signInWithPassword",Ze(t,e))}async function Du(t,e){return ot(t,"POST","/v1/accounts:sendOobCode",Ze(t,e))}async function IR(t,e){return Du(t,e)}async function ER(t,e){return Du(t,e)}async function TR(t,e){return Du(t,e)}async function SR(t,e){return Du(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AR(t,e){return sr(t,"POST","/v1/accounts:signInWithEmailLink",Ze(t,e))}async function CR(t,e){return sr(t,"POST","/v1/accounts:signInWithEmailLink",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa extends Qi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new aa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new aa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return bR(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return AR(e,{email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return q_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return CR(e,{idToken:n,email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(t,e){return sr(t,"POST","/v1/accounts:signInWithIdp",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR="http://localhost";class Fn extends Qi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Wd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Fn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qn(e,n)}buildRequest(){const e={requestUri:kR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RR(t,e){return ot(t,"POST","/v1/accounts:sendVerificationCode",Ze(t,e))}async function xR(t,e){return sr(t,"POST","/v1/accounts:signInWithPhoneNumber",Ze(t,e))}async function NR(t,e){const n=await sr(t,"POST","/v1/accounts:signInWithPhoneNumber",Ze(t,e));if(n.temporaryProof)throw Ao(t,"account-exists-with-different-credential",n);return n}const DR={USER_NOT_FOUND:"user-not-found"};async function OR(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return sr(t,"POST","/v1/accounts:signInWithPhoneNumber",Ze(t,n),DR)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends Qi{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ws({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ws({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return xR(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return NR(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return OR(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:s}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!n&&!s&&!i?null:new ws({verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function MR(t){const e=ii(So(t)).link,n=e?ii(So(e)).deep_link_id:null,r=ii(So(t)).deep_link_id;return(r?ii(So(r)).link:null)||r||n||e||t}class Ou{constructor(e){var n,r,s,i,o,a;const c=ii(So(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=PR((s=c.mode)!==null&&s!==void 0?s:null);O(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=MR(e);try{return new Ou(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.providerId=$r.PROVIDER_ID}static credential(e,n){return aa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ou.parseLink(n);return O(r,"argument-error"),aa._fromEmailAndCode(e,r.code,r.tenantId)}}$r.PROVIDER_ID="password";$r.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$r.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends ir{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class fi extends Yi{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return O("providerId"in n&&"signInMethod"in n,"argument-error"),Fn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return O(e.idToken||e.accessToken,"argument-error"),Fn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return fi.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return fi.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:a}=e;if(!r&&!s&&!n&&!i||!a)return null;try{return new fi(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:i})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Yi{constructor(){super("facebook.com")}static credential(e){return Fn._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fn._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Sn.credential(n,r)}catch{return null}}}Sn.GOOGLE_SIGN_IN_METHOD="google.com";Sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Yi{constructor(){super("github.com")}static credential(e){return Fn._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="http://localhost";class Ti extends Qi{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Qn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,pendingToken:i}=n;return!r||!s||!i||r!==s?null:new Ti(r,i)}static _create(e,n){return new Ti(e,n)}buildRequest(){return{requestUri:LR,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR="saml.";class $c extends ir{constructor(e){O(e.startsWith(FR),"argument-error"),super(e)}static credentialFromResult(e){return $c.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return $c.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Ti.fromJSON(e);return O(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Ti._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Yi{constructor(){super("twitter.com")}static credential(e,n){return Fn._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(t,e){return sr(t,"POST","/v1/accounts:signUp",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await vs._fromIdTokenResponse(e,r,s),o=ng(r);return new nn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ng(r);return new nn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ng(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UR(t){var e;const n=st(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new nn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await j_(n,{returnSecureToken:!0}),s=await nn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc extends wt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Bc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Bc(e,n,r,s)}}function K_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Bc._fromErrorAndOperation(t,i,e,r):i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VR(t,e){const n=j(t);await Pu(!0,n,e);const{providerUserInfo:r}=await nR(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),s=H_(r||[]);return n.providerData=n.providerData.filter(i=>s.has(i.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Xd(t,e,n=!1){const r=await Zn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return nn._forOperation(t,"link",r)}async function Pu(t,e,n){await ia(e);const r=H_(e.providerData),s=t===!1?"provider-already-linked":"no-such-provider";O(r.has(n)===t,e.auth,s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Zn(t,K_(r,s,e,t),n);O(i.idToken,r,"internal-error");const o=Nu(i.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(t.uid===a,r,"user-mismatch"),nn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&rt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W_(t,e,n=!1){const r="signIn",s=await K_(t,r,e),i=await nn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Mu(t,e){return W_(st(t),e)}async function z_(t,e){const n=j(t);return await Pu(!1,n,e.providerId),Xd(n,e)}async function Q_(t,e){return G_(j(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(t,e){return sr(t,"POST","/v1/accounts:signInWithCustomToken",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BR(t,e){const n=st(t),r=await $R(n,{token:e,returnSecureToken:!0}),s=await nn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Zd._fromServerResponse(e,n):rt(e,"internal-error")}}class Zd extends Lu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Zd(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t,e,n){var r;O(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),O(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(O(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(O(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qR(t,e,n){const r=j(t),s={requestType:"PASSWORD_RESET",email:e};n&&Fu(r,s,n),await ER(r,s)}async function jR(t,e,n){await B_(j(t),{oobCode:e,newPassword:n})}async function KR(t,e){await wR(j(t),{oobCode:e})}async function Y_(t,e){const n=j(t),r=await B_(n,{oobCode:e}),s=r.requestType;switch(O(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":O(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":O(r.mfaInfo,n,"internal-error");default:O(r.email,n,"internal-error")}let i=null;return r.mfaInfo&&(i=Lu._fromServerResponse(st(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:i},operation:s}}async function HR(t,e){const{data:n}=await Y_(j(t),e);return n.email}async function J_(t,e,n){const r=st(t),s=await j_(r,{returnSecureToken:!0,email:e,password:n}),i=await nn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function ef(t,e,n){return Mu(j(t),$r.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(t,e,n){const r=j(t),s={requestType:"EMAIL_SIGNIN",email:e};O(n.handleCodeInApp,r,"argument-error"),n&&Fu(r,s,n),await TR(r,s)}function WR(t,e){const n=Ou.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function zR(t,e,n){const r=j(t),s=$r.credentialWithLink(e,n||sa());return O(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Mu(r,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(t,e){return ot(t,"POST","/v1/accounts:createAuthUri",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(t,e){const n=Qd()?sa():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:s}=await QR(j(t),r);return s||[]}async function JR(t,e){const n=j(t),s={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Fu(n.auth,s,e);const{email:i}=await IR(n.auth,s);i!==t.email&&await t.reload()}async function XR(t,e,n){const r=j(t),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Fu(r.auth,i,n);const{email:o}=await SR(r.auth,i);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZR(t,e){return ot(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ex(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=j(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Zn(r,ZR(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function tx(t,e){return X_(j(t),e,null)}function nx(t,e){return X_(j(t),null,e)}async function X_(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await Zn(t,q_(r,i));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(t){var e,n;if(!t)return null;const{providerId:r}=t,s=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},i=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Nu(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new pi(i,a)}}if(!r)return null;switch(r){case"facebook.com":return new sx(i,s);case"github.com":return new ix(i,s);case"google.com":return new ox(i,s);case"twitter.com":return new ax(i,s,t.screenName||null);case"custom":case"anonymous":return new pi(i,null);default:return new pi(i,r,s)}}class pi{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Z_ extends pi{constructor(e,n,r,s){super(e,n,r),this.username=s}}class sx extends pi{constructor(e,n){super(e,"facebook.com",n)}}class ix extends Z_{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class ox extends pi{constructor(e,n){super(e,"google.com",n)}}class ax extends Z_{constructor(e,n,r){super(e,"twitter.com",n,r)}}function cx(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:rx(n)}function ux(t,e,n,r){return j(t).onIdTokenChanged(e,n,r)}function lx(t,e,n){return j(t).beforeAuthStateChanged(e,n)}class ls{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new ls("enroll",e,n)}static _fromMfaPendingCredential(e){return new ls("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return ls._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ls._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=st(e),s=n.customData._serverResponse,i=(s.mfaInfo||[]).map(a=>Lu._fromServerResponse(r,a));O(s.mfaPendingCredential,r,"internal-error");const o=ls._fromMfaPendingCredential(s.mfaPendingCredential);return new tf(o,i,async a=>{const c=await a._process(r,o);delete s.mfaInfo,delete s.mfaPendingCredential;const u=Object.assign(Object.assign({},s),{idToken:c.idToken,refreshToken:c.refreshToken});switch(n.operationType){case"signIn":const l=await nn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return O(n.user,r,"internal-error"),nn._forOperation(n.user,n.operationType,u);default:rt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function hx(t,e){var n;const r=j(t),s=e;return O(e.customData.operationType,r,"argument-error"),O((n=s.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),tf._fromError(r,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dx(t,e){return ot(t,"POST","/v2/accounts/mfaEnrollment:start",Ze(t,e))}function fx(t,e){return ot(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ze(t,e))}function px(t,e){return ot(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ze(t,e))}class nf{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Lu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new nf(e)}async getSession(){return ls._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,s=await this.getSession(),i=await Zn(this.user,r._process(this.user.auth,s,n));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),s=await Zn(this.user,px(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:i})=>i!==n),await this.user._updateTokensIfNecessary(s);try{await this.user.reload()}catch(i){if((i==null?void 0:i.code)!=="auth/user-token-expired")throw i}}}const Kl=new WeakMap;function mx(t){const e=j(t);return Kl.has(e)||Kl.set(e,nf._fromUser(e)),Kl.get(e)}const qc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qc,"1"),this.storage.removeItem(qc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(){const t=Fe();return Jd(t)||zi(t)}const yx=1e3,vx=10;class tw extends ew{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gx()&&mR(),this.fallbackToPolling=F_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);pR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,vx):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tw.type="LOCAL";const Uu=tw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw extends ew{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nw.type="SESSION";const Rr=nw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _x(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Vu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await _x(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Ca("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return window}function bx(t){Ye().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function Ix(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ex(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Tx(){return rf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw="firebaseLocalStorageDb",Sx=1,jc="firebaseLocalStorage",sw="fbase_key";class ka{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $u(t,e){return t.transaction([jc],e?"readwrite":"readonly").objectStore(jc)}function Ax(){const t=indexedDB.deleteDatabase(rw);return new ka(t).toPromise()}function Nh(){const t=indexedDB.open(rw,Sx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jc,{keyPath:sw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jc)?e(r):(r.close(),await Ax(),e(await Nh()))})})}async function rg(t,e,n){const r=$u(t,!0).put({[sw]:e,value:n});return new ka(r).toPromise()}async function Cx(t,e){const n=$u(t,!1).get(e),r=await new ka(n).toPromise();return r===void 0?null:r.value}function sg(t,e){const n=$u(t,!0).delete(e);return new ka(n).toPromise()}const kx=800,Rx=3;class iw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Rx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vu._getInstance(Tx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ix(),!this.activeServiceWorker)return;this.sender=new wx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ex()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nh();return await rg(e,qc,"1"),await sg(e,qc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Cx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$u(s,!1).getAll();return new ka(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iw.type="LOCAL";const Si=iw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xx(t,e){return ot(t,"POST","/v2/accounts/mfaSignIn:start",Ze(t,e))}function Nx(t,e){return ot(t,"POST","/v2/accounts/mfaSignIn:finalize",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dx(t){return(await ot(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ow(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=dt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Ox().appendChild(r)})}function aw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px=500,Mx=6e4,rc=1e12;class Lx{constructor(e){this.auth=e,this.counter=rc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new Fx(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||rc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||rc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||rc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class Fx{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;O(s,"argument-error",{appName:n}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Ux(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Mx)},Px))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Ux(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=aw("rcb"),Vx=new Sa(3e4,6e4),$x="https://www.google.com/recaptcha/api.js?";class Bx{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ye().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return O(qx(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Ye().grecaptcha):new Promise((r,s)=>{const i=Ye().setTimeout(()=>{s(dt(e,"network-request-failed"))},Vx.get());Ye()[Hl]=()=>{Ye().clearTimeout(i),delete Ye()[Hl];const a=Ye().grecaptcha;if(!a){s(dt(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${$x}?${Hi({onload:Hl,render:"explicit",hl:n})}`;ow(o).catch(()=>{clearTimeout(i),s(dt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ye().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function qx(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class jx{async load(e){return new Lx(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw="recaptcha",Kx={theme:"light",type:"image"};let Hx=class{constructor(e,n=Object.assign({},Kx),r){this.parameters=n,this.type=cw,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=st(r),this.isInvisible=this.parameters.size==="invisible",O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof e=="string"?document.getElementById(e):e;O(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new jx:new Bx,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){O(!this.parameters.sitekey,this.auth,"argument-error"),O(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ye()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){O(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){O(Qd()&&!rf(),this.auth,"internal-error"),await Gx(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Dx(this.auth);O(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return O(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function Gx(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ws._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Wx(t,e,n){const r=st(t),s=await Bu(r,e,j(n));return new sf(s,i=>Mu(r,i))}async function zx(t,e,n){const r=j(t);await Pu(!1,r,"phone");const s=await Bu(r.auth,e,j(n));return new sf(s,i=>z_(r,i))}async function Qx(t,e,n){const r=j(t),s=await Bu(r.auth,e,j(n));return new sf(s,i=>Q_(r,i))}async function Bu(t,e,n){var r;const s=await n.verify();try{O(typeof s=="string",t,"argument-error"),O(n.type===cw,t,"argument-error");let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const o=i.session;if("phoneNumber"in i)return O(o.type==="enroll",t,"internal-error"),(await dx(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{O(o.type==="signin",t,"internal-error");const a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;return O(a,t,"missing-multi-factor-info"),(await xx(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await RR(t,{phoneNumber:i.phoneNumber,recaptchaToken:s});return o}}finally{n._reset()}}async function Yx(t,e){await Xd(j(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pn=class{constructor(e){this.providerId=Pn.PROVIDER_ID,this.auth=st(e)}verifyPhoneNumber(e,n){return Bu(this.auth,e,j(n))}static credential(e,n){return ws._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Pn.credentialFromTaggedObject(n)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?ws._fromTokenResponse(n,r):null}};Pn.PROVIDER_ID="phone";Pn.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(t,e){return e?jt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of extends Qi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Jx(t){return W_(t.auth,new of(t),t.bypassAuthState)}function Xx(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),G_(n,new of(t),t.bypassAuthState)}async function Zx(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Xd(n,new of(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jx;case"linkViaPopup":case"linkViaRedirect":return Zx;case"reauthViaPopup":case"reauthViaRedirect":return Xx;default:rt(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=new Sa(2e3,1e4);async function t1(t,e,n){const r=st(t);Wi(t,e,ir);const s=Us(r,n);return new Hn(r,"signInViaPopup",e,s).executeNotNull()}async function n1(t,e,n){const r=j(t);Wi(r.auth,e,ir);const s=Us(r.auth,n);return new Hn(r.auth,"reauthViaPopup",e,s,r).executeNotNull()}async function r1(t,e,n){const r=j(t);Wi(r.auth,e,ir);const s=Us(r.auth,n);return new Hn(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class Hn extends uw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Hn.currentPopupAction&&Hn.currentPopupAction.cancel(),Hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=Ca();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,e1.get())};e()}}Hn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1="pendingRedirect",Fo=new Map;class i1 extends uw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fo.get(this.auth._key());if(!e){try{const r=await o1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fo.set(this.auth._key(),e)}return this.bypassAuthState||Fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function o1(t,e){const n=hw(e),r=lw(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function af(t,e){return lw(t)._set(hw(e),"true")}function a1(){Fo.clear()}function cf(t,e){Fo.set(t._key(),e)}function lw(t){return jt(t._redirectPersistence)}function hw(t){return _s(s1,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(t,e,n){return u1(t,e,n)}async function u1(t,e,n){const r=st(t);Wi(t,e,ir);const s=Us(r,n);return await af(s,r),s._openRedirect(r,e,"signInViaRedirect")}function l1(t,e,n){return h1(t,e,n)}async function h1(t,e,n){const r=j(t);Wi(r.auth,e,ir);const s=Us(r.auth,n);await af(s,r.auth);const i=await dw(r);return s._openRedirect(r.auth,e,"reauthViaRedirect",i)}function d1(t,e,n){return f1(t,e,n)}async function f1(t,e,n){const r=j(t);Wi(r.auth,e,ir);const s=Us(r.auth,n);await Pu(!1,r,e.providerId),await af(s,r.auth);const i=await dw(r);return s._openRedirect(r.auth,e,"linkViaRedirect",i)}async function p1(t,e){return await st(t)._initializationPromise,qu(t,e,!1)}async function qu(t,e,n=!1){const r=st(t),s=Us(r,e),o=await new i1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function dw(t){const e=Ca(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=10*60*1e3;class fw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!g1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pw(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=m1&&this.cachedEventUids.clear(),this.cachedEventUids.has(ig(e))}saveEventToCache(e){this.cachedEventUids.add(ig(e)),this.lastProcessedEventTime=Date.now()}}function ig(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function g1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mw(t,e={}){return ot(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,v1=/^https?/;async function _1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mw(t);for(const n of e)try{if(w1(n))return}catch{}rt(t,"unauthorized-domain")}function w1(t){const e=sa(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!v1.test(n))return!1;if(y1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=new Sa(3e4,6e4);function og(){const t=Ye().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function I1(t){return new Promise((e,n)=>{var r,s,i;function o(){og(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{og(),n(dt(t,"network-request-failed"))},timeout:b1.get()})}if(!((s=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ye().gapi)===null||i===void 0)&&i.load)o();else{const a=aw("iframefcb");return Ye()[a]=()=>{gapi.load?o():n(dt(t,"network-request-failed"))},ow(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ic=null,e})}let Ic=null;function E1(t){return Ic=Ic||I1(t),Ic}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=new Sa(5e3,15e3),S1="__/auth/iframe",A1="emulator/auth/iframe",C1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},k1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function R1(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yd(e,A1):`https://${t.config.authDomain}/${S1}`,r={apiKey:e.apiKey,appName:t.name,v:Vr},s=k1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Hi(r).slice(1)}`}async function x1(t){const e=await E1(t),n=Ye().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:R1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:C1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=dt(t,"network-request-failed"),a=Ye().setTimeout(()=>{i(o)},T1.get());function c(){Ye().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},D1=500,O1=600,P1="_blank",M1="http://localhost";class ag{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function L1(t,e,n,r=D1,s=O1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},N1),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Fe().toLowerCase();n&&(a=O_(u)?P1:n),D_(u)&&(e=e||M1,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(fR(u)&&a!=="_self")return F1(e||"",a),new ag(null);const h=window.open(e||"",a,l);O(h,t,"popup-blocked");try{h.focus()}catch{}return new ag(h)}function F1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1="__/auth/handler",V1="emulator/auth/handler";function Dh(t,e,n,r,s,i){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vr,eventId:s};if(e instanceof ir){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",OC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Yi){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${$1(t)}?${Hi(a).slice(1)}`}function $1({config:t}){return t.emulator?Yd(t,V1):`https://${t.authDomain}/${U1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="webStorageSupport";class B1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rr,this._completeRedirectFn=qu,this._overrideRedirectResult=cf}async _openPopup(e,n,r,s){var i;yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Dh(e,n,r,sa(),s);return L1(e,o,Ca())}async _openRedirect(e,n,r,s){return await this._originValidation(e),bx(Dh(e,n,r,sa(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await x1(e),r=new fw(e);return n.register("authEvent",s=>(O(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gl,{type:Gl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Gl];o!==void 0&&n(!!o),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return F_()||Jd()||zi()}}const gw=B1;class q1{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Rn("unexpected MultiFactorSessionType")}}}class uf extends q1{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new uf(e)}_finalizeEnroll(e,n,r){return fx(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return Nx(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class yw{constructor(){}static assertion(e){return uf._fromCredential(e)}}yw.FACTOR_ID="phone";var cg="@firebase/auth",ug="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function H1(t){Xn(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{O(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),O(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:U_(t)},l=new yR(a,c,u);return Qk(l,n),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xn(new gn("auth-internal",e=>{const n=st(e.getProvider("auth").getImmediate());return(r=>new j1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(cg,ug,K1(t)),Ht(cg,ug,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=5*60,W1=d_("authIdTokenMaxAge")||G1;let lg=null;const z1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>W1)return;const s=n==null?void 0:n.token;lg!==s&&(lg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lf(t=xu()){const e=Gi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zk(t,{popupRedirectResolver:gw,persistence:[Si,Uu,Rr]}),r=d_("authTokenSyncURL");if(r){const i=z1(r);lx(n,i,()=>i(n.currentUser)),ux(n,o=>i(o))}const s=l_("auth");return s&&V_(n,`http://${s}`),n}H1("Browser");var Q1="firebase",Y1="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht(Q1,Y1,"app");var J1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},H,hf=hf||{},ee=J1||self;function Kc(){}function ju(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ra(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function X1(t){return Object.prototype.hasOwnProperty.call(t,Wl)&&t[Wl]||(t[Wl]=++Z1)}var Wl="closure_uid_"+(1e9*Math.random()>>>0),Z1=0;function eN(t,e,n){return t.call.apply(t.bind,arguments)}function tN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function bt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?bt=eN:bt=tN,bt.apply(null,arguments)}function sc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function mt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Br(){this.s=this.s,this.o=this.o}var nN=0;Br.prototype.s=!1;Br.prototype.na=function(){!this.s&&(this.s=!0,this.M(),nN!=0)&&X1(this)};Br.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const vw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function df(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function hg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ju(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function It(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var rN=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ee.addEventListener("test",Kc,e),ee.removeEventListener("test",Kc,e)}catch{}return t}();function Hc(t){return/^[\s\xa0]*$/.test(t)}var dg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function zl(t,e){return t<e?-1:t>e?1:0}function Ku(){var t=ee.navigator;return t&&(t=t.userAgent)?t:""}function kn(t){return Ku().indexOf(t)!=-1}function ff(t){return ff[" "](t),t}ff[" "]=Kc;function sN(t){var e=aN;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var iN=kn("Opera"),Ai=kn("Trident")||kn("MSIE"),_w=kn("Edge"),Oh=_w||Ai,ww=kn("Gecko")&&!(Ku().toLowerCase().indexOf("webkit")!=-1&&!kn("Edge"))&&!(kn("Trident")||kn("MSIE"))&&!kn("Edge"),oN=Ku().toLowerCase().indexOf("webkit")!=-1&&!kn("Edge");function bw(){var t=ee.document;return t?t.documentMode:void 0}var Gc;e:{var Ql="",Yl=function(){var t=Ku();if(ww)return/rv:([^\);]+)(\)|;)/.exec(t);if(_w)return/Edge\/([\d\.]+)/.exec(t);if(Ai)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(oN)return/WebKit\/(\S+)/.exec(t);if(iN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Yl&&(Ql=Yl?Yl[1]:""),Ai){var Jl=bw();if(Jl!=null&&Jl>parseFloat(Ql)){Gc=String(Jl);break e}}Gc=Ql}var aN={};function cN(){return sN(function(){let t=0;const e=dg(String(Gc)).split("."),n=dg("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=zl(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||zl(s[2].length==0,i[2].length==0)||zl(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Ph;if(ee.document&&Ai){var fg=bw();Ph=fg||parseInt(Gc,10)||void 0}else Ph=void 0;var uN=Ph;function ca(t,e){if(It.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ww){e:{try{ff(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:lN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ca.X.h.call(this)}}mt(ca,It);var lN={2:"touch",3:"pen",4:"mouse"};ca.prototype.h=function(){ca.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var xa="closure_listenable_"+(1e6*Math.random()|0),hN=0;function dN(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++hN,this.ba=this.ea=!1}function Hu(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function pf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Iw(t){const e={};for(const n in t)e[n]=t[n];return e}const pg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ew(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<pg.length;i++)n=pg[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Gu(t){this.src=t,this.g={},this.h=0}Gu.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Lh(t,e,r,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new dN(e,this.src,i,!!r,s),e.ea=n,t.push(e)),e};function Mh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=vw(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Hu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Lh(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}var mf="closure_lm_"+(1e6*Math.random()|0),Xl={};function Tw(t,e,n,r,s){if(r&&r.once)return Aw(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Tw(t,e[i],n,r,s);return null}return n=vf(n),t&&t[xa]?t.N(e,n,Ra(r)?!!r.capture:!!r,s):Sw(t,e,n,!1,r,s)}function Sw(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ra(s)?!!s.capture:!!s,a=yf(t);if(a||(t[mf]=a=new Gu(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=fN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)rN||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(kw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function fN(){function t(n){return e.call(t.src,t.listener,n)}const e=pN;return t}function Aw(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Aw(t,e[i],n,r,s);return null}return n=vf(n),t&&t[xa]?t.O(e,n,Ra(r)?!!r.capture:!!r,s):Sw(t,e,n,!0,r,s)}function Cw(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Cw(t,e[i],n,r,s);else r=Ra(r)?!!r.capture:!!r,n=vf(n),t&&t[xa]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Lh(i,n,r,s),-1<n&&(Hu(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=yf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Lh(e,n,r,s)),(n=-1<t?e[t]:null)&&gf(n))}function gf(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[xa])Mh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(kw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yf(e))?(Mh(n,t),n.h==0&&(n.src=null,e[mf]=null)):Hu(t)}}}function kw(t){return t in Xl?Xl[t]:Xl[t]="on"+t}function pN(t,e){if(t.ba)t=!0;else{e=new ca(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&gf(t),t=n.call(r,e)}return t}function yf(t){return t=t[mf],t instanceof Gu?t:null}var Zl="__closure_events_fn_"+(1e9*Math.random()>>>0);function vf(t){return typeof t=="function"?t:(t[Zl]||(t[Zl]=function(e){return t.handleEvent(e)}),t[Zl])}function it(){Br.call(this),this.i=new Gu(this),this.P=this,this.I=null}mt(it,Br);it.prototype[xa]=!0;it.prototype.removeEventListener=function(t,e,n,r){Cw(this,t,e,n,r)};function ft(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new It(e,t);else if(e instanceof It)e.target=e.target||t;else{var s=e;e=new It(r,t),Ew(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=ic(o,r,!0,e)&&s}if(o=e.g=t,s=ic(o,r,!0,e)&&s,s=ic(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=ic(o,r,!1,e)&&s}it.prototype.M=function(){if(it.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Hu(n[r]);delete t.g[e],t.h--}}this.I=null};it.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};it.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ic(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Mh(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var _f=ee.JSON.stringify;function mN(){var t=Nw;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class gN{constructor(){this.h=this.g=null}add(e,n){const r=Rw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Rw=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new yN,t=>t.reset());class yN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function vN(t){ee.setTimeout(()=>{throw t},0)}function xw(t,e){Fh||_N(),Uh||(Fh(),Uh=!0),Nw.add(t,e)}var Fh;function _N(){var t=ee.Promise.resolve(void 0);Fh=function(){t.then(wN)}}var Uh=!1,Nw=new gN;function wN(){for(var t;t=mN();){try{t.h.call(t.g)}catch(n){vN(n)}var e=Rw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Uh=!1}function Wu(t,e){it.call(this),this.h=t||1,this.g=e||ee,this.j=bt(this.lb,this),this.l=Date.now()}mt(Wu,it);H=Wu.prototype;H.ca=!1;H.R=null;H.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ft(this,"tick"),this.ca&&(wf(this),this.start()))}};H.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wf(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}H.M=function(){Wu.X.M.call(this),wf(this),delete this.g};function bf(t,e,n){if(typeof t=="function")n&&(t=bt(t,n));else if(t&&typeof t.handleEvent=="function")t=bt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ee.setTimeout(t,e||0)}function Dw(t){t.g=bf(()=>{t.g=null,t.i&&(t.i=!1,Dw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class bN extends Br{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Dw(this)}M(){super.M(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ua(t){Br.call(this),this.h=t,this.g={}}mt(ua,Br);var mg=[];function Ow(t,e,n,r){Array.isArray(n)||(n&&(mg[0]=n.toString()),n=mg);for(var s=0;s<n.length;s++){var i=Tw(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Pw(t){pf(t.g,function(e,n){this.g.hasOwnProperty(n)&&gf(e)},t),t.g={}}ua.prototype.M=function(){ua.X.M.call(this),Pw(this)};ua.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function zu(){this.g=!0}zu.prototype.Aa=function(){this.g=!1};function IN(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function EN(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function oi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+SN(t,n)+(r?" "+r:"")})}function TN(t,e){t.info(function(){return"TIMEOUT: "+e})}zu.prototype.info=function(){};function SN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return _f(n)}catch{return e}}var Vs={},gg=null;function Qu(){return gg=gg||new it}Vs.Pa="serverreachability";function Mw(t){It.call(this,Vs.Pa,t)}mt(Mw,It);function la(t){const e=Qu();ft(e,new Mw(e))}Vs.STAT_EVENT="statevent";function Lw(t,e){It.call(this,Vs.STAT_EVENT,t),this.stat=e}mt(Lw,It);function Rt(t){const e=Qu();ft(e,new Lw(e,t))}Vs.Qa="timingevent";function Fw(t,e){It.call(this,Vs.Qa,t),this.size=e}mt(Fw,It);function Na(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ee.setTimeout(function(){t()},e)}var Yu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Uw={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function If(){}If.prototype.h=null;function yg(t){return t.h||(t.h=t.i())}function Vw(){}var Da={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ef(){It.call(this,"d")}mt(Ef,It);function Tf(){It.call(this,"c")}mt(Tf,It);var Vh;function Ju(){}mt(Ju,If);Ju.prototype.g=function(){return new XMLHttpRequest};Ju.prototype.i=function(){return{}};Vh=new Ju;function Oa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new ua(this),this.O=AN,t=Oh?125:void 0,this.T=new Wu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new $w}function $w(){this.i=null,this.g="",this.h=!1}var AN=45e3,$h={},Wc={};H=Oa.prototype;H.setTimeout=function(t){this.O=t};function Bh(t,e,n){t.K=1,t.v=Zu(er(e)),t.s=n,t.P=!0,Bw(t,null)}function Bw(t,e){t.F=Date.now(),Pa(t),t.A=er(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),Qw(n.i,"t",r),t.C=0,n=t.l.H,t.h=new $w,t.g=gb(t.l,n?e:null,!t.s),0<t.N&&(t.L=new bN(bt(t.La,t,t.g),t.N)),Ow(t.S,t.g,"readystatechange",t.ib),e=t.H?Iw(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),la(),IN(t.j,t.u,t.A,t.m,t.U,t.s)}H.ib=function(t){t=t.target;const e=this.L;e&&Gn(t)==3?e.l():this.La(t)};H.La=function(t){try{if(t==this.g)e:{const l=Gn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Oh||this.g&&(this.h.h||this.g.fa()||bg(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?la(3):la(2)),Xu(this);var n=this.g.aa();this.Y=n;t:if(qw(this)){var r=bg(this.g);t="";var s=r.length,i=Gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hs(this),Uo(this);var o="";break t}this.h.i=new ee.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,EN(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Hc(a)){var u=a;break t}}u=null}if(n=u)oi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,qh(this,n);else{this.i=!1,this.o=3,Rt(12),hs(this),Uo(this);break e}}this.P?(jw(this,l,o),Oh&&this.i&&l==3&&(Ow(this.S,this.T,"tick",this.hb),this.T.start())):(oi(this.j,this.m,o,null),qh(this,o)),l==4&&hs(this),this.i&&!this.I&&(l==4?db(this.l,this):(this.i=!1,Pa(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Rt(12)):(this.o=0,Rt(13)),hs(this),Uo(this)}}}catch{}finally{}};function qw(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function jw(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=CN(t,n),s==Wc){e==4&&(t.o=4,Rt(14),r=!1),oi(t.j,t.m,null,"[Incomplete Response]");break}else if(s==$h){t.o=4,Rt(15),oi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else oi(t.j,t.m,s,null),qh(t,s);qw(t)&&s!=Wc&&s!=$h&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Rt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Nf(e),e.K=!0,Rt(11))):(oi(t.j,t.m,n,"[Invalid Chunked Response]"),hs(t),Uo(t))}H.hb=function(){if(this.g){var t=Gn(this.g),e=this.g.fa();this.C<e.length&&(Xu(this),jw(this,t,e),this.i&&t!=4&&Pa(this))}};function CN(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Wc:(n=Number(e.substring(n,r)),isNaN(n)?$h:(r+=1,r+n>e.length?Wc:(e=e.substr(r,n),t.C=r+n,e)))}H.cancel=function(){this.I=!0,hs(this)};function Pa(t){t.V=Date.now()+t.O,Kw(t,t.O)}function Kw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Na(bt(t.gb,t),e)}function Xu(t){t.B&&(ee.clearTimeout(t.B),t.B=null)}H.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(TN(this.j,this.A),this.K!=2&&(la(),Rt(17)),hs(this),this.o=2,Uo(this)):Kw(this,this.V-t)};function Uo(t){t.l.G==0||t.I||db(t.l,t)}function hs(t){Xu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,wf(t.T),Pw(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function qh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||jh(n.h,t))){if(!t.J&&jh(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Yc(n),nl(n);else break e;xf(n),Rt(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=Na(bt(n.cb,n),6e3));if(1>=Xw(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ds(n,11)}else if((t.J||n.g==t)&&Yc(n),!Hc(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Sf(i,i.h),i.h=null))}if(r.D){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,Ne(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=mb(r,r.H?r.ka:null,r.V),o.J){Zw(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Xu(a),Pa(a)),r.g=o}else lb(r);0<n.i.length&&rl(n)}else u[0]!="stop"&&u[0]!="close"||ds(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ds(n,7):Rf(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}la(4)}catch{}}function kN(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ju(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function RN(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ju(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Hw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ju(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=RN(t),r=kN(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Gw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function bs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof bs){this.h=e!==void 0?e:t.h,zc(this,t.j),this.s=t.s,this.g=t.g,Qc(this,t.m),this.l=t.l,e=t.i;var n=new ha;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),vg(this,n),this.o=t.o}else t&&(n=String(t).match(Gw))?(this.h=!!e,zc(this,n[1]||"",!0),this.s=Co(n[2]||""),this.g=Co(n[3]||"",!0),Qc(this,n[4]),this.l=Co(n[5]||"",!0),vg(this,n[6]||"",!0),this.o=Co(n[7]||"")):(this.h=!!e,this.i=new ha(null,this.h))}bs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ko(e,_g,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ko(e,_g,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ko(n,n.charAt(0)=="/"?ON:DN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ko(n,MN)),t.join("")};function er(t){return new bs(t)}function zc(t,e,n){t.j=n?Co(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function vg(t,e,n){e instanceof ha?(t.i=e,LN(t.i,t.h)):(n||(e=ko(e,PN)),t.i=new ha(e,t.h))}function Ne(t,e,n){t.i.set(e,n)}function Zu(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Co(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ko(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,NN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function NN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var _g=/[#\/\?@]/g,DN=/[#\?:]/g,ON=/[#\?]/g,PN=/[#\?@]/g,MN=/#/g;function ha(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qr(t){t.g||(t.g=new Map,t.h=0,t.i&&xN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}H=ha.prototype;H.add=function(t,e){qr(this),this.i=null,t=Ji(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ww(t,e){qr(t),e=Ji(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function zw(t,e){return qr(t),e=Ji(t,e),t.g.has(e)}H.forEach=function(t,e){qr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};H.oa=function(){qr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};H.W=function(t){qr(this);let e=[];if(typeof t=="string")zw(this,t)&&(e=e.concat(this.g.get(Ji(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};H.set=function(t,e){return qr(this),this.i=null,t=Ji(this,t),zw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};H.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Qw(t,e,n){Ww(t,e),0<n.length&&(t.i=null,t.g.set(Ji(t,e),df(n)),t.h+=n.length)}H.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ji(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function LN(t,e){e&&!t.j&&(qr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Ww(this,r),Qw(this,s,n))},t)),t.j=e}var FN=class{constructor(e,n){this.h=e,this.g=n}};function Yw(t){this.l=t||UN,ee.PerformanceNavigationTiming?(t=ee.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ee.g&&ee.g.Ga&&ee.g.Ga()&&ee.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var UN=10;function Jw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Xw(t){return t.h?1:t.g?t.g.size:0}function jh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Sf(t,e){t.g?t.g.add(e):t.h=e}function Zw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Yw.prototype.cancel=function(){if(this.i=eb(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function eb(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return df(t.i)}function Af(){}Af.prototype.stringify=function(t){return ee.JSON.stringify(t,void 0)};Af.prototype.parse=function(t){return ee.JSON.parse(t,void 0)};function VN(){this.g=new Af}function $N(t,e,n){const r=n||"";try{Hw(t,function(s,i){let o=s;Ra(s)&&(o=_f(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function BN(t,e){const n=new zu;if(ee.Image){const r=new Image;r.onload=sc(oc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=sc(oc,n,r,"TestLoadImage: error",!1,e),r.onabort=sc(oc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=sc(oc,n,r,"TestLoadImage: timeout",!1,e),ee.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function oc(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ma(t){this.l=t.ac||null,this.j=t.jb||!1}mt(Ma,If);Ma.prototype.g=function(){return new el(this.l,this.j)};Ma.prototype.i=function(t){return function(){return t}}({});function el(t,e){it.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Cf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}mt(el,it);var Cf=0;H=el.prototype;H.open=function(t,e){if(this.readyState!=Cf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,da(this)};H.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ee).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};H.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,La(this)),this.readyState=Cf};H.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,da(this)),this.g&&(this.readyState=3,da(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ee.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tb(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function tb(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}H.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?La(this):da(this),this.readyState==3&&tb(this)}};H.Va=function(t){this.g&&(this.response=this.responseText=t,La(this))};H.Ua=function(t){this.g&&(this.response=t,La(this))};H.ga=function(){this.g&&La(this)};function La(t){t.readyState=4,t.l=null,t.j=null,t.A=null,da(t)}H.setRequestHeader=function(t,e){this.v.append(t,e)};H.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};H.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function da(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(el.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var qN=ee.JSON.parse;function Ve(t){it.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=nb,this.K=this.L=!1}mt(Ve,it);var nb="",jN=/^https?$/i,KN=["POST","PUT"];H=Ve.prototype;H.Ka=function(t){this.L=t};H.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Vh.g(),this.C=this.u?yg(this.u):yg(Vh),this.g.onreadystatechange=bt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){wg(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=ee.FormData&&t instanceof ee.FormData,!(0<=vw(KN,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ib(this),0<this.B&&((this.K=HN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=bt(this.qa,this)):this.A=bf(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){wg(this,i)}};function HN(t){return Ai&&cN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}H.qa=function(){typeof hf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ft(this,"timeout"),this.abort(8))};function wg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,rb(t),tl(t)}function rb(t){t.D||(t.D=!0,ft(t,"complete"),ft(t,"error"))}H.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ft(this,"complete"),ft(this,"abort"),tl(this))};H.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),tl(this,!0)),Ve.X.M.call(this)};H.Ha=function(){this.s||(this.F||this.v||this.l?sb(this):this.fb())};H.fb=function(){sb(this)};function sb(t){if(t.h&&typeof hf<"u"&&(!t.C[1]||Gn(t)!=4||t.aa()!=2)){if(t.v&&Gn(t)==4)bf(t.Ha,0,t);else if(ft(t,"readystatechange"),Gn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(Gw)[1]||null;if(!s&&ee.self&&ee.self.location){var i=ee.self.location.protocol;s=i.substr(0,i.length-1)}r=!jN.test(s?s.toLowerCase():"")}n=r}if(n)ft(t,"complete"),ft(t,"success");else{t.m=6;try{var o=2<Gn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",rb(t)}}finally{tl(t)}}}}function tl(t,e){if(t.g){ib(t);const n=t.g,r=t.C[0]?Kc:null;t.g=null,t.C=null,e||ft(t,"ready");try{n.onreadystatechange=r}catch{}}}function ib(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ee.clearTimeout(t.A),t.A=null)}function Gn(t){return t.g?t.g.readyState:0}H.aa=function(){try{return 2<Gn(this)?this.g.status:-1}catch{return-1}};H.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};H.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),qN(e)}};function bg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case nb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}H.Ea=function(){return this.m};H.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ob(t){let e="";return pf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function kf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ob(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ne(t,e,n))}function po(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ab(t){this.Ca=0,this.i=[],this.j=new zu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=po("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=po("baseRetryDelayMs",5e3,t),this.bb=po("retryDelaySeedMs",1e4,t),this.$a=po("forwardChannelMaxRetries",2,t),this.ta=po("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Yw(t&&t.concurrentRequestLimit),this.Fa=new VN,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}H=ab.prototype;H.ma=8;H.G=1;function Rf(t){if(cb(t),t.G==3){var e=t.U++,n=er(t.F);Ne(n,"SID",t.I),Ne(n,"RID",e),Ne(n,"TYPE","terminate"),Fa(t,n),e=new Oa(t,t.j,e,void 0),e.K=2,e.v=Zu(er(n)),n=!1,ee.navigator&&ee.navigator.sendBeacon&&(n=ee.navigator.sendBeacon(e.v.toString(),"")),!n&&ee.Image&&(new Image().src=e.v,n=!0),n||(e.g=gb(e.l,null),e.g.da(e.v)),e.F=Date.now(),Pa(e)}pb(t)}function nl(t){t.g&&(Nf(t),t.g.cancel(),t.g=null)}function cb(t){nl(t),t.u&&(ee.clearTimeout(t.u),t.u=null),Yc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ee.clearTimeout(t.m),t.m=null)}function rl(t){Jw(t.h)||t.m||(t.m=!0,xw(t.Ja,t),t.C=0)}function GN(t,e){return Xw(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Na(bt(t.Ja,t,e),fb(t,t.C)),t.C++,!0)}H.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Oa(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Iw(i),Ew(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ub(this,s,e),n=er(this.F),Ne(n,"RID",t),Ne(n,"CVER",22),this.D&&Ne(n,"X-HTTP-Session-Id",this.D),Fa(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(ob(i)))+"&"+e:this.o&&kf(n,this.o,i)),Sf(this.h,s),this.Ya&&Ne(n,"TYPE","init"),this.O?(Ne(n,"$req",e),Ne(n,"SID","null"),s.Z=!0,Bh(s,n,null)):Bh(s,n,e),this.G=2}}else this.G==3&&(t?Ig(this,t):this.i.length==0||Jw(this.h)||Ig(this))};function Ig(t,e){var n;e?n=e.m:n=t.U++;const r=er(t.F);Ne(r,"SID",t.I),Ne(r,"RID",n),Ne(r,"AID",t.T),Fa(t,r),t.o&&t.s&&kf(r,t.o,t.s),n=new Oa(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ub(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Sf(t.h,n),Bh(n,r,e)}function Fa(t,e){t.ia&&pf(t.ia,function(n,r){Ne(e,r,n)}),t.l&&Hw({},function(n,r){Ne(e,r,n)})}function ub(t,e,n){n=Math.min(t.i.length,n);var r=t.l?bt(t.l.Ra,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{$N(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function lb(t){t.g||t.u||(t.Z=1,xw(t.Ia,t),t.A=0)}function xf(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Na(bt(t.Ia,t),fb(t,t.A)),t.A++,!0)}H.Ia=function(){if(this.u=null,hb(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Na(bt(this.eb,this),t)}};H.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Rt(10),nl(this),hb(this))};function Nf(t){t.B!=null&&(ee.clearTimeout(t.B),t.B=null)}function hb(t){t.g=new Oa(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=er(t.sa);Ne(e,"RID","rpc"),Ne(e,"SID",t.I),Ne(e,"CI",t.L?"0":"1"),Ne(e,"AID",t.T),Ne(e,"TYPE","xmlhttp"),Fa(t,e),t.o&&t.s&&kf(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Zu(er(e)),n.s=null,n.P=!0,Bw(n,t)}H.cb=function(){this.v!=null&&(this.v=null,nl(this),xf(this),Rt(19))};function Yc(t){t.v!=null&&(ee.clearTimeout(t.v),t.v=null)}function db(t,e){var n=null;if(t.g==e){Yc(t),Nf(t),t.g=null;var r=2}else if(jh(t.h,e))n=e.D,Zw(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Qu(),ft(r,new Fw(r,n)),rl(t)}else lb(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(r==1&&GN(t,e)||r==2&&xf(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:ds(t,5);break;case 4:ds(t,10);break;case 3:ds(t,6);break;default:ds(t,2)}}}function fb(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ds(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=bt(t.kb,t);n||(n=new bs("//www.google.com/images/cleardot.gif"),ee.location&&ee.location.protocol=="http"||zc(n,"https"),Zu(n)),BN(n.toString(),r)}else Rt(2);t.G=0,t.l&&t.l.va(e),pb(t),cb(t)}H.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function pb(t){if(t.G=0,t.la=[],t.l){const e=eb(t.h);(e.length!=0||t.i.length!=0)&&(hg(t.la,e),hg(t.la,t.i),t.h.i.length=0,df(t.i),t.i.length=0),t.l.ua()}}function mb(t,e,n){var r=n instanceof bs?er(n):new bs(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Qc(r,r.m);else{var s=ee.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new bs(null,void 0);r&&zc(i,r),e&&(i.g=e),s&&Qc(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.za,n&&e&&Ne(r,n,e),Ne(r,"VER",t.ma),Fa(t,r),r}function gb(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ve(new Ma({jb:!0})):new Ve(t.ra),e.Ka(t.H),e}function yb(){}H=yb.prototype;H.xa=function(){};H.wa=function(){};H.va=function(){};H.ua=function(){};H.Ra=function(){};function Jc(){if(Ai&&!(10<=Number(uN)))throw Error("Environmental error: no available transport.")}Jc.prototype.g=function(t,e){return new zt(t,e)};function zt(t,e){it.call(this),this.g=new ab(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Hc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Hc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Xi(this)}mt(zt,it);zt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Rt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=mb(t,null,t.V),rl(t)};zt.prototype.close=function(){Rf(this.g)};zt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=_f(t),t=n);e.i.push(new FN(e.ab++,t)),e.G==3&&rl(e)};zt.prototype.M=function(){this.g.l=null,delete this.j,Rf(this.g),delete this.g,zt.X.M.call(this)};function vb(t){Ef.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}mt(vb,Ef);function _b(){Tf.call(this),this.status=1}mt(_b,Tf);function Xi(t){this.g=t}mt(Xi,yb);Xi.prototype.xa=function(){ft(this.g,"a")};Xi.prototype.wa=function(t){ft(this.g,new vb(t))};Xi.prototype.va=function(t){ft(this.g,new _b)};Xi.prototype.ua=function(){ft(this.g,"b")};Jc.prototype.createWebChannel=Jc.prototype.g;zt.prototype.send=zt.prototype.u;zt.prototype.open=zt.prototype.m;zt.prototype.close=zt.prototype.close;Yu.NO_ERROR=0;Yu.TIMEOUT=8;Yu.HTTP_ERROR=6;Uw.COMPLETE="complete";Vw.EventType=Da;Da.OPEN="a";Da.CLOSE="b";Da.ERROR="c";Da.MESSAGE="d";it.prototype.listen=it.prototype.N;Ve.prototype.listenOnce=Ve.prototype.O;Ve.prototype.getLastError=Ve.prototype.Oa;Ve.prototype.getLastErrorCode=Ve.prototype.Ea;Ve.prototype.getStatus=Ve.prototype.aa;Ve.prototype.getResponseJson=Ve.prototype.Sa;Ve.prototype.getResponseText=Ve.prototype.fa;Ve.prototype.send=Ve.prototype.da;Ve.prototype.setWithCredentials=Ve.prototype.Ka;var WN=function(){return new Jc},zN=function(){return Qu()},eh=Yu,QN=Uw,YN=Vs,Eg={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},JN=Ma,ac=Vw,XN=Ve;const Tg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new ku("@firebase/firestore");function Kh(){return xr.logLevel}function ZN(t){xr.setLogLevel(t)}function R(t,...e){if(xr.logLevel<=pe.DEBUG){const n=e.map(Df);xr.debug(`Firestore (${Zi}): ${t}`,...n)}}function Ke(t,...e){if(xr.logLevel<=pe.ERROR){const n=e.map(Df);xr.error(`Firestore (${Zi}): ${t}`,...n)}}function Ci(t,...e){if(xr.logLevel<=pe.WARN){const n=e.map(Df);xr.warn(`Firestore (${Zi}): ${t}`,...n)}}function Df(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t="Unexpected state"){const e=`FIRESTORE (${Zi}) INTERNAL ASSERTION FAILED: `+t;throw Ke(e),new Error(e)}function W(t,e){t||B()}function eD(t,e){t||B()}function U(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends wt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class nD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rD{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new nt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string"),new wb(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string"),new tt(e)}}class sD{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(W(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class iD{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s}getToken(){return Promise.resolve(new sD(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aD{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=i=>{i.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?s(i):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(W(typeof n.token=="string"),this.A=n.token,new oD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=cD(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function ki(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}function Ib(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new C(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new C(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Oe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new Oe(0,0))}static max(){return new z(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n,r){n===void 0?n=0:n>e.length&&B(),r===void 0?r=e.length-n:r>e.length-n&&B(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class he extends fa{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new C(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new he(n)}static emptyPath(){return new he([])}}const uD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends fa{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return uD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new C(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new C(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new C(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new C(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(he.fromString(e))}static fromName(e){return new L(he.fromString(e).popFirst(5))}static empty(){return new L(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new he(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n,r,s){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=s}}function Hh(t){return t.fields.find(e=>e.kind===2)}function es(t){return t.fields.filter(e=>e.kind!==2)}Eb.UNKNOWN_ID=-1;class lD{constructor(e,n){this.fieldPath=e,this.kind=n}}class Xc{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Xc(0,Qt.min())}}function Tb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new Qt(s,L.empty(),e)}function Sb(t){return new Qt(t.readTime,t.key,-1)}class Qt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Qt(z.min(),L.empty(),-1)}static max(){return new Qt(z.max(),L.empty(),-1)}}function Of(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==Ab)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new v((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof v?n:v.resolve(n)}catch(n){return v.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):v.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):v.reject(n)}static resolve(e){return new v((n,r)=>{n(e)})}static reject(e){return new v((n,r)=>{r(e)})}static waitFor(e){return new v((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=v.resolve(!1);for(const r of e)n=n.next(s=>s?v.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new v((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(e,n){return new v((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new nt,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new Vo(e,n.error)):this.P.resolve()},this.transaction.onerror=r=>{const s=Pf(r.target.error);this.P.reject(new Vo(e,s))}}static open(e,n,r,s){try{return new sl(n,e.transaction(s,r))}catch(i){throw new Vo(n,i)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(R("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new dD(n)}}class dn{constructor(e,n,r){this.name=e,this.version=n,this.S=r,dn.D(Fe())===12.2&&Ke("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return R("SimpleDb","Removing database:",e),ss(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!ta())return!1;if(dn.N())return!0;const e=Fe(),n=dn.D(e),r=0<n&&n<10,s=dn.k(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static k(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async F(e){return this.db||(R("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Vo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new C(_.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new C(_.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Vo(e,o))},s.onupgradeneeded=i=>{R("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.S.$(o,s.transaction,i.oldVersion,this.version).next(()=>{R("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=sl.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.V(),u)).catch(u=>(a.abort(u),v.reject(u))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(R("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class hD{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return ss(this.q.delete())}}class Vo extends C{constructor(e,n){super(_.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Kr(t){return t.name==="IndexedDbTransactionError"}class dD{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(R("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(R("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ss(r)}add(e){return R("SimpleDb","ADD",this.store.name,e,e),ss(this.store.add(e))}get(e){return ss(this.store.get(e)).next(n=>(n===void 0&&(n=null),R("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return R("SimpleDb","DELETE",this.store.name,e),ss(this.store.delete(e))}count(){return R("SimpleDb","COUNT",this.store.name),ss(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const s=this.cursor(r),i=[];return this.H(s,(o,a)=>{i.push(a)}).next(()=>i)}{const s=this.store.getAll(r.range);return new v((i,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{i(a.target.result)}})}}J(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new v((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}Y(e,n){R("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.X=!1;const s=this.cursor(r);return this.H(s,(i,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.H(s,n)}tt(e){const n=this.cursor({});return new v((r,s)=>{n.onerror=i=>{const o=Pf(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,n){const r=[];return new v((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new hD(a),u=n(a.primaryKey,a.value,c);if(u instanceof v){const l=u.catch(h=>(c.done(),v.reject(h)));r.push(l)}c.isDone?s():c.G===null?a.continue():a.continue(c.G)}}).next(()=>v.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ss(t){return new v((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=Pf(r.target.error);n(s)}})}let Sg=!1;function Pf(t){const e=dn.D(Fe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Sg||(Sg=!0,setTimeout(()=>{throw r},0)),r}}return t}class fD{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){R("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{R("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){Kr(n)?R("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await jr(n)}await this.nt(6e4)})}}class pD{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const r=new Set;let s=n,i=!0;return v.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return R("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>n-s)}rt(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(s=>this.localStore.localDocuments.getNextDocuments(e,n,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(s,i)).next(a=>(R("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ot(e,n){let r=e;return n.changes.forEach((s,i)=>{const o=Sb(i);Of(o,r)>0&&(r=o)}),new Qt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Mt.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Nr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Nr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Nr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $s(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(t){return t==null}function pa(t){return t===0&&1/t==-1/0}function Rb(t){return typeof t=="number"&&Number.isInteger(t)&&!pa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Xe(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const yD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dr(t){if(W(!!t),typeof t=="string"){let e=0;const n=yD.exec(t);if(W(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ss(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xb(t){const e=t.mapValue.fields.__previous_value__;return Mf(e)?xb(e):e}function ma(t){const e=Dr(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ec={nullValue:"NULL_VALUE"};function As(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mf(t)?4:Nb(t)?9007199254740991:10:B()}function Un(t,e){if(t===e)return!0;const n=As(t);if(n!==As(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ma(t).isEqual(ma(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Dr(r.timestampValue),o=Dr(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Ss(r.bytesValue).isEqual(Ss(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ue(r.geoPointValue.latitude)===Ue(s.geoPointValue.latitude)&&Ue(r.geoPointValue.longitude)===Ue(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ue(r.integerValue)===Ue(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ue(r.doubleValue),o=Ue(s.doubleValue);return i===o?pa(i)===pa(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ki(t.arrayValue.values||[],e.arrayValue.values||[],Un);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Ag(i)!==Ag(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Un(i[a],o[a])))return!1;return!0}(t,e);default:return B()}}function ga(t,e){return(t.values||[]).find(n=>Un(n,e))!==void 0}function Or(t,e){if(t===e)return 0;const n=As(t),r=As(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ue(s.integerValue||s.doubleValue),a=Ue(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Cg(t.timestampValue,e.timestampValue);case 4:return Cg(ma(t),ma(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Ss(s),a=Ss(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=re(o[c],a[c]);if(u!==0)return u}return re(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=re(Ue(s.latitude),Ue(i.latitude));return o!==0?o:re(Ue(s.longitude),Ue(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Or(o[c],a[c]);if(u)return u}return re(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===_r.mapValue&&i===_r.mapValue)return 0;if(s===_r.mapValue)return 1;if(i===_r.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=re(a[l],u[l]);if(h!==0)return h;const d=Or(o[a[l]],c[u[l]]);if(d!==0)return d}return re(a.length,u.length)}(t.mapValue,e.mapValue);default:throw B()}}function Cg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=Dr(t),r=Dr(e),s=re(n.seconds,r.seconds);return s!==0?s:re(n.nanos,r.nanos)}function Ri(t){return Gh(t)}function Gh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Dr(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ss(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Gh(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Gh(r.fields[a])}`;return i+"}"}(t.mapValue):B();var e,n}function Cs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wh(t){return!!t&&"integerValue"in t}function ya(t){return!!t&&"arrayValue"in t}function kg(t){return!!t&&"nullValue"in t}function Rg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Tc(t){return!!t&&"mapValue"in t}function $o(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $s(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$o(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$o(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Nb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function vD(t){return"nullValue"in t?Ec:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Cs(Nr.empty(),L.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:B()}function _D(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Cs(Nr.empty(),L.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?_r:B()}function xg(t,e){const n=Or(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Ng(t,e){const n=Or(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n){this.position=e,this.inclusive=n}}function Dg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=Or(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Og(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Un(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{}class ce extends Db{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new wD(e,n,r):n==="array-contains"?new ED(e,r):n==="in"?new $b(e,r):n==="not-in"?new TD(e,r):n==="array-contains-any"?new SD(e,r):new ce(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bD(e,r):new ID(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Or(n,this.value)):n!==null&&As(this.value)===As(n)&&this.matchesComparison(Or(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class _e extends Db{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new _e(e,n)}matches(e){return xi(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function xi(t){return t.op==="and"}function zh(t){return t.op==="or"}function Ob(t){return Pb(t)&&xi(t)}function Pb(t){for(const e of t.filters)if(e instanceof _e)return!1;return!0}function Mb(t){if(t instanceof ce)return t.field.canonicalString()+t.op.toString()+Ri(t.value);{const e=t.filters.map(n=>Mb(n)).join(",");return`${t.op}(${e})`}}function Lb(t,e){return t instanceof ce?function(n,r){return r instanceof ce&&n.op===r.op&&n.field.isEqual(r.field)&&Un(n.value,r.value)}(t,e):t instanceof _e?function(n,r){return r instanceof _e&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&Lb(i,r.filters[o]),!0):!1}(t,e):void B()}function Fb(t,e){const n=t.filters.concat(e);return _e.create(n,t.op)}function Ub(t){return t instanceof ce?function(e){return`${e.field.canonicalString()} ${e.op} ${Ri(e.value)}`}(t):t instanceof _e?function(e){return e.op.toString()+" {"+e.getFilters().map(Ub).join(" ,")+"}"}(t):"Filter"}class wD extends ce{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class bD extends ce{constructor(e,n){super(e,"in",n),this.keys=Vb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ID extends ce{constructor(e,n){super(e,"not-in",n),this.keys=Vb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Vb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class ED extends ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ya(n)&&ga(n.arrayValue,this.value)}}class $b extends ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ga(this.value.arrayValue,n)}}class TD extends ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(ga(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ga(this.value.arrayValue,n)}}class SD extends ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ya(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ga(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n="asc"){this.field=e,this.dir=n}}function AD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cc(this.root,e,this.comparator,!1)}getReverseIterator(){return new cc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cc(this.root,e,this.comparator,!0)}}class cc{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=i??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ut(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,n,r,s){return this}insert(t,e,n){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Pg(this.data.getIterator())}getIteratorFrom(e){return new Pg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ie(this.comparator);return n.data=e,n}}class Pg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Js(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new Ie(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ki(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Tc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$o(n)}setAll(e){let n=He.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=$o(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Tc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Tc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){$s(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ht($o(this.value))}}function Bb(t){const e=[];return $s(t.fields,(n,r)=>{const s=new He([n]);if(Tc(r)){const i=Bb(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Gt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Re(e,0,z.min(),z.min(),z.min(),ht.empty(),0)}static newFoundDocument(e,n,r,s){return new Re(e,1,n,z.min(),r,s,0)}static newNoDocument(e,n){return new Re(e,2,n,z.min(),z.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new Re(e,3,n,z.min(),z.min(),ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Qh(t,e=null,n=[],r=[],s=null,i=null,o=null){return new CD(t,e,n,r,s,i,o)}function ks(t){const e=U(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Mb(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ua(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ri(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ri(r)).join(",")),e.ft=n}return e.ft}function Va(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!AD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Lb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Og(t.startAt,e.startAt)&&Og(t.endAt,e.endAt)}function Zc(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function eu(t,e){return t.filters.filter(n=>n instanceof ce&&n.field.isEqual(e))}function Mg(t,e,n){let r=Ec,s=!0;for(const i of eu(t,e)){let o=Ec,a=!0;switch(i.op){case"<":case"<=":o=vD(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Ec}xg({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];xg({value:r,inclusive:s},{value:o,inclusive:n.inclusive})<0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}function Lg(t,e,n){let r=_r,s=!0;for(const i of eu(t,e)){let o=_r,a=!0;switch(i.op){case">=":case">":o=_D(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=_r}Ng({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];Ng({value:r,inclusive:s},{value:o,inclusive:n.inclusive})>0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function qb(t,e,n,r,s,i,o,a){return new or(t,e,n,r,s,i,o,a)}function eo(t){return new or(t)}function Fg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Lf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function il(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Ff(t){return t.collectionGroup!==null}function Is(t){const e=U(t);if(e.dt===null){e.dt=[];const n=il(e),r=Lf(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new mi(n)),e.dt.push(new mi(He.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new mi(He.keyField(),i))}}}return e.dt}function Ft(t){const e=U(t);if(!e._t)if(e.limitType==="F")e._t=Qh(e.path,e.collectionGroup,Is(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Is(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new mi(i.field,o))}const r=e.endAt?new Pr(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Pr(e.startAt.position,e.startAt.inclusive):null;e._t=Qh(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e._t}function Yh(t,e){e.getFirstInequalityField(),il(t);const n=t.filters.concat([e]);return new or(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function tu(t,e,n){return new or(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $a(t,e){return Va(Ft(t),Ft(e))&&t.limitType===e.limitType}function jb(t){return`${ks(Ft(t))}|lt:${t.limitType}`}function Jh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Ub(r)).join(", ")}]`),Ua(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ri(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ri(r)).join(",")),`Target(${n})`}(Ft(t))}; limitType=${t.limitType})`}function Uf(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):L.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of Is(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=Dg(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Is(n),r)||n.endAt&&!function(s,i,o){const a=Dg(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Is(n),r))}(t,e)}function Kb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Hb(t){return(e,n)=>{let r=!1;for(const s of Is(t)){const i=kD(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function kD(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Or(a,c):B()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pa(e)?"-0":e}}function Wb(t){return{integerValue:""+t}}function zb(t,e){return Rb(e)?Wb(e):Gb(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this._=void 0}}function RD(t,e,n){return t instanceof Ni?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Rs?Yb(t,e):t instanceof xs?Jb(t,e):function(r,s){const i=Qb(r,s),o=Ug(i)+Ug(r.gt);return Wh(i)&&Wh(r.gt)?Wb(o):Gb(r.yt,o)}(t,e)}function xD(t,e,n){return t instanceof Rs?Yb(t,e):t instanceof xs?Jb(t,e):n}function Qb(t,e){return t instanceof Di?Wh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ni extends ol{}class Rs extends ol{constructor(e){super(),this.elements=e}}function Yb(t,e){const n=Xb(e);for(const r of t.elements)n.some(s=>Un(s,r))||n.push(r);return{arrayValue:{values:n}}}class xs extends ol{constructor(e){super(),this.elements=e}}function Jb(t,e){let n=Xb(e);for(const r of t.elements)n=n.filter(s=>!Un(s,r));return{arrayValue:{values:n}}}class Di extends ol{constructor(e,n){super(),this.yt=e,this.gt=n}}function Ug(t){return Ue(t.integerValue||t.doubleValue)}function Xb(t){return ya(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n){this.field=e,this.transform=n}}function ND(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Rs&&r instanceof Rs||n instanceof xs&&r instanceof xs?ki(n.elements,r.elements,Un):n instanceof Di&&r instanceof Di?Un(n.gt,r.gt):n instanceof Ni&&r instanceof Ni}(t.transform,e.transform)}class DD{constructor(e,n){this.version=e,this.transformResults=n}}class De{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new De}static exists(e){return new De(void 0,e)}static updateTime(e){return new De(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class al{}function Zb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new no(t.key,De.none()):new to(t.key,t.data,De.none());{const n=t.data,r=ht.empty();let s=new Ie(He.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ar(t.key,r,new Gt(s.toArray()),De.none())}}function OD(t,e,n){t instanceof to?function(r,s,i){const o=r.value.clone(),a=$g(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ar?function(r,s,i){if(!Sc(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=$g(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(eI(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Bo(t,e,n,r){return t instanceof to?function(s,i,o,a){if(!Sc(s.precondition,i))return o;const c=s.value.clone(),u=Bg(s.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ar?function(s,i,o,a){if(!Sc(s.precondition,i))return o;const c=Bg(s.fieldTransforms,a,i),u=i.data;return u.setAll(eI(s)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(t,e,n,r):function(s,i,o){return Sc(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function PD(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Qb(r.transform,s||null);i!=null&&(n===null&&(n=ht.empty()),n.set(r.field,i))}return n||null}function Vg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ki(n,r,(s,i)=>ND(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class to extends al{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ar extends al{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function eI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $g(t,e,n){const r=new Map;W(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,xD(o,a,n[s]))}return r}function Bg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,RD(i,o,e))}return r}class no extends al{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vf extends al{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,le;function tI(t){switch(t){default:return B();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function nI(t){if(t===void 0)return Ke("GRPC error has no .code"),_.UNKNOWN;switch(t){case Qe.OK:return _.OK;case Qe.CANCELLED:return _.CANCELLED;case Qe.UNKNOWN:return _.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return _.INTERNAL;case Qe.UNAVAILABLE:return _.UNAVAILABLE;case Qe.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Qe.NOT_FOUND:return _.NOT_FOUND;case Qe.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Qe.ABORTED:return _.ABORTED;case Qe.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Qe.DATA_LOSS:return _.DATA_LOSS;default:return B()}}(le=Qe||(Qe={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){$s(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return kb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=new $e(L.comparator);function Lt(){return LD}const rI=new $e(L.comparator);function Ro(...t){let e=rI;for(const n of t)e=e.insert(n.key,n);return e}function sI(t){let e=rI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xn(){return qo()}function iI(){return qo()}function qo(){return new Hr(t=>t.toString(),(t,e)=>t.isEqual(e))}const FD=new $e(L.comparator),UD=new Ie(L.comparator);function se(...t){let e=UD;for(const n of t)e=e.add(n);return e}const VD=new Ie(re);function cl(){return VD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ja.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new qa(z.min(),s,cl(),Lt(),se())}}class ja{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ja(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n,r,s){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=s}}class oI{constructor(e,n){this.targetId=e,this.Et=n}}class aI{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class qg{constructor(){this.At=0,this.Rt=Kg(),this.bt=Xe.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=se(),n=se(),r=se();return this.Rt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:B()}}),new ja(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=Kg()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class $D{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Lt(),this.qt=jg(),this.Ut=new Ie(re)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:B()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,s)=>{this.zt(s)&&n(s)})}Jt(e){const n=e.targetId,r=e.Et.count,s=this.Yt(n);if(s){const i=s.target;if(Zc(i))if(r===0){const o=new L(i.path);this.Qt(n,o,Re.newNoDocument(o,z.min()))}else W(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Zc(a.target)){const c=new L(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Re.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let r=se();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const s=new qa(e,n,this.Ut,this.Lt,r);return this.Lt=Lt(),this.qt=jg(),this.Ut=new Ie(re),s}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const s=this.Wt(e);this.te(e,n)?s.Nt(n,1):s.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new qg,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ie(re),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new qg),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function jg(){return new $e(L.comparator)}function Kg(){return new $e(L.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),jD=(()=>({and:"AND",or:"OR"}))();class KD{constructor(e,n){this.databaseId=e,this.wt=n}}function Oi(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cI(t,e){return t.wt?e.toBase64():e.toUint8Array()}function HD(t,e){return Oi(t,e.toTimestamp())}function Ge(t){return W(!!t),z.fromTimestamp(function(e){const n=Dr(e);return new Oe(n.seconds,n.nanos)}(t))}function $f(t,e){return function(n){return new he(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function uI(t){const e=he.fromString(t);return W(vI(e)),e}function va(t,e){return $f(t.databaseId,e.path)}function Mn(t,e){const n=uI(e);if(n.get(1)!==t.databaseId.projectId)throw new C(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new C(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(hI(n))}function Xh(t,e){return $f(t.databaseId,e)}function lI(t){const e=uI(t);return e.length===4?he.emptyPath():hI(e)}function _a(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hI(t){return W(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Hg(t,e,n){return{name:va(t,e),fields:n.value.mapValue.fields}}function dI(t,e,n){const r=Mn(t,e.name),s=Ge(e.updateTime),i=e.createTime?Ge(e.createTime):z.min(),o=new ht({mapValue:{fields:e.fields}}),a=Re.newFoundDocument(r,s,i,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function GD(t,e){return"found"in e?function(n,r){W(!!r.found),r.found.name,r.found.updateTime;const s=Mn(n,r.found.name),i=Ge(r.found.updateTime),o=r.found.createTime?Ge(r.found.createTime):z.min(),a=new ht({mapValue:{fields:r.found.fields}});return Re.newFoundDocument(s,i,o,a)}(t,e):"missing"in e?function(n,r){W(!!r.missing),W(!!r.readTime);const s=Mn(n,r.missing),i=Ge(r.readTime);return Re.newNoDocument(s,i)}(t,e):B()}function WD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.wt?(W(u===void 0||typeof u=="string"),Xe.fromBase64String(u||"")):(W(u===void 0||u instanceof Uint8Array),Xe.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?_.UNKNOWN:nI(c.code);return new C(u,c.message||"")}(o);n=new aI(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Mn(t,r.document.name),i=Ge(r.document.updateTime),o=r.document.createTime?Ge(r.document.createTime):z.min(),a=new ht({mapValue:{fields:r.document.fields}}),c=Re.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Ac(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Mn(t,r.document),i=r.readTime?Ge(r.readTime):z.min(),o=Re.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ac([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Mn(t,r.document),i=r.removedTargetIds||[];n=new Ac([],i,s,null)}else{if(!("filter"in e))return B();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new MD(s),o=r.targetId;n=new oI(o,i)}}return n}function wa(t,e){let n;if(e instanceof to)n={update:Hg(t,e.key,e.value)};else if(e instanceof no)n={delete:va(t,e.key)};else if(e instanceof ar)n={update:Hg(t,e.key,e.data),updateMask:ZD(e.fieldMask)};else{if(!(e instanceof Vf))return B();n={verify:va(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Ni)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Rs)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xs)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Di)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw B()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:HD(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:B()}(t,e.precondition)),n}function Zh(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?De.updateTime(Ge(s.updateTime)):s.exists!==void 0?De.exists(s.exists):De.none()}(e.currentDocument):De.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(i,o){let a=null;if("setToServerValue"in o)W(o.setToServerValue==="REQUEST_TIME"),a=new Ni;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Rs(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new xs(u)}else"increment"in o?a=new Di(i,o.increment):B();const c=He.fromServerFormat(o.fieldPath);return new Ba(c,a)}(t,s)):[];if(e.update){e.update.name;const s=Mn(t,e.update.name),i=new ht({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Gt(c.map(u=>He.fromServerFormat(u)))}(e.updateMask);return new ar(s,i,o,n,r)}return new to(s,i,n,r)}if(e.delete){const s=Mn(t,e.delete);return new no(s,n)}if(e.verify){const s=Mn(t,e.verify);return new Vf(s,n)}return B()}function zD(t,e){return t&&t.length>0?(W(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?Ge(r.updateTime):Ge(s);return i.isEqual(z.min())&&(i=Ge(s)),new DD(i,r.transformResults||[])}(n,e))):[]}function fI(t,e){return{documents:[Xh(t,e.path)]}}function pI(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Xh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Xh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return yI(_e.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:ni(l.field),direction:YD(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||Ua(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function mI(t){let e=lI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){W(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=gI(l);return h instanceof _e&&Ob(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new mi(ri(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ua(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Pr(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Pr(d,h)}(n.endAt)),qb(e,s,o,i,a,"F",c,u)}function QD(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return B()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function gI(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ri(e.unaryFilter.field);return ce.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ri(e.unaryFilter.field);return ce.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ri(e.unaryFilter.field);return ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ri(e.unaryFilter.field);return ce.create(i,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(t):t.fieldFilter!==void 0?function(e){return ce.create(ri(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return _e.create(e.compositeFilter.filters.map(n=>gI(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return B()}}(e.compositeFilter.op))}(t):B()}function YD(t){return BD[t]}function JD(t){return qD[t]}function XD(t){return jD[t]}function ni(t){return{fieldPath:t.canonicalString()}}function ri(t){return He.fromServerFormat(t.fieldPath)}function yI(t){return t instanceof ce?function(e){if(e.op==="=="){if(Rg(e.value))return{unaryFilter:{field:ni(e.field),op:"IS_NAN"}};if(kg(e.value))return{unaryFilter:{field:ni(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Rg(e.value))return{unaryFilter:{field:ni(e.field),op:"IS_NOT_NAN"}};if(kg(e.value))return{unaryFilter:{field:ni(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ni(e.field),op:JD(e.op),value:e.value}}}(t):t instanceof _e?function(e){const n=e.getFilters().map(r=>yI(r));return n.length===1?n[0]:{compositeFilter:{op:XD(e.op),filters:n}}}(t):B()}function ZD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function vI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Gg(e)),e=eO(t.get(n),e);return Gg(e)}function eO(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Gg(t){return t+""}function Nn(t){const e=t.length;if(W(e>=2),e===2)return W(t.charAt(0)===""&&t.charAt(1)===""),he.emptyPath();const n=e-2,r=[];let s="";for(let i=0;i<e;){const o=t.indexOf("",i);switch((o<0||o>n)&&B(),t.charAt(o+1)){case"":const a=t.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=t.substring(i,o),s+="\0";break;case"":s+=t.substring(i,o+1);break;default:B()}i=o+2}return new he(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(t,e){return[t,xt(e)]}function _I(t,e,n){return[t,xt(e),n]}const tO={},nO=["prefixPath","collectionGroup","readTime","documentId"],rO=["prefixPath","collectionGroup","documentId"],sO=["collectionGroup","readTime","prefixPath","documentId"],iO=["canonicalId","targetId"],oO=["targetId","path"],aO=["path","targetId"],cO=["collectionId","parent"],uO=["indexId","uid"],lO=["uid","sequenceNumber"],hO=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],dO=["indexId","uid","orderedDocumentKey"],fO=["userId","collectionPath","documentId"],pO=["userId","collectionPath","largestBatchId"],mO=["userId","collectionGroup","largestBatchId"],wI=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],gO=[...wI,"documentOverlays"],bI=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],II=bI,yO=[...II,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed extends Cb{constructor(e,n){super(),this.se=e,this.currentSequenceNumber=n}}function at(t,e){const n=U(t);return dn.M(n.se,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&OD(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=iI();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Zb(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&ki(this.mutations,e.mutations,(n,r)=>Vg(n,r))&&ki(this.baseMutations,e.baseMutations,(n,r)=>Vg(n,r))}}class qf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){W(e.mutations.length===r.length);let s=FD;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new qf(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,r,s,i=z.min(),o=z.min(),a=Xe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e){this.ie=e}}function vO(t,e){let n;if(e.document)n=dI(t.ie,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=L.fromSegments(e.noDocument.path),s=Ds(e.noDocument.readTime);n=Re.newNoDocument(r,s),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return B();{const r=L.fromSegments(e.unknownDocument.path),s=Ds(e.unknownDocument.version);n=Re.newUnknownDocument(r,s)}}return e.readTime&&n.setReadTime(function(r){const s=new Oe(r[0],r[1]);return z.fromTimestamp(s)}(e.readTime)),n}function zg(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:nu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,i){return{name:va(s,i.key),fields:i.data.value.mapValue.fields,updateTime:Oi(s,i.version.toTimestamp()),createTime:Oi(s,i.createTime.toTimestamp())}}(t.ie,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ns(e.version)};else{if(!e.isUnknownDocument())return B();r.unknownDocument={path:n.path.toArray(),version:Ns(e.version)}}return r}function nu(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Ns(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ds(t){const e=new Oe(t.seconds,t.nanoseconds);return z.fromTimestamp(e)}function is(t,e){const n=(e.baseMutations||[]).map(i=>Zh(t.ie,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Zh(t.ie,i)),s=Oe.fromMillis(e.localWriteTimeMs);return new Bf(e.batchId,s,n,r)}function xo(t){const e=Ds(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Ds(t.lastLimboFreeSnapshotVersion):z.min();let r;var s;return t.query.documents!==void 0?(W((s=t.query).documents.length===1),r=Ft(eo(lI(s.documents[0])))):r=function(i){return Ft(mI(i))}(t.query),new Tr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Xe.fromBase64String(t.resumeToken))}function TI(t,e){const n=Ns(e.snapshotVersion),r=Ns(e.lastLimboFreeSnapshotVersion);let s;s=Zc(e.target)?fI(t.ie,e.target):pI(t.ie,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ks(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Kf(t){const e=mI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?tu(e,e.limit,"L"):e}function th(t,e){return new jf(e.largestBatchId,Zh(t.ie,e.overlayMutation))}function Qg(t,e){const n=e.path.lastSegment();return[t,xt(e.path.popLast()),n]}function Yg(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Ns(r.readTime),documentKey:xt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{getBundleMetadata(e,n){return Jg(e).get(n).next(r=>{if(r)return{id:(s=r).bundleId,createTime:Ds(s.createTime),version:s.version};var s})}saveBundleMetadata(e,n){return Jg(e).put({bundleId:(r=n).id,createTime:Ns(Ge(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return Xg(e).get(n).next(r=>{if(r)return{name:(s=r).name,query:Kf(s.bundledQuery),readTime:Ds(s.readTime)};var s})}saveNamedQuery(e,n){return Xg(e).put(function(r){return{name:r.name,readTime:Ns(Ge(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function Jg(t){return at(t,"bundles")}function Xg(t){return at(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n){this.yt=e,this.userId=n}static re(e,n){const r=n.uid||"";return new ul(e,r)}getOverlay(e,n){return mo(e).get(Qg(this.userId,n)).next(r=>r?th(this.yt,r):null)}getOverlays(e,n){const r=xn();return v.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){const s=[];return r.forEach((i,o)=>{const a=new jf(n,o);s.push(this.oe(e,a))}),v.waitFor(s)}removeOverlaysForBatchId(e,n,r){const s=new Set;n.forEach(o=>s.add(xt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(mo(e).Y("collectionPathOverlayIndex",a))}),v.waitFor(i)}getOverlaysForCollection(e,n,r){const s=xn(),i=xt(n),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return mo(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=th(this.yt,c);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,n,r,s){const i=xn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return mo(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=th(this.yt,u);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>i)}oe(e,n){return mo(e).put(function(r,s,i){const[o,a,c]=Qg(s,i.mutation.key);return{userId:s,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:wa(r.ie,i.mutation)}}(this.yt,this.userId,n))}}function mo(t){return at(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){}ue(e,n){this.ce(e,n),n.ae()}ce(e,n){if("nullValue"in e)this.he(n,5);else if("booleanValue"in e)this.he(n,10),n.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(n,15),n.le(Ue(e.integerValue));else if("doubleValue"in e){const r=Ue(e.doubleValue);isNaN(r)?this.he(n,13):(this.he(n,15),pa(r)?n.le(0):n.le(r))}else if("timestampValue"in e){const r=e.timestampValue;this.he(n,20),typeof r=="string"?n.fe(r):(n.fe(`${r.seconds||""}`),n.le(r.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,n),this._e(n);else if("bytesValue"in e)this.he(n,30),n.we(Ss(e.bytesValue)),this._e(n);else if("referenceValue"in e)this.me(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.he(n,45),n.le(r.latitude||0),n.le(r.longitude||0)}else"mapValue"in e?Nb(e)?this.he(n,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,n),this._e(n)):"arrayValue"in e?(this.ye(e.arrayValue,n),this._e(n)):B()}de(e,n){this.he(n,25),this.pe(e,n)}pe(e,n){n.fe(e)}ge(e,n){const r=e.fields||{};this.he(n,55);for(const s of Object.keys(r))this.de(s,n),this.ce(r[s],n)}ye(e,n){const r=e.values||[];this.he(n,50);for(const s of r)this.ce(s,n)}me(e,n){this.he(n,37),L.fromName(e).path.forEach(r=>{this.he(n,60),this.pe(r,n)})}he(e,n){e.le(n)}_e(e){e.le(2)}}os.Ie=new os;function wO(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function Zg(t){const e=64-function(n){let r=0;for(let s=0;s<8;++s){const i=wO(255&n[s]);if(r+=i,i!==8)break}return r}(t);return Math.ceil(e/8)}class bO{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ee(r.value),r=n.next();this.Ae()}Re(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.be(r.value),r=n.next();this.Pe()}ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ee(r);else if(r<2048)this.Ee(960|r>>>6),this.Ee(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ee(480|r>>>12),this.Ee(128|63&r>>>6),this.Ee(128|63&r);else{const s=n.codePointAt(0);this.Ee(240|s>>>18),this.Ee(128|63&s>>>12),this.Ee(128|63&s>>>6),this.Ee(128|63&s)}}this.Ae()}Ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.be(r);else if(r<2048)this.be(960|r>>>6),this.be(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.be(480|r>>>12),this.be(128|63&r>>>6),this.be(128|63&r);else{const s=n.codePointAt(0);this.be(240|s>>>18),this.be(128|63&s>>>12),this.be(128|63&s>>>6),this.be(128|63&s)}}this.Pe()}Se(e){const n=this.De(e),r=Zg(n);this.Ce(1+r),this.buffer[this.position++]=255&r;for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=255&n[s]}xe(e){const n=this.De(e),r=Zg(n);this.Ce(1+r),this.buffer[this.position++]=~(255&r);for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=~(255&n[s])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(e){this.Ce(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fe(){return this.buffer.slice(0,this.position)}De(e){const n=function(s){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,s,!1),new Uint8Array(i.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let s=1;s<n.length;++s)n[s]^=r?255:0;return n}Ee(e){const n=255&e;n===0?(this.ke(0),this.ke(255)):n===255?(this.ke(255),this.ke(0)):this.ke(n)}be(e){const n=255&e;n===0?(this.Me(0),this.Me(255)):n===255?(this.Me(255),this.Me(0)):this.Me(e)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(e){this.Ce(1),this.buffer[this.position++]=e}Me(e){this.Ce(1),this.buffer[this.position++]=~e}Ce(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class IO{constructor(e){this.$e=e}we(e){this.$e.Te(e)}fe(e){this.$e.ve(e)}le(e){this.$e.Se(e)}ae(){this.$e.Ne()}}class EO{constructor(e){this.$e=e}we(e){this.$e.Re(e)}fe(e){this.$e.Ve(e)}le(e){this.$e.xe(e)}ae(){this.$e.Oe()}}class go{constructor(){this.$e=new bO,this.Be=new IO(this.$e),this.Le=new EO(this.$e)}seed(e){this.$e.seed(e)}qe(e){return e===0?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n,r,s){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=s}Ue(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new as(this.indexId,this.documentKey,this.arrayValue,r)}}function dr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=ey(t.arrayValue,e.arrayValue),n!==0?n:(n=ey(t.directionalValue,e.directionalValue),n!==0?n:L.comparator(t.documentKey,e.documentKey)))}function ey(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ke=e.orderBy,this.Ge=[];for(const n of e.filters){const r=n;r.isInequality()?this.Qe=r:this.Ge.push(r)}}je(e){W(e.collectionGroup===this.collectionId);const n=Hh(e);if(n!==void 0&&!this.We(n))return!1;const r=es(e);let s=0,i=0;for(;s<r.length&&this.We(r[s]);++s);if(s===r.length)return!0;if(this.Qe!==void 0){const o=r[s];if(!this.ze(this.Qe,o)||!this.He(this.Ke[i++],o))return!1;++s}for(;s<r.length;++s){const o=r[s];if(i>=this.Ke.length||!this.He(this.Ke[i++],o))return!1}return!0}We(e){for(const n of this.Ge)if(this.ze(n,e))return!0;return!1}ze(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}He(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t){var e,n;if(W(t instanceof ce||t instanceof _e),t instanceof ce){if(t instanceof $b){const s=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(i=>ce.create(t.field,"==",i)))||[];return _e.create(s,"or")}return t}const r=t.filters.map(s=>SI(s));return _e.create(r,t.op)}function SO(t){if(t.getFilters().length===0)return[];const e=rd(SI(t));return W(AI(e)),td(e)||nd(e)?[e]:e.getFilters()}function td(t){return t instanceof ce}function nd(t){return t instanceof _e&&Ob(t)}function AI(t){return td(t)||nd(t)||function(e){if(e instanceof _e&&zh(e)){for(const n of e.getFilters())if(!td(n)&&!nd(n))return!1;return!0}return!1}(t)}function rd(t){if(W(t instanceof ce||t instanceof _e),t instanceof ce)return t;if(t.filters.length===1)return rd(t.filters[0]);const e=t.filters.map(r=>rd(r));let n=_e.create(e,t.op);return n=ru(n),AI(n)?n:(W(n instanceof _e),W(xi(n)),W(n.filters.length>1),n.filters.reduce((r,s)=>Hf(r,s)))}function Hf(t,e){let n;return W(t instanceof ce||t instanceof _e),W(e instanceof ce||e instanceof _e),n=t instanceof ce?e instanceof ce?function(r,s){return _e.create([r,s],"and")}(t,e):ty(t,e):e instanceof ce?ty(e,t):function(r,s){if(W(r.filters.length>0&&s.filters.length>0),xi(r)&&xi(s))return Fb(r,s.getFilters());const i=zh(r)?r:s,o=zh(r)?s:r,a=i.filters.map(c=>Hf(c,o));return _e.create(a,"or")}(t,e),ru(n)}function ty(t,e){if(xi(e))return Fb(e,t.getFilters());{const n=e.filters.map(r=>Hf(t,r));return _e.create(n,"or")}}function ru(t){if(W(t instanceof ce||t instanceof _e),t instanceof ce)return t;const e=t.getFilters();if(e.length===1)return ru(e[0]);if(Pb(t))return t;const n=e.map(s=>ru(s)),r=[];return n.forEach(s=>{s instanceof ce?r.push(s):s instanceof _e&&(s.op===t.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:_e.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(){this.Je=new Gf}addToCollectionParentIndex(e,n){return this.Je.add(n),v.resolve()}getCollectionParents(e,n){return v.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return v.resolve()}deleteFieldIndex(e,n){return v.resolve()}getDocumentsMatchingTarget(e,n){return v.resolve(null)}getIndexType(e,n){return v.resolve(0)}getFieldIndexes(e,n){return v.resolve([])}getNextCollectionGroupToUpdate(e){return v.resolve(null)}getMinOffset(e,n){return v.resolve(Qt.min())}getMinOffsetFromCollectionGroup(e,n){return v.resolve(Qt.min())}updateCollectionGroup(e,n,r){return v.resolve()}updateIndexEntries(e,n){return v.resolve()}}class Gf{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ie(he.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ie(he.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=new Uint8Array(0);class CO{constructor(e,n){this.user=e,this.databaseId=n,this.Ye=new Gf,this.Xe=new Hr(r=>ks(r),(r,s)=>Va(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Ye.has(n)){const r=n.lastSegment(),s=n.popLast();e.addOnCommittedListener(()=>{this.Ye.add(n)});const i={collectionId:r,parent:xt(s)};return ny(e).put(i)}return v.resolve()}getCollectionParents(e,n){const r=[],s=IDBKeyRange.bound([n,""],[Ib(n),""],!1,!0);return ny(e).W(s).next(i=>{for(const o of i){if(o.collectionId!==n)break;r.push(Nn(o.parent))}return r})}addFieldIndex(e,n){const r=lc(e),s=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete s.indexId;const i=r.add(s);if(n.indexState){const o=vo(e);return i.next(a=>{o.put(Yg(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return i.next()}deleteFieldIndex(e,n){const r=lc(e),s=vo(e),i=yo(e);return r.delete(n.indexId).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=yo(e);let s=!0;const i=new Map;return v.forEach(this.Ze(n),o=>this.tn(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=se();const a=[];return v.forEach(i,(c,u)=>{var l;R("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(b=>`${b.fieldPath}:${b.kind}`).join(",")}`} to execute ${ks(n)}`);const h=function(b,D){const G=Hh(D);if(G===void 0)return null;for(const Q of eu(b,G.fieldPath))switch(Q.op){case"array-contains-any":return Q.value.arrayValue.values||[];case"array-contains":return[Q.value]}return null}(u,c),d=function(b,D){const G=new Map;for(const Q of es(D))for(const ue of eu(b,Q.fieldPath))switch(ue.op){case"==":case"in":G.set(Q.fieldPath.canonicalString(),ue.value);break;case"not-in":case"!=":return G.set(Q.fieldPath.canonicalString(),ue.value),Array.from(G.values())}return null}(u,c),p=function(b,D){const G=[];let Q=!0;for(const ue of es(D)){const Z=ue.kind===0?Mg(b,ue.fieldPath,b.startAt):Lg(b,ue.fieldPath,b.startAt);G.push(Z.value),Q&&(Q=Z.inclusive)}return new Pr(G,Q)}(u,c),g=function(b,D){const G=[];let Q=!0;for(const ue of es(D)){const Z=ue.kind===0?Lg(b,ue.fieldPath,b.endAt):Mg(b,ue.fieldPath,b.endAt);G.push(Z.value),Q&&(Q=Z.inclusive)}return new Pr(G,Q)}(u,c),y=this.en(c,u,p),I=this.en(c,u,g),S=this.nn(c,u,d),x=this.sn(c.indexId,h,y,p.inclusive,I,g.inclusive,S);return v.forEach(x,b=>r.J(b,n.limit).next(D=>{D.forEach(G=>{const Q=L.fromSegments(G.documentKey);o.has(Q)||(o=o.add(Q),a.push(Q))})}))}).next(()=>a)}return v.resolve(null)})}Ze(e){let n=this.Xe.get(e);return n||(e.filters.length===0?n=[e]:n=SO(_e.create(e.filters,"and")).map(r=>Qh(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Xe.set(e,n),n)}sn(e,n,r,s,i,o,a){const c=(n!=null?n.length:1)*Math.max(r.length,i.length),u=c/(n!=null?n.length:1),l=[];for(let h=0;h<c;++h){const d=n?this.rn(n[h/u]):uc,p=this.on(e,d,r[h%u],s),g=this.un(e,d,i[h%u],o),y=a.map(I=>this.on(e,d,I,!0));l.push(...this.createRange(p,g,y))}return l}on(e,n,r,s){const i=new as(e,L.empty(),n,r);return s?i:i.Ue()}un(e,n,r,s){const i=new as(e,L.empty(),n,r);return s?i.Ue():i}tn(e,n){const r=new TO(n),s=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.je(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const s=this.Ze(n);return v.forEach(s,i=>this.tn(e,i).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new Ie(He.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(i)&&(r=1):r=0})).next(()=>function(i){return i.limit!==null}(n)&&s.length>1&&r===2?1:r)}cn(e,n){const r=new go;for(const s of es(e)){const i=n.data.field(s.fieldPath);if(i==null)return null;const o=r.qe(s.kind);os.Ie.ue(i,o)}return r.Fe()}rn(e){const n=new go;return os.Ie.ue(e,n.qe(0)),n.Fe()}an(e,n){const r=new go;return os.Ie.ue(Cs(this.databaseId,n),r.qe(function(s){const i=es(s);return i.length===0?0:i[i.length-1].kind}(e))),r.Fe()}nn(e,n,r){if(r===null)return[];let s=[];s.push(new go);let i=0;for(const o of es(e)){const a=r[i++];for(const c of s)if(this.hn(n,o.fieldPath)&&ya(a))s=this.ln(s,o,a);else{const u=c.qe(o.kind);os.Ie.ue(a,u)}}return this.fn(s)}en(e,n,r){return this.nn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Fe();return n}ln(e,n,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const c=new go;c.seed(a.Fe()),os.Ie.ue(o,c.qe(n.kind)),i.push(c)}return i}hn(e,n){return!!e.filters.find(r=>r instanceof ce&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=lc(e),s=vo(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(i=>{const o=[];return v.forEach(i,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new Xc(l.sequenceNumber,new Qt(Ds(l.readTime),new L(Nn(l.documentKey)),l.largestBatchId)):Xc.empty(),d=u.fields.map(([p,g])=>new lD(He.fromServerFormat(p),g));return new Eb(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:re(r.collectionGroup,s.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const s=lc(e),i=vo(e);return this.dn(e).next(o=>s.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>v.forEach(a,c=>i.put(Yg(c.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return v.forEach(n,(s,i)=>{const o=r.get(s.collectionGroup);return(o?v.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),v.forEach(a,c=>this._n(e,s,c).next(u=>{const l=this.wn(i,c);return u.isEqual(l)?v.resolve():this.mn(e,i,c,u,l)}))))})}gn(e,n,r,s){return yo(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.an(r,n.key),documentKey:n.key.path.toArray()})}yn(e,n,r,s){return yo(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.an(r,n.key),n.key.path.toArray()])}_n(e,n,r){const s=yo(e);let i=new Ie(dr);return s.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.an(r,n)])},(o,a)=>{i=i.add(new as(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>i)}wn(e,n){let r=new Ie(dr);const s=this.cn(n,e);if(s==null)return r;const i=Hh(n);if(i!=null){const o=e.data.field(i.fieldPath);if(ya(o))for(const a of o.arrayValue.values||[])r=r.add(new as(n.indexId,e.key,this.rn(a),s))}else r=r.add(new as(n.indexId,e.key,uc,s));return r}mn(e,n,r,s,i){R("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),p=c.getIterator();let g=Js(d),y=Js(p);for(;g||y;){let I=!1,S=!1;if(g&&y){const x=u(g,y);x<0?S=!0:x>0&&(I=!0)}else g!=null?S=!0:I=!0;I?(l(y),y=Js(p)):S?(h(g),g=Js(d)):(g=Js(d),y=Js(p))}}(s,i,dr,a=>{o.push(this.gn(e,n,r,a))},a=>{o.push(this.yn(e,n,r,a))}),v.waitFor(o)}dn(e){let n=1;return vo(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),n=s.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>dr(o,a)).filter((o,a,c)=>!a||dr(o,c[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=dr(o,e),c=dr(o,n);if(a===0)s[0]=e.Ue();else if(a>0&&c<0)s.push(o),s.push(o.Ue());else if(c>0)break}s.push(n);const i=[];for(let o=0;o<s.length;o+=2){if(this.pn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,uc,[]],c=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,uc,[]];i.push(IDBKeyRange.bound(a,c))}return i}pn(e,n){return dr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(ry)}getMinOffset(e,n){return v.mapArray(this.Ze(n),r=>this.tn(e,r).next(s=>s||B())).next(ry)}}function ny(t){return at(t,"collectionParents")}function yo(t){return at(t,"indexEntries")}function lc(t){return at(t,"indexConfiguration")}function vo(t){return at(t,"indexState")}function ry(t){W(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const s=t[r].indexState.offset;Of(s,e)<0&&(e=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new Qt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ot{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ot(e,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(t,e,n){const r=t.store("mutations"),s=t.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));i.push(c.next(()=>{W(a===1)}));const u=[];for(const l of n.mutations){const h=_I(e,l.key.path,n.batchId);i.push(s.delete(h)),u.push(l.key)}return v.waitFor(i).next(()=>u)}function su(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw B();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot.DEFAULT_COLLECTION_PERCENTILE=10,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ot.DEFAULT=new Ot(41943040,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ot.DISABLED=new Ot(-1,0,0);class ll{constructor(e,n,r,s){this.userId=e,this.yt=n,this.indexManager=r,this.referenceDelegate=s,this.In={}}static re(e,n,r,s){W(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new ll(i,n,r,s)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return fr(e).Z({index:"userMutationsIndex",range:r},(s,i,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,s){const i=si(e),o=fr(e);return o.add({}).next(a=>{W(typeof a=="number");const c=new Bf(a,n,r,s),u=function(d,p,g){const y=g.baseMutations.map(S=>wa(d.ie,S)),I=g.mutations.map(S=>wa(d.ie,S));return{userId:p,batchId:g.batchId,localWriteTimeMs:g.localWriteTime.toMillis(),baseMutations:y,mutations:I}}(this.yt,this.userId,c),l=[];let h=new Ie((d,p)=>re(d.canonicalString(),p.canonicalString()));for(const d of s){const p=_I(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(i.put(p,tO))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=c.keys()}),v.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return fr(e).get(n).next(r=>r?(W(r.userId===this.userId),is(this.yt,r)):null)}Tn(e,n){return this.In[n]?v.resolve(this.In[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const s=r.keys();return this.In[n]=s,s}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return fr(e).Z({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&(W(a.batchId>=r),i=is(this.yt,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return fr(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return fr(e).W("userMutationsIndex",n).next(r=>r.map(s=>is(this.yt,s)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Cc(this.userId,n.path),s=IDBKeyRange.lowerBound(r),i=[];return si(e).Z({range:s},(o,a,c)=>{const[u,l,h]=o,d=Nn(l);if(u===this.userId&&n.path.isEqual(d))return fr(e).get(h).next(p=>{if(!p)throw B();W(p.userId===this.userId),i.push(is(this.yt,p))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ie(re);const s=[];return n.forEach(i=>{const o=Cc(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=si(e).Z({range:a},(u,l,h)=>{const[d,p,g]=u,y=Nn(p);d===this.userId&&i.path.isEqual(y)?r=r.add(g):h.done()});s.push(c)}),v.waitFor(s).next(()=>this.En(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1,i=Cc(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new Ie(re);return si(e).Z({range:o},(c,u,l)=>{const[h,d,p]=c,g=Nn(d);h===this.userId&&r.isPrefixOf(g)?g.length===s&&(a=a.add(p)):l.done()}).next(()=>this.En(e,a))}En(e,n){const r=[],s=[];return n.forEach(i=>{s.push(fr(e).get(i).next(o=>{if(o===null)throw B();W(o.userId===this.userId),r.push(is(this.yt,o))}))}),v.waitFor(s).next(()=>r)}removeMutationBatch(e,n){return CI(e.se,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.An(n.batchId)}),v.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return v.resolve();const r=IDBKeyRange.lowerBound([this.userId]),s=[];return si(e).Z({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=Nn(i[1]);s.push(c)}else a.done()}).next(()=>{W(s.length===0)})})}containsKey(e,n){return kI(e,this.userId,n)}Rn(e){return RI(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function kI(t,e,n){const r=Cc(e,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return si(t).Z({range:i,X:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===s&&(o=!0),u.done()}).next(()=>o)}function fr(t){return at(t,"mutations")}function si(t){return at(t,"documentMutations")}function RI(t){return at(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Os(0)}static vn(){return new Os(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e,n){this.referenceDelegate=e,this.yt=n}allocateTargetId(e){return this.Vn(e).next(n=>{const r=new Os(n.highestTargetId);return n.highestTargetId=r.next(),this.Sn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(n=>z.fromTimestamp(new Oe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Vn(e).next(s=>(s.highestListenSequenceNumber=n,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),n>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=n),this.Sn(e,s)))}addTargetData(e,n){return this.Dn(e,n).next(()=>this.Vn(e).next(r=>(r.targetCount+=1,this.Cn(n,r),this.Sn(e,r))))}updateTargetData(e,n){return this.Dn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Xs(e).delete(n.targetId)).next(()=>this.Vn(e)).next(r=>(W(r.targetCount>0),r.targetCount-=1,this.Sn(e,r)))}removeTargets(e,n,r){let s=0;const i=[];return Xs(e).Z((o,a)=>{const c=xo(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>v.waitFor(i)).next(()=>s)}forEachTarget(e,n){return Xs(e).Z((r,s)=>{const i=xo(s);n(i)})}Vn(e){return iy(e).get("targetGlobalKey").next(n=>(W(n!==null),n))}Sn(e,n){return iy(e).put("targetGlobalKey",n)}Dn(e,n){return Xs(e).put(TI(this.yt,n))}Cn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Vn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=ks(n),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Xs(e).Z({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const u=xo(a);Va(n,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,n,r){const s=[],i=gr(e);return n.forEach(o=>{const a=xt(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),v.waitFor(s)}removeMatchingKeys(e,n,r){const s=gr(e);return v.forEach(n,i=>{const o=xt(i.path);return v.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,n){const r=gr(e),s=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),s=gr(e);let i=se();return s.Z({range:r,X:!0},(o,a,c)=>{const u=Nn(o[1]),l=new L(u);i=i.add(l)}).next(()=>i)}containsKey(e,n){const r=xt(n.path),s=IDBKeyRange.bound([r],[Ib(r)],!1,!0);let i=0;return gr(e).Z({index:"documentTargetsIndex",X:!0,range:s},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}ne(e,n){return Xs(e).get(n).next(r=>r?xo(r):null)}}function Xs(t){return at(t,"targets")}function iy(t){return at(t,"targetGlobal")}function gr(t){return at(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy([t,e],[n,r]){const s=re(t,n);return s===0?re(e,r):s}class RO{constructor(e){this.xn=e,this.buffer=new Ie(oy),this.Nn=0}kn(){return++this.Nn}On(e){const n=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();oy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class xO{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){R("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Kr(n)?R("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await jr(n)}await this.Fn(3e5)})}}class NO{constructor(e,n){this.$n=e,this.params=n}calculateTargetCount(e,n){return this.$n.Bn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return v.resolve(Mt.at);const r=new RO(n);return this.$n.forEachTarget(e,s=>r.On(s.sequenceNumber)).next(()=>this.$n.Ln(e,s=>r.On(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.$n.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.$n.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(R("LruGarbageCollector","Garbage collection skipped; disabled"),v.resolve(sy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(R("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sy):this.qn(e,n))}getCacheSize(e){return this.$n.getCacheSize(e)}qn(e,n){let r,s,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(R("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Kh()<=pe.DEBUG&&R("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),v.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e,n){this.db=e,this.garbageCollector=function(r,s){return new NO(r,s)}(this,n)}Bn(e){const n=this.Un(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Un(e){let n=0;return this.Ln(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Ln(e,n){return this.Kn(e,(r,s)=>n(s))}addReference(e,n,r){return hc(e,r)}removeReference(e,n,r){return hc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return hc(e,n)}Gn(e,n){return function(r,s){let i=!1;return RI(r).tt(o=>kI(r,o,s).next(a=>(a&&(i=!0),v.resolve(!a)))).next(()=>i)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Kn(e,(o,a)=>{if(a<=n){const c=this.Gn(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,z.min()),gr(e).delete([0,xt(o.path)])))});s.push(c)}}).next(()=>v.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return hc(e,n)}Kn(e,n){const r=gr(e);let s,i=Mt.at;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==Mt.at&&n(new L(Nn(s)),i),i=u,s=c):i=Mt.at}).next(()=>{i!==Mt.at&&n(new L(Nn(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function hc(t,e){return gr(t).put(function(n,r){return{targetId:0,path:xt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(){this.changes=new Hr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?v.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e){this.yt=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Jr(e).put(r)}removeEntry(e,n,r){return Jr(e).delete(function(s,i){const o=s.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],nu(i),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Qn(e,r)))}getEntry(e,n){let r=Re.newInvalidDocument(n);return Jr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(_o(n))},(s,i)=>{r=this.jn(n,i)}).next(()=>r)}Wn(e,n){let r={size:0,document:Re.newInvalidDocument(n)};return Jr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(_o(n))},(s,i)=>{r={document:this.jn(n,i),size:su(i)}}).next(()=>r)}getEntries(e,n){let r=Lt();return this.zn(e,n,(s,i)=>{const o=this.jn(s,i);r=r.insert(s,o)}).next(()=>r)}Hn(e,n){let r=Lt(),s=new $e(L.comparator);return this.zn(e,n,(i,o)=>{const a=this.jn(i,o);r=r.insert(i,a),s=s.insert(i,su(o))}).next(()=>({documents:r,Jn:s}))}zn(e,n,r){if(n.isEmpty())return v.resolve();let s=new Ie(uy);n.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(_o(s.first()),_o(s.last())),o=s.getIterator();let a=o.getNext();return Jr(e).Z({index:"documentKeyIndex",range:i},(c,u,l)=>{const h=L.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&uy(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.j(_o(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,n,r){const s=[n.popLast().toArray(),n.lastSegment(),nu(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],i=[n.popLast().toArray(),n.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Jr(e).W(IDBKeyRange.bound(s,i,!0)).next(o=>{let a=Lt();for(const c of o){const u=this.jn(L.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(u.key,u)}return a})}getAllFromCollectionGroup(e,n,r,s){let i=Lt();const o=cy(n,r),a=cy(n,Qt.max());return Jr(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.jn(L.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(h.key,h),i.size===s&&l.done()}).next(()=>i)}newChangeBuffer(e){return new PO(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return ay(e).get("remoteDocumentGlobalKey").next(n=>(W(!!n),n))}Qn(e,n){return ay(e).put("remoteDocumentGlobalKey",n)}jn(e,n){if(n){const r=vO(this.yt,n);if(!(r.isNoDocument()&&r.version.isEqual(z.min())))return r}return Re.newInvalidDocument(e)}}function NI(t){return new OO(t)}class PO extends xI{constructor(e,n){super(),this.Yn=e,this.trackRemovals=n,this.Xn=new Hr(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const n=[];let r=0,s=new Ie((i,o)=>re(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Xn.get(i);if(n.push(this.Yn.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=zg(this.Yn.yt,o);s=s.add(i.path.popLast());const u=su(c);r+=u-a.size,n.push(this.Yn.addEntry(e,i,c))}else if(r-=a.size,this.trackRemovals){const c=zg(this.Yn.yt,o.convertToNoDocument(z.min()));n.push(this.Yn.addEntry(e,i,c))}}),s.forEach(i=>{n.push(this.Yn.indexManager.addToCollectionParentIndex(e,i))}),n.push(this.Yn.updateMetadata(e,r)),v.waitFor(n)}getFromCache(e,n){return this.Yn.Wn(e,n).next(r=>(this.Xn.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Yn.Hn(e,n).next(({documents:r,Jn:s})=>(s.forEach((i,o)=>{this.Xn.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function ay(t){return at(t,"remoteDocumentGlobal")}function Jr(t){return at(t,"remoteDocumentsV14")}function _o(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function cy(t,e){const n=e.documentKey.path.toArray();return[t,nu(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function uy(t,e){const n=t.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=re(n[i],r[i]),s)return s;return s=re(n.length,r.length),s||(s=re(n[n.length-2],r[r.length-2]),s||re(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Bo(r.mutation,s,Gt.empty(),Oe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const s=xn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ro();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Lt();const o=qo(),a=qo();return n.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof ar)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),Bo(l.mutation,u,l.mutation.getFieldMask(),Oe.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new MO(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=qo();let s=new $e((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||Gt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||se()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=iI();l.forEach(d=>{if(!i.has(d)){const p=Zb(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return v.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return L.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ff(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):v.resolve(xn());let a=-1,c=i;return o.next(u=>v.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?v.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,se())).next(l=>({batchId:a,changes:sI(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let s=Ro();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Ro();return this.indexManager.getCollectionParents(e,s).next(o=>v.forEach(o,a=>{const c=function(u,l){return new or(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,Re.newInvalidDocument(u)))});let o=Ro();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Bo(u.mutation,c,Gt.empty(),Oe.now()),Uf(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return v.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ge(r.createTime)}),v.resolve()}getNamedQuery(e,n){return v.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:Kf(r.bundledQuery),readTime:Ge(r.readTime)}}(n)),v.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(){this.overlays=new $e(L.comparator),this.es=new Map}getOverlay(e,n){return v.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xn();return v.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.oe(e,n,i)}),v.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.es.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(r)),v.resolve()}getOverlaysForCollection(e,n,r){const s=xn(),i=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return v.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new $e((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=xn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=xn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return v.resolve(a)}oe(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.es.get(s.largestBatchId).delete(r.key);this.es.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new jf(n,r));let i=this.es.get(n);i===void 0&&(i=se(),this.es.set(n,i)),this.es.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(){this.ns=new Ie(et.ss),this.rs=new Ie(et.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new et(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new et(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new L(new he([])),r=new et(n,e),s=new et(n,e+1),i=[];return this.rs.forEachInRange([r,s],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new L(new he([])),r=new et(n,e),s=new et(n,e+1);let i=se();return this.rs.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new et(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return L.comparator(e.key,n.key)||re(e._s,n._s)}static os(e,n){return re(e._s,n._s)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ie(et.ss)}checkEmpty(e){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Bf(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.gs=this.gs.add(new et(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(e,n){return v.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ps(r),i=s<0?0:s;return v.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),s=new et(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([r,s],o=>{const a=this.ys(o._s);i.push(a)}),v.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ie(re);return n.forEach(s=>{const i=new et(s,0),o=new et(s,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{r=r.add(a._s)})}),v.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;L.isDocumentKey(i)||(i=i.child(""));const o=new et(new L(i),0);let a=new Ie(re);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c._s)),!0)},o),v.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const s=this.ys(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){W(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return v.forEach(n.mutations,s=>{const i=new et(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new et(n,0),s=this.gs.firstAfterOrEqual(r);return v.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,v.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e){this.Es=e,this.docs=new $e(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return v.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(n))}getEntries(e,n){let r=Lt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Re.newInvalidDocument(s))}),v.resolve(r)}getAllFromCollection(e,n,r){let s=Lt();const i=new L(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Of(Sb(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return v.resolve(s)}getAllFromCollectionGroup(e,n,r,s){B()}As(e,n){return v.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new $O(this)}getSize(e){return v.resolve(this.size)}}class $O extends xI{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Yn.addEntry(e,s)):this.Yn.removeEntry(r)}),v.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e){this.persistence=e,this.Rs=new Hr(n=>ks(n),Va),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Wf,this.targetCount=0,this.vs=Os.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,s)=>n(s)),v.resolve()}getLastRemoteSnapshotVersion(e){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return v.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),v.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Os(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,v.resolve()}updateTargetData(e,n){return this.Dn(n),v.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,v.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),v.waitFor(i).next(()=>s)}getTargetCount(e){return v.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return v.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),v.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),v.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),v.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return v.resolve(r)}containsKey(e,n){return v.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Mt(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new BO(this),this.indexManager=new AO,this.remoteDocumentCache=function(r){return new VO(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new EI(n),this.Ns=new LO(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new FO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new UO(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){R("MemoryPersistence","Starting transaction:",e);const s=new qO(this.Ss.next());return this.referenceDelegate.ks(),r(s).next(i=>this.referenceDelegate.Os(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ms(e,n){return v.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class qO extends Cb{constructor(e){super(),this.currentSequenceNumber=e}}class hl{constructor(e){this.persistence=e,this.Fs=new Wf,this.$s=null}static Bs(e){return new hl(e)}get Ls(){if(this.$s)return this.$s;throw B()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),v.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),v.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),v.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(s=>this.Ls.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Ls.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Ls,r=>{const s=L.fromPath(r);return this.qs(e,s).next(i=>{i||n.removeEntry(s,z.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return v.or([()=>v.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e){this.yt=e}$(e,n,r,s){const i=new sl("createOrUpgrade",n);r<1&&s>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Wg,{unique:!0}),a.createObjectStore("documentMutations")}(e),ly(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=v.resolve();return r<3&&s>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),ly(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:z.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").W().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Wg,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return v.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.Us(i))),r<6&&s>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(i)))),r<7&&s>=7&&(o=o.next(()=>this.Gs(i))),r<8&&s>=8&&(o=o.next(()=>this.Qs(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.js(i))),r<11&&s>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:fO});c.createIndex("collectionPathOverlayIndex",pO,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",mO,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:nO});c.createIndex("documentKeyIndex",rO),c.createIndex("collectionGroupIndex",sO)}(e)).next(()=>this.Ws(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.zs(e,i))),r<15&&s>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:uO}).createIndex("sequenceNumberIndex",lO,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:hO}).createIndex("documentKeyIndex",dO,{unique:!1})}(e))),o}Ks(e){let n=0;return e.store("remoteDocuments").Z((r,s)=>{n+=su(s)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Us(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(s=>v.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>v.forEach(a,c=>{W(c.userId===i.userId);const u=is(this.yt,c);return CI(e,i.userId,u).next(()=>{})}))}))}Gs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.Z((o,a)=>{const c=new he(o),u=function(l){return[0,xt(l)]}(c);i.push(n.get(u).next(l=>l?v.resolve():(h=>n.put({targetId:0,path:xt(h),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>v.waitFor(i))})}Qs(e,n){e.createObjectStore("collectionParents",{keyPath:cO});const r=n.store("collectionParents"),s=new Gf,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:xt(c)})}};return n.store("remoteDocuments").Z({X:!0},(o,a)=>{const c=new he(o);return i(c.popLast())}).next(()=>n.store("documentMutations").Z({X:!0},([o,a,c],u)=>{const l=Nn(a);return i(l.popLast())}))}js(e){const n=e.store("targets");return n.Z((r,s)=>{const i=xo(s),o=TI(this.yt,i);return n.put(o)})}Ws(e,n){const r=n.store("remoteDocuments"),s=[];return r.Z((i,o)=>{const a=n.store("remoteDocumentsV14"),c=(u=o,u.document?new L(he.fromString(u.document.name).popFirst(5)):u.noDocument?L.fromSegments(u.noDocument.path):u.unknownDocument?L.fromSegments(u.unknownDocument.path):B()).path.toArray();var u;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(l))}).next(()=>v.waitFor(s))}zs(e,n){const r=n.store("mutations"),s=NI(this.yt),i=new OI(hl.Bs,this.yt.ie);return r.W().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:se();is(this.yt,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),v.forEach(a,(c,u)=>{const l=new tt(u),h=ul.re(this.yt,l),d=i.getIndexManager(l),p=ll.re(l,this.yt,d,i.referenceDelegate);return new DI(s,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new ed(n,Mt.at),c).next()})})}}function ly(t){t.createObjectStore("targetDocuments",{keyPath:oO}).createIndex("documentTargetsIndex",aO,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",iO,{unique:!0}),t.createObjectStore("targetGlobal")}const nh="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class zf{constructor(e,n,r,s,i,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Hs=i,this.window=o,this.document=a,this.Js=u,this.Ys=l,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!zf.C())throw new C(_.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new DO(this,s),this.ii=n+"main",this.yt=new EI(c),this.ri=new dn(this.ii,this.Xs,new jO(this.yt)),this.Cs=new kO(this.referenceDelegate,this.yt),this.remoteDocumentCache=NI(this.yt),this.Ns=new _O,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,l===!1&&Ke("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(_.FAILED_PRECONDITION,nh);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new Mt(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>dc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(n=>this.isPrimary&&!n?this._i(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Kr(e))return R("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return R("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return wo(e).get("owner").next(n=>v.resolve(this.mi(n)))}gi(e){return dc(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=at(n,"clientMetadata");return r.W().next(s=>{const i=this.Ii(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return v.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const n of e)this.oi.removeItem(this.Ti(n.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?v.resolve(!0):wo(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)){if(this.mi(n)&&this.networkEnabled)return!0;if(!this.mi(n)){if(!n.allowTabSynchronization)throw new C(_.FAILED_PRECONDITION,nh);return!1}}return!(!this.networkEnabled||!this.inForeground)||dc(e).W().next(r=>this.Ii(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&R("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new ed(e,Mt.at);return this._i(n).next(()=>this.gi(n))}),this.ri.close(),this.Pi()}Ii(e,n){return e.filter(r=>this.pi(r.updateTimeMs,n)&&!this.Ei(r.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>dc(e).W().next(n=>this.Ii(n,18e5).map(r=>r.clientId)))}get started(){return this.Ds}getMutationQueue(e,n){return ll.re(e,this.yt,n,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new CO(e,this.yt.ie.databaseId)}getDocumentOverlayCache(e){return ul.re(this.yt,e)}getBundleCache(){return this.Ns}runTransaction(e,n,r){R("IndexedDbPersistence","Starting transaction:",e);const s=n==="readonly"?"readonly":"readwrite",i=(o=this.Xs)===15?yO:o===14?II:o===13?bI:o===12?gO:o===11?wI:void B();var o;let a;return this.ri.runTransaction(e,s,i,c=>(a=new ed(c,this.Ss?this.Ss.next():Mt.at),n==="readwrite-primary"?this.fi(a).next(u=>!!u||this.di(a)).next(u=>{if(!u)throw Ke(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new C(_.FAILED_PRECONDITION,Ab);return r(a)}).next(u=>this.wi(a).next(()=>u)):this.Vi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Vi(e){return wo(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)&&!this.mi(n)&&!(this.Ys||this.allowTabSynchronization&&n.allowTabSynchronization))throw new C(_.FAILED_PRECONDITION,nh)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return wo(e).put("owner",n)}static C(){return dn.C()}_i(e){const n=wo(e);return n.get("owner").next(r=>this.mi(r)?(R("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):v.resolve())}pi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ke(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),IC()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var n;try{const r=((n=this.oi)===null||n===void 0?void 0:n.getItem(this.Ti(e)))!==null;return R("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ke("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){Ke("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function wo(t){return at(t,"owner")}function dc(t){return at(t,"clientMetadata")}function Qf(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=s}static Ci(e,n){let r=se(),s=se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Yf(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.ki(e,n).next(i=>i||this.Oi(e,n,s,r)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Fg(n))return v.resolve(null);let r=Ft(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=tu(n,null,"F"),r=Ft(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,tu(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,r,s){return Fg(n)||s.isEqual(z.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,r,s)?this.Mi(e,n):(Kh()<=pe.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Jh(n)),this.Bi(e,o,n,Tb(s,-1)))})}Fi(e,n){let r=new Ie(Hb(e));return n.forEach((s,i)=>{Uf(e,i)&&(r=r.add(i))}),r}$i(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mi(e,n){return Kh()<=pe.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",Jh(n)),this.Ni.getDocumentsMatchingQuery(e,n,Qt.min())}Bi(e,n,r,s){return this.Ni.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(e,n,r,s){this.persistence=e,this.Li=n,this.yt=s,this.qi=new $e(re),this.Ui=new Hr(i=>ks(i),Va),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DI(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function MI(t,e,n,r){return new KO(t,e,n,r)}async function LI(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=se();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function HO(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=v.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(g=>{const y=c.docVersions.get(p);W(y!==null),g.version.compareTo(y)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=se();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function FI(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function GO(t,e){const n=U(t),r=e.snapshotVersion;let s=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.qi;const a=[];e.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Xe.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,r)),s=s.insert(h,p),function(g,y,I){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,p,l)&&a.push(n.Cs.updateTargetData(i,p))});let c=Lt(),u=se();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(UI(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!r.isEqual(z.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return v.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=s,i))}function UI(t,e,n){let r=se(),s=se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Lt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:s}})}function WO(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Pi(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Cs.getTargetData(r,e).next(i=>i?(s=i,v.resolve(s)):n.Cs.allocateTargetId(r).next(o=>(s=new Tr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.qi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function Mi(t,e,n){const r=U(t),s=r.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Kr(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(s.target)}function iu(t,e,n){const r=U(t);let s=z.min(),i=se();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=U(a),h=l.Ui.get(u);return h!==void 0?v.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(r,o,Ft(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?s:z.min(),n?i:se())).next(a=>(BI(r,Kb(e),a),{documents:a,Hi:i})))}function VI(t,e){const n=U(t),r=U(n.Cs),s=n.qi.get(e);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",i=>r.ne(i,e).next(o=>o?o.target:null))}function $I(t,e){const n=U(t),r=n.Ki.get(e)||z.min();return n.persistence.runTransaction("Get new document changes","readonly",s=>n.Gi.getAllFromCollectionGroup(s,e,Tb(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(BI(n,e,s),s))}function BI(t,e,n){let r=t.Ki.get(e)||z.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ki.set(e,r)}async function zO(t,e,n,r){const s=U(t);let i=se(),o=Lt();for(const u of n){const l=e.Ji(u.metadata.name);u.document&&(i=i.add(l));const h=e.Yi(u);h.setReadTime(e.Xi(u.metadata.readTime)),o=o.insert(l,h)}const a=s.Gi.newChangeBuffer({trackRemovals:!0}),c=await Pi(s,function(u){return Ft(eo(he.fromString(`__bundle__/docs/${u}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",u=>UI(u,a,o).next(l=>(a.apply(u),l)).next(l=>s.Cs.removeMatchingKeysForTargetId(u,c.targetId).next(()=>s.Cs.addMatchingKeys(u,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(u,l.Wi,l.zi)).next(()=>l.Wi)))}async function QO(t,e,n=se()){const r=await Pi(t,Ft(Kf(e.bundledQuery))),s=U(t);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=Ge(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.Ns.saveNamedQuery(i,e);const a=r.withResumeToken(Xe.EMPTY_BYTE_STRING,o);return s.qi=s.qi.insert(a.targetId,a),s.Cs.updateTargetData(i,a).next(()=>s.Cs.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>s.Cs.addMatchingKeys(i,n,r.targetId)).next(()=>s.Ns.saveNamedQuery(i,e))})}function hy(t,e){return`firestore_clients_${t}_${e}`}function dy(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function rh(t,e){return`firestore_targets_${t}_${e}`}class ou{constructor(e,n,r,s){this.user=e,this.batchId=n,this.state=r,this.error=s}static Zi(e,n,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new C(s.error.code,s.error.message))),o?new ou(e,n,s.state,i):(Ke("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class jo{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Zi(e,n){const r=JSON.parse(n);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new C(r.error.code,r.error.message))),i?new jo(e,r.state,s):(Ke("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class au{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Zi(e,n){const r=JSON.parse(n);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=cl();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=Rb(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new au(e,i):(Ke("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Jf{constructor(e,n){this.clientId=e,this.onlineState=n}static Zi(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Jf(n.clientId,n.onlineState):(Ke("SharedClientState",`Failed to parse online state: ${e}`),null)}}class sd{constructor(){this.activeTargetIds=cl()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sh{constructor(e,n,r,s,i){this.window=e,this.Hs=n,this.persistenceKey=r,this.sr=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new $e(re),this.started=!1,this.cr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ar=hy(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new sd),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const r of e){if(r===this.sr)continue;const s=this.getItem(hy(this.persistenceKey,r));if(s){const i=au.Zi(r,s);i&&(this.ur=this.ur.insert(i.clientId,i))}}this.gr();const n=this.storage.getItem(this.wr);if(n){const r=this.yr(n);r&&this.pr(r)}for(const r of this.cr)this.rr(r);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let n=!1;return this.ur.forEach((r,s)=>{s.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,n,r){this.Tr(e,n,r),this.Er(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(rh(this.persistenceKey,e));if(r){const s=jo.Zi(e,r);s&&(n=s.state)}}return this.Ar.er(e),this.gr(),n}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(rh(this.persistenceKey,e))}updateQueryState(e,n,r){this.Rr(e,n,r)}handleUserChange(e,n,r){n.forEach(s=>{this.Er(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return R("SharedClientState","READ",e,n),n}setItem(e,n){R("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){R("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const n=e;if(n.storageArea===this.storage){if(R("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ar)return void Ke("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.lr.test(n.key)){if(n.newValue==null){const r=this.vr(n.key);return this.Vr(r,null)}{const r=this.Sr(n.key,n.newValue);if(r)return this.Vr(r.clientId,r)}}else if(this.dr.test(n.key)){if(n.newValue!==null){const r=this.Dr(n.key,n.newValue);if(r)return this.Cr(r)}}else if(this._r.test(n.key)){if(n.newValue!==null){const r=this.Nr(n.key,n.newValue);if(r)return this.kr(r)}}else if(n.key===this.wr){if(n.newValue!==null){const r=this.yr(n.newValue);if(r)return this.pr(r)}}else if(n.key===this.hr){const r=function(s){let i=Mt.at;if(s!=null)try{const o=JSON.parse(s);W(typeof o=="number"),i=o}catch(o){Ke("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(n.newValue);r!==Mt.at&&this.sequenceNumberHandler(r)}else if(n.key===this.mr){const r=this.Or(n.newValue);await Promise.all(r.map(s=>this.syncEngine.Mr(s)))}}}else this.cr.push(n)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,n,r){const s=new ou(this.currentUser,e,n,r),i=dy(this.persistenceKey,this.currentUser,e);this.setItem(i,s.tr())}Er(e){const n=dy(this.persistenceKey,this.currentUser,e);this.removeItem(n)}br(e){const n={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(n))}Rr(e,n,r){const s=rh(this.persistenceKey,e),i=new jo(e,n,r);this.setItem(s,i.tr())}Pr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.mr,n)}vr(e){const n=this.lr.exec(e);return n?n[1]:null}Sr(e,n){const r=this.vr(e);return au.Zi(r,n)}Dr(e,n){const r=this.dr.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return ou.Zi(new tt(i),s,n)}Nr(e,n){const r=this._r.exec(e),s=Number(r[1]);return jo.Zi(s,n)}yr(e){return Jf.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);R("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,n){const r=n?this.ur.insert(e,n):this.ur.remove(e),s=this.Ir(this.ur),i=this.Ir(r),o=[],a=[];return i.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.Br(o,a).then(()=>{this.ur=r})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let n=cl();return e.forEach((r,s)=>{n=n.unionWith(s.activeTargetIds)}),n}}class qI{constructor(){this.Lr=new sd,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new sd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,s,i){const o=this.ho(e,n);R("RestConnection","Sending: ",o,r);const a={};return this.lo(a,s,i),this.fo(e,o,a,r).then(c=>(R("RestConnection","Received: ",c),c),c=>{throw Ci("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,n,r,s,i,o){return this.ao(e,n,r,s,i)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Zi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ho(e,n){const r=JO[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,s){return new Promise((i,o)=>{const a=new XN;a.setWithCredentials(!0),a.listenOnce(QN.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case eh.NO_ERROR:const u=a.getResponseJson();R("Connection","XHR received:",JSON.stringify(u)),i(u);break;case eh.TIMEOUT:R("Connection",'RPC "'+e+'" timed out'),o(new C(_.DEADLINE_EXCEEDED,"Request time out"));break;case eh.HTTP_ERROR:const l=a.getStatus();if(R("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(y)>=0?y:_.UNKNOWN}(d.status);o(new C(p,d.message))}else o(new C(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new C(_.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{R("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}wo(e,n,r){const s=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=WN(),o=zN(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new JN({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const c=s.join("");R("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new XO({Hr:g=>{h?R("Connection","Not sending because WebChannel is closed:",g):(l||(R("Connection","Opening WebChannel transport."),u.open(),l=!0),R("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),p=(g,y,I)=>{g.listen(y,S=>{try{I(S)}catch(x){setTimeout(()=>{throw x},0)}})};return p(u,ac.EventType.OPEN,()=>{h||R("Connection","WebChannel transport opened.")}),p(u,ac.EventType.CLOSE,()=>{h||(h=!0,R("Connection","WebChannel transport closed"),d.io())}),p(u,ac.EventType.ERROR,g=>{h||(h=!0,Ci("Connection","WebChannel transport errored:",g),d.io(new C(_.UNAVAILABLE,"The operation could not be completed")))}),p(u,ac.EventType.MESSAGE,g=>{var y;if(!h){const I=g.data[0];W(!!I);const S=I,x=S.error||((y=S[0])===null||y===void 0?void 0:y.error);if(x){R("Connection","WebChannel received error:",x);const b=x.status;let D=function(Q){const ue=Qe[Q];if(ue!==void 0)return nI(ue)}(b),G=x.message;D===void 0&&(D=_.INTERNAL,G="Unknown error status: "+b+" with message "+x.message),h=!0,d.io(new C(D,G)),u.close()}else R("Connection","WebChannel received:",I),d.ro(I)}}),p(o,YN.STAT_EVENT,g=>{g.stat===Eg.PROXY?R("Connection","Detected buffering proxy"):g.stat===Eg.NOPROXY&&R("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(){return typeof window<"u"?window:null}function kc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(t){return new KD(t,!0)}class Xf{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-r);s>0&&R("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,n,r,s,i,o,a,c){this.Hs=e,this.vo=r,this.Vo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Xf(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Ke(n.toString()),Ke("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.So===n&&this.Go(r,s)},r=>{e(()=>{const s=new C(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(s)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(s=>{r(()=>this.Qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eP extends KI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=WD(this.yt,e),r=function(s){if(!("targetChange"in s))return z.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?z.min():i.readTime?Ge(i.readTime):z.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=_a(this.yt),n.addTarget=function(s,i){let o;const a=i.target;return o=Zc(a)?{documents:fI(s,a)}:{query:pI(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=cI(s,i.resumeToken):i.snapshotVersion.compareTo(z.min())>0&&(o.readTime=Oi(s,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=QD(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=_a(this.yt),n.removeTarget=e,this.Bo(n)}}class tP extends KI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(W(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=zD(e.writeResults,e.commitTime),r=Ge(e.commitTime);return this.listener.Zo(r,n)}return W(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=_a(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>wa(this.yt,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=s,this.nu=!1}su(){if(this.nu)throw new C(_.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.ao(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(_.UNKNOWN,s.toString())})}_o(e,n,r,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(_.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class rP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Ke(n),this.ou=!1):R("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{Gr(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=U(a);c._u.add(4),await ro(c),c.gu.set("Unknown"),c._u.delete(4),await Ha(c)}(this))})}),this.gu=new rP(r,s)}}async function Ha(t){if(Gr(t))for(const e of t.wu)await e(!0)}async function ro(t){for(const e of t.wu)await e(!1)}function dl(t,e){const n=U(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),tp(n)?ep(n):io(n).ko()&&Zf(n,e))}function ba(t,e){const n=U(t),r=io(n);n.du.delete(e),r.ko()&&HI(n,e),n.du.size===0&&(r.ko()?r.Fo():Gr(n)&&n.gu.set("Unknown"))}function Zf(t,e){t.yu.Ot(e.targetId),io(t).zo(e)}function HI(t,e){t.yu.Ot(e),io(t).Ho(e)}function ep(t){t.yu=new $D({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),io(t).start(),t.gu.uu()}function tp(t){return Gr(t)&&!io(t).No()&&t.du.size>0}function Gr(t){return U(t)._u.size===0}function GI(t){t.yu=void 0}async function iP(t){t.du.forEach((e,n)=>{Zf(t,e)})}async function oP(t,e){GI(t),tp(t)?(t.gu.hu(e),ep(t)):t.gu.set("Unknown")}async function aP(t,e,n){if(t.gu.set("Online"),e instanceof aI&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await cu(t,r)}else if(e instanceof Ac?t.yu.Kt(e):e instanceof oI?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(z.min()))try{const r=await FI(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.du.get(c);u&&s.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.du.get(a);if(!c)return;s.du.set(a,c.withResumeToken(Xe.EMPTY_BYTE_STRING,c.snapshotVersion)),HI(s,a);const u=new Tr(c.target,a,1,c.sequenceNumber);Zf(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await cu(t,r)}}async function cu(t,e,n){if(!Kr(e))throw e;t._u.add(1),await ro(t),t.gu.set("Offline"),n||(n=()=>FI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Ha(t)})}function WI(t,e){return e().catch(n=>cu(t,n,e))}async function so(t){const e=U(t),n=Mr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;cP(e);)try{const s=await WO(e.localStore,r);if(s===null){e.fu.length===0&&n.Fo();break}r=s.batchId,uP(e,s)}catch(s){await cu(e,s)}zI(e)&&QI(e)}function cP(t){return Gr(t)&&t.fu.length<10}function uP(t,e){t.fu.push(e);const n=Mr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function zI(t){return Gr(t)&&!Mr(t).No()&&t.fu.length>0}function QI(t){Mr(t).start()}async function lP(t){Mr(t).eu()}async function hP(t){const e=Mr(t);for(const n of t.fu)e.Xo(n.mutations)}async function dP(t,e,n){const r=t.fu.shift(),s=qf.from(r,e,n);await WI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await so(t)}async function fP(t,e){e&&Mr(t).Yo&&await async function(n,r){if(s=r.code,tI(s)&&s!==_.ABORTED){const i=n.fu.shift();Mr(n).Mo(),await WI(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await so(n)}var s}(t,e),zI(t)&&QI(t)}async function py(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=Gr(n);n._u.add(3),await ro(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Ha(n)}async function id(t,e){const n=U(t);e?(n._u.delete(2),await Ha(n)):e||(n._u.add(2),await ro(n),n.gu.set("Unknown"))}function io(t){return t.pu||(t.pu=function(e,n,r){const s=U(e);return s.su(),new eP(n,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,r)}(t.datastore,t.asyncQueue,{Yr:iP.bind(null,t),Zr:oP.bind(null,t),Wo:aP.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),tp(t)?ep(t):t.gu.set("Unknown")):(await t.pu.stop(),GI(t))})),t.pu}function Mr(t){return t.Iu||(t.Iu=function(e,n,r){const s=U(e);return s.su(),new tP(n,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,r)}(t.datastore,t.asyncQueue,{Yr:lP.bind(null,t),Zr:fP.bind(null,t),tu:hP.bind(null,t),Zo:dP.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await so(t)):(await t.Iu.stop(),t.fu.length>0&&(R("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new np(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oo(t,e){if(Ke("AsyncQueue",`${e}: ${t}`),Kr(t))return new C(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=Ro(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new gi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new gi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(){this.Tu=new $e(L.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):B():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Li{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Li(e,n,gi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$a(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(){this.Au=void 0,this.listeners=[]}}class mP{constructor(){this.queries=new Hr(e=>jb(e),$a),this.onlineState="Unknown",this.Ru=new Set}}async function rp(t,e){const n=U(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new pP),s)try{i.Au=await n.onListen(r)}catch(o){const a=oo(o,`Initialization of query '${Jh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&ip(n)}async function sp(t,e){const n=U(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function gP(t,e){const n=U(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(s)&&(r=!0);o.Au=s}}r&&ip(n)}function yP(t,e,n){const r=U(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function ip(t){t.Ru.forEach(e=>{e.next()})}class op{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Li(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Li.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,n){this.ku=e,this.byteLength=n}Ou(){return"metadata"in this.ku}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e){this.yt=e}Ji(e){return Mn(this.yt,e)}Yi(e){return e.metadata.exists?dI(this.yt,e.document,!1):Re.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return Ge(e)}}class _P{constructor(e,n,r){this.Mu=e,this.localStore=n,this.yt=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=YI(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++n;const r=he.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}$u(e){const n=new Map,r=new gy(this.yt);for(const s of e)if(s.metadata.queries){const i=r.Ji(s.metadata.name);for(const o of s.metadata.queries){const a=(n.get(o)||se()).add(i);n.set(o,a)}}return n}async complete(){const e=await zO(this.localStore,new gy(this.yt),this.documents,this.Mu.id),n=this.$u(this.documents);for(const r of this.queries)await QO(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function YI(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.key=e}}class XI{constructor(e){this.key=e}}class ZI{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=se(),this.mutatedKeys=se(),this.Gu=Hb(e),this.Qu=new gi(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new my,s=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),p=Uf(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let I=!1;d&&p?d.data.isEqual(p.data)?g!==y&&(r.track({type:3,doc:p}),I=!0):this.Hu(d,p)||(r.track({type:2,doc:p}),I=!0,(c&&this.Gu(p,c)>0||u&&this.Gu(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),I=!0):d&&!p&&(r.track({type:1,doc:d}),I=!0,(c||u)&&(a=!0)),I&&(p?(o=o.add(p),i=y?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return p(h)-p(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new Li(this.query,e.Qu,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new my,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=se(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new XI(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new JI(r))}),n}tc(e){this.qu=e.Hi,this.Ku=se();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Li.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class wP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bP{constructor(e){this.key=e,this.nc=!1}}class IP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Hr(a=>jb(a),$a),this.rc=new Map,this.oc=new Set,this.uc=new $e(L.comparator),this.cc=new Map,this.ac=new Wf,this.hc={},this.lc=new Map,this.fc=Os.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function EP(t,e){const n=hp(t);let r,s;const i=n.ic.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{const o=await Pi(n.localStore,Ft(e));n.isPrimaryClient&&dl(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await ap(n,e,r,a==="current",o.resumeToken)}return s}async function ap(t,e,n,r,s){t._c=(h,d,p)=>async function(g,y,I,S){let x=y.view.Wu(I);x.$i&&(x=await iu(g.localStore,y.query,!1).then(({documents:G})=>y.view.Wu(G,x)));const b=S&&S.targetChanges.get(y.targetId),D=y.view.applyChanges(x,g.isPrimaryClient,b);return od(g,y.targetId,D.Xu),D.snapshot}(t,h,d,p);const i=await iu(t.localStore,e,!0),o=new ZI(e,i.Hi),a=o.Wu(i.documents),c=ja.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);od(t,n,u.Xu);const l=new wP(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function TP(t,e){const n=U(t),r=n.ic.get(e),s=n.rc.get(r.targetId);if(s.length>1)return n.rc.set(r.targetId,s.filter(i=>!$a(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Mi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ba(n.remoteStore,r.targetId),Fi(n,r.targetId)}).catch(jr)):(Fi(n,r.targetId),await Mi(n.localStore,r.targetId,!0))}async function SP(t,e,n){const r=dp(t);try{const s=await function(i,o){const a=U(i),c=Oe.now(),u=o.reduce((d,p)=>d.add(p.key),se());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Lt(),g=se();return a.Gi.getEntries(d,u).next(y=>{p=y,p.forEach((I,S)=>{S.isValidDocument()||(g=g.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(y=>{l=y;const I=[];for(const S of o){const x=PD(S,l.get(S.key).overlayedDocument);x!=null&&I.push(new ar(S.key,x,Bb(x.value.mapValue),De.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,I,o)}).next(y=>{h=y;const I=y.applyToLocalDocumentSet(l,g);return a.documentOverlayCache.saveOverlays(d,y.batchId,I)})}).then(()=>({batchId:h.batchId,changes:sI(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new $e(re)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(r,s.batchId,n),await cr(r,s.changes),await so(r.remoteStore)}catch(s){const i=oo(s,"Failed to persist write");n.reject(i)}}async function eE(t,e){const n=U(t);try{const r=await GO(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.cc.get(i);o&&(W(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.nc=!0:s.modifiedDocuments.size>0?W(o.nc):s.removedDocuments.size>0&&(W(o.nc),o.nc=!1))}),await cr(n,r,e)}catch(r){await jr(r)}}function yy(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=U(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&ip(a)}(r.eventManager,e),s.length&&r.sc.Wo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function AP(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.cc.get(e),i=s&&s.key;if(i){let o=new $e(L.comparator);o=o.insert(i,Re.newNoDocument(i,z.min()));const a=se().add(i),c=new qa(z.min(),new Map,new Ie(re),o,a);await eE(r,c),r.uc=r.uc.remove(i),r.cc.delete(e),lp(r)}else await Mi(r.localStore,e,!1).then(()=>Fi(r,e,n)).catch(jr)}async function CP(t,e){const n=U(t),r=e.batch.batchId;try{const s=await HO(n.localStore,e);up(n,r,null),cp(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await cr(n,s)}catch(s){await jr(s)}}async function kP(t,e,n){const r=U(t);try{const s=await function(i,o){const a=U(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(W(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);up(r,e,n),cp(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await cr(r,s)}catch(s){await jr(s)}}async function RP(t,e){const n=U(t);Gr(n.remoteStore)||R("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(i){const o=U(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const s=n.lc.get(r)||[];s.push(e),n.lc.set(r,s)}catch(r){const s=oo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function cp(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function up(t,e,n){const r=U(t);let s=r.hc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.hc[r.currentUser.toKey()]=s}}function Fi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||tE(t,r)})}function tE(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(ba(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),lp(t))}function od(t,e,n){for(const r of n)r instanceof JI?(t.ac.addReference(r.key,e),xP(t,r)):r instanceof XI?(R("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||tE(t,r.key)):B()}function xP(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(R("SyncEngine","New document in limbo: "+n),t.oc.add(r),lp(t))}function lp(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new L(he.fromString(e)),r=t.fc.next();t.cc.set(r,new bP(n)),t.uc=t.uc.insert(n,r),dl(t.remoteStore,new Tr(Ft(eo(n.path)),r,2,Mt.at))}}async function cr(t,e,n){const r=U(t),s=[],i=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,c)=>{o.push(r._c(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=Yf.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.sc.Wo(s),await async function(a,c){const u=U(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>v.forEach(c,h=>v.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>v.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Kr(l))throw l;R("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qi.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);u.qi=u.qi.insert(h,g)}}}(r.localStore,i))}async function NP(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await LI(n.localStore,e);n.currentUser=e,function(s,i){s.lc.forEach(o=>{o.forEach(a=>{a.reject(new C(_.CANCELLED,i))})}),s.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await cr(n,r.ji)}}function DP(t,e){const n=U(t),r=n.cc.get(e);if(r&&r.nc)return se().add(r.key);{let s=se();const i=n.rc.get(e);if(!i)return s;for(const o of i){const a=n.ic.get(o);s=s.unionWith(a.view.ju)}return s}}async function OP(t,e){const n=U(t),r=await iu(n.localStore,e.query,!0),s=e.view.tc(r);return n.isPrimaryClient&&od(n,e.targetId,s.Xu),s}async function PP(t,e){const n=U(t);return $I(n.localStore,e).then(r=>cr(n,r))}async function MP(t,e,n,r){const s=U(t),i=await function(o,a){const c=U(o),u=U(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Tn(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):v.resolve(null)))}(s.localStore,e);i!==null?(n==="pending"?await so(s.remoteStore):n==="acknowledged"||n==="rejected"?(up(s,e,r||null),cp(s,e),function(o,a){U(U(o).mutationQueue).An(a)}(s.localStore,e)):B(),await cr(s,i)):R("SyncEngine","Cannot apply mutation batch with id: "+e)}async function LP(t,e){const n=U(t);if(hp(n),dp(n),e===!0&&n.dc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),s=await vy(n,r.toArray());n.dc=!0,await id(n.remoteStore,!0);for(const i of s)dl(n.remoteStore,i)}else if(e===!1&&n.dc!==!1){const r=[];let s=Promise.resolve();n.rc.forEach((i,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(Fi(n,o),Mi(n.localStore,o,!0))),ba(n.remoteStore,o)}),await s,await vy(n,r),function(i){const o=U(i);o.cc.forEach((a,c)=>{ba(o.remoteStore,c)}),o.ac.fs(),o.cc=new Map,o.uc=new $e(L.comparator)}(n),n.dc=!1,await id(n.remoteStore,!1)}}async function vy(t,e,n){const r=U(t),s=[],i=[];for(const o of e){let a;const c=r.rc.get(o);if(c&&c.length!==0){a=await Pi(r.localStore,Ft(c[0]));for(const u of c){const l=r.ic.get(u),h=await OP(r,l);h.snapshot&&i.push(h.snapshot)}}else{const u=await VI(r.localStore,o);a=await Pi(r.localStore,u),await ap(r,nE(u),o,!1,a.resumeToken)}s.push(a)}return r.sc.Wo(i),s}function nE(t){return qb(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function FP(t){const e=U(t);return U(U(e.localStore).persistence).vi()}async function UP(t,e,n,r){const s=U(t);if(s.dc)return void R("SyncEngine","Ignoring unexpected query state notification.");const i=s.rc.get(e);if(i&&i.length>0)switch(n){case"current":case"not-current":{const o=await $I(s.localStore,Kb(i[0])),a=qa.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Xe.EMPTY_BYTE_STRING);await cr(s,o,a);break}case"rejected":await Mi(s.localStore,e,!0),Fi(s,e,r);break;default:B()}}async function VP(t,e,n){const r=hp(t);if(r.dc){for(const s of e){if(r.rc.has(s)){R("SyncEngine","Adding an already active target "+s);continue}const i=await VI(r.localStore,s),o=await Pi(r.localStore,i);await ap(r,nE(i),o.targetId,!1,o.resumeToken),dl(r.remoteStore,o)}for(const s of n)r.rc.has(s)&&await Mi(r.localStore,s,!1).then(()=>{ba(r.remoteStore,s),Fi(r,s)}).catch(jr)}}function hp(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=eE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AP.bind(null,e),e.sc.Wo=gP.bind(null,e.eventManager),e.sc.wc=yP.bind(null,e.eventManager),e}function dp(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kP.bind(null,e),e}function $P(t,e,n){const r=U(t);(async function(s,i,o){try{const a=await i.getMetadata();if(await function(h,d){const p=U(h),g=Ge(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",y=>p.Ns.getBundleMetadata(y,d.id)).then(y=>!!y&&y.createTime.compareTo(g)>=0)}(s.localStore,a))return await i.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(YI(a));const c=new _P(a,s.localStore,i.yt);let u=await i.mc();for(;u;){const h=await c.Fu(u);h&&o._updateProgress(h),u=await i.mc()}const l=await c.complete();return await cr(s,l.Lu,void 0),await function(h,d){const p=U(h);return p.persistence.runTransaction("Save bundle","readwrite",g=>p.Ns.saveBundleMetadata(g,d))}(s.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Bu)}catch(a){return Ci("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(s=>{r.sharedClientState.notifyBundleLoaded(s)})}class rE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Ka(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return MI(this.persistence,new PI,e.initialUser,this.yt)}yc(e){return new OI(hl.Bs,this.yt)}gc(e){return new qI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sE extends rE{constructor(e,n,r){super(),this.Ac=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await dp(this.Ac.syncEngine),await so(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return MI(this.persistence,new PI,e.initialUser,this.yt)}Tc(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new xO(r,e.asyncQueue,n)}Ec(e,n){const r=new pD(n,this.persistence);return new fD(e.asyncQueue,r)}yc(e){const n=Qf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ot.withCacheSize(this.cacheSizeBytes):Ot.DEFAULT;return new zf(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,jI(),kc(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(e){return new qI}}class BP extends sE{constructor(e,n){super(e,n,!1),this.Ac=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ac.syncEngine;this.sharedClientState instanceof sh&&(this.sharedClientState.syncEngine={Fr:MP.bind(null,n),$r:UP.bind(null,n),Br:VP.bind(null,n),vi:FP.bind(null,n),Mr:PP.bind(null,n)},await this.sharedClientState.start()),await this.persistence.li(async r=>{await LP(this.Ac.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}gc(e){const n=jI();if(!sh.C(n))throw new C(_.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Qf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new sh(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class fp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=NP.bind(null,this.syncEngine),await id(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new mP}createDatastore(e){const n=Ka(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new ZO(s));var s;return function(i,o,a,c){return new nP(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>yy(this.syncEngine,a,0),o=fy.C()?new fy:new YO,new sP(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,u){const l=new IP(r,s,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=U(e);R("RemoteStore","RemoteStore shutting down."),n._u.add(5),await ro(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(t,e,n){if(!n)throw new C(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iE(t,e,n,r){if(e===!0&&r===!0)throw new C(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _y(t){if(!L.isDocumentKey(t))throw new C(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wy(t){if(L.isDocumentKey(t))throw new C(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function me(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new C(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fl(t);throw new C(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function oE(t,e){if(e<=0)throw new C(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=new Map;class Iy{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new C(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,iE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Iy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Iy(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new tD;switch(n.type){case"gapi":const r=n.client;return new iD(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=by.get(e);n&&(R("ComponentProvider","Removing Datastore"),by.delete(e),n.terminate())}(this),Promise.resolve()}}function aE(t,e,n,r={}){var s;const i=(t=me(t,Ga))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ci("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=tt.MOCK_USER;else{o=f_(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new C(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new tt(c)}t._authCredentials=new nD(new wb(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}}class pt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pt(this.firestore,e,this._query)}}class Ln extends pt{constructor(e,n,r){super(e,n,eo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new L(e))}withConverter(e){return new Ln(this.firestore,e,this._path)}}function Wr(t,e,...n){if(t=j(t),pp("collection","path",e),t instanceof Ga){const r=he.fromString(e,...n);return wy(r),new Ln(t,null,r)}{if(!(t instanceof xe||t instanceof Ln))throw new C(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return wy(r),new Ln(t.firestore,null,r)}}function qP(t,e){if(t=me(t,Ga),pp("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new C(_.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new pt(t,null,function(n){return new or(he.emptyPath(),n)}(e))}function tr(t,e,...n){if(t=j(t),arguments.length===1&&(e=bb.R()),pp("doc","path",e),t instanceof Ga){const r=he.fromString(e,...n);return _y(r),new xe(t,null,new L(r))}{if(!(t instanceof xe||t instanceof Ln))throw new C(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return _y(r),new xe(t.firestore,t instanceof Ln?t.converter:null,new L(r))}}function cE(t,e){return t=j(t),e=j(e),(t instanceof xe||t instanceof Ln)&&(e instanceof xe||e instanceof Ln)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function uE(t,e){return t=j(t),e=j(e),t instanceof pt&&e instanceof pt&&t.firestore===e.firestore&&$a(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Ke("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e,n){this.Pc=e,this.yt=n,this.metadata=new nt,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(r=>{r&&r.Ou()?this.metadata.resolve(r.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ku)}`))},r=>this.metadata.reject(r))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const n=this.vc.decode(e),r=Number(n);isNaN(r)&&this.Dc(`length string (${n}) is not valid number`);const s=await this.Cc(r);return new vP(JSON.parse(s),e.length+r)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const n=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new C(_.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,s){const i=U(r),o=_a(i.yt)+"/documents",a={documents:s.map(h=>va(i.yt,h))},c=await i._o("BatchGetDocuments",o,a,s.length),u=new Map;c.forEach(h=>{const d=GD(i.yt,h);u.set(d.key.toString(),d)});const l=[];return s.forEach(h=>{const d=u.get(h.toString());W(!!d),l.push(d)}),l}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new no(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=L.fromPath(r);this.mutations.push(new Vf(s,this.precondition(s)))}),await async function(n,r){const s=U(n),i=_a(s.yt)+"/documents",o={writes:r.map(a=>wa(s.yt,a))};await s.ao("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw B();n=z.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new C(_.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(z.min())?De.exists(!1):De.updateTime(n):De.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(z.min()))throw new C(_.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return De.updateTime(n)}return De.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.kc=r.maxAttempts,this.xo=new Xf(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new KP(this.datastore),n=this.Mc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Fc(s)}))}).catch(r=>{this.Fc(r)})})}Mc(e){try{const n=this.updateFunction(e);return!Ua(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!tI(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=tt.UNAUTHENTICATED,this.clientId=bb.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{R("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(R("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=oo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lE(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await LI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function hE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mp(t);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>py(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>py(e.remoteStore,i)),t.onlineComponents=e}async function mp(t){return t.offlineComponents||(R("FirestoreClient","Using default OfflineComponentProvider"),await lE(t,new rE)),t.offlineComponents}async function ml(t){return t.onlineComponents||(R("FirestoreClient","Using default OnlineComponentProvider"),await hE(t,new fp)),t.onlineComponents}function dE(t){return mp(t).then(e=>e.persistence)}function gp(t){return mp(t).then(e=>e.localStore)}function fE(t){return ml(t).then(e=>e.remoteStore)}function yp(t){return ml(t).then(e=>e.syncEngine)}function WP(t){return ml(t).then(e=>e.datastore)}async function Ui(t){const e=await ml(t),n=e.eventManager;return n.onListen=EP.bind(null,e.syncEngine),n.onUnlisten=TP.bind(null,e.syncEngine),n}function zP(t){return t.asyncQueue.enqueue(async()=>{const e=await dE(t),n=await fE(t);return e.setNetworkEnabled(!0),function(r){const s=U(r);return s._u.delete(0),Ha(s)}(n)})}function QP(t){return t.asyncQueue.enqueue(async()=>{const e=await dE(t),n=await fE(t);return e.setNetworkEnabled(!1),async function(r){const s=U(r);s._u.add(0),await ro(s),s.gu.set("Offline")}(n)})}function YP(t,e){const n=new nt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await function(a,c){const u=U(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,s);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new C(_.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=oo(o,`Failed to get document '${s} from cache`);i.reject(a)}}(await gp(t),e,n)),n.promise}function pE(t,e,n={}){const r=new nt;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new pl({next:h=>{i.enqueueAndForget(()=>sp(s,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new C(_.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new C(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new op(eo(o.path),u,{includeMetadataChanges:!0,Nu:!0});return rp(s,l)}(await Ui(t),t.asyncQueue,e,n,r)),r.promise}function JP(t,e){const n=new nt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await iu(r,s,!0),a=new ZI(s,o.Hi),c=a.Wu(o.documents),u=a.applyChanges(c,!1);i.resolve(u.snapshot)}catch(o){const a=oo(o,`Failed to execute query '${s} against cache`);i.reject(a)}}(await gp(t),e,n)),n.promise}function mE(t,e,n={}){const r=new nt;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new pl({next:h=>{i.enqueueAndForget(()=>sp(s,l)),h.fromCache&&a.source==="server"?c.reject(new C(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new op(o,u,{includeMetadataChanges:!0,Nu:!0});return rp(s,l)}(await Ui(t),t.asyncQueue,e,n,r)),r.promise}function XP(t,e){const n=new pl(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,s){U(r).Ru.add(s),s.next()}(await Ui(t),n)),()=>{n.bc(),t.asyncQueue.enqueueAndForget(async()=>function(r,s){U(r).Ru.delete(s)}(await Ui(t),n))}}function ZP(t,e,n,r){const s=function(i,o){let a;return a=typeof i=="string"?new TextEncoder().encode(i):i,function(c,u){return new jP(c,u)}(function(c,u){if(c instanceof Uint8Array)return Ey(c,u);if(c instanceof ArrayBuffer)return Ey(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Ka(e));t.asyncQueue.enqueueAndForget(async()=>{$P(await yp(t),s,r)})}function eM(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const s=U(n);return s.persistence.runTransaction("Get named query","readonly",i=>s.Ns.getNamedQuery(i,r))}(await gp(t),e))}class tM{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Xf(this,"async_queue_retry"),this.Wc=()=>{const n=kc();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=kc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=kc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new nt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Kr(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Ke("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const s=np.createAndSchedule(this,e,n,r,i=>this.Yc(i));return this.Uc.push(s),s}zc(){this.Kc&&B()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function ad(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class nM{constructor(){this._progressObserver={},this._taskCompletionResolver=new nt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM=-1;class Be extends Ga{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new tM,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gE(this),this._firestoreClient.terminate()}}function sM(t,e){const n=typeof t=="object"?t:xu(),r=typeof t=="string"?t:e||"(default)",s=Gi(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=h_("firestore");i&&aE(s,...i)}return s}function ct(t){return t._firestoreClient||gE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gE(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new mD(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new GP(t._authCredentials,t._appCheckCredentials,t._queue,r)}function iM(t,e){vE(t=me(t,Be));const n=ct(t),r=t._freezeSettings(),s=new fp;return yE(n,s,new sE(s,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function oM(t){vE(t=me(t,Be));const e=ct(t),n=t._freezeSettings(),r=new fp;return yE(e,r,new BP(r,n.cacheSizeBytes))}function yE(t,e,n){const r=new nt;return t.asyncQueue.enqueue(async()=>{try{await lE(t,n),await hE(t,e),r.resolve()}catch(s){const i=s;if(!function(o){return o.name==="FirebaseError"?o.code===_.FAILED_PRECONDITION||o.code===_.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(i))throw i;Ci("Error enabling offline persistence. Falling back to persistence disabled: "+i),r.reject(i)}}).then(()=>r.promise)}function aM(t){if(t._initialized&&!t._terminated)throw new C(_.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new nt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!dn.C())return Promise.resolve();const r=n+"main";await dn.delete(r)}(Qf(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function cM(t){return function(e){const n=new nt;return e.asyncQueue.enqueueAndForget(async()=>RP(await yp(e),n)),n.promise}(ct(t=me(t,Be)))}function uM(t){return zP(ct(t=me(t,Be)))}function lM(t){return QP(ct(t=me(t,Be)))}function hM(t,e){const n=ct(t=me(t,Be)),r=new nM;return ZP(n,t._databaseId,e,r),r}function dM(t,e){return eM(ct(t=me(t,Be)),e).then(n=>n?new pt(t,null,n.query):null)}function vE(t){if(t._initialized||t._terminated)throw new C(_.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vn(Xe.fromBase64String(e))}catch(n){throw new C(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vn(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new C(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new C(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new C(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fM=/^__.*__$/;class pM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new to(e,this.data,n,this.fieldTransforms)}}class _E{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ar(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function wE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class yl{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=s,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new yl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.ua(e),s}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.na(),s}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return uu(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(wE(this.sa)&&fM.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class mM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||Ka(e)}da(e,n,r,s=!1){return new yl({sa:e,methodName:n,fa:r,path:He.emptyPath(),oa:!1,la:s},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function qs(t){const e=t._freezeSettings(),n=Ka(t._databaseId);return new mM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vl(t,e,n,r,s,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,s);bp("Data must be an object, but it was:",o,r);const a=EE(r,o);let c,u;if(i.merge)c=new Gt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=cd(e,h,n);if(!o.contains(d))throw new C(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);SE(l,d)||l.push(d)}c=new Gt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new pM(new ht(a),c,u)}class Wa extends Bs{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wa}}function bE(t,e,n){return new yl({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class vp extends Bs{_toFieldTransform(e){return new Ba(e.path,new Ni)}isEqual(e){return e instanceof vp}}class gM extends Bs{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=bE(this,e,!0),r=this._a.map(i=>js(i,n)),s=new Rs(r);return new Ba(e.path,s)}isEqual(e){return this===e}}class yM extends Bs{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=bE(this,e,!0),r=this._a.map(i=>js(i,n)),s=new xs(r);return new Ba(e.path,s)}isEqual(e){return this===e}}class vM extends Bs{constructor(e,n){super(e),this.wa=n}_toFieldTransform(e){const n=new Di(e.yt,zb(e.yt,this.wa));return new Ba(e.path,n)}isEqual(e){return this===e}}function _p(t,e,n,r){const s=t.da(1,e,n);bp("Data must be an object, but it was:",s,r);const i=[],o=ht.empty();$s(r,(c,u)=>{const l=Ip(e,c,n);u=j(u);const h=s.ca(l);if(u instanceof Wa)i.push(l);else{const d=js(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new Gt(i);return new _E(o,a,s.fieldTransforms)}function wp(t,e,n,r,s,i){const o=t.da(1,e,n),a=[cd(e,r,n)],c=[s];if(i.length%2!=0)throw new C(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(cd(e,i[d])),c.push(i[d+1]);const u=[],l=ht.empty();for(let d=a.length-1;d>=0;--d)if(!SE(u,a[d])){const p=a[d];let g=c[d];g=j(g);const y=o.ca(p);if(g instanceof Wa)u.push(p);else{const I=js(g,y);I!=null&&(u.push(p),l.set(p,I))}}const h=new Gt(u);return new _E(l,h,o.fieldTransforms)}function IE(t,e,n,r=!1){return js(n,t.da(r?4:3,e))}function js(t,e){if(TE(t=j(t)))return bp("Unsupported field value:",e,t),EE(t,e);if(t instanceof Bs)return function(n,r){if(!wE(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=js(o,r.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=j(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return zb(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Oe.fromDate(n);return{timestampValue:Oi(r.yt,s)}}if(n instanceof Oe){const s=new Oe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Oi(r.yt,s)}}if(n instanceof gl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Vn)return{bytesValue:cI(r.yt,n._byteString)};if(n instanceof xe){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:$f(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${fl(n)}`)}(t,e)}function EE(t,e){const n={};return kb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$s(t,(r,s)=>{const i=js(s,e.ra(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function TE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof gl||t instanceof Vn||t instanceof xe||t instanceof Bs)}function bp(t,e,n){if(!TE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=fl(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function cd(t,e,n){if((e=j(e))instanceof Lr)return e._internalPath;if(typeof e=="string")return Ip(t,e);throw uu("Field path arguments must be of type string or ",t,!1,void 0,n)}const _M=new RegExp("[~\\*/\\[\\]]");function Ip(t,e,n){if(e.search(_M)>=0)throw uu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Lr(...e.split("."))._internalPath}catch{throw uu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function uu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new C(_.INVALID_ARGUMENT,a+t+c)}function SE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_l("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wM extends Ia{data(){return super.data()}}function _l(t,e){return typeof e=="string"?Ip(t,e):e instanceof Lr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new C(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ep{}class za extends Ep{}function Jt(t,e,...n){let r=[];e instanceof Ep&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof Sp).length,o=s.filter(a=>a instanceof wl).length;if(i>1||i>0&&o>0)throw new C(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class wl extends za{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new wl(e,n,r)}_apply(e){const n=this._parse(e);return RE(e._query,n),new pt(e.firestore,e.converter,Yh(e._query,n))}_parse(e){const n=qs(e.firestore);return function(s,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new C(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Sy(l,u);const d=[];for(const p of l)d.push(Ty(a,s,p));h={arrayValue:{values:d}}}else h=Ty(a,s,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Sy(l,u),h=IE(o,i,l,u==="in"||u==="not-in");return ce.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Tp(t,e,n){const r=e,s=_l("where",t);return wl._create(s,r,n)}class Sp extends Ep{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Sp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:_e.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)RE(i,a),i=Yh(i,a)}(e._query,n),new pt(e.firestore,e.converter,Yh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ap extends za{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ap(e,n)}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new C(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new C(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new mi(s,i);return function(a,c){if(Lf(a)===null){const u=il(a);u!==null&&xE(a,u,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new pt(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new or(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Cp(t,e="asc"){const n=e,r=_l("orderBy",t);return Ap._create(r,n)}class bl extends za{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new bl(e,n,r)}_apply(e){return new pt(e.firestore,e.converter,tu(e._query,this._limit,this._limitType))}}function CE(t){return oE("limit",t),bl._create("limit",t,"F")}function bM(t){return oE("limitToLast",t),bl._create("limitToLast",t,"L")}class Il extends za{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Il(e,n,r)}_apply(e){const n=kE(e,this.type,this._docOrFields,this._inclusive);return new pt(e.firestore,e.converter,function(r,s){return new or(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,s,r.endAt)}(e._query,n))}}function IM(...t){return Il._create("startAt",t,!0)}function EM(...t){return Il._create("startAfter",t,!1)}class El extends za{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new El(e,n,r)}_apply(e){const n=kE(e,this.type,this._docOrFields,this._inclusive);return new pt(e.firestore,e.converter,function(r,s){return new or(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,s)}(e._query,n))}}function TM(...t){return El._create("endBefore",t,!1)}function SM(...t){return El._create("endAt",t,!0)}function kE(t,e,n,r){if(n[0]=j(n[0]),n[0]instanceof Ia)return function(s,i,o,a,c){if(!a)throw new C(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of Is(s))if(l.field.isKeyField())u.push(Cs(i,a.key));else{const h=a.data.field(l.field);if(Mf(h))throw new C(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new C(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new Pr(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=qs(t.firestore);return function(i,o,a,c,u,l){const h=i.explicitOrderBy;if(u.length>h.length)throw new C(_.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<u.length;p++){const g=u[p];if(h[p].field.isKeyField()){if(typeof g!="string")throw new C(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!Ff(i)&&g.indexOf("/")!==-1)throw new C(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const y=i.path.child(he.fromString(g));if(!L.isDocumentKey(y))throw new C(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${y}' is not because it contains an odd number of segments.`);const I=new L(y);d.push(Cs(o,I))}else{const y=IE(a,c,g);d.push(y)}}return new Pr(d,l)}(t._query,t.firestore._databaseId,s,e,n,r)}}function Ty(t,e,n){if(typeof(n=j(n))=="string"){if(n==="")throw new C(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ff(e)&&n.indexOf("/")!==-1)throw new C(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(he.fromString(n));if(!L.isDocumentKey(r))throw new C(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Cs(t,new L(r))}if(n instanceof xe)return Cs(t,n._key);throw new C(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fl(n)}.`)}function Sy(t,e){if(!Array.isArray(t)||t.length===0)throw new C(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new C(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function RE(t,e){if(e.isInequality()){const r=il(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new C(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Lf(t);i!==null&&xE(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new C(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new C(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function xE(t,e,n){if(!n.isEqual(e))throw new C(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class kp{convertValue(e,n="none"){switch(As(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw B()}}convertObject(e,n){const r={};return $s(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new gl(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=xb(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ma(e));default:return null}}convertTimestamp(e){const n=Dr(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=he.fromString(e);W(vI(r));const s=new Nr(r.get(1),r.get(3)),i=new L(r.popFirst(5));return s.isEqual(n)||Ke(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class AM extends kp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nr extends Ia{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ko(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_l("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ko extends nr{data(e={}){return super.data(e)}}class Fr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new fs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ko(this._firestore,this._userDataWriter,r.key,r,new fs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new C(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new Ko(r._firestore,r._userDataWriter,o.doc.key,o.doc,new fs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Ko(r._firestore,r._userDataWriter,o.doc.key,o.doc,new fs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:CM(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function CM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}function NE(t,e){return t instanceof nr&&e instanceof nr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Fr&&e instanceof Fr&&t._firestore===e._firestore&&uE(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t){t=me(t,xe);const e=me(t.firestore,Be);return pE(ct(e),t._key).then(n=>Dp(e,t,n))}class Ks extends kp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,n)}}function kM(t){t=me(t,xe);const e=me(t.firestore,Be),n=ct(e),r=new Ks(e);return YP(n,t._key).then(s=>new nr(e,r,t._key,s,new fs(s!==null&&s.hasLocalMutations,!0),t.converter))}function RM(t){t=me(t,xe);const e=me(t.firestore,Be);return pE(ct(e),t._key,{source:"server"}).then(n=>Dp(e,t,n))}function ao(t){t=me(t,pt);const e=me(t.firestore,Be),n=ct(e),r=new Ks(e);return AE(t._query),mE(n,t._query).then(s=>new Fr(e,r,t,s))}function xM(t){t=me(t,pt);const e=me(t.firestore,Be),n=ct(e),r=new Ks(e);return JP(n,t._query).then(s=>new Fr(e,r,t,s))}function NM(t){t=me(t,pt);const e=me(t.firestore,Be),n=ct(e),r=new Ks(e);return mE(n,t._query,{source:"server"}).then(s=>new Fr(e,r,t,s))}function Ay(t,e,n){t=me(t,xe);const r=me(t.firestore,Be),s=Tl(t.converter,e,n);return Qa(r,[vl(qs(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,De.none())])}function ud(t,e,n,...r){t=me(t,xe);const s=me(t.firestore,Be),i=qs(s);let o;return o=typeof(e=j(e))=="string"||e instanceof Lr?wp(i,"updateDoc",t._key,e,n,r):_p(i,"updateDoc",t._key,e),Qa(s,[o.toMutation(t._key,De.exists(!0))])}function xp(t){return Qa(me(t.firestore,Be),[new no(t._key,De.none())])}function Np(t,e){const n=me(t.firestore,Be),r=tr(t),s=Tl(t.converter,e);return Qa(n,[vl(qs(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,De.exists(!1))]).then(()=>r)}function DE(t,...e){var n,r,s;t=j(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ad(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ad(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(t instanceof xe)u=me(t.firestore,Be),l=eo(t._key.path),c={next:h=>{e[o]&&e[o](Dp(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=me(t,pt);u=me(h.firestore,Be),l=h._query;const d=new Ks(u);c={next:p=>{e[o]&&e[o](new Fr(u,d,h,p))},error:e[o+1],complete:e[o+2]},AE(t._query)}return function(h,d,p,g){const y=new pl(g),I=new op(d,y,p);return h.asyncQueue.enqueueAndForget(async()=>rp(await Ui(h),I)),()=>{y.bc(),h.asyncQueue.enqueueAndForget(async()=>sp(await Ui(h),I))}}(ct(u),l,a,c)}function DM(t,e){return XP(ct(t=me(t,Be)),ad(e)?e:{next:e})}function Qa(t,e){return function(n,r){const s=new nt;return n.asyncQueue.enqueueAndForget(async()=>SP(await yp(n),r,s)),s.promise}(ct(t),e)}function Dp(t,e,n){const r=n.docs.get(e._key),s=new Ks(t);return new nr(t,s,e._key,r,new fs(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OM={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=qs(e)}set(e,n,r){this._verifyNotCommitted();const s=yr(e,this._firestore),i=Tl(s.converter,n,r),o=vl(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,De.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=yr(e,this._firestore);let o;return o=typeof(n=j(n))=="string"||n instanceof Lr?wp(this._dataReader,"WriteBatch.update",i._key,n,r,s):_p(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,De.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=yr(e,this._firestore);return this._mutations=this._mutations.concat(new no(n._key,De.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(_.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function yr(t,e){if((t=j(t)).firestore!==e)throw new C(_.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MM extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=qs(e)}get(e){const n=yr(e,this._firestore),r=new AM(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return B();const i=s[0];if(i.isFoundDocument())return new Ia(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new Ia(this._firestore,r,n._key,null,n.converter);throw B()})}set(e,n,r){const s=yr(e,this._firestore),i=Tl(s.converter,n,r),o=vl(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=yr(e,this._firestore);let o;return o=typeof(n=j(n))=="string"||n instanceof Lr?wp(this._dataReader,"Transaction.update",i._key,n,r,s):_p(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=yr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=yr(e,this._firestore),r=new Ks(this._firestore);return super.get(e).then(s=>new nr(this._firestore,r,n._key,s._document,new fs(!1,!1),n.converter))}}function LM(t,e,n){t=me(t,Be);const r=Object.assign(Object.assign({},OM),n);return function(s){if(s.maxAttempts<1)throw new C(_.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,i,o){const a=new nt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await WP(s);new HP(s.asyncQueue,c,o,i,a).run()}),a.promise}(ct(t),s=>e(new MM(t,s)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FM(){return new Wa("deleteField")}function UM(){return new vp("serverTimestamp")}function VM(...t){return new gM("arrayUnion",t)}function $M(...t){return new yM("arrayRemove",t)}function BM(t){return new vM("increment",t)}(function(t,e=!0){(function(n){Zi=n})(Vr),Xn(new gn("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new Be(new rD(n.getProvider("auth-internal")),new aD(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new C(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nr(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Ht(Tg,"3.8.0",t),Ht(Tg,"3.8.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="firebasestorage.googleapis.com",PE="storageBucket",qM=2*60*1e3,jM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends wt{constructor(e,n,r=0){super(ih(e),`Firebase Storage: ${n} (${ih(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,qe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ih(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function ih(t){return"storage/"+t}function Op(){const t="An unknown error occurred, please check the error payload for server response.";return new qe("unknown",t)}function KM(t){return new qe("object-not-found","Object '"+t+"' does not exist.")}function HM(t){return new qe("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function GM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new qe("unauthenticated",t)}function WM(){return new qe("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function zM(t){return new qe("unauthorized","User does not have permission to access '"+t+"'.")}function QM(){return new qe("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function YM(){return new qe("canceled","User canceled the upload/download.")}function JM(t){return new qe("invalid-url","Invalid URL '"+t+"'.")}function XM(t){return new qe("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function ZM(){return new qe("no-default-bucket","No default bucket found. Did you set the '"+PE+"' property when initializing the app?")}function eL(){return new qe("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function tL(){return new qe("no-download-url","The given file does not have any download URLs.")}function nL(t){return new qe("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ld(t){return new qe("invalid-argument",t)}function ME(){return new qe("app-deleted","The Firebase app was deleted.")}function rL(t){return new qe("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ho(t,e){return new qe("invalid-format","String does not match format '"+t+"': "+e)}function bo(t){throw new qe("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Kt.makeFromUrl(e,n)}catch{return new Kt(e,"")}if(r.path==="")return r;throw XM(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(D){D.path_=decodeURIComponent(D.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},y=n===OE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",S=new RegExp(`^https?://${y}/${s}/${I}`,"i"),b=[{regex:a,indices:c,postModify:i},{regex:p,indices:g,postModify:u},{regex:S,indices:{bucket:1,path:2},postModify:u}];for(let D=0;D<b.length;D++){const G=b[D],Q=G.regex.exec(e);if(Q){const ue=Q[G.indices.bucket];let Z=Q[G.indices.path];Z||(Z=""),r=new Kt(ue,Z),G.postModify(r);break}}if(r==null)throw JM(e);return r}}class sL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iL(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...I){u||(u=!0,e.apply(null,I))}function h(I){s=setTimeout(()=>{s=null,t(p,c())},I)}function d(){i&&clearTimeout(i)}function p(I,...S){if(u){d();return}if(I){d(),l.call(null,I,...S);return}if(c()||o){d(),l.call(null,I,...S);return}r<64&&(r*=2);let b;a===1?(a=2,b=0):b=(r+Math.random())*1e3,h(b)}let g=!1;function y(I){g||(g=!0,d(),!u&&(s!==null?(I||(a=2),clearTimeout(s),h(0)):I||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function oL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aL(t){return t!==void 0}function cL(t){return typeof t=="object"&&!Array.isArray(t)}function Pp(t){return typeof t=="string"||t instanceof String}function Cy(t){return Mp()&&t instanceof Blob}function Mp(){return typeof Blob<"u"&&!Cu()}function ky(t,e,n,r){if(r<e)throw ld(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ld(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function LE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Es;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Es||(Es={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uL(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(e,n,r,s,i,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new fc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Es.NO_ERROR,c=i.getStatus();if((!a||uL(c,this.additionalRetryCodes_))&&this.retry){const l=i.getErrorCode()===Es.ABORT;r(!1,new fc(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new fc(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());aL(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Op();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?ME():YM();o(c)}else{const c=QM();o(c)}};this.canceled_?n(!1,new fc(!1,null,!0)):this.backoffId_=iL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&oL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function hL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function dL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function pL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mL(t,e,n,r,s,i,o=!0){const a=LE(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return fL(u,e),hL(u,n),dL(u,i),pL(u,r),new lL(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yL(...t){const e=gL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Mp())return new Blob(t);throw new qe("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function vL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _L(t){if(typeof atob>"u")throw nL("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class oh{constructor(e,n){this.data=e,this.contentType=n||null}}function wL(t,e){switch(t){case Dn.RAW:return new oh(FE(e));case Dn.BASE64:case Dn.BASE64URL:return new oh(UE(t,e));case Dn.DATA_URL:return new oh(IL(e),EL(e))}throw Op()}function FE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function bL(t){let e;try{e=decodeURIComponent(t)}catch{throw Ho(Dn.DATA_URL,"Malformed data URL.")}return FE(e)}function UE(t,e){switch(t){case Dn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ho(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Dn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ho(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=_L(e)}catch(s){throw s.message.includes("polyfill")?s:Ho(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class VE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ho(Dn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=TL(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function IL(t){const e=new VE(t);return e.base64?UE(Dn.BASE64,e.rest):bL(e.rest)}function EL(t){return new VE(t).contentType}function TL(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n){let r=0,s="";Cy(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Cy(this.data_)){const r=this.data_,s=vL(r,e,n);return s===null?null:new vr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new vr(r,!0)}}static getBlob(...e){if(Mp()){const n=e.map(r=>r instanceof vr?r.data_:r);return new vr(yL.apply(null,n))}else{const n=e.map(o=>Pp(o)?wL(Dn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new vr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(t){let e;try{e=JSON.parse(t)}catch{return null}return cL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function AL(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function BE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CL(t,e){return e}class Tt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||CL}}let pc=null;function kL(t){return!Pp(t)||t.length<2?t:BE(t)}function qE(){if(pc)return pc;const t=[];t.push(new Tt("bucket")),t.push(new Tt("generation")),t.push(new Tt("metageneration")),t.push(new Tt("name","fullPath",!0));function e(i,o){return kL(o)}const n=new Tt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Tt("size");return s.xform=r,t.push(s),t.push(new Tt("timeCreated")),t.push(new Tt("updated")),t.push(new Tt("md5Hash",null,!0)),t.push(new Tt("cacheControl",null,!0)),t.push(new Tt("contentDisposition",null,!0)),t.push(new Tt("contentEncoding",null,!0)),t.push(new Tt("contentLanguage",null,!0)),t.push(new Tt("contentType",null,!0)),t.push(new Tt("metadata","customMetadata",!0)),pc=t,pc}function RL(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Kt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function xL(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return RL(r,t),r}function jE(t,e,n){const r=$E(e);return r===null?null:xL(t,r,n)}function NL(t,e,n,r){const s=$E(e);if(s===null||!Pp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),p=Sl(d,n,r),g=LE({alt:"media",token:u});return p+g})[0]}function DL(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Lp{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(t){if(!t)throw Op()}function OL(t,e){function n(r,s){const i=jE(t,s,e);return KE(i!==null),i}return n}function PL(t,e){function n(r,s){const i=jE(t,s,e);return KE(i!==null),NL(i,s,t.host,t._protocol)}return n}function HE(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=WM():s=GM():n.getStatus()===402?s=HM(t.bucket):n.getStatus()===403?s=zM(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function GE(t){const e=HE(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=KM(t.path)),i.serverResponse=s.serverResponse,i}return n}function ML(t,e,n){const r=e.fullServerUrl(),s=Sl(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Lp(s,i,PL(t,n),o);return a.errorHandler=GE(e),a}function LL(t,e){const n=e.fullServerUrl(),r=Sl(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,u){}const a=new Lp(r,s,o,i);return a.successCodes=[200,204],a.errorHandler=GE(e),a}function FL(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function UL(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=FL(null,e)),r}function VL(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let b="";for(let D=0;D<2;D++)b=b+Math.random().toString().slice(2);return b}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=UL(e,r,s),l=DL(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=vr.getBlob(h,r,d);if(p===null)throw eL();const g={name:u.fullPath},y=Sl(i,t.host,t._protocol),I="POST",S=t.maxUploadRetryTime,x=new Lp(y,I,OL(t,n),S);return x.urlParams=g,x.headers=o,x.body=p.uploadData(),x.errorHandler=HE(e),x}class $L{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Es.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Es.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Es.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw bo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw bo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw bo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw bo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw bo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class BL extends $L{initXhr(){this.xhr_.responseType="text"}}function Fp(){return new BL}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n){this._service=e,n instanceof Kt?this._location=n:this._location=Kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ps(e,n)}get root(){const e=new Kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return BE(this._location.path)}get storage(){return this._service}get parent(){const e=SL(this._location.path);if(e===null)return null;const n=new Kt(this._location.bucket,e);return new Ps(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw rL(e)}}function qL(t,e,n){t._throwIfRoot("uploadBytes");const r=VL(t.storage,t._location,qE(),new vr(e,!0),n);return t.storage.makeRequestWithTokens(r,Fp).then(s=>({metadata:s,ref:t}))}function jL(t){t._throwIfRoot("getDownloadURL");const e=ML(t.storage,t._location,qE());return t.storage.makeRequestWithTokens(e,Fp).then(n=>{if(n===null)throw tL();return n})}function KL(t){t._throwIfRoot("deleteObject");const e=LL(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Fp)}function HL(t,e){const n=AL(t._location.path,e),r=new Kt(t._location.bucket,n);return new Ps(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GL(t){return/^[A-Za-z]+:\/\//.test(t)}function WL(t,e){return new Ps(t,e)}function WE(t,e){if(t instanceof Up){const n=t;if(n._bucket==null)throw ZM();const r=new Ps(n,n._bucket);return e!=null?WE(r,e):r}else return e!==void 0?HL(t,e):t}function zL(t,e){if(e&&GL(e)){if(t instanceof Up)return WL(t,e);throw ld("To use ref(service, url), the first argument must be a Storage instance.")}else return WE(t,e)}function Ry(t,e){const n=e==null?void 0:e[PE];return n==null?null:Kt.makeFromBucketSpec(n,t)}function QL(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:f_(s,t.app.options.projectId))}class Up{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=OE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qM,this._maxUploadRetryTime=jM,this._requests=new Set,s!=null?this._bucket=Kt.makeFromBucketSpec(s,this._host):this._bucket=Ry(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Kt.makeFromBucketSpec(this._url,e):this._bucket=Ry(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ky("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ky("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ps(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new sL(ME());{const o=mL(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const xy="@firebase/storage",Ny="0.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE="storage";function YL(t,e,n){return t=j(t),qL(t,e,n)}function JL(t){return t=j(t),jL(t)}function XL(t){return t=j(t),KL(t)}function Dy(t,e){return t=j(t),zL(t,e)}function ZL(t=xu(),e){t=j(t);const r=Gi(t,zE).getImmediate({identifier:e}),s=h_("storage");return s&&eF(r,...s),r}function eF(t,e,n,r={}){QL(t,e,n,r)}function tF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Up(n,r,s,e,Vr)}function nF(){Xn(new gn(zE,tF,"PUBLIC").setMultipleInstances(!0)),Ht(xy,Ny,""),Ht(xy,Ny,"esm2017")}nF();const rF={apiKey:"AIzaSyD2OD7f32hGUnbizkaCQdXUXkCol-Ycl30",authDomain:"app-odonto-a4ac4.firebaseapp.com",projectId:"app-odonto-a4ac4",storageBucket:"app-odonto-a4ac4.appspot.com",messagingSenderId:"922824486299",appId:"1:922824486299:web:f195882ea173f7787c453e"},QE=Ru(rF),Yn=sM(QE),Oy=ZL(QE);const sF={class:"questionario"},iF={class:"box my-4"},oF={class:"botao-inicio mb-2"},aF=T("i",{class:"fa-solid fa-house"},null,-1),cF=[aF],uF={class:"title has-text-centered"},lF=["innerHTML"],hF={class:"image-container"},dF=["src"],fF={class:"opcoes-container buttons are-medium mt-6 is-justify-content-center"},pF=["onClick"],mF={__name:"QuestionarioView",setup(t){const e=Wr(Yn,"perguntas"),n=gs("");Ki(()=>{r()});const r=async()=>{const i=Jt(e,Tp("is_inicio","==",!0),CE(1));(await ao(i)).forEach(async a=>{n.value=a.data()})},s=async i=>{const o=tr(Yn,"perguntas",i),a=await Rp(o);n.value=a.data()};return(i,o)=>(Le(),je("div",sF,[T("div",iF,[T("div",oF,[T("button",{onClick:o[0]||(o[0]=a=>r()),class:"button",title:"Início"},cF)]),T("h2",uF,On(n.value.titulo),1),T("p",{class:"is-size-3 mb-5 has-text-justified texto",innerHTML:n.value.texto},null,8,lF),T("div",hF,[T("img",{class:"image has-image-centered",src:n.value.url_imagem,alt:""},null,8,dF)]),T("div",fF,[(Le(!0),je(kt,null,Jo(n.value.opcoes,(a,c)=>(Le(),je("button",{key:c,onClick:u=>s(a.proxima_pergunta),class:"button"},On(a.opcao_texto),9,pF))),128))])])]))}};/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var YE="store";function JE(t){return t===void 0&&(t=null),tn(t!==null?t:YE)}function co(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function gF(t){return t!==null&&typeof t=="object"}function yF(t){return t&&typeof t.then=="function"}function vF(t,e){return function(){return t(e)}}function XE(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function ZE(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Al(t,n,[],t._modules.root,!0),Vp(t,n,e)}function Vp(t,e,n){var r=t._state,s=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},c=PT(!0);c.run(function(){co(i,function(u,l){o[l]=vF(u,t),a[l]=qt(function(){return o[l]()}),Object.defineProperty(t.getters,l,{get:function(){return a[l].value},enumerable:!0})})}),t._state=Ur({data:e}),t._scope=c,t.strict&&EF(t),r&&n&&t._withCommit(function(){r.data=null}),s&&s.stop()}function Al(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=$p(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var u=r.context=_F(t,o,n);r.forEachMutation(function(l,h){var d=o+h;wF(t,d,l,u)}),r.forEachAction(function(l,h){var d=l.root?h:o+h,p=l.handler||l;bF(t,d,p,u)}),r.forEachGetter(function(l,h){var d=o+h;IF(t,d,l,u)}),r.forEachChild(function(l,h){Al(t,e,n.concat(h),l,s)})}function _F(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=lu(i,o,a),u=c.payload,l=c.options,h=c.type;return(!l||!l.root)&&(h=e+h),t.dispatch(h,u)},commit:r?t.commit:function(i,o,a){var c=lu(i,o,a),u=c.payload,l=c.options,h=c.type;(!l||!l.root)&&(h=e+h),t.commit(h,u,l)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return eT(t,e)}},state:{get:function(){return $p(t.state,n)}}}),s}function eT(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function wF(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function bF(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return yF(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function IF(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function EF(t){hi(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function $p(t,e){return e.reduce(function(n,r){return n[r]},t)}function lu(t,e,n){return gF(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var TF="vuex bindings",Py="vuex:mutations",ah="vuex:actions",Zs="vuex",SF=0;function AF(t,e){JS({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[TF]},function(n){n.addTimelineLayer({id:Py,label:"Vuex Mutations",color:My}),n.addTimelineLayer({id:ah,label:"Vuex Actions",color:My}),n.addInspector({id:Zs,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===Zs)if(r.filter){var s=[];sT(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[rT(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===Zs){var s=r.nodeId;eT(e,s),r.state=RF(NF(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===Zs){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(Zs),n.sendInspectorState(Zs),n.addTimelineEvent({layerId:Py,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=SF++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:ah,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:ah,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var My=8702998,CF=6710886,kF=16777215,tT={label:"namespaced",textColor:kF,backgroundColor:CF};function nT(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function rT(t,e){return{id:e||"root",label:nT(e),tags:t.namespaced?[tT]:[],children:Object.keys(t._children).map(function(n){return rT(t._children[n],e+n+"/")})}}function sT(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[tT]:[]}),Object.keys(e._children).forEach(function(s){sT(t,e._children[s],n,r+s+"/")})}function RF(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=xF(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?nT(o):o,editable:!1,value:hd(function(){return i[o]})}})}return s}function xF(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=hd(function(){return t[n]})}else e[n]=hd(function(){return t[n]})}),e}function NF(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function hd(t){try{return t()}catch(e){return e}}var vn=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},iT={namespaced:{configurable:!0}};iT.namespaced.get=function(){return!!this._rawModule.namespaced};vn.prototype.addChild=function(e,n){this._children[e]=n};vn.prototype.removeChild=function(e){delete this._children[e]};vn.prototype.getChild=function(e){return this._children[e]};vn.prototype.hasChild=function(e){return e in this._children};vn.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};vn.prototype.forEachChild=function(e){co(this._children,e)};vn.prototype.forEachGetter=function(e){this._rawModule.getters&&co(this._rawModule.getters,e)};vn.prototype.forEachAction=function(e){this._rawModule.actions&&co(this._rawModule.actions,e)};vn.prototype.forEachMutation=function(e){this._rawModule.mutations&&co(this._rawModule.mutations,e)};Object.defineProperties(vn.prototype,iT);var Hs=function(e){this.register([],e,!1)};Hs.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Hs.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};Hs.prototype.update=function(e){oT([],this.root,e)};Hs.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new vn(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&co(n.modules,function(a,c){s.register(e.concat(c),a,r)})};Hs.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};Hs.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function oT(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;oT(t.concat(r),e.getChild(r),n.modules[r])}}function DF(t){return new Ut(t)}var Ut=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Hs(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(d,p){return c.call(o,d,p)},this.commit=function(d,p,g){return u.call(o,d,p,g)},this.strict=s;var l=this._modules.root.state;Al(this,l,[],this._modules.root),Vp(this,l),r.forEach(function(h){return h(n)})},Bp={state:{configurable:!0}};Ut.prototype.install=function(e,n){e.provide(n||YE,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&AF(e,this)};Bp.state.get=function(){return this._state.data};Bp.state.set=function(t){};Ut.prototype.commit=function(e,n,r){var s=this,i=lu(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},u=this._mutations[o];u&&(this._withCommit(function(){u.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(l){return l(c,s.state)}))};Ut.prototype.dispatch=function(e,n){var r=this,s=lu(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(l){return l.before}).forEach(function(l){return l.before(a,r.state)})}catch{}var u=c.length>1?Promise.all(c.map(function(l){return l(o)})):c[0](o);return new Promise(function(l,h){u.then(function(d){try{r._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,r.state)})}catch{}l(d)},function(d){try{r._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,r.state,d)})}catch{}h(d)})})}};Ut.prototype.subscribe=function(e,n){return XE(e,this._subscribers,n)};Ut.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return XE(r,this._actionSubscribers,n)};Ut.prototype.watch=function(e,n,r){var s=this;return hi(function(){return e(s.state,s.getters)},n,Object.assign({},r))};Ut.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Ut.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Al(this,this.state,e,this._modules.get(e),r.preserveState),Vp(this,this.state)};Ut.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=$p(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),ZE(this)};Ut.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Ut.prototype.hotUpdate=function(e){this._modules.update(e),ZE(this,!0)};Ut.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Ut.prototype,Bp);const yi=DF({state:{user:null},mutations:{setUser(t,e){t.user=e}},actions:{setUser({commit:t},e){t("setUser",e)}},getters:{getUser(t){return t.user}}});const OF=t=>(Md("data-v-137b010f"),t=t(),Ld(),t),PF={class:"container"},MF=OF(()=>T("h1",{class:"title has-text-centered is-1 mt-4"},"DASHBOARD",-1)),LF={class:"columns is-multiline is-centered"},FF={class:"card-header"},UF={class:"card-header-title"},VF={class:"card-content"},$F={class:"content"},BF={class:"image-container"},qF=["src"],jF={class:"card-footer"},KF={__name:"DashboardView",setup(t){const e=gs([]),n=yi.getters.getUser.role,r=Wr(Yn,"perguntas");Ki(()=>{s()});const s=async()=>{const o=Jt(r,Cp("data_criacao","desc"));(await ao(o)).forEach(c=>{e.value.push(c)})},i=async o=>{await xp(tr(r,o)),e.value=e.value.filter(a=>a.id!==o)};return(o,a)=>(Le(),je("div",PF,[MF,Ae(ye(ln),{to:"/nova-pergunta",style:{"margin-left":"10%"},class:"button has-text-centered mt-6 mb-6"},{default:un(()=>[Bt("Adicionar nova pergunta")]),_:1}),ye(n)=="admin"?(Le(),Bv(ye(ln),{key:0,style:{"margin-left":"2%"},to:"/threads",class:"button has-text-centered mt-6 mb-6"},{default:un(()=>[Bt("Trabalhos")]),_:1})):Ih("",!0),Ae(ye(ln),{to:"/logout",style:{"margin-left":"40%","background-color":"rgb(153, 4, 4)"},class:"button has-text-centered mt-6 mb-6"},{default:un(()=>[Bt("Sair")]),_:1}),T("div",LF,[(Le(!0),je(kt,null,Jo(e.value,c=>(Le(),je("div",{key:c.id,class:"card column is-one-fifth"},[T("header",FF,[T("p",UF,On(c.data().nome),1)]),T("div",VF,[T("div",$F,[T("h1",null,On(c.data().titulo),1),T("p",null,On(c.data().texto),1),T("div",BF,[T("img",{class:"image has-image-centered",src:c.data().url_imagem,alt:""},null,8,qF)])])]),T("footer",jF,[Ae(ye(ln),{to:{name:"editarPergunta",params:{idPergunta:c.id}},class:"card-footer-item"},{default:un(()=>[Bt("Editar")]),_:2},1032,["to"]),Ae(ye(ln),{to:"#",onClick:u=>i(c.id),class:"card-footer-item delete-link"},{default:un(()=>[Bt("Apagar")]),_:2},1032,["onClick"])])]))),128))])]))}},HF=Au(KF,[["__scopeId","data-v-137b010f"]]);const GF={class:"container"},WF=T("h1",{class:"title has-text-centered is-1 mt-4"},"Odonto App",-1),zF=T("h2",{class:"title"},"NOVA PERGUNTA",-1),QF={class:"field"},YF=T("label",{class:"label"},"Nome da pergunta",-1),JF={class:"control"},XF={class:"field"},ZF=T("label",{class:"label"},"Título",-1),eU={class:"control"},tU={class:"field"},nU=T("label",{class:"label"},"Conteúdo da pergunta",-1),rU={class:"control"},sU={class:"file has-name"},iU={class:"file-label"},oU=T("span",{class:"file-cta"},[T("span",{class:"file-icon"},[T("i",{class:"fas fa-upload"})]),T("span",{class:"file-label"}," Escolha uma imagem... ")],-1),aU={class:"file-name"},cU={class:"image-container"},uU=["src"],lU={class:"control is-expanded"},hU=["onUpdate:modelValue"],dU={class:"select"},fU=["onChange"],pU=T("option",{selected:""},"Seleciona a próxima pergunta",-1),mU=["value","selected"],gU={class:"control ml-3"},yU=["onClick"],vU={class:"control mt-5"},_U={class:"field is-grouped is-grouped-right mt-6"},wU={key:0,class:"control"},bU={key:1,class:"control"},IU={class:"control"},Ly={__name:"PerguntaView",setup(t){const e=qd(),n=ZA(),r=gs([]),s=gs({}),i=gs({nome:"",texto:"",titulo:"",url_imagem:"",nome_imagem_firestore:"",opcoes:[{opcao_texto:"",proxima_pergunta:""}]}),o=Wr(Yn,"perguntas");let a=null;Ki(()=>{n.params.idPergunta&&(a=n.params.idPergunta,d(a)),c()});const c=async()=>{(await ao(o)).forEach(b=>{r.value.push(b)})},u=(x,b)=>{i.value.opcoes[b].proxima_pergunta=x.target.value},l=x=>{i.value.opcoes.splice(x,1)},h=()=>{i.value.opcoes.push({opcao_texto:"",proxima_pergunta:""})},d=async x=>{const b=tr(Yn,"perguntas",x),D=await Rp(b);i.value=D.data(),s.value.url_imagem=D.data().url_imagem},p=async()=>{Object.keys(s.value).length>0&&await y(),i.value.data_criacao=Date.now(),await Np(o,i.value),e.push("/dashboard")},g=async()=>{"type"in s.value&&(await I(),await y());const x=tr(Yn,"perguntas",a);await ud(x,i.value),e.push("/dashboard")},y=async()=>{const x=s.value.type.split("/")[1],b=Date.now()+x,D=Dy(Oy,b);await YL(D,s.value).then(async()=>{i.value.url_imagem=await JL(D),i.value.nome_imagem_firestore=b})},I=async()=>{const x=Dy(Oy,i.value.nome_imagem_firestore);await XL(x)},S=x=>{const b=x.target.files[0];s.value=b,s.value.url_imagem=URL.createObjectURL(b)};return(x,b)=>(Le(),je("div",GF,[WF,zF,T("div",QF,[YF,T("div",JF,[jn(T("input",{class:"input",type:"text",placeholder:"Insira o nome da pergunta","onUpdate:modelValue":b[0]||(b[0]=D=>i.value.nome=D)},null,512),[[Kn,i.value.nome]])])]),T("div",XF,[ZF,T("div",eU,[jn(T("input",{class:"input",type:"text",placeholder:"Insira o título da pergunta","onUpdate:modelValue":b[1]||(b[1]=D=>i.value.titulo=D)},null,512),[[Kn,i.value.titulo]])])]),T("div",tU,[nU,T("div",rU,[jn(T("textarea",{class:"textarea",placeholder:"Digite aqui o conteúdo da pergunta","onUpdate:modelValue":b[2]||(b[2]=D=>i.value.texto=D)},null,512),[[Kn,i.value.texto]])])]),T("div",sU,[T("label",iU,[T("input",{class:"file-input",type:"file",name:"resume",onChange:b[3]||(b[3]=D=>S(D))},null,32),oU,T("span",aU,On(s.value.nome_imagem?s.value.nome_imagem:"..."),1)])]),T("div",cU,[T("img",{class:"image",src:s.value.url_imagem,alt:""},null,8,uU)]),(Le(!0),je(kt,null,Jo(i.value.opcoes,(D,G)=>(Le(),je("div",{key:G,class:"field is-grouped mt-5"},[T("div",lU,[jn(T("input",{class:"input",type:"text",placeholder:"Texto da opção","onUpdate:modelValue":Q=>D.opcao_texto=Q},null,8,hU),[[Kn,D.opcao_texto]])]),T("div",dU,[T("select",{onChange:Q=>u(Q,G)},[pU,(Le(!0),je(kt,null,Jo(r.value,Q=>(Le(),je("option",{key:Q.id,value:Q.id,selected:D.proxima_pergunta===Q.id},On(Q.data().nome),9,mU))),128))],40,fU)]),T("div",gU,[T("button",{class:"button",onClick:Q=>l(G)},"Remover opcao",8,yU)])]))),128)),T("div",vU,[T("button",{class:"button",onClick:b[4]||(b[4]=D=>h())},"Adicionar opcao")]),T("div",_U,[ye(n).params.idPergunta?Ih("",!0):(Le(),je("div",wU,[T("button",{onClick:b[5]||(b[5]=D=>p()),class:"button"},"Cadastrar")])),ye(n).params.idPergunta?(Le(),je("div",bU,[T("button",{onClick:b[6]||(b[6]=D=>g()),class:"button"},"Salvar Edicao")])):Ih("",!0),T("div",IU,[Ae(ye(ln),{to:"/dashboard",class:"button is-danger is-light"},{default:un(()=>[Bt("Cancelar")]),_:1})])])]))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EU{constructor(e,n){this._delegate=e,this.firebase=n,Vc(e,new gn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),__(this._delegate)))}_getService(e,n=Cr){var r;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((r=s.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:n})}_removeServiceInstance(e,n=Cr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Vc(this._delegate,e)}_addOrOverwriteComponent(e){v_(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TU={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Fy=new Fs("app-compat","Firebase",TU);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SU(t){const e={},n={__esModule:!0,initializeApp:i,app:s,registerVersion:Ht,setLogLevel:b_,onLog:w_,apps:null,SDK_VERSION:Vr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:Kk}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function s(u){if(u=u||Cr,!Bm(e,u))throw Fy.create("no-app",{appName:u});return e[u]}s.App=t;function i(u,l={}){const h=Ru(u,l);if(Bm(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(Xn(u)&&u.type==="PUBLIC"){const d=(p=s())=>{if(typeof p[h]!="function")throw Fy.create("invalid-app-argument",{appName:l});return p[h]()};u.serviceProps!==void 0&&Fc(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...p){return this._getService.bind(this,l).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?n[h]:null}function c(u,l){return l==="serverAuth"?null:l}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(){const t=SU(EU);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:aT,extendNamespace:e,createSubscribe:p_,ErrorFactory:Fs,deepExtend:Fc});function e(n){Fc(t,n)}return t}const AU=aT();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=new ku("@firebase/app-compat"),CU="@firebase/app-compat",kU="0.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RU(t){Ht(CU,kU,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(bC()&&self.firebase!==void 0){Uy.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Uy.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Cl=AU;RU();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xU=2e3;async function NU(t,e,n){var r;const{BuildInfo:s}=Ms();yn(e.sessionId,"AuthEvent did not contain a session ID");const i=await LU(e.sessionId),o={};return zi()?o.ibi=s.packageName:Aa()?o.apn=s.packageName:rt(t,"operation-not-supported-in-this-environment"),s.displayName&&(o.appDisplayName=s.displayName),o.sessionId=i,Dh(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function DU(t){const{BuildInfo:e}=Ms(),n={};zi()?n.iosBundleId=e.packageName:Aa()?n.androidPackageName=e.packageName:rt(t,"operation-not-supported-in-this-environment"),await mw(t,n)}function OU(t){const{cordova:e}=Ms();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let s=null;r?e.plugins.browsertab.openUrl(t):s=e.InAppBrowser.open(t,dR()?"_blank":"_system","location=yes"),n(s)})})}async function PU(t,e,n){const{cordova:r}=Ms();let s=()=>{};try{await new Promise((i,o)=>{let a=null;function c(){var h;i();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(dt(t,"redirect-cancelled-by-user"))},xU))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),Aa()&&document.addEventListener("visibilitychange",l,!1),s=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{s()}}function MU(t){var e,n,r,s,i,o,a,c,u,l;const h=Ms();O(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),O(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),O(typeof((i=(s=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||s===void 0?void 0:s.browsertab)===null||i===void 0?void 0:i.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function LU(t){const e=FU(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(s=>s.toString(16).padStart(2,"0")).join("")}function FU(t){if(yn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UU=20;class VU extends fw{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function $U(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:jU(),postBody:null,tenantId:t.tenantId,error:dt(t,"no-auth-event")}}function BU(t,e){return dd()._set(fd(t),e)}async function Vy(t){const e=await dd()._get(fd(t));return e&&await dd()._remove(fd(t)),e}function qU(t,e){var n,r;const s=HU(e);if(s.includes("/__/auth/callback")){const i=Rc(s),o=i.firebaseError?KU(decodeURIComponent(i.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],c=a?dt(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:s,postBody:null}}return null}function jU(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<UU;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function dd(){return jt(Uu)}function fd(t){return _s("authEvent",t.config.apiKey,t.name)}function KU(t){try{return JSON.parse(t)}catch{return null}}function HU(t){const e=Rc(t),n=e.link?decodeURIComponent(e.link):void 0,r=Rc(n).link,s=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Rc(s).link||s||r||n||t}function Rc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return ii(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GU=500;class WU{constructor(){this._redirectPersistence=Rr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=qu,this._overrideRedirectResult=cf}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new VU(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){rt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,s){MU(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),a1(),await this._originValidation(e);const o=$U(e,r,s);await BU(e,o);const a=await NU(e,o,n),c=await OU(a);return PU(e,i,c)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DU(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:s,BuildInfo:i}=Ms(),o=setTimeout(async()=>{await Vy(e),n.onEvent($y())},GU),a=async l=>{clearTimeout(o);const h=await Vy(e);let d=null;h&&(l!=null&&l.url)&&(d=qU(h,l.url)),n.onEvent(d||$y())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=s,u=`${i.packageName.toLowerCase()}://`;Ms().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const zU=WU;function $y(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:dt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QU(t,e){st(t)._logFramework(e)}var YU="@firebase/auth-compat",JU="0.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XU=1e3;function Go(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function ZU(){return Go()==="http:"||Go()==="https:"}function cT(t=Fe()){return!!((Go()==="file:"||Go()==="ionic:"||Go()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function eV(){return jd()||Cu()}function tV(){return u_()&&(document==null?void 0:document.documentMode)===11}function nV(t=Fe()){return/Edge\/\d+/.test(t)}function rV(t=Fe()){return tV()||nV(t)}function uT(){try{const t=self.localStorage,e=Ca();if(t)return t.setItem(e,"1"),t.removeItem(e),rV()?ta():!0}catch{return qp()&&ta()}return!1}function qp(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function ch(){return(ZU()||c_()||cT())&&!eV()&&uT()&&!qp()}function lT(){return cT()&&typeof document<"u"}async function sV(){return lT()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},XU);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function iV(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t={LOCAL:"local",NONE:"none",SESSION:"session"},Io=O,hT="persistence";function oV(t,e){if(Io(Object.values($t).includes(e),t,"invalid-persistence-type"),jd()){Io(e!==$t.SESSION,t,"unsupported-persistence-type");return}if(Cu()){Io(e===$t.NONE,t,"unsupported-persistence-type");return}if(qp()){Io(e===$t.NONE||e===$t.LOCAL&&ta(),t,"unsupported-persistence-type");return}Io(e===$t.NONE||uT(),t,"unsupported-persistence-type")}async function pd(t){await t._initializationPromise;const e=dT(),n=_s(hT,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function aV(t,e){const n=dT();if(!n)return[];const r=_s(hT,t,e);switch(n.getItem(r)){case $t.NONE:return[Ei];case $t.LOCAL:return[Si,Rr];case $t.SESSION:return[Rr];default:return[]}}function dT(){var t;try{return((t=iV())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cV=O;class wr{constructor(){this.browserResolver=jt(gw),this.cordovaResolver=jt(zU),this.underlyingResolver=null,this._redirectPersistence=Rr,this._completeRedirectFn=qu,this._overrideRedirectResult=cf}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,s)}async _openRedirect(e,n,r,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,s)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return lT()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return cV(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await sV();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(t){return t.unwrap()}function uV(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lV(t){return pT(t)}function hV(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const s=e;s.resolver=new dV(t,hx(t,e))}else if(r){const s=pT(e),i=e;s&&(i.credential=s,i.tenantId=r.tenantId||void 0,i.email=r.email||void 0,i.phoneNumber=r.phoneNumber||void 0)}}function pT(t){const{_tokenResponse:e}=t instanceof wt?t.customData:t;if(!e)return null;if(!(t instanceof wt)&&"temporaryProof"in e&&"phoneNumber"in e)return Pn.credentialFromResult(t);const n=e.providerId;if(!n||n===fo.PASSWORD)return null;let r;switch(n){case fo.GOOGLE:r=Sn;break;case fo.FACEBOOK:r=Tn;break;case fo.GITHUB:r=An;break;case fo.TWITTER:r=Cn;break;default:const{oauthIdToken:s,oauthAccessToken:i,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!i&&!o&&!s&&!a?null:a?n.startsWith("saml.")?Ti._create(n,a):Fn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:s,accessToken:i}):new fi(n).credential({idToken:s,accessToken:i,rawNonce:c})}return t instanceof wt?r.credentialFromError(t):r.credentialFromResult(t)}function Pt(t,e){return e.catch(n=>{throw n instanceof wt&&hV(t,n),n}).then(n=>{const r=n.operationType,s=n.user;return{operationType:r,credential:lV(n),additionalUserInfo:cx(n),user:Wn.getOrCreate(s)}})}async function md(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Pt(t,n.confirm(r))}}class dV{constructor(e,n){this.resolver=n,this.auth=uV(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Pt(fT(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this._delegate=e,this.multiFactor=mx(e)}static getOrCreate(e){return Wn.USER_MAP.has(e)||Wn.USER_MAP.set(e,new Wn(e)),Wn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Pt(this.auth,z_(this._delegate,e))}async linkWithPhoneNumber(e,n){return md(this.auth,zx(this._delegate,e,n))}async linkWithPopup(e){return Pt(this.auth,r1(this._delegate,e,wr))}async linkWithRedirect(e){return await pd(st(this.auth)),d1(this._delegate,e,wr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Pt(this.auth,Q_(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return md(this.auth,Qx(this._delegate,e,n))}reauthenticateWithPopup(e){return Pt(this.auth,n1(this._delegate,e,wr))}async reauthenticateWithRedirect(e){return await pd(st(this.auth)),l1(this._delegate,e,wr)}sendEmailVerification(e){return JR(this._delegate,e)}async unlink(e){return await VR(this._delegate,e),this}updateEmail(e){return tx(this._delegate,e)}updatePassword(e){return nx(this._delegate,e)}updatePhoneNumber(e){return Yx(this._delegate,e)}updateProfile(e){return ex(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return XR(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Wn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=O;class gd{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Eo(r,"invalid-api-key",{appName:e.name}),Eo(r,"invalid-api-key",{appName:e.name});const s=typeof window<"u"?wr:void 0;this._delegate=n.initialize({options:{persistence:fV(r,e.name),popupRedirectResolver:s}}),this._delegate._updateErrorMap(Gk),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Wn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){V_(this._delegate,e,n)}applyActionCode(e){return KR(this._delegate,e)}checkActionCode(e){return Y_(this._delegate,e)}confirmPasswordReset(e,n){return jR(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Pt(this._delegate,J_(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return YR(this._delegate,e)}isSignInWithEmailLink(e){return WR(this._delegate,e)}async getRedirectResult(){Eo(ch(),this._delegate,"operation-not-supported-in-this-environment");const e=await p1(this._delegate,wr);return e?Pt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){QU(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:s,error:i,complete:o}=By(e,n,r);return this._delegate.onAuthStateChanged(s,i,o)}onIdTokenChanged(e,n,r){const{next:s,error:i,complete:o}=By(e,n,r);return this._delegate.onIdTokenChanged(s,i,o)}sendSignInLinkToEmail(e,n){return GR(this._delegate,e,n)}sendPasswordResetEmail(e,n){return qR(this._delegate,e,n||void 0)}async setPersistence(e){oV(this._delegate,e);let n;switch(e){case $t.SESSION:n=Rr;break;case $t.LOCAL:n=await jt(Si)._isAvailable()?Si:Uu;break;case $t.NONE:n=Ei;break;default:return rt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Pt(this._delegate,UR(this._delegate))}signInWithCredential(e){return Pt(this._delegate,Mu(this._delegate,e))}signInWithCustomToken(e){return Pt(this._delegate,BR(this._delegate,e))}signInWithEmailAndPassword(e,n){return Pt(this._delegate,ef(this._delegate,e,n))}signInWithEmailLink(e,n){return Pt(this._delegate,zR(this._delegate,e,n))}signInWithPhoneNumber(e,n){return md(this._delegate,Wx(this._delegate,e,n))}async signInWithPopup(e){return Eo(ch(),this._delegate,"operation-not-supported-in-this-environment"),Pt(this._delegate,t1(this._delegate,e,wr))}async signInWithRedirect(e){return Eo(ch(),this._delegate,"operation-not-supported-in-this-environment"),await pd(this._delegate),c1(this._delegate,e,wr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return HR(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}gd.Persistence=$t;function By(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const s=r;return{next:o=>s(o&&Wn.getOrCreate(o)),error:e,complete:n}}function fV(t,e){const n=aV(t,e);if(typeof self<"u"&&!n.includes(Si)&&n.push(Si),typeof window<"u")for(const r of[Uu,Rr])n.includes(r)||n.push(r);return n.includes(Ei)||n.push(Ei),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(){this.providerId="phone",this._delegate=new Pn(fT(Cl.auth()))}static credential(e,n){return Pn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}jp.PHONE_SIGN_IN_METHOD=Pn.PHONE_SIGN_IN_METHOD;jp.PROVIDER_ID=Pn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pV=O;class mV{constructor(e,n,r=Cl.app()){var s;pV((s=r.options)===null||s===void 0?void 0:s.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new Hx(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gV="auth-compat";function yV(t){t.INTERNAL.registerComponent(new gn(gV,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new gd(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ys.EMAIL_SIGNIN,PASSWORD_RESET:Ys.PASSWORD_RESET,RECOVER_EMAIL:Ys.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ys.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ys.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ys.VERIFY_EMAIL}},EmailAuthProvider:$r,FacebookAuthProvider:Tn,GithubAuthProvider:An,GoogleAuthProvider:Sn,OAuthProvider:fi,SAMLAuthProvider:$c,PhoneAuthProvider:jp,PhoneMultiFactorGenerator:yw,RecaptchaVerifier:mV,TwitterAuthProvider:Cn,Auth:gd,AuthCredential:Qi,Error:wt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(YU,JU)}yV(Cl);const vV="@firebase/firestore-compat",_V="0.3.0";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new C("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(){if(typeof Uint8Array>"u")throw new C("unimplemented","Uint8Arrays are not available in this environment.")}function jy(){if(!gD())throw new C("unimplemented","Blobs are unavailable in Firestore in this environment.")}let hu=class{constructor(e){this._delegate=e}static fromBase64String(e){return jy(),new hu(Vn.fromBase64String(e))}static fromUint8Array(e){return qy(),new hu(Vn.fromUint8Array(e))}toBase64(){return jy(),this._delegate.toBase64()}toUint8Array(){return qy(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(t){return wV(t,["next","error","complete"])}function wV(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bV{enableIndexedDbPersistence(e,n){return iM(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return oM(e._delegate)}clearIndexedDbPersistence(e){return aM(e._delegate)}}class mT{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Nr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Ci("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){aE(this._delegate,e,n,r)}enableNetwork(){return uM(this._delegate)}disableNetwork(){return lM(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,iE("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return cM(this._delegate)}onSnapshotsInSync(e){return DM(this._delegate,e)}get app(){if(!this._appCompat)throw new C("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Vi(this,Wr(this._delegate,e))}catch(n){throw Ct(n,"collection()","Firestore.collection()")}}doc(e){try{return new Zt(this,tr(this._delegate,e))}catch(n){throw Ct(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new At(this,qP(this._delegate,e))}catch(n){throw Ct(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return LM(this._delegate,n=>e(new gT(this,n)))}batch(){return ct(this._delegate),new yT(new PM(this._delegate,e=>Qa(this._delegate,e)))}loadBundle(e){return hM(this._delegate,e)}namedQuery(e){return dM(this._delegate,e).then(n=>n?new At(this,n):null)}}class kl extends kp{constructor(e){super(),this.firestore=e}convertBytes(e){return new hu(new Vn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Zt.forKey(n,this.firestore,null)}}function IV(t){ZN(t)}class gT{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new kl(e)}get(e){const n=ps(e);return this._delegate.get(n).then(r=>new Ea(this._firestore,new nr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const s=ps(e);return r?(Kp("Transaction.set",r),this._delegate.set(s,n,r)):this._delegate.set(s,n),this}update(e,n,r,...s){const i=ps(e);return arguments.length===2?this._delegate.update(i,n):this._delegate.update(i,n,r,...s),this}delete(e){const n=ps(e);return this._delegate.delete(n),this}}class yT{constructor(e){this._delegate=e}set(e,n,r){const s=ps(e);return r?(Kp("WriteBatch.set",r),this._delegate.set(s,n,r)):this._delegate.set(s,n),this}update(e,n,r,...s){const i=ps(e);return arguments.length===2?this._delegate.update(i,n):this._delegate.update(i,n,r,...s),this}delete(e){const n=ps(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Ls{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Ko(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ta(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Ls.INSTANCES;let s=r.get(e);s||(s=new WeakMap,r.set(e,s));let i=s.get(n);return i||(i=new Ls(e,new kl(e),n),s.set(n,i)),i}}Ls.INSTANCES=new WeakMap;class Zt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new kl(e)}static forPath(e,n,r){if(e.length%2!==0)throw new C("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Zt(n,new xe(n._delegate,r,new L(e)))}static forKey(e,n,r){return new Zt(n,new xe(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Vi(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Vi(this.firestore,Wr(this._delegate,e))}catch(n){throw Ct(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=j(e),e instanceof xe?cE(this._delegate,e):!1}set(e,n){n=Kp("DocumentReference.set",n);try{return n?Ay(this._delegate,e,n):Ay(this._delegate,e)}catch(r){throw Ct(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?ud(this._delegate,e):ud(this._delegate,e,n,...r)}catch(s){throw Ct(s,"updateDoc()","DocumentReference.update()")}}delete(){return xp(this._delegate)}onSnapshot(...e){const n=vT(e),r=_T(e,s=>new Ea(this.firestore,new nr(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return DE(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=kM(this._delegate):(e==null?void 0:e.source)==="server"?n=RM(this._delegate):n=Rp(this._delegate),n.then(r=>new Ea(this.firestore,new nr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Zt(this.firestore,e?this._delegate.withConverter(Ls.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ct(t,e,n){return t.message=t.message.replace(e,n),t}function vT(t){for(const e of t)if(typeof e=="object"&&!yd(e))return e;return{}}function _T(t,e){var n,r;let s;return yd(t[0])?s=t[0]:yd(t[1])?s=t[1]:typeof t[0]=="function"?s={next:t[0],error:t[1],complete:t[2]}:s={next:t[1],error:t[2],complete:t[3]},{next:i=>{s.next&&s.next(e(i))},error:(n=s.error)===null||n===void 0?void 0:n.bind(s),complete:(r=s.complete)===null||r===void 0?void 0:r.bind(s)}}class Ea{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Zt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return NE(this._delegate,e._delegate)}}class Ta extends Ea{data(e){const n=this._delegate.data(e);return eD(n!==void 0),n}}class At{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new kl(e)}where(e,n,r){try{return new At(this.firestore,Jt(this._delegate,Tp(e,n,r)))}catch(s){throw Ct(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new At(this.firestore,Jt(this._delegate,Cp(e,n)))}catch(r){throw Ct(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new At(this.firestore,Jt(this._delegate,CE(e)))}catch(n){throw Ct(n,"limit()","Query.limit()")}}limitToLast(e){try{return new At(this.firestore,Jt(this._delegate,bM(e)))}catch(n){throw Ct(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new At(this.firestore,Jt(this._delegate,IM(...e)))}catch(n){throw Ct(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new At(this.firestore,Jt(this._delegate,EM(...e)))}catch(n){throw Ct(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new At(this.firestore,Jt(this._delegate,TM(...e)))}catch(n){throw Ct(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new At(this.firestore,Jt(this._delegate,SM(...e)))}catch(n){throw Ct(n,"endAt()","Query.endAt()")}}isEqual(e){return uE(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=xM(this._delegate):(e==null?void 0:e.source)==="server"?n=NM(this._delegate):n=ao(this._delegate),n.then(r=>new vd(this.firestore,new Fr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=vT(e),r=_T(e,s=>new vd(this.firestore,new Fr(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return DE(this._delegate,n,r)}withConverter(e){return new At(this.firestore,e?this._delegate.withConverter(Ls.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class EV{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Ta(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class vd{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new At(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ta(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new EV(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Ta(this._firestore,r))})}isEqual(e){return NE(this._delegate,e._delegate)}}class Vi extends At{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Zt(this.firestore,e):null}doc(e){try{return e===void 0?new Zt(this.firestore,tr(this._delegate)):new Zt(this.firestore,tr(this._delegate,e))}catch(n){throw Ct(n,"doc()","CollectionReference.doc()")}}add(e){return Np(this._delegate,e).then(n=>new Zt(this.firestore,n))}isEqual(e){return cE(this._delegate,e._delegate)}withConverter(e){return new Vi(this.firestore,e?this._delegate.withConverter(Ls.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ps(t){return me(t,xe)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(...e){this._delegate=new Lr(...e)}static documentId(){return new Hp(He.keyField().canonicalString())}isEqual(e){return e=j(e),e instanceof Lr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this._delegate=e}static serverTimestamp(){const e=UM();return e._methodName="FieldValue.serverTimestamp",new cs(e)}static delete(){const e=FM();return e._methodName="FieldValue.delete",new cs(e)}static arrayUnion(...e){const n=VM(...e);return n._methodName="FieldValue.arrayUnion",new cs(n)}static arrayRemove(...e){const n=$M(...e);return n._methodName="FieldValue.arrayRemove",new cs(n)}static increment(e){const n=BM(e);return n._methodName="FieldValue.increment",new cs(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TV={Firestore:mT,GeoPoint:gl,Timestamp:Oe,Blob:hu,Transaction:gT,WriteBatch:yT,DocumentReference:Zt,DocumentSnapshot:Ea,Query:At,QueryDocumentSnapshot:Ta,QuerySnapshot:vd,CollectionReference:Vi,FieldPath:Hp,FieldValue:cs,setLogLevel:IV,CACHE_SIZE_UNLIMITED:rM};function SV(t,e){t.INTERNAL.registerComponent(new gn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),s=n.getProvider("firestore").getImmediate();return e(r,s)},"PUBLIC").setServiceProps(Object.assign({},TV)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AV(t){SV(t,(e,n)=>new mT(e,n,new bV)),t.registerVersion(vV,_V)}AV(Cl);const CV={class:"container"},kV=T("br",null,null,-1),RV=T("h4",{class:"title"},"Registre-se",-1),xV={class:"registerForm"},NV=["onSubmit"],DV={class:"field"},OV=T("label",{class:"label"},"Nome",-1),PV={class:"control"},MV={class:"field"},LV=T("label",{class:"label"},"Email",-1),FV={class:"control"},UV={class:"field"},VV=T("label",{class:"label"},"Senha",-1),$V={class:"control"},BV=T("div",{style:{display:"flex"}},[T("button",{class:"button is-primary login",type:"submit"},"Registrar"),T("p",{style:{padding:"2%"}},[Bt("Já possui um cadastro? "),T("a",{href:"signin"},"Entrar")])],-1),qV={__name:"RegisterView",setup(t){let e=Ur({name:"",email:"",password:""});const n=lf(),r=JE(),s=qd(),i=async()=>{try{const c=(await J_(n,e.email,e.password)).user,u=JSON.parse(JSON.stringify(c)),l=Wr(Yn,"users");u.displayName=e.name,u.role="user",await Np(l,u),console.log("Usuário criado:",c),o(e.email,e.password)}catch(a){console.log(a)}},o=async(a,c)=>{try{const l=(await ef(n,a,c)).user;console.log("Usuário logado:",l),r.dispatch("setUser",l),s.push("/threads")}catch(u){console.log(u)}};return(a,c)=>(Le(),je("div",CV,[kV,RV,T("div",xV,[T("form",{class:"box mt-5",onSubmit:Gv(i,["prevent"])},[T("div",DV,[OV,T("div",PV,[jn(T("input",{class:"input",type:"text","onUpdate:modelValue":c[0]||(c[0]=u=>ye(e).name=u),placeholder:""},null,512),[[Kn,ye(e).name]])])]),T("div",MV,[LV,T("div",FV,[jn(T("input",{class:"input",type:"email","onUpdate:modelValue":c[1]||(c[1]=u=>ye(e).email=u),placeholder:"e.g. alex@example.com"},null,512),[[Kn,ye(e).email]])])]),T("div",UV,[VV,T("div",$V,[jn(T("input",{class:"input",type:"password","onUpdate:modelValue":c[2]||(c[2]=u=>ye(e).password=u),placeholder:"********"},null,512),[[Kn,ye(e).password]])])]),BV],40,NV)])]))}};var jV=function(t){return function(e){return!!e&&typeof e=="object"}(t)&&!function(e){var n=Object.prototype.toString.call(e);return n==="[object RegExp]"||n==="[object Date]"||function(r){return r.$$typeof===KV}(e)}(t)},KV=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function No(t,e){return e.clone!==!1&&e.isMergeableObject(t)?$i(Array.isArray(t)?[]:{},t,e):t}function HV(t,e,n){return t.concat(e).map(function(r){return No(r,n)})}function Ky(t){return Object.keys(t).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(n){return e.propertyIsEnumerable(n)}):[]}(t))}function Hy(t,e){try{return e in t}catch{return!1}}function $i(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||HV,n.isMergeableObject=n.isMergeableObject||jV,n.cloneUnlessOtherwiseSpecified=No;var r=Array.isArray(e);return r===Array.isArray(t)?r?n.arrayMerge(t,e,n):function(s,i,o){var a={};return o.isMergeableObject(s)&&Ky(s).forEach(function(c){a[c]=No(s[c],o)}),Ky(i).forEach(function(c){(function(u,l){return Hy(u,l)&&!(Object.hasOwnProperty.call(u,l)&&Object.propertyIsEnumerable.call(u,l))})(s,c)||(a[c]=Hy(s,c)&&o.isMergeableObject(i[c])?function(u,l){if(!l.customMerge)return $i;var h=l.customMerge(u);return typeof h=="function"?h:$i}(c,o)(s[c],i[c],o):No(i[c],o))}),a}(t,e,n):No(e,n)}$i.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,r){return $i(n,r,e)},{})};var GV=$i;function wT(t){var e=(t=t||{}).storage||window&&window.localStorage,n=t.key||"vuex";function r(l,h){var d=h.getItem(l);try{return typeof d=="string"?JSON.parse(d):typeof d=="object"?d:void 0}catch{}}function s(){return!0}function i(l,h,d){return d.setItem(l,JSON.stringify(h))}function o(l,h){return Array.isArray(h)?h.reduce(function(d,p){return function(I,S,x,b){return!/^(__proto__|constructor|prototype)$/.test(S)&&((S=S.split?S.split("."):S.slice(0)).slice(0,-1).reduce(function(D,G){return D[G]=D[G]||{}},I)[S.pop()]=x),I}(d,p,(g=l,(g=((y=p).split?y.split("."):y).reduce(function(I,S){return I&&I[S]},g))===void 0?void 0:g));var g,y},{}):l}function a(l){return function(h){return l.subscribe(h)}}(t.assertStorage||function(){e.setItem("@@",1),e.removeItem("@@")})(e);var c,u=function(){return(t.getState||r)(n,e)};return t.fetchBeforeUse&&(c=u()),function(l){t.fetchBeforeUse||(c=u()),typeof c=="object"&&c!==null&&(l.replaceState(t.overwrite?c:GV(l.state,c,{arrayMerge:t.arrayMerger||function(h,d){return d},clone:!1})),(t.rehydrated||function(){})(l)),(t.subscriber||a)(l)(function(h,d){(t.filter||s)(h)&&(t.setState||i)(n,(t.reducer||o)(d,t.paths),e)})}}const WV={class:"container"},zV=T("br",null,null,-1),QV=T("h4",{class:"title"},"Entrar",-1),YV={class:"registerForm"},JV=["onSubmit"],XV={class:"field"},ZV=T("label",{class:"label"},"Email",-1),e$={class:"control"},t$={class:"field"},n$=T("label",{class:"label"},"Senha",-1),r$={class:"control"},s$=T("div",{style:{display:"flex"}},[T("button",{class:"button is-primary login",type:"submit"},"Entrar"),T("p",{style:{padding:"2%"}},[Bt("Não possui cadastro? "),T("a",{href:"register"},"Registrar-se")])],-1),i$={__name:"SigninView",setup(t){const e=lf(),n=qd(),r=JE();let s=Ur({name:"",email:"",password:""});const i=async()=>{const o=Wr(Yn,"users");try{const a=await ef(e,s.email,s.password),c=JSON.parse(JSON.stringify(a.user));console.log(c.uid);let u=Jt(o,Tp("uid","==",c.uid));const h=(await ao(u)).docs[0].data();console.log("Usuário logado:",h),r.dispatch("setUser",h),n.push("/threads")}catch(a){console.log(a)}};return wT()(r),(o,a)=>(Le(),je("div",WV,[zV,QV,T("div",YV,[T("form",{class:"box mt-5",onSubmit:Gv(i,["prevent"])},[T("div",XV,[ZV,T("div",e$,[jn(T("input",{class:"input",type:"email","onUpdate:modelValue":a[0]||(a[0]=c=>ye(s).email=c),placeholder:"e.g. alex@example.com"},null,512),[[Kn,ye(s).email]])])]),T("div",t$,[n$,T("div",r$,[jn(T("input",{class:"input",type:"password","onUpdate:modelValue":a[1]||(a[1]=c=>ye(s).password=c),placeholder:"********"},null,512),[[Kn,ye(s).password]])])]),s$],40,JV)])]))}};const o$=t=>(Md("data-v-ab6c3483"),t=t(),Ld(),t),a$={class:"container"},c$=o$(()=>T("h1",{class:"title has-text-centered is-1 mt-4"},"Trabalhos",-1)),u$={class:"columns is-multiline is-centered"},l$={class:"card-header"},h$={class:"card-header-title"},d$={class:"card-content"},f$={class:"content"},p$={class:"image-container"},m$=["src"],g$={class:"card-footer"},y$={__name:"ThreadsView",setup(t){const e=gs([]),n=Wr(Yn,"perguntas");Ki(()=>{r()});const r=async()=>{const i=Jt(n,Cp("data_criacao","desc"));(await ao(i)).forEach(a=>{e.value.push(a)})},s=async i=>{await xp(tr(n,i)),e.value=e.value.filter(o=>o.id!==i)};return(i,o)=>(Le(),je("div",a$,[c$,Ae(ye(ln),{to:"/nova-pergunta",style:{"margin-left":"10%"},class:"button has-text-centered mt-6 mb-6"},{default:un(()=>[Bt("Adicionar novo trabalho")]),_:1}),Ae(ye(ln),{to:"/logout",style:{"margin-left":"50%","background-color":"rgb(153, 4, 4)"},class:"button has-text-centered mt-6 mb-6"},{default:un(()=>[Bt("Sair")]),_:1}),T("div",u$,[(Le(!0),je(kt,null,Jo(e.value,a=>(Le(),je("div",{key:a.id,class:"card column is-one-fifth"},[T("header",l$,[T("p",h$,On(a.data().nome),1)]),T("div",d$,[T("div",f$,[T("h1",null,On(a.data().titulo),1),T("p",null,On(a.data().texto),1),T("div",p$,[T("img",{class:"image has-image-centered",src:a.data().url_imagem,alt:""},null,8,m$)])])]),T("footer",g$,[Ae(ye(ln),{to:"/dashboard",class:"card-footer-item"},{default:un(()=>[Bt("Editar")]),_:1}),Ae(ye(ln),{to:"#",onClick:c=>s(a.id),class:"card-footer-item delete-link"},{default:un(()=>[Bt("Apagar")]),_:2},1032,["onClick"])])]))),128))])]))}},v$=Au(y$,[["__scopeId","data-v-ab6c3483"]]),_$=lf(),w$=JA({history:mA("/tcc-odonto/"),routes:[{path:"",name:"questionario",component:mF},{path:"/dashboard",name:"dashboard",component:HF,beforeEnter:(t,e,n)=>{yi.getters.getUser?n():n("/register")}},{path:"/register",name:"register",component:qV},{path:"/threads",name:"ThreadsView",component:v$,beforeEnter:(t,e,n)=>{yi.getters.getUser?n():n("/dashboard")}},{path:"/signin",name:"signin",component:i$},{path:"/nova-pergunta",name:"novaPergunta",component:Ly},{path:"/editar-pergunta/:idPergunta",name:"editarPergunta",component:Ly},{path:"/logout",name:"logout",beforeEnter:async(t,e,n)=>{await _$.signOut(),yi.dispatch("setUser",null),n("signin")}}]});wT()(yi);const Gp=qS(gC);Gp.use(w$);Gp.use(yi);Gp.mount("#app");
