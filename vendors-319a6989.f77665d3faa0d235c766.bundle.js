"use strict";
(self["webpackChunkweb_client"] = self["webpackChunkweb_client"] || []).push([["vendors-319a6989"],{

/***/ 7062:
/*!***************************************************************************************!*\
  !*** ./node_modules/aurelia-bootstrapper/dist/native-modules/aurelia-bootstrapper.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bootstrap": function() { return /* binding */ bootstrap; },
/* harmony export */   "starting": function() { return /* binding */ starting; }
/* harmony export */ });
/* harmony import */ var aurelia_polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-polyfills */ 2727);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ 1015);



var bootstrapPromises = [];
var startResolve;
var startPromise = new Promise(function (resolve) { return startResolve = resolve; });
var host = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.global;
var isNodeLike = typeof process !== 'undefined' && !process.browser;
function ready() {
    if (!host.document || host.document.readyState === 'complete') {
        return Promise.resolve();
    }
    return new Promise(function (resolve) {
        host.document.addEventListener('DOMContentLoaded', completed);
        host.addEventListener('load', completed);
        function completed() {
            host.document.removeEventListener('DOMContentLoaded', completed);
            host.removeEventListener('load', completed);
            resolve();
        }
    });
}
function createLoader() {
    if (aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.Loader) {
        return Promise.resolve(new aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.Loader());
    }
    if (false) { var m; }
    return Promise.reject('No PLATFORM.Loader is defined and there is neither a System API (ES6) or a Require API (AMD) globally available to load your app.');
}
function initializePal(loader) {
    if (aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.isInitialized)
        return Promise.resolve();
    var type;
    var isRenderer = isNodeLike && (process.type === 'renderer' || process.versions['node-webkit']);
    if (isNodeLike && !isRenderer) {
        type = 'nodejs';
    }
    else if (typeof window !== 'undefined') {
        type = 'browser';
    }
    else if (typeof self !== 'undefined') {
        type = 'worker';
    }
    else {
        throw new Error('Could not determine platform implementation to load.');
    }
    return loader.loadModule('aurelia-pal-' + type)
        .then(function (palModule) { return type === 'nodejs' && !aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.isInitialized && palModule.globalize() || palModule.initialize(); });
}
function preparePlatform(loader) {
    var map = function (moduleId, relativeTo) {
        return loader.normalize(moduleId, relativeTo)
            .then(function (normalized) {
            loader.map(moduleId, normalized);
            return normalized;
        });
    };
    return initializePal(loader)
        .then(function () { return loader.normalize('aurelia-bootstrapper'); })
        .then(function (bootstrapperName) {
        var frameworkPromise = map('aurelia-framework', bootstrapperName);
        return Promise.all([
            frameworkPromise,
            frameworkPromise.then(function (frameworkName) { return map('aurelia-dependency-injection', frameworkName); }),
            map('aurelia-router', bootstrapperName),
            map('aurelia-logging-console', bootstrapperName)
        ]);
    })
        .then(function (_a) {
        var frameworkName = _a[0];
        return loader.loadModule(frameworkName);
    })
        .then(function (fx) { return startResolve(function () { return new fx.Aurelia(loader); }); });
}
function config(appHost, configModuleId, aurelia) {
    aurelia.host = appHost;
    aurelia.configModuleId = configModuleId || null;
    if (configModuleId) {
        return aurelia.loader
            .loadModule(configModuleId)
            .then(function (customConfig) {
            if (!customConfig.configure) {
                throw new Error("Cannot initialize module '".concat(configModuleId, "' without a configure function."));
            }
            return customConfig.configure(aurelia);
        });
    }
    aurelia.use
        .standardConfiguration()
        .developmentLogging();
    return aurelia.start().then(function () { return aurelia.setRoot(); });
}
function run() {
    return ready()
        .then(createLoader)
        .then(preparePlatform)
        .then(function () {
        var appHosts = host.document.querySelectorAll('[aurelia-app],[data-aurelia-app]');
        for (var i = 0, ii = appHosts.length; i < ii; ++i) {
            var appHost = appHosts[i];
            var mainModuleId = appHost.getAttribute('aurelia-app') || appHost.getAttribute('data-aurelia-app');
            bootstrap(config.bind(null, appHost, mainModuleId));
        }
        var toConsole = console.error.bind(console);
        var bootstraps = bootstrapPromises.map(function (p) { return p.catch(toConsole); });
        bootstrapPromises = null;
        return Promise.all(bootstraps);
    });
}
function bootstrap(configure) {
    var p = startPromise.then(function (factory) { return configure(factory()); });
    if (bootstrapPromises)
        bootstrapPromises.push(p);
    return p;
}
var starting = run();


//# sourceMappingURL=aurelia-bootstrapper.js.map


/***/ }),

/***/ "aurelia-chart/attributes/chart-attribute":
/*!**************************************************************************************!*\
  !*** ./node_modules/aurelia-chart/dist/native-modules/attributes/chart-attribute.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartAttribute": function() { return /* binding */ ChartAttribute; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _observers_model_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observers/model-observer */ 3089);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 3328);




var ChartAttribute = /** @class */ (function () {
    function ChartAttribute(element, modelObserver) {
        var _this = this;
        this.element = element;
        this.modelObserver = modelObserver;
        this.nativeOptions = {};
        this.refreshChart = function () {
            if (_this.activeChart) {
                _this.activeChart.update();
                _this.activeChart.resize();
            }
        };
    }
    ChartAttribute.prototype.typeChanged = function () {
        this.chartData.type = this.type;
        if (this.isObserving) {
            this.refreshChart();
            this.modelObserver.unsubscribe();
            this.subscribeToChanges();
        }
    };
    ChartAttribute.prototype.dataChanged = function () {
        this.chartData.data = this.data;
        if (this.isObserving) {
            this.refreshChart();
            this.modelObserver.unsubscribe();
            this.subscribeToChanges();
        }
    };
    Object.defineProperty(ChartAttribute.prototype, "isObserving", {
        get: function () {
            return this.shouldUpdate === true || this.shouldUpdate === 'true';
        },
        enumerable: false,
        configurable: true
    });
    ChartAttribute.prototype.bind = function () {
        // prevent initial changed handlers call
    };
    ChartAttribute.prototype.attached = function () {
        this.chartData = {
            type: this.type,
            data: this.data,
            options: this.nativeOptions
        };
        this.activeChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.element, this.chartData);
        this.nativeOptions = this.activeChart.options;
        this.refreshChart();
        if (this.isObserving) {
            this.subscribeToChanges();
        }
    };
    ChartAttribute.prototype.detached = function () {
        var _a;
        if (this.isObserving) {
            this.modelObserver.unsubscribe();
        }
        (_a = this.activeChart) === null || _a === void 0 ? void 0 : _a.destroy();
        this.activeChart = undefined;
    };
    ChartAttribute.prototype.subscribeToChanges = function () {
        var _a;
        this.modelObserver.throttle = (_a = this.throttle) !== null && _a !== void 0 ? _a : 100;
        this.modelObserver.observe(this.data, this.refreshChart);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", String)
    ], ChartAttribute.prototype, "type", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Object)
    ], ChartAttribute.prototype, "data", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Object)
    ], ChartAttribute.prototype, "shouldUpdate", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Number)
    ], ChartAttribute.prototype, "throttle", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable)({ defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindingMode.twoWay }),
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Object)
    ], ChartAttribute.prototype, "nativeOptions", void 0);
    ChartAttribute = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('chart'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element, _observers_model_observer__WEBPACK_IMPORTED_MODULE_1__.ModelObserver),
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [HTMLCanvasElement, _observers_model_observer__WEBPACK_IMPORTED_MODULE_1__.ModelObserver])
    ], ChartAttribute);
    return ChartAttribute;
}());

//# sourceMappingURL=chart-attribute.js.map

/***/ }),

/***/ "aurelia-chart/elements/chart-element":
/*!**********************************************************************************!*\
  !*** ./node_modules/aurelia-chart/dist/native-modules/elements/chart-element.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartElement": function() { return /* binding */ ChartElement; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _observers_model_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observers/model-observer */ 3089);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 3328);




var ChartElement = /** @class */ (function () {
    function ChartElement(modelObserver) {
        var _this = this;
        this.modelObserver = modelObserver;
        this.nativeOptions = {};
        this.refreshChart = function () {
            if (_this.activeChart) {
                _this.activeChart.update();
                _this.activeChart.resize();
            }
        };
    }
    ChartElement.prototype.typeChanged = function () {
        this.chartData.type = this.type;
        if (this.isObserving) {
            this.refreshChart();
            this.modelObserver.unsubscribe();
            this.subscribeToChanges();
        }
    };
    ChartElement.prototype.dataChanged = function () {
        this.chartData.data = this.data;
        if (this.isObserving) {
            this.refreshChart();
            this.modelObserver.unsubscribe();
            this.subscribeToChanges();
        }
    };
    Object.defineProperty(ChartElement.prototype, "isObserving", {
        get: function () {
            return this.shouldUpdate === true || this.shouldUpdate === 'true';
        },
        enumerable: false,
        configurable: true
    });
    ChartElement.prototype.bind = function () {
        // prevent initial changed handlers call
    };
    ChartElement.prototype.attached = function () {
        this.chartData = {
            type: this.type,
            data: this.data,
            options: this.nativeOptions
        };
        this.activeChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.canvasElement, this.chartData);
        this.nativeOptions = this.activeChart.options;
        this.refreshChart();
        if (this.isObserving) {
            this.subscribeToChanges();
        }
    };
    ChartElement.prototype.detached = function () {
        var _a;
        if (this.isObserving) {
            this.modelObserver.unsubscribe();
        }
        (_a = this.activeChart) === null || _a === void 0 ? void 0 : _a.destroy();
        this.activeChart = undefined;
    };
    ChartElement.prototype.subscribeToChanges = function () {
        var _a;
        this.modelObserver.throttle = (_a = this.throttle) !== null && _a !== void 0 ? _a : 100;
        this.modelObserver.observe(this.data.datasets, this.refreshChart);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", String)
    ], ChartElement.prototype, "type", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Object)
    ], ChartElement.prototype, "data", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Object)
    ], ChartElement.prototype, "shouldUpdate", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Number)
    ], ChartElement.prototype, "throttle", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable)({ defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindingMode.twoWay }),
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Object)
    ], ChartElement.prototype, "nativeOptions", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", HTMLCanvasElement)
    ], ChartElement.prototype, "canvasElement", void 0);
    ChartElement = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('chart'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(_observers_model_observer__WEBPACK_IMPORTED_MODULE_1__.ModelObserver),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./chart-element.html'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_observers_model_observer__WEBPACK_IMPORTED_MODULE_1__.ModelObserver])
    ], ChartElement);
    return ChartElement;
}());

//# sourceMappingURL=chart-element.js.map

/***/ }),

/***/ "aurelia-chart":
/*!*****************************************************************!*\
  !*** ./node_modules/aurelia-chart/dist/native-modules/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartElement": function() { return /* reexport safe */ _elements_chart_element__WEBPACK_IMPORTED_MODULE_2__.ChartElement; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var _observers_model_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observers/model-observer */ 3089);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _elements_chart_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/chart-element */ "aurelia-chart/elements/chart-element");


function configure(aurelia) {
    aurelia.globalResources([
        './elements/chart-element',
        './attributes/chart-attribute'
    ]);
    aurelia.container.registerTransient(_observers_model_observer__WEBPACK_IMPORTED_MODULE_0__.ModelObserver);
}

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3089:
/*!************************************************************************************!*\
  !*** ./node_modules/aurelia-chart/dist/native-modules/observers/model-observer.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelObserver": function() { return /* binding */ ModelObserver; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


