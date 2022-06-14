"use strict";
(self["webpackChunkweb_client"] = self["webpackChunkweb_client"] || []).push([["vendors-e336a3cc"],{

/***/ "@aurelia-mdc-web/tab-bar":
/*!****************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/tab-bar/dist/native-modules/index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcTabBar": function() { return /* reexport safe */ _mdc_tab_bar__WEBPACK_IMPORTED_MODULE_1__.MdcTabBar; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_tab_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-tab-bar */ "@aurelia-mdc-web/tab-bar/mdc-tab-bar");


function configure(config) {
    config.globalResources([
        './mdc-tab-bar',
        './tab/mdc-tab',
        './scroller/mdc-tab-scroller',
        './indicator/mdc-tab-indicator',
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/tab-bar/indicator/mdc-tab-indicator":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/tab-bar/dist/native-modules/indicator/mdc-tab-indicator.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcTabIndicator": function() { return /* binding */ MdcTabIndicator; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_tab_indicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/tab-indicator */ 5065);
/* harmony import */ var _material_tab_indicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/tab-indicator */ 4020);
/* harmony import */ var _material_tab_indicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/tab-indicator */ 6488);
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-pal */ 1015);






var MdcTabIndicator = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(MdcTabIndicator, _super);
    function MdcTabIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdcTabIndicator.prototype.computeContentClientRect = function () {
        return this.foundation.computeContentClientRect();
    };
    MdcTabIndicator.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            computeContentClientRect: function () { return _this.content_.getBoundingClientRect(); },
            setContentStyleProperty: function (prop, value) { return _this.content_.style.setProperty(prop, value); },
        };
        if (this.root.classList.contains(_material_tab_indicator__WEBPACK_IMPORTED_MODULE_5__.MDCTabIndicatorFoundation.cssClasses.FADE)) {
            return new _material_tab_indicator__WEBPACK_IMPORTED_MODULE_6__.MDCFadingTabIndicatorFoundation(adapter);
        }
        // Default to the sliding indicator
        return new _material_tab_indicator__WEBPACK_IMPORTED_MODULE_7__.MDCSlidingTabIndicatorFoundation(adapter);
    };
    MdcTabIndicator.prototype.activate = function (previousIndicatorClientRect) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.activate(previousIndicatorClientRect);
    };
    MdcTabIndicator.prototype.deactivate = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.deactivate();
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcTabIndicator.prototype, "fade", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcTabIndicator.prototype, "active", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", String)
    ], MdcTabIndicator.prototype, "icon", void 0);
    MdcTabIndicator = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.useView)('./mdc-tab-indicator.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.customElement)('mdc-tab-indicator')
    ], MdcTabIndicator);
    return MdcTabIndicator;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-tab-indicator.js.map

/***/ }),

/***/ "@aurelia-mdc-web/tab-bar/mdc-tab-bar":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/tab-bar/dist/native-modules/mdc-tab-bar.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcTabBar": function() { return /* binding */ MdcTabBar; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_tab_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/tab-bar */ 8806);
/* harmony import */ var _material_tab_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/tab-bar */ 9855);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);
/* harmony import */ var _material_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/tab */ 7532);






// aurelia is case insensitive
_material_tab__WEBPACK_IMPORTED_MODULE_3__.MDCTabFoundation.strings.INTERACTED_EVENT = _material_tab__WEBPACK_IMPORTED_MODULE_3__.MDCTabFoundation.strings.INTERACTED_EVENT.toLowerCase();
_material_tab_bar__WEBPACK_IMPORTED_MODULE_4__.strings.TAB_ACTIVATED_EVENT = _material_tab_bar__WEBPACK_IMPORTED_MODULE_4__.strings.TAB_ACTIVATED_EVENT.toLowerCase();
var MdcTabBar = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(MdcTabBar, _super);
    function MdcTabBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdcTabBar.prototype.focusOnActivateChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.tabScroller_) === null || _a === void 0 ? void 0 : _a.tabs.forEach(function (tab) { return tab.focusOnActivate = _this.focusOnActivate; });
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcTabBar.prototype.useAutomaticActivationChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setUseAutomaticActivation(this.useAutomaticActivation);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcTabBar.prototype.initialise = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tabScroller_.initialised];
                    case 1:
                        _a.sent();
                        if (!this.tabScroller_.tabs) return [3 /*break*/, 3];
                        return [4 /*yield*/, Promise.all(this.tabScroller_.tabs.map(function (x) { return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, function () { return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_a) {
                                return [2 /*return*/, x.initialised];
                            }); }); }))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MdcTabBar.prototype.initialSyncWithDOM = function () {
        if (this.tabScroller_.tabs) {
            for (var i = 0; i < this.tabScroller_.tabs.length; i++) {
                if (this.tabScroller_.tabs[i].active) {
                    this.scrollIntoView(i);
                    break;
                }
            }
        }
    };
    MdcTabBar.prototype.handleKeyDown_ = function (evt) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleKeyDown(evt);
        return true;
    };
    MdcTabBar.prototype.handleTabInteraction_ = function (evt) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleTabInteraction(evt);
    };
    MdcTabBar.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            scrollTo: function (scrollX) { return _this.tabScroller_.scrollTo(scrollX); },
            incrementScroll: function (scrollXIncrement) { return _this.tabScroller_.incrementScroll(scrollXIncrement); },
            getScrollPosition: function () { return _this.tabScroller_.getScrollPosition(); },
            getScrollContentWidth: function () { return _this.tabScroller_.getScrollContentWidth(); },
            getOffsetWidth: function () { return _this.root.offsetWidth; },
            isRTL: function () { return window.getComputedStyle(_this.root).getPropertyValue('direction') === 'rtl'; },
            setActiveTab: function (index) { var _a; return (_a = _this.foundation) === null || _a === void 0 ? void 0 : _a.activateTab(index); },
            activateTabAtIndex: function (index, clientRect) { return _this.tabScroller_.tabs[index].activate(clientRect); },
            deactivateTabAtIndex: function (index) { return _this.tabScroller_.tabs[index].deactivate(); },
            focusTabAtIndex: function (index) { return _this.tabScroller_.tabs[index].focus(); },
            getTabIndicatorClientRectAtIndex: function (index) { return _this.tabScroller_.tabs[index].computeIndicatorClientRect(); },
            getTabDimensionsAtIndex: function (index) { return _this.tabScroller_.tabs[index].computeDimensions(); },
            getPreviousActiveTabIndex: function () {
                for (var i = 0; i < _this.tabScroller_.tabs.length; i++) {
                    if (_this.tabScroller_.tabs[i].isActive()) {
                        return i;
                    }
                }
                return -1;
            },
            getFocusedTabIndex: function () {
                var tabElements = _this.getTabElements_();
                var activeElement = document.activeElement;
                return tabElements.indexOf(activeElement);
            },
            getIndexOfTabById: function (id) {
                for (var i = 0; i < _this.tabScroller_.tabs.length; i++) {
                    if (_this.tabScroller_.tabs[i].id === id) {
                        return i;
                    }
                }
                return -1;
            },
            getTabListLength: function () { return _this.tabScroller_.tabs.length; },
            notifyTabActivated: function (index) { return _this.emit(_material_tab_bar__WEBPACK_IMPORTED_MODULE_4__.strings.TAB_ACTIVATED_EVENT, { index: index }, true); },
        };
        return new _material_tab_bar__WEBPACK_IMPORTED_MODULE_6__.MDCTabBarFoundation(adapter);
    };
    /**
     * Activates the tab at the given index
     * @param index The index of the tab
     */
    MdcTabBar.prototype.activateTab = function (index) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.activateTab(index);
    };
    /**
     * Scrolls the tab at the given index into view
     * @param index THe index of the tab
     */
    MdcTabBar.prototype.scrollIntoView = function (index) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.scrollIntoView(index);
    };
    /**
     * Returns all the tab elements in a nice clean array
     */
    MdcTabBar.prototype.getTabElements_ = function () {
        return [].slice.call(this.root.querySelectorAll(_material_tab_bar__WEBPACK_IMPORTED_MODULE_4__.strings.TAB_SELECTOR));
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcTabBar.prototype, "focusOnActivate", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcTabBar.prototype, "useAutomaticActivation", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Object)
    ], MdcTabBar.prototype, "align", void 0);
    MdcTabBar = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.useView)('./mdc-tab-bar.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.customElement)('mdc-tab-bar')
    ], MdcTabBar);
    return MdcTabBar;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-tab-bar.js.map

/***/ }),

/***/ "@aurelia-mdc-web/tab-bar/scroller/mdc-tab-scroller":
/*!************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/tab-bar/dist/native-modules/scroller/mdc-tab-scroller.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcTabScroller": function() { return /* binding */ MdcTabScroller; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_tab_scroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/tab-scroller */ 6823);
/* harmony import */ var _material_tab_scroller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/tab-scroller */ 5354);
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/dom/ponyfill */ 2851);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);






var MdcTabScroller = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(MdcTabScroller, _super);
    function MdcTabScroller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdcTabScroller.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            eventTargetMatchesSelector: function (evtTarget, selector) { return (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_4__.matches)(evtTarget, selector); },
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            addScrollAreaClass: function (className) { return _this.area_.classList.add(className); },
            setScrollAreaStyleProperty: function (prop, value) { return _this.area_.style.setProperty(prop, value); },
            setScrollContentStyleProperty: function (prop, value) { return _this.content_.style.setProperty(prop, value); },
            getScrollContentStyleValue: function (propName) { return window.getComputedStyle(_this.content_).getPropertyValue(propName); },
            setScrollAreaScrollLeft: function (scrollX) { return _this.area_.scrollLeft = scrollX; },
            getScrollAreaScrollLeft: function () { return _this.area_.scrollLeft; },
            getScrollContentOffsetWidth: function () { return _this.content_.offsetWidth; },
            getScrollAreaOffsetWidth: function () { return _this.area_.offsetWidth; },
            computeScrollAreaClientRect: function () { return _this.area_.getBoundingClientRect(); },
            computeScrollContentClientRect: function () { return _this.content_.getBoundingClientRect(); },
            computeHorizontalScrollbarHeight: function () { return _material_tab_scroller__WEBPACK_IMPORTED_MODULE_5__.computeHorizontalScrollbarHeight(document); },
        };
        return new _material_tab_scroller__WEBPACK_IMPORTED_MODULE_6__.MDCTabScrollerFoundation(adapter);
    };
    MdcTabScroller.prototype.handleInteraction_ = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleInteraction();
        return true;
    };
    MdcTabScroller.prototype.handleTransitionEnd_ = function (evt) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleTransitionEnd(evt);
        return true;
    };
    /**
     * Returns the current visual scroll position
     */
    MdcTabScroller.prototype.getScrollPosition = function () {
        return this.foundation.getScrollPosition();
    };
    /**
     * Returns the width of the scroll content
     */
    MdcTabScroller.prototype.getScrollContentWidth = function () {
        return this.content_.offsetWidth;
    };
    /**
     * Increments the scroll value by the given amount
     * @param scrollXIncrement The pixel value by which to increment the scroll value
     */
    MdcTabScroller.prototype.incrementScroll = function (scrollXIncrement) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.incrementScroll(scrollXIncrement);
    };
    /**
     * Scrolls to the given pixel position
     * @param scrollX The pixel value to scroll to
     */
    MdcTabScroller.prototype.scrollTo = function (scrollX) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.scrollTo(scrollX);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", String)
    ], MdcTabScroller.prototype, "align", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.children)('mdc-tab'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Array)
    ], MdcTabScroller.prototype, "tabs", void 0);
    MdcTabScroller = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.useView)('./mdc-tab-scroller.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.customElement)('mdc-tab-scroller')
    ], MdcTabScroller);
    return MdcTabScroller;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-tab-scroller.js.map

/***/ }),

/***/ "@aurelia-mdc-web/tab-bar/tab/mdc-tab":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/tab-bar/dist/native-modules/tab/mdc-tab.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcTab": function() { return /* binding */ MdcTab; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/tab */ 7532);
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-pal */ 1015);






var tabId = 0;
_material_tab__WEBPACK_IMPORTED_MODULE_4__.MDCTabFoundation.strings.INTERACTED_EVENT = _material_tab__WEBPACK_IMPORTED_MODULE_4__.MDCTabFoundation.strings.INTERACTED_EVENT.toLowerCase();
var MdcTab = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(MdcTab, _super);
    function MdcTab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "mdc-tab-".concat(++tabId);
        return _this;
    }
    MdcTab.prototype.handleClick_ = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleClick();
        return true;
    };
    MdcTab.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            setAttr: function (attr, value) { return _this.root.setAttribute(attr, value); },
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            activateIndicator: function (previousIndicatorClientRect) { return _this.tabIndicator_.activate(previousIndicatorClientRect); },
            deactivateIndicator: function () { return _this.tabIndicator_.deactivate(); },
            notifyInteracted: function () { return _this.emit(_material_tab__WEBPACK_IMPORTED_MODULE_4__.MDCTabFoundation.strings.INTERACTED_EVENT, { tabId: _this.id }, true /* bubble */); },
            getOffsetLeft: function () { return _this.root.offsetLeft; },
            getOffsetWidth: function () { return _this.root.offsetWidth; },
            getContentOffsetLeft: function () { return _this.content_.offsetLeft; },
            getContentOffsetWidth: function () { return _this.content_.offsetWidth; },
            focus: function () { return _this.root.focus(); },
        };
        return new _material_tab__WEBPACK_IMPORTED_MODULE_4__.MDCTabFoundation(adapter);
    };
    MdcTab.prototype.isActive = function () {
        return this.foundation.isActive();
    };
    Object.defineProperty(MdcTab.prototype, "focusOnActivate", {
        set: function (focusOnActivate) {
            var _a;
            (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setFocusOnActivate(focusOnActivate);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Activates the tab
     */
    MdcTab.prototype.activate = function (computeIndicatorClientRect) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.activate(computeIndicatorClientRect);
        this.active = true;
    };
    /**
     * Deactivates the tab
     */
    MdcTab.prototype.deactivate = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.deactivate();
        this.active = false;
    };
    /**
     * Returns the indicator's client rect
     */
    MdcTab.prototype.computeIndicatorClientRect = function () {
        return this.tabIndicator_.computeContentClientRect();
    };
    MdcTab.prototype.computeDimensions = function () {
        return this.foundation.computeDimensions();
    };
    /**
     * Focuses the tab
     */
    MdcTab.prototype.focus = function () {
        this.root.focus();
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)
    ], MdcTab.prototype, "id", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcTab.prototype, "fixed", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr({ defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.bindingMode.twoWay }),
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcTab.prototype, "active", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)
    ], MdcTab.prototype, "icon", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)
    ], MdcTab.prototype, "label", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcTab.prototype, "minWidth", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcTab.prototype, "fade", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcTab.prototype, "stacked", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)
    ], MdcTab.prototype, "indicatorIcon", void 0);
    MdcTab = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.useView)('./mdc-tab.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_2__.customElement)('mdc-tab')
    ], MdcTab);
    return MdcTab;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-tab.js.map

