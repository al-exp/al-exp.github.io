"use strict";
(self["webpackChunkweb_client"] = self["webpackChunkweb_client"] || []).push([["app-efc01b10"],{

/***/ "resources/message-service/message-box.scss":
/*!********************************************************!*\
  !*** ./src/resources/message-service/message-box.scss ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ux-dialog-overlay{background-color:rgba(0,0,0,.6)}.message-box{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-width:480px}.message-box__header{align-items:center;display:flex;flex-direction:row;padding:16px 24px}.message-box__header .icon-box{height:22px}.message-box__header .icon-box>svg{max-height:22px}.message-box__header .text{font-weight:500!important;line-height:20px;margin:0 10px}.message-box__separator{margin:0}.message-box__separator--top{height:2px}.message-box .color-question{background-color:#f9a646}.message-box .color-warning{background-color:#fbbf25}.message-box .color-error{background-color:#b61615}.message-box .color-information{background-color:#569dbc}.message-box .color-success{background-color:#38c976}.message-box__content{font-size:18px;min-height:100px;padding:16px 24px}.message-box__footer{justify-content:flex-end;padding:20px}.message-box ux-button{margin:0 15px 0 0}.message-box ux-button.message-box__btn-cancel{margin-left:15px}.message-box__btn-cancel button{background-color:transparent;border:1px solid #045faf;color:#045faf;transition:.2}.message-box__btn-cancel button:hover{background-color:#045faf;color:#fff}.ltr .message-box ux-button{margin:0 0 0 15px}.ltr .message-box ux-button.message-box__btn-cancel{margin-right:15px}", "",{"version":3,"sources":["webpack://./src/resources/message-service/message-box.scss"],"names":[],"mappings":"AAAA,kBACE,+BACF,CAEA,aAEE,kEAAA,CADA,eAEF,CACE,qBAGE,kBAAA,CAFA,YAAA,CACA,kBAAA,CAEA,iBACJ,CACI,+BACE,WACN,CACM,mCACE,eACR,CAGI,2BAEE,yBAAA,CACA,gBAAA,CAFA,aACN,CAKE,wBACE,QAHJ,CAKI,6BACE,UAHN,CAQI,6BACE,wBANN,CASI,4BACE,wBAPN,CAUI,0BACE,wBARN,CAWI,gCACE,wBATN,CAYI,4BACE,wBAVN,CAcE,sBAGE,cAAA,CADA,gBAAA,CADA,iBAVJ,CAeE,qBACE,wBAAA,CACA,YAbJ,CAgBE,uBACE,iBAdJ,CAgBI,+CACE,gBAdN,CAmBI,gCAEE,4BAAA,CACA,wBAAA,CAFA,aAAA,CAGA,aAjBN,CAmBM,sCAEE,wBAAA,CADA,UAhBR,CAyBI,4BACE,iBAtBN,CAwBM,oDACE,iBAtBR","sourcesContent":["ux-dialog-overlay {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.message-box {\n  min-width: 480px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n\n  &__header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 16px 24px;\n\n    .icon-box {\n      height: 22px;\n\n      &>svg {\n        max-height: 22px;\n      }\n    }\n\n    .text {\n      margin: 0 10px;\n      font-weight: 500 !important;\n      line-height: 20px;\n    }\n  }\n\n  &__separator {\n    margin: 0;\n\n    &--top {\n      height: 2px;\n    }\n  }\n\n  .color {\n    &-question {\n      background-color: #F9A646;\n    }\n\n    &-warning {\n      background-color: #FBBF25;\n    }\n\n    &-error {\n      background-color: #B61615;\n    }\n\n    &-information {\n      background-color: #569DBC;\n    }\n\n    &-success {\n      background-color: #38C976;\n    }\n  }\n\n  &__content {\n    padding: 16px 24px;\n    min-height: 100px;\n    font-size: 18px;\n  }\n\n  &__footer {\n    justify-content: flex-end;\n    padding: 20px;\n  }\n\n  ux-button {\n    margin: 0 15px 0 0;\n\n    &.message-box__btn-cancel {\n      margin-left: 15px;\n    }\n  }\n\n  &__btn-cancel {\n    button {\n      color: #045FAF;\n      background-color: transparent;\n      border: 1px solid #045FAF;\n      transition: 0.2;\n\n      &:hover {\n        color: #fff;\n        background-color: #045FAF;\n      }\n    }\n  }\n}\n\n.ltr {\n  .message-box {\n    ux-button {\n      margin: 0 0 0 15px;\n\n      &.message-box__btn-cancel {\n        margin-right: 15px;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "resources/components/locales/locales.html":
/*!*******************************************************!*\
  !*** ./src/resources/components/locales/locales.html ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template>\n  <select value.bind=\"selectedLocale\">\n    <option repeat.for=\"lang of source\" model.bind=\"lang.locale\"> ${lang.nativeName.slice(0, 2).toUpperCase()}\n      (${lang.englishName}) </option>\n  </select>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "resources/message-service/dialog.html":
/*!***************************************************!*\
  !*** ./src/resources/message-service/dialog.html ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template>\n   <compose view-model.bind=\"viewModel\"></compose>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "resources/message-service/message-box.html":
/*!********************************************************!*\
  !*** ./src/resources/message-service/message-box.html ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template>\n  <style>\n    .dialog-button {\n      margin-right: 16px\n    }\n\n  </style>\n  <require from=\"./message-box.scss\"></require>\n  <require from=\"./preserve-breaks\"></require>\n  <mdc-card class=\"message-box\">\n    <div class=\"message-box__header\">\n      <div class=\"icon-box\">\n        <svg if.bind=\"isSuccessImage\" width=\"34\" height=\"35\" viewBox=\"0 0 34 35\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M34 17.2188C34 7.89617 26.3226 0.21875 17 0.21875C7.60887 0.21875 0 7.89617 0 17.2188C0 26.6099 7.60887 34.2188 17 34.2188C26.3226 34.2188 34 26.6099 34 17.2188ZM15.0121 26.2671C14.6008 26.6784 13.8468 26.6784 13.4355 26.2671L6.30645 19.1381C5.89516 18.7268 5.89516 17.9728 6.30645 17.5615L7.88306 16.0534C8.29435 15.5736 8.97984 15.5736 9.39113 16.0534L14.2581 20.8518L24.5403 10.5696C24.9516 10.0897 25.6371 10.0897 26.0484 10.5696L27.625 12.0776C28.0363 12.4889 28.0363 13.2429 27.625 13.6542L15.0121 26.2671Z\"\n            fill=\"#38C976\" />\n        </svg>\n        <svg if.bind=\"isWarningImage\" width=\"34\" height=\"32\" viewBox=\"0 0 34 32\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M33.6308 27.5593L19.4518 1.47773C18.3884 -0.461181 15.6116 -0.523727 14.5482 1.47773L0.369174 27.5593C-0.694254 29.4982 0.664571 32 2.8505 32H31.1495C33.3354 32 34.6942 29.5607 33.6308 27.5593ZM17.0295 22.1178C18.5065 22.1178 19.7472 23.4312 19.7472 24.9949C19.7472 26.6211 18.5065 27.872 17.0295 27.872C15.4935 27.872 14.3119 26.6211 14.3119 24.9949C14.3119 23.4312 15.4935 22.1178 17.0295 22.1178ZM14.43 11.5C14.371 11.0622 14.7254 10.6869 15.139 10.6869H18.861C19.2746 10.6869 19.629 11.0622 19.57 11.5L19.1564 20.304C19.0973 20.7418 18.8019 20.992 18.4474 20.992H15.5526C15.1981 20.992 14.9027 20.7418 14.8436 20.304L14.43 11.5Z\"\n            fill=\"#FBBF25\" />\n        </svg>\n        <svg if.bind=\"isErrorImage\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n            d=\"M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34ZM17.7618 13.875H22.1137C22.789 13.875 23.2392 14.7773 22.864 15.4219L16.2611 28.4844C16.111 28.8281 15.8109 29 15.4733 29C14.9105 29 14.4978 28.3984 14.6104 27.7539L16.3361 19.375H11.9092C11.3465 19.375 10.9338 18.8594 11.0088 18.2148L12.2093 7.90234C12.2469 7.38672 12.6595 7 13.1097 7H18.5121C19.0748 7 19.525 7.64453 19.375 8.33203L17.7618 13.875Z\"\n            fill=\"#B61615\" />\n        </svg>\n        <svg if.bind=\"isInformationImage\" width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M18 36C27.936 36 36 27.936 36 18C36 8.064 27.936 -7.04977e-07 18 -1.57361e-06C8.064 -2.44224e-06 -5.18715e-06 8.064 -6.05578e-06 18C-6.92442e-06 27.936 8.06399 36 18 36ZM16.2 9L19.8 9L19.8 12.6L16.2 12.6L16.2 9ZM16.2 16.2L19.8 16.2L19.8 27L16.2 27L16.2 16.2Z\"\n            fill=\"#4C647C\" />\n        </svg>\n        <svg if.bind=\"isQuestionImage\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M32 16C32 7.22581 24.7742 0 16 0C7.16129 0 0 7.22581 0 16C0 24.8387 7.16129 32 16 32C24.7742 32 32 24.8387 32 16ZM16.3871 5.29032C20.0645 5.29032 23.9355 8.12903 23.9355 11.871C23.9355 16.9032 18.5806 16.9677 18.5806 18.7742V18.8387C18.5806 19.2903 18.1935 19.6129 17.8065 19.6129H14.1935C13.7419 19.6129 13.4194 19.2903 13.4194 18.8387V18.5806C13.4194 15.9355 15.4194 14.9032 16.9032 14.0645C18.1935 13.3548 19.0323 12.8387 19.0323 11.871C19.0323 10.5806 17.3548 9.74194 16.0645 9.74194C14.3226 9.74194 13.5484 10.5806 12.3871 12.0645C12.129 12.3871 11.6129 12.4516 11.2903 12.1935L9.03226 10.5161C8.70968 10.2581 8.64516 9.80645 8.90323 9.41935C10.6452 6.77419 12.9032 5.29032 16.3871 5.29032ZM16 21.2903C17.6129 21.2903 18.9677 22.6452 18.9677 24.2581C18.9677 25.9355 17.6129 27.2258 16 27.2258C14.3226 27.2258 13.0323 25.9355 13.0323 24.2581C13.0323 22.6452 14.3226 21.2903 16 21.2903Z\"\n            fill=\"#FD7A54\" />\n        </svg>\n      </div>\n      <div class=\"text\">${caption}</div>\n    </div>\n    <mdc-list-divider if.bind=\"isSuccessImage\" class=\"message-box__separator message-box__separator--top color-success\">\n    </mdc-list-divider>\n    <mdc-list-divider if.bind=\"isWarningImage\" class=\"message-box__separator message-box__separator--top color-warning\">\n    </mdc-list-divider>\n    <mdc-list-divider if.bind=\"isErrorImage\" class=\"message-box__separator message-box__separator--top color-error\">\n    </mdc-list-divider>\n    <mdc-list-divider if.bind=\"isInformationImage\"\n      class=\"message-box__separator message-box__separator--top color-information\"></mdc-list-divider>\n    <mdc-list-divider if.bind=\"isQuestionImage\"\n      class=\"message-box__separator message-box__separator--top color-question\"></mdc-list-divider>\n    <div class=\"mdc-card__content message-box__content\">\n      <div preserve-breaks.bind=\"message\"></div>\n    </div>\n    <mdc-list-divider class=\"message-box__separator\"></mdc-list-divider>\n    <mdc-card-actions class=\"message-box__footer\">\n      <mdc-button class=\"dialog-button\" if.bind=\"isSaveButtonVisible\" click.delegate=\"save()\"><span\n          t=\"button.save\"></span></mdc-button>\n      <mdc-button class=\"dialog-button\" if.bind=\"isOkButtonVisible\" click.delegate=\"ok()\"><span t=\"button.ok\"></span>\n      </mdc-button>\n      <mdc-button class=\"dialog-button\" if.bind=\"isYesButtonVisible\" click.delegate=\"yes()\"><span t=\"yes\"></span>\n      </mdc-button>\n      <mdc-button class=\"dialog-button\" if.bind=\"isNoButtonVisible\" click.delegate=\"no()\"><span t=\"no\"></span>\n      </mdc-button>\n      <mdc-button class=\"message-box__btn-cancel dialog-button\" if.bind=\"isCancelButtonVisible\"\n        click.delegate=\"cancel()\"><span t=\"button.cancel\"></span></mdc-button>\n      <mdc-button class=\"dialog-button\" if.bind=\"isNoSaveButtonVisible\" click.delegate=\"dontSave()\"><span\n          t=\"button.dont_save\"></span></mdc-button>\n    </mdc-card-actions>\n  </mdc-card>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "resources/components/index":
/*!*******************************************!*\
  !*** ./src/resources/components/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _mdc_data_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdc-data-table */ 4887);


function configure(config) {
    config.globalResources([
        'resources/components/locales/locales'
    ]);
}


/***/ }),

