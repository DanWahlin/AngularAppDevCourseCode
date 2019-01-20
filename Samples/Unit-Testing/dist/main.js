(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'co-root',
            template: "\n    <router-outlet></router-outlet>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _customers_customers_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers/customers.module */ "./src/app/customers/customers.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _customers_customers_module__WEBPACK_IMPORTED_MODULE_5__["CustomersModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _sorter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sorter.service */ "./src/app/core/sorter.service.ts");





var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _sorter_service__WEBPACK_IMPORTED_MODULE_4__["SorterService"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/data.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.baseUrl = 'assets/';
    }
    DataService.prototype.getCustomers = function () {
        return this.http.get(this.baseUrl + 'customers.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DataService.prototype.getCustomer = function (id) {
        return this.http.get(this.baseUrl + 'customers.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            var customer = res.filter(function (cust) { return cust.id === id; });
            return (customer && customer.length) ? customer[0] : null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DataService.prototype.getOrders = function (id) {
        return this.http.get(this.baseUrl + 'orders.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            var orders = res.filter(function (order) { return order.customerId === id; });
            return orders;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    //Only used for unit test (not used in actual app)
    DataService.prototype.insertCustomer = function (customer) {
        return this.http.post(this.baseUrl + '/customer', customer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DataService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            var errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'Server error');
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/core/property-resolver.ts":
/*!*******************************************!*\
  !*** ./src/app/core/property-resolver.ts ***!
  \*******************************************/
/*! exports provided: propertyResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propertyResolver", function() { return propertyResolver; });
var propertyResolver = /** @class */ (function () {
    function propertyResolver() {
    }
    propertyResolver.resolve = function (path, obj) {
        return path.split('.').reduce(function (prev, curr) {
            return (prev ? prev[curr] : undefined);
        }, obj || self);
    };
    return propertyResolver;
}());



/***/ }),

/***/ "./src/app/core/sorter.service.ts":
/*!****************************************!*\
  !*** ./src/app/core/sorter.service.ts ***!
  \****************************************/
/*! exports provided: SorterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorterService", function() { return SorterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _property_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property-resolver */ "./src/app/core/property-resolver.ts");



var SorterService = /** @class */ (function () {
    function SorterService() {
        this.property = null;
        this.direction = 1;
    }
    SorterService.prototype.sort = function (collection, prop) {
        var _this = this;
        this.property = prop;
        this.direction = (this.property === prop) ? this.direction * -1 : 1;
        collection.sort(function (a, b) {
            var aVal;
            var bVal;
            //Handle resolving complex properties such as 'state.name' for prop value
            if (prop && prop.indexOf('.') > -1) {
                aVal = _property_resolver__WEBPACK_IMPORTED_MODULE_2__["propertyResolver"].resolve(prop, a);
                bVal = _property_resolver__WEBPACK_IMPORTED_MODULE_2__["propertyResolver"].resolve(prop, b);
            }
            else {
                aVal = a[prop];
                bVal = b[prop];
            }
            //Fix issues that spaces before/after string value can cause such as ' San Francisco'
            if (_this.isString(aVal))
                aVal = aVal.trim().toUpperCase();
            if (_this.isString(bVal))
                bVal = bVal.trim().toUpperCase();
            if (aVal === bVal) {
                return 0;
            }
            else if (aVal > bVal) {
                return _this.direction * -1;
            }
            else {
                return _this.direction * 1;
            }
        });
    };
    SorterService.prototype.isString = function (val) {
        return (val && (typeof val === 'string' || val instanceof String));
    };
    SorterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SorterService);
    return SorterService;
}());



/***/ }),

/***/ "./src/app/customer-orders/customer-orders.component.html":
/*!****************************************************************!*\
  !*** ./src/app/customer-orders/customer-orders.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"customer\">\n    <h4>Orders for {{ customer.name | capitalize }}</h4>\n    <br />\n    <table class=\"table table-striped table-hover orders-table\" \n           *ngFor=\"let order of orders\">\n        <tr *ngFor=\"let orderItem of order.orderItems\">\n            <td>{{ orderItem.productName }}</td>\n            <td>${{ orderItem.itemCost | currency:'USD':'symbol' }}</td>    \n        </tr>\n    </table>\n</div>\n<div *ngIf=\"!customer\" class=\"row\">\n   No customer found\n</div>  \n<br />\n<a routerLink=\"/customers\">View All Customers</a>\n\n"

/***/ }),

