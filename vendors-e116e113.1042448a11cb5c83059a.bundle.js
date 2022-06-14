"use strict";
(self["webpackChunkweb_client"] = self["webpackChunkweb_client"] || []).push([["vendors-e116e113"],{

/***/ "aurelia-pal-browser":
/*!*************************************************************************************!*\
  !*** ./node_modules/aurelia-pal-browser/dist/native-modules/aurelia-pal-browser.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_DOM": function() { return /* binding */ _DOM; },
/* harmony export */   "_FEATURE": function() { return /* binding */ _FEATURE; },
/* harmony export */   "_PLATFORM": function() { return /* binding */ _PLATFORM; },
/* harmony export */   "initialize": function() { return /* binding */ initialize; }
/* harmony export */ });
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ 1015);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var _PLATFORM = {
  location: window.location,
  history: window.history,
  addEventListener: function addEventListener(eventName, callback, capture) {
    this.global.addEventListener(eventName, callback, capture);
  },
  removeEventListener: function removeEventListener(eventName, callback, capture) {
    this.global.removeEventListener(eventName, callback, capture);
  },

  performance: window.performance,
  requestAnimationFrame: function requestAnimationFrame(callback) {
    return this.global.requestAnimationFrame(callback);
  }
};

if (typeof FEATURE_NO_IE === 'undefined') {
  var test = function test() {};

  if (test.name === undefined) {
    Object.defineProperty(Function.prototype, 'name', {
      get: function get() {
        var name = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];

        Object.defineProperty(this, 'name', { value: name });
        return name;
      }
    });
  }
}

if (typeof FEATURE_NO_IE === 'undefined') {
  if (!('classList' in document.createElement('_')) || document.createElementNS && !('classList' in document.createElementNS('http://www.w3.org/2000/svg', 'g'))) {
    var protoProp = 'prototype';
    var strTrim = String.prototype.trim;
    var arrIndexOf = Array.prototype.indexOf;
    var emptyArray = [];

    var DOMEx = function DOMEx(type, message) {
      this.name = type;
      this.code = DOMException[type];
      this.message = message;
    };

    var checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
      if (token === '') {
        throw new DOMEx('SYNTAX_ERR', 'An invalid or illegal string was specified');
      }

      if (/\s/.test(token)) {
        throw new DOMEx('INVALID_CHARACTER_ERR', 'String contains an invalid character');
      }

      return arrIndexOf.call(classList, token);
    };

    var ClassList = function ClassList(elem) {
      var trimmedClasses = strTrim.call(elem.getAttribute('class') || '');
      var classes = trimmedClasses ? trimmedClasses.split(/\s+/) : emptyArray;

      for (var i = 0, ii = classes.length; i < ii; ++i) {
        this.push(classes[i]);
      }

      this._updateClassName = function () {
        elem.setAttribute('class', this.toString());
      };
    };

    var classListProto = ClassList[protoProp] = [];

    DOMEx[protoProp] = Error[protoProp];

    classListProto.item = function (i) {
      return this[i] || null;
    };

    classListProto.contains = function (token) {
      token += '';
      return checkTokenAndGetIndex(this, token) !== -1;
    };

    classListProto.add = function () {
      var tokens = arguments;
      var i = 0;
      var ii = tokens.length;
      var token = void 0;
      var updated = false;

      do {
        token = tokens[i] + '';
        if (checkTokenAndGetIndex(this, token) === -1) {
          this.push(token);
          updated = true;
        }
      } while (++i < ii);

      if (updated) {
        this._updateClassName();
      }
    };

    classListProto.remove = function () {
      var tokens = arguments;
      var i = 0;
      var ii = tokens.length;
      var token = void 0;
      var updated = false;
      var index = void 0;

      do {
        token = tokens[i] + '';
        index = checkTokenAndGetIndex(this, token);
        while (index !== -1) {
          this.splice(index, 1);
          updated = true;
          index = checkTokenAndGetIndex(this, token);
        }
      } while (++i < ii);

      if (updated) {
        this._updateClassName();
      }
    };

    classListProto.toggle = function (token, force) {
      token += '';

      var result = this.contains(token);
      var method = result ? force !== true && 'remove' : force !== false && 'add';

      if (method) {
        this[method](token);
      }

      if (force === true || force === false) {
        return force;
      }

      return !result;
    };

    classListProto.toString = function () {
      return this.join(' ');
    };

    Object.defineProperty(Element.prototype, 'classList', {
      get: function get() {
        return new ClassList(this);
      },
      enumerable: true,
      configurable: true
    });
  } else {
    var testElement = document.createElement('_');
    testElement.classList.add('c1', 'c2');

    if (!testElement.classList.contains('c2')) {
      var createMethod = function createMethod(method) {
        var original = DOMTokenList.prototype[method];

        DOMTokenList.prototype[method] = function (token) {
          for (var i = 0, ii = arguments.length; i < ii; ++i) {
            token = arguments[i];
            original.call(this, token);
          }
        };
      };

      createMethod('add');
      createMethod('remove');
    }

    testElement.classList.toggle('c3', false);

    if (testElement.classList.contains('c3')) {
      var _toggle = DOMTokenList.prototype.toggle;

      DOMTokenList.prototype.toggle = function (token, force) {
        if (1 in arguments && !this.contains(token) === !force) {
          return force;
        }

        return _toggle.call(this, token);
      };
    }

    testElement = null;
  }
}

