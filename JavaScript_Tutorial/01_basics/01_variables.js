// 4 Types of variable declaration
const userName = "Daksh Kanaujia"
let emailId = "dk@gmail.com"
var accountId = 10089
city_Name = "Lucknow"

/*
userName = "hello" -- Not Allowed
TypeError: Assignment to constant variable.
*/

accountId = 902 // will change
emailId = "dk@yahoo.com"
city_Name = "Bengaluru"

/*
var declarationn shoudld not be used 
because of scope issue 
*/


// use only let and const
console.log([userName,emailId, accountId, city_Name]);