function arrayPairSum(nums: number[]): number {

    let runningMax: number = 0;
    recursePair(nums);
    
    function recursePair(left: number[], runningSum: number = 0) {

        if (!left.length) {
            if (runningSum > runningMax) {
                runningMax = runningSum;
            }
            return;
        }

        for (let i = 0; i < left.length; i++) {

            for (let l = 0; l < left.length; l++) {
                // only run this logic if they're not the same index
                if (i !== l) {
                    const newRunningSum = runningSum + Math.min(left[i], left[l]);
                    // generate new left and recurse
                    const newLeft = left.slice(0, i < l ? i : l).concat(left.slice(i < l ? i+1 : l+1, i > l ? i : l)).concat(left.slice(i > l ? i+1 : l+1));
                    recursePair(newLeft, newRunningSum)


                }
            }

        }

    }
    
    return runningMax
};