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

    it('converts individual symbols', function () {
      expect(fromRoman('I')).toBe(1);
      expect(fromRoman('V')).toBe(5);
      expect(fromRoman('X')).toBe(10);
      expect(fromRoman('L')).toBe(50);
      expect(fromRoman('C')).toBe(100);
      expect(fromRoman('D')).toBe(500);
      expect(fromRoman('M')).toBe(1000);
    });

    it('converts same symbol, repeated', function () {
      expect(fromRoman('II')).toBe(2);
      expect(fromRoman('XXX')).toBe(30);
      expect(fromRoman('MMMM')).toBe(4000);
    });

    it('converts additive symbols', function () {
      expect(fromRoman('VI')).toBe(6);
      expect(fromRoman('VII')).toBe(7);
      expect(fromRoman('VIII')).toBe(8);
      expect(fromRoman('XI')).toBe(11);
      expect(fromRoman('XV')).toBe(15);
      expect(fromRoman('XVIII')).toBe(18);
      expect(fromRoman('MDCLXVI')).toBe(1666);
    });
  });
});
