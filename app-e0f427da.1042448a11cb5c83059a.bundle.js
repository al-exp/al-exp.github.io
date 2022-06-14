"use strict";
(self["webpackChunkweb_client"] = self["webpackChunkweb_client"] || []).push([["app-e0f427da"],{

/***/ 6768:
/*!**********************************************!*\
  !*** ./src/model/contracts/baseline-info.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 1564:
/*!*****************************************!*\
  !*** ./src/model/contracts/baseline.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IBaseline": function() { return /* binding */ IBaseline; }
/* harmony export */ });
var IBaseline = Symbol('IBaseline');


/***/ }),

/***/ 9810:
/*!*********************************************!*\
  !*** ./src/model/contracts/data-service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IDataService": function() { return /* binding */ IDataService; }
/* harmony export */ });
var IDataService = Symbol('IDataService');


/***/ }),

/***/ "model/contracts/index":
/*!**************************************!*\
  !*** ./src/model/contracts/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IBaseline": function() { return /* reexport safe */ _baseline__WEBPACK_IMPORTED_MODULE_7__.IBaseline; },
/* harmony export */   "IDataService": function() { return /* reexport safe */ _data_service__WEBPACK_IMPORTED_MODULE_2__.IDataService; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var model_implementation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! model/implementation */ "model/implementation/index");
/* harmony import */ var model_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! model/contracts */ "model/contracts/index");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-service */ 9810);
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test */ 7765);
/* harmony import */ var _test_results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-results */ 6804);
/* harmony import */ var _test_result_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-result-value */ 7186);
/* harmony import */ var _baseline_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./baseline-info */ 6768);
/* harmony import */ var _baseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./baseline */ 1564);








function configure(config) {
    config.aurelia.container.registerTransient(model_contracts__WEBPACK_IMPORTED_MODULE_1__.IBaseline, model_implementation__WEBPACK_IMPORTED_MODULE_0__.Baseline);
}


/***/ }),

/***/ 7186:
/*!**************************************************!*\
  !*** ./src/model/contracts/test-result-value.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 6804:
/*!*********************************************!*\
  !*** ./src/model/contracts/test-results.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 7765:
/*!*************************************!*\
  !*** ./src/model/contracts/test.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 9712:
/*!***************************************************!*\
  !*** ./src/model/implementation/baseline-info.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaselineInfo": function() { return /* binding */ BaselineInfo; }
/* harmony export */ });
/* harmony import */ var _logofx_aurelia_mvvm_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @logofx/aurelia-mvvm-plugin */ "@logofx/aurelia-mvvm-plugin");
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

var BaselineInfo = (function (_super) {
    __extends(BaselineInfo, _super);
    function BaselineInfo(id, name) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        return _this;
    }
    return BaselineInfo;
}(_logofx_aurelia_mvvm_plugin__WEBPACK_IMPORTED_MODULE_0__.Model));



/***/ }),

/***/ 4987:
/*!**********************************************!*\
  !*** ./src/model/implementation/baseline.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Baseline": function() { return /* binding */ Baseline; }
/* harmony export */ });
/* harmony import */ var _logofx_aurelia_mvvm_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @logofx/aurelia-mvvm-plugin */ "@logofx/aurelia-mvvm-plugin");
/* harmony import */ var aurelia_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-validation */ "aurelia-validation");
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


