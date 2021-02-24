const CARD_VALUES = {
    ACE:       { num: 14, char: 'A' },
    KING:      { num: 13, char: 'K' },
    QUEEN:     { num: 12, char: 'Q' },
    JACK:      { num: 11, char: 'J' },
    TEN:       { num: 10, char: 'T' },
    NINE:      { num: 9,  char: '9' },
    EIGHT:     { num: 8,  char: '8' },
    SEVEN:     { num: 7,  char: '7' },
    SIX:       { num: 6,  char: '6' },
    FIVE:      { num: 5,  char: '5' },
    FOUR:      { num: 4,  char: '4' },
    THREE:     { num: 3,  char: '3' },
    TWO:       { num: 2,  char: '2' },
    SMALL_ACE: { num: 1,  char: 'A' },
}

function getValueByChar(c) {
    switch (c) {
        case 'A': return CARD_VALUES.ACE;
        case 'K': return CARD_VALUES.KING;
        case 'Q': return CARD_VALUES.QUEEN;
        case 'J': return CARD_VALUES.JACK;
        case 'T': return CARD_VALUES.TEN;
        case '9': return CARD_VALUES.NINE;
        case '8': return CARD_VALUES.EIGHT;
        case '7': return CARD_VALUES.SEVEN;
        case '6': return CARD_VALUES.SIX;
        case '5': return CARD_VALUES.FIVE;
        case '4': return CARD_VALUES.FOUR;
        case '3': return CARD_VALUES.THREE;
        case '2': return CARD_VALUES.TWO;
    }
}

exports.CARD_VALUES = CARD_VALUES;
exports.getValueByChar = getValueByChar;