/***/ "resources/components/locales/locales":
/*!*****************************************************!*\
  !*** ./src/resources/components/locales/locales.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Locales": function() { return /* binding */ Locales; }
/* harmony export */ });
/* harmony import */ var _services_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/localization */ "resources/services/localization/index");
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


var Locales = (function () {
    function Locales(element, localizationService) {
        this.element = element;
        this.localizationService = localizationService;
    }
    Locales.prototype.attached = function () {
        var _this = this;
        this.source = this.localizationService.languages.map(function (x) {
            return {
                locale: x,
                nativeName: _this.localizationService.getLocalizedValue(x, "locale_native_name"),
                englishName: _this.localizationService.getLocalizedValue(x, "locale_english_name")
            };
        });
    };
    Object.defineProperty(Locales.prototype, "selectedLocale", {
        get: function () {
            return this.localizationService.getLocale();
        },
        set: function (value) {
            this.localizationService.setLocal(value);
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.bindable,
        __metadata("design:type", Array)
    ], Locales.prototype, "source", void 0);
    Locales = __decorate([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.customElement)('locales'),
        aurelia_framework__WEBPACK_IMPORTED_MODULE_1__.autoinject,
        __metadata("design:paramtypes", [Element,
            _services_localization__WEBPACK_IMPORTED_MODULE_0__.LocalizationService])
    ], Locales);
    return Locales;
}());

