export function nonConstructibleChange(coins: number[]) {
    // Write your code here.
    if (!coins.length) return 1;
      
      const sortedCoins = coins.sort((a, b) => a-b);
      
      let change = 1;
      
      while (true) {
  // [0] check if change is constructible
  //	in other words, given a target change value
  //	and an array of coins, determine if it is constructible
          if (!constructChange(sortedCoins, change)) return change;
          change++
      }
  }
  
  function constructChange(coins: number[], target: number, acc: number = 0, cur: number = 0) {
      
      for (let i = cur; i < coins.length; i++) {
          if (acc + coins[i] > target) return false;
          
          if (acc + coins[i] === target) return true;
          
          if (acc + coins[i] < target) {
              if (constructChange(coins, target, acc+coins[i], i+1)) return true;
          }
      }
      
      return false;
  }