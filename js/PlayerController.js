function PlayerController() {
	this.playersNum = 0
	this.players = [];
	this.currentIndex = 0;
}

PlayerController.prototype.newPlayer = function () {
	this.playersNum++
	var p = {
		name: 'Player'+this.playersNum,
		score: 0,
		scored: false
	}
	this.players.push(p);
}

PlayerController.prototype.addScore = function (value) {
	var p = this.getCurrentPlayer();
	p.scored = value ? true : false;
	
	if (value) p.score += value;
}

PlayerController.prototype.getCurrentPlayer = function () {
	 return this.players[this.currentIndex];
}

PlayerController.prototype.clearScores = function() {
	for (var i = 0; i < this.players.length; i++) {
		this.players[i].score = 0;
	}
}	
PlayerController.prototype.nextPlayer = function() {
	this.currentIndex = this.currentIndex == this.players.length-1 ? 0 : this.currentIndex+1;
	//console.log(this.players[0].name,this.players[0].score);
	//console.log(this.players[1].name,this.players[1].score);
	return this.currentIndex;
}