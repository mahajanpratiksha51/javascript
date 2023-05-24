function countCharA(str){
    var count = 0;
for (let index = 0; index < str.length; index++) {
    
    if (str.charAt(index)=="A" || str.charAt(index)=="a"){
    
        count++;
    }
    



}
console.log(`Total Number of "A", "a" in given string:-> ${count}`)
}
console.log(`Given String is:->"I AM Learning Javascript,The Language of internet"`);
countCharA("I AM Learning Javascript, The Language of internet");
console.log(`Given String is:-> "My favourite movie is LAggAn"`);
countCharA("My favourite movie is LAggAn")

