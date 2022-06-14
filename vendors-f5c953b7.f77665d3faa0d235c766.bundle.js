"use strict";
(self["webpackChunkweb_client"] = self["webpackChunkweb_client"] || []).push([["vendors-f5c953b7"],{

/***/ 2195:
/*!************************************************************!*\
  !*** ./node_modules/@material/animation/animationframe.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationFrame": function() { return /* binding */ AnimationFrame; }
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
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
/**
 * AnimationFrame provides a user-friendly abstraction around requesting
 * and canceling animation frames.
 */
var AnimationFrame = /** @class */ (function () {
    function AnimationFrame() {
        this.rafIDs = new Map();
    }
    /**
     * Requests an animation frame. Cancels any existing frame with the same key.
     * @param {string} key The key for this callback.
     * @param {FrameRequestCallback} callback The callback to be executed.
     */
    AnimationFrame.prototype.request = function (key, callback) {
        var _this = this;
        this.cancel(key);
        var frameID = requestAnimationFrame(function (frame) {
            _this.rafIDs.delete(key);
            // Callback must come *after* the key is deleted so that nested calls to
            // request with the same key are not deleted.
            callback(frame);
        });
        this.rafIDs.set(key, frameID);
    };
    /**
     * Cancels a queued callback with the given key.
     * @param {string} key The key for this callback.
     */
    AnimationFrame.prototype.cancel = function (key) {
        var rafID = this.rafIDs.get(key);
        if (rafID) {
            cancelAnimationFrame(rafID);
            this.rafIDs.delete(key);
        }
    };
    /**
     * Cancels all queued callback.
     */
    AnimationFrame.prototype.cancelAll = function () {
        var _this = this;
        // Need to use forEach because it's the only iteration method supported
        // by IE11. Suppress the underscore because we don't need it.
        // tslint:disable-next-line:enforce-name-casing
        this.rafIDs.forEach(function (_, key) {
            _this.cancel(key);
        });
    };
    /**
     * Returns the queue of unexecuted callback keys.
     */
    AnimationFrame.prototype.getQueue = function () {
        var queue = [];
        // Need to use forEach because it's the only iteration method supported
        // by IE11. Suppress the underscore because we don't need it.
        // tslint:disable-next-line:enforce-name-casing
        this.rafIDs.forEach(function (_, key) {
            queue.push(key);
        });
        return queue;
    };
    return AnimationFrame;
}());

//# sourceMappingURL=animationframe.js.map

/***/ }),

/***/ 5475:
/*!**************************************************!*\
  !*** ./node_modules/@material/animation/util.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCorrectEventName": function() { return /* binding */ getCorrectEventName; },
/* harmony export */   "getCorrectPropertyName": function() { return /* binding */ getCorrectPropertyName; }
/* harmony export */ });
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
var cssPropertyNameMap = {
    animation: {
        prefixed: '-webkit-animation',
        standard: 'animation',
    },
    transform: {
        prefixed: '-webkit-transform',
        standard: 'transform',
    },
    transition: {
        prefixed: '-webkit-transition',
        standard: 'transition',
    },
};
var jsEventTypeMap = {
    animationend: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationEnd',
        standard: 'animationend',
    },
    animationiteration: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationIteration',
        standard: 'animationiteration',
    },
    animationstart: {
        cssProperty: 'animation',
        prefixed: 'webkitAnimationStart',
        standard: 'animationstart',
    },
    transitionend: {
        cssProperty: 'transition',
        prefixed: 'webkitTransitionEnd',
        standard: 'transitionend',
    },
};
function isWindow(windowObj) {
    return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
}
function getCorrectPropertyName(windowObj, cssProperty) {
    if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
        var el = windowObj.document.createElement('div');
        var _a = cssPropertyNameMap[cssProperty], standard = _a.standard, prefixed = _a.prefixed;
        var isStandard = standard in el.style;
        return isStandard ? standard : prefixed;
    }
    return cssProperty;
}
function getCorrectEventName(windowObj, eventType) {
    if (isWindow(windowObj) && eventType in jsEventTypeMap) {
        var el = windowObj.document.createElement('div');
        var _a = jsEventTypeMap[eventType], standard = _a.standard, prefixed = _a.prefixed, cssProperty = _a.cssProperty;
        var isStandard = cssProperty in el.style;
        return isStandard ? standard : prefixed;
    }
    return eventType;
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 1996:
/*!****************************************************!*\
  !*** ./node_modules/@material/banner/constants.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": function() { return /* binding */ Action; },
/* harmony export */   "CloseReason": function() { return /* binding */ CloseReason; },
/* harmony export */   "cssClasses": function() { return /* binding */ cssClasses; },
/* harmony export */   "events": function() { return /* binding */ events; },
/* harmony export */   "numbers": function() { return /* binding */ numbers; },
/* harmony export */   "selectors": function() { return /* binding */ selectors; }
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
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
/** Banner element classes. */
var cssClasses = {
    CLOSING: 'mdc-banner--closing',
    OPEN: 'mdc-banner--open',
    OPENING: 'mdc-banner--opening',
};
/** Banner numbers. */
var numbers = {
    BANNER_ANIMATION_CLOSE_TIME_MS: 250,
    BANNER_ANIMATION_OPEN_TIME_MS: 300,
};
/** Banner events. */
var events = {
    CLOSED: 'MDCBanner:closed',
    CLOSING: 'MDCBanner:closing',
    OPENED: 'MDCBanner:opened',
    OPENING: 'MDCBanner:opening',
    ACTION_CLICKED: 'MDCBanner:actionClicked',
};
/** Banner selectors. */
var selectors = {
    CONTENT: '.mdc-banner__content',
    PRIMARY_ACTION: '.mdc-banner__primary-action',
    SECONDARY_ACTION: '.mdc-banner__secondary-action',
    TEXT: '.mdc-banner__text',
};
/** Reason as to why the banner was closed. */
var CloseReason;
(function (CloseReason) {
    // Indicates the banner was closed via primary action button.
    CloseReason[CloseReason["PRIMARY"] = 0] = "PRIMARY";
    // Indicates the banner was closed via secondary action button.
    CloseReason[CloseReason["SECONDARY"] = 1] = "SECONDARY";
    // Will never be used by the component. Provided for custom handling of
    // programmatic closing of the banner.
    CloseReason[CloseReason["UNSPECIFIED"] = 2] = "UNSPECIFIED";
})(CloseReason || (CloseReason = {}));
/**
 * Payload of actionClicked events to signify which action emitted the event.
 */
var Action;
(function (Action) {
    Action[Action["PRIMARY"] = 0] = "PRIMARY";
    Action[Action["SECONDARY"] = 1] = "SECONDARY";
    Action[Action["UNKNOWN"] = 2] = "UNKNOWN";
})(Action || (Action = {}));
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 4789:
/*!*****************************************************!*\
  !*** ./node_modules/@material/banner/foundation.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCBannerFoundation": function() { return /* binding */ MDCBannerFoundation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ 6308);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ 1996);
/**
 * @license
 * Copyright 2020 Google Inc.
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



var OPENING = _constants__WEBPACK_IMPORTED_MODULE_0__.cssClasses.OPENING, OPEN = _constants__WEBPACK_IMPORTED_MODULE_0__.cssClasses.OPEN, CLOSING = _constants__WEBPACK_IMPORTED_MODULE_0__.cssClasses.CLOSING;
/**
 * Foundation class for banner. Responsibilities include opening and closing the
 * banner.
 */
var MDCBannerFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MDCBannerFoundation, _super);
    function MDCBannerFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, MDCBannerFoundation.defaultAdapter), adapter)) || this;
        _this.isOpened = false;
        // Request id for open animation, used to cancel the refresh callback
        // request on close() and destroy().
        _this.animationFrame = 0;
        // Timer id for close and open animation, used to cancel the timer on
        // close() and destroy().
        _this.animationTimer = 0;
        return _this;
    }
    Object.defineProperty(MDCBannerFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                getContentHeight: function () { return 0; },
                notifyClosed: function () { return undefined; },
                notifyClosing: function () { return undefined; },
                notifyOpened: function () { return undefined; },
                notifyOpening: function () { return undefined; },
                notifyActionClicked: function () { return undefined; },
                releaseFocus: function () { return undefined; },
                removeClass: function () { return undefined; },
                setStyleProperty: function () { return undefined; },
                trapFocus: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCBannerFoundation.prototype.destroy = function () {
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = 0;
        clearTimeout(this.animationTimer);
        this.animationTimer = 0;
    };
    MDCBannerFoundation.prototype.open = function () {
        var _this = this;
        this.isOpened = true;
        this.adapter.notifyOpening();
        this.adapter.removeClass(CLOSING);
        this.adapter.addClass(OPENING);
        var contentHeight = this.adapter.getContentHeight();
        this.animationFrame = requestAnimationFrame(function () {
            _this.adapter.addClass(OPEN);
            _this.adapter.setStyleProperty('height', contentHeight + "px");
            _this.animationTimer = setTimeout(function () {
                _this.handleAnimationTimerEnd();
                _this.adapter.trapFocus();
                _this.adapter.notifyOpened();
            }, _constants__WEBPACK_IMPORTED_MODULE_0__.numbers.BANNER_ANIMATION_OPEN_TIME_MS);
        });
    };
    /**
     * @param reason Why the banner was closed. Value will be passed to
     *     events.CLOSING and events.CLOSED via the `event.detail.reason`
     *     property. Standard values are CloseReason.PRIMARY and
     *     CloseReason.SECONDARY, but CloseReason.UNSPECIFIED is provided for
     *     custom handling of programmatic closing of the banner.
     */
    MDCBannerFoundation.prototype.close = function (reason) {
        var _this = this;
        if (!this.isOpened) {
            // Avoid redundant close calls (and events), e.g. repeated interactions as
            // the banner is animating closed
            return;
        }
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = 0;
        this.isOpened = false;
        this.adapter.notifyClosing(reason);
        this.adapter.addClass(CLOSING);
        this.adapter.setStyleProperty('height', '0');
        this.adapter.removeClass(OPEN);
        this.adapter.removeClass(OPENING);
        clearTimeout(this.animationTimer);
        this.animationTimer = setTimeout(function () {
            _this.adapter.releaseFocus();
            _this.handleAnimationTimerEnd();
            _this.adapter.notifyClosed(reason);
        }, _constants__WEBPACK_IMPORTED_MODULE_0__.numbers.BANNER_ANIMATION_CLOSE_TIME_MS);
    };
    MDCBannerFoundation.prototype.isOpen = function () {
        return this.isOpened;
    };
    MDCBannerFoundation.prototype.handlePrimaryActionClick = function (disableAutoClose) {
        if (disableAutoClose === void 0) { disableAutoClose = false; }
        if (disableAutoClose) {
            this.adapter.notifyActionClicked(0 /* PRIMARY */);
        }
        else {
            this.close(_constants__WEBPACK_IMPORTED_MODULE_0__.CloseReason.PRIMARY);
        }
    };
    MDCBannerFoundation.prototype.handleSecondaryActionClick = function (disableAutoClose) {
        if (disableAutoClose === void 0) { disableAutoClose = false; }
        if (disableAutoClose) {
            this.adapter.notifyActionClicked(1 /* SECONDARY */);
        }
        else {
            this.close(_constants__WEBPACK_IMPORTED_MODULE_0__.CloseReason.SECONDARY);
        }
    };
    MDCBannerFoundation.prototype.layout = function () {
        var contentHeight = this.adapter.getContentHeight();
        this.adapter.setStyleProperty('height', contentHeight + "px");
    };
    MDCBannerFoundation.prototype.handleAnimationTimerEnd = function () {
        this.animationTimer = 0;
        this.adapter.removeClass(OPENING);
        this.adapter.removeClass(CLOSING);
    };
    return MDCBannerFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ 5179:
/*!**************************************************!*\
  !*** ./node_modules/@material/base/component.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCComponent": function() { return /* binding */ MDCComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ 6308);
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


var MDCComponent = /** @class */ (function () {
    function MDCComponent(root, foundation) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.root = root;
        this.initialize.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args)));
        // Note that we initialize foundation here and not within the constructor's
        // default param so that this.root is defined and can be used within the
        // foundation class.
        this.foundation =
            foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation.init();
        this.initialSyncWithDOM();
    }
    MDCComponent.attachTo = function (root) {
        // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
        // returns an instantiated component with its root set to that element. Also note that in the cases of
        // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
        // from getDefaultFoundation().
        return new MDCComponent(root, new _foundation__WEBPACK_IMPORTED_MODULE_1__.MDCFoundation({}));
    };
    /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */
    MDCComponent.prototype.initialize = function () {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        // Subclasses can override this to do any additional setup work that would be considered part of a
        // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
        // initialized. Any additional arguments besides root and foundation will be passed in here.
    };
    MDCComponent.prototype.getDefaultFoundation = function () {
        // Subclasses must override this method to return a properly configured foundation class for the
        // component.
        throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
            'foundation class');
    };
    MDCComponent.prototype.initialSyncWithDOM = function () {
        // Subclasses should override this method if they need to perform work to synchronize with a host DOM
        // object. An example of this would be a form control wrapper that needs to synchronize its internal state
        // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
        // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    };
    MDCComponent.prototype.destroy = function () {
        // Subclasses may implement this method to release any resources / deregister any listeners they have
        // attached. An example of this might be deregistering a resize event from the window object.
        this.foundation.destroy();
    };
    MDCComponent.prototype.listen = function (evtType, handler, options) {
        this.root.addEventListener(evtType, handler, options);
    };
    MDCComponent.prototype.unlisten = function (evtType, handler, options) {
        this.root.removeEventListener(evtType, handler, options);
    };
    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
     */
    MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
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
    return MDCComponent;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCComponent);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ 6308:
/*!***************************************************!*\
  !*** ./node_modules/@material/base/foundation.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCFoundation": function() { return /* binding */ MDCFoundation; }
