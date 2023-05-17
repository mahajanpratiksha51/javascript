var graterNumber = function (num1, num2) {

    console.log(`    Given Numbers:-> ${num1},${num2}`);
    var result = (num1 >= num2) ? `${num1} is grater ` : `${num2} is grater`;
    console.log(`         ${result}`);
}
console.log(`1]. *********************Gratest Number*************************************`);
graterNumber(10, -10)
graterNumber(800, 899);


var isEvenOrOddNum = function (num) {
    var result = num % 2 == 0 ? true : false;
    return result;

}
console.log(`2]. ************************Even Or Odd*************************************`);
var result = isEvenOrOddNum(29);
var result1 = (result == true) ? "29 is even number" : "29 is odd number";
console.log(`    Given Number is 29:-> ${result1}`);

var result = isEvenOrOddNum(44);
var result2 = (result == true) ? "44 is even number" : "44 is odd number";
console.log(`    Given Number is 44:-> ${result2}`);

var result = isEvenOrOddNum(0);
var result3 = (result == true) ? "0 is even number" : "0 is odd number";
console.log(`    Given Number is 0:-> ${result3}`);

var result = isEvenOrOddNum(101);
var result4 = (result == true) ? "101 is even number" : "101 is odd number";
console.log(`    Given Number is 101:-> ${result4}`);



var wordLength = function (name) {
    var gString = name.length;
    var result = (gString % 2 == 0) ? true : false;
    console.log(`    length of String ${name}:->  ${gString}`);
    return (result);
}
console.log(`3]. *************************Even Or Odd Length******************************`);
var result = wordLength("JavaScript")
var result2 = (result == true) ? "javascript is Even length" : "javascript is Odd Length";
console.log(`    ${result2}`);

var result = wordLength("Developer");
var result3 = (result == true) ? "Developer is Even length" : "Developer is Odd length";
console.log(`    ${result3}`);

var result = wordLength("Google");
var result4 = (result == true) ? "Google is Even length" : "Google is Odd length";
console.log(`    ${result4}`);