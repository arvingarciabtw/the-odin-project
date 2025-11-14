import styles from '../styles/Modal.module.css';

function Modal({ isOpen, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
}

export default Modal;
