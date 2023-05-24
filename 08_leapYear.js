function checkLeapYear(leapYear){
    if(leapYear==undefined ||leapYear==null || isNaN(leapYear)){
        console.log(`"${leapYear}" Is not valid input`);
    }else{
        if((0==leapYear%4 && 0!==leapYear%100) ||0==leapYear%400){
            console.log(`"${leapYear}" is Leap year`);
        }else{
            console.log(`"${leapYear}" is not Leap year`);
        }
    }

}
console.log(`-----------------Check Leap Year Or Not--------------------------`);
checkLeapYear(2020);
console.log(`-----------------------------------------------------------------------`);
checkLeapYear(1999);
console.log(`-----------------------------------------------------------------------`);
checkLeapYear(1600);
console.log(`-----------------------------------------------------------------------`);
checkLeapYear(2022);
console.log(`-----------------------------------------------------------------------`);
checkLeapYear(1945);
console.log(`-----------------------------------------------------------------------`);
checkLeapYear(null);
console.log(`-----------------------------------------------------------------------`);
checkLeapYear("Twenty Twenty")
console.log(`-----------------------------------------------------------------------`);
checkLeapYear(undefined);
console.log(`-----------------------------------------------------------------------`);
checkLeapYear(NaN)
console.log(`-----------------------------------------------------------------------`);
checkLeapYear(1750)