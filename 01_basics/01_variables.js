const accountId=144553
let accountEmail="ritwik@gmail.com"
var accountPassword="12345"
accounCity="Kolkata"
let account State=1

// accountId=2 // not allowed

accountEmail="hello@gmail.com"
accountPassword="123456"
accounCity="New York"

console.log(accountId);

/*

prefer not to use var
beacuse of issue in block scope and functional  scope

*/
console.table([accountId, accountEmail, accountPassword, accounCity])