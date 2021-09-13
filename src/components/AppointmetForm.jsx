import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAppointments,
  selectCoachList,
  selectCurrentUserToken,
} from '../store/sessionSlice';
import { selectChamp } from '../store/books';
import '../style/Signin.scss';

const modalStyle = {
  overlay: {
    'margin-top': '30%',
    height: '50%',
    backgroundColor: 'none',
    border: 'none',
  },
  content: {
    backgroundColor: 'rgba(194, 194, 194, 0.8)',
    'max-width': '50%',
    'min-width': '100%',
    border: 'none',
    height: '310px',
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
        className="button mb-3"
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
        <div className="">
          <form onSubmit={handleSubmit} className="login">
            <label htmlFor="coach_id" className="mb-3">
              Select a Coach
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
            </label>
            <label htmlFor="date" className="mb-3">
              Select a date for the appointment
              <input type="date" name="date" onChange={handleChange} className="form-control" />
            </label>
            <button type="submit" className="button">Add booking</button>
          </form>
          <button type="button" className="button" onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AppointmetForm;
