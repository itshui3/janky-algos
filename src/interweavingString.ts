export function interweavingStrings(one: string, two: string, three: string) {
// Write your code here.
    if ((one+two).length !== three.length) return false;
    
    return re_weaveStrings(one, two, three, 0, 0, 0, '');

}

function re_weaveStrings(
        one: string,
        two: string,
        three: string,
        o: number,
        t: number,
        th: number,
        curString: string
) {
// base cases: 
            // [0] - string has naturally reached it's end
            if (th >= three.length) {
                if (curString === three) return true;
                else return false;
            }
            // [1] - first string used up
            if (o >= one.length) {
                if (curString + two.slice(t, two.length) === three) return true;
                else return false;
            }
            // [2] - second string used up
            if (t >= two.length) {
                if (curString + one.slice(o, one.length) === three) return true;
                else return false;
            }
            // [3] - match not found
            if (one[o] !== three[th] && two[t] !== three[th]) {
                return false;
            }
            // [4] - weave cases
            // [a] - the 'end' character from string one matches end character in string three
            if (one[o] === three[th]) {
                if (re_weaveStrings(one, two, three, o+1, t, th+1, curString+one[o])) return true;
            }
            // [b] - the 'end' character from string two matches end character in string three
            if (two[t] === three[th]) {
                if (re_weaveStrings(one, two, three, o, t+1, th+1, curString+two[t])) return true;
            }
            
            return false;
}