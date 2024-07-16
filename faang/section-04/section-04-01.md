# Given an array of integers representing an elevation map where the width of each bar is 1, return how much rainwater can be trapped.



* Do the left and right sides of the graph count as walls?
  * No, the sides are not walls

* Will there be negative integers?
  * No, all are positives

Write some test cases

* [0,1,0,3,1,0,3,1,0,1,2] = answer is 8
* [] = 0
* [3] = 0
* [3,4,3] = 0 // because we cannot see this as impossible to trap water.


currentWater = min(max Left, max Right) - current Height 

```javascript

total = 0; 
maxL = 0;
maxR = 0;

// [0,1,0,3,1,0,3,1,0,1,2] 

const getTrappedRainWater = function (heights) {
    let totalWater = 0;
    for(let p=0; p<heights.length; p++) {
        let leftP = p, rightP = p, maxLeft = 0, maxRight = 0;
        
        while(leftP >= 0) {
            maxLeft = Math.max(maxLeft, heights[leftP]);
            leftP--;
        }
        
        while(rightP <= heights.length) {
            maxRight = Math.max(maxR, heights[p]);
            right++;
        }
        
        const currentWater = min(maxLeft, maxRight) - heights[p];
        
        if ( currentWater >= 0) {
            totalWater+= currentWater;
        }
    }
    
    return totalWater;
}

```




