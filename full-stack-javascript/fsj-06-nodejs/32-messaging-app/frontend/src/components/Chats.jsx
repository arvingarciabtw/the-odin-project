import styles from '../styles/Chats.module.css';
import { api } from '../utils/api';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

function Chats() {
  const { user } = useAuth();

  const [chats, setChats] = useState([]);

  useEffect(() => {
    async function fetchChats() {
      const response = await api.get(`/api/users/${user.id}/chats`);
      const chats = await response.json();

      setChats(chats);
    }

    fetchChats();
  }, [user.id]);

  return (
    <section className={styles.chats}>
      {chats.map((chat) => {
        const otherUser =
          chat.first_user.id === user.id ? chat.second_user : chat.first_user;

        return <Chat key={chat.id} chat={chat} otherUser={otherUser} />;
      })}
    </section>
  );
}

function Chat({ chat, otherUser }) {
  return (
    <Link to={`/chats/${chat.id}`} className={styles.chat}>
      <div className={styles.chatDetails}>
        <div className={styles.top}>
          <p>
            {otherUser.first_name} {otherUser.last_name}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Chats;
