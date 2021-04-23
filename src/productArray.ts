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

export function arrayOfProducts(array: number[]) {
// Write your code here.
    let productsLeft: number[] = array.map(_ => 1);
    let productsRight: number[] = array.map(_ => 1);
    
    let runningProd = 1;
    for (let i = 0; i < array.length; i++) {
        productsLeft[i] = runningProd;
        runningProd *= array[i];
    }
    
    runningProd = 1;
    for (let i = array.length-1; i > -1; i--) {
        productsRight[i] = runningProd;
        runningProd *= array[i];
    }
    
    for (let i = 0; i < array.length; i++) {
        array[i] = productsLeft[i] * productsRight[i];
    }
    
return array;
}
/*
[5, 1, 4, 2]
product <-
[1, 5, 5, 20]
product ->
[8, 8, 2, 1]
*/