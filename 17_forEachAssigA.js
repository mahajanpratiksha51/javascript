
console.log(`1)Log the array element with its index using forEach() with arrow function`);

const arrayNumbers=[1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
arrayNumbers.forEach( (element,index) => {
    console.log(`  Index:=> ${index}  Element:=> ${element}`);

} );

console.log(`---------------------------------------------------------------------------------------------------------`);
console.log(`2) Find positive numbers Using forEach and arrow function `);
let array=[];
arrayNumbers.forEach((element) =>{
    
    if(element>0){
        array.push(element);
        }
 })
 console.log(`  Positive NO in given Array:->[${array}]`)



console.log(`-----------------------------------------------------------------------------------------------------`);
console.log(`3) Find the negative numbers and log new array using arrow function`);
let array2=[]
arrayNumbers.forEach((element) =>{
    if(element<0){
        array2.push(element)
    }
});
console.log(`  Negative numbers in given array:=> [${array2}]`);



console.log(`----------------------------------------------------------------------------------------------------`);
console.log(`4) Find the even numbers and log using forEach() and arrow function`);
let array3=[];
arrayNumbers.forEach((element) =>{
    if(element%2==0){
       array3.push(element)
    }
})
console.log(`  Even numbers in given array:=> [${array3}]`);


console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`5) Find the sum of all elements from arrayNumbers`);
let sum=0;
arrayNumbers.forEach((element) =>{
    sum=sum+element;
})
console.log(`  sum of elements is:=> ${sum}`);



console.log(`------------------------------------------------------------------------------------------------------`);
console.log(`6) Log only even index array value`);
arrayNumbers.forEach((element,index) =>{
    if(index%2==0){
      console.log(`Index=> ${index}  Element:=> ${element}`);
    }
})
