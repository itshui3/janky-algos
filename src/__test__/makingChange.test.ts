


import { changeAlgo } from '../makingChange'

// numberOfWaysToMakeChange(n: number, denoms: number[])

test('it calculates the right number of ways to make change', () => {
    const assets = [
        {expected: 2, n: 6, denoms: [1, 5]},                //1
        {expected: 1, n: 0, denoms: [2, 3, 4, 7]},          //2
        {expected: 0, n: 9, denoms: [5]},                   //3
        {expected: 0, n: 7, denoms: [2, 4]},                //4
        {expected: 1, n: 4, denoms: [1, 5, 10, 25]},        //5
        {expected: 2, n: 5, denoms: [1, 5, 10, 25]},        //6
        {expected: 4, n: 10, denoms: [1, 5, 10, 25]},       //7
        {expected: 13, n: 25, denoms: [1, 5, 10, 25]},      //8
        {expected: 4, n: 12, denoms: [2, 3, 7]},            //9
        {expected: 3, n: 7, denoms: [2, 3, 4, 7]},          //10
    ]

    assets.forEach(({expected, n, denoms}) => {
        expect( changeAlgo(n, denoms) ).toBe(expected);
    })

})