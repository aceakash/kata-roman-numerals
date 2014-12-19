var RomanNumerals = require('./roman-numerals');

describe('RomanNumerals', function () {
  it('is an object', function () {
    expect(typeof RomanNumerals).toBe('object');
  });

  describe('fromRoman', function () {
    var fromRoman = RomanNumerals.fromRoman;

    it('is a function property of RomanNumerals', function () {
      expect(typeof fromRoman).toBe('function');
    });

    describe('Symbols', function () {
      it('converts I to 1', function () {
        expect(fromRoman('I')).toBe(1);
      });

      it('converts V to 5', function () {
        expect(fromRoman('V')).toBe(5);
      });

      it('converts X to 10', function () {
        expect(fromRoman('X')).toBe(10);
      });

      it('converts L to 50', function () {
        expect(fromRoman('L')).toBe(50);
      });

      it('converts C to 100', function () {
        expect(fromRoman('C')).toBe(100);
      });

      it('converts D to 500', function () {
        expect(fromRoman('D')).toBe(500);
      });

      it('converts M to 500', function () {
        expect(fromRoman('M')).toBe(1000);
      });
    });

    describe('same symbol, repeated', function () {
      it('converts II to 2', function () {
        expect(fromRoman('II')).toBe(2);
      });

      it('converts XX to 20', function () {
        expect(fromRoman('XX')).toBe(20);
      });

      it('converts MM to 2000', function () {
        expect(fromRoman('MM')).toBe(2000);
      });
    });
  });
});
