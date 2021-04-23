export function bf_largestRange(array: number[]): [number, number] {
// Write your code here.
    
    
    const arrangedNums = array.sort((a, b) => a-b);
    
    let counter = 0;
    let maxLength = 0;
    
    let range: [number, number] = [NaN, NaN];
    let curRange: [number, number] = [NaN, NaN];
    
    for (let i = 0; i < arrangedNums.length; i++) {

        if (i === 0) {
            counter = 1;
            curRange = [arrangedNums[i], arrangedNums[i]];
            continue;
        }
        
        if (array[i] === array[i-1]) {
            continue;
        }
        
        if (array[i] === array[i-1]+1) {
            counter += 1;
            curRange[1] += 1;
            continue;
        }
        
        if (array[i] !== array[i-1] && array[i] !== array[i-1]+1) {
            if (counter > maxLength) {
                maxLength = counter;
                range = [...curRange];
            }
            counter = 1;
            curRange = [arrangedNums[i], arrangedNums[i]];
        }
    }
    
    if (counter > maxLength) {
        maxLength = counter;
        range = [...curRange];
    }
    
return range;
}