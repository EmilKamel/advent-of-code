var fs = require('fs');
const data = fs.readFileSync('data.txt', 'UTF-8');

const pureInstructions = getData()
var instructions = null;


//setup
function getData()
{
    let o = data.split(",");
    for(var i = 0; i < o.length; i++)
    {
        o[i] = parseInt(o[i]);
    }
    return o;
}


function resetMemory()
{
    instructions = pureInstructions.slice();
}

function instruction(opcode, a, b, c)
{
    if(opcode == 1)
    {
        //ADD
        instructions[c] = instructions[a] + instructions[b];
        
    } else if(opcode == 2)
    {
        //MULTIPLY
        instructions[c] = instructions[a] * instructions[b];

    } else if(opcode == 99)
    {
        //END
        done = true;
    }
}


var address;
var done;

function compute(noun, verb)
{

    resetMemory();

    instructions[1] = noun;
    instructions[2] = verb;

    address = 0;
    done = false;

    while(!done)
    {
    instruction(instructions[address], instructions[address+1], instructions[address+2], instructions[address+3])
    address += 4;
    }
    return instructions[0];
}

var goal = 19690720;
mainloop();


function mainloop()
{
        for (let n = 0;n <= 99; n++) {
            for (let v = 0;v <= 99; v++) {
                output = compute(n, v);
                //console.log('n: ' + n+ ' v: '+ v + ' output: ' + output);
                if(output == goal)
                {
                    console.log('noun: ' + n + ' verb: ' + v);
                    console.log((100 * n) + v);
                }
            }
        }
}
