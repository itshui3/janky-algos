interface Block {
    [key: string]: boolean;
}

interface distanceObj {
    [key: string]: number;
}

export function apartmentHunting(blocks: Block[], reqs: string[]) {
    /*
    for each block
    construct an object with each req as key
    */
    let distances = blocks.map(_ => {
        let dObj: distanceObj = {};
        
        reqs.forEach(req => dObj[req] = NaN);
        
        return dObj;
    });
    
    for (let i = 0; i < distances.length; i++) {
        
        for (let l = i; l > -1; l--) {
            
            reqs.forEach(req => {
                if (blocks[l][req]) {
                    if (isNaN(distances[i][req])) distances[i][req] = i-l;
                    else {
                        if (distances[i][req] > i-l) distances[i][req] = i-l;
                    }
                }
            });
            
        }
        
        for (let r = i+1; r < blocks.length; r++) {
            reqs.forEach(req => {
                if (blocks[r][req]) {
                    if (isNaN(distances[i][req])) distances[i][req] = r-i;
                    else {
                        if (distances[i][req] > r-i) distances[i][req] = r-i;
                    }
                }
            });

        }
        
    }
    
    const compiledDistances = distances.map(d => {
        return Object.values(d).reduce((a, b) => a > b ? a : b, 0);
    });

return compiledDistances.indexOf(Math.min(...compiledDistances));
}