/* harmony export */ });
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
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: false,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ 2522:
/*!************************************************************!*\
  !*** ./node_modules/@material/base/observer-foundation.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCObserverFoundation": function() { return /* binding */ MDCObserverFoundation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ 6308);
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer */ 1778);
/**
 * @license
 * Copyright 2021 Google Inc.
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



var MDCObserverFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCObserverFoundation, _super);
    function MDCObserverFoundation(adapter) {
        var _this = _super.call(this, adapter) || this;
        /** A set of cleanup functions to unobserve changes. */
        _this.unobserves = new Set();
        return _this;
    }
    MDCObserverFoundation.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.unobserve();
    };
    /**
     * Observe a target's properties for changes using the provided map of
     * property names and observer functions.
     *
     * @template T The target type.
     * @param target - The target to observe.
     * @param observers - An object whose keys are target properties and values
     *     are observer functions that are called when the associated property
     *     changes.
     * @return A cleanup function that can be called to unobserve the
     *     target.
     */
    MDCObserverFoundation.prototype.observe = function (target, observers) {
        var e_1, _a;
        var _this = this;
        var cleanup = [];
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(Object.keys(observers)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var property = _c.value;
                var observer = observers[property].bind(this);
                cleanup.push(this.observeProperty(target, property, observer));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var unobserve = function () {
            var e_2, _a;
            try {
                for (var cleanup_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(cleanup), cleanup_1_1 = cleanup_1.next(); !cleanup_1_1.done; cleanup_1_1 = cleanup_1.next()) {
                    var cleanupFn = cleanup_1_1.value;
                    cleanupFn();
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (cleanup_1_1 && !cleanup_1_1.done && (_a = cleanup_1.return)) _a.call(cleanup_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            _this.unobserves.delete(unobserve);
        };
        this.unobserves.add(unobserve);
        return unobserve;
    };
    /**
     * Observe a target's property for changes. When a property changes, the
     * provided `Observer` function will be invoked with the properties current
     * and previous values.
     *
     * The returned cleanup function will stop listening to changes for the
     * provided `Observer`.
     *
     * @template T The observed target type.
     * @template K The observed property.
     * @param target - The target to observe.
     * @param property - The property of the target to observe.
     * @param observer - An observer function to invoke each time the property
     *     changes.
     * @return A cleanup function that will stop observing changes for the
     *     provided `Observer`.
     */
    MDCObserverFoundation.prototype.observeProperty = function (target, property, observer) {
        return (0,_observer__WEBPACK_IMPORTED_MODULE_1__.observeProperty)(target, property, observer);
    };
    /**
     * Enables or disables all observers for the provided target. Disabling
     * observers will prevent them from being called until they are re-enabled.
     *
     * @param target - The target to enable or disable observers for.
     * @param enabled - Whether or not observers should be called.
     */
    MDCObserverFoundation.prototype.setObserversEnabled = function (target, enabled) {
        (0,_observer__WEBPACK_IMPORTED_MODULE_1__.setObserversEnabled)(target, enabled);
    };
    /**
     * Clean up all observers and stop listening for property changes.
     */
    MDCObserverFoundation.prototype.unobserve = function () {
        var e_3, _a;
        try {
            // Iterate over a copy since unobserve() will remove themselves from the set
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(this.unobserves))), _c = _b.next(); !_c.done; _c = _b.next()) {
                var unobserve = _c.value;
                unobserve();
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    return MDCObserverFoundation;
}(_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

//# sourceMappingURL=observer-foundation.js.map

/***/ }),

/***/ 1778:
/*!*************************************************!*\
  !*** ./node_modules/@material/base/observer.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDescriptor": function() { return /* binding */ getDescriptor; },
/* harmony export */   "mdcObserver": function() { return /* binding */ mdcObserver; },
/* harmony export */   "observeProperty": function() { return /* binding */ observeProperty; },
/* harmony export */   "setObserversEnabled": function() { return /* binding */ setObserversEnabled; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 655);
/**
 * @license
 * Copyright 2021 Google Inc.
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

/**
 * Mixin to add `MDCObserver` functionality to an optional base class.
 *
 * @deprecated Prefer MDCObserverFoundation for stricter closure compliance.
 * @template C Optional base class constructor type.
 * @param baseClass - Optional base class.
 * @return A class that extends the optional base class with `MDCObserver`
 *     functionality.
 */
function mdcObserver(baseClass) {
    if (baseClass === void 0) { baseClass = /** @class */ (function () {
        function class_1() {
        }
        return class_1;
    }()); }
    // Mixin classes cannot use private members and Symbol() cannot be used in 3P
    // for IE11.
    var unobserveMap = new WeakMap();
    return /** @class */ (function (_super) {
        (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCObserver, _super);
        function MDCObserver() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MDCObserver.prototype.observe = function (target, observers) {
            var e_1, _a;
            var _this = this;
            var cleanup = [];
            try {
                for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(Object.keys(observers)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var property = _c.value;
                    var observer = observers[property].bind(this);
                    cleanup.push(observeProperty(target, property, observer));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var unobserve = function () {
                var e_2, _a;
                try {
                    for (var cleanup_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(cleanup), cleanup_1_1 = cleanup_1.next(); !cleanup_1_1.done; cleanup_1_1 = cleanup_1.next()) {
                        var cleanupFn = cleanup_1_1.value;
                        cleanupFn();
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (cleanup_1_1 && !cleanup_1_1.done && (_a = cleanup_1.return)) _a.call(cleanup_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                var unobserves = unobserveMap.get(_this) || [];
                var index = unobserves.indexOf(unobserve);
                if (index > -1) {
                    unobserves.splice(index, 1);
                }
            };
            var unobserves = unobserveMap.get(this);
            if (!unobserves) {
                unobserves = [];
                unobserveMap.set(this, unobserves);
            }
            unobserves.push(unobserve);
            return unobserve;
        };
        MDCObserver.prototype.setObserversEnabled = function (target, enabled) {
            setObserversEnabled(target, enabled);
        };
        MDCObserver.prototype.unobserve = function () {
            var e_3, _a;
            // Iterate over a copy since unobserve() will remove themselves from the
            // array
            var unobserves = unobserveMap.get(this) || [];
            try {
                for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(unobserves))), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var unobserve = _c.value;
                    unobserve();
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        };
        return MDCObserver;
    }(baseClass));
}
/**
 * Observe a target's property for changes. When a property changes, the
 * provided `Observer` function will be invoked with the properties current and
 * previous values.
 *
 * The returned cleanup function will stop listening to changes for the
 * provided `Observer`.
 *
 * @template T The observed target type.
 * @template K The observed property.
 * @param target - The target to observe.
 * @param property - The property of the target to observe.
 * @param observer - An observer function to invoke each time the property
 *     changes.
 * @return A cleanup function that will stop observing changes for the provided
 *     `Observer`.
 */
function observeProperty(target, property, observer) {
    var targetObservers = installObserver(target, property);
    var observers = targetObservers.getObservers(property);
    observers.push(observer);
    return function () {
        observers.splice(observers.indexOf(observer), 1);
    };
}
/**
 * A Map of all `TargetObservers` that have been installed.
 */
var allTargetObservers = new WeakMap();
/**
 * Installs a `TargetObservers` for the provided target (if not already
 * installed), and replaces the given property with a getter and setter that
 * will respond to changes and call `TargetObservers`.
 *
 * Subsequent calls to `installObserver()` with the same target and property
 * will not override the property's previously installed getter/setter.
 *
 * @template T The observed target type.
 * @template K The observed property to create a getter/setter for.
 * @param target - The target to observe.
 * @param property - The property to create a getter/setter for, if needed.
 * @return The installed `TargetObservers` for the provided target.
 */
function installObserver(target, property) {
    var observersMap = new Map();
    if (!allTargetObservers.has(target)) {
        allTargetObservers.set(target, {
            isEnabled: true,
            getObservers: function (key) {
                var observers = observersMap.get(key) || [];
                if (!observersMap.has(key)) {
                    observersMap.set(key, observers);
                }
                return observers;
            },
            installedProperties: new Set()
        });
    }
    var targetObservers = allTargetObservers.get(target);
    if (targetObservers.installedProperties.has(property)) {
        // The getter/setter has already been replaced for this property
        return targetObservers;
    }
    // Retrieve (or create if it's a plain property) the original descriptor from
    // the target...
    var descriptor = getDescriptor(target, property) || {
        configurable: true,
        enumerable: true,
        value: target[property],
        writable: true
    };
    // ...and create a copy that will be used for the observer.
    var observedDescriptor = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, descriptor);
    var descGet = descriptor.get, descSet = descriptor.set;
    if ('value' in descriptor) {
        // The descriptor is a simple value (not a getter/setter).
        // For our observer descriptor that we copied, delete the value/writable
        // properties, since they are incompatible with the get/set properties
        // for descriptors.
        delete observedDescriptor.value;
        delete observedDescriptor.writable;
        // Set up a simple getter...
        var value_1 = descriptor.value;
        descGet = function () { return value_1; };
        // ...and setter (if the original property was writable).
        if (descriptor.writable) {
            descSet = function (newValue) {
                value_1 = newValue;
            };
        }
    }
    if (descGet) {
        observedDescriptor.get = function () {
            // `this as T` needed for closure conformance
            return descGet.call(this);
        };
    }
    if (descSet) {
        observedDescriptor.set = function (newValue) {
            var e_4, _a;
            // `thus as T` needed for closure conformance
            var previous = descGet ? descGet.call(this) : newValue;
            descSet.call(this, newValue);
            if (targetObservers.isEnabled && (!descGet || newValue !== previous)) {
                try {
                    for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(targetObservers.getObservers(property)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer(newValue, previous);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        };
    }
    targetObservers.installedProperties.add(property);
    Object.defineProperty(target, property, observedDescriptor);
    return targetObservers;
}
/**
 * Retrieves the descriptor for a property from the provided target. This
 * function will walk up the target's prototype chain to search for the
 * descriptor.
 *
 * @template T The target type.
 * @template K The property type.
 * @param target - The target to retrieve a descriptor from.
 * @param property - The name of the property to retrieve a descriptor for.
 * @return the descriptor, or undefined if it does not exist. Keep in mind that
 *     plain properties may not have a descriptor defined.
 */
function getDescriptor(target, property) {
    var descriptorTarget = target;
    var descriptor;
    while (descriptorTarget) {
        descriptor = Object.getOwnPropertyDescriptor(descriptorTarget, property);
        if (descriptor) {
            break;
        }
        // Walk up the instance's prototype chain in case the property is declared
        // on a superclass.
        descriptorTarget = Object.getPrototypeOf(descriptorTarget);
    }
    return descriptor;
}
/**
 * Enables or disables all observers for a provided target. Changes to observed
 * properties will not call any observers when disabled.
 *
 * @template T The observed target type.
 * @param target - The target to enable or disable observers for.
 * @param enabled - True to enable or false to disable observers.
 */
function setObserversEnabled(target, enabled) {
    var targetObservers = allTargetObservers.get(target);
    if (targetObservers) {
        targetObservers.isEnabled = enabled;
    }
}
//# sourceMappingURL=observer.js.map

/***/ }),

/***/ 7282:
/*!******************************************************!*\
  !*** ./node_modules/@material/checkbox/constants.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": function() { return /* binding */ cssClasses; },
/* harmony export */   "numbers": function() { return /* binding */ numbers; },
/* harmony export */   "strings": function() { return /* binding */ strings; }
/* harmony export */ });
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
var cssClasses = {
    ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
    ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
    ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
    ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked',
    ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
    ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
    BACKGROUND: 'mdc-checkbox__background',
    CHECKED: 'mdc-checkbox--checked',
    CHECKMARK: 'mdc-checkbox__checkmark',
    CHECKMARK_PATH: 'mdc-checkbox__checkmark-path',
    DISABLED: 'mdc-checkbox--disabled',
    INDETERMINATE: 'mdc-checkbox--indeterminate',
    MIXEDMARK: 'mdc-checkbox__mixedmark',
    NATIVE_CONTROL: 'mdc-checkbox__native-control',
    ROOT: 'mdc-checkbox',
    SELECTED: 'mdc-checkbox--selected',
    UPGRADED: 'mdc-checkbox--upgraded',
};
var strings = {
    ARIA_CHECKED_ATTR: 'aria-checked',
    ARIA_CHECKED_INDETERMINATE_VALUE: 'mixed',
    DATA_INDETERMINATE_ATTR: 'data-indeterminate',
    NATIVE_CONTROL_SELECTOR: '.mdc-checkbox__native-control',
    TRANSITION_STATE_CHECKED: 'checked',
    TRANSITION_STATE_INDETERMINATE: 'indeterminate',
    TRANSITION_STATE_INIT: 'init',
    TRANSITION_STATE_UNCHECKED: 'unchecked',
};
var numbers = {
    ANIM_END_LATCH_MS: 250,
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 1783:
/*!*******************************************************!*\
  !*** ./node_modules/@material/checkbox/foundation.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCCheckboxFoundation": function() { return /* binding */ MDCCheckboxFoundation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ 6308);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ 7282);
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



var MDCCheckboxFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCCheckboxFoundation, _super);
    function MDCCheckboxFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCCheckboxFoundation.defaultAdapter), adapter)) || this;
        _this.currentCheckState = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_INIT;
        _this.currentAnimationClass = '';
        _this.animEndLatchTimer = 0;
        _this.enableAnimationEndHandler = false;
        return _this;
    }
    Object.defineProperty(MDCCheckboxFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCCheckboxFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCCheckboxFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCCheckboxFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                forceLayout: function () { return undefined; },
                hasNativeControl: function () { return false; },
                isAttachedToDOM: function () { return false; },
                isChecked: function () { return false; },
                isIndeterminate: function () { return false; },
                removeClass: function () { return undefined; },
                removeNativeControlAttr: function () { return undefined; },
                setNativeControlAttr: function () { return undefined; },
                setNativeControlDisabled: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCCheckboxFoundation.prototype.init = function () {
        this.currentCheckState = this.determineCheckState();
        this.updateAriaChecked();
        this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.UPGRADED);
    };
    MDCCheckboxFoundation.prototype.destroy = function () {
        clearTimeout(this.animEndLatchTimer);
    };
    MDCCheckboxFoundation.prototype.setDisabled = function (disabled) {
        this.adapter.setNativeControlDisabled(disabled);
        if (disabled) {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.DISABLED);
        }
        else {
            this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.DISABLED);
        }
    };
    /**
     * Handles the animationend event for the checkbox
     */
    MDCCheckboxFoundation.prototype.handleAnimationEnd = function () {
        var _this = this;
        if (!this.enableAnimationEndHandler) {
            return;
        }
        clearTimeout(this.animEndLatchTimer);
        this.animEndLatchTimer = setTimeout(function () {
            _this.adapter.removeClass(_this.currentAnimationClass);
            _this.enableAnimationEndHandler = false;
        }, _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.ANIM_END_LATCH_MS);
    };
    /**
     * Handles the change event for the checkbox
     */
    MDCCheckboxFoundation.prototype.handleChange = function () {
        this.transitionCheckState();
    };
    MDCCheckboxFoundation.prototype.transitionCheckState = function () {
        if (!this.adapter.hasNativeControl()) {
            return;
        }
        var oldState = this.currentCheckState;
        var newState = this.determineCheckState();
        if (oldState === newState) {
            return;
        }
        this.updateAriaChecked();
        var TRANSITION_STATE_UNCHECKED = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_UNCHECKED;
        var SELECTED = _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SELECTED;
        if (newState === TRANSITION_STATE_UNCHECKED) {
            this.adapter.removeClass(SELECTED);
        }
        else {
            this.adapter.addClass(SELECTED);
        }
        // Check to ensure that there isn't a previously existing animation class, in case for example
        // the user interacted with the checkbox before the animation was finished.
        if (this.currentAnimationClass.length > 0) {
            clearTimeout(this.animEndLatchTimer);
            this.adapter.forceLayout();
            this.adapter.removeClass(this.currentAnimationClass);
        }
        this.currentAnimationClass =
            this.getTransitionAnimationClass(oldState, newState);
        this.currentCheckState = newState;
        // Check for parentNode so that animations are only run when the element is attached
        // to the DOM.
        if (this.adapter.isAttachedToDOM() &&
            this.currentAnimationClass.length > 0) {
            this.adapter.addClass(this.currentAnimationClass);
            this.enableAnimationEndHandler = true;
        }
    };
    MDCCheckboxFoundation.prototype.determineCheckState = function () {
        var TRANSITION_STATE_INDETERMINATE = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_INDETERMINATE, TRANSITION_STATE_CHECKED = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_CHECKED, TRANSITION_STATE_UNCHECKED = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_UNCHECKED;
        if (this.adapter.isIndeterminate()) {
            return TRANSITION_STATE_INDETERMINATE;
        }
        return this.adapter.isChecked() ? TRANSITION_STATE_CHECKED :
            TRANSITION_STATE_UNCHECKED;
    };
    MDCCheckboxFoundation.prototype.getTransitionAnimationClass = function (oldState, newState) {
        var TRANSITION_STATE_INIT = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_INIT, TRANSITION_STATE_CHECKED = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_CHECKED, TRANSITION_STATE_UNCHECKED = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.TRANSITION_STATE_UNCHECKED;
        var _a = MDCCheckboxFoundation.cssClasses, ANIM_UNCHECKED_CHECKED = _a.ANIM_UNCHECKED_CHECKED, ANIM_UNCHECKED_INDETERMINATE = _a.ANIM_UNCHECKED_INDETERMINATE, ANIM_CHECKED_UNCHECKED = _a.ANIM_CHECKED_UNCHECKED, ANIM_CHECKED_INDETERMINATE = _a.ANIM_CHECKED_INDETERMINATE, ANIM_INDETERMINATE_CHECKED = _a.ANIM_INDETERMINATE_CHECKED, ANIM_INDETERMINATE_UNCHECKED = _a.ANIM_INDETERMINATE_UNCHECKED;
        switch (oldState) {
            case TRANSITION_STATE_INIT:
                if (newState === TRANSITION_STATE_UNCHECKED) {
                    return '';
                }
                return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
            case TRANSITION_STATE_UNCHECKED:
                return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
            case TRANSITION_STATE_CHECKED:
                return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
            default: // TRANSITION_STATE_INDETERMINATE
                return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
        }
    };
    MDCCheckboxFoundation.prototype.updateAriaChecked = function () {
        // Ensure aria-checked is set to mixed if checkbox is in indeterminate state.
        if (this.adapter.isIndeterminate()) {
            this.adapter.setNativeControlAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_CHECKED_ATTR, _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_CHECKED_INDETERMINATE_VALUE);
        }
        else {
            // The on/off state does not need to keep track of aria-checked, since
            // the screenreader uses the checked property on the checkbox element.
            this.adapter.removeNativeControlAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_CHECKED_ATTR);
        }
    };
    return MDCCheckboxFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCCheckboxFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ 8818:
