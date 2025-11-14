import styles from '../styles/Game.module.css';
import Description from '../components/Description';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/api.js';

function Game() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [openWin, setOpenWin] = useState(false);
  const [boxStyle, setBoxStyle] = useState({});
  const [found, setFound] = useState({
    charmander: false,
    minun: false,
    roselia: false,
  });
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [name, setName] = useState('');

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  }

  async function handleClick(e) {
    const response = await api.post('/api/coordinates', {
      x: e.pageX - 20,
      y: e.pageY - 20,
    });

    const coordinates = await response.json();

    if (coordinates.isCorrect) {
      if (coordinates.isCharmander) {
        setFound((prevState) => ({ ...prevState, charmander: true }));
        setBoxStyle({
          borderColor: 'transparent',
        });
      }

      if (coordinates.isMinun) {
        setFound((prevState) => ({ ...prevState, minun: true }));
        setBoxStyle({
          borderColor: 'transparent',
        });
      }

      if (coordinates.isRoselia) {
        setFound((prevState) => ({ ...prevState, roselia: true }));
        setBoxStyle({
          borderColor: 'transparent',
        });
      }
    } else {
      setBoxStyle({
        borderColor: 'red',
        left: `${e.pageX - 20}px`,
        top: `${e.pageY - 20}px`,
      });
    }
  }

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (found.charmander && found.minun && found.roselia) {
      setIsRunning(false);
      setOpenWin(true);
    }
  }, [found, time]);

  function handleCloseWin() {
    setOpenWin(false);
  }

  function handleName(e) {
    setName(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post('/api/users', { name, time });

    navigate('/');
  }

  return (
    <main className={styles.game}>
      <Description
        title="Catch them!"
        description="Find the three Pokémon indicated. Go on and catch them!"
      />
      <div className={styles.featuresContainer}>
        <p className={styles.time}>{formatTime(time)}</p>
        <div className={styles.imgsPokemon}>
          <img src="/charmander.png" alt="" />
          <img src="/minun.png" alt="" />
          <img src="/roselia.png" alt="" />
        </div>
        <button onClick={handleOpen}>Give Up</button>
      </div>
      <div className={styles.redBox} style={boxStyle}></div>
      <div
        className={styles.charmander}
        style={{ display: found.charmander ? 'block' : 'none' }}
      ></div>
      <div
        className={styles.minun}
        style={{ display: found.minun ? 'block' : 'none' }}
      ></div>
      <div
        className={styles.roselia}
        style={{ display: found.roselia ? 'block' : 'none' }}
      ></div>
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
      <Modal isOpen={openWin} onClose={handleCloseWin}>
        <>
          <h2>You caught them all!</h2>
          <p
            style={{
              marginTop: '-0.5rem',
              color: 'var(--gray)',
            }}
          >
            You found them in {formatTime(time)}! Feel free to enter your name
            below to include your time in the leaderboard.
          </p>
          <form
            style={{
              display: 'flex',
              gap: '1rem',
            }}
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name here"
              onChange={handleName}
              required
            />
            <div
              style={{
                display: 'flex',
                gap: '1rem',
              }}
            >
              <Link to="/">
                <button type="button">Go to Home</button>
              </Link>
              <button type="submit">Submit</button>
            </div>
          </form>
        </>
      </Modal>
    </main>
  );
}

export default Game;
