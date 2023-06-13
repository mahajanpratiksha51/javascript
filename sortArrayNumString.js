const array=[10,5,'a','b','h',11]
console.log("Given Array :->", array);
let arrayString=[];
let arrayNum=[];
array.forEach((element)=>{
    if(typeof(element)=="string"){
        
      arrayString.push(element)

    }else{
        if(typeof(element)=="number")
        {
            arrayNum.push(element);
        }
    }
})
arrayNum.sort((n1,n2)=>{
    return n1>n2 ?1:-1
})
console.log("Numbers:=>" ,arrayNum);
console.log("Alphabets:=>" ,arrayString);