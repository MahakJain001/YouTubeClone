import React, { useState, useEffect, useRef } from 'react';
import './SnakeGame.css';

const boardSize = 10;

const SnakeGame = () => {
  const [snake, setSnake] = useState([[0, 0]]);
  const [food, setFood] = useState([5, 5]);
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);

  const boardRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  useEffect(() => {
    const move = setInterval(() => {
      if (gameOver) return;

      const head = [...snake[0]];
      switch (direction) {
        case 'UP': head[0] -= 1; break;
        case 'DOWN': head[0] += 1; break;
        case 'LEFT': head[1] -= 1; break;
        case 'RIGHT': head[1] += 1; break;
        default: break;
      }

      // Check collision
      if (
        head[0] < 0 || head[0] >= boardSize ||
        head[1] < 0 || head[1] >= boardSize ||
        snake.some(seg => seg[0] === head[0] && seg[1] === head[1])
      ) {
        setGameOver(true);
        return;
      }

      const newSnake = [head, ...snake];
      if (head[0] === food[0] && head[1] === food[1]) {
        setFood([
          Math.floor(Math.random() * boardSize),
          Math.floor(Math.random() * boardSize)
        ]);
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    }, 250);

    return () => clearInterval(move);
  }, [snake, direction, food, gameOver]);

  const restartGame = () => {
    setSnake([[0, 0]]);
    setFood([5, 5]);
    setDirection('RIGHT');
    setGameOver(false);
  };

  return (
    <div className="snake-container">
      <h2>Snake Game 🐍</h2>
      {gameOver && <p className="game-over">Game Over! <button onClick={restartGame}>Restart</button></p>}

      <div className="board" ref={boardRef}>
        {[...Array(boardSize)].map((_, row) =>
          <div key={row} className="row">
            {[...Array(boardSize)].map((_, col) => {
              const isSnake = snake.some(s => s[0] === row && s[1] === col);
              const isFood = food[0] === row && food[1] === col;
              return <div
                key={col}
                className={`cell ${isSnake ? 'snake' : ''} ${isFood ? 'food' : ''}`}>
              </div>;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SnakeGame;
