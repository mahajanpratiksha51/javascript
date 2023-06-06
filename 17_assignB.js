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
console.log(`1) Employees Working in "TCS"`);
for (const employee of arrayEmployes) {
    if(employee.empCompany=="TCS"){
        console.log(`Emp Name:-> ${employee.empName}, Emp Company:-> ${employee.empCompany}`);
    }
    
}

console.log(`------------------------------------------------------------------------------------------------------------------------`)

console.log(`2) Finance Department Employee`);
for (const employee of arrayEmployes) {
    if(employee.empDept=="Finance"){
        console.log(`Emp Name:-> ${employee.empName}, Emp Department:->${employee.empDept}`);
    }
}
console.log(`-------------------------------------------------------------------------------------------------------------------------`);


console.log(`3)Employees whose name starts with "R"`);
for (const employee of arrayEmployes) {
    if(employee.empName.startsWith("R")){
        console.log(  employee);
    }
}

console.log(`---------------------------------------------------------------------------------------------------------------`);
console.log(`4)Employee Whose salary is grater than 75000`);

for (const employee of arrayEmployes) {
    if(employee.empSalary>75000){
        console.log(`Emp Name:-> ${employee.empName},Emp Company:-> ${employee.empCompany}, Emp Salary:-> ${employee.empSalary}`);
    }
}
console.log(`---------------------------------------------------------------------------------------------------------------`);

console.log(`5) Employee whose salary is grater than or equal to 50000 and from "IT" dept`);

for (const employee of arrayEmployes) {
    if(employee.empSalary>=50000 && employee.empDept=="IT"){
        console.log(employee);
    }
    
    
}
console.log(`---------------------------------------------------------------------------------------------------------------`);
console.log(`6) Employees From Company "Infy"`);
for (const employee of arrayEmployes) {
    if(employee.empCompany=="Infy"){
        console.log(employee);
    }
}