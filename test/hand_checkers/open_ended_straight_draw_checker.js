var expect    = require("chai").expect;
var straight_checker = require("../../app/hand_checkers/straight_checker");
var CARDS = require("../factories/card_list_factory");
var vals = require("../../app/cards/card_values");
var CARD = require("../../app/cards/card_utils");

describe("Open Ended Straight Draw Checker", function() {

    tests = [
        { name: "returns null for empty hand",             cards: CARDS.EmptyCardList(),                      expected: null },
        { name: "returns null for single card",            cards: CARDS.OneCard(),                            expected: null },
        { name: "returns null for two aces",               cards: CARDS.Pair(vals.CARD_VALUES.ACE),           expected: null },
        { name: "returns null for two aces and two kings", cards: CARDS.TwoPairs(),                           expected: null },
        { name: "returns null for trip aces",              cards: CARDS.Trips(),                              expected: null },
        { name: "returns null for quad aces",              cards: CARDS.Quads(),                              expected: null },
        { name: "returns JACK for straight",               cards: CARDS.Straight(),                           expected: vals.CARD_VALUES.JACK },
        { name: "returns FIVE for wheel",                  cards: CARDS.Straight(vals.CARD_VALUES.SMALL_ACE), expected: vals.CARD_VALUES.FIVE },
        { name: "returns ACE  for broadway",               cards: CARDS.Straight(vals.CARD_VALUES.TEN),       expected: vals.CARD_VALUES.ACE },
        { name: "returns null for flush",                  cards: CARDS.Flush(),                              expected: null },
    ];

    tests.forEach(test => {
        testGetOpenEndedStraightDrawWithCards(test);
    });
});

function testGetOpenEndedStraightDrawWithCards(test) {
    it(test.name, function() {
        CARD.printMany(test.cards);
        straight = open_ended_straight_draw_checker.getOpenEndedStraightDraw(test.cards);
        expect(straight).to.equal(test.expected);
    });
}