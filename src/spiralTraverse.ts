export function zigzagTraverse(array: number[][]) {

// flat cases
	if (array.length === 1) return array[0];
	if (array[0].length === 1) return array.map(inner => inner[0]);
	
// interface
	let dir = {
		d: [1, 0],
		r: [0, 1],
		
		zi: [-1, 1],
		za: [1, -1]
	}
	
// loop body
	let pos = [0, 0];
	let log = [];
	
	let move = dir.za;
	
	for (let n = 0; n < array.length*array[0].length; n++) {
// [0] move piece
		if (n) {
			[pos[0], pos[1]] = [move[0]+pos[0], move[1]+pos[1]];
		}
		
// [1] log cur val
		log.push(array[pos[0]][pos[1]]);
		
// [2] determine next move
		// [a] prev === hook
		if (move === dir.d || move === dir.r) { // at a wall
			// to zig
			if (pos[0] === array.length-1 || !pos[1]) {
				move = dir.zi;
			} else 
			
			// to zag
			if (pos[1] === array[0].length-1 || !pos[0]) {
				move = dir.za;
			}
			
		} else if (move === dir.zi || move === dir.za) {
			
			if (pos[1] === array[0].length-1 || !pos[1]) {
				move = dir.d;
			} else
			
			if (pos[0] === array.length-1 || !pos[0]) {
				move = dir.r;
			}
		}
		
	}
	
	// Write your code here.
	return log.length ? log : [-1];
}