export function minimumWaitingTime(queries: number[]) {
// Write your code here.
    if (!queries.length) return -1;
    
    queries = queries.sort((a, b) => a-b);
    
    let runningWait = 0;
    return queries.map((wait) => {
        let waitTime = runningWait;
        runningWait = waitTime + wait;
        return waitTime;
    }).reduce(((acc, cur) => {
        return acc + cur;
    }), 0);

};

export function simple_minimumWaitingTime(queries: number[]) {
  // Write your code here.
	
	let curWait = 0;
	
	return queries.sort((a, b) => a-b).reduce((totalWait, cur) => {
		
		let indexWait = totalWait + curWait;
		
		curWait += cur;
		
		return indexWait;
	}, 0);
	
}
