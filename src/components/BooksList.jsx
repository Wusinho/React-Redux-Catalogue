import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Loading from './Loading';

const BooksList = () => {
  const getBooks = useSelector((state) => state.entities.books.list);
  const loadingState = useSelector((state) => state.entities.books.loading);

  const books = Object.entries(getBooks).map((item) => (item[1]));

  return (
    loadingState ? <Loading /> : <Book books={books} />
  );
};

export default BooksList;