var ModelObserver = /** @class */ (function () {
    function ModelObserver(bindingEngine) {
        var _this = this;
        this.bindingEngine = bindingEngine;
        this.throttle = 100;
        this.activeSubscriptions = [];
        this.observe = function (model, onChange) {
            var subscriptions = [];
            _this.getAllSubscriptions(model, subscriptions);
            var throttledHandler = function () {
                if (_this.throttle <= 0) {
                    return onChange();
                }
                if (!_this.throttleTimeout) {
                    _this.throttleTimeout = setTimeout(function () {
                        _this.throttleTimeout = undefined;
                        onChange();
                    }, _this.throttle);
                }
            };
            for (var i = 0; i < subscriptions.length; i++) {
                var outstandingSubscription = subscriptions[i](throttledHandler);
                _this.activeSubscriptions.push(outstandingSubscription);
            }
        };
        this.unsubscribe = function () {
            for (var i = 0; i < _this.activeSubscriptions.length; i++) {
                _this.activeSubscriptions[i].dispose();
            }
            _this.activeSubscriptions = [];
        };
    }
    ModelObserver.prototype.getObjectType = function (obj) {
        if (obj instanceof Date) {
            return 'date';
        }
        else if (obj instanceof Array) {
            // return 'array';
        }
        return typeof obj;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ModelObserver.prototype.getAllSubscriptions = function (model, subscriptions) {
        if (model instanceof Array) {
            var subscription = this.bindingEngine.collectionObserver(model).subscribe;
            subscriptions.push(subscription);
        }
        for (var property in model) {
            var typeOfData = this.getObjectType(model[property]);
            switch (typeOfData) {
                case 'object':
                    this.getAllSubscriptions(model[property], subscriptions);
                    break;
                // case 'array': {
                //   const underlyingArray = model[property]() as unknown[];
                //   underlyingArray.forEach((_, index) => this._getAllSubscriptions(underlyingArray[index], subscriptions));
                //   const arraySubscription = this.bindingEngine.propertyObserver(model, property).subscribe;
                //   if (arraySubscription) {
                //     subscriptions.push(arraySubscription);
                //   }
                //   break;
                // }
                default: {
                    var subscription = this.bindingEngine.propertyObserver(model, property).subscribe;
                    if (subscription) {
                        subscriptions.push(subscription);
                    }
                    break;
                }
            }
        }
    };
    ModelObserver = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.BindingEngine),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.BindingEngine])
    ], ModelObserver);
    return ModelObserver;
}());

//# sourceMappingURL=model-observer.js.map

/***/ }),

/***/ 6158:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/aurelia-dependency-injection/dist/native-modules/aurelia-dependency-injection.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "All": function() { return /* binding */ All; },
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Factory": function() { return /* binding */ Factory; },
/* harmony export */   "FactoryInvoker": function() { return /* binding */ FactoryInvoker; },
/* harmony export */   "InvocationHandler": function() { return /* binding */ InvocationHandler; },
/* harmony export */   "Lazy": function() { return /* binding */ Lazy; },
/* harmony export */   "NewInstance": function() { return /* binding */ NewInstance; },
/* harmony export */   "Optional": function() { return /* binding */ Optional; },
/* harmony export */   "Parent": function() { return /* binding */ Parent; },
/* harmony export */   "SingletonRegistration": function() { return /* binding */ SingletonRegistration; },
/* harmony export */   "Strategy": function() { return /* binding */ Strategy; },
/* harmony export */   "StrategyResolver": function() { return /* binding */ StrategyResolver; },
/* harmony export */   "TransientRegistration": function() { return /* binding */ TransientRegistration; },
/* harmony export */   "_emptyParameters": function() { return /* binding */ _emptyParameters; },
/* harmony export */   "all": function() { return /* binding */ all; },
/* harmony export */   "autoinject": function() { return /* binding */ autoinject; },
/* harmony export */   "factory": function() { return /* binding */ factory; },
/* harmony export */   "getDecoratorDependencies": function() { return /* binding */ getDecoratorDependencies; },
/* harmony export */   "inject": function() { return /* binding */ inject; },
/* harmony export */   "invokeAsFactory": function() { return /* binding */ invokeAsFactory; },
/* harmony export */   "invoker": function() { return /* binding */ invoker; },
/* harmony export */   "lazy": function() { return /* binding */ lazy; },
/* harmony export */   "newInstance": function() { return /* binding */ newInstance; },
/* harmony export */   "optional": function() { return /* binding */ optional; },
/* harmony export */   "parent": function() { return /* binding */ parent; },
/* harmony export */   "registration": function() { return /* binding */ registration; },
/* harmony export */   "resolver": function() { return /* binding */ resolver; },
/* harmony export */   "singleton": function() { return /* binding */ singleton; },
/* harmony export */   "transient": function() { return /* binding */ transient; }
/* harmony export */ });
/* harmony import */ var aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-metadata */ 1383);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ 1015);



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

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function isInjectable(potentialTarget) {
    return !!potentialTarget;
}
function autoinject(potentialTarget) {
    var deco = function (target) {
        if (!target.hasOwnProperty('inject')) {
            target.inject = (aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.getOwn(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.paramTypes, target) ||
                _emptyParameters).slice();
            if (target.inject && target.inject.length > 0) {
                if (target.inject[target.inject.length - 1] === Object) {
                    target.inject.splice(-1, 1);
                }
            }
        }
    };
    if (isInjectable(potentialTarget)) {
        return deco(potentialTarget);
    }
    return deco;
}
function inject() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return function (target, _key, descriptor) {
        if (typeof descriptor === 'number') {
            autoinject(target);
            if (rest.length === 1) {
                target.inject[descriptor] = rest[0];
            }
            return;
        }
        if (descriptor) {
            var fn = descriptor.value;
            fn.inject = rest;
        }
        else {
            target.inject = rest;
        }
    };
}

var resolver = aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.protocol.create('aurelia:resolver', function (target) {
    if (!(typeof target.get === 'function')) {
        return 'Resolvers must implement: get(container: Container, key: any): any';
    }
    return true;
});
var Strategy;
(function (Strategy) {
    Strategy[Strategy["instance"] = 0] = "instance";
    Strategy[Strategy["singleton"] = 1] = "singleton";
    Strategy[Strategy["transient"] = 2] = "transient";
    Strategy[Strategy["function"] = 3] = "function";
    Strategy[Strategy["array"] = 4] = "array";
    Strategy[Strategy["alias"] = 5] = "alias";
})(Strategy || (Strategy = {}));
function isStrategy(actual, expected, state) {
    return actual === expected;
}
var StrategyResolver = (function () {
    function StrategyResolver(strategy, state) {
        this.strategy = strategy;
        this.state = state;
    }
    StrategyResolver.prototype.get = function (container, key) {
        if (isStrategy(this.strategy, Strategy.instance, this.state)) {
            return this.state;
        }
        if (isStrategy(this.strategy, Strategy.singleton, this.state)) {
            var singleton = container.invoke(this.state);
            this.state = singleton;
            this.strategy = 0;
            return singleton;
        }
        if (isStrategy(this.strategy, Strategy.transient, this.state)) {
            return container.invoke(this.state);
        }
        if (isStrategy(this.strategy, Strategy.function, this.state)) {
            return this.state(container, key, this);
        }
        if (isStrategy(this.strategy, Strategy.array, this.state)) {
            return this.state[0].get(container, key);
        }
        if (isStrategy(this.strategy, Strategy.alias, this.state)) {
            return container.get(this.state);
        }
        throw new Error('Invalid strategy: ' + this.strategy);
    };
    StrategyResolver = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Number, Object])
    ], StrategyResolver);
    return StrategyResolver;
}());
var Lazy = (function () {
    function Lazy(key) {
        this._key = key;
    }
    Lazy_1 = Lazy;
    Lazy.prototype.get = function (container) {
        var _this = this;
        return function () { return container.get(_this._key); };
    };
    Lazy.of = function (key) {
        return new Lazy_1(key);
    };
    var Lazy_1;
    Lazy = Lazy_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object])
    ], Lazy);
    return Lazy;
}());
var All = (function () {
    function All(key) {
        this._key = key;
    }
    All_1 = All;
    All.prototype.get = function (container) {
        return container.getAll(this._key);
    };
    All.of = function (key) {
        return new All_1(key);
    };
    var All_1;
    All = All_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object])
    ], All);
    return All;
}());
var Optional = (function () {
    function Optional(key, checkParent) {
        if (checkParent === void 0) { checkParent = true; }
        this._key = key;
        this._checkParent = checkParent;
    }
    Optional_1 = Optional;
    Optional.prototype.get = function (container) {
        if (container.hasResolver(this._key, this._checkParent)) {
            return container.get(this._key);
        }
        return null;
    };
    Optional.of = function (key, checkParent) {
        if (checkParent === void 0) { checkParent = true; }
        return new Optional_1(key, checkParent);
    };
    var Optional_1;
    Optional = Optional_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object, Boolean])
    ], Optional);
    return Optional;
}());
var Parent = (function () {
    function Parent(key) {
        this._key = key;
    }
    Parent_1 = Parent;
    Parent.prototype.get = function (container) {
        return container.parent ? container.parent.get(this._key) : null;
    };
    Parent.of = function (key) {
        return new Parent_1(key);
    };
    var Parent_1;
    Parent = Parent_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object])
    ], Parent);
    return Parent;
}());
var Factory = (function () {
    function Factory(key) {
        this._key = key;
    }
    Factory_1 = Factory;
    Factory.prototype.get = function (container) {
        var fn = this._key;
        var resolver = container.getResolver(fn);
        if (resolver && resolver.strategy === Strategy.function) {
            fn = resolver.state;
        }
        return function () {
            var rest = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                rest[_i] = arguments[_i];
            }
            return container.invoke(fn, rest);
        };
    };
    Factory.of = function (key) {
        return new Factory_1(key);
    };
    var Factory_1;
    Factory = Factory_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object])
    ], Factory);
    return Factory;
}());
var NewInstance = (function () {
    function NewInstance(key) {
        var dynamicDependencies = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            dynamicDependencies[_i - 1] = arguments[_i];
        }
        this.key = key;
        this.asKey = key;
        this.dynamicDependencies = dynamicDependencies;
    }
    NewInstance_1 = NewInstance;
    NewInstance.prototype.get = function (container) {
        var dynamicDependencies = this.dynamicDependencies.length > 0
            ? this.dynamicDependencies.map(function (dependency) {
                return dependency['protocol:aurelia:resolver']
                    ? dependency.get(container)
                    : container.get(dependency);
            })
            : undefined;
        var fn = this.key;
        var resolver = container.getResolver(fn);
        if (resolver && resolver.strategy === 3) {
            fn = resolver.state;
        }
        var instance = container.invoke(fn, dynamicDependencies);
        container.registerInstance(this.asKey, instance);
        return instance;
    };
    NewInstance.prototype.as = function (key) {
        this.asKey = key;
        return this;
    };
    NewInstance.of = function (key) {
        var dynamicDependencies = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            dynamicDependencies[_i - 1] = arguments[_i];
        }
        return new (NewInstance_1.bind.apply(NewInstance_1, [void 0, key].concat(dynamicDependencies)))();
    };
    var NewInstance_1;
    NewInstance = NewInstance_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object, Object])
    ], NewInstance);
    return NewInstance;
}());
function getDecoratorDependencies(target) {
    autoinject(target);
    return target.inject;
}
function lazy(keyValue) {
    return function (target, _key, index) {
        var inject$$1 = getDecoratorDependencies(target);
        inject$$1[index] = Lazy.of(keyValue);
    };
}
function all(keyValue) {
    return function (target, _key, index) {
        var inject$$1 = getDecoratorDependencies(target);
        inject$$1[index] = All.of(keyValue);
    };
}
function optional(checkParentOrTarget) {
    if (checkParentOrTarget === void 0) { checkParentOrTarget = true; }
    var deco = function (checkParent) {
        return function (target, _key, index) {
            var inject$$1 = getDecoratorDependencies(target);
            inject$$1[index] = Optional.of(inject$$1[index], checkParent);
        };
    };
    if (typeof checkParentOrTarget === 'boolean') {
        return deco(checkParentOrTarget);
    }
    return deco(true);
}
function parent(target, _key, index) {
    var inject$$1 = getDecoratorDependencies(target);
    inject$$1[index] = Parent.of(inject$$1[index]);
}
function factory(keyValue) {
    return function (target, _key, index) {
        var inject$$1 = getDecoratorDependencies(target);
        inject$$1[index] = Factory.of(keyValue);
    };
}
function newInstance(asKeyOrTarget) {
    var dynamicDependencies = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        dynamicDependencies[_i - 1] = arguments[_i];
    }
    var deco = function (asKey) {
        return function (target, _key, index) {
            var inject$$1 = getDecoratorDependencies(target);
            inject$$1[index] = NewInstance.of.apply(NewInstance, [inject$$1[index]].concat(dynamicDependencies));
            if (!!asKey) {
                inject$$1[index].as(asKey);
            }
        };
    };
    if (arguments.length >= 1) {
        return deco(asKeyOrTarget);
    }
    return deco();
}

