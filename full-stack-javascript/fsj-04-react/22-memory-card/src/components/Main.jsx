import { useState } from "react"
import Instructions from "./Instructions"
import Cards from './Cards.jsx'

function Main() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  return (
    <main>
      <Instructions scores={{
        currentScore: currentScore,
        bestScore: bestScore
      }}/>
      <Cards scores={{
        currentScore: currentScore,
        bestScore: bestScore,
        setCurrentScore: setCurrentScore,
        setBestScore: setBestScore,
      }}/>
    </main>
  );
}

export default Main;
