function sortArrayByParityII(nums: number[]): number[] {
    let odds: number[] = [];
    let evens: number[] = [];
    
    nums.forEach((num) => {
        if (num % 2 === 0) {
            // is even
            evens.push(num)
        } else {
            // is odd
            odds.push(num)
        }
    });
    
    let e = 0;
    let o = 0;
    
    let result: number[] = [];
    
    for (let i = 0; i < nums.length; i++) {
        
        if (i % 2 === 0) {
            result.push(evens[e]);
            e++
        } else {
            result.push(odds[o]);
            o++
        }
        
    }
    
    return result;
};