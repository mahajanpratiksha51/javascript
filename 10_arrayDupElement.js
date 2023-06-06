
let arrayNum = [11, 3, 4, 11, 4, 7, 3]
 console.log(`Given array is : [${arrayNum}]`);

 let array =[];
for (let i = 0; i <arrayNum.length; i++) 
{
   
    for (let j = i+1;j <arrayNum.length;j++) {
      if(arrayNum[i]==arrayNum[j]){
        var result =arrayNum[j]
      arrayNum.splice(j,1)
      array.push(result)
           
        }
       
    }
     
}
console.log(`Duplicate elements are: [${array}]`);
console.log(`After removing duplicate element array  is : [${arrayNum}]`);

