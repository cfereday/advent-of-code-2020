import {isWithinInterval} from 'date-fns';

const extractPasswords2 = (passwords: string): string[] => {
    const split = passwords.split(/\n\n|\r\r/g);
    return split.map(p => {
        const stripped = p.replace(/\s+/g, " ");
        return stripped.trim()
    });
};

const splitPasswords = (passwords: string[]): string[][] => {
    return passwords.map(p => p.split(' '));
};

const byrIsValid = (byrTuple: string): boolean => {
    //at least 1920 and at most 2002.
    const splitYear = (byrTuple.split(':'))[1];
    return isWithinInterval(new Date(splitYear), {start: new Date('1920'), end: new Date('2002')})
};

const iyrIsValid = (iyrTuple: string): boolean => {
// four digits; at least 2010 and at most 2020.
    const splitYear = (iyrTuple.split(':'))[1];
    return isWithinInterval(new Date(splitYear), {start: new Date('2010'), end: new Date('2020')})
};

const eyrIsValid = (eyrTuple: string): boolean => {
// eyr (Expiration Year) - four digits; at least 2020 and at most 2030
    const splitYear = (eyrTuple.split(':'))[1];
    return isWithinInterval(new Date(splitYear), {start: new Date('2020'), end: new Date('2030')})
};

const hgtIsValid = (hgtTuple: string): boolean => {
    /*
    hgt (Height) - a number followed by either cm or in:
    If cm, the number must be at least 150 and at most 193.
    If in, the number must be at least 59 and at most 76.
    */
    const splitHgt = (hgtTuple.split(':'))[1];

    if (!splitHgt.includes('cm') && !splitHgt.includes('in')) {
        return false;
    };

    if (splitHgt.includes('cm')) {
        const num = parseInt(splitHgt.split('cm')[0]);
        return (num >= 150 && num <=193)
    }

    if (splitHgt.includes('in')) {
        const num = parseInt(splitHgt.split('in')[0]);
        return (num >= 59 && num <=76)
    }
};

const hclIsValid = (hclTuple: string): boolean => {
// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
    const splitHcl = (hclTuple.split(':'))[1];
    if (!splitHcl.includes('#')) {
        return false;
    }
    return !!splitHcl.match(/^#[a-f0-9]{6}$/);
};

const eclIsValid = (eclTuple: string): boolean => {
    // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
    const splitEcl = (eclTuple.split(':'))[1];
    const matchedKey = splitEcl.match(/amb|blu|brn|gry|grn|hzl|oth/g);

    if (!matchedKey || matchedKey.length !== 1) {
        return false;
    }

    if (matchedKey.length === 1) {
        return true;
    }
};

const pidIsValid = (pidTuple: string): boolean => {
    // pid (Passport ID) - a nine-digit number, including leading zeroes.
    const splitPid = (pidTuple.split(':'))[1];
    return !! splitPid.match(/^[0-9]{9}$/);
};

const allElementsValid = (password: string[]): string => {
    // go though and match on the tuple
    let result = [];
        for (const p of password) {
            if (p.includes('pid')) {
                result.push(pidIsValid(p))
            }

            if (p.includes('ecl')) {
                result.push(eclIsValid(p))
            }

            if (p.includes('hcl')) {
                result.push(hclIsValid(p))
            }

            if (p.includes('hgt')) {
                result.push(hgtIsValid(p))
            }

            if (p.includes('eyr')) {
                result.push(eyrIsValid(p))
            }

            if (p.includes('eyr')) {
                result.push(eyrIsValid(p))
            }

            if (p.includes('iyr')) {
                result.push(iyrIsValid(p));
            }

            if (p.includes('byr')) {
                result.push(byrIsValid(p));
            }
        }
   if (result.every(r => r === true)) {
        return password.join(' ');
   }

   return '';
};

const getAllValidPasswordsPart2 = (passwords: string): string[][] => {
    const extracted = extractPasswords2(passwords);
    const split = splitPasswords(extracted);
    return split.filter(p =>  allElementsValid(p) !== '');
};

module.exports = {splitPasswords, byrIsValid, iyrIsValid, eyrIsValid, hgtIsValid, hclIsValid, eclIsValid, pidIsValid, allElementsValid, getAllValidPasswordsPart2};
