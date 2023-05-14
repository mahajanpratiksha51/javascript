function stringHandsOn(){
    var givenString="  Hey you are you doing good, keep it up   ";
    console.log(`1]Given String As it is:-> ${givenString}`);
    console.log("-------------------------------------------------------------------------------");
    var sentenceLength=givenString.length;

    console.log(`2]Total Length Of the String is:-> ${sentenceLength}`);  
    var trimmedSentence=givenString.trim();
    var lengthTrimmedSentence=trimmedSentence.length;

    console.log("------------------------------------------------------------------------------------------");
    console.log(`3]String After removing leading and trailing extra spaces length i:->${trimmedSentence.length}`);
    console.log("--------------------------------------------------------------------------------------------");
    console.log(`4]Total number of extra spaces are:-> ${sentenceLength-lengthTrimmedSentence}`);
    console.log("-------------------------------------------------------------------------------------------------");
    var trimmedSentence=givenString.trim();
    var first=trimmedSentence.charAt(0);
    var last=trimmedSentence.charAt(trimmedSentence.length-1);
    console.log(`5]First  and last character after removing the extra spaces:-> ${first} ${last}`);
    console.log("-------------------------------------------------------------------------------------------------");
    var result =trimmedSentence.split(" ");
    console.log(`6]Total Number of words Available in String:-> ${result.length}`)
    console.log("-------------------------------------------------------------------------------------------------------");
    
    var result=trimmedSentence.indexOf("good");
    console.log(`7]Index of word good from the given string:-> ${result}`)
    console.log("-------------------------------------------------------------------------------------------------------");
    
    var resultSlice=trimmedSentence.slice(22);
    console.log(`8]Substring Starting from index 22:-> ${resultSlice}`);
    console.log("-----------------------------------------------------------------------------------------------------------------");
    var endResult=trimmedSentence.endsWith("up");
    console.log(`9]Is String ends with word 'up':-> ${endResult}`);
    console.log("----------------------------------------------------------------------------------------------------------------")
    
    var startResult=trimmedSentence.startsWith("Hey");
    console.log(`10]Is string start with word 'Hey':-> ${startResult}`);
}
stringHandsOn();