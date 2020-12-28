const {extractPasswords, isValid, getAllValidPasswordsPart1} = require('../src/4/day4');
const {splitPasswords, byrIsValid, iyrIsValid, eyrIsValid, hgtIsValid, hclIsValid, eclIsValid, pidIsValid, allElementsValid, getAllValidPasswordsPart2} = require('../src/4/day4part2');
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

            describe('hcl', () => {
                it('returns true for a valid hcl tuple', () => {
                    expect(hclIsValid('hcl:#123abc')).toEqual(true);
                });
                it('returns invalid for an invalid hcl tuples', () => {
                    expect(hclIsValid('hcl:#123abz')).toEqual(false);
                    expect(hclIsValid('hcl:123abc')).toEqual(false);
                });
            });

            describe('ecl', () => {
                it('returns true for a valid ecl tuple', () => {
                    expect(eclIsValid('ecl:brn')).toEqual(true);
                });
                it('returns invalid for an invalid ecl tuples', () => {
                    expect(eclIsValid('ecl:wat')).toEqual(false);
                });
            });

            describe('pid', () => {
                it('returns true for a valid pid tuple', () => {
                    expect(pidIsValid('pid:000000001')).toEqual(true);
                });

                it('returns invalid for an invalid pid tuples', () => {
                    expect(pidIsValid('pid:0123456789')).toEqual(false);
                });
            });

            describe('isValid', () => {
                it('returns string of whole password if a password is valid against all checks', () => {
                    const valid1 = ['pid:087499704', 'hgt:74in', 'ecl:grn', 'iyr:2012', 'eyr:2030', 'byr:1980', 'hcl:#623a2f'];
                    const valid2 = ['eyr:2029', 'ecl:blu', 'cid:129', 'byr:1989', 'iyr:2014', 'pid:896056539', 'hcl:#a97842', 'hgt:165cm'];

                    expect(allElementsValid(valid1)).toEqual("pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980 hcl:#623a2f");
                    expect(allElementsValid(valid2)).toEqual("eyr:2029 ecl:blu cid:129 byr:1989 iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm");
                });

                it('returns empty string if a password is invalid against all checks', () => {
                    const invalid1 = ['eyr:1972', 'cid:100', 'hcl:#18171d', 'ecl:amb', 'hgt:170', 'pid:186cm', 'iyr:2018', 'byr:1926'];
                    const invalid2 = ['iyr:2019', 'hcl:#602927', 'eyr:1967', 'hgt:170cm', 'ecl:grn', 'pid:012533040', 'byr:1946'];

                    expect(allElementsValid(invalid1)).toEqual('');
                    expect(allElementsValid(invalid2)).toEqual('');
                });
            });

        });

        describe('getAllValidPasswordsPart2', () => {
            it('checks the sample input', () => {
                const invalid = `eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926

iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946

hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277

hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007`;

                const valid = `pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f

eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022

iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719`;
                const result = getAllValidPasswordsPart2(invalid);
                console.log('result', result);


                expect(result.length).toEqual(0);
                expect(getAllValidPasswordsPart2(valid).length).toEqual(4);
            });

            it('gets the answers for day 4: p2', () => {
                expect(getAllValidPasswordsPart2(testData).length).toEqual(198);
            });
        });
    });

});
