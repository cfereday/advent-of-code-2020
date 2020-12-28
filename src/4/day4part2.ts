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
    return isWithinInterval(new Date(splitYear), { start: new Date('1920'), end: new Date('2002') })
};


module.exports = {splitPasswords, byrIsValid};
