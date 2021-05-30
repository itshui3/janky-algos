export function interweavingStrings(one: string, two: string, three: string) {
  // Write your code here.
	if ((one+two).length !== three.length) return false;
	
	const visited = new Set<string>();
	const canHasInterweave = re_weaveStrings(one, two, three, 0, 0, 0, '', visited);

	return canHasInterweave;

}

function re_weaveStrings(
		one: string,
		two: string,
		three: string,
		o: number,
		t: number,
		th: number,
		curString: string,
		visited: Set<string>
) {
// edge case: if current path permutation has been arrived at before from a diff route, everything forward has also already been traversed
    if (visited.has( (o+'')+(t+'') )) return false;
    visited.add( (o+'')+(t+'') );
    // implementation: iterate the parts I can iterate, recurse when match found on both ends
    
    let runningString = curString;
    
    let oP = o;
    let tP = t;
    
    for (let i = th; i < three.length; i++) {
        // [] - neither ends match
        if (one[oP] !== three[i] && two[tP] !== three[i]) return false;
        
        // [0] - string has naturally reached it's end
        if (i >= three.length) {
            if (runningString === three) return true;
            else return false;
        }
        // [1] - first string used up
        if (oP >= one.length) {
            if (runningString + two.slice(tP, two.length) === three) return true;
            else return false;
        }
        // [2] - second string used up
        if (tP >= two.length) {
            if (runningString + one.slice(oP, one.length) === three) return true;
            else return false;
        }
        
        // [] - weave cases
        if (one[oP] === three[i] && two[tP] === three[i]) {
            if (re_weaveStrings(one, two, three, oP+1, tP, i+1, runningString+one[oP], visited)) return true;
            if (re_weaveStrings(one, two, three, oP, tP+1, i+1, runningString+two[tP], visited)) return true;
            return false;
        }
        // [] - one end match cases: 
        if (one[oP] === three[i]) {
            runningString += one[oP];
            oP++;
        }
        
        if (two[tP] === three[i]) {
            runningString += two[tP];
            tP++;
        }
        
        visited.add( (oP+'')+(tP+'') );
        
    }

    
}