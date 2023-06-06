


console.log(`1) Arrow function with no arguments and no return value`);
let display = ()=> {
    console.log(`   "Good Morning, Today is Monday"`);
}
display();
console.log(`---------------------------------------------------------------`);
console.log(`2) Arrow Function with 3 argument and no return value`);
let multi=(num1,num2,num3=1) => {
      let num4=num1*num2*num3;
      console.log(`   Multiplication is :->${num4}`);
}
multi(5,5,2);
multi(10,4)

console.log(`-------------------------------------------------------------------`);

console.log(`3) Arrow function with 5 arguments and return value`);

let add=(n1,n2,n3,n4,n5) =>{
   let addition=n1+n2+n3+n4+n5;
   return addition;

}
let result=add(100,100,200,349,756)
console.log(`   Addition is:-> ${result}`)
 let concat=add("I am ","learning ","ES6 ","features ","in depth")
 console.log(`   Addition is:-> ${concat}`);