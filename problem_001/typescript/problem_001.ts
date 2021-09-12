export function main() {
  const sequence = Array.from(Array(1000).keys());

  const result = sequence.reduce(
    (previousValue: number, currentValue: number) => {
      if (currentValue % 3 === 0 || currentValue % 5 === 0) {
        return (previousValue += currentValue);
      } else {
        return previousValue;
      }
    }
  );

  console.log(`This is your result: \n ${result}`);
}

function mainShort() {
  const sequence = Array.from(Array(1000).keys());

  const result = sequence.reduce(
    (previousValue: number, currentValue: number) =>
      currentValue % 3 === 0 || currentValue % 5 === 0
        ? (previousValue += currentValue)
        : previousValue
  );

  console.log(`This is your result: \n ${result}`);
}

main();
mainShort();
