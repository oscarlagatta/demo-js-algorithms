// STEPS
// -----
// Identify pointer with lesser value
// Is this pointer value greater than or equal to the max on that side
// Yes If this true, we then update max out that side
// No get water for pointer value, add to total
// Move pointer inwards
// Repeat for the other pointer


const elevationArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

const getTrappedRainWater = function (heights) {

    let left = 0, right = heights.length - 1;
    let leftMax = 0, rightMax = 0, total = 0;

    while (left < right) {
        // identify the pointer with lesser value
        if (heights[left] <= heights[right]) {
            // Is this pointer value greater than or equal to the max on that side
            if (heights[left] >= leftMax) {
                // Yes If this true, we then update max out that side
                leftMax = heights[left];
            } else {
                // No get water for pointer value, add to total
                total += leftMax - heights[left];
            }
            // Move pointer inwards
            left++;
        } else {
            if(heights[right] >= rightMax) {
                rightMax = heights[right];
            } else {
                total += rightMax - heights[right];
            }
            right--;
        }
    }
    return total;
}


/*
* SPACE COMPLEXITY O(1)
* TIME COMPLEXITY O(N)
* */