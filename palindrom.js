/*function isPalindrom(arg){
    let length=arg.length;
    for(i=0;i<=length/2;i++){
        if(arg[i]==arg[length-1-i]){
            return "It is a Palindrom"
        }else
           return "It is not palindrom"
        }
    }
let result=isPalindrom("141");
console.log(`"144" :=> ${result}`);
console.log(`---------------------------------------------------`);
let madam=isPalindrom("madam");
console.log(`"madam" :=> ${madam}`);
console.log(`-----------------------------------------------------`);
let sunday=isPalindrom("sunday")
console.log(`"sunday" :=> ${sunday}`);
console.log(`-------------------------------------------------------`);
let mom=isPalindrom("mom");
console.log(`"mom" :=> ${mom}`);
console.log(`-----------------------------------------------------`);
let listen=isPalindrom("listen")
console.log(`"listen" :=> ${listen}`);
console.log(`------------------------------------------------------`);
let dad=isPalindrom("dad");
console.log(`"dad" :=> ${dad}`)*/

function isPalindrome(arg){
    
    let argRev=arg.split("");
    let rev=argRev.reverse();
    let join=rev.join("")
    if(arg===join){
        console.log("No is palindrom");
    }else{
        console.log("no is not palindrom");
    }

}
isPalindrome("listen")
isPalindrome("mom")
isPalindrome("141")