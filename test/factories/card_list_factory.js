const { CARD_VALUES } = require("../../app/cards/card_values");
const { CARD_SUITS } = require("../../app/cards/card_suits");

function EmptyCardList() {
    return [];
}

function OneCard(val=CARD_VALUES.ACE, suit=CARD_SUITS.CLUBS) {
    return [ { suit: suit, value: val } ];
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

function Quads(val=CARD_VALUES.ACE) {
    return [ { suit: CARD_SUITS.CLUBS, value: val },  { suit: CARD_SUITS.DIAMONDS, value: val },
             { suit: CARD_SUITS.HEARTS, value: val }, { suit: CARD_SUITS.SPADES,  value: val }];
}

function Straight(numCards=5, startVal=CARD_VALUES.SEVEN) {
    cards = [
        { suit: CARD_SUITS.DIAMONDS, value: CARD_VALUES.ACE },
        { suit: CARD_SUITS.HEARTS  , value: CARD_VALUES.TWO },
        { suit: CARD_SUITS.SPADES  , value: CARD_VALUES.THREE },
        { suit: CARD_SUITS.CLUBS   , value: CARD_VALUES.FOUR },
        { suit: CARD_SUITS.DIAMONDS, value: CARD_VALUES.FIVE },
        { suit: CARD_SUITS.HEARTS  , value: CARD_VALUES.SIX },
        { suit: CARD_SUITS.SPADES  , value: CARD_VALUES.SEVEN },
        { suit: CARD_SUITS.CLUBS   , value: CARD_VALUES.EIGHT },
        { suit: CARD_SUITS.DIAMONDS, value: CARD_VALUES.NINE },
        { suit: CARD_SUITS.HEARTS  , value: CARD_VALUES.TEN },
        { suit: CARD_SUITS.SPADES  , value: CARD_VALUES.JACK },
        { suit: CARD_SUITS.CLUBS   , value: CARD_VALUES.QUEEN },
        { suit: CARD_SUITS.DIAMONDS, value: CARD_VALUES.KING },
        { suit: CARD_SUITS.HEARTS  , value: CARD_VALUES.ACE },
    ];
    return cards.slice(startVal.num - 1, startVal.num - 1 + numCards);
}

function Flush(numCards=5, suit=CARD_SUITS.DIAMONDS, startVal=CARD_VALUES.TWO) {
    cards = [
        { suit: suit, value: CARD_VALUES.ACE },
        { suit: suit, value: CARD_VALUES.TWO },
        { suit: suit, value: CARD_VALUES.THREE },
        { suit: suit, value: CARD_VALUES.FOUR },
        { suit: suit, value: CARD_VALUES.FIVE },
        { suit: suit, value: CARD_VALUES.SIX },
        { suit: suit, value: CARD_VALUES.SEVEN },
        { suit: suit, value: CARD_VALUES.EIGHT },
        { suit: suit, value: CARD_VALUES.NINE },
        { suit: suit, value: CARD_VALUES.TEN },
        { suit: suit, value: CARD_VALUES.JACK },
        { suit: suit, value: CARD_VALUES.QUEEN },
        { suit: suit, value: CARD_VALUES.KING },
        { suit: suit, value: CARD_VALUES.ACE },
    ];
    return cards.slice(startVal.num - 1, startVal.num - 1 + numCards);
}

exports.EmptyCardList = EmptyCardList;
exports.OneCard = OneCard;
exports.Pair = Pair;
exports.TwoPairs = TwoPairs;
exports.Trips = Trips;
exports.Quads = Quads;
exports.Straight = Straight;
exports.Flush = Flush;
