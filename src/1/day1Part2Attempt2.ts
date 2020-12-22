type elementsAndProduct = {
    elements: number[],
    product: number
}

const getAllAdditions = (uniqueNumbers: number[], sumNumberToCheck: number, howFar: number): elementsAndProduct => {
    if (uniqueNumbers.length < howFar) {
        return {
            elements: [],
            product: 0
        }
    }
    const [head, ...tail] = uniqueNumbers;

    for (const current of tail ) {
        const [ignoredHead, ...newTail] = tail;
        for (const newCurrent of newTail) {
            const added = head + current + newCurrent;
            if (added === sumNumberToCheck) {
                return {
                    elements: [head, current, newCurrent],
                    product: head * current * newCurrent
                }
            }

        }
    }

    return getAllAdditions(tail, sumNumberToCheck, howFar);
};

module.exports = {getAllAdditions};
