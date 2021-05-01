export function validIPAddresses(string: string) {
// Write your code here.
    let validIPs: string[] = [];
    
    for (let a = 1; a < string.length-2; a++) {
        let constructA = string.slice(0, a);
        if (+constructA < 0 || +constructA > 255) continue;
        if (constructA.length > 1 && constructA[0] === '0') continue;
        let ipA = constructA + '.';
        
        for (let b = a+1; b < string.length-1; b++) {
            let constructB = string.slice(a, b);
            if (+constructB < 0 || +constructB > 255) continue;
            if (constructB.length > 1 && constructB[0] === '0') continue;
            
            let ipB = ipA + constructB + '.';
            
            for (let c = b+1; c < string.length; c++) {
                let constructC = string.slice(b, c);
                let constructD = string.slice(c, string.length);
                if (+constructC < 0 || +constructC > 255) continue;
                if (+constructD < 0 || +constructD > 255) continue;
                
                if (constructC.length > 1 && constructC[0] === '0') continue;
                if (constructD.length > 1 && constructD[0] === '0') continue;
                
                let ipCD = ipB + constructC + '.' + constructD;
                
                validIPs.push(ipCD);
            }
        }

    }
    
    return validIPs;
}