# Array

Reference Type


[] === [] => false
var object1 = { value: 10};
object2 = object1;
var object3 = { value: 10};
object1 === object2 => true

object1 === object3 => false

language defines primitive types = number, boolean, string, null, undefined.

The programmer creates the reference types 


Objects are reference types, 



**Context vs scope**

Scope is created when it sees curly brackets

function b() {
    // scope
    let a = 1;
}

context tells us where we are withing the object; what is the object in the environment, 
what is at the left of the DOT.
(e.g. console.log(this === window))
function a() {
    console.log(this) // Window
}

window.a() // can run the function

In order to create a new value for this we must do this

const object4 = {
    a: function() {
        console.log(this);
    }
}
object4.a() => this will be the object4


console.log(this); =>


Why is that important ?
Is really important when we do instantiation.



// instantiation

How do we do instantiation in JavaScript

```javascript
class Player {
    /*
    * every time we make a copy of a Player, we run the constructor
    * and create the properties in the Player object
    * */
    cosntructor(name, type) {
        this.name = name;
        this.type = type;
    }    
    
    introduce() {
        console.log(`HI I am ${this.name}, I am a ${this.type}`);
    }
}

const player1 = new Player('Shah', 'Programmer');

player1.introduce();

// extends means inherit the properties from Player class
// this is called Inheritance.
class Migician extends Player {
    constructor(name, type) {
        super(name, type);
    }
    
    trick() {
        console.log('I am doing a trick as a Magician')
    }
}

// we want to create a wizard player
class Wizard extends Player {
    constructor(name, type) {
        
        console.log(this); // Wizard {} 
        
        // when we extend we need to call the contructor of 
        // the player using super 
        super(name, type); // takes us to the constructor of the Player class
    }
    
    play() {
        console.log(`WEEEEE I am a ${this.type}`);
    }
}

// Instantiation 
const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

// we have then access to the methods of the Wizard class 
// and the methods of the Player class.
```

1. How to build an array
2. How to use it

// we create an array 

```javascript
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    
    get(index) {
        return this.data[index];
    }
    
}

const newArray = new MyArray();
console.log(newArray.get(0)); // undefined

// adding push method
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }
    
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
}
const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
console.log(newArray); // 2


// adding pop method
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    
    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    
    
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.pop();
console.log(newArray);



// adding delete method
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
    
        // shifting elements
        this.shiftItems(index);
        
        return item;
    }
    
    shiftItems(index) {
        for(let i = index; i<this.length -1; i++) {
            this.data[i] = this.data[i+1];
        }
        
        // this.data[this.length-1] will still exist
        delete this.data[this.length-1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.delete(0);
newArray.push('are');
newArray.push('nice');

newArray.delete(1);
console.log(newArray); // you are nice !
```

// Any string question should be treated as an array question
// If asked to revert a string, we use array functions. 
// String turn into an array using the split() function.


Interview questions

Create a function that reverts a string
```javascript

// Not the cleanest way
function reverse(str) {
    // check input
    if (!str || str.length < 2 || typeof str !== 'string') return 'hmm that is not good';
    
    const backwards = [];
    
    const totalItems = str.length - 1; 
    
    for(let i= totalItems; i >= 0; i--) {
        // we don't need split because the str[i] will do it
        backwards.push(str[i]);
    }

    console.log(backwards);
    
    return backwards.join('');
}

reverse('Hi My Name is Oscar');

// In JavaScript we can use with array functions to solve 
function reverse2(str) {
    // check input
    if (!str || str.length < 2 || typeof str !== 'string') return 'hmm that is not good';

    reverse.split('').reverse().join('');
}

// Is there a more modern way followoing the ES6 syntax

const reverse3 = str => reverse.split('').reverse().join('');
const reverse4 = str => [...str].reverse().join('');

```

// given 2 arrays sorted can you merge 2 into 1 single array
```javascript


function mergeSortedArrays(array1, array2) {
    
    const mergedArray = [];
    
    let array1Item = array1[0]; // first item in the array
    let array2Item = array2[0]; // fisrt item in the second array
    
    let i = 1;
    let j = 1;
    
    // check input
    if(array1.length === 0) {
        return array2;
    }
    
    if (array2.length === 0) {
        return array1;
    }
    
    // PROBLEM WITH THIS IMPLEMENTATION BELOW 
    
    // while(array1Item || array2Item) {
    //     console.log(array1Item, array2Item);
    //     if (array1Item < array2Item) {
    //         mergedArray.push(array1Item);
    //         array1Item = array1[i];
    //         i++;
    //     }
    //    
    //     if (array2Item < array1Item) {
    //         mergedArray.push(array2Item);
    //         array2Item = array1[j];
    //         j++;
    //     }
    // }

    // SOLUTION 
    while(array1Item || array2Item) {
        console.log(array1Item, array2Item);
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array1[j];
            j++;
        }
    }
    return mergedArray;
}


mergeSortedArrays([0,3,4,31],[4,6,30]);

```




