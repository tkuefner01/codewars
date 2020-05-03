//Define board globally
let fields = [
	[ 2, 38 ],
	[ 7, 14 ],
	[ 8, 31 ],
	[ 15, 26 ],
	[ 16, 6 ],
	[ 21, 42 ],
	[ 28, 84 ],
	[ 36, 44 ],
	[ 46, 25 ],
	[ 49, 11 ],
	[ 51, 67 ],
	[ 62, 19 ],
	[ 64, 60 ],
	[ 71, 91 ],
	[ 74, 53 ],
	[ 78, 98 ],
	[ 87, 94 ],
	[ 89, 68 ],
	[ 92, 88 ],
	[ 95, 75 ],
	[ 99, 80 ]
];

let board = [];
for (i in fields) {
	board[fields[i][0]] = fields[i][1];
}

function SnakesLadders() {
	//initialize game instance
	this.stat = { p1: 0, p2: 0, turn: 1 };
	this.message = '';
	this.winner = 0;
}

SnakesLadders.prototype.play = function(die1, die2) {
	console.log(this.stat);
	this.message = '';
	this.winner = 0;
	// check if game already over
	if ((this.stat.p1 == 100) | (this.stat.p2 == 100)) {
		return 'Game over!';
	}

	//call draw method
	this.draw(die1 + die2, this.stat.turn);

	// if player reached end field return winner message
	if ((this.stat.p1 == 100) | (this.stat.p2 == 100)) {
		this.winner = this.stat.turn;
		//status = { p1: 0, p2: 0, turn: 1 };
		return 'Player ' + this.winner + ' Wins!';
	}

	//gib position aktueller spieler zurück
	this.message = 'Player ' + this.stat.turn + ' is on square ' + (this.stat.turn == 1 ? this.stat.p1 : this.stat.p2);
	//switch player only if eyes not equal
	if (die1 != die2) {
		this.stat.turn = this.stat.turn == 1 ? 2 : 1;
	}
	return this.message;
};

SnakesLadders.prototype.draw = function(eyes, player) {
	// calculate target field
	let target = player == 1 ? eyes + this.stat.p1 : eyes + this.stat.p2;

	// if target > 100 then bounce back
	if (target > 100) {
		target = 100 - (target - 100);
	}

	// if snake or ladder reached move player to target field
	if (board[target]) {
		target = board[target];
	}

	//move player position
	if (this.stat.turn == 1) {
		this.stat.p1 = target;
	} else {
		this.stat.p2 = target;
	}
	return true;
};
