export function threeNumberSort(array: number[], order: number[]) {
// Write your code here.
    
    let x = order[0];
    let y = order[1];
    let z = order[2];
    
    let xCount = 0;
    let yCount = 0;
    let zCount = 0;
    
    for (let i = 0; i < array.length; i++) {
        
        switch(array[i]) {
                
            case x:
                xCount++;
                break;
                
            case y:
                yCount++;
                break;
                
            case z:
                zCount++;
                break;
                
            default:
                break;
                
        }
        
    }
    
    for (let i = 0; i < xCount; i++) {
        array[i] = x;
    }
    
    for (let i = array.length-1; i > array.length-1-zCount; i--) {
        array[i] = z;
    }
    
    for (let i = xCount; i < xCount + yCount; i++) {
        array[i] = y;
    }
    
return array;
}