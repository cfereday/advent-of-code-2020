const {sums, multiplies, productForASum} = require('../src/1/day1');
const {testInput} = require('./test-data');

const myNumbers = [1721, 79, 366, 299, 675, 1456];

describe('day 1', () => {
    it('finds two numbers that sum to a given number', () => {
        const twoNumbers = sums(myNumbers, 2020);
        expect(twoNumbers).toContain(1721);
        expect(twoNumbers).toContain(299);
    });

    it('works correctly with 2 numbers', () => {
       expect(sums([1010, 1010], 2020)).toEqual([1010, 1010]);
    });

    it('multiplies two numbers', () => {
        const multipliedTwoNumbers = multiplies([1721, 299]);
        expect(multipliedTwoNumbers).toEqual(514579);
    });

    it('returns the product of two numbers which sum to a given number', () => {
        expect(productForASum(myNumbers, 2020)).toEqual(514579);
    });

    it('gets the answer for day1 from test input', () => {
        expect(productForASum(testInput, 2020)).toEqual(567171);
    });
});
