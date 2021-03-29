function isMonotonic(A: number[]): boolean {
    if (A.length === 1) {return true}
    
    let m = 0;
    
    for (let i = 0; i < A.length; i++) {
        if (!i) {continue}
        
        if (A[i] - A[i-1] === 0) {continue}
        
        if (A[i] - A[i-1] > 0) {
            // positive
            if (!m) {m = 1}
            else if (m > 0) {continue}
            else if (m < 0) {return false}
        }

        if (A[i] - A[i-1] < 0) {
            // negative
            if (!m) {m = -1}
            else if (m < 0) {continue}
            else if (m > 0) {return false}
        }
    }
    
    return true
};