webpackJsonp([2],{

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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p{\n    margin-top: 100px;\n}\n\n.user-input {\n    width: 200px;\n    height: 40px;\n    display: inline;\n    font-size: 3rem;\n    font-weight: bold;\n}\n\n.card-title {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.card-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.card {\n    background-color: lightblue;\n    padding: 10px 40px 20px;\n    margin: 20px;\n    border-radius: 5px;\n}\n\n.card ul {\n    margin: 0;\n    padding: 0;\n}\n\nul li {\n    list-style-type: square;\n}\n\n#btnSave { \n    width: 100%;\n}\n\n.mtl {\n    margin-top: 20px;\n}\n\n@media screen and (min-width: 786px) {\n    .card {\n        min-width: 300px;\n        max-width: 300px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">\n    Expense Manager\n    <input class=\"form-control user-input text-capitalize\" [value]=\"user\" (keyup.enter)=\"updateUser($event)\" placeholder=\"user name (press enter)\">\n</h1>\n<div class=\"container\">\n    <div *ngIf=\"user\" class=\"card-container\">\n        <div class=\"card\">\n            <div class=\"card-block\">\n                <h4 class=\"card-title text-center text-uppercase\">Add New Expense</h4>\n                <div class=\"row mtl\" [class.has-error]=\"!newExpense.name && !valid\">\n                    <input name=\"name\" [(ngModel)]=\"newExpense.name\" type=\"text\" placeholder=\"expense name\" class=\"form-control\">\n                </div>\n                <div class=\"row mtl\" [class.has-error]=\"!newExpense.name && !valid\">\n                    <input name=\"amount\" [(ngModel)]=\"newExpense.amount\" type=\"number\" placeholder=\"expense amount\" class=\"form-control\">\n                </div>\n                <div class=\"row mtl\" [class.has-error]=\"!newExpense.name && !valid\">\n                    <input name=\"description\" [(ngModel)]=\"newExpense.description\" type=\"text\" placeholder=\"expense description\" class=\"form-control\">\n                </div>\n                <div class=\"row mtl\">\n                    <button id=\"btnSave\" class=\"btn btn-sm btn-primary text-center\" [disabled]=\"!newExpense.name || !newExpense.amount || !newExpense.description\"\n                        (click)=\"save()\">\n                    SAVE &nbsp; <i class=\"glyphicon glyphicon-upload\"></i>\n                </button>\n                </div>\n            </div>\n        </div>\n        <ng-container *ngIf=\"expenses && expenses.length\">\n            <div *ngFor=\"let expense of expenses\" class=\"card\">\n                <div class=\"card-block\">\n                    <h4 class=\"card-title text-center text-uppercase\">{{expense.name}}</h4>\n                    <div class=\"row mtl\">\n                        <input name=\"name\" [(ngModel)]=\"expense.name\" type=\"text\" placeholder=\"expense name\" class=\"form-control\">\n                    </div>\n                    <div class=\"row mtl\">\n                        <input name=\"amount\" [(ngModel)]=\"expense.amount\" type=\"number\" placeholder=\"expense amount\" class=\"form-control\">\n                    </div>\n                    <div class=\"row mtl\">\n                        <input name=\"description\" [(ngModel)]=\"expense.description\" type=\"text\" placeholder=\"expense description\" class=\"form-control\">\n                    </div>\n                    <div class=\"row mtl\">\n                        <button class=\"btn btn-sm btn-primary text-center\" [disabled]=\"!expense.name || !expense.amount || !expense.description\" (click)=\"update(expense)\">\n                        UPDATE &nbsp; <i class=\"glyphicon glyphicon-upload\"></i>\n                    </button>\n                        <button class=\"btn btn-sm btn-danger text-center pull-right\" [disabled]=\"!expense.name || !expense.amount || !expense.description\" (click)=\"delete(expense)\">\n                        DELETE &nbsp; <i class=\"glyphicon glyphicon-remove\"></i>\n                    </button>\n                    </div>\n                </div>\n            </div>\n        </ng-container>\n    </div>\n    <div *ngIf=\"user && (!expenses || !expenses.length)\" class=\"row\">\n        <div class=\"text-center text-primary\">\n            No Records found!\n        </div>\n    </div>\n    <div *ngIf=\"!user\" class=\"row\">\n        <p class=\"text-center text-primary\">\n            Please enter your user name & press enter to access expenses!\n        </p>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_expense__ = __webpack_require__("../../../../../src/app/models/expense.ts");
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
    function AppComponent(_db) {
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
    AppComponent.prototype.updateUser = function (event) {
        if (!event.target.value) {
            return;
        }
        location.search = "user=" + event.target.value.toLowerCase();
    };
    AppComponent.prototype.save = function () {
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
    AppComponent.prototype.update = function (expense) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2__models_expense__["a" /* Expense */].validate(expense)) {
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
        this._db.list("/" + this.user.trim().toLowerCase() + "/logs/" + expense.$key).push(__WEBPACK_IMPORTED_MODULE_2__models_expense__["a" /* Expense */].getLogs(expense));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuthModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

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

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCyB4cu00prvg504Y_XXVlZaJ15GErwJG8',
        databaseURL: 'https://mark-it-1.firebaseio.com/',
        projectId: 'mark-it-1',
        storageBucket: 'mark-it-1',
        messagingSenderId: 'chalodem@gmail.com'
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