var LocaleInfo = (function () {
    function LocaleInfo() {
    }
    return LocaleInfo;
}());


/***/ }),

/***/ 4887:
/*!**********************************************************!*\
  !*** ./src/resources/components/mdc-data-table/index.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "resources/index":
/*!********************************!*\
  !*** ./src/resources/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamelCaseValueConverter": function() { return /* reexport safe */ _value_converters__WEBPACK_IMPORTED_MODULE_4__.CamelCaseValueConverter; },
/* harmony export */   "CapitalizeValueConverter": function() { return /* reexport safe */ _value_converters__WEBPACK_IMPORTED_MODULE_4__.CapitalizeValueConverter; },
/* harmony export */   "DateFormatValueConverter": function() { return /* reexport safe */ _value_converters__WEBPACK_IMPORTED_MODULE_4__.DateFormatValueConverter; },
/* harmony export */   "DecapitalizeValueConverter": function() { return /* reexport safe */ _value_converters__WEBPACK_IMPORTED_MODULE_4__.DecapitalizeValueConverter; },
/* harmony export */   "GroupValueConverter": function() { return /* reexport safe */ _value_converters__WEBPACK_IMPORTED_MODULE_4__.GroupValueConverter; },
/* harmony export */   "IMessageService": function() { return /* reexport safe */ _message_service__WEBPACK_IMPORTED_MODULE_5__.IMessageService; },
/* harmony export */   "LiteEvent": function() { return /* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_3__.LiteEvent; },
/* harmony export */   "LocalizationService": function() { return /* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_3__.LocalizationService; },
/* harmony export */   "MessageBox": function() { return /* reexport safe */ _message_service__WEBPACK_IMPORTED_MODULE_5__.MessageBox; },
/* harmony export */   "MessageBoxButtons": function() { return /* reexport safe */ _message_service__WEBPACK_IMPORTED_MODULE_5__.MessageBoxButtons; },
/* harmony export */   "MessageBoxIcon": function() { return /* reexport safe */ _message_service__WEBPACK_IMPORTED_MODULE_5__.MessageBoxIcon; },
/* harmony export */   "MessageBoxResult": function() { return /* reexport safe */ _message_service__WEBPACK_IMPORTED_MODULE_5__.MessageBoxResult; },
/* harmony export */   "MessageService": function() { return /* reexport safe */ _message_service__WEBPACK_IMPORTED_MODULE_5__.MessageService; },
/* harmony export */   "PageValueConverter": function() { return /* reexport safe */ _value_converters__WEBPACK_IMPORTED_MODULE_4__.PageValueConverter; },
/* harmony export */   "PercentageValueConverter": function() { return /* reexport safe */ _value_converters__WEBPACK_IMPORTED_MODULE_4__.PercentageValueConverter; },
/* harmony export */   "SortValueConverter": function() { return /* reexport safe */ _value_converters__WEBPACK_IMPORTED_MODULE_4__.SortValueConverter; },
/* harmony export */   "TitleCaseValueConverter": function() { return /* reexport safe */ _value_converters__WEBPACK_IMPORTED_MODULE_4__.TitleCaseValueConverter; },
/* harmony export */   "ToLowerCaseValueConverter": function() { return /* reexport safe */ _value_converters__WEBPACK_IMPORTED_MODULE_4__.ToLowerCaseValueConverter; },
/* harmony export */   "ToUpperCaseValueConverter": function() { return /* reexport safe */ _value_converters__WEBPACK_IMPORTED_MODULE_4__.ToUpperCaseValueConverter; },
/* harmony export */   "configure": function() { return /* binding */ configure; },
/* harmony export */   "dateComparison": function() { return /* reexport safe */ _value_converters__WEBPACK_IMPORTED_MODULE_4__.dateComparison; },
/* harmony export */   "getObjectValue": function() { return /* reexport safe */ _value_converters__WEBPACK_IMPORTED_MODULE_4__.getObjectValue; },
/* harmony export */   "isDate": function() { return /* reexport safe */ _value_converters__WEBPACK_IMPORTED_MODULE_4__.isDate; },
/* harmony export */   "isString": function() { return /* reexport safe */ _value_converters__WEBPACK_IMPORTED_MODULE_4__.isString; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ 5828);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "resources/components/index");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ 918);
/* harmony import */ var _value_converters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./value-converters */ "resources/value-converters/index");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message-service */ "resources/message-service/index");


function configure(config) {
    config.globalResources([
        'resources/message-service/message-box'
    ]);
    config.aurelia.use
        .plugin('resources/services/localization/index', {
        onSetLocale: function (locale) {
            var direction = i18next__WEBPACK_IMPORTED_MODULE_1__["default"].dir(locale);
            document.querySelector('body').style.direction = direction;
        }
    })
        .feature('resources/components/index')
        .feature('resources/value-converters/index')
        .feature('resources/message-service/index');
}






/***/ }),

/***/ 7651:
/*!**********************************************************!*\
  !*** ./src/resources/message-service/contracts/index.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMessageService": function() { return /* reexport safe */ _message_service__WEBPACK_IMPORTED_MODULE_3__.IMessageService; },
