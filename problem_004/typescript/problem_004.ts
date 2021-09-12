function isPalindrome(value: number): boolean {
  const reverseNumber = parseFloat(
    value.toString().split("").reverse().join("")
  );
  return value === reverseNumber;
}

function main(): void {
  let currentMax = 0;
  for (let outerIndex = 999; outerIndex >= 100; outerIndex--) {
    for (let index = 999; index >= 100; index--) {
      const possiblePalindrom = outerIndex * index;
      if (isPalindrome(possiblePalindrom)) {
        if (currentMax <= possiblePalindrom) {
          currentMax = possiblePalindrom;
        }
      }
    }
  }

  console.log(`Found max palindrom = ${currentMax}`);
}

main();
