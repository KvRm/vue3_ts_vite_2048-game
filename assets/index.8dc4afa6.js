(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function va(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const bl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yl=va(bl);function So(e){return!!e||e===""}function ba(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=he(r)?_l(r):ba(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(he(e))return e;if(le(e))return e}}const xl=/;(?![^(]*\))/g,wl=/:(.+)/;function _l(e){const t={};return e.split(xl).forEach(n=>{if(n){const r=n.split(wl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ya(e){let t="";if(he(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const r=ya(e[n]);r&&(t+=r+" ")}else if(le(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const rh=e=>he(e)?e:e==null?"":U(e)||le(e)&&(e.toString===To||!W(e.toString))?JSON.stringify(e,Co,2):String(e),Co=(e,t)=>t&&t.__v_isRef?Co(e,t.value):Bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ro(t)?{[`Set(${t.size})`]:[...t.values()]}:le(t)&&!U(t)&&!No(t)?String(t):t,re={},Ht=[],De=()=>{},kl=()=>!1,El=/^on[^a-z]/,dr=e=>El.test(e),xa=e=>e.startsWith("onUpdate:"),we=Object.assign,wa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Al=Object.prototype.hasOwnProperty,q=(e,t)=>Al.call(e,t),U=Array.isArray,Bt=e=>mr(e)==="[object Map]",Ro=e=>mr(e)==="[object Set]",W=e=>typeof e=="function",he=e=>typeof e=="string",_a=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",Io=e=>le(e)&&W(e.then)&&W(e.catch),To=Object.prototype.toString,mr=e=>To.call(e),Ol=e=>mr(e).slice(8,-1),No=e=>mr(e)==="[object Object]",ka=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Xn=va(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Pl=/-(\w)/g,Xe=hr(e=>e.replace(Pl,(t,n)=>n?n.toUpperCase():"")),Sl=/\B([A-Z])/g,en=hr(e=>e.replace(Sl,"-$1").toLowerCase()),pr=hr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Sr=hr(e=>e?`on${pr(e)}`:""),yn=(e,t)=>!Object.is(e,t),Cr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},tr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Cl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let si;const Rl=()=>si||(si=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ye;class Mo{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ye,!t&&Ye&&(this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ye;try{return Ye=this,t()}finally{Ye=n}}}on(){Ye=this}off(){Ye=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function Lo(e){return new Mo(e)}function Il(e,t=Ye){t&&t.active&&t.effects.push(e)}const Ea=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Fo=e=>(e.w&gt)>0,jo=e=>(e.n&gt)>0,Tl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=gt},Nl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Fo(a)&&!jo(a)?a.delete(e):t[n++]=a,a.w&=~gt,a.n&=~gt}t.length=n}},Hr=new WeakMap;let fn=0,gt=1;const Br=30;let Le;const St=Symbol(""),Ur=Symbol("");class Aa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Il(this,r)}run(){if(!this.active)return this.fn();let t=Le,n=mt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Le,Le=this,mt=!0,gt=1<<++fn,fn<=Br?Tl(this):li(this),this.fn()}finally{fn<=Br&&Nl(this),gt=1<<--fn,Le=this.parent,mt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Le===this?this.deferStop=!0:this.active&&(li(this),this.onStop&&this.onStop(),this.active=!1)}}function li(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let mt=!0;const $o=[];function tn(){$o.push(mt),mt=!1}function nn(){const e=$o.pop();mt=e===void 0?!0:e}function Ce(e,t,n){if(mt&&Le){let r=Hr.get(e);r||Hr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ea()),zo(a)}}function zo(e,t){let n=!1;fn<=Br?jo(e)||(e.n|=gt,n=!Fo(e)):n=!e.has(Le),n&&(e.add(Le),Le.deps.push(e))}function et(e,t,n,r,a,i){const o=Hr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&U(e))o.forEach((l,f)=>{(f==="length"||f>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":U(e)?ka(n)&&s.push(o.get("length")):(s.push(o.get(St)),Bt(e)&&s.push(o.get(Ur)));break;case"delete":U(e)||(s.push(o.get(St)),Bt(e)&&s.push(o.get(Ur)));break;case"set":Bt(e)&&s.push(o.get(St));break}if(s.length===1)s[0]&&Wr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Wr(Ea(l))}}function Wr(e,t){const n=U(e)?e:[...e];for(const r of n)r.computed&&ci(r);for(const r of n)r.computed||ci(r)}function ci(e,t){(e!==Le||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ml=va("__proto__,__v_isRef,__isVue"),Do=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(_a)),Ll=Oa(),Fl=Oa(!1,!0),jl=Oa(!0),fi=$l();function $l(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)Ce(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(G)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){tn();const r=G(this)[t].apply(this,n);return nn(),r}}),e}function Oa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?ec:Yo:t?Wo:Uo).get(r))return r;const o=U(r);if(!e&&o&&q(fi,a))return Reflect.get(fi,a,i);const s=Reflect.get(r,a,i);return(_a(a)?Do.has(a):Ml(a))||(e||Ce(r,"get",a),t)?s:ue(s)?o&&ka(a)?s:s.value:le(s)?e?Ko(s):rn(s):s}}const zl=Ho(),Dl=Ho(!0);function Ho(e=!1){return function(n,r,a,i){let o=n[r];if(Vt(o)&&ue(o)&&!ue(a))return!1;if(!e&&(!nr(a)&&!Vt(a)&&(o=G(o),a=G(a)),!U(n)&&ue(o)&&!ue(a)))return o.value=a,!0;const s=U(n)&&ka(r)?Number(r)<n.length:q(n,r),l=Reflect.set(n,r,a,i);return n===G(i)&&(s?yn(a,o)&&et(n,"set",r,a):et(n,"add",r,a)),l}}function Hl(e,t){const n=q(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&et(e,"delete",t,void 0),r}function Bl(e,t){const n=Reflect.has(e,t);return(!_a(t)||!Do.has(t))&&Ce(e,"has",t),n}function Ul(e){return Ce(e,"iterate",U(e)?"length":St),Reflect.ownKeys(e)}const Bo={get:Ll,set:zl,deleteProperty:Hl,has:Bl,ownKeys:Ul},Wl={get:jl,set(e,t){return!0},deleteProperty(e,t){return!0}},Yl=we({},Bo,{get:Fl,set:Dl}),Pa=e=>e,gr=e=>Reflect.getPrototypeOf(e);function Ln(e,t,n=!1,r=!1){e=e.__v_raw;const a=G(e),i=G(t);n||(t!==i&&Ce(a,"get",t),Ce(a,"get",i));const{has:o}=gr(a),s=r?Pa:n?Ra:xn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Fn(e,t=!1){const n=this.__v_raw,r=G(n),a=G(e);return t||(e!==a&&Ce(r,"has",e),Ce(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function jn(e,t=!1){return e=e.__v_raw,!t&&Ce(G(e),"iterate",St),Reflect.get(e,"size",e)}function ui(e){e=G(e);const t=G(this);return gr(t).has.call(t,e)||(t.add(e),et(t,"add",e,e)),this}function di(e,t){t=G(t);const n=G(this),{has:r,get:a}=gr(n);let i=r.call(n,e);i||(e=G(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?yn(t,o)&&et(n,"set",e,t):et(n,"add",e,t),this}function mi(e){const t=G(this),{has:n,get:r}=gr(t);let a=n.call(t,e);a||(e=G(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&et(t,"delete",e,void 0),i}function hi(){const e=G(this),t=e.size!==0,n=e.clear();return t&&et(e,"clear",void 0,void 0),n}function $n(e,t){return function(r,a){const i=this,o=i.__v_raw,s=G(o),l=t?Pa:e?Ra:xn;return!e&&Ce(s,"iterate",St),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function zn(e,t,n){return function(...r){const a=this.__v_raw,i=G(a),o=Bt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?Pa:t?Ra:xn;return!t&&Ce(i,"iterate",l?Ur:St),{next(){const{value:d,done:h}=f.next();return h?{value:d,done:h}:{value:s?[c(d[0]),c(d[1])]:c(d),done:h}},[Symbol.iterator](){return this}}}}function st(e){return function(...t){return e==="delete"?!1:this}}function Kl(){const e={get(i){return Ln(this,i)},get size(){return jn(this)},has:Fn,add:ui,set:di,delete:mi,clear:hi,forEach:$n(!1,!1)},t={get(i){return Ln(this,i,!1,!0)},get size(){return jn(this)},has:Fn,add:ui,set:di,delete:mi,clear:hi,forEach:$n(!1,!0)},n={get(i){return Ln(this,i,!0)},get size(){return jn(this,!0)},has(i){return Fn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:$n(!0,!1)},r={get(i){return Ln(this,i,!0,!0)},get size(){return jn(this,!0)},has(i){return Fn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:$n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=zn(i,!1,!1),n[i]=zn(i,!0,!1),t[i]=zn(i,!1,!0),r[i]=zn(i,!0,!0)}),[e,n,t,r]}const[Vl,ql,Xl,Gl]=Kl();function Sa(e,t){const n=t?e?Gl:Xl:e?ql:Vl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(q(n,a)&&a in r?n:r,a,i)}const Ql={get:Sa(!1,!1)},Jl={get:Sa(!1,!0)},Zl={get:Sa(!0,!1)},Uo=new WeakMap,Wo=new WeakMap,Yo=new WeakMap,ec=new WeakMap;function tc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nc(e){return e.__v_skip||!Object.isExtensible(e)?0:tc(Ol(e))}function rn(e){return Vt(e)?e:Ca(e,!1,Bo,Ql,Uo)}function rc(e){return Ca(e,!1,Yl,Jl,Wo)}function Ko(e){return Ca(e,!0,Wl,Zl,Yo)}function Ca(e,t,n,r,a){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=nc(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function ht(e){return Vt(e)?ht(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function nr(e){return!!(e&&e.__v_isShallow)}function Vo(e){return ht(e)||Vt(e)}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function qt(e){return tr(e,"__v_skip",!0),e}const xn=e=>le(e)?rn(e):e,Ra=e=>le(e)?Ko(e):e;function qo(e){mt&&Le&&(e=G(e),zo(e.dep||(e.dep=Ea())))}function Xo(e,t){e=G(e),e.dep&&Wr(e.dep)}function ue(e){return!!(e&&e.__v_isRef===!0)}function Ia(e){return Go(e,!1)}function ac(e){return Go(e,!0)}function Go(e,t){return ue(e)?e:new ic(e,t)}class ic{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:G(t),this._value=n?t:xn(t)}get value(){return qo(this),this._value}set value(t){const n=this.__v_isShallow||nr(t)||Vt(t);t=n?t:G(t),yn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:xn(t),Xo(this))}}function Ut(e){return ue(e)?e.value:e}const oc={get:(e,t,n)=>Ut(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ue(a)&&!ue(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Qo(e){return ht(e)?e:new Proxy(e,oc)}function sc(e){const t=U(e)?new Array(e.length):{};for(const n in e)t[n]=cc(e,n);return t}class lc{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function cc(e,t,n){const r=e[t];return ue(r)?r:new lc(e,t,n)}var Jo;class fc{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Jo]=!1,this._dirty=!0,this.effect=new Aa(t,()=>{this._dirty||(this._dirty=!0,Xo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=G(this);return qo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Jo="__v_isReadonly";function uc(e,t,n=!1){let r,a;const i=W(e);return i?(r=e,a=De):(r=e.get,a=e.set),new fc(r,a,i||!a,n)}function pt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){vr(i,t,n)}return a}function He(e,t,n,r){if(W(e)){const i=pt(e,t,n,r);return i&&Io(i)&&i.catch(o=>{vr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(He(e[i],t,n,r));return a}function vr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){pt(l,null,10,[e,o,s]);return}}dc(e,n,a,r)}function dc(e,t,n,r=!0){console.error(e)}let wn=!1,Yr=!1;const ye=[];let Ve=0;const Wt=[];let Qe=null,Et=0;const Zo=Promise.resolve();let Ta=null;function Na(e){const t=Ta||Zo;return e?t.then(this?e.bind(this):e):t}function mc(e){let t=Ve+1,n=ye.length;for(;t<n;){const r=t+n>>>1;_n(ye[r])<e?t=r+1:n=r}return t}function Ma(e){(!ye.length||!ye.includes(e,wn&&e.allowRecurse?Ve+1:Ve))&&(e.id==null?ye.push(e):ye.splice(mc(e.id),0,e),es())}function es(){!wn&&!Yr&&(Yr=!0,Ta=Zo.then(ns))}function hc(e){const t=ye.indexOf(e);t>Ve&&ye.splice(t,1)}function pc(e){U(e)?Wt.push(...e):(!Qe||!Qe.includes(e,e.allowRecurse?Et+1:Et))&&Wt.push(e),es()}function pi(e,t=wn?Ve+1:0){for(;t<ye.length;t++){const n=ye[t];n&&n.pre&&(ye.splice(t,1),t--,n())}}function ts(e){if(Wt.length){const t=[...new Set(Wt)];if(Wt.length=0,Qe){Qe.push(...t);return}for(Qe=t,Qe.sort((n,r)=>_n(n)-_n(r)),Et=0;Et<Qe.length;Et++)Qe[Et]();Qe=null,Et=0}}const _n=e=>e.id==null?1/0:e.id,gc=(e,t)=>{const n=_n(e)-_n(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ns(e){Yr=!1,wn=!0,ye.sort(gc);const t=De;try{for(Ve=0;Ve<ye.length;Ve++){const n=ye[Ve];n&&n.active!==!1&&pt(n,null,14)}}finally{Ve=0,ye.length=0,ts(),wn=!1,Ta=null,(ye.length||Wt.length)&&ns()}}function vc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||re;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[c]||re;h&&(a=n.map(p=>p.trim())),d&&(a=n.map(Cl))}let s,l=r[s=Sr(t)]||r[s=Sr(Xe(t))];!l&&i&&(l=r[s=Sr(en(t))]),l&&He(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,He(f,e,6,a)}}function rs(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!W(e)){const l=f=>{const c=rs(f,t,!0);c&&(s=!0,we(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(le(e)&&r.set(e,null),null):(U(i)?i.forEach(l=>o[l]=null):we(o,i),le(e)&&r.set(e,o),o)}function br(e,t){return!e||!dr(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,en(t))||q(e,t))}let je=null,as=null;function rr(e){const t=je;return je=e,as=e&&e.type.__scopeId||null,t}function bc(e,t=je,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ai(-1);const i=rr(t);let o;try{o=e(...a)}finally{rr(i),r._d&&Ai(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Rr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:d,data:h,setupState:p,ctx:k,inheritAttrs:S}=e;let T,v;const w=rr(e);try{if(n.shapeFlag&4){const z=a||r;T=Ke(c.call(z,z,d,i,p,h,k)),v=l}else{const z=t;T=Ke(z.length>1?z(i,{attrs:l,slots:s,emit:f}):z(i,null)),v=t.props?l:yc(l)}}catch(z){dn.length=0,vr(z,e,1),T=Se(Rt)}let N=T;if(v&&S!==!1){const z=Object.keys(v),{shapeFlag:D}=N;z.length&&D&7&&(o&&z.some(xa)&&(v=xc(v,o)),N=Xt(N,v))}return n.dirs&&(N=Xt(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),T=N,rr(w),T}const yc=e=>{let t;for(const n in e)(n==="class"||n==="style"||dr(n))&&((t||(t={}))[n]=e[n]);return t},xc=(e,t)=>{const n={};for(const r in e)(!xa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function wc(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?gi(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const h=c[d];if(o[h]!==r[h]&&!br(f,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?gi(r,o,f):!0:!!o;return!1}function gi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!br(n,i))return!0}return!1}function _c({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const kc=e=>e.__isSuspense;function Ec(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):pc(e)}function Gn(e,t){if(be){let n=be.provides;const r=be.parent&&be.parent.provides;r===n&&(n=be.provides=Object.create(r)),n[e]=t}}function Ze(e,t,n=!1){const r=be||je;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&W(t)?t.call(r.proxy):t}}const vi={};function Yt(e,t,n){return is(e,t,n)}function is(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=re){const s=be;let l,f=!1,c=!1;if(ue(e)?(l=()=>e.value,f=nr(e)):ht(e)?(l=()=>e,r=!0):U(e)?(c=!0,f=e.some(v=>ht(v)||nr(v)),l=()=>e.map(v=>{if(ue(v))return v.value;if(ht(v))return $t(v);if(W(v))return pt(v,s,2)})):W(e)?t?l=()=>pt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),He(e,s,3,[h])}:l=De,t&&r){const v=l;l=()=>$t(v())}let d,h=v=>{d=T.onStop=()=>{pt(v,s,4)}};if(En)return h=De,t?n&&He(t,s,3,[l(),c?[]:void 0,h]):l(),De;let p=c?[]:vi;const k=()=>{if(!!T.active)if(t){const v=T.run();(r||f||(c?v.some((w,N)=>yn(w,p[N])):yn(v,p)))&&(d&&d(),He(t,s,3,[v,p===vi?void 0:p,h]),p=v)}else T.run()};k.allowRecurse=!!t;let S;a==="sync"?S=k:a==="post"?S=()=>Ae(k,s&&s.suspense):(k.pre=!0,s&&(k.id=s.uid),S=()=>Ma(k));const T=new Aa(l,S);return t?n?k():p=T.run():a==="post"?Ae(T.run.bind(T),s&&s.suspense):T.run(),()=>{T.stop(),s&&s.scope&&wa(s.scope.effects,T)}}function Ac(e,t,n){const r=this.proxy,a=he(e)?e.includes(".")?os(r,e):()=>r[e]:e.bind(r,r);let i;W(t)?i=t:(i=t.handler,n=t);const o=be;Gt(this);const s=is(a,i.bind(r),n);return o?Gt(o):Ct(),s}function os(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function $t(e,t){if(!le(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ue(e))$t(e.value,t);else if(U(e))for(let n=0;n<e.length;n++)$t(e[n],t);else if(Ro(e)||Bt(e))e.forEach(n=>{$t(n,t)});else if(No(e))for(const n in e)$t(e[n],t);return e}function an(e){return W(e)?{setup:e,name:e.name}:e}const Qn=e=>!!e.type.__asyncLoader,ss=e=>e.type.__isKeepAlive;function Oc(e,t){ls(e,"a",t)}function Pc(e,t){ls(e,"da",t)}function ls(e,t,n=be){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(yr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ss(a.parent.vnode)&&Sc(r,t,n,a),a=a.parent}}function Sc(e,t,n,r){const a=yr(t,e,r,!0);La(()=>{wa(r[t],a)},n)}function yr(e,t,n=be,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;tn(),Gt(n);const s=He(t,n,e,o);return Ct(),nn(),s});return r?a.unshift(i):a.push(i),i}}const at=e=>(t,n=be)=>(!En||e==="sp")&&yr(e,(...r)=>t(...r),n),Cc=at("bm"),Rc=at("m"),Ic=at("bu"),Tc=at("u"),Nc=at("bum"),La=at("um"),Mc=at("sp"),Lc=at("rtg"),Fc=at("rtc");function jc(e,t=be){yr("ec",e,t)}function wt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(tn(),He(l,n,8,[e.el,s,e,t]),nn())}}const Fa="components";function $c(e,t){return fs(Fa,e,!0,t)||e}const cs=Symbol();function ah(e){return he(e)?fs(Fa,e,!1)||e:e||cs}function fs(e,t,n=!0,r=!1){const a=je||be;if(a){const i=a.type;if(e===Fa){const s=pf(i,!1);if(s&&(s===t||s===Xe(t)||s===pr(Xe(t))))return i}const o=bi(a[e]||i[e],t)||bi(a.appContext[e],t);return!o&&r?i:o}}function bi(e,t){return e&&(e[t]||e[Xe(t)]||e[pr(Xe(t))])}function ih(e,t,n,r){let a;const i=n&&n[r];if(U(e)||he(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(le(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Kr=e=>e?As(e)?Ha(e)||e.proxy:Kr(e.parent):null,ar=we(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Kr(e.parent),$root:e=>Kr(e.root),$emit:e=>e.emit,$options:e=>ja(e),$forceUpdate:e=>e.f||(e.f=()=>Ma(e.update)),$nextTick:e=>e.n||(e.n=Na.bind(e.proxy)),$watch:e=>Ac.bind(e)}),zc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==re&&q(r,t))return o[t]=1,r[t];if(a!==re&&q(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&q(f,t))return o[t]=3,i[t];if(n!==re&&q(n,t))return o[t]=4,n[t];Vr&&(o[t]=0)}}const c=ar[t];let d,h;if(c)return t==="$attrs"&&Ce(e,"get",t),c(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==re&&q(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,q(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==re&&q(a,t)?(a[t]=n,!0):r!==re&&q(r,t)?(r[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==re&&q(e,o)||t!==re&&q(t,o)||(s=i[0])&&q(s,o)||q(r,o)||q(ar,o)||q(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Vr=!0;function Dc(e){const t=ja(e),n=e.proxy,r=e.ctx;Vr=!1,t.beforeCreate&&yi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:d,mounted:h,beforeUpdate:p,updated:k,activated:S,deactivated:T,beforeDestroy:v,beforeUnmount:w,destroyed:N,unmounted:z,render:D,renderTracked:Q,renderTriggered:H,errorCaptured:K,serverPrefetch:oe,expose:ge,inheritAttrs:_e,components:Ie,directives:ot,filters:Oe}=t;if(f&&Hc(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const te in o){const Z=o[te];W(Z)&&(r[te]=Z.bind(n))}if(a){const te=a.call(n,n);le(te)&&(e.data=rn(te))}if(Vr=!0,i)for(const te in i){const Z=i[te],Te=W(Z)?Z.bind(n,n):W(Z.get)?Z.get.bind(n,n):De,xt=!W(Z)&&W(Z.set)?Z.set.bind(n):De,Ne=se({get:Te,set:xt});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>Ne.value,set:ke=>Ne.value=ke})}if(s)for(const te in s)us(s[te],r,n,te);if(l){const te=W(l)?l.call(n):l;Reflect.ownKeys(te).forEach(Z=>{Gn(Z,te[Z])})}c&&yi(c,e,"c");function de(te,Z){U(Z)?Z.forEach(Te=>te(Te.bind(n))):Z&&te(Z.bind(n))}if(de(Cc,d),de(Rc,h),de(Ic,p),de(Tc,k),de(Oc,S),de(Pc,T),de(jc,K),de(Fc,Q),de(Lc,H),de(Nc,w),de(La,z),de(Mc,oe),U(ge))if(ge.length){const te=e.exposed||(e.exposed={});ge.forEach(Z=>{Object.defineProperty(te,Z,{get:()=>n[Z],set:Te=>n[Z]=Te})})}else e.exposed||(e.exposed={});D&&e.render===De&&(e.render=D),_e!=null&&(e.inheritAttrs=_e),Ie&&(e.components=Ie),ot&&(e.directives=ot)}function Hc(e,t,n=De,r=!1){U(e)&&(e=qr(e));for(const a in e){const i=e[a];let o;le(i)?"default"in i?o=Ze(i.from||a,i.default,!0):o=Ze(i.from||a):o=Ze(i),ue(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function yi(e,t,n){He(U(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function us(e,t,n,r){const a=r.includes(".")?os(n,r):()=>n[r];if(he(e)){const i=t[e];W(i)&&Yt(a,i)}else if(W(e))Yt(a,e.bind(n));else if(le(e))if(U(e))e.forEach(i=>us(i,t,n,r));else{const i=W(e.handler)?e.handler.bind(n):t[e.handler];W(i)&&Yt(a,i,e)}}function ja(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>ir(l,f,o,!0)),ir(l,t,o)),le(t)&&i.set(t,l),l}function ir(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&ir(e,i,n,!0),a&&a.forEach(o=>ir(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Bc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Bc={data:xi,props:kt,emits:kt,methods:kt,computed:kt,beforeCreate:xe,created:xe,beforeMount:xe,mounted:xe,beforeUpdate:xe,updated:xe,beforeDestroy:xe,beforeUnmount:xe,destroyed:xe,unmounted:xe,activated:xe,deactivated:xe,errorCaptured:xe,serverPrefetch:xe,components:kt,directives:kt,watch:Wc,provide:xi,inject:Uc};function xi(e,t){return t?e?function(){return we(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function Uc(e,t){return kt(qr(e),qr(t))}function qr(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function xe(e,t){return e?[...new Set([].concat(e,t))]:t}function kt(e,t){return e?we(we(Object.create(null),e),t):t}function Wc(e,t){if(!e)return t;if(!t)return e;const n=we(Object.create(null),e);for(const r in t)n[r]=xe(e[r],t[r]);return n}function Yc(e,t,n,r=!1){const a={},i={};tr(i,xr,1),e.propsDefaults=Object.create(null),ds(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:rc(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Kc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=G(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let h=c[d];if(br(e.emitsOptions,h))continue;const p=t[h];if(l)if(q(i,h))p!==i[h]&&(i[h]=p,f=!0);else{const k=Xe(h);a[k]=Xr(l,s,k,p,e,!1)}else p!==i[h]&&(i[h]=p,f=!0)}}}else{ds(e,t,a,i)&&(f=!0);let c;for(const d in s)(!t||!q(t,d)&&((c=en(d))===d||!q(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=Xr(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!q(t,d)&&!0)&&(delete i[d],f=!0)}f&&et(e,"set","$attrs")}function ds(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Xn(l))continue;const f=t[l];let c;a&&q(a,c=Xe(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:br(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=G(n),f=s||re;for(let c=0;c<i.length;c++){const d=i[c];n[d]=Xr(a,l,d,f[d],e,!q(f,d))}}return o}function Xr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=q(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&W(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Gt(a),r=f[n]=l.call(null,t),Ct())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===en(n))&&(r=!0))}return r}function ms(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!W(e)){const c=d=>{l=!0;const[h,p]=ms(d,t,!0);we(o,h),p&&s.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return le(e)&&r.set(e,Ht),Ht;if(U(i))for(let c=0;c<i.length;c++){const d=Xe(i[c]);wi(d)&&(o[d]=re)}else if(i)for(const c in i){const d=Xe(c);if(wi(d)){const h=i[c],p=o[d]=U(h)||W(h)?{type:h}:h;if(p){const k=Ei(Boolean,p.type),S=Ei(String,p.type);p[0]=k>-1,p[1]=S<0||k<S,(k>-1||q(p,"default"))&&s.push(d)}}}const f=[o,s];return le(e)&&r.set(e,f),f}function wi(e){return e[0]!=="$"}function _i(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function ki(e,t){return _i(e)===_i(t)}function Ei(e,t){return U(t)?t.findIndex(n=>ki(n,e)):W(t)&&ki(t,e)?0:-1}const hs=e=>e[0]==="_"||e==="$stable",$a=e=>U(e)?e.map(Ke):[Ke(e)],Vc=(e,t,n)=>{if(t._n)return t;const r=bc((...a)=>$a(t(...a)),n);return r._c=!1,r},ps=(e,t,n)=>{const r=e._ctx;for(const a in e){if(hs(a))continue;const i=e[a];if(W(i))t[a]=Vc(a,i,r);else if(i!=null){const o=$a(i);t[a]=()=>o}}},gs=(e,t)=>{const n=$a(t);e.slots.default=()=>n},qc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=G(t),tr(t,"_",n)):ps(t,e.slots={})}else e.slots={},t&&gs(e,t);tr(e.slots,xr,1)},Xc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=re;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(we(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ps(t,a)),o=t}else t&&(gs(e,t),o={default:1});if(i)for(const s in a)!hs(s)&&!(s in o)&&delete a[s]};function vs(){return{app:null,config:{isNativeTag:kl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gc=0;function Qc(e,t){return function(r,a=null){W(r)||(r=Object.assign({},r)),a!=null&&!le(a)&&(a=null);const i=vs(),o=new Set;let s=!1;const l=i.app={_uid:Gc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:vf,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&W(f.install)?(o.add(f),f.install(l,...c)):W(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,d){if(!s){const h=Se(r,a);return h.appContext=i,c&&t?t(h,f):e(h,f,d),s=!0,l._container=f,f.__vue_app__=l,Ha(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l}};return l}}function Gr(e,t,n,r,a=!1){if(U(e)){e.forEach((h,p)=>Gr(h,t&&(U(t)?t[p]:t),n,r,a));return}if(Qn(r)&&!a)return;const i=r.shapeFlag&4?Ha(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===re?s.refs={}:s.refs,d=s.setupState;if(f!=null&&f!==l&&(he(f)?(c[f]=null,q(d,f)&&(d[f]=null)):ue(f)&&(f.value=null)),W(l))pt(l,s,12,[o,c]);else{const h=he(l),p=ue(l);if(h||p){const k=()=>{if(e.f){const S=h?q(d,l)?d[l]:c[l]:l.value;a?U(S)&&wa(S,i):U(S)?S.includes(i)||S.push(i):h?(c[l]=[i],q(d,l)&&(d[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else h?(c[l]=o,q(d,l)&&(d[l]=o)):p&&(l.value=o,e.k&&(c[e.k]=o))};o?(k.id=-1,Ae(k,n)):k()}}}const Ae=Ec;function Jc(e){return Zc(e)}function Zc(e,t){const n=Rl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:d,nextSibling:h,setScopeId:p=De,insertStaticContent:k}=e,S=(u,m,g,b=null,x=null,A=null,C=!1,E=null,O=!!m.dynamicChildren)=>{if(u===m)return;u&&!ln(u,m)&&(b=P(u),ke(u,x,A,!0),u=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:_,ref:j,shapeFlag:M}=m;switch(_){case za:T(u,m,g,b);break;case Rt:v(u,m,g,b);break;case Ir:u==null&&w(m,g,b,C);break;case Je:Ie(u,m,g,b,x,A,C,E,O);break;default:M&1?D(u,m,g,b,x,A,C,E,O):M&6?ot(u,m,g,b,x,A,C,E,O):(M&64||M&128)&&_.process(u,m,g,b,x,A,C,E,O,X)}j!=null&&x&&Gr(j,u&&u.ref,A,m||u,!m)},T=(u,m,g,b)=>{if(u==null)r(m.el=s(m.children),g,b);else{const x=m.el=u.el;m.children!==u.children&&f(x,m.children)}},v=(u,m,g,b)=>{u==null?r(m.el=l(m.children||""),g,b):m.el=u.el},w=(u,m,g,b)=>{[u.el,u.anchor]=k(u.children,m,g,b,u.el,u.anchor)},N=({el:u,anchor:m},g,b)=>{let x;for(;u&&u!==m;)x=h(u),r(u,g,b),u=x;r(m,g,b)},z=({el:u,anchor:m})=>{let g;for(;u&&u!==m;)g=h(u),a(u),u=g;a(m)},D=(u,m,g,b,x,A,C,E,O)=>{C=C||m.type==="svg",u==null?Q(m,g,b,x,A,C,E,O):oe(u,m,x,A,C,E,O)},Q=(u,m,g,b,x,A,C,E)=>{let O,_;const{type:j,props:M,shapeFlag:$,transition:B,dirs:V}=u;if(O=u.el=o(u.type,A,M&&M.is,M),$&8?c(O,u.children):$&16&&K(u.children,O,null,b,x,A&&j!=="foreignObject",C,E),V&&wt(u,null,b,"created"),M){for(const ee in M)ee!=="value"&&!Xn(ee)&&i(O,ee,null,M[ee],A,u.children,b,x,R);"value"in M&&i(O,"value",null,M.value),(_=M.onVnodeBeforeMount)&&We(_,b,u)}H(O,u,u.scopeId,C,b),V&&wt(u,null,b,"beforeMount");const ne=(!x||x&&!x.pendingBranch)&&B&&!B.persisted;ne&&B.beforeEnter(O),r(O,m,g),((_=M&&M.onVnodeMounted)||ne||V)&&Ae(()=>{_&&We(_,b,u),ne&&B.enter(O),V&&wt(u,null,b,"mounted")},x)},H=(u,m,g,b,x)=>{if(g&&p(u,g),b)for(let A=0;A<b.length;A++)p(u,b[A]);if(x){let A=x.subTree;if(m===A){const C=x.vnode;H(u,C,C.scopeId,C.slotScopeIds,x.parent)}}},K=(u,m,g,b,x,A,C,E,O=0)=>{for(let _=O;_<u.length;_++){const j=u[_]=E?ft(u[_]):Ke(u[_]);S(null,j,m,g,b,x,A,C,E)}},oe=(u,m,g,b,x,A,C)=>{const E=m.el=u.el;let{patchFlag:O,dynamicChildren:_,dirs:j}=m;O|=u.patchFlag&16;const M=u.props||re,$=m.props||re;let B;g&&_t(g,!1),(B=$.onVnodeBeforeUpdate)&&We(B,g,m,u),j&&wt(m,u,g,"beforeUpdate"),g&&_t(g,!0);const V=x&&m.type!=="foreignObject";if(_?ge(u.dynamicChildren,_,E,g,b,V,A):C||Z(u,m,E,null,g,b,V,A,!1),O>0){if(O&16)_e(E,m,M,$,g,b,x);else if(O&2&&M.class!==$.class&&i(E,"class",null,$.class,x),O&4&&i(E,"style",M.style,$.style,x),O&8){const ne=m.dynamicProps;for(let ee=0;ee<ne.length;ee++){const me=ne[ee],Me=M[me],Mt=$[me];(Mt!==Me||me==="value")&&i(E,me,Me,Mt,x,u.children,g,b,R)}}O&1&&u.children!==m.children&&c(E,m.children)}else!C&&_==null&&_e(E,m,M,$,g,b,x);((B=$.onVnodeUpdated)||j)&&Ae(()=>{B&&We(B,g,m,u),j&&wt(m,u,g,"updated")},b)},ge=(u,m,g,b,x,A,C)=>{for(let E=0;E<m.length;E++){const O=u[E],_=m[E],j=O.el&&(O.type===Je||!ln(O,_)||O.shapeFlag&70)?d(O.el):g;S(O,_,j,null,b,x,A,C,!0)}},_e=(u,m,g,b,x,A,C)=>{if(g!==b){if(g!==re)for(const E in g)!Xn(E)&&!(E in b)&&i(u,E,g[E],null,C,m.children,x,A,R);for(const E in b){if(Xn(E))continue;const O=b[E],_=g[E];O!==_&&E!=="value"&&i(u,E,_,O,C,m.children,x,A,R)}"value"in b&&i(u,"value",g.value,b.value)}},Ie=(u,m,g,b,x,A,C,E,O)=>{const _=m.el=u?u.el:s(""),j=m.anchor=u?u.anchor:s("");let{patchFlag:M,dynamicChildren:$,slotScopeIds:B}=m;B&&(E=E?E.concat(B):B),u==null?(r(_,g,b),r(j,g,b),K(m.children,g,j,x,A,C,E,O)):M>0&&M&64&&$&&u.dynamicChildren?(ge(u.dynamicChildren,$,g,x,A,C,E),(m.key!=null||x&&m===x.subTree)&&bs(u,m,!0)):Z(u,m,g,j,x,A,C,E,O)},ot=(u,m,g,b,x,A,C,E,O)=>{m.slotScopeIds=E,u==null?m.shapeFlag&512?x.ctx.activate(m,g,b,C,O):Oe(m,g,b,x,A,C,O):ve(u,m,O)},Oe=(u,m,g,b,x,A,C)=>{const E=u.component=ff(u,b,x);if(ss(u)&&(E.ctx.renderer=X),uf(E),E.asyncDep){if(x&&x.registerDep(E,de),!u.el){const O=E.subTree=Se(Rt);v(null,O,m,g)}return}de(E,u,m,g,x,A,C)},ve=(u,m,g)=>{const b=m.component=u.component;if(wc(u,m,g))if(b.asyncDep&&!b.asyncResolved){te(b,m,g);return}else b.next=m,hc(b.update),b.update();else m.el=u.el,b.vnode=m},de=(u,m,g,b,x,A,C)=>{const E=()=>{if(u.isMounted){let{next:j,bu:M,u:$,parent:B,vnode:V}=u,ne=j,ee;_t(u,!1),j?(j.el=V.el,te(u,j,C)):j=V,M&&Cr(M),(ee=j.props&&j.props.onVnodeBeforeUpdate)&&We(ee,B,j,V),_t(u,!0);const me=Rr(u),Me=u.subTree;u.subTree=me,S(Me,me,d(Me.el),P(Me),u,x,A),j.el=me.el,ne===null&&_c(u,me.el),$&&Ae($,x),(ee=j.props&&j.props.onVnodeUpdated)&&Ae(()=>We(ee,B,j,V),x)}else{let j;const{el:M,props:$}=m,{bm:B,m:V,parent:ne}=u,ee=Qn(m);if(_t(u,!1),B&&Cr(B),!ee&&(j=$&&$.onVnodeBeforeMount)&&We(j,ne,m),_t(u,!0),M&&Y){const me=()=>{u.subTree=Rr(u),Y(M,u.subTree,u,x,null)};ee?m.type.__asyncLoader().then(()=>!u.isUnmounted&&me()):me()}else{const me=u.subTree=Rr(u);S(null,me,g,b,u,x,A),m.el=me.el}if(V&&Ae(V,x),!ee&&(j=$&&$.onVnodeMounted)){const me=m;Ae(()=>We(j,ne,me),x)}(m.shapeFlag&256||ne&&Qn(ne.vnode)&&ne.vnode.shapeFlag&256)&&u.a&&Ae(u.a,x),u.isMounted=!0,m=g=b=null}},O=u.effect=new Aa(E,()=>Ma(_),u.scope),_=u.update=()=>O.run();_.id=u.uid,_t(u,!0),_()},te=(u,m,g)=>{m.component=u;const b=u.vnode.props;u.vnode=m,u.next=null,Kc(u,m.props,b,g),Xc(u,m.children,g),tn(),pi(),nn()},Z=(u,m,g,b,x,A,C,E,O=!1)=>{const _=u&&u.children,j=u?u.shapeFlag:0,M=m.children,{patchFlag:$,shapeFlag:B}=m;if($>0){if($&128){xt(_,M,g,b,x,A,C,E,O);return}else if($&256){Te(_,M,g,b,x,A,C,E,O);return}}B&8?(j&16&&R(_,x,A),M!==_&&c(g,M)):j&16?B&16?xt(_,M,g,b,x,A,C,E,O):R(_,x,A,!0):(j&8&&c(g,""),B&16&&K(M,g,b,x,A,C,E,O))},Te=(u,m,g,b,x,A,C,E,O)=>{u=u||Ht,m=m||Ht;const _=u.length,j=m.length,M=Math.min(_,j);let $;for($=0;$<M;$++){const B=m[$]=O?ft(m[$]):Ke(m[$]);S(u[$],B,g,null,x,A,C,E,O)}_>j?R(u,x,A,!0,!1,M):K(m,g,b,x,A,C,E,O,M)},xt=(u,m,g,b,x,A,C,E,O)=>{let _=0;const j=m.length;let M=u.length-1,$=j-1;for(;_<=M&&_<=$;){const B=u[_],V=m[_]=O?ft(m[_]):Ke(m[_]);if(ln(B,V))S(B,V,g,null,x,A,C,E,O);else break;_++}for(;_<=M&&_<=$;){const B=u[M],V=m[$]=O?ft(m[$]):Ke(m[$]);if(ln(B,V))S(B,V,g,null,x,A,C,E,O);else break;M--,$--}if(_>M){if(_<=$){const B=$+1,V=B<j?m[B].el:b;for(;_<=$;)S(null,m[_]=O?ft(m[_]):Ke(m[_]),g,V,x,A,C,E,O),_++}}else if(_>$)for(;_<=M;)ke(u[_],x,A,!0),_++;else{const B=_,V=_,ne=new Map;for(_=V;_<=$;_++){const Pe=m[_]=O?ft(m[_]):Ke(m[_]);Pe.key!=null&&ne.set(Pe.key,_)}let ee,me=0;const Me=$-V+1;let Mt=!1,ai=0;const sn=new Array(Me);for(_=0;_<Me;_++)sn[_]=0;for(_=B;_<=M;_++){const Pe=u[_];if(me>=Me){ke(Pe,x,A,!0);continue}let Ue;if(Pe.key!=null)Ue=ne.get(Pe.key);else for(ee=V;ee<=$;ee++)if(sn[ee-V]===0&&ln(Pe,m[ee])){Ue=ee;break}Ue===void 0?ke(Pe,x,A,!0):(sn[Ue-V]=_+1,Ue>=ai?ai=Ue:Mt=!0,S(Pe,m[Ue],g,null,x,A,C,E,O),me++)}const ii=Mt?ef(sn):Ht;for(ee=ii.length-1,_=Me-1;_>=0;_--){const Pe=V+_,Ue=m[Pe],oi=Pe+1<j?m[Pe+1].el:b;sn[_]===0?S(null,Ue,g,oi,x,A,C,E,O):Mt&&(ee<0||_!==ii[ee]?Ne(Ue,g,oi,2):ee--)}}},Ne=(u,m,g,b,x=null)=>{const{el:A,type:C,transition:E,children:O,shapeFlag:_}=u;if(_&6){Ne(u.component.subTree,m,g,b);return}if(_&128){u.suspense.move(m,g,b);return}if(_&64){C.move(u,m,g,X);return}if(C===Je){r(A,m,g);for(let M=0;M<O.length;M++)Ne(O[M],m,g,b);r(u.anchor,m,g);return}if(C===Ir){N(u,m,g);return}if(b!==2&&_&1&&E)if(b===0)E.beforeEnter(A),r(A,m,g),Ae(()=>E.enter(A),x);else{const{leave:M,delayLeave:$,afterLeave:B}=E,V=()=>r(A,m,g),ne=()=>{M(A,()=>{V(),B&&B()})};$?$(A,V,ne):ne()}else r(A,m,g)},ke=(u,m,g,b=!1,x=!1)=>{const{type:A,props:C,ref:E,children:O,dynamicChildren:_,shapeFlag:j,patchFlag:M,dirs:$}=u;if(E!=null&&Gr(E,null,g,u,!0),j&256){m.ctx.deactivate(u);return}const B=j&1&&$,V=!Qn(u);let ne;if(V&&(ne=C&&C.onVnodeBeforeUnmount)&&We(ne,m,u),j&6)y(u.component,g,b);else{if(j&128){u.suspense.unmount(g,b);return}B&&wt(u,null,m,"beforeUnmount"),j&64?u.type.remove(u,m,g,x,X,b):_&&(A!==Je||M>0&&M&64)?R(_,m,g,!1,!0):(A===Je&&M&384||!x&&j&16)&&R(O,m,g),b&&Nt(u)}(V&&(ne=C&&C.onVnodeUnmounted)||B)&&Ae(()=>{ne&&We(ne,m,u),B&&wt(u,null,m,"unmounted")},g)},Nt=u=>{const{type:m,el:g,anchor:b,transition:x}=u;if(m===Je){Mn(g,b);return}if(m===Ir){z(u);return}const A=()=>{a(g),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(u.shapeFlag&1&&x&&!x.persisted){const{leave:C,delayLeave:E}=x,O=()=>C(g,A);E?E(u.el,A,O):O()}else A()},Mn=(u,m)=>{let g;for(;u!==m;)g=h(u),a(u),u=g;a(m)},y=(u,m,g)=>{const{bum:b,scope:x,update:A,subTree:C,um:E}=u;b&&Cr(b),x.stop(),A&&(A.active=!1,ke(C,u,m,g)),E&&Ae(E,m),Ae(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},R=(u,m,g,b=!1,x=!1,A=0)=>{for(let C=A;C<u.length;C++)ke(u[C],m,g,b,x)},P=u=>u.shapeFlag&6?P(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),F=(u,m,g)=>{u==null?m._vnode&&ke(m._vnode,null,null,!0):S(m._vnode||null,u,m,null,null,null,g),pi(),ts(),m._vnode=u},X={p:S,um:ke,m:Ne,r:Nt,mt:Oe,mc:K,pc:Z,pbc:ge,n:P,o:e};let ce,Y;return t&&([ce,Y]=t(X)),{render:F,hydrate:ce,createApp:Qc(F,ce)}}function _t({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function bs(e,t,n=!1){const r=e.children,a=t.children;if(U(r)&&U(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ft(a[i]),s.el=o.el),n||bs(o,s))}}function ef(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const tf=e=>e.__isTeleport,Je=Symbol(void 0),za=Symbol(void 0),Rt=Symbol(void 0),Ir=Symbol(void 0),dn=[];let $e=null;function ys(e=!1){dn.push($e=e?null:[])}function nf(){dn.pop(),$e=dn[dn.length-1]||null}let kn=1;function Ai(e){kn+=e}function xs(e){return e.dynamicChildren=kn>0?$e||Ht:null,nf(),kn>0&&$e&&$e.push(e),e}function oh(e,t,n,r,a,i){return xs(ks(e,t,n,r,a,i,!0))}function ws(e,t,n,r,a){return xs(Se(e,t,n,r,a,!0))}function Qr(e){return e?e.__v_isVNode===!0:!1}function ln(e,t){return e.type===t.type&&e.key===t.key}const xr="__vInternal",_s=({key:e})=>e!=null?e:null,Jn=({ref:e,ref_key:t,ref_for:n})=>e!=null?he(e)||ue(e)||W(e)?{i:je,r:e,k:t,f:!!n}:e:null;function ks(e,t=null,n=null,r=0,a=null,i=e===Je?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&_s(t),ref:t&&Jn(t),scopeId:as,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Da(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=he(n)?8:16),kn>0&&!o&&$e&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&$e.push(l),l}const Se=rf;function rf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===cs)&&(e=Rt),Qr(e)){const s=Xt(e,t,!0);return n&&Da(s,n),kn>0&&!i&&$e&&(s.shapeFlag&6?$e[$e.indexOf(e)]=s:$e.push(s)),s.patchFlag|=-2,s}if(gf(e)&&(e=e.__vccOpts),t){t=af(t);let{class:s,style:l}=t;s&&!he(s)&&(t.class=ya(s)),le(l)&&(Vo(l)&&!U(l)&&(l=we({},l)),t.style=ba(l))}const o=he(e)?1:kc(e)?128:tf(e)?64:le(e)?4:W(e)?2:0;return ks(e,t,n,r,a,o,i,!0)}function af(e){return e?Vo(e)||xr in e?we({},e):e:null}function Xt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?sf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&_s(s),ref:t&&t.ref?n&&a?U(a)?a.concat(Jn(t)):[a,Jn(t)]:Jn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Je?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xt(e.ssContent),ssFallback:e.ssFallback&&Xt(e.ssFallback),el:e.el,anchor:e.anchor}}function of(e=" ",t=0){return Se(za,null,e,t)}function sh(e="",t=!1){return t?(ys(),ws(Rt,null,e)):Se(Rt,null,e)}function Ke(e){return e==null||typeof e=="boolean"?Se(Rt):U(e)?Se(Je,null,e.slice()):typeof e=="object"?ft(e):Se(za,null,String(e))}function ft(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xt(e)}function Da(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Da(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(xr in t)?t._ctx=je:a===3&&je&&(je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:je},n=32):(t=String(t),r&64?(n=16,t=[of(t)]):n=8);e.children=t,e.shapeFlag|=n}function sf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ya([t.class,r.class]));else if(a==="style")t.style=ba([t.style,r.style]);else if(dr(a)){const i=t[a],o=r[a];o&&i!==o&&!(U(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function We(e,t,n,r=null){He(e,t,7,[n,r])}const lf=vs();let cf=0;function ff(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||lf,i={uid:cf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ms(r,a),emitsOptions:rs(r,a),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=vc.bind(null,i),e.ce&&e.ce(i),i}let be=null;const Es=()=>be||je,Gt=e=>{be=e,e.scope.on()},Ct=()=>{be&&be.scope.off(),be=null};function As(e){return e.vnode.shapeFlag&4}let En=!1;function uf(e,t=!1){En=t;const{props:n,children:r}=e.vnode,a=As(e);Yc(e,n,a,t),qc(e,r);const i=a?df(e,t):void 0;return En=!1,i}function df(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=qt(new Proxy(e.ctx,zc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?hf(e):null;Gt(e),tn();const i=pt(r,e,0,[e.props,a]);if(nn(),Ct(),Io(i)){if(i.then(Ct,Ct),t)return i.then(o=>{Oi(e,o,t)}).catch(o=>{vr(o,e,0)});e.asyncDep=i}else Oi(e,i,t)}else Os(e,t)}function Oi(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=Qo(t)),Os(e,n)}let Pi;function Os(e,t,n){const r=e.type;if(!e.render){if(!t&&Pi&&!r.render){const a=r.template||ja(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=we(we({isCustomElement:i,delimiters:s},o),l);r.render=Pi(a,f)}}e.render=r.render||De}Gt(e),tn(),Dc(e),nn(),Ct()}function mf(e){return new Proxy(e.attrs,{get(t,n){return Ce(e,"get","$attrs"),t[n]}})}function hf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=mf(e))},slots:e.slots,emit:e.emit,expose:t}}function Ha(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Qo(qt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ar)return ar[n](e)}}))}function pf(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function gf(e){return W(e)&&"__vccOpts"in e}const se=(e,t)=>uc(e,t,En);function wr(e,t,n){const r=arguments.length;return r===2?le(t)&&!U(t)?Qr(t)?Se(e,null,[t]):Se(e,t):Se(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Qr(n)&&(n=[n]),Se(e,t,n))}const vf="3.2.41",bf="http://www.w3.org/2000/svg",At=typeof document<"u"?document:null,Si=At&&At.createElement("template"),yf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?At.createElementNS(bf,e):At.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>At.createTextNode(e),createComment:e=>At.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>At.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Si.innerHTML=r?`<svg>${e}</svg>`:e;const s=Si.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function xf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function wf(e,t,n){const r=e.style,a=he(n);if(n&&!a){for(const i in n)Jr(r,i,n[i]);if(t&&!he(t))for(const i in t)n[i]==null&&Jr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ci=/\s*!important$/;function Jr(e,t,n){if(U(n))n.forEach(r=>Jr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=_f(e,t);Ci.test(n)?e.setProperty(en(r),n.replace(Ci,""),"important"):e[r]=n}}const Ri=["Webkit","Moz","ms"],Tr={};function _f(e,t){const n=Tr[t];if(n)return n;let r=Xe(t);if(r!=="filter"&&r in e)return Tr[t]=r;r=pr(r);for(let a=0;a<Ri.length;a++){const i=Ri[a]+r;if(i in e)return Tr[t]=i}return t}const Ii="http://www.w3.org/1999/xlink";function kf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ii,t.slice(6,t.length)):e.setAttributeNS(Ii,t,n);else{const i=yl(t);n==null||i&&!So(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Ef(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=So(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Af(e,t,n,r){e.addEventListener(t,n,r)}function Of(e,t,n,r){e.removeEventListener(t,n,r)}function Pf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Sf(t);if(r){const f=i[t]=If(r,a);Af(e,s,f,l)}else o&&(Of(e,s,o,l),i[t]=void 0)}}const Ti=/(?:Once|Passive|Capture)$/;function Sf(e){let t;if(Ti.test(e)){t={};let r;for(;r=e.match(Ti);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):en(e.slice(2)),t]}let Nr=0;const Cf=Promise.resolve(),Rf=()=>Nr||(Cf.then(()=>Nr=0),Nr=Date.now());function If(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;He(Tf(r,n.value),t,5,[r])};return n.value=e,n.attached=Rf(),n}function Tf(e,t){if(U(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ni=/^on[a-z]/,Nf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?xf(e,r,a):t==="style"?wf(e,n,r):dr(t)?xa(t)||Pf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Mf(e,t,r,a))?Ef(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),kf(e,t,r,a))};function Mf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ni.test(t)&&W(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ni.test(t)&&he(n)?!1:t in e}const Lf=we({patchProp:Nf},yf);let Mi;function Ff(){return Mi||(Mi=Jc(Lf))}const jf=(...e)=>{const t=Ff().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=$f(r);if(!a)return;const i=t._component;!W(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function $f(e){return he(e)?document.querySelector(e):e}const zf=an({name:"App"}),Df=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};function Hf(e,t,n,r,a,i){const o=$c("router-view");return ys(),ws(o)}const Bf=Df(zf,[["render",Hf]]),Uf="modulepreload",Wf=function(e){return"/vue3_ts_vite_2048-game/"+e},Li={},Fi=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Wf(i),i in Li)return;Li[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let c=a.length-1;c>=0;c--){const d=a[c];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":Uf,o||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),o)return new Promise((c,d)=>{f.addEventListener("load",c),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const jt=typeof window<"u";function Yf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const J=Object.assign;function Mr(e,t){const n={};for(const r in t){const a=t[r];n[r]=Be(a)?a.map(e):e(a)}return n}const mn=()=>{},Be=Array.isArray,Kf=/\/$/,Vf=e=>e.replace(Kf,"");function Lr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=Qf(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function qf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ji(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Xf(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Qt(t.matched[r],n.matched[a])&&Ps(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Qt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ps(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Gf(e[n],t[n]))return!1;return!0}function Gf(e,t){return Be(e)?$i(e,t):Be(t)?$i(t,e):e===t}function $i(e,t){return Be(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Qf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var An;(function(e){e.pop="pop",e.push="push"})(An||(An={}));var hn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(hn||(hn={}));function Jf(e){if(!e)if(jt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Vf(e)}const Zf=/^[^#]+#/;function eu(e,t){return e.replace(Zf,"#")+t}function tu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const _r=()=>({left:window.pageXOffset,top:window.pageYOffset});function nu(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=tu(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function zi(e,t){return(history.state?history.state.position-t:-1)+e}const Zr=new Map;function ru(e,t){Zr.set(e,t)}function au(e){const t=Zr.get(e);return Zr.delete(e),t}let iu=()=>location.protocol+"//"+location.host;function Ss(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),ji(l,"")}return ji(n,e)+r+a}function ou(e,t,n,r){let a=[],i=[],o=null;const s=({state:h})=>{const p=Ss(e,location),k=n.value,S=t.value;let T=0;if(h){if(n.value=p,t.value=h,o&&o===k){o=null;return}T=S?h.position-S.position:0}else r(p);a.forEach(v=>{v(n.value,k,{delta:T,type:An.pop,direction:T?T>0?hn.forward:hn.back:hn.unknown})})};function l(){o=n.value}function f(h){a.push(h);const p=()=>{const k=a.indexOf(h);k>-1&&a.splice(k,1)};return i.push(p),p}function c(){const{history:h}=window;!h.state||h.replaceState(J({},h.state,{scroll:_r()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:f,destroy:d}}function Di(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?_r():null}}function su(e){const{history:t,location:n}=window,r={value:Ss(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:iu()+e+l;try{t[c?"replaceState":"pushState"](f,"",h),a.value=f}catch(p){console.error(p),n[c?"replace":"assign"](h)}}function o(l,f){const c=J({},t.state,Di(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=J({},a.value,t.state,{forward:l,scroll:_r()});i(c.current,c,!0);const d=J({},Di(r.value,l,null),{position:c.position+1},f);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function lu(e){e=Jf(e);const t=su(e),n=ou(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=J({location:"",base:e,go:r,createHref:eu.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function cu(e){return typeof e=="string"||e&&typeof e=="object"}function Cs(e){return typeof e=="string"||typeof e=="symbol"}const lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Rs=Symbol("");var Hi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Hi||(Hi={}));function Jt(e,t){return J(new Error,{type:e,[Rs]:!0},t)}function Ge(e,t){return e instanceof Error&&Rs in e&&(t==null||!!(e.type&t))}const Bi="[^/]+?",fu={sensitive:!1,strict:!1,start:!0,end:!0},uu=/[.+*?^${}()[\]/\\]/g;function du(e,t){const n=J({},fu,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let d=0;d<f.length;d++){const h=f[d];let p=40+(n.sensitive?.25:0);if(h.type===0)d||(a+="/"),a+=h.value.replace(uu,"\\$&"),p+=40;else if(h.type===1){const{value:k,repeatable:S,optional:T,regexp:v}=h;i.push({name:k,repeatable:S,optional:T});const w=v||Bi;if(w!==Bi){p+=10;try{new RegExp(`(${w})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${k}" (${w}): `+z.message)}}let N=S?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(N=T&&f.length<2?`(?:/${N})`:"/"+N),T&&(N+="?"),a+=N,p+=20,T&&(p+=-8),S&&(p+=-20),w===".*"&&(p+=-50)}c.push(p)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),d={};if(!c)return null;for(let h=1;h<c.length;h++){const p=c[h]||"",k=i[h-1];d[k.name]=p&&k.repeatable?p.split("/"):p}return d}function l(f){let c="",d=!1;for(const h of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const p of h)if(p.type===0)c+=p.value;else if(p.type===1){const{value:k,repeatable:S,optional:T}=p,v=k in f?f[k]:"";if(Be(v)&&!S)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const w=Be(v)?v.join("/"):v;if(!w)if(T)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${k}"`);c+=w}}return c||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function mu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function hu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=mu(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Ui(r))return 1;if(Ui(a))return-1}return a.length-r.length}function Ui(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const pu={type:0,value:""},gu=/[a-zA-Z0-9_]/;function vu(e){if(!e)return[[]];if(e==="/")return[[pu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${f}": ${p}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function d(){!f||(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function h(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:gu.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),a}function bu(e,t,n){const r=du(vu(e.path),n),a=J(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function yu(e,t){const n=[],r=new Map;t=Ki({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,d,h){const p=!h,k=xu(c);k.aliasOf=h&&h.record;const S=Ki(t,c),T=[k];if("alias"in c){const N=typeof c.alias=="string"?[c.alias]:c.alias;for(const z of N)T.push(J({},k,{components:h?h.record.components:k.components,path:z,aliasOf:h?h.record:k}))}let v,w;for(const N of T){const{path:z}=N;if(d&&z[0]!=="/"){const D=d.record.path,Q=D[D.length-1]==="/"?"":"/";N.path=d.record.path+(z&&Q+z)}if(v=bu(N,d,S),h?h.alias.push(v):(w=w||v,w!==v&&w.alias.push(v),p&&c.name&&!Yi(v)&&o(c.name)),k.children){const D=k.children;for(let Q=0;Q<D.length;Q++)i(D[Q],v,h&&h.children[Q])}h=h||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return w?()=>{o(w)}:mn}function o(c){if(Cs(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let d=0;for(;d<n.length&&hu(c,n[d])>=0&&(c.record.path!==n[d].record.path||!Is(c,n[d]));)d++;n.splice(d,0,c),c.record.name&&!Yi(c)&&r.set(c.record.name,c)}function f(c,d){let h,p={},k,S;if("name"in c&&c.name){if(h=r.get(c.name),!h)throw Jt(1,{location:c});S=h.record.name,p=J(Wi(d.params,h.keys.filter(w=>!w.optional).map(w=>w.name)),c.params&&Wi(c.params,h.keys.map(w=>w.name))),k=h.stringify(p)}else if("path"in c)k=c.path,h=n.find(w=>w.re.test(k)),h&&(p=h.parse(k),S=h.record.name);else{if(h=d.name?r.get(d.name):n.find(w=>w.re.test(d.path)),!h)throw Jt(1,{location:c,currentLocation:d});S=h.record.name,p=J({},d.params,c.params),k=h.stringify(p)}const T=[];let v=h;for(;v;)T.unshift(v.record),v=v.parent;return{name:S,path:k,params:p,matched:T,meta:_u(T)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Wi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function xu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:wu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function wu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Yi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function _u(e){return e.reduce((t,n)=>J(t,n.meta),{})}function Ki(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Is(e,t){return t.children.some(n=>n===e||Is(e,n))}const Ts=/#/g,ku=/&/g,Eu=/\//g,Au=/=/g,Ou=/\?/g,Ns=/\+/g,Pu=/%5B/g,Su=/%5D/g,Ms=/%5E/g,Cu=/%60/g,Ls=/%7B/g,Ru=/%7C/g,Fs=/%7D/g,Iu=/%20/g;function Ba(e){return encodeURI(""+e).replace(Ru,"|").replace(Pu,"[").replace(Su,"]")}function Tu(e){return Ba(e).replace(Ls,"{").replace(Fs,"}").replace(Ms,"^")}function ea(e){return Ba(e).replace(Ns,"%2B").replace(Iu,"+").replace(Ts,"%23").replace(ku,"%26").replace(Cu,"`").replace(Ls,"{").replace(Fs,"}").replace(Ms,"^")}function Nu(e){return ea(e).replace(Au,"%3D")}function Mu(e){return Ba(e).replace(Ts,"%23").replace(Ou,"%3F")}function Lu(e){return e==null?"":Mu(e).replace(Eu,"%2F")}function or(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Fu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Ns," "),o=i.indexOf("="),s=or(o<0?i:i.slice(0,o)),l=o<0?null:or(i.slice(o+1));if(s in t){let f=t[s];Be(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function Vi(e){let t="";for(let n in e){const r=e[n];if(n=Nu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Be(r)?r.map(i=>i&&ea(i)):[r&&ea(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function ju(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Be(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const $u=Symbol(""),qi=Symbol(""),Ua=Symbol(""),js=Symbol(""),ta=Symbol("");function cn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function ut(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Jt(4,{from:n,to:t})):d instanceof Error?s(d):cu(d)?s(Jt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(d=>s(d))})}function Fr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(zu(s)){const f=(s.__vccOpts||s)[t];f&&a.push(ut(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=Yf(f)?f.default:f;i.components[o]=c;const h=(c.__vccOpts||c)[t];return h&&ut(h,n,r,i,o)()}))}}return a}function zu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Xi(e){const t=Ze(Ua),n=Ze(js),r=se(()=>t.resolve(Ut(e.to))),a=se(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],d=n.matched;if(!c||!d.length)return-1;const h=d.findIndex(Qt.bind(null,c));if(h>-1)return h;const p=Gi(l[f-2]);return f>1&&Gi(c)===p&&d[d.length-1].path!==p?d.findIndex(Qt.bind(null,l[f-2])):h}),i=se(()=>a.value>-1&&Uu(n.params,r.value.params)),o=se(()=>a.value>-1&&a.value===n.matched.length-1&&Ps(n.params,r.value.params));function s(l={}){return Bu(l)?t[Ut(e.replace)?"replace":"push"](Ut(e.to)).catch(mn):Promise.resolve()}return{route:r,href:se(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Du=an({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xi,setup(e,{slots:t}){const n=rn(Xi(e)),{options:r}=Ze(Ua),a=se(()=>({[Qi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:wr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Hu=Du;function Bu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Uu(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Be(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Gi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qi=(e,t,n)=>e!=null?e:t!=null?t:n,Wu=an({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ze(ta),a=se(()=>e.route||r.value),i=Ze(qi,0),o=se(()=>{let f=Ut(i);const{matched:c}=a.value;let d;for(;(d=c[f])&&!d.components;)f++;return f}),s=se(()=>a.value.matched[o.value]);Gn(qi,se(()=>o.value+1)),Gn($u,s),Gn(ta,a);const l=Ia();return Yt(()=>[l.value,s.value,e.name],([f,c,d],[h,p,k])=>{c&&(c.instances[d]=f,p&&p!==c&&f&&f===h&&(c.leaveGuards.size||(c.leaveGuards=p.leaveGuards),c.updateGuards.size||(c.updateGuards=p.updateGuards))),f&&c&&(!p||!Qt(c,p)||!h)&&(c.enterCallbacks[d]||[]).forEach(S=>S(f))},{flush:"post"}),()=>{const f=a.value,c=e.name,d=s.value,h=d&&d.components[c];if(!h)return Ji(n.default,{Component:h,route:f});const p=d.props[c],k=p?p===!0?f.params:typeof p=="function"?p(f):p:null,T=wr(h,J({},k,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return Ji(n.default,{Component:T,route:f})||T}}});function Ji(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Yu=Wu;function Ku(e){const t=yu(e.routes,e),n=e.parseQuery||Fu,r=e.stringifyQuery||Vi,a=e.history,i=cn(),o=cn(),s=cn(),l=ac(lt);let f=lt;jt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Mr.bind(null,y=>""+y),d=Mr.bind(null,Lu),h=Mr.bind(null,or);function p(y,R){let P,F;return Cs(y)?(P=t.getRecordMatcher(y),F=R):F=y,t.addRoute(F,P)}function k(y){const R=t.getRecordMatcher(y);R&&t.removeRoute(R)}function S(){return t.getRoutes().map(y=>y.record)}function T(y){return!!t.getRecordMatcher(y)}function v(y,R){if(R=J({},R||l.value),typeof y=="string"){const u=Lr(n,y,R.path),m=t.resolve({path:u.path},R),g=a.createHref(u.fullPath);return J(u,m,{params:h(m.params),hash:or(u.hash),redirectedFrom:void 0,href:g})}let P;if("path"in y)P=J({},y,{path:Lr(n,y.path,R.path).path});else{const u=J({},y.params);for(const m in u)u[m]==null&&delete u[m];P=J({},y,{params:d(y.params)}),R.params=d(R.params)}const F=t.resolve(P,R),X=y.hash||"";F.params=c(h(F.params));const ce=qf(r,J({},y,{hash:Tu(X),path:F.path})),Y=a.createHref(ce);return J({fullPath:ce,hash:X,query:r===Vi?ju(y.query):y.query||{}},F,{redirectedFrom:void 0,href:Y})}function w(y){return typeof y=="string"?Lr(n,y,l.value.path):J({},y)}function N(y,R){if(f!==y)return Jt(8,{from:R,to:y})}function z(y){return H(y)}function D(y){return z(J(w(y),{replace:!0}))}function Q(y){const R=y.matched[y.matched.length-1];if(R&&R.redirect){const{redirect:P}=R;let F=typeof P=="function"?P(y):P;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=w(F):{path:F},F.params={}),J({query:y.query,hash:y.hash,params:"path"in F?{}:y.params},F)}}function H(y,R){const P=f=v(y),F=l.value,X=y.state,ce=y.force,Y=y.replace===!0,u=Q(P);if(u)return H(J(w(u),{state:typeof u=="object"?J({},X,u.state):X,force:ce,replace:Y}),R||P);const m=P;m.redirectedFrom=R;let g;return!ce&&Xf(r,F,P)&&(g=Jt(16,{to:m,from:F}),xt(F,F,!0,!1)),(g?Promise.resolve(g):oe(m,F)).catch(b=>Ge(b)?Ge(b,2)?b:Te(b):te(b,m,F)).then(b=>{if(b){if(Ge(b,2))return H(J({replace:Y},w(b.to),{state:typeof b.to=="object"?J({},X,b.to.state):X,force:ce}),R||m)}else b=_e(m,F,!0,Y,X);return ge(m,F,b),b})}function K(y,R){const P=N(y,R);return P?Promise.reject(P):Promise.resolve()}function oe(y,R){let P;const[F,X,ce]=Vu(y,R);P=Fr(F.reverse(),"beforeRouteLeave",y,R);for(const u of F)u.leaveGuards.forEach(m=>{P.push(ut(m,y,R))});const Y=K.bind(null,y,R);return P.push(Y),Lt(P).then(()=>{P=[];for(const u of i.list())P.push(ut(u,y,R));return P.push(Y),Lt(P)}).then(()=>{P=Fr(X,"beforeRouteUpdate",y,R);for(const u of X)u.updateGuards.forEach(m=>{P.push(ut(m,y,R))});return P.push(Y),Lt(P)}).then(()=>{P=[];for(const u of y.matched)if(u.beforeEnter&&!R.matched.includes(u))if(Be(u.beforeEnter))for(const m of u.beforeEnter)P.push(ut(m,y,R));else P.push(ut(u.beforeEnter,y,R));return P.push(Y),Lt(P)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),P=Fr(ce,"beforeRouteEnter",y,R),P.push(Y),Lt(P))).then(()=>{P=[];for(const u of o.list())P.push(ut(u,y,R));return P.push(Y),Lt(P)}).catch(u=>Ge(u,8)?u:Promise.reject(u))}function ge(y,R,P){for(const F of s.list())F(y,R,P)}function _e(y,R,P,F,X){const ce=N(y,R);if(ce)return ce;const Y=R===lt,u=jt?history.state:{};P&&(F||Y?a.replace(y.fullPath,J({scroll:Y&&u&&u.scroll},X)):a.push(y.fullPath,X)),l.value=y,xt(y,R,P,Y),Te()}let Ie;function ot(){Ie||(Ie=a.listen((y,R,P)=>{if(!Mn.listening)return;const F=v(y),X=Q(F);if(X){H(J(X,{replace:!0}),F).catch(mn);return}f=F;const ce=l.value;jt&&ru(zi(ce.fullPath,P.delta),_r()),oe(F,ce).catch(Y=>Ge(Y,12)?Y:Ge(Y,2)?(H(Y.to,F).then(u=>{Ge(u,20)&&!P.delta&&P.type===An.pop&&a.go(-1,!1)}).catch(mn),Promise.reject()):(P.delta&&a.go(-P.delta,!1),te(Y,F,ce))).then(Y=>{Y=Y||_e(F,ce,!1),Y&&(P.delta&&!Ge(Y,8)?a.go(-P.delta,!1):P.type===An.pop&&Ge(Y,20)&&a.go(-1,!1)),ge(F,ce,Y)}).catch(mn)}))}let Oe=cn(),ve=cn(),de;function te(y,R,P){Te(y);const F=ve.list();return F.length?F.forEach(X=>X(y,R,P)):console.error(y),Promise.reject(y)}function Z(){return de&&l.value!==lt?Promise.resolve():new Promise((y,R)=>{Oe.add([y,R])})}function Te(y){return de||(de=!y,ot(),Oe.list().forEach(([R,P])=>y?P(y):R()),Oe.reset()),y}function xt(y,R,P,F){const{scrollBehavior:X}=e;if(!jt||!X)return Promise.resolve();const ce=!P&&au(zi(y.fullPath,0))||(F||!P)&&history.state&&history.state.scroll||null;return Na().then(()=>X(y,R,ce)).then(Y=>Y&&nu(Y)).catch(Y=>te(Y,y,R))}const Ne=y=>a.go(y);let ke;const Nt=new Set,Mn={currentRoute:l,listening:!0,addRoute:p,removeRoute:k,hasRoute:T,getRoutes:S,resolve:v,options:e,push:z,replace:D,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:ve.add,isReady:Z,install(y){const R=this;y.component("RouterLink",Hu),y.component("RouterView",Yu),y.config.globalProperties.$router=R,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Ut(l)}),jt&&!ke&&l.value===lt&&(ke=!0,z(a.location).catch(X=>{}));const P={};for(const X in lt)P[X]=se(()=>l.value[X]);y.provide(Ua,R),y.provide(js,rn(P)),y.provide(ta,l);const F=y.unmount;Nt.add(y),y.unmount=function(){Nt.delete(y),Nt.size<1&&(f=lt,Ie&&Ie(),Ie=null,l.value=lt,ke=!1,de=!1),F()}}};return Mn}function Lt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Vu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Qt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Qt(f,l))||a.push(l))}return[n,r,a]}const qu=[{path:"/vue3_ts_vite_2048-game",name:"main",component:()=>Fi(()=>import("./MainView.34bcaa4b.js"),["assets/MainView.34bcaa4b.js","assets/MainView.bb24a794.css"])},{path:"/vue3_ts_vite_2048-game/404",name:"404",component:()=>Fi(()=>import("./Error404View.bb849699.js"),[])},{path:"/:pathMatch(.*)",redirect:{name:"404"}}],Xu=Ku({history:lu(),routes:qu});var Gu=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let $s;const kr=e=>$s=e,zs=Symbol();function na(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var pn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(pn||(pn={}));function Qu(){const e=Lo(!0),t=e.run(()=>Ia({}));let n=[],r=[];const a=qt({install(i){kr(a),a._a=i,i.provide(zs,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Gu?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const Ds=()=>{};function Zi(e,t,n,r=Ds){e.push(t);const a=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Es()&&La(a),a}function Ft(e,...t){e.slice().forEach(n=>{n(...t)})}function ra(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],a=e[n];na(a)&&na(r)&&e.hasOwnProperty(n)&&!ue(r)&&!ht(r)?e[n]=ra(a,r):e[n]=r}return e}const Ju=Symbol();function Zu(e){return!na(e)||!e.hasOwnProperty(Ju)}const{assign:dt}=Object;function ed(e){return!!(ue(e)&&e.effect)}function td(e,t,n,r){const{state:a,actions:i,getters:o}=t,s=n.state.value[e];let l;function f(){s||(n.state.value[e]=a?a():{});const c=sc(n.state.value[e]);return dt(c,i,Object.keys(o||{}).reduce((d,h)=>(d[h]=qt(se(()=>{kr(n);const p=n._s.get(e);return o[h].call(p,p)})),d),{}))}return l=Hs(e,f,t,n,r,!0),l.$reset=function(){const d=a?a():{};this.$patch(h=>{dt(h,d)})},l}function Hs(e,t,n={},r,a,i){let o;const s=dt({actions:{}},n),l={deep:!0};let f,c,d=qt([]),h=qt([]),p;const k=r.state.value[e];!i&&!k&&(r.state.value[e]={}),Ia({});let S;function T(H){let K;f=c=!1,typeof H=="function"?(H(r.state.value[e]),K={type:pn.patchFunction,storeId:e,events:p}):(ra(r.state.value[e],H),K={type:pn.patchObject,payload:H,storeId:e,events:p});const oe=S=Symbol();Na().then(()=>{S===oe&&(f=!0)}),c=!0,Ft(d,K,r.state.value[e])}const v=Ds;function w(){o.stop(),d=[],h=[],r._s.delete(e)}function N(H,K){return function(){kr(r);const oe=Array.from(arguments),ge=[],_e=[];function Ie(ve){ge.push(ve)}function ot(ve){_e.push(ve)}Ft(h,{args:oe,name:H,store:D,after:Ie,onError:ot});let Oe;try{Oe=K.apply(this&&this.$id===e?this:D,oe)}catch(ve){throw Ft(_e,ve),ve}return Oe instanceof Promise?Oe.then(ve=>(Ft(ge,ve),ve)).catch(ve=>(Ft(_e,ve),Promise.reject(ve))):(Ft(ge,Oe),Oe)}}const z={_p:r,$id:e,$onAction:Zi.bind(null,h),$patch:T,$reset:v,$subscribe(H,K={}){const oe=Zi(d,H,K.detached,()=>ge()),ge=o.run(()=>Yt(()=>r.state.value[e],_e=>{(K.flush==="sync"?c:f)&&H({storeId:e,type:pn.direct,events:p},_e)},dt({},l,K)));return oe},$dispose:w},D=rn(z);r._s.set(e,D);const Q=r._e.run(()=>(o=Lo(),o.run(()=>t())));for(const H in Q){const K=Q[H];if(ue(K)&&!ed(K)||ht(K))i||(k&&Zu(K)&&(ue(K)?K.value=k[H]:ra(K,k[H])),r.state.value[e][H]=K);else if(typeof K=="function"){const oe=N(H,K);Q[H]=oe,s.actions[H]=K}}return dt(D,Q),dt(G(D),Q),Object.defineProperty(D,"$state",{get:()=>r.state.value[e],set:H=>{T(K=>{dt(K,H)})}}),r._p.forEach(H=>{dt(D,o.run(()=>H({store:D,app:r._a,pinia:r,options:s})))}),k&&i&&n.hydrate&&n.hydrate(D.$state,k),f=!0,c=!0,D}function lh(e,t,n){let r,a;const i=typeof t=="function";typeof e=="string"?(r=e,a=i?n:t):(a=e,r=e.id);function o(s,l){const f=Es();return s=s||f&&Ze(zs),s&&kr(s),s=$s,s._s.has(r)||(i?Hs(r,t,a,s):td(r,a,s)),s._s.get(r)}return o.$id=r,o}function eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?eo(Object(n),!0).forEach(function(r){pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sr(e){return sr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sr(e)}function nd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function to(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function rd(e,t,n){return t&&to(e.prototype,t),n&&to(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wa(e,t){return id(e)||sd(e,t)||Bs(e,t)||cd()}function In(e){return ad(e)||od(e)||Bs(e)||ld()}function ad(e){if(Array.isArray(e))return aa(e)}function id(e){if(Array.isArray(e))return e}function od(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Bs(e,t){if(!!e){if(typeof e=="string")return aa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return aa(e,t)}}function aa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ld(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var no=function(){},Ya={},Us={},Ws=null,Ys={mark:no,measure:no};try{typeof window<"u"&&(Ya=window),typeof document<"u"&&(Us=document),typeof MutationObserver<"u"&&(Ws=MutationObserver),typeof performance<"u"&&(Ys=performance)}catch{}var fd=Ya.navigator||{},ro=fd.userAgent,ao=ro===void 0?"":ro,vt=Ya,ie=Us,io=Ws,Dn=Ys;vt.document;var it=!!ie.documentElement&&!!ie.head&&typeof ie.addEventListener=="function"&&typeof ie.createElement=="function",Ks=~ao.indexOf("MSIE")||~ao.indexOf("Trident/"),Hn,Bn,Un,Wn,Yn,tt="___FONT_AWESOME___",ia=16,Vs="fa",qs="svg-inline--fa",It="data-fa-i2svg",oa="data-fa-pseudo-element",ud="data-fa-pseudo-element-pending",Ka="data-prefix",Va="data-icon",oo="fontawesome-i2svg",dd="async",md=["HTML","HEAD","STYLE","SCRIPT"],Xs=function(){try{return!0}catch{return!1}}(),ae="classic",fe="sharp",qa=[ae,fe];function Tn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ae]}})}var On=Tn((Hn={},pe(Hn,ae,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),pe(Hn,fe,{fa:"solid",fass:"solid","fa-solid":"solid"}),Hn)),Pn=Tn((Bn={},pe(Bn,ae,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),pe(Bn,fe,{solid:"fass"}),Bn)),Sn=Tn((Un={},pe(Un,ae,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),pe(Un,fe,{fass:"fa-solid"}),Un)),hd=Tn((Wn={},pe(Wn,ae,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),pe(Wn,fe,{"fa-solid":"fass"}),Wn)),pd=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Gs="fa-layers-text",gd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,vd=Tn((Yn={},pe(Yn,ae,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),pe(Yn,fe,{900:"fass"}),Yn)),Qs=[1,2,3,4,5,6,7,8,9,10],bd=Qs.concat([11,12,13,14,15,16,17,18,19,20]),yd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Cn=new Set;Object.keys(Pn[ae]).map(Cn.add.bind(Cn));Object.keys(Pn[fe]).map(Cn.add.bind(Cn));var xd=[].concat(qa,In(Cn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ot.GROUP,Ot.SWAP_OPACITY,Ot.PRIMARY,Ot.SECONDARY]).concat(Qs.map(function(e){return"".concat(e,"x")})).concat(bd.map(function(e){return"w-".concat(e)})),gn=vt.FontAwesomeConfig||{};function wd(e){var t=ie.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function _d(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ie&&typeof ie.querySelector=="function"){var kd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];kd.forEach(function(e){var t=Wa(e,2),n=t[0],r=t[1],a=_d(wd(n));a!=null&&(gn[r]=a)})}var Js={styleDefault:"solid",familyDefault:"classic",cssPrefix:Vs,replacementClass:qs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};gn.familyPrefix&&(gn.cssPrefix=gn.familyPrefix);var Zt=I(I({},Js),gn);Zt.autoReplaceSvg||(Zt.observeMutations=!1);var L={};Object.keys(Js).forEach(function(e){Object.defineProperty(L,e,{enumerable:!0,set:function(n){Zt[e]=n,vn.forEach(function(r){return r(L)})},get:function(){return Zt[e]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(t){Zt.cssPrefix=t,vn.forEach(function(n){return n(L)})},get:function(){return Zt.cssPrefix}});vt.FontAwesomeConfig=L;var vn=[];function Ed(e){return vn.push(e),function(){vn.splice(vn.indexOf(e),1)}}var ct=ia,qe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ad(e){if(!(!e||!it)){var t=ie.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ie.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ie.head.insertBefore(t,r),e}}var Od="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Rn(){for(var e=12,t="";e-- >0;)t+=Od[Math.random()*62|0];return t}function on(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Xa(e){return e.classList?on(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Zs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Zs(e[n]),'" ')},"").trim()}function Er(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ga(e){return e.size!==qe.size||e.x!==qe.x||e.y!==qe.y||e.rotate!==qe.rotate||e.flipX||e.flipY}function Sd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Cd(e){var t=e.transform,n=e.width,r=n===void 0?ia:n,a=e.height,i=a===void 0?ia:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ks?l+="translate(".concat(t.x/ct-r/2,"em, ").concat(t.y/ct-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ct,"em), calc(-50% + ").concat(t.y/ct,"em)) "):l+="translate(".concat(t.x/ct,"em, ").concat(t.y/ct,"em) "),l+="scale(".concat(t.size/ct*(t.flipX?-1:1),", ").concat(t.size/ct*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Rd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function el(){var e=Vs,t=qs,n=L.cssPrefix,r=L.replacementClass,a=Rd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var so=!1;function jr(){L.autoAddCss&&!so&&(Ad(el()),so=!0)}var Id={mixout:function(){return{dom:{css:el,insertCss:jr}}},hooks:function(){return{beforeDOMElementCreation:function(){jr()},beforeI2svg:function(){jr()}}}},nt=vt||{};nt[tt]||(nt[tt]={});nt[tt].styles||(nt[tt].styles={});nt[tt].hooks||(nt[tt].hooks={});nt[tt].shims||(nt[tt].shims=[]);var ze=nt[tt],tl=[],Td=function e(){ie.removeEventListener("DOMContentLoaded",e),lr=1,tl.map(function(t){return t()})},lr=!1;it&&(lr=(ie.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ie.readyState),lr||ie.addEventListener("DOMContentLoaded",Td));function Nd(e){!it||(lr?setTimeout(e,0):tl.push(e))}function Nn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Zs(e):"<".concat(t," ").concat(Pd(r),">").concat(i.map(Nn).join(""),"</").concat(t,">")}function lo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Md=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},$r=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Md(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Ld(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function sa(e){var t=Ld(e);return t.length===1?t[0].toString(16):null}function Fd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function co(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function la(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=co(t);typeof ze.hooks.addPack=="function"&&!a?ze.hooks.addPack(e,co(t)):ze.styles[e]=I(I({},ze.styles[e]||{}),i),e==="fas"&&la("fa",t)}var Kn,Vn,qn,zt=ze.styles,jd=ze.shims,$d=(Kn={},pe(Kn,ae,Object.values(Sn[ae])),pe(Kn,fe,Object.values(Sn[fe])),Kn),Qa=null,nl={},rl={},al={},il={},ol={},zd=(Vn={},pe(Vn,ae,Object.keys(On[ae])),pe(Vn,fe,Object.keys(On[fe])),Vn);function Dd(e){return~xd.indexOf(e)}function Hd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Dd(a)?a:null}var sl=function(){var t=function(i){return $r(zt,function(o,s,l){return o[l]=$r(s,i,{}),o},{})};nl=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),rl=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ol=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in zt||L.autoFetchSvg,r=$r(jd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});al=r.names,il=r.unicodes,Qa=Ar(L.styleDefault,{family:L.familyDefault})};Ed(function(e){Qa=Ar(e.styleDefault,{family:L.familyDefault})});sl();function Ja(e,t){return(nl[e]||{})[t]}function Bd(e,t){return(rl[e]||{})[t]}function Pt(e,t){return(ol[e]||{})[t]}function ll(e){return al[e]||{prefix:null,iconName:null}}function Ud(e){var t=il[e],n=Ja("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function bt(){return Qa}var Za=function(){return{prefix:null,iconName:null,rest:[]}};function Ar(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ae:n,a=On[r][e],i=Pn[r][e]||Pn[r][a],o=e in ze.styles?e:null;return i||o||null}var fo=(qn={},pe(qn,ae,Object.keys(Sn[ae])),pe(qn,fe,Object.keys(Sn[fe])),qn);function Or(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},pe(t,ae,"".concat(L.cssPrefix,"-").concat(ae)),pe(t,fe,"".concat(L.cssPrefix,"-").concat(fe)),t),o=null,s=ae;(e.includes(i[ae])||e.some(function(f){return fo[ae].includes(f)}))&&(s=ae),(e.includes(i[fe])||e.some(function(f){return fo[fe].includes(f)}))&&(s=fe);var l=e.reduce(function(f,c){var d=Hd(L.cssPrefix,c);if(zt[c]?(c=$d[s].includes(c)?hd[s][c]:c,o=c,f.prefix=c):zd[s].indexOf(c)>-1?(o=c,f.prefix=Ar(c,{family:s})):d?f.iconName=d:c!==L.replacementClass&&c!==i[ae]&&c!==i[fe]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var h=o==="fa"?ll(f.iconName):{},p=Pt(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||p||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!zt.far&&zt.fas&&!L.autoFetchSvg&&(f.prefix="fas")}return f},Za());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===fe&&(zt.fass||L.autoFetchSvg)&&(l.prefix="fass",l.iconName=Pt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=bt()||"fas"),l}var Wd=function(){function e(){nd(this,e),this.definitions={}}return rd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),la(s,o[s]);var l=Sn[ae][s];l&&la(l,o[s]),sl()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),e}(),uo=[],Dt={},Kt={},Yd=Object.keys(Kt);function Kd(e,t){var n=t.mixoutsTo;return uo=e,Dt={},Object.keys(Kt).forEach(function(r){Yd.indexOf(r)===-1&&delete Kt[r]}),uo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),sr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Dt[o]||(Dt[o]=[]),Dt[o].push(i[o])})}r.provides&&r.provides(Kt)}),n}function ca(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Dt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Tt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Dt[e]||[];a.forEach(function(i){i.apply(null,n)})}function rt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Kt[e]?Kt[e].apply(null,t):void 0}function fa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||bt();if(!!t)return t=Pt(n,t)||t,lo(cl.definitions,n,t)||lo(ze.styles,n,t)}var cl=new Wd,Vd=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,Tt("noAuto")},qd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return it?(Tt("beforeI2svg",t),rt("pseudoElements2svg",t),rt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,Nd(function(){Gd({autoReplaceSvgRoot:n}),Tt("watch",t)})}},Xd={icon:function(t){if(t===null)return null;if(sr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Pt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ar(t[0]);return{prefix:r,iconName:Pt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(L.cssPrefix,"-"))>-1||t.match(pd))){var a=Or(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||bt(),iconName:Pt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=bt();return{prefix:i,iconName:Pt(i,t)||t}}}},Re={noAuto:Vd,config:L,dom:qd,parse:Xd,library:cl,findIconDefinition:fa,toHtml:Nn},Gd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ie:n;(Object.keys(ze.styles).length>0||L.autoFetchSvg)&&it&&L.autoReplaceSvg&&Re.dom.i2svg({node:r})};function Pr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Nn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!it){var r=ie.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Qd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ga(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Er(I(I({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Jd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(L.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},a),{},{id:o}),children:r}]}]}function ei(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,h=e.watchable,p=h===void 0?!1:h,k=r.found?r:n,S=k.width,T=k.height,v=a==="fak",w=[L.replacementClass,i?"".concat(L.cssPrefix,"-").concat(i):""].filter(function(oe){return d.classes.indexOf(oe)===-1}).filter(function(oe){return oe!==""||!!oe}).concat(d.classes).join(" "),N={children:[],attributes:I(I({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(T)})},z=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/T*16*.0625,"em")}:{};p&&(N.attributes[It]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(c||Rn())},children:[l]}),delete N.attributes.title);var D=I(I({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:I(I({},z),d.styles)}),Q=r.found&&n.found?rt("generateAbstractMask",D)||{children:[],attributes:{}}:rt("generateAbstractIcon",D)||{children:[],attributes:{}},H=Q.children,K=Q.attributes;return D.children=H,D.attributes=K,s?Jd(D):Qd(D)}function mo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=I(I(I({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[It]="");var c=I({},o.styles);Ga(a)&&(c.transform=Cd({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Er(c);d.length>0&&(f.style=d);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Zd(e){var t=e.content,n=e.title,r=e.extra,a=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Er(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var zr=ze.styles;function ua(e){var t=e[0],n=e[1],r=e.slice(4),a=Wa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(Ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Ot.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Ot.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var em={found:!1,width:512,height:512};function tm(e,t){!Xs&&!L.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function da(e,t){var n=t;return t==="fa"&&L.styleDefault!==null&&(t=bt()),new Promise(function(r,a){if(rt("missingIconAbstract"),n==="fa"){var i=ll(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&zr[t]&&zr[t][e]){var o=zr[t][e];return r(ua(o))}tm(e,t),r(I(I({},em),{},{icon:L.showMissingIcons&&e?rt("missingIconAbstract")||{}:{}}))})}var ho=function(){},ma=L.measurePerformance&&Dn&&Dn.mark&&Dn.measure?Dn:{mark:ho,measure:ho},un='FA "6.2.0"',nm=function(t){return ma.mark("".concat(un," ").concat(t," begins")),function(){return fl(t)}},fl=function(t){ma.mark("".concat(un," ").concat(t," ends")),ma.measure("".concat(un," ").concat(t),"".concat(un," ").concat(t," begins"),"".concat(un," ").concat(t," ends"))},ti={begin:nm,end:fl},Zn=function(){};function po(e){var t=e.getAttribute?e.getAttribute(It):null;return typeof t=="string"}function rm(e){var t=e.getAttribute?e.getAttribute(Ka):null,n=e.getAttribute?e.getAttribute(Va):null;return t&&n}function am(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function im(){if(L.autoReplaceSvg===!0)return er.replace;var e=er[L.autoReplaceSvg];return e||er.replace}function om(e){return ie.createElementNS("http://www.w3.org/2000/svg",e)}function sm(e){return ie.createElement(e)}function ul(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?om:sm:n;if(typeof e=="string")return ie.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ul(o,{ceFn:r}))}),a}function lm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var er={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ul(a),n)}),n.getAttribute(It)===null&&L.keepOriginalSource){var r=ie.createComment(lm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Xa(n).indexOf(L.replacementClass))return er.replace(t);var a=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===L.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Nn(s)}).join(`
`);n.setAttribute(It,""),n.innerHTML=o}};function go(e){e()}function dl(e,t){var n=typeof t=="function"?t:Zn;if(e.length===0)n();else{var r=go;L.mutateApproach===dd&&(r=vt.requestAnimationFrame||go),r(function(){var a=im(),i=ti.begin("mutate");e.map(a),i(),n()})}}var ni=!1;function ml(){ni=!0}function ha(){ni=!1}var cr=null;function vo(e){if(!!io&&!!L.observeMutations){var t=e.treeCallback,n=t===void 0?Zn:t,r=e.nodeCallback,a=r===void 0?Zn:r,i=e.pseudoElementsCallback,o=i===void 0?Zn:i,s=e.observeMutationsRoot,l=s===void 0?ie:s;cr=new io(function(f){if(!ni){var c=bt();on(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!po(d.addedNodes[0])&&(L.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&L.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&po(d.target)&&~yd.indexOf(d.attributeName))if(d.attributeName==="class"&&rm(d.target)){var h=Or(Xa(d.target)),p=h.prefix,k=h.iconName;d.target.setAttribute(Ka,p||c),k&&d.target.setAttribute(Va,k)}else am(d.target)&&a(d.target)})}}),it&&cr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function cm(){!cr||cr.disconnect()}function fm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function um(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Or(Xa(e));return a.prefix||(a.prefix=bt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Bd(a.prefix,e.innerText)||Ja(a.prefix,sa(e.innerText))),!a.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function dm(e){var t=on(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return L.autoA11y&&(n?t["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||Rn()):(t["aria-hidden"]="true",t.focusable="false")),t}function mm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:qe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function bo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=um(e),r=n.iconName,a=n.prefix,i=n.rest,o=dm(e),s=ca("parseNodeAttributes",{},e),l=t.styleParser?fm(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:qe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var hm=ze.styles;function hl(e){var t=L.autoReplaceSvg==="nest"?bo(e,{styleParser:!1}):bo(e);return~t.extra.classes.indexOf(Gs)?rt("generateLayersText",e,t):rt("generateSvgReplacementMutation",e,t)}var yt=new Set;qa.map(function(e){yt.add("fa-".concat(e))});Object.keys(On[ae]).map(yt.add.bind(yt));Object.keys(On[fe]).map(yt.add.bind(yt));yt=In(yt);function yo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!it)return Promise.resolve();var n=ie.documentElement.classList,r=function(d){return n.add("".concat(oo,"-").concat(d))},a=function(d){return n.remove("".concat(oo,"-").concat(d))},i=L.autoFetchSvg?yt:qa.map(function(c){return"fa-".concat(c)}).concat(Object.keys(hm));i.includes("fa")||i.push("fa");var o=[".".concat(Gs,":not([").concat(It,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(It,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=on(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ti.begin("onTree"),f=s.reduce(function(c,d){try{var h=hl(d);h&&c.push(h)}catch(p){Xs||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(h){dl(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),d(h)})})}function pm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hl(e).then(function(n){n&&dl([n],t)})}function gm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:fa(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:fa(a||{})),e(r,I(I({},n),{},{mask:a}))}}var vm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?qe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,h=d===void 0?null:d,p=n.titleId,k=p===void 0?null:p,S=n.classes,T=S===void 0?[]:S,v=n.attributes,w=v===void 0?{}:v,N=n.styles,z=N===void 0?{}:N;if(!!t){var D=t.prefix,Q=t.iconName,H=t.icon;return Pr(I({type:"icon"},t),function(){return Tt("beforeDOMElementCreation",{iconDefinition:t,params:n}),L.autoA11y&&(h?w["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(k||Rn()):(w["aria-hidden"]="true",w.focusable="false")),ei({icons:{main:ua(H),mask:l?ua(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:Q,transform:I(I({},qe),a),symbol:o,title:h,maskId:c,titleId:k,extra:{attributes:w,styles:z,classes:T}})})}},bm={mixout:function(){return{icon:gm(vm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=yo,n.nodeCallback=pm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ie:r,i=n.callback,o=i===void 0?function(){}:i;return yo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,d=r.maskId,h=r.extra;return new Promise(function(p,k){Promise.all([da(a,s),c.iconName?da(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var T=Wa(S,2),v=T[0],w=T[1];p([n,ei({icons:{main:v,mask:w},prefix:s,iconName:a,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(k)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Er(s);l.length>0&&(a.style=l);var f;return Ga(o)&&(f=rt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},ym={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Pr({type:"layer"},function(){Tt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(In(i)).join(" ")},children:o}]})}}}},xm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Pr({type:"counter",content:n},function(){return Tt("beforeDOMElementCreation",{content:n,params:r}),Zd({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(In(s))}})})}}}},wm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?qe:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,h=r.styles,p=h===void 0?{}:h;return Pr({type:"text",content:n},function(){return Tt("beforeDOMElementCreation",{content:n,params:r}),mo({content:n,transform:I(I({},qe),i),title:s,extra:{attributes:d,styles:p,classes:["".concat(L.cssPrefix,"-layers-text")].concat(In(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Ks){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return L.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,mo({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},_m=new RegExp('"',"ug"),xo=[1105920,1112319];function km(e){var t=e.replace(_m,""),n=Fd(t,0),r=n>=xo[0]&&n<=xo[1],a=t.length===2?t[0]===t[1]:!1;return{value:sa(a?t[0]:t),isSecondary:r||a}}function wo(e,t){var n="".concat(ud).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=on(e.children),o=i.filter(function(H){return H.getAttribute(oa)===t})[0],s=vt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(gd),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?fe:ae,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Pn[h][l[2].toLowerCase()]:vd[h][f],k=km(d),S=k.value,T=k.isSecondary,v=l[0].startsWith("FontAwesome"),w=Ja(p,S),N=w;if(v){var z=Ud(S);z.iconName&&z.prefix&&(w=z.iconName,p=z.prefix)}if(w&&!T&&(!o||o.getAttribute(Ka)!==p||o.getAttribute(Va)!==N)){e.setAttribute(n,N),o&&e.removeChild(o);var D=mm(),Q=D.extra;Q.attributes[oa]=t,da(w,p).then(function(H){var K=ei(I(I({},D),{},{icons:{main:H,mask:Za()},prefix:p,iconName:N,extra:Q,watchable:!0})),oe=ie.createElement("svg");t==="::before"?e.insertBefore(oe,e.firstChild):e.appendChild(oe),oe.outerHTML=K.map(function(ge){return Nn(ge)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Em(e){return Promise.all([wo(e,"::before"),wo(e,"::after")])}function Am(e){return e.parentNode!==document.head&&!~md.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(oa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function _o(e){if(!!it)return new Promise(function(t,n){var r=on(e.querySelectorAll("*")).filter(Am).map(Em),a=ti.begin("searchPseudoElements");ml(),Promise.all(r).then(function(){a(),ha(),t()}).catch(function(){a(),ha(),n()})})}var Om={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=_o,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ie:r;L.searchPseudoElements&&_o(a)}}},ko=!1,Pm={mixout:function(){return{dom:{unwatch:function(){ml(),ko=!0}}}},hooks:function(){return{bootstrap:function(){vo(ca("mutationObserverCallbacks",{}))},noAuto:function(){cm()},watch:function(n){var r=n.observeMutationsRoot;ko?ha():vo(ca("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Eo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Sm={mixout:function(){return{parse:{transform:function(n){return Eo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Eo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:d,path:h};return{tag:"g",attributes:I({},p.outer),children:[{tag:"g",attributes:I({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),p.path)}]}]}}}},Dr={x:0,y:0,width:"100%",height:"100%"};function Ao(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Cm(e){return e.tag==="g"?e.children:[e]}var Rm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Or(a.split(" ").map(function(o){return o.trim()})):Za();return i.prefix||(i.prefix=bt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,d=o.width,h=o.icon,p=Sd({transform:l,containerWidth:d,iconWidth:f}),k={tag:"rect",attributes:I(I({},Dr),{},{fill:"white"})},S=c.children?{children:c.children.map(Ao)}:{},T={tag:"g",attributes:I({},p.inner),children:[Ao(I({tag:c.tag,attributes:I(I({},c.attributes),p.path)},S))]},v={tag:"g",attributes:I({},p.outer),children:[T]},w="mask-".concat(s||Rn()),N="clip-".concat(s||Rn()),z={tag:"mask",attributes:I(I({},Dr),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,v]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:Cm(h)},z]};return r.push(D,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(w,")")},Dr)}),{children:r,attributes:a}}}},Im={provides:function(t){var n=!1;vt.matchMedia&&(n=vt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Tm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Nm=[Id,bm,ym,xm,wm,Om,Pm,Sm,Rm,Im,Tm];Kd(Nm,{mixoutsTo:Re});Re.noAuto;var pl=Re.config,Mm=Re.library;Re.dom;var fr=Re.parse;Re.findIconDefinition;Re.toHtml;var Lm=Re.icon;Re.layer;var Fm=Re.text;Re.counter;function Oo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Fe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Oo(Object(n),!0).forEach(function(r){Ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ur(e){return ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ur(e)}function Ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function $m(e,t){if(e==null)return{};var n=jm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function pa(e){return zm(e)||Dm(e)||Hm(e)||Bm()}function zm(e){if(Array.isArray(e))return ga(e)}function Dm(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Hm(e,t){if(!!e){if(typeof e=="string")return ga(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ga(e,t)}}function ga(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Bm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Um=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},gl={exports:{}};(function(e){(function(t){var n=function(v,w,N){if(!f(w)||d(w)||h(w)||p(w)||l(w))return w;var z,D=0,Q=0;if(c(w))for(z=[],Q=w.length;D<Q;D++)z.push(n(v,w[D],N));else{z={};for(var H in w)Object.prototype.hasOwnProperty.call(w,H)&&(z[v(H,N)]=n(v,w[H],N))}return z},r=function(v,w){w=w||{};var N=w.separator||"_",z=w.split||/(?=[A-Z])/;return v.split(z).join(N)},a=function(v){return k(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(w,N){return N?N.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var w=a(v);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(v,w){return r(v,w).toLowerCase()},s=Object.prototype.toString,l=function(v){return typeof v=="function"},f=function(v){return v===Object(v)},c=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},h=function(v){return s.call(v)=="[object RegExp]"},p=function(v){return s.call(v)=="[object Boolean]"},k=function(v){return v=v-0,v===v},S=function(v,w){var N=w&&"process"in w?w.process:w;return typeof N!="function"?v:function(z,D){return N(z,v,D)}},T={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,w){return n(S(a,w),v)},decamelizeKeys:function(v,w){return n(S(o,w),v,w)},pascalizeKeys:function(v,w){return n(S(i,w),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=T:t.humps=T})(Um)})(gl);var Wm=gl.exports,Ym=["class","style"];function Km(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Wm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Vm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ri(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ri(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Vm(c);break;case"style":l.style=Km(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=$m(n,Ym);return wr(e.tag,Fe(Fe(Fe({},t),{},{class:a.class,style:Fe(Fe({},a.style),o)},a.attrs),s),r)}var vl=!1;try{vl=!0}catch{}function qm(){if(!vl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function bn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ee({},e,t):{}}function Xm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Ee(t,"fa-".concat(e.size),e.size!==null),Ee(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Ee(t,"fa-pull-".concat(e.pull),e.pull!==null),Ee(t,"fa-swap-opacity",e.swapOpacity),Ee(t,"fa-bounce",e.bounce),Ee(t,"fa-shake",e.shake),Ee(t,"fa-beat",e.beat),Ee(t,"fa-fade",e.fade),Ee(t,"fa-beat-fade",e.beatFade),Ee(t,"fa-flash",e.flash),Ee(t,"fa-spin-pulse",e.spinPulse),Ee(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Po(e){if(e&&ur(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(fr.icon)return fr.icon(e);if(e===null)return null;if(ur(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Gm=an({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=se(function(){return Po(t.icon)}),i=se(function(){return bn("classes",Xm(t))}),o=se(function(){return bn("transform",typeof t.transform=="string"?fr.transform(t.transform):t.transform)}),s=se(function(){return bn("mask",Po(t.mask))}),l=se(function(){return Lm(a.value,Fe(Fe(Fe(Fe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Yt(l,function(c){if(!c)return qm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=se(function(){return l.value?ri(l.value.abstract[0],{},r):null});return function(){return f.value}}});an({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=pl.familyPrefix,i=se(function(){return["".concat(a,"-layers")].concat(pa(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return wr("div",{class:i.value},r.default?r.default():[])}}});an({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=pl.familyPrefix,i=se(function(){return bn("classes",[].concat(pa(t.counter?["".concat(a,"-layers-counter")]:[]),pa(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=se(function(){return bn("transform",typeof t.transform=="string"?fr.transform(t.transform):t.transform)}),s=se(function(){var f=Fm(t.value.toString(),Fe(Fe({},o.value),i.value)),c=f.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=se(function(){return ri(s.value,{},r)});return function(){return l.value}}});var Qm={prefix:"fas",iconName:"backward",icon:[512,512,[9194],"f04a","M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"]},Jm={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]},Zm={prefix:"fas",iconName:"computer-mouse",icon:[384,512,[128433,"mouse"],"f8cc","M0 192H176V0H160C71.6 0 0 71.6 0 160v32zm0 32V352c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224H192 0zm384-32V160C384 71.6 312.4 0 224 0H208V192H384z"]},eh={prefix:"fas",iconName:"keyboard",icon:[576,512,[9e3],"f11c","M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm16 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V144zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16H400c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336zM272 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM368 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V240zM464 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16z"]},th={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"]};Mm.add(Jm,th,Qm,Zm,eh);const nh=Qu();jf(Bf).component("font-awesome-icon",Gm).use(nh).use(Xu).mount("#app");export{Je as F,Df as _,Se as a,ya as b,oh as c,an as d,lh as e,Ia as f,se as g,Rc as h,ks as i,La as j,ih as k,ws as l,sh as m,ba as n,ys as o,ah as p,$c as r,rh as t,Yt as w};
