export function messy_longestPeak(array: number[]) {
    // Write your code here.
      
      let prevIncline = 0;
      
      let longest = 0;
      let curLength = 0;
      /* 
      inclineStates: [-, 0, +]
      longest: int
      curLength: int
      */
      
      for (let i = 1; i < array.length; i++) {
          let curIncline = array[i] - array[i-1];
  
          if (curIncline < 0) {
              if (curLength) curLength++;
          } else 
  
          if (!curIncline) {
              if (prevIncline < 0 && curLength) {
                  if (curLength > longest) longest = curLength;
              }
              
              curLength = 0;
          } else
  
          if (curIncline > 0) {
              if (prevIncline < 0 && curLength > longest) {
                  longest = curLength;
                  curLength = 0;
              }
              
              if (curLength) {curLength++;}
              else {curLength = 2;}
          }
  
          prevIncline = curIncline;
      }
      
      if (curLength > longest && prevIncline < 0) longest = curLength;
      
    return longest;
  }