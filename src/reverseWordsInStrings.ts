export function reverseWordsInString(string: string) {
// Write your code here.
    
    let words: string[] = [];
    let spaces: string[] = [];
    let orderedPcs: string[] = [];
    
    let cur: 'space' | 'word' = 'space';
    let start = 0;
    
    let i = 0
    for (; i < string.length; i++) {
        
        if (string[i] === ' ') {
        // start of space
            if (cur === 'word') {
                let spaceStr = string.slice(start, i);
                console.log('spaceStr:', spaceStr);
                
                if (spaceStr.length) {
                    orderedPcs.push(spaceStr);
                }
                
                start = i;
                cur = 'space';
            }
        } else {
        // start of word
            if (cur === 'space') {
                let wordStr = string.slice(start, i);
                console.log('wordStr:', wordStr);
                
                if (wordStr.length) {
                    orderedPcs.push(wordStr);
                }
                
                start = i;
                cur = 'word';
            }
        }
    }
    orderedPcs.push(string.slice(start, i));

    let reOrderedString: string = '';
    
    for (let l = orderedPcs.length-1; l > -1; l--) {
        reOrderedString += orderedPcs[l];
    }
    return reOrderedString;
}
