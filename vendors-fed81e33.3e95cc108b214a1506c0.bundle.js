"use strict";
(self["webpackChunkweb_client"] = self["webpackChunkweb_client"] || []).push([["vendors-fed81e33"],{

/***/ "@aurelia-mdc-web/all":
/*!************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/all/dist/native-modules/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");

function configure(config) {
    config
        .plugin('@aurelia-mdc-web/base')
        .plugin('@aurelia-mdc-web/banner')
        .plugin('@aurelia-mdc-web/button')
        .plugin('@aurelia-mdc-web/card')
        .plugin('@aurelia-mdc-web/checkbox')
        .plugin('@aurelia-mdc-web/chips')
        .plugin('@aurelia-mdc-web/circular-progress')
        .plugin('@aurelia-mdc-web/data-table')
        .plugin('@aurelia-mdc-web/dialog')
        .plugin('@aurelia-mdc-web/drawer')
        .plugin('@aurelia-mdc-web/expandable')
        .plugin('@aurelia-mdc-web/elevation')
        .plugin('@aurelia-mdc-web/fab')
        .plugin('@aurelia-mdc-web/form-field')
        .plugin('@aurelia-mdc-web/icon')
        .plugin('@aurelia-mdc-web/icon-button')
        .plugin('@aurelia-mdc-web/image-list')
        .plugin('@aurelia-mdc-web/layout-grid')
        .plugin('@aurelia-mdc-web/linear-progress')
        .plugin('@aurelia-mdc-web/list')
        .plugin('@aurelia-mdc-web/lookup')
        .plugin('@aurelia-mdc-web/menu')
        .plugin('@aurelia-mdc-web/menu-surface')
        .plugin('@aurelia-mdc-web/radio')
        .plugin('@aurelia-mdc-web/segmented-button')
        .plugin('@aurelia-mdc-web/select')
        .plugin('@aurelia-mdc-web/slider')
        .plugin('@aurelia-mdc-web/snackbar')
        .plugin('@aurelia-mdc-web/switch')
        .plugin('@aurelia-mdc-web/tab-bar')
        .plugin('@aurelia-mdc-web/text-field')
        .plugin('@aurelia-mdc-web/tooltip')
        .plugin('@aurelia-mdc-web/top-app-bar')
        .plugin('@aurelia-mdc-web/tree-view')
        .plugin('@aurelia-mdc-web/typography')
        .plugin('@aurelia-mdc-web/validation');
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/banner":
/*!***************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/banner/dist/native-modules/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcBanner": function() { return /* reexport safe */ _mdc_banner__WEBPACK_IMPORTED_MODULE_1__.MdcBanner; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-banner */ "@aurelia-mdc-web/banner/mdc-banner");


function configure(config) {
    config.globalResources([
        './mdc-banner'
    ]);
    config.aurelia.use.plugin('@aurelia-mdc-web/button');
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/banner/mdc-banner":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/banner/dist/native-modules/mdc-banner.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcBanner": function() { return /* binding */ MdcBanner; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/banner */ 1996);
/* harmony import */ var _material_banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/banner */ 4789);
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-dependency-injection */ 6158);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-pal */ 1015);
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-templating */ 1781);
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);







_material_banner__WEBPACK_IMPORTED_MODULE_5__.events.CLOSED = _material_banner__WEBPACK_IMPORTED_MODULE_5__.events.CLOSED.toLowerCase();
_material_banner__WEBPACK_IMPORTED_MODULE_5__.events.CLOSING = _material_banner__WEBPACK_IMPORTED_MODULE_5__.events.CLOSING.toLowerCase();
_material_banner__WEBPACK_IMPORTED_MODULE_5__.events.OPENED = _material_banner__WEBPACK_IMPORTED_MODULE_5__.events.OPENED.toLowerCase();
_material_banner__WEBPACK_IMPORTED_MODULE_5__.events.OPENING = _material_banner__WEBPACK_IMPORTED_MODULE_5__.events.OPENING.toLowerCase();
/**
 * @selector mdc-banner
 */
var MdcBanner = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__extends)(MdcBanner, _super);
    function MdcBanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdcBanner.prototype.handlePrimaryActionClick = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handlePrimaryActionClick(this.disablePrimaryAutoClose);
    };
    MdcBanner.prototype.handleSecondaryActionClick = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleSecondaryActionClick(this.disableSecondaryAutoClose);
    };
    /**
     * Opens the banner and fires events.OPENING to indicate the beginning of its
     * opening animation and then events.OPENED once the animation finishes.
     */
    MdcBanner.prototype.open = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.open();
    };
    /**
     * Closes the banner and fires events.CLOSING to indicate the beginning of its
     * closing animation and then events.CLOSED once the animation finishes.
     * @param reason Why the banner was closed. Value will be passed to
     *     events.CLOSING and events.CLOSED via the `event.detail.reason`
     *     property. Standard values are CloseReason.PRIMARY and
     *     CloseReason.SECONDARY, but CloseReason.UNSPECIFIED is provided for
     *     custom handling of programmatic closing of the banner.
     */
    MdcBanner.prototype.close = function (reason) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.close(reason);
    };
    MdcBanner.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) {
                _this.root.classList.add(className);
            },
            getContentHeight: function () {
                return _this.contentEl.offsetHeight;
            },
            notifyClosed: function (reason) {
                _this.emit(_material_banner__WEBPACK_IMPORTED_MODULE_5__.events.CLOSED, { reason: reason });
            },
            notifyClosing: function (reason) {
                _this.emit(_material_banner__WEBPACK_IMPORTED_MODULE_5__.events.CLOSING, { reason: reason });
            },
            notifyOpened: function () {
                _this.emit(_material_banner__WEBPACK_IMPORTED_MODULE_5__.events.OPENED, {});
            },
            notifyOpening: function () {
                _this.emit(_material_banner__WEBPACK_IMPORTED_MODULE_5__.events.OPENING, {});
            },
            notifyActionClicked: function (action) {
                _this.emit(_material_banner__WEBPACK_IMPORTED_MODULE_5__.events.ACTION_CLICKED, { action: action });
            },
            releaseFocus: function () {
                var _a;
                (_a = _this.mdcFocusTrap) === null || _a === void 0 ? void 0 : _a.releaseFocus();
            },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            setStyleProperty: function (propertyName, value) {
                _this.root.style.setProperty(propertyName, value);
            },
            trapFocus: function () {
                var _a;
                (_a = _this.mdcFocusTrap) === null || _a === void 0 ? void 0 : _a.trapFocus();
            },
        };
        return new _material_banner__WEBPACK_IMPORTED_MODULE_7__.MDCBannerFoundation(adapter);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_4__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Boolean)
    ], MdcBanner.prototype, "fixed", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_4__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Boolean)
    ], MdcBanner.prototype, "centered", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_4__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", String)
    ], MdcBanner.prototype, "icon", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_4__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", String)
    ], MdcBanner.prototype, "primaryAction", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_4__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", String)
    ], MdcBanner.prototype, "secondaryAction", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_4__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Boolean)
    ], MdcBanner.prototype, "disablePrimaryAutoClose", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_4__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__metadata)("design:type", Boolean)
    ], MdcBanner.prototype, "disableSecondaryAutoClose", void 0);
    MdcBanner = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
        (0,aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.inject)(Element),
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.useView)('./mdc-banner.html'),
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.customElement)('mdc-banner')
    ], MdcBanner);
    return MdcBanner;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-banner.js.map

/***/ }),

/***/ "@aurelia-mdc-web/base/attributes/mdc-focus-trap":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/base/dist/native-modules/attributes/mdc-focus-trap.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcFocusTrap": function() { return /* binding */ MdcFocusTrap; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ 6158);
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-templating */ 1781);
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);
/* harmony import */ var _material_dom_focus_trap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/focus-trap */ 1343);





var MdcFocusTrap = /** @class */ (function () {
    function MdcFocusTrap(root) {
        this.root = root;
    }
    MdcFocusTrap.prototype.attached = function () {
        if (!this.delay) {
            this.create();
        }
    };
    MdcFocusTrap.prototype.create = function () {
        var el = this.initialFocusEl instanceof HTMLElement || this.initialFocusEl === undefined ? this.initialFocusEl : this.initialFocusEl();
        this.focusTrap = new _material_dom_focus_trap__WEBPACK_IMPORTED_MODULE_3__.FocusTrap(this.root, { initialFocusEl: el, skipInitialFocus: this.skipInitialFocus, skipRestoreFocus: this.skipRestoreFocus });
    };
    MdcFocusTrap.prototype.trapFocus = function () {
        var _a;
        (_a = this.focusTrap) === null || _a === void 0 ? void 0 : _a.trapFocus();
    };
    MdcFocusTrap.prototype.releaseFocus = function () {
        var _a;
        (_a = this.focusTrap) === null || _a === void 0 ? void 0 : _a.releaseFocus();
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcFocusTrap.prototype, "delay", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
    ], MdcFocusTrap.prototype, "initialFocusEl", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcFocusTrap.prototype, "skipInitialFocus", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcFocusTrap.prototype, "skipRestoreFocus", void 0);
    MdcFocusTrap = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_1__.customAttribute)('mdc-focus-trap'),
        (0,aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcFocusTrap);
    return MdcFocusTrap;
}());

//# sourceMappingURL=mdc-focus-trap.js.map

/***/ }),

/***/ "@aurelia-mdc-web/base/attributes/mdc-size-attribute":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/base/dist/native-modules/attributes/mdc-size-attribute.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcSizeCustomAttribute": function() { return /* binding */ MdcSizeCustomAttribute; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ 1015);



var MdcSizeCustomAttribute = /** @class */ (function () {
    function MdcSizeCustomAttribute(element) {
        this.element = element;
        this.value = { width: 0, height: 0 };
        this.width = 0;
        this.height = 0;
    }
    MdcSizeCustomAttribute.prototype.bind = function () {
        var _a;
        this.observer = this.getObserver();
        (_a = this.observer) === null || _a === void 0 ? void 0 : _a.observe(this.element);
    };
    MdcSizeCustomAttribute.prototype.unbind = function () {
        var _a;
        (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.observer = void 0;
    };
    MdcSizeCustomAttribute.prototype.getObserver = function () {
        var _this = this;
        if (typeof aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.global.ResizeObserver === 'function') {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return new aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.global.ResizeObserver(function (records) {
                var rect = records[0].contentRect;
                _this.value = { width: rect.width, height: rect.height };
            });
        }
        else {
            return new ElementSizeDirtyChecker(function (size) {
                _this.value = size;
            });
        }
    };
    MdcSizeCustomAttribute.prototype.valueChanged = function (size) {
        this.value = size;
        this.width = size.width;
        this.height = size.height;
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable)({ defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindingMode.fromView, primaryProperty: true }),
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)
    ], MdcSizeCustomAttribute.prototype, "value", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable)({ defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindingMode.fromView }),
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Number)
    ], MdcSizeCustomAttribute.prototype, "width", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable)({ defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindingMode.fromView }),
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Number)
    ], MdcSizeCustomAttribute.prototype, "height", void 0);
    MdcSizeCustomAttribute = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-size'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcSizeCustomAttribute);
    return MdcSizeCustomAttribute;
}());

var ElementSizeDirtyChecker = /** @class */ (function () {
    function ElementSizeDirtyChecker(callback, rate /* 3 times a second */) {
        if (rate === void 0) { rate = 330; }
        this.callback = callback;
        this.rate = rate;
        this.size = { width: 0, height: 0 };
    }
    ElementSizeDirtyChecker.prototype.observe = function (element) {
        var _this = this;
        this.timerId = setInterval(function () {
            var _a = element.getBoundingClientRect(), width = _a.width, height = _a.height;
            var currentSize = _this.size;
            if (width !== currentSize.width || height !== currentSize.height) {
                _this.size = { width: width, height: height };
                if (typeof _this.callback === 'function') {
                    _this.callback(_this.size);
                }
            }
        }, this.rate);
    };
    ElementSizeDirtyChecker.prototype.disconnect = function () {
        clearInterval(this.timerId);
    };
    return ElementSizeDirtyChecker;
}());
//# sourceMappingURL=mdc-size-attribute.js.map

/***/ }),

/***/ "@aurelia-mdc-web/base/elements/mdc-promisify-reference":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/base/dist/native-modules/elements/mdc-promisify-reference.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcPromisifyReference": function() { return /* binding */ MdcPromisifyReference; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-binding */ 6778);
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-templating */ 1781);



var MdcPromisifyReference = /** @class */ (function () {
    function MdcPromisifyReference() {
    }
    MdcPromisifyReference.prototype.referenceChanged = function () {
        if (this.reference) {
            this.resolve(this.reference);
        }
    };
    MdcPromisifyReference.prototype.attached = function () {
        var _this = this;
        this.promise = new Promise(function (r) { return _this.resolve = r; });
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_1__.bindable)({ defaultBindingMode: aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.bindingMode.fromView }),
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Promise)
    ], MdcPromisifyReference.prototype, "promise", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_1__.bindable)({ defaultBindingMode: aurelia_binding__WEBPACK_IMPORTED_MODULE_0__.bindingMode.toView }),
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)
    ], MdcPromisifyReference.prototype, "reference", void 0);
    MdcPromisifyReference = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_1__.customElement)('mdc-promisify-reference'),
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__.noView
    ], MdcPromisifyReference);
    return MdcPromisifyReference;
}());

//# sourceMappingURL=mdc-promisify-reference.js.map

/***/ }),

/***/ "@aurelia-mdc-web/base":
/*!*************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/base/dist/native-modules/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MATERIAL_PALETTE": function() { return /* reexport safe */ _material_palette__WEBPACK_IMPORTED_MODULE_3__.MATERIAL_PALETTE; },
/* harmony export */   "MdcComponent": function() { return /* reexport safe */ _mdc_component__WEBPACK_IMPORTED_MODULE_1__.MdcComponent; },
/* harmony export */   "MdcComponentAdapters": function() { return /* reexport safe */ _mdc_component_adapters__WEBPACK_IMPORTED_MODULE_2__.MdcComponentAdapters; },
/* harmony export */   "MdcFocusTrap": function() { return /* reexport safe */ _attributes_mdc_focus_trap__WEBPACK_IMPORTED_MODULE_4__.MdcFocusTrap; },
/* harmony export */   "configure": function() { return /* binding */ configure; },
/* harmony export */   "nextElement": function() { return /* reexport safe */ _next_element__WEBPACK_IMPORTED_MODULE_5__.nextElement; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-component */ 2312);
/* harmony import */ var _mdc_component_adapters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdc-component-adapters */ 1358);
/* harmony import */ var _material_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material-palette */ 7190);
/* harmony import */ var _attributes_mdc_focus_trap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes/mdc-focus-trap */ "@aurelia-mdc-web/base/attributes/mdc-focus-trap");
/* harmony import */ var _next_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./next-element */ 2544);






