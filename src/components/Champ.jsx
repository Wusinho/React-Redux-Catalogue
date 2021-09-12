import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import AddCart from './AddCart';
import { selectedChampTags } from '../store/books';
import '../style/Champ.scss';

function Champ({ champ }) {
  const dispatch = useDispatch();
  const char = Object.entries(champ).map((item) => (item[1]));
  const chartags = Object.entries(champ).map((item) => (item[1].tags));
  const getPicture = (name) => `url("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg")`;

  useEffect(() => {
    dispatch(selectedChampTags(chartags));
  });

  return char.map((demacia) => (
    <div
      key={demacia.key}
      style={{
        backgroundImage: getPicture(demacia.id),
      }}
      className="champ__card border-0 rounded-0"
    >
      <div
        className="champ__body"
        key={demacia.key}
      >
        <h5 className="card-title">{demacia.title}</h5>
        <h2 className="card-title">{demacia.name}</h2>
        <p className="card-title">{demacia.lore}</p>
        <div className="champ__tips">
          <div className="card-title">{demacia.allytips}</div>
          <div className="card-title">{demacia.enemytips}</div>
        </div>
      </div>
      <AddCart />
    </div>
  ));
}

export default Champ;

Champ.defaultProps = {
  champ: {
    key: '',
    title: '',
    name: '',
    lore: '',
    allytips: '',
    enemytips: '',
  },
};

Champ.propTypes = {
  champ: PropTypes.objectOf(Object),
};
