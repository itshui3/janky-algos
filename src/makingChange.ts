function numberOfWaysToMakeChange(n: number, denoms: number[]) {
	if (n === 0) return 1
  // Write your code here.
	const sortedDenoms = denoms.sort((a, b) => b-a);

	let ways: number = 0
	recurseDenoms(n, sortedDenoms);
	
	return ways;
	
	function recurseDenoms(curN: number, curDenoms: number[]) {
		
		if (curDenoms.length === 1) {
			// base case
			// either divisible by last val, or not
			if (curN % curDenoms[0] === 0) { ways++ }
			return
		}
		
		// if there are more denoms, determine divisibility ceiling
		// loop recursion
		let ceiling = Math.ceil( curN / curDenoms[0] )
		if (curN % curDenoms[0] === 0) { ceiling++ }
		
		for (let i = 0; i < ceiling; i++) {
			if (curN - (i * curDenoms[0]) === 0) {
				ways++
				return
			}
			recurseDenoms(curN - (i * curDenoms[0]), curDenoms.slice(1))
		}
	}
}

export { numberOfWaysToMakeChange }