function configure(config) {
    config.globalResources([
        './attributes/mdc-size-attribute',
        './attributes/mdc-focus-trap',
        './elements/mdc-promisify-reference'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7190:
/*!************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/base/dist/native-modules/material-palette.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MATERIAL_PALETTE": function() { return /* binding */ MATERIAL_PALETTE; }
/* harmony export */ });
/** @hidden */
var MATERIAL_PALETTE = {
    red: { b50: '#FFEBEE', b100: '#FFCDD2', b200: '#EF9A9A', b300: '#E57373', b400: '#EF5350', b500: '#F44336', b600: '#E53935', b700: '#D32F2F', b800: '#C62828', b900: '#B71C1C', a100: '#FF8A80', a200: '#FF5252', a400: '#FF1744', a700: '#D50000' },
    pink: { b50: '#FCE4EC', b100: '#F8BBD0', b200: '#F48FB1', b300: '#F06292', b400: '#EC407A', b500: '#E91E63', b600: '#D81B60', b700: '#C2185B', b800: '#AD1457', b900: '#880E4F', a100: '#FF80AB', a200: '#FF4081', a400: '#F50057', a700: '#C51162' },
    purple: { b50: '#F3E5F5', b100: '#E1BEE7', b200: '#CE93D8', b300: '#BA68C8', b400: '#AB47BC', b500: '#9C27B0', b600: '#8E24AA', b700: '#7B1FA2', b800: '#6A1B9A', b900: '#4A148C', a100: '#EA80FC', a200: '#E040FB', a400: '#D500F9', a700: '#AA00FF' },
    deepPurple: { b50: '#EDE7F6', b100: '#D1C4E9', b200: '#B39DDB', b300: '#9575CD', b400: '#7E57C2', b500: '#673AB7', b600: '#5E35B1', b700: '#512DA8', b800: '#4527A0', b900: '#311B92', a100: '#B388FF', a200: '#7C4DFF', a400: '#651FFF', a700: '#6200EA' },
    indigo: { b50: '#E8EAF6', b100: '#C5CAE9', b200: '#9FA8DA', b300: '#7986CB', b400: '#5C6BC0', b500: '#3F51B5', b600: '#3949AB', b700: '#303F9F', b800: '#283593', b900: '#1A237E', a100: '#8C9EFF', a200: '#536DFE', a400: '#3D5AFE', a700: '#304FFE' },
    blue: { b50: '#E3F2FD', b100: '#BBDEFB', b200: '#90CAF9', b300: '#64B5F6', b400: '#42A5F5', b500: '#2196F3', b600: '#1E88E5', b700: '#1976D2', b800: '#1565C0', b900: '#0D47A1', a100: '#82B1FF', a200: '#448AFF', a400: '#2979FF', a700: '#2962FF' },
    lightBlue: { b50: '#E1F5FE', b100: '#B3E5FC', b200: '#81D4FA', b300: '#4FC3F7', b400: '#29B6F6', b500: '#03A9F4', b600: '#039BE5', b700: '#0288D1', b800: '#0277BD', b900: '#01579B', a100: '#80D8FF', a200: '#40C4FF', a400: '#00B0FF', a700: '#0091EA' },
    cyan: { b50: '#E0F7FA', b100: '#B2EBF2', b200: '#80DEEA', b300: '#4DD0E1', b400: '#26C6DA', b500: '#00BCD4', b600: '#00ACC1', b700: '#0097A7', b800: '#00838F', b900: '#006064', a100: '#84FFFF', a200: '#18FFFF', a400: '#00E5FF', a700: '#00B8D4' },
    teal: { b50: '#E0F2F1', b100: '#B2DFDB', b200: '#80CBC4', b300: '#4DB6AC', b400: '#26A69A', b500: '#009688', b600: '#00897B', b700: '#00796B', b800: '#00695C', b900: '#004D40', a100: '#A7FFEB', a200: '#64FFDA', a400: '#1DE9B6', a700: '#00BFA5' },
    green: { b50: '#E8F5E9', b100: '#C8E6C9', b200: '#A5D6A7', b300: '#81C784', b400: '#66BB6A', b500: '#4CAF50', b600: '#43A047', b700: '#388E3C', b800: '#2E7D32', b900: '#1B5E20', a100: '#B9F6CA', a200: '#69F0AE', a400: '#00E676', a700: '#00C853' },
    lightGreen: { b50: '#F1F8E9', b100: '#DCEDC8', b200: '#C5E1A5', b300: '#AED581', b400: '#9CCC65', b500: '#8BC34A', b600: '#7CB342', b700: '#689F38', b800: '#558B2F', b900: '#33691E', a100: '#CCFF90', a200: '#B2FF59', a400: '#76FF03', a700: '#64DD17' },
    lime: { b50: '#F9FBE7', b100: '#F0F4C3', b200: '#E6EE9C', b300: '#DCE775', b400: '#D4E157', b500: '#CDDC39', b600: '#C0CA33', b700: '#AFB42B', b800: '#9E9D24', b900: '#827717', a100: '#F4FF81', a200: '#EEFF41', a400: '#C6FF00', a700: '#AEEA00' },
    yellow: { b50: '#FFFDE7', b100: '#FFF9C4', b200: '#FFF59D', b300: '#FFF176', b400: '#FFEE58', b500: '#FFEB3B', b600: '#FDD835', b700: '#FBC02D', b800: '#F9A825', b900: '#F57F17', a100: '#FFFF8D', a200: '#FFFF00', a400: '#FFEA00', a700: '#FFD600' },
    amber: { b50: '#FFF8E1', b100: '#FFECB3', b200: '#FFE082', b300: '#FFD54F', b400: '#FFCA28', b500: '#FFC107', b600: '#FFB300', b700: '#FFA000', b800: '#FF8F00', b900: '#FF6F00', a100: '#FFE57F', a200: '#FFD740', a400: '#FFC400', a700: '#FFAB00' },
    orange: { b50: '#FFF3E0', b100: '#FFE0B2', b200: '#FFCC80', b300: '#FFB74D', b400: '#FFA726', b500: '#FF9800', b600: '#FB8C00', b700: '#F57C00', b800: '#EF6C00', b900: '#E65100', a100: '#FFD180', a200: '#FFAB40', a400: '#FF9100', a700: '#FF6D00' },
    deepOrange: { b50: '#FBE9E7', b100: '#FFCCBC', b200: '#FFAB91', b300: '#FF8A65', b400: '#FF7043', b500: '#FF5722', b600: '#F4511E', b700: '#E64A19', b800: '#D84315', b900: '#BF360C', a100: '#FF9E80', a200: '#FF6E40', a400: '#FF3D00', a700: '#DD2C00' },
    brown: { b50: '#EFEBE9', b100: '#D7CCC8', b200: '#BCAAA4', b300: '#A1887F', b400: '#8D6E63', b500: '#795548', b600: '#6D4C41', b700: '#5D4037', b800: '#4E342E', b900: '#3E2723' },
    grey: { b50: '#FAFAFA', b100: '#F5F5F5', b200: '#EEEEEE', b300: '#E0E0E0', b400: '#BDBDBD', b500: '#9E9E9E', b600: '#757575', b700: '#616161', b800: '#424242', b900: '#212121' },
    blueGrey: { b50: '#ECEFF1', b100: '#CFD8DC', b200: '#B0BEC5', b300: '#90A4AE', b400: '#78909C', b500: '#607D8B', b600: '#546E7A', b700: '#455A64', b800: '#37474F', b900: '#263238' }
};
//# sourceMappingURL=material-palette.js.map

/***/ }),

/***/ 1358:
/*!******************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/base/dist/native-modules/mdc-component-adapters.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcComponentAdapters": function() { return /* binding */ MdcComponentAdapters; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_templating_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-templating-binding */ "aurelia-templating-binding");



var MdcComponentAdapters = /** @class */ (function () {
    function MdcComponentAdapters(observerLocator) {
        this.observerLocator = observerLocator;
        this.adaptersCreated = false;
        this.adapters = {};
    }
    MdcComponentAdapters.prototype.createAdapter = function () {
        var _this = this;
        this.observerLocator.addAdapter({
            getObserver: function (obj, propertyName, descriptor) {
                var _a;
                if (obj instanceof Element) {
                    var tagName = (_a = obj.getAttribute('as-element')) !== null && _a !== void 0 ? _a : obj.tagName;
                    var elAdapters = _this.adapters[tagName];
                    if (!elAdapters) {
                        return null;
                    }
                    var propertyAdapter = elAdapters.properties[propertyName];
                    if (propertyAdapter) {
                        var observer = propertyAdapter.getObserver(obj, propertyName, _this.observerLocator, descriptor);
                        if (observer) {
                            return observer;
                        }
                    }
                }
                return null;
            }
        });
    };
    MdcComponentAdapters.prototype.getOrCreateMdcElementAdapters = function (tagName) {
        if (!this.adaptersCreated) {
            this.createAdapter();
            this.adaptersCreated = true;
        }
        var adapters = this.adapters;
        var elementAdapters = adapters[tagName] || adapters[tagName.toLowerCase()];
        if (!elementAdapters) {
            elementAdapters = adapters[tagName] = adapters[tagName.toLowerCase()] = { tagName: tagName, properties: {} };
        }
        return elementAdapters;
    };
    MdcComponentAdapters.prototype.interceptDetermineDefaultBindingMode = function () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var mdc = this;
        var originalFn = aurelia_templating_binding__WEBPACK_IMPORTED_MODULE_1__.SyntaxInterpreter.prototype.determineDefaultBindingMode;
        aurelia_templating_binding__WEBPACK_IMPORTED_MODULE_1__.SyntaxInterpreter.prototype.determineDefaultBindingMode = function (element, attrName, context) {
            var _a;
            var tagName = (_a = element.getAttribute('as-element')) !== null && _a !== void 0 ? _a : element.tagName;
            var elAdapters = mdc.adapters[tagName];
            if (elAdapters) {
                var propertyAdapter = elAdapters.properties[attrName];
                if (propertyAdapter) {
                    return propertyAdapter.defaultBindingMode;
                }
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return originalFn.call(this, element, attrName, context);
        };
    };
    MdcComponentAdapters.prototype.addMdcElementObserverAdapter = function (tagName, properties) {
        if (!this.adaptersCreated) {
            this.createAdapter();
            this.adaptersCreated = true;
        }
        var elementAdapters = this.getOrCreateMdcElementAdapters(tagName);
        Object.assign(elementAdapters.properties, properties);
    };
    MdcComponentAdapters.prototype.registerMdcElementConfig = function (observerAdapter) {
        if (!this.bindingModeIntercepted) {
            this.interceptDetermineDefaultBindingMode();
            this.bindingModeIntercepted = true;
        }
        this.addMdcElementObserverAdapter(observerAdapter.tagName.toUpperCase(), observerAdapter.properties);
    };
    MdcComponentAdapters = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.ObserverLocator),
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.ObserverLocator])
    ], MdcComponentAdapters);
    return MdcComponentAdapters;
}());

//# sourceMappingURL=mdc-component-adapters.js.map

/***/ }),

/***/ 2312:
/*!*********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/base/dist/native-modules/mdc-component.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcComponent": function() { return /* binding */ MdcComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 655);

var MdcComponent = /** @class */ (function () {
    function MdcComponent(root) {
        this.root = root;
        this.initialised = this.createInitiliasedPromise();
    }
    MdcComponent.prototype.createInitiliasedPromise = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (r) { return _this.initialisedResolve = r; })];
            });
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    MdcComponent.prototype.initialise = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    MdcComponent.prototype.initialSyncWithDOM = function () { };
    MdcComponent.prototype.attached = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.continueAttaching = true;
                        return [4 /*yield*/, this.initialise()];
                    case 1:
                        _a.sent();
                        // detached might be called straight after attached starts
                        // do not continue attaching if that's the case
                        if (!this.continueAttaching) {
                            return [2 /*return*/];
                        }
                        this.foundation = this.getDefaultFoundation();
                        this.foundation.init();
                        this.initialisedResolve();
                        this.initialSyncWithDOM();
                        return [2 /*return*/];
                }
            });
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    MdcComponent.prototype.destroy = function () { };
    MdcComponent.prototype.detached = function () {
        var _a;
        this.continueAttaching = false;
        this.destroy();
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.destroy();
        this.foundation = undefined;
        this.initialised = this.createInitiliasedPromise();
    };
    MdcComponent.prototype.listen = function (evtType, handler, options) {
        this.root.addEventListener(evtType, handler, options);
    };
    MdcComponent.prototype.unlisten = function (evtType, handler, options) {
        this.root.removeEventListener(evtType, handler, options);
    };
    /**
     * @hidden
     * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
     */
    MdcComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
        if (shouldBubble === void 0) { shouldBubble = false; }
        var evt;
        if (typeof CustomEvent === 'function') {
            evt = new CustomEvent(evtType, {
                bubbles: shouldBubble,
                detail: evtData,
            });
        }
        else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }
        this.root.dispatchEvent(evt);
    };
    return MdcComponent;
}());

//# sourceMappingURL=mdc-component.js.map

/***/ }),

/***/ 2544:
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/base/dist/native-modules/next-element.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nextElement": function() { return /* binding */ nextElement; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 655);

function nextElement(element, reverse) {
    /*check if an element is defined or use activeElement*/
    var activeElem = element instanceof HTMLElement ? element : document.activeElement;
    if (!activeElem) {
        return;
    }
    var queryString = [
        'a:not([disabled]):not([tabindex="-1"])',
        'button:not([disabled]):not([tabindex="-1"])',
        'input:not([disabled]):not([tabindex="-1"]):not(.mdc-text-field__input)',
        '.mdc-text-field',
        'select:not([disabled]):not([tabindex="-1"])',
        '[tabindex]:not([disabled]):not([tabindex="-1"])'
        /* add custom queries here */
    ].join(','), queryResult = Array.from(document.querySelectorAll(queryString)).filter(function (elem) {
        /*check for visibility while always include the current activeElement*/
        return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem === activeElem;
    }), indexedList = queryResult.slice().filter(function (elem) {
        /* filter out all indexes not greater than 0 */
        return elem.tabIndex == 0 || elem.tabIndex == -1 ? false : true;
    }).sort(function (a, b) {
        /* sort the array by index from smallest to largest */
        return a.tabIndex != 0 && b.tabIndex != 0
            ? (a.tabIndex < b.tabIndex ? -1 : b.tabIndex < a.tabIndex ? 1 : 0)
            : a.tabIndex != 0 ? -1 : b.tabIndex != 0 ? 1 : 0;
    }), focusable = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(indexedList), false), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(queryResult.filter(function (elem) {
        /* filter out all indexes above 0 */
        return elem.tabIndex == 0 || elem.tabIndex == -1 ? true : false;
    })), false);
    /* if reverse is true return the previous focusable element
       if reverse is false return the next focusable element */
    return reverse ? (focusable[focusable.indexOf(activeElem) - 1] || focusable[focusable.length - 1])
        : (focusable[focusable.indexOf(activeElem) + 1] || focusable[0]);
}
//# sourceMappingURL=next-element.js.map

/***/ }),

/***/ "@aurelia-mdc-web/button/enhance-mdc-button":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/button/dist/native-modules/enhance-mdc-button.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnhanceMdcButton": function() { return /* binding */ EnhanceMdcButton; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


var EnhanceMdcButton = /** @class */ (function () {
    function EnhanceMdcButton() {
    }
    EnhanceMdcButton.prototype.beforeCompile = function (template) {
        var e_1, _a;
        var actions = template.querySelectorAll('[mdc-button]');
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(Array.from(actions)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var i = _c.value;
                i.setAttribute('as-element', 'mdc-button');
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    EnhanceMdcButton = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.viewEngineHooks
    ], EnhanceMdcButton);
    return EnhanceMdcButton;
}());

//# sourceMappingURL=enhance-mdc-button.js.map

/***/ }),

/***/ "@aurelia-mdc-web/button":
/*!***************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/button/dist/native-modules/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcButton": function() { return /* reexport safe */ _mdc_button__WEBPACK_IMPORTED_MODULE_1__.MdcButton; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-button */ "@aurelia-mdc-web/button/mdc-button");


function configure(config) {
    config.globalResources([
        './mdc-button',
        './enhance-mdc-button',
        './mdc-button-label'
    ]);
    config.aurelia.use.plugin('@aurelia-mdc-web/ripple');
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/button/mdc-button-label":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/button/dist/native-modules/mdc-button-label.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcButtonLabel": function() { return /* binding */ MdcButtonLabel; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * The mdc-button-label attribute is required in order for the trailing icon to be styled appropriately.
 * @selector [mdc-button-label]
 */
var MdcButtonLabel = /** @class */ (function () {
    function MdcButtonLabel(root) {
        this.root = root;
    }
    MdcButtonLabel.prototype.attached = function () {
        this.root.classList.add('mdc-button__label');
    };
    MdcButtonLabel = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-button-label'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcButtonLabel);
    return MdcButtonLabel;
}());

//# sourceMappingURL=mdc-button-label.js.map

/***/ }),

/***/ "@aurelia-mdc-web/button/mdc-button":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/button/dist/native-modules/mdc-button.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcButton": function() { return /* binding */ MdcButton; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);



/**
 * @selector button[mdc-button]
 * @selector a[mdc-button]
 * @selector mdc-button
 */
var MdcButton = /** @class */ (function () {
    function MdcButton(root) {
        this.root = root;
    }
    MdcButton.prototype.hrefChanged = function () {
        if (this.href) {
            this.root.setAttribute('href', this.href);
        }
        else {
            this.root.removeAttribute('href');
        }
    };
    MdcButton.prototype.attached = function () {
        var icons = this.root.querySelectorAll('mdc-icon');
        Array.from(icons).forEach(function (x) { return x.classList.add('mdc-button__icon'); });
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcButton.prototype, "touch", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcButton.prototype, "raised", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcButton.prototype, "unelevated", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcButton.prototype, "outlined", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
    ], MdcButton.prototype, "label", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
    ], MdcButton.prototype, "href", void 0);
    MdcButton = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-button.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-button'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcButton);
    return MdcButton;
}());

//# sourceMappingURL=mdc-button.js.map

/***/ }),

