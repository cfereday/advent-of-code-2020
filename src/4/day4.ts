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

type validPassword = {
    ecl: string,
    pid: number,
    eyr: number,
    hcl: string,
    byr: number,
    iyr: number,
    cid: number,
    hgt: string
}

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
    const splitPassword = password.split(' ');
    const secondSplitPassword = splitPassword.map(p => p.split(':'));
    //:todo i created a tsconfig with ESNext to resolve this error but perhaps some improvement to make as still have to ignore the tslint error for now: https://github.com/microsoft/TypeScript/issues/30933
    // @ts-ignore
    const obj: optionalPasswordStrings = Object.fromEntries(secondSplitPassword);
    return keysToParseToNumber(obj);
};

module.exports = {parseToObject, keysToParseToNumber};
