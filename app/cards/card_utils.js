
function print(card) {
    console.log(toString(card));
}

function printMany(cards, prefix='') {
    str = '\033[40m\033[37m       ' + prefix + ' ';
    if (cards === null) { console.log(str + 'null'); return; }
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        str += toString(card) + ' \033[40m\033[37m';
    }
    console.log(str);
}

function toString(card) {
    str = `${card.value.char}${card.suit.unicode}`
    if (card.suit.char === 'd' || card.suit.char === 'h') {
        return '\033[47m\x1B[31m' + str;
    } else {
        return '\033[47m\033[30m' + str;
    }
}

function compareByValue(cardA, cardB) {
    return  cardB.value.num - cardA.value.num;
}

function compareBySuit(cardA, cardB) {
    return cardA.suit.num - cardB.suit.num;
}

exports.print = print;
exports.printMany = printMany;
exports.toString = toString;
exports.compareByValue = compareByValue;
exports.compareBySuit = compareBySuit;