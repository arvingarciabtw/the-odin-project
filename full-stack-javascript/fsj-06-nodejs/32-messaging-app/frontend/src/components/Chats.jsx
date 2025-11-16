import styles from '../styles/Chats.module.css';
import { api } from '../utils/api';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

function Chats() {
  const { user } = useAuth();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await api.get(`/api/users?exclude=${user.id}`);
      const users = await response.json();

      setUsers(users);
    }

    fetchUsers();
  }, [user.id]);

  return (
    <section className={styles.chats}>
      {users.map((user) => (
        <Chat
          key={user.id}
          id={user.id}
          firstName={user.first_name}
          lastName={user.last_name}
        />
      ))}
    </section>
  );
}

function Chat({ id, firstName, lastName }) {
  return (
    <Link to={`/chats/${id}`} className={styles.chat}>
      <div className={styles.chatDetails}>
        <div className={styles.top}>
          <p>
            {firstName} {lastName}
          </p>
          <p className={styles.time}>02:30 AM</p>
        </div>
        <div className={styles.bottom}>
          <p className={styles.latestMessage}>
            An appropriately sized message here.
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Chats;