function validateKey(key) {
    if (key === null || key === undefined) {
        throw new Error('key/value cannot be null or undefined. Are you trying to inject/register something that doesn\'t exist with DI?');
    }
}
var _emptyParameters = Object.freeze([]);
aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.registration = 'aurelia:registration';
aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.invoker = 'aurelia:invoker';
var resolverDecorates = resolver.decorates;
var InvocationHandler = (function () {
    function InvocationHandler(fn, invoker, dependencies) {
        this.fn = fn;
        this.invoker = invoker;
        this.dependencies = dependencies;
    }
    InvocationHandler.prototype.invoke = function (container, dynamicDependencies) {
        return dynamicDependencies !== undefined
            ? this.invoker.invokeWithDynamicDependencies(container, this.fn, this.dependencies, dynamicDependencies)
            : this.invoker.invoke(container, this.fn, this.dependencies);
    };
    return InvocationHandler;
}());
function invokeWithDynamicDependencies(container, fn, staticDependencies, dynamicDependencies) {
    var i = staticDependencies.length;
    var args = new Array(i);
    var lookup;
    while (i--) {
        lookup = staticDependencies[i];
        if (lookup === null || lookup === undefined) {
            throw new Error('Constructor Parameter with index ' +
                i +
                ' cannot be null or undefined. Are you trying to inject/register something that doesn\'t exist with DI?');
        }
        else {
            args[i] = container.get(lookup);
        }
    }
    if (dynamicDependencies !== undefined) {
        args = args.concat(dynamicDependencies);
    }
    return Reflect.construct(fn, args);
}
var classInvoker = {
    invoke: function (container, Type, deps) {
        var instances = deps.map(function (dep) { return container.get(dep); });
        return Reflect.construct(Type, instances);
    },
    invokeWithDynamicDependencies: invokeWithDynamicDependencies
};
function getDependencies(f) {
    if (!f.hasOwnProperty('inject')) {
        return [];
    }
    if (typeof f.inject === 'function') {
        return f.inject();
    }
    return f.inject;
}
var Container = (function () {
    function Container(configuration) {
        if (configuration === undefined) {
            configuration = {};
        }
        this._configuration = configuration;
        this._onHandlerCreated = configuration.onHandlerCreated;
        this._handlers =
            configuration.handlers || (configuration.handlers = new Map());
        this._resolvers = new Map();
        this.root = this;
        this.parent = null;
    }
    Container.prototype.makeGlobal = function () {
        Container.instance = this;
        return this;
    };
    Container.prototype.setHandlerCreatedCallback = function (onHandlerCreated) {
        this._onHandlerCreated = onHandlerCreated;
        this._configuration.onHandlerCreated = onHandlerCreated;
    };
    Container.prototype.registerInstance = function (key, instance) {
        return this.registerResolver(key, new StrategyResolver(0, instance === undefined ? key : instance));
    };
    Container.prototype.registerSingleton = function (key, fn) {
        return this.registerResolver(key, new StrategyResolver(1, fn === undefined ? key : fn));
    };
    Container.prototype.registerTransient = function (key, fn) {
        return this.registerResolver(key, new StrategyResolver(2, fn === undefined ? key : fn));
    };
    Container.prototype.registerHandler = function (key, handler) {
        return this.registerResolver(key, new StrategyResolver(3, handler));
    };
    Container.prototype.registerAlias = function (originalKey, aliasKey) {
        return this.registerResolver(aliasKey, new StrategyResolver(5, originalKey));
    };
    Container.prototype.registerResolver = function (key, resolver$$1) {
        validateKey(key);
        var allResolvers = this._resolvers;
        var result = allResolvers.get(key);
        if (result === undefined) {
            allResolvers.set(key, resolver$$1);
        }
        else if (result.strategy === 4) {
            result.state.push(resolver$$1);
        }
        else {
            allResolvers.set(key, new StrategyResolver(4, [result, resolver$$1]));
        }
        return resolver$$1;
    };
    Container.prototype.autoRegister = function (key, fn) {
        fn = fn === undefined ? key : fn;
        if (typeof fn === 'function') {
            var registration = aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.get(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.registration, fn);
            if (registration === undefined) {
                return this.registerResolver(key, new StrategyResolver(1, fn));
            }
            return registration.registerResolver(this, key, fn);
        }
        return this.registerResolver(key, new StrategyResolver(0, fn));
    };
    Container.prototype.autoRegisterAll = function (fns) {
        var i = fns.length;
        while (i--) {
            this.autoRegister(fns[i]);
        }
    };
    Container.prototype.unregister = function (key) {
        this._resolvers.delete(key);
    };
    Container.prototype.hasResolver = function (key, checkParent) {
        if (checkParent === void 0) { checkParent = false; }
        validateKey(key);
        return (this._resolvers.has(key) ||
            (checkParent &&
                this.parent !== null &&
                this.parent.hasResolver(key, checkParent)));
    };
    Container.prototype.getResolver = function (key) {
        return this._resolvers.get(key);
    };
    Container.prototype.get = function (key) {
        validateKey(key);
        if (key === Container) {
            return this;
        }
        if (resolverDecorates(key)) {
            return key.get(this, key);
        }
        var resolver$$1 = this._resolvers.get(key);
        if (resolver$$1 === undefined) {
            if (this.parent === null) {
                return this.autoRegister(key).get(this, key);
            }
            var registration = aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.get(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.registration, key);
            if (registration === undefined) {
                return this.parent._get(key);
            }
            return registration.registerResolver(this, key, key).get(this, key);
        }
        return resolver$$1.get(this, key);
    };
    Container.prototype._get = function (key) {
        var resolver$$1 = this._resolvers.get(key);
        if (resolver$$1 === undefined) {
            if (this.parent === null) {
                return this.autoRegister(key).get(this, key);
            }
            return this.parent._get(key);
        }
        return resolver$$1.get(this, key);
    };
    Container.prototype.getAll = function (key) {
        validateKey(key);
        var resolver$$1 = this._resolvers.get(key);
        if (resolver$$1 === undefined) {
            if (this.parent === null) {
                return _emptyParameters;
            }
            return this.parent.getAll(key);
        }
        if (resolver$$1.strategy === 4) {
            var state = resolver$$1.state;
            var i = state.length;
            var results = new Array(i);
            while (i--) {
                results[i] = state[i].get(this, key);
            }
            return results;
        }
        return [resolver$$1.get(this, key)];
    };
    Container.prototype.createChild = function () {
        var child = new Container(this._configuration);
        child.root = this.root;
        child.parent = this;
        return child;
    };
    Container.prototype.invoke = function (fn, dynamicDependencies) {
        try {
            var handler = this._handlers.get(fn);
            if (handler === undefined) {
                handler = this._createInvocationHandler(fn);
                this._handlers.set(fn, handler);
            }
            return handler.invoke(this, dynamicDependencies);
        }
        catch (e) {
            throw new aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.AggregateError("Error invoking " + fn.name + ". Check the inner error for details.", e, true);
        }
    };
    Container.prototype._createInvocationHandler = function (fn) {
        var dependencies;
        if (fn.inject === undefined) {
            dependencies =
                aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.getOwn(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.paramTypes, fn) || _emptyParameters;
        }
        else {
            dependencies = [];
            var ctor = fn;
            while (typeof ctor === 'function') {
                dependencies.push.apply(dependencies, getDependencies(ctor));
                ctor = Object.getPrototypeOf(ctor);
            }
        }
        var invoker = aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.getOwn(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.invoker, fn) || classInvoker;
        var handler = new InvocationHandler(fn, invoker, dependencies);
        return this._onHandlerCreated !== undefined
            ? this._onHandlerCreated(handler)
            : handler;
    };
    return Container;
}());

function invoker(value) {
    return function (target) {
        aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.define(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.invoker, value, target);
    };
}
function invokeAsFactory(potentialTarget) {
    var deco = function (target) {
        aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.define(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.invoker, FactoryInvoker.instance, target);
    };
    return potentialTarget ? deco(potentialTarget) : deco;
}
var FactoryInvoker = (function () {
    function FactoryInvoker() {
    }
    FactoryInvoker.prototype.invoke = function (container, fn, dependencies) {
        var i = dependencies.length;
        var args = new Array(i);
        while (i--) {
            args[i] = container.get(dependencies[i]);
        }
        return fn.apply(undefined, args);
    };
    FactoryInvoker.prototype.invokeWithDynamicDependencies = function (container, fn, staticDependencies, dynamicDependencies) {
        var i = staticDependencies.length;
        var args = new Array(i);
        while (i--) {
            args[i] = container.get(staticDependencies[i]);
        }
        if (dynamicDependencies !== undefined) {
            args = args.concat(dynamicDependencies);
        }
        return fn.apply(undefined, args);
    };
    return FactoryInvoker;
}());
FactoryInvoker.instance = new FactoryInvoker();

function registration(value) {
    return function (target) {
        aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.define(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.registration, value, target);
    };
}
function transient(key) {
    return registration(new TransientRegistration(key));
}
function singleton(keyOrRegisterInChild, registerInChild) {
    if (registerInChild === void 0) { registerInChild = false; }
    return registration(new SingletonRegistration(keyOrRegisterInChild, registerInChild));
}
var TransientRegistration = (function () {
    function TransientRegistration(key) {
        this._key = key;
    }
    TransientRegistration.prototype.registerResolver = function (container, key, fn) {
        var existingResolver = container.getResolver(this._key || key);
        return existingResolver === undefined
            ? container.registerTransient((this._key || key), fn)
            : existingResolver;
    };
    return TransientRegistration;
}());
var SingletonRegistration = (function () {
    function SingletonRegistration(keyOrRegisterInChild, registerInChild) {
        if (registerInChild === void 0) { registerInChild = false; }
        if (typeof keyOrRegisterInChild === 'boolean') {
            this._registerInChild = keyOrRegisterInChild;
        }
        else {
            this._key = keyOrRegisterInChild;
            this._registerInChild = registerInChild;
        }
    }
    SingletonRegistration.prototype.registerResolver = function (container, key, fn) {
        var targetContainer = this._registerInChild ? container : container.root;
        var existingResolver = targetContainer.getResolver(this._key || key);
        return existingResolver === undefined
            ? targetContainer.registerSingleton(this._key || key, fn)
            : existingResolver;
    };
    return SingletonRegistration;
}());




/***/ }),

/***/ "aurelia-dialog":
/*!***************************************************************************!*\
  !*** ./node_modules/aurelia-dialog/dist/native-modules/aurelia-dialog.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultDialogSettings": function() { return /* binding */ DefaultDialogSettings; },
/* harmony export */   "DialogConfiguration": function() { return /* binding */ DialogConfiguration; },
/* harmony export */   "DialogController": function() { return /* reexport safe */ _chunk_js__WEBPACK_IMPORTED_MODULE_0__.d; },
/* harmony export */   "DialogService": function() { return /* binding */ DialogService; },
/* harmony export */   "Renderer": function() { return /* reexport safe */ _chunk_js__WEBPACK_IMPORTED_MODULE_0__.a; },
/* harmony export */   "configure": function() { return /* binding */ configure; },
/* harmony export */   "createDialogCancelError": function() { return /* reexport safe */ _chunk_js__WEBPACK_IMPORTED_MODULE_0__.b; },
/* harmony export */   "createDialogCloseError": function() { return /* reexport safe */ _chunk_js__WEBPACK_IMPORTED_MODULE_0__.e; }
/* harmony export */ });
/* harmony import */ var _chunk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk.js */ 6885);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ 1015);
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-dependency-injection */ 6158);
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-templating */ 1781);