/***/ "@aurelia-mdc-web/card":
/*!*************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/card/dist/native-modules/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcCard": function() { return /* reexport safe */ _mdc_card__WEBPACK_IMPORTED_MODULE_1__.MdcCard; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-card */ "@aurelia-mdc-web/card/mdc-card");


function configure(config) {
    config.globalResources([
        './mdc-card',
        './mdc-card-actions/mdc-card-actions',
        './mdc-card-media/mdc-card-media',
        './mdc-card-action-buttons',
        './mdc-card-action-icons',
        './mdc-card-primary-action'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/card/mdc-card-action-buttons":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/card/dist/native-modules/mdc-card-action-buttons.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcCardActionButtons": function() { return /* binding */ MdcCardActionButtons; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * Optional. A group of action buttons, displayed on the left side of the card (in LTR).
 * @selector mdc-card-action-buttons
 */
var MdcCardActionButtons = /** @class */ (function () {
    function MdcCardActionButtons(root) {
        this.root = root;
    }
    MdcCardActionButtons.prototype.attached = function () {
        var children = this.root.querySelectorAll('.mdc-button');
        for (var i = 0; i < children.length; ++i) {
            var child = children[i];
            child.classList.add('mdc-card__action', 'mdc-card__action--button');
        }
    };
    MdcCardActionButtons = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inlineView)('<template class="mdc-card__action-buttons"><slot></slot></template>'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-card-action-buttons'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcCardActionButtons);
    return MdcCardActionButtons;
}());

//# sourceMappingURL=mdc-card-action-buttons.js.map

/***/ }),

/***/ "@aurelia-mdc-web/card/mdc-card-action-icons":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/card/dist/native-modules/mdc-card-action-icons.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcCardActionIcons": function() { return /* binding */ MdcCardActionIcons; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * Optional. A group of supplemental action icons, displayed on the right side of the card (in LTR).
 * @selector mdc-card-action-icons
 */
var MdcCardActionIcons = /** @class */ (function () {
    function MdcCardActionIcons(root) {
        this.root = root;
    }
    MdcCardActionIcons.prototype.attached = function () {
        var children = this.root.querySelectorAll('.mdc-icon-button');
        for (var i = 0; i < children.length; ++i) {
            var child = children[i];
            child.classList.add('mdc-card__action', 'mdc-card__action--icon');
        }
    };
    MdcCardActionIcons = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inlineView)('<template class="mdc-card__action-icons"><slot></slot></template>'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-card-action-icons'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcCardActionIcons);
    return MdcCardActionIcons;
}());

//# sourceMappingURL=mdc-card-action-icons.js.map

/***/ }),

/***/ "@aurelia-mdc-web/card/mdc-card-actions/mdc-card-actions":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/card/dist/native-modules/mdc-card-actions/mdc-card-actions.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcCardActions": function() { return /* binding */ MdcCardActions; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);



/**
 * @selector mdc-card-actions
 */
var MdcCardActions = /** @class */ (function () {
    function MdcCardActions() {
    }
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcCardActions.prototype, "fullBleed", void 0);
    MdcCardActions = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-card-actions.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-card-actions')
    ], MdcCardActions);
    return MdcCardActions;
}());

//# sourceMappingURL=mdc-card-actions.js.map

/***/ }),

/***/ "@aurelia-mdc-web/card/mdc-card-media/mdc-card-media":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/card/dist/native-modules/mdc-card-media/mdc-card-media.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcCardMedia": function() { return /* binding */ MdcCardMedia; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);



/**
 * @selector mdc-card-media
 */
var MdcCardMedia = /** @class */ (function () {
    function MdcCardMedia() {
    }
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcCardMedia.prototype, "square", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcCardMedia.prototype, "wide", void 0);
    MdcCardMedia = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-card-media.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-card-media')
    ], MdcCardMedia);
    return MdcCardMedia;
}());

//# sourceMappingURL=mdc-card-media.js.map

/***/ }),

/***/ "@aurelia-mdc-web/card/mdc-card-primary-action":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/card/dist/native-modules/mdc-card-primary-action.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcCardPrimaryAction": function() { return /* binding */ MdcCardPrimaryAction; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);



/**
 * Optional. The main tappable area of the card. Typically contains most (or all) card content except mdc-card-actions.
 * Only applicable to cards that have a primary action that the main surface should trigger.
 * @selector mdc-card-primary-action
 */
var MdcCardPrimaryAction = /** @class */ (function () {
    function MdcCardPrimaryAction() {
    }
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcCardPrimaryAction.prototype, "disableRipple", void 0);
    MdcCardPrimaryAction = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-card-primary-action.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-card-primary-action')
    ], MdcCardPrimaryAction);
    return MdcCardPrimaryAction;
}());

//# sourceMappingURL=mdc-card-primary-action.js.map

/***/ }),

/***/ "@aurelia-mdc-web/card/mdc-card":
/*!****************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/card/dist/native-modules/mdc-card.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcCard": function() { return /* binding */ MdcCard; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);



/**
 * @selector mdc-card
 */
var MdcCard = /** @class */ (function () {
    function MdcCard() {
    }
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcCard.prototype, "outlined", void 0);
    MdcCard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-card.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-card')
    ], MdcCard);
    return MdcCard;
}());

//# sourceMappingURL=mdc-card.js.map

/***/ }),

/***/ "@aurelia-mdc-web/checkbox":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/checkbox/dist/native-modules/index.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcCheckbox": function() { return /* reexport safe */ _mdc_checkbox__WEBPACK_IMPORTED_MODULE_2__.MdcCheckbox; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _mdc_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdc-checkbox */ "@aurelia-mdc-web/checkbox/mdc-checkbox");



function configure(config) {
    config.container.get(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__.MdcComponentAdapters).registerMdcElementConfig(checkboxConfig);
    config.globalResources([
        './mdc-checkbox'
    ]);
    config.aurelia.use.plugin('@aurelia-mdc-web/ripple');
}
var checkboxConfig = {
    tagName: 'mdc-checkbox',
    properties: {
        checked: {
            defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindingMode.twoWay,
            getObserver: function (element, _, observerLocator) {
                return new aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.CheckedObserver(element, new aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.EventSubscriber(['change']), observerLocator);
            }
        }
    }
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/checkbox/mdc-checkbox":
/*!************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/checkbox/dist/native-modules/mdc-checkbox.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcCheckbox": function() { return /* binding */ MdcCheckbox; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/checkbox */ 1783);
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);
/* harmony import */ var _material_animation_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/animation/util */ 5475);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");






var checkboxId = 0;
/**
 * @selector mdc-checkbox
 * @emits change | Event dispatched on checked change.
 */
var MdcCheckbox = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(MdcCheckbox, _super);
    function MdcCheckbox(root) {
        var _this = _super.call(this, root) || this;
        _this.id = "mdc-checkbox-".concat(++checkboxId, "-input");
        /**
         * Whether the checkbox should go to checked state or unchecked when toggled from indeterminate state.
         */
        _this.indeterminateToChecked = true;
        defineMdcCheckboxElementApis(_this.root);
        return _this;
    }
    MdcCheckbox.prototype.disabledChanged = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _a.sent();
                        // still need to check because a component might already be destroyed
                        // by the time the binding is applied
                        if (this.nativeControl_) {
                            this.nativeControl_.disabled = this.disabled;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(MdcCheckbox.prototype, "checked", {
        get: function () {
            var _a;
            if (this.nativeControl_) {
                return this.nativeControl_.checked;
            }
            else {
                return (_a = this._checked) !== null && _a !== void 0 ? _a : false;
            }
        },
        /**
         * Whether the checkbox is checked.
         */
        set: function (checked) {
            this._checked = checked;
            if (this.nativeControl_) {
                this.nativeControl_.checked = checked;
            }
        },
        enumerable: false,
        configurable: true
    });
    MdcCheckbox.prototype.indeterminateChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        if (this.nativeControl_) {
                            this.nativeControl_.indeterminate = this.indeterminate;
                        }
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleChange();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(MdcCheckbox.prototype, "value", {
        get: function () {
            return this.nativeControl_.value;
        },
        set: function (value) {
            this.nativeControl_.value = value;
        },
        enumerable: false,
        configurable: true
    });
    // eslint-disable-next-line @typescript-eslint/require-await
    MdcCheckbox.prototype.initialise = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var attributeValue, attributeValue;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                this.listen((0,_material_animation_util__WEBPACK_IMPORTED_MODULE_4__.getCorrectEventName)(window, 'animationend'), this.handleAnimationEnd_);
                if (this.root.hasAttribute('checked')) {
                    attributeValue = this.root.getAttribute('checked');
                    if (attributeValue || attributeValue === '') {
                        this.root.checked = true;
                    }
                }
                if (this.root.hasAttribute('indeterminate')) {
                    attributeValue = this.root.getAttribute('indeterminate');
                    if (attributeValue || attributeValue === '') {
                        this.root.indeterminate = true;
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    MdcCheckbox.prototype.initialSyncWithDOM = function () {
        if (this._checked !== undefined) {
            this.checked = this._checked;
        }
    };
    MdcCheckbox.prototype.destroy = function () {
        this.unlisten((0,_material_animation_util__WEBPACK_IMPORTED_MODULE_4__.getCorrectEventName)(window, 'animationend'), this.handleAnimationEnd_);
        this._checked = undefined;
    };
    MdcCheckbox.prototype.handleChange_ = function () {
        var _a;
        if (this.indeterminate) {
            this.indeterminate = false;
            this.checked = this.indeterminateToChecked;
        }
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleChange();
    };
    MdcCheckbox.prototype.handleAnimationEnd_ = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleAnimationEnd();
    };
    MdcCheckbox.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            forceLayout: function () { return (_this.root).offsetWidth; },
            hasNativeControl: function () { return !!_this.nativeControl_; },
            isAttachedToDOM: function () { return Boolean(_this.root.parentNode); },
            isChecked: function () { return _this.checked; },
            isIndeterminate: function () { return _this.indeterminate; },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            removeNativeControlAttr: function (attr) {
                _this.nativeControl_.removeAttribute(attr);
            },
            setNativeControlAttr: function (attr, value) {
                _this.nativeControl_.setAttribute(attr, value);
            },
            setNativeControlDisabled: function (disabled) {
                _this.nativeControl_.disabled = disabled;
            },
        };
        return new _material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MDCCheckboxFoundation(adapter);
    };
    /**
     * Set focus to the checkbox.
     */
    MdcCheckbox.prototype.focus = function () {
        this.nativeControl_.focus();
    };
    /**
     * Moves focus from the checkbox.
     */
    MdcCheckbox.prototype.blur = function () {
        this.nativeControl_.blur();
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcCheckbox.prototype, "disabled", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcCheckbox.prototype, "touch", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcCheckbox.prototype, "disableRipple", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcCheckbox.prototype, "indeterminateToChecked", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr({ defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.bindingMode.twoWay }),
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcCheckbox.prototype, "indeterminate", void 0);
    MdcCheckbox = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.useView)('./mdc-checkbox.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.customElement)('mdc-checkbox'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Object])
    ], MdcCheckbox);
    return MdcCheckbox;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

function defineMdcCheckboxElementApis(element) {
    Object.defineProperties(element, {
        type: {
            value: 'checkbox',
        },
        checked: {
            get: function () {
                return this.au.controller.viewModel.checked;
            },
            set: function (value) {
                this.au.controller.viewModel.checked = value;
            },
            configurable: true
        },
        focus: {
            value: function () {
                this.au.controller.viewModel.focus();
            },
            configurable: true
        },
        blur: {
            value: function () {
                this.au.controller.viewModel.blur();
            },
            configurable: true
        }
    });
}
//# sourceMappingURL=mdc-checkbox.js.map

/***/ }),

/***/ "@aurelia-mdc-web/chips":
/*!**************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/chips/dist/native-modules/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcChip": function() { return /* reexport safe */ _mdc_chip_mdc_chip__WEBPACK_IMPORTED_MODULE_2__.MdcChip; },
/* harmony export */   "MdcChipAction": function() { return /* reexport safe */ _mdc_chip_action_mdc_chip_action__WEBPACK_IMPORTED_MODULE_4__.MdcChipAction; },
/* harmony export */   "MdcChipSet": function() { return /* reexport safe */ _mdc_chip_set_mdc_chip_set__WEBPACK_IMPORTED_MODULE_3__.MdcChipSet; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _mdc_chip_mdc_chip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdc-chip/mdc-chip */ "@aurelia-mdc-web/chips/mdc-chip/mdc-chip");
/* harmony import */ var _mdc_chip_set_mdc_chip_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mdc-chip-set/mdc-chip-set */ "@aurelia-mdc-web/chips/mdc-chip-set/mdc-chip-set");
/* harmony import */ var _mdc_chip_action_mdc_chip_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mdc-chip-action/mdc-chip-action */ "@aurelia-mdc-web/chips/mdc-chip-action/mdc-chip-action");





function configure(config) {
    config.container.get(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__.MdcComponentAdapters).registerMdcElementConfig(chipConfig);
    config.globalResources([
        './mdc-chip/mdc-chip',
        './mdc-chip-set/mdc-chip-set',
        './mdc-chip-action/mdc-chip-action',
        './mdc-chip-action/enhance-mdc-chip-action'
    ]);
    config.aurelia.use.plugin('@aurelia-mdc-web/ripple');
}
var chipConfig = {
    tagName: 'mdc-chip',
    properties: {
        checked: {
            defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindingMode.twoWay,
            getObserver: function (element, _, observerLocator) {
                return new aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.CheckedObserver(element, new aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.EventSubscriber(['change']), observerLocator);
            }
        }
    }
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/chips/mdc-chip-action/enhance-mdc-chip-action":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/chips/dist/native-modules/mdc-chip-action/enhance-mdc-chip-action.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnhanceMdcChipAction": function() { return /* binding */ EnhanceMdcChipAction; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


var EnhanceMdcChipAction = /** @class */ (function () {
    function EnhanceMdcChipAction() {
    }
    EnhanceMdcChipAction.prototype.beforeCompile = function (template) {
        var e_1, _a;
        var actions = template.querySelectorAll('[mdc-chip-action]');
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(Array.from(actions)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var i = _c.value;
                i.setAttribute('as-element', 'mdc-chip-action');
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    EnhanceMdcChipAction = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.viewEngineHooks
    ], EnhanceMdcChipAction);
    return EnhanceMdcChipAction;
}());

//# sourceMappingURL=enhance-mdc-chip-action.js.map

/***/ }),

/***/ "@aurelia-mdc-web/chips/mdc-chip-action/mdc-chip-action":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/chips/dist/native-modules/mdc-chip-action/mdc-chip-action.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcChipAction": function() { return /* binding */ MdcChipAction; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/dom/ponyfill */ 2851);
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/chips */ 8510);
/* harmony import */ var _material_chips_action_trailing_foundation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/chips/action/trailing-foundation */ 1290);
/* harmony import */ var _material_chips_action_primary_foundation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material/chips/action/primary-foundation */ 1093);
/* harmony import */ var _material_chips_action_component_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/chips/action/component-ripple */ 8818);









_material_chips__WEBPACK_IMPORTED_MODULE_3__.MDCChipActionEvents.INTERACTION = _material_chips__WEBPACK_IMPORTED_MODULE_3__.MDCChipActionEvents.INTERACTION.toLowerCase();
_material_chips__WEBPACK_IMPORTED_MODULE_3__.MDCChipActionEvents.NAVIGATION = _material_chips__WEBPACK_IMPORTED_MODULE_3__.MDCChipActionEvents.NAVIGATION.toLowerCase();
var actionId = 0;
/**
 * @hidden
 * @selector mdc-chip-action
 */