/*!*****************************************************************!*\
  !*** ./node_modules/@material/chips/action/component-ripple.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GRAPHIC_SELECTED_WIDTH_STYLE_PROP": function() { return /* binding */ GRAPHIC_SELECTED_WIDTH_STYLE_PROP; },
/* harmony export */   "computePrimaryActionRippleClientRect": function() { return /* binding */ computePrimaryActionRippleClientRect; }
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
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
/**
 * Computes the ripple client rect for the primary action given the raw client
 * rect and the selected width graphic style property.
 */
function computePrimaryActionRippleClientRect(clientRect, graphicSelectedWidthStyleValue) {
    // parseInt is banned so we need to manually format and parse the string.
    var graphicWidth = Number(graphicSelectedWidthStyleValue.replace('px', ''));
    if (Number.isNaN(graphicWidth)) {
        return clientRect;
    }
    // Can't use the spread operator because it has internal problems
    return {
        width: clientRect.width + graphicWidth,
        height: clientRect.height,
        top: clientRect.top,
        right: clientRect.right,
        bottom: clientRect.bottom,
        left: clientRect.left
    };
}
/**
 * Provides the CSS custom property whose value is read by
 * computePrimaryRippleClientRect. The CSS custom property provides the width
 * of the chip graphic when selected. It is only set for the unselected chip
 * variant without a leadinc icon. In all other cases, it will have no value.
 */
var GRAPHIC_SELECTED_WIDTH_STYLE_PROP = '--mdc-chip-graphic-selected-width';
//# sourceMappingURL=component-ripple.js.map

/***/ }),

/***/ 8510:
/*!**********************************************************!*\
  !*** ./node_modules/@material/chips/action/constants.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCChipActionAttributes": function() { return /* binding */ MDCChipActionAttributes; },
/* harmony export */   "MDCChipActionCssClasses": function() { return /* binding */ MDCChipActionCssClasses; },
/* harmony export */   "MDCChipActionEvents": function() { return /* binding */ MDCChipActionEvents; },
/* harmony export */   "MDCChipActionFocusBehavior": function() { return /* binding */ MDCChipActionFocusBehavior; },
/* harmony export */   "MDCChipActionInteractionTrigger": function() { return /* binding */ MDCChipActionInteractionTrigger; },
/* harmony export */   "MDCChipActionType": function() { return /* binding */ MDCChipActionType; }
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
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
/**
 * MDCChipActionCssClasses provides the classes to be queried and manipulated on
 * the root.
 */
var MDCChipActionCssClasses;
(function (MDCChipActionCssClasses) {
    MDCChipActionCssClasses["PRIMARY_ACTION"] = "mdc-evolution-chip__action--primary";
    MDCChipActionCssClasses["TRAILING_ACTION"] = "mdc-evolution-chip__action--trailing";
    MDCChipActionCssClasses["CHIP_ROOT"] = "mdc-evolution-chip";
})(MDCChipActionCssClasses || (MDCChipActionCssClasses = {}));
/**
 * MDCChipActionInteractionTrigger provides detail of the different triggers for
 * action interactions.
 */
var MDCChipActionInteractionTrigger;
(function (MDCChipActionInteractionTrigger) {
    MDCChipActionInteractionTrigger[MDCChipActionInteractionTrigger["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    MDCChipActionInteractionTrigger[MDCChipActionInteractionTrigger["CLICK"] = 1] = "CLICK";
    MDCChipActionInteractionTrigger[MDCChipActionInteractionTrigger["BACKSPACE_KEY"] = 2] = "BACKSPACE_KEY";
    MDCChipActionInteractionTrigger[MDCChipActionInteractionTrigger["DELETE_KEY"] = 3] = "DELETE_KEY";
    MDCChipActionInteractionTrigger[MDCChipActionInteractionTrigger["SPACEBAR_KEY"] = 4] = "SPACEBAR_KEY";
    MDCChipActionInteractionTrigger[MDCChipActionInteractionTrigger["ENTER_KEY"] = 5] = "ENTER_KEY";
})(MDCChipActionInteractionTrigger || (MDCChipActionInteractionTrigger = {}));
/**
 * MDCChipActionType provides the different types of available actions.
 */
var MDCChipActionType;
(function (MDCChipActionType) {
    MDCChipActionType[MDCChipActionType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    MDCChipActionType[MDCChipActionType["PRIMARY"] = 1] = "PRIMARY";
    MDCChipActionType[MDCChipActionType["TRAILING"] = 2] = "TRAILING";
})(MDCChipActionType || (MDCChipActionType = {}));
/**
 * MDCChipActionEvents provides the different events emitted by the action.
 */
var MDCChipActionEvents;
(function (MDCChipActionEvents) {
    MDCChipActionEvents["INTERACTION"] = "MDCChipAction:interaction";
    MDCChipActionEvents["NAVIGATION"] = "MDCChipAction:navigation";
})(MDCChipActionEvents || (MDCChipActionEvents = {}));
/**
 * MDCChipActionFocusBehavior provides configurations for focusing or unfocusing
 * an action.
 */
var MDCChipActionFocusBehavior;
(function (MDCChipActionFocusBehavior) {
    MDCChipActionFocusBehavior[MDCChipActionFocusBehavior["FOCUSABLE"] = 0] = "FOCUSABLE";
    MDCChipActionFocusBehavior[MDCChipActionFocusBehavior["FOCUSABLE_AND_FOCUSED"] = 1] = "FOCUSABLE_AND_FOCUSED";
    MDCChipActionFocusBehavior[MDCChipActionFocusBehavior["NOT_FOCUSABLE"] = 2] = "NOT_FOCUSABLE";
})(MDCChipActionFocusBehavior || (MDCChipActionFocusBehavior = {}));
/**
 * MDCChipActionAttributes provides the HTML attributes used by the foundation.
 */
var MDCChipActionAttributes;
(function (MDCChipActionAttributes) {
    MDCChipActionAttributes["ARIA_DISABLED"] = "aria-disabled";
    MDCChipActionAttributes["ARIA_HIDDEN"] = "aria-hidden";
    MDCChipActionAttributes["ARIA_SELECTED"] = "aria-selected";
    MDCChipActionAttributes["DATA_DELETABLE"] = "data-mdc-deletable";
    MDCChipActionAttributes["DISABLED"] = "disabled";
    MDCChipActionAttributes["ROLE"] = "role";
    MDCChipActionAttributes["TAB_INDEX"] = "tabindex";
})(MDCChipActionAttributes || (MDCChipActionAttributes = {}));
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 1637:
/*!***********************************************************!*\
  !*** ./node_modules/@material/chips/action/foundation.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCChipActionFoundation": function() { return /* binding */ MDCChipActionFoundation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/base/foundation */ 6308);
/* harmony import */ var _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/dom/keyboard */ 9502);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ 8510);
/**
 * @license
 * Copyright 2020 Google Inc.
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




var triggerMap = new Map();
triggerMap.set(_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_0__.KEY.SPACEBAR, _constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionInteractionTrigger.SPACEBAR_KEY);
triggerMap.set(_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_0__.KEY.ENTER, _constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionInteractionTrigger.ENTER_KEY);
triggerMap.set(_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_0__.KEY.DELETE, _constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionInteractionTrigger.DELETE_KEY);
triggerMap.set(_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_0__.KEY.BACKSPACE, _constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionInteractionTrigger.BACKSPACE_KEY);
/**
 * MDCChipActionFoundation provides a base abstract foundation for all chip
 * actions.
 */
var MDCChipActionFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MDCChipActionFoundation, _super);
    function MDCChipActionFoundation(adapter) {
        return _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, MDCChipActionFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCChipActionFoundation, "defaultAdapter", {
        get: function () {
            return {
                emitEvent: function () { return undefined; },
                focus: function () { return undefined; },
                getAttribute: function () { return null; },
                getElementID: function () { return ''; },
                removeAttribute: function () { return undefined; },
                setAttribute: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCChipActionFoundation.prototype.handleClick = function () {
        // Early exit for cases where the click comes from a source other than the
        // user's pointer (i.e. programmatic click from AT).
        if (this.isDisabled())
            return;
        this.emitInteraction(_constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionInteractionTrigger.CLICK);
    };
    MDCChipActionFoundation.prototype.handleKeydown = function (event) {
        var key = (0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_0__.normalizeKey)(event);
        if (this.shouldNotifyInteractionFromKey(key)) {
            event.preventDefault();
            this.emitInteraction(this.getTriggerFromKey(key));
            return;
        }
        if ((0,_material_dom_keyboard__WEBPACK_IMPORTED_MODULE_0__.isNavigationEvent)(event)) {
            event.preventDefault();
            this.emitNavigation(key);
            return;
        }
    };
    MDCChipActionFoundation.prototype.setDisabled = function (isDisabled) {
        // Use `aria-disabled` for the selectable (listbox) disabled state
        if (this.isSelectable()) {
            this.adapter.setAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionAttributes.ARIA_DISABLED, "" + isDisabled);
            return;
        }
        if (isDisabled) {
            this.adapter.setAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionAttributes.DISABLED, 'true');
        }
        else {
            this.adapter.removeAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionAttributes.DISABLED);
        }
    };
    MDCChipActionFoundation.prototype.isDisabled = function () {
        if (this.adapter.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionAttributes.ARIA_DISABLED) ===
            'true') {
            return true;
        }
        if (this.adapter.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionAttributes.DISABLED) !== null) {
            return true;
        }
        return false;
    };
    MDCChipActionFoundation.prototype.setFocus = function (behavior) {
        // Early exit if not focusable
        if (!this.isFocusable()) {
            return;
        }
        // Add it to the tab order and give focus
        if (behavior === _constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionFocusBehavior.FOCUSABLE_AND_FOCUSED) {
            this.adapter.setAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionAttributes.TAB_INDEX, '0');
            this.adapter.focus();
            return;
        }
        // Add to the tab order
        if (behavior === _constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionFocusBehavior.FOCUSABLE) {
            this.adapter.setAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionAttributes.TAB_INDEX, '0');
            return;
        }
        // Remove it from the tab order
        if (behavior === _constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionFocusBehavior.NOT_FOCUSABLE) {
            this.adapter.setAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionAttributes.TAB_INDEX, '-1');
            return;
        }
    };
    MDCChipActionFoundation.prototype.isFocusable = function () {
        if (this.isDisabled()) {
            return false;
        }
        if (this.adapter.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionAttributes.ARIA_HIDDEN) ===
            'true') {
            return false;
        }
        return true;
    };
    MDCChipActionFoundation.prototype.setSelected = function (isSelected) {
        // Early exit if not selectable
        if (!this.isSelectable()) {
            return;
        }
        this.adapter.setAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionAttributes.ARIA_SELECTED, "" + isSelected);
    };
    MDCChipActionFoundation.prototype.isSelected = function () {
        return this.adapter.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionAttributes.ARIA_SELECTED) ===
            'true';
    };
    MDCChipActionFoundation.prototype.emitInteraction = function (trigger) {
        this.adapter.emitEvent(_constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionEvents.INTERACTION, {
            actionID: this.adapter.getElementID(),
            source: this.actionType(),
            trigger: trigger,
        });
    };
    MDCChipActionFoundation.prototype.emitNavigation = function (key) {
        this.adapter.emitEvent(_constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionEvents.NAVIGATION, {
            source: this.actionType(),
            key: key,
        });
    };
    MDCChipActionFoundation.prototype.shouldNotifyInteractionFromKey = function (key) {
        var isFromActionKey = key === _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_0__.KEY.ENTER || key === _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_0__.KEY.SPACEBAR;
        var isFromRemoveKey = key === _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_0__.KEY.BACKSPACE || key === _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_0__.KEY.DELETE;
        if (isFromActionKey) {
            return true;
        }
        if (isFromRemoveKey && this.shouldEmitInteractionOnRemoveKey()) {
            return true;
        }
        return false;
    };
    MDCChipActionFoundation.prototype.getTriggerFromKey = function (key) {
        var trigger = triggerMap.get(key);
        if (trigger) {
            return trigger;
        }
        // Default case, should ideally never be returned
        return _constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionInteractionTrigger.UNSPECIFIED;
    };
    return MDCChipActionFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_3__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCChipActionFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ 1093:
