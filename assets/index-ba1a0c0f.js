var $4=Object.defineProperty;var L4=(e,t,n)=>t in e?$4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var le=(e,t,n)=>(L4(e,typeof t!="symbol"?t+"":t,n),n);function A4(e,t){for(var n=0;n<t.length;n++){const s=t[n];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(s,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var Aj=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Y0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Mj(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function s(){return this instanceof s?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(s){var a=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(n,s,a.get?a:{enumerable:!0,get:function(){return e[s]}})}),n}var Q0={exports:{}},Wi={},Z0={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),M4=Symbol.for("react.portal"),D4=Symbol.for("react.fragment"),F4=Symbol.for("react.strict_mode"),B4=Symbol.for("react.profiler"),V4=Symbol.for("react.provider"),H4=Symbol.for("react.context"),U4=Symbol.for("react.forward_ref"),q4=Symbol.for("react.suspense"),W4=Symbol.for("react.memo"),G4=Symbol.for("react.lazy"),pd=Symbol.iterator;function Y4(e){return e===null||typeof e!="object"?null:(e=pd&&e[pd]||e["@@iterator"],typeof e=="function"?e:null)}var K0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J0=Object.assign,X0={};function as(e,t,n){this.props=e,this.context=t,this.refs=X0,this.updater=n||K0}as.prototype.isReactComponent={};as.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};as.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function e2(){}e2.prototype=as.prototype;function Ac(e,t,n){this.props=e,this.context=t,this.refs=X0,this.updater=n||K0}var Mc=Ac.prototype=new e2;Mc.constructor=Ac;J0(Mc,as.prototype);Mc.isPureReactComponent=!0;var hd=Array.isArray,t2=Object.prototype.hasOwnProperty,Dc={current:null},n2={key:!0,ref:!0,__self:!0,__source:!0};function r2(e,t,n){var s,a={},i=null,o=null;if(t!=null)for(s in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)t2.call(t,s)&&!n2.hasOwnProperty(s)&&(a[s]=t[s]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)a[s]===void 0&&(a[s]=l[s]);return{$$typeof:ca,type:e,key:i,ref:o,props:a,_owner:Dc.current}}function Q4(e,t){return{$$typeof:ca,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ca}function Z4(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fd=/\/+/g;function Co(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Z4(""+e.key):t.toString(36)}function Wa(e,t,n,s,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ca:case M4:o=!0}}if(o)return o=e,a=a(o),e=s===""?"."+Co(o,0):s,hd(a)?(n="",e!=null&&(n=e.replace(fd,"$&/")+"/"),Wa(a,t,n,"",function(d){return d})):a!=null&&(Fc(a)&&(a=Q4(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(fd,"$&/")+"/")+e)),t.push(a)),1;if(o=0,s=s===""?".":s+":",hd(e))for(var l=0;l<e.length;l++){i=e[l];var c=s+Co(i,l);o+=Wa(i,t,n,c,a)}else if(c=Y4(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=s+Co(i,l++),o+=Wa(i,t,n,c,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ya(e,t,n){if(e==null)return e;var s=[],a=0;return Wa(e,s,"","",function(i){return t.call(n,i,a++)}),s}function K4(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ot={current:null},Ga={transition:null},J4={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:Ga,ReactCurrentOwner:Dc};te.Children={map:ya,forEach:function(e,t,n){ya(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ya(e,function(){t++}),t},toArray:function(e){return ya(e,function(t){return t})||[]},only:function(e){if(!Fc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=as;te.Fragment=D4;te.Profiler=B4;te.PureComponent=Ac;te.StrictMode=F4;te.Suspense=q4;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J4;te.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=J0({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Dc.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)t2.call(t,c)&&!n2.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];s.children=l}return{$$typeof:ca,type:e.type,key:a,ref:i,props:s,_owner:o}};te.createContext=function(e){return e={$$typeof:H4,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:V4,_context:e},e.Consumer=e};te.createElement=r2;te.createFactory=function(e){var t=r2.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:U4,render:e}};te.isValidElement=Fc;te.lazy=function(e){return{$$typeof:G4,_payload:{_status:-1,_result:e},_init:K4}};te.memo=function(e,t){return{$$typeof:W4,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=Ga.transition;Ga.transition={};try{e()}finally{Ga.transition=t}};te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};te.useCallback=function(e,t){return ot.current.useCallback(e,t)};te.useContext=function(e){return ot.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return ot.current.useDeferredValue(e)};te.useEffect=function(e,t){return ot.current.useEffect(e,t)};te.useId=function(){return ot.current.useId()};te.useImperativeHandle=function(e,t,n){return ot.current.useImperativeHandle(e,t,n)};te.useInsertionEffect=function(e,t){return ot.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return ot.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return ot.current.useMemo(e,t)};te.useReducer=function(e,t,n){return ot.current.useReducer(e,t,n)};te.useRef=function(e){return ot.current.useRef(e)};te.useState=function(e){return ot.current.useState(e)};te.useSyncExternalStore=function(e,t,n){return ot.current.useSyncExternalStore(e,t,n)};te.useTransition=function(){return ot.current.useTransition()};te.version="18.2.0";Z0.exports=te;var u=Z0.exports;const mr=Y0(u),X4=A4({__proto__:null,default:mr},[u]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e3=u,t3=Symbol.for("react.element"),n3=Symbol.for("react.fragment"),r3=Object.prototype.hasOwnProperty,s3=e3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a3={key:!0,ref:!0,__self:!0,__source:!0};function s2(e,t,n){var s,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(s in t)r3.call(t,s)&&!a3.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)a[s]===void 0&&(a[s]=t[s]);return{$$typeof:t3,type:e,key:i,ref:o,props:a,_owner:s3.current}}Wi.Fragment=n3;Wi.jsx=s2;Wi.jsxs=s2;Q0.exports=Wi;var r=Q0.exports,vl={},a2={exports:{}},_t={},i2={exports:{}},o2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,O){var D=I.length;I.push(O);e:for(;0<D;){var Z=D-1>>>1,G=I[Z];if(0<a(G,O))I[Z]=O,I[D]=G,D=Z;else break e}}function n(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var O=I[0],D=I.pop();if(D!==O){I[0]=D;e:for(var Z=0,G=I.length,Ve=G>>>1;Z<Ve;){var Se=2*(Z+1)-1,Ge=I[Se],Ne=Se+1,ct=I[Ne];if(0>a(Ge,D))Ne<G&&0>a(ct,Ge)?(I[Z]=ct,I[Ne]=D,Z=Ne):(I[Z]=Ge,I[Se]=D,Z=Se);else if(Ne<G&&0>a(ct,D))I[Z]=ct,I[Ne]=D,Z=Ne;else break e}}return O}function a(I,O){var D=I.sortIndex-O.sortIndex;return D!==0?D:I.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],d=[],p=1,m=null,f=3,y=!1,h=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(I){for(var O=n(d);O!==null;){if(O.callback===null)s(d);else if(O.startTime<=I)s(d),O.sortIndex=O.expirationTime,t(c,O);else break;O=n(d)}}function j(I){if(x=!1,b(I),!h)if(n(c)!==null)h=!0,A(C);else{var O=n(d);O!==null&&q(j,O.startTime-I)}}function C(I,O){h=!1,x&&(x=!1,w(N),N=-1),y=!0;var D=f;try{for(b(O),m=n(c);m!==null&&(!(m.expirationTime>O)||I&&!B());){var Z=m.callback;if(typeof Z=="function"){m.callback=null,f=m.priorityLevel;var G=Z(m.expirationTime<=O);O=e.unstable_now(),typeof G=="function"?m.callback=G:m===n(c)&&s(c),b(O)}else s(c);m=n(c)}if(m!==null)var Ve=!0;else{var Se=n(d);Se!==null&&q(j,Se.startTime-O),Ve=!1}return Ve}finally{m=null,f=D,y=!1}}var E=!1,S=null,N=-1,_=5,z=-1;function B(){return!(e.unstable_now()-z<_)}function ee(){if(S!==null){var I=e.unstable_now();z=I;var O=!0;try{O=S(!0,I)}finally{O?je():(E=!1,S=null)}}else E=!1}var je;if(typeof g=="function")je=function(){g(ee)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,Ce=ne.port2;ne.port1.onmessage=ee,je=function(){Ce.postMessage(null)}}else je=function(){k(ee,0)};function A(I){S=I,E||(E=!0,je())}function q(I,O){N=k(function(){I(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){h||y||(h=!0,A(C))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(I){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var D=f;f=O;try{return I()}finally{f=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,O){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var D=f;f=I;try{return O()}finally{f=D}},e.unstable_scheduleCallback=function(I,O,D){var Z=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Z+D:Z):D=Z,I){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=D+G,I={id:p++,callback:O,priorityLevel:I,startTime:D,expirationTime:G,sortIndex:-1},D>Z?(I.sortIndex=D,t(d,I),n(c)===null&&I===n(d)&&(x?(w(N),N=-1):x=!0,q(j,D-Z))):(I.sortIndex=G,t(c,I),h||y||(h=!0,A(C))),I},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(I){var O=f;return function(){var D=f;f=O;try{return I.apply(this,arguments)}finally{f=D}}}})(o2);i2.exports=o2;var i3=i2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l2=u,St=i3;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c2=new Set,Hs={};function Sr(e,t){Kr(e,t),Kr(e+"Capture",t)}function Kr(e,t){for(Hs[e]=t,e=0;e<t.length;e++)c2.add(t[e])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yl=Object.prototype.hasOwnProperty,o3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,md={},gd={};function l3(e){return yl.call(gd,e)?!0:yl.call(md,e)?!1:o3.test(e)?gd[e]=!0:(md[e]=!0,!1)}function c3(e,t,n,s){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function d3(e,t,n,s){if(t===null||typeof t>"u"||c3(e,t,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function lt(e,t,n,s,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){We[e]=new lt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];We[t]=new lt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){We[e]=new lt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){We[e]=new lt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){We[e]=new lt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){We[e]=new lt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){We[e]=new lt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){We[e]=new lt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){We[e]=new lt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bc=/[\-:]([a-z])/g;function Vc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bc,Vc);We[t]=new lt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bc,Vc);We[t]=new lt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bc,Vc);We[t]=new lt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){We[e]=new lt(e,1,!1,e.toLowerCase(),null,!1,!1)});We.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){We[e]=new lt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hc(e,t,n,s){var a=We.hasOwnProperty(t)?We[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(d3(t,n,a,s)&&(n=null),s||a===null?l3(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,s=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,s?e.setAttributeNS(s,t,n):e.setAttribute(t,n))))}var _n=l2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ba=Symbol.for("react.element"),Rr=Symbol.for("react.portal"),Or=Symbol.for("react.fragment"),Uc=Symbol.for("react.strict_mode"),bl=Symbol.for("react.profiler"),d2=Symbol.for("react.provider"),u2=Symbol.for("react.context"),qc=Symbol.for("react.forward_ref"),wl=Symbol.for("react.suspense"),kl=Symbol.for("react.suspense_list"),Wc=Symbol.for("react.memo"),In=Symbol.for("react.lazy"),p2=Symbol.for("react.offscreen"),xd=Symbol.iterator;function ps(e){return e===null||typeof e!="object"?null:(e=xd&&e[xd]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,So;function Cs(e){if(So===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);So=t&&t[1]||""}return`
`+So+e}var No=!1;function _o(e,t){if(!e||No)return"";No=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var s=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){s=d}e.call(t.prototype)}else{try{throw Error()}catch(d){s=d}e()}}catch(d){if(d&&s&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),i=s.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var c=`
`+a[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{No=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cs(e):""}function u3(e){switch(e.tag){case 5:return Cs(e.type);case 16:return Cs("Lazy");case 13:return Cs("Suspense");case 19:return Cs("SuspenseList");case 0:case 2:case 15:return e=_o(e.type,!1),e;case 11:return e=_o(e.type.render,!1),e;case 1:return e=_o(e.type,!0),e;default:return""}}function jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Or:return"Fragment";case Rr:return"Portal";case bl:return"Profiler";case Uc:return"StrictMode";case wl:return"Suspense";case kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case u2:return(e.displayName||"Context")+".Consumer";case d2:return(e._context.displayName||"Context")+".Provider";case qc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wc:return t=e.displayName||null,t!==null?t:jl(e.type)||"Memo";case In:t=e._payload,e=e._init;try{return jl(e(t))}catch{}}return null}function p3(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jl(t);case 8:return t===Uc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Qn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function h2(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function h3(e){var t=h2(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){s=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(o){s=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wa(e){e._valueTracker||(e._valueTracker=h3(e))}function f2(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=h2(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cl(e,t){var n=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function vd(e,t){var n=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;n=Qn(t.value!=null?t.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function m2(e,t){t=t.checked,t!=null&&Hc(e,"checked",t,!1)}function Sl(e,t){m2(e,t);var n=Qn(t.value),s=t.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Nl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Nl(e,t.type,Qn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Nl(e,t,n){(t!=="number"||di(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ss=Array.isArray;function qr(e,t,n,s){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&s&&(e[n].defaultSelected=!0)}else{for(n=""+Qn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function _l(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Ss(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Qn(n)}}function g2(e,t){var n=Qn(t.value),s=Qn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function wd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function x2(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function El(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?x2(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ka,v2=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,s,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ka=ka||document.createElement("div"),ka.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ka.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Us(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f3=["Webkit","ms","Moz","O"];Object.keys(Ts).forEach(function(e){f3.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ts[t]=Ts[e]})});function y2(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ts.hasOwnProperty(e)&&Ts[e]?(""+t).trim():t+"px"}function b2(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var s=n.indexOf("--")===0,a=y2(n,t[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,a):e[n]=a}}var m3=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tl(e,t){if(t){if(m3[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function zl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pl=null;function Gc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Il=null,Wr=null,Gr=null;function kd(e){if(e=pa(e)){if(typeof Il!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Ki(t),Il(e.stateNode,e.type,t))}}function w2(e){Wr?Gr?Gr.push(e):Gr=[e]:Wr=e}function k2(){if(Wr){var e=Wr,t=Gr;if(Gr=Wr=null,kd(e),t)for(e=0;e<t.length;e++)kd(t[e])}}function j2(e,t){return e(t)}function C2(){}var Eo=!1;function S2(e,t,n){if(Eo)return e(t,n);Eo=!0;try{return j2(e,t,n)}finally{Eo=!1,(Wr!==null||Gr!==null)&&(C2(),k2())}}function qs(e,t){var n=e.stateNode;if(n===null)return null;var s=Ki(n);if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var Rl=!1;if(jn)try{var hs={};Object.defineProperty(hs,"passive",{get:function(){Rl=!0}}),window.addEventListener("test",hs,hs),window.removeEventListener("test",hs,hs)}catch{Rl=!1}function g3(e,t,n,s,a,i,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(p){this.onError(p)}}var zs=!1,ui=null,pi=!1,Ol=null,x3={onError:function(e){zs=!0,ui=e}};function v3(e,t,n,s,a,i,o,l,c){zs=!1,ui=null,g3.apply(x3,arguments)}function y3(e,t,n,s,a,i,o,l,c){if(v3.apply(this,arguments),zs){if(zs){var d=ui;zs=!1,ui=null}else throw Error(R(198));pi||(pi=!0,Ol=d)}}function Nr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function N2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jd(e){if(Nr(e)!==e)throw Error(R(188))}function b3(e){var t=e.alternate;if(!t){if(t=Nr(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,s=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(s=a.return,s!==null){n=s;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return jd(a),e;if(i===s)return jd(a),t;i=i.sibling}throw Error(R(188))}if(n.return!==s.return)n=a,s=i;else{for(var o=!1,l=a.child;l;){if(l===n){o=!0,n=a,s=i;break}if(l===s){o=!0,s=a,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,s=a;break}if(l===s){o=!0,s=i,n=a;break}l=l.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==s)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function _2(e){return e=b3(e),e!==null?E2(e):null}function E2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=E2(e);if(t!==null)return t;e=e.sibling}return null}var T2=St.unstable_scheduleCallback,Cd=St.unstable_cancelCallback,w3=St.unstable_shouldYield,k3=St.unstable_requestPaint,Ie=St.unstable_now,j3=St.unstable_getCurrentPriorityLevel,Yc=St.unstable_ImmediatePriority,z2=St.unstable_UserBlockingPriority,hi=St.unstable_NormalPriority,C3=St.unstable_LowPriority,P2=St.unstable_IdlePriority,Gi=null,cn=null;function S3(e){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(Gi,e,void 0,(e.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:E3,N3=Math.log,_3=Math.LN2;function E3(e){return e>>>=0,e===0?32:31-(N3(e)/_3|0)|0}var ja=64,Ca=4194304;function Ns(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fi(e,t){var n=e.pendingLanes;if(n===0)return 0;var s=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~a;l!==0?s=Ns(l):(i&=o,i!==0&&(s=Ns(i)))}else o=n&~a,o!==0?s=Ns(o):i!==0&&(s=Ns(i));if(s===0)return 0;if(t!==0&&t!==s&&!(t&a)&&(a=s&-s,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(s&4&&(s|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)n=31-Wt(t),a=1<<n,s|=e[n],t&=~a;return s}function T3(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function z3(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Wt(i),l=1<<o,c=a[o];c===-1?(!(l&n)||l&s)&&(a[o]=T3(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function $l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function I2(){var e=ja;return ja<<=1,!(ja&4194240)&&(ja=64),e}function To(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function da(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Wt(t),e[t]=n}function P3(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Wt(n),i=1<<a;t[a]=0,s[a]=-1,e[a]=-1,n&=~i}}function Qc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-Wt(n),a=1<<s;a&t|e[s]&t&&(e[s]|=t),n&=~a}}var ie=0;function R2(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var O2,Zc,$2,L2,A2,Ll=!1,Sa=[],Fn=null,Bn=null,Vn=null,Ws=new Map,Gs=new Map,On=[],I3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sd(e,t){switch(e){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":Ws.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gs.delete(t.pointerId)}}function fs(e,t,n,s,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:i,targetContainers:[a]},t!==null&&(t=pa(t),t!==null&&Zc(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function R3(e,t,n,s,a){switch(t){case"focusin":return Fn=fs(Fn,e,t,n,s,a),!0;case"dragenter":return Bn=fs(Bn,e,t,n,s,a),!0;case"mouseover":return Vn=fs(Vn,e,t,n,s,a),!0;case"pointerover":var i=a.pointerId;return Ws.set(i,fs(Ws.get(i)||null,e,t,n,s,a)),!0;case"gotpointercapture":return i=a.pointerId,Gs.set(i,fs(Gs.get(i)||null,e,t,n,s,a)),!0}return!1}function M2(e){var t=lr(e.target);if(t!==null){var n=Nr(t);if(n!==null){if(t=n.tag,t===13){if(t=N2(n),t!==null){e.blockedOn=t,A2(e.priority,function(){$2(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ya(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Al(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);Pl=s,n.target.dispatchEvent(s),Pl=null}else return t=pa(n),t!==null&&Zc(t),e.blockedOn=n,!1;t.shift()}return!0}function Nd(e,t,n){Ya(e)&&n.delete(t)}function O3(){Ll=!1,Fn!==null&&Ya(Fn)&&(Fn=null),Bn!==null&&Ya(Bn)&&(Bn=null),Vn!==null&&Ya(Vn)&&(Vn=null),Ws.forEach(Nd),Gs.forEach(Nd)}function ms(e,t){e.blockedOn===t&&(e.blockedOn=null,Ll||(Ll=!0,St.unstable_scheduleCallback(St.unstable_NormalPriority,O3)))}function Ys(e){function t(a){return ms(a,e)}if(0<Sa.length){ms(Sa[0],e);for(var n=1;n<Sa.length;n++){var s=Sa[n];s.blockedOn===e&&(s.blockedOn=null)}}for(Fn!==null&&ms(Fn,e),Bn!==null&&ms(Bn,e),Vn!==null&&ms(Vn,e),Ws.forEach(t),Gs.forEach(t),n=0;n<On.length;n++)s=On[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<On.length&&(n=On[0],n.blockedOn===null);)M2(n),n.blockedOn===null&&On.shift()}var Yr=_n.ReactCurrentBatchConfig,mi=!0;function $3(e,t,n,s){var a=ie,i=Yr.transition;Yr.transition=null;try{ie=1,Kc(e,t,n,s)}finally{ie=a,Yr.transition=i}}function L3(e,t,n,s){var a=ie,i=Yr.transition;Yr.transition=null;try{ie=4,Kc(e,t,n,s)}finally{ie=a,Yr.transition=i}}function Kc(e,t,n,s){if(mi){var a=Al(e,t,n,s);if(a===null)Do(e,t,s,gi,n),Sd(e,s);else if(R3(a,e,t,n,s))s.stopPropagation();else if(Sd(e,s),t&4&&-1<I3.indexOf(e)){for(;a!==null;){var i=pa(a);if(i!==null&&O2(i),i=Al(e,t,n,s),i===null&&Do(e,t,s,gi,n),i===a)break;a=i}a!==null&&s.stopPropagation()}else Do(e,t,s,null,n)}}var gi=null;function Al(e,t,n,s){if(gi=null,e=Gc(s),e=lr(e),e!==null)if(t=Nr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=N2(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gi=e,null}function D2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j3()){case Yc:return 1;case z2:return 4;case hi:case C3:return 16;case P2:return 536870912;default:return 16}default:return 16}}var Ln=null,Jc=null,Qa=null;function F2(){if(Qa)return Qa;var e,t=Jc,n=t.length,s,a="value"in Ln?Ln.value:Ln.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(s=1;s<=o&&t[n-s]===a[i-s];s++);return Qa=a.slice(e,1<s?1-s:void 0)}function Za(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Na(){return!0}function _d(){return!1}function Et(e){function t(n,s,a,i,o){this._reactName=n,this._targetInst=a,this.type=s,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Na:_d,this.isPropagationStopped=_d,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Na)},persist:function(){},isPersistent:Na}),t}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xc=Et(is),ua=ke({},is,{view:0,detail:0}),A3=Et(ua),zo,Po,gs,Yi=ke({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:e1,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gs&&(gs&&e.type==="mousemove"?(zo=e.screenX-gs.screenX,Po=e.screenY-gs.screenY):Po=zo=0,gs=e),zo)},movementY:function(e){return"movementY"in e?e.movementY:Po}}),Ed=Et(Yi),M3=ke({},Yi,{dataTransfer:0}),D3=Et(M3),F3=ke({},ua,{relatedTarget:0}),Io=Et(F3),B3=ke({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),V3=Et(B3),H3=ke({},is,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),U3=Et(H3),q3=ke({},is,{data:0}),Td=Et(q3),W3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q3(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Y3[e])?!!t[e]:!1}function e1(){return Q3}var Z3=ke({},ua,{key:function(e){if(e.key){var t=W3[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Za(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?G3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:e1,charCode:function(e){return e.type==="keypress"?Za(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Za(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),K3=Et(Z3),J3=ke({},Yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zd=Et(J3),X3=ke({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:e1}),em=Et(X3),tm=ke({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),nm=Et(tm),rm=ke({},Yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sm=Et(rm),am=[9,13,27,32],t1=jn&&"CompositionEvent"in window,Ps=null;jn&&"documentMode"in document&&(Ps=document.documentMode);var im=jn&&"TextEvent"in window&&!Ps,B2=jn&&(!t1||Ps&&8<Ps&&11>=Ps),Pd=String.fromCharCode(32),Id=!1;function V2(e,t){switch(e){case"keyup":return am.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $r=!1;function om(e,t){switch(e){case"compositionend":return H2(t);case"keypress":return t.which!==32?null:(Id=!0,Pd);case"textInput":return e=t.data,e===Pd&&Id?null:e;default:return null}}function lm(e,t){if($r)return e==="compositionend"||!t1&&V2(e,t)?(e=F2(),Qa=Jc=Ln=null,$r=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return B2&&t.locale!=="ko"?null:t.data;default:return null}}var cm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cm[e.type]:t==="textarea"}function U2(e,t,n,s){w2(s),t=xi(t,"onChange"),0<t.length&&(n=new Xc("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var Is=null,Qs=null;function dm(e){tp(e,0)}function Qi(e){var t=Mr(e);if(f2(t))return e}function um(e,t){if(e==="change")return t}var q2=!1;if(jn){var Ro;if(jn){var Oo="oninput"in document;if(!Oo){var Od=document.createElement("div");Od.setAttribute("oninput","return;"),Oo=typeof Od.oninput=="function"}Ro=Oo}else Ro=!1;q2=Ro&&(!document.documentMode||9<document.documentMode)}function $d(){Is&&(Is.detachEvent("onpropertychange",W2),Qs=Is=null)}function W2(e){if(e.propertyName==="value"&&Qi(Qs)){var t=[];U2(t,Qs,e,Gc(e)),S2(dm,t)}}function pm(e,t,n){e==="focusin"?($d(),Is=t,Qs=n,Is.attachEvent("onpropertychange",W2)):e==="focusout"&&$d()}function hm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qi(Qs)}function fm(e,t){if(e==="click")return Qi(t)}function mm(e,t){if(e==="input"||e==="change")return Qi(t)}function gm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qt=typeof Object.is=="function"?Object.is:gm;function Zs(e,t){if(Qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var a=n[s];if(!yl.call(t,a)||!Qt(e[a],t[a]))return!1}return!0}function Ld(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ad(e,t){var n=Ld(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ld(n)}}function G2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?G2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Y2(){for(var e=window,t=di();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=di(e.document)}return t}function n1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xm(e){var t=Y2(),n=e.focusedElem,s=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&G2(n.ownerDocument.documentElement,n)){if(s!==null&&n1(n)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(s.start,a);s=s.end===void 0?i:Math.min(s.end,a),!e.extend&&i>s&&(a=s,s=i,i=a),a=Ad(n,i);var o=Ad(n,s);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>s?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vm=jn&&"documentMode"in document&&11>=document.documentMode,Lr=null,Ml=null,Rs=null,Dl=!1;function Md(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dl||Lr==null||Lr!==di(s)||(s=Lr,"selectionStart"in s&&n1(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Rs&&Zs(Rs,s)||(Rs=s,s=xi(Ml,"onSelect"),0<s.length&&(t=new Xc("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=Lr)))}function _a(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ar={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},$o={},Q2={};jn&&(Q2=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Zi(e){if($o[e])return $o[e];if(!Ar[e])return e;var t=Ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Q2)return $o[e]=t[n];return e}var Z2=Zi("animationend"),K2=Zi("animationiteration"),J2=Zi("animationstart"),X2=Zi("transitionend"),ep=new Map,Dd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jn(e,t){ep.set(e,t),Sr(t,[e])}for(var Lo=0;Lo<Dd.length;Lo++){var Ao=Dd[Lo],ym=Ao.toLowerCase(),bm=Ao[0].toUpperCase()+Ao.slice(1);Jn(ym,"on"+bm)}Jn(Z2,"onAnimationEnd");Jn(K2,"onAnimationIteration");Jn(J2,"onAnimationStart");Jn("dblclick","onDoubleClick");Jn("focusin","onFocus");Jn("focusout","onBlur");Jn(X2,"onTransitionEnd");Kr("onMouseEnter",["mouseout","mouseover"]);Kr("onMouseLeave",["mouseout","mouseover"]);Kr("onPointerEnter",["pointerout","pointerover"]);Kr("onPointerLeave",["pointerout","pointerover"]);Sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wm=new Set("cancel close invalid load scroll toggle".split(" ").concat(_s));function Fd(e,t,n){var s=e.type||"unknown-event";e.currentTarget=n,y3(s,t,void 0,e),e.currentTarget=null}function tp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],a=s.event;s=s.listeners;e:{var i=void 0;if(t)for(var o=s.length-1;0<=o;o--){var l=s[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==i&&a.isPropagationStopped())break e;Fd(a,l,d),i=c}else for(o=0;o<s.length;o++){if(l=s[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==i&&a.isPropagationStopped())break e;Fd(a,l,d),i=c}}}if(pi)throw e=Ol,pi=!1,Ol=null,e}function fe(e,t){var n=t[Ul];n===void 0&&(n=t[Ul]=new Set);var s=e+"__bubble";n.has(s)||(np(t,e,2,!1),n.add(s))}function Mo(e,t,n){var s=0;t&&(s|=4),np(n,e,s,t)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function Ks(e){if(!e[Ea]){e[Ea]=!0,c2.forEach(function(n){n!=="selectionchange"&&(wm.has(n)||Mo(n,!1,e),Mo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ea]||(t[Ea]=!0,Mo("selectionchange",!1,t))}}function np(e,t,n,s){switch(D2(t)){case 1:var a=$3;break;case 4:a=L3;break;default:a=Kc}n=a.bind(null,t,n,e),a=void 0,!Rl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Do(e,t,n,s,a){var i=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var o=s.tag;if(o===3||o===4){var l=s.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=s.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;o=o.return}for(;l!==null;){if(o=lr(l),o===null)return;if(c=o.tag,c===5||c===6){s=i=o;continue e}l=l.parentNode}}s=s.return}S2(function(){var d=i,p=Gc(n),m=[];e:{var f=ep.get(e);if(f!==void 0){var y=Xc,h=e;switch(e){case"keypress":if(Za(n)===0)break e;case"keydown":case"keyup":y=K3;break;case"focusin":h="focus",y=Io;break;case"focusout":h="blur",y=Io;break;case"beforeblur":case"afterblur":y=Io;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=D3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=em;break;case Z2:case K2:case J2:y=V3;break;case X2:y=nm;break;case"scroll":y=A3;break;case"wheel":y=sm;break;case"copy":case"cut":case"paste":y=U3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=zd}var x=(t&4)!==0,k=!x&&e==="scroll",w=x?f!==null?f+"Capture":null:f;x=[];for(var g=d,b;g!==null;){b=g;var j=b.stateNode;if(b.tag===5&&j!==null&&(b=j,w!==null&&(j=qs(g,w),j!=null&&x.push(Js(g,j,b)))),k)break;g=g.return}0<x.length&&(f=new y(f,h,null,n,p),m.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==Pl&&(h=n.relatedTarget||n.fromElement)&&(lr(h)||h[Cn]))break e;if((y||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,y?(h=n.relatedTarget||n.toElement,y=d,h=h?lr(h):null,h!==null&&(k=Nr(h),h!==k||h.tag!==5&&h.tag!==6)&&(h=null)):(y=null,h=d),y!==h)){if(x=Ed,j="onMouseLeave",w="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(x=zd,j="onPointerLeave",w="onPointerEnter",g="pointer"),k=y==null?f:Mr(y),b=h==null?f:Mr(h),f=new x(j,g+"leave",y,n,p),f.target=k,f.relatedTarget=b,j=null,lr(p)===d&&(x=new x(w,g+"enter",h,n,p),x.target=b,x.relatedTarget=k,j=x),k=j,y&&h)t:{for(x=y,w=h,g=0,b=x;b;b=Pr(b))g++;for(b=0,j=w;j;j=Pr(j))b++;for(;0<g-b;)x=Pr(x),g--;for(;0<b-g;)w=Pr(w),b--;for(;g--;){if(x===w||w!==null&&x===w.alternate)break t;x=Pr(x),w=Pr(w)}x=null}else x=null;y!==null&&Bd(m,f,y,x,!1),h!==null&&k!==null&&Bd(m,k,h,x,!0)}}e:{if(f=d?Mr(d):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var C=um;else if(Rd(f))if(q2)C=mm;else{C=hm;var E=pm}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=fm);if(C&&(C=C(e,d))){U2(m,C,n,p);break e}E&&E(e,f,d),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&Nl(f,"number",f.value)}switch(E=d?Mr(d):window,e){case"focusin":(Rd(E)||E.contentEditable==="true")&&(Lr=E,Ml=d,Rs=null);break;case"focusout":Rs=Ml=Lr=null;break;case"mousedown":Dl=!0;break;case"contextmenu":case"mouseup":case"dragend":Dl=!1,Md(m,n,p);break;case"selectionchange":if(vm)break;case"keydown":case"keyup":Md(m,n,p)}var S;if(t1)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else $r?V2(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(B2&&n.locale!=="ko"&&($r||N!=="onCompositionStart"?N==="onCompositionEnd"&&$r&&(S=F2()):(Ln=p,Jc="value"in Ln?Ln.value:Ln.textContent,$r=!0)),E=xi(d,N),0<E.length&&(N=new Td(N,e,null,n,p),m.push({event:N,listeners:E}),S?N.data=S:(S=H2(n),S!==null&&(N.data=S)))),(S=im?om(e,n):lm(e,n))&&(d=xi(d,"onBeforeInput"),0<d.length&&(p=new Td("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:d}),p.data=S))}tp(m,t)})}function Js(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xi(e,t){for(var n=t+"Capture",s=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=qs(e,n),i!=null&&s.unshift(Js(e,i,a)),i=qs(e,t),i!=null&&s.push(Js(e,i,a))),e=e.return}return s}function Pr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bd(e,t,n,s,a){for(var i=t._reactName,o=[];n!==null&&n!==s;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===s)break;l.tag===5&&d!==null&&(l=d,a?(c=qs(n,i),c!=null&&o.unshift(Js(n,c,l))):a||(c=qs(n,i),c!=null&&o.push(Js(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var km=/\r\n?/g,jm=/\u0000|\uFFFD/g;function Vd(e){return(typeof e=="string"?e:""+e).replace(km,`
`).replace(jm,"")}function Ta(e,t,n){if(t=Vd(t),Vd(e)!==t&&n)throw Error(R(425))}function vi(){}var Fl=null,Bl=null;function Vl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hl=typeof setTimeout=="function"?setTimeout:void 0,Cm=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,Sm=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(e){return Hd.resolve(null).then(e).catch(Nm)}:Hl;function Nm(e){setTimeout(function(){throw e})}function Fo(e,t){var n=t,s=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(s===0){e.removeChild(a),Ys(t);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=a}while(n);Ys(t)}function Hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ud(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var os=Math.random().toString(36).slice(2),an="__reactFiber$"+os,Xs="__reactProps$"+os,Cn="__reactContainer$"+os,Ul="__reactEvents$"+os,_m="__reactListeners$"+os,Em="__reactHandles$"+os;function lr(e){var t=e[an];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Cn]||n[an]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ud(e);e!==null;){if(n=e[an])return n;e=Ud(e)}return t}e=n,n=e.parentNode}return null}function pa(e){return e=e[an]||e[Cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Ki(e){return e[Xs]||null}var ql=[],Dr=-1;function Xn(e){return{current:e}}function me(e){0>Dr||(e.current=ql[Dr],ql[Dr]=null,Dr--)}function ue(e,t){Dr++,ql[Dr]=e.current,e.current=t}var Zn={},et=Xn(Zn),mt=Xn(!1),gr=Zn;function Jr(e,t){var n=e.type.contextTypes;if(!n)return Zn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function gt(e){return e=e.childContextTypes,e!=null}function yi(){me(mt),me(et)}function qd(e,t,n){if(et.current!==Zn)throw Error(R(168));ue(et,t),ue(mt,n)}function rp(e,t,n){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(R(108,p3(e)||"Unknown",a));return ke({},n,s)}function bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zn,gr=et.current,ue(et,e),ue(mt,mt.current),!0}function Wd(e,t,n){var s=e.stateNode;if(!s)throw Error(R(169));n?(e=rp(e,t,gr),s.__reactInternalMemoizedMergedChildContext=e,me(mt),me(et),ue(et,e)):me(mt),ue(mt,n)}var xn=null,Ji=!1,Bo=!1;function sp(e){xn===null?xn=[e]:xn.push(e)}function Tm(e){Ji=!0,sp(e)}function er(){if(!Bo&&xn!==null){Bo=!0;var e=0,t=ie;try{var n=xn;for(ie=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}xn=null,Ji=!1}catch(a){throw xn!==null&&(xn=xn.slice(e+1)),T2(Yc,er),a}finally{ie=t,Bo=!1}}return null}var Fr=[],Br=0,wi=null,ki=0,Pt=[],It=0,xr=null,vn=1,yn="";function ir(e,t){Fr[Br++]=ki,Fr[Br++]=wi,wi=e,ki=t}function ap(e,t,n){Pt[It++]=vn,Pt[It++]=yn,Pt[It++]=xr,xr=e;var s=vn;e=yn;var a=32-Wt(s)-1;s&=~(1<<a),n+=1;var i=32-Wt(t)+a;if(30<i){var o=a-a%5;i=(s&(1<<o)-1).toString(32),s>>=o,a-=o,vn=1<<32-Wt(t)+a|n<<a|s,yn=i+e}else vn=1<<i|n<<a|s,yn=e}function r1(e){e.return!==null&&(ir(e,1),ap(e,1,0))}function s1(e){for(;e===wi;)wi=Fr[--Br],Fr[Br]=null,ki=Fr[--Br],Fr[Br]=null;for(;e===xr;)xr=Pt[--It],Pt[It]=null,yn=Pt[--It],Pt[It]=null,vn=Pt[--It],Pt[It]=null}var jt=null,kt=null,xe=!1,qt=null;function ip(e,t){var n=Ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,jt=e,kt=Hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,jt=e,kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xr!==null?{id:vn,overflow:yn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,jt=e,kt=null,!0):!1;default:return!1}}function Wl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gl(e){if(xe){var t=kt;if(t){var n=t;if(!Gd(e,t)){if(Wl(e))throw Error(R(418));t=Hn(n.nextSibling);var s=jt;t&&Gd(e,t)?ip(s,n):(e.flags=e.flags&-4097|2,xe=!1,jt=e)}}else{if(Wl(e))throw Error(R(418));e.flags=e.flags&-4097|2,xe=!1,jt=e}}}function Yd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;jt=e}function za(e){if(e!==jt)return!1;if(!xe)return Yd(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vl(e.type,e.memoizedProps)),t&&(t=kt)){if(Wl(e))throw op(),Error(R(418));for(;t;)ip(e,t),t=Hn(t.nextSibling)}if(Yd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){kt=Hn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}kt=null}}else kt=jt?Hn(e.stateNode.nextSibling):null;return!0}function op(){for(var e=kt;e;)e=Hn(e.nextSibling)}function Xr(){kt=jt=null,xe=!1}function a1(e){qt===null?qt=[e]:qt.push(e)}var zm=_n.ReactCurrentBatchConfig;function Ht(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ji=Xn(null),Ci=null,Vr=null,i1=null;function o1(){i1=Vr=Ci=null}function l1(e){var t=ji.current;me(ji),e._currentValue=t}function Yl(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function Qr(e,t){Ci=e,i1=Vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ft=!0),e.firstContext=null)}function At(e){var t=e._currentValue;if(i1!==e)if(e={context:e,memoizedValue:t,next:null},Vr===null){if(Ci===null)throw Error(R(308));Vr=e,Ci.dependencies={lanes:0,firstContext:e}}else Vr=Vr.next=e;return t}var cr=null;function c1(e){cr===null?cr=[e]:cr.push(e)}function lp(e,t,n,s){var a=t.interleaved;return a===null?(n.next=n,c1(t)):(n.next=a.next,a.next=n),t.interleaved=n,Sn(e,s)}function Sn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rn=!1;function d1(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Un(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,re&2){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,Sn(e,n)}return a=s.interleaved,a===null?(t.next=t,c1(s)):(t.next=a.next,a.next=t),s.interleaved=t,Sn(e,n)}function Ka(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Qc(e,n)}}function Qd(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Si(e,t,n,s){var a=e.updateQueue;Rn=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?i=d:o.next=d,o=c;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=c))}if(i!==null){var m=a.baseState;o=0,p=d=c=null,l=i;do{var f=l.lane,y=l.eventTime;if((s&f)===f){p!==null&&(p=p.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,x=l;switch(f=t,y=n,x.tag){case 1:if(h=x.payload,typeof h=="function"){m=h.call(y,m,f);break e}m=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=x.payload,f=typeof h=="function"?h.call(y,m,f):h,f==null)break e;m=ke({},m,f);break e;case 2:Rn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=a.effects,f===null?a.effects=[l]:f.push(l))}else y={eventTime:y,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=y,c=m):p=p.next=y,o|=f;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;f=l,l=f.next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}while(1);if(p===null&&(c=m),a.baseState=c,a.firstBaseUpdate=d,a.lastBaseUpdate=p,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);yr|=o,e.lanes=o,e.memoizedState=m}}function Zd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=n,typeof a!="function")throw Error(R(191,a));a.call(s)}}}var dp=new l2.Component().refs;function Ql(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:ke({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xi={isMounted:function(e){return(e=e._reactInternals)?Nr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var s=it(),a=Wn(e),i=kn(s,a);i.payload=t,n!=null&&(i.callback=n),t=Un(e,i,a),t!==null&&(Gt(t,e,a,s),Ka(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=it(),a=Wn(e),i=kn(s,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Un(e,i,a),t!==null&&(Gt(t,e,a,s),Ka(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=it(),s=Wn(e),a=kn(n,s);a.tag=2,t!=null&&(a.callback=t),t=Un(e,a,s),t!==null&&(Gt(t,e,s,n),Ka(t,e,s))}};function Kd(e,t,n,s,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,o):t.prototype&&t.prototype.isPureReactComponent?!Zs(n,s)||!Zs(a,i):!0}function up(e,t,n){var s=!1,a=Zn,i=t.contextType;return typeof i=="object"&&i!==null?i=At(i):(a=gt(t)?gr:et.current,s=t.contextTypes,i=(s=s!=null)?Jr(e,a):Zn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xi,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Jd(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&Xi.enqueueReplaceState(t,t.state,null)}function Zl(e,t,n,s){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=dp,d1(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=At(i):(i=gt(t)?gr:et.current,a.context=Jr(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ql(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Xi.enqueueReplaceState(a,a.state,null),Si(e,n,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function xs(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var s=n.stateNode}if(!s)throw Error(R(147,e));var a=s,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;l===dp&&(l=a.refs={}),o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Pa(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xd(e){var t=e._init;return t(e._payload)}function pp(e){function t(w,g){if(e){var b=w.deletions;b===null?(w.deletions=[g],w.flags|=16):b.push(g)}}function n(w,g){if(!e)return null;for(;g!==null;)t(w,g),g=g.sibling;return null}function s(w,g){for(w=new Map;g!==null;)g.key!==null?w.set(g.key,g):w.set(g.index,g),g=g.sibling;return w}function a(w,g){return w=Gn(w,g),w.index=0,w.sibling=null,w}function i(w,g,b){return w.index=b,e?(b=w.alternate,b!==null?(b=b.index,b<g?(w.flags|=2,g):b):(w.flags|=2,g)):(w.flags|=1048576,g)}function o(w){return e&&w.alternate===null&&(w.flags|=2),w}function l(w,g,b,j){return g===null||g.tag!==6?(g=Yo(b,w.mode,j),g.return=w,g):(g=a(g,b),g.return=w,g)}function c(w,g,b,j){var C=b.type;return C===Or?p(w,g,b.props.children,j,b.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===In&&Xd(C)===g.type)?(j=a(g,b.props),j.ref=xs(w,g,b),j.return=w,j):(j=ri(b.type,b.key,b.props,null,w.mode,j),j.ref=xs(w,g,b),j.return=w,j)}function d(w,g,b,j){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=Qo(b,w.mode,j),g.return=w,g):(g=a(g,b.children||[]),g.return=w,g)}function p(w,g,b,j,C){return g===null||g.tag!==7?(g=hr(b,w.mode,j,C),g.return=w,g):(g=a(g,b),g.return=w,g)}function m(w,g,b){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Yo(""+g,w.mode,b),g.return=w,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ba:return b=ri(g.type,g.key,g.props,null,w.mode,b),b.ref=xs(w,null,g),b.return=w,b;case Rr:return g=Qo(g,w.mode,b),g.return=w,g;case In:var j=g._init;return m(w,j(g._payload),b)}if(Ss(g)||ps(g))return g=hr(g,w.mode,b,null),g.return=w,g;Pa(w,g)}return null}function f(w,g,b,j){var C=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return C!==null?null:l(w,g,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ba:return b.key===C?c(w,g,b,j):null;case Rr:return b.key===C?d(w,g,b,j):null;case In:return C=b._init,f(w,g,C(b._payload),j)}if(Ss(b)||ps(b))return C!==null?null:p(w,g,b,j,null);Pa(w,b)}return null}function y(w,g,b,j,C){if(typeof j=="string"&&j!==""||typeof j=="number")return w=w.get(b)||null,l(g,w,""+j,C);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ba:return w=w.get(j.key===null?b:j.key)||null,c(g,w,j,C);case Rr:return w=w.get(j.key===null?b:j.key)||null,d(g,w,j,C);case In:var E=j._init;return y(w,g,b,E(j._payload),C)}if(Ss(j)||ps(j))return w=w.get(b)||null,p(g,w,j,C,null);Pa(g,j)}return null}function h(w,g,b,j){for(var C=null,E=null,S=g,N=g=0,_=null;S!==null&&N<b.length;N++){S.index>N?(_=S,S=null):_=S.sibling;var z=f(w,S,b[N],j);if(z===null){S===null&&(S=_);break}e&&S&&z.alternate===null&&t(w,S),g=i(z,g,N),E===null?C=z:E.sibling=z,E=z,S=_}if(N===b.length)return n(w,S),xe&&ir(w,N),C;if(S===null){for(;N<b.length;N++)S=m(w,b[N],j),S!==null&&(g=i(S,g,N),E===null?C=S:E.sibling=S,E=S);return xe&&ir(w,N),C}for(S=s(w,S);N<b.length;N++)_=y(S,w,N,b[N],j),_!==null&&(e&&_.alternate!==null&&S.delete(_.key===null?N:_.key),g=i(_,g,N),E===null?C=_:E.sibling=_,E=_);return e&&S.forEach(function(B){return t(w,B)}),xe&&ir(w,N),C}function x(w,g,b,j){var C=ps(b);if(typeof C!="function")throw Error(R(150));if(b=C.call(b),b==null)throw Error(R(151));for(var E=C=null,S=g,N=g=0,_=null,z=b.next();S!==null&&!z.done;N++,z=b.next()){S.index>N?(_=S,S=null):_=S.sibling;var B=f(w,S,z.value,j);if(B===null){S===null&&(S=_);break}e&&S&&B.alternate===null&&t(w,S),g=i(B,g,N),E===null?C=B:E.sibling=B,E=B,S=_}if(z.done)return n(w,S),xe&&ir(w,N),C;if(S===null){for(;!z.done;N++,z=b.next())z=m(w,z.value,j),z!==null&&(g=i(z,g,N),E===null?C=z:E.sibling=z,E=z);return xe&&ir(w,N),C}for(S=s(w,S);!z.done;N++,z=b.next())z=y(S,w,N,z.value,j),z!==null&&(e&&z.alternate!==null&&S.delete(z.key===null?N:z.key),g=i(z,g,N),E===null?C=z:E.sibling=z,E=z);return e&&S.forEach(function(ee){return t(w,ee)}),xe&&ir(w,N),C}function k(w,g,b,j){if(typeof b=="object"&&b!==null&&b.type===Or&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ba:e:{for(var C=b.key,E=g;E!==null;){if(E.key===C){if(C=b.type,C===Or){if(E.tag===7){n(w,E.sibling),g=a(E,b.props.children),g.return=w,w=g;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===In&&Xd(C)===E.type){n(w,E.sibling),g=a(E,b.props),g.ref=xs(w,E,b),g.return=w,w=g;break e}n(w,E);break}else t(w,E);E=E.sibling}b.type===Or?(g=hr(b.props.children,w.mode,j,b.key),g.return=w,w=g):(j=ri(b.type,b.key,b.props,null,w.mode,j),j.ref=xs(w,g,b),j.return=w,w=j)}return o(w);case Rr:e:{for(E=b.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){n(w,g.sibling),g=a(g,b.children||[]),g.return=w,w=g;break e}else{n(w,g);break}else t(w,g);g=g.sibling}g=Qo(b,w.mode,j),g.return=w,w=g}return o(w);case In:return E=b._init,k(w,g,E(b._payload),j)}if(Ss(b))return h(w,g,b,j);if(ps(b))return x(w,g,b,j);Pa(w,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,g!==null&&g.tag===6?(n(w,g.sibling),g=a(g,b),g.return=w,w=g):(n(w,g),g=Yo(b,w.mode,j),g.return=w,w=g),o(w)):n(w,g)}return k}var es=pp(!0),hp=pp(!1),ha={},dn=Xn(ha),ea=Xn(ha),ta=Xn(ha);function dr(e){if(e===ha)throw Error(R(174));return e}function u1(e,t){switch(ue(ta,t),ue(ea,e),ue(dn,ha),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:El(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=El(t,e)}me(dn),ue(dn,t)}function ts(){me(dn),me(ea),me(ta)}function fp(e){dr(ta.current);var t=dr(dn.current),n=El(t,e.type);t!==n&&(ue(ea,e),ue(dn,n))}function p1(e){ea.current===e&&(me(dn),me(ea))}var be=Xn(0);function Ni(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vo=[];function h1(){for(var e=0;e<Vo.length;e++)Vo[e]._workInProgressVersionPrimary=null;Vo.length=0}var Ja=_n.ReactCurrentDispatcher,Ho=_n.ReactCurrentBatchConfig,vr=0,we=null,Me=null,Fe=null,_i=!1,Os=!1,na=0,Pm=0;function Ke(){throw Error(R(321))}function f1(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qt(e[n],t[n]))return!1;return!0}function m1(e,t,n,s,a,i){if(vr=i,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ja.current=e===null||e.memoizedState===null?$m:Lm,e=n(s,a),Os){i=0;do{if(Os=!1,na=0,25<=i)throw Error(R(301));i+=1,Fe=Me=null,t.updateQueue=null,Ja.current=Am,e=n(s,a)}while(Os)}if(Ja.current=Ei,t=Me!==null&&Me.next!==null,vr=0,Fe=Me=we=null,_i=!1,t)throw Error(R(300));return e}function g1(){var e=na!==0;return na=0,e}function sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?we.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Mt(){if(Me===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Fe===null?we.memoizedState:Fe.next;if(t!==null)Fe=t,Me=e;else{if(e===null)throw Error(R(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Fe===null?we.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function ra(e,t){return typeof t=="function"?t(e):t}function Uo(e){var t=Mt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var s=Me,a=s.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}s.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,s=s.baseState;var l=o=null,c=null,d=i;do{var p=d.lane;if((vr&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),s=d.hasEagerState?d.eagerState:e(s,d.action);else{var m={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=m,o=s):c=c.next=m,we.lanes|=p,yr|=p}d=d.next}while(d!==null&&d!==i);c===null?o=s:c.next=l,Qt(s,t.memoizedState)||(ft=!0),t.memoizedState=s,t.baseState=o,t.baseQueue=c,n.lastRenderedState=s}if(e=n.interleaved,e!==null){a=e;do i=a.lane,we.lanes|=i,yr|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function qo(e){var t=Mt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var s=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);Qt(i,t.memoizedState)||(ft=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,s]}function mp(){}function gp(e,t){var n=we,s=Mt(),a=t(),i=!Qt(s.memoizedState,a);if(i&&(s.memoizedState=a,ft=!0),s=s.queue,x1(yp.bind(null,n,s,e),[e]),s.getSnapshot!==t||i||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,sa(9,vp.bind(null,n,s,a,t),void 0,null),Be===null)throw Error(R(349));vr&30||xp(n,t,a)}return a}function xp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vp(e,t,n,s){t.value=n,t.getSnapshot=s,bp(t)&&wp(e)}function yp(e,t,n){return n(function(){bp(t)&&wp(e)})}function bp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qt(e,n)}catch{return!0}}function wp(e){var t=Sn(e,1);t!==null&&Gt(t,e,1,-1)}function eu(e){var t=sn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},t.queue=e,e=e.dispatch=Om.bind(null,we,e),[t.memoizedState,e]}function sa(e,t,n,s){return e={tag:e,create:t,destroy:n,deps:s,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e)),e}function kp(){return Mt().memoizedState}function Xa(e,t,n,s){var a=sn();we.flags|=e,a.memoizedState=sa(1|t,n,void 0,s===void 0?null:s)}function eo(e,t,n,s){var a=Mt();s=s===void 0?null:s;var i=void 0;if(Me!==null){var o=Me.memoizedState;if(i=o.destroy,s!==null&&f1(s,o.deps)){a.memoizedState=sa(t,n,i,s);return}}we.flags|=e,a.memoizedState=sa(1|t,n,i,s)}function tu(e,t){return Xa(8390656,8,e,t)}function x1(e,t){return eo(2048,8,e,t)}function jp(e,t){return eo(4,2,e,t)}function Cp(e,t){return eo(4,4,e,t)}function Sp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Np(e,t,n){return n=n!=null?n.concat([e]):null,eo(4,4,Sp.bind(null,t,e),n)}function v1(){}function _p(e,t){var n=Mt();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&f1(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function Ep(e,t){var n=Mt();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&f1(t,s[1])?s[0]:(e=e(),n.memoizedState=[e,t],e)}function Tp(e,t,n){return vr&21?(Qt(n,t)||(n=I2(),we.lanes|=n,yr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ft=!0),e.memoizedState=n)}function Im(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var s=Ho.transition;Ho.transition={};try{e(!1),t()}finally{ie=n,Ho.transition=s}}function zp(){return Mt().memoizedState}function Rm(e,t,n){var s=Wn(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},Pp(e))Ip(t,n);else if(n=lp(e,t,n,s),n!==null){var a=it();Gt(n,e,s,a),Rp(n,t,s)}}function Om(e,t,n){var s=Wn(e),a={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pp(e))Ip(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,Qt(l,o)){var c=t.interleaved;c===null?(a.next=a,c1(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=lp(e,t,a,s),n!==null&&(a=it(),Gt(n,e,s,a),Rp(n,t,s))}}function Pp(e){var t=e.alternate;return e===we||t!==null&&t===we}function Ip(e,t){Os=_i=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rp(e,t,n){if(n&4194240){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Qc(e,n)}}var Ei={readContext:At,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},$m={readContext:At,useCallback:function(e,t){return sn().memoizedState=[e,t===void 0?null:t],e},useContext:At,useEffect:tu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xa(4194308,4,Sp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xa(4,2,e,t)},useMemo:function(e,t){var n=sn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var s=sn();return t=n!==void 0?n(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Rm.bind(null,we,e),[s.memoizedState,e]},useRef:function(e){var t=sn();return e={current:e},t.memoizedState=e},useState:eu,useDebugValue:v1,useDeferredValue:function(e){return sn().memoizedState=e},useTransition:function(){var e=eu(!1),t=e[0];return e=Im.bind(null,e[1]),sn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var s=we,a=sn();if(xe){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Be===null)throw Error(R(349));vr&30||xp(s,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,tu(yp.bind(null,s,i,e),[e]),s.flags|=2048,sa(9,vp.bind(null,s,i,n,t),void 0,null),n},useId:function(){var e=sn(),t=Be.identifierPrefix;if(xe){var n=yn,s=vn;n=(s&~(1<<32-Wt(s)-1)).toString(32)+n,t=":"+t+"R"+n,n=na++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Pm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lm={readContext:At,useCallback:_p,useContext:At,useEffect:x1,useImperativeHandle:Np,useInsertionEffect:jp,useLayoutEffect:Cp,useMemo:Ep,useReducer:Uo,useRef:kp,useState:function(){return Uo(ra)},useDebugValue:v1,useDeferredValue:function(e){var t=Mt();return Tp(t,Me.memoizedState,e)},useTransition:function(){var e=Uo(ra)[0],t=Mt().memoizedState;return[e,t]},useMutableSource:mp,useSyncExternalStore:gp,useId:zp,unstable_isNewReconciler:!1},Am={readContext:At,useCallback:_p,useContext:At,useEffect:x1,useImperativeHandle:Np,useInsertionEffect:jp,useLayoutEffect:Cp,useMemo:Ep,useReducer:qo,useRef:kp,useState:function(){return qo(ra)},useDebugValue:v1,useDeferredValue:function(e){var t=Mt();return Me===null?t.memoizedState=e:Tp(t,Me.memoizedState,e)},useTransition:function(){var e=qo(ra)[0],t=Mt().memoizedState;return[e,t]},useMutableSource:mp,useSyncExternalStore:gp,useId:zp,unstable_isNewReconciler:!1};function ns(e,t){try{var n="",s=t;do n+=u3(s),s=s.return;while(s);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Wo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Kl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mm=typeof WeakMap=="function"?WeakMap:Map;function Op(e,t,n){n=kn(-1,n),n.tag=3,n.payload={element:null};var s=t.value;return n.callback=function(){zi||(zi=!0,oc=s),Kl(e,t)},n}function $p(e,t,n){n=kn(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;n.payload=function(){return s(a)},n.callback=function(){Kl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Kl(e,t),typeof s!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function nu(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new Mm;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(n)||(a.add(n),e=Jm.bind(null,e,t,n),t.then(e,e))}function ru(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function su(e,t,n,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kn(-1,1),t.tag=2,Un(n,t,1))),n.lanes|=1),e)}var Dm=_n.ReactCurrentOwner,ft=!1;function rt(e,t,n,s){t.child=e===null?hp(t,null,n,s):es(t,e.child,n,s)}function au(e,t,n,s,a){n=n.render;var i=t.ref;return Qr(t,a),s=m1(e,t,n,s,i,a),n=g1(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Nn(e,t,a)):(xe&&n&&r1(t),t.flags|=1,rt(e,t,s,a),t.child)}function iu(e,t,n,s,a){if(e===null){var i=n.type;return typeof i=="function"&&!N1(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Lp(e,t,i,s,a)):(e=ri(n.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Zs,n(o,s)&&e.ref===t.ref)return Nn(e,t,a)}return t.flags|=1,e=Gn(i,s),e.ref=t.ref,e.return=t,t.child=e}function Lp(e,t,n,s,a){if(e!==null){var i=e.memoizedProps;if(Zs(i,s)&&e.ref===t.ref)if(ft=!1,t.pendingProps=s=i,(e.lanes&a)!==0)e.flags&131072&&(ft=!0);else return t.lanes=e.lanes,Nn(e,t,a)}return Jl(e,t,n,s,a)}function Ap(e,t,n){var s=t.pendingProps,a=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Ur,wt),wt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(Ur,wt),wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:n,ue(Ur,wt),wt|=s}else i!==null?(s=i.baseLanes|n,t.memoizedState=null):s=n,ue(Ur,wt),wt|=s;return rt(e,t,a,n),t.child}function Mp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Jl(e,t,n,s,a){var i=gt(n)?gr:et.current;return i=Jr(t,i),Qr(t,a),n=m1(e,t,n,s,i,a),s=g1(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Nn(e,t,a)):(xe&&s&&r1(t),t.flags|=1,rt(e,t,n,a),t.child)}function ou(e,t,n,s,a){if(gt(n)){var i=!0;bi(t)}else i=!1;if(Qr(t,a),t.stateNode===null)ei(e,t),up(t,n,s),Zl(t,n,s,a),s=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=At(d):(d=gt(n)?gr:et.current,d=Jr(t,d));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==s||c!==d)&&Jd(t,o,s,d),Rn=!1;var f=t.memoizedState;o.state=f,Si(t,s,o,a),c=t.memoizedState,l!==s||f!==c||mt.current||Rn?(typeof p=="function"&&(Ql(t,n,p,s),c=t.memoizedState),(l=Rn||Kd(t,n,l,s,f,c,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),o.props=s,o.state=c,o.context=d,s=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{o=t.stateNode,cp(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Ht(t.type,l),o.props=d,m=t.pendingProps,f=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=At(c):(c=gt(n)?gr:et.current,c=Jr(t,c));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||f!==c)&&Jd(t,o,s,c),Rn=!1,f=t.memoizedState,o.state=f,Si(t,s,o,a);var h=t.memoizedState;l!==m||f!==h||mt.current||Rn?(typeof y=="function"&&(Ql(t,n,y,s),h=t.memoizedState),(d=Rn||Kd(t,n,d,s,f,h,c)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(s,h,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(s,h,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=h),o.props=s,o.state=h,o.context=c,s=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),s=!1)}return Xl(e,t,n,s,i,a)}function Xl(e,t,n,s,a,i){Mp(e,t);var o=(t.flags&128)!==0;if(!s&&!o)return a&&Wd(t,n,!1),Nn(e,t,i);s=t.stateNode,Dm.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&o?(t.child=es(t,e.child,null,i),t.child=es(t,null,l,i)):rt(e,t,l,i),t.memoizedState=s.state,a&&Wd(t,n,!0),t.child}function Dp(e){var t=e.stateNode;t.pendingContext?qd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qd(e,t.context,!1),u1(e,t.containerInfo)}function lu(e,t,n,s,a){return Xr(),a1(a),t.flags|=256,rt(e,t,n,s),t.child}var ec={dehydrated:null,treeContext:null,retryLane:0};function tc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fp(e,t,n){var s=t.pendingProps,a=be.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ue(be,a&1),e===null)return Gl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=s.children,e=s.fallback,i?(s=t.mode,i=t.child,o={mode:"hidden",children:o},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ro(o,s,0,null),e=hr(e,s,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=tc(n),t.memoizedState=ec,e):y1(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Fm(e,t,o,s,l,a,n);if(i){i=s.fallback,o=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:s.children};return!(o&1)&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=Gn(a,c),s.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=Gn(l,i):(i=hr(i,o,n,null),i.flags|=2),i.return=t,s.return=t,s.sibling=i,t.child=s,s=i,i=t.child,o=e.child.memoizedState,o=o===null?tc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=ec,s}return i=e.child,e=i.sibling,s=Gn(i,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=n),s.return=t,s.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=s,t.memoizedState=null,s}function y1(e,t){return t=ro({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ia(e,t,n,s){return s!==null&&a1(s),es(t,e.child,null,n),e=y1(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fm(e,t,n,s,a,i,o){if(n)return t.flags&256?(t.flags&=-257,s=Wo(Error(R(422))),Ia(e,t,o,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=s.fallback,a=t.mode,s=ro({mode:"visible",children:s.children},a,0,null),i=hr(i,a,o,null),i.flags|=2,s.return=t,i.return=t,s.sibling=i,t.child=s,t.mode&1&&es(t,e.child,null,o),t.child.memoizedState=tc(o),t.memoizedState=ec,i);if(!(t.mode&1))return Ia(e,t,o,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var l=s.dgst;return s=l,i=Error(R(419)),s=Wo(i,s,void 0),Ia(e,t,o,s)}if(l=(o&e.childLanes)!==0,ft||l){if(s=Be,s!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Sn(e,a),Gt(s,e,a,-1))}return S1(),s=Wo(Error(R(421))),Ia(e,t,o,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Xm.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,kt=Hn(a.nextSibling),jt=t,xe=!0,qt=null,e!==null&&(Pt[It++]=vn,Pt[It++]=yn,Pt[It++]=xr,vn=e.id,yn=e.overflow,xr=t),t=y1(t,s.children),t.flags|=4096,t)}function cu(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Yl(e.return,t,n)}function Go(e,t,n,s,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=n,i.tailMode=a)}function Bp(e,t,n){var s=t.pendingProps,a=s.revealOrder,i=s.tail;if(rt(e,t,s.children,n),s=be.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cu(e,n,t);else if(e.tag===19)cu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(ue(be,s),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Ni(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Go(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ni(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Go(t,!0,n,null,i);break;case"together":Go(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ei(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=Gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bm(e,t,n){switch(t.tag){case 3:Dp(t),Xr();break;case 5:fp(t);break;case 1:gt(t.type)&&bi(t);break;case 4:u1(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;ue(ji,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(ue(be,be.current&1),t.flags|=128,null):n&t.child.childLanes?Fp(e,t,n):(ue(be,be.current&1),e=Nn(e,t,n),e!==null?e.sibling:null);ue(be,be.current&1);break;case 19:if(s=(n&t.childLanes)!==0,e.flags&128){if(s)return Bp(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ue(be,be.current),s)break;return null;case 22:case 23:return t.lanes=0,Ap(e,t,n)}return Nn(e,t,n)}var Vp,nc,Hp,Up;Vp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nc=function(){};Hp=function(e,t,n,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,dr(dn.current);var i=null;switch(n){case"input":a=Cl(e,a),s=Cl(e,s),i=[];break;case"select":a=ke({},a,{value:void 0}),s=ke({},s,{value:void 0}),i=[];break;case"textarea":a=_l(e,a),s=_l(e,s),i=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=vi)}Tl(n,s);var o;n=null;for(d in a)if(!s.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var l=a[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Hs.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in s){var c=s[d];if(l=a!=null?a[d]:void 0,s.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Hs.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&fe("scroll",e),i||l===c||(i=[])):(i=i||[]).push(d,c))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Up=function(e,t,n,s){n!==s&&(t.flags|=4)};function vs(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function Vm(e,t,n){var s=t.pendingProps;switch(s1(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return gt(t.type)&&yi(),Je(t),null;case 3:return s=t.stateNode,ts(),me(mt),me(et),h1(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(za(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qt!==null&&(dc(qt),qt=null))),nc(e,t),Je(t),null;case 5:p1(t);var a=dr(ta.current);if(n=t.type,e!==null&&t.stateNode!=null)Hp(e,t,n,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(R(166));return Je(t),null}if(e=dr(dn.current),za(t)){s=t.stateNode,n=t.type;var i=t.memoizedProps;switch(s[an]=t,s[Xs]=i,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",s),fe("close",s);break;case"iframe":case"object":case"embed":fe("load",s);break;case"video":case"audio":for(a=0;a<_s.length;a++)fe(_s[a],s);break;case"source":fe("error",s);break;case"img":case"image":case"link":fe("error",s),fe("load",s);break;case"details":fe("toggle",s);break;case"input":vd(s,i),fe("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},fe("invalid",s);break;case"textarea":bd(s,i),fe("invalid",s)}Tl(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?s.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ta(s.textContent,l,e),a=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ta(s.textContent,l,e),a=["children",""+l]):Hs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&fe("scroll",s)}switch(n){case"input":wa(s),yd(s,i,!0);break;case"textarea":wa(s),wd(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=vi)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=x2(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=o.createElement(n,{is:s.is}):(e=o.createElement(n),n==="select"&&(o=e,s.multiple?o.multiple=!0:s.size&&(o.size=s.size))):e=o.createElementNS(e,n),e[an]=t,e[Xs]=s,Vp(e,t,!1,!1),t.stateNode=e;e:{switch(o=zl(n,s),n){case"dialog":fe("cancel",e),fe("close",e),a=s;break;case"iframe":case"object":case"embed":fe("load",e),a=s;break;case"video":case"audio":for(a=0;a<_s.length;a++)fe(_s[a],e);a=s;break;case"source":fe("error",e),a=s;break;case"img":case"image":case"link":fe("error",e),fe("load",e),a=s;break;case"details":fe("toggle",e),a=s;break;case"input":vd(e,s),a=Cl(e,s),fe("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=ke({},s,{value:void 0}),fe("invalid",e);break;case"textarea":bd(e,s),a=_l(e,s),fe("invalid",e);break;default:a=s}Tl(n,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?b2(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&v2(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Us(e,c):typeof c=="number"&&Us(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Hs.hasOwnProperty(i)?c!=null&&i==="onScroll"&&fe("scroll",e):c!=null&&Hc(e,i,c,o))}switch(n){case"input":wa(e),yd(e,s,!1);break;case"textarea":wa(e),wd(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Qn(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?qr(e,!!s.multiple,i,!1):s.defaultValue!=null&&qr(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=vi)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Je(t),null;case 6:if(e&&t.stateNode!=null)Up(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(R(166));if(n=dr(ta.current),dr(dn.current),za(t)){if(s=t.stateNode,n=t.memoizedProps,s[an]=t,(i=s.nodeValue!==n)&&(e=jt,e!==null))switch(e.tag){case 3:Ta(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ta(s.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[an]=t,t.stateNode=s}return Je(t),null;case 13:if(me(be),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&kt!==null&&t.mode&1&&!(t.flags&128))op(),Xr(),t.flags|=98560,i=!1;else if(i=za(t),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(R(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(R(317));i[an]=t}else Xr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Je(t),i=!1}else qt!==null&&(dc(qt),qt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||be.current&1?De===0&&(De=3):S1())),t.updateQueue!==null&&(t.flags|=4),Je(t),null);case 4:return ts(),nc(e,t),e===null&&Ks(t.stateNode.containerInfo),Je(t),null;case 10:return l1(t.type._context),Je(t),null;case 17:return gt(t.type)&&yi(),Je(t),null;case 19:if(me(be),i=t.memoizedState,i===null)return Je(t),null;if(s=(t.flags&128)!==0,o=i.rendering,o===null)if(s)vs(i,!1);else{if(De!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ni(e),o!==null){for(t.flags|=128,vs(i,!1),s=o.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=n,n=t.child;n!==null;)i=n,e=s,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ue(be,be.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ie()>rs&&(t.flags|=128,s=!0,vs(i,!1),t.lanes=4194304)}else{if(!s)if(e=Ni(o),e!==null){if(t.flags|=128,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vs(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!xe)return Je(t),null}else 2*Ie()-i.renderingStartTime>rs&&n!==1073741824&&(t.flags|=128,s=!0,vs(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ie(),t.sibling=null,n=be.current,ue(be,s?n&1|2:n&1),t):(Je(t),null);case 22:case 23:return C1(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?wt&1073741824&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function Hm(e,t){switch(s1(t),t.tag){case 1:return gt(t.type)&&yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ts(),me(mt),me(et),h1(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return p1(t),null;case 13:if(me(be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));Xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(be),null;case 4:return ts(),null;case 10:return l1(t.type._context),null;case 22:case 23:return C1(),null;case 24:return null;default:return null}}var Ra=!1,Xe=!1,Um=typeof WeakSet=="function"?WeakSet:Set,M=null;function Hr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){Te(e,t,s)}else n.current=null}function rc(e,t,n){try{n()}catch(s){Te(e,t,s)}}var du=!1;function qm(e,t){if(Fl=mi,e=Y2(),n1(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var a=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,d=0,p=0,m=e,f=null;t:for(;;){for(var y;m!==n||a!==0&&m.nodeType!==3||(l=o+a),m!==i||s!==0&&m.nodeType!==3||(c=o+s),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)f=m,m=y;for(;;){if(m===e)break t;if(f===n&&++d===a&&(l=o),f===i&&++p===s&&(c=o),(y=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=y}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bl={focusedElem:e,selectionRange:n},mi=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var x=h.memoizedProps,k=h.memoizedState,w=t.stateNode,g=w.getSnapshotBeforeUpdate(t.elementType===t.type?x:Ht(t.type,x),k);w.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(j){Te(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return h=du,du=!1,h}function $s(e,t,n){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&rc(t,n,i)}a=a.next}while(a!==s)}}function to(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==t)}}function sc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qp(e){var t=e.alternate;t!==null&&(e.alternate=null,qp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[an],delete t[Xs],delete t[Ul],delete t[_m],delete t[Em])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wp(e){return e.tag===5||e.tag===3||e.tag===4}function uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ac(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vi));else if(s!==4&&(e=e.child,e!==null))for(ac(e,t,n),e=e.sibling;e!==null;)ac(e,t,n),e=e.sibling}function ic(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(ic(e,t,n),e=e.sibling;e!==null;)ic(e,t,n),e=e.sibling}var Ue=null,Ut=!1;function Pn(e,t,n){for(n=n.child;n!==null;)Gp(e,t,n),n=n.sibling}function Gp(e,t,n){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(Gi,n)}catch{}switch(n.tag){case 5:Xe||Hr(n,t);case 6:var s=Ue,a=Ut;Ue=null,Pn(e,t,n),Ue=s,Ut=a,Ue!==null&&(Ut?(e=Ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Ut?(e=Ue,n=n.stateNode,e.nodeType===8?Fo(e.parentNode,n):e.nodeType===1&&Fo(e,n),Ys(e)):Fo(Ue,n.stateNode));break;case 4:s=Ue,a=Ut,Ue=n.stateNode.containerInfo,Ut=!0,Pn(e,t,n),Ue=s,Ut=a;break;case 0:case 11:case 14:case 15:if(!Xe&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&rc(n,t,o),a=a.next}while(a!==s)}Pn(e,t,n);break;case 1:if(!Xe&&(Hr(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(l){Te(n,t,l)}Pn(e,t,n);break;case 21:Pn(e,t,n);break;case 22:n.mode&1?(Xe=(s=Xe)||n.memoizedState!==null,Pn(e,t,n),Xe=s):Pn(e,t,n);break;default:Pn(e,t,n)}}function pu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Um),t.forEach(function(s){var a=e6.bind(null,e,s);n.has(s)||(n.add(s),s.then(a,a))})}}function Bt(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var a=n[s];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ue=l.stateNode,Ut=!1;break e;case 3:Ue=l.stateNode.containerInfo,Ut=!0;break e;case 4:Ue=l.stateNode.containerInfo,Ut=!0;break e}l=l.return}if(Ue===null)throw Error(R(160));Gp(i,o,a),Ue=null,Ut=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(d){Te(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yp(t,e),t=t.sibling}function Yp(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Bt(t,e),tn(e),s&4){try{$s(3,e,e.return),to(3,e)}catch(x){Te(e,e.return,x)}try{$s(5,e,e.return)}catch(x){Te(e,e.return,x)}}break;case 1:Bt(t,e),tn(e),s&512&&n!==null&&Hr(n,n.return);break;case 5:if(Bt(t,e),tn(e),s&512&&n!==null&&Hr(n,n.return),e.flags&32){var a=e.stateNode;try{Us(a,"")}catch(x){Te(e,e.return,x)}}if(s&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&m2(a,i),zl(l,o);var d=zl(l,i);for(o=0;o<c.length;o+=2){var p=c[o],m=c[o+1];p==="style"?b2(a,m):p==="dangerouslySetInnerHTML"?v2(a,m):p==="children"?Us(a,m):Hc(a,p,m,d)}switch(l){case"input":Sl(a,i);break;case"textarea":g2(a,i);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?qr(a,!!i.multiple,y,!1):f!==!!i.multiple&&(i.defaultValue!=null?qr(a,!!i.multiple,i.defaultValue,!0):qr(a,!!i.multiple,i.multiple?[]:"",!1))}a[Xs]=i}catch(x){Te(e,e.return,x)}}break;case 6:if(Bt(t,e),tn(e),s&4){if(e.stateNode===null)throw Error(R(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(x){Te(e,e.return,x)}}break;case 3:if(Bt(t,e),tn(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{Ys(t.containerInfo)}catch(x){Te(e,e.return,x)}break;case 4:Bt(t,e),tn(e);break;case 13:Bt(t,e),tn(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(k1=Ie())),s&4&&pu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(d=Xe)||p,Bt(t,e),Xe=d):Bt(t,e),tn(e),s&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(M=e,p=e.child;p!==null;){for(m=M=p;M!==null;){switch(f=M,y=f.child,f.tag){case 0:case 11:case 14:case 15:$s(4,f,f.return);break;case 1:Hr(f,f.return);var h=f.stateNode;if(typeof h.componentWillUnmount=="function"){s=f,n=f.return;try{t=s,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(x){Te(s,n,x)}}break;case 5:Hr(f,f.return);break;case 22:if(f.memoizedState!==null){fu(m);continue}}y!==null?(y.return=f,M=y):fu(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{a=m.stateNode,d?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=y2("display",o))}catch(x){Te(e,e.return,x)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(x){Te(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Bt(t,e),tn(e),s&4&&pu(e);break;case 21:break;default:Bt(t,e),tn(e)}}function tn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wp(n)){var s=n;break e}n=n.return}throw Error(R(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(Us(a,""),s.flags&=-33);var i=uu(e);ic(e,i,a);break;case 3:case 4:var o=s.stateNode.containerInfo,l=uu(e);ac(e,l,o);break;default:throw Error(R(161))}}catch(c){Te(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wm(e,t,n){M=e,Qp(e)}function Qp(e,t,n){for(var s=(e.mode&1)!==0;M!==null;){var a=M,i=a.child;if(a.tag===22&&s){var o=a.memoizedState!==null||Ra;if(!o){var l=a.alternate,c=l!==null&&l.memoizedState!==null||Xe;l=Ra;var d=Xe;if(Ra=o,(Xe=c)&&!d)for(M=a;M!==null;)o=M,c=o.child,o.tag===22&&o.memoizedState!==null?mu(a):c!==null?(c.return=o,M=c):mu(a);for(;i!==null;)M=i,Qp(i),i=i.sibling;M=a,Ra=l,Xe=d}hu(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,M=i):hu(e)}}function hu(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Xe||to(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!Xe)if(n===null)s.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Ht(t.type,n.memoizedProps);s.componentDidUpdate(a,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Zd(t,i,s);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zd(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Ys(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Xe||t.flags&512&&sc(t)}catch(f){Te(t,t.return,f)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function fu(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function mu(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{to(4,t)}catch(c){Te(t,n,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(c){Te(t,a,c)}}var i=t.return;try{sc(t)}catch(c){Te(t,i,c)}break;case 5:var o=t.return;try{sc(t)}catch(c){Te(t,o,c)}}}catch(c){Te(t,t.return,c)}if(t===e){M=null;break}var l=t.sibling;if(l!==null){l.return=t.return,M=l;break}M=t.return}}var Gm=Math.ceil,Ti=_n.ReactCurrentDispatcher,b1=_n.ReactCurrentOwner,$t=_n.ReactCurrentBatchConfig,re=0,Be=null,$e=null,qe=0,wt=0,Ur=Xn(0),De=0,aa=null,yr=0,no=0,w1=0,Ls=null,ht=null,k1=0,rs=1/0,gn=null,zi=!1,oc=null,qn=null,Oa=!1,An=null,Pi=0,As=0,lc=null,ti=-1,ni=0;function it(){return re&6?Ie():ti!==-1?ti:ti=Ie()}function Wn(e){return e.mode&1?re&2&&qe!==0?qe&-qe:zm.transition!==null?(ni===0&&(ni=I2()),ni):(e=ie,e!==0||(e=window.event,e=e===void 0?16:D2(e.type)),e):1}function Gt(e,t,n,s){if(50<As)throw As=0,lc=null,Error(R(185));da(e,n,s),(!(re&2)||e!==Be)&&(e===Be&&(!(re&2)&&(no|=n),De===4&&$n(e,qe)),xt(e,s),n===1&&re===0&&!(t.mode&1)&&(rs=Ie()+500,Ji&&er()))}function xt(e,t){var n=e.callbackNode;z3(e,t);var s=fi(e,e===Be?qe:0);if(s===0)n!==null&&Cd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(n!=null&&Cd(n),t===1)e.tag===0?Tm(gu.bind(null,e)):sp(gu.bind(null,e)),Sm(function(){!(re&6)&&er()}),n=null;else{switch(R2(s)){case 1:n=Yc;break;case 4:n=z2;break;case 16:n=hi;break;case 536870912:n=P2;break;default:n=hi}n=rh(n,Zp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Zp(e,t){if(ti=-1,ni=0,re&6)throw Error(R(327));var n=e.callbackNode;if(Zr()&&e.callbackNode!==n)return null;var s=fi(e,e===Be?qe:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=Ii(e,s);else{t=s;var a=re;re|=2;var i=Jp();(Be!==e||qe!==t)&&(gn=null,rs=Ie()+500,pr(e,t));do try{Zm();break}catch(l){Kp(e,l)}while(1);o1(),Ti.current=i,re=a,$e!==null?t=0:(Be=null,qe=0,t=De)}if(t!==0){if(t===2&&(a=$l(e),a!==0&&(s=a,t=cc(e,a))),t===1)throw n=aa,pr(e,0),$n(e,s),xt(e,Ie()),n;if(t===6)$n(e,s);else{if(a=e.current.alternate,!(s&30)&&!Ym(a)&&(t=Ii(e,s),t===2&&(i=$l(e),i!==0&&(s=i,t=cc(e,i))),t===1))throw n=aa,pr(e,0),$n(e,s),xt(e,Ie()),n;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(R(345));case 2:or(e,ht,gn);break;case 3:if($n(e,s),(s&130023424)===s&&(t=k1+500-Ie(),10<t)){if(fi(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){it(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Hl(or.bind(null,e,ht,gn),t);break}or(e,ht,gn);break;case 4:if($n(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var o=31-Wt(s);i=1<<o,o=t[o],o>a&&(a=o),s&=~i}if(s=a,s=Ie()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Gm(s/1960))-s,10<s){e.timeoutHandle=Hl(or.bind(null,e,ht,gn),s);break}or(e,ht,gn);break;case 5:or(e,ht,gn);break;default:throw Error(R(329))}}}return xt(e,Ie()),e.callbackNode===n?Zp.bind(null,e):null}function cc(e,t){var n=Ls;return e.current.memoizedState.isDehydrated&&(pr(e,t).flags|=256),e=Ii(e,t),e!==2&&(t=ht,ht=n,t!==null&&dc(t)),e}function dc(e){ht===null?ht=e:ht.push.apply(ht,e)}function Ym(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var a=n[s],i=a.getSnapshot;a=a.value;try{if(!Qt(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $n(e,t){for(t&=~w1,t&=~no,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Wt(t),s=1<<n;e[n]=-1,t&=~s}}function gu(e){if(re&6)throw Error(R(327));Zr();var t=fi(e,0);if(!(t&1))return xt(e,Ie()),null;var n=Ii(e,t);if(e.tag!==0&&n===2){var s=$l(e);s!==0&&(t=s,n=cc(e,s))}if(n===1)throw n=aa,pr(e,0),$n(e,t),xt(e,Ie()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,or(e,ht,gn),xt(e,Ie()),null}function j1(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(rs=Ie()+500,Ji&&er())}}function br(e){An!==null&&An.tag===0&&!(re&6)&&Zr();var t=re;re|=1;var n=$t.transition,s=ie;try{if($t.transition=null,ie=1,e)return e()}finally{ie=s,$t.transition=n,re=t,!(re&6)&&er()}}function C1(){wt=Ur.current,me(Ur)}function pr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Cm(n)),$e!==null)for(n=$e.return;n!==null;){var s=n;switch(s1(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&yi();break;case 3:ts(),me(mt),me(et),h1();break;case 5:p1(s);break;case 4:ts();break;case 13:me(be);break;case 19:me(be);break;case 10:l1(s.type._context);break;case 22:case 23:C1()}n=n.return}if(Be=e,$e=e=Gn(e.current,null),qe=wt=t,De=0,aa=null,w1=no=yr=0,ht=Ls=null,cr!==null){for(t=0;t<cr.length;t++)if(n=cr[t],s=n.interleaved,s!==null){n.interleaved=null;var a=s.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,s.next=o}n.pending=s}cr=null}return e}function Kp(e,t){do{var n=$e;try{if(o1(),Ja.current=Ei,_i){for(var s=we.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}_i=!1}if(vr=0,Fe=Me=we=null,Os=!1,na=0,b1.current=null,n===null||n.return===null){De=1,aa=t,$e=null;break}e:{var i=e,o=n.return,l=n,c=t;if(t=qe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=ru(o);if(y!==null){y.flags&=-257,su(y,o,l,i,t),y.mode&1&&nu(i,d,t),t=y,c=d;var h=t.updateQueue;if(h===null){var x=new Set;x.add(c),t.updateQueue=x}else h.add(c);break e}else{if(!(t&1)){nu(i,d,t),S1();break e}c=Error(R(426))}}else if(xe&&l.mode&1){var k=ru(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),su(k,o,l,i,t),a1(ns(c,l));break e}}i=c=ns(c,l),De!==4&&(De=2),Ls===null?Ls=[i]:Ls.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var w=Op(i,c,t);Qd(i,w);break e;case 1:l=c;var g=i.type,b=i.stateNode;if(!(i.flags&128)&&(typeof g.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(qn===null||!qn.has(b)))){i.flags|=65536,t&=-t,i.lanes|=t;var j=$p(i,l,t);Qd(i,j);break e}}i=i.return}while(i!==null)}eh(n)}catch(C){t=C,$e===n&&n!==null&&($e=n=n.return);continue}break}while(1)}function Jp(){var e=Ti.current;return Ti.current=Ei,e===null?Ei:e}function S1(){(De===0||De===3||De===2)&&(De=4),Be===null||!(yr&268435455)&&!(no&268435455)||$n(Be,qe)}function Ii(e,t){var n=re;re|=2;var s=Jp();(Be!==e||qe!==t)&&(gn=null,pr(e,t));do try{Qm();break}catch(a){Kp(e,a)}while(1);if(o1(),re=n,Ti.current=s,$e!==null)throw Error(R(261));return Be=null,qe=0,De}function Qm(){for(;$e!==null;)Xp($e)}function Zm(){for(;$e!==null&&!w3();)Xp($e)}function Xp(e){var t=nh(e.alternate,e,wt);e.memoizedProps=e.pendingProps,t===null?eh(e):$e=t,b1.current=null}function eh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hm(n,t),n!==null){n.flags&=32767,$e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,$e=null;return}}else if(n=Vm(n,t,wt),n!==null){$e=n;return}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);De===0&&(De=5)}function or(e,t,n){var s=ie,a=$t.transition;try{$t.transition=null,ie=1,Km(e,t,n,s)}finally{$t.transition=a,ie=s}return null}function Km(e,t,n,s){do Zr();while(An!==null);if(re&6)throw Error(R(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(P3(e,i),e===Be&&($e=Be=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oa||(Oa=!0,rh(hi,function(){return Zr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=$t.transition,$t.transition=null;var o=ie;ie=1;var l=re;re|=4,b1.current=null,qm(e,n),Yp(n,e),xm(Bl),mi=!!Fl,Bl=Fl=null,e.current=n,Wm(n),k3(),re=l,ie=o,$t.transition=i}else e.current=n;if(Oa&&(Oa=!1,An=e,Pi=a),i=e.pendingLanes,i===0&&(qn=null),S3(n.stateNode),xt(e,Ie()),t!==null)for(s=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],s(a.value,{componentStack:a.stack,digest:a.digest});if(zi)throw zi=!1,e=oc,oc=null,e;return Pi&1&&e.tag!==0&&Zr(),i=e.pendingLanes,i&1?e===lc?As++:(As=0,lc=e):As=0,er(),null}function Zr(){if(An!==null){var e=R2(Pi),t=$t.transition,n=ie;try{if($t.transition=null,ie=16>e?16:e,An===null)var s=!1;else{if(e=An,An=null,Pi=0,re&6)throw Error(R(331));var a=re;for(re|=4,M=e.current;M!==null;){var i=M,o=i.child;if(M.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(M=d;M!==null;){var p=M;switch(p.tag){case 0:case 11:case 15:$s(8,p,i)}var m=p.child;if(m!==null)m.return=p,M=m;else for(;M!==null;){p=M;var f=p.sibling,y=p.return;if(qp(p),p===d){M=null;break}if(f!==null){f.return=y,M=f;break}M=y}}}var h=i.alternate;if(h!==null){var x=h.child;if(x!==null){h.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}M=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,M=o;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:$s(9,i,i.return)}var w=i.sibling;if(w!==null){w.return=i.return,M=w;break e}M=i.return}}var g=e.current;for(M=g;M!==null;){o=M;var b=o.child;if(o.subtreeFlags&2064&&b!==null)b.return=o,M=b;else e:for(o=g;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:to(9,l)}}catch(C){Te(l,l.return,C)}if(l===o){M=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,M=j;break e}M=l.return}}if(re=a,er(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(Gi,e)}catch{}s=!0}return s}finally{ie=n,$t.transition=t}}return!1}function xu(e,t,n){t=ns(n,t),t=Op(e,t,1),e=Un(e,t,1),t=it(),e!==null&&(da(e,1,t),xt(e,t))}function Te(e,t,n){if(e.tag===3)xu(e,e,n);else for(;t!==null;){if(t.tag===3){xu(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(qn===null||!qn.has(s))){e=ns(n,e),e=$p(t,e,1),t=Un(t,e,1),e=it(),t!==null&&(da(t,1,e),xt(t,e));break}}t=t.return}}function Jm(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(qe&n)===n&&(De===4||De===3&&(qe&130023424)===qe&&500>Ie()-k1?pr(e,0):w1|=n),xt(e,t)}function th(e,t){t===0&&(e.mode&1?(t=Ca,Ca<<=1,!(Ca&130023424)&&(Ca=4194304)):t=1);var n=it();e=Sn(e,t),e!==null&&(da(e,t,n),xt(e,n))}function Xm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),th(e,n)}function e6(e,t){var n=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(R(314))}s!==null&&s.delete(t),th(e,n)}var nh;nh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||mt.current)ft=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ft=!1,Bm(e,t,n);ft=!!(e.flags&131072)}else ft=!1,xe&&t.flags&1048576&&ap(t,ki,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;ei(e,t),e=t.pendingProps;var a=Jr(t,et.current);Qr(t,n),a=m1(null,t,s,e,a,n);var i=g1();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,gt(s)?(i=!0,bi(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,d1(t),a.updater=Xi,t.stateNode=a,a._reactInternals=t,Zl(t,s,e,n),t=Xl(null,t,s,!0,i,n)):(t.tag=0,xe&&i&&r1(t),rt(null,t,a,n),t=t.child),t;case 16:s=t.elementType;e:{switch(ei(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=n6(s),e=Ht(s,e),a){case 0:t=Jl(null,t,s,e,n);break e;case 1:t=ou(null,t,s,e,n);break e;case 11:t=au(null,t,s,e,n);break e;case 14:t=iu(null,t,s,Ht(s.type,e),n);break e}throw Error(R(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ht(s,a),Jl(e,t,s,a,n);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ht(s,a),ou(e,t,s,a,n);case 3:e:{if(Dp(t),e===null)throw Error(R(387));s=t.pendingProps,i=t.memoizedState,a=i.element,cp(e,t),Si(t,s,null,n);var o=t.memoizedState;if(s=o.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=ns(Error(R(423)),t),t=lu(e,t,s,n,a);break e}else if(s!==a){a=ns(Error(R(424)),t),t=lu(e,t,s,n,a);break e}else for(kt=Hn(t.stateNode.containerInfo.firstChild),jt=t,xe=!0,qt=null,n=hp(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xr(),s===a){t=Nn(e,t,n);break e}rt(e,t,s,n)}t=t.child}return t;case 5:return fp(t),e===null&&Gl(t),s=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,Vl(s,a)?o=null:i!==null&&Vl(s,i)&&(t.flags|=32),Mp(e,t),rt(e,t,o,n),t.child;case 6:return e===null&&Gl(t),null;case 13:return Fp(e,t,n);case 4:return u1(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=es(t,null,s,n):rt(e,t,s,n),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ht(s,a),au(e,t,s,a,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,ue(ji,s._currentValue),s._currentValue=o,i!==null)if(Qt(i.value,o)){if(i.children===a.children&&!mt.current){t=Nn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===s){if(i.tag===1){c=kn(-1,n&-n),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Yl(i.return,n,t),l.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(R(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Yl(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}rt(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,Qr(t,n),a=At(a),s=s(a),t.flags|=1,rt(e,t,s,n),t.child;case 14:return s=t.type,a=Ht(s,t.pendingProps),a=Ht(s.type,a),iu(e,t,s,a,n);case 15:return Lp(e,t,t.type,t.pendingProps,n);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ht(s,a),ei(e,t),t.tag=1,gt(s)?(e=!0,bi(t)):e=!1,Qr(t,n),up(t,s,a),Zl(t,s,a,n),Xl(null,t,s,!0,e,n);case 19:return Bp(e,t,n);case 22:return Ap(e,t,n)}throw Error(R(156,t.tag))};function rh(e,t){return T2(e,t)}function t6(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,s){return new t6(e,t,n,s)}function N1(e){return e=e.prototype,!(!e||!e.isReactComponent)}function n6(e){if(typeof e=="function")return N1(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qc)return 11;if(e===Wc)return 14}return 2}function Gn(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ri(e,t,n,s,a,i){var o=2;if(s=e,typeof e=="function")N1(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Or:return hr(n.children,a,i,t);case Uc:o=8,a|=8;break;case bl:return e=Ot(12,n,t,a|2),e.elementType=bl,e.lanes=i,e;case wl:return e=Ot(13,n,t,a),e.elementType=wl,e.lanes=i,e;case kl:return e=Ot(19,n,t,a),e.elementType=kl,e.lanes=i,e;case p2:return ro(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case d2:o=10;break e;case u2:o=9;break e;case qc:o=11;break e;case Wc:o=14;break e;case In:o=16,s=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=Ot(o,n,t,a),t.elementType=e,t.type=s,t.lanes=i,t}function hr(e,t,n,s){return e=Ot(7,e,s,t),e.lanes=n,e}function ro(e,t,n,s){return e=Ot(22,e,s,t),e.elementType=p2,e.lanes=n,e.stateNode={isHidden:!1},e}function Yo(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function Qo(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function r6(e,t,n,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=To(0),this.expirationTimes=To(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=To(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function _1(e,t,n,s,a,i,o,l,c){return e=new r6(e,t,n,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ot(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},d1(i),e}function s6(e,t,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rr,key:s==null?null:""+s,children:e,containerInfo:t,implementation:n}}function sh(e){if(!e)return Zn;e=e._reactInternals;e:{if(Nr(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(gt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(gt(n))return rp(e,n,t)}return t}function ah(e,t,n,s,a,i,o,l,c){return e=_1(n,s,!0,e,a,i,o,l,c),e.context=sh(null),n=e.current,s=it(),a=Wn(n),i=kn(s,a),i.callback=t??null,Un(n,i,a),e.current.lanes=a,da(e,a,s),xt(e,s),e}function so(e,t,n,s){var a=t.current,i=it(),o=Wn(a);return n=sh(n),t.context===null?t.context=n:t.pendingContext=n,t=kn(i,o),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Un(a,t,o),e!==null&&(Gt(e,a,o,i),Ka(e,a,o)),o}function Ri(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function E1(e,t){vu(e,t),(e=e.alternate)&&vu(e,t)}function a6(){return null}var ih=typeof reportError=="function"?reportError:function(e){console.error(e)};function T1(e){this._internalRoot=e}ao.prototype.render=T1.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));so(e,t,null,null)};ao.prototype.unmount=T1.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;br(function(){so(null,e,null,null)}),t[Cn]=null}};function ao(e){this._internalRoot=e}ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=L2();e={blockedOn:null,target:e,priority:t};for(var n=0;n<On.length&&t!==0&&t<On[n].priority;n++);On.splice(n,0,e),n===0&&M2(e)}};function z1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yu(){}function i6(e,t,n,s,a){if(a){if(typeof s=="function"){var i=s;s=function(){var d=Ri(o);i.call(d)}}var o=ah(t,s,e,0,null,!1,!1,"",yu);return e._reactRootContainer=o,e[Cn]=o.current,Ks(e.nodeType===8?e.parentNode:e),br(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var l=s;s=function(){var d=Ri(c);l.call(d)}}var c=_1(e,0,!1,null,null,!1,!1,"",yu);return e._reactRootContainer=c,e[Cn]=c.current,Ks(e.nodeType===8?e.parentNode:e),br(function(){so(t,c,n,s)}),c}function oo(e,t,n,s,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var c=Ri(o);l.call(c)}}so(t,o,e,a)}else o=i6(n,t,e,a,s);return Ri(o)}O2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ns(t.pendingLanes);n!==0&&(Qc(t,n|1),xt(t,Ie()),!(re&6)&&(rs=Ie()+500,er()))}break;case 13:br(function(){var s=Sn(e,1);if(s!==null){var a=it();Gt(s,e,1,a)}}),E1(e,1)}};Zc=function(e){if(e.tag===13){var t=Sn(e,134217728);if(t!==null){var n=it();Gt(t,e,134217728,n)}E1(e,134217728)}};$2=function(e){if(e.tag===13){var t=Wn(e),n=Sn(e,t);if(n!==null){var s=it();Gt(n,e,t,s)}E1(e,t)}};L2=function(){return ie};A2=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};Il=function(e,t,n){switch(t){case"input":if(Sl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var a=Ki(s);if(!a)throw Error(R(90));f2(s),Sl(s,a)}}}break;case"textarea":g2(e,n);break;case"select":t=n.value,t!=null&&qr(e,!!n.multiple,t,!1)}};j2=j1;C2=br;var o6={usingClientEntryPoint:!1,Events:[pa,Mr,Ki,w2,k2,j1]},ys={findFiberByHostInstance:lr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},l6={bundleType:ys.bundleType,version:ys.version,rendererPackageName:ys.rendererPackageName,rendererConfig:ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_n.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_2(e),e===null?null:e.stateNode},findFiberByHostInstance:ys.findFiberByHostInstance||a6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{Gi=$a.inject(l6),cn=$a}catch{}}_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o6;_t.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!z1(t))throw Error(R(200));return s6(e,t,null,n)};_t.createRoot=function(e,t){if(!z1(e))throw Error(R(299));var n=!1,s="",a=ih;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=_1(e,1,!1,null,null,n,!1,s,a),e[Cn]=t.current,Ks(e.nodeType===8?e.parentNode:e),new T1(t)};_t.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=_2(t),e=e===null?null:e.stateNode,e};_t.flushSync=function(e){return br(e)};_t.hydrate=function(e,t,n){if(!io(t))throw Error(R(200));return oo(null,e,t,!0,n)};_t.hydrateRoot=function(e,t,n){if(!z1(e))throw Error(R(405));var s=n!=null&&n.hydratedSources||null,a=!1,i="",o=ih;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=ah(t,null,e,1,n??null,a,!1,i,o),e[Cn]=t.current,Ks(e),s)for(e=0;e<s.length;e++)n=s[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new ao(t)};_t.render=function(e,t,n){if(!io(t))throw Error(R(200));return oo(null,e,t,!1,n)};_t.unmountComponentAtNode=function(e){if(!io(e))throw Error(R(40));return e._reactRootContainer?(br(function(){oo(null,null,e,!1,function(){e._reactRootContainer=null,e[Cn]=null})}),!0):!1};_t.unstable_batchedUpdates=j1;_t.unstable_renderSubtreeIntoContainer=function(e,t,n,s){if(!io(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return oo(e,t,n,!1,s)};_t.version="18.2.0-next-9e3b772b8-20220608";function oh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oh)}catch(e){console.error(e)}}oh(),a2.exports=_t;var c6=a2.exports,bu=c6;vl.createRoot=bu.createRoot,vl.hydrateRoot=bu.hydrateRoot;/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ia(){return ia=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ia.apply(this,arguments)}var Mn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Mn||(Mn={}));const wu="popstate";function d6(e){e===void 0&&(e={});function t(s,a){let{pathname:i,search:o,hash:l}=s.location;return uc("",{pathname:i,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(s,a){return typeof a=="string"?a:Oi(a)}return p6(t,n,null,e)}function Le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function P1(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function u6(){return Math.random().toString(36).substr(2,8)}function ku(e,t){return{usr:e.state,key:e.key,idx:t}}function uc(e,t,n,s){return n===void 0&&(n=null),ia({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ls(t):t,{state:n,key:t&&t.key||s||u6()})}function Oi(e){let{pathname:t="/",search:n="",hash:s=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function ls(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let s=e.indexOf("?");s>=0&&(t.search=e.substr(s),e=e.substr(0,s)),e&&(t.pathname=e)}return t}function p6(e,t,n,s){s===void 0&&(s={});let{window:a=document.defaultView,v5Compat:i=!1}=s,o=a.history,l=Mn.Pop,c=null,d=p();d==null&&(d=0,o.replaceState(ia({},o.state,{idx:d}),""));function p(){return(o.state||{idx:null}).idx}function m(){l=Mn.Pop;let k=p(),w=k==null?null:k-d;d=k,c&&c({action:l,location:x.location,delta:w})}function f(k,w){l=Mn.Push;let g=uc(x.location,k,w);n&&n(g,k),d=p()+1;let b=ku(g,d),j=x.createHref(g);try{o.pushState(b,"",j)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;a.location.assign(j)}i&&c&&c({action:l,location:x.location,delta:1})}function y(k,w){l=Mn.Replace;let g=uc(x.location,k,w);n&&n(g,k),d=p();let b=ku(g,d),j=x.createHref(g);o.replaceState(b,"",j),i&&c&&c({action:l,location:x.location,delta:0})}function h(k){let w=a.location.origin!=="null"?a.location.origin:a.location.href,g=typeof k=="string"?k:Oi(k);return Le(w,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,w)}let x={get action(){return l},get location(){return e(a,o)},listen(k){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(wu,m),c=k,()=>{a.removeEventListener(wu,m),c=null}},createHref(k){return t(a,k)},createURL:h,encodeLocation(k){let w=h(k);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:f,replace:y,go(k){return o.go(k)}};return x}var ju;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ju||(ju={}));function h6(e,t,n){n===void 0&&(n="/");let s=typeof t=="string"?ls(t):t,a=I1(s.pathname||"/",n);if(a==null)return null;let i=lh(e);f6(i);let o=null;for(let l=0;o==null&&l<i.length;++l)o=j6(i[l],N6(a));return o}function lh(e,t,n,s){t===void 0&&(t=[]),n===void 0&&(n=[]),s===void 0&&(s="");let a=(i,o,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(Le(c.relativePath.startsWith(s),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(s.length));let d=Yn([s,c.relativePath]),p=n.concat(c);i.children&&i.children.length>0&&(Le(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),lh(i.children,t,p,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:w6(d,i.index),routesMeta:p})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let c of ch(i.path))a(i,o,c)}),t}function ch(e){let t=e.split("/");if(t.length===0)return[];let[n,...s]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(s.length===0)return a?[i,""]:[i];let o=ch(s.join("/")),l=[];return l.push(...o.map(c=>c===""?i:[i,c].join("/"))),a&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function f6(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:k6(t.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const m6=/^:\w+$/,g6=3,x6=2,v6=1,y6=10,b6=-2,Cu=e=>e==="*";function w6(e,t){let n=e.split("/"),s=n.length;return n.some(Cu)&&(s+=b6),t&&(s+=x6),n.filter(a=>!Cu(a)).reduce((a,i)=>a+(m6.test(i)?g6:i===""?v6:y6),s)}function k6(e,t){return e.length===t.length&&e.slice(0,-1).every((s,a)=>s===t[a])?e[e.length-1]-t[t.length-1]:0}function j6(e,t){let{routesMeta:n}=e,s={},a="/",i=[];for(let o=0;o<n.length;++o){let l=n[o],c=o===n.length-1,d=a==="/"?t:t.slice(a.length)||"/",p=C6({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d);if(!p)return null;Object.assign(s,p.params);let m=l.route;i.push({params:s,pathname:Yn([a,p.pathname]),pathnameBase:z6(Yn([a,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(a=Yn([a,p.pathnameBase]))}return i}function C6(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,s]=S6(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:s.reduce((d,p,m)=>{if(p==="*"){let f=l[m]||"";o=i.slice(0,i.length-f.length).replace(/(.)\/+$/,"$1")}return d[p]=_6(l[m]||"",p),d},{}),pathname:i,pathnameBase:o,pattern:e}}function S6(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),P1(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(s.push(l),"/([^\\/]+)"));return e.endsWith("*")?(s.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),s]}function N6(e){try{return decodeURI(e)}catch(t){return P1(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function _6(e,t){try{return decodeURIComponent(e)}catch(n){return P1(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function I1(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,s=e.charAt(n);return s&&s!=="/"?null:e.slice(n)||"/"}function E6(e,t){t===void 0&&(t="/");let{pathname:n,search:s="",hash:a=""}=typeof e=="string"?ls(e):e;return{pathname:n?n.startsWith("/")?n:T6(n,t):t,search:P6(s),hash:I6(a)}}function T6(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Zo(e,t,n,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function uh(e,t,n,s){s===void 0&&(s=!1);let a;typeof e=="string"?a=ls(e):(a=ia({},e),Le(!a.pathname||!a.pathname.includes("?"),Zo("?","pathname","search",a)),Le(!a.pathname||!a.pathname.includes("#"),Zo("#","pathname","hash",a)),Le(!a.search||!a.search.includes("#"),Zo("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(s||o==null)l=n;else{let m=t.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),m-=1;a.pathname=f.join("/")}l=m>=0?t[m]:"/"}let c=E6(a,l),d=o&&o!=="/"&&o.endsWith("/"),p=(i||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||p)&&(c.pathname+="/"),c}const Yn=e=>e.join("/").replace(/\/\/+/g,"/"),z6=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),P6=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,I6=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function R6(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ph=["post","put","patch","delete"];new Set(ph);const O6=["get",...ph];new Set(O6);/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $i(){return $i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},$i.apply(this,arguments)}const R1=u.createContext(null),$6=u.createContext(null),cs=u.createContext(null),lo=u.createContext(null),tr=u.createContext({outlet:null,matches:[],isDataRoute:!1}),hh=u.createContext(null);function L6(e,t){let{relative:n}=t===void 0?{}:t;fa()||Le(!1);let{basename:s,navigator:a}=u.useContext(cs),{hash:i,pathname:o,search:l}=mh(e,{relative:n}),c=o;return s!=="/"&&(c=o==="/"?s:Yn([s,o])),a.createHref({pathname:c,search:l,hash:i})}function fa(){return u.useContext(lo)!=null}function ds(){return fa()||Le(!1),u.useContext(lo).location}function fh(e){u.useContext(cs).static||u.useLayoutEffect(e)}function ma(){let{isDataRoute:e}=u.useContext(tr);return e?Z6():A6()}function A6(){fa()||Le(!1);let e=u.useContext(R1),{basename:t,navigator:n}=u.useContext(cs),{matches:s}=u.useContext(tr),{pathname:a}=ds(),i=JSON.stringify(dh(s).map(c=>c.pathnameBase)),o=u.useRef(!1);return fh(()=>{o.current=!0}),u.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){n.go(c);return}let p=uh(c,JSON.parse(i),a,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Yn([t,p.pathname])),(d.replace?n.replace:n.push)(p,d.state,d)},[t,n,i,a,e])}function M6(){let{matches:e}=u.useContext(tr),t=e[e.length-1];return t?t.params:{}}function mh(e,t){let{relative:n}=t===void 0?{}:t,{matches:s}=u.useContext(tr),{pathname:a}=ds(),i=JSON.stringify(dh(s).map(o=>o.pathnameBase));return u.useMemo(()=>uh(e,JSON.parse(i),a,n==="path"),[e,i,a,n])}function D6(e,t){return F6(e,t)}function F6(e,t,n){fa()||Le(!1);let{navigator:s}=u.useContext(cs),{matches:a}=u.useContext(tr),i=a[a.length-1],o=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let c=ds(),d;if(t){var p;let x=typeof t=="string"?ls(t):t;l==="/"||(p=x.pathname)!=null&&p.startsWith(l)||Le(!1),d=x}else d=c;let m=d.pathname||"/",f=l==="/"?m:m.slice(l.length)||"/",y=h6(e,{pathname:f}),h=q6(y&&y.map(x=>Object.assign({},x,{params:Object.assign({},o,x.params),pathname:Yn([l,s.encodeLocation?s.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Yn([l,s.encodeLocation?s.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),a,n);return t&&h?u.createElement(lo.Provider,{value:{location:$i({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Mn.Pop}},h):h}function B6(){let e=Q6(),t=R6(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),n?u.createElement("pre",{style:a},n):null,i)}const V6=u.createElement(B6,null);class H6 extends u.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?u.createElement(tr.Provider,{value:this.props.routeContext},u.createElement(hh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function U6(e){let{routeContext:t,match:n,children:s}=e,a=u.useContext(R1);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),u.createElement(tr.Provider,{value:t},s)}function q6(e,t,n){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let i=e,o=(s=n)==null?void 0:s.errors;if(o!=null){let l=i.findIndex(c=>c.route.id&&(o==null?void 0:o[c.route.id]));l>=0||Le(!1),i=i.slice(0,Math.min(i.length,l+1))}return i.reduceRight((l,c,d)=>{let p=c.route.id?o==null?void 0:o[c.route.id]:null,m=null;n&&(m=c.route.errorElement||V6);let f=t.concat(i.slice(0,d+1)),y=()=>{let h;return p?h=m:c.route.Component?h=u.createElement(c.route.Component,null):c.route.element?h=c.route.element:h=l,u.createElement(U6,{match:c,routeContext:{outlet:l,matches:f,isDataRoute:n!=null},children:h})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?u.createElement(H6,{location:n.location,revalidation:n.revalidation,component:m,error:p,children:y(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):y()},null)}var gh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(gh||{}),Li=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Li||{});function W6(e){let t=u.useContext(R1);return t||Le(!1),t}function G6(e){let t=u.useContext($6);return t||Le(!1),t}function Y6(e){let t=u.useContext(tr);return t||Le(!1),t}function xh(e){let t=Y6(),n=t.matches[t.matches.length-1];return n.route.id||Le(!1),n.route.id}function Q6(){var e;let t=u.useContext(hh),n=G6(Li.UseRouteError),s=xh(Li.UseRouteError);return t||((e=n.errors)==null?void 0:e[s])}function Z6(){let{router:e}=W6(gh.UseNavigateStable),t=xh(Li.UseNavigateStable),n=u.useRef(!1);return fh(()=>{n.current=!0}),u.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,$i({fromRouteId:t},i)))},[e,t])}function zt(e){Le(!1)}function K6(e){let{basename:t="/",children:n=null,location:s,navigationType:a=Mn.Pop,navigator:i,static:o=!1}=e;fa()&&Le(!1);let l=t.replace(/^\/*/,"/"),c=u.useMemo(()=>({basename:l,navigator:i,static:o}),[l,i,o]);typeof s=="string"&&(s=ls(s));let{pathname:d="/",search:p="",hash:m="",state:f=null,key:y="default"}=s,h=u.useMemo(()=>{let x=I1(d,l);return x==null?null:{location:{pathname:x,search:p,hash:m,state:f,key:y},navigationType:a}},[l,d,p,m,f,y,a]);return h==null?null:u.createElement(cs.Provider,{value:c},u.createElement(lo.Provider,{children:n,value:h}))}function J6(e){let{children:t,location:n}=e;return D6(pc(t),n)}new Promise(()=>{});function pc(e,t){t===void 0&&(t=[]);let n=[];return u.Children.forEach(e,(s,a)=>{if(!u.isValidElement(s))return;let i=[...t,a];if(s.type===u.Fragment){n.push.apply(n,pc(s.props.children,i));return}s.type!==zt&&Le(!1),!s.props.index||!s.props.children||Le(!1);let o={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(o.children=pc(s.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hc(){return hc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},hc.apply(this,arguments)}function X6(e,t){if(e==null)return{};var n={},s=Object.keys(e),a,i;for(i=0;i<s.length;i++)a=s[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function e5(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function t5(e,t){return e.button===0&&(!t||t==="_self")&&!e5(e)}const n5=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],r5="startTransition",Su=X4[r5];function s5(e){let{basename:t,children:n,future:s,window:a}=e,i=u.useRef();i.current==null&&(i.current=d6({window:a,v5Compat:!0}));let o=i.current,[l,c]=u.useState({action:o.action,location:o.location}),{v7_startTransition:d}=s||{},p=u.useCallback(m=>{d&&Su?Su(()=>c(m)):c(m)},[c,d]);return u.useLayoutEffect(()=>o.listen(p),[o,p]),u.createElement(K6,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const a5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",i5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Re=u.forwardRef(function(t,n){let{onClick:s,relative:a,reloadDocument:i,replace:o,state:l,target:c,to:d,preventScrollReset:p,unstable_viewTransition:m}=t,f=X6(t,n5),{basename:y}=u.useContext(cs),h,x=!1;if(typeof d=="string"&&i5.test(d)&&(h=d,a5))try{let b=new URL(window.location.href),j=d.startsWith("//")?new URL(b.protocol+d):new URL(d),C=I1(j.pathname,y);j.origin===b.origin&&C!=null?d=C+j.search+j.hash:x=!0}catch{}let k=L6(d,{relative:a}),w=o5(d,{replace:o,state:l,target:c,preventScrollReset:p,relative:a,unstable_viewTransition:m});function g(b){s&&s(b),b.defaultPrevented||w(b)}return u.createElement("a",hc({},f,{href:h||k,onClick:x||i?s:g,ref:n,target:c}))});var Nu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Nu||(Nu={}));var _u;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_u||(_u={}));function o5(e,t){let{target:n,replace:s,state:a,preventScrollReset:i,relative:o,unstable_viewTransition:l}=t===void 0?{}:t,c=ma(),d=ds(),p=mh(e,{relative:o});return u.useCallback(m=>{if(t5(m,n)){m.preventDefault();let f=s!==void 0?s:Oi(d)===Oi(p);c(e,{replace:f,state:a,preventScrollReset:i,relative:o,unstable_viewTransition:l})}},[d,c,p,s,a,n,e,i,o,l])}const oa="https://vercel-b-seven.vercel.app",X="https://api.uelearn.unityelites.com";function la(){try{const e=localStorage.getItem("userInfo");return e?JSON.parse(e):null}catch{return null}}function l5(e){try{localStorage.setItem("userInfo",JSON.stringify(e))}catch{}}function O1(){return la()??{}}class Nt extends Error{constructor(t){super(t),this.name="AuthError"}}function Ai(e){return!!e&&typeof e=="object"&&typeof e.status=="boolean"&&"data"in e}async function un(e){try{return await e.json()}catch{return null}}function _r(e){var t;return((t=e==null?void 0:e.error)==null?void 0:t.code)??null}function $1(e){var n;const t=(n=e==null?void 0:e.error)==null?void 0:n.details;return _r(e)!=="VALIDATION_ERROR"||!t||typeof t!="object"?{}:Object.fromEntries(Object.entries(t).map(([s,a])=>[s,Array.isArray(a)?a[0]:String(a)]))}const c5="Something went wrong. Please try again.";function Ct(e,t=0,n=c5){var o,l;const s=_r(e),a=t>=500||s==="SERVER_ERROR",i=typeof(e==null?void 0:e.message)=="string"&&e.message.trim()||typeof((o=e==null?void 0:e.error)==null?void 0:o.message)=="string"&&e.error.message.trim()||"";if(a)return i||n;if(s==="VALIDATION_ERROR"){const c=Object.values($1(e))[0];return c?i?`${i}: ${c}`:c:i||n}return s==="ACCOUNT_SUSPENDED"&&typeof((l=e==null?void 0:e.error)==null?void 0:l.details)=="string"&&e.error.details?`${i||"Your account has been suspended"}: ${e.error.details}`:i||n}class fc extends Error{constructor(t,n,s){var a,i;super(t),this.name="ApiError",this.status=n,this.body=s,this.code=_r(s),this.meta=(s==null?void 0:s.meta)??null,this.suggestion=((a=s==null?void 0:s.error)==null?void 0:a.suggestion)??null,this.details=n>=500||(i=s==null?void 0:s.error)==null?void 0:i.details}get isValidation(){return this.code==="VALIDATION_ERROR"}get isTransient(){return this.status>=500||this.status===0}get fieldErrors(){return $1(this.body)}}function vh(e){return Ai(e)||e&&typeof e=="object"&&e.data!=null?e.data:e}const yh=new Set(["INVALID_TOKEN","UNAUTHORIZED",null]),d5=new Set(["INVALID_TOKEN","UNAUTHORIZED","INVALID_REFRESH_TOKEN",null]);async function bh(e){if(e.status!==401)return!1;const t=await un(e.clone());return yh.has(_r(t))}function u5(e){try{window.dispatchEvent(new CustomEvent("auth:account-suspended",{detail:{reason:e}}))}catch{}}function p5(e){try{window.dispatchEvent(new CustomEvent("auth:session-expired",{detail:{reason:e}}))}catch{}}function wh(){try{localStorage.removeItem("userInfo")}catch{}}function Mi(e){wh(),p5(e)}async function co(){const e=la();try{e!=null&&e.refreshToken&&await Pe(`${X}/api/v1/auth/logout`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:e.refreshToken})})}catch{}finally{wh()}}let La=null;async function kh(e){return La||(La=h5(e).finally(()=>{La=null})),La}async function h5(e=`${X}/api/v1/auth/refresh`){var o;const t=la();if(!(t!=null&&t.refreshToken))throw Mi("No refresh token — session ended."),new Nt("No refresh token — session ended.");const n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:t.refreshToken})});if(!n.ok){const l=await un(n);throw n.status===401&&_r(l)==="INVALID_REFRESH_TOKEN"?(Mi("Session expired. Please sign in again."),new Nt("Session expired. Please sign in again.")):new fc(Ct(l,n.status),n.status,l)}const s=await un(n),a=(o=s==null?void 0:s.data)==null?void 0:o.token;if(!a)throw new Error("Refresh response did not include a new token.");const i=la();return i&&(i.accessToken=a,l5(i)),a}async function jh(e){return kh(e)}async function L1(e,t={},n=0){var c;const s=la();if(!(s!=null&&s.accessToken))throw Mi("No access token found — please sign in."),new Nt("No access token found — please sign in.");const a={...t,headers:{...t.headers,Authorization:`Bearer ${s.accessToken}`}},i=await fetch(e,a);if(i.ok){const d=await un(i);if(Ai(d)&&d.status===!1)throw new fc(Ct(d,i.status),i.status,d);return d}const o=await un(i),l=_r(o);if(i.status===401){if(n===0&&yh.has(l))return await kh(),L1(e,t,1);if(d5.has(l))throw Mi("Session expired. Please sign in again."),new Nt(Ct(o,401,"Session expired. Please sign in again."))}throw i.status===403&&l==="ACCOUNT_SUSPENDED"&&u5(typeof((c=o==null?void 0:o.error)==null?void 0:c.details)=="string"?o.error.details:""),new fc(Ct(o,i.status,`Request failed (${i.status})`),i.status,o)}async function Pe(e,t={}){return vh(await L1(e,t))}async function f5(e,t={}){const n=await L1(e,t);return{data:vh(n),meta:Ai(n)&&n.meta||{},message:Ai(n)&&n.message||""}}const Kn=(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.error("Error reading from localStorage:",n),alert("Failed to save data. Please check your browser settings."),t}},Ms=(e,t)=>{try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch(n){return console.error("Error writing to localStorage:",n),alert("Failed to save data. Please check your browser settings."),!1}},m5=()=>{u.useEffect(()=>{const e=Kn("userInfo",{}),t=e==null?void 0:e.accessToken,n=e==null?void 0:e.refreshToken;!t||!n||Pe(X+"/api/v1/user/streak",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`}}).then(s=>{const a={...e,streakScore:(s==null?void 0:s.streakScore)??e.streakScore,highestStreakScore:(s==null?void 0:s.highestStreakScore)??e.highestStreakScore,lastActiveDate:(s==null?void 0:s.lastActiveDate)??e.lastActiveDate};Ms("userInfo",a)}).catch(s=>console.error("Visit record failed:",s))},[])};const on="/imgs/titled.png",Ch="/imgs/loader.svg",g5="/imgs/ueicon.webp",Sh="/imgs/jess.jpg",Nh="/imgs/jessy.jpg",_h="/imgs/jude.jpg",x5="/imgs/my1.png",Eh=({setsearching:e,setfind:t,bar:n,eprop:s,handleMenu:a})=>{u.useState(!1);const i=()=>{e(!0);const o=document.querySelector(".listcontent");o&&(o.style.cssText="pointer-events:all;clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);");const l=document.querySelector(".menucomp");l&&(l.style.cssText="pointer-events:none;clip-path: polygon(0 0, 0% 0, 0% 100%, 0 100%);"),a(!1)};return u.useEffect(()=>{t("")},[]),r.jsxs("div",{className:"twwo",title:"search",children:[r.jsx("div",{className:"search",onClick:i,children:r.jsx("i",{className:"fa fa-search"})}),r.jsx("div",{className:"input",onClick:i,children:r.jsx("input",{type:"text",style:{pointerEvents:s},ref:n,onChange:o=>t(o.target.value.trim("")),className:"find",placeholder:"Search a course code..."})}),r.jsx("div",{className:"slash",onClick:()=>a(!0),children:s!="all"?"/":r.jsx("i",{className:"fa fa-hamburger fa-dark"})})]})},A1="/imgs/racoon_learn.jpg",ss=({opacity:e,indexed:t,mainlogo:n})=>r.jsx("div",{className:"texttit",id:"waiting",style:{zIndex:t},children:r.jsxs("div",{className:"mtitle",id:"waittxt",style:{opacity:e},children:[r.jsx("div",{className:"rbackdrop"}),r.jsx("img",{src:A1,className:"racoonload",alt:""}),r.jsxs("div",{className:"loading",children:[r.jsx("div",{className:"logo",children:r.jsx("img",{src:n,width:"120",alt:""})}),r.jsx("div",{className:"loadtext",id:"loadtext","data-text":"Loading....",children:" Loading...."})]}),r.jsx("span",{style:{color:"rgba(205,205,245,.3)"},children:"Questions for various course codes"})]})}),v5="_wrap_1fl9d_17",y5="_glowA_1fl9d_28",b5="_glowB_1fl9d_42",w5="_eyebrow_1fl9d_57",k5="_heading_1fl9d_66",j5="_intro_1fl9d_75",C5="_grid_1fl9d_85",S5="_card_1fl9d_94",N5="_cardIcon_1fl9d_113",_5="_cardNum_1fl9d_119",E5="_cardTitle_1fl9d_131",T5="_cardBody_1fl9d_140",z5="_footer_1fl9d_149",nt={wrap:v5,glowA:y5,glowB:b5,eyebrow:w5,heading:k5,intro:j5,grid:C5,card:S5,"card--purple":"_card--purple_1fl9d_103","card--teal":"_card--teal_1fl9d_108",cardIcon:N5,cardNum:_5,"num--purple":"_num--purple_1fl9d_128","num--teal":"_num--teal_1fl9d_129",cardTitle:E5,cardBody:T5,footer:z5},P5="/imgs/racoon.jpg",Th=({variant:e="button"})=>{const[t,n]=u.useState(null),[s,a]=u.useState(!1),[i,o]=u.useState(!1);u.useEffect(()=>{var h;if(((h=window.matchMedia)==null?void 0:h.call(window,"(display-mode: standalone)").matches)||window.navigator.standalone===!0)return;const p=/iPad|iPhone|iPod/.test(navigator.userAgent),m=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);o(m),(p||m)&&a(!0);const f=x=>{x.preventDefault(),n(x),a(!0)},y=()=>{a(!1),n(null),console.log("PWA was installed")};return window.addEventListener("beforeinstallprompt",f),window.addEventListener("appinstalled",y),()=>{window.removeEventListener("beforeinstallprompt",f),window.removeEventListener("appinstalled",y)}},[]);const l=async()=>{if(t){t.prompt();const{outcome:d}=await t.userChoice;n(null),a(!1),console.log(`User response to the install prompt: ${d}`)}else/iPad|iPhone|iPod/.test(navigator.userAgent)?alert('To install this app on iOS, tap the share icon and then "Add to Home Screen".'):/Android/.test(navigator.userAgent)?alert('To install this app on Android, use the menu option in your browser to "Add to Home Screen".'):alert(`To install this app, look for an "Add to Home Screen" option in your browser's menu.`)};if(!s)return null;const c=i?"Add to Home":"Install App";return e==="navitem"?r.jsxs("div",{className:"amb-nav-item",onClick:l,role:"button",tabIndex:0,onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&l()},children:[r.jsx("span",{className:"amb-nav-icon",children:r.jsx("i",{className:"fas fa-plus-square"})}),r.jsx("span",{className:"amb-nav-label",children:i?"Add Home":"Install"})]}):r.jsxs("div",{id:"pwaButton",onClick:l,style:{display:"inline-flex",margin:"10px 10px",padding:"5px 10px",borderRadius:"5px",color:"#fff",alignItems:"center",cursor:"pointer",border:"1px solid #b5b5b524",backgroundColor:"black",fontSize:"14px"},className:"pwa-install-button",children:[r.jsx("i",{className:"fas fa-plus-square",style:{marginRight:"5px"}})," "+c]})},I5=[{num:"01",label:"Retrieval Practice",title:"Remember repeatedly",body:"Recalling information more than once significantly boosts future accessibility in your memory.",icon:"🔁",accent:"purple"},{num:"02",label:"Testing",title:"Attempt, don't just read",body:"Answering questions or explaining concepts to others reinforces learning and surfaces gaps.",icon:"✏️",accent:"teal"},{num:"03",label:"Spaced Repetition",title:"Review over time",body:"Revisiting material at increasing intervals trains your brain to keep information long-term.",icon:"🕐",accent:"purple"},{num:"04",label:"Dual Coding",title:"Verbal + visual",body:"Engaging both language and imagery channels at once dramatically raises the chance of recall.",icon:"🖼️",accent:"teal"},{num:"05",label:"Personal Connection",title:"Make it yours",body:"Linking new material to your own experiences makes it feel relevant — and far easier to remember.",icon:"❤️",accent:"purple"}];function R5(){return r.jsxs("div",{className:nt.wrap,children:[r.jsxs("div",{className:"midmessage",children:[r.jsxs("div",{className:"midleft",children:[r.jsxs("div",{className:"welcome",children:[r.jsx("i",{className:"bga",children:"🤗"}),r.jsx("span",{className:"welcome",style:{textTransform:"uppercase"},children:"HI !"})]}),r.jsx("div",{className:"rbackdropa"}),r.jsx("div",{className:"rbackdropb"}),r.jsx("div",{className:"rbackdropc"}),r.jsx("div",{className:"welcmessage",id:"welcid",children:"Practice makes perfect. Keep your self busy with the resources we provide."}),r.jsx(Th,{})]}),r.jsx("div",{className:"midleft",children:r.jsx("img",{className:"messagepic",src:P5,alt:""})})]}),r.jsx("div",{className:nt.glowA,"aria-hidden":"true"}),r.jsx("div",{className:nt.glowB,"aria-hidden":"true"}),r.jsx("p",{className:nt.eyebrow,children:"⚙ What we help you solve"}),r.jsx("h2",{className:nt.heading,children:"Learn smarter, not harder."}),r.jsx("p",{className:nt.intro,children:"Modern psychology shows the best way to retain knowledge is through active learning — techniques that make your brain work to recall information, not just passively absorb it."}),r.jsx("div",{className:nt.grid,children:I5.map(e=>r.jsxs("div",{className:`${nt.card} ${nt[`card--${e.accent}`]}`,children:[r.jsx("span",{className:nt.cardIcon,"aria-hidden":"true",children:e.icon}),r.jsxs("p",{className:`${nt.cardNum} ${nt[`num--${e.accent}`]}`,children:[e.num," — ",e.label]}),r.jsx("p",{className:nt.cardTitle,children:e.title}),r.jsx("p",{className:nt.cardBody,children:e.body})]},e.num))}),r.jsx("p",{className:nt.footer,children:"These strategies are grounded in decades of cognitive research, designed to give you the most from every hour you study."})]})}function O5(){const[e,t]=u.useState(!1);return r.jsxs("div",{className:"telegram-wrapper",children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"telegram",children:[r.jsxs("a",{href:"https://t.me/uepasco",rel:"noopener noreferrer",target:"_blank",className:"telegram-logo-container",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[r.jsx("div",{className:"pulse-ring"}),r.jsx("div",{className:"pulse-ring",style:{animationDelay:"1s"}}),r.jsxs("svg",{className:"telegram-svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:"planeGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[r.jsx("stop",{offset:"0%",style:{stopColor:"#00000000",stopOpacity:1}}),r.jsx("stop",{offset:"100%",style:{stopColor:"#0088cc00",stopOpacity:1}})]}),r.jsxs("linearGradient",{id:"circleGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[r.jsx("stop",{offset:"0%",style:{stopColor:"#0088cc00",stopOpacity:1}}),r.jsx("stop",{offset:"100%",style:{stopColor:"#00608c00",stopOpacity:1}})]})]}),r.jsx("circle",{cx:"50",cy:"50",r:"48",fill:"url(#circleGradient)"}),r.jsxs("g",{className:"plane-path",children:[r.jsx("path",{d:"M25 50 L70 30 L45 75 L40 55 L60 40 L35 52 Z",fill:"white"}),r.jsx("path",{d:"M40 55 L45 75 L50 65 Z",fill:"white",opacity:"0.7"})]})]}),r.jsxs("div",{className:"particles",children:[r.jsx("div",{className:"particle",style:{"--tx":"-30px","--ty":"-30px"}}),r.jsx("div",{className:"particle",style:{"--tx":"30px","--ty":"-30px"}}),r.jsx("div",{className:"particle",style:{"--tx":"-30px","--ty":"30px"}}),r.jsx("div",{className:"particle",style:{"--tx":"30px","--ty":"30px"}}),r.jsx("div",{className:"particle",style:{"--tx":"0px","--ty":"-40px"}})]})]}),r.jsxs("div",{className:"telegram-content",children:[r.jsx("span",{className:"itext",children:"Join"}),"Our Telegram",r.jsx("p",{className:"telegram-subtitle",children:"Connect with our vibrant community"}),r.jsxs("div",{className:"dots-decoration",children:[r.jsx("div",{className:"dot"}),r.jsx("div",{className:"dot"}),r.jsx("div",{className:"dot"})]}),r.jsxs("a",{href:"https://t.me/uepasco",rel:"noopener noreferrer",target:"_blank",className:"telegram-cta",children:["Join Community",r.jsx("span",{className:"cta-arrow",children:"→"})]})]})]})]})}var $5=u.createContext({});const zh=$5;function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},V.apply(null,arguments)}function L5(e){if(Array.isArray(e))return e}function A5(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var s,a,i,o,l=[],c=!0,d=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(s=i.call(n)).done)&&(l.push(s.value),l.length!==t);c=!0);}catch(p){d=!0,a=p}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(d)throw a}}return l}}function Eu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=Array(t);n<t;n++)s[n]=e[n];return s}function M5(e,t){if(e){if(typeof e=="string")return Eu(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Eu(e,t):void 0}}function D5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ph(e,t){return L5(e)||A5(e,t)||M5(e,t)||D5()}function wr(e){"@babel/helpers - typeof";return wr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wr(e)}function F5(e,t){if(wr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var s=n.call(e,t||"default");if(wr(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function B5(e){var t=F5(e,"string");return wr(t)=="symbol"?t:t+""}function mc(e,t,n){return(t=B5(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V5(e,t){if(e==null)return{};var n={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.includes(s))continue;n[s]=e[s]}return n}function Ih(e,t){if(e==null)return{};var n,s,a=V5(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Rh={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(i=a(i,s(l)))}return i}function s(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var l in i)t.call(i,l)&&i[l]&&(o=a(o,l));return o}function a(i,o){return o?i?i+" "+o:i+o:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Rh);var H5=Rh.exports;const U5=Y0(H5);function Lt(e,t){q5(e)&&(e="100%");var n=W5(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function q5(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function W5(e){return typeof e=="string"&&e.indexOf("%")!==-1}function G5(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Aa(e){return e<=1?"".concat(Number(e)*100,"%"):e}function Ko(e){return e.length===1?"0"+e:String(e)}function Y5(e,t,n){return{r:Lt(e,255)*255,g:Lt(t,255)*255,b:Lt(n,255)*255}}function Jo(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Q5(e,t,n){var s,a,i;if(e=Lt(e,360),t=Lt(t,100),n=Lt(n,100),t===0)a=n,i=n,s=n;else{var o=n<.5?n*(1+t):n+t-n*t,l=2*n-o;s=Jo(l,o,e+1/3),a=Jo(l,o,e),i=Jo(l,o,e-1/3)}return{r:s*255,g:a*255,b:i*255}}function Z5(e,t,n){e=Lt(e,255),t=Lt(t,255),n=Lt(n,255);var s=Math.max(e,t,n),a=Math.min(e,t,n),i=0,o=s,l=s-a,c=s===0?0:l/s;if(s===a)i=0;else{switch(s){case e:i=(t-n)/l+(t<n?6:0);break;case t:i=(n-e)/l+2;break;case n:i=(e-t)/l+4;break}i/=6}return{h:i,s:c,v:o}}function K5(e,t,n){e=Lt(e,360)*6,t=Lt(t,100),n=Lt(n,100);var s=Math.floor(e),a=e-s,i=n*(1-t),o=n*(1-a*t),l=n*(1-(1-a)*t),c=s%6,d=[n,o,i,i,l,n][c],p=[l,n,n,o,i,i][c],m=[i,i,l,n,n,o][c];return{r:d*255,g:p*255,b:m*255}}function J5(e,t,n,s){var a=[Ko(Math.round(e).toString(16)),Ko(Math.round(t).toString(16)),Ko(Math.round(n).toString(16))];return s&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function Tu(e){return bt(e)/255}function bt(e){return parseInt(e,16)}var zu={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function bs(e){var t={r:0,g:0,b:0},n=1,s=null,a=null,i=null,o=!1,l=!1;return typeof e=="string"&&(e=t8(e)),typeof e=="object"&&(mn(e.r)&&mn(e.g)&&mn(e.b)?(t=Y5(e.r,e.g,e.b),o=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):mn(e.h)&&mn(e.s)&&mn(e.v)?(s=Aa(e.s),a=Aa(e.v),t=K5(e.h,s,a),o=!0,l="hsv"):mn(e.h)&&mn(e.s)&&mn(e.l)&&(s=Aa(e.s),i=Aa(e.l),t=Q5(e.h,s,i),o=!0,l="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(n=e.a)),n=G5(n),{ok:o,format:e.format||l,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}var X5="[-\\+]?\\d+%?",e8="[-\\+]?\\d*\\.\\d+%?",Dn="(?:".concat(e8,")|(?:").concat(X5,")"),Xo="[\\s|\\(]+(".concat(Dn,")[,|\\s]+(").concat(Dn,")[,|\\s]+(").concat(Dn,")\\s*\\)?"),el="[\\s|\\(]+(".concat(Dn,")[,|\\s]+(").concat(Dn,")[,|\\s]+(").concat(Dn,")[,|\\s]+(").concat(Dn,")\\s*\\)?"),Vt={CSS_UNIT:new RegExp(Dn),rgb:new RegExp("rgb"+Xo),rgba:new RegExp("rgba"+el),hsl:new RegExp("hsl"+Xo),hsla:new RegExp("hsla"+el),hsv:new RegExp("hsv"+Xo),hsva:new RegExp("hsva"+el),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function t8(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if(zu[e])e=zu[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=Vt.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=Vt.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=Vt.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=Vt.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=Vt.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=Vt.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=Vt.hex8.exec(e),n?{r:bt(n[1]),g:bt(n[2]),b:bt(n[3]),a:Tu(n[4]),format:t?"name":"hex8"}:(n=Vt.hex6.exec(e),n?{r:bt(n[1]),g:bt(n[2]),b:bt(n[3]),format:t?"name":"hex"}:(n=Vt.hex4.exec(e),n?{r:bt(n[1]+n[1]),g:bt(n[2]+n[2]),b:bt(n[3]+n[3]),a:Tu(n[4]+n[4]),format:t?"name":"hex8"}:(n=Vt.hex3.exec(e),n?{r:bt(n[1]+n[1]),g:bt(n[2]+n[2]),b:bt(n[3]+n[3]),format:t?"name":"hex"}:!1)))))))))}function mn(e){return!!Vt.CSS_UNIT.exec(String(e))}var Ma=2,Pu=.16,n8=.05,r8=.05,s8=.15,Oh=5,$h=4,a8=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function Iu(e){var t=e.r,n=e.g,s=e.b,a=Z5(t,n,s);return{h:a.h*360,s:a.s,v:a.v}}function Da(e){var t=e.r,n=e.g,s=e.b;return"#".concat(J5(t,n,s,!1))}function i8(e,t,n){var s=n/100,a={r:(t.r-e.r)*s+e.r,g:(t.g-e.g)*s+e.g,b:(t.b-e.b)*s+e.b};return a}function Ru(e,t,n){var s;return Math.round(e.h)>=60&&Math.round(e.h)<=240?s=n?Math.round(e.h)-Ma*t:Math.round(e.h)+Ma*t:s=n?Math.round(e.h)+Ma*t:Math.round(e.h)-Ma*t,s<0?s+=360:s>=360&&(s-=360),s}function Ou(e,t,n){if(e.h===0&&e.s===0)return e.s;var s;return n?s=e.s-Pu*t:t===$h?s=e.s+Pu:s=e.s+n8*t,s>1&&(s=1),n&&t===Oh&&s>.1&&(s=.1),s<.06&&(s=.06),Number(s.toFixed(2))}function $u(e,t,n){var s;return n?s=e.v+r8*t:s=e.v-s8*t,s>1&&(s=1),Number(s.toFixed(2))}function o8(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[],s=bs(e),a=Oh;a>0;a-=1){var i=Iu(s),o=Da(bs({h:Ru(i,a,!0),s:Ou(i,a,!0),v:$u(i,a,!0)}));n.push(o)}n.push(Da(s));for(var l=1;l<=$h;l+=1){var c=Iu(s),d=Da(bs({h:Ru(c,l),s:Ou(c,l),v:$u(c,l)}));n.push(d)}return t.theme==="dark"?a8.map(function(p){var m=p.index,f=p.opacity,y=Da(i8(bs(t.backgroundColor||"#141414"),bs(n[m]),f*100));return y}):n}var gc=["#e6f4ff","#bae0ff","#91caff","#69b1ff","#4096ff","#1677ff","#0958d9","#003eb3","#002c8c","#001d66"];gc.primary=gc[5];function Lu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,s)}return n}function ln(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lu(Object(n),!0).forEach(function(s){mc(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lu(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function l8(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function c8(e,t){if(!e)return!1;if(e.contains)return e.contains(t);for(var n=t;n;){if(n===e)return!0;n=n.parentNode}return!1}var Au="data-rc-order",Mu="data-rc-priority",d8="rc-util-key",xc=new Map;function Lh(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.mark;return t?t.startsWith("data-")?t:"data-".concat(t):d8}function M1(e){if(e.attachTo)return e.attachTo;var t=document.querySelector("head");return t||document.body}function u8(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function D1(e){return Array.from((xc.get(e)||e).children).filter(function(t){return t.tagName==="STYLE"})}function Ah(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!l8())return null;var n=t.csp,s=t.prepend,a=t.priority,i=a===void 0?0:a,o=u8(s),l=o==="prependQueue",c=document.createElement("style");c.setAttribute(Au,o),l&&i&&c.setAttribute(Mu,"".concat(i)),n!=null&&n.nonce&&(c.nonce=n==null?void 0:n.nonce),c.innerHTML=e;var d=M1(t),p=d.firstChild;if(s){if(l){var m=(t.styles||D1(d)).filter(function(f){if(!["prepend","prependQueue"].includes(f.getAttribute(Au)))return!1;var y=Number(f.getAttribute(Mu)||0);return i>=y});if(m.length)return d.insertBefore(c,m[m.length-1].nextSibling),c}d.insertBefore(c,p)}else d.appendChild(c);return c}function p8(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=M1(t);return(t.styles||D1(n)).find(function(s){return s.getAttribute(Lh(t))===e})}function h8(e,t){var n=xc.get(e);if(!n||!c8(document,n)){var s=Ah("",t),a=s.parentNode;xc.set(e,a),e.removeChild(s)}}function f8(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=M1(n),a=D1(s),i=ln(ln({},n),{},{styles:a});h8(s,i);var o=p8(t,i);if(o){var l,c;if((l=i.csp)!==null&&l!==void 0&&l.nonce&&o.nonce!==((c=i.csp)===null||c===void 0?void 0:c.nonce)){var d;o.nonce=(d=i.csp)===null||d===void 0?void 0:d.nonce}return o.innerHTML!==e&&(o.innerHTML=e),o}var p=Ah(e,i);return p.setAttribute(Lh(i),t),p}function Mh(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}function m8(e){return Mh(e)instanceof ShadowRoot}function g8(e){return m8(e)?Mh(e):null}var vc={},x8=function(t){};function v8(e,t){}function y8(e,t){}function b8(){vc={}}function Dh(e,t,n){!t&&!vc[n]&&(e(!1,n),vc[n]=!0)}function uo(e,t){Dh(v8,e,t)}function w8(e,t){Dh(y8,e,t)}uo.preMessage=x8;uo.resetWarned=b8;uo.noteOnce=w8;function k8(e){return e.replace(/-(.)/g,function(t,n){return n.toUpperCase()})}function j8(e,t){uo(e,"[@ant-design/icons] ".concat(t))}function Du(e){return wr(e)==="object"&&typeof e.name=="string"&&typeof e.theme=="string"&&(wr(e.icon)==="object"||typeof e.icon=="function")}function Fu(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(e).reduce(function(t,n){var s=e[n];switch(n){case"class":t.className=s,delete t.class;break;default:delete t[n],t[k8(n)]=s}return t},{})}function yc(e,t,n){return n?mr.createElement(e.tag,ln(ln({key:t},Fu(e.attrs)),n),(e.children||[]).map(function(s,a){return yc(s,"".concat(t,"-").concat(e.tag,"-").concat(a))})):mr.createElement(e.tag,ln({key:t},Fu(e.attrs)),(e.children||[]).map(function(s,a){return yc(s,"".concat(t,"-").concat(e.tag,"-").concat(a))}))}function Fh(e){return o8(e)[0]}function Bh(e){return e?Array.isArray(e)?e:[e]:[]}var C8=`
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
`,S8=function(t){var n=u.useContext(zh),s=n.csp,a=n.prefixCls,i=C8;a&&(i=i.replace(/anticon/g,a)),u.useEffect(function(){var o=t.current,l=g8(o);f8(i,"@ant-design-icons",{prepend:!0,csp:s,attachTo:l})},[])},N8=["icon","className","onClick","style","primaryColor","secondaryColor"],Ds={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function _8(e){var t=e.primaryColor,n=e.secondaryColor;Ds.primaryColor=t,Ds.secondaryColor=n||Fh(t),Ds.calculated=!!n}function E8(){return ln({},Ds)}var po=function(t){var n=t.icon,s=t.className,a=t.onClick,i=t.style,o=t.primaryColor,l=t.secondaryColor,c=Ih(t,N8),d=u.useRef(),p=Ds;if(o&&(p={primaryColor:o,secondaryColor:l||Fh(o)}),S8(d),j8(Du(n),"icon should be icon definiton, but got ".concat(n)),!Du(n))return null;var m=n;return m&&typeof m.icon=="function"&&(m=ln(ln({},m),{},{icon:m.icon(p.primaryColor,p.secondaryColor)})),yc(m.icon,"svg-".concat(m.name),ln(ln({className:s,onClick:a,style:i,"data-icon":m.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},c),{},{ref:d}))};po.displayName="IconReact";po.getTwoToneColors=E8;po.setTwoToneColors=_8;const F1=po;function Vh(e){var t=Bh(e),n=Ph(t,2),s=n[0],a=n[1];return F1.setTwoToneColors({primaryColor:s,secondaryColor:a})}function T8(){var e=F1.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}var z8=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];Vh(gc.primary);var ho=u.forwardRef(function(e,t){var n=e.className,s=e.icon,a=e.spin,i=e.rotate,o=e.tabIndex,l=e.onClick,c=e.twoToneColor,d=Ih(e,z8),p=u.useContext(zh),m=p.prefixCls,f=m===void 0?"anticon":m,y=p.rootClassName,h=U5(y,f,mc(mc({},"".concat(f,"-").concat(s.name),!!s.name),"".concat(f,"-spin"),!!a||s.name==="loading"),n),x=o;x===void 0&&l&&(x=-1);var k=i?{msTransform:"rotate(".concat(i,"deg)"),transform:"rotate(".concat(i,"deg)")}:void 0,w=Bh(c),g=Ph(w,2),b=g[0],j=g[1];return u.createElement("span",V({role:"img","aria-label":s.name},d,{ref:t,tabIndex:x,onClick:l,className:h}),u.createElement(F1,{icon:s,primaryColor:b,secondaryColor:j,style:k}))});ho.displayName="AntdIcon";ho.getTwoToneColor=T8;ho.setTwoToneColor=Vh;const U=ho;var P8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M952 474H829.8C812.5 327.6 696.4 211.5 550 194.2V72c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v122.2C327.6 211.5 211.5 327.6 194.2 474H72c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h122.2C211.5 696.4 327.6 812.5 474 829.8V952c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V829.8C696.4 812.5 812.5 696.4 829.8 550H952c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM512 756c-134.8 0-244-109.2-244-244s109.2-244 244-244 244 109.2 244 244-109.2 244-244 244z"}},{tag:"path",attrs:{d:"M512 392c-32.1 0-62.1 12.4-84.8 35.2-22.7 22.7-35.2 52.7-35.2 84.8s12.5 62.1 35.2 84.8C449.9 619.4 480 632 512 632s62.1-12.5 84.8-35.2C619.4 574.1 632 544 632 512s-12.5-62.1-35.2-84.8A118.57 118.57 0 00512 392z"}}]},name:"aim",theme:"outlined"};const I8=P8;var R8=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:I8}))},O8=u.forwardRef(R8);const $8=O8;var L8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"}}]},name:"appstore",theme:"outlined"};const A8=L8;var M8=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:A8}))},D8=u.forwardRef(M8);const F8=D8;var B8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"};const V8=B8;var H8=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:V8}))},U8=u.forwardRef(H8);const q8=U8;var W8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};const G8=W8;var Y8=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:G8}))},Q8=u.forwardRef(Y8);const kr=Q8;var Z8={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};const K8=Z8;var J8=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:K8}))},X8=u.forwardRef(J8);const Hh=X8;var eg={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};const tg=eg;var ng=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:tg}))},rg=u.forwardRef(ng);const Uh=rg;var sg={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"};const ag=sg;var ig=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:ag}))},og=u.forwardRef(ig);const B1=og;var lg={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};const cg=lg;var dg=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:cg}))},ug=u.forwardRef(dg);const pg=ug;var hg={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]},name:"clock-circle",theme:"outlined"};const fg=hg;var mg=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:fg}))},gg=u.forwardRef(mg);const qh=gg;var xg={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"}}]},name:"close-circle",theme:"filled"};const vg=xg;var yg=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:vg}))},bg=u.forwardRef(yg);const wg=bg;var kg={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z"}}]},name:"close-circle",theme:"outlined"};const jg=kg;var Cg=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:jg}))},Sg=u.forwardRef(Cg);const Wh=Sg;var Ng={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"};const _g=Ng;var Eg=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:_g}))},Tg=u.forwardRef(Eg);const bc=Tg;var zg={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 00308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 00-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"code",theme:"outlined"};const Pg=zg;var Ig=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:Pg}))},Rg=u.forwardRef(Ig);const Og=Rg;var $g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 00-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zM512 734.2c-62.1 0-112.6-50.5-112.6-112.6S449.9 509 512 509s112.6 50.5 112.6 112.6S574.1 734.2 512 734.2zm0-160.9c-26.6 0-48.2 21.6-48.2 48.3 0 26.6 21.6 48.3 48.2 48.3s48.2-21.6 48.2-48.3c0-26.6-21.6-48.3-48.2-48.3z"}}]},name:"crown",theme:"filled"};const Lg=$g;var Ag=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:Lg}))},Mg=u.forwardRef(Ag);const Dg=Mg;var Fg={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832.6 191.4c-84.6-84.6-221.5-84.6-306 0l-96.9 96.9 51 51 96.9-96.9c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204l-96.9 96.9 51.1 51.1 96.9-96.9c84.4-84.6 84.4-221.5-.1-306.1zM446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l96.9-96.9-51.1-51.1-96.9 96.9c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l96.9-96.9-51-51-96.8 97zM260.3 209.4a8.03 8.03 0 00-11.3 0L209.4 249a8.03 8.03 0 000 11.3l554.4 554.4c3.1 3.1 8.2 3.1 11.3 0l39.6-39.6c3.1-3.1 3.1-8.2 0-11.3L260.3 209.4z"}}]},name:"disconnect",theme:"outlined"};const Bg=Fg;var Vg=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:Bg}))},Hg=u.forwardRef(Vg);const Gh=Hg;var Ug={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm22.3 665.2l.2 31.7c0 4.4-3.6 8.1-8 8.1h-28.4c-4.4 0-8-3.6-8-8v-31.4C401.3 723 359.5 672.4 355 617.4c-.4-4.7 3.3-8.7 8-8.7h46.2c3.9 0 7.3 2.8 7.9 6.6 5.1 31.7 29.8 55.4 74.1 61.3V533.9l-24.7-6.3c-52.3-12.5-102.1-45.1-102.1-112.7 0-72.9 55.4-112.1 126.2-119v-33c0-4.4 3.6-8 8-8h28.1c4.4 0 8 3.6 8 8v32.7c68.5 6.9 119.9 46.9 125.9 109.2.5 4.7-3.2 8.8-8 8.8h-44.9c-4 0-7.4-3-7.9-6.9-4-29.2-27.4-53-65.5-58.2v134.3l25.4 5.9c64.8 16 108.9 47 108.9 116.4 0 75.3-56 117.3-134.3 124.1zM426.6 410.3c0 25.4 15.7 45.1 49.5 57.3 4.7 1.9 9.4 3.4 15 5v-124c-36.9 4.7-64.5 25.4-64.5 61.7zm116.5 135.2c-2.8-.6-5.6-1.3-8.8-2.2V677c42.6-3.8 72-27.2 72-66.4 0-30.7-15.9-50.7-63.2-65.1z"}}]},name:"dollar-circle",theme:"filled"};const qg=Ug;var Wg=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:qg}))},Gg=u.forwardRef(Wg);const Bu=Gg;var Yg={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"}}]},name:"dollar",theme:"outlined"};const Qg=Yg;var Zg=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:Qg}))},Kg=u.forwardRef(Zg);const Jg=Kg;var Xg={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"};const e7=Xg;var t7=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:e7}))},n7=u.forwardRef(t7);const r7=n7;var s7={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"};const a7=s7;var i7=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:a7}))},o7=u.forwardRef(i7);const Vu=o7;var l7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};const c7=l7;var d7=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:c7}))},u7=u.forwardRef(d7);const si=u7;var p7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"};const h7=p7;var f7=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:h7}))},m7=u.forwardRef(f7);const ai=m7;var g7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M644.7 669.2a7.92 7.92 0 00-6.5-3.3H594c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.8-5.3 0-12.7-6.5-12.7h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-22.9-31.9zM688 306v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm184 458H208V148h560v296c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h312c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm402.6-320.8l-192-66.7c-.9-.3-1.7-.4-2.6-.4s-1.8.1-2.6.4l-192 66.7a7.96 7.96 0 00-5.4 7.5v251.1c0 2.5 1.1 4.8 3.1 6.3l192 150.2c1.4 1.1 3.2 1.7 4.9 1.7s3.5-.6 4.9-1.7l192-150.2c1.9-1.5 3.1-3.8 3.1-6.3V538.7c0-3.4-2.2-6.4-5.4-7.5zM826 763.7L688 871.6 550 763.7V577l138-48 138 48v186.7z"}}]},name:"file-protect",theme:"outlined"};const x7=g7;var v7=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:x7}))},y7=u.forwardRef(v7);const b7=y7;var w7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 000 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 00391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 00-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"}}]},name:"fullscreen-exit",theme:"outlined"};const k7=w7;var j7=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:k7}))},C7=u.forwardRef(j7);const S7=C7;var N7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M290 236.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0013.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 000 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 00-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"}}]},name:"fullscreen",theme:"outlined"};const _7=N7;var E7=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:_7}))},T7=u.forwardRef(E7);const z7=T7;var P7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M905.9 806.7l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H596.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.3-.7 7.3-4.8 6.6-9.2zm-470.2-248c-.6-3.9-4-6.7-7.9-6.7H166.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248zM342 472h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H382.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8z"}}]},name:"gold",theme:"filled"};const I7=P7;var R7=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:I7}))},O7=u.forwardRef(R7);const $7=O7;var L7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z"}}]},name:"google",theme:"outlined"};const A7=L7;var M7=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:A7}))},D7=u.forwardRef(M7);const F7=D7;var B7={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"}}]},name:"inbox",theme:"outlined"};const V7=B7;var H7=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:V7}))},U7=u.forwardRef(H7);const q7=U7;var W7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};const G7=W7;var Y7=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:G7}))},Q7=u.forwardRef(Y7);const Es=Q7;var Z7={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};const K7=Z7;var J7=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:K7}))},X7=u.forwardRef(J7);const Yh=X7;var e9={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};const t9=e9;var n9=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:t9}))},r9=u.forwardRef(n9);const wc=r9;var s9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"};const a9=s9;var i9=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:a9}))},o9=u.forwardRef(i9);const Hu=o9;var l9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"}}]},name:"logout",theme:"outlined"};const c9=l9;var d9=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:c9}))},u9=u.forwardRef(d9);const p9=u9;var h9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"};const f9=h9;var m9=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:f9}))},g9=u.forwardRef(m9);const tl=g9;var x9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"}}]},name:"menu-fold",theme:"outlined"};const v9=x9;var y9=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:v9}))},b9=u.forwardRef(y9);const w9=b9;var k9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"};const j9=k9;var C9=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:j9}))},S9=u.forwardRef(C9);const N9=S9;var _9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"}}]},name:"message",theme:"outlined"};const E9=_9;var T9=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:E9}))},z9=u.forwardRef(T9);const Qh=z9;var P9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M911.5 700.7a8 8 0 00-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 00-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z"}}]},name:"money-collect",theme:"outlined"};const I9=P9;var R9=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:I9}))},O9=u.forwardRef(R9);const Di=O9;var $9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"}}]},name:"phone",theme:"outlined"};const L9=$9;var A9=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:L9}))},M9=u.forwardRef(A9);const kc=M9;var D9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M705.6 124.9a8 8 0 00-11.6 7.2v64.2c0 5.5 2.9 10.6 7.5 13.6a352.2 352.2 0 0162.2 49.8c32.7 32.8 58.4 70.9 76.3 113.3a355 355 0 0127.9 138.7c0 48.1-9.4 94.8-27.9 138.7a355.92 355.92 0 01-76.3 113.3 353.06 353.06 0 01-113.2 76.4c-43.8 18.6-90.5 28-138.5 28s-94.7-9.4-138.5-28a353.06 353.06 0 01-113.2-76.4A355.92 355.92 0 01184 650.4a355 355 0 01-27.9-138.7c0-48.1 9.4-94.8 27.9-138.7 17.9-42.4 43.6-80.5 76.3-113.3 19-19 39.8-35.6 62.2-49.8 4.7-2.9 7.5-8.1 7.5-13.6V132c0-6-6.3-9.8-11.6-7.2C178.5 195.2 82 339.3 80 506.3 77.2 745.1 272.5 943.5 511.2 944c239 .5 432.8-193.3 432.8-432.4 0-169.2-97-315.7-238.4-386.7zM480 560h64c4.4 0 8-3.6 8-8V88c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z"}}]},name:"poweroff",theme:"outlined"};const F9=D9;var B9=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:F9}))},V9=u.forwardRef(B9);const H9=V9;var U9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"};const q9=U9;var W9=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:q9}))},G9=u.forwardRef(W9);const Y9=G9;var Q9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M300 328a60 60 0 10120 0 60 60 0 10-120 0zM852 64H172c-17.7 0-32 14.3-32 32v660c0 17.7 14.3 32 32 32h680c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-32 660H204V128h616v596zM604 328a60 60 0 10120 0 60 60 0 10-120 0zm250.2 556H169.8c-16.5 0-29.8 14.3-29.8 32v36c0 4.4 3.3 8 7.4 8h729.1c4.1 0 7.4-3.6 7.4-8v-36c.1-17.7-13.2-32-29.7-32zM664 508H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"robot",theme:"outlined"};const Z9=Q9;var K9=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:Z9}))},J9=u.forwardRef(K9);const Fi=J9;var X9={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 00-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0043.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0043.1-30.5 97.52 97.52 0 0021.4-60.8c0-8.4-1.1-16.4-3.1-23.8L864 736zM512 352a48.01 48.01 0 010 96 48.01 48.01 0 010-96zm116.1 432.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5s-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 01-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5z"}}]},name:"rocket",theme:"filled"};const ex=X9;var tx=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:ex}))},nx=u.forwardRef(tx);const rx=nx;var sx={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zm-405.8-201c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0026 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z"}}]},name:"safety-certificate",theme:"outlined"};const ax=sx;var ix=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:ax}))},ox=u.forwardRef(ix);const lx=ox;var cx={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 136H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm308.2-177.4L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0025.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5z"}}]},name:"schedule",theme:"outlined"};const dx=cx;var ux=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:dx}))},px=u.forwardRef(ux);const hx=px;var fx={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"};const mx=fx;var gx=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:mx}))},xx=u.forwardRef(gx);const Bi=xx;var vx={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm224 272c-85.5 0-155.6-67.3-160-151.6a8 8 0 018-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c.3-4.2 3.9-7.4 8.1-7.4H664a8 8 0 018 8.4C667.6 625.7 597.5 693 512 693zm176-224a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"smile",theme:"filled"};const yx=vx;var bx=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:yx}))},wx=u.forwardRef(bx);const kx=wx;var jx={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M688 264c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48zm-8 136H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM480 544H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 308H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm356.8-74.4c29-26.3 47.2-64.3 47.2-106.6 0-79.5-64.5-144-144-144s-144 64.5-144 144c0 42.3 18.2 80.3 47.2 106.6-57 32.5-96.2 92.7-99.2 162.1-.2 4.5 3.5 8.3 8 8.3h48.1c4.2 0 7.7-3.3 8-7.6C564 871.2 621.7 816 692 816s128 55.2 131.9 124.4c.2 4.2 3.7 7.6 8 7.6H880c4.6 0 8.2-3.8 8-8.3-2.9-69.5-42.2-129.6-99.2-162.1zM692 591c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80z"}}]},name:"solution",theme:"outlined"};const Cx=jx;var Sx=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:Cx}))},Nx=u.forwardRef(Sx);const V1=Nx;var _x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zm348-327H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm-41.9 261.8l-110.3-63.7a15.9 15.9 0 00-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0021.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0021.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 00-21.7-5.9L746 287.8a15.99 15.99 0 00-5.8 21.8L760 344z"}}]},name:"sound",theme:"outlined"};const Ex=_x;var Tx=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:Ex}))},zx=u.forwardRef(Tx);const Px=zx;var Ix={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"};const Rx=Ix;var Ox=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:Rx}))},$x=u.forwardRef(Ox);const Lx=$x;var Ax={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"}}]},name:"team",theme:"outlined"};const Mx=Ax;var Dx=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:Mx}))},Fx=u.forwardRef(Dx);const Zh=Fx;var Bx={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z"}}]},name:"thunderbolt",theme:"filled"};const Vx=Bx;var Hx=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:Vx}))},Ux=u.forwardRef(Hx);const Fs=Ux;var qx={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"}}]},name:"thunderbolt",theme:"outlined"};const Wx=qx;var Gx=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:Wx}))},Yx=u.forwardRef(Gx);const Qx=Yx;var Zx={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM184 352V232h64v207.6a91.99 91.99 0 01-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z"}}]},name:"trophy",theme:"outlined"};const Kx=Zx;var Jx=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:Kx}))},Xx=u.forwardRef(Jx);const ev=Xx;var tv={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 888.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-add",theme:"outlined"};const nv=tv;var rv=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:nv}))},sv=u.forwardRef(rv);const Uu=sv;var av={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 464H528V448h320v128zm-268-64a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"wallet",theme:"filled"};const iv=av;var ov=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:iv}))},lv=u.forwardRef(ov);const cv=lv;var dv={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}}]},name:"warning",theme:"outlined"};const uv=dv;var pv=function(t,n){return u.createElement(U,V({},t,{ref:n,icon:uv}))},hv=u.forwardRef(pv);const fv=hv,Kh="uelearn:theme";function mv(){try{return localStorage.getItem(Kh)||"dark"}catch{return"dark"}}function gv(){const[e,t]=u.useState(mv);u.useEffect(()=>{document.documentElement.setAttribute("data-theme",e);try{localStorage.setItem(Kh,e)}catch{}},[e]);const n=u.useCallback(()=>{t(s=>s==="dark"?"light":"dark")},[]);return{theme:e,toggleTheme:n,setTheme:t}}const xv=`
  .theme-toggle-btn {
    position: fixed;
    top: 14px;
    right: 14px;
    z-index: 30;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.12);
    background: rgba(10,12,28,0.7);
    backdrop-filter: blur(12px);
    color: #f2f3f5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.15s ease, background 0.15s ease;
    display:none;
  }
  .theme-toggle-btn:hover { transform: scale(1.06); background: rgba(10,12,28,0.9); }
  [data-theme='light'] .theme-toggle-btn {
    border-color: rgba(20,22,27,0.12);
    background: rgba(255,255,255,0.85);
    color: #14161b;
  }
`;function vv(){const{theme:e,toggleTheme:t}=gv();return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:xv}),r.jsx("button",{type:"button",className:"theme-toggle-btn",onClick:t,"aria-label":`Switch to ${e==="dark"?"light":"dark"} mode`,title:`Switch to ${e==="dark"?"light":"dark"} mode`,children:e==="dark"?"☀️":"🌙"})]})}const yv=`

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
    .amb-nav {
      max-width: 94vw;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    .amb-nav::-webkit-scrollbar { display: none; }
    .amb-nav-item { padding: 8px 10px; min-width: 44px; }
    .amb-nav-label { font-size: 8px; }
  }

`;function H1({cname:e="",active:t=""}){const n=()=>{confirm("Confirm to Leave")&&(co(),location.reload())};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:yv}),r.jsx(vv,{}),r.jsx("div",{className:e,children:r.jsxs("nav",{className:"amb-nav ",children:[r.jsxs(Re,{to:"/",className:`amb-nav-item ${t=="home"?"active":""}`,children:[r.jsx("span",{className:"amb-nav-icon",children:r.jsx("img",{className:"amb-nav-logo",src:on,alt:""})}),r.jsx("span",{className:"amb-nav-label",children:"Home"})]}),r.jsxs(Re,{to:"/dashboard/solutions",className:`amb-nav-item ${t=="solutions"?"active":""}`,title:"Your saved solutions",children:[r.jsx("span",{className:"amb-nav-icon",children:r.jsx(V1,{})}),r.jsx("span",{className:"amb-nav-label",children:"Solutions"})]}),r.jsxs(Re,{to:"/about",className:`amb-nav-item ${t=="about"?"active":""}`,children:[r.jsx("span",{className:"amb-nav-icon",children:r.jsx(kx,{})}),r.jsx("span",{className:"amb-nav-label",children:"About"})]}),r.jsxs(Re,{to:"/contact",className:`amb-nav-item ${t=="contact"?"active":""}`,children:[r.jsx("span",{className:"amb-nav-icon",children:r.jsx(Zh,{})}),r.jsx("span",{className:"amb-nav-label",children:"Contact"})]}),r.jsxs(Re,{to:"/payment",className:`amb-nav-item ${t=="payment"?"active":""}`,target:"_blank",rel:"noopener noreferrer",children:[r.jsx("span",{className:"amb-nav-icon",children:r.jsx(Di,{})}),r.jsx("span",{className:"amb-nav-label",children:"Upgrade"})]}),r.jsx(Th,{variant:"navitem"}),r.jsxs("div",{className:"amb-nav-item",onClick:n,children:[r.jsx("span",{className:"amb-nav-icon",children:r.jsx(H9,{})}),r.jsx("span",{className:"amb-nav-label",children:"Logout"})]})]})})]})}function bv(){const[e,t]=u.useState(null);if(u.useEffect(()=>{const s=a=>{var i;return t({reason:((i=a.detail)==null?void 0:i.reason)||""})};return window.addEventListener("auth:account-suspended",s),()=>window.removeEventListener("auth:account-suspended",s)},[]),!e)return null;const n=async()=>{await co(),window.location.assign("/login")};return r.jsx("div",{role:"alertdialog","aria-modal":"true","aria-labelledby":"suspended-title",style:nn.backdrop,children:r.jsxs("div",{style:nn.card,children:[r.jsx("div",{style:nn.icon,"aria-hidden":"true",children:"⛔"}),r.jsx("h2",{id:"suspended-title",style:nn.title,children:"Your account has been suspended"}),e.reason&&r.jsxs("p",{style:nn.reason,children:[r.jsx("span",{style:nn.reasonLabel,children:"Reason"}),e.reason]}),r.jsx("p",{style:nn.body,children:"Contact support if you believe this is a mistake."}),r.jsxs("div",{style:nn.actions,children:[r.jsx(Re,{to:"/contact",style:nn.primary,onClick:()=>t(null),children:"Contact support"}),r.jsx("button",{type:"button",style:nn.secondary,onClick:n,children:"Log out"})]})]})})}const nn={backdrop:{position:"fixed",inset:0,zIndex:1e5,background:"rgba(8,8,12,.92)",display:"flex",alignItems:"center",justifyContent:"center",padding:20},card:{width:"100%",maxWidth:420,background:"#111115",border:"1px solid #2a2a38",borderRadius:16,padding:"28px 24px",textAlign:"center",color:"#e8e8f0",boxShadow:"0 24px 60px rgba(0,0,0,.6)"},icon:{fontSize:34,marginBottom:8},title:{margin:"0 0 12px",fontSize:20,fontWeight:600},reason:{margin:"0 0 12px",padding:"10px 12px",borderRadius:10,background:"#1c1014",border:"1px solid #4c1d24",color:"#fca5a5",fontSize:13,lineHeight:1.5,textAlign:"left"},reasonLabel:{display:"block",fontSize:10,textTransform:"uppercase",letterSpacing:".08em",color:"#f87171",marginBottom:3},body:{margin:"0 0 20px",fontSize:13,color:"#8b8ba0"},actions:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},primary:{padding:"9px 18px",borderRadius:10,background:"#4f46e5",color:"#fff",fontSize:13,textDecoration:"none"},secondary:{padding:"9px 18px",borderRadius:10,background:"transparent",border:"1px solid #2a2a38",color:"#c0c0cc",fontSize:13,cursor:"pointer"}},wv=2,kv=350,jv=({size:e=15})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",className:"anim-o","aria-hidden":"true",style:{opacity:.3,margin:"0px 3px "},children:r.jsx("circle",{cx:"12",cy:"12",r:"8"})}),Cv=({size:e=18})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",className:"anim-up-arrow","aria-hidden":"true",style:{opacity:.3},children:r.jsx("polyline",{points:"6 15 12 9 18 15"})}),Sv=({size:e=15})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",className:"anim-plug","aria-hidden":"true",style:{opacity:.3},children:[r.jsx("path",{d:"M9 7V3M15 7V3"}),r.jsx("path",{d:"M7 7h10v4a5 5 0 0 1-10 0V7Z"}),r.jsx("path",{d:"M12 16v5"})]}),Nv=({size:e=15})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",className:"anim-computer","aria-hidden":"true",style:{opacity:.3},children:[r.jsx("rect",{x:"3",y:"4",width:"18",height:"12",rx:"2"}),r.jsx("path",{d:"M2 20h20"}),r.jsx("circle",{className:"anim-computer-dot",cx:"12",cy:"10",r:"1.6",fill:"currentColor",stroke:"none"})]}),_v=({size:e=16})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",className:"anim-pleading","aria-hidden":"true",style:{opacity:.3},children:[r.jsx("circle",{cx:"12",cy:"12",r:"9"}),r.jsx("circle",{cx:"9",cy:"10",r:"1",fill:"currentColor",stroke:"none"}),r.jsx("circle",{cx:"15",cy:"10",r:"1",fill:"currentColor",stroke:"none"}),r.jsx("path",{d:"M8.5 16c1-1.2 2.2-1.8 3.5-1.8s2.5.6 3.5 1.8"})]}),Ev=`
  @keyframes anim-o-pulse {
    0%, 100% { transform: scale(1);    opacity: 1;  }
    50%      { transform: scale(1.18); opacity: .55; }
  }
  .anim-o {
    display: inline-block;
    vertical-align: -2px;
    color: #fbbf24;
    animation: anim-o-pulse 1.3s ease-in-out infinite;
  }

  @keyframes anim-up-bounce {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-5px); }
  }
  .anim-up-arrow {
    display: inline-block;
    vertical-align: -3px;
    color: #a5b4fc;
    animation: anim-up-bounce 0.9s ease-in-out infinite;
  }

  @keyframes anim-plug-shake {
    0%, 100% { transform: rotate(0deg); }
    25%      { transform: rotate(-8deg); }
    75%      { transform: rotate(8deg); }
  }
  .anim-plug {
    display: inline-block;
    vertical-align: -2px;
    color: #f87171;
    transform-origin: 50% 15%;
    animation: anim-plug-shake 1s ease-in-out infinite;
  }

  .anim-computer {
    display: inline-block;
    vertical-align: -2px;
    color: #93c5fd;
  }
  @keyframes anim-computer-blink {
    0%, 100% { opacity: 1; }
    50%      { opacity: .2; }
  }
  .anim-computer-dot {
    animation: anim-computer-blink 1s ease-in-out infinite;
  }

  @keyframes anim-pleading-bounce {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-3px); }
  }
  .anim-pleading {
    display: inline-block;
    vertical-align: -3px;
    color: #fbbf24;
    animation: anim-pleading-bounce 1.1s ease-in-out infinite;
  }
`,qu=r.jsxs(r.Fragment,{children:["Type the course c",r.jsx(jv,{}),"de in the search bar above ",r.jsx(Cv,{})]});function Wu(e){var n;const t=Array.isArray(e)&&e||(e==null?void 0:e.folders)||((n=e==null?void 0:e.data)==null?void 0:n.folders)||Array.isArray(e==null?void 0:e.data)&&e.data||[];return Array.isArray(t)?t:[]}function Jh(){try{const e=localStorage.getItem("userInfo");return e?JSON.parse(e):null}catch{return null}}function Gu(e){try{const t=Jh()??{};localStorage.setItem("userInfo",JSON.stringify({...t,...e}))}catch{}}const Xh=u.createContext(null),Yu=["/contact","/about","/policy_and_terms","/login","/reset-password"];function Tv({children:e}){const t=ma(),n=ds(),[s,a]=u.useState(!0),[i,o]=u.useState(qu),[l,c]=u.useState(!1),[d,p]=u.useState([]),[m,f]=u.useState(0),[y,h]=u.useState(""),[x,k]=u.useState("https://notfound.com"),[w,g]=u.useState("https://notfound.com"),[b,j]=u.useState(""),[C,E]=u.useState(0),[S,N]=u.useState(""),[_,z]=u.useState(""),[B,ee]=u.useState(""),je=u.useRef(null),ne=u.useCallback(A=>{t(A?"/dashboard":"/")},[t]);u.useEffect(()=>{if(Yu.includes(n.pathname)){a(!1);return}const q=Jh();q&&Object.keys(q).length>0?(j(q.firstName??""),E(q.highestStreakScore??0),f(q.credits??0)):t("/login")},[n.pathname,t]),u.useEffect(()=>{const A=()=>{const q=Kn("userInfo");(q==null?void 0:q.credits)!==void 0&&f(q.credits)};return window.addEventListener("storage",A),()=>window.removeEventListener("storage",A)},[]),u.useEffect(()=>{let A=!1;async function q(){var O;if(Yu.includes(n.pathname)){a(!1);return}try{const D=await Pe(`${X}/api/v1/user/profile`,{method:"GET",headers:{"Content-Type":"application/json"}});if(A)return;const Z=((O=D==null?void 0:D.api_response)==null?void 0:O.data)??(D==null?void 0:D.data)??D??{},G=Z.firstName??"",Ve=Z.highestStreakScore??0;Object.keys(Z).length>0&&(Gu(Z),E(Ve),G&&j(G))}catch(D){if(A)return;D instanceof Nt&&t("/login")}finally{A||a(!1)}}return q(),()=>{A=!0}},[n.pathname,t]),u.useEffect(()=>{const A=B.trim();if(console.log("[search] effect run, find =",JSON.stringify(B)),A.length<wv){console.log("[search] query too short -> clearing payload"),p([]),c(!1);return}let q=!1;c(!0);const I=setTimeout(async()=>{try{console.log("[search] firing request for:",A);const O=await Pe(`${X}/api/v1/papers/folders?search=${encodeURIComponent(A)}&pageSize=30`,{method:"GET"});if(console.log("[search] raw res:",O),console.log("[search] extracted count:",Wu(O).length),q){console.warn("[search] result DISCARDED: effect was cancelled (find changed or component re-ran)");return}p(Wu(O)),o(qu)}catch(O){if(console.error("[search] request failed:",O),q)return;p([]),O instanceof Nt?t("/login"):o(r.jsxs(r.Fragment,{children:["Oops! Kindly check your internet connection ",r.jsx(Sv,{}),r.jsx(Nv,{}),r.jsx(_v,{})," (",O.message,")"]}))}finally{q||c(!1)}},kv);return()=>{console.log("[search] cleanup (cancelling) for:",A),q=!0,clearTimeout(I)}},[B,t]),u.useEffect(()=>{console.log("[search] payload now has",d.length,"items")},[d]);const Ce={loader:s,setloader:a,NetworkError:i,setNetworkError:o,refreshing:l,setRefreshing:c,payload:d,setpayload:p,credits:m,setcredits:f,dataerror:y,setdataerror:h,pdflink:x,setpdflink:k,actualDlink:w,setactualDlink:g,username:b,setusername:j,maxscore:C,setmaxscore:E,courseName:S,setcourseName:N,selectedVal:_,setselectedVal:z,find:B,setfind:ee,bar:je,setsearching:ne,writeStoredUser:Gu};return r.jsxs(Xh.Provider,{value:Ce,children:[r.jsx("style",{children:Ev}),e,r.jsx(bv,{})]})}function ef(){const e=u.useContext(Xh);if(!e)throw new Error("useAppContext must be used within an <AppProvider>");return e}const Qu=new Date("Jan 2, 2026 00:00:00").getTime();function Zu(e){if(e<=0)return null;const t=Math.floor(e/(1e3*60*60*24)),n=Math.floor(e%(1e3*60*60*24)/(1e3*60*60)),s=Math.floor(e%(1e3*60*60)/(1e3*60)),a=Math.floor(e%(1e3*60)/1e3);return`${t}d ${n}h ${s}m ${a}s left`}function zv(){m5();const{loader:e,find:t,setfind:n,username:s,setsearching:a,bar:i}=ef(),[o,l]=u.useState(!1),[c,d]=u.useState(""),[p,m]=u.useState(""),f=u.useRef(null),[y,h]=u.useState(()=>Zu(Qu-Date.now())),[x,k]=u.useState(null);u.useEffect(()=>{const g=b=>{var j;k(((j=b.detail)==null?void 0:j.reason)||"Your session has expired.")};return window.addEventListener("auth:session-expired",g),()=>window.removeEventListener("auth:session-expired",g)},[]),u.useEffect(()=>{if(!y)return;const g=setInterval(()=>{const b=Qu-Date.now(),j=Zu(b);j?h(j):(h(null),clearInterval(g))},1e3);return()=>clearInterval(g)},[]),u.useEffect(()=>{const g=`${new Date}`.split(" ");d(`${g[2]} ${g[1]} ${g[3]}`)},[]);const w=u.useCallback(async()=>{var b,j;const g=(j=(b=f.current)==null?void 0:b.value)==null?void 0:j.trim();if(g){l(!0),m("");try{await Pe(`${X}/api/v1/test-telegram/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:`💡 *New Suggestion*
${g}`})}),f.current&&(f.current.value=""),m("Thanks for the suggestion!")}catch(C){C instanceof Nt?m("Please sign in to send a suggestion."):m("Couldn't send that — try again.")}finally{l(!1),setTimeout(()=>m(""),3e3)}}},[]);return r.jsxs("div",{className:"page",children:[x&&r.jsx("div",{role:"alertdialog","aria-modal":"true",style:{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",padding:20},children:r.jsxs("div",{style:{background:"#1a1a1a",color:"whitesmoke",borderRadius:12,padding:"28px 24px",maxWidth:360,width:"100%",textAlign:"center",boxShadow:"0 10px 40px rgba(0,0,0,0.5)"},children:[r.jsx("div",{style:{fontSize:32,marginBottom:12},children:"🔒"}),r.jsx("div",{style:{fontWeight:600,marginBottom:6},children:"Session expired"}),r.jsxs("div",{style:{fontSize:14,opacity:.85,marginBottom:20},children:[x," Please sign in again to continue."]}),r.jsx("button",{type:"button",onClick:()=>location.reload(),style:{background:"whitesmoke",color:"#1a1a1a",border:"none",borderRadius:8,padding:"10px 24px",fontWeight:600,cursor:"pointer"},children:"Sign in"})]})}),r.jsxs("div",{className:"promo",style:{position:"relative",fontWeight:600},children:[r.jsx("span",{className:"inv-ico"}),y?r.jsxs(r.Fragment,{children:["Promotion ends in: ",r.jsx("p",{className:"ticket",children:y})]}):r.jsx(r.Fragment,{})]}),r.jsxs("div",{className:"landingpage",children:[r.jsxs("ul",{className:"mlist",children:[r.jsx("div",{className:"space"}),r.jsx("img",{className:"reglate2",src:on,alt:"UELearn logo"}),r.jsx(Re,{to:"/about",children:r.jsx("li",{children:"ABOUT"})}),r.jsx(Re,{to:"/contact",children:r.jsx("li",{children:"CONTACT"})}),r.jsx(Re,{to:"/dashboard/solutions",children:r.jsx("li",{title:"View your saved solutions",children:"SOLUTIONS"})}),r.jsx(Re,{to:"/payment",target:"_blank",rel:"noopener noreferrer",children:r.jsx("li",{children:"UPGRADE"})}),r.jsxs("div",{className:"rightmenu",children:[r.jsx(Eh,{setsearching:a,eprop:"none",setfind:n,find:t,bar:i}),r.jsx("div",{className:"space"}),r.jsx("div",{className:"onne"}),r.jsx("div",{className:"onne",title:s||"GUEST",children:r.jsx("div",{className:"dp",children:s?s.toUpperCase()[0]:"Go-pro"})})]})]}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"none",width:"16",height:"16",strokeWidth:"2",children:!e&&r.jsx("path",{d:"M12.784 1.442a.8.8 0 0 0-1.569 0l-.191.953a.8.8 0 0 1-.628.628l-.953.19a.8.8 0 0 0 0 1.57l.953.19a.8.8 0 0 1 .628.629l.19.953a.8.8 0 0 0 1.57 0l.19-.953a.8.8 0 0 1 .629-.628l.953-.19a.8.8 0 0 0 0-1.57l-.953-.19a.8.8 0 0 1-.628-.629l-.19-.953h-.002ZM5.559 4.546a.8.8 0 0 0-1.519 0l-.546 1.64a.8.8 0 0 1-.507.507l-1.64.546a.8.8 0 0 0 0 1.519l1.64.547a.8.8 0 0 1 .507.505l.546 1.641a.8.8 0 0 0 1.519 0l.546-1.64a.8.8 0 0 1 .506-.507l1.641-.546a.8.8 0 0 0 0-1.519l-1.64-.546a.8.8 0 0 1-.507-.506L5.56 4.546Zm5.6 6.4a.8.8 0 0 0-1.519 0l-.147.44a.8.8 0 0 1-.505.507l-.441.146a.8.8 0 0 0 0 1.519l.44.146a.8.8 0 0 1 .507.506l.146.441a.8.8 0 0 0 1.519 0l.147-.44a.8.8 0 0 1 .506-.507l.44-.146a.8.8 0 0 0 0-1.519l-.44-.147a.8.8 0 0 1-.507-.505l-.146-.441Z",fill:"currentColor"})})]}),r.jsxs("div",{className:"landingpage",children:[r.jsx("div",{className:"prehuge"}),r.jsxs("div",{className:"phuge",children:[r.jsx("img",{className:"huge fil",src:on,alt:""}),r.jsx("img",{className:"huge fil",src:on,alt:""}),r.jsx("div",{className:"ptext",children:r.jsx("svg",{viewBox:"0 0 525 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M30.5566 79.8779C22.832 79.8779 16.748 79.0405 12.3047 77.3657C7.86133 75.6567 4.69971 72.8198 2.81982 68.855C0.939941 64.856 0 59.4043 0 52.5V19.6875H9.89502V52.5C9.89502 56.3965 10.2026 59.6094 10.8179 62.1387C11.4673 64.6338 12.5952 66.582 14.2017 67.9834C15.8081 69.3506 18.064 70.3076 20.9692 70.8545C23.9087 71.4014 27.6855 71.6748 32.2998 71.6748C39.1357 71.6748 44.502 71.1108 48.3984 69.9829C52.2949 68.855 55.0464 67.0947 56.6528 64.7021C58.2935 62.2754 59.1138 59.1309 59.1138 55.2686V19.6875H68.9575V78.75H59.1138V70.9058C57.6782 72.8882 55.8667 74.5459 53.6792 75.8789C51.4917 77.2119 48.5693 78.2031 44.9121 78.8525C41.2549 79.5361 36.4697 79.8779 30.5566 79.8779ZM149.963 61.2158C149.963 65.625 149.297 69.0942 147.964 71.6235C146.665 74.1528 144.666 75.9985 141.965 77.1606C139.265 78.3228 135.813 79.0576 131.609 79.3652C127.439 79.707 122.466 79.8779 116.689 79.8779C110.093 79.8779 104.487 79.5361 99.873 78.8525C95.293 78.2031 91.5845 76.853 88.7476 74.8022C85.9448 72.7173 83.894 69.6069 82.5952 65.4712C81.3306 61.3354 80.6982 55.8154 80.6982 48.9111C80.6982 42.2119 81.3135 36.8457 82.5439 32.8125C83.8086 28.7793 85.8423 25.7373 88.645 23.6865C91.4478 21.6357 95.1221 20.2686 99.668 19.585C104.248 18.9014 109.836 18.5596 116.433 18.5596C123.987 18.5596 130.242 19.0894 135.198 20.1489C140.154 21.2085 143.845 23.2251 146.272 26.1987C148.733 29.1724 149.963 33.5303 149.963 39.2725V51.936H90.5933C90.6274 56.311 90.9351 59.8145 91.5161 62.4463C92.0972 65.0781 93.2593 67.0605 95.0024 68.3936C96.7456 69.7266 99.3433 70.6152 102.795 71.0596C106.282 71.4697 110.913 71.6748 116.689 71.6748C121.885 71.6748 126.072 71.5723 129.25 71.3672C132.463 71.1621 134.89 70.7178 136.531 70.0342C138.206 69.3164 139.333 68.2568 139.915 66.8555C140.496 65.4541 140.786 63.5742 140.786 61.2158H149.963ZM116.433 26.7627C110.862 26.7627 106.367 26.9678 102.949 27.3779C99.5654 27.7881 96.9849 28.5913 95.2075 29.7876C93.4302 30.9497 92.2168 32.6929 91.5674 35.0171C90.9521 37.3413 90.6274 40.4004 90.5933 44.1943H140.53V39.2725C140.53 36.8115 140.239 34.7778 139.658 33.1714C139.111 31.5308 138.018 30.249 136.377 29.3262C134.736 28.3691 132.31 27.7026 129.097 27.3267C125.918 26.9507 121.697 26.7627 116.433 26.7627ZM162.729 52.5V44.2969H202.104V52.5H162.729ZM218.511 78.75V0H228.354V78.75H218.511ZM312.385 61.2158C312.385 65.625 311.719 69.0942 310.386 71.6235C309.087 74.1528 307.087 75.9985 304.387 77.1606C301.687 78.3228 298.235 79.0576 294.031 79.3652C289.861 79.707 284.888 79.8779 279.111 79.8779C272.515 79.8779 266.909 79.5361 262.295 78.8525C257.715 78.2031 254.006 76.853 251.169 74.8022C248.367 72.7173 246.316 69.6069 245.017 65.4712C243.752 61.3354 243.12 55.8154 243.12 48.9111C243.12 42.2119 243.735 36.8457 244.966 32.8125C246.23 28.7793 248.264 25.7373 251.067 23.6865C253.87 21.6357 257.544 20.2686 262.09 19.585C266.67 18.9014 272.258 18.5596 278.855 18.5596C286.409 18.5596 292.664 19.0894 297.62 20.1489C302.576 21.2085 306.267 23.2251 308.694 26.1987C311.155 29.1724 312.385 33.5303 312.385 39.2725V51.936H253.015C253.049 56.311 253.357 59.8145 253.938 62.4463C254.519 65.0781 255.681 67.0605 257.424 68.3936C259.167 69.7266 261.765 70.6152 265.217 71.0596C268.704 71.4697 273.335 71.6748 279.111 71.6748C284.307 71.6748 288.494 71.5723 291.672 71.3672C294.885 71.1621 297.312 70.7178 298.953 70.0342C300.627 69.3164 301.755 68.2568 302.336 66.8555C302.917 65.4541 303.208 63.5742 303.208 61.2158H312.385ZM278.855 26.7627C273.284 26.7627 268.789 26.9678 265.371 27.3779C261.987 27.7881 259.407 28.5913 257.629 29.7876C255.852 30.9497 254.639 32.6929 253.989 35.0171C253.374 37.3413 253.049 40.4004 253.015 44.1943H302.952V39.2725C302.952 36.8115 302.661 34.7778 302.08 33.1714C301.533 31.5308 300.439 30.249 298.799 29.3262C297.158 28.3691 294.731 27.7026 291.519 27.3267C288.34 26.9507 284.119 26.7627 278.855 26.7627ZM356.323 79.8779C349.248 79.8779 343.403 79.502 338.789 78.75C334.209 78.0322 330.791 76.4258 328.535 73.9307C326.313 71.4355 325.203 67.5562 325.203 62.2925C325.203 56.9263 326.245 52.9956 328.33 50.5005C330.449 47.9712 333.782 46.3306 338.328 45.5786C342.908 44.8267 348.906 44.4507 356.323 44.4507C362.339 44.4507 367.38 44.5874 371.448 44.8608C375.515 45.1343 379.155 45.6128 382.368 46.2964C382.3 41.7505 381.992 38.1787 381.445 35.5811C380.898 32.9492 379.873 31.001 378.369 29.7363C376.865 28.4717 374.661 27.6685 371.755 27.3267C368.884 26.9507 365.056 26.7627 360.271 26.7627C354.802 26.7627 350.513 26.8823 347.402 27.1216C344.326 27.3608 342.087 27.7881 340.686 28.4033C339.285 29.0186 338.396 29.9072 338.02 31.0693C337.678 32.2314 337.507 33.7354 337.507 35.5811H327.664C327.664 31.8896 328.159 28.916 329.15 26.6602C330.176 24.4043 331.902 22.6953 334.329 21.5332C336.755 20.3711 340.071 19.585 344.275 19.1748C348.513 18.7646 353.845 18.5596 360.271 18.5596C367.175 18.5596 372.729 19.0039 376.934 19.8926C381.172 20.7812 384.385 22.3877 386.572 24.7119C388.794 27.002 390.281 30.2148 391.033 34.3506C391.819 38.4863 392.212 43.8184 392.212 50.3467V78.75H382.368V74.6997C381.206 75.9302 379.6 76.9214 377.549 77.6733C375.498 78.4253 372.764 78.9722 369.346 79.314C365.962 79.6899 361.621 79.8779 356.323 79.8779ZM356.323 71.8799C362.168 71.8799 366.833 71.8115 370.32 71.6748C373.806 71.5381 376.404 71.1621 378.113 70.5469C379.856 69.9316 381.001 68.9404 381.548 67.5732C382.095 66.2061 382.368 64.292 382.368 61.8311V52.7563L356.323 52.4487C351.709 52.3804 347.983 52.4487 345.146 52.6538C342.344 52.8247 340.208 53.2349 338.738 53.8843C337.268 54.4995 336.277 55.4907 335.764 56.8579C335.286 58.1909 335.046 60.0024 335.046 62.2925C335.046 64.5142 335.286 66.2744 335.764 67.5732C336.277 68.8721 337.268 69.8291 338.738 70.4443C340.208 71.0596 342.344 71.4526 345.146 71.6235C347.983 71.7944 351.709 71.8799 356.323 71.8799ZM406.157 78.75V19.6875H416.001V27.8394C417.095 26.0962 418.188 24.6436 419.282 23.4814C420.41 22.3193 421.863 21.3965 423.64 20.7129C425.452 20.0293 427.896 19.5508 430.972 19.2773C434.048 18.9697 438.098 18.8159 443.123 18.8159V27.0703C436.355 27.0703 431.108 27.3096 427.383 27.7881C423.691 28.2666 421.042 29.0869 419.436 30.249C417.83 31.377 416.855 32.9492 416.514 34.9658C416.172 36.9824 416.001 39.5459 416.001 42.6562V78.75H406.157ZM455.889 78.75V19.6875H465.732V27.5317C467.202 25.5493 469.014 23.8916 471.167 22.5586C473.354 21.2256 476.26 20.2344 479.883 19.585C483.54 18.9014 488.325 18.5596 494.238 18.5596C501.963 18.5596 508.047 19.3115 512.49 20.8154C516.968 22.3193 520.146 25.0024 522.026 28.8647C523.906 32.7271 524.846 38.1958 524.846 45.271V78.75H514.951V45.271C514.951 41.2378 514.609 37.9907 513.926 35.5298C513.242 33.0688 512.063 31.2061 510.388 29.9414C508.748 28.6768 506.475 27.8394 503.569 27.4292C500.664 26.9849 496.973 26.7627 492.495 26.7627C485.659 26.7627 480.293 27.3267 476.396 28.4546C472.5 29.5825 469.749 31.3599 468.142 33.7866C466.536 36.1792 465.732 39.3066 465.732 43.1689V78.75H455.889Z",fill:"white"})})})]})]}),r.jsxs("div",{className:"slideme",children:[r.jsxs("div",{className:"slideitem",children:[r.jsxs("div",{className:"slideitemhead",children:[r.jsx("div",{className:"fnav",children:"❔"}),"Questions"]}),r.jsxs("div",{className:"slideitembody",children:[r.jsx("div",{className:"slideb1",children:r.jsx("p",{children:"Click the 🔍☝️search box and type your course code"})}),r.jsx("div",{className:"slideb2",children:r.jsx("img",{width:"110",src:_h,alt:"Past Questions"})})]})]}),r.jsxs("div",{className:"slideitem",children:[r.jsxs("div",{className:"slideitemhead",children:[r.jsx("div",{className:"fnav",children:"♟️"}),"Strategy"]}),r.jsxs("div",{className:"slideitembody",children:[r.jsx("div",{className:"slideb1",children:r.jsx("p",{children:"Increased retention with psychological learning concepts"})}),r.jsx("div",{className:"slideb2",children:r.jsx("img",{width:"110",src:Sh,alt:"Strategy"})})]})]}),r.jsxs("div",{className:"slideitem",children:[r.jsxs("div",{className:"slideitemhead",children:[r.jsx("div",{className:"fnav",children:"📖"}),"Revision"]}),r.jsxs("div",{className:"slideitembody",children:[r.jsx("div",{className:"slideb1",children:r.jsx("p",{children:"Practice with our browser extension"})}),r.jsx("div",{className:"slideb2",children:r.jsx("img",{width:"110",src:Nh,alt:"Revision"})})]})]})]}),r.jsx(R5,{}),r.jsx("br",{}),r.jsx("div",{className:"tel",children:r.jsx(O5,{})}),r.jsx(ss,{opacity:e?1:0,indexed:e?100:-100,mainlogo:on}),r.jsx("div",{className:"scrldn",children:r.jsx("div",{className:"scrd"})}),r.jsxs("div",{className:"footer",children:[r.jsxs("div",{className:"foot1",children:[r.jsx("img",{className:"brands",title:"uelearn",src:on,alt:"UELearn"}),r.jsx("img",{className:"brands",title:"unityelites.com",src:g5,alt:"Unity Elites"}),r.jsx("img",{className:"brands",title:"myfolder.space",src:x5,alt:"MyFolder"})]}),r.jsxs("div",{className:"foot1",children:[r.jsxs("a",{href:"https://unityelites.com",target:"_blank",rel:"noopener noreferrer",className:"foot2",children:[r.jsx("div",{className:"fnav",children:"⚙️"})," Developed by Unity Elites"]}),r.jsxs("a",{href:"https://myfolder.space",target:"_blank",rel:"noopener noreferrer",className:"foot2",children:[r.jsx("div",{className:"fnav",children:"💦"})," resource by Myfolder.space"]})]}),r.jsx("div",{className:"foot1",children:r.jsxs("div",{className:"twwo",title:"Make a suggestion",children:[r.jsx("div",{className:"search",children:o?r.jsx("img",{src:Ch,className:"spinner",width:200,alt:"Sending…"}):r.jsx("span",{className:"fnav",style:{width:30,margin:5,height:30},children:r.jsx("i",{className:"fa fa-cloud",style:{fontSize:10,color:"whitesmoke"}})})}),r.jsx("div",{className:"input",children:r.jsx("input",{ref:f,type:"text",className:"find",placeholder:"Make a suggestion",onKeyDown:g=>{g.key==="Enter"&&w()}})}),r.jsx("div",{className:"slash",onClick:w,children:r.jsx("svg",{className:"sendarrow",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"none",strokeWidth:"2",children:r.jsx("path",{d:"M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z",fill:"white"})})}),p&&r.jsx("div",{style:{fontSize:11,color:"whitesmoke",marginTop:4,textAlign:"center"},children:p})]})})]}),r.jsx(H1,{cname:"navbottom",active:"home"})]})}const Pv=`
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
`,Iv=["Web Development","Mobile Apps","Frontend","Backend","Ecommerce","Sales Systems","Advertising","UI/UX Design"];function Rv(){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Pv}),r.jsxs("div",{className:"amb-root",children:[r.jsx("div",{className:"amb-orb amb-orb-1"}),r.jsx("div",{className:"amb-orb amb-orb-2"}),r.jsx("div",{className:"amb-orb amb-orb-3"}),r.jsx(Re,{to:"/",className:"amb-back",children:r.jsx("i",{className:"fa fa-arrow-left"})}),r.jsxs("div",{className:"amb-card",children:[r.jsxs("div",{className:"amb-badge",children:[r.jsx("div",{className:"amb-badge-dot"}),"Who we are"]}),r.jsxs("h1",{className:"amb-headline",children:["We build ",r.jsx("span",{children:"digital experiences"})," that matter."]}),r.jsx("p",{className:"amb-desc",children:"Unity Elites is a team of developers crafting elegant, high-performance digital products — from sleek frontends to robust backend systems and everything in between."}),r.jsx("div",{className:"amb-pills",children:Iv.map(e=>r.jsx("div",{className:"amb-pill",children:e},e))}),r.jsx("div",{className:"amb-divider"}),r.jsxs("a",{className:"amb-cta",href:"https://benasdom.github.io/ue",target:"_blank",rel:"noopener noreferrer",children:["Visit Unity Elites ",r.jsx("span",{className:"amb-cta-arrow",children:"→"})]})]}),r.jsx(H1,{active:"about"})]})]})}const Ov=`
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
`;function $v(){const[e,t]=u.useState(!1),[n,s]=u.useState(!1),[a,i]=u.useState({name:"",email:"",phone:"",message:""}),o=d=>{s(d),setTimeout(()=>s(!1),3e3)},l=async()=>{if(Object.values(a).some(d=>!d.trim())){o("Please fill in all fields.");return}t(!0);try{const d=`📩 *New Contact Form Submission*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${a.name}
✉️ *Email:* ${a.email}
📞 *Phone:* ${a.phone}
━━━━━━━━━━━━━━━━━━━━
💬 *Message:*
${a.message}`;await Pe(`${X}/api/v1/test-telegram/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:d})}),o("Message sent successfully!"),i({name:"",email:"",phone:"",message:""})}catch(d){d instanceof Nt?o("Please sign in to send a message."):o("Failed to send. Please try again.")}t(!1)},c=d=>p=>i(m=>({...m,[d]:p.target.value}));return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:Ov}),r.jsxs("div",{className:"amb-root",children:[r.jsx("div",{className:"amb-orb amb-orb-1"}),r.jsx("div",{className:"amb-orb amb-orb-2"}),r.jsx("div",{className:"amb-orb amb-orb-3"}),r.jsx("div",{className:`amb-toast${n?" show":""}`,children:n}),r.jsx(Re,{to:"/",className:"amb-back",children:r.jsx("i",{className:"fa fa-arrow-left"})}),r.jsxs("div",{className:"amb-card",children:[r.jsxs("div",{className:"amb-badge",children:[r.jsx("div",{className:"amb-badge-dot"}),"Get in touch"]}),r.jsxs("h1",{className:"amb-headline",children:["Let's ",r.jsx("span",{children:"work together."})]}),r.jsx("p",{className:"amb-subtext",children:"Have a project in mind? Drop us a message and we'll get back to you shortly."}),r.jsxs("div",{className:"amb-fields",children:[r.jsxs("div",{className:"amb-field",children:[r.jsx("span",{className:"amb-field-prefix",children:"✦"}),r.jsx("input",{className:"amb-input",placeholder:"Your name",value:a.name,onChange:c("name")})]}),r.jsxs("div",{className:"amb-field",children:[r.jsx("span",{className:"amb-field-prefix",children:"@"}),r.jsx("input",{className:"amb-input",placeholder:"Email address",type:"email",value:a.email,onChange:c("email")})]}),r.jsxs("div",{className:"amb-field",children:[r.jsx("span",{className:"amb-field-prefix",children:"#"}),r.jsx("input",{className:"amb-input",placeholder:"Phone number",type:"tel",value:a.phone,onChange:c("phone")})]}),r.jsxs("div",{className:"amb-field amb-textarea-wrap",children:[r.jsx("span",{className:"amb-field-prefix",children:"✉"}),r.jsx("textarea",{className:"amb-textarea",placeholder:"Your message...",value:a.message,onChange:c("message")})]})]}),r.jsx("button",{className:"amb-submit",onClick:l,disabled:e,children:e?r.jsx("img",{src:Ch,className:"amb-spinner",alt:"sending"}):r.jsx(r.Fragment,{children:"Send Message  →"})})]}),r.jsx(H1,{active:"contact"})]})]})}const Lv=()=>{const e=ds(),t=(e==null?void 0:e.pathname)||"/unknown";return r.jsx("div",{className:"nf-page",children:r.jsxs("div",{className:"nf-card",children:[r.jsx("div",{className:"nf-dotgrid","aria-hidden":"true"}),r.jsx("div",{className:"nf-glow","aria-hidden":"true"}),r.jsxs("p",{className:"nf-eyebrow",children:["GET ",t," ",r.jsx("span",{className:"nf-eyebrow-status",children:"→ 404"})]}),r.jsxs("div",{className:"nf-diagram",role:"img","aria-label":`No route found from your current position to ${t}`,children:[r.jsxs("svg",{viewBox:"0 0 640 140",className:"nf-diagram-svg",preserveAspectRatio:"xMidYMid meet",children:[r.jsx("line",{x1:"80",y1:"70",x2:"258",y2:"70",className:"nf-line nf-line-active"}),r.jsx("line",{x1:"382",y1:"70",x2:"560",y2:"70",className:"nf-line nf-line-dim"}),r.jsx("circle",{cx:"50",cy:"70",r:"7",className:"nf-node nf-node-active"}),r.jsx("circle",{cx:"590",cy:"70",r:"7",className:"nf-node nf-node-dim"}),r.jsx("text",{x:"50",y:"102",className:"nf-node-label nf-node-label-active",children:"YOU"}),r.jsx("text",{x:"590",y:"102",className:"nf-node-label nf-node-label-dim",children:"HOME"})]}),r.jsxs("div",{className:"nf-badge",children:[r.jsx("span",{className:"nf-badge-ring","aria-hidden":"true"}),"404"]})]}),r.jsx("h1",{className:"nf-heading",children:"This route doesn't exist"}),r.jsx("p",{className:"nf-subtitle",children:"We couldn't find a path to that page. It may have been moved, renamed, or never existed."}),r.jsxs("div",{className:"nf-actions",children:[r.jsx(Re,{to:"/",className:"nf-cta",children:"Take me home"}),r.jsx("button",{type:"button",className:"nf-ghost-btn",onClick:()=>window.history.back(),children:"Go back"})]})]})})};function jc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,s=Array(t);n<t;n++)s[n]=e[n];return s}function tf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ku(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,af(s.key),s)}}function nf(e,t,n){return t&&Ku(e.prototype,t),n&&Ku(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function rf(e,t,n){return(t=af(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ju(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,s)}return n}function ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ju(Object(n),!0).forEach(function(s){rf(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ju(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Cc(e,t){if(e==null)return{};var n,s,a=function(o,l){if(o==null)return{};var c={};for(var d in o)if({}.hasOwnProperty.call(o,d)){if(l.indexOf(d)!==-1)continue;c[d]=o[d]}return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Av(e,t){return function(n){if(Array.isArray(n))return n}(e)||function(n,s){var a=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var i,o,l,c,d=[],p=!0,m=!1;try{if(l=(a=a.call(n)).next,s===0){if(Object(a)!==a)return;p=!1}else for(;!(p=(i=l.call(a)).done)&&(d.push(i.value),d.length!==s);p=!0);}catch(f){m=!0,o=f}finally{try{if(!p&&a.return!=null&&(c=a.return(),Object(c)!==c))return}finally{if(m)throw o}}return d}}(e,t)||of(e,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function sf(e){return function(t){if(Array.isArray(t))return jc(t)}(e)||function(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||of(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function af(e){var t=function(n,s){if(typeof n!="object"||!n)return n;var a=n[Symbol.toPrimitive];if(a!==void 0){var i=a.call(n,s||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(n)}(e,"string");return typeof t=="symbol"?t:t+""}function jr(e){return jr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jr(e)}function of(e,t){if(e){if(typeof e=="string")return jc(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?jc(e,t):void 0}}var U1={cookieTestUrl:"https://legacy-staging.paystack.co/test-iframe/start.html",publishableKey:"uFmz/uE/SDT6GupOrSEXIZXGByjQ0zFkPyc9LqKHFqnTI0WPN3JS5kQPo/j9or0TOXlqMQj2lzHn/UGsQT4XeQ==",publicKey:`-----BEGIN PUBLIC KEY-----\r
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALhZs/7hP0g0+hrqTq0hFyGVxgco0NMx\r
ZD8nPS6ihxap0yNFjzdyUuZED6P4/aK9Ezl5ajEI9pcx5/1BrEE+F3kCAwEAAQ==\r
-----END PUBLIC KEY-----`,applePayVersion:6,applePayValidateSessionPath:"applepay/validate-session/",applePayChargePath:"applepay/charge"},Mv=ze(ze({},U1),{},{checkoutUrl:"http://localhost:8081/",paymentBaseUrl:"https://legacy-staging.paystack.co/",paystackApiUrl:"https://studio-api.paystack.co/",siteUrl:"https://paystack.com",pusherKey:"1c7b262ee18455815893",pusherUrl:"http://localhost:8081/static/vendor/pusher.min.js"}),Xu=ze(ze({},U1),{},{checkoutUrl:"https://checkout-studio.paystack.com/",paymentBaseUrl:"https://legacy-staging.paystack.co/",paystackApiUrl:"https://studio-api.paystack.co/",siteUrl:"https://beta.paystack.com",pusherKey:"1c7b262ee18455815893",pusherUrl:"https://checkout-studio.paystack.com/static/vendor/pusher.min.js"}),pt={dev:Mv,staging:Xu,production:ze(ze({},U1),{},{checkoutUrl:"https://checkout.paystack.com/",paymentBaseUrl:"https://standard.paystack.co/",paystackApiUrl:"https://api.paystack.co/",siteUrl:"https://paystack.com",pusherKey:"8e4b9b7ca3418bd5cdc8",pusherUrl:"https://checkout.paystack.com/static/vendor/pusher.min.js"})}.production||Xu;function lf(e,t){var n=[];return Object.keys(e).forEach(function(s){var a=t?"".concat(t,"[").concat(s,"]"):s,i=e[a];n.push(i!==null&&(typeof v>"u"?"undefined":jr(v))==="object"?lf(i,a):"".concat(encodeURIComponent(s),"=").concat(encodeURIComponent(i)))}),n.join("&")}function Ir(){return document.currentScript||(e=document.getElementsByTagName("script"))[e.length-1];var e}function e0(){var e=[],t=Ir();if(t){var n=Array.prototype.slice.call(t.attributes);e=Object.keys(n).filter(function(s){var a=n[s].nodeName;return a&&a.indexOf("data")>-1}).map(function(s){return n[s].nodeName})}return e}var cf=`
  <svg id="inline-button-wordmark--white" width="137" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M.037 5.095l1.075-.135c-.011-.774-.025-1.944-.013-2.149C1.19 1.364 2.38.134 3.81.013 3.9.006 3.99.002 4.077 0a2.947 2.947 0 0 1 2.046.76c.574.509.95 1.26 1.008 2.007.015.192.01 1.491.01 2.257l1.096.163L8.2 11.44 4.093 12 0 11.346l.037-6.251zm4.106-.514l1.724.256c-.007-.933-.05-2.295-.26-2.654-.319-.545-.846-.867-1.443-.88h-.063c-.607.008-1.138.322-1.458.864-.222.378-.266 1.66-.265 2.637l1.765-.223zM18.228 10.108c-.576 0-1.064-.072-1.464-.216a2.864 2.864 0 0 1-.972-.6 2.552 2.552 0 0 1-.588-.864 4.067 4.067 0 0 1-.252-1.044h1.008c.032.256.088.5.168.732.08.224.204.424.372.6.168.168.388.304.66.408.28.096.636.144 1.068.144.28 0 .536-.036.768-.108.24-.08.448-.192.624-.336.176-.144.312-.316.408-.516.104-.2.156-.42.156-.66 0-.24-.032-.448-.096-.624a1.02 1.02 0 0 0-.336-.468 1.885 1.885 0 0 0-.636-.324 6.4 6.4 0 0 0-1.008-.228 8.79 8.79 0 0 1-1.212-.276 3.246 3.246 0 0 1-.9-.432 1.982 1.982 0 0 1-.564-.672c-.128-.272-.192-.6-.192-.984 0-.328.068-.632.204-.912.136-.288.324-.536.564-.744.248-.208.54-.372.876-.492.336-.12.708-.18 1.116-.18.864 0 1.548.204 2.052.612.512.4.812.984.9 1.752h-.936c-.104-.544-.316-.932-.636-1.164-.32-.24-.78-.36-1.38-.36-.592 0-1.04.132-1.344.396a1.255 1.255 0 0 0-.444.996c0 .208.024.396.072.564.056.16.156.3.3.42.152.12.36.228.624.324a6.72 6.72 0 0 0 1.068.228c.48.072.9.168 1.26.288.36.12.664.276.912.468s.432.428.552.708c.128.28.192.624.192 1.032 0 .36-.076.696-.228 1.008a2.472 2.472 0 0 1-.612.804c-.264.224-.58.4-.948.528-.36.128-.752.192-1.176.192zM25.355 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM32.091 10.108c-.44 0-.848-.072-1.224-.216a3.054 3.054 0 0 1-.972-.636 3.12 3.12 0 0 1-.648-1.008 3.626 3.626 0 0 1-.228-1.32v-.096c0-.48.08-.916.24-1.308.16-.4.376-.74.648-1.02.28-.28.604-.496.972-.648.376-.16.772-.24 1.188-.24.328 0 .644.04.948.12.312.08.588.208.828.384.248.168.456.392.624.672.168.28.276.62.324 1.02h-.984c-.08-.496-.284-.848-.612-1.056-.32-.208-.696-.312-1.128-.312a1.93 1.93 0 0 0-.804.168c-.24.112-.452.272-.636.48a2.23 2.23 0 0 0-.42.744 2.991 2.991 0 0 0-.156.996v.096c0 .776.188 1.364.564 1.764.384.392.88.588 1.488.588.224 0 .436-.032.636-.096a1.651 1.651 0 0 0 .96-.768c.112-.192.18-.416.204-.672h.924a2.595 2.595 0 0 1-.276.948 2.386 2.386 0 0 1-.576.744c-.24.208-.52.372-.84.492-.32.12-.668.18-1.044.18zM38.335 10.108a2.83 2.83 0 0 1-.876-.132 1.724 1.724 0 0 1-.684-.42 2.145 2.145 0 0 1-.456-.756c-.112-.304-.168-.672-.168-1.104V3.724h.996v3.924c0 .552.116.956.348 1.212.24.256.608.384 1.104.384.224 0 .44-.036.648-.108.208-.072.392-.18.552-.324.16-.144.288-.324.384-.54.096-.216.144-.464.144-.744V3.724h.996V10h-.996v-.996c-.144.296-.388.556-.732.78-.336.216-.756.324-1.26.324zM43.216 3.724h.996v1.128c.2-.352.452-.64.756-.864.312-.232.748-.356 1.308-.372v.936a4.461 4.461 0 0 0-.852.12 1.647 1.647 0 0 0-.66.324 1.472 1.472 0 0 0-.408.612c-.096.248-.144.564-.144.948V10h-.996V3.724zM50 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM56.496 10.108c-.408 0-.788-.068-1.14-.204a2.683 2.683 0 0 1-.9-.612 3.01 3.01 0 0 1-.588-.984 4.01 4.01 0 0 1-.204-1.32v-.096c0-.48.072-.92.216-1.32.144-.4.344-.744.6-1.032.256-.296.564-.524.924-.684.36-.16.756-.24 1.188-.24.528 0 .956.112 1.284.336.328.216.584.476.768.78V.724h.996V10h-.996V8.92c-.088.152-.208.3-.36.444a2.792 2.792 0 0 1-.516.384 2.874 2.874 0 0 1-.6.252c-.216.072-.44.108-.672.108zm.108-.828c.288 0 .56-.048.816-.144.256-.096.476-.24.66-.432.184-.2.328-.448.432-.744.112-.304.168-.656.168-1.056v-.096c0-.808-.18-1.404-.54-1.788-.352-.384-.836-.576-1.452-.576-.624 0-1.112.208-1.464.624-.352.416-.528 1.008-.528 1.776v.096c0 .392.048.736.144 1.032.104.296.24.54.408.732.176.192.38.336.612.432.232.096.48.144.744.144zM67.712 10.108c-.512 0-.948-.112-1.308-.336a2.38 2.38 0 0 1-.816-.804V10h-.996V.724h.996V4.78a1.92 1.92 0 0 1 .348-.432c.152-.144.32-.268.504-.372.192-.112.396-.2.612-.264.216-.064.436-.096.66-.096.408 0 .788.072 1.14.216.352.144.652.352.9.624.256.272.456.604.6.996.144.392.216.832.216 1.32v.096c0 .48-.068.92-.204 1.32a3.103 3.103 0 0 1-.576 1.02 2.583 2.583 0 0 1-.9.672 2.937 2.937 0 0 1-1.176.228zm-.096-.828c.624 0 1.1-.2 1.428-.6.328-.408.492-.996.492-1.764V6.82c0-.4-.052-.748-.156-1.044a2.095 2.095 0 0 0-.42-.732 1.53 1.53 0 0 0-.612-.444 1.798 1.798 0 0 0-.744-.156c-.288 0-.56.048-.816.144a1.71 1.71 0 0 0-.648.444c-.184.192-.328.44-.432.744a3.152 3.152 0 0 0-.156 1.044v.096c0 .8.192 1.396.576 1.788.384.384.88.576 1.488.576zM73.63 9.352l-2.46-5.628h1.068l1.92 4.5 1.74-4.5h1.02l-3.468 8.46h-1.008l1.188-2.832zM87.127 3.669A3.138 3.138 0 0 0 86.1 2.95a3.09 3.09 0 0 0-1.228-.25c-.448 0-.848.086-1.187.26a2.199 2.199 0 0 0-.662.497v-.191a.387.387 0 0 0-.214-.348.323.323 0 0 0-.14-.03h-1.315a.314.314 0 0 0-.254.116.377.377 0 0 0-.1.262v8.97c0 .1.034.188.1.258a.34.34 0 0 0 .254.103h1.341a.342.342 0 0 0 .244-.103.336.336 0 0 0 .11-.259v-3.06c.178.202.417.357.702.464.35.134.72.203 1.093.203.43 0 .848-.082 1.242-.248a3.124 3.124 0 0 0 1.04-.724c.305-.326.545-.709.707-1.128a3.93 3.93 0 0 0 .263-1.477c0-.54-.086-1.037-.263-1.477a3.387 3.387 0 0 0-.706-1.12zm-1.204 3.24c-.073.19-.18.362-.315.51a1.415 1.415 0 0 1-1.065.466c-.2.001-.4-.04-.584-.12a1.484 1.484 0 0 1-.49-.346 1.593 1.593 0 0 1-.32-.51 1.738 1.738 0 0 1-.115-.63c0-.224.04-.435.115-.631a1.532 1.532 0 0 1 .804-.846c.185-.086.386-.13.59-.129.215 0 .414.044.593.13.177.083.338.199.474.341a1.622 1.622 0 0 1 .425 1.135c0 .225-.037.436-.112.63zM95.298 2.89h-1.33a.339.339 0 0 0-.246.11.384.384 0 0 0-.108.266v.166a1.856 1.856 0 0 0-.602-.472 2.525 2.525 0 0 0-1.166-.258 3.227 3.227 0 0 0-2.284.964 3.554 3.554 0 0 0-.734 1.123 3.827 3.827 0 0 0-.275 1.477c0 .54.092 1.037.275 1.477.184.434.427.817.728 1.128a3.146 3.146 0 0 0 2.277.973c.437 0 .834-.088 1.173-.259.25-.13.456-.287.608-.471v.177a.34.34 0 0 0 .11.259.341.341 0 0 0 .244.104h1.33a.324.324 0 0 0 .25-.105.349.349 0 0 0 .102-.258V3.267a.377.377 0 0 0-.1-.262.325.325 0 0 0-.252-.115zM93.502 6.9a1.55 1.55 0 0 1-.312.511c-.136.143-.296.26-.473.344-.178.085-.38.129-.596.129-.207 0-.407-.044-.59-.13a1.501 1.501 0 0 1-.791-.855 1.766 1.766 0 0 1-.112-.62c0-.225.038-.436.112-.632.075-.193.181-.364.314-.504.137-.143.3-.26.478-.342.182-.085.382-.129.59-.129.215 0 .417.044.595.13.178.085.338.2.473.341a1.623 1.623 0 0 1 .424 1.135c0 .215-.037.424-.112.622zM108.567 6.094a2.265 2.265 0 0 0-.654-.402c-.247-.101-.509-.181-.785-.235l-1.014-.204c-.26-.05-.441-.117-.543-.203a.328.328 0 0 1-.136-.264c0-.11.063-.2.189-.282.137-.086.329-.13.566-.13.26 0 .518.053.757.157.243.106.471.226.67.36.295.187.546.162.727-.053l.487-.57a.543.543 0 0 0 .152-.357c0-.128-.064-.245-.185-.351-.207-.184-.533-.378-.971-.568-.437-.192-.987-.29-1.637-.29-.427 0-.82.058-1.168.172-.35.116-.65.276-.893.474-.245.204-.438.44-.57.713a2 2 0 0 0-.198.875c0 .56.167 1.017.496 1.358.328.333.766.56 1.304.67l1.054.232c.3.062.528.132.675.21.129.067.19.163.19.297 0 .12-.061.227-.188.324-.133.104-.342.155-.622.155a1.83 1.83 0 0 1-.831-.19 3.056 3.056 0 0 1-.678-.458.995.995 0 0 0-.307-.17c-.126-.037-.268.003-.431.13l-.583.461c-.169.145-.24.32-.209.522.029.194.19.394.491.62.269.193.614.368 1.029.518.415.151.901.229 1.453.229.444 0 .854-.058 1.215-.172.362-.119.681-.278.941-.48a2.056 2.056 0 0 0 .819-1.663c0-.319-.053-.6-.165-.836a1.843 1.843 0 0 0-.447-.6zM114.383 7.73a.363.363 0 0 0-.295-.192.55.55 0 0 0-.343.113c-.095.062-.198.11-.306.141a.75.75 0 0 1-.426.013.43.43 0 0 1-.181-.093.554.554 0 0 1-.143-.204.92.92 0 0 1-.059-.362v-2.46h1.731c.099 0 .188-.04.266-.117a.368.368 0 0 0 .112-.26V3.268a.369.369 0 0 0-.115-.268.38.38 0 0 0-.263-.109h-1.732V1.216a.354.354 0 0 0-.108-.27.347.347 0 0 0-.243-.104h-1.344a.36.36 0 0 0-.34.226.371.371 0 0 0-.027.148V2.89h-.767a.324.324 0 0 0-.255.115.385.385 0 0 0-.098.262V4.31a.4.4 0 0 0 .212.346c.044.021.092.032.14.03h.768v2.925c0 .39.069.726.2 1.003.132.274.305.504.514.676.217.178.465.31.731.388.27.084.551.126.833.126.385 0 .75-.061 1.094-.18a2.13 2.13 0 0 0 .861-.552c.152-.181.17-.381.046-.581l-.463-.76zM121.672 2.89h-1.329a.339.339 0 0 0-.244.11.39.39 0 0 0-.08.122.394.394 0 0 0-.027.144v.166a1.906 1.906 0 0 0-.605-.472c-.335-.173-.726-.258-1.168-.258-.42 0-.834.083-1.226.249a3.24 3.24 0 0 0-1.055.715 3.528 3.528 0 0 0-.734 1.123 3.79 3.79 0 0 0-.276 1.477c0 .54.092 1.037.275 1.477.184.434.428.817.729 1.128a3.138 3.138 0 0 0 2.273.973 2.59 2.59 0 0 0 1.175-.259c.255-.13.457-.287.612-.471v.177a.34.34 0 0 0 .108.259.343.343 0 0 0 .243.104h1.329a.335.335 0 0 0 .252-.105.364.364 0 0 0 .102-.258V3.267a.38.38 0 0 0-.1-.262.332.332 0 0 0-.115-.087.311.311 0 0 0-.139-.028zM119.876 6.9a1.534 1.534 0 0 1-.786.855 1.362 1.362 0 0 1-.594.129c-.207 0-.405-.044-.588-.13a1.516 1.516 0 0 1-.792-.855 1.757 1.757 0 0 1-.113-.62c0-.225.037-.436.112-.632.073-.187.179-.358.314-.504.138-.143.3-.26.479-.342.184-.086.385-.13.588-.129.217 0 .415.044.594.13.181.085.34.2.472.341.134.143.24.313.314.504a1.73 1.73 0 0 1 0 1.253zM128.978 7.64l-.763-.593c-.146-.118-.284-.15-.404-.1a.742.742 0 0 0-.279.205 2.527 2.527 0 0 1-.583.535c-.192.122-.444.183-.742.183-.219 0-.42-.04-.6-.122a1.423 1.423 0 0 1-.469-.342 1.575 1.575 0 0 1-.308-.51 1.751 1.751 0 0 1-.106-.617c0-.228.034-.438.106-.632.07-.192.173-.363.308-.503.135-.144.295-.26.472-.342.187-.088.391-.132.597-.13.298 0 .547.064.742.187.198.126.396.306.584.534.078.092.17.16.278.206.122.048.259.016.401-.101l.762-.594a.53.53 0 0 0 .201-.269.437.437 0 0 0-.034-.365 3.329 3.329 0 0 0-1.18-1.127c-.504-.291-1.108-.441-1.784-.441a3.519 3.519 0 0 0-2.51 1.033c-.322.322-.576.71-.747 1.137a3.68 3.68 0 0 0-.273 1.407c0 .495.093.968.273 1.402.173.424.427.808.747 1.128a3.527 3.527 0 0 0 2.51 1.034c.676 0 1.28-.149 1.784-.444a3.286 3.286 0 0 0 1.182-1.13.411.411 0 0 0 .055-.173.415.415 0 0 0-.023-.182.624.624 0 0 0-.197-.273zM136.06 9.045l-2.104-3.143 1.801-2.415c.094-.139.119-.272.075-.397-.031-.09-.116-.2-.334-.2h-1.425a.52.52 0 0 0-.234.058.482.482 0 0 0-.209.205L132.191 5.2h-.349V.363a.37.37 0 0 0-.099-.26.352.352 0 0 0-.253-.103h-1.332a.37.37 0 0 0-.337.22.346.346 0 0 0-.027.143V9.29c0 .103.038.193.11.259a.353.353 0 0 0 .254.104h1.333a.328.328 0 0 0 .251-.105.346.346 0 0 0 .075-.119.333.333 0 0 0 .024-.14V6.927h.386l1.571 2.446c.112.187.267.281.46.281h1.491c.226 0 .32-.11.358-.202.054-.13.038-.262-.047-.406zM102.863 2.89h-1.489a.389.389 0 0 0-.298.122.544.544 0 0 0-.13.249l-1.099 4.167h-.268l-1.182-4.167a.66.66 0 0 0-.113-.247.329.329 0 0 0-.264-.124h-1.544c-.199 0-.325.066-.372.193a.588.588 0 0 0-.002.37l1.887 5.865c.03.093.08.17.145.232a.388.388 0 0 0 .281.104h.798l-.066.19-.19.547a.872.872 0 0 1-.29.426.7.7 0 0 1-.442.148.956.956 0 0 1-.4-.09 1.842 1.842 0 0 1-.35-.209.62.62 0 0 0-.335-.115h-.016c-.13 0-.243.074-.334.216l-.474.708c-.193.304-.086.504.039.615.234.224.528.399.875.524.344.125.723.186 1.126.186.682 0 1.252-.187 1.689-.565.435-.376.756-.887.952-1.524l2.188-7.258c.05-.155.05-.284.005-.389-.037-.08-.125-.174-.327-.174z" fill="#ffffff"/>
  </svg>
`,Dv=`
<svg id="inline-button-wordmark--grey" width="166" height="16" viewBox="0 0 166 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
  d="M0.564068 6.26985L1.86515 6.10375C1.85184 5.15143 1.83489 3.71187 1.84942 3.45964C1.95955 1.67927 3.39982 0.16589 5.13056 0.0170127C5.23949 0.00839996 5.34842 0.0034784 5.45371 0.00101762C6.36645 -0.0209585 7.25272 0.313716 7.93 0.936113C8.62472 1.56238 9.07979 2.4864 9.14999 3.4055C9.16815 3.64174 9.1621 5.24002 9.1621 6.18249L10.4886 6.38305L10.4438 14.0767L5.47308 14.7657L0.519287 13.961L0.564068 6.26985ZM5.53359 5.63743L7.62016 5.95241C7.61169 4.80446 7.55965 3.12867 7.30548 2.68696C6.91939 2.0164 6.28156 1.62021 5.55901 1.60421H5.48276C4.7481 1.61406 4.10543 2.0004 3.71813 2.66727C3.44944 3.13236 3.39619 4.70972 3.3974 5.91181L5.53359 5.63743ZM22.5808 12.4378C21.8836 12.4378 21.293 12.3492 20.8089 12.172C20.372 12.0088 19.9719 11.7577 19.6325 11.4338C19.3256 11.1331 19.0833 10.7712 18.9208 10.3707C18.7637 9.95815 18.6612 9.52621 18.6158 9.08621H19.8358C19.8745 9.40119 19.9423 9.70141 20.0391 9.98686C20.136 10.2625 20.286 10.5085 20.4894 10.7251C20.6927 10.9318 20.959 11.0991 21.2882 11.2271C21.6271 11.3452 22.0579 11.4043 22.5808 11.4043C22.9197 11.4043 23.2295 11.36 23.5103 11.2714C23.8008 11.173 24.0525 11.0351 24.2655 10.858C24.4785 10.6808 24.6431 10.4692 24.7593 10.2231C24.8852 9.97701 24.9481 9.70633 24.9481 9.41103C24.9481 9.11574 24.9094 8.85982 24.8319 8.64327C24.7536 8.41559 24.6125 8.21568 24.4253 8.06745C24.196 7.88594 23.9347 7.75064 23.6555 7.6688C23.257 7.54201 22.849 7.4482 22.4355 7.38828C21.9393 7.31041 21.4491 7.19693 20.9686 7.04869C20.5808 6.92967 20.2133 6.75038 19.8794 6.51716C19.5939 6.29685 19.3607 6.01432 19.1968 5.69034C19.0418 5.35567 18.9644 4.9521 18.9644 4.47963C18.9644 4.07607 19.0467 3.70203 19.2113 3.35752C19.3759 3.00317 19.6034 2.69803 19.8939 2.44211C20.194 2.18619 20.5475 1.98441 20.9541 1.83676C21.3608 1.68911 21.811 1.61529 22.3048 1.61529C23.3505 1.61529 24.1784 1.86629 24.7884 2.36829C25.4081 2.86044 25.7711 3.57899 25.8777 4.52393H24.7448C24.6189 3.8546 24.3624 3.37721 23.9751 3.09176C23.5878 2.79646 23.031 2.64882 22.3048 2.64882C21.5883 2.64882 21.0461 2.81123 20.6782 3.13605C20.5037 3.28606 20.3648 3.47417 20.2717 3.68635C20.1787 3.89853 20.1339 4.12931 20.1408 4.36152C20.1408 4.61744 20.1698 4.84875 20.2279 5.05546C20.2957 5.25232 20.4167 5.42457 20.591 5.57222C20.775 5.71987 21.0267 5.85275 21.3463 5.97087C21.7689 6.09987 22.2012 6.19369 22.6389 6.25139C23.2198 6.33998 23.7281 6.4581 24.1639 6.60575C24.5996 6.75339 24.9675 6.94533 25.2677 7.18157C25.5678 7.4178 25.7905 7.70818 25.9358 8.05268C26.0907 8.39719 26.1681 8.82045 26.1681 9.32245C26.1681 9.76539 26.0761 10.1788 25.8922 10.5627C25.7149 10.9408 25.4627 11.2775 25.1515 11.5519C24.8319 11.8275 24.4495 12.0441 24.0041 12.2016C23.5684 12.359 23.094 12.4378 22.5808 12.4378ZM31.2066 12.4378C30.6741 12.4378 30.1803 12.3443 29.7252 12.1573C29.2906 11.9775 28.8956 11.7115 28.5633 11.3747C28.2268 11.0185 27.965 10.5966 27.7936 10.1345C27.6136 9.61796 27.5251 9.07309 27.5321 8.52515V8.40704C27.5321 7.82629 27.6193 7.29476 27.7936 6.81245C27.9679 6.3203 28.2099 5.90196 28.5198 5.55746C28.8393 5.2031 29.2169 4.93242 29.6526 4.7454C30.0883 4.54854 30.5676 4.45011 31.0905 4.45011C31.5262 4.45011 31.9473 4.52393 32.354 4.67158C32.7704 4.80938 33.1383 5.03085 33.4578 5.33599C33.7773 5.64112 34.0291 6.03977 34.213 6.53192C34.4067 7.01424 34.5035 7.5999 34.5035 8.28892V8.68756H28.7812C28.8102 9.57345 29.0281 10.2526 29.4348 10.7251C29.8414 11.1877 30.4369 11.419 31.2212 11.419C32.4121 11.419 33.085 10.9712 33.24 10.0754H34.4454C34.3099 10.8531 33.9516 11.4436 33.3707 11.8472C32.7897 12.2409 32.0684 12.4378 31.2066 12.4378ZM33.269 7.69833C33.2109 6.90104 32.9882 6.33014 32.6009 5.98563C32.2233 5.64112 31.7198 5.46887 31.0905 5.46887C30.4708 5.46887 29.9624 5.67065 29.5655 6.07422C29.1782 6.46794 28.9313 7.00932 28.8248 7.69833H33.269ZM39.3593 12.4378C38.8267 12.4378 38.3329 12.3492 37.8779 12.172C37.4401 11.9901 37.0407 11.7245 36.7014 11.3895C36.3636 11.0315 36.0973 10.6103 35.9172 10.1493C35.7268 9.63002 35.6332 9.07925 35.6412 8.52515V8.40704C35.6412 7.81645 35.738 7.28 35.9317 6.79769C36.1253 6.30553 36.3868 5.8872 36.716 5.54269C37.0548 5.19818 37.447 4.93242 37.8924 4.7454C38.3475 4.54854 38.8267 4.45011 39.3302 4.45011C39.7272 4.45011 40.1097 4.49932 40.4776 4.59775C40.8552 4.69618 41.1893 4.85367 41.4797 5.07022C41.7799 5.27693 42.0316 5.55253 42.235 5.89704C42.4383 6.24155 42.569 6.65988 42.6271 7.15204H41.4362C41.3393 6.54177 41.0924 6.10867 40.6955 5.85275C40.3082 5.59683 39.8531 5.46887 39.3302 5.46887C38.995 5.46599 38.6632 5.53649 38.3571 5.67557C38.0667 5.81338 37.8101 6.01024 37.5874 6.26616C37.3615 6.53514 37.1889 6.84598 37.0791 7.18157C36.9484 7.57626 36.8845 7.99063 36.8902 8.40704V8.52515C36.8902 9.47994 37.1178 10.2034 37.5729 10.6956C38.0376 11.1779 38.6379 11.419 39.3738 11.419C39.6449 11.419 39.9015 11.3797 40.1436 11.3009C40.6361 11.1497 41.0523 10.8113 41.3055 10.356C41.441 10.1197 41.5233 9.84413 41.5524 9.52915H42.6707C42.6338 9.9361 42.5204 10.3321 42.3366 10.6956C42.1663 11.0447 41.9293 11.3559 41.6395 11.611C41.349 11.8669 41.0101 12.0687 40.6228 12.2163C40.2355 12.364 39.8144 12.4378 39.3593 12.4378ZM46.9164 12.4378C46.5568 12.4406 46.199 12.3858 45.8562 12.2754C45.5441 12.1717 45.2605 11.9947 45.0284 11.7586C44.7829 11.4908 44.595 11.1741 44.4765 10.8284C44.3409 10.4544 44.2731 10.0016 44.2731 9.47009V4.58299H45.4786V9.41103C45.4786 10.0902 45.619 10.5873 45.8998 10.9023C46.1903 11.2172 46.6356 11.3747 47.236 11.3747C47.5071 11.3747 47.7685 11.3304 48.0202 11.2419C48.272 11.1533 48.4947 11.0204 48.6883 10.8432C48.882 10.666 49.0369 10.4446 49.1531 10.1788C49.2693 9.91303 49.3274 9.6079 49.3274 9.26339V4.58299H50.5328V12.3049H49.3274V11.0794C49.1531 11.4436 48.8578 11.7635 48.4414 12.0391C48.0348 12.3049 47.5264 12.4378 46.9164 12.4378ZM52.8239 4.58299H54.0294V5.97087C54.2715 5.53777 54.5765 5.18342 54.9444 4.90781C55.322 4.62236 55.8497 4.46979 56.5275 4.45011V5.60175C56.1799 5.61707 55.8346 5.66652 55.4963 5.7494C55.2039 5.81939 54.9308 5.95567 54.6975 6.14804C54.4729 6.35252 54.303 6.6116 54.2037 6.90104C54.0875 7.20618 54.0294 7.59498 54.0294 8.06745V12.3049H52.8239V4.58299ZM61.0347 12.4378C60.5021 12.4378 60.0083 12.3443 59.5533 12.1573C59.1186 11.9775 58.7236 11.7115 58.3914 11.3747C58.0549 11.0185 57.793 10.5966 57.6216 10.1345C57.4416 9.61796 57.3531 9.07309 57.3602 8.52515V8.40704C57.3602 7.82629 57.4473 7.29476 57.6216 6.81245C57.7959 6.3203 58.038 5.90196 58.3478 5.55746C58.6673 5.2031 59.0449 4.93242 59.4806 4.7454C59.9164 4.54854 60.3956 4.45011 60.9185 4.45011C61.3542 4.45011 61.7754 4.52393 62.1821 4.67158C62.5984 4.80938 62.9663 5.03085 63.2859 5.33599C63.6054 5.64112 63.8571 6.03977 64.0411 6.53192C64.2347 7.01424 64.3316 7.5999 64.3316 8.28892V8.68756H58.6092C58.6383 9.57345 58.8561 10.2526 59.2628 10.7251C59.6695 11.1877 60.2649 11.419 61.0492 11.419C62.2401 11.419 62.9131 10.9712 63.068 10.0754H64.2735C64.1379 10.8531 63.7797 11.4436 63.1987 11.8472C62.6178 12.2409 61.8964 12.4378 61.0347 12.4378ZM63.097 7.69833C63.0389 6.90104 62.8162 6.33014 62.429 5.98563C62.0513 5.64112 61.5478 5.46887 60.9185 5.46887C60.2988 5.46887 59.7905 5.67065 59.3935 6.07422C59.0062 6.46794 58.7593 7.00932 58.6528 7.69833H63.097ZM68.8968 12.4378C68.403 12.4378 67.9431 12.3541 67.5171 12.1868C67.1072 12.0141 66.7365 11.7578 66.4278 11.4338C66.1165 11.0803 65.8749 10.6693 65.7161 10.2231C65.5451 9.69956 65.4617 9.15057 65.4692 8.59898V8.48086C65.4692 7.89027 65.5564 7.3489 65.7307 6.85675C65.905 6.36459 66.147 5.94134 66.4569 5.58698C66.7667 5.22279 67.1395 4.94226 67.5752 4.7454C68.0109 4.54854 68.4902 4.45011 69.013 4.45011C69.6521 4.45011 70.1701 4.58791 70.5671 4.86352C70.964 5.12928 71.2739 5.44918 71.4966 5.82322V0.891819H72.702V12.3049H71.4966V10.9761C71.3901 11.1631 71.2448 11.3452 71.0609 11.5224C70.8713 11.7038 70.6617 11.8623 70.4363 11.9949C70.2066 12.1258 69.963 12.2298 69.7102 12.3049C69.4487 12.3935 69.1776 12.4378 68.8968 12.4378ZM69.0275 11.419C69.3761 11.419 69.7053 11.36 70.0152 11.2419C70.325 11.1237 70.5913 10.9466 70.814 10.7103C71.0367 10.4642 71.2109 10.1591 71.3368 9.79492C71.4724 9.42088 71.5401 8.98778 71.5401 8.49562V8.37751C71.5401 7.38335 71.3223 6.65004 70.8866 6.17757C70.4606 5.7051 69.8748 5.46887 69.1292 5.46887C68.374 5.46887 67.7834 5.72479 67.3573 6.23663C66.9313 6.74847 66.7183 7.47686 66.7183 8.4218V8.53992C66.7183 9.02223 66.7764 9.44549 66.8926 9.80968C67.0184 10.1739 67.183 10.4741 67.3864 10.7103C67.5994 10.9466 67.8463 11.1237 68.1271 11.2419C68.4079 11.36 68.708 11.419 69.0275 11.419ZM82.4716 12.4378C81.852 12.4378 81.3243 12.3 80.8886 12.0244C80.485 11.7813 80.146 11.4417 79.901 11.0351V12.3049H78.6955V0.891819H79.901V5.88228C80.0153 5.68531 80.1572 5.50626 80.3221 5.35075C80.5061 5.17357 80.7094 5.02101 80.9321 4.89305C81.1645 4.75524 81.4114 4.64697 81.6729 4.56822C81.9343 4.48948 82.2005 4.45011 82.4716 4.45011C82.9655 4.45011 83.4254 4.53869 83.8514 4.71587C84.2774 4.89305 84.6405 5.14897 84.9407 5.48363C85.2505 5.8183 85.4926 6.22679 85.6669 6.7091C85.8411 7.19141 85.9283 7.73278 85.9283 8.33321V8.45133C85.9283 9.04192 85.846 9.58329 85.6814 10.0754C85.5295 10.535 85.2929 10.9609 84.9843 11.3304C84.6852 11.6839 84.3133 11.9662 83.895 12.1573C83.4445 12.3492 82.96 12.4447 82.4716 12.4378ZM82.3555 11.419C83.1107 11.419 83.6868 11.173 84.0838 10.6808C84.4808 10.1788 84.6793 9.45533 84.6793 8.51039V8.39227C84.6793 7.90012 84.6163 7.47194 84.4904 7.10775C84.3829 6.77559 84.2099 6.46915 83.9821 6.2071C83.7841 5.96487 83.5294 5.77704 83.2414 5.66081C82.9581 5.53232 82.6511 5.46687 82.3409 5.46887C81.9924 5.46887 81.6632 5.52793 81.3533 5.64604C81.0537 5.7638 80.7852 5.95084 80.569 6.19234C80.3464 6.42857 80.1721 6.73371 80.0462 7.10775C79.9127 7.52209 79.8488 7.95635 79.8574 8.39227V8.51039C79.8574 9.4947 80.0898 10.228 80.5545 10.7103C81.0193 11.1828 81.6196 11.419 82.3555 11.419ZM89.6342 11.5076L86.6569 4.58299H87.9495L90.2733 10.1197L92.3792 4.58299H93.6137L89.4164 14.9921H88.1964L89.6342 11.5076ZM105.97 4.51532C105.618 4.13844 105.195 3.83755 104.727 3.63067C104.257 3.42601 103.751 3.32132 103.241 3.32307C102.698 3.32307 102.214 3.42888 101.804 3.64297C101.501 3.7934 101.229 4.00091 101.003 4.25447V4.01947C101.003 3.93064 100.979 3.84347 100.933 3.76781C100.888 3.69214 100.822 3.631 100.744 3.59129C100.691 3.56626 100.633 3.55364 100.574 3.55438H98.9827C98.9241 3.55245 98.8658 3.56433 98.8125 3.58909C98.7592 3.61385 98.7122 3.65082 98.6753 3.69711C98.5956 3.78474 98.5523 3.90019 98.5542 4.01947V15.0561C98.5542 15.1791 98.5954 15.2874 98.6753 15.3735C98.715 15.4152 98.7629 15.4479 98.8158 15.4698C98.8688 15.4916 98.9256 15.502 98.9827 15.5002H100.606C100.661 15.5001 100.715 15.4889 100.766 15.4671C100.817 15.4453 100.863 15.4135 100.901 15.3735C100.945 15.3333 100.979 15.284 101.002 15.229C101.025 15.174 101.036 15.1146 101.034 15.0548V11.2898C101.25 11.5384 101.539 11.7291 101.884 11.8607C102.307 12.0256 102.755 12.1105 103.207 12.1105C103.727 12.1105 104.233 12.0096 104.71 11.8054C105.185 11.599 105.613 11.2958 105.969 10.9146C106.338 10.5135 106.628 10.0422 106.824 9.52669C107.044 8.94733 107.152 8.33033 107.143 7.70941C107.143 7.045 107.038 6.43349 106.824 5.89212C106.631 5.38011 106.341 4.91182 105.97 4.51409V4.51532ZM104.513 8.50178C104.424 8.73555 104.295 8.94718 104.131 9.12928C103.969 9.31219 103.77 9.45789 103.547 9.55674C103.325 9.65558 103.085 9.70531 102.842 9.70264C102.6 9.70387 102.358 9.65342 102.136 9.55499C101.911 9.4556 101.71 9.31074 101.542 9.12928C101.375 8.94704 101.244 8.73407 101.155 8.50178C101.062 8.25439 101.015 7.99155 101.016 7.72663C101.016 7.45102 101.064 7.19141 101.155 6.95026C101.332 6.48635 101.682 6.1122 102.128 5.90935C102.352 5.80353 102.595 5.7494 102.842 5.75063C103.103 5.75063 103.343 5.80476 103.56 5.91058C103.774 6.0127 103.969 6.15542 104.134 6.33014C104.476 6.71058 104.661 7.21105 104.648 7.72663C104.648 8.00347 104.603 8.26308 104.513 8.50178ZM115.859 3.55684H114.249C114.193 3.55751 114.138 3.56987 114.087 3.59315C114.036 3.61643 113.99 3.65013 113.952 3.69219C113.868 3.78 113.821 3.8973 113.821 4.01947V4.22371C113.62 3.9808 113.372 3.78302 113.092 3.64297C112.654 3.42397 112.17 3.31511 111.681 3.32553C111.166 3.32821 110.657 3.43439 110.183 3.63795C109.708 3.84151 109.278 4.13843 108.917 4.51162C108.537 4.91069 108.236 5.37962 108.029 5.89335C107.801 6.47081 107.687 7.08847 107.696 7.71064C107.696 8.37505 107.807 8.98655 108.029 9.52792C108.251 10.0619 108.545 10.5331 108.91 10.9158C109.265 11.2945 109.693 11.5958 110.167 11.8016C110.641 12.0074 111.15 12.1133 111.665 12.113C112.194 12.113 112.675 12.0047 113.085 11.7943C113.388 11.6343 113.637 11.4412 113.821 11.2148V11.4326C113.82 11.4923 113.831 11.5516 113.854 11.6066C113.877 11.6615 113.911 11.7109 113.954 11.7512C113.993 11.7915 114.038 11.8236 114.089 11.8456C114.14 11.8676 114.194 11.879 114.249 11.8792H115.859C115.916 11.8812 115.972 11.8706 116.024 11.8483C116.077 11.826 116.124 11.7925 116.162 11.75C116.203 11.7085 116.235 11.6589 116.256 11.6043C116.277 11.5497 116.287 11.4912 116.285 11.4326V4.0207C116.287 3.90142 116.244 3.78597 116.164 3.69834C116.127 3.65337 116.08 3.61736 116.027 3.5929C115.975 3.56844 115.917 3.55613 115.859 3.55684ZM113.685 8.4907C113.601 8.72324 113.473 8.9368 113.308 9.11943C113.143 9.29538 112.95 9.43933 112.735 9.54269C112.52 9.64727 112.275 9.70141 112.014 9.70141C111.764 9.70141 111.521 9.64727 111.3 9.54146C111.079 9.4398 110.881 9.29437 110.717 9.11372C110.552 8.93306 110.425 8.72082 110.343 8.48947C110.253 8.24551 110.207 7.98712 110.207 7.72663C110.207 7.44979 110.253 7.19018 110.343 6.94903C110.433 6.71156 110.562 6.50116 110.723 6.32891C110.888 6.15296 111.086 6.00901 111.301 5.90812C111.521 5.80353 111.764 5.7494 112.015 5.7494C112.275 5.7494 112.52 5.80353 112.735 5.90935C112.951 6.01393 113.144 6.15542 113.308 6.32891C113.65 6.70961 113.834 7.21001 113.821 7.7254C113.821 7.98993 113.776 8.24709 113.685 8.4907ZM131.919 7.49901C131.685 7.28955 131.417 7.12228 131.127 7.00439C130.828 6.88012 130.511 6.78169 130.177 6.71525L128.95 6.46425C128.635 6.40273 128.416 6.3203 128.293 6.21448C128.242 6.17732 128.201 6.12853 128.172 6.07209C128.144 6.01565 128.128 5.95315 128.128 5.88966C128.128 5.75432 128.204 5.64358 128.357 5.54269C128.523 5.43688 128.755 5.38274 129.042 5.38274C129.357 5.38274 129.669 5.44795 129.958 5.57591C130.252 5.70633 130.528 5.85398 130.769 6.01885C131.126 6.24893 131.43 6.21817 131.649 5.95364L132.238 5.25232C132.351 5.13393 132.416 4.97752 132.422 4.81307C132.422 4.65558 132.345 4.51162 132.198 4.3812C131.948 4.15481 131.553 3.91612 131.023 3.68234C130.494 3.44611 129.829 3.32553 129.042 3.32553C128.525 3.32553 128.049 3.39689 127.628 3.53716C127.205 3.67988 126.842 3.87674 126.547 4.12036C126.251 4.37136 126.017 4.66173 125.858 4.99763C125.699 5.33341 125.617 5.70154 125.618 6.07422C125.618 6.76324 125.82 7.32552 126.218 7.74509C126.615 8.15481 127.145 8.43411 127.796 8.56945L129.072 8.8549C129.435 8.93118 129.711 9.01731 129.889 9.11328C130.045 9.19572 130.119 9.31383 130.119 9.47871C130.119 9.62635 130.045 9.758 129.892 9.87735C129.731 10.0053 129.478 10.0681 129.139 10.0681C128.79 10.0717 128.445 9.99161 128.133 9.83429C127.836 9.68469 127.56 9.49515 127.312 9.27077C127.202 9.17922 127.076 9.1084 126.941 9.0616C126.788 9.01608 126.616 9.0653 126.419 9.22155L125.714 9.78876C125.509 9.96717 125.423 10.1825 125.461 10.431C125.496 10.6697 125.691 10.9158 126.055 11.1939C126.38 11.4313 126.798 11.6467 127.3 11.8312C127.803 12.017 128.391 12.113 129.059 12.113C129.596 12.113 130.092 12.0416 130.529 11.9013C130.967 11.7549 131.354 11.5593 131.668 11.3108C131.98 11.0724 132.231 10.7631 132.404 10.4077C132.576 10.0523 132.663 9.66076 132.659 9.26462C132.659 8.87212 132.595 8.52638 132.46 8.23601C132.331 7.95492 132.147 7.70366 131.919 7.49778V7.49901ZM138.958 9.51193C138.923 9.445 138.872 9.3882 138.809 9.34687C138.747 9.30555 138.675 9.28105 138.601 9.27569C138.451 9.27322 138.305 9.3222 138.186 9.41473C138.071 9.49101 137.946 9.55007 137.815 9.58821C137.649 9.64412 137.47 9.64967 137.3 9.60421C137.219 9.58443 137.144 9.54519 137.081 9.48978C137.005 9.42056 136.946 9.33472 136.908 9.23878C136.855 9.09669 136.83 8.94521 136.836 8.79338V5.76662H138.931C139.051 5.76662 139.159 5.71741 139.253 5.62267C139.295 5.58108 139.329 5.5314 139.352 5.4765C139.376 5.42159 139.388 5.36254 139.389 5.30276V4.02193C139.389 3.96024 139.377 3.89918 139.353 3.84249C139.329 3.78579 139.294 3.73465 139.25 3.69219C139.165 3.60724 139.05 3.55916 138.931 3.55807H136.835V1.49717C136.838 1.43555 136.827 1.37406 136.805 1.31679C136.782 1.25952 136.748 1.20777 136.704 1.16497C136.627 1.08454 136.521 1.03854 136.41 1.03701H134.784C134.695 1.03555 134.609 1.06135 134.535 1.11101C134.462 1.16066 134.405 1.23182 134.372 1.31507C134.349 1.37287 134.338 1.43484 134.339 1.49717V3.55684H133.411C133.353 3.55549 133.294 3.5675 133.241 3.59199C133.188 3.61647 133.14 3.65281 133.102 3.69834C133.025 3.78687 132.982 3.90193 132.984 4.0207V5.304C132.985 5.39177 133.01 5.47753 133.055 5.55238C133.1 5.62724 133.164 5.68846 133.24 5.72971C133.294 5.75555 133.352 5.76908 133.41 5.76662H134.339V9.36551C134.339 9.84536 134.423 10.2588 134.581 10.5996C134.741 10.9367 134.951 11.2197 135.204 11.4313C135.466 11.6503 135.766 11.8128 136.088 11.9087C136.415 12.0121 136.755 12.0638 137.096 12.0638C137.562 12.0638 138.004 11.9887 138.421 11.8423C138.817 11.7053 139.175 11.4722 139.463 11.1631C139.647 10.9404 139.668 10.6943 139.518 10.4483L138.958 9.51316V9.51193ZM147.78 3.55684H146.171C146.116 3.55785 146.061 3.57036 146.01 3.59363C145.959 3.6169 145.914 3.65043 145.876 3.69219C145.835 3.73558 145.802 3.78651 145.779 3.84229C145.758 3.89876 145.746 3.95885 145.747 4.01947V4.22371C145.544 3.98167 145.295 3.78409 145.014 3.64297C144.609 3.43011 144.136 3.32553 143.601 3.32553C143.092 3.32553 142.591 3.42765 142.117 3.6319C141.638 3.83631 141.204 4.13534 140.84 4.51162C140.46 4.9102 140.158 5.37925 139.952 5.89335C139.722 6.47038 139.608 7.08828 139.618 7.71064C139.618 8.37505 139.729 8.98655 139.95 9.52792C140.173 10.0619 140.468 10.5331 140.833 10.9158C141.188 11.2943 141.614 11.5956 142.087 11.8014C142.56 12.0072 143.069 12.1132 143.584 12.113C144.076 12.1217 144.563 12.0125 145.006 11.7943C145.314 11.6343 145.559 11.4412 145.747 11.2148V11.4326C145.745 11.4921 145.756 11.5513 145.778 11.6062C145.801 11.6612 145.834 11.7106 145.877 11.7512C145.916 11.7913 145.961 11.8232 146.012 11.8452C146.062 11.8671 146.116 11.8787 146.171 11.8792H147.78C147.837 11.8806 147.893 11.8699 147.946 11.8476C147.998 11.8254 148.046 11.7921 148.085 11.75C148.166 11.6649 148.21 11.5508 148.208 11.4326V4.0207C148.21 3.90149 148.167 3.78617 148.087 3.69834C148.049 3.65272 148.002 3.61618 147.948 3.59129C147.895 3.56679 147.838 3.555 147.78 3.55684ZM145.606 8.4907C145.437 8.95456 145.095 9.33232 144.655 9.54269C144.43 9.64997 144.184 9.70423 143.936 9.70141C143.685 9.70141 143.446 9.64727 143.224 9.54146C143.004 9.43906 142.806 9.2934 142.642 9.11285C142.477 8.9323 142.349 8.72044 142.266 8.48947C142.175 8.24565 142.129 7.98721 142.129 7.72663C142.129 7.44979 142.174 7.19018 142.264 6.94903C142.353 6.71894 142.481 6.50855 142.645 6.32891C142.812 6.15296 143.008 6.00901 143.224 5.90812C143.447 5.8023 143.69 5.74817 143.936 5.7494C144.199 5.7494 144.438 5.80353 144.655 5.90935C144.874 6.01393 145.066 6.15542 145.226 6.32891C145.388 6.50486 145.517 6.71402 145.606 6.94903C145.796 7.44486 145.796 7.99486 145.606 8.4907ZM156.622 9.40119L155.699 8.67157C155.522 8.52638 155.355 8.48701 155.21 8.54853C155.079 8.60436 154.964 8.69079 154.872 8.80076C154.673 9.05649 154.434 9.27863 154.167 9.45902C153.934 9.60913 153.629 9.68418 153.269 9.68418C153.004 9.68418 152.76 9.63496 152.542 9.53407C152.327 9.43495 152.134 9.2917 151.975 9.11328C151.812 8.93013 151.686 8.71715 151.602 8.48578C151.515 8.24262 151.471 7.98546 151.474 7.72663C151.474 7.4461 151.515 7.18772 151.602 6.94903C151.687 6.71279 151.811 6.50239 151.975 6.33014C152.138 6.15296 152.332 6.01024 152.546 5.90935C152.772 5.80107 153.019 5.74694 153.269 5.7494C153.629 5.7494 153.931 5.82814 154.167 5.97948C154.406 6.13451 154.646 6.35598 154.873 6.63651C154.968 6.7497 155.079 6.83337 155.21 6.88997C155.358 6.94903 155.523 6.90965 155.695 6.7657L156.618 6.03485C156.732 5.95424 156.817 5.83809 156.861 5.70387C156.886 5.63045 156.896 5.55227 156.889 5.47473C156.882 5.39719 156.858 5.32214 156.82 5.25478C156.464 4.67928 155.973 4.20275 155.391 3.86813C154.781 3.51009 154.05 3.32553 153.232 3.32553C152.668 3.32238 152.109 3.43311 151.588 3.65129C151.066 3.86947 150.593 4.19076 150.194 4.59652C149.805 4.99271 149.497 5.4701 149.29 5.99547C149.07 6.54494 148.957 7.13314 148.96 7.72663C148.96 8.33567 149.072 8.91765 149.29 9.45164C149.5 9.97332 149.807 10.4458 150.194 10.8395C150.593 11.2451 151.067 11.5663 151.588 11.7846C152.11 12.003 152.668 12.1142 153.232 12.1117C154.05 12.1117 154.781 11.9284 155.391 11.5654C155.976 11.232 156.468 10.7537 156.822 10.1751C156.86 10.1101 156.882 10.0374 156.889 9.96225C156.896 9.88643 156.886 9.80992 156.861 9.73832C156.813 9.60626 156.731 9.49007 156.622 9.40242V9.40119ZM165.194 11.1299L162.647 7.26277L164.827 4.29138C164.941 4.12036 164.971 3.95672 164.918 3.80292C164.88 3.69219 164.777 3.55684 164.514 3.55684H162.789C162.69 3.55775 162.593 3.58219 162.506 3.62821C162.398 3.68359 162.309 3.77173 162.253 3.88043L160.511 6.39904H160.089V0.447649C160.091 0.329229 160.048 0.214475 159.969 0.127748C159.929 0.0869473 159.881 0.0547186 159.828 0.0329554C159.776 0.0111921 159.719 0.000333517 159.663 0.00101762H158.051C157.964 0.00131009 157.88 0.0270233 157.807 0.0750545C157.735 0.123086 157.678 0.191382 157.643 0.271703C157.62 0.327334 157.608 0.387308 157.61 0.447649V11.4313C157.61 11.5581 157.656 11.6688 157.743 11.75C157.783 11.7911 157.831 11.8236 157.884 11.8456C157.937 11.8676 157.993 11.8786 158.051 11.878H159.664C159.721 11.8798 159.777 11.8692 159.83 11.8469C159.882 11.8246 159.929 11.7912 159.968 11.7488C160.007 11.7068 160.038 11.657 160.058 11.6024C160.08 11.5477 160.09 11.489 160.087 11.4301V8.52392H160.555L162.456 11.5335C162.592 11.7635 162.779 11.8792 163.013 11.8792H164.817C165.091 11.8792 165.205 11.7439 165.251 11.6307C165.316 11.4707 165.297 11.3083 165.194 11.1311V11.1299ZM125.015 3.55684H123.213C123.146 3.55424 123.079 3.56628 123.017 3.59218C122.954 3.61807 122.898 3.6572 122.852 3.70695C122.774 3.79331 122.72 3.89895 122.695 4.01332L121.365 9.14035H121.041L119.61 4.01332C119.586 3.90347 119.539 3.79998 119.473 3.70941C119.435 3.66072 119.386 3.62162 119.331 3.59516C119.276 3.5687 119.215 3.55559 119.154 3.55684H117.285C117.044 3.55684 116.892 3.63805 116.835 3.79431C116.786 3.94184 116.785 4.10149 116.832 4.24955L119.116 11.4658C119.152 11.5802 119.213 11.675 119.292 11.7512C119.337 11.7944 119.391 11.828 119.449 11.8499C119.507 11.8719 119.57 11.8818 119.632 11.8792H120.598L120.518 12.113L120.288 12.786C120.225 12.9927 120.103 13.1754 119.937 13.3101C119.784 13.4312 119.595 13.4954 119.402 13.4922C119.234 13.4914 119.069 13.4536 118.918 13.3815C118.768 13.312 118.625 13.2257 118.494 13.1243C118.375 13.0381 118.234 12.9889 118.089 12.9829H118.069C117.912 12.9829 117.775 13.0739 117.665 13.2486L117.091 14.1197C116.858 14.4938 116.987 14.7399 117.139 14.8764C117.422 15.152 117.778 15.3673 118.198 15.5211C118.614 15.6749 119.073 15.75 119.56 15.75C120.386 15.75 121.076 15.5199 121.605 15.0548C122.131 14.5922 122.52 13.9635 122.757 13.1797L125.405 4.24955C125.465 4.05884 125.465 3.90012 125.411 3.77093C125.366 3.6725 125.26 3.55684 125.015 3.55684Z"
  fill="#838383"
/>
</svg>
`,Fv=`
  <button type="button" id="apple-pay-close-button">
    <svg width="10" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.572 4.033L8.89.71a.4.4 0 0 0-.566-.566L5.003 3.459 1.681.145a.4.4 0 0 0-.566.566L4.44 4.033
      1.115 7.354a.398.398 0 0 0 0 .566.4.4 0 0 0 .566 0l3.322-3.33 3.322 3.33a.4.4 0 0 0 .566-.566L5.57 4.033z"
        fill="white"
      />
    </svg>
  </button>
`,Bv=`
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
`,nl={height:"50px",width:"auto",borderRadius:"3px",padding:"10px",locale:"en",type:"pay"},t0=function(e){return e&&jr(e)==="object"?Object.keys(nl).reduce(function(t,n){return ze(ze({},t),{},rf({},n,e[n]||nl[n]))},{}):nl},Vv=`
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
`,n0=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Number(parseFloat(e/100).toFixed(2))},r0={headers:{accept:"application/json, text/plain, */*","accept-language":"en-GB,en-US;q=0.9,en;q=0.8","content-type":"application/x-www-form-urlencoded","sec-ch-ua-mobile":"?0","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site"},referrerPolicy:"no-referrer-when-downgrade",method:"POST",mode:"cors",credentials:"omit"};function s0(e){return Object.keys(e).reduce(function(t,n){var s=encodeURIComponent(n),a=encodeURIComponent(e[n]),i="".concat(s,"=").concat(a);return[].concat(sf(t),[i])},[]).join("&")}var Hv=function(e){return{biannually:"BIANNUAL PLAN",annually:"ANNUAL PLAN"}[e]||"".concat(e.toUpperCase()," PLAN")},df=function(){try{return window.location&&window.location.protocol==="https:"&&window.ApplePaySession&&window.ApplePaySession.supportsVersion(pt.applePayVersion)}catch{return!1}},Sc=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return df()&&e.includes("apple_pay")};function Uv(){var e=0;return Array.from(document.querySelectorAll("body *")).forEach(function(t){var n=window.getComputedStyle(t),s=parseFloat(n.zIndex);!Number.isNaN(s)&&s>e&&(e=s)}),e}function rl(e){var t=document.createElement("iframe");return t.setAttribute("frameBorder","0"),t.setAttribute("allowtransparency","true"),t.id=e,t.style.display="none",t}function ii(e){return e.querySelector("apple-pay-button")||e.querySelector("#apple-pay-button")}function Fa(e){return document.querySelector("#".concat(e))}function a0(e,t,n){var s=t.channels,a=s===void 0?[]:s,i=t.styles,o=i===void 0?{}:i,l={applePay:!1};return new Promise(function(c,d){if(e)if(Sc(a)){if(ii(e))return l.applePay=!0,void c(l);(function(p,m){var f=m.container,y=m.integrity;return new Promise(function(h,x){p||x("No script url");var k=document.createElement("script");k.src=p,k.crossOrigin="anonymous",y&&(k.integrity=y),k.addEventListener("load",function(){h(!0)}),k.addEventListener("error",function(){k.remove(),x(!1)}),f?f.appendChild(k):document.head.appendChild(k)})})("https://applepay.cdn-apple.com/jsapi/v1.1.0/apple-pay-sdk.js",{container:e,integrity:"sha384-z/6BVHCcSypLSykOVpaT1PQWHOOgU45uOOlMkgi/bElX4yFqmChNMb7qiv80wFav"}).then(function(){if(n&&n!==1077497&&window&&!Array.isArray(window.webpackJsonp))throw new Error("Incorrect data type for 'webpackJsonp', expected array, got ".concat(jr(window.webpackJsonp),". Switching to fallback apple pay button"));(function(p,m){var f,y,h,x,k,w=m.styles,g=m.theme,b=document.createElement("style"),j=(y=(f=w).height,h=f.width,x=f.borderRadius,k=f.padding,`
  apple-pay-button {
    --apple-pay-button-width: `.concat(h,`;
    --apple-pay-button-height: `).concat(y,`;
    --apple-pay-button-border-radius: `).concat(x,`;
    --apple-pay-button-padding: `).concat(k,`;
    --apple-pay-button-box-sizing: border-box;
    width: `).concat(h,`;
  }
`));b.type="text/css",b.styleSheet?b.styleSheet.cssText=j:b.appendChild(document.createTextNode(j)),p.appendChild(b);var C=document.createElement("apple-pay-button");C.setAttribute("buttonstyle",g==="light"?"white":"black"),C.setAttribute("type",w.type),C.setAttribute("locale",w.locale),p.appendChild(C)})(e,{styles:t0(o.applePay),theme:o.theme}),l.applePay=!0,c(l)}).catch(function(){(function(p,m){var f,y,h,x,k,w,g,b=m.styles,j=m.theme,C=document.createElement("style"),E=(y=(f=b).height,h=f.width,x=f.borderRadius,k=f.padding,w=f.type,g=f.locale,`
  @supports (-webkit-appearance: -apple-pay-button) { 
    .apple-pay-button {
        display: inline-block;
        -webkit-appearance: -apple-pay-button;
        width: `.concat(h,`;
        height: `).concat(y,`;
        border-radius: `).concat(x,`;
        padding: `).concat(k,`;
        -apple-pay-button-type: `).concat(w,`;
        -webkit-locale: `).concat(g,`;
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
`));C.type="text/css",C.styleSheet?C.styleSheet.cssText=E:C.appendChild(document.createTextNode(E)),p.appendChild(C);var S=document.createElement("button");S.classList.add("apple-pay-button",j==="light"?"apple-pay-button-white":"apple-pay-button-black"),S.id="apple-pay-button";var N=document.createElement("span");N.classList.add("logo"),S.appendChild(N),p.appendChild(S)})(e,{styles:t0(o.applePay),theme:o.theme}),l.applePay=!0,c(l)})}else d("No wallet payment method is available on this device");else d("Container to mount elements was not provided")})}function qv(e){for(;e.firstChild;)e.removeChild(e.firstChild)}var uf="payment-request-button",pf="paystackpop-button",hf="pay-with-vault-button";function ff(e){var t=document.createElement("button");return t.id=pf,t.className="open-paystack-pop-button",t.innerText=e,t}function i0(e){return e.querySelector("#".concat(pf))}function mf(){var e=document.createElement("div");return e.id=uf,e}function sl(e){return e.querySelector("#".concat(uf))}function Wv(){var e=document.createElement("button");return e.className="pay-with-vault-button",e.id=hf,e.innerText="Pay with Vault",e}function Gv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=document.createElement("div");n.className="vault-logo-container",n.innerHTML=Bv,e.appendChild(n);var s=document.createElement("p");s.id="instruction",s.className="vault-instruction",s.innerHTML="Access your saved cards and bank details for faster, more secure payments",e.appendChild(s);var a=Wv();e.appendChild(a);var i=document.createElement("div");if(i.className="vault-divider",i.innerHTML='<div id="vault-divider" class="vault-divider__container"><div class="vault-divider__line"></div></div><div class="vault-divider__text-container"><span class="vault-divider__text">or</span></div>',e.appendChild(i),t.canPayWithApplePay){var o=mf();e.appendChild(o)}if(t.hasOtherPaymentMethods){var l=ff("Use other payment methods");e.appendChild(l)}}function Yv(e,t){var n=t.hasOtherPaymentMethods,s=document.createElement("div");s.innerHTML=`
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
`,e.appendChild(s);var a=document.createElement("p");a.id="apple-pay-description",a.innerHTML="Pay with Apple Pay to complete your purchase without filling a form",e.appendChild(a);var i=mf();if(e.appendChild(i),n){var o=ff("More payment options");e.appendChild(o)}}function o0(e){return e.some(function(t){return t!=="apple_pay"})}var Ba=[{value:"key",required:!0,types:["string"]},{value:"amount",required:!0,or:["plan","planCode"],types:["string","number"]},{value:"currency",required:!1,types:["string"]},{value:"email",required:!0,or:["customerCode"],types:["string"]},{value:"label",required:!1,types:["string"]},{value:"firstName",required:!1,types:["string"]},{value:"lastName",required:!1,types:["string"]},{value:"reference",required:!1,types:["string"]},{value:"phone",required:!1,types:["string"]},{value:"customerCode",required:!1,override:"email",types:["string"]},{value:"channels",required:!1,types:["array"]},{value:"paymentRequest",required:!1,types:["string","number"]},{value:"paymentPage",required:!1,types:["string"]},{value:"hash",required:!1,types:["string"]},{value:"container",required:!1,types:["string"]},{value:"metadata",required:!1,types:["object"]},{value:"subaccountCode",required:!1,types:["string"]},{value:"bearer",required:!1,types:["string"]},{value:"transactionCharge",required:!1,types:["string","number"]},{value:"planCode",required:!1,override:"amount",types:["string"]},{value:"subscriptionCount",required:!1,types:["number"]},{value:"planInterval",required:!1,types:["string"]},{value:"subscriptionLimit",required:!1,types:["number"]},{value:"subscriptionStartDate",required:!1,types:["string"]},{value:"accessCode",required:!1,types:["string"]},{value:"onError",required:!1,types:["function"]},{value:"onLoad",required:!1,types:["function"]},{value:"onSuccess",required:!1,types:["function"]},{value:"onCancel",required:!1,types:["function"]},{value:"callback",required:!1,types:["function"]},{value:"onClose",required:!1,types:["function"]},{value:"onBankTransferConfirmationPending",required:!1,types:["function"]},{value:"firstname",required:!1,types:["string"]},{value:"lastname",required:!1,types:["string"]},{value:"customer_code",required:!1,types:["string"]},{value:"payment_request",required:!1,types:["string","number"]},{value:"subaccount",required:!1,types:["string"]},{value:"transaction_charge",required:!1,types:["number","string"]},{value:"plan",required:!1,types:["string"]},{value:"quantity",required:!1,types:["number"]},{value:"interval",required:!1,types:["string"]},{value:"invoice_limit",required:!1,types:["number","string"]},{value:"start_date",required:!1,types:["string"]},{value:"payment_page",required:!1,types:["number","string"]},{value:"order_id",required:!1,types:["number"]},{value:"ref",required:!1,types:["string"]},{value:"card",required:!1,types:["string"]},{value:"bank",required:!1,types:["string"]},{value:"split",required:!1,types:["object"]},{value:"split_code",required:!1,types:["string"]},{value:"transaction_type",required:!1,types:["string"]},{value:"subscription",required:!1,types:["number"]},{value:"language",required:!1,types:["string"]},{value:"connect_account",required:!1,types:["string"]},{value:"connect_split",required:!1,types:["array"]}];function Qv(e){return(e==null?void 0:e.length)>500?e.split("?")[0]:e}function Zv(e){var t,n,s,a,i=ze({},e);return i.metadata=e.metadata||{},i.metadata.referrer=(t=window.location,n=t.href,s=n===void 0?"":n,a=t.ancestorOrigins,[s].concat(sf(a===void 0?[]:a)).map(Qv).join(",")),i.metadata=JSON.stringify(i.metadata),i.mode="popup",e.split&&typeof e.split!="string"&&(i.split=JSON.stringify(i.split)),i.card!==void 0&&["false",!1].indexOf(i.card)>-1&&(i.channels=["bank"],delete i.card),i.bank!==void 0&&["false",!1].indexOf(i.bank)>-1&&(i.channels=["card"],delete i.bank),[{to:"firstname",from:"firstName"},{to:"lastname",from:"lastName"},{to:"customer_code",from:"customerCode"},{to:"payment_request",from:"paymentRequest"},{to:"subaccount",from:"subaccountCode"},{to:"transaction_charge",from:"transactionCharge"},{to:"plan",from:"planCode"},{to:"quantity",from:"subscriptionCount"},{to:"interval",from:"planInterval"},{to:"invoice_limit",from:"subscriptionLimit"},{to:"start_date",from:"subscriptionStartDate"},{to:"ref",from:"reference"}].forEach(function(o){i[o.from]&&(i[o.to]=i[o.from],delete i[o.from])}),Object.values(e).forEach(function(o,l){if(typeof o=="function"){var c=Object.keys(e)[l];delete i[c]}}),i}var Kv=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"],gf=window&&window.navigator&&(window.navigator.platform||window.navigator.userAgentData&&window.navigator.userAgentData.platform),xf=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.platform,n=e.userAgent,s=n===void 0?window&&window.navigator&&window.navigator.userAgent:n,a=t||gf;return Kv.includes(a)||s.includes("Mac")&&"ontouchend"in document},Jv=function(e,t,n){var s="".concat(pt.paystackApiUrl,"transaction/update_log/").concat(e),a={Authorization:"Bearer ".concat(t)};return fetch(s,{method:"POST",body:JSON.stringify({payload:JSON.stringify(n)}),headers:a})},Xv=function(e,t){var n="".concat(pt.paystackApiUrl,"transaction/set_ip/").concat(e),s={Authorization:"Bearer ".concat(t)};return fetch(n,{method:"POST",headers:s})},ey={initializeLog:function(e){var t=e||{},n=t.attempts,s=t.authentication,a=t.errors,i=t.history;this.log={start_time:Math.round(Date.now()/1e3),time_spent:0,attempts:n||0,authentication:s,errors:a||0,success:!1,mobile:xf(),input:[],history:i||[]}},getTimeSpent:function(){var e=Math.round(Date.now()/1e3);return this.log.time_spent=e-this.log.start_time,this.log.time_spent},logAPIResponse:function(e,t){switch(e.status){case"success":return this.logApiSuccess(t);case"failed":return this.logApiError(e.message);default:return!1}},logValidationResponse:function(e){return this.log.history.push({type:"action",message:e,time:this.getTimeSpent()}),this.saveLog()},logAttempt:function(e){var t="Attempted to pay";return e&&(t+=" with ".concat(e)),this.log.attempts+=1,this.log.history.push({type:"action",message:t,time:this.getTimeSpent()}),this.saveLog()},logApiError:function(e){var t="Error";return e&&(t+=": ".concat(e)),this.log.errors+=1,this.log.history.push({type:"error",message:t,time:this.getTimeSpent()}),this.saveLog()},logApiSuccess:function(e){var t="Successfully paid";return e&&(t+=" with ".concat(e)),this.log.success=!0,this.log.history.push({type:"success",message:t,time:this.getTimeSpent()}),this.saveLog()},saveLog:function(){try{if(this.response)return Jv(this.id,this.response.merchant_key,this.log)}catch{}},saveIpAddress:function(){try{if(this.response)return Xv(this.id,this.response.merchant_key)}catch{}}},ty=["language","connect_account"],ny={requestInline:function(){var e=this,t=this.urlParameters,n=t.language,s=t.connect_account,a=Cc(t,ty),i=ze({"Content-Type":"application/json"},n&&{"Accept-Language":n});return(this.accessCode?fetch(new URL("transaction/verify_access_code/".concat(this.accessCode),pt.paystackApiUrl).toString(),{headers:i}):fetch(new URL("/checkout/request_inline",pt.paystackApiUrl).toString(),{method:"POST",body:JSON.stringify(a),headers:ze(ze({},i),s&&{"x-connect-account":s})})).then(function(o){return o.json()}).then(function(o){if(o.status===!1)throw new Error(o.message);return e.response=o.data,e.id=o.data.id,e.status=o.data.transaction_status,e.accessCode=o.data.access_code,e.log=null,Object.assign(e,ey),e.initializeLog(o.data.log),e.saveIpAddress(),o.data})}},al=function(){function e(t){tf(this,e),function(d){function p(h,x){this.message=h,this.issues=x||[]}if(!d||jr(d)!=="object")throw new p("Transaction parameters should be a non-empty object");var m=d;if("accessCode"in m)return{accessCode:m.accessCode};Object.keys(m).forEach(function(h){Ba.find(function(x){return x.value===h})!==void 0||delete m[h]});var f=Object.keys(m),y=[];if(Ba.filter(function(h){return h.required}).forEach(function(h){var x=!m[h.value],k=h.or?h.or.some(function(w){return m[w]}):null;x&&!k&&y.push({message:"Required parameter missing: ".concat(h.value)})}),f.forEach(function(h){var x=m[h],k=Ba.find(function(g){return g.value===h}),w=jr(x);w==="object"&&Array.isArray(x)&&(w="array"),k.types.indexOf(w)<=-1&&y.push({message:"Invalid parameter type: ".concat(h),validTypes:k.types})}),f.forEach(function(h){var x=Ba.find(function(k){return k.value===h});x.override&&delete m[x.override]}),y.length)throw new p("Invalid transaction parameters",y)}(t),this.parameters=t,this.urlParameters=Zv(t),this.id=null,this.status=null,this.accessCode=t.accessCode||null,this.authorizationUrl=null,this.errors=[],this.response=null,this.isActive=!0;var n=t.onError,s=t.onLoad,a=t.onSuccess,i=t.onCancel,o=t.callback,l=t.onClose,c=t.onBankTransferConfirmationPending;this.callbacks={onError:n,onLoad:s,onSuccess:a,onCancel:i,onBankTransferConfirmationPending:c},this.deprecatedCallbacks={callback:o,onClose:l},Object.assign(this,ny)}return nf(e,[{key:"onSetupError",value:function(t){this.logError(t),this.callbacks.onError&&this.callbacks.onError(t)}},{key:"onLoad",value:function(t){var n=t.id,s=t.customer,a=t.accessCode;Object.assign(this,{id:n,customer:s,accessCode:a}),this.authorizationUrl="".concat(pt.checkoutUrl).concat(a),this.callbacks.onLoad&&this.callbacks.onLoad({id:n,customer:s,accessCode:a})}},{key:"onSuccess",value:function(t){this.isActive=!1,this.response=t,this.status=t.status,this.callbacks.onSuccess&&this.callbacks.onSuccess(t),this.deprecatedCallbacks.callback&&this.deprecatedCallbacks.callback(t)}},{key:"setStatus",value:function(t){this.status=t}},{key:"onCancel",value:function(){this.callbacks.onCancel&&this.callbacks.onCancel(),this.deprecatedCallbacks.onClose&&this.deprecatedCallbacks.onClose()}},{key:"cancel",value:function(){this.isActive=!1,this.onCancel()}},{key:"onBankTransferConfirmationPending",value:function(){this.cancel(),this.callbacks.onBankTransferConfirmationPending&&this.callbacks.onBankTransferConfirmationPending()}},{key:"logError",value:function(t){this.errors.push(t)}}]),e}(),q1=console?console.warn||console.log:function(){};function l0(e,t,n){q1('"'.concat(e,'" has been deprecated, please use "').concat(t,'". ').concat(n||""))}var K,ry=["preload","inlineTransaction","transactionData"],sy=["container","styles","onElementsMount"];function il(e,t){if(!e.length)return null;var n=e.filter(function(s){var a,i,o,l,c=!s.status||s.status==="abandoned",d=(a=s.parameters,i=t,o=Object.keys(a).sort().join("")===Object.keys(i).sort().join(""),l=Object.values(a).sort().join("")===Object.values(i).sort().join(""),o&&l);return c&&d});return n.length?n[n.length-1]:null}function c0(e){var t=e.checkoutIframe,n=e.urlParameters;t&&n&&t.contentWindow.postMessage({type:"inline:url",path:"newTransaction",params:n},"*")}var ay="trackCheckoutClosed",d0="trackPaymentError",iy="trackPaymentAttempt",oy="trackPaymentCompletion";function ol(e){throw q1(e),new Error(e)}var u0,p0,vf=function(){function e(t){var n,s;tf(this,e),this.id=function(){for(var a="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;o<5;o+=1)a+=i.charAt(Math.floor(Math.random()*i.length));return a}(),this.transactions=[],this.isOpen=!1,this.isLoaded=!1,this.isDeprecatedApi=t&&t.isDeprecatedApi,t&&t.isEmbed?this.isEmbed=!0:t&&t.isPaymentRequest&&(t.container&&Fa(t.container)||ol("A container is required to mount the payment request button"),this.paymentRequestContainer=Fa(t.container),this.paymentRequestTransaction=null),this.preCheckoutModal=null,this.backgroundIframe=function(a){var i=rl("inline-background-".concat(a));i.style.cssText=`
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
`),o.close(),i}(this.id),this.checkoutIframe=(n=this.id,(s=rl("inline-checkout-".concat(n))).src="".concat(pt.checkoutUrl,"popup"),s.style.cssText=`
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
`,s.setAttribute("allowpaymentrequest","true"),s.setAttribute("allow","payment; clipboard-read; clipboard-write"),document.body.appendChild(s),s),this.registerListeners()}return nf(e,[{key:"registerListeners",value:function(){var t=this;window.addEventListener("message",function(n){var s="".concat(n.origin,"/")===pt.checkoutUrl,a=t.checkoutIframe&&t.checkoutIframe.contentWindow===n.source,i=t.isEmbed;s||a?t.respondToEvent(n):i&&t.respondToEmbedEvents(n)})}},{key:"sendAnalyticsEventToCheckout",value:function(t,n){this.checkoutIframe.contentWindow.postMessage({type:"analytics",action:t,params:n},"*")}},{key:"checkout",value:function(t){this.activeTransaction()&&this.activeTransaction().cancel(),K=this;var n=il(this.transactions,t)||new al(t);return new Promise(function(s,a){n.requestInline().then(function(i){var o=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=c.platform,p=c.userAgent,m=p===void 0?window&&window.navigator&&window.navigator.userAgent:p,f=d||gf,y=m&&!!m.match(/Version\/[\d.]+.*Safari/),h=f&&/(Mac)/i.test(f);return xf()||h&&y}()&&Sc(i.channels),l=function(){var c,d,p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return!((c=p.link_config)===null||c===void 0||!c.enabled||(d=p.link_config)===null||d===void 0||!d.has_payment_instruments)}(i);l||o?(K.preloadTransaction({inlineTransaction:n,transactionData:i}),K.preCheckoutModal=function(c,d){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},m=document.querySelector("#pre-checkout-modal-".concat(c));if(m){if(i0(m)&&sl(m))return m;m.remove()}var f=document.createElement("div");f.classList.add("pre-checkout-modal"),f.id="pre-checkout-modal-".concat(c),f.style.zIndex=Uv()+1;var y=document.createElement("div");y.classList.add("pre-checkout-modal__content"),f.appendChild(y);var h=d||{},x=h.merchant_logo,k=h.merchant_name,w=h.email,g=h.amount,b=h.currency,j=h.label,C=h.channels,E=new Intl.NumberFormat("en",{style:"currency",currency:b,currencyDisplay:"code",maximumFractionDigits:2,minimumFractionDigits:0}).format(g/100),S=document.createElement("div");S.classList.add("payment-info"),S.innerHTML='<img class="merchant-logo" src="'.concat(x,'" alt="').concat(k,` Logo">
    <div class="customer-info">
      <div class="customer-email">`).concat(j||w,`</div>
      <div class="transaction-amount">Pay <span class="amount">`).concat(E,`</span></div>
    </div>`),y.appendChild(S),y.innerHTML+=Fv;var N=document.createElement("div");N.classList.add("modal-wrapper"),p.canPayWithVault?Gv(N,{canPayWithApplePay:p.canPayWithApplePay,hasOtherPaymentMethods:o0(C)}):Yv(N,{hasOtherPaymentMethods:o0(C)}),N.innerHTML=N.innerHTML+cf+Dv,y.appendChild(N);var _=document.createElement("style");return _.textContent=Vv,document.body.appendChild(_),document.body.appendChild(f),f}(K.id,i,{canPayWithVault:l,canPayWithApplePay:o}),o?(K.paymentRequestContainer=sl(K.preCheckoutModal),a0(K.paymentRequestContainer,{channels:i.channels,styles:{applePay:{width:"100%",type:"pay",height:"42px",padding:"15px",borderRadius:"5px"}}},i.merchant_id).then(function(){K.registerPaymentRequestEventListeners()}).catch(function(){l?sl(K.preCheckoutModal).remove():(K.closePreCheckoutModal(),K.animateCheckoutIn())}).finally(function(){s(n)})):s(n)):(K.newTransaction({inlineTransaction:n,transactionData:i}),s(n))}).catch(function(i){n.onSetupError({status:!1,message:i.message}),a(i)})})}},{key:"openPreCheckoutModal",value:function(){var t;this.registerPreCheckoutModalEventListeners(),t=this.preCheckoutModal,new Promise(function(n,s){try{var a=t.querySelector(".pre-checkout-modal__content");t.classList.add("show"),setTimeout(function(){a.classList.add("show"),n(!0)},50)}catch(i){s(i)}})}},{key:"registerPreCheckoutModalEventListeners",value:function(){var t,n=this,s=!1,a=this.activeTransaction();document.addEventListener("touchstart",function(c){c.preventDefault(),s||(s=!0,t=setTimeout(function(){s=!1},125))},!0),document.addEventListener("touchend",function(c){c.target&&c.target.isSameNode(K.preCheckoutModal)&&s&&(clearTimeout(t),K.closePreCheckoutModal(),a&&a.cancel()),s=!1},!0);var i=i0(this.preCheckoutModal);i&&(i.onclick=function(){n.closePreCheckoutModal(),n.animateCheckoutIn()});var o=this.preCheckoutModal.querySelector("#".concat(hf));o&&(o.onclick=function(){n.closePreCheckoutModal(),n.animateCheckoutIn(),n.checkoutIframe.contentWindow.postMessage({type:"inline:pay-with-vault"},"*")});var l=function(c){return c.querySelector("#apple-pay-close-button")}(this.preCheckoutModal);l.onclick=function(){n.sendAnalyticsEventToCheckout(ay),n.closePreCheckoutModalAndCancelTransaction()}}},{key:"closePreCheckoutModal",value:function(t){var n;this.preCheckoutModal&&(t==="failed"?(n=this.preCheckoutModal)&&(n.querySelector("#apple-pay-mark--light").innerHTML=`<svg width="50" height="30" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="error-icon">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="error" fill-rule="nonzero">
            <path d="M9.14672,0.47855 L0.14829,15.47855 C-0.0403320234,15.7872042 -0.0475647902,16.1736607 0.129375884,16.4891566 C0.306316558,16.8046526 0.639843999,16.9999993 1.00157,17 L19.43546,17 C19.797186,16.9999993 20.1307134,16.8046526 20.3076541,16.4891566 C20.4845948,16.1736607 20.477362,15.7872042 20.28874,15.47855 L10.85328,0.47855 C10.671624,0.181297031 10.3483651,3.00996351e-06 10,3.00996351e-06 C9.6516349,3.00996351e-06 9.32837603,0.181297031 9.14672,0.47855 Z" id="Shape" fill="#FFAA22"></path>
            <rect id="Rectangle-path" fill="#FFFFFF" x="9" y="6" width="2" height="5"></rect>
            <rect id="Rectangle-path" fill="#FFFFFF" x="9" y="12" width="2" height="2"></rect>
        </g>
    </g>
</svg>`,n.querySelector("#apple-pay-description").textContent="An error occurred while paying with Apple Pay. Please try again or use another payment method."):(function(s){s&&(s.querySelector(".pre-checkout-modal__content").classList.remove("show"),s.classList.remove("show"))}(this.preCheckoutModal),this.preCheckoutModal.remove(),this.preCheckoutModal=null))}},{key:"closePreCheckoutModalAndCancelTransaction",value:function(){this.preCheckoutModal&&(this.cancelTransaction(),this.checkoutIframe&&this.checkoutIframe.contentWindow&&this.checkoutIframe.contentWindow.postMessage("close","*"),this.closePreCheckoutModal())}},{key:"newTransaction",value:function(t){var n=t.preload,s=t.inlineTransaction,a=t.transactionData,i=Cc(t,ry),o=this.paymentRequestContainer&&ii(this.paymentRequestContainer);if(this.activeTransaction()&&!o&&this.activeTransaction().cancel(),s&&a)return this.transactions.push(s),this.isDeprecatedApi||this.open({accessCode:a.access_code,language:s.urlParameters.language},n),s;var l=il(this.transactions,s?s.parameters:i);if(l)return l.isActive=!0,this.isDeprecatedApi||this.open({accessCode:l.accessCode,language:l.urlParameters.language},n),l;var c=s||new al(i),d=c.accessCode?{accessCode:c.accessCode,language:c.urlParameters.language}:c.urlParameters;return this.transactions.push(c),this.isDeprecatedApi||this.open(d,n),c}},{key:"preloadTransaction",value:function(t){var n=this;return this.newTransaction(ze(ze({},t),{},{preload:!0})),function(){return n.animateCheckoutIn()}}},{key:"paymentRequest",value:function(t){var n=t.container,s=t.styles,a=t.onElementsMount,i=Cc(t,sy);return K=this,new Promise(function(o,l){var c=document.querySelector("#".concat(t.loadPaystackCheckoutButton));if(df()){K.activeTransaction()&&K.activeTransaction().cancel(),n&&Fa(n)||ol("A container is required to mount the payment request button"),K.paymentRequestContainer=Fa(n);var d=il(K.transactions,i),p=d||new al(i);p.requestInline().then(function(y){a0(K.paymentRequestContainer,{channels:y.channels,styles:s},y.merchant_id).then(function(h){a&&a(h)}).catch(function(){a&&a(null)}).finally(function(){if(d?p.isActive=!0:K.transactions.push(p),K.registerPaymentRequestEventListeners(),c){var h=K.preloadTransaction({inlineTransaction:p,transactionData:y});c.onclick=h}o(p)})}).catch(function(y){p.onSetupError({status:!1,message:y.message}),l(y)})}else{if(t&&t.loadPaystackCheckoutButton)if(c){var m=K.preloadTransaction(i);c.onclick=m}else q1("This device does not support any payment request wallet options. Please consult our documentation at https://developers.paystack.co/docs/paystack-inline to see how to load alternative payment options using 'loadPaystackCheckoutButton'");a&&a(null);var f=K.activeTransaction();o(f)}})}},{key:"registerApplePayEventListener",value:function(){var t=this;ii(this.paymentRequestContainer).onclick=function(){return t.startApplePay()}}},{key:"registerPaymentRequestEventListeners",value:function(){var t=this.activeTransaction();t&&Sc(t.response.channels)?this.registerApplePayEventListener():qv(this.paymentRequestContainer)}},{key:"startApplePay",value:function(){var t,n,s,a,i,o=this,l="apple pay",c=this.activeTransaction();if(c){var d={channel:"apple_pay",paymentMethod:l,currency:c.currency,amount:c.amount},p={channel:"apple_pay",currency:c.currency,amount:c.amount,timeSpent:c.getTimeSpent()};try{c.logAttempt(l),this.sendAnalyticsEventToCheckout(iy,d);var m=(t={currency:c.response.currency,amount:c.response.amount,merchantName:c.response.merchant_name,interval:c.response.plan_details&&c.response.plan_details.interval},n=t.currency,s=t.amount,a=t.merchantName,i=t.interval,ze({countryCode:"NG",currencyCode:n,merchantCapabilities:["supports3DS","supportsCredit","supportsDebit"],supportedNetworks:["visa","masterCard"],requiredBillingContactFields:["postalAddress","name","phone","email"],total:{label:"".concat(a," - Paystack"),type:"final",amount:String(n0(s))}},typeof i=="string"&&i.trim()!==""&&{lineItems:[{label:Hv(i),amount:String(n0(s))}]})),f=new window.ApplePaySession(pt.applePayVersion,m);f.onvalidatemerchant=function(y){var h=function(x){var k=x.transactionId,w=x.validationURL,g=x.merchantName,b=x.domainName,j=b===void 0?window&&window.location&&window.location.hostname:b,C="".concat(pt.paymentBaseUrl).concat(pt.applePayValidateSessionPath),E=s0({transaction:k,sessionUrl:w,displayName:g,domainName:j});return fetch(C,ze(ze({},r0),{},{body:E})).then(function(S){return S.json()})}({validationURL:y.validationURL,transactionId:c.id,merchantName:c.response.merchant_name});h.then(function(x){x.status!=="success"?c.onSetupError(x):f.completeMerchantValidation(x.data),c.logValidationResponse(x.message)}).catch(function(x){c.onSetupError(x)})},f.oncancel=function(){K.preCheckoutModal||c.onCancel()},f.onpaymentauthorized=function(y){var h=y.payment,x=function(k){var w=k.transactionId,g=k.payment,b="".concat(pt.paymentBaseUrl).concat(pt.applePayChargePath),j=s0({transaction:w,paymentObject:JSON.stringify(g)});return fetch(b,ze(ze({},r0),{},{body:j})).then(function(C){return C.json()})}({transactionId:c.id,payment:h});x.then(function(k){c.logAPIResponse(k,l),k.status==="success"?(f.completePayment(f.STATUS_SUCCESS),c.onSuccess(k),o.sendAnalyticsEventToCheckout(oy,p)):(f.completePayment(f.STATUS_FAILURE),c.onSetupError(k),o.sendAnalyticsEventToCheckout(d0,{channel:"apple_pay",message:k&&k.message||"Transaction attempt failed"})),K.closePreCheckoutModal(k.status)}).catch(function(k){f.completePayment(f.STATUS_FAILURE),c.onSetupError(k),o.sendAnalyticsEventToCheckout(d0,{channel:"apple_pay",message:k&&k.message||"Error occurred"}),K.closePreCheckoutModal("failed")})},f.begin()}catch(y){c.onSetupError(y)}}else ol("Could not initiate apple pay transaction")}},{key:"resumeTransaction",value:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=n.onSuccess,a=n.onCancel,i=n.onLoad,o=n.onError;return this.newTransaction({accessCode:t,onSuccess:s,onCancel:a,onLoad:i,onError:o})}},{key:"activeTransaction",value:function(){var t=this.transactions.filter(function(s){return s.isActive}),n=t.length?t[t.length-1]:null;return n}},{key:"cancelTransaction",value:function(t){var n=this.transactions.find(function(s){return s.id===t})||this.activeTransaction();n&&(n.cancel(),this.close())}},{key:"respondToEvent",value:function(t){if(t){var n,s,a=this.activeTransaction();try{var i=t.data||t.message,o=i.event,l=i.data;if(o)switch(o){case"loaded:checkout":if(this.isLoaded=!0,a){var c=this.checkoutIframe,d=a.urlParameters,p=a.response;c0({checkoutIframe:c,urlParameters:p?{accessCode:p.access_code,language:d==null?void 0:d.language}:d})}break;case"loaded:transaction":n=this.backgroundIframe,(s=n.contentWindow.document)&&(s.getElementById("app-loader").style.display="none"),this.preCheckoutModal&&this.openPreCheckoutModal(),a.onLoad(l);break;case"error":l.type==="setup"?a.onSetupError(l):a.logError(l);break;case"cancel":case"close":this.close();var m=l&&l.status;m&&a.setStatus(m),!(this.paymentRequestContainer&&ii(this.paymentRequestContainer)&&!this.preCheckoutModal)&&(a.isActive=!1),a.onCancel();break;case"transfer:pending":this.close();var f=l&&l.status;f&&a.setStatus(f),a.onBankTransferConfirmationPending();break;case"success":this.close(),a.onSuccess(l)}}catch{}}}},{key:"respondToEmbedEvents",value:function(t){var n,s,a=this.activeTransaction(),i=t.data||t.message;if(i&&(typeof i=="string"||i instanceof String)){var o={action:s=(n=i)&&typeof n=="string"?n.split(" ")[0]:null,data:s?n.split(" ").slice(2).join(" "):null};o&&o.action==="PaystackClose"&&o.data&&a.onSuccess(i),o.action==="PaystackTLSClose"&&a.cancel()}}},{key:"animateCheckoutIn",value:function(){var t,n=this;if(!this.isOpen){var s=this.checkoutIframe,a=this.backgroundIframe;(t={checkoutIframe:s,backgroundIframe:a},new Promise(function(i,o){t||o("No dom element provided");var l=t.checkoutIframe,c=t.backgroundIframe;l&&c||o("No dom element provided"),l.style.display="",l.style.visibility="visible",c.style.display="",c.style.visibility="visible",i()})).then(function(){n.checkoutIframe.contentWindow.postMessage("render","*")}),this.isOpen=!0}}},{key:"open",value:function(t,n){t&&(c0({checkoutIframe:this.checkoutIframe,urlParameters:t}),n||this.animateCheckoutIn())}},{key:"close",value:function(){var t=this;if(this.isOpen){var n,s=this.checkoutIframe,a=this.backgroundIframe;(n={checkoutIframe:s,backgroundIframe:a},new Promise(function(i,o){n||o("No dom element provided");var l=n.checkoutIframe,c=n.backgroundIframe;l&&c||o("No dom element provided"),c.style.opacity=0,l.style.display="none",l.style.visibility="hidden",setTimeout(function(){c.style.display="none",c.style.visibility="hidden",c.style.opacity=1,i()},300)})).then(function(){t.checkoutIframe.contentWindow.postMessage("close","*")}),this.isOpen=!1}}},{key:"isLoaded",value:function(){return this.isLoaded}}],[{key:"setup",value:function(t){var n=t&&t.container;K||(K=new e({isDeprecatedApi:!0,isEmbed:n})),l0("PaystackPop.setup()","new PaystackPop()","Please consult our documentation at https://developers.paystack.co/docs/paystack-inline");var s=K.newTransaction(t,"deprecated"),a=s.urlParameters;if(n){var i="".concat(pt.siteUrl,"/assets/payment/production/inline.html?").concat(lf(a)),o=function(l,c){var d=rl("embed-checkout-".concat(l));return d.style.cssText=`
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
`,d.src=c,d.id=l,d.name=l,d}(K.id,i);(function(l,c){var d=document.getElementById(l);d.innerHTML="",d.removeAttribute("style"),d.className="paystack-embed-container",d.style.position="relative",d.style.width="100%",d.appendChild(c)})(t.container,o),o.onload=function(){var l;o.contentWindow.postMessage("PaystackOpen ".concat(K.id),"*"),l=o,new Promise(function(c,d){l||d("No dom element provided"),l.style.display="",l.style.visibility="visible",c()})}}else s.openIframe=function(){l0("openIframe","open","Please consult our documentation at https://developers.paystack.co/docs/paystack-inline"),K.open(a)};return s}}]),e}();if(u0=e0().length>0,p0=Ir()&&Ir().parentElement.tagName==="FORM",u0&&p0){var ll,rr=function(){var e={},t=Ir();return e0().forEach(function(n){var s=t.getAttribute(n),a=n.split("data-")[1].replace(/-([a-z])/g,function(i){return i[1].toUpperCase()});e[a]=s}),function(n){if(n.buttonId&&!document.getElementById(n.buttonId))throw new Error("Please make sure the buttonId is an element available in the DOM");var s=ze({},n);s.buttonText=n.buttonText||"Pay",s.buttonVariant="normal",s.buttonWordmarkVariant="normal";var a=["normal","light"];return n.buttonVariant&&a.indexOf(n.buttonVariant)>-1&&(s.buttonVariant=n.buttonVariant),n.buttonWordmarkVariant&&a.indexOf(n.buttonWordmarkVariant)>-1&&(s.buttonWordmarkVariant=n.buttonWordmarkVariant),s}(e)}(),h0=Ir().parentElement;K||(K=new vf),function(e){var t;if(e.id)(t=document.getElementById(e.id)).setAttribute("data-inline-id",e.id);else{var n=document.createElement("div");n.id="inline-button-".concat(e.inlineId),n.innerHTML=function(s){var a,i,o={normal:`
  <svg id="inline-button-wordmark" width="137" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M.037 5.095l1.075-.135c-.011-.774-.025-1.944-.013-2.149C1.19 1.364 2.38.134 3.81.013 3.9.006 3.99.002 4.077 0a2.947 2.947 0 0 1 2.046.76c.574.509.95 1.26 1.008 2.007.015.192.01 1.491.01 2.257l1.096.163L8.2 11.44 4.093 12 0 11.346l.037-6.251zm4.106-.514l1.724.256c-.007-.933-.05-2.295-.26-2.654-.319-.545-.846-.867-1.443-.88h-.063c-.607.008-1.138.322-1.458.864-.222.378-.266 1.66-.265 2.637l1.765-.223zM18.228 10.108c-.576 0-1.064-.072-1.464-.216a2.864 2.864 0 0 1-.972-.6 2.552 2.552 0 0 1-.588-.864 4.067 4.067 0 0 1-.252-1.044h1.008c.032.256.088.5.168.732.08.224.204.424.372.6.168.168.388.304.66.408.28.096.636.144 1.068.144.28 0 .536-.036.768-.108.24-.08.448-.192.624-.336.176-.144.312-.316.408-.516.104-.2.156-.42.156-.66 0-.24-.032-.448-.096-.624a1.02 1.02 0 0 0-.336-.468 1.885 1.885 0 0 0-.636-.324 6.4 6.4 0 0 0-1.008-.228 8.79 8.79 0 0 1-1.212-.276 3.246 3.246 0 0 1-.9-.432 1.982 1.982 0 0 1-.564-.672c-.128-.272-.192-.6-.192-.984 0-.328.068-.632.204-.912.136-.288.324-.536.564-.744.248-.208.54-.372.876-.492.336-.12.708-.18 1.116-.18.864 0 1.548.204 2.052.612.512.4.812.984.9 1.752h-.936c-.104-.544-.316-.932-.636-1.164-.32-.24-.78-.36-1.38-.36-.592 0-1.04.132-1.344.396a1.255 1.255 0 0 0-.444.996c0 .208.024.396.072.564.056.16.156.3.3.42.152.12.36.228.624.324a6.72 6.72 0 0 0 1.068.228c.48.072.9.168 1.26.288.36.12.664.276.912.468s.432.428.552.708c.128.28.192.624.192 1.032 0 .36-.076.696-.228 1.008a2.472 2.472 0 0 1-.612.804c-.264.224-.58.4-.948.528-.36.128-.752.192-1.176.192zM25.355 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM32.091 10.108c-.44 0-.848-.072-1.224-.216a3.054 3.054 0 0 1-.972-.636 3.12 3.12 0 0 1-.648-1.008 3.626 3.626 0 0 1-.228-1.32v-.096c0-.48.08-.916.24-1.308.16-.4.376-.74.648-1.02.28-.28.604-.496.972-.648.376-.16.772-.24 1.188-.24.328 0 .644.04.948.12.312.08.588.208.828.384.248.168.456.392.624.672.168.28.276.62.324 1.02h-.984c-.08-.496-.284-.848-.612-1.056-.32-.208-.696-.312-1.128-.312a1.93 1.93 0 0 0-.804.168c-.24.112-.452.272-.636.48a2.23 2.23 0 0 0-.42.744 2.991 2.991 0 0 0-.156.996v.096c0 .776.188 1.364.564 1.764.384.392.88.588 1.488.588.224 0 .436-.032.636-.096a1.651 1.651 0 0 0 .96-.768c.112-.192.18-.416.204-.672h.924a2.595 2.595 0 0 1-.276.948 2.386 2.386 0 0 1-.576.744c-.24.208-.52.372-.84.492-.32.12-.668.18-1.044.18zM38.335 10.108a2.83 2.83 0 0 1-.876-.132 1.724 1.724 0 0 1-.684-.42 2.145 2.145 0 0 1-.456-.756c-.112-.304-.168-.672-.168-1.104V3.724h.996v3.924c0 .552.116.956.348 1.212.24.256.608.384 1.104.384.224 0 .44-.036.648-.108.208-.072.392-.18.552-.324.16-.144.288-.324.384-.54.096-.216.144-.464.144-.744V3.724h.996V10h-.996v-.996c-.144.296-.388.556-.732.78-.336.216-.756.324-1.26.324zM43.216 3.724h.996v1.128c.2-.352.452-.64.756-.864.312-.232.748-.356 1.308-.372v.936a4.461 4.461 0 0 0-.852.12 1.647 1.647 0 0 0-.66.324 1.472 1.472 0 0 0-.408.612c-.096.248-.144.564-.144.948V10h-.996V3.724zM50 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM56.496 10.108c-.408 0-.788-.068-1.14-.204a2.683 2.683 0 0 1-.9-.612 3.01 3.01 0 0 1-.588-.984 4.01 4.01 0 0 1-.204-1.32v-.096c0-.48.072-.92.216-1.32.144-.4.344-.744.6-1.032.256-.296.564-.524.924-.684.36-.16.756-.24 1.188-.24.528 0 .956.112 1.284.336.328.216.584.476.768.78V.724h.996V10h-.996V8.92c-.088.152-.208.3-.36.444a2.792 2.792 0 0 1-.516.384 2.874 2.874 0 0 1-.6.252c-.216.072-.44.108-.672.108zm.108-.828c.288 0 .56-.048.816-.144.256-.096.476-.24.66-.432.184-.2.328-.448.432-.744.112-.304.168-.656.168-1.056v-.096c0-.808-.18-1.404-.54-1.788-.352-.384-.836-.576-1.452-.576-.624 0-1.112.208-1.464.624-.352.416-.528 1.008-.528 1.776v.096c0 .392.048.736.144 1.032.104.296.24.54.408.732.176.192.38.336.612.432.232.096.48.144.744.144zM67.712 10.108c-.512 0-.948-.112-1.308-.336a2.38 2.38 0 0 1-.816-.804V10h-.996V.724h.996V4.78a1.92 1.92 0 0 1 .348-.432c.152-.144.32-.268.504-.372.192-.112.396-.2.612-.264.216-.064.436-.096.66-.096.408 0 .788.072 1.14.216.352.144.652.352.9.624.256.272.456.604.6.996.144.392.216.832.216 1.32v.096c0 .48-.068.92-.204 1.32a3.103 3.103 0 0 1-.576 1.02 2.583 2.583 0 0 1-.9.672 2.937 2.937 0 0 1-1.176.228zm-.096-.828c.624 0 1.1-.2 1.428-.6.328-.408.492-.996.492-1.764V6.82c0-.4-.052-.748-.156-1.044a2.095 2.095 0 0 0-.42-.732 1.53 1.53 0 0 0-.612-.444 1.798 1.798 0 0 0-.744-.156c-.288 0-.56.048-.816.144a1.71 1.71 0 0 0-.648.444c-.184.192-.328.44-.432.744a3.152 3.152 0 0 0-.156 1.044v.096c0 .8.192 1.396.576 1.788.384.384.88.576 1.488.576zM73.63 9.352l-2.46-5.628h1.068l1.92 4.5 1.74-4.5h1.02l-3.468 8.46h-1.008l1.188-2.832zM87.127 3.669A3.138 3.138 0 0 0 86.1 2.95a3.09 3.09 0 0 0-1.228-.25c-.448 0-.848.086-1.187.26a2.199 2.199 0 0 0-.662.497v-.191a.387.387 0 0 0-.214-.348.323.323 0 0 0-.14-.03h-1.315a.314.314 0 0 0-.254.116.377.377 0 0 0-.1.262v8.97c0 .1.034.188.1.258a.34.34 0 0 0 .254.103h1.341a.342.342 0 0 0 .244-.103.336.336 0 0 0 .11-.259v-3.06c.178.202.417.357.702.464.35.134.72.203 1.093.203.43 0 .848-.082 1.242-.248a3.124 3.124 0 0 0 1.04-.724c.305-.326.545-.709.707-1.128a3.93 3.93 0 0 0 .263-1.477c0-.54-.086-1.037-.263-1.477a3.387 3.387 0 0 0-.706-1.12zm-1.204 3.24c-.073.19-.18.362-.315.51a1.415 1.415 0 0 1-1.065.466c-.2.001-.4-.04-.584-.12a1.484 1.484 0 0 1-.49-.346 1.593 1.593 0 0 1-.32-.51 1.738 1.738 0 0 1-.115-.63c0-.224.04-.435.115-.631a1.532 1.532 0 0 1 .804-.846c.185-.086.386-.13.59-.129.215 0 .414.044.593.13.177.083.338.199.474.341a1.622 1.622 0 0 1 .425 1.135c0 .225-.037.436-.112.63zM95.298 2.89h-1.33a.339.339 0 0 0-.246.11.384.384 0 0 0-.108.266v.166a1.856 1.856 0 0 0-.602-.472 2.525 2.525 0 0 0-1.166-.258 3.227 3.227 0 0 0-2.284.964 3.554 3.554 0 0 0-.734 1.123 3.827 3.827 0 0 0-.275 1.477c0 .54.092 1.037.275 1.477.184.434.427.817.728 1.128a3.146 3.146 0 0 0 2.277.973c.437 0 .834-.088 1.173-.259.25-.13.456-.287.608-.471v.177a.34.34 0 0 0 .11.259.341.341 0 0 0 .244.104h1.33a.324.324 0 0 0 .25-.105.349.349 0 0 0 .102-.258V3.267a.377.377 0 0 0-.1-.262.325.325 0 0 0-.252-.115zM93.502 6.9a1.55 1.55 0 0 1-.312.511c-.136.143-.296.26-.473.344-.178.085-.38.129-.596.129-.207 0-.407-.044-.59-.13a1.501 1.501 0 0 1-.791-.855 1.766 1.766 0 0 1-.112-.62c0-.225.038-.436.112-.632.075-.193.181-.364.314-.504.137-.143.3-.26.478-.342.182-.085.382-.129.59-.129.215 0 .417.044.595.13.178.085.338.2.473.341a1.623 1.623 0 0 1 .424 1.135c0 .215-.037.424-.112.622zM108.567 6.094a2.265 2.265 0 0 0-.654-.402c-.247-.101-.509-.181-.785-.235l-1.014-.204c-.26-.05-.441-.117-.543-.203a.328.328 0 0 1-.136-.264c0-.11.063-.2.189-.282.137-.086.329-.13.566-.13.26 0 .518.053.757.157.243.106.471.226.67.36.295.187.546.162.727-.053l.487-.57a.543.543 0 0 0 .152-.357c0-.128-.064-.245-.185-.351-.207-.184-.533-.378-.971-.568-.437-.192-.987-.29-1.637-.29-.427 0-.82.058-1.168.172-.35.116-.65.276-.893.474-.245.204-.438.44-.57.713a2 2 0 0 0-.198.875c0 .56.167 1.017.496 1.358.328.333.766.56 1.304.67l1.054.232c.3.062.528.132.675.21.129.067.19.163.19.297 0 .12-.061.227-.188.324-.133.104-.342.155-.622.155a1.83 1.83 0 0 1-.831-.19 3.056 3.056 0 0 1-.678-.458.995.995 0 0 0-.307-.17c-.126-.037-.268.003-.431.13l-.583.461c-.169.145-.24.32-.209.522.029.194.19.394.491.62.269.193.614.368 1.029.518.415.151.901.229 1.453.229.444 0 .854-.058 1.215-.172.362-.119.681-.278.941-.48a2.056 2.056 0 0 0 .819-1.663c0-.319-.053-.6-.165-.836a1.843 1.843 0 0 0-.447-.6zM114.383 7.73a.363.363 0 0 0-.295-.192.55.55 0 0 0-.343.113c-.095.062-.198.11-.306.141a.75.75 0 0 1-.426.013.43.43 0 0 1-.181-.093.554.554 0 0 1-.143-.204.92.92 0 0 1-.059-.362v-2.46h1.731c.099 0 .188-.04.266-.117a.368.368 0 0 0 .112-.26V3.268a.369.369 0 0 0-.115-.268.38.38 0 0 0-.263-.109h-1.732V1.216a.354.354 0 0 0-.108-.27.347.347 0 0 0-.243-.104h-1.344a.36.36 0 0 0-.34.226.371.371 0 0 0-.027.148V2.89h-.767a.324.324 0 0 0-.255.115.385.385 0 0 0-.098.262V4.31a.4.4 0 0 0 .212.346c.044.021.092.032.14.03h.768v2.925c0 .39.069.726.2 1.003.132.274.305.504.514.676.217.178.465.31.731.388.27.084.551.126.833.126.385 0 .75-.061 1.094-.18a2.13 2.13 0 0 0 .861-.552c.152-.181.17-.381.046-.581l-.463-.76zM121.672 2.89h-1.329a.339.339 0 0 0-.244.11.39.39 0 0 0-.08.122.394.394 0 0 0-.027.144v.166a1.906 1.906 0 0 0-.605-.472c-.335-.173-.726-.258-1.168-.258-.42 0-.834.083-1.226.249a3.24 3.24 0 0 0-1.055.715 3.528 3.528 0 0 0-.734 1.123 3.79 3.79 0 0 0-.276 1.477c0 .54.092 1.037.275 1.477.184.434.428.817.729 1.128a3.138 3.138 0 0 0 2.273.973 2.59 2.59 0 0 0 1.175-.259c.255-.13.457-.287.612-.471v.177a.34.34 0 0 0 .108.259.343.343 0 0 0 .243.104h1.329a.335.335 0 0 0 .252-.105.364.364 0 0 0 .102-.258V3.267a.38.38 0 0 0-.1-.262.332.332 0 0 0-.115-.087.311.311 0 0 0-.139-.028zM119.876 6.9a1.534 1.534 0 0 1-.786.855 1.362 1.362 0 0 1-.594.129c-.207 0-.405-.044-.588-.13a1.516 1.516 0 0 1-.792-.855 1.757 1.757 0 0 1-.113-.62c0-.225.037-.436.112-.632.073-.187.179-.358.314-.504.138-.143.3-.26.479-.342.184-.086.385-.13.588-.129.217 0 .415.044.594.13.181.085.34.2.472.341.134.143.24.313.314.504a1.73 1.73 0 0 1 0 1.253zM128.978 7.64l-.763-.593c-.146-.118-.284-.15-.404-.1a.742.742 0 0 0-.279.205 2.527 2.527 0 0 1-.583.535c-.192.122-.444.183-.742.183-.219 0-.42-.04-.6-.122a1.423 1.423 0 0 1-.469-.342 1.575 1.575 0 0 1-.308-.51 1.751 1.751 0 0 1-.106-.617c0-.228.034-.438.106-.632.07-.192.173-.363.308-.503.135-.144.295-.26.472-.342.187-.088.391-.132.597-.13.298 0 .547.064.742.187.198.126.396.306.584.534.078.092.17.16.278.206.122.048.259.016.401-.101l.762-.594a.53.53 0 0 0 .201-.269.437.437 0 0 0-.034-.365 3.329 3.329 0 0 0-1.18-1.127c-.504-.291-1.108-.441-1.784-.441a3.519 3.519 0 0 0-2.51 1.033c-.322.322-.576.71-.747 1.137a3.68 3.68 0 0 0-.273 1.407c0 .495.093.968.273 1.402.173.424.427.808.747 1.128a3.527 3.527 0 0 0 2.51 1.034c.676 0 1.28-.149 1.784-.444a3.286 3.286 0 0 0 1.182-1.13.411.411 0 0 0 .055-.173.415.415 0 0 0-.023-.182.624.624 0 0 0-.197-.273zM136.06 9.045l-2.104-3.143 1.801-2.415c.094-.139.119-.272.075-.397-.031-.09-.116-.2-.334-.2h-1.425a.52.52 0 0 0-.234.058.482.482 0 0 0-.209.205L132.191 5.2h-.349V.363a.37.37 0 0 0-.099-.26.352.352 0 0 0-.253-.103h-1.332a.37.37 0 0 0-.337.22.346.346 0 0 0-.027.143V9.29c0 .103.038.193.11.259a.353.353 0 0 0 .254.104h1.333a.328.328 0 0 0 .251-.105.346.346 0 0 0 .075-.119.333.333 0 0 0 .024-.14V6.927h.386l1.571 2.446c.112.187.267.281.46.281h1.491c.226 0 .32-.11.358-.202.054-.13.038-.262-.047-.406zM102.863 2.89h-1.489a.389.389 0 0 0-.298.122.544.544 0 0 0-.13.249l-1.099 4.167h-.268l-1.182-4.167a.66.66 0 0 0-.113-.247.329.329 0 0 0-.264-.124h-1.544c-.199 0-.325.066-.372.193a.588.588 0 0 0-.002.37l1.887 5.865c.03.093.08.17.145.232a.388.388 0 0 0 .281.104h.798l-.066.19-.19.547a.872.872 0 0 1-.29.426.7.7 0 0 1-.442.148.956.956 0 0 1-.4-.09 1.842 1.842 0 0 1-.35-.209.62.62 0 0 0-.335-.115h-.016c-.13 0-.243.074-.334.216l-.474.708c-.193.304-.086.504.039.615.234.224.528.399.875.524.344.125.723.186 1.126.186.682 0 1.252-.187 1.689-.565.435-.376.756-.887.952-1.524l2.188-7.258c.05-.155.05-.284.005-.389-.037-.08-.125-.174-.327-.174z" fill="#011B33"/>
    </svg>`,light:cf};return`
    <style>
      #inline-button-`.concat(s.inlineId,` {
        position: relative;
        text-align: center;
        display: inline-block;
      }
      #inline-button-`).concat(s.inlineId,`__trigger {
        `).concat((a=s.variant||"normal",i={normal:`
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
      #inline-button-`).concat(s.inlineId,`__trigger:hover {
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
      }
      #inline-button-`).concat(s.inlineId,`__trigger:active {
        transform: translateY(3px);
      }
    </style>
    <button id="inline-button-`).concat(s.inlineId,'__trigger" data-inline-id="').concat(s.inlineId,'">').concat(s.text||"Pay"," ").concat(s.currency||"NGN"," ").concat(s.amount,`</button>
    <div id="inline-button-`).concat(s.inlineId,`__wordmark">
      `).concat(o[s.wordmarkVariant||"normal"],`
    </div>
  `)}(e),e.parent.parentNode.insertBefore(n,e.parent.nextSibling),t=Av(n.getElementsByTagName("button"),1)[0]}return t}({inlineId:K.id,amount:rr.amount/100,currency:rr.currency,id:rr.buttonId,text:rr.buttonText,variant:rr.buttonVariant,wordmarkVariant:rr.buttonWordmarkVariant,parent:Ir()}).addEventListener("click",function(e){e.preventDefault(),ll?K.resumeTransaction(ll.accessCode):ll=K.newTransaction(ze(ze({},rr),{},{onSuccess:function(t){var n,s,a,i,o,l;n={type:"hidden",name:"reference",value:t.reference,parent:h0},s=n.type,a=n.value,i=n.name,o=n.parent,(l=document.createElement("input")).type=s,l.value=a,l.name=i,o.appendChild(l),h0.submit()}}))})}const ly="/imgs/bob.jpg";const cy=({setcredits:e})=>{const t=JSON.parse(localStorage.getItem("userInfo")),[n,s]=u.useState((t==null?void 0:t.credits)||0);let a=X+"/api/v1/user/credits";const[i,o]=u.useState("");u.useState("");const[l,c]=u.useState(!1),[d,p]=u.useState(!1),[m,f]=u.useState(""),y=new Date("Jan 2, 2026 00:00:00").getTime();u.useEffect(()=>{const g=setInterval(function(){const b=new Date().getTime(),j=y-b,C=Math.floor(j/(1e3*60*60*24)),E=Math.floor(j%(1e3*60*60*24)/(1e3*60*60)),S=Math.floor(j%(1e3*60*60)/(1e3*60)),N=Math.floor(j%(1e3*60)/1e3);if(o(`${C}d ${E}h ${S}m ${N}s left`),j<0){clearInterval(g);const _=document.querySelector(".endsin");_.innerHTML="Promo has ended",_.classList.add("pay-promo-ended")}},1e3);return()=>clearInterval(g)},[]);const h=async g=>{var j;c(!0);const b=JSON.parse(localStorage.getItem("userInfo"));try{const E=await(await fetch(oa+"/api/v1/initialize-payment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:(b==null?void 0:b.email)||"customer@email.com",amount:g.amountInGhs,tierName:g.name})})).json(),S=E.access_code||((j=E.data)==null?void 0:j.access_code);S&&new vf().resumeTransaction(S,{onSuccess:_=>{k(g,b,_.reference)},onCancel:()=>c(!1),onError:()=>{c(!1),f("🔴 Payment window error."),p(!0)}})}catch{c(!1),f("🔴 Failed to initialize transaction."),p(!0)}},x=g=>{s(g),e&&e(g)},k=(g,b,j)=>{console.log(j);let C={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({reference:j,tierName:g.name})};Pe(a,C).then(E=>{const S=(E==null?void 0:E.added)||g.creditReward,N={...b,credits:((b==null?void 0:b.credits)||0)+S,tier:g.premiumType};localStorage.setItem("userInfo",JSON.stringify(N)),x(N.credits),f(`🟢 Success! ${S} credits added.`),p(!0)}).catch(E=>{console.error("Verification error:",E),f("🔴 Payment verification failed or server error."),p(!0)}).finally(()=>c(!1))},w=()=>{window.open("","_self",""),window.close()};return r.jsxs("div",{className:"pay-page",children:[d&&r.jsx(uy,{setfetchError:p,errorMessage:m}),r.jsxs("div",{className:"pay-card",children:[r.jsx("div",{className:"pay-dotgrid","aria-hidden":"true"}),r.jsx("div",{className:"pay-glow","aria-hidden":"true"}),r.jsx("button",{type:"button",className:"pay-return",onClick:w,"aria-label":"Go back",style:{position:"fixed",top:16,left:16,zIndex:1e3},children:r.jsx(kr,{})}),r.jsxs("div",{className:"pay-header",children:[r.jsx("h2",{className:"pay-title",children:"Choose Your Plan"}),r.jsx("h2",{className:"endsin pay-promo",children:r.jsxs("p",{className:"cdown",children:["🎟️ ",i]})}),r.jsxs("p",{className:"pay-credits",children:[r.jsx("span",{className:"pay-icon-chip",children:"💳"}),"Your Credits ",r.jsx("strong",{children:n})]})]}),r.jsx("div",{className:"pay-grid",children:dy.map((g,b)=>r.jsxs("div",{className:"pay-tier",children:[r.jsx("div",{className:"pay-tier-image-wrap",children:r.jsx("img",{src:g.image,className:"pay-tier-image",alt:g.name})}),r.jsxs("div",{className:"pay-tier-name",children:[r.jsx("span",{className:"pay-tier-icon",children:g.icon}),g.name]}),r.jsxs("div",{className:"pay-tier-price",children:[g.oldPrice&&r.jsx("span",{className:"pay-tier-price-old",children:g.oldPrice}),r.jsxs("span",{className:"pay-tier-price-new",children:[g.oldPrice?"🎟️ ":"",g.priceDisplay]})]}),r.jsx("ul",{className:"pay-tier-features",children:g.description.map((j,C)=>r.jsxs("li",{className:"pay-tier-feature",children:[r.jsx("span",{className:"pay-check",children:"✔"})," ",j]},C))}),r.jsx("button",{className:`pay-cta${g.button==="default"?" pay-cta-active":""}`,onClick:()=>g.button!=="default"&&h(g),style:{pointerEvents:g.button==="default"?"none":"all"},children:g.button!=="default"?g.button:"Active"})]},g.name+b))})]}),l?r.jsx(ss,{opacity:1,indexed:100,mainlogo:on}):r.jsx(ss,{opacity:0,indexed:-100})]})},dy=[{name:"Normal User",premiumType:"normal-user",priceDisplay:"Free",amountInGhs:0,creditReward:0,icon:r.jsx(Lx,{style:{color:"#FFD700"}}),image:ly,description:["Access to referral tools","Basic analytics"],button:"default"},{name:"Credit Pack",premiumType:"credits",priceDisplay:"GHS 25",amountInGhs:25,creditReward:200,icon:r.jsx(cv,{style:{color:"#FFD700"}}),image:Nh,description:["200 AI Credits","Standard Support","No Expiry"],button:"Buy Now"},{name:"Premium User",premiumType:"premium-user",oldPrice:"GHS 20/month",priceDisplay:"GHS 50 lifetime",amountInGhs:50,creditReward:600,icon:r.jsx(Dg,{style:{color:"#FFD700"}}),image:Sh,description:["Access to referral tools","500 + 100 Bonus Credits","Priority support"],button:"Upgrade"},{name:"Affiliate",premiumType:"affiliate",oldPrice:"GHS 70/month",priceDisplay:"GHS 500 lifetime",amountInGhs:500,creditReward:1500,icon:r.jsx(rx,{style:{color:"#FFD700"}}),image:_h,description:["All Premium features","1500 Bonus Credits","Monthly Earns: 1.5k-2k cedis"],button:"Go Pro"}],uy=({errorMessage:e,setfetchError:t})=>(u.useEffect(()=>{const n=setTimeout(()=>t(!1),3e3);return()=>clearTimeout(n)},[]),r.jsx("div",{className:"pay-toast",children:r.jsx("span",{className:"pay-toast-text",children:e.toLowerCase()})}));const py=X+"/api/v1/auth/reset-password",f0=8,hy=({onBack:e,onResetSuccess:t})=>{const n=u.useMemo(()=>new URLSearchParams(window.location.search).get("token")||"",[]),[s,a]=u.useState(!1),[i,o]=u.useState(null),[l,c]=u.useState(""),[d,p]=u.useState(""),[m,f]=u.useState(!1),[y,h]=u.useState(!1),[x,k]=u.useState(!n),w=(E,S)=>o({type:E,message:S}),g={length:l.length>=f0,letter:/[a-zA-Z]/.test(l),number:/\d/.test(l),match:l.length>0&&l===d},b=g.length&&g.letter&&g.number,j=async E=>{if(E.preventDefault(),!b){w("error","Password doesn't meet the requirements below.");return}if(l!==d){w("error","Passwords do not match.");return}a(!0);try{const S=await fetch(py,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:n,newPassword:l})}),N=await un(S)??{},_=_r(N);if(!S.ok){if(_==="VALIDATION_ERROR"){const z=Object.values($1(N));throw new Error(z.length?z.join(" "):Ct(N,S.status))}throw S.status>=500?new Error("Couldn't reset your password right now. Please try again in a moment."):S.status===400||S.status===401?(k(!0),new Error(Ct(N,S.status,"This reset link is invalid or has expired."))):new Error(Ct(N,S.status,"Couldn't reset your password. Please try again."))}h(!0),w("success","🟢 Password updated successfully!"),t&&t(N)}catch(S){w("error",`🔴 ${S.message}`)}finally{a(!1)}},C=()=>{window.location.href="/"};return r.jsxs("div",{className:"reset-page",children:[i&&r.jsx(fy,{type:i.type,message:i.message,onDone:()=>o(null)}),r.jsxs("div",{className:"reset-card",children:[r.jsx("div",{className:"reset-dotgrid","aria-hidden":"true"}),r.jsx("div",{className:"reset-glow","aria-hidden":"true"}),r.jsx("button",{type:"button",className:"reset-return",onClick:C,"aria-label":"Go back",children:r.jsx(kr,{})}),x?r.jsxs("div",{className:"reset-header",children:[r.jsx("h2",{className:"reset-title",children:"Link expired"}),r.jsx("p",{className:"reset-subtitle",children:"This password reset link is invalid or has expired. Please request a new one."}),r.jsx("button",{type:"button",className:"reset-cta",onClick:C,children:"Back to login"})]}):y?r.jsxs("div",{className:"reset-header",children:[r.jsx("div",{className:"reset-success-icon",children:r.jsx(Uh,{})}),r.jsx("h2",{className:"reset-title",children:"Password updated"}),r.jsx("p",{className:"reset-subtitle",children:"Your password has been changed successfully."}),r.jsx("button",{type:"button",className:"reset-cta",onClick:C,children:"Back to login"})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"reset-header",children:[r.jsx("h2",{className:"reset-title",children:"Set a new password"}),r.jsx("p",{className:"reset-subtitle",children:"Choose a strong password you haven't used before."})]}),r.jsxs("form",{className:"reset-form",onSubmit:j,children:[r.jsx("label",{className:"reset-label",htmlFor:"reset-new-password",children:"New password"}),r.jsxs("div",{className:"reset-input-wrap",children:[r.jsx(Hu,{className:"reset-input-icon"}),r.jsx("input",{id:"reset-new-password",type:m?"text":"password",className:"reset-input",placeholder:"••••••••",value:l,onChange:E=>c(E.target.value),autoComplete:"new-password",required:!0}),r.jsx("button",{type:"button",className:"reset-input-toggle",onClick:()=>f(E=>!E),"aria-label":m?"Hide password":"Show password",children:m?r.jsx(si,{}):r.jsx(ai,{})})]}),r.jsx("label",{className:"reset-label",htmlFor:"reset-confirm-password",children:"Confirm password"}),r.jsxs("div",{className:"reset-input-wrap",children:[r.jsx(Hu,{className:"reset-input-icon"}),r.jsx("input",{id:"reset-confirm-password",type:m?"text":"password",className:"reset-input",placeholder:"••••••••",value:d,onChange:E=>p(E.target.value),autoComplete:"new-password",required:!0})]}),r.jsxs("ul",{className:"reset-requirements",children:[r.jsxs("li",{className:g.length?"reset-req-met":"",children:["At least ",f0," characters"]}),r.jsx("li",{className:g.letter?"reset-req-met":"",children:"Contains a letter"}),r.jsx("li",{className:g.number?"reset-req-met":"",children:"Contains a number"}),r.jsx("li",{className:g.match?"reset-req-met":"",children:"Passwords match"})]}),r.jsx("button",{type:"submit",className:"reset-cta",children:"Update password"})]})]})]}),s?r.jsx(ss,{opacity:1,indexed:100,mainlogo:on}):r.jsx(ss,{opacity:0,indexed:-100})]})},fy=({type:e,message:t,onDone:n})=>(u.useEffect(()=>{const s=setTimeout(()=>n(),3e3);return()=>clearTimeout(s)},[]),r.jsx("div",{className:`reset-toast${e==="error"?" reset-toast-error":""}`,children:r.jsx("span",{className:"reset-toast-text",children:t})}));const my="/assets/jess-f0797696.jpg",W1="/assets/brown-7e264c9e.jpg",gy="/assets/jude-1c8bb029.jpg",G1="/assets/guylogs-3acc9d52.png",m0="/assets/racoon_learn-ac3a52fe.jpg",Va="/assets/titled-1d1d74d4.jpg";function cl({googleLoading:e,blocked:t=!1,blockedMessage:n="Please try again.",onBlockedClick:s,containerRef:a}){return r.jsxs("div",{style:{position:"relative"},children:[r.jsx("br",{}),r.jsx("div",{className:"regbutton",style:{display:"flex",alignItems:"center",border:"1px solid #ffffff9a",zIndex:0,pointerEvents:"none",borderRadius:"5px",justifyContent:"center",fontWeight:600,opacity:e?.7:1},children:e?r.jsxs(r.Fragment,{children:[r.jsx(wc,{style:{fontSize:"1.1rem"}})," Signing in…"]}):r.jsxs(r.Fragment,{children:[r.jsx(F7,{style:{fontSize:"1.1rem",backgroundColor:"#00aeff",padding:4,marginRight:5,borderRadius:"50%"}}),"Continue with Google"]})}),t&&!e&&r.jsx("div",{style:{position:"absolute",inset:0,zIndex:2,cursor:"pointer"},onClick:()=>s==null?void 0:s(n)}),r.jsx("div",{ref:a,style:{marginTop:15,position:"absolute",inset:0,opacity:1,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",color:"black",pointerEvents:t||e?"none":"auto"}})]})}const g0=[my,gy,G1,W1],Ha=g0[Math.floor(Math.random()*g0.length)],Oe={LOGIN:"login",SIGNUP:"signup",OTP:"otp",FORGOT:"forgot",RESET_SENT:"reset_sent",POLICY:"policy",TERMS:"terms"},xy=60,vy="49165624970-35najh58masjjonbbp944ha3vi2su79l.apps.googleusercontent.com",yy="https://accounts.google.com/gsi/client",x0="google-identity-services",dl=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());function by(e){try{localStorage.setItem("userInfo",JSON.stringify(e))}catch{}}function wy(e){var t,n;try{const s="jfphmdfhigoppbldgnclkpjikkbjmkmo";(n=(t=window.chrome)==null?void 0:t.runtime)!=null&&n.sendMessage&&window.chrome.runtime.sendMessage(s,{action:"syncAuth",userInfo:e},()=>{window.chrome.runtime.lastError})}catch{}}function ky(){const[e,t]=u.useState(""),[n,s]=u.useState(""),[a,i]=u.useState(""),[o,l]=u.useState(""),[c,d]=u.useState(""),[p,m]=u.useState(""),[f,y]=u.useState(""),[h,x]=u.useState(""),[k,w]=u.useState(""),[g,b]=u.useState(""),[j,C]=u.useState(""),[E,S]=u.useState(!1),[N,_]=u.useState(!1),[z,B]=u.useState(Oe.LOGIN),[ee,je]=u.useState(Oe.SIGNUP),[ne,Ce]=u.useState(!1),[A,q]=u.useState(!1),[I,O]=u.useState(!1),[D,Z]=u.useState(!1),[G,Ve]=u.useState(!1),[Se,Ge]=u.useState(0),[Ne,ct]=u.useState(""),[vt,yt]=u.useState(!1),[tt,Ye]=u.useState(null),[he,pn]=u.useState({message:"",visible:!1,isSuccess:!1}),Ae=u.useRef(null),_e=u.useRef(null),[Dt,Jt]=u.useState(!1),T=u.useRef(null),W=u.useRef(Oe.LOGIN),H=u.useRef(j),Y=u.useRef(N),oe=u.useRef(tt);u.useEffect(()=>{H.current=j},[j]),u.useEffect(()=>{Y.current=N},[N]),u.useEffect(()=>{oe.current=tt},[tt]);const F=($,Q=!1)=>{clearTimeout(Ae.current),pn({message:$,visible:!0,isSuccess:Q}),Ae.current=setTimeout(()=>pn(ge=>({...ge,visible:!1})),6e3)};u.useEffect(()=>()=>{clearTimeout(Ae.current),clearInterval(_e.current)},[]),u.useEffect(()=>{fetch(`${X}/api/v1/policies/current`).then($=>$.json()).then($=>{if($!=null&&$.status&&Array.isArray($.data)&&$.data.length>0){const Q=$.data.find(ge=>ge.isActive)??$.data[0];Q!=null&&Q.version&&Ye(Q.version)}}).catch($=>console.error("Failed to fetch active policy version:",$))},[]);const ve=($=xy)=>{Ge($),clearInterval(_e.current),_e.current=setInterval(()=>{Ge(Q=>Q<=1?(clearInterval(_e.current),0):Q-1)},1e3)},P=$=>{var Tt;const Q=(Tt=$.data)==null?void 0:Tt.userData,ut={...(Q&&typeof Q=="object"&&"user"in Q?Q.user:Q)??{},accessToken:$.data.token,refreshToken:$.data.refreshToken};ct($.data.token),by(ut),wy(ut)},ce=ma(),J=()=>{try{ce("/")}catch($){F(String($))}},He=async()=>{O(!0);try{const $={email:e.trim(),firstName:n.trim(),lastName:a.trim(),password:o};j.trim()&&($.referalCode=j.trim()),N&&tt&&($.agreedPolicyVersion=tt);const Q=await fetch(`${X}/api/v1/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify($)}),ge=await un(Q);ge!=null&&ge.status?(P(ge),B(Oe.OTP)):F(Ct(ge,Q.status))}catch{F("Network error — please check your connection and try again.")}finally{O(!1)}},us=async()=>{O(!0);try{const $=await fetch(`${X}/api/v1/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:h.trim(),password:k})}),Q=await un($);Q!=null&&Q.status?(P(Q),F("Welcome back! Signing you in…",!0),setTimeout(J,900)):F(Ct(Q,$.status))}catch{F("Network error — please check your connection and try again.")}finally{O(!1)}},nr=async $=>{if(!($!=null&&$.credential)){F("Google sign-in didn't return a credential — please try again.");return}const Q=W.current!==Oe.SIGNUP,ge=Q?`${X}/api/v1/auth/login`:`${X}/api/v1/auth/google/register`;Z(!0);try{const ut={id_token:$.credential};!Q&&H.current.trim()&&(ut.referalCode=H.current.trim()),!Q&&Y.current&&oe.current&&(ut.agreedPolicyVersion=`${oe.current}`);const Tt=await fetch(ge,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ut)}),en=await un(Tt);en!=null&&en.status?(P(en),Q?(F("Welcome back! Signing you in…",!0),setTimeout(J,900)):B(Oe.OTP)):F(Ct(en,Tt.status))}catch{F("Network error — please check your connection and try again.")}finally{Z(!1)}};u.useEffect(()=>{var ut,Tt;const $=()=>{var en,va;(va=(en=window.google)==null?void 0:en.accounts)!=null&&va.id&&(window.google.accounts.id.initialize({client_id:vy,callback:nr,ux_mode:"popup"}),Jt(!0))},Q=document.getElementById(x0);if(Q){(Tt=(ut=window.google)==null?void 0:ut.accounts)!=null&&Tt.id?$():Q.addEventListener("load",$);return}const ge=document.createElement("script");ge.src=yy,ge.id=x0,ge.async=!0,ge.defer=!0,ge.onload=$,ge.onerror=()=>console.warn("Google Identity script failed to load — likely blocked by an ad blocker or browser extension (common on desktop, rarer on mobile)."),document.body.appendChild(ge)},[]),u.useEffect(()=>{var $,Q;!Dt||!T.current||!((Q=($=window.google)==null?void 0:$.accounts)!=null&&Q.id)||(W.current=z,T.current.innerHTML="",window.google.accounts.id.renderButton(T.current,{type:"standard",theme:"outline",size:"large",width:320}))},[Dt,z]);const Tr=async()=>{if(!(Se>0)){Ve(!0);try{(await fetch(`${X}/api/v1/otp/send/sms`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${Ne}`},body:JSON.stringify({msisdn:p})})).ok?(F("OTP sent successfully!",!0),yt(!0),ve()):F("Failed to send OTP — please try again.")}catch{F("Network error — please retry.")}finally{Ve(!1)}}},En=async()=>{if(!f||String(f).length!==6){F("Please enter the 6-digit OTP code.");return}Ve(!0);try{(await fetch(`${X}/api/v1/otp/verify`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${Ne}`},body:JSON.stringify({path:"msisdn",otp:f})})).ok?(F("Phone verified! You're all set.",!0),setTimeout(J,900)):F("Verification failed — check the code and try again."),yt(!0)}catch{F("Network error — please retry.")}finally{Ve(!1)}},Ft=async()=>{if(!dl(g)){F("Enter a valid email address.");return}O(!0);try{await fetch(`${X}/api/v1/auth/forgot-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:g.trim()})}),B(Oe.RESET_SENT)}catch{F("Network error — please try again.")}finally{O(!1)}},Qe=()=>{if(!dl(e)){F("Add a valid email e.g. you@example.com");return}if(n.trim().length<2){F("First name must be at least 2 characters");return}if(a.trim().length<2){F("Last name must be at least 2 characters");return}if(!o){F("Please enter a password");return}if(/\s/.test(o)){F("Password must not contain spaces");return}if(o.length<5){F("Password must be at least 5 characters");return}if(c!==o){F("Passwords do not match");return}if(!N){F("Please accept the Terms & Privacy Policy to continue");return}He()},dt=()=>{if(!dl(h)){F("Add a valid email e.g. you@example.com");return}if(/\s/.test(h)){F("Email must not contain spaces");return}if(!k){F("Please enter your password");return}if(/\s/.test(k)){F("Password must not contain spaces");return}if(k.length<5){F("Password must be at least 5 characters");return}us()},zr=()=>{if(p.replace(/\D/g,"").length<9){F("Add a valid phone number including country code (e.g. +233…)");return}Tr()},Tn=()=>r.jsxs("div",{className:"noted",style:{justifyContent:"center",opacity:.5,gap:8},children:[r.jsx("span",{style:{flex:1,height:1,background:"rgba(255,255,255,.35)",display:"inline-block"}}),r.jsx("small",{children:"or"}),r.jsx("span",{style:{flex:1,height:1,background:"rgba(255,255,255,.35)",display:"inline-block"}})]}),hn=()=>r.jsxs("div",{className:"noted",style:{fontSize:".72rem",opacity:.55,justifyContent:"center",flexWrap:"wrap",gap:4},children:["By continuing you agree to our ",r.jsx(Re,{target:"_blank",rel:"noopener noreferrer",to:"/policy_and_terms",style:{textDecoration:"underline",cursor:"pointer",color:"cyan"},children:"Terms"})," & ",r.jsx(Re,{target:"_blank",rel:"noopener noreferrer",to:"/policy_and_terms",style:{textDecoration:"underline",cursor:"pointer",color:"cyan"},children:"Privacy Policy"})]}),Xt=({children:$})=>r.jsx("div",{style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:10,padding:"1rem 1.2rem",maxHeight:320,overflowY:"auto",fontSize:".82rem",color:"rgba(255,255,255,0.82)",lineHeight:1.7},children:$}),ye={margin:"1rem 0 .3rem",fontSize:".87rem",fontWeight:600,color:"#fff"},L={margin:"0 0 .25rem"},Ee={color:"#aad4ff"},zn=({title:$,subtitle:Q,children:ge})=>r.jsx("div",{children:r.jsxs("div",{className:"register",children:[he.visible&&r.jsx("div",{className:"successmessage",children:he.isSuccess?`🟢 ${he.message} 🥳`:`🔴 ${he.message}`}),r.jsx("img",{className:"regpic",src:Ha,alt:""}),r.jsxs("div",{className:"regbox",children:[r.jsxs("div",{className:"racoonbox",children:[r.jsx("img",{className:"racoondp",src:m0,alt:""}),r.jsxs("div",{className:"racoonintro",children:[r.jsx("div",{className:"rbackdrop",style:{zIndex:2}}),r.jsx("div",{className:"wmessage",children:$}),r.jsx("div",{className:"regnote",children:Q})]})]}),r.jsx("div",{className:"half ",children:r.jsx("div",{className:"regform",children:r.jsxs("div",{className:"mbox",style:{display:"flex",flexDirection:"column",gap:".75rem"},children:[ge,r.jsxs("div",{className:"regbutton",onClick:()=>B(ee),children:[r.jsx(kr,{className:"micon"})," Got it — go back"]})]})})}),r.jsx("img",{className:"tinylogo",style:{zIndex:2},src:Va,alt:""})]})]})});return z===Oe.POLICY?r.jsx(zn,{title:"Privacy Policy",subtitle:"Last updated "+new Date().toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}),children:r.jsxs(Xt,{children:[r.jsx("h3",{style:ye,children:"1. Information We Collect"}),r.jsx("p",{style:L,children:"We collect your name, email, phone number, and password when you register, plus usage data (pages visited, features used) to improve your experience."}),r.jsx("h3",{style:ye,children:"2. How We Use Your Data"}),r.jsx("p",{style:L,children:"Your data operates and personalises UELearn, delivers OTP codes, and improves the platform. We do not sell your personal data to third parties."}),r.jsx("h3",{style:ye,children:"3. Data Sharing"}),r.jsx("p",{style:L,children:"We share data only with providers who help us run UELearn (cloud infrastructure, SMS delivery). All are bound by data processing agreements. We may disclose data where required by law."}),r.jsx("h3",{style:ye,children:"4. Cookies & Storage"}),r.jsxs("p",{style:L,children:["We use session tokens stored in ",r.jsx("code",{style:{background:"rgba(255,255,255,.15)",padding:"0 4px",borderRadius:3},children:"localStorage"})," to keep you signed in. We do not use third-party advertising trackers."]}),r.jsx("h3",{style:ye,children:"5. Data Retention"}),r.jsx("p",{style:L,children:"Account data is kept while your account is active. You may request deletion at any time by emailing us."}),r.jsx("h3",{style:ye,children:"6. Your Rights"}),r.jsxs("p",{style:L,children:["You may access, correct, or delete your data. Contact ",r.jsx("a",{href:"mailto:privacy@uelearn.app",style:Ee,children:"privacy@uelearn.app"}),"."]}),r.jsx("h3",{style:ye,children:"7. Security"}),r.jsx("p",{style:L,children:"We use industry-standard encryption and access controls. Use a strong, unique password and keep it private."}),r.jsx("h3",{style:ye,children:"8. Changes"}),r.jsx("p",{style:L,children:"Significant changes will be notified via email or in-app notice. Continued use constitutes acceptance of the updated policy."}),r.jsx("h3",{style:ye,children:"9. Contact"}),r.jsx("p",{style:L,children:r.jsx("a",{href:"mailto:privacy@uelearn.app",style:Ee,children:"privacy@uelearn.app"})})]})}):z===Oe.TERMS?r.jsx(zn,{title:"Terms of Service",subtitle:"Last updated "+new Date().toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"}),children:r.jsxs(Xt,{children:[r.jsx("h3",{style:ye,children:"1. Acceptance"}),r.jsx("p",{style:L,children:"By creating a UELearn account you agree to these Terms. If you disagree, do not use the platform."}),r.jsx("h3",{style:ye,children:"2. Eligibility"}),r.jsx("p",{style:L,children:"You must be at least 13 years old. If under 18, you confirm you have parental or guardian consent."}),r.jsx("h3",{style:ye,children:"3. Account Responsibility"}),r.jsx("p",{style:L,children:"You are responsible for keeping your credentials confidential and for all activity under your account. Notify us immediately of any unauthorised access."}),r.jsx("h3",{style:ye,children:"4. Acceptable Use"}),r.jsx("p",{style:L,children:"You agree not to share content in ways that violate academic integrity, reverse-engineer the platform, impersonate others, or upload unlawful material."}),r.jsx("h3",{style:ye,children:"5. Intellectual Property"}),r.jsx("p",{style:L,children:"All content, design, and software on UELearn is owned by or licensed to us. No reproduction or distribution without written permission."}),r.jsx("h3",{style:ye,children:"6. Subscriptions & Payments"}),r.jsx("p",{style:L,children:"Paid features are billed in advance and are non-refundable except where required by law. Pricing changes come with 30 days' notice."}),r.jsx("h3",{style:ye,children:"7. Termination"}),r.jsx("p",{style:L,children:"We may suspend or terminate accounts that violate these Terms. You may delete your account from settings at any time."}),r.jsx("h3",{style:ye,children:"8. Disclaimer"}),r.jsx("p",{style:L,children:'UELearn is provided "as is." We do not guarantee specific academic outcomes. Results depend on individual effort.'}),r.jsx("h3",{style:ye,children:"9. Limitation of Liability"}),r.jsx("p",{style:L,children:"Our liability is limited to the amount you paid us in the 12 months preceding any claim, to the fullest extent permitted by law."}),r.jsx("h3",{style:ye,children:"10. Governing Law"}),r.jsx("p",{style:L,children:"These Terms are governed by the laws of Ghana. Disputes shall be resolved in Accra, Ghana."}),r.jsx("h3",{style:ye,children:"11. Contact"}),r.jsx("p",{style:L,children:r.jsx("a",{href:"mailto:legal@uelearn.app",style:Ee,children:"legal@uelearn.app"})})]})}):r.jsx("div",{children:r.jsxs("div",{className:"register",children:[he.visible&&r.jsx("div",{className:"successmessage",children:he.isSuccess?`🟢 ${he.message} 🥳🥳🥳`:`🔴 ${he.message}`}),r.jsx("img",{className:"regpic",src:Ha,alt:""}),r.jsxs("div",{className:"regbox",children:[r.jsxs("div",{className:"racoonbox",children:[r.jsx("img",{className:"racoondp",src:m0,alt:""}),r.jsxs("div",{className:"racoonintro",children:[r.jsx("div",{className:"rbackdrop",style:{zIndex:2}}),r.jsx("div",{className:"wmessage",children:"Welcome to UELearn"}),r.jsx("div",{className:"regnote",children:"study with aura !"})]})]}),r.jsx("div",{className:"half half2",children:r.jsxs("div",{className:"picked",children:[r.jsx("img",{src:Ha,className:"brown",alt:""}),r.jsx("img",{src:Ha,className:"brown mask",alt:""})]})}),r.jsx("div",{className:"half",children:r.jsxs("div",{className:"regform",children:[z===Oe.FORGOT&&r.jsxs("div",{className:"mbox",children:[r.jsxs("div",{className:"noted",style:{cursor:"pointer"},onClick:()=>B(Oe.LOGIN),children:[r.jsx(kr,{className:"micon"})," Back to sign in"]}),r.jsxs("div",{className:"noted",style:{flexDirection:"column",alignItems:"flex-start",gap:4},children:[r.jsx("strong",{style:{color:"#fff",fontSize:"1rem"},children:"Reset your password"}),r.jsx("span",{children:"Enter your registered email — we'll send a reset link right away."})]}),r.jsx(cl,{googleLoading:D,containerRef:T}),r.jsx(Tn,{}),r.jsxs("div",{className:"inputform",children:[r.jsx(tl,{className:"micon"}),r.jsx("input",{onChange:$=>b($.target.value),type:"email",placeholder:"EMAIL",autoComplete:"email",className:"impbox"})]}),r.jsx("br",{}),r.jsx("div",{className:"regbutton",onClick:Ft,children:I?"Sending…":"Send reset link"})]}),z===Oe.RESET_SENT&&r.jsxs("div",{className:"mbox",children:[r.jsx("div",{style:{textAlign:"center",fontSize:"2.5rem",lineHeight:1},children:"✉️"}),r.jsxs("div",{className:"noted",style:{flexDirection:"column",color:"cyan",alignItems:"center",gap:6,textAlign:"center"},children:[r.jsx("strong",{style:{color:"#fff",fontSize:"1rem"},children:"Check your inbox"}),r.jsxs("span",{children:["If ",r.jsx("strong",{children:g})," is linked to an account, a reset link is on its way. Also check your spam folder."]})]}),r.jsx("div",{className:"regbutton",onClick:()=>B(Oe.LOGIN),children:"Back to sign in"})]}),z===Oe.LOGIN&&r.jsxs("div",{className:"mbox",children:[r.jsx("img",{className:"tlogo",style:{zIndex:2},src:Va,alt:""}),r.jsx("div",{className:"title",children:"UE LEARN"}),r.jsx(cl,{googleLoading:D,containerRef:T}),r.jsx(Tn,{}),r.jsxs("div",{className:"inputform",children:[r.jsx(tl,{className:"micon"}),r.jsx("input",{onChange:$=>x($.target.value),type:"email",placeholder:"EMAIL",autoComplete:"email",className:"impbox"})]}),r.jsxs("div",{className:"inputform",children:[ne?r.jsx(si,{className:"micon",style:{cursor:"pointer"},onClick:()=>Ce(!1)}):r.jsx(ai,{className:"micon",style:{cursor:"pointer"},onClick:()=>Ce(!0)}),r.jsx("input",{onChange:$=>w($.target.value),type:ne?"text":"password",placeholder:"PASSWORD",autoComplete:"current-password",className:"impbox"})]}),r.jsx("div",{className:"noted",style:{justifyContent:"flex-end"},children:r.jsx("span",{style:{cursor:"pointer",textDecoration:"underline",opacity:.75,color:"cyan",fontSize:".8rem"},onClick:()=>B(Oe.FORGOT),children:"Forgot password?"})}),r.jsx("div",{className:"regbutton",onClick:dt,children:I?"Signing in…":"Sign in"}),r.jsxs("div",{className:"noted",children:[r.jsx(Es,{className:"micon"})," Don't have an account?"]}),r.jsx("div",{className:"regbutton",style:{background:"black",color:"white"},onClick:()=>B(Oe.SIGNUP),children:"Sign Up Instead?"}),r.jsx(hn,{returnView:Oe.LOGIN})]}),z===Oe.SIGNUP&&r.jsxs("div",{className:"mbox",children:[r.jsx("img",{className:"tlogo",style:{zIndex:2},src:Va,alt:""}),r.jsx("div",{className:"title",children:"UE LEARN"}),r.jsx(cl,{googleLoading:D,blocked:!N,blockedMessage:"Please accept the Terms & Privacy Policy to continue.👇",onBlockedClick:F,containerRef:T}),E?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"regbutton",onClick:()=>S(!1),children:"Remove referral section"}),r.jsxs("div",{className:"inputform",children:[r.jsx(lx,{className:"micon"}),r.jsx("input",{className:"impbox",type:"text",onChange:$=>C($.target.value),placeholder:"REFERRAL CODE"})]})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"noted",children:[r.jsx(Es,{className:"micon"})," Optional: Add referral code"]}),r.jsx("div",{className:"regbutton",onClick:()=>S(!0),children:"Add referral code"})]}),r.jsx(Tn,{}),r.jsxs("div",{className:"inputform",children:[r.jsx(tl,{className:"micon"}),r.jsx("input",{onChange:$=>t($.target.value),type:"email",placeholder:"EMAIL",autoComplete:"email",className:"impbox"})]}),r.jsxs("div",{className:"inputform",children:[r.jsx(Uu,{className:"micon"}),r.jsx("input",{onChange:$=>s($.target.value),type:"text",placeholder:"FIRST NAME",autoComplete:"given-name",className:"impbox"})]}),r.jsxs("div",{className:"inputform",children:[r.jsx(Uu,{className:"micon"}),r.jsx("input",{onChange:$=>i($.target.value),type:"text",placeholder:"LAST NAME",autoComplete:"family-name",className:"impbox"})]}),r.jsxs("div",{className:"inputform",children:[ne?r.jsx(si,{className:"micon",style:{cursor:"pointer"},onClick:()=>Ce(!1)}):r.jsx(ai,{className:"micon",style:{cursor:"pointer"},onClick:()=>Ce(!0)}),r.jsx("input",{onChange:$=>l($.target.value),type:ne?"text":"password",placeholder:"PASSWORD",autoComplete:"new-password",className:"impbox"})]}),r.jsxs("div",{className:"inputform",children:[A?r.jsx(si,{className:"micon",style:{cursor:"pointer"},onClick:()=>q(!1)}):r.jsx(ai,{className:"micon",style:{cursor:"pointer"},onClick:()=>q(!0)}),r.jsx("input",{onChange:$=>d($.target.value),type:A?"text":"password",placeholder:"CONFIRM PASSWORD",autoComplete:"new-password",className:"impbox"})]}),r.jsxs("label",{className:"noted",style:{cursor:"pointer",userSelect:"none",gap:8,alignItems:"flex-start"},children:[r.jsx("input",{type:"checkbox",checked:N,onChange:$=>_($.target.checked),style:{marginTop:3,accentColor:"cyan",cursor:"pointer",flexShrink:0}}),r.jsxs("span",{style:{fontSize:".78rem",lineHeight:1.6},children:["I agree to the ",r.jsx(Re,{target:"_blank",rel:"noopener noreferrer",to:"/policy_and_terms",style:{textDecoration:"underline",cursor:"pointer",color:"cyan"},children:"Terms"})," & ",r.jsx(Re,{target:"_blank",rel:"noopener noreferrer",to:"/policy_and_terms",style:{textDecoration:"underline",cursor:"pointer",color:"cyan"},children:"Privacy Policy"}),"                    "]})]}),r.jsxs("div",{className:"otpverbox",children:[r.jsx("div",{className:"regbutton",onClick:Qe,children:I?"Creating...":"Sign Up"}),r.jsx("div",{className:"regbutton",style:{background:"black",color:"white"},onClick:()=>B(Oe.LOGIN),children:"Login Instead?"})]})]}),z===Oe.OTP&&r.jsxs("div",{className:"tootp",children:[r.jsxs("div",{className:"inputform",children:[r.jsx(kc,{}),r.jsx("input",{onChange:$=>m($.target.value),type:"tel",placeholder:"PHONE (e.g. +233XXXXXXXXX)",autoComplete:"tel",className:"impbox"})]}),r.jsxs("div",{className:"noted",children:[r.jsx(Es,{className:"micon"})," Click Verify to receive your OTP code"]}),r.jsxs("div",{className:"otpverbox",children:[r.jsxs("div",{className:"otpver",onClick:zr,children:[r.jsx(B1,{className:"micon"}),G?"Sending…":"Verify"]}),r.jsxs("div",{className:"resend",children:[r.jsx(qh,{className:"micon"}),r.jsx("span",{className:"count",children:Se>0?`Resend in ${Se}s`:"Ready to resend"})]})]}),r.jsxs("div",{className:"inputform",children:[r.jsx(Qh,{}),r.jsx("input",{onChange:$=>y($.target.value),type:"number",placeholder:"OTP CODE HERE (6 DIGIT)",className:"impbox"})]}),r.jsx("div",{className:"regbutton",onClick:En,children:G?"Verifying…":"Proceed"}),vt&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"noted",children:[r.jsx(Es,{className:"micon"})," Didn't receive OTP? You can skip and verify later"]}),r.jsxs("div",{className:"skipbtn",onClick:J,children:[r.jsx("i",{className:"arrow-right"})," ","Skip >"]})]})]})]})}),r.jsx("img",{className:"tinylogo",style:{zIndex:2},src:Va,alt:""})]})]})})}function jy(){typeof window>"u"||!("serviceWorker"in navigator)||window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(e=>{console.warn("Service worker registration failed:",e)})})}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=e=>e==null?void 0:e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Sy(e,t,n=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Cy(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=e=>{let t="",n=!1;for(const s of e){if(s==="-"||s==="_"||s<=" "){n=t.length>0;continue}t.length===0?t+=s.toLowerCase():t+=n?s.toUpperCase():s,n=!1}return t};/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=e=>{const t=Ny(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=(...e)=>e.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ul(e){return e!=null}function Ey(e,t={}){var f,y;const n=t.attributeNames??{},s=h=>n[h]??h,a=e.size??e.width??sr.width,i=e.size??e.height??sr.height,o=((f=e.aliases)==null?void 0:f.filter(h=>typeof h=="string"&&h.trim()!=="").map(h=>`lucide-${h}`))??[],l=[...e.name?[`lucide-${e.name}`]:[],...o],c=((y=t.className)==null?void 0:y.split(" ").filter(Boolean))??[],d=t.includeDefaultClasses===!1?Nc(...c):Nc("lucide",...l,...c),p=t.absoluteStrokeWidth?Number(t.strokeWidth??sr["stroke-width"])*Number(e.size??e.width??sr.width)/Number(t.size??t.width??sr.width):t.strokeWidth??sr["stroke-width"];return["svg",{...Object.entries(sr).reduce((h,[x,k])=>(h[s(x)]=k,h),{}),..."color"in t&&t.color&&{[s("stroke")]:t.color},..."size"in t&&ul(t.size)&&{[s("width")]:t.size,[s("height")]:t.size},..."width"in t&&ul(t.width)&&{[s("width")]:t.width},..."height"in t&&ul(t.height)&&{[s("height")]:t.height},[s("stroke-width")]:p,...d&&{[s("class")]:d},[s("viewBox")]:`0 0 ${a} ${i}`,...t.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map(h=>{const[x,k,w]=h,g=t.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...k}:k;return w?[x,g,w]:[x,g]})]}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ty(e,t={}){return Ey(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Py=u.createContext({}),Iy=()=>u.useContext(Py),Ry=u.forwardRef(({color:e,size:t,width:n,height:s,strokeWidth:a,absoluteStrokeWidth:i,nonScalingStroke:o,className:l="",children:c,iconNode:d=[],icon:p={node:d,aliases:[],size:24},...m},f)=>{const{size:y=24,strokeWidth:h=2,absoluteStrokeWidth:x=!1,nonScalingStroke:k=!1,color:w="currentColor",className:g=""}=Iy()??{},b=!!c||zy(m),[j,C,E=[]]=Ty(p,{color:e??w,width:n??t??y,height:s??t??y,strokeWidth:a??h,absoluteStrokeWidth:i??x,nonScalingStroke:o??k,className:Nc(g,l),hasA11yProp:b,attributes:m});return u.createElement(j,{ref:f,...C},[...E.map(([S,N])=>u.createElement(S,N)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function pe(e,t=[],n=[]){const s=typeof e=="string"?Sy(e,t,n):e,a=u.forwardRef(({className:i,...o},l)=>u.createElement(Ry,{ref:l,icon:s,className:i,...o}));return s.name&&(a.displayName=_y(s.name)),a}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};yf.node;const Oy=pe(yf);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf={name:"arrow-up",size:24,node:[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]};bf.node;const $y=pe(bf);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};wf.node;const Ly=pe(wf);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf={name:"bookmark",size:24,node:[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]]};kf.node;const Ay=pe(kf);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf={name:"briefcase",size:24,node:[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]};jf.node;const My=pe(jf);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf={name:"calendar-days",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M8 17h.01",key:"p3bg7i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M16 17h.01",key:"ql8jdd"}]]};Cf.node;const Dy=pe(Cf);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf={name:"clapperboard",size:24,node:[["path",{d:"m12.296 3.464 3.02 3.956",key:"qash78"}],["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",key:"1h7j8b"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"4lm6w1"}],["path",{d:"m6.18 5.276 3.1 3.899",key:"zjj9t3"}]]};Sf.node;const Nf=pe(Sf);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};_f.node;const Fy=pe(_f);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef={name:"folder-open",size:24,node:[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]};Ef.node;const By=pe(Ef);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf={name:"graduation-cap",size:24,node:[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]};Tf.node;const zf=pe(Tf);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};Pf.node;const If=pe(Pf);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf={name:"layout-grid",size:24,node:[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]};Rf.node;const Vy=pe(Rf);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of={name:"library",size:24,node:[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]};Of.node;const Hy=pe(Of);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f={name:"list-checks",size:24,node:[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]]};$f.node;const Uy=pe($f);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};Lf.node;const qy=pe(Lf);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};Af.node;const Wy=pe(Af);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf={name:"megaphone",size:24,node:[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]]};Mf.node;const Gy=pe(Mf);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};Df.node;const Yy=pe(Df);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff={name:"messages-square",size:24,node:[["path",{d:"M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",key:"1n2ejm"}],["path",{d:"M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1",key:"1qfcsi"}]]};Ff.node;const Bf=pe(Ff);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf={name:"mic",size:24,node:[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]]};Vf.node;const Qy=pe(Vf);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Hf.node;const Uf=pe(Hf);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf={name:"timer",size:24,node:[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]};qf.node;const Wf=pe(qf);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};Gf.node;const Zy=pe(Gf);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf={name:"trophy",size:24,node:[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]]};Yf.node;const Ky=pe(Yf);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf={name:"wallet",size:24,node:[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]};Qf.node;const Jy=pe(Qf);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Zf.node;const Xy=pe(Zf),de={name:"Unity Elites Digital Limited",product:"UE Learn",version:"1.0",effectiveDate:"1 July 2026",email:"info@unityelites.com",address:"Academic City Area, Accra, Ghana. GE-190-1579"},oi=[{id:"privacy-1",num:"1",title:"Introduction",blocks:[{type:"p",text:`This Privacy Policy explains how ${de.name} collects, uses, discloses, and protects personal data when you use the ${de.product} website, mobile application, browser extension, and related services (together, the "Service").`},{type:"p",text:"This Policy applies to all users of the Service, wherever located, and is designed to comply with the Ghana Data Protection Act, 2012 (Act 843) as the primary governing framework, and to meet or exceed the standards of the EU General Data Protection Regulation (GDPR) and comparable international data protection laws for users accessing the Service from outside Ghana."},{type:"p",text:"By creating an account, or otherwise using the Service, you acknowledge that you have read and understood this Policy. Where required by law, we will ask for your explicit, informed consent before processing your personal data, and you may withdraw that consent at any time as described in Section 12."}]},{id:"privacy-2",num:"2",title:"Who we are — data controller",blocks:[{type:"p",text:"The data controller responsible for your personal data is:"},{type:"ul",items:[`Business name: ${de.name}`,`Trading as: ${de.product}`,`Registered address: ${de.address}`,`Contact email: ${de.email}`,"Data Protection Commission (Ghana) registration number: [DPC registration pending — application in process]","Data Protection Officer: [To be appointed — contact info@unityelites.com for privacy-related matters in the meantime]"]},{type:"p",text:"If Unity Elites Digital Limited is not yet registered with Ghana's Data Protection Commission as a data controller, this should be done before the Service processes personal data at scale — registration is a statutory requirement under Act 843 for most controllers."}]},{id:"privacy-3",num:"3",title:"Personal data we collect",blocks:[{type:"p",text:"We collect only the data necessary to operate the Service, verify your identity, process payments, and improve the platform. Specifically, we collect the following categories of personal data, drawn directly from what the Service captures and stores:"},{type:"sub",text:"3.1 Account and identity data"},{type:"ul",items:["First name and last name","Email address","Phone number (MSISDN), where provided for SMS verification","Password — stored only as an irreversible cryptographic hash; we never store or can retrieve your plain-text password","Profile photo (if uploaded or provided via Google Sign-In)","CV / résumé link (for users applying as, or registered as, affiliates)","Account type (regular user or affiliate) and account status"]},{type:"sub",text:"3.2 Sign-in and authentication data"},{type:"ul",items:["If you sign in with Google: your Google account email, first name, last name, and profile picture, as shared with us by Google after you grant permission",'Authentication provider indicator (e.g. "google" or standard email/password)',"Login timestamps and last-active timestamps","Email and SMS one-time-passcode (OTP) verification status and history",'Session and refresh tokens, and a record of invalidated ("logged out") tokens, used to keep your account secure']},{type:"sub",text:"3.3 Usage and engagement data"},{type:"ul",items:['Daily usage "streak" scores and your highest recorded streak',"A count of how many times you interact with certain platform features","Courses, past-question papers, and topics you search for or view","Solutions, answers, or content you submit or request through the Service, including content submitted via the browser extension","Error reports you (or your device, automatically) submit to help us fix problems"]},{type:"sub",text:"3.4 Referral, credits, and payment data"},{type:"ul",items:["Your unique referral code, and the referral code of anyone who referred you","Credit balance and full credit transaction history","Payment references and payment status from our payment processor, Paystack (we do not collect or store your full card number, CVV, or mobile money PIN — these are entered directly with Paystack)","For affiliates: wallet balance and commission earnings history"]},{type:"sub",text:"3.5 Technical and security data"},{type:"ul",items:["IP address","Browser / device user-agent string","Timestamps of requests, logins, and consent actions","Activity logs associated with your account, used for security, troubleshooting, and fraud prevention"]},{type:"sub",text:"3.6 Consent and legal records"},{type:"ul",items:["A record of which version of this Privacy Policy and our Terms of Use you accepted, together with the date, time, IP address, and device/browser used at the moment of acceptance"]},{type:"p",text:"We do not intentionally collect any special category data (such as health data, biometric data, religious belief, or political opinion) through the Service. Please do not submit such information to us, including inside free-text fields like error reports or submitted solutions."}]},{id:"privacy-4",num:"4",title:"How we collect your data",blocks:[{type:"p",text:"We collect personal data in the following ways:"},{type:"ul",items:["Directly from you — when you register, sign in, complete your profile, submit content, request a solution, or contact support.","Automatically — through your use of the Service (technical data described in Section 3.5).","From third parties — from Google, when you choose to sign in with Google; and from Paystack, which confirms whether a payment you initiated was successful."]}]},{id:"privacy-5",num:"5",title:"Legal basis for processing",blocks:[{type:"p",text:"Under Act 843 and equivalent international standards, we only process your personal data where we have a valid legal basis, which will be one or more of the following:"},{type:"ul",items:["Consent — for example, when you agree to this Policy, opt in to marketing communications, or accept a new policy version.","Performance of a contract — to create your account, deliver the Service you asked for, process credit purchases, and pay affiliate commissions.","Legal obligation — for example, retaining transaction records for tax, accounting, or anti-fraud purposes.","Legitimate interests — such as securing the platform against abuse, improving the Service, and maintaining service logs — balanced against your rights and freedoms."]}]},{id:"privacy-6",num:"6",title:"How we use your data",blocks:[{type:"p",text:"We use the personal data described above to:"},{type:"ul",items:["Create, authenticate, and manage your account, including via Google Sign-In","Verify your phone number and/or email address via OTP","Provide, personalise, and improve the past-questions and solutions features of the Service","Process credit purchases and verify payments through Paystack","Operate the referral program and calculate and pay affiliate commissions","Track streaks and usage to power in-app engagement features","Investigate errors, bugs, and abuse, and keep the platform secure","Communicate with you about your account, transactions, OTPs, and (where you have consented) product updates","Comply with legal, regulatory, and tax obligations","Maintain a record of your acceptance of our Privacy Policy and Terms of Use, and re-request your consent when either document is updated"]},{type:"p",text:"We do not sell your personal data. We do not use your submitted academic content or personal data to train third-party advertising profiles."}]},{id:"privacy-7",num:"7",title:"Sharing your data with third parties",blocks:[{type:"p",text:"We share personal data only with service providers who process it on our behalf, under appropriate contractual safeguards, and only to the extent necessary for them to provide their service to us:"},{type:"ul",items:["Supabase — our database and backend infrastructure provider, which stores account and application data securely.","Paystack — our payment processor, which handles and verifies your payment transactions. Paystack processes your card/mobile-money details directly and under its own privacy policy.",`Google — if you choose "Sign in with Google", Google authenticates you and shares your basic profile information with us, under Google's own privacy policy.`,"Arkasel (or our SMS provider) — used solely to deliver SMS one-time passcodes to your phone number for verification.","Third-party AI/solutions providers — used to process solution requests you submit; only the content necessary to generate a response (e.g. the question text) is shared, not your account credentials.","Legal and regulatory authorities — where required by law, court order, or to protect the rights, safety, or property of Unity Elites Digital Limited, our users, or the public."]},{type:"p",text:"We do not share your personal data with third parties for their own independent marketing purposes without your explicit consent."}]},{id:"privacy-8",num:"8",title:"International data transfers",blocks:[{type:"p",text:"Some of our service providers (for example, cloud infrastructure and payment processing partners) may store or process data outside Ghana. Where personal data is transferred internationally, we take steps required under Act 843 and, where applicable, GDPR-equivalent safeguards (such as standard contractual clauses or equivalent adequacy protections) to ensure your data continues to receive an appropriate level of protection."}]},{id:"privacy-9",num:"9",title:"Data retention",blocks:[{type:"p",text:"We retain personal data only for as long as necessary to fulfil the purposes described in this Policy, including:"},{type:"ul",items:["Account data — for as long as your account remains active, and for a limited period afterward to allow account recovery and to meet legal/accounting obligations.","Transaction and payment records — for the period required by Ghanaian tax and financial record-keeping law (typically not less than six years).","Consent and policy-acceptance records — retained indefinitely as an audit trail, even after account deletion, since these records demonstrate historical compliance rather than being used for any other purpose.","Security/activity logs — retained for a limited rolling period sufficient for fraud detection and troubleshooting, then deleted or anonymised."]},{type:"p",text:"When retention is no longer necessary, we securely delete or irreversibly anonymise the data."}]},{id:"privacy-10",num:"10",title:"Data security",blocks:[{type:"p",text:"We apply administrative, technical, and organisational safeguards appropriate to the sensitivity of the data we hold, including:"},{type:"ul",items:["Encrypting passwords using industry-standard, one-way cryptographic hashing — we never store plain-text passwords","Encrypting data in transit using HTTPS/TLS","Access controls limiting who inside Unity Elites Digital Limited can view personal data, on a need-to-know basis","Token-based authentication with the ability to revoke (blacklist) compromised sessions","Monitoring and alerting for critical system errors that could indicate a security issue"]},{type:"p",text:"No system is perfectly secure. If we become aware of a data breach that poses a risk to your rights and freedoms, we will notify the Data Protection Commission and affected users without undue delay, as required under Act 843."}]},{id:"privacy-11",num:"11",title:"Your rights",blocks:[{type:"p",text:"Subject to applicable law (including Act 843 and, where relevant, GDPR), you have the right to:"},{type:"ul",items:["Access — request a copy of the personal data we hold about you","Rectification — ask us to correct inaccurate or incomplete data","Erasure — ask us to delete your personal data, subject to our legal retention obligations described in Section 9","Restriction — ask us to limit how we process your data in certain circumstances","Objection — object to processing based on legitimate interests, including for marketing purposes","Portability — request your data in a structured, commonly used, machine-readable format","Withdraw consent — where processing is based on consent, withdraw it at any time without affecting the lawfulness of processing carried out before withdrawal"]},{type:"p",text:`To exercise any of these rights, contact us at ${de.email}. We will respond within the time limits required by applicable law. You also have the right to lodge a complaint with the Data Protection Commission of Ghana, or, if you are located elsewhere, with your local data protection authority.`}]},{id:"privacy-12",num:"12",title:"Withdrawing consent and managing preferences",blocks:[{type:"p",text:"Where we rely on your consent, you can withdraw it at any time from your account settings, or by contacting us directly. Withdrawing consent may limit or prevent your ability to use certain features of the Service (for example, you cannot use the Service without agreeing to process the account data necessary to operate it)."}]},{id:"privacy-13",num:"13",title:"Children's privacy",blocks:[{type:"p",text:"The Service is intended for users who are at least 13 years old (or the minimum age of digital consent in your jurisdiction, if higher). We do not knowingly collect personal data from children below this age. If you believe a child has provided us with personal data without appropriate consent, contact us so we can delete it."}]},{id:"privacy-14",num:"14",title:"Cookies and similar technologies",blocks:[{type:"p",text:"Our website and web-based tools use cookies and similar technologies (such as local storage) to keep you signed in, remember your preferences, and understand how the Service is used. We currently use only essential cookies that are necessary for the core functionality of the platform, including authentication, session management, and security."},{type:"p",text:"We do not currently use analytics or advertising cookies. However, as the platform grows, we may introduce optional analytics and functional cookies to improve your experience and better understand how users interact with the Service. If and when we do, we will implement a cookie consent banner that gives you full control over which cookies you accept, in compliance with applicable data protection laws."},{type:"p",text:"You can control cookies through your browser settings; disabling essential cookies may affect Service functionality."}]},{id:"privacy-15",num:"15",title:"Changes to this policy — version history",blocks:[{type:"p",text:"We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Each update is published as a new numbered version. Where changes are material, we will require you to review and re-accept the updated Policy before you can continue using the Service, and we keep a permanent record of which version you accepted and when."},{type:"ul",items:[`Version ${de.version} — ${de.effectiveDate} — Initial publication.`]}]},{id:"privacy-16",num:"16",title:"Contact us and complaints",blocks:[{type:"p",text:"If you have questions about this Policy or how we handle your personal data, contact us at:"},{type:"ul",items:[`Email: ${de.email}`,`Address: ${de.name}, ${de.address}`]},{type:"p",text:"You may also contact the Data Protection Commission of Ghana:"},{type:"ul",items:["Website: www.dataprotection.org.gh","Address: Data Protection Commission, Ghana [INSERT/VERIFY CURRENT ADDRESS]"]}]}],_c=[{id:"terms-1",num:"1",title:"Acceptance of terms",blocks:[{type:"p",text:`These Terms of Use ("Terms") form a binding agreement between you and ${de.name}, governing your access to and use of the ${de.product} website, mobile application, browser extension, and related services (the "Service"). By creating an account or otherwise using the Service, you agree to these Terms and to our Privacy Policy, which is incorporated by reference.`},{type:"p",text:"If you do not agree to these Terms, you must not use the Service. As with the Privacy Policy, we maintain a version history of these Terms and will ask you to re-accept them whenever we publish a materially updated version."}]},{id:"terms-2",num:"2",title:"Eligibility",blocks:[{type:"p",text:"You must be at least 13 years old (or the applicable minimum age in your jurisdiction) to use the Service. By using the Service, you confirm that you meet this requirement and that the information you provide during registration is accurate and current."}]},{id:"terms-3",num:"3",title:"Description of the Service",blocks:[{type:"p",text:"UE Learn provides access to past examination questions, study resources, and AI-assisted solution generation, along with a credits-based system for accessing premium content, and a referral/affiliate program for approved partners. Features may be added, changed, or removed at our discretion."}]},{id:"terms-4",num:"4",title:"Account registration and security",blocks:[{type:"ul",items:["You are responsible for maintaining the confidentiality of your password and for all activity under your account.","You must notify us immediately of any unauthorised use of your account.","You agree to provide accurate registration information, including a valid email address and, where required, phone number for verification.","We may suspend or terminate accounts that provide false information, or that we reasonably believe are compromised."]}]},{id:"terms-5",num:"5",title:"Signing in with Google",blocks:[{type:"p",text:"If you choose to register or sign in using Google, you authorise us to receive your basic Google profile information (name, email address, and profile photo) for the purpose of creating and authenticating your account. Your use of Google Sign-In is also subject to Google's own terms of service and privacy policy."}]},{id:"terms-6",num:"6",title:"Referral program and affiliates",blocks:[{type:"ul",items:["Users may share a personal referral code; both the referring user and the referred user may receive benefits (such as bonus credits) as described in the app at the time.","Affiliates are approved partners who may earn a commission on qualifying purchases made by users they refer, calculated and paid to an in-platform wallet as described in the app.","We reserve the right to investigate, withhold, reverse, or claw back credits or commissions obtained through fraud, abuse, self-referral, or violation of these Terms."]}]},{id:"terms-7",num:"7",title:"Credits, payments, and refunds",blocks:[{type:"ul",items:["Certain features require credits, which may be purchased through our payment processor, Paystack, using the payment methods it supports.","All fees are quoted in Ghana Cedis (GHS) unless stated otherwise, and are inclusive/exclusive of applicable taxes as indicated at checkout.","Payments are verified directly with Paystack before credits are applied to your account; we are not responsible for delays or failures caused by your payment provider.","Credits are generally non-refundable once successfully applied to your account, except where required by applicable consumer protection law, or where we determine in our discretion that a service failure warrants a refund or credit reversal.","If a solution request fails to return a usable result, credits deducted for that request will be automatically restored to your balance."]}]},{id:"terms-8",num:"8",title:"Acceptable use",blocks:[{type:"p",text:"You agree not to:"},{type:"ul",items:["Use the Service for any unlawful purpose, or in a way that infringes the rights of others","Attempt to gain unauthorised access to any account, system, or data not belonging to you","Upload or submit content that is defamatory, obscene, infringing, or otherwise unlawful","Abuse the referral or credits system, including through fraudulent or self-referral schemes","Interfere with or disrupt the integrity or performance of the Service, including through malware, scraping at scale, or denial-of-service activity","Reverse engineer, decompile, or attempt to extract the source code of the Service, except where permitted by law"]}]},{id:"terms-9",num:"9",title:"Intellectual property",blocks:[{type:"p",text:"The Service, including its design, software, trademarks, and the underlying compilation of past-questions content curated by Unity Elites Digital Limited, is owned by or licensed to Unity Elites Digital Limited and is protected by applicable intellectual property laws. Individual past examination papers may be owned by the respective educational institutions; we make no claim of ownership over the underlying academic questions themselves, only over our compiled platform, formatting, and generated solutions where applicable."},{type:"p",text:"You are granted a limited, non-exclusive, non-transferable, revocable licence to access and use the Service for your personal, non-commercial academic use."}]},{id:"terms-10",num:"10",title:"User-submitted content",blocks:[{type:"p",text:"When you submit content to the Service (for example, a solution, an error report, or feedback), you grant Unity Elites Digital Limited a worldwide, royalty-free, non-exclusive licence to use, reproduce, store, and display that content for the purpose of operating, improving, and validating the Service (for example, showing validated solutions to other students). You confirm that you have the right to submit that content and that it does not infringe any third party's rights."}]},{id:"terms-11",num:"11",title:"Third-party services",blocks:[{type:"p",text:"The Service integrates with third-party providers, including Paystack (payments), Google (sign-in), and third-party AI/solutions providers (answer generation). We are not responsible for the acts, omissions, availability, or content of these third-party services, which are governed by their own terms."}]},{id:"terms-12",num:"12",title:"Disclaimer of warranties",blocks:[{type:"p",text:'The Service, including any solutions or answers generated through it, is provided "as is" and "as available" without warranties of any kind, express or implied. We do not guarantee that solutions generated by AI or third-party tools are accurate, complete, or fit for examination purposes, and you remain responsible for independently verifying any academic content before relying on it.'}]},{id:"terms-13",num:"13",title:"Limitation of liability",blocks:[{type:"p",text:"To the maximum extent permitted by applicable law, Unity Elites Digital Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data, revenue, or academic outcome, arising out of or relating to your use of the Service. Our total aggregate liability for any claim arising from these Terms or the Service shall not exceed the total amount you paid to us in the twelve (12) months preceding the claim."}]},{id:"terms-14",num:"14",title:"Indemnification",blocks:[{type:"p",text:"You agree to indemnify and hold harmless Unity Elites Digital Limited, its officers, employees, and agents from any claims, damages, liabilities, and expenses (including reasonable legal fees) arising from your violation of these Terms or misuse of the Service."}]},{id:"terms-15",num:"15",title:"Suspension and termination",blocks:[{type:"p",text:"We may suspend or terminate your access to the Service, with or without notice, if we reasonably believe you have violated these Terms, engaged in fraudulent activity, or if required to comply with applicable law. You may stop using the Service and request account deletion at any time, subject to our data retention obligations described in the Privacy Policy."}]},{id:"terms-16",num:"16",title:"Governing law and dispute resolution",blocks:[{type:"p",text:"These Terms are governed by the laws of the Republic of Ghana, without regard to conflict-of-law principles. Any dispute arising from these Terms or the Service shall first be attempted to be resolved informally by contacting us. If unresolved, disputes shall be subject to the exclusive jurisdiction of the courts of Ghana, except where mandatory consumer-protection law in your country of residence provides otherwise."}]},{id:"terms-17",num:"17",title:"Changes to these terms — version history",blocks:[{type:"p",text:"We may revise these Terms from time to time. Material changes will require you to re-accept the updated Terms before continued use of the Service, and we keep a permanent, auditable record of which version you accepted and when."},{type:"ul",items:[`Version ${de.version} — ${de.effectiveDate} — Initial publication.`]}]},{id:"terms-18",num:"18",title:"Contact us",blocks:[{type:"ul",items:[`Email: ${de.email}`,`Address: ${de.name}, ${de.address}`]}]}],v0=[{key:"privacy",label:"Privacy policy",accent:"indigo",sections:oi},{key:"terms",label:"Terms of use",accent:"amber",sections:_c}];function eb({block:e}){return e.type==="p"?r.jsx("p",{className:"policy-body",children:e.text}):e.type==="sub"?r.jsx("h4",{className:"policy-subhead",children:e.text}):e.type==="ul"?r.jsx("ul",{className:"policy-list",children:e.items.map((t,n)=>r.jsx("li",{children:t},n))}):null}function y0({section:e,accent:t}){return r.jsxs("section",{id:e.id,className:`policy-section accent-${t}`,children:[r.jsxs("div",{className:"policy-section-head",children:[r.jsx("span",{className:"policy-num",children:e.num}),r.jsx("h3",{className:"policy-title",children:e.title})]}),e.blocks.map((n,s)=>r.jsx(eb,{block:n},s))]})}function tb(){const[e,t]=u.useState(oi[0].id),[n,s]=u.useState(!1),[a,i]=u.useState(!1),o=u.useRef(null),l=u.useMemo(()=>[...oi,..._c].map(d=>d.id),[]);u.useEffect(()=>{const d=new IntersectionObserver(p=>{const m=p.filter(f=>f.isIntersecting).sort((f,y)=>f.boundingClientRect.top-y.boundingClientRect.top);m[0]&&t(m[0].target.id)},{rootMargin:"-15% 0px -70% 0px",threshold:0});return l.forEach(p=>{const m=document.getElementById(p);m&&d.observe(m)}),()=>d.disconnect()},[l]),u.useEffect(()=>{const d=()=>i(window.scrollY>800);return window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]);function c(d){s(!1);const p=document.getElementById(d);p&&p.scrollIntoView({behavior:"smooth",block:"start"})}return r.jsxs("div",{className:"pt-root",children:[r.jsx("style",{children:`
        /* Reset everything inside pt-root */
        .pt-root {
          all: initial;
          display: block;
          --paper: #f6f5f2;
          --ink: #1c1e24;
          --ink-soft: #4d505a;
          --rule: #dedad0;
          --indigo: #2e3f72;
          --indigo-soft: #e7eaf3;
          --amber: #8a5a2b;
          --amber-soft: #f3e9dc;
          background: var(--paper);
          color: var(--ink);
          font-family: 'Source Serif 4', Georgia, serif;
          min-height: 100vh;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Reset all children */
        .pt-root * {
          all: initial;
          display: revert;
          box-sizing: border-box;
        }

        /* Re-apply specific styles to elements */
        .pt-root .pt-sans {
          font-family: 'Work Sans', system-ui, -apple-system, sans-serif;
        }

        .pt-root .policy-body {
          display: block;
          font-size: 17px;
          line-height: 1.75;
          color: var(--ink);
          margin: 0 0 1.1em 0;
          max-width: 62ch;
          font-family: 'Source Serif 4', Georgia, serif;
        }

        .pt-root .policy-list {
          display: block;
          margin: 0 0 1.3em 0;
          padding-left: 1.3em;
          max-width: 62ch;
          list-style: none;
        }

        .pt-root .policy-list li {
          display: list-item;
          font-size: 17px;
          line-height: 1.7;
          margin-bottom: 0.55em;
          font-family: 'Source Serif 4', Georgia, serif;
          list-style-type: disc;
          color: var(--ink);
        }

        .pt-root .policy-subhead {
          display: block;
          font-family: 'Work Sans', system-ui, -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-transform: none;
          color: var(--ink-soft);
          margin: 1.4em 0 0.6em 0;
        }

        .pt-root .policy-section {
          display: block;
          padding: 2.2rem 0;
          border-top: 1px solid var(--rule);
        }

        .pt-root .policy-section:first-of-type {
          border-top: none;
          padding-top: 0.5rem;
        }

        .pt-root .policy-section-head {
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
          margin-bottom: 0.9rem;
        }

        .pt-root .policy-num {
          display: inline;
          font-family: 'Work Sans', system-ui, -apple-system, sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: var(--ink-soft);
          min-width: 1.6em;
        }

        .pt-root .accent-indigo .policy-num {
          color: var(--indigo);
        }

        .pt-root .accent-amber .policy-num {
          color: var(--amber);
        }

        .pt-root .policy-title {
          display: inline;
          font-family: 'Source Serif 4', Georgia, serif;
          font-size: 22px;
          font-weight: 600;
          margin: 0;
          line-height: 1.3;
          color: var(--ink);
        }

        .pt-root .toc-link {
          display: block;
          font-family: 'Work Sans', system-ui, -apple-system, sans-serif;
          font-size: 13.5px;
          padding: 5px 0 5px 0.7rem;
          color: var(--ink-soft);
          border-left: 2px solid transparent;
          text-decoration: none;
          line-height: 1.4;
          cursor: pointer;
          background: transparent;
        }

        .pt-root .toc-link:hover {
          color: var(--ink);
        }

        .pt-root .toc-link.active.p-indigo {
          color: var(--indigo);
          border-left-color: var(--indigo);
          font-weight: 600;
        }

        .pt-root .toc-link.active.p-amber {
          color: var(--amber);
          border-left-color: var(--amber);
          font-weight: 600;
        }

        .pt-root .part-label {
          display: block;
          font-family: 'Work Sans', system-ui, -apple-system, sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.02em;
          padding: 0.9rem 0 0.4rem 0.7rem;
        }

        .pt-root .p-indigo-label {
          color: var(--indigo);
        }

        .pt-root .p-amber-label {
          color: var(--amber);
        }

        /* Sticky header */
        .pt-root .sticky-top {
          position: sticky;
          top: 0;
          z-index: 20;
          background: var(--paper);
          border-bottom: 1px solid var(--rule);
          padding: 0.875rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .pt-root .sticky-top .brand {
          font-family: 'Source Serif 4', Georgia, serif;
          font-size: 18px;
          font-weight: 600;
          color: var(--ink);
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }

        .pt-root .sticky-top .brand-sub {
          font-size: 12px;
          color: var(--ink-soft);
          font-family: 'Work Sans', system-ui, -apple-system, sans-serif;
        }

        .pt-root .nav-toggle {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 14px;
          padding: 0.375rem 0.75rem;
          border-radius: 0.375rem;
          border: 1px solid var(--rule);
          color: var(--ink);
          background: transparent;
          cursor: pointer;
          font-family: 'Work Sans', system-ui, -apple-system, sans-serif;
        }

        .pt-root .nav-toggle:hover {
          background: rgba(0,0,0,0.03);
        }

        .pt-root .main-grid {
          max-width: 64rem;
          margin: 0 auto;
          padding: 0 1.25rem;
          display: grid;
          gap: 2.5rem;
        }

        @media (min-width: 1024px) {
          .pt-root .main-grid {
            grid-template-columns: 220px 1fr;
          }
        }

        .pt-root .toc-sticky {
          position: sticky;
          top: 5.5rem;
          padding-top: 2rem;
        }

        .pt-root .toc-desktop {
          display: none;
        }

        @media (min-width: 1024px) {
          .pt-root .toc-desktop {
            display: block;
          }
        }

        .pt-root .toc-mobile {
          position: fixed;
          inset: 57px 0 0 0;
          z-index: 10;
          overflow-y: auto;
          padding: 1rem 1.25rem;
          background: var(--paper);
          display: none;
        }

        .pt-root .toc-mobile.open {
          display: block;
        }

        @media (min-width: 1024px) {
          .pt-root .toc-mobile {
            display: none !important;
          }
        }

        .pt-root .content-main {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }

        .pt-root .header-meta {
          margin-bottom: 2.5rem;
        }

        .pt-root .header-meta .service-label {
          font-family: 'Work Sans', system-ui, -apple-system, sans-serif;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--ink-soft);
          margin-bottom: 0.5rem;
          display: block;
        }

        .pt-root .header-meta h1 {
          font-family: 'Source Serif 4', Georgia, serif;
          font-size: 34px;
          font-weight: 600;
          line-height: 1.2;
          margin: 0 0 0.6rem 0;
          color: var(--ink);
        }

        .pt-root .header-meta .version-info {
          font-family: 'Work Sans', system-ui, -apple-system, sans-serif;
          font-size: 14px;
          color: var(--ink-soft);
        }

        .pt-root .part-header {
          margin-bottom: 0.5rem;
        }

        .pt-root .part-header .part-label {
          padding: 0;
          margin-bottom: 0.3rem;
        }

        .pt-root .part-header h2 {
          font-family: 'Source Serif 4', Georgia, serif;
          font-size: 26px;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
        }

        .pt-root .part-header h2.indigo {
          color: var(--indigo);
        }

        .pt-root .part-header h2.amber {
          color: var(--amber);
        }

        .pt-root .footer-bottom {
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--rule);
          font-family: 'Work Sans', system-ui, -apple-system, sans-serif;
        }

        .pt-root .footer-bottom .contact-line {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 13px;
          color: var(--ink-soft);
          margin-bottom: 0.375rem;
        }

        .pt-root .back-to-top {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          width: 44px;
          height: 44px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--ink);
          color: var(--paper);
          border: none;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          cursor: pointer;
        }

        .pt-root .back-to-top:hover {
          background: #000;
        }

        /* Mobile responsive */
        @media (max-width: 640px) {
          .pt-root .header-meta h1 {
            font-size: 26px;
          }
          .pt-root .policy-section {
            padding: 1.5rem 0;
          }
          .pt-root .main-grid {
            padding: 0 1rem;
          }
        }
      `}),r.jsxs("header",{className:"sticky-top",children:[r.jsxs("div",{className:"brand",children:[r.jsx("span",{children:de.product}),r.jsx("span",{className:"brand-sub",children:"Privacy policy & terms of use"})]}),r.jsxs("button",{className:"nav-toggle",onClick:()=>s(d=>!d),children:[n?r.jsx(Xy,{size:16}):r.jsx(Yy,{size:16}),"Contents"]})]}),r.jsxs("div",{className:"main-grid",children:[r.jsx("nav",{className:"toc-desktop",children:r.jsx("div",{className:"toc-sticky",children:v0.map(d=>r.jsxs("div",{children:[r.jsx("div",{className:`part-label p-${d.accent}-label`,children:d.label}),d.sections.map(p=>r.jsxs("a",{href:`#${p.id}`,className:`toc-link p-${d.accent} ${e===p.id?"active":""}`,onClick:m=>{m.preventDefault(),c(p.id)},children:[p.num,". ",p.title]},p.id))]},d.key))})}),r.jsx("nav",{className:`toc-mobile ${n?"open":""}`,children:v0.map(d=>r.jsxs("div",{children:[r.jsx("div",{className:`part-label p-${d.accent}-label`,children:d.label}),d.sections.map(p=>r.jsxs("a",{href:`#${p.id}`,className:`toc-link p-${d.accent} ${e===p.id?"active":""}`,onClick:m=>{m.preventDefault(),c(p.id)},children:[p.num,". ",p.title]},p.id))]},d.key))}),r.jsxs("main",{ref:o,className:"content-main",children:[r.jsxs("div",{className:"header-meta",children:[r.jsxs("span",{className:"service-label",children:[de.product," · a service operated by ",de.name]}),r.jsx("h1",{children:"Privacy policy & terms of use"}),r.jsxs("p",{className:"version-info",children:["Version ",de.version," · Effective ",de.effectiveDate]})]}),r.jsxs("div",{id:"privacy",className:"part-header",children:[r.jsx("span",{className:"part-label p-indigo-label",children:"Part 1"}),r.jsx("h2",{className:"indigo",children:"Privacy policy"})]}),oi.map(d=>r.jsx(y0,{section:d,accent:"indigo"},d.id)),r.jsxs("div",{id:"terms",className:"part-header",style:{marginTop:"1.5rem",paddingTop:"1rem"},children:[r.jsx("span",{className:"part-label p-amber-label",children:"Part 2"}),r.jsx("h2",{className:"amber",children:"Terms of use"})]}),_c.map(d=>r.jsx(y0,{section:d,accent:"amber"},d.id)),r.jsxs("footer",{className:"footer-bottom",children:[r.jsxs("div",{className:"contact-line",children:[r.jsx(qy,{size:14})," ",de.email]}),r.jsxs("div",{className:"contact-line",children:[r.jsx(Wy,{size:14})," ",de.name,", ",de.address]})]})]})]}),a&&r.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Back to top",className:"back-to-top",children:r.jsx($y,{size:18})})]})}function Y1(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Er=Y1();function Kf(e){Er=e}var Bs={exec:()=>null};function ae(e,t=""){let n=typeof e=="string"?e:e.source,s={replace:(a,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(at.caret,"$1"),n=n.replace(a,o),s},getRegex:()=>new RegExp(n,t)};return s}var at={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},nb=/^(?:[ \t]*(?:\n|$))+/,rb=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,sb=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ga=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ab=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Q1=/(?:[*+-]|\d{1,9}[.)])/,Jf=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Xf=ae(Jf).replace(/bull/g,Q1).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),ib=ae(Jf).replace(/bull/g,Q1).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Z1=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ob=/^[^\n]+/,K1=/(?!\s*\])(?:\\.|[^\[\]\\])+/,lb=ae(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",K1).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),cb=ae(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Q1).getRegex(),fo="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",J1=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,db=ae("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",J1).replace("tag",fo).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),e4=ae(Z1).replace("hr",ga).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",fo).getRegex(),ub=ae(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",e4).getRegex(),X1={blockquote:ub,code:rb,def:lb,fences:sb,heading:ab,hr:ga,html:db,lheading:Xf,list:cb,newline:nb,paragraph:e4,table:Bs,text:ob},b0=ae("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ga).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",fo).getRegex(),pb={...X1,lheading:ib,table:b0,paragraph:ae(Z1).replace("hr",ga).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",b0).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",fo).getRegex()},hb={...X1,html:ae(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",J1).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Bs,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ae(Z1).replace("hr",ga).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Xf).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},fb=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,mb=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,t4=/^( {2,}|\\)\n(?!\s*$)/,gb=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,mo=/[\p{P}\p{S}]/u,ed=/[\s\p{P}\p{S}]/u,n4=/[^\s\p{P}\p{S}]/u,xb=ae(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ed).getRegex(),r4=/(?!~)[\p{P}\p{S}]/u,vb=/(?!~)[\s\p{P}\p{S}]/u,yb=/(?:[^\s\p{P}\p{S}]|~)/u,bb=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g,s4=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,wb=ae(s4,"u").replace(/punct/g,mo).getRegex(),kb=ae(s4,"u").replace(/punct/g,r4).getRegex(),a4="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",jb=ae(a4,"gu").replace(/notPunctSpace/g,n4).replace(/punctSpace/g,ed).replace(/punct/g,mo).getRegex(),Cb=ae(a4,"gu").replace(/notPunctSpace/g,yb).replace(/punctSpace/g,vb).replace(/punct/g,r4).getRegex(),Sb=ae("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,n4).replace(/punctSpace/g,ed).replace(/punct/g,mo).getRegex(),Nb=ae(/\\(punct)/,"gu").replace(/punct/g,mo).getRegex(),_b=ae(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Eb=ae(J1).replace("(?:-->|$)","-->").getRegex(),Tb=ae("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Eb).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Vi=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,zb=ae(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Vi).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),i4=ae(/^!?\[(label)\]\[(ref)\]/).replace("label",Vi).replace("ref",K1).getRegex(),o4=ae(/^!?\[(ref)\](?:\[\])?/).replace("ref",K1).getRegex(),Pb=ae("reflink|nolink(?!\\()","g").replace("reflink",i4).replace("nolink",o4).getRegex(),td={_backpedal:Bs,anyPunctuation:Nb,autolink:_b,blockSkip:bb,br:t4,code:mb,del:Bs,emStrongLDelim:wb,emStrongRDelimAst:jb,emStrongRDelimUnd:Sb,escape:fb,link:zb,nolink:o4,punctuation:xb,reflink:i4,reflinkSearch:Pb,tag:Tb,text:gb,url:Bs},Ib={...td,link:ae(/^!?\[(label)\]\((.*?)\)/).replace("label",Vi).getRegex(),reflink:ae(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Vi).getRegex()},Ec={...td,emStrongRDelimAst:Cb,emStrongLDelim:kb,url:ae(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Rb={...Ec,br:ae(t4).replace("{2,}","*").getRegex(),text:ae(Ec.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ua={normal:X1,gfm:pb,pedantic:hb},ws={normal:td,gfm:Ec,breaks:Rb,pedantic:Ib},Ob={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},w0=e=>Ob[e];function rn(e,t){if(t){if(at.escapeTest.test(e))return e.replace(at.escapeReplace,w0)}else if(at.escapeTestNoEncode.test(e))return e.replace(at.escapeReplaceNoEncode,w0);return e}function k0(e){try{e=encodeURI(e).replace(at.percentDecode,"%")}catch{return null}return e}function j0(e,t){var i;let n=e.replace(at.findPipe,(o,l,c)=>{let d=!1,p=l;for(;--p>=0&&c[p]==="\\";)d=!d;return d?"|":" |"}),s=n.split(at.splitPipe),a=0;if(s[0].trim()||s.shift(),s.length>0&&!((i=s.at(-1))!=null&&i.trim())&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;a<s.length;a++)s[a]=s[a].trim().replace(at.slashPipe,"|");return s}function ks(e,t,n){let s=e.length;if(s===0)return"";let a=0;for(;a<s;){let i=e.charAt(s-a-1);if(i===t&&!n)a++;else if(i!==t&&n)a++;else break}return e.slice(0,s-a)}function $b(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function C0(e,t,n,s,a){let i=t.href,o=t.title||null,l=e[1].replace(a.other.outputLinkReplace,"$1");s.state.inLink=!0;let c={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:o,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,c}function Lb(e,t,n){let s=e.match(n.other.indentCodeCompensation);if(s===null)return t;let a=s[1];return t.split(`
`).map(i=>{let o=i.match(n.other.beginningSpace);if(o===null)return i;let[l]=o;return l.length>=a.length?i.slice(a.length):i}).join(`
`)}var Hi=class{constructor(e){le(this,"options");le(this,"rules");le(this,"lexer");this.options=e||Er}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:ks(n,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],s=Lb(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let s=ks(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:ks(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=ks(t[0],`
`).split(`
`),s="",a="",i=[];for(;n.length>0;){let o=!1,l=[],c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))l.push(n[c]),o=!0;else if(!o)l.push(n[c]);else break;n=n.slice(c);let d=l.join(`
`),p=d.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${d}`:d,a=a?`${a}
${p}`:p;let m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,i,!0),this.lexer.state.top=m,n.length===0)break;let f=i.at(-1);if((f==null?void 0:f.type)==="code")break;if((f==null?void 0:f.type)==="blockquote"){let y=f,h=y.raw+`
`+n.join(`
`),x=this.blockquote(h);i[i.length-1]=x,s=s.substring(0,s.length-y.raw.length)+x.raw,a=a.substring(0,a.length-y.text.length)+x.text;break}else if((f==null?void 0:f.type)==="list"){let y=f,h=y.raw+`
`+n.join(`
`),x=this.list(h);i[i.length-1]=x,s=s.substring(0,s.length-f.raw.length)+x.raw,a=a.substring(0,a.length-y.raw.length)+x.raw,n=h.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:i,text:a}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),s=n.length>1,a={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let i=this.rules.other.listItemRegex(n),o=!1;for(;e;){let c=!1,d="",p="";if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;d=t[0],e=e.substring(d.length);let m=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,w=>" ".repeat(3*w.length)),f=e.split(`
`,1)[0],y=!m.trim(),h=0;if(this.options.pedantic?(h=2,p=m.trimStart()):y?h=t[1].length+1:(h=t[2].search(this.rules.other.nonSpaceChar),h=h>4?1:h,p=m.slice(h),h+=t[1].length),y&&this.rules.other.blankLine.test(f)&&(d+=f+`
`,e=e.substring(f.length+1),c=!0),!c){let w=this.rules.other.nextBulletRegex(h),g=this.rules.other.hrRegex(h),b=this.rules.other.fencesBeginRegex(h),j=this.rules.other.headingBeginRegex(h),C=this.rules.other.htmlBeginRegex(h);for(;e;){let E=e.split(`
`,1)[0],S;if(f=E,this.options.pedantic?(f=f.replace(this.rules.other.listReplaceNesting,"  "),S=f):S=f.replace(this.rules.other.tabCharGlobal,"    "),b.test(f)||j.test(f)||C.test(f)||w.test(f)||g.test(f))break;if(S.search(this.rules.other.nonSpaceChar)>=h||!f.trim())p+=`
`+S.slice(h);else{if(y||m.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||b.test(m)||j.test(m)||g.test(m))break;p+=`
`+f}!y&&!f.trim()&&(y=!0),d+=E+`
`,e=e.substring(E.length+1),m=S.slice(h)}}a.loose||(o?a.loose=!0:this.rules.other.doubleBlankLine.test(d)&&(o=!0));let x=null,k;this.options.gfm&&(x=this.rules.other.listIsTask.exec(p),x&&(k=x[0]!=="[ ] ",p=p.replace(this.rules.other.listReplaceTask,""))),a.items.push({type:"list_item",raw:d,task:!!x,checked:k,loose:!1,text:p,tokens:[]}),a.raw+=d}let l=a.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;a.raw=a.raw.trimEnd();for(let c=0;c<a.items.length;c++)if(this.lexer.state.top=!1,a.items[c].tokens=this.lexer.blockTokens(a.items[c].text,[]),!a.loose){let d=a.items[c].tokens.filter(m=>m.type==="space"),p=d.length>0&&d.some(m=>this.rules.other.anyLine.test(m.raw));a.loose=p}if(a.loose)for(let c=0;c<a.items.length;c++)a.items[c].loose=!0;return a}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:a}}}table(e){var o;let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=j0(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),a=(o=t[3])!=null&&o.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let l of s)this.rules.other.tableAlignRight.test(l)?i.align.push("right"):this.rules.other.tableAlignCenter.test(l)?i.align.push("center"):this.rules.other.tableAlignLeft.test(l)?i.align.push("left"):i.align.push(null);for(let l=0;l<n.length;l++)i.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:i.align[l]});for(let l of a)i.rows.push(j0(l,i.header.length).map((c,d)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:i.align[d]})));return i}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let i=ks(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{let i=$b(t[2],"()");if(i===-2)return;if(i>-1){let o=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let s=t[2],a="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(s);i&&(s=i[1],a=i[3])}else a=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),C0(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),a=t[s.toLowerCase()];if(!a){let i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return C0(n,a,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!n||this.rules.inline.punctuation.exec(n))){let a=[...s[0]].length-1,i,o,l=a,c=0,d=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+a);(s=d.exec(t))!=null;){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i)continue;if(o=[...i].length,s[3]||s[4]){l+=o;continue}else if((s[5]||s[6])&&a%3&&!((a+o)%3)){c+=o;continue}if(l-=o,l>0)continue;o=Math.min(o,o+l+c);let p=[...s[0]][0].length,m=e.slice(0,a+s.index+p+o);if(Math.min(a,o)%2){let y=m.slice(1,-1);return{type:"em",raw:m,text:y,tokens:this.lexer.inlineTokens(y)}}let f=m.slice(2,-2);return{type:"strong",raw:m,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(n),a=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&a&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let s,a;if(t[2]==="@")s=t[0],a="mailto:"+s;else{let i;do i=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(i!==t[0]);s=t[0],t[1]==="www."?a="http://"+t[0]:a=t[0]}return{type:"link",raw:t[0],text:s,href:a,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},bn=class Tc{constructor(t){le(this,"tokens");le(this,"options");le(this,"state");le(this,"tokenizer");le(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Er,this.options.tokenizer=this.options.tokenizer||new Hi,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:at,block:Ua.normal,inline:ws.normal};this.options.pedantic?(n.block=Ua.pedantic,n.inline=ws.pedantic):this.options.gfm&&(n.block=Ua.gfm,this.options.breaks?n.inline=ws.breaks:n.inline=ws.gfm),this.tokenizer.rules=n}static get rules(){return{block:Ua,inline:ws}}static lex(t,n){return new Tc(n).lex(t)}static lexInline(t,n){return new Tc(n).inlineTokens(t)}lex(t){t=t.replace(at.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){var a,i,o;for(this.options.pedantic&&(t=t.replace(at.tabCharGlobal,"    ").replace(at.spaceLine,""));t;){let l;if((i=(a=this.options.extensions)==null?void 0:a.block)!=null&&i.some(d=>(l=d.call({lexer:this},t,n))?(t=t.substring(l.raw.length),n.push(l),!0):!1))continue;if(l=this.tokenizer.space(t)){t=t.substring(l.raw.length);let d=n.at(-1);l.raw.length===1&&d!==void 0?d.raw+=`
`:n.push(l);continue}if(l=this.tokenizer.code(t)){t=t.substring(l.raw.length);let d=n.at(-1);(d==null?void 0:d.type)==="paragraph"||(d==null?void 0:d.type)==="text"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+l.raw,d.text+=`
`+l.text,this.inlineQueue.at(-1).src=d.text):n.push(l);continue}if(l=this.tokenizer.fences(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.heading(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.hr(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.blockquote(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.list(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.html(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.def(t)){t=t.substring(l.raw.length);let d=n.at(-1);(d==null?void 0:d.type)==="paragraph"||(d==null?void 0:d.type)==="text"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+l.raw,d.text+=`
`+l.raw,this.inlineQueue.at(-1).src=d.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(t)){t=t.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.lheading(t)){t=t.substring(l.raw.length),n.push(l);continue}let c=t;if((o=this.options.extensions)!=null&&o.startBlock){let d=1/0,p=t.slice(1),m;this.options.extensions.startBlock.forEach(f=>{m=f.call({lexer:this},p),typeof m=="number"&&m>=0&&(d=Math.min(d,m))}),d<1/0&&d>=0&&(c=t.substring(0,d+1))}if(this.state.top&&(l=this.tokenizer.paragraph(c))){let d=n.at(-1);s&&(d==null?void 0:d.type)==="paragraph"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+l.raw,d.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=d.text):n.push(l),s=c.length!==t.length,t=t.substring(l.raw.length);continue}if(l=this.tokenizer.text(t)){t=t.substring(l.raw.length);let d=n.at(-1);(d==null?void 0:d.type)==="text"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+l.raw,d.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=d.text):n.push(l);continue}if(t){let d="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){var l,c,d;let s=t,a=null;if(this.tokens.links){let p=Object.keys(this.tokens.links);if(p.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)p.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,a.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(a=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,o="";for(;t;){i||(o=""),i=!1;let p;if((c=(l=this.options.extensions)==null?void 0:l.inline)!=null&&c.some(f=>(p=f.call({lexer:this},t,n))?(t=t.substring(p.raw.length),n.push(p),!0):!1))continue;if(p=this.tokenizer.escape(t)){t=t.substring(p.raw.length),n.push(p);continue}if(p=this.tokenizer.tag(t)){t=t.substring(p.raw.length),n.push(p);continue}if(p=this.tokenizer.link(t)){t=t.substring(p.raw.length),n.push(p);continue}if(p=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(p.raw.length);let f=n.at(-1);p.type==="text"&&(f==null?void 0:f.type)==="text"?(f.raw+=p.raw,f.text+=p.text):n.push(p);continue}if(p=this.tokenizer.emStrong(t,s,o)){t=t.substring(p.raw.length),n.push(p);continue}if(p=this.tokenizer.codespan(t)){t=t.substring(p.raw.length),n.push(p);continue}if(p=this.tokenizer.br(t)){t=t.substring(p.raw.length),n.push(p);continue}if(p=this.tokenizer.del(t)){t=t.substring(p.raw.length),n.push(p);continue}if(p=this.tokenizer.autolink(t)){t=t.substring(p.raw.length),n.push(p);continue}if(!this.state.inLink&&(p=this.tokenizer.url(t))){t=t.substring(p.raw.length),n.push(p);continue}let m=t;if((d=this.options.extensions)!=null&&d.startInline){let f=1/0,y=t.slice(1),h;this.options.extensions.startInline.forEach(x=>{h=x.call({lexer:this},y),typeof h=="number"&&h>=0&&(f=Math.min(f,h))}),f<1/0&&f>=0&&(m=t.substring(0,f+1))}if(p=this.tokenizer.inlineText(m)){t=t.substring(p.raw.length),p.raw.slice(-1)!=="_"&&(o=p.raw.slice(-1)),i=!0;let f=n.at(-1);(f==null?void 0:f.type)==="text"?(f.raw+=p.raw,f.text+=p.text):n.push(p);continue}if(t){let f="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return n}},Ui=class{constructor(e){le(this,"options");le(this,"parser");this.options=e||Er}space(e){return""}code({text:e,lang:t,escaped:n}){var i;let s=(i=(t||"").match(at.notSpaceStart))==null?void 0:i[0],a=e.replace(at.endingNewline,"")+`
`;return s?'<pre><code class="language-'+rn(s)+'">'+(n?a:rn(a,!0))+`</code></pre>
`:"<pre><code>"+(n?a:rn(a,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,s="";for(let o=0;o<e.items.length;o++){let l=e.items[o];s+=this.listitem(l)}let a=t?"ol":"ul",i=t&&n!==1?' start="'+n+'"':"";return"<"+a+i+`>
`+s+"</"+a+`>
`}listitem(e){var n;let t="";if(e.task){let s=this.checkbox({checked:!!e.checked});e.loose?((n=e.tokens[0])==null?void 0:n.type)==="paragraph"?(e.tokens[0].text=s+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=s+" "+rn(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:s+" ",text:s+" ",escaped:!0}):t+=s+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let a=0;a<e.header.length;a++)n+=this.tablecell(e.header[a]);t+=this.tablerow({text:n});let s="";for(let a=0;a<e.rows.length;a++){let i=e.rows[a];n="";for(let o=0;o<i.length;o++)n+=this.tablecell(i[o]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${rn(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let s=this.parser.parseInline(n),a=k0(e);if(a===null)return s;e=a;let i='<a href="'+e+'"';return t&&(i+=' title="'+rn(t)+'"'),i+=">"+s+"</a>",i}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));let a=k0(e);if(a===null)return rn(n);e=a;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${rn(t)}"`),i+=">",i}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:rn(e.text)}},nd=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},wn=class zc{constructor(t){le(this,"options");le(this,"renderer");le(this,"textRenderer");this.options=t||Er,this.options.renderer=this.options.renderer||new Ui,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new nd}static parse(t,n){return new zc(n).parse(t)}static parseInline(t,n){return new zc(n).parseInline(t)}parse(t,n=!0){var a,i;let s="";for(let o=0;o<t.length;o++){let l=t[o];if((i=(a=this.options.extensions)==null?void 0:a.renderers)!=null&&i[l.type]){let d=l,p=this.options.extensions.renderers[d.type].call({parser:this},d);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(d.type)){s+=p||"";continue}}let c=l;switch(c.type){case"space":{s+=this.renderer.space(c);continue}case"hr":{s+=this.renderer.hr(c);continue}case"heading":{s+=this.renderer.heading(c);continue}case"code":{s+=this.renderer.code(c);continue}case"table":{s+=this.renderer.table(c);continue}case"blockquote":{s+=this.renderer.blockquote(c);continue}case"list":{s+=this.renderer.list(c);continue}case"html":{s+=this.renderer.html(c);continue}case"paragraph":{s+=this.renderer.paragraph(c);continue}case"text":{let d=c,p=this.renderer.text(d);for(;o+1<t.length&&t[o+1].type==="text";)d=t[++o],p+=`
`+this.renderer.text(d);n?s+=this.renderer.paragraph({type:"paragraph",raw:p,text:p,tokens:[{type:"text",raw:p,text:p,escaped:!0}]}):s+=p;continue}default:{let d='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return s}parseInline(t,n=this.renderer){var a,i;let s="";for(let o=0;o<t.length;o++){let l=t[o];if((i=(a=this.options.extensions)==null?void 0:a.renderers)!=null&&i[l.type]){let d=this.options.extensions.renderers[l.type].call({parser:this},l);if(d!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){s+=d||"";continue}}let c=l;switch(c.type){case"escape":{s+=n.text(c);break}case"html":{s+=n.html(c);break}case"link":{s+=n.link(c);break}case"image":{s+=n.image(c);break}case"strong":{s+=n.strong(c);break}case"em":{s+=n.em(c);break}case"codespan":{s+=n.codespan(c);break}case"br":{s+=n.br(c);break}case"del":{s+=n.del(c);break}case"text":{s+=n.text(c);break}default:{let d='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return s}},xl,li=(xl=class{constructor(e){le(this,"options");le(this,"block");this.options=e||Er}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?bn.lex:bn.lexInline}provideParser(){return this.block?wn.parse:wn.parseInline}},le(xl,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),xl),Ab=class{constructor(...e){le(this,"defaults",Y1());le(this,"options",this.setOptions);le(this,"parse",this.parseMarkdown(!0));le(this,"parseInline",this.parseMarkdown(!1));le(this,"Parser",wn);le(this,"Renderer",Ui);le(this,"TextRenderer",nd);le(this,"Lexer",bn);le(this,"Tokenizer",Hi);le(this,"Hooks",li);this.use(...e)}walkTokens(e,t){var s,a;let n=[];for(let i of e)switch(n=n.concat(t.call(this,i)),i.type){case"table":{let o=i;for(let l of o.header)n=n.concat(this.walkTokens(l.tokens,t));for(let l of o.rows)for(let c of l)n=n.concat(this.walkTokens(c.tokens,t));break}case"list":{let o=i;n=n.concat(this.walkTokens(o.items,t));break}default:{let o=i;(a=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&a[o.type]?this.defaults.extensions.childTokens[o.type].forEach(l=>{let c=o[l].flat(1/0);n=n.concat(this.walkTokens(c,t))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){let i=t.renderers[a.name];i?t.renderers[a.name]=function(...o){let l=a.renderer.apply(this,o);return l===!1&&(l=i.apply(this,o)),l}:t.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=t[a.level];i?i.unshift(a.tokenizer):t[a.level]=[a.tokenizer],a.start&&(a.level==="block"?t.startBlock?t.startBlock.push(a.start):t.startBlock=[a.start]:a.level==="inline"&&(t.startInline?t.startInline.push(a.start):t.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(t.childTokens[a.name]=a.childTokens)}),s.extensions=t),n.renderer){let a=this.defaults.renderer||new Ui(this.defaults);for(let i in n.renderer){if(!(i in a))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let o=i,l=n.renderer[o],c=a[o];a[o]=(...d)=>{let p=l.apply(a,d);return p===!1&&(p=c.apply(a,d)),p||""}}s.renderer=a}if(n.tokenizer){let a=this.defaults.tokenizer||new Hi(this.defaults);for(let i in n.tokenizer){if(!(i in a))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let o=i,l=n.tokenizer[o],c=a[o];a[o]=(...d)=>{let p=l.apply(a,d);return p===!1&&(p=c.apply(a,d)),p}}s.tokenizer=a}if(n.hooks){let a=this.defaults.hooks||new li;for(let i in n.hooks){if(!(i in a))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let o=i,l=n.hooks[o],c=a[o];li.passThroughHooks.has(i)?a[o]=d=>{if(this.defaults.async)return Promise.resolve(l.call(a,d)).then(m=>c.call(a,m));let p=l.call(a,d);return c.call(a,p)}:a[o]=(...d)=>{let p=l.apply(a,d);return p===!1&&(p=c.apply(a,d)),p}}s.hooks=a}if(n.walkTokens){let a=this.defaults.walkTokens,i=n.walkTokens;s.walkTokens=function(o){let l=[];return l.push(i.call(this,o)),a&&(l=l.concat(a.call(this,o))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return bn.lex(e,t??this.defaults)}parser(e,t){return wn.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let s={...n},a={...this.defaults,...s},i=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&s.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);let o=a.hooks?a.hooks.provideLexer():e?bn.lex:bn.lexInline,l=a.hooks?a.hooks.provideParser():e?wn.parse:wn.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(t):t).then(c=>o(c,a)).then(c=>a.hooks?a.hooks.processAllTokens(c):c).then(c=>a.walkTokens?Promise.all(this.walkTokens(c,a.walkTokens)).then(()=>c):c).then(c=>l(c,a)).then(c=>a.hooks?a.hooks.postprocess(c):c).catch(i);try{a.hooks&&(t=a.hooks.preprocess(t));let c=o(t,a);a.hooks&&(c=a.hooks.processAllTokens(c)),a.walkTokens&&this.walkTokens(c,a.walkTokens);let d=l(c,a);return a.hooks&&(d=a.hooks.postprocess(d)),d}catch(c){return i(c)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let s="<p>An error occurred:</p><pre>"+rn(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},Cr=new Ab;function se(e,t){return Cr.parse(e,t)}se.options=se.setOptions=function(e){return Cr.setOptions(e),se.defaults=Cr.defaults,Kf(se.defaults),se};se.getDefaults=Y1;se.defaults=Er;se.use=function(...e){return Cr.use(...e),se.defaults=Cr.defaults,Kf(se.defaults),se};se.walkTokens=function(e,t){return Cr.walkTokens(e,t)};se.parseInline=Cr.parseInline;se.Parser=wn;se.parser=wn.parse;se.Renderer=Ui;se.TextRenderer=nd;se.Lexer=bn;se.lexer=bn.lex;se.Tokenizer=Hi;se.Hooks=li;se.parse=se;se.options;se.setOptions;se.use;se.walkTokens;se.parseInline;wn.parse;bn.lex;const Mb="/imgs/save.jpg";function Db({url:e,setIframeLoaded:t}){const[n,s]=u.useState(!1),a=`${e}`;return u.useEffect(()=>{const i=window.matchMedia("(max-width: 768px)");s(i.matches);const o=l=>s(l.matches);return i.addEventListener("change",o),()=>i.removeEventListener("change",o)},[]),n?r.jsx("iframe",{className:"loadpdf",src:`https://docs.google.com/viewer?url=${a}`,title:"Mobile View",style:{width:"100%",height:"100vh",border:"none",opacity:"0"},onLoad:()=>setTimeout(()=>t(!0),4e3)}):r.jsx("iframe",{className:"loadpdf",src:a,title:"Laptop View",style:{width:"100%",height:"100vh",border:"none"},onLoad:()=>setTimeout(()=>t(!0),4e3)})}const Fb="modulepreload",Bb=function(e){return"/"+e},S0={},Zt=function(t,n,s){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Bb(i),i in S0)return;S0[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let p=a.length-1;p>=0;p--){const m=a[p];if(m.href===i&&(!o||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const d=document.createElement("link");if(d.rel=o?"stylesheet":Fb,o||(d.as="script",d.crossOrigin=""),d.href=i,document.head.appendChild(d),o)return new Promise((p,m)=>{d.addEventListener("load",p),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},N0=u.lazy(()=>Zt(()=>Promise.resolve().then(()=>Fk),void 0)),Vb=u.lazy(()=>Zt(()=>Promise.resolve().then(()=>Uk),void 0)),Hb=u.lazy(()=>Zt(()=>Promise.resolve().then(()=>Wk),void 0)),Ub=u.lazy(()=>Zt(()=>Promise.resolve().then(()=>Gk),void 0)),qb=u.lazy(()=>Zt(()=>Promise.resolve().then(()=>uj),void 0)),Wb=u.lazy(()=>Zt(()=>Promise.resolve().then(()=>ek),void 0)),Gb=u.lazy(()=>Zt(()=>Promise.resolve().then(()=>ok),void 0)),Pc=[{key:"quiz",group:"create",label:"Quiz",Icon:Uy,blurb:"Multiple-choice and fill-in questions from this solution."},{key:"flashcards",group:"create",label:"Flashcards",Icon:If,blurb:"Turn this solution into front/back study cards."},{key:"tutor",group:"create",label:"Tutor",Icon:zf,blurb:"Get a simple explanation plus check-yourself questions."},{key:"podcast",group:"create",label:"Podcast",Icon:Qy,blurb:"A two-host conversation about this topic you can listen to."},{key:"chat",group:"create",label:"Chat",Icon:Bf,blurb:"Ask follow-up questions about this solution."},{key:"media",group:"create",label:"Image & Video",Icon:Nf,blurb:"Generate an image or a short video. Uses credits."},{key:"decks",group:"study",label:"My decks",Icon:Hy,blurb:"Review your flashcard decks with spaced repetition."},{key:"tests",group:"study",label:"Mock tests",Icon:Wf,blurb:"Take timed practice tests you have saved."}],Yb=Object.fromEntries(Pc.map(e=>[e.key,e])),Qb=new Set(["decks","tests"]),pl=4500,Zb=1100,Kb=1e3;function Jb(e){if(!e||typeof e!="string")return"";try{const t=new DOMParser().parseFromString(e,"text/html");return t.querySelectorAll("script,style").forEach(n=>n.remove()),(t.body.textContent||"").replace(/\u00a0/g," ").replace(/[ \t]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim()}catch{return e.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()}}class Xb extends mr.Component{constructor(){super(...arguments);le(this,"state",{failed:!1})}static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(n,s){console.error(`[SolutionAITools] "${this.props.name}" crashed`,n,s==null?void 0:s.componentStack)}render(){return this.state.failed?r.jsxs("div",{className:"sf-ai__fallback",role:"alert",children:[r.jsx(Zy,{size:20}),r.jsx("p",{children:"This tool ran into a problem and was stopped. Your solution is safe."}),r.jsx("button",{type:"button",className:"sf-pill-btn",onClick:()=>this.setState({failed:!1}),children:"Try again"})]}):this.props.children}}const ew=()=>r.jsx("div",{className:"sf-ai__loading","aria-busy":"true",children:[80,60,90,45].map((e,t)=>r.jsx("div",{className:"sf-skeleton",style:{width:`${e}%`,height:13,borderRadius:6}},t))});function tw({activeTool:e,onSelectTool:t,onClose:n,sourceText:s,courseName:a}){const[i,o]=u.useState(()=>new Set);u.useEffect(()=>{e&&!Qb.has(e)&&o(y=>y.has(e)?y:new Set(y).add(e))},[e]);const l=u.useMemo(()=>{const y=(s||"").trim(),h=(a||"").trim(),x=y.length>pl;return{quizText:y.slice(0,pl),quizLabel:h?`${h}${x?` (first ${pl.toLocaleString()} characters)`:""}`:"",tutorText:y?`${h?`“${h}” — `:""}${y.slice(0,Zb)}`:"",podcastTopic:y?`${h?`${h}: `:""}${y.slice(0,Kb)}`:"",chatContext:`${h?`${h}. `:""}${y}`,mediaPrompt:h?`Educational illustration for the topic: ${h}`:""}},[s,a]),c=y=>{const h={mocktest:"tests",flashcards:"decks"};h[y]&&t(h[y])},d=y=>{switch(y){case"quiz":return r.jsx(N0,{mode:"quiz",embedded:!0,initialText:l.quizText,initialSourceLabel:l.quizLabel,onNavigate:c});case"flashcards":return r.jsx(N0,{mode:"flashcards",embedded:!0,initialText:l.quizText,initialSourceLabel:l.quizLabel,onNavigate:c});case"tutor":return r.jsx(Vb,{initialText:l.tutorText});case"podcast":return r.jsx(Hb,{initialTopic:l.podcastTopic});case"chat":return r.jsx(Ub,{context:l.chatContext,saveTitle:`Chat: ${(a||"solution").slice(0,60)}`});case"media":return r.jsx(qb,{compact:!0,initialPrompt:l.mediaPrompt});case"decks":return r.jsx(Wb,{});case"tests":return r.jsx(Gb,{});default:return null}},p=new Set(i);e&&p.add(e);const m=e?Yb[e]:null,f=e&&["quiz","flashcards","tutor","podcast"].includes(e);return r.jsxs("div",{className:"sf-ai",hidden:!e,children:[m&&r.jsxs("div",{className:"sf-ai__head",children:[r.jsxs("button",{type:"button",className:"sf-pill-btn",onClick:n,title:"Back to the solution",children:[r.jsx(Oy,{size:13})," Solution"]}),r.jsxs("div",{className:"sf-ai__head-text",children:[r.jsxs("span",{className:"sf-ai__title",children:[r.jsx(m.Icon,{size:15})," ",m.label]}),r.jsx("span",{className:"sf-ai__blurb",children:m.blurb})]})]}),f&&!l.quizText&&r.jsx("div",{className:"sf-ai__notice",children:"No solution text is loaded yet — paste your own material below, or generate a solution first."}),r.jsx("div",{className:"sf-ai__body",children:[...p].map(y=>r.jsx("div",{className:"sf-ai__pane",hidden:y!==e,children:r.jsx(Xb,{name:y,children:r.jsx(u.Suspense,{fallback:r.jsx(ew,{}),children:d(y)})})},y))})]})}const Ic=new Set;function rd(e){const t=Number(e);e==null||!Number.isFinite(t)||Ic.forEach(n=>{try{n(t)}catch{}})}function nw(e){return Ic.add(e),()=>Ic.delete(e)}const rw=5,l4=8e3,sw=400,aw=20,iw=(e,t)=>{try{const s=JSON.parse(localStorage.getItem("recentSolutions")||"[]").filter(i=>i.course!==e),a=[{course:e,solution:t,savedAt:Date.now()},...s].slice(0,rw).filter(i=>!/aierror/gim.test(i.solution)||i.solution.length>15).sort((i,o)=>o.savedAt-i.savedAt);localStorage.setItem("recentSolutions",JSON.stringify(a))}catch{}},_0=()=>{try{return JSON.parse(localStorage.getItem("recentSolutions")||"[]")}catch{return[]}},c4=()=>{try{const e=JSON.parse(localStorage.getItem("userInfo")||"{}");if(!(e!=null&&e.accessToken))throw new Error("Missing access token. Please login again.");return{accessToken:e.accessToken,refreshToken:e.refreshToken,userId:e.id}}catch(e){throw new Error(e.message||"Auth error. Please login again.")}},ow=[{to:"/dashboard/hub",label:"Learning Hub",Icon:zf},{to:"/dashboard/solutions",label:"Solutions",Icon:By},{to:"/dashboard/general",label:"General",Icon:Vy},{to:"/dashboard/products",label:"Solve with AI",Icon:Uf},{to:"/dashboard/leaderboard",label:"Leaderboard",Icon:Ky},{to:"/dashboard/earn",label:"Earn",Icon:Jy},{to:"/dashboard/nss",label:"NSS Guide",Icon:Ly},{to:"/dashboard/job",label:"Job Guide",Icon:My},{to:"/dashboard/advert",label:"Advertise",Icon:Gy}],lw=()=>r.jsx("div",{className:"sf-quicknav",role:"navigation",style:{display:"none"},"aria-label":"Other features",children:ow.map(({to:e,label:t,Icon:n})=>r.jsx(Re,{to:e,className:"sf-quicknav__item",title:t,children:r.jsx(n,{size:16,strokeWidth:1.8})},e))}),E0=({size:e=14})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M12 2.5c.6 3.4 1.7 5.6 3.2 7.1 1.5 1.5 3.7 2.6 7.1 3.2-3.4.6-5.6 1.7-7.1 3.2-1.5 1.5-2.6 3.7-3.2 7.1-.6-3.4-1.7-5.6-3.2-7.1-1.5-1.5-3.7-2.6-7.1-3.2 3.4-.6 5.6-1.7 7.1-3.2 1.5-1.5 2.6-3.7 3.2-7.1Z",stroke:"currentColor",strokeWidth:"1.3",strokeLinejoin:"round"})}),cw=({message:e,type:t="error",onDismiss:n})=>(u.useEffect(()=>{const s=setTimeout(n,3e3);return()=>clearTimeout(s)},[n]),r.jsxs("div",{className:`sf-toast sf-toast--${t}`,children:[r.jsx("span",{className:t==="error"?"sf-toast__dot sf-toast__dot--error":"sf-toast__dot sf-toast__dot--success"}),r.jsx("span",{children:e})]})),dw=({setstoreme:e,extract:t,courseName:n,selectedVal:s})=>{const[a,i]=u.useState(""),[o,l]=u.useState(!1),[c,d]=u.useState(null),p=async()=>{if(a!=="Dont save bad responses"){d({message:"Please type the note correctly to proceed",type:"error"});return}let m,f;try{({accessToken:m,refreshToken:f}=c4())}catch(x){d({message:x.message,type:"error"});return}l(!0);const y=new AbortController,h=setTimeout(()=>y.abort(),l4);try{await Pe(X+"/api/v1/solutions/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${m}`},body:JSON.stringify({courseName:n,solution:t,validated:!1,modelName:s}),signal:y.signal}),d({message:"Saved successfully!",type:"success"}),setTimeout(()=>e(!1),1600)}catch(x){d({message:x.name==="AbortError"?"Request timed out.":"Error: "+(x.message||x),type:"error"})}finally{clearTimeout(h),l(!1)}};return r.jsxs("div",{className:"sf-modal-overlay",children:[c&&r.jsx(cw,{message:c.message,type:c.type,onDismiss:()=>d(null)}),r.jsxs("div",{className:"sf-modal",children:[r.jsx("button",{className:"sf-modal__close",onClick:()=>e(!1),children:r.jsx(Wh,{})}),r.jsxs("div",{className:"sf-modal__art",children:[r.jsx("img",{src:Mb,alt:"save"}),r.jsx("div",{className:"sf-modal__art-fade"})]}),r.jsxs("div",{className:"sf-modal__body",children:[r.jsx("h3",{className:"sf-modal__title",children:"Save Response"}),r.jsxs("div",{className:"sf-modal__notice",children:[r.jsx("i",{className:"fa fa-exclamation-triangle sf-modal__notice-icon"}),r.jsxs("p",{children:["Only save ",r.jsx("strong",{children:"good responses"}),". This helps you avoid spending credits on the same topic twice."]})]}),r.jsxs("div",{className:"sf-modal__field",children:[r.jsx("label",{children:"Type to confirm:"}),r.jsx("div",{className:"sf-modal__confirm-phrase",children:"Dont save bad responses"}),r.jsx("input",{type:"text",value:a,onChange:m=>i(m.target.value),placeholder:"Type the phrase above…",className:a&&a!=="Dont save bad responses"?"sf-modal__input--invalid":""})]}),r.jsx("button",{className:"sf-modal__save-btn",onClick:p,disabled:o,children:o?r.jsx("span",{className:"sf-modal__spinner"}):r.jsxs(r.Fragment,{children:[r.jsx("i",{className:"fa fa-save"})," Save"]})})]})]})]})};let fr=null,qa=null;const uw=()=>fr?Promise.resolve(fr):(qa||(qa=fetch(`${oa}/api/files/models`).then(e=>{if(!e.ok)throw new Error(`HTTP ${e.status}`);return e.json()}).then(e=>{if(!e||typeof e!="object"||Array.isArray(e)||Object.keys(e).length===0)throw new Error("No models available");return fr=e,e}).finally(()=>{qa=null})),qa),Vs=e=>{if(!e)return"";const t=Object.entries(fr||{}).find(([,n])=>n===e);return(t==null?void 0:t[0])||e},pw=({currentVal:e,pendingVal:t,onPick:n,disabled:s})=>{const[a,i]=u.useState(fr||{}),[o,l]=u.useState(fr?"ready":"loading"),[c,d]=u.useState(!1),[p,m]=u.useState(""),f=u.useRef(null),y=u.useRef(null),h=u.useCallback(()=>{l("loading"),uw().then(g=>{i(g),l("ready")}).catch(()=>l("error"))},[]);u.useEffect(()=>{fr||h()},[h]),u.useEffect(()=>{var j;if(!c)return;const g=C=>{f.current&&!f.current.contains(C.target)&&d(!1)},b=C=>{C.key==="Escape"&&d(!1)};return document.addEventListener("mousedown",g),document.addEventListener("keydown",b),(j=y.current)==null||j.focus(),()=>{document.removeEventListener("mousedown",g),document.removeEventListener("keydown",b)}},[c]);const x=t||e,k=u.useMemo(()=>{const g=p.trim().toLowerCase();return Object.entries(a).filter(([b])=>!g||b.toLowerCase().includes(g))},[a,p]),w=g=>{n(g===e?null:g),d(!1),m("")};return r.jsxs("div",{className:"sf-model",ref:f,children:[r.jsxs("button",{type:"button",className:`sf-model__btn ${t?"sf-model__btn--pending":""}`,onClick:()=>d(g=>!g),disabled:s,"aria-haspopup":"listbox","aria-expanded":c,title:t?"Next regenerate will use this model":"Choose the AI model for the next regenerate",children:[r.jsx(Fi,{}),r.jsx("span",{className:"sf-model__name",children:Vs(x)||"Model"}),r.jsx(r7,{className:"sf-model__caret"})]}),c&&r.jsxs("div",{className:"sf-model__pop",role:"dialog","aria-label":"Choose AI model",children:[r.jsxs("div",{className:"sf-model__search",children:[r.jsx(Bi,{}),r.jsx("input",{ref:y,type:"text",placeholder:"Search models…",value:p,onChange:g=>m(g.target.value),"aria-label":"Search models"})]}),r.jsxs("div",{className:"sf-model__list",role:"listbox",children:[o==="loading"&&[1,2,3].map(g=>r.jsx("div",{className:"sf-model__row",children:r.jsx(Rc,{height:12,width:"60%"})},g)),o==="error"&&r.jsxs("div",{className:"sf-model__empty",children:["Couldn’t load models."," ",r.jsx("button",{type:"button",className:"sf-model__retry",onClick:h,children:"Retry"})]}),o==="ready"&&k.length===0&&r.jsxs("div",{className:"sf-model__empty",children:["No models match “",p.trim(),"”"]}),o==="ready"&&k.map(([g,b])=>r.jsxs("button",{type:"button",role:"option","aria-selected":b===x,className:`sf-model__row sf-model__row--btn ${b===x?"sf-model__row--active":""}`,onClick:()=>w(b),children:[r.jsx(Fi,{className:"sf-model__row-icon"}),r.jsx("span",{className:"sf-model__row-name",children:g}),b===e&&r.jsx("span",{className:"sf-model__tag",children:"Current"}),b===x&&r.jsx(pg,{className:"sf-model__check"})]},b))]}),r.jsxs("div",{className:"sf-model__foot",children:["Takes effect the next time you press ",r.jsx("strong",{children:"Regenerate"}),".",t&&r.jsxs("button",{type:"button",className:"sf-model__retry",onClick:()=>w(e),children:["Keep ",Vs(e)||"current"]})]})]})]})},Rc=({width:e="100%",height:t=14,style:n={}})=>r.jsx("div",{className:"sf-skeleton",style:{width:e,height:t,borderRadius:6,...n}}),hw=({pdflink:e,courseName:t,selectedVal:n,setshowpdf:s,mainlogo:a,actualDlink:i,credits:o,extract:l,dataerror:c,raw:d,onRegenerate:p,onCreditsChange:m})=>{var ye;const[f,y]=u.useState(!1),[h,x]=u.useState(_0),[k,w]=u.useState(!1),[g,b]=u.useState(!1),[j,C]=u.useState(!0),[E,S]=u.useState(!0),[N,_]=u.useState(null),[z,B]=u.useState([]),[ee,je]=u.useState(!1),[ne,Ce]=u.useState(""),[A,q]=u.useState(""),[I,O]=u.useState(!1),[D,Z]=u.useState(1),[G,Ve]=u.useState(!1),[Se,Ge]=u.useState(!1),[Ne,ct]=u.useState("saved"),[vt,yt]=u.useState(!1),[tt,Ye]=u.useState(!1),[he,pn]=u.useState(null),[Ae,_e]=u.useState(null),[Dt,Jt]=u.useState(!1),[T,W]=u.useState(null),H=u.useRef(null),Y=u.useRef(null),oe=u.useRef(""),F=u.useCallback(async(L="",{page:Ee=1,append:zn=!1}={})=>{var dd;(dd=H.current)==null||dd.abort(),H.current=new AbortController;const $=L.trim().length>0;zn||(oe.current=L.trim()),zn?Ge(!0):$?O(!0):je(!0),Ce("");let Q,ge,ut;try{({accessToken:Q,refreshToken:ge,userId:ut}=c4())}catch(Ze){Ce(Ze.message),zn?Ge(!1):$?O(!1):je(!1);return}const Tt=new URLSearchParams({page:String(Ee),pageSize:String(aw)});ut&&Tt.set("userId",ut),$&&Tt.set("courseName",L.trim());const en=`${X}/api/v1/solutions/queries?${Tt.toString()}`,va=setTimeout(()=>{var Ze;return(Ze=H.current)==null?void 0:Ze.abort()},l4);try{const{data:Ze,meta:wo}=await f5(en,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${Q}`},signal:H.current.signal}),ko=Array.isArray(Ze)?Ze:Array.isArray(Ze==null?void 0:Ze.solutions)?Ze.solutions:[],fn=(wo==null?void 0:wo.pagination)??(Ze&&!Array.isArray(Ze)?Ze:null),ud={solutions:ko,solutions_count:(fn==null?void 0:fn.totalCount)??(fn==null?void 0:fn.solutions_count)??ko.length},O4=(fn==null?void 0:fn.hasNext)??!1;B(jo=>zn?{...ud,solutions:[...(jo==null?void 0:jo.solutions)??[],...ko]}:ud),Ve(O4),Z(Ee)}catch(Ze){Ze.name!=="AbortError"&&Ce($?"Search failed. Try again.":"Could not load saved queries.")}finally{clearTimeout(va),zn?Ge(!1):$?O(!1):je(!1)}},[]);u.useEffect(()=>(F(),()=>{var L;(L=H.current)==null||L.abort(),clearTimeout(Y.current)}),[F]);const ve=u.useCallback(L=>{const Ee=L.target.value;q(Ee),clearTimeout(Y.current),Ne==="saved"&&(Y.current=setTimeout(()=>F(Ee),sw))},[F,Ne]),P=u.useCallback(L=>{ct(L),clearTimeout(Y.current),L==="saved"&&oe.current!==A.trim()&&F(A)},[F,A]),ce=u.useCallback(()=>{!G||Se||F(A,{page:D+1,append:!0})},[F,G,Se,D,A]);u.useEffect(()=>{l&&l!=="loading..."&&!(c!=null&&c.length)&&(iw(t,l),x(_0()))},[l,t,c]);const J=l==="loading...",He=(c==null?void 0:c.length)>0||!l||l==="loading...",us=/download/gi.test(i),nr=u.useMemo(()=>{const L=A.trim().toLowerCase();return L?h.filter(Ee=>(Ee.course||"").toLowerCase().includes(L)):h},[h,A]);u.useEffect(()=>{W(null)},[o]),u.useEffect(()=>nw(L=>{W(L),m==null||m(L)}),[m]);const Tr=T??o??"0";u.useEffect(()=>{pn(null)},[n]);const En=(N==null?void 0:N.solution)||(He?"":l)||"",Ft=u.useMemo(()=>Jb(En?se(En):""),[En]),Qe=(N==null?void 0:N.course)||t,dt=`${(N==null?void 0:N.id)??(N==null?void 0:N.course)??"live"}|${Ft.length}|${Ft.slice(0,40)}`;u.useEffect(()=>{_e(null),Jt(!1)},[dt]);const zr=L=>{Jt(!0),_e(Ee=>Ee===L?null:L)},Tn=L=>{Jt(!0),_e(L)};u.useEffect(()=>{J&&yt(!1)},[J]);const hn=()=>{if(!p||vt)return;const L=Vs(he||n),Ee=L?` with ${L}`:"";!He&&!confirm(`Regenerate${Ee}? This uses another credit for a fresh solution.`)||(yt(!0),_e(null),p(he||void 0))},Xt=()=>He&&!N?`<div class='sf-ai-error'>${c}</div>`:j?se((N==null?void 0:N.solution)||l||c||""):(d==null?void 0:d.replace(/(university.?of.?ghana)|(all.?rights.?reserved)/gim,""))||"";return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:fw}),r.jsxs("div",{className:"sf-root",children:[r.jsxs("div",{className:"sf-pdf-pane",children:[r.jsxs("div",{className:"sf-pdf-topbar",children:[r.jsx("button",{className:"sf-icon-btn",onClick:()=>s(!1),title:"Close",children:r.jsx("i",{className:"fa fa-times"})}),r.jsx("img",{src:a,className:"sf-logo",alt:"logo"}),r.jsx(lw,{}),r.jsx("div",{className:"sf-pdf-topbar__actions",children:k||d?r.jsxs(r.Fragment,{children:[us&&r.jsxs("a",{href:oa+i,download:!0,target:"_blank",rel:"noopener noreferrer",className:"sf-pill-btn",children:[r.jsx(q8,{})," Download"]}),r.jsxs(Re,{to:"/payment",target:"_blank",rel:"noopener noreferrer",className:"sf-pill-btn sf-pill-btn--topup",children:[r.jsx(Di,{})," Top up"]}),r.jsxs("div",{className:"sf-pill-btn sf-pill-btn--accent",onClick:()=>y(!0),children:[r.jsx(E0,{})," Solutions"]})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"sf-skeleton",style:{width:90,height:30,borderRadius:20}}),r.jsx("div",{className:"sf-skeleton",style:{width:100,height:30,borderRadius:20}})]})})]}),r.jsx("div",{className:"sf-pdf-body",children:r.jsx(Db,{url:`${oa}${e}&embedded=true`,setIframeLoaded:w})})]}),f&&r.jsxs("div",{className:`sf-drawer ${tt?"sf-drawer--expanded":""}`,children:[r.jsxs("div",{className:"sf-drawer__topbar",children:[r.jsx("button",{className:"sf-icon-btn",onClick:()=>{y(!1),_(null),Ye(!1)},title:"Close solutions",children:r.jsx(bc,{})}),r.jsx("span",{className:"sf-drawer__title",children:N?r.jsx("span",{className:"sf-drawer__title-course",children:N.course||t}):"Solutions"}),r.jsx("button",{className:"sf-icon-btn",onClick:()=>Ye(L=>!L),title:tt?"Collapse":"Expand to full screen",children:tt?r.jsx(S7,{}):r.jsx(z7,{})}),r.jsxs("div",{className:"sf-drawer__credits",children:[r.jsx(pw,{currentVal:n,pendingVal:he,onPick:pn,disabled:J||vt}),r.jsxs(Re,{to:"/Payment",target:"_blank",rel:"noopener noreferrer",className:"sf-credits-pill",children:[r.jsx("i",{className:"fa fa-bolt sf-credits-pill__icon"}),r.jsx("strong",{children:Tr}),r.jsxs("span",{className:"sf-credits-pill__topup",children:[r.jsx(Di,{})," Top up"]})]})]})]}),!J&&r.jsx("div",{className:`sf-banner ${He?"sf-banner--error":"sf-banner--success"}`,children:He?"Extraction failed":"Extraction successful"}),r.jsxs("div",{className:"sf-drawer__body",children:[r.jsx("div",{className:`sf-sidebar ${E?"sf-sidebar--open":""}`,children:r.jsxs("div",{className:"sf-sidebar__inner",children:[r.jsx("div",{className:"sf-sidebar__art",children:r.jsx("img",{src:A1,alt:""})}),r.jsxs("div",{className:"sf-search-wrap",children:[r.jsx("i",{className:"fa fa-search sf-search-wrap__icon"}),r.jsx("input",{type:"search",className:"sf-search",placeholder:Ne==="recent"?"Filter recents…":"Search saved queries…","aria-label":Ne==="recent"?"Filter recent solutions":"Search saved queries",value:A,onChange:ve}),I&&r.jsx("span",{className:"sf-search-wrap__spin sf-search-wrap__spin--anim"})]}),r.jsxs("div",{className:"sf-tabs",children:[r.jsxs("button",{className:`sf-tab ${Ne==="saved"?"sf-tab--active":""}`,onClick:()=>P("saved"),children:[r.jsx(V1,{})," Saved"]}),r.jsx("button",{className:`sf-tab ${Ne==="recent"?"sf-tab--active":""}`,onClick:()=>P("recent"),children:"Recent"})]}),r.jsx("div",{className:"sf-list",children:Ne==="saved"?ee||I?[1,2,3].map(L=>r.jsx("div",{className:"sf-list-item",children:r.jsx(Rc,{height:12,width:"70%"})},L)):ne?r.jsx("div",{className:"sf-list-empty sf-list-empty--error",children:ne}):((ye=z==null?void 0:z.solutions)==null?void 0:ye.length)>0?r.jsxs(r.Fragment,{children:[z.solutions.map((L,Ee)=>r.jsxs("div",{className:`sf-list-item ${(N==null?void 0:N.id)!=null&&N.id===L.id?"sf-list-item--active":""}`,onClick:()=>{_(L),C(!0)},children:[r.jsx("span",{className:"sf-list-item__initial",children:(L.course||"?")[0].toUpperCase()}),r.jsxs("div",{className:"sf-list-item__info",children:[r.jsx("span",{className:"sf-list-item__label",children:L.course}),r.jsx("span",{className:"sf-list-item__meta",children:"Saved query"})]}),r.jsx("i",{className:"fa fa-chevron-right sf-list-item__arrow"})]},L.id??Ee)),G&&r.jsx("button",{type:"button",className:"sf-load-more",onClick:ce,disabled:Se,children:Se?"Loading…":"Load more"})]}):r.jsx("div",{className:"sf-list-empty",children:A.trim()?`No results for "${A.trim()}"`:"No saved queries yet"}):nr.length>0?nr.map(L=>r.jsxs("div",{className:`sf-list-item ${(N==null?void 0:N.course)===L.course&&(N==null?void 0:N.id)==null?"sf-list-item--active sf-list-item--recent":""}`,onClick:()=>{_(L),C(!0)},children:[r.jsx("span",{className:"sf-list-item__initial sf-list-item__initial--recent",children:(L.course||"?")[0].toUpperCase()}),r.jsxs("div",{className:"sf-list-item__info",children:[r.jsx("span",{className:"sf-list-item__label",children:L.course}),r.jsx("span",{className:"sf-list-item__meta",children:"Recent"})]}),r.jsx("i",{className:"fa fa-chevron-right sf-list-item__arrow"})]},"r"+L.course)):r.jsx("div",{className:"sf-list-empty",children:A.trim()?`No recents match "${A.trim()}"`:"No recent activity"})})]})}),r.jsxs("div",{className:"sf-content",children:[r.jsxs("div",{className:"sf-content__toolbar",children:[r.jsx("button",{className:"sf-icon-btn sf-sidebar-toggle",onClick:()=>S(L=>!L),title:"Toggle sidebar",children:r.jsx("i",{className:`fa fa-${E?"indent":"dedent"}`})}),!J&&r.jsxs("div",{className:"sf-view-toggle",children:[r.jsxs("button",{className:`sf-view-toggle__btn ${j&&!Ae?"sf-view-toggle__btn--active":""}`,onClick:()=>{C(!0),_e(null)},children:[r.jsx(B1,{style:{marginRight:5}})," Solved"]}),r.jsxs("button",{className:`sf-view-toggle__btn ${!j&&!Ae?"sf-view-toggle__btn--active":""}`,onClick:()=>{C(!1),_e(null)},children:[r.jsx(Og,{style:{marginRight:5}})," Raw"]})]}),r.jsxs("div",{className:"sf-content__toolbar-right",children:[N&&r.jsx("button",{className:"sf-pill-btn sf-pill-btn--active",onClick:()=>{_(null),C(!0)},title:"Back to current result",children:"Live result"}),!J&&!N&&r.jsx("button",{className:`sf-pill-btn sf-pill-btn--regenerate ${He?"":"sf-pill-btn--regenerate-ok"}`,onClick:hn,disabled:!p||vt,title:he?`Regenerate with ${Vs(he)} (uses a credit)`:He?"Try generating the solution again":"Generate a fresh solution (uses a credit)",children:vt?r.jsx("span",{className:"sf-modal__spinner sf-modal__spinner--small"}):r.jsxs(r.Fragment,{children:[r.jsx(Y9,{})," Regenerate",he&&r.jsxs("span",{className:"sf-pill-btn__model",children:["· ",Vs(he)]})]})}),!J&&!He&&r.jsxs("button",{className:"sf-pill-btn",onClick:()=>b(!0),children:[r.jsx("i",{className:"fa fa-bookmark"})," Save"]})]})]}),!J&&r.jsxs("div",{className:"sf-aistrip",role:"toolbar","aria-label":"AI study tools",children:[r.jsxs("span",{className:"sf-aistrip__label",children:[r.jsx(E0,{size:12})," AI tools"]}),r.jsx("div",{className:"sf-aistrip__scroll",children:Pc.map((L,Ee)=>r.jsxs(mr.Fragment,{children:[Ee>0&&Pc[Ee-1].group!==L.group&&r.jsx("span",{className:"sf-aistrip__sep","aria-hidden":"true"}),r.jsxs("button",{type:"button",className:`sf-ai-chip ${Ae===L.key?"sf-ai-chip--active":""}`,onClick:()=>zr(L.key),"aria-pressed":Ae===L.key,title:L.blurb,children:[r.jsx(L.Icon,{size:14,strokeWidth:1.8})," ",L.label]})]},L.key))})]}),Dt&&!J&&r.jsx(tw,{activeTool:Ae,onSelectTool:Tn,onClose:()=>_e(null),sourceText:Ft,courseName:Qe}),r.jsx("div",{className:"sf-content__body",hidden:!!Ae&&!J,children:J?r.jsx("div",{className:"sf-content__loading",children:[90,75,85,60,80].map((L,Ee)=>r.jsx(Rc,{width:`${L}%`,height:13,style:{marginBottom:10}},Ee))}):r.jsx("div",{className:"sf-prose",dangerouslySetInnerHTML:{__html:Xt()}})})]})]})]})]}),g&&r.jsx(dw,{selectedVal:n,courseName:t,setstoreme:b,extract:l})]})},fw=`
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

  /* ── Quick-nav strip: jump to any other feature without losing this solution ── */
  .sf-quicknav {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 6px;
    border-radius: 999px;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(148,163,255,0.14);
    overflow-x: auto;
    scrollbar-width: none;
    max-width: 320px;
  }
  .sf-quicknav::-webkit-scrollbar { display: none; }
  .sf-quicknav__item {
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    color: rgba(232,232,232,0.65);
    transition: color .15s ease, background .15s ease, box-shadow .15s ease;
  }
  .sf-quicknav__item:hover {
    color: #0d0d0f;
    background: linear-gradient(135deg, #22d3ee, #a78bfa);
    box-shadow: 0 0 12px rgba(34,211,238,0.45);
  }
  @media (max-width: 900px) {
    .sf-quicknav { max-width: 140px; }
  }
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
    transition: width .22s ease, max-width .22s ease;
  }
  /* Extend button toggles this — drawer covers the full window edge to edge,
     overlaying the PDF pane instead of sharing space with it. */
  .sf-drawer--expanded {
    position: fixed;
    inset: 0;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    border-left: none;
    z-index: 1150;
    animation: sf-slide-up .22s ease;
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
  .sf-drawer__credits { margin-left: auto; flex-shrink: 0; display: flex; align-items: center; gap: 8px; min-width: 0; }
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

  .sf-load-more {
    display: block;
    width: 100%;
    margin-top: 6px;
    padding: 9px 10px;
    border-radius: 10px;
    border: 1px solid #2a2a38;
    background: transparent;
    color: #a5b4fc;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: background .12s, border-color .12s;
  }
  .sf-load-more:hover:not(:disabled) { background: #16161e; border-color: #4338ca; }
  .sf-load-more:disabled { color: #444; cursor: default; }

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

  /* Top-up pill next to Download/Solutions in the PDF topbar */
  .sf-pill-btn--topup { background: #1c1a0e; border-color: #92400e; color: #fbbf24; }
  .sf-pill-btn--topup:hover { background: #241d0a; color: #fde68a; }

  /* Regenerate pill in the solutions toolbar (red-tinted on failure) */
  .sf-pill-btn--regenerate { background: #2b0d0d; border-color: #7f1d1d; color: #f87171; }
  .sf-pill-btn--regenerate:hover:not(:disabled) { background: #3a1010; color: #fca5a5; }
  .sf-pill-btn--regenerate:disabled { opacity: .6; cursor: not-allowed; }

  /* Regenerate pill when shown on a successful result — neutral, not alarming */
  .sf-pill-btn--regenerate-ok { background: #1a1a22; border-color: #2a2a38; color: #a0a0b8; }
  .sf-pill-btn--regenerate-ok:hover:not(:disabled) { background: #22222e; color: #e0e0e8; }

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
  .sf-modal__spinner--small { width: 12px; height: 12px; border-width: 2px; }
  @keyframes sf-spin { to { transform: rotate(360deg); } }


  /* ── Model picker (next to the credits pill) ── */
  .sf-model { position: relative; min-width: 0; }
  .sf-model__btn {
    display: flex;
    align-items: center;
    gap: 6px;
    max-width: 170px;
    padding: 4px 10px;
    border-radius: 20px;
    background: #1e1e2a;
    border: 1px solid #2e2e3a;
    color: #a5b4fc;
    font-size: 12px;
    cursor: pointer;
    transition: background .15s, border-color .15s;
  }
  .sf-model__btn:hover:not(:disabled) { background: #25253a; }
  .sf-model__btn:disabled { opacity: .55; cursor: not-allowed; }
  .sf-model__btn--pending { border-color: #4338ca; box-shadow: 0 0 0 1px rgba(99,102,241,.3); }
  .sf-model__name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; min-width: 0; }
  .sf-model__caret { font-size: 9px; color: #666; flex-shrink: 0; }
  .sf-model__pop {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    width: 280px;
    max-width: calc(100vw - 24px);
    background: #111115;
    border: 1px solid #2a2a38;
    border-radius: 12px;
    box-shadow: 0 16px 40px rgba(0,0,0,.6);
    z-index: 30;
    overflow: hidden;
    animation: sf-fadeup .15s ease;
  }
  @keyframes sf-fadeup { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
  .sf-model__search {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    border-bottom: 1px solid #1e1e24;
    color: #555;
    font-size: 12px;
  }
  .sf-model__search input {
    flex: 1;
    min-width: 0;
    background: #1a1a20;
    border: 1px solid #2a2a34;
    border-radius: 8px;
    padding: 6px 10px;
    font-size: 12px;
    color: #d0d0da;
    outline: none;
  }
  .sf-model__search input:focus { border-color: #4f46e5; }
  .sf-model__list { max-height: 260px; overflow-y: auto; padding: 6px; }
  .sf-model__list::-webkit-scrollbar { width: 4px; }
  .sf-model__list::-webkit-scrollbar-thumb { background: #2a2a36; border-radius: 4px; }
  .sf-model__row {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 8px 10px;
    border-radius: 8px;
    border: 1px solid transparent;
    background: transparent;
    color: #c0c0cc;
    font-size: 12px;
    text-align: left;
  }
  .sf-model__row--btn { cursor: pointer; transition: background .12s, border-color .12s; }
  .sf-model__row--btn:hover { background: #16161e; border-color: #2a2a38; }
  .sf-model__row--active { background: #12122a; border-color: #4338ca; color: #a5b4fc; }
  .sf-model__row-icon { color: #555; font-size: 12px; flex-shrink: 0; }
  .sf-model__row--active .sf-model__row-icon { color: #6366f1; }
  .sf-model__row-name { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .sf-model__tag {
    flex-shrink: 0;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: .05em;
    padding: 1px 6px;
    border-radius: 10px;
    background: #1c2a14;
    color: #a3e635;
    border: 1px solid #365314;
  }
  .sf-model__check { color: #6366f1; font-size: 11px; flex-shrink: 0; }
  .sf-model__empty { padding: 16px 10px; text-align: center; font-size: 12px; color: #666; }
  .sf-model__foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    flex-wrap: wrap;
    padding: 9px 12px;
    border-top: 1px solid #1e1e24;
    font-size: 11px;
    color: #666;
    line-height: 1.4;
  }
  .sf-model__foot strong { color: #94a3b8; font-weight: 600; }
  .sf-model__retry {
    background: none;
    border: none;
    padding: 0;
    color: #a5b4fc;
    font-size: 11px;
    cursor: pointer;
    text-decoration: underline;
  }
  .sf-pill-btn__model { opacity: .8; max-width: 110px; overflow: hidden; text-overflow: ellipsis; }

  /* ── AI tools strip (lives under the Solved/Raw toolbar) ── */
  .sf-aistrip {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    border-bottom: 1px solid #1e1e24;
    background: #0d0d10;
    flex-shrink: 0;
    min-width: 0;
  }
  .sf-aistrip__label {
    display: flex;
    align-items: center;
    gap: 5px;
    flex-shrink: 0;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .08em;
    color: #6366f1;
  }
  .sf-aistrip__scroll {
    display: flex;
    align-items: center;
    gap: 6px;
    flex: 1;
    min-width: 0;
    overflow-x: auto;
    scrollbar-width: none;
    padding: 2px 14px 2px 0;
    -webkit-mask-image: linear-gradient(to right, #000 calc(100% - 20px), transparent);
            mask-image: linear-gradient(to right, #000 calc(100% - 20px), transparent);
  }
  .sf-aistrip__scroll::-webkit-scrollbar { display: none; }
  .sf-aistrip__sep { flex: none; width: 1px; height: 16px; background: #2a2a38; margin: 0 2px; }
  .sf-ai-chip {
    flex: none;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 5px 11px;
    border-radius: 20px;
    border: 1px solid #2a2a38;
    background: #1a1a22;
    color: #a0a0b8;
    font-size: 12px;
    cursor: pointer;
    white-space: nowrap;
    transition: background .12s, color .12s, border-color .12s;
  }
  .sf-ai-chip:hover { background: #22222e; color: #e0e0e8; }
  .sf-ai-chip--active {
    background: #1e1b4b;
    border-color: #4338ca;
    color: #a5b4fc;
    box-shadow: 0 0 0 1px rgba(99,102,241,.25);
  }
  .sf-ai-chip:focus-visible,
  .sf-model__btn:focus-visible,
  .sf-model__row--btn:focus-visible { outline: 2px solid #6366f1; outline-offset: 2px; }

  /* ── AI tool panel ──
     The tools are the Learning Hub's own components, which theme themselves
     through --hub-* variables. Re-pointing those variables here (always dark,
     indigo accent) makes them match this page instead of the Hub's theme. */
  .sf-ai {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    --hub-bg: #0d0d0f;
    --hub-surface-1: #111115;
    --hub-surface-2: #1a1a22;
    --hub-border: #2a2a38;
    --hub-text: #e8e8f0;
    --hub-text-muted: #8b8ba0;
    --hub-accent: #4f46e5;
    --hub-accent-2: #7dd3fc;
    --hub-danger: #f87171;
    --hub-success: #4ade80;
    color: var(--hub-text);
  }
  .sf-ai[hidden], .sf-ai__pane[hidden] { display: none !important; }
  .sf-ai__head {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 16px;
    border-bottom: 1px solid #1e1e24;
    flex-shrink: 0;
  }
  .sf-ai__head-text { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
  .sf-ai__title { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: #c8c8d0; }
  .sf-ai__blurb { font-size: 11px; color: #666; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .sf-ai__notice {
    margin: 12px 16px 0;
    padding: 8px 12px;
    border-radius: 8px;
    background: #1c1a0e;
    border: 1px solid #3d3200;
    color: #d4b84a;
    font-size: 12px;
    line-height: 1.5;
    flex-shrink: 0;
  }
  .sf-ai__body { flex: 1; min-height: 0; overflow-y: auto; padding: 16px 20px 28px; }
  .sf-ai__body::-webkit-scrollbar { width: 5px; }
  .sf-ai__body::-webkit-scrollbar-thumb { background: #2a2a36; border-radius: 4px; }
  .sf-ai__loading { display: flex; flex-direction: column; gap: 10px; padding-top: 8px; }
  .sf-ai__fallback {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 28px 16px;
    text-align: center;
    color: #f87171;
    font-size: 13px;
  }
  .sf-ai__fallback p { margin: 0; }
  .sf-ai .hub-page { max-width: 720px; margin: 0 auto; padding: 0; }
  .sf-ai .hub-page > .hub-eyebrow { display: none; }
  .sf-ai .hub-page--chat { min-height: 50vh; }
  .sf-ai .hub-title { font-size: 20px; margin: 0 0 14px; }

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

    /* Model picker: shrink the chip, and let the menu span the screen width
       (anchoring it to the chip would push it off the left edge on phones). */
    .sf-drawer__credits { gap: 6px; }
    .sf-model__btn { max-width: 104px; padding: 4px 8px; }
    .sf-model__pop { position: fixed; top: 56px; left: 12px; right: 12px; width: auto; max-width: none; }

    /* AI tools: drop the label, give the chips the whole row */
    .sf-aistrip__label { display: none; }
    .sf-ai__body { padding: 14px 14px 24px; }
    .sf-ai__head { padding: 8px 12px; }
  }

  @keyframes sf-slide-up {
    from { transform: translateY(100%); opacity: 0; }
    to   { transform: translateY(0);    opacity: 1; }
  }
`,T0="/imgs/pdf.png",mw="/imgs/racoon_job.jpg",gw="/imgs/coin.png",xw=60,z0=e=>e.replace(/\D/g,""),vw=({onSuccess:e,onClose:t})=>{const[n,s]=u.useState(""),[a,i]=u.useState(""),[o,l]=u.useState(!1),[c,d]=u.useState(!1),[p,m]=u.useState(!1),[f,y]=u.useState(0),[h,x]=u.useState({message:"",visible:!1,isSuccess:!1}),k=u.useRef(null),w=u.useRef(null);u.useEffect(()=>()=>{clearInterval(k.current),clearTimeout(w.current)},[]);const g=(S,N=!1)=>{clearTimeout(w.current),x({message:S,visible:!0,isSuccess:N}),w.current=setTimeout(()=>x(_=>({..._,visible:!1})),5e3)},b=(S=xw)=>{y(S),clearInterval(k.current),k.current=setInterval(()=>{y(N=>N<=1?(clearInterval(k.current),0):N-1)},1e3)},j=()=>{const S=Kn("userInfo",{});if(!(S!=null&&S.accessToken))throw new Error("Missing session — please log in again.");return{accessToken:S.accessToken,refreshToken:S.refreshToken}},C=async()=>{if(f>0)return;if(z0(n).length<9){g("Add a valid phone number including country code (e.g. +233…)");return}let S,N;try{({accessToken:S,refreshToken:N}=j())}catch(_){g(_.message);return}d(!0);try{await Pe(`${X}/api/v1/otp/send/sms`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${S}`},body:JSON.stringify({msisdn:n})},N),g(o?"New code sent!":"OTP sent successfully!",!0),l(!0),b()}catch(_){g((_==null?void 0:_.message)||"Failed to send OTP — please try again.")}finally{d(!1)}},E=async()=>{if(!a||z0(a).length!==6){g("Please enter the 6-digit OTP code.");return}let S,N;try{({accessToken:S,refreshToken:N}=j())}catch(_){g(_.message);return}m(!0);try{await Pe(`${X}/api/v1/otp/verify`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${S}`},body:JSON.stringify({path:"msisdn",otp:a})},N);const _={...Kn("userInfo",{}),isVerified:!0};Ms("userInfo",_),g("Phone verified! You're all set.",!0),setTimeout(()=>e==null?void 0:e(),700)}catch(_){g((_==null?void 0:_.message)||"Verification failed — check the code and try again.")}finally{m(!1)}};return r.jsxs("div",{className:"vo-overlay",onClick:S=>{S.target===S.currentTarget&&(t==null||t())},children:[r.jsx("style",{children:yw}),r.jsxs("div",{className:"vo-modal",children:[r.jsx("button",{className:"vo-close",onClick:t,title:"Close",children:r.jsx(Wh,{})}),r.jsxs("div",{className:"vo-header",children:[r.jsx("span",{className:"vo-header-icon",children:r.jsx(kc,{})}),r.jsxs("div",{className:"vo-header-text",children:[r.jsx("h3",{children:"Verify your phone"}),r.jsx("p",{children:"We'll text you a 6-digit code to confirm it's really you."})]})]}),h.visible&&r.jsx("div",{className:`vo-toast ${h.isSuccess?"vo-toast--success":"vo-toast--error"}`,children:h.isSuccess?`🟢 ${h.message}`:`🔴 ${h.message}`}),r.jsxs("div",{className:"vo-field",children:[r.jsx("span",{className:"vo-field-icon",children:r.jsx(kc,{})}),r.jsx("input",{type:"tel",className:"vo-input",placeholder:"PHONE (e.g. +233XXXXXXXXX)",value:n,onChange:S=>s(S.target.value),autoComplete:"tel"})]}),r.jsxs("div",{className:"vo-actions",children:[r.jsxs("button",{className:"vo-btn vo-btn--primary",onClick:C,disabled:c||f>0,children:[r.jsx(B1,{}),c?"Sending…":o?f>0?`Resend in ${f}s`:"Resend code":"Send code"]}),r.jsxs("div",{className:"vo-cooldown",children:[r.jsx(qh,{}),r.jsx("span",{children:f>0?`Resend in ${f}s`:"Ready to send"})]})]}),r.jsxs("div",{className:"vo-field",children:[r.jsx("span",{className:"vo-field-icon",children:r.jsx(Qh,{})}),r.jsx("input",{type:"number",className:"vo-input",placeholder:"OTP CODE (6 DIGITS)",value:a,onChange:S=>i(S.target.value),disabled:!o})]}),!o&&r.jsxs("div",{className:"vo-hint",children:[r.jsx(Es,{})," Enter your phone number and send a code first."]}),r.jsx("button",{className:"vo-btn vo-btn--confirm",onClick:E,disabled:!o||p,children:p?"Verifying…":"Verify & continue"})]})]})},yw=`
  .vo-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.7);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    padding: 16px;
    box-sizing: border-box;
  }
  .vo-modal {
    width: 420px;
    max-width: 100%;
    background: #111115;
    border: 1px solid #1e1e28;
    border-radius: 16px;
    padding: 22px 22px 24px;
    position: relative;
    box-shadow: 0 24px 60px rgba(0,0,0,.6);
    animation: vo-fadein .2s ease;
    box-sizing: border-box;
  }
  .vo-close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(255,255,255,.06);
    border: none;
    color: #aaa;
    font-size: 16px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .vo-close:hover { color: #fff; background: rgba(255,255,255,.12); }

  .vo-header {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    margin-bottom: 16px;
  }
  .vo-header-icon {
    flex-shrink: 0;
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: linear-gradient(135deg, #3730a3, #6366f1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
  }
  .vo-header-text h3 { margin: 0 0 4px; font-size: 15px; font-weight: 700; color: #e8e8f0; }
  .vo-header-text p  { margin: 0; font-size: 12px; color: #9797a8; line-height: 1.5; }

  .vo-toast {
    font-size: 12px;
    padding: 8px 12px;
    border-radius: 8px;
    margin-bottom: 14px;
  }
  .vo-toast--error   { background: #2b0d0d; border: 1px solid #7f1d1d; color: #f87171; }
  .vo-toast--success { background: #0d2b1e; border: 1px solid #14532d; color: #4ade80; }

  .vo-field {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #1a1a22;
    border: 1px solid #2a2a38;
    border-radius: 10px;
    padding: 9px 12px;
    margin-bottom: 10px;
    transition: border-color .15s;
  }
  .vo-field:focus-within { border-color: #6366f1; }
  .vo-field-icon { color: #666; font-size: 13px; flex-shrink: 0; }
  .vo-input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: #e0e0e8;
    font-size: 13px;
    min-width: 0;
  }
  .vo-input::placeholder { color: #55555f; }
  .vo-input:disabled { opacity: .45; cursor: not-allowed; }

  .vo-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 14px;
  }
  .vo-cooldown {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    color: #666;
    white-space: nowrap;
  }

  .vo-hint {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    color: #d4b84a;
    margin: -2px 0 14px;
  }

  .vo-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    border-radius: 10px;
    border: none;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background .15s, opacity .15s;
    padding: 10px 14px;
  }
  .vo-btn:disabled { opacity: .55; cursor: not-allowed; }

  .vo-btn--primary {
    background: #1e1b4b;
    border: 1px solid #4338ca;
    color: #a5b4fc;
    white-space: nowrap;
  }
  .vo-btn--primary:hover:not(:disabled) { background: #25224f; }

  .vo-btn--confirm {
    width: 100%;
    background: #4f46e5;
    color: #fff;
  }
  .vo-btn--confirm:hover:not(:disabled) { background: #4338ca; }

  @keyframes vo-fadein { from { opacity:0; transform: translateY(8px); } to { opacity:1; transform: translateY(0); } }
`,Oc=[{min:0,name:"Rookie",emoji:"🥉"},{min:5,name:"Consistent",emoji:"🥈"},{min:15,name:"Dedicated",emoji:"🥇"},{min:30,name:"Relentless",emoji:"🏆"},{min:60,name:"Legend",emoji:"👑"}];function $c(e=0){let t=Oc[0];for(const n of Oc)e>=n.min&&(t=n);return t}function bw(e=0){return Oc.find(t=>t.min>e)??null}function ww({highestStreak:e=0,cardsReviewed:t=0,mockTestsTaken:n=0}){return e*10+t*2+n*25}function kw(e){return Math.max(1,Math.floor(Math.sqrt(e/200))+1)}function P0(e){return e*e*200}const jw=()=>{var ne,Ce;const[e,t]=u.useState(null),[n,s]=u.useState(0),[a,i]=u.useState(null),[o,l]=u.useState(null),[c,d]=u.useState(!1),[p,m]=u.useState(!1),[f,y]=u.useState(!1),[h,x]=u.useState({firstName:"",lastName:"",email:"",msisdn:""}),[k,w]=u.useState(!1),[g,b]=u.useState(null),[j,C]=u.useState(!1),E=X+"/api/v1/user/streak",S=X+"/api/v1/user/wallet",N=X+"/api/v1/user/profile";u.useEffect(()=>{const A=Kn("userInfo",{});l(A),t((A==null?void 0:A.streakScore)??0),s((A==null?void 0:A.highestStreakScore)??0);const q=A==null?void 0:A.accessToken,I=A==null?void 0:A.refreshToken;!q||!I||(Pe(E,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${q}`}}).then(O=>{const D=(O==null?void 0:O.streakScore)??0,Z=(O==null?void 0:O.highestStreakScore)??0;t(D),s(Z);const G={...A,streakScore:D,highestStreakScore:Z,lastActiveDate:(O==null?void 0:O.lastActiveDate)??A.lastActiveDate};Ms("userInfo",G),l(G)}).catch(O=>{console.error("Streak update failed:",O)}),Pe(S,{headers:{Authorization:`Bearer ${q}`}}).then(O=>i((O==null?void 0:O.balance)??null)).catch(O=>{console.error("Error fetching wallet:",O),i(null)}))},[]);const _=[(ne=o==null?void 0:o.firstName)==null?void 0:ne[0],(Ce=o==null?void 0:o.lastName)==null?void 0:Ce[0]].filter(Boolean).join("").toUpperCase(),z=()=>{x({firstName:(o==null?void 0:o.firstName)??"",lastName:(o==null?void 0:o.lastName)??"",email:(o==null?void 0:o.email)??"",msisdn:(o==null?void 0:o.msisdn)??""}),b(null),C(!1),y(!0)},B=()=>{y(!1),b(null)},ee=A=>q=>{x(I=>({...I,[A]:q.target.value}))},je=async()=>{b(null),C(!1);const A=o||{},q={};if(h.firstName!==(A.firstName??"")&&(q.firstName=h.firstName),h.lastName!==(A.lastName??"")&&(q.lastName=h.lastName),h.email!==(A.email??"")&&(q.email=h.email),h.msisdn!==(A.msisdn??"")&&(q.msisdn=h.msisdn),Object.keys(q).length===0){y(!1);return}if(q.email&&!/^\S+@\S+\.\S+$/.test(q.email)){b("Please enter a valid email address.");return}if(q.msisdn&&!/^\d{9,15}$/.test(q.msisdn.replace(/^\+/,""))){b("Please enter a valid phone number.");return}w(!0);try{const I=await Pe(N,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(q)}),O={...A,...q,...I&&typeof I=="object"?I:{}};Ms("userInfo",O),l(O),y(!1),C(!0)}catch(I){console.error("Profile update failed:",I),b((I==null?void 0:I.message)||"Failed to update profile. Please try again.")}finally{w(!1)}};return r.jsxs("div",{className:"db-card",children:[p&&r.jsx(vw,{onSuccess:()=>{m(!1);const A={...Kn("userInfo",{}),isVerified:!0};Ms("userInfo",A),l(A)},onClose:()=>m(!1)}),r.jsx("div",{className:"db-dotgrid","aria-hidden":"true"}),r.jsx("div",{className:"db-glow","aria-hidden":"true"}),r.jsxs("button",{type:"button",className:"db-trigger",onClick:()=>d(A=>!A),children:[r.jsx("span",{className:"db-avatar",children:_||r.jsx("i",{className:"fa fa-user"})}),r.jsx("span",{className:"db-trigger-text",children:c?"General":"Wallet & streak"}),r.jsx("i",{className:`fa fa-chevron-${c?"left":"right"} db-trigger-chevron`,"aria-hidden":"true"})]}),c?r.jsxs("div",{className:"db-profile db-fade-in-up",children:[r.jsxs("div",{className:"db-panel",children:[r.jsxs("div",{className:"db-panel-title",children:[r.jsx("span",{className:"db-icon-chip",children:r.jsx("i",{className:"fa fa-plus"})}),"Extras"]}),r.jsxs("div",{className:"db-field",children:[r.jsx("span",{className:"db-field-icon",children:r.jsx("i",{className:"fa fa-check"})}),r.jsxs("div",{className:"db-field-body",children:[r.jsx("span",{className:"db-field-label",children:"User status"}),r.jsxs("div",{className:"db-status-row",children:[o!=null&&o.isVerified?r.jsx("span",{className:"db-status db-status-success",children:"OTP Verified"}):r.jsx("span",{className:"db-status db-status-danger",children:"Not verified"}),!(o!=null&&o.isVerified)&&r.jsx("button",{type:"button",className:"db-verify-btn",onClick:()=>m(!0),children:"Verify"})]})]})]}),r.jsxs("div",{className:"db-field",children:[r.jsx("span",{className:"db-field-icon",children:r.jsx("i",{className:"fa fa-calendar-check"})}),r.jsxs("div",{className:"db-field-body",children:[r.jsx("span",{className:"db-field-label",children:"Last active"}),r.jsx("span",{className:"db-field-value",children:o!=null&&o.lastActiveDate?new Date(o.lastActiveDate).toLocaleDateString():"N/A"})]})]}),r.jsxs("div",{className:"db-field",children:[r.jsx("span",{className:"db-field-icon",children:r.jsx("i",{className:"fa fa-calendar"})}),r.jsxs("div",{className:"db-field-body",children:[r.jsx("span",{className:"db-field-label",children:"Date created"}),r.jsx("span",{className:"db-field-value",children:o!=null&&o.dateCreated?new Date(o.dateCreated).toLocaleDateString():"N/A"})]})]})]}),r.jsxs("div",{className:"db-panel",children:[r.jsxs("div",{className:"db-panel-title",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsxs("span",{style:{display:"flex",alignItems:"center"},children:[r.jsx("span",{className:"db-icon-chip",children:r.jsx("i",{className:"fa fa-user"})}),"Profile details"]}),f?r.jsxs("span",{style:{display:"flex",gap:"8px"},children:[r.jsx("button",{type:"button",className:"db-verify-btn",onClick:je,disabled:k,children:k?"Saving…":"Save"}),r.jsx("button",{type:"button",className:"db-verify-btn",style:{background:"transparent",opacity:.8},onClick:B,disabled:k,children:"Cancel"})]}):r.jsx("button",{type:"button",className:"db-verify-btn",onClick:z,children:"Edit"})]}),g&&r.jsx("div",{className:"db-status db-status-danger",style:{marginBottom:"10px",display:"block"},children:g}),j&&!f&&r.jsx("div",{className:"db-status db-status-success",style:{marginBottom:"10px",display:"block"},children:"Profile updated"}),r.jsxs("div",{className:"db-grid-2",children:[r.jsxs("div",{className:"db-field",children:[r.jsx("span",{className:"db-field-icon",children:r.jsx("i",{className:"fa fa-person"})}),r.jsxs("div",{className:"db-field-body",children:[r.jsx("span",{className:"db-field-label",children:"First name"}),f?r.jsx("input",{type:"text",className:"db-field-input",style:{width:"100%"},value:h.firstName,onChange:ee("firstName"),disabled:k}):r.jsx("span",{className:"db-field-value",children:(o==null?void 0:o.firstName)??""})]})]}),r.jsxs("div",{className:"db-field",children:[r.jsx("span",{className:"db-field-icon",children:r.jsx("i",{className:"fa fa-person"})}),r.jsxs("div",{className:"db-field-body",children:[r.jsx("span",{className:"db-field-label",children:"Last name"}),f?r.jsx("input",{type:"text",className:"db-field-input",style:{width:"100%"},value:h.lastName,onChange:ee("lastName"),disabled:k}):r.jsx("span",{className:"db-field-value",children:(o==null?void 0:o.lastName)??""})]})]})]}),r.jsxs("div",{className:"db-field db-field-wide",children:[r.jsx("span",{className:"db-field-icon",children:r.jsx("i",{className:"fa fa-envelope"})}),r.jsxs("div",{className:"db-field-body",children:[r.jsx("span",{className:"db-field-label",children:"Email"}),f?r.jsx("div",{type:"email",className:"db-field-input",style:{width:"100%"},value:h.email,disabled:k,children:h.email}):r.jsx("span",{className:"db-field-value",children:(o==null?void 0:o.email)??""})]})]}),r.jsxs("div",{className:"db-panel-title db-panel-title-sub",children:[r.jsx("span",{className:"db-icon-chip",children:r.jsx("i",{className:"fa fa-zap"})}),"User credits"]}),r.jsxs("div",{className:"db-field db-field-wide",children:[r.jsx("span",{className:"db-field-icon",children:r.jsx("i",{className:"fa fa-zap"})}),r.jsxs("div",{className:"db-field-body",children:[r.jsx("span",{className:"db-field-label",children:"Remaining credits"}),r.jsx("span",{className:"db-field-value",children:(o==null?void 0:o.credits)??0})]})]}),r.jsxs("div",{className:"db-panel-title db-panel-title-sub",children:[r.jsx("span",{className:"db-icon-chip",children:r.jsx("i",{className:"fa fa-phone"})}),"Phone"]}),r.jsxs("div",{className:"db-field db-field-wide",children:[r.jsx("span",{className:"db-field-icon",children:r.jsx("i",{className:"fa fa-phone"})}),r.jsxs("div",{className:"db-field-body",children:[r.jsx("span",{className:"db-field-label",children:"Contact number"}),f?r.jsx("input",{type:"tel",className:"db-field-input",style:{width:"100%"},value:h.msisdn,onChange:ee("msisdn"),disabled:k,placeholder:"e.g. 0501865437"}):r.jsx("span",{className:"db-field-value",children:(o==null?void 0:o.msisdn)??""})]})]})]})]},"profile"):r.jsxs("div",{className:"db-overview db-fade-in-up",children:[r.jsxs("div",{className:"db-level-row",children:[r.jsxs("div",{className:"db-level-col",children:[r.jsx("span",{className:"db-eyebrow",children:"Level"}),r.jsxs("span",{className:"db-level-name",children:[$c(n).name," level"]})]}),r.jsxs("div",{className:"db-level-col db-level-col-end",children:[r.jsx("span",{className:"db-eyebrow",children:"Badge"}),r.jsx("span",{className:"db-badge",children:$c(n).emoji})]})]}),r.jsxs("div",{className:"db-streak-card",children:[r.jsx("div",{className:"db-streak-title",children:"⚡ Streak"}),r.jsxs("div",{className:"db-streak-stats",children:[r.jsxs("div",{className:"db-stat",children:[r.jsx("span",{className:"db-stat-label",children:"Streak score"}),r.jsx("span",{className:"db-stat-value",children:e??0})]}),r.jsx("div",{className:"db-stat-divider"}),r.jsxs("div",{className:"db-stat",children:[r.jsx("span",{className:"db-stat-label",children:"Highest streak"}),r.jsx("span",{className:"db-stat-value",children:n??0})]})]}),r.jsx("div",{className:"db-stars","aria-hidden":"true",children:"⭐".repeat(10)})]}),r.jsxs("div",{className:"db-wallet-card",children:[r.jsx("img",{src:gw,className:"db-wallet-backdrop",alt:"","aria-hidden":"true"}),r.jsxs("div",{className:"db-wallet-label",children:[r.jsx("span",{className:"db-icon-chip db-icon-chip-light",children:"💰"}),"Earned"]}),r.jsxs("div",{className:"db-wallet-value",children:["GHS ",a??"—"]})]})]},"overview")]})},Cw="/assets/coinstacked-c9cb3f73.png",Sw="/assets/racoon_earn-40e17a16.jpg",Nw=()=>(u.useEffect(()=>{location.href="#earn"},[]),r.jsx("div",{className:"userlevel",children:r.jsxs("div",{className:"sectionearn",children:[r.jsxs("div",{className:"levelitem2 earnbox",id:"earn",style:{height:350},children:[r.jsx("img",{src:Cw,className:"coinstack",alt:"",srcSet:""}),r.jsx("div",{className:"streak",children:"Earn"}),r.jsx("a",{href:"#begin",children:r.jsxs("div",{className:"seemore",children:[r.jsx("div",{className:"begin",children:"Begin"}),r.jsx(Hh,{})]})}),r.jsx("img",{src:Sw,className:"racoon"}),r.jsxs("div",{className:"wish",children:[r.jsx("span",{style:{fontWeight:600},children:" What is this about?"})," ( ",r.jsx("div",{className:"fnav",children:"💸"}),"GHS 1,500+ Salary )"]}),r.jsx("div",{className:"tovid",children:"Watch this short video for a precise walk through?"}),r.jsx("div",{className:"watch",children:r.jsxs("div",{className:"sp",children:[r.jsx("div",{className:"fnav",children:r.jsx("i",{className:"fa fa-play"})})," Watch me 👀",r.jsx("div",{className:"prem2"})]})})]}),r.jsxs("div",{className:"levelitem2 earnbox",id:"begin",children:[r.jsx("a",{href:"#earn",children:r.jsxs("div",{className:"seeless",children:[r.jsx("div",{className:"begin",children:"Return"}),r.jsx(kr,{})]})}),"Earn"]})]})})),_w="/assets/leader-e36dfd31.png",Ew="/assets/racoon_leaderboard-68d566af.jpg",Tw="/assets/racoon_goldmedal-e058bdc6.jpg",d4="/assets/bob-b701607b.jpg",u4="/assets/jessy-e52b4d9f.jpg";const I0=[d4,u4,G1,W1],zw=()=>{const[e,t]=u.useState("streak"),[n,s]=u.useState([]),[a,i]=u.useState([]),[o,l]=u.useState(null),[c,d]=u.useState(!1),[p,m]=u.useState(!1),[f,y]=u.useState(""),h=_=>{y(_),m(!0),setTimeout(()=>m(!1),6e3)};u.useEffect(()=>{if(p){const _=document.querySelector(".successmessage");_&&(_.textContent="🔴"+f)}},[f,p]);let x;try{x=JSON.parse(localStorage.getItem("userInfo"))}catch(_){console.error("Error parsing userInfo:",_),x=null}const k=x==null?void 0:x.accessToken,w=x==null?void 0:x.refreshToken,g=X+"/api/v1/leaderboard",b={headers:{Authorization:`Bearer ${k}`}};u.useEffect(()=>{k&&w?Pe(g,b).then(_=>{const z=(_==null?void 0:_.data)??_;s(Array.isArray(z==null?void 0:z.topStreaks)?z.topStreaks:[]),i(Array.isArray(z==null?void 0:z.topAffiliates)?z.topAffiliates:[]),l((z==null?void 0:z.yourRank)??null),d(!0)}).catch(_=>{console.error("Fetch error:",_),h(`${_}`.toLowerCase().replace(/typeerror/gim,"sorry")),d(!0)}):d(!0)},[g,k,w]);const j=e==="streak"?n:a,C=e==="streak"?o==null?void 0:o.streak:o==null?void 0:o.affiliate,E=(C==null?void 0:C.rank)??0,S=_=>_?_>3?"th":_===3?"rd":_===2?"nd":"st":"",N=_=>_.profilePic||I0[Math.abs((_.userId??"").length)%I0.length];return r.jsxs("div",{className:"lb-card",children:[r.jsx("div",{className:"lb-dotgrid","aria-hidden":"true"}),r.jsx("div",{className:"lb-glow","aria-hidden":"true"}),r.jsxs("div",{className:"lb-banner",children:[r.jsx("img",{src:Ew,className:"lb-banner-img",alt:""}),r.jsx("div",{className:"lb-banner-overlay","aria-hidden":"true"}),r.jsx("img",{src:_w,className:"lb-badge",alt:""}),r.jsx("div",{className:"lb-title",children:"🏁 Leaderboard"})]}),p&&r.jsx("div",{className:"successmessage",style:{position:"absolute",display:"flex",margin:"auto"}}),r.jsxs("div",{className:"lb-tabs",children:[r.jsxs("div",{className:`lb-tab${e==="streak"?" lb-tab-active":""}`,onClick:()=>t("streak"),children:[r.jsx(Fs,{})," Streaks"]}),r.jsxs("div",{className:`lb-tab${e==="affiliate"?" lb-tab-active":""}`,onClick:()=>t("affiliate"),children:[r.jsx(Bu,{})," Affiliates"]})]}),r.jsxs("div",{className:"lb-position",children:["You came"," ",r.jsxs("span",{className:"lb-position-value",children:[E||"—",r.jsx("sup",{children:S(E)})]})]}),r.jsxs("div",{className:"lb-list",children:[c&&j.length>0?j.map((_,z)=>{const B=_.rank??z+1,ee=B<=3,je=[_.firstName,_.lastName].filter(Boolean).join(" ")||"User",ne=e==="streak"?_.highestStreakScore??_.streakScore??0:`GHS ${_.totalEarningsGhs??"0.00"}`;return r.jsxs("div",{className:`lb-row${ee?` lb-row-top lb-row-top-${B}`:""}`,children:[r.jsx("div",{className:"lb-row-rank",children:B===1?r.jsx("img",{src:Tw,className:"lb-row-medal",alt:"1st place"}):r.jsx("span",{className:"lb-row-rank-number",children:B})}),r.jsx("div",{className:"lb-row-avatar",style:{backgroundImage:`url(${N(_)})`}}),r.jsxs("div",{className:"lb-row-body",children:[r.jsx("div",{className:"lb-row-name",children:je}),e==="streak"&&r.jsxs("div",{className:"lb-row-date",children:["Current streak: ",_.streakScore??0]})]}),r.jsxs("div",{className:"lb-row-end",children:[r.jsx("span",{className:"lb-icon-chip",children:e==="streak"?r.jsx(Fs,{}):r.jsx(Bu,{})}),r.jsx("span",{className:"lb-rank-chip",children:ne})]})]},_.userId??z)}):!c&&Array(5).fill("").map((_,z)=>r.jsxs("div",{className:"lb-row lb-row-loading",children:[r.jsx("div",{className:"lb-row-rank",children:r.jsx("span",{className:"lb-row-rank-number",children:"–"})}),r.jsx("div",{className:"lb-row-avatar"}),r.jsxs("div",{className:"lb-row-body",children:[r.jsx("div",{className:"lb-row-name",children:"Loading..."}),r.jsx("div",{className:"lb-row-date",children:" "})]}),r.jsxs("div",{className:"lb-row-end",children:[r.jsx("span",{className:"lb-icon-chip",children:r.jsx(Fs,{})}),r.jsx("span",{className:"lb-rank-chip",children:"–"})]})]},z)),c&&j.length===0&&r.jsxs("div",{className:"lb-empty",children:["No ",e==="streak"?"streaks":"affiliates"," yet. Be the first!"]})]})]})},Pw="/assets/reff-0ef4e2a9.png",Iw=[d4,u4,G1,W1],Rw=()=>{const[e,t]=u.useState(!0),[n,s]=u.useState(""),[a,i]=u.useState([]);u.useState(0);const[o,l]=u.useState(!1),[c,d]=u.useState(!1),[p,m]=u.useState("");let f;try{f=JSON.parse(localStorage.getItem("userInfo"))}catch(C){console.error("Error parsing userInfo:",C),f=null}let y=f==null?void 0:f.userReferalCode;u.useEffect(()=>{y&&s(`${y}`)},[]);const h=()=>{if(!navigator.clipboard){x("Clipboard API not supported");return}navigator.clipboard.writeText(n).then(()=>{m("copied successfully !!!"),setTimeout(()=>{m("")},3e3),t(!1),setTimeout(()=>{t(!0)},1e3)}).catch(C=>{console.error("Copy failed:",C),x("Failed to copy to clipboard")})},x=C=>{m(C),d(!0),setTimeout(()=>{d(!1)},6e3)};u.useEffect(()=>{if(c){const C=document.querySelector(".successmessage");C&&(/success/gim.test(p)?C.textContent="🟢"+p+"🥳🥳🥳":C.textContent="🔴"+p)}},[p,c]);let k;try{k=JSON.parse(localStorage.getItem("userInfo"))}catch(C){console.error("Error parsing userInfo:",C),k=null}let w=X+"/api/v1/user/referals",g=k==null?void 0:k.accessToken,b=k==null?void 0:k.refreshToken;const j={headers:{Authorization:`Bearer ${g}`}};return u.useEffect(()=>{g&&b?Pe(w,j).then(C=>{Array.isArray(C)?i(C):(C&&typeof C=="object"&&Object.keys(C).length>0&&console.warn("Unexpected referrals format:",C),i([])),l(!0)}).catch(C=>{console.error("Fetch error:",C),x(`${C}`.toLowerCase().replace(/typeerror/gim,"Sorry")),l(!0)}):l(!0)},[w,g,b]),r.jsxs("div",{className:"rlevel",children:[r.jsx("img",{src:Pw,className:"refbadge",alt:""}),c&&r.jsx("div",{className:"successmessage",style:{position:"absolute",display:"flex",margin:"auto"}}),r.jsxs("div",{className:"levelitem2 reffirstboxtop",children:[r.jsxs("div",{className:"refpage",style:{fontSize:40,width:200},children:[r.jsx("div",{className:"iconb",children:r.jsx("i",{style:{fontSize:20},className:"fa fa-users fa-dark"})}),"Referals"]}),r.jsxs("div",{className:"refer",children:[r.jsxs("div",{className:"hint",children:[r.jsx("div",{className:"fnav",children:r.jsx("i",{className:"fa fa-code fa-dark"})}),"Referal Code"]}),r.jsx("input",{value:n.length?n:"***",type:"text",readOnly:!0,className:"ref"}),r.jsxs("div",{className:"copy",onClick:h,children:[r.jsx("div",{className:"fnav",children:r.jsx("i",{className:"fa fa-copy fa-dark"})}),e?" Copy":"Copied !",r.jsx("div",{className:"prem4"})]})]}),r.jsx("div",{className:"streak"})]}),r.jsxs("div",{className:"yourrefs",children:[r.jsx("div",{className:"fnav",children:r.jsx("i",{className:"fa fa-users fa-dark"})}),"You have (",((a==null?void 0:a.length)??0)>0?a.length:0,") referals"]}),r.jsxs("div",{className:"reflist",children:[((a==null?void 0:a.length)??0)>0?a.map((C,E)=>{var S,N,_,z;return r.jsxs("div",{className:"refblock",children:[r.jsx("div",{className:"refblockleft",style:{backgroundImage:(S=C.referedUserDetails)!=null&&S.highestStreakScore?`url(${Iw[`${C.referedUserDetails.highestStreakScore}`.length<4?`${C.referedUserDetails.highestStreakScore}`.length-1:3]})`:""}}),r.jsxs("div",{className:"refblockcenter",children:[r.jsx("div",{className:"refblockcenterdivone",children:((N=C.referedUserDetails)==null?void 0:N.firstName)??"User"}),r.jsxs("div",{className:"refblockcenterdiv",children:[" ",(_=C.referedUserDetails)!=null&&_.dateCreated?new Date(C.referedUserDetails.dateCreated).toISOString().slice(0,10):"N/A"]})]}),r.jsxs("div",{className:"refblockend",children:[r.jsx(Fs,{className:"micon"}),((z=C.referedUserDetails)==null?void 0:z.highestStreakScore)??0]})]},""+E)}):!o&&Array(3).fill("").map((C,E)=>r.jsxs("div",{className:"refblock refloader",children:[r.jsx("div",{style:{visibility:"hidden"},className:"refblockleft "}),r.jsxs("div",{style:{visibility:"hidden"},className:"refblockcenter",children:[r.jsx("div",{style:{visibility:"hidden"},className:"refblockcenterdivone",children:"Benjamin"}),r.jsxs("div",{style:{visibility:"hidden"},className:"refblockcenterdiv",children:[" ",new Date().toISOString().slice(0,10)]})]}),r.jsxs("div",{style:{visibility:"hidden"},className:"refblockend",children:[r.jsx(Fs,{className:"micon"}),"Loading..."]})]},C+""+E)),r.jsx("div",{className:"streak",style:{margin:10}})]})]})};const p4=e=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[r.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),r.jsx("polyline",{points:"14 2 14 8 20 8"}),r.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),r.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"})]}),Ow=e=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[r.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),r.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),h4=e=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[r.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),r.jsx("line",{x1:"1",y1:"10",x2:"23",y2:"10"})]}),$w=e=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[r.jsx("polyline",{points:"23 4 23 10 17 10"}),r.jsx("polyline",{points:"1 20 1 14 7 14"}),r.jsx("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]}),f4=e=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[r.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),r.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),m4=e=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[r.jsx("circle",{cx:"12",cy:"8",r:"7"}),r.jsx("polyline",{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"})]}),Lw=e=>r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:r.jsx("polyline",{points:"6 9 12 15 18 9"})}),R0=e=>r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round",strokeLinejoin:"round",...e,children:r.jsx("polyline",{points:"20 6 9 17 4 12"})}),Aw=e=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[r.jsx("path",{d:"M9 18h6"}),r.jsx("path",{d:"M10 22h4"}),r.jsx("path",{d:"M12 2a7 7 0 0 0-4 12.9V17h8v-2.1A7 7 0 0 0 12 2z"})]}),g4=e=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),r.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),x4=e=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),Mw=[{icon:p4,tone:"cyan",title:"Registration & PIN",blurb:"What you need before you enrol, and how the PIN code + payment step works."},{icon:Ow,tone:"blue",title:"Posting & Deployment",blurb:"How postings are assigned, checking your placement, and reporting to post."},{icon:h4,tone:"pink",title:"Allowance & Pay",blurb:"Setting up your payment account and what to do if a monthly allowance is late."},{icon:$w,tone:"cyan",title:"Change of Posting",blurb:"Valid reasons for a transfer request and how the appeal process generally works."},{icon:f4,tone:"blue",title:"Portal & Login Help",blurb:"Common login issues, resetting credentials, and keeping your account secure."},{icon:m4,tone:"pink",title:"Finishing Service",blurb:"Monthly evaluations, your logbook, and what happens at the end of the service year."}],js=[{id:"c1",text:"Confirm you’re eligible (graduated from an accredited tertiary institution)"},{id:"c2",text:"Gather your ID, passport picture, and academic documents ahead of time"},{id:"c3",text:"Get your PIN code and complete payment through an approved channel"},{id:"c4",text:"Fill out the online registration/enrolment form carefully"},{id:"c5",text:"Check your posting once it’s released and note the reporting date"},{id:"c6",text:"Print your appointment letter and get it endorsed at your post"},{id:"c7",text:"Open or confirm the bank account your allowance will be paid into"},{id:"c8",text:"Save your login details somewhere safe — you’ll need them all year"}],Dw=[{q:"What documents do I actually need to get started?",a:"Typically a valid ID (national ID, voter’s card, passport, or driver’s license), your academic index number, and a recent passport-sized photo. Requirements can vary by year, so always check the current list on your official registration portal before you begin."},{q:"I can’t remember my PIN or login — what do I do?",a:'Look for a "Forgot Password" or "Retrieve PIN" option on the login page first. If that doesn’t work, your institution’s NSS coordinator or the scheme’s support desk can usually help you recover access — avoid third-party sites that ask for payment to "recover" an account.'},{q:"Can I request a change of posting?",a:"Most schemes allow a transfer request for a genuine reason (health, security, family circumstances), submitted through official channels within a set window after posting. Start the request as early as possible, since these windows tend to close quickly."},{q:"When should I expect my first allowance?",a:"This varies a lot by cohort and year, so don’t rely on rumors. Confirm your payment account is set up correctly first — that’s the most common reason for a delayed first payment — and follow up with your regional office if it’s significantly late."},{q:"What if the registration portal is down or acting up?",a:"Portal downtime happens, especially close to deadlines. Try again at an off-peak time, clear your browser cache, and check official social media/news channels for outage updates rather than assuming your application failed."}],Fw=[{icon:x4,text:"Start the registration process as early as you can — last-minute rushes are where most mistakes happen."},{icon:f4,text:"Write down your PIN, portal login, and posting details somewhere safe. You’ll need them repeatedly."},{icon:p4,text:"Keep physical and digital copies of your appointment letter — you’ll need it endorsed and referenced often."},{icon:h4,text:"Sort out your allowance payment account before reporting to post, not after."},{icon:m4,text:"Take monthly evaluations and logbook entries seriously — they matter for your service certificate."},{icon:g4,text:"When in doubt, ask your school’s NSS coordinator or regional office directly instead of relying on forum rumors."}],Bw=()=>{const[e,t]=u.useState(()=>new Set),[n,s]=u.useState(0),a=l=>{t(c=>{const d=new Set(c);return d.has(l)?d.delete(l):d.add(l),d})},i=e.size,o=Math.round(i/js.length*100);return r.jsxs("div",{className:"nss-page",children:[r.jsxs("div",{className:"hero-card-wrap",children:[r.jsxs("div",{className:"hero-card nss-hero",children:[r.jsxs("div",{className:"hero-left",children:[r.jsxs("span",{className:"awaiting-tag",children:[r.jsx(x4,{width:"13",height:"13"}),"For Tertiary Students"]}),r.jsx("div",{className:"content-title-wrap",children:r.jsx("div",{className:"content-title filled",children:"Your national service guide"})})]}),r.jsx("div",{className:"hero-right nss-progress-panel",children:r.jsxs("div",{className:"nss-progress-card",children:[r.jsx("div",{className:"nss-progress-label",children:"Getting-started checklist"}),r.jsxs("div",{className:"nss-progress-count",children:[i,r.jsxs("span",{children:["/",js.length]})]}),r.jsx("div",{className:"nss-progress-track",children:r.jsx("div",{className:"nss-progress-fill",style:{width:`${o}%`}})}),r.jsxs("div",{className:"nss-progress-hint",children:[i===0&&"Tick off steps as you go",i>0&&i<js.length&&"Nice progress — keep going",i===js.length&&"All set for a smooth start 🎉"]})]})})]}),r.jsxs("div",{className:"meta-bar",children:[r.jsx("div",{className:"meta-cell",children:"Registration"}),r.jsx("div",{className:"meta-cell",children:"Posting & Deployment"}),r.jsx("div",{className:"meta-cell",children:"Allowance"}),r.jsx("div",{className:"meta-cell",children:"Support"})]})]}),r.jsxs("div",{className:"nss-section",children:[r.jsx("div",{className:"nss-section-header",children:"Explore by topic"}),r.jsx("div",{className:"nss-topics-grid",children:Mw.map((l,c)=>r.jsxs("div",{className:"nss-topic-card",children:[r.jsx("div",{className:`nss-topic-icon tone-${l.tone}`,children:r.jsx(l.icon,{width:"18",height:"18"})}),r.jsx("div",{className:"nss-topic-title",children:l.title}),r.jsx("div",{className:"nss-topic-blurb",children:l.blurb})]},c))})]}),r.jsx("div",{className:"nss-section",children:r.jsxs("div",{className:"ref-list-section",children:[r.jsxs("div",{className:"ref-list-header",children:[r.jsx(R0,{width:"15",height:"15"}),"Beginner checklist"]}),r.jsx("div",{className:"nss-checklist",children:js.map(l=>{const c=e.has(l.id);return r.jsxs("button",{className:`checklist-row${c?" is-checked":""}`,onClick:()=>a(l.id),type:"button",children:[r.jsx("span",{className:"checklist-box",children:c&&r.jsx(R0,{width:"12",height:"12"})}),r.jsx("span",{className:"checklist-text",children:l.text})]},l.id)})})]})}),r.jsxs("div",{className:"nss-section",children:[r.jsxs("div",{className:"nss-section-header",children:[r.jsx(Aw,{width:"15",height:"15"}),"Beginner advice"]}),r.jsx("div",{className:"nss-tips-grid",children:Fw.map((l,c)=>r.jsxs("div",{className:"tip-row",children:[r.jsx("div",{className:"tip-icon",children:r.jsx(l.icon,{width:"16",height:"16"})}),r.jsx("div",{className:"tip-text",children:l.text})]},c))})]}),r.jsx("div",{className:"nss-section",children:r.jsxs("div",{className:"ref-list-section",children:[r.jsxs("div",{className:"ref-list-header",children:[r.jsx(g4,{width:"15",height:"15"}),"Common questions"]}),r.jsx("div",{className:"faq-list",children:Dw.map((l,c)=>{const d=n===c;return r.jsxs("div",{className:"faq-item",children:[r.jsxs("button",{className:"faq-question",onClick:()=>s(d?-1:c),type:"button","aria-expanded":d,children:[r.jsx("span",{children:l.q}),r.jsx(Lw,{className:`faq-chevron${d?" is-open":""}`,width:"16",height:"16"})]}),r.jsx("div",{className:`faq-answer${d?" is-open":""}`,children:r.jsx("p",{children:l.a})})]},c)})})]})}),r.jsx("div",{className:"nss-disclaimer",children:"Procedures, portals, fees, and dates change from year to year — always confirm the current details with your institution’s NSS coordinator or the official scheme website before acting on them."})]})};const Vw=()=>r.jsxs("div",{className:"userlevel uc-card",children:[r.jsx("div",{className:"uc-dotgrid","aria-hidden":"true"}),r.jsx("div",{className:"uc-glow","aria-hidden":"true"}),r.jsxs("div",{className:"levelitem2 board",children:[r.jsx("div",{className:"streak",children:"Job Application Guide"}),r.jsxs("div",{className:"missing",children:[r.jsx("div",{className:"construction","aria-hidden":"true",children:"🚧"}),r.jsxs("div",{className:"missingtext",children:[r.jsx(Yh,{className:"micon"}),"This page is currently under construction"]}),r.jsx("div",{className:"uc-subtext",children:"We're putting the finishing touches on this guide — check back soon."})]}),r.jsx("div",{className:"streak"})]})]}),Hw=()=>r.jsx("div",{className:"userlevel",children:r.jsxs("div",{className:"levelitem2 board",children:[r.jsx("div",{className:"streak",children:"Our digital Products"}),r.jsx("div",{className:"streak"})]})}),Uw=()=>r.jsx("div",{className:"userlevel",children:r.jsx("div",{className:"userlevel",children:r.jsxs("div",{className:" advertboard",children:[r.jsx("div",{className:"streak",children:"Run your Adds here"}),r.jsx("div",{className:"iconlarge",children:"🎪"}),r.jsx("div",{className:"wish",children:"What is this section about?"}),r.jsx("div",{className:"tovid",children:"Watch this short video for a precise walk through?"}),r.jsx("div",{className:"watch",children:r.jsxs("div",{className:"sp",children:[r.jsx("div",{className:"fnav",children:r.jsx("i",{className:"fa fa-play"})})," Watch me 👀",r.jsx("div",{className:"prem2"})]})})]})})}),qw="uelearn:";function Ww(){const e=O1();return(e==null?void 0:e.email)||(e==null?void 0:e.msisdn)||"guest"}function v4(e){return`${qw}${Ww()}:${e}`}function Yt(e,t){try{const n=localStorage.getItem(v4(e));return n==null?t:JSON.parse(n)}catch{return t}}function Kt(e,t){try{return localStorage.setItem(v4(e),JSON.stringify(t)),!0}catch{return!1}}function st(){return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}const go="activity";function xo(){return Yt(go,{cardsReviewed:0,mockTestsTaken:0,generations:0})}function y4(){return xo()}function Gw(e=1){const t=xo(),n={...t,cardsReviewed:t.cardsReviewed+e};return Kt(go,n),n}function Yw(e=1){const t=xo(),n={...t,mockTestsTaken:t.mockTestsTaken+e};return Kt(go,n),n}function vo(e=1){const t=xo(),n={...t,generations:(t.generations||0)+e};return Kt(go,n),n}const Qw=24*60*60*1e3;function sd(){return{interval:0,easeFactor:2.5,repetitions:0,dueAt:Date.now()}}function Zw(e,t){const n=e??sd();let{interval:s,easeFactor:a,repetitions:i}=n;if(t===0)return i=0,s=0,{...n,interval:s,repetitions:i,easeFactor:Math.max(1.3,a-.2),dueAt:Date.now()+10*60*1e3};i+=1,i===1?s=1:i===2?s=3:s=Math.round(s*a);const o={1:-.15,2:0,3:.15}[t]??0;return a=Math.max(1.3,a+o),{interval:s,easeFactor:a,repetitions:i,dueAt:Date.now()+s*Qw}}function Lc(e){return!e||e.dueAt<=Date.now()}const b4="flashcard-decks";function Kw(){return Yt(b4,[])}const Jw=[{grade:0,label:"Again"},{grade:1,label:"Hard"},{grade:2,label:"Good"},{grade:3,label:"Easy"}];function w4(){const[e,t]=u.useState(Kw),[n,s]=u.useState(null),[a,i]=u.useState(!1),o=y=>{t(y),Kt(b4,y)},l=e.find(y=>y.id===n)||null,c=()=>{const y=prompt('Deck name (e.g. "Intro to Databases — Chapter 3")');if(!(y!=null&&y.trim()))return;const h={id:st(),name:y.trim(),cards:[]};o([h,...e])},d=y=>{confirm("Delete this deck and all its cards?")&&(o(e.filter(h=>h.id!==y)),n===y&&s(null))},p=()=>{const y=prompt("Question / front of card:");if(!(y!=null&&y.trim()))return;const h=prompt("Answer / back of card:");if(!(h!=null&&h.trim()))return;const x={id:st(),front:y.trim(),back:h.trim(),srs:sd()},k=e.map(w=>w.id===n?{...w,cards:[...w.cards,x]}:w);o(k)},m=y=>{const h=e.map(x=>x.id===n?{...x,cards:x.cards.filter(k=>k.id!==y)}:x);o(h)},f=(y,h)=>{const x=e.map(k=>k.id!==n?k:{...k,cards:k.cards.map(w=>w.id===y?{...w,srs:Zw(w.srs,h)}:w)});o(x),Gw(1)};if(a&&l)return r.jsx(Xw,{deck:l,onGrade:f,onExit:()=>i(!1)});if(l){const y=l.cards.filter(h=>Lc(h.srs)).length;return r.jsxs("div",{className:"hub-page",children:[r.jsx("button",{className:"hub-btn hub-btn-ghost",onClick:()=>s(null),children:"← All decks"}),r.jsx("h2",{className:"hub-title",children:l.name}),r.jsxs("div",{className:"hub-card hub-row",children:[r.jsxs("div",{children:[r.jsxs("div",{style:{fontWeight:700},children:[l.cards.length," cards"]}),r.jsxs("div",{style:{fontSize:12,color:"var(--hub-text-muted)"},children:[y," due for review"]})]}),r.jsx("button",{className:"hub-btn",disabled:y===0,onClick:()=>i(!0),children:y===0?"All caught up":`Review (${y})`})]}),r.jsx("button",{className:"hub-btn hub-btn-ghost",style:{marginBottom:14},onClick:p,children:"+ Add card"}),l.cards.length===0&&r.jsx("div",{className:"hub-empty",children:"No cards yet — add your first one above."}),l.cards.map(h=>r.jsxs("div",{className:"hub-list-item hub-row",children:[r.jsxs("div",{style:{overflow:"hidden"},children:[r.jsx("div",{style:{fontWeight:600,fontSize:13},children:h.front}),r.jsx("div",{style:{fontSize:12,color:"var(--hub-text-muted)"},children:h.back})]}),r.jsx("button",{className:"hub-btn hub-btn-danger",style:{padding:"6px 10px"},onClick:()=>m(h.id),children:"✕"})]},h.id))]})}return r.jsxs("div",{className:"hub-page",children:[r.jsx("p",{className:"hub-eyebrow",children:"RETENTION"}),r.jsx("h2",{className:"hub-title",children:"Flashcards"}),r.jsx("button",{className:"hub-btn",style:{marginBottom:16},onClick:c,children:"+ New deck"}),e.length===0&&r.jsx("div",{className:"hub-empty",children:"No decks yet. Create one for any course or topic and add cards as you study."}),e.map(y=>{const h=y.cards.filter(x=>Lc(x.srs)).length;return r.jsxs("div",{className:"hub-card hub-row",onClick:()=>s(y.id),style:{cursor:"pointer"},children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:700},children:y.name}),r.jsxs("div",{style:{fontSize:12,color:"var(--hub-text-muted)"},children:[y.cards.length," cards ",h>0&&`· ${h} due`]})]}),r.jsx("button",{className:"hub-btn hub-btn-danger",style:{padding:"6px 10px"},onClick:x=>{x.stopPropagation(),d(y.id)},children:"✕"})]},y.id)})]})}function Xw({deck:e,onGrade:t,onExit:n}){const s=u.useMemo(()=>e.cards.filter(p=>Lc(p.srs)),[e]),[a,i]=u.useState(0),[o,l]=u.useState(!1),c=s[a];if(!c)return r.jsx("div",{className:"hub-page",children:r.jsxs("div",{className:"hub-card",style:{textAlign:"center"},children:[r.jsx("div",{style:{fontSize:32},children:"✅"}),r.jsx("p",{style:{fontWeight:700,marginTop:8},children:"Session complete"}),r.jsx("button",{className:"hub-btn",style:{marginTop:12},onClick:n,children:"Back to deck"})]})});const d=p=>{t(c.id,p),l(!1),i(m=>m+1)};return r.jsxs("div",{className:"hub-page",children:[r.jsxs("div",{className:"hub-row",style:{marginBottom:12},children:[r.jsx("button",{className:"hub-btn hub-btn-ghost",onClick:n,children:"✕ Exit"}),r.jsxs("span",{style:{fontSize:12,color:"var(--hub-text-muted)"},children:[a+1," / ",s.length]})]}),r.jsx("div",{className:"hub-card hub-flashcard",onClick:()=>l(p=>!p),children:o?c.back:c.front}),r.jsx("div",{className:"hub-empty",style:{padding:"8px 0"},children:o?"Tap card to see question again":"Tap card to reveal answer"}),o&&r.jsx("div",{className:"hub-grade-row",children:Jw.map(p=>r.jsx("button",{"data-grade":p.grade,className:"hub-grade-btn",onClick:()=>d(p.grade),children:p.label},p.grade))})]})}const ek=Object.freeze(Object.defineProperty({__proto__:null,default:w4},Symbol.toStringTag,{value:"Module"})),k4="mock-test-sets",j4="mock-test-history",tk="flashcard-decks";function nk(){return Yt(k4,[])}function rk(){return Yt(j4,[])}function sk(){return Yt(tk,[])}function C4(){const[e,t]=u.useState(nk),[n,s]=u.useState(rk),[a]=u.useState(sk),[i,o]=u.useState(null),[l,c]=u.useState("custom"),d=x=>{t(x),Kt(k4,x)},p=x=>{s(x),Kt(j4,x)},m=()=>{const x=prompt('Test title (e.g. "Mid-sem mock — Networking")');x!=null&&x.trim()&&d([{id:st(),title:x.trim(),questions:[]},...e])},f=x=>{const k=prompt('Question type — enter "mcq" for multiple choice or "fill" for fill-in-the-blank:',"mcq");if(!(k!=null&&k.trim()))return;if(k.trim().toLowerCase().startsWith("fill")){const S=prompt("Question text (use ___ to mark the blank):");if(!(S!=null&&S.trim()))return;const N=prompt("Correct answer:");if(!(N!=null&&N.trim()))return;const _=prompt('Optional hints, separated by " | " (leave blank for none):'),z=_?_.split("|").map(ee=>ee.trim()).filter(Boolean):[],B=e.map(ee=>ee.id===x?{...ee,questions:[...ee.questions,{id:st(),type:"fillIn",q:S.trim(),correctAnswer:N.trim(),hints:z}]}:ee);d(B);return}const w=prompt("Question text:");if(!(w!=null&&w.trim()))return;const g=prompt('Enter 4 options, separated by " | " (e.g. A | B | C | D):');if(!(g!=null&&g.trim()))return;const b=g.split("|").map(S=>S.trim()).filter(Boolean);if(b.length<2){alert("Need at least 2 options.");return}const j=prompt(`Which option is correct? Enter 1-${b.length}:`),C=Number(j)-1;if(Number.isNaN(C)||C<0||C>=b.length){alert("Invalid choice.");return}const E=e.map(S=>S.id===x?{...S,questions:[...S.questions,{id:st(),type:"mcq",q:w.trim(),options:b,correct:C}]}:S);d(E)},y=x=>{confirm("Delete this test?")&&d(e.filter(k=>k.id!==x))},h=(x,k,w,g)=>{const b={id:st(),title:x,score:k,total:w,durationSec:g,takenAt:Date.now()};p([b,...n].slice(0,50)),Yw(1)};return i?r.jsx(ik,{set:i,onFinish:(x,k,w)=>{h(i.title,x,k,w),o(null)},onExit:()=>o(null)}):r.jsxs("div",{className:"hub-page",children:[r.jsx("p",{className:"hub-eyebrow",children:"RETENTION"}),r.jsx("h2",{className:"hub-title",children:"Mock Tests"}),r.jsxs("div",{className:"hub-tabs",children:[r.jsx("button",{className:`hub-tab ${l==="custom"?"active":""}`,onClick:()=>c("custom"),children:"My tests"}),r.jsx("button",{className:`hub-tab ${l==="decks"?"active":""}`,onClick:()=>c("decks"),children:"From flashcards"}),r.jsx("button",{className:`hub-tab ${l==="history"?"active":""}`,onClick:()=>c("history"),children:"History"})]}),l==="custom"&&r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"hub-btn",style:{marginBottom:16},onClick:m,children:"+ New test"}),e.length===0&&r.jsx("div",{className:"hub-empty",children:"No custom tests yet. Build one from your own notes for timed self-testing."}),e.map(x=>r.jsxs("div",{className:"hub-card",children:[r.jsxs("div",{className:"hub-row",children:[r.jsxs("div",{style:{fontWeight:700},children:[x.title,x.source==="ai"&&r.jsx("span",{className:"hub-badge-pill",style:{marginLeft:8,fontSize:10},children:"✨ AI"})]}),r.jsx("button",{className:"hub-btn hub-btn-danger",style:{padding:"6px 10px"},onClick:()=>y(x.id),children:"✕"})]}),r.jsxs("div",{style:{fontSize:12,color:"var(--hub-text-muted)",margin:"6px 0 10px"},children:[x.questions.length," questions"]}),r.jsxs("div",{className:"hub-row",children:[r.jsx("button",{className:"hub-btn hub-btn-ghost",onClick:()=>f(x.id),children:"+ Add question"}),r.jsx("button",{className:"hub-btn",disabled:x.questions.length===0,onClick:()=>o(x),children:"Start"})]})]},x.id))]}),l==="decks"&&r.jsxs(r.Fragment,{children:[a.length===0&&r.jsx("div",{className:"hub-empty",children:"No flashcard decks yet — create one in Flashcards first."}),a.map(x=>r.jsxs("div",{className:"hub-card hub-row",children:[r.jsxs("div",{children:[r.jsxs("div",{style:{fontWeight:700},children:[x.name,x.source==="ai"&&r.jsx("span",{className:"hub-badge-pill",style:{marginLeft:8,fontSize:10},children:"✨ AI"})]}),r.jsxs("div",{style:{fontSize:12,color:"var(--hub-text-muted)"},children:[x.cards.length," cards"]})]}),r.jsx("button",{className:"hub-btn",disabled:x.cards.length<2,onClick:()=>o(ak(x)),children:"Start"})]},x.id))]}),l==="history"&&r.jsxs(r.Fragment,{children:[n.length===0&&r.jsx("div",{className:"hub-empty",children:"No tests taken yet."}),n.map(x=>r.jsxs("div",{className:"hub-list-item hub-row",children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:600,fontSize:13},children:x.title}),r.jsxs("div",{style:{fontSize:11,color:"var(--hub-text-muted)"},children:[new Date(x.takenAt).toLocaleDateString()," · ",Math.round(x.durationSec),"s"]})]}),r.jsxs("span",{className:"hub-badge-pill",children:[x.score,"/",x.total]})]},x.id))]})]})}function ak(e){return{title:`${e.name} — recall test`,recall:!0,questions:e.cards.map(t=>({id:t.id,q:t.front,answer:t.back}))}}function ik({set:e,onFinish:t,onExit:n}){var _;const[s,a]=u.useState(0),[i,o]=u.useState(0),[l,c]=u.useState(null),[d,p]=u.useState(!1),[m,f]=u.useState(""),[y,h]=u.useState(!1),[x,k]=u.useState(!1),w=u.useRef(Date.now()),g=e.questions[s],b=s===e.questions.length-1,j=!e.recall&&(g==null?void 0:g.type)==="fillIn",C=z=>{const B=(Date.now()-w.current)/1e3;t(z,e.questions.length,B)},E=z=>{const B=i+(z?1:0);o(B),c(null),p(!1),f(""),h(!1),k(!1),b?C(B):a(ee=>ee+1)};if(!g)return null;const S=z=>(z||"").trim().toLowerCase().replace(/\s+/g," "),N=y&&S(m)===S(g.correctAnswer);return r.jsxs("div",{className:"hub-page",children:[r.jsxs("div",{className:"hub-row",style:{marginBottom:12},children:[r.jsx("button",{className:"hub-btn hub-btn-ghost",onClick:n,children:"✕ Exit"}),r.jsxs("span",{style:{fontSize:12,color:"var(--hub-text-muted)"},children:[s+1," / ",e.questions.length]})]}),r.jsxs("div",{className:"hub-card",children:[r.jsx("p",{style:{fontWeight:700,fontSize:15,marginBottom:14},children:g.q}),e.recall?r.jsxs(r.Fragment,{children:[d&&r.jsx("div",{className:"hub-list-item",style:{marginBottom:10},children:g.answer}),d?r.jsxs("div",{className:"hub-grade-row",style:{gridTemplateColumns:"1fr 1fr"},children:[r.jsx("button",{className:"hub-grade-btn","data-grade":"0",onClick:()=>E(!1),children:"Got it wrong"}),r.jsx("button",{className:"hub-grade-btn","data-grade":"3",onClick:()=>E(!0),children:"Got it right"})]}):r.jsx("button",{className:"hub-btn",onClick:()=>p(!0),children:"Reveal answer"})]}):j?r.jsxs(r.Fragment,{children:[r.jsx("input",{className:"hub-input",type:"text",placeholder:"Type your answer…",value:m,disabled:y,onChange:z=>f(z.target.value),onKeyDown:z=>{z.key==="Enter"&&!y&&m.trim()&&h(!0)}}),((_=g.hints)==null?void 0:_.length)>0&&!y&&r.jsx("div",{style:{marginTop:8},children:x?r.jsx("div",{style:{fontSize:12,color:"var(--hub-text-muted)"},children:g.hints.join(" · ")}):r.jsx("button",{className:"hub-btn hub-btn-ghost",style:{fontSize:12},onClick:()=>k(!0),children:"💡 Show hint"})}),y&&r.jsxs("div",{className:"hub-list-item",style:{marginTop:10,borderColor:N?"var(--hub-success)":"var(--hub-danger)"},children:[r.jsx("div",{style:{fontWeight:700,marginBottom:4},children:N?"✅ Correct":"❌ Not quite"}),!N&&r.jsxs("div",{style:{fontSize:12},children:["Correct answer: ",g.correctAnswer]}),g.explanation&&r.jsx("div",{style:{fontSize:12,color:"var(--hub-text-muted)",marginTop:4},children:g.explanation})]}),y?r.jsx("button",{className:"hub-btn",style:{marginTop:10},onClick:()=>E(N),children:b?"Finish":"Next"}):r.jsx("button",{className:"hub-btn",style:{marginTop:10},disabled:!m.trim(),onClick:()=>h(!0),children:"Submit"})]}):r.jsxs(r.Fragment,{children:[g.options.map((z,B)=>r.jsx("button",{className:"hub-btn hub-btn-ghost",style:{display:"block",width:"100%",textAlign:"left",marginBottom:8,borderColor:l===B?"var(--hub-accent)":void 0},onClick:()=>c(B),children:z},B)),r.jsx("button",{className:"hub-btn",disabled:l===null,style:{marginTop:6},onClick:()=>E(l===g.correct),children:b?"Finish":"Next"})]})]})]})}const ok=Object.freeze(Object.defineProperty({__proto__:null,default:C4},Symbol.toStringTag,{value:"Module"}));function Rt(){return typeof window<"u"&&"speechSynthesis"in window}function lk(){const[e,t]=u.useState(null),[n,s]=u.useState(!1),[a,i]=u.useState(1),o=u.useRef(null);return u.useEffect(()=>()=>{Rt()&&window.speechSynthesis.cancel()},[]),{speakingId:e,paused:n,rate:a,speak:(f,y)=>{if(!Rt()||!(y!=null&&y.trim()))return;window.speechSynthesis.cancel();const h=new SpeechSynthesisUtterance(y);h.rate=a,h.onend=()=>{t(x=>x===f?null:x),s(!1)},h.onerror=()=>{t(x=>x===f?null:x),s(!1)},o.current=h,t(f),s(!1),window.speechSynthesis.speak(h)},pause:()=>{Rt()&&(window.speechSynthesis.pause(),s(!0))},resume:()=>{Rt()&&(window.speechSynthesis.resume(),s(!1))},stop:()=>{Rt()&&(window.speechSynthesis.cancel(),o.current=null,t(null),s(!1))},changeRate:f=>{if(i(f),e&&o.current){const y=o.current.text,h=e;window.speechSynthesis.cancel();const x=new SpeechSynthesisUtterance(y);x.rate=f,x.onend=()=>t(k=>k===h?null:k),x.onerror=()=>t(k=>k===h?null:k),o.current=x,window.speechSynthesis.speak(x)}},supported:Rt()}}const O0="bookmarks",$0="notes",ck=[.75,1,1.25,1.5,2];function dk({onGenerateFromNote:e}={}){const[t,n]=u.useState("bookmarks"),[s,a]=u.useState(()=>Yt(O0,[])),[i,o]=u.useState(()=>Yt($0,[])),l=lk(),c=h=>{a(h),Kt(O0,h)},d=h=>{o(h),Kt($0,h)},p=()=>{const h=prompt("Course code (e.g. CSM 261):");if(!(h!=null&&h.trim()))return;const x=prompt('What are you bookmarking? (e.g. "2022 mid-sem, Q3")');if(!(x!=null&&x.trim()))return;const k={id:st(),course:h.trim(),label:x.trim(),createdAt:Date.now()};c([k,...s])},m=h=>c(s.filter(x=>x.id!==h)),f=()=>{const h=prompt("Note title:");if(!(h!=null&&h.trim()))return;const x=prompt("Note content:");if(!(x!=null&&x.trim()))return;const k={id:st(),title:h.trim(),body:x.trim(),createdAt:Date.now()};d([k,...i])},y=h=>d(i.filter(x=>x.id!==h));return r.jsxs("div",{className:"hub-page",children:[r.jsx("p",{className:"hub-eyebrow",children:"PERSONAL ORGANIZATION"}),r.jsx("h2",{className:"hub-title",children:"Library"}),r.jsxs("div",{className:"hub-tabs",children:[r.jsx("button",{className:`hub-tab ${t==="bookmarks"?"active":""}`,onClick:()=>n("bookmarks"),children:"Bookmarks"}),r.jsx("button",{className:`hub-tab ${t==="notes"?"active":""}`,onClick:()=>n("notes"),children:"Notes"})]}),t==="bookmarks"&&r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"hub-btn",style:{marginBottom:14},onClick:p,children:"+ Add bookmark"}),s.length===0&&r.jsx("div",{className:"hub-empty",children:"No bookmarks yet. Save a course code + reference here so you can find it again fast — search itself still happens on the main search page."}),s.map(h=>r.jsxs("div",{className:"hub-list-item hub-row",children:[r.jsxs("div",{children:[r.jsx("span",{className:"hub-badge-pill",children:h.course}),r.jsx("div",{style:{marginTop:6,fontSize:13},children:h.label})]}),r.jsx("button",{className:"hub-btn hub-btn-danger",style:{padding:"6px 10px"},onClick:()=>m(h.id),children:"✕"})]},h.id))]}),t==="notes"&&r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"hub-btn",style:{marginBottom:14},onClick:f,children:"+ Add note"}),i.length===0&&r.jsx("div",{className:"hub-empty",children:"No notes yet."}),i.map(h=>{const x=l.speakingId===h.id;return r.jsxs("div",{className:"hub-list-item",children:[r.jsxs("div",{className:"hub-row",children:[r.jsx("div",{style:{fontWeight:700,fontSize:13},children:h.title}),r.jsx("button",{className:"hub-btn hub-btn-danger",style:{padding:"6px 10px"},onClick:()=>y(h.id),children:"✕"})]}),r.jsx("div",{style:{fontSize:12,color:"var(--hub-text-muted)",marginTop:6,whiteSpace:"pre-wrap"},children:h.body}),(l.supported||e)&&r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:10,flexWrap:"wrap"},children:[l.supported&&!x&&r.jsx("button",{className:"hub-btn hub-btn-ghost",style:{padding:"6px 10px",fontSize:12},onClick:()=>l.speak(h.id,`${h.title}. ${h.body}`),children:"🔊 Listen"}),l.supported&&x&&r.jsxs(r.Fragment,{children:[l.paused?r.jsx("button",{className:"hub-btn hub-btn-ghost",style:{padding:"6px 10px",fontSize:12},onClick:l.resume,children:"▶ Resume"}):r.jsx("button",{className:"hub-btn hub-btn-ghost",style:{padding:"6px 10px",fontSize:12},onClick:l.pause,children:"⏸ Pause"}),r.jsx("button",{className:"hub-btn hub-btn-ghost",style:{padding:"6px 10px",fontSize:12},onClick:l.stop,children:"⏹ Stop"}),r.jsx("select",{className:"hub-select",style:{width:"auto",padding:"6px 8px",fontSize:12},value:l.rate,onChange:k=>l.changeRate(Number(k.target.value)),children:ck.map(k=>r.jsxs("option",{value:k,children:[k,"×"]},k))})]}),e&&r.jsx("button",{className:"hub-btn hub-btn-ghost",style:{padding:"6px 10px",fontSize:12,marginLeft:"auto"},onClick:()=>e(h),children:"✨ Generate quiz"})]})]},h.id)})]})]})}const L0="planner-items",A0=new Set;function uk(){const[e,t]=u.useState(()=>Yt(L0,[])),[n,s]=u.useState(typeof Notification<"u"?Notification.permission:"unsupported"),a=u.useRef(null),i=p=>{t(p),Kt(L0,p)};u.useEffect(()=>(a.current=setInterval(()=>{if(typeof Notification>"u"||Notification.permission!=="granted")return;const p=Date.now();e.forEach(m=>{m.remindAt&&m.remindAt<=p&&!m.done&&!A0.has(m.id)&&(A0.add(m.id),new Notification("Study reminder",{body:m.title}))})},3e4),()=>clearInterval(a.current)),[e]);const o=async()=>{if(typeof Notification>"u")return;const p=await Notification.requestPermission();s(p)},l=()=>{const p=prompt('What are you planning to study? (e.g. "Revise CSM 261 — Chapter 4")');if(!(p!=null&&p.trim()))return;const m=prompt("When? (YYYY-MM-DD HH:MM, 24hr — e.g. 2026-08-10 18:00)"),f=m?new Date(m.replace(" ","T")).getTime():null,y={id:st(),title:p.trim(),remindAt:Number.isFinite(f)?f:null,done:!1,createdAt:Date.now()};i([...e,y].sort((h,x)=>(h.remindAt??1/0)-(x.remindAt??1/0)))},c=p=>{i(e.map(m=>m.id===p?{...m,done:!m.done}:m))},d=p=>i(e.filter(m=>m.id!==p));return r.jsxs("div",{className:"hub-page",children:[r.jsx("p",{className:"hub-eyebrow",children:"PERSONAL ORGANIZATION"}),r.jsx("h2",{className:"hub-title",children:"Study Planner"}),n!=="granted"&&n!=="unsupported"&&r.jsxs("div",{className:"hub-card",children:[r.jsx("p",{style:{fontSize:13,marginBottom:8},children:"Turn on browser notifications to get reminded when a study session is due."}),r.jsx("button",{className:"hub-btn",onClick:o,children:"Enable reminders"})]}),r.jsx("button",{className:"hub-btn",style:{marginBottom:14},onClick:l,children:"+ Add study session"}),e.length===0&&r.jsx("div",{className:"hub-empty",children:"Nothing planned yet."}),e.map(p=>r.jsxs("div",{className:"hub-list-item hub-row",children:[r.jsxs("div",{style:{opacity:p.done?.5:1},children:[r.jsx("div",{style:{fontWeight:600,fontSize:13,textDecoration:p.done?"line-through":"none"},children:p.title}),p.remindAt&&r.jsx("div",{style:{fontSize:11,color:"var(--hub-text-muted)"},children:new Date(p.remindAt).toLocaleString()})]}),r.jsxs("div",{style:{display:"flex",gap:6},children:[r.jsx("button",{className:"hub-btn hub-btn-ghost",style:{padding:"6px 10px"},onClick:()=>c(p.id),children:p.done?"↺":"✓"}),r.jsx("button",{className:"hub-btn hub-btn-danger",style:{padding:"6px 10px"},onClick:()=>d(p.id),children:"✕"})]})]},p.id))]})}function pk(){const[e,t]=u.useState(""),[n,s]=u.useState([]),[a,i]=u.useState(!0),[o,l]=u.useState(null),[c,d]=u.useState(!1),[p,m]=u.useState(null),f=async h=>{i(!0),l(null);try{const x=h?`?course=${encodeURIComponent(h)}`:"",k=await Pe(`${X}/api/v1/discussions${x}`,{method:"GET"});s((k==null?void 0:k.threads)??[]),d(!1)}catch(x){x instanceof Nt?l("Please sign in to view discussions."):(x==null?void 0:x.status)===404?d(!0):l("Couldn't load discussions right now.")}finally{i(!1)}};u.useEffect(()=>{f()},[]);const y=async()=>{const h=prompt("Thread title:");if(!(h!=null&&h.trim()))return;const x=prompt("What do you want to ask or share?");if(!(x!=null&&x.trim()))return;const k=prompt("Course code (optional):")||"";try{await Pe(`${X}/api/v1/discussions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:h.trim(),body:x.trim(),course:k.trim()})}),f(e)}catch(w){alert(w instanceof Nt?"Please sign in first.":"Couldn't post — try again.")}};return p?r.jsx(hk,{threadId:p,onBack:()=>m(null)}):r.jsxs("div",{className:"hub-page",children:[r.jsx("p",{className:"hub-eyebrow",children:"COMMUNITY"}),r.jsx("h2",{className:"hub-title",children:"Discussions"}),c?r.jsx("div",{className:"hub-card",children:r.jsx("p",{style:{fontSize:13},children:"Discussions aren't set up on the backend yet.   "})}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"hub-row",style:{marginBottom:12,gap:8},children:[r.jsx("input",{className:"hub-input",placeholder:"Filter by course code…",value:e,onChange:h=>t(h.target.value),onKeyDown:h=>{h.key==="Enter"&&f(e)}}),r.jsx("button",{className:"hub-btn hub-btn-ghost",onClick:()=>f(e),children:"Filter"})]}),r.jsx("button",{className:"hub-btn",style:{marginBottom:14},onClick:y,children:"+ New thread"}),o&&r.jsx("div",{className:"hub-error",children:o}),a&&r.jsx("div",{className:"hub-empty",children:"Loading…"}),!a&&!o&&n.length===0&&r.jsx("div",{className:"hub-empty",children:"No threads yet — start one."}),n.map(h=>r.jsxs("div",{className:"hub-list-item",style:{cursor:"pointer"},onClick:()=>m(h.id),children:[r.jsxs("div",{className:"hub-row",children:[r.jsx("span",{style:{fontWeight:700,fontSize:13},children:h.title}),h.course&&r.jsx("span",{className:"hub-badge-pill",children:h.course})]}),r.jsxs("div",{style:{fontSize:12,color:"var(--hub-text-muted)",marginTop:4},children:[h.authorName??"Someone"," · ",h.replyCount??0," replies"]})]},h.id))]})]})}function hk({threadId:e,onBack:t}){const[n,s]=u.useState(null),[a,i]=u.useState([]),[o,l]=u.useState(!0),[c,d]=u.useState(null),p=async()=>{l(!0);try{const f=await Pe(`${X}/api/v1/discussions/${e}`,{method:"GET"});s((f==null?void 0:f.thread)??null),i((f==null?void 0:f.replies)??[])}catch{d("Couldn't load this thread.")}finally{l(!1)}};u.useEffect(()=>{p()},[e]);const m=async()=>{const f=prompt("Your reply:");if(f!=null&&f.trim())try{await Pe(`${X}/api/v1/discussions/${e}/replies`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({body:f.trim()})}),p()}catch(y){alert(y instanceof Nt?"Please sign in first.":"Couldn't post reply.")}};return r.jsxs("div",{className:"hub-page",children:[r.jsx("button",{className:"hub-btn hub-btn-ghost",style:{marginBottom:12},onClick:t,children:"← All threads"}),o&&r.jsx("div",{className:"hub-empty",children:"Loading…"}),c&&r.jsx("div",{className:"hub-error",children:c}),n&&r.jsxs("div",{className:"hub-card",children:[r.jsx("div",{style:{fontWeight:700,fontSize:15},children:n.title}),r.jsx("div",{style:{fontSize:13,marginTop:8},children:n.body})]}),r.jsx("button",{className:"hub-btn",style:{marginBottom:14},onClick:m,children:"+ Reply"}),a.map(f=>r.jsxs("div",{className:"hub-list-item",children:[r.jsx("div",{style:{fontSize:13},children:f.body}),r.jsxs("div",{style:{fontSize:11,color:"var(--hub-text-muted)",marginTop:4},children:[f.authorName??"Someone"," · ",f.createdAt?new Date(f.createdAt).toLocaleDateString():""]})]},f.id))]})}const fk=`${X}/api/v1/solutions/extension`,mk="deepseek-chat",M0=1500,gk=100;function S4(e){const t=[];let n=0;for(;n<e.length;){let s=n+M0;if(s<e.length){const a=e.lastIndexOf(".",s);a>n+M0/2&&(s=a+1)}t.push(e.slice(n,s).trim()),n=s-gk}return t.filter(s=>s.length>30)}function xk(e){const t=(e||"").trim();if(t.length<10)return 0;const n=S4(t);return Math.max(1,n.length)}async function vk(e){const t=await e.text();if(t.includes("data: ")){let n="";const s=t.split(`

`);for(const a of s){const i=a.trim();if(!i.startsWith("data: "))continue;const o=i.slice(6).trim();if(o!=="[DONE]")try{const{token:l}=JSON.parse(o);l&&(n+=l)}catch{n+=o}}if(n)return n}return t}async function N4(e,t,n=0){var d,p,m,f;const s=O1();if(!(s!=null&&s.accessToken))throw new Nt("No access token found — please sign in.");const a=await fetch(fk,{method:"POST",signal:t,headers:{"Content-Type":"application/json",Authorization:`Bearer ${s.accessToken}`},body:JSON.stringify({content:e,selectedVal:mk})});if(n===0&&await bh(a))return await jh(),N4(e,t,1);if(!a.ok){const y=await un(a.clone()),h=y?Ct(y,a.status,a.statusText):a.statusText;throw new Error(a.status>=500?h:`Request failed (${a.status}): ${h}`)}const i=await vk(a);if(!i)throw new Error("The server returned an empty response. Please try again.");let o;try{o=JSON.parse(i)}catch{throw new Error("Received malformed data from the server. Please try again.")}if((o==null?void 0:o.status)===!1)throw new Error(Ct(o,(o==null?void 0:o.statusCode)??0,"The server rejected the request."));const l=(m=(p=(d=o==null?void 0:o.data)==null?void 0:d.api_response)==null?void 0:p.data)==null?void 0:m.exercises;if(!Array.isArray(l))throw new Error("Unexpected response shape from server — no exercises field found.");const c=((f=o==null?void 0:o.data)==null?void 0:f.remaining_credits)??(o==null?void 0:o.remaining_credits);return rd(c),{exercises:l,remainingCredits:c}}async function yo(e,t={}){var d;const n=(e||"").trim();if(n.length<10)throw new Error("Please provide a bit more text to generate questions from.");const s=S4(n),a=s.length?s:[n],i=new AbortController,o=[],l=[];let c;for(let p=0;p<a.length;p++)try{const m=t.instruction?`${t.instruction}

${a[p]}`:a[p],{exercises:f,remainingCredits:y}=await N4(m,i.signal);f.forEach(h=>{const x=yk(h);x&&o.push(x)}),y!==void 0&&(c=y),(d=t.onProgress)==null||d.call(t,p+1,a.length)}catch(m){if(m.name==="AbortError")break;l.push(m.message)}if(o.length===0&&l.length>0&&l.length===a.length)throw new Error(l[0]);return{exercises:o,remainingCredits:c,partialErrors:l}}let D0=0;function hl(){return D0+=1,`aigen_${Date.now()}_${D0}`}function yk(e){if(!e||typeof e!="object")return null;switch(e.type){case"mcq":return typeof e.question!="string"||!Array.isArray(e.options)||e.options.length<2||typeof e.correctIndex!="number"?null:{_id:hl(),kind:"mcq",q:e.question,options:e.options.map(String),correct:e.correctIndex,explanation:e.explanation||null};case"fillIn":return typeof e.question!="string"||typeof e.correctAnswer!="string"?null:{_id:hl(),kind:"fillIn",q:e.question,correctAnswer:e.correctAnswer,hints:Array.isArray(e.hints)?e.hints:[],explanation:e.explanation||null};case"flashcard":return typeof e.front!="string"||typeof e.back!="string"?null:{_id:hl(),kind:"flashcard",front:e.front,back:e.back,explanation:e.explanation||null};default:return null}}const bk=25*1024*1024,wk=".pdf,.docx,.txt,.md,.csv,.json,image/png,image/jpeg,image/webp,.png,.jpg,.jpeg,.webp";function kk(e){const t=/\.([a-z0-9]+)$/i.exec(e||"");return t?t[1].toLowerCase():""}function _4(e){const t=kk(e.name),n=e.type||"";return n==="application/pdf"||t==="pdf"?"pdf":n==="application/vnd.openxmlformats-officedocument.wordprocessingml.document"||t==="docx"?"docx":t==="doc"||n==="application/msword"?"legacy-doc":n.startsWith("image/")||["png","jpg","jpeg","webp","bmp","gif"].includes(t)?"image":n.startsWith("text/")||["txt","md","csv","json","log"].includes(t)?"text":"unknown"}async function jk(e,t){const[n,{default:s}]=await Promise.all([Zt(()=>import("./pdf-829c0dbc.js"),[]),Zt(()=>import("./pdf.worker-7fac569c.js"),[])]);n.GlobalWorkerOptions.workerSrc=s;const a=await e.arrayBuffer(),i=await n.getDocument({data:a}).promise;let o="";for(let l=1;l<=i.numPages;l++){const p=(await(await i.getPage(l)).getTextContent()).items.map(m=>"str"in m?m.str:"").join(" ");o+=p+`

`,t==null||t(l/i.numPages)}return o.trim()}async function Ck(e){const t=await Zt(()=>import("./index-72b7a22d.js").then(a=>a.i),["assets/index-72b7a22d.js","assets/_commonjs-dynamic-modules-302442b1.js"]),n=await e.arrayBuffer(),{value:s}=await t.extractRawText({arrayBuffer:n});return s.trim()}let ur=null;async function Sk(e){if(ur)return ur;const{createWorker:t}=await Zt(()=>import("./index-be5bce1a.js").then(n=>n.i),["assets/index-be5bce1a.js","assets/_commonjs-dynamic-modules-302442b1.js"]);return ur=await t("eng",1,{logger:n=>{n.status==="recognizing text"&&typeof n.progress=="number"&&(e==null||e(n.progress))}}),ur}async function Nk(e,t){const n=await Sk(t),{data:s}=await n.recognize(e);return(s.text||"").trim()}async function _k(){if(ur){const e=ur;ur=null,await e.terminate()}}async function Ek(e){return(await e.text()).trim()}async function Tk(e,t){if(e.size>bk)throw new Error(`"${e.name}" is larger than 25MB — try a smaller file.`);switch(_4(e)){case"pdf":{const s=await jk(e,t);if(!s)throw new Error(`Couldn't find any text in "${e.name}" — it may be a scanned/image-only PDF.`);return s}case"docx":{const s=await Ck(e);if(!s)throw new Error(`"${e.name}" appears to be empty.`);return s}case"legacy-doc":throw new Error(`"${e.name}" is an old .doc file — please save it as .docx (or PDF) and re-upload.`);case"image":{const s=await Nk(e,t);if(!s)throw new Error(`Couldn't read any text in "${e.name}" — try a clearer image.`);return s}case"text":return Ek(e);default:throw new Error(`"${e.name}" isn't a supported file type. Try PDF, DOCX, an image, or a text file.`)}}const zk=`${X}/api/v1/solutions/`;async function Pk({courseName:e,solution:t,modelName:n="ai-generator"}){const s=(t||"").trim(),a=(e||"").trim();if(!s)throw new Error("There is nothing to save yet.");if(!a)throw new Error("Give this a short title before saving.");return Pe(zk,{method:"POST",body:JSON.stringify({courseName:a,solution:s,validated:!1,modelName:n})})}const Ik=()=>r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[r.jsx("path",{d:"M5 3.5h11.5L21 8v12.5A1.5 1.5 0 0 1 19.5 22h-15A1.5 1.5 0 0 1 3 20.5v-15A1.5 1.5 0 0 1 5 3.5Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),r.jsx("path",{d:"M7.5 3.5V9h9V3.5M7.5 22v-7h9v7",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),Rk=()=>r.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"m5 13 4.5 4.5L19 8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});function bo({title:e,content:t,modelName:n,disabled:s}){const[a,i]=u.useState("idle"),[o,l]=u.useState(""),c=!s&&(t||"").trim().length>0,d=async()=>{if(!(!c||a==="saving")){i("saving"),l("");try{await Pk({courseName:e,solution:t,modelName:n}),i("saved"),setTimeout(()=>i("idle"),2500)}catch(p){i("error"),l((p==null?void 0:p.message)||"Could not save — try again."),setTimeout(()=>i("idle"),3e3)}}};return r.jsxs("button",{type:"button",className:`hub-save-btn ${a==="saved"?"is-saved":""} ${a==="error"?"is-error":""}`,onClick:d,disabled:!c||a==="saving",title:a==="error"?o:"Save this to your Solutions",children:[a==="saved"?r.jsx(Rk,{}):r.jsx(Ik,{}),a==="saving"?"Saving…":a==="saved"?"Saved to Solutions":a==="error"?o||"Try again":"Save to Solutions"]})}const Ok="notes",F0="mock-test-sets",B0="flashcard-decks",$k={mcq:{label:"Multiple choice",icon:"📝"},fillIn:{label:"Fill in the blank",icon:"✏️"},flashcard:{label:"Flashcard",icon:"🗂️"}},V0={pdf:"📄",docx:"📝","legacy-doc":"📝",image:"🖼️",text:"📃",unknown:"📁"};function Lk(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function H0(e){return(e||"").trim().toLowerCase().replace(/\s+/g," ")}const U0={all:{eyebrow:"NEW",title:"AI Generator",cta:"Generate questions",instruction:"",keep:()=>!0},quiz:{eyebrow:"QUIZ",title:"Quiz Generator",cta:"Generate quiz",instruction:"Create multiple-choice and fill-in-the-blank questions only.",keep:e=>e.kind!=="flashcard"},flashcards:{eyebrow:"FLASHCARDS",title:"Flashcard Maker",cta:"Generate flashcards",instruction:"Create flashcards only (a short front prompt and a concise back answer).",keep:e=>e.kind==="flashcard"}};function E4({initialText:e="",initialSourceLabel:t="",onNavigate:n,mode:s="all",embedded:a=!1}){const i=U0[s]||U0.all,[o,l]=u.useState("paste"),[c,d]=u.useState(e),[p,m]=u.useState(t),f=u.useState(()=>Yt(Ok,[]))[0],[y,h]=u.useState([]),[x,k]=u.useState(!1),w=u.useRef(null),g=u.useRef(!1),b=u.useRef(new Set),[j,C]=u.useState("idle"),[E,S]=u.useState(null),[N,_]=u.useState(null),[z,B]=u.useState([]),[ee,je]=u.useState(null),[ne,Ce]=u.useState([]),[A,q]=u.useState(0),[I,O]=u.useState(""),[D,Z]=u.useState(""),[G,Ve]=u.useState({testId:null,deckId:null,questionCount:0,cardCount:0}),Se=xk(c),Ge=T=>{d(T.body),m(T.title),l("paste")},Ne=T=>{d(T),m("")};u.useEffect(()=>()=>{_k()},[]),u.useEffect(()=>{if(g.current)return;const T=y.find(W=>W.status==="pending");T&&(g.current=!0,h(W=>W.map(H=>H.id===T.id?{...H,status:"extracting",progress:0}:H)),Tk(T.file,W=>{h(H=>H.map(Y=>Y.id===T.id?{...Y,progress:W}:Y))}).then(W=>{h(H=>H.map(Y=>Y.id===T.id?{...Y,status:"done",progress:1,text:W}:Y))}).catch(W=>{h(H=>H.map(Y=>Y.id===T.id?{...Y,status:"error",error:W.message}:Y))}).finally(()=>{g.current=!1}))},[y]),u.useEffect(()=>{const T=y.filter(H=>H.status==="done"&&!b.current.has(H.id));if(T.length===0)return;T.forEach(H=>b.current.add(H.id));const W=T.map(H=>y.length>1?`--- ${H.name} ---
${H.text}`:H.text);d(H=>H.trim()?`${H}

${W.join(`

`)}`:W.join(`

`))},[y]);const ct=T=>{const W=Array.from(T||[]);if(W.length===0)return;const H=W.map(Y=>({id:st(),file:Y,name:Y.name,size:Y.size,kind:_4(Y),status:"pending",progress:0,text:"",error:null}));h(Y=>[...Y,...H])},vt=T=>{h(W=>W.filter(H=>H.id!==T))},yt=T=>{h(W=>W.map(H=>H.id===T?{...H,status:"pending",progress:0,error:null}:H))},tt=async()=>{const T=c.trim();if(T.length<10){_("Add a bit more text — at least a sentence or two — to generate questions from.");return}_(null),B([]),C("loading"),S({done:0,total:1});try{const{exercises:W,remainingCredits:H,partialErrors:Y}=await yo(T,{onProgress:(P,ce)=>S({done:P,total:ce}),instruction:i.instruction||void 0}),oe=W.filter(i.keep);if(oe.length===0){_(W.length>0?`The AI returned ${W.length} item${W.length!==1?"s":""}, but none were ${s==="flashcards"?"flashcards":"quiz questions"}. Try again or use a longer passage.`:"No questions came back for this text. Try pasting a longer or more detailed passage."),C("idle");return}Ce(oe.map(P=>({...P,keep:!0,selectedOption:null,textAnswer:"",checked:!1,isCorrect:null,graded:null,showHint:!1}))),q(0),je(H??null),B(Y||[]);const F=oe.filter(P=>P.kind==="mcq"||P.kind==="fillIn").length,ve=oe.filter(P=>P.kind==="flashcard").length;O(F?`AI quiz — ${new Date().toLocaleDateString()}`:""),Z(ve?`AI flashcards — ${new Date().toLocaleDateString()}`:""),C("reviewing"),vo()}catch(W){_(W.message||"Something went wrong generating questions."),C("idle")}},Ye=(T,W)=>{Ce(H=>H.map(Y=>Y._id===T?{...Y,...W}:Y))},he=()=>{A>=ne.length-1?C("summary"):q(T=>T+1)},pn=()=>q(T=>Math.max(0,T-1)),Ae=ne.filter(T=>T.keep&&(T.kind==="mcq"||T.kind==="fillIn")),_e=ne.filter(T=>T.keep&&T.kind==="flashcard"),Dt=()=>{let T=null,W=null;if(Ae.length>0){const H=Ae.map(F=>F.kind==="mcq"?{id:st(),type:"mcq",q:F.q,options:F.options,correct:F.correct}:{id:st(),type:"fillIn",q:F.q,correctAnswer:F.correctAnswer,hints:F.hints||[]}),Y=Yt(F0,[]);T=st();const oe=I.trim()||`AI quiz — ${new Date().toLocaleDateString()}`;Kt(F0,[{id:T,title:oe,questions:H,source:"ai"},...Y])}if(_e.length>0){const H=_e.map(F=>({id:st(),front:F.front,back:F.back,srs:sd()})),Y=Yt(B0,[]);W=st();const oe=D.trim()||`AI flashcards — ${new Date().toLocaleDateString()}`;Kt(B0,[{id:W,name:oe,cards:H,source:"ai"},...Y])}Ve({testId:T,deckId:W,questionCount:Ae.length,cardCount:_e.length}),C("saved")},Jt=()=>{C("idle"),Ce([]),q(0),_(null),B([]),d(""),m("")};if(j==="saved")return r.jsxs("div",{className:"hub-page",children:[r.jsx("p",{className:"hub-eyebrow",children:"AI GENERATOR"}),r.jsx("h2",{className:"hub-title",children:"Saved ✅"}),r.jsxs("div",{className:"hub-card",children:[G.testId&&r.jsxs("div",{className:"hub-row",style:{marginBottom:G.deckId?10:0},children:[r.jsxs("div",{style:{fontSize:13},children:[G.questionCount," question",G.questionCount!==1?"s":""," saved to Mock Tests"]}),n&&r.jsx("button",{className:"hub-btn hub-btn-ghost",onClick:()=>n("mocktest"),children:"Open →"})]}),G.deckId&&r.jsxs("div",{className:"hub-row",children:[r.jsxs("div",{style:{fontSize:13},children:[G.cardCount," card",G.cardCount!==1?"s":""," saved to Flashcards"]}),n&&r.jsx("button",{className:"hub-btn hub-btn-ghost",onClick:()=>n("flashcards"),children:"Open →"})]})]}),r.jsx("button",{className:"hub-btn",onClick:Jt,children:"Generate more"})]});if(j==="summary"){const T=ne.filter(P=>P.kind==="mcq"||P.kind==="fillIn"),W=T.filter(P=>P.isCorrect).length,H=ne.filter(P=>P.kind==="flashcard"),Y=H.filter(P=>P.graded==="knew").length,oe=ne.filter(P=>P.keep).length,F=T.length>0?Math.round(W/T.length*100):null,ve=ne.map((P,ce)=>P.kind==="mcq"?`${ce+1}. ${P.q}
Options: ${P.options.join(" | ")}
Answer: ${P.options[P.correct]}${P.explanation?`
${P.explanation}`:""}`:P.kind==="fillIn"?`${ce+1}. ${P.q}
Answer: ${P.correctAnswer}${P.explanation?`
${P.explanation}`:""}`:`${ce+1}. ${P.front}
${P.back}`).join(`

`);return r.jsxs("div",{className:"hub-page",children:[r.jsx("p",{className:"hub-eyebrow",children:"AI GENERATOR"}),r.jsxs("div",{className:"hub-row",style:{alignItems:"flex-start"},children:[r.jsx("h2",{className:"hub-title",children:"Results"}),r.jsx(bo,{title:p||`AI generator — ${new Date().toLocaleDateString()}`,content:ve,modelName:"ai-generator"})]}),r.jsxs("div",{className:"hub-card",style:{textAlign:"center"},children:[T.length>0?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"hub-score-ring",style:{"--pct":F},children:r.jsxs("div",{className:"hub-score-ring-inner",children:[F,"%"]})}),r.jsxs("div",{style:{fontWeight:700},children:[W," / ",T.length," correct"]})]}):r.jsx("div",{style:{padding:"10px 0",fontWeight:700},children:"🗂️ Flashcards generated"}),H.length>0&&r.jsxs("div",{style:{fontSize:12,color:"var(--hub-text-muted)",marginTop:T.length>0?10:0},children:[Y," / ",H.length," flashcards you already knew"]})]}),r.jsxs("div",{style:{fontSize:12,color:"var(--hub-text-muted)",margin:"4px 0 12px"},children:[oe," of ",ne.length," selected to save — go back to change your picks."]}),r.jsxs("div",{className:"hub-card",children:[Ae.length>0&&r.jsxs("div",{style:{marginBottom:_e.length>0?12:0},children:[r.jsx("label",{style:{fontSize:12,color:"var(--hub-text-muted)"},children:"Mock test title"}),r.jsx("input",{className:"hub-input",style:{marginTop:6},value:I,onChange:P=>O(P.target.value)})]}),_e.length>0&&r.jsxs("div",{children:[r.jsx("label",{style:{fontSize:12,color:"var(--hub-text-muted)"},children:"Flashcard deck name"}),r.jsx("input",{className:"hub-input",style:{marginTop:6},value:D,onChange:P=>Z(P.target.value)})]}),Ae.length===0&&_e.length===0&&r.jsx("div",{className:"hub-empty",children:"Nothing selected — go back and turn a few items back on to save them."})]}),r.jsxs("div",{className:"hub-row",children:[r.jsx("button",{className:"hub-btn hub-btn-ghost",onClick:()=>{q(ne.length-1),C("reviewing")},children:"← Review again"}),r.jsxs("button",{className:"hub-btn",disabled:oe===0,onClick:Dt,children:["Save ",oe," item",oe!==1?"s":""]})]})]})}if(j==="reviewing"){const T=ne[A];if(!T)return null;const W=ne.slice(0,A+1).filter(ve=>ve.kind==="mcq"||ve.kind==="fillIn"),H=W.filter(ve=>ve.checked),Y=W.filter(ve=>ve.isCorrect).length,oe=$k[T.kind],F=T.kind==="flashcard"?!!T.graded:T.checked;return r.jsxs("div",{className:"hub-page",children:[r.jsxs("div",{className:"hub-row",style:{marginBottom:10},children:[r.jsx("button",{className:"hub-btn hub-btn-ghost",onClick:()=>{confirm("Discard this generation and start over?")&&Jt()},children:"✕ Exit"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[H.length>0&&r.jsxs("span",{className:"hub-badge-pill",children:["✓ ",Y,"/",H.length]}),r.jsxs("span",{style:{fontSize:12,color:"var(--hub-text-muted)"},children:[A+1," / ",ne.length]})]})]}),r.jsx("div",{className:"hub-progress-track",style:{marginBottom:16},children:r.jsx("div",{className:"hub-progress-fill",style:{width:`${(A+1)/ne.length*100}%`}})}),r.jsxs("div",{className:"hub-card",children:[r.jsxs("div",{className:"hub-row",style:{alignItems:"flex-start",marginBottom:10},children:[r.jsxs("span",{className:"hub-badge-pill",children:[oe.icon," ",oe.label]}),r.jsxs("label",{className:"hub-switch",title:"Save this one",onClick:ve=>ve.stopPropagation(),children:[r.jsx("input",{type:"checkbox",checked:T.keep,onChange:()=>Ye(T._id,{keep:!T.keep})}),r.jsx("span",{className:"hub-switch-track"})]})]}),T.kind==="flashcard"?r.jsx(Dk,{item:T,onReveal:()=>Ye(T._id,{checked:!0})}):T.kind==="mcq"?r.jsx(Ak,{item:T,onSelect:ve=>{T.checked||Ye(T._id,{selectedOption:ve,checked:!0,isCorrect:ve===T.correct})}}):r.jsx(Mk,{item:T,onChangeAnswer:ve=>Ye(T._id,{textAnswer:ve}),onToggleHint:()=>Ye(T._id,{showHint:!T.showHint}),onSubmit:()=>{T.checked||!T.textAnswer.trim()||Ye(T._id,{checked:!0,isCorrect:H0(T.textAnswer)===H0(T.correctAnswer)})}})]}),r.jsxs("div",{className:"hub-row",style:{marginTop:12},children:[r.jsx("button",{className:"hub-btn hub-btn-ghost",disabled:A===0,onClick:pn,children:"← Back"}),(T.kind!=="flashcard"||T.graded)&&r.jsx("button",{className:"hub-btn",disabled:!F,onClick:he,children:A===ne.length-1?"See results":"Next →"})]}),T.kind==="flashcard"&&T.checked&&!T.graded&&r.jsxs("div",{className:"hub-grade-row",style:{gridTemplateColumns:"1fr 1fr"},children:[r.jsx("button",{className:"hub-grade-btn","data-grade":"0",onClick:()=>{Ye(T._id,{graded:"review"}),he()},children:"Need review"}),r.jsx("button",{className:"hub-grade-btn","data-grade":"3",onClick:()=>{Ye(T._id,{graded:"knew"}),he()},children:"I knew this"})]})]})}return r.jsxs("div",{className:"hub-page",children:[!a&&r.jsxs(r.Fragment,{children:[r.jsx("p",{className:"hub-eyebrow",children:i.eyebrow}),r.jsx("h2",{className:"hub-title",children:i.title}),r.jsx("p",{style:{fontSize:13,color:"var(--hub-text-muted)",marginTop:-10,marginBottom:16},children:"Paste notes, upload a PDF/Word doc/image, or pick a saved note — get multiple-choice, fill-in-the-blank, and flashcard questions generated automatically."})]}),r.jsxs("div",{className:"hub-tabs",children:[r.jsx("button",{className:`hub-tab ${o==="paste"?"active":""}`,onClick:()=>l("paste"),children:"Paste text"}),r.jsx("button",{className:`hub-tab ${o==="upload"?"active":""}`,onClick:()=>l("upload"),children:"Upload file"}),f.length>0&&r.jsx("button",{className:`hub-tab ${o==="notes"?"active":""}`,onClick:()=>l("notes"),children:"From a note"})]}),o==="notes"?r.jsx(r.Fragment,{children:f.map(T=>r.jsxs("div",{className:"hub-list-item hub-row",style:{cursor:"pointer"},onClick:()=>Ge(T),children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:600,fontSize:13},children:T.title}),r.jsxs("div",{style:{fontSize:11,color:"var(--hub-text-muted)"},children:[T.body.slice(0,60),T.body.length>60?"…":""]})]}),r.jsx("span",{className:"hub-badge-pill",children:"Use →"})]},T.id))}):o==="upload"?r.jsxs(r.Fragment,{children:[r.jsx("input",{ref:w,type:"file",multiple:!0,accept:wk,style:{display:"none"},onChange:T=>{ct(T.target.files),T.target.value=""}}),r.jsxs("div",{className:`hub-dropzone ${x?"is-dragover":""}`,onClick:()=>{var T;return(T=w.current)==null?void 0:T.click()},onDragOver:T=>{T.preventDefault(),k(!0)},onDragLeave:()=>k(!1),onDrop:T=>{T.preventDefault(),k(!1),ct(T.dataTransfer.files)},children:[r.jsx("div",{style:{fontSize:28},children:"📤"}),r.jsx("div",{style:{fontWeight:700,marginTop:6},children:"Drop files here or click to browse"}),r.jsx("div",{style:{fontSize:12,color:"var(--hub-text-muted)",marginTop:4},children:"PDF, Word (.docx), images (PNG/JPG), or plain text — up to 25MB each"})]}),y.length>0&&r.jsx("div",{style:{marginTop:12},children:y.map(T=>r.jsx("div",{className:"hub-list-item",children:r.jsxs("div",{className:"hub-row",style:{alignItems:"flex-start"},children:[r.jsxs("div",{style:{display:"flex",gap:10,alignItems:"flex-start",flex:1,minWidth:0},children:[r.jsx("span",{style:{fontSize:18},children:V0[T.kind]||V0.unknown}),r.jsxs("div",{style:{minWidth:0,flex:1},children:[r.jsx("div",{style:{fontWeight:600,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:T.name}),r.jsx("div",{style:{fontSize:11,color:"var(--hub-text-muted)"},children:Lk(T.size)}),(T.status==="pending"||T.status==="extracting")&&r.jsxs("div",{style:{marginTop:6},children:[r.jsx("div",{className:"hub-progress-track",children:r.jsx("div",{className:"hub-progress-fill",style:{width:`${Math.max(6,Math.round(T.progress*100))}%`}})}),r.jsxs("div",{style:{fontSize:11,color:"var(--hub-text-muted)",marginTop:4},children:[T.kind==="image"?"Reading text (OCR)…":"Extracting text…"," ",Math.round(T.progress*100),"%"]})]}),T.status==="done"&&r.jsxs("div",{style:{fontSize:11,color:"var(--hub-success)",marginTop:4},children:["✅ Added ",T.text.length.toLocaleString()," characters to the text below"]}),T.status==="error"&&r.jsxs("div",{style:{fontSize:11,color:"var(--hub-danger)",marginTop:4},children:["⚠️ ",T.error," ",r.jsx("button",{className:"hub-btn hub-btn-ghost",style:{padding:"2px 8px",fontSize:11,marginLeft:4},onClick:()=>yt(T.id),children:"Retry"})]})]})]}),r.jsx("button",{className:"hub-btn hub-btn-danger",style:{padding:"6px 10px"},onClick:()=>vt(T.id),children:"✕"})]})},T.id))}),c.trim()&&r.jsx("button",{className:"hub-btn hub-btn-ghost",style:{marginTop:4,width:"100%"},onClick:()=>l("paste"),children:"Review extracted text →"})]}):r.jsxs(r.Fragment,{children:[p&&r.jsxs("div",{style:{fontSize:11,color:"var(--hub-text-muted)",marginBottom:6},children:["From: ",p]}),r.jsx("textarea",{className:"hub-textarea",style:{minHeight:160},placeholder:"Paste a paragraph, chapter summary, or lecture notes here…",value:c,onChange:T=>Ne(T.target.value)})]}),Se>1&&r.jsxs("div",{style:{fontSize:12,color:"var(--hub-text-muted)",marginTop:10},children:["⚡ This text will be sent as ",Se," separate requests — trim it to use fewer credits."]}),N&&r.jsx("div",{className:"hub-error",children:N}),z.length>0&&j==="idle"&&r.jsx("div",{className:"hub-error",children:"Some of the text couldn't be processed — try shortening it."}),r.jsx("button",{className:"hub-btn",style:{marginTop:14,width:"100%"},disabled:j==="loading"||c.trim().length<10,onClick:tt,children:j==="loading"?E&&E.total>1?`Generating… (${E.done}/${E.total})`:"Generating…":i.cta}),typeof ee=="number"&&r.jsxs("div",{style:{fontSize:11,color:"var(--hub-text-muted)",marginTop:10,textAlign:"center"},children:[ee," generation credit",ee!==1?"s":""," remaining"]})]})}function Ak({item:e,onSelect:t}){return r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{fontWeight:700,fontSize:15,marginBottom:14},children:e.q}),e.options.map((n,s)=>{let a="hub-answer-option";return e.checked?s===e.correct?a+=" is-correct":s===e.selectedOption&&(a+=" is-incorrect"):s===e.selectedOption&&(a+=" is-selected"),r.jsx("button",{className:a,disabled:e.checked,onClick:()=>t(s),children:n},s)}),e.checked&&e.explanation&&r.jsxs("div",{className:`hub-result-banner ${e.isCorrect?"is-correct":"is-incorrect"}`,children:[r.jsx("div",{style:{fontWeight:700,marginBottom:4},children:e.isCorrect?"✅ Correct":"❌ Not quite"}),r.jsx("div",{style:{color:"var(--hub-text-muted)"},children:e.explanation})]})]})}function Mk({item:e,onChangeAnswer:t,onToggleHint:n,onSubmit:s}){var a;return r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{fontWeight:700,fontSize:15,marginBottom:14},children:e.q}),r.jsx("input",{className:"hub-input",type:"text",placeholder:"Type your answer…",value:e.textAnswer,disabled:e.checked,onChange:i=>t(i.target.value),onKeyDown:i=>{i.key==="Enter"&&s()}}),((a=e.hints)==null?void 0:a.length)>0&&!e.checked&&r.jsx("div",{style:{marginTop:8},children:e.showHint?r.jsx("div",{style:{fontSize:12,color:"var(--hub-text-muted)"},children:e.hints.join(" · ")}):r.jsx("button",{className:"hub-btn hub-btn-ghost",style:{fontSize:12},onClick:n,children:"💡 Show hint"})}),e.checked&&r.jsxs("div",{className:`hub-result-banner ${e.isCorrect?"is-correct":"is-incorrect"}`,children:[r.jsx("div",{style:{fontWeight:700,marginBottom:4},children:e.isCorrect?"✅ Correct":"❌ Not quite"}),!e.isCorrect&&r.jsxs("div",{children:["Correct answer: ",e.correctAnswer]}),e.explanation&&r.jsx("div",{style:{color:"var(--hub-text-muted)",marginTop:4},children:e.explanation})]}),!e.checked&&r.jsx("button",{className:"hub-btn",style:{marginTop:10},disabled:!e.textAnswer.trim(),onClick:s,children:"Check answer"})]})}function Dk({item:e,onReveal:t}){return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"hub-flashcard",style:{background:"var(--hub-surface-2)",borderRadius:14},onClick:()=>!e.checked&&t(),children:e.checked?e.back:e.front}),r.jsx("div",{className:"hub-empty",style:{padding:"8px 0"},children:e.checked?"How well did you know this?":"Tap the card to reveal the answer"})]})}const Fk=Object.freeze(Object.defineProperty({__proto__:null,default:E4},Symbol.toStringTag,{value:"Module"}));function ad(e){return e.map(t=>t.kind==="mcq"?{q:t.q,a:t.explanation||`Correct answer: ${t.options[t.correct]}`}:t.kind==="fillIn"?{q:t.q,a:t.explanation||`Answer: ${t.correctAnswer}`}:t.kind==="flashcard"?{q:t.front,a:t.explanation||t.back}:null).filter(Boolean)}async function Bk(e,t={}){const n=`Explain the following clearly and simply for a student, then include a couple of check-yourself questions with answers so they can test understanding. Topic: ${e}`,{exercises:s,remainingCredits:a,partialErrors:i}=await yo(n,t),o=ad(s);if(o.length===0)throw new Error(i[0]||"Couldn't get an explanation — try rephrasing.");return{qa:o,remainingCredits:a}}async function Vk(e,t={}){const n=(t.context||"").trim().slice(0,500),s=e.slice(-8).map(d=>`${d.role==="user"?"Student":"Tutor"}: ${d.content}`).join(`
`),i=`You are a helpful study tutor continuing this conversation. Respond directly and naturally to the student's latest message.

${n?`The student is working on this material: ${n}

`:""}${s}`,{exercises:o,partialErrors:l}=await yo(i,t),c=ad(o);if(c.length===0)throw new Error(l[0]||"Didn't get a reply — try asking differently.");return c.map(d=>d.a).join(`

`)}async function Hk(e,t={}){const n=`Create a friendly two-host podcast-style discussion (Host A and Host B taking turns) explaining this topic to a student audience, with Host B occasionally asking clarifying questions: ${e}`,{exercises:s,partialErrors:a}=await yo(n,t),i=ad(s);if(i.length===0)throw new Error(a[0]||"Couldn't script this — try a different topic.");const o=[];return i.forEach(({q:l,a:c},d)=>{o.push({speaker:d%2===0?"Host A":"Host B",text:l}),o.push({speaker:d%2===0?"Host B":"Host A",text:c})}),o}function T4({initialText:e=""}){const[t,n]=u.useState(e),[s,a]=u.useState("idle"),[i,o]=u.useState([]),[l,c]=u.useState(null),d=async()=>{const m=t.trim();if(m){a("loading"),c(null);try{const{qa:f}=await Bk(m);o(f),a("done"),vo()}catch(f){c(f.message||"Something went wrong. Please try again."),a("error")}}},p=i.map((m,f)=>`${f+1}. ${m.q}
${m.a}`).join(`

`);return r.jsxs("div",{className:"hub-page",children:[r.jsx("p",{className:"hub-eyebrow",style:{marginBottom:6},children:"AI TUTOR"}),r.jsxs("div",{className:"hub-card",children:[r.jsx("textarea",{className:"hub-textarea",placeholder:"What do you want explained? e.g. 'Explain normalization in databases'",value:t,onChange:m=>n(m.target.value),rows:3}),r.jsx("button",{className:"hub-btn",style:{marginTop:10,width:"100%"},onClick:d,disabled:s==="loading"||!t.trim(),children:s==="loading"?"Thinking…":"Explain this"}),l&&r.jsx("div",{className:"hub-error",children:l})]}),i.length>0&&r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:10},children:r.jsx(bo,{title:`Tutor: ${t.slice(0,60)}`,content:p,modelName:"ai-tutor"})}),i.map((m,f)=>r.jsxs("div",{className:"hub-card",children:[r.jsx("div",{style:{fontWeight:700,fontSize:13,marginBottom:6},children:m.q}),r.jsx("div",{style:{fontSize:13,color:"var(--hub-text-muted)",whiteSpace:"pre-wrap"},children:m.a})]},f))]})]})}const Uk=Object.freeze(Object.defineProperty({__proto__:null,default:T4},Symbol.toStringTag,{value:"Module"}));function qk(){if(!Rt())return[null,null];const e=window.speechSynthesis.getVoices(),t=e.filter(i=>{var o;return(o=i.lang)==null?void 0:o.startsWith("en")}),n=t.length>=2?t:e;if(n.length===0)return[null,null];const s=n[0],a=n.find(i=>i.name!==s.name)||n[0];return[s,a]}function z4({initialTopic:e=""}){const[t,n]=u.useState(e),[s,a]=u.useState("idle"),[i,o]=u.useState([]),[l,c]=u.useState(null),[d,p]=u.useState(-1),[m,f]=u.useState(!1),y=u.useRef([null,null]),h=u.useRef(!1);u.useEffect(()=>{if(!Rt())return;const b=()=>{y.current=qk()};return b(),window.speechSynthesis.onvoiceschanged=b,()=>{window.speechSynthesis.onvoiceschanged=null}},[]);const x=async()=>{const b=t.trim();if(b){a("loading"),c(null),o([]);try{const j=await Hk(b);o(j),a("ready"),vo()}catch(j){c(j.message||"Could not script this episode."),a("error")}}},k=()=>{h.current=!0,Rt()&&window.speechSynthesis.cancel(),f(!1),p(-1)},w=async()=>{if(!(!Rt()||i.length===0)){h.current=!1,f(!0);for(let b=0;b<i.length&&!h.current;b++){p(b);const j=i[b].speaker==="Host A"?y.current[0]:y.current[1];await new Promise(C=>{const E=new SpeechSynthesisUtterance(i[b].text);j&&(E.voice=j),E.pitch=i[b].speaker==="Host A"?1:.85,E.onend=C,E.onerror=C,window.speechSynthesis.speak(E)})}f(!1),p(-1)}},g=i.map(b=>`${b.speaker}: ${b.text}`).join(`

`);return r.jsxs("div",{className:"hub-page",children:[r.jsx("p",{className:"hub-eyebrow",style:{marginBottom:6},children:"CREATE PODCAST CONVERSATION"}),r.jsxs("div",{className:"hub-card",children:[r.jsx("textarea",{className:"hub-textarea",placeholder:"What should the two hosts discuss? e.g. 'The causes of World War I'",value:t,onChange:b=>n(b.target.value),rows:3}),r.jsx("button",{className:"hub-btn",style:{marginTop:10,width:"100%"},onClick:x,disabled:s==="loading"||!t.trim(),children:s==="loading"?"Writing script…":"Generate episode"}),l&&r.jsx("div",{className:"hub-error",children:l}),!Rt()&&r.jsx("div",{className:"hub-error",children:"Your browser can't read this aloud, but you can still generate and save the script."})]}),i.length>0&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"flex",gap:8,marginBottom:10},children:[Rt()&&(m?r.jsx("button",{className:"hub-btn hub-btn-danger",onClick:k,children:"Stop"}):r.jsx("button",{className:"hub-btn",onClick:w,children:"▶ Play episode"})),r.jsx(bo,{title:`Podcast: ${t.slice(0,60)}`,content:g,modelName:"ai-podcast-script"})]}),r.jsx("div",{className:"hub-card",children:i.map((b,j)=>r.jsxs("div",{style:{padding:"8px 0",borderBottom:j<i.length-1?"1px solid var(--hub-border)":"none",opacity:d===-1||d===j?1:.55},children:[r.jsxs("div",{style:{fontSize:11,fontWeight:700,color:b.speaker==="Host A"?"var(--hub-accent-2)":"var(--hub-accent)"},children:[b.speaker,d===j&&" · speaking"]}),r.jsx("div",{style:{fontSize:13},children:b.text})]},j))})]})]})}const Wk=Object.freeze(Object.defineProperty({__proto__:null,default:z4},Symbol.toStringTag,{value:"Module"}));function P4({context:e="",saveTitle:t="AI chat transcript"}){const[n,s]=u.useState([]),[a,i]=u.useState(""),[o,l]=u.useState(!1),[c,d]=u.useState(null),p=u.useRef(null);u.useEffect(()=>{var h,x;(x=(h=p.current)==null?void 0:h.scrollIntoView)==null||x.call(h,{behavior:"smooth"})},[n,o]);const m=async()=>{const h=a.trim();if(!h||o)return;const x=[...n,{role:"user",content:h}];s(x),i(""),l(!0),d(null);try{const k=await Vk(x,{context:e});s([...x,{role:"assistant",content:k}]),vo()}catch(k){d(k.message||"Could not get a reply. Please try again.")}finally{l(!1)}},f=h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),m())},y=n.map(h=>`${h.role==="user"?"You":"Tutor"}: ${h.content}`).join(`

`);return r.jsxs("div",{className:"hub-page hub-page--chat",children:[r.jsx("p",{className:"hub-eyebrow",style:{marginBottom:6},children:"AI CHAT"}),n.length>0&&r.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:8},children:r.jsx(bo,{title:t,content:y,modelName:"ai-chat"})}),r.jsxs("div",{className:"hub-chat-scroll",children:[n.length===0&&r.jsx("div",{className:"hub-empty",children:"Ask anything about your course — this stays a normal conversation, so you can follow up."}),n.map((h,x)=>r.jsx("div",{className:`hub-chat-bubble hub-chat-bubble--${h.role}`,children:h.content},x)),o&&r.jsx("div",{className:"hub-chat-bubble hub-chat-bubble--assistant hub-chat-bubble--typing",children:"…"}),r.jsx("div",{ref:p})]}),c&&r.jsx("div",{className:"hub-error",children:c}),r.jsxs("div",{className:"hub-chat-input-row",children:[r.jsx("textarea",{className:"hub-textarea",placeholder:"Type a message…",value:a,onChange:h=>i(h.target.value),onKeyDown:f,rows:1}),r.jsx("button",{className:"hub-btn",onClick:m,disabled:o||!a.trim(),children:"Send"})]})]})}const Gk=Object.freeze(Object.defineProperty({__proto__:null,default:P4},Symbol.toStringTag,{value:"Module"})),Yk=`${X}/api/v1/ai/image/generate`,Qk=`${X}/api/v1/ai/video/generate`,Zk=e=>`${X}/api/v1/ai/video/status/${e}`,q0=`${X}/api/v1/ai/history`,Kk=40,Jk=250,Xk=6e3,ej=6*60*1e3;function tj(e,t,n=0){return!e||typeof e!="object"?t:Ct(e,n,t)}async function xa(e,{method:t="GET",body:n,signal:s,_retryCount:a=0}={}){const i=O1();if(!(i!=null&&i.accessToken))throw new Nt("No access token found — please sign in.");const o=await fetch(e,{method:t,signal:s,headers:{"Content-Type":"application/json",Authorization:`Bearer ${i.accessToken}`},body:n?JSON.stringify(n):void 0});if(a===0&&await bh(o))return await jh(),xa(e,{method:t,body:n,signal:s,_retryCount:1});let l=null;try{l=await o.json()}catch{}if(!o.ok||(l==null?void 0:l.status)===!1)throw new Error(tj(l,`Request failed (${o.status}): ${o.statusText}`,o.status));if(!l)throw new Error("The server returned an unexpected empty response. Please try again.");return l}async function nj(e,t={}){var o,l,c;const n=(e||"").trim();if(!n)throw new Error("Please describe the image you want to generate.");const s={prompt:n};t.selectedVal&&(s.selectedVal=t.selectedVal);const a=await xa(Yk,{method:"POST",body:s,signal:t.signal}),i=(o=a==null?void 0:a.data)==null?void 0:o.generation;if(!i)throw new Error("Unexpected response shape from server — no generation returned.");return rd((l=a==null?void 0:a.data)==null?void 0:l.remaining_credits),{generation:i,remainingCredits:(c=a==null?void 0:a.data)==null?void 0:c.remaining_credits}}async function rj(e,t={}){var o;const n=(e||"").trim();if(!n)throw new Error("Please describe the video you want to generate.");const s={prompt:n};t.selectedVal&&(s.selectedVal=t.selectedVal);const a=await xa(Qk,{method:"POST",body:s,signal:t.signal}),i=(o=a==null?void 0:a.data)==null?void 0:o.generation;if(!i)throw new Error("Unexpected response shape from server — no generation returned.");return{generation:i}}async function sj(e,t={}){var a,i,o;const n=await xa(Zk(e),{signal:t.signal}),s=(a=n==null?void 0:n.data)==null?void 0:a.generation;if(!s)throw new Error("Unexpected response shape from server — no generation returned.");return s.status==="SUCCESS"&&rd((i=n==null?void 0:n.data)==null?void 0:i.remaining_credits),{generation:s,remainingCredits:(o=n==null?void 0:n.data)==null?void 0:o.remaining_credits}}async function aj(e,t={}){var s,a;const n=Date.now();for(;;){if((s=t.signal)!=null&&s.aborted)throw new DOMException("Polling cancelled","AbortError");const{generation:i,remainingCredits:o}=await sj(e,{signal:t.signal});if((a=t.onTick)==null||a.call(t,i),i.status!=="PROCESSING")return{generation:i,remainingCredits:o};if(Date.now()-n>ej)throw new Error("This is taking longer than usual. The video may still finish — check History in a few minutes.");await new Promise(l=>setTimeout(l,Xk))}}async function ij(e={}){var a;const t=new URLSearchParams;e.type&&t.set("type",e.type),e.page&&t.set("page",String(e.page)),e.pageSize&&t.set("pageSize",String(e.pageSize));const n=t.toString()?`${q0}?${t}`:q0,s=await xa(n,{signal:e.signal});return{items:Array.isArray(s==null?void 0:s.data)?s.data:[],pagination:((a=s==null?void 0:s.meta)==null?void 0:a.pagination)??(s==null?void 0:s.pagination)??null}}const oj=[{key:"image",label:"Image"},{key:"video",label:"Video"},{key:"history",label:"History"}];function id({onNavigate:e,initialPrompt:t="",initialTab:n="image",compact:s=!1}){const[a,i]=u.useState(n);return r.jsxs("div",{className:"hub-page",children:[!s&&r.jsxs(r.Fragment,{children:[r.jsx("p",{className:"hub-eyebrow",children:"AI STUDIO"}),r.jsx("h2",{className:"hub-title",children:"Image & video generator"})]}),r.jsx("div",{className:"hub-tabs",children:oj.map(o=>r.jsx("div",{className:`hub-tab ${a===o.key?"active":""}`,onClick:()=>i(o.key),children:o.label},o.key))}),a==="image"&&r.jsx(lj,{initialPrompt:t}),a==="video"&&r.jsx(cj,{initialPrompt:t}),a==="history"&&r.jsx(dj,{})]})}function I4({cost:e}){return r.jsxs("div",{className:"hub-badge-pill",style:{marginBottom:12},children:["⚡ Costs ",e," credits"]})}function R4({value:e}){return e==null?null:r.jsxs("div",{style:{fontSize:12,color:"var(--hub-text-muted)",marginTop:8},children:[e," credits remaining"]})}function od({message:e}){return e?r.jsx("div",{className:"hub-error",children:e}):null}function ld({status:e}){const t={PROCESSING:{label:"Processing",bg:"var(--hub-accent)"},SUCCESS:{label:"Done",bg:"var(--hub-success)"},FAILED:{label:"Failed",bg:"var(--hub-danger)"}}[e]||{label:e,bg:"var(--hub-text-muted)"};return r.jsx("span",{className:"hub-badge-pill",style:{background:t.bg,color:"white",borderColor:t.bg},children:t.label})}function cd(e){if(!e)return"";try{return new Date(e).toLocaleString()}catch{return e}}function lj({initialPrompt:e=""}){const[t,n]=u.useState(e),[s,a]=u.useState("idle"),[i,o]=u.useState(null),[l,c]=u.useState(null),[d,p]=u.useState(null),m=u.useRef(null);u.useEffect(()=>()=>{var h;return(h=m.current)==null?void 0:h.abort()},[]);const f=async()=>{const h=t.trim();if(h.length<3){o("Describe what you want to see — a little more detail helps a lot.");return}o(null),a("loading"),m.current=new AbortController;try{const{generation:x,remainingCredits:k}=await nj(h,{signal:m.current.signal});c(x),p(k??null),a("done")}catch(x){if(x.name==="AbortError")return;o(x.message||"Something went wrong generating the image. No credits were deducted."),a("idle")}},y=()=>{a("idle"),c(null),o(null),n("")};return s==="done"&&l?r.jsxs("div",{children:[r.jsxs("div",{className:"hub-card",style:{padding:0,overflow:"hidden"},children:[r.jsx("img",{src:l.resultUrl,alt:l.prompt,style:{width:"100%",display:"block",borderRadius:"16px 16px 0 0"}}),r.jsxs("div",{style:{padding:14},children:[r.jsx("div",{style:{fontSize:13,marginBottom:8},children:l.prompt}),r.jsxs("div",{className:"hub-row",children:[r.jsx(ld,{status:l.status}),r.jsx("span",{style:{fontSize:11,color:"var(--hub-text-muted)"},children:cd(l.dateCreated)})]}),r.jsx(R4,{value:d})]})]}),r.jsxs("div",{className:"hub-row",style:{gap:10},children:[r.jsx("a",{className:"hub-btn",style:{flex:1,textAlign:"center",textDecoration:"none"},href:l.resultUrl,download:!0,target:"_blank",rel:"noreferrer",children:"Download"}),r.jsx("button",{className:"hub-btn hub-btn-ghost",style:{flex:1},onClick:y,children:"New image"})]})]}):r.jsxs("div",{children:[r.jsx(I4,{cost:Kk}),r.jsxs("div",{className:"hub-card",children:[r.jsx("textarea",{className:"hub-textarea",placeholder:"Describe the image you want — e.g. 'a red panda studying at a library, watercolor style'",value:t,onChange:h=>n(h.target.value),disabled:s==="loading",rows:4}),r.jsx(od,{message:i}),r.jsx("button",{className:"hub-btn",style:{width:"100%",marginTop:10},onClick:f,disabled:s==="loading",children:s==="loading"?"Generating…":"Generate image"})]}),s==="loading"&&r.jsx("div",{className:"hub-empty",children:"Rendering your image — this usually takes a few seconds."})]})}function cj({initialPrompt:e=""}){const[t,n]=u.useState(e),[s,a]=u.useState("idle"),[i,o]=u.useState(null),[l,c]=u.useState(null),[d,p]=u.useState(null),m=u.useRef(null);u.useEffect(()=>()=>{var x;return(x=m.current)==null?void 0:x.abort()},[]);const f=async()=>{const x=t.trim();if(x.length<3){o("Describe the video you want — a little more detail helps a lot.");return}o(null),a("starting"),m.current=new AbortController;try{const{generation:k}=await rj(x,{signal:m.current.signal});c(k),a("processing");const{generation:w,remainingCredits:g}=await aj(k.id,{signal:m.current.signal,onTick:b=>c(b)});c(w),p(g??null),w.status==="FAILED"?(o(w.errorMessage||"Video generation failed. No credits were deducted."),a("idle")):a("done")}catch(k){if(k.name==="AbortError")return;o(k.message||"Something went wrong generating the video."),a(l?"processing":"idle")}},y=()=>{var x;(x=m.current)==null||x.abort(),a("idle"),c(null),o(null),n("")};if(s==="done"&&(l!=null&&l.resultUrl))return r.jsxs("div",{children:[r.jsxs("div",{className:"hub-card",style:{padding:0,overflow:"hidden"},children:[r.jsx("video",{src:l.resultUrl,controls:!0,style:{width:"100%",display:"block",borderRadius:"16px 16px 0 0",background:"#000"}}),r.jsxs("div",{style:{padding:14},children:[r.jsx("div",{style:{fontSize:13,marginBottom:8},children:l.prompt}),r.jsxs("div",{className:"hub-row",children:[r.jsx(ld,{status:l.status}),r.jsx("span",{style:{fontSize:11,color:"var(--hub-text-muted)"},children:cd(l.dateCreated)})]}),r.jsx(R4,{value:d})]})]}),r.jsxs("div",{className:"hub-row",style:{gap:10},children:[r.jsx("a",{className:"hub-btn",style:{flex:1,textAlign:"center",textDecoration:"none"},href:l.resultUrl,download:!0,target:"_blank",rel:"noreferrer",children:"Download"}),r.jsx("button",{className:"hub-btn hub-btn-ghost",style:{flex:1},onClick:y,children:"New video"})]})]});const h=s==="starting"||s==="processing";return r.jsxs("div",{children:[r.jsx(I4,{cost:Jk}),r.jsxs("div",{className:"hub-card",children:[r.jsx("textarea",{className:"hub-textarea",placeholder:"Describe the video you want — e.g. 'a neon hologram of a cat driving at top speed'",value:t,onChange:x=>n(x.target.value),disabled:h,rows:4}),r.jsx(od,{message:i}),r.jsx("button",{className:"hub-btn",style:{width:"100%",marginTop:10},onClick:f,disabled:h,children:s==="starting"?"Starting…":s==="processing"?"Generating…":"Generate video"})]}),h&&r.jsx("div",{className:"hub-empty",children:s==="starting"?"Starting the job…":"Your video is being generated — this can take a few minutes. Feel free to switch tabs; it keeps running."})]})}function dj(){const[e,t]=u.useState("ALL"),[n,s]=u.useState([]),[a,i]=u.useState("loading"),[o,l]=u.useState(null);return u.useEffect(()=>{let c=!1;return i("loading"),l(null),ij({type:e==="ALL"?void 0:e,pageSize:30}).then(({items:d})=>{c||(s(d),i("done"))}).catch(d=>{c||(l(d.message||"Could not load your generation history."),i("error"))}),()=>{c=!0}},[e]),r.jsxs("div",{children:[r.jsx("div",{className:"hub-tabs",children:["ALL","IMAGE","VIDEO"].map(c=>r.jsx("div",{className:`hub-tab ${e===c?"active":""}`,onClick:()=>t(c),children:c==="ALL"?"All":c==="IMAGE"?"🖼️ Images":"🎬 Videos"},c))}),a==="loading"&&r.jsx("div",{className:"hub-empty",children:"Loading your history…"}),a==="error"&&r.jsx(od,{message:o}),a==="done"&&n.length===0&&r.jsx("div",{className:"hub-empty",children:"No generations yet — go make something in the Image or Video tab."}),a==="done"&&n.map(c=>r.jsxs("div",{className:"hub-list-item",children:[r.jsxs("div",{className:"hub-row",style:{alignItems:"flex-start"},children:[r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsxs("div",{style:{fontSize:13,fontWeight:600,marginBottom:2},children:[c.generationType==="IMAGE"?"🖼️":"🎬"," ",c.prompt]}),r.jsxs("div",{style:{fontSize:11,color:"var(--hub-text-muted)"},children:[cd(c.dateCreated)," · ",c.creditsCharged," credits"]})]}),r.jsx(ld,{status:c.status})]}),c.resultUrl&&c.generationType==="IMAGE"&&r.jsx("img",{src:c.resultUrl,alt:c.prompt,style:{width:"100%",borderRadius:10,marginTop:10}}),c.resultUrl&&c.generationType==="VIDEO"&&r.jsx("video",{src:c.resultUrl,controls:!0,style:{width:"100%",borderRadius:10,marginTop:10}})]},c.id))]})}const uj=Object.freeze(Object.defineProperty({__proto__:null,default:id},Symbol.toStringTag,{value:"Module"})),pj=[{key:"quiz",label:"Quiz Generator"},{key:"tutor",label:"AI Tutor"},{key:"podcast",label:"Create Podcast"},{key:"chat",label:"AI Chat"},{key:"video",label:"Video Generation"}];function hj({initialText:e="",initialSourceLabel:t="",onNavigate:n}){const[s,a]=u.useState("quiz");return r.jsxs("div",{className:"gs-wrap",children:[r.jsxs("div",{className:"gs-tabbar-outer",children:[r.jsx("p",{className:"hub-eyebrow",children:"GENERATOR STUDIO"}),r.jsx("h2",{className:"hub-title",style:{marginBottom:12},children:"Create with AI"}),r.jsx("div",{className:"hub-tabs",children:pj.map(i=>r.jsx("button",{className:`hub-tab ${s===i.key?"active":""}`,onClick:()=>a(i.key),children:i.label},i.key))})]}),r.jsxs("div",{className:"gs-tabpanel",children:[s==="quiz"&&r.jsx(E4,{initialText:e,initialSourceLabel:t,onNavigate:n}),s==="tutor"&&r.jsx(T4,{initialText:t?"":e}),s==="podcast"&&r.jsx(z4,{}),s==="chat"&&r.jsx(P4,{}),s==="video"&&r.jsx(id,{})]})]})}const fj=[{key:"first-step",name:"First Step",tier:"bronze",description:"Open the Learning Hub for the first time",metric:()=>1,goal:1},{key:"streak-3",name:"Warming Up",tier:"bronze",description:"Reach a 3-day streak",metric:({highestStreak:e})=>e,goal:3},{key:"streak-15",name:"Dedicated",tier:"silver",description:"Reach a 15-day streak",metric:({highestStreak:e})=>e,goal:15},{key:"streak-60",name:"Legend",tier:"gold",description:"Reach a 60-day streak",metric:({highestStreak:e})=>e,goal:60},{key:"cards-50",name:"Card Shark",tier:"silver",description:"Review 50 flashcards",metric:({cardsReviewed:e})=>e,goal:50},{key:"cards-250",name:"Flashcard Fanatic",tier:"gold",description:"Review 250 flashcards",metric:({cardsReviewed:e})=>e,goal:250},{key:"tests-5",name:"Test Taker",tier:"silver",description:"Complete 5 mock tests",metric:({mockTestsTaken:e})=>e,goal:5},{key:"tests-20",name:"Exam Slayer",tier:"gold",description:"Complete 20 mock tests",metric:({mockTestsTaken:e})=>e,goal:20},{key:"gen-1",name:"AI Apprentice",tier:"bronze",description:"Generate your first AI study set",metric:({generations:e})=>e,goal:1},{key:"gen-25",name:"Prolific Creator",tier:"gold",description:"Generate 25 AI study sets",metric:({generations:e})=>e,goal:25}];function mj(e){return fj.map(t=>{const n=Math.max(0,t.metric(e)||0),s=n>=t.goal;return{...t,progress:Math.min(n,t.goal),pct:Math.min(100,Math.round(n/t.goal*100)),unlocked:s}})}const W0={gold:["#fde68a","#f59e0b","#fff7cc"],silver:["#e2e8f0","#94a3b8","#f8fafc"],bronze:["#22d3ee","#a78bfa","#e0f2fe"]},ci=30,fl=2*Math.PI*ci;function gj({achievement:e,index:t}){const{unlocked:n,tier:s,pct:a,name:i,description:o,progress:l,goal:c}=e,d=`ach-grad-${t}`,p=`ach-glow-${t}`,[m,f]=W0[s]||W0.bronze;return r.jsxs("div",{className:`ach-badge ${n?"is-unlocked":"is-locked"}`,title:o,children:[r.jsxs("svg",{viewBox:"0 0 80 80",className:"ach-badge__svg",children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:d,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[r.jsx("stop",{offset:"0%",stopColor:m}),r.jsx("stop",{offset:"100%",stopColor:f})]}),r.jsxs("filter",{id:p,x:"-60%",y:"-60%",width:"220%",height:"220%",children:[r.jsx("feGaussianBlur",{stdDeviation:"2.6",result:"blur"}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{in:"blur"}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),r.jsx("circle",{cx:"40",cy:"40",r:ci,fill:"none",stroke:"rgba(255,255,255,0.08)",strokeWidth:"4"}),r.jsx("circle",{className:n?"ach-badge__ring ach-badge__ring--spin":"ach-badge__ring",cx:"40",cy:"40",r:ci,fill:"none",stroke:`url(#${d})`,strokeWidth:"4",strokeLinecap:"round",strokeDasharray:fl,strokeDashoffset:fl-fl*a/100,transform:"rotate(-90 40 40)",filter:n?`url(#${p})`:void 0}),r.jsx("circle",{cx:"40",cy:"40",r:ci-8,fill:"#0b0d14",stroke:"rgba(255,255,255,0.06)"}),n?r.jsx("path",{className:"ach-badge__spark",d:"M40 17c1.4 7 3.7 11.6 7.2 15.1S54.8 37.6 61 39c-6.2 1.4-10.3 3.5-13.8 7S41 55.1 40 62c-1-6.9-3.7-11.6-7.2-15.1S25.2 40.4 19 39c6.2-1.4 10.3-3.5 13.8-7S39 24 40 17Z",fill:`url(#${d})`}):r.jsx("path",{d:"M40 30a7 7 0 0 0-7 7v3h-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V42a2 2 0 0 0-2-2h-1v-3a7 7 0 0 0-7-7Zm0 3.4a3.6 3.6 0 0 1 3.6 3.6v3h-7.2v-3A3.6 3.6 0 0 1 40 33.4Z",fill:"rgba(255,255,255,0.28)"})]}),r.jsx("div",{className:"ach-badge__name",children:i}),r.jsx("div",{className:"ach-badge__meta",children:n?"Unlocked":`${l}/${c}`})]})}function xj(){const[e,t]=u.useState({highestStreak:0,cardsReviewed:0,mockTestsTaken:0,generations:0});u.useEffect(()=>{const a=Kn("userInfo",{}),i=y4();t({highestStreak:(a==null?void 0:a.highestStreakScore)??0,cardsReviewed:i.cardsReviewed||0,mockTestsTaken:i.mockTestsTaken||0,generations:i.generations||0})},[]);const n=mj(e),s=n.filter(a=>a.unlocked).length;return r.jsxs("div",{className:"ach-wrap",children:[r.jsxs("div",{className:"ach-head",children:[r.jsxs("div",{children:[r.jsx("p",{className:"hub-eyebrow",children:"Milestones"}),r.jsx("h3",{className:"ach-title",children:"Achievements"})]}),r.jsxs("div",{className:"ach-count",children:[s,r.jsxs("span",{children:["/",n.length]})]})]}),r.jsx("div",{className:"ach-grid",children:n.map((a,i)=>r.jsx(gj,{achievement:a,index:i},a.key))})]})}const vj=[{key:"ai-generator",Icon:Uf,label:"Generator Studio",desc:"Quizzes, tutor, podcast, chat & video"},{key:"media-studio",Icon:Nf,label:"AI Studio",desc:"Image & video generation"},{key:"flashcards",Icon:If,label:"Flashcards",desc:"Spaced-repetition decks"},{key:"mocktest",Icon:Wf,label:"Mock Tests",desc:"Timed practice runs"},{key:"library",Icon:Ay,label:"Library",desc:"Saved notes & bookmarks"},{key:"planner",Icon:Dy,label:"Planner",desc:"Plan your study time"},{key:"discussions",Icon:Bf,label:"Discussions",desc:"Talk it through"}],yj=({pct:e})=>{const n=2*Math.PI*42;return r.jsxs("svg",{viewBox:"0 0 100 100",className:"hub-xp-ring",children:[r.jsx("defs",{children:r.jsxs("linearGradient",{id:"hub-xp-grad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[r.jsx("stop",{offset:"0%",stopColor:"#22d3ee"}),r.jsx("stop",{offset:"100%",stopColor:"#a78bfa"})]})}),r.jsx("circle",{cx:"50",cy:"50",r:42,fill:"none",stroke:"rgba(255,255,255,0.08)",strokeWidth:"7"}),r.jsx("circle",{cx:"50",cy:"50",r:42,fill:"none",stroke:"url(#hub-xp-grad)",strokeWidth:"7",strokeLinecap:"round",strokeDasharray:n,strokeDashoffset:n-n*e/100,transform:"rotate(-90 50 50)",className:"hub-xp-ring__arc"})]})};function bj({onNavigate:e}){const[t,n]=u.useState(null),[s,a]=u.useState({highestStreakScore:0}),[i,o]=u.useState({cardsReviewed:0,mockTestsTaken:0,generations:0}),[l,c]=u.useState(null);u.useEffect(()=>{a(Kn("userInfo",{})),o(y4())},[t]);const d=g=>{c({text:g.body,label:g.title}),n("ai-generator")};if(t==="ai-generator")return r.jsx(ar,{onBack:()=>{c(null),n(null)},children:r.jsx(hj,{initialText:(l==null?void 0:l.text)||"",initialSourceLabel:(l==null?void 0:l.label)||"",onNavigate:g=>{c(null),n(g)}})});if(t==="media-studio")return r.jsx(ar,{onBack:()=>n(null),children:r.jsx(id,{})});if(t==="flashcards")return r.jsx(ar,{onBack:()=>n(null),children:r.jsx(w4,{})});if(t==="mocktest")return r.jsx(ar,{onBack:()=>n(null),children:r.jsx(C4,{})});if(t==="library")return r.jsx(ar,{onBack:()=>n(null),children:r.jsx(dk,{onGenerateFromNote:d})});if(t==="planner")return r.jsx(ar,{onBack:()=>n(null),children:r.jsx(uk,{})});if(t==="discussions")return r.jsx(ar,{onBack:()=>n(null),children:r.jsx(pk,{})});const p=(s==null?void 0:s.highestStreakScore)??0,m=$c(p),f=bw(p),y=ww({highestStreak:p,...i}),h=kw(y),x=P0(h-1),k=P0(h),w=Math.min(100,Math.round((y-x)/(k-x)*100));return r.jsxs("div",{className:"hub-page hub-page--full",children:[r.jsxs("div",{className:"hub-hero",children:[r.jsx("p",{className:"hub-eyebrow",children:"LEARNING HUB"}),r.jsx("h2",{className:"hub-title hub-title--hero",children:"Your progress"}),r.jsxs("div",{className:"hub-hero-grid",children:[r.jsxs("div",{className:"hub-card hub-card--glow hub-hero-main",children:[r.jsxs("div",{className:"hub-row",children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[r.jsxs("div",{className:"hub-xp-ring-wrap",children:[r.jsx(yj,{pct:w}),r.jsxs("div",{className:"hub-xp-ring-label",children:["Lv ",h]})]}),r.jsxs("div",{children:[r.jsx("div",{className:"hub-tier-name",children:m.name}),r.jsxs("div",{className:"hub-tier-xp",children:[y," XP"]})]})]}),r.jsxs("div",{className:"hub-badge-pill hub-badge-pill--flame",children:[r.jsx(Fy,{size:13,strokeWidth:2.4})," ",p,"d best streak"]})]}),f&&r.jsxs("div",{className:"hub-tier-next",children:[f.min-p," more streak day",f.min-p===1?"":"s"," to reach ",r.jsx("strong",{children:f.name})]})]}),r.jsxs("div",{className:"hub-card hub-card--glow hub-stat-card",children:[r.jsx("div",{className:"hub-stat-num",children:i.cardsReviewed}),r.jsx("div",{className:"hub-stat-label",children:"Cards reviewed"})]}),r.jsxs("div",{className:"hub-card hub-card--glow hub-stat-card",children:[r.jsx("div",{className:"hub-stat-num",children:i.mockTestsTaken}),r.jsx("div",{className:"hub-stat-label",children:"Mock tests taken"})]})]})]}),r.jsx("p",{className:"hub-eyebrow hub-section-label",children:"EXPLORE"}),r.jsx("div",{className:"hub-nav-grid hub-nav-grid--full",children:vj.map(({key:g,Icon:b,label:j,desc:C})=>r.jsxs("button",{className:"hub-nav-tile hub-nav-tile--full",onClick:()=>n(g),children:[r.jsx("span",{className:"hub-nav-tile-icon hub-nav-tile-icon--full",children:r.jsx(b,{size:22,strokeWidth:1.7})}),r.jsx("span",{className:"hub-nav-tile-label",children:j}),r.jsx("span",{className:"hub-nav-tile-desc",children:C})]},g))}),r.jsx(xj,{})]})}function ar({children:e,onBack:t}){return r.jsxs("div",{className:"hub-backwrap",children:[r.jsx("div",{className:"hub-backwrap__bar",children:r.jsx("button",{className:"hub-btn hub-btn-ghost",onClick:t,children:"← Hub"})}),e]})}const wj=`
.sl-wrap {
  padding:  24px;
  padding-bottom:150px;
  color: #eef2ff;
}
.sl-head {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 4px;
}
.sl-head-icon {
  width: 34px; height: 34px; flex: none;
  filter: drop-shadow(0 0 6px rgba(34,211,238,0.55));
}
.sl-eyebrow {
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
  background: linear-gradient(90deg, #22d3ee, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
}
.sl-title { margin: 2px 0 18px; font-size: 22px; font-weight: 800; }
.sl-search {
  display: flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(148,163,255,0.18);
  border-radius: 14px;
  padding: 10px 14px;
  margin-bottom: 16px;
}
.sl-search input {
  background: transparent; border: none; outline: none;
  color: #eef2ff; font-size: 13px; width: 100%;
}
.sl-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 12px;
}
.sl-card {
  position: relative;
  cursor: pointer;
  border-radius: 16px;
  padding: 16px;
  background: linear-gradient(160deg, rgba(34,211,238,0.07), rgba(167,139,250,0.07));
  border: 1px solid rgba(148,163,255,0.16);
  overflow: hidden;
  transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease;
}
.sl-card:hover {
  transform: translateY(-3px);
  border-color: rgba(103,232,249,0.55);
  box-shadow: 0 10px 30px rgba(34,211,238,0.15);
}
.sl-card::before {
  content: "";
  position: absolute; inset: 0;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(120deg, #22d3ee, #a78bfa, #22d3ee);
  background-size: 220% 220%;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity .18s ease;
  animation: sl-flow 4s linear infinite;
}
.sl-card:hover::before { opacity: 1; }
@keyframes sl-flow { to { background-position: 220% 50%; } }
.sl-card-top { display: flex; align-items: flex-start; gap: 10px; }
.sl-card-icon { width: 22px; height: 22px; flex: none; margin-top: 2px; color: #67e8f9; }
.sl-card-name {
  font-weight: 700; font-size: 14px; line-height: 1.3;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
}
.sl-card-meta { margin-top: 10px; font-size: 11px; color: rgba(238,242,255,0.55); display: flex; justify-content: space-between; }
.sl-empty {
  text-align: center; padding: 60px 20px; color: rgba(238,242,255,0.6);
}
.sl-empty svg { width: 64px; height: 64px; margin-bottom: 14px; opacity: 0.8; }
`;function kj(e){if(!e)return"";const t=Math.floor((Date.now()-e)/1e3);return t<60?"just now":t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:`${Math.floor(t/86400)}d ago`}function jj(){const[e,t]=u.useState([]),[n,s]=u.useState(""),a=ma();u.useEffect(()=>{t(Pj())},[]);const i=u.useMemo(()=>{const o=n.trim().toLowerCase();return o?e.filter(l=>(l.courseName||"").toLowerCase().includes(o)):e},[e,n]);return r.jsxs("div",{className:"sl-wrap",children:[r.jsx("style",{children:wj}),r.jsxs("div",{className:"sl-head",children:[r.jsxs("svg",{className:"sl-head-icon",viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M4 4.5A2.5 2.5 0 0 1 6.5 2H15l5 5v13.5A2.5 2.5 0 0 1 17.5 23h-11A2.5 2.5 0 0 1 4 20.5v-16Z",stroke:"#22d3ee",strokeWidth:"1.4"}),r.jsx("path",{d:"M15 2v4.5A1.5 1.5 0 0 0 16.5 8H20",stroke:"#a78bfa",strokeWidth:"1.4"}),r.jsx("path",{d:"M8 13h8M8 17h5",stroke:"#a78bfa",strokeWidth:"1.4",strokeLinecap:"round"})]}),r.jsx("div",{children:r.jsx("p",{className:"sl-eyebrow",children:"Locally saved"})})]}),r.jsx("h2",{className:"sl-title",children:"Your solutions"}),r.jsxs("div",{className:"sl-search",children:[r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",style:{opacity:.6,flex:"none"},children:[r.jsx("circle",{cx:"11",cy:"11",r:"7",stroke:"#eef2ff",strokeWidth:"1.6"}),r.jsx("path",{d:"m20 20-3.2-3.2",stroke:"#eef2ff",strokeWidth:"1.6",strokeLinecap:"round"})]}),r.jsx("input",{placeholder:"Filter your saved solutions by course…",value:n,onChange:o=>s(o.target.value)})]}),i.length===0?r.jsxs("div",{className:"sl-empty",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M4 4.5A2.5 2.5 0 0 1 6.5 2H15l5 5v13.5A2.5 2.5 0 0 1 17.5 23h-11A2.5 2.5 0 0 1 4 20.5v-16Z",stroke:"#a78bfa",strokeWidth:"1.2"}),r.jsx("path",{d:"M15 2v4.5A1.5 1.5 0 0 0 16.5 8H20",stroke:"#22d3ee",strokeWidth:"1.2"})]}),r.jsx("div",{children:e.length===0?"You haven't opened a solution yet — once you do, it'll be saved here for instant, offline access.":"No saved solutions match that search."})]}):r.jsx("div",{className:"sl-grid",children:i.map(o=>r.jsxs("div",{className:"sl-card",onClick:()=>a(`/dashboard/solution/${o.namedfile}`),children:[r.jsxs("div",{className:"sl-card-top",children:[r.jsxs("svg",{className:"sl-card-icon",viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M4 4.5A2.5 2.5 0 0 1 6.5 2H15l5 5v13.5A2.5 2.5 0 0 1 17.5 23h-11A2.5 2.5 0 0 1 4 20.5v-16Z",stroke:"currentColor",strokeWidth:"1.4"}),r.jsx("path",{d:"M15 2v4.5A1.5 1.5 0 0 0 16.5 8H20",stroke:"currentColor",strokeWidth:"1.4"})]}),r.jsx("div",{className:"sl-card-name",children:o.courseName||"Untitled solution"})]}),r.jsxs("div",{className:"sl-card-meta",children:[r.jsx("span",{children:o.dataerror?"Had an issue":"Ready to view"}),r.jsx("span",{children:kj(o.savedAt)})]})]},o.namedfile))})]})}const Cj={hub:bj,solutions:jj,general:jw,nss:Bw,referal:Rw,products:Hw,earn:Nw,leaderboard:zw,advert:Uw,job:Vw};function Sj({currentView:e,setcurrentView:t}){const n=()=>{confirm("Confirm to Leave")&&(co(),location.reload())},s=Cj[e];return r.jsxs("div",{className:"profile",children:[r.jsx("div",{className:"wrap",children:s?r.jsx(s,{onNavigate:t}):r.jsx(Nj,{})}),r.jsxs("div",{className:"onmenu",children:[r.jsx("div",{onClick:n,className:"in",children:r.jsxs("div",{className:"insp",children:[r.jsx("div",{className:"prem4"}),r.jsx("span",{className:"fnav",children:r.jsx("i",{className:"fa fa-power-off fa-dark"})}),"Logout"]})}),r.jsx("div",{onClick:()=>{t("hub")},className:"in",children:r.jsxs("div",{className:"insp",children:[r.jsx("div",{className:"prem4"}),r.jsx("span",{className:"fnav",children:r.jsx("i",{className:"fa fa-graduation-cap fa-dark"})}),"Learning Hub"]})}),r.jsx("div",{onClick:()=>{t("solutions")},className:"in",children:r.jsxs("div",{className:"insp",children:[r.jsx("div",{className:"prem4"}),r.jsx("span",{className:"fnav",children:r.jsx("i",{className:"fa fa-folder-open fa-dark"})}),"Solutions"]})}),r.jsx("div",{onClick:()=>{t("general")},className:"in",children:r.jsxs("div",{className:"insp",children:[r.jsx("div",{className:"prem4"}),r.jsx("span",{className:"fnav",children:r.jsx("i",{className:"fa fa-windows fa-dark"})}),"General"]})}),r.jsx("div",{onClick:()=>{t("referal")},className:"in",children:r.jsxs("div",{className:"insp",children:[r.jsx("div",{className:"prem4"}),r.jsx("span",{className:"fnav",children:r.jsx("i",{className:"fa fa-users fa-dark"})}),"Referal"]})}),r.jsx("div",{onClick:()=>{t("earn")},className:"in",children:r.jsxs("div",{className:"insp",children:[r.jsx("div",{className:"prem4"}),r.jsx("span",{className:"fnav",children:r.jsx("i",{className:"fa fa-dollar fa-dark"})}),"Earn"]})}),r.jsx("div",{onClick:()=>{t("nss")},className:"in",children:r.jsxs("div",{className:"insp",children:[r.jsx("div",{className:"prem4"}),r.jsx("span",{className:"fnav",children:r.jsx("i",{className:"fa fa-briefcase fa-dark"})}),"NSS guide"]})}),r.jsx("div",{onClick:()=>{t("products")},className:"in",children:r.jsxs("div",{className:"insp",children:[r.jsx("div",{className:"prem4"}),r.jsx("span",{className:"fnav",children:r.jsx("i",{className:"fa fa-star fa-dark"})}),"Solve with AI"]})}),r.jsx("div",{onClick:()=>{t("advert")},className:"in",children:r.jsxs("div",{className:"insp",children:[r.jsx("div",{className:"prem4"}),r.jsx("span",{className:"fnav",children:r.jsx("i",{className:"fa fa-shop fa-dark"})}),"Advertise"]})}),r.jsx("div",{onClick:()=>{t("job")},className:"in",children:r.jsxs("div",{className:"insp",children:[r.jsx("div",{className:"prem4"}),r.jsx("span",{className:"fnav",children:r.jsx("i",{className:"fa fa-certificate fa-dark"})}),"Job guide"]})}),r.jsx("div",{onClick:()=>{t("leaderboard")},className:"in",children:r.jsxs("div",{className:"insp",children:[r.jsx("div",{className:"prem4"}),r.jsx("span",{className:"fnav",children:r.jsx("i",{className:"fa fa-medal fa-dark"})}),"leaderboard"]})})]})]})}const Nj=()=>r.jsx("div",{className:"userlevel",children:r.jsxs("div",{className:"missing",children:[r.jsxs("div",{className:"missingtext",children:[r.jsx(Yh,{className:"micon"}),"To go back, click the search box"]}),r.jsx("div",{className:"construction",children:"♒"}),r.jsx("div",{className:"missingtext",children:"Use the links below to navigate through this space"})]})}),_j=({setselectModel:e,selectlink:t,getpayload:n,setselectedVal:s,selectedVal:a,credits:i})=>{const[o,l]=u.useState({}),[c,d]=u.useState(null),[p,m]=u.useState(!1),[f,y]=u.useState(""),[h,x]=u.useState(!1),k=u.useRef(null),w=u.useRef(null),g=_=>{_.preventDefault(),n(t),e(!1)},b=()=>{e(!1)},j=()=>{m(!1),d(null),fetch(`${oa}/api/files/models`).then(_=>{if(!_.ok)throw new Error(`HTTP error! status: ${_.status}`);return _.json()}).then(_=>{!_||typeof _!="object"||Array.isArray(_)?(console.warn("Invalid response structure:",_),d("Invalid model data received"),l({})):Object.keys(_).length===0?(d("No models are currently available. Please retry."),l({})):(l(_),d(null)),m(!0)}).catch(_=>{console.error("Error fetching models:",_),d(_.message||"Failed to load models. Please check your connection."),m(!0)})},C=_=>{_.preventDefault(),d("Try again.")};u.useEffect(()=>{j()},[]);const E=u.useMemo(()=>{const _=f.trim().toLowerCase();return Object.entries(o).filter(([z])=>!_||z.toLowerCase().includes(_))},[o,f]),S=u.useMemo(()=>{const _=Object.entries(o).find(([,z])=>z===a);return(_==null?void 0:_[0])??""},[o,a]);u.useEffect(()=>{if(!h)return;const _=B=>{k.current&&!k.current.contains(B.target)&&x(!1)},z=B=>{var ee;B.key==="Escape"&&(x(!1),(ee=w.current)==null||ee.blur())};return document.addEventListener("mousedown",_),document.addEventListener("keydown",z),()=>{document.removeEventListener("mousedown",_),document.removeEventListener("keydown",z)}},[h]);const N=(_,z)=>{s(z),y(_),x(!1)};return r.jsx("div",{className:"mselect",children:r.jsxs("div",{className:"mcontainer",children:[r.jsx("div",{className:"rbackdrop",style:{transform:"rotate(180deg)",opacity:.3,height:"600px"}}),r.jsx("img",{src:A1,className:"racoonload",style:{borderRadius:0,height:150},alt:""}),r.jsx("div",{className:"closeme",onClick:b,children:r.jsx(bc,{})}),r.jsxs("div",{className:"mcredits",children:[r.jsx("span",{className:"mcredits-icon",children:r.jsx(Qx,{})}),r.jsx("strong",{className:"mcredits-count",children:i??0}),r.jsx("span",{className:"mcredits-label",children:"credits"})]}),r.jsxs("div",{className:"mchoice",children:[r.jsx("span",{className:"fnav",children:r.jsx("span",{className:"solstar bga mchoice-icon",children:r.jsx(Fi,{})})}),r.jsx("br",{}),r.jsx("span",{className:"mchoice",style:{fontSize:20,fontWeight:700},children:"Choose AI Model"})]}),r.jsxs("div",{className:"mchoice2",children:[r.jsx("div",{className:"fnav",children:r.jsx(q7,{})}),"Proceed with your prefered AI model:"]}),r.jsx("span",{className:"mchoice3",children:" "+(S||a||"")}),c?r.jsxs("div",{className:"mtop",children:[r.jsxs("div",{className:"list",style:{height:60,display:"flex",alignItems:"center",gap:8,color:"#ff6b6b",paddingRight:"10px"},children:[r.jsx(fv,{})," ",c]}),r.jsx("div",{style:{color:"white",cursor:"pointer"},className:"download",onClick:j,children:"Retry"})]}):Object.keys(o).length>0?r.jsxs("div",{className:"mmodel-picker",ref:k,children:[h&&r.jsx("div",{className:"mmodel-dropdown",role:"listbox",children:E.length>0?E.map(([_,z])=>{const B=z===a;return r.jsxs("button",{type:"button",role:"option","aria-selected":B,className:`mmodel-item ${B?"mmodel-item--active":""}`,onMouseDown:ee=>{ee.preventDefault(),N(_,z)},children:[r.jsx("span",{className:"mmodel-item__icon",children:r.jsx(Fi,{})}),r.jsx("span",{className:"mmodel-item__name",children:_}),B&&r.jsx(Uh,{className:"mmodel-item__check"})]},_)}):r.jsxs("div",{className:"mmodel-empty",children:["No models match “",f,"”"]})}),r.jsxs("div",{className:"mmodel-search",children:[r.jsx(Bi,{className:"mmodel-search__icon"}),r.jsx("input",{ref:w,type:"text",inputMode:"search",className:"mmodel-search__input",placeholder:"Search models…",value:f,onFocus:_=>{x(!0),_.target.select()},onChange:_=>{y(_.target.value),x(!0)}}),f&&r.jsx("button",{type:"button",className:"mmodel-search__clear",onMouseDown:_=>_.preventDefault(),onClick:()=>{var _;y(""),(_=w.current)==null||_.focus()},"aria-label":"Clear search",children:r.jsx(bc,{})})]})]}):r.jsx("div",{className:"mtop",children:r.jsx("div",{className:"list",style:{height:60,display:"flex",alignItems:"center",justifyContent:"center"},children:p?"No models available":"Loading models..."})}),r.jsxs("button",{className:"mbottom download",style:{color:"white"},onClick:t&&a?g:C,children:[r.jsx("span",{className:"fnav",children:r.jsx(Hh,{})}),"continue",r.jsx("span",{className:"prem4"})]}),r.jsx("style",{children:`
            .mcredits {
                position: absolute;
                top: 14px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 3;
                display: flex;
                align-items: center;
                gap: 6px;
                background: #1e1e2a;
                border: 1px solid #2e2e3a;
                border-radius: 20px;
                padding: 5px 12px;
                font-size: 12px;
                color: #fbbf24;
            }
            .mcredits-icon { font-size: 12px; display: flex; align-items: center; }
            .mcredits-count { color: #fff; font-weight: 700; }
            .mcredits-label { color: #94a3b8; }
            .mchoice-icon { display: inline-flex; align-items: center; justify-content: center; font-size: 20px; }

            /* ── Combobox model picker ── */
            .mmodel-picker {
                position: relative;
                width: 100%;
                box-sizing: border-box;
            }

            .mmodel-search {
                display: flex;
                align-items: center;
                gap: 8px;
                background: #1a1a2242;
                border: 1px solid #2a2a3841;
                border-radius: 10px;
                padding: 10px 14px;
                margin:0 auto;
                width:calc(100% - 60px);
                box-sizing: border-box;
                position: relative;
                z-index: 1;
            }
            .mmodel-search__icon { color: #666; font-size: 14px; flex-shrink: 0; }
            .mmodel-search__input {
                flex: 1;
                background: transparent;
                border: none;
                outline: none;
                color: #e8e8e8;
                font-size: 15px;
                min-width: 0;
            }
            .mmodel-search__input::placeholder { color: #fcf7f778; }
            .mmodel-search__clear {
                background: transparent;
                border: none;
                color: #777;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 4px;
                flex-shrink: 0;
            }
            .mmodel-search__clear:hover { color: #fff; }

            /* Floating panel, positioned to sit on top of (above) the search
               bar, capped at 100px so it's always a compact scrollable strip
               rather than a big list taking over the screen. */
            .mmodel-dropdown {
                position: absolute;
                left: 0;
                right: 0;
                bottom: calc(100% + 6px);
                max-height: 300px;
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
                display: flex;
                flex-direction: column;
                gap: 4px;
                background: #17171d;
                border: 1px solid #2a2a38;
                border-radius: 10px;
                padding: 6px;
                box-sizing: border-box;
                box-shadow: 0 -10px 28px rgba(0,0,0,.5);
                z-index: 30;
                animation: mmodel-pop .12s ease;
            }
            .mmodel-dropdown::-webkit-scrollbar { width: 4px; }
            .mmodel-dropdown::-webkit-scrollbar-thumb { background: #2a2a38; border-radius: 4px; }

            @keyframes mmodel-pop {
                from { opacity: 0; transform: translateY(4px); }
                to   { opacity: 1; transform: translateY(0); }
            }

            .mmodel-item {
                display: flex;
                align-items: center;
                gap: 8px;
                width: 100%;
                box-sizing: border-box;
                background: transparent;
                border: 1px solid transparent;
                border-radius: 8px;
                padding: 8px 8px;
                min-height: 34px;
                color: #d5d5dd;
                font-size: 13px;
                text-align: left;
                cursor: pointer;
                flex-shrink: 0;
                transition: background .12s, border-color .12s, color .12s;
            }
            .mmodel-item:hover { background: #1d1d26; border-color: #2e2e3a; }
            .mmodel-item--active {
                background: #1e1b4b;
                border-color: #4338ca;
                color: #c7d2fe;
            }
            .mmodel-item__icon {
                flex-shrink: 0;
                width: 22px;
                height: 22px;
                border-radius: 6px;
                background: rgba(255,255,255,.06);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 11px;
                color: #9ca3af;
            }
            .mmodel-item--active .mmodel-item__icon { background: rgba(99,102,241,.25); color: #a5b4fc; }
            .mmodel-item__name { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
            .mmodel-item__check { color: #818cf8; font-size: 13px; flex-shrink: 0; }

            .mmodel-empty {
                padding: 10px 8px;
                text-align: center;
                color: #666;
                font-size: 12px;
            }
        `})]})})};function Ej(){try{const e=localStorage.getItem("userInfo");return e?JSON.parse(e):null}catch{return null}}const qi="solutionCache:";function Tj(e,t){try{localStorage.setItem(qi+e,JSON.stringify({...t,savedAt:Date.now()}))}catch{}}function zj(e){try{const t=localStorage.getItem(qi+e);return t?JSON.parse(t):null}catch{return null}}function Pj(){try{const e=[];for(let t=0;t<localStorage.length;t++){const n=localStorage.key(t);if(!n||!n.startsWith(qi))continue;const s=JSON.parse(localStorage.getItem(n));if(!s)continue;const a=n.slice(qi.length);e.push({...s,namedfile:a})}return e.sort((t,n)=>(n.savedAt??0)-(t.savedAt??0))}catch{return[]}}function Ij(e){return typeof e!="string"||!e.includes("h3")?null:e}function G0(e){return e.split(/([oO])/g).map((t,n)=>/^[oO]$/.test(t)?"🔮":t)}const ml=({size:e=16})=>r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"#fbbf24",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:r.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),Rj=({size:e=16})=>r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"#fbbf24",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[r.jsx("rect",{x:"2",y:"15",width:"20",height:"5",rx:"1"}),r.jsx("rect",{x:"3.5",y:"10.5",width:"17",height:"5",rx:"1"}),r.jsx("rect",{x:"5",y:"6",width:"14",height:"5",rx:"1"}),r.jsx("circle",{cx:"12",cy:"8.5",r:"1.4"})]}),Oj=({errorMessage:e,setfetchError:t})=>(mr.useEffect(()=>{const n=setTimeout(()=>t(!1),4e3);return()=>clearTimeout(n)},[t]),r.jsx("div",{className:"toast",children:r.jsxs("div",{className:"successmessage",children:[r.jsx(wg,{style:{color:"#ff4d4f",marginRight:6}}),"Sorry: ",r.jsx(Gh,{style:{margin:"0 4px"}}),e.toLowerCase()]})})),gl=()=>{const{find:e,setfind:t,payload:n,bar:s,courseName:a,setcourseName:i,credits:o,setcredits:l,pdflink:c,setpdflink:d,actualDlink:p,setactualDlink:m,dataerror:f,setdataerror:y,selectedVal:h,setselectedVal:x,setRefreshing:k,refreshing:w,NetworkError:g,setsearching:b,writeStoredUser:j}=ef(),{view:C,filename:E}=M6(),S=ma(),N=C??"",_=P=>S(`/dashboard/${P}`),[z,B]=u.useState(!1),[ee,je]=u.useState(!1),[ne,Ce]=u.useState(""),[A,q]=u.useState(!1),[I,O]=u.useState(""),D=!!E,[Z,G]=u.useState("loading..."),[Ve,Se]=u.useState(""),[Ge,Ne]=u.useState(!0),[ct,vt]=u.useState(!!C);u.useEffect(()=>{C&&vt(!0)},[C]);const[yt,tt]=u.useState(null),[Ye,he]=u.useState([]),[pn,Ae]=u.useState(!1),[_e,Dt]=u.useState(""),Jt=async P=>{var ce;tt(P),he([]),Dt(""),Ae(!0);try{const J=await Pe(`${X}/api/v1/papers/folder-contents?folderPath=${encodeURIComponent(P.folderPath)}`,{method:"GET"});he(Array.isArray(J)?J:(J==null?void 0:J.papers)??((ce=J==null?void 0:J.data)==null?void 0:ce.papers)??[])}catch(J){Dt(J.message||"Couldn't load papers for this course.")}finally{Ae(!1)}},T=()=>{tt(null),he([]),Dt("")};u.useEffect(()=>{tt(null),he([]),Dt("")},[e]);const W=()=>{confirm("Confirm to Leave")&&(co(),location.reload())},H=(P,ce)=>{i(ce),q(!0),O(P)},Y=u.useRef(new Set),oe=u.useCallback(async(P,ce,J)=>{var En;Y.current.add(P);const He=Ej(),us=(He==null?void 0:He.pStatus)??null;G("loading..."),y(""),B(!0),je(!1),Ce(""),J&&i(J);const nr=`/api/files/download/${P}?preview=true`,Tr=`/api/files/download/${P}`;d(nr),m(Tr),B(!1),S(`/dashboard/solution/${P}`);try{const Ft={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fileId:P,selectedVal:ce,premiumstatus:us??"premiumstatus",courseName:J??a})},Qe=await Pe(`${X}/api/v1/request/solutions/by-id`,Ft);if(!Qe)throw new Error("No response from solutions API");if(Qe!=null&&Qe.error){const Xt=Qe.error.details??Qe.error.message??"Failed to fetch solution";throw new Error(Xt)}const dt=((En=Qe.api_response)==null?void 0:En.data)??Qe,zr=Qe.remaining_credits??0;l(zr),j({credits:zr}),dt.directDownload&&m(dt.directDownload);let Tn="",hn="";if(dt.error)hn=dt.error,y(hn);else{dt.raw&&Se(dt.raw);const Xt=Ij(dt.extractedText??"");Xt?(Tn=Xt,G(Xt)):(hn=dt.extractedText??"Unexpected response format.",y(hn),G(""))}Tj(P,{courseName:J??a,extract:Tn,dataerror:hn,raw:dt.raw??"",pdflink:nr,actualDlink:dt.directDownload??Tr,selectedVal:ce})}catch(Ft){const Qe=Ft instanceof Error?Ft.message:String(Ft);y("Extraction failed: "+Qe),je(!0),Ce(Qe),G("")}finally{B(!1)}},[S,a,l,y,d,m,j]),F=u.useCallback(P=>{q(!1),oe(P,h,a)},[oe,h,a]);u.useEffect(()=>{if(!E||Y.current.has(E))return;const P=zj(E);if(P){Y.current.add(E),i(P.courseName||""),G(P.extract||""),y(P.dataerror||""),Se(P.raw||""),d(P.pdflink||"https://notfound.com"),m(P.actualDlink||"https://notfound.com"),P.selectedVal&&x(P.selectedVal);return}oe(E,h,null)},[E]);const ve=e.trim()===""||n.length===0;return r.jsxs("div",{className:"searchlist",children:[D?r.jsx(hw,{actualDlink:p,raw:Ve,pdflink:c,mainlogo:on,setshowpdf:()=>S("/dashboard"),dataerror:f,credits:o,courseName:a,extract:Z,selectedVal:h,onRegenerate:P=>{const ce=P||h;P&&x(P),q(!1),oe(I||E,ce,a)},onCreditsChange:P=>{l(P),j({credits:P})}}):r.jsxs("div",{children:[r.jsxs("div",{className:"searchnav",children:[r.jsx("div",{className:"closesearch",onClick:()=>{b(!1),s.current.value=""},children:r.jsx("div",{className:"bbtn",children:r.jsxs("div",{className:"ba",children:[r.jsx(kr,{}),r.jsx("span",{className:"prem3"})]})})}),r.jsx(Eh,{handleMenu:P=>vt(P),eprop:"all",setsearching:b,bar:s,find:e,setRefreshing:k,setfind:t})]}),r.jsxs("div",{className:"bothsides",children:[r.jsx("div",{className:`sidemenubar ${Ge?"collapsed":""}`,children:r.jsxs("div",{className:"mymenubox",onClick:()=>vt(!0),"data-open":ct,children:[r.jsx("div",{className:"rbackdrop"}),r.jsx("img",{className:"racoonp",src:mw,alt:""}),r.jsx("div",{className:"collapse-toggle",onClick:P=>{P.stopPropagation(),Ne(ce=>!ce)},children:Ge?r.jsx(N9,{}):r.jsx(w9,{})}),r.jsx("div",{className:"firstitem",children:r.jsx(Re,{to:"/payment",target:"_blank",rel:"noopener noreferrer",children:r.jsxs("div",{className:"paid",children:[r.jsx("div",{className:"fnav",children:r.jsx(ml,{})}),r.jsx(Di,{class:"fnav-money"}),r.jsx("span",{className:"menu-label",children:"Upgrade"}),r.jsx("div",{className:"fnav",children:r.jsx(ml,{})})]})})}),r.jsx("div",{className:"mymenu",children:[{view:"hub",icon:r.jsx(ev,{className:"micon"}),label:"Learning Hub",badge:r.jsx($8,{})},{view:"solutions",icon:r.jsx(V1,{className:"micon"}),label:"Solutions"},{view:"general",icon:r.jsx(F8,{className:"micon"}),label:"General"},{view:"products",icon:r.jsx(b7,{className:"micon"}),label:"Our Products",badge:r.jsx(ml,{size:14})},{view:"leaderboard",icon:r.jsx($7,{className:"micon"}),label:"Leaderboard"},{view:"referal",icon:r.jsx("i",{style:{fontSize:10},className:"fa fa-users micon"}),label:"Referal Details"},{view:"earn",icon:r.jsx(Jg,{className:"micon"}),label:"Earn",badge:r.jsx(Rj,{size:14})},{view:"advert",icon:r.jsx(hx,{className:"micon"}),label:"Advertise your business",badge:r.jsx(Px,{})},{view:"nss",icon:r.jsx("i",{className:"fa fa-book micon"}),label:"NSS Guide"},{view:"job",icon:r.jsx(Zh,{className:"micon"}),label:"Job Application Guide"}].map(({view:P,icon:ce,label:J,badge:He})=>r.jsx("div",{className:`menuitems ${P==N?"active":""}`,onClick:()=>{_(P),vt(!1)},title:Ge?J:void 0,children:r.jsxs("div",{className:"inmenu",children:[r.jsx("span",{children:ce}),r.jsx("small",{className:"menu-label",children:J}),He&&r.jsx("div",{className:"fnav",children:He})]})},P))}),r.jsx("div",{className:"menuitems logout",style:{padding:20},onClick:W,children:r.jsxs("div",{className:"inmenu",children:[r.jsx(p9,{className:"micon"}),r.jsx("span",{className:"menu-label",children:"Logout"})]})})]})}),r.jsxs("div",{className:"mcontent",children:[A&&r.jsx(_j,{setselectedVal:x,selectedVal:h,setselectModel:q,getpayload:F,selectlink:I,credits:o}),r.jsx("div",{className:`menucomp${N==="hub"?" menucomp--hub":""}`,style:ct?{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",pointerEvents:"all"}:{clipPath:"polygon(0 0, 0% 0, 0% 100%, 0 100%)",pointerEvents:"none"},children:r.jsx("div",{className:"menuhead",onClick:P=>P.stopPropagation(),children:r.jsx(Sj,{currentView:N,setcurrentView:_})})}),r.jsx("div",{className:"listcontent",children:yt?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"filtered mn4",style:{margin:"0 0 10px",width:"100%",cursor:"pointer"},onClick:T,children:[r.jsx(kr,{style:{marginRight:8}}),"Back to results — ",r.jsx("strong",{style:{marginLeft:4},children:yt.courseName})]}),pn?r.jsx("div",{className:"filtered mn4",style:{margin:0,width:"100%"},children:r.jsxs("div",{className:"ready",children:[r.jsx("div",{className:"big",children:r.jsx(wc,{spin:!0})}),r.jsx("div",{className:"desc err4",children:r.jsx("span",{className:"nerror",children:"Loading papers…"})})]})}):_e?r.jsx("div",{className:"filtered mn4",style:{margin:0,width:"100%"},children:r.jsxs("div",{className:"ready",children:[r.jsx("div",{className:"big",children:r.jsx(Gh,{style:{opacity:.3}})}),r.jsx("div",{className:"desc err4",children:r.jsx("span",{className:"nerror",children:_e})})]})}):Ye.length>0?Ye.map((P,ce)=>r.jsxs("div",{className:"filtered",title:`${yt.courseName} — ${P.examYear??""} ${P.semester??""}`,"data-ptext":"title...","data-texts":"details...",children:[r.jsx("img",{src:T0,alt:"",className:"imgthumb"}),r.jsxs("div",{className:"pinfo",children:[r.jsx("div",{className:"titles",children:G0(yt.courseName)}),r.jsx("div",{className:"describe",children:[P.examYear,P.semester,P.campus].filter(Boolean).join(" · ")})]}),r.jsxs("div",{className:"download",onClick:()=>H(P.driveFileId,yt.courseName),children:[r.jsx(Vu,{style:{marginRight:"5px"}})," open",r.jsx("span",{className:"prema"})]})]},P.driveFileId??ce)):r.jsx("div",{className:"filtered mn4",style:{margin:0,width:"100%"},children:r.jsxs("div",{className:"ready",children:[r.jsx("div",{className:"big",children:r.jsx(Bi,{style:{opacity:".1"}})}),r.jsx("div",{className:"desc err4",children:r.jsx("span",{className:"nerror",children:"No papers found for this course."})})]})})]}):!ve&&n.length>0?n.map((P,ce)=>{var J;return r.jsxs("div",{className:"filtered",title:P.courseName,"data-ptext":"title...","data-texts":"details...",children:[r.jsx("img",{src:T0,alt:"",className:"imgthumb"}),r.jsxs("div",{className:"pinfo",children:[r.jsx("div",{className:"titles",children:G0(P.courseName)}),r.jsxs("div",{className:"describe",children:[P.department?`${P.department} · `:"",P.paperCount," paper",P.paperCount===1?"":"s",(J=P.examYears)!=null&&J.length?` (${P.examYears.join(", ")})`:""]})]}),r.jsxs("div",{className:"download",onClick:()=>Jt(P),children:[r.jsx(Vu,{style:{marginRight:"5px"}})," open",r.jsx("span",{className:"prema"})]})]},P.folderPath??ce)}):r.jsx("div",{className:"filtered mn4",style:{margin:0,width:"100%"},"data-ptext":"title...","data-texts":"details...",children:r.jsxs("div",{className:"ready",children:[r.jsx("div",{className:"big",children:w?r.jsx(wc,{spin:!0}):r.jsx(Bi,{style:{opacity:".1"}})}),r.jsx("div",{}),r.jsxs("div",{className:"desc err4",children:[r.jsx("div",{className:"fnav2",style:{padding:5}}),r.jsx("span",{className:"nerror",children:w?"Searching…":g})]})]})})})]})]})]}),ee&&r.jsx(Oj,{setfetchError:je,errorMessage:ne}),r.jsx(ss,{opacity:z?1:0,indexed:z?100:-100,mainlogo:on})]})};jy();const $j=()=>{const[e,t]=u.useState(0);return r.jsx(s5,{basename:"/",children:r.jsx(Tv,{children:r.jsxs(J6,{children:[r.jsx(zt,{path:"/",element:r.jsx(zv,{})}),r.jsx(zt,{path:"/contact",element:r.jsx($v,{})}),r.jsx(zt,{path:"/reset-password",element:r.jsx(hy,{})}),r.jsx(zt,{path:"/login",element:r.jsx(ky,{})}),r.jsx(zt,{path:"/about",element:r.jsx(Rv,{})}),r.jsx(zt,{path:"/dashboard",element:r.jsx(gl,{})}),r.jsx(zt,{path:"/dashboard/solution/:filename",element:r.jsx(gl,{})}),r.jsx(zt,{path:"/dashboard/:view",element:r.jsx(gl,{})}),r.jsx(zt,{path:"/payment",element:r.jsx(cy,{setcredits:t})}),r.jsx(zt,{path:"/policy_and_terms",element:r.jsx(tb,{})}),r.jsx(zt,{path:"*",element:r.jsx(Lv,{})})]})})})};vl.createRoot(document.getElementById("root")).render(r.jsx(mr.StrictMode,{children:r.jsx($j,{})}));export{Zt as _,Y0 as a,Aj as c,Mj as g};
