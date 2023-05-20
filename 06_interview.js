var tcsEligibility= function(gradScore,hscScore,sscScore,candidateName){
    if(gradScore>=70 ||hscScore>=80||sscScore>90){
        console.log(`Congrates! ${candidateName} you are eligible for TCS interview`);
    }else{
        console.log(`${candidateName} you are not eligible for interview`);
    }
}
console.log(`----------------------------------------------------------------`);
console.log(`                TCS Interview Eligibility`);
console.log(`--------------------------------------------------------------------`);
tcsEligibility(80,86,90,"Pratiksha");
tcsEligibility(70,65,55,"Sushma");
tcsEligibility(60,79,88,"Priya")