"use strict";
(self["webpackChunkweb_client"] = self["webpackChunkweb_client"] || []).push([["vendors-cee6a9a8"],{

/***/ "@aurelia-mdc-web/ripple":
/*!***************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/ripple/dist/native-modules/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcRipple": function() { return /* reexport safe */ _mdc_ripple__WEBPACK_IMPORTED_MODULE_1__.MdcRipple; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-ripple */ "@aurelia-mdc-web/ripple/mdc-ripple");


function configure(config) {
    config.globalResources([
        './mdc-ripple'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/ripple/mdc-ripple":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/ripple/dist/native-modules/mdc-ripple.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcRipple": function() { return /* binding */ MdcRipple; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/ripple */ 514);
/* harmony import */ var _material_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/ripple */ 4014);
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/dom/ponyfill */ 2851);
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/dom/events */ 9397);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);







var MdcRipple = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(MdcRipple, _super);
    function MdcRipple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputBindingPromise = new Promise(function (r) { return _this.inputBindingPromiseResolver = r; });
        return _this;
    }
    MdcRipple_1 = MdcRipple;
    MdcRipple.prototype.inputChanged = function () {
        this.inputBindingPromiseResolver();
    };
    MdcRipple.prototype.unboundedChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setUnbounded(Boolean(this.unbounded));
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcRipple.prototype.initialise = function () {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            var inputBinding;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.root.classList.add(MdcRipple_1.ATTRIBUTE_CLASS);
                        if (!this.noClass) {
                            ((_a = this.surface) !== null && _a !== void 0 ? _a : this.root).classList.add('mdc-ripple-surface');
                            if (this.primary) {
                                ((_b = this.surface) !== null && _b !== void 0 ? _b : this.root).classList.add('mdc-ripple-surface--primary');
                            }
                            if (this.accent) {
                                ((_c = this.surface) !== null && _c !== void 0 ? _c : this.root).classList.add('mdc-ripple-surface--accent');
                            }
                        }
                        inputBinding = this.root.au['mdc-ripple'].boundProperties.find(function (x) { return x.binding.targetProperty === 'input'; });
                        if (!inputBinding) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.inputBindingPromise];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MdcRipple.prototype.activate = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.activate();
    };
    MdcRipple.prototype.deactivate = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.deactivate();
    };
    MdcRipple.prototype.layout = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.layout();
    };
    MdcRipple.prototype.getDefaultFoundation = function () {
        return new _material_ripple__WEBPACK_IMPORTED_MODULE_4__.MDCRippleFoundation(this.createAdapter());
    };
    MdcRipple.prototype.createAdapter = function () {
        var _this = this;
        var _a;
        return {
            addClass: function (className) { var _a; return ((_a = _this.surface) !== null && _a !== void 0 ? _a : _this.root).classList.add(className); },
            browserSupportsCssVars: function () { return _material_ripple__WEBPACK_IMPORTED_MODULE_5__.supportsCssVariables(window); },
            computeBoundingRect: (_a = this.computeBoundingRect) !== null && _a !== void 0 ? _a : (function () { var _a; return ((_a = _this.surface) !== null && _a !== void 0 ? _a : _this.root).getBoundingClientRect(); }),
            containsEventTarget: function (target) { return _this.root.contains(target); },
            deregisterDocumentInteractionHandler: function (evtType, handler) { return document.documentElement.removeEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_6__.applyPassive)()); },
            deregisterInteractionHandler: function (evtType, handler) { var _a; return ((_a = _this.input) !== null && _a !== void 0 ? _a : _this.root).removeEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_6__.applyPassive)()); },
            deregisterResizeHandler: function (handler) { return window.removeEventListener('resize', handler); },
            getWindowPageOffset: function () { return ({ x: window.pageXOffset, y: window.pageYOffset }); },
            isSurfaceActive: function () { var _a; return _this.activeSurface && (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_7__.matches)((_a = _this.input) !== null && _a !== void 0 ? _a : _this.root, ':active'); },
            isSurfaceDisabled: function () { return _this.disabled; },
            isUnbounded: function () { return _this.unbounded; },
            registerDocumentInteractionHandler: function (evtType, handler) { return document.documentElement.addEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_6__.applyPassive)()); },
            registerInteractionHandler: function (evtType, handler) { var _a; return ((_a = _this.input) !== null && _a !== void 0 ? _a : _this.root).addEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_6__.applyPassive)()); },
            registerResizeHandler: function (handler) { return window.addEventListener('resize', handler); },
            removeClass: function (className) { var _a; return ((_a = _this.surface) !== null && _a !== void 0 ? _a : _this.root).classList.remove(className); },
            updateCssVariable: function (varName, value) { var _a; return ((_a = _this.surface) !== null && _a !== void 0 ? _a : _this.root).style.setProperty(varName, value); },
        };
    };
    var MdcRipple_1;
    MdcRipple.ATTRIBUTE_CLASS = 'mdc-ripple-enhanced';
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", HTMLInputElement)
    ], MdcRipple.prototype, "input", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", HTMLElement)
    ], MdcRipple.prototype, "surface", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Function)
    ], MdcRipple.prototype, "computeBoundingRect", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcRipple.prototype, "disabled", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcRipple.prototype, "unbounded", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcRipple.prototype, "activeSurface", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcRipple.prototype, "noClass", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcRipple.prototype, "primary", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcRipple.prototype, "accent", void 0);
    MdcRipple = MdcRipple_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.customAttribute)('mdc-ripple')
    ], MdcRipple);
    return MdcRipple;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-ripple.js.map

/***/ }),

/***/ "@aurelia-mdc-web/segmented-button":
/*!*************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/segmented-button/dist/native-modules/index.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcSegmentedButton": function() { return /* reexport safe */ _mdc_segmented_button__WEBPACK_IMPORTED_MODULE_2__.MdcSegmentedButton; },
/* harmony export */   "MdcSegmentedButtonSegment": function() { return /* reexport safe */ _mdc_segmented_button_segment_mdc_segmented_button_segment__WEBPACK_IMPORTED_MODULE_3__.MdcSegmentedButtonSegment; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _mdc_segmented_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdc-segmented-button */ "@aurelia-mdc-web/segmented-button/mdc-segmented-button");
/* harmony import */ var _mdc_segmented_button_segment_mdc_segmented_button_segment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mdc-segmented-button-segment/mdc-segmented-button-segment */ "@aurelia-mdc-web/segmented-button/mdc-segmented-button-segment/mdc-segmented-button-segment");




function configure(config) {
    config.container.get(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__.MdcComponentAdapters).registerMdcElementConfig(segmentedButtonSegmentConfig);
    config.globalResources([
        './mdc-segmented-button',
        './mdc-segmented-button-segment/mdc-segmented-button-segment',
        './mdc-segmented-button-segment/enhance-mdc-segmented-button-segment'
    ]);
    config.aurelia.use.plugin('@aurelia-mdc-web/ripple');
}
var segmentedButtonSegmentConfig = {
    tagName: 'mdc-segmented-button-segment',
    properties: {
        checked: {
            defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindingMode.twoWay,
            getObserver: function (element, _, observerLocator) {
                return new aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.CheckedObserver(element, new aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.EventSubscriber(['selected', 'unselected']), observerLocator);
            }
        }
    }
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/segmented-button/mdc-segmented-button-segment/enhance-mdc-segmented-button-segment":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/segmented-button/dist/native-modules/mdc-segmented-button-segment/enhance-mdc-segmented-button-segment.js ***!
  \*************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnhanceMdcSegmentedButtonSegment": function() { return /* binding */ EnhanceMdcSegmentedButtonSegment; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


var EnhanceMdcSegmentedButtonSegment = /** @class */ (function () {
    function EnhanceMdcSegmentedButtonSegment() {
    }
    EnhanceMdcSegmentedButtonSegment.prototype.beforeCompile = function (template) {
        var e_1, _a;
        var actions = template.querySelectorAll('[mdc-segmented-button-segment]');
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(Array.from(actions)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var i = _c.value;
                i.setAttribute('as-element', 'mdc-segmented-button-segment');
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
    EnhanceMdcSegmentedButtonSegment = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.viewEngineHooks
    ], EnhanceMdcSegmentedButtonSegment);
    return EnhanceMdcSegmentedButtonSegment;
}());

//# sourceMappingURL=enhance-mdc-segmented-button-segment.js.map

/***/ }),

/***/ "@aurelia-mdc-web/segmented-button/mdc-segmented-button-segment/mdc-segmented-button-segment":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/segmented-button/dist/native-modules/mdc-segmented-button-segment/mdc-segmented-button-segment.js ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcSegmentedButtonSegment": function() { return /* binding */ MdcSegmentedButtonSegment; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _material_segmented_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/segmented-button */ 6437);
/* harmony import */ var _material_segmented_button_segment_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/segmented-button/segment/constants */ 2496);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");






/**
 * @selector button[mdc-segmented-button-segment]
 */
var MdcSegmentedButtonSegment = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(MdcSegmentedButtonSegment, _super);
    function MdcSegmentedButtonSegment(root) {
        var _this = _super.call(this, root) || this;
        defineMdcSegmentedButtonSegmentElementApis(root);
        return _this;
    }
    Object.defineProperty(MdcSegmentedButtonSegment.prototype, "checked", {
        /** Use to verify the checked value */
        get: function () {
            var _a, _b;
            if (this.foundation) {
                return (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.isSelected();
            }
            else {
                return (_b = this._checked) !== null && _b !== void 0 ? _b : false;
            }
        },
        /**
         * Whether the segment is checked.
         */
        set: function (value) {
            var _a, _b;
            this._checked = value;
            if (value) {
                (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setSelected();
            }
            else {
                (_b = this.foundation) === null || _b === void 0 ? void 0 : _b.setUnselected();
            }
        },
        enumerable: false,
        configurable: true
    });
    MdcSegmentedButtonSegment.prototype.handleClick = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleClick();
    };
    // eslint-disable-next-line @typescript-eslint/require-await
    MdcSegmentedButtonSegment.prototype.initialise = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            var attributeValue;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_a) {
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
    MdcSegmentedButtonSegment.prototype.initialSyncWithDOM = function () {
        if (this._checked !== undefined) {
            this.checked = this._checked;
        }
    };
    MdcSegmentedButtonSegment.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            isSingleSelect: function () {
                return _this.isSingleSelect;
            },
            getAttr: function (attrName) {
                return _this.root.getAttribute(attrName);
            },
            setAttr: function (attrName, value) {
                _this.root.setAttribute(attrName, value);
            },
            addClass: function (className) {
                _this.root.classList.add(className);
            },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            hasClass: function (className) {
                return _this.root.classList.contains(className);
            },
            notifySelectedChange: function (selected) { return _this.notifySelectedChange(_material_segmented_button_segment_constants__WEBPACK_IMPORTED_MODULE_1__.events.SELECTED, selected); },
            getRootBoundingClientRect: function () {
                return _this.root.getBoundingClientRect();
            }
        };
        return new _material_segmented_button__WEBPACK_IMPORTED_MODULE_0__.MDCSegmentedButtonSegmentFoundation(adapter);
    };
    MdcSegmentedButtonSegment.prototype.notifySelectedChange = function (event, selected) {
        this.emit(event, {
            index: this.index,
            selected: selected,
            segmentId: this.getSegmentId()
        }, true /* shouldBubble */);
    };
    MdcSegmentedButtonSegment.prototype.setIsSingleSelect = function (isSingleSelect) {
        this.isSingleSelect = isSingleSelect;
        this.root.setAttribute('role', isSingleSelect ? 'radio' : '');
    };
    /**
     * Sets segment's index value
     *
     * @hidden
     * @param index Segment's index within wrapping segmented button
     */
    MdcSegmentedButtonSegment.prototype.setIndex = function (index) {
        this.index = index;
    };
    /**
     * @hidden
     * @return Returns segment's segmentId if it was set by client
     */
    MdcSegmentedButtonSegment.prototype.getSegmentId = function () {
        var _a;
        return (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.getSegmentId();
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcSegmentedButtonSegment.prototype, "touch", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_3__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)
    ], MdcSegmentedButtonSegment.prototype, "icon", void 0);
    MdcSegmentedButtonSegment = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.useView)('./mdc-segmented-button-segment.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.customElement)('mdc-segmented-button-segment'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [Object])
    ], MdcSegmentedButtonSegment);
    return MdcSegmentedButtonSegment;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_4__.MdcComponent));

