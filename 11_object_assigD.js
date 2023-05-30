

let professor={
    name:"R.D.Patil",
    subject:"Operating System",
    salary:60000,
    college:"M I T ,Pune",
    age:35,
    degrees:{
        engineering:'CSC',
        PHD:'Adv Computing',
        Diploma:'Web Designing',
        Graduation:'CS',
    },
   certificates:["Hacker Rank Participation","Certificate in IFC course","Certificate in ADV Programming"],
     details:function (){
        let detailsDegree=`Engineering: ${this.degrees.engineering} , PHD: ${this.degrees.PHD}, Diploma: ${this.degrees.Diploma}, Graduation: ${this.degrees.Graduation}`
        return detailsDegree;
     }

    }


    const result=professor.details();
    console.log(`Professor Degrees Are:-> ${result}`);

console.log(`------------------------------------------------------------------------------------------------------------------------------`);
    professor.totalExperiance="14 years";
    console.log(`Total Experiance:-> ${professor.totalExperiance}`);
console.log(`------------------------------------------------------------------------------------------------------------------------------`);
    console.log(`Before Modification:`)
    console.log(professor);

    professor.age=45;
    professor.salary=45000;
    professor.subject="DataBase Management System"
    console.log(`After Modification:`);
    console.log(professor);

console.log(`---------------------------------------------------------------------------------------------------------------------------`);

    console.log(`Before Modification:`)
    console.log(professor.certificates)
    professor.certificates.push("Oracle Certified")
    console.log(`After Modification:`);
    console.log(professor.certificates);
      const length=professor.certificates.length;
      console.log(`Last Element Of An Array:-> [${professor.certificates[length-1]}]`);
