import { useEffect, useState } from 'react';
import styles from '../styles/ChatPage.module.css';
import { Link } from 'react-router-dom';
import { api } from '../utils/api';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function RecipientMessage({ message }) {
  return (
    <div className={styles.recipientMessageContainer}>
      <div className={styles.recipientProfilePicture}></div>
      <div className={styles.recipientMessage}>
        <p>{message}</p>
      </div>
    </div>
  );
}

function SenderMessage({ message }) {
  return (
    <div className={styles.senderMessageContainer}>
      <div className={styles.senderMessage}>
        <p>{message}</p>
      </div>
      <div className={styles.senderProfilePicture}></div>
    </div>
  );
}

function ChatPage() {
  const { user } = useAuth();
  const { id } = useParams();

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState({});

  useEffect(() => {
    async function fetchMessages() {
      const response = await api.get(`/api/messages/${id}`);
      const data = await response.json();

      if (data.chat.first_user.id === user.id) {
        setRecipient(data.chat.second_user);
      } else {
        setRecipient(data.chat.first_user);
      }

      setMessages(data.messages);
    }

    fetchMessages();
  }, [id, user.id]);

  function handleChange(e) {
    setMessage(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/api/messages', {
      chatId: id,
      sentById: user.id,
      content: message,
    });
    const newMessage = await response.json();
    setMessages([...messages, newMessage]);
    setMessage('');
  }

  return (
    <>
      <main className={styles.chat}>
        <div className={styles.top}>
          <Link to="/" className={styles.goBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
          <p className={styles.recipientName}>
            {recipient.first_name} {recipient.last_name}
          </p>
        </div>
        <section className={styles.chatWindow}>
          {messages.map((message) =>
            message.sent_by_id === user.id ? (
              <SenderMessage key={message.id} message={message.content} />
            ) : (
              <RecipientMessage key={message.id} message={message.content} />
            ),
          )}
        </section>
        <form onSubmit={handleSubmit} className={styles.messageInput}>
          <input
            type="text"
            name="message"
            id="message"
            onChange={handleChange}
            value={message}
            required
          />
          <button>Send</button>
        </form>
      </main>
    </>
  );
}

export default ChatPage;
