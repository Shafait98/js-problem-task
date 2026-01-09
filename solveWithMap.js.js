// square elements of an array

let nums =[1,2,3,4,5];

const squared = nums.map(n => n * n );
console.log(squared);

//Extract property from array of object

let users = [ {name: "farhan", age:27, Occupation: "Dev"},
              {name: "Samanta", age:23, Occupation: "Audit"}

];

const name = users.map(user => user.name);

console.log(name);