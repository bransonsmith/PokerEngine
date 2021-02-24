var expect    = require("chai").expect;
var pair_checker = require("../../app/hand_checkers/pair_checker");
var CARDS = require("../factories/card_list_factory");
var vals = require("../../app/cards/card_values");
var CARD = require("../../app/cards/card");

describe("Pair Checker", function() {

    tests = [
        { name: "returns null for empty hand",            cards: CARDS.EmptyCardList(),             expected: null },
        { name: "returns null for single card",           cards: CARDS.OneCard(),                    expected: null },
        { name: "returns ACE for two aces",               cards: CARDS.Pair(vals.CARD_VALUES.ACE),  expected: vals.CARD_VALUES.ACE },
        { name: "returns KING for two kings",             cards: CARDS.Pair(vals.CARD_VALUES.KING), expected: vals.CARD_VALUES.KING },
        { name: "returns ACE for two aces and two kings", cards: CARDS.TwoPairs(),                  expected: vals.CARD_VALUES.ACE },
        { name: "returns ACE for trip aces",              cards: CARDS.Trips(),                     expected: vals.CARD_VALUES.ACE },
        { name: "returns ACE for quad aces",              cards: CARDS.Quads(),                     expected: vals.CARD_VALUES.ACE },
        { name: "returns null for straight",              cards: CARDS.Straight(),                  expected: null },
        { name: "returns null for flush",                 cards: CARDS.Flush(),                     expected: null },
    ];

    tests.forEach(test => {
        testGetPairWithCards(test);
    });
});

function testGetPairWithCards(test) {
    it(test.name, function() {
        pair = pair_checker.getPair(test.cards);
        expect(pair).to.equal(test.expected);
        CARD.printMany(test.cards);
    });
}