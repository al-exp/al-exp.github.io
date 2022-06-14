(self["webpackChunkweb_client"] = self["webpackChunkweb_client"] || []).push([["app-9a8b795a"],{

/***/ "app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ 7091);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../static/AlgoLion_logo.svg */ 8385), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../static/database.svg */ 7833), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../static/battery.svg */ 4352), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var code = "<template>\n  <require from=\"./resources/styles/global.scss\"></require>\n  <require from=\"./app.scss\"></require>\n  <mdc-top-app-bar fixed class=\"app-top-app-bar\">\n    <mdc-top-app-bar-row>\n      <mdc-top-app-bar-section start>\n        <mdc-top-app-bar-title>\n          <div class=\"app__logo\">\n            <a class=\"header__item-link\" href=\"https://algolion.com\" target=\"_blank\">\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" width=\"100%\" height=\"100%\" /><img />\n            </a>\n          </div>\n        </mdc-top-app-bar-title>\n      </mdc-top-app-bar-section>\n      <mdc-top-app-bar-section end>\n        <!-- HEADER BUTTONS WRAPPER -->\n        <div class=\"app__header-wrapper\">\n          <!-- HEADER BUTTON -->\n          <a class=\"app__header-button app-button-primary\" mdc-button raised href=\"analyze\">\n            <mdc-icon>\n              <img class=\"icon-svg\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" width=\"100%\" height=\"100%\" />\n            </mdc-icon> Upload battery data\n          </a>\n          <!-- HEADER BUTTON -->\n          <a class=\"app__header-button app-button-secondary\" mdc-button raised href=\"analyze\">\n            <mdc-icon>\n              <img class=\"icon-svg\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" width=\"100%\" height=\"100%\" />\n            </mdc-icon> Test battery\n          </a>\n          <!-- HEADER LINK -->\n          <div class=\"app__header-links\">\n            <div class=\"app__header-link\">\n              <a mdc-button href=\"/#\">Get training</a>\n            </div>\n            <!-- HEADER LINK -->\n            <div class=\"app__header-link\">\n              <a mdc-button href=\"/#\">Support</a>\n            </div>\n            <div class=\"app__header-link\">\n              <div class=\"lang-switcher\">\n                <Locales>\n                </Locales>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"icon-notifications\" data-counter=\"2\">\n          <mdc-icon-button icon=\"notifications\"></mdc-icon-button>\n        </div>\n        <div class=\"icon-settings\">\n          <mdc-icon-button icon=\"settings\"></mdc-icon-button>\n        </div>\n        <div mdc-menu-surface-anchor ref=\"userMenuAnchor\">\n          <button class=\"app__user-btn\" mdc-fab touch click.delegate=\"demo.open=!demo.open\" mini icon=\"person\"></button>\n          <mdc-menu view-model.ref=\"demo\" mdcmenu:selected.trigger=\"onUserMenuSelect($event)\"\n            anchor.bind=\"userMenuAnchor\" anchor-corner=\"BOTTOM_LEFT\">\n            <mdc-list class=\"app-drawer-list\" tabindex=\"-1\">\n              <mdc-list-item>Logout</mdc-list-item>\n            </mdc-list>\n          </mdc-menu>\n        </div>\n      </mdc-top-app-bar-section>\n    </mdc-top-app-bar-row>\n  </mdc-top-app-bar>\n  <div class=\"app-panel\">\n    <mdc-drawer class=\"app-drawer--custom\" view-model.ref=\"drawer\" mdc-top-app-bar-fixed-adjust>\n      <!-- <mdc-drawer-header title=\"Aurelia\" subtitle=\"Material Components Web\"></mdc-drawer-header> -->\n      <mdc-drawer-content class=\"app__side-bar\">\n        <mdc-list class=\"app__side-bar-list\" activated wrap-focus mdclist:action.delegate=\"navigateTo($event.detail)\"\n          tabindex=\"0\">\n          <template repeat.for=\"m of navModels\">\n            <mdc-list-item activated.bind=\"m.isActive\" value.bind=\"m\">\n              <div class=\"app__nav-item\">\n                <div class=\"app__nav-item-icon\">\n                  <img class=\"icon-svg\" src=\"${m.settings.icon}\" width=\"100%\" height=\"100%\" />\n                </div>\n                <div class=\"app__nav-item-title\">${m.title}</div>\n              </div>\n            </mdc-list-item>\n            <mdc-list-divider if.bind=\"m.config.divider\"></mdc-list-divider>\n          </template>\n        </mdc-list>\n      </mdc-drawer-content>\n    </mdc-drawer>\n    <mdc-drawer-app-content mdc-top-app-bar-fixed-adjust class=\"app-panel-section\">\n      <router-view></router-view>\n    </mdc-drawer-app-content>\n  </div>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./af": 2786,
	"./af.js": 2786,
	"./ar": 867,
	"./ar-dz": 4130,
	"./ar-dz.js": 4130,
	"./ar-kw": 6135,
	"./ar-kw.js": 6135,
	"./ar-ly": 6440,
	"./ar-ly.js": 6440,
	"./ar-ma": 7702,
	"./ar-ma.js": 7702,
	"./ar-sa": 6040,
	"./ar-sa.js": 6040,
	"./ar-tn": 7100,
	"./ar-tn.js": 7100,
	"./ar.js": 867,
	"./az": 1083,
	"./az.js": 1083,
	"./be": 9808,
	"./be.js": 9808,
	"./bg": 8338,
	"./bg.js": 8338,
	"./bm": 7438,
	"./bm.js": 7438,
	"./bn": 8905,
	"./bn-bd": 6225,
	"./bn-bd.js": 6225,
	"./bn.js": 8905,
	"./bo": 1560,
	"./bo.js": 1560,
	"./br": 1278,
	"./br.js": 1278,
	"./bs": 622,
	"./bs.js": 622,
	"./ca": 2468,
	"./ca.js": 2468,
	"./cs": 5822,
	"./cs.js": 5822,
	"./cv": 877,
	"./cv.js": 877,
	"./cy": 7373,
	"./cy.js": 7373,
	"./da": 4780,
	"./da.js": 4780,
	"./de": 9740,
	"./de-at": 217,
	"./de-at.js": 217,
	"./de-ch": 894,
	"./de-ch.js": 894,
	"./de.js": 9740,
	"./dv": 5300,
	"./dv.js": 5300,
	"./el": 837,
	"./el.js": 837,
	"./en-au": 8348,
	"./en-au.js": 8348,
	"./en-ca": 7925,
	"./en-ca.js": 7925,
	"./en-gb": 2243,
	"./en-gb.js": 2243,
	"./en-ie": 6436,
	"./en-ie.js": 6436,
	"./en-il": 7207,
	"./en-il.js": 7207,
	"./en-in": 4175,
	"./en-in.js": 4175,
	"./en-nz": 6319,
	"./en-nz.js": 6319,
	"./en-sg": 1662,
	"./en-sg.js": 1662,
	"./eo": 2915,
	"./eo.js": 2915,
	"./es": 5655,
	"./es-do": 5251,
	"./es-do.js": 5251,
	"./es-mx": 6112,
	"./es-mx.js": 6112,
	"./es-us": 1146,
	"./es-us.js": 1146,
	"./es.js": 5655,
	"./et": 5603,
	"./et.js": 5603,
	"./eu": 7763,
	"./eu.js": 7763,
	"./fa": 6959,
	"./fa.js": 6959,
	"./fi": 1897,
	"./fi.js": 1897,
	"./fil": 2549,
	"./fil.js": 2549,
	"./fo": 4694,
	"./fo.js": 4694,
	"./fr": 4470,
	"./fr-ca": 3049,
	"./fr-ca.js": 3049,
	"./fr-ch": 2330,
	"./fr-ch.js": 2330,
	"./fr.js": 4470,
	"./fy": 5044,
	"./fy.js": 5044,
	"./ga": 9295,
	"./ga.js": 9295,
	"./gd": 2101,
	"./gd.js": 2101,
	"./gl": 8794,
	"./gl.js": 8794,
	"./gom-deva": 7884,
	"./gom-deva.js": 7884,
	"./gom-latn": 3168,
	"./gom-latn.js": 3168,
	"./gu": 5349,
	"./gu.js": 5349,
	"./he": 4206,
	"./he.js": 4206,
	"./hi": 94,
	"./hi.js": 94,
	"./hr": 316,
	"./hr.js": 316,
	"./hu": 2138,
	"./hu.js": 2138,
	"./hy-am": 1423,
	"./hy-am.js": 1423,
	"./id": 9218,
	"./id.js": 9218,
	"./is": 135,
	"./is.js": 135,
	"./it": 626,
	"./it-ch": 150,
	"./it-ch.js": 150,
	"./it.js": 626,
	"./ja": 9183,
	"./ja.js": 9183,
	"./jv": 4286,
	"./jv.js": 4286,
	"./ka": 2105,
	"./ka.js": 2105,
	"./kk": 7772,
	"./kk.js": 7772,
	"./km": 8758,
	"./km.js": 8758,
	"./kn": 9282,
	"./kn.js": 9282,
	"./ko": 3730,
	"./ko.js": 3730,
	"./ku": 1408,
	"./ku.js": 1408,
	"./ky": 3291,
	"./ky.js": 3291,
	"./lb": 6841,
	"./lb.js": 6841,
	"./lo": 5466,
	"./lo.js": 5466,
	"./lt": 7010,
	"./lt.js": 7010,
	"./lv": 7595,
	"./lv.js": 7595,
	"./me": 9861,
	"./me.js": 9861,
	"./mi": 5493,
	"./mi.js": 5493,
	"./mk": 5966,
	"./mk.js": 5966,
	"./ml": 7341,
	"./ml.js": 7341,
	"./mn": 5115,
	"./mn.js": 5115,
	"./mr": 370,
	"./mr.js": 370,
	"./ms": 9847,
	"./ms-my": 1237,
	"./ms-my.js": 1237,
	"./ms.js": 9847,
	"./mt": 2126,
	"./mt.js": 2126,
	"./my": 6165,
	"./my.js": 6165,
	"./nb": 4924,
	"./nb.js": 4924,
	"./ne": 6744,
	"./ne.js": 6744,
	"./nl": 3901,
	"./nl-be": 9814,
	"./nl-be.js": 9814,
	"./nl.js": 3901,
	"./nn": 3877,
	"./nn.js": 3877,
	"./oc-lnc": 2135,
	"./oc-lnc.js": 2135,
	"./pa-in": 5858,
	"./pa-in.js": 5858,
	"./pl": 4495,
	"./pl.js": 4495,
	"./pt": 9520,
	"./pt-br": 7971,
	"./pt-br.js": 7971,
	"./pt.js": 9520,
	"./ro": 6459,
	"./ro.js": 6459,
	"./ru": 1793,
	"./ru.js": 1793,
	"./sd": 950,
	"./sd.js": 950,
	"./se": 490,
	"./se.js": 490,
	"./si": 124,
	"./si.js": 124,
	"./sk": 4249,
	"./sk.js": 4249,
	"./sl": 4985,
	"./sl.js": 4985,
	"./sq": 1104,
	"./sq.js": 1104,
	"./sr": 9131,
	"./sr-cyrl": 9915,
	"./sr-cyrl.js": 9915,
	"./sr.js": 9131,
	"./ss": 5893,
	"./ss.js": 5893,
	"./sv": 8760,
	"./sv.js": 8760,
	"./sw": 1172,
	"./sw.js": 1172,
	"./ta": 7333,
	"./ta.js": 7333,
	"./te": 3110,
	"./te.js": 3110,
	"./tet": 2095,
	"./tet.js": 2095,
	"./tg": 7321,
	"./tg.js": 7321,
	"./th": 9041,
	"./th.js": 9041,
	"./tk": 9005,
	"./tk.js": 9005,
	"./tl-ph": 5768,
	"./tl-ph.js": 5768,
	"./tlh": 9444,
	"./tlh.js": 9444,
	"./tr": 2397,
	"./tr.js": 2397,
	"./tzl": 8254,
	"./tzl.js": 8254,
	"./tzm": 1106,
	"./tzm-latn": 699,
	"./tzm-latn.js": 699,
	"./tzm.js": 1106,
	"./ug-cn": 9288,
	"./ug-cn.js": 9288,
	"./uk": 7691,
	"./uk.js": 7691,
	"./ur": 3795,
	"./ur.js": 3795,
	"./uz": 6791,
	"./uz-latn": 588,
	"./uz-latn.js": 588,
	"./uz.js": 6791,
	"./vi": 5666,
	"./vi.js": 5666,
	"./x-pseudo": 4378,
	"./x-pseudo.js": 4378,
	"./yo": 5805,
	"./yo.js": 5805,
	"./zh-cn": 3839,
	"./zh-cn.js": 3839,
	"./zh-hk": 5726,
	"./zh-hk.js": 5726,
	"./zh-mo": 9807,
	"./zh-mo.js": 9807,
	"./zh-tw": 4152,
	"./zh-tw.js": 4152
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ }),

/***/ "app":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var App = (function () {
    function App() {
    }
    App.prototype.configureRouter = function (config, router) {
        this.router = router;
        config.options.pushState = true;
        config.options.root = '/';
        config.title = 'Algolion';
        config.map([
            { route: ['', 'batteries'], name: 'batteries', moduleId: 'routes/batteries/batteries', nav: true, title: 'MY BATTERIES', settings: { icon: 'battery.svg' } },
            { route: 'baselines', name: 'baselines', moduleId: 'routes/baselines/baselines', nav: true, title: 'BASELINES', settings: { icon: 'graff.svg' } },
            { route: 'reports', name: 'reports', moduleId: 'routes/reports/reports', nav: true, title: 'REPORTS', settings: { icon: 'reports.svg' } },
            { route: 'analyze', name: 'analyze', moduleId: 'routes/analyze/analyze', nav: false, title: 'Analyze', settings: { icon: 'people' } }
        ]);
    };
    App.prototype.attached = function () {
        this.navModels = this.router.navigation;
    };
    App.prototype.navigateTo = function (detail) {
        if (detail.data) {
            this.router.navigate(detail.data.relativeHref);
        }
    };
    App.prototype.navigateToTest = function () {
        this.router.navigate('analyze');
    };
    App.prototype.onUserMenuSelect = function (event) {
        var mdcListActionEventDetail = event;
    };
    App = __decorate([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.autoinject
    ], App);
    return App;
}());



/***/ }),

