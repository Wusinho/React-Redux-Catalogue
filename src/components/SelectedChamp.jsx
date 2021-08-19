import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Loading from './Loading';
import Champ from './Champ';
import champSelected from '../store/championaction';

const SelectedChamp = ({ match }) => {
  const [char, setChar] = useState({});
  const [img, setImg] = useState({});
  const dispatch = useDispatch();

  const fetchChamp = async () => {
    const data = await fetch(
      `http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion/${match.params.id}.json`,
    );
    dispatch(champSelected(match.params.id));
    const items = await data.json();
    setChar(items.data);
  };

  const fetchImg = async () => {
    const data = await fetch(
      `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${match.params.id}_0.jpg`,
    );
    setImg(data);
  };

  useEffect(() => {
    fetchChamp();
    fetchImg();
  }, []);

  return (
    <div className="champ__container">
      { char && img ? <Champ champ={char} img={img} /> : <Loading /> }
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
