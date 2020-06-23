"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//executing the code from the exported class.
//so be careful when exorting stuff. We shd only have definitions and declarations there 
var classes_1 = require("./classes");
var dept = new classes_1.Department("Purchase", "999");
console.log(dept.getDeptName());
console.log(dept.deptId);