/***/ 4676:
/*!**************************************!*\
  !*** ./src/data/dto/baseline-dto.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaselineDto": function() { return /* binding */ BaselineDto; }
/* harmony export */ });
var BaselineDto = (function () {
    function BaselineDto() {
    }
    return BaselineDto;
}());



/***/ }),

/***/ 7730:
/*!*******************************************!*\
  !*** ./src/data/dto/baseline-info-dto.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaselineInfoDto": function() { return /* binding */ BaselineInfoDto; }
/* harmony export */ });
var BaselineInfoDto = (function () {
    function BaselineInfoDto() {
    }
    return BaselineInfoDto;
}());



/***/ }),

/***/ 5581:
/*!*************************************!*\
  !*** ./src/data/dto/battery-dto.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BatteryDto": function() { return /* binding */ BatteryDto; }
/* harmony export */ });
var BatteryDto = (function () {
    function BatteryDto() {
    }
    return BatteryDto;
}());



/***/ }),

/***/ "data/dto/index":
/*!*******************************!*\
  !*** ./src/data/dto/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaselineDto": function() { return /* reexport safe */ _baseline_dto__WEBPACK_IMPORTED_MODULE_1__.BaselineDto; },
/* harmony export */   "BaselineInfoDto": function() { return /* reexport safe */ _baseline_info_dto__WEBPACK_IMPORTED_MODULE_2__.BaselineInfoDto; },
/* harmony export */   "BatteryDto": function() { return /* reexport safe */ _battery_dto__WEBPACK_IMPORTED_MODULE_0__.BatteryDto; },
/* harmony export */   "TopologyOfCellPackDto": function() { return /* reexport safe */ _topology_of_cell_pack_dto__WEBPACK_IMPORTED_MODULE_3__.TopologyOfCellPackDto; }
/* harmony export */ });
/* harmony import */ var _battery_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battery-dto */ 5581);
/* harmony import */ var _baseline_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseline-dto */ 4676);
/* harmony import */ var _baseline_info_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseline-info-dto */ 7730);
/* harmony import */ var _topology_of_cell_pack_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topology-of-cell-pack-dto */ 1683);