/***/ }),

/***/ "@aurelia-mdc-web/text-field/enhance-mdc-text-field":
/*!************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/text-field/dist/native-modules/enhance-mdc-text-field.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnhanceMdcTextfield": function() { return /* binding */ EnhanceMdcTextfield; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


var EnhanceMdcTextfield = /** @class */ (function () {
    function EnhanceMdcTextfield() {
    }
    EnhanceMdcTextfield.prototype.beforeCompile = function (template) {
        var e_1, _a;
        var textFields = template.querySelectorAll('mdc-text-field');
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(Array.from(textFields)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var tf = _c.value;
                var label = document.createElement('label');
                // Grab all of the original's attributes, and pass them to the replacement
                for (var i = 0, l = tf.attributes.length; i < l; ++i) {
                    var nodeName = tf.attributes.item(i).nodeName;
                    var nodeValue = tf.attributes.item(i).nodeValue;
                    label.setAttribute(nodeName, nodeValue);
                }
                label.setAttribute('as-element', 'mdc-text-field');
                // Persist contents
                label.innerHTML = tf.innerHTML;
                // Switch!
                tf.parentNode.replaceChild(label, tf);
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
    EnhanceMdcTextfield = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.viewEngineHooks
    ], EnhanceMdcTextfield);
    return EnhanceMdcTextfield;
}());

//# sourceMappingURL=enhance-mdc-text-field.js.map

/***/ }),

/***/ "@aurelia-mdc-web/text-field":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/text-field/dist/native-modules/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDefaultTextFieldConfiguration": function() { return /* reexport safe */ _mdc_default_text_field_configuration__WEBPACK_IMPORTED_MODULE_2__.MdcDefaultTextFieldConfiguration; },
/* harmony export */   "MdcTextField": function() { return /* reexport safe */ _mdc_text_field__WEBPACK_IMPORTED_MODULE_3__.MdcTextField; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _mdc_default_text_field_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdc-default-text-field-configuration */ 372);
/* harmony import */ var _mdc_text_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mdc-text-field */ "@aurelia-mdc-web/text-field/mdc-text-field");





function configure(frameworkConfig, callback) {
    frameworkConfig.container.get(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__.MdcComponentAdapters).registerMdcElementConfig(textFieldConfig);
    frameworkConfig.globalResources([
        './mdc-text-field',
        './enhance-mdc-text-field',
        './mdc-text-field-icon',
        './mdc-text-field-helper-line/mdc-text-field-helper-line',
        './mdc-text-field-helper-text/mdc-text-field-helper-text',
        './mdc-text-field-character-counter'
    ]);
    frameworkConfig.aurelia
        .use
        .plugin('@aurelia-mdc-web/floating-label')
        .plugin('@aurelia-mdc-web/line-ripple')
        .plugin('@aurelia-mdc-web/notched-outline')
        .plugin('@aurelia-mdc-web/ripple');
    if (typeof callback === 'function') {
        var config = frameworkConfig.container.get(_mdc_default_text_field_configuration__WEBPACK_IMPORTED_MODULE_2__.MdcDefaultTextFieldConfiguration);
        callback(config);
    }
}
var textFieldConfig = {
    tagName: 'mdc-text-field',
    properties: {
        value: {
            defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindingMode.twoWay,
            getObserver: function (element) {
                return new aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.ValueAttributeObserver(element, 'value', new aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.EventSubscriber(['change', 'input']));
            }
        }
    }
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 372:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/text-field/dist/native-modules/mdc-default-text-field-configuration.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDefaultTextFieldConfiguration": function() { return /* binding */ MdcDefaultTextFieldConfiguration; }
/* harmony export */ });
var MdcDefaultTextFieldConfiguration = /** @class */ (function () {
    function MdcDefaultTextFieldConfiguration() {
    }
    return MdcDefaultTextFieldConfiguration;
}());

//# sourceMappingURL=mdc-default-text-field-configuration.js.map

/***/ }),

/***/ "@aurelia-mdc-web/text-field/mdc-text-field-character-counter":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/text-field/dist/native-modules/mdc-text-field-character-counter.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcTextFieldCharacterCounter": function() { return /* binding */ MdcTextFieldCharacterCounter; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _material_textfield__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/textfield */ 1261);
/* harmony import */ var _material_textfield__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/textfield */ 3030);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");




var MdcTextFieldCharacterCounter = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MdcTextFieldCharacterCounter, _super);
    function MdcTextFieldCharacterCounter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MdcTextFieldCharacterCounter.prototype, "foundationForTextField", {
        // Provided for access by MDCTextField component
        get: function () {
            return this.foundation;
        },
        enumerable: false,
        configurable: true
    });
    MdcTextFieldCharacterCounter.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            setContent: function (content) {
                _this.root.textContent = content;
            },
        };
        return new _material_textfield__WEBPACK_IMPORTED_MODULE_3__.MDCTextFieldCharacterCounterFoundation(adapter);
    };
    MdcTextFieldCharacterCounter = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inlineView)("<template class=\"".concat(_material_textfield__WEBPACK_IMPORTED_MODULE_4__.cssClasses.ROOT, "\"></template>")),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)(_material_textfield__WEBPACK_IMPORTED_MODULE_4__.cssClasses.ROOT)
    ], MdcTextFieldCharacterCounter);
    return MdcTextFieldCharacterCounter;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__.MdcComponent));

//# sourceMappingURL=mdc-text-field-character-counter.js.map

/***/ }),

/***/ "@aurelia-mdc-web/text-field/mdc-text-field-helper-line/mdc-text-field-helper-line":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/text-field/dist/native-modules/mdc-text-field-helper-line/mdc-text-field-helper-line.js ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcTextFieldHelperLine": function() { return /* binding */ MdcTextFieldHelperLine; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);



var MdcTextFieldHelperLine = /** @class */ (function () {
    function MdcTextFieldHelperLine() {
    }
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Array)
    ], MdcTextFieldHelperLine.prototype, "errors", void 0);
    MdcTextFieldHelperLine = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-text-field-helper-line.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-text-field-helper-line')
    ], MdcTextFieldHelperLine);
    return MdcTextFieldHelperLine;
}());

//# sourceMappingURL=mdc-text-field-helper-line.js.map

/***/ }),

/***/ "@aurelia-mdc-web/text-field/mdc-text-field-helper-text/mdc-text-field-helper-text":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/text-field/dist/native-modules/mdc-text-field-helper-text/mdc-text-field-helper-text.js ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcTextFieldHelperText": function() { return /* binding */ MdcTextFieldHelperText; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_textfield__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/textfield */ 7103);
/* harmony import */ var _material_textfield__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/textfield */ 5793);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);





var MdcTextFieldHelperText = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(MdcTextFieldHelperText, _super);
    function MdcTextFieldHelperText() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.helperTextCssClasses = _material_textfield__WEBPACK_IMPORTED_MODULE_4__.cssClasses;
        return _this;
    }
    Object.defineProperty(MdcTextFieldHelperText.prototype, "foundationForTextField", {
        // Provided for access by MDCTextField component
        get: function () {
            return this.foundation;
        },
        enumerable: false,
        configurable: true
    });
    MdcTextFieldHelperText.prototype.getDefaultFoundation = function () {
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
        return new _material_textfield__WEBPACK_IMPORTED_MODULE_5__.MDCTextFieldHelperTextFoundation(adapter);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcTextFieldHelperText.prototype, "persistent", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcTextFieldHelperText.prototype, "validation", void 0);
    MdcTextFieldHelperText = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.useView)('./mdc-text-field-helper-text.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.customElement)(_material_textfield__WEBPACK_IMPORTED_MODULE_4__.cssClasses.ROOT)
    ], MdcTextFieldHelperText);
    return MdcTextFieldHelperText;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-text-field-helper-text.js.map

/***/ }),

/***/ "@aurelia-mdc-web/text-field/mdc-text-field-icon":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/text-field/dist/native-modules/mdc-text-field-icon.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcTextFieldIcon": function() { return /* binding */ MdcTextFieldIcon; },
/* harmony export */   "mdcIconStrings": function() { return /* binding */ mdcIconStrings; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_textfield_icon_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/textfield/icon/constants */ 1409);
/* harmony import */ var _material_textfield__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/textfield */ 9495);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");





var mdcIconStrings = {
    ATTRIBUTE: 'mdc-text-field-icon',
    LEADING: 'leading',
    TRAILING: 'trailing'
};
_material_textfield_icon_constants__WEBPACK_IMPORTED_MODULE_2__.strings.ICON_EVENT = _material_textfield_icon_constants__WEBPACK_IMPORTED_MODULE_2__.strings.ICON_EVENT.toLowerCase();
var MdcTextFieldIcon = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(MdcTextFieldIcon, _super);
    function MdcTextFieldIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    MdcTextFieldIcon.prototype.initialise = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                this.root.classList.add(_material_textfield_icon_constants__WEBPACK_IMPORTED_MODULE_2__.cssClasses.ROOT);
                if (this.root.hasAttribute(mdcIconStrings.LEADING)) {
                    this.root.classList.add("".concat(_material_textfield_icon_constants__WEBPACK_IMPORTED_MODULE_2__.cssClasses.ROOT, "--").concat(mdcIconStrings.LEADING));
                }
                if (this.root.hasAttribute(mdcIconStrings.TRAILING)) {
                    this.root.classList.add("".concat(_material_textfield_icon_constants__WEBPACK_IMPORTED_MODULE_2__.cssClasses.ROOT, "--").concat(mdcIconStrings.TRAILING));
                }
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(MdcTextFieldIcon.prototype, "foundationForTextField", {
        // Provided for access by MDCTextField component
        get: function () {
            return this.foundation;
        },
        enumerable: false,
        configurable: true
    });
    MdcTextFieldIcon.prototype.getDefaultFoundation = function () {
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
            notifyIconAction: function () { return _this.emit(_material_textfield__WEBPACK_IMPORTED_MODULE_4__.MDCTextFieldIconFoundation.strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */); },
        };
        return new _material_textfield__WEBPACK_IMPORTED_MODULE_4__.MDCTextFieldIconFoundation(adapter);
    };
    MdcTextFieldIcon = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.customAttribute)(mdcIconStrings.ATTRIBUTE)
    ], MdcTextFieldIcon);
    return MdcTextFieldIcon;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-text-field-icon.js.map

/***/ }),

/***/ "@aurelia-mdc-web/text-field/mdc-text-field":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/text-field/dist/native-modules/mdc-text-field.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcTextField": function() { return /* binding */ MdcTextField; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _material_textfield__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/textfield */ 2614);
/* harmony import */ var _material_textfield__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/textfield */ 7103);
/* harmony import */ var _material_textfield__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material/textfield */ 3030);
/* harmony import */ var _material_textfield__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material/textfield */ 1627);
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material/dom/events */ 9397);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);
/* harmony import */ var _mdc_text_field_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mdc-text-field-icon */ "@aurelia-mdc-web/text-field/mdc-text-field-icon");
/* harmony import */ var _mdc_default_text_field_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mdc-default-text-field-configuration */ 372);








