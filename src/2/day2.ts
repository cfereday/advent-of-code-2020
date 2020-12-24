type policy = {
    character: string,
    min: number,
    max: number,
    password: string
}

const parse = (rawPassword: string): policy => {
    const [rawPolicy, password] = rawPassword.split(': ');
    const [minAndMax, character] = rawPolicy.split(' ');
    const [min, max] = minAndMax.split('-');
    return {
        character,
        min: parseInt(min),
        max: parseInt(max),
        password
    }
};

const parseMany = (rawPasswords: string): policy[] => {
    return rawPasswords.split(/\r?\n/).map(raw => raw.trim()).map(parse);
};

const isValidPassword = ({ character, min, max, password} : policy): boolean => {
    const passwordRegex: RegExp = new RegExp(character, 'g');
    const found = password.match(passwordRegex) || [];
    return found.length >= min && found.length <= max
};

const isValidPassword2 = ({ character, min, max, password}: policy): boolean => {
    const minChar = password.charAt(min - 1);
    const maxChar = password.charAt(max - 1);

    return (minChar === character && maxChar !== character) || (minChar !== character && maxChar === character);
};

const getValidPasswords = (passwords: string): string[] => {
    return validPasswords(isValidPassword)(passwords)
};

const getValidPasswords2 = (passwords: string): string[] => {
    return validPasswords(isValidPassword2)(passwords)
};

// todo: type definition of a fn looks like a fn
const validPasswords = (predicate: (policy) => boolean): (string) => string[] => {
    return (passwords) => parseMany(passwords).filter(predicate).map(valid => valid.password)
};

module.exports = {getValidPasswords, parse, parseMany, isValidPassword, isValidPassword2, getValidPasswords2};
