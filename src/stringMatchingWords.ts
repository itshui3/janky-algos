function stringMatching(words: string[]): string[] {
    
    let substrings: string[] = [];
    
    for (let i = 0; i < words.length; i++) {
        
        for (let l = 0; l < words.length; l++) {
            if (i === l) {continue}
            if (words[l].includes(words[i])) {
                substrings.push(words[i])
                break
            }
        }
    }
    
    return substrings
};