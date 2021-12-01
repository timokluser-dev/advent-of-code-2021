const fs = require('fs');

function getNumbers() {
  return fs
    .readFileSync(`${__dirname}/data.txt`)
    .toString()
    .split('\n')
    .filter(value => value.length > 0)
    .map(Number);
}

function main() {
  const numbers = getNumbers();

  console.log('\n--- Part 1 ---');
  const measurementsIncreased = numbers.filter((value, i) => numbers[i] < numbers[i + 1]);
  console.log(`Measurements Increased: ${measurementsIncreased.length}`);

  console.log('\n--- Part 2 ---');
  const measurementWindowsIncreased = numbers.filter(
    (value, i) =>
      numbers[i] + numbers[i + 1] + numbers[i + 2] <
      numbers[i + 1] + numbers[i + 2] + numbers[i + 3]
  );
  console.log(`Measurement Windows Increased: ${measurementWindowsIncreased.length}`);
}

main();
