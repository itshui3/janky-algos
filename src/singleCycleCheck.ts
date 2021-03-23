export function hasSingleCycle(array: number[]) {
    // Write your code here.
      
      let visited: number[] = [...Array(array.length)].map(_ => 0);
      
      let curIdx: number = 0;
      let traveled: number = 0;
      
      while (traveled < array.length) {
          
          // traverse & increment visited
          let traveler = array[curIdx];
          while (traveler !== 0) {
              
              if (traveler > 0) {
                  if (curIdx === array.length-1) {
                      curIdx = 0;
                      traveler -= 1;
                  } else {
                      curIdx += 1;
                      traveler -= 1;
                  }
              }
              
              if (traveler < 0) {
                  if (curIdx === 0) {
                      curIdx = array.length-1;
                      traveler += 1;
                  } else {
                      curIdx -= 1;
                      traveler += 1;
                  }
              }
              
          } // traveler while loop
          
          visited[curIdx]+=1
          traveled++
      } // traverse while loop
      
      return visited.reduce((prev, cur) => {
          if (cur !== 1) {
              return false
          } else {
              return prev
          }
      }, true);
  
  }