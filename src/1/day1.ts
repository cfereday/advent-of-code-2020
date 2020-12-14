type arrayOfNumbers = Array<number>;

const addedMatchesSummedNumber = (numbers: arrayOfNumbers, sumNumber: number): boolean =>  {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const summed = numbers.reduce(reducer);
    return summed === sumNumber;
};

const sums = (numbers: arrayOfNumbers, sumNumber: number): arrayOfNumbers => {
    let result = [];

    if (numbers.length === 2) {
        const addedNumber = addedMatchesSummedNumber(numbers, sumNumber);
        if (addedNumber) {
            return numbers;
        }
    }

    for (const checkingNumber of numbers) {
        let numbersMinusCheckingNumber = numbers.filter(num =>  num !== checkingNumber );
        const addedNumber = numbersMinusCheckingNumber.filter(num => addedMatchesSummedNumber([num, checkingNumber], sumNumber));
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
