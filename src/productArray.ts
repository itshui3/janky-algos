// brute force
export function bf_arrayOfProducts(array: number[]) {
// Write your code here.
    let prodArr: number[] = [];
    for (let i = 0; i < array.length; i++) {
        
        let product = 1
        for (let l = 0; l < array.length; l++) {
            if (l === i) continue;
            
            product *= array[l];
        }
        
        prodArr.push(product);
    }
    
return prodArr;
}