if (typeof FEATURE_NO_IE === 'undefined') {
  var _filterEntries = function _filterEntries(key, value) {
    var i = 0,
        n = _entries.length,
        result = [];
    for (; i < n; i++) {
      if (_entries[i][key] == value) {
        result.push(_entries[i]);
      }
    }
    return result;
  };

  var _clearEntries = function _clearEntries(type, name) {
    var i = _entries.length,
        entry;
    while (i--) {
      entry = _entries[i];
      if (entry.entryType == type && (name === void 0 || entry.name == name)) {
        _entries.splice(i, 1);
      }
    }
  };

  // @license http://opensource.org/licenses/MIT
  if ('performance' in window === false) {
    window.performance = {};
  }

  if ('now' in window.performance === false) {
    var nowOffset = Date.now();

    if (performance.timing && performance.timing.navigationStart) {
      nowOffset = performance.timing.navigationStart;
    }

    window.performance.now = function now() {
      return Date.now() - nowOffset;
    };
  }

  var startOffset = Date.now ? Date.now() : +new Date();
  var _entries = [];
  var _marksIndex = {};

  ;

  if (!window.performance.mark) {
    window.performance.mark = window.performance.webkitMark || function (name) {
      var mark = {
        name: name,
        entryType: "mark",
        startTime: window.performance.now(),
        duration: 0
      };

      _entries.push(mark);
      _marksIndex[name] = mark;
    };
  }

  if (!window.performance.measure) {
    window.performance.measure = window.performance.webkitMeasure || function (name, startMark, endMark) {
      startMark = _marksIndex[startMark].startTime;
      endMark = _marksIndex[endMark].startTime;

      _entries.push({
        name: name,
        entryType: "measure",
        startTime: startMark,
        duration: endMark - startMark
      });
    };
  }

  if (!window.performance.getEntriesByType) {
    window.performance.getEntriesByType = window.performance.webkitGetEntriesByType || function (type) {
      return _filterEntries("entryType", type);
    };
  }

  if (!window.performance.getEntriesByName) {
    window.performance.getEntriesByName = window.performance.webkitGetEntriesByName || function (name) {
      return _filterEntries("name", name);
    };
  }

  if (!window.performance.clearMarks) {
    window.performance.clearMarks = window.performance.webkitClearMarks || function (name) {
      _clearEntries("mark", name);
    };
  }

  if (!window.performance.clearMeasures) {
    window.performance.clearMeasures = window.performance.webkitClearMeasures || function (name) {
      _clearEntries("measure", name);
    };
  }

  _PLATFORM.performance = window.performance;
}

if (typeof FEATURE_NO_IE === 'undefined') {
  var con = window.console = window.console || {};
  var nop = function nop() {};

  if (!con.memory) con.memory = {};
  ('assert,clear,count,debug,dir,dirxml,error,exception,group,' + 'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' + 'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',').forEach(function (m) {
    if (!con[m]) con[m] = nop;
  });

  if (_typeof(con.log) === 'object') {
    'log,info,warn,error,assert,dir,clear,profile,profileEnd'.split(',').forEach(function (method) {
      console[method] = this.bind(console[method], console);
    }, Function.prototype.call);
  }
}

