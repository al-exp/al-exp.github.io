(self["webpackChunkweb_client"] = self["webpackChunkweb_client"] || []).push([["vendors-ff100d7e"],{

/***/ 9449:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/core/collections/arrays.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contains": function() { return /* binding */ contains; },
/* harmony export */   "copy": function() { return /* binding */ copy; },
/* harmony export */   "equals": function() { return /* binding */ equals; },
/* harmony export */   "forEach": function() { return /* binding */ forEach; },
/* harmony export */   "frequency": function() { return /* binding */ frequency; },
/* harmony export */   "indexOf": function() { return /* binding */ indexOf; },
/* harmony export */   "lastIndexOf": function() { return /* binding */ lastIndexOf; },
/* harmony export */   "remove": function() { return /* binding */ remove; },
/* harmony export */   "swap": function() { return /* binding */ swap; },
/* harmony export */   "toString": function() { return /* binding */ toString; }
/* harmony export */ });
/* harmony import */ var _collection_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection-util */ 5664);

function indexOf(array, item, equalsFunction) {
    var equalityFunction = equalsFunction || _collection_util__WEBPACK_IMPORTED_MODULE_0__.defaultEquals;
    var length = array.length;
    for (var i = 0; i < length; i++) {
        if (equalityFunction(array[i], item)) {
            return i;
        }
    }
    return -1;
}
function lastIndexOf(array, item, equalsFunction) {
    var equalityFunction = equalsFunction || _collection_util__WEBPACK_IMPORTED_MODULE_0__.defaultEquals;
    var length = array.length;
    for (var i = length - 1; i >= 0; i--) {
        if (equalityFunction(array[i], item)) {
            return i;
        }
    }
    return -1;
}
function contains(array, item, equalsFunction) {
    return indexOf(array, item, equalsFunction) >= 0;
}
function remove(array, item, equalsFunction) {
    var index = indexOf(array, item, equalsFunction);
    if (index < 0) {
        return false;
    }
    array.splice(index, 1);
    return true;
}
function frequency(array, item, equalsFunction) {
    var equalityFunction = equalsFunction || _collection_util__WEBPACK_IMPORTED_MODULE_0__.defaultEquals;
    var length = array.length;
    var freq = 0;
    for (var i = 0; i < length; i++) {
        if (equalityFunction(array[i], item)) {
            freq++;
        }
    }
    return freq;
}
function equals(array1, array2, equalsFunction) {
    var equalityFunction = equalsFunction || _collection_util__WEBPACK_IMPORTED_MODULE_0__.defaultEquals;
    if (array1.length !== array2.length) {
        return false;
    }
    var length = array1.length;
    for (var i = 0; i < length; i++) {
        if (!equalityFunction(array1[i], array2[i])) {
            return false;
        }
    }
    return true;
}
function copy(array) {
    return array.concat();
}
function swap(array, i, j) {
    if (i < 0 || i >= array.length || j < 0 || j >= array.length) {
        return false;
    }
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return true;
}
function toString(array) {
    return "[ " + array.toString() + " ]";
}
function forEach(array, callback) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var ele = array_1[_i];
        if (callback(ele) === false) {
            return;
        }
    }
}

//# sourceMappingURL=arrays.js.map


/***/ }),

/***/ 5664:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/core/collections/collection-util.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compareToEquals": function() { return /* binding */ compareToEquals; },
/* harmony export */   "defaultCompare": function() { return /* binding */ defaultCompare; },
/* harmony export */   "defaultEquals": function() { return /* binding */ defaultEquals; },
/* harmony export */   "defaultToString": function() { return /* binding */ defaultToString; },
/* harmony export */   "has": function() { return /* binding */ has; },
/* harmony export */   "isFunction": function() { return /* binding */ isFunction; },
/* harmony export */   "isString": function() { return /* binding */ isString; },
/* harmony export */   "isUndefined": function() { return /* binding */ isUndefined; },
/* harmony export */   "makeString": function() { return /* binding */ makeString; },
/* harmony export */   "reverseCompareFunction": function() { return /* binding */ reverseCompareFunction; }
/* harmony export */ });
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var has = function (obj, prop) {
    return _hasOwnProperty.call(obj, prop);
};
function defaultCompare(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a === b) {
        return 0;
    }
    else {
        return 1;
    }
}
function defaultEquals(a, b) {
    return a === b;
}
function defaultToString(item) {
    if (item === null) {
        return 'COLLECTION_NULL';
    }
    else if (isUndefined(item)) {
        return 'COLLECTION_UNDEFINED';
    }
    else if (isString(item)) {
        return "$s + " + item;
    }
    else {
        return "$o + " + item.toString();
    }
}
function makeString(item, join) {
    if (join === void 0) { join = ','; }
    if (item === null) {
        return 'COLLECTION_NULL';
    }
    else if (isUndefined(item)) {
        return 'COLLECTION_UNDEFINED';
    }
    else if (isString(item)) {
        return item.toString();
    }
    else {
        var toret = '{';
        var first = true;
        for (var prop in item) {
            if (has(item, prop)) {
                if (first) {
                    first = false;
                }
                else {
                    toret = toret + join;
                }
                toret = toret + " " + prop + " : " + item[prop];
            }
        }
        return toret + " }";
    }
}
function isFunction(func) {
    return (typeof func) === 'function';
}
function isUndefined(obj) {
    return (typeof obj) === 'undefined';
}
function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
function reverseCompareFunction(compareFunction) {
    if (isUndefined(compareFunction) || !isFunction(compareFunction)) {
        return function (a, b) {
            if (a < b) {
                return 1;
            }
            else if (a === b) {
                return 0;
            }
            else {
                return -1;
            }
        };
    }
    else {
        return function (d, v) {
            return compareFunction(d, v) * -1;
        };
    }
}
function compareToEquals(compareFunction) {
    return function (a, b) {
        return compareFunction(a, b) === 0;
    };
}

