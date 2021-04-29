export function generateDocument(characters: string, document: string) {
	// 'key': [have, req];
	let charaHash: { [key: string]: [number, number] } = {};
	
	// have characters
	for (let i = 0; i < characters.length; i++) {
		if (characters[i] in charaHash) {
			charaHash[characters[i]][0] += 1;
		} else {
			charaHash[characters[i]] = [1, 0];
		}
	}
	
	// req characters
	for (let i = 0; i < document.length; i++) {
		if (document[i] in charaHash) {
			charaHash[document[i]][1] += 1;
		} else {
			return false;
		}
	}
	
	for (let h of Object.values(charaHash)) {
		if (h[0] < h[1]) return false;
	}

  return true;
}