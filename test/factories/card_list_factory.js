const { CARD_VALUES } = require("../../app/cards/card_values");
const { CARD_SUITS } = require("../../app/cards/card_suits");

function EmptyCardList() {
    return [];
}

function OneAce(suit=CARD_SUITS.CLUBS) {
    return [ { suit: suit, value: CARD_VALUES.ACE } ];
}

function Pair(val=CARD_VALUES.ACE) {
    return [ { suit: CARD_SUITS.CLUBS, value: val }, { suit: CARD_SUITS.DIAMONDS, value: val } ];
}

function TwoPairs(val1=CARD_VALUES.ACE, val2=CARD_VALUES.KING) {
    return [ 
        { suit: CARD_SUITS.CLUBS, value: val1 },  { suit: CARD_SUITS.DIAMONDS, value: val1 },
        { suit: CARD_SUITS.HEARTS, value: val2 }, { suit: CARD_SUITS.SPADES, value: val2 }
     ];
}

function Trips(val=CARD_VALUES.ACE) {
    return [ { suit: CARD_SUITS.CLUBS, value: val }, { suit: CARD_SUITS.DIAMONDS, value: val },  { suit: CARD_SUITS.HEARTS, value: val }];
}

exports.EmptyCardList = EmptyCardList;
exports.OneAce = OneAce;
exports.Pair = Pair;
exports.TwoPairs = TwoPairs;
exports. Trips = Trips;
