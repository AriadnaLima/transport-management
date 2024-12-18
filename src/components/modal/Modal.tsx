import React from 'react';
import './modal.css'; 

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: () => JSX.Element;
}

const Modal = ({ isOpen, onClose, title, content }: ModalProps) => {
  if (!isOpen) return null; 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        {content()}
      </div>
    </div>
  );
};

export default Modal;
