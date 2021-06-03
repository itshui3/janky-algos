type Range = [number, number];

export function bf_searchInSortedMatrix(matrix: number[][], target: number): Range {
  // Write your code here.
	
	for (let o = 0; o < matrix.length; o++) {
		for (let i = 0; i < matrix[0].length; i++) {
			if (matrix[o][i] === target) return [o, i];
		}
	}
	
  return [-1, -1];
}