/* harmony export */   "MessageBoxButtons": function() { return /* reexport safe */ _message_box_buttons__WEBPACK_IMPORTED_MODULE_1__.MessageBoxButtons; },
/* harmony export */   "MessageBoxIcon": function() { return /* reexport safe */ _message_box_icon__WEBPACK_IMPORTED_MODULE_2__.MessageBoxIcon; },
/* harmony export */   "MessageBoxResult": function() { return /* reexport safe */ _message_box_result__WEBPACK_IMPORTED_MODULE_0__.MessageBoxResult; }
/* harmony export */ });
/* harmony import */ var _message_box_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-box-result */ 6061);
/* harmony import */ var _message_box_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-box-buttons */ 2987);
/* harmony import */ var _message_box_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-box-icon */ 5441);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message-service */ 2946);






/***/ }),

/***/ 2987:
/*!************************************************************************!*\
  !*** ./src/resources/message-service/contracts/message-box-buttons.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageBoxButtons": function() { return /* binding */ MessageBoxButtons; }
/* harmony export */ });
var MessageBoxButtons;
(function (MessageBoxButtons) {
    MessageBoxButtons[MessageBoxButtons["Ok"] = 0] = "Ok";
    MessageBoxButtons[MessageBoxButtons["OkCancel"] = 1] = "OkCancel";
    MessageBoxButtons[MessageBoxButtons["YesNoCancel"] = 2] = "YesNoCancel";
    MessageBoxButtons[MessageBoxButtons["YesNo"] = 3] = "YesNo";
    MessageBoxButtons[MessageBoxButtons["SaveNoSaveCancel"] = 4] = "SaveNoSaveCancel";
})(MessageBoxButtons || (MessageBoxButtons = {}));


/***/ }),

/***/ 5441:
/*!*********************************************************************!*\
  !*** ./src/resources/message-service/contracts/message-box-icon.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageBoxIcon": function() { return /* binding */ MessageBoxIcon; }
/* harmony export */ });
var MessageBoxIcon;
(function (MessageBoxIcon) {
    MessageBoxIcon[MessageBoxIcon["None"] = 0] = "None";
    MessageBoxIcon[MessageBoxIcon["Error"] = 1] = "Error";
    MessageBoxIcon[MessageBoxIcon["Question"] = 2] = "Question";
    MessageBoxIcon[MessageBoxIcon["Warning"] = 3] = "Warning";
    MessageBoxIcon[MessageBoxIcon["Information"] = 4] = "Information";
    MessageBoxIcon[MessageBoxIcon["Success"] = 5] = "Success";
})(MessageBoxIcon || (MessageBoxIcon = {}));


/***/ }),

/***/ 6061:
/*!***********************************************************************!*\
  !*** ./src/resources/message-service/contracts/message-box-result.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageBoxResult": function() { return /* binding */ MessageBoxResult; }
/* harmony export */ });
var MessageBoxResult;
(function (MessageBoxResult) {
    MessageBoxResult[MessageBoxResult["OK"] = 0] = "OK";
    MessageBoxResult[MessageBoxResult["Cancel"] = 1] = "Cancel";
    MessageBoxResult[MessageBoxResult["DontSave"] = 2] = "DontSave";
    MessageBoxResult[MessageBoxResult["Save"] = 3] = "Save";
    MessageBoxResult[MessageBoxResult["Yes"] = 4] = "Yes";
    MessageBoxResult[MessageBoxResult["No"] = 5] = "No";
})(MessageBoxResult || (MessageBoxResult = {}));


/***/ }),

/***/ 2946:
/*!********************************************************************!*\
  !*** ./src/resources/message-service/contracts/message-service.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMessageService": function() { return /* binding */ IMessageService; }
/* harmony export */ });
var IMessageService = Symbol('IMessageService');


/***/ }),

/***/ "resources/message-service/dialog":
/*!*************************************************!*\
  !*** ./src/resources/message-service/dialog.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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



/***/ }),

/***/ 6672:
/*!***************************************************************!*\
  !*** ./src/resources/message-service/implementation/index.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": function() { return /* reexport safe */ _message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService; }
/* harmony export */ });
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-service */ 1659);



/***/ }),

/***/ 1659:
/*!*************************************************************************!*\
  !*** ./src/resources/message-service/implementation/message-service.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": function() { return /* binding */ MessageService; }
/* harmony export */ });
/* harmony import */ var _logofx_aurelia_mvvm_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @logofx/aurelia-mvvm-plugin */ "@logofx/aurelia-mvvm-plugin");
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contracts */ 7651);
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-dependency-injection */ 6158);
/* harmony import */ var _message_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message-box */ "resources/message-service/message-box");
/* harmony import */ var aurelia_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-dialog */ "aurelia-dialog");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog */ "resources/message-service/dialog");
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






var MessageService = (function () {
    function MessageService(dialogService, viewModelCreatorService) {
        this.dialogService = dialogService;
        this.viewModelCreatorService = viewModelCreatorService;
    }
    MessageService.prototype.showDialog = function (viewModel) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        _this.dialogService.open({
                            viewModel: _dialog__WEBPACK_IMPORTED_MODULE_5__.Dialog,
                            model: viewModel
                        })
                            .whenClosed(function (response) {
                            resolve(response);
                        });
                    })];
            });
        });
    };
    MessageService.prototype.show = function (message, caption, buttons, icon) {
        return __awaiter(this, void 0, void 0, function () {
            var vm, retVal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        vm = this.viewModelCreatorService.create(_message_box__WEBPACK_IMPORTED_MODULE_3__.MessageBox);
                        if (caption) {
                            vm.caption = caption;
                        }
                        else {
                            vm.caption = "";
                        }
                        vm.message = message;
                        if (buttons) {
                            vm.buttons = buttons;
                        }
                        else {
                            vm.buttons = _contracts__WEBPACK_IMPORTED_MODULE_1__.MessageBoxButtons.Ok;
                        }
                        if (icon) {
                            vm.image = icon;
                        }
                        else {
                            vm.image = _contracts__WEBPACK_IMPORTED_MODULE_1__.MessageBoxIcon.None;
                        }
                        return [4, this.showDialog(vm)];
                    case 1:
                        retVal = _a.sent();
                        return [2, retVal.output];
                }
            });
        });
    };
    MessageService.prototype.showError = function (message, caption, buttons) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.show(message, caption, buttons, _contracts__WEBPACK_IMPORTED_MODULE_1__.MessageBoxIcon.Error)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    MessageService.prototype.showQuestion = function (message, caption, buttons) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!buttons) {
                            buttons = _contracts__WEBPACK_IMPORTED_MODULE_1__.MessageBoxButtons.YesNo;
                        }
                        return [4, this.show(message, caption, buttons, _contracts__WEBPACK_IMPORTED_MODULE_1__.MessageBoxIcon.Question)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    MessageService.prototype.showWarning = function (message, caption, buttons) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.show(message, caption, buttons, _contracts__WEBPACK_IMPORTED_MODULE_1__.MessageBoxIcon.Warning)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    MessageService.prototype.showInformation = function (message, caption, buttons) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.show(message, caption, buttons, _contracts__WEBPACK_IMPORTED_MODULE_1__.MessageBoxIcon.Information)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    MessageService.prototype.showSuccess = function (message, caption, buttons) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.show(message, caption, buttons, _contracts__WEBPACK_IMPORTED_MODULE_1__.MessageBoxIcon.Success)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    MessageService = __decorate([
        aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__.autoinject,
        __metadata("design:paramtypes", [aurelia_dialog__WEBPACK_IMPORTED_MODULE_4__.DialogService, _logofx_aurelia_mvvm_plugin__WEBPACK_IMPORTED_MODULE_0__.ViewModelCreatorService])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "resources/message-service/index":
/*!************************************************!*\
  !*** ./src/resources/message-service/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMessageService": function() { return /* reexport safe */ _contracts__WEBPACK_IMPORTED_MODULE_1__.IMessageService; },
/* harmony export */   "MessageBox": function() { return /* reexport safe */ _message_box__WEBPACK_IMPORTED_MODULE_2__.MessageBox; },
/* harmony export */   "MessageBoxButtons": function() { return /* reexport safe */ _contracts__WEBPACK_IMPORTED_MODULE_1__.MessageBoxButtons; },
/* harmony export */   "MessageBoxIcon": function() { return /* reexport safe */ _contracts__WEBPACK_IMPORTED_MODULE_1__.MessageBoxIcon; },
/* harmony export */   "MessageBoxResult": function() { return /* reexport safe */ _contracts__WEBPACK_IMPORTED_MODULE_1__.MessageBoxResult; },
/* harmony export */   "MessageService": function() { return /* reexport safe */ _implementation__WEBPACK_IMPORTED_MODULE_0__.MessageService; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var _implementation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./implementation */ 6672);
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contracts */ 7651);
/* harmony import */ var _message_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-box */ "resources/message-service/message-box");





