(self["webpackChunkweb_client"] = self["webpackChunkweb_client"] || []).push([["vendors-da7e83e9"],{

/***/ "aurelia-testing":
/*!*****************************************************************************!*\
  !*** ./node_modules/aurelia-testing/dist/native-modules/aurelia-testing.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompileSpy": function() { return /* binding */ CompileSpy; },
/* harmony export */   "ComponentTester": function() { return /* binding */ ComponentTester; },
/* harmony export */   "StageComponent": function() { return /* binding */ StageComponent; },
/* harmony export */   "ViewSpy": function() { return /* binding */ ViewSpy; },
/* harmony export */   "configure": function() { return /* binding */ configure; },
/* harmony export */   "waitFor": function() { return /* binding */ waitFor; },
/* harmony export */   "waitForDocumentElement": function() { return /* binding */ waitForDocumentElement; },
/* harmony export */   "waitForDocumentElements": function() { return /* binding */ waitForDocumentElements; }
/* harmony export */ });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ 1781);
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-logging */ 8099);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-pal */ 1015);




var CompileSpy = (function () {
    function CompileSpy(element, instruction) {
        (0,aurelia_logging__WEBPACK_IMPORTED_MODULE_1__.getLogger)('compile-spy').info(element.toString(), instruction);
    }
    Object.defineProperty(CompileSpy, "inject", {
        get: function () { return [aurelia_pal__WEBPACK_IMPORTED_MODULE_2__.DOM.Element, aurelia_templating__WEBPACK_IMPORTED_MODULE_0__.TargetInstruction]; },
        enumerable: false,
        configurable: true
    });
    CompileSpy.$resource = {
        type: 'attribute',
        name: 'compile-spy'
    };
    return CompileSpy;
}());

var ViewSpy = (function () {
    function ViewSpy() {
        this.logger = (0,aurelia_logging__WEBPACK_IMPORTED_MODULE_1__.getLogger)('view-spy');
    }
    ViewSpy.prototype._log = function (lifecycleName, context) {
        if (!this.value && lifecycleName === 'created') {
            this.logger.info(lifecycleName, this.view);
        }
        else if (this.value && this.value.indexOf(lifecycleName) !== -1) {
            this.logger.info(lifecycleName, this.view, context);
        }
    };
    ViewSpy.prototype.created = function (view) {
        this.view = view;
        this._log('created');
    };
    ViewSpy.prototype.bind = function (bindingContext) {
        this._log('bind', bindingContext);
    };
    ViewSpy.prototype.attached = function () {
        this._log('attached');
    };
    ViewSpy.prototype.detached = function () {
        this._log('detached');
    };
    ViewSpy.prototype.unbind = function () {
        this._log('unbind');
    };
    ViewSpy.$resource = {
        type: 'attribute',
        name: 'view-spy'
    };
    return ViewSpy;
}());

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function waitFor(getter, options) {
    if (options === void 0) { options = { present: true, interval: 50, timeout: 5000 }; }
    var timedOut = false;
    options = __assign({ present: true, interval: 50, timeout: 5000 }, options);
    function wait() {
        var element = getter();
        var found = element !== null && (!(element instanceof NodeList) &&
            !element.jquery || element.length > 0);
        if (!options.present === !found || timedOut) {
            return Promise.resolve(element);
        }
        return new Promise(function (rs) { return setTimeout(rs, options.interval); }).then(wait);
    }
    return Promise.race([
        new Promise(function (_, rj) { return setTimeout(function () {
            timedOut = true;
            rj(new Error(options.present ? 'Element not found' : 'Element not removed'));
        }, options.timeout); }),
        wait()
    ]);
}
function waitForDocumentElement(selector, options) {
    return waitFor(function () { return document.querySelector(selector); }, options);
}
function waitForDocumentElements(selector, options) {
    return waitFor(function () { return document.querySelectorAll(selector); }, options);
}

var StageComponent = (function () {
    function StageComponent() {
    }
    StageComponent.withResources = function (resources) {
        if (resources === void 0) { resources = []; }
        return new ComponentTester().withResources(resources);
    };
    return StageComponent;
}());
var ComponentTester = (function () {
    function ComponentTester() {
        this.resources = [];
    }
    ComponentTester.prototype.configure = function (aurelia) {
        return aurelia.use.standardConfiguration();
    };
    ComponentTester.prototype.bootstrap = function (configure) {
        this.configure = configure;
    };
    ComponentTester.prototype.withResources = function (resources) {
        this.resources = resources;
        return this;
    };
    ComponentTester.prototype.inView = function (html) {
        this.html = html;
        return this;
    };
    ComponentTester.prototype.boundTo = function (bindingContext) {
        this.bindingContext = bindingContext;
        return this;
    };
    ComponentTester.prototype.manuallyHandleLifecycle = function () {
        this._prepareLifecycle();
        return this;
    };
    ComponentTester.prototype.create = function (bootstrap) {
        var _this = this;
        return bootstrap(function (aurelia) {
            return Promise.resolve(_this.configure(aurelia)).then(function () {
                if (_this.resources) {
                    aurelia.use.globalResources(_this.resources);
                }
                return aurelia.start().then(function () {
                    _this.host = document.createElement('div');
                    _this.host.innerHTML = _this.html;
                    document.body.appendChild(_this.host);
                    return aurelia.enhance(_this.bindingContext, _this.host).then(function () {
                        _this.rootView = aurelia.root;
                        _this.element = _this.host.firstElementChild;
                        if (aurelia.root.controllers.length) {
                            _this.viewModel = aurelia.root.controllers[0].viewModel;
                        }
                        return new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, 0); });
                    });
                });
            });
        });
    };
    ComponentTester.prototype.dispose = function () {
        if (this.host === undefined || this.rootView === undefined) {
            throw new Error('Cannot call ComponentTester.dispose() before ComponentTester.create()');
        }
        this.rootView.detached();
        this.rootView.unbind();
        return this.host.parentNode.removeChild(this.host);
    };
    ComponentTester.prototype._prepareLifecycle = function () {
        var _this = this;
        var bindPrototype = aurelia_templating__WEBPACK_IMPORTED_MODULE_0__.View.prototype.bind;
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__.View.prototype.bind = function () { };
        this.bind = function (bindingContext) { return new Promise(function (resolve) {
            aurelia_templating__WEBPACK_IMPORTED_MODULE_0__.View.prototype.bind = bindPrototype;
            if (bindingContext !== undefined) {
                _this.bindingContext = bindingContext;
            }
            _this.rootView.bind(_this.bindingContext);
            setTimeout(function () { return resolve(); }, 0);
        }); };
        var attachedPrototype = aurelia_templating__WEBPACK_IMPORTED_MODULE_0__.View.prototype.attached;
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__.View.prototype.attached = function () { };
        this.attached = function () { return new Promise(function (resolve) {
            aurelia_templating__WEBPACK_IMPORTED_MODULE_0__.View.prototype.attached = attachedPrototype;
            _this.rootView.attached();
            setTimeout(function () { return resolve(); }, 0);
        }); };
        this.detached = function () { return new Promise(function (resolve) {
            _this.rootView.detached();
            setTimeout(function () { return resolve(); }, 0);
        }); };
        this.unbind = function () { return new Promise(function (resolve) {
            _this.rootView.unbind();
            setTimeout(function () { return resolve(); }, 0);
        }); };
    };
    ComponentTester.prototype.waitForElement = function (selector, options) {
        var _this = this;
        return waitFor(function () { return _this.element.querySelector(selector); }, options);
    };
    ComponentTester.prototype.waitForElements = function (selector, options) {
        var _this = this;
        return waitFor(function () { return _this.element.querySelectorAll(selector); }, options);
    };
    return ComponentTester;
}());

function configure(config) {
    config.globalResources([CompileSpy, ViewSpy]);
}


//# sourceMappingURL=aurelia-testing.js.map


/***/ }),

/***/ 5744:
/*!***********************************************************************************!*\
  !*** ./node_modules/aurelia-typed-observable-plugin/dist/native-modules/index.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindable": function() { return /* binding */ bindable; },
/* harmony export */   "coerceFunctionMap": function() { return /* binding */ coerceFunctionMap; },
/* harmony export */   "coerceFunctions": function() { return /* binding */ coerceFunctions; },
/* harmony export */   "createTypedBindable": function() { return /* binding */ createTypedBindable; },
/* harmony export */   "createTypedObservable": function() { return /* binding */ createTypedObservable; },
/* harmony export */   "mapCoerceFunction": function() { return /* binding */ mapCoerceFunction; },
/* harmony export */   "observable": function() { return /* binding */ observable; },
/* harmony export */   "usePropertyTypeForBindable": function() { return /* binding */ usePropertyType; },
/* harmony export */   "usePropertyTypeForObservable": function() { return /* binding */ usePropertyType$1; }
/* harmony export */ });
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-logging */ 8099);
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-templating */ 1781);
/* harmony import */ var aurelia_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-metadata */ 1383);




var coerceFunctions = {
    none: function (a) {
        return a;
    },
    number: function (a) {
        return Number(a);
    },
    string: function (a) {
        return '' + a;
    },
    boolean: function (a) {
        return !!a;
    },
    booleanAttr: function (val) {
        return val || val === '' ? true : false;
    },
    date: function (val) {
        // Invalid date instances are quite problematic
        // so we need to deal with it properly by default
        if (val === null || val === undefined) {
            return null;
        }
        var d = new Date(val);
        return isNaN(d.getTime()) ? null : d;
    }
};
var coerceFunctionMap = new Map([
    [Boolean, 'boolean'],
    [String, 'string'],
    [Date, 'date'],
    [Number, 'number'],
]);
/**
 * Map a class to a string for typescript property coerce
 * @param type the property class to register
 * @param strType the string that represents class in the lookup
 * @param coerceFunction coerce function to register with param strType
 */
function mapCoerceFunction(type, strType, coerceFunction) {
    coerceFunction = coerceFunction || type.coerce;
    if (typeof strType !== 'string' || typeof coerceFunction !== 'function') {
        (0,aurelia_logging__WEBPACK_IMPORTED_MODULE_0__.getLogger)('map-coerce-function')
            .warn("Bad attempt at mapping coerce function for type: " + type.name + " to: " + strType);
        return;
    }
    coerceFunctions[strType] = coerceFunction;
    coerceFunctionMap.set(type, strType);
}

// tslint:disable: interface-name no-invalid-this no-non-null-assertion
aurelia_templating__WEBPACK_IMPORTED_MODULE_1__.BehaviorPropertyObserver.prototype.setCoerce = function (coerce) {
    this.coerce = typeof coerce === 'function' ? coerce : coerceFunctions[coerce];
    if (this.coerce === undefined) {
        (0,aurelia_logging__WEBPACK_IMPORTED_MODULE_0__.getLogger)('behavior-property-observer')
            .warn("Invalid coerce instruction. Should be either one of " + Object.keys(coerceFunctions) + " or a function.");
    }
};
/**
 * Slightly override the builtin implementation that will handle coercion
 */
