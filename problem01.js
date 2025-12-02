// inch to feet

function inchTofeet(inch)
{
    const feetFrac = inch / 12;
    const feet = parseInt(feetFrac);
    const feetRemaining = inch % 12;
    const result = feet + " ft " + feetRemaining + " inch ";
    return result;
}

const samantasHeight = inchTofeet(62);
console.log(samantasHeight);

//