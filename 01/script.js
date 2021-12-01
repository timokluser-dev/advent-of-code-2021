const fs = require('fs');

function getNumbers() {
  return fs
    .readFileSync('data.txt')
    .toString()
    .split('\n')
    .filter(val => val.length > 0)
    .map(Number);
}

function main() {
  const numbers = getNumbers();

  let previousNumber;
  let numbersIncreased = 0;
  let numbersDecreased = 0;
  for (const number of numbers) {
    if (previousNumber !== undefined) {
      const numberHasIncreased = number > previousNumber;
      (numberHasIncreased && numbersIncreased++) || (!numberHasIncreased && numbersDecreased++);
      console.log(`${number} ${numberHasIncreased ? '(increased)' : '(decreased)'}`);
    } else {
      console.log(`${number} (N/A - no previous measurement)`);
    }

    previousNumber = number;
  }

  console.log(`\nNumbers Increased: ${numbersIncreased}`);
  console.log(`Numbers Decreased: ${numbersDecreased}`);
}

main();
