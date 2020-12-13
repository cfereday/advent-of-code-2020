const {sums, multiplies} = require('../src/1/day1');

const myNumbers = [1721, 79, 366, 299, 675, 1456];

describe('day 1', () => {
    it('finds two numbers that sum to a given number', () => {
        const twoNumbers = sums(myNumbers, 2020);
        expect(twoNumbers).toContain(1721);
        expect(twoNumbers).toContain(299);
    });

    it('multiplies two numbers', () => {
        const multipliedTwoNumbers = multiplies([1721, 299]);
        expect(multipliedTwoNumbers).toEqual(514579);
    });
});
