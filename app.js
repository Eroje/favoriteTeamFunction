const team = {
  _players: [
    {firstName: 'Roger', lastName: 'Miller', age: 32},
    {firstName: 'Johnny', lastName: 'Walker', age: 23},
    {firstName: 'James', lastName: 'Aurthor', age: 20}
  ],
  _games: [
    {opponent: 'Jets', teamPoints: 42, oppeonentPoints: 27},
    {opponent: 'Giants', teamPoints: 45, oppeonentPoints: 12},
    {opponent: 'Eagles', teamPoints: 31, oppeonentPoints: 50},
  ],
  get players () {
    return this._players;
  },
  get games () {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent, 
      teamPoints: newTeamPoints, 
      opponentPoints: newOpponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);

//console.log(team.players);
//console.log(team.games);