var DefaultDialogSettings = (function () {
    function DefaultDialogSettings() {
        this.lock = true;
        this.startingZIndex = 1000;
        this.centerHorizontalOnly = false;
        this.rejectOnCancel = false;
        this.ignoreTransitions = false;
        this.restoreFocus = function (lastActiveElement) { return lastActiveElement.focus(); };
    }
    return DefaultDialogSettings;
}());

var RENDERRERS = {
    ux: function () { return __webpack_require__.e(/*! import() */ "vendors.async").then(__webpack_require__.bind(__webpack_require__, /*! ./ux-dialog-renderer.js */ 2440)).then(function (m) { return m.DialogRenderer; }); },
    native: function () { return __webpack_require__.e(/*! import() */ "vendors.async").then(__webpack_require__.bind(__webpack_require__, /*! ./native-dialog-renderer.js */ 1472)).then(function (m) { return m.NativeDialogRenderer; }); }
};
var DEFAULT_RESOURCES = {
    'ux-dialog': function () { return __webpack_require__.e(/*! import() */ "vendors.async").then(__webpack_require__.bind(__webpack_require__, /*! ./ux-dialog.js */ 843)).then(function (m) { return m.UxDialog; }); },
    'ux-dialog-header': function () { return __webpack_require__.e(/*! import() */ "vendors.async").then(__webpack_require__.bind(__webpack_require__, /*! ./ux-dialog-header.js */ 1287)).then(function (m) { return m.UxDialogHeader; }); },
    'ux-dialog-body': function () { return __webpack_require__.e(/*! import() */ "vendors.async").then(__webpack_require__.bind(__webpack_require__, /*! ./ux-dialog-body.js */ 778)).then(function (m) { return m.UxDialogBody; }); },
    'ux-dialog-footer': function () { return __webpack_require__.e(/*! import() */ "vendors.async").then(__webpack_require__.bind(__webpack_require__, /*! ./ux-dialog-footer.js */ 7007)).then(function (m) { return m.UxDialogFooter; }); },
    'attach-focus': function () { return __webpack_require__.e(/*! import() */ "vendors.async").then(__webpack_require__.bind(__webpack_require__, /*! ./attach-focus.js */ 1990)).then(function (m) { return m.AttachFocus; }); }
};
var DEFAULT_CSS_TEXT = function () { return __webpack_require__.e(/*! import() */ "vendors.async").then(__webpack_require__.bind(__webpack_require__, /*! ./default-styles.js */ 2010)).then(function (cssM) { return cssM['default']; }); };
var DialogConfiguration = (function () {
    function DialogConfiguration(frameworkConfiguration, applySetter) {
        var _this = this;
        this.renderer = 'ux';
        this.cssText = DEFAULT_CSS_TEXT;
        this.resources = [];
        this.fwConfig = frameworkConfiguration;
        this.settings = frameworkConfiguration.container.get(DefaultDialogSettings);
        applySetter(function () { return _this._apply(); });
    }
    DialogConfiguration.prototype._apply = function () {
        var _this = this;
        var renderer = this.renderer;
        var cssText = this.cssText;
        return Promise
            .all([
            typeof renderer === 'string' ? RENDERRERS[renderer]() : renderer,
            cssText
                ? typeof cssText === 'string'
                    ? cssText
                    : cssText()
                : ''
        ])
            .then(function (_a) {
            var rendererImpl = _a[0], $cssText = _a[1];
            var fwConfig = _this.fwConfig;
            fwConfig.transient(_chunk_js__WEBPACK_IMPORTED_MODULE_0__.a, rendererImpl);
            if ($cssText) {
                aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.injectStyles($cssText);
            }
            return Promise
                .all(_this.resources.map(function (name) { return DEFAULT_RESOURCES[name](); }))
                .then(function (modules) {
                fwConfig.globalResources(modules);
            });
        });
    };
    DialogConfiguration.prototype.useDefaults = function () {
        return this
            .useRenderer('ux')
            .useCSS(DEFAULT_CSS_TEXT)
            .useStandardResources();
    };
    DialogConfiguration.prototype.useStandardResources = function () {
        Object.keys(DEFAULT_RESOURCES).forEach(this.useResource, this);
        return this;
    };
    DialogConfiguration.prototype.useResource = function (resourceName) {
        this.resources.push(resourceName);
        return this;
    };
    DialogConfiguration.prototype.useRenderer = function (renderer, settings) {
        this.renderer = renderer;
        if (settings) {
            Object.assign(this.settings, settings);
        }
        return this;
    };
    DialogConfiguration.prototype.useCSS = function (cssText) {
        this.cssText = cssText;
        return this;
    };
    return DialogConfiguration;
}());

function whenClosed(onfulfilled, onrejected) {
    return this.then(function (r) { return r.wasCancelled ? r : r.closeResult; }).then(onfulfilled, onrejected);
}
function asDialogOpenPromise(promise) {
    promise.whenClosed = whenClosed;
    return promise;
}
var DialogService = (function () {
    function DialogService(container, compositionEngine, defaultSettings) {
        this.controllers = [];
        this.hasOpenDialog = false;
        this.hasActiveDialog = false;
        this.container = container;
        this.compositionEngine = compositionEngine;
        this.defaultSettings = defaultSettings;
    }
    DialogService.prototype.validateSettings = function (settings) {
        if (!settings.viewModel && !settings.view) {
            throw new Error('Invalid Dialog Settings. You must provide "viewModel", "view" or both.');
        }
    };
    DialogService.prototype.createCompositionContext = function (childContainer, host, settings) {
        return {
            container: childContainer.parent,
            childContainer: childContainer,
            bindingContext: null,
            viewResources: null,
            model: settings.model,
            view: settings.view,
            viewModel: settings.viewModel,
            viewSlot: new aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewSlot(host, true),
            host: host
        };
    };
    DialogService.prototype.ensureViewModel = function (compositionContext) {
        if (typeof compositionContext.viewModel === 'object') {
            return Promise.resolve(compositionContext);
        }
        return this.compositionEngine.ensureViewModel(compositionContext);
    };
    DialogService.prototype._cancelOperation = function (rejectOnCancel) {
        if (!rejectOnCancel) {
            return { wasCancelled: true };
        }
        throw (0,_chunk_js__WEBPACK_IMPORTED_MODULE_0__.b)();
    };
    DialogService.prototype.composeAndShowDialog = function (compositionContext, dialogController) {
        var _this = this;
        if (!compositionContext.viewModel) {
            compositionContext.bindingContext = { controller: dialogController };
        }
        return this.compositionEngine
            .compose(compositionContext)
            .then(function (controller) {
            dialogController.controller = controller;
            return dialogController.renderer
                .showDialog(dialogController)
                .then(function () {
                _this.controllers.push(dialogController);
                _this.hasActiveDialog = _this.hasOpenDialog = !!_this.controllers.length;
            }, function (reason) {
                if (controller.viewModel) {
                    (0,_chunk_js__WEBPACK_IMPORTED_MODULE_0__.c)(controller.viewModel, 'deactivate');
                }
                return Promise.reject(reason);
            });
        });
    };
    DialogService.prototype.createSettings = function (settings) {
        settings = Object.assign({}, this.defaultSettings, settings);
        if (typeof settings.keyboard !== 'boolean' && !settings.keyboard) {
            settings.keyboard = !settings.lock;
        }
        if (typeof settings.overlayDismiss !== 'boolean') {
            settings.overlayDismiss = !settings.lock;
        }
        Object.defineProperty(settings, 'rejectOnCancel', {
            writable: false,
            configurable: true,
            enumerable: true
        });
        this.validateSettings(settings);
        return settings;
    };
    DialogService.prototype.open = function (settings) {
        var _this = this;
        if (settings === void 0) { settings = {}; }
        settings = this.createSettings(settings);
        var childContainer = settings.childContainer || this.container.createChild();
        var resolveCloseResult;
        var rejectCloseResult;
        var closeResult = new Promise(function (resolve, reject) {
            resolveCloseResult = resolve;
            rejectCloseResult = reject;
        });
        var dialogController = childContainer.invoke(_chunk_js__WEBPACK_IMPORTED_MODULE_0__.d, [settings, resolveCloseResult, rejectCloseResult]);
        childContainer.registerInstance(_chunk_js__WEBPACK_IMPORTED_MODULE_0__.d, dialogController);
        closeResult.then(function () {
            removeController(_this, dialogController);
        }, function () {
            removeController(_this, dialogController);
        });
        var compositionContext = this.createCompositionContext(childContainer, dialogController.renderer.getDialogContainer(), dialogController.settings);
        var openResult = this.ensureViewModel(compositionContext).then(function (compositionContext) {
            if (!compositionContext.viewModel) {
                return true;
            }
            return (0,_chunk_js__WEBPACK_IMPORTED_MODULE_0__.c)(compositionContext.viewModel, 'canActivate', dialogController.settings.model);
        }).then(function (canActivate) {
            if (!canActivate) {
                return _this._cancelOperation(dialogController.settings.rejectOnCancel);
            }
            return _this.composeAndShowDialog(compositionContext, dialogController)
                .then(function () { return ({ controller: dialogController, closeResult: closeResult, wasCancelled: false }); });
        });
        return asDialogOpenPromise(openResult);
    };
    DialogService.prototype.closeAll = function () {
        return Promise.all(this.controllers.slice(0).map(function (controller) {
            if (!controller.settings.rejectOnCancel) {
                return controller.cancel().then(function (result) {
                    if (result.wasCancelled) {
                        return controller;
                    }
                    return null;
                });
            }
            return controller.cancel().then(function () { return null; }).catch(function (reason) {
                if (reason.wasCancelled) {
                    return controller;
                }
                throw reason;
            });
        })).then(function (unclosedControllers) { return unclosedControllers.filter(function (unclosed) { return !!unclosed; }); });
    };
    DialogService.inject = [aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__.Container, aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.CompositionEngine, DefaultDialogSettings];
    return DialogService;
}());
function removeController(service, dialogController) {
    var i = service.controllers.indexOf(dialogController);
    if (i !== -1) {
        service.controllers.splice(i, 1);
        service.hasActiveDialog = service.hasOpenDialog = !!service.controllers.length;
    }
}

function configure(frameworkConfig, callback) {
    var applyConfig = null;
    var config = new DialogConfiguration(frameworkConfig, function (apply) { applyConfig = apply; });
    if (typeof callback === 'function') {
        callback(config);
    }
    else {
        config.useDefaults();
    }
    return applyConfig();
}


//# sourceMappingURL=aurelia-dialog.js.map


/***/ }),

/***/ 6885:
/*!******************************************************************!*\
  !*** ./node_modules/aurelia-dialog/dist/native-modules/chunk.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ Renderer; },
/* harmony export */   "b": function() { return /* binding */ createDialogCancelError; },
/* harmony export */   "c": function() { return /* binding */ invokeLifecycle; },
/* harmony export */   "d": function() { return /* binding */ DialogController; },
/* harmony export */   "e": function() { return /* binding */ createDialogCloseError; }
/* harmony export */ });
var Renderer = (function () {
    function Renderer() {
    }
    Renderer.prototype.getDialogContainer = function () {
        throw new Error('DialogRenderer must implement getDialogContainer().');
    };
    Renderer.prototype.showDialog = function (dialogController) {
        throw new Error('DialogRenderer must implement showDialog().');
    };
    Renderer.prototype.hideDialog = function (dialogController) {
        throw new Error('DialogRenderer must implement hideDialog().');
    };
    return Renderer;
}());

function createDialogCancelError(output) {
    var error = new Error('Operation cancelled.');
    error.wasCancelled = true;
    error.output = output;
    return error;
}

function createDialogCloseError(output) {
    var error = new Error();
    error.wasCancelled = false;
    error.output = output;
    return error;
}

