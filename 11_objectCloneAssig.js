 let bankSbi={
    bankName:"State Bank Of India",
    accountNo:457396345679,
    ifsc:"SBIN0003847",
    intrestRate:8.50,
 }

console.log(`1)------------------ Create Object bankSbi-------------------------`);
 console.table(bankSbi)

 let bankLocation={
    street:"Faizpur road",
    city:"Savda",
    pin:425308
 }
console.log(`2)----------------- Create Object banklocation-------------`);
 console.table(bankLocation)
console.log(`3)---------- clone step1 and step2 using object.assign()-----------`);
 Object.assign(bankSbi,bankLocation);
console.table(bankSbi);


let rateOfInterest={
    homeLoanInterest:10.50,
    personalInterest:8.5,
    dueInterest:9.50,
}
console.log(`4)----------Create object rateOfInterset-------`);
console.log(rateOfInterest);
const sbiDetails={

}
console.log(`-------------Create object sbiDetails----------- `);
console.table(sbiDetails)
console.log(`5)--------merge step1 step2 and step4 object into new object sbiDetails------`);
Object.assign(sbiDetails,bankSbi,bankLocation,rateOfInterest)
console.table(sbiDetails);

console.log(`6)----------Traverse The merged object----------`);
for (const key in sbiDetails) { // key = "height"
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        console.log(`${key}, ${value}`);
    }
}
