// Description:
//     Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
//
//     Task
// Your mission:
//     Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
//
//     A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
//
//     Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
// if (enteredCode !== correctCode)  return false;
//     const current = new Date(currentDate);
//     const expiration = new Date(expirationDate);
// //     return expiration >= current
    return  enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate)
}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'))
console.log(checkCoupon('123','123','October 5, 2014','October 1, 2014'))
console.log(checkCoupon('124','123','October 5, 2014','October 1, 2014'))
console.log(checkCoupon('123','123','October 5, 2014','October 5, 2014'))