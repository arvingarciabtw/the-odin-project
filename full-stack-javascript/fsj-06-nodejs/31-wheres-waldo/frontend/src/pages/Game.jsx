import styles from '../styles/Game.module.css';
import Description from '../components/Description';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../components/Modal';

function Game() {
  const [boxStyle, setBoxStyle] = useState({});
  const [open, setOpen] = useState(false);

  function handleClick(e) {
    console.log(e.pageX - 20, e.pageY - 20);
    // if no x/y coords
    setBoxStyle({
      borderColor: 'red',
      left: `${e.pageX - 20}px`,
      top: `${e.pageY - 20}px`,
    });
  }

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <main className={styles.game}>
      <Description
        title="Catch them!"
        description="Find the three Pokémon indicated. Go on and catch them!"
      />
      <div className={styles.featuresContainer}>
        <p className={styles.time}>04:20</p>
        <div className={styles.imgsPokemon}>
          <img src="/charmander.png" alt="" />
          <img src="/minun.png" alt="" />
          <img src="/roselia.png" alt="" />
        </div>
        <button onClick={handleOpen}>Give Up</button>
      </div>
      <div className={styles.redBox} style={boxStyle}></div>
      <img
        src="/pokemon-wheres-waldo.webp"
        alt="Pokemon Where's Waldo version"
        className={styles.imgPokemon}
        onClick={handleClick}
      />
      <Modal isOpen={open} onClose={handleClose}>
        <>
          <h2>Give Up?</h2>
          <p
            style={{
              marginTop: '-0.5rem',
              color: 'var(--gray)',
            }}
          >
            Are you sure you want to give up? Those Pokémon need to be found!
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
            }}
          >
            <button onClick={handleClose}>Go Back</button>
            <Link to="/">
              <button>Give Up</button>
            </Link>
          </div>
        </>
      </Modal>
    </main>
  );
}

export default Game;