var MdcChipAction = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(MdcChipAction, _super);
    function MdcChipAction(root) {
        var _this = _super.call(this, root) || this;
        _this.root = root;
        _this.computeRippleClientRect = function () {
            if (_this.root.classList.contains(_material_chips__WEBPACK_IMPORTED_MODULE_3__.MDCChipActionCssClasses.PRIMARY_ACTION)) {
                var chipRoot = (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_5__.closest)(_this.root, ".".concat(_material_chips__WEBPACK_IMPORTED_MODULE_3__.MDCChipActionCssClasses.CHIP_ROOT));
                // Return the root client rect since it's better than nothing
                if (!chipRoot) {
                    return _this.root.getBoundingClientRect();
                }
                var graphicWidth = window.getComputedStyle(chipRoot).getPropertyValue(_material_chips_action_component_ripple__WEBPACK_IMPORTED_MODULE_6__.GRAPHIC_SELECTED_WIDTH_STYLE_PROP);
                return (0,_material_chips_action_component_ripple__WEBPACK_IMPORTED_MODULE_6__.computePrimaryActionRippleClientRect)(chipRoot.getBoundingClientRect(), graphicWidth);
            }
            return _this.root.getBoundingClientRect();
        };
        _this.root.id = "mdc-chip-action-".concat(++actionId);
        return _this;
    }
    MdcChipAction.prototype.selectableChanged = function () {
        if (this.selectable) {
            this.root.setAttribute('role', 'option');
        }
        else {
            this.root.removeAttribute('role');
        }
    };
    Object.defineProperty(MdcChipAction.prototype, "selected", {
        get: function () {
            var _a, _b;
            return (_b = (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.isSelected()) !== null && _b !== void 0 ? _b : this._selected;
        },
        set: function (value) {
            var _a;
            this._selected = value;
            (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setSelected(value);
        },
        enumerable: false,
        configurable: true
    });
    MdcChipAction.prototype.disabledChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setDisabled(this.disabled);
                        if (this.disabled) {
                            this.root.setAttribute('disabled', 'true');
                        }
                        else {
                            this.root.removeAttribute('disabled');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcChipAction.prototype.initialSyncWithDOM = function () {
        if (this._selected !== undefined) {
            this.selected = this._selected;
        }
    };
    MdcChipAction.prototype.handleClick = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleClick();
    };
    MdcChipAction.prototype.handleKeydown = function (event) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleKeydown(event);
        return true;
    };
    MdcChipAction.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            emitEvent: function (eventName, eventDetail) {
                _this.emit(eventName, eventDetail, true /* shouldBubble */);
            },
            focus: function () {
                _this.root.focus();
            },
            getAttribute: function (attrName) { return _this.root.getAttribute(attrName); },
            getElementID: function () { return _this.root.id; },
            removeAttribute: function (name) {
                _this.root.removeAttribute(name);
            },
            setAttribute: function (name, value) {
                _this.root.setAttribute(name, value);
            },
        };
        if (this.root.classList.contains(_material_chips__WEBPACK_IMPORTED_MODULE_3__.MDCChipActionCssClasses.TRAILING_ACTION)) {
            return new _material_chips_action_trailing_foundation__WEBPACK_IMPORTED_MODULE_7__.MDCChipTrailingActionFoundation(adapter);
        }
        // Default to the primary foundation
        return new _material_chips_action_primary_foundation__WEBPACK_IMPORTED_MODULE_8__.MDCChipPrimaryActionFoundation(adapter);
    };
    MdcChipAction.prototype.isFocusable = function () {
        var _a, _b;
        return (_b = (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.isFocusable()) !== null && _b !== void 0 ? _b : false;
    };
    MdcChipAction.prototype.setFocus = function (behavior) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setFocus(behavior);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcChipAction.prototype, "selectable", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcChipAction.prototype, "trailing", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
    ], MdcChipAction.prototype, "icon", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcChipAction.prototype, "disabled", void 0);
    MdcChipAction = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-chip-action.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-chip-action'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcChipAction);
    return MdcChipAction;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_2__.MdcComponent));

//# sourceMappingURL=mdc-chip-action.js.map

/***/ }),

/***/ "@aurelia-mdc-web/chips/mdc-chip-set/mdc-chip-set":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/chips/dist/native-modules/mdc-chip-set/mdc-chip-set.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcChipSet": function() { return /* binding */ MdcChipSet; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);
/* harmony import */ var _material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/chips */ 1771);
/* harmony import */ var _material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/chips */ 9330);
/* harmony import */ var _material_dom_announce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/dom/announce */ 8774);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");






_material_chips__WEBPACK_IMPORTED_MODULE_3__.MDCChipSetEvents.INTERACTION = _material_chips__WEBPACK_IMPORTED_MODULE_3__.MDCChipSetEvents.INTERACTION.toLowerCase();
_material_chips__WEBPACK_IMPORTED_MODULE_3__.MDCChipSetEvents.REMOVAL = _material_chips__WEBPACK_IMPORTED_MODULE_3__.MDCChipSetEvents.REMOVAL.toLowerCase();
_material_chips__WEBPACK_IMPORTED_MODULE_3__.MDCChipSetEvents.SELECTION = _material_chips__WEBPACK_IMPORTED_MODULE_3__.MDCChipSetEvents.SELECTION.toLowerCase();
var chipSetId = 0;
var MdcChipSet = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(MdcChipSet, _super);
    function MdcChipSet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "mdc-chip-set-".concat(++chipSetId);
        return _this;
    }
    MdcChipSet.prototype.handleChipInteraction = function (event) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleChipInteraction(event);
    };
    MdcChipSet.prototype.handleChipAnimation = function (event) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleChipAnimation(event);
    };
    MdcChipSet.prototype.handleChipNavigation = function (event) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleChipNavigation(event);
    };
    MdcChipSet.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            announceMessage: function (message) {
                (0,_material_dom_announce__WEBPACK_IMPORTED_MODULE_5__.announce)(message);
            },
            emitEvent: function (eventName, eventDetail) {
                _this.emit(eventName, eventDetail, true /* shouldBubble */);
            },
            getAttribute: function (attrName) { return _this.root.getAttribute(attrName); },
            getChipActionsAtIndex: function (index) {
                if (!_this.isIndexValid(index)) {
                    return [];
                }
                return _this.chips[index].getActions();
            },
            getChipCount: function () { return _this.chips.length; },
            getChipIdAtIndex: function (index) {
                if (!_this.isIndexValid(index)) {
                    return '';
                }
                return _this.chips[index].getElementID();
            },
            getChipIndexById: function (id) {
                return _this.chips.findIndex(function (chip) { return chip.getElementID() === id; });
            },
            isChipFocusableAtIndex: function (index, action) {
                if (!_this.isIndexValid(index)) {
                    return false;
                }
                return _this.chips[index].isActionFocusable(action);
            },
            isChipSelectableAtIndex: function (index, action) {
                if (!_this.isIndexValid(index)) {
                    return false;
                }
                return _this.chips[index].isActionSelectable(action);
            },
            isChipSelectedAtIndex: function (index, action) {
                if (!_this.isIndexValid(index)) {
                    return false;
                }
                return _this.chips[index].isActionSelected(action);
            },
            removeChipAtIndex: function (index) {
                if (!_this.isIndexValid(index)) {
                    return;
                }
                _this.chips[index].destroy();
                _this.chips[index].remove();
                _this.chips.splice(index, 1);
            },
            setChipFocusAtIndex: function (index, action, focus) {
                if (!_this.isIndexValid(index)) {
                    return;
                }
                _this.chips[index].setActionFocus(action, focus);
            },
            setChipSelectedAtIndex: function (index, action, selected) {
                if (!_this.isIndexValid(index)) {
                    return;
                }
                _this.chips[index].setActionSelected(action, selected);
            },
            startChipAnimationAtIndex: function (index, animation) {
                if (!_this.isIndexValid(index)) {
                    return;
                }
                _this.chips[index].startAnimation(animation);
            },
        };
        // Default to the primary foundation
        return new _material_chips__WEBPACK_IMPORTED_MODULE_6__.MDCChipSetFoundation(adapter);
    };
    MdcChipSet.prototype.isIndexValid = function (index) {
        return index > -1 && index < this.chips.length;
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcChipSet.prototype, "overflow", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.children)('mdc-chip'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)
    ], MdcChipSet.prototype, "chips", void 0);
    MdcChipSet = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-chip-set.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-chip-set')
    ], MdcChipSet);
    return MdcChipSet;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_2__.MdcComponent));

//# sourceMappingURL=mdc-chip-set.js.map

/***/ }),

/***/ "@aurelia-mdc-web/chips/mdc-chip/mdc-chip":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/chips/dist/native-modules/mdc-chip/mdc-chip.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcChip": function() { return /* binding */ MdcChip; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_chips_chip_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/chips/chip/foundation */ 7568);
/* harmony import */ var _material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/chips */ 1877);
/* harmony import */ var _material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/chips */ 8510);






_material_chips__WEBPACK_IMPORTED_MODULE_3__.MDCChipEvents.INTERACTION = _material_chips__WEBPACK_IMPORTED_MODULE_3__.MDCChipEvents.INTERACTION.toLowerCase();
_material_chips__WEBPACK_IMPORTED_MODULE_3__.MDCChipEvents.ANIMATION = _material_chips__WEBPACK_IMPORTED_MODULE_3__.MDCChipEvents.ANIMATION.toLowerCase();
_material_chips__WEBPACK_IMPORTED_MODULE_3__.MDCChipEvents.NAVIGATION = _material_chips__WEBPACK_IMPORTED_MODULE_3__.MDCChipEvents.NAVIGATION.toLowerCase();
var chipId = 0;
/**
 * @selector mdc-chip
 * @emits mdcchip:interaction | Indicates the chip was interacted with (via click/tap or Enter key)
 * @emits mdcchip:removal | Indicates the chip removal event from a chip set
 * @emits mdcchip:selection | Indicates a selection event has occurred on a chip
 */
var MdcChip = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(MdcChip, _super);
    function MdcChip(root) {
        var _this = _super.call(this, root) || this;
        defineMdcChipElementApis(_this.root);
        _this.root.id = "mdc-chip-".concat(++chipId);
        return _this;
    }
    MdcChip_1 = MdcChip;
    MdcChip.processContent = function (_viewCompiler, _resources, element) {
        var primaryAction = element.querySelector('[mdc-chip-action]:not([trailing])');
        primaryAction === null || primaryAction === void 0 ? void 0 : primaryAction.setAttribute('slot', 'primary-action');
        var trailingAction = element.querySelector('[mdc-chip-action][trailing]');
        trailingAction === null || trailingAction === void 0 ? void 0 : trailingAction.setAttribute('slot', trailingAction.hasAttribute('non-navigable') ? 'non-navigable-trailing-action' : 'trailing-action');
        return true;
    };
    Object.defineProperty(MdcChip.prototype, "selected", {
        /**
         * @return Whether the chip is selected.
         */
        get: function () {
            var _a, _b;
            return (_b = (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.isActionSelected(_material_chips__WEBPACK_IMPORTED_MODULE_5__.MDCChipActionType.PRIMARY)) !== null && _b !== void 0 ? _b : this._selected;
        },
        /** Sets selected state on the chip. */
        set: function (selected) {
            var _a;
            this._selected = selected;
            (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setActionSelected(_material_chips__WEBPACK_IMPORTED_MODULE_5__.MDCChipActionType.PRIMARY, selected);
        },
        enumerable: false,
        configurable: true
    });
    MdcChip.prototype.filterChanged = function () {
        if (this.filter) {
            this.root.setAttribute('role', 'presentation');
        }
        else {
            this.root.setAttribute('role', 'row');
        }
    };
    // eslint-disable-next-line @typescript-eslint/require-await
    MdcChip.prototype.initialise = function () {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var primaryAction, trailingAction;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_c) {
                this.actions = new Map();
                primaryAction = (_a = this.root.querySelector('[mdc-chip-action]:not([trailing])')) === null || _a === void 0 ? void 0 : _a.au.controller.viewModel;
                this.actions.set(_material_chips__WEBPACK_IMPORTED_MODULE_5__.MDCChipActionType.PRIMARY, primaryAction);
                trailingAction = (_b = this.root.querySelector('[mdc-chip-action][trailing]')) === null || _b === void 0 ? void 0 : _b.au.controller.viewModel;
                if (trailingAction) {
                    this.actions.set(_material_chips__WEBPACK_IMPORTED_MODULE_5__.MDCChipActionType.TRAILING, trailingAction);
                }
                return [2 /*return*/];
            });
        });
    };
    MdcChip.prototype.initialSyncWithDOM = function () {
        if (this._selected !== undefined) {
            this.selected = this._selected;
        }
    };
    /** Set focus to the chip. */
    MdcChip.prototype.focus = function () {
        this.root.focus();
    };
    MdcChip.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) {
                _this.root.classList.add(className);
            },
            emitEvent: function (eventName, eventDetail) {
                _this.emit(eventName, eventDetail, true /* shouldBubble */);
            },
            getActions: function () {
                var e_1, _a;
                var actions = [];
                try {
                    for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__values)(_this.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _d = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)(_c.value, 1), key = _d[0];
                        actions.push(key);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return actions;
            },
            getAttribute: function (attrName) { return _this.root.getAttribute(attrName); },
            getElementID: function () { return _this.root.id; },
            getOffsetWidth: function () {
                return _this.root.offsetWidth;
            },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            isActionSelectable: function (actionType) {
                var action = _this.actions.get(actionType);
                if (action) {
                    return action.selectable;
                }
                return false;
            },
            isActionSelected: function (actionType) {
                var action = _this.actions.get(actionType);
                if (action) {
                    return action.selected;
                }
                return false;
            },
            isActionFocusable: function (actionType) {
                var action = _this.actions.get(actionType);
                if (action) {
                    return action.isFocusable();
                }
                return false;
            },
            isActionDisabled: function (actionType) {
                var action = _this.actions.get(actionType);
                if (action) {
                    return action.disabled;
                }
                return false;
            },
            isRTL: function () { return window.getComputedStyle(_this.root).getPropertyValue('direction') === 'rtl'; },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            setActionDisabled: function (actionType, isDisabled) {
                var action = _this.actions.get(actionType);
                if (action) {
                    action.disabled = isDisabled;
                }
            },
            setActionFocus: function (actionType, behavior) {
                var action = _this.actions.get(actionType);
                if (action) {
                    action.setFocus(behavior);
                }
            },
            setActionSelected: function (actionType, isSelected) {
                var action = _this.actions.get(actionType);
                if (action) {
                    if (action.selected !== isSelected) {
                        action.selected = isSelected;
                    }
                }
            },
            setStyleProperty: function (prop, value) {
                _this.root.style.setProperty(prop, value);
            },
        };
        // Default to the primary foundation
        return new _material_chips_chip_foundation__WEBPACK_IMPORTED_MODULE_6__.MDCChipFoundation(adapter);
    };
    MdcChip.prototype.handleActionInteraction = function (event) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleActionInteraction(event);
        this.emit('change', {}, true);
    };
    MdcChip.prototype.handleActionNavigation = function (event) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleActionNavigation(event);
    };
    MdcChip.prototype.handleAnimationEnd = function (event) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleAnimationEnd(event);
    };
    MdcChip.prototype.handleTransitionEnd = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleTransitionEnd();
    };
    MdcChip.prototype.getActions = function () {
        var _a, _b;
        return (_b = (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.getActions()) !== null && _b !== void 0 ? _b : [];
    };
    MdcChip.prototype.getElementID = function () {
        var _a, _b;
        return (_b = (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.getElementID()) !== null && _b !== void 0 ? _b : '';
    };
    MdcChip.prototype.isActionFocusable = function (action) {
        return this.foundation.isActionFocusable(action);
    };
    MdcChip.prototype.isActionSelectable = function (action) {
        return this.foundation.isActionSelectable(action);
    };
    MdcChip.prototype.isActionSelected = function (action) {
        return this.foundation.isActionSelected(action);
    };
    MdcChip.prototype.setActionFocus = function (action, focus) {
        this.foundation.setActionFocus(action, focus);
    };
    MdcChip.prototype.setActionSelected = function (action, isSelected) {
        this.foundation.setActionSelected(action, isSelected);
    };
    MdcChip.prototype.startAnimation = function (animation) {
        this.foundation.startAnimation(animation);
    };
    MdcChip.prototype.remove = function () {
        var parent = this.root.parentNode;
        if (parent !== null) {
            parent.removeChild(this.root);
        }
    };
    var MdcChip_1;
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcChip.prototype, "disabled", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcChip.prototype, "filter", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
    ], MdcChip.prototype, "icon", void 0);
    MdcChip = MdcChip_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-chip.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-chip'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.processContent)(MdcChip_1.processContent),
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [Object])
    ], MdcChip);
    return MdcChip;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_2__.MdcComponent));

function defineMdcChipElementApis(element) {
    Object.defineProperties(element, {
        type: {
            value: 'checkbox',
        },
        checked: {
            get: function () {
                return this.au.controller.viewModel.selected;
            },
            set: function (value) {
                this.au.controller.viewModel.selected = value;
            },
            configurable: true
        },
        focus: {
            value: function () {
                this.au.controller.viewModel.focus();
            },
            configurable: true
        }
    });
}
//# sourceMappingURL=mdc-chip.js.map

/***/ }),

