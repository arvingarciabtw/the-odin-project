import styles from '../styles/Modal.module.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className={styles.modalBackground}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
}

export default Modal;
