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

module.exports = {splitPasswords};
