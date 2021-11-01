let raisePower = function (base, exponent){
    let product = 1;
    for (let i = 1; i <= exponent; i++) {
        product *= base;
    }
    return product;
};

console.log(raisePower(2, 5)); // 32
console.log(raisePower(4, 3)); // 64
console.log(raisePower(10, 4)); // 10000
console.log(raisePower(7, 2)); // 49