/***/ }),

/***/ 1683:
/*!***************************************************!*\
  !*** ./src/data/dto/topology-of-cell-pack-dto.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopologyOfCellPackDto": function() { return /* binding */ TopologyOfCellPackDto; }
/* harmony export */ });
var TopologyOfCellPackDto = (function () {
    function TopologyOfCellPackDto() {
    }
    return TopologyOfCellPackDto;
}());



/***/ }),

/***/ "data/index":
/*!***************************!*\
  !*** ./src/data/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaselineDto": function() { return /* reexport safe */ _dto__WEBPACK_IMPORTED_MODULE_1__.BaselineDto; },
/* harmony export */   "BaselineInfoDto": function() { return /* reexport safe */ _dto__WEBPACK_IMPORTED_MODULE_1__.BaselineInfoDto; },
/* harmony export */   "BatteryDto": function() { return /* reexport safe */ _dto__WEBPACK_IMPORTED_MODULE_1__.BatteryDto; },
/* harmony export */   "IDataProvider": function() { return /* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_2__.IDataProvider; },
/* harmony export */   "TopologyOfCellPackDto": function() { return /* reexport safe */ _dto__WEBPACK_IMPORTED_MODULE_1__.TopologyOfCellPackDto; },
/* harmony export */   "configure": function() { return /* binding */ configure; },
/* harmony export */   "fake": function() { return /* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_2__.fake; },
/* harmony export */   "real": function() { return /* reexport safe */ _providers__WEBPACK_IMPORTED_MODULE_2__.real; }
/* harmony export */ });
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ 1015);
/* harmony import */ var _dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dto */ "data/dto/index");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers */ "data/providers/index");