function configure(config) {
    config.aurelia.container.registerSingleton(_contracts__WEBPACK_IMPORTED_MODULE_1__.IMessageService, _implementation__WEBPACK_IMPORTED_MODULE_0__.MessageService);
}


/***/ }),

/***/ "resources/message-service/message-box":
/*!******************************************************!*\
  !*** ./src/resources/message-service/message-box.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageBox": function() { return /* binding */ MessageBox; }
/* harmony export */ });
/* harmony import */ var aurelia_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dialog */ "aurelia-dialog");
/* harmony import */ var _logofx_aurelia_mvvm_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @logofx/aurelia-mvvm-plugin */ "@logofx/aurelia-mvvm-plugin");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-dependency-injection */ 6158);
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contracts */ 7651);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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




var MessageBox = (function (_super) {
    __extends(MessageBox, _super);
    function MessageBox(_dialogService) {
        var _this = _super.call(this, null) || this;
        _this._dialogService = _dialogService;
        return _this;
    }
    MessageBox_1 = MessageBox;
    Object.defineProperty(MessageBox.prototype, "caption", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MessageBox.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            this._message = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MessageBox.prototype, "buttons", {
        get: function () {
            return this._buttons;
        },
        set: function (value) {
            this._buttons = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MessageBox.prototype, "isCancelButtonVisible", {
        get: function () {
            return this._buttons === _contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxButtons.OkCancel || this._buttons === _contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxButtons.YesNoCancel || this._buttons === _contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxButtons.SaveNoSaveCancel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MessageBox.prototype, "isNoButtonVisible", {
        get: function () {
            return this._buttons === _contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxButtons.YesNo || this._buttons === _contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxButtons.YesNoCancel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MessageBox.prototype, "isOkButtonVisible", {
        get: function () {
            return this._buttons === _contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxButtons.Ok || this._buttons === _contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxButtons.OkCancel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MessageBox.prototype, "isYesButtonVisible", {
        get: function () {
            return this._buttons === _contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxButtons.YesNo || this._buttons === _contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxButtons.YesNoCancel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MessageBox.prototype, "isSaveButtonVisible", {
        get: function () {
            return this._buttons === _contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxButtons.SaveNoSaveCancel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MessageBox.prototype, "isNoSaveButtonVisible", {
        get: function () {
            return this._buttons === _contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxButtons.SaveNoSaveCancel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MessageBox.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (value) {
            this._image = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MessageBox.prototype, "isSuccessImage", {
        get: function () {
            return this._image === _contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxIcon.Success;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MessageBox.prototype, "isWarningImage", {
        get: function () {
            return this._image === _contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxIcon.Warning;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MessageBox.prototype, "isErrorImage", {
        get: function () {
            return this._image === _contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxIcon.Error;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MessageBox.prototype, "isInformationImage", {
        get: function () {
            return this._image === _contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxIcon.Information;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MessageBox.prototype, "isQuestionImage", {
        get: function () {
            return this._image === _contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxIcon.Question;
        },
        enumerable: false,
        configurable: true
    });
    MessageBox.prototype.ok = function () {
        this._dialogService.controllers[0].ok(_contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxResult.OK);
    };
    MessageBox.prototype.cancel = function () {
        this._dialogService.controllers[0].cancel(_contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxResult.Cancel);
    };
    MessageBox.prototype.no = function () {
        this._dialogService.controllers[0].close(false, _contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxResult.No);
    };
    MessageBox.prototype.yes = function () {
        this._dialogService.controllers[0].close(true, _contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxResult.Yes);
    };
    MessageBox.prototype.save = function () {
        this._dialogService.controllers[0].close(true, _contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxResult.Save);
    };
    MessageBox.prototype.dontSave = function () {
        this._dialogService.controllers[0].close(false, _contracts__WEBPACK_IMPORTED_MODULE_3__.MessageBoxResult.DontSave);
    };
    var MessageBox_1;
    MessageBox = MessageBox_1 = __decorate([
        aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__.autoinject,
        (0,aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__.transient)(MessageBox_1),
        __metadata("design:paramtypes", [aurelia_dialog__WEBPACK_IMPORTED_MODULE_0__.DialogService])
    ], MessageBox);
    return MessageBox;
}(_logofx_aurelia_mvvm_plugin__WEBPACK_IMPORTED_MODULE_1__.ObjectViewModel));



/***/ }),

/***/ "resources/message-service/preserve-breaks":
/*!**********************************************************!*\
  !*** ./src/resources/message-service/preserve-breaks.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreserveBreaksCustomAttribute": function() { return /* binding */ PreserveBreaksCustomAttribute; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

function htmlEncode(html) {
    var element = document.createElement('a');
    var newChild = document.createTextNode(html);
    var child = element.appendChild(newChild);
    var result = child.parentNode.innerHTML;
    return result;
}
var PreserveBreaksCustomAttribute = (function () {
    function PreserveBreaksCustomAttribute(element) {
        this.element = element;
    }
    PreserveBreaksCustomAttribute.prototype.valueChanged = function () {
        var html = htmlEncode(this.value);
        html = html.replace(/\r/g, '').replace(/\n/g, '<br/>');
        this.element.innerHTML = html;
    };
    PreserveBreaksCustomAttribute = __decorate([
        (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element),
        __metadata("design:paramtypes", [Object])
    ], PreserveBreaksCustomAttribute);
    return PreserveBreaksCustomAttribute;
}());



/***/ }),

/***/ 918:
/*!*****************************************!*\
  !*** ./src/resources/services/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiteEvent": function() { return /* reexport safe */ _lite_event__WEBPACK_IMPORTED_MODULE_2__.LiteEvent; },
/* harmony export */   "LocalizationService": function() { return /* reexport safe */ _localization__WEBPACK_IMPORTED_MODULE_1__.LocalizationService; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localization */ "resources/services/localization/index");
/* harmony import */ var _lite_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lite-event */ 697);

function configure(config) {
    config.globalResources([
        'resources/services/localization/index'
    ]);
}




/***/ }),

/***/ 697:
/*!**********************************************!*\
  !*** ./src/resources/services/lite-event.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiteEvent": function() { return /* binding */ LiteEvent; }
/* harmony export */ });
var LiteEvent = (function () {
    function LiteEvent() {
        this.handlers = [];
    }
    LiteEvent.prototype.on = function (handler) {
        this.handlers.push(handler);
    };
    LiteEvent.prototype.off = function (handler) {
        this.handlers = this.handlers.filter(function (h) { return h !== handler; });
    };
    LiteEvent.prototype.trigger = function (data) {
        this.handlers.slice(0).forEach(function (h) { return h(data); });
    };
    LiteEvent.prototype.expose = function () {
        return this;
    };
    return LiteEvent;
}());



/***/ }),

/***/ "resources/services/localization/index":
/*!******************************************************!*\
  !*** ./src/resources/services/localization/index.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalizationService": function() { return /* reexport safe */ _localization_service__WEBPACK_IMPORTED_MODULE_2__.LocalizationService; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-validation */ "aurelia-validation");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ 5828);
/* harmony import */ var _localization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localization-service */ 3472);



function configure(config, callback) {
    aurelia_validation__WEBPACK_IMPORTED_MODULE_0__.ValidationMessageProvider.prototype.getMessage = function (key) {
        var translation = i18next__WEBPACK_IMPORTED_MODULE_1__["default"].t(key);
        return this.parser.parse(translation);
    };
    aurelia_validation__WEBPACK_IMPORTED_MODULE_0__.ValidationMessageProvider.prototype.getDisplayName =
        function (propertyName, displayName) {
            if (displayName !== null && displayName !== undefined) {
                return displayName;
            }
            var key = propertyName.toString();
            var translation = i18next__WEBPACK_IMPORTED_MODULE_1__["default"].t(key);
            return this.parser.parse(translation);
        };
    if (callback === null || callback === void 0 ? void 0 : callback.onSetLocale) {
        callback.onSetLocale(i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language);
    }
    i18next__WEBPACK_IMPORTED_MODULE_1__["default"].on("languageChanged", function (lng) {
        if (callback === null || callback === void 0 ? void 0 : callback.onSetLocale) {
            callback.onSetLocale(i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language);
        }
    });
}


/***/ }),

/***/ 3472:
/*!*********************************************************************!*\
  !*** ./src/resources/services/localization/localization-service.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalizationService": function() { return /* binding */ LocalizationService; }
/* harmony export */ });
/* harmony import */ var aurelia_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-i18n */ "aurelia-i18n");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-dependency-injection */ 6158);
/* harmony import */ var _lite_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lite-event */ 697);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalizationService = (function () {
    function LocalizationService(_i18n) {
        var _this = this;
        this._i18n = _i18n;
        this._onLocaleChanged = new _lite_event__WEBPACK_IMPORTED_MODULE_2__.LiteEvent();
        this._options = _i18n.i18next.options;
        this._i18n.i18next.on("languageChanged", function (lng) {
            _this._onLocaleChanged.trigger(lng);
        });
    }
    Object.defineProperty(LocalizationService.prototype, "onLocaleChanged", {
        get: function () {
            return this._onLocaleChanged.expose();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LocalizationService.prototype, "languages", {
        get: function () {
            return this._options.supportedLanguages;
        },
        enumerable: false,
        configurable: true
    });
    LocalizationService.prototype.setLocal = function (locale) {
        this._i18n.setLocale(locale);
    };
    LocalizationService.prototype.getLocale = function () {
        return this._i18n.getLocale();
    };
    LocalizationService.prototype.getLocalizedValue = function (locale, key) {
        return this._i18n.i18next.getFixedT(locale)(key);
    };
    LocalizationService = __decorate([
        aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.autoinject,
        __metadata("design:paramtypes", [aurelia_i18n__WEBPACK_IMPORTED_MODULE_0__.I18N])
    ], LocalizationService);
    return LocalizationService;
}());



/***/ }),

