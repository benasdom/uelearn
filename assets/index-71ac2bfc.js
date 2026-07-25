var z4=Object.defineProperty;var T4=(e,t,n)=>t in e?z4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ee=(e,t,n)=>(T4(e,typeof t!="symbol"?t+"":t,n),n);function P4(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function G0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Q0={exports:{}},qi={},Z0={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var va=Symbol.for("react.element"),O4=Symbol.for("react.portal"),R4=Symbol.for("react.fragment"),L4=Symbol.for("react.strict_mode"),$4=Symbol.for("react.profiler"),M4=Symbol.for("react.provider"),I4=Symbol.for("react.context"),A4=Symbol.for("react.forward_ref"),D4=Symbol.for("react.suspense"),H4=Symbol.for("react.memo"),V4=Symbol.for("react.lazy"),Hc=Symbol.iterator;function F4(e){return e===null||typeof e!="object"?null:(e=Hc&&e[Hc]||e["@@iterator"],typeof e=="function"?e:null)}var Y0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J0=Object.assign,X0={};function yr(e,t,n){this.props=e,this.context=t,this.refs=X0,this.updater=n||Y0}yr.prototype.isReactComponent={};yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function K0(){}K0.prototype=yr.prototype;function yl(e,t,n){this.props=e,this.context=t,this.refs=X0,this.updater=n||Y0}var bl=yl.prototype=new K0;bl.constructor=yl;J0(bl,yr.prototype);bl.isPureReactComponent=!0;var Vc=Array.isArray,eu=Object.prototype.hasOwnProperty,wl={current:null},tu={key:!0,ref:!0,__self:!0,__source:!0};function nu(e,t,n){var r,a={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)eu.call(t,r)&&!tu.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:va,type:e,key:i,ref:o,props:a,_owner:wl.current}}function B4(e,t){return{$$typeof:va,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function kl(e){return typeof e=="object"&&e!==null&&e.$$typeof===va}function U4(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fc=/\/+/g;function vs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?U4(""+e.key):t.toString(36)}function Ya(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case va:case O4:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+vs(o,0):r,Vc(a)?(n="",e!=null&&(n=e.replace(Fc,"$&/")+"/"),Ya(a,t,n,"",function(u){return u})):a!=null&&(kl(a)&&(a=B4(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Fc,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",Vc(e))for(var l=0;l<e.length;l++){i=e[l];var c=r+vs(i,l);o+=Ya(i,t,n,c,a)}else if(c=F4(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=r+vs(i,l++),o+=Ya(i,t,n,c,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Sa(e,t,n){if(e==null)return e;var r=[],a=0;return Ya(e,r,"","",function(i){return t.call(n,i,a++)}),r}function W4(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var qe={current:null},Ja={transition:null},q4={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:Ja,ReactCurrentOwner:wl};U.Children={map:Sa,forEach:function(e,t,n){Sa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Sa(e,function(){t++}),t},toArray:function(e){return Sa(e,function(t){return t})||[]},only:function(e){if(!kl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=yr;U.Fragment=R4;U.Profiler=$4;U.PureComponent=yl;U.StrictMode=L4;U.Suspense=D4;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q4;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=J0({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=wl.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)eu.call(t,c)&&!tu.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:va,type:e.type,key:a,ref:i,props:r,_owner:o}};U.createContext=function(e){return e={$$typeof:I4,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:M4,_context:e},e.Consumer=e};U.createElement=nu;U.createFactory=function(e){var t=nu.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:A4,render:e}};U.isValidElement=kl;U.lazy=function(e){return{$$typeof:V4,_payload:{_status:-1,_result:e},_init:W4}};U.memo=function(e,t){return{$$typeof:H4,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Ja.transition;Ja.transition={};try{e()}finally{Ja.transition=t}};U.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};U.useCallback=function(e,t){return qe.current.useCallback(e,t)};U.useContext=function(e){return qe.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return qe.current.useDeferredValue(e)};U.useEffect=function(e,t){return qe.current.useEffect(e,t)};U.useId=function(){return qe.current.useId()};U.useImperativeHandle=function(e,t,n){return qe.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return qe.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return qe.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return qe.current.useMemo(e,t)};U.useReducer=function(e,t,n){return qe.current.useReducer(e,t,n)};U.useRef=function(e){return qe.current.useRef(e)};U.useState=function(e){return qe.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return qe.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return qe.current.useTransition()};U.version="18.2.0";Z0.exports=U;var p=Z0.exports;const di=G0(p),G4=P4({__proto__:null,default:di},[p]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q4=p,Z4=Symbol.for("react.element"),Y4=Symbol.for("react.fragment"),J4=Object.prototype.hasOwnProperty,X4=Q4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K4={key:!0,ref:!0,__self:!0,__source:!0};function ru(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)J4.call(t,r)&&!K4.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Z4,type:e,key:i,ref:o,props:a,_owner:X4.current}}qi.Fragment=Y4;qi.jsx=ru;qi.jsxs=ru;Q0.exports=qi;var s=Q0.exports,lo={},au={exports:{}},ot={},iu={exports:{}},su={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,L){var $=z.length;z.push(L);e:for(;0<$;){var W=$-1>>>1,q=z[W];if(0<a(q,L))z[W]=L,z[$]=q,$=W;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var L=z[0],$=z.pop();if($!==L){z[0]=$;e:for(var W=0,q=z.length,Oe=q>>>1;W<Oe;){var oe=2*(W+1)-1,Se=z[oe],D=oe+1,le=z[D];if(0>a(Se,$))D<q&&0>a(le,Se)?(z[W]=le,z[D]=$,W=D):(z[W]=Se,z[oe]=$,W=oe);else if(D<q&&0>a(le,$))z[W]=le,z[D]=$,W=D;else break e}}return L}function a(z,L){var $=z.sortIndex-L.sortIndex;return $!==0?$:z.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],d=1,m=null,h=3,w=!1,y=!1,b=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(z){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=z)r(u),L.sortIndex=L.expirationTime,t(c,L);else break;L=n(u)}}function k(z){if(b=!1,x(z),!y)if(n(c)!==null)y=!0,Ae(j);else{var L=n(u);L!==null&&De(k,L.startTime-z)}}function j(z,L){y=!1,b&&(b=!1,g(_),_=-1),w=!0;var $=h;try{for(x(L),m=n(c);m!==null&&(!(m.expirationTime>L)||z&&!A());){var W=m.callback;if(typeof W=="function"){m.callback=null,h=m.priorityLevel;var q=W(m.expirationTime<=L);L=e.unstable_now(),typeof q=="function"?m.callback=q:m===n(c)&&r(c),x(L)}else r(c);m=n(c)}if(m!==null)var Oe=!0;else{var oe=n(u);oe!==null&&De(k,oe.startTime-L),Oe=!1}return Oe}finally{m=null,h=$,w=!1}}var S=!1,N=null,_=-1,R=5,T=-1;function A(){return!(e.unstable_now()-T<R)}function Q(){if(N!==null){var z=e.unstable_now();T=z;var L=!0;try{L=N(!0,z)}finally{L?ge():(S=!1,N=null)}}else S=!1}var ge;if(typeof f=="function")ge=function(){f(Q)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,ct=Ie.port2;Ie.port1.onmessage=Q,ge=function(){ct.postMessage(null)}}else ge=function(){C(Q,0)};function Ae(z){N=z,S||(S=!0,ge())}function De(z,L){_=C(function(){z(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,Ae(j))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(z){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var $=h;h=L;try{return z()}finally{h=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,L){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=h;h=z;try{return L()}finally{h=$}},e.unstable_scheduleCallback=function(z,L,$){var W=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?W+$:W):$=W,z){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=$+q,z={id:d++,callback:L,priorityLevel:z,startTime:$,expirationTime:q,sortIndex:-1},$>W?(z.sortIndex=$,t(u,z),n(c)===null&&z===n(u)&&(b?(g(_),_=-1):b=!0,De(k,$-W))):(z.sortIndex=q,t(c,z),y||w||(y=!0,Ae(j))),z},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(z){var L=h;return function(){var $=h;h=L;try{return z.apply(this,arguments)}finally{h=$}}}})(su);iu.exports=su;var e3=iu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ou=p,it=e3;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lu=new Set,Jr={};function An(e,t){dr(e,t),dr(e+"Capture",t)}function dr(e,t){for(Jr[e]=t,e=0;e<t.length;e++)lu.add(t[e])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),co=Object.prototype.hasOwnProperty,t3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bc={},Uc={};function n3(e){return co.call(Uc,e)?!0:co.call(Bc,e)?!1:t3.test(e)?Uc[e]=!0:(Bc[e]=!0,!1)}function r3(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function a3(e,t,n,r){if(t===null||typeof t>"u"||r3(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ge(e,t,n,r,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pe[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pe[t]=new Ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pe[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pe[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pe[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pe[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pe[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pe[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pe[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cl=/[\-:]([a-z])/g;function jl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Cl,jl);Pe[t]=new Ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Cl,jl);Pe[t]=new Ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Cl,jl);Pe[t]=new Ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pe[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pe[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Sl(e,t,n,r){var a=Pe.hasOwnProperty(t)?Pe[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(a3(t,n,a,r)&&(n=null),r||a===null?n3(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Zt=ou.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Na=Symbol.for("react.element"),Gn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),Nl=Symbol.for("react.strict_mode"),uo=Symbol.for("react.profiler"),cu=Symbol.for("react.provider"),uu=Symbol.for("react.context"),El=Symbol.for("react.forward_ref"),po=Symbol.for("react.suspense"),fo=Symbol.for("react.suspense_list"),_l=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),du=Symbol.for("react.offscreen"),Wc=Symbol.iterator;function jr(e){return e===null||typeof e!="object"?null:(e=Wc&&e[Wc]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,xs;function $r(e){if(xs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xs=t&&t[1]||""}return`
`+xs+e}var ys=!1;function bs(e,t){if(!e||ys)return"";ys=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var c=`
`+a[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{ys=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$r(e):""}function i3(e){switch(e.tag){case 5:return $r(e.type);case 16:return $r("Lazy");case 13:return $r("Suspense");case 19:return $r("SuspenseList");case 0:case 2:case 15:return e=bs(e.type,!1),e;case 11:return e=bs(e.type.render,!1),e;case 1:return e=bs(e.type,!0),e;default:return""}}function ho(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case Gn:return"Portal";case uo:return"Profiler";case Nl:return"StrictMode";case po:return"Suspense";case fo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case uu:return(e.displayName||"Context")+".Consumer";case cu:return(e._context.displayName||"Context")+".Provider";case El:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _l:return t=e.displayName||null,t!==null?t:ho(e.type)||"Memo";case Xt:t=e._payload,e=e._init;try{return ho(e(t))}catch{}}return null}function s3(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ho(t);case 8:return t===Nl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function o3(e){var t=pu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ea(e){e._valueTracker||(e._valueTracker=o3(e))}function fu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function mo(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hu(e,t){t=t.checked,t!=null&&Sl(e,"checked",t,!1)}function go(e,t){hu(e,t);var n=gn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vo(e,t.type,n):t.hasOwnProperty("defaultValue")&&vo(e,t.type,gn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vo(e,t,n){(t!=="number"||pi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mr=Array.isArray;function ir(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function xo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Mr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gn(n)}}function mu(e,t){var n=gn(t.value),r=gn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _a,vu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_a=_a||document.createElement("div"),_a.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_a.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},l3=["Webkit","ms","Moz","O"];Object.keys(Hr).forEach(function(e){l3.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hr[t]=Hr[e]})});function xu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hr.hasOwnProperty(e)&&Hr[e]?(""+t).trim():t+"px"}function yu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=xu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var c3=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bo(e,t){if(t){if(c3[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function wo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ko=null;function zl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Co=null,sr=null,or=null;function Yc(e){if(e=ba(e)){if(typeof Co!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Ji(t),Co(e.stateNode,e.type,t))}}function bu(e){sr?or?or.push(e):or=[e]:sr=e}function wu(){if(sr){var e=sr,t=or;if(or=sr=null,Yc(e),t)for(e=0;e<t.length;e++)Yc(t[e])}}function ku(e,t){return e(t)}function Cu(){}var ws=!1;function ju(e,t,n){if(ws)return e(t,n);ws=!0;try{return ku(e,t,n)}finally{ws=!1,(sr!==null||or!==null)&&(Cu(),wu())}}function Kr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ji(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var jo=!1;if(Wt)try{var Sr={};Object.defineProperty(Sr,"passive",{get:function(){jo=!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{jo=!1}function u3(e,t,n,r,a,i,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Vr=!1,fi=null,hi=!1,So=null,d3={onError:function(e){Vr=!0,fi=e}};function p3(e,t,n,r,a,i,o,l,c){Vr=!1,fi=null,u3.apply(d3,arguments)}function f3(e,t,n,r,a,i,o,l,c){if(p3.apply(this,arguments),Vr){if(Vr){var u=fi;Vr=!1,fi=null}else throw Error(E(198));hi||(hi=!0,So=u)}}function Dn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Su(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jc(e){if(Dn(e)!==e)throw Error(E(188))}function h3(e){var t=e.alternate;if(!t){if(t=Dn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Jc(a),e;if(i===r)return Jc(a),t;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Nu(e){return e=h3(e),e!==null?Eu(e):null}function Eu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Eu(e);if(t!==null)return t;e=e.sibling}return null}var _u=it.unstable_scheduleCallback,Xc=it.unstable_cancelCallback,m3=it.unstable_shouldYield,g3=it.unstable_requestPaint,ve=it.unstable_now,v3=it.unstable_getCurrentPriorityLevel,Tl=it.unstable_ImmediatePriority,zu=it.unstable_UserBlockingPriority,mi=it.unstable_NormalPriority,x3=it.unstable_LowPriority,Tu=it.unstable_IdlePriority,Gi=null,Lt=null;function y3(e){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(Gi,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:k3,b3=Math.log,w3=Math.LN2;function k3(e){return e>>>=0,e===0?32:31-(b3(e)/w3|0)|0}var za=64,Ta=4194304;function Ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~a;l!==0?r=Ir(l):(i&=o,i!==0&&(r=Ir(i)))}else o=n&~a,o!==0?r=Ir(o):i!==0&&(r=Ir(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-jt(t),a=1<<n,r|=e[n],t&=~a;return r}function C3(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j3(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-jt(i),l=1<<o,c=a[o];c===-1?(!(l&n)||l&r)&&(a[o]=C3(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function No(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pu(){var e=za;return za<<=1,!(za&4194240)&&(za=64),e}function ks(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jt(t),e[t]=n}function S3(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-jt(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function Pl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-jt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var X=0;function Ou(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ru,Ol,Lu,$u,Mu,Eo=!1,Pa=[],on=null,ln=null,cn=null,ea=new Map,ta=new Map,en=[],N3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kc(e,t){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":ea.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(t.pointerId)}}function Nr(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=ba(t),t!==null&&Ol(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function E3(e,t,n,r,a){switch(t){case"focusin":return on=Nr(on,e,t,n,r,a),!0;case"dragenter":return ln=Nr(ln,e,t,n,r,a),!0;case"mouseover":return cn=Nr(cn,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return ea.set(i,Nr(ea.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,ta.set(i,Nr(ta.get(i)||null,e,t,n,r,a)),!0}return!1}function Iu(e){var t=Sn(e.target);if(t!==null){var n=Dn(t);if(n!==null){if(t=n.tag,t===13){if(t=Su(n),t!==null){e.blockedOn=t,Mu(e.priority,function(){Lu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_o(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ko=r,n.target.dispatchEvent(r),ko=null}else return t=ba(n),t!==null&&Ol(t),e.blockedOn=n,!1;t.shift()}return!0}function e1(e,t,n){Xa(e)&&n.delete(t)}function _3(){Eo=!1,on!==null&&Xa(on)&&(on=null),ln!==null&&Xa(ln)&&(ln=null),cn!==null&&Xa(cn)&&(cn=null),ea.forEach(e1),ta.forEach(e1)}function Er(e,t){e.blockedOn===t&&(e.blockedOn=null,Eo||(Eo=!0,it.unstable_scheduleCallback(it.unstable_NormalPriority,_3)))}function na(e){function t(a){return Er(a,e)}if(0<Pa.length){Er(Pa[0],e);for(var n=1;n<Pa.length;n++){var r=Pa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&Er(on,e),ln!==null&&Er(ln,e),cn!==null&&Er(cn,e),ea.forEach(t),ta.forEach(t),n=0;n<en.length;n++)r=en[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)Iu(n),n.blockedOn===null&&en.shift()}var lr=Zt.ReactCurrentBatchConfig,vi=!0;function z3(e,t,n,r){var a=X,i=lr.transition;lr.transition=null;try{X=1,Rl(e,t,n,r)}finally{X=a,lr.transition=i}}function T3(e,t,n,r){var a=X,i=lr.transition;lr.transition=null;try{X=4,Rl(e,t,n,r)}finally{X=a,lr.transition=i}}function Rl(e,t,n,r){if(vi){var a=_o(e,t,n,r);if(a===null)Os(e,t,r,xi,n),Kc(e,r);else if(E3(a,e,t,n,r))r.stopPropagation();else if(Kc(e,r),t&4&&-1<N3.indexOf(e)){for(;a!==null;){var i=ba(a);if(i!==null&&Ru(i),i=_o(e,t,n,r),i===null&&Os(e,t,r,xi,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else Os(e,t,r,null,n)}}var xi=null;function _o(e,t,n,r){if(xi=null,e=zl(r),e=Sn(e),e!==null)if(t=Dn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Su(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xi=e,null}function Au(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(v3()){case Tl:return 1;case zu:return 4;case mi:case x3:return 16;case Tu:return 536870912;default:return 16}default:return 16}}var nn=null,Ll=null,Ka=null;function Du(){if(Ka)return Ka;var e,t=Ll,n=t.length,r,a="value"in nn?nn.value:nn.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[i-r];r++);return Ka=a.slice(e,1<r?1-r:void 0)}function ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oa(){return!0}function t1(){return!1}function lt(e){function t(n,r,a,i,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Oa:t1,this.isPropagationStopped=t1,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),t}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=lt(br),ya=fe({},br,{view:0,detail:0}),P3=lt(ya),Cs,js,_r,Qi=fe({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_r&&(_r&&e.type==="mousemove"?(Cs=e.screenX-_r.screenX,js=e.screenY-_r.screenY):js=Cs=0,_r=e),Cs)},movementY:function(e){return"movementY"in e?e.movementY:js}}),n1=lt(Qi),O3=fe({},Qi,{dataTransfer:0}),R3=lt(O3),L3=fe({},ya,{relatedTarget:0}),Ss=lt(L3),$3=fe({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),M3=lt($3),I3=fe({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),A3=lt(I3),D3=fe({},br,{data:0}),r1=lt(D3),H3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B3(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=F3[e])?!!t[e]:!1}function Ml(){return B3}var U3=fe({},ya,{key:function(e){if(e.key){var t=H3[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?V3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ml,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),W3=lt(U3),q3=fe({},Qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),a1=lt(q3),G3=fe({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ml}),Q3=lt(G3),Z3=fe({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y3=lt(Z3),J3=fe({},Qi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),X3=lt(J3),K3=[9,13,27,32],Il=Wt&&"CompositionEvent"in window,Fr=null;Wt&&"documentMode"in document&&(Fr=document.documentMode);var e6=Wt&&"TextEvent"in window&&!Fr,Hu=Wt&&(!Il||Fr&&8<Fr&&11>=Fr),i1=String.fromCharCode(32),s1=!1;function Vu(e,t){switch(e){case"keyup":return K3.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function t6(e,t){switch(e){case"compositionend":return Fu(t);case"keypress":return t.which!==32?null:(s1=!0,i1);case"textInput":return e=t.data,e===i1&&s1?null:e;default:return null}}function n6(e,t){if(Zn)return e==="compositionend"||!Il&&Vu(e,t)?(e=Du(),Ka=Ll=nn=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hu&&t.locale!=="ko"?null:t.data;default:return null}}var r6={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function o1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!r6[e.type]:t==="textarea"}function Bu(e,t,n,r){bu(r),t=yi(t,"onChange"),0<t.length&&(n=new $l("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Br=null,ra=null;function a6(e){ed(e,0)}function Zi(e){var t=Xn(e);if(fu(t))return e}function i6(e,t){if(e==="change")return t}var Uu=!1;if(Wt){var Ns;if(Wt){var Es="oninput"in document;if(!Es){var l1=document.createElement("div");l1.setAttribute("oninput","return;"),Es=typeof l1.oninput=="function"}Ns=Es}else Ns=!1;Uu=Ns&&(!document.documentMode||9<document.documentMode)}function c1(){Br&&(Br.detachEvent("onpropertychange",Wu),ra=Br=null)}function Wu(e){if(e.propertyName==="value"&&Zi(ra)){var t=[];Bu(t,ra,e,zl(e)),ju(a6,t)}}function s6(e,t,n){e==="focusin"?(c1(),Br=t,ra=n,Br.attachEvent("onpropertychange",Wu)):e==="focusout"&&c1()}function o6(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zi(ra)}function l6(e,t){if(e==="click")return Zi(t)}function c6(e,t){if(e==="input"||e==="change")return Zi(t)}function u6(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:u6;function aa(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!co.call(t,a)||!Nt(e[a],t[a]))return!1}return!0}function u1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function d1(e,t){var n=u1(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=u1(n)}}function qu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gu(){for(var e=window,t=pi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pi(e.document)}return t}function Al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function d6(e){var t=Gu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qu(n.ownerDocument.documentElement,n)){if(r!==null&&Al(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=d1(n,i);var o=d1(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var p6=Wt&&"documentMode"in document&&11>=document.documentMode,Yn=null,zo=null,Ur=null,To=!1;function p1(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;To||Yn==null||Yn!==pi(r)||(r=Yn,"selectionStart"in r&&Al(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&aa(Ur,r)||(Ur=r,r=yi(zo,"onSelect"),0<r.length&&(t=new $l("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yn)))}function Ra(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jn={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},_s={},Qu={};Wt&&(Qu=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function Yi(e){if(_s[e])return _s[e];if(!Jn[e])return e;var t=Jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qu)return _s[e]=t[n];return e}var Zu=Yi("animationend"),Yu=Yi("animationiteration"),Ju=Yi("animationstart"),Xu=Yi("transitionend"),Ku=new Map,f1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,t){Ku.set(e,t),An(t,[e])}for(var zs=0;zs<f1.length;zs++){var Ts=f1[zs],f6=Ts.toLowerCase(),h6=Ts[0].toUpperCase()+Ts.slice(1);xn(f6,"on"+h6)}xn(Zu,"onAnimationEnd");xn(Yu,"onAnimationIteration");xn(Ju,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(Xu,"onTransitionEnd");dr("onMouseEnter",["mouseout","mouseover"]);dr("onMouseLeave",["mouseout","mouseover"]);dr("onPointerEnter",["pointerout","pointerover"]);dr("onPointerLeave",["pointerout","pointerover"]);An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));An("onBeforeInput",["compositionend","keypress","textInput","paste"]);An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m6=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));function h1(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,f3(r,t,void 0,e),e.currentTarget=null}function ed(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&a.isPropagationStopped())break e;h1(a,l,u),i=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&a.isPropagationStopped())break e;h1(a,l,u),i=c}}}if(hi)throw e=So,hi=!1,So=null,e}function re(e,t){var n=t[$o];n===void 0&&(n=t[$o]=new Set);var r=e+"__bubble";n.has(r)||(td(t,e,2,!1),n.add(r))}function Ps(e,t,n){var r=0;t&&(r|=4),td(n,e,r,t)}var La="_reactListening"+Math.random().toString(36).slice(2);function ia(e){if(!e[La]){e[La]=!0,lu.forEach(function(n){n!=="selectionchange"&&(m6.has(n)||Ps(n,!1,e),Ps(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[La]||(t[La]=!0,Ps("selectionchange",!1,t))}}function td(e,t,n,r){switch(Au(t)){case 1:var a=z3;break;case 4:a=T3;break;default:a=Rl}n=a.bind(null,t,n,e),a=void 0,!jo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Os(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;o=o.return}for(;l!==null;){if(o=Sn(l),o===null)return;if(c=o.tag,c===5||c===6){r=i=o;continue e}l=l.parentNode}}r=r.return}ju(function(){var u=i,d=zl(n),m=[];e:{var h=Ku.get(e);if(h!==void 0){var w=$l,y=e;switch(e){case"keypress":if(ei(n)===0)break e;case"keydown":case"keyup":w=W3;break;case"focusin":y="focus",w=Ss;break;case"focusout":y="blur",w=Ss;break;case"beforeblur":case"afterblur":w=Ss;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=n1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=R3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Q3;break;case Zu:case Yu:case Ju:w=M3;break;case Xu:w=Y3;break;case"scroll":w=P3;break;case"wheel":w=X3;break;case"copy":case"cut":case"paste":w=A3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=a1}var b=(t&4)!==0,C=!b&&e==="scroll",g=b?h!==null?h+"Capture":null:h;b=[];for(var f=u,x;f!==null;){x=f;var k=x.stateNode;if(x.tag===5&&k!==null&&(x=k,g!==null&&(k=Kr(f,g),k!=null&&b.push(sa(f,k,x)))),C)break;f=f.return}0<b.length&&(h=new w(h,y,null,n,d),m.push({event:h,listeners:b}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==ko&&(y=n.relatedTarget||n.fromElement)&&(Sn(y)||y[qt]))break e;if((w||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=u,y=y?Sn(y):null,y!==null&&(C=Dn(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(b=n1,k="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(b=a1,k="onPointerLeave",g="onPointerEnter",f="pointer"),C=w==null?h:Xn(w),x=y==null?h:Xn(y),h=new b(k,f+"leave",w,n,d),h.target=C,h.relatedTarget=x,k=null,Sn(d)===u&&(b=new b(g,f+"enter",y,n,d),b.target=x,b.relatedTarget=C,k=b),C=k,w&&y)t:{for(b=w,g=y,f=0,x=b;x;x=Un(x))f++;for(x=0,k=g;k;k=Un(k))x++;for(;0<f-x;)b=Un(b),f--;for(;0<x-f;)g=Un(g),x--;for(;f--;){if(b===g||g!==null&&b===g.alternate)break t;b=Un(b),g=Un(g)}b=null}else b=null;w!==null&&m1(m,h,w,b,!1),y!==null&&C!==null&&m1(m,C,y,b,!0)}}e:{if(h=u?Xn(u):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var j=i6;else if(o1(h))if(Uu)j=c6;else{j=o6;var S=s6}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=l6);if(j&&(j=j(e,u))){Bu(m,j,n,d);break e}S&&S(e,h,u),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&vo(h,"number",h.value)}switch(S=u?Xn(u):window,e){case"focusin":(o1(S)||S.contentEditable==="true")&&(Yn=S,zo=u,Ur=null);break;case"focusout":Ur=zo=Yn=null;break;case"mousedown":To=!0;break;case"contextmenu":case"mouseup":case"dragend":To=!1,p1(m,n,d);break;case"selectionchange":if(p6)break;case"keydown":case"keyup":p1(m,n,d)}var N;if(Il)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Zn?Vu(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Hu&&n.locale!=="ko"&&(Zn||_!=="onCompositionStart"?_==="onCompositionEnd"&&Zn&&(N=Du()):(nn=d,Ll="value"in nn?nn.value:nn.textContent,Zn=!0)),S=yi(u,_),0<S.length&&(_=new r1(_,e,null,n,d),m.push({event:_,listeners:S}),N?_.data=N:(N=Fu(n),N!==null&&(_.data=N)))),(N=e6?t6(e,n):n6(e,n))&&(u=yi(u,"onBeforeInput"),0<u.length&&(d=new r1("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:u}),d.data=N))}ed(m,t)})}function sa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yi(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Kr(e,n),i!=null&&r.unshift(sa(e,i,a)),i=Kr(e,t),i!=null&&r.push(sa(e,i,a))),e=e.return}return r}function Un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function m1(e,t,n,r,a){for(var i=t._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,a?(c=Kr(n,i),c!=null&&o.unshift(sa(n,c,l))):a||(c=Kr(n,i),c!=null&&o.push(sa(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var g6=/\r\n?/g,v6=/\u0000|\uFFFD/g;function g1(e){return(typeof e=="string"?e:""+e).replace(g6,`
`).replace(v6,"")}function $a(e,t,n){if(t=g1(t),g1(e)!==t&&n)throw Error(E(425))}function bi(){}var Po=null,Oo=null;function Ro(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lo=typeof setTimeout=="function"?setTimeout:void 0,x6=typeof clearTimeout=="function"?clearTimeout:void 0,v1=typeof Promise=="function"?Promise:void 0,y6=typeof queueMicrotask=="function"?queueMicrotask:typeof v1<"u"?function(e){return v1.resolve(null).then(e).catch(b6)}:Lo;function b6(e){setTimeout(function(){throw e})}function Rs(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),na(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);na(t)}function un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function x1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),Pt="__reactFiber$"+wr,oa="__reactProps$"+wr,qt="__reactContainer$"+wr,$o="__reactEvents$"+wr,w6="__reactListeners$"+wr,k6="__reactHandles$"+wr;function Sn(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qt]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=x1(e);e!==null;){if(n=e[Pt])return n;e=x1(e)}return t}e=n,n=e.parentNode}return null}function ba(e){return e=e[Pt]||e[qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Ji(e){return e[oa]||null}var Mo=[],Kn=-1;function yn(e){return{current:e}}function ae(e){0>Kn||(e.current=Mo[Kn],Mo[Kn]=null,Kn--)}function ne(e,t){Kn++,Mo[Kn]=e.current,e.current=t}var vn={},Me=yn(vn),Je=yn(!1),Tn=vn;function pr(e,t){var n=e.type.contextTypes;if(!n)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Xe(e){return e=e.childContextTypes,e!=null}function wi(){ae(Je),ae(Me)}function y1(e,t,n){if(Me.current!==vn)throw Error(E(168));ne(Me,t),ne(Je,n)}function nd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(E(108,s3(e)||"Unknown",a));return fe({},n,r)}function ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,Tn=Me.current,ne(Me,e),ne(Je,Je.current),!0}function b1(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=nd(e,t,Tn),r.__reactInternalMemoizedMergedChildContext=e,ae(Je),ae(Me),ne(Me,e)):ae(Je),ne(Je,n)}var Dt=null,Xi=!1,Ls=!1;function rd(e){Dt===null?Dt=[e]:Dt.push(e)}function C6(e){Xi=!0,rd(e)}function bn(){if(!Ls&&Dt!==null){Ls=!0;var e=0,t=X;try{var n=Dt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dt=null,Xi=!1}catch(a){throw Dt!==null&&(Dt=Dt.slice(e+1)),_u(Tl,bn),a}finally{X=t,Ls=!1}}return null}var er=[],tr=0,Ci=null,ji=0,dt=[],pt=0,Pn=null,Ht=1,Vt="";function Cn(e,t){er[tr++]=ji,er[tr++]=Ci,Ci=e,ji=t}function ad(e,t,n){dt[pt++]=Ht,dt[pt++]=Vt,dt[pt++]=Pn,Pn=e;var r=Ht;e=Vt;var a=32-jt(r)-1;r&=~(1<<a),n+=1;var i=32-jt(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Ht=1<<32-jt(t)+a|n<<a|r,Vt=i+e}else Ht=1<<i|n<<a|r,Vt=e}function Dl(e){e.return!==null&&(Cn(e,1),ad(e,1,0))}function Hl(e){for(;e===Ci;)Ci=er[--tr],er[tr]=null,ji=er[--tr],er[tr]=null;for(;e===Pn;)Pn=dt[--pt],dt[pt]=null,Vt=dt[--pt],dt[pt]=null,Ht=dt[--pt],dt[pt]=null}var at=null,rt=null,se=!1,Ct=null;function id(e,t){var n=ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function w1(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,rt=un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:Ht,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,rt=null,!0):!1;default:return!1}}function Io(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ao(e){if(se){var t=rt;if(t){var n=t;if(!w1(e,t)){if(Io(e))throw Error(E(418));t=un(n.nextSibling);var r=at;t&&w1(e,t)?id(r,n):(e.flags=e.flags&-4097|2,se=!1,at=e)}}else{if(Io(e))throw Error(E(418));e.flags=e.flags&-4097|2,se=!1,at=e}}}function k1(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function Ma(e){if(e!==at)return!1;if(!se)return k1(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ro(e.type,e.memoizedProps)),t&&(t=rt)){if(Io(e))throw sd(),Error(E(418));for(;t;)id(e,t),t=un(t.nextSibling)}if(k1(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){rt=un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=at?un(e.stateNode.nextSibling):null;return!0}function sd(){for(var e=rt;e;)e=un(e.nextSibling)}function fr(){rt=at=null,se=!1}function Vl(e){Ct===null?Ct=[e]:Ct.push(e)}var j6=Zt.ReactCurrentBatchConfig;function wt(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Si=yn(null),Ni=null,nr=null,Fl=null;function Bl(){Fl=nr=Ni=null}function Ul(e){var t=Si.current;ae(Si),e._currentValue=t}function Do(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cr(e,t){Ni=e,Fl=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ye=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(Fl!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(Ni===null)throw Error(E(308));nr=e,Ni.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var Nn=null;function Wl(e){Nn===null?Nn=[e]:Nn.push(e)}function od(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Wl(t)):(n.next=a.next,a.next=n),t.interleaved=n,Gt(e,r)}function Gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kt=!1;function ql(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ld(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Gt(e,n)}return a=r.interleaved,a===null?(t.next=t,Wl(r)):(t.next=a.next,a.next=t),r.interleaved=t,Gt(e,n)}function ti(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pl(e,n)}}function C1(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ei(e,t,n,r){var a=e.updateQueue;Kt=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?i=u:o.next=u,o=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(i!==null){var m=a.baseState;o=0,d=u=c=null,l=i;do{var h=l.lane,w=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,b=l;switch(h=t,w=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){m=y.call(w,m,h);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,h=typeof y=="function"?y.call(w,m,h):y,h==null)break e;m=fe({},m,h);break e;case 2:Kt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[l]:h.push(l))}else w={eventTime:w,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=w,c=m):d=d.next=w,o|=h;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;h=l,l=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(1);if(d===null&&(c=m),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=d,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);Rn|=o,e.lanes=o,e.memoizedState=m}}function j1(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(E(191,a));a.call(r)}}}var cd=new ou.Component().refs;function Ho(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ki={isMounted:function(e){return(e=e._reactInternals)?Dn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=We(),a=fn(e),i=Ut(r,a);i.payload=t,n!=null&&(i.callback=n),t=dn(e,i,a),t!==null&&(St(t,e,a,r),ti(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=We(),a=fn(e),i=Ut(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=dn(e,i,a),t!==null&&(St(t,e,a,r),ti(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),r=fn(e),a=Ut(n,r);a.tag=2,t!=null&&(a.callback=t),t=dn(e,a,r),t!==null&&(St(t,e,r,n),ti(t,e,r))}};function S1(e,t,n,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!aa(n,r)||!aa(a,i):!0}function ud(e,t,n){var r=!1,a=vn,i=t.contextType;return typeof i=="object"&&i!==null?i=vt(i):(a=Xe(t)?Tn:Me.current,r=t.contextTypes,i=(r=r!=null)?pr(e,a):vn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ki,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function N1(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ki.enqueueReplaceState(t,t.state,null)}function Vo(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=cd,ql(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=vt(i):(i=Xe(t)?Tn:Me.current,a.context=pr(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ho(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Ki.enqueueReplaceState(a,a.state,null),Ei(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function zr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;l===cd&&(l=a.refs={}),o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Ia(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function E1(e){var t=e._init;return t(e._payload)}function dd(e){function t(g,f){if(e){var x=g.deletions;x===null?(g.deletions=[f],g.flags|=16):x.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function a(g,f){return g=hn(g,f),g.index=0,g.sibling=null,g}function i(g,f,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<f?(g.flags|=2,f):x):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,f,x,k){return f===null||f.tag!==6?(f=Vs(x,g.mode,k),f.return=g,f):(f=a(f,x),f.return=g,f)}function c(g,f,x,k){var j=x.type;return j===Qn?d(g,f,x.props.children,k,x.key):f!==null&&(f.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Xt&&E1(j)===f.type)?(k=a(f,x.props),k.ref=zr(g,f,x),k.return=g,k):(k=oi(x.type,x.key,x.props,null,g.mode,k),k.ref=zr(g,f,x),k.return=g,k)}function u(g,f,x,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=Fs(x,g.mode,k),f.return=g,f):(f=a(f,x.children||[]),f.return=g,f)}function d(g,f,x,k,j){return f===null||f.tag!==7?(f=zn(x,g.mode,k,j),f.return=g,f):(f=a(f,x),f.return=g,f)}function m(g,f,x){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Vs(""+f,g.mode,x),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Na:return x=oi(f.type,f.key,f.props,null,g.mode,x),x.ref=zr(g,null,f),x.return=g,x;case Gn:return f=Fs(f,g.mode,x),f.return=g,f;case Xt:var k=f._init;return m(g,k(f._payload),x)}if(Mr(f)||jr(f))return f=zn(f,g.mode,x,null),f.return=g,f;Ia(g,f)}return null}function h(g,f,x,k){var j=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return j!==null?null:l(g,f,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Na:return x.key===j?c(g,f,x,k):null;case Gn:return x.key===j?u(g,f,x,k):null;case Xt:return j=x._init,h(g,f,j(x._payload),k)}if(Mr(x)||jr(x))return j!==null?null:d(g,f,x,k,null);Ia(g,x)}return null}function w(g,f,x,k,j){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(x)||null,l(f,g,""+k,j);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Na:return g=g.get(k.key===null?x:k.key)||null,c(f,g,k,j);case Gn:return g=g.get(k.key===null?x:k.key)||null,u(f,g,k,j);case Xt:var S=k._init;return w(g,f,x,S(k._payload),j)}if(Mr(k)||jr(k))return g=g.get(x)||null,d(f,g,k,j,null);Ia(f,k)}return null}function y(g,f,x,k){for(var j=null,S=null,N=f,_=f=0,R=null;N!==null&&_<x.length;_++){N.index>_?(R=N,N=null):R=N.sibling;var T=h(g,N,x[_],k);if(T===null){N===null&&(N=R);break}e&&N&&T.alternate===null&&t(g,N),f=i(T,f,_),S===null?j=T:S.sibling=T,S=T,N=R}if(_===x.length)return n(g,N),se&&Cn(g,_),j;if(N===null){for(;_<x.length;_++)N=m(g,x[_],k),N!==null&&(f=i(N,f,_),S===null?j=N:S.sibling=N,S=N);return se&&Cn(g,_),j}for(N=r(g,N);_<x.length;_++)R=w(N,g,_,x[_],k),R!==null&&(e&&R.alternate!==null&&N.delete(R.key===null?_:R.key),f=i(R,f,_),S===null?j=R:S.sibling=R,S=R);return e&&N.forEach(function(A){return t(g,A)}),se&&Cn(g,_),j}function b(g,f,x,k){var j=jr(x);if(typeof j!="function")throw Error(E(150));if(x=j.call(x),x==null)throw Error(E(151));for(var S=j=null,N=f,_=f=0,R=null,T=x.next();N!==null&&!T.done;_++,T=x.next()){N.index>_?(R=N,N=null):R=N.sibling;var A=h(g,N,T.value,k);if(A===null){N===null&&(N=R);break}e&&N&&A.alternate===null&&t(g,N),f=i(A,f,_),S===null?j=A:S.sibling=A,S=A,N=R}if(T.done)return n(g,N),se&&Cn(g,_),j;if(N===null){for(;!T.done;_++,T=x.next())T=m(g,T.value,k),T!==null&&(f=i(T,f,_),S===null?j=T:S.sibling=T,S=T);return se&&Cn(g,_),j}for(N=r(g,N);!T.done;_++,T=x.next())T=w(N,g,_,T.value,k),T!==null&&(e&&T.alternate!==null&&N.delete(T.key===null?_:T.key),f=i(T,f,_),S===null?j=T:S.sibling=T,S=T);return e&&N.forEach(function(Q){return t(g,Q)}),se&&Cn(g,_),j}function C(g,f,x,k){if(typeof x=="object"&&x!==null&&x.type===Qn&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Na:e:{for(var j=x.key,S=f;S!==null;){if(S.key===j){if(j=x.type,j===Qn){if(S.tag===7){n(g,S.sibling),f=a(S,x.props.children),f.return=g,g=f;break e}}else if(S.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Xt&&E1(j)===S.type){n(g,S.sibling),f=a(S,x.props),f.ref=zr(g,S,x),f.return=g,g=f;break e}n(g,S);break}else t(g,S);S=S.sibling}x.type===Qn?(f=zn(x.props.children,g.mode,k,x.key),f.return=g,g=f):(k=oi(x.type,x.key,x.props,null,g.mode,k),k.ref=zr(g,f,x),k.return=g,g=k)}return o(g);case Gn:e:{for(S=x.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){n(g,f.sibling),f=a(f,x.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else t(g,f);f=f.sibling}f=Fs(x,g.mode,k),f.return=g,g=f}return o(g);case Xt:return S=x._init,C(g,f,S(x._payload),k)}if(Mr(x))return y(g,f,x,k);if(jr(x))return b(g,f,x,k);Ia(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,f!==null&&f.tag===6?(n(g,f.sibling),f=a(f,x),f.return=g,g=f):(n(g,f),f=Vs(x,g.mode,k),f.return=g,g=f),o(g)):n(g,f)}return C}var hr=dd(!0),pd=dd(!1),wa={},$t=yn(wa),la=yn(wa),ca=yn(wa);function En(e){if(e===wa)throw Error(E(174));return e}function Gl(e,t){switch(ne(ca,t),ne(la,e),ne($t,wa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yo(t,e)}ae($t),ne($t,t)}function mr(){ae($t),ae(la),ae(ca)}function fd(e){En(ca.current);var t=En($t.current),n=yo(t,e.type);t!==n&&(ne(la,e),ne($t,n))}function Ql(e){la.current===e&&(ae($t),ae(la))}var ue=yn(0);function _i(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $s=[];function Zl(){for(var e=0;e<$s.length;e++)$s[e]._workInProgressVersionPrimary=null;$s.length=0}var ni=Zt.ReactCurrentDispatcher,Ms=Zt.ReactCurrentBatchConfig,On=0,pe=null,Ce=null,Ee=null,zi=!1,Wr=!1,ua=0,S6=0;function Re(){throw Error(E(321))}function Yl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nt(e[n],t[n]))return!1;return!0}function Jl(e,t,n,r,a,i){if(On=i,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ni.current=e===null||e.memoizedState===null?z6:T6,e=n(r,a),Wr){i=0;do{if(Wr=!1,ua=0,25<=i)throw Error(E(301));i+=1,Ee=Ce=null,t.updateQueue=null,ni.current=P6,e=n(r,a)}while(Wr)}if(ni.current=Ti,t=Ce!==null&&Ce.next!==null,On=0,Ee=Ce=pe=null,zi=!1,t)throw Error(E(300));return e}function Xl(){var e=ua!==0;return ua=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?pe.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function xt(){if(Ce===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Ee===null?pe.memoizedState:Ee.next;if(t!==null)Ee=t,Ce=e;else{if(e===null)throw Error(E(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ee===null?pe.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function da(e,t){return typeof t=="function"?t(e):t}function Is(e){var t=xt(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=Ce,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var l=o=null,c=null,u=i;do{var d=u.lane;if((On&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,o=r):c=c.next=m,pe.lanes|=d,Rn|=d}u=u.next}while(u!==null&&u!==i);c===null?o=r:c.next=l,Nt(r,t.memoizedState)||(Ye=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,pe.lanes|=i,Rn|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function As(e){var t=xt(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);Nt(i,t.memoizedState)||(Ye=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function hd(){}function md(e,t){var n=pe,r=xt(),a=t(),i=!Nt(r.memoizedState,a);if(i&&(r.memoizedState=a,Ye=!0),r=r.queue,Kl(xd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,pa(9,vd.bind(null,n,r,a,t),void 0,null),_e===null)throw Error(E(349));On&30||gd(n,t,a)}return a}function gd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vd(e,t,n,r){t.value=n,t.getSnapshot=r,yd(t)&&bd(e)}function xd(e,t,n){return n(function(){yd(t)&&bd(e)})}function yd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nt(e,n)}catch{return!0}}function bd(e){var t=Gt(e,1);t!==null&&St(t,e,1,-1)}function _1(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:e},t.queue=e,e=e.dispatch=_6.bind(null,pe,e),[t.memoizedState,e]}function pa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wd(){return xt().memoizedState}function ri(e,t,n,r){var a=Tt();pe.flags|=e,a.memoizedState=pa(1|t,n,void 0,r===void 0?null:r)}function es(e,t,n,r){var a=xt();r=r===void 0?null:r;var i=void 0;if(Ce!==null){var o=Ce.memoizedState;if(i=o.destroy,r!==null&&Yl(r,o.deps)){a.memoizedState=pa(t,n,i,r);return}}pe.flags|=e,a.memoizedState=pa(1|t,n,i,r)}function z1(e,t){return ri(8390656,8,e,t)}function Kl(e,t){return es(2048,8,e,t)}function kd(e,t){return es(4,2,e,t)}function Cd(e,t){return es(4,4,e,t)}function jd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sd(e,t,n){return n=n!=null?n.concat([e]):null,es(4,4,jd.bind(null,t,e),n)}function ec(){}function Nd(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ed(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _d(e,t,n){return On&21?(Nt(n,t)||(n=Pu(),pe.lanes|=n,Rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=n)}function N6(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=Ms.transition;Ms.transition={};try{e(!1),t()}finally{X=n,Ms.transition=r}}function zd(){return xt().memoizedState}function E6(e,t,n){var r=fn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Td(e))Pd(t,n);else if(n=od(e,t,n,r),n!==null){var a=We();St(n,e,r,a),Od(n,t,r)}}function _6(e,t,n){var r=fn(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Td(e))Pd(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,Nt(l,o)){var c=t.interleaved;c===null?(a.next=a,Wl(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=od(e,t,a,r),n!==null&&(a=We(),St(n,e,r,a),Od(n,t,r))}}function Td(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Pd(e,t){Wr=zi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Od(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pl(e,n)}}var Ti={readContext:vt,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},z6={readContext:vt,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:z1,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ri(4194308,4,jd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return ri(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=E6.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:_1,useDebugValue:ec,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=_1(!1),t=e[0];return e=N6.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=pe,a=Tt();if(se){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),_e===null)throw Error(E(349));On&30||gd(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,z1(xd.bind(null,r,i,e),[e]),r.flags|=2048,pa(9,vd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Tt(),t=_e.identifierPrefix;if(se){var n=Vt,r=Ht;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ua++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=S6++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},T6={readContext:vt,useCallback:Nd,useContext:vt,useEffect:Kl,useImperativeHandle:Sd,useInsertionEffect:kd,useLayoutEffect:Cd,useMemo:Ed,useReducer:Is,useRef:wd,useState:function(){return Is(da)},useDebugValue:ec,useDeferredValue:function(e){var t=xt();return _d(t,Ce.memoizedState,e)},useTransition:function(){var e=Is(da)[0],t=xt().memoizedState;return[e,t]},useMutableSource:hd,useSyncExternalStore:md,useId:zd,unstable_isNewReconciler:!1},P6={readContext:vt,useCallback:Nd,useContext:vt,useEffect:Kl,useImperativeHandle:Sd,useInsertionEffect:kd,useLayoutEffect:Cd,useMemo:Ed,useReducer:As,useRef:wd,useState:function(){return As(da)},useDebugValue:ec,useDeferredValue:function(e){var t=xt();return Ce===null?t.memoizedState=e:_d(t,Ce.memoizedState,e)},useTransition:function(){var e=As(da)[0],t=xt().memoizedState;return[e,t]},useMutableSource:hd,useSyncExternalStore:md,useId:zd,unstable_isNewReconciler:!1};function gr(e,t){try{var n="",r=t;do n+=i3(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Ds(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var O6=typeof WeakMap=="function"?WeakMap:Map;function Rd(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oi||(Oi=!0,Xo=r),Fo(e,t)},n}function Ld(e,t,n){n=Ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Fo(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Fo(e,t),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function T1(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new O6;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=q6.bind(null,e,t,n),t.then(e,e))}function P1(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function O1(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e)}var R6=Zt.ReactCurrentOwner,Ye=!1;function Be(e,t,n,r){t.child=e===null?pd(t,null,n,r):hr(t,e.child,n,r)}function R1(e,t,n,r,a){n=n.render;var i=t.ref;return cr(t,a),r=Jl(e,t,n,r,i,a),n=Xl(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Qt(e,t,a)):(se&&n&&Dl(t),t.flags|=1,Be(e,t,r,a),t.child)}function L1(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!lc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,$d(e,t,i,r,a)):(e=oi(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:aa,n(o,r)&&e.ref===t.ref)return Qt(e,t,a)}return t.flags|=1,e=hn(i,r),e.ref=t.ref,e.return=t,t.child=e}function $d(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(aa(i,r)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(Ye=!0);else return t.lanes=e.lanes,Qt(e,t,a)}return Bo(e,t,n,r,a)}function Md(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(ar,nt),nt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(ar,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ne(ar,nt),nt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ne(ar,nt),nt|=r;return Be(e,t,a,n),t.child}function Id(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bo(e,t,n,r,a){var i=Xe(n)?Tn:Me.current;return i=pr(t,i),cr(t,a),n=Jl(e,t,n,r,i,a),r=Xl(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Qt(e,t,a)):(se&&r&&Dl(t),t.flags|=1,Be(e,t,n,a),t.child)}function $1(e,t,n,r,a){if(Xe(n)){var i=!0;ki(t)}else i=!1;if(cr(t,a),t.stateNode===null)ai(e,t),ud(t,n,r),Vo(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=Xe(n)?Tn:Me.current,u=pr(t,u));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&N1(t,o,r,u),Kt=!1;var h=t.memoizedState;o.state=h,Ei(t,r,o,a),c=t.memoizedState,l!==r||h!==c||Je.current||Kt?(typeof d=="function"&&(Ho(t,n,d,r),c=t.memoizedState),(l=Kt||S1(t,n,l,r,h,c,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ld(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:wt(t.type,l),o.props=u,m=t.pendingProps,h=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=vt(c):(c=Xe(n)?Tn:Me.current,c=pr(t,c));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||h!==c)&&N1(t,o,r,c),Kt=!1,h=t.memoizedState,o.state=h,Ei(t,r,o,a);var y=t.memoizedState;l!==m||h!==y||Je.current||Kt?(typeof w=="function"&&(Ho(t,n,w,r),y=t.memoizedState),(u=Kt||S1(t,n,u,r,h,y,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Uo(e,t,n,r,i,a)}function Uo(e,t,n,r,a,i){Id(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&b1(t,n,!1),Qt(e,t,i);r=t.stateNode,R6.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=hr(t,e.child,null,i),t.child=hr(t,null,l,i)):Be(e,t,l,i),t.memoizedState=r.state,a&&b1(t,n,!0),t.child}function Ad(e){var t=e.stateNode;t.pendingContext?y1(e,t.pendingContext,t.pendingContext!==t.context):t.context&&y1(e,t.context,!1),Gl(e,t.containerInfo)}function M1(e,t,n,r,a){return fr(),Vl(a),t.flags|=256,Be(e,t,n,r),t.child}var Wo={dehydrated:null,treeContext:null,retryLane:0};function qo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dd(e,t,n){var r=t.pendingProps,a=ue.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ne(ue,a&1),e===null)return Ao(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=rs(o,r,0,null),e=zn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=qo(n),t.memoizedState=Wo,e):tc(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return L6(e,t,o,r,l,a,n);if(i){i=r.fallback,o=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=hn(a,c),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=hn(l,i):(i=zn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?qo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Wo,r}return i=e.child,e=i.sibling,r=hn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tc(e,t){return t=rs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Aa(e,t,n,r){return r!==null&&Vl(r),hr(t,e.child,null,n),e=tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function L6(e,t,n,r,a,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Ds(Error(E(422))),Aa(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=rs({mode:"visible",children:r.children},a,0,null),i=zn(i,a,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&hr(t,e.child,null,o),t.child.memoizedState=qo(o),t.memoizedState=Wo,i);if(!(t.mode&1))return Aa(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(E(419)),r=Ds(i,r,void 0),Aa(e,t,o,r)}if(l=(o&e.childLanes)!==0,Ye||l){if(r=_e,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Gt(e,a),St(r,e,a,-1))}return oc(),r=Ds(Error(E(421))),Aa(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=G6.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,rt=un(a.nextSibling),at=t,se=!0,Ct=null,e!==null&&(dt[pt++]=Ht,dt[pt++]=Vt,dt[pt++]=Pn,Ht=e.id,Vt=e.overflow,Pn=t),t=tc(t,r.children),t.flags|=4096,t)}function I1(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Do(e.return,t,n)}function Hs(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Hd(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(Be(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&I1(e,n,t);else if(e.tag===19)I1(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(ue,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&_i(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Hs(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&_i(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Hs(t,!0,n,null,i);break;case"together":Hs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ai(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $6(e,t,n){switch(t.tag){case 3:Ad(t),fr();break;case 5:fd(t);break;case 1:Xe(t.type)&&ki(t);break;case 4:Gl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;ne(Si,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?Dd(e,t,n):(ne(ue,ue.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);ne(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Hd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ne(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,Md(e,t,n)}return Qt(e,t,n)}var Vd,Go,Fd,Bd;Vd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Go=function(){};Fd=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,En($t.current);var i=null;switch(n){case"input":a=mo(e,a),r=mo(e,r),i=[];break;case"select":a=fe({},a,{value:void 0}),r=fe({},r,{value:void 0}),i=[];break;case"textarea":a=xo(e,a),r=xo(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=bi)}bo(n,r);var o;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Jr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(l=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Jr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&re("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Bd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tr(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function M6(e,t,n){var r=t.pendingProps;switch(Hl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Xe(t.type)&&wi(),Le(t),null;case 3:return r=t.stateNode,mr(),ae(Je),ae(Me),Zl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ma(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ct!==null&&(tl(Ct),Ct=null))),Go(e,t),Le(t),null;case 5:Ql(t);var a=En(ca.current);if(n=t.type,e!==null&&t.stateNode!=null)Fd(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return Le(t),null}if(e=En($t.current),Ma(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Pt]=t,r[oa]=i,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(a=0;a<Ar.length;a++)re(Ar[a],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":qc(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":Qc(r,i),re("invalid",r)}bo(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&$a(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&$a(r.textContent,l,e),a=["children",""+l]):Jr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&re("scroll",r)}switch(n){case"input":Ea(r),Gc(r,i,!0);break;case"textarea":Ea(r),Zc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=bi)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Pt]=t,e[oa]=r,Vd(e,t,!1,!1),t.stateNode=e;e:{switch(o=wo(n,r),n){case"dialog":re("cancel",e),re("close",e),a=r;break;case"iframe":case"object":case"embed":re("load",e),a=r;break;case"video":case"audio":for(a=0;a<Ar.length;a++)re(Ar[a],e);a=r;break;case"source":re("error",e),a=r;break;case"img":case"image":case"link":re("error",e),re("load",e),a=r;break;case"details":re("toggle",e),a=r;break;case"input":qc(e,r),a=mo(e,r),re("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=fe({},r,{value:void 0}),re("invalid",e);break;case"textarea":Qc(e,r),a=xo(e,r),re("invalid",e);break;default:a=r}bo(n,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?yu(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&vu(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Xr(e,c):typeof c=="number"&&Xr(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Jr.hasOwnProperty(i)?c!=null&&i==="onScroll"&&re("scroll",e):c!=null&&Sl(e,i,c,o))}switch(n){case"input":Ea(e),Gc(e,r,!1);break;case"textarea":Ea(e),Zc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ir(e,!!r.multiple,i,!1):r.defaultValue!=null&&ir(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=bi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)Bd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=En(ca.current),En($t.current),Ma(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(i=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:$a(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$a(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return Le(t),null;case 13:if(ae(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&rt!==null&&t.mode&1&&!(t.flags&128))sd(),fr(),t.flags|=98560,i=!1;else if(i=Ma(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[Pt]=t}else fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Le(t),i=!1}else Ct!==null&&(tl(Ct),Ct=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?je===0&&(je=3):oc())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return mr(),Go(e,t),e===null&&ia(t.stateNode.containerInfo),Le(t),null;case 10:return Ul(t.type._context),Le(t),null;case 17:return Xe(t.type)&&wi(),Le(t),null;case 19:if(ae(ue),i=t.memoizedState,i===null)return Le(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Tr(i,!1);else{if(je!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=_i(e),o!==null){for(t.flags|=128,Tr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(ue,ue.current&1|2),t.child}e=e.sibling}i.tail!==null&&ve()>vr&&(t.flags|=128,r=!0,Tr(i,!1),t.lanes=4194304)}else{if(!r)if(e=_i(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!se)return Le(t),null}else 2*ve()-i.renderingStartTime>vr&&n!==1073741824&&(t.flags|=128,r=!0,Tr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ve(),t.sibling=null,n=ue.current,ne(ue,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return sc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?nt&1073741824&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function I6(e,t){switch(Hl(t),t.tag){case 1:return Xe(t.type)&&wi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mr(),ae(Je),ae(Me),Zl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ql(t),null;case 13:if(ae(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(ue),null;case 4:return mr(),null;case 10:return Ul(t.type._context),null;case 22:case 23:return sc(),null;case 24:return null;default:return null}}var Da=!1,$e=!1,A6=typeof WeakSet=="function"?WeakSet:Set,P=null;function rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function Qo(e,t,n){try{n()}catch(r){he(e,t,r)}}var A1=!1;function D6(e,t){if(Po=vi,e=Gu(),Al(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,d=0,m=e,h=null;t:for(;;){for(var w;m!==n||a!==0&&m.nodeType!==3||(l=o+a),m!==i||r!==0&&m.nodeType!==3||(c=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(w=m.firstChild)!==null;)h=m,m=w;for(;;){if(m===e)break t;if(h===n&&++u===a&&(l=o),h===i&&++d===r&&(c=o),(w=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=w}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oo={focusedElem:e,selectionRange:n},vi=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,C=y.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:wt(t.type,b),C);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(k){he(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=A1,A1=!1,y}function qr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Qo(t,n,i)}a=a.next}while(a!==r)}}function ts(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ud(e){var t=e.alternate;t!==null&&(e.alternate=null,Ud(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[oa],delete t[$o],delete t[w6],delete t[k6])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wd(e){return e.tag===5||e.tag===3||e.tag===4}function D1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bi));else if(r!==4&&(e=e.child,e!==null))for(Yo(e,t,n),e=e.sibling;e!==null;)Yo(e,t,n),e=e.sibling}function Jo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Jo(e,t,n),e=e.sibling;e!==null;)Jo(e,t,n),e=e.sibling}var ze=null,kt=!1;function Jt(e,t,n){for(n=n.child;n!==null;)qd(e,t,n),n=n.sibling}function qd(e,t,n){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(Gi,n)}catch{}switch(n.tag){case 5:$e||rr(n,t);case 6:var r=ze,a=kt;ze=null,Jt(e,t,n),ze=r,kt=a,ze!==null&&(kt?(e=ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(kt?(e=ze,n=n.stateNode,e.nodeType===8?Rs(e.parentNode,n):e.nodeType===1&&Rs(e,n),na(e)):Rs(ze,n.stateNode));break;case 4:r=ze,a=kt,ze=n.stateNode.containerInfo,kt=!0,Jt(e,t,n),ze=r,kt=a;break;case 0:case 11:case 14:case 15:if(!$e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Qo(n,t,o),a=a.next}while(a!==r)}Jt(e,t,n);break;case 1:if(!$e&&(rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){he(n,t,l)}Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:n.mode&1?($e=(r=$e)||n.memoizedState!==null,Jt(e,t,n),$e=r):Jt(e,t,n);break;default:Jt(e,t,n)}}function H1(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new A6),t.forEach(function(r){var a=Q6.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function yt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,kt=!1;break e;case 3:ze=l.stateNode.containerInfo,kt=!0;break e;case 4:ze=l.stateNode.containerInfo,kt=!0;break e}l=l.return}if(ze===null)throw Error(E(160));qd(i,o,a),ze=null,kt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){he(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gd(t,e),t=t.sibling}function Gd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yt(t,e),_t(e),r&4){try{qr(3,e,e.return),ts(3,e)}catch(b){he(e,e.return,b)}try{qr(5,e,e.return)}catch(b){he(e,e.return,b)}}break;case 1:yt(t,e),_t(e),r&512&&n!==null&&rr(n,n.return);break;case 5:if(yt(t,e),_t(e),r&512&&n!==null&&rr(n,n.return),e.flags&32){var a=e.stateNode;try{Xr(a,"")}catch(b){he(e,e.return,b)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&hu(a,i),wo(l,o);var u=wo(l,i);for(o=0;o<c.length;o+=2){var d=c[o],m=c[o+1];d==="style"?yu(a,m):d==="dangerouslySetInnerHTML"?vu(a,m):d==="children"?Xr(a,m):Sl(a,d,m,u)}switch(l){case"input":go(a,i);break;case"textarea":mu(a,i);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?ir(a,!!i.multiple,w,!1):h!==!!i.multiple&&(i.defaultValue!=null?ir(a,!!i.multiple,i.defaultValue,!0):ir(a,!!i.multiple,i.multiple?[]:"",!1))}a[oa]=i}catch(b){he(e,e.return,b)}}break;case 6:if(yt(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(E(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(b){he(e,e.return,b)}}break;case 3:if(yt(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{na(t.containerInfo)}catch(b){he(e,e.return,b)}break;case 4:yt(t,e),_t(e);break;case 13:yt(t,e),_t(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(ac=ve())),r&4&&H1(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?($e=(u=$e)||d,yt(t,e),$e=u):yt(t,e),_t(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(P=e,d=e.child;d!==null;){for(m=P=d;P!==null;){switch(h=P,w=h.child,h.tag){case 0:case 11:case 14:case 15:qr(4,h,h.return);break;case 1:rr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(b){he(r,n,b)}}break;case 5:rr(h,h.return);break;case 22:if(h.memoizedState!==null){F1(m);continue}}w!==null?(w.return=h,P=w):F1(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{a=m.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=xu("display",o))}catch(b){he(e,e.return,b)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(b){he(e,e.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:yt(t,e),_t(e),r&4&&H1(e);break;case 21:break;default:yt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wd(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Xr(a,""),r.flags&=-33);var i=D1(e);Jo(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,l=D1(e);Yo(e,l,o);break;default:throw Error(E(161))}}catch(c){he(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function H6(e,t,n){P=e,Qd(e)}function Qd(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var a=P,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||Da;if(!o){var l=a.alternate,c=l!==null&&l.memoizedState!==null||$e;l=Da;var u=$e;if(Da=o,($e=c)&&!u)for(P=a;P!==null;)o=P,c=o.child,o.tag===22&&o.memoizedState!==null?B1(a):c!==null?(c.return=o,P=c):B1(a);for(;i!==null;)P=i,Qd(i),i=i.sibling;P=a,Da=l,$e=u}V1(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,P=i):V1(e)}}function V1(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:$e||ts(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!$e)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:wt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&j1(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}j1(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&na(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}$e||t.flags&512&&Zo(t)}catch(h){he(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function F1(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function B1(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ts(4,t)}catch(c){he(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(c){he(t,a,c)}}var i=t.return;try{Zo(t)}catch(c){he(t,i,c)}break;case 5:var o=t.return;try{Zo(t)}catch(c){he(t,o,c)}}}catch(c){he(t,t.return,c)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var V6=Math.ceil,Pi=Zt.ReactCurrentDispatcher,nc=Zt.ReactCurrentOwner,mt=Zt.ReactCurrentBatchConfig,G=0,_e=null,be=null,Te=0,nt=0,ar=yn(0),je=0,fa=null,Rn=0,ns=0,rc=0,Gr=null,Ze=null,ac=0,vr=1/0,At=null,Oi=!1,Xo=null,pn=null,Ha=!1,rn=null,Ri=0,Qr=0,Ko=null,ii=-1,si=0;function We(){return G&6?ve():ii!==-1?ii:ii=ve()}function fn(e){return e.mode&1?G&2&&Te!==0?Te&-Te:j6.transition!==null?(si===0&&(si=Pu()),si):(e=X,e!==0||(e=window.event,e=e===void 0?16:Au(e.type)),e):1}function St(e,t,n,r){if(50<Qr)throw Qr=0,Ko=null,Error(E(185));xa(e,n,r),(!(G&2)||e!==_e)&&(e===_e&&(!(G&2)&&(ns|=n),je===4&&tn(e,Te)),Ke(e,r),n===1&&G===0&&!(t.mode&1)&&(vr=ve()+500,Xi&&bn()))}function Ke(e,t){var n=e.callbackNode;j3(e,t);var r=gi(e,e===_e?Te:0);if(r===0)n!==null&&Xc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xc(n),t===1)e.tag===0?C6(U1.bind(null,e)):rd(U1.bind(null,e)),y6(function(){!(G&6)&&bn()}),n=null;else{switch(Ou(r)){case 1:n=Tl;break;case 4:n=zu;break;case 16:n=mi;break;case 536870912:n=Tu;break;default:n=mi}n=n2(n,Zd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Zd(e,t){if(ii=-1,si=0,G&6)throw Error(E(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var r=gi(e,e===_e?Te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Li(e,r);else{t=r;var a=G;G|=2;var i=Jd();(_e!==e||Te!==t)&&(At=null,vr=ve()+500,_n(e,t));do try{U6();break}catch(l){Yd(e,l)}while(1);Bl(),Pi.current=i,G=a,be!==null?t=0:(_e=null,Te=0,t=je)}if(t!==0){if(t===2&&(a=No(e),a!==0&&(r=a,t=el(e,a))),t===1)throw n=fa,_n(e,0),tn(e,r),Ke(e,ve()),n;if(t===6)tn(e,r);else{if(a=e.current.alternate,!(r&30)&&!F6(a)&&(t=Li(e,r),t===2&&(i=No(e),i!==0&&(r=i,t=el(e,i))),t===1))throw n=fa,_n(e,0),tn(e,r),Ke(e,ve()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:jn(e,Ze,At);break;case 3:if(tn(e,r),(r&130023424)===r&&(t=ac+500-ve(),10<t)){if(gi(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Lo(jn.bind(null,e,Ze,At),t);break}jn(e,Ze,At);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-jt(r);i=1<<o,o=t[o],o>a&&(a=o),r&=~i}if(r=a,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*V6(r/1960))-r,10<r){e.timeoutHandle=Lo(jn.bind(null,e,Ze,At),r);break}jn(e,Ze,At);break;case 5:jn(e,Ze,At);break;default:throw Error(E(329))}}}return Ke(e,ve()),e.callbackNode===n?Zd.bind(null,e):null}function el(e,t){var n=Gr;return e.current.memoizedState.isDehydrated&&(_n(e,t).flags|=256),e=Li(e,t),e!==2&&(t=Ze,Ze=n,t!==null&&tl(t)),e}function tl(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function F6(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!Nt(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t){for(t&=~rc,t&=~ns,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-jt(t),r=1<<n;e[n]=-1,t&=~r}}function U1(e){if(G&6)throw Error(E(327));ur();var t=gi(e,0);if(!(t&1))return Ke(e,ve()),null;var n=Li(e,t);if(e.tag!==0&&n===2){var r=No(e);r!==0&&(t=r,n=el(e,r))}if(n===1)throw n=fa,_n(e,0),tn(e,t),Ke(e,ve()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jn(e,Ze,At),Ke(e,ve()),null}function ic(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(vr=ve()+500,Xi&&bn())}}function Ln(e){rn!==null&&rn.tag===0&&!(G&6)&&ur();var t=G;G|=1;var n=mt.transition,r=X;try{if(mt.transition=null,X=1,e)return e()}finally{X=r,mt.transition=n,G=t,!(G&6)&&bn()}}function sc(){nt=ar.current,ae(ar)}function _n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,x6(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Hl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wi();break;case 3:mr(),ae(Je),ae(Me),Zl();break;case 5:Ql(r);break;case 4:mr();break;case 13:ae(ue);break;case 19:ae(ue);break;case 10:Ul(r.type._context);break;case 22:case 23:sc()}n=n.return}if(_e=e,be=e=hn(e.current,null),Te=nt=t,je=0,fa=null,rc=ns=Rn=0,Ze=Gr=null,Nn!==null){for(t=0;t<Nn.length;t++)if(n=Nn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}n.pending=r}Nn=null}return e}function Yd(e,t){do{var n=be;try{if(Bl(),ni.current=Ti,zi){for(var r=pe.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}zi=!1}if(On=0,Ee=Ce=pe=null,Wr=!1,ua=0,nc.current=null,n===null||n.return===null){je=1,fa=t,be=null;break}e:{var i=e,o=n.return,l=n,c=t;if(t=Te,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=P1(o);if(w!==null){w.flags&=-257,O1(w,o,l,i,t),w.mode&1&&T1(i,u,t),t=w,c=u;var y=t.updateQueue;if(y===null){var b=new Set;b.add(c),t.updateQueue=b}else y.add(c);break e}else{if(!(t&1)){T1(i,u,t),oc();break e}c=Error(E(426))}}else if(se&&l.mode&1){var C=P1(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),O1(C,o,l,i,t),Vl(gr(c,l));break e}}i=c=gr(c,l),je!==4&&(je=2),Gr===null?Gr=[i]:Gr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Rd(i,c,t);C1(i,g);break e;case 1:l=c;var f=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(pn===null||!pn.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Ld(i,l,t);C1(i,k);break e}}i=i.return}while(i!==null)}Kd(n)}catch(j){t=j,be===n&&n!==null&&(be=n=n.return);continue}break}while(1)}function Jd(){var e=Pi.current;return Pi.current=Ti,e===null?Ti:e}function oc(){(je===0||je===3||je===2)&&(je=4),_e===null||!(Rn&268435455)&&!(ns&268435455)||tn(_e,Te)}function Li(e,t){var n=G;G|=2;var r=Jd();(_e!==e||Te!==t)&&(At=null,_n(e,t));do try{B6();break}catch(a){Yd(e,a)}while(1);if(Bl(),G=n,Pi.current=r,be!==null)throw Error(E(261));return _e=null,Te=0,je}function B6(){for(;be!==null;)Xd(be)}function U6(){for(;be!==null&&!m3();)Xd(be)}function Xd(e){var t=t2(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?Kd(e):be=t,nc.current=null}function Kd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=I6(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,be=null;return}}else if(n=M6(n,t,nt),n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);je===0&&(je=5)}function jn(e,t,n){var r=X,a=mt.transition;try{mt.transition=null,X=1,W6(e,t,n,r)}finally{mt.transition=a,X=r}return null}function W6(e,t,n,r){do ur();while(rn!==null);if(G&6)throw Error(E(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(S3(e,i),e===_e&&(be=_e=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ha||(Ha=!0,n2(mi,function(){return ur(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=mt.transition,mt.transition=null;var o=X;X=1;var l=G;G|=4,nc.current=null,D6(e,n),Gd(n,e),d6(Oo),vi=!!Po,Oo=Po=null,e.current=n,H6(n),g3(),G=l,X=o,mt.transition=i}else e.current=n;if(Ha&&(Ha=!1,rn=e,Ri=a),i=e.pendingLanes,i===0&&(pn=null),y3(n.stateNode),Ke(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Oi)throw Oi=!1,e=Xo,Xo=null,e;return Ri&1&&e.tag!==0&&ur(),i=e.pendingLanes,i&1?e===Ko?Qr++:(Qr=0,Ko=e):Qr=0,bn(),null}function ur(){if(rn!==null){var e=Ou(Ri),t=mt.transition,n=X;try{if(mt.transition=null,X=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,Ri=0,G&6)throw Error(E(331));var a=G;for(G|=4,P=e.current;P!==null;){var i=P,o=i.child;if(P.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(P=u;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:qr(8,d,i)}var m=d.child;if(m!==null)m.return=d,P=m;else for(;P!==null;){d=P;var h=d.sibling,w=d.return;if(Ud(d),d===u){P=null;break}if(h!==null){h.return=w,P=h;break}P=w}}}var y=i.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var C=b.sibling;b.sibling=null,b=C}while(b!==null)}}P=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,P=o;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:qr(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,P=g;break e}P=i.return}}var f=e.current;for(P=f;P!==null;){o=P;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,P=x;else e:for(o=f;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ts(9,l)}}catch(j){he(l,l.return,j)}if(l===o){P=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,P=k;break e}P=l.return}}if(G=a,bn(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(Gi,e)}catch{}r=!0}return r}finally{X=n,mt.transition=t}}return!1}function W1(e,t,n){t=gr(n,t),t=Rd(e,t,1),e=dn(e,t,1),t=We(),e!==null&&(xa(e,1,t),Ke(e,t))}function he(e,t,n){if(e.tag===3)W1(e,e,n);else for(;t!==null;){if(t.tag===3){W1(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=gr(n,e),e=Ld(t,e,1),t=dn(t,e,1),e=We(),t!==null&&(xa(t,1,e),Ke(t,e));break}}t=t.return}}function q6(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=We(),e.pingedLanes|=e.suspendedLanes&n,_e===e&&(Te&n)===n&&(je===4||je===3&&(Te&130023424)===Te&&500>ve()-ac?_n(e,0):rc|=n),Ke(e,t)}function e2(e,t){t===0&&(e.mode&1?(t=Ta,Ta<<=1,!(Ta&130023424)&&(Ta=4194304)):t=1);var n=We();e=Gt(e,t),e!==null&&(xa(e,t,n),Ke(e,n))}function G6(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),e2(e,n)}function Q6(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),e2(e,n)}var t2;t2=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)Ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ye=!1,$6(e,t,n);Ye=!!(e.flags&131072)}else Ye=!1,se&&t.flags&1048576&&ad(t,ji,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ai(e,t),e=t.pendingProps;var a=pr(t,Me.current);cr(t,n),a=Jl(null,t,r,e,a,n);var i=Xl();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(i=!0,ki(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ql(t),a.updater=Ki,t.stateNode=a,a._reactInternals=t,Vo(t,r,e,n),t=Uo(null,t,r,!0,i,n)):(t.tag=0,se&&i&&Dl(t),Be(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ai(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Y6(r),e=wt(r,e),a){case 0:t=Bo(null,t,r,e,n);break e;case 1:t=$1(null,t,r,e,n);break e;case 11:t=R1(null,t,r,e,n);break e;case 14:t=L1(null,t,r,wt(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:wt(r,a),Bo(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:wt(r,a),$1(e,t,r,a,n);case 3:e:{if(Ad(t),e===null)throw Error(E(387));r=t.pendingProps,i=t.memoizedState,a=i.element,ld(e,t),Ei(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=gr(Error(E(423)),t),t=M1(e,t,r,n,a);break e}else if(r!==a){a=gr(Error(E(424)),t),t=M1(e,t,r,n,a);break e}else for(rt=un(t.stateNode.containerInfo.firstChild),at=t,se=!0,Ct=null,n=pd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fr(),r===a){t=Qt(e,t,n);break e}Be(e,t,r,n)}t=t.child}return t;case 5:return fd(t),e===null&&Ao(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,Ro(r,a)?o=null:i!==null&&Ro(r,i)&&(t.flags|=32),Id(e,t),Be(e,t,o,n),t.child;case 6:return e===null&&Ao(t),null;case 13:return Dd(e,t,n);case 4:return Gl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hr(t,null,r,n):Be(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:wt(r,a),R1(e,t,r,a,n);case 7:return Be(e,t,t.pendingProps,n),t.child;case 8:return Be(e,t,t.pendingProps.children,n),t.child;case 12:return Be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,ne(Si,r._currentValue),r._currentValue=o,i!==null)if(Nt(i.value,o)){if(i.children===a.children&&!Je.current){t=Qt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Ut(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Do(i.return,n,t),l.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Do(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Be(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,cr(t,n),a=vt(a),r=r(a),t.flags|=1,Be(e,t,r,n),t.child;case 14:return r=t.type,a=wt(r,t.pendingProps),a=wt(r.type,a),L1(e,t,r,a,n);case 15:return $d(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:wt(r,a),ai(e,t),t.tag=1,Xe(r)?(e=!0,ki(t)):e=!1,cr(t,n),ud(t,r,a),Vo(t,r,a,n),Uo(null,t,r,!0,e,n);case 19:return Hd(e,t,n);case 22:return Md(e,t,n)}throw Error(E(156,t.tag))};function n2(e,t){return _u(e,t)}function Z6(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,n,r){return new Z6(e,t,n,r)}function lc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Y6(e){if(typeof e=="function")return lc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===El)return 11;if(e===_l)return 14}return 2}function hn(e,t){var n=e.alternate;return n===null?(n=ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oi(e,t,n,r,a,i){var o=2;if(r=e,typeof e=="function")lc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Qn:return zn(n.children,a,i,t);case Nl:o=8,a|=8;break;case uo:return e=ft(12,n,t,a|2),e.elementType=uo,e.lanes=i,e;case po:return e=ft(13,n,t,a),e.elementType=po,e.lanes=i,e;case fo:return e=ft(19,n,t,a),e.elementType=fo,e.lanes=i,e;case du:return rs(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cu:o=10;break e;case uu:o=9;break e;case El:o=11;break e;case _l:o=14;break e;case Xt:o=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=ft(o,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function zn(e,t,n,r){return e=ft(7,e,r,t),e.lanes=n,e}function rs(e,t,n,r){return e=ft(22,e,r,t),e.elementType=du,e.lanes=n,e.stateNode={isHidden:!1},e}function Vs(e,t,n){return e=ft(6,e,null,t),e.lanes=n,e}function Fs(e,t,n){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function J6(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ks(0),this.expirationTimes=ks(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ks(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function cc(e,t,n,r,a,i,o,l,c){return e=new J6(e,t,n,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ft(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ql(i),e}function X6(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function r2(e){if(!e)return vn;e=e._reactInternals;e:{if(Dn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Xe(n))return nd(e,n,t)}return t}function a2(e,t,n,r,a,i,o,l,c){return e=cc(n,r,!0,e,a,i,o,l,c),e.context=r2(null),n=e.current,r=We(),a=fn(n),i=Ut(r,a),i.callback=t??null,dn(n,i,a),e.current.lanes=a,xa(e,a,r),Ke(e,r),e}function as(e,t,n,r){var a=t.current,i=We(),o=fn(a);return n=r2(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dn(a,t,o),e!==null&&(St(e,a,o,i),ti(e,a,o)),o}function $i(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function q1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function uc(e,t){q1(e,t),(e=e.alternate)&&q1(e,t)}function K6(){return null}var i2=typeof reportError=="function"?reportError:function(e){console.error(e)};function dc(e){this._internalRoot=e}is.prototype.render=dc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));as(e,t,null,null)};is.prototype.unmount=dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){as(null,e,null,null)}),t[qt]=null}};function is(e){this._internalRoot=e}is.prototype.unstable_scheduleHydration=function(e){if(e){var t=$u();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&Iu(e)}};function pc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ss(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function G1(){}function ep(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=$i(o);i.call(u)}}var o=a2(t,r,e,0,null,!1,!1,"",G1);return e._reactRootContainer=o,e[qt]=o.current,ia(e.nodeType===8?e.parentNode:e),Ln(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var u=$i(c);l.call(u)}}var c=cc(e,0,!1,null,null,!1,!1,"",G1);return e._reactRootContainer=c,e[qt]=c.current,ia(e.nodeType===8?e.parentNode:e),Ln(function(){as(t,c,n,r)}),c}function os(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var c=$i(o);l.call(c)}}as(t,o,e,a)}else o=ep(n,t,e,a,r);return $i(o)}Ru=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ir(t.pendingLanes);n!==0&&(Pl(t,n|1),Ke(t,ve()),!(G&6)&&(vr=ve()+500,bn()))}break;case 13:Ln(function(){var r=Gt(e,1);if(r!==null){var a=We();St(r,e,1,a)}}),uc(e,1)}};Ol=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var n=We();St(t,e,134217728,n)}uc(e,134217728)}};Lu=function(e){if(e.tag===13){var t=fn(e),n=Gt(e,t);if(n!==null){var r=We();St(n,e,t,r)}uc(e,t)}};$u=function(){return X};Mu=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};Co=function(e,t,n){switch(t){case"input":if(go(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Ji(r);if(!a)throw Error(E(90));fu(r),go(r,a)}}}break;case"textarea":mu(e,n);break;case"select":t=n.value,t!=null&&ir(e,!!n.multiple,t,!1)}};ku=ic;Cu=Ln;var tp={usingClientEntryPoint:!1,Events:[ba,Xn,Ji,bu,wu,ic]},Pr={findFiberByHostInstance:Sn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},np={bundleType:Pr.bundleType,version:Pr.version,rendererPackageName:Pr.rendererPackageName,rendererConfig:Pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nu(e),e===null?null:e.stateNode},findFiberByHostInstance:Pr.findFiberByHostInstance||K6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Va.isDisabled&&Va.supportsFiber)try{Gi=Va.inject(np),Lt=Va}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tp;ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pc(t))throw Error(E(200));return X6(e,t,null,n)};ot.createRoot=function(e,t){if(!pc(e))throw Error(E(299));var n=!1,r="",a=i2;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=cc(e,1,!1,null,null,n,!1,r,a),e[qt]=t.current,ia(e.nodeType===8?e.parentNode:e),new dc(t)};ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Nu(t),e=e===null?null:e.stateNode,e};ot.flushSync=function(e){return Ln(e)};ot.hydrate=function(e,t,n){if(!ss(t))throw Error(E(200));return os(null,e,t,!0,n)};ot.hydrateRoot=function(e,t,n){if(!pc(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",o=i2;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=a2(t,null,e,1,n??null,a,!1,i,o),e[qt]=t.current,ia(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new is(t)};ot.render=function(e,t,n){if(!ss(t))throw Error(E(200));return os(null,e,t,!1,n)};ot.unmountComponentAtNode=function(e){if(!ss(e))throw Error(E(40));return e._reactRootContainer?(Ln(function(){os(null,null,e,!1,function(){e._reactRootContainer=null,e[qt]=null})}),!0):!1};ot.unstable_batchedUpdates=ic;ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ss(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return os(e,t,n,!1,r)};ot.version="18.2.0-next-9e3b772b8-20220608";function s2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s2)}catch(e){console.error(e)}}s2(),au.exports=ot;var rp=au.exports,Q1=rp;lo.createRoot=Q1.createRoot,lo.hydrateRoot=Q1.hydrateRoot;/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ha(){return ha=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ha.apply(this,arguments)}var an;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(an||(an={}));const Z1="popstate";function ap(e){e===void 0&&(e={});function t(r,a){let{pathname:i,search:o,hash:l}=r.location;return nl("",{pathname:i,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:Mi(a)}return sp(t,n,null,e)}function we(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function fc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ip(){return Math.random().toString(36).substr(2,8)}function Y1(e,t){return{usr:e.state,key:e.key,idx:t}}function nl(e,t,n,r){return n===void 0&&(n=null),ha({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?kr(t):t,{state:n,key:t&&t.key||r||ip()})}function Mi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function kr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function sp(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,l=an.Pop,c=null,u=d();u==null&&(u=0,o.replaceState(ha({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function m(){l=an.Pop;let C=d(),g=C==null?null:C-u;u=C,c&&c({action:l,location:b.location,delta:g})}function h(C,g){l=an.Push;let f=nl(b.location,C,g);n&&n(f,C),u=d()+1;let x=Y1(f,u),k=b.createHref(f);try{o.pushState(x,"",k)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;a.location.assign(k)}i&&c&&c({action:l,location:b.location,delta:1})}function w(C,g){l=an.Replace;let f=nl(b.location,C,g);n&&n(f,C),u=d();let x=Y1(f,u),k=b.createHref(f);o.replaceState(x,"",k),i&&c&&c({action:l,location:b.location,delta:0})}function y(C){let g=a.location.origin!=="null"?a.location.origin:a.location.href,f=typeof C=="string"?C:Mi(C);return we(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let b={get action(){return l},get location(){return e(a,o)},listen(C){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(Z1,m),c=C,()=>{a.removeEventListener(Z1,m),c=null}},createHref(C){return t(a,C)},createURL:y,encodeLocation(C){let g=y(C);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:w,go(C){return o.go(C)}};return b}var J1;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(J1||(J1={}));function op(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?kr(t):t,a=hc(r.pathname||"/",n);if(a==null)return null;let i=o2(e);lp(i);let o=null;for(let l=0;o==null&&l<i.length;++l)o=vp(i[l],bp(a));return o}function o2(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,o,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(we(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=mn([r,c.relativePath]),d=n.concat(c);i.children&&i.children.length>0&&(we(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),o2(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:mp(u,i.index),routesMeta:d})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let c of l2(i.path))a(i,o,c)}),t}function l2(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=l2(r.join("/")),l=[];return l.push(...o.map(c=>c===""?i:[i,c].join("/"))),a&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function lp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:gp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const cp=/^:\w+$/,up=3,dp=2,pp=1,fp=10,hp=-2,X1=e=>e==="*";function mp(e,t){let n=e.split("/"),r=n.length;return n.some(X1)&&(r+=hp),t&&(r+=dp),n.filter(a=>!X1(a)).reduce((a,i)=>a+(cp.test(i)?up:i===""?pp:fp),r)}function gp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function vp(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let o=0;o<n.length;++o){let l=n[o],c=o===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",d=xp({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u);if(!d)return null;Object.assign(r,d.params);let m=l.route;i.push({params:r,pathname:mn([a,d.pathname]),pathnameBase:jp(mn([a,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(a=mn([a,d.pathnameBase]))}return i}function xp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=yp(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((u,d,m)=>{if(d==="*"){let h=l[m]||"";o=i.slice(0,i.length-h.length).replace(/(.)\/+$/,"$1")}return u[d]=wp(l[m]||"",d),u},{}),pathname:i,pathnameBase:o,pattern:e}}function yp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),fc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function bp(e){try{return decodeURI(e)}catch(t){return fc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function wp(e,t){try{return decodeURIComponent(e)}catch(n){return fc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function hc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function kp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?kr(e):e;return{pathname:n?n.startsWith("/")?n:Cp(n,t):t,search:Sp(r),hash:Np(a)}}function Cp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Bs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function c2(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function u2(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=kr(e):(a=ha({},e),we(!a.pathname||!a.pathname.includes("?"),Bs("?","pathname","search",a)),we(!a.pathname||!a.pathname.includes("#"),Bs("#","pathname","hash",a)),we(!a.search||!a.search.includes("#"),Bs("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(r||o==null)l=n;else{let m=t.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),m-=1;a.pathname=h.join("/")}l=m>=0?t[m]:"/"}let c=kp(a,l),u=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const mn=e=>e.join("/").replace(/\/\/+/g,"/"),jp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Sp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Np=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ep(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const d2=["post","put","patch","delete"];new Set(d2);const _p=["get",...d2];new Set(_p);/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ii(){return Ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ii.apply(this,arguments)}const mc=p.createContext(null),zp=p.createContext(null),Cr=p.createContext(null),ls=p.createContext(null),Hn=p.createContext({outlet:null,matches:[],isDataRoute:!1}),p2=p.createContext(null);function Tp(e,t){let{relative:n}=t===void 0?{}:t;ka()||we(!1);let{basename:r,navigator:a}=p.useContext(Cr),{hash:i,pathname:o,search:l}=h2(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:mn([r,o])),a.createHref({pathname:c,search:l,hash:i})}function ka(){return p.useContext(ls)!=null}function cs(){return ka()||we(!1),p.useContext(ls).location}function f2(e){p.useContext(Cr).static||p.useLayoutEffect(e)}function Pp(){let{isDataRoute:e}=p.useContext(Hn);return e?Up():Op()}function Op(){ka()||we(!1);let e=p.useContext(mc),{basename:t,navigator:n}=p.useContext(Cr),{matches:r}=p.useContext(Hn),{pathname:a}=cs(),i=JSON.stringify(c2(r).map(c=>c.pathnameBase)),o=p.useRef(!1);return f2(()=>{o.current=!0}),p.useCallback(function(c,u){if(u===void 0&&(u={}),!o.current)return;if(typeof c=="number"){n.go(c);return}let d=u2(c,JSON.parse(i),a,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:mn([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,i,a,e])}function h2(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=p.useContext(Hn),{pathname:a}=cs(),i=JSON.stringify(c2(r).map(o=>o.pathnameBase));return p.useMemo(()=>u2(e,JSON.parse(i),a,n==="path"),[e,i,a,n])}function Rp(e,t){return Lp(e,t)}function Lp(e,t,n){ka()||we(!1);let{navigator:r}=p.useContext(Cr),{matches:a}=p.useContext(Hn),i=a[a.length-1],o=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let c=cs(),u;if(t){var d;let b=typeof t=="string"?kr(t):t;l==="/"||(d=b.pathname)!=null&&d.startsWith(l)||we(!1),u=b}else u=c;let m=u.pathname||"/",h=l==="/"?m:m.slice(l.length)||"/",w=op(e,{pathname:h}),y=Dp(w&&w.map(b=>Object.assign({},b,{params:Object.assign({},o,b.params),pathname:mn([l,r.encodeLocation?r.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:mn([l,r.encodeLocation?r.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),a,n);return t&&y?p.createElement(ls.Provider,{value:{location:Ii({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:an.Pop}},y):y}function $p(){let e=Bp(),t=Ep(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return p.createElement(p.Fragment,null,p.createElement("h2",null,"Unexpected Application Error!"),p.createElement("h3",{style:{fontStyle:"italic"}},t),n?p.createElement("pre",{style:a},n):null,i)}const Mp=p.createElement($p,null);class Ip extends p.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?p.createElement(Hn.Provider,{value:this.props.routeContext},p.createElement(p2.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ap(e){let{routeContext:t,match:n,children:r}=e,a=p.useContext(mc);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),p.createElement(Hn.Provider,{value:t},r)}function Dp(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let i=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=i.findIndex(c=>c.route.id&&(o==null?void 0:o[c.route.id]));l>=0||we(!1),i=i.slice(0,Math.min(i.length,l+1))}return i.reduceRight((l,c,u)=>{let d=c.route.id?o==null?void 0:o[c.route.id]:null,m=null;n&&(m=c.route.errorElement||Mp);let h=t.concat(i.slice(0,u+1)),w=()=>{let y;return d?y=m:c.route.Component?y=p.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=l,p.createElement(Ap,{match:c,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?p.createElement(Ip,{location:n.location,revalidation:n.revalidation,component:m,error:d,children:w(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):w()},null)}var m2=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(m2||{}),Ai=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ai||{});function Hp(e){let t=p.useContext(mc);return t||we(!1),t}function Vp(e){let t=p.useContext(zp);return t||we(!1),t}function Fp(e){let t=p.useContext(Hn);return t||we(!1),t}function g2(e){let t=Fp(),n=t.matches[t.matches.length-1];return n.route.id||we(!1),n.route.id}function Bp(){var e;let t=p.useContext(p2),n=Vp(Ai.UseRouteError),r=g2(Ai.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Up(){let{router:e}=Hp(m2.UseNavigateStable),t=g2(Ai.UseNavigateStable),n=p.useRef(!1);return f2(()=>{n.current=!0}),p.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Ii({fromRouteId:t},i)))},[e,t])}function Wn(e){we(!1)}function Wp(e){let{basename:t="/",children:n=null,location:r,navigationType:a=an.Pop,navigator:i,static:o=!1}=e;ka()&&we(!1);let l=t.replace(/^\/*/,"/"),c=p.useMemo(()=>({basename:l,navigator:i,static:o}),[l,i,o]);typeof r=="string"&&(r=kr(r));let{pathname:u="/",search:d="",hash:m="",state:h=null,key:w="default"}=r,y=p.useMemo(()=>{let b=hc(u,l);return b==null?null:{location:{pathname:b,search:d,hash:m,state:h,key:w},navigationType:a}},[l,u,d,m,h,w,a]);return y==null?null:p.createElement(Cr.Provider,{value:c},p.createElement(ls.Provider,{children:n,value:y}))}function qp(e){let{children:t,location:n}=e;return Rp(rl(t),n)}new Promise(()=>{});function rl(e,t){t===void 0&&(t=[]);let n=[];return p.Children.forEach(e,(r,a)=>{if(!p.isValidElement(r))return;let i=[...t,a];if(r.type===p.Fragment){n.push.apply(n,rl(r.props.children,i));return}r.type!==Wn&&we(!1),!r.props.index||!r.props.children||we(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=rl(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function al(){return al=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},al.apply(this,arguments)}function Gp(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Qp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Zp(e,t){return e.button===0&&(!t||t==="_self")&&!Qp(e)}const Yp=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Jp="startTransition",K1=G4[Jp];function Xp(e){let{basename:t,children:n,future:r,window:a}=e,i=p.useRef();i.current==null&&(i.current=ap({window:a,v5Compat:!0}));let o=i.current,[l,c]=p.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=p.useCallback(m=>{u&&K1?K1(()=>c(m)):c(m)},[c,u]);return p.useLayoutEffect(()=>o.listen(d),[o,d]),p.createElement(Wp,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const Kp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ef=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ht=p.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:i,replace:o,state:l,target:c,to:u,preventScrollReset:d,unstable_viewTransition:m}=t,h=Gp(t,Yp),{basename:w}=p.useContext(Cr),y,b=!1;if(typeof u=="string"&&ef.test(u)&&(y=u,Kp))try{let x=new URL(window.location.href),k=u.startsWith("//")?new URL(x.protocol+u):new URL(u),j=hc(k.pathname,w);k.origin===x.origin&&j!=null?u=j+k.search+k.hash:b=!0}catch{}let C=Tp(u,{relative:a}),g=tf(u,{replace:o,state:l,target:c,preventScrollReset:d,relative:a,unstable_viewTransition:m});function f(x){r&&r(x),x.defaultPrevented||g(x)}return p.createElement("a",al({},h,{href:y||C,onClick:b||i?r:f,ref:n,target:c}))});var e0;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(e0||(e0={}));var t0;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(t0||(t0={}));function tf(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:o,unstable_viewTransition:l}=t===void 0?{}:t,c=Pp(),u=cs(),d=h2(e,{relative:o});return p.useCallback(m=>{if(Zp(m,n)){m.preventDefault();let h=r!==void 0?r:Mi(u)===Mi(d);c(e,{replace:h,state:a,preventScrollReset:i,relative:o,unstable_viewTransition:l})}},[u,c,d,r,a,n,e,i,o,l])}const ma="https://pasco-lovat.vercel.app",de="https://api.uelearn.unityelites.com";function Di(){try{const e=localStorage.getItem("userInfo");return e?JSON.parse(e):null}catch{return null}}function nf(e){try{localStorage.setItem("userInfo",JSON.stringify(e))}catch{}}class xr extends Error{constructor(t){super(t),this.name="AuthError"}}function Hi(){try{localStorage.removeItem("userInfo")}catch{}}async function v2(){const e=Di();try{e!=null&&e.refreshToken&&await st(`${de}/api/v1/auth/logout`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:e.refreshToken})})}catch{}finally{Hi()}}async function rf(e=`${de}/api/v1/auth/refresh`){var o;const t=Di();if(!(t!=null&&t.refreshToken))throw Hi(),new xr("No refresh token — session ended.");const n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:t.refreshToken})});if(!n.ok)throw n.status===400||n.status===401?(Hi(),new xr("Session expired. Please sign in again.")):new Error(`Token refresh failed (${n.status})`);const r=await n.json(),a=(o=r==null?void 0:r.data)==null?void 0:o.token;if(!a)throw new Error("Refresh response did not include a new token.");const i=Di();return i&&(i.accessToken=a,nf(i)),a}async function st(e,t,n=0){const r=Di();if(!(r!=null&&r.accessToken))throw Hi(),new xr("No access token found — please sign in.");const a={...t,headers:{...t.headers,Authorization:`Bearer ${r.accessToken}`}},i=await fetch(e,a);if(i.status===401&&n===0)return await rf(),st(e,t,1);if(!i.ok){let l=`Request failed (${i.status})`;try{const c=await i.json();return c!=null&&c.message&&(l=c.message),c}catch{throw new Error(l)}}const o=await i.json();return(o==null?void 0:o.data)??o}const Vi=(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.error("Error reading from localStorage:",n),alert("Failed to save data. Please check your browser settings."),t}},il=(e,t)=>{try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch(n){return console.error("Error writing to localStorage:",n),alert("Failed to save data. Please check your browser settings."),!1}},af=()=>{p.useEffect(()=>{const e=Vi("userInfo",{}),t=e==null?void 0:e.accessToken,n=e==null?void 0:e.refreshToken;!t||!n||st(de+"/api/v1/user/streak",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`}},n).then(r=>{const a={...e,streakScore:(r==null?void 0:r.streakScore)??e.streakScore,highestStreakScore:(r==null?void 0:r.highestStreakScore)??e.highestStreakScore,lastActiveDate:(r==null?void 0:r.lastActiveDate)??e.lastActiveDate};il("userInfo",a)}).catch(r=>console.error("Visit record failed:",r))},[])};const Ot="/imgs/titled.png",x2="/imgs/loader.svg",sf="/imgs/ueicon.webp",y2="/imgs/jess.jpg",b2="/imgs/jessy.jpg",w2="/imgs/jude.jpg",of="/imgs/my1.png",k2=({setsearching:e,setfind:t,bar:n,eprop:r,handleMenu:a})=>{p.useState(!1);const i=()=>{e(!0);const o=document.querySelector(".listcontent");o&&(o.style.cssText="pointer-events:all;clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);");const l=document.querySelector(".menucomp");l&&(l.style.cssText="pointer-events:none;clip-path: polygon(0 0, 0% 0, 0% 100%, 0 100%);"),a(!1)};return p.useEffect(()=>{t("")},[]),s.jsxs("div",{className:"twwo",title:"search",children:[s.jsx("div",{className:"search",onClick:i,children:s.jsx("i",{className:"fa fa-search"})}),s.jsx("div",{className:"input",onClick:i,children:s.jsx("input",{type:"text",style:{pointerEvents:r},ref:n,onChange:o=>t(o.target.value.trim("")),className:"find",placeholder:"Search a course code..."})}),s.jsx("div",{className:"slash",onClick:()=>a(!0),children:r!="all"?"/":s.jsx("i",{className:"fa fa-hamburger fa-dark"})})]})};var lf=p.createContext({});const C2=lf;function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(null,arguments)}function cf(e){if(Array.isArray(e))return e}function uf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,o,l=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,a=d}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return l}}function n0(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function df(e,t){if(e){if(typeof e=="string")return n0(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?n0(e,t):void 0}}function pf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j2(e,t){return cf(e)||uf(e,t)||df(e,t)||pf()}function $n(e){"@babel/helpers - typeof";return $n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$n(e)}function ff(e,t){if($n(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if($n(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function hf(e){var t=ff(e,"string");return $n(t)=="symbol"?t:t+""}function sl(e,t,n){return(t=hf(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mf(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}function S2(e,t){if(e==null)return{};var n,r,a=mf(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var N2={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(i=a(i,r(l)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var l in i)t.call(i,l)&&i[l]&&(o=a(o,l));return o}function a(i,o){return o?i?i+" "+o:i+o:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(N2);var gf=N2.exports;const vf=G0(gf);function gt(e,t){xf(e)&&(e="100%");var n=yf(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function xf(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function yf(e){return typeof e=="string"&&e.indexOf("%")!==-1}function bf(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Fa(e){return e<=1?"".concat(Number(e)*100,"%"):e}function Us(e){return e.length===1?"0"+e:String(e)}function wf(e,t,n){return{r:gt(e,255)*255,g:gt(t,255)*255,b:gt(n,255)*255}}function Ws(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function kf(e,t,n){var r,a,i;if(e=gt(e,360),t=gt(t,100),n=gt(n,100),t===0)a=n,i=n,r=n;else{var o=n<.5?n*(1+t):n+t-n*t,l=2*n-o;r=Ws(l,o,e+1/3),a=Ws(l,o,e),i=Ws(l,o,e-1/3)}return{r:r*255,g:a*255,b:i*255}}function Cf(e,t,n){e=gt(e,255),t=gt(t,255),n=gt(n,255);var r=Math.max(e,t,n),a=Math.min(e,t,n),i=0,o=r,l=r-a,c=r===0?0:l/r;if(r===a)i=0;else{switch(r){case e:i=(t-n)/l+(t<n?6:0);break;case t:i=(n-e)/l+2;break;case n:i=(e-t)/l+4;break}i/=6}return{h:i,s:c,v:o}}function jf(e,t,n){e=gt(e,360)*6,t=gt(t,100),n=gt(n,100);var r=Math.floor(e),a=e-r,i=n*(1-t),o=n*(1-a*t),l=n*(1-(1-a)*t),c=r%6,u=[n,o,i,i,l,n][c],d=[l,n,n,o,i,i][c],m=[i,i,l,n,n,o][c];return{r:u*255,g:d*255,b:m*255}}function Sf(e,t,n,r){var a=[Us(Math.round(e).toString(16)),Us(Math.round(t).toString(16)),Us(Math.round(n).toString(16))];return r&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function r0(e){return tt(e)/255}function tt(e){return parseInt(e,16)}var a0={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Or(e){var t={r:0,g:0,b:0},n=1,r=null,a=null,i=null,o=!1,l=!1;return typeof e=="string"&&(e=_f(e)),typeof e=="object"&&(It(e.r)&&It(e.g)&&It(e.b)?(t=wf(e.r,e.g,e.b),o=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):It(e.h)&&It(e.s)&&It(e.v)?(r=Fa(e.s),a=Fa(e.v),t=jf(e.h,r,a),o=!0,l="hsv"):It(e.h)&&It(e.s)&&It(e.l)&&(r=Fa(e.s),i=Fa(e.l),t=kf(e.h,r,i),o=!0,l="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(n=e.a)),n=bf(n),{ok:o,format:e.format||l,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}var Nf="[-\\+]?\\d+%?",Ef="[-\\+]?\\d*\\.\\d+%?",sn="(?:".concat(Ef,")|(?:").concat(Nf,")"),qs="[\\s|\\(]+(".concat(sn,")[,|\\s]+(").concat(sn,")[,|\\s]+(").concat(sn,")\\s*\\)?"),Gs="[\\s|\\(]+(".concat(sn,")[,|\\s]+(").concat(sn,")[,|\\s]+(").concat(sn,")[,|\\s]+(").concat(sn,")\\s*\\)?"),bt={CSS_UNIT:new RegExp(sn),rgb:new RegExp("rgb"+qs),rgba:new RegExp("rgba"+Gs),hsl:new RegExp("hsl"+qs),hsla:new RegExp("hsla"+Gs),hsv:new RegExp("hsv"+qs),hsva:new RegExp("hsva"+Gs),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function _f(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if(a0[e])e=a0[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=bt.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=bt.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=bt.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=bt.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=bt.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=bt.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=bt.hex8.exec(e),n?{r:tt(n[1]),g:tt(n[2]),b:tt(n[3]),a:r0(n[4]),format:t?"name":"hex8"}:(n=bt.hex6.exec(e),n?{r:tt(n[1]),g:tt(n[2]),b:tt(n[3]),format:t?"name":"hex"}:(n=bt.hex4.exec(e),n?{r:tt(n[1]+n[1]),g:tt(n[2]+n[2]),b:tt(n[3]+n[3]),a:r0(n[4]+n[4]),format:t?"name":"hex8"}:(n=bt.hex3.exec(e),n?{r:tt(n[1]+n[1]),g:tt(n[2]+n[2]),b:tt(n[3]+n[3]),format:t?"name":"hex"}:!1)))))))))}function It(e){return!!bt.CSS_UNIT.exec(String(e))}var Ba=2,i0=.16,zf=.05,Tf=.05,Pf=.15,E2=5,_2=4,Of=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function s0(e){var t=e.r,n=e.g,r=e.b,a=Cf(t,n,r);return{h:a.h*360,s:a.s,v:a.v}}function Ua(e){var t=e.r,n=e.g,r=e.b;return"#".concat(Sf(t,n,r,!1))}function Rf(e,t,n){var r=n/100,a={r:(t.r-e.r)*r+e.r,g:(t.g-e.g)*r+e.g,b:(t.b-e.b)*r+e.b};return a}function o0(e,t,n){var r;return Math.round(e.h)>=60&&Math.round(e.h)<=240?r=n?Math.round(e.h)-Ba*t:Math.round(e.h)+Ba*t:r=n?Math.round(e.h)+Ba*t:Math.round(e.h)-Ba*t,r<0?r+=360:r>=360&&(r-=360),r}function l0(e,t,n){if(e.h===0&&e.s===0)return e.s;var r;return n?r=e.s-i0*t:t===_2?r=e.s+i0:r=e.s+zf*t,r>1&&(r=1),n&&t===E2&&r>.1&&(r=.1),r<.06&&(r=.06),Number(r.toFixed(2))}function c0(e,t,n){var r;return n?r=e.v+Tf*t:r=e.v-Pf*t,r>1&&(r=1),Number(r.toFixed(2))}function Lf(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[],r=Or(e),a=E2;a>0;a-=1){var i=s0(r),o=Ua(Or({h:o0(i,a,!0),s:l0(i,a,!0),v:c0(i,a,!0)}));n.push(o)}n.push(Ua(r));for(var l=1;l<=_2;l+=1){var c=s0(r),u=Ua(Or({h:o0(c,l),s:l0(c,l),v:c0(c,l)}));n.push(u)}return t.theme==="dark"?Of.map(function(d){var m=d.index,h=d.opacity,w=Ua(Rf(Or(t.backgroundColor||"#141414"),Or(n[m]),h*100));return w}):n}var ol=["#e6f4ff","#bae0ff","#91caff","#69b1ff","#4096ff","#1677ff","#0958d9","#003eb3","#002c8c","#001d66"];ol.primary=ol[5];function u0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?u0(Object(n),!0).forEach(function(r){sl(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $f(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Mf(e,t){if(!e)return!1;if(e.contains)return e.contains(t);for(var n=t;n;){if(n===e)return!0;n=n.parentNode}return!1}var d0="data-rc-order",p0="data-rc-priority",If="rc-util-key",ll=new Map;function z2(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.mark;return t?t.startsWith("data-")?t:"data-".concat(t):If}function gc(e){if(e.attachTo)return e.attachTo;var t=document.querySelector("head");return t||document.body}function Af(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function vc(e){return Array.from((ll.get(e)||e).children).filter(function(t){return t.tagName==="STYLE"})}function T2(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!$f())return null;var n=t.csp,r=t.prepend,a=t.priority,i=a===void 0?0:a,o=Af(r),l=o==="prependQueue",c=document.createElement("style");c.setAttribute(d0,o),l&&i&&c.setAttribute(p0,"".concat(i)),n!=null&&n.nonce&&(c.nonce=n==null?void 0:n.nonce),c.innerHTML=e;var u=gc(t),d=u.firstChild;if(r){if(l){var m=(t.styles||vc(u)).filter(function(h){if(!["prepend","prependQueue"].includes(h.getAttribute(d0)))return!1;var w=Number(h.getAttribute(p0)||0);return i>=w});if(m.length)return u.insertBefore(c,m[m.length-1].nextSibling),c}u.insertBefore(c,d)}else u.appendChild(c);return c}function Df(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=gc(t);return(t.styles||vc(n)).find(function(r){return r.getAttribute(z2(t))===e})}function Hf(e,t){var n=ll.get(e);if(!n||!Mf(document,n)){var r=T2("",t),a=r.parentNode;ll.set(e,a),e.removeChild(r)}}function Vf(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=gc(n),a=vc(r),i=Rt(Rt({},n),{},{styles:a});Hf(r,i);var o=Df(t,i);if(o){var l,c;if((l=i.csp)!==null&&l!==void 0&&l.nonce&&o.nonce!==((c=i.csp)===null||c===void 0?void 0:c.nonce)){var u;o.nonce=(u=i.csp)===null||u===void 0?void 0:u.nonce}return o.innerHTML!==e&&(o.innerHTML=e),o}var d=T2(e,i);return d.setAttribute(z2(i),t),d}function P2(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}function Ff(e){return P2(e)instanceof ShadowRoot}function Bf(e){return Ff(e)?P2(e):null}var cl={},Uf=function(t){};function Wf(e,t){}function qf(e,t){}function Gf(){cl={}}function O2(e,t,n){!t&&!cl[n]&&(e(!1,n),cl[n]=!0)}function us(e,t){O2(Wf,e,t)}function Qf(e,t){O2(qf,e,t)}us.preMessage=Uf;us.resetWarned=Gf;us.noteOnce=Qf;function Zf(e){return e.replace(/-(.)/g,function(t,n){return n.toUpperCase()})}function Yf(e,t){us(e,"[@ant-design/icons] ".concat(t))}function f0(e){return $n(e)==="object"&&typeof e.name=="string"&&typeof e.theme=="string"&&($n(e.icon)==="object"||typeof e.icon=="function")}function h0(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(e).reduce(function(t,n){var r=e[n];switch(n){case"class":t.className=r,delete t.class;break;default:delete t[n],t[Zf(n)]=r}return t},{})}function ul(e,t,n){return n?di.createElement(e.tag,Rt(Rt({key:t},h0(e.attrs)),n),(e.children||[]).map(function(r,a){return ul(r,"".concat(t,"-").concat(e.tag,"-").concat(a))})):di.createElement(e.tag,Rt({key:t},h0(e.attrs)),(e.children||[]).map(function(r,a){return ul(r,"".concat(t,"-").concat(e.tag,"-").concat(a))}))}function R2(e){return Lf(e)[0]}function L2(e){return e?Array.isArray(e)?e:[e]:[]}var Jf=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,Xf=function(t){var n=p.useContext(C2),r=n.csp,a=n.prefixCls,i=Jf;a&&(i=i.replace(/anticon/g,a)),p.useEffect(function(){var o=t.current,l=Bf(o);Vf(i,"@ant-design-icons",{prepend:!0,csp:r,attachTo:l})},[])},Kf=["icon","className","onClick","style","primaryColor","secondaryColor"],Zr={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function e8(e){var t=e.primaryColor,n=e.secondaryColor;Zr.primaryColor=t,Zr.secondaryColor=n||R2(t),Zr.calculated=!!n}function t8(){return Rt({},Zr)}var ds=function(t){var n=t.icon,r=t.className,a=t.onClick,i=t.style,o=t.primaryColor,l=t.secondaryColor,c=S2(t,Kf),u=p.useRef(),d=Zr;if(o&&(d={primaryColor:o,secondaryColor:l||R2(o)}),Xf(u),Yf(f0(n),"icon should be icon definiton, but got ".concat(n)),!f0(n))return null;var m=n;return m&&typeof m.icon=="function"&&(m=Rt(Rt({},m),{},{icon:m.icon(d.primaryColor,d.secondaryColor)})),ul(m.icon,"svg-".concat(m.name),Rt(Rt({className:r,onClick:a,style:i,"data-icon":m.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},c),{},{ref:u}))};ds.displayName="IconReact";ds.getTwoToneColors=t8;ds.setTwoToneColors=e8;const xc=ds;function $2(e){var t=L2(e),n=j2(t,2),r=n[0],a=n[1];return xc.setTwoToneColors({primaryColor:r,secondaryColor:a})}function n8(){var e=xc.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}var r8=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];$2(ol.primary);var ps=p.forwardRef(function(e,t){var n=e.className,r=e.icon,a=e.spin,i=e.rotate,o=e.tabIndex,l=e.onClick,c=e.twoToneColor,u=S2(e,r8),d=p.useContext(C2),m=d.prefixCls,h=m===void 0?"anticon":m,w=d.rootClassName,y=vf(w,h,sl(sl({},"".concat(h,"-").concat(r.name),!!r.name),"".concat(h,"-spin"),!!a||r.name==="loading"),n),b=o;b===void 0&&l&&(b=-1);var C=i?{msTransform:"rotate(".concat(i,"deg)"),transform:"rotate(".concat(i,"deg)")}:void 0,g=L2(c),f=j2(g,2),x=f[0],k=f[1];return p.createElement("span",M({role:"img","aria-label":r.name},u,{ref:t,tabIndex:b,onClick:l,className:y}),p.createElement(xc,{icon:r,primaryColor:x,secondaryColor:k,style:C}))});ps.displayName="AntdIcon";ps.getTwoToneColor=n8;ps.setTwoToneColor=$2;const I=ps;var a8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"}}]},name:"appstore",theme:"outlined"};const i8=a8;var s8=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:i8}))},o8=p.forwardRef(s8);const l8=o8;var c8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"};const u8=c8;var d8=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:u8}))},p8=p.forwardRef(d8);const f8=p8;var h8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};const m8=h8;var g8=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:m8}))},v8=p.forwardRef(g8);const ga=v8;var x8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};const y8=x8;var b8=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:y8}))},w8=p.forwardRef(b8);const k8=w8;var C8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M894 462c30.9 0 43.8-39.7 18.7-58L530.8 126.2a31.81 31.81 0 00-37.6 0L111.3 404c-25.1 18.2-12.2 58 18.8 58H192v374h-72c-4.4 0-8 3.6-8 8v52c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-52c0-4.4-3.6-8-8-8h-72V462h62zM512 196.7l271.1 197.2H240.9L512 196.7zM264 462h117v374H264V462zm189 0h117v374H453V462zm307 374H642V462h118v374z"}}]},name:"bank",theme:"outlined"};const j8=C8;var S8=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:j8}))},N8=p.forwardRef(S8);const m0=N8;var E8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z"}}]},name:"bulb",theme:"outlined"};const _8=E8;var z8=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:_8}))},T8=p.forwardRef(z8);const P8=T8;var O8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"}}]},name:"calendar",theme:"outlined"};const R8=O8;var L8=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:R8}))},$8=p.forwardRef(L8);const M8=$8;var I8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 248H728l-32.4-90.8a32.07 32.07 0 00-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"}}]},name:"camera",theme:"outlined"};const A8=I8;var D8=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:A8}))},H8=p.forwardRef(D8);const V8=H8;var F8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"};const B8=F8;var U8=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:B8}))},W8=p.forwardRef(U8);const yc=W8;var q8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]},name:"clock-circle",theme:"outlined"};const G8=q8;var Q8=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:G8}))},Z8=p.forwardRef(Q8);const bc=Z8;var Y8={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z"}}]},name:"close-circle",theme:"outlined"};const J8=Y8;var X8=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:J8}))},K8=p.forwardRef(X8);const e5=K8;var t5={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 00-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zM512 734.2c-62.1 0-112.6-50.5-112.6-112.6S449.9 509 512 509s112.6 50.5 112.6 112.6S574.1 734.2 512 734.2zm0-160.9c-26.6 0-48.2 21.6-48.2 48.3 0 26.6 21.6 48.3 48.2 48.3s48.2-21.6 48.2-48.3c0-26.6-21.6-48.3-48.2-48.3z"}}]},name:"crown",theme:"filled"};const n5=t5;var r5=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:n5}))},a5=p.forwardRef(r5);const i5=a5;var s5={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"}}]},name:"dollar",theme:"outlined"};const o5=s5;var l5=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:o5}))},c5=p.forwardRef(l5);const u5=c5;var d5={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 289.1a362.49 362.49 0 00-79.9-115.7 370.83 370.83 0 00-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 00169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0022.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1zm0-617.2c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z"}}]},name:"environment",theme:"outlined"};const p5=d5;var f5=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:p5}))},h5=p.forwardRef(f5);const Qs=h5;var m5={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"};const g5=m5;var v5=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:g5}))},x5=p.forwardRef(v5);const y5=x5;var b5={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};const w5=b5;var k5=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:w5}))},C5=p.forwardRef(k5);const Zs=C5;var j5={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"};const S5=j5;var N5=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:S5}))},E5=p.forwardRef(N5);const Ys=E5;var _5={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M644.7 669.2a7.92 7.92 0 00-6.5-3.3H594c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.8-5.3 0-12.7-6.5-12.7h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-22.9-31.9zM688 306v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm184 458H208V148h560v296c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h312c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm402.6-320.8l-192-66.7c-.9-.3-1.7-.4-2.6-.4s-1.8.1-2.6.4l-192 66.7a7.96 7.96 0 00-5.4 7.5v251.1c0 2.5 1.1 4.8 3.1 6.3l192 150.2c1.4 1.1 3.2 1.7 4.9 1.7s3.5-.6 4.9-1.7l192-150.2c1.9-1.5 3.1-3.8 3.1-6.3V538.7c0-3.4-2.2-6.4-5.4-7.5zM826 763.7L688 871.6 550 763.7V577l138-48 138 48v186.7z"}}]},name:"file-protect",theme:"outlined"};const z5=_5;var T5=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:z5}))},P5=p.forwardRef(T5);const O5=P5;var R5={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"}}]},name:"file-text",theme:"outlined"};const L5=R5;var $5=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:L5}))},M5=p.forwardRef($5);const I5=M5;var A5={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M905.9 806.7l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H596.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.3-.7 7.3-4.8 6.6-9.2zm-470.2-248c-.6-3.9-4-6.7-7.9-6.7H166.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248zM342 472h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H382.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8z"}}]},name:"gold",theme:"filled"};const D5=A5;var H5=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:D5}))},V5=p.forwardRef(H5);const F5=V5;var B5={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z"}}]},name:"google",theme:"outlined"};const U5=B5;var W5=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:U5}))},q5=p.forwardRef(W5);const G5=q5;var Q5={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"}}]},name:"heart",theme:"outlined"};const Z5=Q5;var Y5=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:Z5}))},J5=p.forwardRef(Y5);const X5=J5;var K5={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"};const eh=K5;var th=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:eh}))},nh=p.forwardRef(th);const rh=nh;var ah={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V232h752v560zM610.3 476h123.4c1.3 0 2.3-3.6 2.3-8v-48c0-4.4-1-8-2.3-8H610.3c-1.3 0-2.3 3.6-2.3 8v48c0 4.4 1 8 2.3 8zm4.8 144h185.7c3.9 0 7.1-3.6 7.1-8v-48c0-4.4-3.2-8-7.1-8H615.1c-3.9 0-7.1 3.6-7.1 8v48c0 4.4 3.2 8 7.1 8zM224 673h43.9c4.2 0 7.6-3.3 7.9-7.5 3.8-50.5 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H522a8 8 0 008-8.4c-2.8-53.3-32-99.7-74.6-126.1a111.8 111.8 0 0029.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 00-74.6 126.1c-.4 4.6 3.2 8.4 7.8 8.4zm149-262c28.5 0 51.7 23.3 51.7 52s-23.2 52-51.7 52-51.7-23.3-51.7-52 23.2-52 51.7-52z"}}]},name:"idcard",theme:"outlined"};const ih=ah;var sh=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:ih}))},oh=p.forwardRef(sh);const lh=oh;var ch={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};const uh=ch;var dh=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:uh}))},ph=p.forwardRef(dh);const Dr=ph;var fh={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};const hh=fh;var mh=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:hh}))},gh=p.forwardRef(mh);const M2=gh;var vh={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};const xh=vh;var yh=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:xh}))},bh=p.forwardRef(yh);const wh=bh;var kh={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"}}]},name:"logout",theme:"outlined"};const Ch=kh;var jh=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:Ch}))},Sh=p.forwardRef(jh);const Nh=Sh;var Eh={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"};const _h=Eh;var zh=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:_h}))},Th=p.forwardRef(zh);const li=Th;var Ph={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M839.2 278.1a32 32 0 00-30.4-22.1H736V144c0-17.7-14.3-32-32-32H320c-17.7 0-32 14.3-32 32v112h-72.8a31.9 31.9 0 00-30.4 22.1L112 502v378c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V502l-72.8-223.9zM360 184h304v72H360v-72zm480 656H184V513.4L244.3 328h535.4L840 513.4V840zM652 572H544V464c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V636h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}}]},name:"medicine-box",theme:"outlined"};const Oh=Ph;var Rh=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:Oh}))},Lh=p.forwardRef(Rh);const $h=Lh;var Mh={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"}}]},name:"menu-fold",theme:"outlined"};const Ih=Mh;var Ah=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:Ih}))},Dh=p.forwardRef(Ah);const Hh=Dh;var Vh={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"};const Fh=Vh;var Bh=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:Fh}))},Uh=p.forwardRef(Bh);const Wh=Uh;var qh={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"}}]},name:"message",theme:"outlined"};const Gh=qh;var Qh=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:Gh}))},Zh=p.forwardRef(Qh);const I2=Zh;var Yh={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M911.5 700.7a8 8 0 00-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 00-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z"}}]},name:"money-collect",theme:"outlined"};const Jh=Yh;var Xh=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:Jh}))},Kh=p.forwardRef(Xh);const wc=Kh;var em={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"}}]},name:"phone",theme:"outlined"};const tm=em;var nm=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:tm}))},rm=p.forwardRef(nm);const dl=rm;var am={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"profile",theme:"outlined"};const im=am;var sm=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:im}))},om=p.forwardRef(sm);const lm=om;var cm={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"};const um=cm;var dm=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:um}))},pm=p.forwardRef(dm);const fm=pm;var hm={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M917 211.1l-199.2 24c-6.6.8-9.4 8.9-4.7 13.6l59.3 59.3-226 226-101.8-101.7c-6.3-6.3-16.4-6.2-22.6 0L100.3 754.1a8.03 8.03 0 000 11.3l45 45.2c3.1 3.1 8.2 3.1 11.3 0L433.3 534 535 635.7c6.3 6.2 16.4 6.2 22.6 0L829 364.5l59.3 59.3a8.01 8.01 0 0013.6-4.7l24-199.2c.7-5.1-3.7-9.5-8.9-8.8z"}}]},name:"rise",theme:"outlined"};const mm=hm;var gm=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:mm}))},vm=p.forwardRef(gm);const xm=vm;var ym={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 00-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0043.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0043.1-30.5 97.52 97.52 0 0021.4-60.8c0-8.4-1.1-16.4-3.1-23.8L864 736zM512 352a48.01 48.01 0 010 96 48.01 48.01 0 010-96zm116.1 432.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5s-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 01-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5z"}}]},name:"rocket",theme:"filled"};const bm=ym;var wm=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:bm}))},km=p.forwardRef(wm);const Cm=km;var jm={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zm-405.8-201c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0026 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z"}}]},name:"safety-certificate",theme:"outlined"};const Sm=jm;var Nm=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:Sm}))},Em=p.forwardRef(Nm);const _m=Em;var zm={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 136H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm308.2-177.4L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0025.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5z"}}]},name:"schedule",theme:"outlined"};const Tm=zm;var Pm=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:Tm}))},Om=p.forwardRef(Pm);const Rm=Om;var Lm={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"};const $m=Lm;var Mm=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:$m}))},Im=p.forwardRef(Mm);const Am=Im;var Dm={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm224 272c-85.5 0-155.6-67.3-160-151.6a8 8 0 018-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c.3-4.2 3.9-7.4 8.1-7.4H664a8 8 0 018 8.4C667.6 625.7 597.5 693 512 693zm176-224a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"smile",theme:"filled"};const Hm=Dm;var Vm=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:Hm}))},Fm=p.forwardRef(Vm);const Bm=Fm;var Um={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M688 264c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48zm-8 136H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM480 544H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 308H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm356.8-74.4c29-26.3 47.2-64.3 47.2-106.6 0-79.5-64.5-144-144-144s-144 64.5-144 144c0 42.3 18.2 80.3 47.2 106.6-57 32.5-96.2 92.7-99.2 162.1-.2 4.5 3.5 8.3 8 8.3h48.1c4.2 0 7.7-3.3 8-7.6C564 871.2 621.7 816 692 816s128 55.2 131.9 124.4c.2 4.2 3.7 7.6 8 7.6H880c4.6 0 8.2-3.8 8-8.3-2.9-69.5-42.2-129.6-99.2-162.1zM692 591c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80z"}}]},name:"solution",theme:"outlined"};const Wm=Um;var qm=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:Wm}))},Gm=p.forwardRef(qm);const A2=Gm;var Qm={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"};const Zm=Qm;var Ym=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:Zm}))},Jm=p.forwardRef(Ym);const Xm=Jm;var Km={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]},name:"star",theme:"outlined"};const e7=Km;var t7=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:e7}))},n7=p.forwardRef(t7);const r7=n7;var a7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"}}]},name:"team",theme:"outlined"};const i7=a7;var s7=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:i7}))},o7=p.forwardRef(s7);const kc=o7;var l7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z"}}]},name:"thunderbolt",theme:"filled"};const c7=l7;var u7=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:c7}))},d7=p.forwardRef(u7);const pl=d7;var p7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"}}]},name:"thunderbolt",theme:"outlined"};const f7=p7;var h7=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:f7}))},m7=p.forwardRef(h7);const Js=m7;var g7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM184 352V232h64v207.6a91.99 91.99 0 01-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z"}}]},name:"trophy",theme:"outlined"};const v7=g7;var x7=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:v7}))},y7=p.forwardRef(x7);const g0=y7;var b7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 888.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-add",theme:"outlined"};const w7=b7;var k7=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:w7}))},C7=p.forwardRef(k7);const v0=C7;var j7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};const S7=j7;var N7=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:S7}))},E7=p.forwardRef(N7);const _7=E7;var z7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 464H528V448h320v128zm-268-64a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"wallet",theme:"filled"};const T7=z7;var P7=function(t,n){return p.createElement(I,M({},t,{ref:n,icon:T7}))},O7=p.forwardRef(P7);const R7=O7;function Cc(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Vn=Cc();function D2(e){Vn=e}var Yr={exec:()=>null};function Z(e,t=""){let n=typeof e=="string"?e:e.source,r={replace:(a,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(Ue.caret,"$1"),n=n.replace(a,o),r},getRegex:()=>new RegExp(n,t)};return r}var Ue={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},L7=/^(?:[ \t]*(?:\n|$))+/,$7=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,M7=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ca=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,I7=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,jc=/(?:[*+-]|\d{1,9}[.)])/,H2=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,V2=Z(H2).replace(/bull/g,jc).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),A7=Z(H2).replace(/bull/g,jc).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Sc=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,D7=/^[^\n]+/,Nc=/(?!\s*\])(?:\\.|[^\[\]\\])+/,H7=Z(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Nc).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),V7=Z(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,jc).getRegex(),fs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ec=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,F7=Z("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Ec).replace("tag",fs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),F2=Z(Sc).replace("hr",Ca).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",fs).getRegex(),B7=Z(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",F2).getRegex(),_c={blockquote:B7,code:$7,def:H7,fences:M7,heading:I7,hr:Ca,html:F7,lheading:V2,list:V7,newline:L7,paragraph:F2,table:Yr,text:D7},x0=Z("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ca).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",fs).getRegex(),U7={..._c,lheading:A7,table:x0,paragraph:Z(Sc).replace("hr",Ca).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",x0).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",fs).getRegex()},W7={..._c,html:Z(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ec).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Yr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Z(Sc).replace("hr",Ca).replace("heading",` *#{1,6} *[^
]`).replace("lheading",V2).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},q7=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,G7=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,B2=/^( {2,}|\\)\n(?!\s*$)/,Q7=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,hs=/[\p{P}\p{S}]/u,zc=/[\s\p{P}\p{S}]/u,U2=/[^\s\p{P}\p{S}]/u,Z7=Z(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,zc).getRegex(),W2=/(?!~)[\p{P}\p{S}]/u,Y7=/(?!~)[\s\p{P}\p{S}]/u,J7=/(?:[^\s\p{P}\p{S}]|~)/u,X7=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g,q2=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,K7=Z(q2,"u").replace(/punct/g,hs).getRegex(),e9=Z(q2,"u").replace(/punct/g,W2).getRegex(),G2="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",t9=Z(G2,"gu").replace(/notPunctSpace/g,U2).replace(/punctSpace/g,zc).replace(/punct/g,hs).getRegex(),n9=Z(G2,"gu").replace(/notPunctSpace/g,J7).replace(/punctSpace/g,Y7).replace(/punct/g,W2).getRegex(),r9=Z("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,U2).replace(/punctSpace/g,zc).replace(/punct/g,hs).getRegex(),a9=Z(/\\(punct)/,"gu").replace(/punct/g,hs).getRegex(),i9=Z(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),s9=Z(Ec).replace("(?:-->|$)","-->").getRegex(),o9=Z("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",s9).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Fi=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,l9=Z(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Fi).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Q2=Z(/^!?\[(label)\]\[(ref)\]/).replace("label",Fi).replace("ref",Nc).getRegex(),Z2=Z(/^!?\[(ref)\](?:\[\])?/).replace("ref",Nc).getRegex(),c9=Z("reflink|nolink(?!\\()","g").replace("reflink",Q2).replace("nolink",Z2).getRegex(),Tc={_backpedal:Yr,anyPunctuation:a9,autolink:i9,blockSkip:X7,br:B2,code:G7,del:Yr,emStrongLDelim:K7,emStrongRDelimAst:t9,emStrongRDelimUnd:r9,escape:q7,link:l9,nolink:Z2,punctuation:Z7,reflink:Q2,reflinkSearch:c9,tag:o9,text:Q7,url:Yr},u9={...Tc,link:Z(/^!?\[(label)\]\((.*?)\)/).replace("label",Fi).getRegex(),reflink:Z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Fi).getRegex()},fl={...Tc,emStrongRDelimAst:n9,emStrongLDelim:e9,url:Z(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},d9={...fl,br:Z(B2).replace("{2,}","*").getRegex(),text:Z(fl.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Wa={normal:_c,gfm:U7,pedantic:W7},Rr={normal:Tc,gfm:fl,breaks:d9,pedantic:u9},p9={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},y0=e=>p9[e];function zt(e,t){if(t){if(Ue.escapeTest.test(e))return e.replace(Ue.escapeReplace,y0)}else if(Ue.escapeTestNoEncode.test(e))return e.replace(Ue.escapeReplaceNoEncode,y0);return e}function b0(e){try{e=encodeURI(e).replace(Ue.percentDecode,"%")}catch{return null}return e}function w0(e,t){var i;let n=e.replace(Ue.findPipe,(o,l,c)=>{let u=!1,d=l;for(;--d>=0&&c[d]==="\\";)u=!u;return u?"|":" |"}),r=n.split(Ue.splitPipe),a=0;if(r[0].trim()||r.shift(),r.length>0&&!((i=r.at(-1))!=null&&i.trim())&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;a<r.length;a++)r[a]=r[a].trim().replace(Ue.slashPipe,"|");return r}function Lr(e,t,n){let r=e.length;if(r===0)return"";let a=0;for(;a<r;){let i=e.charAt(r-a-1);if(i===t&&!n)a++;else if(i!==t&&n)a++;else break}return e.slice(0,r-a)}function f9(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function k0(e,t,n,r,a){let i=t.href,o=t.title||null,l=e[1].replace(a.other.outputLinkReplace,"$1");r.state.inLink=!0;let c={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:o,text:l,tokens:r.inlineTokens(l)};return r.state.inLink=!1,c}function h9(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let a=r[1];return t.split(`
`).map(i=>{let o=i.match(n.other.beginningSpace);if(o===null)return i;let[l]=o;return l.length>=a.length?i.slice(a.length):i}).join(`
`)}var Bi=class{constructor(t){ee(this,"options");ee(this,"rules");ee(this,"lexer");this.options=t||Vn}space(t){let n=this.rules.block.newline.exec(t);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(t){let n=this.rules.block.code.exec(t);if(n){let r=n[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Lr(r,`
`)}}}fences(t){let n=this.rules.block.fences.exec(t);if(n){let r=n[0],a=h9(r,n[3]||"",this.rules);return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:a}}}heading(t){let n=this.rules.block.heading.exec(t);if(n){let r=n[2].trim();if(this.rules.other.endingHash.test(r)){let a=Lr(r,"#");(this.options.pedantic||!a||this.rules.other.endingSpaceChar.test(a))&&(r=a.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(t){let n=this.rules.block.hr.exec(t);if(n)return{type:"hr",raw:Lr(n[0],`
`)}}blockquote(t){let n=this.rules.block.blockquote.exec(t);if(n){let r=Lr(n[0],`
`).split(`
`),a="",i="",o=[];for(;r.length>0;){let l=!1,c=[],u;for(u=0;u<r.length;u++)if(this.rules.other.blockquoteStart.test(r[u]))c.push(r[u]),l=!0;else if(!l)c.push(r[u]);else break;r=r.slice(u);let d=c.join(`
`),m=d.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");a=a?`${a}
${d}`:d,i=i?`${i}
${m}`:m;let h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(m,o,!0),this.lexer.state.top=h,r.length===0)break;let w=o.at(-1);if((w==null?void 0:w.type)==="code")break;if((w==null?void 0:w.type)==="blockquote"){let y=w,b=y.raw+`
`+r.join(`
`),C=this.blockquote(b);o[o.length-1]=C,a=a.substring(0,a.length-y.raw.length)+C.raw,i=i.substring(0,i.length-y.text.length)+C.text;break}else if((w==null?void 0:w.type)==="list"){let y=w,b=y.raw+`
`+r.join(`
`),C=this.list(b);o[o.length-1]=C,a=a.substring(0,a.length-w.raw.length)+C.raw,i=i.substring(0,i.length-y.raw.length)+C.raw,r=b.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:a,tokens:o,text:i}}}list(t){let n=this.rules.block.list.exec(t);if(n){let r=n[1].trim(),a=r.length>1,i={type:"list",raw:"",ordered:a,start:a?+r.slice(0,-1):"",loose:!1,items:[]};r=a?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=a?r:"[*+-]");let o=this.rules.other.listItemRegex(r),l=!1;for(;t;){let u=!1,d="",m="";if(!(n=o.exec(t))||this.rules.block.hr.test(t))break;d=n[0],t=t.substring(d.length);let h=n[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,f=>" ".repeat(3*f.length)),w=t.split(`
`,1)[0],y=!h.trim(),b=0;if(this.options.pedantic?(b=2,m=h.trimStart()):y?b=n[1].length+1:(b=n[2].search(this.rules.other.nonSpaceChar),b=b>4?1:b,m=h.slice(b),b+=n[1].length),y&&this.rules.other.blankLine.test(w)&&(d+=w+`
`,t=t.substring(w.length+1),u=!0),!u){let f=this.rules.other.nextBulletRegex(b),x=this.rules.other.hrRegex(b),k=this.rules.other.fencesBeginRegex(b),j=this.rules.other.headingBeginRegex(b),S=this.rules.other.htmlBeginRegex(b);for(;t;){let N=t.split(`
`,1)[0],_;if(w=N,this.options.pedantic?(w=w.replace(this.rules.other.listReplaceNesting,"  "),_=w):_=w.replace(this.rules.other.tabCharGlobal,"    "),k.test(w)||j.test(w)||S.test(w)||f.test(w)||x.test(w))break;if(_.search(this.rules.other.nonSpaceChar)>=b||!w.trim())m+=`
`+_.slice(b);else{if(y||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||k.test(h)||j.test(h)||x.test(h))break;m+=`
`+w}!y&&!w.trim()&&(y=!0),d+=N+`
`,t=t.substring(N.length+1),h=_.slice(b)}}i.loose||(l?i.loose=!0:this.rules.other.doubleBlankLine.test(d)&&(l=!0));let C=null,g;this.options.gfm&&(C=this.rules.other.listIsTask.exec(m),C&&(g=C[0]!=="[ ] ",m=m.replace(this.rules.other.listReplaceTask,""))),i.items.push({type:"list_item",raw:d,task:!!C,checked:g,loose:!1,text:m,tokens:[]}),i.raw+=d}let c=i.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let u=0;u<i.items.length;u++)if(this.lexer.state.top=!1,i.items[u].tokens=this.lexer.blockTokens(i.items[u].text,[]),!i.loose){let d=i.items[u].tokens.filter(h=>h.type==="space"),m=d.length>0&&d.some(h=>this.rules.other.anyLine.test(h.raw));i.loose=m}if(i.loose)for(let u=0;u<i.items.length;u++)i.items[u].loose=!0;return i}}html(t){let n=this.rules.block.html.exec(t);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(t){let n=this.rules.block.def.exec(t);if(n){let r=n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),a=n[2]?n[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:a,title:i}}}table(t){var l;let n=this.rules.block.table.exec(t);if(!n||!this.rules.other.tableDelimiter.test(n[2]))return;let r=w0(n[1]),a=n[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=(l=n[3])!=null&&l.trim()?n[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===a.length){for(let c of a)this.rules.other.tableAlignRight.test(c)?o.align.push("right"):this.rules.other.tableAlignCenter.test(c)?o.align.push("center"):this.rules.other.tableAlignLeft.test(c)?o.align.push("left"):o.align.push(null);for(let c=0;c<r.length;c++)o.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:o.align[c]});for(let c of i)o.rows.push(w0(c,o.header.length).map((u,d)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:o.align[d]})));return o}}lheading(t){let n=this.rules.block.lheading.exec(t);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(t){let n=this.rules.block.paragraph.exec(t);if(n){let r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(t){let n=this.rules.block.text.exec(t);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(t){let n=this.rules.inline.escape.exec(t);if(n)return{type:"escape",raw:n[0],text:n[1]}}tag(t){let n=this.rules.inline.tag.exec(t);if(n)return!this.lexer.state.inLink&&this.rules.other.startATag.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(t){let n=this.rules.inline.link.exec(t);if(n){let r=n[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let o=Lr(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{let o=f9(n[2],"()");if(o===-2)return;if(o>-1){let l=(n[0].indexOf("!")===0?5:4)+n[1].length+o;n[2]=n[2].substring(0,o),n[0]=n[0].substring(0,l).trim(),n[3]=""}}let a=n[2],i="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(a);o&&(a=o[1],i=o[3])}else i=n[3]?n[3].slice(1,-1):"";return a=a.trim(),this.rules.other.startAngleBracket.test(a)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?a=a.slice(1):a=a.slice(1,-1)),k0(n,{href:a&&a.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer,this.rules)}}reflink(t,n){let r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){let a=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=n[a.toLowerCase()];if(!i){let o=r[0].charAt(0);return{type:"text",raw:o,text:o}}return k0(r,i,r[0],this.lexer,this.rules)}}emStrong(t,n,r=""){let a=this.rules.inline.emStrongLDelim.exec(t);if(!(!a||a[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(a[1]||a[2])||!r||this.rules.inline.punctuation.exec(r))){let i=[...a[0]].length-1,o,l,c=i,u=0,d=a[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,n=n.slice(-1*t.length+i);(a=d.exec(n))!=null;){if(o=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!o)continue;if(l=[...o].length,a[3]||a[4]){c+=l;continue}else if((a[5]||a[6])&&i%3&&!((i+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);let m=[...a[0]][0].length,h=t.slice(0,i+a.index+m+l);if(Math.min(i,l)%2){let y=h.slice(1,-1);return{type:"em",raw:h,text:y,tokens:this.lexer.inlineTokens(y)}}let w=h.slice(2,-2);return{type:"strong",raw:h,text:w,tokens:this.lexer.inlineTokens(w)}}}}codespan(t){let n=this.rules.inline.code.exec(t);if(n){let r=n[2].replace(this.rules.other.newLineCharGlobal," "),a=this.rules.other.nonSpaceChar.test(r),i=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return a&&i&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:n[0],text:r}}}br(t){let n=this.rules.inline.br.exec(t);if(n)return{type:"br",raw:n[0]}}del(t){let n=this.rules.inline.del.exec(t);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(t){let n=this.rules.inline.autolink.exec(t);if(n){let r,a;return n[2]==="@"?(r=n[1],a="mailto:"+r):(r=n[1],a=r),{type:"link",raw:n[0],text:r,href:a,tokens:[{type:"text",raw:r,text:r}]}}}url(t){var r;let n;if(n=this.rules.inline.url.exec(t)){let a,i;if(n[2]==="@")a=n[0],i="mailto:"+a;else{let o;do o=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(o!==n[0]);a=n[0],n[1]==="www."?i="http://"+n[0]:i=n[0]}return{type:"link",raw:n[0],text:a,href:i,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(t){let n=this.rules.inline.text.exec(t);if(n){let r=this.lexer.state.inRawBlock;return{type:"text",raw:n[0],text:n[0],escaped:r}}}},Ft=class hl{constructor(t){ee(this,"tokens");ee(this,"options");ee(this,"state");ee(this,"tokenizer");ee(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Vn,this.options.tokenizer=this.options.tokenizer||new Bi,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:Ue,block:Wa.normal,inline:Rr.normal};this.options.pedantic?(n.block=Wa.pedantic,n.inline=Rr.pedantic):this.options.gfm&&(n.block=Wa.gfm,this.options.breaks?n.inline=Rr.breaks:n.inline=Rr.gfm),this.tokenizer.rules=n}static get rules(){return{block:Wa,inline:Rr}}static lex(t,n){return new hl(n).lex(t)}static lexInline(t,n){return new hl(n).inlineTokens(t)}lex(t){t=t.replace(Ue.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],r=!1){var a,i,o;for(this.options.pedantic&&(t=t.replace(Ue.tabCharGlobal,"    ").replace(Ue.spaceLine,""));t;){let l;if((i=(a=this.options.extensions)==null?void 0:a.block)!=null&&i.some(u=>(l=u.call({lexer:this},t,n))?(t=t.substring(l.raw.length),n.push(l),!0):!1))continue;if(l=this.tokenizer.space(t)){t=t.substring(l.raw.length);let u=n.at(-1);l.raw.length===1&&u!==void 0?u.raw+=`
`:n.push(l);continue}if(l=this.tokenizer.code(t)){t=t.substring(l.raw.length);let u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=(u.raw.endsWith(`
`)?"":`
`)+l.raw,u.text+=`
`+l.text,this.inlineQueue.at(-1).src=u.text):n.push(l);continue}if(l=this.tokenizer.fences(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.heading(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.hr(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.blockquote(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.list(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.html(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.def(t)){t=t.substring(l.raw.length);let u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=(u.raw.endsWith(`
`)?"":`
`)+l.raw,u.text+=`
`+l.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.lheading(t)){t=t.substring(l.raw.length),n.push(l);continue}let c=t;if((o=this.options.extensions)!=null&&o.startBlock){let u=1/0,d=t.slice(1),m;this.options.extensions.startBlock.forEach(h=>{m=h.call({lexer:this},d),typeof m=="number"&&m>=0&&(u=Math.min(u,m))}),u<1/0&&u>=0&&(c=t.substring(0,u+1))}if(this.state.top&&(l=this.tokenizer.paragraph(c))){let u=n.at(-1);r&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=(u.raw.endsWith(`
`)?"":`
`)+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(l),r=c.length!==t.length,t=t.substring(l.raw.length);continue}if(l=this.tokenizer.text(t)){t=t.substring(l.raw.length);let u=n.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=(u.raw.endsWith(`
`)?"":`
`)+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(l);continue}if(t){let u="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){var l,c,u;let r=t,a=null;if(this.tokens.links){let d=Object.keys(this.tokens.links);if(d.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)d.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,a.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(a=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,o="";for(;t;){i||(o=""),i=!1;let d;if((c=(l=this.options.extensions)==null?void 0:l.inline)!=null&&c.some(h=>(d=h.call({lexer:this},t,n))?(t=t.substring(d.raw.length),n.push(d),!0):!1))continue;if(d=this.tokenizer.escape(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.tag(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.link(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(d.raw.length);let h=n.at(-1);d.type==="text"&&(h==null?void 0:h.type)==="text"?(h.raw+=d.raw,h.text+=d.text):n.push(d);continue}if(d=this.tokenizer.emStrong(t,r,o)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.codespan(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.br(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.del(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.autolink(t)){t=t.substring(d.raw.length),n.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(t))){t=t.substring(d.raw.length),n.push(d);continue}let m=t;if((u=this.options.extensions)!=null&&u.startInline){let h=1/0,w=t.slice(1),y;this.options.extensions.startInline.forEach(b=>{y=b.call({lexer:this},w),typeof y=="number"&&y>=0&&(h=Math.min(h,y))}),h<1/0&&h>=0&&(m=t.substring(0,h+1))}if(d=this.tokenizer.inlineText(m)){t=t.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(o=d.raw.slice(-1)),i=!0;let h=n.at(-1);(h==null?void 0:h.type)==="text"?(h.raw+=d.raw,h.text+=d.text):n.push(d);continue}if(t){let h="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return n}},Ui=class{constructor(t){ee(this,"options");ee(this,"parser");this.options=t||Vn}space(t){return""}code({text:t,lang:n,escaped:r}){var o;let a=(o=(n||"").match(Ue.notSpaceStart))==null?void 0:o[0],i=t.replace(Ue.endingNewline,"")+`
`;return a?'<pre><code class="language-'+zt(a)+'">'+(r?i:zt(i,!0))+`</code></pre>
`:"<pre><code>"+(r?i:zt(i,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}heading({tokens:t,depth:n}){return`<h${n}>${this.parser.parseInline(t)}</h${n}>
`}hr(t){return`<hr>
`}list(t){let n=t.ordered,r=t.start,a="";for(let l=0;l<t.items.length;l++){let c=t.items[l];a+=this.listitem(c)}let i=n?"ol":"ul",o=n&&r!==1?' start="'+r+'"':"";return"<"+i+o+`>
`+a+"</"+i+`>
`}listitem(t){var r;let n="";if(t.task){let a=this.checkbox({checked:!!t.checked});t.loose?((r=t.tokens[0])==null?void 0:r.type)==="paragraph"?(t.tokens[0].text=a+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=a+" "+zt(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:a+" ",text:a+" ",escaped:!0}):n+=a+" "}return n+=this.parser.parse(t.tokens,!!t.loose),`<li>${n}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let n="",r="";for(let i=0;i<t.header.length;i++)r+=this.tablecell(t.header[i]);n+=this.tablerow({text:r});let a="";for(let i=0;i<t.rows.length;i++){let o=t.rows[i];r="";for(let l=0;l<o.length;l++)r+=this.tablecell(o[l]);a+=this.tablerow({text:r})}return a&&(a=`<tbody>${a}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+a+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let n=this.parser.parseInline(t.tokens),r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+n+`</${r}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${zt(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:n,tokens:r}){let a=this.parser.parseInline(r),i=b0(t);if(i===null)return a;t=i;let o='<a href="'+t+'"';return n&&(o+=' title="'+zt(n)+'"'),o+=">"+a+"</a>",o}image({href:t,title:n,text:r,tokens:a}){a&&(r=this.parser.parseInline(a,this.parser.textRenderer));let i=b0(t);if(i===null)return zt(r);t=i;let o=`<img src="${t}" alt="${r}"`;return n&&(o+=` title="${zt(n)}"`),o+=">",o}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:zt(t.text)}},Pc=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},Bt=class ml{constructor(t){ee(this,"options");ee(this,"renderer");ee(this,"textRenderer");this.options=t||Vn,this.options.renderer=this.options.renderer||new Ui,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Pc}static parse(t,n){return new ml(n).parse(t)}static parseInline(t,n){return new ml(n).parseInline(t)}parse(t,n=!0){var a,i;let r="";for(let o=0;o<t.length;o++){let l=t[o];if((i=(a=this.options.extensions)==null?void 0:a.renderers)!=null&&i[l.type]){let u=l,d=this.options.extensions.renderers[u.type].call({parser:this},u);if(d!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){r+=d||"";continue}}let c=l;switch(c.type){case"space":{r+=this.renderer.space(c);continue}case"hr":{r+=this.renderer.hr(c);continue}case"heading":{r+=this.renderer.heading(c);continue}case"code":{r+=this.renderer.code(c);continue}case"table":{r+=this.renderer.table(c);continue}case"blockquote":{r+=this.renderer.blockquote(c);continue}case"list":{r+=this.renderer.list(c);continue}case"html":{r+=this.renderer.html(c);continue}case"paragraph":{r+=this.renderer.paragraph(c);continue}case"text":{let u=c,d=this.renderer.text(u);for(;o+1<t.length&&t[o+1].type==="text";)u=t[++o],d+=`
`+this.renderer.text(u);n?r+=this.renderer.paragraph({type:"paragraph",raw:d,text:d,tokens:[{type:"text",raw:d,text:d,escaped:!0}]}):r+=d;continue}default:{let u='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}parseInline(t,n=this.renderer){var a,i;let r="";for(let o=0;o<t.length;o++){let l=t[o];if((i=(a=this.options.extensions)==null?void 0:a.renderers)!=null&&i[l.type]){let u=this.options.extensions.renderers[l.type].call({parser:this},l);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){r+=u||"";continue}}let c=l;switch(c.type){case"escape":{r+=n.text(c);break}case"html":{r+=n.html(c);break}case"link":{r+=n.link(c);break}case"image":{r+=n.image(c);break}case"strong":{r+=n.strong(c);break}case"em":{r+=n.em(c);break}case"codespan":{r+=n.codespan(c);break}case"br":{r+=n.br(c);break}case"del":{r+=n.del(c);break}case"text":{r+=n.text(c);break}default:{let u='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}},oo,ci=(oo=class{constructor(t){ee(this,"options");ee(this,"block");this.options=t||Vn}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}provideLexer(){return this.block?Ft.lex:Ft.lexInline}provideParser(){return this.block?Bt.parse:Bt.parseInline}},ee(oo,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),oo),m9=class{constructor(...t){ee(this,"defaults",Cc());ee(this,"options",this.setOptions);ee(this,"parse",this.parseMarkdown(!0));ee(this,"parseInline",this.parseMarkdown(!1));ee(this,"Parser",Bt);ee(this,"Renderer",Ui);ee(this,"TextRenderer",Pc);ee(this,"Lexer",Ft);ee(this,"Tokenizer",Bi);ee(this,"Hooks",ci);this.use(...t)}walkTokens(t,n){var a,i;let r=[];for(let o of t)switch(r=r.concat(n.call(this,o)),o.type){case"table":{let l=o;for(let c of l.header)r=r.concat(this.walkTokens(c.tokens,n));for(let c of l.rows)for(let u of c)r=r.concat(this.walkTokens(u.tokens,n));break}case"list":{let l=o;r=r.concat(this.walkTokens(l.items,n));break}default:{let l=o;(i=(a=this.defaults.extensions)==null?void 0:a.childTokens)!=null&&i[l.type]?this.defaults.extensions.childTokens[l.type].forEach(c=>{let u=l[c].flat(1/0);r=r.concat(this.walkTokens(u,n))}):l.tokens&&(r=r.concat(this.walkTokens(l.tokens,n)))}}return r}use(...t){let n=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(r=>{let a={...r};if(a.async=this.defaults.async||a.async||!1,r.extensions&&(r.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let o=n.renderers[i.name];o?n.renderers[i.name]=function(...l){let c=i.renderer.apply(this,l);return c===!1&&(c=o.apply(this,l)),c}:n.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=n[i.level];o?o.unshift(i.tokenizer):n[i.level]=[i.tokenizer],i.start&&(i.level==="block"?n.startBlock?n.startBlock.push(i.start):n.startBlock=[i.start]:i.level==="inline"&&(n.startInline?n.startInline.push(i.start):n.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(n.childTokens[i.name]=i.childTokens)}),a.extensions=n),r.renderer){let i=this.defaults.renderer||new Ui(this.defaults);for(let o in r.renderer){if(!(o in i))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let l=o,c=r.renderer[l],u=i[l];i[l]=(...d)=>{let m=c.apply(i,d);return m===!1&&(m=u.apply(i,d)),m||""}}a.renderer=i}if(r.tokenizer){let i=this.defaults.tokenizer||new Bi(this.defaults);for(let o in r.tokenizer){if(!(o in i))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let l=o,c=r.tokenizer[l],u=i[l];i[l]=(...d)=>{let m=c.apply(i,d);return m===!1&&(m=u.apply(i,d)),m}}a.tokenizer=i}if(r.hooks){let i=this.defaults.hooks||new ci;for(let o in r.hooks){if(!(o in i))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let l=o,c=r.hooks[l],u=i[l];ci.passThroughHooks.has(o)?i[l]=d=>{if(this.defaults.async)return Promise.resolve(c.call(i,d)).then(h=>u.call(i,h));let m=c.call(i,d);return u.call(i,m)}:i[l]=(...d)=>{let m=c.apply(i,d);return m===!1&&(m=u.apply(i,d)),m}}a.hooks=i}if(r.walkTokens){let i=this.defaults.walkTokens,o=r.walkTokens;a.walkTokens=function(l){let c=[];return c.push(o.call(this,l)),i&&(c=c.concat(i.call(this,l))),c}}this.defaults={...this.defaults,...a}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,n){return Ft.lex(t,n??this.defaults)}parser(t,n){return Bt.parse(t,n??this.defaults)}parseMarkdown(t){return(n,r)=>{let a={...r},i={...this.defaults,...a},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&a.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=t);let l=i.hooks?i.hooks.provideLexer():t?Ft.lex:Ft.lexInline,c=i.hooks?i.hooks.provideParser():t?Bt.parse:Bt.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(u=>l(u,i)).then(u=>i.hooks?i.hooks.processAllTokens(u):u).then(u=>i.walkTokens?Promise.all(this.walkTokens(u,i.walkTokens)).then(()=>u):u).then(u=>c(u,i)).then(u=>i.hooks?i.hooks.postprocess(u):u).catch(o);try{i.hooks&&(n=i.hooks.preprocess(n));let u=l(n,i);i.hooks&&(u=i.hooks.processAllTokens(u)),i.walkTokens&&this.walkTokens(u,i.walkTokens);let d=c(u,i);return i.hooks&&(d=i.hooks.postprocess(d)),d}catch(u){return o(u)}}}onError(t,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let a="<p>An error occurred:</p><pre>"+zt(r.message+"",!0)+"</pre>";return n?Promise.resolve(a):a}if(n)return Promise.reject(r);throw r}}},Mn=new m9;function J(e,t){return Mn.parse(e,t)}J.options=J.setOptions=function(e){return Mn.setOptions(e),J.defaults=Mn.defaults,D2(J.defaults),J};J.getDefaults=Cc;J.defaults=Vn;J.use=function(...e){return Mn.use(...e),J.defaults=Mn.defaults,D2(J.defaults),J};J.walkTokens=function(e,t){return Mn.walkTokens(e,t)};J.parseInline=Mn.parseInline;J.Parser=Bt;J.parser=Bt.parse;J.Renderer=Ui;J.TextRenderer=Pc;J.Lexer=Ft;J.lexer=Ft.lex;J.Tokenizer=Bi;J.Hooks=ci;J.parse=J;J.options;J.setOptions;J.use;J.walkTokens;J.parseInline;Bt.parse;Ft.lex;const Oc="/imgs/racoon_learn.jpg",g9="/imgs/save.jpg";function v9({url:e,setIframeLoaded:t}){const[n,r]=p.useState(!1),a=`${e}`;return p.useEffect(()=>{const i=window.matchMedia("(max-width: 768px)");r(i.matches);const o=l=>r(l.matches);return i.addEventListener("change",o),()=>i.removeEventListener("change",o)},[]),n?s.jsx("iframe",{className:"loadpdf",src:`https://docs.google.com/viewer?url=${a}`,title:"Mobile View",style:{width:"100%",height:"100vh",border:"none"},onLoad:()=>setTimeout(()=>t(!0),4e3)}):s.jsx("iframe",{className:"loadpdf",src:a,title:"Laptop View",style:{width:"100%",height:"100vh",border:"none"},onLoad:()=>setTimeout(()=>t(!0),4e3)})}const x9=5,Y2=8e3,y9=400,b9=(e,t)=>{try{const r=JSON.parse(localStorage.getItem("recentSolutions")||"[]").filter(i=>i.course!==e),a=[{course:e,solution:t,savedAt:Date.now()},...r].slice(0,x9).filter(i=>!/aierror/gim.test(i.solution)||i.solution.length>15).sort((i,o)=>o.savedAt-i.savedAt);localStorage.setItem("recentSolutions",JSON.stringify(a))}catch{}},C0=()=>{try{return JSON.parse(localStorage.getItem("recentSolutions")||"[]")}catch{return[]}},J2=()=>{try{const e=JSON.parse(localStorage.getItem("userInfo")||"{}");if(!(e!=null&&e.accessToken))throw new Error("Missing access token. Please login again.");return{accessToken:e.accessToken,refreshToken:e.refreshToken}}catch(e){throw new Error(e.message||"Auth error. Please login again.")}},w9=({message:e,type:t="error",onDismiss:n})=>(p.useEffect(()=>{const r=setTimeout(n,3e3);return()=>clearTimeout(r)},[n]),s.jsxs("div",{className:`sf-toast sf-toast--${t}`,children:[s.jsx("span",{className:t==="error"?"sf-toast__dot sf-toast__dot--error":"sf-toast__dot sf-toast__dot--success"}),s.jsx("span",{children:e})]})),k9=({setstoreme:e,extract:t,courseName:n,selectedVal:r})=>{const[a,i]=p.useState(""),[o,l]=p.useState(!1),[c,u]=p.useState(null),d=async()=>{if(a!=="Dont save bad responses"){u({message:"Please type the note correctly to proceed",type:"error"});return}let m,h;try{({accessToken:m,refreshToken:h}=J2())}catch(b){u({message:b.message,type:"error"});return}l(!0);const w=new AbortController,y=setTimeout(()=>w.abort(),Y2);try{await st(de+"/api/v1/solutions/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${m}`},body:JSON.stringify({courseName:n,solution:t,validated:!1,modelName:r}),signal:w.signal},h),u({message:"Saved successfully!",type:"success"}),setTimeout(()=>e(!1),1600)}catch(b){u({message:b.name==="AbortError"?"Request timed out.":"Error: "+(b.message||b),type:"error"})}finally{clearTimeout(y),l(!1)}};return s.jsxs("div",{className:"sf-modal-overlay",children:[c&&s.jsx(w9,{message:c.message,type:c.type,onDismiss:()=>u(null)}),s.jsxs("div",{className:"sf-modal",children:[s.jsx("button",{className:"sf-modal__close",onClick:()=>e(!1),children:s.jsx(e5,{})}),s.jsxs("div",{className:"sf-modal__art",children:[s.jsx("img",{src:g9,alt:"save"}),s.jsx("div",{className:"sf-modal__art-fade"})]}),s.jsxs("div",{className:"sf-modal__body",children:[s.jsx("h3",{className:"sf-modal__title",children:"Save Response"}),s.jsxs("div",{className:"sf-modal__notice",children:[s.jsx("i",{className:"fa fa-exclamation-triangle sf-modal__notice-icon"}),s.jsxs("p",{children:["Only save ",s.jsx("strong",{children:"good responses"}),". This helps you avoid spending credits on the same topic twice."]})]}),s.jsxs("div",{className:"sf-modal__field",children:[s.jsx("label",{children:"Type to confirm:"}),s.jsx("div",{className:"sf-modal__confirm-phrase",children:"Dont save bad responses"}),s.jsx("input",{type:"text",value:a,onChange:m=>i(m.target.value),placeholder:"Type the phrase above…",className:a&&a!=="Dont save bad responses"?"sf-modal__input--invalid":""})]}),s.jsx("button",{className:"sf-modal__save-btn",onClick:d,disabled:o,children:o?s.jsx("span",{className:"sf-modal__spinner"}):s.jsxs(s.Fragment,{children:[s.jsx("i",{className:"fa fa-save"})," Save"]})})]})]})]})},j0=({width:e="100%",height:t=14,style:n={}})=>s.jsx("div",{className:"sf-skeleton",style:{width:e,height:t,borderRadius:6,...n}}),C9=({pdflink:e,courseName:t,selectedVal:n,setshowpdf:r,mainlogo:a,actualDlink:i,credits:o,extract:l,dataerror:c,raw:u})=>{var He;const[d,m]=p.useState(!1),[h,w]=p.useState(C0),[y,b]=p.useState(!1),[C,g]=p.useState(!1),[f,x]=p.useState(!0),[k,j]=p.useState(!0),[S,N]=p.useState(null),[_,R]=p.useState([]),[T,A]=p.useState(!1),[Q,ge]=p.useState(""),[Ie,ct]=p.useState(""),[Ae,De]=p.useState(!1),[z,L]=p.useState("saved"),$=p.useRef(null),W=p.useRef(null),q=p.useCallback(async(V="")=>{var Yt,ut;(Yt=$.current)==null||Yt.abort(),$.current=new AbortController;const ce=V.trim().length>0;ce?De(!0):A(!0),ge("");let F,ke;try{({accessToken:F,refreshToken:ke}=J2())}catch(Y){ge(Y.message),ce?De(!1):A(!1);return}const et=ce?`${de}/api/v1/solutions/queries?courseName=${encodeURIComponent(V.trim())}`:`${de}/api/v1/solutions/queries`,Ve=setTimeout(()=>{var Y;return(Y=$.current)==null?void 0:Y.abort()},Y2);try{const Y=await st(et,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${F}`},signal:$.current.signal},ke),Fn=(Y==null?void 0:Y.solutions)!=null?Y:((ut=Y==null?void 0:Y.data)==null?void 0:ut.solutions)!=null?Y.data:null;R(Fn||{solutions:[],solutions_count:0})}catch(Y){Y.name!=="AbortError"&&ge(ce?"Search failed. Try again.":"Could not load saved queries.")}finally{clearTimeout(Ve),ce?De(!1):A(!1)}},[]);p.useEffect(()=>(q(),()=>{var V;(V=$.current)==null||V.abort(),clearTimeout(W.current)}),[q]);const Oe=p.useCallback(V=>{const ce=V.target.value;ct(ce),clearTimeout(W.current),W.current=setTimeout(()=>q(ce),y9)},[q]);p.useEffect(()=>{l&&l!=="loading..."&&!(c!=null&&c.length)&&(b9(t,l),w(C0()))},[l,t,c]);const oe=l==="loading...",Se=(c==null?void 0:c.length)>0||!l||l==="loading...",D=/download/gi.test(i),le=()=>Se&&!S?`<div class='sf-ai-error'>${c}</div>`:f?J((S==null?void 0:S.solution)||l||c||""):(u==null?void 0:u.replace(/(university.?of.?ghana)|(all.?rights.?reserved)/gim,""))||"";return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:j9}),s.jsxs("div",{className:"sf-root",children:[s.jsxs("div",{className:"sf-pdf-pane",children:[s.jsxs("div",{className:"sf-pdf-topbar",children:[s.jsx("button",{className:"sf-icon-btn",onClick:()=>r(!1),title:"Close",children:s.jsx("i",{className:"fa fa-times"})}),s.jsx("img",{src:a,className:"sf-logo",alt:"logo"}),s.jsx("div",{className:"sf-pdf-topbar__actions",children:y||u?s.jsxs(s.Fragment,{children:[D&&s.jsxs("a",{href:ma+i,download:!0,target:"_blank",rel:"noopener noreferrer",className:"sf-pill-btn",children:[s.jsx(f8,{})," Download"]}),s.jsx("button",{className:"sf-pill-btn sf-pill-btn--accent",onClick:()=>m(!0),children:"✨Solutions"})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"sf-skeleton",style:{width:90,height:30,borderRadius:20}}),s.jsx("div",{className:"sf-skeleton",style:{width:100,height:30,borderRadius:20}})]})})]}),s.jsx("div",{className:"sf-pdf-body",children:s.jsx(v9,{url:`${ma}${e}&embedded=true`,setIframeLoaded:b})})]}),d&&s.jsxs("div",{className:"sf-drawer",children:[s.jsxs("div",{className:"sf-drawer__topbar",children:[s.jsx("button",{className:"sf-icon-btn",onClick:()=>{m(!1),N(null)},children:s.jsx("i",{className:"fa fa-arrow-left"})}),s.jsx("span",{className:"sf-drawer__title",children:S?s.jsx("span",{className:"sf-drawer__title-course",children:S.course||t}):"Solutions"}),s.jsx("div",{className:"sf-drawer__credits",children:s.jsxs(ht,{to:"/Payment",target:"_blank",rel:"noopener noreferrer",className:"sf-credits-pill",children:[s.jsx("i",{className:"fa fa-bolt sf-credits-pill__icon"}),s.jsx("strong",{children:o??"0"}),s.jsxs("span",{className:"sf-credits-pill__topup",children:[s.jsx(wc,{})," Top up"]})]})})]}),!oe&&s.jsx("div",{className:`sf-banner ${Se?"sf-banner--error":"sf-banner--success"}`,children:Se?"Extraction failed":"Extraction successful"}),s.jsxs("div",{className:"sf-drawer__body",children:[s.jsx("div",{className:`sf-sidebar ${k?"sf-sidebar--open":""}`,children:s.jsxs("div",{className:"sf-sidebar__inner",children:[s.jsx("div",{className:"sf-sidebar__art",children:s.jsx("img",{src:Oc,alt:""})}),s.jsxs("div",{className:"sf-search-wrap",children:[s.jsx("i",{className:"fa fa-search sf-search-wrap__icon"}),s.jsx("input",{type:"search",className:"sf-search",placeholder:"Search queries…",value:Ie,onChange:Oe}),Ae&&s.jsx("span",{className:"sf-search-wrap__spin sf-search-wrap__spin--anim"})]}),s.jsxs("div",{className:"sf-tabs",children:[s.jsxs("button",{className:`sf-tab ${z==="saved"?"sf-tab--active":""}`,onClick:()=>L("saved"),children:[s.jsx(A2,{})," Saved"]}),s.jsx("button",{className:`sf-tab ${z==="recent"?"sf-tab--active":""}`,onClick:()=>L("recent"),children:"Recent"})]}),s.jsx("div",{className:"sf-list",children:z==="saved"?T||Ae?[1,2,3].map(V=>s.jsx("div",{className:"sf-list-item",children:s.jsx(j0,{height:12,width:"70%"})},V)):Q?s.jsx("div",{className:"sf-list-empty sf-list-empty--error",children:Q}):((He=_==null?void 0:_.solutions)==null?void 0:He.length)>0?_.solutions.map((V,ce)=>s.jsxs("div",{className:`sf-list-item ${(S==null?void 0:S.id)===V.id?"sf-list-item--active":""}`,onClick:()=>{N(V),x(!0)},children:[s.jsx("span",{className:"sf-list-item__initial",children:(V.course||"?")[0].toUpperCase()}),s.jsxs("div",{className:"sf-list-item__info",children:[s.jsx("span",{className:"sf-list-item__label",children:V.course}),s.jsx("span",{className:"sf-list-item__meta",children:"Saved query"})]}),s.jsx("i",{className:"fa fa-chevron-right sf-list-item__arrow"})]},V.id??ce)):s.jsx("div",{className:"sf-list-empty",children:Ie.trim()?`No results for "${Ie.trim()}"`:"No saved queries yet"}):h.length>0?h.map((V,ce)=>s.jsxs("div",{className:`sf-list-item ${(S==null?void 0:S.course)===V.course?"sf-list-item--active sf-list-item--recent":""}`,onClick:()=>{N(V),x(!0)},children:[s.jsx("span",{className:"sf-list-item__initial sf-list-item__initial--recent",children:(V.course||"?")[0].toUpperCase()}),s.jsxs("div",{className:"sf-list-item__info",children:[s.jsx("span",{className:"sf-list-item__label",children:V.course}),s.jsx("span",{className:"sf-list-item__meta",children:"Recent"})]}),s.jsx("i",{className:"fa fa-chevron-right sf-list-item__arrow"})]},"r"+ce)):s.jsx("div",{className:"sf-list-empty",children:"No recent activity"})})]})}),s.jsxs("div",{className:"sf-content",children:[s.jsxs("div",{className:"sf-content__toolbar",children:[s.jsx("button",{className:"sf-icon-btn sf-sidebar-toggle",onClick:()=>j(V=>!V),title:"Toggle sidebar",children:s.jsx("i",{className:`fa fa-${k?"indent":"dedent"}`})}),!oe&&s.jsxs("div",{className:"sf-view-toggle",children:[s.jsxs("button",{className:`sf-view-toggle__btn ${f?"sf-view-toggle__btn--active":""}`,onClick:()=>x(!0),children:[s.jsx("i",{className:"fa fa-check-circle"})," Solved"]}),s.jsxs("button",{className:`sf-view-toggle__btn ${f?"":"sf-view-toggle__btn--active"}`,onClick:()=>x(!1),children:[s.jsx("i",{className:"fa fa-code"})," Raw"]})]}),s.jsxs("div",{className:"sf-content__toolbar-right",children:[S&&s.jsx("button",{className:"sf-pill-btn sf-pill-btn--active",onClick:()=>{N(null),x(!0)},title:"Back to current result",children:"Live result"}),!oe&&!Se&&s.jsxs("button",{className:"sf-pill-btn",onClick:()=>g(!0),children:[s.jsx("i",{className:"fa fa-bookmark"})," Save"]})]})]}),s.jsx("div",{className:"sf-content__body",children:oe?s.jsx("div",{className:"sf-content__loading",children:[90,75,85,60,80].map((V,ce)=>s.jsx(j0,{width:`${V}%`,height:13,style:{marginBottom:10}},ce))}):s.jsx("div",{className:"sf-prose",dangerouslySetInnerHTML:{__html:le()}})})]})]})]})]}),C&&s.jsx(k9,{selectedVal:n,courseName:t,setstoreme:g,extract:l})]})},j9=`
  .sf-root {
    position: fixed;
    inset: 0;
    display: flex;
    background: #0d0d0f;
    color: #e8e8e8;
    font-family: 'Segoe UI', system-ui, sans-serif;
    z-index: 1000;
    overflow: hidden;
  }

  /* ── PDF pane ── */
  .sf-pdf-pane {
    display: flex;
    flex-direction: column;
    flex: 1 1 0;
    min-width: 0;
    width: 0; /* prevents flex child from overflowing on mobile */
    border-right: 1px solid #1e1e24;
    box-sizing: border-box;
  }
  .sf-pdf-topbar {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    background: #111115;
    border-bottom: 1px solid #1e1e24;
    flex-shrink: 0;
  }
  .sf-pdf-topbar__actions { display: flex; align-items: center; gap: 8px; margin-left: auto; }
  .sf-logo { height: 28px; object-fit: contain; }
  .sf-pdf-body {
    flex: 1;
    overflow: hidden;
    position: relative;
    min-height: 0;
  }
  .sf-pdf-body > * {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }

  /* ── Drawer ── */
  .sf-drawer {
    width: 52vw;
    min-width: 340px;
    max-width: 780px;
    display: flex;
    flex-direction: column;
    background: #111115;
    border-left: 1px solid #1e1e24;
    overflow: hidden;
  }
  .sf-drawer__topbar {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: #0d0d0f;
    border-bottom: 1px solid #1e1e24;
    flex-shrink: 0;
  }
  .sf-drawer__title {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .02em;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #c8c8d0;
  }
  .sf-drawer__title-course { color: #7dd3fc; }
  .sf-drawer__credits { margin-left: auto; flex-shrink: 0; }
  .sf-credits-pill__icon { font-size: 11px; }
  .sf-credits-pill {
    display: flex;
    align-items: center;
    gap: 5px;
    background: #1e1e2a;
    border: 1px solid #2e2e3a;
    border-radius: 20px;
    padding: 4px 10px;
    font-size: 12px;
    color: #fbbf24;
    text-decoration: none;
    transition: background .15s;
  }
  .sf-credits-pill:hover { background: #25253a; }
  .sf-credits-pill__topup {
    color: #94a3b8;
    border-left: 1px solid #2e2e3a;
    padding-left: 8px;
    margin-left: 4px;
  }

  /* ── Banner ── */
  .sf-banner {
    padding: 6px 16px;
    font-size: 12px;
    font-weight: 500;
    flex-shrink: 0;
  }
  .sf-banner--success { background: #0d2b1e; color: #4ade80; border-bottom: 1px solid #14532d; }
  .sf-banner--error   { background: #2b0d0d; color: #f87171; border-bottom: 1px solid #7f1d1d; }

  /* ── Drawer body ── */
  .sf-drawer__body {
    flex: 1;
    display: flex;
    overflow: hidden;
  }

  /* ── Sidebar ── */
  .sf-sidebar {
    width: 0;
    overflow: hidden;
    transition: width .22s ease;
    background: #0d0d0f;
    border-right: 1px solid #1e1e24;
    flex-shrink: 0;
  }
  .sf-sidebar--open { width: 220px; }
  .sf-sidebar__inner {
    width: 220px;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .sf-sidebar__art {
    flex-shrink: 0;
    height: 80px;
    overflow: hidden;
    position: relative;
  }
  .sf-sidebar__art img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: .55;
  }
  .sf-sidebar__art::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 40%, #0d0d0f);
  }

  /* Search */
  .sf-search-wrap {
    position: relative;
    padding: 10px 10px 6px;
    flex-shrink: 0;
  }
  .sf-search-wrap__icon {
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translateY(-30%);
    font-size: 11px;
    color: #555;
    pointer-events: none;
  }
  .sf-search-wrap__spin--anim {
    width: 12px;
    height: 12px;
    border: 2px solid #2a2a38;
    border-top-color: #6366f1;
    border-radius: 50%;
    animation: sf-spin .7s linear infinite;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-30%);
    display: inline-block;
  }
  .sf-search-wrap__spin {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-30%);
    font-size: 11px;
  }
  .sf-search {
    width: 100%;
    background: #1a1a20;
    border: 1px solid #2a2a34;
    border-radius: 8px;
    padding: 6px 28px 6px 28px;
    font-size: 12px;
    color: #d0d0da;
    outline: none;
    box-sizing: border-box;
  }
  .sf-search:focus { border-color: #4f46e5; }

  /* Tabs */
  .sf-tabs {
    display: flex;
    padding: 0 10px;
    gap: 4px;
    flex-shrink: 0;
    border-bottom: 1px solid #1e1e24;
    margin-bottom: 4px;
  }
  .sf-tab {
    flex: 1;
    padding: 7px 4px;
    font-size: 11px;
    background: transparent;
    border: none;
    color: #666;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: color .15s, border-color .15s;
  }
  .sf-tab--active { color: #a5b4fc; border-bottom-color: #6366f1; }

  /* List */
  .sf-list {
    flex: 1;
    overflow-y: auto;
    padding: 4px 8px 8px;
  }
  .sf-list::-webkit-scrollbar { width: 4px; }
  .sf-list::-webkit-scrollbar-thumb { background: #2a2a36; border-radius: 4px; }
  .sf-list-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: background .12s, border-color .12s;
    margin-bottom: 3px;
    border: 1px solid transparent;
    position: relative;
  }
  .sf-list-item:hover { background: #16161e; border-color: #2a2a38; }
  .sf-list-item--active {
    background: #12122a !important;
    border-color: #4338ca !important;
  }
  .sf-list-item--recent.sf-list-item--active {
    background: #1a1408 !important;
    border-color: #92400e !important;
  }

  /* Coloured initial avatar */
  .sf-list-item__initial {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: linear-gradient(135deg, #3730a3, #6366f1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0;
  }
  .sf-list-item__initial--recent {
    background: linear-gradient(135deg, #92400e, #d97706);
  }
  .sf-list-item--active .sf-list-item__initial {
    box-shadow: 0 0 0 2px #6366f1;
  }
  .sf-list-item--recent.sf-list-item--active .sf-list-item__initial {
    box-shadow: 0 0 0 2px #d97706;
  }

  /* Text block */
  .sf-list-item__info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .sf-list-item__label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    font-weight: 500;
    color: #c0c0cc;
    line-height: 1.3;
  }
  .sf-list-item--active .sf-list-item__label { color: #a5b4fc; }
  .sf-list-item--recent.sf-list-item--active .sf-list-item__label { color: #fcd34d; }
  .sf-list-item__meta {
    font-size: 10px;
    color: #444;
    text-transform: uppercase;
    letter-spacing: .04em;
  }

  /* Chevron */
  .sf-list-item__arrow {
    flex-shrink: 0;
    font-size: 9px;
    color: #333;
    transition: color .12s, transform .12s;
  }
  .sf-list-item:hover .sf-list-item__arrow { color: #666; transform: translateX(1px); }
  .sf-list-item--active .sf-list-item__arrow { color: #6366f1; transform: translateX(2px); }

  .sf-list-empty {
    padding: 20px 12px;
    font-size: 12px;
    color: #383840;
    text-align: center;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }
  .sf-list-empty--error { color: #f87171; }

  /* ── Content area ── */
  .sf-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .sf-content__toolbar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-bottom: 1px solid #1e1e24;
    flex-shrink: 0;
    background: #0f0f13;
  }
  .sf-content__toolbar-right { display: flex; align-items: center; gap: 6px; margin-left: auto; }

  .sf-view-toggle {
    display: flex;
    background: #1a1a20;
    border-radius: 8px;
    padding: 2px;
    gap: 2px;
  }
  .sf-view-toggle__btn {
    padding: 4px 12px;
    border-radius: 6px;
    border: none;
    background: transparent;
    color: #666;
    font-size: 12px;
    cursor: pointer;
    transition: background .12s, color .12s;
  }
  .sf-view-toggle__btn--active { background: #2a2a38; color: #a5b4fc; }

  .sf-content__body {
    flex: 1;
    overflow-y: auto;
    padding: 20px 24px;
  }
  .sf-content__body::-webkit-scrollbar { width: 5px; }
  .sf-content__body::-webkit-scrollbar-thumb { background: #2a2a36; border-radius: 4px; }

  .sf-content__loading { display: flex; flex-direction: column; padding-top: 8px; }

  /* Prose styles */
  .sf-prose { font-size: 14px; line-height: 1.75; color: #ccd0da; }
  .sf-prose h1,.sf-prose h2,.sf-prose h3 { color: #e8e8f0; margin: 1.2em 0 .4em; font-weight: 600; }
  .sf-prose h3 { font-size: 15px; color: #a5b4fc; }
  .sf-prose p { margin: 0 0 .9em; }
  .sf-prose code {
    background: #1e1e2a;
    border: 1px solid #2a2a38;
    border-radius: 4px;
    padding: 1px 5px;
    font-size: 12px;
    color: #7dd3fc;
  }
  .sf-prose pre {
    background: #141418;
    border: 1px solid #1e1e28;
    border-radius: 8px;
    padding: 14px;
    overflow-x: auto;
    margin: 1em 0;
  }
  .sf-prose pre code { background: transparent; border: none; padding: 0; color: #c8d3f0; }
  .sf-prose ul,.sf-prose ol { padding-left: 1.4em; margin: .6em 0; }
  .sf-prose li { margin-bottom: .3em; }
  .sf-prose strong { color: #e2e8f0; }
  .sf-prose a { color: #7dd3fc; text-decoration: none; }
  .sf-prose a:hover { text-decoration: underline; }
  .sf-ai-error {
    background: #2b0d0d;
    border: 1px solid #7f1d1d;
    border-radius: 8px;
    padding: 16px;
    color: #f87171;
    font-size: 13px;
  }

  /* ── Buttons ── */
  .sf-icon-btn {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid #1e1e28;
    background: #1a1a20;
    color: #aaa;
    cursor: pointer;
    transition: background .12s, color .12s;
    flex-shrink: 0;
  }
  .sf-icon-btn:hover { background: #22222e; color: #e0e0e8; }

  .sf-pill-btn {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 12px;
    border-radius: 20px;
    border: 1px solid #2a2a38;
    background: #1a1a22;
    color: #a0a0b8;
    font-size: 12px;
    cursor: pointer;
    text-decoration: none;
    transition: background .12s, color .12s;
    white-space: nowrap;
  }
  .sf-pill-btn:hover { background: #22222e; color: #e0e0e8; }
  .sf-pill-btn--accent { background: #1e1b4b; border-color: #4338ca; color: #a5b4fc; }
  .sf-pill-btn--accent:hover { background: #25224f; }
  .sf-pill-btn--active { background: #1c2a14; border-color: #4d7c0f; color: #a3e635; }

  .sf-sidebar-toggle { flex-shrink: 0; }

  /* ── Skeleton ── */
  .sf-skeleton {
    background: linear-gradient(90deg, #1a1a22 25%, #22222e 50%, #1a1a22 75%);
    background-size: 200% 100%;
    animation: sf-shimmer 1.4s infinite;
    display: block;
  }
  @keyframes sf-shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  /* ── Toast ── */
  .sf-toast {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    border-radius: 10px;
    font-size: 13px;
    z-index: 9999;
    animation: sf-fadein .2s ease;
    box-shadow: 0 4px 20px rgba(0,0,0,.5);
  }
  .sf-toast--error   { background: #2b0d0d; border: 1px solid #7f1d1d; color: #f87171; }
  .sf-toast__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .sf-toast__dot--error   { background: #f87171; }
  .sf-toast__dot--success { background: #4ade80; }
  .sf-toast--success { background: #0d2b1e; border: 1px solid #14532d; color: #4ade80; }
  @keyframes sf-fadein { from { opacity:0; transform: translateX(-50%) translateY(8px); } to { opacity:1; transform: translateX(-50%) translateY(0); } }

  /* ── Save modal ── */
  .sf-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    backdrop-filter: blur(4px);
  }
  .sf-modal {
    width: 420px;
    max-width: 94vw;
    background: #111115;
    border: 1px solid #1e1e28;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 24px 60px rgba(0,0,0,.6);
    animation: sf-fadein .2s ease;
  }
  .sf-modal__close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(0,0,0,.4);
    border: none;
    color: #aaa;
    font-size: 16px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sf-modal__close:hover { color: #fff; }
  .sf-modal__art { height: 140px; overflow: hidden; position: relative; }
  .sf-modal__art img { width: 100%; height: 100%; object-fit: cover; opacity: .6; }
  .sf-modal__art-fade {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 30%, #111115);
  }
  .sf-modal__body { padding: 20px 22px 24px; }
  .sf-modal__title { margin: 0 0 14px; font-size: 16px; font-weight: 700; color: #e8e8f0; }
  .sf-modal__notice {
    display: flex;
    gap: 10px;
    background: #1c1a0e;
    border: 1px solid #3d3200;
    border-radius: 8px;
    padding: 10px 12px;
    margin-bottom: 16px;
    font-size: 12px;
    color: #d4b84a;
    line-height: 1.5;
  }
  .sf-modal__notice-icon { font-size: 14px; flex-shrink: 0; color: #d97706; margin-top: 1px; }
  .sf-modal__notice strong { color: #fbbf24; }
  .sf-modal__field { margin-bottom: 16px; }
  .sf-modal__field label { display: block; font-size: 11px; color: #666; margin-bottom: 6px; text-transform: uppercase; letter-spacing: .05em; }
  .sf-modal__confirm-phrase {
    display: inline-block;
    background: #1a1a22;
    border: 1px dashed #3a3a48;
    border-radius: 6px;
    padding: 4px 10px;
    font-size: 12px;
    color: #a5b4fc;
    margin-bottom: 8px;
    font-style: italic;
  }
  .sf-modal__field input {
    width: 100%;
    background: #1a1a22;
    border: 1px solid #2a2a38;
    border-radius: 8px;
    padding: 9px 12px;
    font-size: 13px;
    color: #d0d0da;
    outline: none;
    box-sizing: border-box;
    transition: border-color .15s;
  }
  .sf-modal__field input:focus { border-color: #6366f1; }
  .sf-modal__input--invalid { border-color: #f87171 !important; }
  .sf-modal__save-btn {
    width: 100%;
    padding: 11px;
    background: #4f46e5;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background .15s, opacity .15s;
  }
  .sf-modal__save-btn:hover:not(:disabled) { background: #4338ca; }
  .sf-modal__save-btn:disabled { opacity: .55; cursor: not-allowed; }
  .sf-modal__spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255,255,255,.25);
    border-top-color: #fff;
    border-radius: 50%;
    animation: sf-spin .6s linear infinite;
    display: inline-block;
  }
  @keyframes sf-spin { to { transform: rotate(360deg); } }

  /* ── Responsive ── */
  @media (max-width: 700px) {
    /* PDF pane fills the whole screen normally */
    .sf-root { flex-direction: column; }
    .sf-pdf-pane {
      flex: 1;
      width: 100vw !important;
      min-width: 0 !important;
      border-right: none;
    }

    /* Drawer slides up as a full-screen fixed overlay — never competes with PDF pane */
    .sf-drawer {
      position: fixed;
      inset: 0;
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;
      border-left: none;
      z-index: 1100;
      animation: sf-slide-up .22s ease;
    }

    /* Sidebar narrows slightly on small screens */
    .sf-sidebar--open { width: 180px; }

    /* Tighten topbar on small screens */
    .sf-drawer__topbar { padding: 10px 12px; }

    /* Hide the Top up label to save space — icon + credits number is enough */
    .sf-credits-pill__topup { display: none; }
  }

  @keyframes sf-slide-up {
    from { transform: translateY(100%); opacity: 0; }
    to   { transform: translateY(0);    opacity: 1; }
  }
`,S9="/imgs/pdf.png",N9="/imgs/racoon_job.jpg",E9="/imgs/coin.png";function _9({onSuccess:e,onClose:t}){const[n,r]=p.useState(""),[a,i]=p.useState(["","","","","",""]),[o,l]=p.useState("phone"),[c,u]=p.useState(!1),[d,m]=p.useState({text:"",type:""}),[h,w]=p.useState(0),[y,b]=p.useState(!1),C=p.useRef([]),g=()=>{try{return JSON.parse(localStorage.getItem("userInfo")||"{}").accessToken||""}catch{return""}},f=(R,T="error")=>{m({text:R,type:T}),setTimeout(()=>m({text:"",type:""}),5e3)},x=()=>{w(15);const R=setInterval(()=>{w(T=>T<=1?(clearInterval(R),0):T-1)},1e3)},k=async()=>{if(n.trim().length<10){f("Enter a valid phone number");return}u(!0);try{(await fetch(de+"/api/v1/send/sms/otp",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${g()}`},body:JSON.stringify({msisdn:n})})).status===200?(f("OTP sent successfully!","success"),l("otp"),x(),b(!0)):f("Failed to send OTP, please try again")}catch{f("Network error, please retry")}finally{u(!1)}},j=async()=>{const R=a.join("");if(R.length!==6){f("Enter the complete 6-digit OTP");return}u(!0);try{const T=await fetch(de+"/api/v1/verification",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${g()}`},body:JSON.stringify({path:"msisdn",otp:R})});if(T.status===200)f("Phone verified successfully!","success"),setTimeout(()=>e&&e(),1200);else{const A=await T.json().catch(()=>({}));f((A==null?void 0:A.message)||"Verification failed, please retry")}}catch{f("Verification failed, please retry")}finally{u(!1)}},S=(R,T)=>{var ge;const A=R.replace(/\D/,"").slice(-1),Q=[...a];Q[T]=A,i(Q),A&&T<5&&((ge=C.current[T+1])==null||ge.focus())},N=(R,T)=>{var A;R.key==="Backspace"&&!a[T]&&T>0&&((A=C.current[T-1])==null||A.focus())},_=R=>{var A;const T=R.clipboardData.getData("text").replace(/\D/g,"").slice(0,6);T.length===6&&(i(T.split("")),(A=C.current[5])==null||A.focus())};return s.jsxs("div",{style:K.overlay,children:[s.jsxs("div",{style:K.card,children:[s.jsxs("div",{style:K.header,children:[s.jsx("div",{style:K.iconRing,children:s.jsx(dl,{style:{fontSize:22,color:"#fff"}})}),s.jsx("h2",{style:K.title,children:"Verify Phone Number"}),s.jsx("p",{style:K.subtitle,children:o==="phone"?"Enter your phone number to receive an OTP":`OTP sent to ${n}`}),t&&s.jsx("button",{class:"closeme",onClick:t,"aria-label":"Close",children:s.jsx("i",{className:"fa fa-close"})})]}),d.text&&s.jsxs("div",{style:{...K.banner,...d.type==="success"?K.bannerSuccess:K.bannerError},children:[d.type==="success"?"✅ ":"🔴 ",d.text]}),s.jsxs("div",{style:K.body,children:[o==="phone"&&s.jsxs(s.Fragment,{children:[s.jsx("label",{style:K.label,children:"Phone Number"}),s.jsxs("div",{style:K.inputWrap,children:[s.jsx(dl,{style:K.inputIcon}),s.jsx("input",{style:K.input,type:"tel",placeholder:"+233 XX XXX XXXX",value:n,onChange:R=>r(R.target.value),onKeyDown:R=>R.key==="Enter"&&k()})]}),s.jsx("button",{style:{...K.primaryBtn,opacity:c?.7:1},onClick:k,disabled:c,children:c?s.jsxs("span",{style:K.dots,children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{})]}):s.jsxs(s.Fragment,{children:[s.jsx(I2,{style:{marginRight:8}}),"Send OTP"]})})]}),o==="otp"&&s.jsxs(s.Fragment,{children:[s.jsx("label",{style:K.label,children:"Enter 6-digit code"}),s.jsx("div",{style:K.otpRow,onPaste:_,children:a.map((R,T)=>s.jsx("input",{ref:A=>C.current[T]=A,style:{...K.otpBox,borderColor:R?"#1a1a2e":"#d1d5db",background:R?"#f0f4ff":"#fff"},type:"text",inputMode:"numeric",maxLength:1,value:R,onChange:A=>S(A.target.value,T),onKeyDown:A=>N(A,T)},T))}),s.jsxs("div",{style:K.resendRow,children:[s.jsx(bc,{style:{color:"#6b7280",marginRight:6}}),h>0?s.jsxs("span",{style:K.counterText,children:["Resend in ",h,"s"]}):s.jsx("button",{style:K.resendBtn,onClick:()=>{k()},disabled:c,children:"Resend OTP"})]}),s.jsx("button",{style:{...K.primaryBtn,opacity:c?.7:1},onClick:j,disabled:c,children:c?s.jsxs("span",{style:K.dots,children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{})]}):s.jsxs(s.Fragment,{children:[s.jsx(yc,{style:{marginRight:8}}),"Verify & Confirm"]})}),s.jsx("button",{style:K.backBtn,onClick:()=>l("phone"),children:"← Change number"}),y&&s.jsxs("div",{style:K.skipWrap,children:[s.jsx(Dr,{style:{color:"#9ca3af",marginRight:6}}),s.jsx("span",{style:K.skipNote,children:"Didn't receive OTP?"}),s.jsx("button",{style:K.skipBtn,onClick:()=>t&&t(),children:"Skip for now →"})]})]})]})]}),s.jsx("style",{children:`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
      `})]})}const K={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:"16px"},card:{background:"#fff",borderRadius:"20px",width:"100%",maxWidth:"420px",boxShadow:"0 24px 60px rgba(0,0,0,0.18)",overflow:"hidden",fontFamily:"'Segoe UI', sans-serif",position:"relative"},header:{background:"linear-gradient(135deg, #332639 0%, #16213e 100%)",padding:"32px 28px 24px",textAlign:"center",position:"relative"},iconRing:{width:52,height:52,borderRadius:"50%",background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px",border:"2px solid rgba(255,255,255,0.25)"},title:{margin:0,color:"#fff",fontSize:"20px",fontWeight:700,letterSpacing:"-0.3px"},subtitle:{margin:"6px 0 0",color:"rgba(255,255,255,0.6)",fontSize:"13px"},closeBtn:{position:"absolute",top:14,right:16,background:"none",border:"none",color:"rgba(255,255,255,0.6)",fontSize:"22px",cursor:"pointer",lineHeight:1,padding:"2px 6px"},banner:{padding:"10px 20px",fontSize:"13px",fontWeight:500,textAlign:"center"},bannerSuccess:{background:"#f0fdf4",color:"#15803d",borderBottom:"1px solid #bbf7d0"},bannerError:{background:"#fff1f2",color:"#be123c",borderBottom:"1px solid #fecdd3"},body:{padding:"28px"},label:{display:"block",fontSize:"12px",fontWeight:600,color:"#374151",letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:"10px"},inputWrap:{display:"flex",alignItems:"center",border:"1.5px solid #e5e7eb",borderRadius:"10px",padding:"0 14px",marginBottom:"20px",transition:"border-color 0.2s"},inputIcon:{color:"#9ca3af",fontSize:"16px",marginRight:"10px",flexShrink:0},input:{flex:1,border:"none",outline:"none",fontSize:"15px",padding:"13px 0",background:"transparent",color:"#111827"},otpRow:{display:"flex",gap:"8px",justifyContent:"center",marginBottom:"20px"},otpBox:{width:"46px",height:"54px",textAlign:"center",fontSize:"22px",fontWeight:700,border:"2px solid #d1d5db",borderRadius:"10px",outline:"none",transition:"all 0.15s",color:"#1a1a2e",caretColor:"transparent"},resendRow:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},counterText:{fontSize:"13px",color:"#6b7280"},resendBtn:{background:"none",border:"none",color:"#1a1a2e",fontSize:"13px",fontWeight:600,cursor:"pointer",textDecoration:"underline",padding:0},primaryBtn:{width:"100%",padding:"14px",background:"linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",color:"#fff",border:"none",borderRadius:"10px",fontSize:"15px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",letterSpacing:"0.02em",transition:"opacity 0.2s"},backBtn:{width:"100%",marginTop:"10px",padding:"10px",background:"none",border:"1.5px solid #e5e7eb",borderRadius:"10px",fontSize:"13px",color:"#6b7280",cursor:"pointer",fontWeight:500},skipWrap:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"16px",flexWrap:"wrap",gap:"4px"},skipNote:{fontSize:"12px",color:"#9ca3af"},skipBtn:{background:"none",border:"none",color:"#1a1a2e",fontSize:"12px",fontWeight:600,cursor:"pointer",padding:0},dots:{display:"flex",gap:"4px",alignItems:"center","& span":{width:6,height:6,borderRadius:"50%",background:"#fff",animation:"bounce 1.2s infinite"}}};const z9=()=>{var b,C;const[e,t]=p.useState(null),[n,r]=p.useState(0),[a,i]=p.useState(null),[o,l]=p.useState(null),[c,u]=p.useState(!1),[d,m]=p.useState(!1),h=de+"/api/v1/user/streak",w=de+"/api/v1/user/wallet";p.useEffect(()=>{const g=Vi("userInfo",{});l(g),t((g==null?void 0:g.streakScore)??0),r((g==null?void 0:g.highestStreakScore)??0);const f=g==null?void 0:g.accessToken,x=g==null?void 0:g.refreshToken;!f||!x||(st(h,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${f}`}},x).then(k=>{const j=(k==null?void 0:k.streakScore)??0,S=(k==null?void 0:k.highestStreakScore)??0;t(j),r(S);const N={...g,streakScore:j,highestStreakScore:S,lastActiveDate:(k==null?void 0:k.lastActiveDate)??g.lastActiveDate};il("userInfo",N),l(N)}).catch(k=>{console.error("Streak update failed:",k)}),st(w,{headers:{Authorization:`Bearer ${f}`}}).then(k=>i((k==null?void 0:k.balance)??null)).catch(k=>{console.error("Error fetching wallet:",k),i(null)}))},[]);const y=[(b=o==null?void 0:o.firstName)==null?void 0:b[0],(C=o==null?void 0:o.lastName)==null?void 0:C[0]].filter(Boolean).join("").toUpperCase();return s.jsxs("div",{className:"db-card",children:[d&&s.jsx(_9,{onSuccess:()=>{m(!1);const g={...Vi("userInfo",{}),isVerified:!0};il("userInfo",g),l(g)},onClose:()=>m(!1)}),s.jsx("div",{className:"db-dotgrid","aria-hidden":"true"}),s.jsx("div",{className:"db-glow","aria-hidden":"true"}),s.jsxs("button",{type:"button",className:"db-trigger",onClick:()=>u(g=>!g),children:[s.jsx("span",{className:"db-avatar",children:y||s.jsx("i",{className:"fa fa-user"})}),s.jsx("span",{className:"db-trigger-text",children:c?"Back to overview":"Wallet & streak"}),s.jsx("i",{className:`fa fa-chevron-${c?"left":"right"} db-trigger-chevron`,"aria-hidden":"true"})]}),c?s.jsxs("div",{className:"db-profile db-fade-in-up",children:[s.jsxs("div",{className:"db-panel",children:[s.jsxs("div",{className:"db-panel-title",children:[s.jsx("span",{className:"db-icon-chip",children:s.jsx("i",{className:"fa fa-plus"})}),"Extras"]}),s.jsxs("div",{className:"db-field",children:[s.jsx("span",{className:"db-field-icon",children:s.jsx("i",{className:"fa fa-check"})}),s.jsxs("div",{className:"db-field-body",children:[s.jsx("span",{className:"db-field-label",children:"User status"}),s.jsxs("div",{className:"db-status-row",children:[o!=null&&o.isVerified?s.jsx("span",{className:"db-status db-status-success",children:"OTP Verified"}):s.jsx("span",{className:"db-status db-status-danger",children:"Not verified"}),!(o!=null&&o.isVerified)&&s.jsx("button",{type:"button",className:"db-verify-btn",onClick:()=>m(!0),children:"Verify"})]})]})]}),s.jsxs("div",{className:"db-field",children:[s.jsx("span",{className:"db-field-icon",children:s.jsx("i",{className:"fa fa-calendar-check"})}),s.jsxs("div",{className:"db-field-body",children:[s.jsx("span",{className:"db-field-label",children:"Last active"}),s.jsx("span",{className:"db-field-value",children:o!=null&&o.lastActiveDate?new Date(o.lastActiveDate).toLocaleDateString():"N/A"})]})]}),s.jsxs("div",{className:"db-field",children:[s.jsx("span",{className:"db-field-icon",children:s.jsx("i",{className:"fa fa-calendar"})}),s.jsxs("div",{className:"db-field-body",children:[s.jsx("span",{className:"db-field-label",children:"Date created"}),s.jsx("span",{className:"db-field-value",children:o!=null&&o.dateCreated?new Date(o.dateCreated).toLocaleDateString():"N/A"})]})]})]}),s.jsxs("div",{className:"db-panel",children:[s.jsxs("div",{className:"db-panel-title",children:[s.jsx("span",{className:"db-icon-chip",children:s.jsx("i",{className:"fa fa-user"})}),"Profile details"]}),s.jsxs("div",{className:"db-grid-2",children:[s.jsxs("div",{className:"db-field",children:[s.jsx("span",{className:"db-field-icon",children:s.jsx("i",{className:"fa fa-person"})}),s.jsxs("div",{className:"db-field-body",children:[s.jsx("span",{className:"db-field-label",children:"First name"}),s.jsx("span",{className:"db-field-value",children:(o==null?void 0:o.firstName)??""})]})]}),s.jsxs("div",{className:"db-field",children:[s.jsx("span",{className:"db-field-icon",children:s.jsx("i",{className:"fa fa-person"})}),s.jsxs("div",{className:"db-field-body",children:[s.jsx("span",{className:"db-field-label",children:"Last name"}),s.jsx("span",{className:"db-field-value",children:(o==null?void 0:o.lastName)??""})]})]})]}),s.jsxs("div",{className:"db-field db-field-wide",children:[s.jsx("span",{className:"db-field-icon",children:s.jsx("i",{className:"fa fa-envelope"})}),s.jsxs("div",{className:"db-field-body",children:[s.jsx("span",{className:"db-field-label",children:"Email"}),s.jsx("span",{className:"db-field-value",children:(o==null?void 0:o.email)??""})]})]}),s.jsxs("div",{className:"db-panel-title db-panel-title-sub",children:[s.jsx("span",{className:"db-icon-chip",children:s.jsx("i",{className:"fa fa-zap"})}),"User credits"]}),s.jsxs("div",{className:"db-field db-field-wide",children:[s.jsx("span",{className:"db-field-icon",children:s.jsx("i",{className:"fa fa-zap"})}),s.jsxs("div",{className:"db-field-body",children:[s.jsx("span",{className:"db-field-label",children:"Remaining credits"}),s.jsx("span",{className:"db-field-value",children:(o==null?void 0:o.credits)??0})]})]}),s.jsxs("div",{className:"db-panel-title db-panel-title-sub",children:[s.jsx("span",{className:"db-icon-chip",children:s.jsx("i",{className:"fa fa-phone"})}),"Phone"]}),s.jsxs("div",{className:"db-field db-field-wide",children:[s.jsx("span",{className:"db-field-icon",children:s.jsx("i",{className:"fa fa-phone"})}),s.jsxs("div",{className:"db-field-body",children:[s.jsx("span",{className:"db-field-label",children:"Contact number"}),s.jsx("span",{className:"db-field-value",children:(o==null?void 0:o.msisdn)??""})]})]})]})]},"profile"):s.jsxs("div",{className:"db-overview db-fade-in-up",children:[s.jsxs("div",{className:"db-level-row",children:[s.jsxs("div",{className:"db-level-col",children:[s.jsx("span",{className:"db-eyebrow",children:"Level"}),s.jsx("span",{className:"db-level-name",children:"Rookie level"})]}),s.jsxs("div",{className:"db-level-col db-level-col-end",children:[s.jsx("span",{className:"db-eyebrow",children:"Badge"}),s.jsx("span",{className:"db-badge",children:"🥈"})]})]}),s.jsxs("div",{className:"db-streak-card",children:[s.jsx("div",{className:"db-streak-title",children:"⚡ Streak"}),s.jsxs("div",{className:"db-streak-stats",children:[s.jsxs("div",{className:"db-stat",children:[s.jsx("span",{className:"db-stat-label",children:"Streak score"}),s.jsx("span",{className:"db-stat-value",children:e??0})]}),s.jsx("div",{className:"db-stat-divider"}),s.jsxs("div",{className:"db-stat",children:[s.jsx("span",{className:"db-stat-label",children:"Highest streak"}),s.jsx("span",{className:"db-stat-value",children:n??0})]})]}),s.jsx("div",{className:"db-stars","aria-hidden":"true",children:"⭐".repeat(10)})]}),s.jsxs("div",{className:"db-wallet-card",children:[s.jsx("img",{src:E9,className:"db-wallet-backdrop",alt:"","aria-hidden":"true"}),s.jsxs("div",{className:"db-wallet-label",children:[s.jsx("span",{className:"db-icon-chip db-icon-chip-light",children:"💰"}),"Earned"]}),s.jsxs("div",{className:"db-wallet-value",children:["GHS ",a??"—"]})]})]},"overview")]})},T9="/assets/coinstacked-c9cb3f73.png",P9="/assets/racoon_earn-40e17a16.jpg",O9=()=>(p.useEffect(()=>{location.href="#earn"},[]),s.jsx("div",{className:"userlevel",children:s.jsxs("div",{className:"sectionearn",children:[s.jsxs("div",{className:"levelitem2 earnbox",id:"earn",style:{height:350},children:[s.jsx("img",{src:T9,className:"coinstack",alt:"",srcSet:""}),s.jsx("div",{className:"streak",children:"Earn"}),s.jsx("a",{href:"#begin",children:s.jsxs("div",{className:"seemore",children:[s.jsx("div",{className:"begin",children:"Begin"}),s.jsx(k8,{})]})}),s.jsx("img",{src:P9,className:"racoon"}),s.jsxs("div",{className:"wish",children:[s.jsx("span",{style:{fontWeight:600},children:" What is this about?"})," ( ",s.jsx("div",{className:"fnav",children:"💸"}),"GHS 1,500+ Salary )"]}),s.jsx("div",{className:"tovid",children:"Watch this short video for a precise walk through?"}),s.jsx("div",{className:"watch",children:s.jsxs("div",{className:"sp",children:[s.jsx("div",{className:"fnav",children:s.jsx("i",{className:"fa fa-play"})})," Watch me 👀",s.jsx("div",{className:"prem2"})]})})]}),s.jsxs("div",{className:"levelitem2 earnbox",id:"begin",children:[s.jsx("a",{href:"#earn",children:s.jsxs("div",{className:"seeless",children:[s.jsx("div",{className:"begin",children:"Return"}),s.jsx(ga,{})]})}),"Earn"]})]})})),R9="/assets/leader-e36dfd31.png",L9="/assets/racoon_leaderboard-68d566af.jpg",$9="/assets/racoon_goldmedal-e058bdc6.jpg";const M9=()=>{const[e,t]=p.useState(0);return s.jsxs("div",{className:"lb-card",children:[s.jsx("div",{className:"lb-dotgrid","aria-hidden":"true"}),s.jsx("div",{className:"lb-glow","aria-hidden":"true"}),s.jsxs("div",{className:"lb-banner",children:[s.jsx("img",{src:L9,className:"lb-banner-img",alt:""}),s.jsx("div",{className:"lb-banner-overlay","aria-hidden":"true"}),s.jsx("img",{src:R9,className:"lb-badge",alt:""}),s.jsx("div",{className:"lb-title",children:"🏁 Leaderboard"})]}),s.jsxs("div",{className:"lb-position",children:["You came"," ",s.jsxs("span",{className:"lb-position-value",children:[e||"—",s.jsx("sup",{children:e?e>3?"th":e>2?"rd":e>1?"nd":"st":""})]})]}),s.jsx("div",{className:"lb-list",children:Array(10).fill("").map((n,r)=>{const a=r+1,i=a<=3;return s.jsxs("div",{className:`lb-row${i?` lb-row-top lb-row-top-${a}`:""}`,children:[s.jsx("div",{className:"lb-row-rank",children:a===1?s.jsx("img",{src:$9,className:"lb-row-medal",alt:"1st place"}):s.jsx("span",{className:"lb-row-rank-number",children:a})}),s.jsxs("div",{className:"lb-row-body",children:[s.jsx("div",{className:"lb-row-name",children:"Benjamin"}),s.jsx("div",{className:"lb-row-date",children:new Date().toISOString().slice(0,10)})]}),s.jsxs("div",{className:"lb-row-end",children:[s.jsx("span",{className:"lb-icon-chip",children:s.jsx(pl,{})}),s.jsx("span",{className:"lb-rank-chip",children:a})]})]},""+r)})})]})},I9="/assets/bob-b701607b.jpg",A9="/assets/jessy-e52b4d9f.jpg",X2="/assets/brown-7e264c9e.jpg",K2="/assets/guylogs-3acc9d52.png",D9="/assets/reff-0ef4e2a9.png",H9=[I9,A9,K2,X2],V9=()=>{const[e,t]=p.useState(!0),[n,r]=p.useState(""),[a,i]=p.useState([]);p.useState(0);const[o,l]=p.useState(!1),[c,u]=p.useState(!1),[d,m]=p.useState("");let h;try{h=JSON.parse(localStorage.getItem("userInfo"))}catch(j){console.error("Error parsing userInfo:",j),h=null}let w=h==null?void 0:h.userReferalCode;p.useEffect(()=>{w&&r(`${w}`)},[]);const y=()=>{if(!navigator.clipboard){b("Clipboard API not supported");return}navigator.clipboard.writeText(n).then(()=>{m("copied successfully !!!"),setTimeout(()=>{m("")},3e3),t(!1),setTimeout(()=>{t(!0)},1e3)}).catch(j=>{console.error("Copy failed:",j),b("Failed to copy to clipboard")})},b=j=>{m(j),u(!0),setTimeout(()=>{u(!1)},6e3)};p.useEffect(()=>{if(c){const j=document.querySelector(".successmessage");j&&(/success/gim.test(d)?j.textContent="🟢"+d+"🥳🥳🥳":j.textContent="🔴"+d)}},[d,c]);let C;try{C=JSON.parse(localStorage.getItem("userInfo"))}catch(j){console.error("Error parsing userInfo:",j),C=null}let g=de+"/api/v1/user/referals",f=C==null?void 0:C.accessToken,x=C==null?void 0:C.refreshToken;const k={headers:{Authorization:`Bearer ${f}`}};return p.useEffect(()=>{f&&x?st(g,k).then(j=>{Array.isArray(j)?i(j):(console.warn("Unexpected data format:",j),i([])),l(!0)}).catch(j=>{console.error("Fetch error:",j),b(`${j}`.toLowerCase().replace(/typeerror/gim,"Sorry")),l(!0)}):l(!0)},[g,f,x]),s.jsxs("div",{className:"rlevel",children:[s.jsx("img",{src:D9,className:"refbadge",alt:""}),c&&s.jsx("div",{className:"successmessage",style:{position:"absolute",display:"flex",margin:"auto"}}),s.jsxs("div",{className:"levelitem2 reffirstboxtop",children:[s.jsxs("div",{className:"refpage",style:{fontSize:40,width:200},children:[s.jsx("div",{className:"iconb",children:s.jsx("i",{style:{fontSize:20},className:"fa fa-users fa-dark"})}),"Referals"]}),s.jsxs("div",{className:"refer",children:[s.jsxs("div",{className:"hint",children:[s.jsx("div",{className:"fnav",children:s.jsx("i",{className:"fa fa-code fa-dark"})}),"Referal Code"]}),s.jsx("input",{value:n.length?n:"***",type:"text",readOnly:!0,className:"ref"}),s.jsxs("div",{className:"copy",onClick:y,children:[s.jsx("div",{className:"fnav",children:s.jsx("i",{className:"fa fa-copy fa-dark"})}),e?" Copy":"Copied !",s.jsx("div",{className:"prem4"})]})]}),s.jsx("div",{className:"streak"})]}),s.jsxs("div",{className:"yourrefs",children:[s.jsx("div",{className:"fnav",children:s.jsx("i",{className:"fa fa-users fa-dark"})}),"You have (",((a==null?void 0:a.length)??0)>0?a.length:0,") referals"]}),s.jsxs("div",{className:"reflist",children:[((a==null?void 0:a.length)??0)>0?a.map((j,S)=>{var N,_,R,T;return s.jsxs("div",{className:"refblock",children:[s.jsx("div",{className:"refblockleft",style:{backgroundImage:(N=j.referedUserDetails)!=null&&N.highestStreakScore?`url(${H9[`${j.referedUserDetails.highestStreakScore}`.length<4?`${j.referedUserDetails.highestStreakScore}`.length-1:3]})`:""}}),s.jsxs("div",{className:"refblockcenter",children:[s.jsx("div",{className:"refblockcenterdivone",children:((_=j.referedUserDetails)==null?void 0:_.firstName)??"User"}),s.jsxs("div",{className:"refblockcenterdiv",children:[" ",(R=j.referedUserDetails)!=null&&R.dateCreated?new Date(j.referedUserDetails.dateCreated).toISOString().slice(0,10):"N/A"]})]}),s.jsxs("div",{className:"refblockend",children:[s.jsx(pl,{className:"micon"}),((T=j.referedUserDetails)==null?void 0:T.highestStreakScore)??0]})]},""+S)}):!o&&Array(3).fill("").map((j,S)=>s.jsxs("div",{className:"refblock refloader",children:[s.jsx("div",{style:{visibility:"hidden"},className:"refblockleft "}),s.jsxs("div",{style:{visibility:"hidden"},className:"refblockcenter",children:[s.jsx("div",{style:{visibility:"hidden"},className:"refblockcenterdivone",children:"Benjamin"}),s.jsxs("div",{style:{visibility:"hidden"},className:"refblockcenterdiv",children:[" ",new Date().toISOString().slice(0,10)]})]}),s.jsxs("div",{style:{visibility:"hidden"},className:"refblockend",children:[s.jsx(pl,{className:"micon"}),"Loading..."]})]},j+""+S)),s.jsx("div",{className:"streak",style:{margin:10}})]})]})},F9=()=>{const[e,t]=p.useState("options"),[n,r]=p.useState(""),[a,i]=p.useState(""),[o,l]=p.useState(null),c=[{id:1,title:"Teaching Service",icon:"🎓",description:"Teach in secondary schools across the country",requirements:"Degree in any field, passion for education",benefits:["Monthly allowance","Housing stipend","Teaching certificate","Priority for education roles"],locations:["All regions","Rural areas especially needed"],duration:"12 months",popularity:85,matchScore:92},{id:2,title:"Healthcare Service",icon:s.jsx(X5,{className:"icon"}),description:"Support healthcare delivery in hospitals and clinics",requirements:"Medical, Nursing, or Allied Health degrees",benefits:["Clinical experience","Professional network","Health insurance","Skills certificate"],locations:["District hospitals","Community clinics"],duration:"12 months",popularity:78,matchScore:45},{id:3,title:"Agricultural Service",icon:s.jsx(xm,{className:"icon"}),description:"Support agricultural extension and food security",requirements:"Agriculture, Biology, or related degrees",benefits:["Farming resources","Training programs","Rural allowance","Entrepreneurship support"],locations:["Rural communities","Agricultural zones"],duration:"12 months",popularity:65,matchScore:30},{id:4,title:"Administrative Service",icon:s.jsx(rh,{className:"icon"}),description:"Work in government agencies and district assemblies",requirements:"Any degree, good organizational skills",benefits:["Office experience","Government connections","Career development","Mentorship"],locations:["Urban centers","District capitals"],duration:"12 months",popularity:90,matchScore:88}],u=["Greater Accra","Ashanti","Western","Eastern","Central","Volta","Northern","Upper East","Upper West"],d=["Teaching","Healthcare","Agriculture","Administration","Engineering","Finance"],m=[{title:"Based on your Computer Science background",tip:"Consider teaching ICT or applying for administrative roles in tech hubs. Your skills are highly valuable in urban centers.",priority:"High match potential"},{title:"Location Strategy",tip:"While urban postings are competitive, rural areas offer faster career growth and additional allowances.",priority:"Strategic advice"},{title:"Timeline Alert",tip:"Registration opens in 3 months. Prepare your documents now - passport photos, academic transcripts, and medical reports.",priority:"Urgent"}],h=[{month:"Month 1-2",activity:"Application and documentation",status:"upcoming"},{month:"Month 3",activity:"Posting announcements",status:"upcoming"},{month:"Month 4",activity:"Registration and orientation",status:"upcoming"},{month:"Month 5-16",activity:"Active service period",status:"upcoming"}],w=[{name:"Michael Ofori",role:"Former Teaching Service",achievement:"Now Education Minister's aide",quote:"My service year opened doors I never imagined."},{name:"Dr. Sarah Mensah",role:"Healthcare Service Alumni",achievement:"Now leading regional health initiative",quote:"The rural posting challenged and shaped me."}];return s.jsxs("div",{className:"ns-container",children:[s.jsxs("div",{className:"ambient-lights",children:[s.jsx("div",{className:"ambient-light-1"}),s.jsx("div",{className:"ambient-light-2"}),s.jsx("div",{className:"ambient-light-3"})]}),s.jsxs("div",{className:"ns-content",children:[s.jsxs("div",{className:"header-section",children:[s.jsx("div",{className:"header-glow"}),s.jsxs("div",{className:"header-inner",children:[s.jsxs("div",{className:"badge",children:[s.jsx(Js,{className:"badge-icon"}),s.jsx("span",{className:"badge-text",children:"National Service Advisor"})]}),s.jsx("h1",{className:"main-title",children:"Your National Service Journey"}),s.jsx("p",{className:"subtitle",children:"Make informed decisions about your service year with AI-powered insights and personalized recommendations"})]})]}),s.jsx("div",{className:"stats-grid",children:[{label:"Service Options",value:"4+",icon:s.jsx(m0,{}),color:"blue"},{label:"Available Locations",value:"9",icon:s.jsx(Qs,{}),color:"purple"},{label:"Success Rate",value:"94%",icon:s.jsx(g0,{}),color:"green"},{label:"User Satisfaction",value:"4.8/5",icon:s.jsx(r7,{}),color:"yellow"}].map((y,b)=>s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:`stat-card-glow stat-glow-${y.color}`}),s.jsxs("div",{className:"stat-card-inner",children:[s.jsxs("div",{className:"stat-header",children:[s.jsx("div",{className:`stat-icon stat-icon-${y.color}`,children:y.icon}),s.jsx("span",{className:"stat-value",children:y.value})]}),s.jsx("p",{className:"stat-label",children:y.label})]})]},b))}),s.jsx("div",{className:"tabs-container",children:s.jsx("div",{className:"tabs-header",children:[{id:"options",label:"Service Options",icon:s.jsx(m0,{})},{id:"ai-analysis",label:"AI Analysis",icon:s.jsx(Js,{})},{id:"timeline",label:"Timeline",icon:s.jsx(M8,{})},{id:"stories",label:"Success Stories",icon:s.jsx(kc,{})}].map(y=>s.jsxs("button",{onClick:()=>t(y.id),className:`tab-button ${e===y.id?"tab-active":""}`,children:[s.jsx("span",{className:"tab-icon",children:y.icon}),y.label,e===y.id&&s.jsx("div",{className:"tab-indicator"})]},y.id))})}),s.jsxs("div",{className:"tab-content",children:[e==="options"&&s.jsxs("div",{children:[s.jsxs("div",{className:"filters",children:[s.jsxs("div",{className:"filter-select",children:[s.jsx(Qs,{className:"filter-icon"}),s.jsxs("select",{value:n,onChange:y=>r(y.target.value),className:"select-input",children:[s.jsx("option",{value:"",children:"All Locations"}),u.map(y=>s.jsx("option",{value:y,children:y},y))]})]}),s.jsxs("div",{className:"filter-select",children:[s.jsx(Am,{className:"filter-icon"}),s.jsxs("select",{value:a,onChange:y=>i(y.target.value),className:"select-input",children:[s.jsx("option",{value:"",children:"All Fields"}),d.map(y=>s.jsx("option",{value:y,children:y},y))]})]}),s.jsx("button",{className:"find-btn",children:"Find Matches"})]}),s.jsx("div",{className:"cards-grid",children:c.map(y=>s.jsxs("div",{onMouseEnter:()=>l(y.id),onMouseLeave:()=>l(null),className:"service-card",children:[s.jsx("div",{className:"service-card-glow"}),s.jsxs("div",{className:"service-card-inner",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("div",{className:"card-icon",children:y.icon}),s.jsxs("div",{children:[s.jsx("h3",{className:"card-title",children:y.title}),s.jsxs("div",{className:"card-duration",children:[s.jsx(bc,{className:"duration-icon"}),s.jsx("span",{className:"duration-text",children:y.duration})]})]}),s.jsx("div",{className:"match-badge",children:s.jsxs("span",{className:"match-text",children:[y.matchScore,"% Match"]})})]}),s.jsx("p",{className:"card-description",children:y.description}),s.jsxs("div",{className:"benefits-section",children:[s.jsx("p",{className:"benefits-label",children:"Benefits"}),s.jsx("div",{className:"benefits-list",children:y.benefits.slice(0,3).map((b,C)=>s.jsx("span",{className:"benefit-tag",children:b},C))})]}),s.jsxs("div",{className:"card-footer",children:[s.jsxs("div",{className:"location-info",children:[s.jsx(Qs,{className:"location-icon"}),s.jsx("span",{children:y.locations[0]})]}),s.jsxs("button",{className:"learn-btn",children:["Learn More ",s.jsx(fm,{})]})]})]})]},y.id))})]}),e==="ai-analysis"&&s.jsxs("div",{className:"ai-analysis",children:[s.jsxs("div",{className:"ai-card",children:[s.jsx("div",{className:"ai-card-glow"}),s.jsxs("div",{className:"ai-card-inner",children:[s.jsxs("div",{className:"ai-header",children:[s.jsx("div",{className:"ai-header-icon",children:s.jsx(Js,{})}),s.jsx("h3",{className:"ai-title",children:"AI-Powered Analysis"})]}),s.jsxs("div",{className:"stats-row",children:[s.jsxs("div",{className:"stat-box",children:[s.jsx("p",{className:"stat-box-label",children:"Your Profile Match"}),s.jsx("p",{className:"stat-box-value",children:"88%"}),s.jsx("p",{className:"stat-box-note",children:"Based on your Computer Science background"})]}),s.jsxs("div",{className:"stat-box",children:[s.jsx("p",{className:"stat-box-label",children:"Recommended Service"}),s.jsx("p",{className:"stat-box-value-text",children:"Teaching or Admin"}),s.jsx("p",{className:"stat-box-note",children:"Best alignment with your skills"})]}),s.jsxs("div",{className:"stat-box",children:[s.jsx("p",{className:"stat-box-label",children:"Preferred Location"}),s.jsx("p",{className:"stat-box-value-text",children:"Greater Accra"}),s.jsx("p",{className:"stat-box-note",children:"High demand for tech skills"})]})]}),s.jsx("div",{className:"tips-list",children:m.map((y,b)=>s.jsx("div",{className:"tip-card",children:s.jsxs("div",{className:"tip-content",children:[s.jsx(P8,{className:"tip-icon"}),s.jsxs("div",{children:[s.jsxs("div",{className:"tip-header",children:[s.jsx("h4",{className:"tip-title",children:y.title}),s.jsx("span",{className:"tip-priority",children:y.priority})]}),s.jsx("p",{className:"tip-text",children:y.tip})]})]})},b))})]})]}),s.jsxs("div",{className:"checklist-card",children:[s.jsxs("h3",{className:"checklist-title",children:[s.jsx(yc,{className:"checklist-icon"}),"Required Documents Checklist"]}),s.jsx("div",{className:"checklist-grid",children:[{name:"Academic Transcripts",icon:s.jsx(I5,{})},{name:"National ID Card",icon:s.jsx(lh,{})},{name:"Passport Photos (4 copies)",icon:s.jsx(V8,{})},{name:"Medical Certificate",icon:s.jsx($h,{})},{name:"Recommendation Letter",icon:s.jsx(li,{})},{name:"Curriculum Vitae",icon:s.jsx(lm,{})}].map((y,b)=>s.jsxs("div",{className:"checklist-item",children:[s.jsx("div",{className:"checklist-box"}),s.jsx("span",{className:"checklist-name",children:y.name})]},b))})]})]}),e==="timeline"&&s.jsxs("div",{className:"timeline-container",children:[s.jsx("div",{className:"timeline-line"}),s.jsx("div",{className:"timeline-items",children:h.map((y,b)=>s.jsxs("div",{className:"timeline-item",children:[s.jsx("div",{className:"timeline-dot",children:s.jsx("span",{className:"timeline-number",children:b+1})}),s.jsxs("div",{className:"timeline-card",children:[s.jsx("h3",{className:"timeline-month",children:y.month}),s.jsx("p",{className:"timeline-activity",children:y.activity}),s.jsxs("div",{className:"timeline-status",children:[s.jsx("div",{className:"status-dot"}),s.jsxs("span",{className:"status-text",children:["Status: ",y.status]})]})]})]},b))})]}),e==="stories"&&s.jsx("div",{className:"stories-grid",children:w.map((y,b)=>s.jsxs("div",{className:"story-card",children:[s.jsx("div",{className:"story-card-glow"}),s.jsxs("div",{className:"story-card-inner",children:[s.jsxs("div",{className:"story-author",children:[s.jsx("div",{className:"story-avatar",children:s.jsx(_7,{})}),s.jsxs("div",{children:[s.jsx("h4",{className:"story-name",children:y.name}),s.jsx("p",{className:"story-role",children:y.role})]})]}),s.jsxs("p",{className:"story-quote",children:['"',y.quote,'"']}),s.jsxs("div",{className:"story-achievement",children:[s.jsx(g0,{className:"achievement-icon"}),s.jsx("span",{className:"achievement-text",children:y.achievement})]})]})]},b))})]}),s.jsxs("div",{className:"cta-section",children:[s.jsx("button",{className:"cta-button",children:"Start Your Application Process"}),s.jsx("p",{className:"cta-note",children:"Get personalized guidance throughout your national service journey"})]})]}),s.jsx("style",{children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .ns-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #030712 0%, #111827 50%, #030712 100%);
          position: relative;
          overflow-x: hidden;
        }

        /* Ambient Lights */
        .ambient-lights {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .ambient-light-1 {
          position: absolute;
          top: -2rem;
          left: -2rem;
          width: 24rem;
          height: 24rem;
          background: #8b5cf6;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          animation: pulse 4s ease-in-out infinite;
        }

        .ambient-light-2 {
          position: absolute;
          top: -2rem;
          right: -2rem;
          width: 24rem;
          height: 24rem;
          background: #06b6d4;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          animation: pulse 4s ease-in-out infinite 1s;
        }

        .ambient-light-3 {
          position: absolute;
          bottom: -2rem;
          left: 50%;
          width: 24rem;
          height: 24rem;
          background: #3b82f6;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          animation: pulse 4s ease-in-out infinite 0.5s;
          transform: translateX(-50%);
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }

        .ns-content {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
          z-index: 1;
        }

        /* Header */
        .header-section {
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
        }

        .header-glow {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .header-glow::before {
          content: '';
          width: 8rem;
          height: 8rem;
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
        }

        .header-inner {
          position: relative;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(31, 41, 55, 0.5);
          backdrop-filter: blur(4px);
          border: 1px solid #374151;
          border-radius: 9999px;
          margin-bottom: 1rem;
        }

        .badge-icon {
          width: 1rem;
          height: 1rem;
          color: #fbbf24;
        }

        .badge-text {
          font-size: 0.875rem;
          color: #d1d5db;
        }

        .main-title {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff, #9ca3af, #6b7280);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 1rem;
        }

        .subtitle {
          font-size: 1.25rem;
          color: #9ca3af;
          max-width: 48rem;
          margin: 0 auto;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .stat-card {
          position: relative;
        }

        .stat-card-glow {
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          opacity: 0;
          transition: opacity 0.5s;
          filter: blur(10rem);
        }

        .stat-card:hover .stat-card-glow {
          opacity: 1;
        }

        .stat-glow-blue {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
        }
        .stat-glow-purple {
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
        }
        .stat-glow-green {
          background: linear-gradient(135deg, #10b981, #059669);
        }
        .stat-glow-yellow {
          background: linear-gradient(135deg, #f59e0b, #ea580c);
        }

        .stat-card-inner {
          position: relative;
          background: rgba(31, 41, 55, 0.4);
          backdrop-filter: blur(4px);
          border: 1px solid #374151;
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: border-color 0.3s;
        }

        .stat-card:hover .stat-card-inner {
          border-color: #4b5563;
        }

        .stat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }

        .stat-icon {
          padding: 0.5rem;
          border-radius: 0.5rem;
          background: rgba(139, 92, 246, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-icon-blue { background: rgba(59, 130, 246, 0.2); color: #60a5fa; }
        .stat-icon-purple { background: rgba(139, 92, 246, 0.2); color: #a78bfa; }
        .stat-icon-green { background: rgba(16, 185, 129, 0.2); color: #34d399; }
        .stat-icon-yellow { background: rgba(245, 158, 11, 0.2); color: #fbbf24; }

        .stat-value {
          font-size: 1.875rem;
          font-weight: 700;
          color: white;
        }

        .stat-label {
          color: #9ca3af;
          font-size: 0.875rem;
        }

        /* Tabs */
        .tabs-container {
          margin-bottom: 2rem;
          border-bottom: 1px solid #1f2937;
        }

        .tabs-header {
          display: flex;
          gap: 2rem;
        }

        .tab-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: none;
          border: none;
          font-size: 0.875rem;
          font-weight: 500;
          color: #6b7280;
          cursor: pointer;
          transition: color 0.3s;
          position: relative;
        }

        .tab-button:hover {
          color: #d1d5db;
        }

        .tab-active {
          color: white;
        }

        .tab-icon {
          width: 1rem;
          height: 1rem;
        }

        .tab-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #8b5cf6, #06b6d4);
        }

        .tab-content {
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Filters */
        .filters {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .filter-select {
          flex: 1;
          min-width: 200px;
          position: relative;
        }

        .filter-icon {
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          width: 1rem;
          height: 1rem;
          color: #6b7280;
          z-index: 1;
        }

        .select-input {
          width: 100%;
          padding: 0.5rem 0.75rem 0.5rem 2.5rem;
          background: rgba(31, 41, 55, 0.5);
          border: 1px solid #374151;
          border-radius: 0.5rem;
          color: #d1d5db;
          font-size: 0.875rem;
          cursor: pointer;
          transition: border-color 0.3s;
        }

        .select-input:focus {
          outline: none;
          border-color: #8b5cf6;
        }

        .find-btn {
          padding: 0.5rem 1.5rem;
          background: linear-gradient(135deg, #7c3aed, #0891b2);
          border: none;
          border-radius: 0.5rem;
          color: white;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
        }

        .find-btn:hover {
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.25);
          transform: scale(1.02);
        }

        /* Cards Grid */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .service-card {
          position: relative;
          cursor: pointer;
        }

        .service-card-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2));
          border-radius: 0.75rem;
          filter: blur(1rem);
          opacity: 0;
          transition: opacity 0.5s;
        }

        .service-card:hover .service-card-glow {
          opacity: 1;
        }

        .service-card-inner {
          position: relative;
          background: rgba(31, 41, 55, 0.4);
          backdrop-filter: blur(4px);
          border: 1px solid #374151;
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: border-color 0.3s;
        }

        .service-card:hover .service-card-inner {
          border-color: #4b5563;
        }

        .card-header {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .card-icon {
          padding: 0.5rem;
          border-radius: 0.5rem;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2));
          color: #a78bfa;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
        }

        .card-duration {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          margin-top: 0.25rem;
        }

        .duration-icon {
          width: 0.75rem;
          height: 0.75rem;
          color: #6b7280;
        }

        .duration-text {
          font-size: 0.75rem;
          color: #6b7280;
        }

        .match-badge {
          margin-left: auto;
          padding: 0.25rem 0.5rem;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 9999px;
        }

        .match-text {
          font-size: 0.75rem;
          color: #4ade80;
        }

        .card-description {
          color: #9ca3af;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .benefits-section {
          margin-bottom: 1rem;
        }

        .benefits-label {
          font-size: 0.75rem;
          color: #6b7280;
          margin-bottom: 0.5rem;
        }

        .benefits-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .benefit-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          background: rgba(55, 65, 81, 0.5);
          border-radius: 9999px;
          color: #d1d5db;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid #374151;
        }

        .location-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #9ca3af;
        }

        .location-icon {
          width: 0.75rem;
          height: 0.75rem;
        }

        .learn-btn {
          background: none;
          border: none;
          color: #a78bfa;
          font-size: 0.875rem;
          cursor: pointer;
          transition: color 0.3s;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .learn-btn:hover {
          color: #c4b5fd;
        }

        /* AI Analysis Tab */
        .ai-analysis {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .ai-card {
          position: relative;
        }

        .ai-card-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 16rem;
          height: 16rem;
          background: rgba(139, 92, 246, 0.1);
          border-radius: 50%;
          filter: blur(60px);
        }

        .ai-card-inner {
          position: relative;
          background: rgba(31, 41, 55, 0.4);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 0.75rem;
          padding: 2rem;
        }

        .ai-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .ai-header-icon {
          padding: 0.5rem;
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          border-radius: 9999px;
          color: white;
        }

        .ai-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
          .stats-row {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .stat-box {
          background: rgba(17, 24, 39, 0.5);
          border-radius: 0.5rem;
          padding: 1rem;
          border: 1px solid #374151;
        }

        .stat-box-label {
          font-size: 0.875rem;
          color: #9ca3af;
          margin-bottom: 0.5rem;
        }

        .stat-box-value {
          font-size: 2rem;
          font-weight: 700;
          color: #a78bfa;
        }

        .stat-box-value-text {
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
        }

        .stat-box-note {
          font-size: 0.75rem;
          color: #6b7280;
          margin-top: 0.5rem;
        }

        .tips-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .tip-card {
          background: rgba(17, 24, 39, 0.3);
          border-radius: 0.5rem;
          padding: 1rem;
          border: 1px solid #374151;
          transition: border-color 0.3s;
        }

        .tip-card:hover {
          border-color: rgba(139, 92, 246, 0.3);
        }

        .tip-content {
          display: flex;
          gap: 0.75rem;
        }

        .tip-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #fbbf24;
          margin-top: 0.125rem;
        }

        .tip-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }

        .tip-title {
          font-weight: 600;
          color: white;
        }

        .tip-priority {
          font-size: 0.75rem;
          padding: 0.125rem 0.5rem;
          background: rgba(139, 92, 246, 0.2);
          border-radius: 9999px;
          color: #c4b5fd;
        }

        .tip-text {
          font-size: 0.875rem;
          color: #9ca3af;
        }

        .checklist-card {
          background: rgba(31, 41, 55, 0.4);
          backdrop-filter: blur(4px);
          border: 1px solid #374151;
          border-radius: 0.75rem;
          padding: 1.5rem;
        }

        .checklist-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .checklist-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #4ade80;
        }

        .checklist-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 0.75rem;
        }

        @media (min-width: 768px) {
          .checklist-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .checklist-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: background 0.3s;
        }

       .checklist-item:hover {
          background: rgba(55, 65, 81, 0.3);
        }

        .checklist-box {
          width: 1rem;
          height: 1rem;
          border: 1px solid #4b5563;
          border-radius: 0.25rem;
        }.3);
                .checklist-name {
          font-size: 0.875rem;
          color: #d1d5db;
        }

        /* Timeline Tab */
        .timeline-container {
          position: relative;
          padding-left: 2rem;
        }

        .timeline-line {
          position: absolute;
          left: 2rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #8b5cf6, #06b6d4, #8b5cf6);
        }

        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline-item {
          position: relative;
          display: flex;
          gap: 1.5rem;
        }

        .timeline-dot {
          position: relative;
          z-index: 1;
          width: 4rem;
          height: 4rem;
          background: #1f2937;
          border: 2px solid #8b5cf6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .timeline-number {
          font-size: 0.875rem;
          font-weight: 600;
          color: #a78bfa;
        }

        .timeline-card {
          flex: 1;
          background: rgba(31, 41, 55, 0.4);
          backdrop-filter: blur(4px);
          border: 1px solid #374151;
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: border-color 0.3s;
        }

        .timeline-card:hover {
          border-color: rgba(139, 92, 246, 0.3);
        }

        .timeline-month {
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.5rem;
        }

        .timeline-activity {
          color: #9ca3af;
        }

        .timeline-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.75rem;
        }

        .status-dot {
          width: 0.5rem;
          height: 0.5rem;
          background: #fbbf24;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        .status-text {
          font-size: 0.75rem;
          color: #6b7280;
        }

        /* Stories Tab */
        .stories-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .stories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .story-card {
          position: relative;
        }

        .story-card-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2));
          border-radius: 0.75rem;
          filter: blur(1rem);
          opacity: 0;
          transition: opacity 0.5s;
        }

        .story-card:hover .story-card-glow {
          opacity: 1;
        }

        .story-card-inner {
          position: relative;
          background: rgba(31, 41, 55, 0.4);
          backdrop-filter: blur(4px);
          border: 1px solid #374151;
          border-radius: 0.75rem;
          padding: 2rem;
        }

        .story-author {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .story-avatar {
          width: 3rem;
          height: 3rem;
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .story-name {
          font-weight: 600;
          color: white;
        }

        .story-role {
          font-size: 0.875rem;
          color: #9ca3af;
        }

        .story-quote {
          color: #d1d5db;
          font-style: italic;
          margin-bottom: 1rem;
        }

        .story-achievement {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
        }

        .achievement-icon {
          width: 1rem;
          height: 1rem;
          color: #fbbf24;
        }

        .achievement-text {
          color: #9ca3af;
        }

        /* CTA Section */
        .cta-section {
          text-align: center;
          margin-top: 3rem;
        }

        .cta-button {
          padding: 0.75rem 2rem;
          background: linear-gradient(135deg, #7c3aed, #0891b2);
          border: none;
          border-radius: 0.5rem;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .cta-button:hover {
          box-shadow: 0 0 25px rgba(139, 92, 246, 0.25);
          transform: scale(1.05);
        }

        .cta-note {
          font-size: 0.75rem;
          color: #6b7280;
          margin-top: 1rem;
        }

        /* Icon base styles */
        .icon {
          width: 1.5rem;
          height: 1.5rem;
        }
      `})]})};const B9=()=>s.jsxs("div",{className:"userlevel uc-card",children:[s.jsx("div",{className:"uc-dotgrid","aria-hidden":"true"}),s.jsx("div",{className:"uc-glow","aria-hidden":"true"}),s.jsxs("div",{className:"levelitem2 board",children:[s.jsx("div",{className:"streak",children:"Job Application Guide"}),s.jsxs("div",{className:"missing",children:[s.jsx("div",{className:"construction","aria-hidden":"true",children:"🚧"}),s.jsxs("div",{className:"missingtext",children:[s.jsx(M2,{className:"micon"}),"This page is currently under construction"]}),s.jsx("div",{className:"uc-subtext",children:"We're putting the finishing touches on this guide — check back soon."})]}),s.jsx("div",{className:"streak"})]})]}),U9=()=>s.jsx("div",{className:"userlevel",children:s.jsxs("div",{className:"levelitem2 board",children:[s.jsx("div",{className:"streak",children:"Our digital Products"}),s.jsx("div",{className:"streak"})]})}),W9=()=>s.jsx("div",{className:"userlevel",children:s.jsx("div",{className:"userlevel",children:s.jsxs("div",{className:" advertboard",children:[s.jsx("div",{className:"streak",children:"Run your Adds here"}),s.jsx("div",{className:"iconlarge",children:"🎪"}),s.jsx("div",{className:"wish",children:"What is this section about?"}),s.jsx("div",{className:"tovid",children:"Watch this short video for a precise walk through?"}),s.jsx("div",{className:"watch",children:s.jsxs("div",{className:"sp",children:[s.jsx("div",{className:"fnav",children:s.jsx("i",{className:"fa fa-play"})})," Watch me 👀",s.jsx("div",{className:"prem2"})]})})]})})});function q9({currentView:e,setcurrentView:t}){const n="dashboard-nss-referal-solve-earn-leaderboard-advert-job".split("-"),r=()=>{confirm("Confirm to Leave")&&(v2(),location.reload())};return s.jsxs("div",{className:"profile",children:[s.jsx("div",{className:"wrap",children:e==n[0]?s.jsx(z9,{}):e==n[1]?s.jsx(F9,{}):e==n[2]?s.jsx(V9,{}):e==n[3]?s.jsx(U9,{}):e==n[4]?s.jsx(O9,{}):e==n[5]?s.jsx(M9,{}):e==n[6]?s.jsx(W9,{}):e==n[7]?s.jsx(B9,{}):s.jsx(G9,{})}),s.jsxs("div",{className:"onmenu",children:[s.jsx("div",{onClick:r,className:"in",children:s.jsxs("div",{className:"insp",children:[s.jsx("div",{className:"prem4"}),s.jsx("span",{className:"fnav",children:s.jsx("i",{className:"fa fa-power-off fa-dark"})}),"Logout"]})}),s.jsx("div",{onClick:()=>{t("dashboard")},className:"in",children:s.jsxs("div",{className:"insp",children:[s.jsx("div",{className:"prem4"}),s.jsx("span",{className:"fnav",children:s.jsx("i",{className:"fa fa-windows fa-dark"})}),"General"]})}),s.jsx("div",{onClick:()=>{t("referal")},className:"in",children:s.jsxs("div",{className:"insp",children:[s.jsx("div",{className:"prem4"}),s.jsx("span",{className:"fnav",children:s.jsx("i",{className:"fa fa-users fa-dark"})}),"Referal"]})}),s.jsx("div",{onClick:()=>{t("earn")},className:"in",children:s.jsxs("div",{className:"insp",children:[s.jsx("div",{className:"prem4"}),s.jsx("span",{className:"fnav",children:s.jsx("i",{className:"fa fa-dollar fa-dark"})}),"Earn"]})}),s.jsx("div",{onClick:()=>{t("nss")},className:"in",children:s.jsxs("div",{className:"insp",children:[s.jsx("div",{className:"prem4"}),s.jsx("span",{className:"fnav",children:s.jsx("i",{className:"fa fa-briefcase fa-dark"})}),"NSS guide"]})}),s.jsx("div",{onClick:()=>{t("solve")},className:"in",children:s.jsxs("div",{className:"insp",children:[s.jsx("div",{className:"prem4"}),s.jsx("span",{className:"fnav",children:s.jsx("i",{className:"fa fa-star fa-dark"})}),"Solve with AI"]})}),s.jsx("div",{onClick:()=>{t("advert")},className:"in",children:s.jsxs("div",{className:"insp",children:[s.jsx("div",{className:"prem4"}),s.jsx("span",{className:"fnav",children:s.jsx("i",{className:"fa fa-shop fa-dark"})}),"Advertise"]})}),s.jsx("div",{onClick:()=>{t("job")},className:"in",children:s.jsxs("div",{className:"insp",children:[s.jsx("div",{className:"prem4"}),s.jsx("span",{className:"fnav",children:s.jsx("i",{className:"fa fa-certificate fa-dark"})}),"Job guide"]})}),s.jsx("div",{onClick:()=>{t("leaderboard")},className:"in",children:s.jsxs("div",{className:"insp",children:[s.jsx("div",{className:"prem4"}),s.jsx("span",{className:"fnav",children:s.jsx("i",{className:"fa fa-medal fa-dark"})}),"leaderboard"]})})]})]})}const G9=()=>s.jsx("div",{className:"userlevel",children:s.jsxs("div",{className:"missing",children:[s.jsxs("div",{className:"missingtext",children:[s.jsx(M2,{className:"micon"}),"To go back, click the search box"]}),s.jsx("div",{className:"construction",children:"♒"}),s.jsx("div",{className:"missingtext",children:"Use the links below to navigate through this space"})]})}),Wi=({opacity:e,indexed:t,mainlogo:n})=>s.jsx("div",{className:"texttit",id:"waiting",style:{zIndex:t},children:s.jsxs("div",{className:"mtitle",id:"waittxt",style:{opacity:e},children:[s.jsx("div",{className:"rbackdrop"}),s.jsx("img",{src:Oc,className:"racoonload",alt:""}),s.jsxs("div",{className:"loading",children:[s.jsx("div",{className:"logo",children:s.jsx("img",{src:n,width:"120",alt:""})}),s.jsx("div",{className:"loadtext",id:"loadtext","data-text":"Loading....",children:" Loading...."})]}),s.jsx("span",{style:{color:"rgba(205,205,245,.3)"},children:"Questions for various course codes"})]})}),Q9=({setselectModel:e,selectlink:t,getpayload:n,setselectedVal:r,selectedVal:a})=>{const[i,o]=p.useState({}),[l,c]=p.useState(null),[u,d]=p.useState(!1),m=C=>{r(C.target.value)},h=C=>{C.preventDefault(),n(t),e(!1)},w=()=>{e(!1)},y=()=>{d(!1),c(null),fetch(`${ma}/api/files/models`).then(C=>{if(!C.ok)throw new Error(`HTTP error! status: ${C.status}`);return C.json()}).then(C=>{!C||typeof C.modelsobject!="object"?(console.warn("Invalid response structure:",C),c("Invalid model data received"),o({})):(o(C.modelsobject),c(null)),d(!0)}).catch(C=>{console.error("Error fetching models:",C),c(C.message||"Failed to load models. Please check your connection."),d(!0)})},b=C=>{C.preventDefault(),c("Try again.")};return p.useEffect(()=>{y()},[]),s.jsx("div",{className:"mselect",children:s.jsxs("div",{className:"mcontainer",children:[s.jsx("div",{className:"rbackdrop",style:{transform:"rotate(180deg)",opacity:.3,height:"600px"}}),s.jsx("img",{src:Oc,className:"racoonload",style:{borderRadius:0,height:150},alt:""}),s.jsx("div",{className:"closeme",onClick:w,children:s.jsx("i",{className:"fa fa-close"})}),s.jsxs("div",{className:"mchoice",children:[s.jsx("span",{className:"fnav",children:s.jsx("span",{className:".solstar bga",children:"💫"})}),s.jsx("br",{}),s.jsx("span",{className:"mchoice",style:{fontSize:20,fontWeight:700},children:"Choose AI Model"})]}),s.jsxs("div",{className:"mchoice2",children:[s.jsx("div",{className:"fnav",children:s.jsx("i",{className:"fa fa-box fa-dark"})}),"Proceed with your prefered AI model:"]}),s.jsx("span",{className:"mchoice3",children:" "+a}),l?s.jsxs("div",{className:"mtop",children:[s.jsxs("div",{className:"list",style:{height:60,display:"flex",alignItems:"center",color:"#ff6b6b",paddingRight:"10px"},children:["⚠️ ",l]}),s.jsx("div",{style:{color:"white",cursor:"pointer"},className:"download",onClick:y,children:"Retry"})]}):Object.keys(i).length>0?s.jsxs("div",{className:"mtop",children:[s.jsx("input",{list:"list",onChange:m,className:"select"}),s.jsx("datalist",{id:"list",value:a,children:Object.keys(i).map((C,g)=>s.jsx("option",{value:i[C],children:C},g+"-"))})]}):s.jsx("div",{className:"mtop",children:s.jsx("div",{className:"list",style:{height:60,display:"flex",alignItems:"center",justifyContent:"center"},children:u?"No models available":"Loading models..."})}),s.jsxs("button",{className:"mbottom download",style:{color:"white"},onClick:t&&a?h:b,children:[s.jsx("span",{className:"fnav",children:s.jsx("i",{className:"fa fa-arrow-right"})}),"continue",s.jsx("span",{className:"prem4"})]})]})})};function e4(){try{const e=localStorage.getItem("userInfo");return e?JSON.parse(e):null}catch{return null}}function Z9(e){try{const t=e4()??{};localStorage.setItem("userInfo",JSON.stringify({...t,...e}))}catch{}}function Y9(e){return typeof e!="string"||!e.includes("h3")?null:e}const J9=({errorMessage:e,setfetchError:t})=>(p.useEffect(()=>{const n=setTimeout(()=>t(!1),4e3);return()=>clearTimeout(n)},[t]),s.jsx("div",{className:"toast",children:s.jsxs("div",{className:"successmessage",children:["🔴 Sorry: 🔌 ",e.toLowerCase()]})})),X9=({setsearching:e,selectedVal:t,setselectedVal:n,payload:r,find:a,setcourseName:i,setfind:o,bar:l,setRefreshing:c,pdf:u,NetworkError:d,setdataerror:m,setcredits:h,pdflink:w,courseName:y,actualDlink:b,credits:C,dataerror:g,setpdflink:f,setactualDlink:x})=>{const[k,j]=p.useState(!1),[S,N]=p.useState(!1),[_,R]=p.useState(""),[T,A]=p.useState(""),[Q,ge]=p.useState(!1),[Ie,ct]=p.useState(""),[Ae,De]=p.useState(!1),[z,L]=p.useState("loading..."),[$,W]=p.useState(""),[q,Oe]=p.useState(!1),[oe,Se]=p.useState(!1),D=()=>{confirm("Confirm to Leave")&&(v2(),location.reload())},le=(F,ke)=>{i(ke),ge(!0),ct(F)},He=p.useCallback(async F=>{var Yt;const ke=e4(),et=(ke==null?void 0:ke.pStatus)??null;ge(!1),L("loading..."),m(""),j(!0),N(!1),A("");const Ve=F.split("=")[1];try{const ut=await fetch(`${ma}/api/files/${Ve}`);if(!ut.ok)throw new Error(`Failed to fetch PDF (${ut.status})`);const Y=await ut.json();f(Y.previewLink),W(Y.raw),x(Y.directDownload),De(!0),j(!1);const Fn={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:Ve,selectedVal:t,premiumstatus:et??"premiumstatus"})},H=await st(`${de}/api/v1/request/solutions`,Fn);if(!H)throw new Error("No response from solutions API");if(H!=null&&H.error){const Mt=H.error.details??H.error.message??"Failed to fetch solution";throw new Error(Mt)}const Et=((Yt=H.api_response)==null?void 0:Yt.data)??H,Bn=H.remaining_credits??0;if(h(Bn),Z9({credits:Bn}),Et.directDownload&&x(Et.directDownload),Et.error)m(Et.error);else{Et.raw&&W(Et.raw);const Mt=Y9(Et.extractedText??"");Mt?L(Mt):(m(Et.extractedText??"Unexpected response format."),L(""))}}catch(ut){const Y=ut instanceof Error?ut.message:String(ut);m("Extraction failed: "+Y),N(!0),A(Y),L("")}finally{j(!1)}},[t,h,m,f,x]),V=a!==""&&r.length>0?[...new Set(r)].filter(F=>F.description.toLowerCase().includes(a.toLowerCase())).sort((F,ke)=>{var et,Ve;return(((et=ke.createdOn)==null?void 0:et.slice(0,4))??0)-(((Ve=F.createdOn)==null?void 0:Ve.slice(0,4))??0)}).slice(0,30):[],ce=a===""||V.length===0;return s.jsxs("div",{className:"searchlist",children:[Ae?s.jsx(C9,{actualDlink:b,raw:$,pdflink:w,mainlogo:Ot,setshowpdf:De,dataerror:g,credits:C,courseName:y,extract:z,selectedVal:t}):s.jsxs("div",{children:[s.jsxs("div",{className:"searchnav",children:[s.jsx("div",{className:"closesearch",onClick:()=>{e(!1),l.current.value=""},children:s.jsx("div",{className:"bbtn",children:s.jsxs("div",{className:"ba",children:[s.jsx(ga,{}),s.jsx("span",{className:"prem3"})]})})}),s.jsx(k2,{handleMenu:F=>Se(F),eprop:"all",setsearching:e,bar:l,find:a,setRefreshing:c,setfind:o})]}),s.jsxs("div",{className:"bothsides",children:[s.jsx("div",{className:`sidemenubar ${q?"collapsed":""}`,children:s.jsxs("div",{className:"mymenubox",onClick:()=>Se(!0),"data-open":oe,children:[s.jsx("div",{className:"rbackdrop"}),s.jsx("img",{className:"racoonp",src:N9,alt:""}),s.jsx("div",{className:"collapse-toggle",onClick:F=>{F.stopPropagation(),Oe(ke=>!ke)},children:q?s.jsx(Wh,{}):s.jsx(Hh,{})}),s.jsx("div",{className:"firstitem",children:s.jsx(ht,{to:"/payment",target:"_blank",rel:"noopener noreferrer",children:s.jsxs("div",{className:"paid",children:[s.jsx("div",{className:"fnav",children:"✨"}),s.jsx(wc,{class:"fnav-money"}),s.jsx("span",{className:"menu-label",children:"Upgrade"}),s.jsx("div",{className:"fnav",children:"✨"})]})})}),s.jsx("div",{className:"mymenu",children:[{view:"dashboard",icon:s.jsx(l8,{className:"micon"}),label:"General"},{view:"solve",icon:s.jsx(O5,{className:"micon"}),label:"Our Products",badge:"✨"},{view:"leaderboard",icon:s.jsx(F5,{className:"micon"}),label:"Leaderboard"},{view:"referal",icon:s.jsx("i",{style:{fontSize:10},className:"fa fa-users micon"}),label:"Referal Details"},{view:"earn",icon:s.jsx(u5,{className:"micon"}),label:"Earn",badge:"💰"},{view:"advert",icon:s.jsx(Rm,{className:"micon"}),label:"Advertise your business",badge:"📢"},{view:"nss",icon:s.jsx(A2,{className:"micon"}),label:"NSS Guide"},{view:"job",icon:s.jsx(kc,{className:"micon"}),label:"Job Application Guide"}].map(({view:F,icon:ke,label:et,badge:Ve})=>s.jsx("div",{className:"menuitems",onClick:()=>{R(F),Se(!1)},title:q?et:void 0,children:s.jsxs("div",{className:"inmenu",children:[s.jsx("span",{children:ke}),s.jsx("small",{className:"menu-label",children:et}),Ve&&s.jsx("div",{className:"fnav",children:Ve})]})},F))}),s.jsx("div",{className:"menuitems logout",style:{padding:20},onClick:D,children:s.jsxs("div",{className:"inmenu",children:[s.jsx(Nh,{className:"micon"}),s.jsx("span",{className:"menu-label",children:"Logout"})]})})]})}),s.jsxs("div",{className:"mcontent",children:[Q&&s.jsx(Q9,{setselectedVal:n,selectedVal:t,setselectModel:ge,getpayload:He,selectlink:Ie}),s.jsx("div",{className:"menucomp",style:oe?{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",pointerEvents:"all"}:{clipPath:"polygon(0 0, 0% 0, 0% 100%, 0 100%)",pointerEvents:"none"},children:s.jsx("div",{className:"menuhead",onClick:F=>F.stopPropagation(),children:s.jsx(q9,{currentView:_,setcurrentView:R})})}),s.jsx("div",{className:"listcontent",children:!ce&&V.length>0?V.map(F=>s.jsxs("div",{className:"filtered",title:F.description.replace("-",","),"data-ptext":"title...","data-texts":"details...",children:[s.jsx("img",{src:S9,alt:"",className:"imgthumb"}),s.jsxs("div",{className:"pinfo",children:[s.jsx("div",{className:"titles",children:F.description.replace(/o/gi,"🧿")}),s.jsx("div",{className:"describe",children:F.createdOn})]}),s.jsxs("div",{className:"download",onClick:()=>le(F.downloadLink,F.description),children:[s.jsx(y5,{style:{marginRight:"5px"}})," open",s.jsx("span",{className:"prema"})]})]},F.downloadLink??F.description)):s.jsx("div",{className:"filtered mn4",style:{margin:0,width:"100%"},"data-ptext":"title...","data-texts":"details...",children:s.jsxs("div",{className:"ready",children:[s.jsx("div",{className:"big",children:"🔎"}),s.jsx("div",{}),s.jsxs("div",{className:"desc err4",children:[s.jsx("div",{className:"fnav2",style:{padding:2},children:s.jsx("img",{className:"reglate",src:Ot,alt:""})}),s.jsx("span",{className:"nerror",children:d})]})]})})})]})]})]}),S&&s.jsx(J9,{setfetchError:N,errorMessage:T}),s.jsx(Wi,{opacity:k?1:0,indexed:k?100:-100,mainlogo:Ot})]})},K9="/imgs/racoon.jpg",eg=()=>{const[e,t]=p.useState(null),[n,r]=p.useState(!1),[a,i]=p.useState(!1);p.useEffect(()=>{const l=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);i(l);const c=d=>{d.preventDefault(),t(d),r(!0)},u=()=>{r(!1),t(null),console.log("PWA was installed")};return window.addEventListener("beforeinstallprompt",c),window.addEventListener("appinstalled",u),()=>{window.removeEventListener("beforeinstallprompt",c),window.removeEventListener("appinstalled",u)}},[]);const o=async()=>{if(e){e.prompt();const{outcome:l}=await e.userChoice;t(null),r(!1),console.log(`User response to the install prompt: ${l}`)}else/iPad|iPhone|iPod/.test(navigator.userAgent)?alert('To install this app on iOS, tap the share icon and then "Add to Home Screen".'):/Android/.test(navigator.userAgent)?alert('To install this app on Android, use the menu option in your browser to "Add to Home Screen".'):alert(`To install this app, look for an "Add to Home Screen" option in your browser's menu.`)};return n?s.jsxs("button",{id:"pwaButton",onClick:o,style:{display:"inline-flex"},className:"pwa-install-button",children:[s.jsx("i",{className:"fas fa-plus-square"}),a?" Add to Home Screen":" Install App"]}):null},tg="/assets/jess-f0797696.jpg",ng="/assets/jude-1c8bb029.jpg",S0="/assets/racoon_learn-ac3a52fe.jpg",qa="/assets/titled-1d1d74d4.jpg";function Xs({googleLoading:e,blocked:t=!1,blockedMessage:n="Please try again.",onBlockedClick:r,containerRef:a}){return s.jsxs("div",{style:{position:"relative"},children:[s.jsx("br",{}),s.jsx("div",{className:"regbutton",style:{display:"flex",alignItems:"center",zIndex:2,border:"1px solid #ffffff9a",borderRadius:"5px",justifyContent:"center",fontWeight:600,opacity:e?.7:1},children:e?s.jsxs(s.Fragment,{children:[s.jsx(wh,{style:{fontSize:"1.1rem"}})," Signing in…"]}):s.jsxs(s.Fragment,{children:[s.jsx(G5,{style:{fontSize:"1.1rem",backgroundColor:"#00aeff",padding:4,borderRadius:"50%",color:"#ea4335"}}),"Continue with Google"]})}),t&&!e&&s.jsx("div",{style:{position:"absolute",inset:0,zIndex:2,cursor:"pointer"},onClick:()=>r==null?void 0:r(n)}),s.jsx("div",{ref:a,style:{marginTop:25,position:"absolute",inset:0,opacity:0,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:t||e?"none":"auto"}})]})}const N0=[tg,ng,K2,X2],Ga=N0[Math.floor(Math.random()*N0.length)],te={LOGIN:"login",SIGNUP:"signup",OTP:"otp",FORGOT:"forgot",RESET_SENT:"reset_sent",POLICY:"policy",TERMS:"terms"},rg=60,ag="49165624970-35najh58masjjonbbp944ha3vi2su79l.apps.googleusercontent.com",ig="https://accounts.google.com/gsi/client",E0="google-identity-services",Ks=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());function sg(e){try{localStorage.setItem("userInfo",JSON.stringify(e))}catch{}}function og(e){var t,n;try{const r="jfphmdfhigoppbldgnclkpjikkbjmkmo";(n=(t=window.chrome)==null?void 0:t.runtime)!=null&&n.sendMessage&&window.chrome.runtime.sendMessage(r,{action:"syncAuth",userInfo:e},()=>{window.chrome.runtime.lastError})}catch{}}function lg({setshows:e}){const[t,n]=p.useState(""),[r,a]=p.useState(""),[i,o]=p.useState(""),[l,c]=p.useState(""),[u,d]=p.useState(""),[m,h]=p.useState(""),[w,y]=p.useState(""),[b,C]=p.useState(""),[g,f]=p.useState(""),[x,k]=p.useState(""),[j,S]=p.useState(""),[N,_]=p.useState(!1),[R,T]=p.useState(!1),[A,Q]=p.useState(te.LOGIN),[ge,Ie]=p.useState(te.SIGNUP),[ct,Ae]=p.useState(!1),[De,z]=p.useState(!1),[L,$]=p.useState(!1),[W,q]=p.useState(!1),[Oe,oe]=p.useState(!1),[Se,D]=p.useState(0),[le,He]=p.useState(""),[V,ce]=p.useState(!1),[F,ke]=p.useState({message:"",visible:!1,isSuccess:!1}),et=p.useRef(null),Ve=p.useRef(null),[Yt,ut]=p.useState(!1),Y=p.useRef(null),Fn=p.useRef(te.LOGIN),H=(O,ie=!1)=>{clearTimeout(et.current),ke({message:O,visible:!0,isSuccess:ie}),et.current=setTimeout(()=>ke(Ne=>({...Ne,visible:!1})),6e3)};p.useEffect(()=>()=>{clearTimeout(et.current),clearInterval(Ve.current)},[]);const Et=(O=rg)=>{D(O),clearInterval(Ve.current),Ve.current=setInterval(()=>{D(ie=>ie<=1?(clearInterval(Ve.current),0):ie-1)},1e3)},Bn=O=>{const ie={...O.data.userData,accessToken:O.data.token,refreshToken:O.data.refreshToken};He(O.data.token),sg(ie),og(ie)},Mt=()=>{try{e(!1)}catch(O){H(String(O))}},y4=async()=>{$(!0);try{const O={email:t.trim(),firstName:r.trim(),lastName:i.trim(),password:l};j.trim()&&(O.referalCode=j.trim());const Ne=await(await fetch(`${de}/api/v1/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)})).json();Ne.status?(Bn(Ne),Q(te.OTP)):H(Ne.message+(Ne.details??""))}catch{H("Network error — please check your connection and try again.")}finally{$(!1)}},b4=async()=>{$(!0);try{const ie=await(await fetch(`${de}/api/v1/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:b.trim(),password:g})})).json();ie.status?(Bn(ie),H("Welcome back! Signing you in…",!0),setTimeout(Mt,900)):H(ie.message+(ie.details??""))}catch{H("Network error — please check your connection and try again.")}finally{$(!1)}},w4=async O=>{if(!(O!=null&&O.credential)){H("Google sign-in didn't return a credential — please try again.");return}const ie=Fn.current!==te.SIGNUP,Ne=ie?`${de}/api/v1/auth/login`:`${de}/api/v1/auth/google/register`;q(!0);try{const wn=await(await fetch(Ne,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id_token:O.credential})})).json();wn.status?(Bn(wn),ie?(H("Welcome back! Signing you in…",!0),setTimeout(Mt,900)):Q(te.OTP)):H(wn.message+(wn.details??""))}catch{H("Network error — please check your connection and try again.")}finally{q(!1)}};p.useEffect(()=>{var ja,wn;const O=()=>{var Ac,Dc;(Dc=(Ac=window.google)==null?void 0:Ac.accounts)!=null&&Dc.id&&(window.google.accounts.id.initialize({client_id:ag,callback:w4,ux_mode:"popup"}),ut(!0))},ie=document.getElementById(E0);if(ie){(wn=(ja=window.google)==null?void 0:ja.accounts)!=null&&wn.id?O():ie.addEventListener("load",O);return}const Ne=document.createElement("script");Ne.src=ig,Ne.id=E0,Ne.async=!0,Ne.defer=!0,Ne.onload=O,Ne.onerror=()=>console.warn("Google Identity script failed to load — likely blocked by an ad blocker or browser extension (common on desktop, rarer on mobile)."),document.body.appendChild(Ne)},[]),p.useEffect(()=>{var O,ie;!Yt||!Y.current||!((ie=(O=window.google)==null?void 0:O.accounts)!=null&&ie.id)||(Fn.current=A,Y.current.innerHTML="",window.google.accounts.id.renderButton(Y.current,{type:"standard",theme:"outline",size:"large",width:320}))},[Yt,A]);const k4=async()=>{if(!(Se>0)){oe(!0);try{(await fetch(`${de}/api/v1/send/sms/otp`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${le}`},body:JSON.stringify({msisdn:m})})).ok?(H("OTP sent successfully!",!0),ce(!0),Et()):H("Failed to send OTP — please try again.")}catch{H("Network error — please retry.")}finally{oe(!1)}}},C4=async()=>{if(!w||String(w).length!==6){H("Please enter the 6-digit OTP code.");return}oe(!0);try{(await fetch(`${de}/api/v1/verification`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${le}`},body:JSON.stringify({path:"msisdn",otp:w})})).ok?(H("Phone verified! You're all set.",!0),setTimeout(Mt,900)):H("Verification failed — check the code and try again."),ce(!0)}catch{H("Network error — please retry.")}finally{oe(!1)}},j4=async()=>{if(!Ks(x)){H("Enter a valid email address.");return}$(!0);try{await fetch(`${de}/api/v1/auth/forgot-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:x.trim()})}),Q(te.RESET_SENT)}catch{H("Network error — please try again.")}finally{$(!1)}},S4=()=>{if(!Ks(t)){H("Add a valid email e.g. you@example.com");return}if(r.trim().length<2){H("First name must be at least 2 characters");return}if(i.trim().length<2){H("Last name must be at least 2 characters");return}if(!l){H("Please enter a password");return}if(/\s/.test(l)){H("Password must not contain spaces");return}if(l.length<5){H("Password must be at least 5 characters");return}if(u!==l){H("Passwords do not match");return}if(!R){H("Please accept the Terms & Privacy Policy to continue");return}y4()},N4=()=>{if(!Ks(b)){H("Add a valid email e.g. you@example.com");return}if(/\s/.test(b)){H("Email must not contain spaces");return}if(!g){H("Please enter your password");return}if(/\s/.test(g)){H("Password must not contain spaces");return}if(g.length<5){H("Password must be at least 5 characters");return}b4()},E4=()=>{if(m.replace(/\D/g,"").length<9){H("Add a valid phone number including country code (e.g. +233…)");return}k4()},ms=()=>s.jsxs("div",{className:"noted",style:{justifyContent:"center",opacity:.5,gap:8},children:[s.jsx("span",{style:{flex:1,height:1,background:"rgba(255,255,255,.35)",display:"inline-block"}}),s.jsx("small",{children:"or"}),s.jsx("span",{style:{flex:1,height:1,background:"rgba(255,255,255,.35)",display:"inline-block"}})]}),_4=({returnView:O})=>s.jsxs("div",{className:"noted",style:{fontSize:".72rem",opacity:.55,justifyContent:"center",flexWrap:"wrap",gap:4},children:["By continuing you agree to our ",s.jsx("span",{style:{textDecoration:"underline",cursor:"pointer",color:"cyan"},onClick:()=>{Ie(O),Q(te.TERMS)},children:"Terms"})," & ",s.jsx("span",{style:{textDecoration:"underline",cursor:"pointer",color:"cyan"},onClick:()=>{Ie(O),Q(te.POLICY)},children:"Privacy Policy"})]}),Mc=({children:O})=>s.jsx("div",{style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:10,padding:"1rem 1.2rem",maxHeight:320,overflowY:"auto",fontSize:".82rem",color:"rgba(255,255,255,0.82)",lineHeight:1.7},children:O}),xe={margin:"1rem 0 .3rem",fontSize:".87rem",fontWeight:600,color:"#fff"},ye={margin:"0 0 .25rem"},gs={color:"#aad4ff"},Ic=({title:O,subtitle:ie,children:Ne})=>s.jsx("div",{children:s.jsxs("div",{className:"register",children:[F.visible&&s.jsx("div",{className:"successmessage",children:F.isSuccess?`🟢 ${F.message} 🥳`:`🔴 ${F.message}`}),s.jsx("img",{className:"regpic",src:Ga,alt:""}),s.jsxs("div",{className:"regbox",children:[s.jsxs("div",{className:"racoonbox",children:[s.jsx("img",{className:"racoondp",src:S0,alt:""}),s.jsxs("div",{className:"racoonintro",children:[s.jsx("div",{className:"rbackdrop",style:{zIndex:2}}),s.jsx("div",{className:"wmessage",children:O}),s.jsx("div",{className:"regnote",children:ie})]})]}),s.jsx("div",{className:"half ",children:s.jsx("div",{className:"regform",children:s.jsxs("div",{className:"mbox",style:{display:"flex",flexDirection:"column",gap:".75rem"},children:[Ne,s.jsxs("div",{className:"regbutton",onClick:()=>Q(ge),children:[s.jsx(ga,{className:"micon"})," Got it — go back"]})]})})}),s.jsx("img",{className:"tinylogo",style:{zIndex:2},src:qa,alt:""})]})]})});return A===te.POLICY?s.jsx(Ic,{title:"Privacy Policy",subtitle:"Last updated "+new Date().toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}),children:s.jsxs(Mc,{children:[s.jsx("h3",{style:xe,children:"1. Information We Collect"}),s.jsx("p",{style:ye,children:"We collect your name, email, phone number, and password when you register, plus usage data (pages visited, features used) to improve your experience."}),s.jsx("h3",{style:xe,children:"2. How We Use Your Data"}),s.jsx("p",{style:ye,children:"Your data operates and personalises UELearn, delivers OTP codes, and improves the platform. We do not sell your personal data to third parties."}),s.jsx("h3",{style:xe,children:"3. Data Sharing"}),s.jsx("p",{style:ye,children:"We share data only with providers who help us run UELearn (cloud infrastructure, SMS delivery). All are bound by data processing agreements. We may disclose data where required by law."}),s.jsx("h3",{style:xe,children:"4. Cookies & Storage"}),s.jsxs("p",{style:ye,children:["We use session tokens stored in ",s.jsx("code",{style:{background:"rgba(255,255,255,.15)",padding:"0 4px",borderRadius:3},children:"localStorage"})," to keep you signed in. We do not use third-party advertising trackers."]}),s.jsx("h3",{style:xe,children:"5. Data Retention"}),s.jsx("p",{style:ye,children:"Account data is kept while your account is active. You may request deletion at any time by emailing us."}),s.jsx("h3",{style:xe,children:"6. Your Rights"}),s.jsxs("p",{style:ye,children:["You may access, correct, or delete your data. Contact ",s.jsx("a",{href:"mailto:privacy@uelearn.app",style:gs,children:"privacy@uelearn.app"}),"."]}),s.jsx("h3",{style:xe,children:"7. Security"}),s.jsx("p",{style:ye,children:"We use industry-standard encryption and access controls. Use a strong, unique password and keep it private."}),s.jsx("h3",{style:xe,children:"8. Changes"}),s.jsx("p",{style:ye,children:"Significant changes will be notified via email or in-app notice. Continued use constitutes acceptance of the updated policy."}),s.jsx("h3",{style:xe,children:"9. Contact"}),s.jsx("p",{style:ye,children:s.jsx("a",{href:"mailto:privacy@uelearn.app",style:gs,children:"privacy@uelearn.app"})})]})}):A===te.TERMS?s.jsx(Ic,{title:"Terms of Service",subtitle:"Last updated "+new Date().toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}),children:s.jsxs(Mc,{children:[s.jsx("h3",{style:xe,children:"1. Acceptance"}),s.jsx("p",{style:ye,children:"By creating a UELearn account you agree to these Terms. If you disagree, do not use the platform."}),s.jsx("h3",{style:xe,children:"2. Eligibility"}),s.jsx("p",{style:ye,children:"You must be at least 13 years old. If under 18, you confirm you have parental or guardian consent."}),s.jsx("h3",{style:xe,children:"3. Account Responsibility"}),s.jsx("p",{style:ye,children:"You are responsible for keeping your credentials confidential and for all activity under your account. Notify us immediately of any unauthorised access."}),s.jsx("h3",{style:xe,children:"4. Acceptable Use"}),s.jsx("p",{style:ye,children:"You agree not to share content in ways that violate academic integrity, reverse-engineer the platform, impersonate others, or upload unlawful material."}),s.jsx("h3",{style:xe,children:"5. Intellectual Property"}),s.jsx("p",{style:ye,children:"All content, design, and software on UELearn is owned by or licensed to us. No reproduction or distribution without written permission."}),s.jsx("h3",{style:xe,children:"6. Subscriptions & Payments"}),s.jsx("p",{style:ye,children:"Paid features are billed in advance and are non-refundable except where required by law. Pricing changes come with 30 days' notice."}),s.jsx("h3",{style:xe,children:"7. Termination"}),s.jsx("p",{style:ye,children:"We may suspend or terminate accounts that violate these Terms. You may delete your account from settings at any time."}),s.jsx("h3",{style:xe,children:"8. Disclaimer"}),s.jsx("p",{style:ye,children:'UELearn is provided "as is." We do not guarantee specific academic outcomes. Results depend on individual effort.'}),s.jsx("h3",{style:xe,children:"9. Limitation of Liability"}),s.jsx("p",{style:ye,children:"Our liability is limited to the amount you paid us in the 12 months preceding any claim, to the fullest extent permitted by law."}),s.jsx("h3",{style:xe,children:"10. Governing Law"}),s.jsx("p",{style:ye,children:"These Terms are governed by the laws of Ghana. Disputes shall be resolved in Accra, Ghana."}),s.jsx("h3",{style:xe,children:"11. Contact"}),s.jsx("p",{style:ye,children:s.jsx("a",{href:"mailto:legal@uelearn.app",style:gs,children:"legal@uelearn.app"})})]})}):s.jsx("div",{children:s.jsxs("div",{className:"register",children:[F.visible&&s.jsx("div",{className:"successmessage",children:F.isSuccess?`🟢 ${F.message} 🥳🥳🥳`:`🔴 ${F.message}`}),s.jsx("img",{className:"regpic",src:Ga,alt:""}),s.jsxs("div",{className:"regbox",children:[s.jsxs("div",{className:"racoonbox",children:[s.jsx("img",{className:"racoondp",src:S0,alt:""}),s.jsxs("div",{className:"racoonintro",children:[s.jsx("div",{className:"rbackdrop",style:{zIndex:2}}),s.jsx("div",{className:"wmessage",children:"Welcome to UELearn"}),s.jsx("div",{className:"regnote",children:"study with aura !"})]})]}),s.jsx("div",{className:"half half2",children:s.jsxs("div",{className:"picked",children:[s.jsx("img",{src:Ga,className:"brown",alt:""}),s.jsx("img",{src:Ga,className:"brown mask",alt:""})]})}),s.jsx("div",{className:"half",children:s.jsxs("div",{className:"regform",children:[A===te.FORGOT&&s.jsxs("div",{className:"mbox",children:[s.jsxs("div",{className:"noted",style:{cursor:"pointer"},onClick:()=>Q(te.LOGIN),children:[s.jsx(ga,{className:"micon"})," Back to sign in"]}),s.jsxs("div",{className:"noted",style:{flexDirection:"column",alignItems:"flex-start",gap:4},children:[s.jsx("strong",{style:{color:"#fff",fontSize:"1rem"},children:"Reset your password"}),s.jsx("span",{children:"Enter your registered email — we'll send a reset link right away."})]}),s.jsx(Xs,{googleLoading:W,containerRef:Y}),"                  ",s.jsx(ms,{}),s.jsxs("div",{className:"inputform",children:[s.jsx(li,{className:"micon"}),s.jsx("input",{onChange:O=>k(O.target.value),type:"email",placeholder:"EMAIL",autoComplete:"email",className:"impbox"})]}),s.jsx("div",{className:"regbutton",onClick:j4,children:L?"Sending…":"Send reset link"})]}),A===te.RESET_SENT&&s.jsxs("div",{className:"mbox",children:[s.jsx("div",{style:{textAlign:"center",fontSize:"2.5rem",lineHeight:1},children:"✉️"}),s.jsxs("div",{className:"noted",style:{flexDirection:"column",alignItems:"center",gap:6,textAlign:"center"},children:[s.jsx("strong",{style:{color:"#fff",fontSize:"1rem"},children:"Check your inbox"}),s.jsxs("span",{children:["If ",s.jsx("strong",{children:x})," is linked to an account, a reset link is on its way. Also check your spam folder."]})]}),s.jsx("div",{className:"regbutton",onClick:()=>Q(te.LOGIN),children:"Back to sign in"})]}),A===te.LOGIN&&s.jsxs("div",{className:"mbox",children:[s.jsx("img",{className:"tlogo",style:{zIndex:2},src:qa,alt:""}),s.jsx("div",{class:"title",children:"UE LEARN"}),s.jsx(Xs,{googleLoading:W,containerRef:Y}),"                  ",s.jsx(ms,{}),s.jsxs("div",{className:"inputform",children:[s.jsx(li,{className:"micon"}),s.jsx("input",{onChange:O=>C(O.target.value),type:"email",placeholder:"EMAIL",autoComplete:"email",className:"impbox"})]}),s.jsxs("div",{className:"inputform",children:[ct?s.jsx(Zs,{className:"micon",style:{cursor:"pointer"},onClick:()=>Ae(!1)}):s.jsx(Ys,{className:"micon",style:{cursor:"pointer"},onClick:()=>Ae(!0)}),s.jsx("input",{onChange:O=>f(O.target.value),type:ct?"text":"password",placeholder:"PASSWORD",autoComplete:"current-password",className:"impbox"})]}),s.jsx("div",{className:"noted",style:{justifyContent:"flex-end"},children:s.jsx("span",{style:{cursor:"pointer",textDecoration:"underline",opacity:.75,color:"cyan",fontSize:".8rem"},onClick:()=>Q(te.FORGOT),children:"Forgot password?"})}),s.jsx("div",{className:"regbutton",onClick:N4,children:L?"Signing in…":"Sign in"}),s.jsxs("div",{className:"noted",children:[s.jsx(Dr,{className:"micon"})," Don't have an account?"]}),s.jsx("div",{className:"regbutton",style:{background:"black",color:"white"},onClick:()=>Q(te.SIGNUP),children:"Sign Up Instead?"}),s.jsx(_4,{returnView:te.LOGIN})]}),A===te.SIGNUP&&s.jsxs("div",{className:"mbox",children:[s.jsx("img",{className:"tlogo",style:{zIndex:2},src:qa,alt:""}),s.jsx("div",{class:"title",children:"UE LEARN"}),s.jsx(Xs,{googleLoading:W,blocked:!R,blockedMessage:"Please accept the Terms & Privacy Policy to continue.👇",onBlockedClick:H,containerRef:Y}),s.jsx(ms,{}),s.jsxs("div",{className:"inputform",children:[s.jsx(li,{className:"micon"}),s.jsx("input",{onChange:O=>n(O.target.value),type:"email",placeholder:"EMAIL",autoComplete:"email",className:"impbox"})]}),s.jsxs("div",{className:"inputform",children:[s.jsx(v0,{className:"micon"}),s.jsx("input",{onChange:O=>a(O.target.value),type:"text",placeholder:"FIRST NAME",autoComplete:"given-name",className:"impbox"})]}),s.jsxs("div",{className:"inputform",children:[s.jsx(v0,{className:"micon"}),s.jsx("input",{onChange:O=>o(O.target.value),type:"text",placeholder:"LAST NAME",autoComplete:"family-name",className:"impbox"})]}),s.jsxs("div",{className:"inputform",children:[ct?s.jsx(Zs,{className:"micon",style:{cursor:"pointer"},onClick:()=>Ae(!1)}):s.jsx(Ys,{className:"micon",style:{cursor:"pointer"},onClick:()=>Ae(!0)}),s.jsx("input",{onChange:O=>c(O.target.value),type:ct?"text":"password",placeholder:"PASSWORD",autoComplete:"new-password",className:"impbox"})]}),s.jsxs("div",{className:"inputform",children:[De?s.jsx(Zs,{className:"micon",style:{cursor:"pointer"},onClick:()=>z(!1)}):s.jsx(Ys,{className:"micon",style:{cursor:"pointer"},onClick:()=>z(!0)}),s.jsx("input",{onChange:O=>d(O.target.value),type:De?"text":"password",placeholder:"CONFIRM PASSWORD",autoComplete:"new-password",className:"impbox"})]}),N?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"regbutton",onClick:()=>_(!1),children:"Remove referral section"}),s.jsxs("div",{className:"inputform",children:[s.jsx(_m,{className:"micon"}),s.jsx("input",{className:"impbox",type:"text",onChange:O=>S(O.target.value),placeholder:"REFERRAL CODE"})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"noted",children:[s.jsx(Dr,{className:"micon"})," Optional: Add referral code"]}),s.jsx("div",{className:"regbutton",onClick:()=>_(!0),children:"Add referral code"})]}),s.jsxs("label",{className:"noted",style:{cursor:"pointer",userSelect:"none",gap:8,alignItems:"flex-start"},children:[s.jsx("input",{type:"checkbox",checked:R,onChange:O=>T(O.target.checked),style:{marginTop:3,accentColor:"#fff",cursor:"pointer",flexShrink:0}}),s.jsxs("span",{style:{fontSize:".78rem",lineHeight:1.6},children:["I agree to the ",s.jsx("span",{style:{textDecoration:"underline",cursor:"pointer",color:"cyan"},onClick:O=>{O.preventDefault(),Ie(te.SIGNUP),Q(te.TERMS)},children:"Terms of Service"})," and ",s.jsx("span",{style:{textDecoration:"underline",cursor:"pointer",color:"cyan"},onClick:O=>{O.preventDefault(),Ie(te.SIGNUP),Q(te.POLICY)},children:"Privacy Policy"})]})]}),s.jsxs("div",{className:"otpverbox",children:[s.jsx("div",{className:"regbutton",onClick:S4,children:L?"Creating...":"Sign Up"}),s.jsx("div",{className:"regbutton",style:{background:"black",color:"white"},onClick:()=>Q(te.LOGIN),children:"Login Instead?"})]})]}),A===te.OTP&&s.jsxs("div",{className:"tootp",children:[s.jsxs("div",{className:"inputform",children:[s.jsx(dl,{}),s.jsx("input",{onChange:O=>h(O.target.value),type:"tel",placeholder:"PHONE (e.g. +233XXXXXXXXX)",autoComplete:"tel",className:"impbox"})]}),s.jsxs("div",{className:"noted",children:[s.jsx(Dr,{className:"micon"})," Click Verify to receive your OTP code"]}),s.jsxs("div",{className:"otpverbox",children:[s.jsxs("div",{className:"otpver",onClick:E4,children:[s.jsx(yc,{className:"micon"}),Oe?"Sending…":"Verify"]}),s.jsxs("div",{className:"resend",children:[s.jsx(bc,{className:"micon"}),s.jsx("span",{className:"count",children:Se>0?`Resend in ${Se}s`:"Ready to resend"})]})]}),s.jsxs("div",{className:"inputform",children:[s.jsx(I2,{}),s.jsx("input",{onChange:O=>y(O.target.value),type:"number",placeholder:"OTP CODE HERE (6 DIGIT)",className:"impbox"})]}),s.jsx("div",{className:"regbutton",onClick:C4,children:Oe?"Verifying…":"Proceed"}),V&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"noted",children:[s.jsx(Dr,{className:"micon"})," Didn't receive OTP? You can skip and verify later"]}),s.jsxs("div",{className:"skipbtn",onClick:Mt,children:[s.jsx("i",{className:"arrow-right"})," ","Skip >"]})]})]})]})}),s.jsx("img",{className:"tinylogo",style:{zIndex:2},src:qa,alt:""})]})]})})}const Fe=`:root{--lrn-bg: #0d0f1400;--lrn-surface: #13161e;--lrn-border: #252837;--lrn-purple: #7F77DD;--lrn-purple-dim: #534AB7;--lrn-teal: #1D9E75;--lrn-text-head: #f0eeff;--lrn-text-card: #e8e5ff;--lrn-text-muted: #8b8fa6;--lrn-text-body: #6b6e84;--lrn-text-footer: #5a5e75;--lrn-radius-wrap: 20px;--lrn-radius-card: 14px}.wrap{position:relative;margin-top:100px;overflow:hidden;background:var(--lrn-bg);padding:0rem 2.5rem 2.5rem;width:100%;font-family:DM Sans,sans-serif}.glowA{position:absolute;top:-120px;left:-80px;width:360px;height:360px;background:radial-gradient(circle,rgba(83,74,183,.18) 0%,transparent 70%);pointer-events:none}.glowB{position:absolute;bottom:-80px;right:-60px;width:280px;height:280px;background:radial-gradient(circle,rgba(29,158,117,.13) 0%,transparent 70%);pointer-events:none}.eyebrow{margin:0 0 .75rem;font-size:11px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--lrn-purple-dim)}.heading{margin:0 0 .6rem;font-family:Syne,sans-serif;font-size:26px;font-weight:700;color:var(--lrn-text-head);line-height:1.2}.intro{margin:0 0 2.5rem;max-width:520px;font-size:14px;font-weight:300;color:var(--lrn-text-muted);line-height:1.7}.grid{position:relative;z-index:1;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px}.card{background:var(--lrn-surface);border:.5px solid var(--lrn-border);border-radius:var(--lrn-radius-card);padding:1.25rem 1.1rem 1.1rem;transition:border-color .2s ease,transform .2s ease;cursor:default}.card--purple:hover{border-color:var(--lrn-purple);transform:translateY(-2px)}.card--teal:hover{border-color:var(--lrn-teal);transform:translateY(-2px)}.cardIcon{display:block;font-size:20px;margin-bottom:.75rem}.cardNum{margin:0 0 .6rem;font-family:Syne,sans-serif;font-size:11px;font-weight:600;letter-spacing:.1em;opacity:.9}.num--purple{color:var(--lrn-purple)}.num--teal{color:var(--lrn-teal)}.cardTitle{margin:0 0 .55rem;font-family:Syne,sans-serif;font-size:13.5px;font-weight:600;color:var(--lrn-text-card);line-height:1.3}.cardBody{margin:0;font-size:12.5px;font-weight:300;color:var(--lrn-text-body);line-height:1.65}.footer{position:relative;z-index:1;margin-top:2rem;padding-top:1.5rem;border-top:.5px solid #1e2130;font-size:13px;font-weight:300;font-style:italic;color:var(--lrn-text-footer);line-height:1.7}
`,cg=[{num:"01",label:"Retrieval Practice",title:"Remember repeatedly",body:"Recalling information more than once significantly boosts future accessibility in your memory.",icon:"🔁",accent:"purple"},{num:"02",label:"Testing",title:"Attempt, don't just read",body:"Answering questions or explaining concepts to others reinforces learning and surfaces gaps.",icon:"✏️",accent:"teal"},{num:"03",label:"Spaced Repetition",title:"Review over time",body:"Revisiting material at increasing intervals trains your brain to keep information long-term.",icon:"🕐",accent:"purple"},{num:"04",label:"Dual Coding",title:"Verbal + visual",body:"Engaging both language and imagery channels at once dramatically raises the chance of recall.",icon:"🖼️",accent:"teal"},{num:"05",label:"Personal Connection",title:"Make it yours",body:"Linking new material to your own experiences makes it feel relevant — and far easier to remember.",icon:"❤️",accent:"purple"}];function ug(){return s.jsxs("div",{className:Fe.wrap,children:[s.jsxs("div",{className:"midmessage",children:[s.jsxs("div",{className:"midleft",children:[s.jsxs("div",{className:"welcome",children:[s.jsx("i",{className:"bga",children:"🤗"}),s.jsx("span",{className:"welcome",style:{textTransform:"uppercase"},children:"HI !"})]}),s.jsx("div",{className:"rbackdropa"}),s.jsx("div",{className:"rbackdropb"}),s.jsx("div",{className:"rbackdropc"}),s.jsx("div",{className:"welcmessage",id:"welcid",children:"Practice makes perfect. Keep your self busy with the resources we provide."}),s.jsx(eg,{})]}),s.jsx("div",{className:"midleft",children:s.jsx("img",{className:"messagepic",src:K9,alt:""})})]}),s.jsx("div",{className:Fe.glowA,"aria-hidden":"true"}),s.jsx("div",{className:Fe.glowB,"aria-hidden":"true"}),s.jsx("p",{className:Fe.eyebrow,children:"⚙ What we help you solve"}),s.jsx("h2",{className:Fe.heading,children:"Learn smarter, not harder."}),s.jsx("p",{className:Fe.intro,children:"Modern psychology shows the best way to retain knowledge is through active learning — techniques that make your brain work to recall information, not just passively absorb it."}),s.jsx("div",{className:Fe.grid,children:cg.map(e=>s.jsxs("div",{className:`${Fe.card} ${Fe[`card--${e.accent}`]}`,children:[s.jsx("span",{className:Fe.cardIcon,"aria-hidden":"true",children:e.icon}),s.jsxs("p",{className:`${Fe.cardNum} ${Fe[`num--${e.accent}`]}`,children:[e.num," — ",e.label]}),s.jsx("p",{className:Fe.cardTitle,children:e.title}),s.jsx("p",{className:Fe.cardBody,children:e.body})]},e.num))}),s.jsx("p",{className:Fe.footer,children:"These strategies are grounded in decades of cognitive research, designed to give you the most from every hour you study."})]})}function dg(){const[e,t]=p.useState(!1);return s.jsxs("div",{className:"telegram-wrapper",children:[s.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@400;600;700&display=swap');

        .telegram-wrapper {
          --telegram-blue: #00ff4c;
          --telegram-light: #64b5f6;
          --telegram-dark: #005f8c;
          --bg-gradient-start: #001a2e;
          --bg-gradient-end: #003d5c;
          --accent-glow: rgba(0, 136, 204, 0.4);
          --text-primary: #ffffff;
          --text-secondary: #b0e0ff;
          
          position: relative;
          padding: 80px 24px;
          overflow: hidden;
          isolation: isolate;
          padding-top: 250px;
          padding-bottom:160px;
        }

        /* Animated background particles */
        .telegram-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 30%, black 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(100, 180, 246, 0) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, black 0%, transparent 50%);
          animation: pulseGlow 8s ease-in-out infinite;
          z-index: 0;
        }

        /* Floating message bubbles decoration */
        .telegram-wrapper::after {
          content: '';
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 2px solid rgba(0, 136, 204, 0.15);
          top: -100px;
          right: -100px;
          animation: float 20s linear infinite;
          z-index: 0;
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(-100px, 100px) rotate(360deg); }
        }

        .telegram {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          max-width: 800px;
          margin: 0 auto;
        }

        .telegram-logo-container {
          position: relative;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .telegram-logo-container:hover {
          transform: scale(1.05);
        }

        .telegram-logo-container:active {
          transform: scale(0.95);
        }

        /* Pulsing ring effect */
        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 140px;
          height: 140px;
          border: 3px solid var(--telegram-light);
          border-radius: 50%;
          animation: pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          opacity: 0;
        }

        @keyframes pulseRing {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.4);
            opacity: 0;
          }
        }

        .telegram-svg {
          width: 100px;
          height: 100px;
          filter: drop-shadow(0 10px 40px var(--accent-glow));
          position: relative;
          z-index: 2;
        }

        /* Animated plane */
        .plane-path {
          transform-origin: center;
          transition: transform 0.3s ease;
        }

        .telegram-logo-container:hover .plane-path {
          animation: planeSend 0.6s ease-out;
        }

        @keyframes planeSend {
          0% { transform: translate(0, 0) rotate(0deg); }
          30% { transform: translate(5px, -5px) rotate(-5deg); }
          60% { transform: translate(10px, -10px) rotate(-8deg) scale(0.95); opacity: 0.7; }
          100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
        }

        /* Particle effects */
        .particles {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--telegram-light);
          border-radius: 50%;
          opacity: 0;
        }

        .telegram-logo-container:hover .particle {
          animation: particleBurst 0.8s ease-out forwards;
        }

        .particle:nth-child(1) { animation-delay: 0s; }
        .particle:nth-child(2) { animation-delay: 0.05s; }
        .particle:nth-child(3) { animation-delay: 0.1s; }
        .particle:nth-child(4) { animation-delay: 0.15s; }
        .particle:nth-child(5) { animation-delay: 0.2s; }

        @keyframes particleBurst {
          0% {
            transform: translate(-50%, -50%) translate(0, 0) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) translate(var(--tx), var(--ty)) scale(1);
            opacity: 0;
          }
        }

        .telegram-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .telegram-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 400;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          line-height: 1;
          margin: 0;
          text-transform: uppercase;
          position: relative;
          display: inline-block;
        }

        .itext {
          display: inline-block;
          background: linear-gradient(135deg, var(--telegram-light) 0%, var(--telegram-blue) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
          margin-right: 0.3em;
          position: relative;
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.3); }
        }

        .telegram-subtitle {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.1rem, 3vw, 1.5rem);
          font-weight: 400;
          color: var(--text-secondary);
          margin: 0;
          letter-spacing: 0.02em;
        }

        .telegram-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: 16px;
          padding: 18px 48px;
          background: linear-gradient(135deg, var(--telegram-blue) 0%, var(--telegram-dark) 100%);
          border: 2px solid var(--telegram-light);
          border-radius: 50px;
          color: var(--text-primary);
          font-family: 'Outfit', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 10px 40px rgba(0, 136, 204, 0.3);
        }

        .telegram-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .telegram-cta:hover::before {
          left: 100%;
        }

        .telegram-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 50px rgba(0, 136, 204, 0.5);
          border-color: var(--text-primary);
        }

        .telegram-cta:active {
          transform: translateY(-1px);
        }

        .cta-arrow {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .telegram-cta:hover .cta-arrow {
          transform: translateX(5px);
        }

        /* Decorative dots */
        .dots-decoration {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 8px;
        }

        .dot {
          width: 8px;
          height: 8px;
          background: var(--telegram-light);
          border-radius: 50%;
          animation: dotPulse 1.5s ease-in-out infinite;
        }

        .dot:nth-child(1) { animation-delay: 0s; }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes dotPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .telegram-wrapper {
            padding: 60px 20px;
          }

          .telegram {
            gap: 24px;
          }

          .telegram-svg {
            width: 80px;
            height: 80px;
          }

          .pulse-ring {
            width: 120px;
            height: 120px;
          }

          .telegram-cta {
            padding: 16px 36px;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .telegram-wrapper {
            padding: 50px 16px;
          }

          .telegram-svg {
            width: 70px;
            height: 70px;
          }

          .telegram-cta {
            padding: 14px 32px;
            font-size: 0.95rem;
          }
        }
      `}),s.jsxs("div",{className:"telegram",children:[s.jsxs("a",{href:"https://t.me/uepasco",rel:"noopener noreferrer",target:"_blank",className:"telegram-logo-container",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[s.jsx("div",{className:"pulse-ring"}),s.jsx("div",{className:"pulse-ring",style:{animationDelay:"1s"}}),s.jsxs("svg",{className:"telegram-svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:[s.jsxs("defs",{children:[s.jsxs("linearGradient",{id:"planeGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",style:{stopColor:"#00000000",stopOpacity:1}}),s.jsx("stop",{offset:"100%",style:{stopColor:"#0088cc00",stopOpacity:1}})]}),s.jsxs("linearGradient",{id:"circleGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",style:{stopColor:"#0088cc00",stopOpacity:1}}),s.jsx("stop",{offset:"100%",style:{stopColor:"#00608c00",stopOpacity:1}})]})]}),s.jsx("circle",{cx:"50",cy:"50",r:"48",fill:"url(#circleGradient)"}),s.jsxs("g",{className:"plane-path",children:[s.jsx("path",{d:"M25 50 L70 30 L45 75 L40 55 L60 40 L35 52 Z",fill:"white"}),s.jsx("path",{d:"M40 55 L45 75 L50 65 Z",fill:"white",opacity:"0.7"})]})]}),s.jsxs("div",{className:"particles",children:[s.jsx("div",{className:"particle",style:{"--tx":"-30px","--ty":"-30px"}}),s.jsx("div",{className:"particle",style:{"--tx":"30px","--ty":"-30px"}}),s.jsx("div",{className:"particle",style:{"--tx":"-30px","--ty":"30px"}}),s.jsx("div",{className:"particle",style:{"--tx":"30px","--ty":"30px"}}),s.jsx("div",{className:"particle",style:{"--tx":"0px","--ty":"-40px"}})]})]}),s.jsxs("div",{className:"telegram-content",children:[s.jsx("span",{className:"itext",children:"Join"}),"Our Telegram",s.jsx("p",{className:"telegram-subtitle",children:"Connect with our vibrant community"}),s.jsxs("div",{className:"dots-decoration",children:[s.jsx("div",{className:"dot"}),s.jsx("div",{className:"dot"}),s.jsx("div",{className:"dot"})]}),s.jsxs("a",{href:"https://t.me/uepasco",rel:"noopener noreferrer",target:"_blank",className:"telegram-cta",children:["Join Community",s.jsx("span",{className:"cta-arrow",children:"→"})]})]})]})]})}const pg=`

  .amb-nav {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 4px;
    background: rgba(10,12,28,0.8);
    border: 1px solid rgba(255,255,255,0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 24px;
    padding: 8px 12px;
    box-shadow: 0 8px 40px rgba(0,0,0,0.5);
    white-space: nowrap;
  }
  .amb-nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 8px 14px;
    border-radius: 16px;
    color: rgba(255,255,255,0.4);
    font-size: 10px;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: all 0.2s ease;
    min-width: 52px;
  }
  .amb-nav-item:hover { color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.06); }
  .amb-nav-item.active { color: #c4b5fd; background: rgba(139,92,246,0.15); }
  .amb-nav-icon { font-size: 18px; line-height: 1; display: flex; align-items: center; justify-content: center; }
  .amb-nav-logo { width: 20px; height: 20px; object-fit: contain; opacity: 0.5; transition: opacity 0.2s; }
  .amb-nav-item:hover .amb-nav-logo, .amb-nav-item.active .amb-nav-logo { opacity: 1; }
    @media (max-width: 600px) {
    .amb-card { padding: 32px 24px; border-radius: 20px; }
    .amb-nav-item { padding: 8px 10px; min-width: 44px; }
    .amb-nav-label { display: none; }
  }

`;function Rc({cname:e="",active:t=""}){return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:pg}),s.jsx("div",{className:e,children:s.jsxs("nav",{className:"amb-nav ",children:[s.jsxs(ht,{to:"/",className:`amb-nav-item ${t=="home"?"active":""}`,children:[s.jsx("span",{className:"amb-nav-icon",children:s.jsx("img",{className:"amb-nav-logo",src:Ot,alt:""})}),s.jsx("span",{className:"amb-nav-label",children:"Home"})]}),s.jsxs(ht,{to:"/about",className:`amb-nav-item ${t=="about"?"active":""}`,children:[s.jsx("span",{className:"amb-nav-icon",children:s.jsx(Bm,{})}),s.jsx("span",{className:"amb-nav-label",children:"About"})]}),s.jsxs(ht,{to:"/contact",className:`amb-nav-item ${t=="contact"?"active":""}`,children:[s.jsx("span",{className:"amb-nav-icon",children:s.jsx(kc,{})}),s.jsx("span",{className:"amb-nav-label",children:"Contact"})]}),s.jsxs(ht,{to:"/payment",className:`amb-nav-item ${t=="payment"?"active":""}`,target:"_blank",rel:"noopener noreferrer",children:[s.jsx("span",{className:"amb-nav-icon",children:s.jsx(wc,{})}),s.jsx("span",{className:"amb-nav-label",children:"Upgrade"})]})]})})]})}const fg="https://benasdom.github.io/ugpascoapi/ugpasco.json",_0=new Date("Jan 2, 2026 00:00:00").getTime();function t4(){try{const e=localStorage.getItem("userInfo");return e?JSON.parse(e):null}catch{return null}}function hg(e){try{const t=t4()??{};localStorage.setItem("userInfo",JSON.stringify({...t,...e}))}catch{}}function z0(e){if(e<=0)return null;const t=Math.floor(e/(1e3*60*60*24)),n=Math.floor(e%(1e3*60*60*24)/(1e3*60*60)),r=Math.floor(e%(1e3*60*60)/(1e3*60)),a=Math.floor(e%(1e3*60)/1e3);return`${t}d ${n}h ${r}m ${a}s left`}function mg(){af();const[e,t]=p.useState(!0),[n,r]=p.useState(!1),[a,i]=p.useState(""),[o,l]=p.useState("Type the course c⚾de in the search bar above ... ☝🏼"),[c,u]=p.useState(!1),[d,m]=p.useState([]),[h,w]=p.useState(""),[y,b]=p.useState(0),[C,g]=p.useState(0),[f,x]=p.useState(""),[k,j]=p.useState(!1),[S,N]=p.useState(!1),[_,R]=p.useState("https://notfound.com"),[T,A]=p.useState("https://notfound.com"),[Q,ge]=p.useState(""),[Ie,ct]=p.useState(""),[Ae,De]=p.useState(""),[z,L]=p.useState(""),[$,W]=p.useState(()=>z0(_0-Date.now())),q=p.useRef(null),Oe=p.useRef(null);p.useEffect(()=>{if(!$)return;const D=setInterval(()=>{const le=_0-Date.now(),He=z0(le);He?W(He):(W(null),clearInterval(D))},1e3);return()=>clearInterval(D)},[]),p.useEffect(()=>{const D=`${new Date}`.split(" ");w(`${D[2]} ${D[1]} ${D[3]}`)},[]),p.useEffect(()=>{const D=t4();D&&Object.keys(D).length>0?(j(!1),ge(D.firstName??""),b(D.highestStreakScore??0),g(D.credits??0)):j(!0)},[]),p.useEffect(()=>{const D=()=>{const le=Vi("userInfo");(le==null?void 0:le.credits)!==void 0&&g(le.credits)};return window.addEventListener("storage",D),()=>window.removeEventListener("storage",D)},[]),p.useEffect(()=>{let D=!1;async function le(){var He;try{const V=await st(`${de}/api/v1/user/profile`,{method:"GET",headers:{"Content-Type":"application/json"}});if(D)return;const ce=((He=V==null?void 0:V.api_response)==null?void 0:He.data)??(V==null?void 0:V.data)??V??{},F=ce.firstName??"",ke=ce.highestStreakScore??0;F&&(hg(ce),ge(F),b(ke))}catch(V){if(D)return;V instanceof xr&&j(!0)}finally{D||t(!1)}}return le(),()=>{D=!0}},[]),p.useEffect(()=>{fetch(fg).then(D=>{if(!D.ok)throw new Error(`Status ${D.status}`);return D.json()}).then(D=>m(D.data??[])).catch(D=>{l(`Oops! Kindly check your internet connection 🔌💻🥺 (${D.message})`),u(!1)})},[]);const oe=p.useCallback(async()=>{var le,He;const D=(He=(le=Oe.current)==null?void 0:le.value)==null?void 0:He.trim();if(D){N(!0),L("");try{await st(`${de}/api/v1/test-telegram/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:`💡 *New Suggestion*
${D}`})}),Oe.current&&(Oe.current.value=""),L("Thanks for the suggestion!")}catch(V){V instanceof xr?L("Please sign in to send a suggestion."):L("Couldn't send that — try again.")}finally{N(!1),setTimeout(()=>L(""),3e3)}}},[]),Se={setdataerror:x,setcourseName:ct,setcredits:g,setpdflink:R,pdflink:_,setsearching:r,find:a,NetworkError:o,payload:d,bar:q,setfind:i,setactualDlink:A,actualDlink:T,dataerror:f,credits:C,courseName:Ie,selectedVal:Ae,setselectedVal:De,setRefreshing:u};return s.jsx(s.Fragment,{children:n?s.jsx(X9,{...Se}):s.jsxs("div",{className:"page",children:[s.jsxs("div",{className:"promo",style:{position:"relative",fontWeight:600},children:[s.jsx("span",{className:"inv-ico"}),$?s.jsxs(s.Fragment,{children:["Promotion ends in: ",s.jsx("p",{className:"ticket",children:$})]}):s.jsx(s.Fragment,{})]}),s.jsxs("div",{className:"landingpage",children:[s.jsxs("ul",{className:"mlist",children:[s.jsx("div",{className:"space"}),s.jsx("img",{className:"reglate2",src:Ot,alt:"UELearn logo"}),s.jsx(ht,{to:"/about",children:s.jsx("li",{children:"ABOUT"})}),s.jsx(ht,{to:"/contact",children:s.jsx("li",{children:"CONTACT"})}),s.jsx(ht,{to:"/payment",target:"_blank",rel:"noopener noreferrer",children:s.jsx("li",{children:"UPGRADE"})}),s.jsxs("div",{className:"rightmenu",children:[s.jsx(k2,{setsearching:r,eprop:"none",setfind:i,find:a,searching:n,bar:q}),s.jsx("div",{className:"space"}),s.jsx("div",{className:"onne"}),s.jsx("div",{className:"onne",title:Q||"GUEST",children:s.jsx("div",{className:"dp",children:Q?Q.toUpperCase()[0]:"Go-pro"})})]})]}),s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"none",width:"16",height:"16",strokeWidth:"2",children:!e&&s.jsx("path",{d:"M12.784 1.442a.8.8 0 0 0-1.569 0l-.191.953a.8.8 0 0 1-.628.628l-.953.19a.8.8 0 0 0 0 1.57l.953.19a.8.8 0 0 1 .628.629l.19.953a.8.8 0 0 0 1.57 0l.19-.953a.8.8 0 0 1 .629-.628l.953-.19a.8.8 0 0 0 0-1.57l-.953-.19a.8.8 0 0 1-.628-.629l-.19-.953h-.002ZM5.559 4.546a.8.8 0 0 0-1.519 0l-.546 1.64a.8.8 0 0 1-.507.507l-1.64.546a.8.8 0 0 0 0 1.519l1.64.547a.8.8 0 0 1 .507.505l.546 1.641a.8.8 0 0 0 1.519 0l.546-1.64a.8.8 0 0 1 .506-.507l1.641-.546a.8.8 0 0 0 0-1.519l-1.64-.546a.8.8 0 0 1-.507-.506L5.56 4.546Zm5.6 6.4a.8.8 0 0 0-1.519 0l-.147.44a.8.8 0 0 1-.505.507l-.441.146a.8.8 0 0 0 0 1.519l.44.146a.8.8 0 0 1 .507.506l.146.441a.8.8 0 0 0 1.519 0l.147-.44a.8.8 0 0 1 .506-.507l.44-.146a.8.8 0 0 0 0-1.519l-.44-.147a.8.8 0 0 1-.507-.505l-.146-.441Z",fill:"currentColor"})})]}),s.jsxs("div",{className:"landingpage",children:[s.jsx("div",{className:"prehuge"}),s.jsxs("div",{className:"phuge",children:[s.jsx("img",{className:"huge fil",src:Ot,alt:""}),s.jsx("img",{className:"huge fil",src:Ot,alt:""}),s.jsx("div",{className:"ptext",children:s.jsx("svg",{viewBox:"0 0 525 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M30.5566 79.8779C22.832 79.8779 16.748 79.0405 12.3047 77.3657C7.86133 75.6567 4.69971 72.8198 2.81982 68.855C0.939941 64.856 0 59.4043 0 52.5V19.6875H9.89502V52.5C9.89502 56.3965 10.2026 59.6094 10.8179 62.1387C11.4673 64.6338 12.5952 66.582 14.2017 67.9834C15.8081 69.3506 18.064 70.3076 20.9692 70.8545C23.9087 71.4014 27.6855 71.6748 32.2998 71.6748C39.1357 71.6748 44.502 71.1108 48.3984 69.9829C52.2949 68.855 55.0464 67.0947 56.6528 64.7021C58.2935 62.2754 59.1138 59.1309 59.1138 55.2686V19.6875H68.9575V78.75H59.1138V70.9058C57.6782 72.8882 55.8667 74.5459 53.6792 75.8789C51.4917 77.2119 48.5693 78.2031 44.9121 78.8525C41.2549 79.5361 36.4697 79.8779 30.5566 79.8779ZM149.963 61.2158C149.963 65.625 149.297 69.0942 147.964 71.6235C146.665 74.1528 144.666 75.9985 141.965 77.1606C139.265 78.3228 135.813 79.0576 131.609 79.3652C127.439 79.707 122.466 79.8779 116.689 79.8779C110.093 79.8779 104.487 79.5361 99.873 78.8525C95.293 78.2031 91.5845 76.853 88.7476 74.8022C85.9448 72.7173 83.894 69.6069 82.5952 65.4712C81.3306 61.3354 80.6982 55.8154 80.6982 48.9111C80.6982 42.2119 81.3135 36.8457 82.5439 32.8125C83.8086 28.7793 85.8423 25.7373 88.645 23.6865C91.4478 21.6357 95.1221 20.2686 99.668 19.585C104.248 18.9014 109.836 18.5596 116.433 18.5596C123.987 18.5596 130.242 19.0894 135.198 20.1489C140.154 21.2085 143.845 23.2251 146.272 26.1987C148.733 29.1724 149.963 33.5303 149.963 39.2725V51.936H90.5933C90.6274 56.311 90.9351 59.8145 91.5161 62.4463C92.0972 65.0781 93.2593 67.0605 95.0024 68.3936C96.7456 69.7266 99.3433 70.6152 102.795 71.0596C106.282 71.4697 110.913 71.6748 116.689 71.6748C121.885 71.6748 126.072 71.5723 129.25 71.3672C132.463 71.1621 134.89 70.7178 136.531 70.0342C138.206 69.3164 139.333 68.2568 139.915 66.8555C140.496 65.4541 140.786 63.5742 140.786 61.2158H149.963ZM116.433 26.7627C110.862 26.7627 106.367 26.9678 102.949 27.3779C99.5654 27.7881 96.9849 28.5913 95.2075 29.7876C93.4302 30.9497 92.2168 32.6929 91.5674 35.0171C90.9521 37.3413 90.6274 40.4004 90.5933 44.1943H140.53V39.2725C140.53 36.8115 140.239 34.7778 139.658 33.1714C139.111 31.5308 138.018 30.249 136.377 29.3262C134.736 28.3691 132.31 27.7026 129.097 27.3267C125.918 26.9507 121.697 26.7627 116.433 26.7627ZM162.729 52.5V44.2969H202.104V52.5H162.729ZM218.511 78.75V0H228.354V78.75H218.511ZM312.385 61.2158C312.385 65.625 311.719 69.0942 310.386 71.6235C309.087 74.1528 307.087 75.9985 304.387 77.1606C301.687 78.3228 298.235 79.0576 294.031 79.3652C289.861 79.707 284.888 79.8779 279.111 79.8779C272.515 79.8779 266.909 79.5361 262.295 78.8525C257.715 78.2031 254.006 76.853 251.169 74.8022C248.367 72.7173 246.316 69.6069 245.017 65.4712C243.752 61.3354 243.12 55.8154 243.12 48.9111C243.12 42.2119 243.735 36.8457 244.966 32.8125C246.23 28.7793 248.264 25.7373 251.067 23.6865C253.87 21.6357 257.544 20.2686 262.09 19.585C266.67 18.9014 272.258 18.5596 278.855 18.5596C286.409 18.5596 292.664 19.0894 297.62 20.1489C302.576 21.2085 306.267 23.2251 308.694 26.1987C311.155 29.1724 312.385 33.5303 312.385 39.2725V51.936H253.015C253.049 56.311 253.357 59.8145 253.938 62.4463C254.519 65.0781 255.681 67.0605 257.424 68.3936C259.167 69.7266 261.765 70.6152 265.217 71.0596C268.704 71.4697 273.335 71.6748 279.111 71.6748C284.307 71.6748 288.494 71.5723 291.672 71.3672C294.885 71.1621 297.312 70.7178 298.953 70.0342C300.627 69.3164 301.755 68.2568 302.336 66.8555C302.917 65.4541 303.208 63.5742 303.208 61.2158H312.385ZM278.855 26.7627C273.284 26.7627 268.789 26.9678 265.371 27.3779C261.987 27.7881 259.407 28.5913 257.629 29.7876C255.852 30.9497 254.639 32.6929 253.989 35.0171C253.374 37.3413 253.049 40.4004 253.015 44.1943H302.952V39.2725C302.952 36.8115 302.661 34.7778 302.08 33.1714C301.533 31.5308 300.439 30.249 298.799 29.3262C297.158 28.3691 294.731 27.7026 291.519 27.3267C288.34 26.9507 284.119 26.7627 278.855 26.7627ZM356.323 79.8779C349.248 79.8779 343.403 79.502 338.789 78.75C334.209 78.0322 330.791 76.4258 328.535 73.9307C326.313 71.4355 325.203 67.5562 325.203 62.2925C325.203 56.9263 326.245 52.9956 328.33 50.5005C330.449 47.9712 333.782 46.3306 338.328 45.5786C342.908 44.8267 348.906 44.4507 356.323 44.4507C362.339 44.4507 367.38 44.5874 371.448 44.8608C375.515 45.1343 379.155 45.6128 382.368 46.2964C382.3 41.7505 381.992 38.1787 381.445 35.5811C380.898 32.9492 379.873 31.001 378.369 29.7363C376.865 28.4717 374.661 27.6685 371.755 27.3267C368.884 26.9507 365.056 26.7627 360.271 26.7627C354.802 26.7627 350.513 26.8823 347.402 27.1216C344.326 27.3608 342.087 27.7881 340.686 28.4033C339.285 29.0186 338.396 29.9072 338.02 31.0693C337.678 32.2314 337.507 33.7354 337.507 35.5811H327.664C327.664 31.8896 328.159 28.916 329.15 26.6602C330.176 24.4043 331.902 22.6953 334.329 21.5332C336.755 20.3711 340.071 19.585 344.275 19.1748C348.513 18.7646 353.845 18.5596 360.271 18.5596C367.175 18.5596 372.729 19.0039 376.934 19.8926C381.172 20.7812 384.385 22.3877 386.572 24.7119C388.794 27.002 390.281 30.2148 391.033 34.3506C391.819 38.4863 392.212 43.8184 392.212 50.3467V78.75H382.368V74.6997C381.206 75.9302 379.6 76.9214 377.549 77.6733C375.498 78.4253 372.764 78.9722 369.346 79.314C365.962 79.6899 361.621 79.8779 356.323 79.8779ZM356.323 71.8799C362.168 71.8799 366.833 71.8115 370.32 71.6748C373.806 71.5381 376.404 71.1621 378.113 70.5469C379.856 69.9316 381.001 68.9404 381.548 67.5732C382.095 66.2061 382.368 64.292 382.368 61.8311V52.7563L356.323 52.4487C351.709 52.3804 347.983 52.4487 345.146 52.6538C342.344 52.8247 340.208 53.2349 338.738 53.8843C337.268 54.4995 336.277 55.4907 335.764 56.8579C335.286 58.1909 335.046 60.0024 335.046 62.2925C335.046 64.5142 335.286 66.2744 335.764 67.5732C336.277 68.8721 337.268 69.8291 338.738 70.4443C340.208 71.0596 342.344 71.4526 345.146 71.6235C347.983 71.7944 351.709 71.8799 356.323 71.8799ZM406.157 78.75V19.6875H416.001V27.8394C417.095 26.0962 418.188 24.6436 419.282 23.4814C420.41 22.3193 421.863 21.3965 423.64 20.7129C425.452 20.0293 427.896 19.5508 430.972 19.2773C434.048 18.9697 438.098 18.8159 443.123 18.8159V27.0703C436.355 27.0703 431.108 27.3096 427.383 27.7881C423.691 28.2666 421.042 29.0869 419.436 30.249C417.83 31.377 416.855 32.9492 416.514 34.9658C416.172 36.9824 416.001 39.5459 416.001 42.6562V78.75H406.157ZM455.889 78.75V19.6875H465.732V27.5317C467.202 25.5493 469.014 23.8916 471.167 22.5586C473.354 21.2256 476.26 20.2344 479.883 19.585C483.54 18.9014 488.325 18.5596 494.238 18.5596C501.963 18.5596 508.047 19.3115 512.49 20.8154C516.968 22.3193 520.146 25.0024 522.026 28.8647C523.906 32.7271 524.846 38.1958 524.846 45.271V78.75H514.951V45.271C514.951 41.2378 514.609 37.9907 513.926 35.5298C513.242 33.0688 512.063 31.2061 510.388 29.9414C508.748 28.6768 506.475 27.8394 503.569 27.4292C500.664 26.9849 496.973 26.7627 492.495 26.7627C485.659 26.7627 480.293 27.3267 476.396 28.4546C472.5 29.5825 469.749 31.3599 468.142 33.7866C466.536 36.1792 465.732 39.3066 465.732 43.1689V78.75H455.889Z",fill:"white"})})})]})]}),s.jsxs("div",{className:"slideme",children:[s.jsxs("div",{className:"slideitem",children:[s.jsxs("div",{className:"slideitemhead",children:[s.jsx("div",{className:"fnav",children:"❔"}),"Questions"]}),s.jsxs("div",{className:"slideitembody",children:[s.jsx("div",{className:"slideb1",children:s.jsx("p",{children:"Click the 🔍☝️search box and type your course code"})}),s.jsx("div",{className:"slideb2",children:s.jsx("img",{width:"110",src:w2,alt:"Past Questions"})})]})]}),s.jsxs("div",{className:"slideitem",children:[s.jsxs("div",{className:"slideitemhead",children:[s.jsx("div",{className:"fnav",children:"♟️"}),"Strategy"]}),s.jsxs("div",{className:"slideitembody",children:[s.jsx("div",{className:"slideb1",children:s.jsx("p",{children:"Increased retention with psychological learning concepts"})}),s.jsx("div",{className:"slideb2",children:s.jsx("img",{width:"110",src:y2,alt:"Strategy"})})]})]}),s.jsxs("div",{className:"slideitem",children:[s.jsxs("div",{className:"slideitemhead",children:[s.jsx("div",{className:"fnav",children:"📖"}),"Revision"]}),s.jsxs("div",{className:"slideitembody",children:[s.jsx("div",{className:"slideb1",children:s.jsx("p",{children:"Practice with our browser extension"})}),s.jsx("div",{className:"slideb2",children:s.jsx("img",{width:"110",src:b2,alt:"Revision"})})]})]})]}),s.jsx(ug,{}),s.jsx("br",{}),s.jsx("div",{className:"tel",children:s.jsx(dg,{})}),s.jsx(Wi,{opacity:e?1:0,indexed:e?100:-100,mainlogo:Ot}),s.jsx("div",{className:"scrldn",children:s.jsx("div",{className:"scrd"})}),s.jsxs("div",{className:"footer",children:[s.jsxs("div",{className:"foot1",children:[s.jsx("img",{className:"brands",title:"uelearn",src:Ot,alt:"UELearn"}),s.jsx("img",{className:"brands",title:"unityelites.com",src:sf,alt:"Unity Elites"}),s.jsx("img",{className:"brands",title:"myfolder.space",src:of,alt:"MyFolder"})]}),s.jsxs("div",{className:"foot1",children:[s.jsxs("a",{href:"https://unityelites.com",target:"_blank",rel:"noopener noreferrer",className:"foot2",children:[s.jsx("div",{className:"fnav",children:"⚙️"})," Developed by Unity Elites"]}),s.jsxs("a",{href:"https://myfolder.space",target:"_blank",rel:"noopener noreferrer",className:"foot2",children:[s.jsx("div",{className:"fnav",children:"💦"})," resource by Myfolder.space"]})]}),s.jsx("div",{className:"foot1",children:s.jsxs("div",{className:"twwo",title:"Make a suggestion",children:[s.jsx("div",{className:"search",children:S?s.jsx("img",{src:x2,className:"spinner",width:200,alt:"Sending…"}):s.jsx("span",{className:"fnav",style:{width:30,margin:5,height:30},children:s.jsx("i",{className:"fa fa-cloud",style:{fontSize:10,color:"whitesmoke"}})})}),s.jsx("div",{className:"input",children:s.jsx("input",{ref:Oe,type:"text",className:"find",placeholder:"Make a suggestion",onKeyDown:D=>{D.key==="Enter"&&oe()}})}),s.jsx("div",{className:"slash",onClick:oe,children:s.jsx("svg",{className:"sendarrow",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"none",strokeWidth:"2",children:s.jsx("path",{d:"M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z",fill:"white"})})}),z&&s.jsx("div",{style:{fontSize:11,color:"whitesmoke",marginTop:4,textAlign:"center"},children:z})]})}),k&&s.jsx(lg,{setshows:j})]}),s.jsx(Rc,{cname:"navbottom",active:"home"})]})})}const gg=`
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Outfit:wght@300;400;500&display=swap');

  .amb-root {
    min-height: 100vh;
    background: #07091a;
    font-family: 'Outfit', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 24px 16px 100px;
    box-sizing: border-box;
  }

  .amb-orb {
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
  }
  .amb-orb-1 {
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 65%);
    top: -180px; left: -180px;
    animation: orbDrift 14s ease-in-out infinite alternate;
  }
  .amb-orb-2 {
    width: 480px; height: 480px;
    background: radial-gradient(circle, rgba(236,72,153,0.16) 0%, transparent 65%);
    bottom: 60px; right: -140px;
    animation: orbDrift 11s ease-in-out infinite alternate-reverse;
  }
  .amb-orb-3 {
    width: 360px; height: 360px;
    background: radial-gradient(circle, rgba(6,182,212,0.13) 0%, transparent 65%);
    top: 55%; left: 40%;
    animation: orbDrift 18s ease-in-out infinite alternate;
  }
  @keyframes orbDrift {
    from { transform: translate(0,0) scale(1); }
    to   { transform: translate(28px,18px) scale(1.1); }
  }

  .amb-card {
    position: relative;
    z-index: 1;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.09);
    backdrop-filter: blur(28px);
    -webkit-backdrop-filter: blur(28px);
    border-radius: 28px;
    padding: 56px 52px;
    max-width: 720px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.04) inset, 0 32px 80px rgba(0,0,0,0.55);
    animation: fadeSlideUp 0.9s cubic-bezier(0.16,1,0.3,1) both;
  }
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(36px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .amb-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(139,92,246,0.15);
    border: 1px solid rgba(139,92,246,0.3);
    color: #c4b5fd;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 100px;
    margin-bottom: 24px;
  }
  .amb-badge-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #a78bfa;
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%,100% { opacity:1; transform:scale(1); }
    50%      { opacity:0.5; transform:scale(0.8); }
  }

  .amb-headline {
    font-family: 'Michroma', sans-serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800;
    color: #ffffff;
    line-height: 1.1;
    margin: 0 0 20px;
    letter-spacing: -0.02em;
  }
  .amb-headline span {
    background: linear-gradient(135deg, #a78bfa, #ec4899, #22d3ee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .amb-desc {
    font-size: clamp(1rem, 2.5vw, 1.1rem);
    font-weight: 300;
    color: rgba(255,255,255,0.55);
    line-height: 1.75;
    margin: 0 0 36px;
  }

  .amb-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 40px;
  }
  .amb-pill {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.65);
    font-size: 13px;
    padding: 7px 16px;
    border-radius: 100px;
    transition: all 0.2s ease;
    cursor: default;
  }
  .amb-pill:hover {
    background: rgba(139,92,246,0.15);
    border-color: rgba(139,92,246,0.35);
    color: #c4b5fd;
  }

  .amb-divider {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
    margin: 36px 0;
  }

  .amb-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, rgba(139,92,246,0.2), rgba(236,72,153,0.15));
    border: 1px solid rgba(139,92,246,0.3);
    color: #e0d7ff;
    font-size: 15px;
    font-weight: 500;
    padding: 14px 26px;
    border-radius: 14px;
    text-decoration: none;
    transition: all 0.25s ease;
  }
  .amb-cta:hover {
    background: linear-gradient(135deg, rgba(139,92,246,0.35), rgba(236,72,153,0.25));
    border-color: rgba(139,92,246,0.5);
    transform: translateY(-1px);
    box-shadow: 0 8px 32px rgba(139,92,246,0.2);
  }
  .amb-cta-arrow { transition: transform 0.2s ease; }
  .amb-cta:hover .amb-cta-arrow { transform: translateX(3px); }

  .amb-back {
    position: fixed;
    top: 20px; left: 20px;
    z-index: 10;
    width: 40px; height: 40px;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 50%;
    color: rgba(255,255,255,0.7);
    font-size: 16px;
    text-decoration: none;
    backdrop-filter: blur(10px);
    transition: all 0.2s ease;
  }
  .amb-back:hover { background: rgba(255,255,255,0.1); color: #fff; }

  @media (max-width: 600px) {
    .amb-card { padding: 32px 24px; border-radius: 20px; }
  }
`,vg=["Web Development","Mobile Apps","Frontend","Backend","Ecommerce","Sales Systems","Advertising","UI/UX Design"];function xg(){return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:gg}),s.jsxs("div",{className:"amb-root",children:[s.jsx("div",{className:"amb-orb amb-orb-1"}),s.jsx("div",{className:"amb-orb amb-orb-2"}),s.jsx("div",{className:"amb-orb amb-orb-3"}),s.jsx(ht,{to:"/",className:"amb-back",children:s.jsx("i",{className:"fa fa-arrow-left"})}),s.jsxs("div",{className:"amb-card",children:[s.jsxs("div",{className:"amb-badge",children:[s.jsx("div",{className:"amb-badge-dot"}),"Who we are"]}),s.jsxs("h1",{className:"amb-headline",children:["We build ",s.jsx("span",{children:"digital experiences"})," that matter."]}),s.jsx("p",{className:"amb-desc",children:"Unity Elites is a team of developers crafting elegant, high-performance digital products — from sleek frontends to robust backend systems and everything in between."}),s.jsx("div",{className:"amb-pills",children:vg.map(e=>s.jsx("div",{className:"amb-pill",children:e},e))}),s.jsx("div",{className:"amb-divider"}),s.jsxs("a",{className:"amb-cta",href:"https://benasdom.github.io/ue",target:"_blank",rel:"noopener noreferrer",children:["Visit Unity Elites ",s.jsx("span",{className:"amb-cta-arrow",children:"→"})]})]}),s.jsx(Rc,{active:"about"})]})]})}const yg=`
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Outfit:wght@300;400;500&display=swap');

  .amb-root {
    min-height: 100vh;
    background: #07091a;
    font-family: 'Outfit', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 24px 16px 100px;
    box-sizing: border-box;
  }

  .amb-orb {
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
  }
  .amb-orb-1 {
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 65%);
    top: -140px; right: -100px;
    animation: orbDrift 13s ease-in-out infinite alternate;
  }
  .amb-orb-2 {
    width: 520px; height: 520px;
    background: radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 65%);
    bottom: 80px; left: -160px;
    animation: orbDrift 10s ease-in-out infinite alternate-reverse;
  }
  .amb-orb-3 {
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 65%);
    top: 45%; left: 55%;
    animation: orbDrift 16s ease-in-out infinite alternate;
  }
  @keyframes orbDrift {
    from { transform: translate(0,0) scale(1); }
    to   { transform: translate(24px,16px) scale(1.1); }
  }

  .amb-card {
    position: relative;
    z-index: 1;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.09);
    backdrop-filter: blur(28px);
    -webkit-backdrop-filter: blur(28px);
    border-radius: 28px;
    padding: 52px 52px;
    max-width: 680px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.04) inset, 0 32px 80px rgba(0,0,0,0.55);
    animation: fadeSlideUp 0.9s cubic-bezier(0.16,1,0.3,1) both;
  }
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(36px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .amb-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(6,182,212,0.12);
    border: 1px solid rgba(6,182,212,0.28);
    color: #67e8f9;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 100px;
    margin-bottom: 24px;
  }
  .amb-badge-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #22d3ee;
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%,100% { opacity:1; transform:scale(1); }
    50%      { opacity:0.5; transform:scale(0.8); }
  }

  .amb-headline {
    font-family: 'michroma', sans-serif;
    font-size: clamp(1.8rem, 4.5vw, 2.8rem);
    font-weight: 800;
    color: #fff;
    line-height: 1.1;
    margin: 0 0 12px;
    letter-spacing: -0.02em;
  }
  .amb-headline span {
    background: linear-gradient(135deg, #22d3ee, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .amb-subtext {
    font-size: 15px;
    font-weight: 300;
    color: rgba(255,255,255,0.45);
    margin: 0 0 40px;
    line-height: 1.6;
  }

  /* Fields */
  .amb-fields {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 24px;
  }

  .amb-field {
    display: flex;
    align-items: center;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: 14px;
    overflow: hidden;
    transition: border-color 0.2s ease, background 0.2s ease;
  }
  .amb-field:focus-within {
    border-color: rgba(34,211,238,0.35);
    background: rgba(34,211,238,0.04);
  }

  .amb-field-prefix {
    padding: 0 14px;
    color: rgba(255,255,255,0.25);
    font-size: 15px;
    flex-shrink: 0;
    user-select: none;
  }

  .amb-input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: rgba(255,255,255,0.85);
    font-family: 'Outfit', sans-serif;
    font-size: 15px;
    font-weight: 400;
    padding: 16px 16px 16px 0;
    width: 100%;
    box-sizing: border-box;
  }
  .amb-input::placeholder { color: rgba(255,255,255,0.25); }

  .amb-textarea-wrap {
    align-items: flex-start;
    min-height: 120px;
  }
  .amb-textarea-wrap .amb-field-prefix { padding-top: 16px; }
  .amb-textarea {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: rgba(255,255,255,0.85);
    font-family: 'Outfit', sans-serif;
    font-size: 15px;
    font-weight: 400;
    padding: 16px 16px 16px 0;
    resize: vertical;
    min-height: 110px;
    width: 100%;
    box-sizing: border-box;
  }
  .amb-textarea::placeholder { color: rgba(255,255,255,0.25); }

  /* Submit */
  .amb-submit {
    width: 100%;
    padding: 17px;
    background: linear-gradient(135deg, rgba(34,211,238,0.18), rgba(139,92,246,0.18));
    border: 1px solid rgba(34,211,238,0.28);
    border-radius: 14px;
    color: #e0fffe;
    font-family: 'Outfit', sans-serif;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.03em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.25s ease;
  }
  .amb-submit:hover:not(:disabled) {
    background: linear-gradient(135deg, rgba(34,211,238,0.28), rgba(139,92,246,0.28));
    border-color: rgba(34,211,238,0.45);
    transform: translateY(-1px);
    box-shadow: 0 8px 32px rgba(34,211,238,0.15);
  }
  .amb-submit:active:not(:disabled) { transform: translateY(0); }
  .amb-submit:disabled { opacity: 0.6; cursor: not-allowed; }

  .amb-spinner { width: 22px; height: 22px; }

  /* Back */
  .amb-back {
    position: fixed;
    top: 20px; left: 20px;
    z-index: 10;
    width: 40px; height: 40px;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 50%;
    color: rgba(255,255,255,0.7);
    font-size: 16px;
    text-decoration: none;
    backdrop-filter: blur(10px);
    transition: all 0.2s ease;
  }
  .amb-back:hover { background: rgba(255,255,255,0.1); color: #fff; }


  /* Toast */
  .amb-toast {
    position: fixed;
    top: 24px;
    left: 50%;
    transform: translateX(-50%) translateY(-80px);
    background: rgba(10,12,28,0.9);
    border: 1px solid rgba(34,211,238,0.3);
    color: #67e8f9;
    padding: 12px 24px;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 500;
    backdrop-filter: blur(20px);
    z-index: 100;
    transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
    pointer-events: none;
  }
  .amb-toast.show { transform: translateX(-50%) translateY(0); }

  @media (max-width: 600px) {
    .amb-card { padding: 32px 22px; border-radius: 20px; }
  }
`;function bg(){const[e,t]=p.useState(!1),[n,r]=p.useState(!1),[a,i]=p.useState({name:"",email:"",phone:"",message:""}),o=u=>{r(u),setTimeout(()=>r(!1),3e3)},l=async()=>{if(Object.values(a).some(u=>!u.trim())){o("Please fill in all fields.");return}t(!0);try{const u=`📩 *New Contact Form Submission*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${a.name}
✉️ *Email:* ${a.email}
📞 *Phone:* ${a.phone}
━━━━━━━━━━━━━━━━━━━━
💬 *Message:*
${a.message}`;await st(`${de}/api/v1/test-telegram/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:u})}),o("Message sent successfully!"),i({name:"",email:"",phone:"",message:""})}catch(u){u instanceof xr?o("Please sign in to send a message."):o("Failed to send. Please try again.")}t(!1)},c=u=>d=>i(m=>({...m,[u]:d.target.value}));return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:yg}),s.jsxs("div",{className:"amb-root",children:[s.jsx("div",{className:"amb-orb amb-orb-1"}),s.jsx("div",{className:"amb-orb amb-orb-2"}),s.jsx("div",{className:"amb-orb amb-orb-3"}),s.jsx("div",{className:`amb-toast${n?" show":""}`,children:n}),s.jsx(ht,{to:"/",className:"amb-back",children:s.jsx("i",{className:"fa fa-arrow-left"})}),s.jsxs("div",{className:"amb-card",children:[s.jsxs("div",{className:"amb-badge",children:[s.jsx("div",{className:"amb-badge-dot"}),"Get in touch"]}),s.jsxs("h1",{className:"amb-headline",children:["Let's ",s.jsx("span",{children:"work together."})]}),s.jsx("p",{className:"amb-subtext",children:"Have a project in mind? Drop us a message and we'll get back to you shortly."}),s.jsxs("div",{className:"amb-fields",children:[s.jsxs("div",{className:"amb-field",children:[s.jsx("span",{className:"amb-field-prefix",children:"✦"}),s.jsx("input",{className:"amb-input",placeholder:"Your name",value:a.name,onChange:c("name")})]}),s.jsxs("div",{className:"amb-field",children:[s.jsx("span",{className:"amb-field-prefix",children:"@"}),s.jsx("input",{className:"amb-input",placeholder:"Email address",type:"email",value:a.email,onChange:c("email")})]}),s.jsxs("div",{className:"amb-field",children:[s.jsx("span",{className:"amb-field-prefix",children:"#"}),s.jsx("input",{className:"amb-input",placeholder:"Phone number",type:"tel",value:a.phone,onChange:c("phone")})]}),s.jsxs("div",{className:"amb-field amb-textarea-wrap",children:[s.jsx("span",{className:"amb-field-prefix",children:"✉"}),s.jsx("textarea",{className:"amb-textarea",placeholder:"Your message...",value:a.message,onChange:c("message")})]})]}),s.jsx("button",{className:"amb-submit",onClick:l,disabled:e,children:e?s.jsx("img",{src:x2,className:"amb-spinner",alt:"sending"}):s.jsx(s.Fragment,{children:"Send Message  →"})})]}),s.jsx(Rc,{active:"contact"})]})]})}const wg=()=>s.jsx(s.Fragment,{children:s.jsxs("div",{className:"page cpage",children:[s.jsxs("div",{className:"notfound",children:[s.jsx("br",{}),s.jsx("div",{className:"",children:s.jsx("h1",{className:"about",children:s.jsx("h3",{children:"OOPS! PAGE NOT FOUND. The page you are looking for does not exist"})})}),s.jsx("h1",{className:"notfound-text",children:"404"}),s.jsx("div",{className:"",children:s.jsx("h2",{className:"not-found-text2",children:"WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND"})})]}),s.jsx("br",{}),s.jsx(ht,{to:"/",className:"return",children:"👈 "})]})});function gl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function n4(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T0(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,s4(r.key),r)}}function r4(e,t,n){return t&&T0(e.prototype,t),n&&T0(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function a4(e,t,n){return(t=s4(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?P0(Object(n),!0).forEach(function(r){a4(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vl(e,t){if(e==null)return{};var n,r,a=function(o,l){if(o==null)return{};var c={};for(var u in o)if({}.hasOwnProperty.call(o,u)){if(l.indexOf(u)!==-1)continue;c[u]=o[u]}return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function kg(e,t){return function(n){if(Array.isArray(n))return n}(e)||function(n,r){var a=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var i,o,l,c,u=[],d=!0,m=!1;try{if(l=(a=a.call(n)).next,r===0){if(Object(a)!==a)return;d=!1}else for(;!(d=(i=l.call(a)).done)&&(u.push(i.value),u.length!==r);d=!0);}catch(h){m=!0,o=h}finally{try{if(!d&&a.return!=null&&(c=a.return(),Object(c)!==c))return}finally{if(m)throw o}}return u}}(e,t)||o4(e,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function i4(e){return function(t){if(Array.isArray(t))return gl(t)}(e)||function(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||o4(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function s4(e){var t=function(n,r){if(typeof n!="object"||!n)return n;var a=n[Symbol.toPrimitive];if(a!==void 0){var i=a.call(n,r||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}(e,"string");return typeof t=="symbol"?t:t+""}function In(e){return In=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},In(e)}function o4(e,t){if(e){if(typeof e=="string")return gl(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?gl(e,t):void 0}}var Lc={cookieTestUrl:"https://legacy-staging.paystack.co/test-iframe/start.html",publishableKey:"uFmz/uE/SDT6GupOrSEXIZXGByjQ0zFkPyc9LqKHFqnTI0WPN3JS5kQPo/j9or0TOXlqMQj2lzHn/UGsQT4XeQ==",publicKey:`-----BEGIN PUBLIC KEY-----\r
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALhZs/7hP0g0+hrqTq0hFyGVxgco0NMx\r
ZD8nPS6ihxap0yNFjzdyUuZED6P4/aK9Ezl5ajEI9pcx5/1BrEE+F3kCAwEAAQ==\r
-----END PUBLIC KEY-----`,applePayVersion:6,applePayValidateSessionPath:"applepay/validate-session/",applePayChargePath:"applepay/charge"},Cg=me(me({},Lc),{},{checkoutUrl:"http://localhost:8081/",paymentBaseUrl:"https://legacy-staging.paystack.co/",paystackApiUrl:"https://studio-api.paystack.co/",siteUrl:"https://paystack.com",pusherKey:"1c7b262ee18455815893",pusherUrl:"http://localhost:8081/static/vendor/pusher.min.js"}),O0=me(me({},Lc),{},{checkoutUrl:"https://checkout-studio.paystack.com/",paymentBaseUrl:"https://legacy-staging.paystack.co/",paystackApiUrl:"https://studio-api.paystack.co/",siteUrl:"https://beta.paystack.com",pusherKey:"1c7b262ee18455815893",pusherUrl:"https://checkout-studio.paystack.com/static/vendor/pusher.min.js"}),Qe={dev:Cg,staging:O0,production:me(me({},Lc),{},{checkoutUrl:"https://checkout.paystack.com/",paymentBaseUrl:"https://standard.paystack.co/",paystackApiUrl:"https://api.paystack.co/",siteUrl:"https://paystack.com",pusherKey:"8e4b9b7ca3418bd5cdc8",pusherUrl:"https://checkout.paystack.com/static/vendor/pusher.min.js"})}.production||O0;function l4(e,t){var n=[];return Object.keys(e).forEach(function(r){var a=t?"".concat(t,"[").concat(r,"]"):r,i=e[a];n.push(i!==null&&(typeof v>"u"?"undefined":In(v))==="object"?l4(i,a):"".concat(encodeURIComponent(r),"=").concat(encodeURIComponent(i)))}),n.join("&")}function qn(){return document.currentScript||(e=document.getElementsByTagName("script"))[e.length-1];var e}function R0(){var e=[],t=qn();if(t){var n=Array.prototype.slice.call(t.attributes);e=Object.keys(n).filter(function(r){var a=n[r].nodeName;return a&&a.indexOf("data")>-1}).map(function(r){return n[r].nodeName})}return e}var c4=`
  <svg id="inline-button-wordmark--white" width="137" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M.037 5.095l1.075-.135c-.011-.774-.025-1.944-.013-2.149C1.19 1.364 2.38.134 3.81.013 3.9.006 3.99.002 4.077 0a2.947 2.947 0 0 1 2.046.76c.574.509.95 1.26 1.008 2.007.015.192.01 1.491.01 2.257l1.096.163L8.2 11.44 4.093 12 0 11.346l.037-6.251zm4.106-.514l1.724.256c-.007-.933-.05-2.295-.26-2.654-.319-.545-.846-.867-1.443-.88h-.063c-.607.008-1.138.322-1.458.864-.222.378-.266 1.66-.265 2.637l1.765-.223zM18.228 10.108c-.576 0-1.064-.072-1.464-.216a2.864 2.864 0 0 1-.972-.6 2.552 2.552 0 0 1-.588-.864 4.067 4.067 0 0 1-.252-1.044h1.008c.032.256.088.5.168.732.08.224.204.424.372.6.168.168.388.304.66.408.28.096.636.144 1.068.144.28 0 .536-.036.768-.108.24-.08.448-.192.624-.336.176-.144.312-.316.408-.516.104-.2.156-.42.156-.66 0-.24-.032-.448-.096-.624a1.02 1.02 0 0 0-.336-.468 1.885 1.885 0 0 0-.636-.324 6.4 6.4 0 0 0-1.008-.228 8.79 8.79 0 0 1-1.212-.276 3.246 3.246 0 0 1-.9-.432 1.982 1.982 0 0 1-.564-.672c-.128-.272-.192-.6-.192-.984 0-.328.068-.632.204-.912.136-.288.324-.536.564-.744.248-.208.54-.372.876-.492.336-.12.708-.18 1.116-.18.864 0 1.548.204 2.052.612.512.4.812.984.9 1.752h-.936c-.104-.544-.316-.932-.636-1.164-.32-.24-.78-.36-1.38-.36-.592 0-1.04.132-1.344.396a1.255 1.255 0 0 0-.444.996c0 .208.024.396.072.564.056.16.156.3.3.42.152.12.36.228.624.324a6.72 6.72 0 0 0 1.068.228c.48.072.9.168 1.26.288.36.12.664.276.912.468s.432.428.552.708c.128.28.192.624.192 1.032 0 .36-.076.696-.228 1.008a2.472 2.472 0 0 1-.612.804c-.264.224-.58.4-.948.528-.36.128-.752.192-1.176.192zM25.355 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM32.091 10.108c-.44 0-.848-.072-1.224-.216a3.054 3.054 0 0 1-.972-.636 3.12 3.12 0 0 1-.648-1.008 3.626 3.626 0 0 1-.228-1.32v-.096c0-.48.08-.916.24-1.308.16-.4.376-.74.648-1.02.28-.28.604-.496.972-.648.376-.16.772-.24 1.188-.24.328 0 .644.04.948.12.312.08.588.208.828.384.248.168.456.392.624.672.168.28.276.62.324 1.02h-.984c-.08-.496-.284-.848-.612-1.056-.32-.208-.696-.312-1.128-.312a1.93 1.93 0 0 0-.804.168c-.24.112-.452.272-.636.48a2.23 2.23 0 0 0-.42.744 2.991 2.991 0 0 0-.156.996v.096c0 .776.188 1.364.564 1.764.384.392.88.588 1.488.588.224 0 .436-.032.636-.096a1.651 1.651 0 0 0 .96-.768c.112-.192.18-.416.204-.672h.924a2.595 2.595 0 0 1-.276.948 2.386 2.386 0 0 1-.576.744c-.24.208-.52.372-.84.492-.32.12-.668.18-1.044.18zM38.335 10.108a2.83 2.83 0 0 1-.876-.132 1.724 1.724 0 0 1-.684-.42 2.145 2.145 0 0 1-.456-.756c-.112-.304-.168-.672-.168-1.104V3.724h.996v3.924c0 .552.116.956.348 1.212.24.256.608.384 1.104.384.224 0 .44-.036.648-.108.208-.072.392-.18.552-.324.16-.144.288-.324.384-.54.096-.216.144-.464.144-.744V3.724h.996V10h-.996v-.996c-.144.296-.388.556-.732.78-.336.216-.756.324-1.26.324zM43.216 3.724h.996v1.128c.2-.352.452-.64.756-.864.312-.232.748-.356 1.308-.372v.936a4.461 4.461 0 0 0-.852.12 1.647 1.647 0 0 0-.66.324 1.472 1.472 0 0 0-.408.612c-.096.248-.144.564-.144.948V10h-.996V3.724zM50 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM56.496 10.108c-.408 0-.788-.068-1.14-.204a2.683 2.683 0 0 1-.9-.612 3.01 3.01 0 0 1-.588-.984 4.01 4.01 0 0 1-.204-1.32v-.096c0-.48.072-.92.216-1.32.144-.4.344-.744.6-1.032.256-.296.564-.524.924-.684.36-.16.756-.24 1.188-.24.528 0 .956.112 1.284.336.328.216.584.476.768.78V.724h.996V10h-.996V8.92c-.088.152-.208.3-.36.444a2.792 2.792 0 0 1-.516.384 2.874 2.874 0 0 1-.6.252c-.216.072-.44.108-.672.108zm.108-.828c.288 0 .56-.048.816-.144.256-.096.476-.24.66-.432.184-.2.328-.448.432-.744.112-.304.168-.656.168-1.056v-.096c0-.808-.18-1.404-.54-1.788-.352-.384-.836-.576-1.452-.576-.624 0-1.112.208-1.464.624-.352.416-.528 1.008-.528 1.776v.096c0 .392.048.736.144 1.032.104.296.24.54.408.732.176.192.38.336.612.432.232.096.48.144.744.144zM67.712 10.108c-.512 0-.948-.112-1.308-.336a2.38 2.38 0 0 1-.816-.804V10h-.996V.724h.996V4.78a1.92 1.92 0 0 1 .348-.432c.152-.144.32-.268.504-.372.192-.112.396-.2.612-.264.216-.064.436-.096.66-.096.408 0 .788.072 1.14.216.352.144.652.352.9.624.256.272.456.604.6.996.144.392.216.832.216 1.32v.096c0 .48-.068.92-.204 1.32a3.103 3.103 0 0 1-.576 1.02 2.583 2.583 0 0 1-.9.672 2.937 2.937 0 0 1-1.176.228zm-.096-.828c.624 0 1.1-.2 1.428-.6.328-.408.492-.996.492-1.764V6.82c0-.4-.052-.748-.156-1.044a2.095 2.095 0 0 0-.42-.732 1.53 1.53 0 0 0-.612-.444 1.798 1.798 0 0 0-.744-.156c-.288 0-.56.048-.816.144a1.71 1.71 0 0 0-.648.444c-.184.192-.328.44-.432.744a3.152 3.152 0 0 0-.156 1.044v.096c0 .8.192 1.396.576 1.788.384.384.88.576 1.488.576zM73.63 9.352l-2.46-5.628h1.068l1.92 4.5 1.74-4.5h1.02l-3.468 8.46h-1.008l1.188-2.832zM87.127 3.669A3.138 3.138 0 0 0 86.1 2.95a3.09 3.09 0 0 0-1.228-.25c-.448 0-.848.086-1.187.26a2.199 2.199 0 0 0-.662.497v-.191a.387.387 0 0 0-.214-.348.323.323 0 0 0-.14-.03h-1.315a.314.314 0 0 0-.254.116.377.377 0 0 0-.1.262v8.97c0 .1.034.188.1.258a.34.34 0 0 0 .254.103h1.341a.342.342 0 0 0 .244-.103.336.336 0 0 0 .11-.259v-3.06c.178.202.417.357.702.464.35.134.72.203 1.093.203.43 0 .848-.082 1.242-.248a3.124 3.124 0 0 0 1.04-.724c.305-.326.545-.709.707-1.128a3.93 3.93 0 0 0 .263-1.477c0-.54-.086-1.037-.263-1.477a3.387 3.387 0 0 0-.706-1.12zm-1.204 3.24c-.073.19-.18.362-.315.51a1.415 1.415 0 0 1-1.065.466c-.2.001-.4-.04-.584-.12a1.484 1.484 0 0 1-.49-.346 1.593 1.593 0 0 1-.32-.51 1.738 1.738 0 0 1-.115-.63c0-.224.04-.435.115-.631a1.532 1.532 0 0 1 .804-.846c.185-.086.386-.13.59-.129.215 0 .414.044.593.13.177.083.338.199.474.341a1.622 1.622 0 0 1 .425 1.135c0 .225-.037.436-.112.63zM95.298 2.89h-1.33a.339.339 0 0 0-.246.11.384.384 0 0 0-.108.266v.166a1.856 1.856 0 0 0-.602-.472 2.525 2.525 0 0 0-1.166-.258 3.227 3.227 0 0 0-2.284.964 3.554 3.554 0 0 0-.734 1.123 3.827 3.827 0 0 0-.275 1.477c0 .54.092 1.037.275 1.477.184.434.427.817.728 1.128a3.146 3.146 0 0 0 2.277.973c.437 0 .834-.088 1.173-.259.25-.13.456-.287.608-.471v.177a.34.34 0 0 0 .11.259.341.341 0 0 0 .244.104h1.33a.324.324 0 0 0 .25-.105.349.349 0 0 0 .102-.258V3.267a.377.377 0 0 0-.1-.262.325.325 0 0 0-.252-.115zM93.502 6.9a1.55 1.55 0 0 1-.312.511c-.136.143-.296.26-.473.344-.178.085-.38.129-.596.129-.207 0-.407-.044-.59-.13a1.501 1.501 0 0 1-.791-.855 1.766 1.766 0 0 1-.112-.62c0-.225.038-.436.112-.632.075-.193.181-.364.314-.504.137-.143.3-.26.478-.342.182-.085.382-.129.59-.129.215 0 .417.044.595.13.178.085.338.2.473.341a1.623 1.623 0 0 1 .424 1.135c0 .215-.037.424-.112.622zM108.567 6.094a2.265 2.265 0 0 0-.654-.402c-.247-.101-.509-.181-.785-.235l-1.014-.204c-.26-.05-.441-.117-.543-.203a.328.328 0 0 1-.136-.264c0-.11.063-.2.189-.282.137-.086.329-.13.566-.13.26 0 .518.053.757.157.243.106.471.226.67.36.295.187.546.162.727-.053l.487-.57a.543.543 0 0 0 .152-.357c0-.128-.064-.245-.185-.351-.207-.184-.533-.378-.971-.568-.437-.192-.987-.29-1.637-.29-.427 0-.82.058-1.168.172-.35.116-.65.276-.893.474-.245.204-.438.44-.57.713a2 2 0 0 0-.198.875c0 .56.167 1.017.496 1.358.328.333.766.56 1.304.67l1.054.232c.3.062.528.132.675.21.129.067.19.163.19.297 0 .12-.061.227-.188.324-.133.104-.342.155-.622.155a1.83 1.83 0 0 1-.831-.19 3.056 3.056 0 0 1-.678-.458.995.995 0 0 0-.307-.17c-.126-.037-.268.003-.431.13l-.583.461c-.169.145-.24.32-.209.522.029.194.19.394.491.62.269.193.614.368 1.029.518.415.151.901.229 1.453.229.444 0 .854-.058 1.215-.172.362-.119.681-.278.941-.48a2.056 2.056 0 0 0 .819-1.663c0-.319-.053-.6-.165-.836a1.843 1.843 0 0 0-.447-.6zM114.383 7.73a.363.363 0 0 0-.295-.192.55.55 0 0 0-.343.113c-.095.062-.198.11-.306.141a.75.75 0 0 1-.426.013.43.43 0 0 1-.181-.093.554.554 0 0 1-.143-.204.92.92 0 0 1-.059-.362v-2.46h1.731c.099 0 .188-.04.266-.117a.368.368 0 0 0 .112-.26V3.268a.369.369 0 0 0-.115-.268.38.38 0 0 0-.263-.109h-1.732V1.216a.354.354 0 0 0-.108-.27.347.347 0 0 0-.243-.104h-1.344a.36.36 0 0 0-.34.226.371.371 0 0 0-.027.148V2.89h-.767a.324.324 0 0 0-.255.115.385.385 0 0 0-.098.262V4.31a.4.4 0 0 0 .212.346c.044.021.092.032.14.03h.768v2.925c0 .39.069.726.2 1.003.132.274.305.504.514.676.217.178.465.31.731.388.27.084.551.126.833.126.385 0 .75-.061 1.094-.18a2.13 2.13 0 0 0 .861-.552c.152-.181.17-.381.046-.581l-.463-.76zM121.672 2.89h-1.329a.339.339 0 0 0-.244.11.39.39 0 0 0-.08.122.394.394 0 0 0-.027.144v.166a1.906 1.906 0 0 0-.605-.472c-.335-.173-.726-.258-1.168-.258-.42 0-.834.083-1.226.249a3.24 3.24 0 0 0-1.055.715 3.528 3.528 0 0 0-.734 1.123 3.79 3.79 0 0 0-.276 1.477c0 .54.092 1.037.275 1.477.184.434.428.817.729 1.128a3.138 3.138 0 0 0 2.273.973 2.59 2.59 0 0 0 1.175-.259c.255-.13.457-.287.612-.471v.177a.34.34 0 0 0 .108.259.343.343 0 0 0 .243.104h1.329a.335.335 0 0 0 .252-.105.364.364 0 0 0 .102-.258V3.267a.38.38 0 0 0-.1-.262.332.332 0 0 0-.115-.087.311.311 0 0 0-.139-.028zM119.876 6.9a1.534 1.534 0 0 1-.786.855 1.362 1.362 0 0 1-.594.129c-.207 0-.405-.044-.588-.13a1.516 1.516 0 0 1-.792-.855 1.757 1.757 0 0 1-.113-.62c0-.225.037-.436.112-.632.073-.187.179-.358.314-.504.138-.143.3-.26.479-.342.184-.086.385-.13.588-.129.217 0 .415.044.594.13.181.085.34.2.472.341.134.143.24.313.314.504a1.73 1.73 0 0 1 0 1.253zM128.978 7.64l-.763-.593c-.146-.118-.284-.15-.404-.1a.742.742 0 0 0-.279.205 2.527 2.527 0 0 1-.583.535c-.192.122-.444.183-.742.183-.219 0-.42-.04-.6-.122a1.423 1.423 0 0 1-.469-.342 1.575 1.575 0 0 1-.308-.51 1.751 1.751 0 0 1-.106-.617c0-.228.034-.438.106-.632.07-.192.173-.363.308-.503.135-.144.295-.26.472-.342.187-.088.391-.132.597-.13.298 0 .547.064.742.187.198.126.396.306.584.534.078.092.17.16.278.206.122.048.259.016.401-.101l.762-.594a.53.53 0 0 0 .201-.269.437.437 0 0 0-.034-.365 3.329 3.329 0 0 0-1.18-1.127c-.504-.291-1.108-.441-1.784-.441a3.519 3.519 0 0 0-2.51 1.033c-.322.322-.576.71-.747 1.137a3.68 3.68 0 0 0-.273 1.407c0 .495.093.968.273 1.402.173.424.427.808.747 1.128a3.527 3.527 0 0 0 2.51 1.034c.676 0 1.28-.149 1.784-.444a3.286 3.286 0 0 0 1.182-1.13.411.411 0 0 0 .055-.173.415.415 0 0 0-.023-.182.624.624 0 0 0-.197-.273zM136.06 9.045l-2.104-3.143 1.801-2.415c.094-.139.119-.272.075-.397-.031-.09-.116-.2-.334-.2h-1.425a.52.52 0 0 0-.234.058.482.482 0 0 0-.209.205L132.191 5.2h-.349V.363a.37.37 0 0 0-.099-.26.352.352 0 0 0-.253-.103h-1.332a.37.37 0 0 0-.337.22.346.346 0 0 0-.027.143V9.29c0 .103.038.193.11.259a.353.353 0 0 0 .254.104h1.333a.328.328 0 0 0 .251-.105.346.346 0 0 0 .075-.119.333.333 0 0 0 .024-.14V6.927h.386l1.571 2.446c.112.187.267.281.46.281h1.491c.226 0 .32-.11.358-.202.054-.13.038-.262-.047-.406zM102.863 2.89h-1.489a.389.389 0 0 0-.298.122.544.544 0 0 0-.13.249l-1.099 4.167h-.268l-1.182-4.167a.66.66 0 0 0-.113-.247.329.329 0 0 0-.264-.124h-1.544c-.199 0-.325.066-.372.193a.588.588 0 0 0-.002.37l1.887 5.865c.03.093.08.17.145.232a.388.388 0 0 0 .281.104h.798l-.066.19-.19.547a.872.872 0 0 1-.29.426.7.7 0 0 1-.442.148.956.956 0 0 1-.4-.09 1.842 1.842 0 0 1-.35-.209.62.62 0 0 0-.335-.115h-.016c-.13 0-.243.074-.334.216l-.474.708c-.193.304-.086.504.039.615.234.224.528.399.875.524.344.125.723.186 1.126.186.682 0 1.252-.187 1.689-.565.435-.376.756-.887.952-1.524l2.188-7.258c.05-.155.05-.284.005-.389-.037-.08-.125-.174-.327-.174z" fill="#ffffff"/>
  </svg>
`,jg=`
<svg id="inline-button-wordmark--grey" width="166" height="16" viewBox="0 0 166 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
  d="M0.564068 6.26985L1.86515 6.10375C1.85184 5.15143 1.83489 3.71187 1.84942 3.45964C1.95955 1.67927 3.39982 0.16589 5.13056 0.0170127C5.23949 0.00839996 5.34842 0.0034784 5.45371 0.00101762C6.36645 -0.0209585 7.25272 0.313716 7.93 0.936113C8.62472 1.56238 9.07979 2.4864 9.14999 3.4055C9.16815 3.64174 9.1621 5.24002 9.1621 6.18249L10.4886 6.38305L10.4438 14.0767L5.47308 14.7657L0.519287 13.961L0.564068 6.26985ZM5.53359 5.63743L7.62016 5.95241C7.61169 4.80446 7.55965 3.12867 7.30548 2.68696C6.91939 2.0164 6.28156 1.62021 5.55901 1.60421H5.48276C4.7481 1.61406 4.10543 2.0004 3.71813 2.66727C3.44944 3.13236 3.39619 4.70972 3.3974 5.91181L5.53359 5.63743ZM22.5808 12.4378C21.8836 12.4378 21.293 12.3492 20.8089 12.172C20.372 12.0088 19.9719 11.7577 19.6325 11.4338C19.3256 11.1331 19.0833 10.7712 18.9208 10.3707C18.7637 9.95815 18.6612 9.52621 18.6158 9.08621H19.8358C19.8745 9.40119 19.9423 9.70141 20.0391 9.98686C20.136 10.2625 20.286 10.5085 20.4894 10.7251C20.6927 10.9318 20.959 11.0991 21.2882 11.2271C21.6271 11.3452 22.0579 11.4043 22.5808 11.4043C22.9197 11.4043 23.2295 11.36 23.5103 11.2714C23.8008 11.173 24.0525 11.0351 24.2655 10.858C24.4785 10.6808 24.6431 10.4692 24.7593 10.2231C24.8852 9.97701 24.9481 9.70633 24.9481 9.41103C24.9481 9.11574 24.9094 8.85982 24.8319 8.64327C24.7536 8.41559 24.6125 8.21568 24.4253 8.06745C24.196 7.88594 23.9347 7.75064 23.6555 7.6688C23.257 7.54201 22.849 7.4482 22.4355 7.38828C21.9393 7.31041 21.4491 7.19693 20.9686 7.04869C20.5808 6.92967 20.2133 6.75038 19.8794 6.51716C19.5939 6.29685 19.3607 6.01432 19.1968 5.69034C19.0418 5.35567 18.9644 4.9521 18.9644 4.47963C18.9644 4.07607 19.0467 3.70203 19.2113 3.35752C19.3759 3.00317 19.6034 2.69803 19.8939 2.44211C20.194 2.18619 20.5475 1.98441 20.9541 1.83676C21.3608 1.68911 21.811 1.61529 22.3048 1.61529C23.3505 1.61529 24.1784 1.86629 24.7884 2.36829C25.4081 2.86044 25.7711 3.57899 25.8777 4.52393H24.7448C24.6189 3.8546 24.3624 3.37721 23.9751 3.09176C23.5878 2.79646 23.031 2.64882 22.3048 2.64882C21.5883 2.64882 21.0461 2.81123 20.6782 3.13605C20.5037 3.28606 20.3648 3.47417 20.2717 3.68635C20.1787 3.89853 20.1339 4.12931 20.1408 4.36152C20.1408 4.61744 20.1698 4.84875 20.2279 5.05546C20.2957 5.25232 20.4167 5.42457 20.591 5.57222C20.775 5.71987 21.0267 5.85275 21.3463 5.97087C21.7689 6.09987 22.2012 6.19369 22.6389 6.25139C23.2198 6.33998 23.7281 6.4581 24.1639 6.60575C24.5996 6.75339 24.9675 6.94533 25.2677 7.18157C25.5678 7.4178 25.7905 7.70818 25.9358 8.05268C26.0907 8.39719 26.1681 8.82045 26.1681 9.32245C26.1681 9.76539 26.0761 10.1788 25.8922 10.5627C25.7149 10.9408 25.4627 11.2775 25.1515 11.5519C24.8319 11.8275 24.4495 12.0441 24.0041 12.2016C23.5684 12.359 23.094 12.4378 22.5808 12.4378ZM31.2066 12.4378C30.6741 12.4378 30.1803 12.3443 29.7252 12.1573C29.2906 11.9775 28.8956 11.7115 28.5633 11.3747C28.2268 11.0185 27.965 10.5966 27.7936 10.1345C27.6136 9.61796 27.5251 9.07309 27.5321 8.52515V8.40704C27.5321 7.82629 27.6193 7.29476 27.7936 6.81245C27.9679 6.3203 28.2099 5.90196 28.5198 5.55746C28.8393 5.2031 29.2169 4.93242 29.6526 4.7454C30.0883 4.54854 30.5676 4.45011 31.0905 4.45011C31.5262 4.45011 31.9473 4.52393 32.354 4.67158C32.7704 4.80938 33.1383 5.03085 33.4578 5.33599C33.7773 5.64112 34.0291 6.03977 34.213 6.53192C34.4067 7.01424 34.5035 7.5999 34.5035 8.28892V8.68756H28.7812C28.8102 9.57345 29.0281 10.2526 29.4348 10.7251C29.8414 11.1877 30.4369 11.419 31.2212 11.419C32.4121 11.419 33.085 10.9712 33.24 10.0754H34.4454C34.3099 10.8531 33.9516 11.4436 33.3707 11.8472C32.7897 12.2409 32.0684 12.4378 31.2066 12.4378ZM33.269 7.69833C33.2109 6.90104 32.9882 6.33014 32.6009 5.98563C32.2233 5.64112 31.7198 5.46887 31.0905 5.46887C30.4708 5.46887 29.9624 5.67065 29.5655 6.07422C29.1782 6.46794 28.9313 7.00932 28.8248 7.69833H33.269ZM39.3593 12.4378C38.8267 12.4378 38.3329 12.3492 37.8779 12.172C37.4401 11.9901 37.0407 11.7245 36.7014 11.3895C36.3636 11.0315 36.0973 10.6103 35.9172 10.1493C35.7268 9.63002 35.6332 9.07925 35.6412 8.52515V8.40704C35.6412 7.81645 35.738 7.28 35.9317 6.79769C36.1253 6.30553 36.3868 5.8872 36.716 5.54269C37.0548 5.19818 37.447 4.93242 37.8924 4.7454C38.3475 4.54854 38.8267 4.45011 39.3302 4.45011C39.7272 4.45011 40.1097 4.49932 40.4776 4.59775C40.8552 4.69618 41.1893 4.85367 41.4797 5.07022C41.7799 5.27693 42.0316 5.55253 42.235 5.89704C42.4383 6.24155 42.569 6.65988 42.6271 7.15204H41.4362C41.3393 6.54177 41.0924 6.10867 40.6955 5.85275C40.3082 5.59683 39.8531 5.46887 39.3302 5.46887C38.995 5.46599 38.6632 5.53649 38.3571 5.67557C38.0667 5.81338 37.8101 6.01024 37.5874 6.26616C37.3615 6.53514 37.1889 6.84598 37.0791 7.18157C36.9484 7.57626 36.8845 7.99063 36.8902 8.40704V8.52515C36.8902 9.47994 37.1178 10.2034 37.5729 10.6956C38.0376 11.1779 38.6379 11.419 39.3738 11.419C39.6449 11.419 39.9015 11.3797 40.1436 11.3009C40.6361 11.1497 41.0523 10.8113 41.3055 10.356C41.441 10.1197 41.5233 9.84413 41.5524 9.52915H42.6707C42.6338 9.9361 42.5204 10.3321 42.3366 10.6956C42.1663 11.0447 41.9293 11.3559 41.6395 11.611C41.349 11.8669 41.0101 12.0687 40.6228 12.2163C40.2355 12.364 39.8144 12.4378 39.3593 12.4378ZM46.9164 12.4378C46.5568 12.4406 46.199 12.3858 45.8562 12.2754C45.5441 12.1717 45.2605 11.9947 45.0284 11.7586C44.7829 11.4908 44.595 11.1741 44.4765 10.8284C44.3409 10.4544 44.2731 10.0016 44.2731 9.47009V4.58299H45.4786V9.41103C45.4786 10.0902 45.619 10.5873 45.8998 10.9023C46.1903 11.2172 46.6356 11.3747 47.236 11.3747C47.5071 11.3747 47.7685 11.3304 48.0202 11.2419C48.272 11.1533 48.4947 11.0204 48.6883 10.8432C48.882 10.666 49.0369 10.4446 49.1531 10.1788C49.2693 9.91303 49.3274 9.6079 49.3274 9.26339V4.58299H50.5328V12.3049H49.3274V11.0794C49.1531 11.4436 48.8578 11.7635 48.4414 12.0391C48.0348 12.3049 47.5264 12.4378 46.9164 12.4378ZM52.8239 4.58299H54.0294V5.97087C54.2715 5.53777 54.5765 5.18342 54.9444 4.90781C55.322 4.62236 55.8497 4.46979 56.5275 4.45011V5.60175C56.1799 5.61707 55.8346 5.66652 55.4963 5.7494C55.2039 5.81939 54.9308 5.95567 54.6975 6.14804C54.4729 6.35252 54.303 6.6116 54.2037 6.90104C54.0875 7.20618 54.0294 7.59498 54.0294 8.06745V12.3049H52.8239V4.58299ZM61.0347 12.4378C60.5021 12.4378 60.0083 12.3443 59.5533 12.1573C59.1186 11.9775 58.7236 11.7115 58.3914 11.3747C58.0549 11.0185 57.793 10.5966 57.6216 10.1345C57.4416 9.61796 57.3531 9.07309 57.3602 8.52515V8.40704C57.3602 7.82629 57.4473 7.29476 57.6216 6.81245C57.7959 6.3203 58.038 5.90196 58.3478 5.55746C58.6673 5.2031 59.0449 4.93242 59.4806 4.7454C59.9164 4.54854 60.3956 4.45011 60.9185 4.45011C61.3542 4.45011 61.7754 4.52393 62.1821 4.67158C62.5984 4.80938 62.9663 5.03085 63.2859 5.33599C63.6054 5.64112 63.8571 6.03977 64.0411 6.53192C64.2347 7.01424 64.3316 7.5999 64.3316 8.28892V8.68756H58.6092C58.6383 9.57345 58.8561 10.2526 59.2628 10.7251C59.6695 11.1877 60.2649 11.419 61.0492 11.419C62.2401 11.419 62.9131 10.9712 63.068 10.0754H64.2735C64.1379 10.8531 63.7797 11.4436 63.1987 11.8472C62.6178 12.2409 61.8964 12.4378 61.0347 12.4378ZM63.097 7.69833C63.0389 6.90104 62.8162 6.33014 62.429 5.98563C62.0513 5.64112 61.5478 5.46887 60.9185 5.46887C60.2988 5.46887 59.7905 5.67065 59.3935 6.07422C59.0062 6.46794 58.7593 7.00932 58.6528 7.69833H63.097ZM68.8968 12.4378C68.403 12.4378 67.9431 12.3541 67.5171 12.1868C67.1072 12.0141 66.7365 11.7578 66.4278 11.4338C66.1165 11.0803 65.8749 10.6693 65.7161 10.2231C65.5451 9.69956 65.4617 9.15057 65.4692 8.59898V8.48086C65.4692 7.89027 65.5564 7.3489 65.7307 6.85675C65.905 6.36459 66.147 5.94134 66.4569 5.58698C66.7667 5.22279 67.1395 4.94226 67.5752 4.7454C68.0109 4.54854 68.4902 4.45011 69.013 4.45011C69.6521 4.45011 70.1701 4.58791 70.5671 4.86352C70.964 5.12928 71.2739 5.44918 71.4966 5.82322V0.891819H72.702V12.3049H71.4966V10.9761C71.3901 11.1631 71.2448 11.3452 71.0609 11.5224C70.8713 11.7038 70.6617 11.8623 70.4363 11.9949C70.2066 12.1258 69.963 12.2298 69.7102 12.3049C69.4487 12.3935 69.1776 12.4378 68.8968 12.4378ZM69.0275 11.419C69.3761 11.419 69.7053 11.36 70.0152 11.2419C70.325 11.1237 70.5913 10.9466 70.814 10.7103C71.0367 10.4642 71.2109 10.1591 71.3368 9.79492C71.4724 9.42088 71.5401 8.98778 71.5401 8.49562V8.37751C71.5401 7.38335 71.3223 6.65004 70.8866 6.17757C70.4606 5.7051 69.8748 5.46887 69.1292 5.46887C68.374 5.46887 67.7834 5.72479 67.3573 6.23663C66.9313 6.74847 66.7183 7.47686 66.7183 8.4218V8.53992C66.7183 9.02223 66.7764 9.44549 66.8926 9.80968C67.0184 10.1739 67.183 10.4741 67.3864 10.7103C67.5994 10.9466 67.8463 11.1237 68.1271 11.2419C68.4079 11.36 68.708 11.419 69.0275 11.419ZM82.4716 12.4378C81.852 12.4378 81.3243 12.3 80.8886 12.0244C80.485 11.7813 80.146 11.4417 79.901 11.0351V12.3049H78.6955V0.891819H79.901V5.88228C80.0153 5.68531 80.1572 5.50626 80.3221 5.35075C80.5061 5.17357 80.7094 5.02101 80.9321 4.89305C81.1645 4.75524 81.4114 4.64697 81.6729 4.56822C81.9343 4.48948 82.2005 4.45011 82.4716 4.45011C82.9655 4.45011 83.4254 4.53869 83.8514 4.71587C84.2774 4.89305 84.6405 5.14897 84.9407 5.48363C85.2505 5.8183 85.4926 6.22679 85.6669 6.7091C85.8411 7.19141 85.9283 7.73278 85.9283 8.33321V8.45133C85.9283 9.04192 85.846 9.58329 85.6814 10.0754C85.5295 10.535 85.2929 10.9609 84.9843 11.3304C84.6852 11.6839 84.3133 11.9662 83.895 12.1573C83.4445 12.3492 82.96 12.4447 82.4716 12.4378ZM82.3555 11.419C83.1107 11.419 83.6868 11.173 84.0838 10.6808C84.4808 10.1788 84.6793 9.45533 84.6793 8.51039V8.39227C84.6793 7.90012 84.6163 7.47194 84.4904 7.10775C84.3829 6.77559 84.2099 6.46915 83.9821 6.2071C83.7841 5.96487 83.5294 5.77704 83.2414 5.66081C82.9581 5.53232 82.6511 5.46687 82.3409 5.46887C81.9924 5.46887 81.6632 5.52793 81.3533 5.64604C81.0537 5.7638 80.7852 5.95084 80.569 6.19234C80.3464 6.42857 80.1721 6.73371 80.0462 7.10775C79.9127 7.52209 79.8488 7.95635 79.8574 8.39227V8.51039C79.8574 9.4947 80.0898 10.228 80.5545 10.7103C81.0193 11.1828 81.6196 11.419 82.3555 11.419ZM89.6342 11.5076L86.6569 4.58299H87.9495L90.2733 10.1197L92.3792 4.58299H93.6137L89.4164 14.9921H88.1964L89.6342 11.5076ZM105.97 4.51532C105.618 4.13844 105.195 3.83755 104.727 3.63067C104.257 3.42601 103.751 3.32132 103.241 3.32307C102.698 3.32307 102.214 3.42888 101.804 3.64297C101.501 3.7934 101.229 4.00091 101.003 4.25447V4.01947C101.003 3.93064 100.979 3.84347 100.933 3.76781C100.888 3.69214 100.822 3.631 100.744 3.59129C100.691 3.56626 100.633 3.55364 100.574 3.55438H98.9827C98.9241 3.55245 98.8658 3.56433 98.8125 3.58909C98.7592 3.61385 98.7122 3.65082 98.6753 3.69711C98.5956 3.78474 98.5523 3.90019 98.5542 4.01947V15.0561C98.5542 15.1791 98.5954 15.2874 98.6753 15.3735C98.715 15.4152 98.7629 15.4479 98.8158 15.4698C98.8688 15.4916 98.9256 15.502 98.9827 15.5002H100.606C100.661 15.5001 100.715 15.4889 100.766 15.4671C100.817 15.4453 100.863 15.4135 100.901 15.3735C100.945 15.3333 100.979 15.284 101.002 15.229C101.025 15.174 101.036 15.1146 101.034 15.0548V11.2898C101.25 11.5384 101.539 11.7291 101.884 11.8607C102.307 12.0256 102.755 12.1105 103.207 12.1105C103.727 12.1105 104.233 12.0096 104.71 11.8054C105.185 11.599 105.613 11.2958 105.969 10.9146C106.338 10.5135 106.628 10.0422 106.824 9.52669C107.044 8.94733 107.152 8.33033 107.143 7.70941C107.143 7.045 107.038 6.43349 106.824 5.89212C106.631 5.38011 106.341 4.91182 105.97 4.51409V4.51532ZM104.513 8.50178C104.424 8.73555 104.295 8.94718 104.131 9.12928C103.969 9.31219 103.77 9.45789 103.547 9.55674C103.325 9.65558 103.085 9.70531 102.842 9.70264C102.6 9.70387 102.358 9.65342 102.136 9.55499C101.911 9.4556 101.71 9.31074 101.542 9.12928C101.375 8.94704 101.244 8.73407 101.155 8.50178C101.062 8.25439 101.015 7.99155 101.016 7.72663C101.016 7.45102 101.064 7.19141 101.155 6.95026C101.332 6.48635 101.682 6.1122 102.128 5.90935C102.352 5.80353 102.595 5.7494 102.842 5.75063C103.103 5.75063 103.343 5.80476 103.56 5.91058C103.774 6.0127 103.969 6.15542 104.134 6.33014C104.476 6.71058 104.661 7.21105 104.648 7.72663C104.648 8.00347 104.603 8.26308 104.513 8.50178ZM115.859 3.55684H114.249C114.193 3.55751 114.138 3.56987 114.087 3.59315C114.036 3.61643 113.99 3.65013 113.952 3.69219C113.868 3.78 113.821 3.8973 113.821 4.01947V4.22371C113.62 3.9808 113.372 3.78302 113.092 3.64297C112.654 3.42397 112.17 3.31511 111.681 3.32553C111.166 3.32821 110.657 3.43439 110.183 3.63795C109.708 3.84151 109.278 4.13843 108.917 4.51162C108.537 4.91069 108.236 5.37962 108.029 5.89335C107.801 6.47081 107.687 7.08847 107.696 7.71064C107.696 8.37505 107.807 8.98655 108.029 9.52792C108.251 10.0619 108.545 10.5331 108.91 10.9158C109.265 11.2945 109.693 11.5958 110.167 11.8016C110.641 12.0074 111.15 12.1133 111.665 12.113C112.194 12.113 112.675 12.0047 113.085 11.7943C113.388 11.6343 113.637 11.4412 113.821 11.2148V11.4326C113.82 11.4923 113.831 11.5516 113.854 11.6066C113.877 11.6615 113.911 11.7109 113.954 11.7512C113.993 11.7915 114.038 11.8236 114.089 11.8456C114.14 11.8676 114.194 11.879 114.249 11.8792H115.859C115.916 11.8812 115.972 11.8706 116.024 11.8483C116.077 11.826 116.124 11.7925 116.162 11.75C116.203 11.7085 116.235 11.6589 116.256 11.6043C116.277 11.5497 116.287 11.4912 116.285 11.4326V4.0207C116.287 3.90142 116.244 3.78597 116.164 3.69834C116.127 3.65337 116.08 3.61736 116.027 3.5929C115.975 3.56844 115.917 3.55613 115.859 3.55684ZM113.685 8.4907C113.601 8.72324 113.473 8.9368 113.308 9.11943C113.143 9.29538 112.95 9.43933 112.735 9.54269C112.52 9.64727 112.275 9.70141 112.014 9.70141C111.764 9.70141 111.521 9.64727 111.3 9.54146C111.079 9.4398 110.881 9.29437 110.717 9.11372C110.552 8.93306 110.425 8.72082 110.343 8.48947C110.253 8.24551 110.207 7.98712 110.207 7.72663C110.207 7.44979 110.253 7.19018 110.343 6.94903C110.433 6.71156 110.562 6.50116 110.723 6.32891C110.888 6.15296 111.086 6.00901 111.301 5.90812C111.521 5.80353 111.764 5.7494 112.015 5.7494C112.275 5.7494 112.52 5.80353 112.735 5.90935C112.951 6.01393 113.144 6.15542 113.308 6.32891C113.65 6.70961 113.834 7.21001 113.821 7.7254C113.821 7.98993 113.776 8.24709 113.685 8.4907ZM131.919 7.49901C131.685 7.28955 131.417 7.12228 131.127 7.00439C130.828 6.88012 130.511 6.78169 130.177 6.71525L128.95 6.46425C128.635 6.40273 128.416 6.3203 128.293 6.21448C128.242 6.17732 128.201 6.12853 128.172 6.07209C128.144 6.01565 128.128 5.95315 128.128 5.88966C128.128 5.75432 128.204 5.64358 128.357 5.54269C128.523 5.43688 128.755 5.38274 129.042 5.38274C129.357 5.38274 129.669 5.44795 129.958 5.57591C130.252 5.70633 130.528 5.85398 130.769 6.01885C131.126 6.24893 131.43 6.21817 131.649 5.95364L132.238 5.25232C132.351 5.13393 132.416 4.97752 132.422 4.81307C132.422 4.65558 132.345 4.51162 132.198 4.3812C131.948 4.15481 131.553 3.91612 131.023 3.68234C130.494 3.44611 129.829 3.32553 129.042 3.32553C128.525 3.32553 128.049 3.39689 127.628 3.53716C127.205 3.67988 126.842 3.87674 126.547 4.12036C126.251 4.37136 126.017 4.66173 125.858 4.99763C125.699 5.33341 125.617 5.70154 125.618 6.07422C125.618 6.76324 125.82 7.32552 126.218 7.74509C126.615 8.15481 127.145 8.43411 127.796 8.56945L129.072 8.8549C129.435 8.93118 129.711 9.01731 129.889 9.11328C130.045 9.19572 130.119 9.31383 130.119 9.47871C130.119 9.62635 130.045 9.758 129.892 9.87735C129.731 10.0053 129.478 10.0681 129.139 10.0681C128.79 10.0717 128.445 9.99161 128.133 9.83429C127.836 9.68469 127.56 9.49515 127.312 9.27077C127.202 9.17922 127.076 9.1084 126.941 9.0616C126.788 9.01608 126.616 9.0653 126.419 9.22155L125.714 9.78876C125.509 9.96717 125.423 10.1825 125.461 10.431C125.496 10.6697 125.691 10.9158 126.055 11.1939C126.38 11.4313 126.798 11.6467 127.3 11.8312C127.803 12.017 128.391 12.113 129.059 12.113C129.596 12.113 130.092 12.0416 130.529 11.9013C130.967 11.7549 131.354 11.5593 131.668 11.3108C131.98 11.0724 132.231 10.7631 132.404 10.4077C132.576 10.0523 132.663 9.66076 132.659 9.26462C132.659 8.87212 132.595 8.52638 132.46 8.23601C132.331 7.95492 132.147 7.70366 131.919 7.49778V7.49901ZM138.958 9.51193C138.923 9.445 138.872 9.3882 138.809 9.34687C138.747 9.30555 138.675 9.28105 138.601 9.27569C138.451 9.27322 138.305 9.3222 138.186 9.41473C138.071 9.49101 137.946 9.55007 137.815 9.58821C137.649 9.64412 137.47 9.64967 137.3 9.60421C137.219 9.58443 137.144 9.54519 137.081 9.48978C137.005 9.42056 136.946 9.33472 136.908 9.23878C136.855 9.09669 136.83 8.94521 136.836 8.79338V5.76662H138.931C139.051 5.76662 139.159 5.71741 139.253 5.62267C139.295 5.58108 139.329 5.5314 139.352 5.4765C139.376 5.42159 139.388 5.36254 139.389 5.30276V4.02193C139.389 3.96024 139.377 3.89918 139.353 3.84249C139.329 3.78579 139.294 3.73465 139.25 3.69219C139.165 3.60724 139.05 3.55916 138.931 3.55807H136.835V1.49717C136.838 1.43555 136.827 1.37406 136.805 1.31679C136.782 1.25952 136.748 1.20777 136.704 1.16497C136.627 1.08454 136.521 1.03854 136.41 1.03701H134.784C134.695 1.03555 134.609 1.06135 134.535 1.11101C134.462 1.16066 134.405 1.23182 134.372 1.31507C134.349 1.37287 134.338 1.43484 134.339 1.49717V3.55684H133.411C133.353 3.55549 133.294 3.5675 133.241 3.59199C133.188 3.61647 133.14 3.65281 133.102 3.69834C133.025 3.78687 132.982 3.90193 132.984 4.0207V5.304C132.985 5.39177 133.01 5.47753 133.055 5.55238C133.1 5.62724 133.164 5.68846 133.24 5.72971C133.294 5.75555 133.352 5.76908 133.41 5.76662H134.339V9.36551C134.339 9.84536 134.423 10.2588 134.581 10.5996C134.741 10.9367 134.951 11.2197 135.204 11.4313C135.466 11.6503 135.766 11.8128 136.088 11.9087C136.415 12.0121 136.755 12.0638 137.096 12.0638C137.562 12.0638 138.004 11.9887 138.421 11.8423C138.817 11.7053 139.175 11.4722 139.463 11.1631C139.647 10.9404 139.668 10.6943 139.518 10.4483L138.958 9.51316V9.51193ZM147.78 3.55684H146.171C146.116 3.55785 146.061 3.57036 146.01 3.59363C145.959 3.6169 145.914 3.65043 145.876 3.69219C145.835 3.73558 145.802 3.78651 145.779 3.84229C145.758 3.89876 145.746 3.95885 145.747 4.01947V4.22371C145.544 3.98167 145.295 3.78409 145.014 3.64297C144.609 3.43011 144.136 3.32553 143.601 3.32553C143.092 3.32553 142.591 3.42765 142.117 3.6319C141.638 3.83631 141.204 4.13534 140.84 4.51162C140.46 4.9102 140.158 5.37925 139.952 5.89335C139.722 6.47038 139.608 7.08828 139.618 7.71064C139.618 8.37505 139.729 8.98655 139.95 9.52792C140.173 10.0619 140.468 10.5331 140.833 10.9158C141.188 11.2943 141.614 11.5956 142.087 11.8014C142.56 12.0072 143.069 12.1132 143.584 12.113C144.076 12.1217 144.563 12.0125 145.006 11.7943C145.314 11.6343 145.559 11.4412 145.747 11.2148V11.4326C145.745 11.4921 145.756 11.5513 145.778 11.6062C145.801 11.6612 145.834 11.7106 145.877 11.7512C145.916 11.7913 145.961 11.8232 146.012 11.8452C146.062 11.8671 146.116 11.8787 146.171 11.8792H147.78C147.837 11.8806 147.893 11.8699 147.946 11.8476C147.998 11.8254 148.046 11.7921 148.085 11.75C148.166 11.6649 148.21 11.5508 148.208 11.4326V4.0207C148.21 3.90149 148.167 3.78617 148.087 3.69834C148.049 3.65272 148.002 3.61618 147.948 3.59129C147.895 3.56679 147.838 3.555 147.78 3.55684ZM145.606 8.4907C145.437 8.95456 145.095 9.33232 144.655 9.54269C144.43 9.64997 144.184 9.70423 143.936 9.70141C143.685 9.70141 143.446 9.64727 143.224 9.54146C143.004 9.43906 142.806 9.2934 142.642 9.11285C142.477 8.9323 142.349 8.72044 142.266 8.48947C142.175 8.24565 142.129 7.98721 142.129 7.72663C142.129 7.44979 142.174 7.19018 142.264 6.94903C142.353 6.71894 142.481 6.50855 142.645 6.32891C142.812 6.15296 143.008 6.00901 143.224 5.90812C143.447 5.8023 143.69 5.74817 143.936 5.7494C144.199 5.7494 144.438 5.80353 144.655 5.90935C144.874 6.01393 145.066 6.15542 145.226 6.32891C145.388 6.50486 145.517 6.71402 145.606 6.94903C145.796 7.44486 145.796 7.99486 145.606 8.4907ZM156.622 9.40119L155.699 8.67157C155.522 8.52638 155.355 8.48701 155.21 8.54853C155.079 8.60436 154.964 8.69079 154.872 8.80076C154.673 9.05649 154.434 9.27863 154.167 9.45902C153.934 9.60913 153.629 9.68418 153.269 9.68418C153.004 9.68418 152.76 9.63496 152.542 9.53407C152.327 9.43495 152.134 9.2917 151.975 9.11328C151.812 8.93013 151.686 8.71715 151.602 8.48578C151.515 8.24262 151.471 7.98546 151.474 7.72663C151.474 7.4461 151.515 7.18772 151.602 6.94903C151.687 6.71279 151.811 6.50239 151.975 6.33014C152.138 6.15296 152.332 6.01024 152.546 5.90935C152.772 5.80107 153.019 5.74694 153.269 5.7494C153.629 5.7494 153.931 5.82814 154.167 5.97948C154.406 6.13451 154.646 6.35598 154.873 6.63651C154.968 6.7497 155.079 6.83337 155.21 6.88997C155.358 6.94903 155.523 6.90965 155.695 6.7657L156.618 6.03485C156.732 5.95424 156.817 5.83809 156.861 5.70387C156.886 5.63045 156.896 5.55227 156.889 5.47473C156.882 5.39719 156.858 5.32214 156.82 5.25478C156.464 4.67928 155.973 4.20275 155.391 3.86813C154.781 3.51009 154.05 3.32553 153.232 3.32553C152.668 3.32238 152.109 3.43311 151.588 3.65129C151.066 3.86947 150.593 4.19076 150.194 4.59652C149.805 4.99271 149.497 5.4701 149.29 5.99547C149.07 6.54494 148.957 7.13314 148.96 7.72663C148.96 8.33567 149.072 8.91765 149.29 9.45164C149.5 9.97332 149.807 10.4458 150.194 10.8395C150.593 11.2451 151.067 11.5663 151.588 11.7846C152.11 12.003 152.668 12.1142 153.232 12.1117C154.05 12.1117 154.781 11.9284 155.391 11.5654C155.976 11.232 156.468 10.7537 156.822 10.1751C156.86 10.1101 156.882 10.0374 156.889 9.96225C156.896 9.88643 156.886 9.80992 156.861 9.73832C156.813 9.60626 156.731 9.49007 156.622 9.40242V9.40119ZM165.194 11.1299L162.647 7.26277L164.827 4.29138C164.941 4.12036 164.971 3.95672 164.918 3.80292C164.88 3.69219 164.777 3.55684 164.514 3.55684H162.789C162.69 3.55775 162.593 3.58219 162.506 3.62821C162.398 3.68359 162.309 3.77173 162.253 3.88043L160.511 6.39904H160.089V0.447649C160.091 0.329229 160.048 0.214475 159.969 0.127748C159.929 0.0869473 159.881 0.0547186 159.828 0.0329554C159.776 0.0111921 159.719 0.000333517 159.663 0.00101762H158.051C157.964 0.00131009 157.88 0.0270233 157.807 0.0750545C157.735 0.123086 157.678 0.191382 157.643 0.271703C157.62 0.327334 157.608 0.387308 157.61 0.447649V11.4313C157.61 11.5581 157.656 11.6688 157.743 11.75C157.783 11.7911 157.831 11.8236 157.884 11.8456C157.937 11.8676 157.993 11.8786 158.051 11.878H159.664C159.721 11.8798 159.777 11.8692 159.83 11.8469C159.882 11.8246 159.929 11.7912 159.968 11.7488C160.007 11.7068 160.038 11.657 160.058 11.6024C160.08 11.5477 160.09 11.489 160.087 11.4301V8.52392H160.555L162.456 11.5335C162.592 11.7635 162.779 11.8792 163.013 11.8792H164.817C165.091 11.8792 165.205 11.7439 165.251 11.6307C165.316 11.4707 165.297 11.3083 165.194 11.1311V11.1299ZM125.015 3.55684H123.213C123.146 3.55424 123.079 3.56628 123.017 3.59218C122.954 3.61807 122.898 3.6572 122.852 3.70695C122.774 3.79331 122.72 3.89895 122.695 4.01332L121.365 9.14035H121.041L119.61 4.01332C119.586 3.90347 119.539 3.79998 119.473 3.70941C119.435 3.66072 119.386 3.62162 119.331 3.59516C119.276 3.5687 119.215 3.55559 119.154 3.55684H117.285C117.044 3.55684 116.892 3.63805 116.835 3.79431C116.786 3.94184 116.785 4.10149 116.832 4.24955L119.116 11.4658C119.152 11.5802 119.213 11.675 119.292 11.7512C119.337 11.7944 119.391 11.828 119.449 11.8499C119.507 11.8719 119.57 11.8818 119.632 11.8792H120.598L120.518 12.113L120.288 12.786C120.225 12.9927 120.103 13.1754 119.937 13.3101C119.784 13.4312 119.595 13.4954 119.402 13.4922C119.234 13.4914 119.069 13.4536 118.918 13.3815C118.768 13.312 118.625 13.2257 118.494 13.1243C118.375 13.0381 118.234 12.9889 118.089 12.9829H118.069C117.912 12.9829 117.775 13.0739 117.665 13.2486L117.091 14.1197C116.858 14.4938 116.987 14.7399 117.139 14.8764C117.422 15.152 117.778 15.3673 118.198 15.5211C118.614 15.6749 119.073 15.75 119.56 15.75C120.386 15.75 121.076 15.5199 121.605 15.0548C122.131 14.5922 122.52 13.9635 122.757 13.1797L125.405 4.24955C125.465 4.05884 125.465 3.90012 125.411 3.77093C125.366 3.6725 125.26 3.55684 125.015 3.55684Z"
  fill="#838383"
/>
</svg>
`,Sg=`
  <button type="button" id="apple-pay-close-button">
    <svg width="10" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.572 4.033L8.89.71a.4.4 0 0 0-.566-.566L5.003 3.459 1.681.145a.4.4 0 0 0-.566.566L4.44 4.033
      1.115 7.354a.398.398 0 0 0 0 .566.4.4 0 0 0 .566 0l3.322-3.33 3.322 3.33a.4.4 0 0 0 .566-.566L5.57 4.033z"
        fill="white"
      />
    </svg>
  </button>
`,Ng=`
<svg width="74" height="19" viewBox="0 0 74 19" fill="none" xmlns="http://www.w3.org/2000/svg" id="vault-logo">
  <g clip-path="url(#clip0_9910_9664)">
    <path
      d="M32.1273 15.8163H28.9432C28.6448 15.8163 28.4481 15.6622 28.3497 15.3507L25.1886 6.20188C25.1165 6.01825 25.1296 5.85101 25.2214 5.70345C25.3132 5.55589 25.451 5.48047 25.6346 5.48047H27.9693C28.2513 5.48047 28.435 5.63787 28.5202 5.94611L30.6648 12.9077L32.5536 5.94611C32.6388 5.63459 32.829 5.48047 33.1274 5.48047H35.4195C35.6031 5.48047 35.7441 5.55589 35.8425 5.70345C35.9409 5.85101 35.954 6.01825 35.8851 6.20188L32.7241 15.3507C32.6257 15.6622 32.4257 15.8163 32.1305 15.8163H32.1273Z"
      fill="#343C43" />
    <path
      d="M37.6361 14.5842C36.6097 13.5644 36.0981 12.2495 36.0981 10.6362C36.0981 9.02283 36.6097 7.71118 37.6361 6.69792C38.6624 5.68795 39.8757 5.17969 41.2759 5.17969C41.9416 5.17969 42.5384 5.31085 43.0696 5.57318C43.6008 5.83551 43.9943 6.16998 44.2468 6.57988V5.94373C44.2468 5.81584 44.2927 5.70763 44.3845 5.61581C44.4763 5.524 44.578 5.47809 44.6927 5.47809H46.8373C46.9652 5.47809 47.0701 5.524 47.1554 5.61581C47.2406 5.70763 47.2833 5.81584 47.2833 5.94373V15.3679C47.2833 15.4958 47.2406 15.6008 47.1554 15.686C47.0701 15.7713 46.9652 15.8139 46.8373 15.8139H44.6927C44.578 15.8139 44.4763 15.7713 44.3845 15.686C44.2927 15.6008 44.2468 15.4958 44.2468 15.3679V14.7088C43.991 15.1187 43.6008 15.4565 43.0696 15.7155C42.5384 15.9779 41.935 16.109 41.2562 16.109C39.8691 16.109 38.6624 15.6008 37.6361 14.581V14.5842ZM39.9151 8.79985C39.433 9.31795 39.1936 9.93443 39.1936 10.6558C39.1936 11.3772 39.433 11.997 39.9151 12.5118C40.3971 13.0299 40.9972 13.2857 41.7186 13.2857C42.44 13.2857 43.0401 13.0266 43.5221 12.5118C44.0041 11.997 44.2435 11.3772 44.2435 10.6558C44.2435 9.93443 44.0041 9.31467 43.5221 8.79985C43.0401 8.28502 42.44 8.02597 41.7186 8.02597C40.9972 8.02597 40.3938 8.28502 39.9151 8.79985Z"
      fill="#343C43" />
    <path
      d="M51.6315 5.9016V11.2302C51.6315 11.9385 51.8086 12.4959 52.1627 12.9058C52.5169 13.3157 53.0415 13.5223 53.7334 13.5223C54.4253 13.5223 54.9401 13.319 55.3139 12.9058C55.6878 12.4959 55.878 11.9516 55.878 11.2728V5.9016C55.878 5.78683 55.9239 5.68845 56.0157 5.60319C56.1075 5.51794 56.2092 5.47531 56.3239 5.47531H58.4685C58.6095 5.47531 58.7242 5.52122 58.8095 5.61303C58.8948 5.70485 58.9374 5.81306 58.9374 5.94094V15.3652C58.9374 15.4931 58.8948 15.598 58.8095 15.6832C58.7242 15.7685 58.6128 15.8111 58.4685 15.8111H56.3239C56.196 15.8111 56.0911 15.7718 56.0058 15.6931C55.9206 15.6144 55.878 15.5127 55.878 15.3848V14.7257C55.1139 15.6472 54.081 16.1062 52.7792 16.1062C51.4774 16.1062 50.4707 15.7062 49.7132 14.9061C48.9557 14.106 48.5786 13.0501 48.5786 11.7319V5.89504C48.5786 5.78027 48.6278 5.68189 48.7262 5.59664C48.8246 5.51138 48.9295 5.46875 49.0442 5.46875H51.1658C51.2937 5.46875 51.4019 5.51138 51.4938 5.59664C51.5856 5.68189 51.6315 5.78027 51.6315 5.89504V5.9016Z"
      fill="#343C43" />
    <path
      d="M62.9872 15.8148C62.0658 15.8148 61.387 15.582 60.9509 15.113C60.5115 14.6474 60.2917 14.0178 60.2917 13.2243V1.42267C60.2917 1.29478 60.3344 1.18657 60.4196 1.09475C60.5049 1.00294 60.6164 0.957031 60.7607 0.957031H62.8823C63.0233 0.957031 63.138 1.00294 63.2233 1.09475C63.3085 1.18657 63.3512 1.29478 63.3512 1.42267V12.6078C63.3512 12.8045 63.4069 12.9652 63.5217 13.0865C63.6332 13.2079 63.7906 13.2669 63.9873 13.2669H64.6464C64.9448 13.2669 65.0924 13.4144 65.0924 13.7129V15.2409C65.0924 15.6246 64.8956 15.8148 64.4989 15.8148H62.9905H62.9872Z"
      fill="#343C43" />
    <path
      d="M66.722 12.7378V8.04861H65.3644C65.2365 8.04861 65.1316 8.00271 65.0463 7.91089C64.9611 7.81907 64.9185 7.71086 64.9185 7.58298V5.94997C64.9185 5.82208 64.9611 5.71387 65.0463 5.62206C65.1316 5.53024 65.2365 5.48433 65.3644 5.48433H66.722V2.74626C66.722 2.60526 66.7679 2.49049 66.8597 2.40523C66.9515 2.31997 67.0597 2.27734 67.1876 2.27734H69.3518C69.4666 2.27734 69.5683 2.31997 69.6601 2.40523C69.7519 2.49049 69.7978 2.60198 69.7978 2.74626V5.48433H72.7064C72.8343 5.48433 72.9458 5.53024 73.0474 5.62206C73.1458 5.71387 73.195 5.82208 73.195 5.94997V7.58298C73.195 7.69775 73.1458 7.80268 73.0474 7.90105C72.949 7.99943 72.8343 8.04861 72.7064 8.04861H69.7978V12.0164C69.7978 12.4689 69.9027 12.7804 70.1159 12.9509C70.329 13.1214 70.5684 13.2067 70.8373 13.2067C71.1193 13.2067 71.4308 13.1083 71.7718 12.9083C72.1555 12.6689 72.4441 12.6951 72.6408 12.9935L73.3852 14.1806C73.5557 14.4495 73.5327 14.7052 73.3229 14.9446C72.6146 15.6792 71.5948 16.0497 70.2667 16.0497C69.2764 16.0497 68.437 15.7742 67.7516 15.2234C67.0663 14.6725 66.722 13.8428 66.722 12.741V12.7378Z"
      fill="#343C43" />
    <path
      d="M15.2266 0H4.43496C2.26089 0 0.5 1.76089 0.5 3.93496V14.7266C0.5 16.9006 2.26089 18.6615 4.43496 18.6615H15.2266C17.4006 18.6615 19.1615 16.9006 19.1615 14.7266V3.93496C19.1615 1.76089 17.4006 0 15.2266 0ZM15.079 12.2312L12.1442 14.6118C11.9114 14.8086 11.5507 14.6807 11.4949 14.379L10.8161 11.8934C10.7702 11.6934 10.8489 11.4868 11.0096 11.3589C11.4425 11.0113 11.7179 10.4801 11.7179 9.8833C11.7179 8.44048 10.098 7.37476 8.5765 8.40113C8.48468 8.46344 8.40598 8.54214 8.34368 8.63723C7.63539 9.68983 7.92723 10.7883 8.65192 11.3655C8.8126 11.4934 8.88474 11.6967 8.84211 11.8967L8.22891 14.3823C8.17317 14.6839 7.81246 14.8118 7.57964 14.6151L4.57924 12.2344C4.47431 12.1262 4.41856 11.9787 4.4284 11.8278L4.77271 6.69271C4.78582 6.49268 4.91371 6.31561 5.09734 6.23691L9.41924 4.03661C9.68157 3.9284 9.97341 3.9284 10.2357 4.03661L14.5576 6.23691C14.7445 6.31561 14.8691 6.49268 14.8855 6.69271L15.2299 11.8278C15.2397 11.9787 15.1839 12.1262 15.079 12.2344V12.2312Z"
      fill="#343C43" />
  </g>
  <defs>
    <clipPath id="clip0_9910_9664">
      <rect width="73" height="18.6615" fill="white" transform="translate(0.5)" />
    </clipPath>
  </defs>
</svg>
`,eo={height:"50px",width:"auto",borderRadius:"3px",padding:"10px",locale:"en",type:"pay"},L0=function(e){return e&&In(e)==="object"?Object.keys(eo).reduce(function(t,n){return me(me({},t),{},a4({},n,e[n]||eo[n]))},{}):eo},Eg=`
  .pre-checkout-modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.75);
    transition: all 0.2s ease;
  }

  .pre-checkout-modal.show {
    display: block;
  }

  .pre-checkout-modal__content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    background-color: #fefefe;
    padding: 20px;
    padding-bottom: max(30px, env(safe-area-inset-bottom));
    width: 100%;
    border-radius: 6px 6px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 350px;

    box-sizing: border-box;
    transform: translateY(238px);
    transition: transform 0.3s cubic-bezier(.16,.81,.32,1);
  }

  .modal-wrapper {
    width: 100%;
  }

  .payment-info {
    position: relative;
    padding-bottom: 15px;
    border-bottom: solid 1px whitesmoke;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  .customer-email {
    color: #737373;
    font-size: 13px;
    line-height: 16px;
  }

  .customer-info {
    flex: 1;
    text-align: right;
  }

  .merchant-logo {
    display: flex;
    align-items: center;
    height: 30px;
  }
  .transaction-amount {
    margin-top: 5px;
    font-size: 13px;
    line-height: 16px;
    color: #737373;
  }

  .amount {
    color: #29b263;
    font-weight: bold;
  }

  @media only screen and (min-width: 500px) {
    .pre-checkout-modal__content {
      bottom: 0;
      top: 0;
      margin: auto;
      border-radius: 6px;
      height: fit-content;
    }
  }

  .pre-checkout-modal__content.show {
    transform: translateY(0);
    margin: 0 auto;
    margin-top: 100px;
  }

  .pre-checkout-modal__content > * {
    margin-top: 0;
    margin-bottom: 40px;
  }
  .pre-checkout-modal__content > *:last-child {
    margin-bottom: 0;
  }

  .pre-checkout-modal__content svg {
    margin: auto;
    width: 100%;
  }

  #inline-button-wordmark--white {
    position: absolute;
    bottom: -50px;
    margin: auto;
    left: 0;
    right: 0;
    width: fit-content;
  }

  #inline-button-wordmark--grey {
    display: none;
  }

  .pre-checkout-modal__content #apple-pay-mark--light {
    margin-bottom: 16px;
  }

  .pre-checkout-modal p {
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    color: #4E4E4E;
    line-height: 140%;
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    padding: 0 20px;
    text-align: center;
    letter-spacing: -0.3px;
  }

  .pre-checkout-modal button {
    height: 42px;
    width: 100%;
    
    box-sizing: border-box;
    border-radius: 3px;
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  .pre-checkout-modal .open-paystack-pop-button {
    background: #FAFAFA;
    border: 1px solid #F2F3F3;
    color: #4E4E4E;
    font-weight: 500;
  }

  .pre-checkout-modal .open-paystack-pop-button:hover, 
  .pre-checkout-modal .open-paystack-pop-button:active, 
  .pre-checkout-modal .open-paystack-pop-button:focus {
    background: #F2F3F3;
  }

  .pre-checkout-modal .pay-with-vault-button {
    font-weight: 700;
    background: #44b669;
    background: linear-gradient(to bottom, #44b669 0%, #40ad57 100%);
    border: solid 1px #49a861;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    outline: none;
    color: white;
    transition: all 300ms;
  }

  .pre-checkout-modal .vault-instruction {
    color: #2f3d4d;
    font-size: 14px;
    letter-spacing: normal;
    line-height: 1.4;
    margin: 0 auto 24px;
    padding: 0;
  }
  .vault-logo-container {
    width: 74px;
    height: 20px;
    margin: 0 auto 24px
  }
  .vault-logo-container img {
    height: 100%;
    width: 100%;
    border-radius: 8px;
  }
  .vault-divider {
    margin-bottom: 16px;
    margin-top: 24px;
    position: relative;
  }
  .vault-divider__container {
    align-items: center;
    bottom: 0;
    display: flex;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
  .vault-divider__line {
    border: 1px dashed #ccced0;
    width: 100%;
  }
  .vault-divider__text-container {
    display: flex;
    justify-content: center;
    position: relative;
  }
  .vault-divider__text {
    background-color: #fff;
    color: #999da1;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -.3px;
    line-height: 19.6px;
    margin-bottom: 2px;
    padding: 0 8px;
  }

  #payment-request-button {
    width: 100%;
    height: fit-content;
    margin: 24px 0 16px 0;
  }

  #paystackpop-button {
    padding: 0 16px;
  }

  #apple-pay-close-button {
    position: absolute;
    text-align: center;
    top: 0;
    right: -26px;
    height: 16px;
    width: 16px;
    padding: 0;
    display: inline-block;
    z-index: 3;
    border-radius: 50%;
    background: transparent;
    transition: all 300ms;
    outline: none;
    cursor: pointer;
    border: none;
  }

  #apple-pay-close-button svg {
    width: initial;
  }
  
  #apple-pay-close-button:hover {
    background-color: #e22b28;
  }

  @media only screen and (max-width: 500px) {
    .pre-checkout-modal__content {
      max-width: 500px;
      border-radius: 0;
      padding-bottom: 0;
    }

    .modal-wrapper {
      padding: 0;
    }

    .vault-logo-container {
      width: 74px;
      height: 20px;
    }

    #inline-button-wordmark--white {
      display: none
    }
    
    #inline-button-wordmark--grey {
      display: block;
      width: 100%;
      margin: 16px 0;
      height: 13px;
    }

    #apple-pay-close-button {
      display: none;
    }
  }
`,$0=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Number(parseFloat(e/100).toFixed(2))},M0={headers:{accept:"application/json, text/plain, */*","accept-language":"en-GB,en-US;q=0.9,en;q=0.8","content-type":"application/x-www-form-urlencoded","sec-ch-ua-mobile":"?0","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site"},referrerPolicy:"no-referrer-when-downgrade",method:"POST",mode:"cors",credentials:"omit"};function I0(e){return Object.keys(e).reduce(function(t,n){var r=encodeURIComponent(n),a=encodeURIComponent(e[n]),i="".concat(r,"=").concat(a);return[].concat(i4(t),[i])},[]).join("&")}var _g=function(e){return{biannually:"BIANNUAL PLAN",annually:"ANNUAL PLAN"}[e]||"".concat(e.toUpperCase()," PLAN")},u4=function(){try{return window.location&&window.location.protocol==="https:"&&window.ApplePaySession&&window.ApplePaySession.supportsVersion(Qe.applePayVersion)}catch{return!1}},xl=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return u4()&&e.includes("apple_pay")};function zg(){var e=0;return Array.from(document.querySelectorAll("body *")).forEach(function(t){var n=window.getComputedStyle(t),r=parseFloat(n.zIndex);!Number.isNaN(r)&&r>e&&(e=r)}),e}function to(e){var t=document.createElement("iframe");return t.setAttribute("frameBorder","0"),t.setAttribute("allowtransparency","true"),t.id=e,t.style.display="none",t}function ui(e){return e.querySelector("apple-pay-button")||e.querySelector("#apple-pay-button")}function Qa(e){return document.querySelector("#".concat(e))}function A0(e,t,n){var r=t.channels,a=r===void 0?[]:r,i=t.styles,o=i===void 0?{}:i,l={applePay:!1};return new Promise(function(c,u){if(e)if(xl(a)){if(ui(e))return l.applePay=!0,void c(l);(function(d,m){var h=m.container,w=m.integrity;return new Promise(function(y,b){d||b("No script url");var C=document.createElement("script");C.src=d,C.crossOrigin="anonymous",w&&(C.integrity=w),C.addEventListener("load",function(){y(!0)}),C.addEventListener("error",function(){C.remove(),b(!1)}),h?h.appendChild(C):document.head.appendChild(C)})})("https://applepay.cdn-apple.com/jsapi/v1.1.0/apple-pay-sdk.js",{container:e,integrity:"sha384-z/6BVHCcSypLSykOVpaT1PQWHOOgU45uOOlMkgi/bElX4yFqmChNMb7qiv80wFav"}).then(function(){if(n&&n!==1077497&&window&&!Array.isArray(window.webpackJsonp))throw new Error("Incorrect data type for 'webpackJsonp', expected array, got ".concat(In(window.webpackJsonp),". Switching to fallback apple pay button"));(function(d,m){var h,w,y,b,C,g=m.styles,f=m.theme,x=document.createElement("style"),k=(w=(h=g).height,y=h.width,b=h.borderRadius,C=h.padding,`
  apple-pay-button {
    --apple-pay-button-width: `.concat(y,`;
    --apple-pay-button-height: `).concat(w,`;
    --apple-pay-button-border-radius: `).concat(b,`;
    --apple-pay-button-padding: `).concat(C,`;
    --apple-pay-button-box-sizing: border-box;
    width: `).concat(y,`;
  }
`));x.type="text/css",x.styleSheet?x.styleSheet.cssText=k:x.appendChild(document.createTextNode(k)),d.appendChild(x);var j=document.createElement("apple-pay-button");j.setAttribute("buttonstyle",f==="light"?"white":"black"),j.setAttribute("type",g.type),j.setAttribute("locale",g.locale),d.appendChild(j)})(e,{styles:L0(o.applePay),theme:o.theme}),l.applePay=!0,c(l)}).catch(function(){(function(d,m){var h,w,y,b,C,g,f,x=m.styles,k=m.theme,j=document.createElement("style"),S=(w=(h=x).height,y=h.width,b=h.borderRadius,C=h.padding,g=h.type,f=h.locale,`
  @supports (-webkit-appearance: -apple-pay-button) { 
    .apple-pay-button {
        display: inline-block;
        -webkit-appearance: -apple-pay-button;
        width: `.concat(y,`;
        height: `).concat(w,`;
        border-radius: `).concat(b,`;
        padding: `).concat(C,`;
        -apple-pay-button-type: `).concat(g,`;
        -webkit-locale: `).concat(f,`;
    }
    .apple-pay-button-black {
        -apple-pay-button-style: black;
    }
    .apple-pay-button-white {
        -apple-pay-button-style: white;
    }
    .apple-pay-button-white-with-line {
        -apple-pay-button-style: white-outline;
    }
  }

  @supports not (-webkit-appearance: -apple-pay-button) {
    .apple-pay-button {
        display: inline-block;
        background-size: 100% 60%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        border-radius: 5px;
        padding: 0px;
        box-sizing: border-box;
        min-width: 200px;
        min-height: 32px;
        max-height: 64px;
    }
    .apple-pay-button-black {
        background-image: -webkit-named-image(apple-pay-logo-white);
        background-color: black;
    }
    .apple-pay-button-white {
        background-image: -webkit-named-image(apple-pay-logo-black);
        background-color: white;
    }
    .apple-pay-button-white-with-line {
        background-image: -webkit-named-image(apple-pay-logo-black);
        background-color: white;
        border: .5px solid black;
    }
  }
`));j.type="text/css",j.styleSheet?j.styleSheet.cssText=S:j.appendChild(document.createTextNode(S)),d.appendChild(j);var N=document.createElement("button");N.classList.add("apple-pay-button",k==="light"?"apple-pay-button-white":"apple-pay-button-black"),N.id="apple-pay-button";var _=document.createElement("span");_.classList.add("logo"),N.appendChild(_),d.appendChild(N)})(e,{styles:L0(o.applePay),theme:o.theme}),l.applePay=!0,c(l)})}else u("No wallet payment method is available on this device");else u("Container to mount elements was not provided")})}function Tg(e){for(;e.firstChild;)e.removeChild(e.firstChild)}var d4="payment-request-button",p4="paystackpop-button",f4="pay-with-vault-button";function h4(e){var t=document.createElement("button");return t.id=p4,t.className="open-paystack-pop-button",t.innerText=e,t}function D0(e){return e.querySelector("#".concat(p4))}function m4(){var e=document.createElement("div");return e.id=d4,e}function no(e){return e.querySelector("#".concat(d4))}function Pg(){var e=document.createElement("button");return e.className="pay-with-vault-button",e.id=f4,e.innerText="Pay with Vault",e}function Og(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=document.createElement("div");n.className="vault-logo-container",n.innerHTML=Ng,e.appendChild(n);var r=document.createElement("p");r.id="instruction",r.className="vault-instruction",r.innerHTML="Access your saved cards and bank details for faster, more secure payments",e.appendChild(r);var a=Pg();e.appendChild(a);var i=document.createElement("div");if(i.className="vault-divider",i.innerHTML='<div id="vault-divider" class="vault-divider__container"><div class="vault-divider__line"></div></div><div class="vault-divider__text-container"><span class="vault-divider__text">or</span></div>',e.appendChild(i),t.canPayWithApplePay){var o=m4();e.appendChild(o)}if(t.hasOtherPaymentMethods){var l=h4("Use other payment methods");e.appendChild(l)}}function Rg(e,t){var n=t.hasOtherPaymentMethods,r=document.createElement("div");r.innerHTML=`
  <svg width="51" height="32" viewBox="0 0 51 32" fill="none" xmlns="http://www.w3.org/2000/svg" id="apple-pay-mark--light">
    <g>
    <path d="M46.0162 0H4.98386C4.81297 0 4.64177 0 4.47118 0.000996555C4.32698 0.00202331 4.18311 0.00362383 4.03925 0.00754966C3.72548 0.0160355 3.40903 0.0345472 3.09919 0.0902335C2.7844 0.146886 2.49148 0.239294 2.20571 0.384791C1.92477 0.52766 1.66757 0.71453 1.44468 0.937516C1.22169 1.1605 1.03482 1.41728 0.891977 1.69852C0.74645 1.98429 0.653982 2.27731 0.597722 2.59234C0.541737 2.90227 0.523101 3.21866 0.514645 3.53209C0.51078 3.67596 0.509122 3.81982 0.508183 3.96366C0.507186 4.13461 0.507519 4.30545 0.507519 4.4767V27.5236C0.507519 27.6949 0.507186 27.8654 0.508183 28.0367C0.509122 28.1805 0.51078 28.3244 0.514645 28.4683C0.523101 28.7814 0.541737 29.0978 0.597722 29.4077C0.653982 29.7228 0.74645 30.0157 0.891977 30.3015C1.03482 30.5827 1.22169 30.8399 1.44468 31.0625C1.66757 31.2859 1.92477 31.4727 2.20571 31.6152C2.49148 31.7611 2.7844 31.8535 3.09919 31.9102C3.40903 31.9655 3.72548 31.9843 4.03925 31.9928C4.18311 31.9961 4.32698 31.998 4.47118 31.9987C4.64177 32 4.81297 32 4.98386 32H46.0162C46.1868 32 46.358 32 46.5286 31.9987C46.6724 31.998 46.8163 31.9961 46.9608 31.9928C47.2739 31.9843 47.5903 31.9655 47.9009 31.9102C48.2153 31.8535 48.5083 31.7611 48.7941 31.6152C49.0753 31.4727 49.3317 31.2859 49.5551 31.0625C49.7777 30.8399 49.9646 30.5827 50.1078 30.3015C50.2537 30.0157 50.346 29.7228 50.402 29.4077C50.458 29.0978 50.4762 28.7814 50.4847 28.4683C50.4886 28.3244 50.4906 28.1805 50.4912 28.0367C50.4925 27.8654 50.4926 27.6949 50.4926 27.5236V4.4767C50.4926 4.30545 50.4925 4.13461 50.4912 3.96366C50.4906 3.81982 50.4886 3.67596 50.4847 3.53209C50.4762 3.21866 50.458 2.90227 50.402 2.59234C50.346 2.27731 50.2537 1.98429 50.1078 1.69852C49.9646 1.41728 49.7777 1.1605 49.5551 0.937516C49.3317 0.71453 49.0753 0.52766 48.7941 0.384791C48.5083 0.239294 48.2153 0.146886 47.9009 0.0902335C47.5903 0.0345472 47.2739 0.0160355 46.9608 0.00754966C46.8163 0.00362383 46.6724 0.00202331 46.5286 0.000996555C46.358 0 46.1868 0 46.0162 0Z" fill="black"/>
    <path d="M46.0162 1.06662L46.521 1.06759C46.6577 1.06855 46.7945 1.07003 46.932 1.07378C47.1711 1.08024 47.4509 1.09319 47.7117 1.13994C47.9384 1.18077 48.1285 1.24286 48.311 1.33575C48.4911 1.42728 48.6562 1.54723 48.8003 1.69113C48.9449 1.83599 49.065 2.0013 49.1578 2.18343C49.2501 2.36447 49.3118 2.55369 49.3524 2.78205C49.3991 3.04001 49.412 3.32055 49.4185 3.56121C49.4222 3.69704 49.424 3.83287 49.4247 3.97194C49.426 4.14012 49.4259 4.3082 49.4259 4.47671V27.5236C49.4259 27.6921 49.426 27.8599 49.4246 28.0317C49.424 28.1675 49.4222 28.3033 49.4185 28.4394C49.4119 28.6797 49.3991 28.9601 49.3519 29.2211C49.3118 29.4463 49.2502 29.6356 49.1573 29.8175C49.0648 29.9992 48.9449 30.1643 48.8009 30.3083C48.656 30.4532 48.4915 30.5728 48.3092 30.6652C48.1281 30.7576 47.9383 30.8197 47.7138 30.8601C47.4477 30.9075 47.1562 30.9205 46.9367 30.9265C46.7986 30.9296 46.6611 30.9315 46.5203 30.9321C46.3525 30.9334 46.1841 30.9334 46.0162 30.9334H4.98386C4.98162 30.9334 4.97945 30.9334 4.97718 30.9334C4.81127 30.9334 4.64503 30.9334 4.4761 30.9321C4.33836 30.9315 4.20093 30.9296 4.06805 30.9266C3.8435 30.9205 3.55181 30.9075 3.2879 30.8604C3.06151 30.8197 2.87171 30.7576 2.68822 30.664C2.50766 30.5724 2.34329 30.453 2.19831 30.3077C2.05444 30.1641 1.93488 29.9995 1.84245 29.8176C1.74992 29.6358 1.68801 29.446 1.64731 29.218C1.60025 28.9576 1.58733 28.6783 1.58087 28.4396C1.57718 28.303 1.57564 28.1664 1.57476 28.0305L1.5741 27.6295L1.57413 27.5236V4.47671L1.5741 4.37083L1.57473 3.97067C1.57564 3.83402 1.57718 3.6974 1.58087 3.56088C1.58733 3.32197 1.60025 3.04258 1.64769 2.77991C1.68804 2.55405 1.74992 2.36422 1.84293 2.18155C1.93464 2.001 2.05441 1.83617 2.19903 1.69158C2.34308 1.54747 2.50799 1.42767 2.6897 1.33527C2.87122 1.24283 3.06138 1.18077 3.28778 1.14003C3.54864 1.09316 3.82861 1.08024 4.06839 1.07375C4.20507 1.07003 4.34174 1.06855 4.4774 1.06762L4.98386 1.06662H46.0162Z" fill="white"/>
    <path d="M14.1531 10.7629C14.5811 10.2276 14.8715 9.50886 14.7949 8.77435C14.1684 8.80551 13.4038 9.18768 12.9612 9.72342C12.5638 10.1822 12.212 10.9311 12.3037 11.6348C13.007 11.6958 13.7097 11.2832 14.1531 10.7629Z" fill="black"/>
    <path d="M14.7869 11.7722C13.7655 11.7114 12.8972 12.3519 12.4094 12.3519C11.9214 12.3519 11.1745 11.8029 10.3667 11.8177C9.31521 11.8331 8.33959 12.4276 7.80602 13.3731C6.70857 15.2646 7.51641 18.0704 8.58362 19.611C9.10188 20.3731 9.72648 21.2123 10.5495 21.1822C11.3271 21.1517 11.6319 20.6787 12.5771 20.6787C13.5216 20.6787 13.7961 21.1822 14.6192 21.1669C15.4729 21.1516 16.0065 20.4044 16.5248 19.6415C17.1193 18.7727 17.3627 17.9338 17.378 17.8877C17.3627 17.8725 15.732 17.2469 15.7169 15.3711C15.7015 13.8004 16.9972 13.0534 17.0581 13.007C16.3265 11.9249 15.1832 11.8029 14.7869 11.7722Z" fill="black"/>
    <path d="M23.68 9.64661C25.8999 9.64661 27.4457 11.1768 27.4457 13.4046C27.4457 15.6404 25.8681 17.1786 23.6244 17.1786H21.1665V21.0872H19.3907V9.64661H23.68V9.64661ZM21.1665 15.688H23.2041C24.7502 15.688 25.6302 14.8556 25.6302 13.4126C25.6302 11.9697 24.7502 11.1451 23.2121 11.1451H21.1665V15.688Z" fill="black"/>
    <path d="M27.9097 18.7167C27.9097 17.2578 29.0276 16.3619 31.0098 16.2509L33.293 16.1162V15.474C33.293 14.5464 32.6666 13.9914 31.6203 13.9914C30.629 13.9914 30.0106 14.467 29.8601 15.2124H28.2428C28.3379 13.7059 29.6222 12.5959 31.6836 12.5959C33.7053 12.5959 34.9976 13.6663 34.9976 15.3392V21.0872H33.3563V19.7156H33.3169C32.8333 20.6433 31.7787 21.2299 30.6847 21.2299C29.0514 21.2299 27.9097 20.2151 27.9097 18.7167ZM33.293 17.9635V17.3055L31.2395 17.4323C30.2167 17.5037 29.6381 17.9556 29.6381 18.6691C29.6381 19.3985 30.2406 19.8742 31.1603 19.8742C32.3574 19.8742 33.293 19.0496 33.293 17.9635Z" fill="black"/>
    <path d="M36.547 24.1556V22.768C36.6736 22.7997 36.959 22.7997 37.1018 22.7997C37.8946 22.7997 38.3228 22.4668 38.5843 21.6105C38.5843 21.5946 38.7351 21.1031 38.7351 21.0952L35.7224 12.7466H37.5774L39.6866 19.5333H39.7181L41.8273 12.7466H43.6349L40.5109 21.5232C39.7976 23.5451 38.973 24.1952 37.2447 24.1952C37.1018 24.1952 36.6736 24.1793 36.547 24.1556Z" fill="black"/>
    </g>
    <defs>
    <clipPath id="clip0">
    <rect width="49.9851" height="32" fill="white" transform="translate(0.507462)"/>
    </clipPath>
    </defs>
  </svg>
`,e.appendChild(r);var a=document.createElement("p");a.id="apple-pay-description",a.innerHTML="Pay with Apple Pay to complete your purchase without filling a form",e.appendChild(a);var i=m4();if(e.appendChild(i),n){var o=h4("More payment options");e.appendChild(o)}}function H0(e){return e.some(function(t){return t!=="apple_pay"})}var Za=[{value:"key",required:!0,types:["string"]},{value:"amount",required:!0,or:["plan","planCode"],types:["string","number"]},{value:"currency",required:!1,types:["string"]},{value:"email",required:!0,or:["customerCode"],types:["string"]},{value:"label",required:!1,types:["string"]},{value:"firstName",required:!1,types:["string"]},{value:"lastName",required:!1,types:["string"]},{value:"reference",required:!1,types:["string"]},{value:"phone",required:!1,types:["string"]},{value:"customerCode",required:!1,override:"email",types:["string"]},{value:"channels",required:!1,types:["array"]},{value:"paymentRequest",required:!1,types:["string","number"]},{value:"paymentPage",required:!1,types:["string"]},{value:"hash",required:!1,types:["string"]},{value:"container",required:!1,types:["string"]},{value:"metadata",required:!1,types:["object"]},{value:"subaccountCode",required:!1,types:["string"]},{value:"bearer",required:!1,types:["string"]},{value:"transactionCharge",required:!1,types:["string","number"]},{value:"planCode",required:!1,override:"amount",types:["string"]},{value:"subscriptionCount",required:!1,types:["number"]},{value:"planInterval",required:!1,types:["string"]},{value:"subscriptionLimit",required:!1,types:["number"]},{value:"subscriptionStartDate",required:!1,types:["string"]},{value:"accessCode",required:!1,types:["string"]},{value:"onError",required:!1,types:["function"]},{value:"onLoad",required:!1,types:["function"]},{value:"onSuccess",required:!1,types:["function"]},{value:"onCancel",required:!1,types:["function"]},{value:"callback",required:!1,types:["function"]},{value:"onClose",required:!1,types:["function"]},{value:"onBankTransferConfirmationPending",required:!1,types:["function"]},{value:"firstname",required:!1,types:["string"]},{value:"lastname",required:!1,types:["string"]},{value:"customer_code",required:!1,types:["string"]},{value:"payment_request",required:!1,types:["string","number"]},{value:"subaccount",required:!1,types:["string"]},{value:"transaction_charge",required:!1,types:["number","string"]},{value:"plan",required:!1,types:["string"]},{value:"quantity",required:!1,types:["number"]},{value:"interval",required:!1,types:["string"]},{value:"invoice_limit",required:!1,types:["number","string"]},{value:"start_date",required:!1,types:["string"]},{value:"payment_page",required:!1,types:["number","string"]},{value:"order_id",required:!1,types:["number"]},{value:"ref",required:!1,types:["string"]},{value:"card",required:!1,types:["string"]},{value:"bank",required:!1,types:["string"]},{value:"split",required:!1,types:["object"]},{value:"split_code",required:!1,types:["string"]},{value:"transaction_type",required:!1,types:["string"]},{value:"subscription",required:!1,types:["number"]},{value:"language",required:!1,types:["string"]},{value:"connect_account",required:!1,types:["string"]},{value:"connect_split",required:!1,types:["array"]}];function Lg(e){return(e==null?void 0:e.length)>500?e.split("?")[0]:e}function $g(e){var t,n,r,a,i=me({},e);return i.metadata=e.metadata||{},i.metadata.referrer=(t=window.location,n=t.href,r=n===void 0?"":n,a=t.ancestorOrigins,[r].concat(i4(a===void 0?[]:a)).map(Lg).join(",")),i.metadata=JSON.stringify(i.metadata),i.mode="popup",e.split&&typeof e.split!="string"&&(i.split=JSON.stringify(i.split)),i.card!==void 0&&["false",!1].indexOf(i.card)>-1&&(i.channels=["bank"],delete i.card),i.bank!==void 0&&["false",!1].indexOf(i.bank)>-1&&(i.channels=["card"],delete i.bank),[{to:"firstname",from:"firstName"},{to:"lastname",from:"lastName"},{to:"customer_code",from:"customerCode"},{to:"payment_request",from:"paymentRequest"},{to:"subaccount",from:"subaccountCode"},{to:"transaction_charge",from:"transactionCharge"},{to:"plan",from:"planCode"},{to:"quantity",from:"subscriptionCount"},{to:"interval",from:"planInterval"},{to:"invoice_limit",from:"subscriptionLimit"},{to:"start_date",from:"subscriptionStartDate"},{to:"ref",from:"reference"}].forEach(function(o){i[o.from]&&(i[o.to]=i[o.from],delete i[o.from])}),Object.values(e).forEach(function(o,l){if(typeof o=="function"){var c=Object.keys(e)[l];delete i[c]}}),i}var Mg=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"],g4=window&&window.navigator&&(window.navigator.platform||window.navigator.userAgentData&&window.navigator.userAgentData.platform),v4=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.platform,n=e.userAgent,r=n===void 0?window&&window.navigator&&window.navigator.userAgent:n,a=t||g4;return Mg.includes(a)||r.includes("Mac")&&"ontouchend"in document},Ig=function(e,t,n){var r="".concat(Qe.paystackApiUrl,"transaction/update_log/").concat(e),a={Authorization:"Bearer ".concat(t)};return fetch(r,{method:"POST",body:JSON.stringify({payload:JSON.stringify(n)}),headers:a})},Ag=function(e,t){var n="".concat(Qe.paystackApiUrl,"transaction/set_ip/").concat(e),r={Authorization:"Bearer ".concat(t)};return fetch(n,{method:"POST",headers:r})},Dg={initializeLog:function(e){var t=e||{},n=t.attempts,r=t.authentication,a=t.errors,i=t.history;this.log={start_time:Math.round(Date.now()/1e3),time_spent:0,attempts:n||0,authentication:r,errors:a||0,success:!1,mobile:v4(),input:[],history:i||[]}},getTimeSpent:function(){var e=Math.round(Date.now()/1e3);return this.log.time_spent=e-this.log.start_time,this.log.time_spent},logAPIResponse:function(e,t){switch(e.status){case"success":return this.logApiSuccess(t);case"failed":return this.logApiError(e.message);default:return!1}},logValidationResponse:function(e){return this.log.history.push({type:"action",message:e,time:this.getTimeSpent()}),this.saveLog()},logAttempt:function(e){var t="Attempted to pay";return e&&(t+=" with ".concat(e)),this.log.attempts+=1,this.log.history.push({type:"action",message:t,time:this.getTimeSpent()}),this.saveLog()},logApiError:function(e){var t="Error";return e&&(t+=": ".concat(e)),this.log.errors+=1,this.log.history.push({type:"error",message:t,time:this.getTimeSpent()}),this.saveLog()},logApiSuccess:function(e){var t="Successfully paid";return e&&(t+=" with ".concat(e)),this.log.success=!0,this.log.history.push({type:"success",message:t,time:this.getTimeSpent()}),this.saveLog()},saveLog:function(){try{if(this.response)return Ig(this.id,this.response.merchant_key,this.log)}catch{}},saveIpAddress:function(){try{if(this.response)return Ag(this.id,this.response.merchant_key)}catch{}}},Hg=["language","connect_account"],Vg={requestInline:function(){var e=this,t=this.urlParameters,n=t.language,r=t.connect_account,a=vl(t,Hg),i=me({"Content-Type":"application/json"},n&&{"Accept-Language":n});return(this.accessCode?fetch(new URL("transaction/verify_access_code/".concat(this.accessCode),Qe.paystackApiUrl).toString(),{headers:i}):fetch(new URL("/checkout/request_inline",Qe.paystackApiUrl).toString(),{method:"POST",body:JSON.stringify(a),headers:me(me({},i),r&&{"x-connect-account":r})})).then(function(o){return o.json()}).then(function(o){if(o.status===!1)throw new Error(o.message);return e.response=o.data,e.id=o.data.id,e.status=o.data.transaction_status,e.accessCode=o.data.access_code,e.log=null,Object.assign(e,Dg),e.initializeLog(o.data.log),e.saveIpAddress(),o.data})}},ro=function(){function e(t){n4(this,e),function(u){function d(y,b){this.message=y,this.issues=b||[]}if(!u||In(u)!=="object")throw new d("Transaction parameters should be a non-empty object");var m=u;if("accessCode"in m)return{accessCode:m.accessCode};Object.keys(m).forEach(function(y){Za.find(function(b){return b.value===y})!==void 0||delete m[y]});var h=Object.keys(m),w=[];if(Za.filter(function(y){return y.required}).forEach(function(y){var b=!m[y.value],C=y.or?y.or.some(function(g){return m[g]}):null;b&&!C&&w.push({message:"Required parameter missing: ".concat(y.value)})}),h.forEach(function(y){var b=m[y],C=Za.find(function(f){return f.value===y}),g=In(b);g==="object"&&Array.isArray(b)&&(g="array"),C.types.indexOf(g)<=-1&&w.push({message:"Invalid parameter type: ".concat(y),validTypes:C.types})}),h.forEach(function(y){var b=Za.find(function(C){return C.value===y});b.override&&delete m[b.override]}),w.length)throw new d("Invalid transaction parameters",w)}(t),this.parameters=t,this.urlParameters=$g(t),this.id=null,this.status=null,this.accessCode=t.accessCode||null,this.authorizationUrl=null,this.errors=[],this.response=null,this.isActive=!0;var n=t.onError,r=t.onLoad,a=t.onSuccess,i=t.onCancel,o=t.callback,l=t.onClose,c=t.onBankTransferConfirmationPending;this.callbacks={onError:n,onLoad:r,onSuccess:a,onCancel:i,onBankTransferConfirmationPending:c},this.deprecatedCallbacks={callback:o,onClose:l},Object.assign(this,Vg)}return r4(e,[{key:"onSetupError",value:function(t){this.logError(t),this.callbacks.onError&&this.callbacks.onError(t)}},{key:"onLoad",value:function(t){var n=t.id,r=t.customer,a=t.accessCode;Object.assign(this,{id:n,customer:r,accessCode:a}),this.authorizationUrl="".concat(Qe.checkoutUrl).concat(a),this.callbacks.onLoad&&this.callbacks.onLoad({id:n,customer:r,accessCode:a})}},{key:"onSuccess",value:function(t){this.isActive=!1,this.response=t,this.status=t.status,this.callbacks.onSuccess&&this.callbacks.onSuccess(t),this.deprecatedCallbacks.callback&&this.deprecatedCallbacks.callback(t)}},{key:"setStatus",value:function(t){this.status=t}},{key:"onCancel",value:function(){this.callbacks.onCancel&&this.callbacks.onCancel(),this.deprecatedCallbacks.onClose&&this.deprecatedCallbacks.onClose()}},{key:"cancel",value:function(){this.isActive=!1,this.onCancel()}},{key:"onBankTransferConfirmationPending",value:function(){this.cancel(),this.callbacks.onBankTransferConfirmationPending&&this.callbacks.onBankTransferConfirmationPending()}},{key:"logError",value:function(t){this.errors.push(t)}}]),e}(),$c=console?console.warn||console.log:function(){};function V0(e,t,n){$c('"'.concat(e,'" has been deprecated, please use "').concat(t,'". ').concat(n||""))}var B,Fg=["preload","inlineTransaction","transactionData"],Bg=["container","styles","onElementsMount"];function ao(e,t){if(!e.length)return null;var n=e.filter(function(r){var a,i,o,l,c=!r.status||r.status==="abandoned",u=(a=r.parameters,i=t,o=Object.keys(a).sort().join("")===Object.keys(i).sort().join(""),l=Object.values(a).sort().join("")===Object.values(i).sort().join(""),o&&l);return c&&u});return n.length?n[n.length-1]:null}function F0(e){var t=e.checkoutIframe,n=e.urlParameters;t&&n&&t.contentWindow.postMessage({type:"inline:url",path:"newTransaction",params:n},"*")}var Ug="trackCheckoutClosed",B0="trackPaymentError",Wg="trackPaymentAttempt",qg="trackPaymentCompletion";function io(e){throw $c(e),new Error(e)}var U0,W0,x4=function(){function e(t){var n,r;n4(this,e),this.id=function(){for(var a="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;o<5;o+=1)a+=i.charAt(Math.floor(Math.random()*i.length));return a}(),this.transactions=[],this.isOpen=!1,this.isLoaded=!1,this.isDeprecatedApi=t&&t.isDeprecatedApi,t&&t.isEmbed?this.isEmbed=!0:t&&t.isPaymentRequest&&(t.container&&Qa(t.container)||io("A container is required to mount the payment request button"),this.paymentRequestContainer=Qa(t.container),this.paymentRequestTransaction=null),this.preCheckoutModal=null,this.backgroundIframe=function(a){var i=to("inline-background-".concat(a));i.style.cssText=`
  z-index: 999999999999999;
  background: transparent;
  background: rgba(0, 0, 0, 0.75);    
  border: 0px none transparent;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s;
  -webkit-transition: opacity 0.3s;
  visibility: hidden;
  display: none;
`,document.body.appendChild(i);var o=i.contentWindow.document;return o.open(),o.write(`
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Paystack Popup Loader</title>
    <style>
      .app-loader {
        margin: 200px 0;
        text-align: center;
        color: white;
      }      
      @keyframes app-loader__spinner {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @-webkit-keyframes app-loader__spinner {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      .app-loader__spinner {
        position: relative;
        display: inline-block;
      }
      .app-loader__spinner div {
        left: 95px;
        top: 35px;
        position: absolute;
        -webkit-animation: app-loader__spinner linear 1s infinite;
        animation: app-loader__spinner linear 1s infinite;
        background: white;
        width: 10px;
        height: 30px;
        border-radius: 40%;
        -webkit-transform-origin: 5px 65px;
        transform-origin: 5px 65px;
      }
      .app-loader__spinner div:nth-child(1) {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-animation-delay: -0.916666666666667s;
        animation-delay: -0.916666666666667s;
      }
      .app-loader__spinner div:nth-child(2) {
        -webkit-transform: rotate(30deg);
        transform: rotate(30deg);
        -webkit-animation-delay: -0.833333333333333s;
        animation-delay: -0.833333333333333s;
      }
      .app-loader__spinner div:nth-child(3) {
        -webkit-transform: rotate(60deg);
        transform: rotate(60deg);
        -webkit-animation-delay: -0.75s;
        animation-delay: -0.75s;
      }
      .app-loader__spinner div:nth-child(4) {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        -webkit-animation-delay: -0.666666666666667s;
        animation-delay: -0.666666666666667s;
      }
      .app-loader__spinner div:nth-child(5) {
        -webkit-transform: rotate(120deg);
        transform: rotate(120deg);
        -webkit-animation-delay: -0.583333333333333s;
        animation-delay: -0.583333333333333s;
      }
      .app-loader__spinner div:nth-child(6) {
        -webkit-transform: rotate(150deg);
        transform: rotate(150deg);
        -webkit-animation-delay: -0.5s;
        animation-delay: -0.5s;
      }
      .app-loader__spinner div:nth-child(7) {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
        -webkit-animation-delay: -0.416666666666667s;
        animation-delay: -0.416666666666667s;
      }
      .app-loader__spinner div:nth-child(8) {
        -webkit-transform: rotate(210deg);
        transform: rotate(210deg);
        -webkit-animation-delay: -0.333333333333333s;
        animation-delay: -0.333333333333333s;
      }
      .app-loader__spinner div:nth-child(9) {
        -webkit-transform: rotate(240deg);
        transform: rotate(240deg);
        -webkit-animation-delay: -0.25s;
        animation-delay: -0.25s;
      }
      .app-loader__spinner div:nth-child(10) {
        -webkit-transform: rotate(270deg);
        transform: rotate(270deg);
        -webkit-animation-delay: -0.166666666666667s;
        animation-delay: -0.166666666666667s;
      }
      .app-loader__spinner div:nth-child(11) {
        -webkit-transform: rotate(300deg);
        transform: rotate(300deg);
        -webkit-animation-delay: -0.083333333333333s;
        animation-delay: -0.083333333333333s;
      }
      .app-loader__spinner div:nth-child(12) {
        -webkit-transform: rotate(330deg);
        transform: rotate(330deg);
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
      }
      .app-loader__spinner {
        width: 40px;
        height: 40px;
        -webkit-transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);
        transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);
      }
    </style>
  </head>

  <body>
    <div id="app-loader" class="app-loader">
      <div id="spinner" class="app-loader__spinner">
        <div></div><div></div><div></div><div></div><div></div><div></div><div>
        </div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
  </body>

  </html>
`),o.close(),i}(this.id),this.checkoutIframe=(n=this.id,(r=to("inline-checkout-".concat(n))).src="".concat(Qe.checkoutUrl,"popup"),r.style.cssText=`
  z-index: 999999999999999;
  background: transparent;
  border: 0px none transparent;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  visibility: hidden;
  display: none;
  height: 100%;
`,r.setAttribute("allowpaymentrequest","true"),r.setAttribute("allow","payment; clipboard-read; clipboard-write"),document.body.appendChild(r),r),this.registerListeners()}return r4(e,[{key:"registerListeners",value:function(){var t=this;window.addEventListener("message",function(n){var r="".concat(n.origin,"/")===Qe.checkoutUrl,a=t.checkoutIframe&&t.checkoutIframe.contentWindow===n.source,i=t.isEmbed;r||a?t.respondToEvent(n):i&&t.respondToEmbedEvents(n)})}},{key:"sendAnalyticsEventToCheckout",value:function(t,n){this.checkoutIframe.contentWindow.postMessage({type:"analytics",action:t,params:n},"*")}},{key:"checkout",value:function(t){this.activeTransaction()&&this.activeTransaction().cancel(),B=this;var n=ao(this.transactions,t)||new ro(t);return new Promise(function(r,a){n.requestInline().then(function(i){var o=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=c.platform,d=c.userAgent,m=d===void 0?window&&window.navigator&&window.navigator.userAgent:d,h=u||g4,w=m&&!!m.match(/Version\/[\d.]+.*Safari/),y=h&&/(Mac)/i.test(h);return v4()||y&&w}()&&xl(i.channels),l=function(){var c,u,d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return!((c=d.link_config)===null||c===void 0||!c.enabled||(u=d.link_config)===null||u===void 0||!u.has_payment_instruments)}(i);l||o?(B.preloadTransaction({inlineTransaction:n,transactionData:i}),B.preCheckoutModal=function(c,u){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},m=document.querySelector("#pre-checkout-modal-".concat(c));if(m){if(D0(m)&&no(m))return m;m.remove()}var h=document.createElement("div");h.classList.add("pre-checkout-modal"),h.id="pre-checkout-modal-".concat(c),h.style.zIndex=zg()+1;var w=document.createElement("div");w.classList.add("pre-checkout-modal__content"),h.appendChild(w);var y=u||{},b=y.merchant_logo,C=y.merchant_name,g=y.email,f=y.amount,x=y.currency,k=y.label,j=y.channels,S=new Intl.NumberFormat("en",{style:"currency",currency:x,currencyDisplay:"code",maximumFractionDigits:2,minimumFractionDigits:0}).format(f/100),N=document.createElement("div");N.classList.add("payment-info"),N.innerHTML='<img class="merchant-logo" src="'.concat(b,'" alt="').concat(C,` Logo">
    <div class="customer-info">
      <div class="customer-email">`).concat(k||g,`</div>
      <div class="transaction-amount">Pay <span class="amount">`).concat(S,`</span></div>
    </div>`),w.appendChild(N),w.innerHTML+=Sg;var _=document.createElement("div");_.classList.add("modal-wrapper"),d.canPayWithVault?Og(_,{canPayWithApplePay:d.canPayWithApplePay,hasOtherPaymentMethods:H0(j)}):Rg(_,{hasOtherPaymentMethods:H0(j)}),_.innerHTML=_.innerHTML+c4+jg,w.appendChild(_);var R=document.createElement("style");return R.textContent=Eg,document.body.appendChild(R),document.body.appendChild(h),h}(B.id,i,{canPayWithVault:l,canPayWithApplePay:o}),o?(B.paymentRequestContainer=no(B.preCheckoutModal),A0(B.paymentRequestContainer,{channels:i.channels,styles:{applePay:{width:"100%",type:"pay",height:"42px",padding:"15px",borderRadius:"5px"}}},i.merchant_id).then(function(){B.registerPaymentRequestEventListeners()}).catch(function(){l?no(B.preCheckoutModal).remove():(B.closePreCheckoutModal(),B.animateCheckoutIn())}).finally(function(){r(n)})):r(n)):(B.newTransaction({inlineTransaction:n,transactionData:i}),r(n))}).catch(function(i){n.onSetupError({status:!1,message:i.message}),a(i)})})}},{key:"openPreCheckoutModal",value:function(){var t;this.registerPreCheckoutModalEventListeners(),t=this.preCheckoutModal,new Promise(function(n,r){try{var a=t.querySelector(".pre-checkout-modal__content");t.classList.add("show"),setTimeout(function(){a.classList.add("show"),n(!0)},50)}catch(i){r(i)}})}},{key:"registerPreCheckoutModalEventListeners",value:function(){var t,n=this,r=!1,a=this.activeTransaction();document.addEventListener("touchstart",function(c){c.preventDefault(),r||(r=!0,t=setTimeout(function(){r=!1},125))},!0),document.addEventListener("touchend",function(c){c.target&&c.target.isSameNode(B.preCheckoutModal)&&r&&(clearTimeout(t),B.closePreCheckoutModal(),a&&a.cancel()),r=!1},!0);var i=D0(this.preCheckoutModal);i&&(i.onclick=function(){n.closePreCheckoutModal(),n.animateCheckoutIn()});var o=this.preCheckoutModal.querySelector("#".concat(f4));o&&(o.onclick=function(){n.closePreCheckoutModal(),n.animateCheckoutIn(),n.checkoutIframe.contentWindow.postMessage({type:"inline:pay-with-vault"},"*")});var l=function(c){return c.querySelector("#apple-pay-close-button")}(this.preCheckoutModal);l.onclick=function(){n.sendAnalyticsEventToCheckout(Ug),n.closePreCheckoutModalAndCancelTransaction()}}},{key:"closePreCheckoutModal",value:function(t){var n;this.preCheckoutModal&&(t==="failed"?(n=this.preCheckoutModal)&&(n.querySelector("#apple-pay-mark--light").innerHTML=`<svg width="50" height="30" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="error-icon">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="error" fill-rule="nonzero">
            <path d="M9.14672,0.47855 L0.14829,15.47855 C-0.0403320234,15.7872042 -0.0475647902,16.1736607 0.129375884,16.4891566 C0.306316558,16.8046526 0.639843999,16.9999993 1.00157,17 L19.43546,17 C19.797186,16.9999993 20.1307134,16.8046526 20.3076541,16.4891566 C20.4845948,16.1736607 20.477362,15.7872042 20.28874,15.47855 L10.85328,0.47855 C10.671624,0.181297031 10.3483651,3.00996351e-06 10,3.00996351e-06 C9.6516349,3.00996351e-06 9.32837603,0.181297031 9.14672,0.47855 Z" id="Shape" fill="#FFAA22"></path>
            <rect id="Rectangle-path" fill="#FFFFFF" x="9" y="6" width="2" height="5"></rect>
            <rect id="Rectangle-path" fill="#FFFFFF" x="9" y="12" width="2" height="2"></rect>
        </g>
    </g>
</svg>`,n.querySelector("#apple-pay-description").textContent="An error occurred while paying with Apple Pay. Please try again or use another payment method."):(function(r){r&&(r.querySelector(".pre-checkout-modal__content").classList.remove("show"),r.classList.remove("show"))}(this.preCheckoutModal),this.preCheckoutModal.remove(),this.preCheckoutModal=null))}},{key:"closePreCheckoutModalAndCancelTransaction",value:function(){this.preCheckoutModal&&(this.cancelTransaction(),this.checkoutIframe&&this.checkoutIframe.contentWindow&&this.checkoutIframe.contentWindow.postMessage("close","*"),this.closePreCheckoutModal())}},{key:"newTransaction",value:function(t){var n=t.preload,r=t.inlineTransaction,a=t.transactionData,i=vl(t,Fg),o=this.paymentRequestContainer&&ui(this.paymentRequestContainer);if(this.activeTransaction()&&!o&&this.activeTransaction().cancel(),r&&a)return this.transactions.push(r),this.isDeprecatedApi||this.open({accessCode:a.access_code,language:r.urlParameters.language},n),r;var l=ao(this.transactions,r?r.parameters:i);if(l)return l.isActive=!0,this.isDeprecatedApi||this.open({accessCode:l.accessCode,language:l.urlParameters.language},n),l;var c=r||new ro(i),u=c.accessCode?{accessCode:c.accessCode,language:c.urlParameters.language}:c.urlParameters;return this.transactions.push(c),this.isDeprecatedApi||this.open(u,n),c}},{key:"preloadTransaction",value:function(t){var n=this;return this.newTransaction(me(me({},t),{},{preload:!0})),function(){return n.animateCheckoutIn()}}},{key:"paymentRequest",value:function(t){var n=t.container,r=t.styles,a=t.onElementsMount,i=vl(t,Bg);return B=this,new Promise(function(o,l){var c=document.querySelector("#".concat(t.loadPaystackCheckoutButton));if(u4()){B.activeTransaction()&&B.activeTransaction().cancel(),n&&Qa(n)||io("A container is required to mount the payment request button"),B.paymentRequestContainer=Qa(n);var u=ao(B.transactions,i),d=u||new ro(i);d.requestInline().then(function(w){A0(B.paymentRequestContainer,{channels:w.channels,styles:r},w.merchant_id).then(function(y){a&&a(y)}).catch(function(){a&&a(null)}).finally(function(){if(u?d.isActive=!0:B.transactions.push(d),B.registerPaymentRequestEventListeners(),c){var y=B.preloadTransaction({inlineTransaction:d,transactionData:w});c.onclick=y}o(d)})}).catch(function(w){d.onSetupError({status:!1,message:w.message}),l(w)})}else{if(t&&t.loadPaystackCheckoutButton)if(c){var m=B.preloadTransaction(i);c.onclick=m}else $c("This device does not support any payment request wallet options. Please consult our documentation at https://developers.paystack.co/docs/paystack-inline to see how to load alternative payment options using 'loadPaystackCheckoutButton'");a&&a(null);var h=B.activeTransaction();o(h)}})}},{key:"registerApplePayEventListener",value:function(){var t=this;ui(this.paymentRequestContainer).onclick=function(){return t.startApplePay()}}},{key:"registerPaymentRequestEventListeners",value:function(){var t=this.activeTransaction();t&&xl(t.response.channels)?this.registerApplePayEventListener():Tg(this.paymentRequestContainer)}},{key:"startApplePay",value:function(){var t,n,r,a,i,o=this,l="apple pay",c=this.activeTransaction();if(c){var u={channel:"apple_pay",paymentMethod:l,currency:c.currency,amount:c.amount},d={channel:"apple_pay",currency:c.currency,amount:c.amount,timeSpent:c.getTimeSpent()};try{c.logAttempt(l),this.sendAnalyticsEventToCheckout(Wg,u);var m=(t={currency:c.response.currency,amount:c.response.amount,merchantName:c.response.merchant_name,interval:c.response.plan_details&&c.response.plan_details.interval},n=t.currency,r=t.amount,a=t.merchantName,i=t.interval,me({countryCode:"NG",currencyCode:n,merchantCapabilities:["supports3DS","supportsCredit","supportsDebit"],supportedNetworks:["visa","masterCard"],requiredBillingContactFields:["postalAddress","name","phone","email"],total:{label:"".concat(a," - Paystack"),type:"final",amount:String($0(r))}},typeof i=="string"&&i.trim()!==""&&{lineItems:[{label:_g(i),amount:String($0(r))}]})),h=new window.ApplePaySession(Qe.applePayVersion,m);h.onvalidatemerchant=function(w){var y=function(b){var C=b.transactionId,g=b.validationURL,f=b.merchantName,x=b.domainName,k=x===void 0?window&&window.location&&window.location.hostname:x,j="".concat(Qe.paymentBaseUrl).concat(Qe.applePayValidateSessionPath),S=I0({transaction:C,sessionUrl:g,displayName:f,domainName:k});return fetch(j,me(me({},M0),{},{body:S})).then(function(N){return N.json()})}({validationURL:w.validationURL,transactionId:c.id,merchantName:c.response.merchant_name});y.then(function(b){b.status!=="success"?c.onSetupError(b):h.completeMerchantValidation(b.data),c.logValidationResponse(b.message)}).catch(function(b){c.onSetupError(b)})},h.oncancel=function(){B.preCheckoutModal||c.onCancel()},h.onpaymentauthorized=function(w){var y=w.payment,b=function(C){var g=C.transactionId,f=C.payment,x="".concat(Qe.paymentBaseUrl).concat(Qe.applePayChargePath),k=I0({transaction:g,paymentObject:JSON.stringify(f)});return fetch(x,me(me({},M0),{},{body:k})).then(function(j){return j.json()})}({transactionId:c.id,payment:y});b.then(function(C){c.logAPIResponse(C,l),C.status==="success"?(h.completePayment(h.STATUS_SUCCESS),c.onSuccess(C),o.sendAnalyticsEventToCheckout(qg,d)):(h.completePayment(h.STATUS_FAILURE),c.onSetupError(C),o.sendAnalyticsEventToCheckout(B0,{channel:"apple_pay",message:C&&C.message||"Transaction attempt failed"})),B.closePreCheckoutModal(C.status)}).catch(function(C){h.completePayment(h.STATUS_FAILURE),c.onSetupError(C),o.sendAnalyticsEventToCheckout(B0,{channel:"apple_pay",message:C&&C.message||"Error occurred"}),B.closePreCheckoutModal("failed")})},h.begin()}catch(w){c.onSetupError(w)}}else io("Could not initiate apple pay transaction")}},{key:"resumeTransaction",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.onSuccess,a=n.onCancel,i=n.onLoad,o=n.onError;return this.newTransaction({accessCode:t,onSuccess:r,onCancel:a,onLoad:i,onError:o})}},{key:"activeTransaction",value:function(){var t=this.transactions.filter(function(r){return r.isActive}),n=t.length?t[t.length-1]:null;return n}},{key:"cancelTransaction",value:function(t){var n=this.transactions.find(function(r){return r.id===t})||this.activeTransaction();n&&(n.cancel(),this.close())}},{key:"respondToEvent",value:function(t){if(t){var n,r,a=this.activeTransaction();try{var i=t.data||t.message,o=i.event,l=i.data;if(o)switch(o){case"loaded:checkout":if(this.isLoaded=!0,a){var c=this.checkoutIframe,u=a.urlParameters,d=a.response;F0({checkoutIframe:c,urlParameters:d?{accessCode:d.access_code,language:u==null?void 0:u.language}:u})}break;case"loaded:transaction":n=this.backgroundIframe,(r=n.contentWindow.document)&&(r.getElementById("app-loader").style.display="none"),this.preCheckoutModal&&this.openPreCheckoutModal(),a.onLoad(l);break;case"error":l.type==="setup"?a.onSetupError(l):a.logError(l);break;case"cancel":case"close":this.close();var m=l&&l.status;m&&a.setStatus(m),!(this.paymentRequestContainer&&ui(this.paymentRequestContainer)&&!this.preCheckoutModal)&&(a.isActive=!1),a.onCancel();break;case"transfer:pending":this.close();var h=l&&l.status;h&&a.setStatus(h),a.onBankTransferConfirmationPending();break;case"success":this.close(),a.onSuccess(l)}}catch{}}}},{key:"respondToEmbedEvents",value:function(t){var n,r,a=this.activeTransaction(),i=t.data||t.message;if(i&&(typeof i=="string"||i instanceof String)){var o={action:r=(n=i)&&typeof n=="string"?n.split(" ")[0]:null,data:r?n.split(" ").slice(2).join(" "):null};o&&o.action==="PaystackClose"&&o.data&&a.onSuccess(i),o.action==="PaystackTLSClose"&&a.cancel()}}},{key:"animateCheckoutIn",value:function(){var t,n=this;if(!this.isOpen){var r=this.checkoutIframe,a=this.backgroundIframe;(t={checkoutIframe:r,backgroundIframe:a},new Promise(function(i,o){t||o("No dom element provided");var l=t.checkoutIframe,c=t.backgroundIframe;l&&c||o("No dom element provided"),l.style.display="",l.style.visibility="visible",c.style.display="",c.style.visibility="visible",i()})).then(function(){n.checkoutIframe.contentWindow.postMessage("render","*")}),this.isOpen=!0}}},{key:"open",value:function(t,n){t&&(F0({checkoutIframe:this.checkoutIframe,urlParameters:t}),n||this.animateCheckoutIn())}},{key:"close",value:function(){var t=this;if(this.isOpen){var n,r=this.checkoutIframe,a=this.backgroundIframe;(n={checkoutIframe:r,backgroundIframe:a},new Promise(function(i,o){n||o("No dom element provided");var l=n.checkoutIframe,c=n.backgroundIframe;l&&c||o("No dom element provided"),c.style.opacity=0,l.style.display="none",l.style.visibility="hidden",setTimeout(function(){c.style.display="none",c.style.visibility="hidden",c.style.opacity=1,i()},300)})).then(function(){t.checkoutIframe.contentWindow.postMessage("close","*")}),this.isOpen=!1}}},{key:"isLoaded",value:function(){return this.isLoaded}}],[{key:"setup",value:function(t){var n=t&&t.container;B||(B=new e({isDeprecatedApi:!0,isEmbed:n})),V0("PaystackPop.setup()","new PaystackPop()","Please consult our documentation at https://developers.paystack.co/docs/paystack-inline");var r=B.newTransaction(t,"deprecated"),a=r.urlParameters;if(n){var i="".concat(Qe.siteUrl,"/assets/payment/production/inline.html?").concat(l4(a)),o=function(l,c){var u=to("embed-checkout-".concat(l));return u.style.cssText=`
  background: transparent;
  background: rgba(0,0,0,0);
  border: 0px none transparent;
  overflow-x: hidden;
  overflow-y: hidden;
  nmargin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  display: none;
`,u.src=c,u.id=l,u.name=l,u}(B.id,i);(function(l,c){var u=document.getElementById(l);u.innerHTML="",u.removeAttribute("style"),u.className="paystack-embed-container",u.style.position="relative",u.style.width="100%",u.appendChild(c)})(t.container,o),o.onload=function(){var l;o.contentWindow.postMessage("PaystackOpen ".concat(B.id),"*"),l=o,new Promise(function(c,u){l||u("No dom element provided"),l.style.display="",l.style.visibility="visible",c()})}}else r.openIframe=function(){V0("openIframe","open","Please consult our documentation at https://developers.paystack.co/docs/paystack-inline"),B.open(a)};return r}}]),e}();if(U0=R0().length>0,W0=qn()&&qn().parentElement.tagName==="FORM",U0&&W0){var so,kn=function(){var e={},t=qn();return R0().forEach(function(n){var r=t.getAttribute(n),a=n.split("data-")[1].replace(/-([a-z])/g,function(i){return i[1].toUpperCase()});e[a]=r}),function(n){if(n.buttonId&&!document.getElementById(n.buttonId))throw new Error("Please make sure the buttonId is an element available in the DOM");var r=me({},n);r.buttonText=n.buttonText||"Pay",r.buttonVariant="normal",r.buttonWordmarkVariant="normal";var a=["normal","light"];return n.buttonVariant&&a.indexOf(n.buttonVariant)>-1&&(r.buttonVariant=n.buttonVariant),n.buttonWordmarkVariant&&a.indexOf(n.buttonWordmarkVariant)>-1&&(r.buttonWordmarkVariant=n.buttonWordmarkVariant),r}(e)}(),q0=qn().parentElement;B||(B=new x4),function(e){var t;if(e.id)(t=document.getElementById(e.id)).setAttribute("data-inline-id",e.id);else{var n=document.createElement("div");n.id="inline-button-".concat(e.inlineId),n.innerHTML=function(r){var a,i,o={normal:`
  <svg id="inline-button-wordmark" width="137" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M.037 5.095l1.075-.135c-.011-.774-.025-1.944-.013-2.149C1.19 1.364 2.38.134 3.81.013 3.9.006 3.99.002 4.077 0a2.947 2.947 0 0 1 2.046.76c.574.509.95 1.26 1.008 2.007.015.192.01 1.491.01 2.257l1.096.163L8.2 11.44 4.093 12 0 11.346l.037-6.251zm4.106-.514l1.724.256c-.007-.933-.05-2.295-.26-2.654-.319-.545-.846-.867-1.443-.88h-.063c-.607.008-1.138.322-1.458.864-.222.378-.266 1.66-.265 2.637l1.765-.223zM18.228 10.108c-.576 0-1.064-.072-1.464-.216a2.864 2.864 0 0 1-.972-.6 2.552 2.552 0 0 1-.588-.864 4.067 4.067 0 0 1-.252-1.044h1.008c.032.256.088.5.168.732.08.224.204.424.372.6.168.168.388.304.66.408.28.096.636.144 1.068.144.28 0 .536-.036.768-.108.24-.08.448-.192.624-.336.176-.144.312-.316.408-.516.104-.2.156-.42.156-.66 0-.24-.032-.448-.096-.624a1.02 1.02 0 0 0-.336-.468 1.885 1.885 0 0 0-.636-.324 6.4 6.4 0 0 0-1.008-.228 8.79 8.79 0 0 1-1.212-.276 3.246 3.246 0 0 1-.9-.432 1.982 1.982 0 0 1-.564-.672c-.128-.272-.192-.6-.192-.984 0-.328.068-.632.204-.912.136-.288.324-.536.564-.744.248-.208.54-.372.876-.492.336-.12.708-.18 1.116-.18.864 0 1.548.204 2.052.612.512.4.812.984.9 1.752h-.936c-.104-.544-.316-.932-.636-1.164-.32-.24-.78-.36-1.38-.36-.592 0-1.04.132-1.344.396a1.255 1.255 0 0 0-.444.996c0 .208.024.396.072.564.056.16.156.3.3.42.152.12.36.228.624.324a6.72 6.72 0 0 0 1.068.228c.48.072.9.168 1.26.288.36.12.664.276.912.468s.432.428.552.708c.128.28.192.624.192 1.032 0 .36-.076.696-.228 1.008a2.472 2.472 0 0 1-.612.804c-.264.224-.58.4-.948.528-.36.128-.752.192-1.176.192zM25.355 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM32.091 10.108c-.44 0-.848-.072-1.224-.216a3.054 3.054 0 0 1-.972-.636 3.12 3.12 0 0 1-.648-1.008 3.626 3.626 0 0 1-.228-1.32v-.096c0-.48.08-.916.24-1.308.16-.4.376-.74.648-1.02.28-.28.604-.496.972-.648.376-.16.772-.24 1.188-.24.328 0 .644.04.948.12.312.08.588.208.828.384.248.168.456.392.624.672.168.28.276.62.324 1.02h-.984c-.08-.496-.284-.848-.612-1.056-.32-.208-.696-.312-1.128-.312a1.93 1.93 0 0 0-.804.168c-.24.112-.452.272-.636.48a2.23 2.23 0 0 0-.42.744 2.991 2.991 0 0 0-.156.996v.096c0 .776.188 1.364.564 1.764.384.392.88.588 1.488.588.224 0 .436-.032.636-.096a1.651 1.651 0 0 0 .96-.768c.112-.192.18-.416.204-.672h.924a2.595 2.595 0 0 1-.276.948 2.386 2.386 0 0 1-.576.744c-.24.208-.52.372-.84.492-.32.12-.668.18-1.044.18zM38.335 10.108a2.83 2.83 0 0 1-.876-.132 1.724 1.724 0 0 1-.684-.42 2.145 2.145 0 0 1-.456-.756c-.112-.304-.168-.672-.168-1.104V3.724h.996v3.924c0 .552.116.956.348 1.212.24.256.608.384 1.104.384.224 0 .44-.036.648-.108.208-.072.392-.18.552-.324.16-.144.288-.324.384-.54.096-.216.144-.464.144-.744V3.724h.996V10h-.996v-.996c-.144.296-.388.556-.732.78-.336.216-.756.324-1.26.324zM43.216 3.724h.996v1.128c.2-.352.452-.64.756-.864.312-.232.748-.356 1.308-.372v.936a4.461 4.461 0 0 0-.852.12 1.647 1.647 0 0 0-.66.324 1.472 1.472 0 0 0-.408.612c-.096.248-.144.564-.144.948V10h-.996V3.724zM50 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM56.496 10.108c-.408 0-.788-.068-1.14-.204a2.683 2.683 0 0 1-.9-.612 3.01 3.01 0 0 1-.588-.984 4.01 4.01 0 0 1-.204-1.32v-.096c0-.48.072-.92.216-1.32.144-.4.344-.744.6-1.032.256-.296.564-.524.924-.684.36-.16.756-.24 1.188-.24.528 0 .956.112 1.284.336.328.216.584.476.768.78V.724h.996V10h-.996V8.92c-.088.152-.208.3-.36.444a2.792 2.792 0 0 1-.516.384 2.874 2.874 0 0 1-.6.252c-.216.072-.44.108-.672.108zm.108-.828c.288 0 .56-.048.816-.144.256-.096.476-.24.66-.432.184-.2.328-.448.432-.744.112-.304.168-.656.168-1.056v-.096c0-.808-.18-1.404-.54-1.788-.352-.384-.836-.576-1.452-.576-.624 0-1.112.208-1.464.624-.352.416-.528 1.008-.528 1.776v.096c0 .392.048.736.144 1.032.104.296.24.54.408.732.176.192.38.336.612.432.232.096.48.144.744.144zM67.712 10.108c-.512 0-.948-.112-1.308-.336a2.38 2.38 0 0 1-.816-.804V10h-.996V.724h.996V4.78a1.92 1.92 0 0 1 .348-.432c.152-.144.32-.268.504-.372.192-.112.396-.2.612-.264.216-.064.436-.096.66-.096.408 0 .788.072 1.14.216.352.144.652.352.9.624.256.272.456.604.6.996.144.392.216.832.216 1.32v.096c0 .48-.068.92-.204 1.32a3.103 3.103 0 0 1-.576 1.02 2.583 2.583 0 0 1-.9.672 2.937 2.937 0 0 1-1.176.228zm-.096-.828c.624 0 1.1-.2 1.428-.6.328-.408.492-.996.492-1.764V6.82c0-.4-.052-.748-.156-1.044a2.095 2.095 0 0 0-.42-.732 1.53 1.53 0 0 0-.612-.444 1.798 1.798 0 0 0-.744-.156c-.288 0-.56.048-.816.144a1.71 1.71 0 0 0-.648.444c-.184.192-.328.44-.432.744a3.152 3.152 0 0 0-.156 1.044v.096c0 .8.192 1.396.576 1.788.384.384.88.576 1.488.576zM73.63 9.352l-2.46-5.628h1.068l1.92 4.5 1.74-4.5h1.02l-3.468 8.46h-1.008l1.188-2.832zM87.127 3.669A3.138 3.138 0 0 0 86.1 2.95a3.09 3.09 0 0 0-1.228-.25c-.448 0-.848.086-1.187.26a2.199 2.199 0 0 0-.662.497v-.191a.387.387 0 0 0-.214-.348.323.323 0 0 0-.14-.03h-1.315a.314.314 0 0 0-.254.116.377.377 0 0 0-.1.262v8.97c0 .1.034.188.1.258a.34.34 0 0 0 .254.103h1.341a.342.342 0 0 0 .244-.103.336.336 0 0 0 .11-.259v-3.06c.178.202.417.357.702.464.35.134.72.203 1.093.203.43 0 .848-.082 1.242-.248a3.124 3.124 0 0 0 1.04-.724c.305-.326.545-.709.707-1.128a3.93 3.93 0 0 0 .263-1.477c0-.54-.086-1.037-.263-1.477a3.387 3.387 0 0 0-.706-1.12zm-1.204 3.24c-.073.19-.18.362-.315.51a1.415 1.415 0 0 1-1.065.466c-.2.001-.4-.04-.584-.12a1.484 1.484 0 0 1-.49-.346 1.593 1.593 0 0 1-.32-.51 1.738 1.738 0 0 1-.115-.63c0-.224.04-.435.115-.631a1.532 1.532 0 0 1 .804-.846c.185-.086.386-.13.59-.129.215 0 .414.044.593.13.177.083.338.199.474.341a1.622 1.622 0 0 1 .425 1.135c0 .225-.037.436-.112.63zM95.298 2.89h-1.33a.339.339 0 0 0-.246.11.384.384 0 0 0-.108.266v.166a1.856 1.856 0 0 0-.602-.472 2.525 2.525 0 0 0-1.166-.258 3.227 3.227 0 0 0-2.284.964 3.554 3.554 0 0 0-.734 1.123 3.827 3.827 0 0 0-.275 1.477c0 .54.092 1.037.275 1.477.184.434.427.817.728 1.128a3.146 3.146 0 0 0 2.277.973c.437 0 .834-.088 1.173-.259.25-.13.456-.287.608-.471v.177a.34.34 0 0 0 .11.259.341.341 0 0 0 .244.104h1.33a.324.324 0 0 0 .25-.105.349.349 0 0 0 .102-.258V3.267a.377.377 0 0 0-.1-.262.325.325 0 0 0-.252-.115zM93.502 6.9a1.55 1.55 0 0 1-.312.511c-.136.143-.296.26-.473.344-.178.085-.38.129-.596.129-.207 0-.407-.044-.59-.13a1.501 1.501 0 0 1-.791-.855 1.766 1.766 0 0 1-.112-.62c0-.225.038-.436.112-.632.075-.193.181-.364.314-.504.137-.143.3-.26.478-.342.182-.085.382-.129.59-.129.215 0 .417.044.595.13.178.085.338.2.473.341a1.623 1.623 0 0 1 .424 1.135c0 .215-.037.424-.112.622zM108.567 6.094a2.265 2.265 0 0 0-.654-.402c-.247-.101-.509-.181-.785-.235l-1.014-.204c-.26-.05-.441-.117-.543-.203a.328.328 0 0 1-.136-.264c0-.11.063-.2.189-.282.137-.086.329-.13.566-.13.26 0 .518.053.757.157.243.106.471.226.67.36.295.187.546.162.727-.053l.487-.57a.543.543 0 0 0 .152-.357c0-.128-.064-.245-.185-.351-.207-.184-.533-.378-.971-.568-.437-.192-.987-.29-1.637-.29-.427 0-.82.058-1.168.172-.35.116-.65.276-.893.474-.245.204-.438.44-.57.713a2 2 0 0 0-.198.875c0 .56.167 1.017.496 1.358.328.333.766.56 1.304.67l1.054.232c.3.062.528.132.675.21.129.067.19.163.19.297 0 .12-.061.227-.188.324-.133.104-.342.155-.622.155a1.83 1.83 0 0 1-.831-.19 3.056 3.056 0 0 1-.678-.458.995.995 0 0 0-.307-.17c-.126-.037-.268.003-.431.13l-.583.461c-.169.145-.24.32-.209.522.029.194.19.394.491.62.269.193.614.368 1.029.518.415.151.901.229 1.453.229.444 0 .854-.058 1.215-.172.362-.119.681-.278.941-.48a2.056 2.056 0 0 0 .819-1.663c0-.319-.053-.6-.165-.836a1.843 1.843 0 0 0-.447-.6zM114.383 7.73a.363.363 0 0 0-.295-.192.55.55 0 0 0-.343.113c-.095.062-.198.11-.306.141a.75.75 0 0 1-.426.013.43.43 0 0 1-.181-.093.554.554 0 0 1-.143-.204.92.92 0 0 1-.059-.362v-2.46h1.731c.099 0 .188-.04.266-.117a.368.368 0 0 0 .112-.26V3.268a.369.369 0 0 0-.115-.268.38.38 0 0 0-.263-.109h-1.732V1.216a.354.354 0 0 0-.108-.27.347.347 0 0 0-.243-.104h-1.344a.36.36 0 0 0-.34.226.371.371 0 0 0-.027.148V2.89h-.767a.324.324 0 0 0-.255.115.385.385 0 0 0-.098.262V4.31a.4.4 0 0 0 .212.346c.044.021.092.032.14.03h.768v2.925c0 .39.069.726.2 1.003.132.274.305.504.514.676.217.178.465.31.731.388.27.084.551.126.833.126.385 0 .75-.061 1.094-.18a2.13 2.13 0 0 0 .861-.552c.152-.181.17-.381.046-.581l-.463-.76zM121.672 2.89h-1.329a.339.339 0 0 0-.244.11.39.39 0 0 0-.08.122.394.394 0 0 0-.027.144v.166a1.906 1.906 0 0 0-.605-.472c-.335-.173-.726-.258-1.168-.258-.42 0-.834.083-1.226.249a3.24 3.24 0 0 0-1.055.715 3.528 3.528 0 0 0-.734 1.123 3.79 3.79 0 0 0-.276 1.477c0 .54.092 1.037.275 1.477.184.434.428.817.729 1.128a3.138 3.138 0 0 0 2.273.973 2.59 2.59 0 0 0 1.175-.259c.255-.13.457-.287.612-.471v.177a.34.34 0 0 0 .108.259.343.343 0 0 0 .243.104h1.329a.335.335 0 0 0 .252-.105.364.364 0 0 0 .102-.258V3.267a.38.38 0 0 0-.1-.262.332.332 0 0 0-.115-.087.311.311 0 0 0-.139-.028zM119.876 6.9a1.534 1.534 0 0 1-.786.855 1.362 1.362 0 0 1-.594.129c-.207 0-.405-.044-.588-.13a1.516 1.516 0 0 1-.792-.855 1.757 1.757 0 0 1-.113-.62c0-.225.037-.436.112-.632.073-.187.179-.358.314-.504.138-.143.3-.26.479-.342.184-.086.385-.13.588-.129.217 0 .415.044.594.13.181.085.34.2.472.341.134.143.24.313.314.504a1.73 1.73 0 0 1 0 1.253zM128.978 7.64l-.763-.593c-.146-.118-.284-.15-.404-.1a.742.742 0 0 0-.279.205 2.527 2.527 0 0 1-.583.535c-.192.122-.444.183-.742.183-.219 0-.42-.04-.6-.122a1.423 1.423 0 0 1-.469-.342 1.575 1.575 0 0 1-.308-.51 1.751 1.751 0 0 1-.106-.617c0-.228.034-.438.106-.632.07-.192.173-.363.308-.503.135-.144.295-.26.472-.342.187-.088.391-.132.597-.13.298 0 .547.064.742.187.198.126.396.306.584.534.078.092.17.16.278.206.122.048.259.016.401-.101l.762-.594a.53.53 0 0 0 .201-.269.437.437 0 0 0-.034-.365 3.329 3.329 0 0 0-1.18-1.127c-.504-.291-1.108-.441-1.784-.441a3.519 3.519 0 0 0-2.51 1.033c-.322.322-.576.71-.747 1.137a3.68 3.68 0 0 0-.273 1.407c0 .495.093.968.273 1.402.173.424.427.808.747 1.128a3.527 3.527 0 0 0 2.51 1.034c.676 0 1.28-.149 1.784-.444a3.286 3.286 0 0 0 1.182-1.13.411.411 0 0 0 .055-.173.415.415 0 0 0-.023-.182.624.624 0 0 0-.197-.273zM136.06 9.045l-2.104-3.143 1.801-2.415c.094-.139.119-.272.075-.397-.031-.09-.116-.2-.334-.2h-1.425a.52.52 0 0 0-.234.058.482.482 0 0 0-.209.205L132.191 5.2h-.349V.363a.37.37 0 0 0-.099-.26.352.352 0 0 0-.253-.103h-1.332a.37.37 0 0 0-.337.22.346.346 0 0 0-.027.143V9.29c0 .103.038.193.11.259a.353.353 0 0 0 .254.104h1.333a.328.328 0 0 0 .251-.105.346.346 0 0 0 .075-.119.333.333 0 0 0 .024-.14V6.927h.386l1.571 2.446c.112.187.267.281.46.281h1.491c.226 0 .32-.11.358-.202.054-.13.038-.262-.047-.406zM102.863 2.89h-1.489a.389.389 0 0 0-.298.122.544.544 0 0 0-.13.249l-1.099 4.167h-.268l-1.182-4.167a.66.66 0 0 0-.113-.247.329.329 0 0 0-.264-.124h-1.544c-.199 0-.325.066-.372.193a.588.588 0 0 0-.002.37l1.887 5.865c.03.093.08.17.145.232a.388.388 0 0 0 .281.104h.798l-.066.19-.19.547a.872.872 0 0 1-.29.426.7.7 0 0 1-.442.148.956.956 0 0 1-.4-.09 1.842 1.842 0 0 1-.35-.209.62.62 0 0 0-.335-.115h-.016c-.13 0-.243.074-.334.216l-.474.708c-.193.304-.086.504.039.615.234.224.528.399.875.524.344.125.723.186 1.126.186.682 0 1.252-.187 1.689-.565.435-.376.756-.887.952-1.524l2.188-7.258c.05-.155.05-.284.005-.389-.037-.08-.125-.174-.327-.174z" fill="#011B33"/>
    </svg>`,light:c4};return`
    <style>
      #inline-button-`.concat(r.inlineId,` {
        position: relative;
        text-align: center;
        display: inline-block;
      }
      #inline-button-`).concat(r.inlineId,`__trigger {
        `).concat((a=r.variant||"normal",i={normal:`
    background: linear-gradient(180deg,#44b669 0,#40ad57);
    text-shadow: 1px 1px 1px rgba(0,0,0,.1);
    color: #ffffff;
  `,light:`
    background: white;
    text-shadow: none;
    color: #011b33;
  `},"".concat(`
    box-sizing: border-box;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    margin: 0 0 10px;
    text-align: center;
    -webkit-appearance: none;
    outline: none;
    font-size: 14px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    padding: 16px 24px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    transition: all .3s ease;
    border: none;
    min-width: 190px;
  `).concat(i[a])),`
      }
      #inline-button-`).concat(r.inlineId,`__trigger:hover {
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
      }
      #inline-button-`).concat(r.inlineId,`__trigger:active {
        transform: translateY(3px);
      }
    </style>
    <button id="inline-button-`).concat(r.inlineId,'__trigger" data-inline-id="').concat(r.inlineId,'">').concat(r.text||"Pay"," ").concat(r.currency||"NGN"," ").concat(r.amount,`</button>
    <div id="inline-button-`).concat(r.inlineId,`__wordmark">
      `).concat(o[r.wordmarkVariant||"normal"],`
    </div>
  `)}(e),e.parent.parentNode.insertBefore(n,e.parent.nextSibling),t=kg(n.getElementsByTagName("button"),1)[0]}return t}({inlineId:B.id,amount:kn.amount/100,currency:kn.currency,id:kn.buttonId,text:kn.buttonText,variant:kn.buttonVariant,wordmarkVariant:kn.buttonWordmarkVariant,parent:qn()}).addEventListener("click",function(e){e.preventDefault(),so?B.resumeTransaction(so.accessCode):so=B.newTransaction(me(me({},kn),{},{onSuccess:function(t){var n,r,a,i,o,l;n={type:"hidden",name:"reference",value:t.reference,parent:q0},r=n.type,a=n.value,i=n.name,o=n.parent,(l=document.createElement("input")).type=r,l.value=a,l.name=i,o.appendChild(l),q0.submit()}}))})}const Gg="/imgs/bob.jpg",Qg=({setcredits:e})=>{const t=JSON.parse(localStorage.getItem("userInfo")),[n,r]=p.useState((t==null?void 0:t.credits)||0);let a=de+"/api/v1/user/credits";const[i,o]=p.useState("");p.useState("");const[l,c]=p.useState(!1),[u,d]=p.useState(!1),[m,h]=p.useState(""),w=new Date("Jan 2, 2026 00:00:00").getTime();p.useEffect(()=>{const f=setInterval(function(){const x=new Date().getTime(),k=w-x,j=Math.floor(k/(1e3*60*60*24)),S=Math.floor(k%(1e3*60*60*24)/(1e3*60*60)),N=Math.floor(k%(1e3*60*60)/(1e3*60)),_=Math.floor(k%(1e3*60)/1e3);o(`${j}d ${S}h ${N}m ${_}s left`),k<0&&(clearInterval(f),document.querySelector(".endsin").innerHTML="Promo has ended")},1e3);return()=>clearInterval(f)},[]);const y=async f=>{var k;c(!0);const x=JSON.parse(localStorage.getItem("userInfo"));try{const S=await(await fetch(ma+"/api/v1/initialize-payment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:(x==null?void 0:x.email)||"customer@email.com",amount:f.amountInGhs,tierName:f.name})})).json(),N=S.access_code||((k=S.data)==null?void 0:k.access_code);N&&new x4().resumeTransaction(N,{onSuccess:R=>{C(f,x,R.reference)},onCancel:()=>c(!1),onError:()=>{c(!1),h("🔴 Payment window error."),d(!0)}})}catch{c(!1),h("🔴 Failed to initialize transaction."),d(!0)}},b=f=>{r(f),e&&e(f)},C=(f,x,k)=>{console.log(k);let j={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({reference:k,tierName:f.name})};st(a,j).then(S=>{const N=S.added||f.creditReward,_={...x,credits:((x==null?void 0:x.credits)||0)+N,tier:f.premiumType};localStorage.setItem("userInfo",JSON.stringify(_)),b(_.credits),h(`🟢 Success! ${N} credits added.`),d(!0)}).catch(S=>{console.error("Verification error:",S),h("🔴 Payment verification failed or server error."),d(!0)}).finally(()=>c(!1))},g=()=>{window.open("","_self",""),window.close()};return s.jsxs("div",{className:"pcontainer",children:[u&&s.jsx(Yg,{setfetchError:d,errorMessage:m}),s.jsxs("div",{className:"pcontainer2",children:[s.jsx("h2",{className:"paytitle",children:"Choose Your Plan"}),s.jsx("h2",{className:"endsin",children:s.jsxs("p",{className:"cdown",children:["PROMO: 🎟️ ",i]})}),s.jsxs("p",{className:"user-credits",children:["💳 Your Credits: ",s.jsx("strong",{children:n})]}),s.jsx("div",{className:"payopts",children:Zg.map((f,x)=>s.jsxs("div",{className:"pt",children:[s.jsx("img",{src:f.image,className:"paypic"}),s.jsxs("div",{children:[f.oldPrice&&s.jsx("p",{className:"oprice",children:f.oldPrice}),s.jsxs("p",{className:"nprice",children:[f.oldPrice?"🎟️ ":""," ",f.priceDisplay]})]}),s.jsxs("h3",{className:"tier",children:[s.jsx("span",{className:"goldtop"}),s.jsx("span",{style:{marginRight:"8px"},children:f.icon}),f.name]}),s.jsxs("ul",{className:"payfeatures",children:[s.jsx("p",{style:{fontSize:"25px",margin:"10px 0"},children:f.icon}),f.description.map((k,j)=>s.jsxs("li",{children:[s.jsx("span",{style:{color:"rgb(0,120,250)"},children:"✔"})," ",k]},j))]}),s.jsx("button",{className:"watch",onClick:()=>f.button!=="default"&&y(f),style:{pointerEvents:f.button==="default"?"none":"all"},children:f.button!=="default"?s.jsx("div",{className:"sp",children:f.button}):s.jsx("div",{children:"Active"})})]},f.name+x))}),s.jsxs("div",{className:"return",onClick:g,children:[s.jsx(ga,{})," "]})]}),l?s.jsx(Wi,{opacity:1,indexed:100,mainlogo:Ot}):s.jsx(Wi,{opacity:0,indexed:-100})]})},Zg=[{name:"Normal User",premiumType:"normal-user",priceDisplay:"Free",amountInGhs:0,creditReward:0,icon:s.jsx(Xm,{style:{color:"#FFD700"}}),image:Gg,description:["Access to referral tools","Basic analytics"],button:"default"},{name:"Credit Pack",premiumType:"credits",priceDisplay:"GHS 25",amountInGhs:25,creditReward:200,icon:s.jsx(R7,{style:{color:"#FFD700"}}),image:b2,description:["200 AI Credits","Standard Support","No Expiry"],button:"Buy Now"},{name:"Premium User",premiumType:"premium-user",oldPrice:"GHS 20/month",priceDisplay:"GHS 50 lifetime",amountInGhs:50,creditReward:600,icon:s.jsx(i5,{style:{color:"#FFD700"}}),image:y2,description:["Access to referral tools","500 + 100 Bonus Credits","Priority support"],button:"Upgrade"},{name:"Affiliate",premiumType:"affiliate",oldPrice:"GHS 70/month",priceDisplay:"GHS 500 lifetime",amountInGhs:500,creditReward:1500,icon:s.jsx(Cm,{style:{color:"#FFD700"}}),image:w2,description:["All Premium features","1500 Bonus Credits","Monthly Earns: 1.5k-2k cedis"],button:"Go Pro"}],Yg=({errorMessage:e,setfetchError:t})=>(p.useEffect(()=>{const n=setTimeout(()=>t(!1),3e3);return()=>clearTimeout(n)},[]),s.jsx("div",{className:"toast",children:s.jsx("div",{className:"successmessage",children:e.toLowerCase()})}));const Jg=()=>{const[e,t]=p.useState(0);return s.jsx(Xp,{basename:"/",children:s.jsxs(qp,{children:[s.jsx(Wn,{path:"/",element:s.jsx(mg,{})}),s.jsx(Wn,{path:"/contact",element:s.jsx(bg,{})}),s.jsx(Wn,{path:"/about",element:s.jsx(xg,{})}),s.jsx(Wn,{path:"/payment",element:s.jsx(Qg,{setcredits:t})}),s.jsx(Wn,{path:"*",element:s.jsx(wg,{})})]})})};lo.createRoot(document.getElementById("root")).render(s.jsx(di.StrictMode,{children:s.jsx(Jg,{})}));