aurelia_templating__WEBPACK_IMPORTED_MODULE_1__.BehaviorPropertyObserver.prototype.setValue = function (newValue) {
    var oldValue = this.currentValue;
    var coercedValue = this.coerce === undefined ? newValue : this.coerce(newValue);
    if (oldValue !== coercedValue) {
        this.oldValue = oldValue;
        this.currentValue = coercedValue;
        if (this.publishing && this.notqueued) {
            if (this.taskQueue.flushing) {
                this.call();
            }
            else {
                this.notqueued = false;
                this.taskQueue.queueMicroTask(this);
            }
        }
    }
};
aurelia_templating__WEBPACK_IMPORTED_MODULE_1__.BindableProperty.prototype.createObserver = function (viewModel) {
    var selfSubscriber = null;
    var defaultValue = this.defaultValue;
    var changeHandlerName = this.changeHandler;
    var name = this.name;
    var initialValue;
    if (this.hasOptions) {
        return undefined;
    }
    if (changeHandlerName in viewModel) {
        if ('propertyChanged' in viewModel) {
            selfSubscriber = function (newValue, oldValue) {
                viewModel[changeHandlerName](newValue, oldValue);
                viewModel.propertyChanged(name, newValue, oldValue);
            };
        }
        else {
            selfSubscriber = function (newValue, oldValue) { return viewModel[changeHandlerName](newValue, oldValue); };
        }
    }
    else if ('propertyChanged' in viewModel) {
        selfSubscriber = function (newValue, oldValue) { return viewModel.propertyChanged(name, newValue, oldValue); };
    }
    else if (changeHandlerName !== null) {
        throw new Error("Change handler " + changeHandlerName + " was specified but not declared on the class.");
    }
    if (defaultValue !== undefined) {
        initialValue = typeof defaultValue === 'function' ? defaultValue.call(viewModel) : defaultValue;
    }
    var observer = new aurelia_templating__WEBPACK_IMPORTED_MODULE_1__.BehaviorPropertyObserver(this.owner.taskQueue, viewModel, this.name, selfSubscriber, initialValue);
    if (this.coerce !== undefined) {
        observer.setCoerce(this.coerce);
        observer.currentValue = observer.oldValue = observer.coerce === undefined ? observer.currentValue : observer.coerce(initialValue);
    }
    return observer;
};
aurelia_templating__WEBPACK_IMPORTED_MODULE_1__.BindableProperty.prototype._createDynamicProperty = function (viewModel, observerLookup, behaviorHandlesBind, name, attribute, boundProperties) {
    var changeHandlerName = name + "Changed";
    var selfSubscriber = null;
    var observer;
    var info;
    if (changeHandlerName in viewModel) {
        if ('propertyChanged' in viewModel) {
            selfSubscriber = function (newValue, oldValue) {
                viewModel[changeHandlerName](newValue, oldValue);
                viewModel.propertyChanged(name, newValue, oldValue);
            };
        }
        else {
            selfSubscriber = function (newValue, oldValue) { return viewModel[changeHandlerName](newValue, oldValue); };
        }
    }
    else if ('propertyChanged' in viewModel) {
        selfSubscriber = function (newValue, oldValue) { return viewModel.propertyChanged(name, newValue, oldValue); };
    }
    observer = observerLookup[name] = new aurelia_templating__WEBPACK_IMPORTED_MODULE_1__.BehaviorPropertyObserver(this.owner.taskQueue, viewModel, name, selfSubscriber, undefined);
    observer.setCoerce(this.coerce);
    observer.currentValue = observer.oldValue = observer.coerce === undefined ? observer.currentValue : observer.coerce(undefined);
    Object.defineProperty(viewModel, name, {
        configurable: true,
        enumerable: true,
        get: observer.getValue.bind(observer),
        set: observer.setValue.bind(observer)
    });
    if (behaviorHandlesBind) {
        observer.selfSubscriber = null;
    }
    if (typeof attribute === 'string') {
        viewModel[name] = attribute;
        observer.call();
    }
    else if (attribute) {
        info = { observer: observer, binding: attribute.createBinding(viewModel) };
        boundProperties.push(info);
    }
    observer.publishing = true;
    observer.selfSubscriber = selfSubscriber;
};

var _usePropertyType = false;
/**
 * Decorator: Specifies that a property is bindable through HTML.
 * @param nameOrTargetOrConfig The name of the property, or a configuration object.
 * This has Object in its type to avoid breaking change.
 * Idealy it should be `string | BindablePropertyConfig`
 */
// tslint:disable-next-line:no-shadowed-variable
var bindable = function bindable(nameOrTargetOrConfig, key, descriptor) {
    var deco = function (target, key2, descriptor2) {
        /**
         * key2 = truthy => decorated on a class field
         * key2 = falsy => decorated on a class
         */
        var actualTarget = key2 ? target.constructor : target;
        var r = aurelia_metadata__WEBPACK_IMPORTED_MODULE_2__.metadata.getOrCreateOwn(aurelia_metadata__WEBPACK_IMPORTED_MODULE_2__.metadata.resource, aurelia_templating__WEBPACK_IMPORTED_MODULE_1__.HtmlBehaviorResource, actualTarget);
        var prop;
        var propType;
        if (key2) { //is it on a property or a class?
            nameOrTargetOrConfig = nameOrTargetOrConfig || {};
            nameOrTargetOrConfig.name = key2;
            /**
             * Support for Typescript decorator, with metadata on property type.
             * Will check for typing only when user didn't explicitly set coerce + turn on the options
             *
             * If key 2 is truthy, it's a decorator on class field, which means target is prototype
             */
            if (nameOrTargetOrConfig.coerce === undefined && _usePropertyType) {
                propType = aurelia_metadata__WEBPACK_IMPORTED_MODULE_2__.metadata.getOwn(aurelia_metadata__WEBPACK_IMPORTED_MODULE_2__.metadata.propertyType, target, key2);
                if (propType) {
                    var coerceType = coerceFunctionMap.get(propType);
                    if (coerceType === undefined) {
                        (0,aurelia_logging__WEBPACK_IMPORTED_MODULE_0__.getLogger)('@bindable decorator')
                            .warn("Invalid coerce instruction. Should be either one of " + Object.keys(coerceFunctions) + " or a function.");
                    }
                    nameOrTargetOrConfig.coerce = coerceType || 'none';
                }
            }
        }
        prop = new aurelia_templating__WEBPACK_IMPORTED_MODULE_1__.BindableProperty(nameOrTargetOrConfig);
        return prop.registerWith(actualTarget, r, descriptor2);
    };
    if (!nameOrTargetOrConfig) {
        /**
         * placed on property initializer with parens, without any params
         * @example:
         * class ViewModel {
         *   @bindable() property
         * }
         * @bindable() class ViewModel {}
         */
        return deco;
    }
    if (key) {
        /**
         * placed on a property initializer without parens
         * @example
         * class ViewModel {
         *   @bindable property
         * }
         *
         */
        var target = nameOrTargetOrConfig;
        nameOrTargetOrConfig = undefined;
        return deco(target, key, descriptor);
    }
    /**
     * placed on a class with parens and config
     * @example
     * @bindable({ ... })
     * class MyViewModel {}
     */
    return deco;
};
['string', 'number', 'boolean', 'booleanAttr', 'date'].forEach(createTypedBindable);
/**
 * Used to allow user to automatically pickup property type
 * Can be used with typescript emit metadata in compiler settings, or with `Reflect.metadata('design:type', PropertyTypeClass)` decorator
 */
function usePropertyType(shouldUsePropertyType) {
    _usePropertyType = shouldUsePropertyType;
}
/**
 * Create a new fluent syntax bindable decorator  ex: builtin: `@bindable.string`, custom: `@bindable.customType`
 * Need to use together with setting the type in `coerceFunctions`:
 *
 * ```js
 * import {
 *  createTypedBindable,
 *  coerceFunctions
 * } from 'aurelia-framework'
 *
 * // create the typed bindable
 * createTypedBindable('point'); // => enable `@bindable.point`
 * // Set the instruction
 * coerceFunctions.point = function(value: string) {
 *   // convert to point from value
 * }
 * ```
 *
 * @param type The type to added to bindable for fluent syntax.
 */
function createTypedBindable(type) {
    /**
     * There no attempts to protect user from mis-using the decorators.
     * ex. @observable({}, accidentParam) class SomeClass {}
     * If we have some flag to use in if block, which can be remove at build time, it would be great.
     */
    return bindable[type] = function (nameOrTargetOrConfig, key, descriptor) {
        if (nameOrTargetOrConfig === undefined) {
            /**
             * MyClass {
             *   @bindable.number() num
             * }
             */
            return bindable({ coerce: type });
        }
        if (key === undefined) {
            /**
             * @bindable.number('num')
             * class MyClass {}
             *
             * @bindable.number({...})
             * class MyClass
             *
             * class MyClass {
             *   @bindable.number({...})
             *   num
             * }
             */
            nameOrTargetOrConfig = typeof nameOrTargetOrConfig === 'string' ? { name: nameOrTargetOrConfig } : nameOrTargetOrConfig;
            nameOrTargetOrConfig.coerce = type;
            return bindable(nameOrTargetOrConfig);
        }
        /**
         * class MyClass {
         *   @bindable.number num
         * }
         */
        return bindable({ coerce: type })(nameOrTargetOrConfig, key, descriptor);
    };
}

var observableLogger = (0,aurelia_logging__WEBPACK_IMPORTED_MODULE_0__.getLogger)('aurelia-observable-decorator');
/**
 * Internal flag to turn on / off auto pickup property type from metadata
 */
var _usePropertyType$1 = false;
var observable = function observable(nameOrTargetOrConfig, key, descriptor) {
    /**
     * @param target The class decorated
     * @param key The target class field of the decorator
     * @param descriptor class field descriptor
     * @param config user's config
     */
    function deco(target, key, descriptor, config) {
        // Used to check if we should pickup the type from metadata
        var coerce = config === undefined || typeof config === 'string' ? undefined : config.coerce;
        var propType;
        var coerceFunction;
        if (coerce) {
            switch (typeof coerce) {
                case 'string':
                    coerceFunction = coerceFunctions[coerce];
                    break;
                case 'function':
                    coerceFunction = coerce;
                    break;
                default: break;
            }
            if (coerceFunction === undefined) {
                observableLogger.warn("Invalid coerce instruction. Should be either one of " + Object.keys(coerceFunctions) + " or a function.");
            }
        }
        else if (_usePropertyType$1) {
            propType = aurelia_metadata__WEBPACK_IMPORTED_MODULE_2__.metadata.getOwn(aurelia_metadata__WEBPACK_IMPORTED_MODULE_2__.metadata.propertyType, target, key);
            if (propType) {
                coerceFunction = coerceFunctions[coerceFunctionMap.get(propType)];
                if (coerceFunction === undefined) {
                    observableLogger.warn("Unable to find coerce function for type " + propType.name + ".");
                }
            }
        }
        /**
         * class decorator?
         * @example
         * @observable('firstName') MyClass {}
         * @observable({ name: 'firstName' }) MyClass {}
         */
        var isClassDecorator = key === undefined;
        if (isClassDecorator) {
            target = target.prototype;
            key = typeof config === 'string' ? config : config.name;
        }
        // use a convention to compute the inner property name
        var innerPropertyName = "_" + key;
        var innerPropertyDescriptor = {
            configurable: true,
            enumerable: false,
            writable: true
        };
        if (config && 'defaultValue' in config) {
            var initValue = config.defaultValue;
            innerPropertyDescriptor.value = coerceFunction === undefined ? initValue : coerceFunction(initValue);
        }
        // determine callback name based on config or convention.
        var callbackName = (config && config.changeHandler) || key + "Changed";
        if (descriptor) {
            // babel passes in the property descriptor with a method to get the initial value.
            // set the initial value of the property if it is defined.
            // also make sure it's coerced
            if (typeof descriptor.initializer === 'function') {
                var initValue = descriptor.initializer();
                innerPropertyDescriptor.value = coerceFunction === undefined ? initValue : coerceFunction(initValue);
            }
        }
        else {
            // there is no descriptor if the target was a field in TS (although Babel provides one),
            // or if the decorator was applied to a class.
            descriptor = {};
        }
        // make the accessor enumerable by default, as fields are enumerable
        if (!('enumerable' in descriptor)) {
            descriptor.enumerable = true;
        }
        // we're adding a getter and setter which means the property descriptor
        // cannot have a "value" or "writable" attribute
        delete descriptor.value;
        delete descriptor.writable;
        delete descriptor.initializer;
        // Add the inner property on the prototype.
        Reflect.defineProperty(target, innerPropertyName, innerPropertyDescriptor);
        // add the getter and setter to the property descriptor.
        descriptor.get = function () { return this[innerPropertyName]; };
        descriptor.set = function (newValue) {
            var oldValue = this[innerPropertyName];
            var coercedValue = coerceFunction === undefined ? newValue : coerceFunction(newValue);
            if (coercedValue === oldValue) {
                return;
            }
            // Add the inner property on the instance and make it nonenumerable.
            this[innerPropertyName] = coercedValue;
            Reflect.defineProperty(this, innerPropertyName, { enumerable: false });
            if (this[callbackName]) {
                this[callbackName](coercedValue, oldValue, key);
            }
        };
        // make sure Aurelia doesn't use dirty-checking by declaring the property's
        // dependencies. This is the equivalent of "@computedFrom(...)".
        descriptor.get.dependencies = [innerPropertyName];
        if (isClassDecorator) {
            Reflect.defineProperty(target, key, descriptor);
        }
        else {
            return descriptor;
        }
    }
    /**
     * Decorating with parens
     * @example
     * @observable MyClass {} <----- this breaks, but will go into this condition
     * @observable('firstName') MyClass {}
     * @observable({ name: 'firstName' }) MyClass {}
     * class MyClass {
     *   @observable() prop
     * }
     */
    if (key === undefined) {
        return function (t, k, d) { return deco(t, k, d, nameOrTargetOrConfig); };
    }
    /**
     * Decorating on class field
     * @example
     * class MyClass {
     *   @observable prop
     * }
     */
    return deco(nameOrTargetOrConfig, key, descriptor);
};
['string', 'number', 'boolean', 'date'].forEach(createTypedObservable);
/*
          | typescript       | babel
----------|------------------|-------------------------
property  | config           | config
w/parens  | target, key      | target, key, descriptor
----------|------------------|-------------------------
property  | target, key      | target, key, descriptor
no parens | n/a              | n/a
----------|------------------|-------------------------
class     | config           | config
          | target           | target
*/
/**
 * Toggle the flag for observable to auto pickup property type from metadata
 * The reason is sometimes we may want to use prop type on bindable, but not observable
 * and vice versa
 */
