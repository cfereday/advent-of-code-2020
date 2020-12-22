const getAllAdditions = (uniqueNumbers: number[], sumNumberToCheck) => {
    if (uniqueNumbers.length === 3) {
        const head = uniqueNumbers[0];
        const next = uniqueNumbers[1];
        const nextNext = uniqueNumbers[2];

        const summed = head + next + nextNext;
        if (summed === sumNumberToCheck) {
            const product = head * next * nextNext;
            return {
                elements: [head, next, nextNext],
                product
            }
        }
        return {
            elements: [],
            product: 0
        }
    }

    const [head, ...tail] = uniqueNumbers;
    const next = tail[0];
    const nextNext = tail[1];
    const summed = head + next + nextNext;

    if (summed === sumNumberToCheck) {
        const product = head * next * nextNext;
        return {
            elements: [head, next, nextNext],
            product
        }
    }
    return getAllAdditions(tail, sumNumberToCheck);
};

module.exports = {getAllAdditions};