function defineMdcSegmentedButtonSegmentElementApis(element) {
    Object.defineProperties(element, {
        type: {
            value: 'checkbox'
        },
        checked: {
            get: function () {
                return this.au.controller.viewModel.checked;
            },
            set: function (value) {
                this.au.controller.viewModel.checked = value;
            },
            configurable: true
        }
    });
}
//# sourceMappingURL=mdc-segmented-button-segment.js.map

/***/ }),

/***/ "@aurelia-mdc-web/segmented-button/mdc-segmented-button":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/segmented-button/dist/native-modules/mdc-segmented-button.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcSegmentedButton": function() { return /* binding */ MdcSegmentedButton; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_segmented_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/segmented-button */ 6437);
/* harmony import */ var _material_segmented_button_segmented_button_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/segmented-button/segmented-button/constants */ 8618);
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-dependency-injection */ 6158);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-pal */ 1015);
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aurelia-templating */ 1781);
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);








/**
 * @selector mdc-segmented-button
 */
var MdcSegmentedButton = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__extends)(MdcSegmentedButton, _super);
    function MdcSegmentedButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdcSegmentedButton.prototype.singleChanged = function () {
        this.root.setAttribute('role', this.single ? 'radiogroup' : 'group');
    };
    MdcSegmentedButton.prototype.initialSyncWithDOM = function () {
        var isSingleSelect = this.foundation.isSingleSelect();
        for (var i = 0; i < this.segmentsList.length; i++) {
            var segment = this.segmentsList[i];
            segment.setIndex(i);
            segment.setIsSingleSelect(isSingleSelect);
        }
    };
    MdcSegmentedButton.prototype.handleSelected = function (event) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleSelected(event.detail);
    };
    MdcSegmentedButton.prototype.getDefaultFoundation = function () {
        var _this = this;
        var adapter = {
            hasClass: function (className) {
                return _this.root.classList.contains(className);
            },
            getSegments: function () {
                return _this.mappedSegments();
            },
            selectSegment: function (indexOrSegmentId) {
                var segmentDetail = _this.mappedSegments().find(function (detail) { return detail.index === indexOrSegmentId ||
                    detail.segmentId === indexOrSegmentId; });
                if (segmentDetail) {
                    _this.segmentsList[segmentDetail.index].checked = true;
                }
            },
            unselectSegment: function (indexOrSegmentId) {
                var segmentDetail = _this.mappedSegments().find(function (detail) { return detail.index === indexOrSegmentId ||
                    detail.segmentId === indexOrSegmentId; });
                if (segmentDetail) {
                    _this.segmentsList[segmentDetail.index].checked = false;
                    _this.segmentsList[segmentDetail.index].notifySelectedChange('unselected', false);
                }
            },
            notifySelectedChange: function (detail) {
                _this.emit(_material_segmented_button_segmented_button_constants__WEBPACK_IMPORTED_MODULE_2__.events.CHANGE, detail, true /* shouldBubble */);
            }
        };
        return new _material_segmented_button__WEBPACK_IMPORTED_MODULE_1__.MDCSegmentedButtonFoundation(adapter);
    };
    /**
     * @return Returns child segments mapped to readonly SegmentDetail list
     */
    MdcSegmentedButton.prototype.mappedSegments = function () {
        return this.segmentsList.map(function (segment, index) {
            return {
                index: index,
                selected: segment.checked,
                segmentId: segment.getSegmentId()
            };
        });
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_6__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:type", Boolean)
    ], MdcSegmentedButton.prototype, "single", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_5__.children)('.mdc-segmented-button__segment'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:type", Array)
    ], MdcSegmentedButton.prototype, "segmentsList", void 0);
    MdcSegmentedButton = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
        (0,aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_3__.inject)(Element),
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_5__.useView)('./mdc-segmented-button.html'),
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_5__.customElement)('mdc-segmented-button')
    ], MdcSegmentedButton);
    return MdcSegmentedButton;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-segmented-button.js.map

/***/ }),

/***/ "@aurelia-mdc-web/select":
/*!***************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/select/dist/native-modules/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDefaultSelectConfiguration": function() { return /* reexport safe */ _mdc_default_select_configuration__WEBPACK_IMPORTED_MODULE_3__.MdcDefaultSelectConfiguration; },
/* harmony export */   "MdcSelect": function() { return /* reexport safe */ _mdc_select__WEBPACK_IMPORTED_MODULE_4__.MdcSelect; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/select */ 8677);
/* harmony import */ var _mdc_select_value_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdc-select-value-observer */ 6441);
/* harmony import */ var _mdc_default_select_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mdc-default-select-configuration */ 9383);
/* harmony import */ var _mdc_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mdc-select */ "@aurelia-mdc-web/select/mdc-select");







function configure(frameworkConfig, callback) {
    frameworkConfig.container.get(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__.MdcComponentAdapters).registerMdcElementConfig(selectConfig);
    frameworkConfig.globalResources([
        './mdc-select',
        './mdc-select-icon',
        './mdc-select-helper-text/mdc-select-helper-text'
    ]);
    frameworkConfig.aurelia
        .use
        .plugin('@aurelia-mdc-web/floating-label')
        .plugin('@aurelia-mdc-web/line-ripple')
        .plugin('@aurelia-mdc-web/list')
        .plugin('@aurelia-mdc-web/menu')
        .plugin('@aurelia-mdc-web/notched-outline')
        .plugin('@aurelia-mdc-web/ripple');
    if (typeof callback === 'function') {
        var config = frameworkConfig.container.get(_mdc_default_select_configuration__WEBPACK_IMPORTED_MODULE_3__.MdcDefaultSelectConfiguration);
        callback(config);
    }
}
var selectConfig = {
    tagName: 'mdc-select',
    properties: {
        value: {
            defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindingMode.twoWay,
            getObserver: function (element) {
                return new _mdc_select_value_observer__WEBPACK_IMPORTED_MODULE_2__.MdcSelectValueObserver(element, new aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.EventSubscriber([_material_select__WEBPACK_IMPORTED_MODULE_5__.strings.CHANGE_EVENT]));
            }
        }
    }
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9383:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/select/dist/native-modules/mdc-default-select-configuration.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDefaultSelectConfiguration": function() { return /* binding */ MdcDefaultSelectConfiguration; }
/* harmony export */ });
var MdcDefaultSelectConfiguration = /** @class */ (function () {
    function MdcDefaultSelectConfiguration() {
    }
    return MdcDefaultSelectConfiguration;
}());

//# sourceMappingURL=mdc-default-select-configuration.js.map

/***/ }),

/***/ 3546:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/select/dist/native-modules/mdc-select-foundation-aurelia.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCSelectFoundationAurelia": function() { return /* binding */ MDCSelectFoundationAurelia; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/base/foundation */ 6308);
/* harmony import */ var _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/keyboard */ 9502);
/* harmony import */ var _material_menu_surface_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/menu-surface/constants */ 5479);
/* harmony import */ var _material_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/select */ 8677);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