function configure(config) {
    config.aurelia.use
        .feature('data/dto/index')
        .feature('data/providers/index');
}


/***/ }),

/***/ 4356:
/*!*******************************************************!*\
  !*** ./src/data/providers/contracts/data-provider.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IDataProvider": function() { return /* binding */ IDataProvider; }
/* harmony export */ });
var IDataProvider = Symbol('IDataProvider');


/***/ }),

/***/ 425:
/*!***********************************************!*\
  !*** ./src/data/providers/contracts/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IDataProvider": function() { return /* reexport safe */ _data_provider__WEBPACK_IMPORTED_MODULE_0__.IDataProvider; }
/* harmony export */ });
/* harmony import */ var _data_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-provider */ 4356);



/***/ }),

/***/ 562:
/*!*****************************************************************!*\
  !*** ./src/data/providers/implementation/fake/data-provider.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataProvider": function() { return /* binding */ DataProvider; }
/* harmony export */ });
/* harmony import */ var _logofx_aurelia_mvvm_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @logofx/aurelia-mvvm-plugin */ "@logofx/aurelia-mvvm-plugin");
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

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
var DataProvider = (function () {
    function DataProvider() {
        var _this = this;
        this._dbBaselines = new _logofx_aurelia_mvvm_plugin__WEBPACK_IMPORTED_MODULE_0__.Dictionary();
        Array.from({ length: 50 }, function (x, i) {
            return {
                id: _logofx_aurelia_mvvm_plugin__WEBPACK_IMPORTED_MODULE_0__.Guid.create().toString(),
                name: "Baseline ".concat(i),
                originalFileNames: ["Baseline ".concat(i, "_1.json"), "Baseline ".concat(i, "_2.json"), "Baseline ".concat(i, "_3.json")],
                singleCellCapacity: i,
                topologyOfCellPack: {
                    pValue: i,
                    sValue: i
                },
                uploadedAt: randomDate(new Date(2012, 0, 1), new Date()).toISOString()
            };
        }).forEach(function (x) { return _this._dbBaselines.setValue(x.id, x); });
    }
    DataProvider.prototype.getBaselinesAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) { return resolve(_this._dbBaselines.values()); })];
            });
        });
    };
    DataProvider.prototype.putBaselineAsync = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this._dbBaselines.containsKey(dto.id)) {
                    throw new Error("Can't find baseline with id: ".concat(dto.id));
                }
                this._dbBaselines[dto.id] = dto;
                return [2];
            });
        });
    };
    DataProvider.prototype.postBaselineAsync = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                dto.uploadedAt = new Date().toISOString();
                this._dbBaselines.setValue(dto.id, dto);
                return [2];
            });
        });
    };
    DataProvider.prototype.deleteBaselineAsync = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this._dbBaselines.containsKey(id)) {
                    throw new Error("Can't find baseline with id: ".concat(id));
                }
                this._dbBaselines.remove(id);
                return [2];
            });
        });
    };
    return DataProvider;
}());



