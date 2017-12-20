function Frame(rolls) {
  this.MAXIMUM_SCORE = 10;
  this.rolls = rolls;
}

Frame.prototype.total = function(nextFrame, nextNextFrame) {
  return this._rollScore()
}

Frame.prototype._rollScore = function() {
  return this.rolls[0] + this.rolls[1];
}