if (typeof FEATURE_NO_IE === 'undefined') {
  if (!window.CustomEvent || typeof window.CustomEvent !== 'function') {
    var _CustomEvent = function _CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };

      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };

    _CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = _CustomEvent;
  }
}

if (Element && !Element.prototype.matches) {
  var proto = Element.prototype;
  proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
}

var _FEATURE = {
  shadowDOM: !!HTMLElement.prototype.attachShadow,
  scopedCSS: 'scoped' in document.createElement('style'),
  htmlTemplateElement: function () {
    var d = document.createElement('div');
    d.innerHTML = '<template></template>';
    return 'content' in d.children[0];
  }(),
  mutationObserver: !!(window.MutationObserver || window.WebKitMutationObserver),
  ensureHTMLTemplateElement: function ensureHTMLTemplateElement(t) {
    return t;
  }
};

if (typeof FEATURE_NO_IE === 'undefined') {
  var isSVGTemplate = function isSVGTemplate(el) {
    return el.tagName === 'template' && el.namespaceURI === 'http://www.w3.org/2000/svg';
  };

  var fixSVGTemplateElement = function fixSVGTemplateElement(el) {
    var template = el.ownerDocument.createElement('template');
    var attrs = el.attributes;
    var length = attrs.length;
    var attr = void 0;

    el.parentNode.insertBefore(template, el);

    while (length-- > 0) {
      attr = attrs[length];
      template.setAttribute(attr.name, attr.value);
      el.removeAttribute(attr.name);
    }

    el.parentNode.removeChild(el);

    return fixHTMLTemplateElement(template);
  };

  var fixHTMLTemplateElement = function fixHTMLTemplateElement(template) {
    var content = template.content = document.createDocumentFragment();
    var child = void 0;

    while (child = template.firstChild) {
      content.appendChild(child);
    }

    return template;
  };

  var fixHTMLTemplateElementRoot = function fixHTMLTemplateElementRoot(template) {
    var content = fixHTMLTemplateElement(template).content;
    var childTemplates = content.querySelectorAll('template');

    for (var i = 0, ii = childTemplates.length; i < ii; ++i) {
      var child = childTemplates[i];

      if (isSVGTemplate(child)) {
        fixSVGTemplateElement(child);
      } else {
        fixHTMLTemplateElement(child);
      }
    }

    return template;
  };

  if (!_FEATURE.htmlTemplateElement) {
    _FEATURE.ensureHTMLTemplateElement = fixHTMLTemplateElementRoot;
  }
}

var shadowPoly = window.ShadowDOMPolyfill || null;

