import "../styles/Instructions.css"
import { useState } from "react"

function Score({ scoreType, scores }) {

  return (
    <>
    {scoreType === "current" ? (
      <p className="current-score-label">Current score: <span className="current-score">{scores.currentScore}</span></p>
    ) : (
      <p className="best-score-label">Best score: <span className="best-score">{scores.bestScore}</span></p> 
    )}
    </>
  );
}

function Instructions({ scores }) {
  return (
    <div className="container-instructions">
      <p className="instructions">To play this Hearthstone-inspired memory card game, simply keep selecting unique cards for each round. If you select a card that you've chosen previously, then you start over. To win, you must keep selecting unique cards for each round until you reach a score of 12!</p>
      <div className="container-scores">
        <Score scoreType="current" scores={scores}/>
        <Score scoreType="best" scores={scores}/>
      </div>
    </div>
  );
}

export default Instructions;