// !!! MODIFIED FOR AURELIA !!!
var MDCSelectFoundationAurelia = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCSelectFoundationAurelia, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */
    function MDCSelectFoundationAurelia(adapter, foundationMap) {
        if (foundationMap === void 0) { foundationMap = {}; }
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCSelectFoundationAurelia.defaultAdapter), adapter)) || this;
        // Disabled state
        _this.disabled = false;
        // isMenuOpen is used to track the state of the menu by listening to the
        // MDCMenuSurface:closed event For reference, menu.open will return false if
        // the menu is still closing, but isMenuOpen returns false only after the menu
        // has closed
        _this.isMenuOpen = false;
        // By default, select is invalid if it is required but no value is selected.
        _this.useDefaultValidation = true;
        _this.customValidity = true;
        _this.lastSelectedIndex = _material_select__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX;
        _this.leadingIcon = foundationMap.leadingIcon;
        _this.helperText = foundationMap.helperText;
        return _this;
    }
    Object.defineProperty(MDCSelectFoundationAurelia, "cssClasses", {
        get: function () {
            return _material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSelectFoundationAurelia, "numbers", {
        get: function () {
            return _material_select__WEBPACK_IMPORTED_MODULE_1__.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSelectFoundationAurelia, "strings", {
        get: function () {
            return _material_select__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSelectFoundationAurelia, "defaultAdapter", {
        /**
         * See {@link MDCSelectAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                activateBottomLine: function () { return undefined; },
                deactivateBottomLine: function () { return undefined; },
                getSelectedIndex: function () { return -1; },
                setSelectedIndex: function () { return undefined; },
                hasLabel: function () { return false; },
                floatLabel: function () { return undefined; },
                getLabelWidth: function () { return 0; },
                setLabelRequired: function () { return undefined; },
                hasOutline: function () { return false; },
                notchOutline: function () { return undefined; },
                closeOutline: function () { return undefined; },
                setRippleCenter: function () { return undefined; },
                notifyChange: function () { return undefined; },
                setSelectedText: function () { return undefined; },
                isSelectAnchorFocused: function () { return false; },
                getSelectAnchorAttr: function () { return ''; },
                setSelectAnchorAttr: function () { return undefined; },
                removeSelectAnchorAttr: function () { return undefined; },
                addMenuClass: function () { return undefined; },
                removeMenuClass: function () { return undefined; },
                openMenu: function () { return undefined; },
                closeMenu: function () { return undefined; },
                getAnchorElement: function () { return null; },
                setMenuAnchorElement: function () { return undefined; },
                setMenuAnchorCorner: function () { return undefined; },
                setMenuWrapFocus: function () { return undefined; },
                focusMenuItemAtIndex: function () { return undefined; },
                getMenuItemCount: function () { return 0; },
                getMenuItemValues: function () { return []; },
                getMenuItemTextAtIndex: function () { return ''; },
                isTypeaheadInProgress: function () { return false; },
                typeaheadMatchItem: function () { return -1; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    /** Returns the index of the currently selected menu item, or -1 if none. */
    MDCSelectFoundationAurelia.prototype.getSelectedIndex = function () {
        return this.adapter.getSelectedIndex();
    };
    MDCSelectFoundationAurelia.prototype.setSelectedIndex = function (index, closeMenu, skipNotify) {
        if (closeMenu === void 0) { closeMenu = false; }
        if (skipNotify === void 0) { skipNotify = false; }
        if (index >= this.adapter.getMenuItemCount()) {
            return;
        }
        // !!! MODIFIED FOR AURELIA TO SUPPORT TEXT IN "EMPTY" ITEMS !!!
        var menuItemValues = this.adapter.getMenuItemValues();
        if (index === _material_select__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX || menuItemValues[index] === undefined || menuItemValues[index] === null) {
            this.adapter.setSelectedText('');
        }
        else {
            this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(index).trim());
        }
        this.adapter.setSelectedIndex(index);
        if (closeMenu) {
            this.adapter.closeMenu();
        }
        if (!skipNotify && this.lastSelectedIndex !== index) {
            this.handleChange();
        }
        this.lastSelectedIndex = index;
    };
    // !!! MODIFIED FOR AURELIA !!!
    MDCSelectFoundationAurelia.prototype.setValue = function (value, skipNotify) {
        if (skipNotify === void 0) { skipNotify = false; }
        var index = this.adapter.getMenuItemValues().indexOf(value);
        this.setSelectedIndex(index, /** closeMenu */ false, skipNotify);
    };
    // !!! MODIFIED FOR AURELIA !!!
    MDCSelectFoundationAurelia.prototype.getValue = function () {
        var index = this.adapter.getSelectedIndex();
        var menuItemValues = this.adapter.getMenuItemValues();
        return index !== _material_select__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX ? menuItemValues[index] : undefined;
    };
    MDCSelectFoundationAurelia.prototype.getDisabled = function () {
        return this.disabled;
    };
    MDCSelectFoundationAurelia.prototype.setDisabled = function (isDisabled) {
        this.disabled = isDisabled;
        if (this.disabled) {
            this.adapter.addClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.DISABLED);
            this.adapter.closeMenu();
        }
        else {
            this.adapter.removeClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.DISABLED);
        }
        if (this.leadingIcon) {
            this.leadingIcon.setDisabled(this.disabled);
        }
        if (this.disabled) {
            // Prevent click events from focusing select. Simply pointer-events: none
            // is not enough since screenreader clicks may bypass this.
            this.adapter.removeSelectAnchorAttr('tabindex');
        }
        else {
            this.adapter.setSelectAnchorAttr('tabindex', '0');
        }
        this.adapter.setSelectAnchorAttr('aria-disabled', this.disabled.toString());
    };
    /** Opens the menu. */
    MDCSelectFoundationAurelia.prototype.openMenu = function () {
        this.adapter.addClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.ACTIVATED);
        this.adapter.openMenu();
        this.isMenuOpen = true;
        this.adapter.setSelectAnchorAttr('aria-expanded', 'true');
    };
    /**
     * @param content Sets the content of the helper text.
     */
    MDCSelectFoundationAurelia.prototype.setHelperTextContent = function (content) {
        if (this.helperText) {
            this.helperText.setContent(content);
        }
    };
    /**
     * Re-calculates if the notched outline should be notched and if the label
     * should float.
     */
    MDCSelectFoundationAurelia.prototype.layout = function () {
        if (this.adapter.hasLabel()) {
            var optionHasValue = this.getValue() !== undefined; // !!! MODIFIED FOR AURELIA !!!
            var isFocused = this.adapter.hasClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.FOCUSED);
            var shouldFloatAndNotch = optionHasValue || isFocused;
            var isRequired = this.adapter.hasClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.REQUIRED);
            this.notchOutline(shouldFloatAndNotch);
            this.adapter.floatLabel(shouldFloatAndNotch);
            this.adapter.setLabelRequired(isRequired);
        }
    };
    /**
     * Synchronizes the list of options with the state of the foundation. Call
     * this whenever menu options are dynamically updated.
     */
    MDCSelectFoundationAurelia.prototype.layoutOptions = function () {
        var menuItemValues = this.adapter.getMenuItemValues();
        var selectedIndex = menuItemValues.indexOf(this.getValue());
        this.setSelectedIndex(selectedIndex, /** closeMenu */ false, /** skipNotify */ true);
    };
    MDCSelectFoundationAurelia.prototype.handleMenuOpened = function () {
        if (this.adapter.getMenuItemValues().length === 0) {
            return;
        }
        // Menu should open to the last selected element, should open to first menu item otherwise.
        var selectedIndex = this.getSelectedIndex();
        var focusItemIndex = selectedIndex >= 0 ? selectedIndex : 0;
        this.adapter.focusMenuItemAtIndex(focusItemIndex);
    };
    MDCSelectFoundationAurelia.prototype.handleMenuClosed = function () {
        this.adapter.removeClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.ACTIVATED);
        this.isMenuOpen = false;
        this.adapter.setSelectAnchorAttr('aria-expanded', 'false');
        // Unfocus the select if menu is closed without a selection
        if (!this.adapter.isSelectAnchorFocused()) {
            this.blur();
        }
    };
    /**
     * Handles value changes, via change event or programmatic updates.
     */
    MDCSelectFoundationAurelia.prototype.handleChange = function () {
        this.layout();
        this.adapter.notifyChange(this.getValue());
        var isRequired = this.adapter.hasClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.REQUIRED);
        if (isRequired && this.useDefaultValidation) {
            this.setValid(this.isValid());
        }
    };
    MDCSelectFoundationAurelia.prototype.handleMenuItemAction = function (index) {
        this.setSelectedIndex(index, /** closeMenu */ true);
    };
    /**
     * Handles focus events from select element.
     */
    MDCSelectFoundationAurelia.prototype.handleFocus = function () {
        this.adapter.addClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.FOCUSED);
        this.layout();
        this.adapter.activateBottomLine();
    };
    /**
     * Handles blur events from select element.
     */
    MDCSelectFoundationAurelia.prototype.handleBlur = function () {
        if (this.isMenuOpen) {
            return;
        }
        this.blur();
    };
    MDCSelectFoundationAurelia.prototype.handleClick = function (normalizedX) {
        if (this.disabled) {
            return;
        }
        if (this.isMenuOpen) {
            this.adapter.closeMenu();
            return;
        }
        this.adapter.setRippleCenter(normalizedX);
        this.openMenu();
    };
    /**
     * Handles keydown events on select element. Depending on the type of
     * character typed, does typeahead matching or opens menu.
     */
    MDCSelectFoundationAurelia.prototype.handleKeydown = function (event) {
        if (this.isMenuOpen || !this.adapter.hasClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.FOCUSED)) {
            return;
        }
        var isEnter = (0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_2__.normalizeKey)(event) === _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_2__.KEY.ENTER;
        var isSpace = (0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_2__.normalizeKey)(event) === _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_2__.KEY.SPACEBAR;
        var arrowUp = (0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_2__.normalizeKey)(event) === _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_2__.KEY.ARROW_UP;
        var arrowDown = (0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_2__.normalizeKey)(event) === _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_2__.KEY.ARROW_DOWN;
        // Typeahead
        if (!isSpace && event.key && event.key.length === 1 ||
            isSpace && this.adapter.isTypeaheadInProgress()) {
            var key = isSpace ? ' ' : event.key;
            var typeaheadNextIndex = this.adapter.typeaheadMatchItem(key, this.getSelectedIndex());
            if (typeaheadNextIndex >= 0) {
                this.setSelectedIndex(typeaheadNextIndex);
            }
            event.preventDefault();
            return;
        }
        if (!isEnter && !isSpace && !arrowUp && !arrowDown) {
            return;
        }
        // Increment/decrement index as necessary and open menu.
        if (arrowUp && this.getSelectedIndex() > 0) {
            this.setSelectedIndex(this.getSelectedIndex() - 1);
        }
        else if (arrowDown &&
            this.getSelectedIndex() < this.adapter.getMenuItemCount() - 1) {
            this.setSelectedIndex(this.getSelectedIndex() + 1);
        }
        this.openMenu();
        event.preventDefault();
    };
    /**
     * Opens/closes the notched outline.
     */
    MDCSelectFoundationAurelia.prototype.notchOutline = function (openNotch) {
        if (!this.adapter.hasOutline()) {
            return;
        }
        var isFocused = this.adapter.hasClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.FOCUSED);
        if (openNotch) {
            var labelScale = _material_select__WEBPACK_IMPORTED_MODULE_1__.numbers.LABEL_SCALE;
            var labelWidth = this.adapter.getLabelWidth() * labelScale;
            this.adapter.notchOutline(labelWidth);
        }
        else if (!isFocused) {
            this.adapter.closeOutline();
        }
    };
    /**
     * Sets the aria label of the leading icon.
     */
    MDCSelectFoundationAurelia.prototype.setLeadingIconAriaLabel = function (label) {
        if (this.leadingIcon) {
            this.leadingIcon.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the leading icon.
     */
    MDCSelectFoundationAurelia.prototype.setLeadingIconContent = function (content) {
        if (this.leadingIcon) {
            this.leadingIcon.setContent(content);
        }
    };
    MDCSelectFoundationAurelia.prototype.setUseDefaultValidation = function (useDefaultValidation) {
        this.useDefaultValidation = useDefaultValidation;
    };
    MDCSelectFoundationAurelia.prototype.setValid = function (isValid) {
        if (!this.useDefaultValidation) {
            this.customValidity = isValid;
        }
        this.adapter.setSelectAnchorAttr('aria-invalid', (!isValid).toString());
        if (isValid) {
            this.adapter.removeClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.INVALID);
            this.adapter.removeMenuClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.MENU_INVALID);
        }
        else {
            this.adapter.addClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.INVALID);
            this.adapter.addMenuClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.MENU_INVALID);
        }
        this.syncHelperTextValidity(isValid);
    };
    MDCSelectFoundationAurelia.prototype.isValid = function () {
        if (this.useDefaultValidation &&
            this.adapter.hasClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.REQUIRED) &&
            !this.adapter.hasClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.DISABLED)) {
            // See notes for required attribute under https://www.w3.org/TR/html52/sec-forms.html#the-select-element
            // TL;DR: Invalid if no index is selected, or if the first index is selected and has an empty value.
            return this.getSelectedIndex() !== _material_select__WEBPACK_IMPORTED_MODULE_1__.numbers.UNSET_INDEX &&
                (this.getSelectedIndex() !== 0 || Boolean(this.getValue()));
        }
        return this.customValidity;
    };
    MDCSelectFoundationAurelia.prototype.setRequired = function (isRequired) {
        if (isRequired) {
            this.adapter.addClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.REQUIRED);
        }
        else {
            this.adapter.removeClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.REQUIRED);
        }
        this.adapter.setSelectAnchorAttr('aria-required', isRequired.toString());
        this.adapter.setLabelRequired(isRequired);
    };
    MDCSelectFoundationAurelia.prototype.getRequired = function () {
        return this.adapter.getSelectAnchorAttr('aria-required') === 'true';
    };
    MDCSelectFoundationAurelia.prototype.init = function () {
        var anchorEl = this.adapter.getAnchorElement();
        if (anchorEl) {
            this.adapter.setMenuAnchorElement(anchorEl);
            this.adapter.setMenuAnchorCorner(_material_menu_surface_constants__WEBPACK_IMPORTED_MODULE_3__.Corner.BOTTOM_START);
        }
        this.adapter.setMenuWrapFocus(false);
        this.setDisabled(this.adapter.hasClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.DISABLED));
        this.syncHelperTextValidity(!this.adapter.hasClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.INVALID));
        this.layout();
        this.layoutOptions();
    };
    /**
     * Unfocuses the select component.
     */
    MDCSelectFoundationAurelia.prototype.blur = function () {
        this.adapter.removeClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.FOCUSED);
        this.layout();
        this.adapter.deactivateBottomLine();
        var isRequired = this.adapter.hasClass(_material_select__WEBPACK_IMPORTED_MODULE_1__.cssClasses.REQUIRED);
        if (isRequired && this.useDefaultValidation) {
            this.setValid(this.isValid());
        }
    };
    MDCSelectFoundationAurelia.prototype.syncHelperTextValidity = function (isValid) {
        if (!this.helperText) {
            return;
        }
        this.helperText.setValidity(isValid);
        var helperTextVisible = this.helperText.isVisible();
        var helperTextId = this.helperText.getId();
        if (helperTextVisible && helperTextId) {
            this.adapter.setSelectAnchorAttr(_material_select__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_DESCRIBEDBY, helperTextId);
        }
        else {
            // Needed because screenreaders will read labels pointed to by
            // `aria-describedby` even if they are `aria-hidden`.
            this.adapter.removeSelectAnchorAttr(_material_select__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_DESCRIBEDBY);
        }
    };
    return MDCSelectFoundationAurelia;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_4__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCSelectFoundationAurelia);
//# sourceMappingURL=mdc-select-foundation-aurelia.js.map

/***/ }),

/***/ "@aurelia-mdc-web/select/mdc-select-helper-text/mdc-select-helper-text":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/select/dist/native-modules/mdc-select-helper-text/mdc-select-helper-text.js ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcSelectHelperText": function() { return /* binding */ MdcSelectHelperText; },
/* harmony export */   "mdcHelperTextCssClasses": function() { return /* binding */ mdcHelperTextCssClasses; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/select */ 8883);
/* harmony import */ var _material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/select */ 1914);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);





var mdcHelperTextCssClasses = {
    ROOT: 'mdc-select-helper-text'
};
var MdcSelectHelperText = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(MdcSelectHelperText, _super);
    function MdcSelectHelperText() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.helperTextCssClasses = _material_select__WEBPACK_IMPORTED_MODULE_4__.cssClasses;
        _this.ROOT = mdcHelperTextCssClasses.ROOT;
        return _this;
    }
    Object.defineProperty(MdcSelectHelperText.prototype, "foundationForTextField", {
        // Provided for access by MDCTextField component
        get: function () {
            return this.foundation;
        },
        enumerable: false,
        configurable: true
    });
    MdcSelectHelperText.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            getAttr: function (attr) { return _this.root.getAttribute(attr); },
            setAttr: function (attr, value) { return _this.root.setAttribute(attr, value); },
            removeAttr: function (attr) { return _this.root.removeAttribute(attr); },
            setContent: function (content) {
                _this.root.textContent = content;
            },
        };
        return new _material_select__WEBPACK_IMPORTED_MODULE_5__.MDCSelectHelperTextFoundation(adapter);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcSelectHelperText.prototype, "persistent", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcSelectHelperText.prototype, "validation", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Array)
    ], MdcSelectHelperText.prototype, "errors", void 0);
    MdcSelectHelperText = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.useView)('./mdc-select-helper-text.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.customElement)(mdcHelperTextCssClasses.ROOT)
    ], MdcSelectHelperText);
    return MdcSelectHelperText;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-select-helper-text.js.map

/***/ }),

