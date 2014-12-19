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
  return ROMAN_SYMBOLS[roman];
};

exports.toRoman = function () {

};
