export function minimumCharactersForWords(words: string[]) {
// Write your code here.
    let lettersList: string[] = [];
    let lettersCache: {[key: string]: number} = {};
    
    for (let i = 0; i < words.length; i++) {
        
        let countedLetters: {[key: string]: number} = {};
        
        for (let l = 0; l < words[i].length; l++) {
            if (words[i][l] in countedLetters) countedLetters[words[i][l]]++;
            else countedLetters[words[i][l]] = 1;
        }
        
        for (const [letter, count] of Object.entries(countedLetters)) {
            if (letter in lettersCache) {
                lettersCache[letter] = Math.max(count, lettersCache[letter]);
            } else {
                lettersCache[letter] = count;
            }
            
        }
    }
    
return Object.entries(lettersCache).reduce((lettersList, [letter, count]) => {
        let nextLettersList = lettersList;
        
        for (let i = 0; i < count; i++) {
            nextLettersList = nextLettersList.concat([letter]);
        }
        
        return nextLettersList;
    }, lettersList);
}