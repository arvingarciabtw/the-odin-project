import { useState } from "react"

function Card({ card, scores, shuffleCards, tempArray, setTempArray }) {
  function handleClick() {
    shuffleCards();

    if (tempArray.includes(card)) {
      scores.setCurrentScore(0);
      setTempArray([]);
    } else {
      const newCurrentScore = scores.currentScore + 1;
      scores.setCurrentScore(newCurrentScore);
      
      setTempArray([...tempArray, card]);

      if (newCurrentScore > scores.bestScore) {
        scores.setBestScore(newCurrentScore);
      }
    }
  }

  return (
    <img 
      src={card.url}
      alt={card.name}
      className="card"
      onClick={handleClick}
    />
  );
}

export default Card;
