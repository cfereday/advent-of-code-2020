const mustHavePasswordKeys = [
    'ecl',
    'pid',
    'eyr',
    'hcl',
    'byr',
    'iyr',
    'hgt'
];

const extractPasswords = (passwords: string): string[] => {
    const split = passwords.split(/\n\n|\r\r/g);
    return split.map(p => {
        const stripped = p.replace(/\s+/g, " ");
        return stripped.trim()
    });
};

const isValid = (password: optionalPassword | ValidPassword): boolean => {
    const allKeys = Object.keys(password);
   const result = allKeys.filter(k => ValidPasswordEnum.includes(k));
   return result.length === ValidPasswordEnum.length
};

const getAllValidPasswordsPart1 = (passwords: string): ValidPassword[] => {
    const extracted = extractPasswords(passwords);
    // @ts-ignore
    return extracted.filter(p => isValid(p))
};

module.exports = {extractPasswords, isValid, getAllValidPasswordsPart1};
