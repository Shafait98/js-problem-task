// You have to trim all duplicate elements from an array

function trimDuplicate(array)
{
    const unique = [];
    for(item of array)
    {
        if(unique.includes(item) === false)
        {
            unique.push(item);
        }
    }
    return unique;
}

const view = trimDuplicate(['Farhan','Samanta','Farhan','Rakib','Salek','Samanta']);
console.log(view);