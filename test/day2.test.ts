const {getValidPasswords} = require('../src/2/day2');

describe('Day 2', () => {
    it.only('takes only valid passwords ', () => {
        const testInput = {
            '1-3 a': 'abcde',
            '1-3 b': 'cdefg',
            '2-9 c': 'ccccccccc'
        };

        expect(getValidPasswords(testInput)).toEqual(['abcde', 'ccccccccc']);
    });
});
