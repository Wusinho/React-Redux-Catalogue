import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Loading from './Loading';
import Champ from './Champ';
import { champSelection, loadselected } from '../store/books'

const SelectedChamp = ({ match }) => {
  const ID = match.params.id;
  const char = useSelector((state) => state.entities.champs.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadselected(ID));
  }, []);

  return (
    <div className="champ__container">
      { char ? <Champ champ={char} /> : <Loading /> }
    </div>
  );
};

export default SelectedChamp;

SelectedChamp.defaultProps = {
  match: '',
};

SelectedChamp.propTypes = {
  match: PropTypes.objectOf(Object),
};
