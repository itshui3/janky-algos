export function validMountainArray(arr: number[]): boolean {
    if (arr.length < 3) return false;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i-1]) return false;
    }
    
    let inclined = false;
    let inclining = true;

    let i = 1;
    while (inclining) {
        
        if (arr[i] < arr[i-1]) {
            if (!inclined) return false;
            inclining = false;
        } else {
            inclined = true;
            i++;
        }
        
        
        if (i === arr.length) return false;
    }
    
    for (; i < arr.length; i++) {
        if (arr[i] > arr[i-1]) return false;
    }
    
    return true;
};

export function cleaner_validMountainArray(arr: number[]): boolean {
    // [0] fail-case: mountain not possible due to array length
    if (arr.length < 3) return false;
    // [1] fail-case: flatness occurs
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i-1]) return false;
    }
    // [2] fail-case: incline does not occur
    if (arr[1] < arr[0]) return false;

    // handles incline
    let inclining = true;
    let i = 2;
    while (i < arr.length && inclining) {

        // decline begins
        if (arr[i] < arr[i-1]) inclining = false;
        i++;
        
    }
    
    // [3] fail-case: never declines
    if (inclining) return false;
    
    // handles decline
    for (; i < arr.length; i++) {

        // [4] fail-case: incline occurs while declining
        if (arr[i] > arr[i-1]) return false;
    }
    
    return true;
};