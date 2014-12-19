var ROMAN_SYMBOLS = [
  {symbol: 'IV', value: 4},
  {symbol: 'IX', value: 9},
  {symbol: 'XL', value: 40},
  {symbol: 'XC', value: 90},
  {symbol: 'CD', value: 400},
  {symbol: 'CM', value: 900},

  {symbol: 'I', value: 1},
  {symbol: 'V', value: 5},
  {symbol: 'X', value: 10},
  {symbol: 'L', value: 50},
  {symbol: 'C', value: 100},
  {symbol: 'D', value: 500},
  {symbol: 'M', value: 1000}
];

exports.fromRoman = function (roman) {
  var total = 0;

  ROMAN_SYMBOLS.forEach(function (symbol) {
    var regex = new RegExp(symbol.symbol, 'g');
    var matches = roman.match(regex) || [];
    var count = matches.length;
    total += count * symbol.value;
    roman = roman.replace(regex, '');
  });
  return total;
};

exports.toRoman = function (number) {
  var sortedRomanSymbols = ROMAN_SYMBOLS.slice(0).sort(function (a, b) {
    return b.value - a.value;
  });

  var roman = '';

  var findHighestFittingSymbol = function (interimNumber) {
    for (var i = 0; i < sortedRomanSymbols.length; i++) {
      if (sortedRomanSymbols[i].value <= interimNumber) {
        return sortedRomanSymbols[i];
      }
    }
  };

  while(number !== 0) {
    var bestFit = findHighestFittingSymbol(number);
    roman += bestFit.symbol;
    number -= bestFit.value;
  }
  return roman;
};
