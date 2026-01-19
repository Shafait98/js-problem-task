// Task-3:
// Write a function to count the number of vowels in a string.

// function countVowel(str)
// {
//     let count = 0;

//     for(let c of str)
//     {
//         if(c =='a' || c =='e' || c =='i' || c =='o' || c =='u')
//         {
//             count++; 
//         }
//     }

//     return count;
// }

// const play = countVowel('farhan');
// console.log(play);

//optimized version

function countVowel(str)
{
    let count = 0;
    const vowel = 'aeiou';

    for(let char of str.toLowerCase())
    {
        if(vowel.includes(char))
        {
            count++;
        }
    }

    return count;
}

const play = countVowel("Shafait");
console.log(play);