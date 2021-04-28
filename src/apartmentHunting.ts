interface Block {
    [key: string]: boolean;
}

interface distanceObj {
    [key: string]: number;
}

export function doubleLoop_apartmentHunting(blocks: Block[], reqs: string[]) {
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

export function leftRight_apartmentHunting(blocks: Block[], reqs: string[]) {
	let distances = blocks.map(_ => {
		let dObj: distanceObj = {};
		reqs.forEach(req => dObj[req] = NaN);
		return dObj;
	});
	
	let leftD: distanceObj = {};
	reqs.forEach(req => leftD[req] = NaN);
	
	for (let l = 0; l < blocks.length; l++) {
		// [0] if req NaN, check for it (put as 0 if exists)
		// [1] if req exist, check for it (put as +1 if not exist)
		reqs.forEach(req => {
			if (!isNaN(leftD[req])) leftD[req] += 1;
			
			if (blocks[l][req]) {
				leftD[req] = 0;
				distances[l][req] = leftD[req];
			} else {
				distances[l][req] = leftD[req];
			}
			
		});
	}
	
	let rightD: distanceObj = {};
	reqs.forEach(req => rightD[req] = NaN);
	
	for (let r = blocks.length-1; r > -1; r--) {
		
		reqs.forEach(req => {
			if (!isNaN(rightD[req])) rightD[req] += 1;
			
			if (blocks[r][req]) {
				rightD[req] = 0;
				distances[r][req] = rightD[req];
			} else {
				// if either NaN, or distances[r][req] < rightD[req] : don't assign
				if (isNaN(distances[r][req]) || rightD[req] < distances[r][req]) distances[r][req] = rightD[req];
			}
			
		})
	}
	
	const compiledDistances = distances.map(d => {
		return Object.values(d).reduce((a, b) => a > b ? a : b, 0);
	});

  return compiledDistances.indexOf(Math.min(...compiledDistances));

}