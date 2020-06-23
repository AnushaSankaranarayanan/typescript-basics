interface Employee {
    firstName: string;
    lastName: string;
    getFullName(): string;
}

class Foo implements Employee {
    firstName: string;
    lastName: string;
    constructor(firstName : string , lastName : string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return this.firstName + this.lastName;
    }
}

let emp1: Employee = new Foo("Anusha" , "Sankaranarayanan");
console.log(emp1.getFullName());

//any object which has the same strcuture as interface
let someObj  = {
    firstName : "Test",
    lastName : "Test",
    getFullName : () => "Test Full Name"

}

//emp1 which is of type Employee is now assigned to someobject of the same strcutire. 
//Example of Duck Typing.Any additional properties wont be accessible from emp1 though.
emp1 = someObj;
console.log(emp1.getFullName());