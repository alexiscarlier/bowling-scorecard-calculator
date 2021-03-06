const Frame = require('../lib/frame.js')

describe("A frame of bowling", function(){

  describe('#total', function() {
    it("calculates a total for a normal role", function(){
       var frame = new Frame([2, 4]);
       expect(frame.total()).toEqual(6)
    });
  });

  describe('#_rollScore', function() {
    it("returns the sum of the rolls", function(){
      var frame = new Frame([2, 4]);
      expect(frame._frameScore()).toEqual(6);
    });
  });

  describe('#_bonusScore', function() {
    it("returns the sum of the rolls", function(){
      var frame = new Frame([2, 4]);
      expect(frame._bonusScore()).toEqual(0);
    });
  });

  describe('#_isStrike', function() {
    it("returns the sum of the rolls", function(){
      var frame = new Frame([10, 0]);
      expect(frame._isStrike()).toEqual(true);
    });
  });

  describe('#_isSpare', function() {
    it("returns the sum of the rolls", function(){
      var frame = new Frame([9, 1]);
      expect(frame._isSpare()).toEqual(true);
    });
  });

  describe('#_firstRoll', function() {
    it("returns the sum of the rolls", function(){
      var frame = new Frame([9, 1]);
      expect(frame._firstRoll()).toEqual(9);
    });
  });

  describe('#_spareBonus', function() {
    it("returns the sum of the rolls", function(){
      var frame = new Frame([9, 1]);
      var nextFrame = new Frame([9, 1]);
      expect(nextFrame._spareBonus()).toEqual(9);
    });
  });

});
