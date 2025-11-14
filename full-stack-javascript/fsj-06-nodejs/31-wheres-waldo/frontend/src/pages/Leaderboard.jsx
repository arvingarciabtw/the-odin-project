import styles from '../styles/Leaderboard.module.css';
import Description from '../components/Description';
import { useState, useEffect } from 'react';
import { api } from '../utils/api.js';

function User({ rank, name, time }) {
  return (
    <div className={styles.user}>
      <p>{rank}</p>
      <p>{name}</p>
      <p>{time}</p>
    </div>
  );
}

function Leaderboard() {
  const [users, setUsers] = useState([]);

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  }

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await api.get('/api/users?sorted=true');
        const users = await response.json();

        setUsers(users);
      } catch (err) {
        throw new Error(err);
      }
    }
    getUsers();
  }, []);

  return (
    <main>
      <Description
        title="Leaderboard"
        description="Below is the list of trainers who caught all three Pokémon the fastest!"
      />
      <div className={styles.leaderboardHeader}>
        <p>Rank</p>
        <p>Name</p>
        <p>Time</p>
      </div>
      {users.map((user) => (
        <User
          key={user.id}
          rank={user.rank}
          name={user.name}
          time={formatTime(user.time)}
        />
      ))}
    </main>
  );
}

export default Leaderboard;
