// frequency distribution over n s-sided dice.
export function distribution(numDice, dieSize){
    var n = BigInt(numDice), s = BigInt(dieSize);

    var distribution = Array(numDice * dieSize + 1).fill(0n, numDice);

    for(var i = n; i < BigInt(distribution.length); i++){
        for(var j = 0n; j <= ((i - n) / s); j++){
            distribution[i] += (BigInt(j % 2n == 0n) * 2n - 1n) * choose(n, j) * choose(i - s * j - 1n, n - 1n);
        }
    }

    var map = new Map();
    for(var i = n; i < distribution.length; i++){
        map.set(Number(i), distribution[i]);
    }

    return new Distribution(map, n, s);
}

// factorial using memoization
var factorials = [1n, 1n];
export function f(n){
    for(var i = BigInt(factorials.length); i < n + 1n; i++){
        factorials.push(factorials[i - 1n] * i);
    }
    
    return factorials[n];
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
        this.combinations = dieSize ** numDice;
    }
}