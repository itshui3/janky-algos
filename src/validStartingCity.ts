export function validStartingCity(distances: number[], fuel: number[], mpg: number) {
// Write your code here.
    
    let fuelInMiles = fuel.map(f => f*mpg);
    
    for (let l = 0; l < distances.length; l++) {

        let i = l;
        let traveled = 0;
        let available = 0;
        
        while (traveled < distances.length) {
            
            available = (available + fuelInMiles[i]) - (distances[i]);
            
            if (available < 0) break;
            
            if (i < distances.length-1) {i++}
            else {i=0}
            traveled++;
        }
        
        if (traveled === distances.length && available === 0) {return l}
    }
    
return -1;
}