var textFieldId = 0;
var leadingIconSelector = "[".concat(_mdc_text_field_icon__WEBPACK_IMPORTED_MODULE_3__.mdcIconStrings.ATTRIBUTE, "][").concat(_mdc_text_field_icon__WEBPACK_IMPORTED_MODULE_3__.mdcIconStrings.LEADING, "]");
var trailingIconSelector = "[".concat(_mdc_text_field_icon__WEBPACK_IMPORTED_MODULE_3__.mdcIconStrings.ATTRIBUTE, "][").concat(_mdc_text_field_icon__WEBPACK_IMPORTED_MODULE_3__.mdcIconStrings.TRAILING, "]");
var MdcTextField = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(MdcTextField, _super);
    function MdcTextField(root, taskQueue, defaultConfiguration) {
        var _this = _super.call(this, root) || this;
        _this.taskQueue = taskQueue;
        _this.defaultConfiguration = defaultConfiguration;
        _this.id = "mdc-text-field-".concat(++textFieldId);
        _this.errors = new Map();
        _this.mutationObserver = new MutationObserver(function (mutations) { return _this.mutated(mutations); });
        _this.outlined = _this.defaultConfiguration.outlined;
        _this.placeholder = ' '; // non empty placeholder solves the issue of misplaced labels in Safari
        defineMdcTextFieldElementApis(_this.root);
        return _this;
    }
    MdcTextField_1 = MdcTextField;
    MdcTextField.processContent = function (_viewCompiler, _resources, element) {
        // move icons to slots - this allows omitting slot specification
        var leadingIcon = element.querySelector(leadingIconSelector);
        leadingIcon === null || leadingIcon === void 0 ? void 0 : leadingIcon.setAttribute('slot', 'leading-icon');
        var trailingIcon = element.querySelector(trailingIconSelector);
        trailingIcon === null || trailingIcon === void 0 ? void 0 : trailingIcon.setAttribute('slot', 'trailing-icon');
        return true;
    };
    MdcTextField.prototype.labelChanged = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _a.sent();
                        this.taskQueue.queueTask(function () {
                            if (_this.foundation) {
                                var openNotch = _this.foundation.shouldFloat;
                                _this.foundation.notchOutline(openNotch);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcTextField.prototype.requiredChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        this.input_.required = this.required;
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setUseNativeValidation(true);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcTextField.prototype.disabledChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.input_.disabled = this.disabled;
                        return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setDisabled(this.disabled);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcTextField.prototype.readonlyChanged = function () {
        this.input_.readOnly = this.readonly;
    };
    MdcTextField.prototype.maxlengthChanged = function () {
        if (this.maxlength) {
            this.input_.setAttribute('maxlength', this.maxlength);
        }
        else {
            this.input_.removeAttribute('maxlength');
        }
    };
    MdcTextField.prototype.rowsChanged = function () {
        if (this.rows) {
            this.input_.setAttribute('rows', this.rows);
        }
        else {
            this.input_.removeAttribute('rows');
        }
    };
    MdcTextField.prototype.colsChanged = function () {
        if (this.rows) {
            this.input_.setAttribute('cols', this.cols);
        }
        else {
            this.input_.removeAttribute('cols');
        }
    };
    MdcTextField.prototype.maxChanged = function () {
        if (this.max === undefined) {
            this.input_.removeAttribute('max');
        }
        else {
            this.input_.max = this.max;
        }
    };
    MdcTextField.prototype.minChanged = function () {
        if (this.min === undefined) {
            this.input_.removeAttribute('min');
        }
        else {
            this.input_.min = this.min;
        }
    };
    MdcTextField.prototype.stepChanged = function () {
        if (this.step === undefined) {
            this.input_.removeAttribute('step');
        }
        else {
            this.input_.step = this.step;
        }
    };
    MdcTextField.prototype.autocompleteChanged = function () {
        if (this.autocomplete === undefined) {
            this.input_.removeAttribute('autocomplete');
        }
        else {
            this.input_.autocomplete = this.autocomplete;
        }
    };
    MdcTextField.prototype.tabindexChanged = function () {
        if (isNaN(this.tabindex)) {
            this.input_.removeAttribute('tabindex');
        }
        else {
            this.input_.tabIndex = this.tabindex;
        }
    };
    MdcTextField.prototype.typeChanged = function () {
        if (!this.textarea) {
            if (this.type === undefined) {
                this.input_.removeAttribute('type');
            }
            else {
                this.input_.type = this.type;
            }
        }
    };
    MdcTextField.prototype.nameChanged = function () {
        if (this.name === undefined) {
            this.input_.removeAttribute('name');
        }
        else {
            this.input_.name = this.name;
        }
    };
    Object.defineProperty(MdcTextField.prototype, "value", {
        get: function () {
            if (this.foundation) {
                return this.foundation.getValue();
            }
            else {
                return this.initialValue;
            }
        },
        set: function (value) {
            if (this.foundation) {
                if (this.foundation.getValue() !== value) {
                    this.foundation.setValue(value === null || value === undefined ? '' : value.toString());
                }
            }
            else {
                this.initialValue = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    MdcTextField.prototype.addError = function (error) {
        this.errors.set(error, true);
        this.valid = false;
    };
    MdcTextField.prototype.removeError = function (error) {
        this.errors.delete(error);
        this.valid = this.errors.size === 0;
    };
    Object.defineProperty(MdcTextField.prototype, "valid", {
        get: function () {
            var _a, _b;
            return (_b = (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.isValid()) !== null && _b !== void 0 ? _b : true;
        },
        set: function (value) {
            var _a, _b;
            (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setUseNativeValidation(false);
            (_b = this.foundation) === null || _b === void 0 ? void 0 : _b.setValid(value);
        },
        enumerable: false,
        configurable: true
    });
    MdcTextField.prototype.renderErrors = function () {
        var helperLine = this.root.nextElementSibling;
        if ((helperLine === null || helperLine === void 0 ? void 0 : helperLine.tagName) === 'MDC-TEXT-FIELD-HELPER-LINE') {
            helperLine.au.controller.viewModel.errors = Array.from(this.errors.keys())
                .filter(function (x) { return x.message !== null; }).map(function (x) { return x.message; });
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    MdcTextField.prototype.bind = function () { };
    MdcTextField.prototype.initialSyncWithDOM = function () {
        this.value = this.initialValue;
        this.errors = new Map();
        this.valid = true;
    };
    MdcTextField.prototype.initialise = function () {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
            var nextSibling, initialisedChildren;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.requiredChanged();
                        this.disabledChanged();
                        this.readonlyChanged();
                        this.tabindexChanged();
                        this.maxlengthChanged();
                        this.rowsChanged();
                        this.colsChanged();
                        this.minChanged();
                        this.maxChanged();
                        this.stepChanged();
                        this.typeChanged();
                        this.autocompleteChanged();
                        this.nameChanged();
                        this.mutationObserver.observe(this.root, { subtree: true, childList: true });
                        this.leadingIconChanged();
                        this.trailingIconChanged();
                        // handle the case when attribute value was set, not bound, in html
                        if (this.root.hasAttribute('value')) {
                            this.value = (_a = this.root.getAttribute('value')) !== null && _a !== void 0 ? _a : '';
                        }
                        nextSibling = this.root.nextElementSibling;
                        initialisedChildren = [];
                        if (this.label_) {
                            initialisedChildren.push(this.label_.initialised);
                        }
                        if ((nextSibling === null || nextSibling === void 0 ? void 0 : nextSibling.tagName) === _material_textfield__WEBPACK_IMPORTED_MODULE_6__.cssClasses.HELPER_LINE.toUpperCase()) {
                            this.helperText_ = (_b = nextSibling.querySelector(_material_textfield__WEBPACK_IMPORTED_MODULE_7__.strings.ROOT_SELECTOR)) === null || _b === void 0 ? void 0 : _b.au.controller.viewModel;
                            this.characterCounter_ = (_c = nextSibling.querySelector(_material_textfield__WEBPACK_IMPORTED_MODULE_8__.strings.ROOT_SELECTOR)) === null || _c === void 0 ? void 0 : _c.au.controller.viewModel;
                            if (this.helperText_) {
                                initialisedChildren.push(this.helperText_.initialised);
                            }
                            if (this.characterCounter_) {
                                initialisedChildren.push(this.characterCounter_.initialised);
                            }
                        }
                        return [4 /*yield*/, Promise.all(initialisedChildren)];
                    case 1:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcTextField.prototype.mutated = function (mutations) {
        if (mutations.find(function (x) { return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__read)(Array.from(x.addedNodes)), false), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__read)(Array.from(x.removedNodes)), false).find(function (y) { return y instanceof HTMLElement && y.matches(leadingIconSelector); }); })) {
            this.leadingIconChanged();
        }
        if (mutations.find(function (x) { return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__read)(Array.from(x.addedNodes)), false), (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__read)(Array.from(x.removedNodes)), false).find(function (y) { return y instanceof HTMLElement && y.matches(trailingIconSelector); }); })) {
            this.trailingIconChanged();
        }
    };
    MdcTextField.prototype.trailingIconChanged = function () {
        var el = this.root.querySelector(trailingIconSelector);
        this.trailingIcon_ = el === null || el === void 0 ? void 0 : el.au['mdc-text-field-icon'].viewModel;
    };
    MdcTextField.prototype.leadingIconChanged = function () {
        var el = this.root.querySelector(leadingIconSelector);
        this.leadingIcon_ = el === null || el === void 0 ? void 0 : el.au['mdc-text-field-icon'].viewModel;
    };
    MdcTextField.prototype.destroy = function () {
        this.mutationObserver.disconnect();
    };
    MdcTextField.prototype.getDefaultFoundation = function () {
        var adapter = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, this.getRootAdapterMethods_()), this.getInputAdapterMethods_()), this.getLabelAdapterMethods_()), this.getLineRippleAdapterMethods_()), this.getOutlineAdapterMethods_());
        return new _material_textfield__WEBPACK_IMPORTED_MODULE_9__.MDCTextFieldFoundation(adapter, this.getFoundationMap_());
    };
    MdcTextField.prototype.getRootAdapterMethods_ = function () {
        var _this = this;
        return {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            registerTextFieldInteractionHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterTextFieldInteractionHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
            registerValidationAttributeChangeHandler: function (handler) {
                var getAttributesList = function (mutationsList) {
                    return mutationsList
                        .map(function (mutation) { return mutation.attributeName; })
                        .filter(function (attributeName) { return attributeName; });
                };
                var observer = new MutationObserver(function (mutationsList) { return handler(getAttributesList(mutationsList)); });
                var config = { attributes: true };
                observer.observe(_this.input_, config);
                return observer;
            },
            deregisterValidationAttributeChangeHandler: function (observer) { return observer.disconnect(); },
        };
    };
    MdcTextField.prototype.getInputAdapterMethods_ = function () {
        var _this = this;
        return {
            getNativeInput: function () { return _this.input_; },
            setInputAttr: function (attr, value) {
                _this.input_.setAttribute(attr, value);
            },
            removeInputAttr: function (attr) {
                _this.input_.removeAttribute(attr);
            },
            isFocused: function () { return document.activeElement === _this.input_; },
            registerInputInteractionHandler: function (evtType, handler) { return _this.input_.addEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_10__.applyPassive)()); },
            deregisterInputInteractionHandler: function (evtType, handler) { var _a; return (_a = _this.input_) === null || _a === void 0 ? void 0 : _a.removeEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_10__.applyPassive)()); },
        };
    };
    MdcTextField.prototype.getLabelAdapterMethods_ = function () {
        var _this = this;
        return {
            floatLabel: function (shouldFloat) { var _a; return (_a = _this.label_) === null || _a === void 0 ? void 0 : _a.float(shouldFloat); },
            getLabelWidth: function () { return _this.label_ ? _this.label_.getWidth() : 0; },
            hasLabel: function () { return Boolean(_this.label_); },
            shakeLabel: function (shouldShake) { var _a; return (_a = _this.label_) === null || _a === void 0 ? void 0 : _a.shake(shouldShake); },
            setLabelRequired: function (isRequired) { var _a; return (_a = _this.label_) === null || _a === void 0 ? void 0 : _a.setRequired(isRequired); },
        };
    };
    MdcTextField.prototype.getLineRippleAdapterMethods_ = function () {
        var _this = this;
        return {
            activateLineRipple: function () { var _a; return (_a = _this.lineRipple_) === null || _a === void 0 ? void 0 : _a.activate(); },
            deactivateLineRipple: function () { var _a; return (_a = _this.lineRipple_) === null || _a === void 0 ? void 0 : _a.deactivate(); },
            setLineRippleTransformOrigin: function (normalizedX) { var _a; return (_a = _this.lineRipple_) === null || _a === void 0 ? void 0 : _a.setRippleCenter(normalizedX); }
        };
    };
    MdcTextField.prototype.getOutlineAdapterMethods_ = function () {
        var _this = this;
        return {
            closeOutline: function () { var _a; return (_a = _this.outline_) === null || _a === void 0 ? void 0 : _a.closeNotch(); },
            hasOutline: function () { return Boolean(_this.outline_); },
            notchOutline: function (labelWidth) { var _a; return (_a = _this.outline_) === null || _a === void 0 ? void 0 : _a.notch(labelWidth); },
        };
    };
    /**
     * @return A map of all subcomponents to subfoundations.
     */
    MdcTextField.prototype.getFoundationMap_ = function () {
        return {
            characterCounter: this.characterCounter_ ? this.characterCounter_.foundationForTextField : undefined,
            helperText: this.helperText_ ? this.helperText_.foundationForTextField : undefined,
            leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundationForTextField : undefined,
            trailingIcon: this.trailingIcon_ ? this.trailingIcon_.foundationForTextField : undefined,
        };
    };
    MdcTextField.prototype.onInput = function (evt) {
        var value = evt.target.value;
        this.value = value;
    };
    MdcTextField.prototype.onFocus = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.activateFocus();
        this.emit('focus', {}, true);
    };
    MdcTextField.prototype.onChange = function (evt) {
        var value = evt.target.value;
        this.value = value;
    };
    MdcTextField.prototype.onBlur = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.deactivateFocus();
        this.emit('blur', {}, true);
    };
    MdcTextField.prototype.focus = function () {
        this.input_.focus();
    };
    MdcTextField.prototype.blur = function () {
        this.input_.blur();
    };
    MdcTextField.prototype.onKeyup = function (e) {
        if (this.blurOnEnter && e.keyCode === 13) {
            this.blur();
        }
        return true;
    };
    var MdcTextField_1;
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)
    ], MdcTextField.prototype, "label", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcTextField.prototype, "textarea", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcTextField.prototype, "endAligned", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcTextField.prototype, "ltrText", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcTextField.prototype, "outlined", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)
    ], MdcTextField.prototype, "prefix", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)
    ], MdcTextField.prototype, "suffix", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcTextField.prototype, "required", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcTextField.prototype, "disabled", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcTextField.prototype, "readonly", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Boolean)
    ], MdcTextField.prototype, "blurOnEnter", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)
    ], MdcTextField.prototype, "maxlength", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)
    ], MdcTextField.prototype, "rows", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)
    ], MdcTextField.prototype, "cols", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)
    ], MdcTextField.prototype, "max", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)
    ], MdcTextField.prototype, "min", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)
    ], MdcTextField.prototype, "step", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)
    ], MdcTextField.prototype, "autocomplete", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", Number)
    ], MdcTextField.prototype, "tabindex", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)
    ], MdcTextField.prototype, "type", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)
    ], MdcTextField.prototype, "name", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:type", String)
    ], MdcTextField.prototype, "placeholder", void 0);
    MdcTextField = MdcTextField_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element, aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.TaskQueue, _mdc_default_text_field_configuration__WEBPACK_IMPORTED_MODULE_4__.MdcDefaultTextFieldConfiguration),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-text-field.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)(_material_textfield__WEBPACK_IMPORTED_MODULE_6__.cssClasses.ROOT),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.processContent)(MdcTextField_1.processContent),
        (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [HTMLElement, aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.TaskQueue, _mdc_default_text_field_configuration__WEBPACK_IMPORTED_MODULE_4__.MdcDefaultTextFieldConfiguration])
    ], MdcTextField);
    return MdcTextField;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_1__.MdcComponent));

