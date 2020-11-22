var fs = require('fs');

const data = fs.readFileSync('data.txt', 'UTF-8');
var instructions = data.split(",");

//setup
for(var i = 0; i < instructions.length; i++)
{
    instructions[i] = parseInt(instructions[i]);
}
instructions[1] = 12;
instructions[2] = 2;


function compute(identifier, first, second, result)
{
    if(identifier == 1)
    {
        //ADD
        instructions[result] = instructions[first] + instructions[second];
        
    } else if(identifier == 2)
    {
        //MULTIPLY
        instructions[result] = instructions[first] * instructions[second];

    } else if(identifier == 99)
    {
        //END
        done = true;
    }
}

console.log('starting');
var index = 0;
var done = false;
while(!done)
{
    compute(instructions[index], instructions[index+1], instructions[index+2], instructions[index+3])
    index += 4;
}
console.log(instructions);


