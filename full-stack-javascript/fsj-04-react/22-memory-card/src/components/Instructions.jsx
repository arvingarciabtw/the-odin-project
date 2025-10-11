import "../styles/Instructions.css"

function Score({ scoreType }) {
  const isCurrent = scoreType === "current"

  return (
    <>
    {isCurrent ? (
      <p className="current-score-label">Current score: <span className="current-score">0</span></p>
    ) : (
      <p className="best-score-label">Best score: <span className="best-score">0</span></p> 
    )}
    </>
  );
}

function Instructions() {
  return (
    <div className="container-instructions">
      <p className="instructions">To play this Hearthstone-inspired memory card game, simply keep selecting unique cards for each round. If you select a card that you've chosen previously, then you start over. To win, you must keep selecting unique cards for each round until you reach a score of 12!</p>
      <div className="container-scores">
        <Score scoreType="current"/>
        <Score scoreType="best"/>
      </div>
    </div>
  );
}

export default Instructions;
