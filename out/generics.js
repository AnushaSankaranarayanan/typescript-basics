"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Generics
function echo(arg) {
    return arg;
}
//number and string examples
var myVar = echo(1);
var myVar1 = echo("string");
console.log(myVar);
console.log(myVar1);
var Person1 = /** @class */ (function () {
    function Person1(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person1.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person1;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Admin;
}(Person1));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(Person1));
var admin = new Admin('admin', 'admin');
var manager = new Manager('manager', 'manager');
//Generics with extends
function personEcho(person) {
    return person;
}
console.log(personEcho(admin)); // should be Admin
console.log(personEcho(manager)); // should be Manager
