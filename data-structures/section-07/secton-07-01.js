// Given an array = [2,5,1,2,3,5,1,2,4]
// it should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// it should return undefined

function firstRecurringCharacter(input) {
    for(let i=0;i<input.length;i++) {
        for(let j= i+1;j<input.length;j++) {
            if(input[i] === input[j]){
                return input[i];
            }
        }
    }
    return undefined;
} // O(n^2) O of n square

function firstRecurringCharacter2(input) {
    let map = {};
    for(let i=0;i<input.length;i++) {
        if(map[input[i]]) {
            return input[i]
        } else {
            map[input[i]] = i;
        }
    }
}


firstRecurringCharacter([2,5,1,2,3,5,1,2,4]);

firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]);

