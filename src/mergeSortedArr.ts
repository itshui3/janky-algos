export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    
    for (let i = 0; i < n; i++) {
        nums1[m] = nums2[i];
        
        let c = m;
        while (c > 0 && nums1[c] < nums1[c-1]) {
            [nums1[c], nums1[c-1]] = [nums1[c-1], nums1[c]];
            c--;
        }
        
        m++;
        
    }
    
};