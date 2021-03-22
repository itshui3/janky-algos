/*
given an array: [1, 2, 3, 4, 5, 6]
determine if pieces can be concatenated in some order to match: 
type A: [
1, 3, 2, 5, 4, 6
]

type B: [
    [1, 2, 3],
    [4, 5, 6]
]
*/

export const constructNumPerms = (array: number[], pieces: (number | number[])[]) => {
    let concatArr: number[] = [];

    let result = reBuildAndCompare(concatArr, pieces, array);

    console.log(result);
};

const reBuildAndCompare = (curArr: number[], pieces: (number | number[])[], compare: number[]) => {

    if (!pieces.length) {
        if (JSON.stringify(compare) === JSON.stringify(curArr)) {
            return true;
        } else {
            return false;
        }

    }

    for (let i = 0; i < pieces.length; i++) {
        let leftovers = pieces.slice(0, i).concat(pieces.slice(i+1));
        let nextArr = concatTwoParts(curArr, pieces[i]);
        console.log(nextArr)
        if(reBuildAndCompare(nextArr, leftovers, compare)) {
            return true;
        }
    }

    return false;

};

const concatTwoParts = (base: number[], build: (number | number[])) => {

    if (typeof build === 'number') {
        base = base.concat([build]);

    } else if (typeof build === 'object') {
        base = base.concat(build);

    };

    return base;
};