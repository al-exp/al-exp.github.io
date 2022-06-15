"use strict";
(self["webpackChunkweb_client"] = self["webpackChunkweb_client"] || []).push([["vendors-79a171d5"],{

/***/ 6437:
/*!**********************************************************!*\
  !*** ./node_modules/@material/segmented-button/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCSegmentedButton": function() { return /* reexport safe */ _segmented_button_index__WEBPACK_IMPORTED_MODULE_0__.MDCSegmentedButton; },
/* harmony export */   "MDCSegmentedButtonFoundation": function() { return /* reexport safe */ _segmented_button_index__WEBPACK_IMPORTED_MODULE_0__.MDCSegmentedButtonFoundation; },
/* harmony export */   "MDCSegmentedButtonSegment": function() { return /* reexport safe */ _segment_index__WEBPACK_IMPORTED_MODULE_1__.MDCSegmentedButtonSegment; },
/* harmony export */   "MDCSegmentedButtonSegmentFoundation": function() { return /* reexport safe */ _segment_index__WEBPACK_IMPORTED_MODULE_1__.MDCSegmentedButtonSegmentFoundation; }
/* harmony export */ });
/* harmony import */ var _segmented_button_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segmented-button/index */ 8668);
/* harmony import */ var _segment_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segment/index */ 2291);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ 740);
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



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9710:
/*!********************************************************************!*\
  !*** ./node_modules/@material/segmented-button/segment/adapter.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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

//# sourceMappingURL=adapter.js.map

/***/ }),

/***/ 5615:
/*!**********************************************************************!*\
  !*** ./node_modules/@material/segmented-button/segment/component.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCSegmentedButtonSegment": function() { return /* binding */ MDCSegmentedButtonSegment; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/base/component */ 5179);
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/ripple/component */ 1661);
/* harmony import */ var _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/ripple/foundation */ 514);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ 2496);
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ 3285);
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
 * Implementation of MDCSegmentedButtonSegmentFoundation
 */
var MDCSegmentedButtonSegment = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MDCSegmentedButtonSegment, _super);
    function MDCSegmentedButtonSegment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MDCSegmentedButtonSegment.prototype, "ripple", {
        get: function () {
            return this.rippleComponent;
        },
        enumerable: false,
        configurable: true
    });
    MDCSegmentedButtonSegment.attachTo = function (root) {
        return new MDCSegmentedButtonSegment(root);
    };
    MDCSegmentedButtonSegment.prototype.initialize = function (rippleFactory) {
        var _this = this;
        if (rippleFactory === void 0) { rippleFactory = function (el, foundation) {
            return new _material_ripple_component__WEBPACK_IMPORTED_MODULE_3__.MDCRipple(el, foundation);
        }; }
        var rippleAdapter = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, _material_ripple_component__WEBPACK_IMPORTED_MODULE_3__.MDCRipple.createAdapter(this)), { computeBoundingRect: function () { return _this.foundation.getDimensions(); } });
        this.rippleComponent =
            rippleFactory(this.root, new _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_4__.MDCRippleFoundation(rippleAdapter));
    };
    MDCSegmentedButtonSegment.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleClick = function () {
            _this.foundation.handleClick();
        };
        this.listen(_constants__WEBPACK_IMPORTED_MODULE_0__.events.CLICK, this.handleClick);
    };
    MDCSegmentedButtonSegment.prototype.destroy = function () {
        this.ripple.destroy();
        this.unlisten(_constants__WEBPACK_IMPORTED_MODULE_0__.events.CLICK, this.handleClick);
        _super.prototype.destroy.call(this);
    };
    MDCSegmentedButtonSegment.prototype.getDefaultFoundation = function () {
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
            notifySelectedChange: function (selected) {
                _this.emit(_constants__WEBPACK_IMPORTED_MODULE_0__.events.SELECTED, {
                    index: _this.index,
                    selected: selected,
                    segmentId: _this.getSegmentId()
                }, true /* shouldBubble */);
            },
            getRootBoundingClientRect: function () {
                return _this.root.getBoundingClientRect();
            }
        };
        return new _foundation__WEBPACK_IMPORTED_MODULE_1__.MDCSegmentedButtonSegmentFoundation(adapter);
    };
    /**
     * Sets segment's index value
     *
     * @param index Segment's index within wrapping segmented button
     */
    MDCSegmentedButtonSegment.prototype.setIndex = function (index) {
        this.index = index;
    };
    /**
     * Sets segment's isSingleSelect value
     *
     * @param isSingleSelect True if wrapping segmented button is single select
     */
    MDCSegmentedButtonSegment.prototype.setIsSingleSelect = function (isSingleSelect) {
        this.isSingleSelect = isSingleSelect;
    };
    /**
     * @return Returns true if segment is currently selected, otherwise returns
     * false
     */
    MDCSegmentedButtonSegment.prototype.isSelected = function () {
        return this.foundation.isSelected();
    };
    /**
     * Sets segment to be selected
     */
    MDCSegmentedButtonSegment.prototype.setSelected = function () {
        this.foundation.setSelected();
    };
    /**
     * Sets segment to be not selected
     */
    MDCSegmentedButtonSegment.prototype.setUnselected = function () {
        this.foundation.setUnselected();
    };
    /**
     * @return Returns segment's segmentId if it was set by client
     */
    MDCSegmentedButtonSegment.prototype.getSegmentId = function () {
        return this.foundation.getSegmentId();
    };
    return MDCSegmentedButtonSegment;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_5__.MDCComponent));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ 2496:
/*!**********************************************************************!*\
  !*** ./node_modules/@material/segmented-button/segment/constants.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attributes": function() { return /* binding */ attributes; },
/* harmony export */   "booleans": function() { return /* binding */ booleans; },
/* harmony export */   "cssClasses": function() { return /* binding */ cssClasses; },
/* harmony export */   "events": function() { return /* binding */ events; }
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
 * Boolean strings for segment
 */
var booleans = {
    TRUE: 'true',
    FALSE: 'false'
};
/**
 * Attributes referenced by segment
 */
var attributes = {
    ARIA_CHECKED: 'aria-checked',
    ARIA_PRESSED: 'aria-pressed',
    DATA_SEGMENT_ID: 'data-segment-id'
};
/**
 * Events received or emitted by segment
 */
var events = {
    CLICK: 'click',
    SELECTED: 'selected'
};
/**
 * Style classes for segment
 */
var cssClasses = {
    SELECTED: 'mdc-segmented-button__segment--selected'
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 3285:
/*!***********************************************************************!*\
  !*** ./node_modules/@material/segmented-button/segment/foundation.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCSegmentedButtonSegmentFoundation": function() { return /* binding */ MDCSegmentedButtonSegmentFoundation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ 6308);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ 2496);
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



var emptyClientRect = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
};
var MDCSegmentedButtonSegmentFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MDCSegmentedButtonSegmentFoundation, _super);
    function MDCSegmentedButtonSegmentFoundation(adapter) {
        return _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, MDCSegmentedButtonSegmentFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCSegmentedButtonSegmentFoundation, "defaultAdapter", {
        get: function () {
            return {
                isSingleSelect: function () { return false; }, getAttr: function () { return ''; }, setAttr: function () { return undefined; },
                addClass: function () { return undefined; }, removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                notifySelectedChange: function () { return undefined; },
                getRootBoundingClientRect: function () { return emptyClientRect; },
            };
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @return Returns true if segment is currently selected, otherwise returns
     * false
     */
    MDCSegmentedButtonSegmentFoundation.prototype.isSelected = function () {
        return this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_0__.cssClasses.SELECTED);
    };
    /**
     * Sets segment to be selected
     */
    MDCSegmentedButtonSegmentFoundation.prototype.setSelected = function () {
        this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_0__.cssClasses.SELECTED);
        this.setAriaAttr(_constants__WEBPACK_IMPORTED_MODULE_0__.booleans.TRUE);
    };
    /**
     * Sets segment to be not selected
     */
    MDCSegmentedButtonSegmentFoundation.prototype.setUnselected = function () {
        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_0__.cssClasses.SELECTED);
        this.setAriaAttr(_constants__WEBPACK_IMPORTED_MODULE_0__.booleans.FALSE);
    };
    /**
     * @return Returns segment's segmentId if it was set by client
     */
    MDCSegmentedButtonSegmentFoundation.prototype.getSegmentId = function () {
        var _a;
        return (_a = this.adapter.getAttr(_constants__WEBPACK_IMPORTED_MODULE_0__.attributes.DATA_SEGMENT_ID)) !== null && _a !== void 0 ? _a : undefined;
    };
    /**
     * Called when segment is clicked. If the wrapping segmented button is single
     * select, doesn't allow segment to be set to not selected. Otherwise, toggles
     * segment's selected status. Finally, emits event to wrapping segmented
     * button.
     *
     * @event selected With detail - SegmentDetail
     */
    MDCSegmentedButtonSegmentFoundation.prototype.handleClick = function () {
        if (this.adapter.isSingleSelect()) {
            this.setSelected();
        }
        else {
            this.toggleSelection();
        }
        this.adapter.notifySelectedChange(this.isSelected());
    };
    /**
     * @return Returns bounding rectangle for ripple effect
     */
    MDCSegmentedButtonSegmentFoundation.prototype.getDimensions = function () {
        return this.adapter.getRootBoundingClientRect();
    };
    /**
     * Sets segment from not selected to selected, or selected to not selected
     */
    MDCSegmentedButtonSegmentFoundation.prototype.toggleSelection = function () {
        if (this.isSelected()) {
            this.setUnselected();
        }
        else {
            this.setSelected();
        }
    };
    /**
     * Sets appropriate aria attribute, based on wrapping segmented button's
     * single selected value, to new value
     *
     * @param value Value that represents selected status
     */
    MDCSegmentedButtonSegmentFoundation.prototype.setAriaAttr = function (value) {
        if (this.adapter.isSingleSelect()) {
            this.adapter.setAttr(_constants__WEBPACK_IMPORTED_MODULE_0__.attributes.ARIA_CHECKED, value);
        }
        else {
            this.adapter.setAttr(_constants__WEBPACK_IMPORTED_MODULE_0__.attributes.ARIA_PRESSED, value);
        }
    };
    return MDCSegmentedButtonSegmentFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ 2291:
