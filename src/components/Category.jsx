import React from 'react';
import { useDispatch } from 'react-redux';
import categoriesList from './categoriesList';
import { champCategory } from '../store/books';

const Category = () => {
  const dispatch = useDispatch();
  const handleFilterCHange = (e) => {
    dispatch(champCategory(e.target.value));
  };

  return (
    <form>
      <select
        className="form-control"
        onChange={(e) => handleFilterCHange(e)}
      >
        <option defaultValue disabled>Choose a Category</option>
        <option key="0"> All </option>
        {categoriesList.map((cat) => (
          <option key={cat.id} value={cat.cat}>
            {cat.cat}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Category;