function invokeLifecycle(instance, name, model) {
    if (typeof instance[name] === 'function') {
        return new Promise(function (resolve) {
            resolve(instance[name](model));
        }).then(function (result) {
            if (result !== null && result !== undefined) {
                return result;
            }
            return true;
        });
    }
    return Promise.resolve(true);
}

var DialogController = (function () {
    function DialogController(renderer, settings, resolve, reject) {
        this.resolve = resolve;
        this.reject = reject;
        this.settings = settings;
        this.renderer = renderer;
    }
    DialogController.prototype.releaseResources = function (result) {
        var _this = this;
        return invokeLifecycle(this.controller.viewModel || {}, 'deactivate', result)
            .then(function () { return _this.renderer.hideDialog(_this); })
            .then(function () {
            _this.controller.unbind();
        });
    };
    DialogController.prototype.cancelOperation = function () {
        if (!this.settings.rejectOnCancel) {
            return { wasCancelled: true };
        }
        throw createDialogCancelError();
    };
    DialogController.prototype.ok = function (output) {
        return this.close(true, output);
    };
    DialogController.prototype.cancel = function (output) {
        return this.close(false, output);
    };
    DialogController.prototype.error = function (output) {
        var _this = this;
        var closeError = createDialogCloseError(output);
        return this.releaseResources(closeError).then(function () { _this.reject(closeError); });
    };
    DialogController.prototype.close = function (ok, output) {
        var _this = this;
        if (this.closePromise) {
            return this.closePromise;
        }
        var dialogResult = { wasCancelled: !ok, output: output };
        return this.closePromise = invokeLifecycle(this.controller.viewModel || {}, 'canDeactivate', dialogResult)
            .catch(function (reason) {
            _this.closePromise = undefined;
            return Promise.reject(reason);
        }).then(function (canDeactivate) {
            if (!canDeactivate) {
                _this.closePromise = undefined;
                return _this.cancelOperation();
            }
            return _this.releaseResources(dialogResult).then(function () {
                if (!_this.settings.rejectOnCancel || ok) {
                    _this.resolve(dialogResult);
                }
                else {
                    _this.reject(createDialogCancelError(output));
                }
                return { wasCancelled: false };
            }).catch(function (reason) {
                _this.closePromise = undefined;
                return Promise.reject(reason);
            });
        });
    };
    DialogController.inject = [Renderer];
    return DialogController;
}());


//# sourceMappingURL=chunk.js.map


/***/ }),

/***/ "aurelia-event-aggregator":
/*!***********************************************************************************************!*\
  !*** ./node_modules/aurelia-event-aggregator/dist/native-modules/aurelia-event-aggregator.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventAggregator": function() { return /* binding */ EventAggregator; },
/* harmony export */   "configure": function() { return /* binding */ configure; },
/* harmony export */   "includeEventsIn": function() { return /* binding */ includeEventsIn; }
/* harmony export */ });
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-logging */ 8099);




var logger = aurelia_logging__WEBPACK_IMPORTED_MODULE_0__.getLogger('event-aggregator');

var Handler = function () {
  function Handler(messageType, callback) {
    

    this.messageType = messageType;
    this.callback = callback;
  }

  Handler.prototype.handle = function handle(message) {
    if (message instanceof this.messageType) {
      this.callback.call(null, message);
    }
  };

  return Handler;
}();

function invokeCallback(callback, data, event) {
  try {
    callback(data, event);
  } catch (e) {
    logger.error(e);
  }
}

function invokeHandler(handler, data) {
  try {
    handler.handle(data);
  } catch (e) {
    logger.error(e);
  }
}

var EventAggregator = function () {
  function EventAggregator() {
    

    this.eventLookup = {};
    this.messageHandlers = [];
  }

  EventAggregator.prototype.publish = function publish(event, data) {
    var subscribers = void 0;
    var i = void 0;

    if (!event) {
      throw new Error('Event was invalid.');
    }

    if (typeof event === 'string') {
      subscribers = this.eventLookup[event];
      if (subscribers) {
        subscribers = subscribers.slice();
        i = subscribers.length;

        while (i--) {
          invokeCallback(subscribers[i], data, event);
        }
      }
    } else {
      subscribers = this.messageHandlers.slice();
      i = subscribers.length;

      while (i--) {
        invokeHandler(subscribers[i], event);
      }
    }
  };

  EventAggregator.prototype.subscribe = function subscribe(event, callback) {
    var handler = void 0;
    var subscribers = void 0;

    if (!event) {
      throw new Error('Event channel/type was invalid.');
    }

    if (typeof event === 'string') {
      handler = callback;
      subscribers = this.eventLookup[event] || (this.eventLookup[event] = []);
    } else {
      handler = new Handler(event, callback);
      subscribers = this.messageHandlers;
    }

    subscribers.push(handler);

    return {
      dispose: function dispose() {
        var idx = subscribers.indexOf(handler);
        if (idx !== -1) {
          subscribers.splice(idx, 1);
        }
      }
    };
  };

  EventAggregator.prototype.subscribeOnce = function subscribeOnce(event, callback) {
    var sub = this.subscribe(event, function (a, b) {
      sub.dispose();
      return callback(a, b);
    });

    return sub;
  };

  return EventAggregator;
}();

function includeEventsIn(obj) {
  var ea = new EventAggregator();

  obj.subscribeOnce = function (event, callback) {
    return ea.subscribeOnce(event, callback);
  };

  obj.subscribe = function (event, callback) {
    return ea.subscribe(event, callback);
  };

  obj.publish = function (event, data) {
    ea.publish(event, data);
  };

  return ea;
}

function configure(config) {
  config.instance(EventAggregator, includeEventsIn(config.aurelia));
}

/***/ }),

