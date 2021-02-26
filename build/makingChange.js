export function numberOfWaysToMakeChange(n, denoms) {
    if (n === 0)
        return 1;
    // Write your code here.
    var sortedDenoms = denoms.sort(function (a, b) { return b - a; });
    var ways = 0;
    recurseDenoms(n, sortedDenoms);
    return ways;
    function recurseDenoms(curN, curDenoms) {
        if (curDenoms.length === 1) {
            // base case
            // either divisible by last val, or not
            if (curN % curDenoms[0] === 0) {
                ways++;
            }
            return;
        }
        // if there are more denoms, determine divisibility ceiling
        // loop recursion
        var ceiling = Math.ceil(curN / curDenoms[0]);
        if (curN % curDenoms[0] === 0) {
            ceiling++;
        }
        for (var i = 0; i < ceiling; i++) {
            if (curN - (i * curDenoms[0]) === 0) {
                ways++;
                return;
            }
            recurseDenoms(curN - (i * curDenoms[0]), curDenoms.slice(1));
        }
    }
}
