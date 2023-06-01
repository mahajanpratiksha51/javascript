


function fibonacci(num){
    
let n=0;
let n1=1;
let n2;
answer=[] ;
    for(let i=0;i<num;i++)
{
  n2=n+n1;
  answer.push(n2);
  n=n1;
  n1=n2;

}
console.log(`Fibonacci Series is:-> ${answer}`);
}
fibonacci(10)
