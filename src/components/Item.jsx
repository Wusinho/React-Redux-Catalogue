import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import Champ from './Champ';

const Item = ({ match }) => {
  const [char, setChar] = useState({});
  const [img, setImg] = useState({});

  const fetchItem = async () => {
    const data = await fetch(
      `http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion/${match.params.id}.json`,
    );
    const items = await data.json();
    setChar(items.data);
  };

  const fetchImg = async () => {
    const data = await fetch(
      `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${match.params.id}_0.jpg`,
    );
    setImg(data.url);
  };

  useEffect(() => {
    fetchItem();
    fetchImg();
  }, []);

  return (
    <div>
      { char && img ? <Champ champ={char} img={img} /> : <Loading /> }
    </div>
  );
};

export default Item;

Item.defaultProps = {
  match: '',
};

Item.propTypes = {
  match: PropTypes.objectOf(Object),
};
