(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Nd(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Dd(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Je(r)?LT(r):Dd(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Je(t))return t;if(Ae(t))return t}}const OT=/;(?![^(]*\))/g,PT=/:([^]+)/,MT=/\/\*.*?\*\//gs;function LT(t){const e={};return t.replace(MT,"").split(OT).forEach(n=>{if(n){const r=n.split(PT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Od(t){let e="";if(Je(t))e=t;else if(ee(t))for(let n=0;n<t.length;n++){const r=Od(t[n]);r&&(e+=r+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const FT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",UT=Nd(FT);function Xy(t){return!!t||t===""}function VT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=bu(t[r],e[r]);return n}function bu(t,e){if(t===e)return!0;let n=tm(t),r=tm(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Qo(t),r=Qo(e),n||r)return t===e;if(n=ee(t),r=ee(e),n||r)return n&&r?VT(t,e):!1;if(n=Ae(t),r=Ae(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!bu(t[o],e[o]))return!1}}return String(t)===String(e)}function Zy(t,e){return t.findIndex(n=>bu(n,e))}const Ln=t=>Je(t)?t:t==null?"":ee(t)||Ae(t)&&(t.toString===nv||!ie(t.toString))?JSON.stringify(t,ev,2):String(t),ev=(t,e)=>e&&e.__v_isRef?ev(t,e.value):fi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Eu(e)?{[`Set(${e.size})`]:[...e.values()]}:Ae(e)&&!ee(e)&&!rv(e)?String(e):e,xe={},di=[],fn=()=>{},$T=()=>!1,BT=/^on[^a-z]/,Iu=t=>BT.test(t),Pd=t=>t.startsWith("onUpdate:"),Tt=Object.assign,Md=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},qT=Object.prototype.hasOwnProperty,fe=(t,e)=>qT.call(t,e),ee=Array.isArray,fi=t=>Ra(t)==="[object Map]",Eu=t=>Ra(t)==="[object Set]",tm=t=>Ra(t)==="[object Date]",ie=t=>typeof t=="function",Je=t=>typeof t=="string",Qo=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",tv=t=>Ae(t)&&ie(t.then)&&ie(t.catch),nv=Object.prototype.toString,Ra=t=>nv.call(t),jT=t=>Ra(t).slice(8,-1),rv=t=>Ra(t)==="[object Object]",Ld=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wc=Nd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tu=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},KT=/-(\w)/g,$n=Tu(t=>t.replace(KT,(e,n)=>n?n.toUpperCase():"")),HT=/\B([A-Z])/g,Hi=Tu(t=>t.replace(HT,"-$1").toLowerCase()),Su=Tu(t=>t.charAt(0).toUpperCase()+t.slice(1)),jl=Tu(t=>t?`on${Su(t)}`:""),Yo=(t,e)=>!Object.is(t,e),bc=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Mc=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Lc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nm;const GT=()=>nm||(nm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let En;class sv{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=En,!e&&En&&(this.index=(En.scopes||(En.scopes=[])).push(this)-1)}run(e){if(this.active){const n=En;try{return En=this,e()}finally{En=n}}}on(){En=this}off(){En=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function WT(t){return new sv(t)}function zT(t,e=En){e&&e.active&&e.effects.push(t)}const Fd=t=>{const e=new Set(t);return e.w=0,e.n=0,e},iv=t=>(t.w&Rr)>0,ov=t=>(t.n&Rr)>0,QT=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Rr},YT=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];iv(s)&&!ov(s)?s.delete(t):e[n++]=s,s.w&=~Rr,s.n&=~Rr}e.length=n}},Eh=new WeakMap;let ko=0,Rr=1;const Th=30;let un;const _s=Symbol(""),Sh=Symbol("");class Ud{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,zT(this,r)}run(){if(!this.active)return this.fn();let e=un,n=Sr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=un,un=this,Sr=!0,Rr=1<<++ko,ko<=Th?QT(this):rm(this),this.fn()}finally{ko<=Th&&YT(this),Rr=1<<--ko,un=this.parent,Sr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){un===this?this.deferStop=!0:this.active&&(rm(this),this.onStop&&this.onStop(),this.active=!1)}}function rm(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Sr=!0;const av=[];function Gi(){av.push(Sr),Sr=!1}function Wi(){const t=av.pop();Sr=t===void 0?!0:t}function Qt(t,e,n){if(Sr&&un){let r=Eh.get(t);r||Eh.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Fd()),cv(s)}}function cv(t,e){let n=!1;ko<=Th?ov(t)||(t.n|=Rr,n=!iv(t)):n=!t.has(un),n&&(t.add(un),un.deps.push(t))}function er(t,e,n,r,s,i){const o=Eh.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ee(t)){const c=Lc(r);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ee(t)?Ld(n)&&a.push(o.get("length")):(a.push(o.get(_s)),fi(t)&&a.push(o.get(Sh)));break;case"delete":ee(t)||(a.push(o.get(_s)),fi(t)&&a.push(o.get(Sh)));break;case"set":fi(t)&&a.push(o.get(_s));break}if(a.length===1)a[0]&&kh(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);kh(Fd(c))}}function kh(t,e){const n=ee(t)?t:[...t];for(const r of n)r.computed&&sm(r);for(const r of n)r.computed||sm(r)}function sm(t,e){(t!==un||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const JT=Nd("__proto__,__v_isRef,__isVue"),uv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qo)),XT=Vd(),ZT=Vd(!1,!0),e0=Vd(!0),im=t0();function t0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ge(this);for(let i=0,o=this.length;i<o;i++)Qt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ge)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Gi();const r=ge(this)[e].apply(this,n);return Wi(),r}}),t}function Vd(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?y0:pv:e?fv:dv).get(r))return r;const o=ee(r);if(!t&&o&&fe(im,s))return Reflect.get(im,s,i);const a=Reflect.get(r,s,i);return(Qo(s)?uv.has(s):JT(s))||(t||Qt(r,"get",s),e)?a:wt(a)?o&&Ld(s)?a:a.value:Ae(a)?t?mv(a):qr(a):a}}const n0=lv(),r0=lv(!0);function lv(t=!1){return function(n,r,s,i){let o=n[r];if(Ii(o)&&wt(o)&&!wt(s))return!1;if(!t&&(!Fc(s)&&!Ii(s)&&(o=ge(o),s=ge(s)),!ee(n)&&wt(o)&&!wt(s)))return o.value=s,!0;const a=ee(n)&&Ld(r)?Number(r)<n.length:fe(n,r),c=Reflect.set(n,r,s,i);return n===ge(i)&&(a?Yo(s,o)&&er(n,"set",r,s):er(n,"add",r,s)),c}}function s0(t,e){const n=fe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&er(t,"delete",e,void 0),r}function i0(t,e){const n=Reflect.has(t,e);return(!Qo(e)||!uv.has(e))&&Qt(t,"has",e),n}function o0(t){return Qt(t,"iterate",ee(t)?"length":_s),Reflect.ownKeys(t)}const hv={get:XT,set:n0,deleteProperty:s0,has:i0,ownKeys:o0},a0={get:e0,set(t,e){return!0},deleteProperty(t,e){return!0}},c0=Tt({},hv,{get:ZT,set:r0}),$d=t=>t,ku=t=>Reflect.getPrototypeOf(t);function nc(t,e,n=!1,r=!1){t=t.__v_raw;const s=ge(t),i=ge(e);n||(e!==i&&Qt(s,"get",e),Qt(s,"get",i));const{has:o}=ku(s),a=r?$d:n?jd:Jo;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function rc(t,e=!1){const n=this.__v_raw,r=ge(n),s=ge(t);return e||(t!==s&&Qt(r,"has",t),Qt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function sc(t,e=!1){return t=t.__v_raw,!e&&Qt(ge(t),"iterate",_s),Reflect.get(t,"size",t)}function om(t){t=ge(t);const e=ge(this);return ku(e).has.call(e,t)||(e.add(t),er(e,"add",t,t)),this}function am(t,e){e=ge(e);const n=ge(this),{has:r,get:s}=ku(n);let i=r.call(n,t);i||(t=ge(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Yo(e,o)&&er(n,"set",t,e):er(n,"add",t,e),this}function cm(t){const e=ge(this),{has:n,get:r}=ku(e);let s=n.call(e,t);s||(t=ge(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&er(e,"delete",t,void 0),i}function um(){const t=ge(this),e=t.size!==0,n=t.clear();return e&&er(t,"clear",void 0,void 0),n}function ic(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ge(o),c=e?$d:t?jd:Jo;return!t&&Qt(a,"iterate",_s),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function oc(t,e,n){return function(...r){const s=this.__v_raw,i=ge(s),o=fi(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?$d:e?jd:Jo;return!e&&Qt(i,"iterate",c?Sh:_s),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function hr(t){return function(...e){return t==="delete"?!1:this}}function u0(){const t={get(i){return nc(this,i)},get size(){return sc(this)},has:rc,add:om,set:am,delete:cm,clear:um,forEach:ic(!1,!1)},e={get(i){return nc(this,i,!1,!0)},get size(){return sc(this)},has:rc,add:om,set:am,delete:cm,clear:um,forEach:ic(!1,!0)},n={get(i){return nc(this,i,!0)},get size(){return sc(this,!0)},has(i){return rc.call(this,i,!0)},add:hr("add"),set:hr("set"),delete:hr("delete"),clear:hr("clear"),forEach:ic(!0,!1)},r={get(i){return nc(this,i,!0,!0)},get size(){return sc(this,!0)},has(i){return rc.call(this,i,!0)},add:hr("add"),set:hr("set"),delete:hr("delete"),clear:hr("clear"),forEach:ic(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=oc(i,!1,!1),n[i]=oc(i,!0,!1),e[i]=oc(i,!1,!0),r[i]=oc(i,!0,!0)}),[t,n,e,r]}const[l0,h0,d0,f0]=u0();function Bd(t,e){const n=e?t?f0:d0:t?h0:l0;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(fe(n,s)&&s in r?n:r,s,i)}const p0={get:Bd(!1,!1)},m0={get:Bd(!1,!0)},g0={get:Bd(!0,!1)},dv=new WeakMap,fv=new WeakMap,pv=new WeakMap,y0=new WeakMap;function v0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _0(t){return t.__v_skip||!Object.isExtensible(t)?0:v0(jT(t))}function qr(t){return Ii(t)?t:qd(t,!1,hv,p0,dv)}function w0(t){return qd(t,!1,c0,m0,fv)}function mv(t){return qd(t,!0,a0,g0,pv)}function qd(t,e,n,r,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=_0(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function pi(t){return Ii(t)?pi(t.__v_raw):!!(t&&t.__v_isReactive)}function Ii(t){return!!(t&&t.__v_isReadonly)}function Fc(t){return!!(t&&t.__v_isShallow)}function gv(t){return pi(t)||Ii(t)}function ge(t){const e=t&&t.__v_raw;return e?ge(e):t}function yv(t){return Mc(t,"__v_skip",!0),t}const Jo=t=>Ae(t)?qr(t):t,jd=t=>Ae(t)?mv(t):t;function vv(t){Sr&&un&&(t=ge(t),cv(t.dep||(t.dep=Fd())))}function _v(t,e){t=ge(t),t.dep&&kh(t.dep)}function wt(t){return!!(t&&t.__v_isRef===!0)}function ln(t){return wv(t,!1)}function b0(t){return wv(t,!0)}function wv(t,e){return wt(t)?t:new I0(t,e)}class I0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ge(e),this._value=n?e:Jo(e)}get value(){return vv(this),this._value}set value(e){const n=this.__v_isShallow||Fc(e)||Ii(e);e=n?e:ge(e),Yo(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Jo(e),_v(this))}}function ye(t){return wt(t)?t.value:t}const E0={get:(t,e,n)=>ye(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return wt(s)&&!wt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function bv(t){return pi(t)?t:new Proxy(t,E0)}var Iv;class T0{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Iv]=!1,this._dirty=!0,this.effect=new Ud(e,()=>{this._dirty||(this._dirty=!0,_v(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ge(this);return vv(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Iv="__v_isReadonly";function S0(t,e,n=!1){let r,s;const i=ie(t);return i?(r=t,s=fn):(r=t.get,s=t.set),new T0(r,s,i||!s,n)}function kr(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Cu(i,e,n)}return s}function tn(t,e,n,r){if(ie(t)){const i=kr(t,e,n,r);return i&&tv(i)&&i.catch(o=>{Cu(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(tn(t[i],e,n,r));return s}function Cu(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){kr(c,null,10,[t,o,a]);return}}k0(t,n,s,r)}function k0(t,e,n,r=!0){console.error(t)}let Xo=!1,Ch=!1;const _t=[];let Sn=0;const mi=[];let Wn=null,ss=0;const Ev=Promise.resolve();let Kd=null;function Tv(t){const e=Kd||Ev;return t?e.then(this?t.bind(this):t):e}function C0(t){let e=Sn+1,n=_t.length;for(;e<n;){const r=e+n>>>1;Zo(_t[r])<t?e=r+1:n=r}return e}function Hd(t){(!_t.length||!_t.includes(t,Xo&&t.allowRecurse?Sn+1:Sn))&&(t.id==null?_t.push(t):_t.splice(C0(t.id),0,t),Sv())}function Sv(){!Xo&&!Ch&&(Ch=!0,Kd=Ev.then(Cv))}function A0(t){const e=_t.indexOf(t);e>Sn&&_t.splice(e,1)}function R0(t){ee(t)?mi.push(...t):(!Wn||!Wn.includes(t,t.allowRecurse?ss+1:ss))&&mi.push(t),Sv()}function lm(t,e=Xo?Sn+1:0){for(;e<_t.length;e++){const n=_t[e];n&&n.pre&&(_t.splice(e,1),e--,n())}}function kv(t){if(mi.length){const e=[...new Set(mi)];if(mi.length=0,Wn){Wn.push(...e);return}for(Wn=e,Wn.sort((n,r)=>Zo(n)-Zo(r)),ss=0;ss<Wn.length;ss++)Wn[ss]();Wn=null,ss=0}}const Zo=t=>t.id==null?1/0:t.id,x0=(t,e)=>{const n=Zo(t)-Zo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Cv(t){Ch=!1,Xo=!0,_t.sort(x0);const e=fn;try{for(Sn=0;Sn<_t.length;Sn++){const n=_t[Sn];n&&n.active!==!1&&kr(n,null,14)}}finally{Sn=0,_t.length=0,kv(),Xo=!1,Kd=null,(_t.length||mi.length)&&Cv()}}function N0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||xe;d&&(s=n.map(f=>Je(f)?f.trim():f)),h&&(s=n.map(Lc))}let a,c=r[a=jl(e)]||r[a=jl($n(e))];!c&&i&&(c=r[a=jl(Hi(e))]),c&&tn(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,tn(u,t,6,s)}}function Av(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ie(t)){const c=u=>{const l=Av(u,e,!0);l&&(a=!0,Tt(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ae(t)&&r.set(t,null),null):(ee(i)?i.forEach(c=>o[c]=null):Tt(o,i),Ae(t)&&r.set(t,o),o)}function Au(t,e){return!t||!Iu(e)?!1:(e=e.slice(2).replace(/Once$/,""),fe(t,e[0].toLowerCase()+e.slice(1))||fe(t,Hi(e))||fe(t,e))}let jt=null,Ru=null;function Uc(t){const e=jt;return jt=t,Ru=t&&t.type.__scopeId||null,e}function Gd(t){Ru=t}function Wd(){Ru=null}function zn(t,e=jt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&wm(-1);const i=Uc(e);let o;try{o=t(...s)}finally{Uc(i),r._d&&wm(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Kl(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:y}=t;let b,S;const A=Uc(t);try{if(n.shapeFlag&4){const x=s||r;b=Tn(l.call(x,x,h,i,f,d,g)),S=c}else{const x=e;b=Tn(x.length>1?x(i,{attrs:c,slots:a,emit:u}):x(i,null)),S=e.props?c:D0(c)}}catch(x){Mo.length=0,Cu(x,t,1),b=Me(pn)}let E=b;if(S&&y!==!1){const x=Object.keys(S),{shapeFlag:j}=E;x.length&&j&7&&(o&&x.some(Pd)&&(S=O0(S,o)),E=xr(E,S))}return n.dirs&&(E=xr(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),b=E,Uc(A),b}const D0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Iu(n))&&((e||(e={}))[n]=t[n]);return e},O0=(t,e)=>{const n={};for(const r in t)(!Pd(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function P0(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?hm(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!Au(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?hm(r,o,u):!0:!!o;return!1}function hm(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Au(n,i))return!0}return!1}function M0({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const L0=t=>t.__isSuspense;function F0(t,e){e&&e.pendingBranch?ee(t)?e.effects.push(...t):e.effects.push(t):R0(t)}function Ic(t,e){if(nt){let n=nt.provides;const r=nt.parent&&nt.parent.provides;r===n&&(n=nt.provides=Object.create(r)),n[t]=e}}function nn(t,e,n=!1){const r=nt||jt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ie(e)?e.call(r.proxy):e}}const ac={};function gi(t,e,n){return Rv(t,e,n)}function Rv(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=xe){const a=nt;let c,u=!1,l=!1;if(wt(t)?(c=()=>t.value,u=Fc(t)):pi(t)?(c=()=>t,r=!0):ee(t)?(l=!0,u=t.some(E=>pi(E)||Fc(E)),c=()=>t.map(E=>{if(wt(E))return E.value;if(pi(E))return fs(E);if(ie(E))return kr(E,a,2)})):ie(t)?e?c=()=>kr(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),tn(t,a,3,[d])}:c=fn,e&&r){const E=c;c=()=>fs(E())}let h,d=E=>{h=S.onStop=()=>{kr(E,a,4)}},f;if(na)if(d=fn,e?n&&tn(e,a,3,[c(),l?[]:void 0,d]):c(),s==="sync"){const E=PS();f=E.__watcherHandles||(E.__watcherHandles=[])}else return fn;let g=l?new Array(t.length).fill(ac):ac;const y=()=>{if(S.active)if(e){const E=S.run();(r||u||(l?E.some((x,j)=>Yo(x,g[j])):Yo(E,g)))&&(h&&h(),tn(e,a,3,[E,g===ac?void 0:l&&g[0]===ac?[]:g,d]),g=E)}else S.run()};y.allowRecurse=!!e;let b;s==="sync"?b=y:s==="post"?b=()=>Dt(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),b=()=>Hd(y));const S=new Ud(c,b);e?n?y():g=S.run():s==="post"?Dt(S.run.bind(S),a&&a.suspense):S.run();const A=()=>{S.stop(),a&&a.scope&&Md(a.scope.effects,S)};return f&&f.push(A),A}function U0(t,e,n){const r=this.proxy,s=Je(t)?t.includes(".")?xv(r,t):()=>r[t]:t.bind(r,r);let i;ie(e)?i=e:(i=e.handler,n=e);const o=nt;Ti(this);const a=Rv(s,i.bind(r),n);return o?Ti(o):ws(),a}function xv(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function fs(t,e){if(!Ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),wt(t))fs(t.value,e);else if(ee(t))for(let n=0;n<t.length;n++)fs(t[n],e);else if(Eu(t)||fi(t))t.forEach(n=>{fs(n,e)});else if(rv(t))for(const n in t)fs(t[n],e);return t}function V0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qs(()=>{t.isMounted=!0}),Mv(()=>{t.isUnmounting=!0}),t}const Xt=[Function,Array],$0={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xt,onEnter:Xt,onAfterEnter:Xt,onEnterCancelled:Xt,onBeforeLeave:Xt,onLeave:Xt,onAfterLeave:Xt,onLeaveCancelled:Xt,onBeforeAppear:Xt,onAppear:Xt,onAfterAppear:Xt,onAppearCancelled:Xt},setup(t,{slots:e}){const n=kS(),r=V0();let s;return()=>{const i=e.default&&Dv(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==pn){o=y;break}}const a=ge(t),{mode:c}=a;if(r.isLeaving)return Hl(o);const u=dm(o);if(!u)return Hl(o);const l=Ah(u,a,r,n);Rh(u,l);const h=n.subTree,d=h&&dm(h);let f=!1;const{getTransitionKey:g}=u.type;if(g){const y=g();s===void 0?s=y:y!==s&&(s=y,f=!0)}if(d&&d.type!==pn&&(!is(u,d)||f)){const y=Ah(d,a,r,n);if(Rh(d,y),c==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Hl(o);c==="in-out"&&u.type!==pn&&(y.delayLeave=(b,S,A)=>{const E=Nv(r,d);E[String(d.key)]=d,b._leaveCb=()=>{S(),b._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=A})}return o}}},B0=$0;function Nv(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ah(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:y,onAppear:b,onAfterAppear:S,onAppearCancelled:A}=e,E=String(t.key),x=Nv(n,t),j=(Z,Re)=>{Z&&tn(Z,r,9,Re)},z=(Z,Re)=>{const Te=Re[1];j(Z,Re),ee(Z)?Z.every(gt=>gt.length<=1)&&Te():Z.length<=1&&Te()},ae={mode:i,persisted:o,beforeEnter(Z){let Re=a;if(!n.isMounted)if(s)Re=y||a;else return;Z._leaveCb&&Z._leaveCb(!0);const Te=x[E];Te&&is(t,Te)&&Te.el._leaveCb&&Te.el._leaveCb(),j(Re,[Z])},enter(Z){let Re=c,Te=u,gt=l;if(!n.isMounted)if(s)Re=b||c,Te=S||u,gt=A||l;else return;let yt=!1;const sn=Z._enterCb=Hn=>{yt||(yt=!0,Hn?j(gt,[Z]):j(Te,[Z]),ae.delayedLeave&&ae.delayedLeave(),Z._enterCb=void 0)};Re?z(Re,[Z,sn]):sn()},leave(Z,Re){const Te=String(t.key);if(Z._enterCb&&Z._enterCb(!0),n.isUnmounting)return Re();j(h,[Z]);let gt=!1;const yt=Z._leaveCb=sn=>{gt||(gt=!0,Re(),sn?j(g,[Z]):j(f,[Z]),Z._leaveCb=void 0,x[Te]===t&&delete x[Te])};x[Te]=t,d?z(d,[Z,yt]):yt()},clone(Z){return Ah(Z,e,n,r)}};return ae}function Hl(t){if(xu(t))return t=xr(t),t.children=null,t}function dm(t){return xu(t)?t.children?t.children[0]:void 0:t}function Rh(t,e){t.shapeFlag&6&&t.component?Rh(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Dv(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===vt?(o.patchFlag&128&&s++,r=r.concat(Dv(o.children,e,a))):(e||o.type!==pn)&&r.push(a!=null?xr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ov(t){return ie(t)?{setup:t,name:t.name}:t}const Ec=t=>!!t.type.__asyncLoader,xu=t=>t.type.__isKeepAlive;function q0(t,e){Pv(t,"a",e)}function j0(t,e){Pv(t,"da",e)}function Pv(t,e,n=nt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Nu(e,r,n),n){let s=n.parent;for(;s&&s.parent;)xu(s.parent.vnode)&&K0(r,e,n,s),s=s.parent}}function K0(t,e,n,r){const s=Nu(e,t,r,!0);Lv(()=>{Md(r[e],s)},n)}function Nu(t,e,n=nt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Gi(),Ti(n);const a=tn(e,n,t,o);return ws(),Wi(),a});return r?s.unshift(i):s.push(i),i}}const ir=t=>(e,n=nt)=>(!na||t==="sp")&&Nu(t,(...r)=>e(...r),n),H0=ir("bm"),qs=ir("m"),G0=ir("bu"),W0=ir("u"),Mv=ir("bum"),Lv=ir("um"),z0=ir("sp"),Q0=ir("rtg"),Y0=ir("rtc");function J0(t,e=nt){Nu("ec",t,e)}function Zt(t,e){const n=jt;if(n===null)return t;const r=Pu(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=xe]=e[i];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&fs(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Xr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Gi(),tn(c,n,8,[t.el,a,t,e]),Wi())}}const Fv="components";function X0(t,e){return eS(Fv,t,!0,e)||t}const Z0=Symbol();function eS(t,e,n=!0,r=!1){const s=jt||nt;if(s){const i=s.type;if(t===Fv){const a=NS(i,!1);if(a&&(a===e||a===$n(e)||a===Su($n(e))))return i}const o=fm(s[t]||i[t],e)||fm(s.appContext[t],e);return!o&&r?i:o}}function fm(t,e){return t&&(t[e]||t[$n(e)]||t[Su($n(e))])}function Ei(t,e,n,r){let s;const i=n&&n[r];if(ee(t)||Je(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ae(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const xh=t=>t?Qv(t)?Pu(t)||t.proxy:xh(t.parent):null,Po=Tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>xh(t.parent),$root:t=>xh(t.root),$emit:t=>t.emit,$options:t=>zd(t),$forceUpdate:t=>t.f||(t.f=()=>Hd(t.update)),$nextTick:t=>t.n||(t.n=Tv.bind(t.proxy)),$watch:t=>U0.bind(t)}),Gl=(t,e)=>t!==xe&&!t.__isScriptSetup&&fe(t,e),tS={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Gl(r,e))return o[e]=1,r[e];if(s!==xe&&fe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&fe(u,e))return o[e]=3,i[e];if(n!==xe&&fe(n,e))return o[e]=4,n[e];Nh&&(o[e]=0)}}const l=Po[e];let h,d;if(l)return e==="$attrs"&&Qt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==xe&&fe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,fe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Gl(s,e)?(s[e]=n,!0):r!==xe&&fe(r,e)?(r[e]=n,!0):fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==xe&&fe(t,o)||Gl(e,o)||(a=i[0])&&fe(a,o)||fe(r,o)||fe(Po,o)||fe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Nh=!0;function nS(t){const e=zd(t),n=t.proxy,r=t.ctx;Nh=!1,e.beforeCreate&&pm(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:y,deactivated:b,beforeDestroy:S,beforeUnmount:A,destroyed:E,unmounted:x,render:j,renderTracked:z,renderTriggered:ae,errorCaptured:Z,serverPrefetch:Re,expose:Te,inheritAttrs:gt,components:yt,directives:sn,filters:Hn}=e;if(u&&rS(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Se in o){const we=o[Se];ie(we)&&(r[Se]=we.bind(n))}if(s){const Se=s.call(n,n);Ae(Se)&&(t.data=qr(Se))}if(Nh=!0,i)for(const Se in i){const we=i[Se],on=ie(we)?we.bind(n,n):ie(we.get)?we.get.bind(n,n):fn,Jr=!ie(we)&&ie(we.set)?we.set.bind(n):fn,an=qt({get:on,set:Jr});Object.defineProperty(r,Se,{enumerable:!0,configurable:!0,get:()=>an.value,set:Nt=>an.value=Nt})}if(a)for(const Se in a)Uv(a[Se],r,n,Se);if(c){const Se=ie(c)?c.call(n):c;Reflect.ownKeys(Se).forEach(we=>{Ic(we,Se[we])})}l&&pm(l,t,"c");function We(Se,we){ee(we)?we.forEach(on=>Se(on.bind(n))):we&&Se(we.bind(n))}if(We(H0,h),We(qs,d),We(G0,f),We(W0,g),We(q0,y),We(j0,b),We(J0,Z),We(Y0,z),We(Q0,ae),We(Mv,A),We(Lv,x),We(z0,Re),ee(Te))if(Te.length){const Se=t.exposed||(t.exposed={});Te.forEach(we=>{Object.defineProperty(Se,we,{get:()=>n[we],set:on=>n[we]=on})})}else t.exposed||(t.exposed={});j&&t.render===fn&&(t.render=j),gt!=null&&(t.inheritAttrs=gt),yt&&(t.components=yt),sn&&(t.directives=sn)}function rS(t,e,n=fn,r=!1){ee(t)&&(t=Dh(t));for(const s in t){const i=t[s];let o;Ae(i)?"default"in i?o=nn(i.from||s,i.default,!0):o=nn(i.from||s):o=nn(i),wt(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function pm(t,e,n){tn(ee(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Uv(t,e,n,r){const s=r.includes(".")?xv(n,r):()=>n[r];if(Je(t)){const i=e[t];ie(i)&&gi(s,i)}else if(ie(t))gi(s,t.bind(n));else if(Ae(t))if(ee(t))t.forEach(i=>Uv(i,e,n,r));else{const i=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(i)&&gi(s,i,t)}}function zd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Vc(c,u,o,!0)),Vc(c,e,o)),Ae(e)&&i.set(e,c),c}function Vc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Vc(t,i,n,!0),s&&s.forEach(o=>Vc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=sS[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const sS={data:mm,props:ts,emits:ts,methods:ts,computed:ts,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:ts,directives:ts,watch:oS,provide:mm,inject:iS};function mm(t,e){return e?t?function(){return Tt(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function iS(t,e){return ts(Dh(t),Dh(e))}function Dh(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function ts(t,e){return t?Tt(Tt(Object.create(null),t),e):e}function oS(t,e){if(!t)return e;if(!e)return t;const n=Tt(Object.create(null),t);for(const r in e)n[r]=kt(t[r],e[r]);return n}function aS(t,e,n,r=!1){const s={},i={};Mc(i,Ou,1),t.propsDefaults=Object.create(null),Vv(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:w0(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function cS(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ge(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(Au(t.emitsOptions,d))continue;const f=e[d];if(c)if(fe(i,d))f!==i[d]&&(i[d]=f,u=!0);else{const g=$n(d);s[g]=Oh(c,a,g,f,t,!1)}else f!==i[d]&&(i[d]=f,u=!0)}}}else{Vv(t,e,s,i)&&(u=!0);let l;for(const h in a)(!e||!fe(e,h)&&((l=Hi(h))===h||!fe(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(s[h]=Oh(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!fe(e,h))&&(delete i[h],u=!0)}u&&er(t,"set","$attrs")}function Vv(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(wc(c))continue;const u=e[c];let l;s&&fe(s,l=$n(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Au(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=ge(n),u=a||xe;for(let l=0;l<i.length;l++){const h=i[l];n[h]=Oh(s,c,h,u[h],t,!fe(u,h))}}return o}function Oh(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=fe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&ie(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(Ti(s),r=u[n]=c.call(null,e),ws())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Hi(n))&&(r=!0))}return r}function $v(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ie(t)){const l=h=>{c=!0;const[d,f]=$v(h,e,!0);Tt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return Ae(t)&&r.set(t,di),di;if(ee(i))for(let l=0;l<i.length;l++){const h=$n(i[l]);gm(h)&&(o[h]=xe)}else if(i)for(const l in i){const h=$n(l);if(gm(h)){const d=i[l],f=o[h]=ee(d)||ie(d)?{type:d}:Object.assign({},d);if(f){const g=_m(Boolean,f.type),y=_m(String,f.type);f[0]=g>-1,f[1]=y<0||g<y,(g>-1||fe(f,"default"))&&a.push(h)}}}const u=[o,a];return Ae(t)&&r.set(t,u),u}function gm(t){return t[0]!=="$"}function ym(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function vm(t,e){return ym(t)===ym(e)}function _m(t,e){return ee(e)?e.findIndex(n=>vm(n,t)):ie(e)&&vm(e,t)?0:-1}const Bv=t=>t[0]==="_"||t==="$stable",Qd=t=>ee(t)?t.map(Tn):[Tn(t)],uS=(t,e,n)=>{if(e._n)return e;const r=zn((...s)=>Qd(e(...s)),n);return r._c=!1,r},qv=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Bv(s))continue;const i=t[s];if(ie(i))e[s]=uS(s,i,r);else if(i!=null){const o=Qd(i);e[s]=()=>o}}},jv=(t,e)=>{const n=Qd(e);t.slots.default=()=>n},lS=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ge(e),Mc(e,"_",n)):qv(e,t.slots={})}else t.slots={},e&&jv(t,e);Mc(t.slots,Ou,1)},hS=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Tt(s,e),!n&&a===1&&delete s._):(i=!e.$stable,qv(e,s)),o=e}else e&&(jv(t,e),o={default:1});if(i)for(const a in s)!Bv(a)&&!(a in o)&&delete s[a]};function Kv(){return{app:null,config:{isNativeTag:$T,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dS=0;function fS(t,e){return function(r,s=null){ie(r)||(r=Object.assign({},r)),s!=null&&!Ae(s)&&(s=null);const i=Kv(),o=new Set;let a=!1;const c=i.app={_uid:dS++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:MS,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&ie(u.install)?(o.add(u),u.install(c,...l)):ie(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=Me(r,s);return d.appContext=i,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,Pu(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Ph(t,e,n,r,s=!1){if(ee(t)){t.forEach((d,f)=>Ph(d,e&&(ee(e)?e[f]:e),n,r,s));return}if(Ec(r)&&!s)return;const i=r.shapeFlag&4?Pu(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===xe?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Je(u)?(l[u]=null,fe(h,u)&&(h[u]=null)):wt(u)&&(u.value=null)),ie(c))kr(c,a,12,[o,l]);else{const d=Je(c),f=wt(c);if(d||f){const g=()=>{if(t.f){const y=d?fe(h,c)?h[c]:l[c]:c.value;s?ee(y)&&Md(y,i):ee(y)?y.includes(i)||y.push(i):d?(l[c]=[i],fe(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,fe(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(l[t.k]=o))};o?(g.id=-1,Dt(g,n)):g()}}}const Dt=F0;function pS(t){return mS(t)}function mS(t,e){const n=GT();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:f=fn,insertStaticContent:g}=t,y=(p,m,I,T=null,R=null,M=null,$=!1,P=null,F=!!m.dynamicChildren)=>{if(p===m)return;p&&!is(p,m)&&(T=V(p),Nt(p,R,M,!0),p=null),m.patchFlag===-2&&(F=!1,m.dynamicChildren=null);const{type:D,ref:J,shapeFlag:H}=m;switch(D){case Du:b(p,m,I,T);break;case pn:S(p,m,I,T);break;case Tc:p==null&&A(m,I,T,$);break;case vt:yt(p,m,I,T,R,M,$,P,F);break;default:H&1?j(p,m,I,T,R,M,$,P,F):H&6?sn(p,m,I,T,R,M,$,P,F):(H&64||H&128)&&D.process(p,m,I,T,R,M,$,P,F,de)}J!=null&&R&&Ph(J,p&&p.ref,M,m||p,!m)},b=(p,m,I,T)=>{if(p==null)r(m.el=a(m.children),I,T);else{const R=m.el=p.el;m.children!==p.children&&u(R,m.children)}},S=(p,m,I,T)=>{p==null?r(m.el=c(m.children||""),I,T):m.el=p.el},A=(p,m,I,T)=>{[p.el,p.anchor]=g(p.children,m,I,T,p.el,p.anchor)},E=({el:p,anchor:m},I,T)=>{let R;for(;p&&p!==m;)R=d(p),r(p,I,T),p=R;r(m,I,T)},x=({el:p,anchor:m})=>{let I;for(;p&&p!==m;)I=d(p),s(p),p=I;s(m)},j=(p,m,I,T,R,M,$,P,F)=>{$=$||m.type==="svg",p==null?z(m,I,T,R,M,$,P,F):Re(p,m,R,M,$,P,F)},z=(p,m,I,T,R,M,$,P)=>{let F,D;const{type:J,props:H,shapeFlag:X,transition:ne,dirs:ce}=p;if(F=p.el=o(p.type,M,H&&H.is,H),X&8?l(F,p.children):X&16&&Z(p.children,F,null,T,R,M&&J!=="foreignObject",$,P),ce&&Xr(p,null,T,"created"),H){for(const be in H)be!=="value"&&!wc(be)&&i(F,be,null,H[be],M,p.children,T,R,q);"value"in H&&i(F,"value",null,H.value),(D=H.onVnodeBeforeMount)&&In(D,T,p)}ae(F,p,p.scopeId,$,T),ce&&Xr(p,null,T,"beforeMount");const ke=(!R||R&&!R.pendingBranch)&&ne&&!ne.persisted;ke&&ne.beforeEnter(F),r(F,m,I),((D=H&&H.onVnodeMounted)||ke||ce)&&Dt(()=>{D&&In(D,T,p),ke&&ne.enter(F),ce&&Xr(p,null,T,"mounted")},R)},ae=(p,m,I,T,R)=>{if(I&&f(p,I),T)for(let M=0;M<T.length;M++)f(p,T[M]);if(R){let M=R.subTree;if(m===M){const $=R.vnode;ae(p,$,$.scopeId,$.slotScopeIds,R.parent)}}},Z=(p,m,I,T,R,M,$,P,F=0)=>{for(let D=F;D<p.length;D++){const J=p[D]=P?gr(p[D]):Tn(p[D]);y(null,J,m,I,T,R,M,$,P)}},Re=(p,m,I,T,R,M,$)=>{const P=m.el=p.el;let{patchFlag:F,dynamicChildren:D,dirs:J}=m;F|=p.patchFlag&16;const H=p.props||xe,X=m.props||xe;let ne;I&&Zr(I,!1),(ne=X.onVnodeBeforeUpdate)&&In(ne,I,m,p),J&&Xr(m,p,I,"beforeUpdate"),I&&Zr(I,!0);const ce=R&&m.type!=="foreignObject";if(D?Te(p.dynamicChildren,D,P,I,T,ce,M):$||we(p,m,P,null,I,T,ce,M,!1),F>0){if(F&16)gt(P,m,H,X,I,T,R);else if(F&2&&H.class!==X.class&&i(P,"class",null,X.class,R),F&4&&i(P,"style",H.style,X.style,R),F&8){const ke=m.dynamicProps;for(let be=0;be<ke.length;be++){const ze=ke[be],cn=H[ze],Zs=X[ze];(Zs!==cn||ze==="value")&&i(P,ze,cn,Zs,R,p.children,I,T,q)}}F&1&&p.children!==m.children&&l(P,m.children)}else!$&&D==null&&gt(P,m,H,X,I,T,R);((ne=X.onVnodeUpdated)||J)&&Dt(()=>{ne&&In(ne,I,m,p),J&&Xr(m,p,I,"updated")},T)},Te=(p,m,I,T,R,M,$)=>{for(let P=0;P<m.length;P++){const F=p[P],D=m[P],J=F.el&&(F.type===vt||!is(F,D)||F.shapeFlag&70)?h(F.el):I;y(F,D,J,null,T,R,M,$,!0)}},gt=(p,m,I,T,R,M,$)=>{if(I!==T){if(I!==xe)for(const P in I)!wc(P)&&!(P in T)&&i(p,P,I[P],null,$,m.children,R,M,q);for(const P in T){if(wc(P))continue;const F=T[P],D=I[P];F!==D&&P!=="value"&&i(p,P,D,F,$,m.children,R,M,q)}"value"in T&&i(p,"value",I.value,T.value)}},yt=(p,m,I,T,R,M,$,P,F)=>{const D=m.el=p?p.el:a(""),J=m.anchor=p?p.anchor:a("");let{patchFlag:H,dynamicChildren:X,slotScopeIds:ne}=m;ne&&(P=P?P.concat(ne):ne),p==null?(r(D,I,T),r(J,I,T),Z(m.children,I,J,R,M,$,P,F)):H>0&&H&64&&X&&p.dynamicChildren?(Te(p.dynamicChildren,X,I,R,M,$,P),(m.key!=null||R&&m===R.subTree)&&Hv(p,m,!0)):we(p,m,I,J,R,M,$,P,F)},sn=(p,m,I,T,R,M,$,P,F)=>{m.slotScopeIds=P,p==null?m.shapeFlag&512?R.ctx.activate(m,I,T,$,F):Hn(m,I,T,R,M,$,F):ho(p,m,F)},Hn=(p,m,I,T,R,M,$)=>{const P=p.component=SS(p,T,R);if(xu(p)&&(P.ctx.renderer=de),CS(P),P.asyncDep){if(R&&R.registerDep(P,We),!p.el){const F=P.subTree=Me(pn);S(null,F,m,I)}return}We(P,p,m,I,R,M,$)},ho=(p,m,I)=>{const T=m.component=p.component;if(P0(p,m,I))if(T.asyncDep&&!T.asyncResolved){Se(T,m,I);return}else T.next=m,A0(T.update),T.update();else m.el=p.el,T.vnode=m},We=(p,m,I,T,R,M,$)=>{const P=()=>{if(p.isMounted){let{next:J,bu:H,u:X,parent:ne,vnode:ce}=p,ke=J,be;Zr(p,!1),J?(J.el=ce.el,Se(p,J,$)):J=ce,H&&bc(H),(be=J.props&&J.props.onVnodeBeforeUpdate)&&In(be,ne,J,ce),Zr(p,!0);const ze=Kl(p),cn=p.subTree;p.subTree=ze,y(cn,ze,h(cn.el),V(cn),p,R,M),J.el=ze.el,ke===null&&M0(p,ze.el),X&&Dt(X,R),(be=J.props&&J.props.onVnodeUpdated)&&Dt(()=>In(be,ne,J,ce),R)}else{let J;const{el:H,props:X}=m,{bm:ne,m:ce,parent:ke}=p,be=Ec(m);if(Zr(p,!1),ne&&bc(ne),!be&&(J=X&&X.onVnodeBeforeMount)&&In(J,ke,m),Zr(p,!0),H&&oe){const ze=()=>{p.subTree=Kl(p),oe(H,p.subTree,p,R,null)};be?m.type.__asyncLoader().then(()=>!p.isUnmounted&&ze()):ze()}else{const ze=p.subTree=Kl(p);y(null,ze,I,T,p,R,M),m.el=ze.el}if(ce&&Dt(ce,R),!be&&(J=X&&X.onVnodeMounted)){const ze=m;Dt(()=>In(J,ke,ze),R)}(m.shapeFlag&256||ke&&Ec(ke.vnode)&&ke.vnode.shapeFlag&256)&&p.a&&Dt(p.a,R),p.isMounted=!0,m=I=T=null}},F=p.effect=new Ud(P,()=>Hd(D),p.scope),D=p.update=()=>F.run();D.id=p.uid,Zr(p,!0),D()},Se=(p,m,I)=>{m.component=p;const T=p.vnode.props;p.vnode=m,p.next=null,cS(p,m.props,T,I),hS(p,m.children,I),Gi(),lm(),Wi()},we=(p,m,I,T,R,M,$,P,F=!1)=>{const D=p&&p.children,J=p?p.shapeFlag:0,H=m.children,{patchFlag:X,shapeFlag:ne}=m;if(X>0){if(X&128){Jr(D,H,I,T,R,M,$,P,F);return}else if(X&256){on(D,H,I,T,R,M,$,P,F);return}}ne&8?(J&16&&q(D,R,M),H!==D&&l(I,H)):J&16?ne&16?Jr(D,H,I,T,R,M,$,P,F):q(D,R,M,!0):(J&8&&l(I,""),ne&16&&Z(H,I,T,R,M,$,P,F))},on=(p,m,I,T,R,M,$,P,F)=>{p=p||di,m=m||di;const D=p.length,J=m.length,H=Math.min(D,J);let X;for(X=0;X<H;X++){const ne=m[X]=F?gr(m[X]):Tn(m[X]);y(p[X],ne,I,null,R,M,$,P,F)}D>J?q(p,R,M,!0,!1,H):Z(m,I,T,R,M,$,P,F,H)},Jr=(p,m,I,T,R,M,$,P,F)=>{let D=0;const J=m.length;let H=p.length-1,X=J-1;for(;D<=H&&D<=X;){const ne=p[D],ce=m[D]=F?gr(m[D]):Tn(m[D]);if(is(ne,ce))y(ne,ce,I,null,R,M,$,P,F);else break;D++}for(;D<=H&&D<=X;){const ne=p[H],ce=m[X]=F?gr(m[X]):Tn(m[X]);if(is(ne,ce))y(ne,ce,I,null,R,M,$,P,F);else break;H--,X--}if(D>H){if(D<=X){const ne=X+1,ce=ne<J?m[ne].el:T;for(;D<=X;)y(null,m[D]=F?gr(m[D]):Tn(m[D]),I,ce,R,M,$,P,F),D++}}else if(D>X)for(;D<=H;)Nt(p[D],R,M,!0),D++;else{const ne=D,ce=D,ke=new Map;for(D=ce;D<=X;D++){const $t=m[D]=F?gr(m[D]):Tn(m[D]);$t.key!=null&&ke.set($t.key,D)}let be,ze=0;const cn=X-ce+1;let Zs=!1,Xp=0;const fo=new Array(cn);for(D=0;D<cn;D++)fo[D]=0;for(D=ne;D<=H;D++){const $t=p[D];if(ze>=cn){Nt($t,R,M,!0);continue}let bn;if($t.key!=null)bn=ke.get($t.key);else for(be=ce;be<=X;be++)if(fo[be-ce]===0&&is($t,m[be])){bn=be;break}bn===void 0?Nt($t,R,M,!0):(fo[bn-ce]=D+1,bn>=Xp?Xp=bn:Zs=!0,y($t,m[bn],I,null,R,M,$,P,F),ze++)}const Zp=Zs?gS(fo):di;for(be=Zp.length-1,D=cn-1;D>=0;D--){const $t=ce+D,bn=m[$t],em=$t+1<J?m[$t+1].el:T;fo[D]===0?y(null,bn,I,em,R,M,$,P,F):Zs&&(be<0||D!==Zp[be]?an(bn,I,em,2):be--)}}},an=(p,m,I,T,R=null)=>{const{el:M,type:$,transition:P,children:F,shapeFlag:D}=p;if(D&6){an(p.component.subTree,m,I,T);return}if(D&128){p.suspense.move(m,I,T);return}if(D&64){$.move(p,m,I,de);return}if($===vt){r(M,m,I);for(let H=0;H<F.length;H++)an(F[H],m,I,T);r(p.anchor,m,I);return}if($===Tc){E(p,m,I);return}if(T!==2&&D&1&&P)if(T===0)P.beforeEnter(M),r(M,m,I),Dt(()=>P.enter(M),R);else{const{leave:H,delayLeave:X,afterLeave:ne}=P,ce=()=>r(M,m,I),ke=()=>{H(M,()=>{ce(),ne&&ne()})};X?X(M,ce,ke):ke()}else r(M,m,I)},Nt=(p,m,I,T=!1,R=!1)=>{const{type:M,props:$,ref:P,children:F,dynamicChildren:D,shapeFlag:J,patchFlag:H,dirs:X}=p;if(P!=null&&Ph(P,null,I,p,!0),J&256){m.ctx.deactivate(p);return}const ne=J&1&&X,ce=!Ec(p);let ke;if(ce&&(ke=$&&$.onVnodeBeforeUnmount)&&In(ke,m,p),J&6)k(p.component,I,T);else{if(J&128){p.suspense.unmount(I,T);return}ne&&Xr(p,null,m,"beforeUnmount"),J&64?p.type.remove(p,m,I,R,de,T):D&&(M!==vt||H>0&&H&64)?q(D,m,I,!1,!0):(M===vt&&H&384||!R&&J&16)&&q(F,m,I),T&&Xs(p)}(ce&&(ke=$&&$.onVnodeUnmounted)||ne)&&Dt(()=>{ke&&In(ke,m,p),ne&&Xr(p,null,m,"unmounted")},I)},Xs=p=>{const{type:m,el:I,anchor:T,transition:R}=p;if(m===vt){tc(I,T);return}if(m===Tc){x(p);return}const M=()=>{s(I),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(p.shapeFlag&1&&R&&!R.persisted){const{leave:$,delayLeave:P}=R,F=()=>$(I,M);P?P(p.el,M,F):F()}else M()},tc=(p,m)=>{let I;for(;p!==m;)I=d(p),s(p),p=I;s(m)},k=(p,m,I)=>{const{bum:T,scope:R,update:M,subTree:$,um:P}=p;T&&bc(T),R.stop(),M&&(M.active=!1,Nt($,p,m,I)),P&&Dt(P,m),Dt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},q=(p,m,I,T=!1,R=!1,M=0)=>{for(let $=M;$<p.length;$++)Nt(p[$],m,I,T,R)},V=p=>p.shapeFlag&6?V(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),Y=(p,m,I)=>{p==null?m._vnode&&Nt(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,I),lm(),kv(),m._vnode=p},de={p:y,um:Nt,m:an,r:Xs,mt:Hn,mc:Z,pc:we,pbc:Te,n:V,o:t};let Fe,oe;return e&&([Fe,oe]=e(de)),{render:Y,hydrate:Fe,createApp:fS(Y,Fe)}}function Zr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Hv(t,e,n=!1){const r=t.children,s=e.children;if(ee(r)&&ee(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=gr(s[i]),a.el=o.el),n||Hv(o,a)),a.type===Du&&(a.el=o.el)}}function gS(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const yS=t=>t.__isTeleport,vt=Symbol(void 0),Du=Symbol(void 0),pn=Symbol(void 0),Tc=Symbol(void 0),Mo=[];let hn=null;function Ie(t=!1){Mo.push(hn=t?null:[])}function vS(){Mo.pop(),hn=Mo[Mo.length-1]||null}let ea=1;function wm(t){ea+=t}function Gv(t){return t.dynamicChildren=ea>0?hn||di:null,vS(),ea>0&&hn&&hn.push(t),t}function Ce(t,e,n,r,s,i){return Gv(w(t,e,n,r,s,i,!0))}function Wv(t,e,n,r,s){return Gv(Me(t,e,n,r,s,!0))}function Mh(t){return t?t.__v_isVNode===!0:!1}function is(t,e){return t.type===e.type&&t.key===e.key}const Ou="__vInternal",zv=({key:t})=>t??null,Sc=({ref:t,ref_key:e,ref_for:n})=>t!=null?Je(t)||wt(t)||ie(t)?{i:jt,r:t,k:e,f:!!n}:t:null;function w(t,e=null,n=null,r=0,s=null,i=t===vt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zv(e),ref:e&&Sc(e),scopeId:Ru,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:jt};return a?(Yd(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Je(n)?8:16),ea>0&&!o&&hn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&hn.push(c),c}const Me=_S;function _S(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Z0)&&(t=pn),Mh(t)){const a=xr(t,e,!0);return n&&Yd(a,n),ea>0&&!i&&hn&&(a.shapeFlag&6?hn[hn.indexOf(t)]=a:hn.push(a)),a.patchFlag|=-2,a}if(DS(t)&&(t=t.__vccOpts),e){e=wS(e);let{class:a,style:c}=e;a&&!Je(a)&&(e.class=Od(a)),Ae(c)&&(gv(c)&&!ee(c)&&(c=Tt({},c)),e.style=Dd(c))}const o=Je(t)?1:L0(t)?128:yS(t)?64:Ae(t)?4:ie(t)?2:0;return w(t,e,n,r,s,o,i,!0)}function wS(t){return t?gv(t)||Ou in t?Tt({},t):t:null}function xr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?IS(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&zv(a),ref:e&&e.ref?n&&s?ee(s)?s.concat(Sc(e)):[s,Sc(e)]:Sc(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==vt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xr(t.ssContent),ssFallback:t.ssFallback&&xr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Nn(t=" ",e=0){return Me(Du,null,t,e)}function bS(t,e){const n=Me(Tc,null,t);return n.staticCount=e,n}function ta(t="",e=!1){return e?(Ie(),Wv(pn,null,t)):Me(pn,null,t)}function Tn(t){return t==null||typeof t=="boolean"?Me(pn):ee(t)?Me(vt,null,t.slice()):typeof t=="object"?gr(t):Me(Du,null,String(t))}function gr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:xr(t)}function Yd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ee(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Yd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ou in e)?e._ctx=jt:s===3&&jt&&(jt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:jt},n=32):(e=String(e),r&64?(n=16,e=[Nn(e)]):n=8);t.children=e,t.shapeFlag|=n}function IS(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Od([e.class,r.class]));else if(s==="style")e.style=Dd([e.style,r.style]);else if(Iu(s)){const i=e[s],o=r[s];o&&i!==o&&!(ee(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function In(t,e,n,r=null){tn(t,e,7,[n,r])}const ES=Kv();let TS=0;function SS(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ES,i={uid:TS++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new sv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$v(r,s),emitsOptions:Av(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=N0.bind(null,i),t.ce&&t.ce(i),i}let nt=null;const kS=()=>nt||jt,Ti=t=>{nt=t,t.scope.on()},ws=()=>{nt&&nt.scope.off(),nt=null};function Qv(t){return t.vnode.shapeFlag&4}let na=!1;function CS(t,e=!1){na=e;const{props:n,children:r}=t.vnode,s=Qv(t);aS(t,n,s,e),lS(t,r);const i=s?AS(t,e):void 0;return na=!1,i}function AS(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=yv(new Proxy(t.ctx,tS));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?xS(t):null;Ti(t),Gi();const i=kr(r,t,0,[t.props,s]);if(Wi(),ws(),tv(i)){if(i.then(ws,ws),e)return i.then(o=>{bm(t,o,e)}).catch(o=>{Cu(o,t,0)});t.asyncDep=i}else bm(t,i,e)}else Yv(t,e)}function bm(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=bv(e)),Yv(t,n)}let Im;function Yv(t,e,n){const r=t.type;if(!t.render){if(!e&&Im&&!r.render){const s=r.template||zd(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=Tt(Tt({isCustomElement:i,delimiters:a},o),c);r.render=Im(s,u)}}t.render=r.render||fn}Ti(t),Gi(),nS(t),Wi(),ws()}function RS(t){return new Proxy(t.attrs,{get(e,n){return Qt(t,"get","$attrs"),e[n]}})}function xS(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=RS(t))},slots:t.slots,emit:t.emit,expose:e}}function Pu(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(bv(yv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Po)return Po[n](t)},has(e,n){return n in e||n in Po}}))}function NS(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function DS(t){return ie(t)&&"__vccOpts"in t}const qt=(t,e)=>S0(t,e,na);function Jv(t,e,n){const r=arguments.length;return r===2?Ae(e)&&!ee(e)?Mh(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Mh(n)&&(n=[n]),Me(t,e,n))}const OS=Symbol(""),PS=()=>nn(OS),MS="3.2.45",LS="http://www.w3.org/2000/svg",os=typeof document<"u"?document:null,Em=os&&os.createElement("template"),FS={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?os.createElementNS(LS,t):os.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>os.createTextNode(t),createComment:t=>os.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>os.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Em.innerHTML=r?`<svg>${t}</svg>`:t;const a=Em.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function US(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function VS(t,e,n){const r=t.style,s=Je(n);if(n&&!s){for(const i in n)Lh(r,i,n[i]);if(e&&!Je(e))for(const i in e)n[i]==null&&Lh(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Tm=/\s*!important$/;function Lh(t,e,n){if(ee(n))n.forEach(r=>Lh(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=$S(t,e);Tm.test(n)?t.setProperty(Hi(r),n.replace(Tm,""),"important"):t[r]=n}}const Sm=["Webkit","Moz","ms"],Wl={};function $S(t,e){const n=Wl[e];if(n)return n;let r=$n(e);if(r!=="filter"&&r in t)return Wl[e]=r;r=Su(r);for(let s=0;s<Sm.length;s++){const i=Sm[s]+r;if(i in t)return Wl[e]=i}return e}const km="http://www.w3.org/1999/xlink";function BS(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(km,e.slice(6,e.length)):t.setAttributeNS(km,e,n);else{const i=UT(e);n==null||i&&!Xy(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function qS(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Xy(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function as(t,e,n,r){t.addEventListener(e,n,r)}function jS(t,e,n,r){t.removeEventListener(e,n,r)}function KS(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=HS(e);if(r){const u=i[e]=zS(r,s);as(t,a,u,c)}else o&&(jS(t,a,o,c),i[e]=void 0)}}const Cm=/(?:Once|Passive|Capture)$/;function HS(t){let e;if(Cm.test(t)){e={};let r;for(;r=t.match(Cm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hi(t.slice(2)),e]}let zl=0;const GS=Promise.resolve(),WS=()=>zl||(GS.then(()=>zl=0),zl=Date.now());function zS(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;tn(QS(r,n.value),e,5,[r])};return n.value=t,n.attached=WS(),n}function QS(t,e){if(ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Am=/^on[a-z]/,YS=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?US(t,r,s):e==="style"?VS(t,n,r):Iu(e)?Pd(e)||KS(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):JS(t,e,r,s))?qS(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),BS(t,e,r,s))};function JS(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Am.test(e)&&ie(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Am.test(e)&&Je(n)?!1:e in t}const XS={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};B0.props;const $c=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ee(e)?n=>bc(e,n):e};function ZS(t){t.target.composing=!0}function Rm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const mn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=$c(s);const i=r||s.props&&s.props.type==="number";as(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Lc(a)),t._assign(a)}),n&&as(t,"change",()=>{t.value=t.value.trim()}),e||(as(t,"compositionstart",ZS),as(t,"compositionend",Rm),as(t,"change",Rm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=$c(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Lc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},ek={deep:!0,created(t,e,n){t._assign=$c(n),as(t,"change",()=>{const r=t._modelValue,s=tk(t),i=t.checked,o=t._assign;if(ee(r)){const a=Zy(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(a,1),o(u)}}else if(Eu(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Xv(t,i))})},mounted:xm,beforeUpdate(t,e,n){t._assign=$c(n),xm(t,e,n)}};function xm(t,{value:e,oldValue:n},r){t._modelValue=e,ee(e)?t.checked=Zy(e,r.props.value)>-1:Eu(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=bu(e,Xv(t,!0)))}function tk(t){return"_value"in t?t._value:t.value}function Xv(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const nk=["ctrl","shift","alt","meta"],rk={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>nk.some(n=>t[`${n}Key`]&&!e.includes(n))},Zv=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=rk[e[s]];if(i&&i(n,e))return}return t(n,...r)},sk=Tt({patchProp:YS},FS);let Nm;function ik(){return Nm||(Nm=pS(sk))}const ok=(...t)=>{const e=ik().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ak(r);if(!s)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ak(t){return Je(t)?document.querySelector(t):t}function ck(){return e_().__VUE_DEVTOOLS_GLOBAL_HOOK__}function e_(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const uk=typeof Proxy=="function",lk="devtools-plugin:setup",hk="plugin:settings:set";let ei,Fh;function dk(){var t;return ei!==void 0||(typeof window<"u"&&window.performance?(ei=!0,Fh=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(ei=!0,Fh=global.perf_hooks.performance):ei=!1),ei}function fk(){return dk()?Fh.now():Date.now()}class pk{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return fk()}},n&&n.on(hk,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:a,args:c,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function mk(t,e){const n=t,r=e_(),s=ck(),i=uk&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(lk,t,e);else{const o=i?new pk(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const oi=typeof window<"u";function gk(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ve=Object.assign;function Ql(t,e){const n={};for(const r in e){const s=e[r];n[r]=yn(s)?s.map(t):t(s)}return n}const Lo=()=>{},yn=Array.isArray,yk=/\/$/,vk=t=>t.replace(yk,"");function Yl(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Ik(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function _k(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Dm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function wk(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Si(e.matched[r],n.matched[s])&&t_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Si(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function t_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!bk(t[n],e[n]))return!1;return!0}function bk(t,e){return yn(t)?Om(t,e):yn(e)?Om(e,t):t===e}function Om(t,e){return yn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ik(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var ra;(function(t){t.pop="pop",t.push="push"})(ra||(ra={}));var Fo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Fo||(Fo={}));function Ek(t){if(!t)if(oi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),vk(t)}const Tk=/^[^#]+#/;function Sk(t,e){return t.replace(Tk,"#")+e}function kk(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Mu=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ck(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=kk(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Pm(t,e){return(history.state?history.state.position-e:-1)+t}const Uh=new Map;function Ak(t,e){Uh.set(t,e)}function Rk(t){const e=Uh.get(t);return Uh.delete(t),e}let xk=()=>location.protocol+"//"+location.host;function n_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Dm(c,"")}return Dm(n,t)+r+s}function Nk(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=n_(t,location),g=n.value,y=e.value;let b=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}b=y?d.position-y.position:0}else r(f);s.forEach(S=>{S(n.value,g,{delta:b,type:ra.pop,direction:b?b>0?Fo.forward:Fo.back:Fo.unknown})})};function c(){o=n.value}function u(d){s.push(d);const f=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return i.push(f),f}function l(){const{history:d}=window;d.state&&d.replaceState(ve({},d.state,{scroll:Mu()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Mm(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Mu():null}}function Dk(t){const{history:e,location:n}=window,r={value:n_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:xk()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),s.value=u}catch(f){console.error(f),n[l?"replace":"assign"](d)}}function o(c,u){const l=ve({},e.state,Mm(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=ve({},s.value,e.state,{forward:c,scroll:Mu()});i(l.current,l,!0);const h=ve({},Mm(r.value,c,null),{position:l.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Ok(t){t=Ek(t);const e=Dk(t),n=Nk(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ve({location:"",base:t,go:r,createHref:Sk.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Pk(t){return typeof t=="string"||t&&typeof t=="object"}function r_(t){return typeof t=="string"||typeof t=="symbol"}const dr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},s_=Symbol("");var Lm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Lm||(Lm={}));function ki(t,e){return ve(new Error,{type:t,[s_]:!0},e)}function Gn(t,e){return t instanceof Error&&s_ in t&&(e==null||!!(t.type&e))}const Fm="[^/]+?",Mk={sensitive:!1,strict:!1,start:!0,end:!0},Lk=/[.+*?^${}()[\]/\\]/g;function Fk(t,e){const n=ve({},Mk,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const d=u[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(Lk,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:y,optional:b,regexp:S}=d;i.push({name:g,repeatable:y,optional:b});const A=S||Fm;if(A!==Fm){f+=10;try{new RegExp(`(${A})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${A}): `+x.message)}}let E=y?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;h||(E=b&&u.length<2?`(?:/${E})`:"/"+E),b&&(E+="?"),s+=E,f+=20,b&&(f+=-8),y&&(f+=-20),A===".*"&&(f+=-50)}l.push(f)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const f=l[d]||"",g=i[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const f of d)if(f.type===0)l+=f.value;else if(f.type===1){const{value:g,repeatable:y,optional:b}=f,S=g in u?u[g]:"";if(yn(S)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const A=yn(S)?S.join("/"):S;if(!A)if(b)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);l+=A}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Uk(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Vk(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Uk(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Um(r))return 1;if(Um(s))return-1}return s.length-r.length}function Um(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $k={type:0,value:""},Bk=/[a-zA-Z0-9_]/;function qk(t){if(!t)return[[]];if(t==="/")return[[$k]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:Bk.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function jk(t,e,n){const r=Fk(qk(t.path),n),s=ve(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Kk(t,e){const n=[],r=new Map;e=Bm({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,h,d){const f=!d,g=Hk(l);g.aliasOf=d&&d.record;const y=Bm(e,l),b=[g];if("alias"in l){const E=typeof l.alias=="string"?[l.alias]:l.alias;for(const x of E)b.push(ve({},g,{components:d?d.record.components:g.components,path:x,aliasOf:d?d.record:g}))}let S,A;for(const E of b){const{path:x}=E;if(h&&x[0]!=="/"){const j=h.record.path,z=j[j.length-1]==="/"?"":"/";E.path=h.record.path+(x&&z+x)}if(S=jk(E,h,y),d?d.alias.push(S):(A=A||S,A!==S&&A.alias.push(S),f&&l.name&&!$m(S)&&o(l.name)),g.children){const j=g.children;for(let z=0;z<j.length;z++)i(j[z],S,d&&d.children[z])}d=d||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&c(S)}return A?()=>{o(A)}:Lo}function o(l){if(r_(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&Vk(l,n[h])>=0&&(l.record.path!==n[h].record.path||!i_(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!$m(l)&&r.set(l.record.name,l)}function u(l,h){let d,f={},g,y;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw ki(1,{location:l});y=d.record.name,f=ve(Vm(h.params,d.keys.filter(A=>!A.optional).map(A=>A.name)),l.params&&Vm(l.params,d.keys.map(A=>A.name))),g=d.stringify(f)}else if("path"in l)g=l.path,d=n.find(A=>A.re.test(g)),d&&(f=d.parse(g),y=d.record.name);else{if(d=h.name?r.get(h.name):n.find(A=>A.re.test(h.path)),!d)throw ki(1,{location:l,currentLocation:h});y=d.record.name,f=ve({},h.params,l.params),g=d.stringify(f)}const b=[];let S=d;for(;S;)b.unshift(S.record),S=S.parent;return{name:y,path:g,params:f,matched:b,meta:Wk(b)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Vm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Hk(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Gk(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Gk(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function $m(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Wk(t){return t.reduce((e,n)=>ve(e,n.meta),{})}function Bm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function i_(t,e){return e.children.some(n=>n===t||i_(t,n))}const o_=/#/g,zk=/&/g,Qk=/\//g,Yk=/=/g,Jk=/\?/g,a_=/\+/g,Xk=/%5B/g,Zk=/%5D/g,c_=/%5E/g,eC=/%60/g,u_=/%7B/g,tC=/%7C/g,l_=/%7D/g,nC=/%20/g;function Jd(t){return encodeURI(""+t).replace(tC,"|").replace(Xk,"[").replace(Zk,"]")}function rC(t){return Jd(t).replace(u_,"{").replace(l_,"}").replace(c_,"^")}function Vh(t){return Jd(t).replace(a_,"%2B").replace(nC,"+").replace(o_,"%23").replace(zk,"%26").replace(eC,"`").replace(u_,"{").replace(l_,"}").replace(c_,"^")}function sC(t){return Vh(t).replace(Yk,"%3D")}function iC(t){return Jd(t).replace(o_,"%23").replace(Jk,"%3F")}function oC(t){return t==null?"":iC(t).replace(Qk,"%2F")}function Bc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function aC(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(a_," "),o=i.indexOf("="),a=Bc(o<0?i:i.slice(0,o)),c=o<0?null:Bc(i.slice(o+1));if(a in e){let u=e[a];yn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function qm(t){let e="";for(let n in t){const r=t[n];if(n=sC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(yn(r)?r.map(i=>i&&Vh(i)):[r&&Vh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function cC(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=yn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const uC=Symbol(""),jm=Symbol(""),Lu=Symbol(""),Xd=Symbol(""),$h=Symbol("");function po(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function yr(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ki(4,{from:n,to:e})):h instanceof Error?a(h):Pk(h)?a(ki(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Jl(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(lC(a)){const u=(a.__vccOpts||a)[e];u&&s.push(yr(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=gk(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&yr(d,n,r,i,o)()}))}}return s}function lC(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Km(t){const e=nn(Lu),n=nn(Xd),r=qt(()=>e.resolve(ye(t.to))),s=qt(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(Si.bind(null,l));if(d>-1)return d;const f=Hm(c[u-2]);return u>1&&Hm(l)===f&&h[h.length-1].path!==f?h.findIndex(Si.bind(null,c[u-2])):d}),i=qt(()=>s.value>-1&&fC(n.params,r.value.params)),o=qt(()=>s.value>-1&&s.value===n.matched.length-1&&t_(n.params,r.value.params));function a(c={}){return dC(c)?e[ye(t.replace)?"replace":"push"](ye(t.to)).catch(Lo):Promise.resolve()}return{route:r,href:qt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const hC=Ov({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Km,setup(t,{slots:e}){const n=qr(Km(t)),{options:r}=nn(Lu),s=qt(()=>({[Gm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Jv("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),br=hC;function dC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function fC(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!yn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Hm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gm=(t,e,n)=>t??e??n,pC=Ov({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=nn($h),s=qt(()=>t.route||r.value),i=nn(jm,0),o=qt(()=>{let u=ye(i);const{matched:l}=s.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=qt(()=>s.value.matched[o.value]);Ic(jm,qt(()=>o.value+1)),Ic(uC,a),Ic($h,s);const c=ln();return gi(()=>[c.value,a.value,t.name],([u,l,h],[d,f,g])=>{l&&(l.instances[h]=u,f&&f!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),u&&l&&(!f||!Si(l,f)||!d)&&(l.enterCallbacks[h]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=s.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return Wm(n.default,{Component:d,route:u});const f=h.props[l],g=f?f===!0?u.params:typeof f=="function"?f(u):f:null,b=Jv(d,ve({},g,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return Wm(n.default,{Component:b,route:u})||b}}});function Wm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const h_=pC;function mC(t){const e=Kk(t.routes,t),n=t.parseQuery||aC,r=t.stringifyQuery||qm,s=t.history,i=po(),o=po(),a=po(),c=b0(dr);let u=dr;oi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Ql.bind(null,k=>""+k),h=Ql.bind(null,oC),d=Ql.bind(null,Bc);function f(k,q){let V,Y;return r_(k)?(V=e.getRecordMatcher(k),Y=q):Y=k,e.addRoute(Y,V)}function g(k){const q=e.getRecordMatcher(k);q&&e.removeRoute(q)}function y(){return e.getRoutes().map(k=>k.record)}function b(k){return!!e.getRecordMatcher(k)}function S(k,q){if(q=ve({},q||c.value),typeof k=="string"){const p=Yl(n,k,q.path),m=e.resolve({path:p.path},q),I=s.createHref(p.fullPath);return ve(p,m,{params:d(m.params),hash:Bc(p.hash),redirectedFrom:void 0,href:I})}let V;if("path"in k)V=ve({},k,{path:Yl(n,k.path,q.path).path});else{const p=ve({},k.params);for(const m in p)p[m]==null&&delete p[m];V=ve({},k,{params:h(k.params)}),q.params=h(q.params)}const Y=e.resolve(V,q),de=k.hash||"";Y.params=l(d(Y.params));const Fe=_k(r,ve({},k,{hash:rC(de),path:Y.path})),oe=s.createHref(Fe);return ve({fullPath:Fe,hash:de,query:r===qm?cC(k.query):k.query||{}},Y,{redirectedFrom:void 0,href:oe})}function A(k){return typeof k=="string"?Yl(n,k,c.value.path):ve({},k)}function E(k,q){if(u!==k)return ki(8,{from:q,to:k})}function x(k){return ae(k)}function j(k){return x(ve(A(k),{replace:!0}))}function z(k){const q=k.matched[k.matched.length-1];if(q&&q.redirect){const{redirect:V}=q;let Y=typeof V=="function"?V(k):V;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=A(Y):{path:Y},Y.params={}),ve({query:k.query,hash:k.hash,params:"path"in Y?{}:k.params},Y)}}function ae(k,q){const V=u=S(k),Y=c.value,de=k.state,Fe=k.force,oe=k.replace===!0,p=z(V);if(p)return ae(ve(A(p),{state:typeof p=="object"?ve({},de,p.state):de,force:Fe,replace:oe}),q||V);const m=V;m.redirectedFrom=q;let I;return!Fe&&wk(r,Y,V)&&(I=ki(16,{to:m,from:Y}),Jr(Y,Y,!0,!1)),(I?Promise.resolve(I):Re(m,Y)).catch(T=>Gn(T)?Gn(T,2)?T:on(T):Se(T,m,Y)).then(T=>{if(T){if(Gn(T,2))return ae(ve({replace:oe},A(T.to),{state:typeof T.to=="object"?ve({},de,T.to.state):de,force:Fe}),q||m)}else T=gt(m,Y,!0,oe,de);return Te(m,Y,T),T})}function Z(k,q){const V=E(k,q);return V?Promise.reject(V):Promise.resolve()}function Re(k,q){let V;const[Y,de,Fe]=gC(k,q);V=Jl(Y.reverse(),"beforeRouteLeave",k,q);for(const p of Y)p.leaveGuards.forEach(m=>{V.push(yr(m,k,q))});const oe=Z.bind(null,k,q);return V.push(oe),ti(V).then(()=>{V=[];for(const p of i.list())V.push(yr(p,k,q));return V.push(oe),ti(V)}).then(()=>{V=Jl(de,"beforeRouteUpdate",k,q);for(const p of de)p.updateGuards.forEach(m=>{V.push(yr(m,k,q))});return V.push(oe),ti(V)}).then(()=>{V=[];for(const p of k.matched)if(p.beforeEnter&&!q.matched.includes(p))if(yn(p.beforeEnter))for(const m of p.beforeEnter)V.push(yr(m,k,q));else V.push(yr(p.beforeEnter,k,q));return V.push(oe),ti(V)}).then(()=>(k.matched.forEach(p=>p.enterCallbacks={}),V=Jl(Fe,"beforeRouteEnter",k,q),V.push(oe),ti(V))).then(()=>{V=[];for(const p of o.list())V.push(yr(p,k,q));return V.push(oe),ti(V)}).catch(p=>Gn(p,8)?p:Promise.reject(p))}function Te(k,q,V){for(const Y of a.list())Y(k,q,V)}function gt(k,q,V,Y,de){const Fe=E(k,q);if(Fe)return Fe;const oe=q===dr,p=oi?history.state:{};V&&(Y||oe?s.replace(k.fullPath,ve({scroll:oe&&p&&p.scroll},de)):s.push(k.fullPath,de)),c.value=k,Jr(k,q,V,oe),on()}let yt;function sn(){yt||(yt=s.listen((k,q,V)=>{if(!tc.listening)return;const Y=S(k),de=z(Y);if(de){ae(ve(de,{replace:!0}),Y).catch(Lo);return}u=Y;const Fe=c.value;oi&&Ak(Pm(Fe.fullPath,V.delta),Mu()),Re(Y,Fe).catch(oe=>Gn(oe,12)?oe:Gn(oe,2)?(ae(oe.to,Y).then(p=>{Gn(p,20)&&!V.delta&&V.type===ra.pop&&s.go(-1,!1)}).catch(Lo),Promise.reject()):(V.delta&&s.go(-V.delta,!1),Se(oe,Y,Fe))).then(oe=>{oe=oe||gt(Y,Fe,!1),oe&&(V.delta&&!Gn(oe,8)?s.go(-V.delta,!1):V.type===ra.pop&&Gn(oe,20)&&s.go(-1,!1)),Te(Y,Fe,oe)}).catch(Lo)}))}let Hn=po(),ho=po(),We;function Se(k,q,V){on(k);const Y=ho.list();return Y.length?Y.forEach(de=>de(k,q,V)):console.error(k),Promise.reject(k)}function we(){return We&&c.value!==dr?Promise.resolve():new Promise((k,q)=>{Hn.add([k,q])})}function on(k){return We||(We=!k,sn(),Hn.list().forEach(([q,V])=>k?V(k):q()),Hn.reset()),k}function Jr(k,q,V,Y){const{scrollBehavior:de}=t;if(!oi||!de)return Promise.resolve();const Fe=!V&&Rk(Pm(k.fullPath,0))||(Y||!V)&&history.state&&history.state.scroll||null;return Tv().then(()=>de(k,q,Fe)).then(oe=>oe&&Ck(oe)).catch(oe=>Se(oe,k,q))}const an=k=>s.go(k);let Nt;const Xs=new Set,tc={currentRoute:c,listening:!0,addRoute:f,removeRoute:g,hasRoute:b,getRoutes:y,resolve:S,options:t,push:x,replace:j,go:an,back:()=>an(-1),forward:()=>an(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ho.add,isReady:we,install(k){const q=this;k.component("RouterLink",br),k.component("RouterView",h_),k.config.globalProperties.$router=q,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>ye(c)}),oi&&!Nt&&c.value===dr&&(Nt=!0,x(s.location).catch(de=>{}));const V={};for(const de in dr)V[de]=qt(()=>c.value[de]);k.provide(Lu,q),k.provide(Xd,qr(V)),k.provide($h,c);const Y=k.unmount;Xs.add(k),k.unmount=function(){Xs.delete(k),Xs.size<1&&(u=dr,yt&&yt(),yt=null,c.value=dr,Nt=!1,We=!1),Y()}}};return tc}function ti(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function gC(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Si(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Si(u,c))||s.push(c))}return[n,r,s]}function Fu(){return nn(Lu)}function Uu(){return nn(Xd)}const yC="/tcc-odonto/assets/rural_logo_branco-aada3225.png",vC="/tcc-odonto/assets/uerj_logo_branco-491f8456.png",_C="/tcc-odonto/assets/ufrj_logo_branco-bdd6a818.png";const Vu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},wC={},bC={class:"footer"},IC=bS('<div class="container" data-v-6991e901><div class="columns" data-v-6991e901><div class="column" data-v-6991e901><h2 class="title has-text-centered is-size-3" data-v-6991e901>Equipe: </h2><div class="equipe" data-v-6991e901><ul data-v-6991e901><li data-v-6991e901><a href="https://www.linkedin.com/in/maxsantos97/" target="_blank" data-v-6991e901>Max Santos - Desenvolvedor</a></li><li data-v-6991e901><a href="http://lattes.cnpq.br/9941773528712076" target="_blank" data-v-6991e901>Tiago França - Orientador</a></li><li data-v-6991e901><a href="http://lattes.cnpq.br/8813744643679880" target="_blank" data-v-6991e901>Adilis França - Doutora</a></li><li data-v-6991e901><a href="http://lattes.cnpq.br/8258110098411280" target="_blank" data-v-6991e901>Laura Primo - Doutora</a></li><li data-v-6991e901><a href="http://lattes.cnpq.br/8945163050246047" target="_blank" data-v-6991e901>Mariana Sancas - Doutoranda</a></li><li data-v-6991e901><a href="http://lattes.cnpq.br/5436324394362565" target="_blank" data-v-6991e901>Maysa Duarte - Doutora</a></li></ul></div></div><div class="column" data-v-6991e901><h2 class="title has-text-centered is-size-3" data-v-6991e901>Realização: </h2><div class="faculdades" data-v-6991e901><figure class="image is-128x128" data-v-6991e901><a href="https://portal.ufrrj.br/" target="_blank" data-v-6991e901><img title="UFRRJ | Universidade Federal Rural do Rio de Janeiro" src="'+yC+'" data-v-6991e901></a></figure><figure class="image is-128x128" data-v-6991e901><a href="https://www.uerj.br/" target="_blank" data-v-6991e901><img title="UERJ | Universidade do Estado do Rio de Janeiro" src="'+vC+'" data-v-6991e901></a></figure><figure class="image is-128x128" data-v-6991e901><a href="https://ufrj.br/" target="_blank" data-v-6991e901><img title="UFRJ | Universidade Federal do Rio de Janeiro" src="'+_C+'" data-v-6991e901></a></figure></div></div></div><div data-v-6991e901><p class="has-text-centered" data-v-6991e901><strong data-v-6991e901>Odonto App</strong> desenvolvido por <a href="https://www.linkedin.com/in/maxsantos97" data-v-6991e901>Max Santos</a></p></div></div>',1),EC=[IC];function TC(t,e){return Ie(),Ce("footer",bC,EC)}const SC=Vu(wC,[["render",TC],["__scopeId","data-v-6991e901"]]);const kC={},CC=t=>(Gd("data-v-c7615c59"),t=t(),Wd(),t),AC=CC(()=>w("div",{class:"container"},[w("h1",{class:"title has-text-centered is-1 my-4"},"Odonto App")],-1)),RC=[AC];function xC(t,e){return Ie(),Ce("header",null,RC)}const NC=Vu(kC,[["render",xC],["__scopeId","data-v-c7615c59"]]);const DC={class:"conteudo"},OC={__name:"App",setup(t){return(e,n)=>(Ie(),Ce("div",DC,[Me(NC),Me(ye(h_)),Me(SC)]))}};/**
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
 */const d_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},PC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},f_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(d_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):PC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},MC=function(t){const e=d_(t);return f_.encodeByteArray(e,!0)},qc=function(t){return MC(t).replace(/\./g,"")},p_=function(t){try{return f_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function jc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!LC(n)||(t[n]=jc(t[n],e[n]));return t}function LC(t){return t!=="__proto__"}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function $u(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function UC(){return typeof self=="object"&&self.self===self}function m_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function g_(){const t=Ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function VC(){return!$u()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sa(){try{return typeof indexedDB=="object"}catch{return!1}}function $C(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function BC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qC=()=>BC().__FIREBASE_DEFAULTS__,jC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&p_(t[1]);return e&&JSON.parse(e)},ef=()=>{try{return qC()||jC()||KC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},y_=t=>{var e,n;return(n=(e=ef())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},v_=t=>{const e=y_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},HC=()=>{var t;return(t=ef())===null||t===void 0?void 0:t.config},__=t=>{var e;return(e=ef())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class GC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function w_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[qc(JSON.stringify(n)),qc(JSON.stringify(o)),a].join(".")}/**
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
 */const WC="FirebaseError";class bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=WC,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,js.prototype.create)}}class js{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?zC(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new bt(s,a,r)}}function zC(t,e){return t.replace(QC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const QC=/\{\$([^}]+)}/g;/**
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
 */function zm(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function YC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Kc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Qm(i)&&Qm(o)){if(!Kc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Qm(t){return t!==null&&typeof t=="object"}/**
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
 */function zi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function li(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Co(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function b_(t,e){const n=new JC(t,e);return n.subscribe.bind(n)}class JC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");XC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Xl),s.error===void 0&&(s.error=Xl),s.complete===void 0&&(s.complete=Xl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xl(){}/**
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
 */function K(t){return t&&t._delegate?t._delegate:t}class vn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ns="[DEFAULT]";/**
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
 */class ZC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new GC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tA(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eA(t){return t===ns?void 0:t}function tA(t){return t.instantiationMode==="EAGER"}/**
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
 */class nA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ZC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const tf=[];var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const I_={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},rA=pe.INFO,sA={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},iA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=sA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bu{constructor(e){this.name=e,this._logLevel=rA,this._logHandler=iA,this._userLogHandler=null,tf.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?I_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}function oA(t){tf.forEach(e=>{e.setLogLevel(t)})}function aA(t,e){for(const n of tf){let r=null;e&&e.level&&(r=I_[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(s,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(r??s.logLevel)&&t({level:pe[i].toLowerCase(),message:a,args:o,type:s.name})}}}const cA=(t,e)=>e.some(n=>t instanceof n);let Ym,Jm;function uA(){return Ym||(Ym=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lA(){return Jm||(Jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const E_=new WeakMap,Bh=new WeakMap,T_=new WeakMap,Zl=new WeakMap,nf=new WeakMap;function hA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Cr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&E_.set(n,t)}).catch(()=>{}),nf.set(e,t),e}function dA(t){if(Bh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Bh.set(t,e)}let qh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||T_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fA(t){qh=t(qh)}function pA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(eh(this),e,...n);return T_.set(r,e.sort?e.sort():[e]),Cr(r)}:lA().includes(t)?function(...e){return t.apply(eh(this),e),Cr(E_.get(this))}:function(...e){return Cr(t.apply(eh(this),e))}}function mA(t){return typeof t=="function"?pA(t):(t instanceof IDBTransaction&&dA(t),cA(t,uA())?new Proxy(t,qh):t)}function Cr(t){if(t instanceof IDBRequest)return hA(t);if(Zl.has(t))return Zl.get(t);const e=mA(t);return e!==t&&(Zl.set(t,e),nf.set(e,t)),e}const eh=t=>nf.get(t);function gA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Cr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Cr(o.result),c.oldVersion,c.newVersion,Cr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const yA=["get","getKey","getAll","getAllKeys","count"],vA=["put","add","delete","clear"],th=new Map;function Xm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(th.get(e))return th.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=vA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yA.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return th.set(e,i),i}fA(t=>({...t,get:(e,n,r)=>Xm(e,n)||t.get(e,n,r),has:(e,n)=>!!Xm(e,n)||t.has(e,n)}));/**
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
 */class _A{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jh="@firebase/app",Zm="0.9.0";/**
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
 */const Cs=new Bu("@firebase/app"),bA="@firebase/app-compat",IA="@firebase/analytics-compat",EA="@firebase/analytics",TA="@firebase/app-check-compat",SA="@firebase/app-check",kA="@firebase/auth",CA="@firebase/auth-compat",AA="@firebase/database",RA="@firebase/database-compat",xA="@firebase/functions",NA="@firebase/functions-compat",DA="@firebase/installations",OA="@firebase/installations-compat",PA="@firebase/messaging",MA="@firebase/messaging-compat",LA="@firebase/performance",FA="@firebase/performance-compat",UA="@firebase/remote-config",VA="@firebase/remote-config-compat",$A="@firebase/storage",BA="@firebase/storage-compat",qA="@firebase/firestore",jA="@firebase/firestore-compat",KA="firebase",HA="9.15.0";/**
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
 */const Nr="[DEFAULT]",GA={[jh]:"fire-core",[bA]:"fire-core-compat",[EA]:"fire-analytics",[IA]:"fire-analytics-compat",[SA]:"fire-app-check",[TA]:"fire-app-check-compat",[kA]:"fire-auth",[CA]:"fire-auth-compat",[AA]:"fire-rtdb",[RA]:"fire-rtdb-compat",[xA]:"fire-fn",[NA]:"fire-fn-compat",[DA]:"fire-iid",[OA]:"fire-iid-compat",[PA]:"fire-fcm",[MA]:"fire-fcm-compat",[LA]:"fire-perf",[FA]:"fire-perf-compat",[UA]:"fire-rc",[VA]:"fire-rc-compat",[$A]:"fire-gcs",[BA]:"fire-gcs-compat",[qA]:"fire-fst",[jA]:"fire-fst-compat","fire-js":"fire-js",[KA]:"fire-js-all"};/**
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
 */const Dr=new Map,ia=new Map;function Hc(t,e){try{t.container.addComponent(e)}catch(n){Cs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function S_(t,e){t.container.addOrOverwriteComponent(e)}function tr(t){const e=t.name;if(ia.has(e))return Cs.debug(`There were multiple attempts to register component ${e}.`),!1;ia.set(e,t);for(const n of Dr.values())Hc(n,t);return!0}function Qi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function WA(t,e,n=Nr){Qi(t,e).clearInstance(n)}function zA(){ia.clear()}/**
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
 */const QA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Xn=new js("app","Firebase",QA);/**
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
 */let YA=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}};/**
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
 */const jr=HA;function qu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nr,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Xn.create("bad-app-name",{appName:String(s)});if(n||(n=HC()),!n)throw Xn.create("no-options");const i=Dr.get(s);if(i){if(Kc(n,i.options)&&Kc(r,i.config))return i;throw Xn.create("duplicate-app",{appName:s})}const o=new nA(s);for(const c of ia.values())o.addComponent(c);const a=new YA(n,r,o);return Dr.set(s,a),a}function ju(t=Nr){const e=Dr.get(t);if(!e&&t===Nr)return qu();if(!e)throw Xn.create("no-app",{appName:t});return e}function JA(){return Array.from(Dr.values())}async function k_(t){const e=t.name;Dr.has(e)&&(Dr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Wt(t,e,n){var r;let s=(r=GA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cs.warn(a.join(" "));return}tr(new vn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function C_(t,e){if(t!==null&&typeof t!="function")throw Xn.create("invalid-log-argument");aA(t,e)}function A_(t){oA(t)}/**
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
 */const XA="firebase-heartbeat-database",ZA=1,oa="firebase-heartbeat-store";let nh=null;function R_(){return nh||(nh=gA(XA,ZA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(oa)}}}).catch(t=>{throw Xn.create("idb-open",{originalErrorMessage:t.message})})),nh}async function eR(t){try{return(await R_()).transaction(oa).objectStore(oa).get(x_(t))}catch(e){if(e instanceof bt)Cs.warn(e.message);else{const n=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cs.warn(n.message)}}}async function eg(t,e){try{const r=(await R_()).transaction(oa,"readwrite");return await r.objectStore(oa).put(e,x_(t)),r.done}catch(n){if(n instanceof bt)Cs.warn(n.message);else{const r=Xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cs.warn(r.message)}}}function x_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tR=1024,nR=30*24*60*60*1e3;class rR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=nR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=tg(),{heartbeatsToSend:n,unsentEntries:r}=sR(this._heartbeatsCache.heartbeats),s=qc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function tg(){return new Date().toISOString().substring(0,10)}function sR(t,e=tR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ng(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ng(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sa()?$C().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await eR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return eg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return eg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ng(t){return qc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function oR(t){tr(new vn("platform-logger",e=>new _A(e),"PRIVATE")),tr(new vn("heartbeat",e=>new rR(e),"PRIVATE")),Wt(jh,Zm,t),Wt(jh,Zm,"esm2017"),Wt("fire-js","")}oR("");const aR=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:jr,_DEFAULT_ENTRY_NAME:Nr,_addComponent:Hc,_addOrOverwriteComponent:S_,_apps:Dr,_clearComponents:zA,_components:ia,_getProvider:Qi,_registerComponent:tr,_removeServiceInstance:WA,deleteApp:k_,getApp:ju,getApps:JA,initializeApp:qu,onLog:C_,registerVersion:Wt,setLogLevel:A_,FirebaseError:bt},Symbol.toStringTag,{value:"Module"}));function rf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}const mo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ni={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function cR(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function N_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uR=cR,lR=N_,D_=new js("auth","Firebase",N_());/**
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
 */const rg=new Bu("@firebase/auth");function kc(t,...e){rg.logLevel<=pe.ERROR&&rg.error(`Auth (${jr}): ${t}`,...e)}/**
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
 */function st(t,...e){throw sf(t,...e)}function dt(t,...e){return sf(t,...e)}function O_(t,e,n){const r=Object.assign(Object.assign({},lR()),{[e]:n});return new js("auth","Firebase",r).create(e,{appName:t.name})}function Yi(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&st(t,"argument-error"),O_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function sf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return D_.create(t,...e)}function O(t,e,...n){if(!t)throw sf(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw kc(e),new Error(e)}function _n(t,e){t||Dn(e)}/**
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
 */const sg=new Map;function Kt(t){_n(t instanceof Function,"Expected a class definition");let e=sg.get(t);return e?(_n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sg.set(t,e),e)}/**
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
 */function hR(t,e){const n=Qi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Kc(i,e??{}))return s;st(s,"already-initialized")}return n.initialize({options:e})}function dR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function aa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function of(){return ig()==="http:"||ig()==="https:"}function ig(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function fR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(of()||m_()||"connection"in navigator)?navigator.onLine:!0}function pR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xa{constructor(e,n){this.shortDelay=e,this.longDelay=n,_n(n>e,"Short delay should be less than long delay!"),this.isMobile=FC()||Zd()}get(){return fR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function af(t,e){_n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class P_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const gR=new xa(3e4,6e4);function Ze(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function at(t,e,n,r,s={}){return M_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=zi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),P_.fetch()(L_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function M_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mR),e);try{const s=new yR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ao(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ao(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ao(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ao(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw O_(t,l,u);st(t,l)}}catch(s){if(s instanceof bt)throw s;st(t,"network-request-failed")}}async function or(t,e,n,r,s={}){const i=await at(t,e,n,r,s);return"mfaPendingCredential"in i&&st(t,"multi-factor-auth-required",{_serverResponse:i}),i}function L_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?af(t.config,s):`${t.config.apiScheme}://${s}`}class yR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dt(this.auth,"network-request-failed")),gR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ao(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=dt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function vR(t,e){return at(t,"POST","/v1/accounts:delete",e)}async function _R(t,e){return at(t,"POST","/v1/accounts:update",e)}async function wR(t,e){return at(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Uo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bR(t,e=!1){const n=K(t),r=await n.getIdToken(e),s=Ku(r);O(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Uo(rh(s.auth_time)),issuedAtTime:Uo(rh(s.iat)),expirationTime:Uo(rh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function rh(t){return Number(t)*1e3}function Ku(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return kc("JWT malformed, contained fewer than 3 sections"),null;try{const s=p_(n);return s?JSON.parse(s):(kc("Failed to decode base64 JWT payload"),null)}catch(s){return kc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function IR(t){const e=Ku(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function nr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bt&&ER(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ER({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class TR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class F_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Uo(this.lastLoginAt),this.creationTime=Uo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ca(t){var e;const n=t.auth,r=await t.getIdToken(),s=await nr(t,wR(n,{idToken:r}));O(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?CR(i.providerUserInfo):[],a=kR(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new F_(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function SR(t){const e=K(t);await ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function CR(t){return t.map(e=>{var{providerId:n}=e,r=rf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function AR(t,e){const n=await M_(t,{},async()=>{const r=zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=L_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ua{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):IR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await AR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ua;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(O(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(O(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ua,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function fr(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bs{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=rf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new F_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await nr(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bR(this,e)}reload(){return SR(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new bs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ca(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await nr(this,vR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(u=n.createdAt)!==null&&u!==void 0?u:void 0,A=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:E,emailVerified:x,isAnonymous:j,providerData:z,stsTokenManager:ae}=n;O(E&&ae,e,"internal-error");const Z=ua.fromJSON(this.name,ae);O(typeof E=="string",e,"internal-error"),fr(h,e.name),fr(d,e.name),O(typeof x=="boolean",e,"internal-error"),O(typeof j=="boolean",e,"internal-error"),fr(f,e.name),fr(g,e.name),fr(y,e.name),fr(b,e.name),fr(S,e.name),fr(A,e.name);const Re=new bs({uid:E,auth:e,email:d,emailVerified:x,displayName:h,isAnonymous:j,photoURL:g,phoneNumber:f,tenantId:y,stsTokenManager:Z,createdAt:S,lastLoginAt:A});return z&&Array.isArray(z)&&(Re.providerData=z.map(Te=>Object.assign({},Te))),b&&(Re._redirectEventId=b),Re}static async _fromIdTokenResponse(e,n,r=!1){const s=new ua;s.updateFromServerResponse(n);const i=new bs({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ca(i),i}}/**
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
 */class U_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}U_.type="NONE";const Ci=U_;/**
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
 */function Is(t,e,n){return`firebase:${t}:${e}:${n}`}class yi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Is(this.userKey,s.apiKey,i),this.fullPersistenceKey=Is("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new yi(Kt(Ci),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Kt(Ci);const o=Is(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=bs._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new yi(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new yi(i,e,r))}}/**
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
 */function og(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(B_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(V_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(q_(e))return"Blackberry";if(j_(e))return"Webos";if(cf(e))return"Safari";if((e.includes("chrome/")||$_(e))&&!e.includes("edge/"))return"Chrome";if(Na(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function V_(t=Ue()){return/firefox\//i.test(t)}function cf(t=Ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $_(t=Ue()){return/crios\//i.test(t)}function B_(t=Ue()){return/iemobile/i.test(t)}function Na(t=Ue()){return/android/i.test(t)}function q_(t=Ue()){return/blackberry/i.test(t)}function j_(t=Ue()){return/webos/i.test(t)}function Ji(t=Ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RR(t=Ue()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function xR(t=Ue()){var e;return Ji(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NR(){return g_()&&document.documentMode===10}function K_(t=Ue()){return Ji(t)||Na(t)||j_(t)||q_(t)||/windows phone/i.test(t)||B_(t)}function DR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function H_(t,e=[]){let n;switch(t){case"Browser":n=og(Ue());break;case"Worker":n=`${og(Ue())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jr}/${r}`}/**
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
 */class OR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class PR{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ag(this),this.idTokenSubscription=new ag(this),this.beforeStateQueue=new OR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=D_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await yi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ca(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?K(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new js("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await yi.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=H_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function it(t){return K(t)}class ag{constructor(e){this.auth=e,this.observer=null,this.addObserver=b_(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function G_(t,e,n){const r=it(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=W_(e),{host:o,port:a}=MR(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||LR()}function W_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function MR(t){const e=W_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:cg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:cg(o)}}}function cg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Xi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}/**
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
 */async function z_(t,e){return at(t,"POST","/v1/accounts:resetPassword",Ze(t,e))}async function Q_(t,e){return at(t,"POST","/v1/accounts:update",e)}async function FR(t,e){return at(t,"POST","/v1/accounts:update",Ze(t,e))}/**
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
 */async function UR(t,e){return or(t,"POST","/v1/accounts:signInWithPassword",Ze(t,e))}async function Hu(t,e){return at(t,"POST","/v1/accounts:sendOobCode",Ze(t,e))}async function VR(t,e){return Hu(t,e)}async function $R(t,e){return Hu(t,e)}async function BR(t,e){return Hu(t,e)}async function qR(t,e){return Hu(t,e)}/**
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
 */async function jR(t,e){return or(t,"POST","/v1/accounts:signInWithEmailLink",Ze(t,e))}async function KR(t,e){return or(t,"POST","/v1/accounts:signInWithEmailLink",Ze(t,e))}/**
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
 */class la extends Xi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new la(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new la(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return UR(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jR(e,{email:this._email,oobCode:this._password});default:st(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Q_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return KR(e,{idToken:n,email:this._email,oobCode:this._password});default:st(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Zn(t,e){return or(t,"POST","/v1/accounts:signInWithIdp",Ze(t,e))}/**
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
 */const HR="http://localhost";class Bn extends Xi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):st("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=rf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Bn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zn(e,n)}buildRequest(){const e={requestUri:HR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zi(n)}return e}}/**
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
 */async function GR(t,e){return at(t,"POST","/v1/accounts:sendVerificationCode",Ze(t,e))}async function WR(t,e){return or(t,"POST","/v1/accounts:signInWithPhoneNumber",Ze(t,e))}async function zR(t,e){const n=await or(t,"POST","/v1/accounts:signInWithPhoneNumber",Ze(t,e));if(n.temporaryProof)throw Ao(t,"account-exists-with-different-credential",n);return n}const QR={USER_NOT_FOUND:"user-not-found"};async function YR(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return or(t,"POST","/v1/accounts:signInWithPhoneNumber",Ze(t,n),QR)}/**
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
 */class Es extends Xi{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Es({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Es({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return WR(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return zR(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return YR(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:s}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!n&&!s&&!i?null:new Es({verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
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
 */function JR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XR(t){const e=li(Co(t)).link,n=e?li(Co(e)).deep_link_id:null,r=li(Co(t)).deep_link_id;return(r?li(Co(r)).link:null)||r||n||e||t}class Gu{constructor(e){var n,r,s,i,o,a;const c=li(Co(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=JR((s=c.mode)!==null&&s!==void 0?s:null);O(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=XR(e);try{return new Gu(n)}catch{return null}}}/**
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
 */class Kr{constructor(){this.providerId=Kr.PROVIDER_ID}static credential(e,n){return la._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Gu.parseLink(n);return O(r,"argument-error"),la._fromEmailAndCode(e,r.code,r.tenantId)}}Kr.PROVIDER_ID="password";Kr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Kr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ar{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zi extends ar{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class vi extends Zi{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return O("providerId"in n&&"signInMethod"in n,"argument-error"),Bn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return O(e.idToken||e.accessToken,"argument-error"),Bn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return vi.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return vi.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:a}=e;if(!r&&!s&&!n&&!i||!a)return null;try{return new vi(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:i})}catch{return null}}}/**
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
 */class kn extends Zi{constructor(){super("facebook.com")}static credential(e){return Bn._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
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
 */class Cn extends Zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Bn._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
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
 */class An extends Zi{constructor(){super("github.com")}static credential(e){return Bn._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
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
 */const ZR="http://localhost";class Ai extends Xi{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Zn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,pendingToken:i}=n;return!r||!s||!i||r!==s?null:new Ai(r,i)}static _create(e,n){return new Ai(e,n)}buildRequest(){return{requestUri:ZR,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const e1="saml.";class Gc extends ar{constructor(e){O(e.startsWith(e1),"argument-error"),super(e)}static credentialFromResult(e){return Gc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Gc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Ai.fromJSON(e);return O(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Ai._create(r,n)}catch{return null}}}/**
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
 */class Rn extends Zi{constructor(){super("twitter.com")}static credential(e,n){return Bn._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.TWITTER_SIGN_IN_METHOD="twitter.com";Rn.PROVIDER_ID="twitter.com";/**
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
 */async function Y_(t,e){return or(t,"POST","/v1/accounts:signUp",Ze(t,e))}/**
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
 */class rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await bs._fromIdTokenResponse(e,r,s),o=ug(r);return new rn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ug(r);return new rn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ug(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function t1(t){var e;const n=it(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new rn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Y_(n,{returnSecureToken:!0}),s=await rn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
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
 */class Wc extends bt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Wc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Wc(e,n,r,s)}}function J_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Wc._fromErrorAndOperation(t,i,e,r):i})}/**
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
 */function X_(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function n1(t,e){const n=K(t);await Wu(!0,n,e);const{providerUserInfo:r}=await _R(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),s=X_(r||[]);return n.providerData=n.providerData.filter(i=>s.has(i.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function uf(t,e,n=!1){const r=await nr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rn._forOperation(t,"link",r)}async function Wu(t,e,n){await ca(e);const r=X_(e.providerData),s=t===!1?"provider-already-linked":"no-such-provider";O(r.has(n)===t,e.auth,s)}/**
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
 */async function Z_(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await nr(t,J_(r,s,e,t),n);O(i.idToken,r,"internal-error");const o=Ku(i.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(t.uid===a,r,"user-mismatch"),rn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&st(r,"user-mismatch"),i}}/**
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
 */async function ew(t,e,n=!1){const r="signIn",s=await J_(t,r,e),i=await rn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function zu(t,e){return ew(it(t),e)}async function tw(t,e){const n=K(t);return await Wu(!1,n,e.providerId),uf(n,e)}async function nw(t,e){return Z_(K(t),e)}/**
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
 */async function r1(t,e){return or(t,"POST","/v1/accounts:signInWithCustomToken",Ze(t,e))}/**
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
 */async function s1(t,e){const n=it(t),r=await r1(n,{token:e,returnSecureToken:!0}),s=await rn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(s.user),s}/**
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
 */class Qu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?lf._fromServerResponse(e,n):st(e,"internal-error")}}class lf extends Qu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new lf(n)}}/**
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
 */function Yu(t,e,n){var r;O(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),O(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(O(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(O(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function i1(t,e,n){const r=K(t),s={requestType:"PASSWORD_RESET",email:e};n&&Yu(r,s,n),await $R(r,s)}async function o1(t,e,n){await z_(K(t),{oobCode:e,newPassword:n})}async function a1(t,e){await FR(K(t),{oobCode:e})}async function rw(t,e){const n=K(t),r=await z_(n,{oobCode:e}),s=r.requestType;switch(O(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":O(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":O(r.mfaInfo,n,"internal-error");default:O(r.email,n,"internal-error")}let i=null;return r.mfaInfo&&(i=Qu._fromServerResponse(it(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:i},operation:s}}async function c1(t,e){const{data:n}=await rw(K(t),e);return n.email}async function sw(t,e,n){const r=it(t),s=await Y_(r,{returnSecureToken:!0,email:e,password:n}),i=await rn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function hf(t,e,n){return zu(K(t),Kr.credential(e,n))}/**
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
 */async function u1(t,e,n){const r=K(t),s={requestType:"EMAIL_SIGNIN",email:e};O(n.handleCodeInApp,r,"argument-error"),n&&Yu(r,s,n),await BR(r,s)}function l1(t,e){const n=Gu.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function h1(t,e,n){const r=K(t),s=Kr.credentialWithLink(e,n||aa());return O(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),zu(r,s)}/**
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
 */async function d1(t,e){return at(t,"POST","/v1/accounts:createAuthUri",Ze(t,e))}/**
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
 */async function f1(t,e){const n=of()?aa():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:s}=await d1(K(t),r);return s||[]}async function p1(t,e){const n=K(t),s={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Yu(n.auth,s,e);const{email:i}=await VR(n.auth,s);i!==t.email&&await t.reload()}async function m1(t,e,n){const r=K(t),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Yu(r.auth,i,n);const{email:o}=await qR(r.auth,i);o!==t.email&&await t.reload()}/**
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
 */async function g1(t,e){return at(t,"POST","/v1/accounts:update",e)}/**
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
 */async function y1(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=K(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await nr(r,g1(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function v1(t,e){return iw(K(t),e,null)}function _1(t,e){return iw(K(t),null,e)}async function iw(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await nr(t,Q_(r,i));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function w1(t){var e,n;if(!t)return null;const{providerId:r}=t,s=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},i=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Ku(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new _i(i,a)}}if(!r)return null;switch(r){case"facebook.com":return new b1(i,s);case"github.com":return new I1(i,s);case"google.com":return new E1(i,s);case"twitter.com":return new T1(i,s,t.screenName||null);case"custom":case"anonymous":return new _i(i,null);default:return new _i(i,r,s)}}class _i{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class ow extends _i{constructor(e,n,r,s){super(e,n,r),this.username=s}}class b1 extends _i{constructor(e,n){super(e,"facebook.com",n)}}class I1 extends ow{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class E1 extends _i{constructor(e,n){super(e,"google.com",n)}}class T1 extends ow{constructor(e,n,r){super(e,"twitter.com",n,r)}}function S1(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:w1(n)}function k1(t,e,n,r){return K(t).onIdTokenChanged(e,n,r)}function C1(t,e,n){return K(t).beforeAuthStateChanged(e,n)}class ps{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new ps("enroll",e,n)}static _fromMfaPendingCredential(e){return new ps("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return ps._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ps._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class df{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=it(e),s=n.customData._serverResponse,i=(s.mfaInfo||[]).map(a=>Qu._fromServerResponse(r,a));O(s.mfaPendingCredential,r,"internal-error");const o=ps._fromMfaPendingCredential(s.mfaPendingCredential);return new df(o,i,async a=>{const c=await a._process(r,o);delete s.mfaInfo,delete s.mfaPendingCredential;const u=Object.assign(Object.assign({},s),{idToken:c.idToken,refreshToken:c.refreshToken});switch(n.operationType){case"signIn":const l=await rn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return O(n.user,r,"internal-error"),rn._forOperation(n.user,n.operationType,u);default:st(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function A1(t,e){var n;const r=K(t),s=e;return O(e.customData.operationType,r,"argument-error"),O((n=s.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),df._fromError(r,s)}/**
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
 */function R1(t,e){return at(t,"POST","/v2/accounts/mfaEnrollment:start",Ze(t,e))}function x1(t,e){return at(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ze(t,e))}function N1(t,e){return at(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ze(t,e))}class ff{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Qu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new ff(e)}async getSession(){return ps._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,s=await this.getSession(),i=await nr(this.user,r._process(this.user.auth,s,n));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),s=await nr(this.user,N1(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:i})=>i!==n),await this.user._updateTokensIfNecessary(s);try{await this.user.reload()}catch(i){if((i==null?void 0:i.code)!=="auth/user-token-expired")throw i}}}const sh=new WeakMap;function D1(t){const e=K(t);return sh.has(e)||sh.set(e,ff._fromUser(e)),sh.get(e)}const zc="__sak";/**
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
 */class aw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zc,"1"),this.storage.removeItem(zc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function O1(){const t=Ue();return cf(t)||Ji(t)}const P1=1e3,M1=10;class cw extends aw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=O1()&&DR(),this.fallbackToPolling=K_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);NR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,M1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},P1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cw.type="LOCAL";const Ju=cw;/**
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
 */class uw extends aw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uw.type="SESSION";const Or=uw;/**
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
 */function L1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Xu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await L1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xu.receivers=[];/**
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
 */function Da(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class F1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Da("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ye(){return window}function U1(t){Ye().location.href=t}/**
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
 */function pf(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function V1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function B1(){return pf()?self:null}/**
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
 */const lw="firebaseLocalStorageDb",q1=1,Qc="firebaseLocalStorage",hw="fbase_key";class Oa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zu(t,e){return t.transaction([Qc],e?"readwrite":"readonly").objectStore(Qc)}function j1(){const t=indexedDB.deleteDatabase(lw);return new Oa(t).toPromise()}function Kh(){const t=indexedDB.open(lw,q1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qc,{keyPath:hw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qc)?e(r):(r.close(),await j1(),e(await Kh()))})})}async function lg(t,e,n){const r=Zu(t,!0).put({[hw]:e,value:n});return new Oa(r).toPromise()}async function K1(t,e){const n=Zu(t,!1).get(e),r=await new Oa(n).toPromise();return r===void 0?null:r.value}function hg(t,e){const n=Zu(t,!0).delete(e);return new Oa(n).toPromise()}const H1=800,G1=3;class dw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>G1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xu._getInstance(B1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await V1(),!this.activeServiceWorker)return;this.sender=new F1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kh();return await lg(e,zc,"1"),await hg(e,zc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>K1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Zu(s,!1).getAll();return new Oa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),H1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dw.type="LOCAL";const Ri=dw;/**
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
 */function W1(t,e){return at(t,"POST","/v2/accounts/mfaSignIn:start",Ze(t,e))}function z1(t,e){return at(t,"POST","/v2/accounts/mfaSignIn:finalize",Ze(t,e))}/**
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
 */async function Q1(t){return(await at(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function Y1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function fw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=dt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Y1().appendChild(r)})}function pw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const J1=500,X1=6e4,cc=1e12;class Z1{constructor(e){this.auth=e,this.counter=cc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new ex(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||cc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||cc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||cc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class ex{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;O(s,"argument-error",{appName:n}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=tx(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},X1)},J1))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function tx(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const ih=pw("rcb"),nx=new xa(3e4,6e4),rx="https://www.google.com/recaptcha/api.js?";class sx{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ye().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return O(ix(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Ye().grecaptcha):new Promise((r,s)=>{const i=Ye().setTimeout(()=>{s(dt(e,"network-request-failed"))},nx.get());Ye()[ih]=()=>{Ye().clearTimeout(i),delete Ye()[ih];const a=Ye().grecaptcha;if(!a){s(dt(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${rx}?${zi({onload:ih,render:"explicit",hl:n})}`;fw(o).catch(()=>{clearTimeout(i),s(dt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ye().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function ix(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class ox{async load(e){return new Z1(e)}clearedOneInstance(){}}/**
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
 */const mw="recaptcha",ax={theme:"light",type:"image"};let cx=class{constructor(e,n=Object.assign({},ax),r){this.parameters=n,this.type=mw,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=it(r),this.isInvisible=this.parameters.size==="invisible",O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof e=="string"?document.getElementById(e):e;O(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new ox:new sx,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){O(!this.parameters.sitekey,this.auth,"argument-error"),O(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ye()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){O(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){O(of()&&!pf(),this.auth,"internal-error"),await ux(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Q1(this.auth);O(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return O(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function ux(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class mf{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Es._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function lx(t,e,n){const r=it(t),s=await el(r,e,K(n));return new mf(s,i=>zu(r,i))}async function hx(t,e,n){const r=K(t);await Wu(!1,r,"phone");const s=await el(r.auth,e,K(n));return new mf(s,i=>tw(r,i))}async function dx(t,e,n){const r=K(t),s=await el(r.auth,e,K(n));return new mf(s,i=>nw(r,i))}async function el(t,e,n){var r;const s=await n.verify();try{O(typeof s=="string",t,"argument-error"),O(n.type===mw,t,"argument-error");let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const o=i.session;if("phoneNumber"in i)return O(o.type==="enroll",t,"internal-error"),(await R1(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{O(o.type==="signin",t,"internal-error");const a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;return O(a,t,"missing-multi-factor-info"),(await W1(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await GR(t,{phoneNumber:i.phoneNumber,recaptchaToken:s});return o}}finally{n._reset()}}async function fx(t,e){await uf(K(t),e)}/**
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
 */let Fn=class{constructor(e){this.providerId=Fn.PROVIDER_ID,this.auth=it(e)}verifyPhoneNumber(e,n){return el(this.auth,e,K(n))}static credential(e,n){return Es._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Fn.credentialFromTaggedObject(n)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Es._fromTokenResponse(n,r):null}};Fn.PROVIDER_ID="phone";Fn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Ks(t,e){return e?Kt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class gf extends Xi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function px(t){return ew(t.auth,new gf(t),t.bypassAuthState)}function mx(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Z_(n,new gf(t),t.bypassAuthState)}async function gx(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),uf(n,new gf(t),t.bypassAuthState)}/**
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
 */class gw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return px;case"linkViaPopup":case"linkViaRedirect":return gx;case"reauthViaPopup":case"reauthViaRedirect":return mx;default:st(this.auth,"internal-error")}}resolve(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const yx=new xa(2e3,1e4);async function vx(t,e,n){const r=it(t);Yi(t,e,ar);const s=Ks(r,n);return new Qn(r,"signInViaPopup",e,s).executeNotNull()}async function _x(t,e,n){const r=K(t);Yi(r.auth,e,ar);const s=Ks(r.auth,n);return new Qn(r.auth,"reauthViaPopup",e,s,r).executeNotNull()}async function wx(t,e,n){const r=K(t);Yi(r.auth,e,ar);const s=Ks(r.auth,n);return new Qn(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class Qn extends gw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Qn.currentPopupAction&&Qn.currentPopupAction.cancel(),Qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){_n(this.filter.length===1,"Popup operations only handle one event");const e=Da();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,yx.get())};e()}}Qn.currentPopupAction=null;/**
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
 */const bx="pendingRedirect",Vo=new Map;class Ix extends gw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vo.get(this.auth._key());if(!e){try{const r=await Ex(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vo.set(this.auth._key(),e)}return this.bypassAuthState||Vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ex(t,e){const n=vw(e),r=yw(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function yf(t,e){return yw(t)._set(vw(e),"true")}function Tx(){Vo.clear()}function vf(t,e){Vo.set(t._key(),e)}function yw(t){return Kt(t._redirectPersistence)}function vw(t){return Is(bx,t.config.apiKey,t.name)}/**
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
 */function Sx(t,e,n){return kx(t,e,n)}async function kx(t,e,n){const r=it(t);Yi(t,e,ar);const s=Ks(r,n);return await yf(s,r),s._openRedirect(r,e,"signInViaRedirect")}function Cx(t,e,n){return Ax(t,e,n)}async function Ax(t,e,n){const r=K(t);Yi(r.auth,e,ar);const s=Ks(r.auth,n);await yf(s,r.auth);const i=await _w(r);return s._openRedirect(r.auth,e,"reauthViaRedirect",i)}function Rx(t,e,n){return xx(t,e,n)}async function xx(t,e,n){const r=K(t);Yi(r.auth,e,ar);const s=Ks(r.auth,n);await Wu(!1,r,e.providerId),await yf(s,r.auth);const i=await _w(r);return s._openRedirect(r.auth,e,"linkViaRedirect",i)}async function Nx(t,e){return await it(t)._initializationPromise,tl(t,e,!1)}async function tl(t,e,n=!1){const r=it(t),s=Ks(r,e),o=await new Ix(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function _w(t){const e=Da(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const Dx=10*60*1e3;class ww{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ox(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!bw(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Dx&&this.cachedEventUids.clear(),this.cachedEventUids.has(dg(e))}saveEventToCache(e){this.cachedEventUids.add(dg(e)),this.lastProcessedEventTime=Date.now()}}function dg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ox(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bw(t);default:return!1}}/**
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
 */async function Iw(t,e={}){return at(t,"GET","/v1/projects",e)}/**
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
 */const Px=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mx=/^https?/;async function Lx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Iw(t);for(const n of e)try{if(Fx(n))return}catch{}st(t,"unauthorized-domain")}function Fx(t){const e=aa(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Mx.test(n))return!1;if(Px.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Ux=new xa(3e4,6e4);function fg(){const t=Ye().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Vx(t){return new Promise((e,n)=>{var r,s,i;function o(){fg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fg(),n(dt(t,"network-request-failed"))},timeout:Ux.get()})}if(!((s=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ye().gapi)===null||i===void 0)&&i.load)o();else{const a=pw("iframefcb");return Ye()[a]=()=>{gapi.load?o():n(dt(t,"network-request-failed"))},fw(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Cc=null,e})}let Cc=null;function $x(t){return Cc=Cc||Vx(t),Cc}/**
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
 */const Bx=new xa(5e3,15e3),qx="__/auth/iframe",jx="emulator/auth/iframe",Kx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gx(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?af(e,jx):`https://${t.config.authDomain}/${qx}`,r={apiKey:e.apiKey,appName:t.name,v:jr},s=Hx.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${zi(r).slice(1)}`}async function Wx(t){const e=await $x(t),n=Ye().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:Gx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kx,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=dt(t,"network-request-failed"),a=Ye().setTimeout(()=>{i(o)},Bx.get());function c(){Ye().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const zx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qx=500,Yx=600,Jx="_blank",Xx="http://localhost";class pg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zx(t,e,n,r=Qx,s=Yx){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},zx),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ue().toLowerCase();n&&(a=$_(u)?Jx:n),V_(u)&&(e=e||Xx,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(xR(u)&&a!=="_self")return eN(e||"",a),new pg(null);const h=window.open(e||"",a,l);O(h,t,"popup-blocked");try{h.focus()}catch{}return new pg(h)}function eN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const tN="__/auth/handler",nN="emulator/auth/handler";function Hh(t,e,n,r,s,i){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:jr,eventId:s};if(e instanceof ar){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",YC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Zi){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${rN(t)}?${zi(a).slice(1)}`}function rN({config:t}){return t.emulator?af(t,nN):`https://${t.authDomain}/${tN}`}/**
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
 */const oh="webStorageSupport";class sN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Or,this._completeRedirectFn=tl,this._overrideRedirectResult=vf}async _openPopup(e,n,r,s){var i;_n((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Hh(e,n,r,aa(),s);return Zx(e,o,Da())}async _openRedirect(e,n,r,s){return await this._originValidation(e),U1(Hh(e,n,r,aa(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(_n(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Wx(e),r=new ww(e);return n.register("authEvent",s=>(O(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oh,{type:oh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[oh];o!==void 0&&n(!!o),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Lx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return K_()||cf()||Ji()}}const Ew=sN;class iN{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Dn("unexpected MultiFactorSessionType")}}}class _f extends iN{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new _f(e)}_finalizeEnroll(e,n,r){return x1(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return z1(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Tw{constructor(){}static assertion(e){return _f._fromCredential(e)}}Tw.FACTOR_ID="phone";var mg="@firebase/auth",gg="0.21.0";/**
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
 */class oN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cN(t){tr(new vn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{O(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),O(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:H_(t)},l=new PR(a,c,u);return dR(l,n),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),tr(new vn("auth-internal",e=>{const n=it(e.getProvider("auth").getImmediate());return(r=>new oN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(mg,gg,aN(t)),Wt(mg,gg,"esm2017")}/**
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
 */const uN=5*60,lN=__("authIdTokenMaxAge")||uN;let yg=null;const hN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lN)return;const s=n==null?void 0:n.token;yg!==s&&(yg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function wf(t=ju()){const e=Qi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hR(t,{popupRedirectResolver:Ew,persistence:[Ri,Ju,Or]}),r=__("authTokenSyncURL");if(r){const i=hN(r);C1(n,i,()=>i(n.currentUser)),k1(n,o=>i(o))}const s=y_("auth");return s&&G_(n,`http://${s}`),n}cN("Browser");var dN="firebase",fN="9.15.0";/**
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
 */Wt(dN,fN,"app");var pN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},G,bf=bf||{},te=pN||self;function Yc(){}function nl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Pa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function mN(t){return Object.prototype.hasOwnProperty.call(t,ah)&&t[ah]||(t[ah]=++gN)}var ah="closure_uid_"+(1e9*Math.random()>>>0),gN=0;function yN(t,e,n){return t.call.apply(t.bind,arguments)}function vN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function It(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?It=yN:It=vN,It.apply(null,arguments)}function uc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function mt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Hr(){this.s=this.s,this.o=this.o}var _N=0;Hr.prototype.s=!1;Hr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),_N!=0)&&mN(this)};Hr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Sw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function If(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function vg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(nl(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function Et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var wN=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",Yc,e),te.removeEventListener("test",Yc,e)}catch{}return t}();function Jc(t){return/^[\s\xa0]*$/.test(t)}var _g=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ch(t,e){return t<e?-1:t>e?1:0}function rl(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function xn(t){return rl().indexOf(t)!=-1}function Ef(t){return Ef[" "](t),t}Ef[" "]=Yc;function bN(t){var e=TN;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var IN=xn("Opera"),xi=xn("Trident")||xn("MSIE"),kw=xn("Edge"),Gh=kw||xi,Cw=xn("Gecko")&&!(rl().toLowerCase().indexOf("webkit")!=-1&&!xn("Edge"))&&!(xn("Trident")||xn("MSIE"))&&!xn("Edge"),EN=rl().toLowerCase().indexOf("webkit")!=-1&&!xn("Edge");function Aw(){var t=te.document;return t?t.documentMode:void 0}var Xc;e:{var uh="",lh=function(){var t=rl();if(Cw)return/rv:([^\);]+)(\)|;)/.exec(t);if(kw)return/Edge\/([\d\.]+)/.exec(t);if(xi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(EN)return/WebKit\/(\S+)/.exec(t);if(IN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(lh&&(uh=lh?lh[1]:""),xi){var hh=Aw();if(hh!=null&&hh>parseFloat(uh)){Xc=String(hh);break e}}Xc=uh}var TN={};function SN(){return bN(function(){let t=0;const e=_g(String(Xc)).split("."),n=_g("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=ch(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||ch(s[2].length==0,i[2].length==0)||ch(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Wh;if(te.document&&xi){var wg=Aw();Wh=wg||parseInt(Xc,10)||void 0}else Wh=void 0;var kN=Wh;function ha(t,e){if(Et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Cw){e:{try{Ef(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:CN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ha.X.h.call(this)}}mt(ha,Et);var CN={2:"touch",3:"pen",4:"mouse"};ha.prototype.h=function(){ha.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ma="closure_listenable_"+(1e6*Math.random()|0),AN=0;function RN(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++AN,this.ba=this.ea=!1}function sl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Tf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Rw(t){const e={};for(const n in t)e[n]=t[n];return e}const bg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xw(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<bg.length;i++)n=bg[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function il(t){this.src=t,this.g={},this.h=0}il.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Qh(t,e,r,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new RN(e,this.src,i,!!r,s),e.ea=n,t.push(e)),e};function zh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Sw(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(sl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Qh(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}var Sf="closure_lm_"+(1e6*Math.random()|0),dh={};function Nw(t,e,n,r,s){if(r&&r.once)return Ow(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Nw(t,e[i],n,r,s);return null}return n=Af(n),t&&t[Ma]?t.N(e,n,Pa(r)?!!r.capture:!!r,s):Dw(t,e,n,!1,r,s)}function Dw(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Pa(s)?!!s.capture:!!s,a=Cf(t);if(a||(t[Sf]=a=new il(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=xN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)wN||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Mw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xN(){function t(n){return e.call(t.src,t.listener,n)}const e=NN;return t}function Ow(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ow(t,e[i],n,r,s);return null}return n=Af(n),t&&t[Ma]?t.O(e,n,Pa(r)?!!r.capture:!!r,s):Dw(t,e,n,!0,r,s)}function Pw(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Pw(t,e[i],n,r,s);else r=Pa(r)?!!r.capture:!!r,n=Af(n),t&&t[Ma]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Qh(i,n,r,s),-1<n&&(sl(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Cf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Qh(e,n,r,s)),(n=-1<t?e[t]:null)&&kf(n))}function kf(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ma])zh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Mw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Cf(e))?(zh(n,t),n.h==0&&(n.src=null,e[Sf]=null)):sl(t)}}}function Mw(t){return t in dh?dh[t]:dh[t]="on"+t}function NN(t,e){if(t.ba)t=!0;else{e=new ha(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&kf(t),t=n.call(r,e)}return t}function Cf(t){return t=t[Sf],t instanceof il?t:null}var fh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Af(t){return typeof t=="function"?t:(t[fh]||(t[fh]=function(e){return t.handleEvent(e)}),t[fh])}function ot(){Hr.call(this),this.i=new il(this),this.P=this,this.I=null}mt(ot,Hr);ot.prototype[Ma]=!0;ot.prototype.removeEventListener=function(t,e,n,r){Pw(this,t,e,n,r)};function ft(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Et(e,t);else if(e instanceof Et)e.target=e.target||t;else{var s=e;e=new Et(r,t),xw(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=lc(o,r,!0,e)&&s}if(o=e.g=t,s=lc(o,r,!0,e)&&s,s=lc(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=lc(o,r,!1,e)&&s}ot.prototype.M=function(){if(ot.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)sl(n[r]);delete t.g[e],t.h--}}this.I=null};ot.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ot.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function lc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&zh(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Rf=te.JSON.stringify;function DN(){var t=Uw;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ON{constructor(){this.h=this.g=null}add(e,n){const r=Lw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Lw=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new PN,t=>t.reset());class PN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function MN(t){te.setTimeout(()=>{throw t},0)}function Fw(t,e){Yh||LN(),Jh||(Yh(),Jh=!0),Uw.add(t,e)}var Yh;function LN(){var t=te.Promise.resolve(void 0);Yh=function(){t.then(FN)}}var Jh=!1,Uw=new ON;function FN(){for(var t;t=DN();){try{t.h.call(t.g)}catch(n){MN(n)}var e=Lw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Jh=!1}function ol(t,e){ot.call(this),this.h=t||1,this.g=e||te,this.j=It(this.lb,this),this.l=Date.now()}mt(ol,ot);G=ol.prototype;G.ca=!1;G.R=null;G.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ft(this,"tick"),this.ca&&(xf(this),this.start()))}};G.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function xf(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}G.M=function(){ol.X.M.call(this),xf(this),delete this.g};function Nf(t,e,n){if(typeof t=="function")n&&(t=It(t,n));else if(t&&typeof t.handleEvent=="function")t=It(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function Vw(t){t.g=Nf(()=>{t.g=null,t.i&&(t.i=!1,Vw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class UN extends Hr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Vw(this)}M(){super.M(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function da(t){Hr.call(this),this.h=t,this.g={}}mt(da,Hr);var Ig=[];function $w(t,e,n,r){Array.isArray(n)||(n&&(Ig[0]=n.toString()),n=Ig);for(var s=0;s<n.length;s++){var i=Nw(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Bw(t){Tf(t.g,function(e,n){this.g.hasOwnProperty(n)&&kf(e)},t),t.g={}}da.prototype.M=function(){da.X.M.call(this),Bw(this)};da.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function al(){this.g=!0}al.prototype.Aa=function(){this.g=!1};function VN(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function $N(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function hi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+qN(t,n)+(r?" "+r:"")})}function BN(t,e){t.info(function(){return"TIMEOUT: "+e})}al.prototype.info=function(){};function qN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Rf(n)}catch{return e}}var Hs={},Eg=null;function cl(){return Eg=Eg||new ot}Hs.Pa="serverreachability";function qw(t){Et.call(this,Hs.Pa,t)}mt(qw,Et);function fa(t){const e=cl();ft(e,new qw(e))}Hs.STAT_EVENT="statevent";function jw(t,e){Et.call(this,Hs.STAT_EVENT,t),this.stat=e}mt(jw,Et);function Rt(t){const e=cl();ft(e,new jw(e,t))}Hs.Qa="timingevent";function Kw(t,e){Et.call(this,Hs.Qa,t),this.size=e}mt(Kw,Et);function La(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var ul={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Hw={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Df(){}Df.prototype.h=null;function Tg(t){return t.h||(t.h=t.i())}function Gw(){}var Fa={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Of(){Et.call(this,"d")}mt(Of,Et);function Pf(){Et.call(this,"c")}mt(Pf,Et);var Xh;function ll(){}mt(ll,Df);ll.prototype.g=function(){return new XMLHttpRequest};ll.prototype.i=function(){return{}};Xh=new ll;function Ua(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new da(this),this.O=jN,t=Gh?125:void 0,this.T=new ol(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ww}function Ww(){this.i=null,this.g="",this.h=!1}var jN=45e3,Zh={},Zc={};G=Ua.prototype;G.setTimeout=function(t){this.O=t};function ed(t,e,n){t.K=1,t.v=dl(rr(e)),t.s=n,t.P=!0,zw(t,null)}function zw(t,e){t.F=Date.now(),Va(t),t.A=rr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),nb(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Ww,t.g=Eb(t.l,n?e:null,!t.s),0<t.N&&(t.L=new UN(It(t.La,t,t.g),t.N)),$w(t.S,t.g,"readystatechange",t.ib),e=t.H?Rw(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),fa(),VN(t.j,t.u,t.A,t.m,t.U,t.s)}G.ib=function(t){t=t.target;const e=this.L;e&&Yn(t)==3?e.l():this.La(t)};G.La=function(t){try{if(t==this.g)e:{const l=Yn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Gh||this.g&&(this.h.h||this.g.fa()||Ag(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?fa(3):fa(2)),hl(this);var n=this.g.aa();this.Y=n;t:if(Qw(this)){var r=Ag(this.g);t="";var s=r.length,i=Yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ms(this),$o(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,$N(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Jc(a)){var u=a;break t}}u=null}if(n=u)hi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,td(this,n);else{this.i=!1,this.o=3,Rt(12),ms(this),$o(this);break e}}this.P?(Yw(this,l,o),Gh&&this.i&&l==3&&($w(this.S,this.T,"tick",this.hb),this.T.start())):(hi(this.j,this.m,o,null),td(this,o)),l==4&&ms(this),this.i&&!this.I&&(l==4?_b(this.l,this):(this.i=!1,Va(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Rt(12)):(this.o=0,Rt(13)),ms(this),$o(this)}}}catch{}finally{}};function Qw(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Yw(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=KN(t,n),s==Zc){e==4&&(t.o=4,Rt(14),r=!1),hi(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Zh){t.o=4,Rt(15),hi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else hi(t.j,t.m,s,null),td(t,s);Qw(t)&&s!=Zc&&s!=Zh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Rt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bf(e),e.K=!0,Rt(11))):(hi(t.j,t.m,n,"[Invalid Chunked Response]"),ms(t),$o(t))}G.hb=function(){if(this.g){var t=Yn(this.g),e=this.g.fa();this.C<e.length&&(hl(this),Yw(this,t,e),this.i&&t!=4&&Va(this))}};function KN(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Zc:(n=Number(e.substring(n,r)),isNaN(n)?Zh:(r+=1,r+n>e.length?Zc:(e=e.substr(r,n),t.C=r+n,e)))}G.cancel=function(){this.I=!0,ms(this)};function Va(t){t.V=Date.now()+t.O,Jw(t,t.O)}function Jw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=La(It(t.gb,t),e)}function hl(t){t.B&&(te.clearTimeout(t.B),t.B=null)}G.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(BN(this.j,this.A),this.K!=2&&(fa(),Rt(17)),ms(this),this.o=2,$o(this)):Jw(this,this.V-t)};function $o(t){t.l.G==0||t.I||_b(t.l,t)}function ms(t){hl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,xf(t.T),Bw(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function td(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||nd(n.h,t))){if(!t.J&&nd(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)nu(n),ml(n);else break e;$f(n),Rt(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=La(It(n.cb,n),6e3));if(1>=ib(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else gs(n,11)}else if((t.J||n.g==t)&&nu(n),!Jc(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Mf(i,i.h),i.h=null))}if(r.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,Oe(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=Ib(r,r.H?r.ka:null,r.V),o.J){ob(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(hl(a),Va(a)),r.g=o}else yb(r);0<n.i.length&&gl(n)}else u[0]!="stop"&&u[0]!="close"||gs(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?gs(n,7):Vf(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}fa(4)}catch{}}function HN(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(nl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function GN(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(nl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Xw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(nl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=GN(t),r=HN(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Zw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function WN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ts(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ts){this.h=e!==void 0?e:t.h,eu(this,t.j),this.s=t.s,this.g=t.g,tu(this,t.m),this.l=t.l,e=t.i;var n=new pa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Sg(this,n),this.o=t.o}else t&&(n=String(t).match(Zw))?(this.h=!!e,eu(this,n[1]||"",!0),this.s=Ro(n[2]||""),this.g=Ro(n[3]||"",!0),tu(this,n[4]),this.l=Ro(n[5]||"",!0),Sg(this,n[6]||"",!0),this.o=Ro(n[7]||"")):(this.h=!!e,this.i=new pa(null,this.h))}Ts.prototype.toString=function(){var t=[],e=this.j;e&&t.push(xo(e,kg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(xo(e,kg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(xo(n,n.charAt(0)=="/"?YN:QN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",xo(n,XN)),t.join("")};function rr(t){return new Ts(t)}function eu(t,e,n){t.j=n?Ro(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function tu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Sg(t,e,n){e instanceof pa?(t.i=e,ZN(t.i,t.h)):(n||(e=xo(e,JN)),t.i=new pa(e,t.h))}function Oe(t,e,n){t.i.set(e,n)}function dl(t){return Oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ro(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function xo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,zN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var kg=/[#\/\?@]/g,QN=/[#\?:]/g,YN=/[#\?]/g,JN=/[#\?@]/g,XN=/#/g;function pa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gr(t){t.g||(t.g=new Map,t.h=0,t.i&&WN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}G=pa.prototype;G.add=function(t,e){Gr(this),this.i=null,t=eo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function eb(t,e){Gr(t),e=eo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function tb(t,e){return Gr(t),e=eo(t,e),t.g.has(e)}G.forEach=function(t,e){Gr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};G.oa=function(){Gr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};G.W=function(t){Gr(this);let e=[];if(typeof t=="string")tb(this,t)&&(e=e.concat(this.g.get(eo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};G.set=function(t,e){return Gr(this),this.i=null,t=eo(this,t),tb(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};G.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function nb(t,e,n){eb(t,e),0<n.length&&(t.i=null,t.g.set(eo(t,e),If(n)),t.h+=n.length)}G.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function eo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ZN(t,e){e&&!t.j&&(Gr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(eb(this,r),nb(this,s,n))},t)),t.j=e}var eD=class{constructor(e,n){this.h=e,this.g=n}};function rb(t){this.l=t||tD,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ga&&te.g.Ga()&&te.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tD=10;function sb(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ib(t){return t.h?1:t.g?t.g.size:0}function nd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Mf(t,e){t.g?t.g.add(e):t.h=e}function ob(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}rb.prototype.cancel=function(){if(this.i=ab(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ab(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return If(t.i)}function Lf(){}Lf.prototype.stringify=function(t){return te.JSON.stringify(t,void 0)};Lf.prototype.parse=function(t){return te.JSON.parse(t,void 0)};function nD(){this.g=new Lf}function rD(t,e,n){const r=n||"";try{Xw(t,function(s,i){let o=s;Pa(s)&&(o=Rf(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function sD(t,e){const n=new al;if(te.Image){const r=new Image;r.onload=uc(hc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=uc(hc,n,r,"TestLoadImage: error",!1,e),r.onabort=uc(hc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=uc(hc,n,r,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function hc(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function $a(t){this.l=t.ac||null,this.j=t.jb||!1}mt($a,Df);$a.prototype.g=function(){return new fl(this.l,this.j)};$a.prototype.i=function(t){return function(){return t}}({});function fl(t,e){ot.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ff,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}mt(fl,ot);var Ff=0;G=fl.prototype;G.open=function(t,e){if(this.readyState!=Ff)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ma(this)};G.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||te).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};G.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ba(this)),this.readyState=Ff};G.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ma(this)),this.g&&(this.readyState=3,ma(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cb(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function cb(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}G.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ba(this):ma(this),this.readyState==3&&cb(this)}};G.Va=function(t){this.g&&(this.response=this.responseText=t,Ba(this))};G.Ua=function(t){this.g&&(this.response=t,Ba(this))};G.ga=function(){this.g&&Ba(this)};function Ba(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ma(t)}G.setRequestHeader=function(t,e){this.v.append(t,e)};G.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};G.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ma(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(fl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var iD=te.JSON.parse;function $e(t){ot.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ub,this.K=this.L=!1}mt($e,ot);var ub="",oD=/^https?$/i,aD=["POST","PUT"];G=$e.prototype;G.Ka=function(t){this.L=t};G.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Xh.g(),this.C=this.u?Tg(this.u):Tg(Xh),this.g.onreadystatechange=It(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Cg(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=te.FormData&&t instanceof te.FormData,!(0<=Sw(aD,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{db(this),0<this.B&&((this.K=cD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=It(this.qa,this)):this.A=Nf(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Cg(this,i)}};function cD(t){return xi&&SN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}G.qa=function(){typeof bf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ft(this,"timeout"),this.abort(8))};function Cg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,lb(t),pl(t)}function lb(t){t.D||(t.D=!0,ft(t,"complete"),ft(t,"error"))}G.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ft(this,"complete"),ft(this,"abort"),pl(this))};G.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),pl(this,!0)),$e.X.M.call(this)};G.Ha=function(){this.s||(this.F||this.v||this.l?hb(this):this.fb())};G.fb=function(){hb(this)};function hb(t){if(t.h&&typeof bf<"u"&&(!t.C[1]||Yn(t)!=4||t.aa()!=2)){if(t.v&&Yn(t)==4)Nf(t.Ha,0,t);else if(ft(t,"readystatechange"),Yn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(Zw)[1]||null;if(!s&&te.self&&te.self.location){var i=te.self.location.protocol;s=i.substr(0,i.length-1)}r=!oD.test(s?s.toLowerCase():"")}n=r}if(n)ft(t,"complete"),ft(t,"success");else{t.m=6;try{var o=2<Yn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",lb(t)}}finally{pl(t)}}}}function pl(t,e){if(t.g){db(t);const n=t.g,r=t.C[0]?Yc:null;t.g=null,t.C=null,e||ft(t,"ready");try{n.onreadystatechange=r}catch{}}}function db(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}function Yn(t){return t.g?t.g.readyState:0}G.aa=function(){try{return 2<Yn(this)?this.g.status:-1}catch{return-1}};G.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};G.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),iD(e)}};function Ag(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ub:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}G.Ea=function(){return this.m};G.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function fb(t){let e="";return Tf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Uf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=fb(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Oe(t,e,n))}function go(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function pb(t){this.Ca=0,this.i=[],this.j=new al,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=go("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=go("baseRetryDelayMs",5e3,t),this.bb=go("retryDelaySeedMs",1e4,t),this.$a=go("forwardChannelMaxRetries",2,t),this.ta=go("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new rb(t&&t.concurrentRequestLimit),this.Fa=new nD,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}G=pb.prototype;G.ma=8;G.G=1;function Vf(t){if(mb(t),t.G==3){var e=t.U++,n=rr(t.F);Oe(n,"SID",t.I),Oe(n,"RID",e),Oe(n,"TYPE","terminate"),qa(t,n),e=new Ua(t,t.j,e,void 0),e.K=2,e.v=dl(rr(n)),n=!1,te.navigator&&te.navigator.sendBeacon&&(n=te.navigator.sendBeacon(e.v.toString(),"")),!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=Eb(e.l,null),e.g.da(e.v)),e.F=Date.now(),Va(e)}bb(t)}function ml(t){t.g&&(Bf(t),t.g.cancel(),t.g=null)}function mb(t){ml(t),t.u&&(te.clearTimeout(t.u),t.u=null),nu(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function gl(t){sb(t.h)||t.m||(t.m=!0,Fw(t.Ja,t),t.C=0)}function uD(t,e){return ib(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=La(It(t.Ja,t,e),wb(t,t.C)),t.C++,!0)}G.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Ua(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Rw(i),xw(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=gb(this,s,e),n=rr(this.F),Oe(n,"RID",t),Oe(n,"CVER",22),this.D&&Oe(n,"X-HTTP-Session-Id",this.D),qa(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(fb(i)))+"&"+e:this.o&&Uf(n,this.o,i)),Mf(this.h,s),this.Ya&&Oe(n,"TYPE","init"),this.O?(Oe(n,"$req",e),Oe(n,"SID","null"),s.Z=!0,ed(s,n,null)):ed(s,n,e),this.G=2}}else this.G==3&&(t?Rg(this,t):this.i.length==0||sb(this.h)||Rg(this))};function Rg(t,e){var n;e?n=e.m:n=t.U++;const r=rr(t.F);Oe(r,"SID",t.I),Oe(r,"RID",n),Oe(r,"AID",t.T),qa(t,r),t.o&&t.s&&Uf(r,t.o,t.s),n=new Ua(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=gb(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Mf(t.h,n),ed(n,r,e)}function qa(t,e){t.ia&&Tf(t.ia,function(n,r){Oe(e,r,n)}),t.l&&Xw({},function(n,r){Oe(e,r,n)})}function gb(t,e,n){n=Math.min(t.i.length,n);var r=t.l?It(t.l.Ra,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{rD(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function yb(t){t.g||t.u||(t.Z=1,Fw(t.Ia,t),t.A=0)}function $f(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=La(It(t.Ia,t),wb(t,t.A)),t.A++,!0)}G.Ia=function(){if(this.u=null,vb(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=La(It(this.eb,this),t)}};G.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Rt(10),ml(this),vb(this))};function Bf(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function vb(t){t.g=new Ua(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=rr(t.sa);Oe(e,"RID","rpc"),Oe(e,"SID",t.I),Oe(e,"CI",t.L?"0":"1"),Oe(e,"AID",t.T),Oe(e,"TYPE","xmlhttp"),qa(t,e),t.o&&t.s&&Uf(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=dl(rr(e)),n.s=null,n.P=!0,zw(n,t)}G.cb=function(){this.v!=null&&(this.v=null,ml(this),$f(this),Rt(19))};function nu(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function _b(t,e){var n=null;if(t.g==e){nu(t),Bf(t),t.g=null;var r=2}else if(nd(t.h,e))n=e.D,ob(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=cl(),ft(r,new Kw(r,n)),gl(t)}else yb(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(r==1&&uD(t,e)||r==2&&$f(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:gs(t,5);break;case 4:gs(t,10);break;case 3:gs(t,6);break;default:gs(t,2)}}}function wb(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function gs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=It(t.kb,t);n||(n=new Ts("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||eu(n,"https"),dl(n)),sD(n.toString(),r)}else Rt(2);t.G=0,t.l&&t.l.va(e),bb(t),mb(t)}G.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function bb(t){if(t.G=0,t.la=[],t.l){const e=ab(t.h);(e.length!=0||t.i.length!=0)&&(vg(t.la,e),vg(t.la,t.i),t.h.i.length=0,If(t.i),t.i.length=0),t.l.ua()}}function Ib(t,e,n){var r=n instanceof Ts?rr(n):new Ts(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),tu(r,r.m);else{var s=te.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Ts(null,void 0);r&&eu(i,r),e&&(i.g=e),s&&tu(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.za,n&&e&&Oe(r,n,e),Oe(r,"VER",t.ma),qa(t,r),r}function Eb(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new $e(new $a({jb:!0})):new $e(t.ra),e.Ka(t.H),e}function Tb(){}G=Tb.prototype;G.xa=function(){};G.wa=function(){};G.va=function(){};G.ua=function(){};G.Ra=function(){};function ru(){if(xi&&!(10<=Number(kN)))throw Error("Environmental error: no available transport.")}ru.prototype.g=function(t,e){return new Yt(t,e)};function Yt(t,e){ot.call(this),this.g=new pb(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Jc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Jc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new to(this)}mt(Yt,ot);Yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Rt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ib(t,null,t.V),gl(t)};Yt.prototype.close=function(){Vf(this.g)};Yt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Rf(t),t=n);e.i.push(new eD(e.ab++,t)),e.G==3&&gl(e)};Yt.prototype.M=function(){this.g.l=null,delete this.j,Vf(this.g),delete this.g,Yt.X.M.call(this)};function Sb(t){Of.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}mt(Sb,Of);function kb(){Pf.call(this),this.status=1}mt(kb,Pf);function to(t){this.g=t}mt(to,Tb);to.prototype.xa=function(){ft(this.g,"a")};to.prototype.wa=function(t){ft(this.g,new Sb(t))};to.prototype.va=function(t){ft(this.g,new kb)};to.prototype.ua=function(){ft(this.g,"b")};ru.prototype.createWebChannel=ru.prototype.g;Yt.prototype.send=Yt.prototype.u;Yt.prototype.open=Yt.prototype.m;Yt.prototype.close=Yt.prototype.close;ul.NO_ERROR=0;ul.TIMEOUT=8;ul.HTTP_ERROR=6;Hw.COMPLETE="complete";Gw.EventType=Fa;Fa.OPEN="a";Fa.CLOSE="b";Fa.ERROR="c";Fa.MESSAGE="d";ot.prototype.listen=ot.prototype.N;$e.prototype.listenOnce=$e.prototype.O;$e.prototype.getLastError=$e.prototype.Oa;$e.prototype.getLastErrorCode=$e.prototype.Ea;$e.prototype.getStatus=$e.prototype.aa;$e.prototype.getResponseJson=$e.prototype.Sa;$e.prototype.getResponseText=$e.prototype.fa;$e.prototype.send=$e.prototype.da;$e.prototype.setWithCredentials=$e.prototype.Ka;var lD=function(){return new ru},hD=function(){return cl()},ph=ul,dD=Hw,fD=Hs,xg={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},pD=$a,dc=Gw,mD=$e;const Ng="@firebase/firestore";/**
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
 */let no="9.15.0";/**
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
 */const Pr=new Bu("@firebase/firestore");function rd(){return Pr.logLevel}function gD(t){Pr.setLogLevel(t)}function N(t,...e){if(Pr.logLevel<=pe.DEBUG){const n=e.map(qf);Pr.debug(`Firestore (${no}): ${t}`,...n)}}function Ke(t,...e){if(Pr.logLevel<=pe.ERROR){const n=e.map(qf);Pr.error(`Firestore (${no}): ${t}`,...n)}}function Ni(t,...e){if(Pr.logLevel<=pe.WARN){const n=e.map(qf);Pr.warn(`Firestore (${no}): ${t}`,...n)}}function qf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function B(t="Unexpected state"){const e=`FIRESTORE (${no}) INTERNAL ASSERTION FAILED: `+t;throw Ke(e),new Error(e)}function W(t,e){t||B()}function yD(t,e){t||B()}function U(t,e){return t}/**
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
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends bt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class rt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Cb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class _D{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wD{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new rt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string"),new Cb(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string"),new tt(e)}}class bD{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(W(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class ID{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s}getToken(){return Promise.resolve(new bD(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ED{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TD{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(W(typeof n.token=="string"),this.A=n.token,new ED(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function SD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Ab{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=SD(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function Di(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}function Rb(t){return t+"\0"}/**
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
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new C(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new C(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Le(0,0))}static max(){return new Q(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ga{constructor(e,n,r){n===void 0?n=0:n>e.length&&B(),r===void 0?r=e.length-n:r>e.length-n&&B(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ga.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ga?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class he extends ga{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new C(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new he(n)}static emptyPath(){return new he([])}}const kD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends ga{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return kD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new C(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new C(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new C(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new C(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
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
 */class xb{constructor(e,n,r,s){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=s}}function sd(t){return t.fields.find(e=>e.kind===2)}function rs(t){return t.fields.filter(e=>e.kind!==2)}xb.UNKNOWN_ID=-1;class CD{constructor(e,n){this.fieldPath=e,this.kind=n}}class su{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new su(0,Jt.min())}}function Nb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new Jt(s,L.empty(),e)}function Db(t){return new Jt(t.readTime,t.key,-1)}class Jt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jt(Q.min(),L.empty(),-1)}static max(){return new Jt(Q.max(),L.empty(),-1)}}function jf(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
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
 */const Ob="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Wr(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==Ob)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class yl{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new rt,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new Bo(e,n.error)):this.P.resolve()},this.transaction.onerror=r=>{const s=Kf(r.target.error);this.P.reject(new Bo(e,s))}}static open(e,n,r,s){try{return new yl(n,e.transaction(s,r))}catch(i){throw new Bo(n,i)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new RD(n)}}class dn{constructor(e,n,r){this.name=e,this.version=n,this.S=r,dn.D(Ue())===12.2&&Ke("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),cs(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!sa())return!1;if(dn.N())return!0;const e=Ue(),n=dn.D(e),r=0<n&&n<10,s=dn.k(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static k(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async F(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Bo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new C(_.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new C(_.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Bo(e,o))},s.onupgradeneeded=i=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.S.$(o,s.transaction,i.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=yl.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.V(),u)).catch(u=>(a.abort(u),v.reject(u))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(N("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class AD{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return cs(this.q.delete())}}class Bo extends C{constructor(e,n){super(_.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function zr(t){return t.name==="IndexedDbTransactionError"}class RD{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(N("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),cs(r)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),cs(this.store.add(e))}get(e){return cs(this.store.get(e)).next(n=>(n===void 0&&(n=null),N("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),cs(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),cs(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const s=this.cursor(r),i=[];return this.H(s,(o,a)=>{i.push(a)}).next(()=>i)}{const s=this.store.getAll(r.range);return new v((i,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{i(a.target.result)}})}}J(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new v((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}Y(e,n){N("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.X=!1;const s=this.cursor(r);return this.H(s,(i,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.H(s,n)}tt(e){const n=this.cursor({});return new v((r,s)=>{n.onerror=i=>{const o=Kf(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,n){const r=[];return new v((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new AD(a),u=n(a.primaryKey,a.value,c);if(u instanceof v){const l=u.catch(h=>(c.done(),v.reject(h)));r.push(l)}c.isDone?s():c.G===null?a.continue():a.continue(c.G)}}).next(()=>v.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function cs(t){return new v((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=Kf(r.target.error);n(s)}})}let Dg=!1;function Kf(t){const e=dn.D(Ue());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Dg||(Dg=!0,setTimeout(()=>{throw r},0)),r}}return t}class xD{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){N("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{N("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){zr(n)?N("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Wr(n)}await this.nt(6e4)})}}class ND{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const r=new Set;let s=n,i=!0;return v.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return N("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>n-s)}rt(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(s=>this.localStore.localDocuments.getNextDocuments(e,n,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(s,i)).next(a=>(N("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ot(e,n){let r=e;return n.changes.forEach((s,i)=>{const o=Db(i);jf(o,r)>0&&(r=o)}),new Jt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Lt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Lt.at=-1;/**
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
 */class DD{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Mr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Mr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Og(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Mb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function ja(t){return t==null}function ya(t){return t===0&&1/t==-1/0}function Lb(t){return typeof t=="number"&&Number.isInteger(t)&&!ya(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function OD(){return typeof atob<"u"}/**
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
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Xe(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const PD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(t){if(W(!!t),typeof t=="string"){let e=0;const n=PD.exec(t);if(W(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function As(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
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
 */function Hf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fb(t){const e=t.mapValue.fields.__previous_value__;return Hf(e)?Fb(e):e}function va(t){const e=Lr(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
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
 */const Ir={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ac={nullValue:"NULL_VALUE"};function Rs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hf(t)?4:Ub(t)?9007199254740991:10:B()}function qn(t,e){if(t===e)return!0;const n=Rs(t);if(n!==Rs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return va(t).isEqual(va(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Lr(r.timestampValue),o=Lr(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return As(r.bytesValue).isEqual(As(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ve(r.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(r.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ve(r.integerValue)===Ve(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ve(r.doubleValue),o=Ve(s.doubleValue);return i===o?ya(i)===ya(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Di(t.arrayValue.values||[],e.arrayValue.values||[],qn);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Og(i)!==Og(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!qn(i[a],o[a])))return!1;return!0}(t,e);default:return B()}}function _a(t,e){return(t.values||[]).find(n=>qn(n,e))!==void 0}function Fr(t,e){if(t===e)return 0;const n=Rs(t),r=Rs(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ve(s.integerValue||s.doubleValue),a=Ve(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Pg(t.timestampValue,e.timestampValue);case 4:return Pg(va(t),va(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(s,i){const o=As(s),a=As(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=re(o[c],a[c]);if(u!==0)return u}return re(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=re(Ve(s.latitude),Ve(i.latitude));return o!==0?o:re(Ve(s.longitude),Ve(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Fr(o[c],a[c]);if(u)return u}return re(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Ir.mapValue&&i===Ir.mapValue)return 0;if(s===Ir.mapValue)return 1;if(i===Ir.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=re(a[l],u[l]);if(h!==0)return h;const d=Fr(o[a[l]],c[u[l]]);if(d!==0)return d}return re(a.length,u.length)}(t.mapValue,e.mapValue);default:throw B()}}function Pg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=Lr(t),r=Lr(e),s=re(n.seconds,r.seconds);return s!==0?s:re(n.nanos,r.nanos)}function Oi(t){return id(t)}function id(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Lr(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?As(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=id(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${id(r.fields[a])}`;return i+"}"}(t.mapValue):B();var e,n}function xs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function od(t){return!!t&&"integerValue"in t}function wa(t){return!!t&&"arrayValue"in t}function Mg(t){return!!t&&"nullValue"in t}function Lg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Rc(t){return!!t&&"mapValue"in t}function qo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ub(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function MD(t){return"nullValue"in t?Ac:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?xs(Mr.empty(),L.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:B()}function LD(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?xs(Mr.empty(),L.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Ir:B()}function Fg(t,e){const n=Fr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Ug(t,e){const n=Fr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Ur{constructor(e,n){this.position=e,this.inclusive=n}}function Vg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=Fr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $g(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Vb{}class ue extends Vb{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new FD(e,n,r):n==="array-contains"?new $D(e,r):n==="in"?new Wb(e,r):n==="not-in"?new BD(e,r):n==="array-contains-any"?new qD(e,r):new ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new UD(e,r):new VD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Fr(n,this.value)):n!==null&&Rs(this.value)===Rs(n)&&this.matchesComparison(Fr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class _e extends Vb{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new _e(e,n)}matches(e){return Pi(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Pi(t){return t.op==="and"}function ad(t){return t.op==="or"}function $b(t){return Bb(t)&&Pi(t)}function Bb(t){for(const e of t.filters)if(e instanceof _e)return!1;return!0}function qb(t){if(t instanceof ue)return t.field.canonicalString()+t.op.toString()+Oi(t.value);{const e=t.filters.map(n=>qb(n)).join(",");return`${t.op}(${e})`}}function jb(t,e){return t instanceof ue?function(n,r){return r instanceof ue&&n.op===r.op&&n.field.isEqual(r.field)&&qn(n.value,r.value)}(t,e):t instanceof _e?function(n,r){return r instanceof _e&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&jb(i,r.filters[o]),!0):!1}(t,e):void B()}function Kb(t,e){const n=t.filters.concat(e);return _e.create(n,t.op)}function Hb(t){return t instanceof ue?function(e){return`${e.field.canonicalString()} ${e.op} ${Oi(e.value)}`}(t):t instanceof _e?function(e){return e.op.toString()+" {"+e.getFilters().map(Hb).join(" ,")+"}"}(t):"Filter"}class FD extends ue{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class UD extends ue{constructor(e,n){super(e,"in",n),this.keys=Gb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class VD extends ue{constructor(e,n){super(e,"not-in",n),this.keys=Gb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Gb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class $D extends ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wa(n)&&_a(n.arrayValue,this.value)}}class Wb extends ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_a(this.value.arrayValue,n)}}class BD extends ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(_a(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_a(this.value.arrayValue,n)}}class qD extends ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_a(this.value.arrayValue,r))}}/**
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
 */class wi{constructor(e,n="asc"){this.field=e,this.dir=n}}function jD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Be{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fc(this.root,e,this.comparator,!1)}getReverseIterator(){return new fc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fc(this.root,e,this.comparator,!0)}}class fc{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??lt.RED,this.left=s??lt.EMPTY,this.right=i??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new lt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,n,r,s){return this}insert(t,e,n){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ee{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bg(this.data.getIterator())}getIteratorFrom(e){return new Bg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ee(this.comparator);return n.data=e,n}}class Bg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ri(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class zt{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new zt([])}unionWith(e){let n=new Ee(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Di(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Rc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qo(n)}setAll(e){let n=He.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=qo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Rc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Rc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Gs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ht(qo(this.value))}}function zb(t){const e=[];return Gs(t.fields,(n,r)=>{const s=new He([n]);if(Rc(r)){const i=zb(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new zt(e)}/**
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
 */class Ne{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ne(e,0,Q.min(),Q.min(),Q.min(),ht.empty(),0)}static newFoundDocument(e,n,r,s){return new Ne(e,1,n,Q.min(),r,s,0)}static newNoDocument(e,n){return new Ne(e,2,n,Q.min(),Q.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new Ne(e,3,n,Q.min(),Q.min(),ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class KD{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function cd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new KD(t,e,n,r,s,i,o)}function Ns(t){const e=U(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>qb(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ja(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Oi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Oi(r)).join(",")),e.ft=n}return e.ft}function Ka(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$g(t.startAt,e.startAt)&&$g(t.endAt,e.endAt)}function iu(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function ou(t,e){return t.filters.filter(n=>n instanceof ue&&n.field.isEqual(e))}function qg(t,e,n){let r=Ac,s=!0;for(const i of ou(t,e)){let o=Ac,a=!0;switch(i.op){case"<":case"<=":o=MD(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Ac}Fg({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];Fg({value:r,inclusive:s},{value:o,inclusive:n.inclusive})<0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}function jg(t,e,n){let r=Ir,s=!0;for(const i of ou(t,e)){let o=Ir,a=!0;switch(i.op){case">=":case">":o=LD(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Ir}Ug({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];Ug({value:r,inclusive:s},{value:o,inclusive:n.inclusive})>0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class cr{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function Qb(t,e,n,r,s,i,o,a){return new cr(t,e,n,r,s,i,o,a)}function ro(t){return new cr(t)}function Kg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Gf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function vl(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Wf(t){return t.collectionGroup!==null}function Ss(t){const e=U(t);if(e.dt===null){e.dt=[];const n=vl(e),r=Gf(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new wi(n)),e.dt.push(new wi(He.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new wi(He.keyField(),i))}}}return e.dt}function Ut(t){const e=U(t);if(!e._t)if(e.limitType==="F")e._t=cd(e.path,e.collectionGroup,Ss(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ss(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new wi(i.field,o))}const r=e.endAt?new Ur(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ur(e.startAt.position,e.startAt.inclusive):null;e._t=cd(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e._t}function ud(t,e){e.getFirstInequalityField(),vl(t);const n=t.filters.concat([e]);return new cr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function au(t,e,n){return new cr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ha(t,e){return Ka(Ut(t),Ut(e))&&t.limitType===e.limitType}function Yb(t){return`${Ns(Ut(t))}|lt:${t.limitType}`}function ld(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Hb(r)).join(", ")}]`),ja(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Oi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Oi(r)).join(",")),`Target(${n})`}(Ut(t))}; limitType=${t.limitType})`}function zf(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):L.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of Ss(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=Vg(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Ss(n),r)||n.endAt&&!function(s,i,o){const a=Vg(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Ss(n),r))}(t,e)}function Jb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xb(t){return(e,n)=>{let r=!1;for(const s of Ss(t)){const i=HD(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function HD(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Fr(a,c):B()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
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
 */function Zb(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ya(e)?"-0":e}}function eI(t){return{integerValue:""+t}}function tI(t,e){return Lb(e)?eI(e):Zb(t,e)}/**
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
 */class _l{constructor(){this._=void 0}}function GD(t,e,n){return t instanceof Mi?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Ds?rI(t,e):t instanceof Os?sI(t,e):function(r,s){const i=nI(r,s),o=Hg(i)+Hg(r.gt);return od(i)&&od(r.gt)?eI(o):Zb(r.yt,o)}(t,e)}function WD(t,e,n){return t instanceof Ds?rI(t,e):t instanceof Os?sI(t,e):n}function nI(t,e){return t instanceof Li?od(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Mi extends _l{}class Ds extends _l{constructor(e){super(),this.elements=e}}function rI(t,e){const n=iI(e);for(const r of t.elements)n.some(s=>qn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Os extends _l{constructor(e){super(),this.elements=e}}function sI(t,e){let n=iI(e);for(const r of t.elements)n=n.filter(s=>!qn(s,r));return{arrayValue:{values:n}}}class Li extends _l{constructor(e,n){super(),this.yt=e,this.gt=n}}function Hg(t){return Ve(t.integerValue||t.doubleValue)}function iI(t){return wa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Ga{constructor(e,n){this.field=e,this.transform=n}}function zD(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ds&&r instanceof Ds||n instanceof Os&&r instanceof Os?Di(n.elements,r.elements,qn):n instanceof Li&&r instanceof Li?qn(n.gt,r.gt):n instanceof Mi&&r instanceof Mi}(t.transform,e.transform)}class QD{constructor(e,n){this.version=e,this.transformResults=n}}class Pe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pe}static exists(e){return new Pe(void 0,e)}static updateTime(e){return new Pe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wl{}function oI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new io(t.key,Pe.none()):new so(t.key,t.data,Pe.none());{const n=t.data,r=ht.empty();let s=new Ee(He.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ur(t.key,r,new zt(s.toArray()),Pe.none())}}function YD(t,e,n){t instanceof so?function(r,s,i){const o=r.value.clone(),a=Wg(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ur?function(r,s,i){if(!xc(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Wg(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(aI(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function jo(t,e,n,r){return t instanceof so?function(s,i,o,a){if(!xc(s.precondition,i))return o;const c=s.value.clone(),u=zg(s.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ur?function(s,i,o,a){if(!xc(s.precondition,i))return o;const c=zg(s.fieldTransforms,a,i),u=i.data;return u.setAll(aI(s)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(t,e,n,r):function(s,i,o){return xc(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function JD(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=nI(r.transform,s||null);i!=null&&(n===null&&(n=ht.empty()),n.set(r.field,i))}return n||null}function Gg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Di(n,r,(s,i)=>zD(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class so extends wl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ur extends wl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function aI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Wg(t,e,n){const r=new Map;W(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,WD(o,a,n[s]))}return r}function zg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,GD(i,o,e))}return r}class io extends wl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qf extends wl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class XD{constructor(e){this.count=e}}/**
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
 */var Qe,le;function cI(t){switch(t){default:return B();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function uI(t){if(t===void 0)return Ke("GRPC error has no .code"),_.UNKNOWN;switch(t){case Qe.OK:return _.OK;case Qe.CANCELLED:return _.CANCELLED;case Qe.UNKNOWN:return _.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return _.INTERNAL;case Qe.UNAVAILABLE:return _.UNAVAILABLE;case Qe.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Qe.NOT_FOUND:return _.NOT_FOUND;case Qe.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Qe.ABORTED:return _.ABORTED;case Qe.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Qe.DATA_LOSS:return _.DATA_LOSS;default:return B()}}(le=Qe||(Qe={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Qr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Gs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Mb(this.inner)}size(){return this.innerSize}}/**
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
 */const ZD=new Be(L.comparator);function Ft(){return ZD}const lI=new Be(L.comparator);function No(...t){let e=lI;for(const n of t)e=e.insert(n.key,n);return e}function hI(t){let e=lI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function On(){return Ko()}function dI(){return Ko()}function Ko(){return new Qr(t=>t.toString(),(t,e)=>t.isEqual(e))}const eO=new Be(L.comparator),tO=new Ee(L.comparator);function se(...t){let e=tO;for(const n of t)e=e.add(n);return e}const nO=new Ee(re);function bl(){return nO}/**
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
 */class Wa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,za.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wa(Q.min(),s,bl(),Ft(),se())}}class za{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new za(r,n,se(),se(),se())}}/**
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
 */class Nc{constructor(e,n,r,s){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=s}}class fI{constructor(e,n){this.targetId=e,this.Et=n}}class pI{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Qg{constructor(){this.At=0,this.Rt=Jg(),this.bt=Xe.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=se(),n=se(),r=se();return this.Rt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:B()}}),new za(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=Jg()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class rO{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Ft(),this.qt=Yg(),this.Ut=new Ee(re)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:B()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,s)=>{this.zt(s)&&n(s)})}Jt(e){const n=e.targetId,r=e.Et.count,s=this.Yt(n);if(s){const i=s.target;if(iu(i))if(r===0){const o=new L(i.path);this.Qt(n,o,Ne.newNoDocument(o,Q.min()))}else W(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&iu(a.target)){const c=new L(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Ne.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let r=se();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const s=new Wa(e,n,this.Ut,this.Lt,r);return this.Lt=Ft(),this.qt=Yg(),this.Ut=new Ee(re),s}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const s=this.Wt(e);this.te(e,n)?s.Nt(n,1):s.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Qg,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ee(re),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Qg),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Yg(){return new Be(L.comparator)}function Jg(){return new Be(L.comparator)}/**
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
 */const sO=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),iO=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),oO=(()=>({and:"AND",or:"OR"}))();class aO{constructor(e,n){this.databaseId=e,this.wt=n}}function Fi(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mI(t,e){return t.wt?e.toBase64():e.toUint8Array()}function cO(t,e){return Fi(t,e.toTimestamp())}function Ge(t){return W(!!t),Q.fromTimestamp(function(e){const n=Lr(e);return new Le(n.seconds,n.nanos)}(t))}function Yf(t,e){return function(n){return new he(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function gI(t){const e=he.fromString(t);return W(SI(e)),e}function ba(t,e){return Yf(t.databaseId,e.path)}function Un(t,e){const n=gI(e);if(n.get(1)!==t.databaseId.projectId)throw new C(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new C(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(vI(n))}function hd(t,e){return Yf(t.databaseId,e)}function yI(t){const e=gI(t);return e.length===4?he.emptyPath():vI(e)}function Ia(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function vI(t){return W(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Xg(t,e,n){return{name:ba(t,e),fields:n.value.mapValue.fields}}function _I(t,e,n){const r=Un(t,e.name),s=Ge(e.updateTime),i=e.createTime?Ge(e.createTime):Q.min(),o=new ht({mapValue:{fields:e.fields}}),a=Ne.newFoundDocument(r,s,i,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function uO(t,e){return"found"in e?function(n,r){W(!!r.found),r.found.name,r.found.updateTime;const s=Un(n,r.found.name),i=Ge(r.found.updateTime),o=r.found.createTime?Ge(r.found.createTime):Q.min(),a=new ht({mapValue:{fields:r.found.fields}});return Ne.newFoundDocument(s,i,o,a)}(t,e):"missing"in e?function(n,r){W(!!r.missing),W(!!r.readTime);const s=Un(n,r.missing),i=Ge(r.readTime);return Ne.newNoDocument(s,i)}(t,e):B()}function lO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.wt?(W(u===void 0||typeof u=="string"),Xe.fromBase64String(u||"")):(W(u===void 0||u instanceof Uint8Array),Xe.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?_.UNKNOWN:uI(c.code);return new C(u,c.message||"")}(o);n=new pI(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Un(t,r.document.name),i=Ge(r.document.updateTime),o=r.document.createTime?Ge(r.document.createTime):Q.min(),a=new ht({mapValue:{fields:r.document.fields}}),c=Ne.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Nc(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Un(t,r.document),i=r.readTime?Ge(r.readTime):Q.min(),o=Ne.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Nc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Un(t,r.document),i=r.removedTargetIds||[];n=new Nc([],i,s,null)}else{if(!("filter"in e))return B();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new XD(s),o=r.targetId;n=new fI(o,i)}}return n}function Ea(t,e){let n;if(e instanceof so)n={update:Xg(t,e.key,e.value)};else if(e instanceof io)n={delete:ba(t,e.key)};else if(e instanceof ur)n={update:Xg(t,e.key,e.data),updateMask:gO(e.fieldMask)};else{if(!(e instanceof Qf))return B();n={verify:ba(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Mi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ds)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Os)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Li)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw B()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:cO(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:B()}(t,e.precondition)),n}function dd(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Pe.updateTime(Ge(s.updateTime)):s.exists!==void 0?Pe.exists(s.exists):Pe.none()}(e.currentDocument):Pe.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(i,o){let a=null;if("setToServerValue"in o)W(o.setToServerValue==="REQUEST_TIME"),a=new Mi;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Ds(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Os(u)}else"increment"in o?a=new Li(i,o.increment):B();const c=He.fromServerFormat(o.fieldPath);return new Ga(c,a)}(t,s)):[];if(e.update){e.update.name;const s=Un(t,e.update.name),i=new ht({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new zt(c.map(u=>He.fromServerFormat(u)))}(e.updateMask);return new ur(s,i,o,n,r)}return new so(s,i,n,r)}if(e.delete){const s=Un(t,e.delete);return new io(s,n)}if(e.verify){const s=Un(t,e.verify);return new Qf(s,n)}return B()}function hO(t,e){return t&&t.length>0?(W(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?Ge(r.updateTime):Ge(s);return i.isEqual(Q.min())&&(i=Ge(s)),new QD(i,r.transformResults||[])}(n,e))):[]}function wI(t,e){return{documents:[hd(t,e.path)]}}function bI(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=hd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=hd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return TI(_e.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:ai(l.field),direction:fO(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||ja(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function II(t){let e=yI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){W(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=EI(l);return h instanceof _e&&$b(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new wi(ci(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,ja(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Ur(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Ur(d,h)}(n.endAt)),Qb(e,s,o,i,a,"F",c,u)}function dO(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return B()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function EI(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ci(e.unaryFilter.field);return ue.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ci(e.unaryFilter.field);return ue.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ci(e.unaryFilter.field);return ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ci(e.unaryFilter.field);return ue.create(i,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(t):t.fieldFilter!==void 0?function(e){return ue.create(ci(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return _e.create(e.compositeFilter.filters.map(n=>EI(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return B()}}(e.compositeFilter.op))}(t):B()}function fO(t){return sO[t]}function pO(t){return iO[t]}function mO(t){return oO[t]}function ai(t){return{fieldPath:t.canonicalString()}}function ci(t){return He.fromServerFormat(t.fieldPath)}function TI(t){return t instanceof ue?function(e){if(e.op==="=="){if(Lg(e.value))return{unaryFilter:{field:ai(e.field),op:"IS_NAN"}};if(Mg(e.value))return{unaryFilter:{field:ai(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Lg(e.value))return{unaryFilter:{field:ai(e.field),op:"IS_NOT_NAN"}};if(Mg(e.value))return{unaryFilter:{field:ai(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ai(e.field),op:pO(e.op),value:e.value}}}(t):t instanceof _e?function(e){const n=e.getFilters().map(r=>TI(r));return n.length===1?n[0]:{compositeFilter:{op:mO(e.op),filters:n}}}(t):B()}function gO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function SI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function xt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Zg(e)),e=yO(t.get(n),e);return Zg(e)}function yO(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Zg(t){return t+""}function Pn(t){const e=t.length;if(W(e>=2),e===2)return W(t.charAt(0)===""&&t.charAt(1)===""),he.emptyPath();const n=e-2,r=[];let s="";for(let i=0;i<e;){const o=t.indexOf("",i);switch((o<0||o>n)&&B(),t.charAt(o+1)){case"":const a=t.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=t.substring(i,o),s+="\0";break;case"":s+=t.substring(i,o+1);break;default:B()}i=o+2}return new he(r)}/**
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
 */const ey=["userId","batchId"];/**
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
 */function Dc(t,e){return[t,xt(e)]}function kI(t,e,n){return[t,xt(e),n]}const vO={},_O=["prefixPath","collectionGroup","readTime","documentId"],wO=["prefixPath","collectionGroup","documentId"],bO=["collectionGroup","readTime","prefixPath","documentId"],IO=["canonicalId","targetId"],EO=["targetId","path"],TO=["path","targetId"],SO=["collectionId","parent"],kO=["indexId","uid"],CO=["uid","sequenceNumber"],AO=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],RO=["indexId","uid","orderedDocumentKey"],xO=["userId","collectionPath","documentId"],NO=["userId","collectionPath","largestBatchId"],DO=["userId","collectionGroup","largestBatchId"],CI=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],OO=[...CI,"documentOverlays"],AI=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],RI=AI,PO=[...RI,"indexConfiguration","indexState","indexEntries"];/**
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
 */class fd extends Pb{constructor(e,n){super(),this.se=e,this.currentSequenceNumber=n}}function ct(t,e){const n=U(t);return dn.M(n.se,e)}/**
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
 */class Jf{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&YD(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=jo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=jo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=dI();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=oI(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Di(this.mutations,e.mutations,(n,r)=>Gg(n,r))&&Di(this.baseMutations,e.baseMutations,(n,r)=>Gg(n,r))}}class Xf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){W(e.mutations.length===r.length);let s=eO;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Xf(e,n,r,s)}}/**
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
 */class Zf{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ar{constructor(e,n,r,s,i=Q.min(),o=Q.min(),a=Xe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ar(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class xI{constructor(e){this.ie=e}}function MO(t,e){let n;if(e.document)n=_I(t.ie,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=L.fromSegments(e.noDocument.path),s=Ms(e.noDocument.readTime);n=Ne.newNoDocument(r,s),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return B();{const r=L.fromSegments(e.unknownDocument.path),s=Ms(e.unknownDocument.version);n=Ne.newUnknownDocument(r,s)}}return e.readTime&&n.setReadTime(function(r){const s=new Le(r[0],r[1]);return Q.fromTimestamp(s)}(e.readTime)),n}function ty(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:cu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,i){return{name:ba(s,i.key),fields:i.data.value.mapValue.fields,updateTime:Fi(s,i.version.toTimestamp()),createTime:Fi(s,i.createTime.toTimestamp())}}(t.ie,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ps(e.version)};else{if(!e.isUnknownDocument())return B();r.unknownDocument={path:n.path.toArray(),version:Ps(e.version)}}return r}function cu(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Ps(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ms(t){const e=new Le(t.seconds,t.nanoseconds);return Q.fromTimestamp(e)}function us(t,e){const n=(e.baseMutations||[]).map(i=>dd(t.ie,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>dd(t.ie,i)),s=Le.fromMillis(e.localWriteTimeMs);return new Jf(e.batchId,s,n,r)}function Do(t){const e=Ms(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Ms(t.lastLimboFreeSnapshotVersion):Q.min();let r;var s;return t.query.documents!==void 0?(W((s=t.query).documents.length===1),r=Ut(ro(yI(s.documents[0])))):r=function(i){return Ut(II(i))}(t.query),new Ar(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Xe.fromBase64String(t.resumeToken))}function NI(t,e){const n=Ps(e.snapshotVersion),r=Ps(e.lastLimboFreeSnapshotVersion);let s;s=iu(e.target)?wI(t.ie,e.target):bI(t.ie,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ns(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function ep(t){const e=II({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?au(e,e.limit,"L"):e}function mh(t,e){return new Zf(e.largestBatchId,dd(t.ie,e.overlayMutation))}function ny(t,e){const n=e.path.lastSegment();return[t,xt(e.path.popLast()),n]}function ry(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Ps(r.readTime),documentKey:xt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class LO{getBundleMetadata(e,n){return sy(e).get(n).next(r=>{if(r)return{id:(s=r).bundleId,createTime:Ms(s.createTime),version:s.version};var s})}saveBundleMetadata(e,n){return sy(e).put({bundleId:(r=n).id,createTime:Ps(Ge(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return iy(e).get(n).next(r=>{if(r)return{name:(s=r).name,query:ep(s.bundledQuery),readTime:Ms(s.readTime)};var s})}saveNamedQuery(e,n){return iy(e).put(function(r){return{name:r.name,readTime:Ps(Ge(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function sy(t){return ct(t,"bundles")}function iy(t){return ct(t,"namedQueries")}/**
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
 */class Il{constructor(e,n){this.yt=e,this.userId=n}static re(e,n){const r=n.uid||"";return new Il(e,r)}getOverlay(e,n){return yo(e).get(ny(this.userId,n)).next(r=>r?mh(this.yt,r):null)}getOverlays(e,n){const r=On();return v.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){const s=[];return r.forEach((i,o)=>{const a=new Zf(n,o);s.push(this.oe(e,a))}),v.waitFor(s)}removeOverlaysForBatchId(e,n,r){const s=new Set;n.forEach(o=>s.add(xt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(yo(e).Y("collectionPathOverlayIndex",a))}),v.waitFor(i)}getOverlaysForCollection(e,n,r){const s=On(),i=xt(n),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return yo(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=mh(this.yt,c);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,n,r,s){const i=On();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return yo(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=mh(this.yt,u);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>i)}oe(e,n){return yo(e).put(function(r,s,i){const[o,a,c]=ny(s,i.mutation.key);return{userId:s,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:Ea(r.ie,i.mutation)}}(this.yt,this.userId,n))}}function yo(t){return ct(t,"documentOverlays")}/**
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
 */class ls{constructor(){}ue(e,n){this.ce(e,n),n.ae()}ce(e,n){if("nullValue"in e)this.he(n,5);else if("booleanValue"in e)this.he(n,10),n.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(n,15),n.le(Ve(e.integerValue));else if("doubleValue"in e){const r=Ve(e.doubleValue);isNaN(r)?this.he(n,13):(this.he(n,15),ya(r)?n.le(0):n.le(r))}else if("timestampValue"in e){const r=e.timestampValue;this.he(n,20),typeof r=="string"?n.fe(r):(n.fe(`${r.seconds||""}`),n.le(r.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,n),this._e(n);else if("bytesValue"in e)this.he(n,30),n.we(As(e.bytesValue)),this._e(n);else if("referenceValue"in e)this.me(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.he(n,45),n.le(r.latitude||0),n.le(r.longitude||0)}else"mapValue"in e?Ub(e)?this.he(n,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,n),this._e(n)):"arrayValue"in e?(this.ye(e.arrayValue,n),this._e(n)):B()}de(e,n){this.he(n,25),this.pe(e,n)}pe(e,n){n.fe(e)}ge(e,n){const r=e.fields||{};this.he(n,55);for(const s of Object.keys(r))this.de(s,n),this.ce(r[s],n)}ye(e,n){const r=e.values||[];this.he(n,50);for(const s of r)this.ce(s,n)}me(e,n){this.he(n,37),L.fromName(e).path.forEach(r=>{this.he(n,60),this.pe(r,n)})}he(e,n){e.le(n)}_e(e){e.le(2)}}ls.Ie=new ls;function FO(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function oy(t){const e=64-function(n){let r=0;for(let s=0;s<8;++s){const i=FO(255&n[s]);if(r+=i,i!==8)break}return r}(t);return Math.ceil(e/8)}class UO{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ee(r.value),r=n.next();this.Ae()}Re(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.be(r.value),r=n.next();this.Pe()}ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ee(r);else if(r<2048)this.Ee(960|r>>>6),this.Ee(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ee(480|r>>>12),this.Ee(128|63&r>>>6),this.Ee(128|63&r);else{const s=n.codePointAt(0);this.Ee(240|s>>>18),this.Ee(128|63&s>>>12),this.Ee(128|63&s>>>6),this.Ee(128|63&s)}}this.Ae()}Ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.be(r);else if(r<2048)this.be(960|r>>>6),this.be(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.be(480|r>>>12),this.be(128|63&r>>>6),this.be(128|63&r);else{const s=n.codePointAt(0);this.be(240|s>>>18),this.be(128|63&s>>>12),this.be(128|63&s>>>6),this.be(128|63&s)}}this.Pe()}Se(e){const n=this.De(e),r=oy(n);this.Ce(1+r),this.buffer[this.position++]=255&r;for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=255&n[s]}xe(e){const n=this.De(e),r=oy(n);this.Ce(1+r),this.buffer[this.position++]=~(255&r);for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=~(255&n[s])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(e){this.Ce(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fe(){return this.buffer.slice(0,this.position)}De(e){const n=function(s){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,s,!1),new Uint8Array(i.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let s=1;s<n.length;++s)n[s]^=r?255:0;return n}Ee(e){const n=255&e;n===0?(this.ke(0),this.ke(255)):n===255?(this.ke(255),this.ke(0)):this.ke(n)}be(e){const n=255&e;n===0?(this.Me(0),this.Me(255)):n===255?(this.Me(255),this.Me(0)):this.Me(e)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(e){this.Ce(1),this.buffer[this.position++]=e}Me(e){this.Ce(1),this.buffer[this.position++]=~e}Ce(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class VO{constructor(e){this.$e=e}we(e){this.$e.Te(e)}fe(e){this.$e.ve(e)}le(e){this.$e.Se(e)}ae(){this.$e.Ne()}}class $O{constructor(e){this.$e=e}we(e){this.$e.Re(e)}fe(e){this.$e.Ve(e)}le(e){this.$e.xe(e)}ae(){this.$e.Oe()}}class vo{constructor(){this.$e=new UO,this.Be=new VO(this.$e),this.Le=new $O(this.$e)}seed(e){this.$e.seed(e)}qe(e){return e===0?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}/**
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
 */class hs{constructor(e,n,r,s){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=s}Ue(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new hs(this.indexId,this.documentKey,this.arrayValue,r)}}function pr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=ay(t.arrayValue,e.arrayValue),n!==0?n:(n=ay(t.directionalValue,e.directionalValue),n!==0?n:L.comparator(t.documentKey,e.documentKey)))}function ay(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class BO{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ke=e.orderBy,this.Ge=[];for(const n of e.filters){const r=n;r.isInequality()?this.Qe=r:this.Ge.push(r)}}je(e){W(e.collectionGroup===this.collectionId);const n=sd(e);if(n!==void 0&&!this.We(n))return!1;const r=rs(e);let s=0,i=0;for(;s<r.length&&this.We(r[s]);++s);if(s===r.length)return!0;if(this.Qe!==void 0){const o=r[s];if(!this.ze(this.Qe,o)||!this.He(this.Ke[i++],o))return!1;++s}for(;s<r.length;++s){const o=r[s];if(i>=this.Ke.length||!this.He(this.Ke[i++],o))return!1}return!0}We(e){for(const n of this.Ge)if(this.ze(n,e))return!0;return!1}ze(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}He(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function DI(t){var e,n;if(W(t instanceof ue||t instanceof _e),t instanceof ue){if(t instanceof Wb){const s=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(i=>ue.create(t.field,"==",i)))||[];return _e.create(s,"or")}return t}const r=t.filters.map(s=>DI(s));return _e.create(r,t.op)}function qO(t){if(t.getFilters().length===0)return[];const e=gd(DI(t));return W(OI(e)),pd(e)||md(e)?[e]:e.getFilters()}function pd(t){return t instanceof ue}function md(t){return t instanceof _e&&$b(t)}function OI(t){return pd(t)||md(t)||function(e){if(e instanceof _e&&ad(e)){for(const n of e.getFilters())if(!pd(n)&&!md(n))return!1;return!0}return!1}(t)}function gd(t){if(W(t instanceof ue||t instanceof _e),t instanceof ue)return t;if(t.filters.length===1)return gd(t.filters[0]);const e=t.filters.map(r=>gd(r));let n=_e.create(e,t.op);return n=uu(n),OI(n)?n:(W(n instanceof _e),W(Pi(n)),W(n.filters.length>1),n.filters.reduce((r,s)=>tp(r,s)))}function tp(t,e){let n;return W(t instanceof ue||t instanceof _e),W(e instanceof ue||e instanceof _e),n=t instanceof ue?e instanceof ue?function(r,s){return _e.create([r,s],"and")}(t,e):cy(t,e):e instanceof ue?cy(e,t):function(r,s){if(W(r.filters.length>0&&s.filters.length>0),Pi(r)&&Pi(s))return Kb(r,s.getFilters());const i=ad(r)?r:s,o=ad(r)?s:r,a=i.filters.map(c=>tp(c,o));return _e.create(a,"or")}(t,e),uu(n)}function cy(t,e){if(Pi(e))return Kb(e,t.getFilters());{const n=e.filters.map(r=>tp(t,r));return _e.create(n,"or")}}function uu(t){if(W(t instanceof ue||t instanceof _e),t instanceof ue)return t;const e=t.getFilters();if(e.length===1)return uu(e[0]);if(Bb(t))return t;const n=e.map(s=>uu(s)),r=[];return n.forEach(s=>{s instanceof ue?r.push(s):s instanceof _e&&(s.op===t.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:_e.create(r,t.op)}/**
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
 */class jO{constructor(){this.Je=new np}addToCollectionParentIndex(e,n){return this.Je.add(n),v.resolve()}getCollectionParents(e,n){return v.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return v.resolve()}deleteFieldIndex(e,n){return v.resolve()}getDocumentsMatchingTarget(e,n){return v.resolve(null)}getIndexType(e,n){return v.resolve(0)}getFieldIndexes(e,n){return v.resolve([])}getNextCollectionGroupToUpdate(e){return v.resolve(null)}getMinOffset(e,n){return v.resolve(Jt.min())}getMinOffsetFromCollectionGroup(e,n){return v.resolve(Jt.min())}updateCollectionGroup(e,n,r){return v.resolve()}updateIndexEntries(e,n){return v.resolve()}}class np{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ee(he.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ee(he.comparator)).toArray()}}/**
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
 */const pc=new Uint8Array(0);class KO{constructor(e,n){this.user=e,this.databaseId=n,this.Ye=new np,this.Xe=new Qr(r=>Ns(r),(r,s)=>Ka(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Ye.has(n)){const r=n.lastSegment(),s=n.popLast();e.addOnCommittedListener(()=>{this.Ye.add(n)});const i={collectionId:r,parent:xt(s)};return uy(e).put(i)}return v.resolve()}getCollectionParents(e,n){const r=[],s=IDBKeyRange.bound([n,""],[Rb(n),""],!1,!0);return uy(e).W(s).next(i=>{for(const o of i){if(o.collectionId!==n)break;r.push(Pn(o.parent))}return r})}addFieldIndex(e,n){const r=mc(e),s=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete s.indexId;const i=r.add(s);if(n.indexState){const o=wo(e);return i.next(a=>{o.put(ry(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return i.next()}deleteFieldIndex(e,n){const r=mc(e),s=wo(e),i=_o(e);return r.delete(n.indexId).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=_o(e);let s=!0;const i=new Map;return v.forEach(this.Ze(n),o=>this.tn(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=se();const a=[];return v.forEach(i,(c,u)=>{var l;N("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(E=>`${E.fieldPath}:${E.kind}`).join(",")}`} to execute ${Ns(n)}`);const h=function(E,x){const j=sd(x);if(j===void 0)return null;for(const z of ou(E,j.fieldPath))switch(z.op){case"array-contains-any":return z.value.arrayValue.values||[];case"array-contains":return[z.value]}return null}(u,c),d=function(E,x){const j=new Map;for(const z of rs(x))for(const ae of ou(E,z.fieldPath))switch(ae.op){case"==":case"in":j.set(z.fieldPath.canonicalString(),ae.value);break;case"not-in":case"!=":return j.set(z.fieldPath.canonicalString(),ae.value),Array.from(j.values())}return null}(u,c),f=function(E,x){const j=[];let z=!0;for(const ae of rs(x)){const Z=ae.kind===0?qg(E,ae.fieldPath,E.startAt):jg(E,ae.fieldPath,E.startAt);j.push(Z.value),z&&(z=Z.inclusive)}return new Ur(j,z)}(u,c),g=function(E,x){const j=[];let z=!0;for(const ae of rs(x)){const Z=ae.kind===0?jg(E,ae.fieldPath,E.endAt):qg(E,ae.fieldPath,E.endAt);j.push(Z.value),z&&(z=Z.inclusive)}return new Ur(j,z)}(u,c),y=this.en(c,u,f),b=this.en(c,u,g),S=this.nn(c,u,d),A=this.sn(c.indexId,h,y,f.inclusive,b,g.inclusive,S);return v.forEach(A,E=>r.J(E,n.limit).next(x=>{x.forEach(j=>{const z=L.fromSegments(j.documentKey);o.has(z)||(o=o.add(z),a.push(z))})}))}).next(()=>a)}return v.resolve(null)})}Ze(e){let n=this.Xe.get(e);return n||(e.filters.length===0?n=[e]:n=qO(_e.create(e.filters,"and")).map(r=>cd(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Xe.set(e,n),n)}sn(e,n,r,s,i,o,a){const c=(n!=null?n.length:1)*Math.max(r.length,i.length),u=c/(n!=null?n.length:1),l=[];for(let h=0;h<c;++h){const d=n?this.rn(n[h/u]):pc,f=this.on(e,d,r[h%u],s),g=this.un(e,d,i[h%u],o),y=a.map(b=>this.on(e,d,b,!0));l.push(...this.createRange(f,g,y))}return l}on(e,n,r,s){const i=new hs(e,L.empty(),n,r);return s?i:i.Ue()}un(e,n,r,s){const i=new hs(e,L.empty(),n,r);return s?i.Ue():i}tn(e,n){const r=new BO(n),s=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.je(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const s=this.Ze(n);return v.forEach(s,i=>this.tn(e,i).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new Ee(He.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(i)&&(r=1):r=0})).next(()=>function(i){return i.limit!==null}(n)&&s.length>1&&r===2?1:r)}cn(e,n){const r=new vo;for(const s of rs(e)){const i=n.data.field(s.fieldPath);if(i==null)return null;const o=r.qe(s.kind);ls.Ie.ue(i,o)}return r.Fe()}rn(e){const n=new vo;return ls.Ie.ue(e,n.qe(0)),n.Fe()}an(e,n){const r=new vo;return ls.Ie.ue(xs(this.databaseId,n),r.qe(function(s){const i=rs(s);return i.length===0?0:i[i.length-1].kind}(e))),r.Fe()}nn(e,n,r){if(r===null)return[];let s=[];s.push(new vo);let i=0;for(const o of rs(e)){const a=r[i++];for(const c of s)if(this.hn(n,o.fieldPath)&&wa(a))s=this.ln(s,o,a);else{const u=c.qe(o.kind);ls.Ie.ue(a,u)}}return this.fn(s)}en(e,n,r){return this.nn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Fe();return n}ln(e,n,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const c=new vo;c.seed(a.Fe()),ls.Ie.ue(o,c.qe(n.kind)),i.push(c)}return i}hn(e,n){return!!e.filters.find(r=>r instanceof ue&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=mc(e),s=wo(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(i=>{const o=[];return v.forEach(i,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new su(l.sequenceNumber,new Jt(Ms(l.readTime),new L(Pn(l.documentKey)),l.largestBatchId)):su.empty(),d=u.fields.map(([f,g])=>new CD(He.fromServerFormat(f),g));return new xb(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:re(r.collectionGroup,s.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const s=mc(e),i=wo(e);return this.dn(e).next(o=>s.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>v.forEach(a,c=>i.put(ry(c.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return v.forEach(n,(s,i)=>{const o=r.get(s.collectionGroup);return(o?v.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),v.forEach(a,c=>this._n(e,s,c).next(u=>{const l=this.wn(i,c);return u.isEqual(l)?v.resolve():this.mn(e,i,c,u,l)}))))})}gn(e,n,r,s){return _o(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.an(r,n.key),documentKey:n.key.path.toArray()})}yn(e,n,r,s){return _o(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.an(r,n.key),n.key.path.toArray()])}_n(e,n,r){const s=_o(e);let i=new Ee(pr);return s.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.an(r,n)])},(o,a)=>{i=i.add(new hs(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>i)}wn(e,n){let r=new Ee(pr);const s=this.cn(n,e);if(s==null)return r;const i=sd(n);if(i!=null){const o=e.data.field(i.fieldPath);if(wa(o))for(const a of o.arrayValue.values||[])r=r.add(new hs(n.indexId,e.key,this.rn(a),s))}else r=r.add(new hs(n.indexId,e.key,pc,s));return r}mn(e,n,r,s,i){N("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),f=c.getIterator();let g=ri(d),y=ri(f);for(;g||y;){let b=!1,S=!1;if(g&&y){const A=u(g,y);A<0?S=!0:A>0&&(b=!0)}else g!=null?S=!0:b=!0;b?(l(y),y=ri(f)):S?(h(g),g=ri(d)):(g=ri(d),y=ri(f))}}(s,i,pr,a=>{o.push(this.gn(e,n,r,a))},a=>{o.push(this.yn(e,n,r,a))}),v.waitFor(o)}dn(e){let n=1;return wo(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),n=s.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>pr(o,a)).filter((o,a,c)=>!a||pr(o,c[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=pr(o,e),c=pr(o,n);if(a===0)s[0]=e.Ue();else if(a>0&&c<0)s.push(o),s.push(o.Ue());else if(c>0)break}s.push(n);const i=[];for(let o=0;o<s.length;o+=2){if(this.pn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,pc,[]],c=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,pc,[]];i.push(IDBKeyRange.bound(a,c))}return i}pn(e,n){return pr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(ly)}getMinOffset(e,n){return v.mapArray(this.Ze(n),r=>this.tn(e,r).next(s=>s||B())).next(ly)}}function uy(t){return ct(t,"collectionParents")}function _o(t){return ct(t,"indexEntries")}function mc(t){return ct(t,"indexConfiguration")}function wo(t){return ct(t,"indexState")}function ly(t){W(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const s=t[r].indexState.offset;jf(s,e)<0&&(e=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new Jt(e.readTime,e.documentKey,n)}/**
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
 */const hy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ot{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ot(e,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function PI(t,e,n){const r=t.store("mutations"),s=t.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));i.push(c.next(()=>{W(a===1)}));const u=[];for(const l of n.mutations){const h=kI(e,l.key.path,n.batchId);i.push(s.delete(h)),u.push(l.key)}return v.waitFor(i).next(()=>u)}function lu(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw B();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Ot.DEFAULT_COLLECTION_PERCENTILE=10,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ot.DEFAULT=new Ot(41943040,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ot.DISABLED=new Ot(-1,0,0);class El{constructor(e,n,r,s){this.userId=e,this.yt=n,this.indexManager=r,this.referenceDelegate=s,this.In={}}static re(e,n,r,s){W(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new El(i,n,r,s)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return mr(e).Z({index:"userMutationsIndex",range:r},(s,i,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,s){const i=ui(e),o=mr(e);return o.add({}).next(a=>{W(typeof a=="number");const c=new Jf(a,n,r,s),u=function(d,f,g){const y=g.baseMutations.map(S=>Ea(d.ie,S)),b=g.mutations.map(S=>Ea(d.ie,S));return{userId:f,batchId:g.batchId,localWriteTimeMs:g.localWriteTime.toMillis(),baseMutations:y,mutations:b}}(this.yt,this.userId,c),l=[];let h=new Ee((d,f)=>re(d.canonicalString(),f.canonicalString()));for(const d of s){const f=kI(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(i.put(f,vO))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=c.keys()}),v.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return mr(e).get(n).next(r=>r?(W(r.userId===this.userId),us(this.yt,r)):null)}Tn(e,n){return this.In[n]?v.resolve(this.In[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const s=r.keys();return this.In[n]=s,s}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return mr(e).Z({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&(W(a.batchId>=r),i=us(this.yt,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return mr(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return mr(e).W("userMutationsIndex",n).next(r=>r.map(s=>us(this.yt,s)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Dc(this.userId,n.path),s=IDBKeyRange.lowerBound(r),i=[];return ui(e).Z({range:s},(o,a,c)=>{const[u,l,h]=o,d=Pn(l);if(u===this.userId&&n.path.isEqual(d))return mr(e).get(h).next(f=>{if(!f)throw B();W(f.userId===this.userId),i.push(us(this.yt,f))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ee(re);const s=[];return n.forEach(i=>{const o=Dc(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=ui(e).Z({range:a},(u,l,h)=>{const[d,f,g]=u,y=Pn(f);d===this.userId&&i.path.isEqual(y)?r=r.add(g):h.done()});s.push(c)}),v.waitFor(s).next(()=>this.En(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1,i=Dc(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new Ee(re);return ui(e).Z({range:o},(c,u,l)=>{const[h,d,f]=c,g=Pn(d);h===this.userId&&r.isPrefixOf(g)?g.length===s&&(a=a.add(f)):l.done()}).next(()=>this.En(e,a))}En(e,n){const r=[],s=[];return n.forEach(i=>{s.push(mr(e).get(i).next(o=>{if(o===null)throw B();W(o.userId===this.userId),r.push(us(this.yt,o))}))}),v.waitFor(s).next(()=>r)}removeMutationBatch(e,n){return PI(e.se,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.An(n.batchId)}),v.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return v.resolve();const r=IDBKeyRange.lowerBound([this.userId]),s=[];return ui(e).Z({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=Pn(i[1]);s.push(c)}else a.done()}).next(()=>{W(s.length===0)})})}containsKey(e,n){return MI(e,this.userId,n)}Rn(e){return LI(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function MI(t,e,n){const r=Dc(e,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return ui(t).Z({range:i,X:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===s&&(o=!0),u.done()}).next(()=>o)}function mr(t){return ct(t,"mutations")}function ui(t){return ct(t,"documentMutations")}function LI(t){return ct(t,"mutationQueues")}/**
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
 */class Ls{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ls(0)}static vn(){return new Ls(-1)}}/**
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
 */class HO{constructor(e,n){this.referenceDelegate=e,this.yt=n}allocateTargetId(e){return this.Vn(e).next(n=>{const r=new Ls(n.highestTargetId);return n.highestTargetId=r.next(),this.Sn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(n=>Q.fromTimestamp(new Le(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Vn(e).next(s=>(s.highestListenSequenceNumber=n,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),n>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=n),this.Sn(e,s)))}addTargetData(e,n){return this.Dn(e,n).next(()=>this.Vn(e).next(r=>(r.targetCount+=1,this.Cn(n,r),this.Sn(e,r))))}updateTargetData(e,n){return this.Dn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>si(e).delete(n.targetId)).next(()=>this.Vn(e)).next(r=>(W(r.targetCount>0),r.targetCount-=1,this.Sn(e,r)))}removeTargets(e,n,r){let s=0;const i=[];return si(e).Z((o,a)=>{const c=Do(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>v.waitFor(i)).next(()=>s)}forEachTarget(e,n){return si(e).Z((r,s)=>{const i=Do(s);n(i)})}Vn(e){return dy(e).get("targetGlobalKey").next(n=>(W(n!==null),n))}Sn(e,n){return dy(e).put("targetGlobalKey",n)}Dn(e,n){return si(e).put(NI(this.yt,n))}Cn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Vn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ns(n),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return si(e).Z({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const u=Do(a);Ka(n,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,n,r){const s=[],i=vr(e);return n.forEach(o=>{const a=xt(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),v.waitFor(s)}removeMatchingKeys(e,n,r){const s=vr(e);return v.forEach(n,i=>{const o=xt(i.path);return v.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,n){const r=vr(e),s=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),s=vr(e);let i=se();return s.Z({range:r,X:!0},(o,a,c)=>{const u=Pn(o[1]),l=new L(u);i=i.add(l)}).next(()=>i)}containsKey(e,n){const r=xt(n.path),s=IDBKeyRange.bound([r],[Rb(r)],!1,!0);let i=0;return vr(e).Z({index:"documentTargetsIndex",X:!0,range:s},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}ne(e,n){return si(e).get(n).next(r=>r?Do(r):null)}}function si(t){return ct(t,"targets")}function dy(t){return ct(t,"targetGlobal")}function vr(t){return ct(t,"targetDocuments")}/**
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
 */function fy([t,e],[n,r]){const s=re(t,n);return s===0?re(e,r):s}class GO{constructor(e){this.xn=e,this.buffer=new Ee(fy),this.Nn=0}kn(){return++this.Nn}On(e){const n=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();fy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class WO{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){N("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){zr(n)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Wr(n)}await this.Fn(3e5)})}}class zO{constructor(e,n){this.$n=e,this.params=n}calculateTargetCount(e,n){return this.$n.Bn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return v.resolve(Lt.at);const r=new GO(n);return this.$n.forEachTarget(e,s=>r.On(s.sequenceNumber)).next(()=>this.$n.Ln(e,s=>r.On(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.$n.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.$n.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),v.resolve(hy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hy):this.qn(e,n))}getCacheSize(e){return this.$n.getCacheSize(e)}qn(e,n){let r,s,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),rd()<=pe.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
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
 */class QO{constructor(e,n){this.db=e,this.garbageCollector=function(r,s){return new zO(r,s)}(this,n)}Bn(e){const n=this.Un(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Un(e){let n=0;return this.Ln(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Ln(e,n){return this.Kn(e,(r,s)=>n(s))}addReference(e,n,r){return gc(e,r)}removeReference(e,n,r){return gc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return gc(e,n)}Gn(e,n){return function(r,s){let i=!1;return LI(r).tt(o=>MI(r,o,s).next(a=>(a&&(i=!0),v.resolve(!a)))).next(()=>i)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Kn(e,(o,a)=>{if(a<=n){const c=this.Gn(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Q.min()),vr(e).delete([0,xt(o.path)])))});s.push(c)}}).next(()=>v.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return gc(e,n)}Kn(e,n){const r=vr(e);let s,i=Lt.at;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==Lt.at&&n(new L(Pn(s)),i),i=u,s=c):i=Lt.at}).next(()=>{i!==Lt.at&&n(new L(Pn(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function gc(t,e){return vr(t).put(function(n,r){return{targetId:0,path:xt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class FI{constructor(){this.changes=new Qr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?v.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class YO{constructor(e){this.yt=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return es(e).put(r)}removeEntry(e,n,r){return es(e).delete(function(s,i){const o=s.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],cu(i),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Qn(e,r)))}getEntry(e,n){let r=Ne.newInvalidDocument(n);return es(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(bo(n))},(s,i)=>{r=this.jn(n,i)}).next(()=>r)}Wn(e,n){let r={size:0,document:Ne.newInvalidDocument(n)};return es(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(bo(n))},(s,i)=>{r={document:this.jn(n,i),size:lu(i)}}).next(()=>r)}getEntries(e,n){let r=Ft();return this.zn(e,n,(s,i)=>{const o=this.jn(s,i);r=r.insert(s,o)}).next(()=>r)}Hn(e,n){let r=Ft(),s=new Be(L.comparator);return this.zn(e,n,(i,o)=>{const a=this.jn(i,o);r=r.insert(i,a),s=s.insert(i,lu(o))}).next(()=>({documents:r,Jn:s}))}zn(e,n,r){if(n.isEmpty())return v.resolve();let s=new Ee(gy);n.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(bo(s.first()),bo(s.last())),o=s.getIterator();let a=o.getNext();return es(e).Z({index:"documentKeyIndex",range:i},(c,u,l)=>{const h=L.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&gy(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.j(bo(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,n,r){const s=[n.popLast().toArray(),n.lastSegment(),cu(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],i=[n.popLast().toArray(),n.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return es(e).W(IDBKeyRange.bound(s,i,!0)).next(o=>{let a=Ft();for(const c of o){const u=this.jn(L.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(u.key,u)}return a})}getAllFromCollectionGroup(e,n,r,s){let i=Ft();const o=my(n,r),a=my(n,Jt.max());return es(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.jn(L.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(h.key,h),i.size===s&&l.done()}).next(()=>i)}newChangeBuffer(e){return new JO(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return py(e).get("remoteDocumentGlobalKey").next(n=>(W(!!n),n))}Qn(e,n){return py(e).put("remoteDocumentGlobalKey",n)}jn(e,n){if(n){const r=MO(this.yt,n);if(!(r.isNoDocument()&&r.version.isEqual(Q.min())))return r}return Ne.newInvalidDocument(e)}}function UI(t){return new YO(t)}class JO extends FI{constructor(e,n){super(),this.Yn=e,this.trackRemovals=n,this.Xn=new Qr(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const n=[];let r=0,s=new Ee((i,o)=>re(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Xn.get(i);if(n.push(this.Yn.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=ty(this.Yn.yt,o);s=s.add(i.path.popLast());const u=lu(c);r+=u-a.size,n.push(this.Yn.addEntry(e,i,c))}else if(r-=a.size,this.trackRemovals){const c=ty(this.Yn.yt,o.convertToNoDocument(Q.min()));n.push(this.Yn.addEntry(e,i,c))}}),s.forEach(i=>{n.push(this.Yn.indexManager.addToCollectionParentIndex(e,i))}),n.push(this.Yn.updateMetadata(e,r)),v.waitFor(n)}getFromCache(e,n){return this.Yn.Wn(e,n).next(r=>(this.Xn.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Yn.Hn(e,n).next(({documents:r,Jn:s})=>(s.forEach((i,o)=>{this.Xn.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function py(t){return ct(t,"remoteDocumentGlobal")}function es(t){return ct(t,"remoteDocumentsV14")}function bo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function my(t,e){const n=e.documentKey.path.toArray();return[t,cu(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function gy(t,e){const n=t.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=re(n[i],r[i]),s)return s;return s=re(n.length,r.length),s||(s=re(n[n.length-2],r[r.length-2]),s||re(n[n.length-1],r[r.length-1]))}/**
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
 */class XO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class VI{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&jo(r.mutation,s,zt.empty(),Le.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const s=On();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=No();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=On();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Ft();const o=Ko(),a=Ko();return n.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof ur)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),jo(l.mutation,u,l.mutation.getFieldMask(),Le.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new XO(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ko();let s=new Be((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||zt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||se()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=dI();l.forEach(d=>{if(!i.has(d)){const f=oI(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return v.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return L.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Wf(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):v.resolve(On());let a=-1,c=i;return o.next(u=>v.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?v.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,se())).next(l=>({batchId:a,changes:hI(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let s=No();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=No();return this.indexManager.getCollectionParents(e,s).next(o=>v.forEach(o,a=>{const c=function(u,l){return new cr(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,Ne.newInvalidDocument(u)))});let o=No();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&jo(u.mutation,c,zt.empty(),Le.now()),zf(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class ZO{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return v.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ge(r.createTime)}),v.resolve()}getNamedQuery(e,n){return v.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:ep(r.bundledQuery),readTime:Ge(r.readTime)}}(n)),v.resolve()}}/**
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
 */class eP{constructor(){this.overlays=new Be(L.comparator),this.es=new Map}getOverlay(e,n){return v.resolve(this.overlays.get(n))}getOverlays(e,n){const r=On();return v.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.oe(e,n,i)}),v.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.es.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(r)),v.resolve()}getOverlaysForCollection(e,n,r){const s=On(),i=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return v.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=On(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=On(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return v.resolve(a)}oe(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.es.get(s.largestBatchId).delete(r.key);this.es.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Zf(n,r));let i=this.es.get(n);i===void 0&&(i=se(),this.es.set(n,i)),this.es.set(n,i.add(r.key))}}/**
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
 */class rp{constructor(){this.ns=new Ee(et.ss),this.rs=new Ee(et.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new et(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new et(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new L(new he([])),r=new et(n,e),s=new et(n,e+1),i=[];return this.rs.forEachInRange([r,s],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new L(new he([])),r=new et(n,e),s=new et(n,e+1);let i=se();return this.rs.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new et(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return L.comparator(e.key,n.key)||re(e._s,n._s)}static os(e,n){return re(e._s,n._s)||L.comparator(e.key,n.key)}}/**
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
 */class tP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ee(et.ss)}checkEmpty(e){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Jf(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.gs=this.gs.add(new et(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(e,n){return v.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ps(r),i=s<0?0:s;return v.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),s=new et(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([r,s],o=>{const a=this.ys(o._s);i.push(a)}),v.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ee(re);return n.forEach(s=>{const i=new et(s,0),o=new et(s,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{r=r.add(a._s)})}),v.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;L.isDocumentKey(i)||(i=i.child(""));const o=new et(new L(i),0);let a=new Ee(re);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c._s)),!0)},o),v.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const s=this.ys(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){W(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return v.forEach(n.mutations,s=>{const i=new et(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new et(n,0),s=this.gs.firstAfterOrEqual(r);return v.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,v.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class nP{constructor(e){this.Es=e,this.docs=new Be(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return v.resolve(r?r.document.mutableCopy():Ne.newInvalidDocument(n))}getEntries(e,n){let r=Ft();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ne.newInvalidDocument(s))}),v.resolve(r)}getAllFromCollection(e,n,r){let s=Ft();const i=new L(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||jf(Db(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return v.resolve(s)}getAllFromCollectionGroup(e,n,r,s){B()}As(e,n){return v.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new rP(this)}getSize(e){return v.resolve(this.size)}}class rP extends FI{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Yn.addEntry(e,s)):this.Yn.removeEntry(r)}),v.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class sP{constructor(e){this.persistence=e,this.Rs=new Qr(n=>Ns(n),Ka),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.bs=0,this.Ps=new rp,this.targetCount=0,this.vs=Ls.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,s)=>n(s)),v.resolve()}getLastRemoteSnapshotVersion(e){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return v.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),v.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ls(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,v.resolve()}updateTargetData(e,n){return this.Dn(n),v.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,v.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),v.waitFor(i).next(()=>s)}getTargetCount(e){return v.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return v.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),v.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),v.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),v.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return v.resolve(r)}containsKey(e,n){return v.resolve(this.Ps.containsKey(n))}}/**
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
 */class $I{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Lt(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new sP(this),this.indexManager=new jO,this.remoteDocumentCache=function(r){return new nP(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new xI(n),this.Ns=new ZO(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new tP(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){N("MemoryPersistence","Starting transaction:",e);const s=new iP(this.Ss.next());return this.referenceDelegate.ks(),r(s).next(i=>this.referenceDelegate.Os(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ms(e,n){return v.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class iP extends Pb{constructor(e){super(),this.currentSequenceNumber=e}}class Tl{constructor(e){this.persistence=e,this.Fs=new rp,this.$s=null}static Bs(e){return new Tl(e)}get Ls(){if(this.$s)return this.$s;throw B()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),v.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),v.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),v.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(s=>this.Ls.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Ls.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Ls,r=>{const s=L.fromPath(r);return this.qs(e,s).next(i=>{i||n.removeEntry(s,Q.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return v.or([()=>v.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class oP{constructor(e){this.yt=e}$(e,n,r,s){const i=new yl("createOrUpgrade",n);r<1&&s>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ey,{unique:!0}),a.createObjectStore("documentMutations")}(e),yy(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=v.resolve();return r<3&&s>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),yy(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Q.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").W().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ey,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return v.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.Us(i))),r<6&&s>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(i)))),r<7&&s>=7&&(o=o.next(()=>this.Gs(i))),r<8&&s>=8&&(o=o.next(()=>this.Qs(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.js(i))),r<11&&s>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:xO});c.createIndex("collectionPathOverlayIndex",NO,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",DO,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:_O});c.createIndex("documentKeyIndex",wO),c.createIndex("collectionGroupIndex",bO)}(e)).next(()=>this.Ws(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.zs(e,i))),r<15&&s>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:kO}).createIndex("sequenceNumberIndex",CO,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:AO}).createIndex("documentKeyIndex",RO,{unique:!1})}(e))),o}Ks(e){let n=0;return e.store("remoteDocuments").Z((r,s)=>{n+=lu(s)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Us(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(s=>v.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>v.forEach(a,c=>{W(c.userId===i.userId);const u=us(this.yt,c);return PI(e,i.userId,u).next(()=>{})}))}))}Gs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.Z((o,a)=>{const c=new he(o),u=function(l){return[0,xt(l)]}(c);i.push(n.get(u).next(l=>l?v.resolve():(h=>n.put({targetId:0,path:xt(h),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>v.waitFor(i))})}Qs(e,n){e.createObjectStore("collectionParents",{keyPath:SO});const r=n.store("collectionParents"),s=new np,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:xt(c)})}};return n.store("remoteDocuments").Z({X:!0},(o,a)=>{const c=new he(o);return i(c.popLast())}).next(()=>n.store("documentMutations").Z({X:!0},([o,a,c],u)=>{const l=Pn(a);return i(l.popLast())}))}js(e){const n=e.store("targets");return n.Z((r,s)=>{const i=Do(s),o=NI(this.yt,i);return n.put(o)})}Ws(e,n){const r=n.store("remoteDocuments"),s=[];return r.Z((i,o)=>{const a=n.store("remoteDocumentsV14"),c=(u=o,u.document?new L(he.fromString(u.document.name).popFirst(5)):u.noDocument?L.fromSegments(u.noDocument.path):u.unknownDocument?L.fromSegments(u.unknownDocument.path):B()).path.toArray();var u;/**
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
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(l))}).next(()=>v.waitFor(s))}zs(e,n){const r=n.store("mutations"),s=UI(this.yt),i=new $I(Tl.Bs,this.yt.ie);return r.W().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:se();us(this.yt,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),v.forEach(a,(c,u)=>{const l=new tt(u),h=Il.re(this.yt,l),d=i.getIndexManager(l),f=El.re(l,this.yt,d,i.referenceDelegate);return new VI(s,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new fd(n,Lt.at),c).next()})})}}function yy(t){t.createObjectStore("targetDocuments",{keyPath:EO}).createIndex("documentTargetsIndex",TO,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",IO,{unique:!0}),t.createObjectStore("targetGlobal")}const gh="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class sp{constructor(e,n,r,s,i,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Hs=i,this.window=o,this.document=a,this.Js=u,this.Ys=l,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!sp.C())throw new C(_.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new QO(this,s),this.ii=n+"main",this.yt=new xI(c),this.ri=new dn(this.ii,this.Xs,new oP(this.yt)),this.Cs=new HO(this.referenceDelegate,this.yt),this.remoteDocumentCache=UI(this.yt),this.Ns=new LO,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,l===!1&&Ke("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(_.FAILED_PRECONDITION,gh);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new Lt(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>yc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(n=>this.isPrimary&&!n?this._i(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(zr(e))return N("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return Io(e).get("owner").next(n=>v.resolve(this.mi(n)))}gi(e){return yc(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=ct(n,"clientMetadata");return r.W().next(s=>{const i=this.Ii(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return v.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const n of e)this.oi.removeItem(this.Ti(n.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?v.resolve(!0):Io(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)){if(this.mi(n)&&this.networkEnabled)return!0;if(!this.mi(n)){if(!n.allowTabSynchronization)throw new C(_.FAILED_PRECONDITION,gh);return!1}}return!(!this.networkEnabled||!this.inForeground)||yc(e).W().next(r=>this.Ii(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&N("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new fd(e,Lt.at);return this._i(n).next(()=>this.gi(n))}),this.ri.close(),this.Pi()}Ii(e,n){return e.filter(r=>this.pi(r.updateTimeMs,n)&&!this.Ei(r.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>yc(e).W().next(n=>this.Ii(n,18e5).map(r=>r.clientId)))}get started(){return this.Ds}getMutationQueue(e,n){return El.re(e,this.yt,n,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new KO(e,this.yt.ie.databaseId)}getDocumentOverlayCache(e){return Il.re(this.yt,e)}getBundleCache(){return this.Ns}runTransaction(e,n,r){N("IndexedDbPersistence","Starting transaction:",e);const s=n==="readonly"?"readonly":"readwrite",i=(o=this.Xs)===15?PO:o===14?RI:o===13?AI:o===12?OO:o===11?CI:void B();var o;let a;return this.ri.runTransaction(e,s,i,c=>(a=new fd(c,this.Ss?this.Ss.next():Lt.at),n==="readwrite-primary"?this.fi(a).next(u=>!!u||this.di(a)).next(u=>{if(!u)throw Ke(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new C(_.FAILED_PRECONDITION,Ob);return r(a)}).next(u=>this.wi(a).next(()=>u)):this.Vi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Vi(e){return Io(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)&&!this.mi(n)&&!(this.Ys||this.allowTabSynchronization&&n.allowTabSynchronization))throw new C(_.FAILED_PRECONDITION,gh)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Io(e).put("owner",n)}static C(){return dn.C()}_i(e){const n=Io(e);return n.get("owner").next(r=>this.mi(r)?(N("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):v.resolve())}pi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ke(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),VC()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var n;try{const r=((n=this.oi)===null||n===void 0?void 0:n.getItem(this.Ti(e)))!==null;return N("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ke("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){Ke("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Io(t){return ct(t,"owner")}function yc(t){return ct(t,"clientMetadata")}function ip(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class op{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=s}static Ci(e,n){let r=se(),s=se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new op(e,n.fromCache,r,s)}}/**
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
 */class BI{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.ki(e,n).next(i=>i||this.Oi(e,n,s,r)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Kg(n))return v.resolve(null);let r=Ut(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=au(n,null,"F"),r=Ut(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,au(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,r,s){return Kg(n)||s.isEqual(Q.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,r,s)?this.Mi(e,n):(rd()<=pe.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ld(n)),this.Bi(e,o,n,Nb(s,-1)))})}Fi(e,n){let r=new Ee(Xb(e));return n.forEach((s,i)=>{zf(e,i)&&(r=r.add(i))}),r}$i(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mi(e,n){return rd()<=pe.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",ld(n)),this.Ni.getDocumentsMatchingQuery(e,n,Jt.min())}Bi(e,n,r,s){return this.Ni.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class aP{constructor(e,n,r,s){this.persistence=e,this.Li=n,this.yt=s,this.qi=new Be(re),this.Ui=new Qr(i=>Ns(i),Ka),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VI(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function qI(t,e,n,r){return new aP(t,e,n,r)}async function jI(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=se();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function cP(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=v.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(g=>{const y=c.docVersions.get(f);W(y!==null),g.version.compareTo(y)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=se();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function KI(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function uP(t,e){const n=U(t),r=e.snapshotVersion;let s=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.qi;const a=[];e.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Xe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),s=s.insert(h,f),function(g,y,b){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,f,l)&&a.push(n.Cs.updateTargetData(i,f))});let c=Ft(),u=se();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(HI(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!r.isEqual(Q.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return v.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=s,i))}function HI(t,e,n){let r=se(),s=se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Ft();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(Q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):N("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:s}})}function lP(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ui(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Cs.getTargetData(r,e).next(i=>i?(s=i,v.resolve(s)):n.Cs.allocateTargetId(r).next(o=>(s=new Ar(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.qi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function Vi(t,e,n){const r=U(t),s=r.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!zr(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(s.target)}function hu(t,e,n){const r=U(t);let s=Q.min(),i=se();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=U(a),h=l.Ui.get(u);return h!==void 0?v.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(r,o,Ut(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?s:Q.min(),n?i:se())).next(a=>(zI(r,Jb(e),a),{documents:a,Hi:i})))}function GI(t,e){const n=U(t),r=U(n.Cs),s=n.qi.get(e);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",i=>r.ne(i,e).next(o=>o?o.target:null))}function WI(t,e){const n=U(t),r=n.Ki.get(e)||Q.min();return n.persistence.runTransaction("Get new document changes","readonly",s=>n.Gi.getAllFromCollectionGroup(s,e,Nb(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(zI(n,e,s),s))}function zI(t,e,n){let r=t.Ki.get(e)||Q.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ki.set(e,r)}async function hP(t,e,n,r){const s=U(t);let i=se(),o=Ft();for(const u of n){const l=e.Ji(u.metadata.name);u.document&&(i=i.add(l));const h=e.Yi(u);h.setReadTime(e.Xi(u.metadata.readTime)),o=o.insert(l,h)}const a=s.Gi.newChangeBuffer({trackRemovals:!0}),c=await Ui(s,function(u){return Ut(ro(he.fromString(`__bundle__/docs/${u}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",u=>HI(u,a,o).next(l=>(a.apply(u),l)).next(l=>s.Cs.removeMatchingKeysForTargetId(u,c.targetId).next(()=>s.Cs.addMatchingKeys(u,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(u,l.Wi,l.zi)).next(()=>l.Wi)))}async function dP(t,e,n=se()){const r=await Ui(t,Ut(ep(e.bundledQuery))),s=U(t);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=Ge(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.Ns.saveNamedQuery(i,e);const a=r.withResumeToken(Xe.EMPTY_BYTE_STRING,o);return s.qi=s.qi.insert(a.targetId,a),s.Cs.updateTargetData(i,a).next(()=>s.Cs.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>s.Cs.addMatchingKeys(i,n,r.targetId)).next(()=>s.Ns.saveNamedQuery(i,e))})}function vy(t,e){return`firestore_clients_${t}_${e}`}function _y(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function yh(t,e){return`firestore_targets_${t}_${e}`}class du{constructor(e,n,r,s){this.user=e,this.batchId=n,this.state=r,this.error=s}static Zi(e,n,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new C(s.error.code,s.error.message))),o?new du(e,n,s.state,i):(Ke("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ho{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Zi(e,n){const r=JSON.parse(n);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new C(r.error.code,r.error.message))),i?new Ho(e,r.state,s):(Ke("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class fu{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Zi(e,n){const r=JSON.parse(n);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=bl();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=Lb(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new fu(e,i):(Ke("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class ap{constructor(e,n){this.clientId=e,this.onlineState=n}static Zi(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new ap(n.clientId,n.onlineState):(Ke("SharedClientState",`Failed to parse online state: ${e}`),null)}}class yd{constructor(){this.activeTargetIds=bl()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vh{constructor(e,n,r,s,i){this.window=e,this.Hs=n,this.persistenceKey=r,this.sr=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new Be(re),this.started=!1,this.cr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ar=vy(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new yd),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const r of e){if(r===this.sr)continue;const s=this.getItem(vy(this.persistenceKey,r));if(s){const i=fu.Zi(r,s);i&&(this.ur=this.ur.insert(i.clientId,i))}}this.gr();const n=this.storage.getItem(this.wr);if(n){const r=this.yr(n);r&&this.pr(r)}for(const r of this.cr)this.rr(r);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let n=!1;return this.ur.forEach((r,s)=>{s.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,n,r){this.Tr(e,n,r),this.Er(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(yh(this.persistenceKey,e));if(r){const s=Ho.Zi(e,r);s&&(n=s.state)}}return this.Ar.er(e),this.gr(),n}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(yh(this.persistenceKey,e))}updateQueryState(e,n,r){this.Rr(e,n,r)}handleUserChange(e,n,r){n.forEach(s=>{this.Er(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return N("SharedClientState","READ",e,n),n}setItem(e,n){N("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){N("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const n=e;if(n.storageArea===this.storage){if(N("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ar)return void Ke("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.lr.test(n.key)){if(n.newValue==null){const r=this.vr(n.key);return this.Vr(r,null)}{const r=this.Sr(n.key,n.newValue);if(r)return this.Vr(r.clientId,r)}}else if(this.dr.test(n.key)){if(n.newValue!==null){const r=this.Dr(n.key,n.newValue);if(r)return this.Cr(r)}}else if(this._r.test(n.key)){if(n.newValue!==null){const r=this.Nr(n.key,n.newValue);if(r)return this.kr(r)}}else if(n.key===this.wr){if(n.newValue!==null){const r=this.yr(n.newValue);if(r)return this.pr(r)}}else if(n.key===this.hr){const r=function(s){let i=Lt.at;if(s!=null)try{const o=JSON.parse(s);W(typeof o=="number"),i=o}catch(o){Ke("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(n.newValue);r!==Lt.at&&this.sequenceNumberHandler(r)}else if(n.key===this.mr){const r=this.Or(n.newValue);await Promise.all(r.map(s=>this.syncEngine.Mr(s)))}}}else this.cr.push(n)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,n,r){const s=new du(this.currentUser,e,n,r),i=_y(this.persistenceKey,this.currentUser,e);this.setItem(i,s.tr())}Er(e){const n=_y(this.persistenceKey,this.currentUser,e);this.removeItem(n)}br(e){const n={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(n))}Rr(e,n,r){const s=yh(this.persistenceKey,e),i=new Ho(e,n,r);this.setItem(s,i.tr())}Pr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.mr,n)}vr(e){const n=this.lr.exec(e);return n?n[1]:null}Sr(e,n){const r=this.vr(e);return fu.Zi(r,n)}Dr(e,n){const r=this.dr.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return du.Zi(new tt(i),s,n)}Nr(e,n){const r=this._r.exec(e),s=Number(r[1]);return Ho.Zi(s,n)}yr(e){return ap.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);N("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,n){const r=n?this.ur.insert(e,n):this.ur.remove(e),s=this.Ir(this.ur),i=this.Ir(r),o=[],a=[];return i.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.Br(o,a).then(()=>{this.ur=r})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let n=bl();return e.forEach((r,s)=>{n=n.unionWith(s.activeTargetIds)}),n}}class QI{constructor(){this.Lr=new yd,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new yd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class fP{Ur(e){}shutdown(){}}/**
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
 */class wy{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const pP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class mP{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class gP extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,s,i){const o=this.ho(e,n);N("RestConnection","Sending: ",o,r);const a={};return this.lo(a,s,i),this.fo(e,o,a,r).then(c=>(N("RestConnection","Received: ",c),c),c=>{throw Ni("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,n,r,s,i,o){return this.ao(e,n,r,s,i)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+no,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ho(e,n){const r=pP[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,s){return new Promise((i,o)=>{const a=new mD;a.setWithCredentials(!0),a.listenOnce(dD.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ph.NO_ERROR:const u=a.getResponseJson();N("Connection","XHR received:",JSON.stringify(u)),i(u);break;case ph.TIMEOUT:N("Connection",'RPC "'+e+'" timed out'),o(new C(_.DEADLINE_EXCEEDED,"Request time out"));break;case ph.HTTP_ERROR:const l=a.getStatus();if(N("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const f=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(y)>=0?y:_.UNKNOWN}(d.status);o(new C(f,d.message))}else o(new C(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new C(_.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{N("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}wo(e,n,r){const s=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=lD(),o=hD(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new pD({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const c=s.join("");N("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new mP({Hr:g=>{h?N("Connection","Not sending because WebChannel is closed:",g):(l||(N("Connection","Opening WebChannel transport."),u.open(),l=!0),N("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),f=(g,y,b)=>{g.listen(y,S=>{try{b(S)}catch(A){setTimeout(()=>{throw A},0)}})};return f(u,dc.EventType.OPEN,()=>{h||N("Connection","WebChannel transport opened.")}),f(u,dc.EventType.CLOSE,()=>{h||(h=!0,N("Connection","WebChannel transport closed"),d.io())}),f(u,dc.EventType.ERROR,g=>{h||(h=!0,Ni("Connection","WebChannel transport errored:",g),d.io(new C(_.UNAVAILABLE,"The operation could not be completed")))}),f(u,dc.EventType.MESSAGE,g=>{var y;if(!h){const b=g.data[0];W(!!b);const S=b,A=S.error||((y=S[0])===null||y===void 0?void 0:y.error);if(A){N("Connection","WebChannel received error:",A);const E=A.status;let x=function(z){const ae=Qe[z];if(ae!==void 0)return uI(ae)}(E),j=A.message;x===void 0&&(x=_.INTERNAL,j="Unknown error status: "+E+" with message "+A.message),h=!0,d.io(new C(x,j)),u.close()}else N("Connection","WebChannel received:",b),d.ro(b)}}),f(o,fD.STAT_EVENT,g=>{g.stat===xg.PROXY?N("Connection","Detected buffering proxy"):g.stat===xg.NOPROXY&&N("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
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
 */function YI(){return typeof window<"u"?window:null}function Oc(){return typeof document<"u"?document:null}/**
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
 */function Qa(t){return new aO(t,!0)}class cp{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class JI{constructor(e,n,r,s,i,o,a,c){this.Hs=e,this.vo=r,this.Vo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new cp(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Ke(n.toString()),Ke("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.So===n&&this.Go(r,s)},r=>{e(()=>{const s=new C(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(s)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(s=>{r(()=>this.Qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yP extends JI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=lO(this.yt,e),r=function(s){if(!("targetChange"in s))return Q.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?Q.min():i.readTime?Ge(i.readTime):Q.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Ia(this.yt),n.addTarget=function(s,i){let o;const a=i.target;return o=iu(a)?{documents:wI(s,a)}:{query:bI(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=mI(s,i.resumeToken):i.snapshotVersion.compareTo(Q.min())>0&&(o.readTime=Fi(s,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=dO(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Ia(this.yt),n.removeTarget=e,this.Bo(n)}}class vP extends JI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(W(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=hO(e.writeResults,e.commitTime),r=Ge(e.commitTime);return this.listener.Zo(r,n)}return W(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Ia(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ea(this.yt,r))};this.Bo(n)}}/**
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
 */class _P extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=s,this.nu=!1}su(){if(this.nu)throw new C(_.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.ao(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(_.UNKNOWN,s.toString())})}_o(e,n,r,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(_.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class wP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Ke(n),this.ou=!1):N("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class bP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{Yr(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=U(a);c._u.add(4),await oo(c),c.gu.set("Unknown"),c._u.delete(4),await Ya(c)}(this))})}),this.gu=new wP(r,s)}}async function Ya(t){if(Yr(t))for(const e of t.wu)await e(!0)}async function oo(t){for(const e of t.wu)await e(!1)}function Sl(t,e){const n=U(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),hp(n)?lp(n):co(n).ko()&&up(n,e))}function Ta(t,e){const n=U(t),r=co(n);n.du.delete(e),r.ko()&&XI(n,e),n.du.size===0&&(r.ko()?r.Fo():Yr(n)&&n.gu.set("Unknown"))}function up(t,e){t.yu.Ot(e.targetId),co(t).zo(e)}function XI(t,e){t.yu.Ot(e),co(t).Ho(e)}function lp(t){t.yu=new rO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),co(t).start(),t.gu.uu()}function hp(t){return Yr(t)&&!co(t).No()&&t.du.size>0}function Yr(t){return U(t)._u.size===0}function ZI(t){t.yu=void 0}async function IP(t){t.du.forEach((e,n)=>{up(t,e)})}async function EP(t,e){ZI(t),hp(t)?(t.gu.hu(e),lp(t)):t.gu.set("Unknown")}async function TP(t,e,n){if(t.gu.set("Online"),e instanceof pI&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pu(t,r)}else if(e instanceof Nc?t.yu.Kt(e):e instanceof fI?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(Q.min()))try{const r=await KI(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.du.get(c);u&&s.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.du.get(a);if(!c)return;s.du.set(a,c.withResumeToken(Xe.EMPTY_BYTE_STRING,c.snapshotVersion)),XI(s,a);const u=new Ar(c.target,a,1,c.sequenceNumber);up(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await pu(t,r)}}async function pu(t,e,n){if(!zr(e))throw e;t._u.add(1),await oo(t),t.gu.set("Offline"),n||(n=()=>KI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Ya(t)})}function eE(t,e){return e().catch(n=>pu(t,n,e))}async function ao(t){const e=U(t),n=Vr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;SP(e);)try{const s=await lP(e.localStore,r);if(s===null){e.fu.length===0&&n.Fo();break}r=s.batchId,kP(e,s)}catch(s){await pu(e,s)}tE(e)&&nE(e)}function SP(t){return Yr(t)&&t.fu.length<10}function kP(t,e){t.fu.push(e);const n=Vr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function tE(t){return Yr(t)&&!Vr(t).No()&&t.fu.length>0}function nE(t){Vr(t).start()}async function CP(t){Vr(t).eu()}async function AP(t){const e=Vr(t);for(const n of t.fu)e.Xo(n.mutations)}async function RP(t,e,n){const r=t.fu.shift(),s=Xf.from(r,e,n);await eE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ao(t)}async function xP(t,e){e&&Vr(t).Yo&&await async function(n,r){if(s=r.code,cI(s)&&s!==_.ABORTED){const i=n.fu.shift();Vr(n).Mo(),await eE(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await ao(n)}var s}(t,e),tE(t)&&nE(t)}async function by(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=Yr(n);n._u.add(3),await oo(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Ya(n)}async function vd(t,e){const n=U(t);e?(n._u.delete(2),await Ya(n)):e||(n._u.add(2),await oo(n),n.gu.set("Unknown"))}function co(t){return t.pu||(t.pu=function(e,n,r){const s=U(e);return s.su(),new yP(n,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,r)}(t.datastore,t.asyncQueue,{Yr:IP.bind(null,t),Zr:EP.bind(null,t),Wo:TP.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),hp(t)?lp(t):t.gu.set("Unknown")):(await t.pu.stop(),ZI(t))})),t.pu}function Vr(t){return t.Iu||(t.Iu=function(e,n,r){const s=U(e);return s.su(),new vP(n,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,r)}(t.datastore,t.asyncQueue,{Yr:CP.bind(null,t),Zr:xP.bind(null,t),tu:AP.bind(null,t),Zo:RP.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await ao(t)):(await t.Iu.stop(),t.fu.length>0&&(N("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class dp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new dp(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uo(t,e){if(Ke("AsyncQueue",`${e}: ${t}`),zr(t))return new C(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class bi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=No(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new bi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Iy{constructor(){this.Tu=new Be(L.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):B():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class $i{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new $i(e,n,bi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class NP{constructor(){this.Au=void 0,this.listeners=[]}}class DP{constructor(){this.queries=new Qr(e=>Yb(e),Ha),this.onlineState="Unknown",this.Ru=new Set}}async function fp(t,e){const n=U(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new NP),s)try{i.Au=await n.onListen(r)}catch(o){const a=uo(o,`Initialization of query '${ld(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&mp(n)}async function pp(t,e){const n=U(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function OP(t,e){const n=U(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(s)&&(r=!0);o.Au=s}}r&&mp(n)}function PP(t,e,n){const r=U(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function mp(t){t.Ru.forEach(e=>{e.next()})}class gp{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new $i(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=$i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class MP{constructor(e,n){this.ku=e,this.byteLength=n}Ou(){return"metadata"in this.ku}}/**
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
 */class Ey{constructor(e){this.yt=e}Ji(e){return Un(this.yt,e)}Yi(e){return e.metadata.exists?_I(this.yt,e.document,!1):Ne.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return Ge(e)}}class LP{constructor(e,n,r){this.Mu=e,this.localStore=n,this.yt=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=rE(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++n;const r=he.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}$u(e){const n=new Map,r=new Ey(this.yt);for(const s of e)if(s.metadata.queries){const i=r.Ji(s.metadata.name);for(const o of s.metadata.queries){const a=(n.get(o)||se()).add(i);n.set(o,a)}}return n}async complete(){const e=await hP(this.localStore,new Ey(this.yt),this.documents,this.Mu.id),n=this.$u(this.documents);for(const r of this.queries)await dP(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function rE(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class sE{constructor(e){this.key=e}}class iE{constructor(e){this.key=e}}class oE{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=se(),this.mutatedKeys=se(),this.Gu=Xb(e),this.Qu=new bi(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new Iy,s=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),f=zf(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let b=!1;d&&f?d.data.isEqual(f.data)?g!==y&&(r.track({type:3,doc:f}),b=!0):this.Hu(d,f)||(r.track({type:2,doc:f}),b=!0,(c&&this.Gu(f,c)>0||u&&this.Gu(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),b=!0):d&&!f&&(r.track({type:1,doc:d}),b=!0,(c||u)&&(a=!0)),b&&(f?(o=o.add(f),i=y?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return f(h)-f(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new $i(this.query,e.Qu,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Iy,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=se(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new iE(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new sE(r))}),n}tc(e){this.qu=e.Hi,this.Ku=se();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return $i.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class FP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class UP{constructor(e){this.key=e,this.nc=!1}}class VP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Qr(a=>Yb(a),Ha),this.rc=new Map,this.oc=new Set,this.uc=new Be(L.comparator),this.cc=new Map,this.ac=new rp,this.hc={},this.lc=new Map,this.fc=Ls.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function $P(t,e){const n=bp(t);let r,s;const i=n.ic.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{const o=await Ui(n.localStore,Ut(e));n.isPrimaryClient&&Sl(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await yp(n,e,r,a==="current",o.resumeToken)}return s}async function yp(t,e,n,r,s){t._c=(h,d,f)=>async function(g,y,b,S){let A=y.view.Wu(b);A.$i&&(A=await hu(g.localStore,y.query,!1).then(({documents:j})=>y.view.Wu(j,A)));const E=S&&S.targetChanges.get(y.targetId),x=y.view.applyChanges(A,g.isPrimaryClient,E);return _d(g,y.targetId,x.Xu),x.snapshot}(t,h,d,f);const i=await hu(t.localStore,e,!0),o=new oE(e,i.Hi),a=o.Wu(i.documents),c=za.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);_d(t,n,u.Xu);const l=new FP(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function BP(t,e){const n=U(t),r=n.ic.get(e),s=n.rc.get(r.targetId);if(s.length>1)return n.rc.set(r.targetId,s.filter(i=>!Ha(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Vi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ta(n.remoteStore,r.targetId),Bi(n,r.targetId)}).catch(Wr)):(Bi(n,r.targetId),await Vi(n.localStore,r.targetId,!0))}async function qP(t,e,n){const r=Ip(t);try{const s=await function(i,o){const a=U(i),c=Le.now(),u=o.reduce((d,f)=>d.add(f.key),se());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Ft(),g=se();return a.Gi.getEntries(d,u).next(y=>{f=y,f.forEach((b,S)=>{S.isValidDocument()||(g=g.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(y=>{l=y;const b=[];for(const S of o){const A=JD(S,l.get(S.key).overlayedDocument);A!=null&&b.push(new ur(S.key,A,zb(A.value.mapValue),Pe.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,b,o)}).next(y=>{h=y;const b=y.applyToLocalDocumentSet(l,g);return a.documentOverlayCache.saveOverlays(d,y.batchId,b)})}).then(()=>({batchId:h.batchId,changes:hI(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Be(re)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(r,s.batchId,n),await lr(r,s.changes),await ao(r.remoteStore)}catch(s){const i=uo(s,"Failed to persist write");n.reject(i)}}async function aE(t,e){const n=U(t);try{const r=await uP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.cc.get(i);o&&(W(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.nc=!0:s.modifiedDocuments.size>0?W(o.nc):s.removedDocuments.size>0&&(W(o.nc),o.nc=!1))}),await lr(n,r,e)}catch(r){await Wr(r)}}function Ty(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=U(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&mp(a)}(r.eventManager,e),s.length&&r.sc.Wo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jP(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.cc.get(e),i=s&&s.key;if(i){let o=new Be(L.comparator);o=o.insert(i,Ne.newNoDocument(i,Q.min()));const a=se().add(i),c=new Wa(Q.min(),new Map,new Ee(re),o,a);await aE(r,c),r.uc=r.uc.remove(i),r.cc.delete(e),wp(r)}else await Vi(r.localStore,e,!1).then(()=>Bi(r,e,n)).catch(Wr)}async function KP(t,e){const n=U(t),r=e.batch.batchId;try{const s=await cP(n.localStore,e);_p(n,r,null),vp(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await lr(n,s)}catch(s){await Wr(s)}}async function HP(t,e,n){const r=U(t);try{const s=await function(i,o){const a=U(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(W(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);_p(r,e,n),vp(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await lr(r,s)}catch(s){await Wr(s)}}async function GP(t,e){const n=U(t);Yr(n.remoteStore)||N("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(i){const o=U(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const s=n.lc.get(r)||[];s.push(e),n.lc.set(r,s)}catch(r){const s=uo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function vp(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function _p(t,e,n){const r=U(t);let s=r.hc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.hc[r.currentUser.toKey()]=s}}function Bi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||cE(t,r)})}function cE(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Ta(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),wp(t))}function _d(t,e,n){for(const r of n)r instanceof sE?(t.ac.addReference(r.key,e),WP(t,r)):r instanceof iE?(N("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||cE(t,r.key)):B()}function WP(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(N("SyncEngine","New document in limbo: "+n),t.oc.add(r),wp(t))}function wp(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new L(he.fromString(e)),r=t.fc.next();t.cc.set(r,new UP(n)),t.uc=t.uc.insert(n,r),Sl(t.remoteStore,new Ar(Ut(ro(n.path)),r,2,Lt.at))}}async function lr(t,e,n){const r=U(t),s=[],i=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,c)=>{o.push(r._c(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=op.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.sc.Wo(s),await async function(a,c){const u=U(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>v.forEach(c,h=>v.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>v.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!zr(l))throw l;N("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qi.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);u.qi=u.qi.insert(h,g)}}}(r.localStore,i))}async function zP(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await jI(n.localStore,e);n.currentUser=e,function(s,i){s.lc.forEach(o=>{o.forEach(a=>{a.reject(new C(_.CANCELLED,i))})}),s.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lr(n,r.ji)}}function QP(t,e){const n=U(t),r=n.cc.get(e);if(r&&r.nc)return se().add(r.key);{let s=se();const i=n.rc.get(e);if(!i)return s;for(const o of i){const a=n.ic.get(o);s=s.unionWith(a.view.ju)}return s}}async function YP(t,e){const n=U(t),r=await hu(n.localStore,e.query,!0),s=e.view.tc(r);return n.isPrimaryClient&&_d(n,e.targetId,s.Xu),s}async function JP(t,e){const n=U(t);return WI(n.localStore,e).then(r=>lr(n,r))}async function XP(t,e,n,r){const s=U(t),i=await function(o,a){const c=U(o),u=U(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Tn(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):v.resolve(null)))}(s.localStore,e);i!==null?(n==="pending"?await ao(s.remoteStore):n==="acknowledged"||n==="rejected"?(_p(s,e,r||null),vp(s,e),function(o,a){U(U(o).mutationQueue).An(a)}(s.localStore,e)):B(),await lr(s,i)):N("SyncEngine","Cannot apply mutation batch with id: "+e)}async function ZP(t,e){const n=U(t);if(bp(n),Ip(n),e===!0&&n.dc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),s=await Sy(n,r.toArray());n.dc=!0,await vd(n.remoteStore,!0);for(const i of s)Sl(n.remoteStore,i)}else if(e===!1&&n.dc!==!1){const r=[];let s=Promise.resolve();n.rc.forEach((i,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(Bi(n,o),Vi(n.localStore,o,!0))),Ta(n.remoteStore,o)}),await s,await Sy(n,r),function(i){const o=U(i);o.cc.forEach((a,c)=>{Ta(o.remoteStore,c)}),o.ac.fs(),o.cc=new Map,o.uc=new Be(L.comparator)}(n),n.dc=!1,await vd(n.remoteStore,!1)}}async function Sy(t,e,n){const r=U(t),s=[],i=[];for(const o of e){let a;const c=r.rc.get(o);if(c&&c.length!==0){a=await Ui(r.localStore,Ut(c[0]));for(const u of c){const l=r.ic.get(u),h=await YP(r,l);h.snapshot&&i.push(h.snapshot)}}else{const u=await GI(r.localStore,o);a=await Ui(r.localStore,u),await yp(r,uE(u),o,!1,a.resumeToken)}s.push(a)}return r.sc.Wo(i),s}function uE(t){return Qb(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function eM(t){const e=U(t);return U(U(e.localStore).persistence).vi()}async function tM(t,e,n,r){const s=U(t);if(s.dc)return void N("SyncEngine","Ignoring unexpected query state notification.");const i=s.rc.get(e);if(i&&i.length>0)switch(n){case"current":case"not-current":{const o=await WI(s.localStore,Jb(i[0])),a=Wa.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Xe.EMPTY_BYTE_STRING);await lr(s,o,a);break}case"rejected":await Vi(s.localStore,e,!0),Bi(s,e,r);break;default:B()}}async function nM(t,e,n){const r=bp(t);if(r.dc){for(const s of e){if(r.rc.has(s)){N("SyncEngine","Adding an already active target "+s);continue}const i=await GI(r.localStore,s),o=await Ui(r.localStore,i);await yp(r,uE(i),o.targetId,!1,o.resumeToken),Sl(r.remoteStore,o)}for(const s of n)r.rc.has(s)&&await Vi(r.localStore,s,!1).then(()=>{Ta(r.remoteStore,s),Bi(r,s)}).catch(Wr)}}function bp(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=aE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jP.bind(null,e),e.sc.Wo=OP.bind(null,e.eventManager),e.sc.wc=PP.bind(null,e.eventManager),e}function Ip(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HP.bind(null,e),e}function rM(t,e,n){const r=U(t);(async function(s,i,o){try{const a=await i.getMetadata();if(await function(h,d){const f=U(h),g=Ge(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",y=>f.Ns.getBundleMetadata(y,d.id)).then(y=>!!y&&y.createTime.compareTo(g)>=0)}(s.localStore,a))return await i.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(rE(a));const c=new LP(a,s.localStore,i.yt);let u=await i.mc();for(;u;){const h=await c.Fu(u);h&&o._updateProgress(h),u=await i.mc()}const l=await c.complete();return await lr(s,l.Lu,void 0),await function(h,d){const f=U(h);return f.persistence.runTransaction("Save bundle","readwrite",g=>f.Ns.saveBundleMetadata(g,d))}(s.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Bu)}catch(a){return Ni("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(s=>{r.sharedClientState.notifyBundleLoaded(s)})}class lE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Qa(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return qI(this.persistence,new BI,e.initialUser,this.yt)}yc(e){return new $I(Tl.Bs,this.yt)}gc(e){return new QI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hE extends lE{constructor(e,n,r){super(),this.Ac=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await Ip(this.Ac.syncEngine),await ao(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return qI(this.persistence,new BI,e.initialUser,this.yt)}Tc(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new WO(r,e.asyncQueue,n)}Ec(e,n){const r=new ND(n,this.persistence);return new xD(e.asyncQueue,r)}yc(e){const n=ip(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ot.withCacheSize(this.cacheSizeBytes):Ot.DEFAULT;return new sp(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,YI(),Oc(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(e){return new QI}}class sM extends hE{constructor(e,n){super(e,n,!1),this.Ac=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ac.syncEngine;this.sharedClientState instanceof vh&&(this.sharedClientState.syncEngine={Fr:XP.bind(null,n),$r:tM.bind(null,n),Br:nM.bind(null,n),vi:eM.bind(null,n),Mr:JP.bind(null,n)},await this.sharedClientState.start()),await this.persistence.li(async r=>{await ZP(this.Ac.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}gc(e){const n=YI();if(!vh.C(n))throw new C(_.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=ip(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new vh(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Ep{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ty(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zP.bind(null,this.syncEngine),await vd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new DP}createDatastore(e){const n=Qa(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new gP(s));var s;return function(i,o,a,c){return new _P(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Ty(this.syncEngine,a,0),o=wy.C()?new wy:new fP,new bP(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,u){const l=new VP(r,s,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=U(e);N("RemoteStore","RemoteStore shutting down."),n._u.add(5),await oo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Tp(t,e,n){if(!n)throw new C(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dE(t,e,n,r){if(e===!0&&r===!0)throw new C(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ky(t){if(!L.isDocumentKey(t))throw new C(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Cy(t){if(L.isDocumentKey(t))throw new C(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function kl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function me(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new C(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kl(t);throw new C(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function fE(t,e){if(e<=0)throw new C(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */const Ay=new Map;class Ry{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new C(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,dE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ja{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ry({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ry(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new vD;switch(n.type){case"gapi":const r=n.client;return new ID(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ay.get(e);n&&(N("ComponentProvider","Removing Datastore"),Ay.delete(e),n.terminate())}(this),Promise.resolve()}}function pE(t,e,n,r={}){var s;const i=(t=me(t,Ja))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ni("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=tt.MOCK_USER;else{o=w_(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new C(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new tt(c)}t._authCredentials=new _D(new Cb(o,a))}}/**
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
 */class De{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new De(this.firestore,e,this._key)}}class pt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pt(this.firestore,e,this._query)}}class Vn extends pt{constructor(e,n,r){super(e,n,ro(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new De(this.firestore,null,new L(e))}withConverter(e){return new Vn(this.firestore,e,this._path)}}function jn(t,e,...n){if(t=K(t),Tp("collection","path",e),t instanceof Ja){const r=he.fromString(e,...n);return Cy(r),new Vn(t,null,r)}{if(!(t instanceof De||t instanceof Vn))throw new C(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return Cy(r),new Vn(t.firestore,null,r)}}function iM(t,e){if(t=me(t,Ja),Tp("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new C(_.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new pt(t,null,function(n){return new cr(he.emptyPath(),n)}(e))}function gn(t,e,...n){if(t=K(t),arguments.length===1&&(e=Ab.R()),Tp("doc","path",e),t instanceof Ja){const r=he.fromString(e,...n);return ky(r),new De(t,null,new L(r))}{if(!(t instanceof De||t instanceof Vn))throw new C(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return ky(r),new De(t.firestore,t instanceof Vn?t.converter:null,new L(r))}}function mE(t,e){return t=K(t),e=K(e),(t instanceof De||t instanceof Vn)&&(e instanceof De||e instanceof Vn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function gE(t,e){return t=K(t),e=K(e),t instanceof pt&&e instanceof pt&&t.firestore===e.firestore&&Ha(t._query,e._query)&&t.converter===e.converter}/**
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
 */function xy(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
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
 */class Cl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Ke("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class oM{constructor(e,n){this.Pc=e,this.yt=n,this.metadata=new rt,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(r=>{r&&r.Ou()?this.metadata.resolve(r.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ku)}`))},r=>this.metadata.reject(r))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const n=this.vc.decode(e),r=Number(n);isNaN(r)&&this.Dc(`length string (${n}) is not valid number`);const s=await this.Cc(r);return new MP(JSON.parse(s),e.length+r)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const n=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class aM{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new C(_.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,s){const i=U(r),o=Ia(i.yt)+"/documents",a={documents:s.map(h=>ba(i.yt,h))},c=await i._o("BatchGetDocuments",o,a,s.length),u=new Map;c.forEach(h=>{const d=uO(i.yt,h);u.set(d.key.toString(),d)});const l=[];return s.forEach(h=>{const d=u.get(h.toString());W(!!d),l.push(d)}),l}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new io(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=L.fromPath(r);this.mutations.push(new Qf(s,this.precondition(s)))}),await async function(n,r){const s=U(n),i=Ia(s.yt)+"/documents",o={writes:r.map(a=>Ea(s.yt,a))};await s.ao("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw B();n=Q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new C(_.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(Q.min())?Pe.exists(!1):Pe.updateTime(n):Pe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Q.min()))throw new C(_.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Pe.updateTime(n)}return Pe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class cM{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.kc=r.maxAttempts,this.xo=new cp(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new aM(this.datastore),n=this.Mc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Fc(s)}))}).catch(r=>{this.Fc(r)})})}Mc(e){try{const n=this.updateFunction(e);return!ja(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!cI(n)}return!1}}/**
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
 */class uM{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=tt.UNAUTHENTICATED,this.clientId=Ab.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{N("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(N("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=uo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yE(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await jI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function vE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Sp(t);N("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>by(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>by(e.remoteStore,i)),t.onlineComponents=e}async function Sp(t){return t.offlineComponents||(N("FirestoreClient","Using default OfflineComponentProvider"),await yE(t,new lE)),t.offlineComponents}async function Al(t){return t.onlineComponents||(N("FirestoreClient","Using default OnlineComponentProvider"),await vE(t,new Ep)),t.onlineComponents}function _E(t){return Sp(t).then(e=>e.persistence)}function kp(t){return Sp(t).then(e=>e.localStore)}function wE(t){return Al(t).then(e=>e.remoteStore)}function Cp(t){return Al(t).then(e=>e.syncEngine)}function lM(t){return Al(t).then(e=>e.datastore)}async function qi(t){const e=await Al(t),n=e.eventManager;return n.onListen=$P.bind(null,e.syncEngine),n.onUnlisten=BP.bind(null,e.syncEngine),n}function hM(t){return t.asyncQueue.enqueue(async()=>{const e=await _E(t),n=await wE(t);return e.setNetworkEnabled(!0),function(r){const s=U(r);return s._u.delete(0),Ya(s)}(n)})}function dM(t){return t.asyncQueue.enqueue(async()=>{const e=await _E(t),n=await wE(t);return e.setNetworkEnabled(!1),async function(r){const s=U(r);s._u.add(0),await oo(s),s.gu.set("Offline")}(n)})}function fM(t,e){const n=new rt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await function(a,c){const u=U(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,s);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new C(_.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=uo(o,`Failed to get document '${s} from cache`);i.reject(a)}}(await kp(t),e,n)),n.promise}function bE(t,e,n={}){const r=new rt;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new Cl({next:h=>{i.enqueueAndForget(()=>pp(s,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new C(_.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new C(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new gp(ro(o.path),u,{includeMetadataChanges:!0,Nu:!0});return fp(s,l)}(await qi(t),t.asyncQueue,e,n,r)),r.promise}function pM(t,e){const n=new rt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await hu(r,s,!0),a=new oE(s,o.Hi),c=a.Wu(o.documents),u=a.applyChanges(c,!1);i.resolve(u.snapshot)}catch(o){const a=uo(o,`Failed to execute query '${s} against cache`);i.reject(a)}}(await kp(t),e,n)),n.promise}function IE(t,e,n={}){const r=new rt;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new Cl({next:h=>{i.enqueueAndForget(()=>pp(s,l)),h.fromCache&&a.source==="server"?c.reject(new C(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new gp(o,u,{includeMetadataChanges:!0,Nu:!0});return fp(s,l)}(await qi(t),t.asyncQueue,e,n,r)),r.promise}function mM(t,e){const n=new Cl(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,s){U(r).Ru.add(s),s.next()}(await qi(t),n)),()=>{n.bc(),t.asyncQueue.enqueueAndForget(async()=>function(r,s){U(r).Ru.delete(s)}(await qi(t),n))}}function gM(t,e,n,r){const s=function(i,o){let a;return a=typeof i=="string"?new TextEncoder().encode(i):i,function(c,u){return new oM(c,u)}(function(c,u){if(c instanceof Uint8Array)return xy(c,u);if(c instanceof ArrayBuffer)return xy(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Qa(e));t.asyncQueue.enqueueAndForget(async()=>{rM(await Cp(t),s,r)})}function yM(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const s=U(n);return s.persistence.runTransaction("Get named query","readonly",i=>s.Ns.getNamedQuery(i,r))}(await kp(t),e))}class vM{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new cp(this,"async_queue_retry"),this.Wc=()=>{const n=Oc();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Oc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new rt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!zr(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Ke("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const s=dp.createAndSchedule(this,e,n,r,i=>this.Yc(i));return this.Uc.push(s),s}zc(){this.Kc&&B()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function wd(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class _M{constructor(){this._progressObserver={},this._taskCompletionResolver=new rt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const wM=-1;class qe extends Ja{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new vM,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||EE(this),this._firestoreClient.terminate()}}function bM(t,e){const n=typeof t=="object"?t:ju(),r=typeof t=="string"?t:e||"(default)",s=Qi(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=v_("firestore");i&&pE(s,...i)}return s}function ut(t){return t._firestoreClient||EE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function EE(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new DD(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new uM(t._authCredentials,t._appCheckCredentials,t._queue,r)}function IM(t,e){SE(t=me(t,qe));const n=ut(t),r=t._freezeSettings(),s=new Ep;return TE(n,s,new hE(s,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function EM(t){SE(t=me(t,qe));const e=ut(t),n=t._freezeSettings(),r=new Ep;return TE(e,r,new sM(r,n.cacheSizeBytes))}function TE(t,e,n){const r=new rt;return t.asyncQueue.enqueue(async()=>{try{await yE(t,n),await vE(t,e),r.resolve()}catch(s){const i=s;if(!function(o){return o.name==="FirebaseError"?o.code===_.FAILED_PRECONDITION||o.code===_.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(i))throw i;Ni("Error enabling offline persistence. Falling back to persistence disabled: "+i),r.reject(i)}}).then(()=>r.promise)}function TM(t){if(t._initialized&&!t._terminated)throw new C(_.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new rt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!dn.C())return Promise.resolve();const r=n+"main";await dn.delete(r)}(ip(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function SM(t){return function(e){const n=new rt;return e.asyncQueue.enqueueAndForget(async()=>GP(await Cp(e),n)),n.promise}(ut(t=me(t,qe)))}function kM(t){return hM(ut(t=me(t,qe)))}function CM(t){return dM(ut(t=me(t,qe)))}function AM(t,e){const n=ut(t=me(t,qe)),r=new _M;return gM(n,t._databaseId,e,r),r}function RM(t,e){return yM(ut(t=me(t,qe)),e).then(n=>n?new pt(t,null,n.query):null)}function SE(t){if(t._initialized||t._terminated)throw new C(_.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class Kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kn(Xe.fromBase64String(e))}catch(n){throw new C(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kn(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class $r{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new C(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ws{constructor(e){this._methodName=e}}/**
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
 */class Rl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new C(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new C(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
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
 */const xM=/^__.*__$/;class NM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new so(e,this.data,n,this.fieldTransforms)}}class kE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ur(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function CE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class xl{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=s,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new xl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.ua(e),s}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.na(),s}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return mu(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(CE(this.sa)&&xM.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class DM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||Qa(e)}da(e,n,r,s=!1){return new xl({sa:e,methodName:n,fa:r,path:He.emptyPath(),oa:!1,la:s},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function zs(t){const e=t._freezeSettings(),n=Qa(t._databaseId);return new DM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Nl(t,e,n,r,s,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,s);Np("Data must be an object, but it was:",o,r);const a=xE(r,o);let c,u;if(i.merge)c=new zt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=bd(e,h,n);if(!o.contains(d))throw new C(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);DE(l,d)||l.push(d)}c=new zt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new NM(new ht(a),c,u)}class Xa extends Ws{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xa}}function AE(t,e,n){return new xl({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class Ap extends Ws{_toFieldTransform(e){return new Ga(e.path,new Mi)}isEqual(e){return e instanceof Ap}}class OM extends Ws{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=AE(this,e,!0),r=this._a.map(i=>Qs(i,n)),s=new Ds(r);return new Ga(e.path,s)}isEqual(e){return this===e}}class PM extends Ws{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=AE(this,e,!0),r=this._a.map(i=>Qs(i,n)),s=new Os(r);return new Ga(e.path,s)}isEqual(e){return this===e}}class MM extends Ws{constructor(e,n){super(e),this.wa=n}_toFieldTransform(e){const n=new Li(e.yt,tI(e.yt,this.wa));return new Ga(e.path,n)}isEqual(e){return this===e}}function Rp(t,e,n,r){const s=t.da(1,e,n);Np("Data must be an object, but it was:",s,r);const i=[],o=ht.empty();Gs(r,(c,u)=>{const l=Dp(e,c,n);u=K(u);const h=s.ca(l);if(u instanceof Xa)i.push(l);else{const d=Qs(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new zt(i);return new kE(o,a,s.fieldTransforms)}function xp(t,e,n,r,s,i){const o=t.da(1,e,n),a=[bd(e,r,n)],c=[s];if(i.length%2!=0)throw new C(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(bd(e,i[d])),c.push(i[d+1]);const u=[],l=ht.empty();for(let d=a.length-1;d>=0;--d)if(!DE(u,a[d])){const f=a[d];let g=c[d];g=K(g);const y=o.ca(f);if(g instanceof Xa)u.push(f);else{const b=Qs(g,y);b!=null&&(u.push(f),l.set(f,b))}}const h=new zt(u);return new kE(l,h,o.fieldTransforms)}function RE(t,e,n,r=!1){return Qs(n,t.da(r?4:3,e))}function Qs(t,e){if(NE(t=K(t)))return Np("Unsupported field value:",e,t),xE(t,e);if(t instanceof Ws)return function(n,r){if(!CE(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Qs(o,r.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=K(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return tI(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Le.fromDate(n);return{timestampValue:Fi(r.yt,s)}}if(n instanceof Le){const s=new Le(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Fi(r.yt,s)}}if(n instanceof Rl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Kn)return{bytesValue:mI(r.yt,n._byteString)};if(n instanceof De){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Yf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${kl(n)}`)}(t,e)}function xE(t,e){const n={};return Mb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gs(t,(r,s)=>{const i=Qs(s,e.ra(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function NE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof Rl||t instanceof Kn||t instanceof De||t instanceof Ws)}function Np(t,e,n){if(!NE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=kl(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function bd(t,e,n){if((e=K(e))instanceof $r)return e._internalPath;if(typeof e=="string")return Dp(t,e);throw mu("Field path arguments must be of type string or ",t,!1,void 0,n)}const LM=new RegExp("[~\\*/\\[\\]]");function Dp(t,e,n){if(e.search(LM)>=0)throw mu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $r(...e.split("."))._internalPath}catch{throw mu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function mu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new C(_.INVALID_ARGUMENT,a+t+c)}function DE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Sa{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new De(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Dl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FM extends Sa{data(){return super.data()}}function Dl(t,e){return typeof e=="string"?Dp(t,e):e instanceof $r?e._internalPath:e._delegate._internalPath}/**
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
 */function OE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new C(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Op{}class Za extends Op{}function Pt(t,e,...n){let r=[];e instanceof Op&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof Pp).length,o=s.filter(a=>a instanceof Ol).length;if(i>1||i>0&&o>0)throw new C(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ol extends Za{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ol(e,n,r)}_apply(e){const n=this._parse(e);return FE(e._query,n),new pt(e.firestore,e.converter,ud(e._query,n))}_parse(e){const n=zs(e.firestore);return function(s,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new C(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Dy(l,u);const d=[];for(const f of l)d.push(Ny(a,s,f));h={arrayValue:{values:d}}}else h=Ny(a,s,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Dy(l,u),h=RE(o,i,l,u==="in"||u==="not-in");return ue.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Fs(t,e,n){const r=e,s=Dl("where",t);return Ol._create(s,r,n)}class Pp extends Op{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Pp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:_e.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)FE(i,a),i=ud(i,a)}(e._query,n),new pt(e.firestore,e.converter,ud(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Mp extends Za{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Mp(e,n)}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new C(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new C(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new wi(s,i);return function(a,c){if(Gf(a)===null){const u=vl(a);u!==null&&UE(a,u,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new pt(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new cr(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function PE(t,e="asc"){const n=e,r=Dl("orderBy",t);return Mp._create(r,n)}class Pl extends Za{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Pl(e,n,r)}_apply(e){return new pt(e.firestore,e.converter,au(e._query,this._limit,this._limitType))}}function ME(t){return fE("limit",t),Pl._create("limit",t,"F")}function UM(t){return fE("limitToLast",t),Pl._create("limitToLast",t,"L")}class Ml extends Za{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Ml(e,n,r)}_apply(e){const n=LE(e,this.type,this._docOrFields,this._inclusive);return new pt(e.firestore,e.converter,function(r,s){return new cr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,s,r.endAt)}(e._query,n))}}function VM(...t){return Ml._create("startAt",t,!0)}function $M(...t){return Ml._create("startAfter",t,!1)}class Ll extends Za{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Ll(e,n,r)}_apply(e){const n=LE(e,this.type,this._docOrFields,this._inclusive);return new pt(e.firestore,e.converter,function(r,s){return new cr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,s)}(e._query,n))}}function BM(...t){return Ll._create("endBefore",t,!1)}function qM(...t){return Ll._create("endAt",t,!0)}function LE(t,e,n,r){if(n[0]=K(n[0]),n[0]instanceof Sa)return function(s,i,o,a,c){if(!a)throw new C(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of Ss(s))if(l.field.isKeyField())u.push(xs(i,a.key));else{const h=a.data.field(l.field);if(Hf(h))throw new C(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new C(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new Ur(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=zs(t.firestore);return function(i,o,a,c,u,l){const h=i.explicitOrderBy;if(u.length>h.length)throw new C(_.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<u.length;f++){const g=u[f];if(h[f].field.isKeyField()){if(typeof g!="string")throw new C(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!Wf(i)&&g.indexOf("/")!==-1)throw new C(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const y=i.path.child(he.fromString(g));if(!L.isDocumentKey(y))throw new C(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${y}' is not because it contains an odd number of segments.`);const b=new L(y);d.push(xs(o,b))}else{const y=RE(a,c,g);d.push(y)}}return new Ur(d,l)}(t._query,t.firestore._databaseId,s,e,n,r)}}function Ny(t,e,n){if(typeof(n=K(n))=="string"){if(n==="")throw new C(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wf(e)&&n.indexOf("/")!==-1)throw new C(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(he.fromString(n));if(!L.isDocumentKey(r))throw new C(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xs(t,new L(r))}if(n instanceof De)return xs(t,n._key);throw new C(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${kl(n)}.`)}function Dy(t,e){if(!Array.isArray(t)||t.length===0)throw new C(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new C(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function FE(t,e){if(e.isInequality()){const r=vl(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new C(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Gf(t);i!==null&&UE(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new C(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new C(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function UE(t,e,n){if(!n.isEqual(e))throw new C(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Lp{convertValue(e,n="none"){switch(Rs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(As(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw B()}}convertObject(e,n){const r={};return Gs(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Rl(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Fb(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(va(e));default:return null}}convertTimestamp(e){const n=Lr(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=he.fromString(e);W(SI(r));const s=new Mr(r.get(1),r.get(3)),i=new L(r.popFirst(5));return s.isEqual(n)||Ke(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Fl(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class jM extends Lp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new De(this.firestore,null,n)}}/**
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
 */class ys{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sr extends Sa{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Go(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Dl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Go extends sr{data(e={}){return super.data(e)}}class Br{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ys(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Go(this._firestore,this._userDataWriter,r.key,r,new ys(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new C(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new Go(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ys(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Go(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ys(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:KM(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function KM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}function VE(t,e){return t instanceof sr&&e instanceof sr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Br&&e instanceof Br&&t._firestore===e._firestore&&gE(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function ka(t){t=me(t,De);const e=me(t.firestore,qe);return bE(ut(e),t._key).then(n=>Fp(e,t,n))}class Ys extends Lp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new De(this.firestore,null,n)}}function HM(t){t=me(t,De);const e=me(t.firestore,qe),n=ut(e),r=new Ys(e);return fM(n,t._key).then(s=>new sr(e,r,t._key,s,new ys(s!==null&&s.hasLocalMutations,!0),t.converter))}function GM(t){t=me(t,De);const e=me(t.firestore,qe);return bE(ut(e),t._key,{source:"server"}).then(n=>Fp(e,t,n))}function Us(t){t=me(t,pt);const e=me(t.firestore,qe),n=ut(e),r=new Ys(e);return OE(t._query),IE(n,t._query).then(s=>new Br(e,r,t,s))}function WM(t){t=me(t,pt);const e=me(t.firestore,qe),n=ut(e),r=new Ys(e);return pM(n,t._query).then(s=>new Br(e,r,t,s))}function zM(t){t=me(t,pt);const e=me(t.firestore,qe),n=ut(e),r=new Ys(e);return IE(n,t._query,{source:"server"}).then(s=>new Br(e,r,t,s))}function Oy(t,e,n){t=me(t,De);const r=me(t.firestore,qe),s=Fl(t.converter,e,n);return ec(r,[Nl(zs(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Pe.none())])}function gu(t,e,n,...r){t=me(t,De);const s=me(t.firestore,qe),i=zs(s);let o;return o=typeof(e=K(e))=="string"||e instanceof $r?xp(i,"updateDoc",t._key,e,n,r):Rp(i,"updateDoc",t._key,e),ec(s,[o.toMutation(t._key,Pe.exists(!0))])}function $E(t){return ec(me(t.firestore,qe),[new io(t._key,Pe.none())])}function Ul(t,e){const n=me(t.firestore,qe),r=gn(t),s=Fl(t.converter,e);return ec(n,[Nl(zs(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Pe.exists(!1))]).then(()=>r)}function BE(t,...e){var n,r,s;t=K(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||wd(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(wd(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(t instanceof De)u=me(t.firestore,qe),l=ro(t._key.path),c={next:h=>{e[o]&&e[o](Fp(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=me(t,pt);u=me(h.firestore,qe),l=h._query;const d=new Ys(u);c={next:f=>{e[o]&&e[o](new Br(u,d,h,f))},error:e[o+1],complete:e[o+2]},OE(t._query)}return function(h,d,f,g){const y=new Cl(g),b=new gp(d,y,f);return h.asyncQueue.enqueueAndForget(async()=>fp(await qi(h),b)),()=>{y.bc(),h.asyncQueue.enqueueAndForget(async()=>pp(await qi(h),b))}}(ut(u),l,a,c)}function QM(t,e){return mM(ut(t=me(t,qe)),wd(e)?e:{next:e})}function ec(t,e){return function(n,r){const s=new rt;return n.asyncQueue.enqueueAndForget(async()=>qP(await Cp(n),r,s)),s.promise}(ut(t),e)}function Fp(t,e,n){const r=n.docs.get(e._key),s=new Ys(t);return new sr(t,s,e._key,r,new ys(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const YM={maxAttempts:5};/**
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
 */class JM{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=zs(e)}set(e,n,r){this._verifyNotCommitted();const s=_r(e,this._firestore),i=Fl(s.converter,n,r),o=Nl(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Pe.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=_r(e,this._firestore);let o;return o=typeof(n=K(n))=="string"||n instanceof $r?xp(this._dataReader,"WriteBatch.update",i._key,n,r,s):Rp(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Pe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=_r(e,this._firestore);return this._mutations=this._mutations.concat(new io(n._key,Pe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(_.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function _r(t,e){if((t=K(t)).firestore!==e)throw new C(_.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class XM extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=zs(e)}get(e){const n=_r(e,this._firestore),r=new jM(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return B();const i=s[0];if(i.isFoundDocument())return new Sa(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new Sa(this._firestore,r,n._key,null,n.converter);throw B()})}set(e,n,r){const s=_r(e,this._firestore),i=Fl(s.converter,n,r),o=Nl(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=_r(e,this._firestore);let o;return o=typeof(n=K(n))=="string"||n instanceof $r?xp(this._dataReader,"Transaction.update",i._key,n,r,s):Rp(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=_r(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=_r(e,this._firestore),r=new Ys(this._firestore);return super.get(e).then(s=>new sr(this._firestore,r,n._key,s._document,new ys(!1,!1),n.converter))}}function ZM(t,e,n){t=me(t,qe);const r=Object.assign(Object.assign({},YM),n);return function(s){if(s.maxAttempts<1)throw new C(_.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,i,o){const a=new rt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await lM(s);new cM(s.asyncQueue,c,o,i,a).run()}),a.promise}(ut(t),s=>e(new XM(t,s)),r)}/**
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
 */function eL(){return new Xa("deleteField")}function tL(){return new Ap("serverTimestamp")}function nL(...t){return new OM("arrayUnion",t)}function rL(...t){return new PM("arrayRemove",t)}function sL(t){return new MM("increment",t)}(function(t,e=!0){(function(n){no=n})(jr),tr(new vn("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new qe(new wD(n.getProvider("auth-internal")),new TD(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new C(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mr(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Wt(Ng,"3.8.0",t),Wt(Ng,"3.8.0","esm2017")})();/**
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
 */const qE="firebasestorage.googleapis.com",jE="storageBucket",iL=2*60*1e3,oL=10*60*1e3;/**
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
 */class je extends bt{constructor(e,n,r=0){super(_h(e),`Firebase Storage: ${n} (${_h(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _h(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function _h(t){return"storage/"+t}function Up(){const t="An unknown error occurred, please check the error payload for server response.";return new je("unknown",t)}function aL(t){return new je("object-not-found","Object '"+t+"' does not exist.")}function cL(t){return new je("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function uL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new je("unauthenticated",t)}function lL(){return new je("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function hL(t){return new je("unauthorized","User does not have permission to access '"+t+"'.")}function dL(){return new je("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function fL(){return new je("canceled","User canceled the upload/download.")}function pL(t){return new je("invalid-url","Invalid URL '"+t+"'.")}function mL(t){return new je("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function gL(){return new je("no-default-bucket","No default bucket found. Did you set the '"+jE+"' property when initializing the app?")}function yL(){return new je("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function vL(){return new je("no-download-url","The given file does not have any download URLs.")}function _L(t){return new je("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Id(t){return new je("invalid-argument",t)}function KE(){return new je("app-deleted","The Firebase app was deleted.")}function wL(t){return new je("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Wo(t,e){return new je("invalid-format","String does not match format '"+t+"': "+e)}function Eo(t){throw new je("internal-error","Internal error: "+t)}/**
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
 */class Ht{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ht.makeFromUrl(e,n)}catch{return new Ht(e,"")}if(r.path==="")return r;throw mL(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(x){x.path_=decodeURIComponent(x.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},y=n===qE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",S=new RegExp(`^https?://${y}/${s}/${b}`,"i"),E=[{regex:a,indices:c,postModify:i},{regex:f,indices:g,postModify:u},{regex:S,indices:{bucket:1,path:2},postModify:u}];for(let x=0;x<E.length;x++){const j=E[x],z=j.regex.exec(e);if(z){const ae=z[j.indices.bucket];let Z=z[j.indices.path];Z||(Z=""),r=new Ht(ae,Z),j.postModify(r);break}}if(r==null)throw pL(e);return r}}class bL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function IL(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...b){u||(u=!0,e.apply(null,b))}function h(b){s=setTimeout(()=>{s=null,t(f,c())},b)}function d(){i&&clearTimeout(i)}function f(b,...S){if(u){d();return}if(b){d(),l.call(null,b,...S);return}if(c()||o){d(),l.call(null,b,...S);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,h(E)}let g=!1;function y(b){g||(g=!0,d(),!u&&(s!==null?(b||(a=2),clearTimeout(s),h(0)):b||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function EL(t){t(!1)}/**
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
 */function TL(t){return t!==void 0}function SL(t){return typeof t=="object"&&!Array.isArray(t)}function Vp(t){return typeof t=="string"||t instanceof String}function Py(t){return $p()&&t instanceof Blob}function $p(){return typeof Blob<"u"&&!$u()}function My(t,e,n,r){if(r<e)throw Id(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Id(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Vl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function HE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var ks;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ks||(ks={}));/**
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
 */function kL(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class CL{constructor(e,n,r,s,i,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new vc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ks.NO_ERROR,c=i.getStatus();if((!a||kL(c,this.additionalRetryCodes_))&&this.retry){const l=i.getErrorCode()===ks.ABORT;r(!1,new vc(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new vc(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());TL(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Up();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?KE():fL();o(c)}else{const c=dL();o(c)}};this.canceled_?n(!1,new vc(!1,null,!0)):this.backoffId_=IL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&EL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class vc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function AL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function RL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function xL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function NL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function DL(t,e,n,r,s,i,o=!0){const a=HE(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return xL(u,e),AL(u,n),RL(u,i),NL(u,r),new CL(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function OL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function PL(...t){const e=OL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if($p())return new Blob(t);throw new je("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function ML(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function LL(t){if(typeof atob>"u")throw _L("base-64");return atob(t)}/**
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
 */const Mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class wh{constructor(e,n){this.data=e,this.contentType=n||null}}function FL(t,e){switch(t){case Mn.RAW:return new wh(GE(e));case Mn.BASE64:case Mn.BASE64URL:return new wh(WE(t,e));case Mn.DATA_URL:return new wh(VL(e),$L(e))}throw Up()}function GE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function UL(t){let e;try{e=decodeURIComponent(t)}catch{throw Wo(Mn.DATA_URL,"Malformed data URL.")}return GE(e)}function WE(t,e){switch(t){case Mn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Wo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Mn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Wo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=LL(e)}catch(s){throw s.message.includes("polyfill")?s:Wo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class zE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Wo(Mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=BL(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function VL(t){const e=new zE(t);return e.base64?WE(Mn.BASE64,e.rest):UL(e.rest)}function $L(t){return new zE(t).contentType}function BL(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class wr{constructor(e,n){let r=0,s="";Py(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Py(this.data_)){const r=this.data_,s=ML(r,e,n);return s===null?null:new wr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new wr(r,!0)}}static getBlob(...e){if($p()){const n=e.map(r=>r instanceof wr?r.data_:r);return new wr(PL.apply(null,n))}else{const n=e.map(o=>Vp(o)?FL(Mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new wr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function QE(t){let e;try{e=JSON.parse(t)}catch{return null}return SL(e)?e:null}/**
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
 */function qL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function jL(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function YE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function KL(t,e){return e}class St{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||KL}}let _c=null;function HL(t){return!Vp(t)||t.length<2?t:YE(t)}function JE(){if(_c)return _c;const t=[];t.push(new St("bucket")),t.push(new St("generation")),t.push(new St("metageneration")),t.push(new St("name","fullPath",!0));function e(i,o){return HL(o)}const n=new St("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new St("size");return s.xform=r,t.push(s),t.push(new St("timeCreated")),t.push(new St("updated")),t.push(new St("md5Hash",null,!0)),t.push(new St("cacheControl",null,!0)),t.push(new St("contentDisposition",null,!0)),t.push(new St("contentEncoding",null,!0)),t.push(new St("contentLanguage",null,!0)),t.push(new St("contentType",null,!0)),t.push(new St("metadata","customMetadata",!0)),_c=t,_c}function GL(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ht(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function WL(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return GL(r,t),r}function XE(t,e,n){const r=QE(e);return r===null?null:WL(t,r,n)}function zL(t,e,n,r){const s=QE(e);if(s===null||!Vp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),f=Vl(d,n,r),g=HE({alt:"media",token:u});return f+g})[0]}function QL(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Bp{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ZE(t){if(!t)throw Up()}function YL(t,e){function n(r,s){const i=XE(t,s,e);return ZE(i!==null),i}return n}function JL(t,e){function n(r,s){const i=XE(t,s,e);return ZE(i!==null),zL(i,s,t.host,t._protocol)}return n}function eT(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=lL():s=uL():n.getStatus()===402?s=cL(t.bucket):n.getStatus()===403?s=hL(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function tT(t){const e=eT(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=aL(t.path)),i.serverResponse=s.serverResponse,i}return n}function XL(t,e,n){const r=e.fullServerUrl(),s=Vl(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Bp(s,i,JL(t,n),o);return a.errorHandler=tT(e),a}function ZL(t,e){const n=e.fullServerUrl(),r=Vl(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,u){}const a=new Bp(r,s,o,i);return a.successCodes=[200,204],a.errorHandler=tT(e),a}function eF(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function tF(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=eF(null,e)),r}function nF(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let E="";for(let x=0;x<2;x++)E=E+Math.random().toString().slice(2);return E}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=tF(e,r,s),l=QL(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=wr.getBlob(h,r,d);if(f===null)throw yL();const g={name:u.fullPath},y=Vl(i,t.host,t._protocol),b="POST",S=t.maxUploadRetryTime,A=new Bp(y,b,YL(t,n),S);return A.urlParams=g,A.headers=o,A.body=f.uploadData(),A.errorHandler=eT(e),A}class rF{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ks.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ks.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ks.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Eo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Eo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Eo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Eo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Eo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class sF extends rF{initXhr(){this.xhr_.responseType="text"}}function qp(){return new sF}/**
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
 */class Vs{constructor(e,n){this._service=e,n instanceof Ht?this._location=n:this._location=Ht.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Vs(e,n)}get root(){const e=new Ht(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return YE(this._location.path)}get storage(){return this._service}get parent(){const e=qL(this._location.path);if(e===null)return null;const n=new Ht(this._location.bucket,e);return new Vs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw wL(e)}}function iF(t,e,n){t._throwIfRoot("uploadBytes");const r=nF(t.storage,t._location,JE(),new wr(e,!0),n);return t.storage.makeRequestWithTokens(r,qp).then(s=>({metadata:s,ref:t}))}function oF(t){t._throwIfRoot("getDownloadURL");const e=XL(t.storage,t._location,JE());return t.storage.makeRequestWithTokens(e,qp).then(n=>{if(n===null)throw vL();return n})}function aF(t){t._throwIfRoot("deleteObject");const e=ZL(t.storage,t._location);return t.storage.makeRequestWithTokens(e,qp)}function cF(t,e){const n=jL(t._location.path,e),r=new Ht(t._location.bucket,n);return new Vs(t.storage,r)}/**
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
 */function uF(t){return/^[A-Za-z]+:\/\//.test(t)}function lF(t,e){return new Vs(t,e)}function nT(t,e){if(t instanceof jp){const n=t;if(n._bucket==null)throw gL();const r=new Vs(n,n._bucket);return e!=null?nT(r,e):r}else return e!==void 0?cF(t,e):t}function hF(t,e){if(e&&uF(e)){if(t instanceof jp)return lF(t,e);throw Id("To use ref(service, url), the first argument must be a Storage instance.")}else return nT(t,e)}function Ly(t,e){const n=e==null?void 0:e[jE];return n==null?null:Ht.makeFromBucketSpec(n,t)}function dF(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:w_(s,t.app.options.projectId))}class jp{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=qE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=iL,this._maxUploadRetryTime=oL,this._requests=new Set,s!=null?this._bucket=Ht.makeFromBucketSpec(s,this._host):this._bucket=Ly(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ht.makeFromBucketSpec(this._url,e):this._bucket=Ly(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){My("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){My("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Vs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new bL(KE());{const o=DL(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Fy="@firebase/storage",Uy="0.10.0";/**
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
 */const rT="storage";function sT(t,e,n){return t=K(t),iF(t,e,n)}function iT(t){return t=K(t),oF(t)}function oT(t){return t=K(t),aF(t)}function yu(t,e){return t=K(t),hF(t,e)}function fF(t=ju(),e){t=K(t);const r=Qi(t,rT).getImmediate({identifier:e}),s=v_("storage");return s&&pF(r,...s),r}function pF(t,e,n,r={}){dF(t,e,n,r)}function mF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new jp(n,r,s,e,jr)}function gF(){tr(new vn(rT,mF,"PUBLIC").setMultipleInstances(!0)),Wt(Fy,Uy,""),Wt(Fy,Uy,"esm2017")}gF();const yF={apiKey:"AIzaSyD2OD7f32hGUnbizkaCQdXUXkCol-Ycl30",authDomain:"app-odonto-a4ac4.firebaseapp.com",projectId:"app-odonto-a4ac4",storageBucket:"app-odonto-a4ac4.appspot.com",messagingSenderId:"922824486299",appId:"1:922824486299:web:f195882ea173f7787c453e"},aT=qu(yF),Gt=bM(aT),vu=fF(aT);const vF={class:"questionario"},_F={class:"box my-4"},wF={class:"botao-inicio mb-2"},bF=w("i",{class:"fa-solid fa-house"},null,-1),IF={class:"title has-text-centered"},EF=["innerHTML"],TF={class:"image-container"},SF=["src"],kF={class:"opcoes-container buttons are-medium mt-6 is-justify-content-center"},CF=["onClick"],AF={__name:"QuestionarioProjeto",setup(t){const e=jn(Gt,"perguntas"),n=ln("");qs(()=>{const i=Uu();r(i.params.id)});const r=async i=>{const o=Pt(e,Fs("is_inicio","==",!0),Fs("projetoId","==",i),ME(1));(await Us(o)).forEach(async c=>{n.value=c.data()})},s=async i=>{const o=gn(Gt,"perguntas",i),a=await ka(o);n.value=a.data()};return(i,o)=>{const a=X0("RouterLink");return Ie(),Ce("div",vF,[w("div",_F,[w("div",wF,[Me(a,{to:"/",class:"button",title:"Início"},{default:zn(()=>[bF]),_:1})]),w("h2",IF,Ln(n.value.titulo),1),w("p",{class:"is-size-3 mb-5 has-text-justified texto",innerHTML:n.value.texto},null,8,EF),w("div",TF,[w("img",{class:"image has-image-centered",src:n.value.url_imagem,alt:""},null,8,SF)]),w("div",kF,[(Ie(!0),Ce(vt,null,Ei(n.value.opcoes,(c,u)=>(Ie(),Ce("button",{key:u,onClick:l=>s(c.proxima_pergunta),class:"button"},Ln(c.opcao_texto),9,CF))),128))])])])}}};/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var cT="store";function uT(t){return t===void 0&&(t=null),nn(t!==null?t:cT)}function lo(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function RF(t){return t!==null&&typeof t=="object"}function xF(t){return t&&typeof t.then=="function"}function NF(t,e){return function(){return t(e)}}function lT(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function hT(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;$l(t,n,[],t._modules.root,!0),Kp(t,n,e)}function Kp(t,e,n){var r=t._state,s=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},c=WT(!0);c.run(function(){lo(i,function(u,l){o[l]=NF(u,t),a[l]=qt(function(){return o[l]()}),Object.defineProperty(t.getters,l,{get:function(){return a[l].value},enumerable:!0})})}),t._state=qr({data:e}),t._scope=c,t.strict&&LF(t),r&&n&&t._withCommit(function(){r.data=null}),s&&s.stop()}function $l(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=Hp(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var u=r.context=DF(t,o,n);r.forEachMutation(function(l,h){var d=o+h;OF(t,d,l,u)}),r.forEachAction(function(l,h){var d=l.root?h:o+h,f=l.handler||l;PF(t,d,f,u)}),r.forEachGetter(function(l,h){var d=o+h;MF(t,d,l,u)}),r.forEachChild(function(l,h){$l(t,e,n.concat(h),l,s)})}function DF(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=_u(i,o,a),u=c.payload,l=c.options,h=c.type;return(!l||!l.root)&&(h=e+h),t.dispatch(h,u)},commit:r?t.commit:function(i,o,a){var c=_u(i,o,a),u=c.payload,l=c.options,h=c.type;(!l||!l.root)&&(h=e+h),t.commit(h,u,l)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return dT(t,e)}},state:{get:function(){return Hp(t.state,n)}}}),s}function dT(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function OF(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function PF(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return xF(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function MF(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function LF(t){gi(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Hp(t,e){return e.reduce(function(n,r){return n[r]},t)}function _u(t,e,n){return RF(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var FF="vuex bindings",Vy="vuex:mutations",bh="vuex:actions",ii="vuex",UF=0;function VF(t,e){mk({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[FF]},function(n){n.addTimelineLayer({id:Vy,label:"Vuex Mutations",color:$y}),n.addTimelineLayer({id:bh,label:"Vuex Actions",color:$y}),n.addInspector({id:ii,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===ii)if(r.filter){var s=[];gT(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[mT(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===ii){var s=r.nodeId;dT(e,s),r.state=qF(KF(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===ii){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(ii),n.sendInspectorState(ii),n.addTimelineEvent({layerId:Vy,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=UF++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:bh,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:bh,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var $y=8702998,$F=6710886,BF=16777215,fT={label:"namespaced",textColor:BF,backgroundColor:$F};function pT(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function mT(t,e){return{id:e||"root",label:pT(e),tags:t.namespaced?[fT]:[],children:Object.keys(t._children).map(function(n){return mT(t._children[n],e+n+"/")})}}function gT(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[fT]:[]}),Object.keys(e._children).forEach(function(s){gT(t,e._children[s],n,r+s+"/")})}function qF(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=jF(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?pT(o):o,editable:!1,value:Ed(function(){return i[o]})}})}return s}function jF(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=Ed(function(){return t[n]})}else e[n]=Ed(function(){return t[n]})}),e}function KF(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Ed(t){try{return t()}catch(e){return e}}var wn=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},yT={namespaced:{configurable:!0}};yT.namespaced.get=function(){return!!this._rawModule.namespaced};wn.prototype.addChild=function(e,n){this._children[e]=n};wn.prototype.removeChild=function(e){delete this._children[e]};wn.prototype.getChild=function(e){return this._children[e]};wn.prototype.hasChild=function(e){return e in this._children};wn.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};wn.prototype.forEachChild=function(e){lo(this._children,e)};wn.prototype.forEachGetter=function(e){this._rawModule.getters&&lo(this._rawModule.getters,e)};wn.prototype.forEachAction=function(e){this._rawModule.actions&&lo(this._rawModule.actions,e)};wn.prototype.forEachMutation=function(e){this._rawModule.mutations&&lo(this._rawModule.mutations,e)};Object.defineProperties(wn.prototype,yT);var Js=function(e){this.register([],e,!1)};Js.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Js.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};Js.prototype.update=function(e){vT([],this.root,e)};Js.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new wn(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&lo(n.modules,function(a,c){s.register(e.concat(c),a,r)})};Js.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};Js.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function vT(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;vT(t.concat(r),e.getChild(r),n.modules[r])}}function HF(t){return new Vt(t)}var Vt=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Js(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(d,f){return c.call(o,d,f)},this.commit=function(d,f,g){return u.call(o,d,f,g)},this.strict=s;var l=this._modules.root.state;$l(this,l,[],this._modules.root),Kp(this,l),r.forEach(function(h){return h(n)})},Gp={state:{configurable:!0}};Vt.prototype.install=function(e,n){e.provide(n||cT,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&VF(e,this)};Gp.state.get=function(){return this._state.data};Gp.state.set=function(t){};Vt.prototype.commit=function(e,n,r){var s=this,i=_u(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},u=this._mutations[o];u&&(this._withCommit(function(){u.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(l){return l(c,s.state)}))};Vt.prototype.dispatch=function(e,n){var r=this,s=_u(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(l){return l.before}).forEach(function(l){return l.before(a,r.state)})}catch{}var u=c.length>1?Promise.all(c.map(function(l){return l(o)})):c[0](o);return new Promise(function(l,h){u.then(function(d){try{r._actionSubscribers.filter(function(f){return f.after}).forEach(function(f){return f.after(a,r.state)})}catch{}l(d)},function(d){try{r._actionSubscribers.filter(function(f){return f.error}).forEach(function(f){return f.error(a,r.state,d)})}catch{}h(d)})})}};Vt.prototype.subscribe=function(e,n){return lT(e,this._subscribers,n)};Vt.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return lT(r,this._actionSubscribers,n)};Vt.prototype.watch=function(e,n,r){var s=this;return gi(function(){return e(s.state,s.getters)},n,Object.assign({},r))};Vt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Vt.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),$l(this,this.state,e,this._modules.get(e),r.preserveState),Kp(this,this.state)};Vt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Hp(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),hT(this)};Vt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Vt.prototype.hotUpdate=function(e){this._modules.update(e),hT(this,!0)};Vt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Vt.prototype,Gp);const Er=HF({state:{user:null},mutations:{setUser(t,e){t.user=e}},actions:{setUser({commit:t},e){t("setUser",e)}},getters:{getUser(t){return t.user}}});const GF=t=>(Gd("data-v-b852ddb4"),t=t(),Wd(),t),WF={class:"container"},zF=GF(()=>w("h3",{class:"title has-text-centered is-1"},"Configurar trabalho",-1)),QF={class:"columns is-centered"},YF={class:"column is-10"},JF={class:"is-flex is-justify-content-space-between"},XF={class:"columns is-multiline is-centered"},ZF={class:"card-header"},eU={class:"card-header-title"},tU={class:"card-content"},nU={class:"content"},rU={class:"image-container"},sU=["src"],iU={class:"card-footer"},oU={__name:"DashboardView",setup(t){const e=ln([]),n=Uu();n.params.id,Er.getters.getUser.role;const r=jn(Gt,"perguntas");qs(()=>{s()});const s=async()=>{const o=Pt(r,Fs("projetoId","==",n.params.id));(await Us(o)).forEach(c=>{e.value.push(c)})},i=async o=>{await $E(gn(r,o)),e.value=e.value.filter(a=>a.id!==o)};return(o,a)=>(Ie(),Ce("div",WF,[zF,w("div",QF,[w("div",YF,[w("div",JF,[Me(ye(br),{to:`/nova-pergunta/${ye(n).params.id}`,class:"button"},{default:zn(()=>[Nn("Adicionar nova pergunta")]),_:1},8,["to"]),w("button",{class:"button is-danger is-light",onClick:a[0]||(a[0]=c=>{this.$router.go(-1)})},"Voltar")])])]),w("div",XF,[(Ie(!0),Ce(vt,null,Ei(e.value,c=>(Ie(),Ce("div",{key:c.id,class:"card column is-one-fifth"},[w("header",ZF,[w("p",eU,Ln(c.data().nome),1)]),w("div",tU,[w("div",nU,[w("h1",null,Ln(c.data().titulo),1),w("p",null,Ln(c.data().texto),1),w("div",rU,[w("img",{class:"image has-image-centered",src:c.data().url_imagem,alt:""},null,8,sU)])])]),w("footer",iU,[Me(ye(br),{to:{name:"editarPergunta",params:{idPergunta:c.id}},class:"card-footer-item"},{default:zn(()=>[Nn("Editar")]),_:2},1032,["to"]),Me(ye(br),{to:"#",onClick:u=>i(c.id),class:"card-footer-item delete-link"},{default:zn(()=>[Nn("Apagar")]),_:2},1032,["onClick"])])]))),128))])]))}},aU=Vu(oU,[["__scopeId","data-v-b852ddb4"]]);const cU={class:"container"},uU=w("h2",{class:"title"},"Configurar pergunta",-1),lU={class:"field"},hU=w("label",{class:"label"},"Nome da pergunta",-1),dU={class:"control"},fU={class:"field"},pU=w("label",{class:"label"},"Título",-1),mU={class:"control"},gU={class:"file has-name"},yU={class:"file-label"},vU=w("span",{class:"file-cta"},[w("span",{class:"file-icon"},[w("i",{class:"fas fa-upload"})]),w("span",{class:"file-label"}," Escolha uma imagem... ")],-1),_U={class:"file-name"},wU={class:"image-container"},bU=["src"],IU={class:"field",style:{margin:"3%"}},EU={class:"control"},TU=w("label",{for:"isFirst"}," É a primeira pergunta ",-1),SU=w("br",null,null,-1),kU={class:"control is-expanded"},CU=["onUpdate:modelValue"],AU={class:"select"},RU=["onChange"],xU=w("option",{selected:""},"Seleciona a próxima pergunta",-1),NU=["value","selected"],DU={class:"control ml-3"},OU=["onClick"],PU={class:"control mt-5"},MU={class:"field is-grouped is-grouped-right mt-6"},LU={key:0,class:"control"},FU={key:1,class:"control"},UU={class:"control"},By={__name:"PerguntaView",setup(t){const e=Fu(),n=Uu(),r=ln([]),s=ln({}),i=ln({nome:"",texto:"",titulo:"",url_imagem:"",nome_imagem_firestore:"",is_inicio:!1,projetoId:n.params.projetoId,opcoes:[{opcao_texto:"",proxima_pergunta:""}]}),o=jn(Gt,"perguntas");let a=null;qs(()=>{n.params.idPergunta&&(a=n.params.idPergunta,d(a)),c()});const c=async()=>{if(n.params.idPergunta){const A=gn(o,n.params.idPergunta),x=(await ka(A)).data().projetoId,j=Pt(o,Fs("projetoId","==",x));(await Us(j)).forEach(ae=>{r.value.push(ae)})}else{const A=Pt(o,Fs("projetoId","==",n.params.projetoId));(await Us(A)).forEach(async x=>{r.value.push(x)})}},u=(A,E)=>{i.value.opcoes[E].proxima_pergunta=A.target.value},l=A=>{i.value.opcoes.splice(A,1)},h=()=>{i.value.opcoes.push({opcao_texto:"",proxima_pergunta:""})},d=async A=>{const E=gn(Gt,"perguntas",A),x=await ka(E);i.value=x.data(),s.value.url_imagem=x.data().url_imagem},f=async()=>{Object.keys(s.value).length>0&&await y(),i.value.data_criacao=Date.now(),await Ul(o,i.value),e.push("/")},g=async()=>{"type"in s.value&&(await b(),await y());const A=gn(Gt,"perguntas",a);await gu(A,i.value),e.push("/")},y=async()=>{const A=s.value.type.split("/")[1],E=Date.now()+A,x=yu(vu,E);await sT(x,s.value).then(async()=>{i.value.url_imagem=await iT(x),i.value.nome_imagem_firestore=E})},b=async()=>{const A=yu(vu,i.value.nome_imagem_firestore);await oT(A)},S=A=>{const E=A.target.files[0];s.value=E,s.value.url_imagem=URL.createObjectURL(E)};return(A,E)=>(Ie(),Ce("div",cU,[uU,w("div",lU,[hU,w("div",dU,[Zt(w("input",{class:"input",type:"text",placeholder:"Insira o nome da pergunta","onUpdate:modelValue":E[0]||(E[0]=x=>i.value.nome=x)},null,512),[[mn,i.value.nome]])])]),w("div",fU,[pU,w("div",mU,[Zt(w("input",{class:"input",type:"text",placeholder:"Insira o título da pergunta","onUpdate:modelValue":E[1]||(E[1]=x=>i.value.titulo=x)},null,512),[[mn,i.value.titulo]])])]),w("div",gU,[w("label",yU,[w("input",{class:"file-input",type:"file",name:"resume",onChange:E[2]||(E[2]=x=>S(x))},null,32),vU,w("span",_U,Ln(s.value.nome_imagem?s.value.nome_imagem:"..."),1)])]),w("div",wU,[w("img",{class:"image",src:s.value.url_imagem,alt:""},null,8,bU)]),w("div",IU,[w("div",EU,[Zt(w("input",{id:"isFirst",type:"checkbox","onUpdate:modelValue":E[3]||(E[3]=x=>i.value.is_inicio=x)},null,512),[[ek,i.value.is_inicio]]),TU,SU])]),(Ie(!0),Ce(vt,null,Ei(i.value.opcoes,(x,j)=>(Ie(),Ce("div",{key:j,class:"field is-grouped mt-5"},[w("div",kU,[Zt(w("input",{class:"input",type:"text",placeholder:"Texto da opção","onUpdate:modelValue":z=>x.opcao_texto=z},null,8,CU),[[mn,x.opcao_texto]])]),w("div",AU,[w("select",{onChange:z=>u(z,j)},[xU,(Ie(!0),Ce(vt,null,Ei(r.value,z=>(Ie(),Ce("option",{key:z.id,value:z.id,selected:x.proxima_pergunta===z.id},Ln(z.data().nome),9,NU))),128))],40,RU)]),w("div",DU,[w("button",{class:"button",onClick:z=>l(j)},"Remover opcao",8,OU)])]))),128)),w("div",PU,[w("button",{class:"button",onClick:E[4]||(E[4]=x=>h())},"Adicionar opcao")]),w("div",MU,[ye(n).params.idPergunta?ta("",!0):(Ie(),Ce("div",LU,[w("button",{onClick:E[5]||(E[5]=x=>f()),class:"button"},"Cadastrar")])),ye(n).params.idPergunta?(Ie(),Ce("div",FU,[w("button",{onClick:E[6]||(E[6]=x=>g()),class:"button"},"Salvar Edicao")])):ta("",!0),w("div",UU,[w("button",{class:"button is-danger is-light",onClick:E[7]||(E[7]=x=>{this.$router.go(-1)})},"Voltar")])])]))}};const VU={class:"container column is-5"},$U=w("h2",{class:"title"},"Informações do trabalho",-1),BU={class:"field"},qU=w("label",{class:"label"},"Título",-1),jU={class:"control"},KU={class:"field"},HU=w("label",{class:"label"},"Conteúdo ",-1),GU={class:"control"},WU=w("label",{class:"label"},"Administradores ",-1),zU={class:"control is-expanded"},QU=["onUpdate:modelValue"],YU={class:"control mt-5"},JU={class:"field is-grouped is-grouped-right mt-6"},XU={key:0,class:"control"},ZU={key:1,class:"control"},eV={class:"control"},tV={__name:"TrabalhoView",setup(t){const e=Fu(),n=Uu();let r=ln([{email:Er.getters.getUser.email}]);ln([]);const s=ln({}),i=ln({descricao:"",nome:"",administradores:r});jn(Gt,"perguntas");const o=jn(Gt,"projetos");let a=null;qs(()=>{n.params.idPergunta&&(a=n.params.idPergunta,u(a))});const c=()=>{i.value.administradores.push({email:""})},u=async g=>{const y=gn(Gt,"perguntas",g),b=await ka(y);i.value=b.data(),s.value.url_imagem=b.data().url_imagem},l=async()=>{Object.keys(s.value).length>0&&await d(),i.value.created_at=Date.now(),await Ul(o,i.value),e.push("/")},h=async()=>{"type"in s.value&&(await f(),await d());const g=gn(Gt,"perguntas",a);await gu(g,i.value),e.push("/dashboard")},d=async()=>{const g=s.value.type.split("/")[1],y=Date.now()+g,b=yu(vu,y);await sT(b,s.value).then(async()=>{i.value.url_imagem=await iT(b),i.value.nome_imagem_firestore=y})},f=async()=>{const g=yu(vu,i.value.nome_imagem_firestore);await oT(g)};return(g,y)=>(Ie(),Ce("div",VU,[$U,w("div",BU,[qU,w("div",jU,[Zt(w("input",{class:"input",type:"text","onUpdate:modelValue":y[0]||(y[0]=b=>i.value.nome=b)},null,512),[[mn,i.value.nome]])])]),w("div",KU,[HU,w("div",GU,[Zt(w("textarea",{class:"textarea",placeholder:"Digite aqui o conteúdo do trabalho","onUpdate:modelValue":y[1]||(y[1]=b=>i.value.descricao=b)},null,512),[[mn,i.value.descricao]])])]),WU,(Ie(!0),Ce(vt,null,Ei(i.value.administradores,(b,S)=>(Ie(),Ce("div",{key:S,class:"field is-grouped mt-5"},[w("div",zU,[Zt(w("input",{class:"input",type:"text",placeholder:"Email","onUpdate:modelValue":A=>b.email=A},null,8,QU),[[mn,b.email]])])]))),128)),w("div",YU,[w("button",{class:"button",onClick:y[2]||(y[2]=b=>c())},"Novo administrador")]),w("div",JU,[ye(n).params.idPergunta?ta("",!0):(Ie(),Ce("div",XU,[w("button",{onClick:y[3]||(y[3]=b=>l()),class:"button"},"Cadastrar")])),ye(n).params.idPergunta?(Ie(),Ce("div",ZU,[w("button",{onClick:y[4]||(y[4]=b=>h()),class:"button"},"Salvar Edicao")])):ta("",!0),w("div",eV,[w("button",{class:"button is-danger is-light",onClick:y[5]||(y[5]=b=>{this.$router.go(-1)})},"Voltar")])])]))}};/**
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
 */class nV{constructor(e,n){this._delegate=e,this.firebase=n,Hc(e,new vn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),k_(this._delegate)))}_getService(e,n=Nr){var r;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((r=s.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:n})}_removeServiceInstance(e,n=Nr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Hc(this._delegate,e)}_addOrOverwriteComponent(e){S_(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const rV={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},qy=new js("app-compat","Firebase",rV);/**
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
 */function sV(t){const e={},n={__esModule:!0,initializeApp:i,app:s,registerVersion:Wt,setLogLevel:A_,onLog:C_,apps:null,SDK_VERSION:jr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:aR}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function s(u){if(u=u||Nr,!zm(e,u))throw qy.create("no-app",{appName:u});return e[u]}s.App=t;function i(u,l={}){const h=qu(u,l);if(zm(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(tr(u)&&u.type==="PUBLIC"){const d=(f=s())=>{if(typeof f[h]!="function")throw qy.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&jc(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[h]:null}function c(u,l){return l==="serverAuth"?null:l}return n}/**
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
 */function _T(){const t=sV(nV);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:_T,extendNamespace:e,createSubscribe:b_,ErrorFactory:js,deepExtend:jc});function e(n){jc(t,n)}return t}const iV=_T();/**
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
 */const jy=new Bu("@firebase/app-compat"),oV="@firebase/app-compat",aV="0.2.0";/**
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
 */function cV(t){Wt(oV,aV,t)}/**
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
 */if(UC()&&self.firebase!==void 0){jy.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&jy.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Bl=iV;cV();/**
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
 */function $s(){return window}/**
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
 */const uV=2e3;async function lV(t,e,n){var r;const{BuildInfo:s}=$s();_n(e.sessionId,"AuthEvent did not contain a session ID");const i=await mV(e.sessionId),o={};return Ji()?o.ibi=s.packageName:Na()?o.apn=s.packageName:st(t,"operation-not-supported-in-this-environment"),s.displayName&&(o.appDisplayName=s.displayName),o.sessionId=i,Hh(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function hV(t){const{BuildInfo:e}=$s(),n={};Ji()?n.iosBundleId=e.packageName:Na()?n.androidPackageName=e.packageName:st(t,"operation-not-supported-in-this-environment"),await Iw(t,n)}function dV(t){const{cordova:e}=$s();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let s=null;r?e.plugins.browsertab.openUrl(t):s=e.InAppBrowser.open(t,RR()?"_blank":"_system","location=yes"),n(s)})})}async function fV(t,e,n){const{cordova:r}=$s();let s=()=>{};try{await new Promise((i,o)=>{let a=null;function c(){var h;i();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(dt(t,"redirect-cancelled-by-user"))},uV))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),Na()&&document.addEventListener("visibilitychange",l,!1),s=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{s()}}function pV(t){var e,n,r,s,i,o,a,c,u,l;const h=$s();O(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),O(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),O(typeof((i=(s=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||s===void 0?void 0:s.browsertab)===null||i===void 0?void 0:i.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function mV(t){const e=gV(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(s=>s.toString(16).padStart(2,"0")).join("")}function gV(t){if(_n(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const yV=20;class vV extends ww{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function _V(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:IV(),postBody:null,tenantId:t.tenantId,error:dt(t,"no-auth-event")}}function wV(t,e){return Td()._set(Sd(t),e)}async function Ky(t){const e=await Td()._get(Sd(t));return e&&await Td()._remove(Sd(t)),e}function bV(t,e){var n,r;const s=TV(e);if(s.includes("/__/auth/callback")){const i=Pc(s),o=i.firebaseError?EV(decodeURIComponent(i.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],c=a?dt(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:s,postBody:null}}return null}function IV(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<yV;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Td(){return Kt(Ju)}function Sd(t){return Is("authEvent",t.config.apiKey,t.name)}function EV(t){try{return JSON.parse(t)}catch{return null}}function TV(t){const e=Pc(t),n=e.link?decodeURIComponent(e.link):void 0,r=Pc(n).link,s=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Pc(s).link||s||r||n||t}function Pc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return li(n.join("?"))}/**
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
 */const SV=500;class kV{constructor(){this._redirectPersistence=Or,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=tl,this._overrideRedirectResult=vf}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new vV(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){st(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,s){pV(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),Tx(),await this._originValidation(e);const o=_V(e,r,s);await wV(e,o);const a=await lV(e,o,n),c=await dV(a);return fV(e,i,c)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hV(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:s,BuildInfo:i}=$s(),o=setTimeout(async()=>{await Ky(e),n.onEvent(Hy())},SV),a=async l=>{clearTimeout(o);const h=await Ky(e);let d=null;h&&(l!=null&&l.url)&&(d=bV(h,l.url)),n.onEvent(d||Hy())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=s,u=`${i.packageName.toLowerCase()}://`;$s().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const CV=kV;function Hy(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:dt("no-auth-event")}}/**
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
 */function AV(t,e){it(t)._logFramework(e)}var RV="@firebase/auth-compat",xV="0.3.0";/**
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
 */const NV=1e3;function zo(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function DV(){return zo()==="http:"||zo()==="https:"}function wT(t=Ue()){return!!((zo()==="file:"||zo()==="ionic:"||zo()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function OV(){return Zd()||$u()}function PV(){return g_()&&(document==null?void 0:document.documentMode)===11}function MV(t=Ue()){return/Edge\/\d+/.test(t)}function LV(t=Ue()){return PV()||MV(t)}function bT(){try{const t=self.localStorage,e=Da();if(t)return t.setItem(e,"1"),t.removeItem(e),LV()?sa():!0}catch{return Wp()&&sa()}return!1}function Wp(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Ih(){return(DV()||m_()||wT())&&!OV()&&bT()&&!Wp()}function IT(){return wT()&&typeof document<"u"}async function FV(){return IT()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},NV);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function UV(){return typeof window<"u"?window:null}/**
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
 */const Bt={LOCAL:"local",NONE:"none",SESSION:"session"},To=O,ET="persistence";function VV(t,e){if(To(Object.values(Bt).includes(e),t,"invalid-persistence-type"),Zd()){To(e!==Bt.SESSION,t,"unsupported-persistence-type");return}if($u()){To(e===Bt.NONE,t,"unsupported-persistence-type");return}if(Wp()){To(e===Bt.NONE||e===Bt.LOCAL&&sa(),t,"unsupported-persistence-type");return}To(e===Bt.NONE||bT(),t,"unsupported-persistence-type")}async function kd(t){await t._initializationPromise;const e=TT(),n=Is(ET,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function $V(t,e){const n=TT();if(!n)return[];const r=Is(ET,t,e);switch(n.getItem(r)){case Bt.NONE:return[Ci];case Bt.LOCAL:return[Ri,Or];case Bt.SESSION:return[Or];default:return[]}}function TT(){var t;try{return((t=UV())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const BV=O;class Tr{constructor(){this.browserResolver=Kt(Ew),this.cordovaResolver=Kt(CV),this.underlyingResolver=null,this._redirectPersistence=Or,this._completeRedirectFn=tl,this._overrideRedirectResult=vf}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,s)}async _openRedirect(e,n,r,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,s)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return IT()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return BV(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await FV();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function ST(t){return t.unwrap()}function qV(t){return t.wrapped()}/**
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
 */function jV(t){return kT(t)}function KV(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const s=e;s.resolver=new HV(t,A1(t,e))}else if(r){const s=kT(e),i=e;s&&(i.credential=s,i.tenantId=r.tenantId||void 0,i.email=r.email||void 0,i.phoneNumber=r.phoneNumber||void 0)}}function kT(t){const{_tokenResponse:e}=t instanceof bt?t.customData:t;if(!e)return null;if(!(t instanceof bt)&&"temporaryProof"in e&&"phoneNumber"in e)return Fn.credentialFromResult(t);const n=e.providerId;if(!n||n===mo.PASSWORD)return null;let r;switch(n){case mo.GOOGLE:r=Cn;break;case mo.FACEBOOK:r=kn;break;case mo.GITHUB:r=An;break;case mo.TWITTER:r=Rn;break;default:const{oauthIdToken:s,oauthAccessToken:i,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!i&&!o&&!s&&!a?null:a?n.startsWith("saml.")?Ai._create(n,a):Bn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:s,accessToken:i}):new vi(n).credential({idToken:s,accessToken:i,rawNonce:c})}return t instanceof bt?r.credentialFromError(t):r.credentialFromResult(t)}function Mt(t,e){return e.catch(n=>{throw n instanceof bt&&KV(t,n),n}).then(n=>{const r=n.operationType,s=n.user;return{operationType:r,credential:jV(n),additionalUserInfo:S1(n),user:Jn.getOrCreate(s)}})}async function Cd(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Mt(t,n.confirm(r))}}class HV{constructor(e,n){this.resolver=n,this.auth=qV(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Mt(ST(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Jn{constructor(e){this._delegate=e,this.multiFactor=D1(e)}static getOrCreate(e){return Jn.USER_MAP.has(e)||Jn.USER_MAP.set(e,new Jn(e)),Jn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Mt(this.auth,tw(this._delegate,e))}async linkWithPhoneNumber(e,n){return Cd(this.auth,hx(this._delegate,e,n))}async linkWithPopup(e){return Mt(this.auth,wx(this._delegate,e,Tr))}async linkWithRedirect(e){return await kd(it(this.auth)),Rx(this._delegate,e,Tr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Mt(this.auth,nw(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Cd(this.auth,dx(this._delegate,e,n))}reauthenticateWithPopup(e){return Mt(this.auth,_x(this._delegate,e,Tr))}async reauthenticateWithRedirect(e){return await kd(it(this.auth)),Cx(this._delegate,e,Tr)}sendEmailVerification(e){return p1(this._delegate,e)}async unlink(e){return await n1(this._delegate,e),this}updateEmail(e){return v1(this._delegate,e)}updatePassword(e){return _1(this._delegate,e)}updatePhoneNumber(e){return fx(this._delegate,e)}updateProfile(e){return y1(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return m1(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Jn.USER_MAP=new WeakMap;/**
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
 */const So=O;class Ad{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;So(r,"invalid-api-key",{appName:e.name}),So(r,"invalid-api-key",{appName:e.name});const s=typeof window<"u"?Tr:void 0;this._delegate=n.initialize({options:{persistence:GV(r,e.name),popupRedirectResolver:s}}),this._delegate._updateErrorMap(uR),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Jn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){G_(this._delegate,e,n)}applyActionCode(e){return a1(this._delegate,e)}checkActionCode(e){return rw(this._delegate,e)}confirmPasswordReset(e,n){return o1(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Mt(this._delegate,sw(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return f1(this._delegate,e)}isSignInWithEmailLink(e){return l1(this._delegate,e)}async getRedirectResult(){So(Ih(),this._delegate,"operation-not-supported-in-this-environment");const e=await Nx(this._delegate,Tr);return e?Mt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){AV(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:s,error:i,complete:o}=Gy(e,n,r);return this._delegate.onAuthStateChanged(s,i,o)}onIdTokenChanged(e,n,r){const{next:s,error:i,complete:o}=Gy(e,n,r);return this._delegate.onIdTokenChanged(s,i,o)}sendSignInLinkToEmail(e,n){return u1(this._delegate,e,n)}sendPasswordResetEmail(e,n){return i1(this._delegate,e,n||void 0)}async setPersistence(e){VV(this._delegate,e);let n;switch(e){case Bt.SESSION:n=Or;break;case Bt.LOCAL:n=await Kt(Ri)._isAvailable()?Ri:Ju;break;case Bt.NONE:n=Ci;break;default:return st("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Mt(this._delegate,t1(this._delegate))}signInWithCredential(e){return Mt(this._delegate,zu(this._delegate,e))}signInWithCustomToken(e){return Mt(this._delegate,s1(this._delegate,e))}signInWithEmailAndPassword(e,n){return Mt(this._delegate,hf(this._delegate,e,n))}signInWithEmailLink(e,n){return Mt(this._delegate,h1(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Cd(this._delegate,lx(this._delegate,e,n))}async signInWithPopup(e){return So(Ih(),this._delegate,"operation-not-supported-in-this-environment"),Mt(this._delegate,vx(this._delegate,e,Tr))}async signInWithRedirect(e){return So(Ih(),this._delegate,"operation-not-supported-in-this-environment"),await kd(this._delegate),Sx(this._delegate,e,Tr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return c1(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Ad.Persistence=Bt;function Gy(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const s=r;return{next:o=>s(o&&Jn.getOrCreate(o)),error:e,complete:n}}function GV(t,e){const n=$V(t,e);if(typeof self<"u"&&!n.includes(Ri)&&n.push(Ri),typeof window<"u")for(const r of[Ju,Or])n.includes(r)||n.push(r);return n.includes(Ci)||n.push(Ci),n}/**
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
 */class zp{constructor(){this.providerId="phone",this._delegate=new Fn(ST(Bl.auth()))}static credential(e,n){return Fn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}zp.PHONE_SIGN_IN_METHOD=Fn.PHONE_SIGN_IN_METHOD;zp.PROVIDER_ID=Fn.PROVIDER_ID;/**
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
 */const WV=O;class zV{constructor(e,n,r=Bl.app()){var s;WV((s=r.options)===null||s===void 0?void 0:s.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new cx(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const QV="auth-compat";function YV(t){t.INTERNAL.registerComponent(new vn(QV,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Ad(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ni.EMAIL_SIGNIN,PASSWORD_RESET:ni.PASSWORD_RESET,RECOVER_EMAIL:ni.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ni.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ni.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ni.VERIFY_EMAIL}},EmailAuthProvider:Kr,FacebookAuthProvider:kn,GithubAuthProvider:An,GoogleAuthProvider:Cn,OAuthProvider:vi,SAMLAuthProvider:Gc,PhoneAuthProvider:zp,PhoneMultiFactorGenerator:Tw,RecaptchaVerifier:zV,TwitterAuthProvider:Rn,Auth:Ad,AuthCredential:Xi,Error:bt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(RV,xV)}YV(Bl);const JV="@firebase/firestore-compat",XV="0.3.0";/**
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
 */function Qp(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new C("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function Wy(){if(typeof Uint8Array>"u")throw new C("unimplemented","Uint8Arrays are not available in this environment.")}function zy(){if(!OD())throw new C("unimplemented","Blobs are unavailable in Firestore in this environment.")}let wu=class{constructor(e){this._delegate=e}static fromBase64String(e){return zy(),new wu(Kn.fromBase64String(e))}static fromUint8Array(e){return Wy(),new wu(Kn.fromUint8Array(e))}toBase64(){return zy(),this._delegate.toBase64()}toUint8Array(){return Wy(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function Rd(t){return ZV(t,["next","error","complete"])}function ZV(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class e${enableIndexedDbPersistence(e,n){return IM(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return EM(e._delegate)}clearIndexedDbPersistence(e){return TM(e._delegate)}}class CT{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Mr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Ni("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){pE(this._delegate,e,n,r)}enableNetwork(){return kM(this._delegate)}disableNetwork(){return CM(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,dE("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return SM(this._delegate)}onSnapshotsInSync(e){return QM(this._delegate,e)}get app(){if(!this._appCompat)throw new C("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ji(this,jn(this._delegate,e))}catch(n){throw At(n,"collection()","Firestore.collection()")}}doc(e){try{return new en(this,gn(this._delegate,e))}catch(n){throw At(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ct(this,iM(this._delegate,e))}catch(n){throw At(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return ZM(this._delegate,n=>e(new AT(this,n)))}batch(){return ut(this._delegate),new RT(new JM(this._delegate,e=>ec(this._delegate,e)))}loadBundle(e){return AM(this._delegate,e)}namedQuery(e){return RM(this._delegate,e).then(n=>n?new Ct(this,n):null)}}class ql extends Lp{constructor(e){super(),this.firestore=e}convertBytes(e){return new wu(new Kn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return en.forKey(n,this.firestore,null)}}function t$(t){gD(t)}class AT{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new ql(e)}get(e){const n=vs(e);return this._delegate.get(n).then(r=>new Ca(this._firestore,new sr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const s=vs(e);return r?(Qp("Transaction.set",r),this._delegate.set(s,n,r)):this._delegate.set(s,n),this}update(e,n,r,...s){const i=vs(e);return arguments.length===2?this._delegate.update(i,n):this._delegate.update(i,n,r,...s),this}delete(e){const n=vs(e);return this._delegate.delete(n),this}}class RT{constructor(e){this._delegate=e}set(e,n,r){const s=vs(e);return r?(Qp("WriteBatch.set",r),this._delegate.set(s,n,r)):this._delegate.set(s,n),this}update(e,n,r,...s){const i=vs(e);return arguments.length===2?this._delegate.update(i,n):this._delegate.update(i,n,r,...s),this}delete(e){const n=vs(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Bs{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Go(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Aa(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Bs.INSTANCES;let s=r.get(e);s||(s=new WeakMap,r.set(e,s));let i=s.get(n);return i||(i=new Bs(e,new ql(e),n),s.set(n,i)),i}}Bs.INSTANCES=new WeakMap;class en{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new ql(e)}static forPath(e,n,r){if(e.length%2!==0)throw new C("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new en(n,new De(n._delegate,r,new L(e)))}static forKey(e,n,r){return new en(n,new De(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new ji(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ji(this.firestore,jn(this._delegate,e))}catch(n){throw At(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=K(e),e instanceof De?mE(this._delegate,e):!1}set(e,n){n=Qp("DocumentReference.set",n);try{return n?Oy(this._delegate,e,n):Oy(this._delegate,e)}catch(r){throw At(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?gu(this._delegate,e):gu(this._delegate,e,n,...r)}catch(s){throw At(s,"updateDoc()","DocumentReference.update()")}}delete(){return $E(this._delegate)}onSnapshot(...e){const n=xT(e),r=NT(e,s=>new Ca(this.firestore,new sr(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return BE(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=HM(this._delegate):(e==null?void 0:e.source)==="server"?n=GM(this._delegate):n=ka(this._delegate),n.then(r=>new Ca(this.firestore,new sr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new en(this.firestore,e?this._delegate.withConverter(Bs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function At(t,e,n){return t.message=t.message.replace(e,n),t}function xT(t){for(const e of t)if(typeof e=="object"&&!Rd(e))return e;return{}}function NT(t,e){var n,r;let s;return Rd(t[0])?s=t[0]:Rd(t[1])?s=t[1]:typeof t[0]=="function"?s={next:t[0],error:t[1],complete:t[2]}:s={next:t[1],error:t[2],complete:t[3]},{next:i=>{s.next&&s.next(e(i))},error:(n=s.error)===null||n===void 0?void 0:n.bind(s),complete:(r=s.complete)===null||r===void 0?void 0:r.bind(s)}}class Ca{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new en(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return VE(this._delegate,e._delegate)}}class Aa extends Ca{data(e){const n=this._delegate.data(e);return yD(n!==void 0),n}}class Ct{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new ql(e)}where(e,n,r){try{return new Ct(this.firestore,Pt(this._delegate,Fs(e,n,r)))}catch(s){throw At(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Ct(this.firestore,Pt(this._delegate,PE(e,n)))}catch(r){throw At(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ct(this.firestore,Pt(this._delegate,ME(e)))}catch(n){throw At(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Ct(this.firestore,Pt(this._delegate,UM(e)))}catch(n){throw At(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ct(this.firestore,Pt(this._delegate,VM(...e)))}catch(n){throw At(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ct(this.firestore,Pt(this._delegate,$M(...e)))}catch(n){throw At(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ct(this.firestore,Pt(this._delegate,BM(...e)))}catch(n){throw At(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ct(this.firestore,Pt(this._delegate,qM(...e)))}catch(n){throw At(n,"endAt()","Query.endAt()")}}isEqual(e){return gE(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=WM(this._delegate):(e==null?void 0:e.source)==="server"?n=zM(this._delegate):n=Us(this._delegate),n.then(r=>new xd(this.firestore,new Br(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=xT(e),r=NT(e,s=>new xd(this.firestore,new Br(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return BE(this._delegate,n,r)}withConverter(e){return new Ct(this.firestore,e?this._delegate.withConverter(Bs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class n${constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Aa(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class xd{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Ct(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Aa(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new n$(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Aa(this._firestore,r))})}isEqual(e){return VE(this._delegate,e._delegate)}}class ji extends Ct{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new en(this.firestore,e):null}doc(e){try{return e===void 0?new en(this.firestore,gn(this._delegate)):new en(this.firestore,gn(this._delegate,e))}catch(n){throw At(n,"doc()","CollectionReference.doc()")}}add(e){return Ul(this._delegate,e).then(n=>new en(this.firestore,n))}isEqual(e){return mE(this._delegate,e._delegate)}withConverter(e){return new ji(this.firestore,e?this._delegate.withConverter(Bs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function vs(t){return me(t,De)}/**
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
 */class Yp{constructor(...e){this._delegate=new $r(...e)}static documentId(){return new Yp(He.keyField().canonicalString())}isEqual(e){return e=K(e),e instanceof $r?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class ds{constructor(e){this._delegate=e}static serverTimestamp(){const e=tL();return e._methodName="FieldValue.serverTimestamp",new ds(e)}static delete(){const e=eL();return e._methodName="FieldValue.delete",new ds(e)}static arrayUnion(...e){const n=nL(...e);return n._methodName="FieldValue.arrayUnion",new ds(n)}static arrayRemove(...e){const n=rL(...e);return n._methodName="FieldValue.arrayRemove",new ds(n)}static increment(e){const n=sL(e);return n._methodName="FieldValue.increment",new ds(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const r$={Firestore:CT,GeoPoint:Rl,Timestamp:Le,Blob:wu,Transaction:AT,WriteBatch:RT,DocumentReference:en,DocumentSnapshot:Ca,Query:Ct,QueryDocumentSnapshot:Aa,QuerySnapshot:xd,CollectionReference:ji,FieldPath:Yp,FieldValue:ds,setLogLevel:t$,CACHE_SIZE_UNLIMITED:wM};function s$(t,e){t.INTERNAL.registerComponent(new vn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),s=n.getProvider("firestore").getImmediate();return e(r,s)},"PUBLIC").setServiceProps(Object.assign({},r$)))}/**
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
 */function i$(t){s$(t,(e,n)=>new CT(e,n,new e$)),t.registerVersion(JV,XV)}i$(Bl);const o$={class:"container"},a$=w("br",null,null,-1),c$=w("h4",{class:"title"},"Registre-se",-1),u$={class:"registerForm"},l$=["onSubmit"],h$={class:"field"},d$=w("label",{class:"label"},"Nome",-1),f$={class:"control"},p$={class:"field"},m$=w("label",{class:"label"},"Email",-1),g$={class:"control"},y$={class:"field"},v$=w("label",{class:"label"},"Senha",-1),_$={class:"control"},w$=w("div",{style:{display:"flex"}},[w("button",{class:"button is-primary login",type:"submit"},"Registrar"),w("p",{style:{padding:"2%"}},[Nn("Já possui um cadastro? "),w("a",{href:"signin"},"Entrar")])],-1),b$={__name:"RegisterView",setup(t){let e=qr({name:"",email:"",password:""});const n=wf(),r=uT(),s=Fu(),i=async()=>{try{const c=(await sw(n,e.email,e.password)).user,u=JSON.parse(JSON.stringify(c)),l=jn(Gt,"users");u.displayName=e.name,u.role="user",await Ul(l,u),console.log("Usuário criado:",c),o(e.email,e.password)}catch(a){console.log(a)}},o=async(a,c)=>{try{const l=(await hf(n,a,c)).user;console.log("Usuário logado:",l),r.dispatch("setUser",l),s.push("/threads")}catch(u){console.log(u)}};return(a,c)=>(Ie(),Ce("div",o$,[a$,c$,w("div",u$,[w("form",{class:"box mt-5",onSubmit:Zv(i,["prevent"])},[w("div",h$,[d$,w("div",f$,[Zt(w("input",{class:"input",type:"text","onUpdate:modelValue":c[0]||(c[0]=u=>ye(e).name=u),placeholder:""},null,512),[[mn,ye(e).name]])])]),w("div",p$,[m$,w("div",g$,[Zt(w("input",{class:"input",type:"email","onUpdate:modelValue":c[1]||(c[1]=u=>ye(e).email=u),placeholder:"e.g. alex@example.com"},null,512),[[mn,ye(e).email]])])]),w("div",y$,[v$,w("div",_$,[Zt(w("input",{class:"input",type:"password","onUpdate:modelValue":c[2]||(c[2]=u=>ye(e).password=u),placeholder:"********"},null,512),[[mn,ye(e).password]])])]),w$],40,l$)])]))}};var I$=function(t){return function(e){return!!e&&typeof e=="object"}(t)&&!function(e){var n=Object.prototype.toString.call(e);return n==="[object RegExp]"||n==="[object Date]"||function(r){return r.$$typeof===E$}(e)}(t)},E$=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function Oo(t,e){return e.clone!==!1&&e.isMergeableObject(t)?Ki(Array.isArray(t)?[]:{},t,e):t}function T$(t,e,n){return t.concat(e).map(function(r){return Oo(r,n)})}function Qy(t){return Object.keys(t).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(n){return e.propertyIsEnumerable(n)}):[]}(t))}function Yy(t,e){try{return e in t}catch{return!1}}function Ki(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||T$,n.isMergeableObject=n.isMergeableObject||I$,n.cloneUnlessOtherwiseSpecified=Oo;var r=Array.isArray(e);return r===Array.isArray(t)?r?n.arrayMerge(t,e,n):function(s,i,o){var a={};return o.isMergeableObject(s)&&Qy(s).forEach(function(c){a[c]=Oo(s[c],o)}),Qy(i).forEach(function(c){(function(u,l){return Yy(u,l)&&!(Object.hasOwnProperty.call(u,l)&&Object.propertyIsEnumerable.call(u,l))})(s,c)||(a[c]=Yy(s,c)&&o.isMergeableObject(i[c])?function(u,l){if(!l.customMerge)return Ki;var h=l.customMerge(u);return typeof h=="function"?h:Ki}(c,o)(s[c],i[c],o):Oo(i[c],o))}),a}(t,e,n):Oo(e,n)}Ki.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,r){return Ki(n,r,e)},{})};var S$=Ki;function DT(t){var e=(t=t||{}).storage||window&&window.localStorage,n=t.key||"vuex";function r(l,h){var d=h.getItem(l);try{return typeof d=="string"?JSON.parse(d):typeof d=="object"?d:void 0}catch{}}function s(){return!0}function i(l,h,d){return d.setItem(l,JSON.stringify(h))}function o(l,h){return Array.isArray(h)?h.reduce(function(d,f){return function(b,S,A,E){return!/^(__proto__|constructor|prototype)$/.test(S)&&((S=S.split?S.split("."):S.slice(0)).slice(0,-1).reduce(function(x,j){return x[j]=x[j]||{}},b)[S.pop()]=A),b}(d,f,(g=l,(g=((y=f).split?y.split("."):y).reduce(function(b,S){return b&&b[S]},g))===void 0?void 0:g));var g,y},{}):l}function a(l){return function(h){return l.subscribe(h)}}(t.assertStorage||function(){e.setItem("@@",1),e.removeItem("@@")})(e);var c,u=function(){return(t.getState||r)(n,e)};return t.fetchBeforeUse&&(c=u()),function(l){t.fetchBeforeUse||(c=u()),typeof c=="object"&&c!==null&&(l.replaceState(t.overwrite?c:S$(l.state,c,{arrayMerge:t.arrayMerger||function(h,d){return d},clone:!1})),(t.rehydrated||function(){})(l)),(t.subscriber||a)(l)(function(h,d){(t.filter||s)(h)&&(t.setState||i)(n,(t.reducer||o)(d,t.paths),e)})}}const k$={class:"container"},C$=w("br",null,null,-1),A$=w("h4",{class:"title"},"Entrar",-1),R$={class:"registerForm"},x$=["onSubmit"],N$={class:"field"},D$=w("label",{class:"label"},"Email",-1),O$={class:"control"},P$={class:"field"},M$=w("label",{class:"label"},"Senha",-1),L$={class:"control"},F$=w("div",{style:{display:"flex"}},[w("button",{class:"button is-primary login",type:"submit"},"Entrar"),w("p",{style:{padding:"2%"}},[Nn("Não possui cadastro? "),w("a",{href:"register"},"Registrar-se")])],-1),U$={__name:"SigninView",setup(t){const e=wf(),n=Fu(),r=uT();let s=qr({name:"",email:"",password:""});const i=async()=>{const o=jn(Gt,"users");try{const a=await hf(e,s.email,s.password),c=JSON.parse(JSON.stringify(a.user));console.log(c.uid);let u=Pt(o,Fs("uid","==",c.uid));const h=(await Us(u)).docs[0].data();console.log("Usuário logado:",h),r.dispatch("setUser",h),n.push("/threads")}catch(a){console.log(a)}};return DT()(r),(o,a)=>(Ie(),Ce("div",k$,[C$,A$,w("div",R$,[w("form",{class:"box mt-5",onSubmit:Zv(i,["prevent"])},[w("div",N$,[D$,w("div",O$,[Zt(w("input",{class:"input",type:"email","onUpdate:modelValue":a[0]||(a[0]=c=>ye(s).email=c),placeholder:"e.g. alex@example.com"},null,512),[[mn,ye(s).email]])])]),w("div",P$,[M$,w("div",L$,[Zt(w("input",{class:"input",type:"password","onUpdate:modelValue":a[1]||(a[1]=c=>ye(s).password=c),placeholder:"********"},null,512),[[mn,ye(s).password]])])]),F$],40,x$)])]))}};const V$=t=>(Gd("data-v-870e2b0e"),t=t(),Wd(),t),$$={class:"container"},B$=V$(()=>w("h1",{class:"title has-text-centered is-1 mt-4"},"Trabalhos",-1)),q$={class:"columns is-centered"},j$={class:"column is-10"},K$={class:"mt-6 mb-6 is-flex is-justify-content-space-between"},H$={class:"columns is-multiline is-centered"},G$={class:"card-header"},W$={class:"card-header-title"},z$={class:"card-content"},Q$={class:"content"},Y$={class:"image-container"},J$=["src"],X$={class:"card-footer"},Z$={__name:"ThreadsView",setup(t){const e=ln([]),n=jn(Gt,"projetos"),r=JSON.parse(localStorage.vuex).user;qs(()=>{s()});const s=async()=>{const o=Pt(n,PE("created_at","desc"));(await Us(o)).forEach(c=>{e.value.push(c)})},i=(o,a)=>!o||!Array.isArray(o)?!1:o.some(c=>c.email===a);return(o,a)=>(Ie(),Ce("div",$$,[B$,w("div",q$,[w("div",j$,[w("div",K$,[Me(ye(br),{to:"/novo-trabalho",class:"button has-text-centered"},{default:zn(()=>[Nn("Novo trabalho")]),_:1}),Me(ye(br),{to:"/logout",class:"button has-text-centered",style:{"background-color":"rgb(243, 125, 125)"}},{default:zn(()=>[Nn("Sair")]),_:1})])])]),w("div",H$,[(Ie(!0),Ce(vt,null,Ei(e.value,c=>{var u;return Ie(),Ce("div",{key:c.id,class:"card column is-two-fifths"},[w("header",G$,[w("p",W$,Ln(c.data().nome),1)]),w("div",z$,[w("div",Q$,[w("h1",null,Ln(c.data().titulo),1),w("p",null,Ln(c.data().descricao),1),w("div",Y$,[w("img",{class:"image has-image-centered",src:c.data().url_imagem,alt:""},null,8,J$)])])]),w("footer",X$,[Me(ye(br),{to:"/projeto/"+c.id,class:"card-footer-item"},{default:zn(()=>[Nn("Fluxo")]),_:2},1032,["to"]),i(c.data().administradores,(u=ye(r))==null?void 0:u.email)?(Ie(),Wv(ye(br),{key:0,to:"/dashboard/"+c.id,class:"card-footer-item"},{default:zn(()=>[Nn("Editar")]),_:2},1032,["to"])):ta("",!0)])])}),128))])]))}},Jy=Vu(Z$,[["__scopeId","data-v-870e2b0e"]]),eB=wf(),tB=mC({history:Ok("/tcc-odonto/"),routes:[{path:"",name:"threads",component:Jy},{path:"/projeto/:id",name:"projeto",component:AF},{path:"/dashboard/:id",name:"dashboard",component:aU,beforeEnter:(t,e,n)=>{Er.getters.getUser?n():n("/register")}},{path:"/register",name:"register",component:b$},{path:"/threads",name:"ThreadsView",component:Jy,beforeEnter:(t,e,n)=>{Er.getters.getUser?n():n("/dashboard")}},{path:"/signin",name:"signin",component:U$},{path:"/novo-trabalho",name:"novoTrabalho",component:tV,beforeEnter:(t,e,n)=>{Er.getters.getUser?n():n("/signin")}},{path:"/nova-pergunta/:projetoId",name:"novaPergunta",component:By},{path:"/editar-pergunta/:idPergunta",name:"editarPergunta",component:By},{path:"/logout",name:"logout",beforeEnter:async(t,e,n)=>{await eB.signOut(),Er.dispatch("setUser",null),n("signin")}}]});DT()(Er);const Jp=ok(OC);Jp.use(tB);Jp.use(Er);Jp.mount("#app");
