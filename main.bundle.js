webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about-us-csr/about-us-csr.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-us-csr/about-us-csr.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Banner Section-->\n<section class=\"section-banner\">\n    <img src=\"assets/images/banner/desktop/banner_csr.jpg\" class=\"img-responsive\">\n    <div class=\"overlay\">\n        <div class=\"container text-center\">\n            <div class=\"slider-caption caption--blue\" data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\">\n                <h1>Reaching out. Driving change.</h1>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Content Wrapper-->\n<section>\n    <div class=\"container\">\n        <!--Zeel Overview-->\n        <div class=\"overview\" data-aos=\"fade-up\"  data-aos-duration=\"900\">\n            <nav class=\"overview__nav tab-scroll\">\n                <ul class=\"tab-list\">\n                    <li><a routerLink=\"/about-us\">Overview</a></li>\n                    <li><a routerLink=\"/about-us-legacy\">Legacy</a></li>\n                    <li><a routerLink=\"/about-us-leadership\">Leadership</a></li>\n                    <li><a routerLink=\"/about-us-partnership\">Partnerships</a></li>\n                    <li class=\"active\"><a routerLink=\"/about-us-csr\">CSR and Sustainability</a></li>\n                    <li><a routerLink=\"/about-us-technology\">Technology</a></li>\n                </ul>\n            </nav>\n            <div class=\"overview__content inner-pad50\">\n                <div class=\"row\">\n                    <div class=\"col-sm-3 col-md-4\">\n                        <div class=\"overview__heading\">\n                            <span>CSR and</span> Sustainability\n                        </div>\n                    </div>\n                    <div class=\"col-sm-9 col-md-8\">\n                        <div class=\"overview__right__section\">\n                            <p>ZEE has always believed in inclusive growth where every human being is treated equally and thus helps in the development of the society as a whole.</p>\n                            <p>With our Zee is Green initiative we are powering an environmental revolution in the media and entertainment industry</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- Creating a Change-->\n<section>\n    <div class=\"container\">\n        <div class=\"title big text-center\">\n            <h1>Creating a <span>Change</span></h1>\n        </div>\n        <div class=\"row\">\n            <!--We are where you want to be-->\n            <div class=\"col-sm-6 col-md-4\" data-aos=\"fade-up\">\n                <aside>\n                    <h2>Our CSR Brand - Zee Care</h2>\n                    <p>Our key focus has been on women empowerment and child education. By collaborating with local communities and partner organization ZEE has been able to collaborate with ’Room to Read’ </p>\n                    <a href=\"zee-care.html\" class=\"cta-link text-uppercase mb-20\">Know More<span></span></a>\n                </aside>\n            </div>\n            <div class=\"col-sm-6 col-md-8\"  data-aos=\"fade-up\" data-aos-duration=\"1000\">\n                <img src=\"assets/images/overview/creating_a_change.jpg\" class=\"img-responsive\" alt=\"Creating a Change\">\n            </div>\n        </div>\n    </div>\n</section>\n\n<!--Committed to sustainability-->\n<section class=\"section-space gray-bg pt-0\">\n    <div class=\"container\">\n        <div class=\"title big text-center\">\n            <h1>Committed to <span>Sustainability</span></h1>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-6 col-md-6\"  data-aos=\"fade-up\" data-aos-duration=\"1000\">\n                <img src=\"assets/images/overview/committed_to_custainability.jpg\" class=\"img-responsive\" alt=\"Committed to Sustainability\">\n            </div>\n\n            <div class=\"col-sm-6 col-md-6\"  data-aos=\"fade-up\">\n                <aside>\n                    <h2>Our Business Responsibility</h2>\n                    <p>Zee is Green, is an initiative that is developing the next generation of production practices that put people and profits in sync with the planet.</p>\n                    <a href=\"zee-is-green.html\" class=\"cta-link text-uppercase\">Know More<span></span></a>\n                </aside>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/about-us-csr/about-us-csr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsCsrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsCsrComponent = (function () {
    function AboutUsCsrComponent() {
    }
    AboutUsCsrComponent.prototype.ngOnInit = function () {
    };
    AboutUsCsrComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us-csr',
            template: __webpack_require__("../../../../../src/app/about-us-csr/about-us-csr.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about-us-csr/about-us-csr.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsCsrComponent);
    return AboutUsCsrComponent;
}());



/***/ }),

/***/ "../../../../../src/app/about-us-leadership/about-us-leadership.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-us-leadership/about-us-leadership.component.html":
/***/ (function(module, exports) {

module.exports = "    <!--Banner Section-->\n    <section class=\"section-banner\">\n        <img src=\"assets/images/banner/desktop/banner_leadership.jpg\" class=\"img-responsive\">\n        <div class=\"overlay\">\n            <div class=\"container text-center\">\n                <div class=\"slider-caption caption--blue\" data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\">\n                    <h1>Our key milestones</h1>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--Content Wrapper-->\n    <section>\n        <div class=\"container\">\n            <!--Zeel Overview-->\n            <div class=\"overview mb-0\" data-aos=\"fade-up\"  data-aos-duration=\"900\">\n                <nav class=\"overview__nav tab-scroll\">\n                    <ul class=\"tab-list\">\n                        <li><a routerLink=\"/about-us\">Overview</a></li>\n                        <li><a routerLink=\"/about-us-legacy\">Legacy</a></li>\n                        <li class=\"active\"><a routerLink=\"/about-us-leadership\">Leadership</a></li>\n                        <li><a routerLink=\"/about-us-partnership\">Partnerships</a></li>\n                        <li><a routerLink=\"/about-us-csr\">CSR and Sustainability</a></li>\n                        <li><a routerLink=\"/about-us-technology\">Technology</a></li>\n                    </ul>\n                </nav>\n                <div class=\"overview__content inner-pad50\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-3 col-md-4\">\n                            <div class=\"overview__heading\">\n                                <span>ZEEL</span> Leadership\n                            </div>\n                        </div>\n                        <div class=\"col-sm-9 col-md-8\">\n                            <div class=\"overview__right__section\">\n                                <p>ZEEL strives to build a democratic culture and discuss core business issues in an open forum. As a part of this initiative, performance of all businesses is shared with employees through a webcast led by the MD & CEO. This is followed by a Q&A session with employees across India. An open-door policy fosters an environment of trust and respect between the management and the employees.</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--Board of DIRECTORS-->\n    <section id=\"boardOfDirectors\" class=\"section-space pt-0\">\n        <div class=\"container\">\n            <div class=\"title big text-center\">\n                <h1>Board of <span>DIRECTORS</span></h1>\n            </div>\n\n            <!--Borad of directors people cards-->\n            <div class=\"row\">\n                <!--Dr. Subhash Chandra-->\n                <div class=\"col-sm-6 col-md-4 col-lg-4\" data-aos=\"fade-up\" data-aos-easing=\"ease\" data-aos-delay=\"400\" *ngFor=\"let member of _listOfMember\">\n                    <div class=\"people-bod\">\n                        <figure data-toggle=\"modal\" data-target=\"#dr_Subhash\">\n                            <img [src]=\"member.img\" alt=\"Dr. Subhash Chandra\">\n                            <figcaption class=\"clearfix\">\n                                <div class=\"pull-left\">\n                                    <h3>{{member.name}}</h3>\n                                    <p>{{member.designation}}</p>\n                                </div>\n                                <div class=\"pull-right\">\n                                    <a href=\"javascript:void(0)\" target=\"_blank\" class=\"twitter\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n                                </div>\n                            </figcaption>\n                        </figure>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--Senior management-->\n    <section id=\"seniorManagement\" class=\"section-space bg-light-gray pt-0\">\n        <div class=\"container\">\n            <div class=\"title big text-center\">\n                <h1>Senior <span>Management</span></h1>\n            </div>\n\n            <!--Senior management People card-->\n            <div class=\"row\">\n\n                <!--Mr. Punit Goenka-->\n                <div class=\"col-sm-6 col-md-4 col-lg-3\" data-aos=\"fade-up\" data-aos-easing=\"ease\" data-aos-delay=\"400\" *ngFor=\"let member of _listOfManagementMembers\">\n                    <div class=\"people-senior-mgt\">\n                        <figure>\n                            <img [src]=\"member.img\" alt=\"Mr. Punit Goenka\">\n                            <figcaption>\n                                <div class=\"name-designation\">\n                                    <h3>{{member.name}}</h3>\n                                    <p>{{member.profile}}</p>\n                                </div>\n                                <div class=\"social-profile-link\">\n                                    <a href=\"javascript:void(0)\" target=\"_blank\" class=\"twitter\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Follow</a>\n                                </div>\n                            </figcaption>\n                        </figure>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n"

/***/ }),

/***/ "../../../../../src/app/about-us-leadership/about-us-leadership.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsLeadershipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__management_service_service__ = __webpack_require__("../../../../../src/app/management-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutUsLeadershipComponent = (function () {
    function AboutUsLeadershipComponent(managementServiceService, http) {
        this.managementServiceService = managementServiceService;
        this.http = http;
        this._url = "../../api/members.json";
        this._listOfManagementMembers = managementServiceService.getManagementList();
    }
    AboutUsLeadershipComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Calling API
        this.http.get(this._url).subscribe(function (data) { return _this._listOfMember = data; });
    };
    AboutUsLeadershipComponent.prototype.ngAfterViewInit = function () {
    };
    AboutUsLeadershipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us-leadership',
            template: __webpack_require__("../../../../../src/app/about-us-leadership/about-us-leadership.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about-us-leadership/about-us-leadership.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__management_service_service__["a" /* ManagementServiceService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__management_service_service__["a" /* ManagementServiceService */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AboutUsLeadershipComponent);
    return AboutUsLeadershipComponent;
}());



/***/ }),

