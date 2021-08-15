import PropTypes from 'prop-types';
import React from 'react';

const Book = ({ books }) => Object.keys(books).forEach((key) => {
  <div className="card my-3" key={books[key].key}>
    <div className="card-body">
      <h6 className="card-subtitle mb-2 text-muted">{books[key].id}</h6>
    </div>
  </div>;
});

Book.defaultProps = {
  book: {
    id: '',
    name: '',
    status: '',
    species: '',
  },
};

Book.propTypes = {
  books: PropTypes.objectOf(Object),
};
export default Book;
