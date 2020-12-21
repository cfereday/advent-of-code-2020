// const productOfGivenNumbers = (numbers: number[]): number => {
//     return numbers.reduce((accumulator, currentValue) => {
//         return accumulator * currentValue
//     });
// };


export const getNumbersAndProduct = (numbersToCheck: number[], sumNumberToCheck: number, boundaryNumber: number): object => {

    const addUpToBoundaryNumber = (currentNum, firstNum, secNum) => {
        return currentNum + firstNum + secNum;
    };

    const currentSet = new Set(numbersToCheck);
    const uniqueNumbers = Array.from(currentSet);
    
    const elements = [];
    const product = 0;

    for (const myCurrentUniqueNumber of uniqueNumbers) {
        // console.log('uniqueNumbers******', uniqueNumbers);
        const sliced = uniqueNumbers.slice(0, boundaryNumber - 1);
        const result = addUpToBoundaryNumber(myCurrentUniqueNumber, sliced[0], sliced[1]);
        if (result === sumNumberToCheck) {
            elements.push(myCurrentUniqueNumber, sliced[0], sliced[1]);
            console.log('elements******', elements);
        }
    }

    const products = elements[0] * elements[1] * elements[2];

    return {elements, product: products}
};
