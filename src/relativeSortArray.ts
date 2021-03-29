interface keySig {
    [key: string]: number;
}

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    
    let arrKey: keySig = {};
    
    for (let i = 0; i < arr2.length; i++) {
        arrKey[arr2[i]] = i;
    }
    
    const nestedGrouping: number[][] = Array.from({length: arr2.length}, () => []);
    let sortedArr: number[] = [];
    
    arr1.forEach(item => {
        if (item in arrKey) {
            nestedGrouping[arrKey[item]].push(item);
            return;
        };
        
        // place into sortedArr
        if (!sortedArr.length) {
            sortedArr.push(item);
            return;
        }
        
        let i = 0;
        
        while (item > sortedArr[i]) {
            i++
        }
        
        if (i === sortedArr.length) {
            sortedArr.push(item)
        } else {
            sortedArr = sortedArr.slice(0, i).concat(item).concat(sortedArr.slice(i))
        }
        

    });
    
    let resultArr: number[] = [];
    for (let i = 0; i < nestedGrouping.length; i++) {
        resultArr = resultArr.concat(nestedGrouping[i]);
    }
    return resultArr.concat(sortedArr);

}