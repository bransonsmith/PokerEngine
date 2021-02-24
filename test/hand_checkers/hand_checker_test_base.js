var card_utils = require("../../app/cards/card_utils");
var expect = require("chai").expect;

function checkHandGivenCards(test, getHand, cardDict) {
    it(test.name, function() {
        hand = getHand(cardDict);
        expect(hand).to.eql(test.expected);
        console.log();
        card_utils.printMany(test.cards, ' In:');
        card_utils.printMany(hand, 'Out:');
        card_utils.printMany(test.expected, 'Exp:');
    });
}

exports.checkHandGivenCards = checkHandGivenCards;