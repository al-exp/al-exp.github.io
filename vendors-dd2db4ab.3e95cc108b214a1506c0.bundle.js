"use strict";
(self["webpackChunkweb_client"] = self["webpackChunkweb_client"] || []).push([["vendors-dd2db4ab"],{

/***/ "@aurelia-mdc-web/expandable":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/expandable/dist/native-modules/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcExpandable": function() { return /* reexport safe */ _mdc_expandable__WEBPACK_IMPORTED_MODULE_1__.MdcExpandable; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_expandable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-expandable */ "@aurelia-mdc-web/expandable/mdc-expandable");


function configure(config) {
    config.globalResources([
        './mdc-expandable',
    ]);
    config.aurelia.use.plugin('@aurelia-mdc-web/ripple');
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/expandable/mdc-expandable":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/expandable/dist/native-modules/mdc-expandable.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcExpandable": function() { return /* binding */ MdcExpandable; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);



var OPEN_CHANGED_EVENT = 'mdcexpandable:open-changed';
var ENTER = 13;
var SPACE = 32;
/** @selector mdc-expandable */
var MdcExpandable = /** @class */ (function () {
    function MdcExpandable(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
    }
    MdcExpandable.prototype.openChanged = function () {
        this.updateContainerHeight();
        this.element.dispatchEvent(new CustomEvent(OPEN_CHANGED_EVENT, { detail: { component: this, open: this.open } }));
    };
    MdcExpandable.prototype.handleEvent = function (e) {
        switch (e.type) {
            case 'transitionend':
                this.setContentContainerHeightToAuto();
                break;
        }
    };
    MdcExpandable.prototype.setContentContainerHeightToAuto = function () {
        this.contentContainer.style.overflow = 'visible';
        this.contentContainer.style.height = 'auto';
        this.contentContainer.removeEventListener('transitionend', this);
    };
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    MdcExpandable.prototype.bind = function () { };
    MdcExpandable.prototype.attached = function () {
        this.openChanged();
    };
    MdcExpandable.prototype.updateContainerHeight = function () {
        var _this = this;
        if (this.open) {
            // after transition set body height to auto so that expandable children are visible
            this.contentContainer.addEventListener('transitionend', this);
            this.contentContainer.style.height = "".concat(this.content.clientHeight, "px");
        }
        else {
            // the following line is needed because height has been restored to auto'
            this.contentContainer.style.height = "".concat(this.content.clientHeight, "px");
            this.taskQueue.queueTask(function () {
                _this.contentContainer.style.overflow = 'hidden';
                _this.contentContainer.style.height = '0';
            });
        }
    };
    /** Toggles the expandable open and closed */
    MdcExpandable.prototype.toggle = function () {
        var _this = this;
        if (!this.open && this.accordion !== undefined) {
            var otherAccordions = this.accordion === ''
                ? Array.from(this.element.parentElement.querySelectorAll('.mdc-expandable[accordion].mdc-expandable--open'))
                : Array.from(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.DOM.querySelectorAll(".mdc-expandable[accordion='".concat(this.accordion, "'].mdc-expandable--open")));
            otherAccordions.filter(function (x) { return x !== _this.element; })
                .map(function (x) { return x.au.controller.viewModel; })
                .forEach(function (x) { return x.toggle(); });
        }
        this.open = !this.open;
    };
    MdcExpandable.prototype.handleFocus = function () {
        this.focused = true;
    };
    MdcExpandable.prototype.handleBlur = function () {
        this.focused = false;
    };
    MdcExpandable.prototype.handleKeydown = function (evt) {
        if ((evt.keyCode === ENTER || evt.keyCode === SPACE)) {
            this.toggle();
        }
        return true;
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcExpandable.prototype, "open", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
    ], MdcExpandable.prototype, "accordion", void 0);
    MdcExpandable = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element, aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.TaskQueue),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-expandable'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-expandable.html'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [HTMLElement, aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.TaskQueue])
    ], MdcExpandable);
    return MdcExpandable;
}());

//# sourceMappingURL=mdc-expandable.js.map

/***/ }),

/***/ "@aurelia-mdc-web/fab/enhance-mdc-fab":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/fab/dist/native-modules/enhance-mdc-fab.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnhanceMdcFab": function() { return /* binding */ EnhanceMdcFab; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


var EnhanceMdcFab = /** @class */ (function () {
    function EnhanceMdcFab() {
    }
    EnhanceMdcFab.prototype.beforeCompile = function (template) {
        var e_1, _a;
        var actions = template.querySelectorAll('[mdc-fab]');
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(Array.from(actions)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var i = _c.value;
                i.setAttribute('as-element', 'mdc-fab');
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
    EnhanceMdcFab = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.viewEngineHooks
    ], EnhanceMdcFab);
    return EnhanceMdcFab;
}());

//# sourceMappingURL=enhance-mdc-fab.js.map

/***/ }),

/***/ "@aurelia-mdc-web/fab":
/*!************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/fab/dist/native-modules/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcFab": function() { return /* reexport safe */ _mdc_fab__WEBPACK_IMPORTED_MODULE_1__.MdcFab; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_fab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-fab */ "@aurelia-mdc-web/fab/mdc-fab");


function configure(config) {
    config.globalResources([
        './mdc-fab',
        './enhance-mdc-fab'
    ]);
    config.aurelia.use.plugin('@aurelia-mdc-web/ripple');
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/fab/mdc-fab":
/*!**************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/fab/dist/native-modules/mdc-fab.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcFab": function() { return /* binding */ MdcFab; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);



/**
 * @selector mdc-fab
 * @selector a[mdc-fab]
 * @selector button[mdc-fab]
 */
var MdcFab = /** @class */ (function () {
    function MdcFab() {
    }
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcFab.prototype, "mini", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcFab.prototype, "extended", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcFab.prototype, "touch", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcFab.prototype, "exited", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
    ], MdcFab.prototype, "icon", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
    ], MdcFab.prototype, "label", void 0);
    MdcFab = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-fab.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-fab')
    ], MdcFab);
    return MdcFab;
}());

//# sourceMappingURL=mdc-fab.js.map

/***/ }),

/***/ "@aurelia-mdc-web/floating-label":
/*!***********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/floating-label/dist/native-modules/index.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcFloatingLabel": function() { return /* reexport safe */ _mdc_floating_label__WEBPACK_IMPORTED_MODULE_1__.MdcFloatingLabel; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_floating_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-floating-label */ "@aurelia-mdc-web/floating-label/mdc-floating-label");


function configure(config) {
    config.globalResources([
        './mdc-floating-label'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/floating-label/mdc-floating-label":
/*!************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/floating-label/dist/native-modules/mdc-floating-label.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcFloatingLabel": function() { return /* binding */ MdcFloatingLabel; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _material_floating_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/floating-label */ 4288);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ 2851);





var MdcFloatingLabel = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MdcFloatingLabel, _super);
    function MdcFloatingLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdcFloatingLabel.prototype.shake = function (shouldShake) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.shake(shouldShake);
    };
    /**
     * Styles the label to float/dock.
     * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
     */
    MdcFloatingLabel.prototype.float = function (shouldFloat) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.float(shouldFloat);
    };
    /**
     * Styles the label as required.
     * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
     */
    MdcFloatingLabel.prototype.setRequired = function (isRequired) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setRequired(isRequired);
    };
    MdcFloatingLabel.prototype.getWidth = function () {
        return this.foundation.getWidth();
    };
    MdcFloatingLabel.prototype.getDefaultFoundation = function () {
        var _this = this;
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            getWidth: function () { return (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__.estimateScrollWidth)(_this.root); },
            registerInteractionHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterInteractionHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
        };
        return new _material_floating_label__WEBPACK_IMPORTED_MODULE_4__.MDCFloatingLabelFoundation(adapter);
    };
    MdcFloatingLabel = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-floating-label'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-floating-label.html')
    ], MdcFloatingLabel);
    return MdcFloatingLabel;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__.MdcComponent));

//# sourceMappingURL=mdc-floating-label.js.map

/***/ }),

/***/ "@aurelia-mdc-web/form-field":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/form-field/dist/native-modules/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcFormField": function() { return /* reexport safe */ _mdc_form_field__WEBPACK_IMPORTED_MODULE_1__.MdcFormField; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-form-field */ "@aurelia-mdc-web/form-field/mdc-form-field");


function configure(config) {
    config.globalResources([
        './mdc-form-field'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/form-field/mdc-form-field":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/form-field/dist/native-modules/mdc-form-field.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcFormField": function() { return /* binding */ MdcFormField; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/form-field */ 499);
/* harmony import */ var _material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/form-field */ 7026);
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");





/**
 * @selector mdc-form-field
 */
var MdcFormField = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(MdcFormField, _super);
    function MdcFormField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cssClasses = _material_form_field__WEBPACK_IMPORTED_MODULE_4__.cssClasses;
        return _this;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    MdcFormField.prototype.initialise = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var rippleUpgraded, input;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                rippleUpgraded = this.root.querySelector('mdc-checkbox');
                if (!rippleUpgraded) {
                    rippleUpgraded = this.root.querySelector('mdc-radio');
                }
                this.ripple = rippleUpgraded === null || rippleUpgraded === void 0 ? void 0 : rippleUpgraded.au['mdc-ripple'].viewModel;
                input = this.root.querySelector('input, button');
                if (input === null || input === void 0 ? void 0 : input.hasAttribute('id')) {
                    this.label = this.root.querySelector('label');
                    if (this.label) {
                        this.label.setAttribute('for', input.getAttribute('id'));
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    MdcFormField.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            activateInputRipple: function () { var _a; return (_a = _this.ripple) === null || _a === void 0 ? void 0 : _a.activate(); },
            deactivateInputRipple: function () { var _a; return (_a = _this.ripple) === null || _a === void 0 ? void 0 : _a.deactivate(); },
            deregisterInteractionHandler: function (evtType, handler) { var _a; return (_a = _this.label) === null || _a === void 0 ? void 0 : _a.removeEventListener(evtType, handler); },
            registerInteractionHandler: function (evtType, handler) { var _a; return (_a = _this.label) === null || _a === void 0 ? void 0 : _a.addEventListener(evtType, handler); },
        };
        return new _material_form_field__WEBPACK_IMPORTED_MODULE_5__.MDCFormFieldFoundation(adapter);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcFormField.prototype, "nowrap", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcFormField.prototype, "alignEnd", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcFormField.prototype, "spaceBetween", void 0);
    MdcFormField = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-form-field.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)(_material_form_field__WEBPACK_IMPORTED_MODULE_4__.cssClasses.ROOT)
    ], MdcFormField);
    return MdcFormField;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_2__.MdcComponent));

//# sourceMappingURL=mdc-form-field.js.map

/***/ }),

/***/ "@aurelia-mdc-web/icon-button/enhance-mdc-icon-button":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/icon-button/dist/native-modules/enhance-mdc-icon-button.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnhanceMdcIconButton": function() { return /* binding */ EnhanceMdcIconButton; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


var EnhanceMdcIconButton = /** @class */ (function () {
    function EnhanceMdcIconButton() {
    }
    EnhanceMdcIconButton.prototype.beforeCompile = function (template) {
        var e_1, _a;
        var actions = template.querySelectorAll('[mdc-icon-button]');
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(Array.from(actions)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var i = _c.value;
                i.setAttribute('as-element', 'mdc-icon-button');
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
    EnhanceMdcIconButton = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.viewEngineHooks
    ], EnhanceMdcIconButton);
    return EnhanceMdcIconButton;
}());

//# sourceMappingURL=enhance-mdc-icon-button.js.map

/***/ }),

/***/ "@aurelia-mdc-web/icon-button":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/icon-button/dist/native-modules/index.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcIconButton": function() { return /* reexport safe */ _mdc_icon_button__WEBPACK_IMPORTED_MODULE_1__.MdcIconButton; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-icon-button */ "@aurelia-mdc-web/icon-button/mdc-icon-button");


function configure(config) {
    config.globalResources([
        './mdc-icon-button',
        './mdc-icon-button-icon/mdc-icon-button-icon',
        './enhance-mdc-icon-button'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/icon-button/mdc-icon-button-icon/mdc-icon-button-icon":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/icon-button/dist/native-modules/mdc-icon-button-icon/mdc-icon-button-icon.js ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcIconButtonIcon": function() { return /* binding */ MdcIconButtonIcon; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);



/**
 * Optional. Used as a toggle icon button element.
 * @selector mdc-icon-button-icon
 */
var MdcIconButtonIcon = /** @class */ (function () {
    function MdcIconButtonIcon() {
    }
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcIconButtonIcon.prototype, "on", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
    ], MdcIconButtonIcon.prototype, "icon", void 0);
    MdcIconButtonIcon = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-icon-button-icon.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-icon-button-icon')
    ], MdcIconButtonIcon);
    return MdcIconButtonIcon;
}());

//# sourceMappingURL=mdc-icon-button-icon.js.map

/***/ }),

/***/ "@aurelia-mdc-web/icon-button/mdc-icon-button":
/*!******************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/icon-button/dist/native-modules/mdc-icon-button.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcIconButton": function() { return /* binding */ MdcIconButton; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);
/* harmony import */ var _material_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/icon-button */ 9859);
/* harmony import */ var _material_icon_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/icon-button */ 8407);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");





/**
 * @selector button[mdc-icon-button]
 * @selector a[mdc-icon-button]
 * @selector mdc-icon-button
 */
var MdcIconButton = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(MdcIconButton, _super);
    function MdcIconButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdcIconButton.prototype.hrefChanged = function () {
        if (this.href) {
            this.root.setAttribute('href', this.href);
        }
        else {
            this.root.removeAttribute('href');
        }
    };
    MdcIconButton.prototype.attached = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialise()];
                    case 1:
                        _b.sent();
                        if ((_a = this.icons) === null || _a === void 0 ? void 0 : _a.length) {
                            this.foundation = this.getDefaultFoundation();
                            this.foundation.init();
                        }
                        this.initialisedResolve();
                        this.initialSyncWithDOM();
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcIconButton.prototype.handleClick = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleClick();
        return true;
    };
    MdcIconButton.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            notifyChange: function (evtData) {
                _this.emit(_material_icon_button__WEBPACK_IMPORTED_MODULE_4__.strings.CHANGE_EVENT, evtData);
                _this.on = evtData.isOn;
            },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            getAttr: function (attrName) { return _this.root.getAttribute(attrName); },
            setAttr: function (attrName, attrValue) { return _this.root.setAttribute(attrName, attrValue); },
        };
        return new _material_icon_button__WEBPACK_IMPORTED_MODULE_5__.MDCIconButtonToggleFoundation(adapter);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr({ defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindingMode.twoWay }),
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcIconButton.prototype, "on", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", String)
    ], MdcIconButton.prototype, "icon", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.children)('mdc-icon-button-icon'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Array)
    ], MdcIconButton.prototype, "icons", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", String)
    ], MdcIconButton.prototype, "href", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcIconButton.prototype, "touch", void 0);
    MdcIconButton = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-icon-button.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-icon-button')
    ], MdcIconButton);
    return MdcIconButton;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_2__.MdcComponent));

//# sourceMappingURL=mdc-icon-button.js.map

/***/ }),

/***/ "@aurelia-mdc-web/icon":
/*!*************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/icon/dist/native-modules/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcIcon": function() { return /* reexport safe */ _mdc_icon__WEBPACK_IMPORTED_MODULE_1__.MdcIcon; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-icon */ "@aurelia-mdc-web/icon/mdc-icon");


function configure(config) {
    config.globalResources([
        './mdc-icon'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/icon/mdc-icon":
/*!****************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/icon/dist/native-modules/mdc-icon.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcIcon": function() { return /* binding */ MdcIcon; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * @selector mdc-icon
 */
var MdcIcon = /** @class */ (function () {
    function MdcIcon(root) {
        this.root = root;
    }
    MdcIcon = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-icon.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-icon'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcIcon);
    return MdcIcon;
}());

//# sourceMappingURL=mdc-icon.js.map

/***/ }),

/***/ "@aurelia-mdc-web/image-list":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/image-list/dist/native-modules/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcImageList": function() { return /* reexport safe */ _mdc_image_list__WEBPACK_IMPORTED_MODULE_1__.MdcImageList; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_image_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-image-list */ "@aurelia-mdc-web/image-list/mdc-image-list");


function configure(config) {
    config.globalResources([
        './mdc-image-list',
        './mdc-image-list-item/mdc-image-list-item'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/image-list/mdc-image-list-item/mdc-image-list-item":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/image-list/dist/native-modules/mdc-image-list-item/mdc-image-list-item.js ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcImageListItem": function() { return /* binding */ MdcImageListItem; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);



/**
 * Mandatory. Indicates each item in an Image List.
 * @selector mdc-image-list-item
 */
var MdcImageListItem = /** @class */ (function () {
    function MdcImageListItem(root) {
        this.root = root;
    }
    MdcImageListItem.prototype.aspectChanged = function () {
        this.hasAspect = !isNaN(this.aspect);
        this.root.style.setProperty('--mdc-image-list-item-aspect', isNaN(this.aspect) ? '1' : "".concat(this.aspect));
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
    ], MdcImageListItem.prototype, "src", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
    ], MdcImageListItem.prototype, "label", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Number)
    ], MdcImageListItem.prototype, "aspect", void 0);
    MdcImageListItem = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-image-list-item.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-image-list-item'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcImageListItem);
    return MdcImageListItem;
}());

//# sourceMappingURL=mdc-image-list-item.js.map

