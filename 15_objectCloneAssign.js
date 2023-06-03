
const arrayNums=[20,3,4,56,90,400,49];
const array1=arrayNums;
console.log(`   Given Array is:-> [${arrayNums}]`);
console.log(`----------- Shallow Clone On ArrayNums -------------`);
array1.push(55,66);
console.log(`   Original array updated with value 55,66:-> [${arrayNums}]`);
console.log(`   Cloned array updated with value 55,66:-> [${array1}]`);
console.log(`----------------------------------------------------------------------------------------`);
console.log(`----------- Deep Clone On ArrayNums -----------------`);
const array3=[...arrayNums];
arrayNums.push(10,25);
console.log(`   Original array Updated With value 10,25:-> [${arrayNums}]`);
console.log(`   Cloned array Updated With value 10,25:-> [${array3}]`);

console.log(`-----------------------------------------------------------------------------------------`);

console.log(`---------- Merge Arrayeven with ArrayNums --------------`);
const arrayEven=[2,30,14,8];
const array4=arrayNums.concat(arrayEven);
console.log(`   Merged Array:-> [${array4}]`);

const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR",
    },
    address:{
        locality:{
            colony:"OM vrindavan Society",
            street:"Kanch Pokli, 431202",
        },
        city: "Mumbai",
        state:"Maharashtra",
        country:"India",
    },
    mobiles:["+19 8600 3456 88","1800-4567 32","+91- 9096 5678 77"]
}

console.log(`---------------- Employee Details ------------------`);


console.log(`   Employee Locality:-> ${employee_info.address.locality.colony},${employee_info.address.locality.street}`);
console.log(`   Employee City:-> ${employee_info.address.city}`)
console.log(`   Employee State:-> ${employee_info.address.state}`);
console.log(`   Employee Contry:-> ${employee_info.address.country}`);
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`   Mobile Numbers:-> [${employee_info.mobiles}]`);
console.log(`------------------------------------------------------------------------------------`);


const deepClonedPerson = JSON.parse(JSON.stringify(employee_info));
deepClonedPerson.salary.july_month="80,000INR";
console.log(`   Original Salary is:-> ${employee_info.salary.july_month}`);
console.log(`   Updated salary is:-> ${deepClonedPerson.salary.july_month}`);



const info = JSON.parse(JSON.stringify(employee_info));
employee_info.address.country="United Kingdom";
console.log(`   Original Country is:-> ${info.address.country}`);
console.log(`   Updated Country is:-> ${employee_info.address.country}`);
