//take input from user & loterry their  names

function lottery()
{
   

   const prompt = require("prompt-sync")(); //

    const input = prompt("Enter names: ");
    if (!input) 
      { 
         console.log("No names entered");
          return;
      }
    const people = input.split(",").map(name => name.trim());

    const winner = Math.floor(Math.random() * people.length);

   console.log(people[winner]);
}

lottery();