/***/ }),

/***/ "@aurelia-mdc-web/image-list/mdc-image-list":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/image-list/dist/native-modules/mdc-image-list.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcImageList": function() { return /* binding */ MdcImageList; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);



var id = 0;
/**
 * @selector mdc-image-list
 */
var MdcImageList = /** @class */ (function () {
    function MdcImageList() {
        this.id = "mdc-image-list-".concat(++id);
    }
    MdcImageList.prototype.columnsChanged = function () {
        var _this = this;
        if (!this.columns) {
            return;
        }
        var columns = typeof this.columns === 'string' ? [{ count: parseInt(this.columns) }] : this.columns;
        if (this.masonry) {
            this.style.innerHTML = columns.filter(function (x) { return x.count; }).reduce(function (p, c) {
                var _a, _b;
                p += "".concat(c.media ? "@media (".concat(c.media, ") {") : '', "\n  #").concat(_this.id, " {\n    column-count: ").concat(c.count, ";\n    column-gap: ").concat((_a = c.gutterSize) !== null && _a !== void 0 ? _a : 4, "px;\n  }\n\n  #").concat(_this.id, " .mdc-image-list__item {\n    margin-bottom: ").concat((_b = c.gutterSize) !== null && _b !== void 0 ? _b : 4, "px;\n  }\n").concat(c.media ? '}' : '');
                return p;
            }, '');
        }
        else {
            this.style.innerHTML = columns.filter(function (x) { return x.count; }).reduce(function (p, c) {
                var _a, _b;
                p += "".concat(c.media ? "@media (".concat(c.media, ") {") : '', "\n  #").concat(_this.id, " .mdc-image-list__item {\n    width: calc(100% / ").concat(c.count, " - ").concat(((_a = c.gutterSize) !== null && _a !== void 0 ? _a : 4) + 1 / c.count, "px);\n    margin: ").concat((_b = c.gutterSize) !== null && _b !== void 0 ? _b : 4 / 2, "px;\n  }\n").concat(c.media ? '}' : '');
                return p;
            }, '');
        }
    };
    MdcImageList.prototype.bind = function () {
        this.columnsChanged();
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcImageList.prototype, "masonry", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcImageList.prototype, "textProtection", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)
    ], MdcImageList.prototype, "columns", void 0);
    MdcImageList = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-image-list.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-image-list')
    ], MdcImageList);
    return MdcImageList;
}());

//# sourceMappingURL=mdc-image-list.js.map

/***/ }),

/***/ "@aurelia-mdc-web/layout-grid":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/layout-grid/dist/native-modules/index.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcLayoutGrid": function() { return /* reexport safe */ _mdc_layout_grid__WEBPACK_IMPORTED_MODULE_1__.MdcLayoutGrid; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_layout_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-layout-grid */ "@aurelia-mdc-web/layout-grid/mdc-layout-grid");


function configure(config) {
    config.globalResources([
        './mdc-layout-grid',
        './mdc-layout-grid-inner',
        './mdc-layout-grid-cell/mdc-layout-grid-cell'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/layout-grid/mdc-layout-grid-cell/mdc-layout-grid-cell":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/layout-grid/dist/native-modules/mdc-layout-grid-cell/mdc-layout-grid-cell.js ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcLayoutGridCell": function() { return /* binding */ MdcLayoutGridCell; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);



/**
 * @selector mdc-layout-grid-cell
 */
var MdcLayoutGridCell = /** @class */ (function () {
    function MdcLayoutGridCell() {
    }
    MdcLayoutGridCell.prototype.spansChanged = function () {
        var _a;
        _a = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(this.spans.split(' '), 3), this.phoneSpan = _a[0], this.tabletSpan = _a[1], this.desktopSpan = _a[2];
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
    ], MdcLayoutGridCell.prototype, "order", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
    ], MdcLayoutGridCell.prototype, "position", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
    ], MdcLayoutGridCell.prototype, "span", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
    ], MdcLayoutGridCell.prototype, "desktopSpan", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
    ], MdcLayoutGridCell.prototype, "tabletSpan", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
    ], MdcLayoutGridCell.prototype, "phoneSpan", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
    ], MdcLayoutGridCell.prototype, "newRow", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
    ], MdcLayoutGridCell.prototype, "spans", void 0);
    MdcLayoutGridCell = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-layout-grid-cell.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-layout-grid-cell')
    ], MdcLayoutGridCell);
    return MdcLayoutGridCell;
}());

//# sourceMappingURL=mdc-layout-grid-cell.js.map

/***/ }),

/***/ "@aurelia-mdc-web/layout-grid/mdc-layout-grid-inner":
/*!************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/layout-grid/dist/native-modules/mdc-layout-grid-inner.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcLayoutGridInner": function() { return /* binding */ MdcLayoutGridInner; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * Mandatory. Added automatically by the grid element. Can be used for nested tables.
 * @selector mdc-layout-grid-inner
 */
var MdcLayoutGridInner = /** @class */ (function () {
    function MdcLayoutGridInner() {
    }
    MdcLayoutGridInner = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inlineView)('<template class="mdc-layout-grid__inner"><slot></slot></template>'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-layout-grid-inner')
    ], MdcLayoutGridInner);
    return MdcLayoutGridInner;
}());

//# sourceMappingURL=mdc-layout-grid-inner.js.map

/***/ }),

/***/ "@aurelia-mdc-web/layout-grid/mdc-layout-grid":
/*!******************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/layout-grid/dist/native-modules/mdc-layout-grid.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcLayoutGrid": function() { return /* binding */ MdcLayoutGrid; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);



/**
 * @selector mdc-layout-grid
 */
var MdcLayoutGrid = /** @class */ (function () {
    function MdcLayoutGrid(root) {
        this.root = root;
    }
    MdcLayoutGrid.prototype.desktopColumnWidthChanged = function () {
        this.root.style.setProperty('--mdc-layout-grid-column-width-desktop', "".concat(this.desktopColumnWidth, "px"));
    };
    MdcLayoutGrid.prototype.tabletColumnWidthChanged = function () {
        this.root.style.setProperty('--mdc-layout-grid-column-width-tablet', "".concat(this.tabletColumnWidth, "px"));
    };
    MdcLayoutGrid.prototype.phoneColumnWidthChanged = function () {
        this.root.style.setProperty('--mdc-layout-grid-column-width-phone', "".concat(this.phoneColumnWidth, "px"));
    };
    MdcLayoutGrid.prototype.columnWidthsChanged = function () {
        var _a;
        _a = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(this.columnWidths.split(' '), 3), this.phoneColumnWidth = _a[0], this.tabletColumnWidth = _a[1], this.desktopColumnWidth = _a[2];
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
    ], MdcLayoutGrid.prototype, "position", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcLayoutGrid.prototype, "fixedColumnWidth", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcLayoutGrid.prototype, "noPadding", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
    ], MdcLayoutGrid.prototype, "desktopColumnWidth", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
    ], MdcLayoutGrid.prototype, "tabletColumnWidth", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
    ], MdcLayoutGrid.prototype, "phoneColumnWidth", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)
    ], MdcLayoutGrid.prototype, "columnWidths", void 0);
    MdcLayoutGrid = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-layout-grid.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-layout-grid'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcLayoutGrid);
    return MdcLayoutGrid;
}());

//# sourceMappingURL=mdc-layout-grid.js.map

/***/ }),

/***/ "@aurelia-mdc-web/line-ripple":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/line-ripple/dist/native-modules/index.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcLineRipple": function() { return /* reexport safe */ _mdc_line_ripple__WEBPACK_IMPORTED_MODULE_1__.MdcLineRipple; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_line_ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-line-ripple */ "@aurelia-mdc-web/line-ripple/mdc-line-ripple");


function configure(config) {
    config.globalResources([
        './mdc-line-ripple'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/line-ripple/mdc-line-ripple":
/*!******************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/line-ripple/dist/native-modules/mdc-line-ripple.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcLineRipple": function() { return /* binding */ MdcLineRipple; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_line_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/line-ripple */ 4154);




var MdcLineRipple = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MdcLineRipple, _super);
    function MdcLineRipple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Activates the line ripple
     */
    MdcLineRipple.prototype.activate = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.activate();
    };
    /**
     * Deactivates the line ripple
     */
    MdcLineRipple.prototype.deactivate = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.deactivate();
    };
    /**
     * Sets the transform origin given a user's click location.
     * The `rippleCenter` is the x-coordinate of the middle of the ripple.
     */
    MdcLineRipple.prototype.setRippleCenter = function (xCoordinate) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setRippleCenter(xCoordinate);
    };
    MdcLineRipple.prototype.getDefaultFoundation = function () {
        var _this = this;
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            setStyle: function (propertyName, value) { return _this.root.style.setProperty(propertyName, value); },
            registerEventHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterEventHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
        };
        return new _material_line_ripple__WEBPACK_IMPORTED_MODULE_3__.MDCLineRippleFoundation(adapter);
    };
    MdcLineRipple = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-line-ripple'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inlineView)('<template class="mdc-line-ripple"></template>')
    ], MdcLineRipple);
    return MdcLineRipple;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__.MdcComponent));

//# sourceMappingURL=mdc-line-ripple.js.map

/***/ }),

/***/ "@aurelia-mdc-web/linear-progress":
/*!************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/linear-progress/dist/native-modules/index.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcLinearProgress": function() { return /* reexport safe */ _mdc_linear_progress__WEBPACK_IMPORTED_MODULE_1__.MdcLinearProgress; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_linear_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-linear-progress */ "@aurelia-mdc-web/linear-progress/mdc-linear-progress");


function configure(config) {
    config.globalResources([
        './mdc-linear-progress'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/linear-progress/mdc-linear-progress":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/linear-progress/dist/native-modules/mdc-linear-progress.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcLinearProgress": function() { return /* binding */ MdcLinearProgress; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_linear_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/linear-progress */ 6524);
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");





/**
 * @selector mdc-linear-progress
 */
var MdcLinearProgress = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(MdcLinearProgress, _super);
    function MdcLinearProgress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdcLinearProgress.prototype.progressChanged = function () {
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
    MdcLinearProgress.prototype.bufferChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        if (this.buffer !== undefined && !isNaN(this.buffer)) {
                            (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setBuffer(this.buffer);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcLinearProgress.prototype.openChanged = function () {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _c.sent();
                        if (this.open) {
                            (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.open();
                        }
                        else {
                            (_b = this.foundation) === null || _b === void 0 ? void 0 : _b.close();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // eslint-disable-next-line @typescript-eslint/require-await
    MdcLinearProgress.prototype.initialise = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                this.progressChanged();
                this.openChanged();
                return [2 /*return*/];
            });
        });
    };
    MdcLinearProgress.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) {
                _this.root.classList.add(className);
            },
            forceLayout: function () {
                _this.root.getBoundingClientRect();
            },
            setBufferBarStyle: function (styleProperty, value) {
                var bufferBar = _this.root.querySelector(_material_linear_progress__WEBPACK_IMPORTED_MODULE_4__.MDCLinearProgressFoundation.strings.BUFFER_BAR_SELECTOR);
                if (bufferBar) {
                    bufferBar.style.setProperty(styleProperty, value);
                }
            },
            setPrimaryBarStyle: function (styleProperty, value) {
                var primaryBar = _this.root.querySelector(_material_linear_progress__WEBPACK_IMPORTED_MODULE_4__.MDCLinearProgressFoundation.strings.PRIMARY_BAR_SELECTOR);
                if (primaryBar) {
                    primaryBar.style.setProperty(styleProperty, value);
                }
            },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            removeAttribute: function (attributeName) {
                _this.root.removeAttribute(attributeName);
            },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            setAttribute: function (attributeName, value) {
                _this.root.setAttribute(attributeName, value);
            },
            setStyle: function (name, value) {
                _this.root.style.setProperty(name, value);
            },
            attachResizeObserver: function (callback) {
                var RO = window.ResizeObserver;
                if (RO) {
                    var ro = new RO(callback);
                    ro.observe(_this.root);
                    return ro;
                }
                return null;
            },
            getWidth: function () { return _this.root.offsetWidth; },
        };
        return new _material_linear_progress__WEBPACK_IMPORTED_MODULE_4__.MDCLinearProgressFoundation(adapter);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Number)
    ], MdcLinearProgress.prototype, "progress", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Number)
    ], MdcLinearProgress.prototype, "buffer", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcLinearProgress.prototype, "open", void 0);
    MdcLinearProgress = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.useView)('./mdc-linear-progress.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.customElement)('mdc-linear-progress')
    ], MdcLinearProgress);
    return MdcLinearProgress;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-linear-progress.js.map

/***/ }),

/***/ "@aurelia-mdc-web/list":
/*!*************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcList": function() { return /* reexport safe */ _mdc_list__WEBPACK_IMPORTED_MODULE_1__.MdcList; },
/* harmony export */   "MdcListItem": function() { return /* reexport safe */ _mdc_list_item_mdc_list_item__WEBPACK_IMPORTED_MODULE_2__.MdcListItem; },
/* harmony export */   "configure": function() { return /* binding */ configure; },
/* harmony export */   "mdcListStrings": function() { return /* reexport safe */ _mdc_list__WEBPACK_IMPORTED_MODULE_1__.mdcListStrings; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-list */ "@aurelia-mdc-web/list/mdc-list");
/* harmony import */ var _mdc_list_item_mdc_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdc-list-item/mdc-list-item */ "@aurelia-mdc-web/list/mdc-list-item/mdc-list-item");



function configure(config) {
    config.globalResources([
        './mdc-list',
        './mdc-list-item/mdc-list-item',
        './mdc-list-item/mdc-list-item-leading',
        './mdc-list-item/mdc-list-item-trailing',
        './mdc-list-item/enhance-mdc-list-item',
        './mdc-list-item-overline-text',
        './mdc-list-item-primary-text',
        './mdc-list-item-secondary-text',
        './mdc-list-divider/mdc-list-divider',
        './mdc-list-group',
        './mdc-deprecated-list/mdc-deprecated-list',
        './mdc-deprecated-list/mdc-deprecated-list-item/mdc-deprecated-list-item',
        './mdc-deprecated-list/mdc-deprecated-list-item/enhance-mdc-deprecated-list-item',
        './mdc-deprecated-list/mdc-deprecated-list-item-primary-text',
        './mdc-deprecated-list/mdc-deprecated-list-item-secondary-text',
        './mdc-deprecated-list/mdc-deprecated-list-item-graphic',
        './mdc-deprecated-list/mdc-deprecated-list-item-meta',
        './mdc-deprecated-list/mdc-deprecated-list-divider/mdc-deprecated-list-divider',
        './mdc-deprecated-list/mdc-deprecated-list-group',
    ]);
    config.aurelia.use.plugin('@aurelia-mdc-web/ripple');
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-deprecated-list/mdc-deprecated-list-divider/mdc-deprecated-list-divider":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-deprecated-list/mdc-deprecated-list-divider/mdc-deprecated-list-divider.js ***!
  \***********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDeprecatedListDivider": function() { return /* binding */ MdcDeprecatedListDivider; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);



/**
 * Optional, for list divider element
 * @selector mdc-deprecated-list-divider
 */
var MdcDeprecatedListDivider = /** @class */ (function () {
    function MdcDeprecatedListDivider() {
    }
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcDeprecatedListDivider.prototype, "padded", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcDeprecatedListDivider.prototype, "inset", void 0);
    MdcDeprecatedListDivider = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-deprecated-list-divider.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-deprecated-list-divider')
    ], MdcDeprecatedListDivider);
    return MdcDeprecatedListDivider;
}());

//# sourceMappingURL=mdc-deprecated-list-divider.js.map

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-deprecated-list/mdc-deprecated-list-group":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-deprecated-list/mdc-deprecated-list-group.js ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDeprecatedListGroup": function() { return /* binding */ MdcDeprecatedListGroup; },
/* harmony export */   "MdcDeprecatedListGroupSubheader": function() { return /* binding */ MdcDeprecatedListGroupSubheader; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * Optional. Wrapper around two or more mdc-list elements to be grouped together.
 * @selector mdc-deprecated-list-group
 */
var MdcDeprecatedListGroup = /** @class */ (function () {
    function MdcDeprecatedListGroup() {
    }
    MdcDeprecatedListGroup.prototype.headersChanged = function () {
        this.headers.forEach(function (x) { return x.classList.add('mdc-deprecated-list-group__subheader'); });
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.children)('h1,h2,h3,h4,h5,h6'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Array)
    ], MdcDeprecatedListGroup.prototype, "headers", void 0);
    MdcDeprecatedListGroup = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inlineView)('<template class="mdc-deprecated-list-group"><slot></slot></template>'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-deprecated-list-group')
    ], MdcDeprecatedListGroup);
    return MdcDeprecatedListGroup;
}());

var MdcDeprecatedListGroupSubheader = /** @class */ (function () {
    function MdcDeprecatedListGroupSubheader(root) {
        this.root = root;
    }
    MdcDeprecatedListGroupSubheader.prototype.attached = function () {
        this.root.classList.add('mdc-deprecated-list-group__subheader');
    };
    MdcDeprecatedListGroupSubheader = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-deprecated-list-group-subheader'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcDeprecatedListGroupSubheader);
    return MdcDeprecatedListGroupSubheader;
}());

