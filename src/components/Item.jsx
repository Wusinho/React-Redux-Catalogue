import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Item = ({ match }) => {
  const [char, setChar] = useState({
    image: {},
  });

  const fetchItem = async () => {
    const data = await fetch(
      `http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion/${match.params.id}.json`,
    );
    const items = await data.json();
    setChar(items.data);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  console.log(char);
  return (
    <div>
      {/* <h1>{char.name}</h1>
      <h1>{char.species}</h1>
      <h1>{char.gender}</h1>
      <img src={char.image} alt="" /> */}
      <h1>champ</h1>
    </div>
  );
};

export default Item;

Item.defaultProps = {
  match: '',
};

Item.propTypes = {
  match: PropTypes.string,
};