/***/ }),

/***/ 7581:
/*!*********************************************************!*\
  !*** ./src/data/providers/implementation/fake/index.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataProvider": function() { return /* reexport safe */ _data_provider__WEBPACK_IMPORTED_MODULE_0__.DataProvider; }
/* harmony export */ });
/* harmony import */ var _data_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-provider */ 562);



/***/ }),

/***/ 2989:
/*!****************************************************!*\
  !*** ./src/data/providers/implementation/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fake": function() { return /* reexport module object */ _fake__WEBPACK_IMPORTED_MODULE_0__; },
/* harmony export */   "real": function() { return /* reexport module object */ _real__WEBPACK_IMPORTED_MODULE_1__; }
/* harmony export */ });
/* harmony import */ var _fake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fake */ 7581);
/* harmony import */ var _real__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./real */ 6586);






/***/ }),

/***/ 5779:
/*!*****************************************************************!*\
  !*** ./src/data/providers/implementation/real/data-provider.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataProvider": function() { return /* binding */ DataProvider; }
/* harmony export */ });
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
var DataProvider = (function () {
    function DataProvider() {
    }
    DataProvider.prototype.getBaselinesAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error("Method not implemented.");
            });
        });
    };
    DataProvider.prototype.putBaselineAsync = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error("Method not implemented.");
            });
        });
    };
    DataProvider.prototype.postBaselineAsync = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error("Method not implemented.");
            });
        });
    };
    DataProvider.prototype.deleteBaselineAsync = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error("Method not implemented.");
            });
        });
    };
    return DataProvider;
}());



