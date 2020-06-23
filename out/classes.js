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
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person() {
        //readonly properties can be assigned either during declaration or in constrcutor
        this.greetMessage = "Hello there!!";
        this.firstName = "N/A";
        this.lastName = "N/A";
    }
    Person.prototype.greet = function () {
        console.log(this.greetMessage);
    };
    Person.prototype.getFullName = function () {
        return this.getFirstName() + " " + this.getLastName();
    };
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    return Person;
}());
var aPerson = new Person();
aPerson.setFirstName("Anusha");
aPerson.setLastName("Sankaranarayanan");
console.log(aPerson);
console.log(aPerson.getFullName());
//constrcutor will take care of setting Default Values.
//Multiple constrcutors not 
var anotherPerson = new Person();
console.log(anotherPerson.getFullName());
//Inheritance using extends keyword.
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log("Hello Programmer!!");
    };
    Programmer.prototype.greetLikeNormalperson = function () {
        _super.prototype.greet.call(this); //super points to parent class
    };
    return Programmer;
}(Person));
var aProgrammer = new Programmer();
aProgrammer.greet();
aProgrammer.greetLikeNormalperson();
//Polymorphism
aPerson = new Programmer();
aPerson.greet(); //greet method form Prgrammer class and not From Person.
//Class using Costrcutor with Args
var Department = /** @class */ (function () {
    //if we declare the modifiers in constructor we need not declare thyem again.can be public  /protected as well
    //readonly properties can be assigned either during declaration or in constrcutor.
    function Department(name, deptId) {
        this.name = name;
        this.deptId = deptId;
    }
    Department.prototype.getDeptName = function () {
        return this.name;
    };
    Department.prototype.setDeptName = function (deptName) {
        this.name = deptName;
    };
    return Department;
}());
exports.Department = Department;
var dept = new Department("Sales", "123");
console.log(dept.getDeptName());
console.log(dept.deptId);
