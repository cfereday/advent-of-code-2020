type arrayOfNumbers = Array<number>;

const addedMatchesSummedNumber = (firstNumber: number, secondNumber: number, sumNumber: number): boolean =>  {
    const summed = firstNumber + secondNumber;
    return summed === sumNumber;
};

const sums = (numbers: arrayOfNumbers, sumNumber: number): arrayOfNumbers => {
    let result = [];

    if (numbers.length === 2) {
        const addedNumber = addedMatchesSummedNumber(numbers[0], numbers[1], sumNumber);
        if (addedNumber) {
            return numbers;
        }
    }

    for (const checkingNumber of numbers) {
        let numbersMinusCheckingNumber = numbers.filter(num =>  num !== checkingNumber );
        const addedNumber = numbersMinusCheckingNumber.filter(num => addedMatchesSummedNumber(num, checkingNumber, sumNumber));
        if (addedNumber[0]) {
            result.push(addedNumber[0]);
        }

    }
    return result;
};

const multiplies = (numbers: arrayOfNumbers): number => {
  return numbers[0] * numbers[1];
};

const productForASum = (numbers: arrayOfNumbers, sumNumber: number): number => {
    return multiplies(sums(numbers, sumNumber));
};

module.exports = {sums, multiplies, productForASum};
