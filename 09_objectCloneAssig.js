let bankSbi = {
  bankName: "State Bank Of India",
  accountNo:"00000036150491589 ",
  accountType:"Saving Account",
  ifscCode: "SBIN0011777",
}

let bankLocation = {
  street:'COLLECTORATE, behind NYAY MANDIR BLDG, Civil Lines',
  city:'Nagpur',
  pin:'440001',
}

let returnBankSbi = Object.assign(bankSbi)
let returnBankLocation = Object.assign(bankLocation)
console.log('============ cloned setup 1 ===============')
console.log(returnBankSbi)
console.log('============ cloned setup 2 ===============')
console.log(returnBankLocation)

let rateOfInterest = {
  homeLoanInterest: '8.50% p.a. onwards',
  personalLoanInterest: '12.61%',
  dueInterest: '3.4% per month',
}

console.log('============ All details after merging  ===============')

let sbiDetails = {...bankSbi, ...bankLocation, ...rateOfInterest}
console.log(sbiDetails)

console.log('============= Traverse sbiDetails using for in loop =============')
for (const key in sbiDetails) {
  if (Object.prototype.hasOwnProperty.call(sbiDetails, key)) {
    const element = sbiDetails[key];
    console.log(element)
  }
}