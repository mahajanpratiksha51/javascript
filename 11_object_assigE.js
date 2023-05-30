let sbiBank={
    bankName:"State Bank Of India",
    location:"Savda",
    accountNo:457396345679,
    ifsc:"SBIN0003847",
    intrestRate:8.50,
    details: function(){
        console.log(`Bank Name:-> ${this.bankName}, Location:-> ${this.location}, Account Number:->${this.accountNo}, IFSC:->${this.ifsc}, Intrest Rate:->${this.intrestRate}`);
}
}
sbiBank.details();
console.log(`---------------------------------------------------------------------------------------------------------------------------------`);
let axisBank={
    bankName:"Axis Bank",
    location:"pune",
    accountNo:125478045360,
    ifsc:"UTIB0000037",
    intrestRate:7.10,
    details: function(){
        console.log(`Bank Name:-> ${this.bankName},Location:-> ${this.location},Account Number:->${this.accountNo},IFSC:->${this.ifsc},Intrest Rate:->${this.intrestRate}`);
}
}
axisBank.details();
console.log(`----------------------------------------------------------------------------------------------------------------------------------------------------`);
let hdfcBank={
    bankName:"HDFC Bank",
    location:"Mumbai",
    accountNo:542986573458,
    ifsc:"HDFC0000355",
    intrestRate:10.50,
    details: function(){
        console.log(`Bank Name:-> ${this.bankName},Location:-> ${this.location},Account Number:->${this.accountNo},IFSC:->${this.ifsc},Intrest Rate:->${this.intrestRate}`);
}
}
hdfcBank.details();
console.log(`----------------------------------------------------------------------------------------------------------------------------------------`);
let yesBank={
    bankName:"Yes Bank",
    location:"Nashik",
    accountNo:974086753578,
    ifsc:"YESB0000021",
    intrestRate:6.50,
 details: function(){
    console.log(`Bank Name:-> ${this.bankName},Location:-> ${this.location},Account Number:->${this.accountNo},IFSC:->${this.ifsc},Intrest Rate:->${this.intrestRate}`);
 }
}
yesBank.details();

