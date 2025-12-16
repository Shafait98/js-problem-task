//Basic Lottery Function (Pick 1 Winner)

function lottery(arr)
{
    const random = Math.floor(Math.random() * arr.length);

    return arr[random];
}

const play = lottery(['Farhan','Samanta','GPT bro','Guitar','Cigarrate']);
console.log(play);