function defineMdcTextFieldElementApis(element) {
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
        disabled: {
            get: function () {
                return this.au.controller.viewModel.disabled;
            },
            set: function (value) {
                this.au.controller.viewModel.disabled = value;
            },
            configurable: true
        },
        readOnly: {
            get: function () {
                return this.au.controller.viewModel.readonly;
            },
            set: function (value) {
                this.au.controller.viewModel.readonly = value;
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
        },
        isFocused: {
            get: function () {
                return document.activeElement === this.au.controller.viewModel.input_;
            },
            configurable: true
        }
    });
}
//# sourceMappingURL=mdc-text-field.js.map

/***/ }),

/***/ "@aurelia-mdc-web/tooltip":
/*!****************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/tooltip/dist/native-modules/index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDefaultTooltipConfiguration": function() { return /* reexport safe */ _mdc_default_tooltip_configuration__WEBPACK_IMPORTED_MODULE_1__.MdcDefaultTooltipConfiguration; },
/* harmony export */   "MdcTooltip": function() { return /* reexport safe */ _mdc_tooltip__WEBPACK_IMPORTED_MODULE_2__.MdcTooltip; },
/* harmony export */   "MdcTooltipAttribute": function() { return /* reexport safe */ _mdc_tooltip_attribute__WEBPACK_IMPORTED_MODULE_3__.MdcTooltipAttribute; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_default_tooltip_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-default-tooltip-configuration */ 4954);
/* harmony import */ var _mdc_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdc-tooltip */ "@aurelia-mdc-web/tooltip/mdc-tooltip");
/* harmony import */ var _mdc_tooltip_attribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mdc-tooltip-attribute */ "@aurelia-mdc-web/tooltip/mdc-tooltip-attribute");





function configure(frameworkConfig, callback) {
    frameworkConfig.globalResources([
        './mdc-tooltip',
        './mdc-tooltip-attribute'
    ]);
    if (typeof callback === 'function') {
        var config = frameworkConfig.container.get(_mdc_default_tooltip_configuration__WEBPACK_IMPORTED_MODULE_1__.MdcDefaultTooltipConfiguration);
        callback(config);
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4954:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/tooltip/dist/native-modules/mdc-default-tooltip-configuration.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcDefaultTooltipConfiguration": function() { return /* binding */ MdcDefaultTooltipConfiguration; }
/* harmony export */ });
var MdcDefaultTooltipConfiguration = /** @class */ (function () {
    function MdcDefaultTooltipConfiguration() {
    }
    return MdcDefaultTooltipConfiguration;
}());

//# sourceMappingURL=mdc-default-tooltip-configuration.js.map

/***/ }),

/***/ "@aurelia-mdc-web/tooltip/mdc-tooltip-attribute":
/*!********************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/tooltip/dist/native-modules/mdc-tooltip-attribute.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcTooltipAttribute": function() { return /* binding */ MdcTooltipAttribute; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);
/* harmony import */ var _mdc_default_tooltip_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdc-default-tooltip-configuration */ 4954);




/**
 * @selector [mdc-tooltip]
 */
var MdcTooltipAttribute = /** @class */ (function () {
    function MdcTooltipAttribute(root, templatingEngine, defaultConfiguration) {
        this.templatingEngine = templatingEngine;
        this.defaultConfiguration = defaultConfiguration;
        this.scrollHost = this.defaultConfiguration.scrollHost;
        this.root = root;
    }
    MdcTooltipAttribute.prototype.attached = function () {
        this.tooltip = document.createElement('div');
        this.tooltip.setAttribute('as-element', 'mdc-tooltip');
        this.tooltip.setAttribute('anchor-elem.bind', 'root');
        this.tooltip.setAttribute('x-position.bind', 'xPosition');
        this.tooltip.setAttribute('y-position.bind', 'yPosition');
        this.tooltip.setAttribute('boundary-type.bind', 'boundaryType');
        this.tooltip.setAttribute('rich.bind', 'rich');
        this.tooltip.setAttribute('persistent.bind', 'persistent');
        this.tooltip.setAttribute('show-delay.bind', 'showDelay');
        this.tooltip.setAttribute('hide-delay.bind', 'hideDelay');
        this.tooltip.setAttribute('scroll-host.bind', 'scrollHost');
        this.tooltip.innerText = this.value;
        document.body.appendChild(this.tooltip);
        this.view = this.templatingEngine.enhance({
            element: this.tooltip,
            bindingContext: this
        });
    };
    MdcTooltipAttribute.prototype.detached = function () {
        this.view.detached();
        this.tooltip.remove();
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable)({ primaryProperty: true }),
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", String)
    ], MdcTooltipAttribute.prototype, "value", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcTooltipAttribute.prototype, "rich", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcTooltipAttribute.prototype, "persistent", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Object)
    ], MdcTooltipAttribute.prototype, "xPosition", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Object)
    ], MdcTooltipAttribute.prototype, "yPosition", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Object)
    ], MdcTooltipAttribute.prototype, "boundaryType", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Number)
    ], MdcTooltipAttribute.prototype, "showDelay", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Number)
    ], MdcTooltipAttribute.prototype, "hideDelay", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Object)
    ], MdcTooltipAttribute.prototype, "scrollHost", void 0);
    MdcTooltipAttribute = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element, aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.TemplatingEngine, _mdc_default_tooltip_configuration__WEBPACK_IMPORTED_MODULE_2__.MdcDefaultTooltipConfiguration),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-tooltip'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [HTMLElement, aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.TemplatingEngine, _mdc_default_tooltip_configuration__WEBPACK_IMPORTED_MODULE_2__.MdcDefaultTooltipConfiguration])
    ], MdcTooltipAttribute);
    return MdcTooltipAttribute;
}());

//# sourceMappingURL=mdc-tooltip-attribute.js.map

/***/ }),

/***/ "@aurelia-mdc-web/tooltip/mdc-tooltip":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/tooltip/dist/native-modules/mdc-tooltip.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcTooltip": function() { return /* binding */ MdcTooltip; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/tooltip */ 1698);
/* harmony import */ var _material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/tooltip */ 1785);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);
/* harmony import */ var _mdc_default_tooltip_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mdc-default-tooltip-configuration */ 4954);






/**
 * @selector mdc-tooltip
 */
var MdcTooltip = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(MdcTooltip, _super);
    function MdcTooltip(root, defaultConfiguration) {
        var _this = _super.call(this, root) || this;
        _this.defaultConfiguration = defaultConfiguration;
        _this.showDelay = _this.defaultConfiguration.showDelay;
        _this.hideDelay = _this.defaultConfiguration.hideDelay;
        _this.scrollHost = _this.defaultConfiguration.scrollHost;
        return _this;
    }
    MdcTooltip.prototype.xPositionChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.xPosition !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setTooltipPosition({ xPos: _material_tooltip__WEBPACK_IMPORTED_MODULE_5__.XPosition[this.xPosition] });
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MdcTooltip.prototype.yPositionChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.yPosition !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setTooltipPosition({ yPos: _material_tooltip__WEBPACK_IMPORTED_MODULE_5__.YPosition[this.yPosition] });
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MdcTooltip.prototype.withCaretPosChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.withCaretPos !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setTooltipPosition({ withCaretPos: _material_tooltip__WEBPACK_IMPORTED_MODULE_5__.PositionWithCaret[this.withCaretPos] });
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MdcTooltip.prototype.boundaryTypeChanged = function () {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.boundaryType !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initialised];
                    case 1:
                        _b.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setAnchorBoundaryType(_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.AnchorBoundaryType[this.boundaryType]);
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MdcTooltip.prototype.showDelayChanged = function () {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _c.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setShowDelay((_b = this.showDelay) !== null && _b !== void 0 ? _b : _material_tooltip__WEBPACK_IMPORTED_MODULE_5__.numbers.SHOW_DELAY_MS);
                        return [2 /*return*/];
                }
            });
        });
    };
    MdcTooltip.prototype.hideDelayChanged = function () {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.initialised];
                    case 1:
                        _c.sent();
                        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.setHideDelay((_b = this.hideDelay) !== null && _b !== void 0 ? _b : _material_tooltip__WEBPACK_IMPORTED_MODULE_5__.numbers.HIDE_DELAY_MS);
                        return [2 /*return*/];
                }
            });
        });
    };
    // eslint-disable-next-line @typescript-eslint/require-await
    MdcTooltip.prototype.initialise = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function (_a) {
                if (this.persistent) {
                    this.root.setAttribute(_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.attributes.PERSISTENT, 'true');
                }
                return [2 /*return*/];
            });
        });
    };
    MdcTooltip.prototype.initialSyncWithDOM = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        if (this.rich && this.persistent) {
            (_a = this.anchorElem) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this);
        }
        else {
            (_b = this.anchorElem) === null || _b === void 0 ? void 0 : _b.addEventListener('mouseenter', this);
            // TODO(b/157075286): Listening for a 'focus' event is too broad.
            (_c = this.anchorElem) === null || _c === void 0 ? void 0 : _c.addEventListener('focus', this);
            (_d = this.anchorElem) === null || _d === void 0 ? void 0 : _d.addEventListener('mouseleave', this);
            (_e = this.anchorElem) === null || _e === void 0 ? void 0 : _e.addEventListener('touchstart', this);
            (_f = this.anchorElem) === null || _f === void 0 ? void 0 : _f.addEventListener('touchend', this);
        }
        if (typeof (this.scrollHost) === 'string') {
            this.scrollHost = (_g = document.querySelector(this.scrollHost)) !== null && _g !== void 0 ? _g : undefined;
        }
        if (this.scrollHost) {
            var scrollHost_1 = this.scrollHost;
            this.foundation.attachScrollHandler(function (event, listener) { return scrollHost_1.addEventListener(event, listener); });
            this.foundation.removeScrollHandler(function (event, listener) { return scrollHost_1.removeEventListener(event, listener); });
        }
    };
    MdcTooltip.prototype.destroy = function () {
        if (!this.anchorElem) {
            return;
        }
        if (this.rich && this.persistent) {
            this.anchorElem.removeEventListener('click', this);
        }
        else {
            this.anchorElem.removeEventListener('mouseenter', this);
            this.anchorElem.removeEventListener('focus', this);
            this.anchorElem.removeEventListener('mouseleave', this);
            this.anchorElem.removeEventListener('touchstart', this);
            this.anchorElem.removeEventListener('touchend', this);
        }
    };
    MdcTooltip.prototype.handleEvent = function (evt) {
        switch (evt.type) {
            case 'click':
                this.handleClick();
                break;
            case 'mouseenter':
                this.handleMouseEnter();
                break;
            case 'focus':
                this.handleFocus(evt);
                break;
            case 'mouseleave':
                this.handleMouseLeave();
                break;
            case 'touchstart':
                this.handleTouchstart();
                break;
            case 'touchend':
                this.handleTouchend();
                break;
        }
    };
    MdcTooltip.prototype.handleMouseEnter = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleAnchorMouseEnter();
    };
    MdcTooltip.prototype.handleFocus = function (evt) {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleAnchorFocus(evt);
    };
    MdcTooltip.prototype.handleMouseLeave = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleAnchorMouseLeave();
    };
    MdcTooltip.prototype.handleTouchstart = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleAnchorTouchstart();
    };
    MdcTooltip.prototype.handleTouchend = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleAnchorTouchend();
    };
    MdcTooltip.prototype.handleClick = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleAnchorClick();
    };
    MdcTooltip.prototype.handleTransitionEnd = function () {
        var _a;
        (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleTransitionEnd();
    };
    MdcTooltip.prototype.getDefaultFoundation = function () {
        var _this = this;
        var adapter = {
            getAttribute: function (attr) { return _this.root.getAttribute(attr); },
            setAttribute: function (attr, value) {
                _this.root.setAttribute(attr, value);
            },
            removeAttribute: function (attr) {
                _this.root.removeAttribute(attr);
            },
            addClass: function (className) {
                _this.root.classList.add(className);
            },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            getComputedStyleProperty: function (propertyName) {
                return window.getComputedStyle(_this.root).getPropertyValue(propertyName);
            },
            setStyleProperty: function (propertyName, value) {
                _this.root.style.setProperty(propertyName, value);
            },
            setSurfaceAnimationStyleProperty: function (propertyName, value) {
                var surface = _this.root.querySelector(".".concat(_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.CssClasses.SURFACE_ANIMATION));
                surface === null || surface === void 0 ? void 0 : surface.style.setProperty(propertyName, value);
            },
            getViewportWidth: function () { return window.innerWidth; },
            getViewportHeight: function () { return window.innerHeight; },
            getTooltipSize: function () {
                return {
                    width: _this.root.offsetWidth,
                    height: _this.root.offsetHeight
                };
            },
            getAnchorBoundingRect: function () {
                return _this.anchorElem ? _this.anchorElem.getBoundingClientRect() : null;
            },
            getParentBoundingRect: function () {
                var _a, _b;
                return (_b = (_a = _this.root.parentElement) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) !== null && _b !== void 0 ? _b : null;
            },
            getAnchorAttribute: function (attr) {
                return _this.anchorElem ? _this.anchorElem.getAttribute(attr) : null;
            },
            setAnchorAttribute: function (attr, value) {
                var _a;
                (_a = _this.anchorElem) === null || _a === void 0 ? void 0 : _a.setAttribute(attr, value);
            },
            isRTL: function () { return getComputedStyle(_this.root).direction === 'rtl'; },
            anchorContainsElement: function (element) {
                var _a;
                return !!((_a = _this.anchorElem) === null || _a === void 0 ? void 0 : _a.contains(element));
            },
            tooltipContainsElement: function (element) {
                return _this.root.contains(element);
            },
            focusAnchorElement: function () {
                var _a;
                (_a = _this.anchorElem) === null || _a === void 0 ? void 0 : _a.focus();
            },
            registerEventHandler: function (evt, handler) {
                if (_this.root instanceof HTMLElement) {
                    _this.root.addEventListener(evt, handler);
                }
            },
            deregisterEventHandler: function (evt, handler) {
                if (_this.root instanceof HTMLElement) {
                    _this.root.removeEventListener(evt, handler);
                }
            },
            registerAnchorEventHandler: function (evt, handler) {
                var _a;
                (_a = _this.anchorElem) === null || _a === void 0 ? void 0 : _a.addEventListener(evt, handler);
            },
            deregisterAnchorEventHandler: function (evt, handler) {
                var _a;
                (_a = _this.anchorElem) === null || _a === void 0 ? void 0 : _a.addEventListener(evt, handler);
            },
            registerDocumentEventHandler: function (evt, handler) {
                document.body.addEventListener(evt, handler);
            },
            deregisterDocumentEventHandler: function (evt, handler) {
                document.body.removeEventListener(evt, handler);
            },
            registerWindowEventHandler: function (evt, handler) {
                window.addEventListener(evt, handler);
            },
            deregisterWindowEventHandler: function (evt, handler) {
                window.removeEventListener(evt, handler);
            },
            notifyHidden: function () {
                _this.emit(_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.events.HIDDEN, {});
            },
            getTooltipCaretBoundingRect: function () {
                var caret = _this.root.querySelector(".".concat(_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.CssClasses.TOOLTIP_CARET_TOP));
                if (!caret) {
                    return null;
                }
                return caret.getBoundingClientRect();
            },
            setTooltipCaretStyle: function (propertyName, value) {
                var topCaret = _this.root.querySelector(".".concat(_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.CssClasses.TOOLTIP_CARET_TOP));
                var bottomCaret = _this.root.querySelector(".".concat(_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.CssClasses.TOOLTIP_CARET_BOTTOM));
                if (!topCaret || !bottomCaret) {
                    return;
                }
                topCaret.style.setProperty(propertyName, value);
                bottomCaret.style.setProperty(propertyName, value);
            },
            clearTooltipCaretStyles: function () {
                var topCaret = _this.root.querySelector(".".concat(_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.CssClasses.TOOLTIP_CARET_TOP));
                var bottomCaret = _this.root.querySelector(".".concat(_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.CssClasses.TOOLTIP_CARET_BOTTOM));
                if (!topCaret || !bottomCaret) {
                    return;
                }
                topCaret.removeAttribute('style');
                bottomCaret.removeAttribute('style');
            },
            getActiveElement: function () {
                return document.activeElement;
            },
        };
        return new _material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MDCTooltipFoundation(adapter);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", HTMLElement)
    ], MdcTooltip.prototype, "anchorElem", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcTooltip.prototype, "rich", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Boolean)
    ], MdcTooltip.prototype, "persistent", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
    ], MdcTooltip.prototype, "xPosition", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
    ], MdcTooltip.prototype, "yPosition", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
    ], MdcTooltip.prototype, "withCaretPos", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
    ], MdcTooltip.prototype, "boundaryType", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
    ], MdcTooltip.prototype, "showDelay", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.number,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Number)
    ], MdcTooltip.prototype, "hideDelay", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", Object)
    ], MdcTooltip.prototype, "scrollHost", void 0);
    MdcTooltip = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.inject)(Element, _mdc_default_tooltip_configuration__WEBPACK_IMPORTED_MODULE_3__.MdcDefaultTooltipConfiguration),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.useView)('./mdc-tooltip.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.customElement)('mdc-tooltip'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [HTMLElement, _mdc_default_tooltip_configuration__WEBPACK_IMPORTED_MODULE_3__.MdcDefaultTooltipConfiguration])
    ], MdcTooltip);
    return MdcTooltip;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-tooltip.js.map

