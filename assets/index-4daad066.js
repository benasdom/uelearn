var K2=Object.defineProperty;var X2=(e,t,n)=>t in e?K2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var X=(e,t,n)=>(X2(e,typeof t!="symbol"?t+"":t,n),n);function e4(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function C0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var j0={exports:{}},Li={},N0={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),t4=Symbol.for("react.portal"),n4=Symbol.for("react.fragment"),r4=Symbol.for("react.strict_mode"),a4=Symbol.for("react.profiler"),i4=Symbol.for("react.provider"),s4=Symbol.for("react.context"),o4=Symbol.for("react.forward_ref"),l4=Symbol.for("react.suspense"),c4=Symbol.for("react.memo"),u4=Symbol.for("react.lazy"),w1=Symbol.iterator;function d4(e){return e===null||typeof e!="object"?null:(e=w1&&e[w1]||e["@@iterator"],typeof e=="function"?e:null)}var S0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_0=Object.assign,E0={};function pr(e,t,n){this.props=e,this.context=t,this.refs=E0,this.updater=n||S0}pr.prototype.isReactComponent={};pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function z0(){}z0.prototype=pr.prototype;function al(e,t,n){this.props=e,this.context=t,this.refs=E0,this.updater=n||S0}var il=al.prototype=new z0;il.constructor=al;_0(il,pr.prototype);il.isPureReactComponent=!0;var k1=Array.isArray,T0=Object.prototype.hasOwnProperty,sl={current:null},P0={key:!0,ref:!0,__self:!0,__source:!0};function O0(e,t,n){var r,a={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)T0.call(t,r)&&!P0.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:da,type:e,key:i,ref:o,props:a,_owner:sl.current}}function p4(e,t){return{$$typeof:da,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ol(e){return typeof e=="object"&&e!==null&&e.$$typeof===da}function f4(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var C1=/\/+/g;function as(e,t){return typeof e=="object"&&e!==null&&e.key!=null?f4(""+e.key):t.toString(36)}function Ba(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case da:case t4:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+as(o,0):r,k1(a)?(n="",e!=null&&(n=e.replace(C1,"$&/")+"/"),Ba(a,t,n,"",function(u){return u})):a!=null&&(ol(a)&&(a=p4(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(C1,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",k1(e))for(var l=0;l<e.length;l++){i=e[l];var c=r+as(i,l);o+=Ba(i,t,n,c,a)}else if(c=d4(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=r+as(i,l++),o+=Ba(i,t,n,c,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ba(e,t,n){if(e==null)return e;var r=[],a=0;return Ba(e,r,"","",function(i){return t.call(n,i,a++)}),r}function h4(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},Ua={transition:null},m4={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Ua,ReactCurrentOwner:sl};F.Children={map:ba,forEach:function(e,t,n){ba(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ba(e,function(){t++}),t},toArray:function(e){return ba(e,function(t){return t})||[]},only:function(e){if(!ol(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=pr;F.Fragment=n4;F.Profiler=a4;F.PureComponent=al;F.StrictMode=r4;F.Suspense=l4;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m4;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_0({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=sl.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)T0.call(t,c)&&!P0.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:da,type:e.type,key:a,ref:i,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:s4,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:i4,_context:e},e.Consumer=e};F.createElement=O0;F.createFactory=function(e){var t=O0.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:o4,render:e}};F.isValidElement=ol;F.lazy=function(e){return{$$typeof:u4,_payload:{_status:-1,_result:e},_init:h4}};F.memo=function(e,t){return{$$typeof:c4,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Ua.transition;Ua.transition={};try{e()}finally{Ua.transition=t}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(e,t){return Ve.current.useCallback(e,t)};F.useContext=function(e){return Ve.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};F.useEffect=function(e,t){return Ve.current.useEffect(e,t)};F.useId=function(){return Ve.current.useId()};F.useImperativeHandle=function(e,t,n){return Ve.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return Ve.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Ve.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Ve.current.useMemo(e,t)};F.useReducer=function(e,t,n){return Ve.current.useReducer(e,t,n)};F.useRef=function(e){return Ve.current.useRef(e)};F.useState=function(e){return Ve.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return Ve.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return Ve.current.useTransition()};F.version="18.2.0";N0.exports=F;var p=N0.exports;const ri=C0(p),g4=e4({__proto__:null,default:ri},[p]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v4=p,x4=Symbol.for("react.element"),y4=Symbol.for("react.fragment"),b4=Object.prototype.hasOwnProperty,w4=v4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k4={key:!0,ref:!0,__self:!0,__source:!0};function R0(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)b4.call(t,r)&&!k4.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:x4,type:e,key:i,ref:o,props:a,_owner:w4.current}}Li.Fragment=y4;Li.jsx=R0;Li.jsxs=R0;j0.exports=Li;var s=j0.exports,Zs={},L0={exports:{}},at={},M0={exports:{}},$0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,M){var $=z.length;z.push(M);e:for(;0<$;){var q=$-1>>>1,Y=z[q];if(0<a(Y,M))z[q]=M,z[$]=Y,$=q;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var M=z[0],$=z.pop();if($!==M){z[0]=$;e:for(var q=0,Y=z.length,De=Y>>>1;q<De;){var ie=2*(q+1)-1,Ee=z[ie],U=ie+1,K=z[U];if(0>a(Ee,$))U<Y&&0>a(K,Ee)?(z[q]=K,z[U]=$,q=U):(z[q]=Ee,z[ie]=$,q=ie);else if(U<Y&&0>a(K,$))z[q]=K,z[U]=$,q=U;else break e}}return M}function a(z,M){var $=z.sortIndex-M.sortIndex;return $!==0?$:z.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],d=1,m=null,h=3,w=!1,x=!1,b=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(z){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=z)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function C(z){if(b=!1,y(z),!x)if(n(c)!==null)x=!0,Je(j);else{var M=n(u);M!==null&&Me(C,M.startTime-z)}}function j(z,M){x=!1,b&&(b=!1,g(E),E=-1),w=!0;var $=h;try{for(y(M),m=n(c);m!==null&&(!(m.expirationTime>M)||z&&!H());){var q=m.callback;if(typeof q=="function"){m.callback=null,h=m.priorityLevel;var Y=q(m.expirationTime<=M);M=e.unstable_now(),typeof Y=="function"?m.callback=Y:m===n(c)&&r(c),y(M)}else r(c);m=n(c)}if(m!==null)var De=!0;else{var ie=n(u);ie!==null&&Me(C,ie.startTime-M),De=!1}return De}finally{m=null,h=$,w=!1}}var S=!1,N=null,E=-1,P=5,T=-1;function H(){return!(e.unstable_now()-T<P)}function Ce(){if(N!==null){var z=e.unstable_now();T=z;var M=!0;try{M=N(!0,z)}finally{M?ce():(S=!1,N=null)}}else S=!1}var ce;if(typeof f=="function")ce=function(){f(Ce)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,kt=Le.port2;Le.port1.onmessage=Ce,ce=function(){kt.postMessage(null)}}else ce=function(){k(Ce,0)};function Je(z){N=z,S||(S=!0,ce())}function Me(z,M){E=k(function(){z(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,Je(j))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(z){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var $=h;h=M;try{return z()}finally{h=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,M){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=h;h=z;try{return M()}finally{h=$}},e.unstable_scheduleCallback=function(z,M,$){var q=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?q+$:q):$=q,z){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=$+Y,z={id:d++,callback:M,priorityLevel:z,startTime:$,expirationTime:Y,sortIndex:-1},$>q?(z.sortIndex=$,t(u,z),n(c)===null&&z===n(u)&&(b?(g(E),E=-1):b=!0,Me(C,$-q))):(z.sortIndex=Y,t(c,z),x||w||(x=!0,Je(j))),z},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(z){var M=h;return function(){var $=h;h=M;try{return z.apply(this,arguments)}finally{h=$}}}})($0);M0.exports=$0;var C4=M0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0=p,rt=C4;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A0=new Set,qr={};function On(e,t){ar(e,t),ar(e+"Capture",t)}function ar(e,t){for(qr[e]=t,e=0;e<t.length;e++)A0.add(t[e])}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gs=Object.prototype.hasOwnProperty,j4=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,j1={},N1={};function N4(e){return Gs.call(N1,e)?!0:Gs.call(j1,e)?!1:j4.test(e)?N1[e]=!0:(j1[e]=!0,!1)}function S4(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _4(e,t,n,r){if(t===null||typeof t>"u"||S4(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function He(e,t,n,r,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new He(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var ll=/[\-:]([a-z])/g;function cl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ll,cl);_e[t]=new He(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ll,cl);_e[t]=new He(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ll,cl);_e[t]=new He(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function ul(e,t,n,r){var a=_e.hasOwnProperty(t)?_e[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_4(t,n,a,r)&&(n=null),r||a===null?N4(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ut=I0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wa=Symbol.for("react.element"),Hn=Symbol.for("react.portal"),Dn=Symbol.for("react.fragment"),dl=Symbol.for("react.strict_mode"),Ys=Symbol.for("react.profiler"),V0=Symbol.for("react.provider"),H0=Symbol.for("react.context"),pl=Symbol.for("react.forward_ref"),Js=Symbol.for("react.suspense"),Ks=Symbol.for("react.suspense_list"),fl=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),D0=Symbol.for("react.offscreen"),S1=Symbol.iterator;function xr(e){return e===null||typeof e!="object"?null:(e=S1&&e[S1]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,is;function zr(e){if(is===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);is=t&&t[1]||""}return`
`+is+e}var ss=!1;function os(e,t){if(!e||ss)return"";ss=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var c=`
`+a[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{ss=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zr(e):""}function E4(e){switch(e.tag){case 5:return zr(e.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 2:case 15:return e=os(e.type,!1),e;case 11:return e=os(e.type.render,!1),e;case 1:return e=os(e.type,!0),e;default:return""}}function Xs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dn:return"Fragment";case Hn:return"Portal";case Ys:return"Profiler";case dl:return"StrictMode";case Js:return"Suspense";case Ks:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case H0:return(e.displayName||"Context")+".Consumer";case V0:return(e._context.displayName||"Context")+".Provider";case pl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fl:return t=e.displayName||null,t!==null?t:Xs(e.type)||"Memo";case Wt:t=e._payload,e=e._init;try{return Xs(e(t))}catch{}}return null}function z4(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xs(t);case 8:return t===dl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function F0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function T4(e){var t=F0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ka(e){e._valueTracker||(e._valueTracker=T4(e))}function B0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=F0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ai(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function eo(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _1(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function U0(e,t){t=t.checked,t!=null&&ul(e,"checked",t,!1)}function to(e,t){U0(e,t);var n=un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?no(e,t.type,n):t.hasOwnProperty("defaultValue")&&no(e,t.type,un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function E1(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function no(e,t,n){(t!=="number"||ai(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tr=Array.isArray;function Kn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+un(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ro(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function z1(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Tr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:un(n)}}function q0(e,t){var n=un(t.value),r=un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function T1(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function W0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ao(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?W0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ca,Q0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ca.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P4=["Webkit","ms","Moz","O"];Object.keys(Lr).forEach(function(e){P4.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lr[t]=Lr[e]})});function Z0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Lr.hasOwnProperty(e)&&Lr[e]?(""+t).trim():t+"px"}function G0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Z0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var O4=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function io(e,t){if(t){if(O4[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function so(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oo=null;function hl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lo=null,Xn=null,er=null;function P1(e){if(e=ha(e)){if(typeof lo!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Vi(t),lo(e.stateNode,e.type,t))}}function Y0(e){Xn?er?er.push(e):er=[e]:Xn=e}function J0(){if(Xn){var e=Xn,t=er;if(er=Xn=null,P1(e),t)for(e=0;e<t.length;e++)P1(t[e])}}function K0(e,t){return e(t)}function X0(){}var ls=!1;function eu(e,t,n){if(ls)return e(t,n);ls=!0;try{return K0(e,t,n)}finally{ls=!1,(Xn!==null||er!==null)&&(X0(),J0())}}function Qr(e,t){var n=e.stateNode;if(n===null)return null;var r=Vi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var co=!1;if(Ht)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){co=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{co=!1}function R4(e,t,n,r,a,i,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Mr=!1,ii=null,si=!1,uo=null,L4={onError:function(e){Mr=!0,ii=e}};function M4(e,t,n,r,a,i,o,l,c){Mr=!1,ii=null,R4.apply(L4,arguments)}function $4(e,t,n,r,a,i,o,l,c){if(M4.apply(this,arguments),Mr){if(Mr){var u=ii;Mr=!1,ii=null}else throw Error(_(198));si||(si=!0,uo=u)}}function Rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function tu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function O1(e){if(Rn(e)!==e)throw Error(_(188))}function I4(e){var t=e.alternate;if(!t){if(t=Rn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return O1(a),e;if(i===r)return O1(a),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function nu(e){return e=I4(e),e!==null?ru(e):null}function ru(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ru(e);if(t!==null)return t;e=e.sibling}return null}var au=rt.unstable_scheduleCallback,R1=rt.unstable_cancelCallback,A4=rt.unstable_shouldYield,V4=rt.unstable_requestPaint,pe=rt.unstable_now,H4=rt.unstable_getCurrentPriorityLevel,ml=rt.unstable_ImmediatePriority,iu=rt.unstable_UserBlockingPriority,oi=rt.unstable_NormalPriority,D4=rt.unstable_LowPriority,su=rt.unstable_IdlePriority,Mi=null,zt=null;function F4(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Mi,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:q4,B4=Math.log,U4=Math.LN2;function q4(e){return e>>>=0,e===0?32:31-(B4(e)/U4|0)|0}var ja=64,Na=4194304;function Pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function li(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~a;l!==0?r=Pr(l):(i&=o,i!==0&&(r=Pr(i)))}else o=n&~a,o!==0?r=Pr(o):i!==0&&(r=Pr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yt(t),a=1<<n,r|=e[n],t&=~a;return r}function W4(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q4(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-yt(i),l=1<<o,c=a[o];c===-1?(!(l&n)||l&r)&&(a[o]=W4(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function po(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ou(){var e=ja;return ja<<=1,!(ja&4194240)&&(ja=64),e}function cs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function Z4(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-yt(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function gl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var G=0;function lu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var cu,vl,uu,du,pu,fo=!1,Sa=[],en=null,tn=null,nn=null,Zr=new Map,Gr=new Map,Zt=[],G4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function L1(e,t){switch(e){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gr.delete(t.pointerId)}}function br(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=ha(t),t!==null&&vl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Y4(e,t,n,r,a){switch(t){case"focusin":return en=br(en,e,t,n,r,a),!0;case"dragenter":return tn=br(tn,e,t,n,r,a),!0;case"mouseover":return nn=br(nn,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Zr.set(i,br(Zr.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Gr.set(i,br(Gr.get(i)||null,e,t,n,r,a)),!0}return!1}function fu(e){var t=yn(e.target);if(t!==null){var n=Rn(t);if(n!==null){if(t=n.tag,t===13){if(t=tu(n),t!==null){e.blockedOn=t,pu(e.priority,function(){uu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ho(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);oo=r,n.target.dispatchEvent(r),oo=null}else return t=ha(n),t!==null&&vl(t),e.blockedOn=n,!1;t.shift()}return!0}function M1(e,t,n){qa(e)&&n.delete(t)}function J4(){fo=!1,en!==null&&qa(en)&&(en=null),tn!==null&&qa(tn)&&(tn=null),nn!==null&&qa(nn)&&(nn=null),Zr.forEach(M1),Gr.forEach(M1)}function wr(e,t){e.blockedOn===t&&(e.blockedOn=null,fo||(fo=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,J4)))}function Yr(e){function t(a){return wr(a,e)}if(0<Sa.length){wr(Sa[0],e);for(var n=1;n<Sa.length;n++){var r=Sa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(en!==null&&wr(en,e),tn!==null&&wr(tn,e),nn!==null&&wr(nn,e),Zr.forEach(t),Gr.forEach(t),n=0;n<Zt.length;n++)r=Zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zt.length&&(n=Zt[0],n.blockedOn===null);)fu(n),n.blockedOn===null&&Zt.shift()}var tr=Ut.ReactCurrentBatchConfig,ci=!0;function K4(e,t,n,r){var a=G,i=tr.transition;tr.transition=null;try{G=1,xl(e,t,n,r)}finally{G=a,tr.transition=i}}function X4(e,t,n,r){var a=G,i=tr.transition;tr.transition=null;try{G=4,xl(e,t,n,r)}finally{G=a,tr.transition=i}}function xl(e,t,n,r){if(ci){var a=ho(e,t,n,r);if(a===null)ys(e,t,r,ui,n),L1(e,r);else if(Y4(a,e,t,n,r))r.stopPropagation();else if(L1(e,r),t&4&&-1<G4.indexOf(e)){for(;a!==null;){var i=ha(a);if(i!==null&&cu(i),i=ho(e,t,n,r),i===null&&ys(e,t,r,ui,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else ys(e,t,r,null,n)}}var ui=null;function ho(e,t,n,r){if(ui=null,e=hl(r),e=yn(e),e!==null)if(t=Rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=tu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ui=e,null}function hu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(H4()){case ml:return 1;case iu:return 4;case oi:case D4:return 16;case su:return 536870912;default:return 16}default:return 16}}var Yt=null,yl=null,Wa=null;function mu(){if(Wa)return Wa;var e,t=yl,n=t.length,r,a="value"in Yt?Yt.value:Yt.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[i-r];r++);return Wa=a.slice(e,1<r?1-r:void 0)}function Qa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _a(){return!0}function $1(){return!1}function it(e){function t(n,r,a,i,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?_a:$1,this.isPropagationStopped=$1,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=it(fr),fa=le({},fr,{view:0,detail:0}),e3=it(fa),us,ds,kr,$i=le({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(us=e.screenX-kr.screenX,ds=e.screenY-kr.screenY):ds=us=0,kr=e),us)},movementY:function(e){return"movementY"in e?e.movementY:ds}}),I1=it($i),t3=le({},$i,{dataTransfer:0}),n3=it(t3),r3=le({},fa,{relatedTarget:0}),ps=it(r3),a3=le({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),i3=it(a3),s3=le({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),o3=it(s3),l3=le({},fr,{data:0}),A1=it(l3),c3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p3(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=d3[e])?!!t[e]:!1}function wl(){return p3}var f3=le({},fa,{key:function(e){if(e.key){var t=c3[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?u3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wl,charCode:function(e){return e.type==="keypress"?Qa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),h3=it(f3),m3=le({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),V1=it(m3),g3=le({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wl}),v3=it(g3),x3=le({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),y3=it(x3),b3=le({},$i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),w3=it(b3),k3=[9,13,27,32],kl=Ht&&"CompositionEvent"in window,$r=null;Ht&&"documentMode"in document&&($r=document.documentMode);var C3=Ht&&"TextEvent"in window&&!$r,gu=Ht&&(!kl||$r&&8<$r&&11>=$r),H1=String.fromCharCode(32),D1=!1;function vu(e,t){switch(e){case"keyup":return k3.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function j3(e,t){switch(e){case"compositionend":return xu(t);case"keypress":return t.which!==32?null:(D1=!0,H1);case"textInput":return e=t.data,e===H1&&D1?null:e;default:return null}}function N3(e,t){if(Fn)return e==="compositionend"||!kl&&vu(e,t)?(e=mu(),Wa=yl=Yt=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gu&&t.locale!=="ko"?null:t.data;default:return null}}var S3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function F1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!S3[e.type]:t==="textarea"}function yu(e,t,n,r){Y0(r),t=di(t,"onChange"),0<t.length&&(n=new bl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ir=null,Jr=null;function _3(e){Tu(e,0)}function Ii(e){var t=qn(e);if(B0(t))return e}function E3(e,t){if(e==="change")return t}var bu=!1;if(Ht){var fs;if(Ht){var hs="oninput"in document;if(!hs){var B1=document.createElement("div");B1.setAttribute("oninput","return;"),hs=typeof B1.oninput=="function"}fs=hs}else fs=!1;bu=fs&&(!document.documentMode||9<document.documentMode)}function U1(){Ir&&(Ir.detachEvent("onpropertychange",wu),Jr=Ir=null)}function wu(e){if(e.propertyName==="value"&&Ii(Jr)){var t=[];yu(t,Jr,e,hl(e)),eu(_3,t)}}function z3(e,t,n){e==="focusin"?(U1(),Ir=t,Jr=n,Ir.attachEvent("onpropertychange",wu)):e==="focusout"&&U1()}function T3(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ii(Jr)}function P3(e,t){if(e==="click")return Ii(t)}function O3(e,t){if(e==="input"||e==="change")return Ii(t)}function R3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:R3;function Kr(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Gs.call(t,a)||!wt(e[a],t[a]))return!1}return!0}function q1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function W1(e,t){var n=q1(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=q1(n)}}function ku(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ku(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cu(){for(var e=window,t=ai();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ai(e.document)}return t}function Cl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function L3(e){var t=Cu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ku(n.ownerDocument.documentElement,n)){if(r!==null&&Cl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=W1(n,i);var o=W1(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var M3=Ht&&"documentMode"in document&&11>=document.documentMode,Bn=null,mo=null,Ar=null,go=!1;function Q1(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;go||Bn==null||Bn!==ai(r)||(r=Bn,"selectionStart"in r&&Cl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ar&&Kr(Ar,r)||(Ar=r,r=di(mo,"onSelect"),0<r.length&&(t=new bl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bn)))}function Ea(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Un={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},ms={},ju={};Ht&&(ju=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function Ai(e){if(ms[e])return ms[e];if(!Un[e])return e;var t=Un[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ju)return ms[e]=t[n];return e}var Nu=Ai("animationend"),Su=Ai("animationiteration"),_u=Ai("animationstart"),Eu=Ai("transitionend"),zu=new Map,Z1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(e,t){zu.set(e,t),On(t,[e])}for(var gs=0;gs<Z1.length;gs++){var vs=Z1[gs],$3=vs.toLowerCase(),I3=vs[0].toUpperCase()+vs.slice(1);pn($3,"on"+I3)}pn(Nu,"onAnimationEnd");pn(Su,"onAnimationIteration");pn(_u,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(Eu,"onTransitionEnd");ar("onMouseEnter",["mouseout","mouseover"]);ar("onMouseLeave",["mouseout","mouseover"]);ar("onPointerEnter",["pointerout","pointerover"]);ar("onPointerLeave",["pointerout","pointerover"]);On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));On("onBeforeInput",["compositionend","keypress","textInput","paste"]);On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A3=new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));function G1(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$4(r,t,void 0,e),e.currentTarget=null}function Tu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&a.isPropagationStopped())break e;G1(a,l,u),i=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&a.isPropagationStopped())break e;G1(a,l,u),i=c}}}if(si)throw e=uo,si=!1,uo=null,e}function ne(e,t){var n=t[wo];n===void 0&&(n=t[wo]=new Set);var r=e+"__bubble";n.has(r)||(Pu(t,e,2,!1),n.add(r))}function xs(e,t,n){var r=0;t&&(r|=4),Pu(n,e,r,t)}var za="_reactListening"+Math.random().toString(36).slice(2);function Xr(e){if(!e[za]){e[za]=!0,A0.forEach(function(n){n!=="selectionchange"&&(A3.has(n)||xs(n,!1,e),xs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[za]||(t[za]=!0,xs("selectionchange",!1,t))}}function Pu(e,t,n,r){switch(hu(t)){case 1:var a=K4;break;case 4:a=X4;break;default:a=xl}n=a.bind(null,t,n,e),a=void 0,!co||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function ys(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;o=o.return}for(;l!==null;){if(o=yn(l),o===null)return;if(c=o.tag,c===5||c===6){r=i=o;continue e}l=l.parentNode}}r=r.return}eu(function(){var u=i,d=hl(n),m=[];e:{var h=zu.get(e);if(h!==void 0){var w=bl,x=e;switch(e){case"keypress":if(Qa(n)===0)break e;case"keydown":case"keyup":w=h3;break;case"focusin":x="focus",w=ps;break;case"focusout":x="blur",w=ps;break;case"beforeblur":case"afterblur":w=ps;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=I1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=n3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=v3;break;case Nu:case Su:case _u:w=i3;break;case Eu:w=y3;break;case"scroll":w=e3;break;case"wheel":w=w3;break;case"copy":case"cut":case"paste":w=o3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=V1}var b=(t&4)!==0,k=!b&&e==="scroll",g=b?h!==null?h+"Capture":null:h;b=[];for(var f=u,y;f!==null;){y=f;var C=y.stateNode;if(y.tag===5&&C!==null&&(y=C,g!==null&&(C=Qr(f,g),C!=null&&b.push(ea(f,C,y)))),k)break;f=f.return}0<b.length&&(h=new w(h,x,null,n,d),m.push({event:h,listeners:b}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==oo&&(x=n.relatedTarget||n.fromElement)&&(yn(x)||x[Dt]))break e;if((w||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=u,x=x?yn(x):null,x!==null&&(k=Rn(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=u),w!==x)){if(b=I1,C="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(b=V1,C="onPointerLeave",g="onPointerEnter",f="pointer"),k=w==null?h:qn(w),y=x==null?h:qn(x),h=new b(C,f+"leave",w,n,d),h.target=k,h.relatedTarget=y,C=null,yn(d)===u&&(b=new b(g,f+"enter",x,n,d),b.target=y,b.relatedTarget=k,C=b),k=C,w&&x)t:{for(b=w,g=x,f=0,y=b;y;y=In(y))f++;for(y=0,C=g;C;C=In(C))y++;for(;0<f-y;)b=In(b),f--;for(;0<y-f;)g=In(g),y--;for(;f--;){if(b===g||g!==null&&b===g.alternate)break t;b=In(b),g=In(g)}b=null}else b=null;w!==null&&Y1(m,h,w,b,!1),x!==null&&k!==null&&Y1(m,k,x,b,!0)}}e:{if(h=u?qn(u):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var j=E3;else if(F1(h))if(bu)j=O3;else{j=T3;var S=z3}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=P3);if(j&&(j=j(e,u))){yu(m,j,n,d);break e}S&&S(e,h,u),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&no(h,"number",h.value)}switch(S=u?qn(u):window,e){case"focusin":(F1(S)||S.contentEditable==="true")&&(Bn=S,mo=u,Ar=null);break;case"focusout":Ar=mo=Bn=null;break;case"mousedown":go=!0;break;case"contextmenu":case"mouseup":case"dragend":go=!1,Q1(m,n,d);break;case"selectionchange":if(M3)break;case"keydown":case"keyup":Q1(m,n,d)}var N;if(kl)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Fn?vu(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(gu&&n.locale!=="ko"&&(Fn||E!=="onCompositionStart"?E==="onCompositionEnd"&&Fn&&(N=mu()):(Yt=d,yl="value"in Yt?Yt.value:Yt.textContent,Fn=!0)),S=di(u,E),0<S.length&&(E=new A1(E,e,null,n,d),m.push({event:E,listeners:S}),N?E.data=N:(N=xu(n),N!==null&&(E.data=N)))),(N=C3?j3(e,n):N3(e,n))&&(u=di(u,"onBeforeInput"),0<u.length&&(d=new A1("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:u}),d.data=N))}Tu(m,t)})}function ea(e,t,n){return{instance:e,listener:t,currentTarget:n}}function di(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Qr(e,n),i!=null&&r.unshift(ea(e,i,a)),i=Qr(e,t),i!=null&&r.push(ea(e,i,a))),e=e.return}return r}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Y1(e,t,n,r,a){for(var i=t._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,a?(c=Qr(n,i),c!=null&&o.unshift(ea(n,c,l))):a||(c=Qr(n,i),c!=null&&o.push(ea(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var V3=/\r\n?/g,H3=/\u0000|\uFFFD/g;function J1(e){return(typeof e=="string"?e:""+e).replace(V3,`
`).replace(H3,"")}function Ta(e,t,n){if(t=J1(t),J1(e)!==t&&n)throw Error(_(425))}function pi(){}var vo=null,xo=null;function yo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bo=typeof setTimeout=="function"?setTimeout:void 0,D3=typeof clearTimeout=="function"?clearTimeout:void 0,K1=typeof Promise=="function"?Promise:void 0,F3=typeof queueMicrotask=="function"?queueMicrotask:typeof K1<"u"?function(e){return K1.resolve(null).then(e).catch(B3)}:bo;function B3(e){setTimeout(function(){throw e})}function bs(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Yr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Yr(t)}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function X1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hr=Math.random().toString(36).slice(2),_t="__reactFiber$"+hr,ta="__reactProps$"+hr,Dt="__reactContainer$"+hr,wo="__reactEvents$"+hr,U3="__reactListeners$"+hr,q3="__reactHandles$"+hr;function yn(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=X1(e);e!==null;){if(n=e[_t])return n;e=X1(e)}return t}e=n,n=e.parentNode}return null}function ha(e){return e=e[_t]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Vi(e){return e[ta]||null}var ko=[],Wn=-1;function fn(e){return{current:e}}function re(e){0>Wn||(e.current=ko[Wn],ko[Wn]=null,Wn--)}function ee(e,t){Wn++,ko[Wn]=e.current,e.current=t}var dn={},Re=fn(dn),Ze=fn(!1),jn=dn;function ir(e,t){var n=e.type.contextTypes;if(!n)return dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ge(e){return e=e.childContextTypes,e!=null}function fi(){re(Ze),re(Re)}function ec(e,t,n){if(Re.current!==dn)throw Error(_(168));ee(Re,t),ee(Ze,n)}function Ou(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(_(108,z4(e)||"Unknown",a));return le({},n,r)}function hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,jn=Re.current,ee(Re,e),ee(Ze,Ze.current),!0}function tc(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Ou(e,t,jn),r.__reactInternalMemoizedMergedChildContext=e,re(Ze),re(Re),ee(Re,e)):re(Ze),ee(Ze,n)}var Lt=null,Hi=!1,ws=!1;function Ru(e){Lt===null?Lt=[e]:Lt.push(e)}function W3(e){Hi=!0,Ru(e)}function hn(){if(!ws&&Lt!==null){ws=!0;var e=0,t=G;try{var n=Lt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Lt=null,Hi=!1}catch(a){throw Lt!==null&&(Lt=Lt.slice(e+1)),au(ml,hn),a}finally{G=t,ws=!1}}return null}var Qn=[],Zn=0,mi=null,gi=0,st=[],ot=0,Nn=null,Mt=1,$t="";function vn(e,t){Qn[Zn++]=gi,Qn[Zn++]=mi,mi=e,gi=t}function Lu(e,t,n){st[ot++]=Mt,st[ot++]=$t,st[ot++]=Nn,Nn=e;var r=Mt;e=$t;var a=32-yt(r)-1;r&=~(1<<a),n+=1;var i=32-yt(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Mt=1<<32-yt(t)+a|n<<a|r,$t=i+e}else Mt=1<<i|n<<a|r,$t=e}function jl(e){e.return!==null&&(vn(e,1),Lu(e,1,0))}function Nl(e){for(;e===mi;)mi=Qn[--Zn],Qn[Zn]=null,gi=Qn[--Zn],Qn[Zn]=null;for(;e===Nn;)Nn=st[--ot],st[ot]=null,$t=st[--ot],st[ot]=null,Mt=st[--ot],st[ot]=null}var nt=null,tt=null,ae=!1,xt=null;function Mu(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function nc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,tt=rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nn!==null?{id:Mt,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,nt=e,tt=null,!0):!1;default:return!1}}function Co(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jo(e){if(ae){var t=tt;if(t){var n=t;if(!nc(e,t)){if(Co(e))throw Error(_(418));t=rn(n.nextSibling);var r=nt;t&&nc(e,t)?Mu(r,n):(e.flags=e.flags&-4097|2,ae=!1,nt=e)}}else{if(Co(e))throw Error(_(418));e.flags=e.flags&-4097|2,ae=!1,nt=e}}}function rc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function Pa(e){if(e!==nt)return!1;if(!ae)return rc(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yo(e.type,e.memoizedProps)),t&&(t=tt)){if(Co(e))throw $u(),Error(_(418));for(;t;)Mu(e,t),t=rn(t.nextSibling)}if(rc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=nt?rn(e.stateNode.nextSibling):null;return!0}function $u(){for(var e=tt;e;)e=rn(e.nextSibling)}function sr(){tt=nt=null,ae=!1}function Sl(e){xt===null?xt=[e]:xt.push(e)}var Q3=Ut.ReactCurrentBatchConfig;function gt(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var vi=fn(null),xi=null,Gn=null,_l=null;function El(){_l=Gn=xi=null}function zl(e){var t=vi.current;re(vi),e._currentValue=t}function No(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nr(e,t){xi=e,_l=Gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Qe=!0),e.firstContext=null)}function pt(e){var t=e._currentValue;if(_l!==e)if(e={context:e,memoizedValue:t,next:null},Gn===null){if(xi===null)throw Error(_(308));Gn=e,xi.dependencies={lanes:0,firstContext:e}}else Gn=Gn.next=e;return t}var bn=null;function Tl(e){bn===null?bn=[e]:bn.push(e)}function Iu(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Tl(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ft(e,r)}function Ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qt=!1;function Pl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Au(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function an(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ft(e,n)}return a=r.interleaved,a===null?(t.next=t,Tl(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ft(e,n)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gl(e,n)}}function ac(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function yi(e,t,n,r){var a=e.updateQueue;Qt=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?i=u:o.next=u,o=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(i!==null){var m=a.baseState;o=0,d=u=c=null,l=i;do{var h=l.lane,w=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,b=l;switch(h=t,w=n,b.tag){case 1:if(x=b.payload,typeof x=="function"){m=x.call(w,m,h);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,h=typeof x=="function"?x.call(w,m,h):x,h==null)break e;m=le({},m,h);break e;case 2:Qt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[l]:h.push(l))}else w={eventTime:w,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=w,c=m):d=d.next=w,o|=h;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;h=l,l=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(1);if(d===null&&(c=m),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=d,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);_n|=o,e.lanes=o,e.memoizedState=m}}function ic(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(_(191,a));a.call(r)}}}var Vu=new I0.Component().refs;function So(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Di={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),a=on(e),i=Vt(r,a);i.payload=t,n!=null&&(i.callback=n),t=an(e,i,a),t!==null&&(bt(t,e,a,r),Za(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),a=on(e),i=Vt(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=an(e,i,a),t!==null&&(bt(t,e,a,r),Za(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=on(e),a=Vt(n,r);a.tag=2,t!=null&&(a.callback=t),t=an(e,a,r),t!==null&&(bt(t,e,r,n),Za(t,e,r))}};function sc(e,t,n,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(a,i):!0}function Hu(e,t,n){var r=!1,a=dn,i=t.contextType;return typeof i=="object"&&i!==null?i=pt(i):(a=Ge(t)?jn:Re.current,r=t.contextTypes,i=(r=r!=null)?ir(e,a):dn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Di,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function oc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Di.enqueueReplaceState(t,t.state,null)}function _o(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=Vu,Pl(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=pt(i):(i=Ge(t)?jn:Re.current,a.context=ir(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(So(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Di.enqueueReplaceState(a,a.state,null),yi(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;l===Vu&&(l=a.refs={}),o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Oa(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function lc(e){var t=e._init;return t(e._payload)}function Du(e){function t(g,f){if(e){var y=g.deletions;y===null?(g.deletions=[f],g.flags|=16):y.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function a(g,f){return g=ln(g,f),g.index=0,g.sibling=null,g}function i(g,f,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<f?(g.flags|=2,f):y):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,f,y,C){return f===null||f.tag!==6?(f=Es(y,g.mode,C),f.return=g,f):(f=a(f,y),f.return=g,f)}function c(g,f,y,C){var j=y.type;return j===Dn?d(g,f,y.props.children,C,y.key):f!==null&&(f.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Wt&&lc(j)===f.type)?(C=a(f,y.props),C.ref=Cr(g,f,y),C.return=g,C):(C=ei(y.type,y.key,y.props,null,g.mode,C),C.ref=Cr(g,f,y),C.return=g,C)}function u(g,f,y,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=zs(y,g.mode,C),f.return=g,f):(f=a(f,y.children||[]),f.return=g,f)}function d(g,f,y,C,j){return f===null||f.tag!==7?(f=Cn(y,g.mode,C,j),f.return=g,f):(f=a(f,y),f.return=g,f)}function m(g,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Es(""+f,g.mode,y),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case wa:return y=ei(f.type,f.key,f.props,null,g.mode,y),y.ref=Cr(g,null,f),y.return=g,y;case Hn:return f=zs(f,g.mode,y),f.return=g,f;case Wt:var C=f._init;return m(g,C(f._payload),y)}if(Tr(f)||xr(f))return f=Cn(f,g.mode,y,null),f.return=g,f;Oa(g,f)}return null}function h(g,f,y,C){var j=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return j!==null?null:l(g,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case wa:return y.key===j?c(g,f,y,C):null;case Hn:return y.key===j?u(g,f,y,C):null;case Wt:return j=y._init,h(g,f,j(y._payload),C)}if(Tr(y)||xr(y))return j!==null?null:d(g,f,y,C,null);Oa(g,y)}return null}function w(g,f,y,C,j){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(y)||null,l(f,g,""+C,j);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case wa:return g=g.get(C.key===null?y:C.key)||null,c(f,g,C,j);case Hn:return g=g.get(C.key===null?y:C.key)||null,u(f,g,C,j);case Wt:var S=C._init;return w(g,f,y,S(C._payload),j)}if(Tr(C)||xr(C))return g=g.get(y)||null,d(f,g,C,j,null);Oa(f,C)}return null}function x(g,f,y,C){for(var j=null,S=null,N=f,E=f=0,P=null;N!==null&&E<y.length;E++){N.index>E?(P=N,N=null):P=N.sibling;var T=h(g,N,y[E],C);if(T===null){N===null&&(N=P);break}e&&N&&T.alternate===null&&t(g,N),f=i(T,f,E),S===null?j=T:S.sibling=T,S=T,N=P}if(E===y.length)return n(g,N),ae&&vn(g,E),j;if(N===null){for(;E<y.length;E++)N=m(g,y[E],C),N!==null&&(f=i(N,f,E),S===null?j=N:S.sibling=N,S=N);return ae&&vn(g,E),j}for(N=r(g,N);E<y.length;E++)P=w(N,g,E,y[E],C),P!==null&&(e&&P.alternate!==null&&N.delete(P.key===null?E:P.key),f=i(P,f,E),S===null?j=P:S.sibling=P,S=P);return e&&N.forEach(function(H){return t(g,H)}),ae&&vn(g,E),j}function b(g,f,y,C){var j=xr(y);if(typeof j!="function")throw Error(_(150));if(y=j.call(y),y==null)throw Error(_(151));for(var S=j=null,N=f,E=f=0,P=null,T=y.next();N!==null&&!T.done;E++,T=y.next()){N.index>E?(P=N,N=null):P=N.sibling;var H=h(g,N,T.value,C);if(H===null){N===null&&(N=P);break}e&&N&&H.alternate===null&&t(g,N),f=i(H,f,E),S===null?j=H:S.sibling=H,S=H,N=P}if(T.done)return n(g,N),ae&&vn(g,E),j;if(N===null){for(;!T.done;E++,T=y.next())T=m(g,T.value,C),T!==null&&(f=i(T,f,E),S===null?j=T:S.sibling=T,S=T);return ae&&vn(g,E),j}for(N=r(g,N);!T.done;E++,T=y.next())T=w(N,g,E,T.value,C),T!==null&&(e&&T.alternate!==null&&N.delete(T.key===null?E:T.key),f=i(T,f,E),S===null?j=T:S.sibling=T,S=T);return e&&N.forEach(function(Ce){return t(g,Ce)}),ae&&vn(g,E),j}function k(g,f,y,C){if(typeof y=="object"&&y!==null&&y.type===Dn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case wa:e:{for(var j=y.key,S=f;S!==null;){if(S.key===j){if(j=y.type,j===Dn){if(S.tag===7){n(g,S.sibling),f=a(S,y.props.children),f.return=g,g=f;break e}}else if(S.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Wt&&lc(j)===S.type){n(g,S.sibling),f=a(S,y.props),f.ref=Cr(g,S,y),f.return=g,g=f;break e}n(g,S);break}else t(g,S);S=S.sibling}y.type===Dn?(f=Cn(y.props.children,g.mode,C,y.key),f.return=g,g=f):(C=ei(y.type,y.key,y.props,null,g.mode,C),C.ref=Cr(g,f,y),C.return=g,g=C)}return o(g);case Hn:e:{for(S=y.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(g,f.sibling),f=a(f,y.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else t(g,f);f=f.sibling}f=zs(y,g.mode,C),f.return=g,g=f}return o(g);case Wt:return S=y._init,k(g,f,S(y._payload),C)}if(Tr(y))return x(g,f,y,C);if(xr(y))return b(g,f,y,C);Oa(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(g,f.sibling),f=a(f,y),f.return=g,g=f):(n(g,f),f=Es(y,g.mode,C),f.return=g,g=f),o(g)):n(g,f)}return k}var or=Du(!0),Fu=Du(!1),ma={},Tt=fn(ma),na=fn(ma),ra=fn(ma);function wn(e){if(e===ma)throw Error(_(174));return e}function Ol(e,t){switch(ee(ra,t),ee(na,e),ee(Tt,ma),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ao(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ao(t,e)}re(Tt),ee(Tt,t)}function lr(){re(Tt),re(na),re(ra)}function Bu(e){wn(ra.current);var t=wn(Tt.current),n=ao(t,e.type);t!==n&&(ee(na,e),ee(Tt,n))}function Rl(e){na.current===e&&(re(Tt),re(na))}var se=fn(0);function bi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ks=[];function Ll(){for(var e=0;e<ks.length;e++)ks[e]._workInProgressVersionPrimary=null;ks.length=0}var Ga=Ut.ReactCurrentDispatcher,Cs=Ut.ReactCurrentBatchConfig,Sn=0,oe=null,ve=null,we=null,wi=!1,Vr=!1,aa=0,Z3=0;function ze(){throw Error(_(321))}function Ml(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function $l(e,t,n,r,a,i){if(Sn=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ga.current=e===null||e.memoizedState===null?K3:X3,e=n(r,a),Vr){i=0;do{if(Vr=!1,aa=0,25<=i)throw Error(_(301));i+=1,we=ve=null,t.updateQueue=null,Ga.current=e6,e=n(r,a)}while(Vr)}if(Ga.current=ki,t=ve!==null&&ve.next!==null,Sn=0,we=ve=oe=null,wi=!1,t)throw Error(_(300));return e}function Il(){var e=aa!==0;return aa=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?oe.memoizedState=we=e:we=we.next=e,we}function ft(){if(ve===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=we===null?oe.memoizedState:we.next;if(t!==null)we=t,ve=e;else{if(e===null)throw Error(_(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},we===null?oe.memoizedState=we=e:we=we.next=e}return we}function ia(e,t){return typeof t=="function"?t(e):t}function js(e){var t=ft(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ve,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var l=o=null,c=null,u=i;do{var d=u.lane;if((Sn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,o=r):c=c.next=m,oe.lanes|=d,_n|=d}u=u.next}while(u!==null&&u!==i);c===null?o=r:c.next=l,wt(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,oe.lanes|=i,_n|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ns(e){var t=ft(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);wt(i,t.memoizedState)||(Qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Uu(){}function qu(e,t){var n=oe,r=ft(),a=t(),i=!wt(r.memoizedState,a);if(i&&(r.memoizedState=a,Qe=!0),r=r.queue,Al(Zu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,sa(9,Qu.bind(null,n,r,a,t),void 0,null),ke===null)throw Error(_(349));Sn&30||Wu(n,t,a)}return a}function Wu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qu(e,t,n,r){t.value=n,t.getSnapshot=r,Gu(t)&&Yu(e)}function Zu(e,t,n){return n(function(){Gu(t)&&Yu(e)})}function Gu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function Yu(e){var t=Ft(e,1);t!==null&&bt(t,e,1,-1)}function cc(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:e},t.queue=e,e=e.dispatch=J3.bind(null,oe,e),[t.memoizedState,e]}function sa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ju(){return ft().memoizedState}function Ya(e,t,n,r){var a=St();oe.flags|=e,a.memoizedState=sa(1|t,n,void 0,r===void 0?null:r)}function Fi(e,t,n,r){var a=ft();r=r===void 0?null:r;var i=void 0;if(ve!==null){var o=ve.memoizedState;if(i=o.destroy,r!==null&&Ml(r,o.deps)){a.memoizedState=sa(t,n,i,r);return}}oe.flags|=e,a.memoizedState=sa(1|t,n,i,r)}function uc(e,t){return Ya(8390656,8,e,t)}function Al(e,t){return Fi(2048,8,e,t)}function Ku(e,t){return Fi(4,2,e,t)}function Xu(e,t){return Fi(4,4,e,t)}function ed(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function td(e,t,n){return n=n!=null?n.concat([e]):null,Fi(4,4,ed.bind(null,t,e),n)}function Vl(){}function nd(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ml(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rd(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ml(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ad(e,t,n){return Sn&21?(wt(n,t)||(n=ou(),oe.lanes|=n,_n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n)}function G3(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=Cs.transition;Cs.transition={};try{e(!1),t()}finally{G=n,Cs.transition=r}}function id(){return ft().memoizedState}function Y3(e,t,n){var r=on(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sd(e))od(t,n);else if(n=Iu(e,t,n,r),n!==null){var a=Ae();bt(n,e,r,a),ld(n,t,r)}}function J3(e,t,n){var r=on(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sd(e))od(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,wt(l,o)){var c=t.interleaved;c===null?(a.next=a,Tl(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=Iu(e,t,a,r),n!==null&&(a=Ae(),bt(n,e,r,a),ld(n,t,r))}}function sd(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function od(e,t){Vr=wi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ld(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gl(e,n)}}var ki={readContext:pt,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},K3={readContext:pt,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:uc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ya(4194308,4,ed.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ya(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ya(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Y3.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:cc,useDebugValue:Vl,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=cc(!1),t=e[0];return e=G3.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,a=St();if(ae){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),ke===null)throw Error(_(349));Sn&30||Wu(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,uc(Zu.bind(null,r,i,e),[e]),r.flags|=2048,sa(9,Qu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=St(),t=ke.identifierPrefix;if(ae){var n=$t,r=Mt;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=aa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Z3++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},X3={readContext:pt,useCallback:nd,useContext:pt,useEffect:Al,useImperativeHandle:td,useInsertionEffect:Ku,useLayoutEffect:Xu,useMemo:rd,useReducer:js,useRef:Ju,useState:function(){return js(ia)},useDebugValue:Vl,useDeferredValue:function(e){var t=ft();return ad(t,ve.memoizedState,e)},useTransition:function(){var e=js(ia)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Uu,useSyncExternalStore:qu,useId:id,unstable_isNewReconciler:!1},e6={readContext:pt,useCallback:nd,useContext:pt,useEffect:Al,useImperativeHandle:td,useInsertionEffect:Ku,useLayoutEffect:Xu,useMemo:rd,useReducer:Ns,useRef:Ju,useState:function(){return Ns(ia)},useDebugValue:Vl,useDeferredValue:function(e){var t=ft();return ve===null?t.memoizedState=e:ad(t,ve.memoizedState,e)},useTransition:function(){var e=Ns(ia)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Uu,useSyncExternalStore:qu,useId:id,unstable_isNewReconciler:!1};function cr(e,t){try{var n="",r=t;do n+=E4(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Ss(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Eo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var t6=typeof WeakMap=="function"?WeakMap:Map;function cd(e,t,n){n=Vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ji||(ji=!0,Ao=r),Eo(e,t)},n}function ud(e,t,n){n=Vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Eo(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Eo(e,t),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function dc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new t6;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=m6.bind(null,e,t,n),t.then(e,e))}function pc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fc(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Vt(-1,1),t.tag=2,an(n,t,1))),n.lanes|=1),e)}var n6=Ut.ReactCurrentOwner,Qe=!1;function $e(e,t,n,r){t.child=e===null?Fu(t,null,n,r):or(t,e.child,n,r)}function hc(e,t,n,r,a){n=n.render;var i=t.ref;return nr(t,a),r=$l(e,t,n,r,i,a),n=Il(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Bt(e,t,a)):(ae&&n&&jl(t),t.flags|=1,$e(e,t,r,a),t.child)}function mc(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!Ql(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,dd(e,t,i,r,a)):(e=ei(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(o,r)&&e.ref===t.ref)return Bt(e,t,a)}return t.flags|=1,e=ln(i,r),e.ref=t.ref,e.return=t,t.child=e}function dd(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(Kr(i,r)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(Qe=!0);else return t.lanes=e.lanes,Bt(e,t,a)}return zo(e,t,n,r,a)}function pd(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Jn,et),et|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Jn,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ee(Jn,et),et|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ee(Jn,et),et|=r;return $e(e,t,a,n),t.child}function fd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zo(e,t,n,r,a){var i=Ge(n)?jn:Re.current;return i=ir(t,i),nr(t,a),n=$l(e,t,n,r,i,a),r=Il(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Bt(e,t,a)):(ae&&r&&jl(t),t.flags|=1,$e(e,t,n,a),t.child)}function gc(e,t,n,r,a){if(Ge(n)){var i=!0;hi(t)}else i=!1;if(nr(t,a),t.stateNode===null)Ja(e,t),Hu(t,n,r),_o(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=pt(u):(u=Ge(n)?jn:Re.current,u=ir(t,u));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&oc(t,o,r,u),Qt=!1;var h=t.memoizedState;o.state=h,yi(t,r,o,a),c=t.memoizedState,l!==r||h!==c||Ze.current||Qt?(typeof d=="function"&&(So(t,n,d,r),c=t.memoizedState),(l=Qt||sc(t,n,l,r,h,c,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Au(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:gt(t.type,l),o.props=u,m=t.pendingProps,h=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=pt(c):(c=Ge(n)?jn:Re.current,c=ir(t,c));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||h!==c)&&oc(t,o,r,c),Qt=!1,h=t.memoizedState,o.state=h,yi(t,r,o,a);var x=t.memoizedState;l!==m||h!==x||Ze.current||Qt?(typeof w=="function"&&(So(t,n,w,r),x=t.memoizedState),(u=Qt||sc(t,n,u,r,h,x,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return To(e,t,n,r,i,a)}function To(e,t,n,r,a,i){fd(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&tc(t,n,!1),Bt(e,t,i);r=t.stateNode,n6.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=or(t,e.child,null,i),t.child=or(t,null,l,i)):$e(e,t,l,i),t.memoizedState=r.state,a&&tc(t,n,!0),t.child}function hd(e){var t=e.stateNode;t.pendingContext?ec(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ec(e,t.context,!1),Ol(e,t.containerInfo)}function vc(e,t,n,r,a){return sr(),Sl(a),t.flags|=256,$e(e,t,n,r),t.child}var Po={dehydrated:null,treeContext:null,retryLane:0};function Oo(e){return{baseLanes:e,cachePool:null,transitions:null}}function md(e,t,n){var r=t.pendingProps,a=se.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ee(se,a&1),e===null)return jo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=qi(o,r,0,null),e=Cn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Oo(n),t.memoizedState=Po,e):Hl(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return r6(e,t,o,r,l,a,n);if(i){i=r.fallback,o=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=ln(a,c),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=ln(l,i):(i=Cn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Oo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Po,r}return i=e.child,e=i.sibling,r=ln(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Hl(e,t){return t=qi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ra(e,t,n,r){return r!==null&&Sl(r),or(t,e.child,null,n),e=Hl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function r6(e,t,n,r,a,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Ss(Error(_(422))),Ra(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=qi({mode:"visible",children:r.children},a,0,null),i=Cn(i,a,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&or(t,e.child,null,o),t.child.memoizedState=Oo(o),t.memoizedState=Po,i);if(!(t.mode&1))return Ra(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(_(419)),r=Ss(i,r,void 0),Ra(e,t,o,r)}if(l=(o&e.childLanes)!==0,Qe||l){if(r=ke,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Ft(e,a),bt(r,e,a,-1))}return Wl(),r=Ss(Error(_(421))),Ra(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=g6.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,tt=rn(a.nextSibling),nt=t,ae=!0,xt=null,e!==null&&(st[ot++]=Mt,st[ot++]=$t,st[ot++]=Nn,Mt=e.id,$t=e.overflow,Nn=t),t=Hl(t,r.children),t.flags|=4096,t)}function xc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),No(e.return,t,n)}function _s(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function gd(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if($e(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xc(e,n,t);else if(e.tag===19)xc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(se,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&bi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),_s(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&bi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}_s(t,!0,n,null,i);break;case"together":_s(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ja(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function a6(e,t,n){switch(t.tag){case 3:hd(t),sr();break;case 5:Bu(t);break;case 1:Ge(t.type)&&hi(t);break;case 4:Ol(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;ee(vi,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?md(e,t,n):(ee(se,se.current&1),e=Bt(e,t,n),e!==null?e.sibling:null);ee(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return gd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ee(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,pd(e,t,n)}return Bt(e,t,n)}var vd,Ro,xd,yd;vd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ro=function(){};xd=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,wn(Tt.current);var i=null;switch(n){case"input":a=eo(e,a),r=eo(e,r),i=[];break;case"select":a=le({},a,{value:void 0}),r=le({},r,{value:void 0}),i=[];break;case"textarea":a=ro(e,a),r=ro(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pi)}io(n,r);var o;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(qr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(l=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(qr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ne("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};yd=function(e,t,n,r){n!==r&&(t.flags|=4)};function jr(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function i6(e,t,n){var r=t.pendingProps;switch(Nl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Ge(t.type)&&fi(),Te(t),null;case 3:return r=t.stateNode,lr(),re(Ze),re(Re),Ll(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(Do(xt),xt=null))),Ro(e,t),Te(t),null;case 5:Rl(t);var a=wn(ra.current);if(n=t.type,e!==null&&t.stateNode!=null)xd(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Te(t),null}if(e=wn(Tt.current),Pa(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[_t]=t,r[ta]=i,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(a=0;a<Or.length;a++)ne(Or[a],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":_1(r,i),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ne("invalid",r);break;case"textarea":z1(r,i),ne("invalid",r)}io(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ta(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ta(r.textContent,l,e),a=["children",""+l]):qr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":ka(r),E1(r,i,!0);break;case"textarea":ka(r),T1(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=pi)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=W0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[_t]=t,e[ta]=r,vd(e,t,!1,!1),t.stateNode=e;e:{switch(o=so(n,r),n){case"dialog":ne("cancel",e),ne("close",e),a=r;break;case"iframe":case"object":case"embed":ne("load",e),a=r;break;case"video":case"audio":for(a=0;a<Or.length;a++)ne(Or[a],e);a=r;break;case"source":ne("error",e),a=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),a=r;break;case"details":ne("toggle",e),a=r;break;case"input":_1(e,r),a=eo(e,r),ne("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=le({},r,{value:void 0}),ne("invalid",e);break;case"textarea":z1(e,r),a=ro(e,r),ne("invalid",e);break;default:a=r}io(n,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?G0(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Q0(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Wr(e,c):typeof c=="number"&&Wr(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(qr.hasOwnProperty(i)?c!=null&&i==="onScroll"&&ne("scroll",e):c!=null&&ul(e,i,c,o))}switch(n){case"input":ka(e),E1(e,r,!1);break;case"textarea":ka(e),T1(e);break;case"option":r.value!=null&&e.setAttribute("value",""+un(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Kn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=pi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)yd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=wn(ra.current),wn(Tt.current),Pa(t)){if(r=t.stateNode,n=t.memoizedProps,r[_t]=t,(i=r.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:Ta(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ta(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=t,t.stateNode=r}return Te(t),null;case 13:if(re(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&tt!==null&&t.mode&1&&!(t.flags&128))$u(),sr(),t.flags|=98560,i=!1;else if(i=Pa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[_t]=t}else sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),i=!1}else xt!==null&&(Do(xt),xt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?xe===0&&(xe=3):Wl())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return lr(),Ro(e,t),e===null&&Xr(t.stateNode.containerInfo),Te(t),null;case 10:return zl(t.type._context),Te(t),null;case 17:return Ge(t.type)&&fi(),Te(t),null;case 19:if(re(se),i=t.memoizedState,i===null)return Te(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)jr(i,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=bi(e),o!==null){for(t.flags|=128,jr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(se,se.current&1|2),t.child}e=e.sibling}i.tail!==null&&pe()>ur&&(t.flags|=128,r=!0,jr(i,!1),t.lanes=4194304)}else{if(!r)if(e=bi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ae)return Te(t),null}else 2*pe()-i.renderingStartTime>ur&&n!==1073741824&&(t.flags|=128,r=!0,jr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=pe(),t.sibling=null,n=se.current,ee(se,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return ql(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?et&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function s6(e,t){switch(Nl(t),t.tag){case 1:return Ge(t.type)&&fi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return lr(),re(Ze),re(Re),Ll(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rl(t),null;case 13:if(re(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(se),null;case 4:return lr(),null;case 10:return zl(t.type._context),null;case 22:case 23:return ql(),null;case 24:return null;default:return null}}var La=!1,Oe=!1,o6=typeof WeakSet=="function"?WeakSet:Set,L=null;function Yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function Lo(e,t,n){try{n()}catch(r){ue(e,t,r)}}var yc=!1;function l6(e,t){if(vo=ci,e=Cu(),Cl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,d=0,m=e,h=null;t:for(;;){for(var w;m!==n||a!==0&&m.nodeType!==3||(l=o+a),m!==i||r!==0&&m.nodeType!==3||(c=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(w=m.firstChild)!==null;)h=m,m=w;for(;;){if(m===e)break t;if(h===n&&++u===a&&(l=o),h===i&&++d===r&&(c=o),(w=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=w}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(xo={focusedElem:e,selectionRange:n},ci=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var b=x.memoizedProps,k=x.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:gt(t.type,b),k);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(C){ue(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return x=yc,yc=!1,x}function Hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Lo(t,n,i)}a=a.next}while(a!==r)}}function Bi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bd(e){var t=e.alternate;t!==null&&(e.alternate=null,bd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[ta],delete t[wo],delete t[U3],delete t[q3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wd(e){return e.tag===5||e.tag===3||e.tag===4}function bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $o(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pi));else if(r!==4&&(e=e.child,e!==null))for($o(e,t,n),e=e.sibling;e!==null;)$o(e,t,n),e=e.sibling}function Io(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Io(e,t,n),e=e.sibling;e!==null;)Io(e,t,n),e=e.sibling}var je=null,vt=!1;function qt(e,t,n){for(n=n.child;n!==null;)kd(e,t,n),n=n.sibling}function kd(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Mi,n)}catch{}switch(n.tag){case 5:Oe||Yn(n,t);case 6:var r=je,a=vt;je=null,qt(e,t,n),je=r,vt=a,je!==null&&(vt?(e=je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(vt?(e=je,n=n.stateNode,e.nodeType===8?bs(e.parentNode,n):e.nodeType===1&&bs(e,n),Yr(e)):bs(je,n.stateNode));break;case 4:r=je,a=vt,je=n.stateNode.containerInfo,vt=!0,qt(e,t,n),je=r,vt=a;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Lo(n,t,o),a=a.next}while(a!==r)}qt(e,t,n);break;case 1:if(!Oe&&(Yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ue(n,t,l)}qt(e,t,n);break;case 21:qt(e,t,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,qt(e,t,n),Oe=r):qt(e,t,n);break;default:qt(e,t,n)}}function wc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new o6),t.forEach(function(r){var a=v6.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:je=l.stateNode,vt=!1;break e;case 3:je=l.stateNode.containerInfo,vt=!0;break e;case 4:je=l.stateNode.containerInfo,vt=!0;break e}l=l.return}if(je===null)throw Error(_(160));kd(i,o,a),je=null,vt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){ue(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cd(t,e),t=t.sibling}function Cd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),jt(e),r&4){try{Hr(3,e,e.return),Bi(3,e)}catch(b){ue(e,e.return,b)}try{Hr(5,e,e.return)}catch(b){ue(e,e.return,b)}}break;case 1:ht(t,e),jt(e),r&512&&n!==null&&Yn(n,n.return);break;case 5:if(ht(t,e),jt(e),r&512&&n!==null&&Yn(n,n.return),e.flags&32){var a=e.stateNode;try{Wr(a,"")}catch(b){ue(e,e.return,b)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&U0(a,i),so(l,o);var u=so(l,i);for(o=0;o<c.length;o+=2){var d=c[o],m=c[o+1];d==="style"?G0(a,m):d==="dangerouslySetInnerHTML"?Q0(a,m):d==="children"?Wr(a,m):ul(a,d,m,u)}switch(l){case"input":to(a,i);break;case"textarea":q0(a,i);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Kn(a,!!i.multiple,w,!1):h!==!!i.multiple&&(i.defaultValue!=null?Kn(a,!!i.multiple,i.defaultValue,!0):Kn(a,!!i.multiple,i.multiple?[]:"",!1))}a[ta]=i}catch(b){ue(e,e.return,b)}}break;case 6:if(ht(t,e),jt(e),r&4){if(e.stateNode===null)throw Error(_(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(b){ue(e,e.return,b)}}break;case 3:if(ht(t,e),jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yr(t.containerInfo)}catch(b){ue(e,e.return,b)}break;case 4:ht(t,e),jt(e);break;case 13:ht(t,e),jt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Bl=pe())),r&4&&wc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Oe=(u=Oe)||d,ht(t,e),Oe=u):ht(t,e),jt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(L=e,d=e.child;d!==null;){for(m=L=d;L!==null;){switch(h=L,w=h.child,h.tag){case 0:case 11:case 14:case 15:Hr(4,h,h.return);break;case 1:Yn(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(b){ue(r,n,b)}}break;case 5:Yn(h,h.return);break;case 22:if(h.memoizedState!==null){Cc(m);continue}}w!==null?(w.return=h,L=w):Cc(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{a=m.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Z0("display",o))}catch(b){ue(e,e.return,b)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(b){ue(e,e.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ht(t,e),jt(e),r&4&&wc(e);break;case 21:break;default:ht(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wd(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Wr(a,""),r.flags&=-33);var i=bc(e);Io(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,l=bc(e);$o(e,l,o);break;default:throw Error(_(161))}}catch(c){ue(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function c6(e,t,n){L=e,jd(e)}function jd(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var a=L,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||La;if(!o){var l=a.alternate,c=l!==null&&l.memoizedState!==null||Oe;l=La;var u=Oe;if(La=o,(Oe=c)&&!u)for(L=a;L!==null;)o=L,c=o.child,o.tag===22&&o.memoizedState!==null?jc(a):c!==null?(c.return=o,L=c):jc(a);for(;i!==null;)L=i,jd(i),i=i.sibling;L=a,La=l,Oe=u}kc(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,L=i):kc(e)}}function kc(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Oe||Bi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:gt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ic(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ic(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&Yr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Oe||t.flags&512&&Mo(t)}catch(h){ue(t,t.return,h)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Cc(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function jc(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bi(4,t)}catch(c){ue(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(c){ue(t,a,c)}}var i=t.return;try{Mo(t)}catch(c){ue(t,i,c)}break;case 5:var o=t.return;try{Mo(t)}catch(c){ue(t,o,c)}}}catch(c){ue(t,t.return,c)}if(t===e){L=null;break}var l=t.sibling;if(l!==null){l.return=t.return,L=l;break}L=t.return}}var u6=Math.ceil,Ci=Ut.ReactCurrentDispatcher,Dl=Ut.ReactCurrentOwner,ut=Ut.ReactCurrentBatchConfig,W=0,ke=null,me=null,Se=0,et=0,Jn=fn(0),xe=0,oa=null,_n=0,Ui=0,Fl=0,Dr=null,We=null,Bl=0,ur=1/0,Rt=null,ji=!1,Ao=null,sn=null,Ma=!1,Jt=null,Ni=0,Fr=0,Vo=null,Ka=-1,Xa=0;function Ae(){return W&6?pe():Ka!==-1?Ka:Ka=pe()}function on(e){return e.mode&1?W&2&&Se!==0?Se&-Se:Q3.transition!==null?(Xa===0&&(Xa=ou()),Xa):(e=G,e!==0||(e=window.event,e=e===void 0?16:hu(e.type)),e):1}function bt(e,t,n,r){if(50<Fr)throw Fr=0,Vo=null,Error(_(185));pa(e,n,r),(!(W&2)||e!==ke)&&(e===ke&&(!(W&2)&&(Ui|=n),xe===4&&Gt(e,Se)),Ye(e,r),n===1&&W===0&&!(t.mode&1)&&(ur=pe()+500,Hi&&hn()))}function Ye(e,t){var n=e.callbackNode;Q4(e,t);var r=li(e,e===ke?Se:0);if(r===0)n!==null&&R1(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&R1(n),t===1)e.tag===0?W3(Nc.bind(null,e)):Ru(Nc.bind(null,e)),F3(function(){!(W&6)&&hn()}),n=null;else{switch(lu(r)){case 1:n=ml;break;case 4:n=iu;break;case 16:n=oi;break;case 536870912:n=su;break;default:n=oi}n=Od(n,Nd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Nd(e,t){if(Ka=-1,Xa=0,W&6)throw Error(_(327));var n=e.callbackNode;if(rr()&&e.callbackNode!==n)return null;var r=li(e,e===ke?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Si(e,r);else{t=r;var a=W;W|=2;var i=_d();(ke!==e||Se!==t)&&(Rt=null,ur=pe()+500,kn(e,t));do try{f6();break}catch(l){Sd(e,l)}while(1);El(),Ci.current=i,W=a,me!==null?t=0:(ke=null,Se=0,t=xe)}if(t!==0){if(t===2&&(a=po(e),a!==0&&(r=a,t=Ho(e,a))),t===1)throw n=oa,kn(e,0),Gt(e,r),Ye(e,pe()),n;if(t===6)Gt(e,r);else{if(a=e.current.alternate,!(r&30)&&!d6(a)&&(t=Si(e,r),t===2&&(i=po(e),i!==0&&(r=i,t=Ho(e,i))),t===1))throw n=oa,kn(e,0),Gt(e,r),Ye(e,pe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:xn(e,We,Rt);break;case 3:if(Gt(e,r),(r&130023424)===r&&(t=Bl+500-pe(),10<t)){if(li(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=bo(xn.bind(null,e,We,Rt),t);break}xn(e,We,Rt);break;case 4:if(Gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-yt(r);i=1<<o,o=t[o],o>a&&(a=o),r&=~i}if(r=a,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*u6(r/1960))-r,10<r){e.timeoutHandle=bo(xn.bind(null,e,We,Rt),r);break}xn(e,We,Rt);break;case 5:xn(e,We,Rt);break;default:throw Error(_(329))}}}return Ye(e,pe()),e.callbackNode===n?Nd.bind(null,e):null}function Ho(e,t){var n=Dr;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=Si(e,t),e!==2&&(t=We,We=n,t!==null&&Do(t)),e}function Do(e){We===null?We=e:We.push.apply(We,e)}function d6(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!wt(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gt(e,t){for(t&=~Fl,t&=~Ui,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),r=1<<n;e[n]=-1,t&=~r}}function Nc(e){if(W&6)throw Error(_(327));rr();var t=li(e,0);if(!(t&1))return Ye(e,pe()),null;var n=Si(e,t);if(e.tag!==0&&n===2){var r=po(e);r!==0&&(t=r,n=Ho(e,r))}if(n===1)throw n=oa,kn(e,0),Gt(e,t),Ye(e,pe()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xn(e,We,Rt),Ye(e,pe()),null}function Ul(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(ur=pe()+500,Hi&&hn())}}function En(e){Jt!==null&&Jt.tag===0&&!(W&6)&&rr();var t=W;W|=1;var n=ut.transition,r=G;try{if(ut.transition=null,G=1,e)return e()}finally{G=r,ut.transition=n,W=t,!(W&6)&&hn()}}function ql(){et=Jn.current,re(Jn)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,D3(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Nl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fi();break;case 3:lr(),re(Ze),re(Re),Ll();break;case 5:Rl(r);break;case 4:lr();break;case 13:re(se);break;case 19:re(se);break;case 10:zl(r.type._context);break;case 22:case 23:ql()}n=n.return}if(ke=e,me=e=ln(e.current,null),Se=et=t,xe=0,oa=null,Fl=Ui=_n=0,We=Dr=null,bn!==null){for(t=0;t<bn.length;t++)if(n=bn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}n.pending=r}bn=null}return e}function Sd(e,t){do{var n=me;try{if(El(),Ga.current=ki,wi){for(var r=oe.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}wi=!1}if(Sn=0,we=ve=oe=null,Vr=!1,aa=0,Dl.current=null,n===null||n.return===null){xe=1,oa=t,me=null;break}e:{var i=e,o=n.return,l=n,c=t;if(t=Se,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=pc(o);if(w!==null){w.flags&=-257,fc(w,o,l,i,t),w.mode&1&&dc(i,u,t),t=w,c=u;var x=t.updateQueue;if(x===null){var b=new Set;b.add(c),t.updateQueue=b}else x.add(c);break e}else{if(!(t&1)){dc(i,u,t),Wl();break e}c=Error(_(426))}}else if(ae&&l.mode&1){var k=pc(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),fc(k,o,l,i,t),Sl(cr(c,l));break e}}i=c=cr(c,l),xe!==4&&(xe=2),Dr===null?Dr=[i]:Dr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=cd(i,c,t);ac(i,g);break e;case 1:l=c;var f=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(sn===null||!sn.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var C=ud(i,l,t);ac(i,C);break e}}i=i.return}while(i!==null)}zd(n)}catch(j){t=j,me===n&&n!==null&&(me=n=n.return);continue}break}while(1)}function _d(){var e=Ci.current;return Ci.current=ki,e===null?ki:e}function Wl(){(xe===0||xe===3||xe===2)&&(xe=4),ke===null||!(_n&268435455)&&!(Ui&268435455)||Gt(ke,Se)}function Si(e,t){var n=W;W|=2;var r=_d();(ke!==e||Se!==t)&&(Rt=null,kn(e,t));do try{p6();break}catch(a){Sd(e,a)}while(1);if(El(),W=n,Ci.current=r,me!==null)throw Error(_(261));return ke=null,Se=0,xe}function p6(){for(;me!==null;)Ed(me)}function f6(){for(;me!==null&&!A4();)Ed(me)}function Ed(e){var t=Pd(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?zd(e):me=t,Dl.current=null}function zd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=s6(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,me=null;return}}else if(n=i6(n,t,et),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);xe===0&&(xe=5)}function xn(e,t,n){var r=G,a=ut.transition;try{ut.transition=null,G=1,h6(e,t,n,r)}finally{ut.transition=a,G=r}return null}function h6(e,t,n,r){do rr();while(Jt!==null);if(W&6)throw Error(_(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Z4(e,i),e===ke&&(me=ke=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ma||(Ma=!0,Od(oi,function(){return rr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ut.transition,ut.transition=null;var o=G;G=1;var l=W;W|=4,Dl.current=null,l6(e,n),Cd(n,e),L3(xo),ci=!!vo,xo=vo=null,e.current=n,c6(n),V4(),W=l,G=o,ut.transition=i}else e.current=n;if(Ma&&(Ma=!1,Jt=e,Ni=a),i=e.pendingLanes,i===0&&(sn=null),F4(n.stateNode),Ye(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(ji)throw ji=!1,e=Ao,Ao=null,e;return Ni&1&&e.tag!==0&&rr(),i=e.pendingLanes,i&1?e===Vo?Fr++:(Fr=0,Vo=e):Fr=0,hn(),null}function rr(){if(Jt!==null){var e=lu(Ni),t=ut.transition,n=G;try{if(ut.transition=null,G=16>e?16:e,Jt===null)var r=!1;else{if(e=Jt,Jt=null,Ni=0,W&6)throw Error(_(331));var a=W;for(W|=4,L=e.current;L!==null;){var i=L,o=i.child;if(L.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(L=u;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:Hr(8,d,i)}var m=d.child;if(m!==null)m.return=d,L=m;else for(;L!==null;){d=L;var h=d.sibling,w=d.return;if(bd(d),d===u){L=null;break}if(h!==null){h.return=w,L=h;break}L=w}}}var x=i.alternate;if(x!==null){var b=x.child;if(b!==null){x.child=null;do{var k=b.sibling;b.sibling=null,b=k}while(b!==null)}}L=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,L=o;else e:for(;L!==null;){if(i=L,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Hr(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,L=g;break e}L=i.return}}var f=e.current;for(L=f;L!==null;){o=L;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,L=y;else e:for(o=f;L!==null;){if(l=L,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Bi(9,l)}}catch(j){ue(l,l.return,j)}if(l===o){L=null;break e}var C=l.sibling;if(C!==null){C.return=l.return,L=C;break e}L=l.return}}if(W=a,hn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Mi,e)}catch{}r=!0}return r}finally{G=n,ut.transition=t}}return!1}function Sc(e,t,n){t=cr(n,t),t=cd(e,t,1),e=an(e,t,1),t=Ae(),e!==null&&(pa(e,1,t),Ye(e,t))}function ue(e,t,n){if(e.tag===3)Sc(e,e,n);else for(;t!==null;){if(t.tag===3){Sc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){e=cr(n,e),e=ud(t,e,1),t=an(t,e,1),e=Ae(),t!==null&&(pa(t,1,e),Ye(t,e));break}}t=t.return}}function m6(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,ke===e&&(Se&n)===n&&(xe===4||xe===3&&(Se&130023424)===Se&&500>pe()-Bl?kn(e,0):Fl|=n),Ye(e,t)}function Td(e,t){t===0&&(e.mode&1?(t=Na,Na<<=1,!(Na&130023424)&&(Na=4194304)):t=1);var n=Ae();e=Ft(e,t),e!==null&&(pa(e,t,n),Ye(e,n))}function g6(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Td(e,n)}function v6(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Td(e,n)}var Pd;Pd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)Qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Qe=!1,a6(e,t,n);Qe=!!(e.flags&131072)}else Qe=!1,ae&&t.flags&1048576&&Lu(t,gi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ja(e,t),e=t.pendingProps;var a=ir(t,Re.current);nr(t,n),a=$l(null,t,r,e,a,n);var i=Il();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ge(r)?(i=!0,hi(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Pl(t),a.updater=Di,t.stateNode=a,a._reactInternals=t,_o(t,r,e,n),t=To(null,t,r,!0,i,n)):(t.tag=0,ae&&i&&jl(t),$e(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ja(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=y6(r),e=gt(r,e),a){case 0:t=zo(null,t,r,e,n);break e;case 1:t=gc(null,t,r,e,n);break e;case 11:t=hc(null,t,r,e,n);break e;case 14:t=mc(null,t,r,gt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:gt(r,a),zo(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:gt(r,a),gc(e,t,r,a,n);case 3:e:{if(hd(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,a=i.element,Au(e,t),yi(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=cr(Error(_(423)),t),t=vc(e,t,r,n,a);break e}else if(r!==a){a=cr(Error(_(424)),t),t=vc(e,t,r,n,a);break e}else for(tt=rn(t.stateNode.containerInfo.firstChild),nt=t,ae=!0,xt=null,n=Fu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sr(),r===a){t=Bt(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return Bu(t),e===null&&jo(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,yo(r,a)?o=null:i!==null&&yo(r,i)&&(t.flags|=32),fd(e,t),$e(e,t,o,n),t.child;case 6:return e===null&&jo(t),null;case 13:return md(e,t,n);case 4:return Ol(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=or(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:gt(r,a),hc(e,t,r,a,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,ee(vi,r._currentValue),r._currentValue=o,i!==null)if(wt(i.value,o)){if(i.children===a.children&&!Ze.current){t=Bt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Vt(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),No(i.return,n,t),l.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(_(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),No(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}$e(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,nr(t,n),a=pt(a),r=r(a),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,a=gt(r,t.pendingProps),a=gt(r.type,a),mc(e,t,r,a,n);case 15:return dd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:gt(r,a),Ja(e,t),t.tag=1,Ge(r)?(e=!0,hi(t)):e=!1,nr(t,n),Hu(t,r,a),_o(t,r,a,n),To(null,t,r,!0,e,n);case 19:return gd(e,t,n);case 22:return pd(e,t,n)}throw Error(_(156,t.tag))};function Od(e,t){return au(e,t)}function x6(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,r){return new x6(e,t,n,r)}function Ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function y6(e){if(typeof e=="function")return Ql(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pl)return 11;if(e===fl)return 14}return 2}function ln(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ei(e,t,n,r,a,i){var o=2;if(r=e,typeof e=="function")Ql(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Dn:return Cn(n.children,a,i,t);case dl:o=8,a|=8;break;case Ys:return e=ct(12,n,t,a|2),e.elementType=Ys,e.lanes=i,e;case Js:return e=ct(13,n,t,a),e.elementType=Js,e.lanes=i,e;case Ks:return e=ct(19,n,t,a),e.elementType=Ks,e.lanes=i,e;case D0:return qi(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V0:o=10;break e;case H0:o=9;break e;case pl:o=11;break e;case fl:o=14;break e;case Wt:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=ct(o,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function Cn(e,t,n,r){return e=ct(7,e,r,t),e.lanes=n,e}function qi(e,t,n,r){return e=ct(22,e,r,t),e.elementType=D0,e.lanes=n,e.stateNode={isHidden:!1},e}function Es(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function zs(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function b6(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cs(0),this.expirationTimes=cs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cs(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Zl(e,t,n,r,a,i,o,l,c){return e=new b6(e,t,n,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ct(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pl(i),e}function w6(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rd(e){if(!e)return dn;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ge(n))return Ou(e,n,t)}return t}function Ld(e,t,n,r,a,i,o,l,c){return e=Zl(n,r,!0,e,a,i,o,l,c),e.context=Rd(null),n=e.current,r=Ae(),a=on(n),i=Vt(r,a),i.callback=t??null,an(n,i,a),e.current.lanes=a,pa(e,a,r),Ye(e,r),e}function Wi(e,t,n,r){var a=t.current,i=Ae(),o=on(a);return n=Rd(n),t.context===null?t.context=n:t.pendingContext=n,t=Vt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=an(a,t,o),e!==null&&(bt(e,a,o,i),Za(e,a,o)),o}function _i(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _c(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gl(e,t){_c(e,t),(e=e.alternate)&&_c(e,t)}function k6(){return null}var Md=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yl(e){this._internalRoot=e}Qi.prototype.render=Yl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Wi(e,t,null,null)};Qi.prototype.unmount=Yl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;En(function(){Wi(null,e,null,null)}),t[Dt]=null}};function Qi(e){this._internalRoot=e}Qi.prototype.unstable_scheduleHydration=function(e){if(e){var t=du();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zt.length&&t!==0&&t<Zt[n].priority;n++);Zt.splice(n,0,e),n===0&&fu(e)}};function Jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ec(){}function C6(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=_i(o);i.call(u)}}var o=Ld(t,r,e,0,null,!1,!1,"",Ec);return e._reactRootContainer=o,e[Dt]=o.current,Xr(e.nodeType===8?e.parentNode:e),En(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var u=_i(c);l.call(u)}}var c=Zl(e,0,!1,null,null,!1,!1,"",Ec);return e._reactRootContainer=c,e[Dt]=c.current,Xr(e.nodeType===8?e.parentNode:e),En(function(){Wi(t,c,n,r)}),c}function Gi(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var c=_i(o);l.call(c)}}Wi(t,o,e,a)}else o=C6(n,t,e,a,r);return _i(o)}cu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pr(t.pendingLanes);n!==0&&(gl(t,n|1),Ye(t,pe()),!(W&6)&&(ur=pe()+500,hn()))}break;case 13:En(function(){var r=Ft(e,1);if(r!==null){var a=Ae();bt(r,e,1,a)}}),Gl(e,1)}};vl=function(e){if(e.tag===13){var t=Ft(e,134217728);if(t!==null){var n=Ae();bt(t,e,134217728,n)}Gl(e,134217728)}};uu=function(e){if(e.tag===13){var t=on(e),n=Ft(e,t);if(n!==null){var r=Ae();bt(n,e,t,r)}Gl(e,t)}};du=function(){return G};pu=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};lo=function(e,t,n){switch(t){case"input":if(to(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Vi(r);if(!a)throw Error(_(90));B0(r),to(r,a)}}}break;case"textarea":q0(e,n);break;case"select":t=n.value,t!=null&&Kn(e,!!n.multiple,t,!1)}};K0=Ul;X0=En;var j6={usingClientEntryPoint:!1,Events:[ha,qn,Vi,Y0,J0,Ul]},Nr={findFiberByHostInstance:yn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},N6={bundleType:Nr.bundleType,version:Nr.version,rendererPackageName:Nr.rendererPackageName,rendererConfig:Nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nu(e),e===null?null:e.stateNode},findFiberByHostInstance:Nr.findFiberByHostInstance||k6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{Mi=$a.inject(N6),zt=$a}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j6;at.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jl(t))throw Error(_(200));return w6(e,t,null,n)};at.createRoot=function(e,t){if(!Jl(e))throw Error(_(299));var n=!1,r="",a=Md;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Zl(e,1,!1,null,null,n,!1,r,a),e[Dt]=t.current,Xr(e.nodeType===8?e.parentNode:e),new Yl(t)};at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=nu(t),e=e===null?null:e.stateNode,e};at.flushSync=function(e){return En(e)};at.hydrate=function(e,t,n){if(!Zi(t))throw Error(_(200));return Gi(null,e,t,!0,n)};at.hydrateRoot=function(e,t,n){if(!Jl(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",o=Md;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ld(t,null,e,1,n??null,a,!1,i,o),e[Dt]=t.current,Xr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Qi(t)};at.render=function(e,t,n){if(!Zi(t))throw Error(_(200));return Gi(null,e,t,!1,n)};at.unmountComponentAtNode=function(e){if(!Zi(e))throw Error(_(40));return e._reactRootContainer?(En(function(){Gi(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1};at.unstable_batchedUpdates=Ul;at.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Zi(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Gi(e,t,n,!1,r)};at.version="18.2.0-next-9e3b772b8-20220608";function $d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($d)}catch(e){console.error(e)}}$d(),L0.exports=at;var S6=L0.exports,zc=S6;Zs.createRoot=zc.createRoot,Zs.hydrateRoot=zc.hydrateRoot;/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function la(){return la=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},la.apply(this,arguments)}var Kt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Kt||(Kt={}));const Tc="popstate";function _6(e){e===void 0&&(e={});function t(r,a){let{pathname:i,search:o,hash:l}=r.location;return Fo("",{pathname:i,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:Ei(a)}return z6(t,n,null,e)}function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Kl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function E6(){return Math.random().toString(36).substr(2,8)}function Pc(e,t){return{usr:e.state,key:e.key,idx:t}}function Fo(e,t,n,r){return n===void 0&&(n=null),la({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?mr(t):t,{state:n,key:t&&t.key||r||E6()})}function Ei(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function mr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function z6(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,l=Kt.Pop,c=null,u=d();u==null&&(u=0,o.replaceState(la({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function m(){l=Kt.Pop;let k=d(),g=k==null?null:k-u;u=k,c&&c({action:l,location:b.location,delta:g})}function h(k,g){l=Kt.Push;let f=Fo(b.location,k,g);n&&n(f,k),u=d()+1;let y=Pc(f,u),C=b.createHref(f);try{o.pushState(y,"",C)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;a.location.assign(C)}i&&c&&c({action:l,location:b.location,delta:1})}function w(k,g){l=Kt.Replace;let f=Fo(b.location,k,g);n&&n(f,k),u=d();let y=Pc(f,u),C=b.createHref(f);o.replaceState(y,"",C),i&&c&&c({action:l,location:b.location,delta:0})}function x(k){let g=a.location.origin!=="null"?a.location.origin:a.location.href,f=typeof k=="string"?k:Ei(k);return ge(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let b={get action(){return l},get location(){return e(a,o)},listen(k){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(Tc,m),c=k,()=>{a.removeEventListener(Tc,m),c=null}},createHref(k){return t(a,k)},createURL:x,encodeLocation(k){let g=x(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:w,go(k){return o.go(k)}};return b}var Oc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Oc||(Oc={}));function T6(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?mr(t):t,a=Xl(r.pathname||"/",n);if(a==null)return null;let i=Id(e);P6(i);let o=null;for(let l=0;o==null&&l<i.length;++l)o=H6(i[l],B6(a));return o}function Id(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,o,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(ge(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=cn([r,c.relativePath]),d=n.concat(c);i.children&&i.children.length>0&&(ge(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Id(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:A6(u,i.index),routesMeta:d})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let c of Ad(i.path))a(i,o,c)}),t}function Ad(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=Ad(r.join("/")),l=[];return l.push(...o.map(c=>c===""?i:[i,c].join("/"))),a&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function P6(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:V6(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const O6=/^:\w+$/,R6=3,L6=2,M6=1,$6=10,I6=-2,Rc=e=>e==="*";function A6(e,t){let n=e.split("/"),r=n.length;return n.some(Rc)&&(r+=I6),t&&(r+=L6),n.filter(a=>!Rc(a)).reduce((a,i)=>a+(O6.test(i)?R6:i===""?M6:$6),r)}function V6(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function H6(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let o=0;o<n.length;++o){let l=n[o],c=o===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",d=D6({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u);if(!d)return null;Object.assign(r,d.params);let m=l.route;i.push({params:r,pathname:cn([a,d.pathname]),pathnameBase:Q6(cn([a,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(a=cn([a,d.pathnameBase]))}return i}function D6(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=F6(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((u,d,m)=>{if(d==="*"){let h=l[m]||"";o=i.slice(0,i.length-h.length).replace(/(.)\/+$/,"$1")}return u[d]=U6(l[m]||"",d),u},{}),pathname:i,pathnameBase:o,pattern:e}}function F6(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Kl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function B6(e){try{return decodeURI(e)}catch(t){return Kl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function U6(e,t){try{return decodeURIComponent(e)}catch(n){return Kl(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Xl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function q6(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?mr(e):e;return{pathname:n?n.startsWith("/")?n:W6(n,t):t,search:Z6(r),hash:G6(a)}}function W6(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Ts(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Vd(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Hd(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=mr(e):(a=la({},e),ge(!a.pathname||!a.pathname.includes("?"),Ts("?","pathname","search",a)),ge(!a.pathname||!a.pathname.includes("#"),Ts("#","pathname","hash",a)),ge(!a.search||!a.search.includes("#"),Ts("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(r||o==null)l=n;else{let m=t.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),m-=1;a.pathname=h.join("/")}l=m>=0?t[m]:"/"}let c=q6(a,l),u=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const cn=e=>e.join("/").replace(/\/\/+/g,"/"),Q6=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Z6=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,G6=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Y6(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Dd=["post","put","patch","delete"];new Set(Dd);const J6=["get",...Dd];new Set(J6);/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zi(){return zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zi.apply(this,arguments)}const e1=p.createContext(null),K6=p.createContext(null),gr=p.createContext(null),Yi=p.createContext(null),Ln=p.createContext({outlet:null,matches:[],isDataRoute:!1}),Fd=p.createContext(null);function X6(e,t){let{relative:n}=t===void 0?{}:t;ga()||ge(!1);let{basename:r,navigator:a}=p.useContext(gr),{hash:i,pathname:o,search:l}=Ud(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:cn([r,o])),a.createHref({pathname:c,search:l,hash:i})}function ga(){return p.useContext(Yi)!=null}function Ji(){return ga()||ge(!1),p.useContext(Yi).location}function Bd(e){p.useContext(gr).static||p.useLayoutEffect(e)}function ep(){let{isDataRoute:e}=p.useContext(Ln);return e?fp():tp()}function tp(){ga()||ge(!1);let e=p.useContext(e1),{basename:t,navigator:n}=p.useContext(gr),{matches:r}=p.useContext(Ln),{pathname:a}=Ji(),i=JSON.stringify(Vd(r).map(c=>c.pathnameBase)),o=p.useRef(!1);return Bd(()=>{o.current=!0}),p.useCallback(function(c,u){if(u===void 0&&(u={}),!o.current)return;if(typeof c=="number"){n.go(c);return}let d=Hd(c,JSON.parse(i),a,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:cn([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,i,a,e])}function Ud(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=p.useContext(Ln),{pathname:a}=Ji(),i=JSON.stringify(Vd(r).map(o=>o.pathnameBase));return p.useMemo(()=>Hd(e,JSON.parse(i),a,n==="path"),[e,i,a,n])}function np(e,t){return rp(e,t)}function rp(e,t,n){ga()||ge(!1);let{navigator:r}=p.useContext(gr),{matches:a}=p.useContext(Ln),i=a[a.length-1],o=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let c=Ji(),u;if(t){var d;let b=typeof t=="string"?mr(t):t;l==="/"||(d=b.pathname)!=null&&d.startsWith(l)||ge(!1),u=b}else u=c;let m=u.pathname||"/",h=l==="/"?m:m.slice(l.length)||"/",w=T6(e,{pathname:h}),x=lp(w&&w.map(b=>Object.assign({},b,{params:Object.assign({},o,b.params),pathname:cn([l,r.encodeLocation?r.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:cn([l,r.encodeLocation?r.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),a,n);return t&&x?p.createElement(Yi.Provider,{value:{location:zi({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Kt.Pop}},x):x}function ap(){let e=pp(),t=Y6(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return p.createElement(p.Fragment,null,p.createElement("h2",null,"Unexpected Application Error!"),p.createElement("h3",{style:{fontStyle:"italic"}},t),n?p.createElement("pre",{style:a},n):null,i)}const ip=p.createElement(ap,null);class sp extends p.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?p.createElement(Ln.Provider,{value:this.props.routeContext},p.createElement(Fd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function op(e){let{routeContext:t,match:n,children:r}=e,a=p.useContext(e1);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),p.createElement(Ln.Provider,{value:t},r)}function lp(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let i=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=i.findIndex(c=>c.route.id&&(o==null?void 0:o[c.route.id]));l>=0||ge(!1),i=i.slice(0,Math.min(i.length,l+1))}return i.reduceRight((l,c,u)=>{let d=c.route.id?o==null?void 0:o[c.route.id]:null,m=null;n&&(m=c.route.errorElement||ip);let h=t.concat(i.slice(0,u+1)),w=()=>{let x;return d?x=m:c.route.Component?x=p.createElement(c.route.Component,null):c.route.element?x=c.route.element:x=l,p.createElement(op,{match:c,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:x})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?p.createElement(sp,{location:n.location,revalidation:n.revalidation,component:m,error:d,children:w(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):w()},null)}var qd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(qd||{}),Ti=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ti||{});function cp(e){let t=p.useContext(e1);return t||ge(!1),t}function up(e){let t=p.useContext(K6);return t||ge(!1),t}function dp(e){let t=p.useContext(Ln);return t||ge(!1),t}function Wd(e){let t=dp(),n=t.matches[t.matches.length-1];return n.route.id||ge(!1),n.route.id}function pp(){var e;let t=p.useContext(Fd),n=up(Ti.UseRouteError),r=Wd(Ti.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function fp(){let{router:e}=cp(qd.UseNavigateStable),t=Wd(Ti.UseNavigateStable),n=p.useRef(!1);return Bd(()=>{n.current=!0}),p.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,zi({fromRouteId:t},i)))},[e,t])}function An(e){ge(!1)}function hp(e){let{basename:t="/",children:n=null,location:r,navigationType:a=Kt.Pop,navigator:i,static:o=!1}=e;ga()&&ge(!1);let l=t.replace(/^\/*/,"/"),c=p.useMemo(()=>({basename:l,navigator:i,static:o}),[l,i,o]);typeof r=="string"&&(r=mr(r));let{pathname:u="/",search:d="",hash:m="",state:h=null,key:w="default"}=r,x=p.useMemo(()=>{let b=Xl(u,l);return b==null?null:{location:{pathname:b,search:d,hash:m,state:h,key:w},navigationType:a}},[l,u,d,m,h,w,a]);return x==null?null:p.createElement(gr.Provider,{value:c},p.createElement(Yi.Provider,{children:n,value:x}))}function mp(e){let{children:t,location:n}=e;return np(Bo(t),n)}new Promise(()=>{});function Bo(e,t){t===void 0&&(t=[]);let n=[];return p.Children.forEach(e,(r,a)=>{if(!p.isValidElement(r))return;let i=[...t,a];if(r.type===p.Fragment){n.push.apply(n,Bo(r.props.children,i));return}r.type!==An&&ge(!1),!r.props.index||!r.props.children||ge(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Bo(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uo(){return Uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Uo.apply(this,arguments)}function gp(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function vp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xp(e,t){return e.button===0&&(!t||t==="_self")&&!vp(e)}const yp=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],bp="startTransition",Lc=g4[bp];function wp(e){let{basename:t,children:n,future:r,window:a}=e,i=p.useRef();i.current==null&&(i.current=_6({window:a,v5Compat:!0}));let o=i.current,[l,c]=p.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=p.useCallback(m=>{u&&Lc?Lc(()=>c(m)):c(m)},[c,u]);return p.useLayoutEffect(()=>o.listen(d),[o,d]),p.createElement(hp,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const kp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Cp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,he=p.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:i,replace:o,state:l,target:c,to:u,preventScrollReset:d,unstable_viewTransition:m}=t,h=gp(t,yp),{basename:w}=p.useContext(gr),x,b=!1;if(typeof u=="string"&&Cp.test(u)&&(x=u,kp))try{let y=new URL(window.location.href),C=u.startsWith("//")?new URL(y.protocol+u):new URL(u),j=Xl(C.pathname,w);C.origin===y.origin&&j!=null?u=j+C.search+C.hash:b=!0}catch{}let k=X6(u,{relative:a}),g=jp(u,{replace:o,state:l,target:c,preventScrollReset:d,relative:a,unstable_viewTransition:m});function f(y){r&&r(y),y.defaultPrevented||g(y)}return p.createElement("a",Uo({},h,{href:x||k,onClick:b||i?r:f,ref:n,target:c}))});var Mc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Mc||(Mc={}));var $c;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($c||($c={}));function jp(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:o,unstable_viewTransition:l}=t===void 0?{}:t,c=ep(),u=Ji(),d=Ud(e,{relative:o});return p.useCallback(m=>{if(xp(m,n)){m.preventDefault();let h=r!==void 0?r:Ei(u)===Ei(d);c(e,{replace:h,state:a,preventScrollReset:i,relative:o,unstable_viewTransition:l})}},[u,c,d,r,a,n,e,i,o,l])}const Ne="https://ue-past-questions-back.vercel.app",ca="https://pasco-lovat.vercel.app",Np=localStorage.getItem("userInfo");({...JSON.parse(Np??"{}")});async function Pt(e,t){try{let n=JSON.parse(localStorage.getItem("userInfo"));if(!n||!n.accessToken)throw new Error("No access token found in localStorage");t.headers=t.headers||{},t.headers.Authorization=`Bearer ${n.accessToken}`;const r=await fetch(e,t);if(r.status===401){const i=await Sp();return t.headers.Authorization=`Bearer ${i}`,Pt(e,t)}if(!r.ok){console.log(r);let i=await r.json();if(i)return i;throw new Error(`Fetch failed with status ${r.status??r.statusText}`)}const a=await r.json();return console.log(a),a.data??a}catch(n){console.log("Error fetching data:",n)}}async function t1(){localStorage.removeItem("userInfo"),location.reload()}async function Sp(e=Ne+"/api/v1/auth/refresh"){try{let t=JSON.parse(localStorage.getItem("userInfo"));if(!t||!t.refreshToken)throw new Error("No refresh token found in localStorage");const n=`${t.refreshToken}`,r=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:n})});if(!r.ok)if(r.status==400)t1(),location.reload();else throw console.log(r.type,` ${r.status}`),new Error("Failed to refresh token due to "+r.type);const i=(await r.json()).data.token;return t=JSON.parse(localStorage.getItem("userInfo")),t&&(t.accessToken=i,localStorage.setItem("userInfo",JSON.stringify(t))),i}catch(t){throw console.error("Error refreshing token:",t),t}}const ua=(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.error("Error reading from localStorage:",n),alert("Failed to save data. Please check your browser settings."),t}},qo=(e,t)=>{try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch(n){return console.error("Error writing to localStorage:",n),alert("Failed to save data. Please check your browser settings."),!1}},_p=()=>{p.useEffect(()=>{const e=ua("userInfo",{}),t=e==null?void 0:e.accessToken,n=e==null?void 0:e.refreshToken;!t||!n||Pt(Ne+"/api/v1/user/streak",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`}}).then(r=>{const a={...e,streakScore:(r==null?void 0:r.streakScore)??e.streakScore,highestStreakScore:(r==null?void 0:r.highestStreakScore)??e.highestStreakScore,lastActiveDate:(r==null?void 0:r.lastActiveDate)??e.lastActiveDate};qo("userInfo",a)}).catch(r=>console.error("Visit record failed:",r))},[])};const lt="/uelearn/imgs/titled.png",Qd="/uelearn/imgs/loader.svg",Ep="/uelearn/imgs/ueicon.webp",Zd="/uelearn/imgs/jess.jpg",Gd="/uelearn/imgs/jessy.jpg",Yd="/uelearn/imgs/jude.jpg",zp="/uelearn/imgs/my1.png",Jd=({setsearching:e,setfind:t,bar:n,eprop:r,handleMenu:a})=>{p.useState(!1);const i=()=>{e(!0);const o=document.querySelector(".listcontent");o&&(o.style.cssText="pointer-events:all;clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);");const l=document.querySelector(".menucomp");l&&(l.style.cssText="pointer-events:none;clip-path: polygon(0 0, 0% 0, 0% 100%, 0 100%);")};return p.useEffect(()=>{t("")},[]),s.jsxs("div",{className:"twwo",title:"search",children:[s.jsx("div",{className:"search",onClick:i,children:s.jsx("i",{className:"fa fa-search"})}),s.jsx("div",{className:"input",onClick:i,children:s.jsx("input",{type:"text",style:{pointerEvents:r},ref:n,onChange:o=>t(o.target.value.trim("")),className:"find",placeholder:"Search a course code..."})}),s.jsx("div",{className:"slash",onClick:a,children:r!="all"?"/":s.jsx("i",{className:"fa fa-hamburger fa-dark"})})]})};var Tp=p.createContext({});const Kd=Tp;function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(null,arguments)}function Pp(e){if(Array.isArray(e))return e}function Op(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,o,l=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,a=d}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return l}}function Ic(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Rp(e,t){if(e){if(typeof e=="string")return Ic(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ic(e,t):void 0}}function Lp(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xd(e,t){return Pp(e)||Op(e,t)||Rp(e,t)||Lp()}function zn(e){"@babel/helpers - typeof";return zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zn(e)}function Mp(e,t){if(zn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(zn(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $p(e){var t=Mp(e,"string");return zn(t)=="symbol"?t:t+""}function Wo(e,t,n){return(t=$p(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ip(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}function e2(e,t){if(e==null)return{};var n,r,a=Ip(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var t2={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(i=a(i,r(l)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var l in i)t.call(i,l)&&i[l]&&(o=a(o,l));return o}function a(i,o){return o?i?i+" "+o:i+o:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(t2);var Ap=t2.exports;const Vp=C0(Ap);function dt(e,t){Hp(e)&&(e="100%");var n=Dp(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function Hp(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Dp(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Fp(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Ia(e){return e<=1?"".concat(Number(e)*100,"%"):e}function Ps(e){return e.length===1?"0"+e:String(e)}function Bp(e,t,n){return{r:dt(e,255)*255,g:dt(t,255)*255,b:dt(n,255)*255}}function Os(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Up(e,t,n){var r,a,i;if(e=dt(e,360),t=dt(t,100),n=dt(n,100),t===0)a=n,i=n,r=n;else{var o=n<.5?n*(1+t):n+t-n*t,l=2*n-o;r=Os(l,o,e+1/3),a=Os(l,o,e),i=Os(l,o,e-1/3)}return{r:r*255,g:a*255,b:i*255}}function qp(e,t,n){e=dt(e,255),t=dt(t,255),n=dt(n,255);var r=Math.max(e,t,n),a=Math.min(e,t,n),i=0,o=r,l=r-a,c=r===0?0:l/r;if(r===a)i=0;else{switch(r){case e:i=(t-n)/l+(t<n?6:0);break;case t:i=(n-e)/l+2;break;case n:i=(e-t)/l+4;break}i/=6}return{h:i,s:c,v:o}}function Wp(e,t,n){e=dt(e,360)*6,t=dt(t,100),n=dt(n,100);var r=Math.floor(e),a=e-r,i=n*(1-t),o=n*(1-a*t),l=n*(1-(1-a)*t),c=r%6,u=[n,o,i,i,l,n][c],d=[l,n,n,o,i,i][c],m=[i,i,l,n,n,o][c];return{r:u*255,g:d*255,b:m*255}}function Qp(e,t,n,r){var a=[Ps(Math.round(e).toString(16)),Ps(Math.round(t).toString(16)),Ps(Math.round(n).toString(16))];return r&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function Ac(e){return Xe(e)/255}function Xe(e){return parseInt(e,16)}var Vc={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Sr(e){var t={r:0,g:0,b:0},n=1,r=null,a=null,i=null,o=!1,l=!1;return typeof e=="string"&&(e=Yp(e)),typeof e=="object"&&(Ot(e.r)&&Ot(e.g)&&Ot(e.b)?(t=Bp(e.r,e.g,e.b),o=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Ot(e.h)&&Ot(e.s)&&Ot(e.v)?(r=Ia(e.s),a=Ia(e.v),t=Wp(e.h,r,a),o=!0,l="hsv"):Ot(e.h)&&Ot(e.s)&&Ot(e.l)&&(r=Ia(e.s),i=Ia(e.l),t=Up(e.h,r,i),o=!0,l="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(n=e.a)),n=Fp(n),{ok:o,format:e.format||l,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}var Zp="[-\\+]?\\d+%?",Gp="[-\\+]?\\d*\\.\\d+%?",Xt="(?:".concat(Gp,")|(?:").concat(Zp,")"),Rs="[\\s|\\(]+(".concat(Xt,")[,|\\s]+(").concat(Xt,")[,|\\s]+(").concat(Xt,")\\s*\\)?"),Ls="[\\s|\\(]+(".concat(Xt,")[,|\\s]+(").concat(Xt,")[,|\\s]+(").concat(Xt,")[,|\\s]+(").concat(Xt,")\\s*\\)?"),mt={CSS_UNIT:new RegExp(Xt),rgb:new RegExp("rgb"+Rs),rgba:new RegExp("rgba"+Ls),hsl:new RegExp("hsl"+Rs),hsla:new RegExp("hsla"+Ls),hsv:new RegExp("hsv"+Rs),hsva:new RegExp("hsva"+Ls),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Yp(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if(Vc[e])e=Vc[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=mt.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=mt.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=mt.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=mt.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=mt.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=mt.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=mt.hex8.exec(e),n?{r:Xe(n[1]),g:Xe(n[2]),b:Xe(n[3]),a:Ac(n[4]),format:t?"name":"hex8"}:(n=mt.hex6.exec(e),n?{r:Xe(n[1]),g:Xe(n[2]),b:Xe(n[3]),format:t?"name":"hex"}:(n=mt.hex4.exec(e),n?{r:Xe(n[1]+n[1]),g:Xe(n[2]+n[2]),b:Xe(n[3]+n[3]),a:Ac(n[4]+n[4]),format:t?"name":"hex8"}:(n=mt.hex3.exec(e),n?{r:Xe(n[1]+n[1]),g:Xe(n[2]+n[2]),b:Xe(n[3]+n[3]),format:t?"name":"hex"}:!1)))))))))}function Ot(e){return!!mt.CSS_UNIT.exec(String(e))}var Aa=2,Hc=.16,Jp=.05,Kp=.05,Xp=.15,n2=5,r2=4,ef=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function Dc(e){var t=e.r,n=e.g,r=e.b,a=qp(t,n,r);return{h:a.h*360,s:a.s,v:a.v}}function Va(e){var t=e.r,n=e.g,r=e.b;return"#".concat(Qp(t,n,r,!1))}function tf(e,t,n){var r=n/100,a={r:(t.r-e.r)*r+e.r,g:(t.g-e.g)*r+e.g,b:(t.b-e.b)*r+e.b};return a}function Fc(e,t,n){var r;return Math.round(e.h)>=60&&Math.round(e.h)<=240?r=n?Math.round(e.h)-Aa*t:Math.round(e.h)+Aa*t:r=n?Math.round(e.h)+Aa*t:Math.round(e.h)-Aa*t,r<0?r+=360:r>=360&&(r-=360),r}function Bc(e,t,n){if(e.h===0&&e.s===0)return e.s;var r;return n?r=e.s-Hc*t:t===r2?r=e.s+Hc:r=e.s+Jp*t,r>1&&(r=1),n&&t===n2&&r>.1&&(r=.1),r<.06&&(r=.06),Number(r.toFixed(2))}function Uc(e,t,n){var r;return n?r=e.v+Kp*t:r=e.v-Xp*t,r>1&&(r=1),Number(r.toFixed(2))}function nf(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[],r=Sr(e),a=n2;a>0;a-=1){var i=Dc(r),o=Va(Sr({h:Fc(i,a,!0),s:Bc(i,a,!0),v:Uc(i,a,!0)}));n.push(o)}n.push(Va(r));for(var l=1;l<=r2;l+=1){var c=Dc(r),u=Va(Sr({h:Fc(c,l),s:Bc(c,l),v:Uc(c,l)}));n.push(u)}return t.theme==="dark"?ef.map(function(d){var m=d.index,h=d.opacity,w=Va(tf(Sr(t.backgroundColor||"#141414"),Sr(n[m]),h*100));return w}):n}var Qo=["#e6f4ff","#bae0ff","#91caff","#69b1ff","#4096ff","#1677ff","#0958d9","#003eb3","#002c8c","#001d66"];Qo.primary=Qo[5];function qc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Et(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qc(Object(n),!0).forEach(function(r){Wo(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rf(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function af(e,t){if(!e)return!1;if(e.contains)return e.contains(t);for(var n=t;n;){if(n===e)return!0;n=n.parentNode}return!1}var Wc="data-rc-order",Qc="data-rc-priority",sf="rc-util-key",Zo=new Map;function a2(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.mark;return t?t.startsWith("data-")?t:"data-".concat(t):sf}function n1(e){if(e.attachTo)return e.attachTo;var t=document.querySelector("head");return t||document.body}function of(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function r1(e){return Array.from((Zo.get(e)||e).children).filter(function(t){return t.tagName==="STYLE"})}function i2(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!rf())return null;var n=t.csp,r=t.prepend,a=t.priority,i=a===void 0?0:a,o=of(r),l=o==="prependQueue",c=document.createElement("style");c.setAttribute(Wc,o),l&&i&&c.setAttribute(Qc,"".concat(i)),n!=null&&n.nonce&&(c.nonce=n==null?void 0:n.nonce),c.innerHTML=e;var u=n1(t),d=u.firstChild;if(r){if(l){var m=(t.styles||r1(u)).filter(function(h){if(!["prepend","prependQueue"].includes(h.getAttribute(Wc)))return!1;var w=Number(h.getAttribute(Qc)||0);return i>=w});if(m.length)return u.insertBefore(c,m[m.length-1].nextSibling),c}u.insertBefore(c,d)}else u.appendChild(c);return c}function lf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=n1(t);return(t.styles||r1(n)).find(function(r){return r.getAttribute(a2(t))===e})}function cf(e,t){var n=Zo.get(e);if(!n||!af(document,n)){var r=i2("",t),a=r.parentNode;Zo.set(e,a),e.removeChild(r)}}function uf(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n1(n),a=r1(r),i=Et(Et({},n),{},{styles:a});cf(r,i);var o=lf(t,i);if(o){var l,c;if((l=i.csp)!==null&&l!==void 0&&l.nonce&&o.nonce!==((c=i.csp)===null||c===void 0?void 0:c.nonce)){var u;o.nonce=(u=i.csp)===null||u===void 0?void 0:u.nonce}return o.innerHTML!==e&&(o.innerHTML=e),o}var d=i2(e,i);return d.setAttribute(a2(i),t),d}function s2(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}function df(e){return s2(e)instanceof ShadowRoot}function pf(e){return df(e)?s2(e):null}var Go={},ff=function(t){};function hf(e,t){}function mf(e,t){}function gf(){Go={}}function o2(e,t,n){!t&&!Go[n]&&(e(!1,n),Go[n]=!0)}function Ki(e,t){o2(hf,e,t)}function vf(e,t){o2(mf,e,t)}Ki.preMessage=ff;Ki.resetWarned=gf;Ki.noteOnce=vf;function xf(e){return e.replace(/-(.)/g,function(t,n){return n.toUpperCase()})}function yf(e,t){Ki(e,"[@ant-design/icons] ".concat(t))}function Zc(e){return zn(e)==="object"&&typeof e.name=="string"&&typeof e.theme=="string"&&(zn(e.icon)==="object"||typeof e.icon=="function")}function Gc(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(e).reduce(function(t,n){var r=e[n];switch(n){case"class":t.className=r,delete t.class;break;default:delete t[n],t[xf(n)]=r}return t},{})}function Yo(e,t,n){return n?ri.createElement(e.tag,Et(Et({key:t},Gc(e.attrs)),n),(e.children||[]).map(function(r,a){return Yo(r,"".concat(t,"-").concat(e.tag,"-").concat(a))})):ri.createElement(e.tag,Et({key:t},Gc(e.attrs)),(e.children||[]).map(function(r,a){return Yo(r,"".concat(t,"-").concat(e.tag,"-").concat(a))}))}function l2(e){return nf(e)[0]}function c2(e){return e?Array.isArray(e)?e:[e]:[]}var bf=`
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
`,wf=function(t){var n=p.useContext(Kd),r=n.csp,a=n.prefixCls,i=bf;a&&(i=i.replace(/anticon/g,a)),p.useEffect(function(){var o=t.current,l=pf(o);uf(i,"@ant-design-icons",{prepend:!0,csp:r,attachTo:l})},[])},kf=["icon","className","onClick","style","primaryColor","secondaryColor"],Br={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function Cf(e){var t=e.primaryColor,n=e.secondaryColor;Br.primaryColor=t,Br.secondaryColor=n||l2(t),Br.calculated=!!n}function jf(){return Et({},Br)}var Xi=function(t){var n=t.icon,r=t.className,a=t.onClick,i=t.style,o=t.primaryColor,l=t.secondaryColor,c=e2(t,kf),u=p.useRef(),d=Br;if(o&&(d={primaryColor:o,secondaryColor:l||l2(o)}),wf(u),yf(Zc(n),"icon should be icon definiton, but got ".concat(n)),!Zc(n))return null;var m=n;return m&&typeof m.icon=="function"&&(m=Et(Et({},m),{},{icon:m.icon(d.primaryColor,d.secondaryColor)})),Yo(m.icon,"svg-".concat(m.name),Et(Et({className:r,onClick:a,style:i,"data-icon":m.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},c),{},{ref:u}))};Xi.displayName="IconReact";Xi.getTwoToneColors=jf;Xi.setTwoToneColors=Cf;const a1=Xi;function u2(e){var t=c2(e),n=Xd(t,2),r=n[0],a=n[1];return a1.setTwoToneColors({primaryColor:r,secondaryColor:a})}function Nf(){var e=a1.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}var Sf=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];u2(Qo.primary);var es=p.forwardRef(function(e,t){var n=e.className,r=e.icon,a=e.spin,i=e.rotate,o=e.tabIndex,l=e.onClick,c=e.twoToneColor,u=e2(e,Sf),d=p.useContext(Kd),m=d.prefixCls,h=m===void 0?"anticon":m,w=d.rootClassName,x=Vp(w,h,Wo(Wo({},"".concat(h,"-").concat(r.name),!!r.name),"".concat(h,"-spin"),!!a||r.name==="loading"),n),b=o;b===void 0&&l&&(b=-1);var k=i?{msTransform:"rotate(".concat(i,"deg)"),transform:"rotate(".concat(i,"deg)")}:void 0,g=c2(c),f=Xd(g,2),y=f[0],C=f[1];return p.createElement("span",I({role:"img","aria-label":r.name},u,{ref:t,tabIndex:b,onClick:l,className:x}),p.createElement(a1,{icon:r,primaryColor:y,secondaryColor:C,style:k}))});es.displayName="AntdIcon";es.getTwoToneColor=Nf;es.setTwoToneColor=u2;const A=es;var _f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"}}]},name:"appstore",theme:"outlined"};const Ef=_f;var zf=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:Ef}))},Tf=p.forwardRef(zf);const Pf=Tf;var Of={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"};const Rf=Of;var Lf=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:Rf}))},Mf=p.forwardRef(Lf);const $f=Mf;var If={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};const Af=If;var Vf=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:Af}))},Hf=p.forwardRef(Vf);const i1=Hf;var Df={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};const Ff=Df;var Bf=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:Ff}))},Uf=p.forwardRef(Bf);const qf=Uf;var Wf={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M894 462c30.9 0 43.8-39.7 18.7-58L530.8 126.2a31.81 31.81 0 00-37.6 0L111.3 404c-25.1 18.2-12.2 58 18.8 58H192v374h-72c-4.4 0-8 3.6-8 8v52c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-52c0-4.4-3.6-8-8-8h-72V462h62zM512 196.7l271.1 197.2H240.9L512 196.7zM264 462h117v374H264V462zm189 0h117v374H453V462zm307 374H642V462h118v374z"}}]},name:"bank",theme:"outlined"};const Qf=Wf;var Zf=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:Qf}))},Gf=p.forwardRef(Zf);const Yc=Gf;var Yf={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z"}}]},name:"bulb",theme:"outlined"};const Jf=Yf;var Kf=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:Jf}))},Xf=p.forwardRef(Kf);const e5=Xf;var t5={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"}}]},name:"calendar",theme:"outlined"};const n5=t5;var r5=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:n5}))},a5=p.forwardRef(r5);const i5=a5;var s5={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 248H728l-32.4-90.8a32.07 32.07 0 00-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"}}]},name:"camera",theme:"outlined"};const o5=s5;var l5=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:o5}))},c5=p.forwardRef(l5);const u5=c5;var d5={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"};const p5=d5;var f5=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:p5}))},h5=p.forwardRef(f5);const s1=h5;var m5={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]},name:"clock-circle",theme:"outlined"};const g5=m5;var v5=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:g5}))},x5=p.forwardRef(v5);const o1=x5;var y5={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z"}}]},name:"close-circle",theme:"outlined"};const b5=y5;var w5=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:b5}))},k5=p.forwardRef(w5);const C5=k5;var j5={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 00-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zM512 734.2c-62.1 0-112.6-50.5-112.6-112.6S449.9 509 512 509s112.6 50.5 112.6 112.6S574.1 734.2 512 734.2zm0-160.9c-26.6 0-48.2 21.6-48.2 48.3 0 26.6 21.6 48.3 48.2 48.3s48.2-21.6 48.2-48.3c0-26.6-21.6-48.3-48.2-48.3z"}}]},name:"crown",theme:"filled"};const N5=j5;var S5=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:N5}))},_5=p.forwardRef(S5);const E5=_5;var z5={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"}}]},name:"dollar",theme:"outlined"};const T5=z5;var P5=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:T5}))},O5=p.forwardRef(P5);const R5=O5;var L5={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 289.1a362.49 362.49 0 00-79.9-115.7 370.83 370.83 0 00-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 00169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0022.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1zm0-617.2c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z"}}]},name:"environment",theme:"outlined"};const M5=L5;var $5=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:M5}))},I5=p.forwardRef($5);const Ms=I5;var A5={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"};const V5=A5;var H5=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:V5}))},D5=p.forwardRef(H5);const F5=D5;var B5={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"};const U5=B5;var q5=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:U5}))},W5=p.forwardRef(q5);const $s=W5;var Q5={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M644.7 669.2a7.92 7.92 0 00-6.5-3.3H594c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.8-5.3 0-12.7-6.5-12.7h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-22.9-31.9zM688 306v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm184 458H208V148h560v296c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h312c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm402.6-320.8l-192-66.7c-.9-.3-1.7-.4-2.6-.4s-1.8.1-2.6.4l-192 66.7a7.96 7.96 0 00-5.4 7.5v251.1c0 2.5 1.1 4.8 3.1 6.3l192 150.2c1.4 1.1 3.2 1.7 4.9 1.7s3.5-.6 4.9-1.7l192-150.2c1.9-1.5 3.1-3.8 3.1-6.3V538.7c0-3.4-2.2-6.4-5.4-7.5zM826 763.7L688 871.6 550 763.7V577l138-48 138 48v186.7z"}}]},name:"file-protect",theme:"outlined"};const Z5=Q5;var G5=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:Z5}))},Y5=p.forwardRef(G5);const J5=Y5;var K5={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"}}]},name:"file-text",theme:"outlined"};const X5=K5;var e8=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:X5}))},t8=p.forwardRef(e8);const n8=t8;var r8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M905.9 806.7l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H596.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.3-.7 7.3-4.8 6.6-9.2zm-470.2-248c-.6-3.9-4-6.7-7.9-6.7H166.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248zM342 472h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H382.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8z"}}]},name:"gold",theme:"filled"};const a8=r8;var i8=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:a8}))},s8=p.forwardRef(i8);const o8=s8;var l8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"}}]},name:"heart",theme:"outlined"};const c8=l8;var u8=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:c8}))},d8=p.forwardRef(u8);const p8=d8;var f8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"};const h8=f8;var m8=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:h8}))},g8=p.forwardRef(m8);const v8=g8;var x8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V232h752v560zM610.3 476h123.4c1.3 0 2.3-3.6 2.3-8v-48c0-4.4-1-8-2.3-8H610.3c-1.3 0-2.3 3.6-2.3 8v48c0 4.4 1 8 2.3 8zm4.8 144h185.7c3.9 0 7.1-3.6 7.1-8v-48c0-4.4-3.2-8-7.1-8H615.1c-3.9 0-7.1 3.6-7.1 8v48c0 4.4 3.2 8 7.1 8zM224 673h43.9c4.2 0 7.6-3.3 7.9-7.5 3.8-50.5 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H522a8 8 0 008-8.4c-2.8-53.3-32-99.7-74.6-126.1a111.8 111.8 0 0029.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 00-74.6 126.1c-.4 4.6 3.2 8.4 7.8 8.4zm149-262c28.5 0 51.7 23.3 51.7 52s-23.2 52-51.7 52-51.7-23.3-51.7-52 23.2-52 51.7-52z"}}]},name:"idcard",theme:"outlined"};const y8=x8;var b8=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:y8}))},w8=p.forwardRef(b8);const k8=w8;var C8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};const j8=C8;var N8=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:j8}))},S8=p.forwardRef(N8);const Rr=S8;var _8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};const E8=_8;var z8=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:E8}))},T8=p.forwardRef(z8);const d2=T8;var P8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"};const O8=P8;var R8=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:O8}))},L8=p.forwardRef(R8);const Is=L8;var M8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"}}]},name:"logout",theme:"outlined"};const $8=M8;var I8=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:$8}))},A8=p.forwardRef(I8);const p2=A8;var V8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"};const H8=V8;var D8=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:H8}))},F8=p.forwardRef(D8);const f2=F8;var B8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M839.2 278.1a32 32 0 00-30.4-22.1H736V144c0-17.7-14.3-32-32-32H320c-17.7 0-32 14.3-32 32v112h-72.8a31.9 31.9 0 00-30.4 22.1L112 502v378c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V502l-72.8-223.9zM360 184h304v72H360v-72zm480 656H184V513.4L244.3 328h535.4L840 513.4V840zM652 572H544V464c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V636h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}}]},name:"medicine-box",theme:"outlined"};const U8=B8;var q8=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:U8}))},W8=p.forwardRef(q8);const Q8=W8;var Z8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"}}]},name:"message",theme:"outlined"};const G8=Z8;var Y8=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:G8}))},J8=p.forwardRef(Y8);const h2=J8;var K8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M911.5 700.7a8 8 0 00-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 00-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z"}}]},name:"money-collect",theme:"outlined"};const X8=K8;var eh=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:X8}))},th=p.forwardRef(eh);const va=th;var nh={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"}}]},name:"phone",theme:"outlined"};const rh=nh;var ah=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:rh}))},ih=p.forwardRef(ah);const Jo=ih;var sh={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"profile",theme:"outlined"};const oh=sh;var lh=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:oh}))},ch=p.forwardRef(lh);const uh=ch;var dh={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"};const ph=dh;var fh=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:ph}))},hh=p.forwardRef(fh);const mh=hh;var gh={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M917 211.1l-199.2 24c-6.6.8-9.4 8.9-4.7 13.6l59.3 59.3-226 226-101.8-101.7c-6.3-6.3-16.4-6.2-22.6 0L100.3 754.1a8.03 8.03 0 000 11.3l45 45.2c3.1 3.1 8.2 3.1 11.3 0L433.3 534 535 635.7c6.3 6.2 16.4 6.2 22.6 0L829 364.5l59.3 59.3a8.01 8.01 0 0013.6-4.7l24-199.2c.7-5.1-3.7-9.5-8.9-8.8z"}}]},name:"rise",theme:"outlined"};const vh=gh;var xh=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:vh}))},yh=p.forwardRef(xh);const bh=yh;var wh={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 00-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0043.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0043.1-30.5 97.52 97.52 0 0021.4-60.8c0-8.4-1.1-16.4-3.1-23.8L864 736zM512 352a48.01 48.01 0 010 96 48.01 48.01 0 010-96zm116.1 432.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5s-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 01-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5z"}}]},name:"rocket",theme:"filled"};const kh=wh;var Ch=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:kh}))},jh=p.forwardRef(Ch);const Nh=jh;var Sh={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 136H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm308.2-177.4L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0025.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5z"}}]},name:"schedule",theme:"outlined"};const _h=Sh;var Eh=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:_h}))},zh=p.forwardRef(Eh);const Th=zh;var Ph={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"};const Oh=Ph;var Rh=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:Oh}))},Lh=p.forwardRef(Rh);const Mh=Lh;var $h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm224 272c-85.5 0-155.6-67.3-160-151.6a8 8 0 018-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c.3-4.2 3.9-7.4 8.1-7.4H664a8 8 0 018 8.4C667.6 625.7 597.5 693 512 693zm176-224a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"smile",theme:"filled"};const Ih=$h;var Ah=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:Ih}))},Vh=p.forwardRef(Ah);const Hh=Vh;var Dh={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 00-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 00-8-8.4z"}}]},name:"smile",theme:"outlined"};const Fh=Dh;var Bh=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:Fh}))},Uh=p.forwardRef(Bh);const m2=Uh;var qh={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M688 264c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48zm-8 136H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM480 544H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 308H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm356.8-74.4c29-26.3 47.2-64.3 47.2-106.6 0-79.5-64.5-144-144-144s-144 64.5-144 144c0 42.3 18.2 80.3 47.2 106.6-57 32.5-96.2 92.7-99.2 162.1-.2 4.5 3.5 8.3 8 8.3h48.1c4.2 0 7.7-3.3 8-7.6C564 871.2 621.7 816 692 816s128 55.2 131.9 124.4c.2 4.2 3.7 7.6 8 7.6H880c4.6 0 8.2-3.8 8-8.3-2.9-69.5-42.2-129.6-99.2-162.1zM692 591c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80z"}}]},name:"solution",theme:"outlined"};const Wh=qh;var Qh=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:Wh}))},Zh=p.forwardRef(Qh);const g2=Zh;var Gh={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"};const Yh=Gh;var Jh=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:Yh}))},Kh=p.forwardRef(Jh);const Xh=Kh;var em={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]},name:"star",theme:"outlined"};const tm=em;var nm=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:tm}))},rm=p.forwardRef(nm);const am=rm;var im={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"}}]},name:"team",theme:"outlined"};const sm=im;var om=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:sm}))},lm=p.forwardRef(om);const xa=lm;var cm={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z"}}]},name:"thunderbolt",theme:"filled"};const um=cm;var dm=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:um}))},pm=p.forwardRef(dm);const Jc=pm;var fm={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"}}]},name:"thunderbolt",theme:"outlined"};const hm=fm;var mm=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:hm}))},gm=p.forwardRef(mm);const As=gm;var vm={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM184 352V232h64v207.6a91.99 91.99 0 01-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z"}}]},name:"trophy",theme:"outlined"};const xm=vm;var ym=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:xm}))},bm=p.forwardRef(ym);const Kc=bm;var wm={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 888.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-add",theme:"outlined"};const km=wm;var Cm=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:km}))},jm=p.forwardRef(Cm);const Vs=jm;var Nm={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};const Sm=Nm;var _m=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:Sm}))},Em=p.forwardRef(_m);const zm=Em;var Tm={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 464H528V448h320v128zm-268-64a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"wallet",theme:"filled"};const Pm=Tm;var Om=function(t,n){return p.createElement(A,I({},t,{ref:n,icon:Pm}))},Rm=p.forwardRef(Om);const Lm=Rm;function l1(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Mn=l1();function v2(e){Mn=e}var Ur={exec:()=>null};function Q(e,t=""){let n=typeof e=="string"?e:e.source,r={replace:(a,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(Ie.caret,"$1"),n=n.replace(a,o),r},getRegex:()=>new RegExp(n,t)};return r}var Ie={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},Mm=/^(?:[ \t]*(?:\n|$))+/,$m=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Im=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ya=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Am=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,c1=/(?:[*+-]|\d{1,9}[.)])/,x2=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,y2=Q(x2).replace(/bull/g,c1).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Vm=Q(x2).replace(/bull/g,c1).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),u1=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Hm=/^[^\n]+/,d1=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Dm=Q(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",d1).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Fm=Q(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,c1).getRegex(),ts="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",p1=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Bm=Q("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",p1).replace("tag",ts).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),b2=Q(u1).replace("hr",ya).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ts).getRegex(),Um=Q(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",b2).getRegex(),f1={blockquote:Um,code:$m,def:Dm,fences:Im,heading:Am,hr:ya,html:Bm,lheading:y2,list:Fm,newline:Mm,paragraph:b2,table:Ur,text:Hm},Xc=Q("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ya).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ts).getRegex(),qm={...f1,lheading:Vm,table:Xc,paragraph:Q(u1).replace("hr",ya).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Xc).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ts).getRegex()},Wm={...f1,html:Q(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",p1).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ur,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Q(u1).replace("hr",ya).replace("heading",` *#{1,6} *[^
]`).replace("lheading",y2).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Qm=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Zm=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,w2=/^( {2,}|\\)\n(?!\s*$)/,Gm=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ns=/[\p{P}\p{S}]/u,h1=/[\s\p{P}\p{S}]/u,k2=/[^\s\p{P}\p{S}]/u,Ym=Q(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,h1).getRegex(),C2=/(?!~)[\p{P}\p{S}]/u,Jm=/(?!~)[\s\p{P}\p{S}]/u,Km=/(?:[^\s\p{P}\p{S}]|~)/u,Xm=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g,j2=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,e7=Q(j2,"u").replace(/punct/g,ns).getRegex(),t7=Q(j2,"u").replace(/punct/g,C2).getRegex(),N2="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",n7=Q(N2,"gu").replace(/notPunctSpace/g,k2).replace(/punctSpace/g,h1).replace(/punct/g,ns).getRegex(),r7=Q(N2,"gu").replace(/notPunctSpace/g,Km).replace(/punctSpace/g,Jm).replace(/punct/g,C2).getRegex(),a7=Q("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,k2).replace(/punctSpace/g,h1).replace(/punct/g,ns).getRegex(),i7=Q(/\\(punct)/,"gu").replace(/punct/g,ns).getRegex(),s7=Q(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),o7=Q(p1).replace("(?:-->|$)","-->").getRegex(),l7=Q("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",o7).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Pi=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,c7=Q(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Pi).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),S2=Q(/^!?\[(label)\]\[(ref)\]/).replace("label",Pi).replace("ref",d1).getRegex(),_2=Q(/^!?\[(ref)\](?:\[\])?/).replace("ref",d1).getRegex(),u7=Q("reflink|nolink(?!\\()","g").replace("reflink",S2).replace("nolink",_2).getRegex(),m1={_backpedal:Ur,anyPunctuation:i7,autolink:s7,blockSkip:Xm,br:w2,code:Zm,del:Ur,emStrongLDelim:e7,emStrongRDelimAst:n7,emStrongRDelimUnd:a7,escape:Qm,link:c7,nolink:_2,punctuation:Ym,reflink:S2,reflinkSearch:u7,tag:l7,text:Gm,url:Ur},d7={...m1,link:Q(/^!?\[(label)\]\((.*?)\)/).replace("label",Pi).getRegex(),reflink:Q(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Pi).getRegex()},Ko={...m1,emStrongRDelimAst:r7,emStrongLDelim:t7,url:Q(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},p7={...Ko,br:Q(w2).replace("{2,}","*").getRegex(),text:Q(Ko.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ha={normal:f1,gfm:qm,pedantic:Wm},_r={normal:m1,gfm:Ko,breaks:p7,pedantic:d7},f7={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},e0=e=>f7[e];function Nt(e,t){if(t){if(Ie.escapeTest.test(e))return e.replace(Ie.escapeReplace,e0)}else if(Ie.escapeTestNoEncode.test(e))return e.replace(Ie.escapeReplaceNoEncode,e0);return e}function t0(e){try{e=encodeURI(e).replace(Ie.percentDecode,"%")}catch{return null}return e}function n0(e,t){var i;let n=e.replace(Ie.findPipe,(o,l,c)=>{let u=!1,d=l;for(;--d>=0&&c[d]==="\\";)u=!u;return u?"|":" |"}),r=n.split(Ie.splitPipe),a=0;if(r[0].trim()||r.shift(),r.length>0&&!((i=r.at(-1))!=null&&i.trim())&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;a<r.length;a++)r[a]=r[a].trim().replace(Ie.slashPipe,"|");return r}function Er(e,t,n){let r=e.length;if(r===0)return"";let a=0;for(;a<r;){let i=e.charAt(r-a-1);if(i===t&&!n)a++;else if(i!==t&&n)a++;else break}return e.slice(0,r-a)}function h7(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function r0(e,t,n,r,a){let i=t.href,o=t.title||null,l=e[1].replace(a.other.outputLinkReplace,"$1");r.state.inLink=!0;let c={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:o,text:l,tokens:r.inlineTokens(l)};return r.state.inLink=!1,c}function m7(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let a=r[1];return t.split(`
`).map(i=>{let o=i.match(n.other.beginningSpace);if(o===null)return i;let[l]=o;return l.length>=a.length?i.slice(a.length):i}).join(`
`)}var Oi=class{constructor(t){X(this,"options");X(this,"rules");X(this,"lexer");this.options=t||Mn}space(t){let n=this.rules.block.newline.exec(t);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(t){let n=this.rules.block.code.exec(t);if(n){let r=n[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Er(r,`
`)}}}fences(t){let n=this.rules.block.fences.exec(t);if(n){let r=n[0],a=m7(r,n[3]||"",this.rules);return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:a}}}heading(t){let n=this.rules.block.heading.exec(t);if(n){let r=n[2].trim();if(this.rules.other.endingHash.test(r)){let a=Er(r,"#");(this.options.pedantic||!a||this.rules.other.endingSpaceChar.test(a))&&(r=a.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(t){let n=this.rules.block.hr.exec(t);if(n)return{type:"hr",raw:Er(n[0],`
`)}}blockquote(t){let n=this.rules.block.blockquote.exec(t);if(n){let r=Er(n[0],`
`).split(`
`),a="",i="",o=[];for(;r.length>0;){let l=!1,c=[],u;for(u=0;u<r.length;u++)if(this.rules.other.blockquoteStart.test(r[u]))c.push(r[u]),l=!0;else if(!l)c.push(r[u]);else break;r=r.slice(u);let d=c.join(`
`),m=d.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");a=a?`${a}
${d}`:d,i=i?`${i}
${m}`:m;let h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(m,o,!0),this.lexer.state.top=h,r.length===0)break;let w=o.at(-1);if((w==null?void 0:w.type)==="code")break;if((w==null?void 0:w.type)==="blockquote"){let x=w,b=x.raw+`
`+r.join(`
`),k=this.blockquote(b);o[o.length-1]=k,a=a.substring(0,a.length-x.raw.length)+k.raw,i=i.substring(0,i.length-x.text.length)+k.text;break}else if((w==null?void 0:w.type)==="list"){let x=w,b=x.raw+`
`+r.join(`
`),k=this.list(b);o[o.length-1]=k,a=a.substring(0,a.length-w.raw.length)+k.raw,i=i.substring(0,i.length-x.raw.length)+k.raw,r=b.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:a,tokens:o,text:i}}}list(t){let n=this.rules.block.list.exec(t);if(n){let r=n[1].trim(),a=r.length>1,i={type:"list",raw:"",ordered:a,start:a?+r.slice(0,-1):"",loose:!1,items:[]};r=a?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=a?r:"[*+-]");let o=this.rules.other.listItemRegex(r),l=!1;for(;t;){let u=!1,d="",m="";if(!(n=o.exec(t))||this.rules.block.hr.test(t))break;d=n[0],t=t.substring(d.length);let h=n[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,f=>" ".repeat(3*f.length)),w=t.split(`
`,1)[0],x=!h.trim(),b=0;if(this.options.pedantic?(b=2,m=h.trimStart()):x?b=n[1].length+1:(b=n[2].search(this.rules.other.nonSpaceChar),b=b>4?1:b,m=h.slice(b),b+=n[1].length),x&&this.rules.other.blankLine.test(w)&&(d+=w+`
`,t=t.substring(w.length+1),u=!0),!u){let f=this.rules.other.nextBulletRegex(b),y=this.rules.other.hrRegex(b),C=this.rules.other.fencesBeginRegex(b),j=this.rules.other.headingBeginRegex(b),S=this.rules.other.htmlBeginRegex(b);for(;t;){let N=t.split(`
`,1)[0],E;if(w=N,this.options.pedantic?(w=w.replace(this.rules.other.listReplaceNesting,"  "),E=w):E=w.replace(this.rules.other.tabCharGlobal,"    "),C.test(w)||j.test(w)||S.test(w)||f.test(w)||y.test(w))break;if(E.search(this.rules.other.nonSpaceChar)>=b||!w.trim())m+=`
`+E.slice(b);else{if(x||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||C.test(h)||j.test(h)||y.test(h))break;m+=`
`+w}!x&&!w.trim()&&(x=!0),d+=N+`
`,t=t.substring(N.length+1),h=E.slice(b)}}i.loose||(l?i.loose=!0:this.rules.other.doubleBlankLine.test(d)&&(l=!0));let k=null,g;this.options.gfm&&(k=this.rules.other.listIsTask.exec(m),k&&(g=k[0]!=="[ ] ",m=m.replace(this.rules.other.listReplaceTask,""))),i.items.push({type:"list_item",raw:d,task:!!k,checked:g,loose:!1,text:m,tokens:[]}),i.raw+=d}let c=i.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let u=0;u<i.items.length;u++)if(this.lexer.state.top=!1,i.items[u].tokens=this.lexer.blockTokens(i.items[u].text,[]),!i.loose){let d=i.items[u].tokens.filter(h=>h.type==="space"),m=d.length>0&&d.some(h=>this.rules.other.anyLine.test(h.raw));i.loose=m}if(i.loose)for(let u=0;u<i.items.length;u++)i.items[u].loose=!0;return i}}html(t){let n=this.rules.block.html.exec(t);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(t){let n=this.rules.block.def.exec(t);if(n){let r=n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),a=n[2]?n[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:a,title:i}}}table(t){var l;let n=this.rules.block.table.exec(t);if(!n||!this.rules.other.tableDelimiter.test(n[2]))return;let r=n0(n[1]),a=n[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=(l=n[3])!=null&&l.trim()?n[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===a.length){for(let c of a)this.rules.other.tableAlignRight.test(c)?o.align.push("right"):this.rules.other.tableAlignCenter.test(c)?o.align.push("center"):this.rules.other.tableAlignLeft.test(c)?o.align.push("left"):o.align.push(null);for(let c=0;c<r.length;c++)o.header.push({text:r[c],tokens:this.lexer.inline(r[c]),header:!0,align:o.align[c]});for(let c of i)o.rows.push(n0(c,o.header.length).map((u,d)=>({text:u,tokens:this.lexer.inline(u),header:!1,align:o.align[d]})));return o}}lheading(t){let n=this.rules.block.lheading.exec(t);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(t){let n=this.rules.block.paragraph.exec(t);if(n){let r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(t){let n=this.rules.block.text.exec(t);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(t){let n=this.rules.inline.escape.exec(t);if(n)return{type:"escape",raw:n[0],text:n[1]}}tag(t){let n=this.rules.inline.tag.exec(t);if(n)return!this.lexer.state.inLink&&this.rules.other.startATag.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(t){let n=this.rules.inline.link.exec(t);if(n){let r=n[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let o=Er(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{let o=h7(n[2],"()");if(o===-2)return;if(o>-1){let l=(n[0].indexOf("!")===0?5:4)+n[1].length+o;n[2]=n[2].substring(0,o),n[0]=n[0].substring(0,l).trim(),n[3]=""}}let a=n[2],i="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(a);o&&(a=o[1],i=o[3])}else i=n[3]?n[3].slice(1,-1):"";return a=a.trim(),this.rules.other.startAngleBracket.test(a)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?a=a.slice(1):a=a.slice(1,-1)),r0(n,{href:a&&a.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer,this.rules)}}reflink(t,n){let r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){let a=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=n[a.toLowerCase()];if(!i){let o=r[0].charAt(0);return{type:"text",raw:o,text:o}}return r0(r,i,r[0],this.lexer,this.rules)}}emStrong(t,n,r=""){let a=this.rules.inline.emStrongLDelim.exec(t);if(!(!a||a[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(a[1]||a[2])||!r||this.rules.inline.punctuation.exec(r))){let i=[...a[0]].length-1,o,l,c=i,u=0,d=a[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,n=n.slice(-1*t.length+i);(a=d.exec(n))!=null;){if(o=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!o)continue;if(l=[...o].length,a[3]||a[4]){c+=l;continue}else if((a[5]||a[6])&&i%3&&!((i+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);let m=[...a[0]][0].length,h=t.slice(0,i+a.index+m+l);if(Math.min(i,l)%2){let x=h.slice(1,-1);return{type:"em",raw:h,text:x,tokens:this.lexer.inlineTokens(x)}}let w=h.slice(2,-2);return{type:"strong",raw:h,text:w,tokens:this.lexer.inlineTokens(w)}}}}codespan(t){let n=this.rules.inline.code.exec(t);if(n){let r=n[2].replace(this.rules.other.newLineCharGlobal," "),a=this.rules.other.nonSpaceChar.test(r),i=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return a&&i&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:n[0],text:r}}}br(t){let n=this.rules.inline.br.exec(t);if(n)return{type:"br",raw:n[0]}}del(t){let n=this.rules.inline.del.exec(t);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(t){let n=this.rules.inline.autolink.exec(t);if(n){let r,a;return n[2]==="@"?(r=n[1],a="mailto:"+r):(r=n[1],a=r),{type:"link",raw:n[0],text:r,href:a,tokens:[{type:"text",raw:r,text:r}]}}}url(t){var r;let n;if(n=this.rules.inline.url.exec(t)){let a,i;if(n[2]==="@")a=n[0],i="mailto:"+a;else{let o;do o=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(o!==n[0]);a=n[0],n[1]==="www."?i="http://"+n[0]:i=n[0]}return{type:"link",raw:n[0],text:a,href:i,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(t){let n=this.rules.inline.text.exec(t);if(n){let r=this.lexer.state.inRawBlock;return{type:"text",raw:n[0],text:n[0],escaped:r}}}},It=class Xo{constructor(t){X(this,"tokens");X(this,"options");X(this,"state");X(this,"tokenizer");X(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Mn,this.options.tokenizer=this.options.tokenizer||new Oi,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:Ie,block:Ha.normal,inline:_r.normal};this.options.pedantic?(n.block=Ha.pedantic,n.inline=_r.pedantic):this.options.gfm&&(n.block=Ha.gfm,this.options.breaks?n.inline=_r.breaks:n.inline=_r.gfm),this.tokenizer.rules=n}static get rules(){return{block:Ha,inline:_r}}static lex(t,n){return new Xo(n).lex(t)}static lexInline(t,n){return new Xo(n).inlineTokens(t)}lex(t){t=t.replace(Ie.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],r=!1){var a,i,o;for(this.options.pedantic&&(t=t.replace(Ie.tabCharGlobal,"    ").replace(Ie.spaceLine,""));t;){let l;if((i=(a=this.options.extensions)==null?void 0:a.block)!=null&&i.some(u=>(l=u.call({lexer:this},t,n))?(t=t.substring(l.raw.length),n.push(l),!0):!1))continue;if(l=this.tokenizer.space(t)){t=t.substring(l.raw.length);let u=n.at(-1);l.raw.length===1&&u!==void 0?u.raw+=`
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
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(l);continue}if(t){let u="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){var l,c,u;let r=t,a=null;if(this.tokens.links){let d=Object.keys(this.tokens.links);if(d.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)d.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,a.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(a=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,o="";for(;t;){i||(o=""),i=!1;let d;if((c=(l=this.options.extensions)==null?void 0:l.inline)!=null&&c.some(h=>(d=h.call({lexer:this},t,n))?(t=t.substring(d.raw.length),n.push(d),!0):!1))continue;if(d=this.tokenizer.escape(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.tag(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.link(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(d.raw.length);let h=n.at(-1);d.type==="text"&&(h==null?void 0:h.type)==="text"?(h.raw+=d.raw,h.text+=d.text):n.push(d);continue}if(d=this.tokenizer.emStrong(t,r,o)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.codespan(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.br(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.del(t)){t=t.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.autolink(t)){t=t.substring(d.raw.length),n.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(t))){t=t.substring(d.raw.length),n.push(d);continue}let m=t;if((u=this.options.extensions)!=null&&u.startInline){let h=1/0,w=t.slice(1),x;this.options.extensions.startInline.forEach(b=>{x=b.call({lexer:this},w),typeof x=="number"&&x>=0&&(h=Math.min(h,x))}),h<1/0&&h>=0&&(m=t.substring(0,h+1))}if(d=this.tokenizer.inlineText(m)){t=t.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(o=d.raw.slice(-1)),i=!0;let h=n.at(-1);(h==null?void 0:h.type)==="text"?(h.raw+=d.raw,h.text+=d.text):n.push(d);continue}if(t){let h="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return n}},Ri=class{constructor(t){X(this,"options");X(this,"parser");this.options=t||Mn}space(t){return""}code({text:t,lang:n,escaped:r}){var o;let a=(o=(n||"").match(Ie.notSpaceStart))==null?void 0:o[0],i=t.replace(Ie.endingNewline,"")+`
`;return a?'<pre><code class="language-'+Nt(a)+'">'+(r?i:Nt(i,!0))+`</code></pre>
`:"<pre><code>"+(r?i:Nt(i,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}heading({tokens:t,depth:n}){return`<h${n}>${this.parser.parseInline(t)}</h${n}>
`}hr(t){return`<hr>
`}list(t){let n=t.ordered,r=t.start,a="";for(let l=0;l<t.items.length;l++){let c=t.items[l];a+=this.listitem(c)}let i=n?"ol":"ul",o=n&&r!==1?' start="'+r+'"':"";return"<"+i+o+`>
`+a+"</"+i+`>
`}listitem(t){var r;let n="";if(t.task){let a=this.checkbox({checked:!!t.checked});t.loose?((r=t.tokens[0])==null?void 0:r.type)==="paragraph"?(t.tokens[0].text=a+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=a+" "+Nt(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:a+" ",text:a+" ",escaped:!0}):n+=a+" "}return n+=this.parser.parse(t.tokens,!!t.loose),`<li>${n}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let n="",r="";for(let i=0;i<t.header.length;i++)r+=this.tablecell(t.header[i]);n+=this.tablerow({text:r});let a="";for(let i=0;i<t.rows.length;i++){let o=t.rows[i];r="";for(let l=0;l<o.length;l++)r+=this.tablecell(o[l]);a+=this.tablerow({text:r})}return a&&(a=`<tbody>${a}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+a+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let n=this.parser.parseInline(t.tokens),r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+n+`</${r}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${Nt(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:n,tokens:r}){let a=this.parser.parseInline(r),i=t0(t);if(i===null)return a;t=i;let o='<a href="'+t+'"';return n&&(o+=' title="'+Nt(n)+'"'),o+=">"+a+"</a>",o}image({href:t,title:n,text:r,tokens:a}){a&&(r=this.parser.parseInline(a,this.parser.textRenderer));let i=t0(t);if(i===null)return Nt(r);t=i;let o=`<img src="${t}" alt="${r}"`;return n&&(o+=` title="${Nt(n)}"`),o+=">",o}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:Nt(t.text)}},g1=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},At=class el{constructor(t){X(this,"options");X(this,"renderer");X(this,"textRenderer");this.options=t||Mn,this.options.renderer=this.options.renderer||new Ri,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new g1}static parse(t,n){return new el(n).parse(t)}static parseInline(t,n){return new el(n).parseInline(t)}parse(t,n=!0){var a,i;let r="";for(let o=0;o<t.length;o++){let l=t[o];if((i=(a=this.options.extensions)==null?void 0:a.renderers)!=null&&i[l.type]){let u=l,d=this.options.extensions.renderers[u.type].call({parser:this},u);if(d!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){r+=d||"";continue}}let c=l;switch(c.type){case"space":{r+=this.renderer.space(c);continue}case"hr":{r+=this.renderer.hr(c);continue}case"heading":{r+=this.renderer.heading(c);continue}case"code":{r+=this.renderer.code(c);continue}case"table":{r+=this.renderer.table(c);continue}case"blockquote":{r+=this.renderer.blockquote(c);continue}case"list":{r+=this.renderer.list(c);continue}case"html":{r+=this.renderer.html(c);continue}case"paragraph":{r+=this.renderer.paragraph(c);continue}case"text":{let u=c,d=this.renderer.text(u);for(;o+1<t.length&&t[o+1].type==="text";)u=t[++o],d+=`
`+this.renderer.text(u);n?r+=this.renderer.paragraph({type:"paragraph",raw:d,text:d,tokens:[{type:"text",raw:d,text:d,escaped:!0}]}):r+=d;continue}default:{let u='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}parseInline(t,n=this.renderer){var a,i;let r="";for(let o=0;o<t.length;o++){let l=t[o];if((i=(a=this.options.extensions)==null?void 0:a.renderers)!=null&&i[l.type]){let u=this.options.extensions.renderers[l.type].call({parser:this},l);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){r+=u||"";continue}}let c=l;switch(c.type){case"escape":{r+=n.text(c);break}case"html":{r+=n.html(c);break}case"link":{r+=n.link(c);break}case"image":{r+=n.image(c);break}case"strong":{r+=n.strong(c);break}case"em":{r+=n.em(c);break}case"codespan":{r+=n.codespan(c);break}case"br":{r+=n.br(c);break}case"del":{r+=n.del(c);break}case"text":{r+=n.text(c);break}default:{let u='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}},Qs,ti=(Qs=class{constructor(t){X(this,"options");X(this,"block");this.options=t||Mn}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}provideLexer(){return this.block?It.lex:It.lexInline}provideParser(){return this.block?At.parse:At.parseInline}},X(Qs,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Qs),g7=class{constructor(...t){X(this,"defaults",l1());X(this,"options",this.setOptions);X(this,"parse",this.parseMarkdown(!0));X(this,"parseInline",this.parseMarkdown(!1));X(this,"Parser",At);X(this,"Renderer",Ri);X(this,"TextRenderer",g1);X(this,"Lexer",It);X(this,"Tokenizer",Oi);X(this,"Hooks",ti);this.use(...t)}walkTokens(t,n){var a,i;let r=[];for(let o of t)switch(r=r.concat(n.call(this,o)),o.type){case"table":{let l=o;for(let c of l.header)r=r.concat(this.walkTokens(c.tokens,n));for(let c of l.rows)for(let u of c)r=r.concat(this.walkTokens(u.tokens,n));break}case"list":{let l=o;r=r.concat(this.walkTokens(l.items,n));break}default:{let l=o;(i=(a=this.defaults.extensions)==null?void 0:a.childTokens)!=null&&i[l.type]?this.defaults.extensions.childTokens[l.type].forEach(c=>{let u=l[c].flat(1/0);r=r.concat(this.walkTokens(u,n))}):l.tokens&&(r=r.concat(this.walkTokens(l.tokens,n)))}}return r}use(...t){let n=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(r=>{let a={...r};if(a.async=this.defaults.async||a.async||!1,r.extensions&&(r.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let o=n.renderers[i.name];o?n.renderers[i.name]=function(...l){let c=i.renderer.apply(this,l);return c===!1&&(c=o.apply(this,l)),c}:n.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=n[i.level];o?o.unshift(i.tokenizer):n[i.level]=[i.tokenizer],i.start&&(i.level==="block"?n.startBlock?n.startBlock.push(i.start):n.startBlock=[i.start]:i.level==="inline"&&(n.startInline?n.startInline.push(i.start):n.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(n.childTokens[i.name]=i.childTokens)}),a.extensions=n),r.renderer){let i=this.defaults.renderer||new Ri(this.defaults);for(let o in r.renderer){if(!(o in i))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let l=o,c=r.renderer[l],u=i[l];i[l]=(...d)=>{let m=c.apply(i,d);return m===!1&&(m=u.apply(i,d)),m||""}}a.renderer=i}if(r.tokenizer){let i=this.defaults.tokenizer||new Oi(this.defaults);for(let o in r.tokenizer){if(!(o in i))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let l=o,c=r.tokenizer[l],u=i[l];i[l]=(...d)=>{let m=c.apply(i,d);return m===!1&&(m=u.apply(i,d)),m}}a.tokenizer=i}if(r.hooks){let i=this.defaults.hooks||new ti;for(let o in r.hooks){if(!(o in i))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let l=o,c=r.hooks[l],u=i[l];ti.passThroughHooks.has(o)?i[l]=d=>{if(this.defaults.async)return Promise.resolve(c.call(i,d)).then(h=>u.call(i,h));let m=c.call(i,d);return u.call(i,m)}:i[l]=(...d)=>{let m=c.apply(i,d);return m===!1&&(m=u.apply(i,d)),m}}a.hooks=i}if(r.walkTokens){let i=this.defaults.walkTokens,o=r.walkTokens;a.walkTokens=function(l){let c=[];return c.push(o.call(this,l)),i&&(c=c.concat(i.call(this,l))),c}}this.defaults={...this.defaults,...a}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,n){return It.lex(t,n??this.defaults)}parser(t,n){return At.parse(t,n??this.defaults)}parseMarkdown(t){return(n,r)=>{let a={...r},i={...this.defaults,...a},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&a.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=t);let l=i.hooks?i.hooks.provideLexer():t?It.lex:It.lexInline,c=i.hooks?i.hooks.provideParser():t?At.parse:At.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(u=>l(u,i)).then(u=>i.hooks?i.hooks.processAllTokens(u):u).then(u=>i.walkTokens?Promise.all(this.walkTokens(u,i.walkTokens)).then(()=>u):u).then(u=>c(u,i)).then(u=>i.hooks?i.hooks.postprocess(u):u).catch(o);try{i.hooks&&(n=i.hooks.preprocess(n));let u=l(n,i);i.hooks&&(u=i.hooks.processAllTokens(u)),i.walkTokens&&this.walkTokens(u,i.walkTokens);let d=c(u,i);return i.hooks&&(d=i.hooks.postprocess(d)),d}catch(u){return o(u)}}}onError(t,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let a="<p>An error occurred:</p><pre>"+Nt(r.message+"",!0)+"</pre>";return n?Promise.resolve(a):a}if(n)return Promise.reject(r);throw r}}},Tn=new g7;function Z(e,t){return Tn.parse(e,t)}Z.options=Z.setOptions=function(e){return Tn.setOptions(e),Z.defaults=Tn.defaults,v2(Z.defaults),Z};Z.getDefaults=l1;Z.defaults=Mn;Z.use=function(...e){return Tn.use(...e),Z.defaults=Tn.defaults,v2(Z.defaults),Z};Z.walkTokens=function(e,t){return Tn.walkTokens(e,t)};Z.parseInline=Tn.parseInline;Z.Parser=At;Z.parser=At.parse;Z.Renderer=Ri;Z.TextRenderer=g1;Z.Lexer=It;Z.lexer=It.lex;Z.Tokenizer=Oi;Z.Hooks=ti;Z.parse=Z;Z.options;Z.setOptions;Z.use;Z.walkTokens;Z.parseInline;At.parse;It.lex;const v1="/uelearn/imgs/racoon_learn.jpg",v7="/uelearn/imgs/save.jpg";function x7({url:e,setIframeLoaded:t}){const[n,r]=p.useState(!1),a=`${e}`;return p.useEffect(()=>{const i=window.matchMedia("(max-width: 768px)");r(i.matches);const o=l=>r(l.matches);return i.addEventListener("change",o),()=>i.removeEventListener("change",o)},[]),n?s.jsx("iframe",{className:"loadpdf",src:`https://docs.google.com/viewer?url=${a}`,title:"Mobile View",style:{width:"100%",height:"100vh",border:"none"},onLoad:()=>setTimeout(()=>t(!0),4e3)}):s.jsx("iframe",{className:"loadpdf",src:a,title:"Laptop View",style:{width:"100%",height:"100vh",border:"none"},onLoad:()=>setTimeout(()=>t(!0),4e3)})}const y7=5,E2=8e3,b7=400,w7=(e,t)=>{try{const r=JSON.parse(localStorage.getItem("recentSolutions")||"[]").filter(i=>i.course!==e),a=[{course:e,solution:t,savedAt:Date.now()},...r].slice(0,y7).filter(i=>!/aierror/gim.test(i.solution)||i.solution.length>15).sort((i,o)=>o.savedAt-i.savedAt);localStorage.setItem("recentSolutions",JSON.stringify(a))}catch{}},a0=()=>{try{return JSON.parse(localStorage.getItem("recentSolutions")||"[]")}catch{return[]}},z2=()=>{try{const e=JSON.parse(localStorage.getItem("userInfo")||"{}");if(!(e!=null&&e.accessToken))throw new Error("Missing access token. Please login again.");return{accessToken:e.accessToken,refreshToken:e.refreshToken}}catch(e){throw new Error(e.message||"Auth error. Please login again.")}},k7=({message:e,type:t="error",onDismiss:n})=>(p.useEffect(()=>{const r=setTimeout(n,3e3);return()=>clearTimeout(r)},[n]),s.jsxs("div",{className:`sf-toast sf-toast--${t}`,children:[s.jsx("span",{className:t==="error"?"sf-toast__dot sf-toast__dot--error":"sf-toast__dot sf-toast__dot--success"}),s.jsx("span",{children:e})]})),C7=({setstoreme:e,extract:t,courseName:n,selectedVal:r})=>{const[a,i]=p.useState(""),[o,l]=p.useState(!1),[c,u]=p.useState(null),d=async()=>{if(a!=="Dont save bad responses"){u({message:"Please type the note correctly to proceed",type:"error"});return}let m,h;try{({accessToken:m,refreshToken:h}=z2())}catch(b){u({message:b.message,type:"error"});return}l(!0);const w=new AbortController,x=setTimeout(()=>w.abort(),E2);try{await Pt(Ne+"/api/v1/solutions/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${m}`},body:JSON.stringify({courseName:n,solution:t,validated:!1,modelName:r}),signal:w.signal},h),u({message:"Saved successfully!",type:"success"}),setTimeout(()=>e(!1),1600)}catch(b){u({message:b.name==="AbortError"?"Request timed out.":"Error: "+(b.message||b),type:"error"})}finally{clearTimeout(x),l(!1)}};return s.jsxs("div",{className:"sf-modal-overlay",children:[c&&s.jsx(k7,{message:c.message,type:c.type,onDismiss:()=>u(null)}),s.jsxs("div",{className:"sf-modal",children:[s.jsx("button",{className:"sf-modal__close",onClick:()=>e(!1),children:s.jsx(C5,{})}),s.jsxs("div",{className:"sf-modal__art",children:[s.jsx("img",{src:v7,alt:"save"}),s.jsx("div",{className:"sf-modal__art-fade"})]}),s.jsxs("div",{className:"sf-modal__body",children:[s.jsx("h3",{className:"sf-modal__title",children:"Save Response"}),s.jsxs("div",{className:"sf-modal__notice",children:[s.jsx("i",{className:"fa fa-exclamation-triangle sf-modal__notice-icon"}),s.jsxs("p",{children:["Only save ",s.jsx("strong",{children:"good responses"}),". This helps you avoid spending credits on the same topic twice."]})]}),s.jsxs("div",{className:"sf-modal__field",children:[s.jsx("label",{children:"Type to confirm:"}),s.jsx("div",{className:"sf-modal__confirm-phrase",children:"Dont save bad responses"}),s.jsx("input",{type:"text",value:a,onChange:m=>i(m.target.value),placeholder:"Type the phrase above…",className:a&&a!=="Dont save bad responses"?"sf-modal__input--invalid":""})]}),s.jsx("button",{className:"sf-modal__save-btn",onClick:d,disabled:o,children:o?s.jsx("span",{className:"sf-modal__spinner"}):s.jsxs(s.Fragment,{children:[s.jsx("i",{className:"fa fa-save"})," Save"]})})]})]})]})},i0=({width:e="100%",height:t=14,style:n={}})=>s.jsx("div",{className:"sf-skeleton",style:{width:e,height:t,borderRadius:6,...n}}),j7=({pdflink:e,courseName:t,selectedVal:n,setshowpdf:r,mainlogo:a,actualDlink:i,credits:o,extract:l,dataerror:c,raw:u})=>{var Fe;const[d,m]=p.useState(!1),[h,w]=p.useState(a0),[x,b]=p.useState(!1),[k,g]=p.useState(!1),[f,y]=p.useState(!0),[C,j]=p.useState(!0),[S,N]=p.useState(null),[E,P]=p.useState([]),[T,H]=p.useState(!1),[Ce,ce]=p.useState(""),[Le,kt]=p.useState(""),[Je,Me]=p.useState(!1),[z,M]=p.useState("saved"),$=p.useRef(null),q=p.useRef(null),Y=p.useCallback(async(O="")=>{var Ke,$n;(Ke=$.current)==null||Ke.abort(),$.current=new AbortController;const V=O.trim().length>0;V?Me(!0):H(!0),ce("");let ye,B;try{({accessToken:ye,refreshToken:B}=z2())}catch(be){ce(be.message),V?Me(!1):H(!1);return}const fe=V?`${Ne}/api/v1/solutions/queries?courseName=${encodeURIComponent(O.trim())}`:`${Ne}/api/v1/solutions/queries`,Be=setTimeout(()=>{var be;return(be=$.current)==null?void 0:be.abort()},E2);try{const be=await Pt(fe,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${ye}`},signal:$.current.signal},B),mn=(be==null?void 0:be.solutions)!=null?be:(($n=be==null?void 0:be.data)==null?void 0:$n.solutions)!=null?be.data:null;P(mn||{solutions:[],solutions_count:0})}catch(be){be.name!=="AbortError"&&ce(V?"Search failed. Try again.":"Could not load saved queries.")}finally{clearTimeout(Be),V?Me(!1):H(!1)}},[]);p.useEffect(()=>(Y(),()=>{var O;(O=$.current)==null||O.abort(),clearTimeout(q.current)}),[Y]);const De=p.useCallback(O=>{const V=O.target.value;kt(V),clearTimeout(q.current),q.current=setTimeout(()=>Y(V),b7)},[Y]);p.useEffect(()=>{l&&l!=="loading..."&&!(c!=null&&c.length)&&(w7(t,l),w(a0()))},[l,t,c]);const ie=l==="loading...",Ee=(c==null?void 0:c.length)>0||!l||l==="loading...",U=/download/gi.test(i),K=()=>Ee&&!S?`<div class='sf-ai-error'>${c}</div>`:f?Z((S==null?void 0:S.solution)||l||c||""):(u==null?void 0:u.replace(/(university.?of.?ghana)|(all.?rights.?reserved)/gim,""))||"";return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:N7}),s.jsxs("div",{className:"sf-root",children:[s.jsxs("div",{className:"sf-pdf-pane",children:[s.jsxs("div",{className:"sf-pdf-topbar",children:[s.jsx("button",{className:"sf-icon-btn",onClick:()=>r(!1),title:"Close",children:s.jsx("i",{className:"fa fa-times"})}),s.jsx("img",{src:a,className:"sf-logo",alt:"logo"}),s.jsx("div",{className:"sf-pdf-topbar__actions",children:x||u?s.jsxs(s.Fragment,{children:[U&&s.jsxs("a",{href:ca+i,download:!0,target:"_blank",rel:"noopener noreferrer",className:"sf-pill-btn",children:[s.jsx($f,{})," Download"]}),s.jsx("button",{className:"sf-pill-btn sf-pill-btn--accent",onClick:()=>m(!0),children:"✨Solutions"})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"sf-skeleton",style:{width:90,height:30,borderRadius:20}}),s.jsx("div",{className:"sf-skeleton",style:{width:100,height:30,borderRadius:20}})]})})]}),s.jsx("div",{className:"sf-pdf-body",children:s.jsx(x7,{url:`${ca}${e}&embedded=true`,setIframeLoaded:b})})]}),d&&s.jsxs("div",{className:"sf-drawer",children:[s.jsxs("div",{className:"sf-drawer__topbar",children:[s.jsx("button",{className:"sf-icon-btn",onClick:()=>{m(!1),N(null)},children:s.jsx("i",{className:"fa fa-arrow-left"})}),s.jsx("span",{className:"sf-drawer__title",children:S?s.jsx("span",{className:"sf-drawer__title-course",children:S.course||t}):"Solutions"}),s.jsx("div",{className:"sf-drawer__credits",children:s.jsxs(he,{to:"/uelearn/Payment",target:"_blank",rel:"noopener noreferrer",className:"sf-credits-pill",children:[s.jsx("i",{className:"fa fa-bolt sf-credits-pill__icon"}),s.jsx("strong",{children:o??"0"}),s.jsxs("span",{className:"sf-credits-pill__topup",children:[s.jsx(va,{})," Top up"]})]})})]}),!ie&&s.jsx("div",{className:`sf-banner ${Ee?"sf-banner--error":"sf-banner--success"}`,children:Ee?"Extraction failed":"Extraction successful"}),s.jsxs("div",{className:"sf-drawer__body",children:[s.jsx("div",{className:`sf-sidebar ${C?"sf-sidebar--open":""}`,children:s.jsxs("div",{className:"sf-sidebar__inner",children:[s.jsx("div",{className:"sf-sidebar__art",children:s.jsx("img",{src:v1,alt:""})}),s.jsxs("div",{className:"sf-search-wrap",children:[s.jsx("i",{className:"fa fa-search sf-search-wrap__icon"}),s.jsx("input",{type:"search",className:"sf-search",placeholder:"Search queries…",value:Le,onChange:De}),Je&&s.jsx("span",{className:"sf-search-wrap__spin sf-search-wrap__spin--anim"})]}),s.jsxs("div",{className:"sf-tabs",children:[s.jsxs("button",{className:`sf-tab ${z==="saved"?"sf-tab--active":""}`,onClick:()=>M("saved"),children:[s.jsx(g2,{})," Saved"]}),s.jsx("button",{className:`sf-tab ${z==="recent"?"sf-tab--active":""}`,onClick:()=>M("recent"),children:"Recent"})]}),s.jsx("div",{className:"sf-list",children:z==="saved"?T||Je?[1,2,3].map(O=>s.jsx("div",{className:"sf-list-item",children:s.jsx(i0,{height:12,width:"70%"})},O)):Ce?s.jsx("div",{className:"sf-list-empty sf-list-empty--error",children:Ce}):((Fe=E==null?void 0:E.solutions)==null?void 0:Fe.length)>0?E.solutions.map((O,V)=>s.jsxs("div",{className:`sf-list-item ${(S==null?void 0:S.id)===O.id?"sf-list-item--active":""}`,onClick:()=>{N(O),y(!0)},children:[s.jsx("span",{className:"sf-list-item__initial",children:(O.course||"?")[0].toUpperCase()}),s.jsxs("div",{className:"sf-list-item__info",children:[s.jsx("span",{className:"sf-list-item__label",children:O.course}),s.jsx("span",{className:"sf-list-item__meta",children:"Saved query"})]}),s.jsx("i",{className:"fa fa-chevron-right sf-list-item__arrow"})]},O.id??V)):s.jsx("div",{className:"sf-list-empty",children:Le.trim()?`No results for "${Le.trim()}"`:"No saved queries yet"}):h.length>0?h.map((O,V)=>s.jsxs("div",{className:`sf-list-item ${(S==null?void 0:S.course)===O.course?"sf-list-item--active sf-list-item--recent":""}`,onClick:()=>{N(O),y(!0)},children:[s.jsx("span",{className:"sf-list-item__initial sf-list-item__initial--recent",children:(O.course||"?")[0].toUpperCase()}),s.jsxs("div",{className:"sf-list-item__info",children:[s.jsx("span",{className:"sf-list-item__label",children:O.course}),s.jsx("span",{className:"sf-list-item__meta",children:"Recent"})]}),s.jsx("i",{className:"fa fa-chevron-right sf-list-item__arrow"})]},"r"+V)):s.jsx("div",{className:"sf-list-empty",children:"No recent activity"})})]})}),s.jsxs("div",{className:"sf-content",children:[s.jsxs("div",{className:"sf-content__toolbar",children:[s.jsx("button",{className:"sf-icon-btn sf-sidebar-toggle",onClick:()=>j(O=>!O),title:"Toggle sidebar",children:s.jsx("i",{className:`fa fa-${C?"indent":"dedent"}`})}),!ie&&s.jsxs("div",{className:"sf-view-toggle",children:[s.jsxs("button",{className:`sf-view-toggle__btn ${f?"sf-view-toggle__btn--active":""}`,onClick:()=>y(!0),children:[s.jsx("i",{className:"fa fa-check-circle"})," Solved"]}),s.jsxs("button",{className:`sf-view-toggle__btn ${f?"":"sf-view-toggle__btn--active"}`,onClick:()=>y(!1),children:[s.jsx("i",{className:"fa fa-code"})," Raw"]})]}),s.jsxs("div",{className:"sf-content__toolbar-right",children:[S&&s.jsx("button",{className:"sf-pill-btn sf-pill-btn--active",onClick:()=>{N(null),y(!0)},title:"Back to current result",children:"Live result"}),!ie&&!Ee&&s.jsxs("button",{className:"sf-pill-btn",onClick:()=>g(!0),children:[s.jsx("i",{className:"fa fa-bookmark"})," Save"]})]})]}),s.jsx("div",{className:"sf-content__body",children:ie?s.jsx("div",{className:"sf-content__loading",children:[90,75,85,60,80].map((O,V)=>s.jsx(i0,{width:`${O}%`,height:13,style:{marginBottom:10}},V))}):s.jsx("div",{className:"sf-prose",dangerouslySetInnerHTML:{__html:K()}})})]})]})]})]}),k&&s.jsx(C7,{selectedVal:n,courseName:t,setstoreme:g,extract:l})]})},N7=`
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
`,S7="/uelearn/imgs/pdf.png",_7="/uelearn/imgs/racoon_job.jpg",E7="/uelearn/imgs/coin.png";function z7({onSuccess:e,onClose:t}){const[n,r]=p.useState(""),[a,i]=p.useState(["","","","","",""]),[o,l]=p.useState("phone"),[c,u]=p.useState(!1),[d,m]=p.useState({text:"",type:""}),[h,w]=p.useState(0),[x,b]=p.useState(!1),k=p.useRef([]),g=()=>{try{return JSON.parse(localStorage.getItem("userInfo")||"{}").accessToken||""}catch{return""}},f=(P,T="error")=>{m({text:P,type:T}),setTimeout(()=>m({text:"",type:""}),5e3)},y=()=>{w(15);const P=setInterval(()=>{w(T=>T<=1?(clearInterval(P),0):T-1)},1e3)},C=async()=>{if(n.trim().length<10){f("Enter a valid phone number");return}u(!0);try{(await fetch(Ne+"/api/v1/send/sms/otp",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${g()}`},body:JSON.stringify({msisdn:n})})).status===200?(f("OTP sent successfully!","success"),l("otp"),y(),b(!0)):f("Failed to send OTP, please try again")}catch{f("Network error, please retry")}finally{u(!1)}},j=async()=>{const P=a.join("");if(P.length!==6){f("Enter the complete 6-digit OTP");return}u(!0);try{const T=await fetch(Ne+"/api/v1/verification",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${g()}`},body:JSON.stringify({path:"msisdn",otp:P})});if(T.status===200)f("Phone verified successfully!","success"),setTimeout(()=>e&&e(),1200);else{const H=await T.json().catch(()=>({}));f((H==null?void 0:H.message)||"Verification failed, please retry")}}catch{f("Verification failed, please retry")}finally{u(!1)}},S=(P,T)=>{var ce;const H=P.replace(/\D/,"").slice(-1),Ce=[...a];Ce[T]=H,i(Ce),H&&T<5&&((ce=k.current[T+1])==null||ce.focus())},N=(P,T)=>{var H;P.key==="Backspace"&&!a[T]&&T>0&&((H=k.current[T-1])==null||H.focus())},E=P=>{var H;const T=P.clipboardData.getData("text").replace(/\D/g,"").slice(0,6);T.length===6&&(i(T.split("")),(H=k.current[5])==null||H.focus())};return s.jsxs("div",{style:J.overlay,children:[s.jsxs("div",{style:J.card,children:[s.jsxs("div",{style:J.header,children:[s.jsx("div",{style:J.iconRing,children:s.jsx(Jo,{style:{fontSize:22,color:"#fff"}})}),s.jsx("h2",{style:J.title,children:"Verify Phone Number"}),s.jsx("p",{style:J.subtitle,children:o==="phone"?"Enter your phone number to receive an OTP":`OTP sent to ${n}`}),t&&s.jsx("button",{class:"closeme",onClick:t,"aria-label":"Close",children:s.jsx("i",{className:"fa fa-close"})})]}),d.text&&s.jsxs("div",{style:{...J.banner,...d.type==="success"?J.bannerSuccess:J.bannerError},children:[d.type==="success"?"✅ ":"🔴 ",d.text]}),s.jsxs("div",{style:J.body,children:[o==="phone"&&s.jsxs(s.Fragment,{children:[s.jsx("label",{style:J.label,children:"Phone Number"}),s.jsxs("div",{style:J.inputWrap,children:[s.jsx(Jo,{style:J.inputIcon}),s.jsx("input",{style:J.input,type:"tel",placeholder:"+233 XX XXX XXXX",value:n,onChange:P=>r(P.target.value),onKeyDown:P=>P.key==="Enter"&&C()})]}),s.jsx("button",{style:{...J.primaryBtn,opacity:c?.7:1},onClick:C,disabled:c,children:c?s.jsxs("span",{style:J.dots,children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{})]}):s.jsxs(s.Fragment,{children:[s.jsx(h2,{style:{marginRight:8}}),"Send OTP"]})})]}),o==="otp"&&s.jsxs(s.Fragment,{children:[s.jsx("label",{style:J.label,children:"Enter 6-digit code"}),s.jsx("div",{style:J.otpRow,onPaste:E,children:a.map((P,T)=>s.jsx("input",{ref:H=>k.current[T]=H,style:{...J.otpBox,borderColor:P?"#1a1a2e":"#d1d5db",background:P?"#f0f4ff":"#fff"},type:"text",inputMode:"numeric",maxLength:1,value:P,onChange:H=>S(H.target.value,T),onKeyDown:H=>N(H,T)},T))}),s.jsxs("div",{style:J.resendRow,children:[s.jsx(o1,{style:{color:"#6b7280",marginRight:6}}),h>0?s.jsxs("span",{style:J.counterText,children:["Resend in ",h,"s"]}):s.jsx("button",{style:J.resendBtn,onClick:()=>{C()},disabled:c,children:"Resend OTP"})]}),s.jsx("button",{style:{...J.primaryBtn,opacity:c?.7:1},onClick:j,disabled:c,children:c?s.jsxs("span",{style:J.dots,children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{})]}):s.jsxs(s.Fragment,{children:[s.jsx(s1,{style:{marginRight:8}}),"Verify & Confirm"]})}),s.jsx("button",{style:J.backBtn,onClick:()=>l("phone"),children:"← Change number"}),x&&s.jsxs("div",{style:J.skipWrap,children:[s.jsx(Rr,{style:{color:"#9ca3af",marginRight:6}}),s.jsx("span",{style:J.skipNote,children:"Didn't receive OTP?"}),s.jsx("button",{style:J.skipBtn,onClick:()=>t&&t(),children:"Skip for now →"})]})]})]})]}),s.jsx("style",{children:`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
      `})]})}const J={overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:"16px"},card:{background:"#fff",borderRadius:"20px",width:"100%",maxWidth:"420px",boxShadow:"0 24px 60px rgba(0,0,0,0.18)",overflow:"hidden",fontFamily:"'Segoe UI', sans-serif",position:"relative"},header:{background:"linear-gradient(135deg, #332639 0%, #16213e 100%)",padding:"32px 28px 24px",textAlign:"center",position:"relative"},iconRing:{width:52,height:52,borderRadius:"50%",background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px",border:"2px solid rgba(255,255,255,0.25)"},title:{margin:0,color:"#fff",fontSize:"20px",fontWeight:700,letterSpacing:"-0.3px"},subtitle:{margin:"6px 0 0",color:"rgba(255,255,255,0.6)",fontSize:"13px"},closeBtn:{position:"absolute",top:14,right:16,background:"none",border:"none",color:"rgba(255,255,255,0.6)",fontSize:"22px",cursor:"pointer",lineHeight:1,padding:"2px 6px"},banner:{padding:"10px 20px",fontSize:"13px",fontWeight:500,textAlign:"center"},bannerSuccess:{background:"#f0fdf4",color:"#15803d",borderBottom:"1px solid #bbf7d0"},bannerError:{background:"#fff1f2",color:"#be123c",borderBottom:"1px solid #fecdd3"},body:{padding:"28px"},label:{display:"block",fontSize:"12px",fontWeight:600,color:"#374151",letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:"10px"},inputWrap:{display:"flex",alignItems:"center",border:"1.5px solid #e5e7eb",borderRadius:"10px",padding:"0 14px",marginBottom:"20px",transition:"border-color 0.2s"},inputIcon:{color:"#9ca3af",fontSize:"16px",marginRight:"10px",flexShrink:0},input:{flex:1,border:"none",outline:"none",fontSize:"15px",padding:"13px 0",background:"transparent",color:"#111827"},otpRow:{display:"flex",gap:"8px",justifyContent:"center",marginBottom:"20px"},otpBox:{width:"46px",height:"54px",textAlign:"center",fontSize:"22px",fontWeight:700,border:"2px solid #d1d5db",borderRadius:"10px",outline:"none",transition:"all 0.15s",color:"#1a1a2e",caretColor:"transparent"},resendRow:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"20px"},counterText:{fontSize:"13px",color:"#6b7280"},resendBtn:{background:"none",border:"none",color:"#1a1a2e",fontSize:"13px",fontWeight:600,cursor:"pointer",textDecoration:"underline",padding:0},primaryBtn:{width:"100%",padding:"14px",background:"linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",color:"#fff",border:"none",borderRadius:"10px",fontSize:"15px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",letterSpacing:"0.02em",transition:"opacity 0.2s"},backBtn:{width:"100%",marginTop:"10px",padding:"10px",background:"none",border:"1.5px solid #e5e7eb",borderRadius:"10px",fontSize:"13px",color:"#6b7280",cursor:"pointer",fontWeight:500},skipWrap:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"16px",flexWrap:"wrap",gap:"4px"},skipNote:{fontSize:"12px",color:"#9ca3af"},skipBtn:{background:"none",border:"none",color:"#1a1a2e",fontSize:"12px",fontWeight:600,cursor:"pointer",padding:0},dots:{display:"flex",gap:"4px",alignItems:"center","& span":{width:6,height:6,borderRadius:"50%",background:"#fff",animation:"bounce 1.2s infinite"}}},T7=()=>{const[e,t]=p.useState(null),[n,r]=p.useState(0),[a,i]=p.useState(null),[o,l]=p.useState(null),[c,u]=p.useState(!1),[d,m]=p.useState(!1),h=Ne+"/api/v1/user/streak",w=Ne+"/api/v1/user/wallet";return p.useEffect(()=>{const x=ua("userInfo",{});l(x),t((x==null?void 0:x.streakScore)??0),r((x==null?void 0:x.highestStreakScore)??0);const b=x==null?void 0:x.accessToken,k=x==null?void 0:x.refreshToken;!b||!k||(Pt(h,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${b}`}}).then(g=>{const f=(g==null?void 0:g.streakScore)??0,y=(g==null?void 0:g.highestStreakScore)??0;t(f),r(y);const C={...x,streakScore:f,highestStreakScore:y,lastActiveDate:(g==null?void 0:g.lastActiveDate)??x.lastActiveDate};qo("userInfo",C),l(C)}).catch(g=>{console.error("Streak update failed:",g)}),Pt(w,{headers:{Authorization:`Bearer ${b}`}}).then(g=>i((g==null?void 0:g.balance)??null)).catch(g=>{console.error("Error fetching wallet:",g),i(null)}))},[]),c?s.jsxs("div",{className:"userlevel flex-col",children:[s.jsx("div",{className:"rbackdrop2",style:{opacity:.2}}),s.jsx("div",{className:"profilehead",children:s.jsxs("span",{className:"profilebtn",onClick:()=>u(!1),children:[s.jsx("div",{className:"fnav",children:s.jsx("i",{className:"fa fa-user"})}),s.jsx("div",{className:"profiletxt",children:"View profile details"})]})}),s.jsxs("div",{className:"levelitem",children:[s.jsxs("div",{className:"litem",children:[s.jsx("div",{className:"hint-top",children:"level"}),s.jsx("div",{className:"hint-top",children:"badge"})]}),s.jsxs("div",{className:"litem",children:[s.jsx("div",{className:"hintitems",children:s.jsx("div",{className:"mtext",children:"Rookie level"})}),s.jsx("div",{className:"hintitems",children:s.jsx("div",{className:"pic",children:"🥈"})})]})]}),s.jsxs("div",{className:"scrollx",children:[s.jsxs("div",{className:"levelitem2 dboard",children:[s.jsx("div",{className:"streak",children:"⚡STREAK⚡"}),s.jsxs("div",{className:"streaka",children:[s.jsx("div",{className:"hint",children:"streak score"}),s.jsx("div",{className:"hint",children:"Highest streak"})]}),s.jsxs("div",{className:"streaks",children:[s.jsx("div",{className:"hint streaknumbs",children:e??0}),s.jsx("div",{className:"hint streaknumbs",children:n??0})]}),s.jsx("div",{className:"streak",children:"⭐".repeat(10)})]}),s.jsxs("div",{className:"earndiv",children:[s.jsxs("div",{className:"earntext",children:[s.jsx("div",{className:"fnav",children:"💰"}),"Earned"]}),s.jsx("img",{src:E7,className:"backdrop"}),s.jsxs("div",{className:"earnval",children:["GHS: ",a??"_____"]})]})]})]}):s.jsxs("div",{className:"userlevel flex-col",children:[d&&s.jsx(z7,{onSuccess:()=>{m(!1);const x={...ua("userInfo",{}),isVerified:!0};qo("userInfo",x),l(x)},onClose:()=>m(!1)}),s.jsx("div",{className:"profilehead",children:s.jsxs("span",{className:"profilebtn",onClick:()=>u(!0),children:[s.jsx("div",{className:"fnav",children:s.jsx("i",{className:"fa fa-user"})}),s.jsx("div",{className:"profiletxt",children:"User Wallet and streak"})]})}),s.jsx("div",{className:"rbackdrop2",style:{opacity:.3}}),s.jsxs("div",{className:"profilebox",children:[s.jsx("div",{className:"profileleft",children:s.jsxs("fieldset",{children:[s.jsx("legend",{children:s.jsxs("div",{className:"ptitleinfo",children:[s.jsx("div",{className:"iconb",children:s.jsx("i",{className:"fa fa-plus"})}),"Extras"]})}),s.jsx("div",{className:"pinfoboxitemfirst",children:s.jsxs("div",{className:"pitop",children:[s.jsx("div",{className:"labelicon",children:s.jsx("div",{className:"iconb",children:s.jsx("i",{className:"fa fa-check"})})}),s.jsxs("div",{className:"labelbox",children:[s.jsx("div",{className:"fstlabel",children:"User Status:"}),s.jsxs("div",{className:"fstname",children:[o!=null&&o.isVerified?s.jsx("div",{className:"otpsuccess",children:"OTP Verified"}):s.jsx("div",{className:"otpfailed",children:"Not Verified"}),o!=null&&o.isVerified?"":s.jsx("div",{className:"verify",onClick:()=>m(!0),children:"verify"})]})]})]})}),s.jsx("div",{className:"pinfoboxitemfirst",children:s.jsxs("div",{className:"pitop",children:[s.jsx("div",{className:"labelicon",children:s.jsx("div",{className:"iconb",children:s.jsx("i",{className:"fa fa-calendar-check"})})}),s.jsxs("div",{className:"labelbox",children:[s.jsx("div",{className:"fstlabel",children:"Last Active:"}),s.jsx("div",{className:"fstname",children:o!=null&&o.lastActiveDate?new Date(o.lastActiveDate).toLocaleDateString():"N/A"})]})]})}),s.jsx("div",{className:"pinfoboxitemfirst",children:s.jsxs("div",{className:"pitop",children:[s.jsx("div",{className:"labelicon",children:s.jsx("div",{className:"iconb",children:s.jsx("i",{className:"fa fa-calendar"})})}),s.jsxs("div",{className:"labelbox",children:[s.jsx("div",{className:"fstlabel",children:"Date Created:"}),s.jsx("div",{className:"fstname",children:o!=null&&o.dateCreated?new Date(o.dateCreated).toLocaleDateString():"N/A"})]})]})})]})}),s.jsxs("div",{className:"profileright",children:[s.jsx("div",{className:"pinfohead",children:s.jsxs("div",{className:"pinfotop",children:[s.jsx("div",{className:"iconb",children:s.jsx("i",{className:"fa fa-user"})}),s.jsx("div",{className:"ptitleinfo",children:"Profile details"})]})}),s.jsxs("div",{className:"pinfobox1",children:[s.jsxs("div",{className:"pinfoboxitem",children:[s.jsx("div",{className:"pinfoboxitemfirst",children:s.jsxs("div",{className:"pitop",children:[s.jsx("div",{className:"labelicon",children:s.jsx("div",{className:"fnav",children:s.jsx("i",{className:"fa fa-person"})})}),s.jsxs("div",{className:"labelbox",children:[s.jsx("div",{className:"fstlabel",children:"First Name"}),s.jsx("div",{className:"fstname",children:(o==null?void 0:o.firstName)??""})]})]})}),s.jsx("div",{className:"pinfoboxitemfirst",children:s.jsxs("div",{className:"pitop",children:[s.jsx("div",{className:"labelicon",children:s.jsx("div",{className:"fnav",children:s.jsx("i",{className:"fa fa-person"})})}),s.jsxs("div",{className:"labelbox",children:[s.jsx("div",{className:"fstlabel",children:"Last Name"}),s.jsx("div",{className:"fstname",children:(o==null?void 0:o.lastName)??""})]})]})})]}),s.jsx("div",{className:"pinfoboxitem",children:s.jsxs("div",{className:"pinfoboxitemsecond",children:[s.jsx("div",{className:"fnav",children:s.jsx("i",{className:"fa fa-envelope"})}),s.jsxs("div",{className:"labelbox",children:[s.jsx("div",{className:"fstlabel",children:"Email:"}),s.jsx("div",{className:"fstname",children:(o==null?void 0:o.email)??""})]})]})})]}),s.jsx("div",{className:"pinfohead",children:s.jsxs("div",{className:"pinfotop",children:[s.jsx("div",{className:"fnav",children:s.jsx("i",{className:"fa fa-zap"})}),s.jsx("div",{className:"ptitleinfo",children:"User Credits"})]})}),s.jsx("div",{className:"pinfobox1",children:s.jsx("div",{className:"pinfoboxitem",children:s.jsx("div",{className:"pinfoboxitemsecond",children:s.jsxs("div",{className:"pitop",children:[s.jsx("div",{className:"labelicon",children:s.jsx("div",{className:"fnav",children:s.jsx("i",{className:"fa fa-zap"})})}),s.jsxs("div",{className:"labelbox",children:[s.jsx("div",{className:"fstlabel",children:"Remaining Credits:"}),s.jsx("div",{className:"fstname",children:(o==null?void 0:o.credits)??0})]})]})})})}),s.jsx("div",{className:"pinfohead",children:s.jsxs("div",{className:"pinfotop",children:[s.jsx("div",{className:"fnav",children:s.jsx("i",{className:"fa fa-phone"})}),s.jsx("div",{className:"ptitleinfo",children:"Phone"})]})}),s.jsx("div",{className:"pinfobox1",children:s.jsx("div",{className:"pinfoboxitem",children:s.jsx("div",{className:"pinfoboxitemsecond",children:s.jsxs("div",{className:"pitop",children:[s.jsx("div",{className:"labelicon",children:s.jsx("div",{className:"fnav",children:s.jsx("i",{className:"fa fa-phone"})})}),s.jsxs("div",{className:"labelbox",children:[s.jsx("div",{className:"fstlabel",children:"Contact Number:"}),s.jsx("div",{className:"fstname",children:(o==null?void 0:o.msisdn)??""})]})]})})})})]})]})]})},P7="/uelearn/assets/coinstacked-c9cb3f73.png",O7="/uelearn/assets/racoon_earn-40e17a16.jpg",R7=()=>(p.useEffect(()=>{location.href="#earn"},[]),s.jsx("div",{className:"userlevel",children:s.jsxs("div",{className:"sectionearn",children:[s.jsxs("div",{className:"levelitem2 earnbox",id:"earn",style:{height:350},children:[s.jsx("img",{src:P7,className:"coinstack",alt:"",srcSet:""}),s.jsx("div",{className:"streak",children:"Earn"}),s.jsx("a",{href:"#begin",children:s.jsxs("div",{className:"seemore",children:[s.jsx("div",{className:"begin",children:"Begin"}),s.jsx(qf,{})]})}),s.jsx("img",{src:O7,className:"racoon"}),s.jsxs("div",{className:"wish",children:[s.jsx("span",{style:{fontWeight:600},children:" What is this about?"})," ( ",s.jsx("div",{className:"fnav",children:"💸"}),"GHS 1,500+ Salary )"]}),s.jsx("div",{className:"tovid",children:"Watch this short video for a precise walk through?"}),s.jsx("div",{className:"watch",children:s.jsxs("div",{className:"sp",children:[s.jsx("div",{className:"fnav",children:s.jsx("i",{className:"fa fa-play"})})," Watch me 👀",s.jsx("div",{className:"prem2"})]})})]}),s.jsxs("div",{className:"levelitem2 earnbox",id:"begin",children:[s.jsx("a",{href:"#earn",children:s.jsxs("div",{className:"seeless",children:[s.jsx("div",{className:"begin",children:"Return"}),s.jsx(i1,{})]})}),"Earn"]})]})})),L7="/uelearn/assets/leader-e36dfd31.png",M7="/uelearn/assets/racoon_leaderboard-156fd51b.jpg",$7=()=>{const[e,t]=p.useState(0);return s.jsxs("div",{className:"rlevel",children:[s.jsx("img",{src:M7,className:"racoonlboard",alt:"",srcSet:""}),s.jsxs("div",{className:"leaderb",children:[s.jsx("img",{src:L7,className:"refbadge",alt:"",srcSet:""}),s.jsx("div",{className:"refpage",style:{fontSize:30,width:200},children:"🏁 Leaderboard"}),s.jsx("div",{className:"streak"})]}),s.jsxs("div",{className:"yourrefs",children:["You came ",e?e>3?"th":e>2?"rd":e>1?"nd":"st":""]}),s.jsxs("div",{className:"reflist",children:[Array(10).fill("").map((n,r)=>s.jsxs("div",{className:"refblock",children:[s.jsx("div",{className:"refblockleft"}),s.jsxs("div",{className:"refblockcenter",children:[s.jsx("div",{className:"refblockcenterdivone",children:"Benjamin"}),s.jsxs("div",{className:"refblockcenterdiv",children:[" ",new Date().toISOString().slice(0,10)]})]}),s.jsxs("div",{className:"refblockend",children:[s.jsx("div",{className:"fnav",children:s.jsx("div",{className:"fa fa-zap"})}),s.jsx("div",{className:"fnav",children:r+1})]})]},""+r)),s.jsx("div",{className:"streak",style:{margin:10}})]})]})},I7="/uelearn/assets/bob-b701607b.jpg",A7="/uelearn/assets/jessy-e52b4d9f.jpg",T2="/uelearn/assets/brown-d1e88877.jpg",P2="/uelearn/assets/guylogs-3acc9d52.png",V7="/uelearn/assets/reff-0ef4e2a9.png",H7=[I7,A7,P2,T2],D7=()=>{const[e,t]=p.useState(!0),[n,r]=p.useState(""),[a,i]=p.useState([]);p.useState(0);const[o,l]=p.useState(!1),[c,u]=p.useState(!1),[d,m]=p.useState("");let h;try{h=JSON.parse(localStorage.getItem("userInfo"))}catch(j){console.error("Error parsing userInfo:",j),h=null}let w=h==null?void 0:h.userReferalCode;p.useEffect(()=>{w&&r(`${w}`)},[]);const x=()=>{if(!navigator.clipboard){b("Clipboard API not supported");return}navigator.clipboard.writeText(n).then(()=>{m("copied successfully !!!"),setTimeout(()=>{m("")},3e3),t(!1),setTimeout(()=>{t(!0)},1e3)}).catch(j=>{console.error("Copy failed:",j),b("Failed to copy to clipboard")})},b=j=>{m(j),u(!0),setTimeout(()=>{u(!1)},6e3)};p.useEffect(()=>{if(c){const j=document.querySelector(".successmessage");j&&(/success/gim.test(d)?j.textContent="🟢"+d+"🥳🥳🥳":j.textContent="🔴"+d)}},[d,c]);let k;try{k=JSON.parse(localStorage.getItem("userInfo"))}catch(j){console.error("Error parsing userInfo:",j),k=null}let g=Ne+"/api/v1/user/referals",f=k==null?void 0:k.accessToken,y=k==null?void 0:k.refreshToken;const C={headers:{Authorization:`Bearer ${f}`}};return p.useEffect(()=>{f&&y?Pt(g,C).then(j=>{Array.isArray(j)?i(j):(console.warn("Unexpected data format:",j),i([])),l(!0)}).catch(j=>{console.error("Fetch error:",j),b(`${j}`.toLowerCase().replace(/typeerror/gim,"Sorry")),l(!0)}):l(!0)},[g,f,y]),s.jsxs("div",{className:"rlevel",children:[s.jsx("img",{src:V7,className:"refbadge",alt:""}),c&&s.jsx("div",{className:"successmessage",style:{position:"absolute",display:"flex",margin:"auto"}}),s.jsxs("div",{className:"levelitem2 reffirstboxtop",children:[s.jsxs("div",{className:"refpage",style:{fontSize:40,width:200},children:[s.jsx("div",{className:"iconb",children:s.jsx("i",{style:{fontSize:20},className:"fa fa-users fa-dark"})}),"Referals"]}),s.jsxs("div",{className:"refer",children:[s.jsxs("div",{className:"hint",children:[s.jsx("div",{className:"fnav",children:s.jsx("i",{className:"fa fa-code fa-dark"})}),"Referal Code"]}),s.jsx("input",{value:n.length?n:"***",type:"text",readOnly:!0,className:"ref"}),s.jsxs("div",{className:"copy",onClick:x,children:[s.jsx("div",{className:"fnav",children:s.jsx("i",{className:"fa fa-copy fa-dark"})}),e?" Copy":"Copied !",s.jsx("div",{className:"prem4"})]})]}),s.jsx("div",{className:"streak"})]}),s.jsxs("div",{className:"yourrefs",children:[s.jsx("div",{className:"fnav",children:s.jsx("i",{className:"fa fa-users fa-dark"})}),"You have (",((a==null?void 0:a.length)??0)>0?a.length:0,") referals"]}),s.jsxs("div",{className:"reflist",children:[((a==null?void 0:a.length)??0)>0?a.map((j,S)=>{var N,E,P,T;return s.jsxs("div",{className:"refblock",children:[s.jsx("div",{className:"refblockleft",style:{backgroundImage:(N=j.referedUserDetails)!=null&&N.highestStreakScore?`url(${H7[`${j.referedUserDetails.highestStreakScore}`.length<4?`${j.referedUserDetails.highestStreakScore}`.length-1:3]})`:""}}),s.jsxs("div",{className:"refblockcenter",children:[s.jsx("div",{className:"refblockcenterdivone",children:((E=j.referedUserDetails)==null?void 0:E.firstName)??"User"}),s.jsxs("div",{className:"refblockcenterdiv",children:[" ",(P=j.referedUserDetails)!=null&&P.dateCreated?new Date(j.referedUserDetails.dateCreated).toISOString().slice(0,10):"N/A"]})]}),s.jsxs("div",{className:"refblockend",children:[s.jsx(Jc,{className:"micon"}),((T=j.referedUserDetails)==null?void 0:T.highestStreakScore)??0]})]},""+S)}):!o&&Array(3).fill("").map((j,S)=>s.jsxs("div",{className:"refblock refloader",children:[s.jsx("div",{style:{visibility:"hidden"},className:"refblockleft "}),s.jsxs("div",{style:{visibility:"hidden"},className:"refblockcenter",children:[s.jsx("div",{style:{visibility:"hidden"},className:"refblockcenterdivone",children:"Benjamin"}),s.jsxs("div",{style:{visibility:"hidden"},className:"refblockcenterdiv",children:[" ",new Date().toISOString().slice(0,10)]})]}),s.jsxs("div",{style:{visibility:"hidden"},className:"refblockend",children:[s.jsx(Jc,{className:"micon"}),"Loading..."]})]},j+""+S)),s.jsx("div",{className:"streak",style:{margin:10}})]})]})},F7=()=>{const[e,t]=p.useState("options"),[n,r]=p.useState(""),[a,i]=p.useState(""),[o,l]=p.useState(null),c=[{id:1,title:"Teaching Service",icon:"🎓",description:"Teach in secondary schools across the country",requirements:"Degree in any field, passion for education",benefits:["Monthly allowance","Housing stipend","Teaching certificate","Priority for education roles"],locations:["All regions","Rural areas especially needed"],duration:"12 months",popularity:85,matchScore:92},{id:2,title:"Healthcare Service",icon:s.jsx(p8,{className:"icon"}),description:"Support healthcare delivery in hospitals and clinics",requirements:"Medical, Nursing, or Allied Health degrees",benefits:["Clinical experience","Professional network","Health insurance","Skills certificate"],locations:["District hospitals","Community clinics"],duration:"12 months",popularity:78,matchScore:45},{id:3,title:"Agricultural Service",icon:s.jsx(bh,{className:"icon"}),description:"Support agricultural extension and food security",requirements:"Agriculture, Biology, or related degrees",benefits:["Farming resources","Training programs","Rural allowance","Entrepreneurship support"],locations:["Rural communities","Agricultural zones"],duration:"12 months",popularity:65,matchScore:30},{id:4,title:"Administrative Service",icon:s.jsx(v8,{className:"icon"}),description:"Work in government agencies and district assemblies",requirements:"Any degree, good organizational skills",benefits:["Office experience","Government connections","Career development","Mentorship"],locations:["Urban centers","District capitals"],duration:"12 months",popularity:90,matchScore:88}],u=["Greater Accra","Ashanti","Western","Eastern","Central","Volta","Northern","Upper East","Upper West"],d=["Teaching","Healthcare","Agriculture","Administration","Engineering","Finance"],m=[{title:"Based on your Computer Science background",tip:"Consider teaching ICT or applying for administrative roles in tech hubs. Your skills are highly valuable in urban centers.",priority:"High match potential"},{title:"Location Strategy",tip:"While urban postings are competitive, rural areas offer faster career growth and additional allowances.",priority:"Strategic advice"},{title:"Timeline Alert",tip:"Registration opens in 3 months. Prepare your documents now - passport photos, academic transcripts, and medical reports.",priority:"Urgent"}],h=[{month:"Month 1-2",activity:"Application and documentation",status:"upcoming"},{month:"Month 3",activity:"Posting announcements",status:"upcoming"},{month:"Month 4",activity:"Registration and orientation",status:"upcoming"},{month:"Month 5-16",activity:"Active service period",status:"upcoming"}],w=[{name:"Michael Ofori",role:"Former Teaching Service",achievement:"Now Education Minister's aide",quote:"My service year opened doors I never imagined."},{name:"Dr. Sarah Mensah",role:"Healthcare Service Alumni",achievement:"Now leading regional health initiative",quote:"The rural posting challenged and shaped me."}];return s.jsxs("div",{className:"ns-container",children:[s.jsxs("div",{className:"ambient-lights",children:[s.jsx("div",{className:"ambient-light-1"}),s.jsx("div",{className:"ambient-light-2"}),s.jsx("div",{className:"ambient-light-3"})]}),s.jsxs("div",{className:"ns-content",children:[s.jsxs("div",{className:"header-section",children:[s.jsx("div",{className:"header-glow"}),s.jsxs("div",{className:"header-inner",children:[s.jsxs("div",{className:"badge",children:[s.jsx(As,{className:"badge-icon"}),s.jsx("span",{className:"badge-text",children:"National Service Advisor"})]}),s.jsx("h1",{className:"main-title",children:"Your National Service Journey"}),s.jsx("p",{className:"subtitle",children:"Make informed decisions about your service year with AI-powered insights and personalized recommendations"})]})]}),s.jsx("div",{className:"stats-grid",children:[{label:"Service Options",value:"4+",icon:s.jsx(Yc,{}),color:"blue"},{label:"Available Locations",value:"9",icon:s.jsx(Ms,{}),color:"purple"},{label:"Success Rate",value:"94%",icon:s.jsx(Kc,{}),color:"green"},{label:"User Satisfaction",value:"4.8/5",icon:s.jsx(am,{}),color:"yellow"}].map((x,b)=>s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:`stat-card-glow stat-glow-${x.color}`}),s.jsxs("div",{className:"stat-card-inner",children:[s.jsxs("div",{className:"stat-header",children:[s.jsx("div",{className:`stat-icon stat-icon-${x.color}`,children:x.icon}),s.jsx("span",{className:"stat-value",children:x.value})]}),s.jsx("p",{className:"stat-label",children:x.label})]})]},b))}),s.jsx("div",{className:"tabs-container",children:s.jsx("div",{className:"tabs-header",children:[{id:"options",label:"Service Options",icon:s.jsx(Yc,{})},{id:"ai-analysis",label:"AI Analysis",icon:s.jsx(As,{})},{id:"timeline",label:"Timeline",icon:s.jsx(i5,{})},{id:"stories",label:"Success Stories",icon:s.jsx(xa,{})}].map(x=>s.jsxs("button",{onClick:()=>t(x.id),className:`tab-button ${e===x.id?"tab-active":""}`,children:[s.jsx("span",{className:"tab-icon",children:x.icon}),x.label,e===x.id&&s.jsx("div",{className:"tab-indicator"})]},x.id))})}),s.jsxs("div",{className:"tab-content",children:[e==="options"&&s.jsxs("div",{children:[s.jsxs("div",{className:"filters",children:[s.jsxs("div",{className:"filter-select",children:[s.jsx(Ms,{className:"filter-icon"}),s.jsxs("select",{value:n,onChange:x=>r(x.target.value),className:"select-input",children:[s.jsx("option",{value:"",children:"All Locations"}),u.map(x=>s.jsx("option",{value:x,children:x},x))]})]}),s.jsxs("div",{className:"filter-select",children:[s.jsx(Mh,{className:"filter-icon"}),s.jsxs("select",{value:a,onChange:x=>i(x.target.value),className:"select-input",children:[s.jsx("option",{value:"",children:"All Fields"}),d.map(x=>s.jsx("option",{value:x,children:x},x))]})]}),s.jsx("button",{className:"find-btn",children:"Find Matches"})]}),s.jsx("div",{className:"cards-grid",children:c.map(x=>s.jsxs("div",{onMouseEnter:()=>l(x.id),onMouseLeave:()=>l(null),className:"service-card",children:[s.jsx("div",{className:"service-card-glow"}),s.jsxs("div",{className:"service-card-inner",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("div",{className:"card-icon",children:x.icon}),s.jsxs("div",{children:[s.jsx("h3",{className:"card-title",children:x.title}),s.jsxs("div",{className:"card-duration",children:[s.jsx(o1,{className:"duration-icon"}),s.jsx("span",{className:"duration-text",children:x.duration})]})]}),s.jsx("div",{className:"match-badge",children:s.jsxs("span",{className:"match-text",children:[x.matchScore,"% Match"]})})]}),s.jsx("p",{className:"card-description",children:x.description}),s.jsxs("div",{className:"benefits-section",children:[s.jsx("p",{className:"benefits-label",children:"Benefits"}),s.jsx("div",{className:"benefits-list",children:x.benefits.slice(0,3).map((b,k)=>s.jsx("span",{className:"benefit-tag",children:b},k))})]}),s.jsxs("div",{className:"card-footer",children:[s.jsxs("div",{className:"location-info",children:[s.jsx(Ms,{className:"location-icon"}),s.jsx("span",{children:x.locations[0]})]}),s.jsxs("button",{className:"learn-btn",children:["Learn More ",s.jsx(mh,{})]})]})]})]},x.id))})]}),e==="ai-analysis"&&s.jsxs("div",{className:"ai-analysis",children:[s.jsxs("div",{className:"ai-card",children:[s.jsx("div",{className:"ai-card-glow"}),s.jsxs("div",{className:"ai-card-inner",children:[s.jsxs("div",{className:"ai-header",children:[s.jsx("div",{className:"ai-header-icon",children:s.jsx(As,{})}),s.jsx("h3",{className:"ai-title",children:"AI-Powered Analysis"})]}),s.jsxs("div",{className:"stats-row",children:[s.jsxs("div",{className:"stat-box",children:[s.jsx("p",{className:"stat-box-label",children:"Your Profile Match"}),s.jsx("p",{className:"stat-box-value",children:"88%"}),s.jsx("p",{className:"stat-box-note",children:"Based on your Computer Science background"})]}),s.jsxs("div",{className:"stat-box",children:[s.jsx("p",{className:"stat-box-label",children:"Recommended Service"}),s.jsx("p",{className:"stat-box-value-text",children:"Teaching or Admin"}),s.jsx("p",{className:"stat-box-note",children:"Best alignment with your skills"})]}),s.jsxs("div",{className:"stat-box",children:[s.jsx("p",{className:"stat-box-label",children:"Preferred Location"}),s.jsx("p",{className:"stat-box-value-text",children:"Greater Accra"}),s.jsx("p",{className:"stat-box-note",children:"High demand for tech skills"})]})]}),s.jsx("div",{className:"tips-list",children:m.map((x,b)=>s.jsx("div",{className:"tip-card",children:s.jsxs("div",{className:"tip-content",children:[s.jsx(e5,{className:"tip-icon"}),s.jsxs("div",{children:[s.jsxs("div",{className:"tip-header",children:[s.jsx("h4",{className:"tip-title",children:x.title}),s.jsx("span",{className:"tip-priority",children:x.priority})]}),s.jsx("p",{className:"tip-text",children:x.tip})]})]})},b))})]})]}),s.jsxs("div",{className:"checklist-card",children:[s.jsxs("h3",{className:"checklist-title",children:[s.jsx(s1,{className:"checklist-icon"}),"Required Documents Checklist"]}),s.jsx("div",{className:"checklist-grid",children:[{name:"Academic Transcripts",icon:s.jsx(n8,{})},{name:"National ID Card",icon:s.jsx(k8,{})},{name:"Passport Photos (4 copies)",icon:s.jsx(u5,{})},{name:"Medical Certificate",icon:s.jsx(Q8,{})},{name:"Recommendation Letter",icon:s.jsx(f2,{})},{name:"Curriculum Vitae",icon:s.jsx(uh,{})}].map((x,b)=>s.jsxs("div",{className:"checklist-item",children:[s.jsx("div",{className:"checklist-box"}),s.jsx("span",{className:"checklist-name",children:x.name})]},b))})]})]}),e==="timeline"&&s.jsxs("div",{className:"timeline-container",children:[s.jsx("div",{className:"timeline-line"}),s.jsx("div",{className:"timeline-items",children:h.map((x,b)=>s.jsxs("div",{className:"timeline-item",children:[s.jsx("div",{className:"timeline-dot",children:s.jsx("span",{className:"timeline-number",children:b+1})}),s.jsxs("div",{className:"timeline-card",children:[s.jsx("h3",{className:"timeline-month",children:x.month}),s.jsx("p",{className:"timeline-activity",children:x.activity}),s.jsxs("div",{className:"timeline-status",children:[s.jsx("div",{className:"status-dot"}),s.jsxs("span",{className:"status-text",children:["Status: ",x.status]})]})]})]},b))})]}),e==="stories"&&s.jsx("div",{className:"stories-grid",children:w.map((x,b)=>s.jsxs("div",{className:"story-card",children:[s.jsx("div",{className:"story-card-glow"}),s.jsxs("div",{className:"story-card-inner",children:[s.jsxs("div",{className:"story-author",children:[s.jsx("div",{className:"story-avatar",children:s.jsx(zm,{})}),s.jsxs("div",{children:[s.jsx("h4",{className:"story-name",children:x.name}),s.jsx("p",{className:"story-role",children:x.role})]})]}),s.jsxs("p",{className:"story-quote",children:['"',x.quote,'"']}),s.jsxs("div",{className:"story-achievement",children:[s.jsx(Kc,{className:"achievement-icon"}),s.jsx("span",{className:"achievement-text",children:x.achievement})]})]})]},b))})]}),s.jsxs("div",{className:"cta-section",children:[s.jsx("button",{className:"cta-button",children:"Start Your Application Process"}),s.jsx("p",{className:"cta-note",children:"Get personalized guidance throughout your national service journey"})]})]}),s.jsx("style",{children:`
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
      `})]})},B7=()=>s.jsx("div",{className:"userlevel",children:s.jsxs("div",{className:"levelitem2 board",children:[s.jsx("div",{className:"streak",children:"Job Application Guide"}),s.jsxs("div",{className:"missing",children:[s.jsxs("div",{className:"missingtext",children:[s.jsx(d2,{className:"micon"}),"This page is currently under construction"]}),s.jsx("div",{className:"construction",children:"🚧"})]}),s.jsx("div",{className:"streak"})]})}),U7=()=>s.jsx("div",{className:"userlevel",children:s.jsxs("div",{className:"levelitem2 board",children:[s.jsx("div",{className:"streak",children:"Our digital Products"}),s.jsx("div",{className:"streak"})]})}),q7=()=>s.jsx("div",{className:"userlevel",children:s.jsx("div",{className:"userlevel",children:s.jsxs("div",{className:" advertboard",children:[s.jsx("div",{className:"streak",children:"Run your Adds here"}),s.jsx("div",{className:"iconlarge",children:"🎪"}),s.jsx("div",{className:"wish",children:"What is this section about?"}),s.jsx("div",{className:"tovid",children:"Watch this short video for a precise walk through?"}),s.jsx("div",{className:"watch",children:s.jsxs("div",{className:"sp",children:[s.jsx("div",{className:"fnav",children:s.jsx("i",{className:"fa fa-play"})})," Watch me 👀",s.jsx("div",{className:"prem2"})]})})]})})});function W7({currentView:e,setcurrentView:t}){const n="dashboard-nss-referal-solve-earn-leaderboard-advert-job".split("-"),r=()=>{confirm("Do you wish to logout")&&(localStorage.removeItem("userInfo"),location.reload())};return s.jsxs("div",{className:"profile",children:[s.jsx("div",{className:"wrap",children:e==n[0]?s.jsx(T7,{}):e==n[1]?s.jsx(F7,{}):e==n[2]?s.jsx(D7,{}):e==n[3]?s.jsx(U7,{}):e==n[4]?s.jsx(R7,{}):e==n[5]?s.jsx($7,{}):e==n[6]?s.jsx(q7,{}):e==n[7]?s.jsx(B7,{}):s.jsx(Q7,{})}),s.jsxs("div",{className:"onmenu",children:[s.jsx("div",{onClick:r,className:"in",children:s.jsxs("div",{className:"insp",children:[s.jsx("div",{className:"prem4"}),s.jsx("span",{className:"fnav",children:s.jsx("i",{className:"fa fa-power-off fa-dark"})}),"Logout"]})}),s.jsx("div",{onClick:()=>{t("dashboard")},className:"in",children:s.jsxs("div",{className:"insp",children:[s.jsx("div",{className:"prem4"}),s.jsx("span",{className:"fnav",children:s.jsx("i",{className:"fa fa-windows fa-dark"})}),"General"]})}),s.jsx("div",{onClick:()=>{t("referal")},className:"in",children:s.jsxs("div",{className:"insp",children:[s.jsx("div",{className:"prem4"}),s.jsx("span",{className:"fnav",children:s.jsx("i",{className:"fa fa-users fa-dark"})}),"Referal"]})}),s.jsx("div",{onClick:()=>{t("earn")},className:"in",children:s.jsxs("div",{className:"insp",children:[s.jsx("div",{className:"prem4"}),s.jsx("span",{className:"fnav",children:s.jsx("i",{className:"fa fa-dollar fa-dark"})}),"Earn"]})}),s.jsx("div",{onClick:()=>{t("nss")},className:"in",children:s.jsxs("div",{className:"insp",children:[s.jsx("div",{className:"prem4"}),s.jsx("span",{className:"fnav",children:s.jsx("i",{className:"fa fa-briefcase fa-dark"})}),"NSS guide"]})}),s.jsx("div",{onClick:()=>{t("solve")},className:"in",children:s.jsxs("div",{className:"insp",children:[s.jsx("div",{className:"prem4"}),s.jsx("span",{className:"fnav",children:s.jsx("i",{className:"fa fa-star fa-dark"})}),"Solve with AI"]})}),s.jsx("div",{onClick:()=>{t("advert")},className:"in",children:s.jsxs("div",{className:"insp",children:[s.jsx("div",{className:"prem4"}),s.jsx("span",{className:"fnav",children:s.jsx("i",{className:"fa fa-shop fa-dark"})}),"Advertise"]})}),s.jsx("div",{onClick:()=>{t("job")},className:"in",children:s.jsxs("div",{className:"insp",children:[s.jsx("div",{className:"prem4"}),s.jsx("span",{className:"fnav",children:s.jsx("i",{className:"fa fa-certificate fa-dark"})}),"Job guide"]})}),s.jsx("div",{onClick:()=>{t("leaderboard")},className:"in",children:s.jsxs("div",{className:"insp",children:[s.jsx("div",{className:"prem4"}),s.jsx("span",{className:"fnav",children:s.jsx("i",{className:"fa fa-medal fa-dark"})}),"leaderboard"]})})]})]})}const Q7=()=>s.jsx("div",{className:"userlevel",children:s.jsxs("div",{className:"missing",children:[s.jsxs("div",{className:"missingtext",children:[s.jsx(d2,{className:"micon"}),"To go back, click the search box"]}),s.jsx("div",{className:"construction",children:"♒"}),s.jsx("div",{className:"missingtext",children:"Use the links below to navigate through this space"})]})}),dr=({opacity:e,indexed:t,mainlogo:n})=>s.jsx("div",{className:"texttit",id:"waiting",style:{zIndex:t},children:s.jsxs("div",{className:"mtitle",id:"waittxt",style:{opacity:e},children:[s.jsx("div",{className:"rbackdrop"}),s.jsx("img",{src:v1,className:"racoonload",alt:""}),s.jsxs("div",{className:"loading",children:[s.jsx("div",{className:"logo",children:s.jsx("img",{src:n,width:"120",alt:""})}),s.jsx("div",{className:"loadtext",id:"loadtext","data-text":"Loading....",children:" Loading...."})]}),s.jsx("span",{style:{color:"rgba(205,205,245,.3)"},children:"Questions for various course codes"})]})}),Z7=({setselectModel:e,selectlink:t,getpayload:n,setselectedVal:r,selectedVal:a})=>{const[i,o]=p.useState({}),[l,c]=p.useState(null),[u,d]=p.useState(!1),m=k=>{r(k.target.value)},h=k=>{k.preventDefault(),n(t),e(!1)},w=()=>{e(!1)},x=()=>{d(!1),c(null),fetch(`${ca}/api/files/models`).then(k=>{if(!k.ok)throw new Error(`HTTP error! status: ${k.status}`);return k.json()}).then(k=>{!k||typeof k.modelsobject!="object"?(console.warn("Invalid response structure:",k),c("Invalid model data received"),o({})):(o(k.modelsobject),c(null)),d(!0)}).catch(k=>{console.error("Error fetching models:",k),c(k.message||"Failed to load models. Please check your connection."),d(!0)})},b=k=>{k.preventDefault(),c("Try again.")};return p.useEffect(()=>{x()},[]),s.jsx("div",{className:"mselect",children:s.jsxs("div",{className:"mcontainer",children:[s.jsx("div",{className:"rbackdrop",style:{transform:"rotate(180deg)",opacity:.3,height:"600px"}}),s.jsx("img",{src:v1,className:"racoonload",style:{borderRadius:0,height:150},alt:""}),s.jsx("div",{className:"closeme",onClick:w,children:s.jsx("i",{className:"fa fa-close"})}),s.jsxs("div",{className:"mchoice",children:[s.jsx("span",{className:"fnav",children:s.jsx("span",{className:".solstar bga",children:"💫"})}),s.jsx("br",{}),s.jsx("span",{className:"mchoice",style:{fontSize:20,fontWeight:700},children:"Choose AI Model"})]}),s.jsxs("div",{className:"mchoice2",children:[s.jsx("div",{className:"fnav",children:s.jsx("i",{className:"fa fa-box fa-dark"})}),"Proceed with your prefered AI model:"]}),s.jsx("span",{className:"mchoice3",children:" "+a}),l?s.jsxs("div",{className:"mtop",children:[s.jsxs("div",{className:"list",style:{height:60,display:"flex",alignItems:"center",color:"#ff6b6b",paddingRight:"10px"},children:["⚠️ ",l]}),s.jsx("div",{style:{color:"white",cursor:"pointer"},className:"download",onClick:x,children:"Retry"})]}):Object.keys(i).length>0?s.jsxs("div",{className:"mtop",children:[s.jsx("input",{list:"list",onChange:m,className:"select"}),s.jsx("datalist",{id:"list",value:a,children:Object.keys(i).map((k,g)=>s.jsx("option",{value:i[k],children:k},g+"-"))})]}):s.jsx("div",{className:"mtop",children:s.jsx("div",{className:"list",style:{height:60,display:"flex",alignItems:"center",justifyContent:"center"},children:u?"No models available":"Loading models..."})}),s.jsxs("button",{className:"mbottom download",style:{color:"white"},onClick:t&&a?h:b,children:[s.jsx("span",{className:"fnav",children:s.jsx("i",{className:"fa fa-arrow-right"})}),"continue",s.jsx("span",{className:"prem4"})]})]})})},G7=({setsearching:e,selectedVal:t,setselectedVal:n,payload:r,find:a,setcourseName:i,setfind:o,bar:l,setRefreshing:c,pdf:u,NetworkError:d,setdataerror:m,setcredits:h,pdflink:w,courseName:x,actualDlink:b,credits:k,dataerror:g,setpdflink:f,setactualDlink:y})=>{const[C,j]=p.useState(!1),[S,N]=p.useState(!1),[E,P]=p.useState(""),[T,H]=p.useState(""),[Ce,ce]=p.useState(!1),[Le,kt]=p.useState(""),[Je,Me]=p.useState(!1),[z,M]=p.useState("loading...");p.useState("");const[$,q]=p.useState(""),Y=(U,K)=>{i(K),ce(!0),kt(U)},De=async U=>{var O;let K=JSON.parse(localStorage.userInfo).pStatus;ce(!1),M("loading..."),m(""),j(!0),N(!1),H("");let Fe=U.split("=")[1];try{const V=await fetch(`${ca}/api/files/${Fe}`);if(!V.ok)throw new Error(`Failed to fetch PDF: ${V.status}`);const ye=await V.json();f(ye.previewLink),q(ye.raw),y(ye.directDownload),ie(Fe),j(!1);const B={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:Fe,selectedVal:t,premiumstatus:K??"premiumstatus"})},fe=await Pt(`${Ne}/api/v1/request/solutions`,B);if(fe!=null&&fe.error)throw new Error(`${fe.error.details??fe.error.message??fe??"Failed to fetch solution"}`);if(!fe)throw console.log("check for error details here",fe),new Error("No response from solutions API");let Be,Ke;try{Be=((O=fe.api_response)==null?void 0:O.data)||fe,Ke=fe.remaining_credits??0,h(Ke);const Ct=JSON.parse(localStorage.getItem("userInfo")||"{}");Ct.credits=Ke,localStorage.setItem("userInfo",JSON.stringify(Ct))}catch{Be=fe}y(Be.directDownload);const $n=Be.extractedText,mn=(Ct=>Ct.includes("h3")?Ct:(console.log("Message for dev:AI response indicates an error:",Ct),m(Ct),""))($n);M(mn||""),Be.error?m(Be.error):q(Be.raw)}catch(V){console.error("Error in getpayload:",V),m("Extraction failed: "+(V.message||String(V))),N(!0),H(V.message||"An error occurred"),M(String(V))}finally{j(!1)}},ie=U=>{Me(!0)},Ee=()=>{document.querySelector(".menucomp").style.cssText="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);pointer-events:all;",document.querySelector(".listcontent").style.cssText="clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);pointer-events:none;"};return s.jsxs("div",{className:"searchlist",children:[Je?s.jsx(j7,{actualDlink:b,raw:$,pdflink:w,mainlogo:lt,setshowpdf:Me,dataerror:g,credits:k,courseName:x,extract:z,selectedVal:t}):s.jsxs("div",{children:[s.jsxs("div",{className:"searchnav",children:[s.jsx("div",{className:"closesearch",onClick:()=>{e(!1),l.current.value=""},children:s.jsx("div",{className:"bbtn",children:s.jsxs("div",{className:"ba",children:[s.jsx(i1,{}),s.jsx("span",{className:"prem3"})]})})}),s.jsx(Jd,{handleMenu:Ee,eprop:"all",setsearching:e,bar:l,find:a,setRefreshing:c,setfind:o})]}),s.jsxs("div",{className:"bothsides",children:[s.jsx("div",{className:"sidemenubar",children:s.jsxs("div",{className:"mymenubox",onClick:Ee,children:[s.jsx("div",{className:"rbackdrop"}),s.jsx("img",{className:"racoonp",src:_7,alt:""}),s.jsxs("div",{className:"firstitem",children:[s.jsx("div",{className:"abs"}),s.jsx(he,{to:"/uelearn/Payment",target:"_blank",rel:"noopener noreferrer",children:s.jsxs("div",{className:"paid",children:[s.jsx("div",{className:"fnav",children:"✨"}),s.jsx(va,{style:{marginRight:4}}),"Upgrade",s.jsx("div",{className:"fnav",children:"✨"})]})})]}),s.jsxs("div",{className:"mymenu",children:[s.jsx("div",{className:"menuitems",onClick:()=>{P("dashboard")},children:s.jsxs("div",{className:"inmenu",children:[s.jsx(Pf,{className:"micon"}),"General "]})}),s.jsx("div",{className:"menuitems",onClick:()=>{P("solve")},children:s.jsxs("div",{className:"inmenu",children:[s.jsx(J5,{className:"micon"}),"Our Products ",s.jsx("div",{className:"fnav",children:"✨"})]})}),s.jsx("div",{className:"menuitems",onClick:()=>{P("leaderboard")},children:s.jsxs("div",{className:"inmenu",children:[s.jsx(o8,{className:"micon"}),"Leaderboard"]})}),s.jsx("div",{className:"menuitems",onClick:()=>{P("referal")},children:s.jsxs("div",{className:"inmenu",children:[s.jsx("div",{className:"micon",children:s.jsx("i",{style:{fontSize:10},className:"fa fa-users"})})," Referal Details"]})}),s.jsx("div",{className:"menuitems",onClick:()=>{P("earn")},children:s.jsxs("div",{className:"inmenu",children:[s.jsx(R5,{className:"micon"}),"Earn ",s.jsx("div",{className:"fnav",children:"💰"})]})}),s.jsx("div",{className:"menuitems",onClick:()=>{P("advert")},children:s.jsxs("div",{className:"inmenu",children:[s.jsx(Th,{className:"micon"}),"Advertise your business ",s.jsx("div",{className:"fnav",children:"📢"})]})}),s.jsx("div",{className:"menuitems",onClick:()=>{P("nss")},children:s.jsxs("div",{className:"inmenu",children:[s.jsx(g2,{className:"micon"}),"NSS Guide"]})}),s.jsx("div",{className:"menuitems",onClick:()=>{P("job")},children:s.jsxs("div",{className:"inmenu",children:[s.jsx(xa,{className:"micon"}),"Job Application Guide"]})})]}),s.jsx("div",{className:"menuitems logout",style:{padding:20},onClick:t1,children:s.jsxs("div",{className:"inmenu",children:[s.jsx(p2,{className:"micon"}),"Logout"]})})]})}),s.jsxs("div",{className:"mcontent",children:[s.jsx(J7,{currentView:E,setcurrentView:P}),s.jsxs("div",{className:"listcontent",children:[Ce?s.jsx(Z7,{setselectedVal:n,selectedVal:t,setselectModel:ce,getpayload:De,selectlink:Le}):!1,a!=""&&r.length>1?r.filter((U,K,Fe)=>Fe.indexOf(U)==K).filter((U,K,Fe)=>U.description.toLowerCase().includes(a.toLowerCase())).sort((U,K)=>K.createdOn.slice(0,4)*1-U.createdOn.slice(0,4)*1).slice(0,30).map((U,K)=>s.jsxs("div",{className:"filtered","data-ptext":"title...",title:U.description.replace("-",","),"data-texts":"details...",children:[s.jsx("img",{src:S7,alt:"",className:"imgthumb"}),s.jsxs("div",{className:"pinfo",children:[s.jsx("div",{className:"titles",children:U.description.replace(/o/gi,["🧿","⭕"][K%2])}),s.jsx("div",{className:"describe",children:U.createdOn})]}),s.jsxs("div",{href:/payment/i.test(U.downloadLink)?"":U.downloadLink,onClick:Fe=>Y(U.downloadLink,U.description),className:"download",children:[s.jsx(F5,{style:{marginRight:"5px"}})," open",s.jsx("span",{className:"prema"})]})]},K+"")):new Array(1).fill("").map((U,K)=>s.jsx("div",{style:{margin:0,width:"100%"},className:"filtered mn4","data-ptext":"title...","data-texts":"details...",children:s.jsxs("div",{className:"ready",children:[s.jsx("div",{className:"big",children:"🔎"}),s.jsx("div",{className:"rbackdrop"}),s.jsxs("div",{className:"desc err4",children:[s.jsxs("div",{className:"fnav2",style:{padding:2},children:["                        ",s.jsx("img",{className:"reglate",src:lt,alt:""})]}),s.jsx("span",{className:"nerror",children:d})]})]})},K+""))]})]})]})]}),S&&s.jsx(Y7,{setfetchError:N,errorMessage:T}),C?s.jsx(dr,{opacity:1,indexed:100,mainlogo:lt}):s.jsx(dr,{opacity:0,indexed:-100})]})},Y7=({errorMessage:e,setfetchError:t})=>(setTimeout(()=>t(!1),3e3),s.jsx("div",{className:"toast",children:s.jsx("div",{className:"successmessage",children:"🔴 Sorry: 🔌 "+e.toLowerCase()})})),J7=({currentView:e,setcurrentView:t})=>s.jsx("div",{className:"menucomp",children:s.jsx("div",{className:"menuhead",children:s.jsx(W7,{currentView:e,setcurrentView:t})})}),K7="/uelearn/imgs/racoon.jpg",X7=()=>{const[e,t]=p.useState(null),[n,r]=p.useState(!1),[a,i]=p.useState(!1);p.useEffect(()=>{const l=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);i(l);const c=d=>{d.preventDefault(),t(d),r(!0)},u=()=>{r(!1),t(null),console.log("PWA was installed")};return window.addEventListener("beforeinstallprompt",c),window.addEventListener("appinstalled",u),()=>{window.removeEventListener("beforeinstallprompt",c),window.removeEventListener("appinstalled",u)}},[]);const o=async()=>{if(e){e.prompt();const{outcome:l}=await e.userChoice;t(null),r(!1),console.log(`User response to the install prompt: ${l}`)}else/iPad|iPhone|iPod/.test(navigator.userAgent)?alert('To install this app on iOS, tap the share icon and then "Add to Home Screen".'):/Android/.test(navigator.userAgent)?alert('To install this app on Android, use the menu option in your browser to "Add to Home Screen".'):alert(`To install this app, look for an "Add to Home Screen" option in your browser's menu.`)};return n?s.jsxs("button",{id:"pwaButton",onClick:o,style:{display:"inline-flex"},className:"pwa-install-button",children:[s.jsx("i",{className:"fas fa-plus-square"}),a?" Add to Home Screen":" Install App"]}):null},e9="/uelearn/assets/jess-f0797696.jpg",t9="/uelearn/assets/jude-1c8bb029.jpg",n9="/uelearn/assets/racoon_learn-ac3a52fe.jpg",r9="/uelearn/assets/titled-1d1d74d4.jpg",a9=Math.floor(Math.random()*4);function i9({setshows:e}){const[t,n]=p.useState(""),[r,a]=p.useState(""),[i,o]=p.useState(""),[l,c]=p.useState(""),[u,d]=p.useState(""),[m,h]=p.useState(""),[w,x]=p.useState(""),[b,k]=p.useState(!1),[g,f]=p.useState(!1),[y,C]=p.useState(""),[j,S]=p.useState(""),[N,E]=p.useState(""),[P,T]=p.useState(!1),[H,Ce]=p.useState(!1),[ce,Le]=p.useState(!1),[kt,Je]=p.useState(10),[Me,z]=p.useState(""),[M,$]=p.useState(!1),[q,Y]=p.useState(""),[De,ie]=p.useState(!1),[Ee,U]=p.useState(!1),[K,Fe]=p.useState({id:"",dateCreated:"",firstName:"",lastName:"",msisdn:""}),O=R=>{try{const Ue="jfphmdfhigoppbldgnclkpjikkbjmkmo";window.chrome&&chrome.runtime&&chrome.runtime.sendMessage&&chrome.runtime.sendMessage(Ue,{action:"syncAuth",userInfo:R},te=>{chrome.runtime.lastError||te&&te.success&&console.log("[ueLearn] Auth synced to extension ✅")})}catch{}},ye=[e9,t9,P2,T2][a9],B=R=>{E(R),k(!0),f(!1),setTimeout(()=>{k(!1)},6e3)},fe=R=>{ie(!0),f(!0),Be();const Ue={method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${Me}`},body:JSON.stringify({msisdn:R})};try{fetch(Ne+"/api/v1/send/sms/otp",Ue).then(te=>{te.status==200?B("Sent successfully"):B("Failed to send OTP, try again"),T(!0)}).catch(()=>{B("There was a promblem please retry"),f(!1)}).finally(()=>{ie(!1)})}catch(te){B(`There was an issue: ${te}`)}},Be=()=>{let R=setInterval(()=>{kt>=1&&Je(Ue=>Ue-1)},1e3);setTimeout(()=>{clearInterval(R),ie(!1),Je(15)},11e3)};p.useEffect(()=>{try{K.id!=""&&localStorage.setItem("userInfo",JSON.stringify(K)),z(K.accessToken)}catch{}},[K]),p.useEffect(()=>{if(b){const R=document.querySelector(".successmessage");R&&(/success/gim.test(N)?R.textContent="🟢"+N+"🥳🥳🥳":R.textContent="🔴"+N)}},[N,b]);const Ke=()=>{try{e(!1)}catch(R){B(R)}},$n=R=>{if(R==""||!R)return B("Please enter correct OTP code"),ie(!1),!1;const Ue={method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${Me}`},body:JSON.stringify({path:"msisdn",otp:R})};try{let te="Verification failed, you can go login and try again later";fetch(Ne+"/api/v1/verification",Ue).then(vr=>{console.log(vr),vr.status==200?Ke():mn(vr),T(!0)}).catch(vr=>{vr&&B("There was a problem please retry"),T(!0)}).finally(()=>{ie(!1)})}catch{B("Verification failed, you can go login and try again later"),ie(!1)}},be=()=>{`${new Date().getTime()}`;let R={email:t,msisdn:u,firstName:r,lastName:i,password:w};R=q.length?{...R,referalCode:q}:R;const Ue={method:"POST",headers:{"User-Agent":"Apidog/1.0.0 (https://apidog.com)","Content-Type":"application/json"},body:JSON.stringify(R),redirect:"follow"};fetch(Ne+"/api/v1/auth/register",Ue).then(te=>te.json()).then(te=>{te.status?Ct(te):mn(te)}).catch(te=>{B(`${te}`),console.log(te)})},mn=R=>{B((R==null?void 0:R.message)+((R==null?void 0:R.details)??""))},Ct=R=>{b1(R),Ce(!0)},b1=R=>{Fe({...R.data.userData,accessToken:R.data.token,refreshToken:R.data.refreshToken}),f(!1),B("Successful Entry");let Ue={...R.data.userData,accessToken:R.data.token,refreshToken:R.data.refreshToken};O(Ue)},rs=R=>{if(T(!1),H){if(u.length<10)return B("Add a valid Phone number"),!1;if(l.length!=6&&R=="proceed")return B("Wrong OTP code"),!1;R=="verify"?$n(l):R!="proceed"&&fe(u)}else if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gim.test(t.trim())){if(r.trim().length<3)return B("firstName must have a valid length"),!1;if(i.trim().length<3)return B("lastName must have a valid length"),!1;if(w==="")return B("Add a valid password"),!1;if(/\s/gim.test(w))return B("Password should not be spaced"),!1;if(w.length<5)return B("Password must be at least 5 char long"),!1;if(m!==w)return B("Enter the same password to confirm"),!1;f(!0),be()}else return B("Add valid email eg. hithere@gmail.com"),!1},G2=()=>{if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gim.test(y.trim())==!1)return B("Add a valid emial eg.hello@gmail.com"),!1;if(/\s/gim.test(y))return B("email should not be spaced"),!1;if(j=="")return B("Add a valid password"),!1;if(/\s/gim.test(j))B("Password should not be spaced");else{if(j.length<5)return B("password must be at least 5 char long"),!1;f(!0),Y2()}},Y2=()=>{`${new Date().getTime()}`;const Ue={method:"POST",headers:{"User-Agent":"Apidog/1.0.0 (https://apidog.com)","Content-Type":"application/json"},body:JSON.stringify({email:y,password:j}),redirect:"follow"};fetch(Ne+"/api/v1/auth/login",Ue).then(te=>te.json()).then(te=>{te.status?J2(te):mn(te)}).catch(te=>{B(`${te}`)})},J2=R=>{b1(R),setTimeout(()=>{Ke()},1e3)};return s.jsx("div",{children:s.jsxs("div",{className:"register",children:[b&&s.jsx("div",{className:"successmessage"}),s.jsx("img",{className:"regpic",src:ye,alt:""}),s.jsx("img",{className:"regpic",src:ye,alt:""}),s.jsxs("div",{className:"regbox",children:[s.jsxs("div",{className:"racoonbox",children:[s.jsx("img",{className:"racoondp",src:n9}),s.jsxs("div",{className:"racoonintro",children:[s.jsx("div",{className:"rbackdrop",style:{zIndex:2}}),s.jsx("div",{className:"wmessage",children:"Welcome to UELearn"}),s.jsx("div",{className:"regnote",children:"study with aura !"})]})]}),s.jsx("div",{className:"half",children:s.jsxs("div",{className:"picked",children:[s.jsx("img",{src:ye,className:"brown",alt:""}),s.jsx("img",{src:ye,className:"brown mask",alt:""})]})}),s.jsx("div",{className:"half",children:s.jsxs("div",{className:"regform",children:[!H&&Ee?s.jsxs("div",{className:"mbox",children:[s.jsxs("div",{className:"inputform",children:[s.jsx(f2,{className:"micon"}),s.jsx("input",{onChange:R=>n(R.currentTarget.value),type:"text",placeholder:"EMAIL",className:"impbox"})]}),s.jsxs("div",{className:"inputform",children:[s.jsx(Vs,{className:"micon"}),s.jsx("input",{onChange:R=>a(R.currentTarget.value),type:"text",placeholder:"firstName",className:"impbox"})]}),s.jsxs("div",{className:"inputform",children:[s.jsx(Vs,{className:"micon"}),s.jsx("input",{onChange:R=>o(R.currentTarget.value),type:"text",placeholder:"lastName",className:"impbox"})]}),s.jsxs("div",{className:"inputform",children:[M?s.jsx(Is,{onClick:()=>{$(!M)},className:"micon"}):s.jsx($s,{onClick:()=>$(!M),className:"micon"}),s.jsx("input",{onChange:R=>x(R.currentTarget.value),type:M?"text":"password",placeholder:"PASSWORD",className:"impbox"})]}),s.jsxs("div",{className:"inputform",children:[M?s.jsx(Is,{onClick:()=>{$(!M)},className:"micon"}):s.jsx($s,{onClick:()=>$(!M)}),s.jsx("input",{onChange:R=>h(R.currentTarget.value),type:M?"text":"password",placeholder:"CONFIRM PASSWORD",className:"impbox"})]}),ce?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"regbutton",onClick:()=>Le(!1),children:"remove referal section"}),s.jsx("div",{className:"inputform",children:s.jsx("input",{className:"impbox",type:"text",onChange:R=>Y(R.currentTarget.value),placeholder:"referal code..."})})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"noted",children:[s.jsx(Rr,{className:"micon"}),"Optional: Add referal code"]}),s.jsx("div",{className:"regbutton",onClick:()=>Le(!0),children:"Add referal code"})]}),s.jsxs("div",{className:"otpverbox",children:[s.jsx("div",{className:"regbutton",onClick:()=>{rs("proceed")},children:g?"...":"Sign Up"}),s.jsx("div",{className:"regbutton",style:{filter:"invert("},onClick:()=>{U(!1)},children:"Login Instead?"})]})]}):!1,!H&&!Ee?s.jsxs("div",{className:"mbox",children:[s.jsxs("div",{className:"inputform",children:[s.jsx(Vs,{className:"micon"}),s.jsx("input",{onChange:R=>C(R.currentTarget.value),type:"text",placeholder:"username",className:"impbox"})]}),s.jsxs("div",{className:"inputform",children:[M?s.jsx(Is,{onClick:()=>{$(!M)}}):s.jsx($s,{onClick:()=>$(!M)}),s.jsx("input",{onChange:R=>S(R.currentTarget.value),type:M?"text":"password",placeholder:"PASSWORD",className:"impbox"})]}),s.jsx("div",{className:"regbutton",onClick:()=>{G2()},children:g?"...":"Sign in"}),s.jsxs("div",{className:"noted",children:[s.jsx(Rr,{className:"micon"})," Dont have an account?"]}),s.jsx("div",{className:"regbutton",style:{background:"black",color:"white"},onClick:()=>{U(!0)},children:"Sign Up Instead?"})]}):!1,H?s.jsxs("div",{className:"tootp",children:[s.jsxs("div",{className:"inputform",children:[s.jsx(Jo,{}),s.jsx("input",{onChange:R=>d(R.currentTarget.value),type:"text",placeholder:"Phone",className:"impbox"})]}),s.jsxs("div",{className:"noted",children:[s.jsx(Rr,{className:"micon"})," Click verify to get OTP code"]}),s.jsxs("div",{className:"otpverbox",children:[s.jsxs("div",{className:"otpver",onClick:rs,children:[s.jsx(s1,{className:"micon",style:{filter:"invert(1)"}}),De?"...":"Verify"]}),s.jsxs("div",{className:"resend",children:[s.jsx(o1,{className:"micon"})," ",s.jsx("span",{className:"count",children:De?"wait.."+kt+"s":"count down"})]})]}),s.jsxs("div",{className:"inputform",children:[s.jsx(h2,{}),s.jsx("input",{onChange:R=>c(R.currentTarget.value),type:"number",placeholder:"OTP CODE HERE (6 DIGIT)",className:"impbox"})]}),s.jsx("div",{className:"regbutton",onClick:()=>{rs("verify")},children:g&&De?"...":"Proceed"}),P?s.jsxs(s.Fragment,{children:["  ",s.jsxs("div",{className:"noted",children:[s.jsx(Rr,{className:"micon"})," Didn't receive OTP? You can skip and verify later"]}),s.jsxs("div",{className:"skipbtn",onClick:Ke,children:[s.jsx("i",{className:"arrow-right"})," ","Skip >"]})]}):""]}):!1]})}),s.jsx("img",{className:"tinylogo",style:{zIndex:2},src:r9,alt:""})]})]})})}const s9="_wrap_1ef1q_41",o9="_glowA_1ef1q_63",l9="_glowB_1ef1q_91",c9="_eyebrow_1ef1q_121",u9="_heading_1ef1q_139",d9="_intro_1ef1q_157",p9="_grid_1ef1q_177",f9="_card_1ef1q_195",h9="_cardIcon_1ef1q_233",m9="_cardNum_1ef1q_245",g9="_cardTitle_1ef1q_269",v9="_cardBody_1ef1q_287",x9="_footer_1ef1q_305",Pe={wrap:s9,glowA:o9,glowB:l9,eyebrow:c9,heading:u9,intro:d9,grid:p9,card:f9,"card--purple":"_card--purple_1ef1q_213","card--teal":"_card--teal_1ef1q_223",cardIcon:h9,cardNum:m9,"num--purple":"_num--purple_1ef1q_263","num--teal":"_num--teal_1ef1q_265",cardTitle:g9,cardBody:v9,footer:x9},y9=[{num:"01",label:"Retrieval Practice",title:"Remember repeatedly",body:"Recalling information more than once significantly boosts future accessibility in your memory.",icon:"🔁",accent:"purple"},{num:"02",label:"Testing",title:"Attempt, don't just read",body:"Answering questions or explaining concepts to others reinforces learning and surfaces gaps.",icon:"✏️",accent:"teal"},{num:"03",label:"Spaced Repetition",title:"Review over time",body:"Revisiting material at increasing intervals trains your brain to keep information long-term.",icon:"🕐",accent:"purple"},{num:"04",label:"Dual Coding",title:"Verbal + visual",body:"Engaging both language and imagery channels at once dramatically raises the chance of recall.",icon:"🖼️",accent:"teal"},{num:"05",label:"Personal Connection",title:"Make it yours",body:"Linking new material to your own experiences makes it feel relevant — and far easier to remember.",icon:"❤️",accent:"purple"}];function b9(){return s.jsxs("div",{className:Pe.wrap,children:[s.jsxs("div",{className:"midmessage",children:[s.jsxs("div",{className:"midleft",children:[s.jsxs("div",{className:"welcome",children:[s.jsx("i",{className:"bga",children:"🤗"}),s.jsx("span",{className:"welcome",style:{textTransform:"uppercase"},children:"HI !"})]}),s.jsx("div",{className:"rbackdropa"}),s.jsx("div",{className:"rbackdropb"}),s.jsx("div",{className:"rbackdropc"}),s.jsx("div",{className:(Pe.heading,"welcmessage"),id:"welcid",children:"Practice makes perfect. Keep your self busy with the resources we provide."}),s.jsx(X7,{})]}),s.jsx("div",{className:"midleft",children:s.jsx("img",{className:"messagepic",src:K7,alt:""})})]}),s.jsx("div",{className:Pe.glowA,"aria-hidden":"true"}),s.jsx("div",{className:Pe.glowB,"aria-hidden":"true"}),s.jsx("p",{className:Pe.eyebrow,children:"⚙ What we help you solve"}),s.jsx("h2",{className:Pe.heading,children:"Learn smarter, not harder."}),s.jsx("p",{className:Pe.intro,children:"Modern psychology shows the best way to retain knowledge is through active learning — techniques that make your brain work to recall information, not just passively absorb it."}),s.jsx("div",{className:Pe.grid,children:y9.map(e=>s.jsxs("div",{className:`${Pe.card} ${Pe[`card--${e.accent}`]}`,children:[s.jsx("span",{className:Pe.cardIcon,"aria-hidden":"true",children:e.icon}),s.jsxs("p",{className:`${Pe.cardNum} ${Pe[`num--${e.accent}`]}`,children:[e.num," — ",e.label]}),s.jsx("p",{className:Pe.cardTitle,children:e.title}),s.jsx("p",{className:Pe.cardBody,children:e.body})]},e.num))}),s.jsx("p",{className:Pe.footer,children:"These strategies are grounded in decades of cognitive research, designed to give you the most from every hour you study."})]})}function w9(){const[e,t]=p.useState(!1);return s.jsxs("div",{className:"telegram-wrapper",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"telegram",children:[s.jsxs("div",{className:"telegram-logo-container",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[s.jsx("div",{className:"pulse-ring"}),s.jsx("div",{className:"pulse-ring",style:{animationDelay:"1s"}}),s.jsxs("svg",{className:"telegram-svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:[s.jsxs("defs",{children:[s.jsxs("linearGradient",{id:"planeGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",style:{stopColor:"#00000000",stopOpacity:1}}),s.jsx("stop",{offset:"100%",style:{stopColor:"#0088cc00",stopOpacity:1}})]}),s.jsxs("linearGradient",{id:"circleGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",style:{stopColor:"#0088cc00",stopOpacity:1}}),s.jsx("stop",{offset:"100%",style:{stopColor:"#00608c00",stopOpacity:1}})]})]}),s.jsx("circle",{cx:"50",cy:"50",r:"48",fill:"url(#circleGradient)"}),s.jsxs("g",{className:"plane-path",children:[s.jsx("path",{d:"M25 50 L70 30 L45 75 L40 55 L60 40 L35 52 Z",fill:"white"}),s.jsx("path",{d:"M40 55 L45 75 L50 65 Z",fill:"white",opacity:"0.7"})]})]}),s.jsxs("div",{className:"particles",children:[s.jsx("div",{className:"particle",style:{"--tx":"-30px","--ty":"-30px"}}),s.jsx("div",{className:"particle",style:{"--tx":"30px","--ty":"-30px"}}),s.jsx("div",{className:"particle",style:{"--tx":"-30px","--ty":"30px"}}),s.jsx("div",{className:"particle",style:{"--tx":"30px","--ty":"30px"}}),s.jsx("div",{className:"particle",style:{"--tx":"0px","--ty":"-40px"}})]})]}),s.jsxs("div",{className:"telegram-content",children:[s.jsx("span",{className:"itext",children:"Join"}),"Our Telegram",s.jsx("p",{className:"telegram-subtitle",children:"Connect with our vibrant community"}),s.jsxs("div",{className:"dots-decoration",children:[s.jsx("div",{className:"dot"}),s.jsx("div",{className:"dot"}),s.jsx("div",{className:"dot"})]}),s.jsxs("a",{href:"#",className:"telegram-cta",children:["Join Community",s.jsx("span",{className:"cta-arrow",children:"→"})]})]})]})]})}function k9(){_p();const[e,t]=p.useState(!0),[n,r]=p.useState(!1),[a,i]=p.useState(""),[o,l]=p.useState("Type the course c⚾de in the search bar above ... ☝🏼"),[c,u]=p.useState(!1),[d,m]=p.useState([{createdOn:"",description:"",downloadLink:""}]),[h,w]=p.useState(""),[x,b]=p.useState(0);p.useState([{name:"",previewLink:"",fileType:"",viewLink:"",directDownload:""}]);const[k,g]=p.useState(""),[f,y]=p.useState(""),[C,j]=p.useState(!1),[S,N]=p.useState(!1),E=p.useRef(null),[P,T]=p.useState("https://notfound.com"),[H,Ce]=p.useState("https://notfound.com"),[ce,Le]=p.useState(""),[kt,Je]=p.useState(""),[Me,z]=p.useState(""),[M,$]=p.useState(""),[q,Y]=p.useState(""),De=new Date("Jan 2, 2026 00:00:00").getTime(),ie=setInterval(function(){const O=new Date().getTime(),V=De-O,ye=Math.floor(V/(1e3*60*60*24)),B=Math.floor(V%(1e3*60*60*24)/(1e3*60*60)),fe=Math.floor(V%(1e3*60*60)/(1e3*60)),Be=Math.floor(V%(1e3*60)/1e3);if($(" "+ye+"days "+B+"hours "+fe+"minutes "+Be+" seconds left"),V<0){clearInterval(ie);let Ke=document.querySelector(".endsin");Ke&&(Ke.innerHTML="Promo has ended")}},1e3),Ee=async()=>{var ye;let O=await Pt(`${Ne}/api/v1/user/profile`,{method:"GET",headers:{"Content-Type":"application/json"}});return((ye=O==null?void 0:O.api_response)==null?void 0:ye.data)||O||{}};p.useEffect(()=>{try{Ee().then(O=>{console.log("User data received:",O);const V=JSON.parse(localStorage.getItem("userInfo")||"{}");O.status==="success"?(localStorage.setItem("userInfo",JSON.stringify({...V,...O.data})),Le(O.data.firstName),b(O.data.highestStreakScore),t(!1)):(console.log("User data structure:",O),O.firstName&&(localStorage.setItem("userInfo",JSON.stringify({...V,...O})),Le(O.firstName),b(O.highestStreakScore||0),t(!1)))})}catch(O){console.error("Error fetching user data:",O),t(!1)}},[]),p.useEffect(()=>{const O=()=>{const V=ua("userInfo");V!=null&&V.credits&&g(V.credits)};return window.addEventListener("storage",O),()=>window.removeEventListener("storage",O)},[]),p.useEffect(()=>{let O=`${new Date}`.split(" ");w(`${O[2]} ${O[1]} ${O[3]}`);const V=ua("userInfo");V&&Object.keys(V).length>0?(j(!1),Le(V.firstName||""),b(V.highestStreakScore||0),g(V.credits||0)):j(!0)},[C]),p.useLayoutEffect(()=>{setTimeout(()=>{t(!1)},3e3)},[]),p.useLayoutEffect(()=>{fetch("https://benasdom.github.io/ugpascoapi/ugpasco.json").then(O=>O.json()).then(O=>m(O.data)).catch(O=>setTimeout(()=>{l("Oops! kindly check y🍪ur internet connectivity 🔌💻🥺 "+O),Fe(`${O}`)},500))},[a]);const U=()=>{N(!0),K()};async function K(){const O="";console.log(O);const V="815965867",ye=document.querySelector("#suggested").value,B=`https://api.telegram.org/bot${O}/sendMessage`,fe={chat_id:V,text:ye};try{await fetch(B,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(fe)}).then(()=>{alert("Form submitted successfully !"),N(!1),document.querySelector("#suggested").value=""})}catch{alert("Failed to submit"),N(!1)}}const Fe=O=>{O&&u(!1)};return s.jsx(s.Fragment,{children:n?s.jsx(G7,{setdataerror:y,setcourseName:Je,setcredits:g,setpdflink:T,pdflink:P,setsearching:r,find:a,NetworkError:o,payload:d,bar:E,setfind:i,setactualDlink:Ce,actualDlink:H,dataerror:f,credits:k,courseName:kt,selectedVal:Me,setselectedVal:z}):s.jsx(s.Fragment,{children:s.jsxs("div",{className:"page",children:[s.jsxs("div",{className:"promo",style:{position:"relative",fontWeight:600},children:[s.jsx("span",{className:"inv-ico"})," Promotion ends in: ",s.jsx("p",{className:"ticket",children:`${q} ${M}`})]}),s.jsxs("div",{className:"landingpage",children:[s.jsxs("ul",{className:"mlist",children:[s.jsx("div",{className:"space"}),s.jsx("img",{className:"reglate2",src:lt,alt:""}),s.jsxs(he,{to:"/about",children:[" ",s.jsx("li",{children:"ABOUT"})]}),s.jsxs(he,{to:"/contact",children:[" ",s.jsx("li",{children:"CONTACT"})]}),s.jsxs(he,{to:"/payment",target:"_blank",rel:"noopener noreferrer",children:[" ",s.jsx("li",{children:"UPGRAGE"})]}),s.jsxs("div",{className:"rightmenu",children:[s.jsx(Jd,{setsearching:r,eprop:"none",setfind:i,find:a,searching:n,bar:E}),s.jsx("div",{className:"space"}),s.jsx("div",{className:"onne"}),s.jsx("div",{className:"onne",title:ce||"GUEST",children:s.jsx("div",{className:"dp",children:ce?ce.toUpperCase()[0]:"Go-pro"})})]})]}),s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"none",width:"16",height:"16",strokeWidth:"2",children:e?"ue-learn":s.jsx("path",{d:"M12.784 1.442a.8.8 0 0 0-1.569 0l-.191.953a.8.8 0 0 1-.628.628l-.953.19a.8.8 0 0 0 0 1.57l.953.19a.8.8 0 0 1 .628.629l.19.953a.8.8 0 0 0 1.57 0l.19-.953a.8.8 0 0 1 .629-.628l.953-.19a.8.8 0 0 0 0-1.57l-.953-.19a.8.8 0 0 1-.628-.629l-.19-.953h-.002ZM5.559 4.546a.8.8 0 0 0-1.519 0l-.546 1.64a.8.8 0 0 1-.507.507l-1.64.546a.8.8 0 0 0 0 1.519l1.64.547a.8.8 0 0 1 .507.505l.546 1.641a.8.8 0 0 0 1.519 0l.546-1.64a.8.8 0 0 1 .506-.507l1.641-.546a.8.8 0 0 0 0-1.519l-1.64-.546a.8.8 0 0 1-.507-.506L5.56 4.546Zm5.6 6.4a.8.8 0 0 0-1.519 0l-.147.44a.8.8 0 0 1-.505.507l-.441.146a.8.8 0 0 0 0 1.519l.44.146a.8.8 0 0 1 .507.506l.146.441a.8.8 0 0 0 1.519 0l.147-.44a.8.8 0 0 1 .506-.507l.44-.146a.8.8 0 0 0 0-1.519l-.44-.147a.8.8 0 0 1-.507-.505l-.146-.441Z",fill:"currentColor"})})]}),s.jsxs("div",{className:"landingpage",children:[s.jsx("div",{className:"prehuge"}),s.jsxs("div",{className:"phuge",children:[s.jsx("img",{className:"huge fil",src:lt,alt:""}),s.jsx("img",{className:"huge fil",src:lt,alt:""}),s.jsx("div",{className:"ptext",children:s.jsx("svg",{viewBox:"0 0 525 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M30.5566 79.8779C22.832 79.8779 16.748 79.0405 12.3047 77.3657C7.86133 75.6567 4.69971 72.8198 2.81982 68.855C0.939941 64.856 0 59.4043 0 52.5V19.6875H9.89502V52.5C9.89502 56.3965 10.2026 59.6094 10.8179 62.1387C11.4673 64.6338 12.5952 66.582 14.2017 67.9834C15.8081 69.3506 18.064 70.3076 20.9692 70.8545C23.9087 71.4014 27.6855 71.6748 32.2998 71.6748C39.1357 71.6748 44.502 71.1108 48.3984 69.9829C52.2949 68.855 55.0464 67.0947 56.6528 64.7021C58.2935 62.2754 59.1138 59.1309 59.1138 55.2686V19.6875H68.9575V78.75H59.1138V70.9058C57.6782 72.8882 55.8667 74.5459 53.6792 75.8789C51.4917 77.2119 48.5693 78.2031 44.9121 78.8525C41.2549 79.5361 36.4697 79.8779 30.5566 79.8779ZM149.963 61.2158C149.963 65.625 149.297 69.0942 147.964 71.6235C146.665 74.1528 144.666 75.9985 141.965 77.1606C139.265 78.3228 135.813 79.0576 131.609 79.3652C127.439 79.707 122.466 79.8779 116.689 79.8779C110.093 79.8779 104.487 79.5361 99.873 78.8525C95.293 78.2031 91.5845 76.853 88.7476 74.8022C85.9448 72.7173 83.894 69.6069 82.5952 65.4712C81.3306 61.3354 80.6982 55.8154 80.6982 48.9111C80.6982 42.2119 81.3135 36.8457 82.5439 32.8125C83.8086 28.7793 85.8423 25.7373 88.645 23.6865C91.4478 21.6357 95.1221 20.2686 99.668 19.585C104.248 18.9014 109.836 18.5596 116.433 18.5596C123.987 18.5596 130.242 19.0894 135.198 20.1489C140.154 21.2085 143.845 23.2251 146.272 26.1987C148.733 29.1724 149.963 33.5303 149.963 39.2725V51.936H90.5933C90.6274 56.311 90.9351 59.8145 91.5161 62.4463C92.0972 65.0781 93.2593 67.0605 95.0024 68.3936C96.7456 69.7266 99.3433 70.6152 102.795 71.0596C106.282 71.4697 110.913 71.6748 116.689 71.6748C121.885 71.6748 126.072 71.5723 129.25 71.3672C132.463 71.1621 134.89 70.7178 136.531 70.0342C138.206 69.3164 139.333 68.2568 139.915 66.8555C140.496 65.4541 140.786 63.5742 140.786 61.2158H149.963ZM116.433 26.7627C110.862 26.7627 106.367 26.9678 102.949 27.3779C99.5654 27.7881 96.9849 28.5913 95.2075 29.7876C93.4302 30.9497 92.2168 32.6929 91.5674 35.0171C90.9521 37.3413 90.6274 40.4004 90.5933 44.1943H140.53V39.2725C140.53 36.8115 140.239 34.7778 139.658 33.1714C139.111 31.5308 138.018 30.249 136.377 29.3262C134.736 28.3691 132.31 27.7026 129.097 27.3267C125.918 26.9507 121.697 26.7627 116.433 26.7627ZM162.729 52.5V44.2969H202.104V52.5H162.729ZM218.511 78.75V0H228.354V78.75H218.511ZM312.385 61.2158C312.385 65.625 311.719 69.0942 310.386 71.6235C309.087 74.1528 307.087 75.9985 304.387 77.1606C301.687 78.3228 298.235 79.0576 294.031 79.3652C289.861 79.707 284.888 79.8779 279.111 79.8779C272.515 79.8779 266.909 79.5361 262.295 78.8525C257.715 78.2031 254.006 76.853 251.169 74.8022C248.367 72.7173 246.316 69.6069 245.017 65.4712C243.752 61.3354 243.12 55.8154 243.12 48.9111C243.12 42.2119 243.735 36.8457 244.966 32.8125C246.23 28.7793 248.264 25.7373 251.067 23.6865C253.87 21.6357 257.544 20.2686 262.09 19.585C266.67 18.9014 272.258 18.5596 278.855 18.5596C286.409 18.5596 292.664 19.0894 297.62 20.1489C302.576 21.2085 306.267 23.2251 308.694 26.1987C311.155 29.1724 312.385 33.5303 312.385 39.2725V51.936H253.015C253.049 56.311 253.357 59.8145 253.938 62.4463C254.519 65.0781 255.681 67.0605 257.424 68.3936C259.167 69.7266 261.765 70.6152 265.217 71.0596C268.704 71.4697 273.335 71.6748 279.111 71.6748C284.307 71.6748 288.494 71.5723 291.672 71.3672C294.885 71.1621 297.312 70.7178 298.953 70.0342C300.627 69.3164 301.755 68.2568 302.336 66.8555C302.917 65.4541 303.208 63.5742 303.208 61.2158H312.385ZM278.855 26.7627C273.284 26.7627 268.789 26.9678 265.371 27.3779C261.987 27.7881 259.407 28.5913 257.629 29.7876C255.852 30.9497 254.639 32.6929 253.989 35.0171C253.374 37.3413 253.049 40.4004 253.015 44.1943H302.952V39.2725C302.952 36.8115 302.661 34.7778 302.08 33.1714C301.533 31.5308 300.439 30.249 298.799 29.3262C297.158 28.3691 294.731 27.7026 291.519 27.3267C288.34 26.9507 284.119 26.7627 278.855 26.7627ZM356.323 79.8779C349.248 79.8779 343.403 79.502 338.789 78.75C334.209 78.0322 330.791 76.4258 328.535 73.9307C326.313 71.4355 325.203 67.5562 325.203 62.2925C325.203 56.9263 326.245 52.9956 328.33 50.5005C330.449 47.9712 333.782 46.3306 338.328 45.5786C342.908 44.8267 348.906 44.4507 356.323 44.4507C362.339 44.4507 367.38 44.5874 371.448 44.8608C375.515 45.1343 379.155 45.6128 382.368 46.2964C382.3 41.7505 381.992 38.1787 381.445 35.5811C380.898 32.9492 379.873 31.001 378.369 29.7363C376.865 28.4717 374.661 27.6685 371.755 27.3267C368.884 26.9507 365.056 26.7627 360.271 26.7627C354.802 26.7627 350.513 26.8823 347.402 27.1216C344.326 27.3608 342.087 27.7881 340.686 28.4033C339.285 29.0186 338.396 29.9072 338.02 31.0693C337.678 32.2314 337.507 33.7354 337.507 35.5811H327.664C327.664 31.8896 328.159 28.916 329.15 26.6602C330.176 24.4043 331.902 22.6953 334.329 21.5332C336.755 20.3711 340.071 19.585 344.275 19.1748C348.513 18.7646 353.845 18.5596 360.271 18.5596C367.175 18.5596 372.729 19.0039 376.934 19.8926C381.172 20.7812 384.385 22.3877 386.572 24.7119C388.794 27.002 390.281 30.2148 391.033 34.3506C391.819 38.4863 392.212 43.8184 392.212 50.3467V78.75H382.368V74.6997C381.206 75.9302 379.6 76.9214 377.549 77.6733C375.498 78.4253 372.764 78.9722 369.346 79.314C365.962 79.6899 361.621 79.8779 356.323 79.8779ZM356.323 71.8799C362.168 71.8799 366.833 71.8115 370.32 71.6748C373.806 71.5381 376.404 71.1621 378.113 70.5469C379.856 69.9316 381.001 68.9404 381.548 67.5732C382.095 66.2061 382.368 64.292 382.368 61.8311V52.7563L356.323 52.4487C351.709 52.3804 347.983 52.4487 345.146 52.6538C342.344 52.8247 340.208 53.2349 338.738 53.8843C337.268 54.4995 336.277 55.4907 335.764 56.8579C335.286 58.1909 335.046 60.0024 335.046 62.2925C335.046 64.5142 335.286 66.2744 335.764 67.5732C336.277 68.8721 337.268 69.8291 338.738 70.4443C340.208 71.0596 342.344 71.4526 345.146 71.6235C347.983 71.7944 351.709 71.8799 356.323 71.8799ZM406.157 78.75V19.6875H416.001V27.8394C417.095 26.0962 418.188 24.6436 419.282 23.4814C420.41 22.3193 421.863 21.3965 423.64 20.7129C425.452 20.0293 427.896 19.5508 430.972 19.2773C434.048 18.9697 438.098 18.8159 443.123 18.8159V27.0703C436.355 27.0703 431.108 27.3096 427.383 27.7881C423.691 28.2666 421.042 29.0869 419.436 30.249C417.83 31.377 416.855 32.9492 416.514 34.9658C416.172 36.9824 416.001 39.5459 416.001 42.6562V78.75H406.157ZM455.889 78.75V19.6875H465.732V27.5317C467.202 25.5493 469.014 23.8916 471.167 22.5586C473.354 21.2256 476.26 20.2344 479.883 19.585C483.54 18.9014 488.325 18.5596 494.238 18.5596C501.963 18.5596 508.047 19.3115 512.49 20.8154C516.968 22.3193 520.146 25.0024 522.026 28.8647C523.906 32.7271 524.846 38.1958 524.846 45.271V78.75H514.951V45.271C514.951 41.2378 514.609 37.9907 513.926 35.5298C513.242 33.0688 512.063 31.2061 510.388 29.9414C508.748 28.6768 506.475 27.8394 503.569 27.4292C500.664 26.9849 496.973 26.7627 492.495 26.7627C485.659 26.7627 480.293 27.3267 476.396 28.4546C472.5 29.5825 469.749 31.3599 468.142 33.7866C466.536 36.1792 465.732 39.3066 465.732 43.1689V78.75H455.889Z",fill:"white"})})})]})]}),s.jsxs("div",{className:"slideme",children:[s.jsxs("div",{className:"slideitem",children:[s.jsxs("div",{className:"slideitemhead",children:[s.jsx("div",{className:"fnav",children:"❔"}),"Questions"]}),s.jsxs("div",{className:"slideitembody",children:[s.jsx("div",{className:"slideb1",children:s.jsx("p",{children:"Click the 🔍☝️search box and type your course code"})}),s.jsx("div",{className:"slideb2",children:s.jsx("img",{width:"110",src:Yd,alt:"Past Questions"})})]}),s.jsx("div",{className:"slidebtn"})]}),s.jsxs("div",{className:"slideitem",children:[s.jsxs("div",{className:"slideitemhead",children:[s.jsx("div",{className:"fnav",children:"♟️"}),"Strategy"]}),s.jsxs("div",{className:"slideitembody",children:[s.jsx("div",{className:"slideb1",children:s.jsx("p",{children:"Increased retention with psychological learning concepts"})}),s.jsx("div",{className:"slideb2",children:s.jsx("img",{width:"110",src:Zd,alt:"Past Questions"})})]}),s.jsx("div",{className:"slidebtn"})]}),s.jsxs("div",{className:"slideitem",children:[s.jsxs("div",{className:"slideitemhead",children:[s.jsx("div",{className:"fnav",children:"📖"}),"Revision"]}),s.jsxs("div",{className:"slideitembody",children:[s.jsx("div",{className:"slideb1",children:s.jsx("p",{children:"Practice with our browser extension"})}),s.jsx("div",{className:"slideb2",children:s.jsx("img",{width:"110",src:Gd,alt:"Past Questions"})})]}),s.jsx("div",{className:"slidebtn"})]})]}),s.jsx(b9,{}),s.jsx("br",{}),s.jsx("div",{className:"tel",children:s.jsx(w9,{})}),e?s.jsx(dr,{opacity:1,indexed:100,mainlogo:lt}):s.jsx(dr,{opacity:0,indexed:-100}),s.jsx("div",{className:"scrldn",children:s.jsx("div",{className:"scrd"})}),s.jsxs("div",{className:"footer",children:[s.jsxs("div",{className:"foot1",children:[s.jsx("img",{className:"brands",title:"uelearn",src:lt,alt:""}),s.jsx("img",{className:"brands",title:"unityelites.com",src:Ep,alt:""}),s.jsx("img",{className:"brands",title:"myfolder.space",src:zp,alt:""})]}),s.jsxs("div",{className:"foot1",children:[s.jsxs("div",{className:"foot2",children:[s.jsx("div",{className:"fnav",children:"⚙️"})," Developed by Unity Elites"]}),s.jsxs("div",{className:"foot2",children:[s.jsx("div",{className:"fnav",children:"💦"})," resource by Myfolder.space"]})]}),s.jsx("div",{className:"foot1",children:s.jsxs("div",{className:"twwo",title:"make a suggestion",children:[s.jsx("div",{className:"search",children:S?s.jsx("img",{src:Qd,className:"spinner",width:200}):s.jsx("span",{className:"fnav",style:{width:30,margin:5,height:30},children:s.jsx("i",{className:"fa fa-cloud",style:{fontSize:10,color:"whitesmoke"}})})}),s.jsx("div",{className:"input",children:s.jsx("input",{type:"text",id:"suggested",className:"find",placeholder:"Make a suggestion"})}),s.jsx("div",{className:"slash",onClick:U,children:s.jsx("svg",{className:"sendarrow",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"none",strokeWidth:"2",children:s.jsx("path",{d:"M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z",fill:"white"})})})]})}),C?s.jsx(i9,{setshows:j}):s.jsx(s.Fragment,{})]}),s.jsx("div",{className:"navbottom",children:s.jsxs("div",{className:"nbottomlist",children:[s.jsx(he,{to:"/",children:s.jsxs("div",{className:"navb",children:[" ",s.jsxs("i",{children:[" ",s.jsx("img",{className:"homepic",src:lt,alt:""})]}),s.jsx("div",{className:"nt",children:"home"})]})}),s.jsx(he,{to:"/about",children:s.jsxs("div",{className:"navb",children:[" ",s.jsx("i",{children:s.jsx(m2,{})}),s.jsx("div",{className:"nt",children:"about"})]})}),s.jsxs(he,{to:"/contact",children:[" ",s.jsxs("div",{className:"navb",children:[" ",s.jsx("i",{children:s.jsx(xa,{})}),s.jsx("div",{className:"nt",children:"contact"})]})]}),s.jsxs(he,{to:"/payment",target:"_blank",rel:"noopener noreferrer",children:[" ",s.jsxs("div",{className:"navb",children:[" ",s.jsx("i",{children:s.jsx(va,{})}),s.jsx("div",{className:"nt",children:"upgrade"})]})]}),s.jsxs("div",{onClick:t1,className:"navb",children:[" ",s.jsx("i",{children:s.jsx(p2,{})}),s.jsx("div",{className:"nt",children:"Logout"})]})]})})]})})})}const C9=`
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
`,j9=["Web Development","Mobile Apps","Frontend","Backend","Ecommerce","Sales Systems","Advertising","UI/UX Design"];function N9(){return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:C9}),s.jsxs("div",{className:"amb-root",children:[s.jsx("div",{className:"amb-orb amb-orb-1"}),s.jsx("div",{className:"amb-orb amb-orb-2"}),s.jsx("div",{className:"amb-orb amb-orb-3"}),s.jsx(he,{to:"/",className:"amb-back",children:s.jsx("i",{className:"fa fa-arrow-left"})}),s.jsxs("div",{className:"amb-card",children:[s.jsxs("div",{className:"amb-badge",children:[s.jsx("div",{className:"amb-badge-dot"}),"Who we are"]}),s.jsxs("h1",{className:"amb-headline",children:["We build ",s.jsx("span",{children:"digital experiences"})," that matter."]}),s.jsx("p",{className:"amb-desc",children:"Unity Elites is a team of developers crafting elegant, high-performance digital products — from sleek frontends to robust backend systems and everything in between."}),s.jsx("div",{className:"amb-pills",children:j9.map(e=>s.jsx("div",{className:"amb-pill",children:e},e))}),s.jsx("div",{className:"amb-divider"}),s.jsxs("a",{className:"amb-cta",href:"https://benasdom.github.io/ue",target:"_blank",rel:"noopener noreferrer",children:["Visit Unity Elites ",s.jsx("span",{className:"amb-cta-arrow",children:"→"})]})]}),s.jsxs("nav",{className:"amb-nav",children:[s.jsxs(he,{to:"/",className:"amb-nav-item",children:[s.jsx("span",{className:"amb-nav-icon",children:s.jsx("img",{className:"amb-nav-logo",src:lt,alt:""})}),s.jsx("span",{className:"amb-nav-label",children:"Home"})]}),s.jsxs(he,{to:"/about",className:"amb-nav-item active",children:[s.jsx("span",{className:"amb-nav-icon",children:s.jsx(Hh,{})}),s.jsx("span",{className:"amb-nav-label",children:"About"})]}),s.jsxs(he,{to:"/contact",className:"amb-nav-item",children:[s.jsx("span",{className:"amb-nav-icon",children:s.jsx(xa,{})}),s.jsx("span",{className:"amb-nav-label",children:"Contact"})]}),s.jsxs(he,{to:"/payment",className:"amb-nav-item",target:"_blank",rel:"noopener noreferrer",children:[s.jsx("span",{className:"amb-nav-icon",children:s.jsx(va,{})}),s.jsx("span",{className:"amb-nav-label",children:"Upgrade"})]})]})]})]})}const S9=`
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

  /* Nav */
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
  .amb-nav-item.active { color: #67e8f9; background: rgba(6,182,212,0.12); }
  .amb-nav-icon { font-size: 18px; line-height: 1; display: flex; align-items: center; justify-content: center; }
  .amb-nav-logo { width: 20px; height: 20px; object-fit: contain; opacity: 0.5; transition: opacity 0.2s; }
  .amb-nav-item:hover .amb-nav-logo { opacity: 1; }

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
    .amb-nav-item { padding: 8px 10px; min-width: 44px; }
    .amb-nav-label { display: none; }
  }
`;function _9(){const[e,t]=p.useState(!1),[n,r]=p.useState(!1),[a,i]=p.useState({name:"",email:"",phone:"",message:""}),o=u=>{r(u),setTimeout(()=>r(!1),3e3)},l=async()=>{if(Object.values(a).some(h=>!h.trim())){o("Please fill in all fields.");return}t(!0);const u="6715619579:AAEVuhwuW1Mwj09YQU3nyDDICHAZb0iiLQo",d="815965867",m=`Name: ${a.name}
Email: ${a.email}
Phone: ${a.phone}
Message: ${a.message}`;try{await fetch(`https://api.telegram.org/bot${u}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:d,text:m})}),o("Message sent successfully!"),i({name:"",email:"",phone:"",message:""})}catch{o("Failed to send. Please try again.")}t(!1)},c=u=>d=>i(m=>({...m,[u]:d.target.value}));return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:S9}),s.jsxs("div",{className:"amb-root",children:[s.jsx("div",{className:"amb-orb amb-orb-1"}),s.jsx("div",{className:"amb-orb amb-orb-2"}),s.jsx("div",{className:"amb-orb amb-orb-3"}),s.jsx("div",{className:`amb-toast${n?" show":""}`,children:n}),s.jsx(he,{to:"/",className:"amb-back",children:s.jsx("i",{className:"fa fa-arrow-left"})}),s.jsxs("div",{className:"amb-card",children:[s.jsxs("div",{className:"amb-badge",children:[s.jsx("div",{className:"amb-badge-dot"}),"Get in touch"]}),s.jsxs("h1",{className:"amb-headline",children:["Let's ",s.jsx("span",{children:"work together."})]}),s.jsx("p",{className:"amb-subtext",children:"Have a project in mind? Drop us a message and we'll get back to you shortly."}),s.jsxs("div",{className:"amb-fields",children:[s.jsxs("div",{className:"amb-field",children:[s.jsx("span",{className:"amb-field-prefix",children:"✦"}),s.jsx("input",{className:"amb-input",placeholder:"Your name",value:a.name,onChange:c("name")})]}),s.jsxs("div",{className:"amb-field",children:[s.jsx("span",{className:"amb-field-prefix",children:"@"}),s.jsx("input",{className:"amb-input",placeholder:"Email address",type:"email",value:a.email,onChange:c("email")})]}),s.jsxs("div",{className:"amb-field",children:[s.jsx("span",{className:"amb-field-prefix",children:"#"}),s.jsx("input",{className:"amb-input",placeholder:"Phone number",type:"tel",value:a.phone,onChange:c("phone")})]}),s.jsxs("div",{className:"amb-field amb-textarea-wrap",children:[s.jsx("span",{className:"amb-field-prefix",children:"✉"}),s.jsx("textarea",{className:"amb-textarea",placeholder:"Your message...",value:a.message,onChange:c("message")})]})]}),s.jsx("button",{className:"amb-submit",onClick:l,disabled:e,children:e?s.jsx("img",{src:Qd,className:"amb-spinner",alt:"sending"}):s.jsx(s.Fragment,{children:"Send Message  →"})})]}),s.jsxs("nav",{className:"amb-nav",children:[s.jsxs(he,{to:"/",className:"amb-nav-item",children:[s.jsx("span",{className:"amb-nav-icon",children:s.jsx("img",{className:"amb-nav-logo",src:lt,alt:""})}),s.jsx("span",{className:"amb-nav-label",children:"Home"})]}),s.jsxs(he,{to:"/about",className:"amb-nav-item",children:[s.jsx("span",{className:"amb-nav-icon",children:s.jsx(m2,{})}),s.jsx("span",{className:"amb-nav-label",children:"About"})]}),s.jsxs(he,{to:"/contact",className:"amb-nav-item active",children:[s.jsx("span",{className:"amb-nav-icon",children:s.jsx(xa,{})}),s.jsx("span",{className:"amb-nav-label",children:"Contact"})]}),s.jsxs(he,{to:"/payment",className:"amb-nav-item",target:"_blank",rel:"noopener noreferrer",children:[s.jsx("span",{className:"amb-nav-icon",children:s.jsx(va,{})}),s.jsx("span",{className:"amb-nav-label",children:"Upgrade"})]})]})]})]})}const E9=()=>s.jsx(s.Fragment,{children:s.jsxs("div",{className:"page cpage",children:[s.jsxs("div",{className:"notfound",children:[s.jsx("br",{}),s.jsx("div",{className:"",children:s.jsx("h1",{className:"about",children:s.jsx("h3",{children:"OOPS! PAGE NOT FOUND. The page you are looking for does not exist"})})}),s.jsx("h1",{className:"notfound-text",children:"404"}),s.jsx("div",{className:"",children:s.jsx("h2",{className:"not-found-text2",children:"WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND"})})]}),s.jsx("br",{}),s.jsx(he,{to:"/",className:"return",children:"👈 "})]})});function tl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function O2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s0(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,$2(r.key),r)}}function R2(e,t,n){return t&&s0(e.prototype,t),n&&s0(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function L2(e,t,n){return(t=$2(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?o0(Object(n),!0).forEach(function(r){L2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nl(e,t){if(e==null)return{};var n,r,a=function(o,l){if(o==null)return{};var c={};for(var u in o)if({}.hasOwnProperty.call(o,u)){if(l.indexOf(u)!==-1)continue;c[u]=o[u]}return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function z9(e,t){return function(n){if(Array.isArray(n))return n}(e)||function(n,r){var a=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var i,o,l,c,u=[],d=!0,m=!1;try{if(l=(a=a.call(n)).next,r===0){if(Object(a)!==a)return;d=!1}else for(;!(d=(i=l.call(a)).done)&&(u.push(i.value),u.length!==r);d=!0);}catch(h){m=!0,o=h}finally{try{if(!d&&a.return!=null&&(c=a.return(),Object(c)!==c))return}finally{if(m)throw o}}return u}}(e,t)||I2(e,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function M2(e){return function(t){if(Array.isArray(t))return tl(t)}(e)||function(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||I2(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function $2(e){var t=function(n,r){if(typeof n!="object"||!n)return n;var a=n[Symbol.toPrimitive];if(a!==void 0){var i=a.call(n,r||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}(e,"string");return typeof t=="symbol"?t:t+""}function Pn(e){return Pn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pn(e)}function I2(e,t){if(e){if(typeof e=="string")return tl(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?tl(e,t):void 0}}var x1={cookieTestUrl:"https://legacy-staging.paystack.co/test-iframe/start.html",publishableKey:"uFmz/uE/SDT6GupOrSEXIZXGByjQ0zFkPyc9LqKHFqnTI0WPN3JS5kQPo/j9or0TOXlqMQj2lzHn/UGsQT4XeQ==",publicKey:`-----BEGIN PUBLIC KEY-----\r
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALhZs/7hP0g0+hrqTq0hFyGVxgco0NMx\r
ZD8nPS6ihxap0yNFjzdyUuZED6P4/aK9Ezl5ajEI9pcx5/1BrEE+F3kCAwEAAQ==\r
-----END PUBLIC KEY-----`,applePayVersion:6,applePayValidateSessionPath:"applepay/validate-session/",applePayChargePath:"applepay/charge"},T9=de(de({},x1),{},{checkoutUrl:"http://localhost:8081/",paymentBaseUrl:"https://legacy-staging.paystack.co/",paystackApiUrl:"https://studio-api.paystack.co/",siteUrl:"https://paystack.com",pusherKey:"1c7b262ee18455815893",pusherUrl:"http://localhost:8081/static/vendor/pusher.min.js"}),l0=de(de({},x1),{},{checkoutUrl:"https://checkout-studio.paystack.com/",paymentBaseUrl:"https://legacy-staging.paystack.co/",paystackApiUrl:"https://studio-api.paystack.co/",siteUrl:"https://beta.paystack.com",pusherKey:"1c7b262ee18455815893",pusherUrl:"https://checkout-studio.paystack.com/static/vendor/pusher.min.js"}),qe={dev:T9,staging:l0,production:de(de({},x1),{},{checkoutUrl:"https://checkout.paystack.com/",paymentBaseUrl:"https://standard.paystack.co/",paystackApiUrl:"https://api.paystack.co/",siteUrl:"https://paystack.com",pusherKey:"8e4b9b7ca3418bd5cdc8",pusherUrl:"https://checkout.paystack.com/static/vendor/pusher.min.js"})}.production||l0;function A2(e,t){var n=[];return Object.keys(e).forEach(function(r){var a=t?"".concat(t,"[").concat(r,"]"):r,i=e[a];n.push(i!==null&&(typeof v>"u"?"undefined":Pn(v))==="object"?A2(i,a):"".concat(encodeURIComponent(r),"=").concat(encodeURIComponent(i)))}),n.join("&")}function Vn(){return document.currentScript||(e=document.getElementsByTagName("script"))[e.length-1];var e}function c0(){var e=[],t=Vn();if(t){var n=Array.prototype.slice.call(t.attributes);e=Object.keys(n).filter(function(r){var a=n[r].nodeName;return a&&a.indexOf("data")>-1}).map(function(r){return n[r].nodeName})}return e}var V2=`
  <svg id="inline-button-wordmark--white" width="137" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M.037 5.095l1.075-.135c-.011-.774-.025-1.944-.013-2.149C1.19 1.364 2.38.134 3.81.013 3.9.006 3.99.002 4.077 0a2.947 2.947 0 0 1 2.046.76c.574.509.95 1.26 1.008 2.007.015.192.01 1.491.01 2.257l1.096.163L8.2 11.44 4.093 12 0 11.346l.037-6.251zm4.106-.514l1.724.256c-.007-.933-.05-2.295-.26-2.654-.319-.545-.846-.867-1.443-.88h-.063c-.607.008-1.138.322-1.458.864-.222.378-.266 1.66-.265 2.637l1.765-.223zM18.228 10.108c-.576 0-1.064-.072-1.464-.216a2.864 2.864 0 0 1-.972-.6 2.552 2.552 0 0 1-.588-.864 4.067 4.067 0 0 1-.252-1.044h1.008c.032.256.088.5.168.732.08.224.204.424.372.6.168.168.388.304.66.408.28.096.636.144 1.068.144.28 0 .536-.036.768-.108.24-.08.448-.192.624-.336.176-.144.312-.316.408-.516.104-.2.156-.42.156-.66 0-.24-.032-.448-.096-.624a1.02 1.02 0 0 0-.336-.468 1.885 1.885 0 0 0-.636-.324 6.4 6.4 0 0 0-1.008-.228 8.79 8.79 0 0 1-1.212-.276 3.246 3.246 0 0 1-.9-.432 1.982 1.982 0 0 1-.564-.672c-.128-.272-.192-.6-.192-.984 0-.328.068-.632.204-.912.136-.288.324-.536.564-.744.248-.208.54-.372.876-.492.336-.12.708-.18 1.116-.18.864 0 1.548.204 2.052.612.512.4.812.984.9 1.752h-.936c-.104-.544-.316-.932-.636-1.164-.32-.24-.78-.36-1.38-.36-.592 0-1.04.132-1.344.396a1.255 1.255 0 0 0-.444.996c0 .208.024.396.072.564.056.16.156.3.3.42.152.12.36.228.624.324a6.72 6.72 0 0 0 1.068.228c.48.072.9.168 1.26.288.36.12.664.276.912.468s.432.428.552.708c.128.28.192.624.192 1.032 0 .36-.076.696-.228 1.008a2.472 2.472 0 0 1-.612.804c-.264.224-.58.4-.948.528-.36.128-.752.192-1.176.192zM25.355 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM32.091 10.108c-.44 0-.848-.072-1.224-.216a3.054 3.054 0 0 1-.972-.636 3.12 3.12 0 0 1-.648-1.008 3.626 3.626 0 0 1-.228-1.32v-.096c0-.48.08-.916.24-1.308.16-.4.376-.74.648-1.02.28-.28.604-.496.972-.648.376-.16.772-.24 1.188-.24.328 0 .644.04.948.12.312.08.588.208.828.384.248.168.456.392.624.672.168.28.276.62.324 1.02h-.984c-.08-.496-.284-.848-.612-1.056-.32-.208-.696-.312-1.128-.312a1.93 1.93 0 0 0-.804.168c-.24.112-.452.272-.636.48a2.23 2.23 0 0 0-.42.744 2.991 2.991 0 0 0-.156.996v.096c0 .776.188 1.364.564 1.764.384.392.88.588 1.488.588.224 0 .436-.032.636-.096a1.651 1.651 0 0 0 .96-.768c.112-.192.18-.416.204-.672h.924a2.595 2.595 0 0 1-.276.948 2.386 2.386 0 0 1-.576.744c-.24.208-.52.372-.84.492-.32.12-.668.18-1.044.18zM38.335 10.108a2.83 2.83 0 0 1-.876-.132 1.724 1.724 0 0 1-.684-.42 2.145 2.145 0 0 1-.456-.756c-.112-.304-.168-.672-.168-1.104V3.724h.996v3.924c0 .552.116.956.348 1.212.24.256.608.384 1.104.384.224 0 .44-.036.648-.108.208-.072.392-.18.552-.324.16-.144.288-.324.384-.54.096-.216.144-.464.144-.744V3.724h.996V10h-.996v-.996c-.144.296-.388.556-.732.78-.336.216-.756.324-1.26.324zM43.216 3.724h.996v1.128c.2-.352.452-.64.756-.864.312-.232.748-.356 1.308-.372v.936a4.461 4.461 0 0 0-.852.12 1.647 1.647 0 0 0-.66.324 1.472 1.472 0 0 0-.408.612c-.096.248-.144.564-.144.948V10h-.996V3.724zM50 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM56.496 10.108c-.408 0-.788-.068-1.14-.204a2.683 2.683 0 0 1-.9-.612 3.01 3.01 0 0 1-.588-.984 4.01 4.01 0 0 1-.204-1.32v-.096c0-.48.072-.92.216-1.32.144-.4.344-.744.6-1.032.256-.296.564-.524.924-.684.36-.16.756-.24 1.188-.24.528 0 .956.112 1.284.336.328.216.584.476.768.78V.724h.996V10h-.996V8.92c-.088.152-.208.3-.36.444a2.792 2.792 0 0 1-.516.384 2.874 2.874 0 0 1-.6.252c-.216.072-.44.108-.672.108zm.108-.828c.288 0 .56-.048.816-.144.256-.096.476-.24.66-.432.184-.2.328-.448.432-.744.112-.304.168-.656.168-1.056v-.096c0-.808-.18-1.404-.54-1.788-.352-.384-.836-.576-1.452-.576-.624 0-1.112.208-1.464.624-.352.416-.528 1.008-.528 1.776v.096c0 .392.048.736.144 1.032.104.296.24.54.408.732.176.192.38.336.612.432.232.096.48.144.744.144zM67.712 10.108c-.512 0-.948-.112-1.308-.336a2.38 2.38 0 0 1-.816-.804V10h-.996V.724h.996V4.78a1.92 1.92 0 0 1 .348-.432c.152-.144.32-.268.504-.372.192-.112.396-.2.612-.264.216-.064.436-.096.66-.096.408 0 .788.072 1.14.216.352.144.652.352.9.624.256.272.456.604.6.996.144.392.216.832.216 1.32v.096c0 .48-.068.92-.204 1.32a3.103 3.103 0 0 1-.576 1.02 2.583 2.583 0 0 1-.9.672 2.937 2.937 0 0 1-1.176.228zm-.096-.828c.624 0 1.1-.2 1.428-.6.328-.408.492-.996.492-1.764V6.82c0-.4-.052-.748-.156-1.044a2.095 2.095 0 0 0-.42-.732 1.53 1.53 0 0 0-.612-.444 1.798 1.798 0 0 0-.744-.156c-.288 0-.56.048-.816.144a1.71 1.71 0 0 0-.648.444c-.184.192-.328.44-.432.744a3.152 3.152 0 0 0-.156 1.044v.096c0 .8.192 1.396.576 1.788.384.384.88.576 1.488.576zM73.63 9.352l-2.46-5.628h1.068l1.92 4.5 1.74-4.5h1.02l-3.468 8.46h-1.008l1.188-2.832zM87.127 3.669A3.138 3.138 0 0 0 86.1 2.95a3.09 3.09 0 0 0-1.228-.25c-.448 0-.848.086-1.187.26a2.199 2.199 0 0 0-.662.497v-.191a.387.387 0 0 0-.214-.348.323.323 0 0 0-.14-.03h-1.315a.314.314 0 0 0-.254.116.377.377 0 0 0-.1.262v8.97c0 .1.034.188.1.258a.34.34 0 0 0 .254.103h1.341a.342.342 0 0 0 .244-.103.336.336 0 0 0 .11-.259v-3.06c.178.202.417.357.702.464.35.134.72.203 1.093.203.43 0 .848-.082 1.242-.248a3.124 3.124 0 0 0 1.04-.724c.305-.326.545-.709.707-1.128a3.93 3.93 0 0 0 .263-1.477c0-.54-.086-1.037-.263-1.477a3.387 3.387 0 0 0-.706-1.12zm-1.204 3.24c-.073.19-.18.362-.315.51a1.415 1.415 0 0 1-1.065.466c-.2.001-.4-.04-.584-.12a1.484 1.484 0 0 1-.49-.346 1.593 1.593 0 0 1-.32-.51 1.738 1.738 0 0 1-.115-.63c0-.224.04-.435.115-.631a1.532 1.532 0 0 1 .804-.846c.185-.086.386-.13.59-.129.215 0 .414.044.593.13.177.083.338.199.474.341a1.622 1.622 0 0 1 .425 1.135c0 .225-.037.436-.112.63zM95.298 2.89h-1.33a.339.339 0 0 0-.246.11.384.384 0 0 0-.108.266v.166a1.856 1.856 0 0 0-.602-.472 2.525 2.525 0 0 0-1.166-.258 3.227 3.227 0 0 0-2.284.964 3.554 3.554 0 0 0-.734 1.123 3.827 3.827 0 0 0-.275 1.477c0 .54.092 1.037.275 1.477.184.434.427.817.728 1.128a3.146 3.146 0 0 0 2.277.973c.437 0 .834-.088 1.173-.259.25-.13.456-.287.608-.471v.177a.34.34 0 0 0 .11.259.341.341 0 0 0 .244.104h1.33a.324.324 0 0 0 .25-.105.349.349 0 0 0 .102-.258V3.267a.377.377 0 0 0-.1-.262.325.325 0 0 0-.252-.115zM93.502 6.9a1.55 1.55 0 0 1-.312.511c-.136.143-.296.26-.473.344-.178.085-.38.129-.596.129-.207 0-.407-.044-.59-.13a1.501 1.501 0 0 1-.791-.855 1.766 1.766 0 0 1-.112-.62c0-.225.038-.436.112-.632.075-.193.181-.364.314-.504.137-.143.3-.26.478-.342.182-.085.382-.129.59-.129.215 0 .417.044.595.13.178.085.338.2.473.341a1.623 1.623 0 0 1 .424 1.135c0 .215-.037.424-.112.622zM108.567 6.094a2.265 2.265 0 0 0-.654-.402c-.247-.101-.509-.181-.785-.235l-1.014-.204c-.26-.05-.441-.117-.543-.203a.328.328 0 0 1-.136-.264c0-.11.063-.2.189-.282.137-.086.329-.13.566-.13.26 0 .518.053.757.157.243.106.471.226.67.36.295.187.546.162.727-.053l.487-.57a.543.543 0 0 0 .152-.357c0-.128-.064-.245-.185-.351-.207-.184-.533-.378-.971-.568-.437-.192-.987-.29-1.637-.29-.427 0-.82.058-1.168.172-.35.116-.65.276-.893.474-.245.204-.438.44-.57.713a2 2 0 0 0-.198.875c0 .56.167 1.017.496 1.358.328.333.766.56 1.304.67l1.054.232c.3.062.528.132.675.21.129.067.19.163.19.297 0 .12-.061.227-.188.324-.133.104-.342.155-.622.155a1.83 1.83 0 0 1-.831-.19 3.056 3.056 0 0 1-.678-.458.995.995 0 0 0-.307-.17c-.126-.037-.268.003-.431.13l-.583.461c-.169.145-.24.32-.209.522.029.194.19.394.491.62.269.193.614.368 1.029.518.415.151.901.229 1.453.229.444 0 .854-.058 1.215-.172.362-.119.681-.278.941-.48a2.056 2.056 0 0 0 .819-1.663c0-.319-.053-.6-.165-.836a1.843 1.843 0 0 0-.447-.6zM114.383 7.73a.363.363 0 0 0-.295-.192.55.55 0 0 0-.343.113c-.095.062-.198.11-.306.141a.75.75 0 0 1-.426.013.43.43 0 0 1-.181-.093.554.554 0 0 1-.143-.204.92.92 0 0 1-.059-.362v-2.46h1.731c.099 0 .188-.04.266-.117a.368.368 0 0 0 .112-.26V3.268a.369.369 0 0 0-.115-.268.38.38 0 0 0-.263-.109h-1.732V1.216a.354.354 0 0 0-.108-.27.347.347 0 0 0-.243-.104h-1.344a.36.36 0 0 0-.34.226.371.371 0 0 0-.027.148V2.89h-.767a.324.324 0 0 0-.255.115.385.385 0 0 0-.098.262V4.31a.4.4 0 0 0 .212.346c.044.021.092.032.14.03h.768v2.925c0 .39.069.726.2 1.003.132.274.305.504.514.676.217.178.465.31.731.388.27.084.551.126.833.126.385 0 .75-.061 1.094-.18a2.13 2.13 0 0 0 .861-.552c.152-.181.17-.381.046-.581l-.463-.76zM121.672 2.89h-1.329a.339.339 0 0 0-.244.11.39.39 0 0 0-.08.122.394.394 0 0 0-.027.144v.166a1.906 1.906 0 0 0-.605-.472c-.335-.173-.726-.258-1.168-.258-.42 0-.834.083-1.226.249a3.24 3.24 0 0 0-1.055.715 3.528 3.528 0 0 0-.734 1.123 3.79 3.79 0 0 0-.276 1.477c0 .54.092 1.037.275 1.477.184.434.428.817.729 1.128a3.138 3.138 0 0 0 2.273.973 2.59 2.59 0 0 0 1.175-.259c.255-.13.457-.287.612-.471v.177a.34.34 0 0 0 .108.259.343.343 0 0 0 .243.104h1.329a.335.335 0 0 0 .252-.105.364.364 0 0 0 .102-.258V3.267a.38.38 0 0 0-.1-.262.332.332 0 0 0-.115-.087.311.311 0 0 0-.139-.028zM119.876 6.9a1.534 1.534 0 0 1-.786.855 1.362 1.362 0 0 1-.594.129c-.207 0-.405-.044-.588-.13a1.516 1.516 0 0 1-.792-.855 1.757 1.757 0 0 1-.113-.62c0-.225.037-.436.112-.632.073-.187.179-.358.314-.504.138-.143.3-.26.479-.342.184-.086.385-.13.588-.129.217 0 .415.044.594.13.181.085.34.2.472.341.134.143.24.313.314.504a1.73 1.73 0 0 1 0 1.253zM128.978 7.64l-.763-.593c-.146-.118-.284-.15-.404-.1a.742.742 0 0 0-.279.205 2.527 2.527 0 0 1-.583.535c-.192.122-.444.183-.742.183-.219 0-.42-.04-.6-.122a1.423 1.423 0 0 1-.469-.342 1.575 1.575 0 0 1-.308-.51 1.751 1.751 0 0 1-.106-.617c0-.228.034-.438.106-.632.07-.192.173-.363.308-.503.135-.144.295-.26.472-.342.187-.088.391-.132.597-.13.298 0 .547.064.742.187.198.126.396.306.584.534.078.092.17.16.278.206.122.048.259.016.401-.101l.762-.594a.53.53 0 0 0 .201-.269.437.437 0 0 0-.034-.365 3.329 3.329 0 0 0-1.18-1.127c-.504-.291-1.108-.441-1.784-.441a3.519 3.519 0 0 0-2.51 1.033c-.322.322-.576.71-.747 1.137a3.68 3.68 0 0 0-.273 1.407c0 .495.093.968.273 1.402.173.424.427.808.747 1.128a3.527 3.527 0 0 0 2.51 1.034c.676 0 1.28-.149 1.784-.444a3.286 3.286 0 0 0 1.182-1.13.411.411 0 0 0 .055-.173.415.415 0 0 0-.023-.182.624.624 0 0 0-.197-.273zM136.06 9.045l-2.104-3.143 1.801-2.415c.094-.139.119-.272.075-.397-.031-.09-.116-.2-.334-.2h-1.425a.52.52 0 0 0-.234.058.482.482 0 0 0-.209.205L132.191 5.2h-.349V.363a.37.37 0 0 0-.099-.26.352.352 0 0 0-.253-.103h-1.332a.37.37 0 0 0-.337.22.346.346 0 0 0-.027.143V9.29c0 .103.038.193.11.259a.353.353 0 0 0 .254.104h1.333a.328.328 0 0 0 .251-.105.346.346 0 0 0 .075-.119.333.333 0 0 0 .024-.14V6.927h.386l1.571 2.446c.112.187.267.281.46.281h1.491c.226 0 .32-.11.358-.202.054-.13.038-.262-.047-.406zM102.863 2.89h-1.489a.389.389 0 0 0-.298.122.544.544 0 0 0-.13.249l-1.099 4.167h-.268l-1.182-4.167a.66.66 0 0 0-.113-.247.329.329 0 0 0-.264-.124h-1.544c-.199 0-.325.066-.372.193a.588.588 0 0 0-.002.37l1.887 5.865c.03.093.08.17.145.232a.388.388 0 0 0 .281.104h.798l-.066.19-.19.547a.872.872 0 0 1-.29.426.7.7 0 0 1-.442.148.956.956 0 0 1-.4-.09 1.842 1.842 0 0 1-.35-.209.62.62 0 0 0-.335-.115h-.016c-.13 0-.243.074-.334.216l-.474.708c-.193.304-.086.504.039.615.234.224.528.399.875.524.344.125.723.186 1.126.186.682 0 1.252-.187 1.689-.565.435-.376.756-.887.952-1.524l2.188-7.258c.05-.155.05-.284.005-.389-.037-.08-.125-.174-.327-.174z" fill="#ffffff"/>
  </svg>
`,P9=`
<svg id="inline-button-wordmark--grey" width="166" height="16" viewBox="0 0 166 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
  d="M0.564068 6.26985L1.86515 6.10375C1.85184 5.15143 1.83489 3.71187 1.84942 3.45964C1.95955 1.67927 3.39982 0.16589 5.13056 0.0170127C5.23949 0.00839996 5.34842 0.0034784 5.45371 0.00101762C6.36645 -0.0209585 7.25272 0.313716 7.93 0.936113C8.62472 1.56238 9.07979 2.4864 9.14999 3.4055C9.16815 3.64174 9.1621 5.24002 9.1621 6.18249L10.4886 6.38305L10.4438 14.0767L5.47308 14.7657L0.519287 13.961L0.564068 6.26985ZM5.53359 5.63743L7.62016 5.95241C7.61169 4.80446 7.55965 3.12867 7.30548 2.68696C6.91939 2.0164 6.28156 1.62021 5.55901 1.60421H5.48276C4.7481 1.61406 4.10543 2.0004 3.71813 2.66727C3.44944 3.13236 3.39619 4.70972 3.3974 5.91181L5.53359 5.63743ZM22.5808 12.4378C21.8836 12.4378 21.293 12.3492 20.8089 12.172C20.372 12.0088 19.9719 11.7577 19.6325 11.4338C19.3256 11.1331 19.0833 10.7712 18.9208 10.3707C18.7637 9.95815 18.6612 9.52621 18.6158 9.08621H19.8358C19.8745 9.40119 19.9423 9.70141 20.0391 9.98686C20.136 10.2625 20.286 10.5085 20.4894 10.7251C20.6927 10.9318 20.959 11.0991 21.2882 11.2271C21.6271 11.3452 22.0579 11.4043 22.5808 11.4043C22.9197 11.4043 23.2295 11.36 23.5103 11.2714C23.8008 11.173 24.0525 11.0351 24.2655 10.858C24.4785 10.6808 24.6431 10.4692 24.7593 10.2231C24.8852 9.97701 24.9481 9.70633 24.9481 9.41103C24.9481 9.11574 24.9094 8.85982 24.8319 8.64327C24.7536 8.41559 24.6125 8.21568 24.4253 8.06745C24.196 7.88594 23.9347 7.75064 23.6555 7.6688C23.257 7.54201 22.849 7.4482 22.4355 7.38828C21.9393 7.31041 21.4491 7.19693 20.9686 7.04869C20.5808 6.92967 20.2133 6.75038 19.8794 6.51716C19.5939 6.29685 19.3607 6.01432 19.1968 5.69034C19.0418 5.35567 18.9644 4.9521 18.9644 4.47963C18.9644 4.07607 19.0467 3.70203 19.2113 3.35752C19.3759 3.00317 19.6034 2.69803 19.8939 2.44211C20.194 2.18619 20.5475 1.98441 20.9541 1.83676C21.3608 1.68911 21.811 1.61529 22.3048 1.61529C23.3505 1.61529 24.1784 1.86629 24.7884 2.36829C25.4081 2.86044 25.7711 3.57899 25.8777 4.52393H24.7448C24.6189 3.8546 24.3624 3.37721 23.9751 3.09176C23.5878 2.79646 23.031 2.64882 22.3048 2.64882C21.5883 2.64882 21.0461 2.81123 20.6782 3.13605C20.5037 3.28606 20.3648 3.47417 20.2717 3.68635C20.1787 3.89853 20.1339 4.12931 20.1408 4.36152C20.1408 4.61744 20.1698 4.84875 20.2279 5.05546C20.2957 5.25232 20.4167 5.42457 20.591 5.57222C20.775 5.71987 21.0267 5.85275 21.3463 5.97087C21.7689 6.09987 22.2012 6.19369 22.6389 6.25139C23.2198 6.33998 23.7281 6.4581 24.1639 6.60575C24.5996 6.75339 24.9675 6.94533 25.2677 7.18157C25.5678 7.4178 25.7905 7.70818 25.9358 8.05268C26.0907 8.39719 26.1681 8.82045 26.1681 9.32245C26.1681 9.76539 26.0761 10.1788 25.8922 10.5627C25.7149 10.9408 25.4627 11.2775 25.1515 11.5519C24.8319 11.8275 24.4495 12.0441 24.0041 12.2016C23.5684 12.359 23.094 12.4378 22.5808 12.4378ZM31.2066 12.4378C30.6741 12.4378 30.1803 12.3443 29.7252 12.1573C29.2906 11.9775 28.8956 11.7115 28.5633 11.3747C28.2268 11.0185 27.965 10.5966 27.7936 10.1345C27.6136 9.61796 27.5251 9.07309 27.5321 8.52515V8.40704C27.5321 7.82629 27.6193 7.29476 27.7936 6.81245C27.9679 6.3203 28.2099 5.90196 28.5198 5.55746C28.8393 5.2031 29.2169 4.93242 29.6526 4.7454C30.0883 4.54854 30.5676 4.45011 31.0905 4.45011C31.5262 4.45011 31.9473 4.52393 32.354 4.67158C32.7704 4.80938 33.1383 5.03085 33.4578 5.33599C33.7773 5.64112 34.0291 6.03977 34.213 6.53192C34.4067 7.01424 34.5035 7.5999 34.5035 8.28892V8.68756H28.7812C28.8102 9.57345 29.0281 10.2526 29.4348 10.7251C29.8414 11.1877 30.4369 11.419 31.2212 11.419C32.4121 11.419 33.085 10.9712 33.24 10.0754H34.4454C34.3099 10.8531 33.9516 11.4436 33.3707 11.8472C32.7897 12.2409 32.0684 12.4378 31.2066 12.4378ZM33.269 7.69833C33.2109 6.90104 32.9882 6.33014 32.6009 5.98563C32.2233 5.64112 31.7198 5.46887 31.0905 5.46887C30.4708 5.46887 29.9624 5.67065 29.5655 6.07422C29.1782 6.46794 28.9313 7.00932 28.8248 7.69833H33.269ZM39.3593 12.4378C38.8267 12.4378 38.3329 12.3492 37.8779 12.172C37.4401 11.9901 37.0407 11.7245 36.7014 11.3895C36.3636 11.0315 36.0973 10.6103 35.9172 10.1493C35.7268 9.63002 35.6332 9.07925 35.6412 8.52515V8.40704C35.6412 7.81645 35.738 7.28 35.9317 6.79769C36.1253 6.30553 36.3868 5.8872 36.716 5.54269C37.0548 5.19818 37.447 4.93242 37.8924 4.7454C38.3475 4.54854 38.8267 4.45011 39.3302 4.45011C39.7272 4.45011 40.1097 4.49932 40.4776 4.59775C40.8552 4.69618 41.1893 4.85367 41.4797 5.07022C41.7799 5.27693 42.0316 5.55253 42.235 5.89704C42.4383 6.24155 42.569 6.65988 42.6271 7.15204H41.4362C41.3393 6.54177 41.0924 6.10867 40.6955 5.85275C40.3082 5.59683 39.8531 5.46887 39.3302 5.46887C38.995 5.46599 38.6632 5.53649 38.3571 5.67557C38.0667 5.81338 37.8101 6.01024 37.5874 6.26616C37.3615 6.53514 37.1889 6.84598 37.0791 7.18157C36.9484 7.57626 36.8845 7.99063 36.8902 8.40704V8.52515C36.8902 9.47994 37.1178 10.2034 37.5729 10.6956C38.0376 11.1779 38.6379 11.419 39.3738 11.419C39.6449 11.419 39.9015 11.3797 40.1436 11.3009C40.6361 11.1497 41.0523 10.8113 41.3055 10.356C41.441 10.1197 41.5233 9.84413 41.5524 9.52915H42.6707C42.6338 9.9361 42.5204 10.3321 42.3366 10.6956C42.1663 11.0447 41.9293 11.3559 41.6395 11.611C41.349 11.8669 41.0101 12.0687 40.6228 12.2163C40.2355 12.364 39.8144 12.4378 39.3593 12.4378ZM46.9164 12.4378C46.5568 12.4406 46.199 12.3858 45.8562 12.2754C45.5441 12.1717 45.2605 11.9947 45.0284 11.7586C44.7829 11.4908 44.595 11.1741 44.4765 10.8284C44.3409 10.4544 44.2731 10.0016 44.2731 9.47009V4.58299H45.4786V9.41103C45.4786 10.0902 45.619 10.5873 45.8998 10.9023C46.1903 11.2172 46.6356 11.3747 47.236 11.3747C47.5071 11.3747 47.7685 11.3304 48.0202 11.2419C48.272 11.1533 48.4947 11.0204 48.6883 10.8432C48.882 10.666 49.0369 10.4446 49.1531 10.1788C49.2693 9.91303 49.3274 9.6079 49.3274 9.26339V4.58299H50.5328V12.3049H49.3274V11.0794C49.1531 11.4436 48.8578 11.7635 48.4414 12.0391C48.0348 12.3049 47.5264 12.4378 46.9164 12.4378ZM52.8239 4.58299H54.0294V5.97087C54.2715 5.53777 54.5765 5.18342 54.9444 4.90781C55.322 4.62236 55.8497 4.46979 56.5275 4.45011V5.60175C56.1799 5.61707 55.8346 5.66652 55.4963 5.7494C55.2039 5.81939 54.9308 5.95567 54.6975 6.14804C54.4729 6.35252 54.303 6.6116 54.2037 6.90104C54.0875 7.20618 54.0294 7.59498 54.0294 8.06745V12.3049H52.8239V4.58299ZM61.0347 12.4378C60.5021 12.4378 60.0083 12.3443 59.5533 12.1573C59.1186 11.9775 58.7236 11.7115 58.3914 11.3747C58.0549 11.0185 57.793 10.5966 57.6216 10.1345C57.4416 9.61796 57.3531 9.07309 57.3602 8.52515V8.40704C57.3602 7.82629 57.4473 7.29476 57.6216 6.81245C57.7959 6.3203 58.038 5.90196 58.3478 5.55746C58.6673 5.2031 59.0449 4.93242 59.4806 4.7454C59.9164 4.54854 60.3956 4.45011 60.9185 4.45011C61.3542 4.45011 61.7754 4.52393 62.1821 4.67158C62.5984 4.80938 62.9663 5.03085 63.2859 5.33599C63.6054 5.64112 63.8571 6.03977 64.0411 6.53192C64.2347 7.01424 64.3316 7.5999 64.3316 8.28892V8.68756H58.6092C58.6383 9.57345 58.8561 10.2526 59.2628 10.7251C59.6695 11.1877 60.2649 11.419 61.0492 11.419C62.2401 11.419 62.9131 10.9712 63.068 10.0754H64.2735C64.1379 10.8531 63.7797 11.4436 63.1987 11.8472C62.6178 12.2409 61.8964 12.4378 61.0347 12.4378ZM63.097 7.69833C63.0389 6.90104 62.8162 6.33014 62.429 5.98563C62.0513 5.64112 61.5478 5.46887 60.9185 5.46887C60.2988 5.46887 59.7905 5.67065 59.3935 6.07422C59.0062 6.46794 58.7593 7.00932 58.6528 7.69833H63.097ZM68.8968 12.4378C68.403 12.4378 67.9431 12.3541 67.5171 12.1868C67.1072 12.0141 66.7365 11.7578 66.4278 11.4338C66.1165 11.0803 65.8749 10.6693 65.7161 10.2231C65.5451 9.69956 65.4617 9.15057 65.4692 8.59898V8.48086C65.4692 7.89027 65.5564 7.3489 65.7307 6.85675C65.905 6.36459 66.147 5.94134 66.4569 5.58698C66.7667 5.22279 67.1395 4.94226 67.5752 4.7454C68.0109 4.54854 68.4902 4.45011 69.013 4.45011C69.6521 4.45011 70.1701 4.58791 70.5671 4.86352C70.964 5.12928 71.2739 5.44918 71.4966 5.82322V0.891819H72.702V12.3049H71.4966V10.9761C71.3901 11.1631 71.2448 11.3452 71.0609 11.5224C70.8713 11.7038 70.6617 11.8623 70.4363 11.9949C70.2066 12.1258 69.963 12.2298 69.7102 12.3049C69.4487 12.3935 69.1776 12.4378 68.8968 12.4378ZM69.0275 11.419C69.3761 11.419 69.7053 11.36 70.0152 11.2419C70.325 11.1237 70.5913 10.9466 70.814 10.7103C71.0367 10.4642 71.2109 10.1591 71.3368 9.79492C71.4724 9.42088 71.5401 8.98778 71.5401 8.49562V8.37751C71.5401 7.38335 71.3223 6.65004 70.8866 6.17757C70.4606 5.7051 69.8748 5.46887 69.1292 5.46887C68.374 5.46887 67.7834 5.72479 67.3573 6.23663C66.9313 6.74847 66.7183 7.47686 66.7183 8.4218V8.53992C66.7183 9.02223 66.7764 9.44549 66.8926 9.80968C67.0184 10.1739 67.183 10.4741 67.3864 10.7103C67.5994 10.9466 67.8463 11.1237 68.1271 11.2419C68.4079 11.36 68.708 11.419 69.0275 11.419ZM82.4716 12.4378C81.852 12.4378 81.3243 12.3 80.8886 12.0244C80.485 11.7813 80.146 11.4417 79.901 11.0351V12.3049H78.6955V0.891819H79.901V5.88228C80.0153 5.68531 80.1572 5.50626 80.3221 5.35075C80.5061 5.17357 80.7094 5.02101 80.9321 4.89305C81.1645 4.75524 81.4114 4.64697 81.6729 4.56822C81.9343 4.48948 82.2005 4.45011 82.4716 4.45011C82.9655 4.45011 83.4254 4.53869 83.8514 4.71587C84.2774 4.89305 84.6405 5.14897 84.9407 5.48363C85.2505 5.8183 85.4926 6.22679 85.6669 6.7091C85.8411 7.19141 85.9283 7.73278 85.9283 8.33321V8.45133C85.9283 9.04192 85.846 9.58329 85.6814 10.0754C85.5295 10.535 85.2929 10.9609 84.9843 11.3304C84.6852 11.6839 84.3133 11.9662 83.895 12.1573C83.4445 12.3492 82.96 12.4447 82.4716 12.4378ZM82.3555 11.419C83.1107 11.419 83.6868 11.173 84.0838 10.6808C84.4808 10.1788 84.6793 9.45533 84.6793 8.51039V8.39227C84.6793 7.90012 84.6163 7.47194 84.4904 7.10775C84.3829 6.77559 84.2099 6.46915 83.9821 6.2071C83.7841 5.96487 83.5294 5.77704 83.2414 5.66081C82.9581 5.53232 82.6511 5.46687 82.3409 5.46887C81.9924 5.46887 81.6632 5.52793 81.3533 5.64604C81.0537 5.7638 80.7852 5.95084 80.569 6.19234C80.3464 6.42857 80.1721 6.73371 80.0462 7.10775C79.9127 7.52209 79.8488 7.95635 79.8574 8.39227V8.51039C79.8574 9.4947 80.0898 10.228 80.5545 10.7103C81.0193 11.1828 81.6196 11.419 82.3555 11.419ZM89.6342 11.5076L86.6569 4.58299H87.9495L90.2733 10.1197L92.3792 4.58299H93.6137L89.4164 14.9921H88.1964L89.6342 11.5076ZM105.97 4.51532C105.618 4.13844 105.195 3.83755 104.727 3.63067C104.257 3.42601 103.751 3.32132 103.241 3.32307C102.698 3.32307 102.214 3.42888 101.804 3.64297C101.501 3.7934 101.229 4.00091 101.003 4.25447V4.01947C101.003 3.93064 100.979 3.84347 100.933 3.76781C100.888 3.69214 100.822 3.631 100.744 3.59129C100.691 3.56626 100.633 3.55364 100.574 3.55438H98.9827C98.9241 3.55245 98.8658 3.56433 98.8125 3.58909C98.7592 3.61385 98.7122 3.65082 98.6753 3.69711C98.5956 3.78474 98.5523 3.90019 98.5542 4.01947V15.0561C98.5542 15.1791 98.5954 15.2874 98.6753 15.3735C98.715 15.4152 98.7629 15.4479 98.8158 15.4698C98.8688 15.4916 98.9256 15.502 98.9827 15.5002H100.606C100.661 15.5001 100.715 15.4889 100.766 15.4671C100.817 15.4453 100.863 15.4135 100.901 15.3735C100.945 15.3333 100.979 15.284 101.002 15.229C101.025 15.174 101.036 15.1146 101.034 15.0548V11.2898C101.25 11.5384 101.539 11.7291 101.884 11.8607C102.307 12.0256 102.755 12.1105 103.207 12.1105C103.727 12.1105 104.233 12.0096 104.71 11.8054C105.185 11.599 105.613 11.2958 105.969 10.9146C106.338 10.5135 106.628 10.0422 106.824 9.52669C107.044 8.94733 107.152 8.33033 107.143 7.70941C107.143 7.045 107.038 6.43349 106.824 5.89212C106.631 5.38011 106.341 4.91182 105.97 4.51409V4.51532ZM104.513 8.50178C104.424 8.73555 104.295 8.94718 104.131 9.12928C103.969 9.31219 103.77 9.45789 103.547 9.55674C103.325 9.65558 103.085 9.70531 102.842 9.70264C102.6 9.70387 102.358 9.65342 102.136 9.55499C101.911 9.4556 101.71 9.31074 101.542 9.12928C101.375 8.94704 101.244 8.73407 101.155 8.50178C101.062 8.25439 101.015 7.99155 101.016 7.72663C101.016 7.45102 101.064 7.19141 101.155 6.95026C101.332 6.48635 101.682 6.1122 102.128 5.90935C102.352 5.80353 102.595 5.7494 102.842 5.75063C103.103 5.75063 103.343 5.80476 103.56 5.91058C103.774 6.0127 103.969 6.15542 104.134 6.33014C104.476 6.71058 104.661 7.21105 104.648 7.72663C104.648 8.00347 104.603 8.26308 104.513 8.50178ZM115.859 3.55684H114.249C114.193 3.55751 114.138 3.56987 114.087 3.59315C114.036 3.61643 113.99 3.65013 113.952 3.69219C113.868 3.78 113.821 3.8973 113.821 4.01947V4.22371C113.62 3.9808 113.372 3.78302 113.092 3.64297C112.654 3.42397 112.17 3.31511 111.681 3.32553C111.166 3.32821 110.657 3.43439 110.183 3.63795C109.708 3.84151 109.278 4.13843 108.917 4.51162C108.537 4.91069 108.236 5.37962 108.029 5.89335C107.801 6.47081 107.687 7.08847 107.696 7.71064C107.696 8.37505 107.807 8.98655 108.029 9.52792C108.251 10.0619 108.545 10.5331 108.91 10.9158C109.265 11.2945 109.693 11.5958 110.167 11.8016C110.641 12.0074 111.15 12.1133 111.665 12.113C112.194 12.113 112.675 12.0047 113.085 11.7943C113.388 11.6343 113.637 11.4412 113.821 11.2148V11.4326C113.82 11.4923 113.831 11.5516 113.854 11.6066C113.877 11.6615 113.911 11.7109 113.954 11.7512C113.993 11.7915 114.038 11.8236 114.089 11.8456C114.14 11.8676 114.194 11.879 114.249 11.8792H115.859C115.916 11.8812 115.972 11.8706 116.024 11.8483C116.077 11.826 116.124 11.7925 116.162 11.75C116.203 11.7085 116.235 11.6589 116.256 11.6043C116.277 11.5497 116.287 11.4912 116.285 11.4326V4.0207C116.287 3.90142 116.244 3.78597 116.164 3.69834C116.127 3.65337 116.08 3.61736 116.027 3.5929C115.975 3.56844 115.917 3.55613 115.859 3.55684ZM113.685 8.4907C113.601 8.72324 113.473 8.9368 113.308 9.11943C113.143 9.29538 112.95 9.43933 112.735 9.54269C112.52 9.64727 112.275 9.70141 112.014 9.70141C111.764 9.70141 111.521 9.64727 111.3 9.54146C111.079 9.4398 110.881 9.29437 110.717 9.11372C110.552 8.93306 110.425 8.72082 110.343 8.48947C110.253 8.24551 110.207 7.98712 110.207 7.72663C110.207 7.44979 110.253 7.19018 110.343 6.94903C110.433 6.71156 110.562 6.50116 110.723 6.32891C110.888 6.15296 111.086 6.00901 111.301 5.90812C111.521 5.80353 111.764 5.7494 112.015 5.7494C112.275 5.7494 112.52 5.80353 112.735 5.90935C112.951 6.01393 113.144 6.15542 113.308 6.32891C113.65 6.70961 113.834 7.21001 113.821 7.7254C113.821 7.98993 113.776 8.24709 113.685 8.4907ZM131.919 7.49901C131.685 7.28955 131.417 7.12228 131.127 7.00439C130.828 6.88012 130.511 6.78169 130.177 6.71525L128.95 6.46425C128.635 6.40273 128.416 6.3203 128.293 6.21448C128.242 6.17732 128.201 6.12853 128.172 6.07209C128.144 6.01565 128.128 5.95315 128.128 5.88966C128.128 5.75432 128.204 5.64358 128.357 5.54269C128.523 5.43688 128.755 5.38274 129.042 5.38274C129.357 5.38274 129.669 5.44795 129.958 5.57591C130.252 5.70633 130.528 5.85398 130.769 6.01885C131.126 6.24893 131.43 6.21817 131.649 5.95364L132.238 5.25232C132.351 5.13393 132.416 4.97752 132.422 4.81307C132.422 4.65558 132.345 4.51162 132.198 4.3812C131.948 4.15481 131.553 3.91612 131.023 3.68234C130.494 3.44611 129.829 3.32553 129.042 3.32553C128.525 3.32553 128.049 3.39689 127.628 3.53716C127.205 3.67988 126.842 3.87674 126.547 4.12036C126.251 4.37136 126.017 4.66173 125.858 4.99763C125.699 5.33341 125.617 5.70154 125.618 6.07422C125.618 6.76324 125.82 7.32552 126.218 7.74509C126.615 8.15481 127.145 8.43411 127.796 8.56945L129.072 8.8549C129.435 8.93118 129.711 9.01731 129.889 9.11328C130.045 9.19572 130.119 9.31383 130.119 9.47871C130.119 9.62635 130.045 9.758 129.892 9.87735C129.731 10.0053 129.478 10.0681 129.139 10.0681C128.79 10.0717 128.445 9.99161 128.133 9.83429C127.836 9.68469 127.56 9.49515 127.312 9.27077C127.202 9.17922 127.076 9.1084 126.941 9.0616C126.788 9.01608 126.616 9.0653 126.419 9.22155L125.714 9.78876C125.509 9.96717 125.423 10.1825 125.461 10.431C125.496 10.6697 125.691 10.9158 126.055 11.1939C126.38 11.4313 126.798 11.6467 127.3 11.8312C127.803 12.017 128.391 12.113 129.059 12.113C129.596 12.113 130.092 12.0416 130.529 11.9013C130.967 11.7549 131.354 11.5593 131.668 11.3108C131.98 11.0724 132.231 10.7631 132.404 10.4077C132.576 10.0523 132.663 9.66076 132.659 9.26462C132.659 8.87212 132.595 8.52638 132.46 8.23601C132.331 7.95492 132.147 7.70366 131.919 7.49778V7.49901ZM138.958 9.51193C138.923 9.445 138.872 9.3882 138.809 9.34687C138.747 9.30555 138.675 9.28105 138.601 9.27569C138.451 9.27322 138.305 9.3222 138.186 9.41473C138.071 9.49101 137.946 9.55007 137.815 9.58821C137.649 9.64412 137.47 9.64967 137.3 9.60421C137.219 9.58443 137.144 9.54519 137.081 9.48978C137.005 9.42056 136.946 9.33472 136.908 9.23878C136.855 9.09669 136.83 8.94521 136.836 8.79338V5.76662H138.931C139.051 5.76662 139.159 5.71741 139.253 5.62267C139.295 5.58108 139.329 5.5314 139.352 5.4765C139.376 5.42159 139.388 5.36254 139.389 5.30276V4.02193C139.389 3.96024 139.377 3.89918 139.353 3.84249C139.329 3.78579 139.294 3.73465 139.25 3.69219C139.165 3.60724 139.05 3.55916 138.931 3.55807H136.835V1.49717C136.838 1.43555 136.827 1.37406 136.805 1.31679C136.782 1.25952 136.748 1.20777 136.704 1.16497C136.627 1.08454 136.521 1.03854 136.41 1.03701H134.784C134.695 1.03555 134.609 1.06135 134.535 1.11101C134.462 1.16066 134.405 1.23182 134.372 1.31507C134.349 1.37287 134.338 1.43484 134.339 1.49717V3.55684H133.411C133.353 3.55549 133.294 3.5675 133.241 3.59199C133.188 3.61647 133.14 3.65281 133.102 3.69834C133.025 3.78687 132.982 3.90193 132.984 4.0207V5.304C132.985 5.39177 133.01 5.47753 133.055 5.55238C133.1 5.62724 133.164 5.68846 133.24 5.72971C133.294 5.75555 133.352 5.76908 133.41 5.76662H134.339V9.36551C134.339 9.84536 134.423 10.2588 134.581 10.5996C134.741 10.9367 134.951 11.2197 135.204 11.4313C135.466 11.6503 135.766 11.8128 136.088 11.9087C136.415 12.0121 136.755 12.0638 137.096 12.0638C137.562 12.0638 138.004 11.9887 138.421 11.8423C138.817 11.7053 139.175 11.4722 139.463 11.1631C139.647 10.9404 139.668 10.6943 139.518 10.4483L138.958 9.51316V9.51193ZM147.78 3.55684H146.171C146.116 3.55785 146.061 3.57036 146.01 3.59363C145.959 3.6169 145.914 3.65043 145.876 3.69219C145.835 3.73558 145.802 3.78651 145.779 3.84229C145.758 3.89876 145.746 3.95885 145.747 4.01947V4.22371C145.544 3.98167 145.295 3.78409 145.014 3.64297C144.609 3.43011 144.136 3.32553 143.601 3.32553C143.092 3.32553 142.591 3.42765 142.117 3.6319C141.638 3.83631 141.204 4.13534 140.84 4.51162C140.46 4.9102 140.158 5.37925 139.952 5.89335C139.722 6.47038 139.608 7.08828 139.618 7.71064C139.618 8.37505 139.729 8.98655 139.95 9.52792C140.173 10.0619 140.468 10.5331 140.833 10.9158C141.188 11.2943 141.614 11.5956 142.087 11.8014C142.56 12.0072 143.069 12.1132 143.584 12.113C144.076 12.1217 144.563 12.0125 145.006 11.7943C145.314 11.6343 145.559 11.4412 145.747 11.2148V11.4326C145.745 11.4921 145.756 11.5513 145.778 11.6062C145.801 11.6612 145.834 11.7106 145.877 11.7512C145.916 11.7913 145.961 11.8232 146.012 11.8452C146.062 11.8671 146.116 11.8787 146.171 11.8792H147.78C147.837 11.8806 147.893 11.8699 147.946 11.8476C147.998 11.8254 148.046 11.7921 148.085 11.75C148.166 11.6649 148.21 11.5508 148.208 11.4326V4.0207C148.21 3.90149 148.167 3.78617 148.087 3.69834C148.049 3.65272 148.002 3.61618 147.948 3.59129C147.895 3.56679 147.838 3.555 147.78 3.55684ZM145.606 8.4907C145.437 8.95456 145.095 9.33232 144.655 9.54269C144.43 9.64997 144.184 9.70423 143.936 9.70141C143.685 9.70141 143.446 9.64727 143.224 9.54146C143.004 9.43906 142.806 9.2934 142.642 9.11285C142.477 8.9323 142.349 8.72044 142.266 8.48947C142.175 8.24565 142.129 7.98721 142.129 7.72663C142.129 7.44979 142.174 7.19018 142.264 6.94903C142.353 6.71894 142.481 6.50855 142.645 6.32891C142.812 6.15296 143.008 6.00901 143.224 5.90812C143.447 5.8023 143.69 5.74817 143.936 5.7494C144.199 5.7494 144.438 5.80353 144.655 5.90935C144.874 6.01393 145.066 6.15542 145.226 6.32891C145.388 6.50486 145.517 6.71402 145.606 6.94903C145.796 7.44486 145.796 7.99486 145.606 8.4907ZM156.622 9.40119L155.699 8.67157C155.522 8.52638 155.355 8.48701 155.21 8.54853C155.079 8.60436 154.964 8.69079 154.872 8.80076C154.673 9.05649 154.434 9.27863 154.167 9.45902C153.934 9.60913 153.629 9.68418 153.269 9.68418C153.004 9.68418 152.76 9.63496 152.542 9.53407C152.327 9.43495 152.134 9.2917 151.975 9.11328C151.812 8.93013 151.686 8.71715 151.602 8.48578C151.515 8.24262 151.471 7.98546 151.474 7.72663C151.474 7.4461 151.515 7.18772 151.602 6.94903C151.687 6.71279 151.811 6.50239 151.975 6.33014C152.138 6.15296 152.332 6.01024 152.546 5.90935C152.772 5.80107 153.019 5.74694 153.269 5.7494C153.629 5.7494 153.931 5.82814 154.167 5.97948C154.406 6.13451 154.646 6.35598 154.873 6.63651C154.968 6.7497 155.079 6.83337 155.21 6.88997C155.358 6.94903 155.523 6.90965 155.695 6.7657L156.618 6.03485C156.732 5.95424 156.817 5.83809 156.861 5.70387C156.886 5.63045 156.896 5.55227 156.889 5.47473C156.882 5.39719 156.858 5.32214 156.82 5.25478C156.464 4.67928 155.973 4.20275 155.391 3.86813C154.781 3.51009 154.05 3.32553 153.232 3.32553C152.668 3.32238 152.109 3.43311 151.588 3.65129C151.066 3.86947 150.593 4.19076 150.194 4.59652C149.805 4.99271 149.497 5.4701 149.29 5.99547C149.07 6.54494 148.957 7.13314 148.96 7.72663C148.96 8.33567 149.072 8.91765 149.29 9.45164C149.5 9.97332 149.807 10.4458 150.194 10.8395C150.593 11.2451 151.067 11.5663 151.588 11.7846C152.11 12.003 152.668 12.1142 153.232 12.1117C154.05 12.1117 154.781 11.9284 155.391 11.5654C155.976 11.232 156.468 10.7537 156.822 10.1751C156.86 10.1101 156.882 10.0374 156.889 9.96225C156.896 9.88643 156.886 9.80992 156.861 9.73832C156.813 9.60626 156.731 9.49007 156.622 9.40242V9.40119ZM165.194 11.1299L162.647 7.26277L164.827 4.29138C164.941 4.12036 164.971 3.95672 164.918 3.80292C164.88 3.69219 164.777 3.55684 164.514 3.55684H162.789C162.69 3.55775 162.593 3.58219 162.506 3.62821C162.398 3.68359 162.309 3.77173 162.253 3.88043L160.511 6.39904H160.089V0.447649C160.091 0.329229 160.048 0.214475 159.969 0.127748C159.929 0.0869473 159.881 0.0547186 159.828 0.0329554C159.776 0.0111921 159.719 0.000333517 159.663 0.00101762H158.051C157.964 0.00131009 157.88 0.0270233 157.807 0.0750545C157.735 0.123086 157.678 0.191382 157.643 0.271703C157.62 0.327334 157.608 0.387308 157.61 0.447649V11.4313C157.61 11.5581 157.656 11.6688 157.743 11.75C157.783 11.7911 157.831 11.8236 157.884 11.8456C157.937 11.8676 157.993 11.8786 158.051 11.878H159.664C159.721 11.8798 159.777 11.8692 159.83 11.8469C159.882 11.8246 159.929 11.7912 159.968 11.7488C160.007 11.7068 160.038 11.657 160.058 11.6024C160.08 11.5477 160.09 11.489 160.087 11.4301V8.52392H160.555L162.456 11.5335C162.592 11.7635 162.779 11.8792 163.013 11.8792H164.817C165.091 11.8792 165.205 11.7439 165.251 11.6307C165.316 11.4707 165.297 11.3083 165.194 11.1311V11.1299ZM125.015 3.55684H123.213C123.146 3.55424 123.079 3.56628 123.017 3.59218C122.954 3.61807 122.898 3.6572 122.852 3.70695C122.774 3.79331 122.72 3.89895 122.695 4.01332L121.365 9.14035H121.041L119.61 4.01332C119.586 3.90347 119.539 3.79998 119.473 3.70941C119.435 3.66072 119.386 3.62162 119.331 3.59516C119.276 3.5687 119.215 3.55559 119.154 3.55684H117.285C117.044 3.55684 116.892 3.63805 116.835 3.79431C116.786 3.94184 116.785 4.10149 116.832 4.24955L119.116 11.4658C119.152 11.5802 119.213 11.675 119.292 11.7512C119.337 11.7944 119.391 11.828 119.449 11.8499C119.507 11.8719 119.57 11.8818 119.632 11.8792H120.598L120.518 12.113L120.288 12.786C120.225 12.9927 120.103 13.1754 119.937 13.3101C119.784 13.4312 119.595 13.4954 119.402 13.4922C119.234 13.4914 119.069 13.4536 118.918 13.3815C118.768 13.312 118.625 13.2257 118.494 13.1243C118.375 13.0381 118.234 12.9889 118.089 12.9829H118.069C117.912 12.9829 117.775 13.0739 117.665 13.2486L117.091 14.1197C116.858 14.4938 116.987 14.7399 117.139 14.8764C117.422 15.152 117.778 15.3673 118.198 15.5211C118.614 15.6749 119.073 15.75 119.56 15.75C120.386 15.75 121.076 15.5199 121.605 15.0548C122.131 14.5922 122.52 13.9635 122.757 13.1797L125.405 4.24955C125.465 4.05884 125.465 3.90012 125.411 3.77093C125.366 3.6725 125.26 3.55684 125.015 3.55684Z"
  fill="#838383"
/>
</svg>
`,O9=`
  <button type="button" id="apple-pay-close-button">
    <svg width="10" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.572 4.033L8.89.71a.4.4 0 0 0-.566-.566L5.003 3.459 1.681.145a.4.4 0 0 0-.566.566L4.44 4.033
      1.115 7.354a.398.398 0 0 0 0 .566.4.4 0 0 0 .566 0l3.322-3.33 3.322 3.33a.4.4 0 0 0 .566-.566L5.57 4.033z"
        fill="white"
      />
    </svg>
  </button>
`,R9=`
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
`,Hs={height:"50px",width:"auto",borderRadius:"3px",padding:"10px",locale:"en",type:"pay"},u0=function(e){return e&&Pn(e)==="object"?Object.keys(Hs).reduce(function(t,n){return de(de({},t),{},L2({},n,e[n]||Hs[n]))},{}):Hs},L9=`
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
`,d0=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Number(parseFloat(e/100).toFixed(2))},p0={headers:{accept:"application/json, text/plain, */*","accept-language":"en-GB,en-US;q=0.9,en;q=0.8","content-type":"application/x-www-form-urlencoded","sec-ch-ua-mobile":"?0","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site"},referrerPolicy:"no-referrer-when-downgrade",method:"POST",mode:"cors",credentials:"omit"};function f0(e){return Object.keys(e).reduce(function(t,n){var r=encodeURIComponent(n),a=encodeURIComponent(e[n]),i="".concat(r,"=").concat(a);return[].concat(M2(t),[i])},[]).join("&")}var M9=function(e){return{biannually:"BIANNUAL PLAN",annually:"ANNUAL PLAN"}[e]||"".concat(e.toUpperCase()," PLAN")},H2=function(){try{return window.location&&window.location.protocol==="https:"&&window.ApplePaySession&&window.ApplePaySession.supportsVersion(qe.applePayVersion)}catch{return!1}},rl=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return H2()&&e.includes("apple_pay")};function $9(){var e=0;return Array.from(document.querySelectorAll("body *")).forEach(function(t){var n=window.getComputedStyle(t),r=parseFloat(n.zIndex);!Number.isNaN(r)&&r>e&&(e=r)}),e}function Ds(e){var t=document.createElement("iframe");return t.setAttribute("frameBorder","0"),t.setAttribute("allowtransparency","true"),t.id=e,t.style.display="none",t}function ni(e){return e.querySelector("apple-pay-button")||e.querySelector("#apple-pay-button")}function Da(e){return document.querySelector("#".concat(e))}function h0(e,t,n){var r=t.channels,a=r===void 0?[]:r,i=t.styles,o=i===void 0?{}:i,l={applePay:!1};return new Promise(function(c,u){if(e)if(rl(a)){if(ni(e))return l.applePay=!0,void c(l);(function(d,m){var h=m.container,w=m.integrity;return new Promise(function(x,b){d||b("No script url");var k=document.createElement("script");k.src=d,k.crossOrigin="anonymous",w&&(k.integrity=w),k.addEventListener("load",function(){x(!0)}),k.addEventListener("error",function(){k.remove(),b(!1)}),h?h.appendChild(k):document.head.appendChild(k)})})("https://applepay.cdn-apple.com/jsapi/v1.1.0/apple-pay-sdk.js",{container:e,integrity:"sha384-z/6BVHCcSypLSykOVpaT1PQWHOOgU45uOOlMkgi/bElX4yFqmChNMb7qiv80wFav"}).then(function(){if(n&&n!==1077497&&window&&!Array.isArray(window.webpackJsonp))throw new Error("Incorrect data type for 'webpackJsonp', expected array, got ".concat(Pn(window.webpackJsonp),". Switching to fallback apple pay button"));(function(d,m){var h,w,x,b,k,g=m.styles,f=m.theme,y=document.createElement("style"),C=(w=(h=g).height,x=h.width,b=h.borderRadius,k=h.padding,`
  apple-pay-button {
    --apple-pay-button-width: `.concat(x,`;
    --apple-pay-button-height: `).concat(w,`;
    --apple-pay-button-border-radius: `).concat(b,`;
    --apple-pay-button-padding: `).concat(k,`;
    --apple-pay-button-box-sizing: border-box;
    width: `).concat(x,`;
  }
`));y.type="text/css",y.styleSheet?y.styleSheet.cssText=C:y.appendChild(document.createTextNode(C)),d.appendChild(y);var j=document.createElement("apple-pay-button");j.setAttribute("buttonstyle",f==="light"?"white":"black"),j.setAttribute("type",g.type),j.setAttribute("locale",g.locale),d.appendChild(j)})(e,{styles:u0(o.applePay),theme:o.theme}),l.applePay=!0,c(l)}).catch(function(){(function(d,m){var h,w,x,b,k,g,f,y=m.styles,C=m.theme,j=document.createElement("style"),S=(w=(h=y).height,x=h.width,b=h.borderRadius,k=h.padding,g=h.type,f=h.locale,`
  @supports (-webkit-appearance: -apple-pay-button) { 
    .apple-pay-button {
        display: inline-block;
        -webkit-appearance: -apple-pay-button;
        width: `.concat(x,`;
        height: `).concat(w,`;
        border-radius: `).concat(b,`;
        padding: `).concat(k,`;
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
`));j.type="text/css",j.styleSheet?j.styleSheet.cssText=S:j.appendChild(document.createTextNode(S)),d.appendChild(j);var N=document.createElement("button");N.classList.add("apple-pay-button",C==="light"?"apple-pay-button-white":"apple-pay-button-black"),N.id="apple-pay-button";var E=document.createElement("span");E.classList.add("logo"),N.appendChild(E),d.appendChild(N)})(e,{styles:u0(o.applePay),theme:o.theme}),l.applePay=!0,c(l)})}else u("No wallet payment method is available on this device");else u("Container to mount elements was not provided")})}function I9(e){for(;e.firstChild;)e.removeChild(e.firstChild)}var D2="payment-request-button",F2="paystackpop-button",B2="pay-with-vault-button";function U2(e){var t=document.createElement("button");return t.id=F2,t.className="open-paystack-pop-button",t.innerText=e,t}function m0(e){return e.querySelector("#".concat(F2))}function q2(){var e=document.createElement("div");return e.id=D2,e}function Fs(e){return e.querySelector("#".concat(D2))}function A9(){var e=document.createElement("button");return e.className="pay-with-vault-button",e.id=B2,e.innerText="Pay with Vault",e}function V9(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=document.createElement("div");n.className="vault-logo-container",n.innerHTML=R9,e.appendChild(n);var r=document.createElement("p");r.id="instruction",r.className="vault-instruction",r.innerHTML="Access your saved cards and bank details for faster, more secure payments",e.appendChild(r);var a=A9();e.appendChild(a);var i=document.createElement("div");if(i.className="vault-divider",i.innerHTML='<div id="vault-divider" class="vault-divider__container"><div class="vault-divider__line"></div></div><div class="vault-divider__text-container"><span class="vault-divider__text">or</span></div>',e.appendChild(i),t.canPayWithApplePay){var o=q2();e.appendChild(o)}if(t.hasOtherPaymentMethods){var l=U2("Use other payment methods");e.appendChild(l)}}function H9(e,t){var n=t.hasOtherPaymentMethods,r=document.createElement("div");r.innerHTML=`
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
`,e.appendChild(r);var a=document.createElement("p");a.id="apple-pay-description",a.innerHTML="Pay with Apple Pay to complete your purchase without filling a form",e.appendChild(a);var i=q2();if(e.appendChild(i),n){var o=U2("More payment options");e.appendChild(o)}}function g0(e){return e.some(function(t){return t!=="apple_pay"})}var Fa=[{value:"key",required:!0,types:["string"]},{value:"amount",required:!0,or:["plan","planCode"],types:["string","number"]},{value:"currency",required:!1,types:["string"]},{value:"email",required:!0,or:["customerCode"],types:["string"]},{value:"label",required:!1,types:["string"]},{value:"firstName",required:!1,types:["string"]},{value:"lastName",required:!1,types:["string"]},{value:"reference",required:!1,types:["string"]},{value:"phone",required:!1,types:["string"]},{value:"customerCode",required:!1,override:"email",types:["string"]},{value:"channels",required:!1,types:["array"]},{value:"paymentRequest",required:!1,types:["string","number"]},{value:"paymentPage",required:!1,types:["string"]},{value:"hash",required:!1,types:["string"]},{value:"container",required:!1,types:["string"]},{value:"metadata",required:!1,types:["object"]},{value:"subaccountCode",required:!1,types:["string"]},{value:"bearer",required:!1,types:["string"]},{value:"transactionCharge",required:!1,types:["string","number"]},{value:"planCode",required:!1,override:"amount",types:["string"]},{value:"subscriptionCount",required:!1,types:["number"]},{value:"planInterval",required:!1,types:["string"]},{value:"subscriptionLimit",required:!1,types:["number"]},{value:"subscriptionStartDate",required:!1,types:["string"]},{value:"accessCode",required:!1,types:["string"]},{value:"onError",required:!1,types:["function"]},{value:"onLoad",required:!1,types:["function"]},{value:"onSuccess",required:!1,types:["function"]},{value:"onCancel",required:!1,types:["function"]},{value:"callback",required:!1,types:["function"]},{value:"onClose",required:!1,types:["function"]},{value:"onBankTransferConfirmationPending",required:!1,types:["function"]},{value:"firstname",required:!1,types:["string"]},{value:"lastname",required:!1,types:["string"]},{value:"customer_code",required:!1,types:["string"]},{value:"payment_request",required:!1,types:["string","number"]},{value:"subaccount",required:!1,types:["string"]},{value:"transaction_charge",required:!1,types:["number","string"]},{value:"plan",required:!1,types:["string"]},{value:"quantity",required:!1,types:["number"]},{value:"interval",required:!1,types:["string"]},{value:"invoice_limit",required:!1,types:["number","string"]},{value:"start_date",required:!1,types:["string"]},{value:"payment_page",required:!1,types:["number","string"]},{value:"order_id",required:!1,types:["number"]},{value:"ref",required:!1,types:["string"]},{value:"card",required:!1,types:["string"]},{value:"bank",required:!1,types:["string"]},{value:"split",required:!1,types:["object"]},{value:"split_code",required:!1,types:["string"]},{value:"transaction_type",required:!1,types:["string"]},{value:"subscription",required:!1,types:["number"]},{value:"language",required:!1,types:["string"]},{value:"connect_account",required:!1,types:["string"]},{value:"connect_split",required:!1,types:["array"]}];function D9(e){return(e==null?void 0:e.length)>500?e.split("?")[0]:e}function F9(e){var t,n,r,a,i=de({},e);return i.metadata=e.metadata||{},i.metadata.referrer=(t=window.location,n=t.href,r=n===void 0?"":n,a=t.ancestorOrigins,[r].concat(M2(a===void 0?[]:a)).map(D9).join(",")),i.metadata=JSON.stringify(i.metadata),i.mode="popup",e.split&&typeof e.split!="string"&&(i.split=JSON.stringify(i.split)),i.card!==void 0&&["false",!1].indexOf(i.card)>-1&&(i.channels=["bank"],delete i.card),i.bank!==void 0&&["false",!1].indexOf(i.bank)>-1&&(i.channels=["card"],delete i.bank),[{to:"firstname",from:"firstName"},{to:"lastname",from:"lastName"},{to:"customer_code",from:"customerCode"},{to:"payment_request",from:"paymentRequest"},{to:"subaccount",from:"subaccountCode"},{to:"transaction_charge",from:"transactionCharge"},{to:"plan",from:"planCode"},{to:"quantity",from:"subscriptionCount"},{to:"interval",from:"planInterval"},{to:"invoice_limit",from:"subscriptionLimit"},{to:"start_date",from:"subscriptionStartDate"},{to:"ref",from:"reference"}].forEach(function(o){i[o.from]&&(i[o.to]=i[o.from],delete i[o.from])}),Object.values(e).forEach(function(o,l){if(typeof o=="function"){var c=Object.keys(e)[l];delete i[c]}}),i}var B9=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"],W2=window&&window.navigator&&(window.navigator.platform||window.navigator.userAgentData&&window.navigator.userAgentData.platform),Q2=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.platform,n=e.userAgent,r=n===void 0?window&&window.navigator&&window.navigator.userAgent:n,a=t||W2;return B9.includes(a)||r.includes("Mac")&&"ontouchend"in document},U9=function(e,t,n){var r="".concat(qe.paystackApiUrl,"transaction/update_log/").concat(e),a={Authorization:"Bearer ".concat(t)};return fetch(r,{method:"POST",body:JSON.stringify({payload:JSON.stringify(n)}),headers:a})},q9=function(e,t){var n="".concat(qe.paystackApiUrl,"transaction/set_ip/").concat(e),r={Authorization:"Bearer ".concat(t)};return fetch(n,{method:"POST",headers:r})},W9={initializeLog:function(e){var t=e||{},n=t.attempts,r=t.authentication,a=t.errors,i=t.history;this.log={start_time:Math.round(Date.now()/1e3),time_spent:0,attempts:n||0,authentication:r,errors:a||0,success:!1,mobile:Q2(),input:[],history:i||[]}},getTimeSpent:function(){var e=Math.round(Date.now()/1e3);return this.log.time_spent=e-this.log.start_time,this.log.time_spent},logAPIResponse:function(e,t){switch(e.status){case"success":return this.logApiSuccess(t);case"failed":return this.logApiError(e.message);default:return!1}},logValidationResponse:function(e){return this.log.history.push({type:"action",message:e,time:this.getTimeSpent()}),this.saveLog()},logAttempt:function(e){var t="Attempted to pay";return e&&(t+=" with ".concat(e)),this.log.attempts+=1,this.log.history.push({type:"action",message:t,time:this.getTimeSpent()}),this.saveLog()},logApiError:function(e){var t="Error";return e&&(t+=": ".concat(e)),this.log.errors+=1,this.log.history.push({type:"error",message:t,time:this.getTimeSpent()}),this.saveLog()},logApiSuccess:function(e){var t="Successfully paid";return e&&(t+=" with ".concat(e)),this.log.success=!0,this.log.history.push({type:"success",message:t,time:this.getTimeSpent()}),this.saveLog()},saveLog:function(){try{if(this.response)return U9(this.id,this.response.merchant_key,this.log)}catch{}},saveIpAddress:function(){try{if(this.response)return q9(this.id,this.response.merchant_key)}catch{}}},Q9=["language","connect_account"],Z9={requestInline:function(){var e=this,t=this.urlParameters,n=t.language,r=t.connect_account,a=nl(t,Q9),i=de({"Content-Type":"application/json"},n&&{"Accept-Language":n});return(this.accessCode?fetch(new URL("transaction/verify_access_code/".concat(this.accessCode),qe.paystackApiUrl).toString(),{headers:i}):fetch(new URL("/checkout/request_inline",qe.paystackApiUrl).toString(),{method:"POST",body:JSON.stringify(a),headers:de(de({},i),r&&{"x-connect-account":r})})).then(function(o){return o.json()}).then(function(o){if(o.status===!1)throw new Error(o.message);return e.response=o.data,e.id=o.data.id,e.status=o.data.transaction_status,e.accessCode=o.data.access_code,e.log=null,Object.assign(e,W9),e.initializeLog(o.data.log),e.saveIpAddress(),o.data})}},Bs=function(){function e(t){O2(this,e),function(u){function d(x,b){this.message=x,this.issues=b||[]}if(!u||Pn(u)!=="object")throw new d("Transaction parameters should be a non-empty object");var m=u;if("accessCode"in m)return{accessCode:m.accessCode};Object.keys(m).forEach(function(x){Fa.find(function(b){return b.value===x})!==void 0||delete m[x]});var h=Object.keys(m),w=[];if(Fa.filter(function(x){return x.required}).forEach(function(x){var b=!m[x.value],k=x.or?x.or.some(function(g){return m[g]}):null;b&&!k&&w.push({message:"Required parameter missing: ".concat(x.value)})}),h.forEach(function(x){var b=m[x],k=Fa.find(function(f){return f.value===x}),g=Pn(b);g==="object"&&Array.isArray(b)&&(g="array"),k.types.indexOf(g)<=-1&&w.push({message:"Invalid parameter type: ".concat(x),validTypes:k.types})}),h.forEach(function(x){var b=Fa.find(function(k){return k.value===x});b.override&&delete m[b.override]}),w.length)throw new d("Invalid transaction parameters",w)}(t),this.parameters=t,this.urlParameters=F9(t),this.id=null,this.status=null,this.accessCode=t.accessCode||null,this.authorizationUrl=null,this.errors=[],this.response=null,this.isActive=!0;var n=t.onError,r=t.onLoad,a=t.onSuccess,i=t.onCancel,o=t.callback,l=t.onClose,c=t.onBankTransferConfirmationPending;this.callbacks={onError:n,onLoad:r,onSuccess:a,onCancel:i,onBankTransferConfirmationPending:c},this.deprecatedCallbacks={callback:o,onClose:l},Object.assign(this,Z9)}return R2(e,[{key:"onSetupError",value:function(t){this.logError(t),this.callbacks.onError&&this.callbacks.onError(t)}},{key:"onLoad",value:function(t){var n=t.id,r=t.customer,a=t.accessCode;Object.assign(this,{id:n,customer:r,accessCode:a}),this.authorizationUrl="".concat(qe.checkoutUrl).concat(a),this.callbacks.onLoad&&this.callbacks.onLoad({id:n,customer:r,accessCode:a})}},{key:"onSuccess",value:function(t){this.isActive=!1,this.response=t,this.status=t.status,this.callbacks.onSuccess&&this.callbacks.onSuccess(t),this.deprecatedCallbacks.callback&&this.deprecatedCallbacks.callback(t)}},{key:"setStatus",value:function(t){this.status=t}},{key:"onCancel",value:function(){this.callbacks.onCancel&&this.callbacks.onCancel(),this.deprecatedCallbacks.onClose&&this.deprecatedCallbacks.onClose()}},{key:"cancel",value:function(){this.isActive=!1,this.onCancel()}},{key:"onBankTransferConfirmationPending",value:function(){this.cancel(),this.callbacks.onBankTransferConfirmationPending&&this.callbacks.onBankTransferConfirmationPending()}},{key:"logError",value:function(t){this.errors.push(t)}}]),e}(),y1=console?console.warn||console.log:function(){};function v0(e,t,n){y1('"'.concat(e,'" has been deprecated, please use "').concat(t,'". ').concat(n||""))}var D,G9=["preload","inlineTransaction","transactionData"],Y9=["container","styles","onElementsMount"];function Us(e,t){if(!e.length)return null;var n=e.filter(function(r){var a,i,o,l,c=!r.status||r.status==="abandoned",u=(a=r.parameters,i=t,o=Object.keys(a).sort().join("")===Object.keys(i).sort().join(""),l=Object.values(a).sort().join("")===Object.values(i).sort().join(""),o&&l);return c&&u});return n.length?n[n.length-1]:null}function x0(e){var t=e.checkoutIframe,n=e.urlParameters;t&&n&&t.contentWindow.postMessage({type:"inline:url",path:"newTransaction",params:n},"*")}var J9="trackCheckoutClosed",y0="trackPaymentError",K9="trackPaymentAttempt",X9="trackPaymentCompletion";function qs(e){throw y1(e),new Error(e)}var b0,w0,Z2=function(){function e(t){var n,r;O2(this,e),this.id=function(){for(var a="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;o<5;o+=1)a+=i.charAt(Math.floor(Math.random()*i.length));return a}(),this.transactions=[],this.isOpen=!1,this.isLoaded=!1,this.isDeprecatedApi=t&&t.isDeprecatedApi,t&&t.isEmbed?this.isEmbed=!0:t&&t.isPaymentRequest&&(t.container&&Da(t.container)||qs("A container is required to mount the payment request button"),this.paymentRequestContainer=Da(t.container),this.paymentRequestTransaction=null),this.preCheckoutModal=null,this.backgroundIframe=function(a){var i=Ds("inline-background-".concat(a));i.style.cssText=`
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
`),o.close(),i}(this.id),this.checkoutIframe=(n=this.id,(r=Ds("inline-checkout-".concat(n))).src="".concat(qe.checkoutUrl,"popup"),r.style.cssText=`
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
`,r.setAttribute("allowpaymentrequest","true"),r.setAttribute("allow","payment; clipboard-read; clipboard-write"),document.body.appendChild(r),r),this.registerListeners()}return R2(e,[{key:"registerListeners",value:function(){var t=this;window.addEventListener("message",function(n){var r="".concat(n.origin,"/")===qe.checkoutUrl,a=t.checkoutIframe&&t.checkoutIframe.contentWindow===n.source,i=t.isEmbed;r||a?t.respondToEvent(n):i&&t.respondToEmbedEvents(n)})}},{key:"sendAnalyticsEventToCheckout",value:function(t,n){this.checkoutIframe.contentWindow.postMessage({type:"analytics",action:t,params:n},"*")}},{key:"checkout",value:function(t){this.activeTransaction()&&this.activeTransaction().cancel(),D=this;var n=Us(this.transactions,t)||new Bs(t);return new Promise(function(r,a){n.requestInline().then(function(i){var o=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=c.platform,d=c.userAgent,m=d===void 0?window&&window.navigator&&window.navigator.userAgent:d,h=u||W2,w=m&&!!m.match(/Version\/[\d.]+.*Safari/),x=h&&/(Mac)/i.test(h);return Q2()||x&&w}()&&rl(i.channels),l=function(){var c,u,d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return!((c=d.link_config)===null||c===void 0||!c.enabled||(u=d.link_config)===null||u===void 0||!u.has_payment_instruments)}(i);l||o?(D.preloadTransaction({inlineTransaction:n,transactionData:i}),D.preCheckoutModal=function(c,u){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},m=document.querySelector("#pre-checkout-modal-".concat(c));if(m){if(m0(m)&&Fs(m))return m;m.remove()}var h=document.createElement("div");h.classList.add("pre-checkout-modal"),h.id="pre-checkout-modal-".concat(c),h.style.zIndex=$9()+1;var w=document.createElement("div");w.classList.add("pre-checkout-modal__content"),h.appendChild(w);var x=u||{},b=x.merchant_logo,k=x.merchant_name,g=x.email,f=x.amount,y=x.currency,C=x.label,j=x.channels,S=new Intl.NumberFormat("en",{style:"currency",currency:y,currencyDisplay:"code",maximumFractionDigits:2,minimumFractionDigits:0}).format(f/100),N=document.createElement("div");N.classList.add("payment-info"),N.innerHTML='<img class="merchant-logo" src="'.concat(b,'" alt="').concat(k,` Logo">
    <div class="customer-info">
      <div class="customer-email">`).concat(C||g,`</div>
      <div class="transaction-amount">Pay <span class="amount">`).concat(S,`</span></div>
    </div>`),w.appendChild(N),w.innerHTML+=O9;var E=document.createElement("div");E.classList.add("modal-wrapper"),d.canPayWithVault?V9(E,{canPayWithApplePay:d.canPayWithApplePay,hasOtherPaymentMethods:g0(j)}):H9(E,{hasOtherPaymentMethods:g0(j)}),E.innerHTML=E.innerHTML+V2+P9,w.appendChild(E);var P=document.createElement("style");return P.textContent=L9,document.body.appendChild(P),document.body.appendChild(h),h}(D.id,i,{canPayWithVault:l,canPayWithApplePay:o}),o?(D.paymentRequestContainer=Fs(D.preCheckoutModal),h0(D.paymentRequestContainer,{channels:i.channels,styles:{applePay:{width:"100%",type:"pay",height:"42px",padding:"15px",borderRadius:"5px"}}},i.merchant_id).then(function(){D.registerPaymentRequestEventListeners()}).catch(function(){l?Fs(D.preCheckoutModal).remove():(D.closePreCheckoutModal(),D.animateCheckoutIn())}).finally(function(){r(n)})):r(n)):(D.newTransaction({inlineTransaction:n,transactionData:i}),r(n))}).catch(function(i){n.onSetupError({status:!1,message:i.message}),a(i)})})}},{key:"openPreCheckoutModal",value:function(){var t;this.registerPreCheckoutModalEventListeners(),t=this.preCheckoutModal,new Promise(function(n,r){try{var a=t.querySelector(".pre-checkout-modal__content");t.classList.add("show"),setTimeout(function(){a.classList.add("show"),n(!0)},50)}catch(i){r(i)}})}},{key:"registerPreCheckoutModalEventListeners",value:function(){var t,n=this,r=!1,a=this.activeTransaction();document.addEventListener("touchstart",function(c){c.preventDefault(),r||(r=!0,t=setTimeout(function(){r=!1},125))},!0),document.addEventListener("touchend",function(c){c.target&&c.target.isSameNode(D.preCheckoutModal)&&r&&(clearTimeout(t),D.closePreCheckoutModal(),a&&a.cancel()),r=!1},!0);var i=m0(this.preCheckoutModal);i&&(i.onclick=function(){n.closePreCheckoutModal(),n.animateCheckoutIn()});var o=this.preCheckoutModal.querySelector("#".concat(B2));o&&(o.onclick=function(){n.closePreCheckoutModal(),n.animateCheckoutIn(),n.checkoutIframe.contentWindow.postMessage({type:"inline:pay-with-vault"},"*")});var l=function(c){return c.querySelector("#apple-pay-close-button")}(this.preCheckoutModal);l.onclick=function(){n.sendAnalyticsEventToCheckout(J9),n.closePreCheckoutModalAndCancelTransaction()}}},{key:"closePreCheckoutModal",value:function(t){var n;this.preCheckoutModal&&(t==="failed"?(n=this.preCheckoutModal)&&(n.querySelector("#apple-pay-mark--light").innerHTML=`<svg width="50" height="30" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="error-icon">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="error" fill-rule="nonzero">
            <path d="M9.14672,0.47855 L0.14829,15.47855 C-0.0403320234,15.7872042 -0.0475647902,16.1736607 0.129375884,16.4891566 C0.306316558,16.8046526 0.639843999,16.9999993 1.00157,17 L19.43546,17 C19.797186,16.9999993 20.1307134,16.8046526 20.3076541,16.4891566 C20.4845948,16.1736607 20.477362,15.7872042 20.28874,15.47855 L10.85328,0.47855 C10.671624,0.181297031 10.3483651,3.00996351e-06 10,3.00996351e-06 C9.6516349,3.00996351e-06 9.32837603,0.181297031 9.14672,0.47855 Z" id="Shape" fill="#FFAA22"></path>
            <rect id="Rectangle-path" fill="#FFFFFF" x="9" y="6" width="2" height="5"></rect>
            <rect id="Rectangle-path" fill="#FFFFFF" x="9" y="12" width="2" height="2"></rect>
        </g>
    </g>
</svg>`,n.querySelector("#apple-pay-description").textContent="An error occurred while paying with Apple Pay. Please try again or use another payment method."):(function(r){r&&(r.querySelector(".pre-checkout-modal__content").classList.remove("show"),r.classList.remove("show"))}(this.preCheckoutModal),this.preCheckoutModal.remove(),this.preCheckoutModal=null))}},{key:"closePreCheckoutModalAndCancelTransaction",value:function(){this.preCheckoutModal&&(this.cancelTransaction(),this.checkoutIframe&&this.checkoutIframe.contentWindow&&this.checkoutIframe.contentWindow.postMessage("close","*"),this.closePreCheckoutModal())}},{key:"newTransaction",value:function(t){var n=t.preload,r=t.inlineTransaction,a=t.transactionData,i=nl(t,G9),o=this.paymentRequestContainer&&ni(this.paymentRequestContainer);if(this.activeTransaction()&&!o&&this.activeTransaction().cancel(),r&&a)return this.transactions.push(r),this.isDeprecatedApi||this.open({accessCode:a.access_code,language:r.urlParameters.language},n),r;var l=Us(this.transactions,r?r.parameters:i);if(l)return l.isActive=!0,this.isDeprecatedApi||this.open({accessCode:l.accessCode,language:l.urlParameters.language},n),l;var c=r||new Bs(i),u=c.accessCode?{accessCode:c.accessCode,language:c.urlParameters.language}:c.urlParameters;return this.transactions.push(c),this.isDeprecatedApi||this.open(u,n),c}},{key:"preloadTransaction",value:function(t){var n=this;return this.newTransaction(de(de({},t),{},{preload:!0})),function(){return n.animateCheckoutIn()}}},{key:"paymentRequest",value:function(t){var n=t.container,r=t.styles,a=t.onElementsMount,i=nl(t,Y9);return D=this,new Promise(function(o,l){var c=document.querySelector("#".concat(t.loadPaystackCheckoutButton));if(H2()){D.activeTransaction()&&D.activeTransaction().cancel(),n&&Da(n)||qs("A container is required to mount the payment request button"),D.paymentRequestContainer=Da(n);var u=Us(D.transactions,i),d=u||new Bs(i);d.requestInline().then(function(w){h0(D.paymentRequestContainer,{channels:w.channels,styles:r},w.merchant_id).then(function(x){a&&a(x)}).catch(function(){a&&a(null)}).finally(function(){if(u?d.isActive=!0:D.transactions.push(d),D.registerPaymentRequestEventListeners(),c){var x=D.preloadTransaction({inlineTransaction:d,transactionData:w});c.onclick=x}o(d)})}).catch(function(w){d.onSetupError({status:!1,message:w.message}),l(w)})}else{if(t&&t.loadPaystackCheckoutButton)if(c){var m=D.preloadTransaction(i);c.onclick=m}else y1("This device does not support any payment request wallet options. Please consult our documentation at https://developers.paystack.co/docs/paystack-inline to see how to load alternative payment options using 'loadPaystackCheckoutButton'");a&&a(null);var h=D.activeTransaction();o(h)}})}},{key:"registerApplePayEventListener",value:function(){var t=this;ni(this.paymentRequestContainer).onclick=function(){return t.startApplePay()}}},{key:"registerPaymentRequestEventListeners",value:function(){var t=this.activeTransaction();t&&rl(t.response.channels)?this.registerApplePayEventListener():I9(this.paymentRequestContainer)}},{key:"startApplePay",value:function(){var t,n,r,a,i,o=this,l="apple pay",c=this.activeTransaction();if(c){var u={channel:"apple_pay",paymentMethod:l,currency:c.currency,amount:c.amount},d={channel:"apple_pay",currency:c.currency,amount:c.amount,timeSpent:c.getTimeSpent()};try{c.logAttempt(l),this.sendAnalyticsEventToCheckout(K9,u);var m=(t={currency:c.response.currency,amount:c.response.amount,merchantName:c.response.merchant_name,interval:c.response.plan_details&&c.response.plan_details.interval},n=t.currency,r=t.amount,a=t.merchantName,i=t.interval,de({countryCode:"NG",currencyCode:n,merchantCapabilities:["supports3DS","supportsCredit","supportsDebit"],supportedNetworks:["visa","masterCard"],requiredBillingContactFields:["postalAddress","name","phone","email"],total:{label:"".concat(a," - Paystack"),type:"final",amount:String(d0(r))}},typeof i=="string"&&i.trim()!==""&&{lineItems:[{label:M9(i),amount:String(d0(r))}]})),h=new window.ApplePaySession(qe.applePayVersion,m);h.onvalidatemerchant=function(w){var x=function(b){var k=b.transactionId,g=b.validationURL,f=b.merchantName,y=b.domainName,C=y===void 0?window&&window.location&&window.location.hostname:y,j="".concat(qe.paymentBaseUrl).concat(qe.applePayValidateSessionPath),S=f0({transaction:k,sessionUrl:g,displayName:f,domainName:C});return fetch(j,de(de({},p0),{},{body:S})).then(function(N){return N.json()})}({validationURL:w.validationURL,transactionId:c.id,merchantName:c.response.merchant_name});x.then(function(b){b.status!=="success"?c.onSetupError(b):h.completeMerchantValidation(b.data),c.logValidationResponse(b.message)}).catch(function(b){c.onSetupError(b)})},h.oncancel=function(){D.preCheckoutModal||c.onCancel()},h.onpaymentauthorized=function(w){var x=w.payment,b=function(k){var g=k.transactionId,f=k.payment,y="".concat(qe.paymentBaseUrl).concat(qe.applePayChargePath),C=f0({transaction:g,paymentObject:JSON.stringify(f)});return fetch(y,de(de({},p0),{},{body:C})).then(function(j){return j.json()})}({transactionId:c.id,payment:x});b.then(function(k){c.logAPIResponse(k,l),k.status==="success"?(h.completePayment(h.STATUS_SUCCESS),c.onSuccess(k),o.sendAnalyticsEventToCheckout(X9,d)):(h.completePayment(h.STATUS_FAILURE),c.onSetupError(k),o.sendAnalyticsEventToCheckout(y0,{channel:"apple_pay",message:k&&k.message||"Transaction attempt failed"})),D.closePreCheckoutModal(k.status)}).catch(function(k){h.completePayment(h.STATUS_FAILURE),c.onSetupError(k),o.sendAnalyticsEventToCheckout(y0,{channel:"apple_pay",message:k&&k.message||"Error occurred"}),D.closePreCheckoutModal("failed")})},h.begin()}catch(w){c.onSetupError(w)}}else qs("Could not initiate apple pay transaction")}},{key:"resumeTransaction",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.onSuccess,a=n.onCancel,i=n.onLoad,o=n.onError;return this.newTransaction({accessCode:t,onSuccess:r,onCancel:a,onLoad:i,onError:o})}},{key:"activeTransaction",value:function(){var t=this.transactions.filter(function(r){return r.isActive}),n=t.length?t[t.length-1]:null;return n}},{key:"cancelTransaction",value:function(t){var n=this.transactions.find(function(r){return r.id===t})||this.activeTransaction();n&&(n.cancel(),this.close())}},{key:"respondToEvent",value:function(t){if(t){var n,r,a=this.activeTransaction();try{var i=t.data||t.message,o=i.event,l=i.data;if(o)switch(o){case"loaded:checkout":if(this.isLoaded=!0,a){var c=this.checkoutIframe,u=a.urlParameters,d=a.response;x0({checkoutIframe:c,urlParameters:d?{accessCode:d.access_code,language:u==null?void 0:u.language}:u})}break;case"loaded:transaction":n=this.backgroundIframe,(r=n.contentWindow.document)&&(r.getElementById("app-loader").style.display="none"),this.preCheckoutModal&&this.openPreCheckoutModal(),a.onLoad(l);break;case"error":l.type==="setup"?a.onSetupError(l):a.logError(l);break;case"cancel":case"close":this.close();var m=l&&l.status;m&&a.setStatus(m),!(this.paymentRequestContainer&&ni(this.paymentRequestContainer)&&!this.preCheckoutModal)&&(a.isActive=!1),a.onCancel();break;case"transfer:pending":this.close();var h=l&&l.status;h&&a.setStatus(h),a.onBankTransferConfirmationPending();break;case"success":this.close(),a.onSuccess(l)}}catch{}}}},{key:"respondToEmbedEvents",value:function(t){var n,r,a=this.activeTransaction(),i=t.data||t.message;if(i&&(typeof i=="string"||i instanceof String)){var o={action:r=(n=i)&&typeof n=="string"?n.split(" ")[0]:null,data:r?n.split(" ").slice(2).join(" "):null};o&&o.action==="PaystackClose"&&o.data&&a.onSuccess(i),o.action==="PaystackTLSClose"&&a.cancel()}}},{key:"animateCheckoutIn",value:function(){var t,n=this;if(!this.isOpen){var r=this.checkoutIframe,a=this.backgroundIframe;(t={checkoutIframe:r,backgroundIframe:a},new Promise(function(i,o){t||o("No dom element provided");var l=t.checkoutIframe,c=t.backgroundIframe;l&&c||o("No dom element provided"),l.style.display="",l.style.visibility="visible",c.style.display="",c.style.visibility="visible",i()})).then(function(){n.checkoutIframe.contentWindow.postMessage("render","*")}),this.isOpen=!0}}},{key:"open",value:function(t,n){t&&(x0({checkoutIframe:this.checkoutIframe,urlParameters:t}),n||this.animateCheckoutIn())}},{key:"close",value:function(){var t=this;if(this.isOpen){var n,r=this.checkoutIframe,a=this.backgroundIframe;(n={checkoutIframe:r,backgroundIframe:a},new Promise(function(i,o){n||o("No dom element provided");var l=n.checkoutIframe,c=n.backgroundIframe;l&&c||o("No dom element provided"),c.style.opacity=0,l.style.display="none",l.style.visibility="hidden",setTimeout(function(){c.style.display="none",c.style.visibility="hidden",c.style.opacity=1,i()},300)})).then(function(){t.checkoutIframe.contentWindow.postMessage("close","*")}),this.isOpen=!1}}},{key:"isLoaded",value:function(){return this.isLoaded}}],[{key:"setup",value:function(t){var n=t&&t.container;D||(D=new e({isDeprecatedApi:!0,isEmbed:n})),v0("PaystackPop.setup()","new PaystackPop()","Please consult our documentation at https://developers.paystack.co/docs/paystack-inline");var r=D.newTransaction(t,"deprecated"),a=r.urlParameters;if(n){var i="".concat(qe.siteUrl,"/assets/payment/production/inline.html?").concat(A2(a)),o=function(l,c){var u=Ds("embed-checkout-".concat(l));return u.style.cssText=`
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
`,u.src=c,u.id=l,u.name=l,u}(D.id,i);(function(l,c){var u=document.getElementById(l);u.innerHTML="",u.removeAttribute("style"),u.className="paystack-embed-container",u.style.position="relative",u.style.width="100%",u.appendChild(c)})(t.container,o),o.onload=function(){var l;o.contentWindow.postMessage("PaystackOpen ".concat(D.id),"*"),l=o,new Promise(function(c,u){l||u("No dom element provided"),l.style.display="",l.style.visibility="visible",c()})}}else r.openIframe=function(){v0("openIframe","open","Please consult our documentation at https://developers.paystack.co/docs/paystack-inline"),D.open(a)};return r}}]),e}();if(b0=c0().length>0,w0=Vn()&&Vn().parentElement.tagName==="FORM",b0&&w0){var Ws,gn=function(){var e={},t=Vn();return c0().forEach(function(n){var r=t.getAttribute(n),a=n.split("data-")[1].replace(/-([a-z])/g,function(i){return i[1].toUpperCase()});e[a]=r}),function(n){if(n.buttonId&&!document.getElementById(n.buttonId))throw new Error("Please make sure the buttonId is an element available in the DOM");var r=de({},n);r.buttonText=n.buttonText||"Pay",r.buttonVariant="normal",r.buttonWordmarkVariant="normal";var a=["normal","light"];return n.buttonVariant&&a.indexOf(n.buttonVariant)>-1&&(r.buttonVariant=n.buttonVariant),n.buttonWordmarkVariant&&a.indexOf(n.buttonWordmarkVariant)>-1&&(r.buttonWordmarkVariant=n.buttonWordmarkVariant),r}(e)}(),k0=Vn().parentElement;D||(D=new Z2),function(e){var t;if(e.id)(t=document.getElementById(e.id)).setAttribute("data-inline-id",e.id);else{var n=document.createElement("div");n.id="inline-button-".concat(e.inlineId),n.innerHTML=function(r){var a,i,o={normal:`
  <svg id="inline-button-wordmark" width="137" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M.037 5.095l1.075-.135c-.011-.774-.025-1.944-.013-2.149C1.19 1.364 2.38.134 3.81.013 3.9.006 3.99.002 4.077 0a2.947 2.947 0 0 1 2.046.76c.574.509.95 1.26 1.008 2.007.015.192.01 1.491.01 2.257l1.096.163L8.2 11.44 4.093 12 0 11.346l.037-6.251zm4.106-.514l1.724.256c-.007-.933-.05-2.295-.26-2.654-.319-.545-.846-.867-1.443-.88h-.063c-.607.008-1.138.322-1.458.864-.222.378-.266 1.66-.265 2.637l1.765-.223zM18.228 10.108c-.576 0-1.064-.072-1.464-.216a2.864 2.864 0 0 1-.972-.6 2.552 2.552 0 0 1-.588-.864 4.067 4.067 0 0 1-.252-1.044h1.008c.032.256.088.5.168.732.08.224.204.424.372.6.168.168.388.304.66.408.28.096.636.144 1.068.144.28 0 .536-.036.768-.108.24-.08.448-.192.624-.336.176-.144.312-.316.408-.516.104-.2.156-.42.156-.66 0-.24-.032-.448-.096-.624a1.02 1.02 0 0 0-.336-.468 1.885 1.885 0 0 0-.636-.324 6.4 6.4 0 0 0-1.008-.228 8.79 8.79 0 0 1-1.212-.276 3.246 3.246 0 0 1-.9-.432 1.982 1.982 0 0 1-.564-.672c-.128-.272-.192-.6-.192-.984 0-.328.068-.632.204-.912.136-.288.324-.536.564-.744.248-.208.54-.372.876-.492.336-.12.708-.18 1.116-.18.864 0 1.548.204 2.052.612.512.4.812.984.9 1.752h-.936c-.104-.544-.316-.932-.636-1.164-.32-.24-.78-.36-1.38-.36-.592 0-1.04.132-1.344.396a1.255 1.255 0 0 0-.444.996c0 .208.024.396.072.564.056.16.156.3.3.42.152.12.36.228.624.324a6.72 6.72 0 0 0 1.068.228c.48.072.9.168 1.26.288.36.12.664.276.912.468s.432.428.552.708c.128.28.192.624.192 1.032 0 .36-.076.696-.228 1.008a2.472 2.472 0 0 1-.612.804c-.264.224-.58.4-.948.528-.36.128-.752.192-1.176.192zM25.355 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM32.091 10.108c-.44 0-.848-.072-1.224-.216a3.054 3.054 0 0 1-.972-.636 3.12 3.12 0 0 1-.648-1.008 3.626 3.626 0 0 1-.228-1.32v-.096c0-.48.08-.916.24-1.308.16-.4.376-.74.648-1.02.28-.28.604-.496.972-.648.376-.16.772-.24 1.188-.24.328 0 .644.04.948.12.312.08.588.208.828.384.248.168.456.392.624.672.168.28.276.62.324 1.02h-.984c-.08-.496-.284-.848-.612-1.056-.32-.208-.696-.312-1.128-.312a1.93 1.93 0 0 0-.804.168c-.24.112-.452.272-.636.48a2.23 2.23 0 0 0-.42.744 2.991 2.991 0 0 0-.156.996v.096c0 .776.188 1.364.564 1.764.384.392.88.588 1.488.588.224 0 .436-.032.636-.096a1.651 1.651 0 0 0 .96-.768c.112-.192.18-.416.204-.672h.924a2.595 2.595 0 0 1-.276.948 2.386 2.386 0 0 1-.576.744c-.24.208-.52.372-.84.492-.32.12-.668.18-1.044.18zM38.335 10.108a2.83 2.83 0 0 1-.876-.132 1.724 1.724 0 0 1-.684-.42 2.145 2.145 0 0 1-.456-.756c-.112-.304-.168-.672-.168-1.104V3.724h.996v3.924c0 .552.116.956.348 1.212.24.256.608.384 1.104.384.224 0 .44-.036.648-.108.208-.072.392-.18.552-.324.16-.144.288-.324.384-.54.096-.216.144-.464.144-.744V3.724h.996V10h-.996v-.996c-.144.296-.388.556-.732.78-.336.216-.756.324-1.26.324zM43.216 3.724h.996v1.128c.2-.352.452-.64.756-.864.312-.232.748-.356 1.308-.372v.936a4.461 4.461 0 0 0-.852.12 1.647 1.647 0 0 0-.66.324 1.472 1.472 0 0 0-.408.612c-.096.248-.144.564-.144.948V10h-.996V3.724zM50 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM56.496 10.108c-.408 0-.788-.068-1.14-.204a2.683 2.683 0 0 1-.9-.612 3.01 3.01 0 0 1-.588-.984 4.01 4.01 0 0 1-.204-1.32v-.096c0-.48.072-.92.216-1.32.144-.4.344-.744.6-1.032.256-.296.564-.524.924-.684.36-.16.756-.24 1.188-.24.528 0 .956.112 1.284.336.328.216.584.476.768.78V.724h.996V10h-.996V8.92c-.088.152-.208.3-.36.444a2.792 2.792 0 0 1-.516.384 2.874 2.874 0 0 1-.6.252c-.216.072-.44.108-.672.108zm.108-.828c.288 0 .56-.048.816-.144.256-.096.476-.24.66-.432.184-.2.328-.448.432-.744.112-.304.168-.656.168-1.056v-.096c0-.808-.18-1.404-.54-1.788-.352-.384-.836-.576-1.452-.576-.624 0-1.112.208-1.464.624-.352.416-.528 1.008-.528 1.776v.096c0 .392.048.736.144 1.032.104.296.24.54.408.732.176.192.38.336.612.432.232.096.48.144.744.144zM67.712 10.108c-.512 0-.948-.112-1.308-.336a2.38 2.38 0 0 1-.816-.804V10h-.996V.724h.996V4.78a1.92 1.92 0 0 1 .348-.432c.152-.144.32-.268.504-.372.192-.112.396-.2.612-.264.216-.064.436-.096.66-.096.408 0 .788.072 1.14.216.352.144.652.352.9.624.256.272.456.604.6.996.144.392.216.832.216 1.32v.096c0 .48-.068.92-.204 1.32a3.103 3.103 0 0 1-.576 1.02 2.583 2.583 0 0 1-.9.672 2.937 2.937 0 0 1-1.176.228zm-.096-.828c.624 0 1.1-.2 1.428-.6.328-.408.492-.996.492-1.764V6.82c0-.4-.052-.748-.156-1.044a2.095 2.095 0 0 0-.42-.732 1.53 1.53 0 0 0-.612-.444 1.798 1.798 0 0 0-.744-.156c-.288 0-.56.048-.816.144a1.71 1.71 0 0 0-.648.444c-.184.192-.328.44-.432.744a3.152 3.152 0 0 0-.156 1.044v.096c0 .8.192 1.396.576 1.788.384.384.88.576 1.488.576zM73.63 9.352l-2.46-5.628h1.068l1.92 4.5 1.74-4.5h1.02l-3.468 8.46h-1.008l1.188-2.832zM87.127 3.669A3.138 3.138 0 0 0 86.1 2.95a3.09 3.09 0 0 0-1.228-.25c-.448 0-.848.086-1.187.26a2.199 2.199 0 0 0-.662.497v-.191a.387.387 0 0 0-.214-.348.323.323 0 0 0-.14-.03h-1.315a.314.314 0 0 0-.254.116.377.377 0 0 0-.1.262v8.97c0 .1.034.188.1.258a.34.34 0 0 0 .254.103h1.341a.342.342 0 0 0 .244-.103.336.336 0 0 0 .11-.259v-3.06c.178.202.417.357.702.464.35.134.72.203 1.093.203.43 0 .848-.082 1.242-.248a3.124 3.124 0 0 0 1.04-.724c.305-.326.545-.709.707-1.128a3.93 3.93 0 0 0 .263-1.477c0-.54-.086-1.037-.263-1.477a3.387 3.387 0 0 0-.706-1.12zm-1.204 3.24c-.073.19-.18.362-.315.51a1.415 1.415 0 0 1-1.065.466c-.2.001-.4-.04-.584-.12a1.484 1.484 0 0 1-.49-.346 1.593 1.593 0 0 1-.32-.51 1.738 1.738 0 0 1-.115-.63c0-.224.04-.435.115-.631a1.532 1.532 0 0 1 .804-.846c.185-.086.386-.13.59-.129.215 0 .414.044.593.13.177.083.338.199.474.341a1.622 1.622 0 0 1 .425 1.135c0 .225-.037.436-.112.63zM95.298 2.89h-1.33a.339.339 0 0 0-.246.11.384.384 0 0 0-.108.266v.166a1.856 1.856 0 0 0-.602-.472 2.525 2.525 0 0 0-1.166-.258 3.227 3.227 0 0 0-2.284.964 3.554 3.554 0 0 0-.734 1.123 3.827 3.827 0 0 0-.275 1.477c0 .54.092 1.037.275 1.477.184.434.427.817.728 1.128a3.146 3.146 0 0 0 2.277.973c.437 0 .834-.088 1.173-.259.25-.13.456-.287.608-.471v.177a.34.34 0 0 0 .11.259.341.341 0 0 0 .244.104h1.33a.324.324 0 0 0 .25-.105.349.349 0 0 0 .102-.258V3.267a.377.377 0 0 0-.1-.262.325.325 0 0 0-.252-.115zM93.502 6.9a1.55 1.55 0 0 1-.312.511c-.136.143-.296.26-.473.344-.178.085-.38.129-.596.129-.207 0-.407-.044-.59-.13a1.501 1.501 0 0 1-.791-.855 1.766 1.766 0 0 1-.112-.62c0-.225.038-.436.112-.632.075-.193.181-.364.314-.504.137-.143.3-.26.478-.342.182-.085.382-.129.59-.129.215 0 .417.044.595.13.178.085.338.2.473.341a1.623 1.623 0 0 1 .424 1.135c0 .215-.037.424-.112.622zM108.567 6.094a2.265 2.265 0 0 0-.654-.402c-.247-.101-.509-.181-.785-.235l-1.014-.204c-.26-.05-.441-.117-.543-.203a.328.328 0 0 1-.136-.264c0-.11.063-.2.189-.282.137-.086.329-.13.566-.13.26 0 .518.053.757.157.243.106.471.226.67.36.295.187.546.162.727-.053l.487-.57a.543.543 0 0 0 .152-.357c0-.128-.064-.245-.185-.351-.207-.184-.533-.378-.971-.568-.437-.192-.987-.29-1.637-.29-.427 0-.82.058-1.168.172-.35.116-.65.276-.893.474-.245.204-.438.44-.57.713a2 2 0 0 0-.198.875c0 .56.167 1.017.496 1.358.328.333.766.56 1.304.67l1.054.232c.3.062.528.132.675.21.129.067.19.163.19.297 0 .12-.061.227-.188.324-.133.104-.342.155-.622.155a1.83 1.83 0 0 1-.831-.19 3.056 3.056 0 0 1-.678-.458.995.995 0 0 0-.307-.17c-.126-.037-.268.003-.431.13l-.583.461c-.169.145-.24.32-.209.522.029.194.19.394.491.62.269.193.614.368 1.029.518.415.151.901.229 1.453.229.444 0 .854-.058 1.215-.172.362-.119.681-.278.941-.48a2.056 2.056 0 0 0 .819-1.663c0-.319-.053-.6-.165-.836a1.843 1.843 0 0 0-.447-.6zM114.383 7.73a.363.363 0 0 0-.295-.192.55.55 0 0 0-.343.113c-.095.062-.198.11-.306.141a.75.75 0 0 1-.426.013.43.43 0 0 1-.181-.093.554.554 0 0 1-.143-.204.92.92 0 0 1-.059-.362v-2.46h1.731c.099 0 .188-.04.266-.117a.368.368 0 0 0 .112-.26V3.268a.369.369 0 0 0-.115-.268.38.38 0 0 0-.263-.109h-1.732V1.216a.354.354 0 0 0-.108-.27.347.347 0 0 0-.243-.104h-1.344a.36.36 0 0 0-.34.226.371.371 0 0 0-.027.148V2.89h-.767a.324.324 0 0 0-.255.115.385.385 0 0 0-.098.262V4.31a.4.4 0 0 0 .212.346c.044.021.092.032.14.03h.768v2.925c0 .39.069.726.2 1.003.132.274.305.504.514.676.217.178.465.31.731.388.27.084.551.126.833.126.385 0 .75-.061 1.094-.18a2.13 2.13 0 0 0 .861-.552c.152-.181.17-.381.046-.581l-.463-.76zM121.672 2.89h-1.329a.339.339 0 0 0-.244.11.39.39 0 0 0-.08.122.394.394 0 0 0-.027.144v.166a1.906 1.906 0 0 0-.605-.472c-.335-.173-.726-.258-1.168-.258-.42 0-.834.083-1.226.249a3.24 3.24 0 0 0-1.055.715 3.528 3.528 0 0 0-.734 1.123 3.79 3.79 0 0 0-.276 1.477c0 .54.092 1.037.275 1.477.184.434.428.817.729 1.128a3.138 3.138 0 0 0 2.273.973 2.59 2.59 0 0 0 1.175-.259c.255-.13.457-.287.612-.471v.177a.34.34 0 0 0 .108.259.343.343 0 0 0 .243.104h1.329a.335.335 0 0 0 .252-.105.364.364 0 0 0 .102-.258V3.267a.38.38 0 0 0-.1-.262.332.332 0 0 0-.115-.087.311.311 0 0 0-.139-.028zM119.876 6.9a1.534 1.534 0 0 1-.786.855 1.362 1.362 0 0 1-.594.129c-.207 0-.405-.044-.588-.13a1.516 1.516 0 0 1-.792-.855 1.757 1.757 0 0 1-.113-.62c0-.225.037-.436.112-.632.073-.187.179-.358.314-.504.138-.143.3-.26.479-.342.184-.086.385-.13.588-.129.217 0 .415.044.594.13.181.085.34.2.472.341.134.143.24.313.314.504a1.73 1.73 0 0 1 0 1.253zM128.978 7.64l-.763-.593c-.146-.118-.284-.15-.404-.1a.742.742 0 0 0-.279.205 2.527 2.527 0 0 1-.583.535c-.192.122-.444.183-.742.183-.219 0-.42-.04-.6-.122a1.423 1.423 0 0 1-.469-.342 1.575 1.575 0 0 1-.308-.51 1.751 1.751 0 0 1-.106-.617c0-.228.034-.438.106-.632.07-.192.173-.363.308-.503.135-.144.295-.26.472-.342.187-.088.391-.132.597-.13.298 0 .547.064.742.187.198.126.396.306.584.534.078.092.17.16.278.206.122.048.259.016.401-.101l.762-.594a.53.53 0 0 0 .201-.269.437.437 0 0 0-.034-.365 3.329 3.329 0 0 0-1.18-1.127c-.504-.291-1.108-.441-1.784-.441a3.519 3.519 0 0 0-2.51 1.033c-.322.322-.576.71-.747 1.137a3.68 3.68 0 0 0-.273 1.407c0 .495.093.968.273 1.402.173.424.427.808.747 1.128a3.527 3.527 0 0 0 2.51 1.034c.676 0 1.28-.149 1.784-.444a3.286 3.286 0 0 0 1.182-1.13.411.411 0 0 0 .055-.173.415.415 0 0 0-.023-.182.624.624 0 0 0-.197-.273zM136.06 9.045l-2.104-3.143 1.801-2.415c.094-.139.119-.272.075-.397-.031-.09-.116-.2-.334-.2h-1.425a.52.52 0 0 0-.234.058.482.482 0 0 0-.209.205L132.191 5.2h-.349V.363a.37.37 0 0 0-.099-.26.352.352 0 0 0-.253-.103h-1.332a.37.37 0 0 0-.337.22.346.346 0 0 0-.027.143V9.29c0 .103.038.193.11.259a.353.353 0 0 0 .254.104h1.333a.328.328 0 0 0 .251-.105.346.346 0 0 0 .075-.119.333.333 0 0 0 .024-.14V6.927h.386l1.571 2.446c.112.187.267.281.46.281h1.491c.226 0 .32-.11.358-.202.054-.13.038-.262-.047-.406zM102.863 2.89h-1.489a.389.389 0 0 0-.298.122.544.544 0 0 0-.13.249l-1.099 4.167h-.268l-1.182-4.167a.66.66 0 0 0-.113-.247.329.329 0 0 0-.264-.124h-1.544c-.199 0-.325.066-.372.193a.588.588 0 0 0-.002.37l1.887 5.865c.03.093.08.17.145.232a.388.388 0 0 0 .281.104h.798l-.066.19-.19.547a.872.872 0 0 1-.29.426.7.7 0 0 1-.442.148.956.956 0 0 1-.4-.09 1.842 1.842 0 0 1-.35-.209.62.62 0 0 0-.335-.115h-.016c-.13 0-.243.074-.334.216l-.474.708c-.193.304-.086.504.039.615.234.224.528.399.875.524.344.125.723.186 1.126.186.682 0 1.252-.187 1.689-.565.435-.376.756-.887.952-1.524l2.188-7.258c.05-.155.05-.284.005-.389-.037-.08-.125-.174-.327-.174z" fill="#011B33"/>
    </svg>`,light:V2};return`
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
  `)}(e),e.parent.parentNode.insertBefore(n,e.parent.nextSibling),t=z9(n.getElementsByTagName("button"),1)[0]}return t}({inlineId:D.id,amount:gn.amount/100,currency:gn.currency,id:gn.buttonId,text:gn.buttonText,variant:gn.buttonVariant,wordmarkVariant:gn.buttonWordmarkVariant,parent:Vn()}).addEventListener("click",function(e){e.preventDefault(),Ws?D.resumeTransaction(Ws.accessCode):Ws=D.newTransaction(de(de({},gn),{},{onSuccess:function(t){var n,r,a,i,o,l;n={type:"hidden",name:"reference",value:t.reference,parent:k0},r=n.type,a=n.value,i=n.name,o=n.parent,(l=document.createElement("input")).type=r,l.value=a,l.name=i,o.appendChild(l),k0.submit()}}))})}const eg="/uelearn/imgs/bob.jpg",tg=({setcredits:e})=>{const t=JSON.parse(localStorage.getItem("userInfo")),[n,r]=p.useState((t==null?void 0:t.credits)||0);let a=Ne+"/api/v1/user/credits";const[i,o]=p.useState("");p.useState("");const[l,c]=p.useState(!1),[u,d]=p.useState(!1),[m,h]=p.useState(""),w=new Date("Jan 2, 2026 00:00:00").getTime();p.useEffect(()=>{const f=setInterval(function(){const y=new Date().getTime(),C=w-y,j=Math.floor(C/(1e3*60*60*24)),S=Math.floor(C%(1e3*60*60*24)/(1e3*60*60)),N=Math.floor(C%(1e3*60*60)/(1e3*60)),E=Math.floor(C%(1e3*60)/1e3);o(`${j}d ${S}h ${N}m ${E}s left`),C<0&&(clearInterval(f),document.querySelector(".endsin").innerHTML="Promo has ended")},1e3);return()=>clearInterval(f)},[]);const x=async f=>{var C;c(!0);const y=JSON.parse(localStorage.getItem("userInfo"));try{const S=await(await fetch(ca+"/api/v1/initialize-payment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:(y==null?void 0:y.email)||"customer@email.com",amount:f.amountInGhs,tierName:f.name})})).json(),N=S.access_code||((C=S.data)==null?void 0:C.access_code);N&&new Z2().resumeTransaction(N,{onSuccess:P=>{k(f,y,P.reference)},onCancel:()=>c(!1),onError:()=>{c(!1),h("🔴 Payment window error."),d(!0)}})}catch{c(!1),h("🔴 Failed to initialize transaction."),d(!0)}},b=f=>{r(f),e&&e(f)},k=(f,y,C)=>{console.log(C);let j={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({reference:C,tierName:f.name})};Pt(a,j).then(S=>{const N=S.added||f.creditReward,E={...y,credits:((y==null?void 0:y.credits)||0)+N,tier:f.premiumType};localStorage.setItem("userInfo",JSON.stringify(E)),b(E.credits),h(`🟢 Success! ${N} credits added.`),d(!0)}).catch(S=>{console.error("Verification error:",S),h("🔴 Payment verification failed or server error."),d(!0)}).finally(()=>c(!1))},g=()=>{window.open("","_self",""),window.close()};return s.jsxs("div",{className:"pcontainer",children:[u&&s.jsx(rg,{setfetchError:d,errorMessage:m}),s.jsxs("div",{className:"pcontainer2",children:[s.jsx("h2",{className:"paytitle",children:"Choose Your Plan"}),s.jsx("h2",{className:"endsin",children:s.jsxs("p",{className:"cdown",children:["PROMO: 🎟️ ",i]})}),s.jsxs("p",{className:"user-credits",children:["💳 Your Credits: ",s.jsx("strong",{children:n})]}),s.jsx("div",{className:"payopts",children:ng.map((f,y)=>s.jsxs("div",{className:"pt",children:[s.jsx("img",{src:f.image,className:"paypic"}),s.jsxs("div",{children:[f.oldPrice&&s.jsx("p",{className:"oprice",children:f.oldPrice}),s.jsxs("p",{className:"nprice",children:[f.oldPrice?"🎟️ ":""," ",f.priceDisplay]})]}),s.jsxs("h3",{className:"tier",children:[s.jsx("span",{className:"goldtop"}),s.jsx("span",{style:{marginRight:"8px"},children:f.icon}),f.name]}),s.jsxs("ul",{className:"payfeatures",children:[s.jsx("p",{style:{fontSize:"25px",margin:"10px 0"},children:f.icon}),f.description.map((C,j)=>s.jsxs("li",{children:[s.jsx("span",{style:{color:"rgb(0,120,250)"},children:"✔"})," ",C]},j))]}),s.jsx("button",{className:"watch",onClick:()=>f.button!=="default"&&x(f),style:{pointerEvents:f.button==="default"?"none":"all"},children:f.button!=="default"?s.jsx("div",{className:"sp",children:f.button}):s.jsx("div",{children:"Active"})})]},f.name+y))}),s.jsxs("div",{className:"return",onClick:g,children:[s.jsx(i1,{})," "]})]}),l?s.jsx(dr,{opacity:1,indexed:100,mainlogo:lt}):s.jsx(dr,{opacity:0,indexed:-100})]})},ng=[{name:"Normal User",premiumType:"normal-user",priceDisplay:"Free",amountInGhs:0,creditReward:0,icon:s.jsx(Xh,{style:{color:"#FFD700"}}),image:eg,description:["Access to referral tools","Basic analytics"],button:"default"},{name:"Credit Pack",premiumType:"credits",priceDisplay:"GHS 25",amountInGhs:25,creditReward:200,icon:s.jsx(Lm,{style:{color:"#FFD700"}}),image:Gd,description:["200 AI Credits","Standard Support","No Expiry"],button:"Buy Now"},{name:"Premium User",premiumType:"premium-user",oldPrice:"GHS 20/month",priceDisplay:"GHS 50 lifetime",amountInGhs:50,creditReward:600,icon:s.jsx(E5,{style:{color:"#FFD700"}}),image:Zd,description:["Access to referral tools","500 + 100 Bonus Credits","Priority support"],button:"Upgrade"},{name:"Affiliate",premiumType:"affiliate",oldPrice:"GHS 70/month",priceDisplay:"GHS 500 lifetime",amountInGhs:500,creditReward:1500,icon:s.jsx(Nh,{style:{color:"#FFD700"}}),image:Yd,description:["All Premium features","1500 Bonus Credits","Monthly Earns: 1.5k-2k cedis"],button:"Go Pro"}],rg=({errorMessage:e,setfetchError:t})=>(p.useEffect(()=>{const n=setTimeout(()=>t(!1),3e3);return()=>clearTimeout(n)},[]),s.jsx("div",{className:"toast",children:s.jsx("div",{className:"successmessage",children:e.toLowerCase()})}));const ag=()=>{const[e,t]=p.useState(0);return s.jsx(wp,{basename:"/uelearn",children:s.jsxs(mp,{children:[s.jsx(An,{path:"/",element:s.jsx(k9,{})}),s.jsx(An,{path:"/contact",element:s.jsx(_9,{})}),s.jsx(An,{path:"/about",element:s.jsx(N9,{})}),s.jsx(An,{path:"/payment",element:s.jsx(tg,{setcredits:t})}),s.jsx(An,{path:"*",element:s.jsx(E9,{})})]})})};Zs.createRoot(document.getElementById("root")).render(s.jsx(ri.StrictMode,{children:s.jsx(ag,{})}));
