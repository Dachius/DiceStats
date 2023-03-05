// frequency distribution over n s-sided dice.
export function distribution(n, s){
    var distribution = Array(n * s + 1).fill(0, n);

    for(var i = n; i < distribution.length; i++){
        for(var j = 0; j <= Math.floor((i - n) / s); j++){
            distribution[i] += Math.ceil(((j % 2 == 0) * 2 - 1) * choose(n, j) * choose(i - s * j - 1, n - 1));
        }
    }

    var map = new Map();
    for(var i = n; i < distribution.length; i++){
        map.set(i, distribution[i]);
    }

    return new Distribution(map, n, s);
}

// factorial using precalculated lookup table and memoization
var factorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800, 87178291200, 1307674368000, 20922789888000, 355687428096000, 6402373705728000];
export function f(n){
    if(n < factorials.length)
        return factorials[n];
    return factorials[n] = f(n - 1) * n;
}

// choose function
export function choose(n, k){
    return f(n) / (f(k) * f(n - k));
}

class Distribution {
    constructor(map, numDice, dieSize) {
        this.map = map;
        this.numDice = numDice;
        this.dieSize = dieSize;
        this.combinations = Math.ceil(Math.pow(dieSize, numDice));
    }
}