/***/ "../../../../../src/app/about-us-legacy/about-us-legacy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-us-legacy/about-us-legacy.component.html":
/***/ (function(module, exports) {

module.exports = "    <!--Banner Section-->\n    <section class=\"section-banner\">\n        <img src=\"assets/images/banner/desktop/banner_legacy.jpg\" class=\"img-responsive\">\n        <div class=\"overlay\">\n            <div class=\"container text-center\">\n                <div class=\"slider-caption caption--blue\" data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\">\n                    <h1>Our key milestones</h1>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--Content Wrapper-->\n    <section>\n        <div class=\"container\">\n            <!--Zeel Overview-->\n            <div class=\"overview\" data-aos=\"fade-up\"  data-aos-duration=\"900\">\n                <nav class=\"overview__nav tab-scroll\">\n                    <ul class=\"tab-list\">\n                        <li><a routerLink=\"/about-us\">Overview</a></li>\n                        <li class=\"active\"><a routerLink=\"/about-us-legacy\">Legacy</a></li>\n                        <li><a routerLink=\"/about-us-leadership\">Leadership</a></li>\n                        <li><a routerLink=\"/about-us-partnership\">Partnerships</a></li>\n                        <li><a routerLink=\"/about-us-csr\">CSR and Sustainability</a></li>\n                        <li><a routerLink=\"/about-us-technology\">Technology</a></li>\n                    </ul>\n                </nav>\n                <div class=\"overview__content inner-pad50\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-3 col-md-4\">\n                            <div class=\"overview__heading\">\n                                <img src=\"assets/images/logo_zee_25.svg\" class=\"img-responsive\" alt=\"zee 25 years history\">\n                            </div>\n                        </div>\n                        <div class=\"col-sm-9 col-md-8\">\n                            <div class=\"overview__right__section\">\n                                <p>1992 ushered in an upheaval of sorts in India, with an upsurge in the world of media and entertainment. An upsurge that would resculpt social drifts and impart new meaning to TV viewing in India. Subhash Chandra, one of India's leading entrepreneurs, who sought to create a revolution by facilitating the convergence of media and communication with a mirror into the common man's life, created Zee Telefilms Limited in October 1992. This enterprise was to act as the chief content provider for Zee TV - India's first Hindi satellite channel.</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--Timeline Section-->\n    <div class=\"channels_timeline_section\" data-aos=\"fade-up\">\n        <section class=\"section-space pb-0\">\n            <div class=\"container-fluid\">\n                <div class=\"years-legacy owl-carousel\">\n                    <div class=\"item\" data-hash=\"twenty17\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/zee_khana_khazan.jpg\" alt=\"\">\n                            </div>\n\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Zee Khana Khazana</h3>\n                                <p>India's first 24-hour food channel</p>\n                                <span class=\"date\">10 Oct 2017</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/zee_salaam.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Zee Salaam</h3>\n                                <p>India's first Urdu infotainment satellite television channel</p>\n                                <span class=\"date\">10 Oct 2017</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\"  data-hash=\"twenty16\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_cricket.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Action+</h3>\n                                <p>A sports channel showcasing the best football action from around the world</p>\n                                <span class=\"date\">23 May 1016</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\"  data-hash=\"twenty15\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/zee_khana_khazan.jpg\" alt=\"\">\n                            </div>\n\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Zee Khana Khazana</h3>\n                                <p>India's first 24-hour food channel</p>\n                                <span class=\"date\">10 Oct 2015</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/zee_salaam.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Zee Salaam</h3>\n                                <p>India's first Urdu infotainment satellite television channel</p>\n                                <span class=\"date\">10 Nov 2015</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\"  data-hash=\"twenty14\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_sports.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Cricket</h3>\n                                <p>A dedicated 24-hour Cricket Channel</p>\n                                <span class=\"date\">10 Oct 2014</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\" data-hash=\"twenty13\">\n                        <div class=\"channels_timeline\"  >\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_cricket.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Action+</h3>\n                                <p>A sports channel showcasing the best football action from around the world</p>\n                                <span class=\"date\">10 Oct 2013</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\"  data-hash=\"twenty12\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/zee_salaam.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Zee Salaam</h3>\n                                <p>India's first Urdu infotainment satellite television channel</p>\n                                <span class=\"date\">10 Oct 2012</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\"  data-hash=\"twenty11\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/zee_salaam.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Zee Salaam</h3>\n                                <p>India's first Urdu infotainment satellite television channel</p>\n                                <span class=\"date\">10 Oct 2011</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_cricket.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Action+</h3>\n                                <p>A sports channel showcasing the best football action from around the world</p>\n                                <span class=\"date\">03 Jan 2011</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/zee_khana_khazan.jpg\" alt=\"\">\n                            </div>\n\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Zee Khana Khazana</h3>\n                                <p>India's first 24-hour food channel</p>\n                                <span class=\"date\">10 Oct 2011</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/zee_salaam.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Zee Salaam</h3>\n                                <p>India's first Urdu infotainment satellite television channel</p>\n                                <span class=\"date\">25 Oct 2011</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_sports.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Cricket</h3>\n                                <p>A dedicated 24-hour Cricket Channel</p>\n                                <span class=\"date\">10 May 2011</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_cricket.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Action+</h3>\n                                <p>A sports channel showcasing the best football action from around the world</p>\n                                <span class=\"date\">10 Feb 2011</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\" data-hash=\"twenty10\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_cricket.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Action+</h3>\n                                <p>A sports channel showcasing the best football action from around the world</p>\n                                <span class=\"date\">10 Oct 2010</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/zee_salaam.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Zee Salaam</h3>\n                                <p>India's first Urdu infotainment satellite television channel</p>\n                                <span class=\"date\">23 Oct 2010</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_cricket.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Action+</h3>\n                                <p>A sports channel showcasing the best football action from around the world</p>\n                                <span class=\"date\">22 Mar 2010</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/zee_khana_khazan.jpg\" alt=\"\">\n                            </div>\n\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Zee Khana Khazana</h3>\n                                <p>India's first 24-hour food channel</p>\n                                <span class=\"date\">10 Oct 2010</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/zee_salaam.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Zee Salaam</h3>\n                                <p>India's first Urdu infotainment satellite television channel</p>\n                                <span class=\"date\">10 Oct 2010</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_sports.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Cricket</h3>\n                                <p>A dedicated 24-hour Cricket Channel</p>\n                                <span class=\"date\">10 Oct 2010</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_cricket.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Action+</h3>\n                                <p>A sports channel showcasing the best football action from around the world</p>\n                                <span class=\"date\">10 Oct 2010</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\" data-hash=\"twenty09\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_cricket.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Action+</h3>\n                                <p>A sports channel showcasing the best football action from around the world</p>\n                                <span class=\"date\">10 Oct 2009</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/zee_salaam.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Zee Salaam</h3>\n                                <p>India's first Urdu infotainment satellite television channel</p>\n                                <span class=\"date\">10 Oct 2009</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_cricket.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Action+</h3>\n                                <p>A sports channel showcasing the best football action from around the world</p>\n                                <span class=\"date\">10 Oct 2009</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/zee_khana_khazan.jpg\" alt=\"\">\n                            </div>\n\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Zee Khana Khazana</h3>\n                                <p>India's first 24-hour food channel</p>\n                                <span class=\"date\">10 Oct 2009</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/zee_salaam.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Zee Salaam</h3>\n                                <p>India's first Urdu infotainment satellite television channel</p>\n                                <span class=\"date\">10 Oct 2009</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_sports.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Cricket</h3>\n                                <p>A dedicated 24-hour Cricket Channel</p>\n                                <span class=\"date\">10 Oct 2009</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_cricket.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Action+</h3>\n                                <p>A sports channel showcasing the best football action from around the world</p>\n                                <span class=\"date\">10 Oct 2009</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\" data-hash=\"twenty08\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_cricket.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Action+</h3>\n                                <p>A sports channel showcasing the best football action from around the world</p>\n                                <span class=\"date\">10 Oct 2008</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\" data-hash=\"twenty07\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/zee_salaam.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Zee Salaam</h3>\n                                <p>India's first Urdu infotainment satellite television channel</p>\n                                <span class=\"date\">10 Oct 2007</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\" data-hash=\"twenty06\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_cricket.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Action+</h3>\n                                <p>A sports channel showcasing the best football action from around the world</p>\n                                <span class=\"date\">10 Oct 2006</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/zee_khana_khazan.jpg\" alt=\"\">\n                            </div>\n\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Zee Khana Khazana</h3>\n                                <p>India's first 24-hour food channel</p>\n                                <span class=\"date\">10 Oct 2006</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\" data-hash=\"twenty05\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/zee_salaam.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Zee Salaam</h3>\n                                <p>India's first Urdu infotainment satellite television channel</p>\n                                <span class=\"date\">10 Oct 2005</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_sports.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Cricket</h3>\n                                <p>A dedicated 24-hour Cricket Channel</p>\n                                <span class=\"date\">10 Oct 2005</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\" data-hash=\"twenty04\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_cricket.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Action+</h3>\n                                <p>A sports channel showcasing the best football action from around the world</p>\n                                <span class=\"date\">10 Oct 2004</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_cricket.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Action+</h3>\n                                <p>A sports channel showcasing the best football action from around the world</p>\n                                <span class=\"date\">10 Oct 2004</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\" data-hash=\"twenty03\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/zee_salaam.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Zee Salaam</h3>\n                                <p>India's first Urdu infotainment satellite television channel</p>\n                                <span class=\"date\">10 Oct 2003</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_cricket.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Action+</h3>\n                                <p>A sports channel showcasing the best football action from around the world</p>\n                                <span class=\"date\">10 Oct 2003</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/zee_khana_khazan.jpg\" alt=\"\">\n                            </div>\n\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Zee Khana Khazana</h3>\n                                <p>India's first 24-hour food channel</p>\n                                <span class=\"date\">10 Oct 2003</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/zee_salaam.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Zee Salaam</h3>\n                                <p>India's first Urdu infotainment satellite television channel</p>\n                                <span class=\"date\">10 Oct 2003</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\" data-hash=\"twenty02\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_sports.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Cricket</h3>\n                                <p>A dedicated 24-hour Cricket Channel</p>\n                                <span class=\"date\">10 Oct 2002</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"item\" data-hash=\"twenty01\">\n                        <div class=\"channels_timeline\">\n                            <div class=\"channels_timeline__img\">\n                                <img src=\"assets/images/legacy/ten_cricket.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"channels_timeline__dec\">\n                                <h3>Launches Ten Action+</h3>\n                                <p>A sports channel showcasing the best football action from around the world</p>\n                                <span class=\"date\">10 Oct 2001</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"channels_timeline__nav\">\n                <div class=\"container\">\n                    <div class=\"owl-carousel owl-timeline-y-slider\">\n                        <div class=\"item active\">\n                            <a data-year=\"2017\" href=\"#twenty17\">2017</a>\n                        </div>\n                        <div class=\"item\">\n                            <a data-year=\"2016\" href=\"#twenty16\">2016</a>\n                        </div>\n                        <div class=\"item\">\n                            <a data-year=\"2015\" href=\"#twenty15\">2015</a>\n                        </div>\n                        <div class=\"item\">\n                            <a data-year=\"2014\" href=\"#twenty14\">2014</a>\n                        </div>\n                        <div class=\"item\">\n                            <a data-year=\"2013\" href=\"#twenty13\">2013</a>\n                        </div>\n                        <div class=\"item\">\n                            <a data-year=\"2012\" href=\"#twenty12\">2012</a>\n                        </div>\n                        <div class=\"item\">\n                            <a data-year=\"2011\" href=\"#twenty11\">2011</a>\n                        </div>\n                        <div class=\"item\">\n                            <a data-year=\"2010\" href=\"#twenty10\">2010</a>\n                        </div>\n                        <div class=\"item\">\n                            <a data-year=\"2009\" href=\"#twenty09\">2009</a>\n                        </div>\n                        <div class=\"item\">\n                            <a data-year=\"2008\" href=\"#twenty08\">2008</a>\n                        </div>\n                        <div class=\"item\">\n                            <a data-year=\"2007\" href=\"#twenty07\">2007</a>\n                        </div>\n                        <div class=\"item\">\n                            <a data-year=\"2006\" href=\"#twenty06\">2006</a>\n                        </div>\n                        <div class=\"item\">\n                            <a data-year=\"2005\" href=\"#twenty05\">2005</a>\n                        </div>\n                        <div class=\"item\">\n                            <a data-year=\"2004\" href=\"#twenty04\">2004</a>\n                        </div>\n                        <div class=\"item\">\n                            <a data-year=\"2004\" href=\"#twenty03\">2003</a>\n                        </div>\n                        <div class=\"item\">\n                            <a data-year=\"2002\" href=\"#twenty02\">2002</a>\n                        </div>\n                        <div class=\"item\">\n                            <a data-year=\"2001\" href=\"#twenty01\">2001</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/about-us-legacy/about-us-legacy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsLegacyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsLegacyComponent = (function () {
    function AboutUsLegacyComponent() {
    }
    AboutUsLegacyComponent.prototype.ngOnInit = function () {
        $(function () {
            var owl = $('.years-legacy');
            owl.owlCarousel({
                items: 6,
                loop: false,
                center: false,
                margin: 15,
                callbacks: true,
                navigation: false,
                dots: false,
                URLhashListener: true,
                startPosition: 'URLHash',
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    980: {
                        items: 3
                    },
                    1024: {
                        items: 4
                    },
                    1280: {
                        items: 4
                    },
                    1920: {
                        items: 6
                    }
                }
            });
            //calling timeline slider2
            var owl2 = $('.owl-timeline-y-slider');
            owl2.owlCarousel({
                loop: false,
                margin: 15,
                navigation: false,
                nav: false,
                dots: false,
                responsive: {
                    0: {
                        items: 3
                    },
                    600: {
                        items: 6
                    },
                    992: {
                        items: 8
                    },
                    1200: {
                        items: 12
                    }
                }
            });
            var currentElem;
            //Year tab click handler
            $(".owl-timeline-y-slider .item a").on("click", function () {
                var currentYear = $(this).data("year");
                $(".owl-timeline-y-slider .item").removeClass("active");
                $(this).parent().addClass("active");
            });
            owl.on('mousewheel', '.owl-stage', function (e) {
                if (e.deltaY > 0) {
                    owl.trigger('next.owl');
                }
                else {
                    owl.trigger('prev.owl');
                }
                e.preventDefault();
            });
            owl2.on('mousewheel', '.owl-stage', function (e) {
                if (e.deltaY > 0) {
                    owl2.trigger('next.owl');
                }
                else {
                    owl2.trigger('prev.owl');
                }
                e.preventDefault();
            });
            $('.years-legacy').on('mousewheel', '.owl-stage', function (e) {
                $('.years-legacy .owl-item.active').each(function () {
                    if ($(this).find('.item').attr("data-hash")) {
                        currentElem = $(this).find('.item').attr("data-hash");
                        return false;
                    }
                    else {
                        return true;
                    }
                });
                $(".channels_timeline__nav .owl-timeline-y-slider .item").removeClass("active");
                $(".channels_timeline__nav .owl-timeline-y-slider .item a[href='#" + currentElem + "']")
                    .parent()
                    .addClass('active');
                var currentText = $(".channels_timeline__nav .owl-timeline-y-slider .item a[href='#" + currentElem + "']").text();
                console.log("::" + currentText);
            });
            $('.years-legacy').on('changed.owl.carousel', function (e) {
                $('.years-legacy .owl-item.active').each(function () {
                    if ($(this).find('.item').attr("data-hash")) {
                        currentElem = $(this).find('.item').attr("data-hash");
                        return false;
                    }
                    else {
                        return true;
                    }
                });
                $(".channels_timeline__nav .owl-timeline-y-slider .item").removeClass("active");
                $(".channels_timeline__nav .owl-timeline-y-slider .item a[href='#" + currentElem + "']")
                    .parent()
                    .addClass('active');
                var currentText = $(".channels_timeline__nav .owl-timeline-y-slider .item a[href='#" + currentElem + "']").text();
                console.log("::" + currentText);
            });
            // the sameHeight functions makes all the selected elements of the same height
            $.fn.sameHeight = function () {
                var selector = this;
                var heights = [];
                // Save the heights of every element into an array
                selector.each(function () {
                    var height = $(this).height();
                    heights.push(height);
                });
                // Get the biggest height
                var maxHeight = Math.max.apply(null, heights);
                // Show in the console to verify
                console.log(heights, maxHeight);
                // Set the maxHeight to every selected element
                selector.each(function () {
                    $(this).height(maxHeight);
                });
            };
            $('.channels_timeline').sameHeight();
            $(window).resize(function () {
                // Do it when the window resize too
                $('.channels_timeline').sameHeight();
            });
        });
    };
    AboutUsLegacyComponent.prototype.ngAfterViewInit = function () {
    };
    AboutUsLegacyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us-legacy',
            template: __webpack_require__("../../../../../src/app/about-us-legacy/about-us-legacy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about-us-legacy/about-us-legacy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsLegacyComponent);
    return AboutUsLegacyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/about-us-partnership/about-us-partnership.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-us-partnership/about-us-partnership.component.html":
/***/ (function(module, exports) {

module.exports = "    <!--Banner Section-->\n    <section class=\"section-banner\">\n        <img src=\"assets/images/banner/desktop/banner_partners.jpg\" class=\"img-responsive\">\n        <div class=\"overlay\">\n            <div class=\"container text-center\">\n                <div class=\"slider-caption caption--blue\" data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\">\n                    <h1>The World is our family</h1>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--Content Wrapper-->\n    <section>\n        <div class=\"container\">\n            <!--Zeel Overview-->\n            <div class=\"overview\" data-aos=\"fade-up\"  data-aos-duration=\"900\">\n                <nav class=\"overview__nav tab-scroll\">\n                    <ul class=\"tab-list\">\n                        <li><a routerLink=\"/about-us\">Overview</a></li>\n                        <li><a routerLink=\"/about-us-legacy\">Legacy</a></li>\n                        <li><a routerLink=\"/about-us-leadership\">Leadership</a></li>\n                        <li class=\"active\"><a routerLink=\"/about-us-partnership\">Partnerships</a></li>\n                        <li><a routerLink=\"/about-us-csr\">CSR and Sustainability</a></li>\n                        <li><a routerLink=\"/about-us-technology\">Technology</a></li>\n                    </ul>\n                </nav>\n                <div class=\"overview__content inner-pad50\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-3 col-md-4\">\n                            <div class=\"overview__heading\">\n                                <span>Our </span> Partners\n                            </div>\n                        </div>\n                        <div class=\"col-sm-9 col-md-8\">\n                            <div class=\"overview__right__section\">\n                                <p>Creating an enduring business requires building partnerships and facilitating engagement with stakeholders, opinion makers and industry stalwarts on a regular basis. Our businesses have a long history of economic, social and intellectual investment in the places in which we live and work and the people who form part of our world. Zeel participates, supports and organises many events where likeminded people gather to share thoughts and views, and also make sense of what is happening in the world around us. All of this makes for very stimulating experiences.</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--Zee Jaipur Literature Festival-->\n    <section id=\"zeeJaipurLiterature\" class=\"section-space pt-0 text-center\">\n        <div class=\"container\">\n            <div class=\"title big\">\n                <h1>Zee Jaipur Literature <span>Festival</span></h1>\n                <p class=\"mb-30\">ZEE Jaipur Literature Festival is the World’s largest free literary event. Held in Jaipur (India), South Bank (UK) and Boulder (US) each year, the festival hosts some of the best & renowned authors, ranging from Noble Laureates & Man Booker Prize Winners to debutants.</p>\n            </div>\n        </div>\n        <div id=\"jwf-slider\" class=\"owl-carousel jwf-slider\">\n                <div class=\"item\" *ngFor=\"let item of _listOfSlider\">\n                    <img [src]=\"item.img\">\n                    <div class=\"jlf-slider--caption\" data-aos=\"fade-up\">\n                        <div class=\"jlf-image-cation\">\n                            <img [src]=\"item.logo\" class=\"img-responsive\">\n                        </div>\n                        <div class=\"jlf-text-caption\">\n                            <p>\n                                {{item.info}}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        <a href=\"javascript:void(0);\" class=\"cta-link text-uppercase mt-30\">View Website<span></span></a>\n    </section>\n    <!--Zee Melt Festival-->\n    <section id=\"zeeMeltFestival\" class=\"section-space gray-bg pt-0\">\n        <div class=\"container\">\n            <div class=\"title big text-center\">\n                <h1>Zee Melt <span>Festival</span></h1>\n                <p class=\"mb-30\">ZEE MELT is a festival of creativity and innovations in marketing and communications. It caters to audiences in marketing, advertising, media & PR, emerging technology and mobility. </p>\n            </div>\n            <div class=\"row\">\n                <!--#ZEEMelt 2016-->\n                <div class=\"col-sm-6 col-md-6\" data-aos=\"fade-up\">\n                    <aside>\n                        <h2>#ZEEMelt 2016</h2>\n                        <p>ZEE MELT is a festival of creativity and innovations in marketing and communications. It caters to audiences in marketing, advertising, media & PR, emerging technology and mobility. Over two days of content the programme that consists of events run parallel to each other. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>\n                        <a href=\"javascript:void(0);\" class=\"cta-link text-uppercase mb-20\">View Website<span></span></a>\n                    </aside>\n                </div>\n                <!--Image-->\n                <div class=\"col-sm-6 col-md-6\" data-aos=\"fade-up\" data-aos-duration=\"1000\">\n                    <img src=\"assets/images/overview/melt_festival.jpg\" class=\"img-responsive\" alt=\"Zee Melt Festival\">\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--Zee Mindspace Conference-->\n    <section id=\"ZeeMindspaceConference\" class=\"section-space pt-0\">\n        <div class=\"container\">\n            <div class=\"title big text-center\">\n                <h1>Zee Mindspace <span>Conference</span></h1>\n                <p class=\"mb-30\">ZEE Mindspace Conference aims at bringing the marketing fraternity together to connect, discuss and explore new possibilities. The sessions under ZEE Mindspace Conference comprised of two main themes- Previewing Tomorrow & Open Possibilities.</p>\n            </div>\n            <div class=\"row\">\n                <!--Image-->\n                <div class=\"col-sm-6 col-md-6\" data-aos=\"fade-up\" data-aos-duration=\"1000\">\n                    <img src=\"assets/images/overview/mindspace.jpg\" class=\"img-responsive\" alt=\"Zee Mindspace Conference\">\n                </div>\n                <!--#ZEEMelt 2016-->\n                <div class=\"col-sm-6 col-md-6\" data-aos=\"fade-up\">\n                    <aside>\n                        <h2>ZEE Mindspace Award 2016</h2>\n                        <p>The ﬁrst edition of ‘ZEE Mindspace Awards’ was launched this year. It aims at recognising brands, which have captured maximum‘MindSpace’. We partnered with renowned market research company Nielsen, to execute a nationwide research to identify brands which have created maximum impact on the minds of the consumers. While ‘Top of the Mind Recall’ was the primary criteria to arrive at the winning brands, factors like Popularity, Advocacy, Desire and Buzz were also a part of the structured research methodology. Nielsen targeted a sample size of 12000+ audiences, covering key zones across the country. The winning brands were awarded at the ZEE Mindspace Awards 2016 in the presence of 500+ CMOs and stalwarts from the marketing and advertising industry</p>\n                        <a href=\"javascript:void(0);\" class=\"cta-link text-uppercase\">View Website<span></span></a>\n                    </aside>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--ZEE Kyoorius Designyatra-->\n    <section id=\"ZeeKyooriusDesignyatra\" class=\"leading-people section-space purple-section pt-0\">\n        <div class=\"container\">\n            <div class=\"title big text-center color-reverse\">\n                <h1>ZEE Kyoorius <span>Designyatra</span></h1>\n            </div>\n            <div class=\"row\">\n                <!--Great Place to work-->\n                <div class=\"col-sm-5\">\n                    <aside>\n                        <h2>Platform for Creativity</h2>\n                        <p>Designyatra is an annual festival of creativity, hosting some of the most famous creative thinkers of the world and a large population of design professionals and students from India. The festival celebrates all aspects of creative communication and marketing. This year the convergence between digital and physical was explored reinforcing the phenomenon that life today cannot be classiﬁed as analog or digital, because it is virtually impossible to distinguish the two. Individuals experience everything together and therefore, the erstwhile boundaries have disappeared. The three day design festival saw many interesting side tracks, besides celebrating creativity and design.</p>\n                        <a href=\"javascript:void(0);\" class=\"cta-link text-uppercase color-white\">View Website<span></span></a>\n                    </aside>\n                </div>\n                <!--Image Gallery one day @ zee-->\n                <div class=\"col-sm-7\">\n                    <div class=\"one-day-img-gallery\">\n                        <div class=\"img-caption img-scale img-one\" data-aos=\"fade-down\" data-aos-offset=\"250\">\n                            <a href=\"https://www.youtube.com/watch?v=XpGnPiNXgpA\" class=\"magnific-youtube\">\n                                <img src=\"assets/images/overview/kyoorius_design_awards-2.jpg\" class=\"img-responsive\" alt=\"Design Award\">\n                                <span class=\"play-link\"><i class=\"icon64 icon-play\"></i> Kyoorious Designyatra</span>\n                            </a>\n                        </div>\n                        <div class=\"img-caption img-scale img-two\" data-aos=\"fade-right\" data-aos-offset=\"200\">\n                            <img src=\"assets/images/overview/kyoorius_design_awards.jpg\" class=\"img-responsive\" alt=\"Design Award\">\n                            <span class=\"play-link\">Thalassaemia V2</span>\n                        </div>\n                        <div class=\"img-caption img-scale img-three\" data-aos=\"fade-up\" data-aos-offset=\"200\">\n                            <img src=\"assets/images/overview/kyoorius_design_awards-1.jpg\" class=\"img-responsive\" alt=\"Design Award\">\n                            <span class=\"play-link\">Thalassaemia V3</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--Army Behind The Army-->\n    <section id=\"armyBehindTheArmy\" class=\"section-space pt-0\">\n        <div class=\"container\">\n            <div class=\"title big text-center\">\n                <h1>Army Behind <span>The Army</span></h1>\n                <p class=\"mb-30\">ZEE Mindspace Conference aims at bringing the marketing fraternity together to connect, discuss and explore new possibilities. The sessions under ZEE Mindspace Conference comprised of two main themes- Previewing Tomorrow & Open Possibilities.</p>\n            </div>\n            <div class=\"row\">\n                <!--Image-->\n                <div class=\"col-sm-6 col-md-8\" data-aos=\"fade-up\" data-aos-duration=\"1000\">\n                    <div class=\"img-caption img-scale\">\n                        <a href=\"https://www.youtube.com/watch?v=F4BsMfFArEw\" class=\"magnific-youtube\">\n                            <img src=\"assets/images/overview/army.jpg\" class=\"img-responsive\" alt=\"Creating a Change\">\n                            <span class=\"play-link\"><i class=\"icon64 icon-play\"></i> Creating a Change</span>\n                        </a>\n                    </div>\n                </div>\n                <!--#ZEEMelt 2016-->\n                <div class=\"col-sm-6 col-md-4\" data-aos=\"fade-up\">\n                    <aside>\n                        <h2>ZEEL aims to honour this ‘Real Army’ of women behind our soldiers</h2>\n                        <p>An initiative by ZEEL to recognize and applaud the mothers, wives, daughters and sisters of our brave soldiers whose support, dedication and perseverance gives the brave men, the courage and strength to ﬁght fearlessly for the nation. ZEEL aims to honour this ‘Real Army’ of women behind our soldiers, by garnering respect and recognition for them at a national level.</p>\n                    </aside>\n                </div>\n            </div>\n        </div>\n    </section>\n"

/***/ }),

/***/ "../../../../../src/app/about-us-partnership/about-us-partnership.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPartnershipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutUsPartnershipComponent = (function () {
    function AboutUsPartnershipComponent(http) {
        this.http = http;
        this._url = "../../api/partnership.json";
    }
    AboutUsPartnershipComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Calling API
        this.http.get(this._url).subscribe(function (data) {
            _this._listOfSlider = data;
        });
        setTimeout(function () {
            // About-us partners
            $('#jwf-slider').owlCarousel({
                navigation: true,
                navText: ["<i class='icon64 icon-nav-left'></i>", "<i class='icon64 icon-nav-right'></i>"],
                stagePadding: 40,
                loop: true,
                margin: 10,
                nav: true,
                autoplay: true,
                autoplaySpeed: 1000,
                autoplayHoverPause: true,
                navSpeed: 1000,
                items: 1,
                lazyLoad: true,
                responsive: {
                    320: {
                        items: 1,
                        stagePadding: 10
                    },
                    667: {
                        items: 1,
                        stagePadding: 60
                    },
                    668: {
                        items: 1,
                        stagePadding: 60
                    },
                    1024: {
                        items: 1,
                        stagePadding: 100
                    },
                    1366: {
                        items: 1,
                        stagePadding: 200
                    },
                    1800: {
                        items: 1,
                        stagePadding: 400
                    }
                }
            });
        }, 1000);
    };
    AboutUsPartnershipComponent.prototype.ngAfterViewInit = function () {
    };
    AboutUsPartnershipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us-partnership',
            template: __webpack_require__("../../../../../src/app/about-us-partnership/about-us-partnership.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about-us-partnership/about-us-partnership.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AboutUsPartnershipComponent);
    return AboutUsPartnershipComponent;
}());