//# sourceMappingURL=mdc-deprecated-list-group.js.map

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-deprecated-list/mdc-deprecated-list-item-graphic":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-deprecated-list/mdc-deprecated-list-item-graphic.js ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDeprecatedListItemGraphic": function() { return /* binding */ MdcDeprecatedListItemGraphic; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * Optional. The first tile in the row (in LTR languages, the first column of the list item). Typically an icon or image.
 * @selector [mdc-deprecated-list-item-graphic]
 */
var MdcDeprecatedListItemGraphic = /** @class */ (function () {
    function MdcDeprecatedListItemGraphic(root) {
        this.root = root;
    }
    MdcDeprecatedListItemGraphic.prototype.attached = function () {
        this.root.classList.add('mdc-deprecated-list-item__graphic');
    };
    MdcDeprecatedListItemGraphic = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-deprecated-list-item-graphic'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcDeprecatedListItemGraphic);
    return MdcDeprecatedListItemGraphic;
}());

//# sourceMappingURL=mdc-deprecated-list-item-graphic.js.map

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-deprecated-list/mdc-deprecated-list-item-meta":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-deprecated-list/mdc-deprecated-list-item-meta.js ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDeprecatedListItemMeta": function() { return /* binding */ MdcDeprecatedListItemMeta; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * Optional. The last tile in the row (in LTR languages, the last column of the list item). Typically small text, icon. or image.
 * @selector [mdc-deprecated-list-item-meta]
 */
var MdcDeprecatedListItemMeta = /** @class */ (function () {
    function MdcDeprecatedListItemMeta(root) {
        this.root = root;
    }
    MdcDeprecatedListItemMeta.prototype.attached = function () {
        this.root.classList.add('mdc-deprecated-list-item__meta');
    };
    MdcDeprecatedListItemMeta = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-deprecated-list-item-meta'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcDeprecatedListItemMeta);
    return MdcDeprecatedListItemMeta;
}());

//# sourceMappingURL=mdc-deprecated-list-item-meta.js.map

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-deprecated-list/mdc-deprecated-list-item-primary-text":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-deprecated-list/mdc-deprecated-list-item-primary-text.js ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDeprecatedListItemPrimaryText": function() { return /* binding */ MdcDeprecatedListItemPrimaryText; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * Optional, primary text for the list item
 * @selector mdc-deprecated-list-item-primary-text
 */
var MdcDeprecatedListItemPrimaryText = /** @class */ (function () {
    function MdcDeprecatedListItemPrimaryText() {
    }
    MdcDeprecatedListItemPrimaryText = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inlineView)('<template class="mdc-deprecated-list-item__primary-text"><slot></slot></template>'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-deprecated-list-item-primary-text')
    ], MdcDeprecatedListItemPrimaryText);
    return MdcDeprecatedListItemPrimaryText;
}());

//# sourceMappingURL=mdc-deprecated-list-item-primary-text.js.map

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-deprecated-list/mdc-deprecated-list-item-secondary-text":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-deprecated-list/mdc-deprecated-list-item-secondary-text.js ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDeprecatedListItemPrimaryText": function() { return /* binding */ MdcDeprecatedListItemPrimaryText; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * Optional, secondary text for the list item. Displayed below the primary text.
 * @selector mdc-deprecated-list-item-secondary-text
 */
var MdcDeprecatedListItemPrimaryText = /** @class */ (function () {
    function MdcDeprecatedListItemPrimaryText() {
    }
    MdcDeprecatedListItemPrimaryText = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inlineView)('<template class="mdc-deprecated-list-item__secondary-text"><slot></slot></template>'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-deprecated-list-item-secondary-text')
    ], MdcDeprecatedListItemPrimaryText);
    return MdcDeprecatedListItemPrimaryText;
}());

//# sourceMappingURL=mdc-deprecated-list-item-secondary-text.js.map

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-deprecated-list/mdc-deprecated-list-item/enhance-mdc-deprecated-list-item":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-deprecated-list/mdc-deprecated-list-item/enhance-mdc-deprecated-list-item.js ***!
  \*************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnhanceMdcDeprecatedListItem": function() { return /* binding */ EnhanceMdcDeprecatedListItem; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


var EnhanceMdcDeprecatedListItem = /** @class */ (function () {
    function EnhanceMdcDeprecatedListItem() {
    }
    EnhanceMdcDeprecatedListItem.prototype.beforeCompile = function (template) {
        var e_1, _a;
        var actions = template.querySelectorAll('[mdc-deprecated-list-item]');
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(Array.from(actions)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var i = _c.value;
                i.setAttribute('as-element', 'mdc-deprecated-list-item');
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
    EnhanceMdcDeprecatedListItem = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.viewEngineHooks
    ], EnhanceMdcDeprecatedListItem);
    return EnhanceMdcDeprecatedListItem;
}());

//# sourceMappingURL=enhance-mdc-deprecated-list-item.js.map

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-deprecated-list/mdc-deprecated-list-item/mdc-deprecated-list-item":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-deprecated-list/mdc-deprecated-list-item/mdc-deprecated-list-item.js ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDeprecatedListItem": function() { return /* binding */ MdcDeprecatedListItem; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ 1015);
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);




var listItemId = 0;
var ENTER = 13;
var SPACE = 32;
var LIST_ITEM_ACTION = 'mdclistitem:action';
/**
 * @selector mdc-deprecated-list-item
 */
var MdcDeprecatedListItem = /** @class */ (function () {
    function MdcDeprecatedListItem(root) {
        this.root = root;
        this.id = ++listItemId;
    }
    MdcDeprecatedListItem_1 = MdcDeprecatedListItem;
    MdcDeprecatedListItem.processContent = function (_viewCompiler, _resources, element) {
        var graphic = element.querySelector('mdc-checkbox:not([mdc-deprecated-list-item-meta]),[mdc-deprecated-list-item-graphic]');
        if (graphic) {
            element.removeChild(graphic);
        }
        var meta = element.querySelector('[mdc-deprecated-list-item-meta]');
        if (meta) {
            element.removeChild(meta);
        }
        var itemText = document.createElement('span');
        itemText.classList.add('mdc-deprecated-list-item__text');
        var children = [].slice.call(element.childNodes);
        for (var i = 0; i < children.length; ++i) {
            itemText.appendChild(children[i]);
        }
        if (graphic) {
            element.appendChild(graphic);
        }
        element.appendChild(itemText);
        if (meta) {
            element.appendChild(meta);
        }
        return true;
    };
    MdcDeprecatedListItem.prototype.hrefChanged = function () {
        if (this.href) {
            this.root.setAttribute('href', this.href);
        }
        else {
            this.root.removeAttribute('href');
        }
    };
    MdcDeprecatedListItem.prototype.onKeydown = function (evt) {
        if ((evt.keyCode === ENTER || evt.keyCode === SPACE) && !this.disabled) {
            this.root.dispatchEvent(new CustomEvent(LIST_ITEM_ACTION, { detail: { item: this, data: this.value }, bubbles: true }));
        }
        return true;
    };
    MdcDeprecatedListItem.prototype.onClick = function () {
        if (!this.disabled) {
            this.root.dispatchEvent(new CustomEvent(LIST_ITEM_ACTION, { detail: { item: this, data: this.value }, bubbles: true }));
        }
        return true;
    };
    var MdcDeprecatedListItem_1;
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcDeprecatedListItem.prototype, "disabled", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcDeprecatedListItem.prototype, "activated", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Object)
    ], MdcDeprecatedListItem.prototype, "value", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcDeprecatedListItem.prototype, "disableRipple", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", String)
    ], MdcDeprecatedListItem.prototype, "href", void 0);
    MdcDeprecatedListItem = MdcDeprecatedListItem_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-deprecated-list-item.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-deprecated-list-item'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.processContent)(MdcDeprecatedListItem_1.processContent),
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcDeprecatedListItem);
    return MdcDeprecatedListItem;
}());

//# sourceMappingURL=mdc-deprecated-list-item.js.map

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-deprecated-list/mdc-deprecated-list":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-deprecated-list/mdc-deprecated-list.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDeprecatedList": function() { return /* binding */ MdcDeprecatedList; },
/* harmony export */   "mdcListStrings": function() { return /* binding */ mdcListStrings; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/list */ 5794);
/* harmony import */ var _material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/list */ 7538);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-pal */ 1015);
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/dom/ponyfill */ 2851);
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);







_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.ACTION_EVENT = _material_list__WEBPACK_IMPORTED_MODULE_4__.strings.ACTION_EVENT.toLowerCase();
var mdcListStrings = {
    ITEMS_CHANGED: 'mdclist:itemschanged'
};
/**
 * @selector mdc-list
 * @emits mdclist:action | Indicates that a list item with the specified index has been activated
 * @emits mdclist:itemschanged | Indicates that the list of items has changed
 */
var MdcDeprecatedList = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(MdcDeprecatedList, _super);
    function MdcDeprecatedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Sets the list to an orientation causing the keys used for navigation to change. true results in the Up/Down arrow keys being used. If false, the Left/Right arrow keys are used. */
        _this.vertical = true;
        return _this;
    }
    MdcDeprecatedList.prototype.singleSelectionChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setSingleSelection(this.singleSelection);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcDeprecatedList.prototype.activatedChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setUseActivatedClass(this.activated);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcDeprecatedList.prototype.itemsChanged = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.layout();
        this.emit(mdcListStrings.ITEMS_CHANGED, { items: this.items }, true);
    };
    MdcDeprecatedList.prototype.typeaheadChanged = function (hasTypeahead) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setHasTypeahead(hasTypeahead);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcDeprecatedList.prototype.wrapFocusChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setWrapFocus(this.wrapFocus);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcDeprecatedList.prototype.initialSyncWithDOM = function () {
        this.layout();
        this.initializeListType();
    };
    Object.defineProperty(MdcDeprecatedList.prototype, "listElements", {
        get: function () {
            return Array.from(this.root.querySelectorAll('.mdc-deprecated-list-item'));
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Extracts the primary text from a list item.
     * @param item The list item element.
     * @return The primary text in the element.
     */
    MdcDeprecatedList.prototype.getPrimaryText = function (item) {
        var _a, _b;
        var primaryText = item.querySelector('.mdc-deprecated-list-item__primary-text');
        if (primaryText) {
            return (_a = primaryText.textContent) !== null && _a !== void 0 ? _a : '';
        }
        var singleLineText = item.querySelector('.mdc-deprecated-list-item__text');
        return (_b = singleLineText === null || singleLineText === void 0 ? void 0 : singleLineText.textContent) !== null && _b !== void 0 ? _b : '';
    };
    MdcDeprecatedList.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClassForElementIndex: function (index, className) {
                var element = _this.listElements[index];
                if (element) {
                    element.classList.add(className);
                }
            },
            focusItemAtIndex: function (index) {
                var element = _this.listElements[index];
                if (element) {
                    element.focus();
                }
            },
            getAttributeForElementIndex: function (index, attr) { return _this.listElements[index].getAttribute(attr); },
            getFocusedElementIndex: function () { return _this.listElements.indexOf(document.activeElement); },
            getListItemCount: function () { return _this.listElements.length; },
            getPrimaryTextAtIndex: function (index) { return _this.getPrimaryText(_this.listElements[index]); },
            hasCheckboxAtIndex: function (index) {
                var listItem = _this.listElements[index];
                return !!listItem.querySelector(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.CHECKBOX_SELECTOR);
            },
            hasRadioAtIndex: function (index) {
                var listItem = _this.listElements[index];
                return !!listItem.querySelector(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.RADIO_SELECTOR);
            },
            isCheckboxCheckedAtIndex: function (index) {
                var listItem = _this.listElements[index];
                var toggleEl = listItem.querySelector(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.CHECKBOX_SELECTOR);
                return toggleEl.checked;
            },
            isFocusInsideList: function () {
                return _this.root !== document.activeElement && _this.root.contains(document.activeElement);
            },
            isRootFocused: function () { return document.activeElement === _this.root; },
            listItemAtIndexHasClass: function (index, className) { return _this.listElements[index].classList.contains(className); },
            notifyAction: function (index) {
                var listItem = _this.listElements[index];
                if (!listItem.hasAttribute('no-list-action')) {
                    var data = listItem.au.controller.viewModel.value;
                    _this.emit(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.ACTION_EVENT, { index: index, data: data }, /** shouldBubble */ true);
                }
            },
            notifySelectionChange: function (changedIndices) {
                _this.emit(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.SELECTION_CHANGE_EVENT, { changedIndices: changedIndices }, /** shouldBubble */ true);
            },
            removeClassForElementIndex: function (index, className) {
                var element = _this.listElements[index];
                if (element) {
                    element.classList.remove(className);
                }
            },
            setAttributeForElementIndex: function (index, attr, value) {
                var element = _this.listElements[index];
                if (element) {
                    element.setAttribute(attr, value);
                }
            },
            setCheckedCheckboxOrRadioAtIndex: function (index, isChecked) {
                var listItem = _this.listElements[index];
                var toggleEl = listItem.querySelector(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.CHECKBOX_RADIO_SELECTOR);
                if (toggleEl === null || toggleEl === void 0 ? void 0 : toggleEl.disabled) {
                    return;
                }
                toggleEl.checked = isChecked;
                var event = document.createEvent('Event');
                event.initEvent('change', true, true);
                toggleEl.dispatchEvent(event);
            },
            setTabIndexForListItemChildren: function (listItemIndex, tabIndexValue) {
                var element = _this.listElements[listItemIndex];
                var listItemChildren = [].slice.call(element.querySelectorAll(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
                listItemChildren.forEach(function (el) { return el.setAttribute('tabindex', tabIndexValue); });
            },
        };
        return new _material_list__WEBPACK_IMPORTED_MODULE_6__.MDCListFoundation(adapter);
    };
    /**
     * @hidden
     * Used to figure out which list item this event is targetting. Or returns -1 if
     * there is no list item
     */
    MdcDeprecatedList.prototype.getListItemIndex_ = function (evt) {
        var eventTarget = evt.target;
        var nearestParent = (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_7__.closest)(eventTarget, '.mdc-deprecated-list-item, .mdc-deprecated-list');
        // Get the index of the element if it is a list item.
        if (nearestParent && (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_7__.matches)(nearestParent, '.mdc-deprecated-list-item')) {
            return this.listElements.indexOf(nearestParent);
        }
        return -1;
    };
    /**
     * @hidden
     * Used to figure out which element was clicked before sending the event to the foundation.
     */
    MdcDeprecatedList.prototype.handleFocusInEvent_ = function (evt) {
        var _a;
        var index = this.getListItemIndex_(evt);
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleFocusIn(index);
    };
    /**
     * @hidden
     * Used to figure out which element was clicked before sending the event to the foundation.
     */
    MdcDeprecatedList.prototype.handleFocusOutEvent_ = function (evt) {
        var _a;
        var index = this.getListItemIndex_(evt);
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleFocusOut(index);
    };
    /**
     * @hidden
     * Used to figure out which element was focused when keydown event occurred before sending the event to the
     * foundation.
     */
    MdcDeprecatedList.prototype.handleKeydownEvent_ = function (evt) {
        var _a;
        var index = this.getListItemIndex_(evt);
        var target = evt.target;
        if (!target.hasAttribute('not-selectable')) {
            (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleKeydown(evt, target.classList.contains('mdc-deprecated-list-item'), index);
        }
        return true;
    };
    /**
     * @hidden
     * Used to figure out which element was clicked before sending the event to the foundation.
     */
    MdcDeprecatedList.prototype.handleClickEvent_ = function (evt) {
        var _a;
        var index = this.getListItemIndex_(evt);
        var target = evt.target;
        // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
        var toggleCheckbox = !(0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_7__.matches)(target, _material_list__WEBPACK_IMPORTED_MODULE_4__.strings.CHECKBOX_RADIO_SELECTOR);
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleClick(index, toggleCheckbox);
        return true;
    };
    Object.defineProperty(MdcDeprecatedList.prototype, "typeaheadInProgress", {
        /**
         * @hidden
         * @return Whether typeahead is currently matching a user-specified prefix.
         */
        get: function () {
            return this.foundation.isTypeaheadInProgress();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     * Given the next desired character from the user, adds it to the typeahead
     * buffer. Then, attempts to find the next option matching the buffer. Wraps
     * around if at the end of options.
     *
     * @param nextChar The next character to add to the prefix buffer.
     * @param startingIndex The index from which to start matching. Defaults to
     *     the currently focused index.
     * @return The index of the matched item.
     */
    MdcDeprecatedList.prototype.typeaheadMatchItem = function (nextChar, startingIndex) {
        return this.foundation.typeaheadMatchItem(nextChar, startingIndex, /** skipFocus */ true);
    };
    MdcDeprecatedList.prototype.layout = function () {
        var _a;
        var direction = this.root.getAttribute(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.ARIA_ORIENTATION);
        this.vertical = direction !== _material_list__WEBPACK_IMPORTED_MODULE_4__.strings.ARIA_ORIENTATION_HORIZONTAL;
        // List items need to have at least tabindex=-1 to be focusable.
        [].slice.call(this.root.querySelectorAll('.mdc-deprecated-list-item:not([tabindex])'))
            .forEach(function (el) {
            el.setAttribute('tabindex', '-1');
        });
        // Child button/a elements are not tabbable until the list item is focused.
        [].slice.call(this.root.querySelectorAll(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.FOCUSABLE_CHILD_ELEMENTS))
            .forEach(function (el) { return el.setAttribute('tabindex', '-1'); });
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.layout();
    };
    Object.defineProperty(MdcDeprecatedList.prototype, "selectedIndex", {
        get: function () {
            return this.foundation.getSelectedIndex();
        },
        set: function (index) {
            var _a;
            (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setSelectedIndex(index);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
     */
    MdcDeprecatedList.prototype.initializeListType = function () {
        var _this = this;
        var checkboxListItems = this.root.querySelectorAll(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.ARIA_ROLE_CHECKBOX_SELECTOR);
        var radioSelectedListItem = this.root.querySelector(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.ARIA_CHECKED_RADIO_SELECTOR);
        if (checkboxListItems.length) {
            var preselectedItems = this.root.querySelectorAll(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.ARIA_CHECKED_CHECKBOX_SELECTOR);
            this.selectedIndex = [].map.call(preselectedItems, function (listItem) { return _this.listElements.indexOf(listItem); });
        }
        else if (radioSelectedListItem) {
            this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
        }
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcDeprecatedList.prototype, "twoLine", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcDeprecatedList.prototype, "singleSelection", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcDeprecatedList.prototype, "activated", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcDeprecatedList.prototype, "vertical", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcDeprecatedList.prototype, "dense", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcDeprecatedList.prototype, "textual", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcDeprecatedList.prototype, "avatar", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcDeprecatedList.prototype, "icon", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcDeprecatedList.prototype, "image", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcDeprecatedList.prototype, "thumbnail", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcDeprecatedList.prototype, "video", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.children)('mdc-deprecated-list-item'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Array)
    ], MdcDeprecatedList.prototype, "items", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcDeprecatedList.prototype, "typeahead", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcDeprecatedList.prototype, "wrapFocus", void 0);
    MdcDeprecatedList = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.useView)('./mdc-deprecated-list.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.customElement)('mdc-deprecated-list')
    ], MdcDeprecatedList);
    return MdcDeprecatedList;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-deprecated-list.js.map

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-list-divider/mdc-list-divider":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-list-divider/mdc-list-divider.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcListDivider": function() { return /* binding */ MdcListDivider; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);



/**
 * Optional, for list divider element
 * @selector mdc-list-divider
 */
var MdcListDivider = /** @class */ (function () {
    function MdcListDivider() {
    }
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcListDivider.prototype, "padded", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)
    ], MdcListDivider.prototype, "leadingType", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)
    ], MdcListDivider.prototype, "trailingType", void 0);
    MdcListDivider = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-list-divider.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-list-divider')
    ], MdcListDivider);
    return MdcListDivider;
}());

