function factorialOfNum(num) {
var fact='1'
    for(index=num; index>=1;index--){
        
            fact=index*fact;
    }
   
         if(isNaN(num) || num==null ||num==undefined){

            console.log(`Invalid input :-> ${num}`);
        }

    
   return fact;
 
}
console.log(`---------Factorial Of Number------------------------------------------`);
result=factorialOfNum(5);
console.log(`Factorial of 5 is:-> ${result}`);

result=factorialOfNum(3)
console.log(`Factorial of 3 is:-> ${result}`);

factorialOfNum(null);

result=factorialOfNum(8);
console.log(`Factorial of 8 is:-> ${result}`);

factorialOfNum(undefined);

result=factorialOfNum(9);
console.log(`Factorial of 9 is:-> ${result}`);

result=factorialOfNum(0);
console.log(`Factorial of 0 is:-> ${result}`);

