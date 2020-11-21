var fs = require('fs');

const data = fs.readFileSync('data.txt', 'UTF-8');
const lines = data.split(/\r?\n/);

function calculateFuel(mass)
{
    let output = Math.floor(mass/3) - 2
    return output;
}

function calculateTotalFuel(mass, total)
{
    let weightOfFuel = calculateFuel(mass)
    if(mass <= 0 || weightOfFuel<= 0)
    {
        return total
    }
    //console.log('weight of fuel: ' + weightOfFuel + ' total: ' + total)
    return calculateTotalFuel(weightOfFuel, total + weightOfFuel);
}


var sum = 0;

lines.forEach(line => { 
    sum = calculateTotalFuel(line, sum);
});


console.log(sum);