//# sourceMappingURL=collection-util.js.map


/***/ }),

/***/ 5269:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/core/collections/dictionary.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dictionary": function() { return /* binding */ Dictionary; }
/* harmony export */ });
/* harmony import */ var _collection_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection-util */ 5664);

var Dictionary = (function () {
    function Dictionary(toStrFunction) {
        this.table = {};
        this.nElements = 0;
        this.toStr = toStrFunction || _collection_util__WEBPACK_IMPORTED_MODULE_0__.defaultToString;
    }
    Dictionary.prototype.getValue = function (key) {
        var pair = this.table["$" + this.toStr(key)];
        if (_collection_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined(pair)) {
            return undefined;
        }
        return pair.value;
    };
    Dictionary.prototype.setValue = function (key, value) {
        if (_collection_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined(key) || _collection_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined(value)) {
            return undefined;
        }
        var ret;
        var k = "$" + this.toStr(key);
        var previousElement = this.table[k];
        if (_collection_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined(previousElement)) {
            this.nElements++;
            ret = undefined;
        }
        else {
            ret = previousElement.value;
        }
        this.table[k] = {
            key: key,
            value: value
        };
        return ret;
    };
    Dictionary.prototype.remove = function (key) {
        var k = "$" + this.toStr(key);
        var previousElement = this.table[k];
        if (!_collection_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined(previousElement)) {
            delete this.table[k];
            this.nElements--;
            return previousElement.value;
        }
        return undefined;
    };
    Dictionary.prototype.keys = function () {
        var array = [];
        for (var name_1 in this.table) {
            if (_collection_util__WEBPACK_IMPORTED_MODULE_0__.has(this.table, name_1)) {
                var pair = this.table[name_1];
                array.push(pair.key);
            }
        }
        return array;
    };
    Dictionary.prototype.values = function () {
        var array = [];
        for (var name_2 in this.table) {
            if (_collection_util__WEBPACK_IMPORTED_MODULE_0__.has(this.table, name_2)) {
                var pair = this.table[name_2];
                array.push(pair.value);
            }
        }
        return array;
    };
    Dictionary.prototype.forEach = function (callback) {
        for (var name_3 in this.table) {
            if (_collection_util__WEBPACK_IMPORTED_MODULE_0__.has(this.table, name_3)) {
                var pair = this.table[name_3];
                var ret = callback(pair.key, pair.value);
                if (ret === false) {
                    return;
                }
            }
        }
    };
    Dictionary.prototype.containsKey = function (key) {
        return !_collection_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined(this.getValue(key));
    };
    Dictionary.prototype.clear = function () {
        this.table = {};
        this.nElements = 0;
    };
    Dictionary.prototype.size = function () {
        return this.nElements;
    };
    Dictionary.prototype.isEmpty = function () {
        return this.nElements <= 0;
    };
    Dictionary.prototype.toString = function () {
        var toret = '{';
        this.forEach(function (k, v) {
            toret += "\n\t" + k + " : " + v;
        });
        return toret + "\\n}";
    };
    return Dictionary;
}());


//# sourceMappingURL=dictionary.js.map


/***/ }),

/***/ 3658:
/*!************************************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/core/collections/index.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dictionary": function() { return /* reexport safe */ _dictionary__WEBPACK_IMPORTED_MODULE_1__.Dictionary; },
/* harmony export */   "LinkedList": function() { return /* reexport safe */ _linked_list__WEBPACK_IMPORTED_MODULE_2__.LinkedList; },
/* harmony export */   "Queue": function() { return /* reexport safe */ _queue__WEBPACK_IMPORTED_MODULE_3__.Queue; },
/* harmony export */   "Set": function() { return /* reexport safe */ _set__WEBPACK_IMPORTED_MODULE_4__.Set; },
/* harmony export */   "arrays": function() { return /* binding */ arrays; }
/* harmony export */ });
/* harmony import */ var _arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrays */ 9449);
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dictionary */ 5269);
/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linked-list */ 8193);
/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queue */ 3508);
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./set */ 4525);

var arrays = _arrays__WEBPACK_IMPORTED_MODULE_0__;





//# sourceMappingURL=index.js.map


/***/ }),

/***/ 8193:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/core/collections/linked-list.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkedList": function() { return /* binding */ LinkedList; }
/* harmony export */ });
/* harmony import */ var _collection_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection-util */ 5664);
/* harmony import */ var _arrays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrays */ 9449);


