const heightsArray = [5];
// const heightsArray = [7,1,2,3,9];

const getMaxWaterContainer = function(heights) {

    let maxArea = 0;

    console.log( {maxArea});

    // we need two pointers
    // double for loop
    for(let p1=0; p1< heights.length; p1++) {
        console.log({p1, value: heights[p1]})

        for (let p2=p1+1; p2< heights.length; p2++) {
            console.log({p2});

            const height = Math.min(heights[p1], heights[p2]);
            // calculate the width
            const width = p2-p1;
            const area = height * width;

            // compare the existing max area (maxArea) with new calculated max area (area.
            maxArea = Math.max(maxArea, area);
        }
    }
    return maxArea;
}

console.log(getMaxWaterContainer(heightsArray));

