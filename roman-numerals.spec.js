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

    it('converts additive roman numerals', function () {
      expect(fromRoman('VI')).toBe(6);
      expect(fromRoman('VII')).toBe(7);
      expect(fromRoman('VIII')).toBe(8);
      expect(fromRoman('XI')).toBe(11);
      expect(fromRoman('XV')).toBe(15);
      expect(fromRoman('XVIII')).toBe(18);
      expect(fromRoman('MDCLXVI')).toBe(1666);
    });

    it('converts subtractive pairs like IV, IX etc', function () {
      expect(fromRoman('IV')).toBe(4);
      expect(fromRoman('IX')).toBe(9);
      expect(fromRoman('XL')).toBe(40);
      expect(fromRoman('XC')).toBe(90);
      expect(fromRoman('CD')).toBe(400);
      expect(fromRoman('CM')).toBe(900);
    });
    
    it('converts anything', function () {
      expect(fromRoman('XIV')).toBe(14);
      expect(fromRoman('XIX')).toBe(19);
      expect(fromRoman('XXIV')).toBe(24);
      expect(fromRoman('XCIV')).toBe(94);
      expect(fromRoman('CMXL')).toBe(940);
      expect(fromRoman('MDXLIV')).toBe(1544);
    });
  });

  describe('toRoman', function () {
    var toRoman = RomanNumerals.toRoman;

    it('converts to single symbols', function () {
      expect(toRoman(1)).toBe('I');
      expect(toRoman(5)).toBe('V');
      expect(toRoman(10)).toBe('X');
      expect(toRoman(50)).toBe('L');
      expect(toRoman(100)).toBe('C');
      expect(toRoman(500)).toBe('D');
      expect(toRoman(1000)).toBe('M');
    });

    it('converts to strings', function () {
      expect(toRoman(3)).toBe('III');
      expect(toRoman(4)).toBe('IV');
      expect(toRoman(8)).toBe('VIII');
      expect(toRoman(9)).toBe('IX');
      expect(toRoman(14)).toBe('XIV');
      expect(toRoman(18)).toBe('XVIII');
      expect(toRoman(19)).toBe('XIX');
      expect(toRoman(30)).toBe('XXX');
      expect(toRoman(940)).toBe('CMXL');
      expect(toRoman(1544)).toBe('MDXLIV');
      expect(toRoman(1666)).toBe('MDCLXVI');
    });
  });
});
