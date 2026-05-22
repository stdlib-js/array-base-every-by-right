"use strict";var c=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};var u=c(function(b,s){
var i=require('@stdlib/array-base-arraylike2object/dist');function l(e,t,a){var r;for(r=e.length-1;r>=0;r--)if(!t.call(a,e[r],r,e))return!1;return!0}function f(e,t,a){var r,o,n;for(r=e.data,o=e.accessors[0],n=r.length-1;n>=0;n--)if(!t.call(a,o(r,n),n,r))return!1;return!0}function v(e,t,a){var r=i(e);return r.accessorProtocol?f(r,t,a):l(e,t,a)}s.exports=v
});var g=u();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
