type sumOfHeadsAndTails = {
    givenNumbers: number[],
    summed: number
};

type productAndGivenNumbers = {
    finalNumbers: number[],
    product: number
}

const currentTailSum = (tailed: number[]): number => {
    return tailed.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0);
};


const sumOfHeadAndGivenTail = (head: number, tail: number[], howMuchOfTail: number): sumOfHeadsAndTails => {
    const headAndTailed = [head, ...tail];
    if (headAndTailed.length === howMuchOfTail) {
        return {
            givenNumbers: headAndTailed,
            summed: currentTailSum(headAndTailed)
        }
    }
    const tailed = tail.slice(0, howMuchOfTail - 1);
    const givenNumbers = [head, ...tailed];
    const tailSum = currentTailSum(tailed);
    const summed = head + tailSum;

    return {givenNumbers, summed};
};

const productOfGivenNumbers = (numbers: number[]): number => {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator * currentValue
    });
};

const sumsAttemptTwo = (numbers: number[], sumNumber: number, howManyNumbers: number): productAndGivenNumbers => {
    if (numbers.length < 1) {
        return {finalNumbers: [], product: 0}
    }

    const [head, ...tail] = numbers;
    const summedGivenNumbers = sumOfHeadAndGivenTail(head, tail, howManyNumbers);
    const {givenNumbers, summed} = summedGivenNumbers;

    if (summed === sumNumber) {
        return {finalNumbers: givenNumbers, product: productOfGivenNumbers(givenNumbers)};
    } else {
        const [...rest] = tail;
        return sumsAttemptTwo(rest, sumNumber, howManyNumbers);
    }
};

module.exports = {sumsAttemptTwo, sumOfHeadAndGivenTail, productOfGivenNumbers, currentTailSum};
