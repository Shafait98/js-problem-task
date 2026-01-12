// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

function countRepatedNum(num)
{
    const numbers = [5,6,11,12,98,5 ]

    count = 0;

    for(c of numbers)
    {
        if(c === num)
        {
            count++;
        }
    }

    return count;
}

let find = countRepatedNum(11);
console.log(find);