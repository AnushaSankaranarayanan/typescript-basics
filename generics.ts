//Generics
function echo<T>(arg :T) : T{
    return arg;
}
//number and string examples
var myVar : number = echo(1);
var myVar1 = echo("string");
console.log(myVar);
console.log(myVar1);

class Person1 {
    firstName: string;
    lastName: string;
    constructor(firstName : string , lastName : string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

class Admin extends Person1{

}

class Manager extends Person1{

}

let admin = new Admin('admin' ,'admin');
let manager = new Manager('manager' ,'manager');

//Generics with extends

function personEcho<T extends Person1>(person : T) : T{
    return person;
}

console.log(personEcho(admin)); // should be Admin
console.log(personEcho(manager));// should be Manager