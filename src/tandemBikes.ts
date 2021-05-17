export function tandemBicycle(redShirtSpeeds: number[], blueShirtSpeeds: number[], fastest: boolean) {
// Write your code here.
    if (!redShirtSpeeds.length) return 0;
    
    let ascReds = redShirtSpeeds.sort((a, b) => a-b); // asc
    let descBlues = fastest ? blueShirtSpeeds.sort((a, b) => b-a) : blueShirtSpeeds.sort((a, b) => a-b);
    
    let speeds: number[] = [];
    
    for (let i = 0; i < ascReds.length; i++) {
        speeds.push(Math.max(ascReds[i], descBlues[i]));
    }
    
    return speeds.reduce((sum, curNum) => sum+curNum, 0);
}
