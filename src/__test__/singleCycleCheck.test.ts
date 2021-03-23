import { hasSingleCycle } from '../singleCycleCheck';

test('it has a single cycle', () => {
    const inputs = [
        [2, 3, 1, -4, -4, 2],
        [2, 2, -1],
        [2, 2, 2],
        [1, 1, 1, 1, 1],
        [-1, 2, 2],
        [0, 1, 1, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 1, 1, 2],
        [3, 5, 6, -5, -2, -5, -12, -2, -1, 2, -6, 1, 1, 2, -5, 2],
        [3, 5, 5, -5, -2, -5, -12, -2, -1, 2, -6, 1, 1, 2, -5, 2],
        [1, 2, 3, 4, -2, 3, 7, 8, 1],
        [1, 2, 3, 4, -2, 3, 7, 8, -8],
        [1, 2, 3, 4, -2, 3, 7, 8, -26],
        [10, 11, -6, -23, -2, 3, 88, 908, -26],
        [10, 11, -6, -23, -2, 3, 88, 909, -26],
        [1, -1, 1, -1]
    ];

    const outputs = [
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        true,
        false,
        true,
        true,
        true,
        true,
        false,
        false
    ];

    for (let i = 0; i < inputs.length; i++) {
        expect(hasSingleCycle(inputs[i])).toEqual(outputs[i])
    };

});