var LinkedList = (function () {
    function LinkedList() {
        this.firstNode = null;
        this.lastNode = null;
        this.nElements = 0;
    }
    LinkedList.prototype.add = function (item, index) {
        if (_collection_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined(index)) {
            index = this.nElements;
        }
        if (index < 0 || index > this.nElements || _collection_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined(item)) {
            return false;
        }
        var newNode = this.createNode(item);
        if (this.nElements === 0 || this.lastNode === null) {
            this.firstNode = newNode;
            this.lastNode = newNode;
        }
        else if (index === this.nElements) {
            this.lastNode.next = newNode;
            this.lastNode = newNode;
        }
        else if (index === 0) {
            newNode.next = this.firstNode;
            this.firstNode = newNode;
        }
        else {
            var prev = this.nodeAtIndex(index - 1);
            if (prev === null) {
                return false;
            }
            newNode.next = prev.next;
            prev.next = newNode;
        }
        this.nElements++;
        return true;
    };
    LinkedList.prototype.first = function () {
        if (this.firstNode !== null) {
            return this.firstNode.element;
        }
        return undefined;
    };
    LinkedList.prototype.last = function () {
        if (this.lastNode !== null) {
            return this.lastNode.element;
        }
        return undefined;
    };
    LinkedList.prototype.elementAtIndex = function (index) {
        var node = this.nodeAtIndex(index);
        if (node === null) {
            return undefined;
        }
        return node.element;
    };
    LinkedList.prototype.indexOf = function (item, equalsFunction) {
        var equalsF = equalsFunction || _collection_util__WEBPACK_IMPORTED_MODULE_0__.defaultEquals;
        if (_collection_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined(item)) {
            return -1;
        }
        var currentNode = this.firstNode;
        var index = 0;
        while (currentNode !== null) {
            if (equalsF(currentNode.element, item)) {
                return index;
            }
            index++;
            currentNode = currentNode.next;
        }
        return -1;
    };
    LinkedList.prototype.contains = function (item, equalsFunction) {
        return (this.indexOf(item, equalsFunction) >= 0);
    };
    LinkedList.prototype.remove = function (item, equalsFunction) {
        var equalsF = equalsFunction || _collection_util__WEBPACK_IMPORTED_MODULE_0__.defaultEquals;
        if (this.nElements < 1 || _collection_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined(item)) {
            return false;
        }
        var previous = null;
        var currentNode = this.firstNode;
        while (currentNode !== null) {
            if (equalsF(currentNode.element, item)) {
                if (previous === null) {
                    this.firstNode = currentNode.next;
                    if (currentNode === this.lastNode) {
                        this.lastNode = null;
                    }
                }
                else if (currentNode === this.lastNode) {
                    this.lastNode = previous;
                    previous.next = currentNode.next;
                    currentNode.next = null;
                }
                else {
                    previous.next = currentNode.next;
                    currentNode.next = null;
                }
                this.nElements--;
                return true;
            }
            previous = currentNode;
            currentNode = currentNode.next;
        }
        return false;
    };
    LinkedList.prototype.clear = function () {
        this.firstNode = null;
        this.lastNode = null;
        this.nElements = 0;
    };
    LinkedList.prototype.equals = function (other, equalsFunction) {
        var eqF = equalsFunction || _collection_util__WEBPACK_IMPORTED_MODULE_0__.defaultEquals;
        if (!(other instanceof LinkedList)) {
            return false;
        }
        if (this.size() !== other.size()) {
            return false;
        }
        return this.equalsAux(this.firstNode, other.firstNode, eqF);
    };
    LinkedList.prototype.removeElementAtIndex = function (index) {
        if (index < 0 || index >= this.nElements || this.firstNode === null || this.lastNode === null) {
            return undefined;
        }
        var element;
        if (this.nElements === 1) {
            element = this.firstNode.element;
            this.firstNode = null;
            this.lastNode = null;
        }
        else {
            var previous = this.nodeAtIndex(index - 1);
            if (previous === null) {
                element = this.firstNode.element;
                this.firstNode = this.firstNode.next;
            }
            else if (previous.next === this.lastNode) {
                element = this.lastNode.element;
                this.lastNode = previous;
            }
            if (previous !== null && previous.next !== null) {
                element = previous.next.element;
                previous.next = previous.next.next;
            }
        }
        this.nElements--;
        return element;
    };
    LinkedList.prototype.forEach = function (callback) {
        var currentNode = this.firstNode;
        while (currentNode !== null) {
            if (callback(currentNode.element) === false) {
                break;
            }
            currentNode = currentNode.next;
        }
    };
    LinkedList.prototype.reverse = function () {
        var previous = null;
        var current = this.firstNode;
        var temp = null;
        while (current !== null) {
            temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }
        temp = this.firstNode;
        this.firstNode = this.lastNode;
        this.lastNode = temp;
    };
    LinkedList.prototype.toArray = function () {
        var array = [];
        var currentNode = this.firstNode;
        while (currentNode !== null) {
            array.push(currentNode.element);
            currentNode = currentNode.next;
        }
        return array;
    };
    LinkedList.prototype.size = function () {
        return this.nElements;
    };
    LinkedList.prototype.isEmpty = function () {
        return this.nElements <= 0;
    };
    LinkedList.prototype.toString = function () {
        return _arrays__WEBPACK_IMPORTED_MODULE_1__.toString(this.toArray());
    };
    LinkedList.prototype.equalsAux = function (n1, n2, eqF) {
        while (n1 !== null && n2 !== null) {
            if (!eqF(n1.element, n2.element)) {
                return false;
            }
            n1 = n1.next;
            n2 = n2.next;
        }
        return true;
    };
    LinkedList.prototype.nodeAtIndex = function (index) {
        if (index < 0 || index >= this.nElements) {
            return null;
        }
        if (index === (this.nElements - 1)) {
            return this.lastNode;
        }
        var node = this.firstNode;
        for (var i = 0; i < index && node !== null; i++) {
            node = node.next;
        }
        return node;
    };
    LinkedList.prototype.createNode = function (item) {
        return {
            element: item,
            next: null
        };
    };
    return LinkedList;
}());