var _DOM = {
  Element: Element,
  NodeList: NodeList,
  SVGElement: SVGElement,
  boundary: 'aurelia-dom-boundary',
  addEventListener: function addEventListener(eventName, callback, capture) {
    document.addEventListener(eventName, callback, capture);
  },
  removeEventListener: function removeEventListener(eventName, callback, capture) {
    document.removeEventListener(eventName, callback, capture);
  },
  adoptNode: function adoptNode(node) {
    return document.adoptNode(node);
  },
  createAttribute: function createAttribute(name) {
    return document.createAttribute(name);
  },
  createElement: function createElement(tagName) {
    return document.createElement(tagName);
  },
  createTextNode: function createTextNode(text) {
    return document.createTextNode(text);
  },
  createComment: function createComment(text) {
    return document.createComment(text);
  },
  createDocumentFragment: function createDocumentFragment() {
    return document.createDocumentFragment();
  },
  createTemplateElement: function createTemplateElement() {
    var template = document.createElement('template');
    return _FEATURE.ensureHTMLTemplateElement(template);
  },
  createMutationObserver: function createMutationObserver(callback) {
    return new (window.MutationObserver || window.WebKitMutationObserver)(callback);
  },
  createCustomEvent: function createCustomEvent(eventType, options) {
    return new window.CustomEvent(eventType, options);
  },
  dispatchEvent: function dispatchEvent(evt) {
    document.dispatchEvent(evt);
  },
  getComputedStyle: function getComputedStyle(element) {
    return window.getComputedStyle(element);
  },
  getElementById: function getElementById(id) {
    return document.getElementById(id);
  },
  querySelector: function querySelector(query) {
    return document.querySelector(query);
  },
  querySelectorAll: function querySelectorAll(query) {
    return document.querySelectorAll(query);
  },
  nextElementSibling: function nextElementSibling(element) {
    if (element.nextElementSibling) {
      return element.nextElementSibling;
    }
    do {
      element = element.nextSibling;
    } while (element && element.nodeType !== 1);
    return element;
  },
  createTemplateFromMarkup: function createTemplateFromMarkup(markup) {
    var parser = document.createElement('div');
    parser.innerHTML = markup;

    var temp = parser.firstElementChild;
    if (!temp || temp.nodeName !== 'TEMPLATE') {
      throw new Error('Template markup must be wrapped in a <template> element e.g. <template> <!-- markup here --> </template>');
    }

    return _FEATURE.ensureHTMLTemplateElement(temp);
  },
  appendNode: function appendNode(newNode, parentNode) {
    (parentNode || document.body).appendChild(newNode);
  },
  replaceNode: function replaceNode(newNode, node, parentNode) {
    if (node.parentNode) {
      node.parentNode.replaceChild(newNode, node);
    } else if (shadowPoly !== null) {
      shadowPoly.unwrap(parentNode).replaceChild(shadowPoly.unwrap(newNode), shadowPoly.unwrap(node));
    } else {
      parentNode.replaceChild(newNode, node);
    }
  },
  removeNode: function removeNode(node, parentNode) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    } else if (parentNode) {
      if (shadowPoly !== null) {
        shadowPoly.unwrap(parentNode).removeChild(shadowPoly.unwrap(node));
      } else {
        parentNode.removeChild(node);
      }
    }
  },
  injectStyles: function injectStyles(styles, destination, prepend, id) {
    if (id) {
      var oldStyle = document.getElementById(id);
      if (oldStyle) {
        var isStyleTag = oldStyle.tagName.toLowerCase() === 'style';

        if (isStyleTag) {
          oldStyle.innerHTML = styles;
          return;
        }

        throw new Error('The provided id does not indicate a style tag.');
      }
    }

    var node = document.createElement('style');
    node.innerHTML = styles;
    node.type = 'text/css';

    if (id) {
      node.id = id;
    }

    destination = destination || document.head;

    if (prepend && destination.childNodes.length > 0) {
      destination.insertBefore(node, destination.childNodes[0]);
    } else {
      destination.appendChild(node);
    }

    return node;
  }
};

function initialize() {
  if (aurelia_pal__WEBPACK_IMPORTED_MODULE_0__.isInitialized) {
    return;
  }

  (0,aurelia_pal__WEBPACK_IMPORTED_MODULE_0__.initializePAL)(function (platform, feature, dom) {
    Object.assign(platform, _PLATFORM);
    Object.assign(feature, _FEATURE);
    Object.assign(dom, _DOM);

    Object.defineProperty(dom, 'title', {
      get: function get() {
        return document.title;
      },
      set: function set(value) {
        document.title = value;
      }
    });

    Object.defineProperty(dom, 'activeElement', {
      get: function get() {
        return document.activeElement;
      }
    });

    Object.defineProperty(platform, 'XMLHttpRequest', {
      get: function get() {
        return platform.global.XMLHttpRequest;
      }
    });
  });
}

/***/ }),

/***/ 1015:
/*!*********************************************************************!*\
  !*** ./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AggregateError": function() { return /* binding */ AggregateError; },
/* harmony export */   "DOM": function() { return /* binding */ DOM; },
/* harmony export */   "FEATURE": function() { return /* binding */ FEATURE; },
/* harmony export */   "PLATFORM": function() { return /* binding */ PLATFORM; },
/* harmony export */   "initializePAL": function() { return /* binding */ initializePAL; },
/* harmony export */   "isInitialized": function() { return /* binding */ isInitialized; },
/* harmony export */   "reset": function() { return /* binding */ reset; }
/* harmony export */ });

