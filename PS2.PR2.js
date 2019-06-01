// Mehmet Bulut Kurt
// PS2 PR2

function *sentencesplit(str) {
    split = str.split(' ');
    for (i=0;i<split.length;i++) {
        yield split[i];
    }
}

sen = "All I know is something like a bird within her sang";
iterator = sentencesplit(sen);

for (x of iterator) {
    console.log(x);
}