function usePropertyType$1(shouldUsePropType) {
    _usePropertyType$1 = !!shouldUsePropType;
}
/**
 * Decorator: Creates a new observable decorator that can be used for fluent syntax purpose
 * @param type the type name that will be assign to observable decorator. `createTypedObservable('point') -> observable.point`
 */
function createTypedObservable(type) {
    return observable[type] = function (nameOrTargetOrConfig, key, descriptor) {
        if (nameOrTargetOrConfig === undefined) {
            /**
             * MyClass {
             *   @observable.number() num
             * }
             *
             * This will breaks so need to check for proper error
             * @observable.number()
             * class MyClass {}
             */
            return observable({ coerce: type });
        }
        if (key === undefined) {
            /**
             * @observable.number('num')
             * class MyClass {}
             *
             * @observable.number({...})
             * class MyClass
             *
             * class MyClass {
             *   @observable.number({...})
             *   num
             * }
             */
            nameOrTargetOrConfig = typeof nameOrTargetOrConfig === 'string' ? { name: nameOrTargetOrConfig } : nameOrTargetOrConfig;
            nameOrTargetOrConfig.coerce = type;
            return observable(nameOrTargetOrConfig);
        }
        /**
         * class MyClass {
         *   @observable.number num
         * }
         */
        return observable({ coerce: type })(nameOrTargetOrConfig, key, descriptor);
    };
}




/***/ }),

/***/ "aurelia-validation":
/*!***********************************************************************************!*\
  !*** ./node_modules/aurelia-validation/dist/native-modules/aurelia-validation.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluentEnsure": function() { return /* binding */ FluentEnsure; },
/* harmony export */   "FluentRuleCustomizer": function() { return /* binding */ FluentRuleCustomizer; },
/* harmony export */   "FluentRules": function() { return /* binding */ FluentRules; },
/* harmony export */   "GlobalValidationConfiguration": function() { return /* binding */ GlobalValidationConfiguration; },
/* harmony export */   "MessageExpressionValidator": function() { return /* binding */ MessageExpressionValidator; },
/* harmony export */   "PropertyAccessorParser": function() { return /* binding */ PropertyAccessorParser; },
/* harmony export */   "Rules": function() { return /* binding */ Rules; },
/* harmony export */   "StandardValidator": function() { return /* binding */ StandardValidator; },
/* harmony export */   "ValidateBindingBehavior": function() { return /* binding */ ValidateBindingBehavior; },
/* harmony export */   "ValidateEvent": function() { return /* binding */ ValidateEvent; },
/* harmony export */   "ValidateManuallyBindingBehavior": function() { return /* binding */ ValidateManuallyBindingBehavior; },
/* harmony export */   "ValidateOnBlurBindingBehavior": function() { return /* binding */ ValidateOnBlurBindingBehavior; },
/* harmony export */   "ValidateOnChangeBindingBehavior": function() { return /* binding */ ValidateOnChangeBindingBehavior; },
/* harmony export */   "ValidateOnChangeOrBlurBindingBehavior": function() { return /* binding */ ValidateOnChangeOrBlurBindingBehavior; },
/* harmony export */   "ValidateOnChangeOrFocusoutBindingBehavior": function() { return /* binding */ ValidateOnChangeOrFocusoutBindingBehavior; },
/* harmony export */   "ValidateOnFocusoutBindingBehavior": function() { return /* binding */ ValidateOnFocusoutBindingBehavior; },
/* harmony export */   "ValidateResult": function() { return /* binding */ ValidateResult; },
/* harmony export */   "ValidationController": function() { return /* binding */ ValidationController; },
/* harmony export */   "ValidationControllerFactory": function() { return /* binding */ ValidationControllerFactory; },
/* harmony export */   "ValidationErrorsCustomAttribute": function() { return /* binding */ ValidationErrorsCustomAttribute; },
/* harmony export */   "ValidationMessageParser": function() { return /* binding */ ValidationMessageParser; },
/* harmony export */   "ValidationMessageProvider": function() { return /* binding */ ValidationMessageProvider; },
/* harmony export */   "ValidationRendererCustomAttribute": function() { return /* binding */ ValidationRendererCustomAttribute; },
/* harmony export */   "ValidationRules": function() { return /* binding */ ValidationRules; },
/* harmony export */   "Validator": function() { return /* binding */ Validator; },
/* harmony export */   "configure": function() { return /* binding */ configure; },
/* harmony export */   "getAccessorExpression": function() { return /* binding */ getAccessorExpression; },
/* harmony export */   "getPropertyInfo": function() { return /* binding */ getPropertyInfo; },
/* harmony export */   "getTargetDOMElement": function() { return /* binding */ getTargetDOMElement; },
/* harmony export */   "validateTrigger": function() { return /* binding */ validateTrigger; },
/* harmony export */   "validationMessages": function() { return /* binding */ validationMessages; }
/* harmony export */ });
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-binding */ 6778);
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-templating */ 1781);
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-logging */ 8099);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-pal */ 1015);
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-dependency-injection */ 6158);
/* harmony import */ var aurelia_task_queue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aurelia-task-queue */ 8318);







/**
 * Validates objects and properties.
 */
var Validator = /** @class */ (function () {
    function Validator() {
    }
    return Validator;
}());

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * The result of validating an individual validation rule.
 */
var ValidateResult = /** @class */ (function () {
    /**
     * @param rule The rule associated with the result. Validator implementation specific.
     * @param object The object that was validated.
     * @param propertyName The name of the property that was validated.
     * @param error The error, if the result is a validation error.
     */
    function ValidateResult(rule, object, propertyName, valid, message) {
        if (message === void 0) { message = null; }
        this.rule = rule;
        this.object = object;
        this.propertyName = propertyName;
        this.valid = valid;
        this.message = message;
        this.id = ValidateResult.nextId++;
    }
    ValidateResult.prototype.toString = function () {
        return this.valid ? 'Valid.' : this.message;
    };
    ValidateResult.nextId = 0;
    return ValidateResult;
}());

/**
 * Sets, unsets and retrieves rules on an object or constructor function.
 */
var Rules = /** @class */ (function () {
    function Rules() {
    }
    /**
     * Applies the rules to a target.
     */
    Rules.set = function (target, rules) {
        if (target instanceof Function) {
            target = target.prototype;
        }
        Object.defineProperty(target, Rules.key, { enumerable: false, configurable: false, writable: true, value: rules });
    };
    /**
     * Removes rules from a target.
     */
    Rules.unset = function (target) {
        if (target instanceof Function) {
            target = target.prototype;
        }
        target[Rules.key] = null;
    };
    /**
     * Retrieves the target's rules.
     */
    Rules.get = function (target) {
        return target[Rules.key] || null;
    };
    /**
     * The name of the property that stores the rules.
     */
    Rules.key = '__rules__';
    return Rules;
}());

// tslint:disable:no-empty
var ExpressionVisitor = /** @class */ (function () {
    function ExpressionVisitor() {
    }
    ExpressionVisitor.prototype.visitChain = function (chain) {
        this.visitArgs(chain.expressions);
    };
    ExpressionVisitor.prototype.visitBindingBehavior = function (behavior) {
        behavior.expression.accept(this);
        this.visitArgs(behavior.args);
    };
    ExpressionVisitor.prototype.visitValueConverter = function (converter) {
        converter.expression.accept(this);
        this.visitArgs(converter.args);
    };
    ExpressionVisitor.prototype.visitAssign = function (assign) {
        assign.target.accept(this);
        assign.value.accept(this);
    };
    ExpressionVisitor.prototype.visitConditional = function (conditional) {
        conditional.condition.accept(this);
        conditional.yes.accept(this);
        conditional.no.accept(this);
    };
    ExpressionVisitor.prototype.visitAccessThis = function (access) {
        access.ancestor = access.ancestor;
    };
    ExpressionVisitor.prototype.visitAccessScope = function (access) {
        access.name = access.name;
    };
    ExpressionVisitor.prototype.visitAccessMember = function (access) {
        access.object.accept(this);
    };
    ExpressionVisitor.prototype.visitAccessKeyed = function (access) {
        access.object.accept(this);
        access.key.accept(this);
    };
    ExpressionVisitor.prototype.visitCallScope = function (call) {
        this.visitArgs(call.args);
    };
    ExpressionVisitor.prototype.visitCallFunction = function (call) {
        call.func.accept(this);
        this.visitArgs(call.args);
    };
    ExpressionVisitor.prototype.visitCallMember = function (call) {
        call.object.accept(this);
        this.visitArgs(call.args);
    };
    ExpressionVisitor.prototype.visitPrefix = function (prefix) {
        prefix.expression.accept(this);
    };
    ExpressionVisitor.prototype.visitBinary = function (binary) {
        binary.left.accept(this);
        binary.right.accept(this);
    };
    ExpressionVisitor.prototype.visitLiteralPrimitive = function (literal) {
        literal.value = literal.value;
    };
    ExpressionVisitor.prototype.visitLiteralArray = function (literal) {
        this.visitArgs(literal.elements);
    };
    ExpressionVisitor.prototype.visitLiteralObject = function (literal) {
        this.visitArgs(literal.values);
    };
    ExpressionVisitor.prototype.visitLiteralString = function (literal) {
        literal.value = literal.value;
    };
    ExpressionVisitor.prototype.visitArgs = function (args) {
        for (var i = 0; i < args.length; i++) {
            args[i].accept(this);
        }
    };
    return ExpressionVisitor;
}());

var ValidationMessageParser = /** @class */ (function () {
    function ValidationMessageParser(bindinqLanguage) {
        this.bindinqLanguage = bindinqLanguage;
        this.emptyStringExpression = new aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.LiteralString('');
        this.nullExpression = new aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.LiteralPrimitive(null);
        this.undefinedExpression = new aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.LiteralPrimitive(undefined);
        this.cache = {};
    }
    ValidationMessageParser.prototype.parse = function (message) {
        if (this.cache[message] !== undefined) {
            return this.cache[message];
        }
        var parts = this.bindinqLanguage.parseInterpolation(null, message);
        if (parts === null) {
            return new aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.LiteralString(message);
        }
        var expression = new aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.LiteralString(parts[0]);
        for (var i = 1; i < parts.length; i += 2) {
            expression = new aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.Binary('+', expression, new aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.Binary('+', this.coalesce(parts[i]), new aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.LiteralString(parts[i + 1])));
        }
        MessageExpressionValidator.validate(expression, message);
        this.cache[message] = expression;
        return expression;
    };
    ValidationMessageParser.prototype.coalesce = function (part) {
        // part === null || part === undefined ? '' : part
        return new aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.Conditional(new aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.Binary('||', new aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.Binary('===', part, this.nullExpression), new aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.Binary('===', part, this.undefinedExpression)), this.emptyStringExpression, new aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.CallMember(part, 'toString', []));
    };
    ValidationMessageParser.inject = [aurelia_templating__WEBPACK_IMPORTED_MODULE_1__.BindingLanguage];
    return ValidationMessageParser;
}());
var MessageExpressionValidator = /** @class */ (function (_super) {
    __extends(MessageExpressionValidator, _super);
    function MessageExpressionValidator(originalMessage) {
        var _this = _super.call(this) || this;
        _this.originalMessage = originalMessage;
        return _this;
    }
    MessageExpressionValidator.validate = function (expression, originalMessage) {
        var visitor = new MessageExpressionValidator(originalMessage);
        expression.accept(visitor);
    };
    MessageExpressionValidator.prototype.visitAccessScope = function (access) {
        if (access.ancestor !== 0) {
            throw new Error('$parent is not permitted in validation message expressions.');
        }
        if (['displayName', 'propertyName', 'value', 'object', 'config', 'getDisplayName'].indexOf(access.name) !== -1) {
            (0,aurelia_logging__WEBPACK_IMPORTED_MODULE_2__.getLogger)('aurelia-validation')
                // tslint:disable-next-line:max-line-length
                .warn("Did you mean to use \"$" + access.name + "\" instead of \"" + access.name + "\" in this validation message template: \"" + this.originalMessage + "\"?");
        }
    };
    return MessageExpressionValidator;
}(ExpressionVisitor));

/**
 * Dictionary of validation messages. [messageKey]: messageExpression
 */
