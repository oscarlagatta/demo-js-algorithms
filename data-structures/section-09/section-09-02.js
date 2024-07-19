// Stacks (arrays)
class Stack {
    constructor() {
      this.array = [];
    }

    peek() {
        // see the top node
        return this.array[this.array.length-1];
    }

    push(value) {
        this.array.push(value);
        return this;
    }

    pop() {
        this.array.pop();
        return this;
    }

    // check stack is empty
    isEmpty() {
       return this.array.length === 0;
    }

}

const myStack = new Stack();
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.peek(); // Discord
// Discord
// Udemy
// Google
myStack.pop(); // Discord // which is the holding pointer.
// Udemy
// Google
myStack.pop(); // Udemy // which is the holding pointer.
// Discord