/***/ "@aurelia-mdc-web/select/mdc-select-icon":
/*!*************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/select/dist/native-modules/mdc-select-icon.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcSelectIcon": function() { return /* binding */ MdcSelectIcon; },
/* harmony export */   "mdcIconStrings": function() { return /* binding */ mdcIconStrings; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/select */ 1156);




var mdcIconStrings = {
    ATTRIBUTE: 'mdc-select-icon'
};
var MdcSelectIcon = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MdcSelectIcon, _super);
    function MdcSelectIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    MdcSelectIcon.prototype.initialise = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                this.root.classList.add('mdc-select__icon');
                return [2 /*return*/];
            });
        });
    };
    MdcSelectIcon.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            getAttr: function (attr) { return _this.root.getAttribute(attr); },
            setAttr: function (attr, value) { return _this.root.setAttribute(attr, value); },
            removeAttr: function (attr) { return _this.root.removeAttribute(attr); },
            setContent: function (content) {
                _this.root.textContent = content;
            },
            registerInteractionHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterInteractionHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
            notifyIconAction: function () { return _this.emit(_material_select__WEBPACK_IMPORTED_MODULE_3__.MDCSelectIconFoundation.strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */); },
        };
        return new _material_select__WEBPACK_IMPORTED_MODULE_3__.MDCSelectIconFoundation(adapter);
    };
    MdcSelectIcon = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)(mdcIconStrings.ATTRIBUTE)
    ], MdcSelectIcon);
    return MdcSelectIcon;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__.MdcComponent));

//# sourceMappingURL=mdc-select-icon.js.map

/***/ }),

/***/ 6441:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/select/dist/native-modules/mdc-select-value-observer.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcSelectValueObserver": function() { return /* binding */ MdcSelectValueObserver; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ 1015);
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-binding */ 6778);



/**
 * @hidden
 * The observer only passes values to the element if options has been set at least once.
 * When the options are set for the first time the observer passes the value to the element.
 * Subsequent options changes pull the value from the element.
 * Subsequent value changes are passed to the element.
 */
var MdcSelectValueObserver = /** @class */ (function () {
    function MdcSelectValueObserver(element, handler) {
        this.handler = handler;
        this.element = element;
    }
    MdcSelectValueObserver.prototype.setElementValue = function (skipNotify) {
        if (skipNotify === void 0) { skipNotify = false; }
        // do not pass the value to the element if options has never been set
        // the value will be passed on when options do arrive
        if (this.optionsWereSet) {
            this.element.au.controller.viewModel.setValue(this.value, skipNotify);
        }
    };
    MdcSelectValueObserver.prototype.getValue = function () {
        return this.value;
    };
    MdcSelectValueObserver.prototype.setValue = function (newValue) {
        if (this.value === newValue) {
            return;
        }
        // assign and sync element.
        this.oldValue = this.value;
        this.value = newValue;
        this.setElementValue();
        this.notify();
    };
    MdcSelectValueObserver.prototype.synchronizeValue = function () {
        var value = this.element.value;
        if (value !== this.value) {
            this.oldValue = this.value;
            this.value = value;
            this.notify();
        }
    };
    MdcSelectValueObserver.prototype.notify = function () {
        var oldValue = this.oldValue;
        var newValue = this.value;
        this.callSubscribers(newValue, oldValue);
    };
    MdcSelectValueObserver.prototype.handleEvent = function () {
        this.synchronizeValue();
    };
    MdcSelectValueObserver.prototype.subscribe = function (context, callable) {
        if (!this.hasSubscribers()) {
            this.handler.subscribe(this.element, this);
        }
        this.addSubscriber(context, callable);
    };
    MdcSelectValueObserver.prototype.unsubscribe = function (context, callable) {
        if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
            this.handler.dispose();
        }
    };
    MdcSelectValueObserver.prototype.bind = function () {
        var _this = this;
        var menu = this.element.querySelector('.mdc-menu');
        this.optionsWereSet = !!menu.querySelector('mdc-list-item');
        this.domObserver = aurelia_pal__WEBPACK_IMPORTED_MODULE_0__.DOM.createMutationObserver(function (records) {
            if (records.find(function (x) { return x.type === 'childList'
                && (Array.from(x.addedNodes).find(function (y) { return y.tagName === 'MDC-LIST-ITEM'; })
                    || Array.from(x.removedNodes).find(function (y) { return y.tagName === 'MDC-LIST-ITEM'; })); })) {
                if (_this.optionsWereSet) {
                    if (_this.element.value != _this.value) {
                        _this.element.value = undefined;
                    }
                }
                else {
                    _this.optionsWereSet = true;
                    // if options are set for the first time pass the current value to the element
                    _this.setElementValue(true);
                }
                _this.synchronizeValue();
            }
        });
        this.domObserver.observe(menu, { childList: true, subtree: true, characterData: true });
    };
    MdcSelectValueObserver.prototype.unbind = function () {
        var _a;
        this.optionsWereSet = false;
        (_a = this.domObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.domObserver = null;
    };
    MdcSelectValueObserver = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.subscriberCollection)(),
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Element, aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.EventSubscriber])
    ], MdcSelectValueObserver);
    return MdcSelectValueObserver;
}());

//# sourceMappingURL=mdc-select-value-observer.js.map

/***/ }),

/***/ "@aurelia-mdc-web/select/mdc-select":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/select/dist/native-modules/mdc-select.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcSelect": function() { return /* binding */ MdcSelect; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material/select */ 8677);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-pal */ 1015);
/* harmony import */ var _mdc_select_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mdc-select-icon */ "@aurelia-mdc-web/select/mdc-select-icon");
/* harmony import */ var _mdc_select_helper_text_mdc_select_helper_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mdc-select-helper-text/mdc-select-helper-text */ "@aurelia-mdc-web/select/mdc-select-helper-text/mdc-select-helper-text");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);
/* harmony import */ var _mdc_select_foundation_aurelia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mdc-select-foundation-aurelia */ 3546);
/* harmony import */ var _mdc_default_select_configuration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mdc-default-select-configuration */ 9383);










_material_select__WEBPACK_IMPORTED_MODULE_8__.strings.CHANGE_EVENT = _material_select__WEBPACK_IMPORTED_MODULE_8__.strings.CHANGE_EVENT.toLowerCase();
var selectId = 0;
/**
 * @selector mdc-select
 * @emits mdcselect:change | Emitted if user changed the value
 */