var Baseline = (function (_super) {
    __extends(Baseline, _super);
    function Baseline() {
        var _this = _super.call(this) || this;
        _this._originalFileNames = [];
        _this.rules = aurelia_validation__WEBPACK_IMPORTED_MODULE_1__.ValidationRules.ensure(function (baseline) { return baseline.name; }).displayName('The Baseline Name').required().withMessage('The value is mandatory')
            .satisfies(function (obj) {
            return obj.length > 0;
        }).withMessage('The value is mandatory')
            .rules;
        return _this;
    }
    Object.defineProperty(Baseline.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
            this.makeDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Baseline.prototype, "originalFileNames", {
        get: function () {
            return this._originalFileNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Baseline.prototype, "singleCellCapacity", {
        get: function () {
            return this._singleCellCapacity;
        },
        set: function (value) {
            this._singleCellCapacity = value;
            this.makeDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Baseline.prototype, "topologyOfCellPackPValue", {
        get: function () {
            return this._topologyOfCellPackPValue;
        },
        set: function (value) {
            this._topologyOfCellPackPValue = value;
            this.makeDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Baseline.prototype, "topologyOfCellPackSValue", {
        get: function () {
            return this._topologyOfCellPackSValue;
        },
        set: function (value) {
            this._topologyOfCellPackSValue = value;
            this.makeDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Baseline.prototype, "uploadedAt", {
        get: function () {
            return this._uploadedAt;
        },
        set: function (value) {
            this.makeDirty();
            this._uploadedAt = value;
        },
        enumerable: false,
        configurable: true
    });
    return Baseline;
}(_logofx_aurelia_mvvm_plugin__WEBPACK_IMPORTED_MODULE_0__.EditableModel));



/***/ }),

/***/ 1711:
/*!**************************************************!*\
  !*** ./src/model/implementation/data-service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": function() { return /* binding */ DataService; }
/* harmony export */ });
/* harmony import */ var _logofx_aurelia_mvvm_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @logofx/aurelia-mvvm-plugin */ "@logofx/aurelia-mvvm-plugin");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-dependency-injection */ 6158);
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! data */ "data/index");
/* harmony import */ var _baseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseline */ 4987);
/* harmony import */ var _baseline_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./baseline-info */ 9712);
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test */ 5840);
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






