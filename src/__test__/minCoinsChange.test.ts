
import { minNumberOfCoinsForChange } from '../minCoinsChange'

test ('it calculates min coins needed for change', () => {

    const expectations = [
        {
            inputs: {
                n: 7,
                denoms: [1, 5, 10]
            }, output: 3
        }, //.1
        {
            inputs: {
                n: 7,
                denoms: [1, 10, 5]
            }, output: 3
        }, //.2
        {
            inputs: {
                n: 7,
                denoms: [10, 1, 5]
            }, output: 3
        }, //.3
        {
            inputs: {
                n: 0,
                denoms: [1, 2, 3]
            }, output: 0
        }, //.4
        {
            inputs: {
                n: 3,
                denoms: [2, 1]
            }, output: 2
        }, //.5
        {
            inputs: {
                n: 4,
                denoms: [1, 5, 10]
            }, output: 4
        }, //.6
        {
            inputs: {
                n: 1,
                denoms: [1, 5, 10]
            }, output: 10
        }, //.7
        {
            inputs: {
                n: 11,
                denoms: [1, 5, 10]
            }, output: 2
        }, //.8
        {
            inputs: {
                n: 24,
                denoms: [1, 5, 10]
            }, output: 6
        }, //.9
        {
            inputs: {
                n: 25,
                denoms: [1, 5, 10]
            }, output: 3
        }, //.10
        {
            inputs: {
                n: 7,
                denoms: [2, 4]
            }, output: -1
        }, //.11
        {
            inputs: {
                n: 7,
                denoms: [3, 7]
            }, output: 1
        }, //.12
        {
            inputs: {
                n: 9,
                denoms: [3, 5]
            }, output: 3
        }, //.13
        {
            inputs: {
                n: 9,
                denoms: [3, 4, 5]
            }, output: 2
        }, //.14
        {
            inputs: {
                n: 135,
                denoms: [39, 45, 130, 40, 4, 1]
            }, output: 3
        }, //.15
        {
            inputs: {
                n: 135,
                denoms: [39, 45, 130, 40, 4, 1, 60, 75]
            }, output: 2
        }, //.16
        {
            inputs: {
                n: 10,
                denoms: [1, 3, 4]
            }, output: 3
        }, //.17
        
    ]

    expect( minNumberOfCoinsForChange(7, [1, 5, 10]) ).toBe(3)

    expectations.forEach((asset) => {
        expect( 
            minNumberOfCoinsForChange(asset.inputs.n, asset.inputs.denoms) 
            ). toBe(asset.output)
    })
})