var MdcSelect = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__extends)(MdcSelect, _super);
    function MdcSelect(root, taskQueue, defaultConfiguration) {
        var _this = _super.call(this, root) || this;
        _this.taskQueue = taskQueue;
        _this.defaultConfiguration = defaultConfiguration;
        _this.id = "mdc-select-".concat(++selectId);
        _this.errors = new Map();
        /** Styles the select as an outlined select */
        _this.outlined = _this.defaultConfiguration.outlined;
        defineMdcSelectElementApis(_this.root);
        return _this;
    }
    MdcSelect_1 = MdcSelect;
    MdcSelect.processContent = function (_viewCompiler, _resources, element) {
        // move icon to the slot - this allows omitting slot specification
        var leadingIcon = element.querySelector("[".concat(_mdc_select_icon__WEBPACK_IMPORTED_MODULE_3__.mdcIconStrings.ATTRIBUTE, "]"));
        leadingIcon === null || leadingIcon === void 0 ? void 0 : leadingIcon.setAttribute('slot', 'leading-icon');
        return true;
    };
    MdcSelect.prototype.labelChanged = function () {
        var _this = this;
        this.taskQueue.queueTask(function () { var _a; return (_a = _this.foundation) === null || _a === void 0 ? void 0 : _a.layout(); });
    };
    MdcSelect.prototype.outlinedChanged = function () {
        var _this = this;
        this.taskQueue.queueTask(function () { var _a; return (_a = _this.foundation) === null || _a === void 0 ? void 0 : _a.layout(); });
    };
    MdcSelect.prototype.requiredChanged = function () {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function () {
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__generator)(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _d.sent();
                        if (this.required) {
                            (_a = this.selectAnchor) === null || _a === void 0 ? void 0 : _a.setAttribute('aria-required', 'true');
                        }
                        else {
                            (_b = this.selectAnchor) === null || _b === void 0 ? void 0 : _b.removeAttribute('aria-required');
                        }
                        (_c = this.foundation) === null || _c === void 0 ? void 0 : _c.setRequired(this.required);
                        this.taskQueue.queueTask(function () { var _a; return (_a = _this.foundation) === null || _a === void 0 ? void 0 : _a.layout(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcSelect.prototype.disabledChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setDisabled(this.disabled);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(MdcSelect.prototype, "value", {
        get: function () {
            if (this.foundation) {
                return this.foundation.getValue();
            }
            else {
                return this._value;
            }
        },
        set: function (value) {
            this.setValue(value);
        },
        enumerable: false,
        configurable: true
    });
    MdcSelect.prototype.setValue = function (value, skipNotify) {
        if (skipNotify === void 0) { skipNotify = false; }
        this._value = value;
        if (this.foundation) {
            this.foundation.setValue(value, skipNotify);
            this.foundation.layout();
        }
    };
    Object.defineProperty(MdcSelect.prototype, "valid", {
        get: function () {
            var _a, _b;
            return (_b = (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.isValid()) !== null && _b !== void 0 ? _b : true;
        },
        set: function (value) {
            var _a;
            (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setValid(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdcSelect.prototype, "selectedIndex", {
        get: function () {
            return this.foundation.getSelectedIndex();
        },
        set: function (selectedIndex) {
            var _a;
            (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setSelectedIndex(selectedIndex, /** closeMenu */ true);
        },
        enumerable: false,
        configurable: true
    });
    MdcSelect.prototype.addError = function (error) {
        this.errors.set(error, true);
        this.valid = false;
    };
    MdcSelect.prototype.removeError = function (error) {
        this.errors.delete(error);
        this.valid = this.errors.size === 0;
    };
    MdcSelect.prototype.renderErrors = function () {
        var helperText = this.root.nextElementSibling;
        if ((helperText === null || helperText === void 0 ? void 0 : helperText.tagName) === 'MDC-SELECT-HELPER-TEXT') {
            helperText.au.controller.viewModel.errors = Array.from(this.errors.keys())
                .filter(function (x) { return x.message !== null; }).map(function (x) { return x.message; });
        }
    };
    MdcSelect.prototype.initialise = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function () {
            var leadingIconEl, nextSibling;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        leadingIconEl = this.root.querySelector("[".concat(_mdc_select_icon__WEBPACK_IMPORTED_MODULE_3__.mdcIconStrings.ATTRIBUTE, "]"));
                        this.leadingIcon = leadingIconEl === null || leadingIconEl === void 0 ? void 0 : leadingIconEl.au['mdc-select-icon'].viewModel;
                        nextSibling = this.root.nextElementSibling;
                        if ((nextSibling === null || nextSibling === void 0 ? void 0 : nextSibling.tagName) === _mdc_select_helper_text_mdc_select_helper_text__WEBPACK_IMPORTED_MODULE_4__.mdcHelperTextCssClasses.ROOT.toUpperCase()) {
                            this.helperText = nextSibling.au.controller.viewModel;
                        }
                        return [4 /*yield*/, Promise.all([(_a = this.helperText) === null || _a === void 0 ? void 0 : _a.initialised, this.menu.initialised].filter(function (x) { return x; }))];
                    case 1:
                        _b.sent();
                        this.menu.list_.singleSelection = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcSelect.prototype.initialSyncWithDOM = function () {
        var _a, _b;
        // set initial value without emitting change events
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setValue(this._value, true);
        (_b = this.foundation) === null || _b === void 0 ? void 0 : _b.layout();
        this.errors = new Map();
        this.valid = true;
    };
    MdcSelect.prototype.getDefaultFoundation = function () {
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_9__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_9__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_9__.__assign)({}, this.getSelectAdapterMethods()), this.getCommonAdapterMethods()), this.getOutlineAdapterMethods()), this.getLabelAdapterMethods());
        return new _mdc_select_foundation_aurelia__WEBPACK_IMPORTED_MODULE_6__.MDCSelectFoundationAurelia(adapter, this.getFoundationMap());
    };
    MdcSelect.prototype.getSelectAdapterMethods = function () {
        var _this = this;
        return {
            setSelectedText: function (text) {
                _this.selectedText.textContent = text;
            },
            isSelectAnchorFocused: function () { return document.activeElement === _this.selectAnchor; },
            getSelectAnchorAttr: function (attr) { return _this.selectAnchor.getAttribute(attr); },
            setSelectAnchorAttr: function (attr, value) {
                _this.selectAnchor.setAttribute(attr, value);
            },
            removeSelectAnchorAttr: function (attr) {
                _this.selectAnchor.removeAttribute(attr);
            },
            addMenuClass: function (className) {
                var _a;
                (_a = _this.menuElement) === null || _a === void 0 ? void 0 : _a.classList.add(className);
            },
            removeMenuClass: function (className) {
                var _a;
                (_a = _this.menuElement) === null || _a === void 0 ? void 0 : _a.classList.remove(className);
            },
            openMenu: function () {
                _this.menu.open = true;
                if ((_this.hoistToBody || _this.fixed) && !_this.naturalWidth) {
                    _this.menu.root.style.minWidth = _this.menu.root.style.maxWidth = "".concat(_this.root.clientWidth, "px");
                }
            },
            closeMenu: function () { _this.menu.open = false; },
            getAnchorElement: function () { return _this.root.querySelector(_material_select__WEBPACK_IMPORTED_MODULE_8__.strings.SELECT_ANCHOR_SELECTOR); },
            setMenuAnchorElement: function (anchorEl) {
                _this.menu.anchor = anchorEl;
            },
            setMenuAnchorCorner: function (anchorCorner) {
                _this.menu.setAnchorCorner(anchorCorner);
            },
            setMenuWrapFocus: function (wrapFocus) {
                _this.menu.wrapFocus = wrapFocus;
            },
            getSelectedIndex: function () {
                var index = _this.menu.selectedIndex;
                return index instanceof Array ? index[0] : index;
            },
            setSelectedIndex: function (index) {
                _this.menu.selectedIndex = index;
            },
            removeAttributeAtIndex: function (index, attributeName) {
                _this.menu.items[index].removeAttribute(attributeName);
            },
            focusMenuItemAtIndex: function (index) {
                _this.menu.items[index].focus();
            },
            getMenuItemCount: function () { return _this.menu.items.length; },
            getMenuItemValues: function () { return _this.menu.items.map(function (x) { return x.au.controller.viewModel.value; }); },
            getMenuItemTextAtIndex: function (index) { return _this.menu.getPrimaryTextAtIndex(index); },
            isTypeaheadInProgress: function () { return _this.menu.typeaheadInProgress; },
            typeaheadMatchItem: function (nextChar, startingIndex) { return _this.menu.typeaheadMatchItem(nextChar, startingIndex); },
        };
    };
    MdcSelect.prototype.getCommonAdapterMethods = function () {
        var _this = this;
        return {
            addClass: function (className) {
                _this.root.classList.add(className);
            },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            setRippleCenter: function (normalizedX) { var _a; return (_a = _this.lineRipple) === null || _a === void 0 ? void 0 : _a.setRippleCenter(normalizedX); },
            activateBottomLine: function () { var _a; return (_a = _this.lineRipple) === null || _a === void 0 ? void 0 : _a.activate(); },
            deactivateBottomLine: function () { var _a; return (_a = _this.lineRipple) === null || _a === void 0 ? void 0 : _a.deactivate(); },
            notifyChange: function (value) {
                var index = _this.selectedIndex;
                _this.emit(_material_select__WEBPACK_IMPORTED_MODULE_8__.strings.CHANGE_EVENT, { value: value, index: index }, true /* shouldBubble  */);
                _this.emit('change', { value: value, index: index }, true /* shouldBubble  */);
            },
        };
    };
    MdcSelect.prototype.getOutlineAdapterMethods = function () {
        var _this = this;
        return {
            hasOutline: function () { return Boolean(_this.outline); },
            notchOutline: function (labelWidth) { var _a; return (_a = _this.outline) === null || _a === void 0 ? void 0 : _a.notch(labelWidth); },
            closeOutline: function () { var _a; return (_a = _this.outline) === null || _a === void 0 ? void 0 : _a.closeNotch(); },
        };
    };
    MdcSelect.prototype.getLabelAdapterMethods = function () {
        var _this = this;
        return {
            hasLabel: function () { return !!_this.mdcLabel; },
            floatLabel: function (shouldFloat) { var _a; return (_a = _this.mdcLabel) === null || _a === void 0 ? void 0 : _a.float(shouldFloat); },
            getLabelWidth: function () { return _this.mdcLabel ? _this.mdcLabel.getWidth() : 0; },
            setLabelRequired: function (isRequired) { var _a; return (_a = _this.mdcLabel) === null || _a === void 0 ? void 0 : _a.setRequired(isRequired); },
        };
    };
    MdcSelect.prototype.handleChange = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleChange();
        this.emit('change', {}, true);
    };
    MdcSelect.prototype.handleFocus = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleFocus();
    };
    MdcSelect.prototype.handleBlur = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleBlur();
        // if class is set it means the menu is open,
        // do not emit blur since "conceptually" the element is still active
        if (!this.root.classList.contains(_material_select__WEBPACK_IMPORTED_MODULE_8__.cssClasses.FOCUSED)) {
            this.emit('blur', {}, true);
        }
    };
    MdcSelect.prototype.handleClick = function (evt) {
        var _a;
        this.selectAnchor.focus();
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleClick(this.getNormalizedXCoordinate(evt));
    };
    MdcSelect.prototype.handleKeydown = function (evt) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleKeydown(evt);
        return true;
    };
    MdcSelect.prototype.handleMenuItemAction = function (evt) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleMenuItemAction(evt.detail.index);
    };
    MdcSelect.prototype.handleMenuOpened = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleMenuOpened();
    };
    MdcSelect.prototype.handleMenuClosed = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleMenuClosed();
        if (!this.root.classList.contains(_material_select__WEBPACK_IMPORTED_MODULE_8__.cssClasses.FOCUSED)) {
            this.emit('blur', {}, true);
        }
    };
    MdcSelect.prototype.handleItemsChanged = function () {
        var _a, _b;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.layoutOptions();
        (_b = this.foundation) === null || _b === void 0 ? void 0 : _b.layout();
    };
    MdcSelect.prototype.focus = function () {
        this.selectAnchor.focus();
    };
    MdcSelect.prototype.blur = function () {
        this.selectAnchor.blur();
    };
    /**
     * @hidden
     * Calculates where the line ripple should start based on the x coordinate within the component.
     */
    MdcSelect.prototype.getNormalizedXCoordinate = function (evt) {
        var targetClientRect = evt.target.getBoundingClientRect();
        var xCoordinate = this.isTouchEvent(evt) ? evt.touches[0].clientX : evt.clientX;
        return xCoordinate - targetClientRect.left;
    };
    MdcSelect.prototype.isTouchEvent = function (evt) {
        return Boolean(evt.touches);
    };
    /**
     * @hidden
     * Returns a map of all subcomponents to subfoundations.
     */
    MdcSelect.prototype.getFoundationMap = function () {
        var _a, _b;
        return {
            helperText: (_a = this.helperText) === null || _a === void 0 ? void 0 : _a.foundation,
            leadingIcon: (_b = this.leadingIcon) === null || _b === void 0 ? void 0 : _b.foundation
        };
    };
    var MdcSelect_1;
    (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.children)('mdc-list-items'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Array)
    ], MdcSelect.prototype, "items", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_5__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", String)
    ], MdcSelect.prototype, "label", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_5__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)
    ], MdcSelect.prototype, "outlined", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_5__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)
    ], MdcSelect.prototype, "required", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_5__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)
    ], MdcSelect.prototype, "disabled", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_5__.bindable.booleanAttr({ defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.bindingMode.oneTime }),
        (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)
    ], MdcSelect.prototype, "hoistToBody", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_5__.bindable.booleanAttr({ defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.bindingMode.oneTime }),
        (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)
    ], MdcSelect.prototype, "fixed", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_5__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Object)
    ], MdcSelect.prototype, "anchorMargin", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_5__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:type", Boolean)
    ], MdcSelect.prototype, "naturalWidth", void 0);
    MdcSelect = MdcSelect_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.inject)(Element, aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.TaskQueue, _mdc_default_select_configuration__WEBPACK_IMPORTED_MODULE_7__.MdcDefaultSelectConfiguration),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.useView)('./mdc-select.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.customElement)(_material_select__WEBPACK_IMPORTED_MODULE_8__.cssClasses.ROOT),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.processContent)(MdcSelect_1.processContent),
        (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__metadata)("design:paramtypes", [HTMLElement, aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.TaskQueue, _mdc_default_select_configuration__WEBPACK_IMPORTED_MODULE_7__.MdcDefaultSelectConfiguration])
    ], MdcSelect);
    return MdcSelect;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

function defineMdcSelectElementApis(element) {
    Object.defineProperties(element, {
        value: {
            get: function () {
                return this.au.controller.viewModel.value;
            },
            set: function (value) {
                // aurelia binding converts "undefined" and "null" into empty string
                // this does not translate well into "empty" menu items when several selects are bound to the same field
                this.au.controller.viewModel.value = value === '' ? undefined : value;
            },
            configurable: true
        },
        options: {
            get: function () {
                return this.au.controller.viewModel.root.querySelectorAll('.mdc-list-item');
            },
            configurable: true
        },
        selectedIndex: {
            get: function () {
                return this.au.controller.viewModel.selectedIndex;
            },
            set: function (value) {
                this.au.controller.viewModel.selectedIndex = value;
            },
            configurable: true
        },
        valid: {
            get: function () {
                return this.au.controller.viewModel.valid;
            },
            set: function (value) {
                this.au.controller.viewModel.valid = value;
            },
            configurable: true
        },
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
//# sourceMappingURL=mdc-select.js.map

/***/ }),

/***/ "@aurelia-mdc-web/slider":
/*!***************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/slider/dist/native-modules/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcSlider": function() { return /* reexport safe */ _mdc_slider__WEBPACK_IMPORTED_MODULE_2__.MdcSlider; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/slider */ 7238);
/* harmony import */ var _mdc_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdc-slider */ "@aurelia-mdc-web/slider/mdc-slider");




function configure(config) {
    config.container.get(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__.MdcComponentAdapters).registerMdcElementConfig(checkboxConfig);
    config.globalResources([
        './mdc-slider'
    ]);
    config.aurelia
        .use
        .plugin('@aurelia-mdc-web/ripple');
}
var checkboxConfig = {
    tagName: 'mdc-slider',
    properties: {
        value: {
            defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindingMode.twoWay,
            getObserver: function (element) {
                return new aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.ValueAttributeObserver(element, 'value', new aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.EventSubscriber([_material_slider__WEBPACK_IMPORTED_MODULE_3__.events.CHANGE, _material_slider__WEBPACK_IMPORTED_MODULE_3__.events.INPUT]));
            }
        },
        valuestart: {
            defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindingMode.twoWay,
            getObserver: function (element) {
                return new aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.ValueAttributeObserver(element, 'valuestart', new aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.EventSubscriber([_material_slider__WEBPACK_IMPORTED_MODULE_3__.events.CHANGE, _material_slider__WEBPACK_IMPORTED_MODULE_3__.events.INPUT]));
            }
        }
    }
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3884:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/slider/dist/native-modules/mdc-slider-foundation-aurelia.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcSliderFoundationAurelia": function() { return /* binding */ MdcSliderFoundationAurelia; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _material_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/slider */ 506);


// overriding lets the rest of the foundation to always get a fresh bounding rect
// otherwise resizing a container, or moving an element ruins interaction
// @ts-expect-error rect is private in base class
var MdcSliderFoundationAurelia = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MdcSliderFoundationAurelia, _super);
    function MdcSliderFoundationAurelia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MdcSliderFoundationAurelia.prototype, "rect", {
        get: function () {
            return this.adapter.getBoundingClientRect();
        },
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        set: function (_) { },
        enumerable: false,
        configurable: true
    });
    return MdcSliderFoundationAurelia;
}(_material_slider__WEBPACK_IMPORTED_MODULE_1__.MDCSliderFoundation));

//# sourceMappingURL=mdc-slider-foundation-aurelia.js.map

/***/ }),

/***/ "@aurelia-mdc-web/slider/mdc-slider":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/slider/dist/native-modules/mdc-slider.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcSlider": function() { return /* binding */ MdcSlider; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/slider */ 7238);
/* harmony import */ var _material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/slider */ 191);
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_slider_foundation_aurelia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mdc-slider-foundation-aurelia */ 3884);






