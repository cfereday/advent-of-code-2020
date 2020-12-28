const {extractPasswords, isValid, getAllValidPasswordsPart1} = require('../src/4/day4');
const {splitPasswords, byrIsValid, iyrIsValid, eyrIsValid, hgtIsValid} = require('../src/4/day4part2');
const {testData} = require('./test-data-4');
describe('Day 4', () => {
    describe('part 1', () => {
        describe('parse', () => {
            it('extracts a number of password strings into an array of passwords', () => {
                const input = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
            byr:1937 iyr:2017 cid:147 hgt:183cm

            iyr:2013 ecl:amb cid:350 eyr:2023 pid:28048884
            hcl:#cfa07d byr:1929

            hcl:#ae17e1 iyr:2013e
            eyr:2024
            ecl:brn pid:760753108 byr:1931
            hgt:179cm

            hcl:#cfa07d eyr:2025 pid:166559648
            iyr:2011 ecl:brn hgt:59in`;

                const result = extractPasswords(input);

                expect(result).toEqual([
                    'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd byr:1937 iyr:2017 cid:147 hgt:183cm',
                    'iyr:2013 ecl:amb cid:350 eyr:2023 pid:28048884 hcl:#cfa07d byr:1929',
                    'hcl:#ae17e1 iyr:2013e eyr:2024 ecl:brn pid:760753108 byr:1931 hgt:179cm',
                    'hcl:#cfa07d eyr:2025 pid:166559648 iyr:2011 ecl:brn hgt:59in'
                ]);
                expect(result.length).toEqual(4);
            });
        });

        describe('isValid', () => {
            it('returns true if password is valid according dya Day 4 part 1 rules', () => {
                const valid = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd byr:1937 iyr:2017 cid:147 hgt:183cm';
                const valid2 = 'hcl:#ae17e1 iyr:2013 eyr:2024 ecl:brn pid:760753108 byr:1931 hgt:179cm';

                expect(isValid(valid)).toEqual(true);
                expect(isValid(valid2)).toEqual(true);
            });

            it('returns false if password is invalid according dya Day 4 part 1 rules', () => {
                const invalid = 'iyr:2013 ecl:amb cid:350 eyr:2023 pid:28048884 hcl:#cfa07d byr:1929';
                const invalid2 = 'hcl:#cfa07d eyr:2025 pid:166559648 iyr:2011 ecl:brn hgt:59in';

                expect(isValid(invalid)).toEqual(false);
                expect(isValid(invalid2)).toEqual(false);
            });

        });

        describe('gets all valid passwords from a string', () => {
            it('gets valid passwords only', () => {
                const input = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
            byr:1937 iyr:2017 cid:147 hgt:183cm

            iyr:2013 ecl:amb cid:350 eyr:2023 pid:28048884
            hcl:#cfa07d byr:1929

            hcl:#ae17e1 iyr:2013e
            eyr:2024
            ecl:brn pid:760753108 byr:1931
            hgt:179cm

            hcl:#cfa07d eyr:2025 pid:166559648
            iyr:2011 ecl:brn hgt:59in`;

                expect(getAllValidPasswordsPart1(input).length).toEqual(2)
            });

            it('gets the answers for day 4: p1', () => {
                expect(getAllValidPasswordsPart1(testData).length).toEqual(228)
            });
        });
    });

    describe('part 2', () => {
        describe('splitPasswords', () => {
            it('splits up password keys and values into tuples', () => {

                const testInput = [
                    'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd byr:1937 iyr:2017 cid:147 hgt:183cm',
                    'iyr:2013 ecl:amb cid:350 eyr:2023 pid:28048884 hcl:#cfa07d byr:1929',
                    'hcl:#ae17e1 iyr:2013 eyr:2024 ecl:brn pid:760753108 byr:1931 hgt:179cm',
                    'hcl:#cfa07d eyr:2025 pid:166559648 iyr:2011 ecl:brn hgt:59in'
                ];

                expect(splitPasswords(testInput)).toEqual([
                    ['ecl:gry', 'pid:860033327', 'eyr:2020', 'hcl:#fffffd', 'byr:1937', 'iyr:2017', 'cid:147', 'hgt:183cm'],
                    ['iyr:2013', 'ecl:amb', 'cid:350', 'eyr:2023', 'pid:28048884', 'hcl:#cfa07d', 'byr:1929'],
                    ['hcl:#ae17e1', 'iyr:2013', 'eyr:2024', 'ecl:brn', 'pid:760753108', 'byr:1931', 'hgt:179cm'],
                    ['hcl:#cfa07d', 'eyr:2025', 'pid:166559648', 'iyr:2011', 'ecl:brn', 'hgt:59in'],
                ]);
            });
        });

        describe('validation of fields', () => {
            describe('byr', () => {
                it('returns true for a valid byr tuple', () => {
                    expect(byrIsValid('byr:2002')).toEqual(true);
                });
                it('returns invalid for an invalid byr tuples', () => {
                    expect(byrIsValid('byr:2003')).toEqual(false);
                });
            });

            describe('iyr', () => {
                it('returns true for a valid iyr tuple', () => {
                    expect(iyrIsValid('iyr:2010')).toEqual(true);
                });
                it('returns invalid for an invalid iyr tuples', () => {
                    expect(iyrIsValid('iyr:2022')).toEqual(false);
                });
            });

            describe('eyr', () => {
                it('returns true for a valid eyr tuple', () => {
                    expect(eyrIsValid('eyr:2020')).toEqual(true);
                });
                it('returns invalid for an invalid eyr tuples', () => {
                    expect(eyrIsValid('eyr:2000')).toEqual(false);
                });
            });

            describe('hgt', () => {
                it('returns true for a valid eyr tuple', () => {
                    expect(hgtIsValid('hgt:60in')).toEqual(true);
                    expect(hgtIsValid('hgt:190cm')).toEqual(true);
                });
                it('returns invalid for an invalid eyr tuples', () => {
                    expect(hgtIsValid('hgt:190in')).toEqual(false);
                    expect(hgtIsValid('hgt:190')).toEqual(false);
                });
            });

        });
    });

});
