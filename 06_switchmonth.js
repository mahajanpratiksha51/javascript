function monthOfYear(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log(`Month No:${monthNumber} = "January"`);
            break;
        case 2:
            console.log(`Month No:${monthNumber} = "February"`);
            break;

        case 3:
            console.log(`Month No:${monthNumber} = "March"`);
            break;

        case 4:
            console.log(`Month No:${monthNumber} = "April"`);
            break;

        case 5:
            console.log(`Month No:${monthNumber} = "May"`);
            break;

        case 6:
            console.log(`Month No:${monthNumber} = "June"`);
            break;

        case 7:
            console.log(`Month No:${monthNumber} = "July"`);
            break;

        case 8:
            console.log(`Month No:${monthNumber} = "August"`);
            break;

        case 9:
            console.log(`Month No:${monthNumber} = "September"`);
            break;

        case 10:
            console.log(`Month No:${monthNumber} = "Octomber"`);
            break;

        case 11:
            console.log(`Month No:${monthNumber} = "November"`);
            break;
        case 12:
                console.log(`Month No:${monthNumber} = "December"`);
                break;
         default:
            console.log(`Month No:${monthNumber} ="Invalid Input"`);
            break;
    }
}
console.log(`------------------------------------------------------------------------`)
console.log(`                  Switch Case`);
console.log(`----------------------------------------------------------------------------`);
monthOfYear(1)
monthOfYear(8)
monthOfYear(undefined)
monthOfYear(12)
monthOfYear(9)
monthOfYear(14)