var card_utils = require("../../app/cards/card_utils");
var expect = require("chai").expect;

function checkHandGivenCards(test, getHand, cardDict) {
    it(test.name, function() {
        console.log();
        hand = getHand(cardDict);
        card_utils.printMany(test.cards, ' In:');
        card_utils.printMany(hand, 'Out:');
        card_utils.printMany(test.expected, 'Exp:');
        expect(hand).to.eql(test.expected);
    });
}

exports.checkHandGivenCards = checkHandGivenCards;