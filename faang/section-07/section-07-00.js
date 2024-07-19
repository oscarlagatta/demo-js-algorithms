export const isValidPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return s === s.split('').reverse().join('');
}

