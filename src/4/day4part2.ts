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

const byrIsValid = (byr: string): boolean => {
    //at least 1920 and at most 2002.
    return isWithinInterval(new Date(byr), {start: new Date('1920'), end: new Date('2002')})
};

const iyrIsValid = (iyr: string): boolean => {
// four digits; at least 2010 and at most 2020.
    return isWithinInterval(new Date(iyr), {start: new Date('2010'), end: new Date('2020')})
};

const eyrIsValid = (eyr: string): boolean => {
// eyr (Expiration Year) - four digits; at least 2020 and at most 2030
    return isWithinInterval(new Date(eyr), {start: new Date('2020'), end: new Date('2030')})
};

const hgtIsValid = (hgt: string): boolean => {
    /*
    hgt (Height) - a number followed by either cm or in:
    If cm, the number must be at least 150 and at most 193.
    If in, the number must be at least 59 and at most 76.
    */
    if (!hgt.includes('cm') && !hgt.includes('in')) {
        return false;
    }
    ;

    if (hgt.includes('cm')) {
        const num = parseInt(hgt.split('cm')[0]);
        return (num >= 150 && num <= 193)
    }

    if (hgt.includes('in')) {
        const num = parseInt(hgt.split('in')[0]);
        return (num >= 59 && num <= 76)
    }
};

const hclIsValid = (hcl: string): boolean => {
// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
    if (!hcl.includes('#')) {
        return false;
    }
    return !!hcl.match(/^#[a-f0-9]{6}$/);
};

const eclIsValid = (ecl: string): boolean => {
    // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
    const matchedKey = ecl.match(/amb|blu|brn|gry|grn|hzl|oth/g);

    if (!matchedKey || matchedKey.length !== 1) {
        return false;
    }

    if (matchedKey.length === 1) {
        return true;
    }
};

const pidIsValid = (pid: string): boolean => {
    // pid (Passport ID) - a nine-digit number, including leading zeroes.
    return !!pid.match(/^[0-9]{9}$/);
};

const allElementsValid = (passport: string[]): boolean => {
    let result = [];
    for (const field of passport) {
        const [k, v] = field.split(':');
        switch (k) {
            case 'pid':
                result.push(pidIsValid(v));
                break;
            case 'ecl':
                result.push(eclIsValid(v));
                break;
            case 'hcl':
                result.push(hclIsValid(v));
                break;
            case 'hgt':
                result.push(hgtIsValid(v));
                break;
            case 'eyr':
                result.push(eyrIsValid(v));
                break;
            case 'iyr':
                result.push(iyrIsValid(v));
                break;
            case 'byr':
                result.push(byrIsValid(v));
                break;
            case 'cid':
                result.push(true);
                break;
            default:
                throw new Error(`unrecognised field ${field}`)
        }
    }
    return result.every(r => r);
};

const getAllValidPasswordsPart2 = (passwords: string): string[] => {
    const extracted = extractPasswords2(passwords);
    const split = splitPasswords(extracted);
    return split.filter(allElementsValid).map(p => p.join(' '));
};

module.exports = {
    splitPasswords,
    byrIsValid,
    iyrIsValid,
    eyrIsValid,
    hgtIsValid,
    hclIsValid,
    eclIsValid,
    pidIsValid,
    allElementsValid,
    getAllValidPasswordsPart2
};