/***/ "aurelia-framework":
/*!*********************************************************************************!*\
  !*** ./node_modules/aurelia-framework/dist/native-modules/aurelia-framework.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessKeyed": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.AccessKeyed; },
/* harmony export */   "AccessMember": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.AccessMember; },
/* harmony export */   "AccessScope": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.AccessScope; },
/* harmony export */   "AccessThis": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.AccessThis; },
/* harmony export */   "AggregateError": function() { return /* reexport safe */ aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.AggregateError; },
/* harmony export */   "All": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.All; },
/* harmony export */   "Animator": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.Animator; },
/* harmony export */   "Assign": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Assign; },
/* harmony export */   "Aurelia": function() { return /* binding */ Aurelia; },
/* harmony export */   "BehaviorInstruction": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BehaviorInstruction; },
/* harmony export */   "BehaviorPropertyObserver": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BehaviorPropertyObserver; },
/* harmony export */   "Binary": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Binary; },
/* harmony export */   "BindableProperty": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BindableProperty; },
/* harmony export */   "Binding": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Binding; },
/* harmony export */   "BindingBehavior": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.BindingBehavior; },
/* harmony export */   "BindingBehaviorResource": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.BindingBehaviorResource; },
/* harmony export */   "BindingEngine": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.BindingEngine; },
/* harmony export */   "BindingExpression": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.BindingExpression; },
/* harmony export */   "BindingLanguage": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BindingLanguage; },
/* harmony export */   "BoundViewFactory": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BoundViewFactory; },
/* harmony export */   "Call": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Call; },
/* harmony export */   "CallExpression": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.CallExpression; },
/* harmony export */   "CallFunction": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.CallFunction; },
/* harmony export */   "CallMember": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.CallMember; },
/* harmony export */   "CallScope": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.CallScope; },
/* harmony export */   "CheckedObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.CheckedObserver; },
/* harmony export */   "ClassObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ClassObserver; },
/* harmony export */   "CollectionLengthObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.CollectionLengthObserver; },
/* harmony export */   "CompositionEngine": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.CompositionEngine; },
/* harmony export */   "CompositionTransaction": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.CompositionTransaction; },
/* harmony export */   "CompositionTransactionNotifier": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.CompositionTransactionNotifier; },
/* harmony export */   "CompositionTransactionOwnershipToken": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.CompositionTransactionOwnershipToken; },
/* harmony export */   "ComputedExpression": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ComputedExpression; },
/* harmony export */   "Conditional": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Conditional; },
/* harmony export */   "Container": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.Container; },
/* harmony export */   "Controller": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.Controller; },
/* harmony export */   "ConventionalViewStrategy": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ConventionalViewStrategy; },
/* harmony export */   "DOM": function() { return /* reexport safe */ aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.DOM; },
/* harmony export */   "DataAttributeObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.DataAttributeObserver; },
/* harmony export */   "DirtyCheckProperty": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.DirtyCheckProperty; },
/* harmony export */   "DirtyChecker": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.DirtyChecker; },
/* harmony export */   "ElementConfigResource": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ElementConfigResource; },
/* harmony export */   "ElementEvents": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ElementEvents; },
/* harmony export */   "EventManager": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.EventManager; },
/* harmony export */   "EventSubscriber": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.EventSubscriber; },
/* harmony export */   "Expression": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Expression; },
/* harmony export */   "ExpressionCloner": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ExpressionCloner; },
/* harmony export */   "ExpressionObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ExpressionObserver; },
/* harmony export */   "FEATURE": function() { return /* reexport safe */ aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.FEATURE; },
/* harmony export */   "Factory": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.Factory; },
/* harmony export */   "FactoryInvoker": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.FactoryInvoker; },
/* harmony export */   "FrameworkConfiguration": function() { return /* binding */ FrameworkConfiguration; },
/* harmony export */   "HtmlBehaviorResource": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.HtmlBehaviorResource; },
/* harmony export */   "InlineViewStrategy": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.InlineViewStrategy; },
/* harmony export */   "InvocationHandler": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.InvocationHandler; },
/* harmony export */   "Lazy": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.Lazy; },
/* harmony export */   "Listener": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Listener; },
/* harmony export */   "ListenerExpression": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ListenerExpression; },
/* harmony export */   "LiteralArray": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.LiteralArray; },
/* harmony export */   "LiteralObject": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.LiteralObject; },
/* harmony export */   "LiteralPrimitive": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.LiteralPrimitive; },
/* harmony export */   "LiteralString": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.LiteralString; },
/* harmony export */   "LiteralTemplate": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.LiteralTemplate; },
/* harmony export */   "Loader": function() { return /* reexport safe */ aurelia_loader__WEBPACK_IMPORTED_MODULE_4__.Loader; },
/* harmony export */   "LogManager": function() { return /* reexport module object */ aurelia_logging__WEBPACK_IMPORTED_MODULE_8__; },
/* harmony export */   "ModifyCollectionObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ModifyCollectionObserver; },
/* harmony export */   "ModuleAnalyzer": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ModuleAnalyzer; },
/* harmony export */   "NameExpression": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.NameExpression; },
/* harmony export */   "NewInstance": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.NewInstance; },
/* harmony export */   "NoViewStrategy": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.NoViewStrategy; },
/* harmony export */   "ObjectObservationAdapter": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ObjectObservationAdapter; },
/* harmony export */   "ObserverLocator": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ObserverLocator; },
/* harmony export */   "Optional": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.Optional; },
/* harmony export */   "Origin": function() { return /* reexport safe */ aurelia_metadata__WEBPACK_IMPORTED_MODULE_2__.Origin; },
/* harmony export */   "PLATFORM": function() { return /* reexport safe */ aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.PLATFORM; },
/* harmony export */   "Parent": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.Parent; },
/* harmony export */   "Parser": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Parser; },
/* harmony export */   "ParserImplementation": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ParserImplementation; },
/* harmony export */   "PassThroughSlot": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.PassThroughSlot; },
/* harmony export */   "PrimitiveObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.PrimitiveObserver; },
/* harmony export */   "RelativeViewStrategy": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.RelativeViewStrategy; },
/* harmony export */   "ResourceDescription": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ResourceDescription; },
/* harmony export */   "ResourceLoadContext": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ResourceLoadContext; },
/* harmony export */   "ResourceModule": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ResourceModule; },
/* harmony export */   "SVGAnalyzer": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.SVGAnalyzer; },
/* harmony export */   "SelectValueObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.SelectValueObserver; },
/* harmony export */   "SetterObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.SetterObserver; },
/* harmony export */   "ShadowDOM": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ShadowDOM; },
/* harmony export */   "ShadowSlot": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ShadowSlot; },
/* harmony export */   "SingletonRegistration": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.SingletonRegistration; },
/* harmony export */   "SlotCustomAttribute": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.SlotCustomAttribute; },
/* harmony export */   "StaticViewStrategy": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.StaticViewStrategy; },
/* harmony export */   "Strategy": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.Strategy; },
/* harmony export */   "StrategyResolver": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.StrategyResolver; },
/* harmony export */   "StyleObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.StyleObserver; },
/* harmony export */   "SwapStrategies": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.SwapStrategies; },
/* harmony export */   "TargetInstruction": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.TargetInstruction; },
/* harmony export */   "TaskQueue": function() { return /* reexport safe */ aurelia_task_queue__WEBPACK_IMPORTED_MODULE_5__.TaskQueue; },
/* harmony export */   "TemplateDependency": function() { return /* reexport safe */ aurelia_loader__WEBPACK_IMPORTED_MODULE_4__.TemplateDependency; },
/* harmony export */   "TemplateRegistryEntry": function() { return /* reexport safe */ aurelia_loader__WEBPACK_IMPORTED_MODULE_4__.TemplateRegistryEntry; },
/* harmony export */   "TemplateRegistryViewStrategy": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.TemplateRegistryViewStrategy; },
/* harmony export */   "TemplatingEngine": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.TemplatingEngine; },
/* harmony export */   "TransientRegistration": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.TransientRegistration; },
/* harmony export */   "Unary": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Unary; },
/* harmony export */   "Unparser": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Unparser; },
/* harmony export */   "ValueAttributeObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ValueAttributeObserver; },
/* harmony export */   "ValueConverter": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ValueConverter; },
/* harmony export */   "ValueConverterResource": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ValueConverterResource; },
/* harmony export */   "View": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.View; },
/* harmony export */   "ViewCompileInstruction": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewCompileInstruction; },
/* harmony export */   "ViewCompiler": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewCompiler; },
/* harmony export */   "ViewEngine": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewEngine; },
/* harmony export */   "ViewEngineHooksResource": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewEngineHooksResource; },
/* harmony export */   "ViewFactory": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewFactory; },
/* harmony export */   "ViewLocator": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewLocator; },
/* harmony export */   "ViewResources": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewResources; },
/* harmony export */   "ViewSlot": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewSlot; },
/* harmony export */   "XLinkAttributeObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.XLinkAttributeObserver; },
/* harmony export */   "_emptyParameters": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__._emptyParameters; },
/* harmony export */   "_hyphenate": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__._hyphenate; },
/* harmony export */   "_isAllWhitespace": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__._isAllWhitespace; },
/* harmony export */   "all": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.all; },
/* harmony export */   "animationEvent": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.animationEvent; },
/* harmony export */   "autoinject": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.autoinject; },
/* harmony export */   "behavior": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.behavior; },
/* harmony export */   "bindable": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.bindable; },
/* harmony export */   "bindingBehavior": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.bindingBehavior; },
/* harmony export */   "bindingMode": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.bindingMode; },
/* harmony export */   "buildQueryString": function() { return /* reexport safe */ aurelia_path__WEBPACK_IMPORTED_MODULE_6__.buildQueryString; },
/* harmony export */   "calcSplices": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.calcSplices; },
/* harmony export */   "camelCase": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.camelCase; },
/* harmony export */   "child": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.child; },
/* harmony export */   "children": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.children; },
/* harmony export */   "cloneExpression": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.cloneExpression; },
/* harmony export */   "computedFrom": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.computedFrom; },
/* harmony export */   "connectBindingToSignal": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.connectBindingToSignal; },
/* harmony export */   "connectable": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.connectable; },
/* harmony export */   "containerless": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.containerless; },
/* harmony export */   "createComputedObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.createComputedObserver; },
/* harmony export */   "createOverrideContext": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.createOverrideContext; },
/* harmony export */   "createScopeForTest": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.createScopeForTest; },
/* harmony export */   "customAttribute": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.customAttribute; },
/* harmony export */   "customElement": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.customElement; },
/* harmony export */   "dataAttributeAccessor": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.dataAttributeAccessor; },
/* harmony export */   "declarePropertyDependencies": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.declarePropertyDependencies; },
/* harmony export */   "decorators": function() { return /* reexport safe */ aurelia_metadata__WEBPACK_IMPORTED_MODULE_2__.decorators; },
/* harmony export */   "delegationStrategy": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.delegationStrategy; },
/* harmony export */   "deprecated": function() { return /* reexport safe */ aurelia_metadata__WEBPACK_IMPORTED_MODULE_2__.deprecated; },
/* harmony export */   "disableConnectQueue": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.disableConnectQueue; },
/* harmony export */   "dynamicOptions": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.dynamicOptions; },
/* harmony export */   "elementConfig": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.elementConfig; },
/* harmony export */   "elements": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.elements; },
/* harmony export */   "enableConnectQueue": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.enableConnectQueue; },
/* harmony export */   "enqueueBindingConnect": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.enqueueBindingConnect; },
/* harmony export */   "factory": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.factory; },
/* harmony export */   "getArrayObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.getArrayObserver; },
/* harmony export */   "getChangeRecords": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.getChangeRecords; },
/* harmony export */   "getConnectQueueSize": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.getConnectQueueSize; },
/* harmony export */   "getContextFor": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.getContextFor; },
/* harmony export */   "getDecoratorDependencies": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.getDecoratorDependencies; },
/* harmony export */   "getMapObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.getMapObserver; },
/* harmony export */   "getSetObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.getSetObserver; },
/* harmony export */   "hasDeclaredDependencies": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.hasDeclaredDependencies; },
/* harmony export */   "initializePAL": function() { return /* reexport safe */ aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.initializePAL; },
/* harmony export */   "inject": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.inject; },
/* harmony export */   "inlineView": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.inlineView; },
/* harmony export */   "invokeAsFactory": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.invokeAsFactory; },
/* harmony export */   "invoker": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.invoker; },
/* harmony export */   "isInitialized": function() { return /* reexport safe */ aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.isInitialized; },
/* harmony export */   "join": function() { return /* reexport safe */ aurelia_path__WEBPACK_IMPORTED_MODULE_6__.join; },
/* harmony export */   "lazy": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.lazy; },
/* harmony export */   "mergeSplice": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.mergeSplice; },
/* harmony export */   "metadata": function() { return /* reexport safe */ aurelia_metadata__WEBPACK_IMPORTED_MODULE_2__.metadata; },
/* harmony export */   "mixin": function() { return /* reexport safe */ aurelia_metadata__WEBPACK_IMPORTED_MODULE_2__.mixin; },
/* harmony export */   "newInstance": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.newInstance; },
/* harmony export */   "noView": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.noView; },
/* harmony export */   "observable": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.observable; },
/* harmony export */   "optional": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.optional; },
/* harmony export */   "parent": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.parent; },
/* harmony export */   "parseQueryString": function() { return /* reexport safe */ aurelia_path__WEBPACK_IMPORTED_MODULE_6__.parseQueryString; },
/* harmony export */   "presentationAttributes": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.presentationAttributes; },
/* harmony export */   "presentationElements": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.presentationElements; },
/* harmony export */   "processAttributes": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.processAttributes; },
/* harmony export */   "processContent": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.processContent; },
/* harmony export */   "projectArraySplices": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.projectArraySplices; },
/* harmony export */   "propertyAccessor": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.propertyAccessor; },
/* harmony export */   "protocol": function() { return /* reexport safe */ aurelia_metadata__WEBPACK_IMPORTED_MODULE_2__.protocol; },
/* harmony export */   "registration": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.registration; },
/* harmony export */   "relativeToFile": function() { return /* reexport safe */ aurelia_path__WEBPACK_IMPORTED_MODULE_6__.relativeToFile; },
/* harmony export */   "reset": function() { return /* reexport safe */ aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.reset; },
/* harmony export */   "resolver": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.resolver; },
/* harmony export */   "resource": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.resource; },
/* harmony export */   "setConnectQueueThreshold": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.setConnectQueueThreshold; },
/* harmony export */   "signalBindings": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.signalBindings; },
/* harmony export */   "singleton": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.singleton; },
/* harmony export */   "sourceContext": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.sourceContext; },
/* harmony export */   "subscriberCollection": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.subscriberCollection; },
/* harmony export */   "targetContext": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.targetContext; },
/* harmony export */   "templateController": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.templateController; },
/* harmony export */   "transient": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.transient; },
/* harmony export */   "useShadowDOM": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.useShadowDOM; },
/* harmony export */   "useView": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.useView; },
/* harmony export */   "useViewStrategy": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.useViewStrategy; },
/* harmony export */   "validateBehaviorName": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.validateBehaviorName; },
/* harmony export */   "valueConverter": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.valueConverter; },
/* harmony export */   "view": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.view; },
/* harmony export */   "viewEngineHooks": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.viewEngineHooks; },
/* harmony export */   "viewResources": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.viewResources; },
/* harmony export */   "viewStrategy": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.viewStrategy; }
/* harmony export */ });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ 6158);
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-binding */ 6778);
/* harmony import */ var aurelia_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-metadata */ 1383);
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-templating */ 1781);
/* harmony import */ var aurelia_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-loader */ 209);
/* harmony import */ var aurelia_task_queue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aurelia-task-queue */ 8318);
/* harmony import */ var aurelia_path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aurelia-path */ 8627);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aurelia-pal */ 1015);
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! aurelia-logging */ 8099);
















