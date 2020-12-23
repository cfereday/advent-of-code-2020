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
    const minCharIndex = password.charAt(min - 1);
    const maxCharIndex = password.charAt(max - 1);
    if (minCharIndex === character && maxCharIndex === character) {
        return false;
    }
    return minCharIndex === character || maxCharIndex === character;
};

const getValidPasswords = (passwords: string): string[] => {
    return parseMany(passwords).filter(isValidPassword).map(valid => valid.password);
};

const getValidPasswords2 = (passwords: string): string[] => {
    return parseMany(passwords).filter(isValidPassword2).map(valid => valid.password);
};

module.exports = {getValidPasswords, parse, parseMany, isValidPassword, isValidPassword2, getValidPasswords2};
