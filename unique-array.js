// You have to trim all duplicate elements from an array

// function trimDuplicate(array)
// {
//     const unique = [];
//     for(item of array)
//     {
//         if(unique.includes(item) === false)
//         {
//             unique.push(item);
//         }
//     }
//     return unique;
// }

// const view = trimDuplicate(['Farhan','Samanta','Farhan','Rakib','Salek','Samanta']);
// console.log(view);

function scrapArray(array)
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

const play = scrapArray([2,2,2,5,8,7,7,8,9,45,45,45]);
console.log(play);