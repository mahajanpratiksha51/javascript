function stringHandsOn(){
    var givenString="  Hey you are you doing good, keep it up   ";
    console.log("Given String As it is:->",givenString);
    console.log("-------------------------------------------------------------------------------");
    var sentenceLength=givenString.length;

    console.log("Total Length Of the String is:->",sentenceLength);  
    var trimmedSentence=givenString.trim();
    var lengthTrimmedSentence=trimmedSentence.length;

    console.log("------------------------------------------------------------------------------------------");
    console.log("String After removing leading and trailing extra spaces length i:->",trimmedSentence.length);
    console.log("--------------------------------------------------------------------------------------------");
    console.log("Total number of extra spaces are:->",sentenceLength-lengthTrimmedSentence);
    console.log("-------------------------------------------------------------------------------------------------");
    var trimmedSentence=givenString.trim();
    var first=trimmedSentence.charAt(0);
    var last=trimmedSentence.charAt(trimmedSentence.length-1);
    console.log("First  and last character after removing the extra spaces:->" ,first,last);
    
}
stringHandsOn();
