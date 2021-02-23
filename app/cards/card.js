
function print(card) {
    console.log(toString(card));
}

function printMany(cards) {
    str = '\n           ';
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        str += toString(card) + ' ';
    }
    console.log(str);
}

function toString(card) {
    return `${card.value.char}${card.suit.unicode}`
}

exports.print = print;
exports.printMany = printMany;
exports.toString = toString;