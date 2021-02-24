var card_utils = require("../cards/card_utils");

function listToValueDict(cardList) {
    cardDict = {}
    cardList.forEach(card => {
        if (Object.keys(cardDict).includes(card.value.char)) {
            cardDict[card.value.char].push(card);
        } else {
            cardDict[card.value.char] = [];
            cardDict[card.value.char].push(card);
        }
    });
    return cardDict;
}

function listToSuitDict(cardList) {
    cardDict = { 'd': [], 'c': [], 'h': [], 's': [] }
    cardList.forEach(card => {
        cardDict[card.suit.char].push(card);
    });
    return cardDict;
}

function sortByValue(cardList) {
    cardList.sort((a, b) => card_utils.compareByValue(a, b));
    return cardList;
}
function sortBySuit(cardList) {
    cardList.sort((a, b) => card_utils.compareBySuit(a, b));
    return cardList;
}


exports.listToValueDict = listToValueDict;
exports.listToSuitDict = listToSuitDict;
exports.sortByValue = sortByValue;
exports.sortBySuit = sortBySuit;