/***/ "@aurelia-mdc-web/circular-progress":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/circular-progress/dist/native-modules/index.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcCircularProgress": function() { return /* reexport safe */ _mdc_circular_progress__WEBPACK_IMPORTED_MODULE_1__.MdcCircularProgress; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_circular_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-circular-progress */ "@aurelia-mdc-web/circular-progress/mdc-circular-progress");


function configure(config) {
    config.globalResources([
        './mdc-circular-progress'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/circular-progress/mdc-circular-progress":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/circular-progress/dist/native-modules/mdc-circular-progress.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcCircularProgress": function() { return /* binding */ MdcCircularProgress; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_circular_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/circular-progress */ 8515);
/* harmony import */ var _material_circular_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/circular-progress */ 4295);
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");





/**
 * @selector mdc-circular-progress
 */
var MdcCircularProgress = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(MdcCircularProgress, _super);
    function MdcCircularProgress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.radius = 47.5;
        /** Size in pixels */
        _this.size = 100;
        /** Stroke width in pixels */
        _this.strokeWidth = 10;
        return _this;
    }
    MdcCircularProgress.prototype.sizeChanged = function () {
        this.updateSizeAndStroke();
    };
    MdcCircularProgress.prototype.strokeWidthChanged = function () {
        this.updateSizeAndStroke();
    };
    MdcCircularProgress.prototype.progressChanged = function () {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var determinate;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _c.sent();
                        determinate = this.progress !== undefined && !isNaN(this.progress);
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setDeterminate(determinate);
                        if (determinate) {
                            (_b = this.foundation) === null || _b === void 0 ? void 0 : _b.setProgress(this.progress);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcCircularProgress.prototype.bind = function () {
        this.updateSizeAndStroke();
    };
    MdcCircularProgress.prototype.updateSizeAndStroke = function () {
        var _a;
        this.radius = (this.size - 4) / 2 - this.strokeWidth;
        // foundation gets the radius from the element itself
        // set the attribute explicitly to avoid issues related to async binding
        (_a = this.determinateCircle_) === null || _a === void 0 ? void 0 : _a.setAttribute('r', this.radius.toString());
        this.strokeDasharray = 2 * this.radius * Math.PI;
        this.strokeDashoffset = this.strokeDasharray / 2;
    };
    // eslint-disable-next-line @typescript-eslint/require-await
    MdcCircularProgress.prototype.initialise = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                this.progressChanged();
                return [2 /*return*/];
            });
        });
    };
    MdcCircularProgress.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            getDeterminateCircleAttribute: function (attributeName) { var _a, _b; return (_b = (_a = _this.determinateCircle_) === null || _a === void 0 ? void 0 : _a.getAttribute(attributeName)) !== null && _b !== void 0 ? _b : null; },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            removeAttribute: function (attributeName) { return _this.root.removeAttribute(attributeName); },
            setAttribute: function (attributeName, value) { return _this.root.setAttribute(attributeName, value); },
            setDeterminateCircleAttribute: function (attributeName, value) {
                var _a;
                if (attributeName === _material_circular_progress__WEBPACK_IMPORTED_MODULE_4__.strings.STROKE_DASHOFFSET) {
                    // set offset via binding, otherwise it gets overwritten
                    _this.strokeDashoffset = parseInt(value);
                }
                else {
                    (_a = _this.determinateCircle_) === null || _a === void 0 ? void 0 : _a.setAttribute(attributeName, value);
                }
            },
        };
        return new _material_circular_progress__WEBPACK_IMPORTED_MODULE_5__.MDCCircularProgressFoundation(adapter);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Number)
    ], MdcCircularProgress.prototype, "size", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Number)
    ], MdcCircularProgress.prototype, "strokeWidth", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Number)
    ], MdcCircularProgress.prototype, "progress", void 0);
    MdcCircularProgress = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.useView)('./mdc-circular-progress.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.customElement)('mdc-circular-progress')
    ], MdcCircularProgress);
    return MdcCircularProgress;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-circular-progress.js.map

/***/ }),

/***/ "@aurelia-mdc-web/data-table":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/data-table/dist/native-modules/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDataTable": function() { return /* reexport safe */ _mdc_data_table__WEBPACK_IMPORTED_MODULE_1__.MdcDataTable; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_data_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-data-table */ "@aurelia-mdc-web/data-table/mdc-data-table");


function configure(config) {
    config.globalResources([
        './mdc-data-table',
        './mdc-data-table-row'
    ]);
    config.aurelia.use
        .plugin('@aurelia-mdc-web/checkbox')
        .plugin('@aurelia-mdc-web/icon')
        .plugin('@aurelia-mdc-web/linear-progress')
        .plugin('@aurelia-mdc-web/select');
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/data-table/mdc-data-table-row":
/*!********************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/data-table/dist/native-modules/mdc-data-table-row.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDataTableRow": function() { return /* binding */ MdcDataTableRow; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _material_data_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/data-table */ 8433);



/**
 * Required. Marks the table row.
 * @selector [mdc-data-table-row]
 */
var MdcDataTableRow = /** @class */ (function () {
    function MdcDataTableRow(root) {
        this.root = root;
    }
    MdcDataTableRow.prototype.attached = function () {
        var e_1, _a;
        this.root.classList.add(_material_data_table__WEBPACK_IMPORTED_MODULE_1__.cssClasses.ROW);
        var cells = this.root.querySelectorAll('th,td');
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__values)(Array.from(cells)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var cell = _c.value;
                cell.classList.add(_material_data_table__WEBPACK_IMPORTED_MODULE_1__.cssClasses.CELL);
                cell.classList.toggle(_material_data_table__WEBPACK_IMPORTED_MODULE_1__.cssClasses.CELL_NUMERIC, cell.hasAttribute('numeric'));
                if (cell.tagName === 'TH') {
                    cell.setAttribute('scope', 'row');
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MdcDataTableRow = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-data-table-row'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [HTMLTableRowElement])
    ], MdcDataTableRow);
    return MdcDataTableRow;
}());

//# sourceMappingURL=mdc-data-table-row.js.map

/***/ }),

/***/ "@aurelia-mdc-web/data-table/mdc-data-table":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/data-table/dist/native-modules/mdc-data-table.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDataTable": function() { return /* binding */ MdcDataTable; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/data-table */ 8433);
/* harmony import */ var _material_data_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/data-table */ 75);
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/dom/ponyfill */ 2851);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);

/* eslint-disable no-template-curly-in-string */





_material_data_table__WEBPACK_IMPORTED_MODULE_3__.events.ROW_CLICK = _material_data_table__WEBPACK_IMPORTED_MODULE_3__.events.ROW_CLICK.toLowerCase();
_material_data_table__WEBPACK_IMPORTED_MODULE_3__.events.ROW_SELECTION_CHANGED = _material_data_table__WEBPACK_IMPORTED_MODULE_3__.events.ROW_SELECTION_CHANGED.toLowerCase();
_material_data_table__WEBPACK_IMPORTED_MODULE_3__.events.SELECTED_ALL = _material_data_table__WEBPACK_IMPORTED_MODULE_3__.events.SELECTED_ALL.toLowerCase();
_material_data_table__WEBPACK_IMPORTED_MODULE_3__.events.SORTED = _material_data_table__WEBPACK_IMPORTED_MODULE_3__.events.SORTED.toLowerCase();
_material_data_table__WEBPACK_IMPORTED_MODULE_3__.events.UNSELECTED_ALL = _material_data_table__WEBPACK_IMPORTED_MODULE_3__.events.UNSELECTED_ALL.toLowerCase();
var NAVIGATION_EVENT = 'mdcdatatable:navigation';
/**
 * Use `pagination-total` replaceable part to customise pagination total label.
 * @selector mdc-data-table
 * @emits mdcdatatable:rowselectionchanged | Emitted when row checkbox is checked or unchecked
 * @emits mdcdatatable:selectedall | Emitted when header row checkbox is checked
 * @emits mdcdatatable:unselectedall | Emitted when header row checkbox is unchecked
 * @emits mdcdatatable:sorted | Emitted when clicked on sortable header cell
 * @emits mdcdatatable:rowclick | Emitted when a row is clicked
 */
var MdcDataTable = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(MdcDataTable, _super);
    function MdcDataTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Caption for the page size selector */
        _this.rowsPerPageLabel = 'Rows per page';
        /** Page sizes available for selection, e.g. [10, 25, 100, 'All'] */
        _this.pageSizes = [10, 25, 100];
        /** Selected page size */
        _this.pageSize = 10;
        return _this;
    }
    MdcDataTable_1 = MdcDataTable;
    MdcDataTable.processContent = function (_viewCompiler, _resources, element) {
        var e_1, _a;
        var table = element.querySelector('table');
        if (!table) {
            throw new Error('Have you forgotten the <table> tag in you data table markup?');
        }
        table.classList.add('mdc-data-table__table');
        table.setAttribute('aria-label', '${ariaLabel}');
        var headerRow = element.querySelector('thead>tr');
        if (!headerRow) {
            throw new Error('Have you forgotten the <thead><tr> tags in you data table markup?');
        }
        headerRow.classList.add(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.cssClasses.HEADER_ROW);
        headerRow.setAttribute('ref', 'headerRow');
        var headerCells = headerRow.querySelectorAll('th');
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__values)(Array.from(headerCells)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var th = _c.value;
                th.classList.add(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.cssClasses.HEADER_CELL);
                th.classList.toggle('mdc-data-table__header-cell--numeric', th.hasAttribute('numeric'));
                th.setAttribute('role', 'columnheader');
                th.setAttribute('scope', 'col');
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var tbody = element.querySelector('tbody');
        if (!tbody) {
            throw new Error('Have you forgotten the <tbody> tag in you data table markup?');
        }
        tbody.classList.add(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.cssClasses.CONTENT);
        tbody.setAttribute('ref', 'content');
        return true;
    };
    Object.defineProperty(MdcDataTable.prototype, "paginationPosition", {
        get: function () {
            if (typeof this.pageSize !== 'number' || this.pageSize === undefined || isNaN(this.activePage) || isNaN(this.recordsCount)) {
                return undefined;
            }
            var pagesCount = Math.ceil(this.recordsCount / this.pageSize);
            return this.activePage === 1
                ? (pagesCount === 1 ? undefined : 'first')
                : (this.activePage === pagesCount ? 'last' : 'between');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdcDataTable.prototype, "paginationTotal", {
        get: function () {
            if (typeof this.pageSize !== 'number' || this.pageSize === undefined || isNaN(this.activePage) || isNaN(this.recordsCount)) {
                return undefined;
            }
            var firstRecord = this.pageSize * (this.activePage - 1) + 1;
            var lastRecord = Math.min(this.pageSize * this.activePage, this.recordsCount);
            return "".concat(firstRecord, "-").concat(lastRecord, " of ").concat(this.recordsCount);
        },
        enumerable: false,
        configurable: true
    });
    MdcDataTable.prototype.busyChanged = function () {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _c.sent();
                        if (this.busy) {
                            (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.showProgress();
                        }
                        else {
                            (_b = this.foundation) === null || _b === void 0 ? void 0 : _b.hideProgress();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(MdcDataTable.prototype, "rowCheckboxList", {
        get: function () {
            return Array.from(this.root.querySelectorAll('tbody>tr .mdc-checkbox'))
                .map(function (x) { var _a; return (_a = x.au) === null || _a === void 0 ? void 0 : _a.controller.viewModel; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdcDataTable.prototype, "headerRowCheckbox", {
        get: function () {
            var _a;
            return (_a = this.root.querySelector('thead>tr .mdc-checkbox')) === null || _a === void 0 ? void 0 : _a.au.controller.viewModel;
        },
        enumerable: false,
        configurable: true
    });
    MdcDataTable.prototype.handleHeaderRowCheckboxChange = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleHeaderRowCheckboxChange();
    };
    MdcDataTable.prototype.handleRowCheckboxChange = function (event) {
        var _a;
        if (event.target.type === 'checkbox') {
            (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleRowCheckboxChange(event);
        }
    };
    MdcDataTable.prototype.headerRowClickListener = function (event) {
        this.handleHeaderRowClick(event);
    };
    MdcDataTable.prototype.handleNavigationClick = function (type) {
        this.emit(NAVIGATION_EVENT, { type: type }, true);
    };
    MdcDataTable.prototype.handleContentClick = function (event) {
        var _a;
        var dataRowEl = (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_5__.closest)(event.target, _material_data_table__WEBPACK_IMPORTED_MODULE_3__.selectors.ROW);
        if (!dataRowEl) {
            return;
        }
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleRowClick({
            rowId: this.getRowIdByRowElement(dataRowEl),
            row: dataRowEl,
        });
    };
    /**
     * Re-initializes header row checkbox and row checkboxes when selectable rows are added or removed from table.
     */
    MdcDataTable.prototype.layout = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.layout();
    };
    /**
     * @return Returns array of header row cell elements.
     */
    MdcDataTable.prototype.getHeaderCells = function () {
        return [].slice.call(this.root.querySelectorAll(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.selectors.HEADER_CELL));
    };
    /**
     * @return Returns array of row elements.
     */
    MdcDataTable.prototype.getRows = function () {
        return this.foundation.getRows();
    };
    /**
     * @return Returns array of selected row ids.
     */
    MdcDataTable.prototype.getSelectedRowIds = function () {
        return this.foundation.getSelectedRowIds();
    };
    /**
     * Sets selected row ids. Overwrites previously selected rows.
     * @param rowIds Array of row ids that needs to be selected.
     */
    MdcDataTable.prototype.setSelectedRowIds = function (rowIds) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setSelectedRowIds(rowIds);
    };
    MdcDataTable.prototype.handleEvent = function (evt) {
        switch (evt.currentTarget) {
            case this.header:
                switch (evt.type) {
                    case 'change':
                        this.handleHeaderRowCheckboxChange();
                        break;
                    case 'click':
                        this.handleHeaderRowClick(evt);
                        break;
                }
                break;
            case this.content:
                switch (evt.type) {
                    case 'change':
                        this.handleRowCheckboxChange(evt);
                        break;
                }
                break;
        }
    };
    MdcDataTable.prototype.initialise = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var rowCheckboxList;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.header = this.root.querySelector(".".concat(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.cssClasses.HEADER_ROW));
                        this.header.addEventListener('change', this);
                        this.header.addEventListener('click', this);
                        this.content = this.root.querySelector(".".concat(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.cssClasses.CONTENT));
                        this.content.addEventListener('change', this);
                        this.content.addEventListener('click', this);
                        rowCheckboxList = this.rowCheckboxList;
                        this.rowCheckboxList.forEach(function (x) { return x.root.classList.add(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.cssClasses.ROW_CHECKBOX); });
                        if (this.headerRowCheckbox) {
                            this.headerRowCheckbox.root.classList.add(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.cssClasses.HEADER_ROW_CHECKBOX);
                            rowCheckboxList.push(this.headerRowCheckbox);
                        }
                        return [4 /*yield*/, Promise.all(rowCheckboxList.map(function (x) { return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this, void 0, void 0, function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                                return [2 /*return*/, x.initialised];
                            }); }); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcDataTable.prototype.initialSyncWithDOM = function () {
        var _a;
        var rowCheckboxList = this.rowCheckboxList;
        for (var i = 0; i < rowCheckboxList.length; ++i) {
            if (rowCheckboxList[i].checked) {
                this.getRowByIndex(i).classList.add(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.cssClasses.ROW_SELECTED);
            }
        }
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.layout();
    };
    MdcDataTable.prototype.destroy = function () {
        this.header.removeEventListener('change', this);
        this.header.removeEventListener('click', this);
        this.content.removeEventListener('change', this);
    };
    MdcDataTable.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            getHeaderCellElements: function () { return _this.getHeaderCells(); },
            getHeaderCellCount: function () { return _this.getHeaderCells().length; },
            getAttributeByHeaderCellIndex: function (index, attribute) { return _this.getHeaderCells()[index].getAttribute(attribute); },
            setAttributeByHeaderCellIndex: function (index, attribute, value) { return _this.getHeaderCells()[index].setAttribute(attribute, value); },
            setClassNameByHeaderCellIndex: function (index, className) { return _this.getHeaderCells()[index].classList.add(className); },
            removeClassNameByHeaderCellIndex: function (index, className) {
                _this.getHeaderCells()[index].classList.remove(className);
            },
            notifySortAction: function (data) {
                _this.emit(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.events.SORTED, data, /** shouldBubble */ true);
            },
            getTableContainerHeight: function () {
                var tableContainer = _this.root.querySelector(".".concat(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.cssClasses.TABLE_CONTAINER));
                if (!tableContainer) {
                    throw new Error('MDCDataTable: Table container element not found.');
                }
                // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any
                return tableContainer.getBoundingClientRect().height;
            },
            getTableHeaderHeight: function () {
                var tableHeader = _this.root.querySelector(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.selectors.HEADER_ROW);
                if (!tableHeader) {
                    throw new Error('MDCDataTable: Table header element not found.');
                }
                return tableHeader.getBoundingClientRect().height;
            },
            setProgressIndicatorStyles: function (styles) {
                var progressIndicator = _this.root.querySelector(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.selectors.PROGRESS_INDICATOR);
                if (!progressIndicator) {
                    throw new Error('MDCDataTable: Progress indicator element not found.');
                }
                Object.assign(progressIndicator.style, styles);
            },
            addClassAtRowIndex: function (rowIndex, className) {
                _this.getRows()[rowIndex].classList.add(className);
            },
            getRowCount: function () { return _this.getRows().length; },
            getRowElements: function () { return [].slice.call(_this.root.querySelectorAll(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.selectors.ROW)); },
            getRowIdAtIndex: function (rowIndex) {
                return _this.getRows()[rowIndex].getAttribute(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.dataAttributes.ROW_ID);
            },
            getRowIndexByChildElement: function (el) { return _this.getRows().indexOf((0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_5__.closest)(el, _material_data_table__WEBPACK_IMPORTED_MODULE_3__.selectors.ROW)); },
            getSelectedRowCount: function () { return _this.root.querySelectorAll(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.selectors.ROW_SELECTED).length; },
            isCheckboxAtRowIndexChecked: function (rowIndex) { return _this.rowCheckboxList[rowIndex].checked; },
            isHeaderRowCheckboxChecked: function () { var _a, _b; return (_b = (_a = _this.headerRowCheckbox) === null || _a === void 0 ? void 0 : _a.checked) !== null && _b !== void 0 ? _b : false; },
            isRowsSelectable: function () { return !!_this.root.querySelector(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.selectors.ROW_CHECKBOX); },
            notifyRowSelectionChanged: function (data) {
                _this.emit(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.events.ROW_SELECTION_CHANGED, {
                    row: _this.getRowByIndex(data.rowIndex),
                    rowId: _this.getRowIdByIndex(data.rowIndex),
                    rowIndex: data.rowIndex,
                    selected: data.selected,
                }, /** shouldBubble */ true);
            },
            notifySelectedAll: function () {
                _this.emit(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.events.SELECTED_ALL, {}, /** shouldBubble */ true);
            },
            notifyUnselectedAll: function () {
                _this.emit(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.events.UNSELECTED_ALL, {}, /** shouldBubble */ true);
            },
            notifyRowClick: function (data) {
                _this.emit(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.events.ROW_CLICK, data, /** shouldBubble */ true);
            },
            registerHeaderRowCheckbox: function () {
                // const checkboxEl = this.root.querySelector<IMdcCheckboxElement>(selectors.HEADER_ROW_CHECKBOX);
                // this.headerRowCheckbox = checkboxEl?.au?.controller.viewModel;
            },
            registerRowCheckboxes: function () {
                // this.rowCheckboxList = [];
                // this.getRows().forEach((rowEl) => {
                //   const checkbox = rowEl.querySelector<IMdcCheckboxElement>(selectors.ROW_CHECKBOX)?.au?.controller.viewModel;
                //   if (checkbox) {
                //     this.rowCheckboxList.push(checkbox);
                //   }
                // });
            },
            removeClassAtRowIndex: function (rowIndex, className) {
                _this.getRows()[rowIndex].classList.remove(className);
            },
            setAttributeAtRowIndex: function (rowIndex, attr, value) {
                _this.getRows()[rowIndex].setAttribute(attr, value);
            },
            setHeaderRowCheckboxChecked: function (checked) {
                if (_this.headerRowCheckbox) {
                    _this.headerRowCheckbox.checked = checked;
                }
            },
            setHeaderRowCheckboxIndeterminate: function (indeterminate) {
                if (_this.headerRowCheckbox) {
                    _this.headerRowCheckbox.indeterminate = indeterminate;
                }
            },
            setRowCheckboxCheckedAtIndex: function (rowIndex, checked) {
                _this.rowCheckboxList[rowIndex].checked = checked;
            },
            setSortStatusLabelByHeaderCellIndex: function (columnIndex, sortValue) {
                var headerCell = _this.getHeaderCells()[columnIndex];
                var sortStatusLabel = headerCell.querySelector(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.selectors.SORT_STATUS_LABEL);
                if (!sortStatusLabel) {
                    return;
                }
                sortStatusLabel.textContent =
                    _this.getSortStatusMessageBySortValue(sortValue);
            }
        };
        return new _material_data_table__WEBPACK_IMPORTED_MODULE_6__.MDCDataTableFoundation(adapter);
    };
    MdcDataTable.prototype.getRowByIndex = function (index) {
        return this.getRows()[index];
    };
    MdcDataTable.prototype.getRowIdByIndex = function (index) {
        return this.getRowByIndex(index).getAttribute(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.dataAttributes.ROW_ID);
    };
    MdcDataTable.prototype.handleHeaderRowClick = function (event) {
        var _a;
        var headerCell = (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_5__.closest)(event.target, _material_data_table__WEBPACK_IMPORTED_MODULE_3__.selectors.HEADER_CELL_WITH_SORT);
        if (!headerCell) {
            return;
        }
        var columnId = headerCell.getAttribute(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.dataAttributes.COLUMN_ID);
        var columnIndex = this.getHeaderCells().indexOf(headerCell);
        if (columnIndex === -1) {
            return;
        }
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleSortAction({ columnId: columnId, columnIndex: columnIndex, headerCell: headerCell });
    };
    MdcDataTable.prototype.getSortStatusMessageBySortValue = function (sortValue) {
        switch (sortValue) {
            case _material_data_table__WEBPACK_IMPORTED_MODULE_3__.SortValue.ASCENDING:
                return _material_data_table__WEBPACK_IMPORTED_MODULE_3__.messages.SORTED_IN_ASCENDING;
            case _material_data_table__WEBPACK_IMPORTED_MODULE_3__.SortValue.DESCENDING:
                return _material_data_table__WEBPACK_IMPORTED_MODULE_3__.messages.SORTED_IN_DESCENDING;
            default:
                return '';
        }
    };
    MdcDataTable.prototype.getRowIdByRowElement = function (rowElement) {
        return rowElement.getAttribute(_material_data_table__WEBPACK_IMPORTED_MODULE_3__.dataAttributes.ROW_ID);
    };
    var MdcDataTable_1;
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcDataTable.prototype, "pagination", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
    ], MdcDataTable.prototype, "rowsPerPageLabel", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)
    ], MdcDataTable.prototype, "pageSizes", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable)({ defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.bindingMode.twoWay }),
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
    ], MdcDataTable.prototype, "pageSize", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcDataTable.prototype, "stickyHeader", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.computedFrom)('pageSize', 'recordsCount', 'activePage'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object),
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [])
    ], MdcDataTable.prototype, "paginationPosition", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
    ], MdcDataTable.prototype, "recordsCount", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
    ], MdcDataTable.prototype, "activePage", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.computedFrom)('pageSize', 'recordsCount', 'activePage'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object),
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [])
    ], MdcDataTable.prototype, "paginationTotal", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcDataTable.prototype, "busy", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcDataTable.prototype, "hoistPageSelectToBody", void 0);
    MdcDataTable = MdcDataTable_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.useView)('./mdc-data-table.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.customElement)('mdc-data-table'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.processContent)(MdcDataTable_1.processContent)
    ], MdcDataTable);
    return MdcDataTable;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-data-table.js.map

