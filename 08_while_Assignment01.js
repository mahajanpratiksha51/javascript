console.log(`1)WAP to print numbers from 5 to 15 by incrementing 1`);
let str = ' '
var i=5;
while(i<=15){
    str += i+' ';
    i += 1;
}

console.log(str);

console.log(`--------------------------------------------------------------------------------------------`);
console.log(`2)WAP to print numbers from 50 to 40 by decrementing 1`);
let num = ' '
let  j=50;
while(j>=40){
    num += j+' ';
    j =j-1 ;
}

console.log(num)
console.log(`--------------------------------------------------------------------------------------------------------`);
console.log(`3)WAP to find first 15 odd numbers`);
let odd=' '
let k=1;
while(k<=30){
    if(k%2==1){
    odd+=k+' ';
    k=k+1
}
k++;
}
console.log(odd);

console.log(`--------------------------------------------------------------------------------------------------------------`);

console.log(`4)WAP to find first 10 even numbers`);
let even=' '
let l=0;
while(l<20){
    if(l%2==0){
    even+=l+' ';
    l=l+1
}
l++;
}
console.log(even);

console.log(`-------------------------------------------------------------------------------------------------------------`);

console.log(`5)WAP to print table of 5`);
let table = ' '
var m=5;
while(m<=50){
    table += m+' ';
    m += 5;
}

console.log(table);

console.log(`----------------------------------------------------------------------------------------------------------------`);


console.log(`6)WAP to print table of 10`);
let tableOfTen = ' '
var n=10;
while(n<=100){
    tableOfTen += n+' ';
    n+= 10;
}

console.log(tableOfTen);


console.log(`----------------------------------------------------------------------------------------------------------------`);
console.log(`7)WAP to print table of 10 in reverse order`);
let tableOfTenReverse = ' '
var o=100;
while(o>=10){
    tableOfTenReverse += o+' ';
    o= o-10;
}

console.log(tableOfTenReverse);



