var fs = require('fs');

const data = fs.readFileSync('data.txt', 'UTF-8');
const lines = data.split(/\r?\n/);

function calculateFuel(mass)
{
    let output = Math.floor(mass/3) - 2
    return output;
}

var sum = 0;

lines.forEach(line => { 
    sum = sum + calculateFuel(line)
});

console.log(sum);

