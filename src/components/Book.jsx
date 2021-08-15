import PropTypes from 'prop-types';
import React from 'react';

const getPicture = (champ) => `url("https:ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ}_0.jpg")`;

const Book = ({ books }) => {
  const getBooks = Object.entries(books).map((item) => (item[1]));

  return getBooks.map((book) => (
    <div
      className="card mb-3"
      key={book.key}
      style={{
        backgroundImage: getPicture(book.name),
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <h2 className="card-title">{book.name}</h2>
        <p className="card-text">{book.blurb}</p>
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
