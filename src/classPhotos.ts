export function classPhotos(redShirtHeights: number[], blueShirtHeights: number[]) {
// Write your code here.
    let redShirtHeightsSorted = redShirtHeights.sort((a, b) => b-a);
    let blueShirtHeightsSorted = blueShirtHeights.sort((a, b) => b-a);
    
    let row = redShirtHeightsSorted[0] > blueShirtHeightsSorted[0] ? 1 : -1;
    for (let i = 0; i < redShirtHeightsSorted.length; i++) {
        if (redShirtHeightsSorted[i] === blueShirtHeightsSorted[i]) return false;
        
        if (row > 0 && redShirtHeightsSorted[i] < blueShirtHeightsSorted[i]) return false; 
        if (row < 0 && redShirtHeightsSorted[i] > blueShirtHeightsSorted[i]) return false; 

    }
    
    return true;
}
  