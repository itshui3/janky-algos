export function nonConstructibleChange(coins: number[]) {
// Write your code here.
if (!coins.length) return 1;
    
    const sortedCoins = coins.sort((a, b) => a-b);
    
    let change = 1;
    
    while (true) {
// [0] check if change is constructible
//	in other words, given a target change value
//	and an array of coins, determine if it is constructible
        if (!constructChange(sortedCoins, change)) return change;
        change++
    }
}

function constructChange(coins: number[], target: number, acc: number = 0, cur: number = 0) {
    
    for (let i = cur; i < coins.length; i++) {
        if (acc + coins[i] > target) return false;
        
        if (acc + coins[i] === target) return true;
        
        if (acc + coins[i] < target) {
            if (constructChange(coins, target, acc+coins[i], i+1)) return true;
        }
    }
    
    return false;
}

export function nonConstructibleChangeOptimal(coins: number[]) {
	// step [0]: sort input
	const sortedCoins = coins.sort((a, b) => a-b);
	// step [1]: init set-up vars
	let curChange = 0;
	let i = 0;
	
	// step [2]: build algo
	for (; i < coins.length; i++) {
		// if current coin is too large, we have a gap
		// ie. no integers available to build curChange+1
		if (sortedCoins[i] > curChange+1) return curChange+1;
		
		curChange += sortedCoins[i];
	}
	
  return curChange+1;
}