/***/ }),

/***/ "@aurelia-mdc-web/top-app-bar/enhance-top-app-bar-actions":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/top-app-bar/dist/native-modules/enhance-top-app-bar-actions.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnhanceTopAppBarActions": function() { return /* binding */ EnhanceTopAppBarActions; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


var EnhanceTopAppBarActions = /** @class */ (function () {
    function EnhanceTopAppBarActions() {
    }
    EnhanceTopAppBarActions.prototype.beforeCompile = function (template) {
        var e_1, _a;
        var actions = template.querySelectorAll('[mdc-top-app-bar-action-item],[mdc-top-app-bar-nav-icon]');
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(Array.from(actions)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var i = _c.value;
                i.setAttribute('mdc-ripple', 'unbounded.bind: true');
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
    EnhanceTopAppBarActions = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.viewEngineHooks
    ], EnhanceTopAppBarActions);
    return EnhanceTopAppBarActions;
}());

//# sourceMappingURL=enhance-top-app-bar-actions.js.map

/***/ }),

/***/ "@aurelia-mdc-web/top-app-bar":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/top-app-bar/dist/native-modules/index.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnhanceTopAppBarActions": function() { return /* reexport safe */ _enhance_top_app_bar_actions__WEBPACK_IMPORTED_MODULE_2__.EnhanceTopAppBarActions; },
/* harmony export */   "MdcTopAppBar": function() { return /* reexport safe */ _mdc_top_app_bar__WEBPACK_IMPORTED_MODULE_1__.MdcTopAppBar; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_top_app_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-top-app-bar */ "@aurelia-mdc-web/top-app-bar/mdc-top-app-bar");
/* harmony import */ var _enhance_top_app_bar_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enhance-top-app-bar-actions */ "@aurelia-mdc-web/top-app-bar/enhance-top-app-bar-actions");



function configure(config) {
    config.globalResources([
        './mdc-top-app-bar',
        './mdc-top-app-bar-row',
        './mdc-top-app-bar-title',
        './mdc-top-app-bar-section/mdc-top-app-bar-section',
        './mdc-top-app-bar-fixed-adjust',
        './mdc-top-app-bar-nav-icon',
        './mdc-top-app-bar-action-item',
        './enhance-top-app-bar-actions'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/top-app-bar/mdc-top-app-bar-action-item":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/top-app-bar/dist/native-modules/mdc-top-app-bar-action-item.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcTopAppBarActionItem": function() { return /* binding */ MdcTopAppBarActionItem; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


var MdcTopAppBarActionItem = /** @class */ (function () {
    function MdcTopAppBarActionItem(root) {
        this.root = root;
    }
    MdcTopAppBarActionItem.prototype.attached = function () {
        this.root.setAttribute('role', 'button');
        this.root.classList.add('mdc-top-app-bar__action-item', 'mdc-icon-button');
    };
    MdcTopAppBarActionItem = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-top-app-bar-action-item'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcTopAppBarActionItem);
    return MdcTopAppBarActionItem;
}());

//# sourceMappingURL=mdc-top-app-bar-action-item.js.map

/***/ }),

/***/ "@aurelia-mdc-web/top-app-bar/mdc-top-app-bar-fixed-adjust":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/top-app-bar/dist/native-modules/mdc-top-app-bar-fixed-adjust.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcTopAppBarFixedAdjust": function() { return /* binding */ MdcTopAppBarFixedAdjust; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


var MdcTopAppBarFixedAdjust = /** @class */ (function () {
    function MdcTopAppBarFixedAdjust(root) {
        this.root = root;
    }
    MdcTopAppBarFixedAdjust.prototype.attached = function () {
        this.root.classList.add(this.value ? "mdc-top-app-bar--".concat(this.value, "-fixed-adjust") : 'mdc-top-app-bar--fixed-adjust');
    };
    MdcTopAppBarFixedAdjust = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-top-app-bar-fixed-adjust'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcTopAppBarFixedAdjust);
    return MdcTopAppBarFixedAdjust;
}());

//# sourceMappingURL=mdc-top-app-bar-fixed-adjust.js.map

/***/ }),

/***/ "@aurelia-mdc-web/top-app-bar/mdc-top-app-bar-nav-icon":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/top-app-bar/dist/native-modules/mdc-top-app-bar-nav-icon.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcTopAppBarNavIcon": function() { return /* binding */ MdcTopAppBarNavIcon; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


var MdcTopAppBarNavIcon = /** @class */ (function () {
    function MdcTopAppBarNavIcon(root) {
        this.root = root;
    }
    MdcTopAppBarNavIcon.prototype.attached = function () {
        this.root.setAttribute('role', 'button');
        this.root.classList.add('mdc-top-app-bar__navigation-icon', 'mdc-icon-button');
    };
    MdcTopAppBarNavIcon = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-top-app-bar-nav-icon'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcTopAppBarNavIcon);
    return MdcTopAppBarNavIcon;
}());

//# sourceMappingURL=mdc-top-app-bar-nav-icon.js.map

/***/ }),

/***/ "@aurelia-mdc-web/top-app-bar/mdc-top-app-bar-row":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/top-app-bar/dist/native-modules/mdc-top-app-bar-row.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcTopAppBarRow": function() { return /* binding */ MdcTopAppBarRow; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


var MdcTopAppBarRow = /** @class */ (function () {
    function MdcTopAppBarRow() {
    }
    MdcTopAppBarRow = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inlineView)('<template class="mdc-top-app-bar__row"><slot></slot></template>'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-top-app-bar-row')
    ], MdcTopAppBarRow);
    return MdcTopAppBarRow;
}());

//# sourceMappingURL=mdc-top-app-bar-row.js.map

/***/ }),

/***/ "@aurelia-mdc-web/top-app-bar/mdc-top-app-bar-section/mdc-top-app-bar-section":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/top-app-bar/dist/native-modules/mdc-top-app-bar-section/mdc-top-app-bar-section.js ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcTopAppBarSection": function() { return /* binding */ MdcTopAppBarSection; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);



var MdcTopAppBarSection = /** @class */ (function () {
    function MdcTopAppBarSection() {
    }
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_1__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Boolean)
    ], MdcTopAppBarSection.prototype, "end", void 0);
    MdcTopAppBarSection = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.useView)('./mdc-top-app-bar-section.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-top-app-bar-section')
    ], MdcTopAppBarSection);
    return MdcTopAppBarSection;
}());

//# sourceMappingURL=mdc-top-app-bar-section.js.map

/***/ }),

/***/ "@aurelia-mdc-web/top-app-bar/mdc-top-app-bar-title":
/*!************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/top-app-bar/dist/native-modules/mdc-top-app-bar-title.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcTopAppBarTitle": function() { return /* binding */ MdcTopAppBarTitle; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


var MdcTopAppBarTitle = /** @class */ (function () {
    function MdcTopAppBarTitle() {
    }
    MdcTopAppBarTitle = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inlineView)('<template class="mdc-top-app-bar__title"><slot></slot></template>'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-top-app-bar-title')
    ], MdcTopAppBarTitle);
    return MdcTopAppBarTitle;
}());

//# sourceMappingURL=mdc-top-app-bar-title.js.map

/***/ }),

/***/ "@aurelia-mdc-web/top-app-bar/mdc-top-app-bar":
/*!******************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/top-app-bar/dist/native-modules/mdc-top-app-bar.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcTopAppBar": function() { return /* binding */ MdcTopAppBar; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_top_app_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/top-app-bar */ 8858);
/* harmony import */ var _material_top_app_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/top-app-bar */ 8382);
/* harmony import */ var _material_top_app_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/top-app-bar */ 3814);
/* harmony import */ var _material_top_app_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/top-app-bar */ 4222);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-typed-observable-plugin */ 5744);





