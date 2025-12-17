// "1","2","3","4" into 1,2,3,4

function convert()
{
    const input = ["1","2","3","4"];

    const output = input.map(item =>
    {
       let res = parseInt(item);
       return res
    }
    );

    console.log(output);
}

const play = convert();
console.log(play);