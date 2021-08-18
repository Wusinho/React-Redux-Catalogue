import React from 'react';
import { useDispatch } from 'react-redux';
import categoriesList from './categoriesList';
import changeFilter from '../store/filteractions';

const Navbar = () => {
  const dispatch = useDispatch();
  const handleFilterCHange = (e) => {
    dispatch(changeFilter(e.target.value));
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

export default Navbar;
