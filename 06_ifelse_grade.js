function voteEligibility(age){
    if(age==undefined ||age==null ){
        console.log(`"Invalid Data": age= ${age}`);
        
    }else{
        if (age==0 ||age<0 ||age>120) {
            console.log(`"Invalid Data": age= ${age}`);
        }else{
            if(age<18){
            console.log(`You are not eligible for voting: age= ${age}`);
            }else{
           console.log(`Congratulations! You are eligible for voting: age= ${age}`); 
            }
        }
    }
}
voteEligibility(45);
console.log(`--------------------------------------------------------`);
voteEligibility(8);
console.log(`--------------------------------------------------------`);
voteEligibility(17);
console.log(`--------------------------------------------------------`);
voteEligibility(20);
console.log(`--------------------------------------------------------`);
voteEligibility(-10);
console.log(`--------------------------------------------------------`);
voteEligibility(200);
console.log(`--------------------------------------------------------`);
voteEligibility(0);
console.log(`--------------------------------------------------------`);
voteEligibility(undefined);
console.log(`--------------------------------------------------------`);
voteEligibility(null);