/***/ }),

/***/ "../../../../../src/app/about-us-technology/about-us-technology.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-us-technology/about-us-technology.component.html":
/***/ (function(module, exports) {

module.exports = "    <!--Banner Section-->\n    <section class=\"section-banner\">\n        <img src=\"assets/images/banner/desktop/technology_banner.jpg\" class=\"img-responsive\">\n        <div class=\"overlay\">\n            <div class=\"container text-center\">\n                <div class=\"slider-caption caption--blue\" data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\">\n                    <h1>Neque porro quisquam est qui</h1>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--Content Wrapper-->\n    <section>\n        <div class=\"container\">\n            <!-- Broadcast Operations -->\n            <div class=\"overview\" data-aos=\"fade-up\"  data-aos-duration=\"900\">\n                <nav class=\"overview__nav tab-scroll\">\n                <ul class=\"tab-list\">\n                    <li><a routerLink=\"/about-us\">Overview</a></li>\n                    <li><a routerLink=\"/about-us-legacy\">Legacy</a></li>\n                    <li><a routerLink=\"/about-us-leadership\">Leadership</a></li>\n                    <li><a routerLink=\"/about-us-partnership\">Partnerships</a></li>\n                    <li><a routerLink=\"/about-us-csr\">CSR and Sustainability</a></li>\n                    <li class=\"active\"><a routerLink=\"/about-us-technology\">Technology</a></li>\n                </ul>\n                </nav>\n                <div class=\"overview__content inner-pad50\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-3 col-md-4\">\n                            <div class=\"overview__heading\">\n                                <span>A Media Motion</span> Enterprise\n                            </div>\n                        </div>\n                        <div class=\"col-sm-9 col-md-8\">\n                            <div class=\"overview__right__section\">\n                                <p>Zee Network transmission facilities are based at its Primary Playout and distribution hub located at Noida, which forms an integrated part of one of the most advanced media motion architectures in television industry. </p>\n                                <p>The Noida transmission facility for the Zee Network became operational in March 2002 with a Single dedicated 9.3m antenna operating on the AsiaSat 3-S satellite with only one operational Channel, Zee News.</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n   <!--  Digital asset management (DAM) -->\n    <section class=\"section-space\">\n        <div class=\"container\">\n            <div class=\"title big text-center color-revers\">\n                <h1>Broadcast <span>Operations</span></h1>\n            </div>\n            <div class=\"row\">\n                <!--We are where you want to be-->\n                <div class=\"col-sm-6 col-sm-push-6\" data-aos=\"fade-up\">\n                    <aside>\n                        <h2>Lorem ipsum dolor sit amet</h2>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n                    </aside>\n                </div>\n                <div class=\"col-sm-6 col-sm-pull-6\"  data-aos=\"fade-up\" data-aos-duration=\"1000\">\n                    <img src=\"assets/images/overview/broadcast_operations.jpg\" class=\"img-responsive\" alt=\"Creating a Change\">\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Disaster Recovery Centres-->\n    <section class=\"leading-people section-space purple-section pt-0\">\n        <div class=\"container\">\n            <div class=\"title big text-center color-reverse\">\n                <h1>Digital asset <span>management (DAM)</span></h1>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-6 col-md-6\"  data-aos=\"fade-up\">\n                    <aside>\n                        <h2>Lorem ipsum dolor sit amet</h2>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n                    </aside>\n                </div>\n                <div class=\"col-sm-6 col-md-6\"  data-aos=\"fade-up\" data-aos-duration=\"1000\">\n                    <img src=\"assets/images/overview/digital_asset_management.jpg\" class=\"img-responsive\" alt=\"Committed to Sustainability\">\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Creating a Change-->\n    <section class=\"section-space\">\n        <div class=\"container\">\n            <div class=\"title big text-center\">\n                <h1>Broadcast <span>Operations</span></h1>\n            </div>\n            <div class=\"row\">\n                <!--We are where you want to be-->\n                <div class=\"col-sm-6 col-sm-push-6\" data-aos=\"fade-up\">\n                    <aside>\n                        <h2>Lorem ipsum dolor sit amet</h2>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n                    </aside>\n                </div>\n                <div class=\"col-sm-6 col-sm-pull-6\"  data-aos=\"fade-up\" data-aos-duration=\"1000\">\n                    <img src=\"assets/images/overview/disaster_recovery_centres.jpg\" class=\"img-responsive\" alt=\"Creating a Change\">\n                </div>\n            </div>\n        </div>\n    </section>\n"

/***/ }),

