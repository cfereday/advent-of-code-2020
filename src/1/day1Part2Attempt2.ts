type elementsAndProduct = {
    elements: number[],
    product: number
}

const getAllAdditions = (uniqueNumbers: number[], sumNumberToCheck: number): elementsAndProduct => {
    if (uniqueNumbers.length < 2) {
        return {
            elements: [],
            product: 0
        }
    }
    const [head, ...tail] = uniqueNumbers;

    for (const current of tail ) {
        const added = head + current;
        if (added === sumNumberToCheck) {
            return {
                elements: [head, current],
                product: head * current
            }
        }
    }

    return getAllAdditions(tail, sumNumberToCheck);
};

module.exports = {getAllAdditions};