/***/ "./src/app/customer-orders/customer-orders.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/customer-orders/customer-orders.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomerOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerOrdersComponent", function() { return CustomerOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");




var CustomerOrdersComponent = /** @class */ (function () {
    function CustomerOrdersComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.orders = [];
    }
    CustomerOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.params['id'];
        this.dataService.getOrders(id).subscribe(function (orders) {
            _this.orders = orders;
        });
        this.dataService.getCustomer(id).subscribe(function (customer) {
            _this.customer = customer;
        });
    };
    CustomerOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'co-customer-orders',
            template: __webpack_require__(/*! ./customer-orders.component.html */ "./src/app/customer-orders/customer-orders.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CustomerOrdersComponent);
    return CustomerOrdersComponent;
}());



/***/ }),

/***/ "./src/app/customers-list/customers-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/customers-list/customers-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\n<br />\n<co-filter-textbox (changed)=\"filter($event)\"></co-filter-textbox>\n<br />\n<br />\n<table class=\"table table-striped\">\n    <tr>\n        <th (click)=\"sort('name')\">Name</th>\n        <th (click)=\"sort('city')\">City</th>\n        <th (click)=\"sort('orderTotal')\">Order Total</th>\n    </tr>\n    <tr *ngFor=\"let cust of filteredCustomers;trackBy:customerTrackBy;\">\n        <td>\n            <a [routerLink]=\"['/orders', cust.id]\">\n                {{ cust.name | capitalize }}\n            </a>\n        </td>\n        <td>{{ cust.city }}</td>\n        <td>{{ cust.orderTotal | currency:currencyCode:'symbol' }}\n    </tr>\n    <tr>\n        <td colspan=\"2\">&nbsp;</td>\n        <td>\n            {{ customersOrderTotal | currency:currencyCode:'symbol' }}\n        </td>\n    </tr>\n    <tr *ngIf=\"!filteredCustomers || !filteredCustomers.length\">\n        <td colspan=\"4\">No customers found</td>\n    </tr>\n</table>\n<br />\nNumber of Customers: {{ filteredCustomers.length }}\n<br />"

/***/ }),

/***/ "./src/app/customers-list/customers-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/customers-list/customers-list.component.ts ***!
  \************************************************************/
/*! exports provided: CustomersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersListComponent", function() { return CustomersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_sorter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/sorter.service */ "./src/app/core/sorter.service.ts");



var CustomersListComponent = /** @class */ (function () {
    function CustomersListComponent(sorter) {
        this.sorter = sorter;
        this._customers = [];
        this.filteredCustomers = [];
        this.currencyCode = 'USD';
    }
    Object.defineProperty(CustomersListComponent.prototype, "customers", {
        get: function () {
            return this._customers;
        },
        set: function (value) {
            if (value) {
                this.filteredCustomers = this._customers = value;
                this.calculateOrders();
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    CustomersListComponent.prototype.ngOnInit = function () {
        this.title = 'Customers';
    };
    CustomersListComponent.prototype.calculateOrders = function () {
        var _this = this;
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach(function (cust) {
            _this.customersOrderTotal += cust.orderTotal;
        });
    };
    CustomersListComponent.prototype.filter = function (data) {
        if (data) {
            this.filteredCustomers = this.customers.filter(function (cust) {
                return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1;
            });
            this.calculateOrders();
        }
        else {
            this.filteredCustomers = this.customers;
        }
    };
    CustomersListComponent.prototype.sort = function (prop) {
        this.sorter.sort(this.filteredCustomers, prop);
    };
    CustomersListComponent.prototype.customerTrackBy = function (index, customer) {
        return customer.id;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], CustomersListComponent.prototype, "customers", null);
    CustomersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'co-customers-list',
            template: __webpack_require__(/*! ./customers-list.component.html */ "./src/app/customers-list/customers-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_sorter_service__WEBPACK_IMPORTED_MODULE_2__["SorterService"]])
    ], CustomersListComponent);
    return CustomersListComponent;
}());



/***/ }),

