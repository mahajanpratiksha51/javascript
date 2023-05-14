function square(num){
var result=num*num;
console.log(`Square Of Number is:-> ${result}`);
}
square(5);
square(6);
square(25);
square(100);
console.log("---------------------------------------------------------------------------------------------");
console.log(`Type Of Function:->${typeof square}`);
console.log("----------------------------------------------------------------------------------------------");
function area(length,width){
   var result=length*width;
   console.log(`Area Of Rectangle Is:-> ${result}`);
}
area(499,917)
 console.log("--------------------------------------------------------------------------------------------------");
var swapvalue=function(num1,num2){
    console.log(`Before Swap Value:-> ${num1} ${num2}`);
    var temp=num1;
    num1=num2;
    num2=temp;
    console.log(`After Swap Value:-> ${num1} ${num2}`);

}
swapvalue("virat","Anushka");
swapvalue(1000,2000);
console.log(`--------------------------------------------------------------------------------------------------------`);
function opertaion(){
    var givenString="Js the most popular language of internet";
    var result=givenString.length;
    console.log(`Total character available in the string:-> ${result}`);
    console.log(`-------------------------------------------------------------------------------------------------------------`);
    var indexOfSix=givenString.charAt(6);
    console.log(`The character at index 6:-> ${indexOfSix}`);
    var indexOfEleven=givenString.charAt(11);
    console.log(`The character at index 11:-> ${indexOfEleven}`);
    console.log(`--------------------------------------------------------------------------------------------------`);
    var last=givenString.charAt(givenString.length-1);
    console.log(`Last Character using lenght property:-> ${last}`);
    var first=givenString.charAt(0);
    console.log(`The very first character of given string:-> ${first}`);
    console.log(`------------------------------------------------------------------------------------`);
    var total=givenString.split(' ');
    var result=total.length;
    console.log(`Total Number of Word in given string:-> ${result}`);
    var square=result*result;
    console.log(`square of total number of words in given string:-> ${square}`);
}
opertaion();