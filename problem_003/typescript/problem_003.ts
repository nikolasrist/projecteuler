/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

function isPrime(value: number): boolean {
  const squrtValue = Math.sqrt(value);
  for (let index = 2; index < squrtValue; index++) {
    if (value % index === 0) {
      return false;
    }
  }
  return true;
}

function main() {
  let value = 600851475143;
  const factors: number[] = [];
  let factor = 2;
  while (value > 1) {
    while (value % factor === 0) {
      factors.push(factor);
      value = value / factor;
    }
    factor++;
  }
  factors.sort((a, b) => a - b);
  const primeFactors = factors.filter((value) => isPrime(value));
  console.log(
    `Factors: ${factors}\nPrimeFactors: ${primeFactors}\nMax: ${
      factors[factors.length - 1]
    }`
  );
}

main();
