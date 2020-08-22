import React, { useState } from 'react';
import ReactModal from 'react-modal';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <span>Ponto de coleta criado.</span>
    </ReactModal>
  );
}

export default Modal;