/***/ "resources/value-converters/camel-case-value-converter":
/*!**********************************************************************!*\
  !*** ./src/resources/value-converters/camel-case-value-converter.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamelCaseValueConverter": function() { return /* binding */ CamelCaseValueConverter; }
/* harmony export */ });
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! voca */ 6485);
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(voca__WEBPACK_IMPORTED_MODULE_0__);

var CamelCaseValueConverter = (function () {
    function CamelCaseValueConverter() {
    }
    CamelCaseValueConverter.prototype.toView = function (value) {
        return voca__WEBPACK_IMPORTED_MODULE_0__.camelCase(value);
    };
    return CamelCaseValueConverter;
}());



/***/ }),

/***/ "resources/value-converters/capitalize-value-converter":
/*!**********************************************************************!*\
  !*** ./src/resources/value-converters/capitalize-value-converter.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapitalizeValueConverter": function() { return /* binding */ CapitalizeValueConverter; }
/* harmony export */ });
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! voca */ 6485);
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(voca__WEBPACK_IMPORTED_MODULE_0__);

var CapitalizeValueConverter = (function () {
    function CapitalizeValueConverter() {
    }
    CapitalizeValueConverter.prototype.toView = function (value) {
        return voca__WEBPACK_IMPORTED_MODULE_0__.capitalize(value);
    };
    return CapitalizeValueConverter;
}());



