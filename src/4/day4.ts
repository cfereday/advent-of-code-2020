type optionalPassword = {
    ecl?: string,
    pid?: number,
    eyr?: number,
    hcl?: string,
    byr?: number,
    iyr?: number,
    cid?: number,
    hgt?: string
}


type optionalPasswordStrings = {
    ecl?: string,
    pid?: string,
    eyr?: string,
    hcl?: string,
    byr?: string,
    iyr?: string,
    cid?: string,
    hgt?: string
}

// type guards https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards could I just check on the type?
interface ValidPassword {
    ecl: string,
    pid: number,
    eyr: number,
    hcl: string,
    byr: number,
    iyr: number,
    cid: number,
    hgt: string
}

// :todo how could I achieve this as an enum?
const ValidPasswordEnum = [
    'ecl',
    'pid',
    'eyr',
    'hcl',
    'byr',
    'iyr',
    'hgt'
];

const parseToNumber = (partOfPassword: string): number => parseInt(partOfPassword);

const keysToParseToNumber = (obj: optionalPasswordStrings): optionalPassword => {
    for (const [key, value] of Object.entries(obj)) {
        if (key.match(/(pid|byr|cid|eyr|iyr)\b/))
            obj[key] = parseToNumber(value);
    }
    //todo: figure out how to resolve this type issue
    // @ts-ignore
    return obj
};

const parseToObject = (password: string): optionalPassword => {
    const trimmedPassword = password.trim();
    const splitPassword = trimmedPassword.split(' ');
    const secondSplitPassword = splitPassword.map(p => {
        const trimmed = p.trim();
        return trimmed.split(':')
    });
    //:todo i created a tsconfig with ESNext to resolve this error but perhaps some improvement to make as still have to ignore the tslint error for now: https://github.com/microsoft/TypeScript/issues/30933
    // @ts-ignore
    const obj: optionalPasswordStrings = Object.fromEntries(secondSplitPassword);
    return keysToParseToNumber(obj);
};

const extractPasswords = (passwords: string): optionalPassword[] => {
    const split = passwords.split(/\n\n/g);
    return split.map(p => parseToObject(p));
};

const isValid = (password: optionalPassword | ValidPassword): boolean => {
    const allKeys = Object.keys(password);
   const result = allKeys.filter(k => ValidPasswordEnum.includes(k));
   return result.length === ValidPasswordEnum.length
};

module.exports = {parseToObject, keysToParseToNumber, extractPasswords, isValid};
