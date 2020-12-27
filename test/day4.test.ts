const {parseToObject, keysToParseToNumber} = require('../src/4/day4');

/*const input = "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n' +
'byr:1937 iyr:2017 cid:147 hgt:183cm\n' +
'\n' +
'iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884\n' +
'hcl:#cfa07d byr:1929\n' +
'\n' +
'hcl:#ae17e1 iyr:2013\n' +
'eyr:2024\n' +
'ecl:brn pid:760753108 byr:1931\n' +
'hgt:179cm\n' +
'\n' +
'hcl:#cfa07d eyr:2025 pid:166559648\n' +
'iyr:2011 ecl:brn hgt:59in";*/

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
});
