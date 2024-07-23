// Brut force solution

export const findTwoSum = function (nums, target) {
    for (let p1 =0; p1 < nums.length; p1++) {
        const numberToFind = target - nums[p1];
        for(let p2 = p1+1; p2< nums.length; p2++) {
            if(numberToFind === nums[p2]) {
                return [p1, p2];
            }
        }
    }
    return null;
}

// Optimal using hashmap
export const findTwoSum2 = function (nums, target) {
    const numsMap = {};
    for (let p =0; p < nums.length; p++) {
        const currentMapVal = numsMap[nums[p]];
        if (currentMapVal >= 0) {
            return [currentMapVal, p];
        } else {
            const numberToFind = target - nums[p];
            numsMap[numberToFind]= p;
        }
    }
    return null;
}
