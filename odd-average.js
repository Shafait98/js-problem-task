// Make a function called oddAverage() take a number of array as a parameter, calculate the average of odd number of the array

// function oddAverage(number)
// {
//     let oddNum = [];
//     let sum = 0;
//     let avg;
 

//     for(num of number)
//     {
//       if(num % 2 === 1)
//       {
//         oddNum.push(num);
//       }
//     }
// //    console.log(oddNum);
//     const len = oddNum.length;

//     for(num of oddNum)
//     {
//         sum = sum +num;
//     }
//     // console.log(sum);
//    avg = sum / len;

//    console.log("The odd average is: ", avg);

// }

// const show = oddAverage([2,3,4,5,6,7,8,9,11,13,14,15,16]);
// console.log

//** Optimized version */

function oddAverage(numbers)
{
  let sum = 0;
  let count = 0;

  for(num of numbers )
  {
    if(num % 2 === 1)
    {
      sum += num;
      count++;
    }
  }
   console.log(count);
   console.log(sum);
  return sum / count;
}

console.log(oddAverage([1,2,3,4,5,6,7,8,9,22,33,53,43,47,657,433,4343,43,45,422]));

