const {sumsAttemptTwo, sumOfHeadAndGivenTail, currentTailSum, productOfGivenNumbers} = require('../src/1/day1Part2');
const {getElementAndProductForThree} = require('../src/1/day1Part2Attempt2');
const {sums, multiplies, productForASum} = require('../src/1/day1');
const {testInput} = require('./test-data');

const myNumbers = [1721, 79, 366, 299, 675, 1456];

describe('day 1: part 1', () => {
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

describe('day 1: part 2', () => {
    it('adds an array of numbers together', () => {
        expect(currentTailSum([1,2,3])).toEqual(6)
    });

    it('if the array is empty returns 0', () => {
        expect(currentTailSum([])).toEqual(0)
    });

    it('sums the head and the given tail', () => {
        const head = 979;
        const tail = [366, 366];
        expect(sumOfHeadAndGivenTail(head, tail, 3)).toEqual({
            givenNumbers: [979,366, 366],
            summed: 1711
        });

        expect(sumOfHeadAndGivenTail(1, [12, 45, 86, 98], 3)).toEqual({
            givenNumbers: [1,12, 45],
            summed: 58
        });
    });

    it('returns the product of an array of numbers where each element is multiplied against the other ', () => {
        const myNums = [979, 366, 675];
        expect(productOfGivenNumbers(myNums)).toEqual(241861950);
    });

    it('returns the product of three numbers which sum to a given number', () => {
        const myNums = [979, 366, 675];
        expect(sumsAttemptTwo(myNums, 2020, 3).product).toEqual(241861950);
    });

    it('returns the product of a range of numbers which sum to a given number', () => {
        const myNums = [979, 366, 675, 89, 90, 15, 60];
        expect(sumsAttemptTwo(myNums, 2020, 3).product).toEqual(241861950);
    });

    it('gets the answer for day1 part 2 from test input attempt 3', () => {
        const result = getElementAndProductForThree(testInput, 2020, 3);
        expect(result.elements).toEqual([862, 877, 281]);
        expect(result.product).toEqual(212428694);
    });

});