/*!******************************************************************!*\
  !*** ./node_modules/@material/segmented-button/segment/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCSegmentedButtonSegment": function() { return /* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_2__.MDCSegmentedButtonSegment; },
/* harmony export */   "MDCSegmentedButtonSegmentFoundation": function() { return /* reexport safe */ _foundation__WEBPACK_IMPORTED_MODULE_1__.MDCSegmentedButtonSegmentFoundation; }
/* harmony export */ });
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ 9710);
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ 3285);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component */ 5615);
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



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2771:
/*!*****************************************************************************!*\
  !*** ./node_modules/@material/segmented-button/segmented-button/adapter.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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

//# sourceMappingURL=adapter.js.map

/***/ }),

/***/ 4890:
/*!*******************************************************************************!*\
  !*** ./node_modules/@material/segmented-button/segmented-button/component.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCSegmentedButton": function() { return /* binding */ MDCSegmentedButton; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/base/component */ 5179);
/* harmony import */ var _segment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../segment/component */ 5615);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ 8618);
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ 3656);
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





var MDCSegmentedButton = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(MDCSegmentedButton, _super);
    function MDCSegmentedButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSegmentedButton.attachTo = function (root) {
        return new MDCSegmentedButton(root);
    };
    Object.defineProperty(MDCSegmentedButton.prototype, "segments", {
        get: function () {
            return this.segmentsList.slice();
        },
        enumerable: false,
        configurable: true
    });
    // initialSyncWithDOM
    MDCSegmentedButton.prototype.initialize = function (segmentFactory) {
        if (segmentFactory === void 0) { segmentFactory = function (el) {
            return new _segment_component__WEBPACK_IMPORTED_MODULE_0__.MDCSegmentedButtonSegment(el);
        }; }
        this.segmentFactory = segmentFactory;
        this.segmentsList = this.instantiateSegments(this.segmentFactory);
    };
    /**
     * @param segmentFactory Factory to create new child segments
     * @return Returns list of child segments found in DOM
     */
    MDCSegmentedButton.prototype.instantiateSegments = function (segmentFactory) {
        var segmentElements = [].slice.call(this.root.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_1__.selectors.SEGMENT));
        return segmentElements.map(function (el) { return segmentFactory(el); });
    };
    MDCSegmentedButton.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleSelected = function (event) {
            _this.foundation.handleSelected(event.detail);
        };
        this.listen(_constants__WEBPACK_IMPORTED_MODULE_1__.events.SELECTED, this.handleSelected);
        var isSingleSelect = this.foundation.isSingleSelect();
        for (var i = 0; i < this.segmentsList.length; i++) {
            var segment = this.segmentsList[i];
            segment.setIndex(i);
            segment.setIsSingleSelect(isSingleSelect);
        }
        var selectedSegments = this.segmentsList.filter(function (segment) { return segment.isSelected(); });
        if (isSingleSelect && selectedSegments.length === 0 &&
            this.segmentsList.length > 0) {
            throw new Error('No segment selected in singleSelect mdc-segmented-button');
        }
        else if (isSingleSelect && selectedSegments.length > 1) {
            throw new Error('Multiple segments selected in singleSelect mdc-segmented-button');
        }
    };
    MDCSegmentedButton.prototype.destroy = function () {
        var e_1, _a;
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__values)(this.segmentsList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var segment = _c.value;
                segment.destroy();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.unlisten(_constants__WEBPACK_IMPORTED_MODULE_1__.events.SELECTED, this.handleSelected);
        _super.prototype.destroy.call(this);
    };
    MDCSegmentedButton.prototype.getDefaultFoundation = function () {
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
                    _this.segmentsList[segmentDetail.index].setSelected();
                }
            },
            unselectSegment: function (indexOrSegmentId) {
                var segmentDetail = _this.mappedSegments().find(function (detail) { return detail.index === indexOrSegmentId ||
                    detail.segmentId === indexOrSegmentId; });
                if (segmentDetail) {
                    _this.segmentsList[segmentDetail.index].setUnselected();
                }
            },
            notifySelectedChange: function (detail) {
                _this.emit(_constants__WEBPACK_IMPORTED_MODULE_1__.events.CHANGE, detail, true /* shouldBubble */);
            }
        };
        return new _foundation__WEBPACK_IMPORTED_MODULE_2__.MDCSegmentedButtonFoundation(adapter);
    };
    /**
     * @return Returns readonly list of selected child segments as SegmentDetails
     */
    MDCSegmentedButton.prototype.getSelectedSegments = function () {
        return this.foundation.getSelectedSegments();
    };
    /**
     * Sets identified segment to be selected
     *
     * @param indexOrSegmentId Number index or string segmentId that identifies
     * child segment
     */
    MDCSegmentedButton.prototype.selectSegment = function (indexOrSegmentId) {
        this.foundation.selectSegment(indexOrSegmentId);
    };
    /**
     * Sets identified segment to be not selected
     *
     * @param indexOrSegmentId Number index or string segmentId that identifies
     * child segment
     */
    MDCSegmentedButton.prototype.unselectSegment = function (indexOrSegmentId) {
        this.foundation.unselectSegment(indexOrSegmentId);
    };
    /**
     * @param indexOrSegmentId Number index or string segmentId that identifies
     * child segment
     * @return Returns true if identified child segment is currently selected,
     * otherwise returns false
     */
    MDCSegmentedButton.prototype.isSegmentSelected = function (indexOrSegmentId) {
        return this.foundation.isSegmentSelected(indexOrSegmentId);
    };
    /**
     * @return Returns child segments mapped to readonly SegmentDetail list
     */
    MDCSegmentedButton.prototype.mappedSegments = function () {
        return this.segmentsList.map(function (segment, index) {
            return {
                index: index,
                selected: segment.isSelected(),
                segmentId: segment.getSegmentId()
            };
        });
    };
    return MDCSegmentedButton;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_4__.MDCComponent));

//# sourceMappingURL=component.js.map

/***/ }),

/***/ 8618:
/*!*******************************************************************************!*\
  !*** ./node_modules/@material/segmented-button/segmented-button/constants.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": function() { return /* binding */ cssClasses; },
/* harmony export */   "events": function() { return /* binding */ events; },
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
/**
 * Selectors used by segmented-button
 */
var selectors = {
    SEGMENT: '.mdc-segmented-button__segment'
};
/**
 * Events received or emitted by segmented-button
 */
var events = {
    SELECTED: 'selected',
    CHANGE: 'change'
};
/**
 * Style classes for segmented-button
 */
var cssClasses = {
    SINGLE_SELECT: 'mdc-segmented-button--single-select'
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 3656:
/*!********************************************************************************!*\
  !*** ./node_modules/@material/segmented-button/segmented-button/foundation.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCSegmentedButtonFoundation": function() { return /* binding */ MDCSegmentedButtonFoundation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ 6308);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ 8618);
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



var MDCSegmentedButtonFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MDCSegmentedButtonFoundation, _super);
    function MDCSegmentedButtonFoundation(adapter) {
        return _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, MDCSegmentedButtonFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCSegmentedButtonFoundation, "defaultAdapter", {
        get: function () {
            return {
                hasClass: function () { return false; }, getSegments: function () { return []; },
                selectSegment: function () { return undefined; },
                unselectSegment: function () { return undefined; },
                notifySelectedChange: function () { return undefined; }
            };
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets identified child segment to be selected
     *
     * @param indexOrSegmentId Number index or string segmentId that identifies
     * child segment
     */
    MDCSegmentedButtonFoundation.prototype.selectSegment = function (indexOrSegmentId) {
        this.adapter.selectSegment(indexOrSegmentId);
    };
    /**
     * Sets identified child segment to be not selected
     *
     * @param indexOrSegmentId Number index or string segmentId that identifies
     * child segment
     */
    MDCSegmentedButtonFoundation.prototype.unselectSegment = function (indexOrSegmentId) {
        this.adapter.unselectSegment(indexOrSegmentId);
    };
    /**
     * @return Returns currently selected child segments as readonly list of
     * SegmentDetails
     */
    MDCSegmentedButtonFoundation.prototype.getSelectedSegments = function () {
        return this.adapter.getSegments().filter(function (segmentDetail) { return segmentDetail.selected; });
    };
    /**
     * @param indexOrSegmentId Number index or string segmentId that identifies
     * child segment
     * @return Returns true if identified child segment is currently selected,
     * otherwise returns false
     */
    MDCSegmentedButtonFoundation.prototype.isSegmentSelected = function (indexOrSegmentId) {
        return this.adapter.getSegments().some(function (segmentDetail) { return (segmentDetail.index === indexOrSegmentId ||
            segmentDetail.segmentId === indexOrSegmentId) &&
            segmentDetail.selected; });
    };
    /**
     * @return Returns true if segmented button is single select, otherwise
     * returns false
     */
    MDCSegmentedButtonFoundation.prototype.isSingleSelect = function () {
        return this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_0__.cssClasses.SINGLE_SELECT);
    };
    /**
     * Called when child segment's selected status may have changed. If segmented
     * button is single select, unselects all child segments other than identified
     * child segment. Finally, emits event to client.
     *
     * @param detail Child segment affected represented as SegmentDetail
     * @event change With detail - SegmentDetail
     */
    MDCSegmentedButtonFoundation.prototype.handleSelected = function (detail) {
        if (this.isSingleSelect()) {
            this.unselectPrevSelected(detail.index);
        }
        this.adapter.notifySelectedChange(detail);
    };
    /**
     * Sets all child segments to be not selected except for child segment
     * identified by index
     *
     * @param index Index of child segment to not unselect
     */
    MDCSegmentedButtonFoundation.prototype.unselectPrevSelected = function (index) {
        var e_1, _a;
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(this.getSelectedSegments()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var selectedSegment = _c.value;
                if (selectedSegment.index !== index) {
                    this.unselectSegment(selectedSegment.index);
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
    return MDCSegmentedButtonFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ 8668:
/*!***************************************************************************!*\
  !*** ./node_modules/@material/segmented-button/segmented-button/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCSegmentedButton": function() { return /* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_2__.MDCSegmentedButton; },
/* harmony export */   "MDCSegmentedButtonFoundation": function() { return /* reexport safe */ _foundation__WEBPACK_IMPORTED_MODULE_1__.MDCSegmentedButtonFoundation; }
/* harmony export */ });
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ 2771);
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ 3656);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component */ 4890);
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



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 740:
/*!**********************************************************!*\
  !*** ./node_modules/@material/segmented-button/types.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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

//# sourceMappingURL=types.js.map

/***/ }),

