export function firstDuplicateValue(array: number[]) {
// Write your code here.
    
    let numHash: { [key: string]: number } = {};
    
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] in numHash) return array[i];
        numHash[array[i]] = 1;
        
    }
    
return -1;
}