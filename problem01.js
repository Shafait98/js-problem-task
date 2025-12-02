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

//mile to km

function mileTokilo(mile)
{
  result = mile * 1.60934;
  return result;
}
const show = mileTokilo(5);
console.log(result, "KM"); 