//# sourceMappingURL=linked-list.js.map


/***/ }),

/***/ 3508:
/*!************************************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/core/collections/queue.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Queue": function() { return /* binding */ Queue; }
/* harmony export */ });
/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list */ 8193);

var Queue = (function () {
    function Queue() {
        this.list = new _linked_list__WEBPACK_IMPORTED_MODULE_0__.LinkedList();
    }
    Queue.prototype.enqueue = function (elem) {
        return this.list.add(elem);
    };
    Queue.prototype.add = function (elem) {
        return this.list.add(elem);
    };
    Queue.prototype.dequeue = function () {
        if (this.list.size() !== 0) {
            var el = this.list.first();
            this.list.removeElementAtIndex(0);
            return el;
        }
        return undefined;
    };
    Queue.prototype.peek = function () {
        if (this.list.size() !== 0) {
            return this.list.first();
        }
        return undefined;
    };
    Queue.prototype.size = function () {
        return this.list.size();
    };
    Queue.prototype.contains = function (elem, equalsFunction) {
        return this.list.contains(elem, equalsFunction);
    };
    Queue.prototype.isEmpty = function () {
        return this.list.size() <= 0;
    };
    Queue.prototype.clear = function () {
        this.list.clear();
    };
    Queue.prototype.forEach = function (callback) {
        this.list.forEach(callback);
    };
    return Queue;
}());


//# sourceMappingURL=queue.js.map


/***/ }),

/***/ 4525:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/core/collections/set.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Set": function() { return /* binding */ Set; }
/* harmony export */ });
/* harmony import */ var _collection_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection-util */ 5664);
/* harmony import */ var _arrays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrays */ 9449);
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dictionary */ 5269);



var Set = (function () {
    function Set(toStringFunction) {
        this.dictionary = new _dictionary__WEBPACK_IMPORTED_MODULE_2__.Dictionary(toStringFunction);
    }
    Set.prototype.contains = function (element) {
        return this.dictionary.containsKey(element);
    };
    Set.prototype.add = function (element) {
        if (this.contains(element) || _collection_util__WEBPACK_IMPORTED_MODULE_0__.isUndefined(element)) {
            return false;
        }
        else {
            this.dictionary.setValue(element, element);
            return true;
        }
    };
    Set.prototype.intersection = function (otherSet) {
        var _this = this;
        this.forEach(function (element) {
            if (!otherSet.contains(element)) {
                _this.remove(element);
            }
            return true;
        });
    };
    Set.prototype.union = function (otherSet) {
        otherSet.forEach(function (element) {
            this.add(element);
            return true;
        });
    };
    Set.prototype.difference = function (otherSet) {
        otherSet.forEach(function (element) {
            this.remove(element);
            return true;
        });
    };
    Set.prototype.isSubsetOf = function (otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        var isSub = true;
        this.forEach(function (element) {
            if (!otherSet.contains(element)) {
                isSub = false;
                return false;
            }
            return true;
        });
        return isSub;
    };
    Set.prototype.remove = function (element) {
        if (!this.contains(element)) {
            return false;
        }
        else {
            this.dictionary.remove(element);
            return true;
        }
    };
    Set.prototype.forEach = function (callback) {
        this.dictionary.forEach(function (k, v) {
            return callback(v);
        });
    };
    Set.prototype.toArray = function () {
        return this.dictionary.values();
    };
    Set.prototype.isEmpty = function () {
        return this.dictionary.isEmpty();
    };
    Set.prototype.size = function () {
        return this.dictionary.size();
    };
    Set.prototype.clear = function () {
        this.dictionary.clear();
    };
    Set.prototype.toString = function () {
        return _arrays__WEBPACK_IMPORTED_MODULE_1__.toString(this.toArray());
    };
    return Set;
}());


//# sourceMappingURL=set.js.map


/***/ }),

/***/ 9571:
/*!***********************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/core/guid.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Guid": function() { return /* binding */ Guid; }
/* harmony export */ });
var Guid = (function () {
    function Guid(guid) {
        if (!guid) {
            throw new TypeError('Invalid argument; `value` has no value.');
        }
        this.value = Guid.EMPTY;
        if (guid && Guid.isGuid(guid)) {
            this.value = guid;
        }
    }
    Guid.isGuid = function (guid) {
        var value = guid.toString();
        return guid && (guid instanceof Guid || Guid.validator.test(value));
    };
    Guid.create = function () {
        return new Guid([Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join('-'));
    };
    Guid.createEmpty = function () {
        return new Guid('emptyguid');
    };
    Guid.parse = function (guid) {
        return new Guid(guid);
    };
    Guid.raw = function () {
        return [Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join('-');
    };
    Guid.gen = function (count) {
        var out = '';
        for (var i = 0; i < count; i++) {
            var random = crypto.getRandomValues(new Uint32Array(1))[0];
            random = random / Math.pow(10, random.toString().length);
            out += (((1 + random) * 0x10000) | 0)
                .toString(16)
                .substring(1);
        }
        return out;
    };
    Guid.prototype.equals = function (other) {
        return Guid.isGuid(other) && this.value === other.toString();
    };
    Guid.prototype.isEmpty = function () {
        return this.value === Guid.EMPTY;
    };
    Guid.prototype.toString = function () {
        return this.value;
    };
    Guid.prototype.toJSON = function () {
        return {
            value: this.value
        };
    };
    Guid.validator = new RegExp('^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$', 'i');
    Guid.EMPTY = '00000000-0000-0000-0000-000000000000';
    return Guid;
}());


//# sourceMappingURL=guid.js.map


/***/ }),

