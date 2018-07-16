'use strict';

function yearOfBirth (age) {
  if (age <= 0) {
    throw new Error('Age cannot be negative');
  }
  return 2018 - age;
}

function whoAmI (name, age) {
  if (!name || !age || typeof name !== 'string' || typeof age !== 'number') {
    throw new Error('Arguments not valid');
  }
  const yearOB = yearOfBirth(age);
  console.log(`Hi, my name is ${name} and I'm ${age} years old`);
  console.log(`I was born in ${yearOB}`);
}

try {
  whoAmI('Tarik', 21);
  whoAmI('Tarik', -5);
  whoAmI('Tarik', '21');
  whoAmI(21, 21);
  whoAmI();
} catch (e) {
  console.error(e.message);
}