//# sourceMappingURL=mdc-list-divider.js.map

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-list-group":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-list-group.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcListGroup": function() { return /* binding */ MdcListGroup; },
/* harmony export */   "MdcListGroupSubheader": function() { return /* binding */ MdcListGroupSubheader; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * Optional. Wrapper around two or more mdc-list elements to be grouped together.
 * @selector mdc-list-group
 */
var MdcListGroup = /** @class */ (function () {
    function MdcListGroup() {
    }
    MdcListGroup.prototype.headersChanged = function () {
        this.headers.forEach(function (x) { return x.classList.add('mdc-list-group__subheader'); });
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.children)('h1,h2,h3,h4,h5,h6'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Array)
    ], MdcListGroup.prototype, "headers", void 0);
    MdcListGroup = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inlineView)('<template class="mdc-list-group"><slot></slot></template>'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-list-group')
    ], MdcListGroup);
    return MdcListGroup;
}());

var MdcListGroupSubheader = /** @class */ (function () {
    function MdcListGroupSubheader(root) {
        this.root = root;
    }
    MdcListGroupSubheader.prototype.attached = function () {
        this.root.classList.add('mdc-list-group__subheader');
    };
    MdcListGroupSubheader = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-list-group-subheader'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcListGroupSubheader);
    return MdcListGroupSubheader;
}());

//# sourceMappingURL=mdc-list-group.js.map

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-list-item-overline-text":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-list-item-overline-text.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcListItemOverlineText": function() { return /* binding */ MdcListItemOverlineText; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * Optional, overline text for the list item
 * @selector mdc-list-item-overline-text
 */
var MdcListItemOverlineText = /** @class */ (function () {
    function MdcListItemOverlineText() {
    }
    MdcListItemOverlineText = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inlineView)('<template class="mdc-list-item__overline-text"><slot></slot></template>'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-list-item-overline-text')
    ], MdcListItemOverlineText);
    return MdcListItemOverlineText;
}());

//# sourceMappingURL=mdc-list-item-overline-text.js.map

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-list-item-primary-text":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-list-item-primary-text.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcListItemPrimaryText": function() { return /* binding */ MdcListItemPrimaryText; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * Optional, primary text for the list item
 * @selector mdc-list-item-primary-text
 */
var MdcListItemPrimaryText = /** @class */ (function () {
    function MdcListItemPrimaryText() {
    }
    MdcListItemPrimaryText = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inlineView)('<template class="mdc-list-item__primary-text"><slot></slot></template>'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-list-item-primary-text')
    ], MdcListItemPrimaryText);
    return MdcListItemPrimaryText;
}());

//# sourceMappingURL=mdc-list-item-primary-text.js.map

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-list-item-secondary-text":
/*!************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-list-item-secondary-text.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcListItemPrimaryText": function() { return /* binding */ MdcListItemPrimaryText; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * Optional, secondary text for the list item. Displayed below the primary text.
 * @selector mdc-list-item-secondary-text
 */
var MdcListItemPrimaryText = /** @class */ (function () {
    function MdcListItemPrimaryText() {
    }
    MdcListItemPrimaryText = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inlineView)('<template class="mdc-list-item__secondary-text"><slot></slot></template>'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-list-item-secondary-text')
    ], MdcListItemPrimaryText);
    return MdcListItemPrimaryText;
}());

//# sourceMappingURL=mdc-list-item-secondary-text.js.map

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-list-item/enhance-mdc-list-item":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-list-item/enhance-mdc-list-item.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnhanceMdcListItem": function() { return /* binding */ EnhanceMdcListItem; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


var EnhanceMdcListItem = /** @class */ (function () {
    function EnhanceMdcListItem() {
    }
    EnhanceMdcListItem.prototype.beforeCompile = function (template) {
        var e_1, _a;
        var actions = template.querySelectorAll('[mdc-list-item]');
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(Array.from(actions)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var i = _c.value;
                i.setAttribute('as-element', 'mdc-list-item');
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
    EnhanceMdcListItem = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.viewEngineHooks
    ], EnhanceMdcListItem);
    return EnhanceMdcListItem;
}());

//# sourceMappingURL=enhance-mdc-list-item.js.map

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-list-item/mdc-list-item-leading":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-list-item/mdc-list-item-leading.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcListItemLeading": function() { return /* binding */ MdcListItemLeading; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * Optional, marks the leading control or media element
 * @selector [mdc-list-item-leading]
 */
var MdcListItemLeading = /** @class */ (function () {
    function MdcListItemLeading(root) {
        this.root = root;
    }
    MdcListItemLeading.prototype.attached = function () {
        var _a, _b;
        var value = this.value;
        if (!value) {
            if (this.root.classList.contains('mdc-checkbox')) {
                value = 'checkbox';
            }
            else if (this.root.classList.contains('mdc-radio')) {
                value = 'radio';
            }
            else if (this.root.classList.contains('mdc-switch')) {
                value = 'switch';
            }
            else if (this.root.classList.contains('material-icons')) {
                value = 'icon';
            }
            else if (this.root.tagName === 'IMG') {
                value = 'image';
            }
        }
        (_b = (_a = this.root.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add("mdc-list-item--with-leading-".concat(value));
    };
    MdcListItemLeading = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-list-item-leading'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [Element])
    ], MdcListItemLeading);
    return MdcListItemLeading;
}());

//# sourceMappingURL=mdc-list-item-leading.js.map

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-list-item/mdc-list-item-trailing":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-list-item/mdc-list-item-trailing.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcListItemTrailing": function() { return /* binding */ MdcListItemTrailing; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


/**
 * Optional, marks the trailing control element
 * @selector [mdc-list-item-trailing]
 */
var MdcListItemTrailing = /** @class */ (function () {
    function MdcListItemTrailing(root) {
        this.root = root;
    }
    MdcListItemTrailing.prototype.attached = function () {
        var _a, _b;
        var value = this.value;
        if (!value) {
            if (this.root.classList.contains('mdc-checkbox')) {
                value = 'checkbox';
            }
            else if (this.root.classList.contains('mdc-radio')) {
                value = 'radio';
            }
            else if (this.root.classList.contains('mdc-switch')) {
                value = 'switch';
            }
            else if (this.root.classList.contains('mdc-icon-button')) {
                value = undefined;
            }
            else if (this.root.classList.contains('material-icons')) {
                value = 'icon';
            }
        }
        if (value !== undefined) {
            (_b = (_a = this.root.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add("mdc-list-item--with-trailing-".concat(value));
        }
    };
    MdcListItemTrailing = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-list-item-trailing'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [Element])
    ], MdcListItemTrailing);
    return MdcListItemTrailing;
}());

//# sourceMappingURL=mdc-list-item-trailing.js.map

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-list-item/mdc-list-item":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-list-item/mdc-list-item.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcListItem": function() { return /* binding */ MdcListItem; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ 1015);
/* harmony import */ var _material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/list */ 5794);
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);





var listItemId = 0;
var ENTER = 13;
var SPACE = 32;
var LIST_ITEM_ACTION = 'mdclistitem:action';
/**
 * @selector mdc-list-item
 */
var MdcListItem = /** @class */ (function () {
    function MdcListItem(root) {
        this.root = root;
        this.cssClasses = _material_list__WEBPACK_IMPORTED_MODULE_3__.cssClasses;
        this.id = ++listItemId;
    }
    MdcListItem_1 = MdcListItem;
    MdcListItem.processContent = function (_viewCompiler, _resources, element) {
        var leading = element.querySelector('[mdc-list-item-leading]');
        if (leading) {
            element.removeChild(leading);
        }
        var trailing = element.querySelector('[mdc-list-item-trailing]');
        if (trailing) {
            element.removeChild(trailing);
        }
        var content = document.createElement('span');
        content.classList.add('mdc-list-item__content');
        var texts = element.querySelectorAll('mdc-list-item-overline-text, mdc-list-item-primary-text, mdc-list-item-secondary-text, template');
        var children = Array.from(element.childNodes);
        if (!texts.length) {
            var primary = document.createElement('span');
            primary.classList.add('mdc-list-item__primary-text');
            for (var i = 0; i < children.length; ++i) {
                primary.appendChild(children[i]);
            }
            content.appendChild(primary);
        }
        else {
            for (var i = 0; i < children.length; ++i) {
                content.appendChild(children[i]);
            }
        }
        if (leading) {
            var start = document.createElement('span');
            start.classList.add('mdc-list-item__start');
            start.appendChild(leading);
            element.appendChild(start);
        }
        element.appendChild(content);
        if (trailing) {
            var end = document.createElement('span');
            end.classList.add('mdc-list-item__end');
            end.appendChild(trailing);
            element.appendChild(end);
        }
        return true;
    };
    MdcListItem.prototype.hrefChanged = function () {
        if (this.href) {
            this.root.setAttribute('href', this.href);
        }
        else {
            this.root.removeAttribute('href');
        }
    };
    MdcListItem.prototype.attached = function () {
        // Child button/a elements are not tabbable until the list item is focused.
        Array.from(this.root.querySelectorAll(_material_list__WEBPACK_IMPORTED_MODULE_3__.strings.FOCUSABLE_CHILD_ELEMENTS))
            .forEach(function (el) { return el.setAttribute('tabindex', '-1'); });
    };
    MdcListItem.prototype.onKeydown = function (evt) {
        if ((evt.keyCode === ENTER || evt.keyCode === SPACE) && !this.disabled) {
            this.root.dispatchEvent(new CustomEvent(LIST_ITEM_ACTION, { detail: { item: this, data: this.value }, bubbles: true }));
        }
        return true;
    };
    MdcListItem.prototype.onClick = function () {
        if (!this.disabled) {
            this.root.dispatchEvent(new CustomEvent(LIST_ITEM_ACTION, { detail: { item: this, data: this.value }, bubbles: true }));
        }
        return true;
    };
    var MdcListItem_1;
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcListItem.prototype, "disabled", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcListItem.prototype, "activated", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcListItem.prototype, "selected", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcListItem.prototype, "nonInteractive", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcListItem.prototype, "twoLine", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcListItem.prototype, "threeLine", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
    ], MdcListItem.prototype, "value", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcListItem.prototype, "disableRipple", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
    ], MdcListItem.prototype, "href", void 0);
    MdcListItem = MdcListItem_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-list-item.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)(_material_list__WEBPACK_IMPORTED_MODULE_3__.cssClasses.LIST_ITEM_CLASS),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.processContent)(MdcListItem_1.processContent),
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcListItem);
    return MdcListItem;
}());

//# sourceMappingURL=mdc-list-item.js.map

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-list":
/*!****************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-list.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcList": function() { return /* binding */ MdcList; },
/* harmony export */   "mdcListStrings": function() { return /* binding */ mdcListStrings; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/list */ 5794);
/* harmony import */ var _material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/list */ 7538);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-pal */ 1015);
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/dom/ponyfill */ 2851);
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);







_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.ACTION_EVENT = _material_list__WEBPACK_IMPORTED_MODULE_4__.strings.ACTION_EVENT.toLowerCase();
_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.SELECTION_CHANGE_EVENT = _material_list__WEBPACK_IMPORTED_MODULE_4__.strings.SELECTION_CHANGE_EVENT.toLowerCase();
var mdcListStrings = {
    ITEMS_CHANGED: 'mdclist:itemschanged'
};
/**
 * @selector mdc-list
 * @emits mdclist:action | Indicates that a list item with the specified index has been activated
 * @emits mdclist:itemschanged | Indicates that the list of items has changed
 */
