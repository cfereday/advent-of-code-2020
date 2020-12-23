const {getValidPasswords, parse, parseMany, isValidPassword, isValidPassword2, getValidPasswords2} = require('../src/2/day2');
const {testData} = require('./test-data-2');

describe('Day 2', () => {
    it('parses a raw password', () => {
        expect(parse('1-3 b: cdefg')).toEqual({character: 'b', min: 1, max: 3, password: 'cdefg'})
    });

    it('parses multiple passwords', () => {
       const input = `1-3 a: abcde
       1-3 b: cdefg
       2-9 c: ccccccccc`;

        expect(parseMany(input)).toEqual([{character: 'a', min: 1, max: 3, password: 'abcde'}, {character: 'b', min: 1, max: 3, password: 'cdefg'}, {character: 'c', min: 2, max: 9, password: 'ccccccccc'}])
    });

    it('checks if a password is valid according to its policy', () => {
        const valid = {character: 'a', min: 1, max: 3, password: 'abcde'};
        const invalid = {character: 'b', min: 1, max: 3, password: 'cdefg'};

        expect(isValidPassword(valid)).toEqual(true);
        expect(isValidPassword(invalid)).toEqual(false);
    });

    it('takes only valid passwords ', () => {
        const testInput = `1-3 a: abcde
        1-3 b: cdefg
        2-9 c: ccccccccc`;

        expect(getValidPasswords(testInput)).toEqual(['abcde', 'ccccccccc']);
    });

    it('gets the answer for Day 2', () => {
        const result = getValidPasswords(testData);
        expect(result.length).toEqual(396)
    });
});

describe('Day 2, part 2', () => {
   it('checks if a password is valid according to new rules', () => {
       const valid = {character: 'a', min: 1, max: 3, password: 'abcde'};
       const invalid = {character: 'b', min: 1, max: 3, password: 'cdefg'};
       const anotherInvalid = {character: 'c', min: 2, max: 9, password: 'ccccccccc'};

       expect(isValidPassword2(valid)).toEqual(true);
       expect(isValidPassword2(invalid)).toEqual(false);
       expect(isValidPassword2(anotherInvalid)).toEqual(false);
   });

   it('gets the answer for Day 2 part 2', () => {
       const result = getValidPasswords2(testData);
       expect(result.length).toEqual(428)
   });
});
