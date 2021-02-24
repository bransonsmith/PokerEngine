var flush_checker = require("../../app/hand_checkers/flush_checker");
var CARDS = require("../factories/card_list_factory");
var vals = require("../../app/cards/card_values");
var hand_utils = require("../../app/hands/hand_utils");
var test_base = require("./hand_checker_test_base");
var c = require("./../../app/cards/card_factory").c;

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
        { name: "returns EIGHT for flush ending in 8",     cards: CARDS.Flush(vals.CARD_VALUES.EIGHT),
            expected: [c('8d'), c('7d'), c('6d'), c('4d'), c('3d')]
        },
        { name: "returns ACE for flush ending in A",       cards: CARDS.Flush(vals.CARD_VALUES.ACE),
            expected: [c('Ad'), c('7d'), c('6d'), c('4d'), c('3d')]
        },
    ];

    tests.forEach(test => {
        test_base.checkHandGivenCards(test, flush_checker.getHand, hand_utils.listToSuitDict(test.cards));
    });
});
