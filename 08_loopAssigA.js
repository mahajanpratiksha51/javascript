
var str="I am very good IT Developer";
console.log(`Given String Is:-> ${str}`);
count=0;
for (let index = 0; index <str.length; index++) {
    var char = str.charAt(index); // 
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
       count++;
    }
    
}

console.log(`Total number Of vowels in given string are:-> ${count}`);
console.log(`--------------------------------------------------------------------`);


function CubeOfNumber(num){
    sum=0;
    for(num=1; num<=5;num++){
        var cube=num*num*num;
        console.log(`cube of given number is:-> ${cube}`);
        sum+=num*num*num;
    }
    return sum;
}
 result =CubeOfNumber(5);
 console.log(`---------------------------------------------------------------------`);
 console.log(`Sum of cubes are:-> ${result} `)
console.log(`------------------------------------------------------------------------`);


function oddPositionedChars(gstring){

      let output='';
     for(index=0;index<gstring.length;index++){
    if(index%2!==0 && gstring[index]!==' ')
    {
       output+=gstring[index];
        
    }
    
     }
     console.log(`Odd positioned character of given string:-> ${output}`);
}
var str1="Hard work always pays back"
var str2="Soon i will be Angular IT champ"
console.log(`Given String Is:-> "${str1}"`);
oddPositionedChars("Hard work always pays back");
console.log(`---------------------------------------------------------------------------`);
console.log(`Given String Is:-> "${str2}"`);
oddPositionedChars("Soon i will be Angular IT champ")


