type arrayOfNumbers = Array<number>;

const addedMatchesSumemdNumber = (firstNumber: number, secondNumber: number, sumNumber: number): boolean =>  {
    const summed = firstNumber + secondNumber;
    return summed === sumNumber;
};

const sums = (numbers: arrayOfNumbers, sumNumber: number): arrayOfNumbers => {
    let result = [];
    for (const checkingNumber of numbers) {
        let numbersMinusCheckingNumber = numbers.filter(num =>  num !== checkingNumber );
        const addedNumber = numbersMinusCheckingNumber.filter(num => addedMatchesSumemdNumber(num, checkingNumber, sumNumber));
        if (addedNumber[0]) {
            result.push(addedNumber[0]);
        }

    }
    return result;
};

const multiplies = (numbers: arrayOfNumbers): number => {
  return numbers[0] * numbers[1];
};

module.exports = {sums, multiplies};
