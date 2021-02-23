
function getPair(sortedCards) {
    for (let i = 1; i < sortedCards.length; i++) {
        const card = sortedCards[i];
        const prev = sortedCards[i - 1]
        if (card.value === prev.value ) {
            return card.value;
        }
    }
    return null;
}

exports.getPair = getPair;