_material_slider__WEBPACK_IMPORTED_MODULE_4__.events.INPUT = _material_slider__WEBPACK_IMPORTED_MODULE_4__.events.INPUT.toLowerCase();
_material_slider__WEBPACK_IMPORTED_MODULE_4__.events.CHANGE = _material_slider__WEBPACK_IMPORTED_MODULE_4__.events.CHANGE.toLowerCase();
var MdcSlider = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(MdcSlider, _super);
    function MdcSlider(root) {
        var _this = _super.call(this, root) || this;
        _this.TickMark = _material_slider__WEBPACK_IMPORTED_MODULE_6__.TickMark;
        _this.eventHandlers = [];
        _this.min = 0;
        _this.max = 100;
        _this.step = '1';
        _this.valueToAriaValueTextFn = null;
        _this._value = 0;
        _this._valueStart = 0;
        defineMdcSliderElementApis(_this.root);
        return _this;
    }
    MdcSlider.prototype.disabledChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setDisabled(this.disabled);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcSlider.prototype.minChanged = function () {
        var _a, _b, _c, _d, _e;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _f.sent();
                        (_b = ((_a = this.startInput) !== null && _a !== void 0 ? _a : this.endInput)) === null || _b === void 0 ? void 0 : _b.setAttribute(_material_slider__WEBPACK_IMPORTED_MODULE_4__.attributes.INPUT_MIN, this.min.toString());
                        (_c = this.foundation) === null || _c === void 0 ? void 0 : _c.destroy();
                        this.cleanupEventHandlers();
                        if (this.range && this.valueStart < this.min) {
                            this.valueStart = this.min;
                            this.emit(_material_slider__WEBPACK_IMPORTED_MODULE_4__.events.CHANGE, { value: this.value, thumb: _material_slider__WEBPACK_IMPORTED_MODULE_6__.Thumb.START }, true);
                        }
                        if (this.value < this.min) {
                            this.value = this.min;
                            this.emit(_material_slider__WEBPACK_IMPORTED_MODULE_4__.events.CHANGE, { value: this.value, thumb: _material_slider__WEBPACK_IMPORTED_MODULE_6__.Thumb.END }, true);
                        }
                        (_d = this.foundation) === null || _d === void 0 ? void 0 : _d.init();
                        (_e = this.foundation) === null || _e === void 0 ? void 0 : _e.layout();
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcSlider.prototype.maxChanged = function () {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _e.sent();
                        (_a = this.endInput) === null || _a === void 0 ? void 0 : _a.setAttribute(_material_slider__WEBPACK_IMPORTED_MODULE_4__.attributes.INPUT_MAX, this.max.toString());
                        (_b = this.foundation) === null || _b === void 0 ? void 0 : _b.destroy();
                        this.cleanupEventHandlers();
                        if (this.range && this.valueStart > this.max) {
                            this.valueStart = this.max;
                            this.emit(_material_slider__WEBPACK_IMPORTED_MODULE_4__.events.CHANGE, { value: this.value, thumb: _material_slider__WEBPACK_IMPORTED_MODULE_6__.Thumb.START }, true);
                        }
                        if (this.value > this.max) {
                            this.value = this.max;
                            this.emit(_material_slider__WEBPACK_IMPORTED_MODULE_4__.events.CHANGE, { value: this.value, thumb: _material_slider__WEBPACK_IMPORTED_MODULE_6__.Thumb.END }, true);
                        }
                        (_c = this.foundation) === null || _c === void 0 ? void 0 : _c.init();
                        (_d = this.foundation) === null || _d === void 0 ? void 0 : _d.layout();
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcSlider.prototype.minRangeChanged = function () {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _e.sent();
                        (_a = this.endInput) === null || _a === void 0 ? void 0 : _a.setAttribute(_material_slider__WEBPACK_IMPORTED_MODULE_4__.attributes.DATA_MIN_RANGE, this.minRange.toString());
                        (_b = this.foundation) === null || _b === void 0 ? void 0 : _b.destroy();
                        this.cleanupEventHandlers();
                        if (this.range && this.value - this.valueStart < this.minRange) {
                            if (this.valueStart + this.minRange < this.max) {
                                this.value = this.valueStart + this.minRange;
                            }
                            else if (this.value - this.minRange > this.min) {
                                this.valueStart = this.value - this.minRange;
                            }
                            this.emit(_material_slider__WEBPACK_IMPORTED_MODULE_4__.events.CHANGE, { value: this.value, thumb: _material_slider__WEBPACK_IMPORTED_MODULE_6__.Thumb.START }, true);
                        }
                        (_c = this.foundation) === null || _c === void 0 ? void 0 : _c.init();
                        (_d = this.foundation) === null || _d === void 0 ? void 0 : _d.layout();
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcSlider.prototype.stepChanged = function () {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _e.sent();
                        (_a = this.startInput) === null || _a === void 0 ? void 0 : _a.setAttribute(_material_slider__WEBPACK_IMPORTED_MODULE_4__.attributes.INPUT_STEP, this.step);
                        (_b = this.endInput) === null || _b === void 0 ? void 0 : _b.setAttribute(_material_slider__WEBPACK_IMPORTED_MODULE_4__.attributes.INPUT_STEP, this.step);
                        (_c = this.foundation) === null || _c === void 0 ? void 0 : _c.destroy();
                        this.cleanupEventHandlers();
                        (_d = this.foundation) === null || _d === void 0 ? void 0 : _d.init();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(MdcSlider.prototype, "value", {
        get: function () {
            if (this.foundation) {
                return this.foundation.getValue();
            }
            else {
                return this._value;
            }
        },
        set: function (value) {
            var _a;
            this._value = value;
            (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setValue(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MdcSlider.prototype, "valueStart", {
        get: function () {
            if (this.foundation) {
                return this.foundation.getValueStart();
            }
            else {
                return this._valueStart;
            }
        },
        set: function (value) {
            var _a;
            this._valueStart = value;
            (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setValueStart(value);
        },
        enumerable: false,
        configurable: true
    });
    MdcSlider.prototype.bind = function () { };
    // eslint-disable-next-line @typescript-eslint/require-await
    MdcSlider.prototype.initialise = function () {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_c) {
                // assign initial values explicitly
                this.endInput.setAttribute(_material_slider__WEBPACK_IMPORTED_MODULE_4__.attributes.INPUT_MIN, this.min.toString());
                this.endInput.setAttribute(_material_slider__WEBPACK_IMPORTED_MODULE_4__.attributes.INPUT_MAX, this.max.toString());
                this.endInput.setAttribute(_material_slider__WEBPACK_IMPORTED_MODULE_4__.attributes.INPUT_VALUE, this.value.toString());
                this.endInput.setAttribute(_material_slider__WEBPACK_IMPORTED_MODULE_4__.attributes.INPUT_STEP, this.step);
                (_a = this.startInput) === null || _a === void 0 ? void 0 : _a.setAttribute(_material_slider__WEBPACK_IMPORTED_MODULE_4__.attributes.INPUT_VALUE, this.valueStart.toString());
                (_b = this.startInput) === null || _b === void 0 ? void 0 : _b.setAttribute(_material_slider__WEBPACK_IMPORTED_MODULE_4__.attributes.INPUT_STEP, this.step);
                return [2 /*return*/];
            });
        });
    };
    MdcSlider.prototype.initialSyncWithDOM = function () {
        var _a;
        this.value = this._value;
        if (this.range) {
            this.valueStart = this._valueStart;
        }
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.layout();
        this.disabledChanged();
    };
    MdcSlider.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take
        // a Partial<MDCFooAdapter>. To ensure we don't accidentally omit any
        // methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            hasClass: function (className) { return _this.root.classList.contains(className); },
            addClass: function (className) {
                _this.root.classList.add(className);
            },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            addThumbClass: function (className, thumb) {
                var _a;
                (_a = _this.getThumbEl(thumb)) === null || _a === void 0 ? void 0 : _a.classList.add(className);
            },
            removeThumbClass: function (className, thumb) {
                var _a;
                (_a = _this.getThumbEl(thumb)) === null || _a === void 0 ? void 0 : _a.classList.remove(className);
            },
            getAttribute: function (attribute) { return _this.root.getAttribute(attribute); },
            getInputValue: function (thumb) { var _a, _b; return (_b = (_a = _this.getInput(thumb)) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : ''; },
            setInputValue: function (value, thumb) {
                var thumbInput = _this.getInput(thumb);
                if (thumbInput) {
                    thumbInput.value = value;
                }
            },
            getInputAttribute: function (attribute, thumb) { var _a, _b; return (_b = (_a = _this.getInput(thumb)) === null || _a === void 0 ? void 0 : _a.getAttribute(attribute)) !== null && _b !== void 0 ? _b : null; },
            setInputAttribute: function (attribute, value, thumb) {
                var _a;
                (_a = _this.getInput(thumb)) === null || _a === void 0 ? void 0 : _a.setAttribute(attribute, value);
            },
            removeInputAttribute: function (attribute, thumb) {
                var _a;
                (_a = _this.getInput(thumb)) === null || _a === void 0 ? void 0 : _a.removeAttribute(attribute);
            },
            focusInput: function (thumb) { var _a; (_a = _this.getInput(thumb)) === null || _a === void 0 ? void 0 : _a.focus(); },
            isInputFocused: function (thumb) { return _this.getInput(thumb) === document.activeElement; },
            shouldHideFocusStylesForPointerEvents: function () { return _this.hideFocus; },
            getThumbKnobWidth: function (thumb) {
                var _a, _b;
                return (_b = (_a = _this.getThumbEl(thumb)) === null || _a === void 0 ? void 0 : _a.querySelector(".".concat(_material_slider__WEBPACK_IMPORTED_MODULE_4__.cssClasses.THUMB_KNOB)).getBoundingClientRect().width) !== null && _b !== void 0 ? _b : 0;
            },
            getThumbBoundingClientRect: function (thumb) { return _this.getThumbEl(thumb).getBoundingClientRect(); },
            getBoundingClientRect: function () { return _this.root.getBoundingClientRect(); },
            getValueIndicatorContainerWidth: function (thumb) {
                return _this.getThumbEl(thumb)
                    .querySelector(".".concat(_material_slider__WEBPACK_IMPORTED_MODULE_4__.cssClasses.VALUE_INDICATOR_CONTAINER))
                    .getBoundingClientRect()
                    .width;
            },
            isRTL: function () { return getComputedStyle(_this.root).direction === 'rtl'; },
            setThumbStyleProperty: function (propertyName, value, thumb) {
                var _a;
                (_a = _this.getThumbEl(thumb)) === null || _a === void 0 ? void 0 : _a.style.setProperty(propertyName, value);
            },
            removeThumbStyleProperty: function (propertyName, thumb) {
                var _a;
                (_a = _this.getThumbEl(thumb)) === null || _a === void 0 ? void 0 : _a.style.removeProperty(propertyName);
            },
            setTrackActiveStyleProperty: function (propertyName, value) {
                _this.trackActive.style.setProperty(propertyName, value);
            },
            removeTrackActiveStyleProperty: function (propertyName) {
                _this.trackActive.style.removeProperty(propertyName);
            },
            setValueIndicatorText: function (value, thumb) {
                var _a;
                var valueIndicatorEl = (_a = _this.getThumbEl(thumb)) === null || _a === void 0 ? void 0 : _a.querySelector(".".concat(_material_slider__WEBPACK_IMPORTED_MODULE_4__.cssClasses.VALUE_INDICATOR_TEXT));
                valueIndicatorEl.textContent = String(value);
            },
            getValueToAriaValueTextFn: function () { return _this.valueToAriaValueTextFn; },
            updateTickMarks: function (tickMarks) {
                _this.tickMarkStatuses = tickMarks;
            },
            setPointerCapture: function (pointerId) {
                _this.root.setPointerCapture(pointerId);
            },
            emitChangeEvent: function (value, thumb) {
                _this.emit(_material_slider__WEBPACK_IMPORTED_MODULE_4__.events.CHANGE, { value: value, thumb: thumb });
            },
            emitInputEvent: function (value, thumb) {
                _this.emit(_material_slider__WEBPACK_IMPORTED_MODULE_4__.events.INPUT, { value: value, thumb: thumb });
            },
            emitDragStartEvent: function (_, thumb) {
                // Emitting event is not yet implemented. See issue:
                // https://github.com/material-components/material-components-web/issues/6448
                var _a;
                (_a = _this.getRipple(thumb)) === null || _a === void 0 ? void 0 : _a.activate();
            },
            emitDragEndEvent: function (_, thumb) {
                // Emitting event is not yet implemented. See issue:
                // https://github.com/material-components/material-components-web/issues/6448
                var _a;
                (_a = _this.getRipple(thumb)) === null || _a === void 0 ? void 0 : _a.deactivate();
            },
            registerEventHandler: function (evtType, handler) {
                _this.listen(evtType, handler);
                _this.addEventHandler(_this.root, evtType, handler);
            },
            deregisterEventHandler: function (evtType, handler) {
                _this.unlisten(evtType, handler);
                _this.removeEventHandler(_this.root, evtType, handler);
            },
            registerThumbEventHandler: function (thumb, evtType, handler) {
                var thumbEl = _this.getThumbEl(thumb);
                if (thumbEl) {
                    thumbEl.addEventListener(evtType, handler);
                    _this.addEventHandler(thumbEl, evtType, handler);
                }
            },
            deregisterThumbEventHandler: function (thumb, evtType, handler) {
                var thumbEl = _this.getThumbEl(thumb);
                if (thumbEl) {
                    thumbEl.removeEventListener(evtType, handler);
                    _this.removeEventHandler(thumbEl, evtType, handler);
                }
            },
            registerInputEventHandler: function (thumb, evtType, handler) {
                var thumbInput = _this.getInput(thumb);
                if (thumbInput) {
                    thumbInput.addEventListener(evtType, handler);
                    _this.addEventHandler(thumbInput, evtType, handler);
                }
            },
            deregisterInputEventHandler: function (thumb, evtType, handler) {
                var thumbInput = _this.getInput(thumb);
                if (thumbInput) {
                    thumbInput.removeEventListener(evtType, handler);
                    _this.removeEventHandler(thumbInput, evtType, handler);
                }
            },
            registerBodyEventHandler: function (evtType, handler) {
                document.body.addEventListener(evtType, handler);
                _this.addEventHandler(document.body, evtType, handler);
            },
            deregisterBodyEventHandler: function (evtType, handler) {
                document.body.removeEventListener(evtType, handler);
                _this.removeEventHandler(document.body, evtType, handler);
            },
            registerWindowEventHandler: function (evtType, handler) {
                window.addEventListener(evtType, handler);
                _this.addEventHandler(window, evtType, handler);
            },
            deregisterWindowEventHandler: function (evtType, handler) {
                window.removeEventListener(evtType, handler);
                _this.removeEventHandler(window, evtType, handler);
            },
            // tslint:enable:object-literal-sort-keys
        };
        return new _mdc_slider_foundation_aurelia__WEBPACK_IMPORTED_MODULE_3__.MdcSliderFoundationAurelia(adapter);
    };
    MdcSlider.prototype.addEventHandler = function (element, evtType, handler) {
        this.eventHandlers.push({ element: element, evtType: evtType, handler: handler });
    };
    MdcSlider.prototype.removeEventHandler = function (element, evtType, handler) {
        var i = this.eventHandlers.findIndex(function (x) { return x.element === element && x.evtType === evtType && x.handler === handler; });
        if (i !== -1) {
            this.eventHandlers.splice(i, 1);
        }
    };
    MdcSlider.prototype.cleanupEventHandlers = function () {
        this.eventHandlers.forEach(function (x) {
            x.element.removeEventListener(x.evtType, x.handler);
        });
        this.eventHandlers = [];
    };
    MdcSlider.prototype.getThumbEl = function (thumb) {
        return thumb === _material_slider__WEBPACK_IMPORTED_MODULE_6__.Thumb.END ? this.endThumb : this.startThumb;
    };
    MdcSlider.prototype.getInput = function (thumb) {
        return thumb === _material_slider__WEBPACK_IMPORTED_MODULE_6__.Thumb.END ? this.endInput : this.startInput;
    };
    MdcSlider.prototype.getRipple = function (thumb) {
        return thumb === _material_slider__WEBPACK_IMPORTED_MODULE_6__.Thumb.END ? this.endRipple : this.startRipple;
    };
    MdcSlider.prototype.focus = function () {
        this.root.focus();
    };
    MdcSlider.prototype.blur = function () {
        this.root.blur();
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcSlider.prototype, "discrete", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcSlider.prototype, "tickMarks", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcSlider.prototype, "range", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcSlider.prototype, "disabled", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcSlider.prototype, "hideFocus", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Number)
    ], MdcSlider.prototype, "min", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Number)
    ], MdcSlider.prototype, "max", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Number)
    ], MdcSlider.prototype, "minRange", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)
    ], MdcSlider.prototype, "step", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Object)
    ], MdcSlider.prototype, "valueToAriaValueTextFn", void 0);
    MdcSlider = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.useView)('./mdc-slider.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.customElement)('mdc-slider'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcSlider);
    return MdcSlider;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

function defineMdcSliderElementApis(element) {
    Object.defineProperties(element, {
        value: {
            get: function () {
                return this.au.controller.viewModel.value;
            },
            set: function (value) {
                this.au.controller.viewModel.value = value;
            },
            configurable: true
        },
        valuestart: {
            get: function () {
                return this.au.controller.viewModel.valueStart;
            },
            set: function (value) {
                this.au.controller.viewModel.valueStart = value;
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
//# sourceMappingURL=mdc-slider.js.map

/***/ }),

/***/ "@aurelia-mdc-web/snackbar":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/snackbar/dist/native-modules/index.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcSnackbar": function() { return /* reexport safe */ _mdc_snackbar__WEBPACK_IMPORTED_MODULE_1__.MdcSnackbar; },
/* harmony export */   "MdcSnackbarService": function() { return /* reexport safe */ _mdc_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.MdcSnackbarService; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_snackbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-snackbar */ "@aurelia-mdc-web/snackbar/mdc-snackbar");
/* harmony import */ var _mdc_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdc-snackbar-service */ 1375);



function configure(config) {
    config.globalResources([
        './mdc-snackbar'
    ]);
    config.aurelia.use
        .plugin('@aurelia-mdc-web/button')
        .plugin('@aurelia-mdc-web/icon-button');
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1375:
/*!********************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/snackbar/dist/native-modules/mdc-snackbar-service.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcSnackbarService": function() { return /* binding */ MdcSnackbarService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _material_snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/snackbar */ 319);



var MdcSnackbarService = /** @class */ (function () {
    function MdcSnackbarService(templatingEngine) {
        this.templatingEngine = templatingEngine;
    }
    MdcSnackbarService.prototype.open = function (label, actions, options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var snackbar, closedResolver, closedPromise, bindingContext, childView, vm;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        snackbar = document.createElement('aside');
                        snackbar.setAttribute('as-element', 'mdc-snackbar');
                        snackbar.setAttribute("".concat(_material_snackbar__WEBPACK_IMPORTED_MODULE_2__.strings.CLOSED_EVENT, ".trigger"), 'handleClosed($event)');
                        document.body.appendChild(snackbar);
                        closedPromise = new Promise(function (r) { return closedResolver = r; });
                        bindingContext = {
                            handleClosed: function (evt) {
                                closedResolver(evt.detail.reason);
                                childView.detached();
                                snackbar.remove();
                            }
                        };
                        childView = this.templatingEngine.enhance({ element: snackbar, bindingContext: bindingContext });
                        vm = snackbar.au.controller.viewModel;
                        vm.label = label;
                        if (actions !== undefined) {
                            if (typeof actions === 'string') {
                                vm.actions = [actions];
                            }
                            else {
                                vm.actions = actions;
                            }
                        }
                        if (options) {
                            Object.assign(vm, options);
                        }
                        return [4 /*yield*/, vm.initialised];
                    case 1:
                        _a.sent();
                        snackbar.au.controller.viewModel.open();
                        return [2 /*return*/, closedPromise];
                }
            });
        });
    };
    MdcSnackbarService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.TemplatingEngine),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.TemplatingEngine])
    ], MdcSnackbarService);
    return MdcSnackbarService;
}());

