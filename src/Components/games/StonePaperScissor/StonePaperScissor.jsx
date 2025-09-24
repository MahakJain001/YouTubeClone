import React, { useState } from 'react';
import './StonePaperScissor.css';

const choices = [
  { name: 'Rock', emoji: '✊' },
  { name: 'Paper', emoji: '🖐️' },
  { name: 'Scissors', emoji: '✌️' }
];

const StonePaperScissor = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [score, setScore] = useState({ win: 0, lose: 0, draw: 0 });

  const handleClick = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(compChoice);
    determineWinner(choice.name, compChoice.name);
  };

  const determineWinner = (user, comp) => {
    if (user === comp) {
      setResult("It's a Draw");
      setScore(prev => ({ ...prev, draw: prev.draw + 1 }));
    } else if (
      (user === 'Rock' && comp === 'Scissors') ||
      (user === 'Paper' && comp === 'Rock') ||
      (user === 'Scissors' && comp === 'Paper')
    ) {
      setResult("You Win!");
      setScore(prev => ({ ...prev, win: prev.win + 1 }));
    } else {
      setResult("You Lose!");
      setScore(prev => ({ ...prev, lose: prev.lose + 1 }));
    }
  };

  return (
    <div className="rps-container">
      <h2>Choose:</h2>
      <div className="rps-options">
        {choices.map((choice, index) => (
          <div key={index} className="rps-option" onClick={() => handleClick(choice)}>
            <span className="emoji">{choice.emoji}</span>
            <p>{choice.name}</p>
          </div>
        ))}
      </div>

      <div className="result">
        {userChoice && computerChoice && (
          <>
            <h3>You: {userChoice.emoji} vs Computer: {computerChoice.emoji}</h3>
            <p className="outcome">{result}</p>
          </>
        )}
      </div>

      <div className="score">
        <p>Won = {score.win} | Lost = {score.lose} | Draw = {score.draw}</p>
      </div>
    </div>
  );
};

export default StonePaperScissor;
