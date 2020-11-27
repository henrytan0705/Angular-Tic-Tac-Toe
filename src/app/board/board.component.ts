import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares: string[];
  xIsNext: boolean;
  winner: string;

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = null;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(squareIdx: number) {
    if (this.winner) return;

    // if square is empty fill in square
    if (!this.squares[squareIdx]) {
      this.squares.splice(squareIdx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    // check to see if winner is found
    this.winner = this.calculateBoardWinner();
  }

  calculateBoardWinner() {
    const winningMoves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let moves of winningMoves) {
      const [a, b, c] = moves;
      // check if all three positions are not empty and have the same value
      if (
        this.squares[a] &&
        this.squares[a] == this.squares[b] &&
        this.squares[a] == this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
