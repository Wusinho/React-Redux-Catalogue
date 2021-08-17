import PropTypes from 'prop-types';
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style/Book.scss';

const Book = ({ books }) => {
  const [img, setImg] = useState('');
  setImg('prubea');
  console.log(img);
  const getBooks = Object.entries(books).map((item) => (item[1]));

  const fetchImg = (name) => {
    axios.get(`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`)
      .then((response) => { console.log(response); })
      .catch((error) => { console.log(error.message); });
  };

  // const fetchImg = async (name) => {
  //   const data = await fetch(
  //     `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`,
  //   );
  //   setImg(data.url);
  // };
  // console.log(img);

  return getBooks.map((book) => (
    <div
      className="card m-2 rounded-3 link__card"
      key={book.key}
      style={{
        minWidth: '300px',
        backgroundImage: fetchImg(book.id),
        backgroundColor: 'black',
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
