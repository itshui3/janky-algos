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

export function setCheck_largestRange(array: number[]): [number, number] {
// Write your code here.
    const numSet = new Set(array);
    
    const max = Math.max(...array);
    const min = Math.min(...array);
    
    let range: [number, number] = [min, min];
    let curR: [number, number] = [NaN, NaN];
    
    for (let i = min; i < max+1; i++) {
        
        if ( numSet.has(i) && !isNaN(curR[0]) ) {
            // in middle of range
            curR[1] = i;
        } else 
        if ( numSet.has(i) && isNaN(curR[0]) ) {
            // start of a new range
            curR[0] = i;
            curR[1] = i;
        } else 
        if ( !numSet.has(i) && !isNaN(curR[0]) ) {
            // end range
            if ( curR[1] - curR[0] > range[1] - range[0] ) {
                [range[0], range[1]] = [curR[0], curR[1]];
            }
            
            [curR[0], curR[1]] = [NaN, NaN];
        } else 
        if ( !numSet.has(i) && isNaN(curR[0]) ) {
            // do nothing
        }
    }
    
    if ( curR[1] - curR[0] > range[1] - range[0] ) {
        [range[0], range[1]] = [curR[0], curR[1]];
    }
    
return range;
}

export function largestRange(array: number[]): [number, number] {
// Write your code here.
    let min = Math.min(...array);
    let max = Math.max(...array);

    let numHash: { [key: string]: boolean } = {};
    
    for (let i = 0; i < array.length; i++) {
        numHash[array[i]] = false;
    }
    
    let range: [number, number] = [min, min];
    
    for (let i = 0; i < array.length; i++) {
        if ( numHash[ array[i] ] ) continue;
        
        // check left
        let leftVals = array[i];
        for (let l = leftVals-1; l > min-1; l--) {
            if (l in numHash) {
                numHash[l] = true;
                leftVals -= 1;
            } else break;
        }
        // check right
        let rightVals = array[i];
        for (let r = rightVals+1; r < max+1; r++) {
            if (r in numHash) {
                numHash[r] = true;
                rightVals += 1;
            } else break;
        }
        
        if (rightVals - leftVals > range[1] - range[0]) {
            [range[0], range[1]] = [leftVals, rightVals];
        }
    }
    return range;
}