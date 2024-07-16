Hash Tables

Objects in JavaScript is a type of hash tables

md5 Hash Generator used in the example 

```javascript

const basket = {
    grapes: 10000,
    oranges: 20,
}

const crypto = require('crypto');

function createHash(data) {
    const hash = crypto.createHash('sha256');
    hash.update(data);
    return hash.digest('hex');
}

basket = {
    ...basket,
    newProp: 'newValue'
};


function createHash2(data, propName, object) {
    const hash = crypto.createHash('sha256');
    hash.update(data);
    const hashedValue = hash.digest('hex');
    object[propName] = hashedValue;
    return object;
}

let oldObject = {
    prop1: 'value1',
    prop2: 'value2'
};

const propName = 'newProp';
const propValue = 'newValue';

oldObject = createHash(propValue, propName, oldObject);

console.log(oldObject);

console.log(createHash("grapes"));





```

IN JS we have Maps and Sets

```javascript
// Map is a different version of a Hash Table
const a = new Map();


// we can have functions as keys


// Sets are a different version of a Hash Table



```