/***/ "./src/app/customers-list/filter-textbox.component.ts":
/*!************************************************************!*\
  !*** ./src/app/customers-list/filter-textbox.component.ts ***!
  \************************************************************/
/*! exports provided: FilterTextboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTextboxComponent", function() { return FilterTextboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterTextboxComponent = /** @class */ (function () {
    function FilterTextboxComponent() {
        this.filter = null;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FilterTextboxComponent.prototype.ngOnInit = function () {
    };
    FilterTextboxComponent.prototype.filterChanged = function (event) {
        event.preventDefault();
        this.changed.emit(this.filter); //Raise changed event
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FilterTextboxComponent.prototype, "changed", void 0);
    FilterTextboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'co-filter-textbox',
            template: "    \n        Filter: <input type=\"text\" [(ngModel)]=\"filter\" (keyup)=\"filterChanged($event)\" />\n              <!--<button [disabled]=\"!filter\" (click)=\"filterChanged($event)\">Filter</button>-->\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilterTextboxComponent);
    return FilterTextboxComponent;
}());



/***/ }),

/***/ "./src/app/customers/customers.component.html":
/*!****************************************************!*\
  !*** ./src/app/customers/customers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<co-customers-list [customers]=\"people\"></co-customers-list>"

/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");



var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(dataservice) {
        this.dataservice = dataservice;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getCustomers()
            .subscribe(function (customers) { return _this.people = customers; });
    };
    CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'co-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/customers/customers.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/customers/customers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/customers/customers.module.ts ***!
  \***********************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _customers_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers.routing */ "./src/app/customers/customers.routing.ts");






var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _customers_routing__WEBPACK_IMPORTED_MODULE_5__["customersRouting"].routes],
            declarations: [_customers_routing__WEBPACK_IMPORTED_MODULE_5__["customersRouting"].components]
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ }),

/***/ "./src/app/customers/customers.routing.ts":
/*!************************************************!*\
  !*** ./src/app/customers/customers.routing.ts ***!
  \************************************************/
/*! exports provided: customersRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customersRouting", function() { return customersRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customers-list/customers-list.component */ "./src/app/customers-list/customers-list.component.ts");
/* harmony import */ var _customers_list_filter_textbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customers-list/filter-textbox.component */ "./src/app/customers-list/filter-textbox.component.ts");
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _customer_orders_customer_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer-orders/customer-orders.component */ "./src/app/customer-orders/customer-orders.component.ts");





var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/customers' },
    { path: 'customers', component: _customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"] },
    { path: 'orders/:id', component: _customer_orders_customer_orders_component__WEBPACK_IMPORTED_MODULE_4__["CustomerOrdersComponent"] }
];
var customersRouting = {
    routes: _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes),
    components: [_customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"], _customer_orders_customer_orders_component__WEBPACK_IMPORTED_MODULE_4__["CustomerOrdersComponent"],
        _customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_1__["CustomersListComponent"], _customers_list_filter_textbox_component__WEBPACK_IMPORTED_MODULE_2__["FilterTextboxComponent"]]
};


/***/ }),

/***/ "./src/app/shared/capitalize.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/capitalize.pipe.ts ***!
  \*******************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    };
    CapitalizePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'capitalize' })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./capitalize.pipe */ "./src/app/shared/capitalize.pipe.ts");



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_capitalize_pipe__WEBPACK_IMPORTED_MODULE_2__["CapitalizePipe"]],
            exports: [_capitalize_pipe__WEBPACK_IMPORTED_MODULE_2__["CapitalizePipe"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danwahlin/Dropbox/Projects/GitHub/Courses/AngularAppDevCourseCode/Samples/Unit-Testing/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map