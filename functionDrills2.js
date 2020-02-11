function jediName(firstName, lastName) {
  return lastName.slice(0, 3) + firstName.slice(0, 2);

}

console.log(jediName('Keith', 'Freitag'))

//second part //

function beyond(num) {
  if (num === Infinity) {
    return 'And beyond';
  }
  else if (num !== Infinity && num > 0) {
    return 'To infinity';
  }
  else if (num !== Infinity && num < 0) {
    return 'To negative infinity';
  }
  else if (num === 0) {
    return 'staying home';
  }
}

console.log(beyond(6));