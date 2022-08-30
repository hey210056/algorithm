function solution1(x) {
    let nums = [];
    let check = nums.toString().split('').reduce(((sum, value) => sum += value), 0);

    // return (x % check == 0) ? true : false;
    return (x + "").split('').reduce(((sum, value) => +sum + +value), 0);
}

function solution2(x) {
    let answer = true;
    let nums = Array.from(String(x)).map(Number).reduce((a, b) => a + b);
    return (x % nums === 0 ? answer : !answer);
}
