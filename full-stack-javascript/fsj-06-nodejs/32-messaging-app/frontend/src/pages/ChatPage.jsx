import styles from '../styles/ChatPage.module.css';
import { Link } from 'react-router-dom';

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
          <p className={styles.recipientName}>Name of Recipient</p>
        </div>
        <section className={styles.chatWindow}>
          <RecipientMessage message="Hi" />
          <RecipientMessage message="You alright?" />
          <RecipientMessage message="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor." />
          <SenderMessage message="Hey" />
          <SenderMessage message="I'm doing good" />
          <RecipientMessage message="Cool" />
          <SenderMessage message="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor." />
          <SenderMessage message="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor." />
          <SenderMessage message="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor." />
          <SenderMessage message="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor." />
          <SenderMessage message="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor." />
        </section>
        <div className={styles.messageInput}>
          <input type="text" />
          <button>Send</button>
        </div>
      </main>
    </>
  );
}

export default ChatPage;
