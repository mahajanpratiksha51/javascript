console.log(`------------------Vehicle class----------------`);
class Vehicles{
    constructor(carName,color,price,engine,mileage)
    {
        this.carName=carName;
        this.color=color;
        this.price=price;
        this.engine=engine;
        this.mileage=mileage;
    }

}
const baleno = new Vehicles("Baleno","Gray","8.96lakh","1197 cc","22.94 kmpl");
const brizza = new Vehicles("Brizza","Silver","11.50lakh","1462 cc","19.8 kmpl");
const dzire = new Vehicles("Dzire","Blue","8.80lakh","1197 cc"," 22.41 kmpl");
const celerio = new Vehicles("Celerio","White","5.68lakh","998 cc","24.97 kmpl");
const swift = new Vehicles("Swift","Black","8.02lakh","1197 cc","22.56 kmpl");

const arrayOfVehicle=[baleno,brizza,dzire,celerio,swift];

for (const Vehicles of arrayOfVehicle) {
    console.log(`Name:-> ${Vehicles.carName}, color:-> ${Vehicles.color}, Price:-> ${Vehicles.price}, Engine:-> ${Vehicles.engine}, Mileage:-> ${Vehicles.mileage}`);
    console.log(`-------------------------------------------------------------------------------------------------`);
}


console.log(`--------------------college class-----------------------`);

class college{
    constructor(name,location,mobNo,department){
    this.name=name;
    this.location=location;
    this.mobNo=mobNo;
    this.department=department;
}
}


const mit= new college("Maharashtra Institute of Technology","Pune",9856346786,"Architecture")
const raysoni=new college("G H Raisoni Institute of Engineering","Jalgaon",8845983409,"chemistry")
const dnc= new college( "D.N.College","Faizpur",9956873424,"Biology");
const jtm= new college("J.T.Mahajan","Yawal",8745690435,"Electronics")



function traverseObject(clgName){
    for (const key in clgName) {
        if (Object.hasOwnProperty.call(clgName, key)) {
            const element = clgName[key];
            console.log(`${key}: ${element}`);
        }
    }
}
traverseObject(mit);
console.log(`------------------------------------------------------------------------`);
traverseObject(raysoni);
console.log(`------------------------------------------------------------------------`);
traverseObject(dnc);
console.log(`-------------------------------------------------------------------------`);
traverseObject(jtm);