/*!*******************************************************************!*\
  !*** ./node_modules/@material/chips/action/primary-foundation.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCChipPrimaryActionFoundation": function() { return /* binding */ MDCChipPrimaryActionFoundation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ 8510);
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ 1637);
/**
 * @license
 * Copyright 2020 Google Inc.
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



/**
 * MDCChipPrimaryActionFoundation provides the business logic for the primary
 * chip action.
 */
var MDCChipPrimaryActionFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCChipPrimaryActionFoundation, _super);
    function MDCChipPrimaryActionFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCChipPrimaryActionFoundation.prototype.isSelectable = function () {
        return this.adapter.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionAttributes.ROLE) === 'option';
    };
    MDCChipPrimaryActionFoundation.prototype.actionType = function () {
        return _constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionType.PRIMARY;
    };
    MDCChipPrimaryActionFoundation.prototype.shouldEmitInteractionOnRemoveKey = function () {
        return this.adapter.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionAttributes.DATA_DELETABLE) ===
            'true';
    };
    return MDCChipPrimaryActionFoundation;
}(_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCChipActionFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCChipPrimaryActionFoundation);
//# sourceMappingURL=primary-foundation.js.map

/***/ }),

/***/ 1290:
/*!********************************************************************!*\
  !*** ./node_modules/@material/chips/action/trailing-foundation.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCChipTrailingActionFoundation": function() { return /* binding */ MDCChipTrailingActionFoundation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ 8510);
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ 1637);
/**
 * @license
 * Copyright 2020 Google Inc.
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



/**
 * MDCChipTrailingActionFoundation provides the business logic for the trailing
 * chip action.
 */
var MDCChipTrailingActionFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCChipTrailingActionFoundation, _super);
    function MDCChipTrailingActionFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCChipTrailingActionFoundation.prototype.isSelectable = function () {
        return false;
    };
    MDCChipTrailingActionFoundation.prototype.actionType = function () {
        return _constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipActionType.TRAILING;
    };
    MDCChipTrailingActionFoundation.prototype.shouldEmitInteractionOnRemoveKey = function () {
        return true;
    };
    return MDCChipTrailingActionFoundation;
}(_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCChipActionFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCChipTrailingActionFoundation);
//# sourceMappingURL=trailing-foundation.js.map

/***/ }),

/***/ 1771:
/*!************************************************************!*\
  !*** ./node_modules/@material/chips/chip-set/constants.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCChipSetAttributes": function() { return /* binding */ MDCChipSetAttributes; },
/* harmony export */   "MDCChipSetCssClasses": function() { return /* binding */ MDCChipSetCssClasses; },
/* harmony export */   "MDCChipSetEvents": function() { return /* binding */ MDCChipSetEvents; }
/* harmony export */ });
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
/**
 * MDCChipSetAttributes provides the named constants for attributes used by the
 * foundation.
 */
var MDCChipSetAttributes;
(function (MDCChipSetAttributes) {
    MDCChipSetAttributes["ARIA_MULTISELECTABLE"] = "aria-multiselectable";
})(MDCChipSetAttributes || (MDCChipSetAttributes = {}));
/**
 * MDCChipSetCssClasses provides the named constants for class names.
 */
var MDCChipSetCssClasses;
(function (MDCChipSetCssClasses) {
    MDCChipSetCssClasses["CHIP"] = "mdc-evolution-chip";
})(MDCChipSetCssClasses || (MDCChipSetCssClasses = {}));
/**
 * MDCChipSetEvents provides the constants for emitted events.
 */
var MDCChipSetEvents;
(function (MDCChipSetEvents) {
    MDCChipSetEvents["INTERACTION"] = "MDCChipSet:interaction";
    MDCChipSetEvents["REMOVAL"] = "MDCChipSet:removal";
    MDCChipSetEvents["SELECTION"] = "MDCChipSet:selection";
})(MDCChipSetEvents || (MDCChipSetEvents = {}));
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 9330:
/*!*************************************************************!*\
  !*** ./node_modules/@material/chips/chip-set/foundation.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCChipSetFoundation": function() { return /* binding */ MDCChipSetFoundation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/base/foundation */ 6308);
/* harmony import */ var _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/dom/keyboard */ 9502);
/* harmony import */ var _action_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action/constants */ 8510);
/* harmony import */ var _chip_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chip/constants */ 1877);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ 1771);
/**
 * @license
 * Copyright 2020 Google Inc.
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






var Operator;
(function (Operator) {
    Operator[Operator["INCREMENT"] = 0] = "INCREMENT";
    Operator[Operator["DECREMENT"] = 1] = "DECREMENT";
})(Operator || (Operator = {}));
/**
 * MDCChipSetFoundation provides a foundation for all chips.
 */
var MDCChipSetFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCChipSetFoundation, _super);
    function MDCChipSetFoundation(adapter) {
        return _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCChipSetFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCChipSetFoundation, "defaultAdapter", {
        get: function () {
            return {
                announceMessage: function () { return undefined; },
                emitEvent: function () { return undefined; },
                getAttribute: function () { return null; },
                getChipActionsAtIndex: function () { return []; },
                getChipCount: function () { return 0; },
                getChipIdAtIndex: function () { return ''; },
                getChipIndexById: function () { return 0; },
                isChipFocusableAtIndex: function () { return false; },
                isChipSelectableAtIndex: function () { return false; },
                isChipSelectedAtIndex: function () { return false; },
                removeChipAtIndex: function () { },
                setChipFocusAtIndex: function () { return undefined; },
                setChipSelectedAtIndex: function () { return undefined; },
                startChipAnimationAtIndex: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCChipSetFoundation.prototype.handleChipAnimation = function (_a) {
        var detail = _a.detail;
        var chipID = detail.chipID, animation = detail.animation, isComplete = detail.isComplete, addedAnnouncement = detail.addedAnnouncement, removedAnnouncement = detail.removedAnnouncement;
        var index = this.adapter.getChipIndexById(chipID);
        if (animation === _chip_constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipAnimation.EXIT && isComplete) {
            if (removedAnnouncement) {
                this.adapter.announceMessage(removedAnnouncement);
            }
            this.removeAfterAnimation(index, chipID);
            return;
        }
        if (animation === _chip_constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipAnimation.ENTER && isComplete && addedAnnouncement) {
            this.adapter.announceMessage(addedAnnouncement);
            return;
        }
    };
    MDCChipSetFoundation.prototype.handleChipInteraction = function (_a) {
        var detail = _a.detail;
        var source = detail.source, chipID = detail.chipID, isSelectable = detail.isSelectable, isSelected = detail.isSelected, shouldRemove = detail.shouldRemove;
        var index = this.adapter.getChipIndexById(chipID);
        if (shouldRemove) {
            this.removeChip(index);
            return;
        }
        this.focusChip(index, source, _action_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipActionFocusBehavior.FOCUSABLE);
        this.adapter.emitEvent(_constants__WEBPACK_IMPORTED_MODULE_3__.MDCChipSetEvents.INTERACTION, {
            chipIndex: index,
            chipID: chipID,
        });
        if (isSelectable) {
            this.setSelection(index, source, !isSelected);
        }
    };
    MDCChipSetFoundation.prototype.handleChipNavigation = function (_a) {
        var detail = _a.detail;
        var chipID = detail.chipID, key = detail.key, isRTL = detail.isRTL, source = detail.source;
        var index = this.adapter.getChipIndexById(chipID);
        var toNextChip = (key === _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_4__.KEY.ARROW_RIGHT && !isRTL) ||
            (key === _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_4__.KEY.ARROW_LEFT && isRTL);
        if (toNextChip) {
            // Start from the next chip so we increment the index
            this.focusNextChipFrom(index + 1);
            return;
        }
        var toPreviousChip = (key === _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_4__.KEY.ARROW_LEFT && !isRTL) ||
            (key === _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_4__.KEY.ARROW_RIGHT && isRTL);
        if (toPreviousChip) {
            // Start from the previous chip so we decrement the index
            this.focusPrevChipFrom(index - 1);
            return;
        }
        if (key === _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_4__.KEY.ARROW_DOWN) {
            // Start from the next chip so we increment the index
            this.focusNextChipFrom(index + 1, source);
            return;
        }
        if (key === _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_4__.KEY.ARROW_UP) {
            // Start from the previous chip so we decrement the index
            this.focusPrevChipFrom(index - 1, source);
            return;
        }
        if (key === _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_4__.KEY.HOME) {
            this.focusNextChipFrom(0, source);
            return;
        }
        if (key === _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_4__.KEY.END) {
            this.focusPrevChipFrom(this.adapter.getChipCount() - 1, source);
            return;
        }
    };
    /** Returns the unique selected indexes of the chips. */
    MDCChipSetFoundation.prototype.getSelectedChipIndexes = function () {
        var e_1, _a;
        var selectedIndexes = new Set();
        var chipCount = this.adapter.getChipCount();
        for (var i = 0; i < chipCount; i++) {
            var actions = this.adapter.getChipActionsAtIndex(i);
            try {
                for (var actions_1 = (e_1 = void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(actions)), actions_1_1 = actions_1.next(); !actions_1_1.done; actions_1_1 = actions_1.next()) {
                    var action = actions_1_1.value;
                    if (this.adapter.isChipSelectedAtIndex(i, action)) {
                        selectedIndexes.add(i);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (actions_1_1 && !actions_1_1.done && (_a = actions_1.return)) _a.call(actions_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return selectedIndexes;
    };
    /** Sets the selected state of the chip at the given index and action. */
    MDCChipSetFoundation.prototype.setChipSelected = function (index, action, isSelected) {
        if (this.adapter.isChipSelectableAtIndex(index, action)) {
            this.setSelection(index, action, isSelected);
        }
    };
    /** Returns the selected state of the chip at the given index and action. */
    MDCChipSetFoundation.prototype.isChipSelected = function (index, action) {
        return this.adapter.isChipSelectedAtIndex(index, action);
    };
    /** Removes the chip at the given index. */
    MDCChipSetFoundation.prototype.removeChip = function (index) {
        // Early exit if the index is out of bounds
        if (index >= this.adapter.getChipCount() || index < 0)
            return;
        this.adapter.startChipAnimationAtIndex(index, _chip_constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipAnimation.EXIT);
        this.adapter.emitEvent(_constants__WEBPACK_IMPORTED_MODULE_3__.MDCChipSetEvents.REMOVAL, {
            chipID: this.adapter.getChipIdAtIndex(index),
            chipIndex: index,
            isComplete: false,
        });
    };
    MDCChipSetFoundation.prototype.addChip = function (index) {
        // Early exit if the index is out of bounds
        if (index >= this.adapter.getChipCount() || index < 0)
            return;
        this.adapter.startChipAnimationAtIndex(index, _chip_constants__WEBPACK_IMPORTED_MODULE_1__.MDCChipAnimation.ENTER);
    };
    /**
     * Increments to find the first focusable chip.
     */
    MDCChipSetFoundation.prototype.focusNextChipFrom = function (startIndex, targetAction) {
        var chipCount = this.adapter.getChipCount();
        for (var i = startIndex; i < chipCount; i++) {
            var focusableAction = this.getFocusableAction(i, Operator.INCREMENT, targetAction);
            if (focusableAction) {
                this.focusChip(i, focusableAction, _action_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipActionFocusBehavior.FOCUSABLE_AND_FOCUSED);
                return;
            }
        }
    };
    /**
     * Decrements to find the first focusable chip. Takes an optional target
     * action that can be used to focus the first matching focusable action.
     */
    MDCChipSetFoundation.prototype.focusPrevChipFrom = function (startIndex, targetAction) {
        for (var i = startIndex; i > -1; i--) {
            var focusableAction = this.getFocusableAction(i, Operator.DECREMENT, targetAction);
            if (focusableAction) {
                this.focusChip(i, focusableAction, _action_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipActionFocusBehavior.FOCUSABLE_AND_FOCUSED);
                return;
            }
        }
    };
    /** Returns the appropriate focusable action, or null if none exist. */
    MDCChipSetFoundation.prototype.getFocusableAction = function (index, op, targetAction) {
        var actions = this.adapter.getChipActionsAtIndex(index);
        // Reverse the actions if decrementing
        if (op === Operator.DECREMENT)
            actions.reverse();
        if (targetAction) {
            return this.getMatchingFocusableAction(index, actions, targetAction);
        }
        return this.getFirstFocusableAction(index, actions);
    };
    /**
     * Returs the first focusable action, regardless of type, or null if no
     * focusable actions exist.
     */
    MDCChipSetFoundation.prototype.getFirstFocusableAction = function (index, actions) {
        var e_2, _a;
        try {
            for (var actions_2 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(actions), actions_2_1 = actions_2.next(); !actions_2_1.done; actions_2_1 = actions_2.next()) {
                var action = actions_2_1.value;
                if (this.adapter.isChipFocusableAtIndex(index, action)) {
                    return action;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (actions_2_1 && !actions_2_1.done && (_a = actions_2.return)) _a.call(actions_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return null;
    };
    /**
     * If the actions contain a focusable action that matches the target action,
     * return that. Otherwise, return the first focusable action, or null if no
     * focusable action exists.
     */
    MDCChipSetFoundation.prototype.getMatchingFocusableAction = function (index, actions, targetAction) {
        var e_3, _a;
        var focusableAction = null;
        try {
            for (var actions_3 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(actions), actions_3_1 = actions_3.next(); !actions_3_1.done; actions_3_1 = actions_3.next()) {
                var action = actions_3_1.value;
                if (this.adapter.isChipFocusableAtIndex(index, action)) {
                    focusableAction = action;
                }
                // Exit and return the focusable action if it matches the target
                if (focusableAction === targetAction) {
                    return focusableAction;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (actions_3_1 && !actions_3_1.done && (_a = actions_3.return)) _a.call(actions_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return focusableAction;
    };
    MDCChipSetFoundation.prototype.focusChip = function (index, action, focus) {
        var e_4, _a;
        this.adapter.setChipFocusAtIndex(index, action, focus);
        var chipCount = this.adapter.getChipCount();
        for (var i = 0; i < chipCount; i++) {
            var actions = this.adapter.getChipActionsAtIndex(i);
            try {
                for (var actions_4 = (e_4 = void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(actions)), actions_4_1 = actions_4.next(); !actions_4_1.done; actions_4_1 = actions_4.next()) {
                    var chipAction = actions_4_1.value;
                    // Skip the action and index provided since we set it above
                    if (chipAction === action && i === index)
                        continue;
                    this.adapter.setChipFocusAtIndex(i, chipAction, _action_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipActionFocusBehavior.NOT_FOCUSABLE);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (actions_4_1 && !actions_4_1.done && (_a = actions_4.return)) _a.call(actions_4);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
    };
    MDCChipSetFoundation.prototype.supportsMultiSelect = function () {
        return this.adapter.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_3__.MDCChipSetAttributes.ARIA_MULTISELECTABLE) === 'true';
    };
    MDCChipSetFoundation.prototype.setSelection = function (index, action, isSelected) {
        var e_5, _a;
        this.adapter.setChipSelectedAtIndex(index, action, isSelected);
        this.adapter.emitEvent(_constants__WEBPACK_IMPORTED_MODULE_3__.MDCChipSetEvents.SELECTION, {
            chipID: this.adapter.getChipIdAtIndex(index),
            chipIndex: index,
            isSelected: isSelected,
        });
        // Early exit if we support multi-selection
        if (this.supportsMultiSelect()) {
            return;
        }
        // If we get here, we ony support single selection. This means we need to
        // unselect all chips
        var chipCount = this.adapter.getChipCount();
        for (var i = 0; i < chipCount; i++) {
            var actions = this.adapter.getChipActionsAtIndex(i);
            try {
                for (var actions_5 = (e_5 = void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(actions)), actions_5_1 = actions_5.next(); !actions_5_1.done; actions_5_1 = actions_5.next()) {
                    var chipAction = actions_5_1.value;
                    // Skip the action and index provided since we set it above
                    if (chipAction === action && i === index)
                        continue;
                    this.adapter.setChipSelectedAtIndex(i, chipAction, false);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (actions_5_1 && !actions_5_1.done && (_a = actions_5.return)) _a.call(actions_5);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
    };
    MDCChipSetFoundation.prototype.removeAfterAnimation = function (index, chipID) {
        this.adapter.removeChipAtIndex(index);
        this.adapter.emitEvent(_constants__WEBPACK_IMPORTED_MODULE_3__.MDCChipSetEvents.REMOVAL, {
            chipIndex: index,
            isComplete: true,
            chipID: chipID,
        });
        var chipCount = this.adapter.getChipCount();
        // Early exit if we have an empty chip set
        if (chipCount <= 0)
            return;
        this.focusNearestFocusableAction(index);
    };
    /**
     * Find the first focusable action by moving bidirectionally horizontally
     * from the start index.
     *
     * Given chip set [A, B, C, D, E, F, G]...
     * Let's say we remove chip "F". We don't know where the nearest focusable
     * action is since any of them could be disabled. The nearest focusable
     * action could be E, it could be G, it could even be A. To find it, we
     * start from the source index (5 for "F" in this case) and move out
     * horizontally, checking each chip at each index.
     *
     */
    MDCChipSetFoundation.prototype.focusNearestFocusableAction = function (index) {
        var chipCount = this.adapter.getChipCount();
        var decrIndex = index;
        var incrIndex = index;
        while (decrIndex > -1 || incrIndex < chipCount) {
            var focusAction = this.getNearestFocusableAction(decrIndex, incrIndex, _action_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipActionType.TRAILING);
            if (focusAction) {
                this.focusChip(focusAction.index, focusAction.action, _action_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipActionFocusBehavior.FOCUSABLE_AND_FOCUSED);
                return;
            }
            decrIndex--;
            incrIndex++;
        }
    };
    MDCChipSetFoundation.prototype.getNearestFocusableAction = function (decrIndex, incrIndex, actionType) {
        var decrAction = this.getFocusableAction(decrIndex, Operator.DECREMENT, actionType);
        if (decrAction) {
            return {
                index: decrIndex,
                action: decrAction,
            };
        }
        // Early exit if the incremented and decremented indices are identical
        if (incrIndex === decrIndex)
            return null;
        var incrAction = this.getFocusableAction(incrIndex, Operator.INCREMENT, actionType);
        if (incrAction) {
            return {
                index: incrIndex,
                action: incrAction,
            };
        }
        return null;
    };
    return MDCChipSetFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_5__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCChipSetFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ 1877:
/*!********************************************************!*\
  !*** ./node_modules/@material/chips/chip/constants.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCChipAnimation": function() { return /* binding */ MDCChipAnimation; },
/* harmony export */   "MDCChipAttributes": function() { return /* binding */ MDCChipAttributes; },
/* harmony export */   "MDCChipCssClasses": function() { return /* binding */ MDCChipCssClasses; },
/* harmony export */   "MDCChipEvents": function() { return /* binding */ MDCChipEvents; }
/* harmony export */ });
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
/**
 * MDCChipCssClasses provides the named constants for class names.
 */
var MDCChipCssClasses;
(function (MDCChipCssClasses) {
    MDCChipCssClasses["SELECTING"] = "mdc-evolution-chip--selecting";
    MDCChipCssClasses["DESELECTING"] = "mdc-evolution-chip--deselecting";
    MDCChipCssClasses["SELECTING_WITH_PRIMARY_ICON"] = "mdc-evolution-chip--selecting-with-primary-icon";
    MDCChipCssClasses["DESELECTING_WITH_PRIMARY_ICON"] = "mdc-evolution-chip--deselecting-with-primary-icon";
    MDCChipCssClasses["DISABLED"] = "mdc-evolution-chip--disabled";
    MDCChipCssClasses["ENTER"] = "mdc-evolution-chip--enter";
    MDCChipCssClasses["EXIT"] = "mdc-evolution-chip--exit";
    MDCChipCssClasses["SELECTED"] = "mdc-evolution-chip--selected";
    MDCChipCssClasses["HIDDEN"] = "mdc-evolution-chip--hidden";
    MDCChipCssClasses["WITH_PRIMARY_ICON"] = "mdc-evolution-chip--with-primary-icon";
})(MDCChipCssClasses || (MDCChipCssClasses = {}));
/**
 * MDCChipEvents provides the named constants for emitted events.
 */
var MDCChipEvents;
(function (MDCChipEvents) {
    MDCChipEvents["INTERACTION"] = "MDCChip:interaction";
    MDCChipEvents["NAVIGATION"] = "MDCChip:navigation";
    MDCChipEvents["ANIMATION"] = "MDCChip:animation";
})(MDCChipEvents || (MDCChipEvents = {}));
/**
 * MDCChipAttributes provides the named constants for strings used by the
 * foundation.
 */
var MDCChipAttributes;
(function (MDCChipAttributes) {
    MDCChipAttributes["DATA_REMOVED_ANNOUNCEMENT"] = "data-mdc-removed-announcement";
    MDCChipAttributes["DATA_ADDED_ANNOUNCEMENT"] = "data-mdc-added-announcement";
})(MDCChipAttributes || (MDCChipAttributes = {}));
/**
 * MDCChipAnimation provides the names of runnable animations.
 */
var MDCChipAnimation;
(function (MDCChipAnimation) {
    MDCChipAnimation["ENTER"] = "mdc-evolution-chip-enter";
    MDCChipAnimation["EXIT"] = "mdc-evolution-chip-exit";
})(MDCChipAnimation || (MDCChipAnimation = {}));
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 7568:
/*!*********************************************************!*\
  !*** ./node_modules/@material/chips/chip/foundation.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCChipFoundation": function() { return /* binding */ MDCChipFoundation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _material_animation_animationframe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/animation/animationframe */ 2195);
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/base/foundation */ 6308);
/* harmony import */ var _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/dom/keyboard */ 9502);
/* harmony import */ var _action_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action/constants */ 8510);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ 1877);
/**
 * @license
 * Copyright 2020 Google Inc.
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






var Direction;
(function (Direction) {
    Direction[Direction["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    Direction[Direction["LEFT"] = 1] = "LEFT";
    Direction[Direction["RIGHT"] = 2] = "RIGHT";
})(Direction || (Direction = {}));
var AnimationKeys;
(function (AnimationKeys) {
    AnimationKeys["SELECTION"] = "selection";
    AnimationKeys["EXIT"] = "exit";
})(AnimationKeys || (AnimationKeys = {}));
/**
 * MDCChipFoundation provides a foundation for all chips.
 */
var MDCChipFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCChipFoundation, _super);
    function MDCChipFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCChipFoundation.defaultAdapter), adapter)) || this;
        _this.animFrame = new _material_animation_animationframe__WEBPACK_IMPORTED_MODULE_1__.AnimationFrame();
        return _this;
    }
    Object.defineProperty(MDCChipFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                emitEvent: function () { return undefined; },
                getActions: function () { return []; },
                getAttribute: function () { return null; },
                getElementID: function () { return ''; },
                getOffsetWidth: function () { return 0; },
                hasClass: function () { return false; },
                isActionDisabled: function () { return false; },
                isActionFocusable: function () { return false; },
                isActionSelectable: function () { return false; },
                isActionSelected: function () { return false; },
                isRTL: function () { return false; },
                removeClass: function () { return undefined; },
                setActionDisabled: function () { return undefined; },
                setActionFocus: function () { return undefined; },
                setActionSelected: function () { return undefined; },
                setStyleProperty: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCChipFoundation.prototype.destroy = function () {
        this.animFrame.cancelAll();
    };
    MDCChipFoundation.prototype.getElementID = function () {
        return this.adapter.getElementID();
    };
    MDCChipFoundation.prototype.setDisabled = function (isDisabled) {
        var e_1, _a;
        var actions = this.getActions();
        try {
            for (var actions_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(actions), actions_1_1 = actions_1.next(); !actions_1_1.done; actions_1_1 = actions_1.next()) {
                var action = actions_1_1.value;
                this.adapter.setActionDisabled(action, isDisabled);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (actions_1_1 && !actions_1_1.done && (_a = actions_1.return)) _a.call(actions_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (isDisabled) {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipCssClasses.DISABLED);
        }
        else {
            this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipCssClasses.DISABLED);
        }
    };
    MDCChipFoundation.prototype.isDisabled = function () {
        var e_2, _a;
        var actions = this.getActions();
        try {
            for (var actions_2 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(actions), actions_2_1 = actions_2.next(); !actions_2_1.done; actions_2_1 = actions_2.next()) {
                var action = actions_2_1.value;
                if (this.adapter.isActionDisabled(action)) {
                    return true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (actions_2_1 && !actions_2_1.done && (_a = actions_2.return)) _a.call(actions_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return false;
    };
    MDCChipFoundation.prototype.getActions = function () {
        return this.adapter.getActions();
    };
    MDCChipFoundation.prototype.isActionFocusable = function (action) {
        return this.adapter.isActionFocusable(action);
    };
    MDCChipFoundation.prototype.isActionSelectable = function (action) {
        return this.adapter.isActionSelectable(action);
    };
    MDCChipFoundation.prototype.isActionSelected = function (action) {
        return this.adapter.isActionSelected(action);
    };
    MDCChipFoundation.prototype.setActionFocus = function (action, focus) {
        this.adapter.setActionFocus(action, focus);
    };
    MDCChipFoundation.prototype.setActionSelected = function (action, isSelected) {
        this.adapter.setActionSelected(action, isSelected);
        this.animateSelection(isSelected);
    };
    MDCChipFoundation.prototype.startAnimation = function (animation) {
        if (animation === _constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipAnimation.ENTER) {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipCssClasses.ENTER);
            return;
        }
        if (animation === _constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipAnimation.EXIT) {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipCssClasses.EXIT);
            return;
        }
    };
    MDCChipFoundation.prototype.handleAnimationEnd = function (event) {
        var _this = this;
        var animationName = event.animationName;
        if (animationName === _constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipAnimation.ENTER) {
            this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipCssClasses.ENTER);
            this.adapter.emitEvent(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipEvents.ANIMATION, {
                chipID: this.getElementID(),
                animation: _constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipAnimation.ENTER,
                addedAnnouncement: this.getAddedAnnouncement(),
                isComplete: true,
            });
            return;
        }
        if (animationName === _constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipAnimation.EXIT) {
            this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipCssClasses.EXIT);
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipCssClasses.HIDDEN);
            var width = this.adapter.getOffsetWidth();
            this.adapter.setStyleProperty('width', width + "px");
            // Wait two frames so the width gets applied correctly.
            this.animFrame.request(AnimationKeys.EXIT, function () {
                _this.animFrame.request(AnimationKeys.EXIT, function () {
                    _this.adapter.setStyleProperty('width', '0');
                });
            });
        }
    };
    MDCChipFoundation.prototype.handleTransitionEnd = function () {
        if (!this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipCssClasses.HIDDEN))
            return;
        this.adapter.emitEvent(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipEvents.ANIMATION, {
            chipID: this.getElementID(),
            animation: _constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipAnimation.EXIT,
            removedAnnouncement: this.getRemovedAnnouncement(),
            isComplete: true,
        });
    };
    MDCChipFoundation.prototype.handleActionInteraction = function (_a) {
        var detail = _a.detail;
        var source = detail.source, actionID = detail.actionID;
        var isSelectable = this.adapter.isActionSelectable(source);
        var isSelected = this.adapter.isActionSelected(source);
        this.adapter.emitEvent(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipEvents.INTERACTION, {
            chipID: this.getElementID(),
            shouldRemove: this.shouldRemove(detail),
            actionID: actionID,
            isSelectable: isSelectable,
            isSelected: isSelected,
            source: source,
        });
    };
    MDCChipFoundation.prototype.handleActionNavigation = function (_a) {
        var detail = _a.detail;
        var source = detail.source, key = detail.key;
        var isRTL = this.adapter.isRTL();
        var isTrailingActionFocusable = this.adapter.isActionFocusable(_action_constants__WEBPACK_IMPORTED_MODULE_3__.MDCChipActionType.TRAILING);
        var isPrimaryActionFocusable = this.adapter.isActionFocusable(_action_constants__WEBPACK_IMPORTED_MODULE_3__.MDCChipActionType.PRIMARY);
        var dir = this.directionFromKey(key, isRTL);
        var shouldNavigateToTrailing = source === _action_constants__WEBPACK_IMPORTED_MODULE_3__.MDCChipActionType.PRIMARY &&
            dir === Direction.RIGHT && isTrailingActionFocusable;
        var shouldNavigateToPrimary = source === _action_constants__WEBPACK_IMPORTED_MODULE_3__.MDCChipActionType.TRAILING &&
            dir === Direction.LEFT && isPrimaryActionFocusable;
        if (shouldNavigateToTrailing) {
            this.navigateActions({ from: source, to: _action_constants__WEBPACK_IMPORTED_MODULE_3__.MDCChipActionType.TRAILING });
            return;
        }
        if (shouldNavigateToPrimary) {
            this.navigateActions({ from: source, to: _action_constants__WEBPACK_IMPORTED_MODULE_3__.MDCChipActionType.PRIMARY });
            return;
        }
        this.adapter.emitEvent(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipEvents.NAVIGATION, {
            chipID: this.getElementID(),
            isRTL: isRTL,
            source: source,
            key: key,
        });
    };
    MDCChipFoundation.prototype.directionFromKey = function (key, isRTL) {
        var isLeftKey = key === _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_4__.KEY.ARROW_LEFT;
        var isRightKey = key === _material_dom_keyboard__WEBPACK_IMPORTED_MODULE_4__.KEY.ARROW_RIGHT;
        if (!isRTL && isLeftKey || isRTL && isRightKey) {
            return Direction.LEFT;
        }
        if (!isRTL && isRightKey || isRTL && isLeftKey) {
            return Direction.RIGHT;
        }
        return Direction.UNSPECIFIED;
    };
    MDCChipFoundation.prototype.navigateActions = function (nav) {
        this.adapter.setActionFocus(nav.from, _action_constants__WEBPACK_IMPORTED_MODULE_3__.MDCChipActionFocusBehavior.NOT_FOCUSABLE);
        this.adapter.setActionFocus(nav.to, _action_constants__WEBPACK_IMPORTED_MODULE_3__.MDCChipActionFocusBehavior.FOCUSABLE_AND_FOCUSED);
    };
    MDCChipFoundation.prototype.shouldRemove = function (_a) {
        var source = _a.source, trigger = _a.trigger;
        if (trigger === _action_constants__WEBPACK_IMPORTED_MODULE_3__.MDCChipActionInteractionTrigger.BACKSPACE_KEY ||
            trigger === _action_constants__WEBPACK_IMPORTED_MODULE_3__.MDCChipActionInteractionTrigger.DELETE_KEY) {
            return true;
        }
        return source === _action_constants__WEBPACK_IMPORTED_MODULE_3__.MDCChipActionType.TRAILING;
    };
    MDCChipFoundation.prototype.getRemovedAnnouncement = function () {
        var msg = this.adapter.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipAttributes.DATA_REMOVED_ANNOUNCEMENT);
        return msg || undefined;
    };
    MDCChipFoundation.prototype.getAddedAnnouncement = function () {
        var msg = this.adapter.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipAttributes.DATA_ADDED_ANNOUNCEMENT);
        return msg || undefined;
    };
    MDCChipFoundation.prototype.animateSelection = function (isSelected) {
        var _this = this;
        this.resetAnimationStyles();
        // Wait two frames to ensure the animation classes are unset
        this.animFrame.request(AnimationKeys.SELECTION, function () {
            _this.animFrame.request(AnimationKeys.SELECTION, function () {
                _this.updateSelectionStyles(isSelected);
            });
        });
    };
    MDCChipFoundation.prototype.resetAnimationStyles = function () {
        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipCssClasses.SELECTING);
        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipCssClasses.DESELECTING);
        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipCssClasses.SELECTING_WITH_PRIMARY_ICON);
        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipCssClasses.DESELECTING_WITH_PRIMARY_ICON);
    };
    MDCChipFoundation.prototype.updateSelectionStyles = function (isSelected) {
        var _this = this;
        var hasIcon = this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipCssClasses.WITH_PRIMARY_ICON);
        if (hasIcon && isSelected) {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipCssClasses.SELECTING_WITH_PRIMARY_ICON);
            this.animFrame.request(AnimationKeys.SELECTION, function () {
                _this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipCssClasses.SELECTED);
            });
            return;
        }
        if (hasIcon && !isSelected) {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipCssClasses.DESELECTING_WITH_PRIMARY_ICON);
            this.animFrame.request(AnimationKeys.SELECTION, function () {
                _this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipCssClasses.SELECTED);
            });
            return;
        }
        if (isSelected) {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipCssClasses.SELECTING);
            this.animFrame.request(AnimationKeys.SELECTION, function () {
                _this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipCssClasses.SELECTED);
            });
            return;
        }
        if (!isSelected) {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipCssClasses.DESELECTING);
            this.animFrame.request(AnimationKeys.SELECTION, function () {
                _this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__.MDCChipCssClasses.SELECTED);
            });
            return;
        }
    };
    return MDCChipFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_5__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCChipFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ 8515:
