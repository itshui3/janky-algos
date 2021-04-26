export function spiralTraverse(array: number[][]) {
  // Write your code here.
	let expectedLength = array.length * array[0].length;
	
	let dir = {
		n: [-1, 0],
		e: [0, 1],
		s: [1, 0],
		w: [0, -1]
	};
	
	let i: [number, number] = [0, 0];
	
	let dirInterface = [dir.e, dir.s, dir.w, dir.n];
	let cd = 0;
	let curDir = dirInterface[cd];
	
	let tracker: Set<string> = new Set();
	let log: number[] = [];

	for (let x = 0; x < expectedLength; x++) {
		// [0] move i
		if (x > 0) [i[0], i[1]] = [curDir[0]+i[0], curDir[1]+i[1]];
		
		// [1] log position
		log.push(array[i[0]][i[1]]);
		tracker.add(`${i[0]}.${i[1]}`);
		
		if (log.length === expectedLength) break;
		// [2] determine next direction
		let nRow = curDir[0]+i[0];
		let nCol = curDir[1]+i[1];

		// validate direction
		while (
			// [a] wall
			nRow < 0 || 
			nCol < 0 || 
			nRow >= array.length || 
			nCol >= array[0].length ||
			// [b] visited
			tracker.has(`${nRow}.${nCol}`)
		) {
			cd++;
			curDir = dirInterface[cd % 4];

			nRow = curDir[0]+i[0];
			nCol = curDir[1]+i[1];
		}

	}
	
  return log.length ? log : [-1];
}