import React, { useState } from 'react';
import Modal from 'react-modal';
import AppointmentForm from './AppointmentForm';

const AddCart = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const modalStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,0.85)',
    },
    content: {
      position: 'absolute',
      top: '15rem',
      left: '5rem',
      right: '5rem',
      bottom: '5rem',
      backgroundColor: 'paleturquoise',
      borderRadius: '1rem',
      padding: '1.5rem',
    },
  };

  return (
    <div className="App">
      <button type="button" className="btn btn-success" onClick={() => setShowModal(true)}>
        Add Champ
      </button>

      <Modal
        ariaHideApp={false}
        isOpen={showModal}
        contentLabel="PodoModal"
        shouldCloseOnOverlayClick
        style={modalStyle}
      >
        <div className="modal-body">
          <AppointmentForm />
          <button type="button" onClick={handleCloseModal}>Cancel</button>
        </div>
      </Modal>
    </div>
  );
};

export default AddCart;
