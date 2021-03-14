export function JankyKadanesAlgorithm(array: number[]) {
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

export function OptimizedKadanesAlgorithm(array: number[]) {
    // Write your code here.
    
    let runningMax: number = array[0];
    let runningSum: number = array[0];

    for (let i = 1; i < array.length; i++) {

            if (array[i] >= 0) {//positive cur
                    if (runningSum >= 0) {//positive r
                            runningSum += array[i]
                    } else {//negative r
                            runningSum = array[i]
                    }
                    
            } else {//negative cur
                    if (runningSum > runningMax) { runningMax = runningSum }
                    if (runningSum >= 0) {//positive r
                            runningSum += array[i]
                    } else {//negative r
                            runningSum = array[i]
                    }
            }
        
    }
    if (runningSum > runningMax) { runningMax = runningSum }


    if (array.length) return runningMax;
    return -1
}

/*
if a[i] is negative => always check against runningMax(because a reduction has occurred)

if r is negative: 
r = 0

if r is positive: is it worth taking the neg to carry on a value? 
if r > 0: 
    r = r + a[i]

else:
    r = 0

if a[i] is positive =>

if r is negative: 
r = a[i]

if r is positive: 
r = r + a[i]
*/