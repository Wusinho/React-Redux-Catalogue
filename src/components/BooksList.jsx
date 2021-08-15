import React from 'react';
import { useSelector } from 'react-redux';
// import Book from './Book';
import Loading from './Loading';

const BooksList = () => {
  const books = useSelector((state) => state.entities.books.list.data);

  console.log(books);
  return (
    books ? <Loading /> : <Loading />
  );
};

export default BooksList;
