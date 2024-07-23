const parens = {
    '(':')',
    '[':']',
    '{': '}',
}

const isValidParenthesis = function (s) {
    // case we have an empty string
    if (s.length === 0) return true;

    // initialize the stack
    const stack = [];

    for (let i = 0; i < s.length; i++) {

        if (parens[s[i]]) {
            stack.push(parens[s[i]]);
        } else {
            // pop the latest vale of the stack
            const leftBracket = stack.pop();
            const correctBracket = parens[leftBracket];

            if (s[i] !== correctBracket) {
                return false;
            } else {

            }
        }
    }

    return stack.length === 0;
}

