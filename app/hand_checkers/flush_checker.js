var hand_utils = require("../hands/hand_utils");

function getHand(cardSuitDict, length=5) {

    topCards = null;
    Object.keys(cardSuitDict).forEach(suit => {
        if (cardSuitDict[suit].length >= length) {
            byValue = hand_utils.sortByValue(cardSuitDict[suit]);

            topCards = [];
            for (let i = 0; i < length; i++) {
                const card = byValue[i];
                topCards.push(card);
            }
        }
    });

    return topCards;
}

function compare(flushA, flushB) {
    for (let i = 0; i < flushA.length; i++) {
        const cardA = flushA[i];
        const cardB = flushB[i];
        if (cardA.value.num !== cardB.value.num) {
            return cardA.value.num - cardB.value.num;
        }
    }
    return 0;
}


exports.getHand = getHand;
exports.compare = compare;
