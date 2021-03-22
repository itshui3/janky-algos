import { constructNumPerms } from './constructNumPerms';

const numsArr = [1, 2, 3, 4, 5, 6];

const testPieces0 = [6, 5, 4, 3, 2, 1];
const testPieces1 = [[1, 2, 3], [4, 5, 6]];
const testPieces2 = [1, [2, 3, 4], 5, 6];

const test0 = constructNumPerms(numsArr, testPieces0);
const test1 = constructNumPerms(numsArr, testPieces1);
const test2 = constructNumPerms(numsArr, testPieces2);

console.log(test0);
console.log(test1);
console.log(test2);