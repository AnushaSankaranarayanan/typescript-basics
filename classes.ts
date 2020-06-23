class Person {
    private firstName: string;
    private lastName: string;
    //readonly properties can be assigned either during declaration or in constrcutor
    readonly greetMessage = "Hello there!!" 
    constructor() {
        this.firstName = "N/A";
        this.lastName = "N/A";
    }
    greet() {
        console.log(this.greetMessage);
    }
    getFullName(): string {
        return this.getFirstName() + " " + this.getLastName();
    }

    getFirstName(): string {
        return this.firstName;
    }

    setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    setLastName(lastName: string) {
        this.lastName = lastName;
    }
}

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
class Programmer extends Person {
    greet() {
        console.log("Hello Programmer!!")
    }
    greetLikeNormalperson() {
        super.greet(); //super points to parent class
    }
}
var aProgrammer = new Programmer();
aProgrammer.greet();
aProgrammer.greetLikeNormalperson();

//Polymorphism
aPerson = new Programmer();
aPerson.greet(); //greet method form Prgrammer class and not From Person.

//Class using Costrcutor with Args
//class can be exported to be used by any other class.
export class Department {
    //if we declare the modifiers in constructor we need not declare thyem again.can be public  /protected as well
    //readonly properties can be assigned either during declaration or in constrcutor.
    constructor(private name: string, readonly deptId : string) {

    }
    getDeptName(): string {
        return this.name;
    }

    setDeptName(deptName: string) {
        this.name = deptName;
    }
}

let dept = new Department("Sales" , "123");
console.log(dept.getDeptName());
console.log(dept.deptId)