/***/ 8677:
/*!****************************************************!*\
  !*** ./node_modules/@material/select/constants.js ***!
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
    ACTIVATED: 'mdc-select--activated',
    DISABLED: 'mdc-select--disabled',
    FOCUSED: 'mdc-select--focused',
    INVALID: 'mdc-select--invalid',
    MENU_INVALID: 'mdc-select__menu--invalid',
    OUTLINED: 'mdc-select--outlined',
    REQUIRED: 'mdc-select--required',
    ROOT: 'mdc-select',
    WITH_LEADING_ICON: 'mdc-select--with-leading-icon',
};
var strings = {
    ARIA_CONTROLS: 'aria-controls',
    ARIA_DESCRIBEDBY: 'aria-describedby',
    ARIA_SELECTED_ATTR: 'aria-selected',
    CHANGE_EVENT: 'MDCSelect:change',
    HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
    LABEL_SELECTOR: '.mdc-floating-label',
    LEADING_ICON_SELECTOR: '.mdc-select__icon',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
    MENU_SELECTOR: '.mdc-select__menu',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
    SELECTED_TEXT_SELECTOR: '.mdc-select__selected-text',
    SELECT_ANCHOR_SELECTOR: '.mdc-select__anchor',
    VALUE_ATTR: 'data-value',
};
var numbers = {
    LABEL_SCALE: 0.75,
    UNSET_INDEX: -1,
    CLICK_DEBOUNCE_TIMEOUT_MS: 330,
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 8883:
/*!****************************************************************!*\
  !*** ./node_modules/@material/select/helper-text/constants.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssClasses": function() { return /* binding */ cssClasses; },
/* harmony export */   "strings": function() { return /* binding */ strings; }
/* harmony export */ });
/**
 * @license
 * Copyright 2018 Google Inc.
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
var strings = {
    ARIA_HIDDEN: 'aria-hidden',
    ROLE: 'role',
};
var cssClasses = {
    HELPER_TEXT_VALIDATION_MSG: 'mdc-select-helper-text--validation-msg',
    HELPER_TEXT_VALIDATION_MSG_PERSISTENT: 'mdc-select-helper-text--validation-msg-persistent',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 1914:
/*!*****************************************************************!*\
  !*** ./node_modules/@material/select/helper-text/foundation.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCSelectHelperTextFoundation": function() { return /* binding */ MDCSelectHelperTextFoundation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ 6308);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ 8883);
/**
 * @license
 * Copyright 2018 Google Inc.
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



var MDCSelectHelperTextFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCSelectHelperTextFoundation, _super);
    function MDCSelectHelperTextFoundation(adapter) {
        return _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCSelectHelperTextFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCSelectHelperTextFoundation, "cssClasses", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSelectHelperTextFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSelectHelperTextFoundation, "defaultAdapter", {
        /**
         * See {@link MDCSelectHelperTextAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setAttr: function () { return undefined; },
                getAttr: function () { return null; },
                removeAttr: function () { return undefined; },
                setContent: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @return The ID of the helper text, or null if none is set.
     */
    MDCSelectHelperTextFoundation.prototype.getId = function () {
        return this.adapter.getAttr('id');
    };
    /**
     * @return Whether the helper text is currently visible.
     */
    MDCSelectHelperTextFoundation.prototype.isVisible = function () {
        return this.adapter.getAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_HIDDEN) !== 'true';
    };
    /**
     * Sets the content of the helper text field.
     */
    MDCSelectHelperTextFoundation.prototype.setContent = function (content) {
        this.adapter.setContent(content);
    };
    /**
     * Sets the helper text to act as a validation message.
     * By default, validation messages are hidden when the select is valid and
     * visible when the select is invalid.
     *
     * @param isValidation True to make the helper text act as an error validation
     *     message.
     */
    MDCSelectHelperTextFoundation.prototype.setValidation = function (isValidation) {
        if (isValidation) {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_VALIDATION_MSG);
        }
        else {
            this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_VALIDATION_MSG);
        }
    };
    /**
     * Sets the persistency of the validation helper text.
     * This keeps the validation message visible even if the select is valid,
     * though it will be displayed in the normal (grey) color.
     */
    MDCSelectHelperTextFoundation.prototype.setValidationMsgPersistent = function (isPersistent) {
        if (isPersistent) {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
        }
        else {
            this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
        }
    };
    /**
     * @return Whether the helper text acts as a validation message.
     * By default, validation messages are hidden when the select is valid and
     * visible when the select is invalid.
     */
    MDCSelectHelperTextFoundation.prototype.getIsValidation = function () {
        return this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_VALIDATION_MSG);
    };
    /**
     * @return Whether the validation helper text persists even if the input is
     * valid. If it is, it will be displayed in the normal (grey) color.
     */
    MDCSelectHelperTextFoundation.prototype.getIsValidationMsgPersistent = function () {
        return this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    };
    /**
     * When acting as a validation message, shows/hides the helper text and
     * triggers alerts as necessary based on the select's validity.
     */
    MDCSelectHelperTextFoundation.prototype.setValidity = function (selectIsValid) {
        var isValidationMsg = this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_VALIDATION_MSG);
        if (!isValidationMsg) {
            // Non-validating helper-text is always displayed and does not participate
            // in validation logic.
            return;
        }
        var isPersistentValidationMsg = this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
        // Validating helper text is displayed if select is invalid, unless it is
        // set as persistent, in which case it always displays.
        var msgShouldDisplay = !selectIsValid || isPersistentValidationMsg;
        if (msgShouldDisplay) {
            this.showToScreenReader();
            // In addition to displaying, also trigger an alert if the select
            // has become invalid.
            if (!selectIsValid) {
                this.adapter.setAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ROLE, 'alert');
            }
            else {
                this.adapter.removeAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ROLE);
            }
            return;
        }
        // Hide everything.
        this.adapter.removeAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ROLE);
        this.hide();
    };
    /**
     * Makes the helper text visible to screen readers.
     */
    MDCSelectHelperTextFoundation.prototype.showToScreenReader = function () {
        this.adapter.removeAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_HIDDEN);
    };
    /**
     * Hides the help text from screen readers.
     */
    MDCSelectHelperTextFoundation.prototype.hide = function () {
        this.adapter.setAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_HIDDEN, 'true');
    };
    return MDCSelectHelperTextFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCSelectHelperTextFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ 5658:
/*!*********************************************************!*\
  !*** ./node_modules/@material/select/icon/constants.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "strings": function() { return /* binding */ strings; }
/* harmony export */ });
/**
 * @license
 * Copyright 2018 Google Inc.
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
var strings = {
    ICON_EVENT: 'MDCSelect:icon',
    ICON_ROLE: 'button',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 1156:
/*!**********************************************************!*\
  !*** ./node_modules/@material/select/icon/foundation.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCSelectIconFoundation": function() { return /* binding */ MDCSelectIconFoundation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ 6308);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ 5658);
/**
 * @license
 * Copyright 2018 Google Inc.
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



var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCSelectIconFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCSelectIconFoundation, _super);
    function MDCSelectIconFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCSelectIconFoundation.defaultAdapter), adapter)) || this;
        _this.savedTabIndex = null;
        _this.interactionHandler = function (evt) {
            _this.handleInteraction(evt);
        };
        return _this;
    }
    Object.defineProperty(MDCSelectIconFoundation, "strings", {
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSelectIconFoundation, "defaultAdapter", {
        /**
         * See {@link MDCSelectIconAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                getAttr: function () { return null; },
                setAttr: function () { return undefined; },
                removeAttr: function () { return undefined; },
                setContent: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                notifyIconAction: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCSelectIconFoundation.prototype.init = function () {
        var e_1, _a;
        this.savedTabIndex = this.adapter.getAttr('tabindex');
        try {
            for (var INTERACTION_EVENTS_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(INTERACTION_EVENTS), INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next(); !INTERACTION_EVENTS_1_1.done; INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next()) {
                var evtType = INTERACTION_EVENTS_1_1.value;
                this.adapter.registerInteractionHandler(evtType, this.interactionHandler);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (INTERACTION_EVENTS_1_1 && !INTERACTION_EVENTS_1_1.done && (_a = INTERACTION_EVENTS_1.return)) _a.call(INTERACTION_EVENTS_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MDCSelectIconFoundation.prototype.destroy = function () {
        var e_2, _a;
        try {
            for (var INTERACTION_EVENTS_2 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(INTERACTION_EVENTS), INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next(); !INTERACTION_EVENTS_2_1.done; INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next()) {
                var evtType = INTERACTION_EVENTS_2_1.value;
                this.adapter.deregisterInteractionHandler(evtType, this.interactionHandler);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (INTERACTION_EVENTS_2_1 && !INTERACTION_EVENTS_2_1.done && (_a = INTERACTION_EVENTS_2.return)) _a.call(INTERACTION_EVENTS_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    MDCSelectIconFoundation.prototype.setDisabled = function (disabled) {
        if (!this.savedTabIndex) {
            return;
        }
        if (disabled) {
            this.adapter.setAttr('tabindex', '-1');
            this.adapter.removeAttr('role');
        }
        else {
            this.adapter.setAttr('tabindex', this.savedTabIndex);
            this.adapter.setAttr('role', _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ICON_ROLE);
        }
    };
    MDCSelectIconFoundation.prototype.setAriaLabel = function (label) {
        this.adapter.setAttr('aria-label', label);
    };
    MDCSelectIconFoundation.prototype.setContent = function (content) {
        this.adapter.setContent(content);
    };
    MDCSelectIconFoundation.prototype.handleInteraction = function (evt) {
        var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;
        if (evt.type === 'click' || isEnterKey) {
            this.adapter.notifyIconAction();
        }
    };
    return MDCSelectIconFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCSelectIconFoundation);
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ 7238:
/*!****************************************************!*\
  !*** ./node_modules/@material/slider/constants.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attributes": function() { return /* binding */ attributes; },
