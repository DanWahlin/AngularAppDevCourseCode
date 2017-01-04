"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var CustomersListComponent = (function () {
    function CustomersListComponent() {
        this.customersOrderTotal = 0;
        this.currencyCode = 'USD';
    }
    CustomersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = 'Customers';
        this.customers = [
            { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
            { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22) },
            { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31) },
        ];
        this.customers.forEach(function (cust) {
            _this.customersOrderTotal += cust.orderTotal;
        });
    };
    CustomersListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customers-list',
            templateUrl: 'customers-list.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CustomersListComponent);
    return CustomersListComponent;
}());
exports.CustomersListComponent = CustomersListComponent;
//# sourceMappingURL=customers-list.component.js.map