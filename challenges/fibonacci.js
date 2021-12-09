function fibonacci(n) {
    let a = 0;
    let b = 1;
    let ac = 1;
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        ac = a + b;
        b = a;
        a = ac;
        sum += ac;
        // console.log(ac);
    }
    if (n === 0) {
        sum = 1;
    }
    // sum = sum * 4;
    console.log(sum);
}

fibonacci(4);

function perimeter(n) {
    const arr = [0, 1];
    for (let i = 0; i < n; i++) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    }
    let sum = arr.reduce((acc, current) => acc + current);
    return 4 * sum;
}

// console.log(perimeter(0));