var validationMessages = {
    /**
     * The default validation message. Used with rules that have no standard message.
     */
    default: "${$displayName} is invalid.",
    required: "${$displayName} is required.",
    matches: "${$displayName} is not correctly formatted.",
    email: "${$displayName} is not a valid email.",
    minLength: "${$displayName} must be at least ${$config.length} character${$config.length === 1 ? '' : 's'}.",
    maxLength: "${$displayName} cannot be longer than ${$config.length} character${$config.length === 1 ? '' : 's'}.",
    minItems: "${$displayName} must contain at least ${$config.count} item${$config.count === 1 ? '' : 's'}.",
    maxItems: "${$displayName} cannot contain more than ${$config.count} item${$config.count === 1 ? '' : 's'}.",
    min: "${$displayName} must be at least ${$config.constraint}.",
    max: "${$displayName} must be at most ${$config.constraint}.",
    range: "${$displayName} must be between or equal to ${$config.min} and ${$config.max}.",
    between: "${$displayName} must be between but not equal to ${$config.min} and ${$config.max}.",
    equals: "${$displayName} must be ${$config.expectedValue}.",
};
/**
 * Retrieves validation messages and property display names.
 */
var ValidationMessageProvider = /** @class */ (function () {
    function ValidationMessageProvider(parser) {
        this.parser = parser;
    }
    /**
     * Returns a message binding expression that corresponds to the key.
     * @param key The message key.
     */
    ValidationMessageProvider.prototype.getMessage = function (key) {
        var message;
        if (key in validationMessages) {
            message = validationMessages[key];
        }
        else {
            message = validationMessages['default'];
        }
        return this.parser.parse(message);
    };
    /**
     * Formulates a property display name using the property name and the configured
     * displayName (if provided).
     * Override this with your own custom logic.
     * @param propertyName The property name.
     */
    ValidationMessageProvider.prototype.getDisplayName = function (propertyName, displayName) {
        if (displayName !== null && displayName !== undefined) {
            return (displayName instanceof Function) ? displayName() : displayName;
        }
        // split on upper-case letters.
        var words = propertyName.toString().split(/(?=[A-Z])/).join(' ');
        // capitalize first letter.
        return words.charAt(0).toUpperCase() + words.slice(1);
    };
    ValidationMessageProvider.inject = [ValidationMessageParser];
    return ValidationMessageProvider;
}());

/**
 * Validates.
 * Responsible for validating objects and properties.
 */
var StandardValidator = /** @class */ (function (_super) {
    __extends(StandardValidator, _super);
    function StandardValidator(messageProvider, resources) {
        var _this = _super.call(this) || this;
        _this.messageProvider = messageProvider;
        _this.lookupFunctions = resources.lookupFunctions;
        _this.getDisplayName = messageProvider.getDisplayName.bind(messageProvider);
        return _this;
    }
    /**
     * Validates the specified property.
     * @param object The object to validate.
     * @param propertyName The name of the property to validate.
     * @param rules Optional. If unspecified, the rules will be looked up using the metadata
     * for the object created by ValidationRules....on(class/object)
     */
    StandardValidator.prototype.validateProperty = function (object, propertyName, rules) {
        return this.validate(object, propertyName, rules || null);
    };
    /**
     * Validates all rules for specified object and it's properties.
     * @param object The object to validate.
     * @param rules Optional. If unspecified, the rules will be looked up using the metadata
     * for the object created by ValidationRules....on(class/object)
     */
    StandardValidator.prototype.validateObject = function (object, rules) {
        return this.validate(object, null, rules || null);
    };
    /**
     * Determines whether a rule exists in a set of rules.
     * @param rules The rules to search.
     * @parem rule The rule to find.
     */
    StandardValidator.prototype.ruleExists = function (rules, rule) {
        var i = rules.length;
        while (i--) {
            if (rules[i].indexOf(rule) !== -1) {
                return true;
            }
        }
        return false;
    };
    StandardValidator.prototype.getMessage = function (rule, object, value) {
        var expression = rule.message || this.messageProvider.getMessage(rule.messageKey);
        // tslint:disable-next-line:prefer-const
        var _a = rule.property, propertyName = _a.name, displayName = _a.displayName;
        if (propertyName !== null) {
            displayName = this.messageProvider.getDisplayName(propertyName, displayName);
        }
        var overrideContext = {
            $displayName: displayName,
            $propertyName: propertyName,
            $value: value,
            $object: object,
            $config: rule.config,
            // returns the name of a given property, given just the property name (irrespective of the property's displayName)
            // split on capital letters, first letter ensured to be capitalized
            $getDisplayName: this.getDisplayName
        };
        return expression.evaluate({ bindingContext: object, overrideContext: overrideContext }, this.lookupFunctions);
    };
    StandardValidator.prototype.validateRuleSequence = function (object, propertyName, ruleSequence, sequence, results) {
        var _this = this;
        // are we validating all properties or a single property?
        var validateAllProperties = propertyName === null || propertyName === undefined;
        var rules = ruleSequence[sequence];
        var allValid = true;
        // validate each rule.
        var promises = [];
        var _loop_1 = function (i) {
            var rule = rules[i];
            // is the rule related to the property we're validating.
            // tslint:disable-next-line:triple-equals | Use loose equality for property keys
            if (!validateAllProperties && rule.property.name != propertyName) {
                return "continue";
            }
            // is this a conditional rule? is the condition met?
            if (rule.when && !rule.when(object)) {
                return "continue";
            }
            // validate.
            var value = rule.property.name === null ? object : object[rule.property.name];
            var promiseOrBoolean = rule.condition(value, object);
            if (!(promiseOrBoolean instanceof Promise)) {
                promiseOrBoolean = Promise.resolve(promiseOrBoolean);
            }
            promises.push(promiseOrBoolean.then(function (valid) {
                var message = valid ? null : _this.getMessage(rule, object, value);
                results.push(new ValidateResult(rule, object, rule.property.name, valid, message));
                allValid = allValid && valid;
                return valid;
            }));
        };
        for (var i = 0; i < rules.length; i++) {
            _loop_1(i);
        }
        return Promise.all(promises)
            .then(function () {
            sequence++;
            if (allValid && sequence < ruleSequence.length) {
                return _this.validateRuleSequence(object, propertyName, ruleSequence, sequence, results);
            }
            return results;
        });
    };
    StandardValidator.prototype.validate = function (object, propertyName, rules) {
        // rules specified?
        if (!rules) {
            // no. attempt to locate the rules.
            rules = Rules.get(object);
        }
        // any rules?
        if (!rules || rules.length === 0) {
            return Promise.resolve([]);
        }
        return this.validateRuleSequence(object, propertyName, rules, 0, []);
    };
    StandardValidator.inject = [ValidationMessageProvider, aurelia_templating__WEBPACK_IMPORTED_MODULE_1__.ViewResources];
    return StandardValidator;
}(Validator));

/**
 * Validation triggers.
 */
var validateTrigger;
(function (validateTrigger) {
    /**
     * Manual validation.  Use the controller's `validate()` and  `reset()` methods
     * to validate all bindings.
     */
    validateTrigger[validateTrigger["manual"] = 0] = "manual";
    /**
     * Validate the binding when the binding's target element fires a DOM "blur" event.
     */
    validateTrigger[validateTrigger["blur"] = 1] = "blur";
    /**
     * Validate the binding when it updates the model due to a change in the view.
     */
    validateTrigger[validateTrigger["change"] = 2] = "change";
    /**
     * Validate the binding when the binding's target element fires a DOM "blur" event and
     * when it updates the model due to a change in the view.
     */
    validateTrigger[validateTrigger["changeOrBlur"] = 3] = "changeOrBlur";
    /**
     * Validate the binding when the binding's target element fires a DOM "focusout" event.
     * Unlike "blur", this event bubbles.
     */
    validateTrigger[validateTrigger["focusout"] = 4] = "focusout";
    /**
     * Validate the binding when the binding's target element fires a DOM "focusout" event or
     * when it updates the model due to a change in the view.
     */
    validateTrigger[validateTrigger["changeOrFocusout"] = 6] = "changeOrFocusout";
})(validateTrigger || (validateTrigger = {}));

/**
 * Aurelia Validation Configuration API
 */
var GlobalValidationConfiguration = /** @class */ (function () {
    function GlobalValidationConfiguration() {
        this.validatorType = StandardValidator;
        this.validationTrigger = GlobalValidationConfiguration.DEFAULT_VALIDATION_TRIGGER;
    }
    /**
     * Use a custom Validator implementation.
     */
    GlobalValidationConfiguration.prototype.customValidator = function (type) {
        this.validatorType = type;
        return this;
    };
    GlobalValidationConfiguration.prototype.defaultValidationTrigger = function (trigger) {
        this.validationTrigger = trigger;
        return this;
    };
    GlobalValidationConfiguration.prototype.getDefaultValidationTrigger = function () {
        return this.validationTrigger;
    };
    /**
     * Applies the configuration.
     */
    GlobalValidationConfiguration.prototype.apply = function (container) {
        var validator = container.get(this.validatorType);
        container.registerInstance(Validator, validator);
        container.registerInstance(GlobalValidationConfiguration, this);
    };
    GlobalValidationConfiguration.DEFAULT_VALIDATION_TRIGGER = validateTrigger.blur;
    return GlobalValidationConfiguration;
}());

/**
 * Gets the DOM element associated with the data-binding. Most of the time it's
 * the binding.target but sometimes binding.target is an aurelia custom element,
 * or custom attribute which is a javascript "class" instance, so we need to use
 * the controller's container to retrieve the actual DOM element.
 */
function getTargetDOMElement(binding, view) {
    var target = binding.target;
    // DOM element
    if (target instanceof Element) {
        return target;
    }
    // custom element or custom attribute
    // tslint:disable-next-line:prefer-const
    for (var i = 0, ii = view.controllers.length; i < ii; i++) {
        var controller = view.controllers[i];
        if (controller.viewModel === target) {
            var element = controller.container.get(aurelia_pal__WEBPACK_IMPORTED_MODULE_3__.DOM.Element);
            if (element) {
                return element;
            }
            throw new Error("Unable to locate target element for \"" + binding.sourceExpression + "\".");
        }
    }
    throw new Error("Unable to locate target element for \"" + binding.sourceExpression + "\".");
}

function getObject(expression, objectExpression, source) {
    var value = objectExpression.evaluate(source, null);
    if (value === null || value === undefined || value instanceof Object) {
        return value;
    }
    // tslint:disable-next-line:max-line-length
    throw new Error("The '" + objectExpression + "' part of '" + expression + "' evaluates to " + value + " instead of an object, null or undefined.");
}
/**
 * Retrieves the object and property name for the specified expression.
 * @param expression The expression
 * @param source The scope
 */
function getPropertyInfo(expression, source) {
    var originalExpression = expression;
    while (expression instanceof aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.BindingBehavior || expression instanceof aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.ValueConverter) {
        expression = expression.expression;
    }
    var object;
    var propertyName;
    if (expression instanceof aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.AccessScope) {
        object = (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.getContextFor)(expression.name, source, expression.ancestor);
        propertyName = expression.name;
    }
    else if (expression instanceof aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.AccessMember) {
        object = getObject(originalExpression, expression.object, source);
        propertyName = expression.name;
    }
    else if (expression instanceof aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.AccessKeyed) {
        object = getObject(originalExpression, expression.object, source);
        propertyName = expression.key.evaluate(source);
    }
    else {
        throw new Error("Expression '" + originalExpression + "' is not compatible with the validate binding-behavior.");
    }
    if (object === null || object === undefined) {
        return null;
    }
    return { object: object, propertyName: propertyName };
}

function isString(value) {
    return Object.prototype.toString.call(value) === '[object String]';
}
function isNumber(value) {
    return Object.prototype.toString.call(value) === '[object Number]';
}

