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

//third part

function decode(encrypted) {
  let words = encrypted.split(' ');
  let result = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] === 'a') {
      result += words[i][1];
    } else if (words[i][0] === 'b') {
      result += words[i][2];
    } else if (words[i][0] === 'c') {
      result += words[i][3];
    } else if (words[i][0] === 'd') {
      result += words[i][4];
    } else {
      result += ' ';
    }
  }

  return result;
}
console.log(decode('craft block argon meter bells brown croon droop'))

//how many days in month//

function daysInMonth(month, year) {
  let result = '';
  if (year % 4 === 0) {
    result += 'February has 29 days';
  }
  else {
    switch (month) {
      case 'January':
      case 'March':
      case 'May':
      case 'July':
      case 'August':
      case 'October':
      case 'December':
        result = `${month} has 31 days`;
        break;
      case 'April':
      case 'June':
      case 'September':
      case 'November':
        result = `${month} has 30 days`;
        break;
      case 'February':
        result = `${month} has 28 days`;
        break;
    }
  }
  return result
}

console.log(daysInMonth('February', 2020));