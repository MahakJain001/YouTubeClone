import React, { useState, useEffect } from 'react';
import './TicTacToe.css';

const winningCombos = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

const TicTacToe = () => {
  const [cells, setCells] = useState(Array(9).fill(''));
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  // 👤 Player Move
  const handleClick = (index) => {
    if (cells[index] !== '' || isGameOver) return;

    const newCells = [...cells];
    newCells[index] = 'X';
    setCells(newCells);
  };

  // 🧠 Computer Move (Random)
  const computerMove = (newCells) => {
    const emptyIndexes = newCells.map((val, i) => val === '' ? i : null).filter(i => i !== null);
    if (emptyIndexes.length === 0) return;

    const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
    newCells[randomIndex] = 'O';
    setCells([...newCells]);
  };

  // ✅ Check for Winner
  const checkWinner = (board) => {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    if (board.every(cell => cell !== '')) return 'Draw';
    return null;
  };

  // 🔁 Watch Player Move & Trigger Computer
  useEffect(() => {
    const result = checkWinner(cells);
    if (result) {
      setWinner(result);
      setIsGameOver(true);
      return;
    }

    // Computer plays after player's move
    if (cells.filter(c => c !== '').length % 2 === 1 && !isGameOver) {
      setTimeout(() => {
        const tempCells = [...cells];
        computerMove(tempCells);
      }, 500);
    }
  }, [cells]);

  // 🔄 Reset
  const resetGame = () => {
    setCells(Array(9).fill(''));
    setWinner(null);
    setIsGameOver(false);
  };

  return (
    <div className="ttt-wrapper">
  <h2>Tic Tac Toe</h2>
  <div className="ttt-grid">
    {cells.map((cell, index) => (
      <div key={index} className="ttt-cell" onClick={() => handleClick(index)}>
        {cell}
      </div>
    ))}
  </div>
  {isGameOver && (
    <div>
      <h3>{winner === 'Draw' ? "It's a Draw!" : `${winner} Wins!`}</h3>
    </div>
  )}
  <button onClick={resetGame}>Reset</button>
</div>
  );
};

export default TicTacToe;
