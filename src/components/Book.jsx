import PropTypes from 'prop-types';
import React from 'react';

const Book = ({ books }) => books.map((book) => (
  <div className="card my-3" key={book.key}>
    <div className="card-body">
      <h6 className="card-subtitle mb-2 text-muted">{book.title}</h6>
      <h5 className="card-title">{book.name}</h5>
      <p className="card-text">{book.blurb}</p>
    </div>
  </div>
));

Book.defaultProps = {
  book: {
    id: '',
    name: '',
    status: '',
    species: '',
  },
};

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.array,
};
export default Book;
