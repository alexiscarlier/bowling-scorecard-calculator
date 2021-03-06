function Frame(rolls) {
  this.MAXIMUM_SCORE = 10;
  this.rolls = rolls;
}

Frame.prototype.total = function(nextFrame, nextNextFrame) {
  return this._frameScore() + this._bonusScore(nextFrame, nextNextFrame);
}

Frame.prototype._frameScore = function() {
  const reducer = (scoreAccumulator, currentRollScore) => scoreAccumulator + currentRollScore;
  return this.rolls.reduce(reducer)
}

Frame.prototype._bonusScore = function(nextFrame, nextNextFrame) {
  return 0;
}

Frame.prototype._isStrike = function() {
  return this._firstRoll() === this.MAXIMUM_SCORE;
}

Frame.prototype._isSpare = function() {
  return this._frameScore() === this.MAXIMUM_SCORE;
}

Frame.prototype._firstRoll = function() {
  return this.rolls[0];
}

Frame.prototype._spareBonus = function() {
  return this._firstRoll();
}

module.exports = Frame;
