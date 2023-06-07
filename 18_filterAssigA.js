

const arrayNumbers=[20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log(`Given array:=> [${arrayNumbers}]`);
console.log(`-----------------------------------------------------------------------------`);


const arrayGreaterThan50 = arrayNumbers.filter( (element)=> {
    return element>50;
} );
console.log(`1) All the numbers which are grater than 50:=> [${arrayGreaterThan50}]`);


console.log(`--------------------------------------------------------------------------------`);
const arrayEven=arrayNumbers.filter((element)=>{
    return element%2==0;
})
console.log(`2) All the Even numbers:=> [${arrayEven}]`);

console.log(`----------------------------------------------------------------------------------`);


const arrayOdd=arrayNumbers.filter((element)=>{
    return element%2!==0;
})
console.log(`3) All the Odd numbers:=> [${arrayOdd}]`);



console.log(`----------------------------------------------------------------------------------`);


const arrayMultFive=arrayNumbers.filter((element)=>{
    return element%5==0;
})
console.log(`4) All the Odd numbers:=> [${arrayMultFive}]`);

console.log(`----------------------------------------------------------------------------------`);



const arrayBet=arrayNumbers.filter((element)=>{
    return element>20 && element<50;
})
console.log(`5) All Numbers which are between 20 and 50:=> [${arrayBet}]`);
