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

retired_checker(1996)


// Arrays 
