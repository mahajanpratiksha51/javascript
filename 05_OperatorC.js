function maleMarrigeEligibility(gender,age,boyname){
    
    var result=gender=="Male" && age>=21? `Hey ${boyname} you are eligible for Marriage`:`Hey ${boyname} you are not eligible for Marriage`
    console.log(`${result}`);
}
console.log(`--------------------------(1)---------------------------------------------`);
maleMarrigeEligibility("Male",25,"Billgtes");

maleMarrigeEligibility("Male",17,"Stew Jobs");
console.log(`--------------------------(2)---------------------------------------------------`);

function femaleMarrigeEligibility(gender,age,girlName) {
    var result=gender=="Female" && age>=18 ? `Hey ${girlName} you are eligible for Marrige`:`Hey ${girlName} you are not eligible for marrige`;
     console.log(`${result}`);
}
femaleMarrigeEligibility("Female",16,"Jenifer");
femaleMarrigeEligibility("Female",27,"Malinda Gates");