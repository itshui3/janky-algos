type Range = [number, number];

export function subarraySort(array: number[]): Range {
  // Write your code here.

	let oopStart = NaN;
	for (let i = 0; i < array.length; i++) {
		if (i===0) continue;
		
		if (array[i] < array[i-1]) {
			oopStart = i-1;
			break;
		}
	}
	if ( isNaN(oopStart) ) return [-1, -1];
	
	let oopEnd = NaN;
	for (let i = array.length-1; i > -1; i--) {
		if (i===array.length-1) continue;
		
		if (array[i] > array[i+1]) {
			oopEnd = i+1;
			break;
		}
	}
	
	let smallest = array[oopStart];
	let largest = array[oopEnd];
	console.log(smallest, largest);
	for (let i = oopStart; i < oopEnd+1; i++) {
		
		if (array[i] < smallest) smallest = array[i];
		
		if (array[i] > largest) largest = array[i];
		
	}

	let sortIdx: Range = [oopStart, oopEnd];
	
	for (let i = 0; i < oopStart; i++) {
		if (array[i] > smallest) {
			sortIdx[0] = i;
			break;
		}
	}
	
	for (let i = array.length-1; i > -1; i--) {
		if (array[i] < largest) {
			sortIdx[1] = i;
			break;
		}
	}
	
  return sortIdx;
}