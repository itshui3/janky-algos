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