function Frame(rolls) {
  this.MAXIMUM_SCORE = 10;
  this.rolls = rolls;
}

Frame.prototype.total = function(nextFrame, nextNextFrame) {
  return this._rollScore() + this._bonusScore(nextFrame, nextNextFrame);
}

Frame.prototype._rollScore = function() {
  return this.rolls[0] + this.rolls[1];
}

Frame.prototype._bonusScore = function(nextFrame, nextNextFrame) {
  return 0;
}

Frame.prototype._isStrike = function() {
  return this.rolls[0] === this.MAXIMUM_SCORE;
}