/***/ }),

/***/ "@aurelia-mdc-web/dialog":
/*!***************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/dialog/dist/native-modules/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDialog": function() { return /* reexport safe */ _mdc_dialog__WEBPACK_IMPORTED_MODULE_1__.MdcDialog; },
/* harmony export */   "MdcDialogService": function() { return /* reexport safe */ _mdc_dialog_service__WEBPACK_IMPORTED_MODULE_2__.MdcDialogService; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _material_dom_focus_trap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/focus-trap */ 1343);
/* harmony import */ var _mdc_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-dialog */ "@aurelia-mdc-web/dialog/mdc-dialog");
/* harmony import */ var _mdc_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdc-dialog-service */ 9112);




function configure(config) {
    config.globalResources([
        './mdc-dialog',
        './mdc-dialog-actions',
        './mdc-dialog-title',
        './mdc-dialog-content'
    ]);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
_material_dom_focus_trap__WEBPACK_IMPORTED_MODULE_3__.FocusTrap.prototype.getFocusableElements = function (root) {
    var focusableEls = [].slice.call(root.querySelectorAll('[autofocus], [tabindex], a, input, textarea, select, button, .mdc-select__anchor'));
    return focusableEls.filter(function (el) {
        var isDisabledOrHidden = el.getAttribute('aria-disabled') === 'true' ||
            el.getAttribute('disabled') !== null ||
            el.getAttribute('hidden') !== null ||
            el.getAttribute('aria-hidden') === 'true';
        var isTabbableAndVisible = (el.tabIndex >= 0 || el.classList.contains('mdc-select__anchor')) &&
            el.getBoundingClientRect().width > 0 &&
            !el.classList.contains('mdc-dom-focus-sentinel') && !isDisabledOrHidden;
        var isProgrammaticallyHidden = false;
        if (isTabbableAndVisible) {
            var style = getComputedStyle(el);
            isProgrammaticallyHidden =
                style.display === 'none' || style.visibility === 'hidden';
        }
        return isTabbableAndVisible && !isProgrammaticallyHidden;
    });
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/dialog/mdc-dialog-actions":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/dialog/dist/native-modules/mdc-dialog-actions.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDialogActions": function() { return /* binding */ MdcDialogActions; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * Optional. Footer area containing the dialog's action buttons.
 * @selector mdc-dialog-actions
 */
var MdcDialogActions = /** @class */ (function () {
    function MdcDialogActions() {
    }
    MdcDialogActions.prototype.buttonsChanged = function () {
        for (var i = 0; i < this.buttons.length; ++i) {
            this.buttons[i].root.classList.add('mdc-dialog__button');
        }
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.children)('.mdc-button'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Array)
    ], MdcDialogActions.prototype, "buttons", void 0);
    MdcDialogActions = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inlineView)('<template class="mdc-dialog__actions"><slot></slot></template>'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-dialog-actions')
    ], MdcDialogActions);
    return MdcDialogActions;
}());

//# sourceMappingURL=mdc-dialog-actions.js.map

/***/ }),

/***/ "@aurelia-mdc-web/dialog/mdc-dialog-content":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/dialog/dist/native-modules/mdc-dialog-content.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDialogContent": function() { return /* binding */ MdcDialogContent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * Optional. Primary content area. May contain a list, a form, or prose.
 * @selector mdc-dialog-content
 */
var MdcDialogContent = /** @class */ (function () {
    function MdcDialogContent(root) {
        this.root = root;
    }
    MdcDialogContent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inlineView)('<template class="mdc-dialog__content"><slot></slot></template>'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-dialog-content'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcDialogContent);
    return MdcDialogContent;
}());

//# sourceMappingURL=mdc-dialog-content.js.map

/***/ }),

/***/ 9112:
/*!****************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/dialog/dist/native-modules/mdc-dialog-service.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDialogService": function() { return /* binding */ MdcDialogService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dialog */ 9742);
/* harmony import */ var _aurelia_mdc_web_ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aurelia-mdc-web/ripple */ "@aurelia-mdc-web/ripple");




/** Service to open MDC dialogs */
var MdcDialogService = /** @class */ (function () {
    function MdcDialogService(viewResources, compositionEngine, container) {
        this.viewResources = viewResources;
        this.compositionEngine = compositionEngine;
        this.container = container;
    }
    /** Opens the dialog specified in the options */
    MdcDialogService.prototype.open = function (options) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var host, compositionContext, controller, dialogVm, openedResolver, openedPromise, opened, closedResolver, closedPromise, ripples, action;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        host = document.createElement('div');
                        document.body.append(host);
                        compositionContext = {
                            container: this.container,
                            viewResources: this.viewResources,
                            model: options.model,
                            viewModel: options.viewModel,
                            viewSlot: new aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.ViewSlot(host, true),
                            bindingContext: {}
                        };
                        return [4 /*yield*/, this.compositionEngine.compose(compositionContext)];
                    case 1:
                        controller = _b.sent();
                        return [4 /*yield*/, this.compositionEngine.ensureViewModel(compositionContext)];
                    case 2:
                        _b.sent();
                        controller.attached();
                        dialogVm = (_a = host.querySelector('.mdc-dialog')) === null || _a === void 0 ? void 0 : _a.au.controller.viewModel;
                        if (!dialogVm) {
                            throw new Error('MDC-DIALOG element is missing');
                        }
                        openedPromise = new Promise(function (r) { return openedResolver = r; });
                        opened = false;
                        dialogVm.root.addEventListener(_material_dialog__WEBPACK_IMPORTED_MODULE_3__.strings.OPENED_EVENT, function () {
                            opened = true;
                            openedResolver();
                        });
                        closedPromise = new Promise(function (r) { return closedResolver = r; });
                        dialogVm.root.addEventListener(_material_dialog__WEBPACK_IMPORTED_MODULE_3__.strings.CLOSED_EVENT, function (evt) {
                            if (!opened) {
                                // The dialog was closed before it was opened.
                                // Emit the event to prevent an unresolved open promise.
                                dialogVm.emit(_material_dialog__WEBPACK_IMPORTED_MODULE_3__.strings.OPENED_EVENT, {});
                            }
                            closedResolver(evt.detail.action);
                        });
                        return [4 /*yield*/, dialogVm.initialised];
                    case 3:
                        _b.sent();
                        dialogVm.open();
                        return [4 /*yield*/, openedPromise];
                    case 4:
                        _b.sent();
                        ripples = Array.from(dialogVm.root.querySelectorAll(".".concat(_aurelia_mdc_web_ripple__WEBPACK_IMPORTED_MODULE_1__.MdcRipple.ATTRIBUTE_CLASS)));
                        return [4 /*yield*/, Promise.all(ripples.map(function (x) { return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(_this, void 0, void 0, function () {
                                var _a;
                                return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, x.au['mdc-ripple'].viewModel.initialised];
                                        case 1:
                                            _b.sent();
                                            (_a = x.au['mdc-ripple'].viewModel.foundation) === null || _a === void 0 ? void 0 : _a.layout();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, closedPromise];
                    case 6:
                        action = _b.sent();
                        controller.detached();
                        host.remove();
                        return [2 /*return*/, action];
                }
            });
        });
    };
    MdcDialogService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.ViewResources, aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.CompositionEngine, aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.Container),
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.ViewResources, aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.CompositionEngine, aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.Container])
    ], MdcDialogService);
    return MdcDialogService;
}());

//# sourceMappingURL=mdc-dialog-service.js.map

/***/ }),

/***/ "@aurelia-mdc-web/dialog/mdc-dialog-title":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/dialog/dist/native-modules/mdc-dialog-title.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDialogTitle": function() { return /* binding */ MdcDialogTitle; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * Optional. The area containing the dialog's title.
 * @selector mdc-dialog-title
 */
var MdcDialogTitle = /** @class */ (function () {
    function MdcDialogTitle() {
    }
    MdcDialogTitle = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inlineView)('<template class="mdc-dialog__title"><slot></slot></template>'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-dialog-title')
    ], MdcDialogTitle);
    return MdcDialogTitle;
}());

//# sourceMappingURL=mdc-dialog-title.js.map

/***/ }),

/***/ "@aurelia-mdc-web/dialog/mdc-dialog":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/dialog/dist/native-modules/mdc-dialog.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDialog": function() { return /* binding */ MdcDialog; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/dialog */ 9742);
/* harmony import */ var _material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/dialog */ 7677);
/* harmony import */ var _material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material/dialog */ 4687);
/* harmony import */ var _mdc_dialog_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-dialog-content */ "@aurelia-mdc-web/dialog/mdc-dialog-content");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/dom/ponyfill */ 2851);
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);