var MdcList = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(MdcList, _super);
    function MdcList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cssClasses = _material_list__WEBPACK_IMPORTED_MODULE_4__.cssClasses;
        return _this;
    }
    MdcList.prototype.singleSelectionChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setSingleSelection(this.singleSelection);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcList.prototype.activatedChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setUseActivatedClass(this.activated);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcList.prototype.itemsChanged = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.layout();
        this.emit(mdcListStrings.ITEMS_CHANGED, { items: this.items }, true);
    };
    MdcList.prototype.typeaheadChanged = function (hasTypeahead) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setHasTypeahead(hasTypeahead);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcList.prototype.wrapFocusChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setWrapFocus(this.wrapFocus);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcList.prototype.initialSyncWithDOM = function () {
        this.layout();
        this.initializeListType();
    };
    Object.defineProperty(MdcList.prototype, "listElements", {
        get: function () {
            return Array.from(this.root.querySelectorAll(".".concat(_material_list__WEBPACK_IMPORTED_MODULE_4__.cssClasses.LIST_ITEM_CLASS)));
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Extracts the primary text from a list item.
     * @param item The list item element.
     * @return The primary text in the element.
     */
    MdcList.prototype.getPrimaryText = function (item) {
        var _a, _b;
        var primaryText = item.querySelector(".".concat(_material_list__WEBPACK_IMPORTED_MODULE_4__.cssClasses.LIST_ITEM_PRIMARY_TEXT_CLASS));
        if (primaryText) {
            return (_a = primaryText.textContent) !== null && _a !== void 0 ? _a : '';
        }
        var singleLineText = item.querySelector(".".concat(_material_list__WEBPACK_IMPORTED_MODULE_4__.cssClasses.LIST_ITEM_TEXT_CLASS));
        return (_b = singleLineText === null || singleLineText === void 0 ? void 0 : singleLineText.textContent) !== null && _b !== void 0 ? _b : '';
    };
    MdcList.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClassForElementIndex: function (index, className) {
                var element = _this.listElements[index];
                if (element) {
                    element.classList.add(className);
                }
            },
            focusItemAtIndex: function (index) {
                var element = _this.listElements[index];
                if (element) {
                    element.focus();
                }
            },
            getAttributeForElementIndex: function (index, attr) { return _this.listElements[index].getAttribute(attr); },
            getFocusedElementIndex: function () { return _this.listElements.indexOf(document.activeElement); },
            getListItemCount: function () { return _this.listElements.length; },
            getPrimaryTextAtIndex: function (index) { return _this.getPrimaryText(_this.listElements[index]); },
            hasCheckboxAtIndex: function (index) {
                var listItem = _this.listElements[index];
                return !!listItem.querySelector(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.CHECKBOX_SELECTOR);
            },
            hasRadioAtIndex: function (index) {
                var listItem = _this.listElements[index];
                return !!listItem.querySelector(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.RADIO_SELECTOR);
            },
            isCheckboxCheckedAtIndex: function (index) {
                var listItem = _this.listElements[index];
                var toggleEl = listItem.querySelector(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.CHECKBOX_SELECTOR);
                return toggleEl.checked;
            },
            isFocusInsideList: function () {
                return _this.root !== document.activeElement && _this.root.contains(document.activeElement);
            },
            isRootFocused: function () { return document.activeElement === _this.root; },
            listItemAtIndexHasClass: function (index, className) { return _this.listElements[index].classList.contains(className); },
            notifyAction: function (index) {
                var listItem = _this.listElements[index];
                if (!listItem.hasAttribute('no-list-action')) {
                    var data = listItem.au.controller.viewModel.value;
                    _this.emit(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.ACTION_EVENT, { index: index, data: data }, /** shouldBubble */ true);
                }
            },
            notifySelectionChange: function (changedIndices) {
                _this.emit(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.SELECTION_CHANGE_EVENT, { changedIndices: changedIndices }, /** shouldBubble */ true);
            },
            removeClassForElementIndex: function (index, className) {
                var element = _this.listElements[index];
                if (element) {
                    element.classList.remove(className);
                }
            },
            setAttributeForElementIndex: function (index, attr, value) {
                var element = _this.listElements[index];
                if (element) {
                    element.setAttribute(attr, value);
                }
            },
            setCheckedCheckboxOrRadioAtIndex: function (index, isChecked) {
                var listItem = _this.listElements[index];
                var toggleEl = listItem.querySelector(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.CHECKBOX_RADIO_SELECTOR);
                if (toggleEl === null || toggleEl === void 0 ? void 0 : toggleEl.disabled) {
                    return;
                }
                toggleEl.checked = isChecked;
                var event = document.createEvent('Event');
                event.initEvent('change', true, true);
                toggleEl.dispatchEvent(event);
            },
            setTabIndexForListItemChildren: function (listItemIndex, tabIndexValue) {
                var element = _this.listElements[listItemIndex];
                var listItemChildren = [].slice.call(element.querySelectorAll(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
                listItemChildren.forEach(function (el) { return el.setAttribute('tabindex', tabIndexValue); });
            },
        };
        return new _material_list__WEBPACK_IMPORTED_MODULE_6__.MDCListFoundation(adapter);
    };
    /**
     * @hidden
     * Used to figure out which list item this event is targetting. Or returns -1 if
     * there is no list item
     */
    MdcList.prototype.getListItemIndex_ = function (evt) {
        var eventTarget = evt.target;
        var nearestParent = (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_7__.closest)(eventTarget, ".".concat(_material_list__WEBPACK_IMPORTED_MODULE_4__.cssClasses.LIST_ITEM_CLASS, ", .").concat(_material_list__WEBPACK_IMPORTED_MODULE_4__.cssClasses.ROOT));
        // Get the index of the element if it is a list item.
        if (nearestParent && (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_7__.matches)(nearestParent, ".".concat(_material_list__WEBPACK_IMPORTED_MODULE_4__.cssClasses.LIST_ITEM_CLASS))) {
            return this.listElements.indexOf(nearestParent);
        }
        return -1;
    };
    /**
     * @hidden
     * Used to figure out which element was clicked before sending the event to the foundation.
     */
    MdcList.prototype.handleFocusInEvent_ = function (evt) {
        var _a;
        var index = this.getListItemIndex_(evt);
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleFocusIn(index);
    };
    /**
     * @hidden
     * Used to figure out which element was clicked before sending the event to the foundation.
     */
    MdcList.prototype.handleFocusOutEvent_ = function (evt) {
        var _a;
        var index = this.getListItemIndex_(evt);
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleFocusOut(index);
    };
    /**
     * @hidden
     * Used to figure out which element was focused when keydown event occurred before sending the event to the
     * foundation.
     */
    MdcList.prototype.handleKeydownEvent_ = function (evt) {
        var _a;
        var index = this.getListItemIndex_(evt);
        var target = evt.target;
        if (!target.hasAttribute('not-selectable')) {
            (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleKeydown(evt, target.classList.contains(_material_list__WEBPACK_IMPORTED_MODULE_4__.cssClasses.LIST_ITEM_CLASS), index);
        }
        return true;
    };
    /**
     * @hidden
     * Used to figure out which element was clicked before sending the event to the foundation.
     */
    MdcList.prototype.handleClickEvent_ = function (evt) {
        var _a;
        var index = this.getListItemIndex_(evt);
        var target = evt.target;
        // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
        var isCheckboxAlreadyUpdatedInAdapter = (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_7__.matches)(target, _material_list__WEBPACK_IMPORTED_MODULE_4__.strings.CHECKBOX_RADIO_SELECTOR);
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleClick(index, isCheckboxAlreadyUpdatedInAdapter, evt);
        return true;
    };
    Object.defineProperty(MdcList.prototype, "typeaheadInProgress", {
        /**
         * @hidden
         * @return Whether typeahead is currently matching a user-specified prefix.
         */
        get: function () {
            return this.foundation.isTypeaheadInProgress();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     * Given the next desired character from the user, adds it to the typeahead
     * buffer. Then, attempts to find the next option matching the buffer. Wraps
     * around if at the end of options.
     *
     * @param nextChar The next character to add to the prefix buffer.
     * @param startingIndex The index from which to start matching. Defaults to
     *     the currently focused index.
     * @return The index of the matched item.
     */
    MdcList.prototype.typeaheadMatchItem = function (nextChar, startingIndex) {
        return this.foundation.typeaheadMatchItem(nextChar, startingIndex, /** skipFocus */ true);
    };
    MdcList.prototype.layout = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.layout();
    };
    Object.defineProperty(MdcList.prototype, "selectedIndex", {
        get: function () {
            return this.foundation.getSelectedIndex();
        },
        set: function (index) {
            var _a;
            (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setSelectedIndex(index);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
     */
    MdcList.prototype.initializeListType = function () {
        var _this = this;
        var checkboxListItems = this.root.querySelectorAll(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.ARIA_ROLE_CHECKBOX_SELECTOR);
        var radioSelectedListItem = this.root.querySelector(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.ARIA_CHECKED_RADIO_SELECTOR);
        if (checkboxListItems.length) {
            var preselectedItems = this.root.querySelectorAll(_material_list__WEBPACK_IMPORTED_MODULE_4__.strings.ARIA_CHECKED_CHECKBOX_SELECTOR);
            this.selectedIndex = [].map.call(preselectedItems, function (listItem) { return _this.listElements.indexOf(listItem); });
        }
        else if (radioSelectedListItem) {
            this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
        }
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcList.prototype, "singleSelection", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcList.prototype, "activated", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.children)('mdc-list-item'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Array)
    ], MdcList.prototype, "items", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcList.prototype, "typeahead", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcList.prototype, "wrapFocus", void 0);
    MdcList = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.useView)('./mdc-list.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.customElement)(_material_list__WEBPACK_IMPORTED_MODULE_4__.cssClasses.ROOT)
    ], MdcList);
    return MdcList;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-list.js.map

/***/ }),

/***/ 9999:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/lookup/dist/native-modules/discardable-promise.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscardablePromise": function() { return /* binding */ DiscardablePromise; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 655);

/**
 * A wrapper-promise which rejects when discarded
 */
var DiscardablePromise = /** @class */ (function () {
    function DiscardablePromise(promise) {
        this.promise = promise;
    }
    DiscardablePromise.prototype.then = function (onfulfilled, onrejected) {
        var _this = this;
        return this.promise.then(function (x) { return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(_this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
                if (this.isDiscarded) {
                    return [2 /*return*/, Promise.reject(DiscardablePromise.discarded)];
                }
                else {
                    return [2 /*return*/, Promise.resolve(x)];
                }
                return [2 /*return*/];
            });
        }); }).then(onfulfilled, onrejected);
    };
    DiscardablePromise.prototype.discard = function () {
        this.isDiscarded = true;
    };
    DiscardablePromise.discarded = Symbol('discarded');
    return DiscardablePromise;
}());

//# sourceMappingURL=discardable-promise.js.map

/***/ }),

/***/ "@aurelia-mdc-web/lookup":
/*!***************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/lookup/dist/native-modules/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcLookup": function() { return /* reexport safe */ _mdc_lookup__WEBPACK_IMPORTED_MODULE_2__.MdcLookup; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_lookup_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-lookup-configuration */ 1077);
/* harmony import */ var _mdc_lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdc-lookup */ "@aurelia-mdc-web/lookup/mdc-lookup");



function configure(frameworkConfig, callback) {
    // make sure missing plugin does not crash the template compiler
    var resources = frameworkConfig.container.get(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.ViewResources);
    resources.getAttribute = (function (fn) { return function (attrName) {
        if (attrName === 'virtual-repeat' && !this.attributes['virtual-repeat']) {
            attrName = 'repeat';
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return fn.call(this, attrName);
    }; })(resources.getAttribute);
    frameworkConfig.globalResources([
        './mdc-lookup'
    ]);
    if (typeof callback === 'function') {
        var config = frameworkConfig.container.get(_mdc_lookup_configuration__WEBPACK_IMPORTED_MODULE_1__.MdcDefaultLookupConfiguration);
        callback(config);
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1077:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/lookup/dist/native-modules/mdc-lookup-configuration.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDefaultLookupConfiguration": function() { return /* binding */ MdcDefaultLookupConfiguration; }
/* harmony export */ });
/** Configuration object */
var MdcDefaultLookupConfiguration = /** @class */ (function () {
    function MdcDefaultLookupConfiguration() {
        /** Default debounce time in milliseconds */
        this.debounce = 850;
        /** Default message displayed while async options function is being executed */
        this.searchingMessage = 'Searching...';
        /** Default message displayed when options are not found */
        this.notFoundMessage = 'Not found';
    }
    return MdcDefaultLookupConfiguration;
}());

//# sourceMappingURL=mdc-lookup-configuration.js.map

/***/ }),

/***/ "@aurelia-mdc-web/lookup/mdc-lookup":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/lookup/dist/native-modules/mdc-lookup.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcLookup": function() { return /* binding */ MdcLookup; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _discardable_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discardable-promise */ 9999);
/* harmony import */ var _mdc_lookup_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdc-lookup-configuration */ 1077);
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/dom/ponyfill */ 2851);






var inputEvents = ['click', 'input', 'keydown', 'blur'];
var bodyEvents = ['touchstart', 'mousedown'];
/**
 * @selector mdc-lookup
 */
var MdcLookup = /** @class */ (function () {
    function MdcLookup(root, defaultConfiguration) {
        this.root = root;
        this.defaultConfiguration = defaultConfiguration;
        this.isWrapperOpen = false;
        this.focusedOption = undefined;
        this.searching = false;
        this.errorMessage = undefined;
        this.notFound = false;
        this.getDisplay = function (option) { var _a; return (_a = option === null || option === void 0 ? void 0 : option.toString()) !== null && _a !== void 0 ? _a : ''; };
        this.getValue = function (option) { return option; };
        /** Sets debounce in milliseconds */
        this.debounce = this.defaultConfiguration.debounce;
        defineMdcLookupElementApis(this.root);
    }
    MdcLookup.prototype.displayFieldChanged = function () {
        var _this = this;
        if (this.displayField instanceof Function) {
            this.getDisplay = this.displayField;
        }
        else if (typeof this.displayField === 'string') {
            this.getDisplay = function (option) { return option ? option[_this.displayField] : ''; };
        }
        else {
            this.getDisplay = function (option) { var _a; return (_a = option === null || option === void 0 ? void 0 : option.toString()) !== null && _a !== void 0 ? _a : ''; };
        }
    };
    MdcLookup.prototype.valueFieldChanged = function () {
        var _this = this;
        if (this.valueField instanceof Function) {
            this.getValue = this.valueField;
        }
        else if (typeof this.valueField === 'string') {
            this.getValue = function (option) { return option !== undefined ? option[_this.valueField] : undefined; };
        }
        else {
            this.getValue = function (option) { return option; };
        }
    };
    MdcLookup.prototype.optionsChanged = function () {
        var shouldRefresh = this.getOptions !== undefined;
        this.setGetOptions();
        if (shouldRefresh) {
            this.optionsArray = undefined;
            this.value = undefined;
            if (this.preloadOptions) {
                this.loadOptions(false);
            }
        }
    };
    MdcLookup.prototype.setGetOptions = function () {
        if (this.options instanceof Function) {
            this.getOptions = this.options;
        }
        else {
            this.getOptions = this.getOptionsDefault;
        }
    };
    MdcLookup.prototype.getOptionsDefault = function (filter, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                options = this.options;
                if (value !== undefined) {
                    return [2 /*return*/, Promise.resolve([options.find(function (x) { return _this.getValue(x) === value; })])];
                }
                else {
                    return [2 /*return*/, Promise.resolve(options.filter(function (x) { return _this.getDisplay(x).toUpperCase().includes((filter || '').toUpperCase()); }))];
                }
                return [2 /*return*/];
            });
        });
    };
    MdcLookup.prototype.valueChanged = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.suppressValueChanged) {
                            this.suppressValueChanged = false;
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.updateFilterBasedOnValue()];
                    case 1:
                        _a.sent();
                        this.root.dispatchEvent(new CustomEvent('change', { bubbles: true, detail: { value: this.value } }));
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcLookup.prototype.setValue = function (value) {
        if (this.value === value) {
            return;
        }
        this.suppressValueChanged = true;
        this.value = value;
    };
    MdcLookup.prototype.bind = function () {
        this.valueFieldChanged();
        this.displayFieldChanged();
        this.setGetOptions();
    };
    MdcLookup.prototype.attached = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.input) {
                            inputEvents.forEach(function (x) { return _this.input.addEventListener(x, _this); });
                        }
                        return [4 /*yield*/, this.updateFilterBasedOnValue()];
                    case 1:
                        _a.sent();
                        if (!(!this.value && this.preloadOptions)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.loadOptions(false)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        bodyEvents.forEach(function (x) { return document.body.addEventListener(x, _this); });
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcLookup.prototype.detached = function () {
        var _this = this;
        if (this.input) {
            inputEvents.forEach(function (x) { return _this.input.removeEventListener(x, _this); });
        }
        bodyEvents.forEach(function (x) { return document.body.removeEventListener(x, _this); });
    };
    /** Opens lookup menu */
    MdcLookup.prototype.open = function () {
        var _a, _b, _c;
        if (((_a = this.input) === null || _a === void 0 ? void 0 : _a.disabled) || ((_b = this.input) === null || _b === void 0 ? void 0 : _b.readOnly) || this.menu.open || this.optionsArray === undefined && !this.searching && !this.errorMessage) {
            return;
        }
        if (!this.naturalWidth) {
            this.menu.root.style.width = "".concat((_c = this.input) === null || _c === void 0 ? void 0 : _c.clientWidth, "px");
        }
        this.menu.open = true;
    };
    /** Closes lookup menu */
    MdcLookup.prototype.close = function () {
        this.menu.open = false;
    };
    MdcLookup.prototype.handleEvent = function (evt) {
        switch (evt.currentTarget) {
            case this.input:
                switch (evt.type) {
                    case 'click':
                        this.open();
                        break;
                    case 'input':
                        this.filterChanged();
                        break;
                    case 'keydown':
                        this.onInputKeydown(evt);
                        break;
                    case 'blur':
                        this.onBlur();
                        break;
                }
                break;
            case document.body:
                switch (evt.type) {
                    case 'mousedown':
                        this.onBodyMousedown(evt);
                        break;
                    case 'touchstart':
                        this.onBodyMousedown(evt);
                        break;
                }
                break;
        }
    };
    MdcLookup.prototype.filterChanged = function () {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var e_1;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        (_a = this.debouncePromise) === null || _a === void 0 ? void 0 : _a.discard();
                        this.debouncePromise = new _discardable_promise__WEBPACK_IMPORTED_MODULE_1__.DiscardablePromise(new Promise(function (r) { var _a; return setTimeout(function () { return r(); }, (_a = _this.debounce) !== null && _a !== void 0 ? _a : 0); }));
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.debouncePromise];
                    case 2:
                        _d.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _d.sent();
                        return [2 /*return*/];
                    case 4:
                        this.setValue(undefined);
                        (_b = this.searchPromise) === null || _b === void 0 ? void 0 : _b.discard();
                        return [4 /*yield*/, this.loadOptions(((_c = this.input) === null || _c === void 0 ? void 0 : _c.isFocused) === true)];
                    case 5:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcLookup.prototype.loadOptions = function (open) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var _b, e_2;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.searching = true;
                        this.errorMessage = undefined;
                        if (open) {
                            this.open();
                        }
                        this.optionsArray = undefined;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, 4, 5]);
                        this.searchPromise = new _discardable_promise__WEBPACK_IMPORTED_MODULE_1__.DiscardablePromise(this.getOptions((_a = this.input) === null || _a === void 0 ? void 0 : _a.value, undefined));
                        _b = this;
                        return [4 /*yield*/, this.searchPromise];
                    case 2:
                        _b.optionsArray = _c.sent();
                        if (this.optionsArray === undefined) {
                            this.close();
                        }
                        return [3 /*break*/, 5];
                    case 3:
                        e_2 = _c.sent();
                        if (e_2 !== _discardable_promise__WEBPACK_IMPORTED_MODULE_1__.DiscardablePromise.discarded) {
                            this.errorMessage = e_2.message;
                            this.optionsArray = undefined;
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        this.searching = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MdcLookup.prototype.setFilter = function (filter) {
        if (!this.input || this.input.value === filter) {
            return;
        }
        this.input.value = filter !== null && filter !== void 0 ? filter : '';
    };
    MdcLookup.prototype.updateFilterBasedOnValue = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            var _b;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.value !== undefined)) return [3 /*break*/, 2];
                        _b = this;
                        return [4 /*yield*/, this.getOptions(undefined, this.value)];
                    case 1:
                        _b.optionsArray = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.optionsArray = undefined;
                        _c.label = 3;
                    case 3:
                        if ((_a = this.optionsArray) === null || _a === void 0 ? void 0 : _a.length) {
                            this.setFilter(this.getDisplay(this.optionsArray[0]));
                        }
                        else {
                            this.setFilter(undefined);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcLookup.prototype.handleMenuItemAction = function (evt) {
        this.select(evt.detail.data);
    };
    MdcLookup.prototype.select = function (option) {
        var _a;
        this.value = this.getValue(option);
        this.close();
        (_a = this.input) === null || _a === void 0 ? void 0 : _a.focus();
    };
    MdcLookup.prototype.onBlur = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.suppressBlur) {
                            this.suppressBlur = false;
                            return [2 /*return*/];
                        }
                        if (this.selectOnBlur && ((_a = this.optionsArray) === null || _a === void 0 ? void 0 : _a.length) && this.value === undefined) {
                            this.value = this.getValue(this.optionsArray[0]);
                        }
                        this.close();
                        if (!(this.debouncePromise !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.debouncePromise];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        this.root.dispatchEvent(new CustomEvent('blur'));
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcLookup.prototype.onInputKeydown = function (evt) {
        var _a, _b, _c, _d;
        switch (evt.code) {
            case 'ArrowDown':
                if (!this.menu.open) {
                    this.open();
                }
                this.suppressBlur = true;
                (_b = (_a = this.menu.list_) === null || _a === void 0 ? void 0 : _a.foundation) === null || _b === void 0 ? void 0 : _b.focusFirstElement();
                break;
            case 'ArrowUp':
                if (!this.menu.open) {
                    this.open();
                }
                this.suppressBlur = true;
                (_d = (_c = this.menu.list_) === null || _c === void 0 ? void 0 : _c.foundation) === null || _d === void 0 ? void 0 : _d.focusLastElement();
                break;
            case 'Space':
                if (evt.ctrlKey) {
                    if (this.menu.open) {
                        this.close();
                    }
                    else {
                        this.loadOptions(true);
                    }
                }
                break;
        }
    };
    MdcLookup.prototype.onBodyMousedown = function (evt) {
        if ((0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_5__.closest)(evt.target, 'mdc-menu')) {
            evt.preventDefault();
        }
        return true;
    };
    MdcLookup.prototype.handleMenuKeydown = function (event) {
        var _a;
        if (this.hoistToBody && (event.key === 'Tab' || event.keyCode === 9)) {
            (_a = this.input) === null || _a === void 0 ? void 0 : _a.focus();
        }
        return true;
    };
    MdcLookup.prototype.addError = function (error) {
        if (this.input && Object.getOwnPropertyDescriptor(this.input, 'addError')) {
            this.input.addError(error);
        }
    };
    MdcLookup.prototype.removeError = function (error) {
        if (this.input && Object.getOwnPropertyDescriptor(this.input, 'addError')) {
            this.input.removeError(error);
        }
    };
    MdcLookup.prototype.renderErrors = function () {
        if (this.input && Object.getOwnPropertyDescriptor(this.input, 'renderErrors')) {
            this.input.renderErrors();
        }
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
    ], MdcLookup.prototype, "input", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcLookup.prototype, "twoLine", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
    ], MdcLookup.prototype, "displayField", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
    ], MdcLookup.prototype, "valueField", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
    ], MdcLookup.prototype, "options", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr({ defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindingMode.oneTime }),
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcLookup.prototype, "hoistToBody", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcLookup.prototype, "naturalWidth", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
    ], MdcLookup.prototype, "menuClass", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable)({ defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindingMode.twoWay }),
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
    ], MdcLookup.prototype, "value", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
    ], MdcLookup.prototype, "debounce", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcLookup.prototype, "preloadOptions", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcLookup.prototype, "selectOnBlur", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcLookup.prototype, "selectOnTab", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcLookup.prototype, "virtual", void 0);
    MdcLookup = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element, _mdc_lookup_configuration__WEBPACK_IMPORTED_MODULE_2__.MdcDefaultLookupConfiguration),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-lookup'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-lookup.html'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [HTMLElement, _mdc_lookup_configuration__WEBPACK_IMPORTED_MODULE_2__.MdcDefaultLookupConfiguration])
    ], MdcLookup);
    return MdcLookup;
}());

