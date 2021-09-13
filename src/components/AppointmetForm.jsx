import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAppointments,
  selectCoachList,
  selectCurrentUserToken,
} from '../store/sessionSlice';
import { selectChamp } from '../store/books';

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

const AppointmetForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const dispatch = useDispatch();
  const champ = useSelector(selectChamp);
  const coaches = useSelector(selectCoachList);
  const token = useSelector(selectCurrentUserToken);
  const champion = (Object.entries(champ).map((item) => (item[1].name))).toString();
  const role = (Object.entries(champ).map((item) => (item[1].id))).toString();
  const [app, setApp] = useState({
    coach_id: '',
    date: '',
    role,
    champion,
  });

  const handleSubmit = (e) => {
    dispatch(setAppointments(token, app));
    setShowModal(false);
    e.preventDefault();
  };

  const handleChange = (e) => {
    setApp({
      ...app,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App">
      <button
        type="button"
        className="btn btn-success"
        onClick={() => setShowModal(true)}
      >
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
          <form onSubmit={handleSubmit}>
            <select
              className="form-control"
              onChange={handleChange}
              name="coach_id"
            >
              <option key="0" disabled>
                Choose
              </option>
              {coaches.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.country}
                </option>
              ))}
            </select>
            <input type="date" name="date" onChange={handleChange} />
            <button type="submit">Add booking</button>
          </form>
          <button type="button" onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AppointmetForm;