/***/ 6309:
/*!************************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/core/index.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dictionary": function() { return /* reexport safe */ _collections__WEBPACK_IMPORTED_MODULE_3__.Dictionary; },
/* harmony export */   "Guid": function() { return /* reexport safe */ _guid__WEBPACK_IMPORTED_MODULE_2__.Guid; },
/* harmony export */   "LinkedList": function() { return /* reexport safe */ _collections__WEBPACK_IMPORTED_MODULE_3__.LinkedList; },
/* harmony export */   "Queue": function() { return /* reexport safe */ _collections__WEBPACK_IMPORTED_MODULE_3__.Queue; },
/* harmony export */   "Set": function() { return /* reexport safe */ _collections__WEBPACK_IMPORTED_MODULE_3__.Set; },
/* harmony export */   "arrays": function() { return /* reexport safe */ _collections__WEBPACK_IMPORTED_MODULE_3__.arrays; },
/* harmony export */   "getDefaultBindingEngine": function() { return /* binding */ getDefaultBindingEngine; },
/* harmony export */   "getDefaultObserverLocator": function() { return /* binding */ getDefaultObserverLocator; }
/* harmony export */ });
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-binding */ 6778);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _guid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guid */ 9571);
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collections */ 3658);




function getDefaultBindingEngine() {
    return aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.Container.instance.get(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.BindingEngine);
}
function getDefaultObserverLocator() {
    return aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.Container.instance.get(aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.ObserverLocator);
}
String.empty = ''.toString();
String.isEmptyOrWhitespace = function (s) {
    return (s !== undefined && s !== null) && s.trim().length === 0;
};

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "@logofx/aurelia-mvvm-plugin":
/*!*******************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dictionary": function() { return /* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_2__.Dictionary; },
/* harmony export */   "EditableModel": function() { return /* reexport safe */ _model_model__WEBPACK_IMPORTED_MODULE_1__.EditableModel; },
/* harmony export */   "EditableObjectViewModel": function() { return /* reexport safe */ _view_model__WEBPACK_IMPORTED_MODULE_3__.EditableObjectViewModel; },
/* harmony export */   "Guid": function() { return /* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_2__.Guid; },
/* harmony export */   "LinkedList": function() { return /* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_2__.LinkedList; },
/* harmony export */   "Model": function() { return /* reexport safe */ _model_model__WEBPACK_IMPORTED_MODULE_1__.Model; },
/* harmony export */   "ObjectViewModel": function() { return /* reexport safe */ _view_model__WEBPACK_IMPORTED_MODULE_3__.ObjectViewModel; },
/* harmony export */   "Queue": function() { return /* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_2__.Queue; },
/* harmony export */   "ScreenObjectViewModel": function() { return /* reexport safe */ _view_model__WEBPACK_IMPORTED_MODULE_3__.ScreenObjectViewModel; },
/* harmony export */   "Set": function() { return /* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_2__.Set; },
/* harmony export */   "ViewModelCreatorService": function() { return /* reexport safe */ _view_model__WEBPACK_IMPORTED_MODULE_3__.ViewModelCreatorService; },
/* harmony export */   "WindowManager": function() { return /* reexport safe */ _ui_services__WEBPACK_IMPORTED_MODULE_4__.WindowManager; },
/* harmony export */   "WrappingCollection": function() { return /* reexport safe */ _view_model__WEBPACK_IMPORTED_MODULE_3__.WrappingCollection; },
/* harmony export */   "arrays": function() { return /* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_2__.arrays; },
/* harmony export */   "getDefaultBindingEngine": function() { return /* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_2__.getDefaultBindingEngine; },
/* harmony export */   "getDefaultObserverLocator": function() { return /* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_2__.getDefaultObserverLocator; },
/* harmony export */   "has": function() { return /* binding */ has; },
/* harmony export */   "isString": function() { return /* binding */ isString; },
/* harmony export */   "isUndefined": function() { return /* binding */ isUndefined; },
/* harmony export */   "makeString": function() { return /* binding */ makeString; },
/* harmony export */   "utils": function() { return /* reexport module object */ _utils__WEBPACK_IMPORTED_MODULE_0__; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 3271);
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/model */ 3788);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ 6309);
/* harmony import */ var _view_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-model */ 7086);
/* harmony import */ var _ui_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-services */ 7128);






function isUndefined(obj) {
    return (typeof obj) === 'undefined';
}
function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var has = function (obj, prop) {
    return _hasOwnProperty.call(obj, prop);
};
function makeString(item, join) {
    if (join === void 0) { join = ','; }
    if (item === null) {
        return 'COLLECTION_NULL';
    }
    else if (isUndefined(item)) {
        return 'COLLECTION_UNDEFINED';
    }
    else if (isString(item)) {
        return item.toString();
    }
    else {
        var toret = '{';
        var first = true;
        for (var prop in item) {
            if (has(item, prop)) {
                if (first) {
                    first = false;
                }
                else {
                    toret = toret + join;
                }
                toret = toret + " " + prop + ": " + item[prop];
            }
        }
        return "" + toret + '}';
    }
}

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3788:
/*!*************************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/model/model.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditableModel": function() { return /* binding */ EditableModel; },
/* harmony export */   "Model": function() { return /* binding */ Model; }
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "@logofx/aurelia-mvvm-plugin");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Model = (function () {
    function Model() {
    }
    Object.defineProperty(Model.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        set: function (value) {
            if (value === this._rules) {
                return;
            }
            this._rules = value;
        },
        enumerable: false,
        configurable: true
    });
    Model.prototype.toString = function () {
        return (0,_index__WEBPACK_IMPORTED_MODULE_0__.makeString)(this);
    };
    return Model;
}());

