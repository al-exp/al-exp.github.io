"use strict";(self.webpackChunkweb_client=self.webpackChunkweb_client||[]).push([[566],{2727:function(e,t,n){var r,i,o,u,a,l,c,f,s=n(1015),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};if("undefined"==typeof FEATURE_NO_ES2015&&(function(e,t){if(!(t in e)){var n,r=s.PLATFORM.global,i=0,o=""+Math.random(),u="__symbol:",a=u.length,l="__symbol@@"+o,c="defineProperty",f="defineProperties",p="getOwnPropertyNames",y="getOwnPropertyDescriptor",d="propertyIsEnumerable",b=e[p],v=e[y],g=e.create,m=e.keys,w=e[c],_=e[f],O=v(e,p),S=e.prototype,E=S.hasOwnProperty,j=S[d],P=S.toString,A=(Array.prototype.indexOf,function(e,t,n){E.call(e,l)||w(e,l,{enumerable:!1,configurable:!1,writable:!1,value:{}}),e[l]["@@"+t]=n}),R=function(e,t){var n=g(e);return null!==t&&"object"===(void 0===t?"undefined":h(t))&&b(t).forEach((function(e){M.call(t,e)&&C(n,e,t[e])})),n},k=function(){},T=function(e){return e!=l&&!E.call(W,e)},N=function(e){return e!=l&&E.call(W,e)},M=function(e){var t=""+e;return N(t)?E.call(this,t)&&this[l]&&this[l]["@@"+t]:j.call(this,e)},F=function(t){return w(S,t,{enumerable:!1,configurable:!0,get:k,set:function(e){n(this,t,{enumerable:!1,configurable:!0,writable:!0,value:e}),A(this,t,!0)}}),W[t]=w(e(t),"constructor",z)},x=function(e){if(this&&this!==r)throw new TypeError("Symbol is not a constructor");return F(u.concat(e||"",o,++i))},W=g(null),z={value:x},I=function(e){return W[e]},C=function(e,t,r){var i=""+t;return N(i)?(n(e,i,r.enumerable?function(e){var t=g(e);return t.enumerable=!1,t}(r):r),A(e,i,!!r.enumerable)):w(e,t,r),e},U=function(t){return t="[object String]"===P.call(t)?t.split(""):e(t),b(t).filter(N).map(I)};O.value=C,w(e,c,O),O.value=U,w(e,t,O);var L="object"===("undefined"==typeof window?"undefined":h(window))?e.getOwnPropertyNames(window):[],H=e.getOwnPropertyNames;O.value=function(e){if("[object Window]"===P.call(e))try{return H(e)}catch(e){return[].concat([],L)}return b(e).filter(T)},w(e,p,O),O.value=function(e,t){var n=U(t);return n.length?m(t).concat(n).forEach((function(n){M.call(t,n)&&C(e,n,t[n])})):_(e,t),e},w(e,f,O),O.value=M,w(S,d,O),O.value=x,w(r,"Symbol",O),O.value=function(e){var t=u.concat(u,e,o);return t in S?W[t]:F(t)},w(x,"for",O),O.value=function(e){return E.call(W,e)?e.slice(2*a,-o.length):void 0},w(x,"keyFor",O),O.value=function(e,t){var n=v(e,t);return n&&N(t)&&(n.enumerable=M.call(e,t)),n},w(e,y,O),O.value=function(e,t){return 1===arguments.length?g(e):R(e,t)},w(e,"create",O),O.value=function(){var e=P.call(this);return"[object String]"===e&&N(this)?"[object Symbol]":e},w(S,"toString",O);try{n=g(w({},u,{get:function(){return w(this,u,{value:!1})[u]}}))[u]||w}catch(e){n=function(e,t,n){var r=v(S,t);delete S[t],w(e,t,n),w(S,t,r)}}}}(Object,"getOwnPropertySymbols"),r=Object,Symbol,o=r.defineProperty,u=r.prototype,a=u.toString,["iterator","match","replace","search","split","hasInstance","isConcatSpreadable","unscopables","species","toPrimitive",l="toStringTag"].forEach((function(e){e in Symbol||(o(Symbol,e,{value:Symbol(e)}),e!==l)||((i=r.getOwnPropertyDescriptor(u,"toString")).value=function(){var e=a.call(this),t=null==this?void 0:this[Symbol.toStringTag];return void 0===t?e:"[object "+t+"]"},o(u,"toString",i))})),function(e,t,n){function r(){return this}t[e]||(t[e]=function(){var t=0,n=this,i={next:function(){var e=n.length<=t;return e?{done:e}:{done:e,value:n[t++]}}};return i[e]=r,i}),n[e]||(n[e]=function(){var t=String.fromCodePoint,n=this,i=0,o=n.length,u={next:function(){var e=o<=i,r=e?"":t(n.codePointAt(i));return i+=r.length,e?{done:e}:{done:e,value:r}}};return u[e]=r,u})}(Symbol.iterator,Array.prototype,String.prototype)),"undefined"==typeof FEATURE_NO_ES2015&&(Number.isNaN=Number.isNaN||function(e){return e!=e},Number.isFinite=Number.isFinite||function(e){return"number"==typeof e&&isFinite(e)}),String.prototype.endsWith&&!function(){try{return!"ab".endsWith("a",1)}catch(e){return!0}}()||(String.prototype.endsWith=function(e,t){var n=this.toString();("number"!=typeof t||!isFinite(t)||Math.floor(t)!==t||t>n.length)&&(t=n.length),t-=e.length;var r=n.indexOf(e,t);return-1!==r&&r===t}),String.prototype.startsWith&&!function(){try{return!"ab".startsWith("b",1)}catch(e){return!0}}()||(String.prototype.startsWith=function(e,t){return t=t||0,this.substr(t,e.length)===e}),"undefined"==typeof FEATURE_NO_ES2015&&(Array.from||(Array.from=(c=function(e){return e>0?Math.min(function(e){return isNaN(e=+e)?0:(e>0?Math.floor:Math.ceil)(e)}(e),9007199254740991):0},f=function(e,t,n,r){try{return t(n,r)}catch(t){throw"function"==typeof e.return&&e.return(),t}},function(e){var t,n,r,i,o=Object(e),u="function"==typeof this?this:Array,a=arguments.length,l=a>1?arguments[1]:void 0,s=void 0!==l,h=0,p=o[Symbol.iterator];if(s&&(l=l.bind(a>2?arguments[2]:void 0)),null==p||Array.isArray(e))for(n=new u(t=c(o.length));t>h;h++)n[h]=s?l(o[h],h):o[h];else for(i=p.call(o),n=new u;!(r=i.next()).done;h++)n[h]=s?f(i,l,r.value,h):r.value;return n.length=h,n})),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{configurable:!0,writable:!0,enumerable:!1,value:function(e){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,n=Object(this),r=n.length>>>0,i=arguments[1],o=0;o<r;o++)if(t=n[o],e.call(i,t,o,n))return t}}),Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{configurable:!0,writable:!0,enumerable:!1,value:function(e){if(null===this)throw new TypeError("Array.prototype.findIndex called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,n=Object(this),r=n.length>>>0,i=arguments[1],o=0;o<r;o++)if(t=n[o],e.call(i,t,o,n))return o;return-1}})),"undefined"!=typeof FEATURE_NO_ES2016||Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{configurable:!0,writable:!0,enumerable:!1,value:function(e){var t=Object(this),n=parseInt(t.length)||0;if(0===n)return!1;var r,i,o=parseInt(arguments[1])||0;for(o>=0?r=o:(r=n+o)<0&&(r=0);r<n;){if(e===(i=t[r])||e!=e&&i!=i)return!0;r++}return!1}}),"undefined"==typeof FEATURE_NO_ES2015&&(function(){var e,t,n,r,i=!1;try{var o=Object.keys("a");i=1!==o.length||"0"!==o[0]}catch(e){i=!0}i&&(Object.keys=(e=Object.prototype.hasOwnProperty,t=!{toString:null}.propertyIsEnumerable("toString"),r=(n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]).length,function(i){if(null==i)throw TypeError("Cannot convert undefined or null to object");i=Object(i);var o,u,a=[];for(o in i)e.call(i,o)&&a.push(o);if(t)for(u=0;u<r;u++)e.call(i,n[u])&&a.push(n[u]);return a}))}(),function(e){var t,n,r;"assign"in e||e.defineProperty(e,"assign",{configurable:!0,writable:!0,value:(t=e.getOwnPropertySymbols,n=e.propertyIsEnumerable,r=t?function(e){return t(e).filter(n,e)}:function(){return Array.prototype},function(n){function i(e){n[e]=a[e]}!t||n instanceof e||console.warn("problematic Symbols",n);for(var o=1,u=arguments.length;o<u;++o){var a=arguments[o];null!=a&&e.keys(a).concat(r(a)).forEach(i)}return n})})}(Object),Object.is||(Object.is=function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t})),"undefined"==typeof FEATURE_NO_ES2015&&function(e){var t,n,r,i=Object.defineProperty;function o(e,t){function n(e){if(!this||this.constructor!==n)return new n(e);this._keys=[],this._values=[],this._itp=[],this.objectOnly=t,e&&u.call(this,e)}return t||i(e,"size",{get:g}),e.constructor=n,n.prototype=e,n}function u(e){this.add?e.forEach(this.add,this):e.forEach((function(e){this.set(e[0],e[1])}),this)}function a(e){return this.has(e)&&(this._keys.splice(t,1),this._values.splice(t,1),this._itp.forEach((function(e){t<e[0]&&e[0]--}))),-1<t}function l(e){return this.has(e)?this._values[t]:void 0}function c(e,n){if(this.objectOnly&&n!==Object(n))throw new TypeError("Invalid value used as weak collection key");if(n!=n||0===n)for(t=e.length;t--&&(r=e[t])!==(i=n)&&(r==r||i==i););else t=e.indexOf(n);var r,i;return-1<t}function f(e){return c.call(this,this._values,e)}function s(e){return c.call(this,this._keys,e)}function h(e,n){return this.has(e)?this._values[t]=n:this._values[this._keys.push(e)-1]=n,this}function p(e){return this.has(e)||this._values.push(e),this}function y(){(this._keys||0).length=this._values.length=0}function d(){return v(this._itp,this._values)}function b(){return v(this._itp,this._keys,this._values)}function v(e,t,n){var r,i=[0],o=!1;return e.push(i),(r={})[Symbol.iterator]=function(){return this},r.next=function(){var r,u=i[0];return!o&&u<t.length?(r=n?[t[u],n[u]]:t[u],i[0]++):(o=!0,e.splice(e.indexOf(i),1)),{done:o,value:r}},r}function g(){return this._values.length}function m(e,t){for(var n=this.entries();;){var r=n.next();if(r.done)break;e.call(t,r.value[1],r.value[0],this)}}"undefined"==typeof WeakMap&&(e.WeakMap=o({delete:a,clear:y,get:l,has:s,set:h},!0)),"undefined"!=typeof Map&&"function"==typeof(new Map).values&&(new Map).values().next||(e.Map=o(((n={delete:a,has:s,get:l,set:h,keys:function(){return v(this._itp,this._keys)},values:d,entries:b,forEach:m,clear:y})[Symbol.iterator]=b,n))),"undefined"!=typeof Set&&"function"==typeof(new Set).values&&(new Set).values().next||(e.Set=o(((r={has:f,add:p,delete:a,clear:y,keys:d,values:d,entries:function(){return v(this._itp,this._values,this._values)},forEach:m})[Symbol.iterator]=d,r))),"undefined"==typeof WeakSet&&(e.WeakSet=o({delete:a,add:p,clear:y,has:f},!0))}(s.PLATFORM.global),"undefined"==typeof FEATURE_NO_ES2015){var p=Function.prototype.bind;void 0===s.PLATFORM.global.Reflect&&(s.PLATFORM.global.Reflect={}),"function"!=typeof Reflect.defineProperty&&(Reflect.defineProperty=function(e,t,n){if("object"===(void 0===e?"undefined":h(e))?null===e:"function"!=typeof e)throw new TypeError("Reflect.defineProperty called on non-object");try{return Object.defineProperty(e,t,n),!0}catch(e){return!1}}),"function"!=typeof Reflect.construct&&(Reflect.construct=function(e,t){if(t)switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var n=[null];return n.push.apply(n,t),new(p.apply(e,n))}),"function"!=typeof Reflect.ownKeys&&(Reflect.ownKeys=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))})}if("undefined"==typeof FEATURE_NO_ESNEXT){var y=Object.freeze({}),d="__metadata__";"function"!=typeof Reflect.getOwnMetadata&&(Reflect.getOwnMetadata=function(e,t,n){if(t.hasOwnProperty(d))return(t.__metadata__[n]||y)[e]}),"function"!=typeof Reflect.defineMetadata&&(Reflect.defineMetadata=function(e,t,n,r){var i=n.hasOwnProperty(d)?n.__metadata__:n.__metadata__={};(i[r]||(i[r]={}))[e]=t}),"function"!=typeof Reflect.metadata&&(Reflect.metadata=function(e,t){return function(n,r){Reflect.defineMetadata(e,t,n,r)}})}},"aurelia-resize":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),n(1015);var r=n("aurelia-resize/resizeable");t.ResizeableCustomAttribute=r.ResizeableCustomAttribute,t.configure=function(e){e.globalResources("./resizeable")}},"aurelia-resize/resizeable":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(3844),i=function(){function e(e){this.element=e,this.erd=r({strategy:"scroll"})}return e.prototype.bind=function(){var e=this,t=this.element,n=t.offsetWidth,r=t.offsetHeight;this.callback=function(t){var i=new CustomEvent("resize",{detail:{width:e.element.offsetWidth,height:e.element.offsetHeight,widthOld:n,heightOld:r}});e.element.dispatchEvent(i),n=e.element.offsetWidth,r=e.element.offsetHeight},this.erd.listenTo(this.element,this.callback)},e.prototype.unbind=function(){this.callback&&(this.erd.uninstall(this.element),this.callback=null)},e}();i.inject=[Element],t.ResizeableCustomAttribute=i}}]);