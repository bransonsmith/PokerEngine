const { CARD_VALUES } = require("../cards/card_values");

function getFlush(sortedCards, length=5) {
    maxFlushVal = null

    for (let i = 0; i <= sortedCards.length - length; i++) {
        count = 1;
        for (let j = 1; j < length; j++) {
            const card = sortedCards[i];
            const next = sortedCards[i + j]

            if (card.suit === next.suit) {
                count += 1;
                if (count === length) {
                    maxFlushVal = next.value;
                }
            } else {
                count = 1;
            }
        }
    }
    return maxFlushVal;
}

exports.getFlush = getFlush;
