class TicTacToe {
    constructor() {
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this.playerSymbol = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === null) {
            this.matrix[rowIndex][columnIndex] = this.playerSymbol;
            this.playerSymbol = (this.playerSymbol === 'x') ? 'o': 'x';
        };
    }

    isFinished() {
        return !!(this.getWinner() || this.noMoreTurns());
    }

    getWinner() {
        let winner = null;
        if (this.matrix[0][0] === this.matrix[0][1] && this.matrix[0][0] === this.matrix[0][2]) 
            winner = this.matrix[0][0];
        if (this.matrix[1][0] === this.matrix[1][1] && this.matrix[1][0] === this.matrix[1][2]) 
            winner = this.matrix[1][0];
        if (this.matrix[2][0] === this.matrix[2][1] && this.matrix[2][0] === this.matrix[2][2]) 
            winner = this.matrix[2][0];
        if (this.matrix[0][0] === this.matrix[1][0] && this.matrix[0][0] === this.matrix[2][0]) 
            winner = this.matrix[0][0];
        if (this.matrix[0][1] === this.matrix[1][1] && this.matrix[0][1] === this.matrix[2][1]) 
            winner = this.matrix[0][1];
        if (this.matrix[0][2] === this.matrix[1][2] && this.matrix[0][2] === this.matrix[2][2]) 
            winner = this.matrix[0][2];
        if (this.matrix[0][0] === this.matrix[1][1] && this.matrix[0][0] === this.matrix[2][2]) 
            winner = this.matrix[1][1];
        if (this.matrix[0][2] === this.matrix[1][1] && this.matrix[0][2] === this.matrix[2][0]) 
            winner = this.matrix[1][1];
        return winner;
    }

    noMoreTurns() {
        for (let row of this.matrix) {
            for (let symbol of row){
                if (symbol === null)
                    return false;
            };
        };
        return true;
    }

    isDraw() {
        return (this.noMoreTurns() && !this.getWinner());
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
