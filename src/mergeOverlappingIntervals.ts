export function mergeOverlappingIntervals(array: number[][]) {
    // Write your code here.
      array = array.sort((a, b) => a[0]-b[0]);
      
      let i = 0;
      while (i < array.length-1) {
          
          if (array[i][1] >= array[i+1][0]) {
              array[i][1] = Math.max( array[i][1], array[i+1][1] );
              array.splice(i+1, 1);
          } else {
              i++;
          }
          
      }
      
      
    return array;
  }
  