var logger = aurelia_logging__WEBPACK_IMPORTED_MODULE_8__.getLogger('aurelia');
var extPattern = /\.[^/.]+$/;
function runTasks(config, tasks) {
    var current;
    var next = function () {
        current = tasks.shift();
        if (current) {
            return Promise.resolve(current(config)).then(next);
        }
        return Promise.resolve();
    };
    return next();
}
function loadPlugin(fwConfig, loader, info) {
    logger.debug("Loading plugin ".concat(info.moduleId, "."));
    if (typeof info.moduleId === 'string') {
        fwConfig.resourcesRelativeTo = info.resourcesRelativeTo;
        var id = info.moduleId;
        if (info.resourcesRelativeTo.length > 1) {
            return loader.normalize(info.moduleId, info.resourcesRelativeTo[1])
                .then(function (normalizedId) { return _loadPlugin(normalizedId); });
        }
        return _loadPlugin(id);
    }
    else if (typeof info.configure === 'function') {
        if (fwConfig.configuredPlugins.indexOf(info.configure) !== -1) {
            return Promise.resolve();
        }
        fwConfig.configuredPlugins.push(info.configure);
        return Promise.resolve(info.configure.call(null, fwConfig, info.config || {}));
    }
    throw new Error(invalidConfigMsg(info.moduleId || info.configure, 'plugin'));
    function _loadPlugin(moduleId) {
        return loader.loadModule(moduleId).then(function (m) {
            if ('configure' in m) {
                if (fwConfig.configuredPlugins.indexOf(m.configure) !== -1) {
                    return Promise.resolve();
                }
                return Promise.resolve(m.configure(fwConfig, info.config || {})).then(function () {
                    fwConfig.configuredPlugins.push(m.configure);
                    fwConfig.resourcesRelativeTo = null;
                    logger.debug("Configured plugin ".concat(info.moduleId, "."));
                });
            }
            fwConfig.resourcesRelativeTo = null;
            logger.debug("Loaded plugin ".concat(info.moduleId, "."));
        });
    }
}
function loadResources(aurelia, resourcesToLoad, appResources) {
    if (Object.keys(resourcesToLoad).length === 0) {
        return Promise.resolve();
    }
    var viewEngine = aurelia.container.get(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewEngine);
    return Promise.all(Object.keys(resourcesToLoad).map(function (n) { return _normalize(resourcesToLoad[n]); }))
        .then(function (loads) {
        var names = [];
        var importIds = [];
        loads.forEach(function (l) {
            names.push(undefined);
            importIds.push(l.importId);
        });
        return viewEngine.importViewResources(importIds, names, appResources);
    });
    function _normalize(load) {
        var moduleId = load.moduleId;
        var ext = getExt(moduleId);
        if (isOtherResource(moduleId)) {
            moduleId = removeExt(moduleId);
        }
        return aurelia.loader.normalize(moduleId, load.relativeTo)
            .then(function (normalized) {
            return {
                name: load.moduleId,
                importId: isOtherResource(load.moduleId) ? addOriginalExt(normalized, ext) : normalized
            };
        });
    }
    function isOtherResource(name) {
        var ext = getExt(name);
        if (!ext)
            return false;
        if (ext === '')
            return false;
        if (ext === '.js' || ext === '.ts')
            return false;
        return true;
    }
    function removeExt(name) {
        return name.replace(extPattern, '');
    }
    function addOriginalExt(normalized, ext) {
        return removeExt(normalized) + '.' + ext;
    }
}
function getExt(name) {
    var match = name.match(extPattern);
    if (match && match.length > 0) {
        return (match[0].split('.'))[1];
    }
}
function loadBehaviors(config) {
    return Promise.all(config.behaviorsToLoad.map(function (m) { return m.load(config.container, m.target); })).then(function () {
        config.behaviorsToLoad = null;
    });
}
function assertProcessed(plugins) {
    if (plugins.processed) {
        throw new Error('This config instance has already been applied. To load more plugins or global resources, create a new FrameworkConfiguration instance.');
    }
}
function invalidConfigMsg(cfg, type) {
    return "Invalid ".concat(type, " [").concat(cfg, "], ").concat(type, " must be specified as functions or relative module IDs.");
}
var FrameworkConfiguration = (function () {
    function FrameworkConfiguration(aurelia) {
        var _this = this;
        this.aurelia = aurelia;
        this.container = aurelia.container;
        this.info = [];
        this.processed = false;
        this.preTasks = [];
        this.postTasks = [];
        this.behaviorsToLoad = [];
        this.configuredPlugins = [];
        this.resourcesToLoad = {};
        this.preTask(function () { return aurelia.loader.normalize('aurelia-bootstrapper', undefined)
            .then(function (name) { return _this.bootstrapperName = name; }); });
        this.postTask(function () { return loadResources(aurelia, _this.resourcesToLoad, aurelia.resources); });
    }
    FrameworkConfiguration.prototype.instance = function (type, instance) {
        this.container.registerInstance(type, instance);
        return this;
    };
    FrameworkConfiguration.prototype.singleton = function (type, implementation) {
        this.container.registerSingleton(type, implementation);
        return this;
    };
    FrameworkConfiguration.prototype.transient = function (type, implementation) {
        this.container.registerTransient(type, implementation);
        return this;
    };
    FrameworkConfiguration.prototype.preTask = function (task) {
        assertProcessed(this);
        this.preTasks.push(task);
        return this;
    };
    FrameworkConfiguration.prototype.postTask = function (task) {
        assertProcessed(this);
        this.postTasks.push(task);
        return this;
    };
    FrameworkConfiguration.prototype.feature = function (plugin, config) {
        if (config === void 0) { config = {}; }
        switch (typeof plugin) {
            case 'string':
                var hasIndex = /\/index$/i.test(plugin);
                var moduleId = hasIndex || getExt(plugin) ? plugin : plugin + '/index';
                var root = hasIndex ? plugin.slice(0, -6) : plugin;
                this.info.push({ moduleId: moduleId, resourcesRelativeTo: [root, ''], config: config });
                break;
            case 'function':
                this.info.push({ configure: plugin, config: config || {} });
                break;
            default:
                throw new Error(invalidConfigMsg(plugin, 'feature'));
        }
        return this;
    };
    FrameworkConfiguration.prototype.globalResources = function (resources) {
        var _this = this;
        assertProcessed(this);
        var toAdd = Array.isArray(resources) ? resources : arguments;
        var resource;
        var resourcesRelativeTo = this.resourcesRelativeTo || ['', ''];
        for (var i = 0, ii = toAdd.length; i < ii; ++i) {
            resource = toAdd[i];
            switch (typeof resource) {
                case 'string':
                    var parent_1 = resourcesRelativeTo[0];
                    var grandParent = resourcesRelativeTo[1];
                    var name_1 = resource;
                    if ((resource.startsWith('./') || resource.startsWith('../')) && parent_1 !== '') {
                        name_1 = (0,aurelia_path__WEBPACK_IMPORTED_MODULE_6__.join)(parent_1, resource);
                    }
                    this.resourcesToLoad[name_1] = { moduleId: name_1, relativeTo: grandParent };
                    break;
                case 'function':
                    var meta = this.aurelia.resources.autoRegister(this.container, resource);
                    if (meta instanceof aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.HtmlBehaviorResource && meta.elementName !== null) {
                        if (this.behaviorsToLoad.push(meta) === 1) {
                            this.postTask(function () { return loadBehaviors(_this); });
                        }
                    }
                    break;
                default:
                    throw new Error(invalidConfigMsg(resource, 'resource'));
            }
        }
        return this;
    };
    FrameworkConfiguration.prototype.globalName = function (resourcePath, newName) {
        assertProcessed(this);
        this.resourcesToLoad[resourcePath] = { moduleId: newName, relativeTo: '' };
        return this;
    };
    FrameworkConfiguration.prototype.plugin = function (plugin, pluginConfig) {
        assertProcessed(this);
        var info;
        switch (typeof plugin) {
            case 'string':
                info = { moduleId: plugin, resourcesRelativeTo: [plugin, ''], config: pluginConfig || {} };
                break;
            case 'function':
                info = { configure: plugin, config: pluginConfig || {} };
                break;
            default:
                throw new Error(invalidConfigMsg(plugin, 'plugin'));
        }
        this.info.push(info);
        return this;
    };
    FrameworkConfiguration.prototype._addNormalizedPlugin = function (name, config) {
        var _this = this;
        var plugin = { moduleId: name, resourcesRelativeTo: [name, ''], config: config || {} };
        this.info.push(plugin);
        this.preTask(function () {
            var relativeTo = [name, _this.bootstrapperName];
            plugin.moduleId = name;
            plugin.resourcesRelativeTo = relativeTo;
            return Promise.resolve();
        });
        return this;
    };
    FrameworkConfiguration.prototype.defaultBindingLanguage = function () {
        return this._addNormalizedPlugin('aurelia-templating-binding');
    };
    FrameworkConfiguration.prototype.router = function () {
        return this._addNormalizedPlugin('aurelia-templating-router');
    };
    FrameworkConfiguration.prototype.history = function () {
        return this._addNormalizedPlugin('aurelia-history-browser');
    };
    FrameworkConfiguration.prototype.defaultResources = function () {
        return this._addNormalizedPlugin('aurelia-templating-resources');
    };
    FrameworkConfiguration.prototype.eventAggregator = function () {
        return this._addNormalizedPlugin('aurelia-event-aggregator');
    };
    FrameworkConfiguration.prototype.basicConfiguration = function () {
        return this.defaultBindingLanguage().defaultResources().eventAggregator();
    };
    FrameworkConfiguration.prototype.standardConfiguration = function () {
        return this.basicConfiguration().history().router();
    };
    FrameworkConfiguration.prototype.developmentLogging = function (level) {
        var _this = this;
        var logLevel = level ? aurelia_logging__WEBPACK_IMPORTED_MODULE_8__.logLevel[level] : undefined;
        if (logLevel === undefined) {
            logLevel = aurelia_logging__WEBPACK_IMPORTED_MODULE_8__.logLevel.debug;
        }
        this.preTask(function () {
            return _this.aurelia.loader.normalize('aurelia-logging-console', _this.bootstrapperName).then(function (name) {
                return _this.aurelia.loader.loadModule(name).then(function (m) {
                    aurelia_logging__WEBPACK_IMPORTED_MODULE_8__.addAppender(new m.ConsoleAppender());
                    aurelia_logging__WEBPACK_IMPORTED_MODULE_8__.setLevel(logLevel);
                });
            });
        });
        return this;
    };
    FrameworkConfiguration.prototype.apply = function () {
        var _this = this;
        if (this.processed) {
            return Promise.resolve();
        }
        return runTasks(this, this.preTasks).then(function () {
            var loader = _this.aurelia.loader;
            var info = _this.info;
            var current;
            var next = function () {
                current = info.shift();
                if (current) {
                    return loadPlugin(_this, loader, current).then(next);
                }
                _this.processed = true;
                _this.configuredPlugins = null;
                return Promise.resolve();
            };
            return next().then(function () { return runTasks(_this, _this.postTasks); });
        });
    };
    return FrameworkConfiguration;
}());

function preventActionlessFormSubmit() {
    aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.DOM.addEventListener('submit', function (evt) {
        var target = evt.target;
        var action = target.action;
        if (target.tagName.toLowerCase() === 'form' && !action) {
            evt.preventDefault();
        }
    }, false);
}
var Aurelia = (function () {
    function Aurelia(loader, container, resources) {
        this.loader = loader || new aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.PLATFORM.Loader();
        this.container = container || (new aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.Container()).makeGlobal();
        this.resources = resources || new aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewResources();
        this.use = new FrameworkConfiguration(this);
        this.logger = aurelia_logging__WEBPACK_IMPORTED_MODULE_8__.getLogger('aurelia');
        this.hostConfigured = false;
        this.host = null;
        this.use.instance(Aurelia, this);
        this.use.instance(aurelia_loader__WEBPACK_IMPORTED_MODULE_4__.Loader, this.loader);
        this.use.instance(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewResources, this.resources);
    }
    Aurelia.prototype.start = function () {
        var _this = this;
        if (this._started) {
            return this._started;
        }
        this.logger.info('Aurelia Starting');
        return this._started = this.use.apply().then(function () {
            preventActionlessFormSubmit();
            if (!_this.container.hasResolver(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BindingLanguage)) {
                var message = 'You must configure Aurelia with a BindingLanguage implementation.';
                _this.logger.error(message);
                throw new Error(message);
            }
            _this.logger.info('Aurelia Started');
            var evt = aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.DOM.createCustomEvent('aurelia-started', { bubbles: true, cancelable: true });
            aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.DOM.dispatchEvent(evt);
            return _this;
        });
    };
    Aurelia.prototype.enhance = function (bindingContext, applicationHost) {
        var _this = this;
        if (bindingContext === void 0) { bindingContext = {}; }
        if (applicationHost === void 0) { applicationHost = null; }
        this._configureHost(applicationHost || aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.DOM.querySelectorAll('body')[0]);
        return new Promise(function (resolve) {
            var engine = _this.container.get(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.TemplatingEngine);
            _this.root = engine.enhance({ container: _this.container, element: _this.host, resources: _this.resources, bindingContext: bindingContext });
            _this.root.attached();
            _this._onAureliaComposed();
            resolve(_this);
        });
    };
    Aurelia.prototype.setRoot = function (root, applicationHost) {
        var _this = this;
        if (root === void 0) { root = null; }
        if (applicationHost === void 0) { applicationHost = null; }
        var instruction = {};
        if (this.root && this.root.viewModel && this.root.viewModel.router) {
            this.root.viewModel.router.deactivate();
            this.root.viewModel.router.reset();
        }
        this._configureHost(applicationHost);
        var engine = this.container.get(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.TemplatingEngine);
        var transaction = this.container.get(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.CompositionTransaction);
        delete transaction.initialComposition;
        if (!root) {
            if (this.configModuleId) {
                root = (0,aurelia_path__WEBPACK_IMPORTED_MODULE_6__.relativeToFile)('./app', this.configModuleId);
            }
            else {
                root = 'app';
            }
        }
        instruction.viewModel = root;
        instruction.container = instruction.childContainer = this.container;
        instruction.viewSlot = this.hostSlot;
        instruction.host = this.host;
        return engine.compose(instruction).then(function (r) {
            _this.root = r;
            instruction.viewSlot.attached();
            _this._onAureliaComposed();
            return _this;
        });
    };
    Aurelia.prototype._configureHost = function (applicationHost) {
        if (this.hostConfigured) {
            return;
        }
        applicationHost = applicationHost || this.host;
        if (!applicationHost || typeof applicationHost === 'string') {
            this.host = aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.DOM.getElementById(applicationHost || 'applicationHost');
        }
        else {
            this.host = applicationHost;
        }
        if (!this.host) {
            throw new Error('No applicationHost was specified.');
        }
        this.hostConfigured = true;
        this.host.aurelia = this;
        this.hostSlot = new aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewSlot(this.host, true);
        this.hostSlot.transformChildNodesIntoView();
        this.container.registerInstance(aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.DOM.boundary, this.host);
    };
    Aurelia.prototype._onAureliaComposed = function () {
        var evt = aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.DOM.createCustomEvent('aurelia-composed', { bubbles: true, cancelable: true });
        setTimeout(function () { return aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.DOM.dispatchEvent(evt); }, 1);
    };
    return Aurelia;
}());


