const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11]
console.log(`Given Array:->[${arrayNumbers}]`);
console.log(`------------------------------------------------------------------------------------------------`);
let arrayLen =arrayNumbers.length
console.log(`1.Length Of Given Array:-> ${arrayLen}`);
console.log(`------------------------------------------------------------------------------------------------`);
let firstEle=arrayNumbers[0];
console.log(`2.1)First Element of Given Array:-> ${firstEle}`);
console.log(`------------------------------------------------------------------------------------------------`);
let lastEle=arrayNumbers[arrayLen-1];
console.log(`2.2)Last Element of Given Array:-> ${lastEle}`);
console.log(`------------------------------------------------------------------------------------------------`);
let lastThird=arrayNumbers[arrayLen-3];
console.log(`3)Third Last Element of Given Array:-> ${lastThird}`);
console.log(`------------------------------------------------------------------------------------------------`);
const even=[];
for( const element of arrayNumbers){
if(element%2==0){
    even.push(element);

}
}
console.log(`4)Even Numbers In Given Array is:-> [${even}]`);
console.log(`------------------------------------------------------------------------------------------------`);
const odd=[]
for(const element of arrayNumbers){
if(element%2!==0){
    odd.push(element);
}
}
console.log(`5)Odd Numbers In Given Array is:-> [${odd}]`);

console.log(`------------------------------------------------------------------------------------------------`);
var sum=0;
for (const index in arrayNumbers) {
 
    if (index%2==0){
     sum=sum+arrayNumbers[index];
     }
    
}
console.log(`6)Sum Of Even position Elemen:-> ${sum}`);
console.log(`------------------------------------------------------------------------------------------------`);

var sum=0;
for (const index in arrayNumbers) {
 
    if (index%2!==0){
     sum=sum+arrayNumbers[index];
     }
    
}
console.log(`7)Sum Of Odd position Elemen:-> ${sum}`);
console.log(`------------------------------------------------------------------------------------------------`);
sum=0;
for (const element of arrayNumbers) {
   sum=sum+element;
   
}
console.log(`8)Sum Of All Elements in Given Array:-> ${sum}`);

console.log(`------------------------------------------------------------------------------------------------`);
const multiFiv=[]
for(const element of arrayNumbers){
if(element%5==0){
    multiFiv.push(element);
}
}
console.log(`9)Numbers Which Are Multiple of 5:-> [${multiFiv}]`);
console.log(`------------------------------------------------------------------------------------------------`);
 const available=arrayNumbers.includes(115);
 console.log(`10)Is Number 115 Available in [${arrayNumbers}] :->${available}`);
 console.log(`------------------------------------------------------------------------------------------------`);
 const numAvailable=arrayNumbers.includes(23);
 console.log(`11)Is Number 23 Available in [${arrayNumbers}] :->${numAvailable}`);
 console.log(`------------------------------------------------------------------------------------------------`);

 arrayNumbers.splice(3,0,55,66);
 console.log(`12)Insert Numbers 55,66 Before index 3:-> [${arrayNumbers}]`);
 console.log(`------------------------------------------------------------------------------------------------`);
 arrayNumbers.splice(4,3);
 console.log(`13) Delete 3 Element Stating From index 4:-> [${arrayNumbers}]`);