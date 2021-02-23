var expect    = require("chai").expect;
var pair_checker = require("../../app/hand_checkers/pair_checker");
var CARDS = require("../factories/card_list_factory");
var vals = require("../../app/cards/card_values");
var CARD = require("../../app/cards/card");

describe("Pair Checker", function() {
    it("returns null for empty hand", function() {
        cards = CARDS.EmptyCardList()
        pair = pair_checker.getPair(cards);
        expect(pair).to.be.null;
        CARD.printMany(cards);
    });
    it("returns null for single card", function() {
        cards = CARDS.OneAce()
        pair = pair_checker.getPair(cards);
        expect(pair).to.be.null;
        CARD.printMany(cards);
    });
    it("returns ACE for two aces", function() {
        cards = CARDS.Pair(vals.CARD_VALUES.ACE)
        pair = pair_checker.getPair(cards);
        expect(pair).to.equal(vals.CARD_VALUES.ACE);
        CARD.printMany(cards);
    });
    it("returns KING for two kings", function() {
        cards = CARDS.Pair(vals.CARD_VALUES.KING)
        pair = pair_checker.getPair(cards);
        expect(pair).to.equal(vals.CARD_VALUES.KING);
        CARD.printMany(cards);
    });
    it("returns ACE for two aces and two kings", function() {
        cards = CARDS.TwoPairs()
        pair = pair_checker.getPair(cards);
        expect(pair).to.equal(vals.CARD_VALUES.ACE);
        CARD.printMany(cards);
    });
    it("returns ACE for trip aces", function() {
        cards = CARDS.Trips()
        pair = pair_checker.getPair(cards);
        expect(pair).to.equal(vals.CARD_VALUES.ACE);
        CARD.printMany(cards);
    });
});