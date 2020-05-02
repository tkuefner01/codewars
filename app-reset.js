function SnakesLadders() {}
let fields = [
	[ 2, 38 ],
	[ 7, 14 ],
	[ 8, 31 ],
	[ 15, 26 ],
	[ 16, 5 ],
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
let status = { p1: 0, p2: 0, turn: 1 };
let board = [];
for (i in fields) {
	board[fields[i][0]] = fields[i][1];
}

SnakesLadders.prototype.play = function(die1, die2) {
	var message = '';
	// Prüfe ob Spiel vorbei
	if ((status.p1 == 100) | (status.p2 == 100)) {
		return 'Game over!';
	}

	//führe zug würfel 1 aus
	console.log('Zug 1 (' + die1 + ') mit Spieler ' + status.turn);
	this.draw(die1, status.turn);
	//führe zug würfel 2 aus
	console.log('Zug 2 (' + die2 + ') mit Spieler ' + status.turn);
	this.draw(die2, status.turn);

	// Ziel Erreicht? -> Sieg für den Spieler und Ausgabe + Ende
	if ((status.p1 == 100) | (status.p2 == 100)) {
		return 'Player ' + status.turn + ' Wins!';
	}

	//gib position aktueller spieler zurück
	message = 'Player ' + status.turn + ' is on square ' + (status.turn == 1 ? status.p1 : status.p2);
	console.log(message);
	//wechsle Spieler wenn Augen ungleich
	if (die1 != die2) {
		// wechsle spieler
		status.turn = status.turn == 1 ? 2 : 1;
	}
	return message;
};

SnakesLadders.prototype.draw = function(eyes, player) {
	// Berechne Summe aus aktueller Position des Spielers und Wurfzahl
	let target = player == 1 ? eyes + status.p1 : eyes + status.p2;

	// Ziel überschritten -> Bounce Back
	if (target > 100) {
		target = 100 - (target - 100);
	}

	// Leiter oder Schlange -> versetze Spieler auf Endpunkt von Leiter/Schlange
	if (board[target]) {
		target = board[target];
	}

	//setze Spieler auf neues Feld
	if (status.turn == 1) {
		status.p1 = target;
	} else {
		status.p2 = target;
	}
	return true;
};

//console.log(board);
