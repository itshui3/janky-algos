export function groupAnagrams(words: string[]) {
// Write your code here.
    let letterDictionary: { [key: string]: number }[] = [];
    
    for (let i = 0; i < words.length; i++) {
        letterDictionary.push({});
        for (let s = 0; s < words[i].length; s++) {
            if (words[i][s] in letterDictionary[i]) {
                letterDictionary[i][words[i][s]] += 1;
            } else letterDictionary[i][words[i][s]] = 1;
            
        }
    }
    
    let groups: string[][] = [];
    let grouped: Set<number> = new Set();

    for (let i = 0; i < words.length; i++) {
        
        if (grouped.has(i)) continue;
        
        let grouping: string[] = [];
        grouping.push(words[i]);
        
        grouped.add(i);
        
        for (let l = i+1; l < words.length; l++) {
            if (grouped.has(l)) continue;
            
            let add = true;
            for (let [iLetter, iCount] of Object.entries(letterDictionary[i])) {
                if (iLetter in letterDictionary[l] && letterDictionary[l][iLetter] === iCount) {
                    // do nothing
                } else {
                    add = false;
                    continue;
                }
            }
            
            for (let [lLetter, lCount] of Object.entries(letterDictionary[l])) {
                if (lLetter in letterDictionary[i] && letterDictionary[i][lLetter] === lCount) {
                    // do nothing
                } else {
                    add = false;
                    continue;
                }
            }
            
            if (add) {
                grouping.push(words[l]);
                grouped.add(l);
            }
            
        }
        
        groups.push(grouping);
    }
    
return groups.length ? groups : [];
}