/*!***************************************************************!*\
  !*** ./node_modules/@material/circular-progress/constants.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": function() { return /* binding */ cssClasses; },
/* harmony export */   "strings": function() { return /* binding */ strings; }
/* harmony export */ });
/**
 * @license
 * Copyright 2020 Google Inc.
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
/**
 * CSS class names used in component.
 */
var cssClasses = {
    INDETERMINATE_CLASS: 'mdc-circular-progress--indeterminate',
    CLOSED_CLASS: 'mdc-circular-progress--closed',
};
/**
 * Attributes and selectors used in component.
 */
var strings = {
    ARIA_HIDDEN: 'aria-hidden',
    ARIA_VALUENOW: 'aria-valuenow',
    DETERMINATE_CIRCLE_SELECTOR: '.mdc-circular-progress__determinate-circle',
    RADIUS: 'r',
    STROKE_DASHOFFSET: 'stroke-dashoffset',
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 4295:
/*!****************************************************************!*\
  !*** ./node_modules/@material/circular-progress/foundation.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCCircularProgressFoundation": function() { return /* binding */ MDCCircularProgressFoundation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ 6308);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ 8515);
/**
 * @license
 * Copyright 2020 Google Inc.
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



var MDCCircularProgressFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCCircularProgressFoundation, _super);
    function MDCCircularProgressFoundation(adapter) {
        return _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCCircularProgressFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCCircularProgressFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCCircularProgressFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCCircularProgressFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                getDeterminateCircleAttribute: function () { return null; },
                hasClass: function () { return false; },
                removeClass: function () { return undefined; },
                removeAttribute: function () { return undefined; },
                setAttribute: function () { return undefined; },
                setDeterminateCircleAttribute: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCCircularProgressFoundation.prototype.init = function () {
        this.closed = this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.CLOSED_CLASS);
        this.determinate = !this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.INDETERMINATE_CLASS);
        this.progress = 0;
        if (this.determinate) {
            this.adapter.setAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_VALUENOW, this.progress.toString());
        }
        this.radius =
            Number(this.adapter.getDeterminateCircleAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.RADIUS));
    };
    /**
     * Sets whether the progress indicator is in determinate mode.
     * @param determinate Whether the indicator should be determinate.
     */
    MDCCircularProgressFoundation.prototype.setDeterminate = function (determinate) {
        this.determinate = determinate;
        if (this.determinate) {
            this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.INDETERMINATE_CLASS);
            this.setProgress(this.progress);
        }
        else {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.INDETERMINATE_CLASS);
            this.adapter.removeAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_VALUENOW);
        }
    };
    MDCCircularProgressFoundation.prototype.isDeterminate = function () {
        return this.determinate;
    };
    /**
     * Sets the current progress value. In indeterminate mode, this has no
     * visual effect but will be reflected if the indicator is switched to
     * determinate mode.
     * @param value The current progress value, which must be between 0 and 1.
     */
    MDCCircularProgressFoundation.prototype.setProgress = function (value) {
        this.progress = value;
        if (this.determinate) {
            var unfilledArcLength = (1 - this.progress) * (2 * Math.PI * this.radius);
            this.adapter.setDeterminateCircleAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.STROKE_DASHOFFSET, "" + unfilledArcLength);
            this.adapter.setAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_VALUENOW, this.progress.toString());
        }
    };
    MDCCircularProgressFoundation.prototype.getProgress = function () {
        return this.progress;
    };
    /**
     * Shows the progress indicator.
     */
    MDCCircularProgressFoundation.prototype.open = function () {
        this.closed = false;
        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.CLOSED_CLASS);
        this.adapter.removeAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_HIDDEN);
    };
    /**
     * Hides the progress indicator
     */
    MDCCircularProgressFoundation.prototype.close = function () {
        this.closed = true;
        this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.CLOSED_CLASS);
        this.adapter.setAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_HIDDEN, 'true');
    };
    /**
     * @return Returns whether the progress indicator is hidden.
     */
    MDCCircularProgressFoundation.prototype.isClosed = function () {
        return this.closed;
    };
    return MDCCircularProgressFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCCircularProgressFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./node_modules/@material/data-table/constants.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortValue": function() { return /* binding */ SortValue; },
/* harmony export */   "attributes": function() { return /* binding */ attributes; },
/* harmony export */   "cssClasses": function() { return /* binding */ cssClasses; },
/* harmony export */   "dataAttributes": function() { return /* binding */ dataAttributes; },
/* harmony export */   "events": function() { return /* binding */ events; },
/* harmony export */   "messages": function() { return /* binding */ messages; },
/* harmony export */   "selectors": function() { return /* binding */ selectors; },
/* harmony export */   "strings": function() { return /* binding */ strings; }
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google Inc.
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
/**
 * CSS class names used in component.
 */
var cssClasses = {
    CELL: 'mdc-data-table__cell',
    CELL_NUMERIC: 'mdc-data-table__cell--numeric',
    CONTENT: 'mdc-data-table__content',
    HEADER_CELL: 'mdc-data-table__header-cell',
    HEADER_CELL_LABEL: 'mdc-data-table__header-cell-label',
    HEADER_CELL_SORTED: 'mdc-data-table__header-cell--sorted',
    HEADER_CELL_SORTED_DESCENDING: 'mdc-data-table__header-cell--sorted-descending',
    HEADER_CELL_WITH_SORT: 'mdc-data-table__header-cell--with-sort',
    HEADER_CELL_WRAPPER: 'mdc-data-table__header-cell-wrapper',
    HEADER_ROW: 'mdc-data-table__header-row',
    HEADER_ROW_CHECKBOX: 'mdc-data-table__header-row-checkbox',
    IN_PROGRESS: 'mdc-data-table--in-progress',
    LINEAR_PROGRESS: 'mdc-data-table__linear-progress',
    PAGINATION_ROWS_PER_PAGE_LABEL: 'mdc-data-table__pagination-rows-per-page-label',
    PAGINATION_ROWS_PER_PAGE_SELECT: 'mdc-data-table__pagination-rows-per-page-select',
    PROGRESS_INDICATOR: 'mdc-data-table__progress-indicator',
    ROOT: 'mdc-data-table',
    ROW: 'mdc-data-table__row',
    ROW_CHECKBOX: 'mdc-data-table__row-checkbox',
    ROW_SELECTED: 'mdc-data-table__row--selected',
    SORT_ICON_BUTTON: 'mdc-data-table__sort-icon-button',
    SORT_STATUS_LABEL: 'mdc-data-table__sort-status-label',
    TABLE_CONTAINER: 'mdc-data-table__table-container',
};
/**
 * DOM attributes used in component.
 */
var attributes = {
    ARIA_SELECTED: 'aria-selected',
    ARIA_SORT: 'aria-sort',
};
/**
 * List of data attributes used in component.
 */
var dataAttributes = {
    COLUMN_ID: 'data-column-id',
    ROW_ID: 'data-row-id',
};
/**
 * CSS selectors used in component.
 */
var selectors = {
    CONTENT: "." + cssClasses.CONTENT,
    HEADER_CELL: "." + cssClasses.HEADER_CELL,
    HEADER_CELL_WITH_SORT: "." + cssClasses.HEADER_CELL_WITH_SORT,
    HEADER_ROW: "." + cssClasses.HEADER_ROW,
    HEADER_ROW_CHECKBOX: "." + cssClasses.HEADER_ROW_CHECKBOX,
    PROGRESS_INDICATOR: "." + cssClasses.PROGRESS_INDICATOR,
    ROW: "." + cssClasses.ROW,
    ROW_CHECKBOX: "." + cssClasses.ROW_CHECKBOX,
    ROW_SELECTED: "." + cssClasses.ROW_SELECTED,
    SORT_ICON_BUTTON: "." + cssClasses.SORT_ICON_BUTTON,
    SORT_STATUS_LABEL: "." + cssClasses.SORT_STATUS_LABEL,
};
/**
 * Messages used in component.
 */
var messages = {
    SORTED_IN_DESCENDING: 'Sorted in descending order',
    SORTED_IN_ASCENDING: 'Sorted in ascending order',
};
/**
 * Attributes and selectors used in component.
 * @deprecated Use `attributes`, `dataAttributes` and `selectors` instead.
 */
var strings = {
    ARIA_SELECTED: attributes.ARIA_SELECTED,
    ARIA_SORT: attributes.ARIA_SORT,
    DATA_ROW_ID_ATTR: dataAttributes.ROW_ID,
    HEADER_ROW_CHECKBOX_SELECTOR: selectors.HEADER_ROW_CHECKBOX,
    ROW_CHECKBOX_SELECTOR: selectors.ROW_CHECKBOX,
    ROW_SELECTED_SELECTOR: selectors.ROW_SELECTED,
    ROW_SELECTOR: selectors.ROW,
};
/**
 * Sort values defined by ARIA.
 * See https://www.w3.org/WAI/PF/aria/states_and_properties#aria-sort
 */
var SortValue;
(function (SortValue) {
    // Items are sorted in ascending order by this column.
    SortValue["ASCENDING"] = "ascending";
    // Items are sorted in descending order by this column.
    SortValue["DESCENDING"] = "descending";
    // There is no defined sort applied to the column.
    SortValue["NONE"] = "none";
    // A sort algorithm other than ascending or descending has been applied.
    SortValue["OTHER"] = "other";
})(SortValue || (SortValue = {}));
/**
 * Event names used in component.
 */
var events = {
    ROW_CLICK: 'MDCDataTable:rowClick',
    ROW_SELECTION_CHANGED: 'MDCDataTable:rowSelectionChanged',
    SELECTED_ALL: 'MDCDataTable:selectedAll',
    SORTED: 'MDCDataTable:sorted',
    UNSELECTED_ALL: 'MDCDataTable:unselectedAll',
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 75:
/*!*********************************************************!*\
  !*** ./node_modules/@material/data-table/foundation.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCDataTableFoundation": function() { return /* binding */ MDCDataTableFoundation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ 6308);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ 8433);
/**
 * @license
 * Copyright 2019 Google Inc.
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



/**
 * The Foundation of data table component containing pure business logic, any
 * logic requiring DOM manipulation are delegated to adapter methods.
 */
var MDCDataTableFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCDataTableFoundation, _super);
    function MDCDataTableFoundation(adapter) {
        return _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCDataTableFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCDataTableFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                addClassAtRowIndex: function () { return undefined; },
                getAttributeByHeaderCellIndex: function () { return ''; },
                getHeaderCellCount: function () { return 0; },
                getHeaderCellElements: function () { return []; },
                getRowCount: function () { return 0; },
                getRowElements: function () { return []; },
                getRowIdAtIndex: function () { return ''; },
                getRowIndexByChildElement: function () { return 0; },
                getSelectedRowCount: function () { return 0; },
                getTableContainerHeight: function () { return 0; },
                getTableHeaderHeight: function () { return 0; },
                isCheckboxAtRowIndexChecked: function () { return false; },
                isHeaderRowCheckboxChecked: function () { return false; },
                isRowsSelectable: function () { return false; },
                notifyRowSelectionChanged: function () { return undefined; },
                notifySelectedAll: function () { return undefined; },
                notifySortAction: function () { return undefined; },
                notifyUnselectedAll: function () { return undefined; },
                notifyRowClick: function () { return undefined; },
                registerHeaderRowCheckbox: function () { return undefined; },
                registerRowCheckboxes: function () { return undefined; },
                removeClass: function () { return undefined; },
                removeClassAtRowIndex: function () { return undefined; },
                removeClassNameByHeaderCellIndex: function () { return undefined; },
                setAttributeAtRowIndex: function () { return undefined; },
                setAttributeByHeaderCellIndex: function () { return undefined; },
                setClassNameByHeaderCellIndex: function () { return undefined; },
                setHeaderRowCheckboxChecked: function () { return undefined; },
                setHeaderRowCheckboxIndeterminate: function () { return undefined; },
                setProgressIndicatorStyles: function () { return undefined; },
                setRowCheckboxCheckedAtIndex: function () { return undefined; },
                setSortStatusLabelByHeaderCellIndex: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Re-initializes header row checkbox and row checkboxes when selectable rows
     * are added or removed from table. Use this if registering checkbox is
     * synchronous.
     */
    MDCDataTableFoundation.prototype.layout = function () {
        if (this.adapter.isRowsSelectable()) {
            this.adapter.registerHeaderRowCheckbox();
            this.adapter.registerRowCheckboxes();
            this.setHeaderRowCheckboxState();
        }
    };
    /**
     * Re-initializes header row checkbox and row checkboxes when selectable rows
     * are added or removed from table. Use this if registering checkbox is
     * asynchronous.
     */
    MDCDataTableFoundation.prototype.layoutAsync = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.adapter.isRowsSelectable()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.adapter.registerHeaderRowCheckbox()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.adapter.registerRowCheckboxes()];
                    case 2:
                        _a.sent();
                        this.setHeaderRowCheckboxState();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return Returns array of row elements.
     */
    MDCDataTableFoundation.prototype.getRows = function () {
        return this.adapter.getRowElements();
    };
    /**
     * @return Array of header cell elements.
     */
    MDCDataTableFoundation.prototype.getHeaderCells = function () {
        return this.adapter.getHeaderCellElements();
    };
    /**
     * Sets selected row ids. Overwrites previously selected rows.
     * @param rowIds Array of row ids that needs to be selected.
     */
    MDCDataTableFoundation.prototype.setSelectedRowIds = function (rowIds) {
        for (var rowIndex = 0; rowIndex < this.adapter.getRowCount(); rowIndex++) {
            var rowId = this.adapter.getRowIdAtIndex(rowIndex);
            var isSelected = false;
            if (rowId && rowIds.indexOf(rowId) >= 0) {
                isSelected = true;
            }
            this.adapter.setRowCheckboxCheckedAtIndex(rowIndex, isSelected);
            this.selectRowAtIndex(rowIndex, isSelected);
        }
        this.setHeaderRowCheckboxState();
    };
    /**
     * @return Returns array of all row ids.
     */
    MDCDataTableFoundation.prototype.getRowIds = function () {
        var rowIds = [];
        for (var rowIndex = 0; rowIndex < this.adapter.getRowCount(); rowIndex++) {
            rowIds.push(this.adapter.getRowIdAtIndex(rowIndex));
        }
        return rowIds;
    };
    /**
     * @return Returns array of selected row ids.
     */
    MDCDataTableFoundation.prototype.getSelectedRowIds = function () {
        var selectedRowIds = [];
        for (var rowIndex = 0; rowIndex < this.adapter.getRowCount(); rowIndex++) {
            if (this.adapter.isCheckboxAtRowIndexChecked(rowIndex)) {
                selectedRowIds.push(this.adapter.getRowIdAtIndex(rowIndex));
            }
        }
        return selectedRowIds;
    };
    /**
     * Handles header row checkbox change event.
     */
    MDCDataTableFoundation.prototype.handleHeaderRowCheckboxChange = function () {
        var isHeaderChecked = this.adapter.isHeaderRowCheckboxChecked();
        for (var rowIndex = 0; rowIndex < this.adapter.getRowCount(); rowIndex++) {
            this.adapter.setRowCheckboxCheckedAtIndex(rowIndex, isHeaderChecked);
            this.selectRowAtIndex(rowIndex, isHeaderChecked);
        }
        if (isHeaderChecked) {
            this.adapter.notifySelectedAll();
        }
        else {
            this.adapter.notifyUnselectedAll();
        }
    };
    /**
     * Handles change event originated from row checkboxes.
     */
    MDCDataTableFoundation.prototype.handleRowCheckboxChange = function (event) {
        var rowIndex = this.adapter.getRowIndexByChildElement(event.target);
        if (rowIndex === -1) {
            return;
        }
        var selected = this.adapter.isCheckboxAtRowIndexChecked(rowIndex);
        this.selectRowAtIndex(rowIndex, selected);
        this.setHeaderRowCheckboxState();
        var rowId = this.adapter.getRowIdAtIndex(rowIndex);
        this.adapter.notifyRowSelectionChanged({ rowId: rowId, rowIndex: rowIndex, selected: selected });
    };
    /**
     * Handles sort action on sortable header cell.
     */
    MDCDataTableFoundation.prototype.handleSortAction = function (eventData) {
        var columnId = eventData.columnId, columnIndex = eventData.columnIndex, headerCell = eventData.headerCell;
        // Reset sort attributes / classes on other header cells.
        for (var index = 0; index < this.adapter.getHeaderCellCount(); index++) {
            if (index === columnIndex) {
                continue;
            }
            this.adapter.removeClassNameByHeaderCellIndex(index, _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HEADER_CELL_SORTED);
            this.adapter.removeClassNameByHeaderCellIndex(index, _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HEADER_CELL_SORTED_DESCENDING);
            this.adapter.setAttributeByHeaderCellIndex(index, _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_SORT, _constants__WEBPACK_IMPORTED_MODULE_1__.SortValue.NONE);
            this.adapter.setSortStatusLabelByHeaderCellIndex(index, _constants__WEBPACK_IMPORTED_MODULE_1__.SortValue.NONE);
        }
        // Set appropriate sort attributes / classes on target header cell.
        this.adapter.setClassNameByHeaderCellIndex(columnIndex, _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HEADER_CELL_SORTED);
        var currentSortValue = this.adapter.getAttributeByHeaderCellIndex(columnIndex, _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_SORT);
        var sortValue = _constants__WEBPACK_IMPORTED_MODULE_1__.SortValue.NONE;
        // Set to descending if sorted on ascending order.
        if (currentSortValue === _constants__WEBPACK_IMPORTED_MODULE_1__.SortValue.ASCENDING) {
            this.adapter.setClassNameByHeaderCellIndex(columnIndex, _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HEADER_CELL_SORTED_DESCENDING);
            this.adapter.setAttributeByHeaderCellIndex(columnIndex, _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_SORT, _constants__WEBPACK_IMPORTED_MODULE_1__.SortValue.DESCENDING);
            sortValue = _constants__WEBPACK_IMPORTED_MODULE_1__.SortValue.DESCENDING;
            // Set to ascending if sorted on descending order.
        }
        else if (currentSortValue === _constants__WEBPACK_IMPORTED_MODULE_1__.SortValue.DESCENDING) {
            this.adapter.removeClassNameByHeaderCellIndex(columnIndex, _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HEADER_CELL_SORTED_DESCENDING);
            this.adapter.setAttributeByHeaderCellIndex(columnIndex, _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_SORT, _constants__WEBPACK_IMPORTED_MODULE_1__.SortValue.ASCENDING);
            sortValue = _constants__WEBPACK_IMPORTED_MODULE_1__.SortValue.ASCENDING;
        }
        else {
            // Set to ascending by default when not sorted.
            this.adapter.setAttributeByHeaderCellIndex(columnIndex, _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_SORT, _constants__WEBPACK_IMPORTED_MODULE_1__.SortValue.ASCENDING);
            sortValue = _constants__WEBPACK_IMPORTED_MODULE_1__.SortValue.ASCENDING;
        }
        this.adapter.setSortStatusLabelByHeaderCellIndex(columnIndex, sortValue);
        this.adapter.notifySortAction({
            columnId: columnId,
            columnIndex: columnIndex,
            headerCell: headerCell,
            sortValue: sortValue,
        });
    };
    /**
     * Handles data table row click event.
     */
    MDCDataTableFoundation.prototype.handleRowClick = function (_a) {
        var rowId = _a.rowId, row = _a.row;
        this.adapter.notifyRowClick({
            rowId: rowId,
            row: row,
        });
    };
    /**
     * Shows progress indicator blocking only the table body content when in
     * loading state.
     */
    MDCDataTableFoundation.prototype.showProgress = function () {
        var tableHeaderHeight = this.adapter.getTableHeaderHeight();
        // Calculate the height of table content (Not scroll content) excluding
        // header row height.
        var height = this.adapter.getTableContainerHeight() - tableHeaderHeight;
        var top = tableHeaderHeight;
        this.adapter.setProgressIndicatorStyles({
            height: height + "px",
            top: top + "px",
        });
        this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.IN_PROGRESS);
    };
    /**
     * Hides progress indicator when data table is finished loading.
     */
    MDCDataTableFoundation.prototype.hideProgress = function () {
        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.IN_PROGRESS);
    };
    /**
     * Updates header row checkbox state based on number of rows selected.
     */
    MDCDataTableFoundation.prototype.setHeaderRowCheckboxState = function () {
        if (this.adapter.getSelectedRowCount() === 0) {
            this.adapter.setHeaderRowCheckboxChecked(false);
            this.adapter.setHeaderRowCheckboxIndeterminate(false);
        }
        else if (this.adapter.getSelectedRowCount() === this.adapter.getRowCount()) {
            this.adapter.setHeaderRowCheckboxChecked(true);
            this.adapter.setHeaderRowCheckboxIndeterminate(false);
        }
        else {
            this.adapter.setHeaderRowCheckboxIndeterminate(true);
            this.adapter.setHeaderRowCheckboxChecked(false);
        }
    };
    /**
     * Sets the attributes of row element based on selection state.
     */
    MDCDataTableFoundation.prototype.selectRowAtIndex = function (rowIndex, selected) {
        if (selected) {
            this.adapter.addClassAtRowIndex(rowIndex, _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.ROW_SELECTED);
            this.adapter.setAttributeAtRowIndex(rowIndex, _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_SELECTED, 'true');
        }
        else {
            this.adapter.removeClassAtRowIndex(rowIndex, _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.ROW_SELECTED);
            this.adapter.setAttributeAtRowIndex(rowIndex, _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_SELECTED, 'false');
        }
    };
    return MDCDataTableFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ 9742:
/*!****************************************************!*\
  !*** ./node_modules/@material/dialog/constants.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": function() { return /* binding */ cssClasses; },
