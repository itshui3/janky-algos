export function minRewards(scores: number[]) {
	
	let rewards = scores.map(_ => NaN);

  // Write your code here.
	for (let i = 0; i < scores.length; i++) {
		// [0] determine valley | O(n) loop
		let left: number = 0;
		let right: number = 0;
		
		if (i === 0 || scores[i-1] > scores[i]) left = 1;
		if (i === scores.length-1 || scores[i+1] > scores[i]) right = 1;
		
		// not a valley
		if (!left || !right) continue;
		
		// it's a valley
		// [1] build towards peak | O(n) pointer manipulation
		rewards[i] = 1;
		// increment left of valley and flag peak NaN
		for (let l = i-1; l > -1; l--) {
			/*
			if it's greater than val to right, increment
			if it's at 0, we're done
			if it's greater than 0, we have to check if it's a peak
			*/
			if (scores[l] > scores[l+1]) rewards[l] = rewards[l+1]+1;
			if (l === 0) continue;
			if (scores[l-1] < scores[l]) {
				rewards[l] = NaN;
				break;
			}
		}

		// increment right of valley and flag peak NaN
		for (let r = i+1; r < scores.length; r++) {
			if (scores[r] > scores[r-1]) rewards[r] = rewards[r-1]+1;
			if (r === scores.length-1) continue;
			if (scores[r+1] < scores[r]) {
				rewards[r] = NaN;
				break;
			}

		}
	}
	
	for (let i = 0; i < rewards.length; i++) {
		if (isNaN(rewards[i])) {
			if (rewards[i-1] > rewards[i+1]) {
				rewards[i] = rewards[i-1]+1
			} else rewards[i] = rewards[i+1]+1
		}
	}
	
  return rewards.reduce((prev, cur) => prev + cur, 0);
}
