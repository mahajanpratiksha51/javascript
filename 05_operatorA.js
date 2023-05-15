function squareOfWordLength(value){

var resultsplit=value.length;
var result2=resultsplit*resultsplit;
console.log(`Length Of word in string is:-> ${resultsplit}` );
console.log(`Square Of word in string is:-> ${result2}`);


}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart")
console.log(`------------------------------------------------------------------------------------------------`);

function givenString(){
    var gstring="I am Angular Developer";
    console.log(`Given String:-> ${gstring}`);
    var result=gstring.length;
    var result2=gstring.split(" ");
    var result3=result2.length;
    var result4=result/result3;
    console.log(`Length of given string is:-> ${result}`);
    console.log(`Total number of word available in string:-> ${result3}`)
    console.log(`String length and divided by total number of word available in string:-> ${result4}`);
    var result5=result*result3;
    console.log(`String length and multiple by total words available in string:-> ${result5}`);
}
givenString();
