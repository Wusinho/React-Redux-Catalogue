import React from 'react';
import { useDispatch } from 'react-redux';
import categories from './categories';
import changeFilter from '../store/filteractions';

const Navbar = () => {
  const dispatch = useDispatch();
  const handleFilterCHange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        <form>
          <select
            className="form-control"
            onChange={(e) => handleFilterCHange(e)}
          >
            <option defaultValue disabled>Choose a Category</option>
            <option key="0"> All </option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.cat}>
                {cat.cat}
              </option>
            ))}
          </select>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
