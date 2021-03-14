export function kadanesAlgorithm(array: number[]) {
    // Write your code here.
    
    let runningMax: number = array[0];

    for (let i = 0; i < array.length; i++) {
        
            let runningSum: number = 0;
            for (let l = i; l < array.length; l++) {
                    runningSum += array[l];
                    if (runningSum > runningMax) {
                            runningMax = runningSum;
                    }
            }
    }
    if (array.length) {
            return runningMax;
    }
    return -1;
}