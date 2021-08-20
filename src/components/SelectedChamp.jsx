import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Loading from './Loading';
import Champ from './Champ';
import champSelected from '../store/championaction';

const SelectedChamp = ({ match }) => {
  const ID = match.params.id;
  const [char, setChar] = useState({});
  const dispatch = useDispatch();

  const fetchChamp = async () => {
    axios.get(
      `https://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion/${ID}.json`,
    ).then((response) => {
      const res = response.data;
      setChar(res.data);
    }).catch((err) => { setChar(err.message); });
    dispatch(champSelected(ID));
  };

  useEffect(() => {
    fetchChamp();
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
