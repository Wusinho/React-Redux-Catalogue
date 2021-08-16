import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Loading from './Loading';

const BooksList = () => {
  const books = useSelector((state) => state.entities.books.list);
  const loadingState = useSelector((state) => state.entities.books.loading);
  const selectedCategory = useSelector((state) => state.entities.filter);

  const selectedCat = (category) => {
    if (category === 'All') {
      return <Book books={books} />;
    }
    const getBooks = Object.entries(books).map((item) => item[1]);
    const filterbooks = getBooks.filter(
      (book) => book.tags[0] === category || book.tags[1] === category,
    );
    return <Book books={filterbooks} />;
  };

  return (
    <div className="card-group">
      {loadingState ? <Loading /> : selectedCat(selectedCategory)}
    </div>
  );
};

export default BooksList;
