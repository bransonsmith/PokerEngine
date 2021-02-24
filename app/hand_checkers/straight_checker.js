const { CARD_VALUES } = require("../cards/card_values");

function getStraight(sortedCards, length=5) {
    maxStraightVal = null
    foundAce = sortedCards.find(c => c.value.num === 14);
    if (foundAce) {
        sortedCards.push({suit: foundAce.suit, value: CARD_VALUES.SMALL_ACE});
    }

    // console.log();
    // console.log(sortedCards);

    for (let i = 0; i <= sortedCards.length - length; i++) {
        count = 1;
        for (let j = 1; j < length; j++) {
            const card = sortedCards[i];
            const next = sortedCards[i + j]
            // console.log('----');
            // console.log(card);
            // console.log(next);
            // console.log();
            if (card.value.num - next.value.num === count * -1) {
                count += 1;
                if (count === length) {
                    maxStraightVal = next.value;
                }
            } else {
                count = 1;
            }
        }
    }
    return maxStraightVal;
}

exports.getStraight = getStraight;
