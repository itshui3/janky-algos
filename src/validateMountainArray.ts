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
    // fail-case: mountain not possible
    if (arr.length < 3) return false;
    // fail-case: flatness occurs
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i-1]) return false;
    }
    // fail-case: incline does not occur
    if (arr[1] < arr[0]) return false;

    // handles incline
    let inclining = true;
    let i = 2;
    while (i < arr.length && inclining) {

        if (arr[i] < arr[i-1]) inclining = false;
        i++;
        
    }
    
    // fail-case: never declines
    if (i === arr.length && inclining) return false;
    
    // handles decline
    for (; i < arr.length; i++) {
        if (arr[i] > arr[i-1]) return false;
    }
    
    return true;
};