//# sourceMappingURL=aurelia-framework.js.map


/***/ }),

/***/ "aurelia-history-browser":
/*!*********************************************************************************************!*\
  !*** ./node_modules/aurelia-history-browser/dist/native-modules/aurelia-history-browser.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserHistory": function() { return /* binding */ BrowserHistory; },
/* harmony export */   "DefaultLinkHandler": function() { return /* binding */ DefaultLinkHandler; },
/* harmony export */   "LinkHandler": function() { return /* binding */ LinkHandler; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-history */ 1149);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ 1015);



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

var LinkHandler = (function () {
    function LinkHandler() {
    }
    LinkHandler.prototype.activate = function (history) { };
    LinkHandler.prototype.deactivate = function () { };
    return LinkHandler;
}());
var DefaultLinkHandler = (function (_super) {
    __extends(DefaultLinkHandler, _super);
    function DefaultLinkHandler() {
        var _this = _super.call(this) || this;
        _this.handler = function (e) {
            var _a = DefaultLinkHandler.getEventInfo(e), shouldHandleEvent = _a.shouldHandleEvent, href = _a.href;
            if (shouldHandleEvent) {
                e.preventDefault();
                _this.history.navigate(href);
            }
        };
        return _this;
    }
    DefaultLinkHandler.prototype.activate = function (history) {
        if (history._hasPushState) {
            this.history = history;
            aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.addEventListener('click', this.handler, true);
        }
    };
    DefaultLinkHandler.prototype.deactivate = function () {
        aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.removeEventListener('click', this.handler, true);
    };
    DefaultLinkHandler.getEventInfo = function (event) {
        var $event = event;
        var info = {
            shouldHandleEvent: false,
            href: null,
            anchor: null
        };
        var target = DefaultLinkHandler.findClosestAnchor($event.target);
        if (!target || !DefaultLinkHandler.targetIsThisWindow(target)) {
            return info;
        }
        if (hasAttribute(target, 'download')
            || hasAttribute(target, 'router-ignore')
            || hasAttribute(target, 'data-router-ignore')) {
            return info;
        }
        if ($event.altKey || $event.ctrlKey || $event.metaKey || $event.shiftKey) {
            return info;
        }
        var href = target.getAttribute('href');
        info.anchor = target;
        info.href = href;
        var leftButtonClicked = $event.which === 1;
        var isRelative = href && !(href.charAt(0) === '#' || (/^[a-z]+:/i).test(href));
        info.shouldHandleEvent = leftButtonClicked && isRelative;
        return info;
    };
    DefaultLinkHandler.findClosestAnchor = function (el) {
        while (el) {
            if (el.tagName === 'A') {
                return el;
            }
            el = el.parentNode;
        }
    };
    DefaultLinkHandler.targetIsThisWindow = function (target) {
        var targetWindow = target.getAttribute('target');
        var win = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.global;
        return !targetWindow ||
            targetWindow === win.name ||
            targetWindow === '_self';
    };
    return DefaultLinkHandler;
}(LinkHandler));
var hasAttribute = function (el, attr) { return el.hasAttribute(attr); };

var BrowserHistory = (function (_super) {
    __extends(BrowserHistory, _super);
    function BrowserHistory(linkHandler) {
        var _this = _super.call(this) || this;
        _this._isActive = false;
        _this._checkUrlCallback = _this._checkUrl.bind(_this);
        _this.location = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.location;
        _this.history = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.history;
        _this.linkHandler = linkHandler;
        return _this;
    }
    BrowserHistory.prototype.activate = function (options) {
        if (this._isActive) {
            throw new Error('History has already been activated.');
        }
        var $history = this.history;
        var wantsPushState = !!options.pushState;
        this._isActive = true;
        var normalizedOptions = this.options = Object.assign({}, { root: '/' }, this.options, options);
        var rootUrl = this.root = ('/' + normalizedOptions.root + '/').replace(rootStripper, '/');
        var wantsHashChange = this._wantsHashChange = normalizedOptions.hashChange !== false;
        var hasPushState = this._hasPushState = !!(normalizedOptions.pushState && $history && $history.pushState);
        var eventName;
        if (hasPushState) {
            eventName = 'popstate';
        }
        else if (wantsHashChange) {
            eventName = 'hashchange';
        }
        aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.addEventListener(eventName, this._checkUrlCallback);
        if (wantsHashChange && wantsPushState) {
            var $location = this.location;
            var atRoot = $location.pathname.replace(/[^\/]$/, '$&/') === rootUrl;
            if (!hasPushState && !atRoot) {
                var fragment = this.fragment = this._getFragment(null, true);
                $location.replace(rootUrl + $location.search + '#' + fragment);
                return true;
            }
            else if (hasPushState && atRoot && $location.hash) {
                var fragment = this.fragment = this._getHash().replace(routeStripper, '');
                $history.replaceState({}, aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.title, rootUrl + fragment + $location.search);
            }
        }
        if (!this.fragment) {
            this.fragment = this._getFragment('');
        }
        this.linkHandler.activate(this);
        if (!normalizedOptions.silent) {
            return this._loadUrl('');
        }
    };
    BrowserHistory.prototype.deactivate = function () {
        var handler = this._checkUrlCallback;
        aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.removeEventListener('popstate', handler);
        aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.removeEventListener('hashchange', handler);
        this._isActive = false;
        this.linkHandler.deactivate();
    };
    BrowserHistory.prototype.getAbsoluteRoot = function () {
        var $location = this.location;
        var origin = createOrigin($location.protocol, $location.hostname, $location.port);
        return "" + origin + this.root;
    };
    BrowserHistory.prototype.navigate = function (fragment, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.trigger, trigger = _c === void 0 ? true : _c, _d = _b.replace, replace = _d === void 0 ? false : _d;
        var location = this.location;
        if (fragment && absoluteUrl.test(fragment)) {
            location.href = fragment;
            return true;
        }
        if (!this._isActive) {
            return false;
        }
        fragment = this._getFragment(fragment || '');
        if (this.fragment === fragment && !replace) {
            return false;
        }
        this.fragment = fragment;
        var url = this.root + fragment;
        if (fragment === '' && url !== '/') {
            url = url.slice(0, -1);
        }
        if (this._hasPushState) {
            url = url.replace('//', '/');
            this.history[replace ? 'replaceState' : 'pushState']({}, aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.title, url);
        }
        else if (this._wantsHashChange) {
            updateHash(location, fragment, replace);
        }
        else {
            location.assign(url);
        }
        if (trigger) {
            return this._loadUrl(fragment);
        }
        return true;
    };
    BrowserHistory.prototype.navigateBack = function () {
        this.history.back();
    };
    BrowserHistory.prototype.setTitle = function (title) {
        aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.title = title;
    };
    BrowserHistory.prototype.setState = function (key, value) {
        var $history = this.history;
        var state = Object.assign({}, $history.state);
        var _a = this.location, pathname = _a.pathname, search = _a.search, hash = _a.hash;
        state[key] = value;
        $history.replaceState(state, null, "" + pathname + search + hash);
    };
    BrowserHistory.prototype.getState = function (key) {
        var state = Object.assign({}, this.history.state);
        return state[key];
    };
    BrowserHistory.prototype.getHistoryIndex = function () {
        var historyIndex = this.getState('HistoryIndex');
        if (historyIndex === undefined) {
            historyIndex = this.history.length - 1;
            this.setState('HistoryIndex', historyIndex);
        }
        return historyIndex;
    };
    BrowserHistory.prototype.go = function (movement) {
        this.history.go(movement);
    };
    BrowserHistory.prototype._getHash = function () {
        return this.location.hash.substr(1);
    };
    BrowserHistory.prototype._getFragment = function (fragment, forcePushState) {
        var rootUrl;
        if (!fragment) {
            if (this._hasPushState || !this._wantsHashChange || forcePushState) {
                var location_1 = this.location;
                fragment = location_1.pathname + location_1.search;
                rootUrl = this.root.replace(trailingSlash, '');
                if (!fragment.indexOf(rootUrl)) {
                    fragment = fragment.substr(rootUrl.length);
                }
            }
            else {
                fragment = this._getHash();
            }
        }
        return '/' + fragment.replace(routeStripper, '');
    };
    BrowserHistory.prototype._checkUrl = function () {
        var current = this._getFragment('');
        if (current !== this.fragment) {
            this._loadUrl('');
        }
    };
    BrowserHistory.prototype._loadUrl = function (fragmentOverride) {
        var fragment = this.fragment = this._getFragment(fragmentOverride);
        return this.options.routeHandler ?
            this.options.routeHandler(fragment) :
            false;
    };
    BrowserHistory.inject = [LinkHandler];
    return BrowserHistory;
}(aurelia_history__WEBPACK_IMPORTED_MODULE_0__.History));
var routeStripper = /^#?\/*|\s+$/g;
var rootStripper = /^\/+|\/+$/g;
var trailingSlash = /\/$/;
var absoluteUrl = /^([a-z][a-z0-9+\-.]*:)?\/\//i;
function updateHash($location, fragment, replace) {
    if (replace) {
        var href = $location.href.replace(/(javascript:|#).*$/, '');
        $location.replace(href + '#' + fragment);
    }
    else {
        $location.hash = '#' + fragment;
    }
}
function createOrigin(protocol, hostname, port) {
    return protocol + "//" + hostname + (port ? ':' + port : '');
}

function configure(config) {
    var $config = config;
    $config.singleton(aurelia_history__WEBPACK_IMPORTED_MODULE_0__.History, BrowserHistory);
    $config.transient(LinkHandler, DefaultLinkHandler);
}


//# sourceMappingURL=aurelia-history-browser.js.map


/***/ }),

/***/ 1149:
/*!*****************************************************************************!*\
  !*** ./node_modules/aurelia-history/dist/native-modules/aurelia-history.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "History": function() { return /* binding */ History; }
/* harmony export */ });


function mi(name) {
  throw new Error('History must implement ' + name + '().');
}

var History = function () {
  function History() {
    
  }

  History.prototype.activate = function activate(options) {
    mi('activate');
  };

  History.prototype.deactivate = function deactivate() {
    mi('deactivate');
  };

  History.prototype.getAbsoluteRoot = function getAbsoluteRoot() {
    mi('getAbsoluteRoot');
  };

  History.prototype.navigate = function navigate(fragment, options) {
    mi('navigate');
  };

  History.prototype.navigateBack = function navigateBack() {
    mi('navigateBack');
  };

  History.prototype.setTitle = function setTitle(title) {
    mi('setTitle');
  };

  History.prototype.setState = function setState(key, value) {
    mi('setState');
  };

  History.prototype.getState = function getState(key) {
    mi('getState');
  };

  History.prototype.getHistoryIndex = function getHistoryIndex() {
    mi('getHistoryIndex');
  };

  History.prototype.go = function go(movement) {
    mi('go');
  };

  return History;
}();

/***/ }),

/***/ "aurelia-chart/elements/chart-element.html":
/*!************************************************************************************!*\
  !*** ./node_modules/aurelia-chart/dist/native-modules/elements/chart-element.html ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template>\r\n  <canvas ref=\"canvasElement\"></canvas>\r\n</template>\r\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ })

}]);
//# sourceMappingURL=vendors-319a6989.f77665d3faa0d235c766.bundle.js.map