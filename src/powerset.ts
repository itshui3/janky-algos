export function powerset(array: number[]) {
// Write your code here.
    let powerset: number[][] = [[]];
    // if array is of length, generate & push permutations
    if (0 < array.length) re_permuteSet(0, array, [], powerset);

return powerset;
}

function re_permuteSet(idx: number, array: number[], parent_set: number[], powerset: number[][]) {
// push parent.concat(cur_val)
    let cur_set = parent_set.concat([array[idx]]);
    powerset.push(cur_set);

    if (idx+1 < array.length) {
// [0]: add cur_idx
        re_permuteSet(idx+1, array, cur_set, powerset);
// [1]: exclude cur_idx
        re_permuteSet(idx+1, array, parent_set, powerset);
    }
}