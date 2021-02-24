
function print(card) {
    console.log(toString(card));
}

function printMany(cards, prefix='') {
    
    str = '       ' + prefix + ' ';
    if (!cards || cards === null) {
        str += cards;
    } else {
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            str += toString(card) + ' ';
        }
    }
    console.log(str);
}

function toString(card) {
    return `${card.value.char}${card.suit.unicode}`
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