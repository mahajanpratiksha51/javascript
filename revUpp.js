
//output=DoinG ArE HoW HellO
var myString="Hello how are you doing"

 var str="Hello how are you doing"
  strlength=str.length; 
  
 for(index=0;index<strlength;index++){
    if(index==0 || index==(strlength-1)){
        str[index]=(str[index]).toUpperCase();
    }else{
        if(str[index=='']){
            str[index-1]=(str[index-1]).toUpperCase();
            str[index+1]=(str[index+1]).toUpperCase();
        }
    }

}
console.log(`Afetr converting first and last character is ${str}`);






/*var myString="Hello how are you doing"
 var stringsplit=myString.split(" ");
reverseString=stringsplit.reverse();
console.log(reverseString);
for(index=0;index<reverseString.length;index++){
    
reverseString[index]=reverseString[index].charAt(0).toUpperCase()+reverseString[index].substring(1);
if(index==0 || index==(reverseString.length-1)){
    reverseString[index]=(reverseString[index]).toUpperCase();
}else{
    if(reverseString[index==' ']){
        reverseString[index-1]=(reverseString[index-1]).toUpperCase();
        reverseString[index+1]=(reverseString[index+1]).toUpperCase();
}
}
abc=reverseString.join(" ");
}

console.log(abc);*/

//output:->
/*var mystring = "Hello how are you doing"
console.log(`Given String:-> ${mystring}`);
  function reverseString(input) {

   input = input.split(' ');
   input= input.reverse();
   
   
   arr= ' ';
   
   

    for (i = 0; i < input.length; i++) {
      newString = input[i].charAt(0).toUpperCase() + input[i].substring(1,input[i].length-1)+input[i].charAt(input[i].length -1).toUpperCase();
      arr += (newString)
     
    }
    console.log(` ${arr}`);
  
 
  }
reverseString("Hello how are you doing");
*/

/*var myString="Hello how are you doing"
var newString=myString.split(' ');
console.log(`${newString}`);
strRev=newString.reverse();
console.log(`${strRev}`);
strlength=strRev.length;
console.log(`${strlength}`);
arr=" "
function revUpp(){
  for(i=0;i<strlength;i++){
    if(i==0 || i==(strlength-1)){
      strRev[i]=(strRev[i]).toUpperCase();
  }else{
      if(strRev[i==' ']){
          newString=(strRev[i-1]).toUpperCase();
          newString=(strRev[i+1]).toUpperCase();
      }
  }
     
  }
  console.log(`${newString}`);
}
revUpp();*/





