const getValidPasswords = (passwords: {}): string[] => {
    let validPasswords = [];
    for (const [key, value] of Object.entries(passwords)) {
        const splitKey: string[] = key.split(' ');
        const passwordCharacter: string = splitKey[1];
        const numberOfCharacters: string[] = splitKey[0].split('-');

        if (value.includes(passwordCharacter)) {
            // remove any other chars & check the length
            const passwordRegex: RegExp = new RegExp(`[^${passwordCharacter}]`, 'g');
            const countOfPasswordChars: number = value.replace(passwordRegex, "").length;

            if ((countOfPasswordChars >= parseInt(numberOfCharacters[0])) && (countOfPasswordChars <= parseInt(numberOfCharacters[1]))) {
                validPasswords.push(value);
            }
        }
    }

    return validPasswords;
};


module.exports = {getValidPasswords};
