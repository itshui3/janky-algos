export function fourNumberSum(array: number[], targetSum: number) {
    // Write your code here.
      let sumCache: { [key: string] : [number, number][] } = {};
  // sum caching
      for (let i = 0; i < array.length-1; i++) {
          
          for (let j = i+1; j < array.length; j++) {
              let sum = array[i] + array[j];
              if ( sum in sumCache ) {
                  sumCache[sum].push([ array[i], array[j] ])
              } else {
                  sumCache[sum] = [[ array[i], array[j] ]]
              }
              
          }
      }
      
      let unorderedSums: Set<string> = new Set();
      
      for (let i = 0; i < array.length-1; i++) {
          
          for (let j = i+1; j < array.length; j++) {
              let sum = array[i] + array[j];
              let neededSum = targetSum - sum;
              
              if ( neededSum in sumCache ) {
  
                  sumCache[neededSum].forEach((c) => {
                      if (c[0] !== array[i] && c[0] !== array[j] && c[1] !== array[i] && c[1] !== array[j]){
  
                          let constituents = [c[0], c[1], array[i], array[j]];
                          let sortedConstituents = constituents.sort((a, b) => a-b);
  
                          unorderedSums.add( JSON.stringify(sortedConstituents) );
                      }
  
                  });
  
              }
              
          }
      }
      
      let unorderedArray = [...unorderedSums].map((sumString) => JSON.parse(sumString));
      if (unorderedArray.length < 2) return unorderedArray;
  
    return unorderedArray.sort((a, b) => {
  
          if (a[0] !== b[0]) return a[0] - b[0];
          if (a[1] !== b[1]) return a[1] - b[1];
          if (a[2] !== b[2]) return a[2] - b[2];
          return a[3] - b[3];
      
      });
      
  }
  
  /*
  don't cache nums
  cache sums
  
  sum: [num1, num2]
  */