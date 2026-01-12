// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

function countRepatedNum(numbers,target)
{

   let count = 0;

    for(num of numbers)
    {
        if(num === target)
        {
            count++;
        }
    }

    return count;
}

let find = countRepatedNum([11,12,2,4,8,44,14,11,12,1,2,1,3,5,8],8);
console.log(find);