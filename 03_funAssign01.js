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