/* harmony export */   "numbers": function() { return /* binding */ numbers; },
/* harmony export */   "strings": function() { return /* binding */ strings; }
/* harmony export */ });
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
var cssClasses = {
    CLOSING: 'mdc-dialog--closing',
    OPEN: 'mdc-dialog--open',
    OPENING: 'mdc-dialog--opening',
    SCROLLABLE: 'mdc-dialog--scrollable',
    SCROLL_LOCK: 'mdc-dialog-scroll-lock',
    STACKED: 'mdc-dialog--stacked',
    FULLSCREEN: 'mdc-dialog--fullscreen',
    // Class for showing a scroll divider on full-screen dialog header element.
    // Should only be displayed on scrollable content, when the dialog content is
    // scrolled "underneath" the header.
    SCROLL_DIVIDER_HEADER: 'mdc-dialog-scroll-divider-header',
    // Class for showing a scroll divider on a full-screen dialog footer element.
    // Should only be displayed on scrolalble content, when the dialog content is
    // obscured "underneath" the footer.
    SCROLL_DIVIDER_FOOTER: 'mdc-dialog-scroll-divider-footer',
    // The "surface scrim" is a scrim covering only the surface of a dialog. This
    // is used in situations where a confirmation dialog is shown over an already
    // opened full-screen dialog. On larger screen-sizes, the full-screen dialog
    // is sized as a modal and so in these situations we display a "surface scrim"
    // to prevent a "double scrim" (where the scrim from the secondary
    // confirmation dialog would overlap with the scrim from the full-screen
    // dialog).
    SURFACE_SCRIM_SHOWN: 'mdc-dialog__surface-scrim--shown',
    // "Showing" animating class for the surface-scrim.
    SURFACE_SCRIM_SHOWING: 'mdc-dialog__surface-scrim--showing',
    // "Hiding" animating class for the surface-scrim.
    SURFACE_SCRIM_HIDING: 'mdc-dialog__surface-scrim--hiding',
    // Class to hide a dialog's scrim (used in conjunction with a surface-scrim).
    // Note that we only hide the original scrim rather than removing it entirely
    // to prevent interactions with the content behind this scrim, and to capture
    // scrim clicks.
    SCRIM_HIDDEN: 'mdc-dialog__scrim--hidden',
};
var strings = {
    ACTION_ATTRIBUTE: 'data-mdc-dialog-action',
    BUTTON_DEFAULT_ATTRIBUTE: 'data-mdc-dialog-button-default',
    BUTTON_SELECTOR: '.mdc-dialog__button',
    CLOSED_EVENT: 'MDCDialog:closed',
    CLOSE_ACTION: 'close',
    CLOSING_EVENT: 'MDCDialog:closing',
    CONTAINER_SELECTOR: '.mdc-dialog__container',
    CONTENT_SELECTOR: '.mdc-dialog__content',
    DESTROY_ACTION: 'destroy',
    INITIAL_FOCUS_ATTRIBUTE: 'data-mdc-dialog-initial-focus',
    OPENED_EVENT: 'MDCDialog:opened',
    OPENING_EVENT: 'MDCDialog:opening',
    SCRIM_SELECTOR: '.mdc-dialog__scrim',
    SUPPRESS_DEFAULT_PRESS_SELECTOR: [
        'textarea',
        '.mdc-menu .mdc-list-item',
        '.mdc-menu .mdc-deprecated-list-item',
    ].join(', '),
    SURFACE_SELECTOR: '.mdc-dialog__surface',
};
var numbers = {
    DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
    DIALOG_ANIMATION_OPEN_TIME_MS: 150,
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 4687:
/*!*****************************************************!*\
  !*** ./node_modules/@material/dialog/foundation.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCDialogFoundation": function() { return /* binding */ MDCDialogFoundation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _material_animation_animationframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/animation/animationframe */ 2195);
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/base/foundation */ 6308);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ 9742);
/**
 * @license
 * Copyright 2017 Google Inc.
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




var AnimationKeys;
(function (AnimationKeys) {
    AnimationKeys["POLL_SCROLL_POS"] = "poll_scroll_position";
    AnimationKeys["POLL_LAYOUT_CHANGE"] = "poll_layout_change";
})(AnimationKeys || (AnimationKeys = {}));
var MDCDialogFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCDialogFoundation, _super);
    function MDCDialogFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCDialogFoundation.defaultAdapter), adapter)) || this;
        _this.dialogOpen = false;
        _this.isFullscreen = false;
        _this.animationFrame = 0;
        _this.animationTimer = 0;
        _this.escapeKeyAction = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.CLOSE_ACTION;
        _this.scrimClickAction = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.CLOSE_ACTION;
        _this.autoStackButtons = true;
        _this.areButtonsStacked = false;
        _this.suppressDefaultPressSelector = _constants__WEBPACK_IMPORTED_MODULE_1__.strings.SUPPRESS_DEFAULT_PRESS_SELECTOR;
        _this.animFrame = new _material_animation_animationframe__WEBPACK_IMPORTED_MODULE_2__.AnimationFrame();
        _this.contentScrollHandler = function () {
            _this.handleScrollEvent();
        };
        _this.windowResizeHandler = function () {
            _this.layout();
        };
        _this.windowOrientationChangeHandler = function () {
            _this.layout();
        };
        return _this;
    }
    Object.defineProperty(MDCDialogFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "numbers", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "defaultAdapter", {
        get: function () {
            return {
                addBodyClass: function () { return undefined; },
                addClass: function () { return undefined; },
                areButtonsStacked: function () { return false; },
                clickDefaultButton: function () { return undefined; },
                eventTargetMatches: function () { return false; },
                getActionFromEvent: function () { return ''; },
                getInitialFocusEl: function () { return null; },
                hasClass: function () { return false; },
                isContentScrollable: function () { return false; },
                notifyClosed: function () { return undefined; },
                notifyClosing: function () { return undefined; },
                notifyOpened: function () { return undefined; },
                notifyOpening: function () { return undefined; },
                releaseFocus: function () { return undefined; },
                removeBodyClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                reverseButtons: function () { return undefined; },
                trapFocus: function () { return undefined; },
                registerContentEventHandler: function () { return undefined; },
                deregisterContentEventHandler: function () { return undefined; },
                isScrollableContentAtTop: function () { return false; },
                isScrollableContentAtBottom: function () { return false; },
                registerWindowEventHandler: function () { return undefined; },
                deregisterWindowEventHandler: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCDialogFoundation.prototype.init = function () {
        if (this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.STACKED)) {
            this.setAutoStackButtons(false);
        }
        this.isFullscreen = this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.FULLSCREEN);
    };
    MDCDialogFoundation.prototype.destroy = function () {
        if (this.animationTimer) {
            clearTimeout(this.animationTimer);
            this.handleAnimationTimerEnd();
        }
        if (this.isFullscreen) {
            this.adapter.deregisterContentEventHandler('scroll', this.contentScrollHandler);
        }
        this.animFrame.cancelAll();
        this.adapter.deregisterWindowEventHandler('resize', this.windowResizeHandler);
        this.adapter.deregisterWindowEventHandler('orientationchange', this.windowOrientationChangeHandler);
    };
    MDCDialogFoundation.prototype.open = function (dialogOptions) {
        var _this = this;
        this.dialogOpen = true;
        this.adapter.notifyOpening();
        this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.OPENING);
        if (this.isFullscreen) {
            // A scroll event listener is registered even if the dialog is not
            // scrollable on open, since the window resize event, or orientation
            // change may make the dialog scrollable after it is opened.
            this.adapter.registerContentEventHandler('scroll', this.contentScrollHandler);
        }
        if (dialogOptions && dialogOptions.isAboveFullscreenDialog) {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SCRIM_HIDDEN);
        }
        this.adapter.registerWindowEventHandler('resize', this.windowResizeHandler);
        this.adapter.registerWindowEventHandler('orientationchange', this.windowOrientationChangeHandler);
        // Wait a frame once display is no longer "none", to establish basis for
        // animation
        this.runNextAnimationFrame(function () {
            _this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.OPEN);
            _this.adapter.addBodyClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SCROLL_LOCK);
            _this.layout();
            _this.animationTimer = setTimeout(function () {
                _this.handleAnimationTimerEnd();
                _this.adapter.trapFocus(_this.adapter.getInitialFocusEl());
                _this.adapter.notifyOpened();
            }, _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.DIALOG_ANIMATION_OPEN_TIME_MS);
        });
    };
    MDCDialogFoundation.prototype.close = function (action) {
        var _this = this;
        if (action === void 0) { action = ''; }
        if (!this.dialogOpen) {
            // Avoid redundant close calls (and events), e.g. from keydown on elements
            // that inherently emit click
            return;
        }
        this.dialogOpen = false;
        this.adapter.notifyClosing(action);
        this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.CLOSING);
        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.OPEN);
        this.adapter.removeBodyClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SCROLL_LOCK);
        if (this.isFullscreen) {
            this.adapter.deregisterContentEventHandler('scroll', this.contentScrollHandler);
        }
        this.adapter.deregisterWindowEventHandler('resize', this.windowResizeHandler);
        this.adapter.deregisterWindowEventHandler('orientationchange', this.windowOrientationChangeHandler);
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = 0;
        clearTimeout(this.animationTimer);
        this.animationTimer = setTimeout(function () {
            _this.adapter.releaseFocus();
            _this.handleAnimationTimerEnd();
            _this.adapter.notifyClosed(action);
        }, _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.DIALOG_ANIMATION_CLOSE_TIME_MS);
    };
    /**
     * Used only in instances of showing a secondary dialog over a full-screen
     * dialog. Shows the "surface scrim" displayed over the full-screen dialog.
     */
    MDCDialogFoundation.prototype.showSurfaceScrim = function () {
        var _this = this;
        this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SURFACE_SCRIM_SHOWING);
        this.runNextAnimationFrame(function () {
            _this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SURFACE_SCRIM_SHOWN);
        });
    };
    /**
     * Used only in instances of showing a secondary dialog over a full-screen
     * dialog. Hides the "surface scrim" displayed over the full-screen dialog.
     */
    MDCDialogFoundation.prototype.hideSurfaceScrim = function () {
        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SURFACE_SCRIM_SHOWN);
        this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SURFACE_SCRIM_HIDING);
    };
    /**
     * Handles `transitionend` event triggered when surface scrim animation is
     * finished.
     */
    MDCDialogFoundation.prototype.handleSurfaceScrimTransitionEnd = function () {
        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SURFACE_SCRIM_HIDING);
        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SURFACE_SCRIM_SHOWING);
    };
    MDCDialogFoundation.prototype.isOpen = function () {
        return this.dialogOpen;
    };
    MDCDialogFoundation.prototype.getEscapeKeyAction = function () {
        return this.escapeKeyAction;
    };
    MDCDialogFoundation.prototype.setEscapeKeyAction = function (action) {
        this.escapeKeyAction = action;
    };
    MDCDialogFoundation.prototype.getScrimClickAction = function () {
        return this.scrimClickAction;
    };
    MDCDialogFoundation.prototype.setScrimClickAction = function (action) {
        this.scrimClickAction = action;
    };
    MDCDialogFoundation.prototype.getAutoStackButtons = function () {
        return this.autoStackButtons;
    };
    MDCDialogFoundation.prototype.setAutoStackButtons = function (autoStack) {
        this.autoStackButtons = autoStack;
    };
    MDCDialogFoundation.prototype.getSuppressDefaultPressSelector = function () {
        return this.suppressDefaultPressSelector;
    };
    MDCDialogFoundation.prototype.setSuppressDefaultPressSelector = function (selector) {
        this.suppressDefaultPressSelector = selector;
    };
    MDCDialogFoundation.prototype.layout = function () {
        var _this = this;
        this.animFrame.request(AnimationKeys.POLL_LAYOUT_CHANGE, function () {
            _this.layoutInternal();
        });
    };
    /** Handles click on the dialog root element. */
    MDCDialogFoundation.prototype.handleClick = function (evt) {
        var isScrim = this.adapter.eventTargetMatches(evt.target, _constants__WEBPACK_IMPORTED_MODULE_1__.strings.SCRIM_SELECTOR);
        // Check for scrim click first since it doesn't require querying ancestors.
        if (isScrim && this.scrimClickAction !== '') {
            this.close(this.scrimClickAction);
        }
        else {
            var action = this.adapter.getActionFromEvent(evt);
            if (action) {
                this.close(action);
            }
        }
    };
    /** Handles keydown on the dialog root element. */
    MDCDialogFoundation.prototype.handleKeydown = function (evt) {
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        if (!isEnter) {
            return;
        }
        var action = this.adapter.getActionFromEvent(evt);
        if (action) {
            // Action button callback is handled in `handleClick`,
            // since space/enter keydowns on buttons trigger click events.
            return;
        }
        // `composedPath` is used here, when available, to account for use cases
        // where a target meant to suppress the default press behaviour
        // may exist in a shadow root.
        // For example, a textarea inside a web component:
        // <mwc-dialog>
        //   <horizontal-layout>
        //     #shadow-root (open)
        //       <mwc-textarea>
        //         #shadow-root (open)
        //           <textarea></textarea>
        //       </mwc-textarea>
        //   </horizontal-layout>
        // </mwc-dialog>
        var target = evt.composedPath ? evt.composedPath()[0] : evt.target;
        var isDefault = this.suppressDefaultPressSelector ?
            !this.adapter.eventTargetMatches(target, this.suppressDefaultPressSelector) :
            true;
        if (isEnter && isDefault) {
            this.adapter.clickDefaultButton();
        }
    };
    /** Handles keydown on the document. */
    MDCDialogFoundation.prototype.handleDocumentKeydown = function (evt) {
        var isEscape = evt.key === 'Escape' || evt.keyCode === 27;
        if (isEscape && this.escapeKeyAction !== '') {
            this.close(this.escapeKeyAction);
        }
    };
    /**
     * Handles scroll event on the dialog's content element -- showing a scroll
     * divider on the header or footer based on the scroll position. This handler
     * should only be registered on full-screen dialogs with scrollable content.
     */
    MDCDialogFoundation.prototype.handleScrollEvent = function () {
        var _this = this;
        // Since scroll events can fire at a high rate, we throttle these events by
        // using requestAnimationFrame.
        this.animFrame.request(AnimationKeys.POLL_SCROLL_POS, function () {
            _this.toggleScrollDividerHeader();
            _this.toggleScrollDividerFooter();
        });
    };
    MDCDialogFoundation.prototype.layoutInternal = function () {
        if (this.autoStackButtons) {
            this.detectStackedButtons();
        }
        this.toggleScrollableClasses();
    };
    MDCDialogFoundation.prototype.handleAnimationTimerEnd = function () {
        this.animationTimer = 0;
        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.OPENING);
        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.CLOSING);
    };
    /**
     * Runs the given logic on the next animation frame, using setTimeout to
     * factor in Firefox reflow behavior.
     */
    MDCDialogFoundation.prototype.runNextAnimationFrame = function (callback) {
        var _this = this;
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = requestAnimationFrame(function () {
            _this.animationFrame = 0;
            clearTimeout(_this.animationTimer);
            _this.animationTimer = setTimeout(callback, 0);
        });
    };
    MDCDialogFoundation.prototype.detectStackedButtons = function () {
        // Remove the class first to let us measure the buttons' natural positions.
        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.STACKED);
        var areButtonsStacked = this.adapter.areButtonsStacked();
        if (areButtonsStacked) {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.STACKED);
        }
        if (areButtonsStacked !== this.areButtonsStacked) {
            this.adapter.reverseButtons();
            this.areButtonsStacked = areButtonsStacked;
        }
    };
    MDCDialogFoundation.prototype.toggleScrollableClasses = function () {
        // Remove the class first to let us measure the natural height of the
        // content.
        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SCROLLABLE);
        if (this.adapter.isContentScrollable()) {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SCROLLABLE);
            if (this.isFullscreen) {
                // If dialog is full-screen and scrollable, check if a scroll divider
                // should be shown.
                this.toggleScrollDividerHeader();
                this.toggleScrollDividerFooter();
            }
        }
    };
    MDCDialogFoundation.prototype.toggleScrollDividerHeader = function () {
        if (!this.adapter.isScrollableContentAtTop()) {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SCROLL_DIVIDER_HEADER);
        }
        else if (this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SCROLL_DIVIDER_HEADER)) {
            this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SCROLL_DIVIDER_HEADER);
        }
    };
    MDCDialogFoundation.prototype.toggleScrollDividerFooter = function () {
        if (!this.adapter.isScrollableContentAtBottom()) {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SCROLL_DIVIDER_FOOTER);
        }
        else if (this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SCROLL_DIVIDER_FOOTER)) {
            this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.SCROLL_DIVIDER_FOOTER);
        }
    };
    return MDCDialogFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_3__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCDialogFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ 7677:
/*!***********************************************!*\
  !*** ./node_modules/@material/dialog/util.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "areTopsMisaligned": function() { return /* binding */ areTopsMisaligned; },
/* harmony export */   "createFocusTrapInstance": function() { return /* binding */ createFocusTrapInstance; },
/* harmony export */   "isScrollAtBottom": function() { return /* binding */ isScrollAtBottom; },
/* harmony export */   "isScrollAtTop": function() { return /* binding */ isScrollAtTop; },
/* harmony export */   "isScrollable": function() { return /* binding */ isScrollable; }
/* harmony export */ });
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
function createFocusTrapInstance(surfaceEl, focusTrapFactory, initialFocusEl) {
    return focusTrapFactory(surfaceEl, { initialFocusEl: initialFocusEl });
}
function isScrollable(el) {
    return el ? el.scrollHeight > el.offsetHeight : false;
}
/**
 * For scrollable content, returns true if the content has not been scrolled
 * (that is, the scroll content is as the "top"). This is used in full-screen
 * dialogs, where the scroll divider is expected only to appear once the
 * content has been scrolled "underneath" the header bar.
 */
function isScrollAtTop(el) {
    return el ? el.scrollTop === 0 : false;
}
/**
 * For scrollable content, returns true if the content has been scrolled all the
 * way to the bottom. This is used in full-screen dialogs, where the footer
 * scroll divider is expected only to appear when the content is "cut-off" by
 * the footer bar.
 */
function isScrollAtBottom(el) {
    return el ? Math.ceil(el.scrollHeight - el.scrollTop) === el.clientHeight :
        false;
}
function areTopsMisaligned(els) {
    var tops = new Set();
    [].forEach.call(els, function (el) { return tops.add(el.offsetTop); });
    return tops.size > 1;
}
//# sourceMappingURL=util.js.map

/***/ })

}]);
//# sourceMappingURL=vendors-f5c953b7.f77665d3faa0d235c766.bundle.js.map