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
  
          // case: currently decreasing
          // if in peak, peak should increment
          if (curIncline < 0) {
              if (curLength) curLength++;
          } else 
  
          // case: currently flat
          // curLength always negates to 0
          // if peak ends, check longest
          if (!curIncline) {
              if (prevIncline < 0 && curLength) {
                  if (curLength > longest) longest = curLength;
              }
              
              curLength = 0;
          } else
  
          // case: currently increasing
          // if peak starting, account for 2
          // if in peak, increment peak
          // if ending a peak, check longest and reset curLength
          if (curIncline > 0) {
              if (prevIncline < 0 && curLength > longest) {
                  longest = curLength;
                  curLength = 0;
              }
              
              if (curLength) {curLength++;}
              else {curLength = 2;}
          }
  
          // assigns current to previous incline
          prevIncline = curIncline;
      }
      
      // if last stretch consists of peak, check longest
      if (curLength > longest && prevIncline < 0) longest = curLength;
      
    return longest;
  }