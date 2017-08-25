webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routes; });

var Routes = [
    {
        path: '*',
        component: __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]
    }
];
//# sourceMappingURL=app-routes.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n    background-color: #337ab7;\n}\n\n.navbar-header {\n    margin: 0;\n}\n\n.glyphicon {\n    color: white;\n    cursor: pointer;\n}\n\n.glyphicon:hover {\n    color: white;\n}\n\n.user-menu {\n    display: block;\n    margin: 0;\n    min-width: 0;\n}\n\n.user-menu a {\n    cursor: pointer;\n}\n\np{\n    margin-top: 100px;\n}\n\n.user-input {\n    width: 200px;\n    height: 40px;\n    display: inline;\n    font-size: 3rem;\n    font-weight: bold;\n}\n\n.card-title {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.card-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n\n.card {\n    background-color: lightblue;\n    padding: 10px 40px 20px;\n    margin: 20px;\n    border-radius: 5px;\n}\n\n.new-card {\n    position: absolute;\n    left: 0;\n    margin: auto;\n}\n\n.close-card{\n    right: -30px;\n    font-size: large;\n}\n\n#btnSave { \n    width: 100%;\n}\n\n.mtl {\n    margin-top: 20px;\n}\n\n@media screen and (min-width: 786px) {\n    .card {\n        min-width: 300px;\n        max-width: 300px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- header -->\n<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header col-lg-12\">\n            <span class=\"navbar-brand glyphicon glyphicon-home\"></span>\n            <span class=\"navbar-brand glyphicon glyphicon-menu-hamburger pull-right\" (click)=\"showOptions = !showOptions;\"></span>\n            <span class=\"navbar-brand glyphicon glyphicon glyphicon-plus-sign pull-right\" (click)=\"showCard = true;\"></span>\n            <ul class=\"dropdown-menu user-menu pull-right hidden\" [class.hidden]=\"!showOptions\">\n                <li><a (click)=\"showOptions = !showOptions;\" [routerLink]=\"['profile']\">Profile</a></li>\n                <li role=\"separator\" class=\"divider\"></li>\n                <li *ngIf=\"user\"><a (click)=\"signOut(); showOptions = !showOptions;\">Sign Out</a></li>\n                <li *ngIf=\"!user\"><a (click)=\"signIn(); showOptions = !showOptions;\">Sign In</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<!-- header ends -->\n\n<!-- body -->\n<div class=\"container\">\n    <div *ngIf=\"user\" class=\"card-container\">\n        <div *ngIf=\"showCard\" class=\"card\">\n            <span class=\"glyphicon glyphicon-remove pull-right close-card\" (click)=\"showCard = false;\"></span>\n            <div class=\"card-block\">\n                <h4 class=\"card-title text-center text-uppercase\">\n                    New Expense\n                </h4>\n                <div class=\"row mtl\" [class.has-error]=\"!newExpense.name && !valid\">\n                    <input name=\"name\" [(ngModel)]=\"newExpense.name\" type=\"text\" placeholder=\"expense name\" class=\"form-control\">\n                </div>\n                <div class=\"row mtl\" [class.has-error]=\"!newExpense.name && !valid\">\n                    <input name=\"amount\" [(ngModel)]=\"newExpense.amount\" type=\"number\" placeholder=\"expense amount\" class=\"form-control\">\n                </div>\n                <div class=\"row mtl\" [class.has-error]=\"!newExpense.name && !valid\">\n                    <input name=\"description\" [(ngModel)]=\"newExpense.description\" type=\"text\" placeholder=\"expense description\" class=\"form-control\">\n                </div>\n                <div class=\"row mtl\">\n                    <button id=\"btnSave\" class=\"btn btn-sm btn-primary text-center\" [disabled]=\"!newExpense.name || !newExpense.amount || !newExpense.description\"\n                        (click)=\"save(); showCard = false;\">\n                        SAVE &nbsp; <i class=\"glyphicon glyphicon-upload\"></i>\n                    </button>\n                </div>\n            </div>\n        </div>\n        <ng-container *ngIf=\"expenses && expenses.length\">\n            <div *ngFor=\"let expense of expenses\" class=\"card\">\n                <div class=\"card-block\">\n                    <h4 class=\"card-title text-center text-uppercase\">{{expense.name}}</h4>\n                    <div class=\"row mtl\">\n                        <input name=\"name\" [(ngModel)]=\"expense.name\" type=\"text\" placeholder=\"expense name\" class=\"form-control\">\n                    </div>\n                    <div class=\"row mtl\">\n                        <input name=\"amount\" [(ngModel)]=\"expense.amount\" type=\"number\" placeholder=\"expense amount\" class=\"form-control\">\n                    </div>\n                    <div class=\"row mtl\">\n                        <input name=\"description\" [(ngModel)]=\"expense.description\" type=\"text\" placeholder=\"expense description\" class=\"form-control\">\n                    </div>\n                    <div class=\"row mtl\">\n                        <button class=\"btn btn-sm btn-primary text-center\" [disabled]=\"!expense.name || !expense.amount || !expense.description\"\n                            (click)=\"update(expense)\">\n                            UPDATE &nbsp; <i class=\"glyphicon glyphicon-upload\"></i>\n                        </button>\n                        <button class=\"btn btn-sm btn-danger text-center pull-right\" [disabled]=\"!expense.name || !expense.amount || !expense.description\"\n                            (click)=\"delete(expense)\">\n                            DELETE &nbsp; <i class=\"glyphicon glyphicon-remove\"></i>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </ng-container>\n    </div>\n    <div *ngIf=\"user && (!expenses || !expenses.length)\" class=\"row\">\n        <div class=\"text-center text-primary\">\n            No Records found!\n        </div>\n    </div>\n    <div *ngIf=\"!user\" class=\"row\">\n        <p class=\"text-center text-primary\">\n            Please enter your user name & press enter to access expenses!\n        </p>\n    </div>\n</div>\n<!-- body ends -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_expense__ = __webpack_require__("../../../../../src/app/models/expense.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(_AngularFireAuth, _db) {
        this._AngularFireAuth = _AngularFireAuth;
        this._db = _db;
        this.expenses = [];
        this.newExpense = new __WEBPACK_IMPORTED_MODULE_4__models_expense__["a" /* Expense */]();
        this.valid = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._AngularFireAuth.authState.subscribe(function (user) {
            if (user) {
                _this.updateStorage(user);
                _this.initialiseDatabase();
            }
        });
    };
    AppComponent.prototype.save = function () {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_4__models_expense__["a" /* Expense */].validate(this.newExpense)) {
            return;
        }
        this.newExpense.addedOn = new Date().toLocaleString();
        this.newExpense.updatedOn = new Date().toLocaleString();
        this.newExpense.isDeleted = false;
        this.dbList.push(this.newExpense).then(function (response) {
            _this.newExpense.$key = response.key;
            _this.saveLogs(_this.newExpense);
            _this.newExpense = new __WEBPACK_IMPORTED_MODULE_4__models_expense__["a" /* Expense */]();
        }).catch(function (error) { return console.log(error); });
    };
    AppComponent.prototype.update = function (expense) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_4__models_expense__["a" /* Expense */].validate(expense)) {
            expense.updatedOn = new Date().toLocaleString();
            expense.isDeleted = false;
            this.dbList.set(expense.$key, expense).then(function (response) { return _this.saveLogs(expense); }).catch(function (error) { return console.log(error); });
        }
    };
    AppComponent.prototype.delete = function (expense) {
        var _this = this;
        if (!expense || !expense.$key) {
            return;
        }
        expense.isDeleted = true;
        // this.dbList.remove(expense.$key).then((response: any) => console.log(response)).catch((error: any) => console.log(error));
        this.dbList.set(expense.$key, expense).then(function (response) { return _this.saveLogs(expense); }).catch(function (error) { return console.log(error); });
    };
    AppComponent.prototype.saveLogs = function (expense) {
        this._db.list("/" + this.user.uid + "/logs/" + expense.$key).push(__WEBPACK_IMPORTED_MODULE_4__models_expense__["a" /* Expense */].getLogs(expense));
    };
    AppComponent.prototype.initialiseDatabase = function () {
        var _this = this;
        if (this.user && this.user.uid) {
            this.dbList = this._db.list("/" + this.user.uid + "/expenses");
            this.dbList.subscribe(function (response) {
                if (response && response.length) {
                    _this.expenses = response.filter(function (item) {
                        return !item.isDeleted;
                    });
                }
            });
        }
    };
    AppComponent.prototype.signOut = function () {
        var _this = this;
        this._AngularFireAuth.auth.signOut().then(function (response) {
            _this.user = null;
            sessionStorage.removeItem('user');
        });
    };
    AppComponent.prototype.signIn = function () {
        this._AngularFireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].GoogleAuthProvider());
    };
    AppComponent.prototype.updateStorage = function (user) {
        this.user = {
            displayName: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            providerId: user.providerId,
            uid: user.uid
        };
        sessionStorage.setItem('user', JSON.stringify(this.user));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routes__ = __webpack_require__("../../../../../src/app/app-routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_routes__["a" /* Routes */]),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuthModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__auth_guard_service__["a" /* CanActivateViaAuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateViaAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateViaAuthGuard = (function () {
    function CanActivateViaAuthGuard(_AngularFireAuth, _Router) {
        this._AngularFireAuth = _AngularFireAuth;
        this._Router = _Router;
    }
    CanActivateViaAuthGuard.prototype.canActivate = function () {
        var user = sessionStorage.getItem('user');
        if (user) {
            try {
                user = JSON.parse(user);
                if (user && user.email && user.providerId) {
                    return true;
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        this._Router.navigate(['login']);
        return false;
    };
    return CanActivateViaAuthGuard;
}());
CanActivateViaAuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CanActivateViaAuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p{\n    margin-top: 100px;\n}\n\n.user-input {\n    width: 200px;\n    height: 40px;\n    display: inline;\n    font-size: 3rem;\n    font-weight: bold;\n}\n\n.card-title {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.card-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.card {\n    background-color: lightblue;\n    padding: 10px 40px 20px;\n    margin: 20px;\n    border-radius: 5px;\n}\n\n.card ul {\n    margin: 0;\n    padding: 0;\n}\n\nul li {\n    list-style-type: square;\n}\n\n#btnSave { \n    width: 100%;\n}\n\n.mtl {\n    margin-top: 20px;\n}\n\n@media screen and (min-width: 786px) {\n    .card {\n        min-width: 300px;\n        max-width: 300px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">\n    Expense Manager\n    <input class=\"form-control user-input text-capitalize\" [value]=\"user\" (keyup.enter)=\"updateUser($event)\" placeholder=\"user name (press enter)\">\n</h1>\n<div class=\"container\">\n    <div *ngIf=\"user\" class=\"card-container\">\n        <div class=\"card\">\n            <div class=\"card-block\">\n                <h4 class=\"card-title text-center text-uppercase\">Add New Expense</h4>\n                <div class=\"row mtl\" [class.has-error]=\"!newExpense.name && !valid\">\n                    <input name=\"name\" [(ngModel)]=\"newExpense.name\" type=\"text\" placeholder=\"expense name\" class=\"form-control\">\n                </div>\n                <div class=\"row mtl\" [class.has-error]=\"!newExpense.name && !valid\">\n                    <input name=\"amount\" [(ngModel)]=\"newExpense.amount\" type=\"number\" placeholder=\"expense amount\" class=\"form-control\">\n                </div>\n                <div class=\"row mtl\" [class.has-error]=\"!newExpense.name && !valid\">\n                    <input name=\"description\" [(ngModel)]=\"newExpense.description\" type=\"text\" placeholder=\"expense description\" class=\"form-control\">\n                </div>\n                <div class=\"row mtl\">\n                    <button id=\"btnSave\" class=\"btn btn-sm btn-primary text-center\" [disabled]=\"!newExpense.name || !newExpense.amount || !newExpense.description\"\n                        (click)=\"save()\">\n                    SAVE &nbsp; <i class=\"glyphicon glyphicon-upload\"></i>\n                </button>\n                </div>\n            </div>\n        </div>\n        <ng-container *ngIf=\"expenses && expenses.length\">\n            <div *ngFor=\"let expense of expenses\" class=\"card\">\n                <div class=\"card-block\">\n                    <h4 class=\"card-title text-center text-uppercase\">{{expense.name}}</h4>\n                    <div class=\"row mtl\">\n                        <input name=\"name\" [(ngModel)]=\"expense.name\" type=\"text\" placeholder=\"expense name\" class=\"form-control\">\n                    </div>\n                    <div class=\"row mtl\">\n                        <input name=\"amount\" [(ngModel)]=\"expense.amount\" type=\"number\" placeholder=\"expense amount\" class=\"form-control\">\n                    </div>\n                    <div class=\"row mtl\">\n                        <input name=\"description\" [(ngModel)]=\"expense.description\" type=\"text\" placeholder=\"expense description\" class=\"form-control\">\n                    </div>\n                    <div class=\"row mtl\">\n                        <button class=\"btn btn-sm btn-primary text-center\" [disabled]=\"!expense.name || !expense.amount || !expense.description\"\n                            (click)=\"update(expense)\">\n                        UPDATE &nbsp; <i class=\"glyphicon glyphicon-upload\"></i>\n                    </button>\n                        <button class=\"btn btn-sm btn-danger text-center pull-right\" [disabled]=\"!expense.name || !expense.amount || !expense.description\"\n                            (click)=\"delete(expense)\">\n                        DELETE &nbsp; <i class=\"glyphicon glyphicon-remove\"></i>\n                    </button>\n                    </div>\n                </div>\n            </div>\n        </ng-container>\n    </div>\n    <div *ngIf=\"user && (!expenses || !expenses.length)\" class=\"row\">\n        <div class=\"text-center text-primary\">\n            No Records found!\n        </div>\n    </div>\n    <div *ngIf=\"!user\" class=\"row\">\n        <p class=\"text-center text-primary\">\n            Please enter your user name & press enter to access expenses!\n        </p>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_expense__ = __webpack_require__("../../../../../src/app/models/expense.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    function HomeComponent(_db) {
        var _this = this;
        this._db = _db;
        this.user = "";
        this.expenses = [];
        this.newExpense = new __WEBPACK_IMPORTED_MODULE_2__models_expense__["a" /* Expense */]();
        this.valid = true;
        var user = location.search;
        if (user.indexOf('?user=') >= 0) {
            this.user = user.split('?user=')[1];
        }
        if (this.user) {
            this.dbList = this._db.list("/" + this.user.trim().toLowerCase() + "/expenses");
            this.dbList.subscribe(function (response) {
                if (response && response.length) {
                    _this.expenses = response.filter(function (item) {
                        return !item.isDeleted;
                    });
                }
            });
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.updateUser = function (event) {
        if (!event.target.value) {
            return;
        }
        location.search = "user=" + event.target.value.toLowerCase();
    };
    HomeComponent.prototype.save = function () {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_2__models_expense__["a" /* Expense */].validate(this.newExpense)) {
            return;
        }
        this.newExpense.addedOn = new Date().toLocaleString();
        this.newExpense.updatedOn = new Date().toLocaleString();
        this.newExpense.isDeleted = false;
        this.dbList.push(this.newExpense).then(function (response) {
            _this.newExpense.$key = response.key;
            _this.saveLogs(_this.newExpense);
            _this.newExpense = new __WEBPACK_IMPORTED_MODULE_2__models_expense__["a" /* Expense */]();
        }).catch(function (error) { return console.log(error); });
    };
    HomeComponent.prototype.update = function (expense) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2__models_expense__["a" /* Expense */].validate(expense)) {
            expense.updatedOn = new Date().toLocaleString();
            expense.isDeleted = false;
            this.dbList.set(expense.$key, expense).then(function (response) { return _this.saveLogs(expense); }).catch(function (error) { return console.log(error); });
        }
    };
    HomeComponent.prototype.delete = function (expense) {
        var _this = this;
        if (!expense || !expense.$key) {
            return;
        }
        expense.isDeleted = true;
        // this.dbList.remove(expense.$key).then((response: any) => console.log(response)).catch((error: any) => console.log(error));
        this.dbList.set(expense.$key, expense).then(function (response) { return _this.saveLogs(expense); }).catch(function (error) { return console.log(error); });
    };
    HomeComponent.prototype.saveLogs = function (expense) {
        this._db.list("/" + this.user.trim().toLowerCase() + "/logs/" + expense.$key).push(__WEBPACK_IMPORTED_MODULE_2__models_expense__["a" /* Expense */].getLogs(expense));
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n<button class=\"btn btn-primary\" (click)=\"signIn()\">Sign In</button>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_AngularFireAuth, _Router) {
        this._AngularFireAuth = _AngularFireAuth;
        this._Router = _Router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._AngularFireAuth.authState.subscribe(function (user) {
            if (user) {
                sessionStorage.setItem('user', JSON.stringify({
                    displayName: user.displayName,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    photoURL: user.photoURL,
                    providerId: user.providerId,
                    uid: user.uid
                }));
                _this._Router.navigate(['/']);
            }
        });
    };
    LoginComponent.prototype.signIn = function () {
        this._AngularFireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].GoogleAuthProvider());
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/expense.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Expense; });
var Expense = (function () {
    function Expense() {
    }
    Expense.validate = function (expense) {
        return !!expense.name && !!expense.amount && !!expense.description;
    };
    Expense.getLogs = function (expense) {
        if (!Expense.validate(expense)) {
            return null;
        }
        return "Name - " + expense.name + "\nAmount - " + expense.amount + "\nDescription - " + expense.description + "\nAdded On " + expense.addedOn + "\nUpdated On - " + expense.updatedOn + "\nDeleted - " + expense.isDeleted;
    };
    return Expense;
}());

//# sourceMappingURL=expense.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCyB4cu00prvg504Y_XXVlZaJ15GErwJG8",
        authDomain: "mark-it-1.firebaseapp.com",
        databaseURL: "https://mark-it-1.firebaseio.com",
        projectId: "mark-it-1",
        storageBucket: "mark-it-1.appspot.com",
        messagingSenderId: "978631038383"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map