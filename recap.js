// Make a function called oddAverage() take a number of array of numbers as a parameter, calculates the average of the odd number of the array

function oddAverage(numbers)
{
    let oddNum = [];  // taking out the odd numbers in this array
    let sum = 0; // for calculating the odd numbers sum we initialize the value 0
    let avg;  // for calculating average
    let OddNumLength; 

    for(num of numbers)       // we traverse the input array & pick odd number as per condition and push those into oddNum array
    {
        if(num % 2 === 1)
        {
            oddNum.push(num)
        }
    }
    OddNumLength = oddNum.length; // new array length
 
    for(num of oddNum)       // calculating the sum of oddNum array
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