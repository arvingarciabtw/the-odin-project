import styles from '../styles/Modal.module.css';
import { useEffect } from 'react';

function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        {/* <button className={styles.close} onClick={onClose}> */}
        {/*   &times; */}
        {/* </button> */}
        {children}
      </div>
    </div>
  );
}

export default Modal;