function defineMdcLookupElementApis(element) {
    Object.defineProperties(element, {
        addError: {
            value: function (error) {
                this.au.controller.viewModel.addError(error);
            },
            configurable: true
        },
        removeError: {
            value: function (error) {
                this.au.controller.viewModel.removeError(error);
            },
            configurable: true
        },
        renderErrors: {
            value: function () {
                this.au.controller.viewModel.renderErrors();
            },
            configurable: true
        },
    });
}
//# sourceMappingURL=mdc-lookup.js.map

/***/ }),

/***/ "@aurelia-mdc-web/menu-surface":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/menu-surface/dist/native-modules/index.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcMenuSurface": function() { return /* reexport safe */ _mdc_menu_surface__WEBPACK_IMPORTED_MODULE_1__.MdcMenuSurface; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_menu_surface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-menu-surface */ "@aurelia-mdc-web/menu-surface/mdc-menu-surface");


function configure(config) {
    config.globalResources([
        './mdc-menu-surface',
        './mdc-menu-surface-anchor'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/menu-surface/mdc-menu-surface-anchor":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/menu-surface/dist/native-modules/mdc-menu-surface-anchor.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcMenuSurfaceAnchor": function() { return /* binding */ MdcMenuSurfaceAnchor; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _material_menu_surface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/menu-surface */ 5479);



var MdcMenuSurfaceAnchor = /** @class */ (function () {
    function MdcMenuSurfaceAnchor(root) {
        this.root = root;
    }
    MdcMenuSurfaceAnchor.prototype.attached = function () {
        this.root.classList.add(_material_menu_surface__WEBPACK_IMPORTED_MODULE_1__.cssClasses.ANCHOR);
    };
    MdcMenuSurfaceAnchor = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-menu-surface-anchor'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcMenuSurfaceAnchor);
    return MdcMenuSurfaceAnchor;
}());

//# sourceMappingURL=mdc-menu-surface-anchor.js.map

/***/ }),

/***/ "@aurelia-mdc-web/menu-surface/mdc-menu-surface":
/*!********************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/menu-surface/dist/native-modules/mdc-menu-surface.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcMenuSurface": function() { return /* binding */ MdcMenuSurface; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_menu_surface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/menu-surface */ 5479);
/* harmony import */ var _material_menu_surface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/menu-surface */ 7277);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);
/* harmony import */ var _material_animation_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/animation/util */ 5475);






_material_menu_surface__WEBPACK_IMPORTED_MODULE_3__.strings.OPENED_EVENT = _material_menu_surface__WEBPACK_IMPORTED_MODULE_3__.strings.OPENED_EVENT.toLowerCase();
_material_menu_surface__WEBPACK_IMPORTED_MODULE_3__.strings.CLOSED_EVENT = _material_menu_surface__WEBPACK_IMPORTED_MODULE_3__.strings.CLOSED_EVENT.toLowerCase();
var MdcMenuSurface = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(MdcMenuSurface, _super);
    function MdcMenuSurface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdcMenuSurface.prototype.fixedChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.fixed) {
                            this.root.classList.add(_material_menu_surface__WEBPACK_IMPORTED_MODULE_3__.cssClasses.FIXED);
                        }
                        else {
                            this.root.classList.remove(_material_menu_surface__WEBPACK_IMPORTED_MODULE_3__.cssClasses.FIXED);
                        }
                        return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setFixedPosition(this.fixed);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcMenuSurface.prototype.anchorCornerChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setAnchorCorner(_material_menu_surface__WEBPACK_IMPORTED_MODULE_3__.Corner[this.anchorCorner]);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcMenuSurface.prototype.anchorMarginChanged = function (margin) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setAnchorMargin(margin);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcMenuSurface.prototype.quickOpenChanged = function (quickOpen) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setQuickOpen(quickOpen);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcMenuSurface.prototype.fullWidthChanged = function () {
        if (this.fullWidth) {
            this.root.classList.add('mdc-menu-surface--fullwidth');
        }
        else {
            this.root.classList.remove('mdc-menu-surface--fullwidth');
        }
    };
    MdcMenuSurface.prototype.maxHeightChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setMaxHeight(this.maxHeight);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcMenuSurface.prototype.horizontallyCenteredOnViewportChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setIsHorizontallyCenteredOnViewport(this.horizontallyCenteredOnViewport);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcMenuSurface.prototype.openBottomBiasChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setOpenBottomBias(this.openBottomBias);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(MdcMenuSurface.prototype, "open", {
        get: function () {
            var _a, _b;
            return (_b = (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.isOpen()) !== null && _b !== void 0 ? _b : false;
        },
        set: function (value) {
            var _a, _b;
            if (value) {
                (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.open();
            }
            else {
                (_b = this.foundation) === null || _b === void 0 ? void 0 : _b.close();
            }
        },
        enumerable: false,
        configurable: true
    });
    MdcMenuSurface.prototype.handleKeydown = function (evt) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleKeydown(evt);
    };
    MdcMenuSurface.prototype.handleBodyClick = function (evt) {
        var _a;
        if (!this.stayOpen) {
            (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleBodyClick(evt);
        }
    };
    // eslint-disable-next-line @typescript-eslint/require-await
    MdcMenuSurface.prototype.initialise = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                this.root.classList.add(_material_menu_surface__WEBPACK_IMPORTED_MODULE_3__.cssClasses.ROOT);
                return [2 /*return*/];
            });
        });
    };
    MdcMenuSurface.prototype.handleEvent = function (evt) {
        switch (evt.currentTarget) {
            case this.root:
                switch (evt.type) {
                    case 'keydown':
                        this.handleKeydown(evt);
                        break;
                }
                break;
            case document.body:
                switch (evt.type) {
                    case 'click':
                        this.handleBodyClick(evt);
                        break;
                }
                break;
        }
    };
    MdcMenuSurface.prototype.registerBodyClickListener = function () {
        // this is different to native implementation
        // refer to https://github.com/material-components/material-components-web/issues/6188
        // capture so that no race between handleBodyClick and quickOpen when
        // menusurface opened on button click which registers this listener
        document.body.addEventListener('click', this);
    };
    MdcMenuSurface.prototype.deregisterBodyClickListener = function () {
        document.body.removeEventListener('click', this);
    };
    MdcMenuSurface.prototype.initialSyncWithDOM = function () {
        var _a, _b, _c, _d, _e, _f;
        var parentEl = this.root.parentElement;
        if (!this.anchor) {
            this.anchor = (parentEl === null || parentEl === void 0 ? void 0 : parentEl.classList.contains(_material_menu_surface__WEBPACK_IMPORTED_MODULE_3__.cssClasses.ANCHOR)) ? parentEl : null;
        }
        if (this.hoistToBody) {
            this.originalParent = this.root.parentElement;
            if (this.originalParent) {
                document.body.appendChild(this.originalParent.removeChild(this.root));
                (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setIsHoisted(true);
            }
        }
        (_b = this.foundation) === null || _b === void 0 ? void 0 : _b.setFixedPosition(this.fixed);
        if (this.anchorCorner) {
            (_c = this.foundation) === null || _c === void 0 ? void 0 : _c.setAnchorCorner(_material_menu_surface__WEBPACK_IMPORTED_MODULE_3__.Corner[this.anchorCorner]);
        }
        if (this.anchorMargin) {
            (_d = this.foundation) === null || _d === void 0 ? void 0 : _d.setAnchorMargin(this.anchorMargin);
        }
        if (this.maxHeight) {
            (_e = this.foundation) === null || _e === void 0 ? void 0 : _e.setMaxHeight(this.maxHeight);
        }
        if (this.horizontallyCenteredOnViewport !== undefined) {
            (_f = this.foundation) === null || _f === void 0 ? void 0 : _f.setIsHorizontallyCenteredOnViewport(this.horizontallyCenteredOnViewport);
        }
        this.listen('keydown', this);
    };
    MdcMenuSurface.prototype.destroy = function () {
        this.unlisten('keydown', this);
        if (this.originalParent) {
            this.originalParent.appendChild(document.body.removeChild(this.root));
        }
        _super.prototype.destroy.call(this);
    };
    MdcMenuSurface.prototype.close = function (skipRestoreFocus) {
        var _a;
        if (skipRestoreFocus === void 0) { skipRestoreFocus = false; }
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.close(skipRestoreFocus);
    };
    /** Sets the absolute x/y position to position based on. Requires the menu to be hoisted. */
    MdcMenuSurface.prototype.setAbsolutePosition = function (x, y) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setAbsolutePosition(x, y);
        this.hoistToBody = true;
    };
    /**
     * @param corner Default anchor corner alignment of top-left surface corner.
     */
    MdcMenuSurface.prototype.setAnchorCorner = function (corner) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setAnchorCorner(corner);
    };
    MdcMenuSurface.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            hasAnchor: function () { return !!_this.anchor; },
            notifyClose: function () {
                _this.emit(_material_menu_surface__WEBPACK_IMPORTED_MODULE_5__.MDCMenuSurfaceFoundation.strings.CLOSED_EVENT, {});
                _this.deregisterBodyClickListener();
            },
            notifyClosing: function () {
                _this.emit(_material_menu_surface__WEBPACK_IMPORTED_MODULE_5__.MDCMenuSurfaceFoundation.strings.CLOSING_EVENT, {});
            },
            notifyOpen: function () {
                _this.emit(_material_menu_surface__WEBPACK_IMPORTED_MODULE_5__.MDCMenuSurfaceFoundation.strings.OPENED_EVENT, {});
                _this.registerBodyClickListener();
            },
            notifyOpening: function () {
                _this.emit(_material_menu_surface__WEBPACK_IMPORTED_MODULE_5__.MDCMenuSurfaceFoundation.strings.OPENING_EVENT, {});
            },
            isElementInContainer: function (el) { return _this.root.contains(el); },
            isRtl: function () { return getComputedStyle(_this.root).getPropertyValue('direction') === 'rtl'; },
            setTransformOrigin: function (origin) {
                var propertyName = "".concat((0,_material_animation_util__WEBPACK_IMPORTED_MODULE_6__.getCorrectPropertyName)(window, 'transform'), "-origin");
                _this.root.style.setProperty(propertyName, origin);
            },
            isFocused: function () { return document.activeElement === _this.root; },
            saveFocus: function () {
                _this.previousFocus = document.activeElement;
            },
            restoreFocus: function () {
                var _a;
                if (_this.root.contains(document.activeElement)) {
                    if ((_a = _this.previousFocus) === null || _a === void 0 ? void 0 : _a.focus) {
                        _this.previousFocus.focus();
                    }
                }
            },
            getInnerDimensions: function () {
                var firstChild = _this.root.firstElementChild;
                // workaround https://github.com/material-components/material-components-web/issues/6709
                // by explicitly displaying vertical scroll if a list does not fit
                _this.root.style.overflowY = _this.root.offsetHeight < firstChild.offsetHeight ? 'scroll' : '';
                return {
                    width: _this.root.offsetWidth,
                    height: _this.root.offsetHeight
                };
            },
            getAnchorDimensions: function () { return _this.anchor ? _this.anchor.getBoundingClientRect() : null; },
            getWindowDimensions: function () {
                return { width: window.innerWidth, height: window.innerHeight };
            },
            getBodyDimensions: function () {
                return { width: document.body.clientWidth, height: document.body.clientHeight };
            },
            getWindowScroll: function () {
                return { x: window.pageXOffset, y: window.pageYOffset };
            },
            setPosition: function (position) {
                var rootHTML = _this.root;
                rootHTML.style.left = 'left' in position ? "".concat(position.left, "px") : '';
                rootHTML.style.right = 'right' in position ? "".concat(position.right, "px") : '';
                rootHTML.style.top = 'top' in position ? "".concat(position.top, "px") : '';
                rootHTML.style.bottom = 'bottom' in position ? "".concat(position.bottom, "px") : '';
            },
            setMaxHeight: function (height) {
                (_this.root).style.maxHeight = height;
            },
        };
        return new _material_menu_surface__WEBPACK_IMPORTED_MODULE_5__.MDCMenuSurfaceFoundation(adapter);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
    ], MdcMenuSurface.prototype, "anchor", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr({ defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.bindingMode.oneTime }),
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcMenuSurface.prototype, "hoistToBody", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcMenuSurface.prototype, "fixed", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
    ], MdcMenuSurface.prototype, "anchorCorner", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
    ], MdcMenuSurface.prototype, "anchorMargin", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcMenuSurface.prototype, "quickOpen", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcMenuSurface.prototype, "fullWidth", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcMenuSurface.prototype, "stayOpen", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
    ], MdcMenuSurface.prototype, "maxHeight", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcMenuSurface.prototype, "horizontallyCenteredOnViewport", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
    ], MdcMenuSurface.prototype, "openBottomBias", void 0);
    MdcMenuSurface = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.customAttribute)('mdc-menu-surface')
    ], MdcMenuSurface);
    return MdcMenuSurface;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-menu-surface.js.map

/***/ }),

/***/ "@aurelia-mdc-web/menu":
/*!*************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/menu/dist/native-modules/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcMenu": function() { return /* reexport safe */ _mdc_menu__WEBPACK_IMPORTED_MODULE_1__.MdcMenu; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-menu */ "@aurelia-mdc-web/menu/mdc-menu");


function configure(config) {
    config.globalResources([
        './mdc-menu',
        './mdc-menu-selection-group',
        './mdc-menu-selection-group-icon'
    ]);
    config.aurelia.use
        .plugin('@aurelia-mdc-web/menu-surface')
        .plugin('@aurelia-mdc-web/list');
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/menu/mdc-menu-selection-group-icon":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/menu/dist/native-modules/mdc-menu-selection-group-icon.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcMenuSelectionGroupIcon": function() { return /* binding */ MdcMenuSelectionGroupIcon; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


var MdcMenuSelectionGroupIcon = /** @class */ (function () {
    function MdcMenuSelectionGroupIcon(root) {
        this.root = root;
    }
    MdcMenuSelectionGroupIcon.prototype.attached = function () {
        this.root.classList.add('mdc-menu__selection-group-icon');
    };
    MdcMenuSelectionGroupIcon = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-menu-selection-group-icon'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcMenuSelectionGroupIcon);
    return MdcMenuSelectionGroupIcon;
}());

//# sourceMappingURL=mdc-menu-selection-group-icon.js.map

/***/ }),

