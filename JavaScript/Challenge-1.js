// create an arrow function that calculates the average of 3 given values 
const calcAverage = (score_1, score_2, score_3) => {
    const score_avg = (score_1 + score_2 + score_3) / 3;
    return score_avg
}


function checkWinner(avgD, avgK) {
    if (avgD >= 2 * avgK) {
        console.log(`Dolphins win (${avgD} vs ${avgK})!`)
    } else if (avgK >= 2 * avgD) {
        console.log(`Koalas win (${avgK} vs ${avgD})!`)
    }
}


// Checking results for case 1
const d_score_1 = calcAverage(44, 23, 71);
const k_score_1 = calcAverage(65, 54, 49);

checkWinner(d_score_1, k_score_1);


/// Create a dynamic sentence using Baker object 

const Baker = {
    age: 9,
    home: 'Houston',
    role: 'best good boy',
    friends: ['Camila', 'Luna', 'Bella'],
    sayHello: function (age) {
        return `Hello, my name is Baker, I am ${age} years old. `
    }
}

console.log(Baker.sayHello)