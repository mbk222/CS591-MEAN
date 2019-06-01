// Mehmet Bulut Kurt
// PS2 PR1

function *getfibs(n){
    let a = 1;
    let b = 1;
    if (n == 0) { yield 0;}
    else if (n == 1) { yield 0; yield 1;  }
    else if (n  == 2) {yield 0; yield 1; yield 1;}
    else {
        yield 0; yield 1; yield 1;
        for (i=4;i<=n;i++) {
            a = a + b;
            b = a - b;
            yield a;
        }
    }

}

function *getnextfib(fibs) {
    let len = 0;
    let last = [];
    while (fibs.next().done != true) {
        len++;
    }
    if (len == 1) {
        yield 0;
    }
    else {
        let nextfib = getfibs(len + 1);
        for (a of nextfib) {
        }
        last.push(a);
        if ((last % 2) == 0) {
            // even
            yield last[0];
        } else {
            // odd
            let nextevenfib = getfibs(len + 2);
            for (b of nextevenfib) {
            }
            last.pop();
            last.push(b);
            if ((last % 2) == 0) {
                // even
                yield last[0];
            } else {
                // odd
                let nnextevenfib = getfibs(len + 3);
                for (c of nnextevenfib) {
                }
                last.pop();
                last.push(c);
                yield last[0];
            }
        }
    }
}

EF1 = getnextfib((getfibs(0)));
console.log(EF1.next().value);
EF2 = getnextfib((getfibs(1)));
console.log(EF2.next().value);
EF3 = getnextfib((getfibs(4)));
console.log(EF3.next().value)
EF4 = getnextfib((getfibs(7)));
console.log(EF4.next().value)
EF5 = getnextfib((getfibs(10)));
console.log(EF5.next().value)

