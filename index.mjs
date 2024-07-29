// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";function t(t,e,a){var n=r(t);return n.accessorProtocol?function(r,t,e){var a,n,o;for(a=r.data,n=r.accessors[0],o=a.length-1;o>=0;o--)if(!t.call(e,n(a,o),o,a))return!1;return!0}(n,e,a):function(r,t,e){var a;for(a=r.length-1;a>=0;a--)if(!t.call(e,r[a],a,r))return!1;return!0}(t,e,a)}export{t as default};
//# sourceMappingURL=index.mjs.map
