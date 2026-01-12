// Task-3:
// Write a function to count the number of vowels in a string.

function countVowel(str)
{
    let count = 0;

    for(let c of str)
    {
        if(c =='a' || c =='e' || c =='i' || c =='o' || c =='u')
        {
            count++;
        }
    }

    return count;
}

const play = countVowel('farhan');
console.log(play);