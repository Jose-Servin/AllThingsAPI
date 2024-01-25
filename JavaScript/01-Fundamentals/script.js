"use strict;";

let hasDriverLicense = false;
let passTest = true;

const calcAge = function (birthYear) {
  const age = 2024 - birthYear;
  return age;
};

age = calcAge(1996);
console.log(age);

const calcAge2 = (birthYear) => 2024 - birthYear;
olderAge = calcAge2(1990);
console.log(olderAge);