/***/ }),

/***/ 6586:
/*!*********************************************************!*\
  !*** ./src/data/providers/implementation/real/index.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataProvider": function() { return /* reexport safe */ _data_provider__WEBPACK_IMPORTED_MODULE_0__.DataProvider; }
/* harmony export */ });
/* harmony import */ var _data_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-provider */ 5779);



/***/ }),

/***/ "data/providers/index":
/*!*************************************!*\
  !*** ./src/data/providers/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IDataProvider": function() { return /* reexport safe */ _contracts__WEBPACK_IMPORTED_MODULE_0__.IDataProvider; },
/* harmony export */   "configure": function() { return /* binding */ configure; },
/* harmony export */   "fake": function() { return /* reexport safe */ _implementation__WEBPACK_IMPORTED_MODULE_1__.fake; },
/* harmony export */   "real": function() { return /* reexport safe */ _implementation__WEBPACK_IMPORTED_MODULE_1__.real; }
/* harmony export */ });
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contracts */ 425);
/* harmony import */ var _implementation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./implementation */ 2989);
/* harmony import */ var _config_environment_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/environment.json */ 6511);





function configure(config) {
    if (_config_environment_json__WEBPACK_IMPORTED_MODULE_2__.data === "fake") {
        config.aurelia.container.registerSingleton(_contracts__WEBPACK_IMPORTED_MODULE_0__.IDataProvider, _implementation__WEBPACK_IMPORTED_MODULE_1__.fake.DataProvider);
    }
    else if (_config_environment_json__WEBPACK_IMPORTED_MODULE_2__.data === "real") {
        config.aurelia.container.registerSingleton(_contracts__WEBPACK_IMPORTED_MODULE_0__.IDataProvider, _implementation__WEBPACK_IMPORTED_MODULE_1__.real.DataProvider);
    }
    else {
        throw new Error('The build configuration is wrong or unsupported. \nCheck your environment[.production].json file[s].');
    }
}


