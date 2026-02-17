console.log("Maanvir Sidhu")

const accountId = "abc123"
let accountEmail = "maanvir_89@gmail.com"
var accountPassword = "12345"
accountCity = "Amritsar"
let accountState;

accountEmail = "xyz@gmail.com"
accountPassword = "67890"
accountCity = "Jalandhar"

// accountId = "xyz123" // This will throw an error because accountId is a constant and cannot be reassigned.

/*
Prefer using const for variables that won't be reassigned, and let for variables that will be reassigned. 
Avoid using var to prevent issues with variable hoisting and scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])