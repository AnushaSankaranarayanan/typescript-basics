//basic fn declrataion
var fn = () => { return 'response' };
console.log(fn());

//types for arguments
function additionFn(a : number , b :number){
    return a+b;
}

console.log(additionFn(1,2));

//fucntion with default values
//c if passed will be taken that values  else will be defaulted to 0
//retrun type f fucntions is specified at the end
function add(a:number, b:number, c:number=0) :number{
    return a + b + c;
}
console.log(add(10, 20)); //will be 30
console.log(add(10, 20, 30));//will be 60
