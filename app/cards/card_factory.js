var suits = require("./card_suits");
var values = require("./card_values");

function c(valueCharSuitChar) {
    return {
        suit: suits.getSuitByChar(valueCharSuitChar[1]),
        value: values.getValueByChar(valueCharSuitChar[0])
    }
}

exports.c = c;