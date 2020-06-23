"use strict";
var Foo = /** @class */ (function () {
    function Foo(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Foo.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    return Foo;
}());
var emp1 = new Foo("Anusha", "Sankaranarayanan");
console.log(emp1.getFullName());
//any object which has the same strcuture as interface
var someObj = {
    firstName: "Test",
    lastName: "Test",
    getFullName: function () { return "Test Full Name"; }
};
//emp1 which is of type Employee is now assigned to someobject of the same strcutire. 
//Excample of Duck Typing.Any additional properties wont be accessible from emp1
emp1 = someObj;
console.log(emp1.getFullName());
