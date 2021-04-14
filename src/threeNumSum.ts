type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  // Write your code here.
	const numberSet = new Set(array);
	const permSet: Set<string> = new Set();
	
	for (let i = 0; i < array.length-1; i++) {
//outer pointer
		for (let l = i+1; l < array.length; l++) {
//inner pointer
			const reqNum = targetSum - (array[i] + array[l]);
		
			if ( numberSet.has(reqNum) && reqNum !== array[i] && reqNum !== array[l] ) {
				let sortedPerm = [array[i], array[l], reqNum].sort((a, b) => a-b);
				let uniqueCheckReady = JSON.stringify(sortedPerm);
				permSet.add( uniqueCheckReady );
			}
			
		}
		
	}

  return [...permSet].map((permString) => JSON.parse(permString)).sort((a, b) => {
		if (a[0] - b[0] !== 0) {
			return a[0] - b[0];
		} else if (a[1] - b[1] !== 0) {
			return a[1] - b[1];
		} else {
			return a[2] - b[2];
		}
	});
}

/*
iterate through all tri-permutations
determining which tri-sums equal target

if I create a set of all nums
I only need to create dual-permutations
*/