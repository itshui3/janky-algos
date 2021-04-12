function intersect(nums1: number[], nums2: number[]): number[] {
/*
n^2 solution: 
for each value, search for & replace with NaN in 2nd array
*/
    
    /*
    const intersection: number[] = [];
    
    nums1.forEach((val) => {
        
        for (let i = 0; i < nums2.length; i++) {
            if (nums2[i] === val) {
                intersection.push(val)
                nums2[i] = NaN
                return
            }
        }
    })
    
    return intersection;
    */

/*
n solution: 
go through each array
hash the number of occurrences for each int as
intString: [arr1, arr2]
iterate over the hash vals, taking the lower number of each, pushing vals onto solution array
*/
    
    const intersections: { [key:string] : [number, number] } = {};
    
    nums1.forEach((val) => {
        if (val in intersections) {
            intersections[val][0] += 1
        } else {
            intersections[val] = [1, 0]
        }
    });
    
    nums2.forEach((val) => {
        if (val in intersections) {
            intersections[val][1] += 1
        } else {
            intersections[val] = [0, 1]
        }
    });
    
    const intersection: number[] = [];
    
    Object.entries(intersections).forEach( ([key, val]) => {
        for (let i = 0; i < Math.min(...val); i++) {
            intersection.push(+key)
        }
    });
    
    return intersection;
    
};