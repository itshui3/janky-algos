export function taskAssignment(k: number, tasks: number[]) {
// Write your code here.
    
    const idx_tasks = tasks.map((duration, idx) => [idx, duration]).sort((a, b) => a[1]-b[1]);
    
    let l = 0;
    let r = idx_tasks.length-1;
    
    const pairs: number[][] = [];
    
    while (l < r) {
        
        pairs.push([idx_tasks[l][0], idx_tasks[r][0]]);
        
        l++;
        r--;
    }
    
return pairs;
}