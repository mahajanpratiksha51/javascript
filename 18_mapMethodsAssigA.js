const arrayNumbers=[20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19]
;
console.log(`Given array:=> [${arrayNumbers}]`);
console.log(`-------------------- map() -------------------------------------------------`);
console.log(`1) Add 10 into each element and log new array `);
const arrayTrans = arrayNumbers.map( (element) => {
   return element+10;
} );
console.log(arrayTrans);

console.log(`--------------------------------------------------------------------`);
console.log(`2) Square the each array element`);
const array1=[];
const arraySquare=arrayNumbers.map((element)=>{
    array1.push(element*element)
})
console.log(array1);

console.log(`------------------------------------------------------------------------`);
console.log(`3) Add the index value of corrosponding element`);
const array2=[];
const addValue=arrayNumbers.map((element,index)=>{
    array2.push(element+index)
})
console.log(array2);