function gradeCalculation(marks) {

    if (marks == undefined || isNaN(marks) || marks <= 0 || marks > 100) { // undefined, null
        console.log(`Invalid marks: ${marks}`);
    } else {
        if (marks >= 90) {
            console.log(`Funtastic Marks ${marks}, your grade is A+`);
        } else {
            if (marks < 35) {
                console.log(`Very Less marks ${marks} you are Failed`);

            } else {
                if (marks >= 75 && marks < 90) {
                    console.log(`Excellent Marks ${marks}, your grade is A `);
                } else {
                    if (marks >= 50 && marks < 75) {
                        console.log(`Good Marks ${marks} your grade is B`);
                    } else {
                        if (marks >= 35 && marks < 50) {
                            console.log(`Marks is ${marks}, your grade is C, Need improvement`);

                        }
                    }
                }
            }

        }
    }

}
console.log(`----------------------------------------------------------`);
console.log(`           Grade System Assignment`);
console.log(`-----------------------------------------------------------`);
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91")
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);