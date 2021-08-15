import PropTypes from 'prop-types';
import React from 'react';

const Book = ({ book }) => (
  <div className="card my-3" key={book.id}>
    <div className="card-body">
      <h6 className="card-subtitle mb-2 text-muted">{book.name}</h6>
      <h5 className="card-title">{book.status}</h5>
      <p className="card-text">{book.species}</p>
    </div>
  </div>
);
Book.defaultProps = {
  book: {
    id: '',
    name: '',
    status: '',
    species: '',
  },
};

Book.propTypes = {
  book: PropTypes.objectOf(Object),
};
export default Book;
