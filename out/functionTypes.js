"use strict";
//basic fn declrataion
var fn = function () { return 'response'; };
console.log(fn());
//types for arguments
function additionFn(a, b) {
    return a + b;
}
console.log(additionFn(1, 2));
//fucntion with default values
//c if passed will be taken that values  else will be defaulted to 0
//retrun type f fucntions is specified at the end
function add(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
console.log(add(10, 20)); //will be 30
console.log(add(10, 20, 30)); //will be 60
