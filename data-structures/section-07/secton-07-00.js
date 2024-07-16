class HasTable {
    constructor(size) {
        this.data = new Array(size);
    }

    // underscore means that is a private method
    _hash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value ) {

        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
            // this.data[address].push([key, value]);
            // console.log(this.data);
        } else {
            this.data[address].push([key, value]);
        }
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        console.log(currentBucket);
        if (currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }

        return undefined;

    }

    keys() {
        let keysArray = [];

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]);
                // for (let j = 0; j < this.data[i].length; j++) {
                //     keysArray.push(this.data[i][j][0]);
                // }
            }
        }
        return keysArray;
    }

}

const myHashTable = new HasTable(50);
//
myHashTable.set('grapes', 1000);
myHashTable.set('apples', 54);
myHashTable.get('grapes');