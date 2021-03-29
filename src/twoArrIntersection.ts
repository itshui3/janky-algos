function intersection(nums1: number[], nums2: number[]): number[] {
    // intersection? 
    let nums1set = new Set(nums1);
    
    let placed = new Set();
    
    let intersection: number[] = [];
    
    for (let i = 0; i < nums2.length; i++) {
        if ( nums1set.has(nums2[i]) && !placed.has(nums2[i]) ) {
            placed.add(nums2[i])
            intersection.push(nums2[i])
        }
    }
    
    return intersection
};