'use strict';

console.log("Hello World");

function say_howdy(user) {
    console.log(`Howdy! ${user}`);
}

say_howdy('Baker');

function make_juice(apples, oranges) {
    const juice = `Your juice has ${apples} apples and ${oranges}.`;
    return juice;
}

const my_juice = make_juice(1, 3);
console.log(my_juice)


// Arrow Function
const add_to_cart = item => `Adding ${item} to your shopping cart`;
console.log(add_to_cart('Soap'))


const greeting = function (person) {
    return `Hello, ${person}!`
}

console.log(greeting('Servin'))


// Years until retirement function

const years_old = function (birthYear) {
    const age = 2022 - birthYear;
    return age
}


const retired_checker = function (birthYear) {
    const age = years_old(birthYear);
    if (age >= 65) {
        console.log(`Congrats!You are ${age} years old. Enjoy retirement!`)
    } else {
        const years_until_retirement = 65 - age;
        console.log(
            `You have ${years_until_retirement} more years until retirement. You are currently ${age} years old.`)
    }
}

retired_checker(1990)


// Arrays 
const club_members = ['Baker', 'Camila,', 'Luna', 'Bella']



///// Challenge 1
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
    else {
        console.log('No Team wins!')
    }
}


// Checking results for case 1
const d_score_1 = calcAverage(44, 23, 71);
const k_score_1 = calcAverage(65, 54, 49);
checkWinner(d_score_1, k_score_1);

// Checking results for case 2
const d_score_2 = calcAverage(85, 54, 41);
const k_score_2 = calcAverage(23, 34, 27);
checkWinner(d_score_2, k_score_2);


// Challenge 2 Tip Calculator 

function calcTip(bill_amount) {
    if (bill_amount >= 50 && bill_amount <= 300) {
        const tip = bill_amount * 0.15;
        return tip
    } else {
        const tip = bill_amount * 0.20;
        return tip;
    }
}


const test_data = [125, 555, 44];
const tip_data = [
    calcTip(test_data[0]),
    calcTip(test_data[1]),
    calcTip(test_data.at(- 1))
]

console.log(tip_data)