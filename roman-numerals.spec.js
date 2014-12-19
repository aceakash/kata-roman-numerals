var RomanNumerals = require('./roman-numerals');

describe('RomanNumerals', function () {
  it('is an object', function () {
    expect(typeof RomanNumerals).toBe('object');
  });

  describe('fromRoman', function () {
    it('is a function property of RomanNumerals', function () {
      expect(typeof RomanNumerals.fromRoman).toBe('function');
    });

    describe('Symbols', function () {
      it('converts I to 1', function () {
        expect(RomanNumerals.fromRoman('I')).toBe(1);
      });

      it('converts V to 5', function () {
        expect(RomanNumerals.fromRoman('V')).toBe(5);
      });

      it('converts X to 10', function () {
        expect(RomanNumerals.fromRoman('X')).toBe(10);
      });

      it('converts L to 50', function () {
        expect(RomanNumerals.fromRoman('L')).toBe(50);
      });

      it('converts C to 100', function () {
        expect(RomanNumerals.fromRoman('C')).toBe(100);
      });

      it('converts D to 500', function () {
        expect(RomanNumerals.fromRoman('D')).toBe(500);
      });

      it('converts M to 500', function () {
        expect(RomanNumerals.fromRoman('M')).toBe(1000);
      });
    });
  });
});
