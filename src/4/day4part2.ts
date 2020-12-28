import {isWithinInterval} from 'date-fns';

const extractPasswords2 = (passwords: string): string[] => {
    const split = passwords.split(/\n\n|\r\r/g);
    return split.map(p => {
        // https://futurestud.io/tutorials/remove-all-whitespace-from-a-string-in-javascript
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

const eyrIsValid = (iyrTuple: string): boolean => {
// eyr (Expiration Year) - four digits; at least 2020 and at most 2030
    const splitYear = (iyrTuple.split(':'))[1];
    return isWithinInterval(new Date(splitYear), {start: new Date('2020'), end: new Date('2030')})
};
module.exports = {splitPasswords, byrIsValid, iyrIsValid, eyrIsValid};
