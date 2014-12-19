var RomanNumerals = require('./roman-numerals');

describe('RomanNumerals', function () {
  it('is an object', function () {
    expect(typeof RomanNumerals).toBe('object');
  });
  
  it('has a function property toRoman', function () {
    expect(typeof RomanNumerals.toRoman).toBe('function');
  });

  it('has a function property fromRoman', function () {
    expect(typeof RomanNumerals.fromRoman).toBe('function');
  });
});
