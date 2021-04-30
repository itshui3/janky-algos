export function reverseWordsInString(string: string) {
// Write your code here.
    let words: string[] = [];
    let start = NaN;
    
    let spaces: string[] = [];
    let spaceStart = NaN;
    
    for (let i = 0; i < string.length; i++) {
        // log words
        if (string[i] === ' ') {
            
            if (!isNaN(start)) {
                let word = string.slice(start, i);
                words.push(word);

                start = NaN;
            }
            
            if (isNaN(spaceStart)) spaceStart = i;

        } else {
            
            if (!isNaN(spaceStart)) {
                let space = string.slice(spaceStart, i);
                spaces.push(space);
                
                spaceStart = NaN;
            }
            
            if (isNaN(start)) start = i;
            
        }

    }
    
    words.push(string.slice(start, string.length));
    
    let buildString = '';
    
    let s = spaces.length-1;
    for (let i = words.length-1; i > 0; i--) {
        buildString += words[i] + spaces[s];
        s--;
    }
    
    buildString += words[0];
    console.log(words, spaces);
    
return buildString;
}