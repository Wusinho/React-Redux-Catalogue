import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Loading from './Loading';

const BooksList = () => {
  const books = useSelector((state) => state.entities.books.list.results);

  return (
    books ? <Book books={books} /> : <Loading />
  );
};

export default BooksList;