function AggregateError(message, innerError, skipIfAlreadyAggregate) {
  if (innerError) {
    if (innerError.innerError && skipIfAlreadyAggregate) {
      return innerError;
    }

    var separator = '\n------------------------------------------------\n';

    message += separator + 'Inner Error:\n';

    if (typeof innerError === 'string') {
      message += 'Message: ' + innerError;
    } else {
      if (innerError.message) {
        message += 'Message: ' + innerError.message;
      } else {
        message += 'Unknown Inner Error Type. Displaying Inner Error as JSON:\n ' + JSON.stringify(innerError, null, '  ');
      }

      if (innerError.stack) {
        message += '\nInner Error Stack:\n' + innerError.stack;
        message += '\nEnd Inner Error Stack';
      }
    }

    message += separator;
  }

  var e = new Error(message);
  if (innerError) {
    e.innerError = innerError;
  }

  return e;
}

var FEATURE = {};

var PLATFORM = {
  noop: function noop() {},
  eachModule: function eachModule() {},
  moduleName: function (_moduleName) {
    function moduleName(_x) {
      return _moduleName.apply(this, arguments);
    }

    moduleName.toString = function () {
      return _moduleName.toString();
    };

    return moduleName;
  }(function (moduleName) {
    return moduleName;
  })
};

PLATFORM.global = function () {
  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof __webpack_require__.g !== 'undefined') {
    return __webpack_require__.g;
  }

  return new Function('return this')();
}();

var DOM = {};
var isInitialized = false;

function initializePAL(callback) {
  if (isInitialized) {
    return;
  }
  isInitialized = true;
  if (typeof Object.getPropertyDescriptor !== 'function') {
    Object.getPropertyDescriptor = function (subject, name) {
      var pd = Object.getOwnPropertyDescriptor(subject, name);
      var proto = Object.getPrototypeOf(subject);
      while (typeof pd === 'undefined' && proto !== null) {
        pd = Object.getOwnPropertyDescriptor(proto, name);
        proto = Object.getPrototypeOf(proto);
      }
      return pd;
    };
  }

  callback(PLATFORM, FEATURE, DOM);
}
function reset() {
  isInitialized = false;
}

/***/ }),

/***/ 8627:
/*!***********************************************************************!*\
  !*** ./node_modules/aurelia-path/dist/native-modules/aurelia-path.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildQueryString": function() { return /* binding */ buildQueryString; },