/* harmony export */   "cssClasses": function() { return /* binding */ cssClasses; },
/* harmony export */   "events": function() { return /* binding */ events; },
/* harmony export */   "numbers": function() { return /* binding */ numbers; },
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
/** Slider element classes. */
var cssClasses = {
    DISABLED: 'mdc-slider--disabled',
    DISCRETE: 'mdc-slider--discrete',
    INPUT: 'mdc-slider__input',
    RANGE: 'mdc-slider--range',
    THUMB: 'mdc-slider__thumb',
    // Applied when thumb is in the focused state.
    THUMB_FOCUSED: 'mdc-slider__thumb--focused',
    THUMB_KNOB: 'mdc-slider__thumb-knob',
    // Class added to the top thumb (for overlapping thumbs in range slider).
    THUMB_TOP: 'mdc-slider__thumb--top',
    THUMB_WITH_INDICATOR: 'mdc-slider__thumb--with-indicator',
    TICK_MARKS: 'mdc-slider--tick-marks',
    TICK_MARKS_CONTAINER: 'mdc-slider__tick-marks',
    TICK_MARK_ACTIVE: 'mdc-slider__tick-mark--active',
    TICK_MARK_INACTIVE: 'mdc-slider__tick-mark--inactive',
    TRACK: 'mdc-slider__track',
    // The active track fill element that will be scaled as the value changes.
    TRACK_ACTIVE: 'mdc-slider__track--active_fill',
    VALUE_INDICATOR_CONTAINER: 'mdc-slider__value-indicator-container',
    VALUE_INDICATOR_TEXT: 'mdc-slider__value-indicator-text',
};
/** Slider numbers. */
var numbers = {
    // Default step size.
    STEP_SIZE: 1,
    // Default minimum difference between the start and end values.
    MIN_RANGE: 0,
    // Minimum absolute difference between clientX of move event / down event
    // for which to update thumb, in the case of overlapping thumbs.
    // This is needed to reduce chances of choosing the thumb based on
    // pointer jitter.
    THUMB_UPDATE_MIN_PX: 5,
};
/** Slider attributes. */
var attributes = {
    ARIA_VALUETEXT: 'aria-valuetext',
    INPUT_DISABLED: 'disabled',
    INPUT_MIN: 'min',
    INPUT_MAX: 'max',
    INPUT_VALUE: 'value',
    INPUT_STEP: 'step',
    DATA_MIN_RANGE: 'data-min-range',
};
/** Slider events. */
var events = {
    CHANGE: 'MDCSlider:change',
    INPUT: 'MDCSlider:input',
};
/** Slider strings. */
var strings = {
    VAR_VALUE_INDICATOR_CARET_LEFT: '--slider-value-indicator-caret-left',
    VAR_VALUE_INDICATOR_CARET_RIGHT: '--slider-value-indicator-caret-right',
    VAR_VALUE_INDICATOR_CARET_TRANSFORM: '--slider-value-indicator-caret-transform',
    VAR_VALUE_INDICATOR_CONTAINER_LEFT: '--slider-value-indicator-container-left',
    VAR_VALUE_INDICATOR_CONTAINER_RIGHT: '--slider-value-indicator-container-right',
    VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM: '--slider-value-indicator-container-transform',
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 506:
/*!*****************************************************!*\
  !*** ./node_modules/@material/slider/foundation.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDCSliderFoundation": function() { return /* binding */ MDCSliderFoundation; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _material_animation_animationframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/animation/animationframe */ 2195);
/* harmony import */ var _material_animation_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/animation/util */ 5475);
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/base/foundation */ 6308);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ 7238);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ 191);
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






var AnimationKeys;
(function (AnimationKeys) {
    AnimationKeys["SLIDER_UPDATE"] = "slider_update";
})(AnimationKeys || (AnimationKeys = {}));
// Accessing `window` without a `typeof` check will throw on Node environments.
var HAS_WINDOW = typeof window !== 'undefined';
/**
 * Foundation class for slider. Responsibilities include:
 * - Updating slider values (internal state and DOM updates) based on client
 *   'x' position.
 * - Updating DOM after slider property updates (e.g. min, max).
 */
