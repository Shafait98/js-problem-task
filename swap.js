let a = 4;
let b = 8;

console.log(a,b);

const temp = a;

a = b;
b = temp;

console.log(a,b);

//-------- Destructuring method

let x = 5;
let y = 10;

[x,y] = [y,x];

console.log(x,y);