/* harmony export */   "join": function() { return /* binding */ join; },
/* harmony export */   "parseQueryString": function() { return /* binding */ parseQueryString; },
/* harmony export */   "relativeToFile": function() { return /* binding */ relativeToFile; }
/* harmony export */ });
function trimDots(ary) {
    for (var i = 0; i < ary.length; ++i) {
        var part = ary[i];
        if (part === '.') {
            ary.splice(i, 1);
            i -= 1;
        }
        else if (part === '..') {
            if (i === 0 || (i === 1 && ary[2] === '..') || ary[i - 1] === '..') {
                continue;
            }
            else if (i > 0) {
                ary.splice(i - 1, 2);
                i -= 2;
            }
        }
    }
}
function relativeToFile(name, file) {
    var fileParts = file && file.split('/');
    var nameParts = name.trim().split('/');
    if (nameParts[0].charAt(0) === '.' && fileParts) {
        var normalizedBaseParts = fileParts.slice(0, fileParts.length - 1);
        nameParts.unshift.apply(nameParts, normalizedBaseParts);
    }
    trimDots(nameParts);
    return nameParts.join('/');
}
function join(path1, path2) {
    if (!path1) {
        return path2;
    }
    if (!path2) {
        return path1;
    }
    var schemeMatch = path1.match(/^([^/]*?:)\//);
    var scheme = (schemeMatch && schemeMatch.length > 0) ? schemeMatch[1] : '';
    path1 = path1.substr(scheme.length);
    var urlPrefix;
    if (path1.indexOf('///') === 0 && scheme === 'file:') {
        urlPrefix = '///';
    }
    else if (path1.indexOf('//') === 0) {
        urlPrefix = '//';
    }
    else if (path1.indexOf('/') === 0) {
        urlPrefix = '/';
    }
    else {
        urlPrefix = '';
    }
    var trailingSlash = path2.slice(-1) === '/' ? '/' : '';
    var url1 = path1.split('/');
    var url2 = path2.split('/');
    var url3 = [];
    for (var i = 0, ii = url1.length; i < ii; ++i) {
        if (url1[i] === '..') {
            if (url3.length && url3[url3.length - 1] !== '..') {
                url3.pop();
            }
            else {
                url3.push(url1[i]);
            }
        }
        else if (url1[i] === '.' || url1[i] === '') {
            continue;
        }
        else {
            url3.push(url1[i]);
        }
    }
    for (var i = 0, ii = url2.length; i < ii; ++i) {
        if (url2[i] === '..') {
            if (url3.length && url3[url3.length - 1] !== '..') {
                url3.pop();
            }
            else {
                url3.push(url2[i]);
            }
        }
        else if (url2[i] === '.' || url2[i] === '') {
            continue;
        }
        else {
            url3.push(url2[i]);
        }
    }
    return scheme + urlPrefix + url3.join('/') + trailingSlash;
}
var encode = encodeURIComponent;
var encodeKey = function (k) { return encode(k).replace('%24', '$'); };
function buildParam(key, value, traditional) {
    var result = [];
    if (value === null || value === undefined) {
        return result;
    }
    if (Array.isArray(value)) {
        for (var i = 0, l = value.length; i < l; i++) {
            if (traditional) {
                result.push(encodeKey(key) + "=" + encode(value[i]));
            }
            else {
                var arrayKey = key + '[' + (typeof value[i] === 'object' && value[i] !== null ? i : '') + ']';
                result = result.concat(buildParam(arrayKey, value[i]));
            }
        }
    }
    else if (typeof (value) === 'object' && !traditional) {
        for (var propertyName in value) {
            result = result.concat(buildParam(key + '[' + propertyName + ']', value[propertyName]));
        }
    }
    else {
        result.push(encodeKey(key) + "=" + encode(value));
    }
    return result;
}
function buildQueryString(params, traditional) {
    var pairs = [];
    var keys = Object.keys(params || {}).sort();
    for (var i = 0, len = keys.length; i < len; i++) {
        var key = keys[i];
        pairs = pairs.concat(buildParam(key, params[key], traditional));
    }
    if (pairs.length === 0) {
        return '';
    }
    return pairs.join('&');
}
function processScalarParam(existedParam, value) {
    if (Array.isArray(existedParam)) {
        existedParam.push(value);
        return existedParam;
    }
    if (existedParam !== undefined) {
        return [existedParam, value];
    }
    return value;
}
function parseComplexParam(queryParams, keys, value) {
    var currentParams = queryParams;
    var keysLastIndex = keys.length - 1;
    for (var j = 0; j <= keysLastIndex; j++) {
        var key = keys[j] === '' ? currentParams.length : keys[j];
        preventPollution(key);
        if (j < keysLastIndex) {
            var prevValue = !currentParams[key] || typeof currentParams[key] === 'object' ? currentParams[key] : [currentParams[key]];
            currentParams = currentParams[key] = prevValue || (isNaN(keys[j + 1]) ? {} : []);
        }
        else {
            currentParams = currentParams[key] = value;
        }
    }
}
function parseQueryString(queryString) {
    var queryParams = {};
    if (!queryString || typeof queryString !== 'string') {
        return queryParams;
    }
    var query = queryString;
    if (query.charAt(0) === '?') {
        query = query.substr(1);
    }
    var pairs = query.replace(/\+/g, ' ').split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        var key = decodeURIComponent(pair[0]);
        if (!key) {
            continue;
        }
        var keys = key.split('][');
        var keysLastIndex = keys.length - 1;
        if (/\[/.test(keys[0]) && /\]$/.test(keys[keysLastIndex])) {
            keys[keysLastIndex] = keys[keysLastIndex].replace(/\]$/, '');
            keys = keys.shift().split('[').concat(keys);
            keysLastIndex = keys.length - 1;
        }
        else {
            keysLastIndex = 0;
        }
        if (pair.length >= 2) {
            var value = pair[1] ? decodeURIComponent(pair[1]) : '';
            if (keysLastIndex) {
                parseComplexParam(queryParams, keys, value);
            }
            else {
                preventPollution(key);
                queryParams[key] = processScalarParam(queryParams[key], value);
            }
        }
        else {
            queryParams[key] = true;
        }
    }
    return queryParams;
}
function preventPollution(key) {
    if (key === '__proto__') {
        throw new Error('Prototype pollution detected.');
    }
}


//# sourceMappingURL=aurelia-path.js.map


/***/ })

}]);
//# sourceMappingURL=vendors-e116e113.1042448a11cb5c83059a.bundle.js.map