/***/ "@aurelia-mdc-web/menu/mdc-menu-selection-group":
/*!********************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/menu/dist/native-modules/mdc-menu-selection-group.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcMenuSelectionGroup": function() { return /* binding */ MdcMenuSelectionGroup; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


var MdcMenuSelectionGroup = /** @class */ (function () {
    function MdcMenuSelectionGroup() {
    }
    MdcMenuSelectionGroup = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inlineView)('<template class="mdc-menu__selection-group"><slot></slot></template>'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-menu-selection-group')
    ], MdcMenuSelectionGroup);
    return MdcMenuSelectionGroup;
}());

//# sourceMappingURL=mdc-menu-selection-group.js.map

/***/ }),

/***/ "@aurelia-mdc-web/menu/mdc-menu":
/*!****************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/menu/dist/native-modules/mdc-menu.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcMenu": function() { return /* binding */ MdcMenu; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/menu */ 7589);
/* harmony import */ var _material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/menu */ 7424);
/* harmony import */ var _material_list_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/list/constants */ 5794);
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/dom/ponyfill */ 2851);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);







_material_menu__WEBPACK_IMPORTED_MODULE_3__.strings.SELECTED_EVENT = _material_menu__WEBPACK_IMPORTED_MODULE_3__.strings.SELECTED_EVENT.toLowerCase();
/**
 * @selector mdc-menu
 * @emits mdcmenu:selected | Indicates that a menu item has been selected
 */
var MdcMenu = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(MdcMenu, _super);
    function MdcMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Sets default focus state where the menu should focus every time when menu is opened. Focuses the list root ('list') element by default. */
        _this.defaultFocusState = 'LIST_ROOT';
        return _this;
    }
    Object.defineProperty(MdcMenu.prototype, "list_", {
        // @child('mdc-list')
        get: function () {
            var el = this.root.querySelector('mdc-list,mdc-deprecated-list');
            return el === null || el === void 0 ? void 0 : el.au.controller.viewModel;
        },
        enumerable: false,
        configurable: true
    });
    MdcMenu.prototype.typeaheadChanged = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _a.sent();
                        if (this.list_) {
                            this.list_.typeahead = this.typeahead;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcMenu.prototype.defaultFocusStateChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setDefaultFocusState(_material_menu__WEBPACK_IMPORTED_MODULE_3__.DefaultFocusState[this.defaultFocusState]);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcMenu.prototype.skipRestoreFocusChanged = function () {
        if (this.skipRestoreFocus) {
            this.root.setAttribute('data-menu-item-skip-restore-focus', 'true');
        }
        else {
            this.root.removeAttribute('data-menu-item-skip-restore-focus');
        }
    };
    MdcMenu.prototype.handleKeydown_ = function (evt) {
        var _a, _b, _c, _d, _e;
        var focusedItemIndex = (_c = (_b = (_a = this.list_) === null || _a === void 0 ? void 0 : _a.foundation) === null || _b === void 0 ? void 0 : _b.getFocusedItemIndex()) !== null && _c !== void 0 ? _c : _material_list_constants__WEBPACK_IMPORTED_MODULE_5__.numbers.UNSET_INDEX;
        if (this.selectOnTab && (evt.key === 'Tab' || evt.keyCode === 9)
            && focusedItemIndex !== _material_list_constants__WEBPACK_IMPORTED_MODULE_5__.numbers.UNSET_INDEX) {
            (_d = this.foundation) === null || _d === void 0 ? void 0 : _d.handleItemAction(this.items[focusedItemIndex]);
        }
        else {
            (_e = this.foundation) === null || _e === void 0 ? void 0 : _e.handleKeydown(evt);
        }
        return true;
    };
    MdcMenu.prototype.handleItemAction_ = function (evt) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleItemAction(this.items[evt.detail.index]);
        return true;
    };
    MdcMenu.prototype.handleMenuSurfaceOpened_ = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleMenuSurfaceOpened();
        return true;
    };
    Object.defineProperty(MdcMenu.prototype, "open", {
        get: function () {
            return this.menuSurface.open;
        },
        set: function (value) {
            this.menuSurface.open = value;
        },
        enumerable: false,
        configurable: true
    });
    /** Toggles the menu to open or close */
    MdcMenu.prototype.toggle = function () {
        this.open = !this.open;
    };
    MdcMenu.prototype.openAnchored = function (anchor) {
        this.anchor = anchor;
        this.open = true;
    };
    Object.defineProperty(MdcMenu.prototype, "wrapFocus", {
        get: function () {
            return this.list_ ? this.list_.wrapFocus : false;
        },
        set: function (value) {
            if (this.list_) {
                this.list_.wrapFocus = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdcMenu.prototype, "typeaheadInProgress", {
        /**
         * @return Whether typeahead logic is currently matching some user prefix.
         */
        get: function () {
            return this.list_ ? this.list_.typeaheadInProgress : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdcMenu.prototype, "items", {
        /**
         * Return the items within the menu. Note that this only contains the set of elements within
         * the items container that are proper list items, and not supplemental / presentational DOM
         * elements.
         */
        get: function () {
            return this.list_ ? this.list_.listElements : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdcMenu.prototype, "selectedIndex", {
        /**
         * Retrieves the selected index. Only applicable to select menus.
         * @return The selected index, which is a number for single selection and
         *     radio lists, and an array of numbers for checkbox lists.
         */
        get: function () {
            return this.list_ ? this.list_.selectedIndex : _material_list_constants__WEBPACK_IMPORTED_MODULE_5__.numbers.UNSET_INDEX;
        },
        /**
         * Sets the selected index of the list. Only applicable to select menus.
         * @param index The selected index, which is a number for single selection and
         *     radio lists, and an array of numbers for checkbox lists.
         */
        set: function (index) {
            if (this.list_) {
                this.list_.selectedIndex = index;
            }
        },
        enumerable: false,
        configurable: true
    });
    MdcMenu.prototype.initialise = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.menuSurface.initialised];
                    case 1:
                        _a.sent();
                        if (this.defaultFocusState !== undefined) {
                            this.defaultFocusStateChanged();
                        }
                        if (this.hoistToBody) {
                            // when menu is a direct body child there may be a vertical scrollbar briefly shown
                            // when MDCMenuSurfaceFoundation.cssClasses.OPEN added to the menu surface
                            // which breaks alignment
                            this.root.style.position = 'fixed';
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Given the next desired character from the user, adds it to the typeahead
     * buffer. Then, attempts to find the next option matching the buffer. Wraps
     * around if at the end of options.
     *
     * @param nextChar The next character to add to the prefix buffer.
     * @param startingIndex The index from which to start matching. Only relevant
     *     when starting a new match sequence. To start a new match sequence,
     *     clear the buffer using `clearTypeaheadBuffer`, or wait for the buffer
     *     to clear after a set interval defined in list foundation. Defaults to
     *     the currently focused index.
     * @return The index of the matched item, or -1 if no match.
     */
    MdcMenu.prototype.typeaheadMatchItem = function (nextChar, startingIndex) {
        if (this.list_) {
            return this.list_.typeaheadMatchItem(nextChar, startingIndex);
        }
        return -1;
    };
    /**
     * Layout the underlying list element in the case of any dynamic updates
     * to its structure.
     */
    MdcMenu.prototype.layout = function () {
        if (this.list_) {
            this.list_.layout();
        }
    };
    /**
     * @param corner Default anchor corner alignment of top-left menu corner.
     */
    MdcMenu.prototype.setAnchorCorner = function (corner) {
        this.menuSurface.setAnchorCorner(corner);
    };
    /**
     * Sets the list item as the selected row at the specified index.
     * @param index Index of list item within menu.
     */
    MdcMenu.prototype.setSelectedIndex = function (index) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setSelectedIndex(index);
    };
    /**
     * Sets the enabled state to isEnabled for the menu item at the given index.
     * @param index Index of the menu item
     * @param isEnabled The desired enabled state of the menu item.
     */
    MdcMenu.prototype.setEnabled = function (index, isEnabled) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setEnabled(index, isEnabled);
    };
    /**
     * @return The item within the menu at the index specified.
     */
    MdcMenu.prototype.getOptionByIndex = function (index) {
        var items = this.items;
        if (index < items.length) {
            return this.items[index];
        }
        else {
            return null;
        }
    };
    /**
     * @param index A menu item's index.
     * @return The primary text within the menu at the index specified.
     */
    MdcMenu.prototype.getPrimaryTextAtIndex = function (index) {
        var item = this.getOptionByIndex(index);
        if (item && this.list_) {
            return this.list_.getPrimaryText(item) || '';
        }
        return '';
    };
    MdcMenu.prototype.setAbsolutePosition = function (x, y) {
        this.menuSurface.setAbsolutePosition(x, y);
    };
    MdcMenu.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClassToElementAtIndex: function (index, className) {
                var list = _this.items;
                list[index].classList.add(className);
            },
            removeClassFromElementAtIndex: function (index, className) {
                var list = _this.items;
                list[index].classList.remove(className);
            },
            addAttributeToElementAtIndex: function (index, attr, value) {
                var list = _this.items;
                list[index].setAttribute(attr, value);
            },
            removeAttributeFromElementAtIndex: function (index, attr) {
                var list = _this.items;
                list[index].removeAttribute(attr);
            },
            getAttributeFromElementAtIndex: function (index, attr) {
                var list = _this.items;
                return list[index].getAttribute(attr);
            },
            elementContainsClass: function (element, className) { return element.classList.contains(className); },
            closeSurface: function (skipRestoreFocus) {
                var _a;
                if (!_this.stayOpenOnSelection) {
                    (_a = _this.menuSurface) === null || _a === void 0 ? void 0 : _a.close(skipRestoreFocus);
                }
            },
            getElementIndex: function (element) { return _this.items.indexOf(element); },
            notifySelected: function (evtData) {
                var _a;
                var item = _this.items[evtData.index];
                _this.emit(_material_menu__WEBPACK_IMPORTED_MODULE_3__.strings.SELECTED_EVENT, { index: evtData.index, item: item, data: (_a = item.au) === null || _a === void 0 ? void 0 : _a.controller.viewModel.value });
            },
            getMenuItemCount: function () { return _this.items.length; },
            focusItemAtIndex: function (index) { return _this.items[index].focus(); },
            focusListRoot: function () { return _this.root.querySelector(_material_menu__WEBPACK_IMPORTED_MODULE_3__.strings.LIST_SELECTOR).focus(); },
            isSelectableItemAtIndex: function (index) { return !!(0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_6__.closest)(_this.items[index], ".".concat(_material_menu__WEBPACK_IMPORTED_MODULE_3__.cssClasses.MENU_SELECTION_GROUP)); },
            getSelectedSiblingOfItemAtIndex: function (index) {
                var selectionGroupEl = (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_6__.closest)(_this.items[index], ".".concat(_material_menu__WEBPACK_IMPORTED_MODULE_3__.cssClasses.MENU_SELECTION_GROUP));
                var selectedItemEl = selectionGroupEl.querySelector(".".concat(_material_menu__WEBPACK_IMPORTED_MODULE_3__.cssClasses.MENU_SELECTED_LIST_ITEM));
                return selectedItemEl ? _this.items.indexOf(selectedItemEl) : -1;
            },
        };
        return new _material_menu__WEBPACK_IMPORTED_MODULE_7__.MDCMenuFoundation(adapter);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcMenu.prototype, "fixed", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcMenu.prototype, "typeahead", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr({ defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.bindingMode.oneTime }),
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcMenu.prototype, "hoistToBody", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
    ], MdcMenu.prototype, "anchor", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
    ], MdcMenu.prototype, "defaultFocusState", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
    ], MdcMenu.prototype, "anchorCorner", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
    ], MdcMenu.prototype, "anchorMargin", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcMenu.prototype, "quickOpen", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcMenu.prototype, "stayOpenOnSelection", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
    ], MdcMenu.prototype, "maxHeight", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
    ], MdcMenu.prototype, "openBottomBias", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcMenu.prototype, "skipRestoreFocus", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcMenu.prototype, "selectOnTab", void 0);
    MdcMenu = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.customElement)('mdc-menu'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.useView)('./mdc-menu.html')
    ], MdcMenu);
    return MdcMenu;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-menu.js.map

/***/ }),

/***/ "@aurelia-mdc-web/notched-outline":
/*!************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/notched-outline/dist/native-modules/index.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcNotchedOutline": function() { return /* reexport safe */ _mdc_notched_outline__WEBPACK_IMPORTED_MODULE_1__.MdcNotchedOutline; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_notched_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-notched-outline */ "@aurelia-mdc-web/notched-outline/mdc-notched-outline");


function configure(config) {
    config.globalResources([
        './mdc-notched-outline'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/notched-outline/mdc-notched-outline":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/notched-outline/dist/native-modules/mdc-notched-outline.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcNotchedOutline": function() { return /* binding */ MdcNotchedOutline; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_notched_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/notched-outline */ 1324);
/* harmony import */ var _material_notched_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/notched-outline */ 6383);
/* harmony import */ var _material_floating_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/floating-label */ 4288);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _aurelia_mdc_web_floating_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-mdc-web/floating-label */ "@aurelia-mdc-web/floating-label");






var MdcNotchedOutline = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(MdcNotchedOutline, _super);
    function MdcNotchedOutline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdcNotchedOutline.prototype.labelChanged = function () {
        var _this = this;
        if (this.label) {
            this.label.root.style.transitionDuration = '0s';
            this.root.classList.add(_material_notched_outline__WEBPACK_IMPORTED_MODULE_4__.cssClasses.OUTLINE_UPGRADED);
            requestAnimationFrame(function () {
                _this.label.root.style.transitionDuration = '';
            });
        }
    };
    /**
     * Updates classes and styles to open the notch to the specified width.
     * @param notchWidth The notch width in the outline.
     */
    MdcNotchedOutline.prototype.notch = function (notchWidth) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.notch(notchWidth);
    };
    /**
     * Updates classes and styles to close the notch.
     */
    MdcNotchedOutline.prototype.closeNotch = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.closeNotch();
    };
    MdcNotchedOutline.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            setNotchWidthProperty: function (width) { return _this.notchElement_.style.setProperty('width', "".concat(width, "px")); },
            removeNotchWidthProperty: function () { return _this.notchElement_.style.removeProperty('width'); },
        };
        return new _material_notched_outline__WEBPACK_IMPORTED_MODULE_5__.MDCNotchedOutlineFoundation(adapter);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.child)(".".concat(_material_floating_label__WEBPACK_IMPORTED_MODULE_6__.MDCFloatingLabelFoundation.cssClasses.ROOT)),
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", _aurelia_mdc_web_floating_label__WEBPACK_IMPORTED_MODULE_2__.MdcFloatingLabel)
    ], MdcNotchedOutline.prototype, "label", void 0);
    MdcNotchedOutline = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.useView)('./mdc-notched-outline.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.customElement)('mdc-notched-outline')
    ], MdcNotchedOutline);
    return MdcNotchedOutline;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-notched-outline.js.map

/***/ }),

/***/ "@aurelia-mdc-web/radio":
/*!**************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/radio/dist/native-modules/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcRadio": function() { return /* reexport safe */ _mdc_radio__WEBPACK_IMPORTED_MODULE_2__.MdcRadio; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _mdc_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdc-radio */ "@aurelia-mdc-web/radio/mdc-radio");



function configure(config) {
    config.container.get(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__.MdcComponentAdapters).registerMdcElementConfig(radioConfig);
    config.globalResources([
        './mdc-radio'
    ]);
    config.aurelia.use.plugin('@aurelia-mdc-web/ripple');
}
var radioConfig = {
    tagName: 'mdc-radio',
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

/***/ "@aurelia-mdc-web/radio/mdc-radio":
/*!******************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/radio/dist/native-modules/mdc-radio.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcRadio": function() { return /* binding */ MdcRadio; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/radio */ 2307);
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");





var radioId = 0;
/**
 * @selector mdc-radio
 */
