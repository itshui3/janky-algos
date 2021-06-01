export function ambiguousMeasurements(measuringCups: number[][], low: number, high: number) {
// Write your code here.
    return re_measure(measuringCups, low, high);

}

function re_measure(
    // base params, these don't change
    measuringCups: number[][], 
    low: number, 
    high: number, 
    // tracker params, these store the current recurse state
    runningLow: number = 0,
    runningHigh: number = 0,
    curCup: number = 0
) {
    if (curCup === measuringCups.length) return false;
    
    let i = 0;
    
    while (measuringCups[curCup][1]*i + runningHigh <= high) {
        
        let curLow = measuringCups[curCup][0]*i + runningLow;
        let curHigh = measuringCups[curCup][1]*i + runningHigh;
        // console.log(`low: ${low}, high: ${high} | curLow: ${curLow}, curHigh: ${curHigh}`);
        // [] - success case
        if (curLow >= low && curHigh <= high) return true;
        // [] - recurse case
        if (re_measure(
            measuringCups,
            low,
            high,
            curLow,
            curHigh,
            curCup+1
        )) return true;
        
        i++;
    }
        
    return false;
}