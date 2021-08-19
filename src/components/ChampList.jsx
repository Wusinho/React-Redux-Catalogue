import React from 'react';
import { useSelector } from 'react-redux';
import ChampLink from './ChampLink';
import Loading from './Loading';
import Category from './Category';
import categoriesList from './categoriesList';

const ChampList = () => {
  const champs = useSelector((state) => state.entities.champ.list);
  const loadingState = useSelector((state) => state.entities.champ.loading);
  const selectedCategory = useSelector((state) => state.entities.filter);

  const selectedCat = (category) => {
    if (category === 'All') {
      return <ChampLink champs={champs} />;
    }
    const getChamps = Object.entries(champs).map((item) => item[1]);
    const filterCHamps = getChamps.filter(
      (champ) => champ.tags[0] === category || champ.tags[1] === category,
    );
    return <ChampLink champs={filterCHamps} />;
  };

  return (
    <>
      <div>
        <Category categoriesList={categoriesList} />
      </div>
      <div className="card-group">
        {loadingState ? <Loading /> : selectedCat(selectedCategory)}
      </div>
    </>
  );
};

export default ChampList;
