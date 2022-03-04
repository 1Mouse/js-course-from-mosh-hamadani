function calculate(discount,...prices){//rest parameter must be the last formal parameter
    const total=prices.reduce((a,b)=>a+b);
    return total*(1-discount);
}

console.log(calculate(0.1,20,30,50));