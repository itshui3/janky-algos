export function staircaseTraversal(height: number, maxSteps: number) {
// Write your code here.
    let initPerm: number[] = [];
    let perms: number[][] = [];
    
    re_step(height, maxSteps, initPerm, perms);
    
return perms.length;
}

function re_step(stepsLeft: number, maxSteps: number, perm: number[], perms: number[][]) {
/*
take all possible steps given maxSteps & stepsLeft
*/
    for (let s = 1; s < maxSteps+1; s++) {
        
        if (stepsLeft - s > 0) {
            re_step(stepsLeft-s, maxSteps, perm.concat(s), perms);
        } else if (stepsLeft - s === 0) {
            perms.push(perm.concat(s));
        } else {
            return;
        }
        
    }
}

/*
for each type of permutation, what are the choices I can make at each individual 
point? how do I track those separate branching paths recursively so as to cover 
all potential configurations? 
*/