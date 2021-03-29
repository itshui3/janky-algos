interface ranking {
    [key: string]: number
}

function arrayRankTransform(arr: number[]): number[] {

    const sortedArr = arr.slice().sort((a, b) => a-b);

    let rank = 1;
    let rankAccess: ranking = {}
    
    for (let i = 0; i < sortedArr.length; i++) {
        if (!i) {
            rankAccess[sortedArr[i]] = rank
        } else {
            if (sortedArr[i] > sortedArr[i-1]) {
                rank++
            }
            
            rankAccess[sortedArr[i]] = rank
        }
    }
    
    return arr.map(num => {
        return rankAccess[num]
    })
};