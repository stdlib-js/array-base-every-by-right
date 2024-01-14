// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).everyByRight=e()}(this,(function(){"use strict";var r="function";var e={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function t(r){var t=e[r];return"function"==typeof t?t:e.default}var n={float64:function(r,e,t){r[e]=t},float32:function(r,e,t){r[e]=t},int32:function(r,e,t){r[e]=t},int16:function(r,e,t){r[e]=t},int8:function(r,e,t){r[e]=t},uint32:function(r,e,t){r[e]=t},uint16:function(r,e,t){r[e]=t},uint8:function(r,e,t){r[e]=t},uint8c:function(r,e,t){r[e]=t},generic:function(r,e,t){r[e]=t},default:function(r,e,t){r[e]=t}};function i(r){var e=n[r];return"function"==typeof e?e:n.default}var o={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function a(r){var e=o[r];return"function"==typeof e?e:o.default}var u={complex128:function(r,e,t){r.set(t,e)},complex64:function(r,e,t){r.set(t,e)},default:function(r,e,t){r.set(t,e)}};function f(r){var e=u[r];return"function"==typeof e?e:u.default}var l="function"==typeof Object.defineProperty?Object.defineProperty:null;var c=Object.defineProperty;function s(r){return"number"==typeof r}function y(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function p(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+y(i):y(i)+r,n&&(r="-"+r)),r}var h=String.prototype.toLowerCase,g=String.prototype.toUpperCase;function m(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!s(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=p(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=p(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===g.call(r.specifier)?g.call(t):h.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function w(r){return"string"==typeof r}var v=Math.abs,b=String.prototype.toLowerCase,d=String.prototype.toUpperCase,E=String.prototype.replace,A=/e\+(\d)$/,T=/e-(\d)$/,_=/^(\d+)$/,x=/^(\d+)e/,j=/\.0$/,V=/\.0*e/,k=/(\..*[^0])0*e/;function S(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!s(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":v(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=E.call(t,k,"$1e"),t=E.call(t,V,"e"),t=E.call(t,j,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=E.call(t,A,"e+0$1"),t=E.call(t,T,"e-0$1"),r.alternate&&(t=E.call(t,_,"$1."),t=E.call(t,x,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===d.call(r.specifier)?d.call(t):b.call(t)}function I(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function L(r,e,t){var n=e-r.length;return n<0?r:r=t?r+I(n):I(n)+r}var R=String.fromCharCode,B=isNaN,O=Array.isArray;function C(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,t,n,i,o,a,u,f,l;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(w(n=r[f]))a+=n;else{if(e=void 0!==n.precision,!(n=C(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,B(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,B(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!B(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=B(o)?String(n.arg):R(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=S(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=p(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=L(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function M(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function N(r){var e,t,n,i;for(t=[],i=0,n=P.exec(r);n;)(e=r.slice(i,P.lastIndex-n[0].length)).length&&t.push(e),t.push(M(n)),i=P.lastIndex,n=P.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function U(r){return"string"==typeof r}function Y(r){var e,t,n;if(!U(r))throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=N(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return F.apply(null,t)}var W,$=Object.prototype,G=$.toString,Z=$.__defineGetter__,X=$.__defineSetter__,J=$.__lookupGetter__,z=$.__lookupSetter__;W=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?c:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===G.call(r))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(J.call(r,e)||z.call(r,e)?(n=r.__proto__,r.__proto__=$,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Z&&Z.call(r,e,t.get),a&&X&&X.call(r,e,t.set),r};var q=W;function D(r,e,t){q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function K(){return H&&"symbol"==typeof Symbol.toStringTag}var Q=Object.prototype.toString;var rr=Object.prototype.hasOwnProperty;function er(r,e){return null!=r&&rr.call(r,e)}var tr="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof tr?tr.toStringTag:"";var ir=K()?function(r){var e,t,n;if(null==r)return Q.call(r);t=r[nr],e=er(r,nr);try{r[nr]=void 0}catch(e){return Q.call(r)}return n=Q.call(r),e?r[nr]=t:delete r[nr],n}:function(r){return Q.call(r)};var or=Array.isArray?Array.isArray:function(r){return"[object Array]"===ir(r)};function ar(r){return null!==r&&"object"==typeof r}function ur(r){return ar(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function fr(){return/^\s*function\s*([^(]*)/i}D(ar,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!or(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(ar));var lr=/^\s*function\s*([^(]*)/i;function cr(r){var e,t,n;if(("Object"===(t=ir(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=lr.exec(n.toString()))return e[1]}return ur(r)?"Buffer":t}D(fr,"REGEXP",lr);var sr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},yr=Object.prototype.toString;var pr=Object.prototype.hasOwnProperty;var hr="function"==typeof tr?tr.toStringTag:"";var gr=K()?function(r){var e,t,n,i,o;if(null==r)return yr.call(r);t=r[hr],o=hr,e=null!=(i=r)&&pr.call(i,o);try{r[hr]=void 0}catch(e){return yr.call(r)}return n=yr.call(r),e?r[hr]=t:delete r[hr],n}:function(r){return yr.call(r)},mr="function"==typeof Float64Array;var wr="function"==typeof Float64Array?Float64Array:null;var vr="function"==typeof Float64Array?Float64Array:void 0;var br=function(){var r,e,t;if("function"!=typeof wr)return!1;try{e=new wr([1,3.14,-3.14,NaN]),t=e,r=(mr&&t instanceof Float64Array||"[object Float64Array]"===gr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")},dr="function"==typeof Float32Array;var Er=Number.POSITIVE_INFINITY,Ar="function"==typeof Float32Array?Float32Array:null;var Tr="function"==typeof Float32Array?Float32Array:void 0;var _r=function(){var r,e,t;if("function"!=typeof Ar)return!1;try{e=new Ar([1,3.14,-3.14,5e40]),t=e,r=(dr&&t instanceof Float32Array||"[object Float32Array]"===ir(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Er}catch(e){r=!1}return r}()?Tr:function(){throw new Error("not implemented")},xr="function"==typeof Uint32Array;var jr="function"==typeof Uint32Array?Uint32Array:null;var Vr="function"==typeof Uint32Array?Uint32Array:void 0;var kr=function(){var r,e,t;if("function"!=typeof jr)return!1;try{e=new jr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(xr&&t instanceof Uint32Array||"[object Uint32Array]"===ir(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Vr:function(){throw new Error("not implemented")},Sr="function"==typeof Int32Array;var Ir="function"==typeof Int32Array?Int32Array:null;var Lr="function"==typeof Int32Array?Int32Array:void 0;var Rr=function(){var r,e,t;if("function"!=typeof Ir)return!1;try{e=new Ir([1,3.14,-3.14,2147483648]),t=e,r=(Sr&&t instanceof Int32Array||"[object Int32Array]"===ir(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Lr:function(){throw new Error("not implemented")},Br="function"==typeof Uint16Array;var Or="function"==typeof Uint16Array?Uint16Array:null;var Cr="function"==typeof Uint16Array?Uint16Array:void 0;var Fr=function(){var r,e,t;if("function"!=typeof Or)return!1;try{e=new Or(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Br&&t instanceof Uint16Array||"[object Uint16Array]"===ir(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Cr:function(){throw new Error("not implemented")},Pr="function"==typeof Int16Array;var Mr="function"==typeof Int16Array?Int16Array:null;var Nr="function"==typeof Int16Array?Int16Array:void 0;var Ur=function(){var r,e,t;if("function"!=typeof Mr)return!1;try{e=new Mr([1,3.14,-3.14,32768]),t=e,r=(Pr&&t instanceof Int16Array||"[object Int16Array]"===ir(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Nr:function(){throw new Error("not implemented")},Yr="function"==typeof Uint8Array;var Wr="function"==typeof Uint8Array?Uint8Array:null;var $r="function"==typeof Uint8Array?Uint8Array:void 0;var Gr=function(){var r,e,t;if("function"!=typeof Wr)return!1;try{e=new Wr(e=[1,3.14,-3.14,256,257]),t=e,r=(Yr&&t instanceof Uint8Array||"[object Uint8Array]"===ir(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?$r:function(){throw new Error("not implemented")},Zr="function"==typeof Uint8ClampedArray;var Xr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Jr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var zr=function(){var r,e,t;if("function"!=typeof Xr)return!1;try{e=new Xr([-1,0,1,3.14,4.99,255,256]),t=e,r=(Zr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===ir(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Jr:function(){throw new Error("not implemented")},qr="function"==typeof Int8Array;var Dr="function"==typeof Int8Array?Int8Array:null;var Hr="function"==typeof Int8Array?Int8Array:void 0;var Kr=function(){var r,e,t;if("function"!=typeof Dr)return!1;try{e=new Dr([1,3.14,-3.14,128]),t=e,r=(qr&&t instanceof Int8Array||"[object Int8Array]"===ir(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Hr:function(){throw new Error("not implemented")};function Qr(r){return"number"==typeof r}var re=Object.prototype.toString;var ee=Object.prototype.hasOwnProperty;var te="function"==typeof tr?tr.toStringTag:"";var ne=K()?function(r){var e,t,n,i,o;if(null==r)return re.call(r);t=r[te],o=te,e=null!=(i=r)&&ee.call(i,o);try{r[te]=void 0}catch(e){return re.call(r)}return n=re.call(r),e?r[te]=t:delete r[te],n}:function(r){return re.call(r)},ie=Number,oe=ie.prototype.toString;var ae=K();function ue(r){return"object"==typeof r&&(r instanceof ie||(ae?function(r){try{return oe.call(r),!0}catch(r){return!1}}(r):"[object Number]"===ne(r)))}function fe(r){return Qr(r)||ue(r)}D(fe,"isPrimitive",Qr),D(fe,"isObject",ue);var le=Number.POSITIVE_INFINITY,ce=ie.NEGATIVE_INFINITY,se=Math.floor;function ye(r){return r<le&&r>ce&&se(e=r)===e;var e}function pe(r){return Qr(r)&&ye(r)}function he(r){return ue(r)&&ye(r.valueOf())}function ge(r){return pe(r)||he(r)}function me(r){return pe(r)&&r>=0}function we(r){return he(r)&&r.valueOf()>=0}function ve(r){return me(r)||we(r)}D(ge,"isPrimitive",pe),D(ge,"isObject",he),D(ve,"isPrimitive",me),D(ve,"isObject",we);var be=Math.floor;function de(r){return be(r)===r}function Ee(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&de(r.length)&&r.length>=0&&r.length<=4294967295}var Ae=Math.floor;function Te(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&(e=r.length,Ae(e)===e)&&r.length>=0&&r.length<=9007199254740991;var e}var _e="function"==typeof ArrayBuffer;function xe(r){return _e&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===ir(r)}function je(r){return"object"==typeof r&&null!==r&&!or(r)}var Ve=/./;function ke(r){return"boolean"==typeof r}var Se=Object.prototype.toString;var Ie=Object.prototype.hasOwnProperty;var Le="function"==typeof tr?tr.toStringTag:"";var Re=K()?function(r){var e,t,n,i,o;if(null==r)return Se.call(r);t=r[Le],o=Le,e=null!=(i=r)&&Ie.call(i,o);try{r[Le]=void 0}catch(e){return Se.call(r)}return n=Se.call(r),e?r[Le]=t:delete r[Le],n}:function(r){return Se.call(r)},Be=Boolean,Oe=Boolean.prototype.toString;var Ce=K();function Fe(r){return"object"==typeof r&&(r instanceof Be||(Ce?function(r){try{return Oe.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Re(r)))}function Pe(r){return ke(r)||Fe(r)}function Me(){return new Function("return this;")()}D(Pe,"isPrimitive",ke),D(Pe,"isObject",Fe);var Ne="object"==typeof self?self:null,Ue="object"==typeof window?window:null,Ye="object"==typeof global?global:null,We="object"==typeof globalThis?globalThis:null;var $e=function(r){if(arguments.length){if(!ke(r))throw new TypeError(Y("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Me()}if(We)return We;if(Ne)return Ne;if(Ue)return Ue;if(Ye)return Ye;throw new Error("unexpected error. Unable to resolve global object.")}(),Ge=$e.document&&$e.document.childNodes,Ze=Int8Array;var Xe="function"==typeof Ve||"object"==typeof Ze||"function"==typeof Ge?function(r){return cr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?cr(r).toLowerCase():e};function Je(r){return"function"===Xe(r)}function ze(r,e){if(!(this instanceof ze))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Qr(r))throw new TypeError(Y("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Qr(e))throw new TypeError(Y("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}D(ze,"BYTES_PER_ELEMENT",8),D(ze.prototype,"BYTES_PER_ELEMENT",8),D(ze.prototype,"byteLength",16),D(ze.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),D(ze.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var qe="function"==typeof Math.fround?Math.fround:null,De=new _r(1);var He="function"==typeof qe?qe:function(r){return De[0]=r,De[0]};function Ke(r,e){if(!(this instanceof Ke))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Qr(r))throw new TypeError(Y("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Qr(e))throw new TypeError(Y("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:He(r)}),q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:He(e)}),this}function Qe(r){return r instanceof ze||r instanceof Ke||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function rt(r){return de(r/2)}function et(){return"function"==typeof tr&&"symbol"==typeof tr("foo")&&er(tr,"iterator")&&"symbol"==typeof tr.iterator}D(Ke,"BYTES_PER_ELEMENT",4),D(Ke.prototype,"BYTES_PER_ELEMENT",4),D(Ke.prototype,"byteLength",8),D(Ke.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),D(Ke.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var tt=et()?Symbol.iterator:null;function nt(r,e,t){q(r,e,{configurable:!1,enumerable:!1,get:t})}function it(r){return r.re}function ot(r){return r.im}function at(r,e){return new _r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function ut(r,e){return new br(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function ft(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(Ee(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Qe(n))return new TypeError(Y("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(it(n),ot(n))}return e}function lt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,Ee(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Qe(o))return new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(it(o),ot(o))}return n}function ct(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Qe(n=e[i]))return null;r[o]=it(n),r[o+1]=ot(n),o+=2}return r}var st=2*_r.BYTES_PER_ELEMENT,yt=et();function pt(r){return r instanceof wt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function ht(r){return r===wt||"Complex128Array"===r.name}function gt(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===st}function mt(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*st}function wt(){var r,e,t,n;if(e=arguments.length,!(this instanceof wt))return 0===e?new wt:1===e?new wt(arguments[0]):2===e?new wt(arguments[0],arguments[1]):new wt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new _r(0);else if(1===e)if(me(arguments[0]))t=new _r(2*arguments[0]);else if(Te(arguments[0]))if((n=(t=arguments[0]).length)&&or(t)&&Qe(t[0])){if(null===(t=ct(new _r(2*n),t))){if(!rt(n))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new _r(arguments[0])}}else{if(gt(t))t=at(t,0);else if(mt(t))t=ut(t,0);else if(!rt(n))throw new RangeError(Y("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new _r(t)}else if(xe(arguments[0])){if(!de((t=arguments[0]).byteLength/st))throw new RangeError(Y("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",st,t.byteLength));t=new _r(t)}else{if(!je(arguments[0]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===yt)throw new TypeError(Y("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Je(t[tt]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Je((t=t[tt]()).next))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=ft(t))instanceof Error)throw t;t=new _r(t)}else{if(!xe(t=arguments[0]))throw new TypeError(Y("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!me(r=arguments[1]))throw new TypeError(Y("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!de(r/st))throw new RangeError(Y("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",st,r));if(2===e){if(!de((n=t.byteLength-r)/st))throw new RangeError(Y("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",st,n));t=new _r(t,r)}else{if(!me(n=arguments[2]))throw new TypeError(Y("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*st>t.byteLength-r)throw new RangeError(Y("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*st));t=new _r(t,r,2*n)}}return D(this,"_buffer",t),D(this,"_length",t.length/2),this}function vt(r){return r.re}function bt(r){return r.im}function dt(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(Ee(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Qe(n))return new TypeError(Y("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(vt(n),bt(n))}return e}function Et(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,Ee(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Qe(o))return new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(vt(o),bt(o))}return n}function At(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Qe(n=e[i]))return null;r[o]=vt(n),r[o+1]=bt(n),o+=2}return r}D(wt,"BYTES_PER_ELEMENT",st),D(wt,"name","Complex64Array"),D(wt,"from",(function(r){var e,n,i,o,u,f,l,c,s,y,p,h;if(!Je(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!Je(i=arguments[1]))throw new TypeError(Y("invalid argument. Second argument must be a function. Value: `%s`.",i));n>2&&(e=arguments[2])}if(pt(r)){if(c=r.length,i){for(u=(o=new this(c))._buffer,h=0,p=0;p<c;p++){if(Qe(y=i.call(e,r.get(p),p)))u[h]=it(y),u[h+1]=ot(y);else{if(!(Ee(y)&&y.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[h]=y[0],u[h+1]=y[1]}h+=2}return o}return new this(r)}if(Te(r)){if(i){for(c=r.length,l=r.get&&r.set?a("default"):t("default"),p=0;p<c;p++)if(!Qe(l(r,p))){s=!0;break}if(s){if(!rt(c))throw new RangeError(Y("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,c));for(u=(o=new this(c/2))._buffer,p=0;p<c;p++)u[p]=i.call(e,l(r,p),p);return o}for(u=(o=new this(c))._buffer,h=0,p=0;p<c;p++){if(Qe(y=i.call(e,l(r,p),p)))u[h]=it(y),u[h+1]=ot(y);else{if(!(Ee(y)&&y.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[h]=y[0],u[h+1]=y[1]}h+=2}return o}return new this(r)}if(je(r)&&yt&&Je(r[tt])){if(!Je((u=r[tt]()).next))throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((f=i?lt(u,i,e):ft(u))instanceof Error)throw f;for(u=(o=new this(c=f.length/2))._buffer,p=0;p<c;p++)u[p]=f[p];return o}throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),D(wt,"of",(function(){var r,e;if(!Je(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),nt(wt.prototype,"buffer",(function(){return this._buffer.buffer})),nt(wt.prototype,"byteLength",(function(){return this._buffer.byteLength})),nt(wt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),D(wt.prototype,"BYTES_PER_ELEMENT",wt.BYTES_PER_ELEMENT),D(wt.prototype,"copyWithin",(function(r,e){if(!pt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),D(wt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!pt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,D(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Ke(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),D(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),tt&&D(t,tt,(function(){return e.entries()})),t})),D(wt.prototype,"get",(function(r){var e;if(!pt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!me(r))throw new TypeError(Y("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Ke((e=this._buffer)[r*=2],e[r+1])})),nt(wt.prototype,"length",(function(){return this._length})),D(wt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!pt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!me(t=arguments[1]))throw new TypeError(Y("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Qe(r)){if(t>=this._length)throw new RangeError(Y("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=it(r),void(n[t+1]=ot(r))}if(pt(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*st,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new _r(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!Te(r))throw new TypeError(Y("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Qe(r[f])){o=!0;break}if(o){if(!rt(a))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*st,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new _r(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=it(u),n[t+1]=ot(u),t+=2}}));var Tt=2*br.BYTES_PER_ELEMENT,_t=et();function xt(r){return r instanceof St||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function jt(r){return r===St||"Complex64Array"===r.name}function Vt(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Tt/2}function kt(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Tt}function St(){var r,e,t,n;if(e=arguments.length,!(this instanceof St))return 0===e?new St:1===e?new St(arguments[0]):2===e?new St(arguments[0],arguments[1]):new St(arguments[0],arguments[1],arguments[2]);if(0===e)t=new br(0);else if(1===e)if(me(arguments[0]))t=new br(2*arguments[0]);else if(Te(arguments[0]))if((n=(t=arguments[0]).length)&&or(t)&&Qe(t[0])){if(null===(t=At(new br(2*n),t))){if(!rt(n))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new br(arguments[0])}}else{if(Vt(t))t=at(t,0);else if(kt(t))t=ut(t,0);else if(!rt(n))throw new RangeError(Y("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new br(t)}else if(xe(arguments[0])){if(!de((t=arguments[0]).byteLength/Tt))throw new RangeError(Y("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Tt,t.byteLength));t=new br(t)}else{if(!je(arguments[0]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===_t)throw new TypeError(Y("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Je(t[tt]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Je((t=t[tt]()).next))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=dt(t))instanceof Error)throw t;t=new br(t)}else{if(!xe(t=arguments[0]))throw new TypeError(Y("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!me(r=arguments[1]))throw new TypeError(Y("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!de(r/Tt))throw new RangeError(Y("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Tt,r));if(2===e){if(!de((n=t.byteLength-r)/Tt))throw new RangeError(Y("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Tt,n));t=new br(t,r)}else{if(!me(n=arguments[2]))throw new TypeError(Y("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Tt>t.byteLength-r)throw new RangeError(Y("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Tt));t=new br(t,r,2*n)}}return D(this,"_buffer",t),D(this,"_length",t.length/2),this}D(St,"BYTES_PER_ELEMENT",Tt),D(St,"name","Complex128Array"),D(St,"from",(function(r){var e,n,i,o,u,f,l,c,s,y,p,h;if(!Je(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!jt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!Je(i=arguments[1]))throw new TypeError(Y("invalid argument. Second argument must be a function. Value: `%s`.",i));n>2&&(e=arguments[2])}if(xt(r)){if(c=r.length,i){for(u=(o=new this(c))._buffer,h=0,p=0;p<c;p++){if(Qe(y=i.call(e,r.get(p),p)))u[h]=vt(y),u[h+1]=bt(y);else{if(!(Ee(y)&&y.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[h]=y[0],u[h+1]=y[1]}h+=2}return o}return new this(r)}if(Te(r)){if(i){for(c=r.length,l=r.get&&r.set?a("default"):t("default"),p=0;p<c;p++)if(!Qe(l(r,p))){s=!0;break}if(s){if(!rt(c))throw new RangeError(Y("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",c));for(u=(o=new this(c/2))._buffer,p=0;p<c;p++)u[p]=i.call(e,l(r,p),p);return o}for(u=(o=new this(c))._buffer,h=0,p=0;p<c;p++){if(Qe(y=i.call(e,l(r,p),p)))u[h]=vt(y),u[h+1]=bt(y);else{if(!(Ee(y)&&y.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[h]=y[0],u[h+1]=y[1]}h+=2}return o}return new this(r)}if(je(r)&&_t&&Je(r[tt])){if(!Je((u=r[tt]()).next))throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((f=i?Et(u,i,e):dt(u))instanceof Error)throw f;for(u=(o=new this(c=f.length/2))._buffer,p=0;p<c;p++)u[p]=f[p];return o}throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),D(St,"of",(function(){var r,e;if(!Je(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!jt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),nt(St.prototype,"buffer",(function(){return this._buffer.buffer})),nt(St.prototype,"byteLength",(function(){return this._buffer.byteLength})),nt(St.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),D(St.prototype,"BYTES_PER_ELEMENT",St.BYTES_PER_ELEMENT),D(St.prototype,"copyWithin",(function(r,e){if(!xt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),D(St.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!xt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,D(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new ze(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),D(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),tt&&D(t,tt,(function(){return e.entries()})),t})),D(St.prototype,"get",(function(r){var e;if(!xt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!me(r))throw new TypeError(Y("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new ze((e=this._buffer)[r*=2],e[r+1])})),nt(St.prototype,"length",(function(){return this._length})),D(St.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!xt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!me(t=arguments[1]))throw new TypeError(Y("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Qe(r)){if(t>=this._length)throw new RangeError(Y("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=vt(r),void(n[t+1]=bt(r))}if(xt(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Tt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new br(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!Te(r))throw new TypeError(Y("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Qe(r[f])){o=!0;break}if(o){if(!rt(a))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Tt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new br(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=vt(u),n[t+1]=bt(u),t+=2}}));var It=[br,_r,Rr,kr,Ur,Fr,Kr,Gr,zr,wt,St],Lt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Rt=Lt.length;function Bt(e){var n,o=function(r){var e;if(or(r))return"generic";if(ur(r))return null;for(e=0;e<Rt;e++)if(r instanceof It[e])return Lt[e];return sr[cr(r)]||null}(e);return typeof(n=e).get===r&&typeof n.set===r?{accessorProtocol:!0,accessors:[a(o),f(o)]}:{accessorProtocol:!1,accessors:[t(o),i(o)]}}return function(r,e,t){var n=function(r){var e=Bt(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}(r);return n.accessorProtocol?function(r,e,t){var n,i,o;for(n=r.data,i=r.accessors[0],o=n.length-1;o>=0;o--)if(!e.call(t,i(n,o),o,n))return!1;return!0}(n,e,t):function(r,e,t){var n;for(n=r.length-1;n>=0;n--)if(!e.call(t,r[n],n,r))return!1;return!0}(r,e,t)}}));
//# sourceMappingURL=index.js.map
