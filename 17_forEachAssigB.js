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
console.log(`1) find out the TCS employee and log name and company`);
arrayEmployes.forEach( (employee)=> {
    if (employee.empCompany=="TCS") {
        console.log(`  Name:=> ${employee.empName} Company:=> ${employee.empCompany}`);
    }
});

console.log(`----------------------------------------------------------------------------------------------------------------------`);
 console.log(`2) Find out the employee salary grater than or equal to 50000`);
 arrayEmployes.forEach((employee) =>{
    if(employee.empSalary>=50000){
        console.log(employee);
    }
 });

 console.log(`-------------------------------------------------------------------------------------------------------------------------`);
 console.log(`3) find the sum of all employee salary`);
  

 let sum=0;
 arrayEmployes.forEach((employee)=>{
      
      sum=sum+employee.empSalary;

 })
 console.log(`  Sum of salary:=> ${sum}`);

 console.log(`------------------------------------------------------------------------------------------------------------`);
 console.log(`4) Find the average salary `);
 let sumSalary = 0;
arrayEmployes.forEach( (employee) => {
    sumSalary = sumSalary + employee.empSalary;
});
let averageSalary = sumSalary / arrayEmployes.length;
console.log(`  Average Salary is : ${averageSalary}`);

console.log(`------------------------------------------------------------------------------------------------------------------`);
console.log(`5) Find the IT and HR department emp whose salary is grater than equal to 75000`);

arrayEmployes.forEach((employee) =>{
    if((employee.empDept=="IT" ||employee.empDept=="HR") &&(employee.empSalary>=75000) ){
        console.log(employee);
    }
   
})
