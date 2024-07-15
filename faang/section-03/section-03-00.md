# Arrays 

you are given an array of positive integers where each integer represents the height of a vertical;
line on a chart.
Find two lines which together with the x-axis forms a container that would hold the greatest amount of water.
Return the area of water it would hold

* Does the thickness of the lines affect the area? 
  * No. we assume it takes no space.

* Do the left and right sides of the graph count as walls?
  * No. the sides cannot be used to form a container.

* Does a higher line inside our container affect our area?
  * No, lines inside a container don't affect the area.

### Test cases

What is the best test case ?
- Array [7,1,2,3,9] we know we ujse 7 and 9 to form the container. LXW is the area.
- 
- L = 7 we use the smaller, and what about the W, Subtracting the indexes,
  - [7,1,2,3,9] 
  -  0 1 2 3 4   => 4 - 0 that gives the distance = 4
  - 7 x 4 = 28

- Array with no element returns 0
- Array with one element returns 0
- Example when the answer is not obvious 
  - [6,9,3,4,5,8] here we don't know if the correct answer is 6,8 or 9,8 but we can take
    - 8,6 and lesser is 6 and with from the indexes which is 5 - 6x5 = 30
    - 9,8 and lesser is 8 and 4 = 32
    - we need to pick the correct numbers as part of the logical steps.

### Figure out a solution without code


- [7,1,2,3,9]
-  0 1 2 3 4   
We need to calculate every single container, but we know 7,9 are the correct
area = Length x Width 

(a,b) => min(a,b) x (b index -a index)

a starts first element and b moves to the right of the element.

// max area initializes at 0 
maxArea = 0;
// run formula

min(7,1) x (1 - 0); => 1 x 1 => 1 so we replace the current max area with our max area and move the b 
move b forward
min(7,2) x (2 - 0); => 2 x 2 => 4 so we compare an the new area is greater so set the max area to 4
move b forward
min(7,3) x (3 - 0) => 3 x 3 => 9 so we compare an the new area is greater so set the max area to 9 
move b forward
min(7,9) x (4-0) => 7 x 4 => 28 so we compare an the new area is greater so set the max area to 28 

we move a forward
and b forward

min(1,2) x (2 - 1) => 1 x 1 => 1 we compare with current max area so not changes happen
move b forward
min(1,3) x (3 - 1) => 1 x 2 => 2 we compare with current max area so not changes happen
move b forward
min(1,9) x (4 - 1) => 1 x 3 => 3 we compare with current max area so not changes happen

a =  2
b = 3
min(2,3) x (3 - 2) => 2 x 1 => 3 we compare with current max area so not changes happen
move b forward
min(2,9) x (4 - 2) => 2 x 2 => 4 we compare with current max area so not changes happen

reset a and b
a = 3
b = 9
min(3,9) x (4–3) => 3 x 1 => 3 we compare with current max area so not changes happen

hit the end of the calculation and 28 remains 

there's no b that can be initialized.

```javascript
const getMaxWaterContainer = function (heights) {

  let maxArea = 0;
  // we need two pointers
  // double for loop
  for (let p1 = 0; p1 < heights.length; p1++) {
    for (let p2 = p1 + 1; p2 < heights.length; p2++) {
      const height = Math.min(heights[p1], heights[p2]);
      // calculate the width 
      const width = p2 - p1;
      const area = height * width;

      // compre existing max area (maxArea) with new calculated max area (area.
      maxArea = Math.Max(maxArea, area);
    }
  }
  return maxArea;
}
```

**_`time complexity: O(n^2);`_** // Double for loop <br/>
**_`space complexity: O(1);`_**


## Can we optimize our solution?

New Technique Two Shifting Pointers

area = min(a,b) x (bi-a2)

The width has a direct impact in the value of the area, as for the nature of the multiplication.


```javascript
const getMaxWaterContainer = function (heights) {
  let p1 = 0, p2 = heights.length - 1, maxArea = 0;
  console.log({p1, p2, maxArea});

  while (p1 < p2) {
    console.log({p1, p2})
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;

    const area = height * width;

    maxArea = Math.max(maxArea, area);
    console.log({maxArea})
    if (heights[p1] <= heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxArea;
}
```