var EditableModel = (function (_super) {
    __extends(EditableModel, _super);
    function EditableModel() {
        var _this = _super.call(this) || this;
        _this._isDirty = false;
        _this._isNew = false;
        _this._isEditing = false;
        return _this;
    }
    Object.defineProperty(EditableModel.prototype, "isNew", {
        get: function () {
            return this._isNew;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditableModel.prototype, "isDirty", {
        get: function () {
            return this._isDirty;
        },
        enumerable: false,
        configurable: true
    });
    EditableModel.prototype.makeDirty = function () {
        this._isDirty = ( true && this._isEditing);
    };
    EditableModel.prototype.cleanDirty = function () {
        this._isDirty = false;
    };
    EditableModel.prototype.beginEdit = function () {
        this.cleanDirty();
        this._isEditing = true;
    };
    EditableModel.prototype.cancelEdit = function () {
        this.cleanDirty();
        this._isEditing = false;
    };
    EditableModel.prototype.commitEdit = function () {
        this.cleanDirty();
        this._isEditing = false;
    };
    EditableModel.prototype.makeNew = function () {
        if (!this._newGuard) {
            this._newGuard = this._isNew = true;
        }
    };
    return EditableModel;
}(Model));


//# sourceMappingURL=model.js.map


/***/ }),

/***/ "@logofx/aurelia-mvvm-plugin/ui-services/dialog":
/*!********************************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/ui-services/dialog.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dialog": function() { return /* binding */ Dialog; }
/* harmony export */ });
var Dialog = (function () {
    function Dialog(dialogController) {
    }
    Dialog.prototype.activate = function (viewModel) {
        this.viewModel = viewModel;
    };
    return Dialog;
}());


//# sourceMappingURL=dialog.js.map


/***/ }),

/***/ 7128:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/ui-services/index.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WindowManager": function() { return /* reexport safe */ _window_manager__WEBPACK_IMPORTED_MODULE_0__.WindowManager; }
/* harmony export */ });
/* harmony import */ var _window_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./window-manager */ 9072);


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 9072:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/ui-services/window-manager.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WindowManager": function() { return /* binding */ WindowManager; }
/* harmony export */ });
/* harmony import */ var aurelia_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dialog */ "aurelia-dialog");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog */ "@logofx/aurelia-mvvm-plugin/ui-services/dialog");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var WindowManager = (function () {
    function WindowManager(dialogService) {
        this.dialogService = dialogService;
    }
    WindowManager.prototype.show = function (viewModel) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        _this.dialogService.open({
                            viewModel: _dialog__WEBPACK_IMPORTED_MODULE_1__.Dialog,
                            model: viewModel
                        })
                            .whenClosed(function (response) {
                            resolve(response);
                        });
                    })];
            });
        });
    };
    WindowManager = __decorate([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.autoinject,
        __metadata("design:paramtypes", [aurelia_dialog__WEBPACK_IMPORTED_MODULE_0__.DialogService])
    ], WindowManager);
    return WindowManager;
}());


//# sourceMappingURL=window-manager.js.map


/***/ }),

/***/ 3271:
/*!*******************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/utils.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clear": function() { return /* binding */ clear; },
/* harmony export */   "deepClone": function() { return /* binding */ deepClone; },
/* harmony export */   "jsonClone": function() { return /* binding */ jsonClone; },
/* harmony export */   "spreadClone": function() { return /* binding */ spreadClone; }
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function clear(array) {
    array.splice(0, array.length);
    return array;
}
function jsonClone(source) {
    var seen = [];
    var json = JSON.stringify(source, function (_, val) {
        if (val != null && typeof val === 'object') {
            if (seen.indexOf(val) >= 0) {
                return;
            }
            seen.push(val);
        }
        return val;
    });
    var temp = JSON.parse(json);
    return temp;
}
function spreadClone(source) {
    return __assign({}, source);
}
function deepClone(obj) {
    var copy;
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = deepClone(obj[i]);
        }
        return copy;
    }
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = deepClone(obj[attr]);
            }
        }
        return copy;
    }
    throw new Error('Unable to copy obj! Its type isn\'t supported.');
}

//# sourceMappingURL=utils.js.map


/***/ }),

/***/ 1602:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/view-model/editable-object-view-model.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditableObjectViewModel": function() { return /* binding */ EditableObjectViewModel; }
/* harmony export */ });
/* harmony import */ var _object_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object-view-model */ 5336);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var EditableObjectViewModel = (function (_super) {
    __extends(EditableObjectViewModel, _super);
    function EditableObjectViewModel(model) {
        return _super.call(this, model) || this;
    }
    EditableObjectViewModel.prototype.beginEdit = function () {
        this.model.beginEdit();
    };
    EditableObjectViewModel.prototype.cancelEdit = function () {
    };
    EditableObjectViewModel.prototype.endEdit = function () {
        var _this = this;
        this
            .validationController
            .validate()
            .then(function (validation) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!validation.valid) return [3, 1];
                        throw new Error(validation.results.toString());
                    case 1: return [4, this.save(this.model)
                            .then(function () {
                            _this.model.commitEdit();
                        })
                            .then(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2, this.afterSave(this.model)];
                        }); }); })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        }); })
            .catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.showError(error)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        }); });
    };
    return EditableObjectViewModel;
}(_object_view_model__WEBPACK_IMPORTED_MODULE_0__.ObjectViewModel));