/***/ }),

/***/ "main":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-i18n */ "aurelia-i18n");
/* harmony import */ var _config_environment_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/environment.json */ 6511);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-pal */ 1015);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ 3328);




chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.LineController, chart_js__WEBPACK_IMPORTED_MODULE_3__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.DoughnutController, chart_js__WEBPACK_IMPORTED_MODULE_3__.PieController, chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend);
function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .feature('model/index')
        .feature('data/index')
        .feature('resources/index')
        .plugin('aurelia-validation')
        .plugin('@logofx/aurelia-mvvm-plugin')
        .plugin('@aurelia-mdc-web/all')
        .plugin('aurelia-dialog', function (configuration) {
        configuration.useResource('attach-focus');
        configuration.useDefaults();
        configuration.settings.lock = true;
        configuration.settings.centerHorizontalOnly = false;
        configuration.settings.startingZIndex = 10;
        configuration.settings.keyboard = true;
    })
        .plugin('aurelia-i18n', function (instance) {
        var aliases = ['t', 'i18n'];
        aurelia_i18n__WEBPACK_IMPORTED_MODULE_0__.TCustomAttribute.configureAliases(aliases);
        instance.i18next.use(aurelia_i18n__WEBPACK_IMPORTED_MODULE_0__.Backend["with"](aurelia.loader));
        return instance.setup({
            backend: {
                loadPath: 'locales/{{lng}}/{{ns}}.json',
            },
            attributes: aliases,
            parseMissingKeyHandler: function (key) { return "The key \"".concat(key, "\" is missing."); },
            lng: 'en',
            fallbackLng: 'en',
            load: "all",
            preload: ['en', 'ru', 'he'],
            supportedLanguages: ['en', 'ru', 'he'],
            debug: true
        });
    })
        .plugin('aurelia-resize')
        .plugin('aurelia-chart');
    aurelia.use.developmentLogging(_config_environment_json__WEBPACK_IMPORTED_MODULE_1__.debug ? 'debug' : 'warn');
    if (_config_environment_json__WEBPACK_IMPORTED_MODULE_1__.testing) {
        aurelia.use.plugin('aurelia-testing');
    }
    aurelia.start().then(function () { return aurelia.setRoot('app'); });
}


/***/ }),

/***/ 3106:
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xml:space=%27preserve%27 viewBox=%270 0 5 2%27 preserveAspectRatio=%27none slice%27%3E%3Ccircle cx=%271%27 cy=%271%27 r=%271%27 fill=%27%23e6e6e6%27/%3E%3C/svg%3E ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xml:space=%27preserve%27 viewBox=%270 0 5 2%27 preserveAspectRatio=%27none slice%27%3E%3Ccircle cx=%271%27 cy=%271%27 r=%271%27 fill=%27%23e6e6e6%27/%3E%3C/svg%3E";

