export function interweavingStrings(one: string, two: string, three: string) {
// Write your code here.
    
    return searchInterweave(one, two, three, 0, 0, 0, '');
}

function searchInterweave(one: string, two: string, three: string, o: number, t: number, th: number, runningString: string) {
    
    
    let oC = o;
    let tC = t;
    let thC = th;
    
    let curString = runningString;
    
    for (; thC < three.length; thC++) {
        if (oC === one.length) {
            if (curString+two.slice(tC, two.length) === three) return true;
            else return false;
        }
        
        if (tC === two.length) {
            if (curString+one.slice(oC, one.length) === three) return true;
            else return false;
        }
// - [] when there are two possibilities, path both recursively
        if (three[thC] === one[oC] && three[thC] === two[tC]) {
            if (searchInterweave(one, two, three, oC+1, tC, thC+1, curString+one[o])) return true;
            if (searchInterweave(one, two, three, oC, tC+1, thC+1, curString+two[t])) return true;
        } else 
        if (three[thC] === one[oC]) {
            curString += one[oC];
            oC++;
        } else
        if (three[thC] === two[tC]) {
            curString += two[tC];
            tC++;
            
        } else return false;
        
    }
    
    if (curString === three) return true;
    else return false;
}

/*
at every index, I can choose the next character from either one or two
I can path both by recursively invoking a function that takes in args
indicating the previously taken path so far up to that fn call
*/