export function injection_merge(nums1: number[], m: number, nums2: number[], n: number): void {
    
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

export function shift_merge(nums1: number[], m: number, nums2: number[], n: number): void {
    
    let injector = nums1.length;
    for (let i = m-1; i > -1; i--) {
        injector--;
        nums1[injector] = nums1[i];
    }

    let startM = injector;
    let startN = 0;

    injector = 0;

    while (startN < n && startM < m+startM) {
        if (nums1[startM] < nums2[startN]) {
            nums1[injector] = nums1[startM];
            startM++;
        } else {
            nums1[injector] = nums2[startN];
            startN++;
        }
        injector++;
    }

    for (let i = startN; i < n; i++) {
        nums1[injector] = nums2[i];
        injector++;
    }

};