var DataService = (function () {
    function DataService(dataProvider) {
        this.dataProvider = dataProvider;
        var x = this.dataProvider;
        var y = x;
    }
    DataService.prototype.getBaselineInfosAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        var baselines = Array.from({
                            length: 10
                        }, function (x, i) { return new _baseline_info__WEBPACK_IMPORTED_MODULE_4__.BaselineInfo(i.toString(), "Baseline ".concat(i)); });
                        resolve(baselines);
                    })];
            });
        });
    };
    DataService.prototype.getTestsAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error('Method not implemented.');
            });
        });
    };
    DataService.prototype.getTestAsync = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error('Method not implemented.');
            });
        });
    };
    DataService.prototype.createTestAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var NewTest;
            return __generator(this, function (_a) {
                NewTest = (function (_super) {
                    __extends(NewTest, _super);
                    function NewTest() {
                        var _this = _super.call(this) || this;
                        _this.name = 'New Test';
                        _this.id = _logofx_aurelia_mvvm_plugin__WEBPACK_IMPORTED_MODULE_0__.Guid.create().toString();
                        _this.makeNew();
                        return _this;
                    }
                    return NewTest;
                }(_test__WEBPACK_IMPORTED_MODULE_5__.Test));
                return [2, new Promise(function (resolve) {
                        var test = new NewTest();
                        resolve(test);
                    })];
            });
        });
    };
    DataService.prototype.createBaselineAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var NewBaseline;
            return __generator(this, function (_a) {
                NewBaseline = (function (_super) {
                    __extends(NewBaseline, _super);
                    function NewBaseline() {
                        var _this = _super.call(this) || this;
                        _this.id = _logofx_aurelia_mvvm_plugin__WEBPACK_IMPORTED_MODULE_0__.Guid.create().toString();
                        _this.name = 'New Baseline';
                        _this.singleCellCapacity = 1;
                        _this.topologyOfCellPackPValue = 1;
                        _this.topologyOfCellPackSValue = 1;
                        _this.makeNew();
                        return _this;
                    }
                    return NewBaseline;
                }(_baseline__WEBPACK_IMPORTED_MODULE_3__.Baseline));
                return [2, new Promise(function (resolve) {
                        var baseline = new NewBaseline();
                        resolve(baseline);
                    })];
            });
        });
    };
    DataService.prototype.getBaselinesAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.dataProvider.getBaselinesAsync()];
                    case 1: return [2, (_a.sent()).map(function (baselineDto) {
                            var baseline = new _baseline__WEBPACK_IMPORTED_MODULE_3__.Baseline();
                            baseline.id = baselineDto.id;
                            baseline.name = baselineDto.name;
                            baselineDto.originalFileNames.forEach(function (x) { return baseline.originalFileNames.push(x); });
                            baseline.singleCellCapacity = baselineDto.singleCellCapacity;
                            baseline.topologyOfCellPackPValue = baselineDto.topologyOfCellPack.pValue;
                            baseline.topologyOfCellPackSValue = baselineDto.topologyOfCellPack.sValue;
                            baseline.uploadedAt = baselineDto.uploadedAt;
                            return baseline;
                        })];
                }
            });
        });
    };
    DataService.prototype.updateBaselineAsync = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var dto;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dto = new data__WEBPACK_IMPORTED_MODULE_2__.BaselineDto();
                        dto.id = model.id;
                        dto.name = model.name;
                        dto.originalFileNames = model.originalFileNames;
                        dto.singleCellCapacity = model.singleCellCapacity;
                        dto.topologyOfCellPack = { pValue: model.topologyOfCellPackPValue, sValue: model.topologyOfCellPackSValue };
                        dto.uploadedAt = model.uploadedAt;
                        if (!model.isNew) return [3, 2];
                        return [4, this.dataProvider.postBaselineAsync(dto)
                                .catch(function (error) {
                                throw error;
                            })];
                    case 1:
                        _a.sent();
                        return [3, 4];
                    case 2: return [4, this.dataProvider.putBaselineAsync(dto)
                            .catch(function (error) {
                            throw error;
                        })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    DataService.prototype.deleteBaselineAsync = function (baseline) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.dataProvider.deleteBaselineAsync(baseline.id)
                            .catch(function (error) {
                            throw error;
                        })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    DataService = __decorate([
        (0,aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.inject)(data__WEBPACK_IMPORTED_MODULE_2__.IDataProvider),
        __metadata("design:paramtypes", [Object])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "model/implementation/index":
/*!*******************************************!*\
  !*** ./src/model/implementation/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Baseline": function() { return /* reexport safe */ _baseline__WEBPACK_IMPORTED_MODULE_5__.Baseline; },
/* harmony export */   "BaselineInfo": function() { return /* reexport safe */ _baseline_info__WEBPACK_IMPORTED_MODULE_4__.BaselineInfo; },
/* harmony export */   "DataService": function() { return /* reexport safe */ _data_service__WEBPACK_IMPORTED_MODULE_1__.DataService; },
/* harmony export */   "Test": function() { return /* reexport safe */ _test__WEBPACK_IMPORTED_MODULE_3__.Test; },
/* harmony export */   "TestResults": function() { return /* reexport safe */ _test_results__WEBPACK_IMPORTED_MODULE_2__.TestResults; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! model */ "model/index");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-service */ 1711);
/* harmony import */ var _test_results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-results */ 6138);
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test */ 5840);
/* harmony import */ var _baseline_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./baseline-info */ 9712);
/* harmony import */ var _baseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./baseline */ 4987);






function configure(config) {
    config.aurelia.container.registerSingleton(model__WEBPACK_IMPORTED_MODULE_0__.IDataService, model__WEBPACK_IMPORTED_MODULE_0__.DataService);
}


/***/ }),

/***/ 6138:
/*!**************************************************!*\
  !*** ./src/model/implementation/test-results.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestResults": function() { return /* binding */ TestResults; }
/* harmony export */ });
/* harmony import */ var _logofx_aurelia_mvvm_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @logofx/aurelia-mvvm-plugin */ "@logofx/aurelia-mvvm-plugin");
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