/***/ }),

/***/ "resources/value-converters/date-format-value-converter":
/*!***********************************************************************!*\
  !*** ./src/resources/value-converters/date-format-value-converter.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateFormatValueConverter": function() { return /* binding */ DateFormatValueConverter; }
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

var DateFormatValueConverter = (function () {
    function DateFormatValueConverter() {
    }
    DateFormatValueConverter.prototype.toView = function (dt, format) {
        if (!dt)
            return dt;
        if (!format)
            format = 'M/D/YYYY h:mm a';
        return moment__WEBPACK_IMPORTED_MODULE_0___default()(dt).format(format);
    };
    DateFormatValueConverter.prototype.fromView = function (strDate) {
        return new Date(strDate);
    };
    return DateFormatValueConverter;
}());



/***/ }),

/***/ "resources/value-converters/decapitalize-value-converter":
/*!************************************************************************!*\
  !*** ./src/resources/value-converters/decapitalize-value-converter.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecapitalizeValueConverter": function() { return /* binding */ DecapitalizeValueConverter; }
/* harmony export */ });
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! voca */ 6485);
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(voca__WEBPACK_IMPORTED_MODULE_0__);

var DecapitalizeValueConverter = (function () {
    function DecapitalizeValueConverter() {
    }
    DecapitalizeValueConverter.prototype.toView = function (value) {
        return voca__WEBPACK_IMPORTED_MODULE_0__.decapitalize(value);
    };
    return DecapitalizeValueConverter;
}());



/***/ }),

/***/ "resources/value-converters/group-value-converter":
/*!*****************************************************************!*\
  !*** ./src/resources/value-converters/group-value-converter.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupValueConverter": function() { return /* binding */ GroupValueConverter; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 4094);

var GroupValueConverter = (function () {
    function GroupValueConverter() {
    }
    GroupValueConverter.prototype.toView = function (array, propertyName) {
        if (!array || !propertyName)
            return array;
        var groups = {};
        array.forEach(function (obj) {
            var group = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getObjectValue)(obj, propertyName);
            if (isMissing(group))
                group = '';
            groups[group] = groups[group] || [];
            groups[group].push(obj);
        });
        return Object.keys(groups).map(function (group) {
            return {
                group: group,
                values: groups[group]
            };
        });
    };
    return GroupValueConverter;
}());

function isMissing(val) {
    return val === null || typeof val === 'undefined';
}


/***/ }),

/***/ "resources/value-converters/index":
/*!*************************************************!*\
  !*** ./src/resources/value-converters/index.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamelCaseValueConverter": function() { return /* reexport safe */ _camel_case_value_converter__WEBPACK_IMPORTED_MODULE_9__.CamelCaseValueConverter; },
/* harmony export */   "CapitalizeValueConverter": function() { return /* reexport safe */ _capitalize_value_converter__WEBPACK_IMPORTED_MODULE_7__.CapitalizeValueConverter; },
/* harmony export */   "DateFormatValueConverter": function() { return /* reexport safe */ _date_format_value_converter__WEBPACK_IMPORTED_MODULE_1__.DateFormatValueConverter; },
/* harmony export */   "DecapitalizeValueConverter": function() { return /* reexport safe */ _decapitalize_value_converter__WEBPACK_IMPORTED_MODULE_8__.DecapitalizeValueConverter; },
/* harmony export */   "GroupValueConverter": function() { return /* reexport safe */ _group_value_converter__WEBPACK_IMPORTED_MODULE_2__.GroupValueConverter; },
/* harmony export */   "PageValueConverter": function() { return /* reexport safe */ _page_value_converter__WEBPACK_IMPORTED_MODULE_3__.PageValueConverter; },
/* harmony export */   "PercentageValueConverter": function() { return /* reexport safe */ _percentage_value_converter__WEBPACK_IMPORTED_MODULE_11__.PercentageValueConverter; },
/* harmony export */   "SortValueConverter": function() { return /* reexport safe */ _sort_value_converter__WEBPACK_IMPORTED_MODULE_4__.SortValueConverter; },
/* harmony export */   "TitleCaseValueConverter": function() { return /* reexport safe */ _title_case_value_converter__WEBPACK_IMPORTED_MODULE_10__.TitleCaseValueConverter; },
/* harmony export */   "ToLowerCaseValueConverter": function() { return /* reexport safe */ _to_lower_case_value_converter__WEBPACK_IMPORTED_MODULE_5__.ToLowerCaseValueConverter; },
/* harmony export */   "ToUpperCaseValueConverter": function() { return /* reexport safe */ _to_upper_case_value_converter__WEBPACK_IMPORTED_MODULE_6__.ToUpperCaseValueConverter; },
/* harmony export */   "configure": function() { return /* binding */ configure; },
/* harmony export */   "dateComparison": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_12__.dateComparison; },
/* harmony export */   "getObjectValue": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_12__.getObjectValue; },
/* harmony export */   "isDate": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_12__.isDate; },
/* harmony export */   "isString": function() { return /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_12__.isString; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _date_format_value_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-format-value-converter */ "resources/value-converters/date-format-value-converter");
/* harmony import */ var _group_value_converter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group-value-converter */ "resources/value-converters/group-value-converter");
/* harmony import */ var _page_value_converter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-value-converter */ "resources/value-converters/page-value-converter");
/* harmony import */ var _sort_value_converter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sort-value-converter */ "resources/value-converters/sort-value-converter");
/* harmony import */ var _to_lower_case_value_converter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./to-lower-case-value-converter */ "resources/value-converters/to-lower-case-value-converter");
/* harmony import */ var _to_upper_case_value_converter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./to-upper-case-value-converter */ "resources/value-converters/to-upper-case-value-converter");
/* harmony import */ var _capitalize_value_converter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./capitalize-value-converter */ "resources/value-converters/capitalize-value-converter");
/* harmony import */ var _decapitalize_value_converter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decapitalize-value-converter */ "resources/value-converters/decapitalize-value-converter");
/* harmony import */ var _camel_case_value_converter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./camel-case-value-converter */ "resources/value-converters/camel-case-value-converter");
/* harmony import */ var _title_case_value_converter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./title-case-value-converter */ "resources/value-converters/title-case-value-converter");
/* harmony import */ var _percentage_value_converter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./percentage-value-converter */ "resources/value-converters/percentage-value-converter");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ 4094);













