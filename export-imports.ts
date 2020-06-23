//executing the code from the exported class.
//so be careful when exporting stuff. We shd only have definitions and declarations there 
import {Department} from './classes';

let dept = new Department("Purchase" , "999");
console.log(dept.getDeptName());
console.log(dept.deptId)