/***/ "../../../../../src/app/about-us-technology/about-us-technology.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsTechnologyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsTechnologyComponent = (function () {
    function AboutUsTechnologyComponent() {
    }
    AboutUsTechnologyComponent.prototype.ngOnInit = function () {
    };
    AboutUsTechnologyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us-technology',
            template: __webpack_require__("../../../../../src/app/about-us-technology/about-us-technology.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about-us-technology/about-us-technology.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsTechnologyComponent);
    return AboutUsTechnologyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "   <!--Banner Section-->\n    <section class=\"section-banner\">\n        <img src=\"assets/images/banner/desktop/banner_overview.jpg\" class=\"img-responsive\">\n        <div class=\"overlay\">\n            <div class=\"container text-center\">\n                <div class=\"slider-caption caption--blue\" data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\">\n                    <h1>The World is our family</h1>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--Content Wrapper-->\n    <section>\n        <div class=\"container\">\n            <!--Zeel Overview-->\n            <div class=\"overview\" data-aos=\"fade-up\"  data-aos-duration=\"900\">\n                <nav class=\"overview__nav tab-scroll\">\n                    <ul class=\"tab-list\">\n                        <li class=\"active\"><a routerLink=\"/about-us\">Overview</a></li>\n                        <li><a routerLink=\"/about-us-legacy\">Legacy</a></li>\n                        <li><a routerLink=\"/about-us-leadership\">Leadership</a></li>\n                        <li><a routerLink=\"/about-us-partnership\">Partnerships</a></li>\n                        <li><a routerLink=\"/about-us-csr\">CSR and Sustainability</a></li>\n                        <li><a routerLink=\"/about-us-technology\">Technology</a></li>\n                    </ul>\n                </nav>\n                <div class=\"overview__content inner-pad50\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-3 col-md-4\">\n                            <div class=\"overview__heading\">\n                                <span>ZEEL</span> Overview\n                            </div>\n                        </div>\n                        <div class=\"col-sm-9 col-md-8\">\n                            <div class=\"overview__right__section\">\n                                <p>Zee Entertainment Enterprises Ltd. (ZEEL) is a worldwide media brand offering entertainment content to diverse audiences. With a presence in over 172 countries and a reach of more than a billion people around the globe, ZEEl is among the largest global content company across geners, languages and platforms.</p>\n                                <div class=\"row work-stat\">\n                                    <div class=\"col-sm-4\">\n                                        <h2>16%</h2>\n                                        <p>Network Share</p>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <h2>64,342<small>MN</small></h2>\n                                        <p>Revenue</p>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <h2>29.9%</h2>\n                                        <p>Ebitda Margin</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--The Iconic Brand Zee-->\n            <div id=\"zeeBrand\" class=\"ZEE__brand inner-pad50\" data-aos=\"fade-up\">\n                <div class=\"row\">\n                    <div class=\"col-sm-8 col-md-5\">\n                        <aside class=\"mb-0\">\n                            <div class=\"title text-left\">\n                                <h1>The iconic <span>BRAND ZEE</span></h1>\n                            </div>\n                            <p>Launched in 1992, Brand ZEE has earned a global recognition in its reign over the M & E industry for the past 25 years.</p>\n                            <a href=\"brand-zee.html\" class=\"cta-link text-uppercase\">Know More<span></span></a>\n                        </aside>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--We are Pioneers-->\n    <section class=\"section-space pt-0\" data-aos=\"fade-up\">\n        <div class=\"container-fluid\">\n            <div class=\"title big text-center\">\n                <h1>We are <span>Pioneers</span></h1>\n            </div>\n        </div>\n        <div class=\"slide-progress\"></div>\n        <div id=\"we--pioneers\" class=\"owl-carousel jwf-slider we--pioneers\">\n            <!--slide1-->\n            <div class=\"item\">\n                <img src=\"assets/images/overview/pioneer-slide1.jpg\">\n                <div class=\"pioneers-caption\">\n                    <h2>1992</h2>\n                    <p class=\"pioneers-text\"><span class=\"first-child\">First</span> listed media company in India <span class=\"last-child\">ZEE</span></p>\n                </div>\n            </div>\n            <!--Slide2-->\n            <div class=\"item\">\n                <img src=\"assets/images/overview/pioneer-slide1.jpg\">\n                <div class=\"pioneers-caption\">\n                    <h2>1993</h2>\n                    <p class=\"pioneers-text\"><span class=\"first-child\">First</span> to launch a Hindi General Entertainment Channel in India <span class=\"last-child\">Zee TV</span></p>\n                </div>\n            </div>\n            <!--Slide3-->\n            <div class=\"item\">\n                <img src=\"assets/images/overview/pioneer-slide1.jpg\">\n                <div class=\"pioneers-caption\">\n                    <h2>1995</h2>\n                    <p class=\"pioneers-text\"><span class=\"first-child\">First</span> to launch a Hindi Cinema Channel in India <span class=\"last-child\">Zee Cinema</span></p>\n                </div>\n            </div>\n            <!--Slide4-->\n            <div class=\"item\">\n                <img src=\"assets/images/overview/pioneer-slide1.jpg\">\n                <div class=\"pioneers-caption\">\n                    <h2>1997</h2>\n                    <p class=\"pioneers-text\"><span class=\"first-child\">First</span> to corporatise Hindi film industry with the costliest production <span class=\"last-child\">Gadar Ek Prem Katha</span></p>\n                </div>\n            </div>\n            <!--Slide5-->\n            <div class=\"item\">\n                <img src=\"assets/images/overview/pioneer-slide1.jpg\">\n                <div class=\"pioneers-caption\">\n                    <h2>2000</h2>\n                    <p class=\"pioneers-text\"><span class=\"first-child\">First</span> to launch a 24 hour Hindi News Channel in India <span class=\"last-child\">Zee News</span></p>\n                </div>\n            </div>\n            <!--Slide6-->\n            <div class=\"item\">\n                <img src=\"assets/images/overview/pioneer-slide1.jpg\">\n                <div class=\"pioneers-caption\">\n                    <h2>2005</h2>\n                    <p class=\"pioneers-text\"><span class=\"first-child\">First</span> to set up MSO operations at a national level <span class=\"last-child\">Siticable</span></p>\n                </div>\n            </div>\n            <!--Slide7-->\n            <div class=\"item\">\n                <img src=\"assets/images/overview/pioneer-slide1.jpg\">\n                <div class=\"pioneers-caption\">\n                    <h2>2010</h2>\n                    <p class=\"pioneers-text\"><span class=\"first-child\">First</span> to launch a 24 hour Food Channel in India <span class=\"last-child\">Zee Khana Khazana</span></p>\n                </div>\n            </div>\n            <!--Slide8-->\n            <div class=\"item\">\n                <img src=\"assets/images/overview/pioneer-slide1.jpg\">\n                <div class=\"pioneers-caption\">\n                    <h2>2015</h2>\n                    <p class=\"pioneers-text\"><span class=\"first-child\">First</span> to launch India's Urdu infotainment channel <span class=\"last-child\">Zee Salaam</span></p>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--We are where you want to be-->\n    <section class=\"section-space parallax-window\" data-parallax=\"scroll\" data-image-src=\"assets/images/overview/we_are_where.jpg\">\n        <div class=\"container\">\n            <div class=\"row we-are-where\">\n                <!--We are where you want to be-->\n                <div class=\"col-sm-12 col-md-6 col-lg-4 we-are-where\" data-aos=\"fade-up\">\n                    <div class=\"display-table\">\n                        <div class=\"display-table-cell\">\n                            <div class=\"title color-reverse\">\n                                <h3>We are where <span>you want to be</span></h3>\n                            </div>\n                            <p class=\"color-white\">At ZEEL, we have aligned our offerings for anytime-anywhere viewing by building our content capabilities across digital, movies, music, and live entertainment. Be it binge watching a favourite show, enjoying a surreal personal music experience, or indulging in a mesmerising theatre performance, ZEEL is providing content where audiences want it to be.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <section class=\"section-space pt-0\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"title big text-center\">\n                    <h1>Taking India to <span>the World</span></h1>\n                </div>\n                <!--Image section-->\n                <div class=\"col-sm-12 col-md-8\" data-aos=\"fade-up\" data-aos-duration=\"1000\">\n                    <div class=\"img-caption img-scale\">\n                        <a href=\"https://www.youtube.com/watch?v=F4BsMfFArEw\" class=\"magnific-youtube\">\n                            <img src=\"assets/images/overview/taking_India_to_the_world.jpg\" class=\"img-responsive\" alt=\"Thalassaemia V2\">\n                            <span class=\"play-link\"><i class=\"icon64 icon-play\"></i> Thalassaemia V2</span>\n                        </a>\n                    </div>\n                </div>\n                <!--Description Section-->\n                <div class=\"col-sm-12 col-md-4\" data-aos=\"fade-up\">\n                    <aside>\n                        <h2>ZEEL embraces the concept of ‘Vasudhaiva Kutumbakam– The World is My Family’ </h2>\n                        <p>ZEEL is present across broadcasting, movies, music, live entertainment and digital businesses, both within India and overseas. It has also produced several movies for theatrical release and is the fastest growing music label in India. It has presence in digital and, live events space. ZEEL is listed on the BSE and NSE and employs more than 3,000 people.</p>\n                    </aside>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--Leading People-->\n    <section id=\"missionAndValues\" class=\"leading-people purple-section\">\n        <div class=\"container\">\n            <div class=\"title big text-center color-reverse\">\n                <h1>Mission and <span>VALUES</span></h1>\n            </div>\n            <div class=\"display-table\">\n                <!--Drop cap section-->\n                <div class=\"display-table-cell col-6\" data-aos=\"fade-up\">\n                    <div class=\"drop-cap\">\n                        <p class=\"color-white\">\n                            <span class=\"first-letter\">To</span> become the world’s leading global content company from the emerging markets. As a Corporation, we will be driven by content leadership based on innovation and creativity. Our focus will be on growth while delivering exceptional value to our customers, viewers and stakeholders.\n                        </p>\n                    </div>\n                </div>\n                <!--Circle List-->\n                <div class=\"display-table-cell col-6\" data-aos=\"fade-up\" data-aos-duration=\"1000\">\n                    <ul class=\"circle-list\">\n                        <!--List Item-->\n                        <!-- Calling JSON Api -->\n                        <li *ngFor=\"let in of missionInfo\">\n                            <h2>{{in.mission}}</h2>\n                            <p>{{in.content}}</p>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--Awards and accolades-->\n    <section class=\"section-space pt-0\">\n        <div class=\"container\">\n            <div id=\"awardsAccolades\" class=\"row\">\n                <div class=\"title big text-center\">\n                    <h1>Awards and <span>accolades</span></h1>\n                </div>\n                <!--Accolades Card section-->\n                <div class=\"col-sm-4 col-md-4\" data-aos=\"fade-up\" data-aos-duration=\"1000\">\n                    <div class=\"accolades\">\n                        <div class=\"accolades__img\">\n                            <img src=\"assets/images/overview/accolades1.jpg\" alt=\"Accolades image 1\" class=\"img-responsive\">\n                        </div>\n                        <div class=\"accolades__dec\">\n                            <h3>India's Best Companies to Work For - 2017</h3>\n                            <p>Study conducted by Great Place to Work® Institute and The Economic Times</p>\n                        </div>\n                    </div>\n                </div>\n                <!--Accolades Card section-->\n                <div class=\"col-sm-4 col-md-4\" data-aos=\"fade-up\" data-aos-duration=\"1150\">\n                    <div class=\"accolades\">\n                        <div class=\"accolades__img\">\n                            <img src=\"assets/images/overview/accolades2.jpg\" alt=\"Accolades image 1\" class=\"img-responsive\">\n                        </div>\n                        <div class=\"accolades__dec\">\n                            <h3>MIPTV's Top Television Honor – 'Médaille d'Honneur'</h3>\n                            <p>ZEEL's Leaders, Punit Goenka and Amit Goenka received the award for their exceptional contribution to the international television business</p>\n                        </div>\n                    </div>\n                </div>\n                <!--Accolades Card section-->\n                <div class=\"col-sm-4 col-md-4\" data-aos=\"fade-up\">\n                    <div class=\"accolades\">\n                        <div class=\"accolades__img\">\n                            <img src=\"assets/images/overview/accolades3.jpg\" alt=\"Accolades image 1\" class=\"img-responsive\">\n                        </div>\n                        <div class=\"accolades__dec\">\n                            <h3>Best CEO Award in in the Media and Entertainment category </h3>\n                            <p>To ZEEL's MD & CEO, Punit Goenka Conducted by Business Today</p>\n                        </div>\n                    </div>\n                </div>\n                <!--view all-->\n                <div class=\"col-sm-12 text-center mt-20\">\n                    <a href=\"awards-accolades.html\" class=\"cta-link text-uppercase\">View all<span></span></a>\n                </div>\n            </div>\n        </div>\n    </section>\n    <section class=\"section-space pt-0 gray-bg\">\n        <div class=\"container\">\n        <!--The Iconic Brand Zee-->\n        <div class=\"essel-group\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-6\" data-aos=\"fade-up\">\n                    <aside class=\"mb-0\">\n                        <div class=\"title text-left\">\n                            <h1>About <span>Essel Group</span></h1>\n                        </div>\n                        <p>Essel Group is among India's most prominent business houses with a diverse portfolio of assets in media, packaging, entertainment, technology-enabled services, infrastructure development and education. The Group started business in 1926 with a commodity trading and export firm, Rama Associates Limited, and has since then metamorphosed into a conglomerate that is a symbol of the ingenuity and power of Indian entrepreneurship, with worldwide operations and a workforce of nearly 10,000 dedicated employees.</p>\n                    </aside>\n                </div>\n                <div class=\"col-sm-12 col-md-6\" data-aos=\"fade-up\" data-aos-duration=\"1000\">\n                    <img src=\"assets/images/overview/about_essel_group.jpg\" alt=\"about essel group\" width=\"100%\" class=\"img-responsive\">\n                </div>\n            </div>\n        </div>\n        </div>\n    </section>\n    <!--Section Contact us map-->\n    <section class=\"section-space pt-0\">\n        <div class=\"container\">\n            <div class=\"title big text-center\">\n                <h1>Our <span>Locations</span></h1>\n            </div>\n            <div class=\"row no-gutter\">\n                <!--Map Container-->\n                <div class=\"col-sm-12 pos-relative\">\n                    <div id=\"map\" class=\"googleMap\">\n                        <!--<iframe src=\"https://developers.google.com/maps/documentation/javascript/examples/full/style-array\" height=\"500px\" width=\"100%\" allowfullscreen=\"\"></iframe>-->\n                    </div>\n                    <div class=\"our-location light-pink-bg\">\n                        <h2>Corporate Office:</h2>\n                        <ul>\n                            <li>\n                                <a href=\"javascript:void(0);\" data-lat=\"18.9947446\" data-long=\"72.8308512\" data-title=\"Mumbai (India)\">Mumbai (India)</a>\n                                <div class=\"address-details\">\n                                    <h3>Mumbai (India)</h3>\n                                    <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                    <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                    <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                                </div>\n                            </li>\n                        </ul>\n                        <h2>Regional Offices:</h2>\n                        <ul>\n                            <li>\n                                <a href=\"javascript:void(0);\"  data-lat=\"37.9758438\" data-long=\"23.7454209\" data-title=\"Delhi\">Delhi</a>\n                                <div class=\"address-details\">\n                                    <h3>New Delhi</h3>\n                                    <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                    <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                    <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                                </div>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" data-title=\"Kolkata\">Kolkata</a>\n                                <div class=\"address-details\">\n                                    <h3>Kolkata (west bengal)</h3>\n                                    <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                    <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                    <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                                </div>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" data-title=\"Hyderabad\">Hyderabad</a>\n                                <div class=\"address-details\">\n                                    <h3>Hyderabad</h3>\n                                    <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                    <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                    <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                                </div>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" data-title=\"Pune\">Pune</a>\n                                <div class=\"address-details\">\n                                    <h3>Pune</h3>\n                                    <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                    <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                    <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                                </div>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" data-title=\"Chennai\">Chennai</a>\n                                <div class=\"address-details\">\n                                    <h3>Chennai</h3>\n                                    <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                    <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                    <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                                </div>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" data-title=\"Bangalore\">Bangalore</a>\n                                <div class=\"address-details\">\n                                    <h3>Bangalore</h3>\n                                    <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                    <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                    <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                                </div>\n                            </li>\n                        </ul>\n                        <h2>International Offices:</h2>\n                        <ul>\n                            <li>\n                                <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" class=\"\">NYC (United States of America)</a>\n                                <div class=\"address-details\">\n                                    <h3>NYC (United States of America)</h3>\n                                    <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                    <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                    <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                                </div>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" class=\"\">London (United Kingdom)</a>\n                                <div class=\"address-details\">\n                                    <h3>London (United Kingdom)</h3>\n                                    <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                    <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                    <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                                </div>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" class=\"\">London (United Kingdom)</a>\n                                <div class=\"address-details\">\n                                    <h3>London (United Kingdom)</h3>\n                                    <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                    <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                    <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                                </div>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" class=\"\">London (United Kingdom)</a>\n                                <div class=\"address-details\">\n                                    <h3>London (United Kingdom)</h3>\n                                    <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                    <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                    <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                                </div>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" data-title=\"NYC (United States of America)\">NYC (United States of America)</a>\n                                <div class=\"address-details\">\n                                    <h3>NYC (United States of America)</h3>\n                                    <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                    <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                    <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                                </div>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" class=\"\">London (United Kingdom)</a>\n                                <div class=\"address-details\">\n                                    <h3>London (United Kingdom)</h3>\n                                    <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                    <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                    <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                                </div>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" class=\"\">London (United Kingdom)</a>\n                                <div class=\"address-details\">\n                                    <h3>London (United Kingdom)</h3>\n                                    <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                    <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                    <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                                </div>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" class=\"\">London (United Kingdom)</a>\n                                <div class=\"address-details\">\n                                    <h3>London (United Kingdom)</h3>\n                                    <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                    <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                    <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n"

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutUsComponent = (function () {
    function AboutUsComponent(http) {
        this.http = http;
        this._url = "../../api/mission.json";
    }
    AboutUsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Calling API
        this.http.get(this._url).subscribe(function (data) { return _this.missionInfo = data; });
        //Overview about us
        function initSlider() {
            $('#we--pioneers').owlCarousel({
                navigation: true,
                navText: ["<i class='icon64 icon-nav-left'></i>", "<i class='icon64 icon-nav-right'></i>"],
                stagePadding: 40,
                loop: true,
                margin: 10,
                nav: true,
                items: 1,
                autoplay: true,
                autoplaySpeed: 1000,
                //autoplayHoverPause:true,
                navSpeed: 1000,
                lazyLoad: true,
                onInitialized: startProgressBar,
                onTranslate: resetProgressBar,
                onTranslated: startProgressBar,
                responsive: {
                    320: {
                        items: 1,
                        stagePadding: 10
                    },
                    667: {
                        items: 1,
                        stagePadding: 60
                    },
                    668: {
                        items: 1,
                        stagePadding: 60
                    },
                    1024: {
                        items: 1,
                        stagePadding: 100
                    },
                    1366: {
                        items: 1,
                        stagePadding: 200
                    },
                    1800: {
                        items: 1,
                        stagePadding: 400
                    }
                }
            });
        }
        //progress bar
        function startProgressBar() {
            // apply keyframe animation
            var progressWidth = $('.owl-item.active').width();
            $('.slide-progress').css({
                'width': progressWidth,
                'transition': 'width 5000ms',
                'margin': '0 auto'
            });
        }
        function resetProgressBar() {
            $('.slide-progress').css({
                'width': 0,
                'transition': 'width 0s'
            });
        }
        initSlider();
        //parallax Scroll
        $('.parallax-window').parallax();
    };
    AboutUsComponent.prototype.ngAfterViewInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__("../../../../../src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header>\n    <!-- Grid demo navbar -->\n    <nav class=\"navbar mega-menu\">\n        <div class=\"container\">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle x collapsed\" data-toggle=\"collapse\" data-target=\"#mega-menu\" aria-expanded=\"false\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" routerLink=\"/home\"><img src=\"assets/images/zee_logo.png\"></a>\n            </div>\n            <form class=\"nav-search-right navbar-right visible-xs visible-sm\">\n                <input type=\"text\" class=\"nav-search\" placeholder=\"\">\n                <i class=\"icon24 close-search\"></i>\n            </form>\n            <!-- Collect the nav links, forms, and other content for toggling -->\n            <div class=\"collapse navbar-collapse\" id=\"mega-menu\">\n                <ul class=\"nav navbar-nav navbar-left\">\n                    <!-- About -->\n                    <li class=\"dropdown mega-menu-fw\"><a href=\"javascript:void(0);\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">About Us</a>\n                        <ul class=\"dropdown-menu\">\n                            <li class=\"grid-demo container\">\n                                <div class=\"row\">\n                                    <!--Menu column-->\n                                    <div class=\"col-sm-6 col-md-3\">\n                                        <!--primary menu-->\n                                        <h1 class=\"menu-primary\"><a routerLink=\"/about-us\">Overview</a></h1>\n                                        <ul class=\"menu-secondary\">\n                                            <li><a href=\"brand-zee.html\">Brand Zee</a></li>\n                                            <li><a href=\"about-us.html#missionAndValues\">Mission and Values</a></li>\n                                            <li><a href=\"awards-accolades.html\">Awards and Accolades</a></li>\n                                            <li><a href=\"contact-us.html\">Contact Us</a></li>\n                                        </ul>\n                                        <!--Primary Menu-->\n                                        <h1 class=\"menu-primary\"><a routerLink=\"/about-us-legacy\">Legacy</a></h1>\n\n                                        <!--Primary Menu-->\n                                        <h1 class=\"menu-primary\"><a routerLink=\"/about-us-leadership\">Leadership Team</a></h1>\n                                        <ul class=\"menu-secondary\">\n                                            <li><a href=\"about-us-leadership.html#boardOfDirectors\">Board of Directors</a></li>\n                                            <li><a href=\"about-us-leadership.html#seniorManagement\">Senior Management</a></li>\n                                        </ul>\n                                    </div>\n\n                                    <!--Menu column-->\n                                    <div class=\"col-sm-6 col-md-3\">\n                                        <!--primary menu-->\n                                        <h1 class=\"menu-primary\"><a routerLink=\"/about-us-partnership\">Partnerships</a></h1>\n                                        <ul class=\"menu-secondary\">\n                                            <li><a href=\"about-us-partnership.html#zeeJaipurLiterature\">Jaipur Literature Fest</a></li>\n                                            <li><a href=\"about-us-partnership.html#zeeMeltFestival\">Zee Melt Festival</a></li>\n                                            <li><a href=\"about-us-partnership.html#ZeeMindspaceConference\">Zee Mindspace Conference</a></li>\n                                            <li><a href=\"about-us-partnership.html#ZeeKyooriusDesignyatra\">Zee Kyoorius Designyatra</a></li>\n                                            <li><a href=\"about-us-partnership.html#armyBehindTheArmy\">Army behind The Army</a></li>\n                                        </ul>\n\n                                        <!--Primary Menu-->\n                                        <h1 class=\"menu-primary\"><a routerLink=\"/about-us-csr\">CSR and Sustainability</a></h1>\n                                        <ul class=\"menu-secondary\">\n                                            <li><a href=\"zee-care.html\">Zee Care</a></li>\n                                            <li><a href=\"zee-is-green.html\">Zee is Green</a></li>\n                                        </ul>\n\n                                        <!--Primary Menu-->\n                                        <h1 class=\"menu-primary\"><a routerLink=\"/about-us-technology\">Technology</a></h1>\n                                    </div>\n\n                                    <!--Menu column-->\n                                    <div class=\"col-sm-6 col-md-3\">\n                                        <div class=\"menu-img\">\n                                            <img src=\"assets/images/nav-thumbnails/nav_thumbnail_1.jpg\" alt=\"\" class=\"img-responsive\">\n                                            <div class=\"menu-text-caption\">\n                                                <h2>Be a part of new ZEE</h2>\n                                                <a href=\"javascript:void(0);\">Know More</a>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <!--Menu column-->\n                                    <div class=\"col-sm-6 col-md-3\">\n                                        <div class=\"menu-img\">\n                                            <img src=\"assets/images/nav-thumbnails/nav_thumbnail_2.jpg\" alt=\"\" class=\"img-responsive\">\n                                            <div class=\"menu-text-caption\">\n                                                <h2>Get High on Literature</h2>\n                                                <a href=\"javascript:void(0);\">Register now</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                        </ul>\n                    </li>\n                    <!--Businesses-->\n                    <li class=\"dropdown mega-menu-fw\"><a href=\"javascript:void(0);\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">Businesses</a>\n                        <ul class=\"dropdown-menu\">\n                            <li class=\"grid-demo container\">\n                                <div class=\"row\">\n                                    <!--Menu column-->\n                                    <div class=\"col-sm-6 col-md-3\">\n                                        <!--primary menu-->\n                                        <h1 class=\"menu-primary\"><a href=\"business-domestic.html\">Domestic Broadcasting</a></h1>\n                                        <ul class=\"menu-secondary\">\n                                            <li><a href=\"business-domestic.html#tab1\">Hindi General Entertainment Channels</a></li>\n                                            <li><a href=\"business-domestic.html#tab2\">Regional Entertainment Channels</a></li>\n                                            <li><a href=\"business-domestic.html#tab3\">Hindi Movie Cluster</a></li>\n                                            <li><a href=\"business-domestic.html#tab4\">Niche Channels</a></li>\n                                        </ul>\n                                        <!--Primary Menu-->\n                                        <h1 class=\"menu-primary\"><a href=\"business-international.html\">International Businesses</a></h1>\n                                        <ul class=\"menu-secondary\">\n                                            <li><a href=\"business-international.html#tab1\">America</a></li>\n                                            <li><a href=\"business-international.html#tab2\">Europe</a></li>\n                                            <li><a href=\"business-international.html#tab3\">Africa</a></li>\n                                            <li><a href=\"business-international.html#tab4\">MENAP</a></li>\n                                            <li><a href=\"business-international.html#tab5\">APAC</a></li>\n                                            <li><a href=\"business-international.html#tab6\">Syndication</a></li>\n                                        </ul>\n                                    </div>\n\n                                    <!--Menu column-->\n                                    <div class=\"col-sm-6 col-md-3\">\n                                        <!--Primary Menu-->\n                                        <h1 class=\"menu-primary\"><a href=\"business-movie-music.html\">Movies & Music</a></h1>\n                                        <ul class=\"menu-secondary\">\n                                            <li><a href=\"business-movie-music.html#zeeStudios\">Zee Studios</a></li>\n                                            <li><a href=\"business-movie-music.html#business-mv-collage\">Zee Music Company (ZMC)</a></li>\n                                        </ul>\n                                        <!--primary menu-->\n                                        <h1 class=\"menu-primary\"><a href=\"business-digital.html\">Digital</a></h1>\n                                        <ul class=\"menu-secondary\">\n                                            <li><a href=\"business-digital.html#OTTPlatforms\">OTT Platforms</a></li>\n                                            <li><a href=\"business-digital.html#indiaWebportal\">IndiaWebportal Pvt. Ltd.</a></li>\n                                        </ul>\n\n                                        <!--Primary Menu-->\n                                        <h1 class=\"menu-primary\"><a href=\"business-live.html\">Live</a></h1>\n                                        <ul class=\"menu-secondary\">\n                                            <li><a href=\"business-live.html#zeeLive\">Zee Live</a></li>\n                                            <li><a href=\"business-live.html#zeeTheatre\">Zee Theater</a></li>\n                                        </ul>\n                                    </div>\n\n                                    <!--Menu column-->\n                                    <div class=\"col-sm-6 col-md-3\">\n                                        <div class=\"menu-img\">\n                                            <img src=\"assets/images/nav-thumbnails/nav_thumbnail_1.jpg\" alt=\"\" class=\"img-responsive\">\n                                            <div class=\"menu-text-caption\">\n                                                <h2>Be a part of new ZEE</h2>\n                                                <a href=\"javascript:void(0);\">Know More</a>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <!--Menu column-->\n                                    <div class=\"col-sm-6 col-md-3\">\n                                        <div class=\"menu-img\">\n                                            <img src=\"assets/images/nav-thumbnails/nav_thumbnail_2.jpg\" alt=\"\" class=\"img-responsive\">\n                                            <div class=\"menu-text-caption\">\n                                                <h2>Get High on Literature</h2>\n                                                <a href=\"javascript:void(0);\">Register now</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                        </ul>\n                    </li>\n                    <!--Investors-->\n                    <li class=\"dropdown mega-menu-fw\"><a href=\"javascript:void(0);\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">Investors</a>\n                        <ul class=\"dropdown-menu\">\n                            <li class=\"grid-demo container\">\n                                <div class=\"row\">\n                                    <!--Menu column-->\n                                    <div class=\"col-sm-6 col-md-3\">\n                                        <!--primary menu-->\n                                        <h1 class=\"menu-primary\"><a href=\"investor-overview.html\">Overview</a></h1>\n                                        <ul class=\"menu-secondary\">\n                                            <li><a href=\"investor-financials.html\">Financials</a></li>\n                                            <li><a href=\"investor-faqs.html\">FAQs</a></li>\n                                        </ul>\n                                        <!--Primary Menu-->\n                                        <h1 class=\"menu-primary\"><a href=\"investor-releases.html\">Releases</a></h1>\n                                        <ul class=\"menu-secondary\">\n                                            <li><a href=\"investor-releases.html#tab1\">Annual Report</a></li>\n                                            <li><a href=\"investor-releases.html#tab2\">Quarterly Results</a></li>\n                                            <li><a href=\"investor-releases.html#tab3\">Investor Presentation</a></li>\n                                            <li><a href=\"investor-releases.html#tab4\">Shareholding Pattern</a></li>\n                                        </ul>\n\n                                        <!--Primary Menu-->\n                                        <h1 class=\"menu-primary\"><a href=\"investor-regulatory.html\">Regulatory Filings</a></h1>\n                                        <ul class=\"menu-secondary\">\n                                            <li><a href=\"investor-regulatory.html#vtab1\">Notices</a></li>\n                                            <li><a href=\"investor-regulatory.html#vtab2\">Schemes</a></li>\n                                            <li><a href=\"investor-regulatory.html#vtab3\">Stock Exchange Filling</a></li>\n                                            <li><a href=\"investor-regulatory.html#vtab4\">Scrutinizer report</a></li>\n                                        </ul>\n                                    </div>\n\n                                    <!--Menu column-->\n                                    <div class=\"col-sm-6 col-md-3\">\n                                        <!--primary menu-->\n                                        <h1 class=\"menu-primary\"><a href=\"investor-governance.html\">Corporate Governance</a></h1>\n                                        <ul class=\"menu-secondary\">\n                                            <li><a href=\"investor-governance.html#vtab1\">Board of Directors</a></li>\n                                            <li><a href=\"investor-governance.html#vtab2\">Board Meetings</a></li>\n                                            <li><a href=\"investor-governance.html#vtab3\">Board Committees</a></li>\n                                            <li><a href=\"investor-governance.html#vtab4\">General Body Meetings</a></li>\n                                            <li><a href=\"investor-governance.html#vtab5\">Disclosures</a></li>\n                                            <li><a href=\"investor-governance.html#vtab6\">Means of Communication</a></li>\n                                            <li><a href=\"investor-governance.html#vtab7\">Code of Conduct</a></li>\n                                            <li><a href=\"investor-governance.html#vtab8\">Policies</a></li>\n                                            <li><a href=\"investor-governance.html#vtab9\">Directors Familiarization Programme</a></li>\n                                            <li><a href=\"investor-governance.html#vtab10\">Independent Director-Terms of Appointment</a></li>\n                                        </ul>\n                                    </div>\n\n                                    <!--Menu column-->\n                                    <div class=\"col-sm-6 col-md-3\">\n                                        <div class=\"menu-img\">\n                                            <img src=\"assets/images/nav-thumbnails/nav_thumbnail_3.jpg\" alt=\"\" class=\"img-responsive\">\n                                        </div>\n                                    </div>\n\n                                    <!--Menu column-->\n                                    <div class=\"col-sm-6 col-md-3\">\n                                        <div class=\"menu-img-text\">\n                                            <img src=\"assets/images/nav-thumbnails/nav_thumbnail_4.jpg\" class=\"img-responsive\">\n                                            <div class=\"menu-content\">\n                                                <h2>Last Quarter Results</h2>\n                                                <a href=\"javascript:boid(0);\"><i class=\"icon48 icon-download\"></i></a>\n                                                <p>Download All</p>\n                                                <span>Quarter 1 - 2018</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                        </ul>\n                    </li>\n                    <!--Media-->\n                    <li class=\"dropdown mega-menu-fw\"><a href=\"javascript:void(0);\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">Media</a>\n                        <ul class=\"dropdown-menu\">\n                            <li class=\"grid-demo container\">\n                                <div class=\"row\">\n                                    <!--Menu column-->\n                                    <div class=\"col-sm-6 col-md-3\">\n                                        <!--primary menu-->\n                                        <h1 class=\"menu-primary\"><a href=\"media-releases.html\">Media Releases</a></h1>\n                                        <ul class=\"menu-secondary\">\n                                            <li><a href=\"media-releases.html\">Business Releases</a></li>\n                                            <li><a href=\"media-releases.html\">Corporate Releases</a></li>\n                                        </ul>\n\n                                        <!--Primary Menu-->\n                                        <h1 class=\"menu-primary\"><a href=\"in-the-news.html\">In the News</a></h1>\n\n                                        <!--primary menu-->\n                                        <h1 class=\"menu-primary\"><a href=\"media-kit.html\">Media Kit</a></h1>\n                                        <ul class=\"menu-secondary\">\n                                            <li><a href=\"media-releases.html\">Business Versicle's Logos </a></li>\n                                            <li><a href=\"media-releases.html\">Spokesperson</a></li>\n                                        </ul>\n                                    </div>\n\n                                    <!--Menu column-->\n                                    <div class=\"col-sm-6 col-md-3\">\n                                        <div class=\"menu-img\">\n                                            <img src=\"assets/images/nav-thumbnails/nav_thumbnail_3.jpg\" alt=\"\" class=\"img-responsive\">\n                                        </div>\n                                    </div>\n\n                                    <!--Menu column-->\n                                    <div class=\"col-sm-6 col-md-3\">\n                                        <div class=\"menu-img\">\n                                            <img src=\"assets/images/nav-thumbnails/nav_thumbnail_3.jpg\" alt=\"\" class=\"img-responsive\">\n                                        </div>\n                                    </div>\n\n                                    <!--Menu column-->\n                                    <div class=\"col-sm-6 col-md-3\">\n                                        <div class=\"menu-img-text\">\n                                            <img src=\"assets/images/nav-thumbnails/nav_thumbnail_4.jpg\" class=\"img-responsive\">\n                                            <div class=\"menu-content\">\n                                                <h2>Last Quarter Results</h2>\n                                                <a href=\"javascript:boid(0);\"><i class=\"icon48 icon-download\"></i></a>\n                                                <p>Download All</p>\n                                                <span>Quarter 1 - 2018</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                        </ul>\n                    </li>\n                    <!--Careers-->\n                    <li class=\"dropdown mega-menu-fw\"><a href=\"javascript:void(0);\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">Careers</a>\n                        <ul class=\"dropdown-menu\">\n                            <li class=\"grid-demo container\">\n                                <div class=\"row\">\n                                    <!--Menu column-->\n                                    <div class=\"col-sm-6 col-md-3\">\n                                        <!--Primary Menu-->\n                                        <h1 class=\"menu-primary\"><a href=\"careers-overview.html\">Overview</a></h1>\n\n                                        <!--primary menu-->\n                                        <h1 class=\"menu-primary\"><a href=\"life@zee.html\">Life @ ZEE</a></h1>\n                                        <ul class=\"menu-secondary\">\n                                            <li><a href=\"life@zee.html\">Extraordinary Everyday</a></li>\n                                            <li><a href=\"life@zee.html\">Enriching Lives</a></li>\n                                            <li><a href=\"life@zee.html\">Gender Diversity</a></li>\n                                        </ul>\n\n                                        <!--primary menu-->\n                                        <h1 class=\"menu-primary\"><a href=\"javascript:void(0);\">Opportunity</a></h1>\n                                        <ul class=\"menu-secondary\">\n                                            <li><a href=\"javascript:void(0);\">Success Stories</a></li>\n                                            <li><a href=\"javascript:void(0);\">Current Opportunities</a></li>\n                                        </ul>\n                                    </div>\n\n                                    <!--Menu column-->\n                                    <div class=\"col-sm-6 col-md-3\">\n                                        <div class=\"menu-img\">\n                                            <img src=\"assets/images/nav-thumbnails/nav_thumbnail_1.jpg\" alt=\"\" class=\"img-responsive\">\n                                            <div class=\"menu-text-caption\">\n                                                <h2>Be a part of new ZEE</h2>\n                                                <a href=\"javascript:void(0);\">Know More</a>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <!--Menu column-->\n                                    <div class=\"col-sm-6 col-md-3\">\n                                        <div class=\"menu-img\">\n                                            <img src=\"assets/images/nav-thumbnails/nav_thumbnail_1.jpg\" alt=\"\" class=\"img-responsive\">\n                                            <div class=\"menu-text-caption\">\n                                                <h2>Be a part of new ZEE</h2>\n                                                <a href=\"javascript:void(0);\">Know More</a>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <!--Menu column-->\n                                    <div class=\"col-sm-6 col-md-3\">\n                                        <div class=\"menu-img\">\n                                            <img src=\"assets/images/nav-thumbnails/nav_thumbnail_2.jpg\" alt=\"\" class=\"img-responsive\">\n                                            <div class=\"menu-text-caption\">\n                                                <h2>Get High on Literature</h2>\n                                                <a href=\"javascript:void(0);\">Register now</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n                <!--Search bar-->\n                <form class=\"nav-search-right navbar-right hidden-xs hidden-sm\">\n                    <input type=\"text\" class=\"nav-search\" placeholder=\"\">\n                    <i class=\"icon24 close-search\"></i>\n                </form>\n            </div>\n        </div>\n    </nav>\n</header>\n\n<router-outlet></router-outlet>\n\n<!--Footer Section-->\n<footer>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 col-md-7 five-three\">\n                <div class=\"row\">\n                    <!--About footer Section-->\n                    <div class=\"col-sm-4\">\n                        <div class=\"footer-title\">About</div>\n                        <ul class=\"footer-list\">\n                            <li><a routerLink=\"/about-us\">Overview</a></li>\n                            <li class=\"active\"><a routerLink=\"/about-us-legacy\">Legacy</a></li>\n                            <li><a routerLink=\"/about-us-leadership\">Leadership</a></li>\n                            <li><a routerLink=\"/about-us-partnership\">Partnerships</a></li>\n                            <li><a routerLink=\"/about-us-csr\">CSR and Sustainability</a></li>\n                            <li><a routerLink=\"/about-technology\">Technology</a></li>\n                        </ul>\n                    </div>\n                    <!--business footer Section-->\n                    <div class=\"col-sm-4\">\n                        <div class=\"footer-title\">Businesses</div>\n                        <ul class=\"footer-list\">\n                            <li><a href=\"business-domestic.html\">Domestic Broadcasting</a></li>\n                            <li><a href=\"business-international.html\">International Businesses</a></li>\n                            <li><a href=\"business-movie-music.html\">Movies & Music</a></li>\n                            <li><a href=\"business-digital.html\">Digital</a></li>\n                            <li><a href=\"business-live.html\">Live</a></li>\n                        </ul>\n                    </div>\n                    <!--Investor footer Section-->\n                    <div class=\"col-sm-4\">\n                        <div class=\"footer-title\">Investor</div>\n                        <ul class=\"footer-list\">\n                            <li><a href=\"investor-overview.html\">Overview</a></li>\n                            <li><a href=\"investor-releases.html\">Releases</a></li>\n                            <li><a href=\"investor-regulatory.html\">Regulatory Filings</a></li>\n                            <li><a href=\"investor-governance.html\">Corporate Governance</a></li>\n                        </ul>\n                    </div><!-- end inner row -->\n                </div>\n            </div>\n            <div class=\"col-sm-8 col-md-5 five-two\">\n                <div class=\"row\">\n                    <!--Media footer Section-->\n                    <div class=\"col-sm-6\">\n                        <div class=\"footer-title\">Media</div>\n                        <ul class=\"footer-list\">\n                            <li><a href=\"javascript:void(0);\">Media Releases</a></li>\n                            <li><a href=\"javascript:void(0);\">In the news</a></li>\n                            <li><a href=\"javascript:void(0);\">Media Kit</a></li>\n                            <li><a href=\"distribution.html\">Distribution</a></li>\n                        </ul>\n                    </div>\n                    <!--Careers section footer Section-->\n                    <div class=\"col-sm-6\">\n                        <div class=\"footer-title\">Careers</div>\n                        <ul class=\"footer-list\">\n                            <li><a href=\"javascript:void(0);\">Life @ ZEE</a></li>\n                            <li><a href=\"javascript:void(0);\">ZEE family</a></li>\n                            <li><a href=\"javascript:void(0);\">Gender Diversity</a></li>\n                            <li><a href=\"javascript:void(0);\">Opportunities</a></li>\n                        </ul>\n                        <div class=\"row\">\n                            <!--Distribution-->\n                            <div class=\"col-sm-12\">\n                                <div class=\"distribution\"><a href=\"distribution.html\">Distribution</a></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--footer-divider-->\n        <div class=\"footer-divider\"></div>\n        <div class=\"row clearfix\">\n            <div class=\"col-sm-7 col-md-6\">\n                <ul class=\"term-condition-list\">\n                    <li><a href=\"disclaimer.html\">Disclaimer</a></li>\n                    |\n                    <li><a href=\"privacy-policy.html\">Privacy Policy</a></li>\n                    |\n                    <li><a routerLink=\"/contact-us\">Contact Us</a></li>\n                </ul>\n            </div>\n            <div class=\"col-sm-5 col-md-6\">\n                <ul class=\"social-share-list\">\n                    <li><a href=\"javascript:void(0);\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n                    <li><a href=\"javascript:void(0);\"><i class=\"fa fa-pinterest-p\" aria-hidden=\"true\"></i></a></li>\n                    <li><a href=\"javascript:void(0);\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n                    <li><a href=\"javascript:void(0);\"><i class=\"fa fa-vimeo\" aria-hidden=\"true\"></i></a></li>\n                    <li><a href=\"javascript:void(0);\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\n                    <li><a href=\"javascript:void(0);\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a></li>\n                </ul>\n            </div>\n            <div class=\"col-sm-12\"><p class=\"copyright\"><i class=\"fa fa-copyright\" aria-hidden=\"true\"></i> 2017 Zee Entertainment Ltd.<p></div>\n        </div>\n    </div>\n</footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_us_about_us_component__ = __webpack_require__("../../../../../src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_us_legacy_about_us_legacy_component__ = __webpack_require__("../../../../../src/app/about-us-legacy/about-us-legacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_us_leadership_about_us_leadership_component__ = __webpack_require__("../../../../../src/app/about-us-leadership/about-us-leadership.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_us_partnership_about_us_partnership_component__ = __webpack_require__("../../../../../src/app/about-us-partnership/about-us-partnership.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_us_csr_about_us_csr_component__ = __webpack_require__("../../../../../src/app/about-us-csr/about-us-csr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_us_technology_about_us_technology_component__ = __webpack_require__("../../../../../src/app/about-us-technology/about-us-technology.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//.. other imports






Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_13" /* enableProdMode */])();
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_us_legacy_about_us_legacy_component__["a" /* AboutUsLegacyComponent */],
                __WEBPACK_IMPORTED_MODULE_8__about_us_leadership_about_us_leadership_component__["a" /* AboutUsLeadershipComponent */],
                __WEBPACK_IMPORTED_MODULE_9__about_us_partnership_about_us_partnership_component__["a" /* AboutUsPartnershipComponent */],
                __WEBPACK_IMPORTED_MODULE_11__about_us_csr_about_us_csr_component__["a" /* AboutUsCsrComponent */],
                __WEBPACK_IMPORTED_MODULE_12__about_us_technology_about_us_technology_component__["a" /* AboutUsTechnologyComponent */],
                __WEBPACK_IMPORTED_MODULE_10__contact_us_contact_us_component__["a" /* ContactUsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: '',
                        redirectTo: 'home',
                        pathMatch: 'full'
                    },
                    {
                        path: "home",
                        component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */]
                    },
                    {
                        path: "about-us",
                        component: __WEBPACK_IMPORTED_MODULE_6__about_us_about_us_component__["a" /* AboutUsComponent */]
                    },
                    {
                        path: "about-us-legacy",
                        component: __WEBPACK_IMPORTED_MODULE_7__about_us_legacy_about_us_legacy_component__["a" /* AboutUsLegacyComponent */]
                    },
                    {
                        path: "about-us-leadership",
                        component: __WEBPACK_IMPORTED_MODULE_8__about_us_leadership_about_us_leadership_component__["a" /* AboutUsLeadershipComponent */]
                    },
                    {
                        path: "about-us-partnership",
                        component: __WEBPACK_IMPORTED_MODULE_9__about_us_partnership_about_us_partnership_component__["a" /* AboutUsPartnershipComponent */]
                    },
                    {
                        path: "about-us-csr",
                        component: __WEBPACK_IMPORTED_MODULE_11__about_us_csr_about_us_csr_component__["a" /* AboutUsCsrComponent */]
                    },
                    {
                        path: "about-us-technology",
                        component: __WEBPACK_IMPORTED_MODULE_12__about_us_technology_about_us_technology_component__["a" /* AboutUsTechnologyComponent */]
                    },
                    {
                        path: "contact-us",
                        component: __WEBPACK_IMPORTED_MODULE_10__contact_us_contact_us_component__["a" /* ContactUsComponent */]
                    }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

Object(__WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(AppModule);


/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".has-danger input{\r\n  border: 1px solid red;\r\n  color:red;\r\n}\r\n\r\n.form-control{\r\n      text-align: left;\r\n}\r\n\r\n.form-control-feedback {\r\n    position: relative;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 2;\r\n    display: block;\r\n    width: 100%;\r\n    height: 34px;\r\n    line-height: 34px;\r\n    text-align: left;\r\n    pointer-events: none;\r\n}\r\n\r\ninput.ng-touched.ng-invalid {\r\n      border: 1px solid red;\r\n      color:red;\r\n}\r\n\r\ninput+ .form-control-feedback > p{\r\n   color:red;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section-space parallax-window\" data-parallax=\"scroll\" data-image-src=\"assets/images/contact-us.jpg\">\n    <div class=\"container\">\n        <div class=\"title big text-center\">\n            <h1>Contact <span>US</span></h1>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <ul class=\"contact-us-banner-info\">\n                    <li class=\"info-box\">\n                        <h2>Corporate and Registered Office</h2>\n                        <p>18th Floor, A - Wing, Marathon Futurex, Lower Parel, Mumbai, India</p>\n                    </li>\n                    <li class=\"info-box\">\n                        <h2>Investor Connect</h2>\n                        <p class=\"mail\"><i class=\"icon24 icon-envelope\"></i>shareservice@zee.esselgroup.com</p>\n                        <p class=\"phone\"><i class=\"icon24 icon-phone-white\"></i>+91 22 7106 1234</p>\n                    </li>\n                    <li class=\"info-box\">\n                        <h2>Media Contact</h2>\n                        <p class=\"mail\"><i class=\"icon24 icon-envelope\"></i>shareservice@zee.esselgroup.com</p>\n                        <p class=\"phone\"><i class=\"icon24 icon-phone-white\"></i>+91 22 7106 1234</p>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Section Contact us form-->\n<section class=\"section-space pt-0\">\n    <div class=\"container\">\n        <div class=\"title big text-center\">\n            <h1>Send A <span>Message</span></h1>\n        </div>\n        <div class=\"row no-gutter\">\n            <!--form Container-->\n            <div class=\"row\">\n                <form [formGroup]=\"myform\" novalidate>\n                    <fieldset formGroupName=\"name\">\n                        <div class=\"form-group\" [ngClass]=\"{\n        'has-danger':  myform['controls'].name['controls'].firstName.invalid && myform['controls'].name['controls'].firstName.dirty,\n        'has-success': myform['controls'].name['controls'].firstName.valid && myform['controls'].name['controls'].firstName.dirty\n}\">\n                            <label>First Name</label>\n                            <input formControlName=\"firstName\" type=\"text\" class=\"form-control\">\n                            <div class=\"form-control-feedback\" *ngIf=\"myform['controls'].name['controls'].firstName.errors && (myform['controls'].name['controls'].firstName.dirty || myform['controls'].name['controls'].firstName.touched)\">\n                                <p *ngIf=\"myform['controls'].name['controls'].firstName.errors.required\">Firstname is required</p>\n                            </div>\n                        </div>\n                        <div class=\"form-group\" [ngClass]=\"{\n        'has-danger': myform['controls'].name['controls'].lastName.invalid && myform['controls'].name['controls'].lastName.dirty,\n        'has-success': myform['controls'].name['controls'].lastName.valid && myform['controls'].name['controls'].lastName.dirty\n}\">\n                            <label>Last Name</label>\n                            <input formControlName=\"lastName\" type=\"text\" class=\"form-control\">\n                            <div class=\"form-control-feedback\" *ngIf=\"myform['controls'].name['controls'].lastName.errors && (myform['controls'].name['controls'].lastName.dirty || myform['controls'].name['controls'].lastName.touched)\">\n                                <p *ngIf=\"myform['controls'].name['controls'].lastName.errors.required\">LastName is required</p>\n                            </div>\n                        </div>\n                    </fieldset>s\n                    <div class=\"form-group\" [ngClass]=\"{\n  'has-danger': myform.controls.email.invalid && myform.controls.email.dirty,\n  'has-success': myform.controls.email.valid && myform.controls.email.dirty\n}\">\n                        <label>Email</label>\n                        <input formControlName=\"email\" type=\"email\" class=\"form-control\">\n                        <div class=\"form-control-feedback\" *ngIf=\"myform.controls.email.errors && (myform.controls.email.dirty || myform.controls.email.touched)\">\n                            <p *ngIf=\"myform.controls.email.errors.required\">Email is required</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group\" [ngClass]=\"{\n  'has-danger': myform.controls.password.invalid && myform.controls.password.dirty,\n  'has-success': myform.controls.password.valid && myform.controls.password.dirty\n}\">\n                        <label>Password</label>\n                        <input formControlName=\"password\" type=\"password\" class=\"form-control\">\n                        <div class=\"form-control-feedback\" *ngIf=\"myform.controls.password.errors && (myform.controls.password.dirty || myform.controls.password.touched)\">\n                            <p *ngIf=\"myform.controls.password.errors.required\">Password is required</p>\n                            <p *ngIf=\"myform.controls.password.errors.minlength\">Password must be 8 characters long</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Language</label>\n                        <select formControlName=\"language\" class=\"form-control\">\n                            <option value=\"\">Select Language::</option>\n                            <option *ngFor=\"let lang of langs\" [value]=\"lang\">{{lang}}</option>\n                        </select>\n                    </div>\n\n                    <div class=\"form-group\">\n                         <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myform.valid\">\n                            Submit\n                         </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Section Contact us map-->\n<section class=\"section-space pt-0\">\n    <div class=\"container\">\n        <div class=\"title big text-center\">\n            <h1>Our <span>Locations</span></h1>\n        </div>\n        <div class=\"row no-gutter\">\n            <!--Map Container-->\n            <div class=\"col-sm-12 pos-relative\">\n                <div id=\"map\" class=\"googleMap\">\n                    <!--<iframe src=\"https://developers.google.com/maps/documentation/javascript/examples/full/style-array&q=\" height=\"500px\" width=\"100%\" allowfullscreen=\"\"></iframe>-->\n                </div>\n                <div class=\"our-location light-pink-bg\">\n                    <h2>Corporate Office:</h2>\n                    <ul>\n                        <li>\n                            <a href=\"javascript:void(0);\" data-lat=\"48.8588589\" data-long=\"2.3470599\" class=\"\">Mumbai (India)</a>\n                            <div class=\"address-details\">\n                                <h3>Mumbai (India)</h3>\n                                <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                            </div>\n                        </li>\n                    </ul>\n                    <h2>Regional Offices:</h2>\n                    <ul>\n                        <li>\n                            <a href=\"javascript:void(0);\" data-lat=\"37.9758438\" data-long=\"23.7454209\" class=\"\">Delhi</a>\n                            <div class=\"address-details\">\n                                <h3>New Delhi</h3>\n                                <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                            </div>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" class=\"\">Kolkata</a>\n                            <div class=\"address-details\">\n                                <h3>Kolkata (west bengal)</h3>\n                                <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                            </div>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" class=\"\">Hyderabad</a>\n                            <div class=\"address-details\">\n                                <h3>Hyderabad</h3>\n                                <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                            </div>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" class=\"\">Pune</a>\n                            <div class=\"address-details\">\n                                <h3>Pune</h3>\n                                <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                            </div>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" class=\"\">Chennai</a>\n                            <div class=\"address-details\">\n                                <h3>Chennai</h3>\n                                <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                            </div>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" class=\"\">Bangalore</a>\n                            <div class=\"address-details\">\n                                <h3>Bangalore</h3>\n                                <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                            </div>\n                        </li>\n                    </ul>\n                    <h2>International Offices:</h2>\n                    <ul>\n                        <li>\n                            <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" class=\"\">NYC (United States of America)</a>\n                            <div class=\"address-details\">\n                                <h3>NYC (United States of America)</h3>\n                                <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                            </div>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" class=\"\">London (United Kingdom)</a>\n                            <div class=\"address-details\">\n                                <h3>London (United Kingdom)</h3>\n                                <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                            </div>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" class=\"\">London (United Kingdom)</a>\n                            <div class=\"address-details\">\n                                <h3>London (United Kingdom)</h3>\n                                <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                            </div>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0);\" data-lat=\"37.4038194\" data-long=\"-122.081267\" class=\"\">London (United Kingdom)</a>\n                            <div class=\"address-details\">\n                                <h3>London (United Kingdom)</h3>\n                                <p>Filmcity 19, Sector 16 - A, Noida - 201301</p>\n                                <span><i class=\"icon24 icon-phone\"></i> +91 22 7106 1234</span>\n                                <span><i class=\"icon24 icon-fax\"></i> +91 22 7106 1234</span>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactUsComponent = (function () {
    function ContactUsComponent() {
        this.langs = ["English", "French", "German"];
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        //parallax Scroll
        $('.parallax-window').parallax();
        this.myform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
                firstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
                lastName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            }),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("[^ @]*@[^ @]*")
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(8)
            ]),
            language: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    };
    ContactUsComponent.prototype.ngAfterViewInit = function () { };
    ContactUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-us',
            template: __webpack_require__("../../../../../src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Home Slider Section-->\n<section>\n    <div class=\"owl-carousel home-pg-slider\">\n        <div class=\"item\">\n            <img src=\"assets/images/home-slider/desktop/slide1.jpg\">\n            <div class=\"overlay\"></div>\n            <div class=\"container\">\n                <div class=\"slider-caption caption--blue\">\n                    <h1><a href=\"business-domestic.html\">Domestic Broadcasting</a></h1>\n                    <ul>\n                        <li>Hindi GEC</li>|\n                        <li>Regional Channels</li>|\n                        <li class=\"movie-cluster\">Movie Cluster</li>|\n                        <li>Niche</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"item\">\n            <img src=\"assets/images/home-slider/desktop/slide2.jpg\">\n            <div class=\"overlay\"></div>\n            <div class=\"container\">\n                <div class=\"slider-caption\">\n                    <h1><a href=\"business-international.html\">International Business</a></h1>\n                    <ul>\n                        <li>International GEC</li>|\n                        <li>Syndication</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"item\">\n            <img src=\"assets/images/home-slider/desktop/slide3.jpg\">\n            <div class=\"overlay\"></div>\n            <div class=\"container\">\n                <div class=\"slider-caption caption--blue\">\n                    <h1><a href=\"business-movie-music.html\">Movies & Music</a></h1>\n                    <ul>\n                        <li>Zee Studios</li>|\n                        <li>Zee Music Company</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"item\">\n            <img src=\"assets/images/home-slider/desktop/slide4.jpg\">\n            <div class=\"overlay\"></div>\n            <div class=\"container\">\n                <div class=\"slider-caption\">\n                    <h1><a href=\"business-digital.html\">Digital</a></h1>\n                    <ul>\n                        <li>OTT Platforms</li>|\n                        <li>India Webportal</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"item\">\n            <img src=\"assets/images/home-slider/desktop/slide5.jpg\">\n            <div class=\"overlay\"></div>\n            <div class=\"container\">\n                <div class=\"slider-caption caption--blue\">\n                    <h1><a href=\"business-live.html\">Zee Live</a></h1>\n                    <ul>\n                        <li>Zee Live</li>|\n                        <li>Zee Theater</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Zee Stats section-->\n<section class=\"light-pink-bg\">\n    <div class=\"container\">\n        <ul class=\"row zee-stats\" data-aos=\"fade-up\" data-aos-easing=\"ease\">\n            <!--Viewers Worldwide-->\n            <li class=\"col-xs-6 col-sm-4 col-md-2\">\n                <div class=\"stat-content\">\n                    <h2><span class=\"count\">1</span>Billion+</h2>\n                    <p>Viewers</p>\n                </div>\n            </li>\n\n            <!--172 Countries-->\n            <li class=\"col-xs-6 col-sm-4 col-md-2\">\n                <div class=\"stat-content\">\n                    <h2><span class=\"count\">172</span></h2>\n                    <p>Countries</p>\n                </div>\n            </li>\n\n            <!--32 Domestic Channels-->\n            <li class=\"col-xs-6 col-sm-4 col-md-2\">\n                <div class=\"stat-content\">\n                    <h2><span class=\"count\">32</span></h2>\n                    <p>Domestic Channels</p>\n                </div>\n            </li>\n\n            <!--39 International Channels-->\n            <li class=\"col-xs-6 col-sm-4 col-md-2\">\n                <div class=\"stat-content\">\n                    <h2><span class=\"count\">39</span></h2>\n                    <p>International Channels</p>\n                </div>\n            </li>\n\n            <!--4200 Movie Titles-->\n            <li class=\"col-xs-6 col-sm-4 col-md-2\">\n                <div class=\"stat-content\">\n                    <h2><span class=\"count\">4200</span></h2>\n                    <p>Movie Titles</p>\n                </div>\n            </li>\n\n            <!--240K+ Hours of Television Content-->\n            <li class=\"col-xs-6 col-sm-4 col-md-2\">\n                <div class=\"stat-content\">\n                    <h2><span class=\"count\">240</span>K+</h2>\n                    <p>Hours of Television Content</p>\n                </div>\n            </li>\n        </ul>\n    </div>\n</section>\n<!--Heading for video by Chairman-->\n<section class=\"section-space pt-0\">\n    <div class=\"container\">\n        <div class=\"title big text-center\">\n            <h1>Heading for video by <span>Chairman</span></h1>\n        </div>\n\n        <div id=\"spokesperson-slider\" class=\"owl-carousel\">\n            <div class=\"item\">\n                <div class=\"row person-msg\">\n                    <div class=\"col-md-7 col-lg-6\">\n                        <div class=\"img-section\">\n                            <img src=\"assets/images/chairman-slider-img.jpg\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-5 col-lg-6\">\n                        <div class=\"text-section\">\n                            <h3>Dear shareholders,</h3>\n                            <p>The Indian economy is going through an exciting phase of development. As part of a 90-year old group, with presence in diverse industries, it is heartening to see reforms being implemented at an exhilarating pace across multiple sectors. Several areas which got neglected for long are seeing constructive work, alongside a plethora of measures targeted at improving efficiency. India’s economic growth, which is one of the fastest, should accelerate further as these initiatives yield positive results.</p>\n                            <div class=\"person-details\">\n                                <h2>Dr. Subhash Chandra</h2>\n                                <span>Chairman of Essel Group</span>\n                            </div>\n                            <a href=\"spokeperson-msg.html\" class=\"cta-link text-uppercase color-white\">Read More<span></span></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"item\">\n                <div class=\"row person-msg\">\n                    <div class=\"col-md-7 col-lg-6\">\n                        <div class=\"img-section\">\n                            <img src=\"assets/images/chairman-slider-img-1.jpg\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-5 col-lg-6\">\n                        <div class=\"text-section\">\n                            <h3>Dear shareholders,</h3>\n                            <p>The Indian economy is going through an exciting phase of development. As part of a 90-year old group, with presence in diverse industries, it is heartening to see reforms being implemented at an exhilarating pace across multiple sectors. Several areas which got neglected for long are seeing constructive work, alongside a plethora of measures targeted at improving efficiency. India’s economic growth, which is one of the fastest, should accelerate further as these initiatives yield positive results.</p>\n                            <div class=\"person-details\">\n                                <h2>Punit Goenka</h2>\n                                <span>MD & CEO</span>\n                            </div>\n                            <a href=\"spokeperson-msg-2.html\" class=\"cta-link text-uppercase color-white\">Read More<span></span></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"item\">\n                <div class=\"row person-msg\">\n                    <div class=\"col-md-7 col-lg-6\">\n                        <div class=\"img-section\">\n                            <img src=\"assets/images/chairman-slider-img-2.jpg\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-5 col-lg-6\">\n                        <div class=\"text-section\">\n                            <h3>Dear shareholders,</h3>\n                            <p>The Indian economy is going through an exciting phase of development. As part of a 90-year old group, with presence in diverse industries, it is heartening to see reforms being implemented at an exhilarating pace across multiple sectors. Several areas which got neglected for long are seeing constructive work, alongside a plethora of measures targeted at improving efficiency. India’s economic growth, which is one of the fastest, should accelerate further as these initiatives yield positive results.</p>\n                            <div class=\"person-details\">\n                                <h2>Dr. Subhash Chandra</h2>\n                                <span>Chairman of Essel Group</span>\n                            </div>\n                            <a href=\"spokeperson-msg.html\" class=\"cta-link text-uppercase color-white\">Read More<span></span></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Celebrating 25 glorious collage section-->\n<section>\n    <div class=\"container-fluid pd-0\">\n        <div class=\"row no-gutter celebrating-25\">\n\n            <!--Image collage row 1-->\n            <div class=\"col-xs-4 col-sm-3 col-md-2\">\n                <div class=\"img-caption\">\n                    <img src=\"assets/images/home-assets/collage-1.jpg\"  class=\"img-responsive\">\n                    <div class=\"overlay\"></div>\n                </div>\n            </div>\n            <div class=\"col-xs-4 col-sm-3 col-md-2\">\n                <div class=\"img-caption\">\n                    <img src=\"assets/images/home-assets/collage-2.jpg\"  class=\"img-responsive\">\n                    <div class=\"overlay\"></div>\n                </div>\n            </div>\n            <div class=\"col-xs-4 col-sm-3 col-md-2\">\n                <div class=\"img-caption\">\n                    <img src=\"assets/images/home-assets/collage-3.jpg\"  class=\"img-responsive\">\n                    <div class=\"overlay\"></div>\n                </div>\n            </div>\n            <div class=\"col-xs-4 col-sm-3 col-md-2\">\n                <div class=\"img-caption\">\n                    <img src=\"assets/images/home-assets/collage-4.jpg\"  class=\"img-responsive\">\n                    <div class=\"overlay\"></div>\n                </div>\n            </div>\n            <div class=\"col-xs-4 col-sm-3 col-md-2\">\n                <div class=\"img-caption\">\n                    <img src=\"assets/images/home-assets/collage-5.jpg\"  class=\"img-responsive\">\n                    <div class=\"overlay\"></div>\n                </div>\n            </div>\n            <div class=\"col-xs-4 col-sm-3 col-md-2\">\n                <div class=\"img-caption\">\n                    <img src=\"assets/images/home-assets/collage-6.jpg\"  class=\"img-responsive\">\n                    <div class=\"overlay\"></div>\n                </div>\n            </div>\n\n            <!--Image collage row 2-->\n            <div class=\"col-xs-4 col-sm-3 col-md-2\">\n                <div class=\"img-caption\">\n                    <img src=\"assets/images/home-assets/collage-7.jpg\"  class=\"img-responsive\">\n                    <div class=\"overlay\"></div>\n                </div>\n            </div>\n            <div class=\"col-xs-4 col-sm-3 col-md-2\">\n                <div class=\"img-caption\">\n                    <img src=\"assets/images/home-assets/collage-8.jpg\"  class=\"img-responsive\">\n                    <div class=\"overlay\"></div>\n                </div>\n            </div>\n            <div class=\"col-xs-4 col-sm-3 col-md-2\">\n                <div class=\"img-caption\">\n                    <img src=\"assets/images/home-assets/collage-9.jpg\"  class=\"img-responsive\">\n                    <div class=\"overlay\"></div>\n                </div>\n            </div>\n            <div class=\"col-xs-4 col-sm-3 col-md-2\">\n                <div class=\"img-caption\">\n                    <img src=\"assets/images/home-assets/collage-6.jpg\"  class=\"img-responsive\">\n                    <div class=\"overlay\"></div>\n                </div>\n            </div>\n            <div class=\"col-xs-4 col-sm-3 col-md-2\">\n                <div class=\"img-caption\">\n                    <img src=\"assets/images/home-assets/collage-12.jpg\"  class=\"img-responsive\">\n                    <div class=\"overlay\"></div>\n                </div>\n            </div>\n            <div class=\"col-xs-4 col-sm-3 col-md-2\">\n                <div class=\"img-caption\">\n                    <img src=\"assets/images/home-assets/collage-10.jpg\"  class=\"img-responsive\">\n                    <div class=\"overlay\"></div>\n                </div>\n            </div>\n\n            <!--Image Collage row 3-->\n\n            <div class=\"col-xs-4 col-sm-3 col-md-2\">\n                <div class=\"img-caption\">\n                    <img src=\"assets/images/home-assets/collage-11.jpg\"  class=\"img-responsive\">\n                    <div class=\"overlay\"></div>\n                </div>\n            </div>\n            <div class=\"col-xs-4 col-sm-3 col-md-2\">\n                <div class=\"img-caption\">\n                    <img src=\"assets/images/home-assets/collage-12.jpg\"  class=\"img-responsive\">\n                    <div class=\"overlay\"></div>\n                </div>\n            </div>\n            <div class=\"col-xs-4 col-sm-3 col-md-2\">\n                <div class=\"img-caption\">\n                    <img src=\"assets/images/home-assets/collage-13.jpg\"  class=\"img-responsive\">\n                    <div class=\"overlay\"></div>\n                </div>\n            </div>\n            <div class=\"col-xs-4 col-sm-3 col-md-2 hidden-sm\">\n                <div class=\"img-caption\">\n                    <img src=\"assets/images/home-assets/collage-11.jpg\"  class=\"img-responsive\">\n                    <div class=\"overlay\"></div>\n                </div>\n            </div>\n            <div class=\"col-xs-4 col-sm-3 col-md-2 hidden-sm\">\n                <div class=\"img-caption\">\n                    <img src=\"assets/images/home-assets/collage-2.jpg\"  class=\"img-responsive\">\n                    <div class=\"overlay\"></div>\n                </div>\n            </div>\n            <div class=\"col-xs-4 col-sm-3 col-md-2\">\n                <div class=\"img-caption\">\n                    <img src=\"assets/images/home-assets/collage-14.jpg\"  class=\"img-responsive\">\n                    <div class=\"overlay\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--Celebrating Text wrapper-->\n    <div class=\"container celebrating-wrapper\">\n        <aside data-aos=\"fade-up\" data-aos-offset=\"200\" data-aos-delay=\"200\" data-aos-duration=\"900\">\n            <img src=\"assets/images/logo_zee_25_index.svg\" alt=\"Celebrating 25 glorious years\">\n            <h2>Celebrating 25 glorious years of Entertainment in India</h2>\n            <p>with Zee Entertainment</p>\n            <a href=\"javascript:void(0);\" class=\"cta-link text-uppercase\">View History<span></span></a>\n        </aside>\n    </div>\n</section>\n<!--The Iconic Brand Zee-->\n<section class=\"section-space\">\n    <div class=\"container\">\n        <div class=\"ZEE__brand mt-0 inner-pad50\">\n            <div class=\"row\">\n                <div class=\"col-sm-8 col-md-5\">\n                    <aside class=\"mb-0\">\n                        <div class=\"title text-left\">\n                            <h1>The iconic <span>BRAND ZEE</span></h1>\n                        </div>\n                        <p>Launched in 1992, Brand ZEE has earned a global recognition in its reign over the M & E industry for the past 25 years.</p>\n                        <a href=\"brand-zee.html\" class=\"cta-link text-uppercase\">Know More<span></span></a>\n                    </aside>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Leading People-->\n<section class=\"section-space leading-people purple-section pt-0\">\n    <div class=\"container\">\n            <div class=\"title big text-center color-reverse\">\n                <h1>Leading with <span>People</span></h1>\n            </div>\n            <div class=\"row\">\n                <!--Great Place to work-->\n                <div class=\"col-sm-6 col-md-5\">\n                    <aside>\n                        <h2>Great Place to Work</h2>\n                        <p>During the year, we received the Great Place to Work certification by the Great Place to Work Institute, India. The framework assesses an organisation on employee perception through Trust Index dimensions namely, credibility, respect, camaraderie, pride and fairness. </p>\n                        <div class=\"row work-stat mb-60\">\n                            <div class=\"col-xs-6\">\n                                <h2>23</h2>\n                                <p>Different Nationalities</p>\n                            </div>\n                            <div class=\"col-xs-6\">\n                                <h2>1372</h2>\n                                <p>Training Person Days</p>\n                            </div>\n                        </div>\n                        <a href=\"javascript:void(0);\" class=\"cta-link text-uppercase color-white\">Go to Careers<span></span></a>\n                    </aside>\n                </div>\n                <!--Image Gallery one day @ zee-->\n                <div class=\"col-sm-6 col-md-7\">\n                    <div class=\"one-day-img-gallery\">\n                        <div class=\"img-caption img-scale img-one\" data-aos=\"fade-down\" data-aos-offset=\"300\" data-aos-duration=\"1500\">\n                            <a href=\"https://www.youtube.com/watch?v=XpGnPiNXgpA\" class=\"magnific-youtube\">\n                                <img src=\"assets/images/home-assets/home-people-1.jpg\" class=\"img-responsive\" alt=\"Thalassaemia V2\">\n                                <span class=\"play-link\"><i class=\"icon64 icon-play\"></i> A day at Zee</span>\n                            </a>\n                        </div>\n                        <div class=\"img-caption img-scale img-two\" data-aos=\"fade-right\" data-aos-offset=\"350\" data-aos-duration=\"1550\">\n                            <img src=\"assets/images/home-assets/home-people-2.jpg\" class=\"img-responsive\" alt=\"Thalassaemia V2\">\n                            <span class=\"play-link\">Thalassaemia V2</span>\n                        </div>\n                        <div class=\"img-caption img-scale img-three\" data-aos=\"fade-up\" data-aos-offset=\"350\" data-aos-duration=\"1550\">\n                            <img src=\"assets/images/home-assets/home-people-3.jpg\" class=\"img-responsive\" alt=\"Thalassaemia V2\">\n                            <span class=\"play-link\">Thalassaemia V3</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n</section>\n\n<section class=\"section-space pt-0\">\n    <!--What’s NEW-->\n    <div class=\"container\">\n        <div class=\"title big text-center\">\n            <h1>What’s <span>NEW</span></h1>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-4\" data-aos=\"fade-up\" *ngFor=\"let news of newsList\">\n                <div class=\"whats-new-card\">\n                    <span>{{news.newsDate}}</span>\n                    <p>{{news.newsInfo}}</p>\n                    <a href=\"javascript:void(0)\" class=\"cta-style2\">Know More</a>\n                </div>\n            </div>\n            <div class=\"col-sm-12 text-center mt-20\">\n                <a href=\"javascript:void(0)\" class=\"cta-link text-uppercase\">Know More<span></span></a>\n            </div>\n        </div>\n    </div>\n\n    <!--Stock Tracker-->\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"stock-quote-card clearfix mt-35\" data-aos=\"fade-up\"  data-aos-duration=\"900\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 text-center\">\n                            <h2>Zee Entertainment Enterprises Ltd.</h2>\n                        </div>\n                        <div class=\"col-sm-5 col-md-6 col-xs-12\">\n                            <ul class=\"stock-info-list\">\n                                <li class=\"stock\">520.05</li>\n                                <li class=\"stock-status down\">0.80 (-0.29%)</li>\n                                <li class=\"nav\">as on <span>08 Sep 2017, 12:35</span></li>\n                            </ul>\n                            <p class=\"nse\">NSE</p>\n                        </div>\n                        <div class=\"col-sm-7 col-md-6 col-xs-12\">\n                            <ul class=\"stock-summery\">\n                                <li>\n                                    <p>524.46</p>\n                                    <label>Mkt. Cap (INR Bn)</label>\n                                </li>\n                                <li>\n                                    <p>527.23</p>\n                                    <label>52 Week High</label>\n                                </li>\n                                <li>\n                                    <p>519.53</p>\n                                    <label>52 Week Low</label>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!--Zee Post Section-->\n<section class=\"purple-section section-space pt-0\">\n    <div class=\"container\">\n        <div class=\"title text-center big color-reverse\">\n            <h1>Stay <span>updated</span></h1>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8 col-sm-12\" data-aos=\"fade-up\">\n                <div class=\"img-caption img-scale\">\n                    <a href=\"https://www.youtube.com/watch?v=99c20LjCyq0\" class=\"magnific-youtube\">\n                        <img src=\"assets/images/home-assets/home-you-tube-1.jpg\" class=\"img-responsive\" alt=\"Thalassaemia V2\">\n                        <span class=\"play-link\"><i class=\"icon64 icon-play\"></i> Zee Mundo shines in 2017</span>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-md-4 col-sm-12\" data-aos=\"fade-up\">\n                <ul class=\"zee-post\">\n                    <li class=\"clearfix\">\n                        <img src=\"assets/images/home-assets/home-you-tube-2.jpg\">\n                        <div class=\"post-content\">\n                            <a href=\"https://www.youtube.com/watch?v=99c20LjCyq0\" class=\"magnific-youtube color-white\">Zee The world is my family</a>\n                            <p>Zee Corporate\n                                <span>3 months ago  255 views</span>\n                            </p>\n                        </div>\n                    </li>\n                    <li class=\"clearfix\">\n                        <img src=\"assets/images/home-assets/home-you-tube-3.jpg\">\n                        <div class=\"post-content\">\n                            <a href=\"https://www.youtube.com/watch?v=99c20LjCyq0\" class=\"magnific-youtube color-white\">Zee The world is my family</a>\n                            <p>Zee Corporate\n                                <span>3 months ago  255 views</span>\n                            </p>\n                        </div>\n                    </li>\n                    <li>\n                        <div class=\"zee-on-youtube\">\n                            <a href=\"https://www.youtube.com/channel/UCUewD96qrlV4NlDcN3ldENw\" target=\"_blank\" class=\"cta-link-nrl color-white\"><img src=\"assets/images/youtube.svg\" alt=\"YouTube\"> Visit Youtube Channel<br></a>\n                        </div>\n                    </li>\n                </ul>\n                <!--visit Zee on you tube-->\n            </div>\n        </div>\n    </div>\n</section>\n<!--Social feed section-->\n<section class=\"section-space\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <!--social container-->\n                <div class=\"social-head clearfix\">\n                    <div class=\"title pull-left\">Tweets by <span>@ZEECorporate</span></div>\n                    <div class=\"twitter pull-right\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></div>\n                </div>\n                <div class=\"social-container\">\n                    <a class=\"twitter-timeline\" href=\"https://twitter.com/zeecorporate\">Tweets by Zee_Yuva</a> <script async src=\"//platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n                </div>\n                <div class=\"mtb-20\">\n                    <a href=\"javascript:void(0);\" class=\"cta-link text-uppercase\">View on twitter<span></span></a>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <!--social container-->\n                <div class=\"social-head clearfix\">\n                    <div class=\"title pull-left\">Facebook <span>ZEECorporate</span></div>\n                    <div class=\"facebook pull-right\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></div>\n                </div>\n                <div class=\"social-container facebook\">\n                    <div class=\"fb-page\" data-href=\"https://www.facebook.com/facebook/\" data-tabs=\"timeline\" data-width=\"500\" data-small-header=\"false\" data-adapt-container-width=\"true\" data-hide-cover=\"false\" data-show-facepile=\"true\"><blockquote cite=\"https://www.facebook.com/facebook/\" class=\"fb-xfbml-parse-ignore\"><a href=\"https://www.facebook.com/facebook/\">Facebook</a></blockquote></div>\n\n                    <div id=\"fb-root\"></div>\n                    <script>(function(d, s, id) {\n                        var js, fjs = d.getElementsByTagName(s)[0];\n                        if (d.getElementById(id)) return;\n                        js = d.createElement(s); js.id = id;\n                        js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.10';\n                        fjs.parentNode.insertBefore(js, fjs);\n                    }(document, 'script', 'facebook-jssdk'));</script>\n                    <!--<iframe class=\"facebook-iframe\" src=\"http://www.facebook.com/plugins/likebox.php?href=https://www.facebook.com/ZEECorporate/&colorscheme=light&show_faces=false&border_color&stream=true&header=false&height=395\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\" style=\"margin: 0 auto\"></iframe>-->\n                    <!--<iframe class=\"facebook-iframe\" src=\"http://www.facebook.com/plugins/likebox.php?href=https://www.facebook.com/ZEECorporate/&width=500&colorscheme=light&show_faces=true&border_color&stream=true&header=true&height=395\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\"></iframe>-->\n                </div>\n                <div class=\"mtb-20\">\n                    <a href=\"javascript:void(0);\" class=\"cta-link text-uppercase\">View on Facebook<span></span></a>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.newsList = [
            { newsDate: "SEPTEMBER 12, 2017", newsInfo: "EEL Donates $2.5 Million in Humanitarian Aid to Support Women Em...", newsLink: "" },
            { newsDate: "SEPTEMBER 12, 2017", newsInfo: "ZEE Digital Network Brings Fresh, Original Content Directly to Fa...", newsLink: "" },
            { newsDate: "SEPTEMBER 12, 2017", newsInfo: "ZEEL IN NEWS Press Release for proposed demerger of the Media Bus...", newsLink: "" }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var owlHome = $('.home-pg-slider');
        owlHome.owlCarousel({
            navigation: true,
            navText: ["<i class='icon64 icon-nav-left'></i>", "<i class='icon64 icon-nav-right'></i>"],
            nav: true,
            items: 1,
            loop: true,
            margin: 10,
            autoplay: 300,
            autoplaySpeed: 1000,
            autoplayHoverPause: false,
            navSpeed: 1000
        });
        //Spokesperson slider
        $('#spokesperson-slider').owlCarousel({
            navigation: true,
            navText: ["<i class='icon48 icon-nav-left'></i>", "<i class='icon48 icon-nav-right'></i>"],
            nav: true,
            items: 1,
            loop: true,
            autoplay: true,
            autoplaySpeed: 600,
            autoplayHoverPause: true,
            navSpeed: 1000,
            margin: 20,
            video: true,
            lazyLoad: true,
            dots: true,
        });
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/management-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SeniorManagement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagementServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SeniorManagement = (function () {
    function SeniorManagement() {
    }
    return SeniorManagement;
}());

var ManagementServiceService = (function () {
    function ManagementServiceService() {
        this.seniorList = [
            {
                name: "Mr. Punit Goenka",
                profile: "Managing Director and CEO",
                img: "assets/images/people/punit_goenka.jpg"
            },
            {
                name: "Mr. Punit Goenka",
                profile: "Managing Director and CEO",
                img: "assets/images/people/punit_goenka.jpg"
            },
            {
                name: "Mr. Punit Goenka",
                profile: "Managing Director and CEO",
                img: "assets/images/people/punit_goenka.jpg"
            },
            {
                name: "Mr. Punit Goenka",
                profile: "Managing Director and CEO",
                img: "assets/images/people/punit_goenka.jpg"
            },
            {
                name: "Mr. Punit Goenka",
                profile: "Managing Director and CEO",
                img: "assets/images/people/punit_goenka.jpg"
            },
            {
                name: "Mr. Punit Goenka",
                profile: "Managing Director and CEO",
                img: "assets/images/people/punit_goenka.jpg"
            },
            {
                name: "Mr. Punit Goenka",
                profile: "Managing Director and CEO",
                img: "assets/images/people/punit_goenka.jpg"
            },
            {
                name: "Mr. Punit Goenka",
                profile: "Managing Director and CEO",
                img: "assets/images/people/punit_goenka.jpg"
            }
        ];
    }
    ManagementServiceService.prototype.getManagementList = function () {
        return this.seniorList;
    };
    ManagementServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ManagementServiceService);
    return ManagementServiceService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map