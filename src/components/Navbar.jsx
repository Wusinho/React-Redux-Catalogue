import React from 'react';
import categories from './categories';

const Navbar = () => {
  const handleFilterCHange = (e) => {
    console.log(e.target.value);
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Navbar</span>
      </div>
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
    </nav>
  );
};

export default Navbar;