/***/ }),

/***/ 6511:
/*!*********************************!*\
  !*** ./config/environment.json ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"debug":true,"testing":true,"data":"fake"}');

/***/ }),

/***/ "locales/en/translation.json":
/*!*****************************************!*\
  !*** ./src/locales/en/translation.json ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"locale_native_name":"English","locale_english_name":"English","greeting":"Hello Algolion!","score":"Score: {{score}}","lives":"{{count}} life remaining","lives_plural":"{{count}} lives remaining","friend":"A friend","friend_male":"A boyfriend","friend_female":"A girlfriend","you_can_continue_to_work":"You can continue to work.","required":"The value is required.","yes":"YES","no":"NO","common_messages":{"do_you_want_leave_page":"Do you want to leave the page?"},"validation":{"mandatory":"The value is mandatory"},"button":{"ok":"ok","save":"save","dont_save":"don\'t save","save_as_draft":"Save as Draft","cancel":"Cancel","submit":"Submit","search":"Search","delete":"Delete","upload":"upload","download":"download","view":"View","close":"Close","check":"Check","ignore":"Ignore","sign-in":"Sign In","sign-up":"Sign Up","forgot-password":"Forget password","reset":"Reset","pay":"Pay","finish":"Finish"},"my_batteries":"MY BATTERIES"}');

/***/ }),

/***/ "locales/he/translation.json":
/*!*****************************************!*\
  !*** ./src/locales/he/translation.json ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"locale_native_name":"עברית","locale_english_name":"Hebrew","greeting":"שלום אלגוליון!","score":"חשבון: {{score}}","lives":"חיים {{count}} נותרה","lives_plural":"נותרו {{count}} חיים","friend":"חבר","friend_male":"חבר","friend_female":"חברה","you_can_continue_to_work":"You can continue to work.","required":"The value is required.","yes":"כן","no":"לא","common_messages":{"do_you_want_leave_page":"האם אתה רוצה לעזוב את הדף?"},"validation":{"mandatory":"הערך הוא חובה"},"button":{"ok":"כן","save":"שמור","dont_save":"לא לשמור","save_as_draft":"לשמור כטיוטה","cancel":"בטל","submit":"שלח","search":"חפש","delete":"לִמְחוֹק","upload":"להעלות","download":"להוריד","view":"View","close":"סגור","check":"Check","ignore":"Ignore","sign-in":"Sign In","sign-up":"Sign Up","forgot-password":"שכחת ססמא","reset":"איפוס","pay":"שלם"},"my_batteries":"סוללות שלי"}');

/***/ }),

/***/ "locales/ru/translation.json":
/*!*****************************************!*\
  !*** ./src/locales/ru/translation.json ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"locale_native_name":"Русский","locale_english_name":"Russian","greeting":"Привет, Алголион!","score":"Счет: {{score}}","lives":"{{count}} жизнь осталась","lives_plural":"{{count}} жизней осталось","friend":"Друг","friend_male":"Друг","friend_female":"Подруга","you_can_continue_to_work":"You can continue to work.","required":"The value is required.","yes":"Да","no":"Нет","common_messages":{"do_you_want_leave_page":"Вы уверены, что хотите покинуть эту страницу?"},"validation":{"mandatory":"Обязательное поле"},"button":{"ok":"Ок","save":"Сохранить","save_as_draft":"Сохранить черновик","cancel":"Отмена","submit":"Применить","search":"Поиск","delete":"Удалить","view":"Просмотр","close":"Закрыть","check":"Проверка","ignore":"Пропустить","sign-in":"Sign In","sign-up":"Sign Up","forget-password":"Восстановить пароль","reset":"Сброс"},"my_batteries":"Мои батарейки"}');

/***/ })

}]);
//# sourceMappingURL=app-9a8b795a.1042448a11cb5c83059a.bundle.js.map