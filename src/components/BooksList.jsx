import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Loading from './Loading';

const BooksList = () => {
  const books = useSelector((state) => state.entities.books.list);
  const loadingState = useSelector((state) => state.entities.books.loading);

  console.log(books);
  return (
    loadingState ? <Loading /> : <Book book={books} />
  );
};

export default BooksList;
