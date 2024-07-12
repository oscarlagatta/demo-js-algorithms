export function containsCommonItem2(arr1, arr2) {
    // loop through the first array and create an object where properties === items in the array
    let map = {};
    for (let i=0;i<arr1.length;i++) {
        if(!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    console.log(map)

    // loop through second array and check if item in second array exists on created object.

    // the difference with the previous solution is that we now don't have nested loops


}