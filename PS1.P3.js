// Mehmet Bulut Kurt
// Problem Set 1, Problem 2

let cfragment = (string) => {
    string = string.replace(/c/gi, "c1")
    let A = string.split('c');
    for (i=0;i<A.length;i++) {
        A[i] = A[i].replace('1', 'c');
    }
    return A;
}

let areplace = (string) => {
    let modstring = string.replace(/a/gi, 'A');
    const object = {
        originalString: string,
        modifiedString: modstring,
        numberReplaced: (string.match(/a/g).length),
        length: string.length};
    return object
};

let execute = (string, func) => { return func(string); }

console.log(execute('supercalifragilisticexpialidocious', cfragment));
console.log(execute('supercalifragilisticexpialidocious', areplace));