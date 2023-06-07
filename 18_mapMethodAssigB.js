class Employee{
    constructor(empId,empName,empDept,empSalary,empCompany){
       this.empId=empId;
       this.empName=empName;
       this.empDept=empDept;
       this.empSalary=empSalary;
       this.empCompany=empCompany;
    }

}
const empAnil= new Employee(22,"Anil","IT",50000,"TCS");
const empRadha= new Employee(33,"Radha","HR",74000,"Wipro");
const empRishi= new Employee(55,"Rishi","Finance",47000,"TCS");
const empSonali= new Employee(66,"Sonali","Finance",45000,"Infy");
const empMonika= new Employee(77,"Monika","IT",40000,"Wipro");
const empVinay= new Employee(88,"Vinayak","IT",75000,"TCS")
const empMahi=  new Employee(99,"Mahesh","HR",85000,"Infy")

const arrayEmployes=[ empAnil,empRadha,empRishi,empSonali,empMonika,empVinay,empMahi]

console.log(`1) List of all employee names and log new array on console`);
const arrayNames=[];
const array=arrayEmployes.map((employee)=>{
    arrayNames.push(employee.empName)
})
console.log(arrayNames);

console.log(`--------------------------------------------------------------------------------------------`);


console.log(`2) List of department and log  on console`);
const arrayDept=[];
const array2=arrayEmployes.map((employee)=>{
    arrayDept.push(employee.empDept)
})
console.log(arrayDept);

console.log(`--------------------------------------------------------------------------------------------`);


console.log(`2) List of employee id and log  on console`);
const arrayId=[];
const array3=arrayEmployes.map((employee)=>{
    arrayId.push(employee.empId)
})
console.log(arrayId);

console.log(`--------------------------------------------------------------------------------------------`);

