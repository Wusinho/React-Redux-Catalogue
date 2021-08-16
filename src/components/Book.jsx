import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Book.scss';

const Book = ({ books }) => {
  const getBooks = Object.entries(books).map((item) => (item[1]));
  const getPicture = (name) => `url("https:ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg")`;

  return getBooks.map((book) => (
    <div
      className="card m-2 rounded-3 link__card"
      key={book.key}
      style={{
        minWidth: '300px',
        backgroundImage: getPicture(book.id),
      }}
    >
      <Link to={`/shop/${book.id}`} key={book.id}>

        <div
          className="card-body"
        >
          <h5 className="card-title">{book.title}</h5>
          <h2 className="card-title">{book.name}</h2>
        </div>
      </Link>

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
