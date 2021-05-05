
export function guessResult(arr: number[], num: number) {
    // brute-force
    if (num > arr.length) return null;
    if (num < 1) return null;

    let result = -Infinity;

    let sumWindows = Array.from(arr).map(_ => 0);

    for (let i = arr.length-1; i > -1; i--) {
        let summation = 0;
        summation += arr[i];

        if (i < arr.length-1) summation += sumWindows[i+1];
        if (i+num < arr.length) summation = summation - arr[i+num];

        sumWindows[i] = summation;

        if (sumWindows[i] > result) result = sumWindows[i];
    }

    return result;
}
