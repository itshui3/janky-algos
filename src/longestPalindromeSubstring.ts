export function longestPalindromicSubstring(string: string) {
// Write your code here.
    let length = 0;
    let longest = '';
    
    
    for (let i = 0; i < string.length; i++) {
        
        for (let l = i+1; l < string.length+1; l++) {
            let straight = string.slice(i, l);
            let reverse = string.slice(i, l).split('').reverse().join('');
            
            if (straight === reverse && straight.length > length) {
                length = straight.length;
                longest = straight;
            }
        }
    }
return longest.length ? longest : '';
}