var MdcRadio = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(MdcRadio, _super);
    function MdcRadio(root) {
        var _this = _super.call(this, root) || this;
        _this.id = "mdc-radio-".concat(++radioId, "-input");
        defineMdcRadioElementApis(_this.root);
        return _this;
    }
    MdcRadio.prototype.disabledChanged = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _a.sent();
                        if (this.nativeControl_) {
                            this.nativeControl_.disabled = this.disabled;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(MdcRadio.prototype, "checked", {
        /** Use to verify the checked value */
        get: function () {
            var _a;
            if (this.nativeControl_) {
                return this.nativeControl_.checked;
            }
            else {
                return (_a = this._checked) !== null && _a !== void 0 ? _a : false;
            }
        },
        set: function (checked) {
            this._checked = checked;
            if (this.nativeControl_) {
                this.nativeControl_.checked = checked;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdcRadio.prototype, "value", {
        /** Value of the radio button */
        get: function () {
            var _a;
            if (this.nativeControl_) {
                return this.nativeControl_.value;
            }
            else {
                return (_a = this._value) !== null && _a !== void 0 ? _a : '';
            }
        },
        set: function (value) {
            this._value = value;
            if (this.nativeControl_) {
                this.nativeControl_.value = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    // eslint-disable-next-line @typescript-eslint/require-await
    MdcRadio.prototype.initialise = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var attributeValue;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                if (this.root.hasAttribute('checked')) {
                    attributeValue = this.root.getAttribute('checked');
                    if (attributeValue || attributeValue === '') {
                        this.root.checked = true;
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    MdcRadio.prototype.initialSyncWithDOM = function () {
        if (this._checked !== undefined) {
            this.checked = this._checked;
        }
        if (this._value !== undefined) {
            this.value = this._value;
        }
    };
    MdcRadio.prototype.destroy = function () {
        this._checked = undefined;
    };
    MdcRadio.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            setNativeControlDisabled: function (disabled) { return _this.nativeControl_.disabled =
                disabled; },
        };
        return new _material_radio__WEBPACK_IMPORTED_MODULE_4__.MDCRadioFoundation(adapter);
    };
    /** Set focus to the radio button */
    MdcRadio.prototype.focus = function () {
        this.nativeControl_.focus();
    };
    /** Set focus away from the radio button */
    MdcRadio.prototype.blur = function () {
        this.nativeControl_.blur();
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcRadio.prototype, "disabled", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcRadio.prototype, "touch", void 0);
    MdcRadio = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.useView)('./mdc-radio.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.customElement)('mdc-radio'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Object])
    ], MdcRadio);
    return MdcRadio;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

function defineMdcRadioElementApis(element) {
    Object.defineProperties(element, {
        type: {
            value: 'radio',
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
        value: {
            get: function () {
                return this.au.controller.viewModel.value;
            },
            set: function (value) {
                this.au.controller.viewModel.value = value;
            }
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
//# sourceMappingURL=mdc-radio.js.map

/***/ }),

/***/ "@aurelia-mdc-web/expandable/mdc-expandable.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/expandable/dist/native-modules/mdc-expandable.html ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-expandable mdc-expandable--${open ? 'open' : 'closed'}\">\n  <div class=\"\n      mdc-expandable__header\n      mdc-expandable__header--${open ? 'open' : 'closed'}\n      ${focused ? 'mdc-expandable__header--focused' : ''}\n    \" ref=\"header\" click.trigger=\"toggle()\" focus.trigger=\"handleFocus()\" blur.trigger=\"handleBlur()\" mdc-ripple=\"no-class.bind: true;\"\n    tabindex=\"0\" keydown.trigger=\"handleKeydown($event)\">\n    <div class=\"mdc-expandable__caption\">\n      <slot name=\"caption\"></slot>\n    </div>\n    <span class=\"mdc-expandable__dropdown-icon\">\n      <svg class=\"mdc-expandable__dropdown-icon-graphic\" viewBox=\"7 10 10 5\">\n        <polygon class=\"mdc-expandable__dropdown-icon-inactive\" stroke=\"none\" fill-rule=\"evenodd\"\n          points=\"7 10 12 15 17 10\">\n        </polygon>\n        <polygon class=\"mdc-expandable__dropdown-icon-active\" stroke=\"none\" fill-rule=\"evenodd\"\n          points=\"7 15 12 10 17 15\">\n        </polygon>\n      </svg>\n    </span>\n  </div>\n  <div class=\"mdc-expandable__content-container\" ref=\"contentContainer\">\n    <div class=\"mdc-expandable__content\" ref=\"content\">\n      <slot></slot>\n    </div>\n  </div>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/fab/mdc-fab.html":
/*!****************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/fab/dist/native-modules/mdc-fab.html ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"\n    mdc-fab\n    ${mini ? 'mdc-fab--mini' : ''}\n    ${extended ? 'mdc-fab--extended' : ''}\n    ${exited ? 'mdc-fab--exited' : ''}\n    ${touch ? 'mdc-fab--touch' : ''}\n  \" tabindex.bind=\"disabled ? -1 : 0\" mdc-ripple=\"no-class.bind: true;\">\n  <div class=\"mdc-fab__ripple\"></div>\n  <slot></slot>\n  <span class=\"material-icons mdc-fab__icon\" if.bind=\"icon\">${icon}</span>\n  <span class=\"mdc-fab__label\" if.bind=\"label\">${label}</span>\n  <div class=\"mdc-fab__touch\" if.bind=\"touch\"></div>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/floating-label/mdc-floating-label.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/floating-label/dist/native-modules/mdc-floating-label.html ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-floating-label\">\n  <slot></slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/form-field/mdc-form-field.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/form-field/dist/native-modules/mdc-form-field.html ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-form-field\n    ${cssClasses.ROOT}--au ${nowrap ? cssClasses.ROOT + '--nowrap' : ''}\n    ${alignEnd ? cssClasses.ROOT + '--align-end' : ''}\n    ${spaceBetween ? cssClasses.ROOT + '--space-between' : ''}\">\n  <slot></slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/icon-button/mdc-icon-button-icon/mdc-icon-button-icon.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/icon-button/dist/native-modules/mdc-icon-button-icon/mdc-icon-button-icon.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-icon-button__icon ${on ? 'mdc-icon-button__icon--on' : ''} material-icons\">\n  <slot></slot>\n  <span class=\"material-icons\" if.bind=\"icon\">${icon}</span>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/icon-button/mdc-icon-button.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/icon-button/dist/native-modules/mdc-icon-button.html ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"\n    mdc-icon-button mdc-icon-button--display-flex\n    ${on ? 'mdc-icon-button--on' : ''}\n    ${icon ? 'material-icons' : ''}\n    ${touch ? 'mdc-icon-button--touch' : ''}\n  \" mdc-ripple=\"no-class.bind: true; unbounded.bind: true\"\n  click.trigger=\"handleClick()\">\n  <div class=\"mdc-icon-button__ripple\"></div>\n  <slot></slot>\n  <span if.bind=\"icon\">${icon}</span>\n  <div class=\"mdc-icon-button__touch\" if.bind=\"touch\"></div>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/icon/mdc-icon.html":
/*!******************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/icon/dist/native-modules/mdc-icon.html ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"material-icons\">\n  <slot></slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/image-list/mdc-image-list-item/mdc-image-list-item.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/image-list/dist/native-modules/mdc-image-list-item/mdc-image-list-item.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-image-list__item\">\n  <div class=\"mdc-image-list__image-aspect-container\" if.bind=\"hasAspect\">\n    <img class=\"mdc-image-list__image\" src.bind=\"src\">\n  </div>\n  <img class=\"mdc-image-list__image\" src.bind=\"src\" if.bind=\"!hasAspect\">\n  <div class=\"mdc-image-list__supporting\" if.bind=\"label\">\n    <span class=\"mdc-image-list__label\">${label}</span>\n  </div>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/image-list/mdc-image-list.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/image-list/dist/native-modules/mdc-image-list.html ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template id=\"${id}\" class=\"mdc-image-list\n  ${masonry ? 'mdc-image-list--masonry' : ''}\n  ${textProtection ? 'mdc-image-list--with-text-protection' : ''}\n  ${columns ? 'mdc-image-list--columns-set' : ''}\">\n  <style ref=\"style\"></style>\n  <slot></slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/layout-grid/mdc-layout-grid-cell/mdc-layout-grid-cell.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/layout-grid/dist/native-modules/mdc-layout-grid-cell/mdc-layout-grid-cell.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"\n  mdc-layout-grid__cell\n  ${order ? 'mdc-layout-grid__cell--order-' + order : ''}\n  ${position ? 'mdc-layout-grid__cell--align-' + position : ''}\n  ${span ? 'mdc-layout-grid__cell--span-' + span : ''}\n  ${desktopSpan ? 'mdc-layout-grid__cell--span-' + desktopSpan + '-desktop' : ''}\n  ${tabletSpan ? 'mdc-layout-grid__cell--span-' + tabletSpan + '-tablet' : ''}\n  ${phoneSpan ? 'mdc-layout-grid__cell--span-' + phoneSpan + '-phone' : ''}\n  ${newRow ? 'mdc-layout-grid__cell--new-row' : ''}\n  \">\n  <slot></slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/layout-grid/mdc-layout-grid.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/layout-grid/dist/native-modules/mdc-layout-grid.html ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"\n  mdc-layout-grid\n  ${position ? 'mdc-layout-grid--align-' + position : ''}\n  ${fixedColumnWidth ? 'mdc-layout-grid--fixed-column-width' : ''}\n  ${noPadding ? 'mdc-layout-grid--no-padding' : ''}\n  \">\n  <slot></slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/linear-progress/mdc-linear-progress.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/linear-progress/dist/native-modules/mdc-linear-progress.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template role=\"progressbar\" class=\"mdc-linear-progress\" style=\"display: block\">\n  <div class=\"mdc-linear-progress__buffer\">\n    <div class=\"mdc-linear-progress__buffer-bar\"></div>\n    <div class=\"mdc-linear-progress__buffer-dots\"></div>\n  </div>\n  <div class=\"mdc-linear-progress__bar mdc-linear-progress__primary-bar\">\n    <span class=\"mdc-linear-progress__bar-inner\"></span>\n  </div>\n  <div class=\"mdc-linear-progress__bar mdc-linear-progress__secondary-bar\">\n    <span class=\"mdc-linear-progress__bar-inner\"></span>\n  </div>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-deprecated-list/mdc-deprecated-list-divider/mdc-deprecated-list-divider.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-deprecated-list/mdc-deprecated-list-divider/mdc-deprecated-list-divider.html ***!
  \*************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template role=\"separator\"\n  class=\"mdc-deprecated-list-divider ${padded ? 'mdc-deprecated-list-divider--padded' : ''} ${inset ? 'mdc-deprecated-list-divider--inset' : ''}\">\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-deprecated-list/mdc-deprecated-list-item/mdc-deprecated-list-item.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-deprecated-list/mdc-deprecated-list-item/mdc-deprecated-list-item.html ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-deprecated-list-item\n    ${disabled ? 'mdc-deprecated-list-item--disabled' : ''}\n    ${activated ? 'mdc-deprecated-list-item--activated' : ''}\n  \" id=\"mdc-deprecated-list-item-${id}\" mdc-ripple=\"disabled.bind: disabled || disableRipple\" keydown.trigger=\"onKeydown($event)\"\n  click.trigger=\"onClick()\">\n  <div class=\"mdc-deprecated-list-item__ripple\"></div>\n  <slot></slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-deprecated-list/mdc-deprecated-list.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-deprecated-list/mdc-deprecated-list.html ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"\n    mdc-deprecated-list\n    ${twoLine ? 'mdc-deprecated-list--two-line' : ''}\n    ${dense ? 'mdc-deprecated-list--dense' : ''}\n    ${textual ? 'mdc-deprecated-list--textual-list' : ''}\n    ${avatar ? 'mdc-deprecated-list--avatar-list' : ''}\n    ${icon ? 'mdc-deprecated-list--icon-list' : ''}\n    ${image ? 'mdc-deprecated-list--image-list' : ''}\n    ${thumbnail ? 'mdc-deprecated-list--thumbnail-list' : ''}\n    ${video ? 'mdc-deprecated-list--video-list' : ''}\n  \" keydown.trigger=\"handleKeydownEvent_($event)\" click.trigger=\"handleClickEvent_($event)\"\n  focusin.trigger=\"handleFocusInEvent_($event)\" focusout.trigger=\"handleFocusOutEvent_($event)\"\n  aria-orientation=\"${vertical ? 'vertical' : 'horizontal' }\">\n  <slot></slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-list-divider/mdc-list-divider.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-list-divider/mdc-list-divider.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template role=\"separator\" class=\"\n  mdc-list-divider\n  ${leadingType ? 'mdc-list-divider--with-leading-inset mdc-list-divider--with-leading-' + leadingType : ''}\n  ${trailingType ? 'mdc-list-divider--with-trailing-inset mdc-list-divider--with-trailing-' + trailingType : ''}\n  ${padded ? 'mdc-list-divider--with-leading-padding' : ''}\n  \">\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-list-item/mdc-list-item.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-list-item/mdc-list-item.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"\n    ${cssClasses.LIST_ITEM_CLASS}\n    ${disabled ? 'mdc-list-item--disabled' : ''}\n    ${activated ? 'mdc-list-item--activated' : ''}\n    ${selected ? 'mdc-list-item--selected' : ''}\n    ${nonInteractive ? 'non-interactive' : ''}\n    ${twoLine ? 'mdc-list-item--with-two-lines' : (threeLine ? 'mdc-list-item--with-three-lines' : 'mdc-list-item--with-one-line')}\n    ${trailingType ? 'mdc-list-item--with-trailing-' + trailingType : ''}\n  \" id=\"mdc-list-item-${id}\" mdc-ripple=\"disabled.bind: disabled || disableRipple\" keydown.trigger=\"onKeydown($event)\"\n  click.trigger=\"onClick()\" tabindex=\"-1\">\n  <span class=\"mdc-list-item__ripple\"></span>\n  <slot></slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/list/mdc-list.html":
/*!******************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/list/dist/native-modules/mdc-list.html ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"${cssClasses.ROOT}\" keydown.trigger=\"handleKeydownEvent_($event)\"\n  click.trigger=\"handleClickEvent_($event)\" focusin.trigger=\"handleFocusInEvent_($event)\"\n  focusout.trigger=\"handleFocusOutEvent_($event)\" aria-orientation=\"${vertical ? 'vertical' : 'horizontal' }\">\n  <slot></slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/lookup/mdc-lookup.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/lookup/dist/native-modules/mdc-lookup.html ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-lookup\">\n  <mdc-menu view-model.ref=\"menu\" mdcmenu:selected.trigger=\"handleMenuItemAction($event)\" anchor-corner=\"BOTTOM_LEFT\"\n    anchor.bind=\"input\" hoist-to-body.bind=\"hoistToBody\" class=\"${menuClass}\" select-on-tab.bind=\"selectOnTab\"\n    keydown.trigger=\"handleMenuKeydown($event)\">\n    <mdc-list role=\"menu\" wrap-focus>\n\n      <template if.bind=\"searching\">\n        <template replaceable part=\"searching\">\n          <mdc-list-item>${defaultConfiguration.searchingMessage}</mdc-list-item>\n        </template>\n      </template>\n\n      <template if.bind=\"errorMessage\">\n        <template replaceable part=\"error\">\n          <mdc-list-item>${errorMessage}</mdc-list-item>\n        </template>\n      </template>\n\n      <template if.bind=\"optionsArray && !optionsArray.length\">\n        <template replaceable part=\"not-found\">\n          <mdc-list-item>${defaultConfiguration.notFoundMessage}</mdc-list-item>\n        </template>\n      </template>\n\n      <div if.bind=\"virtual && optionsArray.length\">\n        <mdc-list-item role=\"menuitem\" virtual-repeat.for=\"option of optionsArray\" value.bind=\"option\" tabindex=\"-1\"\n          two-line.bind=\"twoLine\">\n          <template replaceable part=\"option\">\n            ${getDisplay(option)}\n          </template>\n        </mdc-list-item>\n      </div>\n\n      <div if.bind=\"!virtual && optionsArray.length\">\n        <mdc-list-item role=\"menuitem\" repeat.for=\"option of optionsArray\" value.bind=\"option\" tabindex=\"-1\"\n          two-line.bind=\"twoLine\">\n          <template replaceable part=\"option\">\n            ${getDisplay(option)}\n          </template>\n        </mdc-list-item>\n      </div>\n    </mdc-list>\n  </mdc-menu>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/menu/mdc-menu.html":
/*!******************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/menu/dist/native-modules/mdc-menu.html ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-menu\"\n  mdc-menu-surface=\"fixed.bind: fixed; anchor-corner.bind: anchorCorner; anchor-margin.bind: anchorMargin; hoist-to-body.bind: hoistToBody; anchor.bind: anchor; quick-open.bind: quickOpen; max-height.bind: maxHeight; open-bottom-bias.bind: openBottomBias\"\n  mdc-menu-surface.ref=\"menuSurface\" keydown.trigger=\"handleKeydown_($event)\"\n  mdcmenusurface:opened.trigger=\"handleMenuSurfaceOpened_()\" mdclist:action.trigger=\"handleItemAction_($event)\">\n  <slot></slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/notched-outline/mdc-notched-outline.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/notched-outline/dist/native-modules/mdc-notched-outline.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-notched-outline ${label ? '' : 'mdc-notched-outline--no-label'}\">\n  <span class=\"mdc-notched-outline__leading\"></span>\n  <span class=\"mdc-notched-outline__notch\" ref=\"notchElement_\">\n    <slot></slot>\n  </span>\n  <span class=\"mdc-notched-outline__trailing\"></span>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/radio/mdc-radio.html":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/radio/dist/native-modules/mdc-radio.html ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-radio ${touch ? 'mdc-radio--touch' : ''}\"\n  mdc-ripple=\"no-class.bind: true; input.bind: nativeControl_; unbounded.bind: true; active-surface.bind: false\">\n  <input type=\"radio\" class=\"mdc-radio__native-control\" id=\"${id}\" ref=\"nativeControl_\" />\n  <div class=\"mdc-radio__background\">\n    <div class=\"mdc-radio__outer-circle\"></div>\n    <div class=\"mdc-radio__inner-circle\"></div>\n  </div>\n  <div class=\"mdc-radio__ripple\"></div>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ })

}]);
//# sourceMappingURL=vendors-dd2db4ab.3e95cc108b214a1506c0.bundle.js.map