//# sourceMappingURL=mdc-snackbar-service.js.map

/***/ }),

/***/ "@aurelia-mdc-web/snackbar/mdc-snackbar":
/*!************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/snackbar/dist/native-modules/mdc-snackbar.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcSnackbar": function() { return /* binding */ MdcSnackbar; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/snackbar */ 319);
/* harmony import */ var _material_snackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/snackbar */ 7823);
/* harmony import */ var _material_snackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/snackbar */ 4277);
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);





_material_snackbar__WEBPACK_IMPORTED_MODULE_3__.strings.OPENING_EVENT = _material_snackbar__WEBPACK_IMPORTED_MODULE_3__.strings.OPENING_EVENT.toLowerCase();
_material_snackbar__WEBPACK_IMPORTED_MODULE_3__.strings.OPENED_EVENT = _material_snackbar__WEBPACK_IMPORTED_MODULE_3__.strings.OPENED_EVENT.toLowerCase();
_material_snackbar__WEBPACK_IMPORTED_MODULE_3__.strings.CLOSING_EVENT = _material_snackbar__WEBPACK_IMPORTED_MODULE_3__.strings.CLOSING_EVENT.toLowerCase();
_material_snackbar__WEBPACK_IMPORTED_MODULE_3__.strings.CLOSED_EVENT = _material_snackbar__WEBPACK_IMPORTED_MODULE_3__.strings.CLOSED_EVENT.toLowerCase();
var MdcSnackbar = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(MdcSnackbar, _super);
    function MdcSnackbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeOnEscape = true;
        return _this;
    }
    MdcSnackbar.prototype.timeoutChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setTimeoutMs(this.timeout);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcSnackbar.prototype.closeOnEscapeChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setCloseOnEscape(this.closeOnEscape);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcSnackbar.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            announce: function () { return _material_snackbar__WEBPACK_IMPORTED_MODULE_5__.announce(_this.labelEl_); },
            notifyClosed: function (reason) { return _this.emit(_material_snackbar__WEBPACK_IMPORTED_MODULE_3__.strings.CLOSED_EVENT, reason ? { reason: reason } : {}); },
            notifyClosing: function (reason) { return _this.emit(_material_snackbar__WEBPACK_IMPORTED_MODULE_3__.strings.CLOSING_EVENT, reason ? { reason: reason } : {}); },
            notifyOpened: function () { return _this.emit(_material_snackbar__WEBPACK_IMPORTED_MODULE_3__.strings.OPENED_EVENT, {}); },
            notifyOpening: function () { return _this.emit(_material_snackbar__WEBPACK_IMPORTED_MODULE_3__.strings.OPENING_EVENT, {}); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
        };
        return new _material_snackbar__WEBPACK_IMPORTED_MODULE_6__.MDCSnackbarFoundation(adapter);
    };
    MdcSnackbar.prototype.open = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.open();
    };
    /**
     * @param reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
     *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
     *     client-specific values may also be used if desired.
     */
    MdcSnackbar.prototype.close = function (reason) {
        var _a;
        if (reason === void 0) { reason = ''; }
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.close(reason);
    };
    MdcSnackbar.prototype.handleAction = function (action) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.close(action);
    };
    MdcSnackbar.prototype.handleDismiss = function () {
        this.close(_material_snackbar__WEBPACK_IMPORTED_MODULE_3__.strings.REASON_DISMISS);
    };
    MdcSnackbar.prototype.handleKeyDown = function (evt) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleKeyDown(evt);
        return true;
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
    ], MdcSnackbar.prototype, "label", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Array)
    ], MdcSnackbar.prototype, "actions", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcSnackbar.prototype, "dismissible", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcSnackbar.prototype, "stacked", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
    ], MdcSnackbar.prototype, "timeout", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcSnackbar.prototype, "closeOnEscape", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
    ], MdcSnackbar.prototype, "classes", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
    ], MdcSnackbar.prototype, "actionClasses", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
    ], MdcSnackbar.prototype, "dismissClasses", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcSnackbar.prototype, "leading", void 0);
    MdcSnackbar = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-snackbar.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-snackbar')
    ], MdcSnackbar);
    return MdcSnackbar;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__.MdcComponent));

//# sourceMappingURL=mdc-snackbar.js.map

/***/ }),

/***/ "@aurelia-mdc-web/switch/enhance-mdc-switch":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/switch/dist/native-modules/enhance-mdc-switch.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnhanceMdcSwitch": function() { return /* binding */ EnhanceMdcSwitch; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


var EnhanceMdcSwitch = /** @class */ (function () {
    function EnhanceMdcSwitch() {
    }
    EnhanceMdcSwitch.prototype.beforeCompile = function (template) {
        var e_1, _a;
        var actions = template.querySelectorAll('[mdc-switch]');
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(Array.from(actions)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var i = _c.value;
                i.setAttribute('as-element', 'mdc-switch');
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
    EnhanceMdcSwitch = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.viewEngineHooks
    ], EnhanceMdcSwitch);
    return EnhanceMdcSwitch;
}());

