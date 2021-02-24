const CARD_SUITS = {
    CLUBS:    { char: 'c', unicode: '\u2663', num: 1, str: 'Clubs'    },
    DIAMONDS: { char: 'd', unicode: '\u2666', num: 2, str: 'Diamonds' },
    HEARTS:   { char: 'h', unicode: '\u2665', num: 3, str: 'Hearts'   },
    SPADES:   { char: 's', unicode: '\u2660', num: 4, str: 'Spades'   },
}

function getSuitByChar(c) {
    switch (c) {
        case 'c': return CARD_SUITS.CLUBS;
        case 'd': return CARD_SUITS.DIAMONDS;
        case 'h': return CARD_SUITS.HEARTS;
        case 's': return CARD_SUITS.SPADES;
        default: return null;
    }
}

exports.CARD_SUITS = CARD_SUITS;
exports.getSuitByChar = getSuitByChar;