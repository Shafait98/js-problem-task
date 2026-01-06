// Make a function called oddAverage() take a number of array of numbers as a parameter, calculates the average of the odd number of the array

function oddAverage(numbers)
{
    let oddNum = [];
    let sum = 0;
    let avg;
    let OddNumLength;

    for(num of numbers)
    {
        if(num % 2 === 1)
        {
            oddNum.push(num)
        }
    }
    OddNumLength = oddNum.length;

    for(num of oddNum)
    {
        sum = sum + num;
    }
  

    avg = sum / OddNumLength;
 
      console.log("Odd numbers are: ", oddNum);
      console.log("Sum of odd numbers: ", sum);



    return avg;
}

const input = oddAverage([1,2,3,4,5,6,7,8,9,88,77,66,45,44,43,633]);
console.log(input);