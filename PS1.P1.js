// Mehmet Bulut Kurt
// Problem Set 1, Problem 1

let arrange = (phrase) => {
    phrase = phrase.replace(/ /g,''); // in case of spaced inputs
    let order = ''; // ordered string
    let len = phrase.length;
    for (i=0;i<len;i++) {
        let bot = phrase[0]; // bot is the smallest char
        for (j=0;j < len-i;j++) {
            if (phrase.charAt(j) <= bot) {
                bot = phrase.charAt(j);
            }
        }
        order = order + bot;
        phrase = phrase.replace(bot, '');
        bot = phrase.charAt(0);
    }
    return order;
}

let text = 'supercalifragilisticexpialidocious';
console.log(arrange(text));
