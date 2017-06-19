webpackJsonp([0,4],{

/***/ 345:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 345;


/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(459);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/src/ofg-trading/src/main.js.map

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AccordianComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccordianComponent = (function () {
    function AccordianComponent() {
    }
    AccordianComponent.prototype.ngOnInit = function () {
    };
    AccordianComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-accordian',
            template: __webpack_require__(625),
            styles: [__webpack_require__(619)]
        }), 
        __metadata('design:paramtypes', [])
    ], AccordianComponent);
    return AccordianComponent;
}());
//# sourceMappingURL=C:/src/ofg-trading/src/accordian.component.js.map

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnimationTestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnimationTestComponent = (function () {
    function AnimationTestComponent() {
        this.onSkipAnimation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
    }
    AnimationTestComponent.prototype.ngOnInit = function () {
    };
    AnimationTestComponent.prototype.skipAnimation = function () {
        alert("skip pressed");
        this.onSkipAnimation.emit();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], AnimationTestComponent.prototype, "onSkipAnimation", void 0);
    AnimationTestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-animation-test',
            template: __webpack_require__(626),
            styles: [__webpack_require__(620)]
        }), 
        __metadata('design:paramtypes', [])
    ], AnimationTestComponent);
    return AnimationTestComponent;
}());
//# sourceMappingURL=C:/src/ofg-trading/src/animation-test.component.js.map

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent.prototype.onSkipAnimation = function () {
        alert("Event Emitted");
        var parent = document.getElementById("animationContainer");
        var child = document.getElementById("openingAnimation");
        parent.removeChild(child);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(627),
            styles: [__webpack_require__(621)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/src/ofg-trading/src/app.component.js.map

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accordian_accordian_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carousel_carousel_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__opening_opening_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__animation_test_animation_test_component__ = __webpack_require__(457);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__accordian_accordian_component__["a" /* AccordianComponent */],
                __WEBPACK_IMPORTED_MODULE_6__carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tabs_tabs_component__["a" /* TabsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__opening_opening_component__["a" /* OpeningComponent */],
                __WEBPACK_IMPORTED_MODULE_9__animation_test_animation_test_component__["a" /* AnimationTestComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/src/ofg-trading/src/app.module.js.map

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = (function () {
    function CarouselComponent() {
        this.images = ["assets/ofg-lion-w-logo.jpg",
            "assets/ofg-person2-w-logo.jpg",
            "assets/ofg-currency-gears-w-logo.jpg",
            "assets/ofg-currency-w-logo.jpg",
            "assets/ofg-sunrise-w-logo.jpg",
            "assets/ofg-columns-light-w-logo.jpg",
            "assets/ofg-flags-w-logo.jpg",
            "assets/ofg-clock-w-logo.jpg",
            "assets/ofg-columns-dark-w-logo.jpg",
            "assets/ofg-person1-w-logo.jpg",
            "assets/ofg-gold-bars-w-logo.jpg",
            "assets/ofg-computers-w-logo.jpg"];
    }
    CarouselComponent.prototype.ngOnInit = function () {
        var x = "test";
        x = "test2";
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Array)
    ], CarouselComponent.prototype, "images", void 0);
    CarouselComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-carousel',
            template: __webpack_require__(628),
            styles: [__webpack_require__(622)]
        }), 
        __metadata('design:paramtypes', [])
    ], CarouselComponent);
    return CarouselComponent;
}());
//# sourceMappingURL=C:/src/ofg-trading/src/carousel.component.js.map

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OpeningComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OpeningComponent = (function () {
    function OpeningComponent() {
        this.images = ["assets/ofg-bear.jpg",
            "assets/ofg-bull.jpg",
            "assets/ofg-lion-color.jpg"
        ];
    }
    OpeningComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Array)
    ], OpeningComponent.prototype, "images", void 0);
    OpeningComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-opening',
            template: __webpack_require__(629),
            styles: [__webpack_require__(623)]
        }), 
        __metadata('design:paramtypes', [])
    ], OpeningComponent);
    return OpeningComponent;
}());
//# sourceMappingURL=C:/src/ofg-trading/src/opening.component.js.map

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TabsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsComponent = (function () {
    function TabsComponent() {
        this.content = [
            { title: "Welcome", text: "Welcome to the OFG Trading, LLC website.  Please feel free to browse each page on our site as an introduction to our company." },
            { title: "Code of Ethics", text: "Here at OFG Trading, LLC, old fashion honesty, integrity and a strong work ethic are the foundation of our company.  We are dedicated to a relentless quest to be one of the premier Trading Companies in the world as defined by the Return on Investment that we produce." },
            { title: "Company Profile", text: "OFG Trading, LLC was founded in January of 2004 by a core group of conservative businessmen for two specific purposes. The first purpose was to take advantage of the leverage offered by more complex trading instruments and strategies to generate capital for specific philanthropic endeavors.  The second was to use these same instruments to generate a return on investment  for those who hold an interest in OFG that many brokers or money managers were unable to produce." },
            { title: "Investments", text: "OFG Trading, LLC is a privately owned, closely held, trading entity.  As such, OFG is fully funded by its current Members, is self-contained and there are no Investment opportunities of any kind available.  OFG Trading, LLC is registered with the National Futures Association as a 4.13(a)(2)exempt commodity pool." },
            { title: "Strategies", text: "OFG uses a number of proprietary stategies that we have developed and documented over many years of research.  These strategies are currently being used on a number of live accounts in a variety of markets with both manual and computer generated trade executions." },
            { title: "Our Team", text: "We are very excited and proud of the team that we have assembled for our various projects.  The diverse backgrounds of our Members, Affiliates and Associates consists of Multiple Business Owners and Developers, Analysts, Strategists, a Licensed Broker as well as wo of the top Financial Software Programmers in the industry.  Specific biographical information is being compiled for each of our Professionals." },
        ];
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Array)
    ], TabsComponent.prototype, "content", void 0);
    TabsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-tabs',
            template: __webpack_require__(630),
            styles: [__webpack_require__(624)]
        }), 
        __metadata('design:paramtypes', [])
    ], TabsComponent);
    return TabsComponent;
}());
//# sourceMappingURL=C:/src/ofg-trading/src/tabs.component.js.map

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/src/ofg-trading/src/environment.js.map

/***/ },

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/src/ofg-trading/src/polyfills.js.map

/***/ },

/***/ 619:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 620:
/***/ function(module, exports) {

module.exports = ".background {\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  background-size: cover;\r\n  background-position: center center;\r\n  color: transparent; \r\n  opacity: 0;\r\n  -webkit-animation: backgroundAnimation 24s linear ;\r\n          animation: backgroundAnimation 24s linear ;\r\n  left: 50%;\r\n  margin-left: -562px;  \r\n  position: absolute;\r\n  z-index: 0;\r\n}\r\n\r\n.crossfade > figure {\r\n  -webkit-animation: imageAnimation 30s linear ;\r\n          animation: imageAnimation 30s linear ;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  background-size: cover;\r\n  background-position: center center;\r\n  color: transparent; \r\n  top: 30px;\r\n  left: 50%;\r\n  margin-left: -220px;  \r\n  height: 440px;\r\n  opacity: 0;\r\n  position: absolute;\r\n  width: 440px;\r\n  z-index: 4;\r\n}\r\n.crossfade > figure:nth-child(1) { \r\n  background-image: url('assets/ofg-bear.jpg'); \r\n  -webkit-animation-delay: 1s; \r\n          animation-delay: 1s;\r\n}\r\n.crossfade > figure:nth-child(2) {\r\n  -webkit-animation-delay: 8s;\r\n          animation-delay: 8s;\r\n  background-image: url('assets/ofg-bull.jpg');\r\n}\r\n.crossfade > figure:nth-child(3) {\r\n  -webkit-animation-delay: 15s;\r\n          animation-delay: 15s;\r\n  background-image: url('assets/ofg-lion-color.jpg');\r\n}\r\n\r\n@-webkit-keyframes\r\nimageAnimation{ 0% {\r\n -webkit-animation-timing-function: ease-in;\r\n         animation-timing-function: ease-in;\r\n opacity: 0;\r\n    }\r\n    8% {\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n    opacity: 1;\r\n    }\r\n    17% {\r\n    opacity: 1\r\n    }\r\n    25% {\r\n    opacity: 0\r\n    }\r\n    100% {\r\n    opacity: 0\r\n    }\r\n}\r\n\r\n@keyframes\r\nimageAnimation{ 0% {\r\n -webkit-animation-timing-function: ease-in;\r\n         animation-timing-function: ease-in;\r\n opacity: 0;\r\n    }\r\n    8% {\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n    opacity: 1;\r\n    }\r\n    17% {\r\n    opacity: 1\r\n    }\r\n    25% {\r\n    opacity: 0\r\n    }\r\n    100% {\r\n    opacity: 0\r\n    }\r\n}\r\n\r\n@-webkit-keyframes\r\nbackgroundAnimation{ 0% {\r\n -webkit-animation-timing-function: ease-in;\r\n         animation-timing-function: ease-in;\r\n opacity: 0;\r\n    }\r\n    5% {\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n    opacity: 1;\r\n    }\r\n    90% {\r\n    opacity: 1\r\n    }\r\n    95% {\r\n    opacity: 0\r\n    }\r\n    100% {\r\n    opacity: 0\r\n    }\r\n}\r\n\r\n@keyframes\r\nbackgroundAnimation{ 0% {\r\n -webkit-animation-timing-function: ease-in;\r\n         animation-timing-function: ease-in;\r\n opacity: 0;\r\n    }\r\n    5% {\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n    opacity: 1;\r\n    }\r\n    90% {\r\n    opacity: 1\r\n    }\r\n    95% {\r\n    opacity: 0\r\n    }\r\n    100% {\r\n    opacity: 0\r\n    }\r\n}\r\n "

/***/ },

/***/ 621:
/***/ function(module, exports) {

module.exports = ".website {\r\n  position: relative;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  top: -499px;\r\n  z-index: 5;\r\n}\r\n\r\n.website-transition {\r\n  -webkit-animation: websiteAnimation 24s linear ;\r\n          animation: websiteAnimation 24s linear ;\r\n  -webkit-animation-delay: 0s;\r\n          animation-delay: 0s;\r\n}\r\n\r\n@-webkit-keyframes \r\nwebsiteAnimation {\r\n    0% {opacity: 0}\r\n    95% {opacity: 0}\r\n    100% {opacity: 1}\r\n}\r\n\r\n@keyframes \r\nwebsiteAnimation {\r\n    0% {opacity: 0}\r\n    95% {opacity: 0}\r\n    100% {opacity: 1}\r\n}"

/***/ },

/***/ 622:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 623:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 624:
/***/ function(module, exports) {

module.exports = "h4 {\r\n  color: #e1daa6;\r\n}\r\n\r\n"

/***/ },

/***/ 625:
/***/ function(module, exports) {

module.exports = "<div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n      <h4 class=\"panel-title\">\n        <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n          Welcome\n        </a>\n      </h4>\n    </div>\n    <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n      <div class=\"panel-body\">\n        Welcome to the OFG Trading, LLC website.  Please feel free to browse each page on our site as an introduction to our company.\n      </div>\n    </div>\n  </div>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n      <h4 class=\"panel-title\">\n        <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n          Code of Ethics\n        </a>\n      </h4>\n    </div>\n    <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n      <div class=\"panel-body\">\n        Here at OFG Trading, LLC, old fashion honesty, integrity and a strong work ethic are the foundation of our company.  We are dedicated to a relentless quest to be one of the premier Trading Companies in the world as defined by the Return on Investment that we produce.\n      </div>\n    </div>\n  </div>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n      <h4 class=\"panel-title\">\n        <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n          Company Profile\n        </a>\n      </h4>\n    </div>\n    <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n      <div class=\"panel-body\">\n        OFG Trading, LLC was founded in January of 2004 by a core group of conservative businessmen for two specific purposes.  \n        The first purpose was to take advantage of the leverage offered by more complex trading instruments and strategies to \n        generate capital for specific philanthropic endeavors.  The second was to use these \n        same instruments to generate a return on investment  for those who hold an interest in OFG that many \n        brokers or money managers were unable to produce.   \n      </div>   \n    </div>\n  </div>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\" role=\"tab\" id=\"headingFour\">\n      <h4 class=\"panel-title\">\n        <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">\n          Investments\n        </a>\n      </h4>\n    </div>\n    <div id=\"collapseFour\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingFour\">\n      <div class=\"panel-body\">\n        OFG Trading, LLC is a privately owned, closely held, trading entity.  As such, OFG is fully funded by its current Members, is self-contained and there are no Investment opportunities of any kind available.  OFG Trading, LLC is registered with the National Futures Association as a 4.13(a)(2)exempt commodity pool.\n      </div>\n    </div>\n  </div>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\" role=\"tab\" id=\"headingFive\">\n      <h4 class=\"panel-title\">\n        <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" aria-expanded=\"false\" aria-controls=\"collapseFive\">\n          Strategies\n        </a>\n      </h4>\n    </div>\n    <div id=\"collapseFive\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingFive\">\n      <div class=\"panel-body\">\n        OFG uses a number of proprietary stategies that we have developed and documented over many years of research.  \n        These strategies are currently being used on a number of live accounts in a variety of markets with both manual \n        and computer generated trade executions.      \n      </div>\n    </div>\n  </div>\n    <div class=\"panel panel-default\">\n    <div class=\"panel-heading\" role=\"tab\" id=\"headingSix\">\n      <h4 class=\"panel-title\">\n        <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSix\" aria-expanded=\"false\" aria-controls=\"collapseSix\">\n          Our Team\n        </a>\n      </h4>\n    </div>\n    <div id=\"collapseSix\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingSix\">\n      <div class=\"panel-body\">\n        We are very excited and proud of the team that we have assembled for our various projects.  \n        The diverse backgrounds of our Members, Affiliates and Associates consists of Multiple Business Owners and Developers, \n        Analysts, Strategists, a Licensed Broker as well as two of the top Financial Software Programmers in the industry. \n        Specific biographical information is being compiled for each of our Professionals.      \n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ },

/***/ 626:
/***/ function(module, exports) {

module.exports = "<img  class=\"background\"  src=\"assets/ofg-opening-background-no-logo.jpg\" alt=\"\" style=\"position:relative;z-index:-1\">\n<img  class=\"background\"  src=\"assets/ofg-opening-logo.jpg\" alt=\"\" style=\"position:relative;left:80%;top:110px;z-index:10\" (click)=\"skipAnimation()\">\n<div class=\"crossfade\">\n  <figure></figure>\n  <figure></figure>\n  <figure></figure>\n</div>\n"

/***/ },

/***/ 627:
/***/ function(module, exports) {

module.exports = "<!--<img  class=\"center-block\"  src=\"assets/ofg-opening-background.jpg\" alt=\"\" style=\"position:relative;z-index:-1\">-->\n<div id=\"animationContainer\">\n  <app-animation-test id=\"openingAnimation\" (onSkipAnimation)=\"onSkipAnimation()\"></app-animation-test>\n</div>\n<!--<app-opening></app-opening>-->\n<div id=\"mainWebsite\" class=\"website website-transition\">\n<!--<div>-->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-5\">\n          <img class= \"center-block hidden-sm hidden-xs\" src=\"assets/ofg-large-logo-with-background.jpg\" alt=\"\">\n          <img class= \"center-block hidden-xs hidden-md hidden-lg hidden-xl\" src=\"assets/ofg-large-logo-w-background-centered.jpg\" alt=\"\">\n          <img class= \"center-block hidden-sm hidden-md hidden-lg hidden-xl\" src=\"assets/ofg-large-logo-w-background-centered-small.jpg\" alt=\"\">\n      </div>\n      <div class=\"col-md-7\">\n        <div class=\"hidden-sm hidden-xs\" style=\"height:60px\"></div>\n        <app-carousel class=\"hidden-sm hidden-xs\"></app-carousel>\n        <app-accordian class=\"hidden-lg hidden-xl\"></app-accordian>\n        <app-tabs class=\"hidden-xs hidden-sm hidden-md\"></app-tabs>\n        <app-carousel class=\"hidden-md hidden-lg hidden-xl\"></app-carousel>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 628:
/***/ function(module, exports) {

module.exports = "<div id=\"carousel-example-generic\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <!--<ol class=\"carousel-indicators\">\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n  </ol>-->\n\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\" >\n    <div [class]=\"(i == 0) ? 'item active' : 'item'\" *ngFor=\"let image of images; let i=index\">\n      <img class=\"carousel-picture\" [src]=\"image\" alt=\"...\">\n      <!--<div class=\"carousel-caption\">\n        Caption {{i}}\n      </div>-->\n    </div>\n    <!--<div class=\"item active\">\n      <img class=\"carousel-picture\" [src]=\"images[0]\" alt=\"...\">\n      <div class=\"carousel-caption\">\n        Caption 1\n      </div>\n    </div>\n    <div class=\"item\">\n      <img class=\"carousel-picture\" [src]=\"images[1]\" alt=\"...\">\n      <div class=\"carousel-caption\">\n        Caption 2\n      </div>\n    </div>\n    <div class=\"item\">\n      <img class=\"carousel-picture\" [src]=\"images[2]\" alt=\"...\">\n      <div class=\"carousel-caption\">\n        Caption 2\n      </div>\n    </div>-->\n  </div>\n\n  <!-- Controls -->\n  <!--<a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>-->\n</div>"

/***/ },

/***/ 629:
/***/ function(module, exports) {

module.exports = "<div class=\"center-block\" style=\"position:relative\">\n  <!--<div class=\"center-block\" id=\"carousel-example-generic\" class=\"carousel slide carousel-fade\" data-interval=\"3000\"  data-wrap=\"false\" data-ride=\"carousel\" style=\"position:relative;left:338px;top:26px\">-->\n  <div class=\"center-block\" id=\"carousel-example-generic\" class=\"carousel slide carousel-fade\" data-interval=\"3000\"  data-wrap=\"false\" data-ride=\"carousel\" style=\"z-index:2\">\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\" role=\"listbox\" >\n      <div [class]=\"(i == 0) ? 'item active' : 'item'\" *ngFor=\"let image of images; let i=index\">\n        <img class=\"center-block carousel-picture\" [src]=\"image\" alt=\"...\"  style=\"position:relative;top:28px;z-index:2\">\n      </div>\n    </div>\n  </div>\n    <img  class=\"center-block\"  src=\"assets/ofg-opening-background.jpg\" alt=\"\" style=\"position:relative;z-index:-1\">\n\n</div>"

/***/ },

/***/ 630:
/***/ function(module, exports) {

module.exports = "<div class=\"bs-component\">\n  <ul class=\"nav nav-tabs\">\n    <li [class]=\"(i==0) ? 'active':''\" *ngFor=\"let c of content | slice:1; let i=index\">\n       <a *ngIf=\"i==0\" attr.href=\"#Tab{{i}}\" data-toggle=\"tab\">Welcome</a>\n       <a *ngIf=\"i>0\" attr.href=\"#Tab{{i+1}}\" data-toggle=\"tab\">{{c.title}}</a>\n    </li>\n  </ul>\n  <div id=\"myTabContent\" class=\"tab-content\">\n    <div [class]=\"(i==0) ? 'tab-pane fade active in' : 'tab-pane fade'\" attr.id=\"Tab{{i}}\" *ngFor=\"let c of content; let i=index\">\n      <div *ngIf=\"i==0\">\n        <div class=\"row\" style=\"margin: 20px 15px 15px 15px\">\n          <div class=\"col-md-6\">\n            <h4>{{c.title}}</h4>\n            <p>{{c.text}}</p>\n          </div>\n          <div class=\"col-md-6\">\n            <h4>{{content[i+1].title}}</h4>\n            <p>{{content[i+1].text}}</p>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"i>=2\">\n        <div  style=\"margin:20px 15px 15px 15px\">\n          <h4>{{c.title}}</h4>\n          <p>{{content[i].text}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--<div class=\"bs-component\">\n  <ul class=\"nav nav-tabs\">\n    <li class=\"active\"><a href=\"#welcome\" data-toggle=\"tab\">Welcome</a></li>\n    <li><a href=\"#profile\" data-toggle=\"tab\">Company Profile</a></li>\n    <li><a href=\"#investments\" data-toggle=\"tab\">Investments</a></li>\n    <li><a href=\"#strategies\" data-toggle=\"tab\">Strategies</a></li>\n    <li><a href=\"#team\" data-toggle=\"tab\">Our Team</a></li>\n  </ul>\n  <div id=\"myTabContent\" class=\"tab-content\">\n    <div class=\"tab-pane fade active in\" id=\"welcome\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h4>Welcome</h4>\n          <p>Welcome to the OFG Trading, LLC website.  Please feel free to browse each page on our site as an introduction to our company.</p>\n        </div>\n        <div class=\"col-md-6\">\n          <h4>Code of Ethics</h4>\n          <p>Here at OFG Trading, LLC, old fashion honesty, integrity and a strong work ethic are the foundation of our company.  We are dedicated to a relentless quest to be one of the premier Trading Companies in the world as defined by the Return on Investment that we produce..</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"tab-pane fade\" id=\"profile\">\n      <p>OFG Trading, LLC was founded in January of 2004 by a core group of conservative businessmen for two specific purposes. The first purpose was to take advantage of the leverage offered by more complex trading instruments and strategies to generate capital for specific philanthropic endeavors.  The second was to use these same instruments to generate a return on investment  for those who hold an interest in OFG that many brokers or money managers were unable to produce.</p>\n    </div>\n    <div class=\"tab-pane fade\" id=\"investments\">\n      <p>OFG Trading, LLC is a privately owned, closely held, trading entity.  As such, OFG is fully funded by its current Members, is self-contained and there are no Investment opportunities of any kind available.  OFG Trading, LLC is registered with the National Futures Association as a 4.13(a)(2)exempt commodity pool.</p>\n    </div>\n    <div class=\"tab-pane fade\" id=\"strategies\">\n      <p>OFG uses a number of proprietary stategies that we have developed and documented over many years of research.  These strategies are currently being used on a number of live accounts in a variety of markets with both manual and computer generated trade executions.</p>\n    </div>\n    <div class=\"tab-pane fade\" id=\"team\">\n      <p>We are very excited and proud of the team that we have assembled for our various projects.  The diverse backgrounds of our Members, Affiliates and Associates consists of Multiple Business Owners and Developers, Analysts, Strategists, a Licensed Broker as well as wo of the top Financial Software Programmers in the industry.  Specific biographical information is being compiled for each of our Professionals.</p>\n    </div>\n  </div>\n</div>-->\n"

/***/ },

/***/ 645:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(346);


/***/ }

},[645]);
//# sourceMappingURL=main.bundle.map