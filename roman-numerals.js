var ROMAN_SYMBOLS = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

exports.fromRoman = function (roman) {
  var symbols = roman.split('');
  var total = 0;

  for (var i = 0; i < symbols.length; i++) {
    var symbolValue = ROMAN_SYMBOLS[symbols[i]];
    var prevValue = i === 0 ? null : ROMAN_SYMBOLS[symbols[i - 1]];

    if (prevValue && prevValue < symbolValue) {
      total -= 2 * prevValue;
    }
      total += symbolValue;
  }
  return total;
};

exports.toRoman = function () {

};