var PropertyAccessorParser = /** @class */ (function () {
    function PropertyAccessorParser(parser) {
        this.parser = parser;
    }
    PropertyAccessorParser.prototype.parse = function (property) {
        if (isString(property) || isNumber(property)) {
            return property;
        }
        var accessorText = getAccessorExpression(property.toString());
        var accessor = this.parser.parse(accessorText);
        if (accessor instanceof aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.AccessScope
            || accessor instanceof aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.AccessMember && accessor.object instanceof aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.AccessScope) {
            return accessor.name;
        }
        throw new Error("Invalid property expression: \"" + accessor + "\"");
    };
    PropertyAccessorParser.inject = [aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.Parser];
    return PropertyAccessorParser;
}());
function getAccessorExpression(fn) {
    /* tslint:disable:max-line-length */
    var classic = /^function\s*\([$_\w\d]+\)\s*\{(?:\s*"use strict";)?(?:[$_\s\w\d\/\*.['"\]+;]+)?\s*return\s+[$_\w\d]+\.([$_\w\d]+)\s*;?\s*\}$/;
    /* tslint:enable:max-line-length */
    var arrow = /^\(?[$_\w\d]+\)?\s*=>\s*[$_\w\d]+\.([$_\w\d]+)$/;
    var match = classic.exec(fn) || arrow.exec(fn);
    if (match === null) {
        throw new Error("Unable to parse accessor function:\n" + fn);
    }
    return match[1];
}

var ValidateEvent = /** @class */ (function () {
    function ValidateEvent(
    /**
     * The type of validate event. Either "validate" or "reset".
     */
    type, 
    /**
     * The controller's current array of errors. For an array containing both
     * failed rules and passed rules, use the "results" property.
     */
    errors, 
    /**
     * The controller's current array of validate results. This
     * includes both passed rules and failed rules. For an array of only failed rules,
     * use the "errors" property.
     */
    results, 
    /**
     * The instruction passed to the "validate" or "reset" event. Will be null when
     * the controller's validate/reset method was called with no instruction argument.
     */
    instruction, 
    /**
     * In events with type === "validate", this property will contain the result
     * of validating the instruction (see "instruction" property). Use the controllerValidateResult
     * to access the validate results specific to the call to "validate"
     * (as opposed to using the "results" and "errors" properties to access the controller's entire
     * set of results/errors).
     */
    controllerValidateResult) {
        this.type = type;
        this.errors = errors;
        this.results = results;
        this.instruction = instruction;
        this.controllerValidateResult = controllerValidateResult;
    }
    return ValidateEvent;
}());

/**
 * Orchestrates validation.
 * Manages a set of bindings, renderers and objects.
 * Exposes the current list of validation results for binding purposes.
 */
var ValidationController = /** @class */ (function () {
    function ValidationController(validator, propertyParser, config) {
        this.validator = validator;
        this.propertyParser = propertyParser;
        // Registered bindings (via the validate binding behavior)
        this.bindings = new Map();
        // Renderers that have been added to the controller instance.
        this.renderers = [];
        /**
         * Validation results that have been rendered by the controller.
         */
        this.results = [];
        /**
         * Validation errors that have been rendered by the controller.
         */
        this.errors = [];
        /**
         *  Whether the controller is currently validating.
         */
        this.validating = false;
        // Elements related to validation results that have been rendered.
        this.elements = new Map();
        // Objects that have been added to the controller instance (entity-style validation).
        this.objects = new Map();
        // Promise that resolves when validation has completed.
        this.finishValidating = Promise.resolve();
        this.eventCallbacks = [];
        this.validateTrigger = config instanceof GlobalValidationConfiguration
            ? config.getDefaultValidationTrigger()
            : GlobalValidationConfiguration.DEFAULT_VALIDATION_TRIGGER;
    }
    /**
     * Subscribe to controller validate and reset events. These events occur when the
     * controller's "validate"" and "reset" methods are called.
     * @param callback The callback to be invoked when the controller validates or resets.
     */
    ValidationController.prototype.subscribe = function (callback) {
        var _this = this;
        this.eventCallbacks.push(callback);
        return {
            dispose: function () {
                var index = _this.eventCallbacks.indexOf(callback);
                if (index === -1) {
                    return;
                }
                _this.eventCallbacks.splice(index, 1);
            }
        };
    };
    /**
     * Adds an object to the set of objects that should be validated when validate is called.
     * @param object The object.
     * @param rules Optional. The rules. If rules aren't supplied the Validator implementation will lookup the rules.
     */
    ValidationController.prototype.addObject = function (object, rules) {
        this.objects.set(object, rules);
    };
    /**
     * Removes an object from the set of objects that should be validated when validate is called.
     * @param object The object.
     */
    ValidationController.prototype.removeObject = function (object) {
        this.objects.delete(object);
        this.processResultDelta('reset', this.results.filter(function (result) { return result.object === object; }), []);
    };
    /**
     * Adds and renders an error.
     */
    ValidationController.prototype.addError = function (message, object, propertyName) {
        if (propertyName === void 0) { propertyName = null; }
        var resolvedPropertyName;
        if (propertyName === null) {
            resolvedPropertyName = propertyName;
        }
        else {
            resolvedPropertyName = this.propertyParser.parse(propertyName);
        }
        var result = new ValidateResult({ __manuallyAdded__: true }, object, resolvedPropertyName, false, message);
        this.processResultDelta('validate', [], [result]);
        return result;
    };
    /**
     * Removes and unrenders an error.
     */
    ValidationController.prototype.removeError = function (result) {
        if (this.results.indexOf(result) !== -1) {
            this.processResultDelta('reset', [result], []);
        }
    };
    /**
     * Adds a renderer.
     * @param renderer The renderer.
     */
    ValidationController.prototype.addRenderer = function (renderer) {
        var _this = this;
        this.renderers.push(renderer);
        renderer.render({
            kind: 'validate',
            render: this.results.map(function (result) { return ({ result: result, elements: _this.elements.get(result) }); }),
            unrender: []
        });
    };
    /**
     * Removes a renderer.
     * @param renderer The renderer.
     */
    ValidationController.prototype.removeRenderer = function (renderer) {
        var _this = this;
        this.renderers.splice(this.renderers.indexOf(renderer), 1);
        renderer.render({
            kind: 'reset',
            render: [],
            unrender: this.results.map(function (result) { return ({ result: result, elements: _this.elements.get(result) }); })
        });
    };
    /**
     * Registers a binding with the controller.
     * @param binding The binding instance.
     * @param target The DOM element.
     * @param rules (optional) rules associated with the binding. Validator implementation specific.
     */
    ValidationController.prototype.registerBinding = function (binding, target, rules) {
        this.bindings.set(binding, { target: target, rules: rules, propertyInfo: null });
    };
    /**
     * Unregisters a binding with the controller.
     * @param binding The binding instance.
     */
    ValidationController.prototype.unregisterBinding = function (binding) {
        this.resetBinding(binding);
        this.bindings.delete(binding);
    };
    /**
     * Interprets the instruction and returns a predicate that will identify
     * relevant results in the list of rendered validation results.
     */
    ValidationController.prototype.getInstructionPredicate = function (instruction) {
        var _this = this;
        if (instruction) {
            var object_1 = instruction.object, propertyName_1 = instruction.propertyName, rules_1 = instruction.rules;
            var predicate_1;
            if (instruction.propertyName) {
                predicate_1 = function (x) { return x.object === object_1 && x.propertyName === propertyName_1; };
            }
            else {
                predicate_1 = function (x) { return x.object === object_1; };
            }
            if (rules_1) {
                return function (x) { return predicate_1(x) && _this.validator.ruleExists(rules_1, x.rule); };
            }
            return predicate_1;
        }
        else {
            return function () { return true; };
        }
    };
    /**
     * Validates and renders results.
     * @param instruction Optional. Instructions on what to validate. If undefined, all
     * objects and bindings will be validated.
     */
    ValidationController.prototype.validate = function (instruction) {
        var _this = this;
        // Get a function that will process the validation instruction.
        var execute;
        if (instruction) {
            // tslint:disable-next-line:prefer-const
            var object_2 = instruction.object, propertyName_2 = instruction.propertyName, rules_2 = instruction.rules;
            // if rules were not specified, check the object map.
            rules_2 = rules_2 || this.objects.get(object_2);
            // property specified?
            if (instruction.propertyName === undefined) {
                // validate the specified object.
                execute = function () { return _this.validator.validateObject(object_2, rules_2); };
            }
            else {
                // validate the specified property.
                execute = function () { return _this.validator.validateProperty(object_2, propertyName_2, rules_2); };
            }
        }
        else {
            // validate all objects and bindings.
            execute = function () {
                var promises = [];
                for (var _i = 0, _a = Array.from(_this.objects); _i < _a.length; _i++) {
                    var _b = _a[_i], object = _b[0], rules = _b[1];
                    promises.push(_this.validator.validateObject(object, rules));
                }
                for (var _c = 0, _d = Array.from(_this.bindings); _c < _d.length; _c++) {
                    var _e = _d[_c], binding = _e[0], rules = _e[1].rules;
                    var propertyInfo = getPropertyInfo(binding.sourceExpression, binding.source);
                    if (!propertyInfo || _this.objects.has(propertyInfo.object)) {
                        continue;
                    }
                    promises.push(_this.validator.validateProperty(propertyInfo.object, propertyInfo.propertyName, rules));
                }
                return Promise.all(promises).then(function (resultSets) { return resultSets.reduce(function (a, b) { return a.concat(b); }, []); });
            };
        }
        // Wait for any existing validation to finish, execute the instruction, render the results.
        this.validating = true;
        var returnPromise = this.finishValidating
            .then(execute)
            .then(function (newResults) {
            var predicate = _this.getInstructionPredicate(instruction);
            var oldResults = _this.results.filter(predicate);
            _this.processResultDelta('validate', oldResults, newResults);
            if (returnPromise === _this.finishValidating) {
                _this.validating = false;
            }
            var result = {
                instruction: instruction,
                valid: newResults.find(function (x) { return !x.valid; }) === undefined,
                results: newResults
            };
            _this.invokeCallbacks(instruction, result);
            return result;
        })
            .catch(function (exception) {
            // recover, to enable subsequent calls to validate()
            _this.validating = false;
            _this.finishValidating = Promise.resolve();
            return Promise.reject(exception);
        });
        this.finishValidating = returnPromise;
        return returnPromise;
    };
    /**
     * Resets any rendered validation results (unrenders).
     * @param instruction Optional. Instructions on what to reset. If unspecified all rendered results
     * will be unrendered.
     */
    ValidationController.prototype.reset = function (instruction) {
        var predicate = this.getInstructionPredicate(instruction);
        var oldResults = this.results.filter(predicate);
        this.processResultDelta('reset', oldResults, []);
        this.invokeCallbacks(instruction, null);
    };
    /**
     * Gets the elements associated with an object and propertyName (if any).
     */
    ValidationController.prototype.getAssociatedElements = function (_a) {
        var object = _a.object, propertyName = _a.propertyName;
        var elements = [];
        for (var _i = 0, _b = Array.from(this.bindings); _i < _b.length; _i++) {
            var _c = _b[_i], binding = _c[0], target = _c[1].target;
            var propertyInfo = getPropertyInfo(binding.sourceExpression, binding.source);
            if (propertyInfo && propertyInfo.object === object && propertyInfo.propertyName === propertyName) {
                elements.push(target);
            }
        }
        return elements;
    };
    ValidationController.prototype.processResultDelta = function (kind, oldResults, newResults) {
        // prepare the instruction.
        var instruction = {
            kind: kind,
            render: [],
            unrender: []
        };
        // create a shallow copy of newResults so we can mutate it without causing side-effects.
        newResults = newResults.slice(0);
        var _loop_1 = function (oldResult) {
            // get the elements associated with the old result.
            var elements = this_1.elements.get(oldResult);
            // remove the old result from the element map.
            this_1.elements.delete(oldResult);
            // create the unrender instruction.
            instruction.unrender.push({ result: oldResult, elements: elements });
            // determine if there's a corresponding new result for the old result we are unrendering.
            var newResultIndex = newResults.findIndex(function (x) { return x.rule === oldResult.rule && x.object === oldResult.object && x.propertyName === oldResult.propertyName; });
            if (newResultIndex === -1) {
                // no corresponding new result... simple remove.
                this_1.results.splice(this_1.results.indexOf(oldResult), 1);
                if (!oldResult.valid) {
                    this_1.errors.splice(this_1.errors.indexOf(oldResult), 1);
                }
            }
            else {
                // there is a corresponding new result...
                var newResult = newResults.splice(newResultIndex, 1)[0];
                // get the elements that are associated with the new result.
                var elements_1 = this_1.getAssociatedElements(newResult);
                this_1.elements.set(newResult, elements_1);
                // create a render instruction for the new result.
                instruction.render.push({ result: newResult, elements: elements_1 });
                // do an in-place replacement of the old result with the new result.
                // this ensures any repeats bound to this.results will not thrash.
                this_1.results.splice(this_1.results.indexOf(oldResult), 1, newResult);
                if (!oldResult.valid && newResult.valid) {
                    this_1.errors.splice(this_1.errors.indexOf(oldResult), 1);
                }
                else if (!oldResult.valid && !newResult.valid) {
                    this_1.errors.splice(this_1.errors.indexOf(oldResult), 1, newResult);
                }
                else if (!newResult.valid) {
                    this_1.errors.push(newResult);
                }
            }
        };
        var this_1 = this;
        // create unrender instructions from the old results.
        for (var _i = 0, oldResults_1 = oldResults; _i < oldResults_1.length; _i++) {
            var oldResult = oldResults_1[_i];
            _loop_1(oldResult);
        }
        // create render instructions from the remaining new results.
        for (var _a = 0, newResults_1 = newResults; _a < newResults_1.length; _a++) {
            var result = newResults_1[_a];
            var elements = this.getAssociatedElements(result);
            instruction.render.push({ result: result, elements: elements });
            this.elements.set(result, elements);
            this.results.push(result);
            if (!result.valid) {
                this.errors.push(result);
            }
        }
        // render.
        for (var _b = 0, _c = this.renderers; _b < _c.length; _b++) {
            var renderer = _c[_b];
            renderer.render(instruction);
        }
    };
    /**
     * Validates the property associated with a binding.
     */
    ValidationController.prototype.validateBinding = function (binding) {
        if (!binding.isBound) {
            return;
        }
        var propertyInfo = getPropertyInfo(binding.sourceExpression, binding.source);
        var rules;
        var registeredBinding = this.bindings.get(binding);
        if (registeredBinding) {
            rules = registeredBinding.rules;
            registeredBinding.propertyInfo = propertyInfo;
        }
        if (!propertyInfo) {
            return;
        }
        var object = propertyInfo.object, propertyName = propertyInfo.propertyName;
        this.validate({ object: object, propertyName: propertyName, rules: rules });
    };
    /**
     * Resets the results for a property associated with a binding.
     */
    ValidationController.prototype.resetBinding = function (binding) {
        var registeredBinding = this.bindings.get(binding);
        var propertyInfo = getPropertyInfo(binding.sourceExpression, binding.source);
        if (!propertyInfo && registeredBinding) {
            propertyInfo = registeredBinding.propertyInfo;
        }
        if (registeredBinding) {
            registeredBinding.propertyInfo = null;
        }
        if (!propertyInfo) {
            return;
        }
        var object = propertyInfo.object, propertyName = propertyInfo.propertyName;
        this.reset({ object: object, propertyName: propertyName });
    };
    /**
     * Changes the controller's validateTrigger.
     * @param newTrigger The new validateTrigger
     */
    ValidationController.prototype.changeTrigger = function (newTrigger) {
        this.validateTrigger = newTrigger;
        var bindings = Array.from(this.bindings.keys());
        for (var _i = 0, bindings_1 = bindings; _i < bindings_1.length; _i++) {
            var binding = bindings_1[_i];
            var source = binding.source;
            binding.unbind();
            binding.bind(source);
        }
    };
    /**
     * Revalidates the controller's current set of errors.
     */
    ValidationController.prototype.revalidateErrors = function () {
        for (var _i = 0, _a = this.errors; _i < _a.length; _i++) {
            var _b = _a[_i], object = _b.object, propertyName = _b.propertyName, rule = _b.rule;
            if (rule.__manuallyAdded__) {
                continue;
            }
            var rules = [[rule]];
            this.validate({ object: object, propertyName: propertyName, rules: rules });
        }
    };
    ValidationController.prototype.invokeCallbacks = function (instruction, result) {
        if (this.eventCallbacks.length === 0) {
            return;
        }
        var event = new ValidateEvent(result ? 'validate' : 'reset', this.errors, this.results, instruction || null, result);
        for (var i = 0; i < this.eventCallbacks.length; i++) {
            this.eventCallbacks[i](event);
        }
    };
    ValidationController.inject = [Validator, PropertyAccessorParser, GlobalValidationConfiguration];
    return ValidationController;
}());

// tslint:disable:no-bitwise
/**
 * Binding behavior. Indicates the bound property should be validated.
 */
var ValidateBindingBehaviorBase = /** @class */ (function () {
    function ValidateBindingBehaviorBase(taskQueue) {
        this.taskQueue = taskQueue;
    }
    ValidateBindingBehaviorBase.prototype.bind = function (binding, source, rulesOrController, rules) {
        var _this = this;
        // identify the target element.
        var target = getTargetDOMElement(binding, source);
        // locate the controller.
        var controller;
        if (rulesOrController instanceof ValidationController) {
            controller = rulesOrController;
        }
        else {
            controller = source.container.get(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_4__.Optional.of(ValidationController));
            rules = rulesOrController;
        }
        if (controller === null) {
            throw new Error("A ValidationController has not been registered.");
        }
        controller.registerBinding(binding, target, rules);
        binding.validationController = controller;
        var trigger = this.getValidateTrigger(controller);
        var event = (trigger & validateTrigger.blur) === validateTrigger.blur ? 'blur'
            : (trigger & validateTrigger.focusout) === validateTrigger.focusout ? 'focusout'
                : null;
        var hasChangeTrigger = (trigger & validateTrigger.change) === validateTrigger.change;
        binding.isDirty = !hasChangeTrigger;
        // validatedOnce is used to control whether controller should validate upon user input
        //
        // always true when validation trigger doesn't include "blur" event (blur/focusout)
        // else it will be set to true after (a) the first user input & loss of focus or (b) validation
        binding.validatedOnce = hasChangeTrigger && event === null;
        if (hasChangeTrigger) {
            binding.vbbUpdateSource = binding.updateSource;
            // tslint:disable-next-line:only-arrow-functions
            // tslint:disable-next-line:space-before-function-paren
            binding.updateSource = function (value) {
                this.vbbUpdateSource(value);
                this.isDirty = true;
                if (this.validatedOnce) {
                    this.validationController.validateBinding(this);
                }
            };
        }
        if (event !== null) {
            binding.focusLossHandler = function () {
                _this.taskQueue.queueMicroTask(function () {
                    if (binding.isDirty) {
                        controller.validateBinding(binding);
                        binding.validatedOnce = true;
                    }
                });
            };
            binding.validationTriggerEvent = event;
            binding.validateTarget = target;
            target.addEventListener(event, binding.focusLossHandler);
            if (hasChangeTrigger) {
                var propertyName_1 = getPropertyInfo(binding.sourceExpression, binding.source).propertyName;
                binding.validationSubscription = controller.subscribe(function (event) {
                    if (!binding.validatedOnce && event.type === 'validate') {
                        binding.validatedOnce = event.errors.findIndex(function (e) { return e.propertyName === propertyName_1; }) > -1;
                    }
                });
            }
        }
        if (trigger !== validateTrigger.manual) {
            binding.standardUpdateTarget = binding.updateTarget;
            // tslint:disable-next-line:only-arrow-functions
            // tslint:disable-next-line:space-before-function-paren
            binding.updateTarget = function (value) {
                this.standardUpdateTarget(value);
                this.validationController.resetBinding(this);
            };
        }
    };
    ValidateBindingBehaviorBase.prototype.unbind = function (binding) {
        // reset the binding to it's original state.
        if (binding.vbbUpdateSource) {
            binding.updateSource = binding.vbbUpdateSource;
            binding.vbbUpdateSource = null;
        }
        if (binding.standardUpdateTarget) {
            binding.updateTarget = binding.standardUpdateTarget;
            binding.standardUpdateTarget = null;
        }
        if (binding.focusLossHandler) {
            binding.validateTarget.removeEventListener(binding.validationTriggerEvent, binding.focusLossHandler);
            binding.focusLossHandler = null;
            binding.validateTarget = null;
        }
        if (binding.validationSubscription) {
            binding.validationSubscription.dispose();
            binding.validationSubscription = null;
        }
        binding.validationController.unregisterBinding(binding);
        binding.validationController = null;
        binding.isDirty = null;
        binding.validatedOnce = null;
    };
    return ValidateBindingBehaviorBase;
}());

/**
 * Binding behavior. Indicates the bound property should be validated
 * when the validate trigger specified by the associated controller's
 * validateTrigger property occurs.
 */
var ValidateBindingBehavior = /** @class */ (function (_super) {
    __extends(ValidateBindingBehavior, _super);
    function ValidateBindingBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValidateBindingBehavior.prototype.getValidateTrigger = function (controller) {
        return controller.validateTrigger;
    };
    ValidateBindingBehavior.inject = [aurelia_task_queue__WEBPACK_IMPORTED_MODULE_5__.TaskQueue];
    ValidateBindingBehavior = __decorate([
        (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.bindingBehavior)('validate')
    ], ValidateBindingBehavior);
    return ValidateBindingBehavior;
}(ValidateBindingBehaviorBase));
/**
 * Binding behavior. Indicates the bound property will be validated
 * manually, by calling controller.validate(). No automatic validation
 * triggered by data-entry or blur will occur.
 */
var ValidateManuallyBindingBehavior = /** @class */ (function (_super) {
    __extends(ValidateManuallyBindingBehavior, _super);
    function ValidateManuallyBindingBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValidateManuallyBindingBehavior.prototype.getValidateTrigger = function () {
        return validateTrigger.manual;
    };
    ValidateManuallyBindingBehavior.inject = [aurelia_task_queue__WEBPACK_IMPORTED_MODULE_5__.TaskQueue];
    ValidateManuallyBindingBehavior = __decorate([
        (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.bindingBehavior)('validateManually')
    ], ValidateManuallyBindingBehavior);
    return ValidateManuallyBindingBehavior;
}(ValidateBindingBehaviorBase));
/**
 * Binding behavior. Indicates the bound property should be validated
 * when the associated element blurs.
 */
var ValidateOnBlurBindingBehavior = /** @class */ (function (_super) {
    __extends(ValidateOnBlurBindingBehavior, _super);
    function ValidateOnBlurBindingBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValidateOnBlurBindingBehavior.prototype.getValidateTrigger = function () {
        return validateTrigger.blur;
    };
    ValidateOnBlurBindingBehavior.inject = [aurelia_task_queue__WEBPACK_IMPORTED_MODULE_5__.TaskQueue];
    ValidateOnBlurBindingBehavior = __decorate([
        (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.bindingBehavior)('validateOnBlur')
    ], ValidateOnBlurBindingBehavior);
    return ValidateOnBlurBindingBehavior;
}(ValidateBindingBehaviorBase));
/**
 * Binding behavior. Indicates the bound property should be validated
 * when the associated element is changed by the user, causing a change
 * to the model.
 */
var ValidateOnChangeBindingBehavior = /** @class */ (function (_super) {
    __extends(ValidateOnChangeBindingBehavior, _super);
    function ValidateOnChangeBindingBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValidateOnChangeBindingBehavior.prototype.getValidateTrigger = function () {
        return validateTrigger.change;
    };
    ValidateOnChangeBindingBehavior.inject = [aurelia_task_queue__WEBPACK_IMPORTED_MODULE_5__.TaskQueue];
    ValidateOnChangeBindingBehavior = __decorate([
        (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.bindingBehavior)('validateOnChange')
    ], ValidateOnChangeBindingBehavior);
    return ValidateOnChangeBindingBehavior;
}(ValidateBindingBehaviorBase));
/**
 * Binding behavior. Indicates the bound property should be validated
 * when the associated element blurs or is changed by the user, causing
 * a change to the model.
 */
var ValidateOnChangeOrBlurBindingBehavior = /** @class */ (function (_super) {
    __extends(ValidateOnChangeOrBlurBindingBehavior, _super);
    function ValidateOnChangeOrBlurBindingBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValidateOnChangeOrBlurBindingBehavior.prototype.getValidateTrigger = function () {
        return validateTrigger.changeOrBlur;
    };
    ValidateOnChangeOrBlurBindingBehavior.inject = [aurelia_task_queue__WEBPACK_IMPORTED_MODULE_5__.TaskQueue];
    ValidateOnChangeOrBlurBindingBehavior = __decorate([
        (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.bindingBehavior)('validateOnChangeOrBlur')
    ], ValidateOnChangeOrBlurBindingBehavior);
    return ValidateOnChangeOrBlurBindingBehavior;
}(ValidateBindingBehaviorBase));
var ValidateOnFocusoutBindingBehavior = /** @class */ (function (_super) {
    __extends(ValidateOnFocusoutBindingBehavior, _super);
    function ValidateOnFocusoutBindingBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValidateOnFocusoutBindingBehavior.prototype.getValidateTrigger = function () {
        return validateTrigger.focusout;
    };
    ValidateOnFocusoutBindingBehavior.inject = [aurelia_task_queue__WEBPACK_IMPORTED_MODULE_5__.TaskQueue];
    ValidateOnFocusoutBindingBehavior = __decorate([
        (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.bindingBehavior)('validateOnFocusout')
    ], ValidateOnFocusoutBindingBehavior);
    return ValidateOnFocusoutBindingBehavior;
}(ValidateBindingBehaviorBase));
var ValidateOnChangeOrFocusoutBindingBehavior = /** @class */ (function (_super) {
    __extends(ValidateOnChangeOrFocusoutBindingBehavior, _super);
    function ValidateOnChangeOrFocusoutBindingBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValidateOnChangeOrFocusoutBindingBehavior.prototype.getValidateTrigger = function () {
        return validateTrigger.changeOrFocusout;
    };
    ValidateOnChangeOrFocusoutBindingBehavior.inject = [aurelia_task_queue__WEBPACK_IMPORTED_MODULE_5__.TaskQueue];
    ValidateOnChangeOrFocusoutBindingBehavior = __decorate([
        (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.bindingBehavior)('validateOnChangeOrFocusout')
    ], ValidateOnChangeOrFocusoutBindingBehavior);
    return ValidateOnChangeOrFocusoutBindingBehavior;
}(ValidateBindingBehaviorBase));

/**
 * Creates ValidationController instances.
 */
var ValidationControllerFactory = /** @class */ (function () {
    function ValidationControllerFactory(container) {
        this.container = container;
    }
    ValidationControllerFactory.get = function (container) {
        return new ValidationControllerFactory(container);
    };
    /**
     * Creates a new controller instance.
     */
    ValidationControllerFactory.prototype.create = function (validator) {
        if (!validator) {
            validator = this.container.get(Validator);
        }
        var propertyParser = this.container.get(PropertyAccessorParser);
        var config = this.container.get(GlobalValidationConfiguration);
        return new ValidationController(validator, propertyParser, config);
    };
    /**
     * Creates a new controller and registers it in the current element's container so that it's
     * available to the validate binding behavior and renderers.
     */
    ValidationControllerFactory.prototype.createForCurrentScope = function (validator) {
        var controller = this.create(validator);
        this.container.registerInstance(ValidationController, controller);
        return controller;
    };
    return ValidationControllerFactory;
}());
ValidationControllerFactory['protocol:aurelia:resolver'] = true;

var ValidationErrorsCustomAttribute = /** @class */ (function () {
    function ValidationErrorsCustomAttribute(boundaryElement, controllerAccessor) {
        this.boundaryElement = boundaryElement;
        this.controllerAccessor = controllerAccessor;
        this.controller = null;
        this.errors = [];
        this.errorsInternal = [];
    }
    ValidationErrorsCustomAttribute.inject = function () {
        return [aurelia_pal__WEBPACK_IMPORTED_MODULE_3__.DOM.Element, aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_4__.Lazy.of(ValidationController)];
    };
    ValidationErrorsCustomAttribute.prototype.sort = function () {
        this.errorsInternal.sort(function (a, b) {
            if (a.targets[0] === b.targets[0]) {
                return 0;
            }
            // tslint:disable-next-line:no-bitwise
            return a.targets[0].compareDocumentPosition(b.targets[0]) & 2 ? 1 : -1;
        });
    };
    ValidationErrorsCustomAttribute.prototype.interestingElements = function (elements) {
        var _this = this;
        return elements.filter(function (e) { return _this.boundaryElement.contains(e); });
    };
    ValidationErrorsCustomAttribute.prototype.render = function (instruction) {
        var _loop_1 = function (result) {
            var index = this_1.errorsInternal.findIndex(function (x) { return x.error === result; });
            if (index !== -1) {
                this_1.errorsInternal.splice(index, 1);
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = instruction.unrender; _i < _a.length; _i++) {
            var result = _a[_i].result;
            _loop_1(result);
        }
        for (var _b = 0, _c = instruction.render; _b < _c.length; _b++) {
            var _d = _c[_b], result = _d.result, elements = _d.elements;
            if (result.valid) {
                continue;
            }
            var targets = this.interestingElements(elements);
            if (targets.length) {
                this.errorsInternal.push({ error: result, targets: targets });
            }
        }
        this.sort();
        this.errors = this.errorsInternal;
    };
    ValidationErrorsCustomAttribute.prototype.bind = function () {
        if (!this.controller) {
            this.controller = this.controllerAccessor();
        }
        // this will call render() with the side-effect of updating this.errors
        this.controller.addRenderer(this);
    };
    ValidationErrorsCustomAttribute.prototype.unbind = function () {
        if (this.controller) {
            this.controller.removeRenderer(this);
        }
    };
    __decorate([
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_1__.bindable)({ defaultBindingMode: aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.bindingMode.oneWay })
    ], ValidationErrorsCustomAttribute.prototype, "controller", void 0);
    __decorate([
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_1__.bindable)({ primaryProperty: true, defaultBindingMode: aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.bindingMode.twoWay })
    ], ValidationErrorsCustomAttribute.prototype, "errors", void 0);
    ValidationErrorsCustomAttribute = __decorate([
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_1__.customAttribute)('validation-errors')
    ], ValidationErrorsCustomAttribute);
    return ValidationErrorsCustomAttribute;
}());

var ValidationRendererCustomAttribute = /** @class */ (function () {
    function ValidationRendererCustomAttribute() {
    }
    ValidationRendererCustomAttribute.prototype.created = function (view) {
        this.container = view.container;
    };
    ValidationRendererCustomAttribute.prototype.bind = function () {
        this.controller = this.container.get(ValidationController);
        this.renderer = this.container.get(this.value);
        this.controller.addRenderer(this.renderer);
    };
    ValidationRendererCustomAttribute.prototype.unbind = function () {
        this.controller.removeRenderer(this.renderer);
        this.controller = null;
        this.renderer = null;
    };
    ValidationRendererCustomAttribute = __decorate([
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_1__.customAttribute)('validation-renderer')
    ], ValidationRendererCustomAttribute);
    return ValidationRendererCustomAttribute;
}());

/**
 * Part of the fluent rule API. Enables customizing property rules.
 */
var FluentRuleCustomizer = /** @class */ (function () {
    function FluentRuleCustomizer(property, condition, config, fluentEnsure, fluentRules, parsers) {
        if (config === void 0) { config = {}; }
        this.fluentEnsure = fluentEnsure;
        this.fluentRules = fluentRules;
        this.parsers = parsers;
        this.rule = {
            property: property,
            condition: condition,
            config: config,
            when: null,
            messageKey: 'default',
            message: null,
            sequence: fluentRules.sequence
        };
        this.fluentEnsure._addRule(this.rule);
    }
    /**
     * Validate subsequent rules after previously declared rules have
     * been validated successfully. Use to postpone validation of costly
     * rules until less expensive rules pass validation.
     */
    FluentRuleCustomizer.prototype.then = function () {
        this.fluentRules.sequence++;
        return this;
    };
    /**
     * Specifies the key to use when looking up the rule's validation message.
     */
    FluentRuleCustomizer.prototype.withMessageKey = function (key) {
        this.rule.messageKey = key;
        this.rule.message = null;
        return this;
    };
    /**
     * Specifies rule's validation message.
     */
    FluentRuleCustomizer.prototype.withMessage = function (message) {
        this.rule.messageKey = 'custom';
        this.rule.message = this.parsers.message.parse(message);
        return this;
    };
    /**
     * Specifies a condition that must be met before attempting to validate the rule.
     * @param condition A function that accepts the object as a parameter and returns true
     * or false whether the rule should be evaluated.
     */
    FluentRuleCustomizer.prototype.when = function (condition) {
        this.rule.when = condition;
        return this;
    };
    /**
     * Tags the rule instance, enabling the rule to be found easily
     * using ValidationRules.taggedRules(rules, tag)
     */
    FluentRuleCustomizer.prototype.tag = function (tag) {
        this.rule.tag = tag;
        return this;
    };
    ///// FluentEnsure APIs /////
    /**
     * Target a property with validation rules.
     * @param property The property to target. Can be the property name or a property accessor function.
     */
    FluentRuleCustomizer.prototype.ensure = function (subject) {
        return this.fluentEnsure.ensure(subject);
    };
    /**
     * Targets an object with validation rules.
     */
    FluentRuleCustomizer.prototype.ensureObject = function () {
        return this.fluentEnsure.ensureObject();
    };
    Object.defineProperty(FluentRuleCustomizer.prototype, "rules", {
        /**
         * Rules that have been defined using the fluent API.
         */
        get: function () {
            return this.fluentEnsure.rules;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Applies the rules to a class or object, making them discoverable by the StandardValidator.
     * @param target A class or object.
     */
    FluentRuleCustomizer.prototype.on = function (target) {
        return this.fluentEnsure.on(target);
    };
    ///////// FluentRules APIs /////////
    /**
     * Applies an ad-hoc rule function to the ensured property or object.
     * @param condition The function to validate the rule.
     * Will be called with two arguments, the property value and the object.
     * Should return a boolean or a Promise that resolves to a boolean.
     */
    FluentRuleCustomizer.prototype.satisfies = function (condition, config) {
        return this.fluentRules.satisfies(condition, config);
    };
    /**
     * Applies a rule by name.
     * @param name The name of the custom or standard rule.
     * @param args The rule's arguments.
     */
    FluentRuleCustomizer.prototype.satisfiesRule = function (name) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return (_a = this.fluentRules).satisfiesRule.apply(_a, __spreadArrays([name], args));
    };
    /**
     * Applies the "required" rule to the property.
     * The value cannot be null, undefined or whitespace.
     */
    FluentRuleCustomizer.prototype.required = function () {
        return this.fluentRules.required();
    };
    /**
     * Applies the "matches" rule to the property.
     * Value must match the specified regular expression.
     * null, undefined and empty-string values are considered valid.
     */
    FluentRuleCustomizer.prototype.matches = function (regex) {
        return this.fluentRules.matches(regex);
    };
    /**
     * Applies the "email" rule to the property.
     * null, undefined and empty-string values are considered valid.
     */
    FluentRuleCustomizer.prototype.email = function () {
        return this.fluentRules.email();
    };
    /**
     * Applies the "minLength" STRING validation rule to the property.
     * null, undefined and empty-string values are considered valid.
     */
    FluentRuleCustomizer.prototype.minLength = function (length) {
        return this.fluentRules.minLength(length);
    };
    /**
     * Applies the "maxLength" STRING validation rule to the property.
     * null, undefined and empty-string values are considered valid.
     */
    FluentRuleCustomizer.prototype.maxLength = function (length) {
        return this.fluentRules.maxLength(length);
    };
    /**
     * Applies the "minItems" ARRAY validation rule to the property.
     * null and undefined values are considered valid.
     */
    FluentRuleCustomizer.prototype.minItems = function (count) {
        return this.fluentRules.minItems(count);
    };
    /**
     * Applies the "maxItems" ARRAY validation rule to the property.
     * null and undefined values are considered valid.
     */
    FluentRuleCustomizer.prototype.maxItems = function (count) {
        return this.fluentRules.maxItems(count);
    };
    /**
     * Applies the "min" NUMBER validation rule to the property.
     * Value must be greater than or equal to the specified constraint.
     * null and undefined values are considered valid.
     */
    FluentRuleCustomizer.prototype.min = function (value) {
        return this.fluentRules.min(value);
    };
    /**
     * Applies the "max" NUMBER validation rule to the property.
     * Value must be less than or equal to the specified constraint.
     * null and undefined values are considered valid.
     */
    FluentRuleCustomizer.prototype.max = function (value) {
        return this.fluentRules.max(value);
    };
    /**
     * Applies the "range" NUMBER validation rule to the property.
     * Value must be between or equal to the specified min and max.
     * null and undefined values are considered valid.
     */
    FluentRuleCustomizer.prototype.range = function (min, max) {
        return this.fluentRules.range(min, max);
    };
    /**
     * Applies the "between" NUMBER validation rule to the property.
     * Value must be between but not equal to the specified min and max.
     * null and undefined values are considered valid.
     */
    FluentRuleCustomizer.prototype.between = function (min, max) {
        return this.fluentRules.between(min, max);
    };
    /**
     * Applies the "equals" validation rule to the property.
     * null, undefined and empty-string values are considered valid.
     */
    FluentRuleCustomizer.prototype.equals = function (expectedValue) {
        return this.fluentRules.equals(expectedValue);
    };
    return FluentRuleCustomizer;
}());
/**
 * Part of the fluent rule API. Enables applying rules to properties and objects.
 */
var FluentRules = /** @class */ (function () {
    function FluentRules(fluentEnsure, parsers, property) {
        this.fluentEnsure = fluentEnsure;
        this.parsers = parsers;
        this.property = property;
        /**
         * Current rule sequence number. Used to postpone evaluation of rules until rules
         * with lower sequence number have successfully validated. The "then" fluent API method
         * manages this property, there's usually no need to set it directly.
         */
        this.sequence = 0;
    }
    /**
     * Sets the display name of the ensured property.
     */
    FluentRules.prototype.displayName = function (name) {
        this.property.displayName = name;
        return this;
    };
    /**
     * Applies an ad-hoc rule function to the ensured property or object.
     * @param condition The function to validate the rule.
     * Will be called with two arguments, the property value and the object.
     * Should return a boolean or a Promise that resolves to a boolean.
     */
    FluentRules.prototype.satisfies = function (condition, config) {
        return new FluentRuleCustomizer(this.property, condition, config, this.fluentEnsure, this, this.parsers);
    };
    /**
     * Applies a rule by name.
     * @param name The name of the custom or standard rule.
     * @param args The rule's arguments.
     */
    FluentRules.prototype.satisfiesRule = function (name) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var rule = FluentRules.customRules[name];
        if (!rule) {
            // standard rule?
            rule = this[name];
            if (rule instanceof Function) {
                return rule.call.apply(rule, __spreadArrays([this], args));
            }
            throw new Error("Rule with name \"" + name + "\" does not exist.");
        }
        var config = rule.argsToConfig ? rule.argsToConfig.apply(rule, args) : undefined;
        return this.satisfies(function (value, obj) {
            var _a;
            return (_a = rule.condition).call.apply(_a, __spreadArrays([_this, value, obj], args));
        }, config)
            .withMessageKey(name);
    };
    /**
     * Applies the "required" rule to the property.
     * The value cannot be null, undefined or whitespace.
     */
    FluentRules.prototype.required = function () {
        return this.satisfies(function (value) {
            return value !== null
                && value !== undefined
                && !(isString(value) && !/\S/.test(value));
        }).withMessageKey('required');
    };
    /**
     * Applies the "matches" rule to the property.
     * Value must match the specified regular expression.
     * null, undefined and empty-string values are considered valid.
     */
    FluentRules.prototype.matches = function (regex) {
        return this.satisfies(function (value) { return value === null || value === undefined || value.length === 0 || regex.test(value); })
            .withMessageKey('matches');
    };
    /**
     * Applies the "email" rule to the property.
     * null, undefined and empty-string values are considered valid.
     */
    FluentRules.prototype.email = function () {
        // regex from https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
        /* tslint:disable:max-line-length */
        return this.matches(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
            /* tslint:enable:max-line-length */
            .withMessageKey('email');
    };
    /**
     * Applies the "minLength" STRING validation rule to the property.
     * null, undefined and empty-string values are considered valid.
     */
    FluentRules.prototype.minLength = function (length) {
        return this.satisfies(function (value) { return value === null || value === undefined || value.length === 0 || value.length >= length; }, { length: length })
            .withMessageKey('minLength');
    };
    /**
     * Applies the "maxLength" STRING validation rule to the property.
     * null, undefined and empty-string values are considered valid.
     */
    FluentRules.prototype.maxLength = function (length) {
        return this.satisfies(function (value) { return value === null || value === undefined || value.length === 0 || value.length <= length; }, { length: length })
            .withMessageKey('maxLength');
    };
    /**
     * Applies the "minItems" ARRAY validation rule to the property.
     * null and undefined values are considered valid.
     */
    FluentRules.prototype.minItems = function (count) {
        return this.satisfies(function (value) { return value === null || value === undefined || value.length >= count; }, { count: count })
            .withMessageKey('minItems');
    };
    /**
     * Applies the "maxItems" ARRAY validation rule to the property.
     * null and undefined values are considered valid.
     */
    FluentRules.prototype.maxItems = function (count) {
        return this.satisfies(function (value) { return value === null || value === undefined || value.length <= count; }, { count: count })
            .withMessageKey('maxItems');
    };
    /**
     * Applies the "min" NUMBER validation rule to the property.
     * Value must be greater than or equal to the specified constraint.
     * null and undefined values are considered valid.
     */
    FluentRules.prototype.min = function (constraint) {
        return this.satisfies(function (value) { return value === null || value === undefined || value >= constraint; }, { constraint: constraint })
            .withMessageKey('min');
    };
    /**
     * Applies the "max" NUMBER validation rule to the property.
     * Value must be less than or equal to the specified constraint.
     * null and undefined values are considered valid.
     */
    FluentRules.prototype.max = function (constraint) {
        return this.satisfies(function (value) { return value === null || value === undefined || value <= constraint; }, { constraint: constraint })
            .withMessageKey('max');
    };
    /**
     * Applies the "range" NUMBER validation rule to the property.
     * Value must be between or equal to the specified min and max.
     * null and undefined values are considered valid.
     */
    FluentRules.prototype.range = function (min, max) {
        return this.satisfies(function (value) { return value === null || value === undefined || (value >= min && value <= max); }, { min: min, max: max })
            .withMessageKey('range');
    };
    /**
     * Applies the "between" NUMBER validation rule to the property.
     * Value must be between but not equal to the specified min and max.
     * null and undefined values are considered valid.
     */
    FluentRules.prototype.between = function (min, max) {
        return this.satisfies(function (value) { return value === null || value === undefined || (value > min && value < max); }, { min: min, max: max })
            .withMessageKey('between');
    };
    /**
     * Applies the "equals" validation rule to the property.
     * null and undefined values are considered valid.
     */
    FluentRules.prototype.equals = function (expectedValue) {
        return this.satisfies(function (value) { return value === null || value === undefined || value === '' || value === expectedValue; }, { expectedValue: expectedValue })
            .withMessageKey('equals');
    };
    FluentRules.customRules = {};
    return FluentRules;
}());
/**
 * Part of the fluent rule API. Enables targeting properties and objects with rules.
 */
var FluentEnsure = /** @class */ (function () {
    function FluentEnsure(parsers) {
        this.parsers = parsers;
        /**
         * Rules that have been defined using the fluent API.
         */
        this.rules = [];
    }
    /**
     * Target a property with validation rules.
     * @param property The property to target. Can be the property name or a property accessor
     * function.
     */
    FluentEnsure.prototype.ensure = function (property) {
        this.assertInitialized();
        var name = this.parsers.property.parse(property);
        var fluentRules = new FluentRules(this, this.parsers, { name: name, displayName: null });
        return this.mergeRules(fluentRules, name);
    };
    /**
     * Targets an object with validation rules.
     */
    FluentEnsure.prototype.ensureObject = function () {
        this.assertInitialized();
        var fluentRules = new FluentRules(this, this.parsers, { name: null, displayName: null });
        return this.mergeRules(fluentRules, null);
    };
    /**
     * Applies the rules to a class or object, making them discoverable by the StandardValidator.
     * @param target A class or object.
     */
    FluentEnsure.prototype.on = function (target) {
        Rules.set(target, this.rules);
        return this;
    };
    /**
     * Adds a rule definition to the sequenced ruleset.
     * @internal
     */
    FluentEnsure.prototype._addRule = function (rule) {
        while (this.rules.length < rule.sequence + 1) {
            this.rules.push([]);
        }
        this.rules[rule.sequence].push(rule);
    };
    FluentEnsure.prototype.assertInitialized = function () {
        if (this.parsers) {
            return;
        }
        throw new Error("Did you forget to add \".plugin('aurelia-validation')\" to your main.js?");
    };
    FluentEnsure.prototype.mergeRules = function (fluentRules, propertyName) {
        // tslint:disable-next-line:triple-equals | Use loose equality for property keys
        var existingRules = this.rules.find(function (r) { return r.length > 0 && r[0].property.name == propertyName; });
        if (existingRules) {
            var rule = existingRules[existingRules.length - 1];
            fluentRules.sequence = rule.sequence;
            if (rule.property.displayName !== null) {
                fluentRules = fluentRules.displayName(rule.property.displayName);
            }
        }
        return fluentRules;
    };
    return FluentEnsure;
}());
/**
 * Fluent rule definition API.
 */
var ValidationRules = /** @class */ (function () {
    function ValidationRules() {
    }
    ValidationRules.initialize = function (messageParser, propertyParser) {
        this.parsers = {
            message: messageParser,
            property: propertyParser
        };
    };
    /**
     * Target a property with validation rules.
     * @param property The property to target. Can be the property name or a property accessor function.
     */
    ValidationRules.ensure = function (property) {
        return new FluentEnsure(ValidationRules.parsers).ensure(property);
    };
    /**
     * Targets an object with validation rules.
     */
    ValidationRules.ensureObject = function () {
        return new FluentEnsure(ValidationRules.parsers).ensureObject();
    };
    /**
     * Defines a custom rule.
     * @param name The name of the custom rule. Also serves as the message key.
     * @param condition The rule function.
     * @param message The message expression
     * @param argsToConfig A function that maps the rule's arguments to a "config"
     * object that can be used when evaluating the message expression.
     */
    ValidationRules.customRule = function (name, condition, message, argsToConfig) {
        validationMessages[name] = message;
        FluentRules.customRules[name] = { condition: condition, argsToConfig: argsToConfig };
    };
    /**
     * Returns rules with the matching tag.
     * @param rules The rules to search.
     * @param tag The tag to search for.
     */
    ValidationRules.taggedRules = function (rules, tag) {
        return rules.map(function (x) { return x.filter(function (r) { return r.tag === tag; }); });
    };
    /**
     * Returns rules that have no tag.
     * @param rules The rules to search.
     */
    ValidationRules.untaggedRules = function (rules) {
        return rules.map(function (x) { return x.filter(function (r) { return r.tag === undefined; }); });
    };
    /**
     * Removes the rules from a class or object.
     * @param target A class or object.
     */
    ValidationRules.off = function (target) {
        Rules.unset(target);
    };
    return ValidationRules;
}());

// Exports
/**
 * Configures the plugin.
 */
function configure(
// tslint:disable-next-line:ban-types
frameworkConfig, callback) {
    // the fluent rule definition API needs the parser to translate messages
    // to interpolation expressions.
    var messageParser = frameworkConfig.container.get(ValidationMessageParser);
    var propertyParser = frameworkConfig.container.get(PropertyAccessorParser);
    ValidationRules.initialize(messageParser, propertyParser);
    // configure...
    var config = new GlobalValidationConfiguration();
    if (callback instanceof Function) {
        callback(config);
    }
    config.apply(frameworkConfig.container);
    // globalize the behaviors.
    if (frameworkConfig.globalResources) {
        frameworkConfig.globalResources(ValidateBindingBehavior, ValidateManuallyBindingBehavior, ValidateOnBlurBindingBehavior, ValidateOnFocusoutBindingBehavior, ValidateOnChangeBindingBehavior, ValidateOnChangeOrBlurBindingBehavior, ValidateOnChangeOrFocusoutBindingBehavior, ValidationErrorsCustomAttribute, ValidationRendererCustomAttribute);
    }
}




/***/ }),

/***/ 4639:
/*!********************************************************************!*\
  !*** ./node_modules/aurelia-webpack-plugin/runtime/empty-entry.js ***!
  \********************************************************************/
/***/ (function() {

// This file contains an empty module that does nothing.
// It's meant to be added as an entry point to the main bundle
// and helps reliably adding some Aurelia dependencies that are attached 
// to no module in particular, such as `includeAll` results or `aureliaApp`.
//
// Trying to attach those dependencies to, for example, 'aurelia-bootstrapper' 
// is unreliable if 'aurelia-bootstrapper' is in a DLL outside the bundle.
//
// Trying to attach to 'aurelia-loader-webpack' works well, unless a user
// configures a customized loader instead (unlikely, but in theory supported).


/***/ }),

/***/ 3231:
/*!*************************************************************************!*\
  !*** ./node_modules/aurelia-webpack-plugin/runtime/pal-loader-entry.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ 1015);
// With default aurelia-loader-webpack config, this module is added as an extra entry
// before any other code executes so that PAL.Loader is properly configured.
// There are several tricky points worth noticing.
// 
// We don't add aurelia-loader-webpack itself as an entry point (used to until 2.0 RC2)
// because it (transitively) brings too much bagage with itself, most notably polyfills.
// This made it super-hard to add other polyfills before Aurelia's and led to various bugs.
//
// We don't add custom code in aurelia-pal or aurelia-loader or aurelia-bootstrapper to detect
// the Webpack environment and configure the loader because they might live in a DLL.
// If they do, they would bring aurelia-loader-webpack along in the DLL and this is a special 
// library that *has to be in the main chunk.*
//
// The over-complicated design I've settled upon in the end is to use this special module
// as an entry point that configures aurelia-loader-webpack. It has minimal static imports:
// just aurelia-pal, which itself has no other dependencies and doesn't run much code.
// It hacks the loader field into a getter so that it can synchronously load aurelia-loader-webpack
// just in time when it is demanded by aurelia-bootstrapper.
// This enables users to load polyfills before aurelia-loader-webpack is actually loaded.



var Loader;

Object.defineProperty(aurelia_pal__WEBPACK_IMPORTED_MODULE_0__.PLATFORM, "Loader", {
  get: function() {
    return Loader || (Loader = (__webpack_require__(/*! aurelia-loader-webpack */ 8757).WebpackLoader));
  },
  set: function(value) {
    Loader = value;
  }
});


/***/ })

}]);
//# sourceMappingURL=vendors-da7e83e9.3e95cc108b214a1506c0.bundle.js.map