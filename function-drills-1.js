'use strict';

function yearOfBirth (age) {
  if (age <= 0) {
    throw new Error('Age cannot be negative');
  }
  return 2018 - age;
}

function whoAmI (name, age) {
  const yearOB = yearOfBirth(age);
  console.log(`Hi, my name is ${name} and I'm ${age} years old`);
  console.log(`I was born in ${yearOB}`);
}

whoAmI('Tarik', -5);