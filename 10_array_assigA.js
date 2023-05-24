const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"]
console.log(`Given Array Is:-> ${arrayFruits}`);
console.log(`1]-------First And Last Element---------`);
const firstValue=arrayFruits[0];
console.log(`Updated Array Is:-> "${firstValue}"`);


const lastvalue  = arrayFruits.length;
const lastElement = arrayFruits[lastvalue-1];
console.log(`Updated Array Is:-> "${lastElement}"`);


console.log(`2]-------Add Papaya before Element Banana----------`);
arrayFruits.unshift("Papaya")
console.log(`Updated Array Is:-> ${arrayFruits}`);

console.log(`3]-------Remove "Mango" from array-------------------`);
arrayFruits.splice(4,1);
console.log(`Updated Array Is:-> ${arrayFruits}`);


console.log(`4]-------Add Element At The Last Position--------------------`);
arrayFruits.push("Pineapple");
console.log(`Updated Array is:-> ${arrayFruits}`);


console.log(`5]-------Insert Element "Dragon Fruit before "Water Melon"-----------`);

arrayFruits.splice(5,0,"Dragen Fruit")
console.log(`Updated Array Is:-> ${arrayFruits}`);

console.log(`---------Replace element orange with kiwi`);
arrayFruits.splice(2,1,"Kiwi")
console.log(`Updated Array is:-> ${arrayFruits}`);

console.log(`7]---------Elements Starting From Index 1 to 4----------`);
var display=arrayFruits.slice(1,5);
console.log(`Updated Array is:-> ${display}`);

console.log(`8]--------Select Last 3 Element-------------------------`);
var length1=arrayFruits.length;
var a1=arrayFruits[length1-1];
var a2=arrayFruits[length1-2];
var a3=arrayFruits[length1-3];
console.log(`Last Three Element in array :-> ${a1},${a2},${a3}`);