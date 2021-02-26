import { numberOfWaysToMakeChange as changeAlgo } from '../makingChange';
// numberOfWaysToMakeChange(n: number, denoms: number[])
test('it calculates the right number of ways to make change', function () {
    var assets = [
        { expected: 2, n: 6, denoms: [1, 5] },
        { expected: 1, n: 0, denoms: [2, 3, 4, 7] },
        { expected: 0, n: 9, denoms: [5] },
        { expected: 0, n: 7, denoms: [2, 4] },
        { expected: 1, n: 4, denoms: [1, 5, 10, 25] },
        { expected: 2, n: 5, denoms: [1, 5, 10, 25] },
        { expected: 4, n: 10, denoms: [1, 5, 10, 25] },
        { expected: 13, n: 25, denoms: [1, 5, 10, 25] },
        { expected: 4, n: 12, denoms: [2, 3, 7] },
        { expected: 3, n: 7, denoms: [2, 3, 4, 7] },
    ];
    assets.forEach(function (_a) {
        var expected = _a.expected, n = _a.n, denoms = _a.denoms;
        expect(changeAlgo(n, denoms)).toBe(expected);
    });
});