var MdcTopAppBar = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(MdcTopAppBar, _super);
    function MdcTopAppBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollTarget = window;
        return _this;
    }
    MdcTopAppBar.prototype.scrollTargetChanged = function (newValue, oldValue) {
        // Remove scroll handler from the previous scroll target
        oldValue === null || oldValue === void 0 ? void 0 : oldValue.removeEventListener('scroll', this.handleTargetScroll_);
        // Initialize scroll handler on the new scroll target
        newValue === null || newValue === void 0 ? void 0 : newValue.addEventListener('scroll', this.handleTargetScroll_);
    };
    MdcTopAppBar.prototype.initialSyncWithDOM = function () {
        var _a, _b, _c;
        this.handleNavigationClick_ = (_a = this.foundation) === null || _a === void 0 ? void 0 : _a.handleNavigationClick.bind(this.foundation);
        this.handleWindowResize_ = (_b = this.foundation) === null || _b === void 0 ? void 0 : _b.handleWindowResize.bind(this.foundation);
        this.handleTargetScroll_ = (_c = this.foundation) === null || _c === void 0 ? void 0 : _c.handleTargetScroll.bind(this.foundation);
        this.hasActionItems = !!this.root.querySelector(_material_top_app_bar__WEBPACK_IMPORTED_MODULE_4__.strings.ACTION_ITEM_SELECTOR);
        this.scrollTargetChanged(this.scrollTarget, window);
        this.navIcon_ = this.root.querySelector(_material_top_app_bar__WEBPACK_IMPORTED_MODULE_4__.strings.NAVIGATION_ICON_SELECTOR);
        if (this.navIcon_) {
            this.navIcon_.addEventListener('click', this.handleNavigationClick_);
        }
        var isFixed = this.root.classList.contains(_material_top_app_bar__WEBPACK_IMPORTED_MODULE_4__.cssClasses.FIXED_CLASS);
        var isShort = this.root.classList.contains(_material_top_app_bar__WEBPACK_IMPORTED_MODULE_4__.cssClasses.SHORT_CLASS);
        if (!isShort && !isFixed) {
            window.addEventListener('resize', this.handleWindowResize_);
        }
    };
    MdcTopAppBar.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = {
            hasClass: function (className) { return _this.root.classList.contains(className); },
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            setStyle: function (property, value) { return _this.root.style.setProperty(property, value); },
            getTopAppBarHeight: function () { return _this.root.clientHeight; },
            notifyNavigationIconClicked: function () { return _this.emit(_material_top_app_bar__WEBPACK_IMPORTED_MODULE_4__.strings.NAVIGATION_EVENT, {}); },
            getViewportScrollY: function () {
                var win = _this.scrollTarget;
                var el = _this.scrollTarget;
                return win.pageYOffset !== undefined ? win.pageYOffset : el.scrollTop;
            },
            getTotalActionItems: function () { return _this.root.querySelectorAll(_material_top_app_bar__WEBPACK_IMPORTED_MODULE_4__.strings.ACTION_ITEM_SELECTOR).length; },
        };
        var foundation;
        if (this.root.classList.contains(_material_top_app_bar__WEBPACK_IMPORTED_MODULE_4__.cssClasses.SHORT_CLASS)) {
            foundation = new _material_top_app_bar__WEBPACK_IMPORTED_MODULE_5__.MDCShortTopAppBarFoundation(adapter);
        }
        else if (this.root.classList.contains(_material_top_app_bar__WEBPACK_IMPORTED_MODULE_4__.cssClasses.FIXED_CLASS)) {
            foundation = new _material_top_app_bar__WEBPACK_IMPORTED_MODULE_6__.MDCFixedTopAppBarFoundation(adapter);
        }
        else {
            foundation = new _material_top_app_bar__WEBPACK_IMPORTED_MODULE_7__.MDCTopAppBarFoundation(adapter);
        }
        return foundation;
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcTopAppBar.prototype, "short", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcTopAppBar.prototype, "collapsed", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcTopAppBar.prototype, "fixed", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcTopAppBar.prototype, "prominent", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable.booleanAttr,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Boolean)
    ], MdcTopAppBar.prototype, "dense", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        aurelia_typed_observable_plugin__WEBPACK_IMPORTED_MODULE_2__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", EventTarget)
    ], MdcTopAppBar.prototype, "scrollTarget", void 0);
    MdcTopAppBar = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.useView)('./mdc-top-app-bar.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.customElement)('mdc-top-app-bar')
    ], MdcTopAppBar);
    return MdcTopAppBar;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-top-app-bar.js.map

/***/ }),

/***/ "@aurelia-mdc-web/tree-view":
/*!******************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/tree-view/dist/native-modules/index.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcTreeView": function() { return /* reexport safe */ _mdc_tree_view__WEBPACK_IMPORTED_MODULE_1__.MdcTreeView; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_tree_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-tree-view */ "@aurelia-mdc-web/tree-view/mdc-tree-view");


function configure(config) {
    config.globalResources([
        './mdc-tree-view',
        './mdc-tree-node-meta'
    ]);
    config.aurelia.use.plugin('@aurelia-mdc-web/icon-button');
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/tree-view/mdc-tree-node-meta":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/tree-view/dist/native-modules/mdc-tree-node-meta.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcTreeViewNOdeMeta": function() { return /* binding */ MdcTreeViewNOdeMeta; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


var MdcTreeViewNOdeMeta = /** @class */ (function () {
    function MdcTreeViewNOdeMeta(root) {
        this.root = root;
    }
    MdcTreeViewNOdeMeta.prototype.attached = function () {
        this.root.classList.add('mdc-tree-node__meta');
    };
    MdcTreeViewNOdeMeta = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-tree-node-meta'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcTreeViewNOdeMeta);
    return MdcTreeViewNOdeMeta;
}());

//# sourceMappingURL=mdc-tree-node-meta.js.map

/***/ }),

/***/ "@aurelia-mdc-web/tree-view/mdc-tree-node":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/tree-view/dist/native-modules/mdc-tree-node.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeNode": function() { return /* binding */ TreeNode; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


var TreeNode = /** @class */ (function () {
    function TreeNode(element, container) {
        this.element = element;
        this.container = container;
        this.viewSlot = new aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.ViewSlot(this.element, true);
    }
    TreeNode.prototype.bind = function (bindingContext) {
        this.build();
        this.viewSlot.bind(bindingContext, this.rootBindingContext);
    };
    TreeNode.prototype.attached = function () {
        this.viewSlot.attached();
    };
    TreeNode.prototype.detached = function () {
        this.viewSlot.detached();
    };
    TreeNode.prototype.unbind = function () {
        this.viewSlot.unbind();
    };
    TreeNode.prototype.build = function () {
        if (this.built) {
            return;
        }
        this.built = true;
        if (!this.factory) {
            return;
        }
        this.view = this.factory.create(this.container);
        this.viewSlot.add(this.view);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.ViewFactory)
    ], TreeNode.prototype, "factory", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:type", Object)
    ], TreeNode.prototype, "rootBindingContext", void 0);
    TreeNode = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element, aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.Container),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customElement)('mdc-tree-node'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.noView)(),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [Element, aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.Container])
    ], TreeNode);
    return TreeNode;
}());

//# sourceMappingURL=mdc-tree-node.js.map

/***/ }),

/***/ "@aurelia-mdc-web/tree-view/mdc-tree-view":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/tree-view/dist/native-modules/mdc-tree-view.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCTreeViewFoundation": function() { return /* binding */ MDCTreeViewFoundation; },
/* harmony export */   "MdcTreeView": function() { return /* binding */ MdcTreeView; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-mdc-web/base */ "@aurelia-mdc-web/base");
/* harmony import */ var _material_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/base */ 6308);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");




var id = 0;
var templateLookup = {};
var getNextNodeTemplateId = function () { return ++id; };
var NODE_SELECTED_EVENT = 'mdctree:node-selected';
var MDCTreeViewFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MDCTreeViewFoundation, _super);
    function MDCTreeViewFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MDCTreeViewFoundation;
}(_material_base__WEBPACK_IMPORTED_MODULE_3__.MDCFoundation));

var MdcTreeView = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MdcTreeView, _super);
    function MdcTreeView(root, container) {
        var _this = _super.call(this, root) || this;
        /**
         * Allows for filtering tree nodes
         */
        _this.filter = function () { return true; };
        _this.nodeViewFactory = MdcTreeView_1.getNodeFactory(root, container);
        return _this;
    }
    MdcTreeView_1 = MdcTreeView;
    MdcTreeView.prototype.getDefaultFoundation = function () {
        return new MDCTreeViewFoundation();
    };
    MdcTreeView.processContent = function (_viewCompiler, _resources, element) {
        var treeNode = element.querySelector('mdc-tree-node');
        if (treeNode) {
            var nodeTemplateId = getNextNodeTemplateId();
            element.setAttribute('data-template-id', nodeTemplateId.toString());
            templateLookup[nodeTemplateId] = treeNode.innerHTML;
        }
        element.innerHTML = '';
        return false;
    };
    /**
     * @param element the host element of a <mdc-tree-view/>
     * @param container the container associated with a <mdc-tree-view/>
     */
    MdcTreeView.getNodeFactory = function (element, container) {
        var parent = container.parent ? container.parent.get(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.Optional.of(MdcTreeView_1)) : null;
        var isRoot = !parent;
        // a root mdc-tree view means a consumer defined one
        // this potentiall contains the template for the tree node
        if (isRoot) {
            var nodeTemplateId = element.getAttribute('data-template-id');
            if (nodeTemplateId && templateLookup[nodeTemplateId]) {
                var nodeTemplate = templateLookup[nodeTemplateId];
                var nodeViewFactory = container.get(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.ViewCompiler).compile("<template>".concat(nodeTemplate, "</template>"), container.get(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.ViewResources));
                return nodeViewFactory;
            }
            else {
                // create a default <mdc-tree-node/> factory
                // eslint-disable-next-line no-template-curly-in-string
                return container.get(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.ViewCompiler).compile('<template>${$node}</template>', container.get(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.ViewResources));
            }
        }
        else {
            // if it's not a root <mdc-tree-view/>
            // assume that the parent has already built the node factory and simply get it from there
            return parent.nodeViewFactory;
        }
    };
    MdcTreeView.prototype.bind = function (bindingContext) {
        var _a;
        this.rootBindingContext = (_a = this.rootBindingContext) !== null && _a !== void 0 ? _a : bindingContext;
    };
    MdcTreeView.prototype.toggleExpanded = function (n, e) {
        n.expanded = !n.expanded;
        e.stopPropagation();
        return false;
    };
    MdcTreeView.prototype.nodeClicked = function (n) {
        if (this.selectedNode) {
            this.selectedNode.selected = false;
        }
        if (n) {
            n.selected = true;
        }
        this.selectedNode = n;
        this.root.dispatchEvent(new CustomEvent(NODE_SELECTED_EVENT, { detail: { node: n }, bubbles: true }));
        return true;
    };
    MdcTreeView.prototype.childNodeSelected = function (n) {
        if (this.selectedNode && this.selectedNode !== n) {
            this.selectedNode.selected = false;
        }
        this.selectedNode = n;
    };
    MdcTreeView.prototype.findPath = function (nodes, predicate) {
        var _this = this;
        var path = [];
        for (var i = 0; i < nodes.length; ++i) {
            if (predicate(nodes[i])) {
                return [i];
            }
            if (!nodes[i].children) {
                continue;
            }
            var filteredChildren = nodes[i].children.filter(function (x) { return _this.filter(x); });
            var childPath = this.findPath(filteredChildren, predicate);
            if (childPath.length) {
                return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([i], (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(childPath), false);
            }
        }
        return path;
    };
    MdcTreeView.prototype.expandPath = function (path) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var filteredNodes, childTreeView;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filteredNodes = this.nodes.filter(function (x) { return _this.filter(x); });
                        if (!(path.length === 1)) return [3 /*break*/, 1];
                        this.nodeClicked(filteredNodes[path[0]]);
                        this.root.querySelectorAll('.mdc-tree-view__node')[path[0]].scrollIntoView();
                        return [3 /*break*/, 5];
                    case 1:
                        filteredNodes[path[0]].expanded = true;
                        // child tree views are hidden with 'if.bind'
                        // promises are created by a helper element `mdc-promisify-reference`
                        // this lets dependent code to wait till a view model reference is assigned
                        return [4 /*yield*/, this.initialised];
                    case 2:
                        // child tree views are hidden with 'if.bind'
                        // promises are created by a helper element `mdc-promisify-reference`
                        // this lets dependent code to wait till a view model reference is assigned
                        _a.sent();
                        return [4 /*yield*/, (filteredNodes[path[0]].childTreeViewPromise)];
                    case 3:
                        childTreeView = _a.sent();
                        return [4 /*yield*/, (childTreeView === null || childTreeView === void 0 ? void 0 : childTreeView.expandPath(path.slice(1)))];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MdcTreeView.prototype.find = function (predicate) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var filteredNodes, path;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filteredNodes = this.nodes.filter(function (x) { return _this.filter(x); });
                        path = this.findPath(filteredNodes, predicate);
                        if (!path.length) return [3 /*break*/, 2];
                        // secondly, expand the path
                        return [4 /*yield*/, this.expandPath(path)];
                    case 1:
                        // secondly, expand the path
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MdcTreeView.prototype.dispatchEvent = function (type, node) {
        this.root.dispatchEvent(new CustomEvent(type, { bubbles: true, detail: { node: node } }));
    };
    var MdcTreeView_1;
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Array)
    ], MdcTreeView.prototype, "nodes", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Function)
    ], MdcTreeView.prototype, "filter", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.bindable,
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)
    ], MdcTreeView.prototype, "rootBindingContext", void 0);
    MdcTreeView = MdcTreeView_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.inject)(Element, aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.Container),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.customElement)('mdc-tree-view'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.useView)('./mdc-tree-view.html'),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.processContent)(MdcTreeView_1.processContent),
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [HTMLElement, aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.Container])
    ], MdcTreeView);
    return MdcTreeView;
}(_aurelia_mdc_web_base__WEBPACK_IMPORTED_MODULE_0__.MdcComponent));

//# sourceMappingURL=mdc-tree-view.js.map

/***/ }),

