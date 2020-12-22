const addUpToBoundaryNumber = (currentNum, firstNum, secNum) => {
    return currentNum + firstNum + secNum;
}

const getAllAdditions = (uniqueNumbers: number[], sumNumberToCheck, elements) => {
    if (uniqueNumbers.length <= 2) {
        // this can cause problems
        console.log('I am less than 2');
        return elements;
    }
    for (let i = 0; i < uniqueNumbers.length; i++) {
        console.log('inside the loop, here is i', i);
        const current = uniqueNumbers[i];
        const next = uniqueNumbers[i + 1];
        const nextNext = uniqueNumbers[i + 2];
        const added = addUpToBoundaryNumber(current, next, nextNext);

        if (uniqueNumbers.length === 3) {
            if (added === sumNumberToCheck) {
                elements.push(current, next, nextNext);
                return elements;
            } else {
                return elements;
            }
        }

        if (added === sumNumberToCheck) {
            console.log('added does match');
            elements.push(current, next, nextNext);
            return elements;
        }

        if (added !== sumNumberToCheck) {
            console.log('no match');
            return elements;
        }
    }
};

export const getNumbersAndProduct = (numbersToCheck: number[], sumNumberToCheck: number): object => {
    const currentSet = new Set(numbersToCheck);
    const uniqueNumbers = Array.from(currentSet);
    // remove duplicate entries by moving to a set & then back to an array

    let elements = [];
    console.log('length of uniqueNumbers****', uniqueNumbers.length);
    elements = getAllAdditions(uniqueNumbers, sumNumberToCheck, elements);
    console.log('elements', elements);

    if (elements.length >= 3) {
        console.log('i get here less than 3')
        const products = elements[0] * elements[1] * elements[2];
        return {elements, product: products}
    } else {
        return {elements, product: 0}
    }
};
