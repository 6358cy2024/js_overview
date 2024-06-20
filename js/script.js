
var firstName = "Christian";
var lastName = "Yanez";
var age = 44;
var names = ['John', 'Ann', 'Bob', 'Frank', 'Jane'];
console.log(age > 30); 
console.log(age === '44');
console.log(0 || null || '' || -5 || undefined); //truthy or falsey
var oldEnough = (age >= 21);

//conditionals
if (firstName && lastName) {
    console.log("Fullname");
}
else if (!firstName) {
    console.log("please privde your first name!");
}
else if (!lastName) {
    console.log("please privde your last name!");
}
else {
    console.log("please provide your full name");
}
