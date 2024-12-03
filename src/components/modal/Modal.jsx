import React, { useEffect } from 'react';
import styles from './modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open'); // Останавливаем прокрутку 
    } else {
      document.body.classList.remove('modal-open'); // Включаем прокрутку 
    }

    return () => {
      document.body.classList.remove('modal-open'); // Очистка при размонтировании
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modal_close} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