/***/ "@aurelia-mdc-web/tree-view/node-filter":
/*!************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/tree-view/dist/native-modules/node-filter.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeFilterValueConverter": function() { return /* binding */ NodeFilterValueConverter; }
/* harmony export */ });
var NodeFilterValueConverter = /** @class */ (function () {
    function NodeFilterValueConverter() {
    }
    NodeFilterValueConverter.prototype.toView = function (nodes, filter) {
        if (!filter) {
            return nodes;
        }
        return nodes === null || nodes === void 0 ? void 0 : nodes.filter(function (x) { return filter(x); });
    };
    return NodeFilterValueConverter;
}());

//# sourceMappingURL=node-filter.js.map

/***/ }),

/***/ "@aurelia-mdc-web/typography":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/typography/dist/native-modules/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");

function configure(config) {
    config.globalResources([
        './mdc-typography'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-mdc-web/typography/mdc-typography":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/typography/dist/native-modules/mdc-typography.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcBody1": function() { return /* binding */ MdcBody1; },
/* harmony export */   "MdcBody2": function() { return /* binding */ MdcBody2; },
/* harmony export */   "MdcCaption": function() { return /* binding */ MdcCaption; },
/* harmony export */   "MdcHeadline1": function() { return /* binding */ MdcHeadline1; },
/* harmony export */   "MdcHeadline2": function() { return /* binding */ MdcHeadline2; },
/* harmony export */   "MdcHeadline3": function() { return /* binding */ MdcHeadline3; },
/* harmony export */   "MdcHeadline4": function() { return /* binding */ MdcHeadline4; },
/* harmony export */   "MdcHeadline5": function() { return /* binding */ MdcHeadline5; },
/* harmony export */   "MdcHeadline6": function() { return /* binding */ MdcHeadline6; },
/* harmony export */   "MdcOveline": function() { return /* binding */ MdcOveline; },
/* harmony export */   "MdcSubtitle1": function() { return /* binding */ MdcSubtitle1; },
/* harmony export */   "MdcSubtitle2": function() { return /* binding */ MdcSubtitle2; },
/* harmony export */   "MdcTypographyButton": function() { return /* binding */ MdcTypographyButton; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");


var MdcTypography = /** @class */ (function () {
    function MdcTypography(root) {
        this.root = root;
    }
    MdcTypography.prototype.attached = function () {
        this.root.classList.add(this.type ? "mdc-typography--".concat(this.type) : 'mdc-typography');
    };
    return MdcTypography;
}());
var MdcHeadline1 = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MdcHeadline1, _super);
    function MdcHeadline1(root) {
        var _this = _super.call(this, root) || this;
        _this.type = 'headline1';
        return _this;
    }
    MdcHeadline1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-headline1'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcHeadline1);
    return MdcHeadline1;
}(MdcTypography));

var MdcHeadline2 = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MdcHeadline2, _super);
    function MdcHeadline2(root) {
        var _this = _super.call(this, root) || this;
        _this.type = 'headline2';
        return _this;
    }
    MdcHeadline2 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-headline2'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcHeadline2);
    return MdcHeadline2;
}(MdcTypography));

var MdcHeadline3 = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MdcHeadline3, _super);
    function MdcHeadline3(root) {
        var _this = _super.call(this, root) || this;
        _this.type = 'headline3';
        return _this;
    }
    MdcHeadline3 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-headline3'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcHeadline3);
    return MdcHeadline3;
}(MdcTypography));

var MdcHeadline4 = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MdcHeadline4, _super);
    function MdcHeadline4(root) {
        var _this = _super.call(this, root) || this;
        _this.type = 'headline4';
        return _this;
    }
    MdcHeadline4 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-headline4'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcHeadline4);
    return MdcHeadline4;
}(MdcTypography));

var MdcHeadline5 = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MdcHeadline5, _super);
    function MdcHeadline5(root) {
        var _this = _super.call(this, root) || this;
        _this.type = 'headline5';
        return _this;
    }
    MdcHeadline5 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-headline5'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcHeadline5);
    return MdcHeadline5;
}(MdcTypography));

var MdcHeadline6 = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MdcHeadline6, _super);
    function MdcHeadline6(root) {
        var _this = _super.call(this, root) || this;
        _this.type = 'headline6';
        return _this;
    }
    MdcHeadline6 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-headline6'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcHeadline6);
    return MdcHeadline6;
}(MdcTypography));

var MdcSubtitle1 = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MdcSubtitle1, _super);
    function MdcSubtitle1(root) {
        var _this = _super.call(this, root) || this;
        _this.type = 'subtitle1';
        return _this;
    }
    MdcSubtitle1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-subtitle1'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcSubtitle1);
    return MdcSubtitle1;
}(MdcTypography));

var MdcSubtitle2 = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MdcSubtitle2, _super);
    function MdcSubtitle2(root) {
        var _this = _super.call(this, root) || this;
        _this.type = 'subtitle2';
        return _this;
    }
    MdcSubtitle2 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-subtitle2'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcSubtitle2);
    return MdcSubtitle2;
}(MdcTypography));

var MdcBody1 = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MdcBody1, _super);
    function MdcBody1(root) {
        var _this = _super.call(this, root) || this;
        _this.type = 'body1';
        return _this;
    }
    MdcBody1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-body1'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcBody1);
    return MdcBody1;
}(MdcTypography));

var MdcBody2 = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MdcBody2, _super);
    function MdcBody2(root) {
        var _this = _super.call(this, root) || this;
        _this.type = 'body2';
        return _this;
    }
    MdcBody2 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-body2'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcBody2);
    return MdcBody2;
}(MdcTypography));

var MdcCaption = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MdcCaption, _super);
    function MdcCaption(root) {
        var _this = _super.call(this, root) || this;
        _this.type = 'caption';
        return _this;
    }
    MdcCaption = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-caption'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcCaption);
    return MdcCaption;
}(MdcTypography));

var MdcTypographyButton = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MdcTypographyButton, _super);
    function MdcTypographyButton(root) {
        var _this = _super.call(this, root) || this;
        _this.type = 'button';
        return _this;
    }
    MdcTypographyButton = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-typography-button'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcTypographyButton);
    return MdcTypographyButton;
}(MdcTypography));

var MdcOveline = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MdcOveline, _super);
    function MdcOveline(root) {
        var _this = _super.call(this, root) || this;
        _this.type = 'overline';
        return _this;
    }
    MdcOveline = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('mdc-overline'),
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [HTMLElement])
    ], MdcOveline);
    return MdcOveline;
}(MdcTypography));

//# sourceMappingURL=mdc-typography.js.map

/***/ }),

/***/ "@aurelia-mdc-web/validation":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/validation/dist/native-modules/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcValidationControllerFactory": function() { return /* reexport safe */ _mdc_validation_controller_factory__WEBPACK_IMPORTED_MODULE_1__.MdcValidationControllerFactory; },
/* harmony export */   "MdcValidationRenderer": function() { return /* reexport safe */ _mdc_validation_renderer__WEBPACK_IMPORTED_MODULE_2__.MdcValidationRenderer; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-validation */ "aurelia-validation");
/* harmony import */ var _mdc_validation_controller_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-validation-controller-factory */ 7722);
/* harmony import */ var _mdc_validation_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdc-validation-renderer */ 9899);




function configure() {
    // replace default static get with ours
    aurelia_validation__WEBPACK_IMPORTED_MODULE_0__.ValidationControllerFactory.get = _mdc_validation_controller_factory__WEBPACK_IMPORTED_MODULE_1__.MdcValidationControllerFactory.get;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7722:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/validation/dist/native-modules/mdc-validation-controller-factory.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcValidationControllerFactory": function() { return /* binding */ MdcValidationControllerFactory; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var aurelia_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-validation */ "aurelia-validation");
/* harmony import */ var _mdc_validation_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-validation-renderer */ 9899);



var MdcValidationControllerFactory = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MdcValidationControllerFactory, _super);
    function MdcValidationControllerFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdcValidationControllerFactory.get = function (container) {
        return new MdcValidationControllerFactory(container);
    };
    MdcValidationControllerFactory.prototype.createForCurrentScope = function (validator) {
        var controller = _super.prototype.createForCurrentScope.call(this, validator);
        controller.addRenderer(new _mdc_validation_renderer__WEBPACK_IMPORTED_MODULE_1__.MdcValidationRenderer());
        // controller.validateTrigger = validateTrigger.changeOrBlur;
        return controller;
    };
    // this tells DI to call static get method to resolve dependency
    MdcValidationControllerFactory['protocol:aurelia:resolver'] = true;
    return MdcValidationControllerFactory;
}(aurelia_validation__WEBPACK_IMPORTED_MODULE_0__.ValidationControllerFactory));

//# sourceMappingURL=mdc-validation-controller-factory.js.map

/***/ }),

/***/ 9899:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/validation/dist/native-modules/mdc-validation-renderer.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MdcValidationRenderer": function() { return /* binding */ MdcValidationRenderer; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 655);

var MdcValidationRenderer = /** @class */ (function () {
    function MdcValidationRenderer() {
    }
    MdcValidationRenderer.prototype.render = function (instruction) {
        var e_1, _a;
        var elements = new Map();
        for (var i = 0; i < instruction.unrender.length; ++i) {
            var ri = instruction.unrender[i];
            for (var j = 0; j < ri.elements.length; ++j) {
                var el = ri.elements[j];
                if (!ri.result.valid && Object.getOwnPropertyDescriptor(el, 'removeError')) {
                    el.removeError(ri.result);
                    elements.set(el, true);
                }
            }
        }
        for (var i = 0; i < instruction.render.length; ++i) {
            var ri = instruction.render[i];
            for (var j = 0; j < ri.elements.length; ++j) {
                var el = ri.elements[j];
                if (!ri.result.valid && Object.getOwnPropertyDescriptor(el, 'addError')) {
                    el.addError(ri.result);
                    elements.set(el, true);
                }
            }
        }
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(elements.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                if (Object.getOwnPropertyDescriptor(el, 'renderErrors')) {
                    el.renderErrors();
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
    return MdcValidationRenderer;
}());

//# sourceMappingURL=mdc-validation-renderer.js.map

/***/ }),

/***/ 1383:
/*!*******************************************************************************!*\
  !*** ./node_modules/aurelia-metadata/dist/native-modules/aurelia-metadata.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Origin": function() { return /* binding */ Origin; },
/* harmony export */   "decorators": function() { return /* binding */ decorators; },
/* harmony export */   "deprecated": function() { return /* binding */ deprecated; },
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "mixin": function() { return /* binding */ mixin; },
/* harmony export */   "protocol": function() { return /* binding */ protocol; }
/* harmony export */ });
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ 1015);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





function isObject(val) {
  return val && (typeof val === 'function' || (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object');
}

var metadata = {
  resource: 'aurelia:resource',
  paramTypes: 'design:paramtypes',
  propertyType: 'design:type',
  properties: 'design:properties',
  get: function get(metadataKey, target, targetKey) {
    if (!isObject(target)) {
      return undefined;
    }
    var result = metadata.getOwn(metadataKey, target, targetKey);
    return result === undefined ? metadata.get(metadataKey, Object.getPrototypeOf(target), targetKey) : result;
  },
  getOwn: function getOwn(metadataKey, target, targetKey) {
    if (!isObject(target)) {
      return undefined;
    }
    return Reflect.getOwnMetadata(metadataKey, target, targetKey);
  },
  define: function define(metadataKey, metadataValue, target, targetKey) {
    Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
  },
  getOrCreateOwn: function getOrCreateOwn(metadataKey, Type, target, targetKey) {
    var result = metadata.getOwn(metadataKey, target, targetKey);

    if (result === undefined) {
      result = new Type();
      Reflect.defineMetadata(metadataKey, result, target, targetKey);
    }

    return result;
  }
};

var originStorage = new Map();
var unknownOrigin = Object.freeze({ moduleId: undefined, moduleMember: undefined });

var Origin = function () {
  function Origin(moduleId, moduleMember) {
    

    this.moduleId = moduleId;
    this.moduleMember = moduleMember;
  }

  Origin.get = function get(fn) {
    var origin = originStorage.get(fn);

    if (origin === undefined) {
      aurelia_pal__WEBPACK_IMPORTED_MODULE_0__.PLATFORM.eachModule(function (key, value) {
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
          for (var name in value) {
            try {
              var exp = value[name];
              if (exp === fn) {
                originStorage.set(fn, origin = new Origin(key, name));
                return true;
              }
            } catch (e) {}
          }
        }

        if (value === fn) {
          originStorage.set(fn, origin = new Origin(key, 'default'));
          return true;
        }

        return false;
      });
    }

    return origin || unknownOrigin;
  };

  Origin.set = function set(fn, origin) {
    originStorage.set(fn, origin);
  };

  return Origin;
}();

function decorators() {
  for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }

  var applicator = function applicator(target, key, descriptor) {
    var i = rest.length;

    if (key) {
      descriptor = descriptor || {
        value: target[key],
        writable: true,
        configurable: true,
        enumerable: true
      };

      while (i--) {
        descriptor = rest[i](target, key, descriptor) || descriptor;
      }

      Object.defineProperty(target, key, descriptor);
    } else {
      while (i--) {
        target = rest[i](target) || target;
      }
    }

    return target;
  };

  applicator.on = applicator;
  return applicator;
}