var TestResults = (function (_super) {
    __extends(TestResults, _super);
    function TestResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TestResults;
}(_logofx_aurelia_mvvm_plugin__WEBPACK_IMPORTED_MODULE_0__.Model));



/***/ }),

/***/ 5840:
/*!******************************************!*\
  !*** ./src/model/implementation/test.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Test": function() { return /* binding */ Test; }
/* harmony export */ });
/* harmony import */ var _logofx_aurelia_mvvm_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @logofx/aurelia-mvvm-plugin */ "@logofx/aurelia-mvvm-plugin");
/* harmony import */ var aurelia_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-validation */ "aurelia-validation");
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


var Test = (function (_super) {
    __extends(Test, _super);
    function Test() {
        var _this = _super.call(this) || this;
        _this._originalFileName = String.empty;
        _this.rules = aurelia_validation__WEBPACK_IMPORTED_MODULE_1__.ValidationRules.ensure(function (test) { return test.name; }).displayName('The Test Name').required().withMessage('The value is mandatory')
            .ensure(function (test) { return test.baseline; }).displayName('The Baseline').required().withMessage('The value is mandatory')
            .rules;
        return _this;
    }
    Object.defineProperty(Test.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
            this.makeDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Test.prototype, "originalFileName", {
        get: function () {
            return this._originalFileName;
        },
        set: function (value) {
            this._originalFileName = value;
            this.makeDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Test.prototype, "stateOfCharge", {
        get: function () {
            return this._stateOfCharge;
        },
        set: function (value) {
            this._stateOfCharge = value;
            this.makeDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Test.prototype, "temperature", {
        get: function () {
            return this._temperature;
        },
        set: function (value) {
            this._temperature = value;
            this.makeDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Test.prototype, "baseline", {
        get: function () {
            return this._baseline;
        },
        set: function (value) {
            this._baseline = value;
            this.makeDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Test.prototype, "uploadedAt", {
        get: function () {
            return this._uploadedAt;
        },
        set: function (value) {
            this._uploadedAt = value;
            this.makeDirty();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Test.prototype, "testedAt", {
        get: function () {
            return this._testedAt;
        },
        set: function (value) {
            this._testedAt = value;
            this.makeDirty();
        },
        enumerable: false,
        configurable: true
    });
    return Test;
}(_logofx_aurelia_mvvm_plugin__WEBPACK_IMPORTED_MODULE_0__.EditableModel));



/***/ }),

/***/ "model/index":
/*!****************************!*\
  !*** ./src/model/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Baseline": function() { return /* reexport safe */ _implementation__WEBPACK_IMPORTED_MODULE_2__.Baseline; },
/* harmony export */   "BaselineInfo": function() { return /* reexport safe */ _implementation__WEBPACK_IMPORTED_MODULE_2__.BaselineInfo; },
/* harmony export */   "DataService": function() { return /* reexport safe */ _implementation__WEBPACK_IMPORTED_MODULE_2__.DataService; },
/* harmony export */   "IBaseline": function() { return /* reexport safe */ _contracts__WEBPACK_IMPORTED_MODULE_1__.IBaseline; },
/* harmony export */   "IDataService": function() { return /* reexport safe */ _contracts__WEBPACK_IMPORTED_MODULE_1__.IDataService; },
/* harmony export */   "Test": function() { return /* reexport safe */ _implementation__WEBPACK_IMPORTED_MODULE_2__.Test; },
/* harmony export */   "TestResults": function() { return /* reexport safe */ _implementation__WEBPACK_IMPORTED_MODULE_2__.TestResults; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contracts */ "model/contracts/index");
/* harmony import */ var _implementation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./implementation */ "model/implementation/index");



function configure(config) {
    config.aurelia.use
        .feature('model/contracts/index')
        .feature('model/implementation/index');
}


/***/ })

}]);
//# sourceMappingURL=app-e0f427da.1042448a11cb5c83059a.bundle.js.map