console.log("***Functions With No Arguments And No Return Type***");
function first() {
    console.log("first function with no argument and no return type");
}
first();
function second() {
    console.log("second function with no argument and no return type");
}
second();
console.log("-------------------------------------------------------------------------------------");
console.log("*******Function Personaldetails*********");
function personalDetails(firstName,lastName,collegeName)
{
    console.log("First Name:->",firstName);
    console.log("Last Name:->",lastName);
    console.log("College Name:->",collegeName)
}
personalDetails("Pratiksha","Mahajan","D.N.College.Faizpur")
console.log("------------------------------------------------------------------------------");
console.log("************Function swapvalueDude********************");
function swapValueDude(a,b){
    console.log("Before Swap:->",a,b);
    temp=a;
    a=b;
    b=temp;
    console.log("After Swap:->",a,b);

}
swapValueDude("virat" ,"Anushka")
swapValueDude(1000,2000)
console.log("------------------------------------------------------------------------------");
function addThreeValues(a,b,c){
    add=a+b+c;
    console.log("Addition Is:->",add);
}
addThreeValues(10.23,600,40)
addThreeValues("Hello"," Good"," Morning")

var greet = "Good Morning";
var greetLength = greet.length;
console.log("Total number of character in given string is: ", greetLength);

var charAtZeroIndex = greet.charAt(0);
console.log("Char at 0 index: ",charAtZeroIndex);

var charAtLastIndex = greet.charAt(greet.length-1);
console.log("Char at last index: ",charAtLastIndex);

var charAtIndexTwenty= greet.charAt(20);
console.log("Char at index 20 is:", charAtIndexTwenty);

var firstName = "Gajanan";
var lastName = " Kharat";

var concatString = firstName.concat(lastName);
console.log("Concat String is: ", concatString);

var indexOfM = greet.indexOf("M")
console.log("Index of M is: ", indexOfM);

var indexOfo = greet.lastIndexOf("o");
console.log("Index of o is: ", indexOfo);

var replaceValue = greet.replace("Morning", "Afternoon");
console.log("After replace: ", replaceValue);


var firstName = "     Gajanan      ";
var firstNameLength = firstName.length;
console.log("Before trim length is: ", firstNameLength );

var trimmedFirstName = firstName.trim();
var lengthAfterTrim = trimmedFirstName.length;
console.log("After Trim firstName is: ",trimmedFirstName, trimmedFirstName.length );
console.log("Trimmed total spaces : ", firstNameLength-lengthAfterTrim);

var lastName = "        Kharat   ";
lastName.trimEnd();

var firstName = "Gajanan";
var result = firstName.length;
console.log("Total char available in firstName is:",result );