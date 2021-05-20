export function phoneNumberMnemonics(phoneNumber: string) {
// Write your code here.
    let perms: string[] = [];
    
    permutate(0, '', phoneNumber, perms);
    
return perms;
}

function permutate(idx: number, cur_str: string, phoneNumber: string, perms: string[]) {
    let possible_letters = generateLetters(phoneNumber[idx]);
    for (let i = 0; i < possible_letters.length; i++) {
        let next_str = cur_str + possible_letters[i];
        if (idx+1 < phoneNumber.length) {
            permutate(idx+1, next_str, phoneNumber, perms);
        } else {
            perms.push(next_str);
        }
    }

}

function generateLetters(num: string) {
    
    switch(num) {
        case '0': 
            return ['0'];
            
        case '1':
            return ['1'];
            
        case '2': // abc
            return ['a', 'b', 'c'];

        case '3': // def
            return ['d', 'e', 'f'];

        case '4': // ghi
            return ['g', 'h', 'i'];
            
        case '5': // jkl
            return ['j', 'k', 'l'];

        case '6': // mno
            return ['m', 'n', 'o'];

        case '7': // pqrs
            return ['p', 'q', 'r', 's'];

        case '8': // tuv
            return ['t', 'u', 'v'];

        case '9': // wxyz
            return ['w', 'x', 'y', 'z'];

        default:
            throw new Error('number not recognized');
            break;
    }
}