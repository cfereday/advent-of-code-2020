const {parseToObject, keysToParseToNumber, extractPasswords, isValid, getAllValidPasswordsPart1} = require('../src/4/day4');
const {testData} = require('./test-data-4');
describe('Day 4', () => {
    describe('keysToParseToNumber()', () => {
        it('given a string value of a key returns a number if it exists', () => {
            const myStringyObject = {
                ecl: 'gry',
                pid: '860033327',
                eyr: '2020',
                hcl: '#fffffd',
                byr: '1937',
                iyr: '2017',
                cid: '147',
                hgt: '183cm'
            };

            const myStringyAndNumberyObject = {
                "byr": 1937,
                "cid": 147,
                "ecl": "gry",
                "eyr": 2020,
                "hcl": "#fffffd",
                "hgt": "183cm",
                "iyr": 2017,
                "pid": 860033327
            };

            expect(keysToParseToNumber(myStringyObject)).toEqual(myStringyAndNumberyObject)
        });

        it('ignores any keys to parse which are not present', () => {
            const myStringyObject = {
                ecl: 'gry',
                pid: '860033327',
                hcl: '#fffffd',
                byr: '1937',
                cid: '147',
                hgt: '183cm'
            };

            const myStringyAndNumberyObject = {
                "ecl": "gry",
                "pid": 860033327,
                "hcl": "#fffffd",
                "byr": 1937,
                "cid": 147,
                "hgt": "183cm",
            };
            expect(keysToParseToNumber(myStringyObject)).toEqual(myStringyAndNumberyObject)
        });
    });

    describe('parseToObject', () => {
        it('extracts a password string into a password object', () => {
            const onePassword = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd byr:1937 iyr:2017 cid:147 hgt:183cm';
            expect(parseToObject(onePassword)).toEqual({
                ecl: 'gry',
                pid: 860033327,
                eyr: 2020,
                hcl: '#fffffd',
                byr: 1937,
                iyr: 2017,
                cid: 147,
                hgt: '183cm'
            })
        });

        it('extracts a number of password strings into a password object', () => {
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

            expect(extractPasswords(input)).toEqual([
                {
                    ecl: 'gry',
                    pid: 860033327,
                    eyr: 2020,
                    hcl: '#fffffd',
                    byr: 1937,
                    iyr: 2017,
                    cid: 147,
                    hgt: '183cm'
                },
                {
                    iyr: 2013,
                    ecl: 'amb',
                    cid: 350,
                    eyr: 2023,
                    pid: 28048884,
                    hcl: '#cfa07d',
                    byr: 1929,
                },
                {
                    hcl: '#ae17e1',
                    iyr: 2013,
                    eyr: 2024,
                    ecl: 'brn',
                    pid: 760753108,
                    byr: 1931,
                    hgt: '179cm',
                },
                {
                    hcl: '#cfa07d',
                    eyr: 2025,
                    pid: 166559648,
                    iyr: 2011,
                    ecl: 'brn',
                    hgt: '59in',
                }
            ])
        });
    });

    describe('isValid', () => {
        it('checks if a password is valid according to p1 validity',() => {
            const myStringyAndNumberyObject = {
                "byr": 1937,
                "cid": 147,
                "ecl": "gry",
                "eyr": 2020,
                "hcl": "#fffffd",
                "hgt": "183cm",
                "iyr": 2017,
                "pid": 860033327
            };

            expect(isValid(myStringyAndNumberyObject)).toEqual(true)
        });

        it('returns true if password is valid according to p1 validity',() => {
            const myStringyAndNumberyObject = {
                "byr": 1937,
                "cid": 147,
                "ecl": "gry",
                "eyr": 2020,
                "hcl": "#fffffd",
                "hgt": "183cm",
                "iyr": 2017,
                "pid": 860033327
            };

            expect(isValid(myStringyAndNumberyObject)).toEqual(true)
        });

        it('returns false if password is not valid according to p1 validity', () => {
            const myInvalidStringAndNumberObject = {
                iyr: 2013,
                ecl: 'amb',
                cid: 350,
                eyr: 2023,
                pid: 28048884,
                hcl: '#cfa07d',
                byr: 1929,
            };

            expect(isValid(myInvalidStringAndNumberObject)).toEqual(false)
        });

        it('returns true if password is valid according to p1 validity', () => {
            const myValidStringAndNumberObject =  {
                    hcl: '#ae17e1',
                    iyr: 2013,
                    eyr: 2024,
                    ecl: 'brn',
                    pid: 760753108,
                    byr: 1931,
                    hgt: '179cm',
                };

            expect(isValid(myValidStringAndNumberObject)).toEqual(true)
        });

        it('returns false if password is invalid according to p1 validity', () => {
            const myOtherInvalidStringAndNumberObject =  {
                hcl: '#cfa07d',
                eyr: 2025,
                pid: 166559648,
                iyr: 2011,
                ecl: 'brn',
                hgt: '59in',
            };

            expect(isValid(myOtherInvalidStringAndNumberObject)).toEqual(false)
        })
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
           expect(getAllValidPasswordsPart1(testData).length).toEqual(31)
        });
    });

});
