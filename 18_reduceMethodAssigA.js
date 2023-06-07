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

console.log(`1) Find all employees from wipro company`);
const arrayWipro=arrayEmployes.filter((employee)=>{
    return employee.empCompany=="Wipro"
})

const arrayNames=arrayWipro.map((employee)=>{
    console.log(`  Employee Name:-> ${employee.empName}  Employee Company:-> ${employee.empCompany}`);
})

console.log(`------------------------------------------------------------------------------------------------`);
console.log(`2)Find all employees from 'IT' or 'HR' department`);
const arrayItHr=arrayEmployes.filter((employee)=>{
    return employee.empDept=="HR" || employee.empDept=="IT"
})

const ArrayDept=arrayItHr.map((employee)=>{
    console.log(`  Employee Name:-> ${employee.empName}  Employee Department:-> ${employee.empDept}`);
})


console.log(`-------------------------------------------------------------------------------------------------`);
console.log(`3) Find all employees whose empId are grater than 50`);

const arrayId=arrayEmployes.filter((employee)=>{
    return employee.empId>50
})

const arrayEmp=arrayId.map((employee)=>{
    console.log(`  Employee Name:-> ${employee.empName}  Employee ID:-> ${employee.empId}`);
})


console.log(`-----------------------------------------------------------------------------------------------`);
console.log(`4) Find all employees whose name start with letter "A" "V" "M"`);

const arrayStart=arrayEmployes.filter((employee)=>{
     return employee.empName.startsWith("A") ||  employee.empName.startsWith("V") ||employee.empName.startsWith("M")
})



 const arrayavm= arrayStart.map((employee)=>{
    console.log(`  Employee Name:-> ${employee.empName}`);
 })

 console.log(`---------------------------------------------------------------------------------------------`);



 console.log(`5) Find the average salary of all the employee`);
 const arrayAverage=arrayEmployes.map((employee)=>{
    return employee.empSalary
 })
 console.log(`  Salary of all employees:-> [${arrayAverage}]`);
 const arraysum=arrayAverage.reduce((runningTotal,value)=>{
    return runningTotal+value;
 })
 console.log(`  sum of all employee salaries:-> ${arraysum}`);
const array4=arraysum/arrayAverage.length;
console.log(`  Average Salary;-> ${array4}`);



console.log(`--------------------------------------------------------------------------------------------`);


console.log(`6) Find the average salary for IT departmrnt`);
const arrayAv=arrayEmployes.filter((employee)=>{
    return employee.empDept=="IT" 
})

const arrayMap=arrayAv.map((employee)=>{
    return employee.empSalary
})
console.log(`  Salary of it department employee:-> ${arrayMap}`);
const arrayAvIt=arrayMap.reduce((runningTotal,value)=>{
    return runningTotal+value
})
console.log(`  Sum of salaries:-> ${arrayAvIt}`);
const arrayFinal=arrayAvIt/arrayMap.length;
console.log(`  Average salary :->${arrayFinal}`);