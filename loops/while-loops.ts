function howManyTimesDividedByTwo(n: number):number{
    let count = 0
    while (n > 1) {
        n = n/2
        count++
    }
    console.log(count)
    //console.log(n)
    return n
}

howManyTimesDividedByTwo(1);
howManyTimesDividedByTwo(2);
howManyTimesDividedByTwo(33);
howManyTimesDividedByTwo(5679);

// 33
// 16
// 8
// 4
// 2
// 1

// 5679
// 2839
// 1419
// 709
// 354
// 177
// 88
// 44
// 22
// 11
// 5
// 2
// 1