function configure(aurelia) {
    aurelia.globalResources('./date-format-value-converter', './page-value-converter', './sort-value-converter', './group-value-converter', './to-lower-case-value-converter', './to-upper-case-value-converter', './capitalize-value-converter', './decapitalize-value-converter', './camel-case-value-converter', './title-case-value-converter', './percentage-value-converter');
}


/***/ }),

/***/ "resources/value-converters/page-value-converter":
/*!****************************************************************!*\
  !*** ./src/resources/value-converters/page-value-converter.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageValueConverter": function() { return /* binding */ PageValueConverter; }
/* harmony export */ });
var PageValueConverter = (function () {
    function PageValueConverter() {
    }
    PageValueConverter.prototype.toView = function (array, pageSize, pageIndex) {
        if (!array)
            return;
        return array.slice((pageIndex * pageSize) - pageSize, (pageIndex * pageSize) < array.length ? (pageIndex * pageSize) : array.length);
    };
    return PageValueConverter;
}());



/***/ }),

/***/ "resources/value-converters/percentage-value-converter":
/*!**********************************************************************!*\
  !*** ./src/resources/value-converters/percentage-value-converter.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PercentageValueConverter": function() { return /* binding */ PercentageValueConverter; }
/* harmony export */ });
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! numeral */ 2077);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);

var PercentageValueConverter = (function () {
    function PercentageValueConverter() {
    }
    PercentageValueConverter.prototype.toView = function (value) {
        return numeral__WEBPACK_IMPORTED_MODULE_0___default()(value).format('0%');
    };
    return PercentageValueConverter;
}());



/***/ }),

/***/ "resources/value-converters/sort-value-converter":
/*!****************************************************************!*\
  !*** ./src/resources/value-converters/sort-value-converter.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortValueConverter": function() { return /* binding */ SortValueConverter; }
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 4094);


function _isDesc(direction) {
    return direction.toLowerCase() === 'descending';
}
var SortValueConverter = (function () {
    function SortValueConverter() {
    }
    SortValueConverter.prototype.toView = function (array, propertyName, direction) {
        if (!array)
            return;
        if (!propertyName || String.isEmptyOrWhitespace(propertyName))
            return array;
        if (!direction || String.isEmptyOrWhitespace(direction))
            direction = 'ascending';
        var isDesc = _isDesc(direction || 'ascending');
        var factor = isDesc ? -1 : 1;
        return array.slice(0).sort(function (a, b) {
            var aProp = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getObjectValue)(a, propertyName);
            var bProp = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getObjectValue)(b, propertyName);
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isDate)(aProp) && (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isDate)(bProp)) {
                return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.dateComparison)(aProp, bProp) * factor;
            }
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isString)(aProp))
                aProp = aProp.toLowerCase();
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isString)(bProp))
                bProp = bProp.toLowerCase();
            return (aProp > bProp ? 1 : -1) * factor;
        });
    };
    return SortValueConverter;
}());



/***/ }),

/***/ "resources/value-converters/title-case-value-converter":
/*!**********************************************************************!*\
  !*** ./src/resources/value-converters/title-case-value-converter.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleCaseValueConverter": function() { return /* binding */ TitleCaseValueConverter; }
/* harmony export */ });
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! voca */ 6485);
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(voca__WEBPACK_IMPORTED_MODULE_0__);

var TitleCaseValueConverter = (function () {
    function TitleCaseValueConverter() {
    }
    TitleCaseValueConverter.prototype.toView = function (value) {
        return voca__WEBPACK_IMPORTED_MODULE_0__.titleCase(value);
    };
    return TitleCaseValueConverter;
}());



/***/ }),

/***/ "resources/value-converters/to-lower-case-value-converter":
/*!*************************************************************************!*\
  !*** ./src/resources/value-converters/to-lower-case-value-converter.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToLowerCaseValueConverter": function() { return /* binding */ ToLowerCaseValueConverter; }
/* harmony export */ });
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! voca */ 6485);
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(voca__WEBPACK_IMPORTED_MODULE_0__);

var ToLowerCaseValueConverter = (function () {
    function ToLowerCaseValueConverter() {
    }
    ToLowerCaseValueConverter.prototype.toView = function (value) {
        return voca__WEBPACK_IMPORTED_MODULE_0__.lowerCase(value);
    };
    return ToLowerCaseValueConverter;
}());



/***/ }),

/***/ "resources/value-converters/to-upper-case-value-converter":
/*!*************************************************************************!*\
  !*** ./src/resources/value-converters/to-upper-case-value-converter.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToUpperCaseValueConverter": function() { return /* binding */ ToUpperCaseValueConverter; }
/* harmony export */ });
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! voca */ 6485);
/* harmony import */ var voca__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(voca__WEBPACK_IMPORTED_MODULE_0__);

var ToUpperCaseValueConverter = (function () {
    function ToUpperCaseValueConverter() {
    }
    ToUpperCaseValueConverter.prototype.toView = function (value) {
        return voca__WEBPACK_IMPORTED_MODULE_0__.upperCase(value);
    };
    return ToUpperCaseValueConverter;
}());



/***/ }),

/***/ 4094:
/*!*************************************************!*\
  !*** ./src/resources/value-converters/utils.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateComparison": function() { return /* binding */ dateComparison; },
/* harmony export */   "getObjectValue": function() { return /* binding */ getObjectValue; },
/* harmony export */   "isDate": function() { return /* binding */ isDate; },
/* harmony export */   "isString": function() { return /* binding */ isString; }
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_topath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.topath */ 782);
/* harmony import */ var lodash_topath__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_topath__WEBPACK_IMPORTED_MODULE_1__);


function dateComparison(a, b) {
    if (a === null)
        a = new Date(1900, 0, 1);
    if (b === null)
        b = new Date(1900, 0, 1);
    return moment__WEBPACK_IMPORTED_MODULE_0___default()(a).diff(moment__WEBPACK_IMPORTED_MODULE_0___default()(b));
}
function isDate(val) {
    return moment__WEBPACK_IMPORTED_MODULE_0___default()(val, (moment__WEBPACK_IMPORTED_MODULE_0___default().ISO_8601), true).isValid();
}
function isString(val) {
    return typeof val === 'string';
}
function getObjectValue(obj, propertyPath) {
    if (!obj) {
        throw new Error('Must provide an object to get the value');
    }
    if (!propertyPath) {
        return obj;
    }
    var paths = lodash_topath__WEBPACK_IMPORTED_MODULE_1___default()(propertyPath);
    var length = paths.length;
    var result = obj;
    for (var i = 0; i < length && result; ++i) {
        result = result[paths[i]];
    }
    return result;
}


/***/ })

}]);
//# sourceMappingURL=app-efc01b10.3e95cc108b214a1506c0.bundle.js.map