function SnakesLadders() {
	let arr = [ [ 2, 38 ], [ 7, 14 ], [ 8, 31 ], [ 15, 26 ], [ 16, 5 ] ];
	let status = { p1: 0, p2: 0, turn: 1 };
	let board = [];
	for (i in arr) {
		board[arr[i][0]] = arr[i][1];
	}

	SnakesLadders.prototype.play = function(die1, die2) {
		let result = '';

		//berechne wurf1
		this.draw(die1, status['turn']);
		//berechne wurf2
		this.draw(die2, status['turn']);

		//switch player
		result = 'Player ' + status.turn + ' is on square '; //+ (status.turn==1)?status.p1:status.p2;
		console.log(status.turn == '1');
		console.log(status.p1);
		status.turn = 1 ? 2 : 1;
		console.log(result);

		return result;
	};

	SnakesLadders.prototype.draw = function(eyes, player) {
		switch (player) {
			case 1:
				console.log('player 1', status.p1);
				status.p1 += eyes;
				console.log('status p1 is now ' + status.p1);
				if (arr[status.p1]) {
					status['p1'] = arr[status['p1'][1]];
				}
				break;
			case 2:
				status.p2 += eyes;
				if (arr[status['p2']]) {
					status['p2'] = arr[status['p2'][1]];
				}
				break;
		}
		return true;
	};
}
