//Подивитись на результат можна відкривши та запустивши my-modal-app
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './MyModal.css';

const MyModal = ({ open, disableGlobalScroll, children }) => {
  useEffect(() => {
    if (disableGlobalScroll) {
      document.body.style.overflow = open ? 'hidden' : 'auto';
    }
  }, [open, disableGlobalScroll]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default MyModal;
