export function minNumberOfCoinsForChange(n: number, denoms: number[]) {
    if (n === 0) { return 0 }
    if (!denoms.length) { return -1 }
// Write your code here.
// naively, if I generate all permutations that can make change and 
// instead of storing 'ways' as a count of the permutations
// I store the number of coins used, and only track the lowest 
// after running across all possible permutations, I should have
// an 'n' value that tracks the min number of coins for change
    let sortedDenoms = denoms.sort((a, b) => b-a);
    let runningRet: number = NaN;

    re_change(n, sortedDenoms, 0);
		if (runningRet) {
				return runningRet
		} else { return -1 }
		
    function re_change(nLeft: number, denomsLeft: number[], runningC: number) {
        // if !runningRet, replace with anything
        if (denomsLeft.length === 1) {

            if (nLeft % denomsLeft[0] === 0) {

                const count = runningC + (nLeft / denomsLeft[0])
								
                if (!runningRet) {
                    runningRet = count
                } else if (count < runningRet) {
                    runningRet = count
                } 
            }
            return
        } else

        if (nLeft / denomsLeft[0] < 1) {
            // nLeft not divisible by current denom, pass turn
            re_change(nLeft, denomsLeft.slice(1), runningC);
        } else 
        
        if (nLeft / denomsLeft[0] >= 1) {
            // calculate possible number of coins usable in cur denom
            const coinsPC = Math.floor(nLeft / denomsLeft[0]) + 1
            for (let i = 0; i < coinsPC; i++) {
							console.log(i);
                re_change(
                    nLeft-(i*denomsLeft[0]), 
                    denomsLeft.slice(1), 
                    runningC+i);
            }

        }

        
    }
}