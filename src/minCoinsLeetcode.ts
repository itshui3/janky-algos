
function coinChange(coins: number[], amount: number): number {
    if (!amount) { return 0 }
    
//     for every coin there is a number of uses possible
//     for the last coin, it will either cover the amount or not
    let sortedCoins = [...coins].sort().reverse();
    let minUses: number = NaN;
    
    recurseCount(sortedCoins, amount, 0)
    
    function recurseCount(sortedcoins: number[], left: number, count: number) {

        let curCoin = sortedcoins[0];
        
        let maxCeil = Math.floor(left/curCoin); // ie. how many curCoins can we possibly fit
        
        if (!left && left % sortedcoins[0] === 0) {
            if (isNaN(minUses) || count < minUses) {
                minUses = count;
            }
            return
        }
                       
        if (sortedcoins.length === 1) {

            if (left % sortedcoins[0] === 0) {
                if (isNaN(minUses)) {
                    minUses = (left / sortedcoins[0]) + count;
                } else
                
                if ((left / sortedcoins[0]) + count < minUses) {
                    minUses = (left / sortedcoins[0]) + count;
                }
            }
            return
        }
        
        for (let i = 0; i < maxCeil + 1; i++) {
            console.log('next left', left - (i*curCoin));
            recurseCount(sortedcoins.slice(1), left - (i*curCoin), count + i)
        }
        
    }
    if (isNaN(minUses)) {
        return -1
    } else {
        return minUses;
    }

};

console.log( coinChange([1, 2, 5], 11) )