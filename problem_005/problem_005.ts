/**
 * Problem 005:
 *
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

function isDividible(value: number): boolean {
  const checkArray = Array.from({ length: 20 }, (_, i) => i + 1);
  const result = checkArray
    .map((checkValue) => value % checkValue)
    .reduce((sum, currentValue) => sum + currentValue, 0);
  return result === 0;
}

export function main() {
  console.log("Start to search.");
  let smallestDividible = undefined;
  let testNumber = 0;
  while (!smallestDividible) {
    if (isDividible(testNumber)) {
      smallestDividible = testNumber;
    }
    testNumber++;
  }
  console.log(`Found smallest number: ${smallestDividible}`);
}

main();
