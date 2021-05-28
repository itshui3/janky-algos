export function longestSubstringWithoutDuplication(string: string) {

// Write your code here.
    let runningCache: { [key: string]: number } = {};
// 	stored as ranges so as to not incur a nested O(n) from slicing strings
// 	upper bound is inclusive here!
    let curString = [0, 0];

    let runningString = [0, 0];
    
    for (let i = 0; i < string.length; i++) {
// [] - if curChar is part of the current string's range, ie dupe found within curRange
        if (string[i] in runningCache && runningCache[string[i]] >= curString[0]) {
// [] - start the next range 1 index after most recent dupe
            curString[0] = runningCache[string[i]]+1;

        } 
// [] - update curString's endBound, add or update character's most recent index in runningCache
        curString[1] = i;
        runningCache[string[i]] = i;
// [] - check if curString is longer than runningString, replace if so
        if (i-curString[0] > runningString[1]-runningString[0]) [runningString[0], runningString[1]] = [curString[0], i];
    }
    
    return string.slice(runningString[0], runningString[1]+1);
}