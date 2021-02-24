var expect = require("chai").expect;
var flush_checker = require("../../app/hand_checkers/flush_checker");
var CARDS = require("../factories/card_list_factory");
var vals = require("../../app/cards/card_values");
var CARD = require("../../app/cards/card");

describe("Flush Checker", function() {

    tests = [
        { name: "returns null for empty hand",             cards: CARDS.EmptyCardList(),                      expected: null },
        { name: "returns null for single card",            cards: CARDS.OneCard(),                            expected: null },
        { name: "returns null for two aces",               cards: CARDS.Pair(vals.CARD_VALUES.ACE),           expected: null },
        { name: "returns null for two aces and two kings", cards: CARDS.TwoPairs(),                           expected: null },
        { name: "returns null for trip aces",              cards: CARDS.Trips(),                              expected: null },
        { name: "returns null for quad aces",              cards: CARDS.Quads(),                              expected: null },
        { name: "returns null for straight",               cards: CARDS.Straight(),                           expected: null },
        { name: "returns null for wheel",                  cards: CARDS.Straight(vals.CARD_VALUES.SMALL_ACE), expected: null },
        { name: "returns null for broadway",               cards: CARDS.Straight(vals.CARD_VALUES.TEN),       expected: null },
        { name: "returns EIGHT for flush ending in 8",     cards: CARDS.Flush(vals.CARD_VALUES.EIGHT),        expected: vals.CARD_VALUES.EIGHT },
        { name: "returns ACE for flush ending in A",       cards: CARDS.Flush(vals.CARD_VALUES.ACE),          expected: vals.CARD_VALUES.ACE },
    ];

    tests.forEach(test => {
        testGetFlushWithCards(test);
    });
});

function testGetFlushWithCards(test) {
    it(test.name, function() {
        CARD.printMany(test.cards);
        straight = flush_checker.getFlush(test.cards);
        expect(straight).to.equal(test.expected);
    });
}