var LAYOUT_EVENTS = ['resize', 'orientationchange'];
var dialogId = 0;
_material_dialog__WEBPACK_IMPORTED_MODULE_4__.strings.OPENING_EVENT = _material_dialog__WEBPACK_IMPORTED_MODULE_4__.strings.OPENING_EVENT.toLowerCase();
_material_dialog__WEBPACK_IMPORTED_MODULE_4__.strings.CLOSING_EVENT = _material_dialog__WEBPACK_IMPORTED_MODULE_4__.strings.CLOSING_EVENT.toLowerCase();
_material_dialog__WEBPACK_IMPORTED_MODULE_4__.strings.OPENED_EVENT = _material_dialog__WEBPACK_IMPORTED_MODULE_4__.strings.OPENED_EVENT.toLowerCase();
/**
 * @selector mdc-dialog
 */
var MdcDialog = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(MdcDialog, _super);
    function MdcDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = ++dialogId;
        _this.contentId = "mdc-dialog-content-".concat(_this.id);
        _this.titleId = "mdc-dialog-title-".concat(_this.id);
        _this.getInitialFocusEl = function () {
            return _this.root.querySelector("[".concat(_material_dialog__WEBPACK_IMPORTED_MODULE_4__.strings.INITIAL_FOCUS_ATTRIBUTE, "] input, [").concat(_material_dialog__WEBPACK_IMPORTED_MODULE_4__.strings.INITIAL_FOCUS_ATTRIBUTE, "] .mdc-select__anchor"));
        };
        return _this;
    }
    MdcDialog.prototype.scrimClickActionChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setScrimClickAction(this.scrimClickAction);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcDialog.prototype.escapeKeyActionChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setEscapeKeyAction(this.escapeKeyAction);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(MdcDialog.prototype, "defaultButton", {
        get: function () {
            return this.root.querySelector("[".concat(_material_dialog__WEBPACK_IMPORTED_MODULE_4__.strings.BUTTON_DEFAULT_ATTRIBUTE, "]"));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdcDialog.prototype, "content", {
        get: function () {
            return this.root.querySelector("".concat(_material_dialog__WEBPACK_IMPORTED_MODULE_4__.strings.CONTENT_SELECTOR));
        },
        enumerable: false,
        configurable: true
    });
    // eslint-disable-next-line @typescript-eslint/require-await
    MdcDialog.prototype.initialise = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            var content, title;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_a) {
                this.buttons = [].slice.call(this.root.querySelectorAll(_material_dialog__WEBPACK_IMPORTED_MODULE_4__.strings.BUTTON_SELECTOR));
                content = this.root.querySelector('mdc-dialog-content');
                content === null || content === void 0 ? void 0 : content.setAttribute('id', this.contentId);
                title = this.root.querySelector('mdc-dialog-title');
                title === null || title === void 0 ? void 0 : title.setAttribute('id', this.titleId);
                return [2 /*return*/];
            });
        });
    };
    MdcDialog.prototype.createFocusTrap = function () {
        var _a;
        (_a = this.mdcFocusTrap) === null || _a === void 0 ? void 0 : _a.create();
    };
    MdcDialog.prototype.destroy = function () {
        this.handleClosing_();
        _super.prototype.destroy.call(this);
    };
    MdcDialog.prototype.handleClick_ = function (evt) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleClick(evt);
        return true;
    };
    MdcDialog.prototype.handleKeydown_ = function (evt) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleKeydown(evt);
        return true;
    };
    MdcDialog.prototype.handleEvent = function (evt) {
        var _a, _b;
        switch (evt.currentTarget) {
            case window:
                switch (evt.type) {
                    case 'resize':
                    case 'orientationchange':
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.layout();
                        break;
                }
                break;
            case document:
                switch (evt.type) {
                    case 'keydown':
                        (_b = this.foundation) === null || _b === void 0 ? void 0 : _b.handleDocumentKeydown(evt);
                        break;
                }
                break;
        }
    };
    MdcDialog.prototype.handleOpening_ = function () {
        var _this = this;
        LAYOUT_EVENTS.forEach(function (evtType) { return window.addEventListener(evtType, _this); });
        document.addEventListener('keydown', this);
    };
    MdcDialog.prototype.handleClosing_ = function () {
        var _this = this;
        LAYOUT_EVENTS.forEach(function (evtType) { return window.removeEventListener(evtType, _this); });
        document.removeEventListener('keydown', this);
    };
    /** Opens the dialog */
    MdcDialog.prototype.open = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.open();
    };
    /**
     * Closes the dialog
     * @param action Action to close the dialog with
     */
    MdcDialog.prototype.close = function (action) {
        var _a;
        if (action === void 0) { action = ''; }
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.close(action);
    };
    MdcDialog.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addBodyClass: function (className) { return document.body.classList.add(className); },
            addClass: function (className) { return _this.root.classList.add(className); },
            areButtonsStacked: function () { return _material_dialog__WEBPACK_IMPORTED_MODULE_6__.areTopsMisaligned(_this.buttons); },
            clickDefaultButton: function () {
                if (_this.defaultButton) {
                    _this.defaultButton.click();
                }
            },
            eventTargetMatches: function (target, selector) {
                return target ? (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_7__.matches)(target, selector) : false;
            },
            getActionFromEvent: function (evt) {
                var _a;
                if (!evt.target) {
                    return '';
                }
                var element = (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_7__.closest)(evt.target, "[".concat(_material_dialog__WEBPACK_IMPORTED_MODULE_4__.strings.ACTION_ATTRIBUTE, "]"));
                return (_a = element === null || element === void 0 ? void 0 : element.getAttribute(_material_dialog__WEBPACK_IMPORTED_MODULE_4__.strings.ACTION_ATTRIBUTE)) !== null && _a !== void 0 ? _a : null;
            },
            getInitialFocusEl: function () { return _this.getInitialFocusEl(); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            isContentScrollable: function () { return _material_dialog__WEBPACK_IMPORTED_MODULE_6__.isScrollable(_this.content); },
            notifyClosed: function (action) { return _this.emit(_material_dialog__WEBPACK_IMPORTED_MODULE_4__.strings.CLOSED_EVENT, action ? { action: action } : {}); },
            notifyClosing: function (action) { return _this.emit(_material_dialog__WEBPACK_IMPORTED_MODULE_4__.strings.CLOSING_EVENT, action ? { action: action } : {}); },
            notifyOpened: function () { return _this.emit(_material_dialog__WEBPACK_IMPORTED_MODULE_4__.strings.OPENED_EVENT, {}); },
            notifyOpening: function () { return _this.emit(_material_dialog__WEBPACK_IMPORTED_MODULE_4__.strings.OPENING_EVENT, {}); },
            releaseFocus: function () {
                var _a;
                (_a = _this.mdcFocusTrap) === null || _a === void 0 ? void 0 : _a.releaseFocus();
            },
            removeBodyClass: function (className) { return document.body.classList.remove(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            reverseButtons: function () {
                _this.buttons.reverse();
                _this.buttons.forEach(function (button) {
                    button.parentElement.appendChild(button);
                });
            },
            trapFocus: function () {
                var _a;
                (_a = _this.mdcFocusTrap) === null || _a === void 0 ? void 0 : _a.trapFocus();
            },
            registerContentEventHandler: function (evt, handler) {
                if (_this.content instanceof HTMLElement) {
                    _this.content.addEventListener(evt, handler);
                }
            },
            deregisterContentEventHandler: function (evt, handler) {
                if (_this.content instanceof HTMLElement) {
                    _this.content.removeEventListener(evt, handler);
                }
            },
            isScrollableContentAtTop: function () {
                return _material_dialog__WEBPACK_IMPORTED_MODULE_6__.isScrollAtTop(_this.content);
            },
            isScrollableContentAtBottom: function () {
                return _material_dialog__WEBPACK_IMPORTED_MODULE_6__.isScrollAtBottom(_this.content);
            },
            registerWindowEventHandler: function (evt, handler) {
                window.addEventListener(evt, handler);
            },
            deregisterWindowEventHandler: function (evt, handler) {
                window.removeEventListener(evt, handler);
            },
        };
        return new _material_dialog__WEBPACK_IMPORTED_MODULE_8__.MDCDialogFoundation(adapter);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.child)('mdc-dialog-content'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", _mdc_dialog_content__WEBPACK_IMPORTED_MODULE_1__.MdcDialogContent)
    ], MdcDialog.prototype, "content_", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)
    ], MdcDialog.prototype, "scrimClickAction", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)
    ], MdcDialog.prototype, "escapeKeyAction", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcDialog.prototype, "delayFocusTrap", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcDialog.prototype, "fullscreen", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcDialog.prototype, "sheet", void 0);
    MdcDialog = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.useView)('./mdc-dialog.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.customElement)('mdc-dialog')
    ], MdcDialog);
    return MdcDialog;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-dialog.js.map

/***/ }),

/***/ "@aurelia-mdc-web/drawer":
/*!***************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/drawer/dist/native-modules/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDrawer": function() { return /* reexport safe */ _mdc_drawer__WEBPACK_IMPORTED_MODULE_1__.MdcDrawer; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-drawer */ "@aurelia-mdc-web/drawer/mdc-drawer");


function configure(config) {
    config.globalResources([
        './mdc-drawer',
        './mdc-drawer-content',
        './mdc-drawer-app-content',
        './mdc-drawer-header/mdc-drawer-header'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/drawer/mdc-drawer-app-content":
/*!********************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/drawer/dist/native-modules/mdc-drawer-app-content.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDrawerAppContent": function() { return /* binding */ MdcDrawerAppContent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * Mandatory for dismissible variant only. Sibling element that is resized when the drawer opens/closes.
 * @selector mdc-drawer-app-content
 */
var MdcDrawerAppContent = /** @class */ (function () {
    function MdcDrawerAppContent() {
    }
    MdcDrawerAppContent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inlineView)('<template class="mdc-drawer-app-content"><slot></slot></template>'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-drawer-app-content')
    ], MdcDrawerAppContent);
    return MdcDrawerAppContent;
}());

//# sourceMappingURL=mdc-drawer-app-content.js.map

/***/ }),

/***/ "@aurelia-mdc-web/drawer/mdc-drawer-content":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/drawer/dist/native-modules/mdc-drawer-content.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDrawerContent": function() { return /* binding */ MdcDrawerContent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * Scrollable content area of the drawer
 * @selector mdc-drawer-content
 */
var MdcDrawerContent = /** @class */ (function () {
    function MdcDrawerContent() {
    }
    MdcDrawerContent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inlineView)('<template class="mdc-drawer__content"><slot></slot></template>'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-drawer-content')
    ], MdcDrawerContent);
    return MdcDrawerContent;
}());

//# sourceMappingURL=mdc-drawer-content.js.map

/***/ }),

/***/ "@aurelia-mdc-web/drawer/mdc-drawer-header/mdc-drawer-header":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/drawer/dist/native-modules/mdc-drawer-header/mdc-drawer-header.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDrawerHeader": function() { return /* binding */ MdcDrawerHeader; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * Optional. Non-scrollable element that exists at the top of the drawer.
 * @selector mdc-drawer-header
 */
var MdcDrawerHeader = /** @class */ (function () {
    function MdcDrawerHeader() {
    }
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)
    ], MdcDrawerHeader.prototype, "title", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", String)
    ], MdcDrawerHeader.prototype, "subtitle", void 0);
    MdcDrawerHeader = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-drawer-header.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-drawer-header')
    ], MdcDrawerHeader);
    return MdcDrawerHeader;
}());

//# sourceMappingURL=mdc-drawer-header.js.map

/***/ }),

/***/ "@aurelia-mdc-web/drawer/mdc-drawer":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/drawer/dist/native-modules/mdc-drawer.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDrawer": function() { return /* binding */ MdcDrawer; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/drawer */ 6658);
/* harmony import */ var _material_drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/drawer */ 3433);
/* harmony import */ var _material_drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/drawer */ 3246);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-pal */ 1015);





_material_drawer__WEBPACK_IMPORTED_MODULE_3__.strings.CLOSE_EVENT = _material_drawer__WEBPACK_IMPORTED_MODULE_3__.strings.CLOSE_EVENT.toLowerCase();
_material_drawer__WEBPACK_IMPORTED_MODULE_3__.strings.OPEN_EVENT = _material_drawer__WEBPACK_IMPORTED_MODULE_3__.strings.OPEN_EVENT.toLowerCase();
/**
 * @selector mdc-drawer
 * @emits mdcdrawer:closed | Event dispatched on drawer close
 * @emits mdcdrawer:opened | Event dispatched on drawer open
 */
var MdcDrawer = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(MdcDrawer, _super);
    function MdcDrawer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Set the drawer implementation */
        _this.type = 'standard';
        return _this;
    }
    Object.defineProperty(MdcDrawer.prototype, "open", {
        /**
         * @return boolean Proxies to the foundation's `open`/`close` methods.
         * Also returns true if drawer is in the open position.
         */
        get: function () {
            return this.foundation.isOpen();
        },
        /**
         * Toggles the drawer open and closed.
         */
        set: function (isOpen) {
            var _a, _b;
            if (isOpen) {
                (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.open();
            }
            else {
                (_b = this.foundation) === null || _b === void 0 ? void 0 : _b.close();
            }
        },
        enumerable: false,
        configurable: true
    });
    // eslint-disable-next-line @typescript-eslint/require-await
    MdcDrawer.prototype.initialise = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                if (this.root.parentElement.clientWidth < 900) {
                    this.type = 'modal';
                }
                return [2 /*return*/];
            });
        });
    };
    MdcDrawer.prototype.initialSyncWithDOM = function () {
        var _this = this;
        if (this.type === 'modal') {
            this.scrim_ = document.createElement('div');
            this.scrim_.classList.add('mdc-drawer-scrim');
            this.root.insertAdjacentElement('afterend', this.scrim_);
            if (this.scrim_) {
                this.handleScrimClick_ = function () {
                    _this.open = false;
                    return _this.foundation.handleScrimClick();
                };
                this.scrim_.addEventListener('click', this.handleScrimClick_);
            }
        }
    };
    MdcDrawer.prototype.handleKeydown_ = function (evt) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleKeydown(evt);
        return true;
    };
    MdcDrawer.prototype.handleTransitionEnd_ = function (evt) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleTransitionEnd(evt);
        return true;
    };
    MdcDrawer.prototype.destroy = function () {
        var MODAL = _material_drawer__WEBPACK_IMPORTED_MODULE_3__.cssClasses.MODAL;
        if (this.scrim_ && this.handleScrimClick_ && this.root.classList.contains(MODAL)) {
            this.scrim_.removeEventListener('click', this.handleScrimClick_);
            // Ensure drawer is closed to hide scrim and release focus
            this.open = false;
        }
    };
    MdcDrawer.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            elementHasClass: function (element, className) { return element.classList.contains(className); },
            saveFocus: function () { return _this.previousFocus_ = document.activeElement; },
            restoreFocus: function () {
                var previousFocus = _this.previousFocus_;
                if ((previousFocus === null || previousFocus === void 0 ? void 0 : previousFocus.focus) && _this.root.contains(document.activeElement)) {
                    previousFocus.focus();
                }
            },
            focusActiveNavigationItem: function () {
                var activeNavItemEl = _this.root.querySelector('.mdc-deprecated-list-item--activated');
                if (activeNavItemEl) {
                    activeNavItemEl.focus();
                }
            },
            notifyClose: function () { return _this.emit(_material_drawer__WEBPACK_IMPORTED_MODULE_3__.strings.CLOSE_EVENT, {}, true /* shouldBubble */); },
            notifyOpen: function () { return _this.emit(_material_drawer__WEBPACK_IMPORTED_MODULE_3__.strings.OPEN_EVENT, {}, true /* shouldBubble */); },
            trapFocus: function () { return _this.mdcFocusTrap.trapFocus(); },
            releaseFocus: function () { return _this.mdcFocusTrap.releaseFocus(); },
        };
        if (this.type === 'modal') {
            return new _material_drawer__WEBPACK_IMPORTED_MODULE_5__.MDCModalDrawerFoundation(adapter);
        }
        else {
            return new _material_drawer__WEBPACK_IMPORTED_MODULE_6__.MDCDismissibleDrawerFoundation(adapter);
        }
    };
    MdcDrawer.prototype.toggle = function () {
        this.open = !this.open;
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
    ], MdcDrawer.prototype, "type", void 0);
    MdcDrawer = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.useView)('./mdc-drawer.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.customElement)(_material_drawer__WEBPACK_IMPORTED_MODULE_3__.cssClasses.ROOT)
    ], MdcDrawer);
    return MdcDrawer;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-drawer.js.map

/***/ }),

/***/ "@aurelia-mdc-web/elevation":
/*!******************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/elevation/dist/native-modules/index.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcElevation": function() { return /* reexport safe */ _mdc_elevation__WEBPACK_IMPORTED_MODULE_1__.MdcElevation; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_elevation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-elevation */ "@aurelia-mdc-web/elevation/mdc-elevation");


