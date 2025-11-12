import styles from '../styles/Game.module.css';
import Description from '../components/Description';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Game() {
  const [boxStyle, setBoxStyle] = useState({});

  function handleClick(e) {
    setBoxStyle({
      borderColor: 'red',
      left: `${e.pageX - 20}px`,
      top: `${e.pageY - 20}px`,
    });
  }

  return (
    <main className={styles.game}>
      <Description
        title="Catch them!"
        description="Find the three Pokémon indicated. Go on and catch them!"
      />
      <Link to="/">
        <button>Give Up</button>
      </Link>
      <div className={styles.redBox} style={boxStyle}></div>
      <img
        src="/pokemon-wheres-waldo.webp"
        alt="Pokemon Where's Waldo version"
        className={styles.imgPokemon}
        onClick={handleClick}
      />
    </main>
  );
}

export default Game;
