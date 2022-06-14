/*! For license information please see vendors-e116e113.24f10493f978761ea441.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkweb_client=self.webpackChunkweb_client||[]).push([[793],{"aurelia-pal-browser":function(e,t,n){n.d(t,{initialize:function(){return _}});var r=n(1015),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i={location:window.location,history:window.history,addEventListener:function(e,t,n){this.global.addEventListener(e,t,n)},removeEventListener:function(e,t,n){this.global.removeEventListener(e,t,n)},performance:window.performance,requestAnimationFrame:function(e){return this.global.requestAnimationFrame(e)}};if("undefined"==typeof FEATURE_NO_IE&&void 0===function(){}.name&&Object.defineProperty(Function.prototype,"name",{get:function(){var e=this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];return Object.defineProperty(this,"name",{value:e}),e}}),"undefined"==typeof FEATURE_NO_IE)if(!("classList"in document.createElement("_"))||document.createElementNS&&!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))){var a=String.prototype.trim,c=Array.prototype.indexOf,u=[],l=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},s=function(e,t){if(""===t)throw new l("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new l("INVALID_CHARACTER_ERR","String contains an invalid character");return c.call(e,t)},f=function(e){for(var t=a.call(e.getAttribute("class")||""),n=t?t.split(/\s+/):u,r=0,o=n.length;r<o;++r)this.push(n[r]);this._updateClassName=function(){e.setAttribute("class",this.toString())}},p=f.prototype=[];l.prototype=Error.prototype,p.item=function(e){return this[e]||null},p.contains=function(e){return-1!==s(this,e+="")},p.add=function(){var e=arguments,t=0,n=e.length,r=void 0,o=!1;do{r=e[t]+"",-1===s(this,r)&&(this.push(r),o=!0)}while(++t<n);o&&this._updateClassName()},p.remove=function(){var e=arguments,t=0,n=e.length,r=void 0,o=!1,i=void 0;do{for(r=e[t]+"",i=s(this,r);-1!==i;)this.splice(i,1),o=!0,i=s(this,r)}while(++t<n);o&&this._updateClassName()},p.toggle=function(e,t){e+="";var n=this.contains(e),r=n?!0!==t&&"remove":!1!==t&&"add";return r&&this[r](e),!0===t||!1===t?t:!n},p.toString=function(){return this.join(" ")},Object.defineProperty(Element.prototype,"classList",{get:function(){return new f(this)},enumerable:!0,configurable:!0})}else{var m=document.createElement("_");if(m.classList.add("c1","c2"),!m.classList.contains("c2")){var d=function(e){var t=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){for(var n=0,r=arguments.length;n<r;++n)e=arguments[n],t.call(this,e)}};d("add"),d("remove")}if(m.classList.toggle("c3",!1),m.classList.contains("c3")){var w=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:w.call(this,e)}}m=null}if("undefined"==typeof FEATURE_NO_IE){var h=function(e,t){for(var n=0,r=y.length,o=[];n<r;n++)y[n][e]==t&&o.push(y[n]);return o},v=function(e,t){for(var n,r=y.length;r--;)(n=y[r]).entryType!=e||void 0!==t&&n.name!=t||y.splice(r,1)};if("performance"in window==0&&(window.performance={}),"now"in window.performance==0){var g=Date.now();performance.timing&&performance.timing.navigationStart&&(g=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-g}}Date.now?Date.now():new Date;var y=[],E={};window.performance.mark||(window.performance.mark=window.performance.webkitMark||function(e){var t={name:e,entryType:"mark",startTime:window.performance.now(),duration:0};y.push(t),E[e]=t}),window.performance.measure||(window.performance.measure=window.performance.webkitMeasure||function(e,t,n){t=E[t].startTime,n=E[n].startTime,y.push({name:e,entryType:"measure",startTime:t,duration:n-t})}),window.performance.getEntriesByType||(window.performance.getEntriesByType=window.performance.webkitGetEntriesByType||function(e){return h("entryType",e)}),window.performance.getEntriesByName||(window.performance.getEntriesByName=window.performance.webkitGetEntriesByName||function(e){return h("name",e)}),window.performance.clearMarks||(window.performance.clearMarks=window.performance.webkitClearMarks||function(e){v("mark",e)}),window.performance.clearMeasures||(window.performance.clearMeasures=window.performance.webkitClearMeasures||function(e){v("measure",e)}),i.performance=window.performance}if("undefined"==typeof FEATURE_NO_IE){var b=window.console=window.console||{},T=function(){};b.memory||(b.memory={}),"assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(",").forEach((function(e){b[e]||(b[e]=T)})),"object"===o(b.log)&&"log,info,warn,error,assert,dir,clear,profile,profileEnd".split(",").forEach((function(e){console[e]=this.bind(console[e],console)}),Function.prototype.call)}if("undefined"==typeof FEATURE_NO_IE&&(!window.CustomEvent||"function"!=typeof window.CustomEvent)){var O=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n};O.prototype=window.Event.prototype,window.CustomEvent=O}if(Element&&!Element.prototype.matches){var S=Element.prototype;S.matches=S.matchesSelector||S.mozMatchesSelector||S.msMatchesSelector||S.oMatchesSelector||S.webkitMatchesSelector}var M,N={shadowDOM:!!HTMLElement.prototype.attachShadow,scopedCSS:"scoped"in document.createElement("style"),htmlTemplateElement:(M=document.createElement("div"),M.innerHTML="<template></template>","content"in M.children[0]),mutationObserver:!(!window.MutationObserver&&!window.WebKitMutationObserver),ensureHTMLTemplateElement:function(e){return e}};if("undefined"==typeof FEATURE_NO_IE){var C=function(e){var t=e.ownerDocument.createElement("template"),n=e.attributes,r=n.length,o=void 0;for(e.parentNode.insertBefore(t,e);r-- >0;)o=n[r],t.setAttribute(o.name,o.value),e.removeAttribute(o.name);return e.parentNode.removeChild(e),L(t)},L=function(e){for(var t=e.content=document.createDocumentFragment(),n=void 0;n=e.firstChild;)t.appendChild(n);return e};N.htmlTemplateElement||(N.ensureHTMLTemplateElement=function(e){for(var t,n=L(e).content.querySelectorAll("template"),r=0,o=n.length;r<o;++r){var i=n[r];"template"===(t=i).tagName&&"http://www.w3.org/2000/svg"===t.namespaceURI?C(i):L(i)}return e})}var A=window.ShadowDOMPolyfill||null,k={Element:Element,NodeList:NodeList,SVGElement:SVGElement,boundary:"aurelia-dom-boundary",addEventListener:function(e,t,n){document.addEventListener(e,t,n)},removeEventListener:function(e,t,n){document.removeEventListener(e,t,n)},adoptNode:function(e){return document.adoptNode(e)},createAttribute:function(e){return document.createAttribute(e)},createElement:function(e){return document.createElement(e)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},createDocumentFragment:function(){return document.createDocumentFragment()},createTemplateElement:function(){var e=document.createElement("template");return N.ensureHTMLTemplateElement(e)},createMutationObserver:function(e){return new(window.MutationObserver||window.WebKitMutationObserver)(e)},createCustomEvent:function(e,t){return new window.CustomEvent(e,t)},dispatchEvent:function(e){document.dispatchEvent(e)},getComputedStyle:function(e){return window.getComputedStyle(e)},getElementById:function(e){return document.getElementById(e)},querySelector:function(e){return document.querySelector(e)},querySelectorAll:function(e){return document.querySelectorAll(e)},nextElementSibling:function(e){if(e.nextElementSibling)return e.nextElementSibling;do{e=e.nextSibling}while(e&&1!==e.nodeType);return e},createTemplateFromMarkup:function(e){var t=document.createElement("div");t.innerHTML=e;var n=t.firstElementChild;if(!n||"TEMPLATE"!==n.nodeName)throw new Error("Template markup must be wrapped in a <template> element e.g. <template> \x3c!-- markup here --\x3e </template>");return N.ensureHTMLTemplateElement(n)},appendNode:function(e,t){(t||document.body).appendChild(e)},replaceNode:function(e,t,n){t.parentNode?t.parentNode.replaceChild(e,t):null!==A?A.unwrap(n).replaceChild(A.unwrap(e),A.unwrap(t)):n.replaceChild(e,t)},removeNode:function(e,t){e.parentNode?e.parentNode.removeChild(e):t&&(null!==A?A.unwrap(t).removeChild(A.unwrap(e)):t.removeChild(e))},injectStyles:function(e,t,n,r){if(r){var o=document.getElementById(r);if(o){if("style"===o.tagName.toLowerCase())return void(o.innerHTML=e);throw new Error("The provided id does not indicate a style tag.")}}var i=document.createElement("style");return i.innerHTML=e,i.type="text/css",r&&(i.id=r),t=t||document.head,n&&t.childNodes.length>0?t.insertBefore(i,t.childNodes[0]):t.appendChild(i),i}};function _(){r.isInitialized||(0,r.initializePAL)((function(e,t,n){Object.assign(e,i),Object.assign(t,N),Object.assign(n,k),Object.defineProperty(n,"title",{get:function(){return document.title},set:function(e){document.title=e}}),Object.defineProperty(n,"activeElement",{get:function(){return document.activeElement}}),Object.defineProperty(e,"XMLHttpRequest",{get:function(){return e.global.XMLHttpRequest}})}))}},1015:function(e,t,n){function r(e,t,n){if(t){if(t.innerError&&n)return t;var r="\n------------------------------------------------\n";e+=r+"Inner Error:\n","string"==typeof t?e+="Message: "+t:(t.message?e+="Message: "+t.message:e+="Unknown Inner Error Type. Displaying Inner Error as JSON:\n "+JSON.stringify(t,null,"  "),t.stack&&(e+="\nInner Error Stack:\n"+t.stack,e+="\nEnd Inner Error Stack")),e+=r}var o=new Error(e);return t&&(o.innerError=t),o}n.r(t),n.d(t,{AggregateError:function(){return r},DOM:function(){return a},FEATURE:function(){return o},PLATFORM:function(){return i},initializePAL:function(){return u},isInitialized:function(){return c},reset:function(){return l}});var o={},i={noop:function(){},eachModule:function(){},moduleName:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return e}))};i.global="undefined"!=typeof self?self:void 0!==n.g?n.g:new Function("return this")();var a={},c=!1;function u(e){c||(c=!0,"function"!=typeof Object.getPropertyDescriptor&&(Object.getPropertyDescriptor=function(e,t){for(var n=Object.getOwnPropertyDescriptor(e,t),r=Object.getPrototypeOf(e);void 0===n&&null!==r;)n=Object.getOwnPropertyDescriptor(r,t),r=Object.getPrototypeOf(r);return n}),e(i,o,a))}function l(){c=!1}},8627:function(e,t,n){function r(e,t){var n=t&&t.split("/"),r=e.trim().split("/");if("."===r[0].charAt(0)&&n){var o=n.slice(0,n.length-1);r.unshift.apply(r,o)}return function(e){for(var t=0;t<e.length;++t){var n=e[t];if("."===n)e.splice(t,1),t-=1;else if(".."===n){if(0===t||1===t&&".."===e[2]||".."===e[t-1])continue;t>0&&(e.splice(t-1,2),t-=2)}}}(r),r.join("/")}function o(e,t){if(!e)return t;if(!t)return e;var n,r=e.match(/^([^/]*?:)\//),o=r&&r.length>0?r[1]:"";n=0===(e=e.substr(o.length)).indexOf("///")&&"file:"===o?"///":0===e.indexOf("//")?"//":0===e.indexOf("/")?"/":"";for(var i="/"===t.slice(-1)?"/":"",a=e.split("/"),c=t.split("/"),u=[],l=0,s=a.length;l<s;++l)if(".."===a[l])u.length&&".."!==u[u.length-1]?u.pop():u.push(a[l]);else{if("."===a[l]||""===a[l])continue;u.push(a[l])}for(l=0,s=c.length;l<s;++l)if(".."===c[l])u.length&&".."!==u[u.length-1]?u.pop():u.push(c[l]);else{if("."===c[l]||""===c[l])continue;u.push(c[l])}return o+n+u.join("/")+i}n.d(t,{Ie:function(){return u},dD:function(){return f},ri:function(){return r},v_:function(){return o}});var i=encodeURIComponent,a=function(e){return i(e).replace("%24","$")};function c(e,t,n){var r=[];if(null==t)return r;if(Array.isArray(t))for(var o=0,u=t.length;o<u;o++)if(n)r.push(a(e)+"="+i(t[o]));else{var l=e+"["+("object"==typeof t[o]&&null!==t[o]?o:"")+"]";r=r.concat(c(l,t[o]))}else if("object"!=typeof t||n)r.push(a(e)+"="+i(t));else for(var s in t)r=r.concat(c(e+"["+s+"]",t[s]));return r}function u(e,t){for(var n=[],r=Object.keys(e||{}).sort(),o=0,i=r.length;o<i;o++){var a=r[o];n=n.concat(c(a,e[a],t))}return 0===n.length?"":n.join("&")}function l(e,t){return Array.isArray(e)?(e.push(t),e):void 0!==e?[e,t]:t}function s(e,t,n){for(var r=e,o=t.length-1,i=0;i<=o;i++){var a=""===t[i]?r.length:t[i];if(p(a),i<o){var c=r[a]&&"object"!=typeof r[a]?[r[a]]:r[a];r=r[a]=c||(isNaN(t[i+1])?{}:[])}else r=r[a]=n}}function f(e){var t={};if(!e||"string"!=typeof e)return t;var n=e;"?"===n.charAt(0)&&(n=n.substr(1));for(var r=n.replace(/\+/g," ").split("&"),o=0;o<r.length;o++){var i=r[o].split("="),a=decodeURIComponent(i[0]);if(a){var c=a.split("]["),u=c.length-1;if(/\[/.test(c[0])&&/\]$/.test(c[u])?(c[u]=c[u].replace(/\]$/,""),u=(c=c.shift().split("[").concat(c)).length-1):u=0,i.length>=2){var f=i[1]?decodeURIComponent(i[1]):"";u?s(t,c,f):(p(a),t[a]=l(t[a],f))}else t[a]=!0}}return t}function p(e){if("__proto__"===e)throw new Error("Prototype pollution detected.")}}}]);