"use strict";
//primitive declaration
var a;
var b;
var c;
a = 10;
b = true;
c = "hello world";
console.log(a);
console.log(b);
console.log(c);
//array declaration
var myArray;
myArray = [1, 2, 3];
//tuple declaration(used to mix array contents)
var myTuple;
myTuple = [1, true];
console.log(add(10, 20)); //will be 30
console.log(add(10, 20, 30)); //will be 60
//Any Datatype
var anyType;
//compiler does not compile here
anyType = 1;
anyType = "abc";
//Fixed set of datatypes
var fixedType;
fixedType = 1;
fixedType = true;
//fixedType = "abc"; //compiler does not compile here
