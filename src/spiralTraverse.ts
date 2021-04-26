export function spiralTraverse(array: number[][]) {
// Write your code here.
    let expectedLength = array.length * array[0].length;
    
    let dir = {
        n: [-1, 0],
        e: [0, 1],
        s: [1, 0],
        w: [0, -1]
    };
    
    let i = [0, 0];
    let curDir = dir.n;

    let tracker: Set<number> = new Set();
    let log = [];
    
    while (true) {
        // [1] log position
        log.push(array[ i[0] ] [ i[1] ]);
        
        if (log.length === expectedLength) break;
        // [2] determine direction
        let changeDir = true;
        while (changeDir) {
            
            let nRow = curDir[0]+i[0];
            let nCol = curDir[1]+i[1];

            switch(curDir) {
                case dir.n:
                    if(i[0] === 0 || tracker.has( array[nRow][nCol] )) curDir = dir.e;
                    else changeDir = false;
                    break;

                case dir.e:
                    if(i[0] === 0 || tracker.has( array[nRow][nCol] )) curDir = dir.s;
                    else changeDir = false;
                    break;

                case dir.s:
                    if(i[0] === 0 || tracker.has( array[nRow][nCol] )) curDir = dir.w;
                    else changeDir = false;
                    break;

                case dir.w:
                    if(i[0] === 0 || tracker.has( array[nRow][nCol] )) curDir = dir.n;
                    else changeDir = false;
                    break;

                default:
                    break;
            }
        }
        
        // [3] move i
        [i[0], i[1]] = [curDir[0]+i[0], curDir[1]+i[1]];
    }
    
return log.length ? log : [-1];
}