var MDCSliderFoundation = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCSliderFoundation, _super);
    function MDCSliderFoundation(adapter) {
        var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCSliderFoundation.defaultAdapter), adapter)) || this;
        // Whether the initial styles (to position the thumb, before component
        // initialization) have been removed.
        _this.initialStylesRemoved = false;
        _this.isDisabled = false;
        _this.isDiscrete = false;
        _this.step = _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.STEP_SIZE;
        _this.minRange = _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.MIN_RANGE;
        _this.hasTickMarks = false;
        // The following properties are only set for range sliders.
        _this.isRange = false;
        // Tracks the thumb being moved across a slider pointer interaction (down,
        // move event).
        _this.thumb = null;
        // `clientX` from the most recent down event. Used in subsequent move
        // events to determine which thumb to move (in the case of
        // overlapping thumbs).
        _this.downEventClientX = null;
        // Width of the start thumb knob.
        _this.startThumbKnobWidth = 0;
        // Width of the end thumb knob.
        _this.endThumbKnobWidth = 0;
        _this.animFrame = new _material_animation_animationframe__WEBPACK_IMPORTED_MODULE_2__.AnimationFrame();
        return _this;
    }
    Object.defineProperty(MDCSliderFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same
            // order as the adapter interface.
            return {
                hasClass: function () { return false; },
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                addThumbClass: function () { return undefined; },
                removeThumbClass: function () { return undefined; },
                getAttribute: function () { return null; },
                getInputValue: function () { return ''; },
                setInputValue: function () { return undefined; },
                getInputAttribute: function () { return null; },
                setInputAttribute: function () { return null; },
                removeInputAttribute: function () { return null; },
                focusInput: function () { return undefined; },
                isInputFocused: function () { return false; },
                shouldHideFocusStylesForPointerEvents: function () { return false; },
                getThumbKnobWidth: function () { return 0; },
                getValueIndicatorContainerWidth: function () { return 0; },
                getThumbBoundingClientRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                getBoundingClientRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                isRTL: function () { return false; },
                setThumbStyleProperty: function () { return undefined; },
                removeThumbStyleProperty: function () { return undefined; },
                setTrackActiveStyleProperty: function () { return undefined; },
                removeTrackActiveStyleProperty: function () { return undefined; },
                setValueIndicatorText: function () { return undefined; },
                getValueToAriaValueTextFn: function () { return null; },
                updateTickMarks: function () { return undefined; },
                setPointerCapture: function () { return undefined; },
                emitChangeEvent: function () { return undefined; },
                emitInputEvent: function () { return undefined; },
                emitDragStartEvent: function () { return undefined; },
                emitDragEndEvent: function () { return undefined; },
                registerEventHandler: function () { return undefined; },
                deregisterEventHandler: function () { return undefined; },
                registerThumbEventHandler: function () { return undefined; },
                deregisterThumbEventHandler: function () { return undefined; },
                registerInputEventHandler: function () { return undefined; },
                deregisterInputEventHandler: function () { return undefined; },
                registerBodyEventHandler: function () { return undefined; },
                deregisterBodyEventHandler: function () { return undefined; },
                registerWindowEventHandler: function () { return undefined; },
                deregisterWindowEventHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCSliderFoundation.prototype.init = function () {
        var _this = this;
        this.isDisabled = this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.DISABLED);
        this.isDiscrete = this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.DISCRETE);
        this.hasTickMarks = this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.TICK_MARKS);
        this.isRange = this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.RANGE);
        var min = this.convertAttributeValueToNumber(this.adapter.getInputAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.attributes.INPUT_MIN, this.isRange ? _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START : _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END), _constants__WEBPACK_IMPORTED_MODULE_1__.attributes.INPUT_MIN);
        var max = this.convertAttributeValueToNumber(this.adapter.getInputAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.attributes.INPUT_MAX, _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END), _constants__WEBPACK_IMPORTED_MODULE_1__.attributes.INPUT_MAX);
        var value = this.convertAttributeValueToNumber(this.adapter.getInputAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.attributes.INPUT_VALUE, _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END), _constants__WEBPACK_IMPORTED_MODULE_1__.attributes.INPUT_VALUE);
        var valueStart = this.isRange ?
            this.convertAttributeValueToNumber(this.adapter.getInputAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.attributes.INPUT_VALUE, _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START), _constants__WEBPACK_IMPORTED_MODULE_1__.attributes.INPUT_VALUE) :
            min;
        var stepAttr = this.adapter.getInputAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.attributes.INPUT_STEP, _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END);
        var step = stepAttr ?
            this.convertAttributeValueToNumber(stepAttr, _constants__WEBPACK_IMPORTED_MODULE_1__.attributes.INPUT_STEP) :
            this.step;
        var minRangeAttr = this.adapter.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.attributes.DATA_MIN_RANGE);
        var minRange = minRangeAttr ?
            this.convertAttributeValueToNumber(minRangeAttr, _constants__WEBPACK_IMPORTED_MODULE_1__.attributes.DATA_MIN_RANGE) :
            this.minRange;
        this.validateProperties({ min: min, max: max, value: value, valueStart: valueStart, step: step, minRange: minRange });
        this.min = min;
        this.max = max;
        this.value = value;
        this.valueStart = valueStart;
        this.step = step;
        this.minRange = minRange;
        this.numDecimalPlaces = getNumDecimalPlaces(this.step);
        this.valueBeforeDownEvent = value;
        this.valueStartBeforeDownEvent = valueStart;
        this.mousedownOrTouchstartListener =
            this.handleMousedownOrTouchstart.bind(this);
        this.moveListener = this.handleMove.bind(this);
        this.pointerdownListener = this.handlePointerdown.bind(this);
        this.pointerupListener = this.handlePointerup.bind(this);
        this.thumbMouseenterListener = this.handleThumbMouseenter.bind(this);
        this.thumbMouseleaveListener = this.handleThumbMouseleave.bind(this);
        this.inputStartChangeListener = function () {
            _this.handleInputChange(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START);
        };
        this.inputEndChangeListener = function () {
            _this.handleInputChange(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END);
        };
        this.inputStartFocusListener = function () {
            _this.handleInputFocus(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START);
        };
        this.inputEndFocusListener = function () {
            _this.handleInputFocus(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END);
        };
        this.inputStartBlurListener = function () {
            _this.handleInputBlur(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START);
        };
        this.inputEndBlurListener = function () {
            _this.handleInputBlur(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END);
        };
        this.resizeListener = this.handleResize.bind(this);
        this.registerEventHandlers();
    };
    MDCSliderFoundation.prototype.destroy = function () {
        this.deregisterEventHandlers();
    };
    MDCSliderFoundation.prototype.setMin = function (value) {
        this.min = value;
        if (!this.isRange) {
            this.valueStart = value;
        }
        this.updateUI();
    };
    MDCSliderFoundation.prototype.setMax = function (value) {
        this.max = value;
        this.updateUI();
    };
    MDCSliderFoundation.prototype.getMin = function () {
        return this.min;
    };
    MDCSliderFoundation.prototype.getMax = function () {
        return this.max;
    };
    /**
     * - For single point sliders, returns the thumb value.
     * - For range (two-thumb) sliders, returns the end thumb's value.
     */
    MDCSliderFoundation.prototype.getValue = function () {
        return this.value;
    };
    /**
     * - For single point sliders, sets the thumb value.
     * - For range (two-thumb) sliders, sets the end thumb's value.
     */
    MDCSliderFoundation.prototype.setValue = function (value) {
        if (this.isRange && value < this.valueStart + this.minRange) {
            throw new Error("end thumb value (" + value + ") must be >= start thumb " +
                ("value (" + this.valueStart + ") + min range (" + this.minRange + ")"));
        }
        this.updateValue(value, _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END);
    };
    /**
     * Only applicable for range sliders.
     * @return The start thumb's value.
     */
    MDCSliderFoundation.prototype.getValueStart = function () {
        if (!this.isRange) {
            throw new Error('`valueStart` is only applicable for range sliders.');
        }
        return this.valueStart;
    };
    /**
     * Only applicable for range sliders. Sets the start thumb's value.
     */
    MDCSliderFoundation.prototype.setValueStart = function (valueStart) {
        if (!this.isRange) {
            throw new Error('`valueStart` is only applicable for range sliders.');
        }
        if (this.isRange && valueStart > this.value - this.minRange) {
            throw new Error("start thumb value (" + valueStart + ") must be <= end thumb " +
                ("value (" + this.value + ") - min range (" + this.minRange + ")"));
        }
        this.updateValue(valueStart, _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START);
    };
    MDCSliderFoundation.prototype.setStep = function (value) {
        this.step = value;
        this.numDecimalPlaces = getNumDecimalPlaces(value);
        this.updateUI();
    };
    /**
     * Only applicable for range sliders. Sets the minimum difference between the
     * start and end values.
     */
    MDCSliderFoundation.prototype.setMinRange = function (value) {
        if (!this.isRange) {
            throw new Error('`minRange` is only applicable for range sliders.');
        }
        if (value < 0) {
            throw new Error('`minRange` must be non-negative. ' +
                ("Current value: " + value));
        }
        if (this.value - this.valueStart < value) {
            throw new Error("start thumb value (" + this.valueStart + ") and end thumb value " +
                ("(" + this.value + ") must differ by at least " + value + "."));
        }
        this.minRange = value;
    };
    MDCSliderFoundation.prototype.setIsDiscrete = function (value) {
        this.isDiscrete = value;
        this.updateValueIndicatorUI();
        this.updateTickMarksUI();
    };
    MDCSliderFoundation.prototype.getStep = function () {
        return this.step;
    };
    MDCSliderFoundation.prototype.getMinRange = function () {
        if (!this.isRange) {
            throw new Error('`minRange` is only applicable for range sliders.');
        }
        return this.minRange;
    };
    MDCSliderFoundation.prototype.setHasTickMarks = function (value) {
        this.hasTickMarks = value;
        this.updateTickMarksUI();
    };
    MDCSliderFoundation.prototype.getDisabled = function () {
        return this.isDisabled;
    };
    /**
     * Sets disabled state, including updating styles and thumb tabindex.
     */
    MDCSliderFoundation.prototype.setDisabled = function (disabled) {
        this.isDisabled = disabled;
        if (disabled) {
            this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.DISABLED);
            if (this.isRange) {
                this.adapter.setInputAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.attributes.INPUT_DISABLED, '', _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START);
            }
            this.adapter.setInputAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.attributes.INPUT_DISABLED, '', _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END);
        }
        else {
            this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.DISABLED);
            if (this.isRange) {
                this.adapter.removeInputAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.attributes.INPUT_DISABLED, _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START);
            }
            this.adapter.removeInputAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.attributes.INPUT_DISABLED, _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END);
        }
    };
    /** @return Whether the slider is a range slider. */
    MDCSliderFoundation.prototype.getIsRange = function () {
        return this.isRange;
    };
    /**
     * - Syncs slider boundingClientRect with the current DOM.
     * - Updates UI based on internal state.
     */
    MDCSliderFoundation.prototype.layout = function (_a) {
        var _b = _a === void 0 ? {} : _a, skipUpdateUI = _b.skipUpdateUI;
        this.rect = this.adapter.getBoundingClientRect();
        if (this.isRange) {
            this.startThumbKnobWidth = this.adapter.getThumbKnobWidth(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START);
            this.endThumbKnobWidth = this.adapter.getThumbKnobWidth(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END);
        }
        if (!skipUpdateUI) {
            this.updateUI();
        }
    };
    /** Handles resize events on the window. */
    MDCSliderFoundation.prototype.handleResize = function () {
        this.layout();
    };
    /**
     * Handles pointer down events on the slider root element.
     */
    MDCSliderFoundation.prototype.handleDown = function (event) {
        if (this.isDisabled)
            return;
        this.valueStartBeforeDownEvent = this.valueStart;
        this.valueBeforeDownEvent = this.value;
        var clientX = event.clientX != null ?
            event.clientX :
            event.targetTouches[0].clientX;
        this.downEventClientX = clientX;
        var value = this.mapClientXOnSliderScale(clientX);
        this.thumb = this.getThumbFromDownEvent(clientX, value);
        if (this.thumb === null)
            return;
        this.handleDragStart(event, value, this.thumb);
        this.updateValue(value, this.thumb, { emitInputEvent: true });
    };
    /**
     * Handles pointer move events on the slider root element.
     */
    MDCSliderFoundation.prototype.handleMove = function (event) {
        if (this.isDisabled)
            return;
        // Prevent scrolling.
        event.preventDefault();
        var clientX = event.clientX != null ?
            event.clientX :
            event.targetTouches[0].clientX;
        var dragAlreadyStarted = this.thumb != null;
        this.thumb = this.getThumbFromMoveEvent(clientX);
        if (this.thumb === null)
            return;
        var value = this.mapClientXOnSliderScale(clientX);
        if (!dragAlreadyStarted) {
            this.handleDragStart(event, value, this.thumb);
            this.adapter.emitDragStartEvent(value, this.thumb);
        }
        this.updateValue(value, this.thumb, { emitInputEvent: true });
    };
    /**
     * Handles pointer up events on the slider root element.
     */
    MDCSliderFoundation.prototype.handleUp = function () {
        var _a, _b;
        if (this.isDisabled || this.thumb === null)
            return;
        // Remove the focused state and hide the value indicator(s) (if present)
        // if focus state is meant to be hidden.
        if ((_b = (_a = this.adapter).shouldHideFocusStylesForPointerEvents) === null || _b === void 0 ? void 0 : _b.call(_a)) {
            this.handleInputBlur(this.thumb);
        }
        var oldValue = this.thumb === _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START ?
            this.valueStartBeforeDownEvent :
            this.valueBeforeDownEvent;
        var newValue = this.thumb === _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START ? this.valueStart : this.value;
        if (oldValue !== newValue) {
            this.adapter.emitChangeEvent(newValue, this.thumb);
        }
        this.adapter.emitDragEndEvent(newValue, this.thumb);
        this.thumb = null;
    };
    /**
     * For range, discrete slider, shows the value indicator on both thumbs.
     */
    MDCSliderFoundation.prototype.handleThumbMouseenter = function () {
        if (!this.isDiscrete || !this.isRange)
            return;
        this.adapter.addThumbClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.THUMB_WITH_INDICATOR, _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START);
        this.adapter.addThumbClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.THUMB_WITH_INDICATOR, _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END);
    };
    /**
     * For range, discrete slider, hides the value indicator on both thumbs.
     */
    MDCSliderFoundation.prototype.handleThumbMouseleave = function () {
        var _a, _b;
        if (!this.isDiscrete || !this.isRange)
            return;
        if ((!((_b = (_a = this.adapter).shouldHideFocusStylesForPointerEvents) === null || _b === void 0 ? void 0 : _b.call(_a)) &&
            (this.adapter.isInputFocused(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START) ||
                this.adapter.isInputFocused(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END))) ||
            this.thumb) {
            // Leave value indicator shown if either input is focused or the thumb is
            // being dragged.
            return;
        }
        this.adapter.removeThumbClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.THUMB_WITH_INDICATOR, _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START);
        this.adapter.removeThumbClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.THUMB_WITH_INDICATOR, _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END);
    };
    MDCSliderFoundation.prototype.handleMousedownOrTouchstart = function (event) {
        var _this = this;
        var moveEventType = event.type === 'mousedown' ? 'mousemove' : 'touchmove';
        // After a down event on the slider root, listen for move events on
        // body (so the slider value is updated for events outside of the
        // slider root).
        this.adapter.registerBodyEventHandler(moveEventType, this.moveListener);
        var upHandler = function () {
            _this.handleUp();
            // Once the drag is finished (up event on body), remove the move
            // handler.
            _this.adapter.deregisterBodyEventHandler(moveEventType, _this.moveListener);
            // Also stop listening for subsequent up events.
            _this.adapter.deregisterEventHandler('mouseup', upHandler);
            _this.adapter.deregisterEventHandler('touchend', upHandler);
        };
        this.adapter.registerBodyEventHandler('mouseup', upHandler);
        this.adapter.registerBodyEventHandler('touchend', upHandler);
        this.handleDown(event);
    };
    MDCSliderFoundation.prototype.handlePointerdown = function (event) {
        var isPrimaryButton = event.button === 0;
        if (!isPrimaryButton)
            return;
        if (event.pointerId != null) {
            this.adapter.setPointerCapture(event.pointerId);
        }
        this.adapter.registerEventHandler('pointermove', this.moveListener);
        this.handleDown(event);
    };
    /**
     * Handles input `change` event by setting internal slider value to match
     * input's new value.
     */
    MDCSliderFoundation.prototype.handleInputChange = function (thumb) {
        var value = Number(this.adapter.getInputValue(thumb));
        if (thumb === _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START) {
            this.setValueStart(value);
        }
        else {
            this.setValue(value);
        }
        this.adapter.emitChangeEvent(thumb === _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START ? this.valueStart : this.value, thumb);
        this.adapter.emitInputEvent(thumb === _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START ? this.valueStart : this.value, thumb);
    };
    /** Shows activated state and value indicator on thumb(s). */
    MDCSliderFoundation.prototype.handleInputFocus = function (thumb) {
        this.adapter.addThumbClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.THUMB_FOCUSED, thumb);
        if (!this.isDiscrete)
            return;
        this.adapter.addThumbClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.THUMB_WITH_INDICATOR, thumb);
        if (this.isRange) {
            var otherThumb = thumb === _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START ? _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END : _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START;
            this.adapter.addThumbClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.THUMB_WITH_INDICATOR, otherThumb);
        }
    };
    /** Removes activated state and value indicator from thumb(s). */
    MDCSliderFoundation.prototype.handleInputBlur = function (thumb) {
        this.adapter.removeThumbClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.THUMB_FOCUSED, thumb);
        if (!this.isDiscrete)
            return;
        this.adapter.removeThumbClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.THUMB_WITH_INDICATOR, thumb);
        if (this.isRange) {
            var otherThumb = thumb === _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START ? _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END : _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START;
            this.adapter.removeThumbClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.THUMB_WITH_INDICATOR, otherThumb);
        }
    };
    /**
     * Emits custom dragStart event, along with focusing the underlying input.
     */
    MDCSliderFoundation.prototype.handleDragStart = function (event, value, thumb) {
        var _a, _b;
        this.adapter.emitDragStartEvent(value, thumb);
        this.adapter.focusInput(thumb);
        // Restore focused state and show the value indicator(s) (if present)
        // in case they were previously hidden on dragEnd.
        // This is needed if the input is already focused, in which case
        // #focusInput above wouldn't actually trigger #handleInputFocus,
        // which is why we need to invoke it manually here.
        if ((_b = (_a = this.adapter).shouldHideFocusStylesForPointerEvents) === null || _b === void 0 ? void 0 : _b.call(_a)) {
            this.handleInputFocus(thumb);
        }
        // Prevent the input (that we just focused) from losing focus.
        event.preventDefault();
    };
    /**
     * @return The thumb to be moved based on initial down event.
     */
    MDCSliderFoundation.prototype.getThumbFromDownEvent = function (clientX, value) {
        // For single point slider, thumb to be moved is always the END (only)
        // thumb.
        if (!this.isRange)
            return _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END;
        // Check if event press point is in the bounds of any thumb.
        var thumbStartRect = this.adapter.getThumbBoundingClientRect(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START);
        var thumbEndRect = this.adapter.getThumbBoundingClientRect(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END);
        var inThumbStartBounds = clientX >= thumbStartRect.left && clientX <= thumbStartRect.right;
        var inThumbEndBounds = clientX >= thumbEndRect.left && clientX <= thumbEndRect.right;
        if (inThumbStartBounds && inThumbEndBounds) {
            // Thumbs overlapping. Thumb to be moved cannot be determined yet.
            return null;
        }
        // If press is in bounds for either thumb on down event, that's the thumb
        // to be moved.
        if (inThumbStartBounds) {
            return _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START;
        }
        if (inThumbEndBounds) {
            return _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END;
        }
        // For presses outside the range, return whichever thumb is closer.
        if (value < this.valueStart) {
            return _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START;
        }
        if (value > this.value) {
            return _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END;
        }
        // For presses inside the range, return whichever thumb is closer.
        return (value - this.valueStart <= this.value - value) ? _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START :
            _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END;
    };
    /**
     * @return The thumb to be moved based on move event (based on drag
     *     direction from original down event). Only applicable if thumbs
     *     were overlapping in the down event.
     */
    MDCSliderFoundation.prototype.getThumbFromMoveEvent = function (clientX) {
        // Thumb has already been chosen.
        if (this.thumb !== null)
            return this.thumb;
        if (this.downEventClientX === null) {
            throw new Error('`downEventClientX` is null after move event.');
        }
        var moveDistanceUnderThreshold = Math.abs(this.downEventClientX - clientX) < _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.THUMB_UPDATE_MIN_PX;
        if (moveDistanceUnderThreshold)
            return this.thumb;
        var draggedThumbToLeft = clientX < this.downEventClientX;
        if (draggedThumbToLeft) {
            return this.adapter.isRTL() ? _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END : _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START;
        }
        else {
            return this.adapter.isRTL() ? _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START : _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END;
        }
    };
    /**
     * Updates UI based on internal state.
     * @param thumb Thumb whose value is being updated. If undefined, UI is
     *     updated for both thumbs based on current internal state.
     */
    MDCSliderFoundation.prototype.updateUI = function (thumb) {
        if (thumb) {
            this.updateThumbAndInputAttributes(thumb);
        }
        else {
            this.updateThumbAndInputAttributes(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START);
            this.updateThumbAndInputAttributes(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END);
        }
        this.updateThumbAndTrackUI(thumb);
        this.updateValueIndicatorUI(thumb);
        this.updateTickMarksUI();
    };
    /**
     * Updates thumb and input attributes based on current value.
     * @param thumb Thumb whose aria attributes to update.
     */
    MDCSliderFoundation.prototype.updateThumbAndInputAttributes = function (thumb) {
        if (!thumb)
            return;
        var value = this.isRange && thumb === _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START ? this.valueStart : this.value;
        var valueStr = String(value);
        this.adapter.setInputAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.attributes.INPUT_VALUE, valueStr, thumb);
        if (this.isRange && thumb === _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START) {
            this.adapter.setInputAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.attributes.INPUT_MIN, String(value + this.minRange), _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END);
        }
        else if (this.isRange && thumb === _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END) {
            this.adapter.setInputAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.attributes.INPUT_MAX, String(value - this.minRange), _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START);
        }
        // Sync attribute with property.
        if (this.adapter.getInputValue(thumb) !== valueStr) {
            this.adapter.setInputValue(valueStr, thumb);
        }
        var valueToAriaValueTextFn = this.adapter.getValueToAriaValueTextFn();
        if (valueToAriaValueTextFn) {
            this.adapter.setInputAttribute(_constants__WEBPACK_IMPORTED_MODULE_1__.attributes.ARIA_VALUETEXT, valueToAriaValueTextFn(value, thumb), thumb);
        }
    };
    /**
     * Updates value indicator UI based on current value.
     * @param thumb Thumb whose value indicator to update. If undefined, all
     *     thumbs' value indicators are updated.
     */
    MDCSliderFoundation.prototype.updateValueIndicatorUI = function (thumb) {
        if (!this.isDiscrete)
            return;
        var value = this.isRange && thumb === _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START ? this.valueStart : this.value;
        this.adapter.setValueIndicatorText(value, thumb === _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START ? _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START : _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END);
        if (!thumb && this.isRange) {
            this.adapter.setValueIndicatorText(this.valueStart, _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START);
        }
    };
    /**
     * Updates tick marks UI within slider, based on current min, max, and step.
     */
    MDCSliderFoundation.prototype.updateTickMarksUI = function () {
        if (!this.isDiscrete || !this.hasTickMarks)
            return;
        var numTickMarksInactiveStart = (this.valueStart - this.min) / this.step;
        var numTickMarksActive = (this.value - this.valueStart) / this.step + 1;
        var numTickMarksInactiveEnd = (this.max - this.value) / this.step;
        var tickMarksInactiveStart = Array.from({ length: numTickMarksInactiveStart })
            .fill(_types__WEBPACK_IMPORTED_MODULE_3__.TickMark.INACTIVE);
        var tickMarksActive = Array.from({ length: numTickMarksActive })
            .fill(_types__WEBPACK_IMPORTED_MODULE_3__.TickMark.ACTIVE);
        var tickMarksInactiveEnd = Array.from({ length: numTickMarksInactiveEnd })
            .fill(_types__WEBPACK_IMPORTED_MODULE_3__.TickMark.INACTIVE);
        this.adapter.updateTickMarks(tickMarksInactiveStart.concat(tickMarksActive)
            .concat(tickMarksInactiveEnd));
    };
    /** Maps clientX to a value on the slider scale. */
    MDCSliderFoundation.prototype.mapClientXOnSliderScale = function (clientX) {
        var xPos = clientX - this.rect.left;
        var pctComplete = xPos / this.rect.width;
        if (this.adapter.isRTL()) {
            pctComplete = 1 - pctComplete;
        }
        // Fit the percentage complete between the range [min,max]
        // by remapping from [0, 1] to [min, min+(max-min)].
        var value = this.min + pctComplete * (this.max - this.min);
        if (value === this.max || value === this.min) {
            return value;
        }
        return Number(this.quantize(value).toFixed(this.numDecimalPlaces));
    };
    /** Calculates the quantized value based on step value. */
    MDCSliderFoundation.prototype.quantize = function (value) {
        var numSteps = Math.round((value - this.min) / this.step);
        return this.min + numSteps * this.step;
    };
    /**
     * Updates slider value (internal state and UI) based on the given value.
     */
    MDCSliderFoundation.prototype.updateValue = function (value, thumb, _a) {
        var _b = _a === void 0 ? {} : _a, emitInputEvent = _b.emitInputEvent;
        value = this.clampValue(value, thumb);
        if (this.isRange && thumb === _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START) {
            // Exit early if current value is the same as the new value.
            if (this.valueStart === value)
                return;
            this.valueStart = value;
        }
        else {
            // Exit early if current value is the same as the new value.
            if (this.value === value)
                return;
            this.value = value;
        }
        this.updateUI(thumb);
        if (emitInputEvent) {
            this.adapter.emitInputEvent(thumb === _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START ? this.valueStart : this.value, thumb);
        }
    };
    /**
     * Clamps the given value for the given thumb based on slider properties:
     * - Restricts value within [min, max].
     * - If range slider, clamp start value <= end value - min range, and
     *   end value >= start value + min range.
     */
    MDCSliderFoundation.prototype.clampValue = function (value, thumb) {
        // Clamp value to [min, max] range.
        value = Math.min(Math.max(value, this.min), this.max);
        var thumbStartMovedPastThumbEnd = this.isRange && thumb === _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START &&
            value > this.value - this.minRange;
        if (thumbStartMovedPastThumbEnd) {
            return this.value - this.minRange;
        }
        var thumbEndMovedPastThumbStart = this.isRange && thumb === _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END &&
            value < this.valueStart + this.minRange;
        if (thumbEndMovedPastThumbStart) {
            return this.valueStart + this.minRange;
        }
        return value;
    };
    /**
     * Updates the active track and thumb style properties to reflect current
     * value.
     */
    MDCSliderFoundation.prototype.updateThumbAndTrackUI = function (thumb) {
        var _this = this;
        var _a = this, max = _a.max, min = _a.min;
        var pctComplete = (this.value - this.valueStart) / (max - min);
        var rangePx = pctComplete * this.rect.width;
        var isRtl = this.adapter.isRTL();
        var transformProp = HAS_WINDOW ? (0,_material_animation_util__WEBPACK_IMPORTED_MODULE_4__.getCorrectPropertyName)(window, 'transform') : 'transform';
        if (this.isRange) {
            var thumbLeftPos_1 = this.adapter.isRTL() ?
                (max - this.value) / (max - min) * this.rect.width :
                (this.valueStart - min) / (max - min) * this.rect.width;
            var thumbRightPos_1 = thumbLeftPos_1 + rangePx;
            this.animFrame.request(AnimationKeys.SLIDER_UPDATE, function () {
                // Set active track styles, accounting for animation direction by
                // setting `transform-origin`.
                var trackAnimatesFromRight = (!isRtl && thumb === _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START) ||
                    (isRtl && thumb !== _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START);
                if (trackAnimatesFromRight) {
                    _this.adapter.setTrackActiveStyleProperty('transform-origin', 'right');
                    _this.adapter.setTrackActiveStyleProperty('left', 'auto');
                    _this.adapter.setTrackActiveStyleProperty('right', _this.rect.width - thumbRightPos_1 + "px");
                }
                else {
                    _this.adapter.setTrackActiveStyleProperty('transform-origin', 'left');
                    _this.adapter.setTrackActiveStyleProperty('right', 'auto');
                    _this.adapter.setTrackActiveStyleProperty('left', thumbLeftPos_1 + "px");
                }
                _this.adapter.setTrackActiveStyleProperty(transformProp, "scaleX(" + pctComplete + ")");
                // Set thumb styles.
                var thumbStartPos = isRtl ? thumbRightPos_1 : thumbLeftPos_1;
                var thumbEndPos = _this.adapter.isRTL() ? thumbLeftPos_1 : thumbRightPos_1;
                if (thumb === _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START || !thumb || !_this.initialStylesRemoved) {
                    _this.adapter.setThumbStyleProperty(transformProp, "translateX(" + thumbStartPos + "px)", _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START);
                    _this.alignValueIndicator(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START, thumbStartPos);
                }
                if (thumb === _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END || !thumb || !_this.initialStylesRemoved) {
                    _this.adapter.setThumbStyleProperty(transformProp, "translateX(" + thumbEndPos + "px)", _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END);
                    _this.alignValueIndicator(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END, thumbEndPos);
                }
                _this.removeInitialStyles(isRtl);
                _this.updateOverlappingThumbsUI(thumbStartPos, thumbEndPos, thumb);
            });
        }
        else {
            this.animFrame.request(AnimationKeys.SLIDER_UPDATE, function () {
                var thumbStartPos = isRtl ? _this.rect.width - rangePx : rangePx;
                _this.adapter.setThumbStyleProperty(transformProp, "translateX(" + thumbStartPos + "px)", _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END);
                _this.alignValueIndicator(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END, thumbStartPos);
                _this.adapter.setTrackActiveStyleProperty(transformProp, "scaleX(" + pctComplete + ")");
                _this.removeInitialStyles(isRtl);
            });
        }
    };
    /**
     * Shifts the value indicator to either side if it would otherwise stick
     * beyond the slider's length while keeping the caret above the knob.
     */
    MDCSliderFoundation.prototype.alignValueIndicator = function (thumb, thumbPos) {
        if (!this.isDiscrete)
            return;
        var thumbHalfWidth = this.adapter.getThumbBoundingClientRect(thumb).width / 2;
        var containerWidth = this.adapter.getValueIndicatorContainerWidth(thumb);
        var sliderWidth = this.adapter.getBoundingClientRect().width;
        if (containerWidth / 2 > thumbPos + thumbHalfWidth) {
            this.adapter.setThumbStyleProperty(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.VAR_VALUE_INDICATOR_CARET_LEFT, thumbHalfWidth + "px", thumb);
            this.adapter.setThumbStyleProperty(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.VAR_VALUE_INDICATOR_CARET_RIGHT, 'auto', thumb);
            this.adapter.setThumbStyleProperty(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.VAR_VALUE_INDICATOR_CARET_TRANSFORM, 'translateX(-50%)', thumb);
            this.adapter.setThumbStyleProperty(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.VAR_VALUE_INDICATOR_CONTAINER_LEFT, '0', thumb);
            this.adapter.setThumbStyleProperty(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.VAR_VALUE_INDICATOR_CONTAINER_RIGHT, 'auto', thumb);
            this.adapter.setThumbStyleProperty(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM, 'none', thumb);
        }
        else if (containerWidth / 2 > sliderWidth - thumbPos + thumbHalfWidth) {
            this.adapter.setThumbStyleProperty(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.VAR_VALUE_INDICATOR_CARET_LEFT, 'auto', thumb);
            this.adapter.setThumbStyleProperty(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.VAR_VALUE_INDICATOR_CARET_RIGHT, thumbHalfWidth + "px", thumb);
            this.adapter.setThumbStyleProperty(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.VAR_VALUE_INDICATOR_CARET_TRANSFORM, 'translateX(50%)', thumb);
            this.adapter.setThumbStyleProperty(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.VAR_VALUE_INDICATOR_CONTAINER_LEFT, 'auto', thumb);
            this.adapter.setThumbStyleProperty(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.VAR_VALUE_INDICATOR_CONTAINER_RIGHT, '0', thumb);
            this.adapter.setThumbStyleProperty(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM, 'none', thumb);
        }
        else {
            this.adapter.setThumbStyleProperty(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.VAR_VALUE_INDICATOR_CARET_LEFT, '50%', thumb);
            this.adapter.setThumbStyleProperty(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.VAR_VALUE_INDICATOR_CARET_RIGHT, 'auto', thumb);
            this.adapter.setThumbStyleProperty(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.VAR_VALUE_INDICATOR_CARET_TRANSFORM, 'translateX(-50%)', thumb);
            this.adapter.setThumbStyleProperty(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.VAR_VALUE_INDICATOR_CONTAINER_LEFT, '50%', thumb);
            this.adapter.setThumbStyleProperty(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.VAR_VALUE_INDICATOR_CONTAINER_RIGHT, 'auto', thumb);
            this.adapter.setThumbStyleProperty(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.VAR_VALUE_INDICATOR_CONTAINER_TRANSFORM, 'translateX(-50%)', thumb);
        }
    };
    /**
     * Removes initial inline styles if not already removed. `left:<...>%`
     * inline styles can be added to position the thumb correctly before JS
     * initialization. However, they need to be removed before the JS starts
     * positioning the thumb. This is because the JS uses
     * `transform:translateX(<...>)px` (for performance reasons) to position
     * the thumb (which is not possible for initial styles since we need the
     * bounding rect measurements).
     */
    MDCSliderFoundation.prototype.removeInitialStyles = function (isRtl) {
        if (this.initialStylesRemoved)
            return;
        // Remove thumb position properties that were added for initial render.
        var position = isRtl ? 'right' : 'left';
        this.adapter.removeThumbStyleProperty(position, _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END);
        if (this.isRange) {
            this.adapter.removeThumbStyleProperty(position, _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START);
        }
        this.initialStylesRemoved = true;
        this.resetTrackAndThumbAnimation();
    };
    /**
     * Resets track/thumb animation to prevent animation when adding
     * `transform` styles to thumb initially.
     */
    MDCSliderFoundation.prototype.resetTrackAndThumbAnimation = function () {
        var _this = this;
        if (!this.isDiscrete)
            return;
        // Set transition properties to default (no animation), so that the
        // newly added `transform` styles do not animate thumb/track from
        // their default positions.
        var transitionProp = HAS_WINDOW ?
            (0,_material_animation_util__WEBPACK_IMPORTED_MODULE_4__.getCorrectPropertyName)(window, 'transition') :
            'transition';
        var transitionDefault = 'none 0s ease 0s';
        this.adapter.setThumbStyleProperty(transitionProp, transitionDefault, _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END);
        if (this.isRange) {
            this.adapter.setThumbStyleProperty(transitionProp, transitionDefault, _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START);
        }
        this.adapter.setTrackActiveStyleProperty(transitionProp, transitionDefault);
        // In the next frame, remove the transition inline styles we just
        // added, such that any animations added in the CSS can now take effect.
        requestAnimationFrame(function () {
            _this.adapter.removeThumbStyleProperty(transitionProp, _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END);
            _this.adapter.removeTrackActiveStyleProperty(transitionProp);
            if (_this.isRange) {
                _this.adapter.removeThumbStyleProperty(transitionProp, _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START);
            }
        });
    };
    /**
     * Adds THUMB_TOP class to active thumb if thumb knobs overlap; otherwise
     * removes THUMB_TOP class from both thumbs.
     * @param thumb Thumb that is active (being moved).
     */
    MDCSliderFoundation.prototype.updateOverlappingThumbsUI = function (thumbStartPos, thumbEndPos, thumb) {
        var thumbsOverlap = false;
        if (this.adapter.isRTL()) {
            var startThumbLeftEdge = thumbStartPos - this.startThumbKnobWidth / 2;
            var endThumbRightEdge = thumbEndPos + this.endThumbKnobWidth / 2;
            thumbsOverlap = endThumbRightEdge >= startThumbLeftEdge;
        }
        else {
            var startThumbRightEdge = thumbStartPos + this.startThumbKnobWidth / 2;
            var endThumbLeftEdge = thumbEndPos - this.endThumbKnobWidth / 2;
            thumbsOverlap = startThumbRightEdge >= endThumbLeftEdge;
        }
        if (thumbsOverlap) {
            this.adapter.addThumbClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.THUMB_TOP, 
            // If no thumb was dragged (in the case of initial layout), end
            // thumb is on top by default.
            thumb || _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END);
            this.adapter.removeThumbClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.THUMB_TOP, thumb === _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START ? _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END : _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START);
        }
        else {
            this.adapter.removeThumbClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.THUMB_TOP, _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START);
            this.adapter.removeThumbClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.THUMB_TOP, _types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END);
        }
    };
    /**
     * Converts attribute value to a number, e.g. '100' => 100. Throws errors
     * for invalid values.
     * @param attributeValue Attribute value, e.g. 100.
     * @param attributeName Attribute name, e.g. `aria-valuemax`.
     */
    MDCSliderFoundation.prototype.convertAttributeValueToNumber = function (attributeValue, attributeName) {
        if (attributeValue === null) {
            throw new Error('MDCSliderFoundation: `' + attributeName + '` must be non-null.');
        }
        var value = Number(attributeValue);
        if (isNaN(value)) {
            throw new Error('MDCSliderFoundation: `' + attributeName + '` value is `' +
                attributeValue + '`, but must be a number.');
        }
        return value;
    };
    /** Checks that the given properties are valid slider values. */
    MDCSliderFoundation.prototype.validateProperties = function (_a) {
        var min = _a.min, max = _a.max, value = _a.value, valueStart = _a.valueStart, step = _a.step, minRange = _a.minRange;
        if (min >= max) {
            throw new Error("MDCSliderFoundation: min must be strictly less than max. " +
                ("Current: [min: " + min + ", max: " + max + "]"));
        }
        if (step <= 0) {
            throw new Error("MDCSliderFoundation: step must be a positive number. " +
                ("Current step: " + step));
        }
        if (this.isRange) {
            if (value < min || value > max || valueStart < min || valueStart > max) {
                throw new Error("MDCSliderFoundation: values must be in [min, max] range. " +
                    ("Current values: [start value: " + valueStart + ", end value: ") +
                    (value + ", min: " + min + ", max: " + max + "]"));
            }
            if (valueStart > value) {
                throw new Error("MDCSliderFoundation: start value must be <= end value. " +
                    ("Current values: [start value: " + valueStart + ", end value: " + value + "]"));
            }
            if (minRange < 0) {
                throw new Error("MDCSliderFoundation: minimum range must be non-negative. " +
                    ("Current min range: " + minRange));
            }
            if (value - valueStart < minRange) {
                throw new Error("MDCSliderFoundation: start value and end value must differ by at least " +
                    (minRange + ". Current values: [start value: " + valueStart + ", ") +
                    ("end value: " + value + "]"));
            }
            var numStepsValueStartFromMin = (valueStart - min) / step;
            var numStepsValueFromMin = (value - min) / step;
            if (!Number.isInteger(parseFloat(numStepsValueStartFromMin.toFixed(6))) ||
                !Number.isInteger(parseFloat(numStepsValueFromMin.toFixed(6)))) {
                throw new Error("MDCSliderFoundation: Slider values must be valid based on the " +
                    ("step value (" + step + "). Current values: [start value: ") +
                    (valueStart + ", end value: " + value + ", min: " + min + "]"));
            }
        }
        else { // Single point slider.
            if (value < min || value > max) {
                throw new Error("MDCSliderFoundation: value must be in [min, max] range. " +
                    ("Current values: [value: " + value + ", min: " + min + ", max: " + max + "]"));
            }
            var numStepsValueFromMin = (value - min) / step;
            if (!Number.isInteger(parseFloat(numStepsValueFromMin.toFixed(6)))) {
                throw new Error("MDCSliderFoundation: Slider value must be valid based on the " +
                    ("step value (" + step + "). Current value: " + value));
            }
        }
    };
    MDCSliderFoundation.prototype.registerEventHandlers = function () {
        this.adapter.registerWindowEventHandler('resize', this.resizeListener);
        if (MDCSliderFoundation.SUPPORTS_POINTER_EVENTS) {
            // If supported, use pointer events API with #setPointerCapture.
            this.adapter.registerEventHandler('pointerdown', this.pointerdownListener);
            this.adapter.registerEventHandler('pointerup', this.pointerupListener);
        }
        else {
            // Otherwise, fall back to mousedown/touchstart events.
            this.adapter.registerEventHandler('mousedown', this.mousedownOrTouchstartListener);
            this.adapter.registerEventHandler('touchstart', this.mousedownOrTouchstartListener);
        }
        if (this.isRange) {
            this.adapter.registerThumbEventHandler(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START, 'mouseenter', this.thumbMouseenterListener);
            this.adapter.registerThumbEventHandler(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START, 'mouseleave', this.thumbMouseleaveListener);
            this.adapter.registerInputEventHandler(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START, 'change', this.inputStartChangeListener);
            this.adapter.registerInputEventHandler(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START, 'focus', this.inputStartFocusListener);
            this.adapter.registerInputEventHandler(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START, 'blur', this.inputStartBlurListener);
        }
        this.adapter.registerThumbEventHandler(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END, 'mouseenter', this.thumbMouseenterListener);
        this.adapter.registerThumbEventHandler(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END, 'mouseleave', this.thumbMouseleaveListener);
        this.adapter.registerInputEventHandler(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END, 'change', this.inputEndChangeListener);
        this.adapter.registerInputEventHandler(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END, 'focus', this.inputEndFocusListener);
        this.adapter.registerInputEventHandler(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END, 'blur', this.inputEndBlurListener);
    };
    MDCSliderFoundation.prototype.deregisterEventHandlers = function () {
        this.adapter.deregisterWindowEventHandler('resize', this.resizeListener);
        if (MDCSliderFoundation.SUPPORTS_POINTER_EVENTS) {
            this.adapter.deregisterEventHandler('pointerdown', this.pointerdownListener);
            this.adapter.deregisterEventHandler('pointerup', this.pointerupListener);
        }
        else {
            this.adapter.deregisterEventHandler('mousedown', this.mousedownOrTouchstartListener);
            this.adapter.deregisterEventHandler('touchstart', this.mousedownOrTouchstartListener);
        }
        if (this.isRange) {
            this.adapter.deregisterThumbEventHandler(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START, 'mouseenter', this.thumbMouseenterListener);
            this.adapter.deregisterThumbEventHandler(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START, 'mouseleave', this.thumbMouseleaveListener);
            this.adapter.deregisterInputEventHandler(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START, 'change', this.inputStartChangeListener);
            this.adapter.deregisterInputEventHandler(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START, 'focus', this.inputStartFocusListener);
            this.adapter.deregisterInputEventHandler(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.START, 'blur', this.inputStartBlurListener);
        }
        this.adapter.deregisterThumbEventHandler(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END, 'mouseenter', this.thumbMouseenterListener);
        this.adapter.deregisterThumbEventHandler(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END, 'mouseleave', this.thumbMouseleaveListener);
        this.adapter.deregisterInputEventHandler(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END, 'change', this.inputEndChangeListener);
        this.adapter.deregisterInputEventHandler(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END, 'focus', this.inputEndFocusListener);
        this.adapter.deregisterInputEventHandler(_types__WEBPACK_IMPORTED_MODULE_3__.Thumb.END, 'blur', this.inputEndBlurListener);
    };
    MDCSliderFoundation.prototype.handlePointerup = function () {
        this.handleUp();
        this.adapter.deregisterEventHandler('pointermove', this.moveListener);
    };
    MDCSliderFoundation.SUPPORTS_POINTER_EVENTS = HAS_WINDOW && Boolean(window.PointerEvent) &&
        // #setPointerCapture is buggy on iOS, so we can't use pointer events
        // until the following bug is fixed:
        // https://bugs.webkit.org/show_bug.cgi?id=220196
        !isIOS();
    return MDCSliderFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_5__.MDCFoundation));