//# sourceMappingURL=editable-object-view-model.js.map


/***/ }),

/***/ 7086:
/*!******************************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/view-model/index.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditableObjectViewModel": function() { return /* reexport safe */ _editable_object_view_model__WEBPACK_IMPORTED_MODULE_4__.EditableObjectViewModel; },
/* harmony export */   "ObjectViewModel": function() { return /* reexport safe */ _object_view_model__WEBPACK_IMPORTED_MODULE_0__.ObjectViewModel; },
/* harmony export */   "ScreenObjectViewModel": function() { return /* reexport safe */ _screen_object_view_model__WEBPACK_IMPORTED_MODULE_1__.ScreenObjectViewModel; },
/* harmony export */   "ViewModelCreatorService": function() { return /* reexport safe */ _view_model_creator_service__WEBPACK_IMPORTED_MODULE_2__.ViewModelCreatorService; },
/* harmony export */   "WrappingCollection": function() { return /* reexport safe */ _wrapping_collection__WEBPACK_IMPORTED_MODULE_3__.WrappingCollection; }
/* harmony export */ });
/* harmony import */ var _object_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object-view-model */ 5336);
/* harmony import */ var _screen_object_view_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen-object-view-model */ 2067);
/* harmony import */ var _view_model_creator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-model-creator-service */ 2726);
/* harmony import */ var _wrapping_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wrapping-collection */ 7924);
/* harmony import */ var _editable_object_view_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editable-object-view-model */ 1602);






//# sourceMappingURL=index.js.map


/***/ }),

/***/ 5336:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/view-model/object-view-model.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectViewModel": function() { return /* binding */ ObjectViewModel; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-validation */ "aurelia-validation");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObjectViewModel = (function () {
    function ObjectViewModel(model) {
        this._isBusy = false;
        this._isSelected = false;
        this._isEnabled = true;
        this.model = model;
        this.validationController = aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.Container.instance.get(aurelia_validation__WEBPACK_IMPORTED_MODULE_1__.ValidationController);
        this.validationController.changeTrigger(aurelia_validation__WEBPACK_IMPORTED_MODULE_1__.validateTrigger.changeOrBlur);
    }
    Object.defineProperty(ObjectViewModel.prototype, "isBusy", {
        get: function () {
            return this._isBusy;
        },
        set: function (value) {
            if (this._isBusy === value) {
                return;
            }
            this._isBusy = value;
            this.isBusyChanged(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObjectViewModel.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        set: function (value) {
            if (this._isSelected === value) {
                return;
            }
            this._isSelected = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObjectViewModel.prototype, "isEnabled", {
        get: function () {
            return this._isEnabled;
        },
        set: function (value) {
            if (this._isEnabled === value) {
                return;
            }
            this._isEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ObjectViewModel.prototype.isBusyChanged = function (value) { };
    __decorate([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable)(),
        __metadata("design:type", Object)
    ], ObjectViewModel.prototype, "model", void 0);
    return ObjectViewModel;
}());


//# sourceMappingURL=object-view-model.js.map


/***/ }),

/***/ 2067:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/view-model/screen-object-view-model.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenObjectViewModel": function() { return /* binding */ ScreenObjectViewModel; }
/* harmony export */ });
/* harmony import */ var aurelia_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-validation */ "aurelia-validation");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScreenObjectViewModel = (function () {
    function ScreenObjectViewModel(model) {
        this._isSelected = false;
        this._isEnabled = true;
        this.model = model;
        var controllerFactory = aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.Container.instance.get(aurelia_validation__WEBPACK_IMPORTED_MODULE_0__.ValidationControllerFactory);
        this.controller = controllerFactory.createForCurrentScope();
    }
    Object.defineProperty(ScreenObjectViewModel.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        set: function (value) {
            if (this._isSelected === value) {
                return;
            }
            this._isSelected = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScreenObjectViewModel.prototype, "isEnabled", {
        get: function () {
            return this._isEnabled;
        },
        set: function (value) {
            if (this._isEnabled === value) {
                return;
            }
            this._isEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.bindable)(),
        __metadata("design:type", Object)
    ], ScreenObjectViewModel.prototype, "model", void 0);
    return ScreenObjectViewModel;
}());


//# sourceMappingURL=screen-object-view-model.js.map


/***/ }),

/***/ 2726:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/view-model/view-model-creator-service.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewModelCreatorService": function() { return /* binding */ ViewModelCreatorService; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");

var ViewModelCreatorService = (function () {
    function ViewModelCreatorService() {
    }
    ViewModelCreatorService.prototype.create = function (type) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var instance = aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.Container.instance.get(type);
        if (rest.length > 0) {
            instance['model'] = rest[0];
            if (rest.length > 1) {
                instance['navigationService'] = rest[1];
            }
        }
        return instance;
    };
    return ViewModelCreatorService;
}());


