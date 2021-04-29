export function firstNonRepeatingCharacter(string: string) {
// Write your code here.
    let countHash: { [key: string]: number } = {};
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] in countHash) countHash[string[i]] += 1;
        else countHash[string[i]] = 1;
    }
    
    for (let i = 0; i < string.length; i++) {
        if (countHash[string[i]] === 1) return i;
    }
    
return -1;
}
