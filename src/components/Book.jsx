import PropTypes from 'prop-types';
import React from 'react';

const Book = ({ books }) => {
  const getBooks = Object.entries(books).map((item) => (item[1]));
  const getPicture = (name) => `url("https:ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg")`;

  return getBooks.map((book) => (
    <div
      className="card m-2 rounded-3 book__card"
      key={book.key}
    >
      <div
        className="card-body"
        style={{
          backgroundImage: getPicture(book.id),
        }}
      >
        <h5 className="card-title">{book.title}</h5>
        <h2 className="card-title">{book.name}</h2>
      </div>
    </div>
  ));
};

export default Book;

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