//# sourceMappingURL=view-model-creator-service.js.map


/***/ }),

/***/ 7924:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/view-model/wrapping-collection.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrappingCollection": function() { return /* binding */ WrappingCollection; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ 6309);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WrappingCollection = (function (_super) {
    __extends(WrappingCollection, _super);
    function WrappingCollection(factoryMethod, source) {
        var _newTarget = this.constructor;
        var _this = _super.call(this) || this;
        _this._internalMap = new WeakMap();
        _this.pushCore = function (model, wrapped) {
            _this._internalMap.set(model, wrapped);
            _this.push(wrapped);
        };
        _this.containsWrapper = function (model) {
            return _this._internalMap.has(model);
        };
        _this.addCore = function (modelItem, wrappedItem, indexOfModelItem) {
            if (_this.containsWrapper(modelItem)) {
                throw new Error('The duplications are not allowed for the model items.');
            }
            _this._internalMap.set(modelItem, wrappedItem);
            _this.splice(indexOfModelItem, 0, wrappedItem);
        };
        _this.removeCore = function (index, removedItem) {
            _this._internalMap.delete(removedItem);
            _this.splice(index, 1);
        };
        _this.onSubscribe = function (changes) {
            if (changes.length === 0) {
                return;
            }
            var innerChanges = changes[0];
            if (innerChanges.addedCount === 1) {
                _this.addCore(_this._source[innerChanges.index], WrappingCollection_1.createWrapper(_this._source[innerChanges.index], _this.factoryMethod), innerChanges.index);
            }
            else if (innerChanges.addedCount > 1) {
                for (var i = 0; i < innerChanges.addedCount; i++) {
                    _this.addCore(_this._source[innerChanges.index + i], WrappingCollection_1.createWrapper(_this._source[innerChanges.index + i], _this.factoryMethod), innerChanges.index + i);
                }
            }
            else if (innerChanges.removed.length === 1) {
                _this.removeCore(innerChanges.index, innerChanges.removed[0]);
            }
            else if (innerChanges.removed.length > 1) {
                innerChanges.removed.forEach(function (originalItem) {
                    var index = _this.findIndex(function (item) { return item.model === originalItem; });
                    _this.removeCore(index, originalItem);
                });
            }
        };
        Object.setPrototypeOf(_this, _newTarget.prototype);
        if (factoryMethod === null || factoryMethod === undefined) {
            factoryMethod = function (item) { return item; };
        }
        _this.factoryMethod = factoryMethod;
        if (source === null || source === undefined) {
            _this._source = [];
        }
        else {
            _this._source = source;
        }
        _core__WEBPACK_IMPORTED_MODULE_1__.getDefaultObserverLocator()
            .getArrayObserver(_this._source)
            .subscribe('clbk', _this.onSubscribe);
        for (var _i = 0, _a = _this._source; _i < _a.length; _i++) {
            var item = _a[_i];
            _this.pushCore(item, WrappingCollection_1.createWrapper(item, _this.factoryMethod));
        }
        return _this;
    }
    WrappingCollection_1 = WrappingCollection;
    WrappingCollection.createWrapper = function (item, factoryMethod) {
        return factoryMethod(item);
    };
    WrappingCollection.prototype.getSelectedItems = function () {
        return _super.prototype.filter.call(this, function (item) { return item.isSelected; });
    };
    WrappingCollection.prototype.canSelectAll = function () {
        return this.length > this.getSelectedItems().length;
    };
    WrappingCollection.prototype.selectAll = function () {
        this.forEach(function (item) { return item.isSelected = true; });
    };
    WrappingCollection.prototype.canUnselectAll = function () {
        return this.getSelectedItems().length > 0;
    };
    WrappingCollection.prototype.unselectAll = function () {
        this.forEach(function (item) { return item.isSelected = false; });
    };
    WrappingCollection.prototype.created = function (owningView, myView) {
    };
    WrappingCollection.prototype.attached = function () {
    };
    WrappingCollection.prototype.canActivate = function (params, routeConfig, navigationInstruction) {
    };
    WrappingCollection.prototype.activate = function (params, routeConfig, navigationInstruction) {
    };
    WrappingCollection.prototype.canDeactivate = function () {
    };
    WrappingCollection.prototype.deactivate = function () {
    };
    WrappingCollection.prototype.bind = function (bindingContext, overrideContext) {
    };
    WrappingCollection.prototype.unbind = function () {
    };
    WrappingCollection.prototype.clbk = function (changes) {
    };
    var WrappingCollection_1;
    WrappingCollection = WrappingCollection_1 = __decorate([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.transient)(WrappingCollection_1),
        __metadata("design:paramtypes", [Function, Array])
    ], WrappingCollection);
    return WrappingCollection;
}(Array));


//# sourceMappingURL=wrapping-collection.js.map


/***/ }),

/***/ "@logofx/aurelia-mvvm-plugin/ui-services/dialog.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@logofx/aurelia-mvvm-plugin/dist/native-modules/ui-services/dialog.html ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template>\n   <compose view-model.bind=\"viewModel\"></compose>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ 782:
/*!*********************************************!*\
  !*** ./node_modules/lodash.topath/index.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (isArray(value)) {
    return arrayMap(value, toKey);
  }
  return isSymbol(value) ? [value] : copyArray(stringToPath(value));
}

module.exports = toPath;


/***/ })

}]);
//# sourceMappingURL=vendors-ff100d7e.1042448a11cb5c83059a.bundle.js.map