`use strict`

function yearOfBirth(age) {
  return 2020 - age;
}

function createGreeting(name, age) {
  if (age < 0) {
    throw new Error("Age can not be negative");
  }
  if (age === undefined || name === undefined) {
    throw new Error("Arguments not valid");
  }
  if (typeof age !== 'number') {
    throw new TypeError('Age needs to be a real number');
  }


  const dob = yearOfBirth(age);
  return `Hi, my name is ${name} and I\'m ${age} years old.  I was born in ${dob}.`;
}

try {
  const greeting1 = createGreeting('Keith', 27);
  console.log(greeting1);
}
catch (e) {
  console.error(e.message);
}