function isIOS() {
    // Source:
    // https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
    return [
        'iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone',
        'iPod'
    ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
}
/**
 * Given a number, returns the number of digits that appear after the
 * decimal point.
 * See
 * https://stackoverflow.com/questions/9539513/is-there-a-reliable-way-in-javascript-to-obtain-the-number-of-decimal-places-of
 */
function getNumDecimalPlaces(n) {
    // Pull out the fraction and the exponent.
    var match = /(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(String(n));
    // NaN or Infinity or integer.
    // We arbitrarily decide that Infinity is integral.
    if (!match)
        return 0;
    var fraction = match[1] || ''; // E.g. 1.234e-2 => 234
    var exponent = match[2] || 0; // E.g. 1.234e-2 => -2
    // Count the number of digits in the fraction and subtract the
    // exponent to simulate moving the decimal point left by exponent places.
    // 1.234e+2 has 1 fraction digit and '234'.length -  2 == 1
    // 1.234e-2 has 5 fraction digit and '234'.length - -2 == 5
    return Math.max(0, // lower limit
    (fraction === '0' ? 0 : fraction.length) - Number(exponent));
}
//# sourceMappingURL=foundation.js.map

/***/ }),

/***/ 191:
/*!************************************************!*\
  !*** ./node_modules/@material/slider/types.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Thumb": function() { return /* binding */ Thumb; },
/* harmony export */   "TickMark": function() { return /* binding */ TickMark; }
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
/** Tick mark enum, for discrete sliders. */
var TickMark;
(function (TickMark) {
    TickMark[TickMark["ACTIVE"] = 0] = "ACTIVE";
    TickMark[TickMark["INACTIVE"] = 1] = "INACTIVE";
})(TickMark || (TickMark = {}));
/**
 * Thumb types: range slider has two thumbs (START, END) whereas single point
 * slider only has one thumb (END).
 */
var Thumb;
(function (Thumb) {
    // Thumb at start of slider (e.g. in LTR mode, left thumb on range slider).
    Thumb[Thumb["START"] = 1] = "START";
    // Thumb at end of slider (e.g. in LTR mode, right thumb on range slider,
    // or only thumb on single point slider).
    Thumb[Thumb["END"] = 2] = "END";
})(Thumb || (Thumb = {}));
//# sourceMappingURL=types.js.map

/***/ })

}]);
//# sourceMappingURL=vendors-79a171d5.3e95cc108b214a1506c0.bundle.js.map