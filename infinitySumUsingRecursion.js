function sumToN(a) {
    
    return function ( b) {
        if (b==undefined) return a
        return sumToN ( a + b);
    }
}
console.log(
    sumToN(2)(4)(1)(12)( )
    
);