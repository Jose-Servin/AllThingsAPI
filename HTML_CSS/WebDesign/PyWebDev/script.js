'use strict';
/*
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


/// Create a dynamic sentence using Baker object 

const Baker = {
    age: 9,
    firstName: "Baker",
    home: 'Houston',
    role: 'best good boy',
    friends: ['Camila', 'Luna', 'Bella'],
    sayHello: function () {
        this.greeting = `Hello, my name is Baker, I am ${this.age} years old. Do I deserve a treat? `;
        return this.greeting;
    },
    GiveTreat: true,
    getSummary: function () {
        this.summary = `${Baker.sayHello()}..... ${this.GiveTreat ? 'YES!' : 'NO! :('} `;
        return this.summary;
    }
}

// we need to run sayHello function in order to define greeting attribute for our object.
// Baker.sayHello()
// Now, function results are stored in our Object's attribute called greeting 
// console.log(Baker.greeting)


// Small Dynamic Summary Challenge
Baker.getSummary();
console.log(Baker.summary)


// BMI Code Challenge #3
const Mark = {
    firstName: 'Mark',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.weight / (this.height ** 2)
        return this.bmi
    }
}

const Jake = {
    firstName: 'Jake',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.weight / (this.height ** 2)
        return this.bmi
    }
}


const jake_bmi = Jake.calcBMI()
const mark_bmi = Mark.calcBMI()
if (jake_bmi > mark_bmi) {
    console.log(`${Jake.firstName}'s BMI (${Jake.bmi}) is higher than ${Mark.firstName}'s BMI of ${Mark.bmi}`)
} else {
    console.log(`${Mark.firstName}'s BMI (${Mark.bmi}) is higher than ${Jake.firstName}'s BMI of ${Jake.bmi}`)
}

*/

// For loops 


const users = ['Baker', 'Camila', 'Bella', 'Luna', 'Dog', 'Cat']
const randomInfo = [1, true, ['One', 'Two', 'Three'], 'Baker']
for (let i = 0; i < users.length; i++) {
    console.log(users[i])
}


const randomInfoDataTypes = []
for (let i = 0; i < randomInfo.length; ++i) {
    randomInfoDataTypes[i] = typeof randomInfo[i];
}

console.log(randomInfoDataTypes)


/// continue and break with loops

/// count from 1 to 10 but skip even numbers
for (let i = 1; i <= 10; ++i) {
    if (i % 2 == 0) {
        continue
    } else {
        console.log(i)
    }
}
// for loop break example
const grades = [99, 85, 73, 50, 100]
for (let i = 0; i < grades.length; ++i) {
    if (grades[i] < 60) {
        console.log("Oh no! someone failed the class..stopping all processes.")
        console.log(`The failing grades was a ${grades[i]}`)
        break
    } else {
        console.log(grades[i])
    }
}

/// Rocket blastoff
const countDown = [1, 2, 3, 4, 5]

for (let i = countDown.length - 1; i >= 0; --i) {
    console.log(countDown[i])
}

// while loop

// let limit = 10

// while (limit >= 5) {
//     console.log(limit);
//     if (limit === 5) {
//         console.log('Loop is about to stop')
//     }
//     limit--
// }