const mustHavePasswordKeys = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid'
];

const extractPasswords = (passwords: string): string[] => {
    const split = passwords.split(/\n\n|\r\r/g);
    return split.map(p => {
        // https://futurestud.io/tutorials/remove-all-whitespace-from-a-string-in-javascript
        const stripped = p.replace(/\s+/g, " ");
        return stripped.trim()
    });
};

const isValid = (password: string): boolean => {
    const matchedKeys = password.match(/byr|iyr|eyr|hgt|hcl|ecl|pid/g);
    return matchedKeys.length === mustHavePasswordKeys.length;
};

const getAllValidPasswordsPart1 = (passwords: string): string[] => {
    const extracted = extractPasswords(passwords);
    return extracted.filter(p => isValid(p))
};

module.exports = {extractPasswords, isValid, getAllValidPasswordsPart1};