function configure(config) {
    config.globalResources([
        './mdc-elevation'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/elevation/mdc-elevation":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/elevation/dist/native-modules/mdc-elevation.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcElevation": function() { return /* binding */ MdcElevation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * @selector [mdc-elevation]
 */
var MdcElevation = /** @class */ (function () {
    function MdcElevation(root) {
        this.root = root;
    }
    MdcElevation.prototype.valueChanged = function (newValue, oldValue) {
        if (oldValue) {
            this.root.classList.add("mdc-elevation--z".concat(oldValue));
        }
        else {
            this.root.classList.add("mdc-elevation--z".concat(newValue));
        }
    };
    MdcElevation = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-elevation'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcElevation);
    return MdcElevation;
}());

//# sourceMappingURL=mdc-elevation.js.map

/***/ }),

/***/ "@aurelia-mdc-web/banner/mdc-banner.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/banner/dist/native-modules/mdc-banner.html ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-banner ${centered ? 'mdc-banner--centered' : ''}\" role=\"banner\"\n  mdc-focus-trap=\"initial-focus-el.bind: primaryActionEl\" mdc-focus-trap.ref=\"mdcFocusTrap\">\n  <div class=\"${fixed ? 'mdc-banner__fixed' : ''}\">\n    <div class=\"mdc-banner__content\" role=\"alertdialog\" aria-live=\"assertive\" ref=\"contentEl\">\n      <div class=\"mdc-banner__graphic-text-wrapper\">\n        <div class=\"mdc-banner__graphic\" role=\"img\" alt=\"\" if.bind=\"icon\">\n          <i class=\"material-icons mdc-banner__icon\">${icon}</i>\n        </div>\n        <div class=\"mdc-banner__text\">\n          <slot></slot>\n        </div>\n      </div>\n      <div class=\"mdc-banner__actions\">\n        <button mdc-button class=\"mdc-banner__secondary-action\" if.bind=\"secondaryAction\"\n          click.trigger=\"handleSecondaryActionClick()\">${secondaryAction}</button>\n        <button mdc-button class=\"mdc-banner__primary-action\" if.bind=\"primaryAction\"\n          click.trigger=\"handlePrimaryActionClick()\" ref=\"primaryActionEl\">${primaryAction}</button>\n      </div>\n    </div>\n  </div>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/button/mdc-button.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/button/dist/native-modules/mdc-button.html ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"\n    mdc-button\n    ${touch ? 'mdc-button--touch' : ''}\n    ${raised ? 'mdc-button--raised' : ''}\n    ${unelevated ? 'mdc-button--unelevated' : ''}\n    ${outlined ? 'mdc-button--outlined' : ''}\n  \" tabindex.bind=\"disabled ? -1 : 0\" mdc-ripple=\"no-class.bind: true\">\n  <div class=\"mdc-button__ripple\"></div>\n  <span class=\"mdc-button__label\" if.bind=\"label\">${label}</span>\n  <div class=\"mdc-button__touch\" if.bind=\"touch\"></div>\n  <slot></slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/card/mdc-card-actions/mdc-card-actions.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/card/dist/native-modules/mdc-card-actions/mdc-card-actions.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-card__actions ${fullBleed ? 'mdc-card__actions--full-bleed' : ''}\">\n  <slot></slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/card/mdc-card-media/mdc-card-media.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/card/dist/native-modules/mdc-card-media/mdc-card-media.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-card__media ${square ? 'mdc-card__media--square' : ''} ${wide ? 'mdc-card__media--16-9' : ''}\">\n  <div class=\"mdc-card__media-content\">\n    <slot></slot>\n  </div>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/card/mdc-card-primary-action.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/card/dist/native-modules/mdc-card-primary-action.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-card__primary-action\" tabindex=0\n  mdc-ripple=\"disabled.bind: disableRipple; surface.bind: rippleElement\">\n  <div class=\"mdc-card__ripple\" ref=\"rippleElement\"></div>\n  <slot></slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/card/mdc-card.html":
/*!******************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/card/dist/native-modules/mdc-card.html ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-card ${outlined ? 'mdc-card--outlined' : ''}\">\n  <slot></slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/checkbox/mdc-checkbox.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/checkbox/dist/native-modules/mdc-checkbox.html ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-checkbox ${touch ? 'mdc-checkbox--touch' : ''}\"\n  mdc-ripple=\"no-class.bind: true; input.bind: nativeControl_; unbounded.bind: true; disabled.bind: disableRipple\">\n  <input type=\"checkbox\" class=\"mdc-checkbox__native-control\" id=\"${id}\" ref=\"nativeControl_\"\n    change.trigger=\"handleChange_()\" />\n  <div class=\"mdc-checkbox__background\">\n    <svg class=\"mdc-checkbox__checkmark\" viewBox=\"0 0 24 24\">\n      <path class=\"mdc-checkbox__checkmark-path\" fill=\"none\" d=\"M1.73,12.91 8.1,19.28 22.79,4.59\" />\n    </svg>\n    <div class=\"mdc-checkbox__mixedmark\"></div>\n  </div>\n  <div class=\"mdc-checkbox__ripple\"></div>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/chips/mdc-chip-action/mdc-chip-action.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/chips/dist/native-modules/mdc-chip-action/mdc-chip-action.html ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"\n    mdc-evolution-chip__action\n    ${trailing ? 'mdc-evolution-chip__action--trailing' : 'mdc-evolution-chip__action--primary'}\n  \" click.delegate=\"handleClick()\" keydown.delegate=\"handleKeydown($event)\"\n  mdc-ripple=\"no-class.bind: true; compute-bounding-rect.bind: computeRippleClientRect\">\n  <span class=\"\n      mdc-evolution-chip__ripple\n      ${trailing ? 'mdc-evolution-chip__ripple--trailing' : 'mdc-evolution-chip__ripple--primary'}\n    \"></span>\n  <span class=\"mdc-evolution-chip__icon mdc-evolution-chip__icon--trailing material-icons\" if.bind=\"trailing && icon\">${icon}</span>\n  <span class=\"mdc-evolution-chip__graphic\" if.bind=\"!trailing && (icon || selectable)\">\n    <span if.bind=\"icon\"\n      class=\"mdc-evolution-chip__icon ${trailing ? '' : 'mdc-evolution-chip__icon--primary'} material-icons\">${icon}</span>\n    <span class=\"mdc-evolution-chip__checkmark\" if.bind=\"selectable\">\n      <svg class=\"mdc-evolution-chip__checkmark-svg\" viewBox=\"-2 -3 30 30\">\n        <path class=\"mdc-evolution-chip__checkmark-path\" fill=\"none\" stroke=\"black\"\n          d=\"M1.73,12.91 8.1,19.28 22.79,4.59\" />\n      </svg>\n    </span>\n  </span>\n  <span class=\"mdc-evolution-chip__text-label\">\n    <slot></slot>\n  </span>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/chips/mdc-chip-set/mdc-chip-set.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/chips/dist/native-modules/mdc-chip-set/mdc-chip-set.html ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"\n    mdc-evolution-chip-set\n    ${overflow ? 'mdc-evolution-chip-set--overflow' : ''}\n  \" role=\"grid\" mdcchip:interaction.delegate=\"handleChipInteraction($event)\"\n  mdcchip:animation.delegate=\"handleChipAnimation($event)\"\n  mdcchip:navigation.delegate=\"handleChipNavigation($event)\">\n  <span class=\"mdc-evolution-chip-set__chips\" role=\"presentation\">\n    <slot></slot>\n  </span>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/chips/mdc-chip/mdc-chip.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/chips/dist/native-modules/mdc-chip/mdc-chip.html ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"\n    mdc-evolution-chip\n    ${filter ? 'mdc-evolution-chip--selectable' : ''}\n    ${disabled ? 'mdc-evolution-chip--disabled' : ''}\n    ${icon ? 'mdc-evolution-chip--with-primary-icon' : ''}\n  \" role=\"row\" mdcchipaction:interaction.trigger=\"handleActionInteraction($event)\"\n  mdcchipaction:navigation.trigger=\"handleActionNavigation($event)\" animationend.delegate=\"handleAnimationEnd($event)\"\n  transitionend.delegate=\"handleTransitionEnd()\">\n\n  <span class=\"mdc-evolution-chip__cell mdc-evolution-chip__cell--primary\" role=\"gridcell\">\n    <slot name=\"primary-action\">\n      <button mdc-chip-action selectable.bind=\"filter\" disabled.bind=\"disabled\" icon.bind=\"icon\">\n        <slot></slot>\n      </button>\n    </slot>\n  </span>\n\n  <span class=\"mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing\" role=\"gridcell\">\n    <slot name=\"trailing-action\">\n    </slot>\n  </span>\n\n  <slot name=\"non-navigable-trailing-action\">\n  </slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/circular-progress/mdc-circular-progress.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/circular-progress/dist/native-modules/mdc-circular-progress.html ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-circular-progress mdc-circular-progress--${size}\" role=\"progressbar\" aria-valuemin=\"0\"\n  aria-valuemax=\"1\" css=\"width:${size}px; height:${size}px;\">\n  <div class=\"mdc-circular-progress__determinate-container\">\n    <svg class=\"mdc-circular-progress__indeterminate-circle-graphic\" viewBox=\"0 0 ${size} ${size}\"\n      xmlns=\"http://www.w3.org/2000/svg\">\n      <circle class=\"mdc-circular-progress__determinate-track\" cx=\"${size/2}\" cy=\"${size/2}\" r=\"${radius}\"\n        stroke-width=\"${strokeWidth}\" />\n      <circle class=\"mdc-circular-progress__determinate-circle\" cx=\"${size/2}\" cy=\"${size/2}\" r=\"${radius}\"\n        stroke-width=\"${strokeWidth}\" stroke-dasharray=\"${strokeDasharray}\" stroke-dashoffset=\"${strokeDashoffset}\"\n        ref=\"determinateCircle_\" />\n    </svg>\n  </div>\n  <div class=\"mdc-circular-progress__indeterminate-container\">\n    <div class=\"mdc-circular-progress__spinner-layer\">\n      <div class=\"mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left\">\n        <svg class=\"mdc-circular-progress__indeterminate-circle-graphic\" viewBox=\"0 0 ${size} ${size}\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <circle cx=\"${size/2}\" cy=\"${size/2}\" r=\"${radius}\" stroke-dasharray=\"${strokeDasharray}\"\n            stroke-dashoffset=\"${strokeDashoffset}\" stroke-width=\"${strokeWidth}\" />\n        </svg>\n      </div>\n      <div class=\"mdc-circular-progress__gap-patch\">\n        <svg class=\"mdc-circular-progress__indeterminate-circle-graphic\" viewBox=\"0 0 ${size} ${size}\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <circle cx=\"${size/2}\" cy=\"${size/2}\" r=\"${radius}\" stroke-dasharray=\"${strokeDasharray}\"\n            stroke-dashoffset=\"${strokeDashoffset}\" stroke-width=\"${strokeWidth}\" />\n        </svg>\n      </div>\n      <div class=\"mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right\">\n        <svg class=\"mdc-circular-progress__indeterminate-circle-graphic\" viewBox=\"0 0 ${size} ${size}\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <circle cx=\"${size/2}\" cy=\"${size/2}\" r=\"${radius}\" stroke-dasharray=\"${strokeDasharray}\"\n            stroke-dashoffset=\"${strokeDashoffset}\" stroke-width=\"${strokeWidth}\" />\n        </svg>\n      </div>\n    </div>\n  </div>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/data-table/mdc-data-table.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/data-table/dist/native-modules/mdc-data-table.html ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-data-table ${stickyHeader ? 'mdc-data-table--sticky-header' : ''}\">\n  <div class=\"mdc-data-table__table-container\">\n    <slot></slot>\n  </div>\n  <div class=\"mdc-data-table__pagination\" if.bind=\"pagination\">\n    <div class=\"mdc-data-table__pagination-trailing\">\n      <div class=\"mdc-data-table__pagination-rows-per-page\">\n        <div class=\"mdc-data-table__pagination-rows-per-page-label\">${rowsPerPageLabel}</div>\n\n        <mdc-select value.bind=\"pageSize\" outlined class=\"mdc-data-table__pagination-rows-per-page-select\"\n          hoist-to-body.bind=\"hoistPageSelectToBody\">\n          <mdc-list>\n            <mdc-list-item repeat.for=\"ps of pageSizes\" value.bind=\"ps\">${ps}</mdc-list-item>\n          </mdc-list>\n        </mdc-select>\n      </div>\n\n      <div class=\"mdc-data-table__pagination-navigation\">\n        <div class=\"mdc-data-table__pagination-total\">\n          <template replaceable part=\"pagination-total\">${paginationTotal}</template>\n        </div>\n        <button mdc-icon-button class=\"mdc-data-table__pagination-button\" data-first-page=\"true\"\n          disabled.bind=\"!paginationPosition || paginationPosition === 'first'\"\n          click.trigger=\"handleNavigationClick('first')\">\n          <mdc-icon>first_page</mdc-icon>\n        </button>\n        <button mdc-icon-button class=\"mdc-data-table__pagination-button\" data-prev-page=\"true\"\n          disabled.bind=\"!paginationPosition || paginationPosition === 'first'\"\n          click.trigger=\"handleNavigationClick('prev')\">\n          <mdc-icon>chevron_left</mdc-icon>\n        </button>\n        <button mdc-icon-button class=\"mdc-data-table__pagination-button\" data-next-page=\"true\"\n          disabled.bind=\"!paginationPosition || paginationPosition === 'last'\"\n          click.trigger=\"handleNavigationClick('next')\">\n          <mdc-icon>chevron_right</mdc-icon>\n        </button>\n        <button mdc-icon-button class=\"mdc-data-table__pagination-button\" data-last-page=\"true\"\n          disabled.bind=\"!paginationPosition || paginationPosition === 'last'\"\n          click.trigger=\"handleNavigationClick('last')\">\n          <mdc-icon>last_page</mdc-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"mdc-data-table__progress-indicator\">\n    <div class=\"mdc-data-table__scrim\"></div>\n    <mdc-linear-progress class=\"mdc-data-table__linear-progress\"></mdc-linear-progress>\n  </div>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/dialog/mdc-dialog.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/dialog/dist/native-modules/mdc-dialog.html ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-dialog ${fullscreen ? 'mdc-dialog--fullscreen' : ''} ${sheet ? 'mdc-dialog--sheet' : ''}\"\n  click.trigger=\"handleClick_($event)\" keydown.trigger=\"handleKeydown_($event)\"\n  mdcdialog:opening.trigger=\"handleOpening_()\" mdcdialog:closing.trigger=\"handleClosing_()\" aria-modal=\"true\"\n  mdc-focus-trap=\"initial-focus-el.bind: getInitialFocusEl; delay.bind: delayFocusTrap\"\n  mdc-focus-trap.ref=\"mdcFocusTrap\">\n  <div class=\"mdc-dialog__container\">\n    <div class=\"mdc-dialog__surface\" role=\"alertdialog\" aria-modal=\"true\" aria-labelledby=\"${titleId}\"\n      aria-describedby=\"${contentId}\">\n      <button if.bind=\"sheet\" class=\"mdc-icon-button material-icons mdc-dialog__close\"\n        data-mdc-dialog-action=\"close\">close</button>\n      <slot></slot>\n    </div>\n  </div>\n  <div class=\"mdc-dialog__scrim\"></div>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/drawer/mdc-drawer-header/mdc-drawer-header.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/drawer/dist/native-modules/mdc-drawer-header/mdc-drawer-header.html ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-drawer__header\">\n  <h3 class=\"mdc-drawer__title\" if.bind=\"title\">${title}</h3>\n  <h6 class=\"mdc-drawer__subtitle\" if.bind=\"subtitle\">${subtitle}</h6>\n  <slot></slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/drawer/mdc-drawer.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/drawer/dist/native-modules/mdc-drawer.html ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-drawer\n  ${type === 'dismissible' ? 'mdc-drawer--dismissible' : ''}\n  ${ type === 'modal' ? 'mdc-drawer--modal' : ''}\" transitionend.trigger=\"handleTransitionEnd_($event)\"\n  keydown.trigger=\"handleKeydown_($event)\" mdc-focus-trap mdc-focus-trap.ref=\"mdcFocusTrap\">\n  <slot></slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ })

}]);
//# sourceMappingURL=vendors-fed81e33.3e95cc108b214a1506c0.bundle.js.map