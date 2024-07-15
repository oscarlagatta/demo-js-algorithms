// Arrays

const strings = ['a', 'b', 'c', 'd', 'e'];
// in a 32-bit system we have 4 shells by 4 is 16 bytes of storage

// accessing
const item = strings[2]; // O(1)

// push
strings.push('f'); // O(1)

// pop
strings.pop();
strings.pop(); // O(1)

// add item at the beginning of the array
strings.unshift('x'); // O(n)

// splice adds items in the middle of the array
strings.splice(2, 0, 'alien'); // O(n)


//


