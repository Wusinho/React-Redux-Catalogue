import React from 'react';
import { useSelector } from 'react-redux';
import ChampLink from './ChampLink';
import Loading from './Loading';
import Category from './Category';
import { getChamps } from '../store/books';

const ChampList = () => {
  const loadingState = useSelector((state) => state.entities.champs.loading);
  const champs = useSelector(getChamps)
  const selectedCategory = useSelector((state) => state.entities.champs.category);

  // console.log(champsList)
  const selectedCat = (category) => {
    if (category === 'All') {
      return <ChampLink champs={champs} />;
    }
    const filterCHamps = champs.filter(
      (champ) => champ.tags[0] === category || champ.tags[1] === category,
    );
    return <ChampLink champs={filterCHamps} />;
  };

  return (
    <>
      <div>
        <Category />
      </div>
      <div className="card-group">
        {loadingState ? <Loading /> : selectedCat(selectedCategory)}
      </div>
    </>
  );
};

export default ChampList;
