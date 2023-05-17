var args=function(gradScore,hscScore,sscScore,candidateName){
    var result=gradScore>=70 ||hscScore>=80 ||sscScore>=90? `Congrates! ${candidateName} you are eligible for TCS interview`:`${candidateName} Unfortunately you are not eligible for interview`;
    console.log(`  ${result}`)
}
args(80,86,90,"Pratiksha");
console.log(`-------------------------------------------------------------------------------`);
args(70,65,55,"Sushma");
console.log(`-------------------------------------------------------------------------------`);
args(60,79,88,"Priya");