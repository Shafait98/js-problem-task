//take input from user & loterry their  names

function lottery()
{
    const input = prompt("Enter names");
    const people = input.split(",");

    const winner = Math.floor(Math.random() * people.length);

   console.log(people[winner]);
}

const play = lottery();
console.log(play);