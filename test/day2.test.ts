const {getValidPasswords} = require('../src/2/day2');
const {testData} = require('./test-data-2');

describe('Day 2', () => {
    it('takes only valid passwords ', () => {
        const testInput = {
            '1-3 a': 'abcde',
            '1-3 b': 'cdefg',
            '2-9 c': 'ccccccccc'
        };

        expect(getValidPasswords(testInput)).toEqual(['abcde', 'ccccccccc']);
    });

    it('gets the answer for Day 2', () => {
        const result = getValidPasswords(testData);
        expect(result.length).toEqual(297)
    });
});
