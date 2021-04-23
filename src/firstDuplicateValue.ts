export function bf_firstDuplicateValue(array: number[]) {
// Write your code here.
    
    let numHash: { [key: string]: number } = {};
    
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] in numHash) return array[i];
        numHash[array[i]] = 1;
        
    }
    
return -1;
}

export function firstDuplicateValue(array: number[]) {
// Write your code here.
    
    for (let i = 0; i < array.length; i++) {
        if (array[ Math.abs(array[i])-1 ] < 0) return Math.abs(array[i]);
        array[ Math.abs(array[i])-1 ] *= -1;
    }
    
return -1
}