function sortedSquares(nums: number[]): number[] {
    // in O(n)
    
    // [-4,-1,0,3,10]
    // [16,1,0,9,100] - after squaring
    // [0,1,9,16,100] - after sorting
    if (nums.length === 1) {
        return [nums[0]**2]
    }
    
    let result: number[] = [...Array(nums.length)].map(_ => 0);
    
    let cur = nums.length-1;
    
    let start = 0;
    let end = nums.length-1;
    
    // resolve negs
    while (start < end) {
        if (nums[start]**2 > nums[end]**2) {
            result[cur] = nums[start]**2;
            start++;
            cur--;
            if (start === end) {
                result[cur] = nums[end]**2;
            }
        } else {
            result[cur] = nums[end]**2;
            end--;
            cur--;
            if (start === end) {
                result[cur] = nums[start]**2;
            }
        }
    }
    
    return result;
    
};