function deprecated(optionsOrTarget, maybeKey, maybeDescriptor) {
  function decorator(target, key, descriptor) {
    var methodSignature = target.constructor.name + '#' + key;
    var options = maybeKey ? {} : optionsOrTarget || {};
    var message = 'DEPRECATION - ' + methodSignature;

    if (typeof descriptor.value !== 'function') {
      throw new SyntaxError('Only methods can be marked as deprecated.');
    }

    if (options.message) {
      message += ' - ' + options.message;
    }

    return _extends({}, descriptor, {
      value: function deprecationWrapper() {
        if (options.error) {
          throw new Error(message);
        } else {
          console.warn(message);
        }

        return descriptor.value.apply(this, arguments);
      }
    });
  }

  return maybeKey ? decorator(optionsOrTarget, maybeKey, maybeDescriptor) : decorator;
}

function mixin(behavior) {
  var instanceKeys = Object.keys(behavior);

  function _mixin(possible) {
    var decorator = function decorator(target) {
      var resolvedTarget = typeof target === 'function' ? target.prototype : target;

      var i = instanceKeys.length;
      while (i--) {
        var property = instanceKeys[i];
        Object.defineProperty(resolvedTarget, property, {
          value: behavior[property],
          writable: true
        });
      }
    };

    return possible ? decorator(possible) : decorator;
  }

  return _mixin;
}

function alwaysValid() {
  return true;
}
function noCompose() {}

function ensureProtocolOptions(options) {
  if (options === undefined) {
    options = {};
  } else if (typeof options === 'function') {
    options = {
      validate: options
    };
  }

  if (!options.validate) {
    options.validate = alwaysValid;
  }

  if (!options.compose) {
    options.compose = noCompose;
  }

  return options;
}

function createProtocolValidator(validate) {
  return function (target) {
    var result = validate(target);
    return result === true;
  };
}

function createProtocolAsserter(name, validate) {
  return function (target) {
    var result = validate(target);
    if (result !== true) {
      throw new Error(result || name + ' was not correctly implemented.');
    }
  };
}

function protocol(name, options) {
  options = ensureProtocolOptions(options);

  var result = function result(target) {
    var resolvedTarget = typeof target === 'function' ? target.prototype : target;

    options.compose(resolvedTarget);
    result.assert(resolvedTarget);

    Object.defineProperty(resolvedTarget, 'protocol:' + name, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: true
    });
  };

  result.validate = createProtocolValidator(options.validate);
  result.assert = createProtocolAsserter(name, options.validate);

  return result;
}

protocol.create = function (name, options) {
  options = ensureProtocolOptions(options);
  var hidden = 'protocol:' + name;
  var result = function result(target) {
    var decorator = protocol(name, options);
    return target ? decorator(target) : decorator;
  };

  result.decorates = function (obj) {
    return obj[hidden] === true;
  };
  result.validate = createProtocolValidator(options.validate);
  result.assert = createProtocolAsserter(name, options.validate);

  return result;
};

/***/ }),

/***/ "@aurelia-mdc-web/tab-bar/indicator/mdc-tab-indicator.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/tab-bar/dist/native-modules/indicator/mdc-tab-indicator.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"\n    mdc-tab-indicator\n    ${fade ? 'mdc-tab-indicator--fade' : ''}\n    ${active ? 'mdc-tab-indicator--active' : ''}\n  \">\n  <span class=\"mdc-tab-indicator__content mdc-tab-indicator__content--${icon ? 'icon' : 'underline'} ${icon ? 'material-icons' : ''}\"\n    aria-hidden=\"true\" ref=\"content_\">${icon}</span>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/tab-bar/mdc-tab-bar.html":
/*!************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/tab-bar/dist/native-modules/mdc-tab-bar.html ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-tab-bar\" role=\"tablist\" keydown.trigger=\"handleKeyDown_($event)\" mdctab:interacted.trigger=\"handleTabInteraction_($event)\">\n  <div as-element=\"mdc-tab-scroller\" view-model.ref=\"tabScroller_\" align.bind=\"align\">\n    <slot></slot>\n  </div>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/tab-bar/scroller/mdc-tab-scroller.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/tab-bar/dist/native-modules/scroller/mdc-tab-scroller.html ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-tab-scroller\n  ${align ? 'mdc-tab-scroller--align-' + align : ''}\n  \" wheel.trigger=\"handleInteraction_()\" touchstart.trigger=\"handleInteraction_()\"\n  pointerdown.trigger=\"handleInteraction_()\" mousedown.trigger=\"handleInteraction_()\"\n  keydown.trigger=\"handleInteraction_()\" transitionend.trigger=\"handleTransitionEnd_($event)\">\n  <div class=\" mdc-tab-scroller__scroll-area\" ref=\"area_\">\n    <div class=\"mdc-tab-scroller__scroll-content\" ref=\"content_\">\n      <slot></slot>\n    </div>\n  </div>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/tab-bar/tab/mdc-tab.html":
/*!************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/tab-bar/dist/native-modules/tab/mdc-tab.html ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"\n    mdc-tab\n    ${active ? 'mdc-tab--active' : ''}\n    ${minWidth ? 'mdc-tab--min-width' : ''}\n    ${stacked ? 'mdc-tab--stacked' : ''}\n  \" role=\"tab\" aria-selected=\"false\" tabindex=\"-1\" mdc-ripple=\"no-class.bind: true\" click.trigger=\"handleClick_()\">\n  <span class=\"mdc-tab__content\" ref=\"content_\">\n    <span class=\"mdc-tab__icon material-icons\" aria-hidden=\"true\" if.bind=\"icon\">${icon}</span>\n    <span class=\"mdc-tab__text-label\" if.bind=\"label\">${label}</span>\n    <slot></slot>\n    <mdc-tab-indicator if.bind=\"fixed\" active.bind=\"active\" fade.bind=\"fade\" view-model.ref=\"tabIndicator_\"\n      icon.bind=\"indicatorIcon\">\n    </mdc-tab-indicator>\n  </span>\n  <mdc-tab-indicator if.bind=\"!fixed\" active.bind=\"active\" fade.bind=\"fade\" view-model.ref=\"tabIndicator_\"\n    icon.bind=\"indicatorIcon\">\n  </mdc-tab-indicator>\n  <span class=\"mdc-tab__ripple\" ref=\"rippleSurface\"></span>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/text-field/mdc-text-field-helper-line/mdc-text-field-helper-line.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/text-field/dist/native-modules/mdc-text-field-helper-line/mdc-text-field-helper-line.html ***!
  \*********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-text-field-helper-line ${errors.length ? 'mdc-text-field-helper-line--with-errors' : ''}\">\n  <slot></slot>\n  <mdc-text-field-helper-text if.bind=\"errors.length\" validation class=\"mdc-text-field-helper-text--errors\">\n    <span class=\"mdc-text-field-helper-text__error\" repeat.for=\"e of errors\">${e}<br/></span>\n  </mdc-text-field-helper-text>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/text-field/mdc-text-field-helper-text/mdc-text-field-helper-text.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/text-field/dist/native-modules/mdc-text-field-helper-text/mdc-text-field-helper-text.html ***!
  \*********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<!-- DO NOT FORMAT THIS FILE! ANY SPACE BEFORE <SLOT> BREAKS HELPER TEXT ALIGNMENT! -->\n<template class=\"\n    ${helperTextCssClasses.ROOT} ${persistent ? helperTextCssClasses.ROOT + '--persistent' : ''}\n    ${validation ? helperTextCssClasses.ROOT + '--validation-msg' : ''}\"><slot></slot></template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/text-field/mdc-text-field.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/text-field/dist/native-modules/mdc-text-field.html ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"\n    mdc-text-field\n    ${textarea ? 'mdc-text-field--textarea' : ''}\n    ${endAligned ? 'mdc-text-field--end-aligned' : ''}\n    ${ltrText ? 'mdc-text-field--ltr-text' : ''}\n    ${label ? '' : 'mdc-text-field--no-label'}\n    mdc-text-field--${outlined ? 'outlined' : 'filled'}\n    ${leadingIcon_ ? 'mdc-text-field--with-leading-icon' : ''}\n    ${trailingIcon_ ? 'mdc-text-field--with-trailing-icon' : ''}\n  \" mdc-ripple=\"no-class.bind: true; input.bind: input_\">\n  <span class=\"mdc-text-field__ripple\"></span>\n  <slot name=\"leading-icon\"></slot>\n  <span class=\"mdc-text-field__affix mdc-text-field__affix--prefix\" if.bind=\"prefix && !textarea\">${prefix}</span>\n  <mdc-notched-outline if.bind=\"outlined\" view-model.ref=\"outline_\">\n    <mdc-floating-label if.bind=\"label\" id=\"${id}\" view-model.ref=\"label_\">${label}</mdc-floating-label>\n  </mdc-notched-outline>\n  <input if.bind=\"!textarea\" class=\"mdc-text-field__input\" type=\"text\" aria-labelledby.bind=\"id\" ref=\"input_\"\n    focus.trigger=\"onFocus()\" input.trigger=\"onInput($event)\" change.trigger=\"onChange($event)\" blur.trigger=\"onBlur()\"\n    placeholder.bind=\"placeholder\" keyup.trigger=\"onKeyup($event)\">\n  <span if.bind=\"textarea\" class=\"mdc-text-field__resizer\">\n    <textarea class=\"mdc-text-field__input\" aria-labelledby.bind=\"id\" ref=\"input_\"\n      focus.trigger=\"onFocus()\" input.trigger=\"onInput($event)\" change.trigger=\"onChange($event)\"\n      blur.trigger=\"onBlur()\" keyup.trigger=\"onKeyup($event)\"></textarea>\n  </span>\n  <span class=\"mdc-text-field__affix mdc-text-field__affix--suffix\" if.bind=\"suffix && !textarea\">${suffix}</span>\n  <slot name=\"trailing-icon\"></slot>\n  <mdc-floating-label if.bind=\"label && !outlined\" id=\"${id}\" view-model.ref=\"label_\">${label}</mdc-floating-label>\n  <mdc-line-ripple if.bind=\"!outlined\" view-model.ref=\"lineRipple_\"></mdc-line-ripple>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/tooltip/mdc-tooltip.html":
/*!************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/tooltip/dist/native-modules/mdc-tooltip.html ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-tooltip\n  ${rich ? 'mdc-tooltip--rich' : ''}\n\" role=\"tooltip\" aria-hidden=\"true\" transitionend.trigger=\"handleTransitionEnd()\">\n  <div class=\"mdc-tooltip__surface mdc-tooltip__surface-animation\">\n    <slot></slot>\n  </div>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/top-app-bar/mdc-top-app-bar-section/mdc-top-app-bar-section.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/top-app-bar/dist/native-modules/mdc-top-app-bar-section/mdc-top-app-bar-section.html ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-top-app-bar__section mdc-top-app-bar__section--align-${end ? 'end' : 'start'}\" role=\"toolbar\">\n  <slot></slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/top-app-bar/mdc-top-app-bar.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/top-app-bar/dist/native-modules/mdc-top-app-bar.html ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-top-app-bar\n  ${short ? 'mdc-top-app-bar--short' : ''}\n  ${short && collapsed ? 'mdc-top-app-bar--short-collapsed' : ''}\n  ${fixed ? 'mdc-top-app-bar--fixed' : ''}\n  ${prominent ? 'mdc-top-app-bar--prominent' : ''}\n  ${dense ? 'mdc-top-app-bar--dense' : ''}\n  ${hasActionItems ? 'mdc-top-app-bar--short-has-action-item' : ''}\">\n  <slot></slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "@aurelia-mdc-web/tree-view/mdc-tree-view.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aurelia-mdc-web/tree-view/dist/native-modules/mdc-tree-view.html ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template class=\"mdc-tree-view\">\n  <require from=\"./mdc-tree-node\"></require>\n  <require from=\"./node-filter\"></require>\n  <ul class=\"mdc-tree-view__list\">\n    <li repeat.for=\"$node of nodes | nodeFilter:filter\" class=\"mdc-tree-view__list-item\">\n      <let $tree.bind=\"element\"></let>\n      <let $tree-vm.bind=\"$parent\"></let>\n      <div class=\"mdc-tree-view__node ${$node.selected ? 'mdc-tree-view__node--selected' : ''}\"\n        click.trigger=\"nodeClicked($node)\" mdc-ripple=\"no-class.bind: true;\">\n        <div class=\"mdc-tree-view__node__ripple\"></div>\n        <let filtered-children.bind=\"$node.children | nodeFilter:filter\"></let>\n        <button mdc-icon-button if.bind=\"filteredChildren.length\" type=\"fab\" size=\"small\" class=\"mdc-tree-view__expander\"\n          on.bind=\"$node.expanded\">\n          <mdc-icon-button-icon class=\"material-icons\">chevron_right</mdc-icon-button-icon>\n          <mdc-icon-button-icon class=\"material-icons\" on>expand_more</mdc-icon-button-icon>\n        </button>\n        <div else class=\"mdc-tree-view__leaf-padding\"></div>\n        <mdc-tree-node class=\"mdc-tree-node\" factory.bind=\"nodeViewFactory\"\n          root-binding-context.bind=\"rootBindingContext\"></mdc-tree-node>\n      </div>\n      <mdc-promisify-reference if.bind=\"$node.children\" promise.from-view=\"$node.childTreeViewPromise\"\n        reference.to-view=\"treeView\">\n      </mdc-promisify-reference>\n      <mdc-tree-view if.bind=\"filteredChildren.length && $node.expanded\" nodes.bind=\"filteredChildren\"\n        root-binding-context.bind=\"rootBindingContext\" view-model.ref=\"treeView\" filter.bind=\"filter\"\n        mdctree:node-selected.trigger=\"childNodeSelected($event.detail.node)\">\n      </mdc-tree-view>\n    </li>\n  </ul>\n  <slot></slot>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ })

}]);
//# sourceMappingURL=vendors-e336a3cc.f77665d3faa0d235c766.bundle.js.map