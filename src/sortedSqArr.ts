export function sortedSquaredArray(array: number[]) {
    // Write your code here.
    
      // [0] build neg arr
      let negArrFlipped: number[] = [];
      let i = 0;
      
      while (array[i] < 0) {
          // add neg val
          negArrFlipped.push( array[i] );
          i++;
      }
      
      let negArr: number[] = [];
      for (let flipN = negArrFlipped.length-1; flipN > -1; flipN--) {
          negArr.push( Math.abs( negArrFlipped[flipN]) );
      }
      
      // [1] build pos arr
      let posArr: number[] = [];
      for (;i < array.length; i++) {
          // add pos val
          posArr.push( array[i] );
      }

      let squaredArr: number[] = [];
      // [2] build squared arr
      let n = 0;
      let p = 0;
      
      while (n < negArr.length || p < posArr.length) {
  
          if (posArr.length === 0 || negArr.length === 0) {
              
              if (posArr.length === 0) {
                  squaredArr.push( Math.pow(negArr[n], 2) );
                  n++;
              } else {
                  squaredArr.push( Math.pow(posArr[p], 2) );
                  p++;
              }
              
              continue;
          }
          
          if (n === negArr.length || p === posArr.length) {
              
              if (n === negArr.length) {
                  squaredArr.push( Math.pow(posArr[p], 2) );
                  p++;
              } else {
                  squaredArr.push( Math.pow(negArr[n], 2) );
                  n++;
              }
              
              continue;
          }
          
          if (negArr[n] <= posArr[p]) {
              squaredArr.push( Math.pow(negArr[n], 2) );
              n++;
          } else {
              squaredArr.push( Math.pow(posArr[p], 2) );
              p++;
          }
  
      }
      
      return squaredArr;
  }