//# sourceMappingURL=enhance-mdc-switch.js.map

/***/ }),

/***/ "@aurelia-mdc-web/switch":
/*!***************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/switch/dist/native-modules/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcSwitch": function() { return /* reexport safe */ _mdc_switch__WEBPACK_IMPORTED_MODULE_2__.MdcSwitch; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _mdc_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdc-switch */ "@aurelia-mdc-web/switch/mdc-switch");



function configure(config) {
    config.container.get(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__.MdcComponentAdapters).registerMdcElementConfig(switchConfig);
    config.globalResources([
        './mdc-switch',
        './enhance-mdc-switch'
    ]);
    config.aurelia.use.plugin('@aurelia-mdc-web/ripple');
}
var switchConfig = {
    tagName: 'mdc-switch',
    properties: {
        selected: {
            defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindingMode.twoWay,
            getObserver: function (element) {
                return new aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.ValueAttributeObserver(element, 'selected', new aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.EventSubscriber(['change']));
            }
        }
    }
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/switch/mdc-switch":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/switch/dist/native-modules/mdc-switch.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcSwitch": function() { return /* binding */ MdcSwitch; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/switch */ 4452);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");




var switchId = 0;
var MdcSwitch = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MdcSwitch, _super);
    function MdcSwitch(root) {
        var _this = _super.call(this, root) || this;
        _this.root = root;
        defineMdcSwitchElementApis(_this.root);
        _this.root.id = "mdc-switch-".concat(++switchId);
        return _this;
    }
    MdcSwitch.prototype.initialSyncWithDOM = function () {
        var _a;
        if (this.selected) {
            this.root.classList.add('mdc-switch--selected');
            this.root.setAttribute('aria-checked', 'true');
        }
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.initFromDOM();
    };
    MdcSwitch.prototype.getDefaultFoundation = function () {
        return new _material_switch__WEBPACK_IMPORTED_MODULE_3__.MDCSwitchRenderFoundation(this.createAdapter());
    };
    MdcSwitch.prototype.createAdapter = function () {
        var _this = this;
        return {
            addClass: function (className) {
                _this.root.classList.add(className);
            },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            isDisabled: function () { return _this.root.disabled; },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            setAriaChecked: function (ariaChecked) {
                return _this.root.setAttribute('aria-checked', ariaChecked);
            },
            setDisabled: function (disabled) {
                _this.root.disabled = disabled;
            },
            state: this,
        };
    };
    MdcSwitch.prototype.handleClick = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleClick();
        this.emit('change', {}, true);
    };
    MdcSwitch = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.useView)('./mdc-switch.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.customElement)('mdc-switch'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Object])
    ], MdcSwitch);
    return MdcSwitch;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

function defineMdcSwitchElementApis(element) {
    Object.defineProperties(element, {
        selected: {
            get: function () {
                return this.au.controller.viewModel.selected;
            },
            set: function (value) {
                this.au.controller.viewModel.selected = value;
            },
            configurable: true
        }
    });
}
//# sourceMappingURL=mdc-switch.js.map

/***/ }),

/***/ "@aurelia-mdc-web/segmented-button/mdc-segmented-button-segment/mdc-segmented-button-segment.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/segmented-button/dist/native-modules/mdc-segmented-button-segment/mdc-segmented-button-segment.html ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"\n    mdc-segmented-button__segment\n    ${touch ? 'mdc-segmented-button--touch' : ''}\n  \" mdc-ripple=\"no-class.bind: true\" click.trigger=\"handleClick()\">\n  <div class=\"mdc-segmented-button__touch\" if.bind=\"touch\"></div>\n  <div class=\"mdc-segmented-button__ripple\"></div>\n  <i class=\"material-icons mdc-segmented-button__icon\" if.bind=\"icon\">${icon}</i>\n  <div class=\"mdc-segmented-button__label\">\n    <slot></slot>\n  </div>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/segmented-button/mdc-segmented-button.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/segmented-button/dist/native-modules/mdc-segmented-button.html ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-segmented-button ${single ? 'mdc-segmented-button--single-select' : ''}\"\n  selected.trigger=\"handleSelected($event)\">\n  <slot></slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/select/mdc-select-helper-text/mdc-select-helper-text.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/select/dist/native-modules/mdc-select-helper-text/mdc-select-helper-text.html ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<!-- DO NOT FORMAT THIS FILE! ANY SPACE BEFORE <SLOT> OR <SPAN> BREAKS HELPER TEXT ALIGNMENT! -->\n<template class=\"\n    ${ROOT} ${persistent ? helperTextCssClasses.HELPER_TEXT_VALIDATION_MSG_PERSISTENT : ''}\n    ${validation ? helperTextCssClasses.HELPER_TEXT_VALIDATION_MSG : ''}\"><slot></slot><span class=\"mdc-select-helper-text__error\" repeat.for=\"e of errors\">${e}<br/></span>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/select/mdc-select.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/select/dist/native-modules/mdc-select.html ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"\n    mdc-select\n    mdc-select--${outlined ? 'outlined' : 'filled'}\n    ${leadingIcon ? 'mdc-select--with-leading-icon' : ''}\n    ${required ? 'mdc-select--required' : ''}\n  \" role=\"button\" aria-haspopup=\"listbox\" id=\"${id}\">\n  <div class=\"mdc-select__anchor\" ref=\"selectAnchor\" mdc-ripple=\"no-class.bind: true;\" change.trigger=\"handleChange()\"\n    focus.trigger=\"handleFocus()\" blur.trigger=\"handleBlur()\" keydown.trigger=\"handleKeydown($event)\"\n    click.trigger=\"handleClick($event)\">\n    <span class=\"mdc-select__ripple\" if.bind=\"!outlined\"></span>\n    <slot name=\"leading-icon\"></slot>\n    <span class=\"mdc-select__selected-text-container\">\n      <span class=\"mdc-select__selected-text\" ref=\"selectedText\"></span>\n    </span>\n    <span class=\"mdc-select__dropdown-icon\">\n      <svg class=\"mdc-select__dropdown-icon-graphic\" viewBox=\"7 10 10 5\">\n        <polygon class=\"mdc-select__dropdown-icon-inactive\" stroke=\"none\" fill-rule=\"evenodd\" points=\"7 10 12 15 17 10\">\n        </polygon>\n        <polygon class=\"mdc-select__dropdown-icon-active\" stroke=\"none\" fill-rule=\"evenodd\" points=\"7 15 12 10 17 15\">\n        </polygon>\n      </svg>\n    </span>\n    <mdc-floating-label if.bind=\"label && !outlined\" for=\"${id}\" view-model.ref=\"mdcLabel\">${label}\n    </mdc-floating-label>\n    <mdc-line-ripple if.bind=\"!outlined\" view-model.ref=\"lineRipple\"></mdc-line-ripple>\n    <mdc-notched-outline if.bind=\"outlined\" view-model.ref=\"outline\">\n      <mdc-floating-label if.bind=\"label\" for=\"${id}\" view-model.ref=\"mdcLabel\">${label}</mdc-floating-label>\n    </mdc-notched-outline>\n  </div>\n\n  <mdc-menu class=\"mdc-select__menu ${naturalWidth || hoistToBody || fixed ? '' : 'mdc-menu-surface--fullwidth'}\"\n    view-model.ref=\"menu\" ref=\"menuElement\" typeahead mdcmenusurface:closed.trigger=\"handleMenuClosed()\"\n    anchor-margin.bind=\"anchorMargin\" mdcmenusurface:opened.trigger=\"handleMenuOpened()\"\n    mdcmenu:selected.trigger=\"handleMenuItemAction($event)\" mdclist:itemschanged.trigger=\"handleItemsChanged($event)\"\n    hoist-to-body.bind=\"hoistToBody\" fixed.bind=\"fixed\">\n    <slot></slot>\n  </mdc-menu>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/slider/mdc-slider.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/slider/dist/native-modules/mdc-slider.html ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-slider\n  ${range ? 'mdc-slider--range' : ''}\n  ${discrete ? 'mdc-slider--discrete' : ''}\n  ${discrete && tickMarks ? 'mdc-slider--tick-marks' : ''}\n  \">\n  <input class=\"mdc-slider__input\" type=\"range\" min=\"0\" max=\"100\" value=\"0\" if.bind=\"range\" ref=\"startInput\">\n  <input class=\"mdc-slider__input\" type=\"range\" min=\"0\" max=\"100\" value=\"0\" ref=\"endInput\">\n  <div class=\"mdc-slider__track\">\n    <div class=\"mdc-slider__track--inactive\"></div>\n    <div class=\"mdc-slider__track--active\">\n      <div class=\"mdc-slider__track--active_fill\" ref=\"trackActive\"></div>\n    </div>\n    <div class=\"mdc-slider__tick-marks\" if.bind=\"discrete && tickMarks\">\n      <div repeat.for=\"s of tickMarkStatuses\"\n        class=\"mdc-slider__tick-mark--${s === TickMark.ACTIVE ? 'active' : 'inactive' }\"></div>\n    </div>\n  </div>\n  <div class=\"mdc-slider__thumb\" mdc-ripple=\"unbounded.bind: true\" mdc-ripple.ref=\"startRipple\" if.bind=\"range\"\n    ref=\"startThumb\">\n    <div class=\"mdc-slider__value-indicator-container\" if.bind=\"discrete\">\n      <div class=\"mdc-slider__value-indicator\">\n        <span class=\"mdc-slider__value-indicator-text\"></span>\n      </div>\n    </div>\n    <div class=\"mdc-slider__thumb-knob\"></div>\n  </div>\n  <div class=\"mdc-slider__thumb\" mdc-ripple=\"unbounded.bind: true\" mdc-ripple.ref=\"endRipple\" ref=\"endThumb\"\n    style=\"overflow: visible;\">\n    <div class=\"mdc-slider__value-indicator-container\" if.bind=\"discrete\">\n      <div class=\"mdc-slider__value-indicator\">\n        <span class=\"mdc-slider__value-indicator-text\"></span>\n      </div>\n    </div>\n    <div class=\"mdc-slider__thumb-knob\"></div>\n  </div>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/snackbar/mdc-snackbar.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/snackbar/dist/native-modules/mdc-snackbar.html ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-snackbar ${classes}\n  ${stacked ? 'mdc-snackbar--stacked' : ''}\n  ${leading ? 'mdc-snackbar--leading' : ''}\n\" keydown.trigger=\"handleKeyDown($event)\">\n  <div class=\"mdc-snackbar__surface\" ref=\"surfaceEl_\">\n    <div class=\"mdc-snackbar__label\" role=\"status\" aria-live=\"polite\" ref=\"labelEl_\">${label}</div>\n    <div class=\"mdc-snackbar__actions\">\n      <button repeat.for=\"a of actions\" class=\"mdc-button mdc-snackbar__action ${actionClasses}\"\n        click.trigger=\"handleAction(a)\">${a}</button>\n      <button if.bind=\"dismissible\" class=\"mdc-icon-button mdc-snackbar__dismiss material-icons ${dismissClasses}\"\n        click.trigger=\"handleDismiss()\">close</button>\n    </div>\n  </div>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/switch/mdc-switch.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/switch/dist/native-modules/mdc-switch.html ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-switch ${selected ? 'mdc-switch--selected' : ''} ${disabled ? 'mdc-switch--disabled' : ''}\"\n  type=\"button\" role=\"switch\" aria-checked=\"${selected ? 'true' : 'false'}\"\n  mdc-ripple=\"no-class.bind: true; unbounded.bind: true; surface.bind: rippleElement\" click.delegate=\"handleClick()\">\n  <div class=\"mdc-switch__track\"></div>\n  <div class=\"mdc-switch__handle-track\">\n    <div class=\"mdc-switch__handle\">\n      <div class=\"mdc-switch__shadow\">\n        <div class=\"mdc-elevation-overlay\"></div>\n      </div>\n      <div class=\"mdc-switch__ripple\" ref=\"rippleElement\"></div>\n      <div class=\"mdc-switch__icons\">\n        <svg class=\"mdc-switch__icon mdc-switch__icon--on\" viewBox=\"0 0 24 24\">\n          <path d=\"M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z\" />\n        </svg>\n        <svg class=\"mdc-switch__icon mdc-switch__icon--off\" viewBox=\"0 0 24 24\">\n          <path d=\"M20 13H4v-2h16v2z\" />\n        </svg>\n      </div>\n    </div>\n  </div>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ })

}]);
//# sourceMappingURL=vendors-cee6a9a8.1042448a11cb5c83059a.bundle.js.map